goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__93887){
var map__93888 = p__93887;
var map__93888__$1 = (((((!((map__93888 == null))))?(((((map__93888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93888):map__93888);
var m = map__93888__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__93890_93991 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__93891_93992 = null;
var count__93892_93993 = (0);
var i__93893_93994 = (0);
while(true){
if((i__93893_93994 < count__93892_93993)){
var f_93995 = chunk__93891_93992.cljs$core$IIndexed$_nth$arity$2(null,i__93893_93994);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_93995], 0));


var G__93996 = seq__93890_93991;
var G__93997 = chunk__93891_93992;
var G__93998 = count__93892_93993;
var G__93999 = (i__93893_93994 + (1));
seq__93890_93991 = G__93996;
chunk__93891_93992 = G__93997;
count__93892_93993 = G__93998;
i__93893_93994 = G__93999;
continue;
} else {
var temp__5735__auto___94000 = cljs.core.seq(seq__93890_93991);
if(temp__5735__auto___94000){
var seq__93890_94001__$1 = temp__5735__auto___94000;
if(cljs.core.chunked_seq_QMARK_(seq__93890_94001__$1)){
var c__4556__auto___94002 = cljs.core.chunk_first(seq__93890_94001__$1);
var G__94003 = cljs.core.chunk_rest(seq__93890_94001__$1);
var G__94004 = c__4556__auto___94002;
var G__94005 = cljs.core.count(c__4556__auto___94002);
var G__94006 = (0);
seq__93890_93991 = G__94003;
chunk__93891_93992 = G__94004;
count__93892_93993 = G__94005;
i__93893_93994 = G__94006;
continue;
} else {
var f_94007 = cljs.core.first(seq__93890_94001__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_94007], 0));


var G__94008 = cljs.core.next(seq__93890_94001__$1);
var G__94009 = null;
var G__94010 = (0);
var G__94011 = (0);
seq__93890_93991 = G__94008;
chunk__93891_93992 = G__94009;
count__93892_93993 = G__94010;
i__93893_93994 = G__94011;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_94012 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_94012], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_94012)))?cljs.core.second(arglists_94012):arglists_94012)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__93894_94013 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__93895_94014 = null;
var count__93896_94015 = (0);
var i__93897_94016 = (0);
while(true){
if((i__93897_94016 < count__93896_94015)){
var vec__93908_94017 = chunk__93895_94014.cljs$core$IIndexed$_nth$arity$2(null,i__93897_94016);
var name_94018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93908_94017,(0),null);
var map__93911_94019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93908_94017,(1),null);
var map__93911_94020__$1 = (((((!((map__93911_94019 == null))))?(((((map__93911_94019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93911_94019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93911_94019):map__93911_94019);
var doc_94021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93911_94020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_94022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93911_94020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_94018], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_94022], 0));

if(cljs.core.truth_(doc_94021)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_94021], 0));
} else {
}


var G__94023 = seq__93894_94013;
var G__94024 = chunk__93895_94014;
var G__94025 = count__93896_94015;
var G__94026 = (i__93897_94016 + (1));
seq__93894_94013 = G__94023;
chunk__93895_94014 = G__94024;
count__93896_94015 = G__94025;
i__93897_94016 = G__94026;
continue;
} else {
var temp__5735__auto___94027 = cljs.core.seq(seq__93894_94013);
if(temp__5735__auto___94027){
var seq__93894_94028__$1 = temp__5735__auto___94027;
if(cljs.core.chunked_seq_QMARK_(seq__93894_94028__$1)){
var c__4556__auto___94029 = cljs.core.chunk_first(seq__93894_94028__$1);
var G__94030 = cljs.core.chunk_rest(seq__93894_94028__$1);
var G__94031 = c__4556__auto___94029;
var G__94032 = cljs.core.count(c__4556__auto___94029);
var G__94033 = (0);
seq__93894_94013 = G__94030;
chunk__93895_94014 = G__94031;
count__93896_94015 = G__94032;
i__93897_94016 = G__94033;
continue;
} else {
var vec__93913_94034 = cljs.core.first(seq__93894_94028__$1);
var name_94035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93913_94034,(0),null);
var map__93916_94036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93913_94034,(1),null);
var map__93916_94037__$1 = (((((!((map__93916_94036 == null))))?(((((map__93916_94036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93916_94036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93916_94036):map__93916_94036);
var doc_94038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93916_94037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_94039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93916_94037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_94035], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_94039], 0));

if(cljs.core.truth_(doc_94038)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_94038], 0));
} else {
}


