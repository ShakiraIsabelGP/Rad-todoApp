goog.provide('com.fulcrologic.fulcro.data_fetch');
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","data-state?","com.fulcrologic.fulcro.data-fetch/data-state?",1636177316,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Is the given parameter a load marker?
 * @type {function(*): !boolean}
 */
com.fulcrologic.fulcro.data_fetch.data_state_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$data_state_QMARK_(state){
var map__63343 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__63343__$1 = (((((!((map__63343 == null))))?(((((map__63343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63343):map__63343);
var retspec63340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63343__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec63339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63343__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec63339)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:22 data-state?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec63339,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null));
} else {
}

var f63342 = (function (state__$1){
return ((cljs.core.map_QMARK_(state__$1)) && (cljs.core.contains_QMARK_(state__$1,new cljs.core.Keyword(null,"status","status",-1997798413))));
});
var ret63341 = f63342(state);
if(cljs.core.truth_(retspec63340)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:22 data-state?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec63340,ret63341);
} else {
}

return ret63341;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","load-marker?","com.fulcrologic.fulcro.data-fetch/load-marker?",-1378161239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Is the given parameter a load marker?
 * @type {function(*): !boolean}
 */
com.fulcrologic.fulcro.data_fetch.load_marker_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$load_marker_QMARK_(x){
var map__63349 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__63349__$1 = (((((!((map__63349 == null))))?(((((map__63349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63349):map__63349);
var retspec63346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63349__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec63345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63349__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec63345)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:28 load-marker?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec63345,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
} else {
}

var f63348 = (function (x__$1){
return com.fulcrologic.fulcro.data_fetch.data_state_QMARK_(x__$1);
});
var ret63347 = f63348(x);
if(cljs.core.truth_(retspec63346)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:28 load-marker?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec63346,ret63347);
} else {
}

return ret63347;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","ready?","com.fulcrologic.fulcro.data-fetch/ready?",-1458502216,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Is the given load marker ready for loading?
 * @type {function(?cljs.core.IMap): !boolean}
 */
com.fulcrologic.fulcro.data_fetch.ready_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$ready_QMARK_(marker){
var map__63361 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__63361__$1 = (((((!((map__63361 == null))))?(((((map__63361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63361):map__63361);
var retspec63353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63361__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec63352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63361__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec63352)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:34 ready?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec63352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
} else {
}

var f63355 = (function (marker__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(marker__$1));
});
var ret63354 = f63355(marker);
if(cljs.core.truth_(retspec63353)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:34 ready?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec63353,ret63354);
} else {
}

return ret63354;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","loading?","com.fulcrologic.fulcro.data-fetch/loading?",2099698686,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Is the given load marker loading?
 * @type {function(?cljs.core.IMap): !boolean}
 */
com.fulcrologic.fulcro.data_fetch.loading_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$loading_QMARK_(marker){
var map__63367 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__63367__$1 = (((((!((map__63367 == null))))?(((((map__63367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63367):map__63367);
var argspec63363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63367__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec63364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63367__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec63363)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:38 loading?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec63363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
} else {
}

var f63366 = (function (marker__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(marker__$1));
});
var ret63365 = f63366(marker);
if(cljs.core.truth_(retspec63364)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:38 loading?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec63364,ret63365);
} else {
}

return ret63365;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","failed?","com.fulcrologic.fulcro.data-fetch/failed?",-702785179,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Is the given load marker indicate failed?
 * 
 *   WARNING: This function is current unimplemented and will be removed.  The new way of dealing with failure is to
 *   define an `error-action` for the load in question and modify your own state. You can also override
 * @type {function(?cljs.core.IMap): !boolean}
 */
com.fulcrologic.fulcro.data_fetch.failed_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$failed_QMARK_(marker){
var map__63373 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"marker","marker",865118313),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__63373__$1 = (((((!((map__63373 == null))))?(((((map__63373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63373):map__63373);
var retspec63370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63373__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec63369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63373__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec63369)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:42 failed?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec63369,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
} else {
}

var f63372 = (function (marker__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(marker__$1));
});
var ret63371 = f63372(marker);
if(cljs.core.truth_(retspec63370)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/data_fetch.cljc:42 failed?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec63370,ret63371);
} else {
}

return ret63371;
});
/**
 * The name of the table in which fulcro load markers are stored. You must query for this via a link query
 *   `[df/marker-table '_]` in any component that needs to use them (and refresh) during loads.
 */
com.fulcrologic.fulcro.data_fetch.marker_table = new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486);
/**
 * Remove items from a query (AST) that have a key that returns true for the elision-predicate
 */
com.fulcrologic.fulcro.data_fetch.elide_ast_nodes = (function com$fulcrologic$fulcro$data_fetch$elide_ast_nodes(p__63378,elision_predicate){
var map__63379 = p__63378;
var map__63379__$1 = (((((!((map__63379 == null))))?(((((map__63379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63379):map__63379);
var ast = map__63379__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63379__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63379__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(union_key) : elision_predicate.call(null,union_key));
if(cljs.core.truth_((function (){var or__4126__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(key) : elision_predicate.call(null,key));
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(children) <= (2));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.data-fetch",null,62,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0)),"See https://book.fulcrologic.com/#warn-union-needs-more-children"], null);
}),null)),null,492154560,null);
} else {
}

var new_ast = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__63375_SHARP_){
return (com.fulcrologic.fulcro.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__63375_SHARP_,elision_predicate) : com.fulcrologic.fulcro.data_fetch.elide_ast_nodes.call(null,p1__63375_SHARP_,elision_predicate));
}),c));
}));
if(cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new_ast))){
return new_ast;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_ast,new cljs.core.Keyword(null,"children","children",-940561982));
}
}
});
/**
 * Remove items from a query when the query element where the (node-predicate key) returns true. Commonly used with
 * a set as a predicate to elide specific well-known UI-only paths.
 */
