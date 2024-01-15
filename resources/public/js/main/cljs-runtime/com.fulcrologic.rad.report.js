goog.provide('com.fulcrologic.rad.report');
/**
 * Returns the ident of a RAD report. The parameter can be a react instance, a class, or the registry key(word)
 * of the report.
 */
com.fulcrologic.rad.report.report_ident = (function com$fulcrologic$rad$report$report_ident(report_class_or_registry_key){
if((report_class_or_registry_key instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),report_class_or_registry_key], null);
} else {
var G__87314 = report_class_or_registry_key;
var G__87315 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__87314,G__87315) : com.fulcrologic.fulcro.components.get_ident.call(null,G__87314,G__87315));
}
});
com.fulcrologic.rad.report.render_layout = (function com$fulcrologic$rad$report$render_layout(report_instance){
var map__87316 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__87316__$1 = (((((!((map__87316 == null))))?(((((map__87316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87316):map__87316);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87316__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var layout_style = (function (){var or__4126__auto__ = (function (){var G__87319 = report_instance;
var G__87319__$1 = (((G__87319 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__87319) : com.fulcrologic.fulcro.components.component_options.call(null,G__87319)));
if((G__87319__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","layout-style","com.fulcrologic.rad.report/layout-style",-1879722909).cljs$core$IFn$_invoke$arity$1(G__87319__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var layout = (function (){var G__87320 = runtime_atom;
var G__87320__$1 = (((G__87320 == null))?null:cljs.core.deref(G__87320));
var G__87320__$2 = (((G__87320__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__87320__$1));
var G__87320__$3 = (((G__87320__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","style->layout","com.fulcrologic.rad.report/style->layout",-2137264366).cljs$core$IFn$_invoke$arity$1(G__87320__$2));
if((G__87320__$3 == null)){
return null;
} else {
return (layout_style.cljs$core$IFn$_invoke$arity$1 ? layout_style.cljs$core$IFn$_invoke$arity$1(G__87320__$3) : layout_style.call(null,G__87320__$3));
}
})();
if(cljs.core.truth_(layout)){
return (layout.cljs$core$IFn$_invoke$arity$1 ? layout.cljs$core$IFn$_invoke$arity$1(report_instance) : layout.call(null,report_instance));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for form layout style",layout_style], null);
}),null)),null,1855206569,null);

return null;
}
});
com.fulcrologic.rad.report.render_row = (function com$fulcrologic$rad$report$render_row(report_instance,row_class,row_props){
var map__87321 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__87321__$1 = (((((!((map__87321 == null))))?(((((map__87321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87321):map__87321);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87321__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var layout_style = (function (){var or__4126__auto__ = (function (){var G__87353 = report_instance;
var G__87353__$1 = (((G__87353 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__87353) : com.fulcrologic.fulcro.components.component_options.call(null,G__87353)));
if((G__87353__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","row-style","com.fulcrologic.rad.report/row-style",626537415).cljs$core$IFn$_invoke$arity$1(G__87353__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var render = (function (){var G__87354 = runtime_atom;
var G__87354__$1 = (((G__87354 == null))?null:cljs.core.deref(G__87354));
var G__87354__$2 = (((G__87354__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__87354__$1));
var G__87354__$3 = (((G__87354__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","row-style->row-layout","com.fulcrologic.rad.report/row-style->row-layout",-622996728).cljs$core$IFn$_invoke$arity$1(G__87354__$2));
if((G__87354__$3 == null)){
return null;
} else {
return (layout_style.cljs$core$IFn$_invoke$arity$1 ? layout_style.cljs$core$IFn$_invoke$arity$1(G__87354__$3) : layout_style.call(null,G__87354__$3));
}
})();
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$3 ? render.cljs$core$IFn$_invoke$arity$3(report_instance,row_class,row_props) : render.call(null,report_instance,row_class,row_props));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for form layout style",layout_style], null);
}),null)),null,594254592,null);

return null;
}
});
/**
 * Get the report controls renderer for the given report instance. Returns a `(fn [this])`.
 */
com.fulcrologic.rad.report.control_renderer = (function com$fulcrologic$rad$report$control_renderer(report_instance){
var map__87355 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__87355__$1 = (((((!((map__87355 == null))))?(((((map__87355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87355):map__87355);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87355__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var control_style = (function (){var or__4126__auto__ = (function (){var G__87358 = report_instance;
var G__87358__$1 = (((G__87358 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__87358) : com.fulcrologic.fulcro.components.component_options.call(null,G__87358)));
if((G__87358__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","control-style","com.fulcrologic.rad.report/control-style",1043015272).cljs$core$IFn$_invoke$arity$1(G__87358__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var control = (function (){var G__87359 = runtime_atom;
var G__87359__$1 = (((G__87359 == null))?null:cljs.core.deref(G__87359));
var G__87359__$2 = (((G__87359__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__87359__$1));
var G__87359__$3 = (((G__87359__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","control-style->control","com.fulcrologic.rad.report/control-style->control",-1096810425).cljs$core$IFn$_invoke$arity$1(G__87359__$2));
if((G__87359__$3 == null)){
return null;
} else {
return (control_style.cljs$core$IFn$_invoke$arity$1 ? control_style.cljs$core$IFn$_invoke$arity$1(G__87359__$3) : control_style.call(null,G__87359__$3));
}
})();
if(cljs.core.truth_(control)){
return control;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,85,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for report control style",control_style], null);
}),null)),null,-1048992178,null);

return null;
}
});
/**
 * Renders just the control section of the report. See also `control-renderer` if you desire rendering the controls in
 * more than one place in the UI at once (e.g. top/bottom).
 */
com.fulcrologic.rad.report.render_controls = (function com$fulcrologic$rad$report$render_controls(report_instance){
var fexpr__87360 = com.fulcrologic.rad.report.control_renderer(report_instance);
return (fexpr__87360.cljs$core$IFn$_invoke$arity$1 ? fexpr__87360.cljs$core$IFn$_invoke$arity$1(report_instance) : fexpr__87360.call(null,report_instance));
});
/**
 * [report-instance control-key]
 * 
 * Render a single control, wrapped by minimal chrome. This is just an alias for control/render-control.
 */
com.fulcrologic.rad.report.render_control = com.fulcrologic.rad.control.render_control;
com.fulcrologic.rad.report.global_events = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","clear-sort","event/clear-sort",457469097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
})], null)], null);
/**
 * Returns the report options from the current report actor.
 */
com.fulcrologic.rad.report.report_options = (function com$fulcrologic$rad$report$report_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___87831 = arguments.length;
var i__4737__auto___87832 = (0);
while(true){
if((i__4737__auto___87832 < len__4736__auto___87831)){
args__4742__auto__.push((arguments[i__4737__auto___87832]));

var G__87833 = (i__4737__auto___87832 + (1));
i__4737__auto___87832 = G__87833;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic = (function (uism_env,k_or_ks){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.component_options,com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549)),k_or_ks);
}));

(com.fulcrologic.rad.report.report_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.report.report_options.cljs$lang$applyTo = (function (seq87364){
var G__87365 = cljs.core.first(seq87364);
var seq87364__$1 = cljs.core.next(seq87364);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87365,seq87364__$1);
}));

/**
 * Path within the EDN stored on the URL (route params) where the given control key should be stored. When more than
 * one report is one the screen these would collide, so when it is a global control it can be stored just by key, but
 * when it is local it must be stored by report ID + key. This helper can be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.route_params_path = (function com$fulcrologic$rad$report$route_params_path(env,control_key){
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__87368 = (function (){var G__87370 = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var G__87371 = new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232);
var G__87372 = control_key;
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__87370,G__87371,G__87372) : com.fulcrologic.fulcro.components.component_options.call(null,G__87370,G__87371,G__87372));
})();
var map__87368__$1 = (((((!((map__87368 == null))))?(((((map__87368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87368):map__87368);
var control = map__87368__$1;
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87368__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var id = cljs.core.second(report_ident);
if(cljs.core.truth_((function (){var or__4126__auto__ = local_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (control == null);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,control_key], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [control_key], null);
}
});
com.fulcrologic.rad.report.initial_sort_params = (function com$fulcrologic$rad$report$initial_sort_params(env){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null),com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","initial-sort-params","com.fulcrologic.rad.report/initial-sort-params",597353424)], 0))], 0));
});
com.fulcrologic.rad.report.initialize_parameters = (function com$fulcrologic$rad$report$initialize_parameters(p__87376){
var map__87377 = p__87376;
var map__87377__$1 = (((((!((map__87377 == null))))?(((((map__87377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87377):map__87377);
var env = map__87377__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87377__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87377__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report_ident,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160));
var map__87379 = event_data;
var map__87379__$1 = (((((!((map__87379 == null))))?(((((map__87379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87379):map__87379);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87379__$1,new cljs.core.Keyword(null,"params","params",710516235));
var externally_controlled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87379__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","externally-controlled?","com.fulcrologic.rad.report/externally-controlled?",607281641));
var map__87380 = com.fulcrologic.rad.routing.history.current_route(app);
var map__87380__$1 = (((((!((map__87380 == null))))?(((((map__87380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87380):map__87380);
var history_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87380__$1,new cljs.core.Keyword(null,"params","params",710516235));
var sort_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647));
var selected_row = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(history_params,com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)));
var current_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(history_params,com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)),(1));
var controls = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)], 0));
var original_state_map = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env);
var initial_parameters = (function (){var G__87387 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),com.fulcrologic.rad.report.initial_sort_params(env),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601),current_page], null);
if(cljs.core.truth_(selected_row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87387,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398),selected_row);
} else {
return G__87387;
}
})();
var $ = env;
var $__$1 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic($,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_parameters,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(history_params,sort_path,cljs.core.PersistentArrayMap.EMPTY)], null)], 0))], 0));
return cljs.core.reduce_kv((function (new_env,control_key,p__87390){
var map__87391 = p__87390;
var map__87391__$1 = (((((!((map__87391 == null))))?(((((map__87391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87391):map__87391);
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87391__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var retain_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87391__$1,new cljs.core.Keyword(null,"retain?","retain?",-1235215764));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87391__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var param_path = com.fulcrologic.rad.report.route_params_path(env,control_key);
var event_value = taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,param_path),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,control_key));
var control_value_path = (cljs.core.truth_(local_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(report_ident,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control_key], 0)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),control_key,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null));
var state_value = ((retain_QMARK_ === false)?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_state_map,control_value_path));
var url_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(history_params,param_path);
var explicit_value = taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2(event_value,url_value);
var default_value__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(default_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app], 0));
var v = taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3(explicit_value,state_value,default_value__$1);
var skip_assignment_QMARK_ = (function (){var or__4126__auto__ = ((cljs.core.not(local_QMARK_))?externally_controlled_QMARK_:false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (v == null);
}
})();
if(cljs.core.truth_(skip_assignment_QMARK_)){
return new_env;
} else {
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(new_env,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control_value_path,v], 0));
}
}),$__$1,controls);
});
/**
 * Internal state machine helper. May be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.current_control_parameters = (function com$fulcrologic$rad$report$current_control_parameters(p__87395){
var map__87396 = p__87395;
var map__87396__$1 = (((((!((map__87396 == null))))?(((((map__87396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87396):map__87396);
var env = map__87396__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87396__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var controls = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(Report,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)) : com.fulcrologic.fulcro.components.component_options.call(null,Report,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)));
var controls__$1 = com.fulcrologic.rad.control.control_map__GT_controls(controls);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__87400){
var map__87401 = p__87400;
var map__87401__$1 = (((((!((map__87401 == null))))?(((((map__87401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87401):map__87401);
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87401__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87401__$1,new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504));
var v = (cljs.core.truth_(local_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(report_ident,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0))):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),id,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null)));
if((v == null)){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,id,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,controls__$1);
});
com.fulcrologic.rad.report.load_report_BANG_ = (function com$fulcrologic$rad$report$load_report_BANG_(env){
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__87404 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__87404__$1 = (((((!((map__87404 == null))))?(((((map__87404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87404):map__87404);
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87404__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var source_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87404__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859));
var load_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87404__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","load-options","com.fulcrologic.rad.report/load-options",-906938492));
var before_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87404__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","before-load","com.fulcrologic.rad.report/before-load",-776481349));
var load_options__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(load_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var current_params = com.fulcrologic.rad.report.current_control_parameters(env);
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report_ident,new cljs.core.Keyword("ui","loaded-data","ui/loaded-data",-1515082445));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.report",null,193,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loading report",source_attribute,(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_name.call(null,Report)),(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(BodyItem) : com.fulcrologic.fulcro.components.component_name.call(null,BodyItem))], null);
}),null)),null,-464347499,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4((function (){var G__87408 = env;
if(cljs.core.truth_(before_load)){
return (before_load.cljs$core$IFn$_invoke$arity$1 ? before_load.cljs$core$IFn$_invoke$arity$1(G__87408) : before_load.call(null,G__87408));
} else {
return G__87408;
}
})(),source_attribute,BodyItem,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),current_params,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.Keyword(null,"marker","marker",865118313),report_ident,new cljs.core.Keyword(null,"target","target",253001721),path], null),load_options__$1], 0))),new cljs.core.Keyword("state","loading","state/loading",-628573180));
});
/**
 * Generates filtered rows, which is an intermediate cached value (not displayed). This function is used in the
 * internal state machine, and may be useful when extending the pre-defined machine.
 */
com.fulcrologic.rad.report.filter_rows = (function com$fulcrologic$rad$report$filter_rows(p__87412){
var map__87413 = p__87412;
var map__87413__$1 = (((((!((map__87413 == null))))?(((((map__87413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87413):map__87413);
var uism_env = map__87413__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87413__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var all_rows = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748));
var parameters = com.fulcrologic.rad.report.current_control_parameters(uism_env);
var map__87415 = com.fulcrologic.rad.report.report_options(uism_env);
var map__87415__$1 = (((((!((map__87415 == null))))?(((((map__87415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87415):map__87415);
var row_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87415__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-visible?","com.fulcrologic.rad.report/row-visible?",1268447481));
var skip_filtering_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87415__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","skip-filtering?","com.fulcrologic.rad.report/skip-filtering?",1432335353));
if(cljs.core.truth_((function (){var and__4115__auto__ = row_visible_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(skip_filtering_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parameters], 0)) === true));
} else {
return and__4115__auto__;
}
})())){
var normalized_QMARK_ = (function (){var G__87420 = all_rows;
var G__87420__$1 = (((G__87420 == null))?null:cljs.core.first(G__87420));
if((G__87420__$1 == null)){
return null;
} else {
return edn_query_language.core.ident_QMARK_(G__87420__$1);
}
})();
var report = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var BodyItem = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report,com.fulcrologic.rad.report_options.BodyItem) : com.fulcrologic.fulcro.components.component_options.call(null,report,com.fulcrologic.rad.report_options.BodyItem));
var filtered_rows = cljs.core.filterv((function (row){
var row__$1 = (cljs.core.truth_(normalized_QMARK_)?com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,BodyItem,row):row);
return (row_visible_QMARK_.cljs$core$IFn$_invoke$arity$2 ? row_visible_QMARK_.cljs$core$IFn$_invoke$arity$2(parameters,row__$1) : row_visible_QMARK_.call(null,parameters,row__$1));
}),all_rows);
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),filtered_rows);
} else {
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),all_rows);
}
});
/**
 * Sorts the filtered rows. Input is the cached intermediate filtered rows, output is cached sorted rows (not visible). This function is used in the
 * internal state machine, and may be useful when extending the pre-defined machine.
 */
com.fulcrologic.rad.report.sort_rows = (function com$fulcrologic$rad$report$sort_rows(p__87429){
var map__87430 = p__87429;
var map__87430__$1 = (((((!((map__87430 == null))))?(((((map__87430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87430):map__87430);
var uism_env = map__87430__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87430__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__87433 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"sort-params","sort-params",-2134692887)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state_map], null)], 0));
var map__87433__$1 = (((((!((map__87433 == null))))?(((((map__87433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87433):map__87433);
var sort_params = map__87433__$1;
var desired_sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87433__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var all_rows = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716));
if(cljs.core.truth_(desired_sort_by)){
var compare_rows = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509)], 0));
var normalized_QMARK_ = (function (){var G__87435 = all_rows;
var G__87435__$1 = (((G__87435 == null))?null:cljs.core.first(G__87435));
if((G__87435__$1 == null)){
return null;
} else {
return edn_query_language.core.ident_QMARK_(G__87435__$1);
}
})();
var sorted_rows = (cljs.core.truth_(compare_rows)?(function (){var keyfn = (cljs.core.truth_(normalized_QMARK_)?(function (p1__87424_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,p1__87424_SHARP_);
}):cljs.core.identity);
var comparefn = (function (a,b){
return (compare_rows.cljs$core$IFn$_invoke$arity$3 ? compare_rows.cljs$core$IFn$_invoke$arity$3(sort_params,a,b) : compare_rows.call(null,sort_params,a,b));
});
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,comparefn,all_rows));
})():all_rows);
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),sorted_rows);
} else {
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),all_rows);
}
});
/**
 * Internal state machine helper. May be used by extensions.
 * Sends a message to routing system that the page number changed. 
 */
com.fulcrologic.rad.report.page_number_changed = (function com$fulcrologic$rad$report$page_number_changed(env){
if(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false){
} else {
var pg_87837 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var row_path_87838 = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398));
var page_path_87839 = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601));
com.fulcrologic.rad.routing.update_route_params_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env),(function (p){
return cljs.core.assoc_in(cljs.core.assoc_in(p,row_path_87838,(-1)),page_path_87839,pg_87837);
}));
}

return env;
});
/**
 * Internal state machine helper.
 * 
 * Apply the user-defined UISM operation to the report state machine just after the current page has
 * been populated. The :current-rows alias will have the result of filter/sort/paginate, and the
 * report actor is :actor/report. See the definition of the report state machine for more information.
 */
com.fulcrologic.rad.report.postprocess_page = (function com$fulcrologic$rad$report$postprocess_page(uism_env){
var xform = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.post_process], 0));
if(cljs.core.truth_(xform)){
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(uism_env) : xform.call(null,uism_env));
} else {
return uism_env;
}
});
/**
 * Internal state machine implementation. May be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.populate_current_page = (function com$fulcrologic$rad$report$populate_current_page(uism_env){
return com.fulcrologic.rad.report.postprocess_page((cljs.core.truth_(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","paginate?","com.fulcrologic.rad.report/paginate?",505904825)], 0)))?(function (){var current_page = (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var page_size = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","page-size","com.fulcrologic.rad.report/page-size",-1307273282)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uism_env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (20);
}
})();
var available_rows = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var n = cljs.core.count(available_rows);
var stragglers_QMARK_ = (cljs.core.rem(n,page_size) > (0));
var pages = (function (){var G__87446 = ((n / page_size) | (0));
if(stragglers_QMARK_){
return (G__87446 + (1));
} else {
return G__87446;
}
})();
var current_page__$1 = (((pages === (0)))?(1):(((current_page > pages))?pages:current_page
));
var page_start = ((current_page__$1 - (1)) * page_size);
var rows = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pages,current_page__$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(available_rows,page_start,n):(((n > page_size))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(available_rows,page_start,(page_start + page_size)):available_rows
));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),current_page__$1)) && (cljs.core.empty_QMARK_(rows)))){
return (com.fulcrologic.rad.report.goto_page_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.report.goto_page_STAR_.cljs$core$IFn$_invoke$arity$2(uism_env,(1)) : com.fulcrologic.rad.report.goto_page_STAR_.call(null,uism_env,(1)));
} else {
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic(uism_env,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page__$1,new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818),rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-count","page-count",2081744960),pages], 0));
}
})():com.fulcrologic.fulcro.ui_state_machines.assoc_aliased(uism_env,new cljs.core.Keyword(null,"page-count","page-count",2081744960),(1),new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818),com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010)))));
});
/**
 * Internal state machine implementation. May be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.goto_page_STAR_ = (function com$fulcrologic$rad$report$goto_page_STAR_(env,page){
var pg = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pg,page)){
return com.fulcrologic.rad.report.page_number_changed(com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (){var x__4214__auto__ = (1);
var y__4215__auto__ = page;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),(-1))));
} else {
return env;
}
});
/**
 * Given a report class that has columns, and a raw result grouped by those columns: returns a vector of rows that
 * rotate the grouped result into a normal report shape.
 */
