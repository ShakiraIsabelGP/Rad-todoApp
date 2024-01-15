goog.provide('com.fulcrologic.fulcro.application');
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",601748090,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),null,null,null));


/**
 * Return the current basis time of the app.
 * @type {function(*): !number}
 */
com.fulcrologic.fulcro.application.basis_t = (function com$fulcrologic$fulcro$application$basis_t(app){
var map__67238 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),null,null,null);
var map__67238__$1 = (((((!((map__67238 == null))))?(((((map__67238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67238):map__67238);
var retspec67234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67238__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec67233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67238__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec67233)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:24 basis-t's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app], null));
} else {
}

var f67236 = (function (app__$1){
return com.fulcrologic.fulcro.raw.application.basis_t(app__$1);
});
var ret67235 = f67236(app);
if(cljs.core.truth_(retspec67234)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:24 basis-t's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67234,ret67235);
} else {
}

return ret67235;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","current-state","com.fulcrologic.fulcro.application/current-state",2066955116,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));


/**
 * Get the current value of the application state database. If called without arguments it will attempt to find the app
 * in the dynamically-bound comp/*app*, which is bound during render.
 * @type {function(*): !cljs.core.IMap}
 */
com.fulcrologic.fulcro.application.current_state = (function com$fulcrologic$fulcro$application$current_state(app_or_component){
var map__67256 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null);
var map__67256__$1 = (((((!((map__67256 == null))))?(((((map__67256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67256):map__67256);
var retspec67243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67256__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec67242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67256__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec67242)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:30 current-state's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67242,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_or_component], null));
} else {
}

var f67245 = (function (app_or_component__$1){
return com.fulcrologic.fulcro.raw.application.current_state(app_or_component__$1);
});
var ret67244 = f67245(app_or_component);
if(cljs.core.truth_(retspec67243)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:30 current-state's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67243,ret67244);
} else {
}

return ret67244;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","tick!","com.fulcrologic.fulcro.application/tick!",-2144715376,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Move the basis-t forward one tick. For internal use in internal algorithms. Fulcro
 *   uses this to add metadata to props so it can detect the newer of two version of props.
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.application.tick_BANG_ = (function com$fulcrologic$fulcro$application$tick_BANG_(app){
var map__67271 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__67271__$1 = (((((!((map__67271 == null))))?(((((map__67271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67271):map__67271);
var retspec67259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67271__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec67258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67271__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec67258)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:37 tick!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67258,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app], null));
} else {
}

var f67261 = (function (app__$1){
return com.fulcrologic.fulcro.raw.application.tick_BANG_(app__$1);
});
var ret67260 = f67261(app);
if(cljs.core.truth_(retspec67259)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:37 tick!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67259,ret67260);
} else {
}

return ret67260;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","update-shared!","com.fulcrologic.fulcro.application/update-shared!",-999478990,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Force shared props to be recalculated. This updates the shared props on the app, and future renders will see the
 * updated values. This is a no-op if no shared-fn is defined on the app. If you're using React 16+ consider using
 * Context instead of shared.
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.application.update_shared_BANG_ = (function com$fulcrologic$fulcro$application$update_shared_BANG_(p__67282){
var map__67283 = p__67282;
var map__67283__$1 = (((((!((map__67283 == null))))?(((((map__67283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67283):map__67283);
var app = map__67283__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__67285 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__67285__$1 = (((((!((map__67285 == null))))?(((((map__67285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67285):map__67285);
var argspec67274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67285__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec67275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67285__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec67274)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:44 update-shared!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67274,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app], null));
} else {
}

var f67277 = (function (p__67287){
var map__67288 = p__67287;
var map__67288__$1 = (((((!((map__67288 == null))))?(((((map__67288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67288):map__67288);
var app__$1 = map__67288__$1;
var runtime_atom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
try{var temp__5733__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
if(cljs.core.truth_(temp__5733__auto__)){
var shared_fn = temp__5733__auto__;
var shared = new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
var state = com.fulcrologic.fulcro.application.current_state(app__$1);
var root_class = new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state);
var v = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state,state);
var shared_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shared,(shared_fn.cljs$core$IFn$_invoke$arity$1 ? shared_fn.cljs$core$IFn$_invoke$arity$1(v) : shared_fn.call(null,v))], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom__$1,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),shared_props);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom__$1,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
}
}catch (e67290){var e = e67290;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.application",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Cannot compute shared. See https://book.fulcrologic.com/#err-cannot-compute-shared"], null);
}),null)),null,285895039,null);
}});
var ret67276 = f67277(app);
if(cljs.core.truth_(retspec67275)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:44 update-shared!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67275,ret67276);
} else {
}

return ret67276;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","root-props-changed?","com.fulcrologic.fulcro.application/root-props-changed?",871223729,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Returns true if the props queries directly by the root component of the app (if mounted) have changed since the last
 *   render.  This is a shallow analysis such that, for example, a join from root (in a normalized db) will be checked as a difference
 *   of idents that the root prop points to.  This can be used for determining if things like shared-fn need to be re-run,
 *   and if it would simply be quicker to keyframe render the entire tree.
 * 
 *   This is a naivé algorithm that is essentially `select-keys` on the root props. It does not interpret the query in
 *   any way.
 * @type {function(*): !boolean}
 */
com.fulcrologic.fulcro.application.root_props_changed_QMARK_ = (function com$fulcrologic$fulcro$application$root_props_changed_QMARK_(app){
var map__67296 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__67296__$1 = (((((!((map__67296 == null))))?(((((map__67296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67296):map__67296);
var retspec67292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67296__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec67291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67296__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec67291)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:63 root-props-changed?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app], null));
} else {
}

var f67294 = (function (app__$1){
var map__67299 = app__$1;
var map__67299__$1 = (((((!((map__67299 == null))))?(((((map__67299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67299):map__67299);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67299__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67299__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__67300 = cljs.core.deref(runtime_atom);
var map__67300__$1 = (((((!((map__67300 == null))))?(((((map__67300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67300):map__67300);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67300__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67300__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
if(cljs.core.not(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,cljs.core.deref(state_atom)))){
return true;
} else {
var state_map = cljs.core.deref(state_atom);
var prior_state_map = new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var root_props = new cljs.core.Keyword(null,"root-props","root-props",-1015460595).cljs$core$IFn$_invoke$arity$1(indexes);
var root_old = cljs.core.select_keys(prior_state_map,root_props);
var root_new = cljs.core.select_keys(state_map,root_props);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_old,root_new);
}
});
var ret67293 = f67294(app);
if(cljs.core.truth_(retspec67292)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:63 root-props-changed?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67292,ret67293);
} else {
}

return ret67293;
});

/**
 * 
 *   [app]
 *   [app options]
 * 
 *   Render the application immediately.  Prefer `schedule-render!`, which will ensure no more than 60fps.
 * 
 *   This is the central processing for render and cannot be overridden. `schedule-render!` will always invoke
 *   this function.  The optimized render is called by this function, which does extra bookkeeping and
 *   other supporting features common to all rendering.
 * 
 *   Options include:
 *   - `force-root?`: boolean.  When true disables all optimizations and forces a full root re-render.
 *   - anything your selected rendering optization system allows.  Shared props are updated via `shared-fn`
 *   only on `force-root?` and when (shallow) root props change.
 *   
 */
com.fulcrologic.fulcro.application.render_BANG_ = com.fulcrologic.fulcro.raw.application.render_BANG_;
/**
 * [app]
 * [app options]
 * 
 * Schedule a render on the next animation frame.
 */
com.fulcrologic.fulcro.application.schedule_render_BANG_ = com.fulcrologic.fulcro.raw.application.schedule_render_BANG_;
/**
 * 
 *   [{:keys [status-code]}]
 * 
 *   Default detection of network errors. Returns true if the status-code of the given result
 *   map is not 200.
 */
com.fulcrologic.fulcro.application.default_remote_error_QMARK_ = com.fulcrologic.fulcro.raw.application.default_remote_error_QMARK_;
/**
 * 
 *   [ast]
 * 
 *   The default query transform function.  It makes sure the following items on a component query
 *   are never sent to the server:
 * 
 *   - Props whose namespace is `ui`
 *   - Any prop or join that is namespaced to com.fulcrologic.fulcro*
 *   - Any ident (as a prop or join) whose table name is namespaced ui or com.fulcrologic.fulcro*
 * 
 *   Takes an AST and returns the modified AST.
 *   
 */
com.fulcrologic.fulcro.application.default_global_eql_transform = com.fulcrologic.fulcro.raw.application.default_global_eql_transform;
/**
 * Initialize the app state using `root` component's app state. This will deep merge against any data that is already
 *   in the state atom of the app. Can be called before `mount!`, in which case you should tell mount not to (re) initialize
 *   state.
 */
com.fulcrologic.fulcro.application.initialize_state_BANG_ = (function com$fulcrologic$fulcro$application$initialize_state_BANG_(app,root){
if(cljs.core.truth_(goog.DEBUG)){
(com.fulcrologic.fulcro.components.check_component_registry_BANG_.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.components.check_component_registry_BANG_.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.components.check_component_registry_BANG_.call(null));
} else {
}

var initial_db = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app));
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root,initial_db);
var _ = com.fulcrologic.fulcro.algorithms.do_not_use.dev_check_query(root_query,com.fulcrologic.fulcro.components.component_name);
var initial_tree = (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1(root) : com.fulcrologic.fulcro.components.get_initial_state.call(null,root));
var db_from_ui = (cljs.core.truth_(root_query)?com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(root_query,initial_tree,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1(initial_tree)),root):initial_tree);
var db = com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_db,db_from_ui], 0));
return cljs.core.reset_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app),db);
});
com.fulcrologic.fulcro.application.default_tx_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_;
/**
 * Create a new Fulcro application.
 * 
 *   `options`: A map of initial options
 * 
 * * `:initial-db` a *map* containing a *normalized* Fulcro app db.  Normally Fulcro will populate app state with
 *   your component tree's initial state.  Use `mount!` options to toggle the initial state pull from root.
 * * `:optimized-render!` - A function that can analyze the state of the application and optimally refresh the screen.
 *   Defaults to `multiple-roots-renderer` (highly recommended), but other options are available in the rendering package.
 *   Further customizations are
 *   also possible.  Most applications will likely be best with the default. Standard Fulcro components are also pure
 *   (unless you supply `shouldComponentUpdate` to change that) to prevent rendering when props have not changed.
 * * `default-result-action!` - A `(fn [env])` that will be used in your mutations defined with `defmutation` as the
 *   default `:result-action` when none is supplied. Normally defaults to a function that supports mutation joins, targeting,
 *   and ok/error actions. WARNING: Overriding this is for advanced users and can break important functionality. The
 *   default is value for this option is `com.fulcrologic.fulcro.mutations/default-result-action!`, which could be used
 *   as an element of your own custom implementation.
 * * `:global-eql-transform` - A `(fn [AST] new-AST)` that will be asked to rewrite the AST of all transactions just
 *   before they are placed on the network layer.
 * * `:client-will-mount` - A `(fn [app])` that is called after the application is fully initialized, but just before
 * it mounts. This is triggered when you call `app/mount!`, but after all internals have been properly initialized.
 * * `:client-did-mount` - A `(fn [app])` that is called when the application mounts the first time. WARNING: Due to
 *   the async nature of js and React this function is not guaranteed to be called after the application is
 *   completely on the DOM.  If you need that guarantee then consider using `:componentDidMount` on your application's
 *   root component.
 * * `:remotes` - A map from remote name to a remote handler, which is defined as a map that contains at least
 *   a `:transmit!` key whose value is a `(fn [remote send-node])`. See `networking.http-remote`.
 * * `:shared` - A (static) map of data that should be visible in all components through `comp/shared`.
 * * `:shared-fn` - A function on root props that can select/augment shared whenever a forced root render
 *   or explicit call to `app/update-shared!` happens.
 * * `:props-middleware` - A function that can add data to the 4th (optional) argument of
 *   `defsc`.  Useful for allowing users to quickly destructure extra data created by
 *   component extensions. See the fulcro-garden-css project on github for an example usage.
 * * `:before-render` - A `(fn [app RootClass])` which is called just before rendering (usually just after transactions).
 *   This can be used as a convenient hook to update the state atom in `app` before it is rendered.
 * * `:render-middleware` - A `(fn [this real-render])`. If supplied it will be called for every Fulcro component
 *   render, and *must* call (and return the result of) `real-render`.  This can be used to wrap the real render
 *   function in order to do things like measure performance, set dynamic vars, or augment the UI in arbitrary ways.
 *   `this` is the component being rendered.
 * * `:remote-error?` - A `(fn [result] boolean)`. It can examine the network result and should only return
 *   true when the result is an error. The `result` will contain both a `:body` and `:status-code` when using
 *   the normal remotes.  The default version of this returns true if the status code isn't 200.
 * * `:global-error-action` - A `(fn [env] ...)` that is run on any remote error (as defined by `remote-error?`).
 * * `:load-mutation` - A symbol. Defines which mutation to use as an implementation of low-level load operations. See
 *   Developer's Guide
 * * `:query-transform-default` - DEPRECATED. This will break things in unexpected ways. Prefer `:global-eql-transform`.
 * * `:load-marker-default` - A default value to use for load markers. Defaults to false.
 * * `:core-render!` - A `(fn [app options])` that is mean to side-effect and render your application. Normally does
 *   binding of React-based dynamic vars and calls `optimized-render!`.
 * * `:render-root!` - The function to call in order to render the root of your application. Defaults
 *   to `js/ReactDOM.render`.
 * * `:hydrate-root!` - The function to call in order to hydrate the root of your application. Defaults
 *   to `js/ReactDOM.hydrate`.
 * * `:unmount-root!` - The function to call in order to unmount the root of your application. Defaults
 *   to nothing.
 * * `:root-class` - The component class that will be the root. This can be specified just with `mount!`, but
 * giving it here allows you to do a number of tasks against the app before it is actually mounted. You can also use `app/set-root!`.
 * * `:submit-transaction!` - A function to implement how to submit transactions. This allows you to override how transactions
 *   are processed in Fulcro.  Calls to `comp/transact!` will come through this algorithm.
 * * `:abort-transaction!` - The function that can abort submitted transactions. Must be provided if you override
 *   `:submit-transaction!`, since the two are related.
 * * `:batching-enabled` - Default none. A set of remote names on which batching of reads should be allowed.
 *    If the tx processing supports it, then it will attempt to batch together multiple loads into
 *   a single request. WARNING: The server MUST support this as well (the latest built-in handle-api-request does).
 */
com.fulcrologic.fulcro.application.fulcro_app = (function com$fulcrologic$fulcro$application$fulcro_app(var_args){
var G__67308 = arguments.length;
switch (G__67308) {
case 0:
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1 = (function (p__67309){
var map__67310 = p__67309;
var map__67310__$1 = (((((!((map__67310 == null))))?(((((map__67310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67310):map__67310);
var options = map__67310__$1;
var default_result_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
var external_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"external-config","external-config",-471423941));
var global_error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
var render_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
var unmount_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"unmount-root!","unmount-root!",1516744861));
var client_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226));
var initial_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var props_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
var load_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312));
var core_render_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"core-render!","core-render!",1128819499));
var client_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037));
var hydrate_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
var batching_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692));
var global_eql_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var render_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
var optimized_render_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964));
var submit_transaction_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"submit-transaction!","submit-transaction!",554065589));
var abort_transaction_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"abort-transaction!","abort-transaction!",-1430666634));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"root-class","root-class",-267672298));
var remote_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67310__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
return com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"core-render!","core-render!",1128819499),(function (){var or__4126__auto__ = core_render_BANG_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (app,p__67321){
var map__67322 = p__67321;
var map__67322__$1 = (((((!((map__67322 == null))))?(((((map__67322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67322):map__67322);
var options__$1 = map__67322__$1;
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67322__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
var map__67324 = app;
var map__67324__$1 = (((((!((map__67324 == null))))?(((((map__67324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67324):map__67324);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67324__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__67325 = (function (){var G__67327 = runtime_atom;
if((G__67327 == null)){
return null;
} else {
return cljs.core.deref(G__67327);
}
})();
var map__67325__$1 = (((((!((map__67325 == null))))?(((((map__67325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67325):map__67325);
var root_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67325__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
if(cljs.core.truth_(root_class__$1)){
var optimized_render_BANG___$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964));
var shared_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157));
var _STAR_app_STAR__orig_val__67332 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__67333 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__67334 = app;
var _STAR_shared_STAR__temp_val__67335 = shared_props;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__67334);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__67335);

try{if(cljs.core.truth_(optimized_render_BANG___$1)){
var G__67338 = app;
var G__67339 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835),root_props_changed_QMARK_], null)], 0));
return (optimized_render_BANG___$1.cljs$core$IFn$_invoke$arity$2 ? optimized_render_BANG___$1.cljs$core$IFn$_invoke$arity$2(G__67338,G__67339) : optimized_render_BANG___$1.call(null,G__67338,G__67339));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.application",null,257,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Render skipped. No optimized render is configured."], null);
}),null)),null,-686273001,null);
}
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__67333);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__67332);
}} else {
return null;
}
});
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039),com.fulcrologic.fulcro.components.refresh_component_BANG_,new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964),(function (){var or__4126__auto__ = optimized_render_BANG_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_;
}
})()], 0)));
}));

