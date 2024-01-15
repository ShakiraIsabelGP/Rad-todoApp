goog.provide('com.fulcrologic.rad.rendering.semantic_ui.report');
com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons = (function com$fulcrologic$rad$rendering$semantic_ui$report$row_action_buttons(report_instance,row_props){
var map__89041 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89041__$1 = (((((!((map__89041 == null))))?(((((map__89041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89041):map__89041);
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89041__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var map__89042 = com.fulcrologic.rad.semantic_ui_options.get_rendering_options(report_instance);
var map__89042__$1 = (((((!((map__89042 == null))))?(((((map__89042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89042):map__89042);
var report_row_button_grouping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-row-button-grouping","com.fulcrologic.rad.semantic-ui-options/report-row-button-grouping",1934348213));
var report_row_button_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-row-button-renderer","com.fulcrologic.rad.semantic-ui-options/report-row-button-renderer",990785639));
if(cljs.core.seq(row_actions)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(report_row_button_grouping,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui buttons";
}
})()], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__89045){
var map__89046 = p__89045;
var map__89046__$1 = (((((!((map__89046 == null))))?(((((map__89046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89046):map__89046);
var control = map__89046__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89046__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89046__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89046__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89046__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89046__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,row_props], 0));
var disabled_QMARK___$1 = cljs.core.boolean$(com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,row_props], 0)));
var onClick = (function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(report_instance,row_props) : action.call(null,report_instance,row_props));

if(cljs.core.truth_(reload_QMARK_)){
return (com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.rad.control.run_BANG_.call(null,report_instance));
} else {
return null;
}
} else {
return null;
}
});
if(cljs.core.truth_((function (){var or__4126__auto__ = (visible_QMARK_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,row_props], 0));
}
})())){
if(cljs.core.truth_(report_row_button_renderer)){
var G__89048 = report_instance;
var G__89049 = row_props;
var G__89050 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),label__$1,new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1], null)], 0));
return (report_row_button_renderer.cljs$core$IFn$_invoke$arity$3 ? report_row_button_renderer.cljs$core$IFn$_invoke$arity$3(G__89048,G__89049,G__89050) : report_row_button_renderer.call(null,G__89048,G__89049,G__89050));
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null),label__$1], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607));
}
} else {
return null;
}
}),row_actions)], null),null);
} else {
return null;
}
});

var options__56259__auto___89142 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_TableRowLayout(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__89051 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__89051__$1 = (((((!((map__89051 == null))))?(((((map__89051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89051):map__89051);
var rp = map__89051__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89051__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89051__$1,new cljs.core.Keyword(null,"props","props",453281727));
var map__89053 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89053__$1 = (((((!((map__89053 == null))))?(((((map__89053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89053):map__89053);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89053__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89053__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","link","com.fulcrologic.rad.report/link",1807717127));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89053__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","links","com.fulcrologic.rad.report/links",-1514511185));
var links__$1 = (function (){var or__4126__auto__ = links;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return link;
}
})();
var action_buttons = com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,props);
var map__89054 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
var map__89054__$1 = (((((!((map__89054 == null))))?(((((map__89054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89054):map__89054);
var highlighted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89054__$1,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89054__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954));
var sui_cell_class = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_cell_class], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(highlighted_QMARK_)?"active":null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

if(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.selectable_table_rows_QMARK_], 0)) === false){
return null;
} else {
return com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,idx);
}
})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx__$1,p__89057){
var map__89058 = p__89057;
var map__89058__$1 = (((((!((map__89058 == null))))?(((((map__89058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89058):map__89058);
var column = map__89058__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89058__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var column_classes = com.fulcrologic.rad.report.column_classes(report_instance,column);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)].join(''),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_cell_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx__$1], 0)),column_classes], null)], null),(function (){var map__89060 = com.fulcrologic.rad.report.form_link(report_instance,props,qualified_key);
var map__89060__$1 = (((((!((map__89060 == null))))?(((((map__89060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89060):map__89060);
var edit_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89060__$1,new cljs.core.Keyword(null,"edit-form","edit-form",1081227988));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89060__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(links__$1,qualified_key);
var label = com.fulcrologic.rad.report.formatted_column_value(report_instance,props,column);
if(cljs.core.truth_(edit_form)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(report_instance,edit_form,entity_id);
})], null),label], null),null);
} else {
if(cljs.core.fn_QMARK_(link_fn)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(report_instance,props) : link_fn.call(null,report_instance,props));
})], null),label], null),null);
} else {
return label;

}
}
})()], null),null);
}),columns),(cljs.core.truth_(action_buttons)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"actions",new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_cell_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,cljs.core.count(columns)], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "collapsing";
}
})()], null),action_buttons], null),null):null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89142,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","TableRowLayout","com.fulcrologic.rad.rendering.semantic-ui.report/TableRowLayout",-351309716),options__56259__auto___89142);
var ui_table_row_layout_89143 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout);
com.fulcrologic.rad.rendering.semantic_ui.report.render_table_row = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_table_row(report_instance,row_class,row_props){
var G__89062 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),row_class,new cljs.core.Keyword(null,"props","props",453281727),row_props], null);
return (ui_table_row_layout_89143.cljs$core$IFn$_invoke$arity$1 ? ui_table_row_layout_89143.cljs$core$IFn$_invoke$arity$1(G__89062) : ui_table_row_layout_89143.call(null,G__89062));
});