var G__94040 = cljs.core.next(seq__93894_94028__$1);
var G__94041 = null;
var G__94042 = (0);
var G__94043 = (0);
seq__93894_94013 = G__94040;
chunk__93895_94014 = G__94041;
count__93896_94015 = G__94042;
i__93897_94016 = G__94043;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__93918 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__93919 = null;
var count__93920 = (0);
var i__93921 = (0);
while(true){
if((i__93921 < count__93920)){
var role = chunk__93919.cljs$core$IIndexed$_nth$arity$2(null,i__93921);
var temp__5735__auto___94044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___94044__$1)){
var spec_94045 = temp__5735__auto___94044__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_94045)], 0));
} else {
}


var G__94046 = seq__93918;
var G__94047 = chunk__93919;
var G__94048 = count__93920;
var G__94049 = (i__93921 + (1));
seq__93918 = G__94046;
chunk__93919 = G__94047;
count__93920 = G__94048;
i__93921 = G__94049;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__93918);
if(temp__5735__auto____$1){
var seq__93918__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__93918__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__93918__$1);
var G__94050 = cljs.core.chunk_rest(seq__93918__$1);
var G__94051 = c__4556__auto__;
var G__94052 = cljs.core.count(c__4556__auto__);
var G__94053 = (0);
seq__93918 = G__94050;
chunk__93919 = G__94051;
count__93920 = G__94052;
i__93921 = G__94053;
continue;
} else {
var role = cljs.core.first(seq__93918__$1);
var temp__5735__auto___94054__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___94054__$2)){
var spec_94055 = temp__5735__auto___94054__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_94055)], 0));
} else {
}


