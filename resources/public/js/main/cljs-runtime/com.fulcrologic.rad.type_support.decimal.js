goog.provide('com.fulcrologic.rad.type_support.decimal');
var module$node_modules$big_DOT_js$big=shadow.js.require("module$node_modules$big_DOT_js$big", {});
com.fulcrologic.rad.type_support.decimal.rounding_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"half-up","half-up",-129907320),(1),new cljs.core.Keyword(null,"half-even","half-even",380861143),(2),new cljs.core.Keyword(null,"up","up",-269712113),(3)], null);
com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_ = false;
com.fulcrologic.rad.type_support.decimal._STAR_default_rounding_mode_STAR_ = new cljs.core.Keyword(null,"half-up","half-up",-129907320);










com.fulcrologic.rad.type_support.decimal.bigdecimal_QMARK_ = (function com$fulcrologic$rad$type_support$decimal$bigdecimal_QMARK_(v){
return cognitect.transit.bigdec_QMARK_(v);
});
/**
 * Predicate for clj(s) dynamic number (n or bigdecimal). Returns true if the given value is a numeric
 *   in the current computing context (primitive or BigDecimal).
 */
com.fulcrologic.rad.type_support.decimal.numeric_QMARK_ = (function com$fulcrologic$rad$type_support$decimal$numeric_QMARK_(v){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return typeof v === 'number';
} else {
return com.fulcrologic.rad.type_support.decimal.bigdecimal_QMARK_(v);
}
});
/**
 * Coerce a number from a big rep to a floating point one. This is lossy.
 */
com.fulcrologic.rad.type_support.decimal.coerce_to_primitive = (function com$fulcrologic$rad$type_support$decimal$coerce_to_primitive(n){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal.bigdecimal_QMARK_(n))){
return parseFloat(n.rep);
} else {
if(typeof n === 'number'){
return n;
} else {
if(typeof n === 'string'){
return parseFloat(n);
} else {
return n;

}
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("com.fulcrologic.rad.type-support.decimal","numeric?","com.fulcrologic.rad.type-support.decimal/numeric?",1102025565,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",189641653,null),"11.35"),"null",cljs.core.list(new cljs.core.Symbol("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",189641653,null),"5.00"),"null",cljs.core.list(new cljs.core.Symbol("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",189641653,null),"42.11"),"null"], null), null)))),cljs.spec.alpha.with_gen(com.fulcrologic.rad.type_support.decimal.numeric_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([(com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1("11.35") : com.fulcrologic.rad.type_support.decimal.numeric.call(null,"11.35")),(com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1("5.00") : com.fulcrologic.rad.type_support.decimal.numeric.call(null,"5.00")),(com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1("42.11") : com.fulcrologic.rad.type_support.decimal.numeric.call(null,"42.11"))]));
})));
com.fulcrologic.rad.type_support.decimal.strip_zeroes = (function com$fulcrologic$rad$type_support$decimal$strip_zeroes(s){
return clojure.string.replace(clojure.string.replace(s,/^0+([1-9].*)$/,"$1"),/^0*([.].*)$/,"0$1");
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.type-support.decimal","numeric->str","com.fulcrologic.rad.type-support.decimal/numeric->str",19534053,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bd","bd",-905986336),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bd","bd",-905986336),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bd","bd",-905986336)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bd","bd",-905986336),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Convert a math number to a string.
 * @type {function(*): !string}
 */
