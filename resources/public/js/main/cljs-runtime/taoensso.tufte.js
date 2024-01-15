goog.provide('taoensso.tufte');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(85),(0)], null));
taoensso.tufte.valid_run_level_QMARK_ = (function taoensso$tufte$valid_run_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__90305 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__90305.cljs$core$IFn$_invoke$arity$1 ? fexpr__90305.cljs$core$IFn$_invoke$arity$1(x) : fexpr__90305.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__90306 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__90306.cljs$core$IFn$_invoke$arity$1 ? fexpr__90306.cljs$core$IFn$_invoke$arity$1(x) : fexpr__90306.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_run_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_run_level = (function taoensso$tufte$valid_run_level(x){
var or__4126__auto__ = (function (){var fexpr__90308 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__90308.cljs$core$IFn$_invoke$arity$1 ? fexpr__90308.cljs$core$IFn$_invoke$arity$1(x) : fexpr__90308.call(null,x));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__4126__auto__ = (function (){var fexpr__90310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__90310.cljs$core$IFn$_invoke$arity$1 ? fexpr__90310.cljs$core$IFn$_invoke$arity$1(x) : fexpr__90310.call(null,x));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
/**
 * e/o #{0 1 2 3 4 5 6}
 */
taoensso.tufte._STAR_min_level_STAR_ = (2);
/**
 * Sets root binding of minimum profiling level, e/o #{0 1 2 3 4 5 6}.
 *  0 => Enable  all profiling.
 *  6 => Disable all profiling.
 */
taoensso.tufte.set_min_level_BANG_ = (function taoensso$tufte$set_min_level_BANG_(level){
taoensso.tufte.valid_min_level(level);

return (taoensso.tufte._STAR_min_level_STAR_ = level);
});
taoensso.tufte._compile_ns_filter = taoensso.encore.memoize_(taoensso.encore.compile_ns_filter);
/**
 * (fn [?ns] -> truthy).
 */
taoensso.tufte._STAR_ns_filter_STAR_ = taoensso.tufte._compile_ns_filter("*");
/**
 * Sets root binding of namespace filter.
 *   See `compile-ns-filter` docstring for details on `ns-pattern` arg.
 */
taoensso.tufte.set_ns_pattern_BANG_ = (function taoensso$tufte$set_ns_pattern_BANG_(ns_pattern){
var nsf_QMARK_ = taoensso.tufte._compile_ns_filter(ns_pattern);
return (taoensso.tufte._STAR_ns_filter_STAR_ = nsf_QMARK_);
});
/**
 * Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__90312 = arguments.length;
switch (G__90312) {
case 1:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core._STAR_ns_STAR_);
}));

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if((taoensso.tufte.valid_run_level(level) >= taoensso.tufte._STAR_min_level_STAR_)){
if(cljs.core.truth_(taoensso.tufte._STAR_ns_filter_STAR_.call(null,ns))){
return true;
} else {
return false;
}
} else {
return false;
}
}));

(taoensso.tufte.may_profile_QMARK_.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
taoensso.tufte.HandlerVal = (function (ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,__meta,__extmap,__hash){
this.ns_str = ns_str;
this.level = level;
this._QMARK_id = _QMARK_id;
this._QMARK_data = _QMARK_data;
this.pstats = pstats;
this.pstats_str_ = pstats_str_;
this._QMARK_file = _QMARK_file;
this._QMARK_line = _QMARK_line;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k90314,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__90318 = k90314;
var G__90318__$1 = (((G__90318 instanceof cljs.core.Keyword))?G__90318.fqn:null);
switch (G__90318__$1) {
case "ns-str":
return self__.ns_str;

break;
case "level":
return self__.level;

break;
case "?id":
return self__._QMARK_id;

break;
case "?data":
return self__._QMARK_data;

break;
case "pstats":
return self__.pstats;

break;
case "pstats-str_":
return self__.pstats_str_;

break;
case "?file":
return self__._QMARK_file;

break;
case "?line":
return self__._QMARK_line;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k90314,else__4383__auto__);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__90319){
var vec__90320 = p__90319;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90320,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90320,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line],null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__90313){
var self__ = this;
var G__90313__$1 = this;
return (new cljs.core.RecordIter((0),G__90313__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this90315,other90316){
var self__ = this;
var this90315__$1 = this;
return (((!((other90316 == null)))) && ((this90315__$1.constructor === other90316.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1.ns_str,other90316.ns_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1.level,other90316.level)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1._QMARK_id,other90316._QMARK_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1._QMARK_data,other90316._QMARK_data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1.pstats,other90316.pstats)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1.pstats_str_,other90316.pstats_str_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1._QMARK_file,other90316._QMARK_file)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1._QMARK_line,other90316._QMARK_line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90315__$1.__extmap,other90316.__extmap)));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"?file","?file",1533429675),null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"?line","?line",-631853385),null,new cljs.core.Keyword(null,"pstats","pstats",276614232),null,new cljs.core.Keyword(null,"?id","?id",-712098248),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__90313){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__90323 = cljs.core.keyword_identical_QMARK_;
var expr__90324 = k__4388__auto__;
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__90324)))){
return (new taoensso.tufte.HandlerVal(G__90313,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__90313,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?id","?id",-712098248),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"?id","?id",-712098248),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__90313,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?data","?data",-9471433),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"?data","?data",-9471433),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__90313,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__90313,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,G__90313,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?file","?file",1533429675),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"?file","?file",1533429675),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,G__90313,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__90323.cljs$core$IFn$_invoke$arity$2 ? pred__90323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?line","?line",-631853385),expr__90324) : pred__90323.call(null,new cljs.core.Keyword(null,"?line","?line",-631853385),expr__90324)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,G__90313,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__90313),null));
}
}
}
}
}
}
}
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"level","level",1290497552),self__.level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line,null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__90313){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,G__90313,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-str","ns-str",-422084972,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?data","?data",1631060094,null),new cljs.core.Symbol(null,"pstats","pstats",1917145759,null),new cljs.core.Symbol(null,"pstats-str_","pstats-str_",-735205348,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Symbol(null,"?line","?line",1008678142,null)], null);
}));

(taoensso.tufte.HandlerVal.cljs$lang$type = true);

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.tufte/HandlerVal",null,(1),null));
}));

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.tufte/HandlerVal");
}));

/**
 * Positional factory function for taoensso.tufte/HandlerVal.
 */
taoensso.tufte.__GT_HandlerVal = (function taoensso$tufte$__GT_HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line){
return (new taoensso.tufte.HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,null,null,null));
});

/**
 * Factory function for taoensso.tufte/HandlerVal, taking a map of keywords to field values.
 */
taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__90317){
var extmap__4419__auto__ = (function (){var G__90326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__90317,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], 0));
if(cljs.core.record_QMARK_(G__90317)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__90326);
} else {
return G__90326;
}
})();
return (new taoensso.tufte.HandlerVal(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"?id","?id",-712098248).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"pstats","pstats",276614232).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"?file","?file",1533429675).cljs$core$IFn$_invoke$arity$1(G__90317),new cljs.core.Keyword(null,"?line","?line",-631853385).cljs$core$IFn$_invoke$arity$1(G__90317),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * {<handler-id> <handler-fn>}
 */
