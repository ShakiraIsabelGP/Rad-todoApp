goog.provide('com.fulcrologic.rad.semantic_ui_options');
/**
 * Top-level key for specifying rendering options. All
 * SUI customization options MUST appear under this key.
 */
com.fulcrologic.rad.semantic_ui_options.rendering_options = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","rendering-options","com.fulcrologic.rad.semantic-ui-options/rendering-options",-1090892612);
/**
 * A string or `(fn [report-instance] string?)`.
 * CSS class(es) to put in the div that surrounds the action buttons.
 * 
 * Defaults to 'ui right floated buttons'.
 */
com.fulcrologic.rad.semantic_ui_options.report_action_button_grouping = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-action-button-grouping","com.fulcrologic.rad.semantic-ui-options/report-action-button-grouping",-661341984);
/**
 * A string or `(fn [report-instance] string?)`.
 * CSS class(es) to put in the div that surrounds the action buttons on a table row.
 * 
 * Defaults to 'ui buttons'.
 */
com.fulcrologic.rad.semantic_ui_options.report_row_button_grouping = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-row-button-grouping","com.fulcrologic.rad.semantic-ui-options/report-row-button-grouping",1934348213);
/**
 * A `(fn [instance row-props {:keys [key disabled?]}] dom-element)`.
 * 
 *   * `instance` - the report instance
 *   * `row-props` - the data props of the row
 *   * `key` - a unique key that can be used for react on the element.
 *   * `onClick` - a generated function according to the buton's action setting
 *   * `disabled?`-  true if the calculation of your disabled? option is true.
 * 
 *   Overrides the rendering of action button controls.
 * 
 *   You must return a DOM element to render for the control. If you return nil then
 *   the default (button) will be rendered.
 */
com.fulcrologic.rad.semantic_ui_options.report_row_button_renderer = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-row-button-renderer","com.fulcrologic.rad.semantic-ui-options/report-row-button-renderer",990785639);
/**
 * A `(fn [instance {:keys [key control disabled? loading?]}] dom-element)`.
 * 
 *   * `key` - the key you used to add it to the controls list.
 *   * `control` - the map of options you gave for the control.
 *   * `disabled?`-  true if the calculation of your disabled? option is true.
 *   * `loading?` - true if the component is loading data.
 * 
 *   Overrides the rendering of action button controls.
 * 
 *   You must return a DOM element to render for the control. If you return nil then
 *   the default (button) will be rendered.
 */
com.fulcrologic.rad.semantic_ui_options.action_button_render = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","action-button-render","com.fulcrologic.rad.semantic-ui-options/action-button-render",718001240);
/**
 * The CSS class of the div that holds the top-level layout of the report or form.  Defaults
 * to some variant of 'ui segment'.
 * 
 * A string or `(fn [instance] string?)`.
 */
com.fulcrologic.rad.semantic_ui_options.layout_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","layout-class","com.fulcrologic.rad.semantic-ui-options/layout-class",-2015020398);
/**
 * The CSS class of the div that holds the controls on layouts that have a control section. Defaults
 * to some variant of 'ui top attached segment'.
 * 
 * A string or `(fn [instance] string?)`.
 */
com.fulcrologic.rad.semantic_ui_options.controls_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","controls-class","com.fulcrologic.rad.semantic-ui-options/controls-class",520722097);
/**
 * The CSS class of the div that holds the actual body of the page (e.g. form or report).
 * Defaults to some variant of 'ui attached segment'.
 * 
 * A string or `(fn [instance] string?)`.
 */
com.fulcrologic.rad.semantic_ui_options.body_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","body-class","com.fulcrologic.rad.semantic-ui-options/body-class",-1933014214);
/**
 * The CSS class of generated report tables. Defaults to 'ui selectable table'.
 * 
 *   A string or `(fn [report-instance] string?)`.
 */
com.fulcrologic.rad.semantic_ui_options.report_table_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-table-class","com.fulcrologic.rad.semantic-ui-options/report-table-class",-1298407048);
/**
 * The CSS class of generated report tables that are rotated. Defaults to 'ui compact collapsing definition selectable table'.
 * 
 *   A string or `(fn [report-instance] string?)`.
 */
