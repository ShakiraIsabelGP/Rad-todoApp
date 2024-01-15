goog.provide('com.fulcrologic.rad.routing.html5_history');
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","decode-uri-component","com.fulcrologic.rad.routing.html5-history/decode-uri-component",-830392838,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null));


/**
 * Decode the given string as a transit and URI encoded CLJ(s) value.
 * @type {function(?string): ?string}
 */
com.fulcrologic.rad.routing.html5_history.decode_uri_component = (function com$fulcrologic$rad$routing$html5_history$decode_uri_component(v){
var map__89355 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null);
var map__89355__$1 = (((((!((map__89355 == null))))?(((((map__89355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89355):map__89355);
var argspec89351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89355__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec89352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89355__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec89351)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:20 decode-uri-component's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec89351,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
} else {
}

var f89354 = (function (v__$1){
if(typeof v__$1 === 'string'){
return decodeURIComponent(v__$1);
} else {
return null;
}
});
var ret89353 = f89354(v);
if(cljs.core.truth_(retspec89352)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:20 decode-uri-component's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec89352,ret89353);
} else {
}

return ret89353;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","encode-uri-component","com.fulcrologic.rad.routing.html5-history/encode-uri-component",1599449484,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Encode a key/value pair of CLJ(s) data such that it can be safely placed in browser query params. If `v` is
 * a plain string, then it will not be transit-encoded.
 * @type {function(!string): !string}
 */
com.fulcrologic.rad.routing.html5_history.encode_uri_component = (function com$fulcrologic$rad$routing$html5_history$encode_uri_component(v){
var map__89361 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__89361__$1 = (((((!((map__89361 == null))))?(((((map__89361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89361):map__89361);
var retspec89358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89361__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec89357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89361__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec89357)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:28 encode-uri-component's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec89357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
} else {
}

var f89360 = (function (v__$1){
return encodeURIComponent(v__$1);
});
var ret89359 = f89360(v);
if(cljs.core.truth_(retspec89358)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:28 encode-uri-component's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec89358,ret89359);
} else {
}

return ret89359;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","query-params","com.fulcrologic.rad.routing.html5-history/query-params",1170341837,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));


/**
 * @type {function(!string): !cljs.core.IMap}
 */
com.fulcrologic.rad.routing.html5_history.query_params = (function com$fulcrologic$rad$routing$html5_history$query_params(raw_search_string){
var map__89367 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null);
var map__89367__$1 = (((((!((map__89367 == null))))?(((((map__89367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89367):map__89367);
var retspec89364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89367__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec89363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89367__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec89363)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:36 query-params's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec89363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_search_string], null));
} else {
}

var f89366 = (function (raw_search_string__$1){
try{var param_string = clojure.string.replace(raw_search_string__$1,/^[?]/,"");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,assignment){
var vec__89370 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(assignment,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89370,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = k;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = v;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"_rp_");
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.algorithms.do_not_use.base64_decode(com.fulcrologic.rad.routing.html5_history.decode_uri_component(v)))], 0));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = k;
if(cljs.core.truth_(and__4115__auto__)){
return v;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.decode_uri_component(k)),com.fulcrologic.rad.routing.html5_history.decode_uri_component(v));
} else {
return result;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(param_string,/&/));
}catch (e89369){var e = e89369;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Cannot decode query param string"], null);
}),null)),null,-1231363690,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var ret89365 = f89366(raw_search_string);
if(cljs.core.truth_(retspec89364)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:36 query-params's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec89364,ret89365);
} else {
}

return ret89365;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","query-string","com.fulcrologic.rad.routing.html5-history/query-string",1958243154,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Convert a map to an encoded string that is acceptable on a URL.
 *   The param-map allows any data type acceptable to transit. The additional key-values must all be strings
 *   (and will be coerced to string if not). 
 * @type {function(!cljs.core.IMap, ...!string): !string}
 */
com.fulcrologic.rad.routing.html5_history.query_string = (function com$fulcrologic$rad$routing$html5_history$query_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___89471 = arguments.length;
var i__4737__auto___89472 = (0);
while(true){
if((i__4737__auto___89472 < len__4736__auto___89471)){
args__4742__auto__.push((arguments[i__4737__auto___89472]));

var G__89473 = (i__4737__auto___89472 + (1));
i__4737__auto___89472 = G__89473;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.routing.html5_history.query_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.routing.html5_history.query_string.cljs$core$IFn$_invoke$arity$variadic = (function (param_map,p__89379){
var map__89380 = p__89379;
var map__89380__$1 = (((((!((map__89380 == null))))?(((((map__89380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89380):map__89380);
var string_key_values = map__89380__$1;
var map__89382 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__89382__$1 = (((((!((map__89382 == null))))?(((((map__89382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89382):map__89382);
var argspec89373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89382__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec89374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89382__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec89373)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:54 query-string's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),true], null),argspec89373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map,string_key_values], null));
} else {
}

var f89376 = (function() { 
var G__89474__delegate = function (param_map__$1,p__89384){
var map__89385 = p__89384;
var map__89385__$1 = (((((!((map__89385 == null))))?(((((map__89385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89385):map__89385);
var string_key_values__$1 = map__89385__$1;
return ["?_rp_=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.encode_uri_component(com.fulcrologic.fulcro.algorithms.do_not_use.base64_encode(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1(param_map__$1)))),"&",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__89391){
var vec__89392 = p__89391;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89392,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89392,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.encode_uri_component(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.encode_uri_component(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),string_key_values__$1))].join('');
};
var G__89474 = function (param_map__$1,var_args){
var p__89384 = null;
if (arguments.length > 1) {
var G__89475__i = 0, G__89475__a = new Array(arguments.length -  1);
while (G__89475__i < G__89475__a.length) {G__89475__a[G__89475__i] = arguments[G__89475__i + 1]; ++G__89475__i;}
  p__89384 = new cljs.core.IndexedSeq(G__89475__a,0,null);
} 
return G__89474__delegate.call(this,param_map__$1,p__89384);};
G__89474.cljs$lang$maxFixedArity = 1;
G__89474.cljs$lang$applyTo = (function (arglist__89476){
var param_map__$1 = cljs.core.first(arglist__89476);
var p__89384 = cljs.core.rest(arglist__89476);
return G__89474__delegate(param_map__$1,p__89384);
});
G__89474.cljs$core$IFn$_invoke$arity$variadic = G__89474__delegate;
return G__89474;
})()
;
var ret89375 = ((cljs.core.map_QMARK_(string_key_values))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f89376,param_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map,string_key_values], null)))):((cljs.core.seq(string_key_values))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f89376,param_map,string_key_values):f89376(param_map)
));
if(cljs.core.truth_(retspec89374)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:54 query-string's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),true], null),retspec89374,ret89375);
} else {
}

return ret89375;
}));

(com.fulcrologic.rad.routing.html5_history.query_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.routing.html5_history.query_string.cljs$lang$applyTo = (function (seq89377){
var G__89378 = cljs.core.first(seq89377);
var seq89377__$1 = cljs.core.next(seq89377);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89378,seq89377__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","route->url","com.fulcrologic.rad.routing.html5-history/route->url",2028131948,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_,cljs.core.map_QMARK_,cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Construct URL from route and params
 * @type {function(*, !cljs.core.IMap, !boolean): !string}
 */
com.fulcrologic.rad.routing.html5_history.route__GT_url = (function com$fulcrologic$rad$routing$html5_history$route__GT_url(route,params,hash_based_QMARK_){
var map__89399 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_,cljs.core.map_QMARK_,cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__89399__$1 = (((((!((map__89399 == null))))?(((((map__89399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89399):map__89399);
var retspec89396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89399__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec89395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89399__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec89395)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:67 route->url's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec89395,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params,hash_based_QMARK_], null));
} else {
}

var f89398 = (function (route__$1,params__$1,hash_based_QMARK___$1){
if(cljs.core.truth_(hash_based_QMARK___$1)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.query_string(params__$1)),"#/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,route__$1))].join('');
} else {
return ["/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,route__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.query_string(params__$1))].join('');
}
});
var ret89397 = f89398(route,params,hash_based_QMARK_);
if(cljs.core.truth_(retspec89396)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:67 route->url's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec89396,ret89397);
} else {
}

return ret89397;
});
/**
 * Convert the current browser URL into a route path and parameter map. Returns:
 * 
 * ```
 * {:route ["path" "segment"]
 *  :params {:param value}}
 * ```
 * 
 * You can save this value and later use it with `apply-route!`.
 * 
 * Parameter hash-based? specifies whether to expect hash based routing. If no
 * parameter is provided the mode is autodetected from presence of hash segment in URL.
 *   
 */
com.fulcrologic.rad.routing.html5_history.url__GT_route = (function com$fulcrologic$rad$routing$html5_history$url__GT_route(var_args){
var G__89402 = arguments.length;
switch (G__89402) {
case 0:
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2((!((cljs.core.seq(document.location.hash) == null))),null);
}));

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$1 = (function (hash_based_QMARK_){
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2(hash_based_QMARK_,null);
}));

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2 = (function (hash_based_QMARK_,prefix){
var path = (cljs.core.truth_(hash_based_QMARK_)?clojure.string.replace(document.location.hash,/^[#]/,""):document.location.pathname);
var pcnt = cljs.core.count(prefix);
var prefixed_QMARK_ = (pcnt > (0));
var path__$1 = ((((prefixed_QMARK_) && (clojure.string.starts_with_QMARK_(path,prefix))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,pcnt):path);
var route = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path__$1,/\//)));
var params = (function (){var or__4126__auto__ = (function (){var G__89404 = document.location.search;
if((G__89404 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.html5_history.query_params(G__89404);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null);
}));

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$lang$maxFixedArity = 2);

com.fulcrologic.rad.routing.html5_history.notify_listeners_BANG_ = (function com$fulcrologic$rad$routing$html5_history$notify_listeners_BANG_(history,route,params,direction){
var listeners = (function (){var G__89405 = history;
var G__89405__$1 = (((G__89405 == null))?null:new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__89405));
var G__89405__$2 = (((G__89405__$1 == null))?null:cljs.core.deref(G__89405__$1));
if((G__89405__$2 == null)){
return null;
} else {
return cljs.core.vals(G__89405__$2);
}
})();
var seq__89406 = cljs.core.seq(listeners);
var chunk__89407 = null;
var count__89408 = (0);
var i__89409 = (0);
while(true){
if((i__89409 < count__89408)){
var f = chunk__89407.cljs$core$IIndexed$_nth$arity$2(null,i__89409);
var G__89414_89478 = route;
var G__89415_89479 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),direction);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__89414_89478,G__89415_89479) : f.call(null,G__89414_89478,G__89415_89479));


var G__89480 = seq__89406;
var G__89481 = chunk__89407;
var G__89482 = count__89408;
var G__89483 = (i__89409 + (1));
seq__89406 = G__89480;
chunk__89407 = G__89481;
count__89408 = G__89482;
i__89409 = G__89483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__89406);
if(temp__5735__auto__){
var seq__89406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__89406__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__89406__$1);
var G__89484 = cljs.core.chunk_rest(seq__89406__$1);
var G__89485 = c__4556__auto__;
var G__89486 = cljs.core.count(c__4556__auto__);
var G__89487 = (0);
seq__89406 = G__89484;
chunk__89407 = G__89485;
count__89408 = G__89486;
i__89409 = G__89487;
continue;
} else {
var f = cljs.core.first(seq__89406__$1);
var G__89416_89488 = route;
var G__89417_89489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),direction);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__89416_89488,G__89417_89489) : f.call(null,G__89416_89488,G__89417_89489));


var G__89490 = cljs.core.next(seq__89406__$1);
var G__89491 = null;
var G__89492 = (0);
var G__89493 = (0);
seq__89406 = G__89490;
chunk__89407 = G__89491;
count__89408 = G__89492;
i__89409 = G__89493;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {com.fulcrologic.rad.routing.history.RouteHistory}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.fulcrologic.rad.routing.html5_history.HTML5History = (function (hash_based_QMARK_,listeners,generator,current_uid,prior_route,all_events_QMARK_,prefix,recent_history,default_route,fulcro_app,__meta,__extmap,__hash){
this.hash_based_QMARK_ = hash_based_QMARK_;
this.listeners = listeners;
this.generator = generator;
this.current_uid = current_uid;
this.prior_route = prior_route;
this.all_events_QMARK_ = all_events_QMARK_;
this.prefix = prefix;
this.recent_history = recent_history;
this.default_route = default_route;
this.fulcro_app = fulcro_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k89420,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__89424 = k89420;
var G__89424__$1 = (((G__89424 instanceof cljs.core.Keyword))?G__89424.fqn:null);
switch (G__89424__$1) {
case "hash-based?":
return self__.hash_based_QMARK_;

break;
case "listeners":
return self__.listeners;

break;
case "generator":
return self__.generator;

break;
case "current-uid":
return self__.current_uid;

break;
case "prior-route":
return self__.prior_route;

break;
case "all-events?":
return self__.all_events_QMARK_;

break;
case "prefix":
return self__.prefix;

break;
case "recent-history":
return self__.recent_history;

break;
case "default-route":
return self__.default_route;

break;
case "fulcro-app":
return self__.fulcro_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k89420,else__4383__auto__);

}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__89425){
var vec__89426 = p__89425;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89426,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89426,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.fulcrologic.rad.routing.html5-history.HTML5History{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),self__.hash_based_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generator","generator",-572962281),self__.generator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current-uid","current-uid",342017555),self__.current_uid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),self__.prior_route],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),self__.all_events_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),self__.recent_history],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-route","default-route",-1491022475),self__.default_route],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),self__.fulcro_app],null))], null),self__.__extmap));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89419){
var self__ = this;
var G__89419__$1 = this;
return (new cljs.core.RecordIter((0),G__89419__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"generator","generator",-572962281),new cljs.core.Keyword(null,"current-uid","current-uid",342017555),new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1816411844 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this89421,other89422){
var self__ = this;
var this89421__$1 = this;
return (((!((other89422 == null)))) && ((this89421__$1.constructor === other89422.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.hash_based_QMARK_,other89422.hash_based_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.listeners,other89422.listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.generator,other89422.generator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.current_uid,other89422.current_uid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.prior_route,other89422.prior_route)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.all_events_QMARK_,other89422.all_events_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.prefix,other89422.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.recent_history,other89422.recent_history)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.default_route,other89422.default_route)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.fulcro_app,other89422.fulcro_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this89421__$1.__extmap,other89422.__extmap)));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),null,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"current-uid","current-uid",342017555),null,new cljs.core.Keyword(null,"default-route","default-route",-1491022475),null,new cljs.core.Keyword(null,"generator","generator",-572962281),null,new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),null,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),null,new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$ = cljs.core.PROTOCOL_SENTINEL);

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3 = (function (this$,route,params){
var self__ = this;
var this$__$1 = this;
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),com.fulcrologic.rad.routing.html5_history.route__GT_url(route,params,self__.hash_based_QMARK_)].join('');
try{var result__13793__auto___89501 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pushing route",route,params], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pushing route",new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null),"=>",result__13793__auto___89501], null);
}),null)),null,1219145822,true);

}catch (e89429){var e__13755__auto___89502 = e89429;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__13755__auto___89502], null);
}),null)),null,99977452,null);

throw e__13755__auto___89502;
}
if(cljs.core.truth_(self__.all_events_QMARK_)){
com.fulcrologic.rad.routing.html5_history.notify_listeners_BANG_(this$__$1,route,params,new cljs.core.Keyword(null,"push","push",799791267));
} else {
}

