goog.provide('taoensso.tufte.stats');

/**
* @constructor
 * @implements {cljs.core.ICounted}
*/
taoensso.tufte.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.tufte.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedLongs.
 */
taoensso.tufte.stats.__GT_SortedLongs = (function taoensso$tufte$stats$__GT_SortedLongs(a){
return (new taoensso.tufte.stats.SortedLongs(a));
});

taoensso.tufte.stats.sorted_longs_QMARK_ = (function taoensso$tufte$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedLongs);
});
taoensso.tufte.stats.sort_longs = (function taoensso$tufte$stats$sort_longs(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
return longs;
} else {
var a = ((cljs.core.array_QMARK_(longs))?longs:cljs.core.to_array(longs));
goog.array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max]
 */
taoensso.tufte.stats.long_percentiles = (function taoensso$tufte$stats$long_percentiles(longs){
var a = taoensso.tufte.stats.sort_longs(longs).a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[Math.round((0.25 * max_idx))]),(a[Math.round((0.5 * max_idx))]),(a[Math.round((0.75 * max_idx))]),(a[Math.round((0.9 * max_idx))]),(a[Math.round((0.95 * max_idx))]),(a[Math.round((0.99 * max_idx))]),(a[max_idx])], null);
}
});

/**
* @constructor
*/
taoensso.tufte.stats.MinMax = (function (vmin,vmax){
this.vmin = vmin;
this.vmax = vmax;
});

(taoensso.tufte.stats.MinMax.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vmin","vmin",2087078343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vmax","vmax",205317983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.stats.MinMax.cljs$lang$type = true);

(taoensso.tufte.stats.MinMax.cljs$lang$ctorStr = "taoensso.tufte.stats/MinMax");

(taoensso.tufte.stats.MinMax.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.tufte.stats/MinMax");
}));

/**
 * Positional factory function for taoensso.tufte.stats/MinMax.
 */
taoensso.tufte.stats.__GT_MinMax = (function taoensso$tufte$stats$__GT_MinMax(vmin,vmax){
return (new taoensso.tufte.stats.MinMax(vmin,vmax));
});

/**
 * Returns ?[<min> <max>]
 */
taoensso.tufte.stats.min_max = (function taoensso$tufte$stats$min_max(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
var a = longs.a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[max_idx])], null);
}
} else {
if((cljs.core.count(longs) === (0))){
return null;
} else {
var vec__89495 = longs;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89495,(0),null);
var min_max = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var vmin = acc.vmin;
var vmax = acc.vmax;
if((in$ > vmax)){
return (new taoensso.tufte.stats.MinMax(vmin,in$));
} else {
if((in$ < vmin)){
return (new taoensso.tufte.stats.MinMax(in$,vmin));
} else {
return acc;
}
}
}),(new taoensso.tufte.stats.MinMax(v1,v1)),longs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_max.vmin,min_max.vmax], null);
}
}
});
/**
 * Given a collection of longs, returns map with keys:
 *   #{:n :min :max :sum :mean :mad-sum :mad :p25 :p50 :p75 :p90 :p95 :p99}, or nil
 *   if collection is empty.
 */
taoensso.tufte.stats.stats = (function taoensso$tufte$stats$stats(longs){
if(cljs.core.truth_(longs)){
var sorted_longs = taoensso.tufte.stats.sort_longs(longs);
var a = sorted_longs.a;
var n = a.length;
if((n === (0))){
return null;
} else {
var sum = (function (){var a__4610__auto__ = a;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var acc = (0);
while(true){
if((i < l__4611__auto__)){
var G__89611 = (i + (1));
var G__89612 = (acc + (a[i]));
i = G__89611;
acc = G__89612;
continue;
} else {
return acc;
}
break;
}
})();
var mean = (sum / n);
var mad_sum = (function (){var a__4610__auto__ = a;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var acc = 0.0;
while(true){
if((i < l__4611__auto__)){
var G__89613 = (i + (1));
var G__89614 = (acc + Math.abs(((a[i]) - mean)));
i = G__89613;
acc = G__89614;
continue;
} else {
return acc;
}
break;
}
})();
var mad = (mad_sum / n);
var vec__89498 = taoensso.tufte.stats.long_percentiles(sorted_longs);
var vmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(6),null);
var vmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89498,(7),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[vmin,mean,p75,mad_sum,p99,n,p25,p90,vmax,mad,p50,sum,p95]);
}
} else {
return null;
}
});
/**
 * `(merge-stats (stats c0) (stats c1))` is a basic approximation of `(stats (into c0 c1)))`.
 */
