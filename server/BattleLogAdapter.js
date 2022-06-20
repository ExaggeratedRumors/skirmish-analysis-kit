
(function() {
    "use strict";
    const isNI = typeof Engine != "undefined" && typeof API != "undefined";
    var forceUpdate = setInterval(function(){
        if(typeof Engine.battle == "object"){
            (function(battle) {
                Engine.battle.update = function() {
                    if (isset(arguments[0].init)){
                        message("Start walki.");
                    }
                    if (isset(arguments[0].m)) {
                        var savedLogs = [];
                        for (var i in arguments[0].m) {
                              if (arguments[0].m[i].indexOf('winner=') > -1) {
                                for(var p in arguments[0].m){
                                    var value = [];
                                    for(var q in arguments[0].m[p]){
                                        if(arguments[0].m[p][q]==' '||arguments[0].m[p][q]=='='){
                                            savedLogs.push(value);
                                            window.log(value);
                                            window.log('\n');
                                            value = [];
                                        }
                                        else value.push(arguments[0].m[p][q]);
                                    }
                                    //window.log(arguments[0].m[p][1]);
                                    //window.log('\n');
                                    //savedLogs.push(arguments[0].m[p]);
                                    //savedLogs.push('\n');
                                }
                                message("Zapisano log walki.");
                            }
                        }
                    }
                    battle.apply(this, arguments);
                }
            })(Engine.battle.update);
            clearInterval(forceUpdate);
        }
    },100);
})()
