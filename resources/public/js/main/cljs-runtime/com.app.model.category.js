goog.provide('com.app.model.category');

var options__50078__auto___63938 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$model$category$query_STAR_(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.Keyword("category","label","category/label",1768891694)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$model$category$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.Keyword("category","id","category/id",-1505923754).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$model$category$render_Category(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.model !== 'undefined') && (typeof com.app.model.category !== 'undefined') && (typeof com.app.model.category.Category !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.model.category.Category = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63938,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.model.category.Category,new cljs.core.Keyword("com.app.model.category","Category","com.app.model.category/Category",-1181732477),options__50078__auto___63938);
com.app.model.category.id = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identity_QMARK_,true,com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.category","id","com.app.model.category/id",-490058953)], null)));
com.app.model.category.label = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("category","label","category/label",1768891694),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.required_QMARK_,true,com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","id","category/id",-1505923754),null], null), null),com.fulcrologic.rad.report_options.column_heading,"Priority",com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.category","label","com.app.model.category/label",519061325)], null)));
com.app.model.category.all_categories = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("category","all-categories","category/all-categories",1020064414),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("category","id","category/id",-1505923754),com.fulcrologic.rad.attributes_options.pc_output,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","all-categories","category/all-categories",1020064414),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","id","category/id",-1505923754)], null)], null)], null),com.fulcrologic.rad.attributes_options.pc_resolve,(function (p__63935,_){
var map__63936 = p__63935;
var map__63936__$1 = (((((!((map__63936 == null))))?(((((map__63936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63936):map__63936);
var env = map__63936__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63936__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return null;
})]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.category","all-categories","com.app.model.category/all-categories",1884917823)], null)));
com.app.model.category.attributes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.category.id,com.app.model.category.label,com.app.model.category.all_categories], null);

//# sourceMappingURL=com.app.model.category.js.map
