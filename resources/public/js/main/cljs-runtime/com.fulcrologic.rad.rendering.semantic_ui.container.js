goog.provide('com.fulcrologic.rad.rendering.semantic_ui.container');

var options__56259__auto___88972 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$container$render_StandardContainerControls(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__88956 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__88956__$1 = (((((!((map__88956 == null))))?(((((map__88956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88956):map__88956);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88956__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var map__88958 = com.fulcrologic.rad.control.standard_control_layout(instance);
var map__88958__$1 = (((((!((map__88958 == null))))?(((((map__88958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88958):map__88958);
var input_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88958__$1,new cljs.core.Keyword(null,"input-layout","input-layout",182479828));
var action_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88958__$1,new cljs.core.Keyword(null,"action-layout","action-layout",137416830));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = (function (){var G__88961 = instance;
var G__88961__$1 = (((G__88961 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__88961) : com.fulcrologic.fulcro.components.component_options.call(null,G__88961)));
var G__88961__$2 = (((G__88961__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.container","title","com.fulcrologic.rad.container/title",2046880503).cljs$core$IFn$_invoke$arity$1(G__88961__$1));
if((G__88961__$2 == null)){
return null;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88961__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(instance,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,k));
}),action_layout)], null),new cljs.core.Keyword(null,".ui.right.floated.buttons",".ui.right.floated.buttons",-2143098758))], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var G__88962 = cljs.core.count(row);
return (com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1(G__88962) : com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.call(null,G__88962));
})()], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88955_SHARP_){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,p1__88955_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(instance,p1__88955_SHARP_,c);
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__88955_SHARP_)], null),""], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
}
}),row)], null),null);
}),input_layout)], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099))], null),new cljs.core.Keyword(null,".ui.top.attached.compact.basic.segment",".ui.top.attached.compact.basic.segment",668684741));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.container !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.container.StandardContainerControls !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.container.StandardContainerControls = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___88972,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.container.StandardContainerControls,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.container","StandardContainerControls","com.fulcrologic.rad.rendering.semantic-ui.container/StandardContainerControls",-1393763881),options__56259__auto___88972);
var ui_standard_container_controls_88973 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.container.StandardContainerControls);
com.fulcrologic.rad.rendering.semantic_ui.container.render_standard_controls = (function com$fulcrologic$rad$rendering$semantic_ui$container$render_standard_controls(instance){
var G__88963 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance], null);
return (ui_standard_container_controls_88973.cljs$core$IFn$_invoke$arity$1 ? ui_standard_container_controls_88973.cljs$core$IFn$_invoke$arity$1(G__88963) : ui_standard_container_controls_88973.call(null,G__88963));
});
com.fulcrologic.rad.rendering.semantic_ui.container.n_string = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(16),(10),(8)],["zero","seven","one","four","fifteen","thirteen","six","three","twelve","two","eleven","nine","five","fourteen","sixteen","ten","eight"]);
com.fulcrologic.rad.rendering.semantic_ui.container.render_container_layout = (function com$fulcrologic$rad$rendering$semantic_ui$container$render_container_layout(container_instance){
var map__88964 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(container_instance) : com.fulcrologic.fulcro.components.component_options.call(null,container_instance));
var map__88964__$1 = (((((!((map__88964 == null))))?(((((map__88964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88964):map__88964);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88964__$1,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88964__$1,new cljs.core.Keyword("com.fulcrologic.rad.container","layout","com.fulcrologic.rad.container/layout",-958093441));
var container_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(container_instance) : com.fulcrologic.fulcro.components.props.call(null,container_instance));
var render_cls = (function (id,cls){
var factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(cls);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(container_props,id,cljs.core.PersistentArrayMap.EMPTY);
var G__88966 = props;
var G__88967 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.container","controlled?","com.fulcrologic.rad.container/controlled?",-878634967),true], null);
return (factory.cljs$core$IFn$_invoke$arity$2 ? factory.cljs$core$IFn$_invoke$arity$2(G__88966,G__88967) : factory.call(null,G__88966,G__88967));
});
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.container.render_standard_controls(container_instance),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(layout)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function com$fulcrologic$rad$rendering$semantic_ui$container$render_container_layout_$__STAR_render_row(idx,row){
var cols = cljs.core.count(row);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function com$fulcrologic$rad$rendering$semantic_ui$container$render_container_layout_$__STAR_render_row_$__STAR_render_col(entry){
var id = (((entry instanceof cljs.core.Keyword))?entry:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry));
var width = (function (){var or__4126__auto__ = ((cljs.core.map_QMARK_(entry))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(entry):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (((16) / cols) | (0));
}
})();
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,id);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.rad.rendering.semantic_ui.container.n_string.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.container.n_string.cljs$core$IFn$_invoke$arity$1(width) : com.fulcrologic.rad.rendering.semantic_ui.container.n_string.call(null,width)))," wide"].join(''):null),"column"], null)], null),render_cls(id,cls)], null),null);
}),row)], null),new cljs.core.Keyword(null,".row",".row",-368374508));
}),layout)], null),new cljs.core.Keyword(null,".ui.container.centered.grid",".ui.container.centered.grid",243756614)):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__88968){
var vec__88969 = p__88968;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88969,(0),null);
var cls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88969,(1),null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),render_cls(id,cls)], null),null);
}),com.fulcrologic.rad.container.id_child_pairs(children)))], null),new cljs.core.Keyword(null,".ui.basic.segment",".ui.basic.segment",1584502196))], null),new cljs.core.Keyword(null,".ui.basic.segments",".ui.basic.segments",-2114250545));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.container.js.map
