goog.provide('com.fulcrologic.fulcro.mutations');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60268){
return cljs.core.map_QMARK_(G__60268);
}),(function (G__60268){
return cljs.core.contains_QMARK_(G__60268,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__60268){
return ((cljs.core.map_QMARK_(G__60268)) && (cljs.core.contains_QMARK_(G__60268,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Symbol("com.fulcrologic.fulcro.raw.components","component-class?","com.fulcrologic.fulcro.raw.components/component-class?",-1477501501,null),com.fulcrologic.fulcro.raw.components.component_class_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
com.fulcrologic.fulcro.mutations.Mutation = (function (sym){
this.sym = sym;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.fulcrologic.fulcro.mutations.Mutation.prototype.call = (function (unused__16425__auto__){
var self__ = this;
var self__ = this;
var G__60270 = (arguments.length - (1));
switch (G__60270) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.apply = (function (self__,args60269){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60269)));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__60271 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__60271) : this$.call(null,G__60271));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
}));

(com.fulcrologic.fulcro.mutations.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$type = true);

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorStr = "com.fulcrologic.fulcro.mutations/Mutation");

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.fulcrologic.fulcro.mutations/Mutation");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.mutations/Mutation.
 */
com.fulcrologic.fulcro.mutations.__GT_Mutation = (function com$fulcrologic$fulcro$mutations$__GT_Mutation(sym){
return (new com.fulcrologic.fulcro.mutations.Mutation(sym));
});

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","update-errors-on-ui-component!","com.fulcrologic.fulcro.mutations/update-errors-on-ui-component!",-1020304273,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"arity-1","arity-1",105892478),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"arity-1","arity-1",105892478),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity-1","arity-1",105892478),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"k","k",-2146297393)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null))], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"arity-1","arity-1",105892478),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * A handler for mutation network results that will place an error, if detected in env, on the data at `ref`.
 *   Errors are placed at `k` (defaults to `::m/mutation-error`).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Swaps against app state and returns `env`.
 */
com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_ = (function com$fulcrologic$fulcro$mutations$update_errors_on_ui_component_BANG_(var_args){
var G__60282 = arguments.length;
switch (G__60282) {
case 1:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (env){
var map__60283 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60283__$1 = (((((!((map__60283 == null))))?(((((map__60283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60283):map__60283);
var retspec60274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60283__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec60273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60283__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec60273)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:80 update-errors-on-ui-component!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60273,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null));
} else {
}

var f60276 = (function (env__$1){
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978));
});
var ret60275 = f60276(env);
if(cljs.core.truth_(retspec60274)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:80 update-errors-on-ui-component!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60274,ret60275);
} else {
}

return ret60275;
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
var map__60285 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"k","k",-2146297393)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60285__$1 = (((((!((map__60285 == null))))?(((((map__60285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60285):map__60285);
var retspec60278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec60277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec60277)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:80 update-errors-on-ui-component!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60277,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,k], null));
} else {
}

var f60280 = (function (env__$1,k__$1){
var map__60287 = env__$1;
var map__60287__$1 = (((((!((map__60287 == null))))?(((((map__60287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60287):map__60287);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core.truth_((function (){var G__60289 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env__$1);
return (remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60289) : remote_error_QMARK_.call(null,G__60289));
})())){
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,k__$1),result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,ref,cljs.core.dissoc,k__$1);
}
}));
} else {
}

return env__$1;
});
var ret60279 = f60280(env,k);
if(cljs.core.truth_(retspec60278)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:80 update-errors-on-ui-component!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60278,ret60279);
} else {
}

