goog.provide('com.fulcrologic.rad.picker_options');
/**
 * INTERNAL MUTATION. Do not use.
 */
com.fulcrologic.rad.picker_options.transform_options = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.picker-options","transform-options","com.fulcrologic.rad.picker-options/transform-options",-1104586102,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.picker-options","transform-options","com.fulcrologic.rad.picker-options/transform-options",-1104586102,null),(function (fulcro_mutation_env_symbol){
var map__73634 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__73634__$1 = (((((!((map__73634 == null))))?(((((map__73634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73634):map__73634);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73634__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var pick_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73634__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","pick-one","com.fulcrologic.rad.picker-options/pick-one",83202862));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$picker_options$action(p__73636){
var map__73637 = p__73636;
var map__73637__$1 = (((((!((map__73637 == null))))?(((((map__73637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73637):map__73637);
var env = map__73637__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73637__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__73639_73684 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73640_73685 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73640_73685);

try{var map__73641_73686 = pick_one;
var map__73641_73687__$1 = (((((!((map__73641_73686 == null))))?(((((map__73641_73686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73641_73686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73641_73686):map__73641_73686);
var subquery_73688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73641_73687__$1,new cljs.core.Keyword("options","subquery","options/subquery",2147473275));
var result_73689 = new cljs.core.Keyword("ui","query-result","ui/query-result",-833640738).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","query-result","ui/query-result",-833640738),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(subquery_73688)], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref),cljs.core.deref(state)));
var transform_73690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pick_one,new cljs.core.Keyword("options","transform","options/transform",-1647147290));
var options_73691 = (cljs.core.truth_(transform_73690)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(transform_73690,result_73689):result_73689);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","options","ui/options",99633773)),options_73691);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73639_73684);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__73643 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__73644 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__73644);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__73643);
}})], null);
}));
/**
 * Load picker options based on raw picker options. This function does all of the picker-centric inner workings
 * of caching and such, so calling this function may do little more than link your component to an existing cached
 * value of options.
 * 
 * * `app-ish` - An application or live component, used for pulling state and submitting loads.
 * * `component-class` - The component class that will be passed through to the various picker option lambdas.
 * Usually a form or report class, but could also be a UI control.
 * * `props` - The UI props of that will be passed through to the various picker option lambdas. Usually the props
 * of the instance that contains the options.
 * * `picker-options` - A map that contains ::picker-options options. Often the component options, but could also be
 * declared in a control's definition map.
 * * `load-options` - Additional options you wish to pass to the load (optional). Only used if the cache was missing or
 * stale for the options. Currently you cannot use `:target`, `:params`, or `:post-action`. `::picker-options/remote` can
 * be used to select the load remote.
 * 
 * This function can has general purpose application, and is not report or form specific. It should be called as part of
 * a component's lifecycle to link/populate the options. For example in `componentDidMount` or in a `useEffect` that does
 * has an empty dependency vector (one-shot on mount).
 * 
 */
com.fulcrologic.rad.picker_options.load_picker_options_BANG_ = (function com$fulcrologic$rad$picker_options$load_picker_options_BANG_(var_args){
var G__73646 = arguments.length;
switch (G__73646) {
case 4:
return com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_ish,component_class,props,picker_options){
return com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$5(app_ish,component_class,props,picker_options,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app_ish,component_class,props,picker_options,load_options){
var map__73647 = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var map__73647__$1 = (((((!((map__73647 == null))))?(((((map__73647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73647):map__73647);
var app = map__73647__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73647__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__73648 = picker_options;
var map__73648__$1 = (((((!((map__73648 == null))))?(((((map__73648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73648):map__73648);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","remote","com.fulcrologic.rad.picker-options/remote",-2080716088));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var query_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-component","com.fulcrologic.rad.picker-options/query-component",1786201876));
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var options_xform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-xform","com.fulcrologic.rad.picker-options/options-xform",-823181747));
var cache_time_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-time-ms","com.fulcrologic.rad.picker-options/cache-time-ms",926562628));
var query_parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73648__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-parameters","com.fulcrologic.rad.picker-options/query-parameters",-308794671));
var params = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(query_parameters,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app,component_class,props], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var cache_time_ms__$1 = (function (){var or__4126__auto__ = cache_time_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (100);
}
})();
var state_map = cljs.core.deref(state_atom);
var cache_key__$1 = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_class,props], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return query_key;
}
})();
var time_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$1,new cljs.core.Keyword(null,"cached-at","cached-at",2133976632)], null);
var target_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$1,new cljs.core.Keyword(null,"query-result","query-result",-833644142)], null);
var options_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$1,new cljs.core.Keyword(null,"options","options",99638489)], null);
var now = cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now());
var cached_at = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,time_path,(0));
var reload_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"force-reload?","force-reload?",-1349067446).cljs$core$IFn$_invoke$arity$1(load_options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((now - cached_at) > cache_time_ms__$1);
}
})();
if(cljs.core.truth_(query_key)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.picker-options",null,78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot load picker options because there is no query-key."], null);
}),null)),null,-1704243824,null);
}

if(cljs.core.truth_(query_component)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.picker-options",null,80,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot load picker options because ::query-component is missing."], null);
}),null)),null,-819496025,null);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,time_path,now);

