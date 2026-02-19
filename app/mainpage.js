Ext.define("TDK.mainpage", {
  extend: "Ext.panel.Panel",
  id: "mainpage",
  alias: "widget.mainpage",
  pid: "mainpage",

  requires: [
    "TDK.Cmainpage",
    "TDK.formm.form",
    "TDK.Grid",
    "TDK.gaji"
  ],

  controller: "Cmainpage",
  items: [
    {
      xtype: 'Grid'
    }
  ],
  dockedItems: [
        {
          xtype: "toolbar",
          height: 30,
          dock: "top",
          items: [
            "-",
            { 
              text: "Refresh", 
              icon: vconfig.getstyle + "/icon/refresh.gif ",
              handler: "onRefresh"
            },
            "-",
            { 
              text: "New Input", 
              handler: "onNewInput",  // ← Handler untuk buka FROMpo
              icon: vconfig.getstyle + "/icon/add.png"
            },
            "-",
            { 
              text: "posting", 
              handler: "onNewInput",  // ← Handler untuk buka FROMpo
              icon: vconfig.getstyle + "/icon/lock.png"
            },
          ]
        }
      ],
});