taoensso.tufte.handlers_ = taoensso.tufte.impl.handlers_;
/**
 * Use this to register interest in stats output produced by `profile` calls.
 *   Each registered `handler-fn` will be called as:
 * 
 *  (handler-fn {:ns-str _ :level _ :?id _ :?data _ :pstats _ :pstats-str_ _})
 * 
 *   Map args:
 *  :ns-str      - Namespace string where `profile` call took place
 *  :level       - Level e/o #{0 1 2 3 4 5}, given in `(profile {:level _} ...)`
 *  :?id         - Optional group id,        given in `(profile {:id    _} ...)`
 *  :?data       - Optional arb data,        given in `(profile {:data  _} ...)`
 *  :pstats      - As in `(second (profiled ...))`. Derefable, mergeable.
 *  :pstats-str_ - `(delay (format-pstats pstats))
 * 
 *   Error handling (NB):
 *  Handler errors will be silently swallowed. Please `try`/`catch` and
 *  appropriately deal with (e.g. log) possible errors *within* `handler-fn`.
 * 
 *   Async/blocking:
 *  `handler-fn` should ideally be non-blocking, or reasonably cheap. Handler
 *   dispatch occurs through a 1-thread 1k-buffer dropping queue.
 * 
 *   Ns filtering:
 *  Provide an optional `ns-pattern` arg to only call handler for matching
 *  namespaces. See `compile-ns-filter` docstring for details on `ns-pattern`.
 * 
 *   Handler ideas:
 *  Save to a db, log, `put!` to an appropriate `core.async` channel, filter,
 *  aggregate, use for a realtime analytics dashboard, examine for outliers
 *  or unexpected output, ...
 */
