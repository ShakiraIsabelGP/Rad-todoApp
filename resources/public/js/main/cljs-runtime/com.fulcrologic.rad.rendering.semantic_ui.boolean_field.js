goog.provide('com.fulcrologic.rad.rendering.semantic_ui.boolean_field');
com.fulcrologic.rad.rendering.semantic_ui.boolean_field.render_field = (function com$fulcrologic$rad$rendering$semantic_ui$boolean_field$render_field(p__89138,attribute){
var map__89139 = p__89138;
var map__89139__$1 = (((((!((map__89139 == null))))?(((((map__89139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89139):map__89139);
var env = map__89139__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89139__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var user_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,k,false);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checked","checked",-50955819),value,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(read_only_QMARK_),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
var v = cljs.core.not(value);
com.fulcrologic.rad.form.input_blur_BANG_(env,k,v);

return com.fulcrologic.rad.form.input_changed_BANG_(env,k,v);
})], null),user_props], 0))], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label], null),null)], null),new cljs.core.Keyword(null,".ui.checkbox",".ui.checkbox",780477788))], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.boolean_field.js.map