cljs.core.reset_BANG_(self__.current_uid,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.generator,cljs.core.inc));

cljs.core.reset_BANG_(self__.prior_route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.recent_history,(function (p1__89418_SHARP_){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null),p1__89418_SHARP_);
}));

return history.pushState(({"uid": cljs.core.deref(self__.current_uid)}),"",url);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$arity$3 = (function (this$,route,params){
var self__ = this;
var this$__$1 = this;
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),com.fulcrologic.rad.routing.html5_history.route__GT_url(route,params,self__.hash_based_QMARK_)].join('');
if(cljs.core.truth_(self__.all_events_QMARK_)){
com.fulcrologic.rad.routing.html5_history.notify_listeners_BANG_(this$__$1,route,params,new cljs.core.Keyword(null,"replace","replace",-786587770));
} else {
}

try{var result__13793__auto___89503 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replacing route",route,params], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,129,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replacing route",new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null),"=>",result__13793__auto___89503], null);
}),null)),null,-1478827144,true);

}catch (e89430){var e__13755__auto___89504 = e89430;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,129,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__13755__auto___89504], null);
}),null)),null,-1146846097,null);

throw e__13755__auto___89504;
}
cljs.core.reset_BANG_(self__.prior_route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.recent_history,(function (h){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null),cljs.core.rest(h));
}));

