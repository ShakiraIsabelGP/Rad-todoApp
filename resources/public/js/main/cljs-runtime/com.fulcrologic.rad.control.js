goog.provide('com.fulcrologic.rad.control');

var options__56259__auto___71468 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$control$query_STAR_(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$rad$control$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$control$render_Control(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.control !== 'undefined') && (typeof com.fulcrologic.rad.control.Control !== 'undefined')){
} else {
/**
 * A component used for normalizing control state in the app so that reports in containers can share controls.
 * @constructor
 */
com.fulcrologic.rad.control.Control = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___71468,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.control.Control,new cljs.core.Keyword("com.fulcrologic.rad.control","Control","com.fulcrologic.rad.control/Control",1481323612),options__56259__auto___71468);
/**
 * Render the control defined by `control-key` in the ::report/controls option. The control definition in question will be
 * a `(fn [props])` where `props` is a map containing:
 * 
 * * `owner` - The React instance of the mounted component where the controls will be shown.
 * * `control-key` - The name of the control key being rendered .
 * 
 */
com.fulcrologic.rad.control.render_control = (function com$fulcrologic$rad$control$render_control(var_args){
var G__71423 = arguments.length;
switch (G__71423) {
case 2:
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2 = (function (owner,control_key){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(owner,control_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)) : com.fulcrologic.fulcro.components.component_options.call(null,owner,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232))),control_key));
}));

(com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3 = (function (owner,control_key,control){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(control_key,new cljs.core.Keyword(null,"_","_",1453416199))){
var map__71424 = com.fulcrologic.fulcro.components.any__GT_app(owner);
var map__71424__$1 = (((((!((map__71424 == null))))?(((((map__71424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71424):map__71424);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71424__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(control,new cljs.core.Keyword(null,"type","type",1174270348));
var input_style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(control,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"default","default",-1987822328));
var style__GT_input = (function (){var G__71426 = runtime_atom;
var G__71426__$1 = (((G__71426 == null))?null:cljs.core.deref(G__71426));
var G__71426__$2 = (((G__71426__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__71426__$1));
var G__71426__$3 = (((G__71426__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.control","type->style->control","com.fulcrologic.rad.control/type->style->control",1186073203).cljs$core$IFn$_invoke$arity$1(G__71426__$2));
if((G__71426__$3 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__71426__$3,input_type);
}
})();
var input = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(style__GT_input,input_style);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(style__GT_input,new cljs.core.Keyword(null,"default","default",-1987822328));
}
})();
if(cljs.core.truth_(input)){
var G__71427 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"instance","instance",-2121349050),owner,new cljs.core.Keyword(null,"control","control",1892578036),control,new cljs.core.Keyword(null,"control-key","control-key",-1287294483),control_key], null);
return (input.cljs$core$IFn$_invoke$arity$1 ? input.cljs$core$IFn$_invoke$arity$1(G__71427) : input.call(null,G__71427));
} else {
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(input_type,new cljs.core.Keyword(null,"none","none",1333468478)))?goog.DEBUG:false))){
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: No renderer is installed to support control ",control_key,"with type/style",input_type,input_style], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: No renderer is installed to support control ",control_key,"with type/style",input_type,input_style], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.control",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: No renderer is installed to support control ",control_key,"with type/style",input_type,input_style], null);
}),null)),null,-1188807612,null);
}
} else {
}

return null;
} else {
return null;
}
}
} else {
return null;
}
}));

(com.fulcrologic.rad.control.render_control.cljs$lang$maxFixedArity = 3);

/**
 * [this]
 * 
 * Run the controlled content with the current values of the controlled parameters.
 */
com.fulcrologic.rad.control.run_BANG_ = com.fulcrologic.rad.options_util.debounce((function (instance){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(instance,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.get_ident.call(null,instance)),new cljs.core.Keyword("event","run","event/run",1832485709));
}),(100));
/**
 * 
 */
com.fulcrologic.rad.control.set_parameter = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.control","set-parameter","com.fulcrologic.rad.control/set-parameter",-411513869,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.control","set-parameter","com.fulcrologic.rad.control/set-parameter",-411513869,null),(function (fulcro_mutation_env_symbol){
var map__71428 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__71428__$1 = (((((!((map__71428 == null))))?(((((map__71428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71428):map__71428);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71428__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71428__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$control$action(p__71430){
var map__71431 = p__71430;
var map__71431__$1 = (((((!((map__71431 == null))))?(((((map__71431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71431):map__71431);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71431__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71431__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71431__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__71433_71471 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71434_71472 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71434_71472);

try{var options_71473 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_options.call(null,component));
var track_in_url_QMARK__71474 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options_71473,new cljs.core.Keyword("com.fulcrologic.rad.report","track-in-url?","com.fulcrologic.rad.report/track-in-url?",-554114309),true);
var map__71435_71475 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options_71473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),k], null));
var map__71435_71476__$1 = (((((!((map__71435_71475 == null))))?(((((map__71435_71475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71435_71475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71435_71475):map__71435_71475);
var local_QMARK__71477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71435_71476__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var id_71478 = cljs.core.second(ref);
var path_71479 = (cljs.core.truth_(local_QMARK__71477)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),k,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null));
if(track_in_url_QMARK__71474 === false){
} else {
if(cljs.core.truth_(local_QMARK__71477)){
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_71478,k], null),value], 0));
} else {
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,value], 0));
}
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,path_71479,value);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71433_71471);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__71437 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__71438 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__71438);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__71437);
}})], null);
}));
/**
 * Set the given parameter on a report or container.
 */
