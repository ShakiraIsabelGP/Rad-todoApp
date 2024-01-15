goog.provide('com.fulcrologic.rad.report_options');
/**
 * An *attribute* that will serve as each row's primary key. May be a virtual attribute that is not actually stored
 * in the database, but the attribute must have a resolver that will return a stable value. Reports that generate
 * aggregated rows, for example, might use a combination of things to generate this value server-side.
 */
com.fulcrologic.rad.report_options.row_pk = new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951);
/**
 * A vector of *attributes* that describe the columns of the report (when tabular). In non-tabular reports this
 *   is still needed, but the renderer can choose to use the per-row data however it wants (points on a graph, etc).
 * 
 *   The columns are treated as the authoritative definition of the attributes, meaning that you can assoc things like
 *   `ao/style` on a column to override something like style.
 */
com.fulcrologic.rad.report_options.columns = new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549);
/**
 * ATTRIBUTE OPTION: A keyword or `(fn [report col-attr] )`.
 * 
 *   Indicates the preferred alignment for the content of the attribute
 * when shown in a data column. This is a HINT to the renderer.
 * 
 * Typical supported values are: `:right`, `:left`, and `:center`.
 * 
 * See also `column-class` for an option that more directly targets general HTML layout.
 * 
 * WARNING: Using this and `column-class` at the same time may cause conflicts in an HTML renderer.
 * 
 */
com.fulcrologic.rad.report_options.column_alignment = new cljs.core.Keyword("com.fulcrologic.rad.report","column-alignment","com.fulcrologic.rad.report/column-alignment",2082109489);
/**
 * ATTRIBUTE OPTION. The name of a CSS class (a string) to add to the `classes` of
 *   the HTML element that represents a column (f.ex. a `<td>` when rendering the report as a table).
 * 
 *   This option is a HINT to the rendering plugin and will be ignored if it doesn't support it.
 * 
 * Example:
 * 
 * ```
 * ro/column-class "my-respect-newlines"
 * ```
 */
com.fulcrologic.rad.report_options.column_class = new cljs.core.Keyword("com.fulcrologic.rad.report","column-class","com.fulcrologic.rad.report/column-class",-562089245);
/**
 * A map from column (qualified keyword) to a the name of a CSS class (a string) to add to the `classes` of
 *   the HTML element that represents a column (f.ex. a `<td>` when rendering the report as a table).
 * 
 *   This option is a HINT to the rendering plugin and will be ignored if it doesn't support it.
 * 
 * Example:
 * 
 * ```
 * ro/column-classes {:movie/description "my-respect-newlines"}
 * ```
 */
com.fulcrologic.rad.report_options.column_classes = new cljs.core.Keyword("com.fulcrologic.rad.report","column-classes","com.fulcrologic.rad.report/column-classes",1997266085);
/**
 * A map from column (qualified keyword) to a formatter style, which is either a keyword or a
 * `(fn [report-instance] keyword)`. Chooses an alternate rendering style for the column (if supported by
 * installed formatters).
 * 
 * Columns are formatted by `column-formatters`. You can manually set a field formatter using
 * `ro/column-formatter` or `ro/column-formatters`. If you do *not* set the formatter, then a formatter
 * will be selected from an installed set of predefined formatters, which are organized by
 * data type and style.
 * 
 * This option allows you to pick among the pre-installed (via `report/install-formatter!`)
 * formatters without having to define your own. The style of control selected will
 * depend on:
 * 
 * * This option.
 * * The `ao/style` set on the attribute of the column.
 * * A default value of `:default`.
 * 
 * WARNING: This option is ignored if the column has an explicit `column-formatter`.
 * 
 * See `report/install-formatter!`.
 * See also `column-formatter` and `column-formatters`.
 */
com.fulcrologic.rad.report_options.column_styles = new cljs.core.Keyword("com.fulcrologic.rad.report","column-styles","com.fulcrologic.rad.report/column-styles",366052571);
/**
 * A *qualified keyword* that will be used as the entry-point key for the query. The data source server must
 * have a resolver that can start queries at that keyword (global resolver).
 */