var options__56259__auto___89144 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_ListRowLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89063 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__89063__$1 = (((((!((map__89063 == null))))?(((((map__89063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89063):map__89063);
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89063__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89063__$1,new cljs.core.Keyword(null,"props","props",453281727));
var map__89065 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89065__$1 = (((((!((map__89065 == null))))?(((((map__89065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89065):map__89065);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89065__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var header_column = cljs.core.first(columns);
var description_column = cljs.core.second(columns);
var map__89067 = (function (){var G__89068 = header_column;
var G__89068__$1 = (((G__89068 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(G__89068));
if((G__89068__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.report.form_link(report_instance,props,G__89068__$1);
}
})();
var map__89067__$1 = (((((!((map__89067 == null))))?(((((map__89067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89067):map__89067);
var edit_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89067__$1,new cljs.core.Keyword(null,"edit-form","edit-form",1081227988));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89067__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var header_label = (function (){var G__89070 = header_column;
if((G__89070 == null)){
return null;
} else {
return com.fulcrologic.rad.report.formatted_column_value(report_instance,props,G__89070);
}
})();
var description_label = (function (){var G__89071 = description_column;
if((G__89071 == null)){
return null;
} else {
return com.fulcrologic.rad.report.formatted_column_value(report_instance,props,G__89071);
}
})();
var action_buttons = com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,props);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(action_buttons)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_buttons], null),new cljs.core.Keyword(null,".right.floated.content",".right.floated.content",1490801359)):null),(cljs.core.truth_(header_label)?(cljs.core.truth_(edit_form)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(report_instance,edit_form,entity_id);
})], null),header_label], null),new cljs.core.Keyword(null,".header",".header",-1761691025)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_label], null),new cljs.core.Keyword(null,".header",".header",-1761691025))):null),(cljs.core.truth_(description_label)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [description_label], null),new cljs.core.Keyword(null,".description",".description",-545635281)):null)], null),new cljs.core.Keyword(null,".content",".content",528321340))], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89144,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","ListRowLayout","com.fulcrologic.rad.rendering.semantic-ui.report/ListRowLayout",2065221320),options__56259__auto___89144);
var ui_list_row_layout_89145 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)], null));
com.fulcrologic.rad.rendering.semantic_ui.report.render_list_row = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_list_row(report_instance,row_class,row_props){
var G__89072 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),row_class,new cljs.core.Keyword(null,"props","props",453281727),row_props], null);
return (ui_list_row_layout_89145.cljs$core$IFn$_invoke$arity$1 ? ui_list_row_layout_89145.cljs$core$IFn$_invoke$arity$1(G__89072) : ui_list_row_layout_89145.call(null,G__89072));
});

