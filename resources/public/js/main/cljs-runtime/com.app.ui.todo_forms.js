goog.provide('com.app.ui.todo_forms');

var options__50078__auto___63484 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$todo_forms$query_STAR_(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("priority","id","priority/id",-539545424),new cljs.core.Keyword("priority","label","priority/label",569731032)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$todo_forms$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("priority","id","priority/id",-539545424),new cljs.core.Keyword("priority","id","priority/id",-539545424).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$todo_forms$render_PriorityQuery(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.todo_forms !== 'undefined') && (typeof com.app.ui.todo_forms.PriorityQuery !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.todo_forms.PriorityQuery = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63484,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.todo_forms.PriorityQuery,new cljs.core.Keyword("com.app.ui.todo-forms","PriorityQuery","com.app.ui.todo-forms/PriorityQuery",501466131),options__50078__auto___63484);

var options__60785__auto___63485 = (function (){var get_class__60778__auto__ = (function (){
return com.app.ui.todo_forms.TodoForm;
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.convert_options(get_class__60778__auto__,"com.app.ui.todo-forms.TodoForm",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),com.app.model.todo.id,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.todo.description,com.app.model.todo.priority,com.app.model.todo.date], null),new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","date","todo/date",-1460704420),com.fulcrologic.rad.type_support.date_time.now()], null),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703),"todo",new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068),"Todo Form",new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","priority","todo/priority",1442519673),new cljs.core.Keyword(null,"pick-one","pick-one",-101885082)], null)),new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","priority","todo/priority",1442519673),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883),new cljs.core.Keyword("priority","all-priorities","priority/all-priorities",-1020260691),new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-component","com.fulcrologic.rad.picker-options/query-component",1786201876),com.app.ui.todo_forms.PriorityQuery,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-xform","com.fulcrologic.rad.picker-options/options-xform",-823181747),(function (_,options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__63469){
var map__63470 = p__63469;
var map__63470__$1 = (((((!((map__63470 == null))))?(((((map__63470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63470):map__63470);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63470__$1,new cljs.core.Keyword("priority","id","priority/id",-539545424));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63470__$1,new cljs.core.Keyword("priority","label","priority/label",569731032));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("priority","id","priority/id",-539545424),id], null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("priority","label","priority/label",569731032),options));
})], null)], null),new cljs.core.Keyword("com.fulcrologic.rad.form","cancel-route","com.fulcrologic.rad.form/cancel-route",-1144534404),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todos"], null)], null)),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$todo_forms$render_TodoForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui.todo-forms","TodoForm","com.app.ui.todo-forms/TodoForm",942586221)], 0));
})();
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.todo_forms !== 'undefined') && (typeof com.app.ui.todo_forms.TodoForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.todo_forms.TodoForm = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options__60785__auto___63485));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.todo_forms.TodoForm,new cljs.core.Keyword("com.app.ui.todo-forms","TodoForm","com.app.ui.todo-forms/TodoForm",942586221),options__60785__auto___63485);