(com.fulcrologic.fulcro.application.fulcro_app.cljs$lang$maxFixedArity = 1);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","fulcro-app?","com.fulcrologic.fulcro.application/fulcro-app?",-500612286,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Returns true if the given `x` is a Fulcro application.
 * @type {function(*): !boolean}
 */
com.fulcrologic.fulcro.application.fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$application$fulcro_app_QMARK_(x){
var map__67351 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__67351__$1 = (((((!((map__67351 == null))))?(((((map__67351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67351):map__67351);
var argspec67342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67351__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec67343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67351__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec67342)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:261 fulcro-app?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67342,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
} else {
}

var f67345 = (function (x__$1){
return com.fulcrologic.fulcro.raw.application.fulcro_app_QMARK_(x__$1);
});
var ret67344 = f67345(x);
if(cljs.core.truth_(retspec67343)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:261 fulcro-app?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67343,ret67344);
} else {
}

return ret67344;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.application","mounted?","com.fulcrologic.fulcro.application/mounted?",-1329500022,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Is the given app currently mounted on the DOM?
 * @type {function(*): !boolean}
 */
com.fulcrologic.fulcro.application.mounted_QMARK_ = (function com$fulcrologic$fulcro$application$mounted_QMARK_(p__67365){
var map__67366 = p__67365;
var map__67366__$1 = (((((!((map__67366 == null))))?(((((map__67366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67366):map__67366);
var arg_67354 = map__67366__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67366__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__67374 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__67374__$1 = (((((!((map__67374 == null))))?(((((map__67374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67374):map__67374);
var argspec67355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67374__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec67356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67374__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec67355)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:267 mounted?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec67355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_67354], null));
} else {
}

var f67358 = (function (p__67376){
var map__67377 = p__67376;
var map__67377__$1 = (((((!((map__67377 == null))))?(((((map__67377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67377):map__67377);
var arg_67354__$1 = map__67377__$1;
var runtime_atom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67377__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom__$1)));
});
var ret67357 = f67358(arg_67354);
if(cljs.core.truth_(retspec67356)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/application.cljc:267 mounted?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec67356,ret67357);
} else {
}

return ret67357;
});
/**
 * Set a root class to use on the app. Doing so allows much of the API to work before mounting the app.
 */
com.fulcrologic.fulcro.application.set_root_BANG_ = (function com$fulcrologic$fulcro$application$set_root_BANG_(app,root,p__67383){
var map__67384 = p__67383;
var map__67384__$1 = (((((!((map__67384 == null))))?(((((map__67384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67384):map__67384);
var initialize_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67384__$1,new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119),root);

if(cljs.core.truth_(initialize_state_QMARK_)){
return com.fulcrologic.fulcro.application.initialize_state_BANG_(app,root);
} else {
return null;
}
});
/**
 * Mount the app.  If called on an already-mounted app this will have the effect of re-installing the root node so that
 *   hot code reload will refresh the UI (useful for development).
 * 
 *   - `app`  The Fulcro app
 *   - `root`  The Root UI component
 *   - `node` The (string) ID or DOM node on which to mount.
 *   - `options` An optional map with additional mount options.
 * 
 * 
 *   `options` can include:
 * 
 *   - `:disable-client-did-mount?` (default false) - When false a true mount (as opposed to redundant) call of this function will
 *   invoke the application's `:client-did-mount` callback.
 *   - `:initialize-state?` (default true) - If NOT mounted already: Pulls the initial state tree from root component,
 *   normalizes it, and installs it as the application's state.  If there was data supplied as an initial-db, then this
 *   new initial state will be *merged* with that initial-db.
 *   - `:hydrate?` (default false) - Indicates that the DOM will already contain content from the
 *  server that should be attached instead of overwritten. See ReactDOM.hydrate.
 *   
 */
com.fulcrologic.fulcro.application.mount_BANG_ = (function com$fulcrologic$fulcro$application$mount_BANG_(var_args){
var G__67392 = arguments.length;
switch (G__67392) {
case 3:
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,root,node){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(app,root,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),true], null));
}));

(com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,root,node,p__67394){
var map__67395 = p__67394;
var map__67395__$1 = (((((!((map__67395 == null))))?(((((map__67395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67395):map__67395);
var initialize_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67395__$1,new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67395__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185));
var disable_client_did_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67395__$1,new cljs.core.Keyword(null,"disable-client-did-mount?","disable-client-did-mount?",845242928));
if(com.fulcrologic.fulcro.components.has_ident_QMARK_(root)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.application",null,304,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Root is not allowed to have an `:ident`. It is a special node that is co-located over the entire database. If you\n    are tempted to do things like `merge!` against Root then that component should *not* be considered Root: make another layer in your UI."], null);
}),null)),null,785829907,null);
} else {
var initialize_state_QMARK___$1 = ((cljs.core.boolean_QMARK_(initialize_state_QMARK_))?initialize_state_QMARK_:true);
var map__67397 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684).cljs$core$IFn$_invoke$arity$1(app);
var map__67397__$1 = (((((!((map__67397 == null))))?(((((map__67397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67397):map__67397);
var client_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67397__$1,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226));
var client_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67397__$1,new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037));
var reset_mountpoint_BANG_ = (function (){
var dom_node = ((typeof node === 'string')?goog.dom.getElement(node):node);
var root_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(root);
if((dom_node == null)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.application",null,312,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mount cannot find DOM node",node,"to mount",(com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(root) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,root)),"See https://book.fulcrologic.com/#err-mount-cannot-find-node"], null);
}),null)),null,-2057430344,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672),dom_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682),root_factory,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119),root], 0));

com.fulcrologic.fulcro.application.update_shared_BANG_(app);

com.fulcrologic.fulcro.algorithms.do_not_use.dev_check_query(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root,com.fulcrologic.fulcro.application.current_state(app)),com.fulcrologic.fulcro.components.component_name);

com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_(app);

var G__67399 = app;
var G__67400 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),hydrate_QMARK_], null);
return (com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(G__67399,G__67400) : com.fulcrologic.fulcro.application.render_BANG_.call(null,G__67399,G__67400));
}
});
if(com.fulcrologic.fulcro.application.mounted_QMARK_(app)){
return reset_mountpoint_BANG_();
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app),(function (p1__67389_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(root) : com.fulcrologic.fulcro.components.component_name.call(null,root))], null),p1__67389_SHARP_], 0));
}));

