goog.provide('com.app.model.priority');

var options__50078__auto___63453 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$model$priority$query_STAR_(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("priority","id","priority/id",-539545424),new cljs.core.Keyword("priority","label","priority/label",569731032)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$model$priority$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("priority","id","priority/id",-539545424),new cljs.core.Keyword("priority","id","priority/id",-539545424).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$model$priority$render_Priority(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.model !== 'undefined') && (typeof com.app.model.priority !== 'undefined') && (typeof com.app.model.priority.Priority !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.model.priority.Priority = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63453,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.model.priority.Priority,new cljs.core.Keyword("com.app.model.priority","Priority","com.app.model.priority/Priority",177575309),options__50078__auto___63453);
com.app.model.priority.id = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("priority","id","priority/id",-539545424),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identity_QMARK_,true,com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.priority","id","com.app.model.priority/id",1514933905)], null)));
com.app.model.priority.label = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("priority","label","priority/label",569731032),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.required_QMARK_,true,com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("priority","id","priority/id",-539545424),null], null), null),com.fulcrologic.rad.report_options.column_heading,"Priority",com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.priority","label","com.app.model.priority/label",-46300681)], null)));
com.app.model.priority.all_priorities = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("priority","all-priorities","priority/all-priorities",-1020260691),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("priority","id","priority/id",-539545424),com.fulcrologic.rad.attributes_options.pc_output,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("priority","all-priorities","priority/all-priorities",-1020260691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("priority","id","priority/id",-539545424)], null)], null)], null),com.fulcrologic.rad.attributes_options.pc_resolve,(function (p__63445,_){
var map__63446 = p__63445;
var map__63446__$1 = (((((!((map__63446 == null))))?(((((map__63446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63446):map__63446);
var env = map__63446__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63446__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return null;
})]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.priority","all-priorities","com.app.model.priority/all-priorities",-290656306)], null)));
com.app.model.priority.attributes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.priority.id,com.app.model.priority.label,com.app.model.priority.all_priorities], null);

//# sourceMappingURL=com.app.model.priority.js.map
