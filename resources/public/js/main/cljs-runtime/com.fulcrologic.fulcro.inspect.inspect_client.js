goog.provide('com.fulcrologic.fulcro.inspect.inspect_client');
/**
 * @define {boolean}
 */
com.fulcrologic.fulcro.inspect.inspect_client.INSPECT = goog.define("com.fulcrologic.fulcro.inspect.inspect_client.INSPECT",false);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.run_picker !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.run_picker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.send_ch !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((50000)));
}
com.fulcrologic.fulcro.inspect.inspect_client.post_message = (function com$fulcrologic$fulcro$inspect$inspect_client$post_message(type,data){
try{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
}catch (e52547){var e = e52547;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot send to inspect. Channel closed. See https://book.fulcrologic.com/#err-inspect-ch-closed"], null);
}),null)),null,1746662859,null);
}});
/**
 * Returns true when env is a cljs macro &env
 */
com.fulcrologic.fulcro.inspect.inspect_client.cljs_QMARK_ = (function com$fulcrologic$fulcro$inspect$inspect_client$cljs_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.inspect.inspect_client.isoget = (function com$fulcrologic$fulcro$inspect$inspect_client$isoget(var_args){
var G__52549 = arguments.length;
switch (G__52549) {
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4126__auto__ = goog.object.get(obj,(function (){var G__52554 = k;
if((G__52554 == null)){
return null;
} else {
return cljs.core.name(G__52554);
}
})());
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.inspect.inspect_client.app_state = (function com$fulcrologic$fulcro$inspect$inspect_client$app_state(app){
var G__52558 = app;
var G__52558__$1 = (((G__52558 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__52558));
if((G__52558__$1 == null)){
return null;
} else {
return cljs.core.deref(G__52558__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$runtime_atom(app){
var G__52559 = app;
if((G__52559 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__52559);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.state_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$state_atom(app){
var G__52560 = app;
if((G__52560 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__52560);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid = (function com$fulcrologic$fulcro$inspect$inspect_client$app_uuid(app){
var G__52562 = app;
var G__52562__$1 = (((G__52562 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__52562));
var G__52562__$2 = (((G__52562__$1 == null))?null:cljs.core.deref(G__52562__$1));
if((G__52562__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__52562__$2,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.remotes = (function com$fulcrologic$fulcro$inspect$inspect_client$remotes(app){
var G__52563 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app);
var G__52563__$1 = (((G__52563 == null))?null:cljs.core.deref(G__52563));
if((G__52563__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__52563__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$app_id(app){
var G__52567 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app);
if((G__52567 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__52567);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$fulcro_app_id(app){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app);
});
com.fulcrologic.fulcro.inspect.inspect_client.get_component_name = (function com$fulcrologic$fulcro$inspect$inspect_client$get_component_name(component){
if(cljs.core.truth_(component)){
var G__52568 = com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if((G__52568 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(G__52568);
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$comp_transact_BANG_(app,tx,options){
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app,tx,options) : tx_BANG_.call(null,app,tx,options));
});
com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE = (100);
/**
 * Current time in the recorded history of states
 */
com.fulcrologic.fulcro.inspect.inspect_client.current_history_id = (function com$fulcrologic$fulcro$inspect$inspect_client$current_history_id(app){
var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","time","com.fulcrologic.fulcro.inspect.inspect-client/time",-124222029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
});
/**
 * Record a state change in this history. Returns the ID of the newly recorded entry.
 */
com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$record_history_entry_BANG_(app,state){
var now = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app),(function (runtime){
var history = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395).cljs$core$IFn$_invoke$arity$1(runtime);
var pruned_history = (((history == null))?cljs.core.PersistentVector.EMPTY:(((cljs.core.count(history) > com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(history,(1)):history
));
var new_history = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pruned_history,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),now,new cljs.core.Keyword(null,"value","value",305978217),state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","time","com.fulcrologic.fulcro.inspect.inspect-client/time",-124222029),(now + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395),new_history], 0));
}));

return now;
});
com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry = (function com$fulcrologic$fulcro$inspect$inspect_client$get_history_entry(app,id){
var history = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app)));
var entry = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52571){
var map__52572 = p__52571;
var map__52572__$1 = (((((!((map__52572 == null))))?(((((map__52572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52572):map__52572);
var entry_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,entry_id);
}),cljs.core.seq(history)));
return entry;
});
/**
 * Notify Inspect that the database changed
 */
com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$db_changed_BANG_(app,old_state,new_state){
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
var state_id = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app,new_state);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-changed!","fulcro.inspect.client/db-changed!",1922305221),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","state-id","fulcro.inspect.client/state-id",-828161304),state_id]));
});
com.fulcrologic.fulcro.inspect.inspect_client.event_data = (function com$fulcrologic$fulcro$inspect$inspect_client$event_data(event){
var G__52578 = event;
var G__52578__$1 = (((G__52578 == null))?null:goog.object.getValueByKeys(G__52578,"data","fulcro-inspect-devtool-message"));
if((G__52578__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.transit.read(G__52578__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop = (function com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop(){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52607){
var state_val_52608 = (state_52607[(1)]);
if((state_val_52608 === (1))){
var state_52607__$1 = state_52607;
var statearr_52610_52764 = state_52607__$1;
(statearr_52610_52764[(2)] = null);

(statearr_52610_52764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52608 === (2))){
var state_52607__$1 = state_52607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52607__$1,(4),com.fulcrologic.fulcro.inspect.inspect_client.send_ch);
} else {
if((state_val_52608 === (3))){
var inst_52605 = (state_52607[(2)]);
var state_52607__$1 = state_52607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52607__$1,inst_52605);
} else {
if((state_val_52608 === (4))){
var inst_52583 = (state_52607[(7)]);
var inst_52583__$1 = (state_52607[(2)]);
var state_52607__$1 = (function (){var statearr_52611 = state_52607;
(statearr_52611[(7)] = inst_52583__$1);

return statearr_52611;
})();
if(cljs.core.truth_(inst_52583__$1)){
var statearr_52612_52768 = state_52607__$1;
(statearr_52612_52768[(1)] = (5));

} else {
var statearr_52613_52770 = state_52607__$1;
(statearr_52613_52770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52608 === (5))){
var inst_52583 = (state_52607[(7)]);
var inst_52588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52583,(0),null);
var inst_52589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52583,(1),null);
var inst_52590 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_52591 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_52592 = (new Date());
var inst_52593 = [inst_52588,inst_52589,inst_52592];
var inst_52594 = cljs.core.PersistentHashMap.fromArrays(inst_52591,inst_52593);
var inst_52595 = com.fulcrologic.fulcro.inspect.transit.write(inst_52594);
var inst_52596 = [inst_52595];
var inst_52597 = cljs.core.PersistentHashMap.fromArrays(inst_52590,inst_52596);
var inst_52598 = cljs.core.clj__GT_js(inst_52597);
var inst_52599 = window.postMessage(inst_52598,"*");
var state_52607__$1 = (function (){var statearr_52614 = state_52607;
(statearr_52614[(8)] = inst_52599);

return statearr_52614;
})();
var statearr_52615_52775 = state_52607__$1;
(statearr_52615_52775[(2)] = null);

(statearr_52615_52775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52608 === (6))){
var state_52607__$1 = state_52607;
var statearr_52616_52776 = state_52607__$1;
(statearr_52616_52776[(2)] = null);

(statearr_52616_52776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52608 === (7))){
var inst_52603 = (state_52607[(2)]);
var state_52607__$1 = state_52607;
var statearr_52617_52777 = state_52607__$1;
(statearr_52617_52777[(2)] = inst_52603);

(statearr_52617_52777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto__ = null;
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto____0 = (function (){
var statearr_52618 = [null,null,null,null,null,null,null,null,null];
(statearr_52618[(0)] = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto__);

(statearr_52618[(1)] = (1));

return statearr_52618;
});
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto____1 = (function (state_52607){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52607);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52619){var ex__50860__auto__ = e52619;
var statearr_52620_52779 = state_52607;
(statearr_52620_52779[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52607[(4)]))){
var statearr_52621_52781 = state_52607;
(statearr_52621_52781[(1)] = cljs.core.first((state_52607[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52783 = state_52607;
state_52607 = G__52783;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto__ = function(state_52607){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto____1.call(this,state_52607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto____0;
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto____1;
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52622 = f__50893__auto__();
(statearr_52622[(6)] = c__50892__auto__);

return statearr_52622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages = (function com$fulcrologic$fulcro$inspect$inspect_client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((((event.source === window))?goog.object.getValueByKeys(event,"data","fulcro-inspect-devtool-message"):false))){
var G__52623 = com.fulcrologic.fulcro.inspect.inspect_client.event_data(event);
return (com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__52623) : com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.call(null,G__52623));
} else {
if(cljs.core.truth_((((event.source === window))?goog.object.getValueByKeys(event,"data","fulcro-inspect-start-consume"):false))){
return com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$transact_inspector_BANG_(var_args){
var G__52627 = arguments.length;
switch (G__52627) {
case 1:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.inspect.inspect_client.dispose_app = (function com$fulcrologic$fulcro$inspect$inspect_client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.dissoc,app_uuid);

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.set_active_app = (function com$fulcrologic$fulcro$inspect$inspect_client$set_active_app(app_uuid){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_started_BANG_(app,remote,tx_id,txn){
var start = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),txn], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_finished_BANG_(app,remote,tx_id,response){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_failed_BANG_(app,tx_id,error){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message = (function com$fulcrologic$fulcro$inspect$inspect_client$handle_devtool_message(p__52663){
var map__52664 = p__52663;
var map__52664__$1 = (((((!((map__52664 == null))))?(((((map__52664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52664):map__52664);
var message = map__52664__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"data","data",-232669377));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,191,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Devtools Message received",message], null);
}),null)),null,1224176187,null);

var G__52666 = type;
var G__52666__$1 = (((G__52666 instanceof cljs.core.Keyword))?G__52666.fqn:null);
switch (G__52666__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__52667 = cljs.core.seq(cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_)));
var chunk__52668 = null;
var count__52669 = (0);
var i__52670 = (0);
while(true){
if((i__52670 < count__52669)){
var app = chunk__52668.cljs$core$IIndexed$_nth$arity$2(null,i__52670);
var state_52802 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app);
var state_id_52803 = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app,state_52802);
var remote_names_52804 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__52667,chunk__52668,count__52669,i__52670,state_52802,state_id_52803,remote_names_52804,app,G__52666,G__52666__$1,map__52664,map__52664__$1,message,type,data){
return (function (p1__52661_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__52661_SHARP_);
});})(seq__52667,chunk__52668,count__52669,i__52670,state_52802,state_id_52803,remote_names_52804,app,G__52666,G__52666__$1,map__52664,map__52664__$1,message,type,data))
,cljs.core.str),cljs.core.keys(remote_names_52804)),new cljs.core.Keyword("fulcro.inspect.client","initial-history-step","fulcro.inspect.client/initial-history-step",1169628321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),state_id_52803,new cljs.core.Keyword(null,"value","value",305978217),state_52802], null)]));


var G__52806 = seq__52667;
var G__52807 = chunk__52668;
var G__52808 = count__52669;
var G__52809 = (i__52670 + (1));
seq__52667 = G__52806;
chunk__52668 = G__52807;
count__52669 = G__52808;
i__52670 = G__52809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52667);
if(temp__5735__auto__){
var seq__52667__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52667__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52667__$1);
var G__52810 = cljs.core.chunk_rest(seq__52667__$1);
var G__52811 = c__4556__auto__;
var G__52812 = cljs.core.count(c__4556__auto__);
var G__52813 = (0);
seq__52667 = G__52810;
chunk__52668 = G__52811;
count__52669 = G__52812;
i__52670 = G__52813;
continue;
} else {
var app = cljs.core.first(seq__52667__$1);
var state_52815 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app);
var state_id_52816 = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app,state_52815);
var remote_names_52817 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__52667,chunk__52668,count__52669,i__52670,state_52815,state_id_52816,remote_names_52817,app,seq__52667__$1,temp__5735__auto__,G__52666,G__52666__$1,map__52664,map__52664__$1,message,type,data){
return (function (p1__52661_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__52661_SHARP_);
});})(seq__52667,chunk__52668,count__52669,i__52670,state_52815,state_id_52816,remote_names_52817,app,seq__52667__$1,temp__5735__auto__,G__52666,G__52666__$1,map__52664,map__52664__$1,message,type,data))
,cljs.core.str),cljs.core.keys(remote_names_52817)),new cljs.core.Keyword("fulcro.inspect.client","initial-history-step","fulcro.inspect.client/initial-history-step",1169628321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),state_id_52816,new cljs.core.Keyword(null,"value","value",305978217),state_52815], null)]));


var G__52823 = cljs.core.next(seq__52667__$1);
var G__52824 = null;
var G__52825 = (0);
var G__52826 = (0);
seq__52667 = G__52823;
chunk__52668 = G__52824;
count__52669 = G__52825;
i__52670 = G__52826;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__52676 = data;
var map__52676__$1 = (((((!((map__52676 == null))))?(((((map__52676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52676):map__52676);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52676__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52676__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5733__auto__)){
var app = temp__5733__auto__;
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_state))){
var map__52690_52827 = target_state;
var map__52690_52828__$1 = (((((!((map__52690_52827 == null))))?(((((map__52690_52827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52690_52827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52690_52827):map__52690_52827);
var id_52829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52690_52828__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var b2__11668__auto___52830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__11668__auto___52830)){
var app_52831__$1 = b2__11668__auto___52830;
var b2__11668__auto___52832__$1 = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app_52831__$1,id_52829);
if(cljs.core.truth_(b2__11668__auto___52832__$1)){
var map__52692_52833 = b2__11668__auto___52832__$1;
var map__52692_52834__$1 = (((((!((map__52692_52833 == null))))?(((((map__52692_52833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52692_52833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52692_52833):map__52692_52833);
var value_52835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692_52834__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app_52831__$1),value_52835);
} else {
}
} else {
}
} else {
}

var G__52694 = app;
var G__52695 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__52694,G__52695) : render_BANG_.call(null,G__52694,G__52695));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reset app on invalid uuid",app_uuid], null);
}),null)),null,-1105857362,null);
}

break;
case "fulcro.inspect.client/fetch-history-step":
var map__52696 = data;
var map__52696__$1 = (((((!((map__52696 == null))))?(((((map__52696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52696):map__52696);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var based_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52696__$1,new cljs.core.Keyword(null,"based-on","based-on",1217703581));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52696__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__11668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__11668__auto__)){
var app = b2__11668__auto__;
var b2__11668__auto____$1 = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app,id);
if(cljs.core.truth_(b2__11668__auto____$1)){
var map__52698 = b2__11668__auto____$1;
var map__52698__$1 = (((((!((map__52698 == null))))?(((((map__52698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52698):map__52698);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prior_state = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app,based_on);
var diff = (cljs.core.truth_(prior_state)?com.fulcrologic.fulcro.inspect.diff.diff(prior_state,value):null);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","history-entry","fulcro.inspect.client/history-entry",1162276680),(function (){var G__52700 = cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","state-id","fulcro.inspect.core/state-id",-89620020),id]);
var G__52700__$1 = (cljs.core.truth_(diff)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__52700,new cljs.core.Keyword("fulcro.inspect.client","diff","fulcro.inspect.client/diff",1522519471),diff,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"based-on","based-on",1217703581),based_on], 0)):G__52700);
if(cljs.core.not(diff)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52700__$1,new cljs.core.Keyword("fulcro.inspect.client","state","fulcro.inspect.client/state",-1243075171),value);
} else {
return G__52700__$1;
}
})());
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/transact":
var map__52702 = data;
var map__52702__$1 = (((((!((map__52702 == null))))?(((((map__52702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52702):map__52702);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52702__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52702__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52702__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5733__auto__)){
var app = temp__5733__auto__;
if(cljs.core.truth_(tx_ref)){
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app,tx,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,244,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transact on invalid uuid",app_uuid,"See https://book.fulcrologic.com/#err-inspect-invalid-app-uuid"], null);
}),null)),null,757910628,null);
}

break;
case "fulcro.inspect.client/pick-element":
if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.run_picker))){
var fexpr__52708 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.run_picker);
return (fexpr__52708.cljs$core$IFn$_invoke$arity$1 ? fexpr__52708.cljs$core$IFn$_invoke$arity$1(data) : fexpr__52708.call(null,data));
} else {
try{return alert("Element picker not installed. Add it to your preload.");
}catch (e52711){var _e = e52711;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,252,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element picker not installed in app. You must add it to you preloads. See https://book.fulcrologic.com/#err-inspect-elm-picker-missing"], null);
}),null)),null,-503758112,null);
}}

