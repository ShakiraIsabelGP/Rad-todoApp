goog.provide('com.fulcrologic.fulcro.routing.dynamic_routing');
/**
 * INTERNAL USE ONLY. Not guaranteed to be available at runtime in production builds. This is used to aid in giving
 * development-time warnings/errors.
 * 
 * Class of the routing target component, available in the notifications fns
 * (:will-enter, :route-cancelled, :will-leave)
 */
com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = null;
/**
 * Returns a vector that describes the sub-path that a given route target represents. String elements represent
 *   explicit path elements, and keywords represent variable values (which are always pulled as strings).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_segment = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_segment(class$){
var result = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (!((((result == null)) || (cljs.core.vector_QMARK_(result)))));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route segment should be a vector!"], null);
}),null)),null,-580277367,null);
} else {
}

return result;
});
/**
 * Returns the function that should be called if this target was in a deferred state and a different routing choice was made. Is given the same route parameters that were sent to `will-enter`.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_route_cancelled(class$){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214)], 0));
});
/**
 * Universal CLJC version of route-cancelled.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_cancelled(class$,route_params){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var _STAR_target_class_STAR__orig_val__68356 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__68357 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__68357);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(route_params) : f.call(null,route_params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__68356);
}} else {
return null;
}
});
/**
 * Returns the function that is called before a route target is activated (if the route segment of interest has changed and the
 *   target of the result is this target).  MUST return (r/route-immediate ident) or (r/route-deferred ident) to indicate
 *   what ident should be used in app state to connect the router's join.  If deferred, the router must cause a call to
 *   the r/target-ready mutation (or use the target-ready* mutation helper) with a {:target ident} parameter to indicate
 *   that the route target is loaded and ready for display.
 * 
 *   `params` will be a map from any keywords found in `route-segment` to the string value of that path element.
 * 
 *   WARNING: This method MUST be side-effect free.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_enter(class$){
var temp__5733__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-enter","will-enter",-692415624)], 0));
if(cljs.core.truth_(temp__5733__auto__)){
var will_enter = temp__5733__auto__;
return will_enter;
} else {
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(ident)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component must have an ident for routing to work properly:",com.fulcrologic.fulcro.raw.components.component_name(class$),"See https://book.fulcrologic.com/#err-dr-comp-needs-ident"], null);
}),null)),null,1178543219,null);
}

return (function (_,___$1){
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1(ident) : com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.call(null,ident));
});
}
});
/**
 * Universal CLJC version of will-enter.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_enter(class$,app,params){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var will_enter = temp__5735__auto__;
var _STAR_target_class_STAR__orig_val__68358 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__68359 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__68359);

try{return (will_enter.cljs$core$IFn$_invoke$arity$2 ? will_enter.cljs$core$IFn$_invoke$arity$2(app,params) : will_enter.call(null,app,params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__68358);
}} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)));
});
/**
 * Returns the function of a route target to be called with
 *   the current component and props. If it returns `true` then the routing operation will continue.  If it returns `false`
 *   then whatever new route was requested will be completely abandoned. If this component has a `allow-route-change?`
 *   then the return value of will-leave will be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_leave(this$){
var or__4126__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.constantly(true);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_leave(c,props){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave(c);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var _STAR_target_class_STAR__orig_val__68361 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__68362 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__68362);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(c,props) : f.call(null,c,props));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__68361);
}} else {
return null;
}
});
/**
 * Returns the function of a route target to be called with the current component and props.
 * If it returns `true` then the routing operation can continue.  If it returns `false`
 * then whatever new route was requested will be completely abandoned. This handler MUST NOT side-effect, and
 * may be called multiple times on a single route request.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_allow_route_change_QMARK_(this$){
var or__4126__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow-route-change?","allow-route-change?",173143289)], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(temp__5735__auto__)){
var will_leave = temp__5735__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEPRECATED USE OF `:will-leave` to check for allowable routing. You should add :allow-route-change? to: ",com.fulcrologic.fulcro.raw.components.component_name(this$),"See https://book.fulcrologic.com/#warn-routing-will-leave-deprecated"], null);
}),null)),null,592397095,null);

return (function (){
var G__68367 = this$;
var G__68368 = com.fulcrologic.fulcro.raw.components.props(this$);
return (will_leave.cljs$core$IFn$_invoke$arity$2 ? will_leave.cljs$core$IFn$_invoke$arity$2(G__68367,G__68368) : will_leave.call(null,G__68367,G__68368));
});
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$allow_route_change_QMARK_(c){
try{var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_(c);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var _STAR_target_class_STAR__orig_val__68370 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__68371 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__68371);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__68370);
}} else {
return null;
}
}catch (e68369){var e = e68369;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot evaluate route change. Assuming ok. Exception message: ",cljs.core.ex_message(e),"See https://book.fulcrologic.com/#err-dr-cant-eval-route-chng"], null);
}),null)),null,1688235610,null);

return true;
}});
com.fulcrologic.fulcro.routing.dynamic_routing.route_lifecycle_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_lifecycle_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0)));
});
/**
 * Returns a set of classes to which this router routes.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_targets(router){
return cljs.core.set(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(router,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ident_matches_expectation_QMARK_(p__68372,p__68373){
var vec__68374 = p__68372;
var expected_table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68374,(0),null);
var maybe_expected_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68374,(1),null);
var vec__68377 = p__68373;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68377,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68377,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected_table,table)) && ((((maybe_expected_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_expected_id,id)))));
});
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$check_ident_matches_expectation_QMARK_(fn_name,ident){
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (!(com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY),ident)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_name," was invoked with the ident ",ident," which doesn't seem to match the ident of the wrapping component (class ",com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_," , ident [",cljs.core.first(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY))," ...]) See https://book.fulcrologic.com/#err-dr-ident-mismatch"], null);
}),null)),null,-2007098951,null);
} else {
return null;
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system that you would like this target to be
 * routed to as soon as possible. UI switching defaults to depth-first to prevent flicker.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_immediate(ident){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-immediate",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
});
/**
 * Used as a return value from `will-enter`. Instructs the router to run the `completion-fn`. The completion function
 * *must* use the mutation `target-ready` or function `target-ready!` to indicate when it is ready for the target to
 * appear on-screen.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_deferred(ident,completion_fn){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-deferred",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),false,new cljs.core.Keyword(null,"fn","fn",-1175266204),completion_fn], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$immediate_QMARK_(ident){
var G__68380 = ident;
var G__68380__$1 = (((G__68380 == null))?null:cljs.core.meta(G__68380));
if((G__68380__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$1(G__68380__$1);
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system to execute the `txn` in *routing path order*,
 * and optionally couples these operations into a single transaction. This can be used in cases where you need the
 * side-effects (potentially full-stack) to complete for a parent target before those of a nested target.
 * 
 * The `options` can contain:
 * 
 * * `:optimistic?`  (default false) - When true, don't wait for this transaction to (full-stack) complete before starting
 *   child target effects.
 * * `:route-immediate?` (default false) - When true, apply the UI routing immediately instead of waiting for the transaction
 *   to finish. Of course the UI of the target should then be willing to tolerate the lack of any full-stack result.
 * * `:show-early?` - (default false) - When true each transaction that completes will cause that target to appear. When
 *  false the target won't appear until after all children have completed their non-optimistic path-based transactions.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_with_path_ordered_transaction(var_args){
var G__68387 = arguments.length;
switch (G__68387) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2 = (function (ident,txn){
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3(ident,txn,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3 = (function (ident,txn,p__68390){
var map__68391 = p__68390;
var map__68391__$1 = (((((!((map__68391 == null))))?(((((map__68391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68391):map__68391);
var options = map__68391__$1;
var optimistic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68391__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var route_immediate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68391__$1,new cljs.core.Keyword(null,"route-immediate?","route-immediate?",-681888697));
var optimistic_QMARK___$1 = (((!((optimistic_QMARK_ == null))))?optimistic_QMARK_:false);
var route_immediate_QMARK___$1 = (((!((route_immediate_QMARK_ == null))))?route_immediate_QMARK_:false);
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295),true,new cljs.core.Keyword(null,"immediate","immediate",-1684692069),route_immediate_QMARK___$1,new cljs.core.Keyword(null,"txn","txn",-469204789),txn,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),optimistic_QMARK___$1], null));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$apply_route_STAR_(state_map,p__68393){
var map__68394 = p__68393;
var map__68394__$1 = (((((!((map__68394 == null))))?(((((map__68394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68394):map__68394);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68394__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68394__$1,new cljs.core.Keyword(null,"target","target",253001721));
var router_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(router));
var router_id = cljs.core.second(router);
var target_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,186,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying route ident",target,"to router",router_id], null);
}),null)),null,1273783678,null);

if((router_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,188,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* was called without a proper :router argument. See https://book.fulcrologic.com/#err-dr-apply-route-lacks-router"], null);
}),null)),null,-1983529327,null);
} else {
}

if((target_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,190,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* for router ",router_class,"was given a target that did not have a component. ","Did you remember to call route-deferred or route-immediate? See https://book.fulcrologic.com/#err-dr-apply-route-no-component"], null);
}),null)),null,-1977389600,null);
} else {
}

return com.fulcrologic.fulcro.raw.components.set_query_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)),target),router,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),router_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(target_class,state_map)], null)], null)], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_for_pending_target(state_map,target){
var routers = (function (){var G__68396 = state_map;
var G__68396__$1 = (((G__68396 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(G__68396));
if((G__68396__$1 == null)){
return null;
} else {
return cljs.core.vals(G__68396__$1);
}
})();
var router_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,r){
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r) == null);
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,201,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a router in state that is missing an ID. This indicates that","you forgot to compose it into your initial state! It will fail to operate properly. See https://book.fulcrologic.com/#err-dr-router-missing-id"], null);
}),null)),null,-584147209,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var G__68397 = r;
var G__68397__$1 = (((G__68397 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373).cljs$core$IFn$_invoke$arity$1(G__68397));
if((G__68397__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__68397__$1);
}
})())){
return cljs.core.reduced(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r));
} else {
return null;
}
}),null,routers);
return router_id;
});
/**
 * Mutation: Indicate that a target is ready.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),(function (fulcro_mutation_env_symbol){
var map__68398 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__68398__$1 = (((((!((map__68398 == null))))?(((((map__68398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68398):map__68398);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68398__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function com$fulcrologic$fulcro$routing$dynamic_routing$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__68400){
var map__68401 = p__68400;
var map__68401__$1 = (((((!((map__68401 == null))))?(((((map__68401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68401):map__68401);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68401__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__68403_68811 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__68404_68812 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__68404_68812);

try{var state_map_68813 = com.fulcrologic.fulcro.application.current_state(app);
var router_id_68814 = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map_68813,target);
if(cljs.core.truth_(router_id_68814)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id_68814,"notified that pending route is ready."], null);
}),null)),null,2031962546,null);

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map_68813,target) == null);
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),"should route to",target,"but there is no data in the DB for the ident.","Perhaps you supplied a wrong ident? See https://book.fulcrologic.com/#err-dr-target-ready-missing-data"], null);
}),null)),null,-1031438192,null);
} else {
}

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,router_id_68814,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,222,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another. See https://book.fulcrologic.com/#err-dr-target-ready-no-router-waiting"], null);
}),null)),null,-613434214,null);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__68403_68811);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__68405 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__68406 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__68406);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__68405);
}})], null);
}));
/**
 * Indicate a target is ready.  Safe to use from within mutations.
 * 
 *   target - The ident that was originally listed as a deferred target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_BANG_(component_or_app,target){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68407 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__68407) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__68407));
})()], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
/**
 * Returns the elements of actual-path that match the route-segment definition.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix = (function com$fulcrologic$fulcro$routing$dynamic_routing$matching_prefix(route_segment,actual_path){
var matching_segment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__68408){
var vec__68409 = p__68408;
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68409,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68409,(1),null);
if(((typeof expected === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,actual);
} else {
if((((expected instanceof cljs.core.Keyword)) && (cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual));
} else {
return result;

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),route_segment,actual_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_segment),cljs.core.count(route_segment))){
return matching_segment;
} else {
return null;
}
});
/**
 * Get the class of the component that is currently being routed to.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route_class(this$){
var state_map = com.fulcrologic.fulcro.application.current_state(com.fulcrologic.fulcro.raw.components.any__GT_app(this$));
var class$ = (function (){var G__68414 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(this$,state_map);
var G__68414__$1 = (((G__68414 == null))?null:edn_query_language.core.query__GT_ast(G__68414));
var G__68414__$2 = (((G__68414__$1 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__68414__$1));
var G__68414__$3 = (((G__68414__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68412_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__68412_SHARP_));
}),G__68414__$2));
var G__68414__$4 = (((G__68414__$3 == null))?null:cljs.core.first(G__68414__$3));
if((G__68414__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__68414__$4);
}
})();
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(com.fulcrologic.fulcro.raw.components.class__GT_registry_key(class$)):class$);
return class$__$1;
});
/**
 * Given a router class and a path segment, returns the class of *that router's* target that accepts the given URI path,
 *   which is a vector of (string) URI components.
 * 
 *   Returns nil if there is no target that accepts the path, or a map containing:
 * 
 *   {:target class
 * :matching-prefix prefix}
 * 
 *   where `class` is the component class that accepts the path (the target, NOT the router), and `matching-prefix` is the
 *   portion of the path that is accepted by that class.
 * 
 *   NOTE: If more than one target matches, then the target with the longest match will be returned. A warning will be
 *   printed if more than one match of equal length is found.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target(router_class,path){
if(cljs.core.truth_((function (){var and__4115__auto__ = router_class;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class);
} else {
return and__4115__auto__;
}
})())){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_class);
var matches = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,target_class){
var prefix = (function (){var and__4115__auto__ = target_class;
if(cljs.core.truth_(and__4115__auto__)){
if(com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_(target_class)){
var G__68417 = target_class;
var G__68417__$1 = (((G__68417 == null))?null:com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__68417));
if((G__68417__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix(G__68417__$1,path);
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = prefix;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(prefix);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count(prefix),new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173),prefix,new cljs.core.Keyword(null,"target","target",253001721),target_class], null));
} else {
return result;
}
}),cljs.core.PersistentVector.EMPTY,targets)));
var max_length = (function (){var G__68418 = matches;
var G__68418__$1 = (((G__68418 == null))?null:cljs.core.first(G__68418));
if((G__68418__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__68418__$1);
}
})();
var match = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68415_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_length,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__68415_SHARP_));
}),matches);
if(cljs.core.truth_(cljs.core.second(match))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,296,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target matches",path,"See https://book.fulcrologic.com/#warn-routing-multiple-target-matches"], null);
}),null)),null,2105495661,null);
} else {
}

return cljs.core.first(match);
} else {
return null;
}
});
/**
 * Returns true if the given component is a router that manages a route target that will accept the given path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$accepts_route_QMARK_(component,path){
return cljs.core.boolean$(com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component,path));
});
/**
 * Returns the AST node for a query that represents the router that has a target that can accept the given path. This is a breadth-first
 *   search.
 * 
 *   ast - A query AST node
 *   path - A vector of the current URI segments.
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_route(p__68421,path){
var map__68422 = p__68421;
var map__68422__$1 = (((((!((map__68422 == null))))?(((((map__68422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68422):map__68422);
var ast_node = map__68422__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68422__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4126__auto__ = ((com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(component,path))?ast_node:false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some((function (p1__68419_SHARP_){
if(com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__68419_SHARP_),path)){
return p1__68419_SHARP_;
} else {
return false;
}
}),children);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some((function (p1__68420_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2(p1__68420_SHARP_,path) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.call(null,p1__68420_SHARP_,path));
}),children);
}
}
});
/**
 * Returns the AST node for a query that represents the closest "live" (on-screen) router
 * 
 *   ast - A query AST node
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router(app,p__68426){
var map__68427 = p__68426;
var map__68427__$1 = (((((!((map__68427 == null))))?(((((map__68427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68427):map__68427);
var ast_node = map__68427__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68427__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var live_router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router_$_live_router_QMARK_(c){
return ((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(c)) && (cljs.core.boolean$(com.fulcrologic.fulcro.components.class__GT_any(app,c))));
});
var or__4126__auto__ = (function (){var and__4115__auto__ = live_router_QMARK_(component);
if(cljs.core.truth_(and__4115__auto__)){
return ast_node;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some((function (p1__68424_SHARP_){
var and__4115__auto__ = live_router_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__68424_SHARP_));
if(cljs.core.truth_(and__4115__auto__)){
return p1__68424_SHARP_;
} else {
return and__4115__auto__;
}
}),children);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some((function (p1__68425_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2(app,p1__68425_SHARP_) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.call(null,app,p1__68425_SHARP_));
}),children);
}
}
});
/**
 * Mutation: Indicate that a given route is ready and should show the result.
 * 
 *   router - The ident of the router, with metadata :component that is the class of the router.
 *   target - The ident of the target route, with metadata :component that is the class of the target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null),(function (fulcro_mutation_env_symbol){
var map__68429 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__68429__$1 = (((((!((map__68429 == null))))?(((((map__68429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68429):map__68429);
var params = map__68429__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68429__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68429__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__68431){
var map__68432 = p__68431;
var map__68432__$1 = (((((!((map__68432 == null))))?(((((map__68432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68432):map__68432);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68432__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68432__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__68434_68815 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__68435_68816 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__68435_68816);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__68434_68815);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__68436 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__68437 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__68437);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__68436);
}})], null);
}));
com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$mark_route_pending_STAR_(state_map,p__68438){
var map__68439 = p__68438;
var map__68439__$1 = (((((!((map__68439 == null))))?(((((map__68439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68439):map__68439);
var params = map__68439__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68439__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68439__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),params);
});
var target_ready_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_STAR_(state_map,target){
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
return com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_(state_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)], null)));
} else {
return state_map;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$ready_handler(env){
var new_env = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268))),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),cljs.core.PersistentVector.EMPTY),target_ready_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"target","target",253001721))], 0));
var app = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(app)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$fail_handler(env){
return env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_handler(p__68441){
var map__68442 = p__68441;
var map__68442__$1 = (((((!((map__68442 == null))))?(((((map__68442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68442):map__68442);
var env = map__68442__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68442__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__68444 = event_data;
var map__68444__$1 = (((((!((map__68444 == null))))?(((((map__68444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68444):map__68444);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68444__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68444__$1,new cljs.core.Keyword(null,"target","target",253001721));
var error_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68444__$1,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000));
var deferred_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68444__$1,new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20));
var path_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68444__$1,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var immediate_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_(target);
return com.fulcrologic.fulcro.ui_state_machines.store((cljs.core.truth_(immediate_QMARK_)?(function (){var new_env = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"routed","routed",-707282794));
if(cljs.core.truth_(app)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
})():com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"error-timer","error-timer",347765002),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),cljs.core.PersistentArrayMap.EMPTY,error_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"delay-timer","delay-timer",-920427787),new cljs.core.Keyword(null,"waiting!","waiting!",373081239),cljs.core.PersistentArrayMap.EMPTY,deferred_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"deferred","deferred",-1976960688))),new cljs.core.Keyword(null,"target","target",253001721),target);
});
com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null));
/**
 * Internal algorithm: Returns a sequence of idents of the targets that the `new-route` goes through by analyzing the current
 *   application query and state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$proposed_new_path(var_args){
var G__68447 = arguments.length;
switch (G__68447) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4 = (function (this_or_app,relative_class_or_instance,new_route,timeouts_and_params){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class_or_instance,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__68450_68818 = root;
var map__68451_68819 = G__68450_68818;
var map__68451_68820__$1 = (((((!((map__68451_68819 == null))))?(((((map__68451_68819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68451_68819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68451_68819):map__68451_68819);
var component_68821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68451_68820__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_68822 = new_route;
var G__68450_68823__$1 = G__68450_68818;
var path_68824__$1 = path_68822;
while(true){
var map__68464_68825 = G__68450_68823__$1;
var map__68464_68826__$1 = (((((!((map__68464_68825 == null))))?(((((map__68464_68825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68464_68825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68464_68825):map__68464_68825);
var component_68827__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68464_68826__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_68828__$2 = path_68824__$1;
if(cljs.core.truth_((function (){var and__4115__auto__ = component_68827__$1;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_68827__$1);
} else {
return and__4115__auto__;
}
})())){
var map__68466_68829 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_68827__$1,path_68828__$2);
var map__68466_68830__$1 = (((((!((map__68466_68829 == null))))?(((((map__68466_68829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68466_68829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68466_68829):map__68466_68829);
var target_68831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68466_68830__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_68832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68466_68830__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_68833 = (function (){var G__68468 = target_68831;
var G__68468__$1 = (((G__68468 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__68468,state_map));
if((G__68468__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__68468__$1);
}
})();
var prefix_length_68834 = cljs.core.count(matching_prefix_68832);
var remaining_path_68835 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_68834,path_68828__$2));
var segment_68836 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_68831);
var params_68837 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result){
return (function (p,p__68469){
var vec__68470 = p__68469;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68470,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result))
,segment_68836,matching_prefix_68832));
var target_ident_68838 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_68831,app,params_68837);
if((((!(edn_query_language.core.ident_QMARK_(target_ident_68838)))) || ((cljs.core.second(target_ident_68838) == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,444,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,params_68837,target_ident_68838,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_68831),"did not return a valid ident. Instead it returned: ",target_ident_68838,"See https://book.fulcrologic.com/#err-dr-will-enter-invalid-ident"], null);
});})(G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,params_68837,target_ident_68838,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result))
,null)),null,1549354077,null);
} else {
}

if(((edn_query_language.core.ident_QMARK_(target_ident_68838)) && ((!(cljs.core.contains_QMARK_((function (){var G__68474 = target_ident_68838;
if((G__68474 == null)){
return null;
} else {
return cljs.core.meta(G__68474);
}
})(),new cljs.core.Keyword(null,"immediate","immediate",-1684692069))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,447,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,params_68837,target_ident_68838,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_68831),"did not wrap the ident in route-immediate, route-deferred, or route-with-path-ordered-transaction. See https://book.fulcrologic.com/#err-dr-will-enter-missing-metadata"], null);
});})(G__68450_68823__$1,path_68824__$1,map__68466_68829,map__68466_68830__$1,target_68831,matching_prefix_68832,target_ast_68833,prefix_length_68834,remaining_path_68835,segment_68836,params_68837,target_ident_68838,map__68464_68825,map__68464_68826__$1,component_68827__$1,path_68828__$2,G__68450_68818,map__68451_68819,map__68451_68820__$1,component_68821,path_68822,app,state_map,root_query,ast,root,result))
,null)),null,1285837143,null);
} else {
}

if(cljs.core.vector_QMARK_(target_ident_68838)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_68838,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_68831,new cljs.core.Keyword(null,"params","params",710516235),params_68837));
} else {
}

if(cljs.core.seq(remaining_path_68835)){
var G__68839 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_68833,remaining_path_68835);
var G__68840 = remaining_path_68835;
G__68450_68823__$1 = G__68839;
path_68824__$1 = G__68840;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$lang$maxFixedArity = 4);

/**
 * Tell active routers that they are about to leave the screen. Returns false if any of them deny the route change.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving = (function com$fulcrologic$fulcro$routing$dynamic_routing$signal_router_leaving(var_args){
var G__68478 = arguments.length;
switch (G__68478) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,timeouts_and_params);
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
var to_signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var to_cancel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var _ = (function (){var G__68480 = root;
var map__68481 = G__68480;
var map__68481__$1 = (((((!((map__68481 == null))))?(((((map__68481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68481):map__68481);
var node = map__68481__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68481__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining = new_path;
var G__68480__$1 = G__68480;
var new_path_remaining__$1 = new_path_remaining;
while(true){
var map__68483 = G__68480__$1;
var map__68483__$1 = (((((!((map__68483 == null))))?(((((map__68483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68483):map__68483);
var node__$1 = map__68483__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68483__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining__$2 = new_path_remaining__$1;
if(cljs.core.truth_((function (){var and__4115__auto__ = component__$1;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__4115__auto__;
}
})())){
var new_target = cljs.core.first(new_path_remaining__$2);
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var map__68485 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)));
var map__68485__$1 = (((((!((map__68485 == null))))?(((((map__68485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68485):map__68485);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68485__$1,new cljs.core.Keyword(null,"target","target",253001721));
var next_router = cljs.core.some(((function (G__68480__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__68485,map__68485__$1,target,map__68483,map__68483__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__68480,map__68481,map__68481__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (p1__68475_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__68475_SHARP_);
});})(G__68480__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__68485,map__68485__$1,target,map__68483,map__68483__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__68480,map__68481,map__68481__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,children__$1);
if(edn_query_language.core.ident_QMARK_(target)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_cancel,cljs.core.conj,target);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_target,active_target)) && (cljs.core.vector_QMARK_(active_target)))){
var mounted_target_class_68842 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__68480__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__68485,map__68485__$1,target,next_router,map__68483,map__68483__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__68480,map__68481,map__68481__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (acc,p__68487){
var map__68488 = p__68487;
var map__68488__$1 = (((((!((map__68488 == null))))?(((((map__68488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68488):map__68488);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68488__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68488__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component__$2);
} else {
return null;
}
});})(G__68480__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__68485,map__68485__$1,target,next_router,map__68483,map__68483__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__68480,map__68481,map__68481__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null,(function (){var G__68490 = component__$1;
var G__68490__$1 = (((G__68490 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__68490,state_map));
var G__68490__$2 = (((G__68490__$1 == null))?null:edn_query_language.core.query__GT_ast(G__68490__$1));
if((G__68490__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__68490__$2);
}
})());
var mounted_targets_68843 = com.fulcrologic.fulcro.components.class__GT_all(app,mounted_target_class_68842);
if(cljs.core.seq(mounted_targets_68843)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_signal,cljs.core.into,mounted_targets_68843);
} else {
}
} else {
}

if(cljs.core.truth_(next_router)){
var G__68844 = next_router;
var G__68845 = cljs.core.rest(new_path_remaining__$2);
G__68480__$1 = G__68844;
new_path_remaining__$1 = G__68845;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
})();
var components = cljs.core.reverse(cljs.core.deref(to_signal));
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var seq__68491_68846 = cljs.core.seq(components);
var chunk__68492_68847 = null;
var count__68493_68848 = (0);
var i__68494_68849 = (0);
while(true){
if((i__68494_68849 < count__68493_68848)){
var c_68850 = chunk__68492_68847.cljs$core$IIndexed$_nth$arity$2(null,i__68494_68849);
var will_leave_result_68851 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_68850,com.fulcrologic.fulcro.raw.components.props(c_68850));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__68491_68846,chunk__68492_68847,count__68493_68848,i__68494_68849,will_leave_result_68851,c_68850,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__68476_SHARP_){
var and__4115__auto__ = p1__68476_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return will_leave_result_68851;
} else {
return and__4115__auto__;
}
});})(seq__68491_68846,chunk__68492_68847,count__68493_68848,i__68494_68849,will_leave_result_68851,c_68850,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__68852 = seq__68491_68846;
var G__68853 = chunk__68492_68847;
var G__68854 = count__68493_68848;
var G__68855 = (i__68494_68849 + (1));
seq__68491_68846 = G__68852;
chunk__68492_68847 = G__68853;
count__68493_68848 = G__68854;
i__68494_68849 = G__68855;
continue;
} else {
var temp__5735__auto___68856 = cljs.core.seq(seq__68491_68846);
if(temp__5735__auto___68856){
var seq__68491_68857__$1 = temp__5735__auto___68856;
if(cljs.core.chunked_seq_QMARK_(seq__68491_68857__$1)){
var c__4556__auto___68858 = cljs.core.chunk_first(seq__68491_68857__$1);
var G__68859 = cljs.core.chunk_rest(seq__68491_68857__$1);
var G__68860 = c__4556__auto___68858;
var G__68861 = cljs.core.count(c__4556__auto___68858);
var G__68862 = (0);
seq__68491_68846 = G__68859;
chunk__68492_68847 = G__68860;
count__68493_68848 = G__68861;
i__68494_68849 = G__68862;
continue;
} else {
var c_68863 = cljs.core.first(seq__68491_68857__$1);
var will_leave_result_68864 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_68863,com.fulcrologic.fulcro.raw.components.props(c_68863));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__68491_68846,chunk__68492_68847,count__68493_68848,i__68494_68849,will_leave_result_68864,c_68863,seq__68491_68857__$1,temp__5735__auto___68856,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__68476_SHARP_){
var and__4115__auto__ = p1__68476_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return will_leave_result_68864;
} else {
return and__4115__auto__;
}
});})(seq__68491_68846,chunk__68492_68847,count__68493_68848,i__68494_68849,will_leave_result_68864,c_68863,seq__68491_68857__$1,temp__5735__auto___68856,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__68865 = cljs.core.next(seq__68491_68857__$1);
var G__68866 = null;
var G__68867 = (0);
var G__68868 = (0);
seq__68491_68846 = G__68865;
chunk__68492_68847 = G__68866;
count__68493_68848 = G__68867;
i__68494_68849 = G__68868;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(result))){
var seq__68495_68869 = cljs.core.seq(cljs.core.deref(to_cancel));
var chunk__68496_68870 = null;
var count__68497_68871 = (0);
var i__68498_68872 = (0);
while(true){
if((i__68498_68872 < count__68497_68871)){
var t_68873 = chunk__68496_68870.cljs$core$IIndexed$_nth$arity$2(null,i__68498_68872);
var map__68505_68874 = (function (){var G__68506 = t_68873;
if((G__68506 == null)){
return null;
} else {
return cljs.core.meta(G__68506);
}
})();
var map__68505_68875__$1 = (((((!((map__68505_68874 == null))))?(((((map__68505_68874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68505_68874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68505_68874):map__68505_68874);
var component_68876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68505_68875__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_68877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68505_68875__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_68876,params_68877);


var G__68878 = seq__68495_68869;
var G__68879 = chunk__68496_68870;
var G__68880 = count__68497_68871;
var G__68881 = (i__68498_68872 + (1));
seq__68495_68869 = G__68878;
chunk__68496_68870 = G__68879;
count__68497_68871 = G__68880;
i__68498_68872 = G__68881;
continue;
} else {
var temp__5735__auto___68882 = cljs.core.seq(seq__68495_68869);
if(temp__5735__auto___68882){
var seq__68495_68883__$1 = temp__5735__auto___68882;
if(cljs.core.chunked_seq_QMARK_(seq__68495_68883__$1)){
var c__4556__auto___68884 = cljs.core.chunk_first(seq__68495_68883__$1);
var G__68885 = cljs.core.chunk_rest(seq__68495_68883__$1);
var G__68886 = c__4556__auto___68884;
var G__68887 = cljs.core.count(c__4556__auto___68884);
var G__68888 = (0);
seq__68495_68869 = G__68885;
chunk__68496_68870 = G__68886;
count__68497_68871 = G__68887;
i__68498_68872 = G__68888;
continue;
} else {
var t_68889 = cljs.core.first(seq__68495_68883__$1);
var map__68508_68890 = (function (){var G__68509 = t_68889;
if((G__68509 == null)){
return null;
} else {
return cljs.core.meta(G__68509);
}
})();
var map__68508_68891__$1 = (((((!((map__68508_68890 == null))))?(((((map__68508_68890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68508_68890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68508_68890):map__68508_68890);
var component_68892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68508_68891__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_68893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68508_68891__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_68892,params_68893);


var G__68894 = cljs.core.next(seq__68495_68883__$1);
var G__68895 = null;
var G__68896 = (0);
var G__68897 = (0);
seq__68495_68869 = G__68894;
chunk__68496_68870 = G__68895;
count__68497_68871 = G__68896;
i__68498_68872 = G__68897;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$lang$maxFixedArity = 4);

/**
 * Returns the current active route, starting from the relative Fulcro class or instance.
 * 
 *   Any component using this as a basis for rendering will need to add the following to their query to
 *   ensure the props of that component change on route changes:
 * 
 *   ```
 *   [::uism/asm-id fq-router-kw]
 *   ```
 * 
 *   where `fq-router-kw` is a keyword that has the exact namespace and name of the router you're interested in. If you want
 *   to just over-render you can use a quoted `_` instead.
 * 
 *   NOTE: This function is primarily meant to be used in mutation implementations or with global routing.
 *   It is not reliable to use this function during render because it relies on the router being mounted (and render gets
 *   called in order to determine what to render). If you want to know the current state of a particular
 *   router you should query for it's ASM as indicated above.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route(var_args){
var G__68513 = arguments.length;
switch (G__68513) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var temp__5733__auto__ = (function (){var G__68518 = this_or_app;
var G__68518__$1 = (((G__68518 == null))?null:com.fulcrologic.fulcro.raw.components.any__GT_app(G__68518));
if((G__68518__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.root_class(G__68518__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cls = temp__5733__auto__;
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(this_or_app,cls);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class_or_instance){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__68520_68899 = root;
var map__68521_68900 = G__68520_68899;
var map__68521_68901__$1 = (((((!((map__68521_68900 == null))))?(((((map__68521_68900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68521_68900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68521_68900):map__68521_68900);
var node_68902 = map__68521_68901__$1;
var component_68903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68521_68901__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__68520_68904__$1 = G__68520_68899;
while(true){
var map__68528_68905 = G__68520_68904__$1;
var map__68528_68906__$1 = (((((!((map__68528_68905 == null))))?(((((map__68528_68905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68528_68905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68528_68905):map__68528_68905);
var node_68907__$1 = map__68528_68906__$1;
var component_68908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68528_68906__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_((function (){var and__4115__auto__ = component_68908__$1;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_68908__$1);
} else {
return and__4115__auto__;
}
})())){
var router_ident_68909 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_68908__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_68910 = cljs.core.second(router_ident_68909);
var sm_env_68911 = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_id_68910,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.PersistentArrayMap.EMPTY);
var path_segment_68912 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env_68911,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var next_router_68913 = cljs.core.some(((function (G__68520_68904__$1,router_ident_68909,router_id_68910,sm_env_68911,path_segment_68912,map__68528_68905,map__68528_68906__$1,node_68907__$1,component_68908__$1,G__68520_68899,map__68521_68900,map__68521_68901__$1,node_68902,component_68903,app,state_map,router,root_query,ast,root,result){
return (function (p1__68511_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__68511_SHARP_);
});})(G__68520_68904__$1,router_ident_68909,router_id_68910,sm_env_68911,path_segment_68912,map__68528_68905,map__68528_68906__$1,node_68907__$1,component_68908__$1,G__68520_68899,map__68521_68900,map__68521_68901__$1,node_68902,component_68903,app,state_map,router,root_query,ast,root,result))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_68907__$1));
if(cljs.core.seq(path_segment_68912)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.into,path_segment_68912);
} else {
}

if(cljs.core.truth_(next_router_68913)){
var G__68914 = next_router_68913;
G__68520_68904__$1 = G__68914;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$mounted_targets(app,router_class){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var mounted_target_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__68530){
var map__68531 = p__68530;
var map__68531__$1 = (((((!((map__68531 == null))))?(((((map__68531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68531):map__68531);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68531__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68531__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component);
} else {
return null;
}
}),null,(function (){var G__68533 = router_class;
var G__68533__$1 = (((G__68533 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__68533,state_map));
var G__68533__$2 = (((G__68533__$1 == null))?null:edn_query_language.core.query__GT_ast(G__68533__$1));
if((G__68533__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__68533__$2);
}
})());
return com.fulcrologic.fulcro.components.class__GT_all(app,mounted_target_class);
});
com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$set_force_route_flag_BANG_(route_target){
return goog.object.set(route_target,"fulcro$routing$force_route",true);
});
/**
 * returns true if the given route target's allow-route-change? should be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$force_route_flagged_QMARK_(route_target){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(route_target,"fulcro$routing$force_route");
});
/**
 * This function will return the first mounted instance of a route target that is currently indicating it would
 *   deny a route change. If a `relative-class` is given then it only looks for targets that would deny a change within
 *   that router's subtree.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_denying_route_changes(var_args){
var G__68536 = arguments.length;
switch (G__68536) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var G__68538 = root;
var map__68539 = G__68538;
var map__68539__$1 = (((((!((map__68539 == null))))?(((((map__68539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68539):map__68539);
var router_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68539__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__68538__$1 = G__68538;
while(true){
var map__68543 = G__68538__$1;
var map__68543__$1 = (((((!((map__68543 == null))))?(((((map__68543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68543):map__68543);
var router_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__4115__auto__ = router_class__$1;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class__$1);
} else {
return and__4115__auto__;
}
})())){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(router_class__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var next_router = cljs.core.some(((function (G__68538__$1,router_ident,active_target,map__68543,map__68543__$1,router_class__$1,children__$1,G__68538,map__68539,map__68539__$1,router_class,children,app,state_map,root_query,ast,root){
return (function (p1__68534_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__68534_SHARP_);
});})(G__68538__$1,router_ident,active_target,map__68543,map__68543__$1,router_class__$1,children__$1,G__68538,map__68539,map__68539__$1,router_class,children,app,state_map,root_query,ast,root))
,children__$1);
var rejecting_target = ((cljs.core.vector_QMARK_(active_target))?cljs.core.some(((function (G__68538__$1,router_ident,active_target,next_router,map__68543,map__68543__$1,router_class__$1,children__$1,G__68538,map__68539,map__68539__$1,router_class,children,app,state_map,root_query,ast,root){
return (function (c){
if(((com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_(c) === false) && (cljs.core.not(com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_(c))))){
return c;
} else {
return null;
}
});})(G__68538__$1,router_ident,active_target,next_router,map__68543,map__68543__$1,router_class__$1,children__$1,G__68538,map__68539,map__68539__$1,router_class,children,app,state_map,root_query,ast,root))
,com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets(app,router_class__$1)):null);
if(cljs.core.truth_(rejecting_target)){
return rejecting_target;
} else {
if(cljs.core.truth_(next_router)){
var G__68916 = next_router;
G__68538__$1 = G__68916;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var router = com.fulcrologic.fulcro.application.root_class(app);
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(app,router);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the active on-screen targets indicate they will allow navigation.
 * 
 *   NOTE: If your route targets have an `:allow-route-change?`, then that will be used to determine if the route can
 *   be abandoned; otherwise `:will-leave` will be called to answer the question; however, this USE of `will-leave`
 *   is DEPRECATED (though the hook is NOT because it serves another purpose). If you side-effect in `:will-leave` this could cause strange
 *   behavior throughout the application.  It is recommended that your targets implement `:allow-route-change?` if they need
 *   to prevent routing, and only leverage `:will-leave` to do things like cancel in-progress loads.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$can_change_route_QMARK_(var_args){
var G__68547 = arguments.length;
switch (G__68547) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1(this_or_app) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(this_or_app,relative_class) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Takes an on-screen *instance* of a react element and a new route (vector of strings) and returns a vector containing
 * either the original arguments, or an evaluation of relative navigation up the live routing tree.
 * 
 * If `new-route` starts with `:..` (any number of times) then this function finds (and returns) the parent *router*
 * and the new route stripped of `:..` prefix.
 * 
 * For example, say you were in a target instance that has a parent router, which in turn has a parent router called
 * `SomeRouter`. Then:
 * 
 * ```
 * (dr/evaluate-relative-path this [:.. :.. "some-target"])
 * => [SomeRouter ["some-target"]]
 * ```
 * 
 * This function does *not* work on classes. It is meant for live evaluation of on-screen instances to enable relative
 * routing based on the actual on-screen route targets.
 * 
 * CAN return `nil` for the router if no such parent is found.
 * 
 * Returns unmodified input argument if `new-route` does not begin with `:..`.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$evaluate_relative_path(relative_instance,new_route){
var current_instance = relative_instance;
var G__68554 = new_route;
var vec__68555 = G__68554;
var seq__68556 = cljs.core.seq(vec__68555);
var first__68557 = cljs.core.first(seq__68556);
var seq__68556__$1 = cljs.core.next(seq__68556);
var lead_element = first__68557;
var remainder = seq__68556__$1;
var path = vec__68555;
var looking_for_router_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element);
var current_instance__$1 = current_instance;
var G__68554__$1 = G__68554;
var looking_for_router_QMARK___$1 = looking_for_router_QMARK_;
while(true){
var current_instance__$2 = current_instance__$1;
var vec__68561 = G__68554__$1;
var seq__68562 = cljs.core.seq(vec__68561);
var first__68563 = cljs.core.first(seq__68562);
var seq__68562__$1 = cljs.core.next(seq__68562);
var lead_element__$1 = first__68563;
var remainder__$1 = seq__68562__$1;
var path__$1 = vec__68561;
var looking_for_router_QMARK___$2 = looking_for_router_QMARK___$1;
if((((current_instance__$2 == null)) || (cljs.core.empty_QMARK_(path__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = looking_for_router_QMARK___$2;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(current_instance__$2);
} else {
return and__4115__auto__;
}
})())){
var G__68918 = current_instance__$2;
var G__68919 = cljs.core.vec(remainder__$1);
var G__68920 = false;
current_instance__$1 = G__68918;
G__68554__$1 = G__68919;
looking_for_router_QMARK___$1 = G__68920;
continue;
} else {
if(cljs.core.truth_(looking_for_router_QMARK___$2)){
var G__68921 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__68922 = path__$1;
var G__68923 = true;
current_instance__$1 = G__68921;
G__68554__$1 = G__68922;
looking_for_router_QMARK___$1 = G__68923;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element__$1)){
var G__68924 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__68925 = path__$1;
var G__68926 = true;
current_instance__$1 = G__68924;
G__68554__$1 = G__68925;
looking_for_router_QMARK___$1 = G__68926;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);

}
}
}
}
break;
}
});
/**
 * Change the route, starting at the given Fulcro class or instance (scanning for the first router from there).  `new-route` is a vector
 *   of string components to pass through to the nearest child router as the new path. The first argument is any live component
 *   or the app.  The `timeouts-and-params` are as in `change-route`.
 * 
 *   When possible (i.e. no circular references to components) you can maintain better code navigation by
 *   generating `new-route` via `path-to`.  This will allow readers of your code to quickly jump to the actual
 *   components that implement the targets when reading the code.
 * 
 *   You may include the special keyword `:..` any number of times at the beginning of `new-route` to indicate the
 *   parent(s) of `relative-class-or-instance`, which allows you to do relative routing to a sibling.
 * 
 *   ```
 *   (dr/change-route-relative this this [:.. "sibling-pattern"])
 *   ```
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_relative_BANG_(var_args){
var G__68565 = arguments.length;
switch (G__68565) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var vec__68569 = com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path(relative_class_or_instance,new_route);
var relative_class_or_instance__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68569,(0),null);
var new_route__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68569,(1),null);
var relative_class = (cljs.core.truth_((com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(relative_class_or_instance__$1) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,relative_class_or_instance__$1)))?com.fulcrologic.fulcro.components.react_type(relative_class_or_instance__$1):relative_class_or_instance__$1);
var old_route = com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class);
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class,new_route__$1,timeouts_and_params);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,new_route__$1)) && (cljs.core.not(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","force?","com.fulcrologic.fulcro.routing.dynamic-routing/force?",-1506318960).cljs$core$IFn$_invoke$arity$1(timeouts_and_params))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,679,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Request to change route, but path is the current route. Ignoring change request."], null);
}),null)),null,-878542549,null);

return new cljs.core.Keyword(null,"already-there","already-there",1156142236);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.seq(new_path));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,684,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find route targets for new-route",new_route__$1,"See https://book.fulcrologic.com/#err-dr-new-route-target-not-found"], null);
}),null)),null,-688434163,null);

return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
if((!(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class)))){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var target = com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(app,relative_class);
var route_denied = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-denied","route-denied",-1140339590)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,691,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route request denied by on-screen target",target,". Calling component's :route-denied (if defined)."], null);
}),null)),null,5100375,null);

if(cljs.core.truth_(route_denied)){
(route_denied.cljs$core$IFn$_invoke$arity$4 ? route_denied.cljs$core$IFn$_invoke$arity$4(target,relative_class_or_instance__$1,new_route__$1,timeouts_and_params) : route_denied.call(null,target,relative_class_or_instance__$1,new_route__$1,timeouts_and_params));
} else {
}

return new cljs.core.Keyword(null,"denied","denied",-1141109291);
} else {
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance__$1,new_route__$1,timeouts_and_params);

var app_68928 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map_68929 = com.fulcrologic.fulcro.application.current_state(app_68928);
var router_68930 = relative_class_or_instance__$1;
var root_query_68931 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router_68930,state_map_68929);
var ast_68932 = edn_query_language.core.query__GT_ast(root_query_68931);
var root_68933 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast_68932,new_route__$1);
var routing_actions_68934 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var pessimistic_txn_68935 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var delayed_targets_68936 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__68573_68937 = root_68933;
var map__68574_68938 = G__68573_68937;
var map__68574_68939__$1 = (((((!((map__68574_68938 == null))))?(((((map__68574_68938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68574_68938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68574_68938):map__68574_68938);
var component_68940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68574_68939__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_68941 = new_route__$1;
var G__68573_68942__$1 = G__68573_68937;
var path_68943__$1 = path_68941;
while(true){
var map__68597_68944 = G__68573_68942__$1;
var map__68597_68945__$1 = (((((!((map__68597_68944 == null))))?(((((map__68597_68944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68597_68944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68597_68944):map__68597_68944);
var component_68946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68597_68945__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_68947__$2 = path_68943__$1;
if(cljs.core.truth_((function (){var and__4115__auto__ = component_68946__$1;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_68946__$1);
} else {
return and__4115__auto__;
}
})())){
var map__68599_68948 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_68946__$1,path_68947__$2);
var map__68599_68949__$1 = (((((!((map__68599_68948 == null))))?(((((map__68599_68948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68599_68948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68599_68948):map__68599_68948);
var target_68950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68599_68949__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_68951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68599_68949__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_68952 = (function (){var G__68602 = target_68950;
var G__68602__$1 = (((G__68602 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__68602,state_map_68929));
if((G__68602__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__68602__$1);
}
})();
var prefix_length_68953 = cljs.core.count(matching_prefix_68951);
var remaining_path_68954 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_68953,path_68947__$2));
var segment_68955 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_68950);
var params_68956 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__68573_68942__$1,path_68943__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (p,p__68603){
var vec__68604 = p__68603;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68604,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__68573_68942__$1,path_68943__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__68573_68942__$1,path_68943__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__68573_68942__$1,path_68943__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,segment_68955,matching_prefix_68951));
var router_ident_68957 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_68946__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_68958 = cljs.core.second(router_ident_68957);
var target_ident_68959 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_68950,app_68928,params_68956);
var map__68600_68960 = cljs.core.meta(target_ident_68959);
var map__68600_68961__$1 = (((((!((map__68600_68960 == null))))?(((((map__68600_68960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68600_68960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68600_68960):map__68600_68960);
var path_ordered_QMARK__68962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600_68961__$1,new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295));
var txn_68963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600_68961__$1,new cljs.core.Keyword(null,"txn","txn",-469204789));
var show_early_QMARK__68964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600_68961__$1,new cljs.core.Keyword(null,"show-early?","show-early?",-1632022246));
var optimistic_QMARK__68965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600_68961__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var completing_action_68966 = (function (){var or__4126__auto__ = (function (){var G__68609 = target_ident_68959;
var G__68609__$1 = (((G__68609 == null))?null:cljs.core.meta(G__68609));
if((G__68609__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__68609__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = optimistic_QMARK__68965;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.seq(txn_68963);
if(and__4115__auto____$1){
return ((function (G__68573_68942__$1,path_68943__$1,and__4115__auto____$1,and__4115__auto__,or__4126__auto__,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,params_68956,router_ident_68957,router_id_68958,target_ident_68959,map__68600_68960,map__68600_68961__$1,path_ordered_QMARK__68962,txn_68963,show_early_QMARK__68964,optimistic_QMARK__68965,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_68928,txn_68963);
});
;})(G__68573_68942__$1,path_68943__$1,and__4115__auto____$1,and__4115__auto__,or__4126__auto__,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,params_68956,router_ident_68957,router_id_68958,target_ident_68959,map__68600_68960,map__68600_68961__$1,path_ordered_QMARK__68962,txn_68963,show_early_QMARK__68964,optimistic_QMARK__68965,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
})();
var event_data_68967 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000),new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20)], null),timeouts_and_params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),matching_prefix_68951,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident_68957,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component_68946__$1),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_68959,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_68950,new cljs.core.Keyword(null,"params","params",710516235),params_68956)], null)], 0));
if(cljs.core.truth_((function (){var and__4115__auto__ = path_ordered_QMARK__68962;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.seq(txn_68963)) && (cljs.core.not(optimistic_QMARK__68965)));
} else {
return and__4115__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_68935,cljs.core.into,txn_68963);

if(cljs.core.truth_(show_early_QMARK__68964)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_68935,cljs.core.conj,(function (){var G__68610 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_68959], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__68610) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__68610));
})());
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(delayed_targets_68936,cljs.core.conj,(function (){var G__68611 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_68959], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__68611) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__68611));
})());
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(routing_actions_68934,cljs.core.conj,((function (G__68573_68942__$1,path_68943__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,params_68956,router_ident_68957,router_id_68958,target_ident_68959,map__68600_68960,map__68600_68961__$1,path_ordered_QMARK__68962,txn_68963,show_early_QMARK__68964,optimistic_QMARK__68965,completing_action_68966,event_data_68967,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
if(cljs.core.not(com.fulcrologic.fulcro.ui_state_machines.get_active_state(app_68928,router_id_68958))){
var state_map_68969__$1 = com.fulcrologic.fulcro.components.component__GT_state_map(app_or_comp);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(state_map_68969__$1),router_id_68958))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,748,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__68573_68942__$1,path_68943__$1,state_map_68969__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,params_68956,router_ident_68957,router_id_68958,target_ident_68959,map__68600_68960,map__68600_68961__$1,path_ordered_QMARK__68962,txn_68963,show_early_QMARK__68964,optimistic_QMARK__68965,completing_action_68966,event_data_68967,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You are routing to a router ",router_id_68958,"whose state was not composed into the app from root. Please check your :initial-state. See https://book.fulcrologic.com/#err-dr-router-state-missing"], null);
});})(G__68573_68942__$1,path_68943__$1,state_map_68969__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,params_68956,router_ident_68957,router_id_68958,target_ident_68959,map__68600_68960,map__68600_68961__$1,path_ordered_QMARK__68962,txn_68963,show_early_QMARK__68964,optimistic_QMARK__68965,completing_action_68966,event_data_68967,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,null)),null,-1343934643,null);
}

com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app_or_comp,com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine,router_id_68958,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident_68957,component_68946__$1)], null),event_data_68967);
} else {
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_68928,router_id_68958,new cljs.core.Keyword(null,"route!","route!",-1286958144),event_data_68967);
}

var _STAR_after_render_STAR__orig_val__68612 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__68613 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__68613);

try{return (completing_action_68966.cljs$core$IFn$_invoke$arity$0 ? completing_action_68966.cljs$core$IFn$_invoke$arity$0() : completing_action_68966.call(null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__68612);
}});})(G__68573_68942__$1,path_68943__$1,map__68599_68948,map__68599_68949__$1,target_68950,matching_prefix_68951,target_ast_68952,prefix_length_68953,remaining_path_68954,segment_68955,params_68956,router_ident_68957,router_id_68958,target_ident_68959,map__68600_68960,map__68600_68961__$1,path_ordered_QMARK__68962,txn_68963,show_early_QMARK__68964,optimistic_QMARK__68965,completing_action_68966,event_data_68967,map__68597_68944,map__68597_68945__$1,component_68946__$1,path_68947__$2,G__68573_68937,map__68574_68938,map__68574_68939__$1,component_68940,path_68941,app_68928,state_map_68929,router_68930,root_query_68931,ast_68932,root_68933,routing_actions_68934,pessimistic_txn_68935,delayed_targets_68936,vec__68569,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
);

if(cljs.core.seq(remaining_path_68954)){
var G__68970 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_68952,remaining_path_68954);
var G__68971 = remaining_path_68954;
G__68573_68942__$1 = G__68970;
path_68943__$1 = G__68971;
continue;
} else {
}
} else {
}
break;
}

var seq__68618_68972 = cljs.core.seq(cljs.core.deref(routing_actions_68934));
var chunk__68619_68973 = null;
var count__68620_68974 = (0);
var i__68621_68975 = (0);
while(true){
if((i__68621_68975 < count__68620_68974)){
var action_68976 = chunk__68619_68973.cljs$core$IIndexed$_nth$arity$2(null,i__68621_68975);
(action_68976.cljs$core$IFn$_invoke$arity$0 ? action_68976.cljs$core$IFn$_invoke$arity$0() : action_68976.call(null));


var G__68977 = seq__68618_68972;
var G__68978 = chunk__68619_68973;
var G__68979 = count__68620_68974;
var G__68980 = (i__68621_68975 + (1));
seq__68618_68972 = G__68977;
chunk__68619_68973 = G__68978;
count__68620_68974 = G__68979;
i__68621_68975 = G__68980;
continue;
} else {
var temp__5735__auto___68981 = cljs.core.seq(seq__68618_68972);
if(temp__5735__auto___68981){
var seq__68618_68984__$1 = temp__5735__auto___68981;
if(cljs.core.chunked_seq_QMARK_(seq__68618_68984__$1)){
var c__4556__auto___68985 = cljs.core.chunk_first(seq__68618_68984__$1);
var G__68986 = cljs.core.chunk_rest(seq__68618_68984__$1);
var G__68987 = c__4556__auto___68985;
var G__68988 = cljs.core.count(c__4556__auto___68985);
var G__68989 = (0);
seq__68618_68972 = G__68986;
chunk__68619_68973 = G__68987;
count__68620_68974 = G__68988;
i__68621_68975 = G__68989;
continue;
} else {
var action_68990 = cljs.core.first(seq__68618_68984__$1);
(action_68990.cljs$core$IFn$_invoke$arity$0 ? action_68990.cljs$core$IFn$_invoke$arity$0() : action_68990.call(null));


var G__68991 = cljs.core.next(seq__68618_68984__$1);
var G__68992 = null;
var G__68993 = (0);
var G__68994 = (0);
seq__68618_68972 = G__68991;
chunk__68619_68973 = G__68992;
count__68620_68974 = G__68993;
i__68621_68975 = G__68994;
continue;
}
} else {
}
}
break;
}

if(((cljs.core.seq(cljs.core.deref(pessimistic_txn_68935))) || (cljs.core.seq(cljs.core.deref(delayed_targets_68936))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,763,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running pessimistic transaction",cljs.core.deref(pessimistic_txn_68935),"with delayed targets",cljs.core.deref(delayed_targets_68936)], null);
}),null)),null,-1884357465,null);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_68928,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pessimistic_txn_68935),cljs.core.reverse(cljs.core.deref(delayed_targets_68936)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
} else {
}

return new cljs.core.Keyword(null,"routing","routing",1440253662);

}
}
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * DEPRECATED NAME: Use change-route-relative!
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_;
/**
 * Retry a route that the receiving component just denied, and ignore this target's answer. All other targets will still
 *   be asked. This is primarily used when you want to be able to use js/confirm in a component to ask the user if
 *   they "really mean to navigate away". You MUST pass the arguments that `:route-denied` received
 *   or you can easily cause an infinite loop. Other on-screen targets can still potentially abort the route.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$retry_route_BANG_(var_args){
var G__68625 = arguments.length;
switch (G__68625) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (denied_target_instance,relative_root,path){
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(denied_target_instance,relative_root,path,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (denied_target_instance,relative_root,path,timeouts_and_params){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,780,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retrying route at the request of ",com.fulcrologic.fulcro.raw.components.component_name(denied_target_instance)], null);
}),null)),null,113293210,null);

com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_(denied_target_instance);

return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(denied_target_instance,relative_root,path,timeouts_and_params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Trigger a route change.
 * 
 *   * `this` - The component (or app) that is causing the route change.
 *   * `new-route` - A vector of URI components to pass to the router.
 *   * `timeouts-and-params` - A map of additional parameters and route timeouts that affect UI during deferred routes:
 *   `{:error-timeout ms :deferred-timeout ms}`.  Anything extra will appear in the `params` of `will-enter`.
 * 
 *   The error timeout is how long to wait  (default 5000ms) before showing the error-ui of a route (which must be defined on the
 *   router that is having problems).  The deferred-timeout (default 100ms) is how long to wait before showing the loading-ui of
 *   a deferred router (to prevent flicker).
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_BANG_(var_args){
var G__68627 = arguments.length;
switch (G__68627) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,new_route,timeouts_and_params){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
var root = com.fulcrologic.fulcro.application.root_class(app);
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(app,root,new_route,timeouts_and_params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.change_route = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_;
/**
 * Run a runtime validation on route targets to verify that they at least declare a route-segment that is a vector.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$validate_route_targets(router_instance){
var seq__68629 = cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_instance));
var chunk__68631 = null;
var count__68632 = (0);
var i__68633 = (0);
while(true){
if((i__68633 < count__68632)){
var t = chunk__68631.cljs$core$IIndexed$_nth$arity$2(null,i__68633);
var segment_68997 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__68998 = ((cljs.core.vector_QMARK_(segment_68997)) && ((!(cljs.core.empty_QMARK_(segment_68997)))) && (cljs.core.every_QMARK_(((function (seq__68629,chunk__68631,count__68632,i__68633,segment_68997,t){
return (function (p1__68628_SHARP_){
return (((p1__68628_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__68628_SHARP_ === 'string'));
});})(seq__68629,chunk__68631,count__68632,i__68633,segment_68997,t))
,segment_68997)));
if(valid_QMARK__68998){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,830,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__68629,chunk__68631,count__68632,i__68633,segment_68997,valid_QMARK__68998,t){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__68629,chunk__68631,count__68632,i__68633,segment_68997,valid_QMARK__68998,t))
,null)),null,-540818347,null);
}


var G__68999 = seq__68629;
var G__69000 = chunk__68631;
var G__69001 = count__68632;
var G__69002 = (i__68633 + (1));
seq__68629 = G__68999;
chunk__68631 = G__69000;
count__68632 = G__69001;
i__68633 = G__69002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68629);
if(temp__5735__auto__){
var seq__68629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68629__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68629__$1);
var G__69003 = cljs.core.chunk_rest(seq__68629__$1);
var G__69004 = c__4556__auto__;
var G__69005 = cljs.core.count(c__4556__auto__);
var G__69006 = (0);
seq__68629 = G__69003;
chunk__68631 = G__69004;
count__68632 = G__69005;
i__68633 = G__69006;
continue;
} else {
var t = cljs.core.first(seq__68629__$1);
var segment_69007 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__69008 = ((cljs.core.vector_QMARK_(segment_69007)) && ((!(cljs.core.empty_QMARK_(segment_69007)))) && (cljs.core.every_QMARK_(((function (seq__68629,chunk__68631,count__68632,i__68633,segment_69007,t,seq__68629__$1,temp__5735__auto__){
return (function (p1__68628_SHARP_){
return (((p1__68628_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__68628_SHARP_ === 'string'));
});})(seq__68629,chunk__68631,count__68632,i__68633,segment_69007,t,seq__68629__$1,temp__5735__auto__))
,segment_69007)));
if(valid_QMARK__69008){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,830,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__68629,chunk__68631,count__68632,i__68633,segment_69007,valid_QMARK__69008,t,seq__68629__$1,temp__5735__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__68629,chunk__68631,count__68632,i__68633,segment_69007,valid_QMARK__69008,t,seq__68629__$1,temp__5735__auto__))
,null)),null,-2059263014,null);
}


var G__69009 = cljs.core.next(seq__68629__$1);
var G__69010 = null;
var G__69011 = (0);
var G__69012 = (0);
seq__68629 = G__69009;
chunk__68631 = G__69010;
count__68632 = G__69011;
i__68633 = G__69012;
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
 * Returns a sequence of all of the routers reachable in the query of the app.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers(state_map,component_class){
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map);
var map__68643 = edn_query_language.core.query__GT_ast(root_query);
var map__68643__$1 = (((((!((map__68643 == null))))?(((((map__68643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68643):map__68643);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var get_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__68645){
var map__68646 = p__68645;
var map__68646__$1 = (((((!((map__68646 == null))))?(((((map__68646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68646):map__68646);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68646__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,component):acc),com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(children__$1));
}),cljs.core.PersistentVector.EMPTY,nodes);
});
return get_routers(children);
});
/**
 * Initialize the routing system.  This ensures that all routers have state machines in app state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$initialize_BANG_(app){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root = com.fulcrologic.fulcro.application.root_class(app);
var routers = com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers(state_map,root);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var G__68667 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),r)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,r)], null)], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__68667) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__68667));
}),routers);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,tx);
});
/**
 * Returns the given `prefix` with the TargetClass segment appended onto it, replacing the final elements with the
 * given (optional) path args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (into ["f" "g"] X "22") ; => ["f" "g" "a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.into_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$into_path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69013 = arguments.length;
var i__4737__auto___69014 = (0);
while(true){
if((i__4737__auto___69014 < len__4736__auto___69013)){
args__4742__auto__.push((arguments[i__4737__auto___69014]));

var G__69015 = (i__4737__auto___69014 + (1));
i__4737__auto___69014 = G__69015;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic = (function (prefix,TargetClass,path_args){
var nargs = cljs.core.count(path_args);
var path = (function (){var G__68683 = TargetClass;
var G__68683__$1 = (((G__68683 == null))?null:com.fulcrologic.fulcro.raw.components.component_options(G__68683));
if((G__68683__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"route-segment","route-segment",1812935886).cljs$core$IFn$_invoke$arity$1(G__68683__$1);
}
})();
var static_elements = (cljs.core.count(path) - nargs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(static_elements,path),path_args));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$applyTo = (function (seq68672){
var G__68673 = cljs.core.first(seq68672);
var seq68672__$1 = cljs.core.next(seq68672);
var G__68674 = cljs.core.first(seq68672__$1);
var seq68672__$2 = cljs.core.next(seq68672__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68673,G__68674,seq68672__$2);
}));

/**
 * Returns the route segment of the given TargetClass with the trailing elements replaced by path-args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (subpath X "22") ; => ["a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.subpath = (function com$fulcrologic$fulcro$routing$dynamic_routing$subpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69016 = arguments.length;
var i__4737__auto___69017 = (0);
while(true){
if((i__4737__auto___69017 < len__4736__auto___69016)){
args__4742__auto__.push((arguments[i__4737__auto___69017]));

var G__69018 = (i__4737__auto___69017 + (1));
i__4737__auto___69017 = G__69018;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic = (function (TargetClass,path_args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.routing.dynamic_routing.into_path,cljs.core.PersistentVector.EMPTY,TargetClass,path_args);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$applyTo = (function (seq68703){
var G__68704 = cljs.core.first(seq68703);
var seq68703__$1 = cljs.core.next(seq68703);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68704,seq68703__$1);
}));

/**
 * Convert a sequence of router targets and parameters into a vector of strings that represents the target route. Parameters
 *   can be sequenced inline:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (defsc B [_ _]
 *  {:route-segment ["b" :b-param]})
 * 
 *   (route-segment A a-param1 B b-param ...)
 *   ```
 * 
 *   where the parameters for a target immediately follow the component that requires them. Alternatively
 *   one can specify all of the parameters at the end as a single map using the parameter names that are used in
 *   the component `:route-segment` itself:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (route-segment A B C D {:a-param 1})
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.path_to = (function com$fulcrologic$fulcro$routing$dynamic_routing$path_to(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69019 = arguments.length;
var i__4737__auto___69020 = (0);
while(true){
if((i__4737__auto___69020 < len__4736__auto___69019)){
args__4742__auto__.push((arguments[i__4737__auto___69020]));

var G__69021 = (i__4737__auto___69020 + (1));
i__4737__auto___69020 = G__69021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic = (function (targets_and_params){
var segments = cljs.core.seq(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__68705_SHARP_){
if(cljs.core.fn_QMARK_(p1__68705_SHARP_)){
var or__4126__auto__ = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__68705_SHARP_) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,p1__68705_SHARP_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.component_class_QMARK_(p1__68705_SHARP_);
}
} else {
return false;
}
}),targets_and_params));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(segments))) && (cljs.core.map_QMARK_(cljs.core.first(cljs.core.second(segments)))))){
var path = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68706_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__68706_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(segments)], 0));
var params = cljs.core.first(cljs.core.second(segments));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,i,i);
}),path);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path,p__68709){
var vec__68710 = p__68709;
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68710,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68710,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68707_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__68707_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.butlast(classes)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.routing.dynamic_routing.subpath,cljs.core.last(classes),params));
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),segments));
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$applyTo = (function (seq68708){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68708));
}));

com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path_components(StartingClass,RouteTarget){
if(cljs.core.truth_(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(RouteTarget,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)))){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(StartingClass);
var root_node = edn_query_language.core.query__GT_ast(query);
var zipper = clojure.zip.zipper((function (p1__68713_SHARP_){
return cljs.core.contains_QMARK_(p1__68713_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982));
}),new cljs.core.Keyword(null,"children","children",-940561982),(function (n,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),children);
}),root_node);
var node = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (n){
var map__68714 = clojure.zip.node(n);
var map__68714__$1 = (((((!((map__68714 == null))))?(((((map__68714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68714):map__68714);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68714__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(component,RouteTarget)) && ((!(clojure.zip.end_QMARK_(n)))));
}),cljs.core.iterate(clojure.zip.next,zipper)));
var found_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(RouteTarget,(function (){var G__68716 = node;
var G__68716__$1 = (((G__68716 == null))?null:clojure.zip.node(G__68716));
if((G__68716__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__68716__$1);
}
})());
if(found_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),clojure.zip.path(node))),RouteTarget);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Attempts to resolve a path from StartingClass to the given RouteTarget. Can also be passed `resolved-components`, which
 *   is the output of `resolve-path-components`.
 * 
 * Returns a vector of route segments. Any keywords in the result will be replaced by the values from `params`, if present.
 * 
 * Returns nil if no path can be found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path(var_args){
var G__68719 = arguments.length;
switch (G__68719) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2 = (function (resolved_components,params){
if(cljs.core.seq(resolved_components)){
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__68717_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__68717_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
})),resolved_components);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
if(cljs.core.contains_QMARK_(params,ele)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,ele));
} else {
return ele;
}
}),base_path);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3 = (function (StartingClass,RouteTarget,params){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components(StartingClass,RouteTarget),params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$lang$maxFixedArity = 3);

/**
 * Given a new-route path (vector of strings): resolves the target (class) that is the ultimate target of that path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_target(app,new_route){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.application.root_class(app),state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var G__68721 = root;
var map__68722 = G__68721;
var map__68722__$1 = (((((!((map__68722 == null))))?(((((map__68722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68722):map__68722);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68722__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path = new_route;
var G__68721__$1 = G__68721;
var path__$1 = path;
while(true){
var map__68729 = G__68721__$1;
var map__68729__$1 = (((((!((map__68729 == null))))?(((((map__68729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68729):map__68729);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68729__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path__$2 = path__$1;
if(cljs.core.truth_((function (){var and__4115__auto__ = component__$1;
if(cljs.core.truth_(and__4115__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__4115__auto__;
}
})())){
var map__68731 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component__$1,path__$2);
var map__68731__$1 = (((((!((map__68731 == null))))?(((((map__68731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68731):map__68731);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast = (function (){var G__68733 = target;
var G__68733__$1 = (((G__68733 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__68733,state_map));
if((G__68733__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__68733__$1);
}
})();
var prefix_length = cljs.core.count(matching_prefix);
var remaining_path = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length,path__$2));
if(cljs.core.seq(remaining_path)){
var G__69023 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast,remaining_path);
var G__69024 = remaining_path;
G__68721__$1 = G__69023;
path__$1 = G__69024;
continue;
} else {
return target;
}
} else {
return null;
}
break;
}
});
var active_routes_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,p__68751,parent_component,ast_nodes){
var map__68752 = p__68751;
var map__68752__$1 = (((((!((map__68752 == null))))?(((((map__68752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68752):map__68752);
var result = map__68752__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68752__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var segment = (function (){var G__68754 = parent_component;
if((G__68754 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__68754);
}
})();
if((parent_component == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else {
if(cljs.core.truth_((function (){var G__68755 = parent_component;
if((G__68755 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(G__68755);
}
})())){
var ident = (function (){var G__68756 = parent_component;
if((G__68756 == null)){
return null;
} else {
var G__68757 = G__68756;
var G__68758 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__68757,G__68758) : com.fulcrologic.fulcro.components.get_ident.call(null,G__68757,G__68758));
}
})();
var active_ast_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__68759){
var map__68760 = p__68759;
var map__68760__$1 = (((((!((map__68760 == null))))?(((((map__68760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68760):map__68760);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68760__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key);
}),ast_nodes));
var new_parent = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(active_ast_node);
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment),new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),new_parent,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(active_ast_node));
} else {
if(cljs.core.truth_(segment)){
var subpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__68764){
var map__68765 = p__68764;
var map__68765__$1 = (((((!((map__68765 == null))))?(((((map__68765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68765):map__68765);
var node = map__68765__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68765__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),subpath,new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__68767){
var map__68768 = p__68767;
var map__68768__$1 = (((((!((map__68768 == null))))?(((((map__68768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68768):map__68768);
var node = map__68768__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68768__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,result,component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));

}
}
}
});
/**
 * Return a sequence of the leaf router targets that are routed to in the given app using the active dynamic query
 *   and app state.
 * 
 *   The return values are maps that currently contain a `:path` and `:target-component` key.
 *   Future versions of this function may include additional information.
 * 
 *   Note that dynamic routing purposely supports the ability to have more than one UI path active at a time, as it
 *   is NOT a strict URL-style UI router. However, since your code is ultimately responsible for determining what
 *   parts of the active query are rendered, it is possible for this to return routes that are available (in the props
 *   of components) but are not being rendered by your logic. Thus, the return value of this function isn't necessarily
 *   proof that the routes listed are visible to the user.
 * 
 *   WARNING: If you use disconnected roots (via hooks or otherwise), then you must specify a starting component that is
 *   well-connected (graph/state) from which to scan, and will get back paths relative to that `starting-from`
 *   (a component, element, or factory if you're using factory-based dynamic queries).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.active_routes = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes(var_args){
var G__68782 = arguments.length;
switch (G__68782) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2(app,com.fulcrologic.fulcro.application.root_class(app));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2 = (function (app,starting_from){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(starting_from,state_map);
var map__68789 = edn_query_language.core.query__GT_ast(query);
var map__68789__$1 = (((((!((map__68789 == null))))?(((((map__68789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68789):map__68789);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.set(active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),starting_from,children));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.routing.dynamic_routing.js.map