taoensso.tufte.stats.merge_stats = (function taoensso$tufte$stats$merge_stats(m0,m1){
if(cljs.core.truth_(m0)){
if(cljs.core.truth_(m1)){
var _ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m0 :n)"))})());
var ___$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m1 :n)"))})());
var map__89505 = m0;
var map__89505__$1 = (((((!((map__89505 == null))))?(((((map__89505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89505):map__89505);
var p99_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p90_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"max","max",61366548));
var p25_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var n0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p75_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var p95_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var mad_sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var min0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89505__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var map__89506 = m1;
var map__89506__$1 = (((((!((map__89506 == null))))?(((((map__89506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89506):map__89506);
var p95_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"n","n",562130025));
var max1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"max","max",61366548));
var mad_sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p75_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var min1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var p99_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var p25_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89506__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var ___$2 = (((n0 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n0)"))})());
var ___$3 = (((n1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n1)"))})());
var n2 = (n1 + n0);
var n0_ratio = (n0 / n2);
var n1_ratio = (n1 / n2);
var sum2 = (sum0 + sum1);
var mean2 = (sum2 / n2);
var min2 = (((min0 < min1))?min0:min1);
var max2 = (((max0 > max1))?max0:max1);
var mad_sum2 = (mad_sum0 + mad_sum1);
var p25_2 = Math.round(((n0_ratio * p25_0) + (n1_ratio * p25_1)));
var p50_2 = Math.round(((n0_ratio * p50_0) + (n1_ratio * p50_1)));
var p75_2 = Math.round(((n0_ratio * p75_0) + (n1_ratio * p75_1)));
var p90_2 = Math.round(((n0_ratio * p90_0) + (n1_ratio * p90_1)));
var p95_2 = Math.round(((n0_ratio * p95_0) + (n1_ratio * p95_1)));
var p99_2 = Math.round(((n0_ratio * p99_0) + (n1_ratio * p99_1)));
var mad2 = (mad_sum2 / n2);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[min2,mean2,p75_2,mad_sum2,p99_2,n2,p25_2,p90_2,max2,mad2,p50_2,sum2,p95_2]);
} else {
return m0;
}
} else {
return m1;
}
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((n / d) * 100.0))),"%"].join('');
});
var round2_89615 = taoensso.encore.round2;
taoensso.tufte.stats.fmt = (function taoensso$tufte$stats$fmt(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__89510 = (ns / 6.0E10);
return (round2_89615.cljs$core$IFn$_invoke$arity$1 ? round2_89615.cljs$core$IFn$_invoke$arity$1(G__89510) : round2_89615.call(null,G__89510));
})()),"m "].join('');
} else {
if((ns >= 1.0E9)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__89512 = (ns / 1.0E9);
return (round2_89615.cljs$core$IFn$_invoke$arity$1 ? round2_89615.cljs$core$IFn$_invoke$arity$1(G__89512) : round2_89615.call(null,G__89512));
})()),"s "].join('');
} else {
if((ns >= 1000000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__89514 = (ns / 1000000.0);
return (round2_89615.cljs$core$IFn$_invoke$arity$1 ? round2_89615.cljs$core$IFn$_invoke$arity$1(G__89514) : round2_89615.call(null,G__89514));
})()),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__89516 = (ns / 1000.0);
return (round2_89615.cljs$core$IFn$_invoke$arity$1 ? round2_89615.cljs$core$IFn$_invoke$arity$1(G__89516) : round2_89615.call(null,G__89516));
})()),"\u03BCs"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((round2_89615.cljs$core$IFn$_invoke$arity$1 ? round2_89615.cljs$core$IFn$_invoke$arity$1(ns) : round2_89615.call(null,ns))),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.fmt_comma = (function taoensso$tufte$stats$fmt_comma(n){
return [(((n < (0)))?"-":null),clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),"",cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(n)))))))].join('');
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(stats,p__89517){
var map__89518 = p__89517;
var map__89518__$1 = (((((!((map__89518 == null))))?(((((map__89518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89518):map__89518);
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89518__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(stats)){
return cljs.core.reduce_kv((function (acc,k,v){
var c = cljs.core.count((format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(k) : format_id_fn.call(null,k)));
if((c > acc)){
return c;
} else {
return acc;
}
}),(9),stats);
} else {
return null;
}
});
/**
 * Returns a formatted table string for given `{<id> <stats>}` map.
 *   Assumes nanosecond clock, stats based on profiling id'd nanosecond times.
 */
taoensso.tufte.stats.format_stats = (function taoensso$tufte$stats$format_stats(clock_total,id_stats,p__89520){
var map__89521 = p__89520;
var map__89521__$1 = (((((!((map__89521 == null))))?(((((map__89521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89521):map__89521);
var opts = map__89521__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89521__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89521__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"sum","sum",136986814));
}));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89521__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89521__$1,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373));
if(cljs.core.truth_(id_stats)){
taoensso.truss.impl.revery_QMARK_((function (__in){
var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.all_format_columns) : taoensso.truss.impl.set_STAR_.call(null,taoensso.tufte.stats.all_format_columns)),x);
})(__in)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e89523){if((e89523 instanceof Error)){
var e = e89523;
return e;
} else {
throw e89523;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte.stats",276,"([:el all-format-columns] __in)",__in,e,null);
}
}),columns);

var clock_total__$1 = cljs.core.long$(clock_total);
var accounted_total = cljs.core.reduce_kv((function (acc,_id,s){
return (acc + cljs.core.long$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"sum","sum",136986814))));
}),(0),id_stats);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__89524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__89524) : sort_fn.call(null,G__89524));
}),taoensso.encore.rcompare,cljs.core.keys(id_stats));
var max_id_width__$1 = (function (){var or__4126__auto__ = max_id_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width(id_stats,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Total",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"pId",new cljs.core.Keyword(null,"min-width","min-width",1926193728),max_id_width__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"MAD",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1("");
var append_col = (function (column,s){
var map__89525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,column);
var map__89525__$1 = (((((!((map__89525 == null))))?(((((map__89525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89525):map__89525);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89525__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(10));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89525__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__89528 = align;
var G__89528__$1 = (((G__89528 instanceof cljs.core.Keyword))?G__89528.fqn:null);
switch (G__89528__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89528__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)));
});
var seq__89529_89617 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),columns));
var chunk__89530_89618 = null;
var count__89531_89619 = (0);
var i__89532_89620 = (0);
while(true){
if((i__89532_89620 < count__89531_89619)){
var column_89621 = chunk__89530_89618.cljs$core$IIndexed$_nth$arity$2(null,i__89532_89620);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_89621)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_89621,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_89621,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__89622 = seq__89529_89617;
var G__89623 = chunk__89530_89618;
var G__89624 = count__89531_89619;
var G__89625 = (i__89532_89620 + (1));
seq__89529_89617 = G__89622;
chunk__89530_89618 = G__89623;
count__89531_89619 = G__89624;
i__89532_89620 = G__89625;
continue;
} else {
var temp__5735__auto___89626 = cljs.core.seq(seq__89529_89617);
if(temp__5735__auto___89626){
var seq__89529_89627__$1 = temp__5735__auto___89626;
if(cljs.core.chunked_seq_QMARK_(seq__89529_89627__$1)){
var c__4556__auto___89628 = cljs.core.chunk_first(seq__89529_89627__$1);
var G__89629 = cljs.core.chunk_rest(seq__89529_89627__$1);
var G__89630 = c__4556__auto___89628;
var G__89631 = cljs.core.count(c__4556__auto___89628);
var G__89632 = (0);
seq__89529_89617 = G__89629;
chunk__89530_89618 = G__89630;
count__89531_89619 = G__89631;
i__89532_89620 = G__89632;
continue;
} else {
var column_89633 = cljs.core.first(seq__89529_89627__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_89633)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_89633,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_89633,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__89634 = cljs.core.next(seq__89529_89627__$1);
var G__89635 = null;
var G__89636 = (0);
var G__89637 = (0);
seq__89529_89617 = G__89634;
chunk__89530_89618 = G__89635;
count__89531_89619 = G__89636;
i__89532_89620 = G__89637;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n\n");

var seq__89533_89638 = cljs.core.seq(sorted_ids);
var chunk__89534_89639 = null;
var count__89535_89640 = (0);
var i__89536_89641 = (0);
while(true){
if((i__89536_89641 < count__89535_89640)){
var id_89642 = chunk__89534_89639.cljs$core$IIndexed$_nth$arity$2(null,i__89536_89641);
var s_89643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_89642);
var sum_89644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_89645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_89642) : format_id_fn.call(null,id_89642)));

var seq__89579_89646 = cljs.core.seq(columns);
var chunk__89580_89647 = null;
var count__89581_89648 = (0);
var i__89582_89649 = (0);
while(true){
if((i__89582_89649 < count__89581_89648)){
var column_89650 = chunk__89580_89647.cljs$core$IIndexed$_nth$arity$2(null,i__89582_89649);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89585_89651 = column_89650;
var G__89585_89652__$1 = (((G__89585_89651 instanceof cljs.core.Keyword))?G__89585_89651.fqn:null);
switch (G__89585_89652__$1) {
case "n-calls":
append_col(column_89650,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_89650,taoensso.tufte.stats.fmt(mean_89645));

break;
case "mad":
append_col(column_89650,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_89645)].join(''));

break;
case "total":
append_col(column_89650,taoensso.tufte.stats.perc(sum_89644,clock_total__$1));

break;
case "clock":
append_col(column_89650,taoensso.tufte.stats.fmt(sum_89644));

break;
default:
append_col(column_89650,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,column_89650)));

}


var G__89654 = seq__89579_89646;
var G__89655 = chunk__89580_89647;
var G__89656 = count__89581_89648;
var G__89657 = (i__89582_89649 + (1));
seq__89579_89646 = G__89654;
chunk__89580_89647 = G__89655;
count__89581_89648 = G__89656;
i__89582_89649 = G__89657;
continue;
} else {
var temp__5735__auto___89658 = cljs.core.seq(seq__89579_89646);
if(temp__5735__auto___89658){
var seq__89579_89659__$1 = temp__5735__auto___89658;
if(cljs.core.chunked_seq_QMARK_(seq__89579_89659__$1)){
var c__4556__auto___89660 = cljs.core.chunk_first(seq__89579_89659__$1);
var G__89661 = cljs.core.chunk_rest(seq__89579_89659__$1);
var G__89662 = c__4556__auto___89660;
var G__89663 = cljs.core.count(c__4556__auto___89660);
var G__89664 = (0);
seq__89579_89646 = G__89661;
chunk__89580_89647 = G__89662;
count__89581_89648 = G__89663;
i__89582_89649 = G__89664;
continue;
} else {
var column_89665 = cljs.core.first(seq__89579_89659__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89586_89666 = column_89665;
var G__89586_89667__$1 = (((G__89586_89666 instanceof cljs.core.Keyword))?G__89586_89666.fqn:null);
switch (G__89586_89667__$1) {
case "n-calls":
append_col(column_89665,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_89665,taoensso.tufte.stats.fmt(mean_89645));

break;
case "mad":
append_col(column_89665,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_89645)].join(''));

break;
case "total":
append_col(column_89665,taoensso.tufte.stats.perc(sum_89644,clock_total__$1));

break;
case "clock":
append_col(column_89665,taoensso.tufte.stats.fmt(sum_89644));

break;
default:
append_col(column_89665,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89643,column_89665)));

}