if(cljs.core.truth_(reload_QMARK_)){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,query_key,query_component,(function (){var G__73651 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([load_options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target_path,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"post-action","post-action",-542405960),(function (p__73652){
var map__73653 = p__73652;
var map__73653__$1 = (((((!((map__73653 == null))))?(((((map__73653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73653):map__73653);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73653__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73653__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var query_result = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),target_path);
var raw_result = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),query_key], null));
var options = cljs.core.vec((function (){var G__73655 = query_result;
if(cljs.core.truth_(options_xform)){
return (options_xform.cljs$core$IFn$_invoke$arity$2 ? options_xform.cljs$core$IFn$_invoke$arity$2(G__73655,raw_result) : options_xform.call(null,G__73655,raw_result));
} else {
return G__73655;
}
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__63988__auto__){
return cljs.core.assoc_in(s__63988__auto__,options_path,options);
}));
})], null)], 0));
if(cljs.core.truth_(remote)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73651,new cljs.core.Keyword(null,"remote","remote",-1593576576),remote);
} else {
return G__73651;
}
})());
} else {
return null;
}
}));

(com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$lang$maxFixedArity = 5);

/**
 * Load picker options into the options cache for a form field. This should be used by the UI implementation of
 *   a form field to ensure picker options are loaded. Typically you'll call this in a component lifecycle method (or one-shot
 *   effect hook).
 * 
 *   * `app-ish` - Anything you can `transact!` against
 *   * `form-class` - The form that holds the field for which you are loading options (passed to picker option lambdas)
 *   * `props` - The ui props of the form (passed to the picker option lambdas)
 *   * `attribute` - A RAD attribute that could contain picker options, and also designates data that the field will
 *   be picking.
 *   * `load-options` - Additional options to pass to load if the options are loaded. Some options may be overridden
 *   internally. See `load-picker-options!`.
 * 
 *   The picker options will be a combination of the field options for the field and any found on the attribute.
 */