com.fulcrologic.rad.type_support.decimal.numeric__GT_str = (function com$fulcrologic$rad$type_support$decimal$numeric__GT_str(bd){
var map__86201 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bd","bd",-905986336),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bd","bd",-905986336)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"bd","bd",-905986336),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__86201__$1 = (((((!((map__86201 == null))))?(((((map__86201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86201):map__86201);
var argspec86197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86201__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec86198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86201__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec86197)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/type_support/decimal.cljc:77 numeric->str's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec86197,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bd], null));
} else {
}

var f86200 = (function (bd__$1){
if(cljs.core.truth_(bd__$1)){
if(cljs.core.truth_(cognitect.transit.bigdec_QMARK_(bd__$1))){
var or__4126__auto__ = (function (){var G__86216 = bd__$1;
if((G__86216 == null)){
return null;
} else {
return G__86216.rep;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "0";
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(bd__$1);
}
} else {
return "";
}
});
var ret86199 = f86200(bd);
if(cljs.core.truth_(retspec86198)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/type_support/decimal.cljc:77 numeric->str's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec86198,ret86199);
} else {
}

return ret86199;
});
/**
 * Coerce to a numeric from an arbitrary type (number, string, or numeric).
 */
com.fulcrologic.rad.type_support.decimal.numeric = (function com$fulcrologic$rad$type_support$decimal$numeric(s){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.rad.type-support.decimal","numeric","com.fulcrologic.rad.type-support.decimal/numeric",-1450889874)], null);

if((s == null)){
return (com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1(0.0) : com.fulcrologic.rad.type_support.decimal.numeric.call(null,0.0));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.rad.type_support.decimal.bigdecimal_QMARK_(s);
} else {
return and__4115__auto__;
}
})())){
return parseFloat(s.rep);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return ((typeof s === 'string') && (cljs.core.empty_QMARK_(s)));
} else {
return and__4115__auto__;
}
})())){
return (com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.type_support.decimal.numeric.cljs$core$IFn$_invoke$arity$1("0") : com.fulcrologic.rad.type_support.decimal.numeric.call(null,"0"));
} else {
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return parseFloat(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal.numeric_QMARK_(s))){
return s;
} else {
var s__$1 = ((cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)))?s:"0");
return cognitect.transit.bigdec(com.fulcrologic.rad.type_support.decimal.strip_zeroes(s__$1.toString()));

}
}
}
}
}
});
/**
 * Predicate for clj(s) positive bigdecimal
 */
com.fulcrologic.rad.type_support.decimal.positive_QMARK_ = (function com$fulcrologic$rad$type_support$decimal$positive_QMARK_(v){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var G__86217 = (0);
var G__86218 = com.fulcrologic.rad.type_support.decimal.numeric(v);
return (com.fulcrologic.rad.type_support.decimal._LT_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.type_support.decimal._LT_.cljs$core$IFn$_invoke$arity$2(G__86217,G__86218) : com.fulcrologic.rad.type_support.decimal._LT_.call(null,G__86217,G__86218));
});
/**
 * Predicate for clj(s) negative bigdecimal
 */
com.fulcrologic.rad.type_support.decimal.negative_QMARK_ = (function com$fulcrologic$rad$type_support$decimal$negative_QMARK_(v){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var G__86219 = com.fulcrologic.rad.type_support.decimal.numeric(v);
var G__86220 = (0);
return (com.fulcrologic.rad.type_support.decimal._LT_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.type_support.decimal._LT_.cljs$core$IFn$_invoke$arity$2(G__86219,G__86220) : com.fulcrologic.rad.type_support.decimal._LT_.call(null,G__86219,G__86220));
});
/**
 * DEPRECATED: Use fulcro i18n support with something like js/Intl instead. js-joda locales are no longer the way to go,
 * and this is not really a concern of numerics themselves.
 * 
 * Convert a numeric into a locale-specific currency string. The defaults are `en`, `US`, and `USD`.
 */
com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str = (function com$fulcrologic$rad$type_support$decimal$numeric__GT_currency_str(var_args){
var G__86231 = arguments.length;
switch (G__86231) {
case 1:
return com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$1 = (function (n){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$4(n,"en","US","USD");
}));

(com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$4 = (function (n,language,country,currency_code){
if(cljs.core.truth_(n)){
var n__$1 = parseFloat(com.fulcrologic.rad.type_support.decimal.numeric__GT_str(com.fulcrologic.rad.type_support.decimal.numeric(n)));
var negative_QMARK_ = (n__$1 < (0));
var n__$2 = ((negative_QMARK_)?((-1) * n__$1):n__$1);
var result = n__$2.toLocaleString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(language),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(country)].join(''),({"style": "currency", "currency": currency_code}));
if(negative_QMARK_){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join('');
} else {
return result;
}
} else {
return null;
}
}));