com.fulcrologic.rad.control.set_parameter_BANG_ = (function com$fulcrologic$rad$control$set_parameter_BANG_(instance,parameter_name,new_value){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71439 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),parameter_name,new cljs.core.Keyword(null,"value","value",305978217),new_value], null);
return (com.fulcrologic.rad.control.set_parameter.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.control.set_parameter.cljs$core$IFn$_invoke$arity$1(G__71439) : com.fulcrologic.rad.control.set_parameter.call(null,G__71439));
})()], null));
});
/**
 * Convert an old-style control map into a vector of controls that can be normalized into state as `Control`s.
 */
com.fulcrologic.rad.control.control_map__GT_controls = (function com$fulcrologic$rad$control$control_map__GT_controls(control_map){
if(cljs.core.map_QMARK_(control_map)){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),k], null),v], 0)));
}),cljs.core.PersistentVector.EMPTY,control_map);
} else {
return control_map;
}
});
/**
 * Get the current value of a control. If it is normalized, then it will come from the normalized table. If the control
 * is local to the instance, then it will come from there.
 */
com.fulcrologic.rad.control.current_value = (function com$fulcrologic$rad$control$current_value(instance,control_key){
var map__71440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(instance,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)) : com.fulcrologic.fulcro.components.component_options.call(null,instance,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232))),control_key);
var map__71440__$1 = (((((!((map__71440 == null))))?(((((map__71440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71440):map__71440);
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71440__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
if(cljs.core.truth_(local_QMARK_)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.props.call(null,instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),control_key], null));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.raw.application.current_state(instance),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),control_key,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null));
}
});
/**
 * Gets all of the controls declared on the given class or instance (e.g. report, container).
 * If `recursive?` (default true) is true, then it will look for non-local controls on all classes contained in the (recursive)
 * query of that class or instance. Controls appearing in the target `class-or-instance` will override any from children,
 * but any duplicates found in children will be unified by choosing an arbitrary one. Thus, if your component is pulling
 * unifying inconsistent controls from children you should probably provide a hand-unified control in the parent.
 */
com.fulcrologic.rad.control.component_controls = (function com$fulcrologic$rad$control$component_controls(var_args){
var G__71443 = arguments.length;
switch (G__71443) {
case 1:
return com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1 = (function (class_or_instance){
return com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$2(class_or_instance,true);
}));

(com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$2 = (function (class_or_instance,recursive_QMARK_){
var parent_controls = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(class_or_instance,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)) : com.fulcrologic.fulcro.components.component_options.call(null,class_or_instance,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)));
var children = (cljs.core.truth_(recursive_QMARK_)?com.fulcrologic.rad.options_util.child_classes.cljs$core$IFn$_invoke$arity$2(class_or_instance,true):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (controls,c){
var candidates = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)) : com.fulcrologic.fulcro.components.component_options.call(null,c,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)));
var non_local_controls = cljs.core.reduce_kv((function (m,k,v){
if(((cljs.core.map_QMARK_(v)) && (cljs.core.not(new cljs.core.Keyword(null,"local?","local?",-1422786101).cljs$core$IFn$_invoke$arity$1(v))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,candidates);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([controls,non_local_controls], 0));
}),cljs.core.PersistentArrayMap.EMPTY,children),parent_controls], 0));
}));