com.fulcrologic.rad.picker_options.load_options_BANG_ = (function com$fulcrologic$rad$picker_options$load_options_BANG_(var_args){
var G__73657 = arguments.length;
switch (G__73657) {
case 4:
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_ish,form_class,props,attribute){
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$5(app_ish,form_class,props,attribute,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app_ish,form_class,props,p__73658,load_options){
var map__73659 = p__73658;
var map__73659__$1 = (((((!((map__73659 == null))))?(((((map__73659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73659):map__73659);
var attribute = map__73659__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73659__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__73661 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_options.call(null,form_class));
var map__73661__$1 = (((((!((map__73661 == null))))?(((((map__73661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73661):map__73661);
var field_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73661__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138));
var field_options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_options,qualified_key);
var picker_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute,field_options__$1], 0));
return com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$5(app_ish,form_class,props,picker_options,load_options);
}));

(com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$lang$maxFixedArity = 5);

/**
 * Gets the current picker options (when not using a form). See `current-form-options` for a form-specific variant.
 * 
 *   `component-instance` - A mounted component whose props will contain the picker options table (e.g. the link query
 *   `[::picker-options/options-cache '_]`). This instance can also have picker options in its `component-options`.
 *   `picker-options` - Optional. A map that contains picker option (overrides). Will be merged (as overrides) for any that are found in
 *   component options on the component instance. Note that since this function does no loading, this is only useful if your
 *   original picker options are not on the same component as the query.
 *   
 */
com.fulcrologic.rad.picker_options.current_picker_options = (function com$fulcrologic$rad$picker_options$current_picker_options(var_args){
var G__73664 = arguments.length;
switch (G__73664) {
case 1:
return com.fulcrologic.rad.picker_options.current_picker_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.picker_options.current_picker_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.picker_options.current_picker_options.cljs$core$IFn$_invoke$arity$1 = (function (component_instance){
return com.fulcrologic.rad.picker_options.current_picker_options.cljs$core$IFn$_invoke$arity$2(component_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.picker_options.current_picker_options.cljs$core$IFn$_invoke$arity$2 = (function (component_instance,picker_options){
var coptions = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(component_instance) : com.fulcrologic.fulcro.components.component_options.call(null,component_instance));
var picker_options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coptions,picker_options], 0));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(component_instance) : com.fulcrologic.fulcro.components.props.call(null,component_instance));
var map__73665 = picker_options__$1;
var map__73665__$1 = (((((!((map__73665 == null))))?(((((map__73665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73665):map__73665);
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73665__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73665__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var cls = com.fulcrologic.fulcro.components.react_type(component_instance);
var cache_key__$1 = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cls,props], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return query_key;
}
})();
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$1,new cljs.core.Keyword(null,"options","options",99638489)], null));
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cache_key__$1);
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.picker-options",null,138,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find picker option for cache or query key in options: ",picker_options__$1], null);
}),null)),null,-137517231,null);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.contains_QMARK_(props,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238))));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.picker-options",null,141,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No options cache found in props for",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(cls) : com.fulcrologic.fulcro.components.component_name.call(null,cls)),". This could mean options have not been ","loaded, or that you forgot to put `[::picker-options/options-cache '_]` on your query. NOTE: This warning can be ","a false alarm if the application just started and no picker options have yet been loaded."], null);
}),null)),null,-110407285,null);
} else {
}

return options;
}));

(com.fulcrologic.rad.picker_options.current_picker_options.cljs$lang$maxFixedArity = 2);

/**
 * Gets the current picker options for the given form-instance and attribute.
 */
com.fulcrologic.rad.picker_options.current_form_options = (function com$fulcrologic$rad$picker_options$current_form_options(form_instance,attr){
var map__73667 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__73667__$1 = (((((!((map__73667 == null))))?(((((map__73667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73667):map__73667);
var field_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73667__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138));
var map__73668 = attr;
var map__73668__$1 = (((((!((map__73668 == null))))?(((((map__73668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73668):map__73668);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73668__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var field_options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_options,qualified_key);
var map__73669 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,field_options__$1], 0));
var map__73669__$1 = (((((!((map__73669 == null))))?(((((map__73669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73669):map__73669);
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73669__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73669__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var cache_key__$1 = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.react_type(form_instance),(com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance))], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return query_key;
}
})();
var cache_key__$2 = (function (){var or__4126__auto__ = cache_key__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = query_key;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.picker-options",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ref field MUST have either a ::picker-options/cache-key or ::picker-options/query-key in attribute ",qualified_key], null);
}),null)),null,-2140825834,null);
}
}
})();
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$2,new cljs.core.Keyword(null,"options","options",99638489)], null));
return options;
});
/**
 * DEPRECATED NAME: Use current-form-options
 */
com.fulcrologic.rad.picker_options.current_options = com.fulcrologic.rad.picker_options.current_form_options;
/**
 * Returns the current to-one ref value for the given reference attribute as an ident.
 */
