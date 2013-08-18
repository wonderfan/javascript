//The conflict is caused by two libraries using the same literal object,so it can be fixed when the object reference is restored to the right one.

var previousWonderfan = window.wonderfan;

wonderfan.noConflict = function(){

window.wonderfan = previousWonderfan;

return this;

};
