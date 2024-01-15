goog.provide('com.fulcrologic.rad.rendering.semantic_ui.decimal_field');
com.fulcrologic.rad.rendering.semantic_ui.decimal_field.ui_decimal_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.decimal-field","DecimalInput","com.fulcrologic.rad.rendering.semantic-ui.decimal-field/DecimalInput",864645967),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model->string","model->string",-2085451701),(function (n){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_str(n);
}),new cljs.core.Keyword(null,"string->model","string->model",-134531957),(function (s){
return com.fulcrologic.rad.type_support.decimal.numeric(s);
}),new cljs.core.Keyword(null,"string-filter","string-filter",781255569),(function (s){
return clojure.string.replace(s,/[^\d.]/,"");
})], null)));
com.fulcrologic.rad.rendering.semantic_ui.decimal_field.render_field = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.rad.rendering.semantic_ui.decimal_field.ui_decimal_input);

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.decimal_field.js.map