taoensso.tufte.add_handler_BANG_ = (function taoensso$tufte$add_handler_BANG_(var_args){
var G__90328 = arguments.length;
switch (G__90328) {
case 2:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,handler_fn){
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,null,handler_fn);
}));

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = (((((ns_pattern == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*"))))?handler_fn:(function (){var nsf_QMARK_ = taoensso.tufte._compile_ns_filter(ns_pattern);
return (function (m){
if(cljs.core.truth_((function (){var G__90329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499));
return (nsf_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nsf_QMARK_.cljs$core$IFn$_invoke$arity$1(G__90329) : nsf_QMARK_.call(null,G__90329));
})())){
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(m) : handler_fn.call(null,m));
} else {
return null;
}
});
})());
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
}));

(taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
});
/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__90330){
var map__90331 = p__90330;
var map__90331__$1 = (((((!((map__90331 == null))))?(((((map__90331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90331):map__90331);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90331__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90331__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"basic-println","basic-println",-1128346249));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90331__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__90333){
var map__90334 = p__90333;
var map__90334__$1 = (((((!((map__90334 == null))))?(((((map__90334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90334):map__90334);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(_QMARK_id)?["\nid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null),(cljs.core.truth_(_QMARK_data)?["\ndata: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 ? taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(pstats,format_pstats_opts) : taoensso.tufte.format_pstats.call(null,pstats,format_pstats_opts)))].join('')], 0));
}));
});
/**
 * Returns a `format-id-fn` that abbreviates form ids (pids).
 *   Takes `n` (default 1), the number of namespace parts to keep unabbreviated.
 * 
 *   Examples:
 *  ((format-id-abbr)   :foo)                     => "foo"
 *  ((format-id-abbr)   :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello.world/foo) => "e.h.world/foo"
 *  ((format-id-abbr 2) :example.hello.world/foo) => "e.hello.world/foo"
 *  ((format-id-abbr 0) :example.hello.world/foo) => "e.h.w/foo"
 */
taoensso.tufte.format_id_abbr = (function taoensso$tufte$format_id_abbr(var_args){
var G__90337 = arguments.length;
switch (G__90337) {
case 0:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((1));
}));

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1 = (function (n){
var n__$1 = cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e90338){if((e90338 instanceof Error)){
var e = e90338;
return e;
} else {
throw e90338;

}
}})();
if((e == null)){
return n;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte",249,"(enc/int? n)",n,e,null);
}
})());
return (function (s){
var ns_parts = cljs.core.pop(taoensso.encore.explode_keyword(s));
var cnt = cljs.core.count(ns_parts);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if(((cnt - idx) <= n__$1)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3(in$,(0),(1)));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
if((cnt > (0))){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");
} else {
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.str_replace(cljs.core.name(s),/^defn_/,""));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
});
}));

(taoensso.tufte.format_id_abbr.cljs$lang$maxFixedArity = 1);

