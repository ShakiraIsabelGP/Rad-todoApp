goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55028 = arguments.length;
var i__4737__auto___55029 = (0);
while(true){
if((i__4737__auto___55029 < len__4736__auto___55028)){
args__4742__auto__.push((arguments[i__4737__auto___55029]));

var G__55030 = (i__4737__auto___55029 + (1));
i__4737__auto___55029 = G__55030;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54882){
var G__54883 = cljs.core.first(seq54882);
var seq54882__$1 = cljs.core.next(seq54882);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54883,seq54882__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54884 = cljs.core.seq(sources);
var chunk__54885 = null;
var count__54886 = (0);
var i__54887 = (0);
while(true){
if((i__54887 < count__54886)){
var map__54894 = chunk__54885.cljs$core$IIndexed$_nth$arity$2(null,i__54887);
var map__54894__$1 = (((((!((map__54894 == null))))?(((((map__54894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54894):map__54894);
var src = map__54894__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54896){var e_55031 = e54896;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55031);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55031.message)].join('')));
}

var G__55032 = seq__54884;
var G__55033 = chunk__54885;
var G__55034 = count__54886;
var G__55035 = (i__54887 + (1));
seq__54884 = G__55032;
chunk__54885 = G__55033;
count__54886 = G__55034;
i__54887 = G__55035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54884);
if(temp__5735__auto__){
var seq__54884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54884__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54884__$1);
var G__55036 = cljs.core.chunk_rest(seq__54884__$1);
var G__55037 = c__4556__auto__;
var G__55038 = cljs.core.count(c__4556__auto__);
var G__55039 = (0);
seq__54884 = G__55036;
chunk__54885 = G__55037;
count__54886 = G__55038;
i__54887 = G__55039;
continue;
} else {
var map__54897 = cljs.core.first(seq__54884__$1);
var map__54897__$1 = (((((!((map__54897 == null))))?(((((map__54897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54897):map__54897);
var src = map__54897__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54899){var e_55040 = e54899;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55040);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55040.message)].join('')));
}

var G__55041 = cljs.core.next(seq__54884__$1);
var G__55042 = null;
var G__55043 = (0);
var G__55044 = (0);
seq__54884 = G__55041;
chunk__54885 = G__55042;
count__54886 = G__55043;
i__54887 = G__55044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54900 = cljs.core.seq(js_requires);
var chunk__54901 = null;
var count__54902 = (0);
var i__54903 = (0);
while(true){
if((i__54903 < count__54902)){
var js_ns = chunk__54901.cljs$core$IIndexed$_nth$arity$2(null,i__54903);
var require_str_55045 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55045);


var G__55046 = seq__54900;
var G__55047 = chunk__54901;
var G__55048 = count__54902;
var G__55049 = (i__54903 + (1));
seq__54900 = G__55046;
chunk__54901 = G__55047;
count__54902 = G__55048;
i__54903 = G__55049;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54900);
if(temp__5735__auto__){
var seq__54900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54900__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54900__$1);
var G__55050 = cljs.core.chunk_rest(seq__54900__$1);
var G__55051 = c__4556__auto__;
var G__55052 = cljs.core.count(c__4556__auto__);
var G__55053 = (0);
seq__54900 = G__55050;
chunk__54901 = G__55051;
count__54902 = G__55052;
i__54903 = G__55053;
continue;
} else {
var js_ns = cljs.core.first(seq__54900__$1);
var require_str_55054 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55054);


var G__55055 = cljs.core.next(seq__54900__$1);
var G__55056 = null;
var G__55057 = (0);
var G__55058 = (0);
seq__54900 = G__55055;
chunk__54901 = G__55056;
count__54902 = G__55057;
i__54903 = G__55058;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54905){
var map__54906 = p__54905;
var map__54906__$1 = (((((!((map__54906 == null))))?(((((map__54906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54906):map__54906);
var msg = map__54906__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54908(s__54909){
return (new cljs.core.LazySeq(null,(function (){
var s__54909__$1 = s__54909;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54909__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__54914 = cljs.core.first(xs__6292__auto__);
var map__54914__$1 = (((((!((map__54914 == null))))?(((((map__54914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54914):map__54914);
var src = map__54914__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54914__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__54909__$1,map__54914,map__54914__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54906,map__54906__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54908_$_iter__54910(s__54911){
return (new cljs.core.LazySeq(null,((function (s__54909__$1,map__54914,map__54914__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54906,map__54906__$1,msg,info,reload_info){
return (function (){
var s__54911__$1 = s__54911;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__54911__$1);
if(temp__5735__auto____$1){
var s__54911__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54911__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54911__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54913 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54912 = (0);
while(true){
if((i__54912 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__54912);
cljs.core.chunk_append(b__54913,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__55059 = (i__54912 + (1));
i__54912 = G__55059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54913),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54908_$_iter__54910(cljs.core.chunk_rest(s__54911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54913),null);
}
} else {
var warning = cljs.core.first(s__54911__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54908_$_iter__54910(cljs.core.rest(s__54911__$2)));
}
} else {
return null;
}
break;
}
});})(s__54909__$1,map__54914,map__54914__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54906,map__54906__$1,msg,info,reload_info))
,null,null));
});})(s__54909__$1,map__54914,map__54914__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__54906,map__54906__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54908(cljs.core.rest(s__54909__$1)));
} else {
var G__55060 = cljs.core.rest(s__54909__$1);
s__54909__$1 = G__55060;
continue;
}
} else {
var G__55061 = cljs.core.rest(s__54909__$1);
s__54909__$1 = G__55061;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54916_55062 = cljs.core.seq(warnings);
var chunk__54917_55063 = null;
var count__54918_55064 = (0);
var i__54919_55065 = (0);
while(true){
if((i__54919_55065 < count__54918_55064)){
var map__54924_55066 = chunk__54917_55063.cljs$core$IIndexed$_nth$arity$2(null,i__54919_55065);
var map__54924_55067__$1 = (((((!((map__54924_55066 == null))))?(((((map__54924_55066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54924_55066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54924_55066):map__54924_55066);
var w_55068 = map__54924_55067__$1;
var msg_55069__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54924_55067__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54924_55067__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54924_55067__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54924_55067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55072)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55070),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55071),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55069__$1)].join(''));


var G__55073 = seq__54916_55062;
var G__55074 = chunk__54917_55063;
var G__55075 = count__54918_55064;
var G__55076 = (i__54919_55065 + (1));
seq__54916_55062 = G__55073;
chunk__54917_55063 = G__55074;
count__54918_55064 = G__55075;
i__54919_55065 = G__55076;
continue;
} else {
var temp__5735__auto___55077 = cljs.core.seq(seq__54916_55062);
if(temp__5735__auto___55077){
var seq__54916_55078__$1 = temp__5735__auto___55077;
if(cljs.core.chunked_seq_QMARK_(seq__54916_55078__$1)){
var c__4556__auto___55079 = cljs.core.chunk_first(seq__54916_55078__$1);
var G__55080 = cljs.core.chunk_rest(seq__54916_55078__$1);
var G__55081 = c__4556__auto___55079;
var G__55082 = cljs.core.count(c__4556__auto___55079);
var G__55083 = (0);
seq__54916_55062 = G__55080;
chunk__54917_55063 = G__55081;
count__54918_55064 = G__55082;
i__54919_55065 = G__55083;
continue;
} else {
var map__54926_55084 = cljs.core.first(seq__54916_55078__$1);
var map__54926_55085__$1 = (((((!((map__54926_55084 == null))))?(((((map__54926_55084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54926_55084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54926_55084):map__54926_55084);
var w_55086 = map__54926_55085__$1;
var msg_55087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926_55085__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926_55085__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926_55085__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926_55085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55090)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55088),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55089),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55087__$1)].join(''));


var G__55091 = cljs.core.next(seq__54916_55078__$1);
var G__55092 = null;
var G__55093 = (0);
var G__55094 = (0);
seq__54916_55062 = G__55091;
chunk__54917_55063 = G__55092;
count__54918_55064 = G__55093;
i__54919_55065 = G__55094;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54904_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54904_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54928){
var map__54929 = p__54928;
var map__54929__$1 = (((((!((map__54929 == null))))?(((((map__54929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54929):map__54929);
var msg = map__54929__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54929__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__54931 = cljs.core.seq(updates);
var chunk__54933 = null;
var count__54934 = (0);
var i__54935 = (0);
while(true){
if((i__54935 < count__54934)){
var path = chunk__54933.cljs$core$IIndexed$_nth$arity$2(null,i__54935);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54965_55095 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54969_55096 = null;
var count__54970_55097 = (0);
var i__54971_55098 = (0);
while(true){
if((i__54971_55098 < count__54970_55097)){
var node_55099 = chunk__54969_55096.cljs$core$IIndexed$_nth$arity$2(null,i__54971_55098);
if(cljs.core.not(node_55099.shadow$old)){
var path_match_55100 = shadow.cljs.devtools.client.browser.match_paths(node_55099.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55100)){
var new_link_55101 = (function (){var G__54977 = node_55099.cloneNode(true);
G__54977.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55100),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54977;
})();
(node_55099.shadow$old = true);

(new_link_55101.onload = ((function (seq__54965_55095,chunk__54969_55096,count__54970_55097,i__54971_55098,seq__54931,chunk__54933,count__54934,i__54935,new_link_55101,path_match_55100,node_55099,path,map__54929,map__54929__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55099);
});})(seq__54965_55095,chunk__54969_55096,count__54970_55097,i__54971_55098,seq__54931,chunk__54933,count__54934,i__54935,new_link_55101,path_match_55100,node_55099,path,map__54929,map__54929__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55100], 0));

goog.dom.insertSiblingAfter(new_link_55101,node_55099);


var G__55102 = seq__54965_55095;
var G__55103 = chunk__54969_55096;
var G__55104 = count__54970_55097;
var G__55105 = (i__54971_55098 + (1));
seq__54965_55095 = G__55102;
chunk__54969_55096 = G__55103;
count__54970_55097 = G__55104;
i__54971_55098 = G__55105;
continue;
} else {
var G__55106 = seq__54965_55095;
var G__55107 = chunk__54969_55096;
var G__55108 = count__54970_55097;
var G__55109 = (i__54971_55098 + (1));
seq__54965_55095 = G__55106;
chunk__54969_55096 = G__55107;
count__54970_55097 = G__55108;
i__54971_55098 = G__55109;
continue;
}
} else {
var G__55110 = seq__54965_55095;
var G__55111 = chunk__54969_55096;
var G__55112 = count__54970_55097;
var G__55113 = (i__54971_55098 + (1));
seq__54965_55095 = G__55110;
chunk__54969_55096 = G__55111;
count__54970_55097 = G__55112;
i__54971_55098 = G__55113;
continue;
}
} else {
var temp__5735__auto___55114 = cljs.core.seq(seq__54965_55095);
if(temp__5735__auto___55114){
var seq__54965_55115__$1 = temp__5735__auto___55114;
if(cljs.core.chunked_seq_QMARK_(seq__54965_55115__$1)){
var c__4556__auto___55116 = cljs.core.chunk_first(seq__54965_55115__$1);
var G__55117 = cljs.core.chunk_rest(seq__54965_55115__$1);
var G__55118 = c__4556__auto___55116;
var G__55119 = cljs.core.count(c__4556__auto___55116);
var G__55120 = (0);
seq__54965_55095 = G__55117;
chunk__54969_55096 = G__55118;
count__54970_55097 = G__55119;
i__54971_55098 = G__55120;
continue;
} else {
var node_55121 = cljs.core.first(seq__54965_55115__$1);
if(cljs.core.not(node_55121.shadow$old)){
var path_match_55122 = shadow.cljs.devtools.client.browser.match_paths(node_55121.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55122)){
var new_link_55123 = (function (){var G__54978 = node_55121.cloneNode(true);
G__54978.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55122),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54978;
})();
(node_55121.shadow$old = true);

(new_link_55123.onload = ((function (seq__54965_55095,chunk__54969_55096,count__54970_55097,i__54971_55098,seq__54931,chunk__54933,count__54934,i__54935,new_link_55123,path_match_55122,node_55121,seq__54965_55115__$1,temp__5735__auto___55114,path,map__54929,map__54929__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55121);
});})(seq__54965_55095,chunk__54969_55096,count__54970_55097,i__54971_55098,seq__54931,chunk__54933,count__54934,i__54935,new_link_55123,path_match_55122,node_55121,seq__54965_55115__$1,temp__5735__auto___55114,path,map__54929,map__54929__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55122], 0));

goog.dom.insertSiblingAfter(new_link_55123,node_55121);


var G__55124 = cljs.core.next(seq__54965_55115__$1);
var G__55125 = null;
var G__55126 = (0);
var G__55127 = (0);
seq__54965_55095 = G__55124;
chunk__54969_55096 = G__55125;
count__54970_55097 = G__55126;
i__54971_55098 = G__55127;
continue;
} else {
var G__55128 = cljs.core.next(seq__54965_55115__$1);
var G__55129 = null;
var G__55130 = (0);
var G__55131 = (0);
seq__54965_55095 = G__55128;
chunk__54969_55096 = G__55129;
count__54970_55097 = G__55130;
i__54971_55098 = G__55131;
continue;
}
} else {
var G__55132 = cljs.core.next(seq__54965_55115__$1);
var G__55133 = null;
var G__55134 = (0);
var G__55135 = (0);
seq__54965_55095 = G__55132;
chunk__54969_55096 = G__55133;
count__54970_55097 = G__55134;
i__54971_55098 = G__55135;
continue;
}
}
} else {
}
}
break;
}


var G__55136 = seq__54931;
var G__55137 = chunk__54933;
var G__55138 = count__54934;
var G__55139 = (i__54935 + (1));
seq__54931 = G__55136;
chunk__54933 = G__55137;
count__54934 = G__55138;
i__54935 = G__55139;
continue;
} else {
var G__55140 = seq__54931;
var G__55141 = chunk__54933;
var G__55142 = count__54934;
var G__55143 = (i__54935 + (1));
seq__54931 = G__55140;
chunk__54933 = G__55141;
count__54934 = G__55142;
i__54935 = G__55143;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54931);
if(temp__5735__auto__){
var seq__54931__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54931__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54931__$1);
var G__55144 = cljs.core.chunk_rest(seq__54931__$1);
var G__55145 = c__4556__auto__;
var G__55146 = cljs.core.count(c__4556__auto__);
var G__55147 = (0);
seq__54931 = G__55144;
chunk__54933 = G__55145;
count__54934 = G__55146;
i__54935 = G__55147;
continue;
} else {
var path = cljs.core.first(seq__54931__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54979_55148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54983_55149 = null;
var count__54984_55150 = (0);
var i__54985_55151 = (0);
while(true){
if((i__54985_55151 < count__54984_55150)){
var node_55152 = chunk__54983_55149.cljs$core$IIndexed$_nth$arity$2(null,i__54985_55151);
if(cljs.core.not(node_55152.shadow$old)){
var path_match_55153 = shadow.cljs.devtools.client.browser.match_paths(node_55152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55153)){
var new_link_55154 = (function (){var G__54991 = node_55152.cloneNode(true);
G__54991.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55153),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54991;
})();
(node_55152.shadow$old = true);

(new_link_55154.onload = ((function (seq__54979_55148,chunk__54983_55149,count__54984_55150,i__54985_55151,seq__54931,chunk__54933,count__54934,i__54935,new_link_55154,path_match_55153,node_55152,path,seq__54931__$1,temp__5735__auto__,map__54929,map__54929__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55152);
});})(seq__54979_55148,chunk__54983_55149,count__54984_55150,i__54985_55151,seq__54931,chunk__54933,count__54934,i__54935,new_link_55154,path_match_55153,node_55152,path,seq__54931__$1,temp__5735__auto__,map__54929,map__54929__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55153], 0));

goog.dom.insertSiblingAfter(new_link_55154,node_55152);


var G__55155 = seq__54979_55148;
var G__55156 = chunk__54983_55149;
var G__55157 = count__54984_55150;
var G__55158 = (i__54985_55151 + (1));
seq__54979_55148 = G__55155;
chunk__54983_55149 = G__55156;
count__54984_55150 = G__55157;
i__54985_55151 = G__55158;
continue;
} else {
var G__55159 = seq__54979_55148;
var G__55160 = chunk__54983_55149;
var G__55161 = count__54984_55150;
var G__55162 = (i__54985_55151 + (1));
seq__54979_55148 = G__55159;
chunk__54983_55149 = G__55160;
count__54984_55150 = G__55161;
i__54985_55151 = G__55162;
continue;
}
} else {
var G__55163 = seq__54979_55148;
var G__55164 = chunk__54983_55149;
var G__55165 = count__54984_55150;
var G__55166 = (i__54985_55151 + (1));
seq__54979_55148 = G__55163;
chunk__54983_55149 = G__55164;
count__54984_55150 = G__55165;
i__54985_55151 = G__55166;
continue;
}
} else {
var temp__5735__auto___55167__$1 = cljs.core.seq(seq__54979_55148);
if(temp__5735__auto___55167__$1){
var seq__54979_55168__$1 = temp__5735__auto___55167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54979_55168__$1)){
var c__4556__auto___55169 = cljs.core.chunk_first(seq__54979_55168__$1);
var G__55170 = cljs.core.chunk_rest(seq__54979_55168__$1);
var G__55171 = c__4556__auto___55169;
var G__55172 = cljs.core.count(c__4556__auto___55169);
var G__55173 = (0);
seq__54979_55148 = G__55170;
chunk__54983_55149 = G__55171;
count__54984_55150 = G__55172;
i__54985_55151 = G__55173;
continue;
} else {
var node_55174 = cljs.core.first(seq__54979_55168__$1);
if(cljs.core.not(node_55174.shadow$old)){
var path_match_55175 = shadow.cljs.devtools.client.browser.match_paths(node_55174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55175)){
var new_link_55176 = (function (){var G__54992 = node_55174.cloneNode(true);
G__54992.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54992;
})();
(node_55174.shadow$old = true);

(new_link_55176.onload = ((function (seq__54979_55148,chunk__54983_55149,count__54984_55150,i__54985_55151,seq__54931,chunk__54933,count__54934,i__54935,new_link_55176,path_match_55175,node_55174,seq__54979_55168__$1,temp__5735__auto___55167__$1,path,seq__54931__$1,temp__5735__auto__,map__54929,map__54929__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55174);
});})(seq__54979_55148,chunk__54983_55149,count__54984_55150,i__54985_55151,seq__54931,chunk__54933,count__54934,i__54935,new_link_55176,path_match_55175,node_55174,seq__54979_55168__$1,temp__5735__auto___55167__$1,path,seq__54931__$1,temp__5735__auto__,map__54929,map__54929__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55175], 0));

goog.dom.insertSiblingAfter(new_link_55176,node_55174);


var G__55177 = cljs.core.next(seq__54979_55168__$1);
var G__55178 = null;
var G__55179 = (0);
var G__55180 = (0);
seq__54979_55148 = G__55177;
chunk__54983_55149 = G__55178;
count__54984_55150 = G__55179;
i__54985_55151 = G__55180;
continue;
} else {
var G__55181 = cljs.core.next(seq__54979_55168__$1);
var G__55182 = null;
var G__55183 = (0);
var G__55184 = (0);
seq__54979_55148 = G__55181;
chunk__54983_55149 = G__55182;
count__54984_55150 = G__55183;
i__54985_55151 = G__55184;
continue;
}
} else {
var G__55185 = cljs.core.next(seq__54979_55168__$1);
var G__55186 = null;
var G__55187 = (0);
var G__55188 = (0);
seq__54979_55148 = G__55185;
chunk__54983_55149 = G__55186;
count__54984_55150 = G__55187;
i__54985_55151 = G__55188;
continue;
}
}
} else {
}
}
break;
}


var G__55189 = cljs.core.next(seq__54931__$1);
var G__55190 = null;
var G__55191 = (0);
var G__55192 = (0);
seq__54931 = G__55189;
chunk__54933 = G__55190;
count__54934 = G__55191;
i__54935 = G__55192;
continue;
} else {
var G__55193 = cljs.core.next(seq__54931__$1);
var G__55194 = null;
var G__55195 = (0);
var G__55196 = (0);
seq__54931 = G__55193;
chunk__54933 = G__55194;
count__54934 = G__55195;
i__54935 = G__55196;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54993){
var map__54994 = p__54993;
var map__54994__$1 = (((((!((map__54994 == null))))?(((((map__54994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54994):map__54994);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54994__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54997){
var map__54998 = p__54997;
var map__54998__$1 = (((((!((map__54998 == null))))?(((((map__54998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54998):map__54998);
var _ = map__54998__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__55000,done,error){
var map__55001 = p__55000;
var map__55001__$1 = (((((!((map__55001 == null))))?(((((map__55001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55001):map__55001);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55001__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__55003,done,error){
var map__55004 = p__55003;
var map__55004__$1 = (((((!((map__55004 == null))))?(((((map__55004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55004):map__55004);
var msg = map__55004__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55004__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55004__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55004__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55006){
var map__55007 = p__55006;
var map__55007__$1 = (((((!((map__55007 == null))))?(((((map__55007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55007):map__55007);
var src = map__55007__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55007__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__55009 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__55009) : done.call(null,G__55009));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__55010){
var map__55011 = p__55010;
var map__55011__$1 = (((((!((map__55011 == null))))?(((((map__55011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55011):map__55011);
var msg__$1 = map__55011__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55011__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e55013){var ex = e55013;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__55014){
var map__55015 = p__55014;
var map__55015__$1 = (((((!((map__55015 == null))))?(((((map__55015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55015):map__55015);
var env = map__55015__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55015__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__55017){
var map__55018 = p__55017;
var map__55018__$1 = (((((!((map__55018 == null))))?(((((map__55018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55018):map__55018);
var msg = map__55018__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55018__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__55020){
var map__55021 = p__55020;
var map__55021__$1 = (((((!((map__55021 == null))))?(((((map__55021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55021):map__55021);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__55025){
var map__55026 = p__55025;
var map__55026__$1 = (((((!((map__55026 == null))))?(((((map__55026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55026):map__55026);
var svc = map__55026__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55026__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