com.fulcrologic.rad.report.rotate_result = (function com$fulcrologic$rad$report$rotate_result(report_class,grouped_result){
if(cljs.core.map_QMARK_(grouped_result)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.report",null,318,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The incoming result looks like it was normalized. Did you forget `ro/denormalize? true` on your report?"], null);
}),null)),null,-1762763234,null);
}

var columns = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549)) : com.fulcrologic.fulcro.components.component_options.call(null,report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549)));
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),columns);
var row_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__87452){
var map__87453 = p__87452;
var map__87453__$1 = (((((!((map__87453 == null))))?(((((map__87453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87453):map__87453);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87453__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grouped_result,qualified_key,cljs.core.PersistentVector.EMPTY);
}),columns);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,(function() { 
var G__87840__delegate = function (args){
return cljs.core.zipmap(ks,args);
};
var G__87840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87841__i = 0, G__87841__a = new Array(arguments.length -  0);
while (G__87841__i < G__87841__a.length) {G__87841__a[G__87841__i] = arguments[G__87841__i + 0]; ++G__87841__i;}
  args = new cljs.core.IndexedSeq(G__87841__a,0,null);
} 
return G__87840__delegate.call(this,args);};
G__87840.cljs$lang$maxFixedArity = 0;
G__87840.cljs$lang$applyTo = (function (arglist__87842){
var args = cljs.core.seq(arglist__87842);
return G__87840__delegate(args);
});
G__87840.cljs$core$IFn$_invoke$arity$variadic = G__87840__delegate;
return G__87840;
})()
,row_data);
});
/**
 * Internal state machine implementation. May be used by extensions to the stock state machine.
 * Apply the raw result transform, if it is defined.
 */