com.fulcrologic.rad.report_options.source_attribute = new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859);
/**
 * A string or `(fn [report-instance] string-or-element?)` that generates the title for this report. Can return a string
 * and many rendering plugins also allow a UI element.
 */
com.fulcrologic.rad.report_options.title = new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308);
/**
 * A shorthand for turning column values into links to their respective form for editing.  You can get similar
 * (but possibly more advanced) results using `column-formatters`, but this is a lot less code.
 * 
 * This option is a map from *qualified key* to a RAD Form.  The qualified key *must* be something that is persisted
 * (not a generated column) and co-exist at the top level of the form given (e.g. you cannot use a nested form key to access a
 * top-level form).
 * 
 * ```
 * ro/form-links {:account/name AccountForm}
 * ```
 * 
 * See also `column-formatters`.
 * 
 */
com.fulcrologic.rad.report_options.form_links = new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799);
/**
 * A map from *qualified key* to a `(fn [report-instance value-to-format row-props attribute] string-or-element?)`. The function will
 * receive the raw value of the column and should return a string or a UI element *that is acceptable to the current render
 * plugin*.
 * 
 * ```
 * ro/column-formatters {:account/name
 *                       (fn [this v]
 *                         (dom/a {:onClick #(form/edit! this AccountForm (-> this comp/props :account/id)} (str v)))}
 * ```
 * 
 * Returning an element is particularly useful when the formatting needs something special, like bold, SVG, or some other
 * complex format.
 * 
 * A global default can be specified with `::report/column-formatter` on the attribute, which is just a `fn` (not a map).
 * 
 * See also `column-styles`, `attr/style`, `link`, `form-links`, `row-query-inclusion`, and `column-formatter`.
 * 
 */
com.fulcrologic.rad.report_options.column_formatters = new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551);
/**
 * DEPRECATED. Use column-formatters
 */
com.fulcrologic.rad.report_options.field_formatters = com.fulcrologic.rad.report_options.column_formatters;
/**
 * ATTRIBUTE OPTION. A `(fn [report-instance value row-props attribute])` which can be used on an attribute. See `column-formatters`.
 */
com.fulcrologic.rad.report_options.column_formatter = new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatter","com.fulcrologic.rad.report/column-formatter",1459791387);
/**
 * DEPRECATED. Use column-formatter.
 */
com.fulcrologic.rad.report_options.field_formatter = com.fulcrologic.rad.report_options.column_formatter;
/**
 * Boolean. Should this report run when it is first mounted, or wait for the user to explicitly take an action. See
 * `controls`. If you set this to false you should make sure the user has some kind of control that allows them to
 * run the report.
 */
com.fulcrologic.rad.report_options.run_on_mount_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180);
/**
 * ALIAS to ::control/controls. A map of control definitions, which can be action buttons or inputs.
 * 
 * Input control values are stored in the report's parameters, and can be used in the filtering/sorting of the
 * rows.
 * 
 * Each control is given a unique key, and a map that describes the control. A typical value of this option will look like:
 * 
 * ```
 * :com.fulcrologic.rad.control/controls {::new-invoice {:label  "New Invoice"
 *                                                       :type   :button
 *                                                       :action (fn [this] (form/create! this InvoiceForm))}
 *                                        :show-inactive? {:type          :boolean
 *                                                         :style         :toggle
 *                                                         :default-value false
 *                                                         :onChange      (fn [this _] (report/reload! this))
 *                                                         :label         "Show Inactive Accounts?"}}
 *                                        ::new-account {:label  "New Account"
 *                                                       :type   :button
 *                                                       :action (fn [this] (form/create! this AccountForm))}}
 * ```
 * 
 * The types of controls supported depend on your UI plugin.
 * 
 * A control is a map with keys:
 * 
 * * `:type`: OPTIONAL. Defaults to :button. Rendering plugins define what types are supported.
 * * `:style`: OPTIONAL. Defaults to :default. Rendering plugins define what styles are supported.
 * * `:action`: OPTIONAL. A side-effecting `(fn [report-instance])`.
 * * `:label` : REQUIRED. A string or `(fn [report-instance] string-or-element?)`. If it is an element then nothing
 *              but the element is rendered, i.e. it needs to hand user interaction itself.
 *              (For more customization, check whether your rendering plugin supports extra options, e.g. a report-row-button-renderer)
 * * `:visible?` : OPTIONAL. Defaults to true. A boolean or `(fn [report-class-or-instance] boolean?)`.
 *    Indicates that the control should not be displayed (likely because it is an input you only intend to
 *    set via routing params). You must also omit it from `control-layout`.
 * * `:local?` : OPTIONAL. Defaults to false. Indicates that you want the control's value to be private/local to the report
 * * `:retain?` : OPTIONAL. Defaults to true. Indicate that you want the in-state value to be retained in cases where the
 * report re-appears (is routed to) without an explicit value for this parameter. This means that if neither the URL or routing event
 * has a value for the control, then any in-state value for it will be preferred over the default value; otherwise,
 * the default-value (or nil) will be used.
 * 
 * 
 * Rendering plugins can expand this list of options as desired.
 * 
 * See also `control-layout`, `row-visible?`, `initial-sort-params`, and `compare-rows`.
 * 
 */
