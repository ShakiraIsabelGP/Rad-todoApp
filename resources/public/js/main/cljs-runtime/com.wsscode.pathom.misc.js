goog.provide('com.wsscode.pathom.misc');
/**
 * @define {boolean}
 */
com.wsscode.pathom.misc.INCLUDE_SPECS = goog.define("com.wsscode.pathom.misc.INCLUDE_SPECS",true);
com.wsscode.pathom.misc.pathom_random_uuid = (function com$wsscode$pathom$misc$pathom_random_uuid(){
return cljs.core.random_uuid();
});
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
com.wsscode.pathom.misc.distinct_by = (function com$wsscode$pathom$misc$distinct_by(var_args){
var G__80973 = arguments.length;
switch (G__80973) {
case 1:
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__81022 = null;
var G__81022__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__81022__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__81022__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__81022 = function(result,x){
switch(arguments.length){
case 0:
return G__81022__0.call(this);
case 1:
return G__81022__1.call(this,result);
case 2:
return G__81022__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81022.cljs$core$IFn$_invoke$arity$0 = G__81022__0;
G__81022.cljs$core$IFn$_invoke$arity$1 = G__81022__1;
G__81022.cljs$core$IFn$_invoke$arity$2 = G__81022__2;
return G__81022;
})()
});
}));

(com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$misc$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__80974,seen__$1){
while(true){
var vec__80975 = p__80974;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80975,(0),null);
var xs__$1 = vec__80975;
var temp__5735__auto__ = cljs.core.seq(xs__$1);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__81025 = cljs.core.rest(s);
var G__81026 = seen__$1;
p__80974 = G__81025;
seen__$1 = G__81026;
continue;
} else {
return cljs.core.cons(x,com$wsscode$pathom$misc$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(com.wsscode.pathom.misc.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence removing consecutive duplicates in coll when passed to a function f.
 *   Returns a transducer when no collection is provided.
 */
com.wsscode.pathom.misc.dedupe_by = (function com$wsscode$pathom$misc$dedupe_by(var_args){
var G__80979 = arguments.length;
switch (G__80979) {
case 1:
return com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(new cljs.core.Keyword("com.wsscode.pathom.misc","none","com.wsscode.pathom.misc/none",534209886));
return (function() {
var G__81030 = null;
var G__81030__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__81030__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__81030__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__81030 = function(result,x){
switch(arguments.length){
case 0:
return G__81030__0.call(this);
case 1:
return G__81030__1.call(this,result);
case 2:
return G__81030__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81030.cljs$core$IFn$_invoke$arity$0 = G__81030__0;
G__81030.cljs$core$IFn$_invoke$arity$1 = G__81030__1;
G__81030.cljs$core$IFn$_invoke$arity$2 = G__81030__2;
return G__81030;
})()
});
}));

(com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(com.wsscode.pathom.misc.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Like group by, but will keep only the last result.
 */
com.wsscode.pathom.misc.index_by = (function com$wsscode$pathom$misc$index_by(f,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
com.wsscode.pathom.misc.sconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
com.wsscode.pathom.misc.vconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
/**
 * Create a queue.
 */
com.wsscode.pathom.misc.queue = (function com$wsscode$pathom$misc$queue(var_args){
var G__80981 = arguments.length;
switch (G__80981) {
case 0:
return com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(com.wsscode.pathom.misc.queue.cljs$lang$maxFixedArity = 1);

/**
 * Map over the given hash-map keys.
 * 
 *   Example:
 *  (map-keys #(str/replace (name %) "_" "-") {"foo_bar" 1}) => {"foo-bar" 1}
 *   
 */
com.wsscode.pathom.misc.map_keys = (function com$wsscode$pathom$misc$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function com$wsscode$pathom$misc$map_keys_$_iter__80982(s__80983){
return (new cljs.core.LazySeq(null,(function (){
var s__80983__$1 = s__80983;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80983__$1);
if(temp__5735__auto__){
var s__80983__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80983__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80983__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80985 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80984 = (0);
while(true){
if((i__80984 < size__4528__auto__)){
var vec__80995 = cljs.core._nth(c__4527__auto__,i__80984);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80995,(1),null);
cljs.core.chunk_append(b__80985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__81041 = (i__80984 + (1));
i__80984 = G__81041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80985),com$wsscode$pathom$misc$map_keys_$_iter__80982(cljs.core.chunk_rest(s__80983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80985),null);
}
} else {
var vec__81002 = cljs.core.first(s__80983__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81002,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),com$wsscode$pathom$misc$map_keys_$_iter__80982(cljs.core.rest(s__80983__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
/**
 * Map over the given hash-map vals.
 * 
 *   Example:
 *  (map-vals inc {:a 1 :b 2})
 *   
 */
com.wsscode.pathom.misc.map_vals = (function com$wsscode$pathom$misc$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function com$wsscode$pathom$misc$map_vals_$_iter__81007(s__81008){
return (new cljs.core.LazySeq(null,(function (){
var s__81008__$1 = s__81008;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__81008__$1);
if(temp__5735__auto__){
var s__81008__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81008__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__81008__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__81010 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__81009 = (0);
while(true){
if((i__81009 < size__4528__auto__)){
var vec__81011 = cljs.core._nth(c__4527__auto__,i__81009);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81011,(1),null);
cljs.core.chunk_append(b__81010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__81048 = (i__81009 + (1));
i__81009 = G__81048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81010),com$wsscode$pathom$misc$map_vals_$_iter__81007(cljs.core.chunk_rest(s__81008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81010),null);
}
} else {
var vec__81014 = cljs.core.first(s__81008__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81014,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),com$wsscode$pathom$misc$map_vals_$_iter__81007(cljs.core.rest(s__81008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});

//# sourceMappingURL=com.wsscode.pathom.misc.js.map
