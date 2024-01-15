goog.provide('com.fulcrologic.rad.rendering.semantic_ui.field');
/**
 * Create a general field factory using the given input factory as the function to call to draw an input.
 */
com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory = (function com$fulcrologic$rad$rendering$semantic_ui$field$render_field_factory(var_args){
var G__62781 = arguments.length;
switch (G__62781) {
case 1:
return com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1 = (function (input_factory){
return com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,input_factory);
}));

(com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2 = (function (addl_props,input_factory){
return (function (p__62782,p__62783){
var map__62784 = p__62782;
var map__62784__$1 = (((((!((map__62784 == null))))?(((((map__62784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62784):map__62784);
var env = map__62784__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62784__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62785 = p__62783;
var map__62785__$1 = (((((!((map__62785 == null))))?(((((map__62785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62785):map__62785);
var attribute = map__62785__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62785__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62785__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var or__4126__auto__ = com.fulcrologic.rad.form.computed_value(env,attribute);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = attribute;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
} else {
return and__4115__auto__;
}
}
})();
var addl_props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0)),addl_props], 0));
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attribute));
var validation_message = (cljs.core.truth_(invalid_QMARK_)?(com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attribute)):null);
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var addl_props__$2 = ((read_only_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(addl_props__$1,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"readonly"):addl_props__$1);
if(visible_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = field_label;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__62788 = qualified_key;
var G__62788__$1 = (((G__62788 == null))?null:cljs.core.name(G__62788));
if((G__62788__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__62788__$1);
}
}
})(),(cljs.core.truth_(validation_message)?[com.fulcrologic.fulcro.dom.html_entities.nbsp,"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(validation_message),")"].join(''):null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62789 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl_props__$2,(function (){var G__62790 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (v){
return com.fulcrologic.rad.form.input_blur_BANG_(env,qualified_key,v);
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
})], null);
if(read_only_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62790,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"");
} else {
return G__62790;
}
})()], 0));
return (input_factory.cljs$core$IFn$_invoke$arity$1 ? input_factory.cljs$core$IFn$_invoke$arity$1(G__62789) : input_factory.call(null,G__62789));
})()], null),new cljs.core.Keyword(null,".ui.input",".ui.input",437295036))], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
});
}));

(com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.field.js.map