com.fulcrologic.rad.report.preprocess_raw_result = (function com$fulcrologic$rad$report$preprocess_raw_result(uism_env){
var xform = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","raw-result-xform","com.fulcrologic.rad.report/raw-result-xform",-478513875)], 0));
if(cljs.core.truth_(xform)){
var raw_result = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748));
var report = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var new_result = (xform.cljs$core$IFn$_invoke$arity$2 ? xform.cljs$core$IFn$_invoke$arity$2(report,raw_result) : xform.call(null,report,raw_result));
var G__87455 = uism_env;
if(cljs.core.truth_(new_result)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__87455,new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748),new_result);
} else {
return G__87455;
}
} else {
return uism_env;
}
});
/**
 * Internal state machien implementation of handling :event/filter.
 */
com.fulcrologic.rad.report.handle_filter_event = (function com$fulcrologic$rad$report$handle_filter_event(p__87458){
var map__87460 = p__87458;
var map__87460__$1 = (((((!((map__87460 == null))))?(((((map__87460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87460):map__87460);
var env = map__87460__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87460__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.fulcro.ui_state_machines.asm_id(env),new cljs.core.Keyword("event","do-filter","event/do-filter",-178720636));

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),true);
});
/**
 * Helper for state machines. Returns true if the report data looks like it has expired according to configured
 * caching parameters.
 */
com.fulcrologic.rad.report.report_cache_expired_QMARK_ = (function com$fulcrologic$rad$report$report_cache_expired_QMARK_(p__87464){
var map__87465 = p__87464;
var map__87465__$1 = (((((!((map__87465 == null))))?(((((map__87465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87465):map__87465);
var uism_env = map__87465__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87465__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__87479 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__87479__$1 = (((((!((map__87479 == null))))?(((((map__87479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87479):map__87479);
var load_cache_seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87479__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","load-cache-seconds","com.fulcrologic.rad.report/load-cache-seconds",1857942909));
var load_cache_expired_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87479__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","load-cache-expired?","com.fulcrologic.rad.report/load-cache-expired?",1495950132));
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87479__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var now_ms = cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now());
var last_load_time = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(uism_env,new cljs.core.Keyword(null,"last-load-time","last-load-time",-45200749));
var last_table_count = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(uism_env,new cljs.core.Keyword(null,"raw-items-in-table","raw-items-in-table",212849270));
var cache_expiration_ms = ((1000) * (function (){var or__4126__auto__ = load_cache_seconds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})());
var table_name = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var current_table_count = cljs.core.count(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table_name)));
var cache_looks_stale_QMARK_ = (((last_load_time == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_table_count,last_table_count)) || ((last_load_time < (now_ms - cache_expiration_ms))));
var user_cache_expired_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(load_cache_expired_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uism_env,cache_looks_stale_QMARK_], 0));
if(cljs.core.boolean$(user_cache_expired_QMARK_)){
return user_cache_expired_QMARK_;
} else {
return cache_looks_stale_QMARK_;
}
});
/**
 * Internal state machine implementation. Called on :event/resumt to do the steps to resume an already running report
 * that has just been re-mounted.
 */
com.fulcrologic.rad.report.handle_resume_report = (function com$fulcrologic$rad$report$handle_resume_report(env){
var env__$1 = com.fulcrologic.rad.report.initialize_parameters(env);
if(cljs.core.truth_(com.fulcrologic.rad.report.report_cache_expired_QMARK_(env__$1))){
return com.fulcrologic.rad.report.load_report_BANG_(env__$1);
} else {
return com.fulcrologic.rad.report.handle_filter_event(env__$1);
}
});
com.fulcrologic.rad.report.report_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","report","actor/report",1572193549),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page-count","page-count",2081744960),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),new cljs.core.Keyword(null,"sort-params","sort-params",-2134692887),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),new cljs.core.Keyword(null,"busy?","busy?",1047519572),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"ascending?","ascending?",715983116)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","loaded-data","ui/loaded-data",-1515082445)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494)], null)]),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__87489 = env;
var map__87489__$1 = (((((!((map__87489 == null))))?(((((map__87489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87489):map__87489);
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87489__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87489__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__87490 = com.fulcrologic.rad.report.report_options(env);
var map__87490__$1 = (((((!((map__87490 == null))))?(((((map__87490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87490):map__87490);
var run_on_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87490__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180));
var page_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601));
var desired_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.history.current_route(fulcro_app)),page_path);
var run_now_QMARK_ = (function (){var or__4126__auto__ = desired_page;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return run_on_mount_QMARK_;
}
})();
var G__87495 = com.fulcrologic.rad.report.initialize_parameters((function (){var G__87496 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(event_data));
if((desired_page == null)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__87496,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));
} else {
return G__87496;
}
})());
var G__87495__$1 = (cljs.core.truth_(run_now_QMARK_)?com.fulcrologic.rad.report.load_report_BANG_(G__87495):G__87495);
if(cljs.core.not(run_now_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.activate(G__87495__$1,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
} else {
return G__87495__$1;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87497){
var map__87498 = p__87497;
var map__87498__$1 = (((((!((map__87498 == null))))?(((((map__87498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87498):map__87498);
var env = map__87498__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87498__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__87500 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__87500__$1 = (((((!((map__87500 == null))))?(((((map__87500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87500):map__87500);
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87500__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var report_loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87500__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","report-loaded","com.fulcrologic.rad.report/report-loaded",-1314066509));
var table_name = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var G__87502 = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.rad.report.preprocess_raw_result(env)))),new cljs.core.Keyword(null,"last-load-time","last-load-time",-45200749),cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now())),new cljs.core.Keyword(null,"raw-items-in-table","raw-items-in-table",212849270),cljs.core.count(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table_name)))),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
if(cljs.core.truth_(report_loaded)){
return (report_loaded.cljs$core$IFn$_invoke$arity$1 ? report_loaded.cljs$core$IFn$_invoke$arity$1(G__87502) : report_loaded.call(null,G__87502));
} else {
return G__87502;
}
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,430,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Report failed to load."], null);
}),null)),null,1886924549,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","filter","event/filter",-1055160832),new cljs.core.Keyword("event","do-filter","event/do-filter",-178720636),new cljs.core.Keyword("event","resume","event/resume",-288995771),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529),new cljs.core.Keyword("event","set-ui-parameters","event/set-ui-parameters",446035604),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_filter_event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87507){
var map__87508 = p__87507;
var map__87508__$1 = (((((!((map__87508 == null))))?(((((map__87508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87508):map__87508);
var env = map__87508__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87508__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false))));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_resume_report], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87513){
var map__87514 = p__87513;
var map__87514__$1 = (((((!((map__87514 == null))))?(((((map__87514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87514):map__87514);
var env = map__87514__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.fulcro.ui_state_machines.asm_id(env),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113),event_data);

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),true);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__4214__auto__ = (2);
var y__4215__auto__ = page;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() - (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87516){
var map__87517 = p__87516;
var map__87517__$1 = (((((!((map__87517 == null))))?(((((map__87517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87517):map__87517);
var env = map__87517__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87517__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__87519 = event_data;
var map__87519__$1 = (((((!((map__87519 == null))))?(((((map__87519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87519):map__87519);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87519__$1,new cljs.core.Keyword(null,"page","page",849072397));
return com.fulcrologic.rad.report.goto_page_STAR_(env,page);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.load_report_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = page;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.initialize_parameters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87521){
var map__87522 = p__87521;
var map__87522__$1 = (((((!((map__87522 == null))))?(((((map__87522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87522):map__87522);
var env = map__87522__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87522__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87522__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(event_data);
var selected_row_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398));
if(((cljs.core.nat_int_QMARK_(row)) && ((!(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false))))){
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_row_path,row], 0));
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),row);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87536){
var map__87537 = p__87536;
var map__87537__$1 = (((((!((map__87537 == null))))?(((((map__87537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87537):map__87537);
var env = map__87537__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87537__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87537__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_data,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681));
if(cljs.core.truth_(temp__5733__auto__)){
var map__87542 = temp__5733__auto__;
var map__87542__$1 = (((((!((map__87542 == null))))?(((((map__87542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87542):map__87542);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87542__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var sort_by = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var sort_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647));
var ascending_QMARK_ = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"ascending?","ascending?",715983116));
var ascending_QMARK___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qualified_key,sort_by))?cljs.core.not(ascending_QMARK_):true);
if(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false){
} else {
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sort_path,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key], null)], 0));
}

return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1], 0))));
} else {
return env;
}
})], null)])], 0))], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.report","report-machine","com.fulcrologic.rad.report/report-machine",-1783439230,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.report","report-machine","com.fulcrologic.rad.report/report-machine",-1783439230,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","report","actor/report",1572193549),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page-count","page-count",2081744960),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),new cljs.core.Keyword(null,"sort-params","sort-params",-2134692887),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),new cljs.core.Keyword(null,"busy?","busy?",1047519572),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"ascending?","ascending?",715983116)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","loaded-data","ui/loaded-data",-1515082445)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494)], null)]),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__87544 = env;
var map__87544__$1 = (((((!((map__87544 == null))))?(((((map__87544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87544):map__87544);
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__87545 = com.fulcrologic.rad.report.report_options(env);
var map__87545__$1 = (((((!((map__87545 == null))))?(((((map__87545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87545):map__87545);
var run_on_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87545__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180));
var page_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601));
var desired_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.history.current_route(fulcro_app)),page_path);
var run_now_QMARK_ = (function (){var or__4126__auto__ = desired_page;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return run_on_mount_QMARK_;
}
})();
var G__87548 = com.fulcrologic.rad.report.initialize_parameters((function (){var G__87549 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(event_data));
if((desired_page == null)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__87549,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));
} else {
return G__87549;
}
})());
var G__87548__$1 = (cljs.core.truth_(run_now_QMARK_)?com.fulcrologic.rad.report.load_report_BANG_(G__87548):G__87548);
if(cljs.core.not(run_now_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.activate(G__87548__$1,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
} else {
return G__87548__$1;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87560){
var map__87561 = p__87560;
var map__87561__$1 = (((((!((map__87561 == null))))?(((((map__87561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87561):map__87561);
var env = map__87561__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87561__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__87565 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__87565__$1 = (((((!((map__87565 == null))))?(((((map__87565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87565):map__87565);
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87565__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var report_loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87565__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","report-loaded","com.fulcrologic.rad.report/report-loaded",-1314066509));
var table_name = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var G__87568 = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.rad.report.preprocess_raw_result(env)))),new cljs.core.Keyword(null,"last-load-time","last-load-time",-45200749),cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now())),new cljs.core.Keyword(null,"raw-items-in-table","raw-items-in-table",212849270),cljs.core.count(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table_name)))),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
if(cljs.core.truth_(report_loaded)){
return (report_loaded.cljs$core$IFn$_invoke$arity$1 ? report_loaded.cljs$core$IFn$_invoke$arity$1(G__87568) : report_loaded.call(null,G__87568));
} else {
return G__87568;
}
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,430,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Report failed to load."], null);
}),null)),null,-609030617,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","filter","event/filter",-1055160832),new cljs.core.Keyword("event","do-filter","event/do-filter",-178720636),new cljs.core.Keyword("event","resume","event/resume",-288995771),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529),new cljs.core.Keyword("event","set-ui-parameters","event/set-ui-parameters",446035604),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_filter_event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87569){
var map__87570 = p__87569;
var map__87570__$1 = (((((!((map__87570 == null))))?(((((map__87570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87570):map__87570);
var env = map__87570__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87570__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false))));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_resume_report], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87572){
var map__87573 = p__87572;
var map__87573__$1 = (((((!((map__87573 == null))))?(((((map__87573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87573):map__87573);
var env = map__87573__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87573__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87573__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.fulcro.ui_state_machines.asm_id(env),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113),event_data);

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),true);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__4214__auto__ = (2);
var y__4215__auto__ = page;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() - (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87575){
var map__87576 = p__87575;
var map__87576__$1 = (((((!((map__87576 == null))))?(((((map__87576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87576):map__87576);
var env = map__87576__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87576__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__87590 = event_data;
var map__87590__$1 = (((((!((map__87590 == null))))?(((((map__87590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87590):map__87590);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87590__$1,new cljs.core.Keyword(null,"page","page",849072397));
return com.fulcrologic.rad.report.goto_page_STAR_(env,page);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.load_report_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = page;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.initialize_parameters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87592){
var map__87593 = p__87592;
var map__87593__$1 = (((((!((map__87593 == null))))?(((((map__87593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87593):map__87593);
var env = map__87593__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87593__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87593__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(event_data);
var selected_row_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398));
if(((cljs.core.nat_int_QMARK_(row)) && ((!(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false))))){
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_row_path,row], 0));
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),row);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__87595){
var map__87596 = p__87595;
var map__87596__$1 = (((((!((map__87596 == null))))?(((((map__87596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87596):map__87596);
var env = map__87596__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87596__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87596__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_data,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681));
if(cljs.core.truth_(temp__5733__auto__)){
var map__87598 = temp__5733__auto__;
var map__87598__$1 = (((((!((map__87598 == null))))?(((((map__87598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87598):map__87598);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87598__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var sort_by = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var sort_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647));
var ascending_QMARK_ = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"ascending?","ascending?",715983116));
var ascending_QMARK___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qualified_key,sort_by))?cljs.core.not(ascending_QMARK_):true);
if(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false){
} else {
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sort_path,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key], null)], 0));
}

return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1], 0))));
} else {
return env;
}
})], null)])], 0))], null)], null)], null));
/**
 * Run a report with the current parameters
 */
com.fulcrologic.rad.report.run_report_BANG_ = (function com$fulcrologic$rad$report$run_report_BANG_(var_args){
var G__87602 = arguments.length;
switch (G__87602) {
case 1:
return com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","run","event/run",1832485709));
}));

(com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,class_or_registry_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,com.fulcrologic.rad.report.report_ident(class_or_registry_key),new cljs.core.Keyword("event","run","event/run",1832485709));
}));