com.fulcrologic.fulcro.application.set_root_BANG_(app,root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),initialize_state_QMARK___$1], null));

com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_(app);

if(cljs.core.truth_((function (){var and__4115__auto__ = client_will_mount;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disable_client_did_mount_QMARK_);
} else {
return and__4115__auto__;
}
})())){
(client_will_mount.cljs$core$IFn$_invoke$arity$1 ? client_will_mount.cljs$core$IFn$_invoke$arity$1(app) : client_will_mount.call(null,app));
} else {
}

reset_mountpoint_BANG_();

if(cljs.core.truth_((function (){var and__4115__auto__ = client_did_mount;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disable_client_did_mount_QMARK_);
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(disable_client_did_mount_QMARK_)){
return null;
} else {
return (client_did_mount.cljs$core$IFn$_invoke$arity$1 ? client_did_mount.cljs$core$IFn$_invoke$arity$1(app) : client_did_mount.call(null,app));
}
} else {
return null;
}
}
}
}));

(com.fulcrologic.fulcro.application.mount_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes the app from its mount point. If you want to re-mount a running app, then you should pass
 * `:initialize-state? false` when you re-mount it and also consider the `:disable-client-did-mount?` option.
 */
com.fulcrologic.fulcro.application.unmount_BANG_ = (function com$fulcrologic$fulcro$application$unmount_BANG_(app){
var b2__11668__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"unmount-root!","unmount-root!",1516744861));
if(cljs.core.truth_(b2__11668__auto__)){
var unmount = b2__11668__auto__;
var b2__11668__auto____$1 = (function (){var G__67415 = app;
var G__67415__$1 = (((G__67415 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__67415));
var G__67415__$2 = (((G__67415__$1 == null))?null:cljs.core.deref(G__67415__$1));
if((G__67415__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672).cljs$core$IFn$_invoke$arity$1(G__67415__$2);
}
})();
if(cljs.core.truth_(b2__11668__auto____$1)){
var node = b2__11668__auto____$1;
(unmount.cljs$core$IFn$_invoke$arity$1 ? unmount.cljs$core$IFn$_invoke$arity$1(node) : unmount.call(null,node));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005));

return true;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.application",null,347,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot umount application because either the umount function is missing or the node was not recorded. Perhaps it wasn't mounted? See https://book.fulcrologic.com/#warn-cannot-unmount-application"], null);
}),null)),null,1753383699,null);

