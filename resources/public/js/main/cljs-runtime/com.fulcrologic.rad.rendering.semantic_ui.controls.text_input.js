goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.text_input');

var options__56259__auto___89181 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$text_input$render_TextControl(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89177 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__89177__$1 = (((((!((map__89177 == null))))?(((((map__89177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89177):map__89177);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89177__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89177__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.props.call(null,instance));
var map__89179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
var map__89179__$1 = (((((!((map__89179 == null))))?(((((map__89179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89179):map__89179);
var control = map__89179__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89179__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89179__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89179__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89179__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89179__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89179__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
if(cljs.core.truth_(control)){
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var disabled_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var placeholder__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_(placeholder);
var visible_QMARK___$1 = (function (){var or__4126__auto__ = (visible_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
var chg_BANG_ = (function (p1__89176_SHARP_){
return com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,com.fulcrologic.fulcro.dom.events.target_value(p1__89176_SHARP_));
});
var run_BANG_ = (function (evt){
var v = com.fulcrologic.fulcro.dom.events.target_value(evt);
if(cljs.core.truth_(onChange)){
return (onChange.cljs$core$IFn$_invoke$arity$2 ? onChange.cljs$core$IFn$_invoke$arity$2(instance,v) : onChange.call(null,instance,v));
} else {
return null;
}
});
var value = com.fulcrologic.rad.control.current_value(instance,control_key);
if(cljs.core.truth_(visible_QMARK___$1)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null),(cljs.core.truth_(icon)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)," icon"].join('')], null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),cljs.core.boolean$(disabled_QMARK___$1),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder__$1),new cljs.core.Keyword(null,"onChange","onChange",-312891301),chg_BANG_,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),run_BANG_,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (evt){
if(com.fulcrologic.fulcro.dom.events.enter_QMARK_(evt)){
return run_BANG_(evt);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),null)], null),new cljs.core.Keyword(null,".ui.icon.input",".ui.icon.input",-912570087)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),cljs.core.boolean$(disabled_QMARK___$1),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder__$1),new cljs.core.Keyword(null,"onChange","onChange",-312891301),chg_BANG_,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),run_BANG_,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (evt){
if(com.fulcrologic.fulcro.dom.events.enter_QMARK_(evt)){
return run_BANG_(evt);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),null))], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.text_input !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89181,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.text-input","TextControl","com.fulcrologic.rad.rendering.semantic-ui.controls.text-input/TextControl",498029223),options__56259__auto___89181);
com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.render_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.js.map