var options__56259__auto___89146 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_StandardReportControls(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89074 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__89074__$1 = (((((!((map__89074 == null))))?(((((map__89074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89074):map__89074);
var env = map__89074__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89074__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(report_instance);
var map__89076 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89076__$1 = (((((!((map__89076 == null))))?(((((map__89076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89076):map__89076);
var paginate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89076__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","paginate?","com.fulcrologic.rad.report/paginate?",505904825));
var map__89077 = com.fulcrologic.rad.semantic_ui_options.get_rendering_options(report_instance);
var map__89077__$1 = (((((!((map__89077 == null))))?(((((map__89077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89077):map__89077);
var report_action_button_grouping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89077__$1,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-action-button-grouping","com.fulcrologic.rad.semantic-ui-options/report-action-button-grouping",-661341984));
var map__89078 = com.fulcrologic.rad.control.standard_control_layout(report_instance);
var map__89078__$1 = (((((!((map__89078 == null))))?(((((map__89078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89078):map__89078);
var input_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword(null,"input-layout","input-layout",182479828));
var action_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword(null,"action-layout","action-layout",137416830));
var map__89079 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.get_computed.call(null,report_instance));
var map__89079__$1 = (((((!((map__89079 == null))))?(((((map__89079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89079):map__89079);
var controlled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89079__$1,new cljs.core.Keyword("com.fulcrologic.rad.container","controlled?","com.fulcrologic.rad.container/controlled?",-878634967));
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.controls_class], 0)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui top attached compact segment";
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = (function (){var G__89085 = report_instance;
var G__89085__$1 = (((G__89085 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__89085) : com.fulcrologic.fulcro.components.component_options.call(null,G__89085)));
var G__89085__$2 = (((G__89085__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308).cljs$core$IFn$_invoke$arity$1(G__89085__$1));
if((G__89085__$2 == null)){
return null;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89085__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return trc("a table that shows a list of rows","Report");
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(report_action_button_grouping,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui right floated buttons";
}
})()], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,k);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(controlled_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"local?","local?",-1422786101).cljs$core$IFn$_invoke$arity$1(control);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(report_instance,k,control);
} else {
return null;
}
}),action_layout)], null),null)], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var G__89086 = cljs.core.count(row);
return (com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1(G__89086) : com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.call(null,G__89086));
})()], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__89073_SHARP_){
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,p1__89073_SHARP_);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(controlled_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"local?","local?",-1422786101).cljs$core$IFn$_invoke$arity$1(control);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(report_instance,p1__89073_SHARP_,control);
} else {
return null;
}
}),row)], null),null);
}),input_layout)], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099)),(cljs.core.truth_(paginate_QMARK_)?(function (){var page_count = com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$1(report_instance);
if((page_count > (1))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"paddingTop": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.semantic_ui.addons.pagination.ui_pagination.ui_pagination(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"activePage","activePage",1551610359),com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$1(report_instance),new cljs.core.Keyword(null,"onPageChange","onPageChange",-511261654),(function (_,data){
return com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,(com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(data,"activePage") : com.fulcrologic.fulcro.components.isoget.call(null,data,"activePage")));
}),new cljs.core.Keyword(null,"totalPages","totalPages",-354845357),page_count,new cljs.core.Keyword(null,"size","size",1098693007),"tiny"], null)))])], null),new cljs.core.Keyword(null,".column",".column",1389783581))], null),new cljs.core.Keyword(null,".ui.two.column.centered.grid",".ui.two.column.centered.grid",-1599478984));
} else {
return null;
}
})():null)], null),null)], 0));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89146,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","StandardReportControls","com.fulcrologic.rad.rendering.semantic-ui.report/StandardReportControls",1042104029),options__56259__auto___89146);
var ui_standard_report_controls_89147 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls);
com.fulcrologic.rad.rendering.semantic_ui.report.render_standard_controls = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_standard_controls(report_instance){
var G__89087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance], null);
return (ui_standard_report_controls_89147.cljs$core$IFn$_invoke$arity$1 ? ui_standard_report_controls_89147.cljs$core$IFn$_invoke$arity$1(G__89087) : ui_standard_report_controls_89147.call(null,G__89087));
});

