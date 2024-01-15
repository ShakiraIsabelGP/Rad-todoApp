goog.provide('com.fulcrologic.rad.rendering.semantic_ui.instant_field');
com.fulcrologic.rad.rendering.semantic_ui.instant_field.ui_datetime_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.instant-field","DateTimeInput","com.fulcrologic.rad.rendering.semantic-ui.instant-field/DateTimeInput",-1006622350),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model->string","model->string",-2085451701),(function (tm){
if(cljs.core.truth_(tm)){
return com.fulcrologic.rad.type_support.date_time.inst__GT_html_datetime_string.cljs$core$IFn$_invoke$arity$1(tm);
} else {
return "";
}
}),new cljs.core.Keyword(null,"string->model","string->model",-134531957),(function (s){
var G__89218 = s;
if((G__89218 == null)){
return null;
} else {
return com.fulcrologic.rad.type_support.date_time.html_datetime_string__GT_inst.cljs$core$IFn$_invoke$arity$1(G__89218);
}
})], null)));
com.fulcrologic.rad.rendering.semantic_ui.instant_field.ui_date_noon_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.instant-field","DateTimeInput","com.fulcrologic.rad.rendering.semantic-ui.instant-field/DateTimeInput",-1006622350),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model->string","model->string",-2085451701),(function (tm){
if(cljs.core.truth_(tm)){
return clojure.string.replace(com.fulcrologic.rad.type_support.date_time.inst__GT_html_datetime_string.cljs$core$IFn$_invoke$arity$1(tm),/T.*$/,"");
} else {
return "";
}
}),new cljs.core.Keyword(null,"string->model","string->model",-134531957),(function (s){
var G__89219 = s;
var G__89219__$1 = (((G__89219 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89219),"T12:00"].join(''));
if((G__89219__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.type_support.date_time.html_datetime_string__GT_inst.cljs$core$IFn$_invoke$arity$1(G__89219__$1);
}
})], null)));
/**
 * Uses current timezone and gathers date/time.
 */
com.fulcrologic.rad.rendering.semantic_ui.instant_field.render_field = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime-local"], null),com.fulcrologic.rad.rendering.semantic_ui.instant_field.ui_datetime_input);
/**
 * Uses current timezone and gathers a local date but saves it as an instant at noon on that date.
 */
com.fulcrologic.rad.rendering.semantic_ui.instant_field.render_date_at_noon_field = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"date"], null),com.fulcrologic.rad.rendering.semantic_ui.instant_field.ui_date_noon_input);

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.instant_field.js.map