var G__89669 = cljs.core.next(seq__89579_89659__$1);
var G__89670 = null;
var G__89671 = (0);
var G__89672 = (0);
seq__89579_89646 = G__89669;
chunk__89580_89647 = G__89670;
count__89581_89648 = G__89671;
i__89582_89649 = G__89672;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__89673 = seq__89533_89638;
var G__89674 = chunk__89534_89639;
var G__89675 = count__89535_89640;
var G__89676 = (i__89536_89641 + (1));
seq__89533_89638 = G__89673;
chunk__89534_89639 = G__89674;
count__89535_89640 = G__89675;
i__89536_89641 = G__89676;
continue;
} else {
var temp__5735__auto___89677 = cljs.core.seq(seq__89533_89638);
if(temp__5735__auto___89677){
var seq__89533_89678__$1 = temp__5735__auto___89677;
if(cljs.core.chunked_seq_QMARK_(seq__89533_89678__$1)){
var c__4556__auto___89679 = cljs.core.chunk_first(seq__89533_89678__$1);
var G__89680 = cljs.core.chunk_rest(seq__89533_89678__$1);
var G__89681 = c__4556__auto___89679;
var G__89682 = cljs.core.count(c__4556__auto___89679);
var G__89683 = (0);
seq__89533_89638 = G__89680;
chunk__89534_89639 = G__89681;
count__89535_89640 = G__89682;
i__89536_89641 = G__89683;
continue;
} else {
var id_89684 = cljs.core.first(seq__89533_89678__$1);
var s_89685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_89684);
var sum_89686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_89687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_89684) : format_id_fn.call(null,id_89684)));