com.fulcrologic.rad.report_options.controls = new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232);
/**
 * Alias to `::control/control-layout`. Reports can have actions and input controls. These are normally laid out by simply throwing all of the buttons
 * in a sequence, and throwing all of the non-buttons in a form. No layout in particular is guaranteed by RAD
 * (though you rendering plugin may provide one).
 * 
 * This option is a HINT to the rendering plugin as to how you'd *like* the controls to be placed on the screen. The
 * content of this option is a map should generally look like:
 * 
 * ```
 * {:action-buttons [::a ::b ::c]
 *  :inputs [[::d]
 *           [::e ::f]]
 * ```
 * 
 * Where the keywords are the control keys that you wish to place in those respective positions in the UI. See
 * `controls`.
 * 
 */
com.fulcrologic.rad.report_options.control_layout = new cljs.core.Keyword("com.fulcrologic.rad.control","control-layout","com.fulcrologic.rad.control/control-layout",-980348103);
/**
 * A string that will be used as this reports path element in the routing tree. Must be unique among siblings.
 */
com.fulcrologic.rad.report_options.route = new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438);
/**
 * A map from *qualified keyword* to a column heading, which can be a simple string or a `(fn [report-instance] string?)`
 */
com.fulcrologic.rad.report_options.column_headings = new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609);
/**
 * An EQL query (vector) that will be added to the query of the rows IF you have the report system generate the row
 * component.
 * 
 * Note that reports will always include the `row-pk` in the query, and if a mix of columns are included they
 * will also include the PK (if possible) of the source of the columns in question.  You can use `row-query-inclusion`
 * and custom server-side resolvers to make any imaginable data available on a row, which can be useful in things
 * like `column-formatters` and `row-actions`.
 * 
 * BEWARE: If you provide your own `ro/BodyItem` then this is ignored. Modify the body item's query instead.
 * 
 */
com.fulcrologic.rad.report_options.row_query_inclusion = new cljs.core.Keyword("com.fulcrologic.rad.report","row-query-inclusion","com.fulcrologic.rad.report/row-query-inclusion",-656135832);
/**
 * An optional function that can calculate a header that should be added to a row (in HTML this would typically be
 * a leftmost `th` on the row).
 * 
 * The function should be a `(fn [report-instance row-data] string-or-element)`.
 * 
 * TODO: Should the `row-data` include information about its relative position in the table?
 * 
 */
com.fulcrologic.rad.report_options.row_heading = new cljs.core.Keyword("com.fulcrologic.rad.report","row-heading","com.fulcrologic.rad.report/row-heading",59520395);
/**
 * A vector of actions that will appear on each row of the report (if supported by rendering plugin).
 * 
 * An action is a map with keys:
 * 
 * * `:type`: OPTIONAL. Defaults to :button. Rendering plugins define what types are supported.
 * * `:action`: REQUIRED. A side-effecting `(fn [report-instance row-props])`.
 * * `:label` : REQUIRED. A string or `(fn [report-instance row-props control] string-or-element?)`.
 * * `:disabled?` : OPTIONAL. A boolean or `(fn [report-instance row-props] boolean?)`.
 * * `:visible?` : OPTIONAL. A boolean or `(fn [report-instance row-props] boolean?)`.
 * 
 * Rendering plugins can expand this list of options as desired.
 * 
 * See also `row-query-inclusion`, `form-links`, and `link`.
 */