var G__94056 = cljs.core.next(seq__93918__$1);
var G__94057 = null;
var G__94058 = (0);
var G__94059 = (0);
seq__93918 = G__94056;
chunk__93919 = G__94057;
count__93920 = G__94058;
i__93921 = G__94059;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__94060 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__94061 = cljs.core.ex_cause(t);
via = G__94060;
t = G__94061;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__93924 = datafied_throwable;
var map__93924__$1 = (((((!((map__93924 == null))))?(((((map__93924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93924):map__93924);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93924__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93924__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93924__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__93925 = cljs.core.last(via);
var map__93925__$1 = (((((!((map__93925 == null))))?(((((map__93925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93925):map__93925);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93925__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93925__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93925__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__93926 = data;
var map__93926__$1 = (((((!((map__93926 == null))))?(((((map__93926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93926):map__93926);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93926__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93926__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93926__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__93927 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__93927__$1 = (((((!((map__93927 == null))))?(((((map__93927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93927):map__93927);
var top_data = map__93927__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93927__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__93932 = phase;
var G__93932__$1 = (((G__93932 instanceof cljs.core.Keyword))?G__93932.fqn:null);
switch (G__93932__$1) {
case "read-source":
var map__93933 = data;
var map__93933__$1 = (((((!((map__93933 == null))))?(((((map__93933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93933):map__93933);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93933__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93933__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__93935 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__93935__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93935,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__93935);
var G__93935__$2 = (cljs.core.truth_((function (){var fexpr__93936 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__93936.cljs$core$IFn$_invoke$arity$1 ? fexpr__93936.cljs$core$IFn$_invoke$arity$1(source) : fexpr__93936.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__93935__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__93935__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93935__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__93935__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__93937 = top_data;
var G__93937__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93937,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__93937);
var G__93937__$2 = (cljs.core.truth_((function (){var fexpr__93938 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__93938.cljs$core$IFn$_invoke$arity$1 ? fexpr__93938.cljs$core$IFn$_invoke$arity$1(source) : fexpr__93938.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__93937__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__93937__$1);
var G__93937__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93937__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__93937__$2);
var G__93937__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93937__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__93937__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93937__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__93937__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__93939 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93939,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93939,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93939,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93939,(3),null);
var G__93942 = top_data;
var G__93942__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93942,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__93942);
var G__93942__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__93942__$1);
var G__93942__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93942__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__93942__$2);
var G__93942__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93942__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__93942__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93942__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__93942__$4;
}

break;
case "execution":
var vec__93943 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93943,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93943,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93943,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93943,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__93923_SHARP_){
var or__4126__auto__ = (p1__93923_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__93947 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__93947.cljs$core$IFn$_invoke$arity$1 ? fexpr__93947.cljs$core$IFn$_invoke$arity$1(p1__93923_SHARP_) : fexpr__93947.call(null,p1__93923_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__93948 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__93948__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93948,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__93948);
var G__93948__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93948__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__93948__$1);
var G__93948__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93948__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__93948__$2);
var G__93948__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93948__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__93948__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93948__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__93948__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93932__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__93951){
var map__93952 = p__93951;
var map__93952__$1 = (((((!((map__93952 == null))))?(((((map__93952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93952):map__93952);
var triage_data = map__93952__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93952__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__93954 = phase;
var G__93954__$1 = (((G__93954 instanceof cljs.core.Keyword))?G__93954.fqn:null);
switch (G__93954__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__93955 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__93956 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__93957 = loc;
var G__93958 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__93959_94064 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__93960_94065 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__93961_94066 = true;
var _STAR_print_fn_STAR__temp_val__93962_94067 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__93961_94066);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__93962_94067);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__93949_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__93949_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__93960_94065);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__93959_94064);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__93955,G__93956,G__93957,G__93958) : format.call(null,G__93955,G__93956,G__93957,G__93958));

break;
case "macroexpansion":
var G__93963 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__93964 = cause_type;
var G__93965 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__93966 = loc;
var G__93967 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__93963,G__93964,G__93965,G__93966,G__93967) : format.call(null,G__93963,G__93964,G__93965,G__93966,G__93967));

break;
case "compile-syntax-check":
var G__93968 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__93969 = cause_type;
var G__93970 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__93971 = loc;
var G__93972 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__93968,G__93969,G__93970,G__93971,G__93972) : format.call(null,G__93968,G__93969,G__93970,G__93971,G__93972));

break;
case "compilation":
var G__93973 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__93974 = cause_type;
var G__93975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__93976 = loc;
var G__93977 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__93973,G__93974,G__93975,G__93976,G__93977) : format.call(null,G__93973,G__93974,G__93975,G__93976,G__93977));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__93978 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__93979 = symbol;
var G__93980 = loc;
var G__93981 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__93982_94068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__93983_94069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__93984_94070 = true;
var _STAR_print_fn_STAR__temp_val__93985_94071 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__93984_94070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__93985_94071);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__93950_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__93950_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__93983_94069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__93982_94068);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__93978,G__93979,G__93980,G__93981) : format.call(null,G__93978,G__93979,G__93980,G__93981));
} else {
var G__93986 = "Execution error%s at %s(%s).\n%s\n";
var G__93987 = cause_type;
var G__93988 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__93989 = loc;
var G__93990 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__93986,G__93987,G__93988,G__93989,G__93990) : format.call(null,G__93986,G__93987,G__93988,G__93989,G__93990));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93954__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