(com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$lang$maxFixedArity = 4);

/**
 * DEPRECATED: Use localization functions from i18n or js/Intl. This functions should never have been added here.
 */
com.fulcrologic.rad.type_support.decimal.numeric__GT_percent_str = (function com$fulcrologic$rad$type_support$decimal$numeric__GT_percent_str(n){
if(cljs.core.truth_(n)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.type_support.decimal.numeric__GT_str((function (){var G__86241 = n;
var G__86242 = com.fulcrologic.rad.type_support.decimal.numeric((100));
return (com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$2(G__86241,G__86242) : com.fulcrologic.rad.type_support.decimal._STAR_.call(null,G__86241,G__86242));
})())),"%"].join('');
} else {
return null;
}
});
/**
 * Convert a number-like thing into a low-level js Big representation.
 * 
 *   WARNING: This is a low-level operation that should only be used if implementing your own extended functions for
 *   math.
 */
com.fulcrologic.rad.type_support.decimal.n__GT_big = (function com$fulcrologic$rad$type_support$decimal$n__GT_big(n){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal.numeric_QMARK_(n))){
return (new module$node_modules$big_DOT_js$big(((cljs.core.seq(com.fulcrologic.rad.type_support.decimal.numeric__GT_str(n)))?com.fulcrologic.rad.type_support.decimal.numeric__GT_str(n):"0")));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = n;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",n.toString());
} else {
return and__4115__auto__;
}
})())){
return (new module$node_modules$big_DOT_js$big(n.toString()));
} else {
return (new module$node_modules$big_DOT_js$big("0"));

}
}
});
/**
 * Convert a low-level js Big number into a bigdecimal. No-op in CLJ.
 * 
 *   WARNING: This is a low-level operation that should only be used if implementing your own extended functions for
 *   math.
 */
com.fulcrologic.rad.type_support.decimal.big__GT_bigdec = (function com$fulcrologic$rad$type_support$decimal$big__GT_bigdec(n){
return com.fulcrologic.rad.type_support.decimal.numeric(n.toString());
});
/**
 * Add the given numbers together, coercing any that are not numeric.
 */
com.fulcrologic.rad.type_support.decimal._PLUS_ = (function com$fulcrologic$rad$type_support$decimal$_PLUS_(var_args){
var G__86248 = arguments.length;
switch (G__86248) {
case 0:
return com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___86344 = arguments.length;
var i__4737__auto___86346 = (0);
while(true){
if((i__4737__auto___86346 < len__4736__auto___86344)){
args_arr__4757__auto__.push((arguments[i__4737__auto___86346]));

var G__86347 = (i__4737__auto___86346 + (1));
i__4737__auto___86346 = G__86347;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((0)),(0),null));
return com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__4758__auto__);

}
});

(com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.rad.type_support.decimal.numeric("0");
}));

(com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (numbers){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.type_support.decimal.coerce_to_primitive,numbers));
} else {
return com.fulcrologic.rad.type_support.decimal.big__GT_bigdec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,n){
return acc.plus(com.fulcrologic.rad.type_support.decimal.n__GT_big(n));
}),(new module$node_modules$big_DOT_js$big("0")),numbers));
}
}));

/** @this {Function} */
(com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$lang$applyTo = (function (seq86247){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86247));
}));

(com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$lang$maxFixedArity = (0));

/**
 * Subtract the given numbers, using bigdecimal math
 */