com.fulcrologic.rad.report_options.row_actions = new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371);
/**
 * See `links`.
 */
com.fulcrologic.rad.report_options.link = new cljs.core.Keyword("com.fulcrologic.rad.report","links","com.fulcrologic.rad.report/links",-1514511185);
/**
 * A map from *qualified key* to a side-effecting `(fn [report-instance row-props]). Wraps the column value
 *   from column-formatters.
 * 
 * See also `form-links`, `row-actions`, and `column-formatters`.
 */
com.fulcrologic.rad.report_options.links = new cljs.core.Keyword("com.fulcrologic.rad.report","links","com.fulcrologic.rad.report/links",-1514511185);
/**
 * Boolean. Defaults to false.
 * 
 * When set to true the auto-generated row component will not be given an ident, causing the rows of the
 * report to not be normalized in state. This can be a performance improvement for reports with lots of rows since
 * rendering will not have to denormalize them on render, and should be set to true for reports that contain
 * derived data.
 * 
 * Reports that show real entities should probably set this to false, since denormalized values will not update when
 * edited on the normalized entities (in forms).
 */
com.fulcrologic.rad.report_options.denormalize_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","denormalize?","com.fulcrologic.rad.report/denormalize?",889862364);
/**
 * A `(fn [report-parameters row-props] boolean?).
 * 
 * When supplied the report will automatically use this predicate to filter the rows that are visible to the user. This
 * function is supplied with the current value of the report parameters (defined by `controls`)
 * 
 * See `controls`.
 */
com.fulcrologic.rad.report_options.row_visible_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","row-visible?","com.fulcrologic.rad.report/row-visible?",1268447481);
/**
 * A comparison function `(fn [sort-parameters row-a row-b] 0, 1, or -1)`.
 * 
 * ```
 * ro/compare-rows        (fn [{:keys [sort-by ascending?] :or {sort-by    :sales/date
 *                                                              ascending? true}} row-a row-b]
 *                          (let [a          (get row-a sort-by)
 *                                b          (get row-b sort-by)
 *                                fwd-result (compare a b)]
 *                            (cond-> fwd-result
 *                              (not ascending?) (-))))
 * ```
 * 
 * The sort parameters are set by `initial-sort-params`, the incoming route parameters, or user `controls`.
 * 
 * Sorting is always done against the filtered rows.
 * 
 * See `controls`, `initial-sort-params`, and `row-visible?`.
 */
com.fulcrologic.rad.report_options.compare_rows = new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509);
/**
 * A map that describes the reports initial sort order parameters. NOTE: parameters can be
 * overridden by route parameters.
 * 
 * The map contains:
 * 
 * * `:sort-by` - The qualified key of the column that is the default sort order. This just marks the column heading.
 * * `:sortable-columns` - A set (required) of the columns that should offer sort controls.
 * * `:ascending?` - A boolean indicating if the order should be ascending, default is true.
 * 
 * ```
 * ro/initial-sort-params {:sort-by :account/name
 *                         :sortable-columns #{:account/name :account/email}
 *                         :ascending? true} ; ascending
 * ```
 * 
 */
com.fulcrologic.rad.report_options.initial_sort_params = new cljs.core.Keyword("com.fulcrologic.rad.report","initial-sort-params","com.fulcrologic.rad.report/initial-sort-params",597353424);
/**
 * Turn on pagination IF the rendering layout from your UI plugin supports it.
 */
com.fulcrologic.rad.report_options.paginate_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","paginate?","com.fulcrologic.rad.report/paginate?",505904825);
/**
 * The number of results per page, if your rendering plugin supports pagination and it is turned on. Can also be a
 * `(fn [uism-env] page-size)`
 */