(com.fulcrologic.rad.control.component_controls.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71444){
return cljs.core.vector_QMARK_(G__71444);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71446){
return cljs.core.vector_QMARK_(G__71446);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71445){
return cljs.core.vector_QMARK_(G__71445);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.control","standard-control-layout","com.fulcrologic.rad.control/standard-control-layout",432461742,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Keyword(null,"inst","inst",645962501)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_class_QMARK_,com.fulcrologic.fulcro.components.component_QMARK_], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71452){
return cljs.core.map_QMARK_(G__71452);
}),(function (G__71452){
return cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword(null,"action-layout","action-layout",137416830));
}),(function (G__71452){
return cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword(null,"input-layout","input-layout",182479828));
})], null),(function (G__71452){
return ((cljs.core.map_QMARK_(G__71452)) && (cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword(null,"action-layout","action-layout",137416830))) && (cljs.core.contains_QMARK_(G__71452,new cljs.core.Keyword(null,"input-layout","input-layout",182479828))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-layout","action-layout",137416830),new cljs.core.Keyword(null,"input-layout","input-layout",182479828)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"action-layout","action-layout",137416830))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"input-layout","input-layout",182479828)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null)),null,null,null));


/**
 * Returns a map of:
 * 
 *   * `:action-layout`: a simple vector of keywords for the order buttons should appear. The default is the order they
 *  are returned from the control map (which is stable, but not necessarily the order of appearance in the map).
 *   * `:input-layout`: a nested vector of keywords that represents the preferred layout of the controls
 *   on `class-or-instance`. This layout can be declared on the class-or-instance, or will default to a
 *   single-row layout based on the entry order in the control map (stable but undefined).
 * @type {function(*): !cljs.core.IMap}
 */
com.fulcrologic.rad.control.standard_control_layout = (function com$fulcrologic$rad$control$standard_control_layout(class_or_instance){
var map__71453 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Keyword(null,"inst","inst",645962501)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_class_QMARK_,com.fulcrologic.fulcro.components.component_QMARK_], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"class-or-instance","class-or-instance",-1785701683),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component?","com.fulcrologic.fulcro.components/component?",-1018902990,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71454){
return cljs.core.map_QMARK_(G__71454);
}),(function (G__71454){
return cljs.core.contains_QMARK_(G__71454,new cljs.core.Keyword(null,"action-layout","action-layout",137416830));
}),(function (G__71454){
return cljs.core.contains_QMARK_(G__71454,new cljs.core.Keyword(null,"input-layout","input-layout",182479828));
})], null),(function (G__71454){
return ((cljs.core.map_QMARK_(G__71454)) && (cljs.core.contains_QMARK_(G__71454,new cljs.core.Keyword(null,"action-layout","action-layout",137416830))) && (cljs.core.contains_QMARK_(G__71454,new cljs.core.Keyword(null,"input-layout","input-layout",182479828))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-layout","action-layout",137416830),new cljs.core.Keyword(null,"input-layout","input-layout",182479828)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"action-layout","action-layout",137416830))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"input-layout","input-layout",182479828)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","action-layout","com.fulcrologic.rad.control/action-layout",-615482662),new cljs.core.Keyword("com.fulcrologic.rad.control","input-layout","com.fulcrologic.rad.control/input-layout",-285212320)], null)),null,null,null);
var map__71453__$1 = (((((!((map__71453 == null))))?(((((map__71453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71453):map__71453);
var retspec71449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71453__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec71448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71453__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec71448)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/control.cljc:145 standard-control-layout's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec71448,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_or_instance], null));
} else {
}

var f71451 = (function (class_or_instance__$1){
var map__71456 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(class_or_instance__$1) : com.fulcrologic.fulcro.components.component_options.call(null,class_or_instance__$1));
var map__71456__$1 = (((((!((map__71456 == null))))?(((((map__71456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71456):map__71456);
var control_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71456__$1,new cljs.core.Keyword("com.fulcrologic.rad.control","control-layout","com.fulcrologic.rad.control/control-layout",-980348103));
var control_layout__$1 = (function (){var or__4126__auto__ = control_layout;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(class_or_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","control-layout","com.fulcrologic.rad.report/control-layout",-617471006)) : com.fulcrologic.fulcro.components.component_options.call(null,class_or_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","control-layout","com.fulcrologic.rad.report/control-layout",-617471006)));
}
})();
var map__71457 = control_layout__$1;
var map__71457__$1 = (((((!((map__71457 == null))))?(((((map__71457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71457):map__71457);
var action_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71457__$1,new cljs.core.Keyword(null,"action-buttons","action-buttons",1324694777));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71457__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(class_or_instance__$1);
var control_button_keys = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__71460){
var vec__71461 = p__71460;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71461,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v))){
return k;
} else {
return null;
}
}),controls));
var input_keys = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__71464){
var vec__71465 = p__71464;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71465,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71465,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v))){
return null;
} else {
return k;
}
}),controls);
var button_layout = (function (){var or__4126__auto__ = action_buttons;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return control_button_keys;
}
})();
var input_layout = (function (){var or__4126__auto__ = inputs;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,input_keys)],null));
}
})();
if(cljs.core.truth_(goog.DEBUG)){
var expected_layout_keys_71481 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71447_SHARP_){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__71447_SHARP_),new cljs.core.Keyword(null,"visible?","visible?",2129863715),true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_or_instance__$1], 0));
}),controls)));
var actual_layout_keys_71482 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.set(button_layout),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),cljs.core.flatten(input_layout)),new cljs.core.Keyword(null,"_","_",1453416199));
if(((cljs.core.seq(expected_layout_keys_71481)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_layout_keys_71481,actual_layout_keys_71482)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.control",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The control layout does not include all controls: ",expected_layout_keys_71481,"vs.",actual_layout_keys_71482], null);
}),null)),null,1520485422,null);
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-layout","action-layout",137416830),button_layout,new cljs.core.Keyword(null,"input-layout","input-layout",182479828),input_layout], null);
});
var ret71450 = f71451(class_or_instance);
if(cljs.core.truth_(retspec71449)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/control.cljc:145 standard-control-layout's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec71449,ret71450);
} else {
}

return ret71450;
});

//# sourceMappingURL=com.fulcrologic.rad.control.js.map
