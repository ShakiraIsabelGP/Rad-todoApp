goog.provide('com.wsscode.common.combinatorics');
/**
 * All the ways to take one item from each sequence
 */
com.wsscode.common.combinatorics.cartesian_product = (function com$wsscode$common$combinatorics$cartesian_product(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80955 = arguments.length;
var i__4737__auto___80956 = (0);
while(true){
if((i__4737__auto___80956 < len__4736__auto___80955)){
args__4742__auto__.push((arguments[i__4737__auto___80956]));

var G__80957 = (i__4737__auto___80956 + (1));
i__4737__auto___80956 = G__80957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function com$wsscode$common$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__80958 = (i - (1));
var G__80959 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__80958;
v_seqs__$2 = G__80959;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return com$wsscode$common$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(com.wsscode.common.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.wsscode.common.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq80954){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80954));
}));


//# sourceMappingURL=com.wsscode.common.combinatorics.js.map
