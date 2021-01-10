// Массив пунктов меню пользователя
var menu_data = [

    {
        id: "vm", icon: "fas fa-microchip", value: "Virtual Machines"
    },

    {
        id: "ig", icon: "fas fa-layer-group", value: "Instance groups"
    },

    {
        id: "it", icon: "fas fa-object-ungroup", value: "Instance templates"
    },

    {
        id: "dsk", icon: "fas fa-hdd", value: "Disks"
    },

    {
        id: "snp", icon: "fas fa-camera-retro", value: "Snapshots"
    },

    {
        // <i class="fas fa-border-none"></i>
        id: "img", icon: "fas fa-border-none", value: "Images"
    },

    {
        // <i className="fas fa-align-justify"></i>
        id: "mtd", icon: "fas fa-align-justify", value: "Metadata"
    },

    {
        // <i class="fas fa-briefcase-medical"></i>
        id: "hc", icon: "fas fa-briefcase-medical", value: "Health checks"
    },

    {
        // <i class="fas fa-th-large"></i>
        id: "zn", icon: "fas fa-th-large", value: "Zones"
    },

    {
        // <i class="far fa-clock"></i>
        id: "opr", icon: "fas fa-clock", value: "Operations"
    },

    {
        // <i class="fas fa-glass-whiskey"></i>
        id: "qts", icon: "fas fa-glass-whiskey", value: "Quotas"
    },

    {
        id: "stg", icon: "fas fa-cog", value: "Settings"
    },

    {
        // <i class="fas fa-question-circle"></i>
        id: "hlp", icon: "fas fa-question-circle", value: "Help"
    }

    // {
    //     id: "vm", icon: "fas fa-microchip", value: "Virtual Machines", data: [
    //         {id: "vm1", value: "VM instances"},
    //         {id: "vm2", value: "Instance templates"},
    //         {id: "vm3", value: "Sole-tenant nodes"},
    //         {id: "vm4", value: "Machine images"},
    //         {id: "vm5", value: "TPUs"},
    //         {id: "vm6", value: "Migrate for compute engine"},
    //         {id: "vm7", value: "Commited use discounts"}
    //     ]
    // },
    // {
    //     id: "storage", icon: "fas fa-database", value: "Storage", data: [
    //         {id: "st1", value: "Disks"},
    //         {id: "st2", value: "Snapshots"},
    //         {id: "st3", value: "Images"}
    //     ]
    // },
    // {
    //     id: "instance", icon: "fas fa-layer-group", value: "Instance groups", data: [
    //         {id: "ig1", value: "Instance groups"},
    //         {id: "ig2", value: "Health checks"}
    //     ]
    // },
    // {
    //     id: "firewall", icon: "fas fa-fire-alt", value: "Firewall", data: [
    //         {id: "", value: ""},
    //         {id: "", value: ""}
    //     ]
    // },
    // {
    //     id: "settings", icon: "fas fa-cog", value: "Settings", data: [
    //         {id: "sg1", value: "Metadata"},
    //         {id: "sg2", value: "Zones"},
    //         {id: "sg3", value: "Network endpoint groups"},
    //         {id: "sg4", value: "Operations"},
    //         {id: "sg5", value: "Security scans"},
    //         {id: "sg6", value: "Settings"}
    //     ]
    // }
];

// Пункты меню для администратора
var admin_menu = [
    {
        id: "adm", icon: "fab fa-slack-hash", value: "Administration", data: [
            {id: "adm1", value: "Users"},
            {id: "adm2", value: "Groups"},
            {id: "adm3", value: "LDAP"},
        ]
    }
];

// Тестовая переменная для отладки
var m_root = true;

// Пользователь root?
function isRoot() {
    return m_root;
}

// Сборка пунктов меню для админа или юзера
function menuConfigure() {
    if (isRoot()) {
        return admin_menu.concat(menu_data);
    } else {
        return menu_data;
    }
}