var options__56259__auto___89148 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-factory","row-factory",751079809),cljs.core.memoize((function (cls){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
var G__89088 = props;
if((G__89088 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(G__89088,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)) : com.fulcrologic.fulcro.components.get_computed.call(null,G__89088,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)));
}
})], null));
}))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_ListReportLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89089 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__89089__$1 = (((((!((map__89089 == null))))?(((((map__89089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89089):map__89089);
var env = map__89089__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89089__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__89091 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89091__$1 = (((((!((map__89091 == null))))?(((((map__89091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89091):map__89091);
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89091__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var render_report_body_item = (function (){var fexpr__89093 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"row-factory","row-factory",751079809));
return (fexpr__89093.cljs$core$IFn$_invoke$arity$1 ? fexpr__89093.cljs$core$IFn$_invoke$arity$1(BodyItem) : fexpr__89093.call(null,BodyItem));
})();
var render_controls = com.fulcrologic.rad.report.control_renderer(this$);
var extra_parent_query = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)));
var query_inclusion_props = cljs.core.select_keys((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),extra_parent_query);
var rows = com.fulcrologic.rad.report.current_rows(report_instance);
var loading_QMARK_ = com.fulcrologic.rad.report.loading_QMARK_(report_instance);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(render_controls)?(render_controls.cljs$core$IFn$_invoke$arity$1 ? render_controls.cljs$core$IFn$_invoke$arity$1(report_instance) : render_controls.call(null,report_instance)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(loading_QMARK_)?"active":null)], null)], null)], null),new cljs.core.Keyword(null,".ui.loader",".ui.loader",1057732850)),((cljs.core.seq(rows))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var G__89094 = row;
var G__89095 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_inclusion_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),BodyItem,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954),idx], null)], 0));
return (render_report_body_item.cljs$core$IFn$_invoke$arity$2 ? render_report_body_item.cljs$core$IFn$_invoke$arity$2(G__89094,G__89095) : render_report_body_item.call(null,G__89094,G__89095));
}),rows)], null),new cljs.core.Keyword(null,".ui.relaxed.divided.list",".ui.relaxed.divided.list",-986648580)):null)], null),new cljs.core.Keyword(null,".ui.attached.segment",".ui.attached.segment",-1525826681))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89148,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","ListReportLayout","com.fulcrologic.rad.rendering.semantic-ui.report/ListReportLayout",-217732979),options__56259__auto___89148);
var ui_list_report_layout_89149 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)], null));
com.fulcrologic.rad.rendering.semantic_ui.report.render_list_report_layout = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_list_report_layout(report_instance){
var G__89096 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance], null);
return (ui_list_report_layout_89149.cljs$core$IFn$_invoke$arity$1 ? ui_list_report_layout_89149.cljs$core$IFn$_invoke$arity$1(G__89096) : ui_list_report_layout_89149.call(null,G__89096));
});
com.fulcrologic.rad.rendering.semantic_ui.report.render_standard_table = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_standard_table(this$,p__89097){
var map__89098 = p__89097;
var map__89098__$1 = (((((!((map__89098 == null))))?(((((map__89098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89098):map__89098);
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89098__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__89100 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89100__$1 = (((((!((map__89100 == null))))?(((((map__89100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89100):map__89100);
var report_column_headings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var compare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509));
var table_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89100__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","table-class","com.fulcrologic.rad.report/table-class",-801171370));
var render_report_body_item = (function (){var fexpr__89102 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"row-factory","row-factory",751079809));
return (fexpr__89102.cljs$core$IFn$_invoke$arity$1 ? fexpr__89102.cljs$core$IFn$_invoke$arity$1(BodyItem) : fexpr__89102.call(null,BodyItem));
})();
var column_headings = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__89103){
var map__89104 = p__89103;
var map__89104__$1 = (((((!((map__89104 == null))))?(((((map__89104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89104):map__89104);
var attr = map__89104__$1;
var column_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89104__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-heading","com.fulcrologic.rad.report/column-heading",-1327880348));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89104__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),attr,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_headings,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_heading,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var G__89107 = qualified_key;
var G__89107__$1 = (((G__89107 == null))?null:cljs.core.name(G__89107));
if((G__89107__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__89107__$1);
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return "";
}
}
}
})()], null);
}),columns);
var rows = com.fulcrologic.rad.report.current_rows(report_instance);
var extra_parent_query = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)));
var query_inclusion_props = cljs.core.select_keys((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),extra_parent_query);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
var sort_params = new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160).cljs$core$IFn$_invoke$arity$1(props));
var sortable_QMARK_ = (((!(cljs.core.boolean$(compare_rows))))?cljs.core.constantly(false):(function (){var temp__5733__auto__ = (function (){var G__89108 = sort_params;
var G__89108__$1 = (((G__89108 == null))?null:new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414).cljs$core$IFn$_invoke$arity$1(G__89108));
if((G__89108__$1 == null)){
return null;
} else {
return cljs.core.set(G__89108__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var sortable_columns = temp__5733__auto__;
return (function (p__89109){
var map__89110 = p__89109;
var map__89110__$1 = (((((!((map__89110 == null))))?(((((map__89110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89110):map__89110);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89110__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.contains_QMARK_(sortable_columns,qualified_key);
});
} else {
return cljs.core.constantly(true);
}
})());
var ascending_QMARK_ = (function (){var and__4115__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__4115__auto__;
}
})();
var sorting_by = (function (){var and__4115__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__4115__auto__;
}
})();
var has_row_actions_QMARK_ = cljs.core.seq(row_actions);
var sui_header_class = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_header_class], 0));
var sui_table_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = sui_table_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui selectable table";
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_class], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__89112){
var map__89113 = p__89112;
var map__89113__$1 = (((((!((map__89113 == null))))?(((((map__89113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89113):map__89113);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89113__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89113__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_header_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx], 0))], null)], null),(cljs.core.truth_(sortable_QMARK_(column))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,column);
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sorting_by,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(column)))?(cljs.core.truth_(ascending_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle down icon"})]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle up icon"})])):null)], null),null):cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null),null);
}),column_headings),((has_row_actions_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_header_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,cljs.core.count(column_headings)], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "collapsing";
}
})()], null)], null),""], null),null):null)], null),null)], null),null),((cljs.core.seq(rows))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var highlighted_row_idx = com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$1(report_instance);
var G__89115 = row;
var G__89116 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_inclusion_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),BodyItem,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,highlighted_row_idx),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954),idx], null)], 0));
return (render_report_body_item.cljs$core$IFn$_invoke$arity$2 ? render_report_body_item.cljs$core$IFn$_invoke$arity$2(G__89115,G__89116) : render_report_body_item.call(null,G__89115,G__89116));
}),rows)], null),null):null)], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.report.render_rotated_table = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_rotated_table(_,p__89117){
var map__89118 = p__89117;
var map__89118__$1 = (((((!((map__89118 == null))))?(((((map__89118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89118):map__89118);
var env = map__89118__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89118__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__89120 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89120__$1 = (((((!((map__89120 == null))))?(((((map__89120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89120):map__89120);
var report_column_headings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89120__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89120__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89120__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var compare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89120__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509));
var table_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89120__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","table-class","com.fulcrologic.rad.report/table-class",-801171370));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
var sort_params = new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160).cljs$core$IFn$_invoke$arity$1(props));
var sortable_QMARK_ = (((!(cljs.core.boolean$(compare_rows))))?cljs.core.constantly(false):(function (){var temp__5733__auto__ = (function (){var G__89122 = sort_params;
var G__89122__$1 = (((G__89122 == null))?null:new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414).cljs$core$IFn$_invoke$arity$1(G__89122));
if((G__89122__$1 == null)){
return null;
} else {
return cljs.core.set(G__89122__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var sortable_columns = temp__5733__auto__;
return (function (p__89123){
var map__89124 = p__89123;
var map__89124__$1 = (((((!((map__89124 == null))))?(((((map__89124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89124):map__89124);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89124__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.contains_QMARK_(sortable_columns,qualified_key);
});
} else {
return cljs.core.constantly(true);
}
})());
var ascending_QMARK_ = (function (){var and__4115__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__4115__auto__;
}
})();
var sorting_by = (function (){var and__4115__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__4115__auto__;
}
})();
var row_headings = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__89126){
var map__89127 = p__89126;
var map__89127__$1 = (((((!((map__89127 == null))))?(((((map__89127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89127):map__89127);
var attr = map__89127__$1;
var column_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89127__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-heading","com.fulcrologic.rad.report/column-heading",-1327880348));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89127__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var label = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_headings,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_heading,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var G__89130 = qualified_key;
var G__89130__$1 = (((G__89130 == null))?null:cljs.core.name(G__89130));
if((G__89130__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__89130__$1);
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return "";
}
}
}
})();
if(cljs.core.truth_(sortable_QMARK_(attr))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,attr);
})], null),label,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sorting_by,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr)))?(cljs.core.truth_(ascending_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle down icon"})]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle up icon"})])):null)], null),null);
} else {
return label;
}
}),columns);
var rows = com.fulcrologic.rad.report.current_rows(report_instance);
var has_row_actions_QMARK_ = cljs.core.seq(row_actions);
var sui_table_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_rotated_table_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
var sui_cell_class = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_cell_class], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = sui_table_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui compact collapsing definition selectable table";
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_class], null)], null),((cljs.core.seq(rows))?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var col = cljs.core.first(columns);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({"key": "hrow"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_headings,(0))], null),null)),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),com.fulcrologic.rad.report.formatted_column_value(report_instance,row,col)], null),null);
}),rows)),com.fulcrologic.fulcro.components.force_children(((has_row_actions_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"key": "actions"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,col))]):null))]);
})()], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,col){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_headings,(idx + (1)))], null),null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx__$1,row){
var user_defined_cell_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_cell_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx__$1], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx__$1,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4126__auto__ = user_defined_cell_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "right aligned";
}
})()], null),com.fulcrologic.rad.report.formatted_column_value(report_instance,row,col)], null),null);
}),rows),((has_row_actions_QMARK_)?(function (){var user_defined_cell_class = (cljs.core.truth_(sui_cell_class)?(function (){var G__89131 = report_instance;
var G__89132 = cljs.core.count(rows);
return (sui_cell_class.cljs$core$IFn$_invoke$arity$2 ? sui_cell_class.cljs$core$IFn$_invoke$arity$2(G__89131,G__89132) : sui_cell_class.call(null,G__89131,G__89132));
})():null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"actions",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_defined_cell_class], null)], null),com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,col)], null),null);
})():null)], null),null);
}),cljs.core.rest(columns))], null),null)], 0)):null)], null),null);
});