/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata_STAR_)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571);
} else {
if(cljs.core.truth_(taoensso.tufte.impl.pdata_proxy_get())){
return new cljs.core.Keyword(null,"thread","thread",947001524);
} else {
return null;
}
}
});
taoensso.tufte.default_nmax = 800000.0;
/**
 * Note: this is a low-level primitive for advanced users!
 *   Returns a new pdata object for use with `with-profiling` and/or `capture-time!`.
 *   Deref to get pstats:
 * 
 *  (let [pd (new-pdata)
 *        t0 (System/nanoTime)]
 *    (with-profiling pd {}
 *      (p :foo (Thread/sleep 100))
 *      (capture-time! pd :bar (- t0 (System/nanoTime))))
 *    @pd)
 * 
 *   Dynamic (thread-safe) by default.
 *   *WARNING*: don't change this default unless you're very sure the resulting
 *   pdata object will not be concurrently modified across threads. Concurrent
 *   modification will lead to bad data and/or exceptions!
 */
taoensso.tufte.new_pdata = (function taoensso$tufte$new_pdata(var_args){
var G__90340 = arguments.length;
switch (G__90340) {
case 0:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1 = (function (p__90341){
var map__90342 = p__90341;
var map__90342__$1 = (((((!((map__90342 == null))))?(((((map__90342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90342):map__90342);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90342__$1,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),true);
var nmax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90342__$1,new cljs.core.Keyword(null,"nmax","nmax",608994404),800000.0);
if(cljs.core.truth_(dynamic_QMARK_)){
return taoensso.tufte.impl.new_pdata_dynamic(nmax);
} else {
return taoensso.tufte.impl.new_pdata_local(nmax);
}
}));

(taoensso.tufte.new_pdata.cljs$lang$maxFixedArity = 1);

/**
 * Note: this is a low-level primitive for advanced users!
 *   Can be useful when tracking time across arbitrary thread boundaries or for
 *   async jobs / callbacks / etc.
 * 
 *   See `new-pdata` for more info on low-level primitives.
 */
taoensso.tufte.capture_time_BANG_ = (function taoensso$tufte$capture_time_BANG_(var_args){
var G__90345 = arguments.length;
switch (G__90345) {
case 3:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pdata,id,nano_secs_elapsed){
return taoensso.tufte.impl.capture_time_BANG_(pdata,id,nano_secs_elapsed);
}));

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nano_secs_elapsed){
var temp__5735__auto__ = (function (){var or__4126__auto__ = taoensso.tufte.impl._STAR_pdata_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy_get();
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var pd = temp__5735__auto__;
return taoensso.tufte.impl.capture_time_BANG_(pd,id,nano_secs_elapsed);
} else {
return null;
}
}));

(taoensso.tufte.capture_time_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns (fn [?ns]) -> truthy. Some example patterns:
 *  "foo.bar", "foo.bar.*", #{"foo" "bar"},
 *  {:whitelist ["foo.bar.*"] :blacklist ["baz.*"]}
 */
taoensso.tufte.compile_ns_filter = (function taoensso$tufte$compile_ns_filter(ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1(ns_pattern);
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
/**
 * Statistics are lossless unless data to merge are very large.
 */
taoensso.tufte.merge_pstats = (function taoensso$tufte$merge_pstats(var_args){
var G__90351 = arguments.length;
switch (G__90351) {
case 0:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps0){
return ps0;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(ps0,ps1);
}));

(taoensso.tufte.merge_pstats.cljs$lang$maxFixedArity = 2);

/**
 * Formats given pstats to a string table.
 *  Accounted < Clock => Some work was done that wasn't tracked by any p forms.
 *  Accounted > Clock => Nested p forms, and/or parallel threads.
 */
taoensso.tufte.format_pstats = (function taoensso$tufte$format_pstats(var_args){
var G__90353 = arguments.length;
switch (G__90353) {
case 1:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps){
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(ps,null);
}));

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps,opts){
if(cljs.core.truth_(ps)){
var map__90354 = (((ps instanceof taoensso.tufte.impl.PStats))?cljs.core.deref(ps):ps);
var map__90354__$1 = (((((!((map__90354 == null))))?(((((map__90354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90354):map__90354);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90354__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90354__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
return taoensso.tufte.stats.format_stats(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clock,new cljs.core.Keyword(null,"total","total",1916810418)),stats,opts);
} else {
return null;
}
}));

(taoensso.tufte.format_pstats.cljs$lang$maxFixedArity = 2);

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,_QMARK_meta_pid,fn_sym,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_(cljs.core.first(sigs));
var sigs__$1 = ((single_arity_QMARK_)?(new cljs.core.List(null,sigs,null,(1),null)):sigs);
var base_id = (cljs.core.truth_(_QMARK_meta_pid)?taoensso.encore.as_qname(_QMARK_meta_pid):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",(cljs.core.truth_(def_QMARK_)?"defn_":"fn_"),cljs.core.name(fn_sym)].join(''));
var get_id = ((single_arity_QMARK_)?(function (fn_sym__$1,_params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_id);
}):(function (fn_sym__$1,params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([base_id,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params))].join(''));
}));
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__90356){
var vec__90357 = p__90356;
var seq__90358 = cljs.core.seq(vec__90357);
var first__90359 = cljs.core.first(seq__90358);
var seq__90358__$1 = cljs.core.next(seq__90358);
var params = first__90359;
var others = seq__90358__$1;
var has_prepost_map_QMARK_ = ((cljs.core.map_QMARK_(cljs.core.first(others))) && (cljs.core.next(others)));
var vec__90360 = ((has_prepost_map_QMARK_)?others:cljs.core.cons(null,others));
var seq__90361 = cljs.core.seq(vec__90360);
var first__90362 = cljs.core.first(seq__90361);
var seq__90361__$1 = cljs.core.next(seq__90361);
var _QMARK_prepost_map = first__90362;
var body = seq__90361__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,_QMARK_prepost_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id(fn_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id(fn_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
}),sigs__$1);
return new_sigs;
});
taoensso.tufte.sacc_drain_and_merge_BANG_ = (function taoensso$tufte$sacc_drain_and_merge_BANG_(pstats_){
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,cljs.core.PersistentArrayMap.EMPTY);
});
taoensso.tufte.sacc_add_BANG_ = (function taoensso$tufte$sacc_add_BANG_(pstats_,group_id,ps){
if(cljs.core.truth_((function (){var and__4115__auto__ = group_id;
if(cljs.core.truth_(and__4115__auto__)){
return ps;
} else {
return and__4115__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,group_id,taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,group_id),ps));
}));

return true;
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.StatsAccumulator = (function (pstats_){
this.pstats_ = pstats_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.StatsAccumulator.prototype.call = (function (unused__16425__auto__){
var self__ = this;
var self__ = this;
var G__90364 = (arguments.length - (1));
switch (G__90364) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.tufte.StatsAccumulator.prototype.apply = (function (self__,args90363){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args90363)));
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (group_id,ps){
var self__ = this;
var _ = this;
return taoensso.tufte.sacc_add_BANG_(self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.tufte.sacc_drain_and_merge_BANG_(self__.pstats_);
}));

(taoensso.tufte.StatsAccumulator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pstats_","pstats_",-970084866,null)], null);
}));

(taoensso.tufte.StatsAccumulator.cljs$lang$type = true);

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorStr = "taoensso.tufte/StatsAccumulator");

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.tufte/StatsAccumulator");
}));