var seq__89587_89688 = cljs.core.seq(columns);
var chunk__89588_89689 = null;
var count__89589_89690 = (0);
var i__89590_89691 = (0);
while(true){
if((i__89590_89691 < count__89589_89690)){
var column_89692 = chunk__89588_89689.cljs$core$IIndexed$_nth$arity$2(null,i__89590_89691);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89593_89693 = column_89692;
var G__89593_89694__$1 = (((G__89593_89693 instanceof cljs.core.Keyword))?G__89593_89693.fqn:null);
switch (G__89593_89694__$1) {
case "n-calls":
append_col(column_89692,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_89692,taoensso.tufte.stats.fmt(mean_89687));

break;
case "mad":
append_col(column_89692,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_89687)].join(''));

break;
case "total":
append_col(column_89692,taoensso.tufte.stats.perc(sum_89686,clock_total__$1));

break;
case "clock":
append_col(column_89692,taoensso.tufte.stats.fmt(sum_89686));

break;
default:
append_col(column_89692,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,column_89692)));

}


var G__89696 = seq__89587_89688;
var G__89697 = chunk__89588_89689;
var G__89698 = count__89589_89690;
var G__89699 = (i__89590_89691 + (1));
seq__89587_89688 = G__89696;
chunk__89588_89689 = G__89697;
count__89589_89690 = G__89698;
i__89590_89691 = G__89699;
continue;
} else {
var temp__5735__auto___89700__$1 = cljs.core.seq(seq__89587_89688);
if(temp__5735__auto___89700__$1){
var seq__89587_89701__$1 = temp__5735__auto___89700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__89587_89701__$1)){
var c__4556__auto___89702 = cljs.core.chunk_first(seq__89587_89701__$1);
var G__89703 = cljs.core.chunk_rest(seq__89587_89701__$1);
var G__89704 = c__4556__auto___89702;
var G__89705 = cljs.core.count(c__4556__auto___89702);
var G__89706 = (0);
seq__89587_89688 = G__89703;
chunk__89588_89689 = G__89704;
count__89589_89690 = G__89705;
i__89590_89691 = G__89706;
continue;
} else {
var column_89707 = cljs.core.first(seq__89587_89701__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89594_89708 = column_89707;
var G__89594_89709__$1 = (((G__89594_89708 instanceof cljs.core.Keyword))?G__89594_89708.fqn:null);
switch (G__89594_89709__$1) {
case "n-calls":
append_col(column_89707,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_89707,taoensso.tufte.stats.fmt(mean_89687));

break;
case "mad":
append_col(column_89707,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_89687)].join(''));

break;
case "total":
append_col(column_89707,taoensso.tufte.stats.perc(sum_89686,clock_total__$1));

break;
case "clock":
append_col(column_89707,taoensso.tufte.stats.fmt(sum_89686));

break;
default:
append_col(column_89707,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_89685,column_89707)));

}