(com.fulcrologic.rad.report.run_report_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Start a report. Not normally needed, since a report is started when it is routed to; however, if you put
 *   a report on-screen initially (or don't use dynamic router), then you must call this to start your report.
 * 
 *   `options` can contain `::id`, which will cause an instance of the report to be started. Used by containers so that
 *   multiple instances of the same report can co-exist with different views on the same screen.
 */
com.fulcrologic.rad.report.start_report_BANG_ = (function com$fulcrologic$rad$report$start_report_BANG_(var_args){
var G__87608 = arguments.length;
switch (G__87608) {
case 2:
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,report_class){
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,report_class,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,report_class,options){
var machine_def = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","machine","com.fulcrologic.rad.report/machine",-2080954567)) : com.fulcrologic.fulcro.components.component_options.call(null,report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","machine","com.fulcrologic.rad.report/machine",-2080954567)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.report.report_machine;
}
})();
var params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(options);
var asm_id = com.fulcrologic.fulcro.components.ident(report_class,options);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var asm = (function (){var G__87609 = state_map;
if((G__87609 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__87609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null));
}
})();
var running_QMARK_ = (function (){var G__87610 = asm;
var G__87610__$1 = (((G__87610 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193).cljs$core$IFn$_invoke$arity$1(G__87610));
if((G__87610__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__87610__$1);
}
})();
if(cljs.core.not(running_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,machine_def,asm_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","report","actor/report",1572193549),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(asm_id,report_class)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"params","params",710516235),params));
} else {
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,asm_id,new cljs.core.Keyword("event","resume","event/resume",-288995771),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"params","params",710516235),params));
}
}));