return ret60279;
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","trigger-global-error-action!","com.fulcrologic.fulcro.mutations/trigger-global-error-action!",1760548118,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * When there is a `global-error-action` defined on the application, this function will checks for errors in the given
 *   mutation `env`. If any are found then it will call the global error action function with `env`.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Always returns `env`.
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_ = (function com$fulcrologic$fulcro$mutations$trigger_global_error_action_BANG_(env){
var map__60294 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60294__$1 = (((((!((map__60294 == null))))?(((((map__60294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60294):map__60294);
var argspec60290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec60291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec60290)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:101 trigger-global-error-action!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null));
} else {
}

var f60293 = (function (env__$1){
var map__60296 = env__$1;
var map__60296__$1 = (((((!((map__60296 == null))))?(((((map__60296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60296):map__60296);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var b2__11668__auto___60460 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(b2__11668__auto___60460)){
var global_error_action_60461 = b2__11668__auto___60460;
var b2__11668__auto___60462__$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(b2__11668__auto___60462__$1)){
var remote_error_QMARK__60463 = b2__11668__auto___60462__$1;
var b2__11668__auto___60464__$2 = (remote_error_QMARK__60463.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK__60463.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK__60463.call(null,result));
if(cljs.core.truth_(b2__11668__auto___60464__$2)){
var __60465 = b2__11668__auto___60464__$2;
(global_error_action_60461.cljs$core$IFn$_invoke$arity$1 ? global_error_action_60461.cljs$core$IFn$_invoke$arity$1(env__$1) : global_error_action_60461.call(null,env__$1));
} else {
}
} else {
}
} else {
}

return env__$1;
});
var ret60292 = f60293(env);
if(cljs.core.truth_(retspec60291)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:101 trigger-global-error-action!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60291,ret60292);
} else {
}

return ret60292;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","dispatch-ok-error-actions!","com.fulcrologic.fulcro.mutations/dispatch-ok-error-actions!",-1488414619,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * Looks for network mutation result in `env`, checks it against the global definition of remote errors.  If there
 *   is an error and the mutation has defined an `error-action` section, then it calls it; otherwise, if the mutation
 *   has an `ok-action` it calls that.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_ = (function com$fulcrologic$fulcro$mutations$dispatch_ok_error_actions_BANG_(env){
var map__60302 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60302__$1 = (((((!((map__60302 == null))))?(((((map__60302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60302):map__60302);
var retspec60299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60302__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec60298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60302__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec60298)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:117 dispatch-ok-error-actions!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60298,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null));
} else {
}

var f60301 = (function (env__$1){
var map__60304 = env__$1;
var map__60304__$1 = (((((!((map__60304 == null))))?(((((map__60304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60304):map__60304);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__60305 = dispatch;
var map__60305__$1 = (((((!((map__60305 == null))))?(((((map__60305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60305):map__60305);
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60305__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60305__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
var map__60306 = transmitted_ast;
var map__60306__$1 = (((((!((map__60306 == null))))?(((((map__60306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60306):map__60306);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60306__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var return_value = (cljs.core.truth_(dispatch_key)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),dispatch_key], null)):null);
var env__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"mutation-return-value","mutation-return-value",-965071207),return_value);
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
if(cljs.core.truth_(error_action)){
(error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env__$2) : error_action.call(null,env__$2));
} else {
}
} else {
if(cljs.core.truth_(ok_action)){
(ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env__$2) : ok_action.call(null,env__$2));
} else {
}
}

return env__$2;
});
var ret60300 = f60301(env);
if(cljs.core.truth_(retspec60299)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:117 dispatch-ok-error-actions!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60299,ret60300);
} else {
}

return ret60300;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","rewrite-tempids!","com.fulcrologic.fulcro.mutations/rewrite-tempids!",326909216,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * Rewrites tempids in state and places a tempid->realid map into env for further use by the mutation actions.
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_ = (function com$fulcrologic$fulcro$mutations$rewrite_tempids_BANG_(env){
var map__60314 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60314__$1 = (((((!((map__60314 == null))))?(((((map__60314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60314):map__60314);
var retspec60311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60314__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec60310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60314__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec60310)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:140 rewrite-tempids!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null));
} else {
}

var f60313 = (function (env__$1){
var map__60316 = env__$1;
var map__60316__$1 = (((((!((map__60316 == null))))?(((((map__60316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60316):map__60316);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__60317 = result;
var map__60317__$1 = (((((!((map__60317 == null))))?(((((map__60317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60317):map__60317);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60317__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rid__GT_tid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(body);
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_(app,body);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437),rid__GT_tid);
});
var ret60312 = f60313(env);
if(cljs.core.truth_(retspec60311)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:140 rewrite-tempids!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60311,ret60312);
} else {
}

return ret60312;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","integrate-mutation-return-value!","com.fulcrologic.fulcro.mutations/integrate-mutation-return-value!",-1313132423,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * If there is a successful result from the remote mutation in `env` this function will merge it with app state
 *   (if there was a mutation join query), and will also rewrite any tempid remaps that were returned
 *   in all of the possible locations they might be in both app database and runtime application state (e.g. network queues).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_ = (function com$fulcrologic$fulcro$mutations$integrate_mutation_return_value_BANG_(env){
var map__60324 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60324__$1 = (((((!((map__60324 == null))))?(((((map__60324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60324):map__60324);
var argspec60320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec60321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec60320)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:150 integrate-mutation-return-value!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60320,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null));
} else {
}

var f60323 = (function (env__$1){
var map__60326 = env__$1;
var map__60326__$1 = (((((!((map__60326 == null))))?(((((map__60326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60326):map__60326);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var mutation_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__60327 = result;
var map__60327__$1 = (((((!((map__60327 == null))))?(((((map__60327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60327):map__60327);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var mark_query = (cljs.core.truth_(transmitted_ast)?com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(transmitted_ast):transaction);
var body__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = body;
if(cljs.core.truth_(and__4115__auto__)){
return mark_query;
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro.algorithms.merge.mark_missing(body,mark_query):body);
var eql = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = mutation_ast;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(mutation_ast,true)], null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return mark_query;
}
}
})();
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins,eql,body__$1);
}

return env__$1;
});
var ret60322 = f60323(env);
if(cljs.core.truth_(retspec60321)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:150 integrate-mutation-return-value!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60321,ret60322);
} else {
}

return ret60322;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","default-result-action!","com.fulcrologic.fulcro.mutations/default-result-action!",2097228258,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * The default Fulcro result action for `defmutation`, which can be overridden when you create your `app/fulcro-app`.
 * 
 *   This function is the following composition of operations from this same namespace:
 * 
 * ```
 *   (-> env
 *  (update-errors-on-ui-component! ::mutation-error)
 *  (integrate-mutation-return-value!)
 *  (trigger-global-error-action!)
 *  (dispatch-ok-error-actions!))
 * ```
 * 
 *   This function returns `env`, so it can be used as part of the chain in your own definition of a "default"
 *   mutation result action.
 *   
 * @type {function(*): *}
 */
com.fulcrologic.fulcro.mutations.default_result_action_BANG_ = (function com$fulcrologic$fulcro$mutations$default_result_action_BANG_(env){
var map__60334 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60334__$1 = (((((!((map__60334 == null))))?(((((map__60334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60334):map__60334);
var argspec60330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec60331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec60330)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:181 default-result-action!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60330,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null));
} else {
}

var f60333 = (function (env__$1){
return com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_(com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_(com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_(com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978))))));
});
var ret60332 = f60333(env);
if(cljs.core.truth_(retspec60331)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:181 default-result-action!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60331,ret60332);
} else {
}

return ret60332;
});
com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_ = (function com$fulcrologic$fulcro$mutations$mutation_declaration_QMARK_(expr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.mutations.Mutation,cljs.core.type(expr));
});
/**
 * Return the real symbol (for mutation dispatch) of `mutation`, which can be a symbol (this function is then identity)
 * or a mutation-declaration.
 */
com.fulcrologic.fulcro.mutations.mutation_symbol = (function com$fulcrologic$fulcro$mutations$mutation_symbol(mutation){
if(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_(mutation)){
return cljs.core.first((mutation.cljs$core$IFn$_invoke$arity$0 ? mutation.cljs$core$IFn$_invoke$arity$0() : mutation.call(null)));
} else {
return mutation;
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations.mutate !== 'undefined')){
} else {
com.fulcrologic.fulcro.mutations.mutate = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60336 = cljs.core.get_global_hierarchy;
return (fexpr__60336.cljs$core$IFn$_invoke$arity$0 ? fexpr__60336.cljs$core$IFn$_invoke$arity$0() : fexpr__60336.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.mutations","mutate"),(function (env){
return new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__60337){
var map__60338 = p__60337;
var map__60338__$1 = (((((!((map__60338 == null))))?(((((map__60338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60338):map__60338);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60338__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,229,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown app state mutation. Have you required the file with your mutations?",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),"See https://book.fulcrologic.com/#err-mut-unknown-mutation"], null);
}),null)),null,-1877071718,null);
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Like toggle!, but synchronously refreshes `comp` and nothing else.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG__BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Just like set-value!, but synchronously updates `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG__BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
com.fulcrologic.fulcro.mutations.ensure_integer = (function com$fulcrologic$fulcro$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60469 = arguments.length;
var i__4737__auto___60470 = (0);
while(true){
if((i__4737__auto___60470 < len__4736__auto___60469)){
args__4742__auto__.push((arguments[i__4737__auto___60470]));

var G__60471 = (i__4737__auto___60470 + (1));
i__4737__auto___60470 = G__60471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__60343){
var map__60344 = p__60343;
var map__60344__$1 = (((((!((map__60344 == null))))?(((((map__60344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60344):map__60344);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60344__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60344__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq60340){
var G__60341 = cljs.core.first(seq60340);
var seq60340__$1 = cljs.core.next(seq60340);
var G__60342 = cljs.core.first(seq60340__$1);
var seq60340__$2 = cljs.core.next(seq60340__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60341,G__60342,seq60340__$2);
}));

/**
 * Just like set-integer!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60478 = arguments.length;
var i__4737__auto___60479 = (0);
while(true){
if((i__4737__auto___60479 < len__4736__auto___60478)){
args__4742__auto__.push((arguments[i__4737__auto___60479]));

var G__60480 = (i__4737__auto___60479 + (1));
i__4737__auto___60479 = G__60480;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__60349){
var map__60350 = p__60349;
var map__60350__$1 = (((((!((map__60350 == null))))?(((((map__60350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60350):map__60350);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$applyTo = (function (seq60346){
var G__60347 = cljs.core.first(seq60346);
var seq60346__$1 = cljs.core.next(seq60346);
var G__60348 = cljs.core.first(seq60346__$1);
var seq60346__$2 = cljs.core.next(seq60346__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60347,G__60348,seq60346__$2);
}));

com.fulcrologic.fulcro.mutations.ensure_double = (function com$fulcrologic$fulcro$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60484 = arguments.length;
var i__4737__auto___60485 = (0);
while(true){
if((i__4737__auto___60485 < len__4736__auto___60484)){
args__4742__auto__.push((arguments[i__4737__auto___60485]));

var G__60486 = (i__4737__auto___60485 + (1));
i__4737__auto___60485 = G__60486;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__60355){
var map__60356 = p__60355;
var map__60356__$1 = (((((!((map__60356 == null))))?(((((map__60356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60356):map__60356);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq60352){
var G__60353 = cljs.core.first(seq60352);
var seq60352__$1 = cljs.core.next(seq60352);
var G__60354 = cljs.core.first(seq60352__$1);
var seq60352__$2 = cljs.core.next(seq60352__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60353,G__60354,seq60352__$2);
}));

/**
 * Just like set-double!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60488 = arguments.length;
var i__4737__auto___60489 = (0);
while(true){
if((i__4737__auto___60489 < len__4736__auto___60488)){
args__4742__auto__.push((arguments[i__4737__auto___60489]));

var G__60490 = (i__4737__auto___60489 + (1));
i__4737__auto___60489 = G__60490;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__60361){
var map__60362 = p__60361;
var map__60362__$1 = (((((!((map__60362 == null))))?(((((map__60362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60362):map__60362);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$applyTo = (function (seq60358){
var G__60359 = cljs.core.first(seq60358);
var seq60358__$1 = cljs.core.next(seq60358);
var G__60360 = cljs.core.first(seq60358__$1);
var seq60358__$2 = cljs.core.next(seq60358__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60359,G__60360,seq60358__$2);
}));

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60491 = arguments.length;
var i__4737__auto___60492 = (0);
while(true){
if((i__4737__auto___60492 < len__4736__auto___60491)){
args__4742__auto__.push((arguments[i__4737__auto___60492]));

var G__60493 = (i__4737__auto___60492 + (1));
i__4737__auto___60492 = G__60493;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__60367){
var map__60368 = p__60367;
var map__60368__$1 = (((((!((map__60368 == null))))?(((((map__60368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60368):map__60368);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq60364){
var G__60365 = cljs.core.first(seq60364);
var seq60364__$1 = cljs.core.next(seq60364);
var G__60366 = cljs.core.first(seq60364__$1);
var seq60364__$2 = cljs.core.next(seq60364__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60365,G__60366,seq60364__$2);
}));

/**
 * Just like set-string!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60494 = arguments.length;
var i__4737__auto___60495 = (0);
while(true){
if((i__4737__auto___60495 < len__4736__auto___60494)){
args__4742__auto__.push((arguments[i__4737__auto___60495]));

var G__60496 = (i__4737__auto___60495 + (1));
i__4737__auto___60495 = G__60496;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__60373){
var map__60374 = p__60373;
var map__60374__$1 = (((((!((map__60374 == null))))?(((((map__60374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60374):map__60374);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60374__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60374__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$applyTo = (function (seq60370){
var G__60371 = cljs.core.first(seq60370);
var seq60370__$1 = cljs.core.next(seq60370);
var G__60372 = cljs.core.first(seq60370__$1);
var seq60370__$2 = cljs.core.next(seq60370__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60371,G__60372,seq60370__$2);
}));

/**
 * Indicate the the remote operation will return a value of the given component type.
 * 
 *   `env` - The env of the mutation
 *   `class` - A component class that represents the return type.  You may supply a fully-qualified symbol instead of the
 *   actual class, and this method will look up the class for you (useful to avoid circular references).
 *   `opts` (optional):
 * - `query-params` - Optional parameters to add to the generated query
 * 
 *   Returns an update `env`, and is a valid return value from mutation remote sections.
 */
com.fulcrologic.fulcro.mutations.returning = (function com$fulcrologic$fulcro$mutations$returning(var_args){
var G__60378 = arguments.length;
switch (G__60378) {
case 2:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2 = (function (env,class$){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3(env,class$,null);
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3 = (function (env,class$,p__60379){
var map__60380 = p__60379;
var map__60380__$1 = (((((!((map__60380 == null))))?(((((map__60380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60380):map__60380);
var opts = map__60380__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60380__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var class$__$1 = (((((class$ instanceof cljs.core.Keyword)) || ((class$ instanceof cljs.core.Symbol))))?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(class$):class$);
var map__60382 = env;
var map__60382__$1 = (((((!((map__60382 == null))))?(((((map__60382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60382):map__60382);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60382__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__60383 = ast;
var map__60383__$1 = (((((!((map__60383 == null))))?(((((map__60383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60383):map__60383);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60383__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class$__$1,cljs.core.deref(state));
var updated_query = (function (){var G__60386 = edn_query_language.core.query__GT_ast(component_query);
var G__60386__$1 = (cljs.core.truth_(query_params)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__60386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(0)], null),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),query_params):G__60386);
var G__60386__$2 = edn_query_language.core.ast__GT_query(G__60386__$1)
;
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__60386__$2,(function (p1__60376_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__60376_SHARP_], 0));
}));
} else {
return G__60386__$2;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),updated_query])], null)));
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$lang$maxFixedArity = 3);

/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 * 
 *   `env` - The mutation env (you can thread together `returning` and `with-target`)
 *   `target` - A vector path, or any special target defined in `data-targeting` such as `append-to`.
 * 
 *   Returns an updated env (which is a valid return value from remote sections of mutations).
 *   
 */
com.fulcrologic.fulcro.mutations.with_target = (function com$fulcrologic$fulcro$mutations$with_target(p__60387,target){
var map__60388 = p__60387;
var map__60388__$1 = (((((!((map__60388 == null))))?(((((map__60388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60388):map__60388);
var env = map__60388__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60388__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__60390 = ast;
var map__60390__$1 = (((((!((map__60390 == null))))?(((((map__60390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60390):map__60390);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60390__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60390__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60390__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var targeted_query = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),targeted_query])], null)));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument. Overwrites
 * any existing params of the mutation.
 * 
 * `env` - the mutation environment
 * `params` - A new map to use as the mutations parameters
 * 
 * Returns an updated `env`, which can be used as the return value from a remote section of a mutation.
 */
com.fulcrologic.fulcro.mutations.with_params = (function com$fulcrologic$fulcro$mutations$with_params(env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null),params);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","with-response-type","com.fulcrologic.fulcro.mutations/with-response-type",-415240446,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"response-type","response-type",-1493770458)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * Modify the AST in env so that the request is sent such that an alternate low-level XHRIO response type is used.
 *   Only works with HTTP remotes. See goog.net.XhrIO.  Supported response types are :default, :array-buffer,
 *   :text, and :document.
 * @type {function(*, *): *}
 */
com.fulcrologic.fulcro.mutations.with_response_type = (function com$fulcrologic$fulcro$mutations$with_response_type(env,response_type){
var map__60396 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"response-type","response-type",-1493770458)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60396__$1 = (((((!((map__60396 == null))))?(((((map__60396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60396):map__60396);
var argspec60392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60396__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec60393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60396__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec60392)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:386 with-response-type's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60392,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,response_type], null));
} else {
}

var f60395 = (function (env__$1,response_type__$1){
return cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),response_type__$1);
});
var ret60394 = f60395(env,response_type);
if(cljs.core.truth_(retspec60393)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:386 with-response-type's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60393,ret60394);
} else {
}

return ret60394;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","with-server-side-mutation","com.fulcrologic.fulcro.mutations/with-server-side-mutation",2241090,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.qualified_symbol_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null));


/**
 * @type {function(*, *): *}
 */
com.fulcrologic.fulcro.mutations.with_server_side_mutation = (function com$fulcrologic$fulcro$mutations$with_server_side_mutation(env,mutation_symbol){
var map__60402 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.qualified_symbol_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword(null,"mutation-symbol","mutation-symbol",-1883436868),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),null,null,null);
var map__60402__$1 = (((((!((map__60402 == null))))?(((((map__60402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60402):map__60402);
var argspec60398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60402__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec60399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60402__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec60398)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:394 with-server-side-mutation's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec60398,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,mutation_symbol], null));
} else {
}

var f60401 = (function (env__$1,mutation_symbol__$1){

return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(env__$1,new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),mutation_symbol__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mutation_symbol__$1], 0));
});
var ret60400 = f60401(env,mutation_symbol);
if(cljs.core.truth_(retspec60399)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/mutations.cljc:394 with-server-side-mutation's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec60399,ret60400);
} else {
}

return ret60400;
});
/**
 * Mutation: A convenience helper, generally used 'bit twiddle' the data on a particular database table (using the component's ident).
 *   Specifically, merge the given `params` into the state of the database object at the component's ident.
 *   In general, it is recommended this be used for ui-only properties that have no real use outside of the component.
 *   
 */
com.fulcrologic.fulcro.mutations.set_props = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__60404){
var map__60405 = p__60404;
var map__60405__$1 = (((((!((map__60405 == null))))?(((((map__60405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60405):map__60405);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60405__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60405__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__60407_60498 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60408_60499 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60408_60499);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,521,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/set-props requires component to have an ident. See https://book.fulcrologic.com/#err-mut-set-props-missing-ident"], null);
}),null)),null,-1448107613,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,(function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60407_60498);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60409 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60410 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60410);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60409);
}})], null);
}));
/**
 * Mutation: A helper method that toggles the true/false nature of a component's state by ident.
 * Use for local UI data only. Use your own mutations for things that have a good abstract meaning. 
 */
com.fulcrologic.fulcro.mutations.toggle = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),(function (fulcro_mutation_env_symbol){
var map__60411 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__60411__$1 = (((((!((map__60411 == null))))?(((((map__60411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60411):map__60411);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__60413){
var map__60414 = p__60413;
var map__60414__$1 = (((((!((map__60414 == null))))?(((((map__60414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60414):map__60414);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__60416_60500 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60417_60501 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60417_60501);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,529,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/toggle requires component to have an ident. See https://book.fulcrologic.com/#err-mut-toggle-missing-ident"], null);
}),null)),null,151671500,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60416_60500);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60418 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60419 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60419);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60418);
}})], null);
}));
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` to
 * derive the ident of the database entry. The props must contain an ID key that can be used to derive the ident from
 * the current-props.
 * 
 * For example, `(raw-set-value! app {:person/id 42} :person/name "bob")` would have the effect of a mutation that
 * does an `(assoc-in state-db [:person/id 42 :person/name] "bob")`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_set_value_BANG_(app,current_props,k,v){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,545,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-set-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,-295121684,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60420 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__60420) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__60420));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
});
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` as the basis
 * for the update, and to find the ident of the target. The `current-props` must contain an ID field that can be used to derive
 * the ident from the passed props.
 * 
 * For example, `(raw-update-value! app {:person/id 42} :person/age inc)` would have the effect of a mutation that
 * does an `(update-in state-db [:person/id 42 :person/age] inc)`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_update_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_update_value_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60502 = arguments.length;
var i__4737__auto___60503 = (0);
while(true){
if((i__4737__auto___60503 < len__4736__auto___60502)){
args__4742__auto__.push((arguments[i__4737__auto___60503]));

var G__60504 = (i__4737__auto___60503 + (1));
i__4737__auto___60503 = G__60504;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,current_props,k,f,args){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,k);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,old_value,args);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-update-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,994768654,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60426 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new_value]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__60426) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__60426));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
}));

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$applyTo = (function (seq60421){
var G__60422 = cljs.core.first(seq60421);
var seq60421__$1 = cljs.core.next(seq60421);
var G__60423 = cljs.core.first(seq60421__$1);
var seq60421__$2 = cljs.core.next(seq60421__$1);
var G__60424 = cljs.core.first(seq60421__$2);
var seq60421__$3 = cljs.core.next(seq60421__$2);
var G__60425 = cljs.core.first(seq60421__$3);
var seq60421__$4 = cljs.core.next(seq60421__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60422,G__60423,G__60424,G__60425,seq60421__$4);
}));


//# sourceMappingURL=com.fulcrologic.fulcro.mutations.js.map