return false;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.application",null,347,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot umount application because either the umount function is missing or the node was not recorded. Perhaps it wasn't mounted? See https://book.fulcrologic.com/#warn-cannot-unmount-application"], null);
}),null)),null,-387935579,null);

return false;
}
});
/**
 * Remount the currently-mounted root onto a new DOM node. This is a convenience for umount/mount.
 * The options map is sent to `mount!`, and defaults to:
 * 
 * ```
 * {:initialize-state? false
 *  :hydrate? false
 *  :disable-client-did-mount? true}
 * ```
 * 
 */
com.fulcrologic.fulcro.application.remount_BANG_ = (function com$fulcrologic$fulcro$application$remount_BANG_(var_args){
var G__67417 = arguments.length;
switch (G__67417) {
case 2:
return com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,new_node){
return com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$3(app,new_node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),false,new cljs.core.Keyword(null,"disable-client-did-mount?","disable-client-did-mount?",845242928),true], null));
}));

(com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,new_node,options){
var map__67418 = (function (){var G__67419 = app;
var G__67419__$1 = (((G__67419 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__67419));
if((G__67419__$1 == null)){
return null;
} else {
return cljs.core.deref(G__67419__$1);
}
})();
var map__67418__$1 = (((((!((map__67418 == null))))?(((((map__67418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67418):map__67418);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67418__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
com.fulcrologic.fulcro.application.unmount_BANG_(app);

return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(app,root_class,new_node,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),false,new cljs.core.Keyword(null,"disable-client-did-mount?","disable-client-did-mount?",845242928),true], null),options], 0)));
}));