(com.fulcrologic.rad.report.start_report_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.rad.report.default_compare_rows = (function com$fulcrologic$rad$report$default_compare_rows(p__87619,a,b){
var map__87621 = p__87619;
var map__87621__$1 = (((((!((map__87621 == null))))?(((((map__87621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87621):map__87621);
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87621__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var ascending_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87621__$1,new cljs.core.Keyword(null,"ascending?","ascending?",715983116));
try{var av = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,sort_by);
var bv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,sort_by);
if(cljs.core.truth_(ascending_QMARK_)){
return cljs.core.compare(av,bv);
} else {
return cljs.core.compare(bv,av);
}
}catch (e87624){var _ = e87624;
return (0);
}});
com.fulcrologic.rad.report.report_will_enter = (function com$fulcrologic$rad$report$report_will_enter(app,route_params,report_class){
var report_ident = (function (){var G__87628 = report_class;
var G__87629 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__87628,G__87629) : com.fulcrologic.fulcro.components.get_ident.call(null,G__87628,G__87629));
})();
return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(report_ident,(function (){
com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,report_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__87630 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),report_ident], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__87630) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__87630));
})()], null));
}));
});
com.fulcrologic.rad.report.generated_row_class = (function com$fulcrologic$rad$report$generated_row_class(parent_registry_key,report_options){
var map__87650 = report_options;
var map__87650__$1 = (((((!((map__87650 == null))))?(((((map__87650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87650):map__87650);
var options = map__87650__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87650__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87650__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87650__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var row_query_inclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87650__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-query-inclusion","com.fulcrologic.rad.report/row-query-inclusion",-656135832));
var denormalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87650__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","denormalize?","com.fulcrologic.rad.report/denormalize?",889862364));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87650__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var body_registry_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(parent_registry_key),[cljs.core.name(parent_registry_key),"-Row"].join(''));
var normalize_QMARK_ = cljs.core.not(denormalize_QMARK_);
var row_query = (function (_){
var forms = new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799).cljs$core$IFn$_invoke$arity$1(options);
var id_attrs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__87649_SHARP_){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__87649_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__87649_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
}),cljs.core.vals(forms));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(row_query_inclusion),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr){
var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
}
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs,columns)),row_pk))));
});
var row_actions__$1 = (function (){var or__4126__auto__ = row_actions;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var row_ident = (function (this$,props){
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k)], null);
});
var row_item_options = (function (){var G__87652 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),row_query,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),row_actions__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),columns], null);
var G__87652__$1 = ((normalize_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87652,new cljs.core.Keyword(null,"ident","ident",-742346),row_ident):G__87652);
if(cljs.core.truth_(form_links)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87652__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),form_links);
} else {
return G__87652__$1;
}
})();
var body_render_fn = (function (this$,props){
return com.fulcrologic.rad.report.render_row(this$,(com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(body_registry_key) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,body_registry_key)),props);
});
return com.fulcrologic.fulcro.components.sc(body_registry_key,row_item_options,body_render_fn);
});
/**
 * A function that will dynamically create a report class and optionally register it with Fulcro.
 */