com.fulcrologic.rad.type_support.decimal._ = (function com$fulcrologic$rad$type_support$decimal$_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___86355 = arguments.length;
var i__4737__auto___86356 = (0);
while(true){
if((i__4737__auto___86356 < len__4736__auto___86355)){
args__4742__auto__.push((arguments[i__4737__auto___86356]));

var G__86357 = (i__4737__auto___86356 + (1));
i__4737__auto___86356 = G__86357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.rad.type_support.decimal._.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.rad.type_support.decimal._.cljs$core$IFn$_invoke$arity$variadic = (function (numbers){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.type_support.decimal.coerce_to_primitive,numbers));
} else {
return com.fulcrologic.rad.type_support.decimal.big__GT_bigdec(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(numbers)))?com.fulcrologic.rad.type_support.decimal.n__GT_big(cljs.core.first(numbers)).times(com.fulcrologic.rad.type_support.decimal.n__GT_big((-1))):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,n){
return acc.minus(com.fulcrologic.rad.type_support.decimal.n__GT_big(n));
}),com.fulcrologic.rad.type_support.decimal.n__GT_big(cljs.core.first(numbers)),cljs.core.rest(numbers))));
}
}));

(com.fulcrologic.rad.type_support.decimal._.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.rad.type_support.decimal._.cljs$lang$applyTo = (function (seq86251){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86251));
}));

/**
 * Multiply the given numbers, using bigdecimal math
 */
com.fulcrologic.rad.type_support.decimal._STAR_ = (function com$fulcrologic$rad$type_support$decimal$_STAR_(var_args){
var G__86257 = arguments.length;
switch (G__86257) {
case 0:
return com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___86362 = arguments.length;
var i__4737__auto___86363 = (0);
while(true){
if((i__4737__auto___86363 < len__4736__auto___86362)){
args_arr__4757__auto__.push((arguments[i__4737__auto___86363]));

var G__86364 = (i__4737__auto___86363 + (1));
i__4737__auto___86363 = G__86364;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((0)),(0),null));
return com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4758__auto__);

}
});

(com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.rad.type_support.decimal.numeric("1");
}));

(com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (numbers){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.type_support.decimal.coerce_to_primitive,numbers));
} else {
return com.fulcrologic.rad.type_support.decimal.big__GT_bigdec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,n){
return acc.times(com.fulcrologic.rad.type_support.decimal.n__GT_big(n));
}),(new module$node_modules$big_DOT_js$big("1")),numbers));
}
}));

/** @this {Function} */
(com.fulcrologic.rad.type_support.decimal._STAR_.cljs$lang$applyTo = (function (seq86256){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86256));
}));

(com.fulcrologic.rad.type_support.decimal._STAR_.cljs$lang$maxFixedArity = (0));

com.fulcrologic.rad.type_support.decimal._STAR_precision_STAR_ = (20);
/**
 * Divide the given two numbers, using bigdecimal math, with 20 digits
 *   of precision. In primitive mode just uses regular `/`.
 */
com.fulcrologic.rad.type_support.decimal.div = (function com$fulcrologic$rad$type_support$decimal$div(var_args){
var G__86259 = arguments.length;
switch (G__86259) {
case 2:
return com.fulcrologic.rad.type_support.decimal.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.type_support.decimal.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.type_support.decimal.div.cljs$core$IFn$_invoke$arity$2 = (function (n,d){
return com.fulcrologic.rad.type_support.decimal.div.cljs$core$IFn$_invoke$arity$3(n,d,com.fulcrologic.rad.type_support.decimal._STAR_precision_STAR_);
}));

(com.fulcrologic.rad.type_support.decimal.div.cljs$core$IFn$_invoke$arity$3 = (function (n,d,precision){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),d)){
} else {
throw (new Error("Assert failed: (not= 0 d)"));
}

if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return (com.fulcrologic.rad.type_support.decimal.coerce_to_primitive(n) / com.fulcrologic.rad.type_support.decimal.coerce_to_primitive(d));
} else {
var n__$1 = com.fulcrologic.rad.type_support.decimal.n__GT_big(n);
var d__$1 = com.fulcrologic.rad.type_support.decimal.n__GT_big(d);
(module$node_modules$big_DOT_js$big.DP = precision);

return com.fulcrologic.rad.type_support.decimal.big__GT_bigdec(n__$1.div(d__$1));
}
}));

