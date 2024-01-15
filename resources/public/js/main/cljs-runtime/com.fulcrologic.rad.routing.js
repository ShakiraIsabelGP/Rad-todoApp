goog.provide('com.fulcrologic.rad.routing');
/**
 * Get the absolute path for the given route target. NOTE: Using a route target in multiple paths of your application
 * can lead to ambiguity and failure of general routing, since this will then return an unpredictable result.
 */
com.fulcrologic.rad.routing.absolute_path = (function com$fulcrologic$rad$routing$absolute_path(app_ish,RouteTarget,route_params){
var app = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var app_root = com.fulcrologic.fulcro.application.root_class(app);
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3(app_root,RouteTarget,route_params);
});
com.fulcrologic.rad.routing.can_change_route_QMARK_ = (function com$fulcrologic$rad$routing$can_change_route_QMARK_(app_or_component,new_route){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_component);
var root = com.fulcrologic.fulcro.application.root_class(app);
var vec__71221 = com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path(root,new_route);
var relative_class_or_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71221,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71221,(1),null);
var relative_class = (cljs.core.truth_((com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(relative_class_or_instance) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,relative_class_or_instance)))?com.fulcrologic.fulcro.components.react_type(relative_class_or_instance):relative_class_or_instance);
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app,relative_class);
});
/**
 * Change the UI to display the route to the specified class, with the additional parameter map as route params. If
 *   route history is installed, then it will be notified of the change. This function is also integrated into the RAD
 *   authorization system.
 * 
 *   The `RouteTarget` should be a _leaf_ target. Fulcro will correctly route through all the parent routers - just
 *   make sure that `route-params` includes all the params that are needed.
 * 
 *   You may include `::rad-routing/replace-route? true` in route-params as a hint to the history that you'd prefer to
 *   replace the top history element instead of pushing a new one.
 */
com.fulcrologic.rad.routing.route_to_BANG_ = (function com$fulcrologic$rad$routing$route_to_BANG_(app_or_component,RouteTarget,route_params){
var temp__5733__auto__ = com.fulcrologic.rad.routing.absolute_path(app_or_component,RouteTarget,route_params);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.routing",null,51,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Insufficient route parameters passed. Resulting route is probably invalid.",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(RouteTarget) : com.fulcrologic.fulcro.components.component_name.call(null,RouteTarget)),route_params], null);
}),null)),null,-344815676,null);
}

if(com.fulcrologic.rad.routing.can_change_route_QMARK_(app_or_component,path)){
if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.rad.routing","replace-route?","com.fulcrologic.rad.routing/replace-route?",-1831467006).cljs$core$IFn$_invoke$arity$1(route_params))){
com.fulcrologic.rad.routing.history.replace_route_BANG_(app_or_component,path,route_params);
} else {
com.fulcrologic.rad.routing.history.push_route_BANG_(app_or_component,path,route_params);
}
} else {
}

return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_component,path,route_params);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing",null,59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot find path for",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(RouteTarget) : com.fulcrologic.fulcro.components.component_name.call(null,RouteTarget))], null);
}),null)),null,-429200479,null);
}
});
/**
 * Attempt to navigate back to the last point in history. Returns true if there is history support, false if
 * it is impossible to even try to go back.
 */
com.fulcrologic.rad.routing.back_BANG_ = (function com$fulcrologic$rad$routing$back_BANG_(app_or_component){
if(com.fulcrologic.rad.routing.history.history_support_QMARK_(app_or_component)){
com.fulcrologic.rad.routing.history.back_BANG_(app_or_component);

return true;
} else {
return false;
}
});
/**
 * Like `clojure.core/update`. Has no effect if history support isn't installed.
 * 
 *   Run `(apply f current-route-params args)` and store those as the current route params.
 */
com.fulcrologic.rad.routing.update_route_params_BANG_ = (function com$fulcrologic$rad$routing$update_route_params_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71230 = arguments.length;
var i__4737__auto___71231 = (0);
while(true){
if((i__4737__auto___71231 < len__4736__auto___71230)){
args__4742__auto__.push((arguments[i__4737__auto___71231]));

var G__71232 = (i__4737__auto___71231 + (1));
i__4737__auto___71231 = G__71232;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_component,f,args){
if(com.fulcrologic.rad.routing.history.history_support_QMARK_(app_or_component)){
var map__71227 = com.fulcrologic.rad.routing.history.current_route(app_or_component);
var map__71227__$1 = (((((!((map__71227 == null))))?(((((map__71227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71227):map__71227);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71227__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71227__$1,new cljs.core.Keyword(null,"params","params",710516235));
var new_params = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,params,args);
return com.fulcrologic.rad.routing.history.replace_route_BANG_(app_or_component,route,new_params);
} else {
return null;
}
}));

(com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$lang$applyTo = (function (seq71224){
var G__71225 = cljs.core.first(seq71224);
var seq71224__$1 = cljs.core.next(seq71224);
var G__71226 = cljs.core.first(seq71224__$1);
var seq71224__$2 = cljs.core.next(seq71224__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71225,G__71226,seq71224__$2);
}));


//# sourceMappingURL=com.fulcrologic.rad.routing.js.map