(com.fulcrologic.fulcro.application.remount_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns the current app root, if mounted. WARNING: The `:client-did-mount` in the app settings will *not* see a value
 * from this function due to the async nature of React. If you need to call this at app startup use the `:componentDidMount`
 * lifecycle method of your root component (at which point this will return the same thing as `this` in that method).
 */
com.fulcrologic.fulcro.application.app_root = (function com$fulcrologic$fulcro$application$app_root(app){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
});
/**
 * Returns the current app root class, if mounted.
 */
com.fulcrologic.fulcro.application.root_class = (function com$fulcrologic$fulcro$application$root_class(app){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
});
/**
 * Force a re-render of the root. Runs a root query, disables shouldComponentUpdate, and renders the root component.
 * This effectively forces React to do a full VDOM diff. Useful for things like UI refresh on hot code reload and
 * changing locales where there are no real data changes, but the UI still needs to refresh.
 * 
 * Argument can be anything that comp/any->app accepts.
 * 
 * WARNING: This disables all Fulcro rendering optimizations, so it is much slower than other ways of refreshing the app.
 * Use `schedule-render!` to request a normal optimized render.
 */
com.fulcrologic.fulcro.application.force_root_render_BANG_ = (function com$fulcrologic$fulcro$application$force_root_render_BANG_(app_ish){
var temp__5735__auto__ = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
if(cljs.core.truth_(temp__5735__auto__)){
var app = temp__5735__auto__;
com.fulcrologic.fulcro.application.update_shared_BANG_(app);

var G__67424 = app;
var G__67425 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(G__67424,G__67425) : com.fulcrologic.fulcro.application.render_BANG_.call(null,G__67424,G__67425));
} else {
return null;
}
});
/**
 * Attempt to abort the send queue entries with the given abort ID.
 * 
 *   NOTE: This can be redefined on an application. If you change your transaction processing routing, then the built-in
 *   version will not work, and this docstring does not apply.
 * 
 *   Will notify any aborted operations (e.g. result-handler
 *   will be invoked, remote-error? will be used to decide if you consider that an error, etc.).
 *   The result map from an abort will include `{::txn/aborted? true}`, but will not include `:status-code` or `:body`.
 * 
 *   This function affects both started and non-started items in the send queues, but will not affect submissions that have not yet
 *   made it to the network processing layer (things still in top-level transaction submission queue).
 * 
 *   So the sequence of calls:
 * 
 *   ```
 *   (comp/transact! this `[(f)] {:abort-id :a})
 *   (app/abort! this :a)
 *   ```
 * 
 *   will cancel anything active with abort id `:a`, but since you've held the thread the entire time the submission of
 *   mutation `(f)` is still on the submission queue and will not be aborted.
 * 
 *   - `app-ish`: Anything that can be coerced to an app with comp/any->app.
 *   - `abort-id`: The abort ID of the operations to be aborted.
 *   
 */
