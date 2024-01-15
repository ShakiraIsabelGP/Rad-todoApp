goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs');
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_instant_input = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$ui_date_instant_input(p__89189,p__89190){
var map__89191 = p__89189;
var map__89191__$1 = (((((!((map__89191 == null))))?(((((map__89191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89191):map__89191);
var default_local_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89191__$1,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs","default-local-time","com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs/default-local-time",1906185405));
var map__89192 = p__89190;
var map__89192__$1 = (((((!((map__89192 == null))))?(((((map__89192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89192):map__89192);
var props = map__89192__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89192__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89192__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var local_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89192__$1,new cljs.core.Keyword(null,"local-time","local-time",-1873195290));
var value__$1 = com.fulcrologic.rad.type_support.date_time.inst__GT_html_date.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.type_support.date_time.now();
}
})());
var local_time__$1 = (function (){var or__4126__auto__ = local_time;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_local_time;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var date_string = com.fulcrologic.fulcro.dom.events.target_value(evt);
var instant = com.fulcrologic.rad.type_support.date_time.html_date__GT_inst(date_string,local_time__$1);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(instant) : onChange.call(null,instant));
} else {
return null;
}
})], null)], 0))], null),null);
});
/**
 * Display the date the user selects, but control a value that is midnight on the next date. Used for generating ending
 *   instants that can be used for a proper non-inclusive end date.
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_ending_date_instant_input = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$ui_ending_date_instant_input(_,p__89195){
var map__89196 = p__89195;
var map__89196__$1 = (((((!((map__89196 == null))))?(((((map__89196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89196):map__89196);
var props = map__89196__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89196__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89196__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var today = com.fulcrologic.rad.type_support.date_time.inst__GT_local_datetime.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.type_support.date_time.now();
}
})());
var display_date = cljc.java_time.local_date_time.to_local_date(cljc.java_time.local_date_time.minus_days(today,(1)));
var value__$1 = com.fulcrologic.rad.type_support.date_time.local_date__GT_html_date_string(display_date);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var date_string = com.fulcrologic.fulcro.dom.events.target_value(evt);
var tomorrow = cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2(cljc.java_time.local_date.plus_days(com.fulcrologic.rad.type_support.date_time.html_date_string__GT_local_date(date_string),(1)),cljc.java_time.local_time.midnight);
var instant = com.fulcrologic.rad.type_support.date_time.local_datetime__GT_inst.cljs$core$IFn$_invoke$arity$1(tomorrow);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(instant) : onChange.call(null,instant));
} else {
return null;
}
})], null)], 0))], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_time_instant_input = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$ui_date_time_instant_input(_,p__89198){
var map__89199 = p__89198;
var map__89199__$1 = (((((!((map__89199 == null))))?(((((map__89199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89199):map__89199);
var props = map__89199__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89199__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89199__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89199__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var value__$1 = com.fulcrologic.rad.type_support.date_time.inst__GT_html_datetime_string.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.type_support.date_time.now();
}
})());
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,(function (){var G__89201 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var date_time_string = com.fulcrologic.fulcro.dom.events.target_value(evt);
var instant = com.fulcrologic.rad.type_support.date_time.html_datetime_string__GT_inst.cljs$core$IFn$_invoke$arity$1(date_time_string);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(instant) : onChange.call(null,instant));
} else {
return null;
}
})], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89201,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true);
} else {
return G__89201;
}
})()], 0))], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.date_time_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$date_time_control(render_env){
var G__89202 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(render_env,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_time_instant_input);
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__89202) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__89202));
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.midnight_on_date_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$midnight_on_date_control(render_env){
var G__89203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(render_env,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_instant_input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs","default-local-time","com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs/default-local-time",1906185405),cljc.java_time.local_time.midnight], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__89203) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__89203));
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.midnight_next_date_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$midnight_next_date_control(render_env){
var G__89204 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(render_env,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_ending_date_instant_input);
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__89204) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__89204));
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.date_at_noon_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$date_at_noon_control(render_env){
var G__89205 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(render_env,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs","default-local-time","com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs/default-local-time",1906185405),cljc.java_time.local_time.noon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_instant_input], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__89205) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__89205));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.js.map