(com.fulcrologic.rad.type_support.decimal.div.cljs$lang$maxFixedArity = 3);

com.fulcrologic.rad.type_support.decimal.big_eq = (function com$fulcrologic$rad$type_support$decimal$big_eq(x,y){
return com.fulcrologic.rad.type_support.decimal.n__GT_big(x).eq(com.fulcrologic.rad.type_support.decimal.n__GT_big(y));
});

com.fulcrologic.rad.type_support.decimal.big_lt = (function com$fulcrologic$rad$type_support$decimal$big_lt(x,y){
return com.fulcrologic.rad.type_support.decimal.n__GT_big(x).lt(com.fulcrologic.rad.type_support.decimal.n__GT_big(y));
});

com.fulcrologic.rad.type_support.decimal.big_lte = (function com$fulcrologic$rad$type_support$decimal$big_lte(x,y){
return com.fulcrologic.rad.type_support.decimal.n__GT_big(x).lte(com.fulcrologic.rad.type_support.decimal.n__GT_big(y));
});

com.fulcrologic.rad.type_support.decimal.big_gt = (function com$fulcrologic$rad$type_support$decimal$big_gt(x,y){
return com.fulcrologic.rad.type_support.decimal.n__GT_big(x).gt(com.fulcrologic.rad.type_support.decimal.n__GT_big(y));
});

com.fulcrologic.rad.type_support.decimal.big_gte = (function com$fulcrologic$rad$type_support$decimal$big_gte(x,y){
return com.fulcrologic.rad.type_support.decimal.n__GT_big(x).gte(com.fulcrologic.rad.type_support.decimal.n__GT_big(y));
});
com.fulcrologic.rad.type_support.decimal.compare_fn = (function com$fulcrologic$rad$type_support$decimal$compare_fn(big_fn){
return (function() { 
var G__86371__delegate = function (x,y,more){
while(true){
var vec__86270 = (cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.type_support.decimal.coerce_to_primitive(x),com.fulcrologic.rad.type_support.decimal.coerce_to_primitive(y)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86270,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86270,(1),null);
if(cljs.core.truth_((big_fn.cljs$core$IFn$_invoke$arity$2 ? big_fn.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1) : big_fn.call(null,x__$1,y__$1)))){
if(cljs.core.next(more)){
var G__86374 = y__$1;
var G__86375 = cljs.core.first(more);
var G__86376 = cljs.core.next(more);
x = G__86374;
y = G__86375;
more = G__86376;
continue;
} else {
if(cljs.core.truth_(cljs.core.first(more))){
var G__86273 = y__$1;
var G__86274 = cljs.core.first(more);
return (big_fn.cljs$core$IFn$_invoke$arity$2 ? big_fn.cljs$core$IFn$_invoke$arity$2(G__86273,G__86274) : big_fn.call(null,G__86273,G__86274));
} else {
return true;
}
}
} else {
return false;
}
break;
}
};
var G__86371 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__86378__i = 0, G__86378__a = new Array(arguments.length -  2);
while (G__86378__i < G__86378__a.length) {G__86378__a[G__86378__i] = arguments[G__86378__i + 2]; ++G__86378__i;}
  more = new cljs.core.IndexedSeq(G__86378__a,0,null);
} 
return G__86371__delegate.call(this,x,y,more);};
G__86371.cljs$lang$maxFixedArity = 2;
G__86371.cljs$lang$applyTo = (function (arglist__86380){
var x = cljs.core.first(arglist__86380);
arglist__86380 = cljs.core.next(arglist__86380);
var y = cljs.core.first(arglist__86380);
var more = cljs.core.rest(arglist__86380);
return G__86371__delegate(x,y,more);
});
G__86371.cljs$core$IFn$_invoke$arity$variadic = G__86371__delegate;
return G__86371;
})()
;
});
com.fulcrologic.rad.type_support.decimal._EQ_ = com.fulcrologic.rad.type_support.decimal.compare_fn((cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)?cljs.core._EQ_:com.fulcrologic.rad.type_support.decimal.big_eq));
com.fulcrologic.rad.type_support.decimal._LT_ = com.fulcrologic.rad.type_support.decimal.compare_fn((cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)?cljs.core._LT_:com.fulcrologic.rad.type_support.decimal.big_lt));
com.fulcrologic.rad.type_support.decimal._LT__EQ_ = com.fulcrologic.rad.type_support.decimal.compare_fn((cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)?cljs.core._LT__EQ_:com.fulcrologic.rad.type_support.decimal.big_lte));
com.fulcrologic.rad.type_support.decimal._GT_ = com.fulcrologic.rad.type_support.decimal.compare_fn((cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)?cljs.core._GT_:com.fulcrologic.rad.type_support.decimal.big_gt));
com.fulcrologic.rad.type_support.decimal._GT__EQ_ = com.fulcrologic.rad.type_support.decimal.compare_fn((cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)?cljs.core._GT__EQ_:com.fulcrologic.rad.type_support.decimal.big_gte));
com.fulcrologic.rad.type_support.decimal.max = (function com$fulcrologic$rad$type_support$decimal$max(var_args){
var args__4742__auto__ = [];
var len__4736__auto___86381 = arguments.length;
var i__4737__auto___86382 = (0);
while(true){
if((i__4737__auto___86382 < len__4736__auto___86381)){
args__4742__auto__.push((arguments[i__4737__auto___86382]));

var G__86385 = (i__4737__auto___86382 + (1));
i__4737__auto___86382 = G__86385;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.type_support.decimal.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.type_support.decimal.max.cljs$core$IFn$_invoke$arity$variadic = (function (number,numbers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (max_val,n){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._LT_(max_val,n))){
return com.fulcrologic.rad.type_support.decimal.numeric(n);
} else {
return max_val;
}
}),com.fulcrologic.rad.type_support.decimal.numeric(number),numbers);
}));

