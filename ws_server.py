# WS server example that synchronizes state across clients

import asyncio
import json
import logging
import websockets

logging.basicConfig()

STATE = {"value": 0}

USERS = set()

from threading import Thread

def state_event():
    return json.dumps({"type": "state", **STATE})


class WSServer(Thread):

    def __init__(self):
        """
        Инициализация потока
        """
        Thread.__init__(self)

    def users_event(self):
        return json.dumps({"type": "users", "count": len(USERS)})

    async def notify_state(self):
        if USERS:
            message = state_event()
            await asyncio.wait([user.send(message) for user in USERS])

    async def notify_users(self):
        if USERS:
            message = self.users_event()
            await asyncio.wait([user.send(message) for user in USERS])

    async def register(self, websocket):
        USERS.add(websocket)
        await self.notify_users()

    async def unregister(self, websocket):
        USERS.remove(websocket)
        await self.notify_users()

    async def counter(self, websocket, path):
        # register(websocket) sends user_event() to websocket
        await self.register(websocket)
        try:
            await websocket.send(state_event())
            async for message in websocket:
                data = json.loads(message)
                if data["action"] == "minus":
                    STATE["value"] -= 1
                    await self.notify_state()
                elif data["action"] == "plus":
                    STATE["value"] += 1
                    await self.notify_state()
                else:
                    logging.error("unsupported event: {}", data)
        finally:
            await self.unregister(websocket)

    def run(self):
        start_server = websockets.serve(self.counter, "localhost", 6789)
        asyncio.get_event_loop().run_until_complete(start_server)
        asyncio.get_event_loop().run_forever()