com.fulcrologic.rad.semantic_ui_options.report_rotated_table_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-rotated-table-class","com.fulcrologic.rad.semantic-ui-options/report-rotated-table-class",1104356782);
/**
 * The CSS class of headers in a table-style report. Data cells defaults to nothing.
 * Action buttons are have a column index and default to 'collapsing'.
 * 
 * A `(fn [report-instance zero-based-column-index] string?)`.
 * 
 * NOTE: Action buttons are add and have a column index. They default to 'collapsing'
 */
com.fulcrologic.rad.semantic_ui_options.report_table_header_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-table-header-class","com.fulcrologic.rad.semantic-ui-options/report-table-header-class",-2064777652);
/**
 * The CSS class of cells in a table-style report. Defaults to nothing for normal tables, and 'right aligned' for
 * rotated ones. Action buttons are have a column index and default to 'collapsing'.
 * 
 *   A `(fn [report-instance zero-based-column-index] string?)`.
 * 
 *   
 */
com.fulcrologic.rad.semantic_ui_options.report_table_cell_class = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-table-cell-class","com.fulcrologic.rad.semantic-ui-options/report-table-cell-class",-933139018);
/**
 * A boolean. When true the table will support click on a row to affix a highlight to that row.
 */
com.fulcrologic.rad.semantic_ui_options.selectable_table_rows_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","selectable-table-rows?","com.fulcrologic.rad.semantic-ui-options/selectable-table-rows?",756801750);
/**
 * Get rendering options from a mounted component `c`.
 * 
 * WARNING: If c is a class, then global overrides will not be honored.
 */
com.fulcrologic.rad.semantic_ui_options.get_rendering_options = (function com$fulcrologic$rad$semantic_ui_options$get_rendering_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___88522 = arguments.length;
var i__4737__auto___88523 = (0);
while(true){
if((i__4737__auto___88523 < len__4736__auto___88522)){
args__4742__auto__.push((arguments[i__4737__auto___88523]));

var G__88526 = (i__4737__auto___88523 + (1));
i__4737__auto___88523 = G__88526;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic = (function (c,ks){
var app = com.fulcrologic.fulcro.components.any__GT_app(c);
var global_options = (function (){var G__88515 = app;
var G__88515__$1 = (((G__88515 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__88515));
var G__88515__$2 = (((G__88515__$1 == null))?null:cljs.core.deref(G__88515__$1));
if((G__88515__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","rendering-options","com.fulcrologic.rad.semantic-ui-options/rendering-options",-1090892612).cljs$core$IFn$_invoke$arity$1(G__88515__$2);
}
})();
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([global_options,(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","rendering-options","com.fulcrologic.rad.semantic-ui-options/rendering-options",-1090892612)) : com.fulcrologic.fulcro.components.component_options.call(null,c,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","rendering-options","com.fulcrologic.rad.semantic-ui-options/rendering-options",-1090892612)))], 0));
if(cljs.core.seq(ks)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.vec(ks));
} else {
return options;
}
}));

(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$lang$applyTo = (function (seq88513){
var G__88514 = cljs.core.first(seq88513);
var seq88513__$1 = cljs.core.next(seq88513);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88514,seq88513__$1);
}));

/**
 * Set rendering options on the application such that they serve as *defaults*.
 * 
 *   The `options` parameter to this function MUST NOT have the key suo/rendering-options, but
 *   should instead just have the parameters themselves (e.g. ::suo/action-button-renderer).
 *   
 */
com.fulcrologic.rad.semantic_ui_options.set_global_rendering_options_BANG_ = (function com$fulcrologic$rad$semantic_ui_options$set_global_rendering_options_BANG_(app,options){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","rendering-options","com.fulcrologic.rad.semantic-ui-options/rendering-options",-1090892612),options);
});

//# sourceMappingURL=com.fulcrologic.rad.semantic_ui_options.js.map