com.fulcrologic.rad.report_options.page_size = new cljs.core.Keyword("com.fulcrologic.rad.report","page-size","com.fulcrologic.rad.report/page-size",-1307273282);
/**
 * ATTRIBUTE OPTION.  A string or `(fn [report-instance] string-or-element?)`.
 * 
 *   Specify the default column heading for an attribute. Overridden by `column-headings`.
 * 
 *   Rendering plugins may or may not allow non-string return values from the function version.
 */
com.fulcrologic.rad.report_options.column_heading = new cljs.core.Keyword("com.fulcrologic.rad.report","column-heading","com.fulcrologic.rad.report/column-heading",-1327880348);
/**
 * A function that will be called when the report is loaded/refreshed and can transform (or augment) the network result into
 * the normalized form expected by the report. This is useful when it is more convenient to implement Pathom resolvers
 * that return that data in a shape different from that needed, or when you'd like the raw result to have some
 * pre-processing done on it before presentation.
 * 
 * If supplied it should be a `(fn [report-class raw-network-result] updated-result)`.
 * 
 * For example, you might use a `ro/source-attribute` of `:invoice-statistics`, and `ro/columns` of
 * `[date-groups gross-sales item-count]`. However, the pathom implementation of groupings will be most optimal
 * if you can do the groupings at the `invoice-statistics` resolver, and then have each nested resolver report
 * the values for the groupings as a vector, like so:
 * 
 * ```
 * {:invoice-statistics ; (1)
 *  {:invoice-statistics/date-groups ["1/1/2020" "2/1/2020" "3/1/2020" "4/1/2020"]
 *   :invoice-statistics/gross-sales [323M 313M 124M 884M]
 *   :invoice-statistics/item-count  [10 11 5 42]}})
 * ```
 * 
 * Reports, however, expect the loaded data to have this shape:
 * 
 * ```
 * {:invoice-statistics  ; (2)
 *   [{:invoice-statistics/date-groups 1/1/2020 :invoice-statistics/gross-sales 323M :invoice-statistics/item-count 10}
 *    {:invoice-statistics/date-groups 2/1/2020 :invoice-statistics/gross-sales 313M :invoice-statistics/item-count 11}
 *    ...]}
 * ```
 * 
 * If so, you must provide this option in order to convert (1) into (2). Since the above transform is commonly useful
 * when implementing with Pathom it is included in RAD as `report/rotate-result`.
 * 
 * IMPORTANT: IF you return a result like (1) you will also have to set `ro/denormalize?` to false or your raw data will
 * be mangled by normalization.
 * 
 * This option can also be used to take some result and do statistical roll-ups on the client. For example, you could
 * include a virtual column (e.g. a `defattr` of `row-total` that has no representation on the server, and will result in no data on the
 * full-stack result). You could then use this function to calculate that value and plug it into the data just after load.
 */
com.fulcrologic.rad.report_options.raw_result_xform = new cljs.core.Keyword("com.fulcrologic.rad.report","raw-result-xform","com.fulcrologic.rad.report/raw-result-xform",-478513875);
/**
 * A boolean (or a `(fn [report-instance] boolean?)`). Requests that the UI rendering rotate the table. The first
 * column listed in the config will then become the column headings
 * and the remaining columns become the rows (with their column headers becoming row headers).
 * 
 * NOTE: Rotated tables do not support a custom row renderer. If you need to customize the look of rotation you will
 * have to take control of table rendering yourself.
 * 
 * WARNING: This option is a hint to the UI rendering layer. Your UI plugin may or may not support it, in which case this
 * option may be a no-op and you will have to write the rendering code in your table yourself.
 */
com.fulcrologic.rad.report_options.rotate_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","rotate?","com.fulcrologic.rad.report/rotate?",1830627427);
/**
 * Override the state machine definition that is used to control this report. Defaults to report/report-machine, which
 * you can use as a basis of your replacement (a state machine definition is just a map).
 */
com.fulcrologic.rad.report_options.machine = new cljs.core.Keyword("com.fulcrologic.rad.report","machine","com.fulcrologic.rad.report/machine",-2080954567);
/**
 * A `(fn [uism-env] new-env)` that will be called just after rows have been sorted/filtered/paginated, but before
 *   they have been rendered.  This option is particularly useful in mobile where you might want to transform the page
 *   into a js data array for use with list views.
 */