return history.replaceState(({"uid": cljs.core.deref(self__.current_uid)}),"",url);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_undo_BANG_$arity$3 = (function (this$,_,p__89431){
var self__ = this;
var map__89432 = p__89431;
var map__89432__$1 = (((((!((map__89432 == null))))?(((((map__89432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89432):map__89432);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89432__$1,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952));
var this$__$1 = this;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempting to UNDO a routing request from the browser"], null);
}),null)),null,-1151265942,null);

var temp__5735__auto__ = cljs.core.deref(self__.prior_route);
if(cljs.core.truth_(temp__5735__auto__)){
var map__89434 = temp__5735__auto__;
var map__89434__$1 = (((((!((map__89434 == null))))?(((((map__89434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89434):map__89434);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89434__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89434__$1,new cljs.core.Keyword(null,"params","params",710516235));
cljs.core.reset_BANG_(self__.prior_route,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forward","forward",-557345303),direction)){
return this$__$1.com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$arity$3(null,route,params);
} else {
return this$__$1.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3(null,route,params);
}
} else {
return null;
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_back_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(cljs.core.deref(self__.recent_history)) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,145,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Back to prior route",(function (){var G__89436 = self__.prior_route;
if((G__89436 == null)){
return null;
} else {
return cljs.core.deref(G__89436);
}
})()], null);
}),null)),null,1287980184,null);

