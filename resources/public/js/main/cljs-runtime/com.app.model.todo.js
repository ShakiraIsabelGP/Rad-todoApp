goog.provide('com.app.model.todo');
com.app.model.todo.id = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identity_QMARK_,true,com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.todo","id","com.app.model.todo/id",-473307025)], null)));
com.app.model.todo.description = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("todo","description","todo/description",-1431540266),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.todo","description","com.app.model.todo/description",-1872316555)], null)));
com.app.model.todo.priority = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("todo","priority","todo/priority",1442519673),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("priority","id","priority/id",-539545424),com.fulcrologic.rad.attributes_options.cardinality,new cljs.core.Keyword(null,"one","one",935007904),com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.todo","priority","com.app.model.todo/priority",1741688864)], null)));
com.app.model.todo.date = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("todo","date","todo/date",-1460704420),new cljs.core.Keyword(null,"instant","instant",655498374),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885),new cljs.core.Keyword(null,"date-at-noon","date-at-noon",-1039585839),new cljs.core.Keyword("com.fulcrologic.rad.type-support.date-time","default-time-zone","com.fulcrologic.rad.type-support.date-time/default-time-zone",450454740),"America/Bogota",com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.todo","date","com.app.model.todo/date",-564906821)], null)));
com.app.model.todo.status = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("todo","status","todo/status",-2085495639),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),null], null), null),com.fulcrologic.rad.report_options.column_heading,"Completed?",com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.todo","status","com.app.model.todo/status",1375415818)], null)));
com.app.model.todo.all_todos = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("todo","all-todos","todo/all-todos",1376395281),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","all-todos","todo/all-todos",1376395281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (p__63440,_){
var map__63441 = p__63440;
var map__63441__$1 = (((((!((map__63441 == null))))?(((((map__63441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63441):map__63441);
var env = map__63441__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63441__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return null;
})]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.todo","all-todos","com.app.model.todo/all-todos",-1757059150)], null)));
/**
 * 
 */
com.app.model.todo.update_todo_status = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.model.todo","update-todo-status","com.app.model.todo/update-todo-status",1627772268,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.model.todo","update-todo-status","com.app.model.todo/update-todo-status",1627772268,null),(function (fulcro_mutation_env_symbol){
var map__63443 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__63443__$1 = (((((!((map__63443 == null))))?(((((map__63443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63443):map__63443);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63443__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$app$model$todo$remote(_){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$app$model$todo$action(p__63448){
var map__63449 = p__63448;
var map__63449__$1 = (((((!((map__63449 == null))))?(((((map__63449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63449):map__63449);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__63451_63456 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63452_63457 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63452_63457);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),status);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63451_63456);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__63454 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63455 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63455);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63454);
}})], null);
}));
com.app.model.todo.attributes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.todo.id,com.app.model.todo.description,com.app.model.todo.date,com.app.model.todo.priority,com.app.model.todo.status,com.app.model.todo.all_todos], null);

//# sourceMappingURL=com.app.model.todo.js.map