com.fulcrologic.rad.report_options.post_process = new cljs.core.Keyword("com.fulcrologic.rad.report","post-process","com.fulcrologic.rad.report/post-process",1063453121);
/**
 * The class that is used for rendering the rows of the report. If not supplied then one will be generated for you. This
 * key will be available on the resulting report, and can be used to obtain the row class for things like denormalizing
 * row data.
 * 
 * IMPORTANT: IF you supply a BodyItem, then IT becomes the normalizing query component for the rows. I.e. You MUST include
 * an ident and query on that component that at least aligns with row-pk.
 */
com.fulcrologic.rad.report_options.BodyItem = new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373);
/**
 * A vector of things to add to the top-level report's query.
 * 
 * Example:
 * 
 * Imagine you need the ID of the current user for an action:
 * 
 * ```
 * ro/query-inclusions [:user/current-user-id]
 * ```
 * 
 *   You can then access it in the report's body:
 * 
 *   ```
 *   (:user/current-user-id props)
 *   ```
 * 
 *   Notice that the report will _not load_ this data for you, you must
 *   ensure their presence in the client DB yourself.
 */
com.fulcrologic.rad.report_options.query_inclusions = new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206);
/**
 * Attribute option. The EQL to use when querying for this attribute from the data model. This is useful when
 * the attribute is, for example, a recursive bag of data you'd like to resolve via a join. Defaults to the
 * keyword of the attribute itself. The most common value for this would be a map (to indicate an EQL join).
 * 
 * For example, say you have a report that is a list of product, but each of those products has inventory
 * in one or more locations (e.g. warehouses). You'd like to define an attribute for `:product/inventory`,
 * but just the prop alone isn't all you want to query for. Instead, you'd like the report to auto-include
 * the join:
 * 
 * ```
 * {:product/inventory [:location/name
 *                      :inventory/quantity
 *                      :inventory/unit-cost]}
 * ```
 * 
 * which is what you'd set this option to on that attribute.
 * 
 * Notice that the above will not normalize the data. That might be preferable for performance reasons. If you want the
 * data normalized then use `get-query` just as in component queries. For example in combination with `nc`:
 * 
 * ```
 * {:product/inventory (rc/get-query (rc/nc [:inventory/id ; remember to include the id for nc
 *                                           :location/name
 *                                           :inventory/quantity
 *                                           :inventory/unit-cost]}
 * ```
 */
com.fulcrologic.rad.report_options.column_EQL = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699);
/**
 * Report option. Keyword. A HINT to the rendering plugin as to the preferred
 *   layout of the report. The Semantic UI plugin, for example, predefines
 *   :default and :list.  NOTE: If you change the layout style, then you will
 *   also typically need to change `ro/row-style` as well or
 *   supply your own BodyItem to render the rows.
 * 
 *   Styles are extensible by installing additional controls into the control plugin map at application
 *   start.
 */
com.fulcrologic.rad.report_options.layout_style = new cljs.core.Keyword("com.fulcrologic.rad.report","layout-style","com.fulcrologic.rad.report/layout-style",-1879722909);
/**
 * Report option. Keyword. A HINT to the rendering plugin as to the preferred
 * style of the rows. SUI plugin predefined :default and :list, but you
 * can install your own as well.
 */
com.fulcrologic.rad.report_options.row_style = new cljs.core.Keyword("com.fulcrologic.rad.report","row-style","com.fulcrologic.rad.report/row-style",626537415);
/**
 * Report option. How many seconds should we consider data that was previously loaded in the report valid? When set
 * this will cause the initial report run (run-on-mount?) to be skipped if the report is already populated, and
 * the cache time has not expired.
 */
com.fulcrologic.rad.report_options.load_cache_seconds = new cljs.core.Keyword("com.fulcrologic.rad.report","load-cache-seconds","com.fulcrologic.rad.report/load-cache-seconds",1857942909);
/**
 * A `(fn [uism-env] uism-env)` that will be threaded into the UISM handler of the report after it loads new data. This
 * function will be called as the *last* step, so all report data will be constructed (filtering, sorting, pagination).
 * 
 * You can do anything in this hook that you can do in a normal state machine. If you activate a new state different
 * from the default, it will override the default target state after load.
 */