/**
 * Positional factory function for taoensso.tufte/StatsAccumulator.
 */
taoensso.tufte.__GT_StatsAccumulator = (function taoensso$tufte$__GT_StatsAccumulator(pstats_){
return (new taoensso.tufte.StatsAccumulator(pstats_));
});

/**
 * Alpha, subject to change.
 *   Small util to help merge pstats from multiple runs or threads.
 * 
 *   Returns a stateful StatsAccumulator (`sacc`) with:
 *  - `(sacc <group-id> <pstats>)` ; Merges given pstats under given group id
 *  - `@sacc`                      ; Drains accumulator and returns {<group-id> <merged-pstats>}
 * 
 *   Note that you may want some kind of async/buffer/serialization
 *   mechanism in front of merge calls for performance (e.g. by using an agent).
 * 
 *   See also `add-accumulating-handler!`, example clj project.
 */
taoensso.tufte.stats_accumulator = (function taoensso$tufte$stats_accumulator(){
return (new taoensso.tufte.StatsAccumulator(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)));
});
/**
 * Alpha, subject to change.
 * 
 *   Creates a new StatsAccumulator (and agent in clj), then
 *   registers a handler to accumulate `profile` output to the
 *   StatsAccumulator using the agent.
 * 
 *   Returns the StatsAccumulator. You can deref the result to
 *   drain the accumulator and return {<group-id> <merged-pstats>}.
 * 
 *   One common pattern is to deref the accumulator every n
 *   minutes/etc. to get a view of total-system performance over
 *   the period, e.g.:
 * 
 *   (defonce my-sacc (add-accumulating-handler! "*"))
 *   (defonce my-sacc-drainer
 *  ;; Will drain and print formatted stats every minute
 *  (future
 *    (while true
 *      (when-let [m (not-empty @my-sacc)]
 *        (println (format-grouped-pstats m)))
 *      (Thread/sleep 60000))))
 * 
 *   (profile ...) ; Used elsewhere in your application, e.g.
 *              ; wrapping relevant Ring routes in a web application.
 * 
 *   See also `format-grouped-pstats`, example clj project.
 */