return history.back();
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(self__.default_route))){
var map__89437 = self__.default_route;
var map__89437__$1 = (((((!((map__89437 == null))))?(((((map__89437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89437):map__89437);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89437__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89437__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No prior route. Using default route"], null);
}),null)),null,27499882,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"routing","routing",1440253662),com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(self__.fulcro_app,route,params))){
return this$__$1.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3(null,route,params);
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No prior route. Ignoring BACK request."], null);
}),null)),null,250087438,null);

}
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_add_route_listener_BANG_$arity$3 = (function (_,listener_key,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.listeners,cljs.core.assoc,listener_key,f);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_remove_route_listener_BANG_$arity$2 = (function (_,listener_key){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.listeners,cljs.core.dissoc,listener_key);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2(self__.hash_based_QMARK_,self__.prefix);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__89419){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__89439 = cljs.core.keyword_identical_QMARK_;
var expr__89440 = k__4388__auto__;
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(G__89419,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,G__89419,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generator","generator",-572962281),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"generator","generator",-572962281),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,G__89419,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-uid","current-uid",342017555),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"current-uid","current-uid",342017555),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,G__89419,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,G__89419,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,G__89419,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,G__89419,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,G__89419,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-route","default-route",-1491022475),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"default-route","default-route",-1491022475),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,G__89419,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__89439.cljs$core$IFn$_invoke$arity$2 ? pred__89439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),expr__89440) : pred__89439.call(null,new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),expr__89440)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,G__89419,self__.__meta,self__.__extmap,null));
} else {
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__89419),null));
}
}
}
}
}
}
}
}
}
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),self__.hash_based_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"generator","generator",-572962281),self__.generator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"current-uid","current-uid",342017555),self__.current_uid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),self__.prior_route,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),self__.all_events_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),self__.recent_history,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default-route","default-route",-1491022475),self__.default_route,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),self__.fulcro_app,null))], null),self__.__extmap));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__89419){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,G__89419,self__.__extmap,self__.__hash));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hash-based?","hash-based?",-1719566190,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null),new cljs.core.Symbol(null,"current-uid","current-uid",1982549082,null),new cljs.core.Symbol(null,"prior-route","prior-route",-835923453,null),new cljs.core.Symbol(null,"all-events?","all-events?",934450529,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"recent-history","recent-history",428659585,null),new cljs.core.Symbol(null,"default-route","default-route",149509052,null),new cljs.core.Symbol(null,"fulcro-app","fulcro-app",-723198190,null)], null);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.cljs$lang$type = true);

