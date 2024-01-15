goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control');

var options__56259__auto___89170 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$boolean_control$render_BooleanControl(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__89164 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__89164__$1 = (((((!((map__89164 == null))))?(((((map__89164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89164):map__89164);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89164__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89164__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var map__89166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
var map__89166__$1 = (((((!((map__89166 == null))))?(((((map__89166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89166):map__89166);
var control = map__89166__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89166__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89166__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89166__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89166__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
if(cljs.core.truth_(control)){
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
if(cljs.core.truth_(visible_QMARK___$1)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),cljs.core.boolean$(disabled_QMARK___$1),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (___$1){
com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,cljs.core.not(value));

if(cljs.core.truth_(onChange)){
var G__89168 = instance;
var G__89169 = cljs.core.not(value);
return (onChange.cljs$core$IFn$_invoke$arity$2 ? onChange.cljs$core$IFn$_invoke$arity$2(G__89168,G__89169) : onChange.call(null,G__89168,G__89169));
} else {
return null;
}
}),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(value)], null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null)], null),new cljs.core.Keyword(null,".ui.toggle.checkbox",".ui.toggle.checkbox",-575306926))], null),new cljs.core.Keyword(null,".field",".field",954681856));
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.controls.boolean-control",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find control definition for ",control_key], null);
}),null)),null,189392725,null);
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89170,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.boolean-control","BooleanControl","com.fulcrologic.rad.rendering.semantic-ui.controls.boolean-control/BooleanControl",-1010744759),options__56259__auto___89170);
com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.render_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.js.map