break;
case "fulcro.inspect.client/network-request":
var map__52713 = data;
var map__52713__$1 = (((((!((map__52713 == null))))?(((((map__52713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52713):map__52713);
var remote_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword(null,"mutation","mutation",-285823378));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__11668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__11668__auto__)){
var app = b2__11668__auto__;
var b2__11668__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.remotes(app),remote_name);
if(cljs.core.truth_(b2__11668__auto____$1)){
var remote = b2__11668__auto____$1;
var b2__11668__auto____$2 = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(remote);
if(cljs.core.truth_(b2__11668__auto____$2)){
var transmit_BANG_ = b2__11668__auto____$2;
var b2__11668__auto____$3 = edn_query_language.core.query__GT_ast((function (){var or__4126__auto__ = query;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return mutation;
}
})());
if(cljs.core.truth_(b2__11668__auto____$3)){
var ast = b2__11668__auto____$3;
var b2__11668__auto____$4 = cljs.core.random_uuid();
if(cljs.core.truth_(b2__11668__auto____$4)){
var tx_id = b2__11668__auto____$4;
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app,remote_name,tx_id,(function (){var or__4126__auto__ = query;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return mutation;
}
})());

var G__52718 = remote;
var G__52719 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),tx_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),(0),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),cljs.core.identity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__52720){
var map__52721 = p__52720;
var map__52721__$1 = (((((!((map__52721 == null))))?(((((map__52721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52721):map__52721);
var result = map__52721__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error_QMARK__52844 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((error_QMARK__52844.cljs$core$IFn$_invoke$arity$1 ? error_QMARK__52844.cljs$core$IFn$_invoke$arity$1(result) : error_QMARK__52844.call(null,result)))){
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,tx_id,result);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app,remote_name,tx_id,body);
}

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),body], null));
})], null);
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(G__52718,G__52719) : transmit_BANG_.call(null,G__52718,G__52719));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__52723 = data;
var map__52723__$1 = (((((!((map__52723 == null))))?(((((map__52723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52723):map__52723);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"3.0.0"], null));

break;
default:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,316,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown message",type], null);
}),null)),null,-1898664192,null);

}
});
com.fulcrologic.fulcro.inspect.inspect_client.install = (function com$fulcrologic$fulcro$inspect$inspect_client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_))){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,325,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Fulcro 3.x Inspect",cljs.core.PersistentArrayMap.EMPTY], null);
}),null)),null,1249106622,null);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_,true);

