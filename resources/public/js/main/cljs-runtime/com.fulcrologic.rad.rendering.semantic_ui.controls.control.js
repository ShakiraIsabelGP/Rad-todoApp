goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.control');

var options__56259__auto___89188 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$control$render_Control(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__89182 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__89182__$1 = (((((!((map__89182 == null))))?(((((map__89182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89182):map__89182);
var report_env = map__89182__$1;
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89182__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89182__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89182__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var input_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89182__$1,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var map__89184 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(controls,control_key,control);
var map__89184__$1 = (((((!((map__89184 == null))))?(((((map__89184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89184):map__89184);
var control__$1 = map__89184__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89184__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89184__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89184__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89184__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89184__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var user_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89184__$1,new cljs.core.Keyword(null,"user-props","user-props",-1594547727));
if(cljs.core.truth_((function (){var and__4115__auto__ = input_factory;
if(cljs.core.truth_(and__4115__auto__)){
return control__$1;
} else {
return and__4115__auto__;
}
})())){
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var disabled_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var visible_QMARK___$1 = (function (){var or__4126__auto__ = (visible_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
var value = com.fulcrologic.rad.control.current_value(instance,control_key);
var onChange__$1 = (function (new_value){
com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,new_value);

if(cljs.core.truth_(onChange)){
(onChange.cljs$core$IFn$_invoke$arity$2 ? onChange.cljs$core$IFn$_invoke$arity$2(instance,new_value) : onChange.call(null,instance,new_value));
} else {
}

if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(instance) : action.call(null,instance));
} else {
return null;
}
});
if(cljs.core.truth_(visible_QMARK___$1)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null),(function (){var G__89186 = report_env;
var G__89187 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),onChange__$1], null)], 0));
return (input_factory.cljs$core$IFn$_invoke$arity$2 ? input_factory.cljs$core$IFn$_invoke$arity$2(G__89186,G__89187) : input_factory.call(null,G__89186,G__89187));
})()], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.controls.control",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot render control. Missing input factory or control definition."], null);
}),null)),null,1362835519,null);
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.control !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.control.Control !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.control.Control = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89188,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.control.Control,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.control","Control","com.fulcrologic.rad.rendering.semantic-ui.controls.control/Control",344581963),options__56259__auto___89188);
com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.control.Control,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.control.js.map