(com.fulcrologic.rad.type_support.decimal.max.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.type_support.decimal.max.cljs$lang$applyTo = (function (seq86281){
var G__86282 = cljs.core.first(seq86281);
var seq86281__$1 = cljs.core.next(seq86281);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86282,seq86281__$1);
}));

com.fulcrologic.rad.type_support.decimal.min = (function com$fulcrologic$rad$type_support$decimal$min(var_args){
var args__4742__auto__ = [];
var len__4736__auto___86389 = arguments.length;
var i__4737__auto___86390 = (0);
while(true){
if((i__4737__auto___86390 < len__4736__auto___86389)){
args__4742__auto__.push((arguments[i__4737__auto___86390]));

var G__86392 = (i__4737__auto___86390 + (1));
i__4737__auto___86390 = G__86392;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.type_support.decimal.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.type_support.decimal.min.cljs$core$IFn$_invoke$arity$variadic = (function (number,numbers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (min_val,n){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._GT_(min_val,n))){
return com.fulcrologic.rad.type_support.decimal.numeric(n);
} else {
return min_val;
}
}),com.fulcrologic.rad.type_support.decimal.numeric(number),numbers);
}));

(com.fulcrologic.rad.type_support.decimal.min.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.type_support.decimal.min.cljs$lang$applyTo = (function (seq86289){
var G__86291 = cljs.core.first(seq86289);
var seq86289__$1 = cljs.core.next(seq86289);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86291,seq86289__$1);
}));

/**
 * Round the given number to the given number of
 *   decimal digits. Returns a new bigdecimal number. The rounding mode default to :half-up, but can also
 *   be :up, :down, or :half-even.  You can change the default rounding mode via the dynamic var *default-rounding-mode*.
 * 
 *   n can be nil (returns 0), a numeric string, a regular number, or a bigdecimal.
 */