(com.fulcrologic.rad.routing.html5_history.HTML5History.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.fulcrologic.rad.routing.html5-history/HTML5History",null,(1),null));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.fulcrologic.rad.routing.html5-history/HTML5History");
}));

/**
 * Positional factory function for com.fulcrologic.rad.routing.html5-history/HTML5History.
 */
com.fulcrologic.rad.routing.html5_history.__GT_HTML5History = (function com$fulcrologic$rad$routing$html5_history$__GT_HTML5History(hash_based_QMARK_,listeners,generator,current_uid,prior_route,all_events_QMARK_,prefix,recent_history,default_route,fulcro_app){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(hash_based_QMARK_,listeners,generator,current_uid,prior_route,all_events_QMARK_,prefix,recent_history,default_route,fulcro_app,null,null,null));
});

/**
 * Factory function for com.fulcrologic.rad.routing.html5-history/HTML5History, taking a map of keywords to field values.
 */
com.fulcrologic.rad.routing.html5_history.map__GT_HTML5History = (function com$fulcrologic$rad$routing$html5_history$map__GT_HTML5History(G__89423){
var extmap__4419__auto__ = (function (){var G__89442 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__89423,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"generator","generator",-572962281),new cljs.core.Keyword(null,"current-uid","current-uid",342017555),new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579)], 0));
if(cljs.core.record_QMARK_(G__89423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__89442);
} else {
return G__89442;
}
})();
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"generator","generator",-572962281).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"current-uid","current-uid",342017555).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"prior-route","prior-route",1818512316).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"all-events?","all-events?",-706080998).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"default-route","default-route",-1491022475).cljs$core$IFn$_invoke$arity$1(G__89423),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579).cljs$core$IFn$_invoke$arity$1(G__89423),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create a new instance of a RouteHistory object that is properly configured against the browser's HTML5 History API.
 * 
 * `hash-based?` - Use hash-based URIs instead of paths
 * `all-events?` - Call the route listeners on all routing operations (not just pop state events).
 * `default-route` - A map of `{:route r :params p}` to use when there is no prior route, but the user tries to navigate to the prior screen.
 * IF YOU PROVIDE default-route, THEN YOU MUST ALSO PROVIDE `app` for it to work.
 * `app` - The Fulco application that is being served.
 * `prefix`      - Prepend prefix to all routes, in cases we are not running on root url (context-root)
 */