var options__56259__auto___89150 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-factory","row-factory",751079809),cljs.core.memoize((function (cls){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
var G__89133 = props;
if((G__89133 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(G__89133,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)) : com.fulcrologic.fulcro.components.get_computed.call(null,G__89133,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)));
}
})], null));
}))], null);
}),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_TableReportLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__89134 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__89134__$1 = (((((!((map__89134 == null))))?(((((map__89134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89134):map__89134);
var env = map__89134__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89134__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__89136 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__89136__$1 = (((((!((map__89136 == null))))?(((((map__89136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89136):map__89136);
var rotate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89136__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","rotate?","com.fulcrologic.rad.report/rotate?",1830627427));
var rotate_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(rotate_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
var render_controls = com.fulcrologic.rad.report.control_renderer(report_instance);
var loading_QMARK_ = com.fulcrologic.rad.report.loading_QMARK_(report_instance);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
var busy_QMARK_ = new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304).cljs$core$IFn$_invoke$arity$1(props);
var layout_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.layout_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
var body_class = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.body_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "ui attached segment";
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),layout_class], null),(cljs.core.truth_(render_controls)?(render_controls.cljs$core$IFn$_invoke$arity$1 ? render_controls.cljs$core$IFn$_invoke$arity$1(report_instance) : render_controls.call(null,report_instance)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),body_class], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = busy_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return loading_QMARK_;
}
})())?"active":null)], null)], null)], null),new cljs.core.Keyword(null,".ui.orange.loader",".ui.orange.loader",1350245609)),(cljs.core.truth_(rotate_QMARK___$1)?com.fulcrologic.rad.rendering.semantic_ui.report.render_rotated_table(this$,env):com.fulcrologic.rad.rendering.semantic_ui.report.render_standard_table(this$,env))], null),null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___89150,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","TableReportLayout","com.fulcrologic.rad.rendering.semantic-ui.report/TableReportLayout",-379447076),options__56259__auto___89150);
var ui_table_report_layout_89151 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)], null));
com.fulcrologic.rad.rendering.semantic_ui.report.render_table_report_layout = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_table_report_layout(this$){
var G__89141 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),this$], null);
return (ui_table_report_layout_89151.cljs$core$IFn$_invoke$arity$1 ? ui_table_report_layout_89151.cljs$core$IFn$_invoke$arity$1(G__89141) : ui_table_report_layout_89151.call(null,G__89141));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.report.js.map