com.fulcrologic.rad.report_options.report_loaded = new cljs.core.Keyword("com.fulcrologic.rad.report","report-loaded","com.fulcrologic.rad.report/report-loaded",-1314066509);
/**
 * A `(fn [uism-env cache-looks-stale?] boolean?)`.
 * 
 *   The load cache normally expires based on:
 * 
 *   * The cache timeout expires.
 *   * The source table of ::row-pk changes (in number of objects).
 * 
 *   If this option is specified AND it returns a non-nil result, THEN it will be used as the cache expiration logic.
 *   (NO NIL PUNNING!)
 * 
 *   The function will receive the UISM env and a boolean indicating if the default
 *   algorithm thinks the cache should be expired.
 *   
 */
com.fulcrologic.rad.report_options.load_cache_expired_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","load-cache-expired?","com.fulcrologic.rad.report/load-cache-expired?",1495950132);
/**
 * A `(fn [report-instance row-props]) that is called when a user selects a report row. Support for
 * this option is dependent on the rendering plugin.
 * 
 * See also `form-links`, `links`, `row-actions`, and `column-formatters`.
 */
com.fulcrologic.rad.report_options.on_select_row = new cljs.core.Keyword("com.fulcrologic.rad.report","on-select-row","com.fulcrologic.rad.report/on-select-row",-1754562064);
/**
 * A boolean or `(fn [ control-values] boolean)` that can be used to short-circuit the filtering step. Normally,
 * if a `ro/row-visible?` option is set then that function will be called once for every row in your
 * report, which can cause a significant performance hit on large reports. This allows you to indicate
 * that the current filtering selection does not require this step.
 * 
 * `control-values` will be a map that contains the values of all of the controls that have one.
 */
com.fulcrologic.rad.report_options.skip_filtering_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","skip-filtering?","com.fulcrologic.rad.report/skip-filtering?",1432335353);
/**
 * A map (or `(fn [uism-env] map?)`) whose value will be merged with the options sent to the `uism/load` that
 * the default state machine uses to pull in the report data.
 * 
 * An example of where you might want to use this is when a row contains sub-elements that could be large
 * (data points, history, comments, etc.) that you wish to let the user expand and load on demand. In this
 * case you could add the `:without` option to prevent pre-loading those elements, and then manually code
 * the row rendering and use `load-field` to fill in the missing details on demand.
 * 
 * WARNING: These options allow you to OVERRIDE those that are normally sent. You should carefully review the
 * report machine's source code before using this option.
 * 
 */
com.fulcrologic.rad.report_options.load_options = new cljs.core.Keyword("com.fulcrologic.rad.report","load-options","com.fulcrologic.rad.report/load-options",-906938492);
/**
 * ATTRIBUTE OPTION.  A string or `(fn [report-instance] string-or-element?)`.
 * 
 *   Specify additional info *about* the column, which can be rendered, for example, as a hover or info button.
 */
com.fulcrologic.rad.report_options.column_info = new cljs.core.Keyword("com.fulcrologic.rad.report","column-info","com.fulcrologic.rad.report/column-info",887310264);
/**
 * A map from *qualified keyword* to information about the column, which can be a simple string or a `(fn [report-instance] string?)`
 */
com.fulcrologic.rad.report_options.column_infos = new cljs.core.Keyword("com.fulcrologic.rad.report","column-infos","com.fulcrologic.rad.report/column-infos",961152363);
/**
 * A UISM handler (fn [env] env') that will be run before loading the report's data.
 */
com.fulcrologic.rad.report_options.before_load = new cljs.core.Keyword("com.fulcrologic.rad.report","before-load","com.fulcrologic.rad.report/before-load",-776481349);
/**
 * Report option. Should the page number and other controls be tracked in the URL? Defaults to TRUE. Useful if embedding
 * a report into someething like a modal, where the URL parameters are not meant to affect or be modified by the content.
 */
com.fulcrologic.rad.report_options.track_in_url_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.report","track-in-url?","com.fulcrologic.rad.report/track-in-url?",-554114309);

//# sourceMappingURL=com.fulcrologic.rad.report_options.js.map