com.fulcrologic.rad.type_support.decimal.round = (function com$fulcrologic$rad$type_support$decimal$round(var_args){
var G__86301 = arguments.length;
switch (G__86301) {
case 2:
return com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$2 = (function (n,decimal_digits){
return com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$3(n,decimal_digits,com.fulcrologic.rad.type_support.decimal._STAR_default_rounding_mode_STAR_);
}));

(com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$3 = (function (n,decimal_digits,rounding_mode){
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.type_support.decimal.rounding_modes,rounding_mode,cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.type_support.decimal.rounding_modes,com.fulcrologic.rad.type_support.decimal._STAR_default_rounding_mode_STAR_));
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._STAR_primitive_STAR_)){
return com.fulcrologic.rad.type_support.decimal.n__GT_big(n).round(decimal_digits,mode).toNumber();
} else {
return com.fulcrologic.rad.type_support.decimal.big__GT_bigdec(com.fulcrologic.rad.type_support.decimal.n__GT_big(n).round(decimal_digits,mode));
}
}));

(com.fulcrologic.rad.type_support.decimal.round.cljs$lang$maxFixedArity = 3);

/**
 * If n is positive then returns n*(-1) else returns n.
 */
com.fulcrologic.rad.type_support.decimal.negative = (function com$fulcrologic$rad$type_support$decimal$negative(n){
if(cljs.core.truth_(n)){
var n__$1 = com.fulcrologic.rad.type_support.decimal.numeric(n);
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._LT_((0),n__$1))){
return com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,com.fulcrologic.rad.type_support.decimal.numeric((-1))], 0));
} else {
return n__$1;
}
} else {
return null;
}
});
/**
 * If n is negative then returns n*(-1) else returns n.
 */
com.fulcrologic.rad.type_support.decimal.positive = (function com$fulcrologic$rad$type_support$decimal$positive(n){
if(cljs.core.truth_(n)){
var n__$1 = com.fulcrologic.rad.type_support.decimal.numeric(n);
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._LT_(n__$1,(0)))){
return com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,com.fulcrologic.rad.type_support.decimal.numeric((-1))], 0));
} else {
return n__$1;
}
} else {
return null;
}
});
com.fulcrologic.rad.type_support.decimal.zero = (function com$fulcrologic$rad$type_support$decimal$zero(){
return com.fulcrologic.rad.type_support.decimal.numeric((0));
});
(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
var t = d__$1.tag;
var v = d__$1.rep;
var type = (function (){var G__86302 = t;
switch (G__86302) {
case "f":
return "bigdec";

break;
case "n":
return "bigint";

break;
default:
return "tagged";

}
})();
return cljs.core._write(writer,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join(''));
}));
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("math","bigdec","math/bigdec",-1619064269,null),com.fulcrologic.rad.type_support.decimal.numeric);
(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IComparable$_compare$arity$2 = (function (a,b){
var a__$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = com.fulcrologic.rad.type_support.decimal.numeric_QMARK_(a__$1);
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.rad.type_support.decimal.numeric_QMARK_(b);
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._LT_(a__$1,b))){
return (-1);
} else {
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._GT_(a__$1,b))){
return (1);
} else {
if(cljs.core.truth_(com.fulcrologic.rad.type_support.decimal._EQ_(a__$1,b))){
return (0);
} else {
return null;
}
}
}
} else {
return cljs.core.compare(a__$1.rep,b.rep);
}
}));
/**
 * Returns the floor of n, which is n with all decimal digits removed.
 */
com.fulcrologic.rad.type_support.decimal.floor = (function com$fulcrologic$rad$type_support$decimal$floor(n){
var v = clojure.string.replace(com.fulcrologic.rad.type_support.decimal.numeric__GT_str(com.fulcrologic.rad.type_support.decimal.numeric(n)),/[.].*/,"");
return com.fulcrologic.rad.type_support.decimal.numeric(v);
});
com.fulcrologic.rad.type_support.decimal.numeric__GT_double = (function com$fulcrologic$rad$type_support$decimal$numeric__GT_double(n){
return parseFloat(com.fulcrologic.rad.type_support.decimal.numeric__GT_str(n));
});

//# sourceMappingURL=com.fulcrologic.rad.type_support.decimal.js.map