return com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages();
}
});
/**
 * Register the application with Inspect, if it is available.
 */
com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$app_started_BANG_(app){
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
var networking = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app);
var state_STAR_ = com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app);
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id(app);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.assoc,app_uuid,app);

com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app,cljs.core.deref(state_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);

com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__52725_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__52725_SHARP_);
}),cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_)]));

return cljs.core.add_watch(state_STAR_,app_uuid,(function (p1__52728_SHARP_,p2__52729_SHARP_,p3__52726_SHARP_,p4__52727_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_(app,p3__52726_SHARP_,p4__52727_SHARP_);
}));
} else {
return null;
}
});
/**
 * Notify inspect that a transaction finished.
 * 
 * app - The app
 * env - The mutation env that completed.
 */
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$optimistic_action_finished_BANG_(app,p__52734,p__52735){
var map__52736 = p__52734;
var map__52736__$1 = (((((!((map__52736 == null))))?(((((map__52736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52736):map__52736);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__52737 = p__52735;
var map__52737__$1 = (((((!((map__52737 == null))))?(((((map__52737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52737):map__52737);
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var state_id_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055));
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var component_name = com.fulcrologic.fulcro.inspect.inspect_client.get_component_name(component);
var current_id = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app);
var tx__$1 = (function (){var G__52741 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),tx_id,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","db-before-id","fulcro.history/db-before-id",1439381422),state_id_before,new cljs.core.Keyword("fulcro.history","db-after-id","fulcro.history/db-after-id",1928976932),current_id,new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options], null);
var G__52741__$1 = (cljs.core.truth_(component_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52741,new cljs.core.Keyword(null,"component","component",1555936782),component_name):G__52741);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52741__$1,new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478),ref);
} else {
return G__52741__$1;
}
})();
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx__$1]));
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.inspect_client.js.map