com.fulcrologic.fulcro.application.abort_BANG_ = (function com$fulcrologic$fulcro$application$abort_BANG_(app_ish,abort_id){
return com.fulcrologic.fulcro.raw.application.abort_BANG_(app_ish,abort_id);
});
/**
 * Add (or replace) a render listener named `nm`. `listener` is a `(fn [app options] )` that will be called
 * after each render.
 */
com.fulcrologic.fulcro.application.add_render_listener_BANG_ = (function com$fulcrologic$fulcro$application$add_render_listener_BANG_(app,nm,listener){
return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,nm,listener);
});
/**
 * Remove the render listener named `nm`.
 */
com.fulcrologic.fulcro.application.remove_render_listener_BANG_ = (function com$fulcrologic$fulcro$application$remove_render_listener_BANG_(app,nm){
return com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app,nm);
});
/**
 * Returns a new instance from `fulcro-app` that is pre-configured to use synchronous transaction processing
 * and no rendering. This is particularly useful when you want to write integration tests around a Fulcro
 * app so that the tests need no async support. The `faux-root` must be a component (which need have no body).
 * 
 * The returned application will be properly initialized, and will have the initial state declared in `faux-component`
 * already merged into the app's state (i.e. the returned app is ready for operations).
 * 
 * `options` can be anything from `fulcro-app`, but :submit-transaction!, :render-root!, and
 * :optimized-render! are ignored.
 */
