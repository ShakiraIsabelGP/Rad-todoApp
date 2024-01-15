goog.provide('com.fulcrologic.rad.routing.history');

/**
 * A Route History is mainly a storage device. It records a history stack along with optional additional parameters
 * at each history entry. It can be asked what it thinks the current route is, and it can be asked to replace the
 * current top of the stack.
 * 
 * A history implementation *may* be hooked to some external source of events (i.e. browser back/forward buttons, phone
 * native navigation). These events (e.g. like HTML5 popstate events) are only expected when there is an *external* change
 * to the route that your application did not initiate with its own API (not that A tags in HTML with URIs will cause
 * these events, since it is the browser, not your app, that is technically initiating the change). Such an implementation
 * *must* honor the add/remove calls to hook up a listener to these external events.
 * 
 * @interface
 */
com.fulcrologic.rad.routing.history.RouteHistory = function(){};

var com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$dyn_71214 = (function (history,route,params){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._push_route_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(history,route,params) : m__4429__auto__.call(null,history,route,params));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._push_route_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(history,route,params) : m__4426__auto__.call(null,history,route,params));
} else {
throw cljs.core.missing_protocol("RouteHistory.-push-route!",history);
}
}
});
/**
 * Pushes the given route with params onto the current history stack.
 */
com.fulcrologic.rad.routing.history._push_route_BANG_ = (function com$fulcrologic$rad$routing$history$_push_route_BANG_(history,route,params){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3(history,route,params);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$dyn_71214(history,route,params);
}
});

var com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$dyn_71215 = (function (history,route,params){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._replace_route_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(history,route,params) : m__4429__auto__.call(null,history,route,params));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._replace_route_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(history,route,params) : m__4426__auto__.call(null,history,route,params));
} else {
throw cljs.core.missing_protocol("RouteHistory.-replace-route!",history);
}
}
});
/**
 * Replaces the top entry in the history stack.
 */
com.fulcrologic.rad.routing.history._replace_route_BANG_ = (function com$fulcrologic$rad$routing$history$_replace_route_BANG_(history,route,params){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$arity$3 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$arity$3(history,route,params);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$dyn_71215(history,route,params);
}
});

var com$fulcrologic$rad$routing$history$RouteHistory$_back_BANG_$dyn_71216 = (function (history){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._back_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(history) : m__4429__auto__.call(null,history));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._back_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(history) : m__4426__auto__.call(null,history));
} else {
throw cljs.core.missing_protocol("RouteHistory.-back!",history);
}
}
});
/**
 * Moves the history back one in the history stack. Calling this will result in a route listener notification about the new route.
 */
com.fulcrologic.rad.routing.history._back_BANG_ = (function com$fulcrologic$rad$routing$history$_back_BANG_(history){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_back_BANG_$arity$1 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_back_BANG_$arity$1(history);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_back_BANG_$dyn_71216(history);
}
});

var com$fulcrologic$rad$routing$history$RouteHistory$_undo_BANG_$dyn_71217 = (function (history,new_route,params){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._undo_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(history,new_route,params) : m__4429__auto__.call(null,history,new_route,params));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._undo_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(history,new_route,params) : m__4426__auto__.call(null,history,new_route,params));
} else {
throw cljs.core.missing_protocol("RouteHistory.-undo!",history);
}
}
});
/**
 * Attempt to undo the given (last) change to history that was reported to listeners. `new-route` and `params` are the
 *   parameters that were passed to the listener. This can only be done once,
 *   and will fail silently if no such notification just happened (or isn't possible).
 */
com.fulcrologic.rad.routing.history._undo_BANG_ = (function com$fulcrologic$rad$routing$history$_undo_BANG_(history,new_route,params){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_undo_BANG_$arity$3 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_undo_BANG_$arity$3(history,new_route,params);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_undo_BANG_$dyn_71217(history,new_route,params);
}
});

var com$fulcrologic$rad$routing$history$RouteHistory$_add_route_listener_BANG_$dyn_71218 = (function (history,listener_key,f){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._add_route_listener_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(history,listener_key,f) : m__4429__auto__.call(null,history,listener_key,f));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._add_route_listener_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(history,listener_key,f) : m__4426__auto__.call(null,history,listener_key,f));
} else {
throw cljs.core.missing_protocol("RouteHistory.-add-route-listener!",history);
}
}
});
/**
 * Add the callback `f` to the list of listeners. That listener will be known as `listener-key`. You should namespace that key to prevent conflicts.
 */
