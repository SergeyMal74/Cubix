//

webix.ready(function () {
    var m_tablet = $$("tablet");

    m_tablet.addView({
        type: "space",
        align: "center",
        margin: 20,
        rows: [
            {
                // Раздел Host
                // ссылка на страницу мониторинга
                // label с именем хоста и общей загрузкой системы
                // размер ОЗУ
                // время аптайма
                template: "col 2",
                type: "wide",
                css: "tablet",
                rows: [
                    {
                        cols: [
                            {view: "icon", icon: "fas fa-microchip"},
                            {
                                view: "label",
                                label: "<span class='tablet_main_text'>Host</span>",
                                align: "left",
                                width: "70"
                            },
                            {
                                view: "button",
                                value: "Monitoring",
                                align: "center",
                                width: "100",
                                click: function () {
                                    console.log("To monitoring ->")
                                    location.assign("/templates/monitoring.html")
                                }
                            },
                            {template: ""}
                        ]
                    },
                    {
                        cols: [
                            {template: "", width: 20},
                            {
                                rows: [
                                    {
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<span class='tablet_main_text'> Host: </span>",
                                                align: "left",
                                                width: "70"
                                            },
                                            {
                                                // Наименование ОС + верися
                                                view: "label",
                                                label: "<span class='tablet_main_text'>Debian 10 (buster)</span>",
                                                align: "left",
                                            }
                                        ]
                                    },
                                    {
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>Kernel: </span>",
                                                align: "left",
                                                width: "70"
                                            },
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>5.4.0-59-generic</span>",
                                                align: "left",
                                            },
                                            {template: ""}
                                        ]
                                    },
                                    {
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>Uptime: </span>",
                                                align: "left",
                                                width: "70"
                                            },
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>8 hours, 38 mins</span>",
                                                align: "left",
                                            },
                                            {template: ""}
                                        ]
                                    },
                                    {
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>CPU(s): </span>",
                                                align: "left",
                                                width: "70"
                                            },
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>Intel i5 760 (4) 2.801GHz</span>",
                                                align: "left",
                                            },
                                            {template: ""}
                                        ]
                                    },
                                    {
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>GPU(s): </span>",
                                                align: "left",
                                                width: "70"
                                            },
                                            {
                                                view: "label",
                                                label: "<span class='tablet_local_text'>NVIDIA GeForce GTX 1050 Ti</span>",
                                                align: "left",
                                            },
                                            {template: ""}
                                        ]
                                    },
                                    {template: ""}
                                ]
                            },
                            {template: ""}
                        ]
                    },
                    {}
                ]
            },
            {
                template: "col 2",
                type: "wide",
                css: "tablet",
                // <i class="fas fa-italic"></i>
                rows: [
                    {
                        cols: [
                            {view: "icon", icon: "fas fa-italic"},
                            {view: "label", label: "<span class='tablet_main_text'> APIs</span>", align: "left"},
                            {}
                        ]
                    },
                    {}
                ]
            },
            {
                template: "col 2",
                type: "wide",
                css: "tablet",
                rows: [
                    {
                        cols: [
                            // <i class="fas fa-graduation-cap"></i>
                            {view: "icon", icon: "fas fa-graduation-cap"},
                            {
                                view: "label",
                                label: "<span class='tablet_main_text'> Getting started</span>",
                                align: "left"
                            },
                            {}
                        ]
                    },
                    {}
                ]
            },
            {
                template: "col 2",
                type: "wide",
                css: "tablet",
                rows: [
                    {
                        cols: [
                            {view: "icon", icon: "fas fa-book"},
                            {
                                view: "label",
                                label: "<span class='tablet_main_text'> Documentation</span>",
                                align: "left"
                            },
                            {}
                        ]
                    },
                    {}
                ]
            }
        ]

    }, 0);
});


// =====================================================================================================================

params = "url=amazon.com/gp/aw "
request = new ajaxRequest()
request.open("POST", "http://localhost:5000/host", true)
request.setRequestHeader("Content-type", "application/x-www-from-urlencoded")

request.setRequestHeader("Content-length", params.length)
request.setRequestHeader("Connection", "close")

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            if (this.responseText != null) {
                document.getElementById('info').innerHTML =
                    this.responseText
            } else {
                console.log("Ошибка AJAX: Данные не получены")
            }
        } else {
            console.log("Ошибка AJAX: " + this.statusText)
        }
    }
}

request.send(params)

function ajaxRequest() {
    return new XMLHttpRequest()
}