com.fulcrologic.rad.report.sc_report = (function com$fulcrologic$rad$report$sc_report(var_args){
var G__87657 = arguments.length;
switch (G__87657) {
case 2:
return com.fulcrologic.rad.report.sc_report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.sc_report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.sc_report.cljs$core$IFn$_invoke$arity$2 = (function (registry_key,report_options){
return com.fulcrologic.rad.report.sc_report.cljs$core$IFn$_invoke$arity$3(registry_key,report_options,null);
}));

(com.fulcrologic.rad.report.sc_report.cljs$core$IFn$_invoke$arity$3 = (function (registry_key,report_options,render_fn){
var map__87661 = report_options;
var map__87661__$1 = (((((!((map__87661 == null))))?(((((map__87661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87661):map__87661);
var options = map__87661__$1;
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87661__$1,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232));
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87661__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var query_inclusions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87661__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87661__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438));
var ItemClass = (cljs.core.truth_(BodyItem)?BodyItem:com.fulcrologic.rad.report.generated_row_class(registry_key,options));
var query = (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),registry_key], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(ItemClass)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),query_inclusions);
});
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),com.fulcrologic.rad.report.default_compare_rows,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (app,route_params){
return com.fulcrologic.rad.report.report_will_enter(app,route_params,(com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(registry_key) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,registry_key)));
})], null),options,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),((cljs.core.vector_QMARK_(route))?route:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null)),new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373),ItemClass,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (params){
var G__87666 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__87653_SHARP_){
return cljs.core.select_keys(p1__87653_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(controls))),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87666,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__87666;
}
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),registry_key], null);
})], null)], 0));
var render_report = (cljs.core.truth_(render_fn)?render_fn:(function (this$,props){
return com.fulcrologic.rad.report.render_layout(this$);
}));
return com.fulcrologic.fulcro.components.sc(registry_key,options__$1,render_report);
}));

(com.fulcrologic.rad.report.sc_report.cljs$lang$maxFixedArity = 3);

/**
 * Alias to `control/run!`. Runs the report.
 */
com.fulcrologic.rad.report.reload_BANG_ = com.fulcrologic.rad.control.run_BANG_;
/**
 * [instance k v]
 * 
 * Alias to `control/set-parameter!`. Set the given parameter value on the report. Usually used internally by controls.
 */
com.fulcrologic.rad.report.set_parameter_BANG_ = com.fulcrologic.rad.control.set_parameter_BANG_;
/**
 * Get the form link info for a given (column) key.
 * 
 *   Returns nil if there is no link info, otherwise returns:
 * 
 *   ```
 *   {:edit-form FormClass
 * :entity-id id-of-entity-to-edit}
 *   ```
 *   
 */
com.fulcrologic.rad.report.form_link = (function com$fulcrologic$rad$report$form_link(report_instance,row_props,column_key){
var map__87670 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__87670__$1 = (((((!((map__87670 == null))))?(((((map__87670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87670):map__87670);
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87670__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_links,column_key);
var id_key = (function (){var G__87672 = cls;
if((G__87672 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__87672,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)) : com.fulcrologic.fulcro.components.component_options.call(null,G__87672,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)));
}
})();
if(cljs.core.truth_(cls)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-form","edit-form",1081227988),cls,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_props,id_key)], null);
} else {
return null;
}
});
/**
 * Get a regular lambda link for a given (column) key.
 * 
 *   Returns nil if there is no link info, otherwise returns:
 * 
 *   ```
 *   {:edit-form FormClass
 * :entity-id id-of-entity-to-edit}
 *   ```
 *   
 */
com.fulcrologic.rad.report.link = (function com$fulcrologic$rad$report$link(report_instance,row_props,column_key){
var map__87673 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__87673__$1 = (((((!((map__87673 == null))))?(((((map__87673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87673):map__87673);
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87673__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_links,column_key);
var id_key = (function (){var G__87675 = cls;
if((G__87675 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__87675,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)) : com.fulcrologic.fulcro.components.component_options.call(null,G__87675,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)));
}
})();
if(cljs.core.truth_(cls)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-form","edit-form",1081227988),cls,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_props,id_key)], null);
} else {
return null;
}
});
com.fulcrologic.rad.report.built_in_formatter = (function com$fulcrologic$rad$report$built_in_formatter(type,style){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
})], null),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.inst__GT_human_readable_date(value);
}),new cljs.core.Keyword(null,"short-timestamp","short-timestamp",270490461),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d, h:mma",value);
}),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d, yyyy h:mma",value);
}),new cljs.core.Keyword(null,"date","date",-1463434462),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d, yyyy",value);
}),new cljs.core.Keyword(null,"month-day","month-day",-1633369133),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d",value);
}),new cljs.core.Keyword(null,"time","time",1385887882),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("h:mma",value);
})], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value,___$1,column_attribute){
var temp__5733__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-labels","com.fulcrologic.rad.attributes/enumerated-labels",-2136251655).cljs$core$IFn$_invoke$arity$1(column_attribute);
if(cljs.core.truth_(temp__5733__auto__)){
var labels = temp__5733__auto__;
return (labels.cljs$core$IFn$_invoke$arity$1 ? labels.cljs$core$IFn$_invoke$arity$1(value) : labels.call(null,value));
} else {
var G__87683 = value;
var G__87683__$1 = (((G__87683 == null))?null:cljs.core.name(G__87683));
if((G__87683__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__87683__$1);
}
}
})], null),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value,___$1,column_attribute){
var temp__5733__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-labels","com.fulcrologic.rad.attributes/enumerated-labels",-2136251655).cljs$core$IFn$_invoke$arity$1(column_attribute);
if(cljs.core.truth_(temp__5733__auto__)){
var labels = temp__5733__auto__;
return (labels.cljs$core$IFn$_invoke$arity$1 ? labels.cljs$core$IFn$_invoke$arity$1(value) : labels.call(null,value));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}
})], null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
})], null),new cljs.core.Keyword(null,"decimal","decimal",-170212044),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_str(value);
}),new cljs.core.Keyword(null,"currency","currency",-898327568),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_str(com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$2(value,(2)));
}),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_percent_str(value);
}),new cljs.core.Keyword(null,"USD","USD",-801544589),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$1(value);
})], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
if(cljs.core.truth_(value)){
return tr("true");
} else {
return tr("false");
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,style], null));
});
/**
 * Given a report instance, a row of props, and a column attribute for that report:
 * returns the formatted value of that column using the field formatter(s) defined
 * on the column attribute or report. If no formatter is provided a default formatter
 * will be used.
 */
