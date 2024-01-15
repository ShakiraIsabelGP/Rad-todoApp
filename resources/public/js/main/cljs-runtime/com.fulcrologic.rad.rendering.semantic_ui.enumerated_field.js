goog.provide('com.fulcrologic.rad.rendering.semantic_ui.enumerated_field');
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.enumerated_options = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$enumerated_options(p__62803,p__62804){
var map__62805 = p__62803;
var map__62805__$1 = (((((!((map__62805 == null))))?(((((map__62805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62805):map__62805);
var env = map__62805__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62805__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62806 = p__62804;
var map__62806__$1 = (((((!((map__62806 == null))))?(((((map__62806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62806):map__62806);
var attribute = map__62806__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62806__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__62810 = attribute;
var map__62810__$1 = (((((!((map__62810 == null))))?(((((map__62810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62810):map__62810);
var enumerated_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62810__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-values","com.fulcrologic.rad.attributes/enumerated-values",-1661044356));
var enumeration_labels = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-labels","com.fulcrologic.rad.attributes/enumerated-labels",-2136251655).cljs$core$IFn$_invoke$arity$1(attribute),(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","enumerated-labels","com.fulcrologic.rad.form/enumerated-labels",-1411306194),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","enumerated-labels","com.fulcrologic.rad.form/enumerated-labels",-1411306194),qualified_key))], 0));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),com.fulcrologic.rad.options_util._QMARK__BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(enumeration_labels,k,cljs.core.name(k))),new cljs.core.Keyword(null,"value","value",305978217),k], null);
}),enumerated_values));
});
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_many = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$render_to_many(p__62812,p__62813){
var map__62814 = p__62812;
var map__62814__$1 = (((((!((map__62814 == null))))?(((((map__62814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62814):map__62814);
var env = map__62814__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62814__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62815 = p__62813;
var map__62815__$1 = (((((!((map__62815 == null))))?(((((map__62815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62815):map__62815);
var attribute = map__62815__$1;
var field_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62815__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-label","com.fulcrologic.rad.form/field-label",964001567));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62815__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var computed_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62815__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-options","com.fulcrologic.rad.attributes/computed-options",-1823032791));
if(com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute)){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var options = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(computed_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.enumerated_options(env,attribute);
}
})();
var selected_ids = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = field_label;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__62818 = qualified_key;
var G__62818__$1 = (((G__62818 == null))?null:cljs.core.name(G__62818));
if((G__62818__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__62818__$1);
}
}
})()], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui middle aligned celled list big"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62819){
var map__62820 = p__62819;
var map__62820__$1 = (((((!((map__62820 == null))))?(((((map__62820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62820):map__62820);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked_QMARK_ = cljs.core.contains_QMARK_(selected_ids,value);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "content"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui toggle checkbox"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
var selection = (((!(checked_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var or__4126__auto__ = selected_ids;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()),value):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected_ids,value));
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,selection);
})], null)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null),null))]))])], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),options))])], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_one = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$render_to_one(p__62823,p__62824){
var map__62825 = p__62823;
var map__62825__$1 = (((((!((map__62825 == null))))?(((((map__62825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62825):map__62825);
var env = map__62825__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62825__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62826 = p__62824;
var map__62826__$1 = (((((!((map__62826 == null))))?(((((map__62826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62826):map__62826);
var attribute = map__62826__$1;
var field_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62826__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-label","com.fulcrologic.rad.form/field-label",964001567));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62826__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var computed_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62826__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-options","com.fulcrologic.rad.attributes/computed-options",-1823032791));
if(com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute)){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attribute));
var user_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var options = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(computed_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.enumerated_options(env,attribute);
}
})();
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(field_label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__62830 = qualified_key;
var G__62830__$1 = (((G__62830 == null))?null:cljs.core.name(G__62830));
if((G__62830__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__62830__$1);
}
}
})()),(cljs.core.truth_(invalid_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tr("Required")),")"].join(''):null)].join('')], null),null),((read_only_QMARK_)?(function (){var value__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62822_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__62822_SHARP_));
}),options));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(value__$1)], null)], null),null);
})():(function (){var G__62831 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
})], null),user_props], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__62831) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__62831));
})())], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_field = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$render_field(env,p__62832){
var map__62833 = p__62832;
var map__62833__$1 = (((((!((map__62833 == null))))?(((((map__62833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62833):map__62833);
var attribute = map__62833__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62833__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325),new cljs.core.Keyword(null,"one","one",935007904));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_many(env,attribute);
} else {
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_one(env,attribute);
}
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.js.map
