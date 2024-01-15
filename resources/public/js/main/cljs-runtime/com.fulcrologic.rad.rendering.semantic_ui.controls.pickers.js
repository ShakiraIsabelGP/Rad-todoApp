goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.pickers');

var options__50078__auto___62807 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__62792 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62792__$1 = (((((!((map__62792 == null))))?(((((map__62792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62792):map__62792);
var props = map__62792__$1;
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var map__62793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
var map__62793__$1 = (((((!((map__62793 == null))))?(((((map__62793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62793):map__62793);
var picker_options = map__62793__$1;
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62793__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
if(cljs.core.truth_(query_key)){
return com.fulcrologic.rad.picker_options.load_picker_options_BANG_.cljs$core$IFn$_invoke$arity$4(instance,com.fulcrologic.fulcro.components.react_type(instance),props,picker_options);
} else {
return null;
}
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$pickers$render_SimplePicker(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__62796 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__62796__$1 = (((((!((map__62796 == null))))?(((((map__62796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62796):map__62796);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62796__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62796__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var map__62798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
var map__62798__$1 = (((((!((map__62798 == null))))?(((((map__62798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62798):map__62798);
var control = map__62798__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"options","options",99638489));
var user_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"user-props","user-props",-1594547727));
var options__$1 = (function (){var or__4126__auto__ = options;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.picker_options.current_picker_options.cljs$core$IFn$_invoke$arity$2(instance,control);
}
})();
if(cljs.core.truth_(control)){
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var disabled_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var placeholder__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(placeholder,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var visible_QMARK___$1 = (function (){var or__4126__auto__ = (visible_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
var value = com.fulcrologic.rad.control.current_value(instance,control_key);
if(cljs.core.truth_(visible_QMARK___$1)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null),(function (){var G__62800 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder__$1),new cljs.core.Keyword(null,"options","options",99638489),options__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,v);

var _STAR_after_render_STAR__orig_val__62801 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__62802 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__62802);

try{if(cljs.core.truth_(onChange)){
(onChange.cljs$core$IFn$_invoke$arity$2 ? onChange.cljs$core$IFn$_invoke$arity$2(instance,v) : onChange.call(null,instance,v));
} else {
}

if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(instance) : action.call(null,instance));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__62801);
}})], null)], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__62800) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__62800));
})()], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.pickers !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.pickers.SimplePicker !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.pickers.SimplePicker = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62807,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.pickers.SimplePicker,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.pickers","SimplePicker","com.fulcrologic.rad.rendering.semantic-ui.controls.pickers/SimplePicker",-1818028198),options__50078__auto___62807);
com.fulcrologic.rad.rendering.semantic_ui.controls.pickers.render_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.pickers.SimplePicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.pickers.js.map