com.fulcrologic.rad.report.formatted_column_value = (function com$fulcrologic$rad$report$formatted_column_value(report_instance,row_props,p__87686){
var map__87687 = p__87686;
var map__87687__$1 = (((((!((map__87687 == null))))?(((((map__87687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87687):map__87687);
var column_attribute = map__87687__$1;
var field_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87687__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","field-formatter","com.fulcrologic.rad.report/field-formatter",-2121015462));
var column_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87687__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatter","com.fulcrologic.rad.report/column-formatter",1459791387));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87687__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87687__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87687__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","style","com.fulcrologic.rad.attributes/style",816608992));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_props,qualified_key);
var report_field_formatter = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551),qualified_key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","field-formatters","com.fulcrologic.rad.report/field-formatters",61144273),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","field-formatters","com.fulcrologic.rad.report/field-formatters",61144273),qualified_key));
}
})();
var map__87689 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__87689__$1 = (((((!((map__87689 == null))))?(((((map__87689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87689):map__87689);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87689__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var formatter = (cljs.core.truth_(report_field_formatter)?report_field_formatter:(cljs.core.truth_(column_formatter)?column_formatter:(cljs.core.truth_(field_formatter)?field_formatter:(function (){var style__$1 = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-styles","com.fulcrologic.rad.report/column-styles",366052571),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-styles","com.fulcrologic.rad.report/column-styles",366052571),qualified_key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = style;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
var installed_formatters = (function (){var G__87699 = runtime_atom;
var G__87699__$1 = (((G__87699 == null))?null:cljs.core.deref(G__87699));
var G__87699__$2 = (((G__87699__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__87699__$1));
if((G__87699__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","type->style->formatter","com.fulcrologic.rad.report/type->style->formatter",1525751656).cljs$core$IFn$_invoke$arity$1(G__87699__$2);
}
})();
var formatter = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(installed_formatters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,style__$1], null));
var or__4126__auto__ = formatter;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.report.built_in_formatter(type,style__$1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (function (_,v){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
});
}
}
})()
)));
var formatted_value = (formatter.cljs$core$IFn$_invoke$arity$4 ? formatter.cljs$core$IFn$_invoke$arity$4(report_instance,value,row_props,column_attribute) : formatter.call(null,report_instance,value,row_props,column_attribute));
return formatted_value;
});
/**
 * Install a formatter for the given data type and style. The data type must match a supported data type
 * of attributes, and the style can either be `:default` or a user-defined keyword the represents the
 * style you want to support. Some common styles have predefined support, such as `:USD` for US Dollars.
 * 
 * This should be called before mounting your app.
 * 
 * Ex.:
 * 
 * ```clojure
 * (install-formatter! app :boolean :default (fn [report-instance value] (if value "yes" "no")))
 * ```
 */
com.fulcrologic.rad.report.install_formatter_BANG_ = (function com$fulcrologic$rad$report$install_formatter_BANG_(app,type,style,formatter){
var map__87705 = app;
var map__87705__$1 = (((((!((map__87705 == null))))?(((((map__87705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87705):map__87705);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87705__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.report","type->style->formatter","com.fulcrologic.rad.report/type->style->formatter",1525751656),type,style], null),formatter);
});
/**
 * Install a report layout renderer for the given style. `render-row` is a `(fn [report-instance])`.
 * 
 *   See other support functions in this ns for help rendering, such as `formatted-column-value`, `form-link`,
 *   `select-row!`.
 * 
 * This should be called before mounting your app.
 * 
 */
com.fulcrologic.rad.report.install_layout_BANG_ = (function com$fulcrologic$rad$report$install_layout_BANG_(app,report_style,render){
var map__87707 = app;
var map__87707__$1 = (((((!((map__87707 == null))))?(((((map__87707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87707):map__87707);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87707__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.report","style->layout","com.fulcrologic.rad.report/style->layout",-2137264366),report_style], null),render);
});
/**
 * Install a row layout renderer for the given style. `render-row` is a `(fn [report-instance row-class row-props])`.
 * 
 *   See other support functions in this ns for help rendering, such as `formatted-column-value`, `form-link`,
 *   `select-row!`.
 * 
 * This should be called before mounting your app.
 * 
 */
com.fulcrologic.rad.report.install_row_layout_BANG_ = (function com$fulcrologic$rad$report$install_row_layout_BANG_(app,row_style,render_row){
var map__87717 = app;
var map__87717__$1 = (((((!((map__87717 == null))))?(((((map__87717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87717):map__87717);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87717__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.report","row-style->row-layout","com.fulcrologic.rad.report/row-style->row-layout",-622996728),row_style], null),render_row);
});
/**
 * Get a vector of the current rows that should be shown by the renderer (sorted/paginated/filtered). `report-instance`
 * is available in the rendering `env`.
 */
com.fulcrologic.rad.report.current_rows = (function com$fulcrologic$rad$report$current_rows(report_instance){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY);
});
/**
 * Returns true if the given report instance has an active network load in progress.
 */
com.fulcrologic.rad.report.loading_QMARK_ = (function com$fulcrologic$rad$report$loading_QMARK_(report_instance){
if(cljs.core.truth_(report_instance)){
return com.fulcrologic.fulcro.data_fetch.loading_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,report_instance))], null)));
} else {
return null;
}
});
/**
 * Sort the report by the given attribute. Changes direction if the report is already sorted by that attribute. The implementation
 * of sorting is built-in and uses compare, but you can override how sorting works by defining `ro/compare-rows` on your report.
 */
com.fulcrologic.rad.report.sort_rows_BANG_ = (function com$fulcrologic$rad$report$sort_rows_BANG_(var_args){
var G__87720 = arguments.length;
switch (G__87720) {
case 2:
return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,by_attribute){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),by_attribute], null));
}));

(com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,class_or_reg_key,by_attribute){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),by_attribute], null));
}));

(com.fulcrologic.rad.report.sort_rows_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Make it so the report is not sorted (skips the sort step on any action that would normally (re)sort
 * the report). This can be used to speed up loading of large results, especially if they were
 * already in an acceptable order from the server.
 * 
 * NOTE: This does NOT refresh the report. The natural order will appear next time the report needs sorted.
 */
com.fulcrologic.rad.report.clear_sort_BANG_ = (function com$fulcrologic$rad$report$clear_sort_BANG_(var_args){
var G__87722 = arguments.length;
switch (G__87722) {
case 1:
return com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","clear-sort","event/clear-sort",457469097));
}));

(com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","clear-sort","event/clear-sort",457469097));
}));

(com.fulcrologic.rad.report.clear_sort_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Update the filtered rows based on current report parameters.
 */
com.fulcrologic.rad.report.filter_rows_BANG_ = (function com$fulcrologic$rad$report$filter_rows_BANG_(var_args){
var G__87724 = arguments.length;
switch (G__87724) {
case 1:
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","filter","event/filter",-1055160832));
}));

(com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","filter","event/filter",-1055160832));
}));

(com.fulcrologic.rad.report.filter_rows_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Move to the next page (if there is one)
 */
com.fulcrologic.rad.report.goto_page_BANG_ = (function com$fulcrologic$rad$report$goto_page_BANG_(var_args){
var G__87726 = arguments.length;
switch (G__87726) {
case 2:
return com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,page_number){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_number], null));
}));

(com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,class_or_reg_key,page_number){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_number], null));
}));

(com.fulcrologic.rad.report.goto_page_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Move to the next page (if there is one)
 */
com.fulcrologic.rad.report.next_page_BANG_ = (function com$fulcrologic$rad$report$next_page_BANG_(var_args){
var G__87728 = arguments.length;
switch (G__87728) {
case 1:
return com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529));
}));

(com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529));
}));

(com.fulcrologic.rad.report.next_page_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Move to the next page (if there is one)
 */
com.fulcrologic.rad.report.prior_page_BANG_ = (function com$fulcrologic$rad$report$prior_page_BANG_(var_args){
var G__87730 = arguments.length;
switch (G__87730) {
case 1:
return com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912));
}));

(com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912));
}));

(com.fulcrologic.rad.report.prior_page_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current page number displayed on the report
 */
com.fulcrologic.rad.report.current_page = (function com$fulcrologic$rad$report$current_page(var_args){
var G__87732 = arguments.length;
switch (G__87732) {
case 1:
return com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$1 = (function (report_instance){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], null),(1));
}));

(com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$2 = (function (state_map,report_class_or_registry_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report.report_ident(report_class_or_registry_key),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], 0)),(1));
}));

(com.fulcrologic.rad.report.current_page.cljs$lang$maxFixedArity = 2);

/**
 * Returns how many pages the current report has.
 */
com.fulcrologic.rad.report.page_count = (function com$fulcrologic$rad$report$page_count(var_args){
var G__87734 = arguments.length;
switch (G__87734) {
case 1:
return com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$1 = (function (report_instance){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)], null),(1));
}));

(com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$2 = (function (state_map,report_class_or_registry_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.report.report_ident(report_class_or_registry_key),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)),(1));
}));

(com.fulcrologic.rad.report.page_count.cljs$lang$maxFixedArity = 2);

/**
 * Returns the currently-selected row index, if any (-1 if nothing is selected).
 */
com.fulcrologic.rad.report.currently_selected_row = (function com$fulcrologic$rad$report$currently_selected_row(var_args){
var G__87737 = arguments.length;
switch (G__87737) {
case 1:
return com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$1 = (function (report_instance){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], null),(-1));
}));

(com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$2 = (function (state_map,report_class_or_registry_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report.report_ident(report_class_or_registry_key),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], 0)),(-1));
}));

(com.fulcrologic.rad.report.currently_selected_row.cljs$lang$maxFixedArity = 2);

com.fulcrologic.rad.report.select_row_BANG_ = (function com$fulcrologic$rad$report$select_row_BANG_(var_args){
var G__87739 = arguments.length;
switch (G__87739) {
case 2:
return com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (report_instance,idx){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(report_instance,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,report_instance)),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),idx], null));
}));

(com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,class_or_reg_key,idx){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),idx], null));
}));

