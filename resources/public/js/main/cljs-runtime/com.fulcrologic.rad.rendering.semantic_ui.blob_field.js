goog.provide('com.fulcrologic.rad.rendering.semantic_ui.blob_field');
com.fulcrologic.rad.rendering.semantic_ui.blob_field.evt__GT_js_files = (function com$fulcrologic$rad$rendering$semantic_ui$blob_field$evt__GT_js_files(evt){
var js_file_list = evt.target.files;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file_idx){
var js_file = js_file_list.item(file_idx);
var name = js_file.name;
return js_file;
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(js_file_list.length));
});

var options__50078__auto___62842 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return null;
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-ref","save-ref",153912851),(function (r){
return goog.object.set(this$,"fileinput",r);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (evt){
var temp__5735__auto__ = goog.object.get(this$,"fileinput");
if(cljs.core.truth_(temp__5735__auto__)){
var i = temp__5735__auto__;
return i.click();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var env = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var attribute = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var file = cljs.core.first(com.fulcrologic.rad.rendering.semantic_ui.blob_field.evt__GT_js_files(evt));
return com.fulcrologic.rad.blob.upload_file_BANG_(this$,attribute,file,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),cljs.core.PersistentVector.EMPTY], null));
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$blob_field$render_FileUploadField(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62835 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62835__$1 = (((((!((map__62835 == null))))?(((((map__62835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62835):map__62835);
var env = map__62835__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__62836 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__62836__$1 = (((((!((map__62836 == null))))?(((((map__62836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62836):map__62836);
var attribute = map__62836__$1;
var accept_file_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62836__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","accept-file-types","com.fulcrologic.rad.blob/accept-file-types",-320655060));
var can_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62836__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","can-change?","com.fulcrologic.rad.blob/can-change?",995014386));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62836__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = ((com.fulcrologic.rad.form.read_only_QMARK_(master_form,attribute)) || (com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute)));
var can_change_QMARK___$1 = ((read_only_QMARK_)?false:com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_change_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,attribute], 0)));
var url_key = com.fulcrologic.rad.blob.url_key(qualified_key);
var name_key = com.fulcrologic.rad.blob.filename_key(qualified_key);
var current_sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,url_key);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,name_key);
var pct = com.fulcrologic.rad.blob.upload_percentage(props,qualified_key);
var has_current_value_QMARK_ = cljs.core.seq(current_sha);
var map__62839 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__62839__$1 = (((((!((map__62839 == null))))?(((((map__62839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62839):map__62839);
var save_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62839__$1,new cljs.core.Keyword(null,"save-ref","save-ref",153912851));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62839__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62839__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var dirty_QMARK_ = ((read_only_QMARK_)?false:com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2(props,qualified_key));
var label = com.fulcrologic.rad.form.field_label(env,attribute);
var invalid_QMARK_ = ((read_only_QMARK_)?false:(com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attribute)));
var validation_message = (cljs.core.truth_(invalid_QMARK_)?(com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attribute)):null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),((com.fulcrologic.rad.blob.blob_downloadable_QMARK_(props,qualified_key))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?filename=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('')], null),tr("Download")], null),null):((com.fulcrologic.rad.blob.uploading_QMARK_(props,qualified_key))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645),"300ms",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),pct], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pct], null),new cljs.core.Keyword(null,".progress",".progress",2131746487))], null),new cljs.core.Keyword(null,".bar",".bar",-318206488))], null),new cljs.core.Keyword(null,".ui.small.blue.progress",".ui.small.blue.progress",1421494560)):null))], null),new cljs.core.Keyword(null,".field",".field",954681856));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.blob_field !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.blob_field.FileUploadField !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.blob_field.FileUploadField = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62842,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.blob_field.FileUploadField,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.blob-field","FileUploadField","com.fulcrologic.rad.rendering.semantic-ui.blob-field/FileUploadField",-2118094587),options__50078__auto___62842);
com.fulcrologic.rad.rendering.semantic_ui.blob_field.ui_file_upload_field = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.blob_field.FileUploadField,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
var G__62841 = props;
var G__62841__$1 = (((G__62841 == null))?null:(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(G__62841) : com.fulcrologic.fulcro.components.get_computed.call(null,G__62841)));
if((G__62841__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(G__62841__$1);
}
})], null));
com.fulcrologic.rad.rendering.semantic_ui.blob_field.render_file_upload = (function com$fulcrologic$rad$rendering$semantic_ui$blob_field$render_file_upload(env,attribute){
return (com.fulcrologic.rad.rendering.semantic_ui.blob_field.ui_file_upload_field.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.rendering.semantic_ui.blob_field.ui_file_upload_field.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.rendering.semantic_ui.blob_field.ui_file_upload_field.call(null,env,attribute));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.blob_field.js.map