com.fulcrologic.fulcro.data_fetch.elide_query_nodes = (function com$fulcrologic$fulcro$data_fetch$elide_query_nodes(query,node_predicate){
return edn_query_language.core.ast__GT_query(com.fulcrologic.fulcro.data_fetch.elide_ast_nodes(edn_query_language.core.query__GT_ast(query),node_predicate));
});
/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
com.fulcrologic.fulcro.data_fetch.load_params_STAR_ = (function com$fulcrologic$fulcro$data_fetch$load_params_STAR_(app,server_property_or_ident,class_or_factory,p__63381){
var map__63382 = p__63381;
var map__63382__$1 = (((((!((map__63382 == null))))?(((((map__63382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63382):map__63382);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"target","target",253001721));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63382__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63382__$1,new cljs.core.Keyword(null,"marker","marker",865118313),false);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"params","params",710516235));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var post_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63382__$1,new cljs.core.Keyword(null,"post-action","post-action",-542405960));
if((((target == null)) || (cljs.core.vector_QMARK_(target)))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if((((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if((((post_mutation_params == null)) || (cljs.core.map_QMARK_(post_mutation_params)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if((((params == null)) || (cljs.core.map_QMARK_(params)))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(((edn_query_language.core.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword)))){
} else {
throw (new Error("Assert failed: (or (eql/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

var state_map = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app));
var transformed_query = (cljs.core.truth_(class_or_factory)?(function (){var G__63384 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,state_map);
var G__63384__$1 = ((cljs.core.set_QMARK_(without))?com.fulcrologic.fulcro.data_fetch.elide_query_nodes(G__63384,without):G__63384);
var G__63384__$2 = (cljs.core.truth_(focus)?edn_query_language.core.focus_subquery(G__63384__$1,focus):G__63384__$1);
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__63384__$2) : update_query.call(null,G__63384__$2));
} else {
return G__63384__$2;
}
})():null);
var query = (cljs.core.truth_((function (){var and__4115__auto__ = class_or_factory;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__4115__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,server_property_or_ident,null,(1),null)),(new cljs.core.List(null,transformed_query,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)))))):(cljs.core.truth_(class_or_factory)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,transformed_query])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,server_property_or_ident,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
var marker__$1 = ((marker === true)?(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.data-fetch",null,100,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boolean load marker no longer supported. See https://book.fulcrologic.com/#warn-boolean-marker-not-supported"], null);
}),null)),null,-513338030,null);