taoensso.tufte.add_accumulating_handler_BANG_ = (function taoensso$tufte$add_accumulating_handler_BANG_(p__90365){
var map__90366 = p__90365;
var map__90366__$1 = (((((!((map__90366 == null))))?(((((map__90366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90366):map__90366);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90366__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986));
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90366__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"accumulating","accumulating",988482775));
var sacc = taoensso.tufte.stats_accumulator();
var agent_ = null;
taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__90368){
var map__90369 = p__90368;
var map__90369__$1 = (((((!((map__90369 == null))))?(((((map__90369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90369):map__90369);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90369__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90369__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90369__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
var id = (function (){var or__4126__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("tufte","nil-id","tufte/nil-id",1406139614);
}
})();
return (sacc.cljs$core$IFn$_invoke$arity$2 ? sacc.cljs$core$IFn$_invoke$arity$2(id,pstats) : sacc.call(null,id,pstats));
}));

return sacc;
});
/**
 * Alpha, subject to change.
 *   Takes a map of {<group-id> <PStats>} and formats a combined
 *   output string using `format-pstats`.
 * 
 *   See also example clj project.
 */
taoensso.tufte.format_grouped_pstats = (function taoensso$tufte$format_grouped_pstats(var_args){
var G__90372 = arguments.length;
switch (G__90372) {
case 1:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2 = (function (m,p__90373){
var map__90374 = p__90373;
var map__90374__$1 = (((((!((map__90374 == null))))?(((((map__90374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90374):map__90374);
var group_sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90374__$1,new cljs.core.Keyword(null,"group-sort-fn","group-sort-fn",1474480015),(function (m__$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null),(0));
}));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90374__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
if(cljs.core.truth_(m)){
var m__$1 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,taoensso.encore.force_ref(v));
}),cljs.core.transient$(m),m));
var sorted_group_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__90376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id);
return (group_sort_fn.cljs$core$IFn$_invoke$arity$1 ? group_sort_fn.cljs$core$IFn$_invoke$arity$1(G__90376) : group_sort_fn.call(null,G__90376));
}),taoensso.encore.rcompare,cljs.core.keys(m__$1));
var max_id_width = cljs.core.reduce_kv((function (acc,_,p__90377){
var map__90378 = p__90377;
var map__90378__$1 = (((((!((map__90378 == null))))?(((((map__90378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90378):map__90378);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90378__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90378__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
var temp__5733__auto__ = taoensso.tufte.stats.get_max_id_width(stats,format_pstats_opts);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
if((cljs.core.long$(c) > acc)){
return c;
} else {
return acc;
}
} else {
return acc;
}
}),(0),m__$1);
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),",\n",taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(format_pstats_opts,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373),max_id_width))].join('');
})),sorted_group_ids);
} else {
return null;
}
}));

(taoensso.tufte.format_grouped_pstats.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=taoensso.tufte.js.map
