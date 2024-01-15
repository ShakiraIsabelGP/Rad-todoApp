goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50950 = arguments.length;
switch (G__50950) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50951 = (function (f,blockable,meta50952){
this.f = f;
this.blockable = blockable;
this.meta50952 = meta50952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50953,meta50952__$1){
var self__ = this;
var _50953__$1 = this;
return (new cljs.core.async.t_cljs$core$async50951(self__.f,self__.blockable,meta50952__$1));
}));

(cljs.core.async.t_cljs$core$async50951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50953){
var self__ = this;
var _50953__$1 = this;
return self__.meta50952;
}));

(cljs.core.async.t_cljs$core$async50951.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50951.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50952","meta50952",1258626356,null)], null);
}));

(cljs.core.async.t_cljs$core$async50951.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50951");

(cljs.core.async.t_cljs$core$async50951.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50951");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50951.
 */
cljs.core.async.__GT_t_cljs$core$async50951 = (function cljs$core$async$__GT_t_cljs$core$async50951(f__$1,blockable__$1,meta50952){
return (new cljs.core.async.t_cljs$core$async50951(f__$1,blockable__$1,meta50952));
});

}

return (new cljs.core.async.t_cljs$core$async50951(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50956 = arguments.length;
switch (G__50956) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50958 = arguments.length;
switch (G__50958) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50960 = arguments.length;
switch (G__50960) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52432 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52432) : fn1.call(null,val_52432));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52432) : fn1.call(null,val_52432));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50962 = arguments.length;
switch (G__50962) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___52472 = n;
var x_52474 = (0);
while(true){
if((x_52474 < n__4613__auto___52472)){
(a[x_52474] = x_52474);

var G__52476 = (x_52474 + (1));
x_52474 = G__52476;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50963 = (function (flag,meta50964){
this.flag = flag;
this.meta50964 = meta50964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50965,meta50964__$1){
var self__ = this;
var _50965__$1 = this;
return (new cljs.core.async.t_cljs$core$async50963(self__.flag,meta50964__$1));
}));

(cljs.core.async.t_cljs$core$async50963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50965){
var self__ = this;
var _50965__$1 = this;
return self__.meta50964;
}));

(cljs.core.async.t_cljs$core$async50963.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50963.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50964","meta50964",750055821,null)], null);
}));

(cljs.core.async.t_cljs$core$async50963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50963");

(cljs.core.async.t_cljs$core$async50963.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50963.
 */
cljs.core.async.__GT_t_cljs$core$async50963 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50963(flag__$1,meta50964){
return (new cljs.core.async.t_cljs$core$async50963(flag__$1,meta50964));
});

}

return (new cljs.core.async.t_cljs$core$async50963(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50966 = (function (flag,cb,meta50967){
this.flag = flag;
this.cb = cb;
this.meta50967 = meta50967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50968,meta50967__$1){
var self__ = this;
var _50968__$1 = this;
return (new cljs.core.async.t_cljs$core$async50966(self__.flag,self__.cb,meta50967__$1));
}));

(cljs.core.async.t_cljs$core$async50966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50968){
var self__ = this;
var _50968__$1 = this;
return self__.meta50967;
}));

(cljs.core.async.t_cljs$core$async50966.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50966.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50967","meta50967",-1767326842,null)], null);
}));

(cljs.core.async.t_cljs$core$async50966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50966");

(cljs.core.async.t_cljs$core$async50966.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50966.
 */
cljs.core.async.__GT_t_cljs$core$async50966 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50966(flag__$1,cb__$1,meta50967){
return (new cljs.core.async.t_cljs$core$async50966(flag__$1,cb__$1,meta50967));
});

}

