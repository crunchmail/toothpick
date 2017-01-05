var fct = {
    convertToNode: function(element) {
        var docNode = "";
        if (typeof element === "string") {
            if (window.DOMParser) {
                var parser = new DOMParser();
                docNode = parser.parseFromString(element,"text/xml");
            } else { // Microsoft strikes again
                docNode = new ActiveXObject("Microsoft.XMLDOM");
                docNode.async = false;
                docNode.loadXML(element);
            }
            element = docNode.firstChild;
        }
        return element;
    },
    convertTemplate: function(idElement) {
        var template = document.getElementById(idElement);
        var tr = template.rows;

        var wrapperTpl = {
            "type":"container",
            "is_container": true,
            "tplContainer":"list",
            "columns":[]
        };

        var arrWrapper = [];

        var td = tr[0].cells;

        var childsTd = td[0].children;

        for(var c=0; c<childsTd.length; c++) {
            var tableChildTds = childsTd[c].children[0];
            var tdsTableChildTds = tableChildTds.rows[0].cells[0];
            var widthtable = getComputedStyle(tdsTableChildTds).width.split("px");
            var divPadding = getComputedStyle(tdsTableChildTds.children[0]).padding.split("px");
            var objTds = {
                "type": "container",
                "is_container": true,
                "tplContainer": "listNoDrop",
                "columns": [],
                "cellClasses": [],
                "divClass":childsTd[c].className,
                "classContainer": tableChildTds.className,
                "widthTable": widthtable[0],
                "divPadding": divPadding[0]
            };
            //console.log(childsTd[c]);
            for(var d = 0; d < tdsTableChildTds.children.length; d++) {
                var childs = tdsTableChildTds.children[d];
                // var item = {
                //   "type": "container"
                //   "is_container": true,
                //   "tplContainer": "listNoDrop",
                // }
                var arrTds = [];
                //var getCellsClasses = childs.getAttribute("class");
                var getCellsClasses = childs.getAttribute("class");

                //arrTds.divCellClass = childs.
                for(var i = 0; i < childs.children.length; i++) {
                    var html = childs.children[i].outerHTML;

                    var item = {
                        "type": "item",
                        "tdClass":childs.children[i].className,
                        "html":html,
                        "editor_conf": childs.children[i].getAttribute('data-conf')
                    };
                    arrTds.push(item);
                    arrTds.cellClasses = getCellsClasses;
                }
                objTds.cellClasses.push(getCellsClasses);
                objTds.columns.push(arrTds);

            }
            arrWrapper.push(objTds);
        }
        //wrapperTpl['columns'].push(arrWrapper);
        return arrWrapper;
    },
    inlineCssToothpaste: function(idElement) {
        var style = document.getElementById(idElement);
        style = style.innerHTML;

        style = style.replace(/(\r\n|\n|\r)/gm,"");
        style = style.replace(/\s+/g," ");

        return style;
    }
};