var options__50078__auto___63486 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$todo_forms$query_STAR_(this__61720__auto__){
var forms__61715__auto__ = com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.todo.description,com.app.ui.todo_forms.TodoForm]));
var id_attrs__61716__auto__ = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__61714__61717__auto__){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__61714__61717__auto__,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__61714__61717__auto__,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
}),cljs.core.vals(forms__61715__auto__));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr__61718__auto__){
var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699).cljs$core$IFn$_invoke$arity$1(attr__61718__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr__61718__auto__);
}
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs__61716__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.todo.description,com.app.model.todo.date,com.app.model.priority.label,com.app.model.todo.status], null))),com.app.model.todo.id))));
}),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63473){
var map__63474 = p__63473;
var map__63474__$1 = (((((!((map__63474 == null))))?(((((map__63474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63474):map__63474);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63474__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return com.fulcrologic.rad.form.delete_BANG_(report_instance,new cljs.core.Keyword("todo","id","todo/id",-1375661554),id);
})], null)], null),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.todo.description,com.app.model.todo.date,com.app.model.priority.label,com.app.model.todo.status], null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$todo_forms$ident_STAR_(this__61720__auto__,props63472){
var k__61719__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(com.app.model.todo.id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__61719__auto__,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props63472,k__61719__auto__)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.todo.description,com.app.ui.todo_forms.TodoForm])),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$todo_forms$render_TodoList_Row(this__61720__auto__){
return com.fulcrologic.fulcro.components.wrapped_render(this__61720__auto__,(function (){
var props63472 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this__61720__auto__) : com.fulcrologic.fulcro.components.props.call(null,this__61720__auto__));
var computed__61721__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this__61720__auto__) : com.fulcrologic.fulcro.components.get_computed.call(null,this__61720__auto__));
return com.fulcrologic.rad.report.render_row(new cljs.core.Keyword(null,"report-instance","report-instance",1193962736).cljs$core$IFn$_invoke$arity$1(computed__61721__auto__),com.app.ui.todo_forms.TodoList_Row,props63472);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.todo_forms !== 'undefined') && (typeof com.app.ui.todo_forms.TodoList_Row !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.todo_forms.TodoList_Row = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63486,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.todo_forms.TodoList_Row,new cljs.core.Keyword("com.app.ui.todo-forms","TodoList-Row","com.app.ui.todo-forms/TodoList-Row",-142293454),options__50078__auto___63486);


var options__50078__auto___63497 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438),new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180),new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951),new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859),new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373)],["todos",true,com.app.model.todo.id,com.fulcrologic.rad.report.default_compare_rows,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63476){
var map__63477 = p__63476;
var map__63477__$1 = (((((!((map__63477 == null))))?(((((map__63477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63477):map__63477);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63477__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return com.fulcrologic.rad.form.delete_BANG_(report_instance,new cljs.core.Keyword("todo","id","todo/id",-1375661554),id);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todos"], null),com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.todo.description,com.app.ui.todo_forms.TodoForm])),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo","status","todo/status",-2085495639),(function (this$,status,p__63479){
var map__63480 = p__63479;
var map__63480__$1 = (((((!((map__63480 == null))))?(((((map__63480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63480):map__63480);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63480__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),status,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63482 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.not(status)], null);
return (com.app.model.todo.update_todo_status.cljs$core$IFn$_invoke$arity$1 ? com.app.model.todo.update_todo_status.cljs$core$IFn$_invoke$arity$1(G__63482) : com.app.model.todo.update_todo_status.call(null,G__63482));
})()], null));
})], null)], null),null);
})], null)),(function com$app$ui$todo_forms$render_TodoList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.report.render_layout(this$);
}));
}),new cljs.core.Keyword("todo","all-todos","todo/all-todos",1376395281),"Todo list",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.todo.description,com.app.model.todo.date,com.app.model.priority.label,com.app.model.todo.status], null),(function com$app$ui$todo_forms$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),(function (){var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("com.app.ui.todo-forms","TodoList","com.app.ui.todo-forms/TodoList",-253326146);
}
})()], null);
}),(function (app__61710__auto__,route_params__61711__auto__){
return com.fulcrologic.rad.report.report_will_enter(app__61710__auto__,route_params__61711__auto__,com.app.ui.todo_forms.TodoList);
}),(function com$app$ui$todo_forms$build_raw_initial_state_STAR_(params){
var G__63483 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__61712__61713__auto__){
return cljs.core.select_keys(p1__61712__61713__auto__,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(null))),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63483,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__63483;
}
}),(function com$app$ui$todo_forms$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.app.ui.todo-forms","TodoList","com.app.ui.todo-forms/TodoList",-253326146)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.todo_forms.TodoList_Row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),com.app.ui.todo_forms.TodoList_Row]);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.todo_forms !== 'undefined') && (typeof com.app.ui.todo_forms.TodoList !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.todo_forms.TodoList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63497,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.todo_forms.TodoList,new cljs.core.Keyword("com.app.ui.todo-forms","TodoList","com.app.ui.todo-forms/TodoList",-253326146),options__50078__auto___63497);

//# sourceMappingURL=com.app.ui.todo_forms.js.map