return false;
})()
:marker);
if(cljs.core.truth_((function (){var and__4115__auto__ = target;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(com.fulcrologic.fulcro.algorithms.data_targeting.special_target_QMARK_(target)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(target))));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.data-fetch",null,104,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Data load targets of two elements imply that you are targeting a table entry. That is probably","incorrect. Normalization targets tables. Targeting is for creating missing edges, which are usually 3-tuples. See https://book.fulcrologic.com/#warn-data-load-targets-table"], null);
}),null)),null,-1441047780,null);
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"error-action","error-action",-1147840498),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"post-action","post-action",-542405960),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,fallback,marker__$1,server_property_or_ident,error_action,post_mutation,ok_action,post_mutation_params,post_action,target,query,abort_id]);
});
/**
 * Adds a load marker at the given `marker` id to df/marker-table with the given status.
 * 
 *   NOTE: You must query for the marker table in any component that wants to show activity.
 */
com.fulcrologic.fulcro.data_fetch.set_load_marker_BANG_ = (function com$fulcrologic$fulcro$data_fetch$set_load_marker_BANG_(app,marker,status){
if(cljs.core.truth_(marker)){
var map__63387 = app;
var map__63387__$1 = (((((!((map__63387 == null))))?(((((map__63387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63387):map__63387);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,marker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));

var G__63389 = app;
var G__63390 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__63389,G__63390) : render_BANG_.call(null,G__63389,G__63390));
} else {
return null;
}
});
/**
 * Removes the load marker with the given `marker` id from the df/marker-table.
 */
com.fulcrologic.fulcro.data_fetch.remove_load_marker_BANG_ = (function com$fulcrologic$fulcro$data_fetch$remove_load_marker_BANG_(app,marker){
if(cljs.core.truth_(marker)){
var map__63391 = app;
var map__63391__$1 = (((((!((map__63391 == null))))?(((((map__63391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63391):map__63391);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63391__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,com.fulcrologic.fulcro.data_fetch.marker_table,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker], 0));
} else {
return null;
}
});
/**
 * Default processing when a load finishes successfully (called internally).
 * 
 *   Removes any load marker, then either:
 * 
 *   - Runs the `ok-action` (if defined).
 *   - Does normal post-processing (if the was no ok-action):
 *     - Merges the load result
 *     - Processes desired targets
 *     - Runs the post-mutation (if defined)
 *     - Runs the post-action (if defined)
 */
com.fulcrologic.fulcro.data_fetch.finish_load_BANG_ = (function com$fulcrologic$fulcro$data_fetch$finish_load_BANG_(p__63396,p__63397){
var map__63398 = p__63396;
var map__63398__$1 = (((((!((map__63398 == null))))?(((((map__63398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63398):map__63398);
var env = map__63398__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__63399 = p__63397;
var map__63399__$1 = (((((!((map__63399 == null))))?(((((map__63399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63399):map__63399);
var params = map__63399__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var post_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"post-action","post-action",-542405960));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"target","target",253001721));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var source_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"source-key","source-key",-1325875542));
com.fulcrologic.fulcro.data_fetch.remove_load_marker_BANG_(app,marker);

var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"load-params","load-params",38753949),params);
if(cljs.core.fn_QMARK_(ok_action)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,156,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skipping default merge and calling user-supplied ok-action."], null);
}),null)),null,1033589272,null);

return (ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env__$1) : ok_action.call(null,env__$1));
} else {
var map__63402 = result;
var map__63402__$1 = (((((!((map__63402 == null))))?(((((map__63402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63402):map__63402);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63402__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63402__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var mark_query = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(transmitted_ast);
}
})();
var body__$1 = com.fulcrologic.fulcro.algorithms.merge.mark_missing(body,mark_query);
var map__63403 = app;
var map__63403__$1 = (((((!((map__63403 == null))))?(((((map__63403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63403):map__63403);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63403__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var G__63406 = com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$3(s,query,body__$1);
if(cljs.core.truth_(target)){
return com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__63406,source_key,target);
} else {
return G__63406;
}
}));

if((post_mutation instanceof cljs.core.Symbol)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,post_mutation,null,(1),null)),(new cljs.core.List(null,(function (){var or__4126__auto__ = post_mutation_params;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),null,(1),null))))),null,(1),null)))))));
} else {
}