var G__89711 = cljs.core.next(seq__89587_89701__$1);
var G__89712 = null;
var G__89713 = (0);
var G__89714 = (0);
seq__89587_89688 = G__89711;
chunk__89588_89689 = G__89712;
count__89589_89690 = G__89713;
i__89590_89691 = G__89714;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__89715 = cljs.core.next(seq__89533_89678__$1);
var G__89716 = null;
var G__89717 = (0);
var G__89718 = (0);
seq__89533_89638 = G__89715;
chunk__89534_89639 = G__89716;
count__89535_89640 = G__89717;
i__89536_89641 = G__89718;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Accounted");

var seq__89595_89719 = cljs.core.seq(columns);
var chunk__89596_89720 = null;
var count__89597_89721 = (0);
var i__89598_89722 = (0);
while(true){
if((i__89598_89722 < count__89597_89721)){
var column_89723 = chunk__89596_89720.cljs$core$IIndexed$_nth$arity$2(null,i__89598_89722);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89601_89724 = column_89723;
var G__89601_89725__$1 = (((G__89601_89724 instanceof cljs.core.Keyword))?G__89601_89724.fqn:null);
switch (G__89601_89725__$1) {
case "total":
append_col(column_89723,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_89723,taoensso.tufte.stats.fmt(accounted_total));

break;
default:
append_col(column_89723,"");

}


var G__89727 = seq__89595_89719;
var G__89728 = chunk__89596_89720;
var G__89729 = count__89597_89721;
var G__89730 = (i__89598_89722 + (1));
seq__89595_89719 = G__89727;
chunk__89596_89720 = G__89728;
count__89597_89721 = G__89729;
i__89598_89722 = G__89730;
continue;
} else {
var temp__5735__auto___89731 = cljs.core.seq(seq__89595_89719);
if(temp__5735__auto___89731){
var seq__89595_89732__$1 = temp__5735__auto___89731;
if(cljs.core.chunked_seq_QMARK_(seq__89595_89732__$1)){
var c__4556__auto___89733 = cljs.core.chunk_first(seq__89595_89732__$1);
var G__89734 = cljs.core.chunk_rest(seq__89595_89732__$1);
var G__89735 = c__4556__auto___89733;
var G__89736 = cljs.core.count(c__4556__auto___89733);
var G__89737 = (0);
seq__89595_89719 = G__89734;
chunk__89596_89720 = G__89735;
count__89597_89721 = G__89736;
i__89598_89722 = G__89737;
continue;
} else {
var column_89738 = cljs.core.first(seq__89595_89732__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89602_89739 = column_89738;
var G__89602_89740__$1 = (((G__89602_89739 instanceof cljs.core.Keyword))?G__89602_89739.fqn:null);
switch (G__89602_89740__$1) {
case "total":
append_col(column_89738,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_89738,taoensso.tufte.stats.fmt(accounted_total));

break;
default:
append_col(column_89738,"");

}


var G__89742 = cljs.core.next(seq__89595_89732__$1);
var G__89743 = null;
var G__89744 = (0);
var G__89745 = (0);
seq__89595_89719 = G__89742;
chunk__89596_89720 = G__89743;
count__89597_89721 = G__89744;
i__89598_89722 = G__89745;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Clock");

var seq__89603_89746 = cljs.core.seq(columns);
var chunk__89604_89747 = null;
var count__89605_89748 = (0);
var i__89606_89749 = (0);
while(true){
if((i__89606_89749 < count__89605_89748)){
var column_89750 = chunk__89604_89747.cljs$core$IIndexed$_nth$arity$2(null,i__89606_89749);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89609_89751 = column_89750;
var G__89609_89752__$1 = (((G__89609_89751 instanceof cljs.core.Keyword))?G__89609_89751.fqn:null);
switch (G__89609_89752__$1) {
case "total":
append_col(column_89750,"100%");

break;
case "clock":
append_col(column_89750,taoensso.tufte.stats.fmt(clock_total__$1));

break;
default:
append_col(column_89750,"");

}


var G__89754 = seq__89603_89746;
var G__89755 = chunk__89604_89747;
var G__89756 = count__89605_89748;
var G__89757 = (i__89606_89749 + (1));
seq__89603_89746 = G__89754;
chunk__89604_89747 = G__89755;
count__89605_89748 = G__89756;
i__89606_89749 = G__89757;
continue;
} else {
var temp__5735__auto___89758 = cljs.core.seq(seq__89603_89746);
if(temp__5735__auto___89758){
var seq__89603_89759__$1 = temp__5735__auto___89758;
if(cljs.core.chunked_seq_QMARK_(seq__89603_89759__$1)){
var c__4556__auto___89760 = cljs.core.chunk_first(seq__89603_89759__$1);
var G__89761 = cljs.core.chunk_rest(seq__89603_89759__$1);
var G__89762 = c__4556__auto___89760;
var G__89763 = cljs.core.count(c__4556__auto___89760);
var G__89764 = (0);
seq__89603_89746 = G__89761;
chunk__89604_89747 = G__89762;
count__89605_89748 = G__89763;
i__89606_89749 = G__89764;
continue;
} else {
var column_89765 = cljs.core.first(seq__89603_89759__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__89610_89766 = column_89765;
var G__89610_89767__$1 = (((G__89610_89766 instanceof cljs.core.Keyword))?G__89610_89766.fqn:null);
switch (G__89610_89767__$1) {
case "total":
append_col(column_89765,"100%");

break;
case "clock":
append_col(column_89765,taoensso.tufte.stats.fmt(clock_total__$1));

break;
default:
append_col(column_89765,"");

}


var G__89769 = cljs.core.next(seq__89603_89759__$1);
var G__89770 = null;
var G__89771 = (0);
var G__89772 = (0);
seq__89603_89746 = G__89769;
chunk__89604_89747 = G__89770;
count__89605_89748 = G__89771;
i__89606_89749 = G__89772;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});

//# sourceMappingURL=taoensso.tufte.stats.js.map
