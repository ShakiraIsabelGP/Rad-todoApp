goog.provide('com.fulcrologic.rad.rendering.semantic_ui.form');
com.fulcrologic.rad.rendering.semantic_ui.form.render_to_many = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_to_many(p__62503,p__62504,p__62505){
var map__62506 = p__62503;
var map__62506__$1 = (((((!((map__62506 == null))))?(((((map__62506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62506):map__62506);
var env = map__62506__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62506__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62507 = p__62504;
var map__62507__$1 = (((((!((map__62507 == null))))?(((((map__62507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62507):map__62507);
var attr = map__62507__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62507__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__62508 = p__62505;
var map__62508__$1 = (((((!((map__62508 == null))))?(((((map__62508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62508):map__62508);
var options = map__62508__$1;
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var map__62512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,k);
var map__62512__$1 = (((((!((map__62512 == null))))?(((((map__62512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62512):map__62512);
var add_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("semantic-ui","add-position","semantic-ui/add-position",1809901260));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var can_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679));
var added_via_upload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","added-via-upload?","com.fulcrologic.rad.form/added-via-upload?",1378681221));
var ref_container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62512__$1,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-container-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-container-class",-1457979003));
var form_instance_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr);
var add_QMARK_ = ((read_only_QMARK_)?false:com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_add_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0)));
var delete_QMARK_ = (function (item){
if((!(read_only_QMARK_))){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,item], 0));
} else {
return false;
}
});
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_instance_props,k);
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__62515 = ui;
if((G__62515 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__62515,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)) : com.fulcrologic.fulcro.components.component_options.call(null,G__62515,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)));
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_instance_props], 0));
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attr));
var validation_message = (com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attr));
var add = (cljs.core.truth_((function (){var or__4126__auto__ = (add_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return add_QMARK_;
}
})())?(function (){var order = (((add_QMARK_ instanceof cljs.core.Keyword))?add_QMARK_:new cljs.core.Keyword(null,"append","append",-291298229));
if(cljs.core.truth_(com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(added_via_upload_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0)))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
var new_id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var js_file = cljs.core.first(com.fulcrologic.rad.blob.evt__GT_js_files(evt));
var attributes = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)));
var id_attr = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id_attr);
var map__62516 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),attributes));
var map__62516__$1 = (((((!((map__62516 == null))))?(((((map__62516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62516):map__62516);
var sha_attr = map__62516__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),k);
var new_entity = com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(ui,cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id,qualified_key,""]));
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(form_instance,ui,new_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([order,target], 0));

return com.fulcrologic.rad.blob.upload_file_BANG_(form_instance,sha_attr,js_file,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,new_id], null)], null));
})], null)], null),null);
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (_){
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403),order,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564),ui], 0)));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "plus icon"})])], null),new cljs.core.Keyword(null,".ui.tiny.icon.button",".ui.tiny.icon.button",-507564510));
}
})():null);
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (item){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(ui,item) : com.fulcrologic.fulcro.components.get_ident.call(null,ui,item))));
})], null));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.html_entities.nbsp,com.fulcrologic.fulcro.dom.html_entities.nbsp], null),null),(((((add_position == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),add_position))))?add:null)], null),null),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validation_message], null),new cljs.core.Keyword(null,".ui.error.message",".ui.error.message",2105037160)):null),((cljs.core.seq(items))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(ref_container_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui segments";
}
})()], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props){
var G__62518 = props;
var G__62519 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(cljs.core.truth_(delete_QMARK_)?delete_QMARK_(props):false)], null)], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__62518,G__62519) : ui_factory.call(null,G__62518,G__62519));
}),items)], null),null):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui message"}),"None."])),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),add_position))?add:null)], null),new cljs.core.Keyword(null,".ui.container",".ui.container",-1294477965));
});
com.fulcrologic.rad.rendering.semantic_ui.form.render_to_one = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_to_one(p__62520,p__62521,p__62522){
var map__62523 = p__62520;
var map__62523__$1 = (((((!((map__62523 == null))))?(((((map__62523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62523):map__62523);
var env = map__62523__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62523__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62524 = p__62521;
var map__62524__$1 = (((((!((map__62524 == null))))?(((((map__62524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62524):map__62524);
var attr = map__62524__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62524__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__62525 = p__62522;
var map__62525__$1 = (((((!((map__62525 == null))))?(((((map__62525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62525):map__62525);
var options = map__62525__$1;
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62525__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var map__62529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,k);
var map__62529__$1 = (((((!((map__62529 == null))))?(((((map__62529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62529):map__62529);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62529__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var can_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62529__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62529__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62529__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var ref_container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62529__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ref-container-class","com.fulcrologic.rad.form/ref-container-class",81506672));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,k);
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__62532 = ui;
if((G__62532 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__62532,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)) : com.fulcrologic.fulcro.components.component_options.call(null,G__62532,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)));
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_props], 0));
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(ui);
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attr));
var validation_message = (com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attr));
var std_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","nested?","com.fulcrologic.rad.form/nested?",1148028911),true,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_props], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
})()], null);
if(cljs.core.truth_(props)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(ref_container_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0))], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validation_message], null),new cljs.core.Keyword(null,".ui.error.message",".ui.error.message",2105037160)):null),(function (){var G__62533 = props;
var G__62534 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,std_props], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__62533,G__62534) : ui_factory.call(null,G__62533,G__62534));
})()], null),null);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (can_add_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_add_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
}
})())){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(ref_container_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0))], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564),ui], 0)));
})], null),tr("Create")], null),new cljs.core.Keyword(null,".ui.primary.button",".ui.primary.button",665119007))], null),null);
} else {
return null;
}
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.standard_ref_container = (function com$fulcrologic$rad$rendering$semantic_ui$form$standard_ref_container(env,p__62535,options){
var map__62536 = p__62535;
var map__62536__$1 = (((((!((map__62536 == null))))?(((((map__62536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62536):map__62536);
var attr = map__62536__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62536__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
return com.fulcrologic.rad.rendering.semantic_ui.form.render_to_many(env,attr,options);
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.render_to_one(env,attr,options);
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.render_single_file = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_single_file(p__62551,p__62552,p__62553){
var map__62554 = p__62551;
var map__62554__$1 = (((((!((map__62554 == null))))?(((((map__62554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62554):map__62554);
var env = map__62554__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62555 = p__62552;
var map__62555__$1 = (((((!((map__62555 == null))))?(((((map__62555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62555):map__62555);
var attr = map__62555__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__62556 = p__62553;
var map__62556__$1 = (((((!((map__62556 == null))))?(((((map__62556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62556):map__62556);
var options = map__62556__$1;
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62556__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var map__62583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,k);
var map__62583__$1 = (((((!((map__62583 == null))))?(((((map__62583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62583):map__62583);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62583__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62583__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var parent = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,k);
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(ui);
var label = com.fulcrologic.rad.form.field_label(env,attr);
var std_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","nested?","com.fulcrologic.rad.form/nested?",1148028911),true,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(cljs.core.truth_(can_delete_QMARK_)?(can_delete_QMARK_.cljs$core$IFn$_invoke$arity$2 ? can_delete_QMARK_.cljs$core$IFn$_invoke$arity$2(parent,props) : can_delete_QMARK_.call(null,parent,props)):false)], null);
if(cljs.core.truth_(props)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),(function (){var G__62589 = props;
var G__62590 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,std_props], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__62589,G__62590) : ui_factory.call(null,G__62589,G__62590));
})()], null),new cljs.core.Keyword(null,".field",".field",954681856));
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr("Upload??? (TODO)")], null),null)], null),null);
}
});

var options__50078__auto___62748 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-key","input-key",566293742),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000000)))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$form$render_ManyFiles(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62619 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62619__$1 = (((((!((map__62619 == null))))?(((((map__62619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62619):map__62619);
var map__62620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62619__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var map__62620__$1 = (((((!((map__62620 == null))))?(((((map__62620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62620):map__62620);
var env = map__62620__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62620__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62620__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__62621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62619__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var map__62621__$1 = (((((!((map__62621 == null))))?(((((map__62621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62621):map__62621);
var attr = map__62621__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__62622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62619__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__62622__$1 = (((((!((map__62622 == null))))?(((((map__62622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62622):map__62622);
var options = map__62622__$1;
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62622__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var map__62643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,k);
var map__62643__$1 = (((((!((map__62643 == null))))?(((((map__62643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62643):map__62643);
var add_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword("semantic-ui","add-position","semantic-ui/add-position",1809901260));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var can_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679));
var sort_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","sort-children","com.fulcrologic.rad.form/sort-children",-1384515906));
var form_instance_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = ((com.fulcrologic.rad.form.read_only_QMARK_(master_form,attr)) || (com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr)));
var add_QMARK_ = ((read_only_QMARK_)?false:com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_add_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0)));
var delete_QMARK_ = ((read_only_QMARK_)?false:(function (item){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,item], 0));
}));
var items = (function (){var G__62645 = (function (){var G__62646 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__62646) : k.call(null,G__62646));
})();
if(cljs.core.truth_(sort_children)){
return (sort_children.cljs$core$IFn$_invoke$arity$1 ? sort_children.cljs$core$IFn$_invoke$arity$1(G__62645) : sort_children.call(null,G__62645));
} else {
return G__62645;
}
})();
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__62648 = ui;
if((G__62648 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__62648,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)) : com.fulcrologic.fulcro.components.component_options.call(null,G__62648,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)));
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_instance_props], 0));
var upload_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-file-upload"].join('');
var add = (cljs.core.truth_((function (){var or__4126__auto__ = (add_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return add_QMARK_;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),upload_id], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "ui plus icon"})]),tr("Add File")], null),new cljs.core.Keyword(null,".ui.green.button",".ui.green.button",-1857615884)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"key","key",-1516042587),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"input-key","input-key",566293742)),new cljs.core.Keyword(null,"id","id",-1388402092),upload_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(-1),new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
var new_id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var js_file = cljs.core.first(com.fulcrologic.rad.blob.evt__GT_js_files(evt));
var attributes = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)));
var id_attr = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id_attr);
var map__62669 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),attributes));
var map__62669__$1 = (((((!((map__62669 == null))))?(((((map__62669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62669):map__62669);
var sha_attr = map__62669__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62669__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),k);
var new_entity = com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(ui,cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id,qualified_key,""]));
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(form_instance,ui,new_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),target], 0));

com.fulcrologic.rad.blob.upload_file_BANG_(form_instance,sha_attr,js_file,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,new_id], null)], null));

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-key","input-key",566293742),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000000)))], null));
})], null)], null),null)], null),null):null);
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (item){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(ui,item) : com.fulcrologic.fulcro.components.get_ident.call(null,ui,item))));
})], null));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),(((((add_position == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),add_position))))?add:null),((cljs.core.seq(items))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props){
var G__62671 = props;
var G__62672 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(cljs.core.truth_(delete_QMARK_)?com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)):false)], null)], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__62671,G__62672) : ui_factory.call(null,G__62671,G__62672));
}),items)], null),new cljs.core.Keyword(null,".ui.very.relaxed.items",".ui.very.relaxed.items",146303503)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trc("there are no files in a list of uploads","No files.")], null),new cljs.core.Keyword(null,".ui.message",".ui.message",2129177536))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),add_position))?add:null)], null),new cljs.core.Keyword(null,".ui.basic.segment",".ui.basic.segment",1584502196));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62748,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ManyFiles","com.fulcrologic.rad.rendering.semantic-ui.form/ManyFiles",1193292810),options__50078__auto___62748);
com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__62673){
var map__62674 = p__62673;
var map__62674__$1 = (((((!((map__62674 == null))))?(((((map__62674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62674):map__62674);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62674__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
})], null));
com.fulcrologic.rad.rendering.semantic_ui.form.file_ref_container = (function com$fulcrologic$rad$rendering$semantic_ui$form$file_ref_container(env,p__62676,options){
var map__62677 = p__62676;
var map__62677__$1 = (((((!((map__62677 == null))))?(((((map__62677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62677):map__62677);
var attr = map__62677__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62677__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
var G__62679 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"options","options",99638489),options], null);
return (com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files.cljs$core$IFn$_invoke$arity$1(G__62679) : com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files.call(null,G__62679));
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.render_single_file(env,attr,options);
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.render_attribute = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_attribute(env,attr,p__62680){
var map__62681 = p__62680;
var map__62681__$1 = (((((!((map__62681 == null))))?(((((map__62681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62681):map__62681);
var options = map__62681__$1;
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var map__62683 = attr;
var map__62683__$1 = (((((!((map__62683 == null))))?(((((map__62683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62683):map__62683);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62683__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
if(cljs.core.contains_QMARK_(subforms,k)){
var render_ref = (function (){var or__4126__auto__ = com.fulcrologic.rad.form.ref_container_renderer(env,attr);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.standard_ref_container;
}
})();
return (render_ref.cljs$core$IFn$_invoke$arity$3 ? render_ref.cljs$core$IFn$_invoke$arity$3(env,attr,options) : render_ref.call(null,env,attr,options));
} else {
return com.fulcrologic.rad.form.render_field(env,attr);
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string = new cljs.core.PersistentArrayMap(null, 7, [(1),"one field",(2),"two fields",(3),"three fields",(4),"four fields",(5),"five fields",(6),"six fields",(7),"seven fields"], null);
com.fulcrologic.rad.rendering.semantic_ui.form.attribute_map = cljs.core.memoize((function (attributes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__62685){
var map__62686 = p__62685;
var map__62686__$1 = (((((!((map__62686 == null))))?(((((map__62686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62686):map__62686);
var attr = map__62686__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62686__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,qualified_key,attr);
}),cljs.core.PersistentArrayMap.EMPTY,attributes);
}));
com.fulcrologic.rad.rendering.semantic_ui.form.render_layout_STAR_ = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_layout_STAR_(env,options,k__GT_attribute,layout){
if(cljs.core.truth_(goog.DEBUG)){
if(((cljs.core.vector_QMARK_(layout)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,layout)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,235,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::form/layout must be a vector of vectors!"], null);
}),null)),null,280795830,null);
}
} else {
}

try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var G__62689 = cljs.core.count(row);
return (com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1(G__62689) : com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.call(null,G__62689));
})()], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
var b2__11668__auto__ = k__GT_attribute;
if(cljs.core.truth_(b2__11668__auto__)){
var _ = b2__11668__auto__;
var b2__11668__auto____$1 = (k__GT_attribute.cljs$core$IFn$_invoke$arity$1 ? k__GT_attribute.cljs$core$IFn$_invoke$arity$1(col) : k__GT_attribute.call(null,col));
if(cljs.core.truth_(b2__11668__auto____$1)){
var attr = b2__11668__auto____$1;
return com.fulcrologic.rad.rendering.semantic_ui.form.render_attribute(env,attr,options);
} else {
if(cljs.core.truth_((function (){var G__62690 = options;
var G__62690__$1 = (((G__62690 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232).cljs$core$IFn$_invoke$arity$1(G__62690));
if((G__62690__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__62690__$1,col);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env),col);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Missing attribute (or lookup) for",col], null);
}),null)),null,1206402509,null);
}
}
} else {
if(cljs.core.truth_((function (){var G__62691 = options;
var G__62691__$1 = (((G__62691 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232).cljs$core$IFn$_invoke$arity$1(G__62691));
if((G__62691__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__62691__$1,col);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env),col);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Missing attribute (or lookup) for",col], null);
}),null)),null,721609709,null);
}
}
}),row)], null),null);
}),layout));
}catch (e62688){var _ = e62688;
return null;
}});
com.fulcrologic.rad.rendering.semantic_ui.form.render_layout = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_layout(env,p__62692){
var map__62693 = p__62692;
var map__62693__$1 = (((((!((map__62693 == null))))?(((((map__62693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62693):map__62693);
var options = map__62693__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554));
var k__GT_attribute = com.fulcrologic.rad.rendering.semantic_ui.form.attribute_map(attributes);
return com.fulcrologic.rad.rendering.semantic_ui.form.render_layout_STAR_(env,options,k__GT_attribute,layout);
});

var options__50078__auto___62773 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(0),new cljs.core.Keyword(null,"tab-details","tab-details",2090016060),cljs.core.memoize((function (attributes,tabbed_layout){
var k__GT_attr = com.fulcrologic.rad.rendering.semantic_ui.form.attribute_map(attributes);
var tab_labels = cljs.core.filterv(cljs.core.string_QMARK_,tabbed_layout);
var tab_label__GT_layout = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,tabbed_layout))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"k->attr","k->attr",1606397722),k__GT_attr,new cljs.core.Keyword(null,"tab-labels","tab-labels",501170052),tab_labels,new cljs.core.Keyword(null,"tab-label->layout","tab-label->layout",986482008),tab_label__GT_layout], null);
}))], null);
}catch (e62695){var _ = e62695;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,271,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot build tabs for tabbed layout. Check your tabbed-layout options for",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_name.call(null,this$))], null);
}),null)),null,-1643024118,null);
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$form$render_TabbedLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var env = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62696 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__62696__$1 = (((((!((map__62696 == null))))?(((((map__62696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62696):map__62696);
var options = map__62696__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62696__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var tabbed_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62696__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","tabbed-layout","com.fulcrologic.rad.form/tabbed-layout",-1223697794));
var map__62698 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__62698__$1 = (((((!((map__62698 == null))))?(((((map__62698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62698):map__62698);
var tab_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62698__$1,new cljs.core.Keyword(null,"tab-details","tab-details",2090016060));
var current_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62698__$1,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577));
var map__62699 = (tab_details.cljs$core$IFn$_invoke$arity$2 ? tab_details.cljs$core$IFn$_invoke$arity$2(attributes,tabbed_layout) : tab_details.call(null,attributes,tabbed_layout));
var map__62699__$1 = (((((!((map__62699 == null))))?(((((map__62699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62699):map__62699);
var k__GT_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699__$1,new cljs.core.Keyword(null,"k->attr","k->attr",1606397722));
var tab_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699__$1,new cljs.core.Keyword(null,"tab-labels","tab-labels",501170052));
var tab_label__GT_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699__$1,new cljs.core.Keyword(null,"tab-label->layout","tab-label->layout",986482008));
var active_layout = (function (){var G__62702 = current_tab;
var G__62702__$1 = (((G__62702 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab_labels,G__62702));
if((G__62702__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab_label__GT_layout,G__62702__$1);
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_tab)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui pointing menu"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,title){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),idx], null));
}),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_tab,idx))?"active":null)], null)], null),title], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),tab_labels))]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.form.render_layout_STAR_(env,options,k__GT_attr,active_layout)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62773,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","TabbedLayout","com.fulcrologic.rad.rendering.semantic-ui.form/TabbedLayout",-521087528),options__50078__auto___62773);
com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout);