com.fulcrologic.rad.picker_options.current_to_one_value = (function com$fulcrologic$rad$picker_options$current_to_one_value(form_instance,attr){
var map__73673 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__73673__$1 = (((((!((map__73673 == null))))?(((((map__73673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73673):map__73673);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73673__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var map__73674 = attr;
var map__73674__$1 = (((((!((map__73674 == null))))?(((((map__73674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73674):map__73674);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73674__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target_id_key = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__73678){
var map__73679 = p__73678;
var map__73679__$1 = (((((!((map__73679 == null))))?(((((map__73679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73679):map__73679);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73679__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73679__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,qualified_key)){
return target;
} else {
return null;
}
}),attributes));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,target_id_key], null));
if(cljs.core.truth_(id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,id], null);
} else {
return null;
}
});
/**
 * Extracts the current to-one label from the given attribute's value via the picker options
 */
com.fulcrologic.rad.picker_options.current_to_one_label = (function com$fulcrologic$rad$picker_options$current_to_one_label(form_instance,attr){
var options = com.fulcrologic.rad.picker_options.current_form_options(form_instance,attr);
var value = com.fulcrologic.rad.picker_options.current_to_one_value(form_instance,attr);
var map__73682 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73681_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__73681_SHARP_),value);
}),options));
var map__73682__$1 = (((((!((map__73682 == null))))?(((((map__73682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73682):map__73682);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73682__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = text;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tr("UNSELECTED");
}
})());
});
/**
 * The keyword name of the remote that the picker options are loaded from. Defaults to :remote.
 */
com.fulcrologic.rad.picker_options.remote = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","remote","com.fulcrologic.rad.picker-options/remote",-2080716088);
/**
 * The top-level query keyword to use when pulling the options.
 */
com.fulcrologic.rad.picker_options.query_key = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883);
/**
 * A Fulcro defsc with the subquery to use for pulling options.
 */
com.fulcrologic.rad.picker_options.query_component = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-component","com.fulcrologic.rad.picker-options/query-component",1786201876);
/**
 * A map of query parameters to include in the option load, or a `(fn [app cls props] map?)` that can generate those
 * props on demand.
 */
com.fulcrologic.rad.picker_options.query_parameters = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-parameters","com.fulcrologic.rad.picker-options/query-parameters",-308794671);
/**
 * A keyword or `(fn [cls props] keyword?)` under which the normalized picker options will be saved.
 */
com.fulcrologic.rad.picker_options.cache_key = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100);
/**
 * A `(fn [normalized-result raw-result] [{:text t :value v} ...])`. This generates the options to show the user. If
 *   not provided then it is assumed that the query result itself is a vector of these text/value pair maps.
 */
com.fulcrologic.rad.picker_options.options_xform = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-xform","com.fulcrologic.rad.picker-options/options-xform",-823181747);
/**
 * How long the options can be cached. This allows multiple uses of the same options load to be used over time. Caching
 *   is done under ::cache-key.
 */
com.fulcrologic.rad.picker_options.cache_time_ms = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-time-ms","com.fulcrologic.rad.picker-options/cache-time-ms",926562628);
/**
 * Picker option (e.g. for fo/field-options). If present (and the rendering plugin supports it) this option names the class
 * of a `defsc-form` that CAN be used to create or edit instances of the type being picked. Including this option
 * automatically infers that creation should be allowed (rendering plugins should automatically show a way to trigger
 * the creation of a new element).
 */
com.fulcrologic.rad.picker_options.form = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","form","com.fulcrologic.rad.picker-options/form",-1137848895);
/**
 * Picker option (e.g. for fo/field-options). Requires po/form. Indicates that editing of a picked item should be possible.
 * Requires support from rendering plugin.
 * 
 * Boolean or `(fn [parent-instance parent-relation] bool)`
 */
com.fulcrologic.rad.picker_options.allow_edit_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","allow-edit?","com.fulcrologic.rad.picker-options/allow-edit?",769213611);
/**
 * Picker option (e.g. for fo/field-options). Requires po/form. Indicates that creating a new picked item should be possible.
 * Requires support from rendering plugin.
 * 
 * Boolean or `(fn [parent-instance parent-relation] bool)`
 */
com.fulcrologic.rad.picker_options.allow_create_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","allow-create?","com.fulcrologic.rad.picker-options/allow-create?",546230417);
/**
 * Picker option (e.g. for fo/field-options).
 * 
 * A `(fn [parent-instance parent-relation] entity-with-tempid)` that must return an entity that can be immediately saved to the server
 * via `form/save!`. You MUST give the entity a tempid.
 * 
 * `po/form` is not required and is not used.
 * 
 * CAN be combined with allow-create?, allow-edit?, but that will enable both buttons for edit/create as well as
 * the ability to type a string and quick-add it.
 */
com.fulcrologic.rad.picker_options.quick_create = new cljs.core.Keyword("com.fulcrologic.rad.picker-options","quick-create","com.fulcrologic.rad.picker-options/quick-create",-1897617563);

//# sourceMappingURL=com.fulcrologic.rad.picker_options.js.map