if(cljs.core.fn_QMARK_(post_action)){
return (post_action.cljs$core$IFn$_invoke$arity$1 ? post_action.cljs$core$IFn$_invoke$arity$1(env__$1) : post_action.call(null,env__$1));
} else {
return null;
}
}
});
/**
 * The normal internal processing of a load that has failed (error returned true).
 * 
 *   Sets the load marker, if present, to :failed.
 * 
 *   If an `error-action` was desired, it is used to process the rest of the failure.
 * 
 *   The `env` will include the network `:result` and the original load options as `:load-params`.
 * 
 *   *Otherwise*, this function will:
 * 
 *   - Trigger the global error action (if defined on the app) (arg is env as described above)
 *   - Trigger any fallback for the load. (params are the env described above)
 *   
 */
com.fulcrologic.fulcro.data_fetch.load_failed_BANG_ = (function com$fulcrologic$fulcro$data_fetch$load_failed_BANG_(p__63412,p__63413){
var map__63414 = p__63412;
var map__63414__$1 = (((((!((map__63414 == null))))?(((((map__63414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63414):map__63414);
var env = map__63414__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__63415 = p__63413;
var map__63415__$1 = (((((!((map__63415 == null))))?(((((map__63415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63415):map__63415);
var params = map__63415__$1;
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63415__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63415__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63415__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
com.fulcrologic.fulcro.data_fetch.set_load_marker_BANG_(app,marker,new cljs.core.Keyword(null,"failed","failed",-1397425762));

var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"load-params","load-params",38753949),params);
if(cljs.core.fn_QMARK_(error_action)){
return (error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env__$1) : error_action.call(null,env__$1));
} else {
var temp__5735__auto___63514 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(temp__5735__auto___63514)){
var global_error_action_63515 = temp__5735__auto___63514;
(global_error_action_63515.cljs$core$IFn$_invoke$arity$1 ? global_error_action_63515.cljs$core$IFn$_invoke$arity$1(env__$1) : global_error_action_63515.call(null,env__$1));
} else {
}

if((fallback instanceof cljs.core.Symbol)){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,fallback,null,(1),null)),(new cljs.core.List(null,env__$1,null,(1),null))))),null,(1),null)))))));
} else {
return null;
}
}
});
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","internal-load!","com.fulcrologic.fulcro.data-fetch/internal-load!",273645565,null),(function (p__63418){
var map__63419 = p__63418;
var map__63419__$1 = (((((!((map__63419 == null))))?(((((map__63419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63419):map__63419);
var env = map__63419__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63419__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235));
var map__63421 = params;
var map__63421__$1 = (((((!((map__63421 == null))))?(((((map__63421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63421):map__63421);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63421__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63421__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63421__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var remote_key = (function (){var or__4126__auto__ = remote;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})();
var G__63423 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"action","action",-811238024),(function (p__63424){
var map__63425 = p__63424;
var map__63425__$1 = (((((!((map__63425 == null))))?(((((map__63425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63425):map__63425);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return com.fulcrologic.fulcro.data_fetch.set_load_marker_BANG_(app,marker,new cljs.core.Keyword(null,"loading","loading",-737050189));
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (p__63427){
var map__63428 = p__63427;
var map__63428__$1 = (((((!((map__63428 == null))))?(((((map__63428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63428):map__63428);
var env__$1 = map__63428__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63428__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63428__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
return com.fulcrologic.fulcro.data_fetch.load_failed_BANG_(env__$1,params);
} else {
return com.fulcrologic.fulcro.data_fetch.finish_load_BANG_(env__$1,params);
}
}),remote_key,(function (_){
return edn_query_language.core.query__GT_ast(query);
})]);
return G__63423;
}));
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive a query of the form: [({server-property (comp/get-query class-or-factory)} params)], which
 *   a Fulcro parser will correctly parse as a join on server-property with the given subquery and params. See the AST and
 *   instructions on parsing queries in the developer's guide.
 * 
 *   Parameters:
 *   - `app-or-comp` : A component instance or Fulcro application
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `class-or-factory` : A component that implements IQuery, or a factory for it (if using dynamic queries). This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  class-or-factory can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery (as an edge (normalized) or value (not normalized)).
 *  Can also be special targets (multiple-targets, append-to,
 *  prepend-to, or replace-at). If you are loading by keyword (into root), then this relocates the result (ident or value) after load.
 *  When loading an entity (by ident), then this option will place additional idents at the target path(s) that point to that entity.
 *   - `initialize` - REMOVED. Use component pre-merge instead.
 *   - `remote` - Optional. Keyword name of the remote that this load should come from.
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - ID of marker. Normalizes a load marker into app state so you can see progress.
 *   - `refresh` - A list of things in the UI to refresh. Depends on rendering optimization.
 *   - `focus` - Focus the query along a path. See eql/focus-subquery.
 *   - `without` - A set of keys to remove (recursively) from the query.
 *   - `update-query` - A general-purpose function that can transform the component query before sending to remote. See also
 *   the application's `:global-eql-transform` option.
 *   For example, to focus a subquery using update-query: `{:update-query #(eql/focus-subquery % [:my {:sub [:query]}])}`
 *   Removing properties (like previous :without option): `{:update-query #(df/elide-query-nodes % #{:my :elisions})}`
 *   - `abort-id` - Set a unique key. If supplied, then the load can be cancelled via that abort ID.
 *   - `parallel` - Send the load out-of-order (immediately) without waiting for other loads in progress.
 *   - `post-mutation` - A mutation (symbol) to run *after* the data is merged. Note, if target is supplied be sure your post mutation
 *  should expect the data at the targeted location. The `env` of that mutation will be the env of the load (if available), but will also include `:load-request`.
 *   - `post-mutation-params` - An optional map that will be passed to the post-mutation when it is called.
 *   - `post-action` - A lambda that will get a mutation env parameter `(fn [env] ...)`. Called after success, like post-mutation
 *  (and after post-mutation if also defined). `env` will include the original `:load-params` and raw network layer `:result`. If you
 *  want the post behavior to act as a top-level mutation, then prefer `post-mutation`. The action can also call `transact!`.
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error. The `env` of the fallback will be like a mutation `env`, and will
 *  include a `:result` key with the real result from the server, along with the original `:load-params`.
 * 
 *   Special-purpose config options:
 * 
 *   The config options can also include the following things that completely override behaviors of other (respons-processing) options,
 *   and should only be used in very advanced situations where you know what you are doing:
 * 
 *   - `ok-action` - WARNING: OVERRIDES ALL DEFAULT OK BEHAVIOR (except load marker removal)! A lambda that will receive an env parameter `(fn [env] ...)` that
 *  includes the `:result` and original `:load-params`.
 *   - `error-action` - WARNING: OVERRIDES ALL DEFAULT ERROR BEHAVIOR (except load marker update). A lambda that will receive an `env`
 *  that includes the `:result` and original `:load-params`.
 *   
 */
com.fulcrologic.fulcro.data_fetch.load_BANG_ = (function com$fulcrologic$fulcro$data_fetch$load_BANG_(var_args){
var G__63431 = arguments.length;
switch (G__63431) {
case 3:
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp,server_property_or_ident,class_or_factory){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app_or_comp,server_property_or_ident,class_or_factory,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,server_property_or_ident,class_or_factory,config){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var txn_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY);
var map__63432 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684).cljs$core$IFn$_invoke$arity$1(app);
var map__63432__$1 = (((((!((map__63432 == null))))?(((((map__63432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63432):map__63432);
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var load_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225));
var map__63433 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__63435 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),load_marker_default,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null);
if(cljs.core.truth_(query_transform_default)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63435,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),query_transform_default);
} else {
return G__63435;
}
})(),config], 0));
var map__63433__$1 = (((((!((map__63433 == null))))?(((((map__63433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63433):map__63433);
var config__$1 = map__63433__$1;
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63433__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63433__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var load_sym = (function (){var or__4126__auto__ = load_mutation;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","internal-load!","com.fulcrologic.fulcro.data-fetch/internal-load!",273645565,null);
}
})();
var mutation_args = com.fulcrologic.fulcro.data_fetch.load_params_STAR_(app,server_property_or_ident,class_or_factory,config__$1);
var abort_id = new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(mutation_args);
if(cljs.core.truth_(query_transform_default)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.data-fetch",null,279,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query-transform-default is a dangerous option that can break general merge behaviors. Do not use it. See https://book.fulcrologic.com/#warn-dont-use-query-transform-default"], null);
}),null)),null,1343664875,null);
} else {
}

return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,load_sym,null,(1),null)),(new cljs.core.List(null,mutation_args,null,(1),null))))),null,(1),null)))))),(function (){var G__63437 = txn_options;
var G__63437__$1 = ((cljs.core.seq(refresh))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63437,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh):G__63437);
var G__63437__$2 = ((cljs.core.boolean_QMARK_(parallel))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63437__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),parallel):G__63437__$1);
if(cljs.core.truth_(abort_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63437__$2,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),abort_id);
} else {
return G__63437__$2;
}
})());
}));

