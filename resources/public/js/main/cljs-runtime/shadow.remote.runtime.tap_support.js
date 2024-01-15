goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61880,p__61881){
var map__61882 = p__61880;
var map__61882__$1 = (((((!((map__61882 == null))))?(((((map__61882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61882):map__61882);
var svc = map__61882__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61882__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61882__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61883 = p__61881;
var map__61883__$1 = (((((!((map__61883 == null))))?(((((map__61883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61883):map__61883);
var msg = map__61883__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61883__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61886,p__61887){
var map__61888 = p__61886;
var map__61888__$1 = (((((!((map__61888 == null))))?(((((map__61888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61888):map__61888);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61888__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61889 = p__61887;
var map__61889__$1 = (((((!((map__61889 == null))))?(((((map__61889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61889):map__61889);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61892,p__61893){
var map__61894 = p__61892;
var map__61894__$1 = (((((!((map__61894 == null))))?(((((map__61894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61894):map__61894);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61895 = p__61893;
var map__61895__$1 = (((((!((map__61895 == null))))?(((((map__61895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61895):map__61895);
var msg = map__61895__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61895__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61898,tid){
var map__61899 = p__61898;
var map__61899__$1 = (((((!((map__61899 == null))))?(((((map__61899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61899):map__61899);
var svc = map__61899__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61899__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61905 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61906 = null;
var count__61907 = (0);
var i__61908 = (0);
while(true){
if((i__61908 < count__61907)){
var vec__61915 = chunk__61906.cljs$core$IIndexed$_nth$arity$2(null,i__61908);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61915,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61915,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61924 = seq__61905;
var G__61925 = chunk__61906;
var G__61926 = count__61907;
var G__61927 = (i__61908 + (1));
seq__61905 = G__61924;
chunk__61906 = G__61925;
count__61907 = G__61926;
i__61908 = G__61927;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61905);
if(temp__5735__auto__){
var seq__61905__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61905__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61905__$1);
var G__61928 = cljs.core.chunk_rest(seq__61905__$1);
var G__61929 = c__4556__auto__;
var G__61930 = cljs.core.count(c__4556__auto__);
var G__61931 = (0);
seq__61905 = G__61928;
chunk__61906 = G__61929;
count__61907 = G__61930;
i__61908 = G__61931;
continue;
} else {
var vec__61918 = cljs.core.first(seq__61905__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61918,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61918,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61932 = cljs.core.next(seq__61905__$1);
var G__61933 = null;
var G__61934 = (0);
var G__61935 = (0);
seq__61905 = G__61932;
chunk__61906 = G__61933;
count__61907 = G__61934;
i__61908 = G__61935;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61901_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61901_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61902_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61902_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61903_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61903_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61904_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61904_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61921){
var map__61922 = p__61921;
var map__61922__$1 = (((((!((map__61922 == null))))?(((((map__61922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61922):map__61922);
var svc = map__61922__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61922__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61922__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
