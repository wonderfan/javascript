define("my/mydiv",["dojo/_base/declare",
           "dijit/_WidgetBase",
           "dijit/_TemplatedMixin",
           "dojo/text!./templates/mydiv.html"],function(declare, _WidgetBase, _TemplatedMixin, template){
	
	 return declare([_WidgetBase, _TemplatedMixin], {
         templateString: template,
         buildRendering: function(){
             this.inherited(arguments);
            this.name.innerHTML="good idea";
        }
     });
	
});


define("my/me",["dojo/dom"], function(dom){  
    var oldText = {}; 
    return {
        setText: function(id, text){
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },
        restoreText: function(id){
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    };
});