var options__50078__auto___62774 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$form$render_StandardFormContainer(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62704 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62704__$1 = (((((!((map__62704 == null))))?(((((map__62704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62704):map__62704);
var env = map__62704__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","props","com.fulcrologic.rad.form/props",278185108));
var computed_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","computed-props","com.fulcrologic.rad.form/computed-props",-321049616));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__62706 = computed_props;
var map__62706__$1 = (((((!((map__62706 == null))))?(((((map__62706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62706):map__62706);
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62706__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var nested_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(master_form,form_instance);
var read_only_form_QMARK_ = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_form], 0));
}
})();
var invalid_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1(env));
var render_fields = (function (){var or__4126__auto__ = com.fulcrologic.rad.form.form_layout_renderer(env);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.standard_form_layout_renderer;
}
})();
if(cljs.core.truth_(goog.DEBUG)){
var valid_QMARK__62777 = (cljs.core.truth_(read_only_form_QMARK_)?true:com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$1(env));
var dirty_QMARK__62778 = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__4126__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.rendering.semantic-ui.form",null,306,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_name.call(null,form_instance))," valid? ",valid_QMARK__62777], null);
}),null)),null,-266942847,null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.rendering.semantic-ui.form",null,307,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_name.call(null,form_instance))," dirty? ",dirty_QMARK__62778], null);
}),null)),null,1949715064,null);
} else {
}