com.fulcrologic.rad.routing.html5_history.new_html5_history = (function com$fulcrologic$rad$routing$html5_history$new_html5_history(p__89443){
var map__89444 = p__89443;
var map__89444__$1 = (((((!((map__89444 == null))))?(((((map__89444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89444):map__89444);
var hash_based_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89444__$1,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),false);
var all_events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89444__$1,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),false);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89444__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null);
var default_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89444__$1,new cljs.core.Keyword(null,"default-route","default-route",-1491022475));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89444__$1,new cljs.core.Keyword(null,"app","app",-560961707));
if(((cljs.core.not(prefix)) || (((clojure.string.starts_with_QMARK_(prefix,"/")) && ((!(clojure.string.ends_with_QMARK_(prefix,"/")))))))){
} else {
throw (new Error(["Assert failed: ","Prefix must start with a slash, and not end with one.","\n","(or (not prefix) (and (str/starts-with? prefix \"/\") (not (str/ends-with? prefix \"/\"))))"].join('')));
}

try{var history = (new com.fulcrologic.rad.routing.html5_history.HTML5History(hash_based_QMARK_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),all_events_QMARK_,prefix,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),default_route,app,null,null,null));
var pop_state_listener = (function (evt){
var current_uid = cljs.core.deref(history.current_uid);
var event_uid = goog.object.getValueByKeys(evt,"state","uid");
var forward_QMARK_ = (event_uid < current_uid);
var map__89447 = history.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1(null);
var map__89447__$1 = (((((!((map__89447 == null))))?(((((map__89447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89447):map__89447);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89447__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89447__$1,new cljs.core.Keyword(null,"params","params",710516235));
var listeners = (function (){var G__89449 = history;
var G__89449__$1 = (((G__89449 == null))?null:G__89449.listeners);
var G__89449__$2 = (((G__89449__$1 == null))?null:cljs.core.deref(G__89449__$1));
if((G__89449__$2 == null)){
return null;
} else {
return cljs.core.vals(G__89449__$2);
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,180,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Got pop state event.",evt], null);
}),null)),null,1015908650,null);

var seq__89450_89542 = cljs.core.seq(listeners);
var chunk__89451_89543 = null;
var count__89452_89544 = (0);
var i__89453_89545 = (0);
while(true){
if((i__89453_89545 < count__89452_89544)){
var f_89546 = chunk__89451_89543.cljs$core$IIndexed$_nth$arity$2(null,i__89453_89545);
var G__89458_89547 = route;
var G__89459_89548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),((forward_QMARK_)?new cljs.core.Keyword(null,"forward","forward",-557345303):new cljs.core.Keyword(null,"back","back",-417520012)));
(f_89546.cljs$core$IFn$_invoke$arity$2 ? f_89546.cljs$core$IFn$_invoke$arity$2(G__89458_89547,G__89459_89548) : f_89546.call(null,G__89458_89547,G__89459_89548));


var G__89549 = seq__89450_89542;
var G__89550 = chunk__89451_89543;
var G__89551 = count__89452_89544;
var G__89552 = (i__89453_89545 + (1));
seq__89450_89542 = G__89549;
chunk__89451_89543 = G__89550;
count__89452_89544 = G__89551;
i__89453_89545 = G__89552;
continue;
} else {
var temp__5735__auto___89553 = cljs.core.seq(seq__89450_89542);
if(temp__5735__auto___89553){
var seq__89450_89554__$1 = temp__5735__auto___89553;
if(cljs.core.chunked_seq_QMARK_(seq__89450_89554__$1)){
var c__4556__auto___89555 = cljs.core.chunk_first(seq__89450_89554__$1);
var G__89556 = cljs.core.chunk_rest(seq__89450_89554__$1);
var G__89557 = c__4556__auto___89555;
var G__89558 = cljs.core.count(c__4556__auto___89555);
var G__89559 = (0);
seq__89450_89542 = G__89556;
chunk__89451_89543 = G__89557;
count__89452_89544 = G__89558;
i__89453_89545 = G__89559;
continue;
} else {
var f_89560 = cljs.core.first(seq__89450_89554__$1);
var G__89460_89561 = route;
var G__89461_89562 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),((forward_QMARK_)?new cljs.core.Keyword(null,"forward","forward",-557345303):new cljs.core.Keyword(null,"back","back",-417520012)));
(f_89560.cljs$core$IFn$_invoke$arity$2 ? f_89560.cljs$core$IFn$_invoke$arity$2(G__89460_89561,G__89461_89562) : f_89560.call(null,G__89460_89561,G__89461_89562));


var G__89563 = cljs.core.next(seq__89450_89554__$1);
var G__89564 = null;
var G__89565 = (0);
var G__89566 = (0);
seq__89450_89542 = G__89563;
chunk__89451_89543 = G__89564;
count__89452_89544 = G__89565;
i__89453_89545 = G__89566;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history.recent_history,cljs.core.rest);

return cljs.core.reset_BANG_(history.prior_route,history.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1(null));
});
window.addEventListener("popstate",pop_state_listener);

return history;
}catch (e89446){var e = e89446;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,188,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to create HTML5 history."], null);
}),null)),null,1662494431,null);
}});
/**
 * Create a new instance of a RouteHistory object that is properly configured against the browser's HTML5 History API.
 * 
 * `hash-based?` - Use hash-based URIs instead of paths
 * `all-events?` - Call the route listeners on all routing operations (not just pop state events).
 * 
 *   You should prefer using the new-html5-history, since it supports more options
 */