return (new cljs.core.async.t_cljs$core$async50966(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__50969_SHARP_){
var G__50971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50969_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50971) : fret.call(null,G__50971));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__50970_SHARP_){
var G__50972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50970_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50972) : fret.call(null,G__50972));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52531 = (i + (1));
i = G__52531;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52533 = arguments.length;
var i__4737__auto___52535 = (0);
while(true){
if((i__4737__auto___52535 < len__4736__auto___52533)){
args__4742__auto__.push((arguments[i__4737__auto___52535]));

var G__52536 = (i__4737__auto___52535 + (1));
i__4737__auto___52535 = G__52536;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50975){
var map__50976 = p__50975;
var map__50976__$1 = (((((!((map__50976 == null))))?(((((map__50976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50976):map__50976);
var opts = map__50976__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50973){
var G__50974 = cljs.core.first(seq50973);
var seq50973__$1 = cljs.core.next(seq50973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50974,seq50973__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50979 = arguments.length;
switch (G__50979) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50892__auto___52550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51003){
var state_val_51004 = (state_51003[(1)]);
if((state_val_51004 === (7))){
var inst_50999 = (state_51003[(2)]);
var state_51003__$1 = state_51003;
var statearr_51005_52551 = state_51003__$1;
(statearr_51005_52551[(2)] = inst_50999);

(statearr_51005_52551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (1))){
var state_51003__$1 = state_51003;
var statearr_51006_52552 = state_51003__$1;
(statearr_51006_52552[(2)] = null);

(statearr_51006_52552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (4))){
var inst_50982 = (state_51003[(7)]);
var inst_50982__$1 = (state_51003[(2)]);
var inst_50983 = (inst_50982__$1 == null);
var state_51003__$1 = (function (){var statearr_51007 = state_51003;
(statearr_51007[(7)] = inst_50982__$1);

return statearr_51007;
})();
if(cljs.core.truth_(inst_50983)){
var statearr_51008_52555 = state_51003__$1;
(statearr_51008_52555[(1)] = (5));

} else {
var statearr_51009_52556 = state_51003__$1;
(statearr_51009_52556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (13))){
var state_51003__$1 = state_51003;
var statearr_51010_52557 = state_51003__$1;
(statearr_51010_52557[(2)] = null);

(statearr_51010_52557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (6))){
var inst_50982 = (state_51003[(7)]);
var state_51003__$1 = state_51003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51003__$1,(11),to,inst_50982);
} else {
if((state_val_51004 === (3))){
var inst_51001 = (state_51003[(2)]);
var state_51003__$1 = state_51003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51003__$1,inst_51001);
} else {
if((state_val_51004 === (12))){
var state_51003__$1 = state_51003;
var statearr_51011_52561 = state_51003__$1;
(statearr_51011_52561[(2)] = null);

(statearr_51011_52561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (2))){
var state_51003__$1 = state_51003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51003__$1,(4),from);
} else {
if((state_val_51004 === (11))){
var inst_50992 = (state_51003[(2)]);
var state_51003__$1 = state_51003;
if(cljs.core.truth_(inst_50992)){
var statearr_51012_52564 = state_51003__$1;
(statearr_51012_52564[(1)] = (12));

} else {
var statearr_51013_52565 = state_51003__$1;
(statearr_51013_52565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (9))){
var state_51003__$1 = state_51003;
var statearr_51014_52566 = state_51003__$1;
(statearr_51014_52566[(2)] = null);

(statearr_51014_52566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (5))){
var state_51003__$1 = state_51003;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51015_52569 = state_51003__$1;
(statearr_51015_52569[(1)] = (8));

} else {
var statearr_51016_52570 = state_51003__$1;
(statearr_51016_52570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (14))){
var inst_50997 = (state_51003[(2)]);
var state_51003__$1 = state_51003;
var statearr_51017_52574 = state_51003__$1;
(statearr_51017_52574[(2)] = inst_50997);

(statearr_51017_52574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (10))){
var inst_50989 = (state_51003[(2)]);
var state_51003__$1 = state_51003;
var statearr_51018_52575 = state_51003__$1;
(statearr_51018_52575[(2)] = inst_50989);

(statearr_51018_52575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51004 === (8))){
var inst_50986 = cljs.core.async.close_BANG_(to);
var state_51003__$1 = state_51003;
var statearr_51019_52576 = state_51003__$1;
(statearr_51019_52576[(2)] = inst_50986);

(statearr_51019_52576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_51020 = [null,null,null,null,null,null,null,null];
(statearr_51020[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_51020[(1)] = (1));

return statearr_51020;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_51003){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51003);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51021){var ex__50860__auto__ = e51021;
var statearr_51022_52577 = state_51003;
(statearr_51022_52577[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51003[(4)]))){
var statearr_51023_52579 = state_51003;
(statearr_51023_52579[(1)] = cljs.core.first((state_51003[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52580 = state_51003;
state_51003 = G__52580;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_51003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_51003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51024 = f__50893__auto__();
(statearr_51024[(6)] = c__50892__auto___52550);

return statearr_51024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__51025){
var vec__51026 = p__51025;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(1),null);
var job = vec__51026;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50892__auto___52609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51033){
var state_val_51034 = (state_51033[(1)]);
if((state_val_51034 === (1))){
var state_51033__$1 = state_51033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51033__$1,(2),res,v);
} else {
if((state_val_51034 === (2))){
var inst_51030 = (state_51033[(2)]);
var inst_51031 = cljs.core.async.close_BANG_(res);
var state_51033__$1 = (function (){var statearr_51035 = state_51033;
(statearr_51035[(7)] = inst_51030);

return statearr_51035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51033__$1,inst_51031);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_51036 = [null,null,null,null,null,null,null,null];
(statearr_51036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__);

(statearr_51036[(1)] = (1));

return statearr_51036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1 = (function (state_51033){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51033);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51037){var ex__50860__auto__ = e51037;
var statearr_51038_52624 = state_51033;
(statearr_51038_52624[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51033[(4)]))){
var statearr_51039_52626 = state_51033;
(statearr_51039_52626[(1)] = cljs.core.first((state_51033[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52628 = state_51033;
state_51033 = G__52628;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = function(state_51033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1.call(this,state_51033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51040 = f__50893__auto__();
(statearr_51040[(6)] = c__50892__auto___52609);

return statearr_51040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51041){
var vec__51042 = p__51041;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51042,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51042,(1),null);
var job = vec__51042;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___52629 = n;
var __52630 = (0);
while(true){
if((__52630 < n__4613__auto___52629)){
var G__51045_52631 = type;
var G__51045_52632__$1 = (((G__51045_52631 instanceof cljs.core.Keyword))?G__51045_52631.fqn:null);
switch (G__51045_52632__$1) {
case "compute":
var c__50892__auto___52634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52630,c__50892__auto___52634,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async){
return (function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = ((function (__52630,c__50892__auto___52634,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async){
return (function (state_51058){
var state_val_51059 = (state_51058[(1)]);
if((state_val_51059 === (1))){
var state_51058__$1 = state_51058;
var statearr_51060_52635 = state_51058__$1;
(statearr_51060_52635[(2)] = null);

(statearr_51060_52635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51059 === (2))){
var state_51058__$1 = state_51058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51058__$1,(4),jobs);
} else {
if((state_val_51059 === (3))){
var inst_51056 = (state_51058[(2)]);
var state_51058__$1 = state_51058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51058__$1,inst_51056);
} else {
if((state_val_51059 === (4))){
var inst_51048 = (state_51058[(2)]);
var inst_51049 = process(inst_51048);
var state_51058__$1 = state_51058;
if(cljs.core.truth_(inst_51049)){
var statearr_51061_52641 = state_51058__$1;
(statearr_51061_52641[(1)] = (5));

} else {
var statearr_51062_52642 = state_51058__$1;
(statearr_51062_52642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51059 === (5))){
var state_51058__$1 = state_51058;
var statearr_51063_52643 = state_51058__$1;
(statearr_51063_52643[(2)] = null);

(statearr_51063_52643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51059 === (6))){
var state_51058__$1 = state_51058;
var statearr_51064_52644 = state_51058__$1;
(statearr_51064_52644[(2)] = null);

(statearr_51064_52644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51059 === (7))){
var inst_51054 = (state_51058[(2)]);
var state_51058__$1 = state_51058;
var statearr_51065_52645 = state_51058__$1;
(statearr_51065_52645[(2)] = inst_51054);

(statearr_51065_52645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52630,c__50892__auto___52634,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async))
;
return ((function (__52630,switch__50856__auto__,c__50892__auto___52634,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_51066 = [null,null,null,null,null,null,null];
(statearr_51066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__);

(statearr_51066[(1)] = (1));

return statearr_51066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1 = (function (state_51058){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51058);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51067){var ex__50860__auto__ = e51067;
var statearr_51068_52646 = state_51058;
(statearr_51068_52646[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51058[(4)]))){
var statearr_51069_52647 = state_51058;
(statearr_51069_52647[(1)] = cljs.core.first((state_51058[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52648 = state_51058;
state_51058 = G__52648;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = function(state_51058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1.call(this,state_51058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__;
})()
;})(__52630,switch__50856__auto__,c__50892__auto___52634,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async))
})();
var state__50894__auto__ = (function (){var statearr_51070 = f__50893__auto__();
(statearr_51070[(6)] = c__50892__auto___52634);

return statearr_51070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
});})(__52630,c__50892__auto___52634,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async))
);


break;
case "async":
var c__50892__auto___52649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52630,c__50892__auto___52649,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async){
return (function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = ((function (__52630,c__50892__auto___52649,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async){
return (function (state_51083){
var state_val_51084 = (state_51083[(1)]);
if((state_val_51084 === (1))){
var state_51083__$1 = state_51083;
var statearr_51085_52650 = state_51083__$1;
(statearr_51085_52650[(2)] = null);

(statearr_51085_52650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51084 === (2))){
var state_51083__$1 = state_51083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51083__$1,(4),jobs);
} else {
if((state_val_51084 === (3))){
var inst_51081 = (state_51083[(2)]);
var state_51083__$1 = state_51083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51083__$1,inst_51081);
} else {
if((state_val_51084 === (4))){
var inst_51073 = (state_51083[(2)]);
var inst_51074 = async(inst_51073);
var state_51083__$1 = state_51083;
if(cljs.core.truth_(inst_51074)){
var statearr_51086_52651 = state_51083__$1;
(statearr_51086_52651[(1)] = (5));

} else {
var statearr_51087_52652 = state_51083__$1;
(statearr_51087_52652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51084 === (5))){
var state_51083__$1 = state_51083;
var statearr_51088_52653 = state_51083__$1;
(statearr_51088_52653[(2)] = null);

(statearr_51088_52653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51084 === (6))){
var state_51083__$1 = state_51083;
var statearr_51089_52654 = state_51083__$1;
(statearr_51089_52654[(2)] = null);

(statearr_51089_52654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51084 === (7))){
var inst_51079 = (state_51083[(2)]);
var state_51083__$1 = state_51083;
var statearr_51090_52655 = state_51083__$1;
(statearr_51090_52655[(2)] = inst_51079);

(statearr_51090_52655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52630,c__50892__auto___52649,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async))
;
return ((function (__52630,switch__50856__auto__,c__50892__auto___52649,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_51091 = [null,null,null,null,null,null,null];
(statearr_51091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__);

(statearr_51091[(1)] = (1));

return statearr_51091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1 = (function (state_51083){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51083);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51092){var ex__50860__auto__ = e51092;
var statearr_51093_52656 = state_51083;
(statearr_51093_52656[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51083[(4)]))){
var statearr_51094_52657 = state_51083;
(statearr_51094_52657[(1)] = cljs.core.first((state_51083[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52658 = state_51083;
state_51083 = G__52658;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = function(state_51083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1.call(this,state_51083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__;
})()
;})(__52630,switch__50856__auto__,c__50892__auto___52649,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async))
})();
var state__50894__auto__ = (function (){var statearr_51095 = f__50893__auto__();
(statearr_51095[(6)] = c__50892__auto___52649);

return statearr_51095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
});})(__52630,c__50892__auto___52649,G__51045_52631,G__51045_52632__$1,n__4613__auto___52629,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51045_52632__$1)].join('')));

}

var G__52659 = (__52630 + (1));
__52630 = G__52659;
continue;
} else {
}
break;
}

var c__50892__auto___52660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51117){
var state_val_51118 = (state_51117[(1)]);
if((state_val_51118 === (7))){
var inst_51113 = (state_51117[(2)]);
var state_51117__$1 = state_51117;
var statearr_51119_52662 = state_51117__$1;
(statearr_51119_52662[(2)] = inst_51113);

(statearr_51119_52662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51118 === (1))){
var state_51117__$1 = state_51117;
var statearr_51120_52671 = state_51117__$1;
(statearr_51120_52671[(2)] = null);

(statearr_51120_52671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51118 === (4))){
var inst_51098 = (state_51117[(7)]);
var inst_51098__$1 = (state_51117[(2)]);
var inst_51099 = (inst_51098__$1 == null);
var state_51117__$1 = (function (){var statearr_51121 = state_51117;
(statearr_51121[(7)] = inst_51098__$1);

return statearr_51121;
})();
if(cljs.core.truth_(inst_51099)){
var statearr_51122_52672 = state_51117__$1;
(statearr_51122_52672[(1)] = (5));

} else {
var statearr_51123_52673 = state_51117__$1;
(statearr_51123_52673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51118 === (6))){
var inst_51098 = (state_51117[(7)]);
var inst_51103 = (state_51117[(8)]);
var inst_51103__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51105 = [inst_51098,inst_51103__$1];
var inst_51106 = (new cljs.core.PersistentVector(null,2,(5),inst_51104,inst_51105,null));
var state_51117__$1 = (function (){var statearr_51124 = state_51117;
(statearr_51124[(8)] = inst_51103__$1);

return statearr_51124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51117__$1,(8),jobs,inst_51106);
} else {
if((state_val_51118 === (3))){
var inst_51115 = (state_51117[(2)]);
var state_51117__$1 = state_51117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51117__$1,inst_51115);
} else {
if((state_val_51118 === (2))){
var state_51117__$1 = state_51117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51117__$1,(4),from);
} else {
if((state_val_51118 === (9))){
var inst_51110 = (state_51117[(2)]);
var state_51117__$1 = (function (){var statearr_51125 = state_51117;
(statearr_51125[(9)] = inst_51110);

return statearr_51125;
})();
var statearr_51126_52674 = state_51117__$1;
(statearr_51126_52674[(2)] = null);

(statearr_51126_52674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51118 === (5))){
var inst_51101 = cljs.core.async.close_BANG_(jobs);
var state_51117__$1 = state_51117;
var statearr_51127_52675 = state_51117__$1;
(statearr_51127_52675[(2)] = inst_51101);

(statearr_51127_52675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51118 === (8))){
var inst_51103 = (state_51117[(8)]);
var inst_51108 = (state_51117[(2)]);
var state_51117__$1 = (function (){var statearr_51128 = state_51117;
(statearr_51128[(10)] = inst_51108);

return statearr_51128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51117__$1,(9),results,inst_51103);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_51129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__);

(statearr_51129[(1)] = (1));

return statearr_51129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1 = (function (state_51117){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51117);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51130){var ex__50860__auto__ = e51130;
var statearr_51131_52678 = state_51117;
(statearr_51131_52678[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51117[(4)]))){
var statearr_51132_52679 = state_51117;
(statearr_51132_52679[(1)] = cljs.core.first((state_51117[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52680 = state_51117;
state_51117 = G__52680;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = function(state_51117){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1.call(this,state_51117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51133 = f__50893__auto__();
(statearr_51133[(6)] = c__50892__auto___52660);

return statearr_51133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51171){
var state_val_51172 = (state_51171[(1)]);
if((state_val_51172 === (7))){
var inst_51167 = (state_51171[(2)]);
var state_51171__$1 = state_51171;
var statearr_51173_52681 = state_51171__$1;
(statearr_51173_52681[(2)] = inst_51167);

(statearr_51173_52681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (20))){
var state_51171__$1 = state_51171;
var statearr_51174_52682 = state_51171__$1;
(statearr_51174_52682[(2)] = null);

(statearr_51174_52682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (1))){
var state_51171__$1 = state_51171;
var statearr_51175_52683 = state_51171__$1;
(statearr_51175_52683[(2)] = null);

(statearr_51175_52683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (4))){
var inst_51136 = (state_51171[(7)]);
var inst_51136__$1 = (state_51171[(2)]);
var inst_51137 = (inst_51136__$1 == null);
var state_51171__$1 = (function (){var statearr_51176 = state_51171;
(statearr_51176[(7)] = inst_51136__$1);

return statearr_51176;
})();
if(cljs.core.truth_(inst_51137)){
var statearr_51177_52684 = state_51171__$1;
(statearr_51177_52684[(1)] = (5));

} else {
var statearr_51178_52685 = state_51171__$1;
(statearr_51178_52685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (15))){
var inst_51149 = (state_51171[(8)]);
var state_51171__$1 = state_51171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51171__$1,(18),to,inst_51149);
} else {
if((state_val_51172 === (21))){
var inst_51162 = (state_51171[(2)]);
var state_51171__$1 = state_51171;
var statearr_51179_52686 = state_51171__$1;
(statearr_51179_52686[(2)] = inst_51162);

(statearr_51179_52686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (13))){
var inst_51164 = (state_51171[(2)]);
var state_51171__$1 = (function (){var statearr_51180 = state_51171;
(statearr_51180[(9)] = inst_51164);

return statearr_51180;
})();
var statearr_51181_52687 = state_51171__$1;
(statearr_51181_52687[(2)] = null);

(statearr_51181_52687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (6))){
var inst_51136 = (state_51171[(7)]);
var state_51171__$1 = state_51171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51171__$1,(11),inst_51136);
} else {
if((state_val_51172 === (17))){
var inst_51157 = (state_51171[(2)]);
var state_51171__$1 = state_51171;
if(cljs.core.truth_(inst_51157)){
var statearr_51182_52688 = state_51171__$1;
(statearr_51182_52688[(1)] = (19));

} else {
var statearr_51183_52689 = state_51171__$1;
(statearr_51183_52689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (3))){
var inst_51169 = (state_51171[(2)]);
var state_51171__$1 = state_51171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51171__$1,inst_51169);
} else {
if((state_val_51172 === (12))){
var inst_51146 = (state_51171[(10)]);
var state_51171__$1 = state_51171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51171__$1,(14),inst_51146);
} else {
if((state_val_51172 === (2))){
var state_51171__$1 = state_51171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51171__$1,(4),results);
} else {
if((state_val_51172 === (19))){
var state_51171__$1 = state_51171;
var statearr_51184_52701 = state_51171__$1;
(statearr_51184_52701[(2)] = null);

(statearr_51184_52701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (11))){
var inst_51146 = (state_51171[(2)]);
var state_51171__$1 = (function (){var statearr_51185 = state_51171;
(statearr_51185[(10)] = inst_51146);

return statearr_51185;
})();
var statearr_51186_52703 = state_51171__$1;
(statearr_51186_52703[(2)] = null);

(statearr_51186_52703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (9))){
var state_51171__$1 = state_51171;
var statearr_51187_52705 = state_51171__$1;
(statearr_51187_52705[(2)] = null);

(statearr_51187_52705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (5))){
var state_51171__$1 = state_51171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51188_52706 = state_51171__$1;
(statearr_51188_52706[(1)] = (8));

} else {
var statearr_51189_52707 = state_51171__$1;
(statearr_51189_52707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (14))){
var inst_51149 = (state_51171[(8)]);
var inst_51149__$1 = (state_51171[(2)]);
var inst_51150 = (inst_51149__$1 == null);
var inst_51151 = cljs.core.not(inst_51150);
var state_51171__$1 = (function (){var statearr_51190 = state_51171;
(statearr_51190[(8)] = inst_51149__$1);

return statearr_51190;
})();
if(inst_51151){
var statearr_51191_52709 = state_51171__$1;
(statearr_51191_52709[(1)] = (15));

} else {
var statearr_51192_52710 = state_51171__$1;
(statearr_51192_52710[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (16))){
var state_51171__$1 = state_51171;
var statearr_51193_52712 = state_51171__$1;
(statearr_51193_52712[(2)] = false);

(statearr_51193_52712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (10))){
var inst_51143 = (state_51171[(2)]);
var state_51171__$1 = state_51171;
var statearr_51194_52715 = state_51171__$1;
(statearr_51194_52715[(2)] = inst_51143);

(statearr_51194_52715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (18))){
var inst_51154 = (state_51171[(2)]);
var state_51171__$1 = state_51171;
var statearr_51195_52716 = state_51171__$1;
(statearr_51195_52716[(2)] = inst_51154);

(statearr_51195_52716[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51172 === (8))){
var inst_51140 = cljs.core.async.close_BANG_(to);
var state_51171__$1 = state_51171;
var statearr_51196_52717 = state_51171__$1;
(statearr_51196_52717[(2)] = inst_51140);

(statearr_51196_52717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_51197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__);

(statearr_51197[(1)] = (1));

return statearr_51197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1 = (function (state_51171){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51171);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51198){var ex__50860__auto__ = e51198;
var statearr_51199_52730 = state_51171;
(statearr_51199_52730[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51171[(4)]))){
var statearr_51200_52731 = state_51171;
(statearr_51200_52731[(1)] = cljs.core.first((state_51171[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52732 = state_51171;
state_51171 = G__52732;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__ = function(state_51171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1.call(this,state_51171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51201 = f__50893__auto__();
(statearr_51201[(6)] = c__50892__auto__);

return statearr_51201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51203 = arguments.length;
switch (G__51203) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51205 = arguments.length;
switch (G__51205) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51207 = arguments.length;
switch (G__51207) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50892__auto___52744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51233){
var state_val_51234 = (state_51233[(1)]);
if((state_val_51234 === (7))){
var inst_51229 = (state_51233[(2)]);
var state_51233__$1 = state_51233;
var statearr_51235_52745 = state_51233__$1;
(statearr_51235_52745[(2)] = inst_51229);

(statearr_51235_52745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (1))){
var state_51233__$1 = state_51233;
var statearr_51236_52746 = state_51233__$1;
(statearr_51236_52746[(2)] = null);

(statearr_51236_52746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (4))){
var inst_51210 = (state_51233[(7)]);
var inst_51210__$1 = (state_51233[(2)]);
var inst_51211 = (inst_51210__$1 == null);
var state_51233__$1 = (function (){var statearr_51237 = state_51233;
(statearr_51237[(7)] = inst_51210__$1);

return statearr_51237;
})();
if(cljs.core.truth_(inst_51211)){
var statearr_51238_52747 = state_51233__$1;
(statearr_51238_52747[(1)] = (5));

} else {
var statearr_51239_52748 = state_51233__$1;
(statearr_51239_52748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (13))){
var state_51233__$1 = state_51233;
var statearr_51240_52749 = state_51233__$1;
(statearr_51240_52749[(2)] = null);

(statearr_51240_52749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (6))){
var inst_51210 = (state_51233[(7)]);
var inst_51216 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51210) : p.call(null,inst_51210));
var state_51233__$1 = state_51233;
if(cljs.core.truth_(inst_51216)){
var statearr_51241_52750 = state_51233__$1;
(statearr_51241_52750[(1)] = (9));

} else {
var statearr_51242_52751 = state_51233__$1;
(statearr_51242_52751[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (3))){
var inst_51231 = (state_51233[(2)]);
var state_51233__$1 = state_51233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51233__$1,inst_51231);
} else {
if((state_val_51234 === (12))){
var state_51233__$1 = state_51233;
var statearr_51243_52752 = state_51233__$1;
(statearr_51243_52752[(2)] = null);

(statearr_51243_52752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (2))){
var state_51233__$1 = state_51233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51233__$1,(4),ch);
} else {
if((state_val_51234 === (11))){
var inst_51210 = (state_51233[(7)]);
var inst_51220 = (state_51233[(2)]);
var state_51233__$1 = state_51233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51233__$1,(8),inst_51220,inst_51210);
} else {
if((state_val_51234 === (9))){
var state_51233__$1 = state_51233;
var statearr_51244_52753 = state_51233__$1;
(statearr_51244_52753[(2)] = tc);

(statearr_51244_52753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (5))){
var inst_51213 = cljs.core.async.close_BANG_(tc);
var inst_51214 = cljs.core.async.close_BANG_(fc);
var state_51233__$1 = (function (){var statearr_51245 = state_51233;
(statearr_51245[(8)] = inst_51213);

return statearr_51245;
})();
var statearr_51246_52754 = state_51233__$1;
(statearr_51246_52754[(2)] = inst_51214);

(statearr_51246_52754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (14))){
var inst_51227 = (state_51233[(2)]);
var state_51233__$1 = state_51233;
var statearr_51247_52755 = state_51233__$1;
(statearr_51247_52755[(2)] = inst_51227);

(statearr_51247_52755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (10))){
var state_51233__$1 = state_51233;
var statearr_51248_52756 = state_51233__$1;
(statearr_51248_52756[(2)] = fc);

(statearr_51248_52756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51234 === (8))){
var inst_51222 = (state_51233[(2)]);
var state_51233__$1 = state_51233;
if(cljs.core.truth_(inst_51222)){
var statearr_51249_52757 = state_51233__$1;
(statearr_51249_52757[(1)] = (12));

} else {
var statearr_51250_52758 = state_51233__$1;
(statearr_51250_52758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_51251 = [null,null,null,null,null,null,null,null,null];
(statearr_51251[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_51251[(1)] = (1));

return statearr_51251;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_51233){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51233);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51252){var ex__50860__auto__ = e51252;
var statearr_51253_52759 = state_51233;
(statearr_51253_52759[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51233[(4)]))){
var statearr_51254_52760 = state_51233;
(statearr_51254_52760[(1)] = cljs.core.first((state_51233[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52761 = state_51233;
state_51233 = G__52761;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_51233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_51233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51255 = f__50893__auto__();
(statearr_51255[(6)] = c__50892__auto___52744);

return statearr_51255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51277){
var state_val_51278 = (state_51277[(1)]);
if((state_val_51278 === (7))){
var inst_51273 = (state_51277[(2)]);
var state_51277__$1 = state_51277;
var statearr_51279_52762 = state_51277__$1;
(statearr_51279_52762[(2)] = inst_51273);

(statearr_51279_52762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (1))){
var inst_51256 = init;
var inst_51257 = inst_51256;
var state_51277__$1 = (function (){var statearr_51280 = state_51277;
(statearr_51280[(7)] = inst_51257);

return statearr_51280;
})();
var statearr_51281_52763 = state_51277__$1;
(statearr_51281_52763[(2)] = null);

(statearr_51281_52763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (4))){
var inst_51260 = (state_51277[(8)]);
var inst_51260__$1 = (state_51277[(2)]);
var inst_51261 = (inst_51260__$1 == null);
var state_51277__$1 = (function (){var statearr_51282 = state_51277;
(statearr_51282[(8)] = inst_51260__$1);

return statearr_51282;
})();
if(cljs.core.truth_(inst_51261)){
var statearr_51283_52765 = state_51277__$1;
(statearr_51283_52765[(1)] = (5));

} else {
var statearr_51284_52766 = state_51277__$1;
(statearr_51284_52766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (6))){
var inst_51257 = (state_51277[(7)]);
var inst_51260 = (state_51277[(8)]);
var inst_51264 = (state_51277[(9)]);
var inst_51264__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51257,inst_51260) : f.call(null,inst_51257,inst_51260));
var inst_51265 = cljs.core.reduced_QMARK_(inst_51264__$1);
var state_51277__$1 = (function (){var statearr_51285 = state_51277;
(statearr_51285[(9)] = inst_51264__$1);

return statearr_51285;
})();
if(inst_51265){
var statearr_51286_52767 = state_51277__$1;
(statearr_51286_52767[(1)] = (8));

} else {
var statearr_51287_52769 = state_51277__$1;
(statearr_51287_52769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (3))){
var inst_51275 = (state_51277[(2)]);
var state_51277__$1 = state_51277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51277__$1,inst_51275);
} else {
if((state_val_51278 === (2))){
var state_51277__$1 = state_51277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51277__$1,(4),ch);
} else {
if((state_val_51278 === (9))){
var inst_51264 = (state_51277[(9)]);
var inst_51257 = inst_51264;
var state_51277__$1 = (function (){var statearr_51288 = state_51277;
(statearr_51288[(7)] = inst_51257);

return statearr_51288;
})();
var statearr_51289_52771 = state_51277__$1;
(statearr_51289_52771[(2)] = null);

(statearr_51289_52771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (5))){
var inst_51257 = (state_51277[(7)]);
var state_51277__$1 = state_51277;
var statearr_51290_52772 = state_51277__$1;
(statearr_51290_52772[(2)] = inst_51257);

(statearr_51290_52772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (10))){
var inst_51271 = (state_51277[(2)]);
var state_51277__$1 = state_51277;
var statearr_51291_52773 = state_51277__$1;
(statearr_51291_52773[(2)] = inst_51271);

(statearr_51291_52773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51278 === (8))){
var inst_51264 = (state_51277[(9)]);
var inst_51267 = cljs.core.deref(inst_51264);
var state_51277__$1 = state_51277;
var statearr_51292_52774 = state_51277__$1;
(statearr_51292_52774[(2)] = inst_51267);

(statearr_51292_52774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50857__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50857__auto____0 = (function (){
var statearr_51293 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51293[(0)] = cljs$core$async$reduce_$_state_machine__50857__auto__);

(statearr_51293[(1)] = (1));

return statearr_51293;
});
var cljs$core$async$reduce_$_state_machine__50857__auto____1 = (function (state_51277){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51277);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51294){var ex__50860__auto__ = e51294;
var statearr_51295_52778 = state_51277;
(statearr_51295_52778[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51277[(4)]))){
var statearr_51296_52780 = state_51277;
(statearr_51296_52780[(1)] = cljs.core.first((state_51277[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52782 = state_51277;
state_51277 = G__52782;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50857__auto__ = function(state_51277){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50857__auto____1.call(this,state_51277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50857__auto____0;
cljs$core$async$reduce_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50857__auto____1;
return cljs$core$async$reduce_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51297 = f__50893__auto__();
(statearr_51297[(6)] = c__50892__auto__);

return statearr_51297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51303){
var state_val_51304 = (state_51303[(1)]);
if((state_val_51304 === (1))){
var inst_51298 = cljs.core.async.reduce(f__$1,init,ch);
var state_51303__$1 = state_51303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51303__$1,(2),inst_51298);
} else {
if((state_val_51304 === (2))){
var inst_51300 = (state_51303[(2)]);
var inst_51301 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51300) : f__$1.call(null,inst_51300));
var state_51303__$1 = state_51303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51303__$1,inst_51301);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50857__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50857__auto____0 = (function (){
var statearr_51305 = [null,null,null,null,null,null,null];
(statearr_51305[(0)] = cljs$core$async$transduce_$_state_machine__50857__auto__);

(statearr_51305[(1)] = (1));

return statearr_51305;
});
var cljs$core$async$transduce_$_state_machine__50857__auto____1 = (function (state_51303){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51303);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51306){var ex__50860__auto__ = e51306;
var statearr_51307_52785 = state_51303;
(statearr_51307_52785[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51303[(4)]))){
var statearr_51308_52786 = state_51303;
(statearr_51308_52786[(1)] = cljs.core.first((state_51303[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52787 = state_51303;
state_51303 = G__52787;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50857__auto__ = function(state_51303){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50857__auto____1.call(this,state_51303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50857__auto____0;
cljs$core$async$transduce_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50857__auto____1;
return cljs$core$async$transduce_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51309 = f__50893__auto__();
(statearr_51309[(6)] = c__50892__auto__);

return statearr_51309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51311 = arguments.length;
switch (G__51311) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51336){
var state_val_51337 = (state_51336[(1)]);
if((state_val_51337 === (7))){
var inst_51318 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51338_52789 = state_51336__$1;
(statearr_51338_52789[(2)] = inst_51318);

(statearr_51338_52789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (1))){
var inst_51312 = cljs.core.seq(coll);
var inst_51313 = inst_51312;
var state_51336__$1 = (function (){var statearr_51339 = state_51336;
(statearr_51339[(7)] = inst_51313);

return statearr_51339;
})();
var statearr_51340_52790 = state_51336__$1;
(statearr_51340_52790[(2)] = null);

(statearr_51340_52790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (4))){
var inst_51313 = (state_51336[(7)]);
var inst_51316 = cljs.core.first(inst_51313);
var state_51336__$1 = state_51336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51336__$1,(7),ch,inst_51316);
} else {
if((state_val_51337 === (13))){
var inst_51330 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51341_52791 = state_51336__$1;
(statearr_51341_52791[(2)] = inst_51330);

(statearr_51341_52791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (6))){
var inst_51321 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
if(cljs.core.truth_(inst_51321)){
var statearr_51342_52792 = state_51336__$1;
(statearr_51342_52792[(1)] = (8));

} else {
var statearr_51343_52793 = state_51336__$1;
(statearr_51343_52793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (3))){
var inst_51334 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51336__$1,inst_51334);
} else {
if((state_val_51337 === (12))){
var state_51336__$1 = state_51336;
var statearr_51344_52794 = state_51336__$1;
(statearr_51344_52794[(2)] = null);

(statearr_51344_52794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (2))){
var inst_51313 = (state_51336[(7)]);
var state_51336__$1 = state_51336;
if(cljs.core.truth_(inst_51313)){
var statearr_51345_52795 = state_51336__$1;
(statearr_51345_52795[(1)] = (4));

} else {
var statearr_51346_52796 = state_51336__$1;
(statearr_51346_52796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (11))){
var inst_51327 = cljs.core.async.close_BANG_(ch);
var state_51336__$1 = state_51336;
var statearr_51347_52797 = state_51336__$1;
(statearr_51347_52797[(2)] = inst_51327);

(statearr_51347_52797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (9))){
var state_51336__$1 = state_51336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51348_52798 = state_51336__$1;
(statearr_51348_52798[(1)] = (11));

} else {
var statearr_51349_52799 = state_51336__$1;
(statearr_51349_52799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (5))){
var inst_51313 = (state_51336[(7)]);
var state_51336__$1 = state_51336;
var statearr_51350_52800 = state_51336__$1;
(statearr_51350_52800[(2)] = inst_51313);

(statearr_51350_52800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (10))){
var inst_51332 = (state_51336[(2)]);
var state_51336__$1 = state_51336;
var statearr_51351_52805 = state_51336__$1;
(statearr_51351_52805[(2)] = inst_51332);

(statearr_51351_52805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51337 === (8))){
var inst_51313 = (state_51336[(7)]);
var inst_51323 = cljs.core.next(inst_51313);
var inst_51313__$1 = inst_51323;
var state_51336__$1 = (function (){var statearr_51352 = state_51336;
(statearr_51352[(7)] = inst_51313__$1);

return statearr_51352;
})();
var statearr_51353_52814 = state_51336__$1;
(statearr_51353_52814[(2)] = null);

(statearr_51353_52814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_51354 = [null,null,null,null,null,null,null,null];
(statearr_51354[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_51354[(1)] = (1));

return statearr_51354;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_51336){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51336);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51355){var ex__50860__auto__ = e51355;
var statearr_51356_52818 = state_51336;
(statearr_51356_52818[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51336[(4)]))){
var statearr_51357_52819 = state_51336;
(statearr_51357_52819[(1)] = cljs.core.first((state_51336[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52820 = state_51336;
state_51336 = G__52820;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_51336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_51336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51358 = f__50893__auto__();
(statearr_51358[(6)] = c__50892__auto__);

return statearr_51358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51360 = arguments.length;
switch (G__51360) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52822 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52822(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52836 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52836(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52837 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52837(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52838 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52838(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51361 = (function (ch,cs,meta51362){
this.ch = ch;
this.cs = cs;
this.meta51362 = meta51362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51363,meta51362__$1){
var self__ = this;
var _51363__$1 = this;
return (new cljs.core.async.t_cljs$core$async51361(self__.ch,self__.cs,meta51362__$1));
}));

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51363){
var self__ = this;
var _51363__$1 = this;
return self__.meta51362;
}));

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51361.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51362","meta51362",-1387798914,null)], null);
}));

(cljs.core.async.t_cljs$core$async51361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51361");

(cljs.core.async.t_cljs$core$async51361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51361.
 */
cljs.core.async.__GT_t_cljs$core$async51361 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51361(ch__$1,cs__$1,meta51362){
return (new cljs.core.async.t_cljs$core$async51361(ch__$1,cs__$1,meta51362));
});

}

return (new cljs.core.async.t_cljs$core$async51361(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50892__auto___52839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51496){
var state_val_51497 = (state_51496[(1)]);
if((state_val_51497 === (7))){
var inst_51492 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51498_52840 = state_51496__$1;
(statearr_51498_52840[(2)] = inst_51492);

(statearr_51498_52840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (20))){
var inst_51397 = (state_51496[(7)]);
var inst_51409 = cljs.core.first(inst_51397);
var inst_51410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51409,(0),null);
var inst_51411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51409,(1),null);
var state_51496__$1 = (function (){var statearr_51499 = state_51496;
(statearr_51499[(8)] = inst_51410);

return statearr_51499;
})();
if(cljs.core.truth_(inst_51411)){
var statearr_51500_52841 = state_51496__$1;
(statearr_51500_52841[(1)] = (22));

} else {
var statearr_51501_52842 = state_51496__$1;
(statearr_51501_52842[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (27))){
var inst_51439 = (state_51496[(9)]);
var inst_51441 = (state_51496[(10)]);
var inst_51446 = (state_51496[(11)]);
var inst_51366 = (state_51496[(12)]);
var inst_51446__$1 = cljs.core._nth(inst_51439,inst_51441);
var inst_51447 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51446__$1,inst_51366,done);
var state_51496__$1 = (function (){var statearr_51502 = state_51496;
(statearr_51502[(11)] = inst_51446__$1);

return statearr_51502;
})();
if(cljs.core.truth_(inst_51447)){
var statearr_51503_52843 = state_51496__$1;
(statearr_51503_52843[(1)] = (30));

} else {
var statearr_51504_52845 = state_51496__$1;
(statearr_51504_52845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (1))){
var state_51496__$1 = state_51496;
var statearr_51505_52846 = state_51496__$1;
(statearr_51505_52846[(2)] = null);

(statearr_51505_52846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (24))){
var inst_51397 = (state_51496[(7)]);
var inst_51416 = (state_51496[(2)]);
var inst_51417 = cljs.core.next(inst_51397);
var inst_51375 = inst_51417;
var inst_51376 = null;
var inst_51377 = (0);
var inst_51378 = (0);
var state_51496__$1 = (function (){var statearr_51506 = state_51496;
(statearr_51506[(13)] = inst_51416);

(statearr_51506[(14)] = inst_51375);

(statearr_51506[(15)] = inst_51376);

(statearr_51506[(16)] = inst_51377);

(statearr_51506[(17)] = inst_51378);

return statearr_51506;
})();
var statearr_51507_52847 = state_51496__$1;
(statearr_51507_52847[(2)] = null);

(statearr_51507_52847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (39))){
var state_51496__$1 = state_51496;
var statearr_51511_52848 = state_51496__$1;
(statearr_51511_52848[(2)] = null);

(statearr_51511_52848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (4))){
var inst_51366 = (state_51496[(12)]);
var inst_51366__$1 = (state_51496[(2)]);
var inst_51367 = (inst_51366__$1 == null);
var state_51496__$1 = (function (){var statearr_51512 = state_51496;
(statearr_51512[(12)] = inst_51366__$1);

return statearr_51512;
})();
if(cljs.core.truth_(inst_51367)){
var statearr_51513_52849 = state_51496__$1;
(statearr_51513_52849[(1)] = (5));

} else {
var statearr_51514_52850 = state_51496__$1;
(statearr_51514_52850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (15))){
var inst_51378 = (state_51496[(17)]);
var inst_51375 = (state_51496[(14)]);
var inst_51376 = (state_51496[(15)]);
var inst_51377 = (state_51496[(16)]);
var inst_51393 = (state_51496[(2)]);
var inst_51394 = (inst_51378 + (1));
var tmp51508 = inst_51375;
var tmp51509 = inst_51377;
var tmp51510 = inst_51376;
var inst_51375__$1 = tmp51508;
var inst_51376__$1 = tmp51510;
var inst_51377__$1 = tmp51509;
var inst_51378__$1 = inst_51394;
var state_51496__$1 = (function (){var statearr_51515 = state_51496;
(statearr_51515[(18)] = inst_51393);

(statearr_51515[(14)] = inst_51375__$1);

(statearr_51515[(15)] = inst_51376__$1);

(statearr_51515[(16)] = inst_51377__$1);

(statearr_51515[(17)] = inst_51378__$1);

return statearr_51515;
})();
var statearr_51516_52851 = state_51496__$1;
(statearr_51516_52851[(2)] = null);

(statearr_51516_52851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (21))){
var inst_51420 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51520_52852 = state_51496__$1;
(statearr_51520_52852[(2)] = inst_51420);

(statearr_51520_52852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (31))){
var inst_51446 = (state_51496[(11)]);
var inst_51450 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51446);
var state_51496__$1 = state_51496;
var statearr_51521_52853 = state_51496__$1;
(statearr_51521_52853[(2)] = inst_51450);

(statearr_51521_52853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (32))){
var inst_51441 = (state_51496[(10)]);
var inst_51438 = (state_51496[(19)]);
var inst_51439 = (state_51496[(9)]);
var inst_51440 = (state_51496[(20)]);
var inst_51452 = (state_51496[(2)]);
var inst_51453 = (inst_51441 + (1));
var tmp51517 = inst_51438;
var tmp51518 = inst_51439;
var tmp51519 = inst_51440;
var inst_51438__$1 = tmp51517;
var inst_51439__$1 = tmp51518;
var inst_51440__$1 = tmp51519;
var inst_51441__$1 = inst_51453;
var state_51496__$1 = (function (){var statearr_51522 = state_51496;
(statearr_51522[(21)] = inst_51452);

(statearr_51522[(19)] = inst_51438__$1);

(statearr_51522[(9)] = inst_51439__$1);

(statearr_51522[(20)] = inst_51440__$1);

(statearr_51522[(10)] = inst_51441__$1);

return statearr_51522;
})();
var statearr_51523_52854 = state_51496__$1;
(statearr_51523_52854[(2)] = null);

(statearr_51523_52854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (40))){
var inst_51465 = (state_51496[(22)]);
var inst_51469 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51465);
var state_51496__$1 = state_51496;
var statearr_51524_52855 = state_51496__$1;
(statearr_51524_52855[(2)] = inst_51469);

(statearr_51524_52855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (33))){
var inst_51456 = (state_51496[(23)]);
var inst_51458 = cljs.core.chunked_seq_QMARK_(inst_51456);
var state_51496__$1 = state_51496;
if(inst_51458){
var statearr_51525_52856 = state_51496__$1;
(statearr_51525_52856[(1)] = (36));

} else {
var statearr_51526_52857 = state_51496__$1;
(statearr_51526_52857[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (13))){
var inst_51387 = (state_51496[(24)]);
var inst_51390 = cljs.core.async.close_BANG_(inst_51387);
var state_51496__$1 = state_51496;
var statearr_51527_52858 = state_51496__$1;
(statearr_51527_52858[(2)] = inst_51390);

(statearr_51527_52858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (22))){
var inst_51410 = (state_51496[(8)]);
var inst_51413 = cljs.core.async.close_BANG_(inst_51410);
var state_51496__$1 = state_51496;
var statearr_51528_52859 = state_51496__$1;
(statearr_51528_52859[(2)] = inst_51413);

(statearr_51528_52859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (36))){
var inst_51456 = (state_51496[(23)]);
var inst_51460 = cljs.core.chunk_first(inst_51456);
var inst_51461 = cljs.core.chunk_rest(inst_51456);
var inst_51462 = cljs.core.count(inst_51460);
var inst_51438 = inst_51461;
var inst_51439 = inst_51460;
var inst_51440 = inst_51462;
var inst_51441 = (0);
var state_51496__$1 = (function (){var statearr_51529 = state_51496;
(statearr_51529[(19)] = inst_51438);

(statearr_51529[(9)] = inst_51439);

(statearr_51529[(20)] = inst_51440);

(statearr_51529[(10)] = inst_51441);

return statearr_51529;
})();
var statearr_51530_52860 = state_51496__$1;
(statearr_51530_52860[(2)] = null);

(statearr_51530_52860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (41))){
var inst_51456 = (state_51496[(23)]);
var inst_51471 = (state_51496[(2)]);
var inst_51472 = cljs.core.next(inst_51456);
var inst_51438 = inst_51472;
var inst_51439 = null;
var inst_51440 = (0);
var inst_51441 = (0);
var state_51496__$1 = (function (){var statearr_51531 = state_51496;
(statearr_51531[(25)] = inst_51471);

(statearr_51531[(19)] = inst_51438);

(statearr_51531[(9)] = inst_51439);

(statearr_51531[(20)] = inst_51440);

(statearr_51531[(10)] = inst_51441);

return statearr_51531;
})();
var statearr_51532_52861 = state_51496__$1;
(statearr_51532_52861[(2)] = null);

(statearr_51532_52861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (43))){
var state_51496__$1 = state_51496;
var statearr_51533_52862 = state_51496__$1;
(statearr_51533_52862[(2)] = null);

(statearr_51533_52862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (29))){
var inst_51480 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51534_52863 = state_51496__$1;
(statearr_51534_52863[(2)] = inst_51480);

(statearr_51534_52863[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (44))){
var inst_51489 = (state_51496[(2)]);
var state_51496__$1 = (function (){var statearr_51535 = state_51496;
(statearr_51535[(26)] = inst_51489);

return statearr_51535;
})();
var statearr_51536_52864 = state_51496__$1;
(statearr_51536_52864[(2)] = null);

(statearr_51536_52864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (6))){
var inst_51430 = (state_51496[(27)]);
var inst_51429 = cljs.core.deref(cs);
var inst_51430__$1 = cljs.core.keys(inst_51429);
var inst_51431 = cljs.core.count(inst_51430__$1);
var inst_51432 = cljs.core.reset_BANG_(dctr,inst_51431);
var inst_51437 = cljs.core.seq(inst_51430__$1);
var inst_51438 = inst_51437;
var inst_51439 = null;
var inst_51440 = (0);
var inst_51441 = (0);
var state_51496__$1 = (function (){var statearr_51537 = state_51496;
(statearr_51537[(27)] = inst_51430__$1);

(statearr_51537[(28)] = inst_51432);

(statearr_51537[(19)] = inst_51438);

(statearr_51537[(9)] = inst_51439);

(statearr_51537[(20)] = inst_51440);

(statearr_51537[(10)] = inst_51441);

return statearr_51537;
})();
var statearr_51538_52865 = state_51496__$1;
(statearr_51538_52865[(2)] = null);

(statearr_51538_52865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (28))){
var inst_51438 = (state_51496[(19)]);
var inst_51456 = (state_51496[(23)]);
var inst_51456__$1 = cljs.core.seq(inst_51438);
var state_51496__$1 = (function (){var statearr_51539 = state_51496;
(statearr_51539[(23)] = inst_51456__$1);

return statearr_51539;
})();
if(inst_51456__$1){
var statearr_51540_52866 = state_51496__$1;
(statearr_51540_52866[(1)] = (33));

} else {
var statearr_51541_52867 = state_51496__$1;
(statearr_51541_52867[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (25))){
var inst_51441 = (state_51496[(10)]);
var inst_51440 = (state_51496[(20)]);
var inst_51443 = (inst_51441 < inst_51440);
var inst_51444 = inst_51443;
var state_51496__$1 = state_51496;
if(cljs.core.truth_(inst_51444)){
var statearr_51542_52868 = state_51496__$1;
(statearr_51542_52868[(1)] = (27));

} else {
var statearr_51543_52869 = state_51496__$1;
(statearr_51543_52869[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (34))){
var state_51496__$1 = state_51496;
var statearr_51544_52870 = state_51496__$1;
(statearr_51544_52870[(2)] = null);

(statearr_51544_52870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (17))){
var state_51496__$1 = state_51496;
var statearr_51545_52871 = state_51496__$1;
(statearr_51545_52871[(2)] = null);

(statearr_51545_52871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (3))){
var inst_51494 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51496__$1,inst_51494);
} else {
if((state_val_51497 === (12))){
var inst_51425 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51546_52872 = state_51496__$1;
(statearr_51546_52872[(2)] = inst_51425);

(statearr_51546_52872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (2))){
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51496__$1,(4),ch);
} else {
if((state_val_51497 === (23))){
var state_51496__$1 = state_51496;
var statearr_51547_52873 = state_51496__$1;
(statearr_51547_52873[(2)] = null);

(statearr_51547_52873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (35))){
var inst_51478 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51548_52874 = state_51496__$1;
(statearr_51548_52874[(2)] = inst_51478);

(statearr_51548_52874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (19))){
var inst_51397 = (state_51496[(7)]);
var inst_51401 = cljs.core.chunk_first(inst_51397);
var inst_51402 = cljs.core.chunk_rest(inst_51397);
var inst_51403 = cljs.core.count(inst_51401);
var inst_51375 = inst_51402;
var inst_51376 = inst_51401;
var inst_51377 = inst_51403;
var inst_51378 = (0);
var state_51496__$1 = (function (){var statearr_51549 = state_51496;
(statearr_51549[(14)] = inst_51375);

(statearr_51549[(15)] = inst_51376);

(statearr_51549[(16)] = inst_51377);

(statearr_51549[(17)] = inst_51378);

return statearr_51549;
})();
var statearr_51550_52875 = state_51496__$1;
(statearr_51550_52875[(2)] = null);

(statearr_51550_52875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (11))){
var inst_51375 = (state_51496[(14)]);
var inst_51397 = (state_51496[(7)]);
var inst_51397__$1 = cljs.core.seq(inst_51375);
var state_51496__$1 = (function (){var statearr_51551 = state_51496;
(statearr_51551[(7)] = inst_51397__$1);

return statearr_51551;
})();
if(inst_51397__$1){
var statearr_51552_52876 = state_51496__$1;
(statearr_51552_52876[(1)] = (16));

} else {
var statearr_51553_52877 = state_51496__$1;
(statearr_51553_52877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (9))){
var inst_51427 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51554_52878 = state_51496__$1;
(statearr_51554_52878[(2)] = inst_51427);

(statearr_51554_52878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (5))){
var inst_51373 = cljs.core.deref(cs);
var inst_51374 = cljs.core.seq(inst_51373);
var inst_51375 = inst_51374;
var inst_51376 = null;
var inst_51377 = (0);
var inst_51378 = (0);
var state_51496__$1 = (function (){var statearr_51555 = state_51496;
(statearr_51555[(14)] = inst_51375);

(statearr_51555[(15)] = inst_51376);

(statearr_51555[(16)] = inst_51377);

(statearr_51555[(17)] = inst_51378);

return statearr_51555;
})();
var statearr_51556_52879 = state_51496__$1;
(statearr_51556_52879[(2)] = null);

(statearr_51556_52879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (14))){
var state_51496__$1 = state_51496;
var statearr_51557_52880 = state_51496__$1;
(statearr_51557_52880[(2)] = null);

(statearr_51557_52880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (45))){
var inst_51486 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51558_52881 = state_51496__$1;
(statearr_51558_52881[(2)] = inst_51486);

(statearr_51558_52881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (26))){
var inst_51430 = (state_51496[(27)]);
var inst_51482 = (state_51496[(2)]);
var inst_51483 = cljs.core.seq(inst_51430);
var state_51496__$1 = (function (){var statearr_51559 = state_51496;
(statearr_51559[(29)] = inst_51482);

return statearr_51559;
})();
if(inst_51483){
var statearr_51560_52882 = state_51496__$1;
(statearr_51560_52882[(1)] = (42));

} else {
var statearr_51561_52883 = state_51496__$1;
(statearr_51561_52883[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (16))){
var inst_51397 = (state_51496[(7)]);
var inst_51399 = cljs.core.chunked_seq_QMARK_(inst_51397);
var state_51496__$1 = state_51496;
if(inst_51399){
var statearr_51562_52884 = state_51496__$1;
(statearr_51562_52884[(1)] = (19));

} else {
var statearr_51563_52885 = state_51496__$1;
(statearr_51563_52885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (38))){
var inst_51475 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51564_52886 = state_51496__$1;
(statearr_51564_52886[(2)] = inst_51475);

(statearr_51564_52886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (30))){
var state_51496__$1 = state_51496;
var statearr_51565_52887 = state_51496__$1;
(statearr_51565_52887[(2)] = null);

(statearr_51565_52887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (10))){
var inst_51376 = (state_51496[(15)]);
var inst_51378 = (state_51496[(17)]);
var inst_51386 = cljs.core._nth(inst_51376,inst_51378);
var inst_51387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51386,(0),null);
var inst_51388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51386,(1),null);
var state_51496__$1 = (function (){var statearr_51566 = state_51496;
(statearr_51566[(24)] = inst_51387);

return statearr_51566;
})();
if(cljs.core.truth_(inst_51388)){
var statearr_51567_52888 = state_51496__$1;
(statearr_51567_52888[(1)] = (13));

} else {
var statearr_51568_52889 = state_51496__$1;
(statearr_51568_52889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (18))){
var inst_51423 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51569_52890 = state_51496__$1;
(statearr_51569_52890[(2)] = inst_51423);

(statearr_51569_52890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (42))){
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51496__$1,(45),dchan);
} else {
if((state_val_51497 === (37))){
var inst_51456 = (state_51496[(23)]);
var inst_51465 = (state_51496[(22)]);
var inst_51366 = (state_51496[(12)]);
var inst_51465__$1 = cljs.core.first(inst_51456);
var inst_51466 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51465__$1,inst_51366,done);
var state_51496__$1 = (function (){var statearr_51570 = state_51496;
(statearr_51570[(22)] = inst_51465__$1);

return statearr_51570;
})();
if(cljs.core.truth_(inst_51466)){
var statearr_51571_52891 = state_51496__$1;
(statearr_51571_52891[(1)] = (39));

} else {
var statearr_51572_52892 = state_51496__$1;
(statearr_51572_52892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (8))){
var inst_51378 = (state_51496[(17)]);
var inst_51377 = (state_51496[(16)]);
var inst_51380 = (inst_51378 < inst_51377);
var inst_51381 = inst_51380;
var state_51496__$1 = state_51496;
if(cljs.core.truth_(inst_51381)){
var statearr_51573_52893 = state_51496__$1;
(statearr_51573_52893[(1)] = (10));

} else {
var statearr_51574_52894 = state_51496__$1;
(statearr_51574_52894[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__50857__auto__ = null;
var cljs$core$async$mult_$_state_machine__50857__auto____0 = (function (){
var statearr_51575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51575[(0)] = cljs$core$async$mult_$_state_machine__50857__auto__);

(statearr_51575[(1)] = (1));

return statearr_51575;
});
var cljs$core$async$mult_$_state_machine__50857__auto____1 = (function (state_51496){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51496);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51576){var ex__50860__auto__ = e51576;
var statearr_51577_52895 = state_51496;
(statearr_51577_52895[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51496[(4)]))){
var statearr_51578_52896 = state_51496;
(statearr_51578_52896[(1)] = cljs.core.first((state_51496[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52897 = state_51496;
state_51496 = G__52897;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50857__auto__ = function(state_51496){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50857__auto____1.call(this,state_51496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50857__auto____0;
cljs$core$async$mult_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50857__auto____1;
return cljs$core$async$mult_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51579 = f__50893__auto__();
(statearr_51579[(6)] = c__50892__auto___52839);

return statearr_51579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51581 = arguments.length;
switch (G__51581) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52899 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52899(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52900 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52900(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52901 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52901(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52902 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52902(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52903 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52903(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52904 = arguments.length;
var i__4737__auto___52905 = (0);
while(true){
if((i__4737__auto___52905 < len__4736__auto___52904)){
args__4742__auto__.push((arguments[i__4737__auto___52905]));

var G__52906 = (i__4737__auto___52905 + (1));
i__4737__auto___52905 = G__52906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51586){
var map__51587 = p__51586;
var map__51587__$1 = (((((!((map__51587 == null))))?(((((map__51587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51587):map__51587);
var opts = map__51587__$1;
var statearr_51589_52907 = state;
(statearr_51589_52907[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51590_52908 = state;
(statearr_51590_52908[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51591_52909 = state;
(statearr_51591_52909[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51582){
var G__51583 = cljs.core.first(seq51582);
var seq51582__$1 = cljs.core.next(seq51582);
var G__51584 = cljs.core.first(seq51582__$1);
var seq51582__$2 = cljs.core.next(seq51582__$1);
var G__51585 = cljs.core.first(seq51582__$2);
var seq51582__$3 = cljs.core.next(seq51582__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51583,G__51584,G__51585,seq51582__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51592 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51593){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51593 = meta51593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51594,meta51593__$1){
var self__ = this;
var _51594__$1 = this;
return (new cljs.core.async.t_cljs$core$async51592(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51593__$1));
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51594){
var self__ = this;
var _51594__$1 = this;
return self__.meta51593;
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51593","meta51593",-478092088,null)], null);
}));

(cljs.core.async.t_cljs$core$async51592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51592");

(cljs.core.async.t_cljs$core$async51592.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51592.
 */
cljs.core.async.__GT_t_cljs$core$async51592 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51593){
return (new cljs.core.async.t_cljs$core$async51592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51593));
});

}

return (new cljs.core.async.t_cljs$core$async51592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50892__auto___52910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51696){
var state_val_51697 = (state_51696[(1)]);
if((state_val_51697 === (7))){
var inst_51611 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
var statearr_51698_52911 = state_51696__$1;
(statearr_51698_52911[(2)] = inst_51611);

(statearr_51698_52911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (20))){
var inst_51623 = (state_51696[(7)]);
var state_51696__$1 = state_51696;
var statearr_51699_52912 = state_51696__$1;
(statearr_51699_52912[(2)] = inst_51623);

(statearr_51699_52912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (27))){
var state_51696__$1 = state_51696;
var statearr_51700_52913 = state_51696__$1;
(statearr_51700_52913[(2)] = null);

(statearr_51700_52913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (1))){
var inst_51598 = (state_51696[(8)]);
var inst_51598__$1 = calc_state();
var inst_51600 = (inst_51598__$1 == null);
var inst_51601 = cljs.core.not(inst_51600);
var state_51696__$1 = (function (){var statearr_51701 = state_51696;
(statearr_51701[(8)] = inst_51598__$1);

return statearr_51701;
})();
if(inst_51601){
var statearr_51702_52914 = state_51696__$1;
(statearr_51702_52914[(1)] = (2));

} else {
var statearr_51703_52915 = state_51696__$1;
(statearr_51703_52915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (24))){
var inst_51647 = (state_51696[(9)]);
var inst_51656 = (state_51696[(10)]);
var inst_51670 = (state_51696[(11)]);
var inst_51670__$1 = (inst_51647.cljs$core$IFn$_invoke$arity$1 ? inst_51647.cljs$core$IFn$_invoke$arity$1(inst_51656) : inst_51647.call(null,inst_51656));
var state_51696__$1 = (function (){var statearr_51704 = state_51696;
(statearr_51704[(11)] = inst_51670__$1);

return statearr_51704;
})();
if(cljs.core.truth_(inst_51670__$1)){
var statearr_51705_52916 = state_51696__$1;
(statearr_51705_52916[(1)] = (29));

} else {
var statearr_51706_52917 = state_51696__$1;
(statearr_51706_52917[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (4))){
var inst_51614 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51614)){
var statearr_51707_52918 = state_51696__$1;
(statearr_51707_52918[(1)] = (8));

} else {
var statearr_51708_52919 = state_51696__$1;
(statearr_51708_52919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (15))){
var inst_51641 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51641)){
var statearr_51709_52920 = state_51696__$1;
(statearr_51709_52920[(1)] = (19));

} else {
var statearr_51710_52921 = state_51696__$1;
(statearr_51710_52921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (21))){
var inst_51646 = (state_51696[(12)]);
var inst_51646__$1 = (state_51696[(2)]);
var inst_51647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51646__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51646__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51646__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51696__$1 = (function (){var statearr_51711 = state_51696;
(statearr_51711[(12)] = inst_51646__$1);

(statearr_51711[(9)] = inst_51647);

(statearr_51711[(13)] = inst_51648);

return statearr_51711;
})();
return cljs.core.async.ioc_alts_BANG_(state_51696__$1,(22),inst_51649);
} else {
if((state_val_51697 === (31))){
var inst_51678 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51678)){
var statearr_51712_52922 = state_51696__$1;
(statearr_51712_52922[(1)] = (32));

} else {
var statearr_51713_52923 = state_51696__$1;
(statearr_51713_52923[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (32))){
var inst_51655 = (state_51696[(14)]);
var state_51696__$1 = state_51696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51696__$1,(35),out,inst_51655);
} else {
if((state_val_51697 === (33))){
var inst_51646 = (state_51696[(12)]);
var inst_51623 = inst_51646;
var state_51696__$1 = (function (){var statearr_51714 = state_51696;
(statearr_51714[(7)] = inst_51623);

return statearr_51714;
})();
var statearr_51715_52924 = state_51696__$1;
(statearr_51715_52924[(2)] = null);

(statearr_51715_52924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (13))){
var inst_51623 = (state_51696[(7)]);
var inst_51630 = inst_51623.cljs$lang$protocol_mask$partition0$;
var inst_51631 = (inst_51630 & (64));
var inst_51632 = inst_51623.cljs$core$ISeq$;
var inst_51633 = (cljs.core.PROTOCOL_SENTINEL === inst_51632);
var inst_51634 = ((inst_51631) || (inst_51633));
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51634)){
var statearr_51716_52925 = state_51696__$1;
(statearr_51716_52925[(1)] = (16));

} else {
var statearr_51717_52926 = state_51696__$1;
(statearr_51717_52926[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (22))){
var inst_51655 = (state_51696[(14)]);
var inst_51656 = (state_51696[(10)]);
var inst_51654 = (state_51696[(2)]);
var inst_51655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51654,(0),null);
var inst_51656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51654,(1),null);
var inst_51657 = (inst_51655__$1 == null);
var inst_51658 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51656__$1,change);
var inst_51659 = ((inst_51657) || (inst_51658));
var state_51696__$1 = (function (){var statearr_51718 = state_51696;
(statearr_51718[(14)] = inst_51655__$1);

(statearr_51718[(10)] = inst_51656__$1);

return statearr_51718;
})();
if(cljs.core.truth_(inst_51659)){
var statearr_51719_52927 = state_51696__$1;
(statearr_51719_52927[(1)] = (23));

} else {
var statearr_51720_52928 = state_51696__$1;
(statearr_51720_52928[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (36))){
var inst_51646 = (state_51696[(12)]);
var inst_51623 = inst_51646;
var state_51696__$1 = (function (){var statearr_51721 = state_51696;
(statearr_51721[(7)] = inst_51623);

return statearr_51721;
})();
var statearr_51722_52929 = state_51696__$1;
(statearr_51722_52929[(2)] = null);

(statearr_51722_52929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (29))){
var inst_51670 = (state_51696[(11)]);
var state_51696__$1 = state_51696;
var statearr_51723_52930 = state_51696__$1;
(statearr_51723_52930[(2)] = inst_51670);

(statearr_51723_52930[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (6))){
var state_51696__$1 = state_51696;
var statearr_51724_52931 = state_51696__$1;
(statearr_51724_52931[(2)] = false);

(statearr_51724_52931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (28))){
var inst_51666 = (state_51696[(2)]);
var inst_51667 = calc_state();
var inst_51623 = inst_51667;
var state_51696__$1 = (function (){var statearr_51725 = state_51696;
(statearr_51725[(15)] = inst_51666);

(statearr_51725[(7)] = inst_51623);

return statearr_51725;
})();
var statearr_51726_52932 = state_51696__$1;
(statearr_51726_52932[(2)] = null);

(statearr_51726_52932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (25))){
var inst_51692 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
var statearr_51727_52933 = state_51696__$1;
(statearr_51727_52933[(2)] = inst_51692);

(statearr_51727_52933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (34))){
var inst_51690 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
var statearr_51728_52934 = state_51696__$1;
(statearr_51728_52934[(2)] = inst_51690);

(statearr_51728_52934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (17))){
var state_51696__$1 = state_51696;
var statearr_51729_52935 = state_51696__$1;
(statearr_51729_52935[(2)] = false);

(statearr_51729_52935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (3))){
var state_51696__$1 = state_51696;
var statearr_51730_52936 = state_51696__$1;
(statearr_51730_52936[(2)] = false);

(statearr_51730_52936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (12))){
var inst_51694 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51696__$1,inst_51694);
} else {
if((state_val_51697 === (2))){
var inst_51598 = (state_51696[(8)]);
var inst_51603 = inst_51598.cljs$lang$protocol_mask$partition0$;
var inst_51604 = (inst_51603 & (64));
var inst_51605 = inst_51598.cljs$core$ISeq$;
var inst_51606 = (cljs.core.PROTOCOL_SENTINEL === inst_51605);
var inst_51607 = ((inst_51604) || (inst_51606));
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51607)){
var statearr_51731_52937 = state_51696__$1;
(statearr_51731_52937[(1)] = (5));

} else {
var statearr_51732_52938 = state_51696__$1;
(statearr_51732_52938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (23))){
var inst_51655 = (state_51696[(14)]);
var inst_51661 = (inst_51655 == null);
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51661)){
var statearr_51733_52939 = state_51696__$1;
(statearr_51733_52939[(1)] = (26));

} else {
var statearr_51734_52940 = state_51696__$1;
(statearr_51734_52940[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (35))){
var inst_51681 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
if(cljs.core.truth_(inst_51681)){
var statearr_51735_52941 = state_51696__$1;
(statearr_51735_52941[(1)] = (36));

} else {
var statearr_51736_52942 = state_51696__$1;
(statearr_51736_52942[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (19))){
var inst_51623 = (state_51696[(7)]);
var inst_51643 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51623);
var state_51696__$1 = state_51696;
var statearr_51737_52943 = state_51696__$1;
(statearr_51737_52943[(2)] = inst_51643);

(statearr_51737_52943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (11))){
var inst_51623 = (state_51696[(7)]);
var inst_51627 = (inst_51623 == null);
var inst_51628 = cljs.core.not(inst_51627);
var state_51696__$1 = state_51696;
if(inst_51628){
var statearr_51738_52944 = state_51696__$1;
(statearr_51738_52944[(1)] = (13));

} else {
var statearr_51739_52945 = state_51696__$1;
(statearr_51739_52945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (9))){
var inst_51598 = (state_51696[(8)]);
var state_51696__$1 = state_51696;
var statearr_51740_52946 = state_51696__$1;
(statearr_51740_52946[(2)] = inst_51598);

(statearr_51740_52946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (5))){
var state_51696__$1 = state_51696;
var statearr_51741_52947 = state_51696__$1;
(statearr_51741_52947[(2)] = true);

(statearr_51741_52947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (14))){
var state_51696__$1 = state_51696;
var statearr_51742_52948 = state_51696__$1;
(statearr_51742_52948[(2)] = false);

(statearr_51742_52948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (26))){
var inst_51656 = (state_51696[(10)]);
var inst_51663 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51656);
var state_51696__$1 = state_51696;
var statearr_51743_52949 = state_51696__$1;
(statearr_51743_52949[(2)] = inst_51663);

(statearr_51743_52949[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (16))){
var state_51696__$1 = state_51696;
var statearr_51744_52950 = state_51696__$1;
(statearr_51744_52950[(2)] = true);

(statearr_51744_52950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (38))){
var inst_51686 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
var statearr_51745_52951 = state_51696__$1;
(statearr_51745_52951[(2)] = inst_51686);

(statearr_51745_52951[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (30))){
var inst_51647 = (state_51696[(9)]);
var inst_51648 = (state_51696[(13)]);
var inst_51656 = (state_51696[(10)]);
var inst_51673 = cljs.core.empty_QMARK_(inst_51647);
var inst_51674 = (inst_51648.cljs$core$IFn$_invoke$arity$1 ? inst_51648.cljs$core$IFn$_invoke$arity$1(inst_51656) : inst_51648.call(null,inst_51656));
var inst_51675 = cljs.core.not(inst_51674);
var inst_51676 = ((inst_51673) && (inst_51675));
var state_51696__$1 = state_51696;
var statearr_51746_52952 = state_51696__$1;
(statearr_51746_52952[(2)] = inst_51676);

(statearr_51746_52952[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (10))){
var inst_51598 = (state_51696[(8)]);
var inst_51619 = (state_51696[(2)]);
var inst_51620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51619,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51619,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51619,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51623 = inst_51598;
var state_51696__$1 = (function (){var statearr_51747 = state_51696;
(statearr_51747[(16)] = inst_51620);

(statearr_51747[(17)] = inst_51621);

(statearr_51747[(18)] = inst_51622);

(statearr_51747[(7)] = inst_51623);

return statearr_51747;
})();
var statearr_51748_52953 = state_51696__$1;
(statearr_51748_52953[(2)] = null);

(statearr_51748_52953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (18))){
var inst_51638 = (state_51696[(2)]);
var state_51696__$1 = state_51696;
var statearr_51749_52954 = state_51696__$1;
(statearr_51749_52954[(2)] = inst_51638);

(statearr_51749_52954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (37))){
var state_51696__$1 = state_51696;
var statearr_51750_52955 = state_51696__$1;
(statearr_51750_52955[(2)] = null);

(statearr_51750_52955[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51697 === (8))){
var inst_51598 = (state_51696[(8)]);
var inst_51616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51598);
var state_51696__$1 = state_51696;
var statearr_51751_52956 = state_51696__$1;
(statearr_51751_52956[(2)] = inst_51616);

(statearr_51751_52956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__50857__auto__ = null;
var cljs$core$async$mix_$_state_machine__50857__auto____0 = (function (){
var statearr_51752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51752[(0)] = cljs$core$async$mix_$_state_machine__50857__auto__);

(statearr_51752[(1)] = (1));

return statearr_51752;
});
var cljs$core$async$mix_$_state_machine__50857__auto____1 = (function (state_51696){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51696);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51753){var ex__50860__auto__ = e51753;
var statearr_51754_52957 = state_51696;
(statearr_51754_52957[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51696[(4)]))){
var statearr_51755_52958 = state_51696;
(statearr_51755_52958[(1)] = cljs.core.first((state_51696[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52959 = state_51696;
state_51696 = G__52959;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50857__auto__ = function(state_51696){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50857__auto____1.call(this,state_51696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50857__auto____0;
cljs$core$async$mix_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50857__auto____1;
return cljs$core$async$mix_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51756 = f__50893__auto__();
(statearr_51756[(6)] = c__50892__auto___52910);

return statearr_51756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52960 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52960(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52961 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52961(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52962 = (function() {
var G__52963 = null;
var G__52963__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52963__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52963 = function(p,v){
switch(arguments.length){
case 1:
return G__52963__1.call(this,p);
case 2:
return G__52963__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52963.cljs$core$IFn$_invoke$arity$1 = G__52963__1;
G__52963.cljs$core$IFn$_invoke$arity$2 = G__52963__2;
return G__52963;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51758 = arguments.length;
switch (G__51758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52962(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52962(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51761 = arguments.length;
switch (G__51761) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51759_SHARP_){
if(cljs.core.truth_((p1__51759_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51759_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51759_SHARP_.call(null,topic)))){
return p1__51759_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51759_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51763 = meta51763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51764,meta51763__$1){
var self__ = this;
var _51764__$1 = this;
return (new cljs.core.async.t_cljs$core$async51762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51763__$1));
}));

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51764){
var self__ = this;
var _51764__$1 = this;
return self__.meta51763;
}));

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51763","meta51763",951077921,null)], null);
}));

(cljs.core.async.t_cljs$core$async51762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51762");

(cljs.core.async.t_cljs$core$async51762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51762.
 */
cljs.core.async.__GT_t_cljs$core$async51762 = (function cljs$core$async$__GT_t_cljs$core$async51762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51763){
return (new cljs.core.async.t_cljs$core$async51762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51763));
});

}

return (new cljs.core.async.t_cljs$core$async51762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50892__auto___52966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51836){
var state_val_51837 = (state_51836[(1)]);
if((state_val_51837 === (7))){
var inst_51832 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
var statearr_51838_52967 = state_51836__$1;
(statearr_51838_52967[(2)] = inst_51832);

(statearr_51838_52967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (20))){
var state_51836__$1 = state_51836;
var statearr_51839_52968 = state_51836__$1;
(statearr_51839_52968[(2)] = null);

(statearr_51839_52968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (1))){
var state_51836__$1 = state_51836;
var statearr_51840_52969 = state_51836__$1;
(statearr_51840_52969[(2)] = null);

(statearr_51840_52969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (24))){
var inst_51815 = (state_51836[(7)]);
var inst_51824 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51815);
var state_51836__$1 = state_51836;
var statearr_51841_52970 = state_51836__$1;
(statearr_51841_52970[(2)] = inst_51824);

(statearr_51841_52970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (4))){
var inst_51767 = (state_51836[(8)]);
var inst_51767__$1 = (state_51836[(2)]);
var inst_51768 = (inst_51767__$1 == null);
var state_51836__$1 = (function (){var statearr_51842 = state_51836;
(statearr_51842[(8)] = inst_51767__$1);

return statearr_51842;
})();
if(cljs.core.truth_(inst_51768)){
var statearr_51843_52971 = state_51836__$1;
(statearr_51843_52971[(1)] = (5));

} else {
var statearr_51844_52972 = state_51836__$1;
(statearr_51844_52972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (15))){
var inst_51809 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
var statearr_51845_52973 = state_51836__$1;
(statearr_51845_52973[(2)] = inst_51809);

(statearr_51845_52973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (21))){
var inst_51829 = (state_51836[(2)]);
var state_51836__$1 = (function (){var statearr_51846 = state_51836;
(statearr_51846[(9)] = inst_51829);

return statearr_51846;
})();
var statearr_51847_52974 = state_51836__$1;
(statearr_51847_52974[(2)] = null);

(statearr_51847_52974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (13))){
var inst_51791 = (state_51836[(10)]);
var inst_51793 = cljs.core.chunked_seq_QMARK_(inst_51791);
var state_51836__$1 = state_51836;
if(inst_51793){
var statearr_51848_52975 = state_51836__$1;
(statearr_51848_52975[(1)] = (16));

} else {
var statearr_51849_52976 = state_51836__$1;
(statearr_51849_52976[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (22))){
var inst_51821 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
if(cljs.core.truth_(inst_51821)){
var statearr_51850_52977 = state_51836__$1;
(statearr_51850_52977[(1)] = (23));

} else {
var statearr_51851_52978 = state_51836__$1;
(statearr_51851_52978[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (6))){
var inst_51767 = (state_51836[(8)]);
var inst_51815 = (state_51836[(7)]);
var inst_51817 = (state_51836[(11)]);
var inst_51815__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51767) : topic_fn.call(null,inst_51767));
var inst_51816 = cljs.core.deref(mults);
var inst_51817__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51816,inst_51815__$1);
var state_51836__$1 = (function (){var statearr_51852 = state_51836;
(statearr_51852[(7)] = inst_51815__$1);

(statearr_51852[(11)] = inst_51817__$1);

return statearr_51852;
})();
if(cljs.core.truth_(inst_51817__$1)){
var statearr_51853_52979 = state_51836__$1;
(statearr_51853_52979[(1)] = (19));

} else {
var statearr_51854_52980 = state_51836__$1;
(statearr_51854_52980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (25))){
var inst_51826 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
var statearr_51855_52981 = state_51836__$1;
(statearr_51855_52981[(2)] = inst_51826);

(statearr_51855_52981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (17))){
var inst_51791 = (state_51836[(10)]);
var inst_51800 = cljs.core.first(inst_51791);
var inst_51801 = cljs.core.async.muxch_STAR_(inst_51800);
var inst_51802 = cljs.core.async.close_BANG_(inst_51801);
var inst_51803 = cljs.core.next(inst_51791);
var inst_51777 = inst_51803;
var inst_51778 = null;
var inst_51779 = (0);
var inst_51780 = (0);
var state_51836__$1 = (function (){var statearr_51856 = state_51836;
(statearr_51856[(12)] = inst_51802);

(statearr_51856[(13)] = inst_51777);

(statearr_51856[(14)] = inst_51778);

(statearr_51856[(15)] = inst_51779);

(statearr_51856[(16)] = inst_51780);

return statearr_51856;
})();
var statearr_51857_52982 = state_51836__$1;
(statearr_51857_52982[(2)] = null);

(statearr_51857_52982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (3))){
var inst_51834 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51836__$1,inst_51834);
} else {
if((state_val_51837 === (12))){
var inst_51811 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
var statearr_51858_52983 = state_51836__$1;
(statearr_51858_52983[(2)] = inst_51811);

(statearr_51858_52983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (2))){
var state_51836__$1 = state_51836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51836__$1,(4),ch);
} else {
if((state_val_51837 === (23))){
var state_51836__$1 = state_51836;
var statearr_51859_52984 = state_51836__$1;
(statearr_51859_52984[(2)] = null);

(statearr_51859_52984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (19))){
var inst_51817 = (state_51836[(11)]);
var inst_51767 = (state_51836[(8)]);
var inst_51819 = cljs.core.async.muxch_STAR_(inst_51817);
var state_51836__$1 = state_51836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51836__$1,(22),inst_51819,inst_51767);
} else {
if((state_val_51837 === (11))){
var inst_51777 = (state_51836[(13)]);
var inst_51791 = (state_51836[(10)]);
var inst_51791__$1 = cljs.core.seq(inst_51777);
var state_51836__$1 = (function (){var statearr_51860 = state_51836;
(statearr_51860[(10)] = inst_51791__$1);

return statearr_51860;
})();
if(inst_51791__$1){
var statearr_51861_52985 = state_51836__$1;
(statearr_51861_52985[(1)] = (13));

} else {
var statearr_51862_52986 = state_51836__$1;
(statearr_51862_52986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (9))){
var inst_51813 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
var statearr_51863_52987 = state_51836__$1;
(statearr_51863_52987[(2)] = inst_51813);

(statearr_51863_52987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (5))){
var inst_51774 = cljs.core.deref(mults);
var inst_51775 = cljs.core.vals(inst_51774);
var inst_51776 = cljs.core.seq(inst_51775);
var inst_51777 = inst_51776;
var inst_51778 = null;
var inst_51779 = (0);
var inst_51780 = (0);
var state_51836__$1 = (function (){var statearr_51864 = state_51836;
(statearr_51864[(13)] = inst_51777);

(statearr_51864[(14)] = inst_51778);

(statearr_51864[(15)] = inst_51779);

(statearr_51864[(16)] = inst_51780);

return statearr_51864;
})();
var statearr_51865_52988 = state_51836__$1;
(statearr_51865_52988[(2)] = null);

(statearr_51865_52988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (14))){
var state_51836__$1 = state_51836;
var statearr_51869_52989 = state_51836__$1;
(statearr_51869_52989[(2)] = null);

(statearr_51869_52989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (16))){
var inst_51791 = (state_51836[(10)]);
var inst_51795 = cljs.core.chunk_first(inst_51791);
var inst_51796 = cljs.core.chunk_rest(inst_51791);
var inst_51797 = cljs.core.count(inst_51795);
var inst_51777 = inst_51796;
var inst_51778 = inst_51795;
var inst_51779 = inst_51797;
var inst_51780 = (0);
var state_51836__$1 = (function (){var statearr_51870 = state_51836;
(statearr_51870[(13)] = inst_51777);

(statearr_51870[(14)] = inst_51778);

(statearr_51870[(15)] = inst_51779);

(statearr_51870[(16)] = inst_51780);

return statearr_51870;
})();
var statearr_51871_52990 = state_51836__$1;
(statearr_51871_52990[(2)] = null);

(statearr_51871_52990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (10))){
var inst_51778 = (state_51836[(14)]);
var inst_51780 = (state_51836[(16)]);
var inst_51777 = (state_51836[(13)]);
var inst_51779 = (state_51836[(15)]);
var inst_51785 = cljs.core._nth(inst_51778,inst_51780);
var inst_51786 = cljs.core.async.muxch_STAR_(inst_51785);
var inst_51787 = cljs.core.async.close_BANG_(inst_51786);
var inst_51788 = (inst_51780 + (1));
var tmp51866 = inst_51778;
var tmp51867 = inst_51779;
var tmp51868 = inst_51777;
var inst_51777__$1 = tmp51868;
var inst_51778__$1 = tmp51866;
var inst_51779__$1 = tmp51867;
var inst_51780__$1 = inst_51788;
var state_51836__$1 = (function (){var statearr_51872 = state_51836;
(statearr_51872[(17)] = inst_51787);

(statearr_51872[(13)] = inst_51777__$1);

(statearr_51872[(14)] = inst_51778__$1);

(statearr_51872[(15)] = inst_51779__$1);

(statearr_51872[(16)] = inst_51780__$1);

return statearr_51872;
})();
var statearr_51873_52991 = state_51836__$1;
(statearr_51873_52991[(2)] = null);

(statearr_51873_52991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (18))){
var inst_51806 = (state_51836[(2)]);
var state_51836__$1 = state_51836;
var statearr_51874_52992 = state_51836__$1;
(statearr_51874_52992[(2)] = inst_51806);

(statearr_51874_52992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51837 === (8))){
var inst_51780 = (state_51836[(16)]);
var inst_51779 = (state_51836[(15)]);
var inst_51782 = (inst_51780 < inst_51779);
var inst_51783 = inst_51782;
var state_51836__$1 = state_51836;
if(cljs.core.truth_(inst_51783)){
var statearr_51875_52993 = state_51836__$1;
(statearr_51875_52993[(1)] = (10));

} else {
var statearr_51876_52994 = state_51836__$1;
(statearr_51876_52994[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_51877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51877[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_51877[(1)] = (1));

return statearr_51877;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_51836){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51836);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51878){var ex__50860__auto__ = e51878;
var statearr_51879_52995 = state_51836;
(statearr_51879_52995[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51836[(4)]))){
var statearr_51880_52996 = state_51836;
(statearr_51880_52996[(1)] = cljs.core.first((state_51836[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52997 = state_51836;
state_51836 = G__52997;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_51836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_51836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51881 = f__50893__auto__();
(statearr_51881[(6)] = c__50892__auto___52966);

return statearr_51881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51883 = arguments.length;
switch (G__51883) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51885 = arguments.length;
switch (G__51885) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51887 = arguments.length;
switch (G__51887) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__50892__auto___53001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51930){
var state_val_51931 = (state_51930[(1)]);
if((state_val_51931 === (7))){
var state_51930__$1 = state_51930;
var statearr_51932_53002 = state_51930__$1;
(statearr_51932_53002[(2)] = null);

(statearr_51932_53002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (1))){
var state_51930__$1 = state_51930;
var statearr_51933_53003 = state_51930__$1;
(statearr_51933_53003[(2)] = null);

(statearr_51933_53003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (4))){
var inst_51891 = (state_51930[(7)]);
var inst_51890 = (state_51930[(8)]);
var inst_51893 = (inst_51891 < inst_51890);
var state_51930__$1 = state_51930;
if(cljs.core.truth_(inst_51893)){
var statearr_51934_53004 = state_51930__$1;
(statearr_51934_53004[(1)] = (6));

} else {
var statearr_51935_53005 = state_51930__$1;
(statearr_51935_53005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (15))){
var inst_51916 = (state_51930[(9)]);
var inst_51921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51916);
var state_51930__$1 = state_51930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51930__$1,(17),out,inst_51921);
} else {
if((state_val_51931 === (13))){
var inst_51916 = (state_51930[(9)]);
var inst_51916__$1 = (state_51930[(2)]);
var inst_51917 = cljs.core.some(cljs.core.nil_QMARK_,inst_51916__$1);
var state_51930__$1 = (function (){var statearr_51936 = state_51930;
(statearr_51936[(9)] = inst_51916__$1);

return statearr_51936;
})();
if(cljs.core.truth_(inst_51917)){
var statearr_51937_53006 = state_51930__$1;
(statearr_51937_53006[(1)] = (14));

} else {
var statearr_51938_53007 = state_51930__$1;
(statearr_51938_53007[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (6))){
var state_51930__$1 = state_51930;
var statearr_51939_53008 = state_51930__$1;
(statearr_51939_53008[(2)] = null);

(statearr_51939_53008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (17))){
var inst_51923 = (state_51930[(2)]);
var state_51930__$1 = (function (){var statearr_51941 = state_51930;
(statearr_51941[(10)] = inst_51923);

return statearr_51941;
})();
var statearr_51942_53009 = state_51930__$1;
(statearr_51942_53009[(2)] = null);

(statearr_51942_53009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (3))){
var inst_51928 = (state_51930[(2)]);
var state_51930__$1 = state_51930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51930__$1,inst_51928);
} else {
if((state_val_51931 === (12))){
var _ = (function (){var statearr_51943 = state_51930;
(statearr_51943[(4)] = cljs.core.rest((state_51930[(4)])));

return statearr_51943;
})();
var state_51930__$1 = state_51930;
var ex51940 = (state_51930__$1[(2)]);
var statearr_51944_53010 = state_51930__$1;
(statearr_51944_53010[(5)] = ex51940);


if((ex51940 instanceof Object)){
var statearr_51945_53011 = state_51930__$1;
(statearr_51945_53011[(1)] = (11));

(statearr_51945_53011[(5)] = null);

} else {
throw ex51940;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (2))){
var inst_51889 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51890 = cnt;
var inst_51891 = (0);
var state_51930__$1 = (function (){var statearr_51946 = state_51930;
(statearr_51946[(11)] = inst_51889);

(statearr_51946[(8)] = inst_51890);

(statearr_51946[(7)] = inst_51891);

return statearr_51946;
})();
var statearr_51947_53012 = state_51930__$1;
(statearr_51947_53012[(2)] = null);

(statearr_51947_53012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (11))){
var inst_51895 = (state_51930[(2)]);
var inst_51896 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51930__$1 = (function (){var statearr_51948 = state_51930;
(statearr_51948[(12)] = inst_51895);

return statearr_51948;
})();
var statearr_51949_53013 = state_51930__$1;
(statearr_51949_53013[(2)] = inst_51896);

(statearr_51949_53013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (9))){
var inst_51891 = (state_51930[(7)]);
var _ = (function (){var statearr_51950 = state_51930;
(statearr_51950[(4)] = cljs.core.cons((12),(state_51930[(4)])));

return statearr_51950;
})();
var inst_51902 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51891) : chs__$1.call(null,inst_51891));
var inst_51903 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51891) : done.call(null,inst_51891));
var inst_51904 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51902,inst_51903);
var ___$1 = (function (){var statearr_51951 = state_51930;
(statearr_51951[(4)] = cljs.core.rest((state_51930[(4)])));

return statearr_51951;
})();
var state_51930__$1 = state_51930;
var statearr_51952_53014 = state_51930__$1;
(statearr_51952_53014[(2)] = inst_51904);

(statearr_51952_53014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (5))){
var inst_51914 = (state_51930[(2)]);
var state_51930__$1 = (function (){var statearr_51953 = state_51930;
(statearr_51953[(13)] = inst_51914);

return statearr_51953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51930__$1,(13),dchan);
} else {
if((state_val_51931 === (14))){
var inst_51919 = cljs.core.async.close_BANG_(out);
var state_51930__$1 = state_51930;
var statearr_51954_53015 = state_51930__$1;
(statearr_51954_53015[(2)] = inst_51919);

(statearr_51954_53015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (16))){
var inst_51926 = (state_51930[(2)]);
var state_51930__$1 = state_51930;
var statearr_51955_53016 = state_51930__$1;
(statearr_51955_53016[(2)] = inst_51926);

(statearr_51955_53016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (10))){
var inst_51891 = (state_51930[(7)]);
var inst_51907 = (state_51930[(2)]);
var inst_51908 = (inst_51891 + (1));
var inst_51891__$1 = inst_51908;
var state_51930__$1 = (function (){var statearr_51956 = state_51930;
(statearr_51956[(14)] = inst_51907);

(statearr_51956[(7)] = inst_51891__$1);

return statearr_51956;
})();
var statearr_51957_53017 = state_51930__$1;
(statearr_51957_53017[(2)] = null);

(statearr_51957_53017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51931 === (8))){
var inst_51912 = (state_51930[(2)]);
var state_51930__$1 = state_51930;
var statearr_51958_53018 = state_51930__$1;
(statearr_51958_53018[(2)] = inst_51912);

(statearr_51958_53018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_51959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51959[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_51959[(1)] = (1));

return statearr_51959;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_51930){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51930);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e51960){var ex__50860__auto__ = e51960;
var statearr_51961_53019 = state_51930;
(statearr_51961_53019[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51930[(4)]))){
var statearr_51962_53020 = state_51930;
(statearr_51962_53020[(1)] = cljs.core.first((state_51930[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53021 = state_51930;
state_51930 = G__53021;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_51930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_51930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_51963 = f__50893__auto__();
(statearr_51963[(6)] = c__50892__auto___53001);

return statearr_51963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51966 = arguments.length;
switch (G__51966) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50892__auto___53023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_51998){
var state_val_51999 = (state_51998[(1)]);
if((state_val_51999 === (7))){
var inst_51977 = (state_51998[(7)]);
var inst_51978 = (state_51998[(8)]);
var inst_51977__$1 = (state_51998[(2)]);
var inst_51978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51977__$1,(0),null);
var inst_51979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51977__$1,(1),null);
var inst_51980 = (inst_51978__$1 == null);
var state_51998__$1 = (function (){var statearr_52000 = state_51998;
(statearr_52000[(7)] = inst_51977__$1);

(statearr_52000[(8)] = inst_51978__$1);

(statearr_52000[(9)] = inst_51979);

return statearr_52000;
})();
if(cljs.core.truth_(inst_51980)){
var statearr_52001_53024 = state_51998__$1;
(statearr_52001_53024[(1)] = (8));

} else {
var statearr_52002_53025 = state_51998__$1;
(statearr_52002_53025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (1))){
var inst_51967 = cljs.core.vec(chs);
var inst_51968 = inst_51967;
var state_51998__$1 = (function (){var statearr_52003 = state_51998;
(statearr_52003[(10)] = inst_51968);

return statearr_52003;
})();
var statearr_52004_53026 = state_51998__$1;
(statearr_52004_53026[(2)] = null);

(statearr_52004_53026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (4))){
var inst_51968 = (state_51998[(10)]);
var state_51998__$1 = state_51998;
return cljs.core.async.ioc_alts_BANG_(state_51998__$1,(7),inst_51968);
} else {
if((state_val_51999 === (6))){
var inst_51994 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
var statearr_52005_53027 = state_51998__$1;
(statearr_52005_53027[(2)] = inst_51994);

(statearr_52005_53027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (3))){
var inst_51996 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51998__$1,inst_51996);
} else {
if((state_val_51999 === (2))){
var inst_51968 = (state_51998[(10)]);
var inst_51970 = cljs.core.count(inst_51968);
var inst_51971 = (inst_51970 > (0));
var state_51998__$1 = state_51998;
if(cljs.core.truth_(inst_51971)){
var statearr_52007_53028 = state_51998__$1;
(statearr_52007_53028[(1)] = (4));

} else {
var statearr_52008_53029 = state_51998__$1;
(statearr_52008_53029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (11))){
var inst_51968 = (state_51998[(10)]);
var inst_51987 = (state_51998[(2)]);
var tmp52006 = inst_51968;
var inst_51968__$1 = tmp52006;
var state_51998__$1 = (function (){var statearr_52009 = state_51998;
(statearr_52009[(11)] = inst_51987);

(statearr_52009[(10)] = inst_51968__$1);

return statearr_52009;
})();
var statearr_52010_53030 = state_51998__$1;
(statearr_52010_53030[(2)] = null);

(statearr_52010_53030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (9))){
var inst_51978 = (state_51998[(8)]);
var state_51998__$1 = state_51998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51998__$1,(11),out,inst_51978);
} else {
if((state_val_51999 === (5))){
var inst_51992 = cljs.core.async.close_BANG_(out);
var state_51998__$1 = state_51998;
var statearr_52011_53031 = state_51998__$1;
(statearr_52011_53031[(2)] = inst_51992);

(statearr_52011_53031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (10))){
var inst_51990 = (state_51998[(2)]);
var state_51998__$1 = state_51998;
var statearr_52012_53032 = state_51998__$1;
(statearr_52012_53032[(2)] = inst_51990);

(statearr_52012_53032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51999 === (8))){
var inst_51968 = (state_51998[(10)]);
var inst_51977 = (state_51998[(7)]);
var inst_51978 = (state_51998[(8)]);
var inst_51979 = (state_51998[(9)]);
var inst_51982 = (function (){var cs = inst_51968;
var vec__51973 = inst_51977;
var v = inst_51978;
var c = inst_51979;
return (function (p1__51964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51964_SHARP_);
});
})();
var inst_51983 = cljs.core.filterv(inst_51982,inst_51968);
var inst_51968__$1 = inst_51983;
var state_51998__$1 = (function (){var statearr_52013 = state_51998;
(statearr_52013[(10)] = inst_51968__$1);

return statearr_52013;
})();
var statearr_52014_53033 = state_51998__$1;
(statearr_52014_53033[(2)] = null);

(statearr_52014_53033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_52015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52015[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_52015[(1)] = (1));

return statearr_52015;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_51998){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_51998);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52016){var ex__50860__auto__ = e52016;
var statearr_52017_53034 = state_51998;
(statearr_52017_53034[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_51998[(4)]))){
var statearr_52018_53035 = state_51998;
(statearr_52018_53035[(1)] = cljs.core.first((state_51998[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53036 = state_51998;
state_51998 = G__53036;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_51998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_51998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52019 = f__50893__auto__();
(statearr_52019[(6)] = c__50892__auto___53023);

return statearr_52019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52021 = arguments.length;
switch (G__52021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50892__auto___53038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52045){
var state_val_52046 = (state_52045[(1)]);
if((state_val_52046 === (7))){
var inst_52027 = (state_52045[(7)]);
var inst_52027__$1 = (state_52045[(2)]);
var inst_52028 = (inst_52027__$1 == null);
var inst_52029 = cljs.core.not(inst_52028);
var state_52045__$1 = (function (){var statearr_52047 = state_52045;
(statearr_52047[(7)] = inst_52027__$1);

return statearr_52047;
})();
if(inst_52029){
var statearr_52048_53039 = state_52045__$1;
(statearr_52048_53039[(1)] = (8));

} else {
var statearr_52049_53040 = state_52045__$1;
(statearr_52049_53040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (1))){
var inst_52022 = (0);
var state_52045__$1 = (function (){var statearr_52050 = state_52045;
(statearr_52050[(8)] = inst_52022);

return statearr_52050;
})();
var statearr_52051_53041 = state_52045__$1;
(statearr_52051_53041[(2)] = null);

(statearr_52051_53041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (4))){
var state_52045__$1 = state_52045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52045__$1,(7),ch);
} else {
if((state_val_52046 === (6))){
var inst_52040 = (state_52045[(2)]);
var state_52045__$1 = state_52045;
var statearr_52052_53042 = state_52045__$1;
(statearr_52052_53042[(2)] = inst_52040);

(statearr_52052_53042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (3))){
var inst_52042 = (state_52045[(2)]);
var inst_52043 = cljs.core.async.close_BANG_(out);
var state_52045__$1 = (function (){var statearr_52053 = state_52045;
(statearr_52053[(9)] = inst_52042);

return statearr_52053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52045__$1,inst_52043);
} else {
if((state_val_52046 === (2))){
var inst_52022 = (state_52045[(8)]);
var inst_52024 = (inst_52022 < n);
var state_52045__$1 = state_52045;
if(cljs.core.truth_(inst_52024)){
var statearr_52054_53043 = state_52045__$1;
(statearr_52054_53043[(1)] = (4));

} else {
var statearr_52055_53044 = state_52045__$1;
(statearr_52055_53044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (11))){
var inst_52022 = (state_52045[(8)]);
var inst_52032 = (state_52045[(2)]);
var inst_52033 = (inst_52022 + (1));
var inst_52022__$1 = inst_52033;
var state_52045__$1 = (function (){var statearr_52056 = state_52045;
(statearr_52056[(10)] = inst_52032);

(statearr_52056[(8)] = inst_52022__$1);

return statearr_52056;
})();
var statearr_52057_53045 = state_52045__$1;
(statearr_52057_53045[(2)] = null);

(statearr_52057_53045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (9))){
var state_52045__$1 = state_52045;
var statearr_52058_53046 = state_52045__$1;
(statearr_52058_53046[(2)] = null);

(statearr_52058_53046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (5))){
var state_52045__$1 = state_52045;
var statearr_52059_53047 = state_52045__$1;
(statearr_52059_53047[(2)] = null);

(statearr_52059_53047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (10))){
var inst_52037 = (state_52045[(2)]);
var state_52045__$1 = state_52045;
var statearr_52060_53048 = state_52045__$1;
(statearr_52060_53048[(2)] = inst_52037);

(statearr_52060_53048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (8))){
var inst_52027 = (state_52045[(7)]);
var state_52045__$1 = state_52045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52045__$1,(11),out,inst_52027);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_52061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52061[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_52061[(1)] = (1));

return statearr_52061;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_52045){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52045);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52062){var ex__50860__auto__ = e52062;
var statearr_52063_53049 = state_52045;
(statearr_52063_53049[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52045[(4)]))){
var statearr_52064_53050 = state_52045;
(statearr_52064_53050[(1)] = cljs.core.first((state_52045[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53051 = state_52045;
state_52045 = G__53051;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_52045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_52045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52065 = f__50893__auto__();
(statearr_52065[(6)] = c__50892__auto___53038);

return statearr_52065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52067 = (function (f,ch,meta52068){
this.f = f;
this.ch = ch;
this.meta52068 = meta52068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52069,meta52068__$1){
var self__ = this;
var _52069__$1 = this;
return (new cljs.core.async.t_cljs$core$async52067(self__.f,self__.ch,meta52068__$1));
}));

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52069){
var self__ = this;
var _52069__$1 = this;
return self__.meta52068;
}));

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52070 = (function (f,ch,meta52068,_,fn1,meta52071){
this.f = f;
this.ch = ch;
this.meta52068 = meta52068;
this._ = _;
this.fn1 = fn1;
this.meta52071 = meta52071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52072,meta52071__$1){
var self__ = this;
var _52072__$1 = this;
return (new cljs.core.async.t_cljs$core$async52070(self__.f,self__.ch,self__.meta52068,self__._,self__.fn1,meta52071__$1));
}));

(cljs.core.async.t_cljs$core$async52070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52072){
var self__ = this;
var _52072__$1 = this;
return self__.meta52071;
}));

(cljs.core.async.t_cljs$core$async52070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52066_SHARP_){
var G__52073 = (((p1__52066_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52066_SHARP_) : self__.f.call(null,p1__52066_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52073) : f1.call(null,G__52073));
});
}));

(cljs.core.async.t_cljs$core$async52070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52068","meta52068",539724519,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52067","cljs.core.async/t_cljs$core$async52067",-249980903,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52071","meta52071",1900939631,null)], null);
}));

(cljs.core.async.t_cljs$core$async52070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52070");

(cljs.core.async.t_cljs$core$async52070.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52070.
 */
cljs.core.async.__GT_t_cljs$core$async52070 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52070(f__$1,ch__$1,meta52068__$1,___$2,fn1__$1,meta52071){
return (new cljs.core.async.t_cljs$core$async52070(f__$1,ch__$1,meta52068__$1,___$2,fn1__$1,meta52071));
});

}

return (new cljs.core.async.t_cljs$core$async52070(self__.f,self__.ch,self__.meta52068,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52074 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52074) : self__.f.call(null,G__52074));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52068","meta52068",539724519,null)], null);
}));

(cljs.core.async.t_cljs$core$async52067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52067");

(cljs.core.async.t_cljs$core$async52067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52067.
 */
cljs.core.async.__GT_t_cljs$core$async52067 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52067(f__$1,ch__$1,meta52068){
return (new cljs.core.async.t_cljs$core$async52067(f__$1,ch__$1,meta52068));
});

}

return (new cljs.core.async.t_cljs$core$async52067(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52075 = (function (f,ch,meta52076){
this.f = f;
this.ch = ch;
this.meta52076 = meta52076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52077,meta52076__$1){
var self__ = this;
var _52077__$1 = this;
return (new cljs.core.async.t_cljs$core$async52075(self__.f,self__.ch,meta52076__$1));
}));

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52077){
var self__ = this;
var _52077__$1 = this;
return self__.meta52076;
}));

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52075.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52076","meta52076",-1668618402,null)], null);
}));

(cljs.core.async.t_cljs$core$async52075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52075");

(cljs.core.async.t_cljs$core$async52075.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52075.
 */
cljs.core.async.__GT_t_cljs$core$async52075 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52075(f__$1,ch__$1,meta52076){
return (new cljs.core.async.t_cljs$core$async52075(f__$1,ch__$1,meta52076));
});

}

return (new cljs.core.async.t_cljs$core$async52075(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52078 = (function (p,ch,meta52079){
this.p = p;
this.ch = ch;
this.meta52079 = meta52079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52080,meta52079__$1){
var self__ = this;
var _52080__$1 = this;
return (new cljs.core.async.t_cljs$core$async52078(self__.p,self__.ch,meta52079__$1));
}));

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52080){
var self__ = this;
var _52080__$1 = this;
return self__.meta52079;
}));

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52079","meta52079",-447794265,null)], null);
}));

(cljs.core.async.t_cljs$core$async52078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52078");

(cljs.core.async.t_cljs$core$async52078.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52078.
 */
cljs.core.async.__GT_t_cljs$core$async52078 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52078(p__$1,ch__$1,meta52079){
return (new cljs.core.async.t_cljs$core$async52078(p__$1,ch__$1,meta52079));
});

}

return (new cljs.core.async.t_cljs$core$async52078(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52082 = arguments.length;
switch (G__52082) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50892__auto___53064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52103){
var state_val_52104 = (state_52103[(1)]);
if((state_val_52104 === (7))){
var inst_52099 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
var statearr_52105_53065 = state_52103__$1;
(statearr_52105_53065[(2)] = inst_52099);

(statearr_52105_53065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (1))){
var state_52103__$1 = state_52103;
var statearr_52106_53066 = state_52103__$1;
(statearr_52106_53066[(2)] = null);

(statearr_52106_53066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (4))){
var inst_52085 = (state_52103[(7)]);
var inst_52085__$1 = (state_52103[(2)]);
var inst_52086 = (inst_52085__$1 == null);
var state_52103__$1 = (function (){var statearr_52107 = state_52103;
(statearr_52107[(7)] = inst_52085__$1);

return statearr_52107;
})();
if(cljs.core.truth_(inst_52086)){
var statearr_52108_53067 = state_52103__$1;
(statearr_52108_53067[(1)] = (5));

} else {
var statearr_52109_53068 = state_52103__$1;
(statearr_52109_53068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (6))){
var inst_52085 = (state_52103[(7)]);
var inst_52090 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52085) : p.call(null,inst_52085));
var state_52103__$1 = state_52103;
if(cljs.core.truth_(inst_52090)){
var statearr_52110_53069 = state_52103__$1;
(statearr_52110_53069[(1)] = (8));

} else {
var statearr_52111_53070 = state_52103__$1;
(statearr_52111_53070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (3))){
var inst_52101 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52103__$1,inst_52101);
} else {
if((state_val_52104 === (2))){
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52103__$1,(4),ch);
} else {
if((state_val_52104 === (11))){
var inst_52093 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
var statearr_52112_53071 = state_52103__$1;
(statearr_52112_53071[(2)] = inst_52093);

(statearr_52112_53071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (9))){
var state_52103__$1 = state_52103;
var statearr_52113_53072 = state_52103__$1;
(statearr_52113_53072[(2)] = null);

(statearr_52113_53072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (5))){
var inst_52088 = cljs.core.async.close_BANG_(out);
var state_52103__$1 = state_52103;
var statearr_52114_53073 = state_52103__$1;
(statearr_52114_53073[(2)] = inst_52088);

(statearr_52114_53073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (10))){
var inst_52096 = (state_52103[(2)]);
var state_52103__$1 = (function (){var statearr_52115 = state_52103;
(statearr_52115[(8)] = inst_52096);

return statearr_52115;
})();
var statearr_52116_53074 = state_52103__$1;
(statearr_52116_53074[(2)] = null);

(statearr_52116_53074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (8))){
var inst_52085 = (state_52103[(7)]);
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52103__$1,(11),out,inst_52085);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_52117 = [null,null,null,null,null,null,null,null,null];
(statearr_52117[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_52117[(1)] = (1));

return statearr_52117;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_52103){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52103);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52118){var ex__50860__auto__ = e52118;
var statearr_52119_53075 = state_52103;
(statearr_52119_53075[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52103[(4)]))){
var statearr_52120_53076 = state_52103;
(statearr_52120_53076[(1)] = cljs.core.first((state_52103[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53077 = state_52103;
state_52103 = G__53077;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_52103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_52103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52121 = f__50893__auto__();
(statearr_52121[(6)] = c__50892__auto___53064);

return statearr_52121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52123 = arguments.length;
switch (G__52123) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52185){
var state_val_52186 = (state_52185[(1)]);
if((state_val_52186 === (7))){
var inst_52181 = (state_52185[(2)]);
var state_52185__$1 = state_52185;
var statearr_52187_53086 = state_52185__$1;
(statearr_52187_53086[(2)] = inst_52181);

(statearr_52187_53086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (20))){
var inst_52151 = (state_52185[(7)]);
var inst_52162 = (state_52185[(2)]);
var inst_52163 = cljs.core.next(inst_52151);
var inst_52137 = inst_52163;
var inst_52138 = null;
var inst_52139 = (0);
var inst_52140 = (0);
var state_52185__$1 = (function (){var statearr_52188 = state_52185;
(statearr_52188[(8)] = inst_52162);

(statearr_52188[(9)] = inst_52137);

(statearr_52188[(10)] = inst_52138);

(statearr_52188[(11)] = inst_52139);

(statearr_52188[(12)] = inst_52140);

return statearr_52188;
})();
var statearr_52189_53087 = state_52185__$1;
(statearr_52189_53087[(2)] = null);

(statearr_52189_53087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (1))){
var state_52185__$1 = state_52185;
var statearr_52190_53088 = state_52185__$1;
(statearr_52190_53088[(2)] = null);

(statearr_52190_53088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (4))){
var inst_52126 = (state_52185[(13)]);
var inst_52126__$1 = (state_52185[(2)]);
var inst_52127 = (inst_52126__$1 == null);
var state_52185__$1 = (function (){var statearr_52191 = state_52185;
(statearr_52191[(13)] = inst_52126__$1);

return statearr_52191;
})();
if(cljs.core.truth_(inst_52127)){
var statearr_52192_53089 = state_52185__$1;
(statearr_52192_53089[(1)] = (5));

} else {
var statearr_52193_53090 = state_52185__$1;
(statearr_52193_53090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (15))){
var state_52185__$1 = state_52185;
var statearr_52197_53091 = state_52185__$1;
(statearr_52197_53091[(2)] = null);

(statearr_52197_53091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (21))){
var state_52185__$1 = state_52185;
var statearr_52198_53092 = state_52185__$1;
(statearr_52198_53092[(2)] = null);

(statearr_52198_53092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (13))){
var inst_52140 = (state_52185[(12)]);
var inst_52137 = (state_52185[(9)]);
var inst_52138 = (state_52185[(10)]);
var inst_52139 = (state_52185[(11)]);
var inst_52147 = (state_52185[(2)]);
var inst_52148 = (inst_52140 + (1));
var tmp52194 = inst_52139;
var tmp52195 = inst_52137;
var tmp52196 = inst_52138;
var inst_52137__$1 = tmp52195;
var inst_52138__$1 = tmp52196;
var inst_52139__$1 = tmp52194;
var inst_52140__$1 = inst_52148;
var state_52185__$1 = (function (){var statearr_52199 = state_52185;
(statearr_52199[(14)] = inst_52147);

(statearr_52199[(9)] = inst_52137__$1);

(statearr_52199[(10)] = inst_52138__$1);

(statearr_52199[(11)] = inst_52139__$1);

(statearr_52199[(12)] = inst_52140__$1);

return statearr_52199;
})();
var statearr_52200_53094 = state_52185__$1;
(statearr_52200_53094[(2)] = null);

(statearr_52200_53094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (22))){
var state_52185__$1 = state_52185;
var statearr_52201_53095 = state_52185__$1;
(statearr_52201_53095[(2)] = null);

(statearr_52201_53095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (6))){
var inst_52126 = (state_52185[(13)]);
var inst_52135 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52126) : f.call(null,inst_52126));
var inst_52136 = cljs.core.seq(inst_52135);
var inst_52137 = inst_52136;
var inst_52138 = null;
var inst_52139 = (0);
var inst_52140 = (0);
var state_52185__$1 = (function (){var statearr_52202 = state_52185;
(statearr_52202[(9)] = inst_52137);

(statearr_52202[(10)] = inst_52138);

(statearr_52202[(11)] = inst_52139);

(statearr_52202[(12)] = inst_52140);

return statearr_52202;
})();
var statearr_52203_53102 = state_52185__$1;
(statearr_52203_53102[(2)] = null);

(statearr_52203_53102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (17))){
var inst_52151 = (state_52185[(7)]);
var inst_52155 = cljs.core.chunk_first(inst_52151);
var inst_52156 = cljs.core.chunk_rest(inst_52151);
var inst_52157 = cljs.core.count(inst_52155);
var inst_52137 = inst_52156;
var inst_52138 = inst_52155;
var inst_52139 = inst_52157;
var inst_52140 = (0);
var state_52185__$1 = (function (){var statearr_52204 = state_52185;
(statearr_52204[(9)] = inst_52137);

(statearr_52204[(10)] = inst_52138);

(statearr_52204[(11)] = inst_52139);

(statearr_52204[(12)] = inst_52140);

return statearr_52204;
})();
var statearr_52205_53105 = state_52185__$1;
(statearr_52205_53105[(2)] = null);

(statearr_52205_53105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (3))){
var inst_52183 = (state_52185[(2)]);
var state_52185__$1 = state_52185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52185__$1,inst_52183);
} else {
if((state_val_52186 === (12))){
var inst_52171 = (state_52185[(2)]);
var state_52185__$1 = state_52185;
var statearr_52206_53108 = state_52185__$1;
(statearr_52206_53108[(2)] = inst_52171);

(statearr_52206_53108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (2))){
var state_52185__$1 = state_52185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52185__$1,(4),in$);
} else {
if((state_val_52186 === (23))){
var inst_52179 = (state_52185[(2)]);
var state_52185__$1 = state_52185;
var statearr_52207_53109 = state_52185__$1;
(statearr_52207_53109[(2)] = inst_52179);

(statearr_52207_53109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (19))){
var inst_52166 = (state_52185[(2)]);
var state_52185__$1 = state_52185;
var statearr_52208_53110 = state_52185__$1;
(statearr_52208_53110[(2)] = inst_52166);

(statearr_52208_53110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (11))){
var inst_52137 = (state_52185[(9)]);
var inst_52151 = (state_52185[(7)]);
var inst_52151__$1 = cljs.core.seq(inst_52137);
var state_52185__$1 = (function (){var statearr_52209 = state_52185;
(statearr_52209[(7)] = inst_52151__$1);

return statearr_52209;
})();
if(inst_52151__$1){
var statearr_52210_53114 = state_52185__$1;
(statearr_52210_53114[(1)] = (14));

} else {
var statearr_52211_53115 = state_52185__$1;
(statearr_52211_53115[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (9))){
var inst_52173 = (state_52185[(2)]);
var inst_52174 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52185__$1 = (function (){var statearr_52212 = state_52185;
(statearr_52212[(15)] = inst_52173);

return statearr_52212;
})();
if(cljs.core.truth_(inst_52174)){
var statearr_52213_53117 = state_52185__$1;
(statearr_52213_53117[(1)] = (21));

} else {
var statearr_52214_53119 = state_52185__$1;
(statearr_52214_53119[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (5))){
var inst_52129 = cljs.core.async.close_BANG_(out);
var state_52185__$1 = state_52185;
var statearr_52215_53121 = state_52185__$1;
(statearr_52215_53121[(2)] = inst_52129);

(statearr_52215_53121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (14))){
var inst_52151 = (state_52185[(7)]);
var inst_52153 = cljs.core.chunked_seq_QMARK_(inst_52151);
var state_52185__$1 = state_52185;
if(inst_52153){
var statearr_52216_53126 = state_52185__$1;
(statearr_52216_53126[(1)] = (17));

} else {
var statearr_52217_53127 = state_52185__$1;
(statearr_52217_53127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (16))){
var inst_52169 = (state_52185[(2)]);
var state_52185__$1 = state_52185;
var statearr_52218_53128 = state_52185__$1;
(statearr_52218_53128[(2)] = inst_52169);

(statearr_52218_53128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52186 === (10))){
var inst_52138 = (state_52185[(10)]);
var inst_52140 = (state_52185[(12)]);
var inst_52145 = cljs.core._nth(inst_52138,inst_52140);
var state_52185__$1 = state_52185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52185__$1,(13),out,inst_52145);
} else {
if((state_val_52186 === (18))){
var inst_52151 = (state_52185[(7)]);
var inst_52160 = cljs.core.first(inst_52151);
var state_52185__$1 = state_52185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52185__$1,(20),out,inst_52160);
} else {
if((state_val_52186 === (8))){
var inst_52140 = (state_52185[(12)]);
var inst_52139 = (state_52185[(11)]);
var inst_52142 = (inst_52140 < inst_52139);
var inst_52143 = inst_52142;
var state_52185__$1 = state_52185;
if(cljs.core.truth_(inst_52143)){
var statearr_52219_53129 = state_52185__$1;
(statearr_52219_53129[(1)] = (10));

} else {
var statearr_52220_53130 = state_52185__$1;
(statearr_52220_53130[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50857__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_52221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50857__auto__);

(statearr_52221[(1)] = (1));

return statearr_52221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50857__auto____1 = (function (state_52185){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52185);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52222){var ex__50860__auto__ = e52222;
var statearr_52223_53131 = state_52185;
(statearr_52223_53131[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52185[(4)]))){
var statearr_52224_53132 = state_52185;
(statearr_52224_53132[(1)] = cljs.core.first((state_52185[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53133 = state_52185;
state_52185 = G__53133;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50857__auto__ = function(state_52185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50857__auto____1.call(this,state_52185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50857__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50857__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52225 = f__50893__auto__();
(statearr_52225[(6)] = c__50892__auto__);

return statearr_52225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52227 = arguments.length;
switch (G__52227) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52229 = arguments.length;
switch (G__52229) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52231 = arguments.length;
switch (G__52231) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50892__auto___53140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52255){
var state_val_52256 = (state_52255[(1)]);
if((state_val_52256 === (7))){
var inst_52250 = (state_52255[(2)]);
var state_52255__$1 = state_52255;
var statearr_52257_53141 = state_52255__$1;
(statearr_52257_53141[(2)] = inst_52250);

(statearr_52257_53141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (1))){
var inst_52232 = null;
var state_52255__$1 = (function (){var statearr_52258 = state_52255;
(statearr_52258[(7)] = inst_52232);

return statearr_52258;
})();
var statearr_52259_53154 = state_52255__$1;
(statearr_52259_53154[(2)] = null);

(statearr_52259_53154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (4))){
var inst_52235 = (state_52255[(8)]);
var inst_52235__$1 = (state_52255[(2)]);
var inst_52236 = (inst_52235__$1 == null);
var inst_52237 = cljs.core.not(inst_52236);
var state_52255__$1 = (function (){var statearr_52260 = state_52255;
(statearr_52260[(8)] = inst_52235__$1);

return statearr_52260;
})();
if(inst_52237){
var statearr_52261_53155 = state_52255__$1;
(statearr_52261_53155[(1)] = (5));

} else {
var statearr_52262_53156 = state_52255__$1;
(statearr_52262_53156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (6))){
var state_52255__$1 = state_52255;
var statearr_52263_53157 = state_52255__$1;
(statearr_52263_53157[(2)] = null);

(statearr_52263_53157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (3))){
var inst_52252 = (state_52255[(2)]);
var inst_52253 = cljs.core.async.close_BANG_(out);
var state_52255__$1 = (function (){var statearr_52264 = state_52255;
(statearr_52264[(9)] = inst_52252);

return statearr_52264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52255__$1,inst_52253);
} else {
if((state_val_52256 === (2))){
var state_52255__$1 = state_52255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52255__$1,(4),ch);
} else {
if((state_val_52256 === (11))){
var inst_52235 = (state_52255[(8)]);
var inst_52244 = (state_52255[(2)]);
var inst_52232 = inst_52235;
var state_52255__$1 = (function (){var statearr_52265 = state_52255;
(statearr_52265[(10)] = inst_52244);

(statearr_52265[(7)] = inst_52232);

return statearr_52265;
})();
var statearr_52266_53158 = state_52255__$1;
(statearr_52266_53158[(2)] = null);

(statearr_52266_53158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (9))){
var inst_52235 = (state_52255[(8)]);
var state_52255__$1 = state_52255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52255__$1,(11),out,inst_52235);
} else {
if((state_val_52256 === (5))){
var inst_52235 = (state_52255[(8)]);
var inst_52232 = (state_52255[(7)]);
var inst_52239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52235,inst_52232);
var state_52255__$1 = state_52255;
if(inst_52239){
var statearr_52268_53159 = state_52255__$1;
(statearr_52268_53159[(1)] = (8));

} else {
var statearr_52269_53160 = state_52255__$1;
(statearr_52269_53160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (10))){
var inst_52247 = (state_52255[(2)]);
var state_52255__$1 = state_52255;
var statearr_52270_53161 = state_52255__$1;
(statearr_52270_53161[(2)] = inst_52247);

(statearr_52270_53161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (8))){
var inst_52232 = (state_52255[(7)]);
var tmp52267 = inst_52232;
var inst_52232__$1 = tmp52267;
var state_52255__$1 = (function (){var statearr_52271 = state_52255;
(statearr_52271[(7)] = inst_52232__$1);

return statearr_52271;
})();
var statearr_52272_53163 = state_52255__$1;
(statearr_52272_53163[(2)] = null);

(statearr_52272_53163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_52273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52273[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_52273[(1)] = (1));

return statearr_52273;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_52255){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52255);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52274){var ex__50860__auto__ = e52274;
var statearr_52275_53178 = state_52255;
(statearr_52275_53178[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52255[(4)]))){
var statearr_52276_53179 = state_52255;
(statearr_52276_53179[(1)] = cljs.core.first((state_52255[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53180 = state_52255;
state_52255 = G__53180;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_52255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_52255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52277 = f__50893__auto__();
(statearr_52277[(6)] = c__50892__auto___53140);

return statearr_52277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52279 = arguments.length;
switch (G__52279) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50892__auto___53182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52317){
var state_val_52318 = (state_52317[(1)]);
if((state_val_52318 === (7))){
var inst_52313 = (state_52317[(2)]);
var state_52317__$1 = state_52317;
var statearr_52319_53183 = state_52317__$1;
(statearr_52319_53183[(2)] = inst_52313);

(statearr_52319_53183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (1))){
var inst_52280 = (new Array(n));
var inst_52281 = inst_52280;
var inst_52282 = (0);
var state_52317__$1 = (function (){var statearr_52320 = state_52317;
(statearr_52320[(7)] = inst_52281);

(statearr_52320[(8)] = inst_52282);

return statearr_52320;
})();
var statearr_52321_53184 = state_52317__$1;
(statearr_52321_53184[(2)] = null);

(statearr_52321_53184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (4))){
var inst_52285 = (state_52317[(9)]);
var inst_52285__$1 = (state_52317[(2)]);
var inst_52286 = (inst_52285__$1 == null);
var inst_52287 = cljs.core.not(inst_52286);
var state_52317__$1 = (function (){var statearr_52322 = state_52317;
(statearr_52322[(9)] = inst_52285__$1);

return statearr_52322;
})();
if(inst_52287){
var statearr_52323_53185 = state_52317__$1;
(statearr_52323_53185[(1)] = (5));

} else {
var statearr_52324_53186 = state_52317__$1;
(statearr_52324_53186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (15))){
var inst_52307 = (state_52317[(2)]);
var state_52317__$1 = state_52317;
var statearr_52325_53187 = state_52317__$1;
(statearr_52325_53187[(2)] = inst_52307);

(statearr_52325_53187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (13))){
var state_52317__$1 = state_52317;
var statearr_52326_53188 = state_52317__$1;
(statearr_52326_53188[(2)] = null);

(statearr_52326_53188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (6))){
var inst_52282 = (state_52317[(8)]);
var inst_52303 = (inst_52282 > (0));
var state_52317__$1 = state_52317;
if(cljs.core.truth_(inst_52303)){
var statearr_52327_53189 = state_52317__$1;
(statearr_52327_53189[(1)] = (12));

} else {
var statearr_52328_53190 = state_52317__$1;
(statearr_52328_53190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (3))){
var inst_52315 = (state_52317[(2)]);
var state_52317__$1 = state_52317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52317__$1,inst_52315);
} else {
if((state_val_52318 === (12))){
var inst_52281 = (state_52317[(7)]);
var inst_52305 = cljs.core.vec(inst_52281);
var state_52317__$1 = state_52317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52317__$1,(15),out,inst_52305);
} else {
if((state_val_52318 === (2))){
var state_52317__$1 = state_52317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52317__$1,(4),ch);
} else {
if((state_val_52318 === (11))){
var inst_52297 = (state_52317[(2)]);
var inst_52298 = (new Array(n));
var inst_52281 = inst_52298;
var inst_52282 = (0);
var state_52317__$1 = (function (){var statearr_52329 = state_52317;
(statearr_52329[(10)] = inst_52297);

(statearr_52329[(7)] = inst_52281);

(statearr_52329[(8)] = inst_52282);

return statearr_52329;
})();
var statearr_52330_53194 = state_52317__$1;
(statearr_52330_53194[(2)] = null);

(statearr_52330_53194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (9))){
var inst_52281 = (state_52317[(7)]);
var inst_52295 = cljs.core.vec(inst_52281);
var state_52317__$1 = state_52317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52317__$1,(11),out,inst_52295);
} else {
if((state_val_52318 === (5))){
var inst_52281 = (state_52317[(7)]);
var inst_52282 = (state_52317[(8)]);
var inst_52285 = (state_52317[(9)]);
var inst_52290 = (state_52317[(11)]);
var inst_52289 = (inst_52281[inst_52282] = inst_52285);
var inst_52290__$1 = (inst_52282 + (1));
var inst_52291 = (inst_52290__$1 < n);
var state_52317__$1 = (function (){var statearr_52331 = state_52317;
(statearr_52331[(12)] = inst_52289);

(statearr_52331[(11)] = inst_52290__$1);

return statearr_52331;
})();
if(cljs.core.truth_(inst_52291)){
var statearr_52332_53197 = state_52317__$1;
(statearr_52332_53197[(1)] = (8));

} else {
var statearr_52333_53198 = state_52317__$1;
(statearr_52333_53198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (14))){
var inst_52310 = (state_52317[(2)]);
var inst_52311 = cljs.core.async.close_BANG_(out);
var state_52317__$1 = (function (){var statearr_52335 = state_52317;
(statearr_52335[(13)] = inst_52310);

return statearr_52335;
})();
var statearr_52336_53199 = state_52317__$1;
(statearr_52336_53199[(2)] = inst_52311);

(statearr_52336_53199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (10))){
var inst_52301 = (state_52317[(2)]);
var state_52317__$1 = state_52317;
var statearr_52337_53200 = state_52317__$1;
(statearr_52337_53200[(2)] = inst_52301);

(statearr_52337_53200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52318 === (8))){
var inst_52281 = (state_52317[(7)]);
var inst_52290 = (state_52317[(11)]);
var tmp52334 = inst_52281;
var inst_52281__$1 = tmp52334;
var inst_52282 = inst_52290;
var state_52317__$1 = (function (){var statearr_52338 = state_52317;
(statearr_52338[(7)] = inst_52281__$1);

(statearr_52338[(8)] = inst_52282);

return statearr_52338;
})();
var statearr_52339_53201 = state_52317__$1;
(statearr_52339_53201[(2)] = null);

(statearr_52339_53201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_52340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52340[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_52340[(1)] = (1));

return statearr_52340;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_52317){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52317);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52341){var ex__50860__auto__ = e52341;
var statearr_52342_53202 = state_52317;
(statearr_52342_53202[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52317[(4)]))){
var statearr_52343_53203 = state_52317;
(statearr_52343_53203[(1)] = cljs.core.first((state_52317[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53204 = state_52317;
state_52317 = G__53204;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_52317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_52317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52344 = f__50893__auto__();
(statearr_52344[(6)] = c__50892__auto___53182);

return statearr_52344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52346 = arguments.length;
switch (G__52346) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50892__auto___53206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_52388){
var state_val_52389 = (state_52388[(1)]);
if((state_val_52389 === (7))){
var inst_52384 = (state_52388[(2)]);
var state_52388__$1 = state_52388;
var statearr_52390_53207 = state_52388__$1;
(statearr_52390_53207[(2)] = inst_52384);

(statearr_52390_53207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (1))){
var inst_52347 = [];
var inst_52348 = inst_52347;
var inst_52349 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52388__$1 = (function (){var statearr_52391 = state_52388;
(statearr_52391[(7)] = inst_52348);

(statearr_52391[(8)] = inst_52349);

return statearr_52391;
})();
var statearr_52392_53208 = state_52388__$1;
(statearr_52392_53208[(2)] = null);

(statearr_52392_53208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (4))){
var inst_52352 = (state_52388[(9)]);
var inst_52352__$1 = (state_52388[(2)]);
var inst_52353 = (inst_52352__$1 == null);
var inst_52354 = cljs.core.not(inst_52353);
var state_52388__$1 = (function (){var statearr_52393 = state_52388;
(statearr_52393[(9)] = inst_52352__$1);

return statearr_52393;
})();
if(inst_52354){
var statearr_52394_53209 = state_52388__$1;
(statearr_52394_53209[(1)] = (5));

} else {
var statearr_52395_53210 = state_52388__$1;
(statearr_52395_53210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (15))){
var inst_52378 = (state_52388[(2)]);
var state_52388__$1 = state_52388;
var statearr_52396_53211 = state_52388__$1;
(statearr_52396_53211[(2)] = inst_52378);

(statearr_52396_53211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (13))){
var state_52388__$1 = state_52388;
var statearr_52397_53212 = state_52388__$1;
(statearr_52397_53212[(2)] = null);

(statearr_52397_53212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (6))){
var inst_52348 = (state_52388[(7)]);
var inst_52373 = inst_52348.length;
var inst_52374 = (inst_52373 > (0));
var state_52388__$1 = state_52388;
if(cljs.core.truth_(inst_52374)){
var statearr_52398_53213 = state_52388__$1;
(statearr_52398_53213[(1)] = (12));

} else {
var statearr_52399_53214 = state_52388__$1;
(statearr_52399_53214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (3))){
var inst_52386 = (state_52388[(2)]);
var state_52388__$1 = state_52388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52388__$1,inst_52386);
} else {
if((state_val_52389 === (12))){
var inst_52348 = (state_52388[(7)]);
var inst_52376 = cljs.core.vec(inst_52348);
var state_52388__$1 = state_52388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52388__$1,(15),out,inst_52376);
} else {
if((state_val_52389 === (2))){
var state_52388__$1 = state_52388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52388__$1,(4),ch);
} else {
if((state_val_52389 === (11))){
var inst_52352 = (state_52388[(9)]);
var inst_52356 = (state_52388[(10)]);
var inst_52366 = (state_52388[(2)]);
var inst_52367 = [];
var inst_52368 = inst_52367.push(inst_52352);
var inst_52348 = inst_52367;
var inst_52349 = inst_52356;
var state_52388__$1 = (function (){var statearr_52400 = state_52388;
(statearr_52400[(11)] = inst_52366);

(statearr_52400[(12)] = inst_52368);

(statearr_52400[(7)] = inst_52348);

(statearr_52400[(8)] = inst_52349);

return statearr_52400;
})();
var statearr_52401_53215 = state_52388__$1;
(statearr_52401_53215[(2)] = null);

(statearr_52401_53215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (9))){
var inst_52348 = (state_52388[(7)]);
var inst_52364 = cljs.core.vec(inst_52348);
var state_52388__$1 = state_52388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52388__$1,(11),out,inst_52364);
} else {
if((state_val_52389 === (5))){
var inst_52352 = (state_52388[(9)]);
var inst_52356 = (state_52388[(10)]);
var inst_52349 = (state_52388[(8)]);
var inst_52356__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52352) : f.call(null,inst_52352));
var inst_52357 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52356__$1,inst_52349);
var inst_52358 = cljs.core.keyword_identical_QMARK_(inst_52349,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52359 = ((inst_52357) || (inst_52358));
var state_52388__$1 = (function (){var statearr_52402 = state_52388;
(statearr_52402[(10)] = inst_52356__$1);

return statearr_52402;
})();
if(cljs.core.truth_(inst_52359)){
var statearr_52403_53216 = state_52388__$1;
(statearr_52403_53216[(1)] = (8));

} else {
var statearr_52404_53217 = state_52388__$1;
(statearr_52404_53217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (14))){
var inst_52381 = (state_52388[(2)]);
var inst_52382 = cljs.core.async.close_BANG_(out);
var state_52388__$1 = (function (){var statearr_52406 = state_52388;
(statearr_52406[(13)] = inst_52381);

return statearr_52406;
})();
var statearr_52407_53218 = state_52388__$1;
(statearr_52407_53218[(2)] = inst_52382);

(statearr_52407_53218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (10))){
var inst_52371 = (state_52388[(2)]);
var state_52388__$1 = state_52388;
var statearr_52408_53219 = state_52388__$1;
(statearr_52408_53219[(2)] = inst_52371);

(statearr_52408_53219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52389 === (8))){
var inst_52348 = (state_52388[(7)]);
var inst_52352 = (state_52388[(9)]);
var inst_52356 = (state_52388[(10)]);
var inst_52361 = inst_52348.push(inst_52352);
var tmp52405 = inst_52348;
var inst_52348__$1 = tmp52405;
var inst_52349 = inst_52356;
var state_52388__$1 = (function (){var statearr_52409 = state_52388;
(statearr_52409[(14)] = inst_52361);

(statearr_52409[(7)] = inst_52348__$1);

(statearr_52409[(8)] = inst_52349);

return statearr_52409;
})();
var statearr_52410_53220 = state_52388__$1;
(statearr_52410_53220[(2)] = null);

(statearr_52410_53220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50857__auto__ = null;
var cljs$core$async$state_machine__50857__auto____0 = (function (){
var statearr_52411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52411[(0)] = cljs$core$async$state_machine__50857__auto__);

(statearr_52411[(1)] = (1));

return statearr_52411;
});
var cljs$core$async$state_machine__50857__auto____1 = (function (state_52388){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_52388);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e52412){var ex__50860__auto__ = e52412;
var statearr_52413_53221 = state_52388;
(statearr_52413_53221[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_52388[(4)]))){
var statearr_52414_53222 = state_52388;
(statearr_52414_53222[(1)] = cljs.core.first((state_52388[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53223 = state_52388;
state_52388 = G__53223;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
cljs$core$async$state_machine__50857__auto__ = function(state_52388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50857__auto____1.call(this,state_52388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50857__auto____0;
cljs$core$async$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50857__auto____1;
return cljs$core$async$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_52415 = f__50893__auto__();
(statearr_52415[(6)] = c__50892__auto___53206);

return statearr_52415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
