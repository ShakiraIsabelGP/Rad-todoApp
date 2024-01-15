goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53564 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_53564(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53565 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_53565(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53265 = coll;
var G__53266 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53265,G__53266) : shadow.dom.lazy_native_coll_seq.call(null,G__53265,G__53266));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__53269 = arguments.length;
switch (G__53269) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__53271 = arguments.length;
switch (G__53271) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__53273 = arguments.length;
switch (G__53273) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__53275 = arguments.length;
switch (G__53275) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__53277 = arguments.length;
switch (G__53277) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53279 = arguments.length;
switch (G__53279) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e53280){if((e53280 instanceof Object)){
var e = e53280;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53280;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__53281 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53282 = null;
var count__53283 = (0);
var i__53284 = (0);
while(true){
if((i__53284 < count__53283)){
var el = chunk__53282.cljs$core$IIndexed$_nth$arity$2(null,i__53284);
var handler_53578__$1 = ((function (seq__53281,chunk__53282,count__53283,i__53284,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53281,chunk__53282,count__53283,i__53284,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53578__$1);


var G__53579 = seq__53281;
var G__53580 = chunk__53282;
var G__53581 = count__53283;
var G__53582 = (i__53284 + (1));
seq__53281 = G__53579;
chunk__53282 = G__53580;
count__53283 = G__53581;
i__53284 = G__53582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53281);
if(temp__5735__auto__){
var seq__53281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53281__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53281__$1);
var G__53583 = cljs.core.chunk_rest(seq__53281__$1);
var G__53584 = c__4556__auto__;
var G__53585 = cljs.core.count(c__4556__auto__);
var G__53586 = (0);
seq__53281 = G__53583;
chunk__53282 = G__53584;
count__53283 = G__53585;
i__53284 = G__53586;
continue;
} else {
var el = cljs.core.first(seq__53281__$1);
var handler_53587__$1 = ((function (seq__53281,chunk__53282,count__53283,i__53284,el,seq__53281__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53281,chunk__53282,count__53283,i__53284,el,seq__53281__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53587__$1);


var G__53588 = cljs.core.next(seq__53281__$1);
var G__53589 = null;
var G__53590 = (0);
var G__53591 = (0);
seq__53281 = G__53588;
chunk__53282 = G__53589;
count__53283 = G__53590;
i__53284 = G__53591;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__53286 = arguments.length;
switch (G__53286) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__53287 = cljs.core.seq(events);
var chunk__53288 = null;
var count__53289 = (0);
var i__53290 = (0);
while(true){
if((i__53290 < count__53289)){
var vec__53297 = chunk__53288.cljs$core$IIndexed$_nth$arity$2(null,i__53290);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53297,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53596 = seq__53287;
var G__53597 = chunk__53288;
var G__53598 = count__53289;
var G__53599 = (i__53290 + (1));
seq__53287 = G__53596;
chunk__53288 = G__53597;
count__53289 = G__53598;
i__53290 = G__53599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53287);
if(temp__5735__auto__){
var seq__53287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53287__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53287__$1);
var G__53607 = cljs.core.chunk_rest(seq__53287__$1);
var G__53608 = c__4556__auto__;
var G__53609 = cljs.core.count(c__4556__auto__);
var G__53610 = (0);
seq__53287 = G__53607;
chunk__53288 = G__53608;
count__53289 = G__53609;
i__53290 = G__53610;
continue;
} else {
var vec__53300 = cljs.core.first(seq__53287__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53300,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53611 = cljs.core.next(seq__53287__$1);
var G__53612 = null;
var G__53613 = (0);
var G__53614 = (0);
seq__53287 = G__53611;
chunk__53288 = G__53612;
count__53289 = G__53613;
i__53290 = G__53614;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__53303 = cljs.core.seq(styles);
var chunk__53304 = null;
var count__53305 = (0);
var i__53306 = (0);
while(true){
if((i__53306 < count__53305)){
var vec__53313 = chunk__53304.cljs$core$IIndexed$_nth$arity$2(null,i__53306);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53313,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53618 = seq__53303;
var G__53619 = chunk__53304;
var G__53620 = count__53305;
var G__53621 = (i__53306 + (1));
seq__53303 = G__53618;
chunk__53304 = G__53619;
count__53305 = G__53620;
i__53306 = G__53621;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53303);
if(temp__5735__auto__){
var seq__53303__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53303__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53303__$1);
var G__53622 = cljs.core.chunk_rest(seq__53303__$1);
var G__53623 = c__4556__auto__;
var G__53624 = cljs.core.count(c__4556__auto__);
var G__53625 = (0);
seq__53303 = G__53622;
chunk__53304 = G__53623;
count__53305 = G__53624;
i__53306 = G__53625;
continue;
} else {
var vec__53316 = cljs.core.first(seq__53303__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53316,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53630 = cljs.core.next(seq__53303__$1);
var G__53631 = null;
var G__53632 = (0);
var G__53633 = (0);
seq__53303 = G__53630;
chunk__53304 = G__53631;
count__53305 = G__53632;
i__53306 = G__53633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__53319_53634 = key;
var G__53319_53635__$1 = (((G__53319_53634 instanceof cljs.core.Keyword))?G__53319_53634.fqn:null);
switch (G__53319_53635__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_53644 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_53644,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_53644,"aria-");
}
})())){
el.setAttribute(ks_53644,value);
} else {
(el[ks_53644] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__53320){
var map__53321 = p__53320;
var map__53321__$1 = (((((!((map__53321 == null))))?(((((map__53321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53321):map__53321);
var props = map__53321__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53321__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__53323 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53323,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53323,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53323,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__53326 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__53326,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__53326;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__53328 = arguments.length;
switch (G__53328) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__53329){
var vec__53330 = p__53329;
var seq__53331 = cljs.core.seq(vec__53330);
var first__53332 = cljs.core.first(seq__53331);
var seq__53331__$1 = cljs.core.next(seq__53331);
var nn = first__53332;
var first__53332__$1 = cljs.core.first(seq__53331__$1);
var seq__53331__$2 = cljs.core.next(seq__53331__$1);
var np = first__53332__$1;
var nc = seq__53331__$2;
var node = vec__53330;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53333 = nn;
var G__53334 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53333,G__53334) : create_fn.call(null,G__53333,G__53334));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53335 = nn;
var G__53336 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53335,G__53336) : create_fn.call(null,G__53335,G__53336));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__53337 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53337,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53337,(1),null);
var seq__53340_53656 = cljs.core.seq(node_children);
var chunk__53341_53657 = null;
var count__53342_53658 = (0);
var i__53343_53659 = (0);
while(true){
if((i__53343_53659 < count__53342_53658)){
var child_struct_53660 = chunk__53341_53657.cljs$core$IIndexed$_nth$arity$2(null,i__53343_53659);
var children_53661 = shadow.dom.dom_node(child_struct_53660);
if(cljs.core.seq_QMARK_(children_53661)){
var seq__53356_53662 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53661));
var chunk__53358_53663 = null;
var count__53359_53664 = (0);
var i__53360_53665 = (0);
while(true){
if((i__53360_53665 < count__53359_53664)){
var child_53666 = chunk__53358_53663.cljs$core$IIndexed$_nth$arity$2(null,i__53360_53665);
if(cljs.core.truth_(child_53666)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53666);


var G__53667 = seq__53356_53662;
var G__53668 = chunk__53358_53663;
var G__53669 = count__53359_53664;
var G__53670 = (i__53360_53665 + (1));
seq__53356_53662 = G__53667;
chunk__53358_53663 = G__53668;
count__53359_53664 = G__53669;
i__53360_53665 = G__53670;
continue;
} else {
var G__53671 = seq__53356_53662;
var G__53672 = chunk__53358_53663;
var G__53673 = count__53359_53664;
var G__53674 = (i__53360_53665 + (1));
seq__53356_53662 = G__53671;
chunk__53358_53663 = G__53672;
count__53359_53664 = G__53673;
i__53360_53665 = G__53674;
continue;
}
} else {
var temp__5735__auto___53688 = cljs.core.seq(seq__53356_53662);
if(temp__5735__auto___53688){
var seq__53356_53689__$1 = temp__5735__auto___53688;
if(cljs.core.chunked_seq_QMARK_(seq__53356_53689__$1)){
var c__4556__auto___53690 = cljs.core.chunk_first(seq__53356_53689__$1);
var G__53691 = cljs.core.chunk_rest(seq__53356_53689__$1);
var G__53692 = c__4556__auto___53690;
var G__53693 = cljs.core.count(c__4556__auto___53690);
var G__53694 = (0);
seq__53356_53662 = G__53691;
chunk__53358_53663 = G__53692;
count__53359_53664 = G__53693;
i__53360_53665 = G__53694;
continue;
} else {
var child_53695 = cljs.core.first(seq__53356_53689__$1);
if(cljs.core.truth_(child_53695)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53695);


var G__53696 = cljs.core.next(seq__53356_53689__$1);
var G__53697 = null;
var G__53698 = (0);
var G__53699 = (0);
seq__53356_53662 = G__53696;
chunk__53358_53663 = G__53697;
count__53359_53664 = G__53698;
i__53360_53665 = G__53699;
continue;
} else {
var G__53700 = cljs.core.next(seq__53356_53689__$1);
var G__53701 = null;
var G__53702 = (0);
var G__53703 = (0);
seq__53356_53662 = G__53700;
chunk__53358_53663 = G__53701;
count__53359_53664 = G__53702;
i__53360_53665 = G__53703;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53661);
}


var G__53704 = seq__53340_53656;
var G__53705 = chunk__53341_53657;
var G__53706 = count__53342_53658;
var G__53707 = (i__53343_53659 + (1));
seq__53340_53656 = G__53704;
chunk__53341_53657 = G__53705;
count__53342_53658 = G__53706;
i__53343_53659 = G__53707;
continue;
} else {
var temp__5735__auto___53708 = cljs.core.seq(seq__53340_53656);
if(temp__5735__auto___53708){
var seq__53340_53709__$1 = temp__5735__auto___53708;
if(cljs.core.chunked_seq_QMARK_(seq__53340_53709__$1)){
var c__4556__auto___53710 = cljs.core.chunk_first(seq__53340_53709__$1);
var G__53711 = cljs.core.chunk_rest(seq__53340_53709__$1);
var G__53712 = c__4556__auto___53710;
var G__53713 = cljs.core.count(c__4556__auto___53710);
var G__53714 = (0);
seq__53340_53656 = G__53711;
chunk__53341_53657 = G__53712;
count__53342_53658 = G__53713;
i__53343_53659 = G__53714;
continue;
} else {
var child_struct_53718 = cljs.core.first(seq__53340_53709__$1);
var children_53719 = shadow.dom.dom_node(child_struct_53718);
if(cljs.core.seq_QMARK_(children_53719)){
var seq__53362_53720 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53719));
var chunk__53364_53721 = null;
var count__53365_53722 = (0);
var i__53366_53723 = (0);
while(true){
if((i__53366_53723 < count__53365_53722)){
var child_53724 = chunk__53364_53721.cljs$core$IIndexed$_nth$arity$2(null,i__53366_53723);
if(cljs.core.truth_(child_53724)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53724);


var G__53725 = seq__53362_53720;
var G__53726 = chunk__53364_53721;
var G__53727 = count__53365_53722;
var G__53728 = (i__53366_53723 + (1));
seq__53362_53720 = G__53725;
chunk__53364_53721 = G__53726;
count__53365_53722 = G__53727;
i__53366_53723 = G__53728;
continue;
} else {
var G__53729 = seq__53362_53720;
var G__53730 = chunk__53364_53721;
var G__53731 = count__53365_53722;
var G__53732 = (i__53366_53723 + (1));
seq__53362_53720 = G__53729;
chunk__53364_53721 = G__53730;
count__53365_53722 = G__53731;
i__53366_53723 = G__53732;
continue;
}
} else {
var temp__5735__auto___53733__$1 = cljs.core.seq(seq__53362_53720);
if(temp__5735__auto___53733__$1){
var seq__53362_53734__$1 = temp__5735__auto___53733__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53362_53734__$1)){
var c__4556__auto___53735 = cljs.core.chunk_first(seq__53362_53734__$1);
var G__53736 = cljs.core.chunk_rest(seq__53362_53734__$1);
var G__53737 = c__4556__auto___53735;
var G__53738 = cljs.core.count(c__4556__auto___53735);
var G__53739 = (0);
seq__53362_53720 = G__53736;
chunk__53364_53721 = G__53737;
count__53365_53722 = G__53738;
i__53366_53723 = G__53739;
continue;
} else {
var child_53740 = cljs.core.first(seq__53362_53734__$1);
if(cljs.core.truth_(child_53740)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53740);


var G__53741 = cljs.core.next(seq__53362_53734__$1);
var G__53742 = null;
var G__53743 = (0);
var G__53744 = (0);
seq__53362_53720 = G__53741;
chunk__53364_53721 = G__53742;
count__53365_53722 = G__53743;
i__53366_53723 = G__53744;
continue;
} else {
var G__53745 = cljs.core.next(seq__53362_53734__$1);
var G__53746 = null;
var G__53747 = (0);
var G__53748 = (0);
seq__53362_53720 = G__53745;
chunk__53364_53721 = G__53746;
count__53365_53722 = G__53747;
i__53366_53723 = G__53748;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53719);
}


var G__53753 = cljs.core.next(seq__53340_53709__$1);
var G__53754 = null;
var G__53755 = (0);
var G__53756 = (0);
seq__53340_53656 = G__53753;
chunk__53341_53657 = G__53754;
count__53342_53658 = G__53755;
i__53343_53659 = G__53756;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__53369 = cljs.core.seq(node);
var chunk__53370 = null;
var count__53371 = (0);
var i__53372 = (0);
while(true){
if((i__53372 < count__53371)){
var n = chunk__53370.cljs$core$IIndexed$_nth$arity$2(null,i__53372);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53757 = seq__53369;
var G__53758 = chunk__53370;
var G__53759 = count__53371;
var G__53760 = (i__53372 + (1));
seq__53369 = G__53757;
chunk__53370 = G__53758;
count__53371 = G__53759;
i__53372 = G__53760;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53369);
if(temp__5735__auto__){
var seq__53369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53369__$1);
var G__53761 = cljs.core.chunk_rest(seq__53369__$1);
var G__53762 = c__4556__auto__;
var G__53763 = cljs.core.count(c__4556__auto__);
var G__53764 = (0);
seq__53369 = G__53761;
chunk__53370 = G__53762;
count__53371 = G__53763;
i__53372 = G__53764;
continue;
} else {
var n = cljs.core.first(seq__53369__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53765 = cljs.core.next(seq__53369__$1);
var G__53766 = null;
var G__53767 = (0);
var G__53768 = (0);
seq__53369 = G__53765;
chunk__53370 = G__53766;
count__53371 = G__53767;
i__53372 = G__53768;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__53374 = arguments.length;
switch (G__53374) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__53423 = arguments.length;
switch (G__53423) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__53425 = arguments.length;
switch (G__53425) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53775 = arguments.length;
var i__4737__auto___53776 = (0);
while(true){
if((i__4737__auto___53776 < len__4736__auto___53775)){
args__4742__auto__.push((arguments[i__4737__auto___53776]));

var G__53777 = (i__4737__auto___53776 + (1));
i__4737__auto___53776 = G__53777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53427_53778 = cljs.core.seq(nodes);
var chunk__53428_53779 = null;
var count__53429_53780 = (0);
var i__53430_53781 = (0);
while(true){
if((i__53430_53781 < count__53429_53780)){
var node_53782 = chunk__53428_53779.cljs$core$IIndexed$_nth$arity$2(null,i__53430_53781);
fragment.appendChild(shadow.dom._to_dom(node_53782));


var G__53783 = seq__53427_53778;
var G__53784 = chunk__53428_53779;
var G__53785 = count__53429_53780;
var G__53786 = (i__53430_53781 + (1));
seq__53427_53778 = G__53783;
chunk__53428_53779 = G__53784;
count__53429_53780 = G__53785;
i__53430_53781 = G__53786;
continue;
} else {
var temp__5735__auto___53787 = cljs.core.seq(seq__53427_53778);
if(temp__5735__auto___53787){
var seq__53427_53788__$1 = temp__5735__auto___53787;
if(cljs.core.chunked_seq_QMARK_(seq__53427_53788__$1)){
var c__4556__auto___53789 = cljs.core.chunk_first(seq__53427_53788__$1);
var G__53791 = cljs.core.chunk_rest(seq__53427_53788__$1);
var G__53792 = c__4556__auto___53789;
var G__53793 = cljs.core.count(c__4556__auto___53789);
var G__53794 = (0);
seq__53427_53778 = G__53791;
chunk__53428_53779 = G__53792;
count__53429_53780 = G__53793;
i__53430_53781 = G__53794;
continue;
} else {
var node_53796 = cljs.core.first(seq__53427_53788__$1);
fragment.appendChild(shadow.dom._to_dom(node_53796));


var G__53802 = cljs.core.next(seq__53427_53788__$1);
var G__53803 = null;
var G__53804 = (0);
var G__53805 = (0);
seq__53427_53778 = G__53802;
chunk__53428_53779 = G__53803;
count__53429_53780 = G__53804;
i__53430_53781 = G__53805;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq53426){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53426));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53431_53806 = cljs.core.seq(scripts);
var chunk__53432_53807 = null;
var count__53433_53808 = (0);
var i__53434_53809 = (0);
while(true){
if((i__53434_53809 < count__53433_53808)){
var vec__53441_53810 = chunk__53432_53807.cljs$core$IIndexed$_nth$arity$2(null,i__53434_53809);
var script_tag_53811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53441_53810,(0),null);
var script_body_53812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53441_53810,(1),null);
eval(script_body_53812);


var G__53813 = seq__53431_53806;
var G__53814 = chunk__53432_53807;
var G__53815 = count__53433_53808;
var G__53816 = (i__53434_53809 + (1));
seq__53431_53806 = G__53813;
chunk__53432_53807 = G__53814;
count__53433_53808 = G__53815;
i__53434_53809 = G__53816;
continue;
} else {
var temp__5735__auto___53817 = cljs.core.seq(seq__53431_53806);
if(temp__5735__auto___53817){
var seq__53431_53818__$1 = temp__5735__auto___53817;
if(cljs.core.chunked_seq_QMARK_(seq__53431_53818__$1)){
var c__4556__auto___53819 = cljs.core.chunk_first(seq__53431_53818__$1);
var G__53820 = cljs.core.chunk_rest(seq__53431_53818__$1);
var G__53821 = c__4556__auto___53819;
var G__53822 = cljs.core.count(c__4556__auto___53819);
var G__53823 = (0);
seq__53431_53806 = G__53820;
chunk__53432_53807 = G__53821;
count__53433_53808 = G__53822;
i__53434_53809 = G__53823;
continue;
} else {
var vec__53444_53824 = cljs.core.first(seq__53431_53818__$1);
var script_tag_53825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53444_53824,(0),null);
var script_body_53826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53444_53824,(1),null);
eval(script_body_53826);


var G__53827 = cljs.core.next(seq__53431_53818__$1);
var G__53828 = null;
var G__53829 = (0);
var G__53830 = (0);
seq__53431_53806 = G__53827;
chunk__53432_53807 = G__53828;
count__53433_53808 = G__53829;
i__53434_53809 = G__53830;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53447){
var vec__53448 = p__53447;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53448,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53448,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__53452 = arguments.length;
switch (G__53452) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__53453 = cljs.core.seq(style_keys);
var chunk__53454 = null;
var count__53455 = (0);
var i__53456 = (0);
while(true){
if((i__53456 < count__53455)){
var it = chunk__53454.cljs$core$IIndexed$_nth$arity$2(null,i__53456);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53838 = seq__53453;
var G__53839 = chunk__53454;
var G__53840 = count__53455;
var G__53841 = (i__53456 + (1));
seq__53453 = G__53838;
chunk__53454 = G__53839;
count__53455 = G__53840;
i__53456 = G__53841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53453);
if(temp__5735__auto__){
var seq__53453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53453__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53453__$1);
var G__53842 = cljs.core.chunk_rest(seq__53453__$1);
var G__53843 = c__4556__auto__;
var G__53844 = cljs.core.count(c__4556__auto__);
var G__53845 = (0);
seq__53453 = G__53842;
chunk__53454 = G__53843;
count__53455 = G__53844;
i__53456 = G__53845;
continue;
} else {
var it = cljs.core.first(seq__53453__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53846 = cljs.core.next(seq__53453__$1);
var G__53847 = null;
var G__53848 = (0);
var G__53849 = (0);
seq__53453 = G__53846;
chunk__53454 = G__53847;
count__53455 = G__53848;
i__53456 = G__53849;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53458,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53462 = k53458;
var G__53462__$1 = (((G__53462 instanceof cljs.core.Keyword))?G__53462.fqn:null);
switch (G__53462__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53458,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53463){
var vec__53464 = p__53463;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53464,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53464,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53457){
var self__ = this;
var G__53457__$1 = this;
return (new cljs.core.RecordIter((0),G__53457__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53459,other53460){
var self__ = this;
var this53459__$1 = this;
return (((!((other53460 == null)))) && ((this53459__$1.constructor === other53460.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53459__$1.x,other53460.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53459__$1.y,other53460.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53459__$1.__extmap,other53460.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53457){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53467 = cljs.core.keyword_identical_QMARK_;
var expr__53468 = k__4388__auto__;
if(cljs.core.truth_((pred__53467.cljs$core$IFn$_invoke$arity$2 ? pred__53467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53468) : pred__53467.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53468)))){
return (new shadow.dom.Coordinate(G__53457,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53467.cljs$core$IFn$_invoke$arity$2 ? pred__53467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53468) : pred__53467.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53468)))){
return (new shadow.dom.Coordinate(self__.x,G__53457,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53457),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53457){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53457,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53461){
var extmap__4419__auto__ = (function (){var G__53470 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53461,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53461)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53470);
} else {
return G__53470;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53461),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53461),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53472,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53476 = k53472;
var G__53476__$1 = (((G__53476 instanceof cljs.core.Keyword))?G__53476.fqn:null);
switch (G__53476__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53472,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53477){
var vec__53478 = p__53477;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53478,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53478,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53471){
var self__ = this;
var G__53471__$1 = this;
return (new cljs.core.RecordIter((0),G__53471__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53473,other53474){
var self__ = this;
var this53473__$1 = this;
return (((!((other53474 == null)))) && ((this53473__$1.constructor === other53474.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53473__$1.w,other53474.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53473__$1.h,other53474.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53473__$1.__extmap,other53474.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53471){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53481 = cljs.core.keyword_identical_QMARK_;
var expr__53482 = k__4388__auto__;
if(cljs.core.truth_((pred__53481.cljs$core$IFn$_invoke$arity$2 ? pred__53481.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53482) : pred__53481.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53482)))){
return (new shadow.dom.Size(G__53471,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53481.cljs$core$IFn$_invoke$arity$2 ? pred__53481.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53482) : pred__53481.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53482)))){
return (new shadow.dom.Size(self__.w,G__53471,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53471),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53471){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53471,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53475){
var extmap__4419__auto__ = (function (){var G__53484 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53475,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53475)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53484);
} else {
return G__53484;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53475),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53475),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__53873 = (i + (1));
var G__53874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53873;
ret = G__53874;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53489){
var vec__53490 = p__53489;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53490,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53494 = arguments.length;
switch (G__53494) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__53878 = ps;
var G__53879 = (i + (1));
el__$1 = G__53878;
i = G__53879;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__53495 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53495,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53495,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53495,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53498_53880 = cljs.core.seq(props);
var chunk__53499_53881 = null;
var count__53500_53882 = (0);
var i__53501_53883 = (0);
while(true){
if((i__53501_53883 < count__53500_53882)){
var vec__53508_53884 = chunk__53499_53881.cljs$core$IIndexed$_nth$arity$2(null,i__53501_53883);
var k_53885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53508_53884,(0),null);
var v_53886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53508_53884,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_53885);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53885),v_53886);


var G__53887 = seq__53498_53880;
var G__53888 = chunk__53499_53881;
var G__53889 = count__53500_53882;
var G__53890 = (i__53501_53883 + (1));
seq__53498_53880 = G__53887;
chunk__53499_53881 = G__53888;
count__53500_53882 = G__53889;
i__53501_53883 = G__53890;
continue;
} else {
var temp__5735__auto___53891 = cljs.core.seq(seq__53498_53880);
if(temp__5735__auto___53891){
var seq__53498_53895__$1 = temp__5735__auto___53891;
if(cljs.core.chunked_seq_QMARK_(seq__53498_53895__$1)){
var c__4556__auto___53896 = cljs.core.chunk_first(seq__53498_53895__$1);
var G__53897 = cljs.core.chunk_rest(seq__53498_53895__$1);
var G__53898 = c__4556__auto___53896;
var G__53899 = cljs.core.count(c__4556__auto___53896);
var G__53900 = (0);
seq__53498_53880 = G__53897;
chunk__53499_53881 = G__53898;
count__53500_53882 = G__53899;
i__53501_53883 = G__53900;
continue;
} else {
var vec__53511_53901 = cljs.core.first(seq__53498_53895__$1);
var k_53902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53511_53901,(0),null);
var v_53903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53511_53901,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_53902);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53902),v_53903);


var G__53904 = cljs.core.next(seq__53498_53895__$1);
var G__53905 = null;
var G__53906 = (0);
var G__53907 = (0);
seq__53498_53880 = G__53904;
chunk__53499_53881 = G__53905;
count__53500_53882 = G__53906;
i__53501_53883 = G__53907;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__53515 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(1),null);
var seq__53518_53911 = cljs.core.seq(node_children);
var chunk__53520_53912 = null;
var count__53521_53913 = (0);
var i__53522_53914 = (0);
while(true){
if((i__53522_53914 < count__53521_53913)){
var child_struct_53915 = chunk__53520_53912.cljs$core$IIndexed$_nth$arity$2(null,i__53522_53914);
if((!((child_struct_53915 == null)))){
if(typeof child_struct_53915 === 'string'){
var text_53916 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53916),child_struct_53915].join(''));
} else {
var children_53917 = shadow.dom.svg_node(child_struct_53915);
if(cljs.core.seq_QMARK_(children_53917)){
var seq__53536_53918 = cljs.core.seq(children_53917);
var chunk__53538_53919 = null;
var count__53539_53920 = (0);
var i__53540_53921 = (0);
while(true){
if((i__53540_53921 < count__53539_53920)){
var child_53922 = chunk__53538_53919.cljs$core$IIndexed$_nth$arity$2(null,i__53540_53921);
if(cljs.core.truth_(child_53922)){
node.appendChild(child_53922);


var G__53923 = seq__53536_53918;
var G__53924 = chunk__53538_53919;
var G__53925 = count__53539_53920;
var G__53926 = (i__53540_53921 + (1));
seq__53536_53918 = G__53923;
chunk__53538_53919 = G__53924;
count__53539_53920 = G__53925;
i__53540_53921 = G__53926;
continue;
} else {
var G__53927 = seq__53536_53918;
var G__53928 = chunk__53538_53919;
var G__53929 = count__53539_53920;
var G__53930 = (i__53540_53921 + (1));
seq__53536_53918 = G__53927;
chunk__53538_53919 = G__53928;
count__53539_53920 = G__53929;
i__53540_53921 = G__53930;
continue;
}
} else {
var temp__5735__auto___53931 = cljs.core.seq(seq__53536_53918);
if(temp__5735__auto___53931){
var seq__53536_53932__$1 = temp__5735__auto___53931;
if(cljs.core.chunked_seq_QMARK_(seq__53536_53932__$1)){
var c__4556__auto___53933 = cljs.core.chunk_first(seq__53536_53932__$1);
var G__53934 = cljs.core.chunk_rest(seq__53536_53932__$1);
var G__53935 = c__4556__auto___53933;
var G__53936 = cljs.core.count(c__4556__auto___53933);
var G__53937 = (0);
seq__53536_53918 = G__53934;
chunk__53538_53919 = G__53935;
count__53539_53920 = G__53936;
i__53540_53921 = G__53937;
continue;
} else {
var child_53938 = cljs.core.first(seq__53536_53932__$1);
if(cljs.core.truth_(child_53938)){
node.appendChild(child_53938);


var G__53939 = cljs.core.next(seq__53536_53932__$1);
var G__53940 = null;
var G__53941 = (0);
var G__53942 = (0);
seq__53536_53918 = G__53939;
chunk__53538_53919 = G__53940;
count__53539_53920 = G__53941;
i__53540_53921 = G__53942;
continue;
} else {
var G__53943 = cljs.core.next(seq__53536_53932__$1);
var G__53944 = null;
var G__53945 = (0);
var G__53946 = (0);
seq__53536_53918 = G__53943;
chunk__53538_53919 = G__53944;
count__53539_53920 = G__53945;
i__53540_53921 = G__53946;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53917);
}
}


var G__53947 = seq__53518_53911;
var G__53948 = chunk__53520_53912;
var G__53949 = count__53521_53913;
var G__53950 = (i__53522_53914 + (1));
seq__53518_53911 = G__53947;
chunk__53520_53912 = G__53948;
count__53521_53913 = G__53949;
i__53522_53914 = G__53950;
continue;
} else {
var G__53951 = seq__53518_53911;
var G__53952 = chunk__53520_53912;
var G__53953 = count__53521_53913;
var G__53954 = (i__53522_53914 + (1));
seq__53518_53911 = G__53951;
chunk__53520_53912 = G__53952;
count__53521_53913 = G__53953;
i__53522_53914 = G__53954;
continue;
}
} else {
var temp__5735__auto___53955 = cljs.core.seq(seq__53518_53911);
if(temp__5735__auto___53955){
var seq__53518_53956__$1 = temp__5735__auto___53955;
if(cljs.core.chunked_seq_QMARK_(seq__53518_53956__$1)){
var c__4556__auto___53957 = cljs.core.chunk_first(seq__53518_53956__$1);
var G__53958 = cljs.core.chunk_rest(seq__53518_53956__$1);
var G__53959 = c__4556__auto___53957;
var G__53960 = cljs.core.count(c__4556__auto___53957);
var G__53961 = (0);
seq__53518_53911 = G__53958;
chunk__53520_53912 = G__53959;
count__53521_53913 = G__53960;
i__53522_53914 = G__53961;
continue;
} else {
var child_struct_53962 = cljs.core.first(seq__53518_53956__$1);
if((!((child_struct_53962 == null)))){
if(typeof child_struct_53962 === 'string'){
var text_53963 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53963),child_struct_53962].join(''));
} else {
var children_53964 = shadow.dom.svg_node(child_struct_53962);
if(cljs.core.seq_QMARK_(children_53964)){
var seq__53542_53965 = cljs.core.seq(children_53964);
var chunk__53544_53966 = null;
var count__53545_53967 = (0);
var i__53546_53968 = (0);
while(true){
if((i__53546_53968 < count__53545_53967)){
var child_53969 = chunk__53544_53966.cljs$core$IIndexed$_nth$arity$2(null,i__53546_53968);
if(cljs.core.truth_(child_53969)){
node.appendChild(child_53969);


var G__53970 = seq__53542_53965;
var G__53971 = chunk__53544_53966;
var G__53972 = count__53545_53967;
var G__53973 = (i__53546_53968 + (1));
seq__53542_53965 = G__53970;
chunk__53544_53966 = G__53971;
count__53545_53967 = G__53972;
i__53546_53968 = G__53973;
continue;
} else {
var G__53974 = seq__53542_53965;
var G__53975 = chunk__53544_53966;
var G__53976 = count__53545_53967;
var G__53977 = (i__53546_53968 + (1));
seq__53542_53965 = G__53974;
chunk__53544_53966 = G__53975;
count__53545_53967 = G__53976;
i__53546_53968 = G__53977;
continue;
}
} else {
var temp__5735__auto___53978__$1 = cljs.core.seq(seq__53542_53965);
if(temp__5735__auto___53978__$1){
var seq__53542_53979__$1 = temp__5735__auto___53978__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53542_53979__$1)){
var c__4556__auto___53980 = cljs.core.chunk_first(seq__53542_53979__$1);
var G__53981 = cljs.core.chunk_rest(seq__53542_53979__$1);
var G__53982 = c__4556__auto___53980;
var G__53983 = cljs.core.count(c__4556__auto___53980);
var G__53984 = (0);
seq__53542_53965 = G__53981;
chunk__53544_53966 = G__53982;
count__53545_53967 = G__53983;
i__53546_53968 = G__53984;
continue;
} else {
var child_53985 = cljs.core.first(seq__53542_53979__$1);
if(cljs.core.truth_(child_53985)){
node.appendChild(child_53985);


var G__53986 = cljs.core.next(seq__53542_53979__$1);
var G__53987 = null;
var G__53988 = (0);
var G__53989 = (0);
seq__53542_53965 = G__53986;
chunk__53544_53966 = G__53987;
count__53545_53967 = G__53988;
i__53546_53968 = G__53989;
continue;
} else {
var G__53990 = cljs.core.next(seq__53542_53979__$1);
var G__53991 = null;
var G__53992 = (0);
var G__53993 = (0);
seq__53542_53965 = G__53990;
chunk__53544_53966 = G__53991;
count__53545_53967 = G__53992;
i__53546_53968 = G__53993;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53964);
}
}


var G__53994 = cljs.core.next(seq__53518_53956__$1);
var G__53995 = null;
var G__53996 = (0);
var G__53997 = (0);
seq__53518_53911 = G__53994;
chunk__53520_53912 = G__53995;
count__53521_53913 = G__53996;
i__53522_53914 = G__53997;
continue;
} else {
var G__53998 = cljs.core.next(seq__53518_53956__$1);
var G__53999 = null;
var G__54000 = (0);
var G__54001 = (0);
seq__53518_53911 = G__53998;
chunk__53520_53912 = G__53999;
count__53521_53913 = G__54000;
i__53522_53914 = G__54001;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54003 = arguments.length;
var i__4737__auto___54004 = (0);
while(true){
if((i__4737__auto___54004 < len__4736__auto___54003)){
args__4742__auto__.push((arguments[i__4737__auto___54004]));

var G__54005 = (i__4737__auto___54004 + (1));
i__4737__auto___54004 = G__54005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53548){
var G__53549 = cljs.core.first(seq53548);
var seq53548__$1 = cljs.core.next(seq53548);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53549,seq53548__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__53551 = arguments.length;
switch (G__53551) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__50892__auto___54020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_53556){
var state_val_53557 = (state_53556[(1)]);
if((state_val_53557 === (1))){
var state_53556__$1 = state_53556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53556__$1,(2),once_or_cleanup);
} else {
if((state_val_53557 === (2))){
var inst_53553 = (state_53556[(2)]);
var inst_53554 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53556__$1 = (function (){var statearr_53558 = state_53556;
(statearr_53558[(7)] = inst_53553);

return statearr_53558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53556__$1,inst_53554);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__50857__auto__ = null;
var shadow$dom$state_machine__50857__auto____0 = (function (){
var statearr_53559 = [null,null,null,null,null,null,null,null];
(statearr_53559[(0)] = shadow$dom$state_machine__50857__auto__);

(statearr_53559[(1)] = (1));

return statearr_53559;
});
var shadow$dom$state_machine__50857__auto____1 = (function (state_53556){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_53556);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e53560){var ex__50860__auto__ = e53560;
var statearr_53561_54028 = state_53556;
(statearr_53561_54028[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_53556[(4)]))){
var statearr_53562_54029 = state_53556;
(statearr_53562_54029[(1)] = cljs.core.first((state_53556[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54030 = state_53556;
state_53556 = G__54030;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
shadow$dom$state_machine__50857__auto__ = function(state_53556){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50857__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50857__auto____1.call(this,state_53556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50857__auto____0;
shadow$dom$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50857__auto____1;
return shadow$dom$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_53563 = f__50893__auto__();
(statearr_53563[(6)] = c__50892__auto___54020);

return statearr_53563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