com.fulcrologic.fulcro.application.headless_synchronous_app = (function com$fulcrologic$fulcro$application$headless_synchronous_app(var_args){
var G__67428 = arguments.length;
switch (G__67428) {
case 1:
return com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$1 = (function (faux_root){
return com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2(faux_root,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2 = (function (faux_root,options){
var app = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-root!","render-root!",820937651),cljs.core.constantly(true),new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964),cljs.core.constantly(true)], null)], 0))));
com.fulcrologic.fulcro.application.initialize_state_BANG_(app,faux_root);

return app;
}));

(com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$lang$maxFixedArity = 2);

/**
 * Add/replace a remote on the given app. `remote-name` is a keyword, and `remote` is a Fulcro remote (map containing
 *   at least `transmit!`).
 * 
 *   This function is *generally* safe to call at any time. Requests that are in-flight on an old version of the remote will complete
 *   on that remote, and any that are queued will be processed by the new one; however, if the old remote supported abort
 *   operations then an abort on in-flight requests of the old remote will not work (since you're replaced the remote that the details
 *   about that request).
 * 
 *   This function changes the content of the application's runtime atom so you do not need to capture the return value, which
 *   is the app you passed in.
 */
com.fulcrologic.fulcro.application.set_remote_BANG_ = (function com$fulcrologic$fulcro$application$set_remote_BANG_(app,remote_name,remote){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote_name], null),remote);

return app;
});

//# sourceMappingURL=com.fulcrologic.fulcro.application.js.map