if(nested_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-element-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-element-class",-268677869)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-element-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-element-class",-268677869))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui segment";
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)))], null),(cljs.core.truth_(can_delete_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(can_delete_QMARK_),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "times icon"})])], null),new cljs.core.Keyword(null,".ui.icon.primary.right.floated.button",".ui.icon.primary.right.floated.button",-1236967318)):null),(render_fields.cljs$core$IFn$_invoke$arity$1 ? render_fields.cljs$core$IFn$_invoke$arity$1(env) : render_fields.call(null,env))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099))], null),null);
} else {
var map__62708 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__62708__$1 = (((((!((map__62708 == null))))?(((((map__62708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62708):map__62708);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var action_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","action-buttons","com.fulcrologic.rad.form/action-buttons",1147437342));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","controls","com.fulcrologic.rad.form/controls",-465942807));
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,props], 0));
var action_buttons__$1 = (cljs.core.truth_(action_buttons)?action_buttons:com.fulcrologic.rad.form.standard_action_buttons);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance))),new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(form_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.layout_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","top-level-class","com.fulcrologic.rad.rendering.semantic-ui.form/top-level-class",-962711221)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","top-level-class","com.fulcrologic.rad.rendering.semantic-ui.form/top-level-class",-962711221))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "ui container";
}
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(form_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.controls_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","controls-class","com.fulcrologic.rad.rendering.semantic-ui.form/controls-class",-1297338254)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","controls-class","com.fulcrologic.rad.rendering.semantic-ui.form/controls-class",-1297338254))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "ui top attached segment";
}
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__62703_SHARP_){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2(master_form,p1__62703_SHARP_);
}),action_buttons__$1)], null),new cljs.core.Keyword(null,".ui.right.floated.buttons",".ui.right.floated.buttons",-2143098758))], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396))], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","form-class","com.fulcrologic.rad.rendering.semantic-ui.form/form-class",-1673203483)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","form-class","com.fulcrologic.rad.rendering.semantic-ui.form/form-class",-1673203483))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui attached form";
}
})(),(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr("The form has errors and cannot be saved.")], null),new cljs.core.Keyword(null,".ui.error.message",".ui.error.message",2105037160)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(render_fields.cljs$core$IFn$_invoke$arity$1 ? render_fields.cljs$core$IFn$_invoke$arity$1(env) : render_fields.call(null,env))], null),new cljs.core.Keyword(null,".ui.attached.segment",".ui.attached.segment",-1525826681))], null),null)], null),null);
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62774,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","StandardFormContainer","com.fulcrologic.rad.rendering.semantic-ui.form/StandardFormContainer",-1722755910),options__50078__auto___62774);
com.fulcrologic.rad.rendering.semantic_ui.form.standard_form_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer);
com.fulcrologic.rad.rendering.semantic_ui.form.standard_form_layout_renderer = (function com$fulcrologic$rad$rendering$semantic_ui$form$standard_form_layout_renderer(p__62710){
var map__62711 = p__62710;
var map__62711__$1 = (((((!((map__62711 == null))))?(((((map__62711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62711):map__62711);
var env = map__62711__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62713 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__62713__$1 = (((((!((map__62713 == null))))?(((((map__62713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62713):map__62713);
var options = map__62713__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62713__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62713__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554));
var tabbed_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62713__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","tabbed-layout","com.fulcrologic.rad.form/tabbed-layout",-1223697794));
if(cljs.core.vector_QMARK_(layout)){
return com.fulcrologic.rad.rendering.semantic_ui.form.render_layout(env,options);
} else {
if(cljs.core.vector_QMARK_(tabbed_layout)){
return (com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout.cljs$core$IFn$_invoke$arity$2(env,options) : com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout.call(null,env,options));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attr){
return com.fulcrologic.rad.rendering.semantic_ui.form.render_attribute(env,attr,options);
}),attributes);

}
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.file_icon_renderer_STAR_ = (function com$fulcrologic$rad$rendering$semantic_ui$form$file_icon_renderer_STAR_(p__62715){
var map__62716 = p__62715;
var map__62716__$1 = (((((!((map__62716 == null))))?(((((map__62716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62716):map__62716);
var env = map__62716__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62716__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62718 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__62718__$1 = (((((!((map__62718 == null))))?(((((map__62718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62718):map__62718);
var options = map__62718__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var attribute = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),attributes));
var sha_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var file_key = com.fulcrologic.rad.blob.filename_key(sha_key);
var url_key = com.fulcrologic.rad.blob.url_key(sha_key);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,file_key,"File");
var dirty_QMARK_ = com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2(props,sha_key);
var failed_QMARK_ = com.fulcrologic.rad.blob.failed_upload_QMARK_(props,sha_key);
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attribute));
var pct = com.fulcrologic.rad.blob.upload_percentage(props,sha_key);
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,sha_key);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,url_key);
if(com.fulcrologic.rad.blob.uploading_QMARK_(props,sha_key)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sha)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "huge file icon"})]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginLeft": "-10px"}), "className": "ui active red loader"})]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-percent","data-percent",2007758528),pct], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645),"300ms",new cljs.core.Keyword(null,"width","width",-384071477),pct], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress"}),""])], null),new cljs.core.Keyword(null,".bar",".bar",-318206488))], null),new cljs.core.Keyword(null,".ui.bottom.attached.blue.progress",".ui.bottom.attached.blue.progress",1726587826))], null),new cljs.core.Keyword(null,".ui.tiny.image",".ui.tiny.image",-1340530978)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),new cljs.core.Keyword(null,".middle.aligned.content",".middle.aligned.content",928614637)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
com.fulcrologic.fulcro.application.abort_BANG_(form_instance,sha);

return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "times icon"})])], null),new cljs.core.Keyword(null,".ui.red.icon.button",".ui.red.icon.button",-24544086))], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
} else {
var G__62721 = new cljs.core.Keyword(null,".item",".item",-1434967496);
var G__62722 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sha),new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?filename=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(com.fulcrologic.rad.blob.blob_downloadable_QMARK_(props,sha_key)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return confirm(tr("View/download?"));
}
})())){
return null;
} else {
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.fulcro.dom.events.prevent_default_BANG_(evt);
}
})], null);
var G__62723 = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((failed_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "huge skull crossbones icon"})]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "huge file icon"})]))], null),new cljs.core.Keyword(null,".ui.tiny.image",".ui.tiny.image",-1340530978));
var G__62724 = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),((failed_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tr("Upload failed. Delete and try again.")),")"].join(''):((dirty_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tr("unsaved")),")"].join(''):null))].join('')], null),new cljs.core.Keyword(null,".middle.aligned.content",".middle.aligned.content",928614637));
var G__62725 = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

com.fulcrologic.fulcro.dom.events.prevent_default_BANG_(evt);

if(cljs.core.truth_(confirm(tr("Permanently Delete File?")))){
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
} else {
return null;
}
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "times icon"})])], null),new cljs.core.Keyword(null,".ui.red.icon.button",".ui.red.icon.button",-24544086));
var fexpr__62720 = ((dirty_QMARK_)?com.fulcrologic.fulcro.dom.span:com.fulcrologic.fulcro.dom.a);
return (fexpr__62720.cljs$core$IFn$_invoke$arity$5 ? fexpr__62720.cljs$core$IFn$_invoke$arity$5(G__62721,G__62722,G__62723,G__62724,G__62725) : fexpr__62720.call(null,G__62721,G__62722,G__62723,G__62724,G__62725));
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.file_icon_renderer = (function com$fulcrologic$rad$rendering$semantic_ui$form$file_icon_renderer(env){
return com.fulcrologic.rad.rendering.semantic_ui.form.file_icon_renderer_STAR_(env);
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.form.js.map
