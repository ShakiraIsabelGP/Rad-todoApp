goog.provide('com.app.ui');

var options__50078__auto___63495 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297),new cljs.core.Keyword(null,"router-targets","router-targets",1582229763),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.ui.todo_forms.TodoList,cljs.core.PersistentArrayMap.EMPTY], null),true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.ui.todo_forms.TodoList,com.app.ui.todo_forms.TodoForm], null),(function com$app$ui$render_MainRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__63487 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__63487__$1 = (((((!((map__63487 == null))))?(((((map__63487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63487):map__63487);
var props = map__63487__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
var current_state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134));
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134),new cljs.core.Keyword(null,"fake","fake",-904846741),cljs.core.PersistentArrayMap.EMPTY);
var pending_path_segment = ((com.fulcrologic.fulcro.ui_state_machines.asm_active_QMARK_(this$,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)))?com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268)):null);
var class$ = com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class(this$);
if(cljs.core.truth_(cljs.core.constantly(true)(current_state))){
if(cljs.core.truth_(class$)){
var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$);
var G__63489 = com.fulcrologic.fulcro.raw.components.computed(current_route,com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__63489) : factory.call(null,G__63489));
} else {
return null;
}
} else {
var this$__$1 = this$;
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),current_state,new cljs.core.Keyword(null,"route-factory","route-factory",-1848194547),(cljs.core.truth_(class$)?com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$):null),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),pending_path_segment,new cljs.core.Keyword(null,"route-props","route-props",-836332554),current_route], null);
return null;
}
}));
}),false,(function com$app$ui$ident_STAR_(this$,p__63490){
var map__63491 = p__63490;
var map__63491__$1 = (((((!((map__63491 == null))))?(((((map__63491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63491):map__63491);
var props = map__63491__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63491__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63491__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)], null);
}),(function (this__56443__auto__){
return com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets(this__56443__auto__);
}),(function com$app$ui$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.todo_forms.TodoList,params),new cljs.core.Keyword(null,"alt0","alt0",486699186),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.todo_forms.TodoForm,cljs.core.PersistentArrayMap.EMPTY)], null);
}),(function com$app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),(function (){var or__4126__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.todo_forms.TodoList);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.todo_forms.TodoList))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt0","alt0",486699186),(function (){var or__4126__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.todo_forms.TodoForm);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.todo_forms.TodoForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null)], null);
})]);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.MainRouter !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.MainRouter = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63495,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.MainRouter,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134),options__50078__auto___63495);
com.app.ui.ui_main_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.app.ui.MainRouter);

var options__50078__auto___63496 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.MainRouter)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.app.ui.MainRouter], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__63493 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__63493__$1 = (((((!((map__63493 == null))))?(((((map__63493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63493):map__63493);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63493__$1,new cljs.core.Keyword(null,"router","router",1091916230));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "2em"}), "className": "ui container segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Todo"], null),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_menu.ui_dropdown_menu(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.routing.route_to_BANG_(this$,com.app.ui.todo_forms.TodoList,cljs.core.PersistentArrayMap.EMPTY);
})], null),"View all"),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.todo_forms.TodoForm);
})], null),"New")))], 0))),com.fulcrologic.fulcro.components.force_children((com.app.ui.ui_main_router.cljs$core$IFn$_invoke$arity$1 ? com.app.ui.ui_main_router.cljs$core$IFn$_invoke$arity$1(router) : com.app.ui.ui_main_router.call(null,router)))]);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___63496,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.Root,new cljs.core.Keyword("com.app.ui","Root","com.app.ui/Root",1518740012),options__50078__auto___63496);
com.app.ui.ui_root = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.app.ui.Root);

//# sourceMappingURL=com.app.ui.js.map