com.fulcrologic.rad.routing.html5_history.html5_history = (function com$fulcrologic$rad$routing$html5_history$html5_history(var_args){
var G__89463 = arguments.length;
switch (G__89463) {
case 0:
return com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.rad.routing.html5_history.new_html5_history(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$1 = (function (hash_based_QMARK_){
return com.fulcrologic.rad.routing.html5_history.new_html5_history(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),hash_based_QMARK_], null));
}));

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$2 = (function (hash_based_QMARK_,all_events_QMARK_){
return com.fulcrologic.rad.routing.html5_history.new_html5_history(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),hash_based_QMARK_,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),all_events_QMARK_], null));
}));

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$lang$maxFixedArity = 2);

/**
 * Apply the given route and params to the URL and routing system. `saved-route` is in the format of
 * the return value of `url->route`. Returns true if it is able to route there.
 */
com.fulcrologic.rad.routing.html5_history.apply_route_BANG_ = (function com$fulcrologic$rad$routing$html5_history$apply_route_BANG_(app,p__89464){
var map__89465 = p__89464;
var map__89465__$1 = (((((!((map__89465 == null))))?(((((map__89465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89465):map__89465);
var saved_route = map__89465__$1;
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89465__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89465__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5733__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.resolve_target(app,route);
if(cljs.core.truth_(temp__5733__auto__)){
var target = temp__5733__auto__;
var app_root = com.fulcrologic.fulcro.application.root_class(app);
var raw_path = com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3(app_root,target,params);
var embedded_params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__89467){
var vec__89468 = p__89467;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89468,(0),null);
var resolved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89468,(1),null);
if((raw instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,raw,resolved);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,raw_path,route));
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embedded_params,params], 0));
com.fulcrologic.rad.routing.route_to_BANG_(app,target,params__$1);

return true;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Saved route did not resolve to a UI target",saved_route], null);
}),null)),null,-1798110880,null);

return false;
}
});
/**
 * Attempt to restore the route given in the URL. If that fails, simply route to the default given (a class and map).
 * 
 * WARNING: This should not be called until the HTML5 history is installed in your app.
 */
com.fulcrologic.rad.routing.html5_history.restore_route_BANG_ = (function com$fulcrologic$rad$routing$html5_history$restore_route_BANG_(app,default_page,default_params){
var this$ = com.fulcrologic.rad.routing.history.active_history(app);
var url_route = com.fulcrologic.rad.routing.history._current_route(this$);
if(cljs.core.truth_((function (){var and__4115__auto__ = this$;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(url_route));
} else {
return and__4115__auto__;
}
})())){
if(com.fulcrologic.rad.routing.html5_history.apply_route_BANG_(app,url_route)){
return null;
} else {
return com.fulcrologic.rad.routing.route_to_BANG_(app,default_page,default_params);
}
} else {
return com.fulcrologic.rad.routing.route_to_BANG_(app,default_page,default_params);
}
});

//# sourceMappingURL=com.fulcrologic.rad.routing.html5_history.js.map