com.fulcrologic.rad.routing.history._add_route_listener_BANG_ = (function com$fulcrologic$rad$routing$history$_add_route_listener_BANG_(history,listener_key,f){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_add_route_listener_BANG_$arity$3 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_add_route_listener_BANG_$arity$3(history,listener_key,f);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_add_route_listener_BANG_$dyn_71218(history,listener_key,f);
}
});

var com$fulcrologic$rad$routing$history$RouteHistory$_remove_route_listener_BANG_$dyn_71219 = (function (history,listener_key){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._remove_route_listener_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(history,listener_key) : m__4429__auto__.call(null,history,listener_key));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._remove_route_listener_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(history,listener_key) : m__4426__auto__.call(null,history,listener_key));
} else {
throw cljs.core.missing_protocol("RouteHistory.-remove-route-listener!",history);
}
}
});
/**
 * Remove the listener named `listener-key`.
 */
com.fulcrologic.rad.routing.history._remove_route_listener_BANG_ = (function com$fulcrologic$rad$routing$history$_remove_route_listener_BANG_(history,listener_key){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_remove_route_listener_BANG_$arity$2 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_remove_route_listener_BANG_$arity$2(history,listener_key);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_remove_route_listener_BANG_$dyn_71219(history,listener_key);
}
});

var com$fulcrologic$rad$routing$history$RouteHistory$_current_route$dyn_71220 = (function (history){
var x__4428__auto__ = (((history == null))?null:history);
var m__4429__auto__ = (com.fulcrologic.rad.routing.history._current_route[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(history) : m__4429__auto__.call(null,history));
} else {
var m__4426__auto__ = (com.fulcrologic.rad.routing.history._current_route["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(history) : m__4426__auto__.call(null,history));
} else {
throw cljs.core.missing_protocol("RouteHistory.-current-route",history);
}
}
});
/**
 * Returns a map of {:route ["a" "b"] :params {}}. The params are the extra state/params, and the route is purely strings.
 *  Note that changing the route may be an async operation, so do *not* expect this to be the correct route immediately after
 *  a call to `-back!`; use a route listener instead. This particular method is useful for checking when the Fulcro
 *  app's idea of the current route differs from the current route in history (i.e. as a sanity check when Fulcro's state changes)
 */
com.fulcrologic.rad.routing.history._current_route = (function com$fulcrologic$rad$routing$history$_current_route(history){
if((((!((history == null)))) && ((!((history.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1 == null)))))){
return history.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1(history);
} else {
return com$fulcrologic$rad$routing$history$RouteHistory$_current_route$dyn_71220(history);
}
});

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",-1211066682,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__71141_SHARP_){
if((!((p1__71141_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__71141_SHARP_.com$fulcrologic$rad$routing$history$RouteHistory$)))){
return true;
} else {
if((!p1__71141_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.fulcrologic.rad.routing.history.RouteHistory,p1__71141_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.fulcrologic.rad.routing.history.RouteHistory,p1__71141_SHARP_);
}
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71143){
return cljs.core.vector_QMARK_(G__71143);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.history","active-history","com.fulcrologic.rad.routing.history/active-history",-466210182,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-ish","app-ish",629806231)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)),null,null,null));


/**
 * Returns the active (installed) RouteHistory implementation, or nil if none is installed.
 * @type {function(*): *}
 */