(com.fulcrologic.rad.report.select_row_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a string of column classes that can be defined on the attribute at ::report/column-class or on the
 * report in the ::report/column-classes map. The report map overrides the attribute
 */
com.fulcrologic.rad.report.column_classes = (function com$fulcrologic$rad$report$column_classes(report_instance_or_class,p__87747){
var map__87748 = p__87747;
var map__87748__$1 = (((((!((map__87748 == null))))?(((((map__87748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87748):map__87748);
var attr = map__87748__$1;
var column_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87748__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-class","com.fulcrologic.rad.report/column-class",-562089245));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87748__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var rpt_column_class = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance_or_class,new cljs.core.Keyword("com.fulcrologic.rad.report","column-classes","com.fulcrologic.rad.report/column-classes",1997266085),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance_or_class,new cljs.core.Keyword("com.fulcrologic.rad.report","column-classes","com.fulcrologic.rad.report/column-classes",1997266085),qualified_key));
var or__4126__auto__ = rpt_column_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return column_class;
}
});
/**
 * Generates a row class for reports. Mainly meant for internal use, but might be useful in custom report generation code.
 * 
 *   registry-key - The unique key to register the generated class under
 *   options - The top report options
 */
com.fulcrologic.rad.report.genrow = (function com$fulcrologic$rad$report$genrow(registry_key,options){
var map__87754 = options;
var map__87754__$1 = (((((!((map__87754 == null))))?(((((map__87754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87754):map__87754);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var initLocalState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","initLocalState","com.fulcrologic.rad.report/initLocalState",578239055));
var row_query_inclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-query-inclusion","com.fulcrologic.rad.report/row-query-inclusion",-656135832));
var denormalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","denormalize?","com.fulcrologic.rad.report/denormalize?",889862364));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87754__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var normalize_QMARK_ = cljs.core.not(denormalize_QMARK_);
var row_query = (function (){var id_attrs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__87752_SHARP_){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__87752_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__87752_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
}),cljs.core.vals(form_links));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(row_query_inclusion),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr){
var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
}
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs,columns)),row_pk))));
})();
var row_constructor = com.fulcrologic.fulcro.components.react_constructor(initLocalState);
var row_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var row_ident = (function (this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,row_key)], null);
});
var row_actions__$1 = (function (){var or__4126__auto__ = row_actions;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var row_render = (function (this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.report.render_row(new cljs.core.Keyword(null,"report-instance","report-instance",1193962736).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$))),row_constructor,props);
}));
});
var body_options = (function (){var G__87766 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (this$){
return row_query;
}),new cljs.core.Keyword(null,"render","render",-1408033454),row_render,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),row_actions__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),columns], null);
var G__87766__$1 = ((normalize_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87766,new cljs.core.Keyword(null,"ident","ident",-742346),row_ident):G__87766);
if(cljs.core.truth_(form_links)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87766__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),form_links);
} else {
return G__87766__$1;
}
})();
return com.fulcrologic.fulcro.components.configure_component_BANG_(row_constructor,registry_key,body_options);
});
/**
 * Create a RAD report component. `options` is the map of report/Fulcro options. The `registry-key` is the globally
 * unique name (as a keyword) that this component should be known by, and `render` is a `(fn [this props])` (optional)
 * for rendering the body, which defaults to the built-in `render-layout`.
 * 
 * WARNING: The macro version ensures that there is a constant react type to refer to. Using this function MAY cause
 * hot code reload behaviors that rely on react-type to misbehave due to the mismatch (closure over old version).
 */
com.fulcrologic.rad.report.report = (function com$fulcrologic$rad$report$report(var_args){
var G__87769 = arguments.length;
switch (G__87769) {
case 2:
return com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$2 = (function (registry_key,options){
return com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$3(registry_key,options,(function (this$,_){
return com.fulcrologic.rad.report.render_layout(this$);
}));
}));

(com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$3 = (function (registry_key,options,render){
if(cljs.core.vector_QMARK_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549)) : options.call(null,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549))))){
} else {
throw (new Error("Assert failed: (vector? (options :com.fulcrologic.rad.report/columns))"));
}

if(com.fulcrologic.rad.attributes.attribute_QMARK_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951)) : options.call(null,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951))))){
} else {
throw (new Error("Assert failed: (attr/attribute? (options :com.fulcrologic.rad.report/row-pk))"));
}

if(((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859)) : options.call(null,new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859))) instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? (options :com.fulcrologic.rad.report/source-attribute))"));
}

var generated_row_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(registry_key),[cljs.core.name(registry_key),"-Row"].join(''));
var map__87770 = options;
var map__87770__$1 = (((((!((map__87770 == null))))?(((((map__87770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87770):map__87770);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87770__$1,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232));
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87770__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var query_inclusions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87770__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87770__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438));
var constructor$ = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options));
var get_class = (function (){
return constructor$;
});
var ItemClass = (function (){var or__4126__auto__ = BodyItem;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.report.genrow(generated_row_key,options);
}
})();
var query = (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(ItemClass)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),query_inclusions);
});
var render__$1 = (function (this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(this$,props) : render.call(null,this$,props));
}));
});
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),com.fulcrologic.rad.report.default_compare_rows,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (app,route_params){
return com.fulcrologic.rad.report.report_will_enter(app,route_params,get_class());
})], null),options,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),((cljs.core.vector_QMARK_(route))?route:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null)),new cljs.core.Keyword(null,"render","render",-1408033454),render__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373),ItemClass,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (params){
var G__87772 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__87767_SHARP_){
return cljs.core.select_keys(p1__87767_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(controls))),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87772,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__87772;
}
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function (this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),(function (){var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return registry_key;
}
})()], null);
})], null)], 0));
return com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,registry_key,options__$1);
}));

(com.fulcrologic.rad.report.report.cljs$lang$maxFixedArity = 3);

/**
 * Mutation helper. Clear a report out of app state. The report should not be visible when you do this.
 */
com.fulcrologic.rad.report.clear_report_STAR_ = (function com$fulcrologic$rad$report$clear_report_STAR_(state_map,ReportClass){
var report_ident = (function (){var G__87776 = ReportClass;
var G__87777 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__87776,G__87777) : com.fulcrologic.fulcro.components.get_ident.call(null,G__87776,G__87777));
})();
var vec__87773 = report_ident;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87773,(0),null);
var report_class_registry_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87773,(1),null);
return com.fulcrologic.fulcro.algorithms.merge.merge_component(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),cljs.core.dissoc,report_ident),table,cljs.core.dissoc,report_class_registry_key),ReportClass,(function (){var G__87778 = ReportClass;
var G__87779 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__87778,G__87779) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__87778,G__87779));
})());
});
/**
 * MUTATION: Clear a report (which should not be on screen) out of app state.
 */
com.fulcrologic.rad.report.clear_report = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.report","clear-report","com.fulcrologic.rad.report/clear-report",-2048935716,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.report","clear-report","com.fulcrologic.rad.report/clear-report",-2048935716,null),(function (fulcro_mutation_env_symbol){
var map__87780 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__87780__$1 = (((((!((map__87780 == null))))?(((((map__87780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87780):map__87780);
var report_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87780__$1,new cljs.core.Keyword(null,"report-ident","report-ident",574278233));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$report$action(p__87782){
var map__87783 = p__87782;
var map__87783__$1 = (((((!((map__87783 == null))))?(((((map__87783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87783):map__87783);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87783__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__87785_87857 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__87786_87858 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__87786_87858);

try{var vec__87796_87859 = report_ident;
var table_87860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87796_87859,(0),null);
var report_class_registry_key_87861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87796_87859,(1),null);
var Report_87862 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(report_class_registry_key_87861) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,report_class_registry_key_87861));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.rad.report.clear_report_STAR_,Report_87862);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__87785_87857);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__87799 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__87800 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__87800);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__87799);
}})], null);
}));
/**
 * Run a transaction that completely clears a report (which should not be on-screen) out of app state.
 */
com.fulcrologic.rad.report.clear_report_BANG_ = (function com$fulcrologic$rad$report$clear_report_BANG_(app_ish,ReportClass){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_ish,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__87803 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-ident","report-ident",574278233),(function (){var G__87804 = ReportClass;
var G__87805 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__87804,G__87805) : com.fulcrologic.fulcro.components.get_ident.call(null,G__87804,G__87805));
})()], null);
return (com.fulcrologic.rad.report.clear_report.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.report.clear_report.cljs$core$IFn$_invoke$arity$1(G__87803) : com.fulcrologic.rad.report.clear_report.call(null,G__87803));
})()], null));
});

//# sourceMappingURL=com.fulcrologic.rad.report.js.map
