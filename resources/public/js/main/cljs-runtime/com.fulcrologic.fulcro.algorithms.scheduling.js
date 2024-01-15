goog.provide('com.fulcrologic.fulcro.algorithms.scheduling');
/**
 * Schedule f to run in `tm` ms.
 */
com.fulcrologic.fulcro.algorithms.scheduling.defer = (function com$fulcrologic$fulcro$algorithms$scheduling$defer(f,tm){
return setTimeout(f,tm);
});
/**
 * Schedule the processing of a specific action in the runtime atom. This is a no-op if the item is already scheduled.
 *   When the timeout arrives it runs the given action and sets the given flag back to false.
 * 
 *   - `scheduled-key` - The runtime flag that tracks scheduling for the processing.
 *   - `action` - The function to run when the scheduled time comes.
 *   - `tm` - Number of ms to delay (default 0).
 */
com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_ = (function com$fulcrologic$fulcro$algorithms$scheduling$schedule_BANG_(var_args){
var G__60473 = arguments.length;
switch (G__60473) {
case 4:
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,scheduled_key,action,tm){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_,cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__60474 = app;
var map__60474__$1 = (((((!((map__60474 == null))))?(((((map__60474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60474):map__60474);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60474__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),scheduled_key))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,true);

return com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,false);

return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(app) : action.call(null,app));
}),tm);
}
}));

(com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,scheduled_key,action){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app,scheduled_key,action,(0));
}));

(com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$lang$maxFixedArity = 4);

var raf_60487 = (((typeof requestAnimationFrame !== 'undefined'))?requestAnimationFrame:(function (p1__60477_SHARP_){
return com.fulcrologic.fulcro.algorithms.scheduling.defer(p1__60477_SHARP_,(16));
}));
/**
 * Schedule the processing of a specific action in the runtime atom on the next animation frame.
 * 
 *  - `scheduled-key` - The runtime flag that tracks scheduling for the processing.
 *  - `action` - The function to run when the scheduled time comes.
 */
com.fulcrologic.fulcro.algorithms.scheduling.schedule_animation_BANG_ = (function com$fulcrologic$fulcro$algorithms$scheduling$schedule_animation_BANG_(app,scheduled_key,action){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__60481 = app;
var map__60481__$1 = (((((!((map__60481 == null))))?(((((map__60481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60481):map__60481);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60481__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),scheduled_key))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,true);

var f = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,false);

return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
});
return (raf_60487.cljs$core$IFn$_invoke$arity$1 ? raf_60487.cljs$core$IFn$_invoke$arity$1(f) : raf_60487.call(null,f));
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.scheduling.js.map
