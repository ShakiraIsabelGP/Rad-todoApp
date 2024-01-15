goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.action_button');

var options__56259__auto___89175 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$action_button$render_ActionButton(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__89171 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__89171__$1 = (((((!((map__89171 == null))))?(((((map__89171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89171):map__89171);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89171__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89171__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var render = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.action_button_render], 0));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.props.call(null,instance));
var map__89173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
var map__89173__$1 = (((((!((map__89173 == null))))?(((((map__89173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89173):map__89173);
var control = map__89173__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89173__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89173__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89173__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89173__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89173__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89173__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
if(cljs.core.truth_(control)){
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var class$__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var loading_QMARK_ = com.fulcrologic.fulcro.data_fetch.loading_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.get_ident.call(null,instance))], null)));
var disabled_QMARK___$1 = (function (){var or__4126__auto__ = loading_QMARK_;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
var visible_QMARK___$1 = (function (){var or__4126__auto__ = (visible_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
var onClick = (function (){
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(instance,control_key) : action.call(null,instance,control_key));
} else {
return null;
}
});
if(cljs.core.truth_(visible_QMARK___$1)){
var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(render,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),control_key,new cljs.core.Keyword(null,"label","label",1718410804),label__$1,new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_], null)], 0))], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key),new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto____$1 = class$__$1;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "ui tiny primary button";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(disabled_QMARK___$1),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null),(cljs.core.truth_(icon)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)," icon"].join('')], null)], null),null):null),(cljs.core.truth_(label__$1)?label__$1:null)], null),null);
}
} else {
return null;
}
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.action_button !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.action_button.ActionButton !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.action_button.ActionButton = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89175,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.action_button.ActionButton,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.action-button","ActionButton","com.fulcrologic.rad.rendering.semantic-ui.controls.action-button/ActionButton",-64838581),options__56259__auto___89175);
com.fulcrologic.rad.rendering.semantic_ui.controls.action_button.render_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.action_button.ActionButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.action_button.js.map