com.fulcrologic.rad.routing.history.active_history = (function com$fulcrologic$rad$routing$history$active_history(app_ish){
var map__71148 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-ish","app-ish",629806231)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)),null,null,null);
var map__71148__$1 = (((((!((map__71148 == null))))?(((((map__71148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71148):map__71148);
var argspec71144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71148__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec71145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71148__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec71144)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:50 active-history's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71144,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_ish], null));
} else {
}

var f71147 = (function (app_ish__$1){
try{var G__71151 = app_ish__$1;
var G__71151__$1 = (((G__71151 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__71151));
var G__71151__$2 = (((G__71151__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__71151__$1));
var G__71151__$3 = (((G__71151__$2 == null))?null:cljs.core.deref(G__71151__$2));
if((G__71151__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.routing.history","history","com.fulcrologic.rad.routing.history/history",-2028972347).cljs$core$IFn$_invoke$arity$1(G__71151__$3);
}
}catch (e71150){var e = e71150;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,-128312061,null);
}});
var ret71146 = f71147(app_ish);
if(cljs.core.truth_(retspec71145)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:50 active-history's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71145,ret71146);
} else {
}

return ret71146;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.history","history-support?","com.fulcrologic.rad.routing.history/history-support?",-112219801,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-ish","app-ish",629806231)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Returns true if RAD history support is enabled on the given app (you can also pass a component).
 * @type {function(*): !boolean}
 */
com.fulcrologic.rad.routing.history.history_support_QMARK_ = (function com$fulcrologic$rad$routing$history$history_support_QMARK_(app_ish){
var map__71156 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-ish","app-ish",629806231)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-ish","app-ish",629806231),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__71156__$1 = (((((!((map__71156 == null))))?(((((map__71156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71156):map__71156);
var argspec71152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71156__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec71153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71156__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec71152)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:59 history-support?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71152,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_ish], null));
} else {
}

var f71155 = (function (app_ish__$1){
return cljs.core.boolean$(com.fulcrologic.rad.routing.history.active_history(app_ish__$1));
});
var ret71154 = f71155(app_ish);
if(cljs.core.truth_(retspec71153)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:59 history-support?'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71153,ret71154);
} else {
}

return ret71154;
});

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.history","install-route-history!","com.fulcrologic.rad.routing.history/install-route-history!",369560965,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"arity-3","arity-3",1661577885),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"arity-3","arity-3",1661577885),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity-3","arity-3",1661577885),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71167){
return cljs.core.map_QMARK_(G__71167);
}),(function (G__71167){
return cljs.core.contains_QMARK_(G__71167,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
})], null),(function (G__71167){
return ((cljs.core.map_QMARK_(G__71167)) && (cljs.core.contains_QMARK_(G__71167,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)))], null),null])),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"history","history",-247395220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71168){
return cljs.core.map_QMARK_(G__71168);
}),(function (G__71168){
return cljs.core.contains_QMARK_(G__71168,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
})], null),(function (G__71168){
return ((cljs.core.map_QMARK_(G__71168)) && (cljs.core.contains_QMARK_(G__71168,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)))], null),null])),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)], null))], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"arity-3","arity-3",1661577885),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),new cljs.core.Keyword(null,"arity-2","arity-2",-1366521503),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Installs an implementation of RouteHistory onto the given Fulcro app.
 * 
 *   `route-predicate` is an optional `(fn [app route params])` that should return true
 *   if the route change is allowed, and false otherwise. The default value is
 *   `(fn [app _ _] (dr/can-change-route? app))`.
 */
com.fulcrologic.rad.routing.history.install_route_history_BANG_ = (function com$fulcrologic$rad$routing$history$install_route_history_BANG_(var_args){
var G__71170 = arguments.length;
switch (G__71170) {
case 3:
return com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,history,route_predicate){
var map__71171 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71172){
return cljs.core.map_QMARK_(G__71172);
}),(function (G__71172){
return cljs.core.contains_QMARK_(G__71172,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
})], null),(function (G__71172){
return ((cljs.core.map_QMARK_(G__71172)) && (cljs.core.contains_QMARK_(G__71172,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)))], null),null])),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087),new cljs.core.Keyword(null,"route-predicate","route-predicate",1125410648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__71171__$1 = (((((!((map__71171 == null))))?(((((map__71171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71171):map__71171);
var argspec71159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71171__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec71160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71171__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec71159)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:67 install-route-history!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app,history,route_predicate], null));
} else {
}

var f71162 = (function (app__$1,history__$1,route_predicate__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","history","com.fulcrologic.rad.routing.history/history",-2028972347),history__$1);

var G__71174 = app__$1;
var G__71175 = new cljs.core.Keyword("com.fulcrologic.rad.routing.history","rad-route-control","com.fulcrologic.rad.routing.history/rad-route-control",-1208350166);
var G__71176 = (function (route,params){
if(cljs.core.truth_((route_predicate__$1.cljs$core$IFn$_invoke$arity$3 ? route_predicate__$1.cljs$core$IFn$_invoke$arity$3(app__$1,route,params) : route_predicate__$1.call(null,app__$1,route,params)))){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,route,params);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.routing.history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Browser routing event was denied."], null);
}),null)),null,-1936165050,null);

return (com.fulcrologic.rad.routing.history.undo_BANG_.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.rad.routing.history.undo_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,route,params) : com.fulcrologic.rad.routing.history.undo_BANG_.call(null,app__$1,route,params));
}
});
return (com.fulcrologic.rad.routing.history.add_route_listener_BANG_.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.rad.routing.history.add_route_listener_BANG_.cljs$core$IFn$_invoke$arity$3(G__71174,G__71175,G__71176) : com.fulcrologic.rad.routing.history.add_route_listener_BANG_.call(null,G__71174,G__71175,G__71176));
});
var ret71161 = f71162(app,history,route_predicate);
if(cljs.core.truth_(retspec71160)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:67 install-route-history!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71160,ret71161);
} else {
}

