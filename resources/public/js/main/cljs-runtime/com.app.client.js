goog.provide('com.app.client');
com.app.client.setup_RAD = (function com$app$client$setup_RAD(app){
com.fulcrologic.rad.application.install_ui_controls_BANG_(app,com.fulcrologic.rad.rendering.semantic_ui.semantic_ui_controls.all_controls);

return com.fulcrologic.rad.report.install_formatter_BANG_(app,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"affirmation","affirmation",1356412315),(function (_,value){
if(cljs.core.truth_(value)){
return "yes";
} else {
return "no";
}
}));
});
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.client !== 'undefined') && (typeof com.app.client.app !== 'undefined')){
} else {
com.app.client.app = com.fulcrologic.rad.application.fulcro_rad_app(cljs.core.PersistentArrayMap.EMPTY);
}
com.app.client.refresh = (function com$app$client$refresh(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.app.client",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reinstalling controls"], null);
}),null)),null,1727789531,null);

com.app.client.setup_RAD(com.app.client.app);

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(com.app.client.app);

return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(com.app.client.app,com.app.ui.Root,"app");
});
com.app.client.init = (function com$app$client$init(){
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),com.fulcrologic.fulcro.algorithms.timbre_support.console_appender()], null)], null));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.app.client",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting App"], null);
}),null)),null,-585874562,null);

com.fulcrologic.fulcro.application.set_root_BANG_(com.app.client.app,com.app.ui.Root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),true], null));

com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_(com.app.client.app);

com.app.client.setup_RAD(com.app.client.app);

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.client.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todos"], null));

return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.client.app,com.app.ui.Root,"app",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false], null));
});

//# sourceMappingURL=com.app.client.js.map
