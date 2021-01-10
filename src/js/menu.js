//


webix.ready(function () {
    webix.ui({
        id: "layout1",
        rows: [
            {
                view: "toolbar",
                css: "webix_dark",
                elements: [
                    {
                        view: "button", type: "icon", icon: "fas fa-bars",
                        width: 37,
                        align: "left",
                        css: "app_button",
                        click: function () {
                            $$("$sidebar1").toggle()
                        }
                    },
                    {},
                    {
                        view: "button", type: "icon", icon: "fas fa-home",
                        width: 37,
                        align: "left",
                        css: "app_button",
                        click: function ()
                        {
                            console.log("To home ->")
                            location.assign("/")
                        }
                    },
                    {
                        view: "button", type: "icon", icon: "fas fa-bell",
                        width: 37,
                        align: "left",
                        css: "app_button",
                    }
                ]
            },
            {
                id: "main_cols",
                cols: [
                    {
                        view: "sidebar",
                        css: "webix_dark",
                        data: menuConfigure()
                    },
                    {
                        id: "tablet",
                        cols: []
                    }
                ]
            }
        ]
    });
});