return ret71161;
}));

(com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,history){
var map__71177 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"history","history",-247395220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71178){
return cljs.core.map_QMARK_(G__71178);
}),(function (G__71178){
return cljs.core.contains_QMARK_(G__71178,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
})], null),(function (G__71178){
return ((cljs.core.map_QMARK_(G__71178)) && (cljs.core.contains_QMARK_(G__71178,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)))], null),null])),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)], null)),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","RouteHistory","com.fulcrologic.rad.routing.history/RouteHistory",1443369087)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__71177__$1 = (((((!((map__71177 == null))))?(((((map__71177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71177):map__71177);
var argspec71163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71177__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec71164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71177__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec71163)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:67 install-route-history!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app,history], null));
} else {
}

var f71166 = (function (app__$1,history__$1){
return com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,history__$1,(function (app__$2,_,___$1){
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1(app__$2);
}));
});
var ret71165 = f71166(app,history);
if(cljs.core.truth_(retspec71164)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:67 install-route-history!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71164,ret71165);
} else {
}

return ret71165;
}));

(com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Push the given route onto the route history (if history is installed). A route is a vector of the route segments
 * that locate a given target.
 */
com.fulcrologic.rad.routing.history.push_route_BANG_ = (function com$fulcrologic$rad$routing$history$push_route_BANG_(app_or_component,route,route_params){
try{var G__71181 = app_or_component;
var G__71181__$1 = (((G__71181 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71181));
if((G__71181__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._push_route_BANG_(G__71181__$1,route,route_params);
}
}catch (e71180){var e = e71180;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,95,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,-128074173,null);
}});
/**
 * Replace the top of the current route stack 
 */
com.fulcrologic.rad.routing.history.replace_route_BANG_ = (function com$fulcrologic$rad$routing$history$replace_route_BANG_(app_or_component,target,route_params){
try{var G__71183 = app_or_component;
var G__71183__$1 = (((G__71183 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71183));
if((G__71183__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._replace_route_BANG_(G__71183__$1,target,route_params);
}
}catch (e71182){var e = e71182;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,1295738055,null);
}});
/**
 * Go to the last position in history (if history is installed).
 */
com.fulcrologic.rad.routing.history.back_BANG_ = (function com$fulcrologic$rad$routing$history$back_BANG_(app_or_component){
try{var G__71185 = app_or_component;
var G__71185__$1 = (((G__71185 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71185));
if((G__71185__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._back_BANG_(G__71185__$1);
}
}catch (e71184){var e = e71184;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,111,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,145872511,null);
}});
/**
 * Undo the (last) request to route that was delivered to a listener. Must be passed that parameters that were passed
 *   to the listener. Idempotent: calling this more than once will only have an effect once.
 */
com.fulcrologic.rad.routing.history.undo_BANG_ = (function com$fulcrologic$rad$routing$history$undo_BANG_(app_or_component,new_route,new_params){
try{var G__71187 = app_or_component;
var G__71187__$1 = (((G__71187 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71187));
if((G__71187__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._undo_BANG_(G__71187__$1,new_route,new_params);
}
}catch (e71186){var e = e71186;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,1532071443,null);
}});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.history","add-route-listener!","com.fulcrologic.rad.routing.history/add-route-listener!",-20975958,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Keyword(null,"f","f",-1597136552)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Add the callback `f` to the list of listeners. That listener will be known as `listener-key`. You should namespace that key to prevent conflicts.
 * 
 * `f` - A `(fn [route params])`, where `route` is a vector of strings, and params is the route parameter map.
 * @type {function(*, !cljs.core.Keyword, !Function): *}
 */
com.fulcrologic.rad.routing.history.add_route_listener_BANG_ = (function com$fulcrologic$rad$routing$history$add_route_listener_BANG_(app_or_component,listener_key,f){
var map__71192 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Keyword(null,"f","f",-1597136552)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__71192__$1 = (((((!((map__71192 == null))))?(((((map__71192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71192):map__71192);
var argspec71188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71192__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec71189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71192__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec71188)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:122 add-route-listener!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_or_component,listener_key,f], null));
} else {
}

var f71191 = (function (app_or_component__$1,listener_key__$1,f__$1){
try{var G__71195 = app_or_component__$1;
var G__71195__$1 = (((G__71195 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71195));
if((G__71195__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._add_route_listener_BANG_(G__71195__$1,listener_key__$1,f__$1);
}
}catch (e71194){var e = e71194;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,286921976,null);
}});
var ret71190 = f71191(app_or_component,listener_key,f);
if(cljs.core.truth_(retspec71189)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:122 add-route-listener!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71189,ret71190);
} else {
}

return ret71190;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.history","remove-route-listener!","com.fulcrologic.rad.routing.history/remove-route-listener!",-425212144,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Remove the listener named `listener-key`.
 * @type {function(*, !cljs.core.Keyword): *}
 */
com.fulcrologic.rad.routing.history.remove_route_listener_BANG_ = (function com$fulcrologic$rad$routing$history$remove_route_listener_BANG_(app_or_component,listener_key){
var map__71200 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"listener-key","listener-key",-2125872392),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__71200__$1 = (((((!((map__71200 == null))))?(((((map__71200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71200):map__71200);
var retspec71197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71200__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec71196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71200__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec71196)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:133 remove-route-listener!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71196,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_or_component,listener_key], null));
} else {
}

var f71199 = (function (app_or_component__$1,listener_key__$1){
try{var G__71203 = app_or_component__$1;
var G__71203__$1 = (((G__71203 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71203));
if((G__71203__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._remove_route_listener_BANG_(G__71203__$1,listener_key__$1);
}
}catch (e71202){var e = e71202;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,1493153198,null);
}});
var ret71198 = f71199(app_or_component,listener_key);
if(cljs.core.truth_(retspec71197)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:133 remove-route-listener!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71197,ret71198);
} else {
}

return ret71198;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.history","current-route","com.fulcrologic.rad.routing.history/current-route",-1510718494,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71208){
return cljs.core.map_QMARK_(G__71208);
}),(function (G__71208){
return cljs.core.contains_QMARK_(G__71208,new cljs.core.Keyword(null,"route","route",329891309));
}),(function (G__71208){
return cljs.core.contains_QMARK_(G__71208,new cljs.core.Keyword(null,"params","params",710516235));
})], null),(function (G__71208){
return ((cljs.core.map_QMARK_(G__71208)) && (cljs.core.contains_QMARK_(G__71208,new cljs.core.Keyword(null,"route","route",329891309))) && (cljs.core.contains_QMARK_(G__71208,new cljs.core.Keyword(null,"params","params",710516235))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route","route",329891309))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"params","params",710516235)))], null),null])),null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null))),null,null,null));


/**
 * Returns a map of {:route ["a" "b"] :params {}}. The params are the extra state/params, and the route is purely strings.
 * @type {function(*): ?cljs.core.IMap}
 */
com.fulcrologic.rad.routing.history.current_route = (function com$fulcrologic$rad$routing$history$current_route(app_or_component){
var map__71209 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"app-or-component","app-or-component",1519158883),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71210){
return cljs.core.map_QMARK_(G__71210);
}),(function (G__71210){
return cljs.core.contains_QMARK_(G__71210,new cljs.core.Keyword(null,"route","route",329891309));
}),(function (G__71210){
return cljs.core.contains_QMARK_(G__71210,new cljs.core.Keyword(null,"params","params",710516235));
})], null),(function (G__71210){
return ((cljs.core.map_QMARK_(G__71210)) && (cljs.core.contains_QMARK_(G__71210,new cljs.core.Keyword(null,"route","route",329891309))) && (cljs.core.contains_QMARK_(G__71210,new cljs.core.Keyword(null,"params","params",710516235))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"route","route",329891309))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"params","params",710516235)))], null),null])),null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.routing.history","route","com.fulcrologic.rad.routing.history/route",-1707441088),new cljs.core.Keyword("com.fulcrologic.rad.routing.history","params","com.fulcrologic.rad.routing.history/params",-1563757248)], null))),null,null,null);
var map__71209__$1 = (((((!((map__71209 == null))))?(((((map__71209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71209):map__71209);
var retspec71205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71209__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec71204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71209__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec71204)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:142 current-route's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_or_component], null));
} else {
}

var f71207 = (function (app_or_component__$1){
try{var G__71213 = app_or_component__$1;
var G__71213__$1 = (((G__71213 == null))?null:com.fulcrologic.rad.routing.history.active_history(G__71213));
if((G__71213__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.history._current_route(G__71213__$1);
}
}catch (e71212){var e = e71212;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to execute history operation."], null);
}),null)),null,225397906,null);
}});
var ret71206 = f71207(app_or_component);
if(cljs.core.truth_(retspec71205)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/history.cljc:142 current-route's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71205,ret71206);
} else {
}

return ret71206;
});

//# sourceMappingURL=com.fulcrologic.rad.routing.history.js.map
