goog.provide('com.fulcrologic.rad.rendering.semantic_ui.entity_picker');

var options__50078__auto___62772 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__62727 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62727__$1 = (((((!((map__62727 == null))))?(((((map__62727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62727):map__62727);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var form_instance = new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var form_class = com.fulcrologic.fulcro.components.react_type(form_instance);
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,form_class,props,attr);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$render_ToOnePicker(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62729 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62729__$1 = (((((!((map__62729 == null))))?(((((map__62729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62729):map__62729);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__62731 = env;
var map__62731__$1 = (((((!((map__62731 == null))))?(((((map__62731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62731):map__62731);
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62732 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__62732__$1 = (((((!((map__62732 == null))))?(((((map__62732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62732):map__62732);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var field_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138));
var map__62733 = attr;
var map__62733__$1 = (((((!((map__62733 == null))))?(((((map__62733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62733):map__62733);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62733__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62733__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
var field_options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_options,qualified_key);
var target_id_key = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__62738){
var map__62739 = p__62738;
var map__62739__$1 = (((((!((map__62739 == null))))?(((((map__62739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62739):map__62739);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62739__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62739__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,qualified_key)){
return target;
} else {
return null;
}
}),attributes));
var map__62734 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,field_options__$1], 0));
var map__62734__$1 = (((((!((map__62734 == null))))?(((((map__62734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62734):map__62734);
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62734__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62734__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var cache_key__$1 = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.react_type(form_instance),(com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance))], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return query_key;
}
})();
var cache_key__$2 = (function (){var or__4126__auto__ = cache_key__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = query_key;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ref field MUST have either a ::picker-options/cache-key or ::picker-options/query-key in attribute ",qualified_key], null);
}),null)),null,858546229,null);
}
}
})();
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$2,new cljs.core.Keyword(null,"options","options",99638489)], null));
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,target_id_key], null))], null);
var field_label = com.fulcrologic.rad.form.field_label(env,attr);
var read_only_QMARK_ = ((com.fulcrologic.rad.form.read_only_QMARK_(master_form,attr)) || (com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr)));
var invalid_QMARK_ = (((!(read_only_QMARK_)))?(com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attr)):false);
var onSelect = (function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label,(cljs.core.truth_(invalid_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tr("Required")),")"].join(''):null)], null),null),((read_only_QMARK_)?(function (){var value__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62726_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__62726_SHARP_));
}),options));
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(value__$1);
})():(function (){var G__62742 = (function (){var G__62743 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return onSelect(v);
}),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"clearable","clearable",943040201),cljs.core.not(required_QMARK_),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options], null);
return G__62743;
})();
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__62742) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__62742));
})())], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62772,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","ToOnePicker","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/ToOnePicker",1837874883),options__50078__auto___62772);
var ui_to_one_picker_62775 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__62744){
var map__62745 = p__62744;
var map__62745__$1 = (((((!((map__62745 == null))))?(((((map__62745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62745):map__62745);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62745__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
})], null));
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.to_one_picker = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$to_one_picker(env,attribute){
var G__62747 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attr","attr",-604132353),attribute], null);
return (ui_to_one_picker_62775.cljs$core$IFn$_invoke$arity$1 ? ui_to_one_picker_62775.cljs$core$IFn$_invoke$arity$1(G__62747) : ui_to_one_picker_62775.call(null,G__62747));
});

var options__50078__auto___62776 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__62749 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62749__$1 = (((((!((map__62749 == null))))?(((((map__62749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62749):map__62749);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62749__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62749__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var form_instance = new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var form_class = com.fulcrologic.fulcro.components.react_type(form_instance);
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,form_class,props,attr);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$render_ToManyPicker(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62751 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62751__$1 = (((((!((map__62751 == null))))?(((((map__62751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62751):map__62751);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62751__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__62753 = env;
var map__62753__$1 = (((((!((map__62753 == null))))?(((((map__62753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62753):map__62753);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
if(visible_QMARK_){
var map__62755 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__62755__$1 = (((((!((map__62755 == null))))?(((((map__62755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62755):map__62755);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62755__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var field_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62755__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138));
var map__62756 = attr;
var map__62756__$1 = (((((!((map__62756 == null))))?(((((map__62756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62756):map__62756);
var attr_field_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var field_options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_options,qualified_key);
var target_id_key = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__62760){
var map__62761 = p__62760;
var map__62761__$1 = (((((!((map__62761 == null))))?(((((map__62761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62761):map__62761);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62761__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62761__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,qualified_key)){
return target;
} else {
return null;
}
}),attributes));
var map__62757 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_field_options,field_options__$1], 0));
var map__62757__$1 = (((((!((map__62757 == null))))?(((((map__62757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62757):map__62757);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62757__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62757__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62757__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var cache_key__$1 = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.react_type(form_instance),(com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance))], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return query_key;
}
})();
var cache_key__$2 = (function (){var or__4126__auto__ = cache_key__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = query_key;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ref field MUST have either a ::picker-options/cache-key or ::picker-options/query-key in attribute ",qualified_key], null);
}),null)),null,-1454690959,null);
}
}
})();
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$2,new cljs.core.Keyword(null,"options","options",99638489)], null));
var current_selection = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (entity){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,target_id_key);
if(cljs.core.truth_(temp__5735__auto__)){
var id = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,id], null);
} else {
return null;
}
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key));
var field_label = com.fulcrologic.rad.form.field_label(env,attr);
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attr));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr);
var validation_message = (cljs.core.truth_(invalid_QMARK_)?(com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attr)):null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label," ",(cljs.core.truth_(invalid_QMARK_)?validation_message:null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui middle aligned celled list big"}),com.fulcrologic.fulcro.components.force_children(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"dropdown","dropdown",1343185805)))?(function (){var G__62764 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),current_selection,new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
})], null);
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__62764) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__62764));
})():cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62765){
var map__62766 = p__62765;
var map__62766__$1 = (((((!((map__62766 == null))))?(((((map__62766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62766):map__62766);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62766__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62766__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked_QMARK_ = cljs.core.contains_QMARK_(current_selection,value);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "content"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui toggle checkbox"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
if((!(checked_QMARK_))){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_selection,value)));
} else {
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,cljs.core.vec(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(current_selection,value)));
}
})], null)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null),null))]))])], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),options)))])], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62776,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","ToManyPicker","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/ToManyPicker",-440881877),options__50078__auto___62776);
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ui_to_many_picker = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var ui_to_many_picker_62779 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__62768){
var map__62769 = p__62768;
var map__62769__$1 = (((((!((map__62769 == null))))?(((((map__62769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62769):map__62769);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62769__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
})], null));
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.to_many_picker = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$to_many_picker(env,attribute){
var G__62771 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attr","attr",-604132353),attribute], null);
return (ui_to_many_picker_62779.cljs$core$IFn$_invoke$arity$1 ? ui_to_many_picker_62779.cljs$core$IFn$_invoke$arity$1(G__62771) : ui_to_many_picker_62779.call(null,G__62771));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.entity_picker.js.map