(com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Load a field of the current component. Runs `prim/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load. If `field` is a *vector* of keywords then
 *   this function will load all of the fields specified.
 *   - `options` : A map of load options. See `load`.
 * 
 *   WARNING: If you're using dynamic queries, you won't really know what factory your parent is using,
 *   nor can you pass it as a parameter to this function. Therefore, it is not recommended to use load-field from within
 *   a component that has a dynamic query unless you can base it on the original static query.
 *   
 */
com.fulcrologic.fulcro.data_fetch.load_field_BANG_ = (function com$fulcrologic$fulcro$data_fetch$load_field_BANG_(var_args){
var G__63439 = arguments.length;
switch (G__63439) {
case 2:
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.data_fetch.load_field_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,field_or_fields){
return com.fulcrologic.fulcro.data_fetch.load_field_BANG_.cljs$core$IFn$_invoke$arity$3(component,field_or_fields,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.data_fetch.load_field_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,field_or_fields,options){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(component);
var map__63440 = options;
var map__63440__$1 = (((((!((map__63440 == null))))?(((((map__63440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63440):map__63440);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63440__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63440__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791));
var map__63441 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684).cljs$core$IFn$_invoke$arity$1(app);
var map__63441__$1 = (((((!((map__63441 == null))))?(((((map__63441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63441):map__63441);
var load_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63441__$1,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225));
var load_sym = (function (){var or__4126__auto__ = load_mutation;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","internal-load!","com.fulcrologic.fulcro.data-fetch/internal-load!",273645565,null);
}
})();
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(component);
var update_query__$1 = (function (q){
var G__63444 = edn_query_language.core.focus_subquery(q,((cljs.core.vector_QMARK_(field_or_fields))?field_or_fields:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_or_fields], null)));
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__63444) : update_query.call(null,G__63444));
} else {
return G__63444;
}
});
var params = com.fulcrologic.fulcro.data_fetch.load_params_STAR_(app,ident,component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),update_query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-key","source-key",-1325875542),com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(component)], 0)));
var abort_id = new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(params);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,load_sym,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null),(function (){var G__63445 = cljs.core.PersistentArrayMap.EMPTY;
var G__63445__$1 = ((cljs.core.boolean_QMARK_(parallel))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63445,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),parallel):G__63445);
if(cljs.core.truth_(abort_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),abort_id);
} else {
return G__63445__$1;
}
})());
}));

(com.fulcrologic.fulcro.data_fetch.load_field_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.data_fetch.refresh_BANG_ = (function com$fulcrologic$fulcro$data_fetch$refresh_BANG_(var_args){
var G__63447 = arguments.length;
switch (G__63447) {
case 2:
return com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,load_options){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(component,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(component),component,load_options);
}));

(com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(component,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(component),component);
}));

(com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Use `load!`
 */
com.fulcrologic.fulcro.data_fetch.load = com.fulcrologic.fulcro.data_fetch.load_BANG_;
/**
 * DEPRECATED. Use `load-field!`
 */
com.fulcrologic.fulcro.data_fetch.load_field = com.fulcrologic.fulcro.data_fetch.load_field_BANG_;

//# sourceMappingURL=com.fulcrologic.fulcro.data_fetch.js.map
