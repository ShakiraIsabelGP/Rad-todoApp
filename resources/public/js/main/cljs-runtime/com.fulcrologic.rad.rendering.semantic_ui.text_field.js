goog.provide('com.fulcrologic.rad.rendering.semantic_ui.text_field');
com.fulcrologic.rad.rendering.semantic_ui.text_field.with_handlers = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$with_handlers(type,p__62855){
var map__62856 = p__62855;
var map__62856__$1 = (((((!((map__62856 == null))))?(((((map__62856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62856):map__62856);
var props = map__62856__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
if(cljs.core.truth_(onBlur)){
var G__62860 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__62860) : onBlur.call(null,G__62860));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__62861 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__62861) : onChange.call(null,G__62861));
} else {
return null;
}
})], 0));
});
com.fulcrologic.rad.rendering.semantic_ui.text_field.text_input = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$text_input(props){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.text_field.with_handlers("text",props)], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.text_field.password_input = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$password_input(p__62862){
var map__62863 = p__62862;
var map__62863__$1 = (((((!((map__62863 == null))))?(((((map__62863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62863):map__62863);
var props = map__62863__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.text_field.with_handlers("password",props)], null),null);
});

var options__50078__auto___62903 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),true], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$text_field$render_ViewablePasswordField(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62872 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62872__$1 = (((((!((map__62872 == null))))?(((((map__62872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62872):map__62872);
var props = map__62872__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62872__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62872__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62872__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
var hidden_QMARK_ = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(hidden_QMARK_)?"*******":(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),true], null));

if(cljs.core.truth_(onBlur)){
var G__62874 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__62874) : onBlur.call(null,G__62874));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),(function (_){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),false], null));
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__62878 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__62878) : onChange.call(null,G__62878));
} else {
return null;
}
})], 0))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.text_field !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62903,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.text-field","ViewablePasswordField","com.fulcrologic.rad.rendering.semantic-ui.text-field/ViewablePasswordField",-1309489061),options__50078__auto___62903);
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_field = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.text_field.text_input);
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_password = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.text_field.password_input);
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_viewable_password = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField));
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_dropdown = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$render_dropdown(p__62879,attribute){
var map__62880 = p__62879;
var map__62880__$1 = (((((!((map__62880 == null))))?(((((map__62880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62880):map__62880);
var env = map__62880__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62880__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__62882 = attribute;
var map__62882__$1 = (((((!((map__62882 == null))))?(((((map__62882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62882):map__62882);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62882__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62882__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
var values = com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("sorted-set","valid-values","sorted-set/valid-values",-624673158));
var input_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),v,new cljs.core.Keyword(null,"value","value",305978217),v], null);
}),values);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var and__4115__auto__ = attribute;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k);
} else {
return and__4115__auto__;
}
})();
var invalid_QMARK_ = (!(cljs.core.contains_QMARK_(values,value)));
var validation_message = ((invalid_QMARK_)?(com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attribute)):null);
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label,((invalid_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(validation_message),")"].join(''):null)], null),null),(function (){var G__62893 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"clearable","clearable",943040201),cljs.core.not(required_QMARK_),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,k,v);
})], null),input_props], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__62893) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__62893));
})()], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
});
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_multi_line = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1((function (p__62894){
var map__62895 = p__62894;
var map__62895__$1 = (((((!((map__62895 == null))))?(((((map__62895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62895):map__62895);
var props = map__62895__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
if(cljs.core.truth_(onBlur)){
var G__62901 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__62901) : onBlur.call(null,G__62901));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__62902 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__62902) : onChange.call(null,G__62902));
} else {
return null;
}
})], 0))], null),null);
}));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.text_field.js.map
