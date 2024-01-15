goog.provide('com.fulcrologic.rad.form');
com.fulcrologic.rad.form.view_action = "view";
com.fulcrologic.rad.form.create_action = "create";
com.fulcrologic.rad.form.edit_action = "edit";







/**
 * The standard ::form/action-buttons button layout. Requires you include stardard-controls in your ::control/controls key.
 */
com.fulcrologic.rad.form.standard_action_buttons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","done","com.fulcrologic.rad.form/done",-597306883),new cljs.core.Keyword("com.fulcrologic.rad.form","undo","com.fulcrologic.rad.form/undo",-1709442161),new cljs.core.Keyword("com.fulcrologic.rad.form","save","com.fulcrologic.rad.form/save",-2066369648)], null);
/**
 * The default value of ::control/controls for forms. Includes a ::done, ::undo, and ::save button.
 */
com.fulcrologic.rad.form.standard_controls = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","done","com.fulcrologic.rad.form/done",-597306883),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_form_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var dirty_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__4126__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
if(cljs.core.truth_(dirty_QMARK_)){
return tr("Cancel");
} else {
return tr("Done");
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var dirty_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})();
if(cljs.core.truth_(dirty_QMARK_)){
return "ui tiny primary button negative";
} else {
return "ui tiny primary button positive";
}
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
var G__75229 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),this$], null);
return (com.fulcrologic.rad.form.cancel_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.cancel_BANG_.cljs$core$IFn$_invoke$arity$1(G__75229) : com.fulcrologic.rad.form.cancel_BANG_.call(null,G__75229));
})], null),new cljs.core.Keyword("com.fulcrologic.rad.form","undo","com.fulcrologic.rad.form/undo",-1709442161),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_form_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var dirty_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__4126__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
return cljs.core.not(dirty_QMARK_);
}),new cljs.core.Keyword(null,"label","label",1718410804),(function (_){
return tr("Undo");
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
var G__75258 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),this$], null);
return (com.fulcrologic.rad.form.undo_all_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.undo_all_BANG_.cljs$core$IFn$_invoke$arity$1(G__75258) : com.fulcrologic.rad.form.undo_all_BANG_.call(null,G__75258));
})], null),new cljs.core.Keyword("com.fulcrologic.rad.form","save","com.fulcrologic.rad.form/save",-2066369648),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_form_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var remote_busy_QMARK_ = cljs.core.seq(new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005).cljs$core$IFn$_invoke$arity$1(props));
var dirty_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__4126__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
return ((cljs.core.not(dirty_QMARK_)) || (remote_busy_QMARK_));
}),new cljs.core.Keyword(null,"label","label",1718410804),(function (_){
return tr("Save");
}),new cljs.core.Keyword(null,"class","class",-2030961996),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var remote_busy_QMARK_ = cljs.core.seq(new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005).cljs$core$IFn$_invoke$arity$1(props));
if(remote_busy_QMARK_){
return "ui tiny primary button loading";
} else {
return null;
}
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
var G__75259 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),this$], null);
return (com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1(G__75259) : com.fulcrologic.rad.form.save_BANG_.call(null,G__75259));
})], null)], null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","picker-join-key","com.fulcrologic.rad.form/picker-join-key",-1736718474,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),cljs.core.qualified_keyword_QMARK_,null,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),null,null,null));


/**
 * Returns a :ui/picker keyword customized to the qualified keyword
 * @type {function(*): *}
 */
com.fulcrologic.rad.form.picker_join_key = (function com$fulcrologic$rad$form$picker_join_key(qualified_key){
var map__75273 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),cljs.core.qualified_keyword_QMARK_,null,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),null,null,null);
var map__75273__$1 = (((((!((map__75273 == null))))?(((((map__75273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75273):map__75273);
var retspec75261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75273__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec75260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75273__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec75260)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:89 picker-join-key's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec75260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key], null));
} else {
}

var f75263 = (function (qualified_key__$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("ui",[cljs.core.namespace(qualified_key__$1),"-",cljs.core.name(qualified_key__$1),"-picker"].join(''));
});
var ret75262 = f75263(qualified_key);
if(cljs.core.truth_(retspec75261)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:89 picker-join-key's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec75261,ret75262);
} else {
}

return ret75262;
});
/**
 * Return the master form for the given component instance.
 */
com.fulcrologic.rad.form.master_form = (function com$fulcrologic$rad$form$master_form(component){
var or__4126__auto__ = (function (){var G__75288 = component;
var G__75288__$1 = (((G__75288 == null))?null:(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(G__75288) : com.fulcrologic.fulcro.components.get_computed.call(null,G__75288)));
if((G__75288__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641).cljs$core$IFn$_invoke$arity$1(G__75288__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return component;
}
});
/**
 * Returns true if the given react element `form-instance` is the master form in the supplied rendering env. You can
 * also supply `this` if you have not already created a form rendering env, but that will be less efficient if you
 * need the rendering env in other places.
 */
com.fulcrologic.rad.form.master_form_QMARK_ = (function com$fulcrologic$rad$form$master_form_QMARK_(var_args){
var G__75296 = arguments.length;
switch (G__75296) {
case 1:
return com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var env = (com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.rad.form.rendering_env.call(null,this$));
return com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$2(env,this$);
}));

(com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (rendering_env,form_instance){
var master_form = new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641).cljs$core$IFn$_invoke$arity$1(rendering_env);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form_instance,master_form);
}));

(com.fulcrologic.rad.form.master_form_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns the keyword that was used in the join of the parent form when querying for the data of the current
 * `form-instance`. Returns nil if there is no parent relation.
 */
com.fulcrologic.rad.form.parent_relation = (function com$fulcrologic$rad$form$parent_relation(this$){
var G__75302 = this$;
var G__75302__$1 = (((G__75302 == null))?null:(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(G__75302) : com.fulcrologic.fulcro.components.get_computed.call(null,G__75302)));
if((G__75302__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884).cljs$core$IFn$_invoke$arity$1(G__75302__$1);
}
});
/**
 * Get the RAD attribute definition for the given attribute key, given a FormClass that has that attribute
 * as a field. Returns a RAD attribute, or nil if that attribute isn't a form field on the form.
 */
com.fulcrologic.rad.form.form_key__GT_attribute = (function com$fulcrologic$rad$form$form_key__GT_attribute(FormClass,attribute_key){
var G__75304 = FormClass;
var G__75304__$1 = (((G__75304 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75304) : com.fulcrologic.fulcro.components.component_options.call(null,G__75304)));
var G__75304__$2 = (((G__75304__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333).cljs$core$IFn$_invoke$arity$1(G__75304__$1));
if((G__75304__$2 == null)){
return null;
} else {
return (attribute_key.cljs$core$IFn$_invoke$arity$1 ? attribute_key.cljs$core$IFn$_invoke$arity$1(G__75304__$2) : attribute_key.call(null,G__75304__$2));
}
});
/**
 * Find the correct UI renderer for the given form layout `element`.
 * 
 * `element` must be one of :
 * 
 * ```
 * #{:form-container :form-body-container}
 * ```
 *   
 */
com.fulcrologic.rad.form.render_fn = (function com$fulcrologic$rad$form$render_fn(p__75309,element){
var map__75310 = p__75309;
var map__75310__$1 = (((((!((map__75310 == null))))?(((((map__75310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75310):map__75310);
var _form_env = map__75310__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75310__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__75313 = com.fulcrologic.fulcro.components.any__GT_app(form_instance);
var map__75313__$1 = (((((!((map__75313 == null))))?(((((map__75313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75313):map__75313);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75313__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var style_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624),element], null);
var layout_style = (function (){var or__4126__auto__ = (function (){var G__75319 = form_instance;
var G__75319__$1 = (((G__75319 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75319) : com.fulcrologic.fulcro.components.component_options.call(null,G__75319)));
if((G__75319__$1 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__75319__$1,style_path);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var element__GT_style__GT_layout = (function (){var G__75320 = runtime_atom;
var G__75320__$1 = (((G__75320 == null))?null:cljs.core.deref(G__75320));
var G__75320__$2 = (((G__75320__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__75320__$1));
if((G__75320__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076).cljs$core$IFn$_invoke$arity$1(G__75320__$2);
}
})();
var render_fn = (function (){var G__75321 = element__GT_style__GT_layout;
var G__75321__$1 = (((G__75321 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__75321,element));
if((G__75321__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__75321__$1,layout_style);
}
})();
if(cljs.core.not(runtime_atom)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,145,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form instance was not in the rendering environment. This means the form did not mount properly"], null);
}),null)),null,640070129,null);
} else {
if(cljs.core.not(render_fn)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No renderer was installed for layout style",layout_style,"for UI element",element], null);
}),null)),null,1986550311,null);
} else {
}
}

return render_fn;
});
/**
 * The top-level container for the entire on-screen form
 */
com.fulcrologic.rad.form.form_container_renderer = (function com$fulcrologic$rad$form$form_container_renderer(form_env){
return com.fulcrologic.rad.form.render_fn(form_env,new cljs.core.Keyword(null,"form-container","form-container",-1768135707));
});
/**
 * The container for the form fields. Used to wrap the main set of fields, and as the container for
 * fields in nested forms. This renderer can determine layout of the fields themselves.
 */
com.fulcrologic.rad.form.form_layout_renderer = (function com$fulcrologic$rad$form$form_layout_renderer(form_env){
return com.fulcrologic.rad.form.render_fn(form_env,new cljs.core.Keyword(null,"form-body-container","form-body-container",819827704));
});
/**
 * Given the current rendering environment and an attribute: Returns the renderer that wraps and lays out
 * elements of refs. This function interprets the ::form/subforms settings for referenced objects that
 * will render as sub-forms, and looks for ::form/layout-style first in the subform settings, and next on the
 * component options of the ::form/ui class itself:
 * 
 * ```
 * fo/subforms {ref-field-key {fo/layout-style some-style ; optional, choose/override style
 *                             fo/subform MyForm}
 * ```
 * 
 */
com.fulcrologic.rad.form.ref_container_renderer = (function com$fulcrologic$rad$form$ref_container_renderer(p__75380,p__75381){
var map__75383 = p__75380;
var map__75383__$1 = (((((!((map__75383 == null))))?(((((map__75383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75383):map__75383);
var _form_env = map__75383__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75383__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__75384 = p__75381;
var map__75384__$1 = (((((!((map__75384 == null))))?(((((map__75384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75384):map__75384);
var _attr = map__75384__$1;
var field_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75384__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75384__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__75392 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__75392__$1 = (((((!((map__75392 == null))))?(((((map__75392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75392):map__75392);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75392__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var field_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75392__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968));
var field_style__$1 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_styles,qualified_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return field_style;
}
})();
if(cljs.core.truth_(field_style__$1)){
return (function (env,attr,_){
return (com.fulcrologic.rad.form.render_field.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.render_field.cljs$core$IFn$_invoke$arity$2(env,attr) : com.fulcrologic.rad.form.render_field.call(null,env,attr));
});
} else {
var map__75456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,qualified_key);
var map__75456__$1 = (((((!((map__75456 == null))))?(((((map__75456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75456):map__75456);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var layout_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624));
var map__75457 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(ui) : com.fulcrologic.fulcro.components.component_options.call(null,ui));
var map__75457__$1 = (((((!((map__75457 == null))))?(((((map__75457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75457):map__75457);
var target_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75457__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624));
var map__75458 = com.fulcrologic.fulcro.components.any__GT_app(form_instance);
var map__75458__$1 = (((((!((map__75458 == null))))?(((((map__75458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75458):map__75458);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75458__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var element = new cljs.core.Keyword(null,"ref-container","ref-container",-1728504269);
var layout_style = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_styles,element);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(target_styles,element);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
var render_fn = (function (){var G__75469 = runtime_atom;
var G__75469__$1 = (((G__75469 == null))?null:cljs.core.deref(G__75469));
var G__75469__$2 = (((G__75469__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__75469__$1));
var G__75469__$3 = (((G__75469__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076).cljs$core$IFn$_invoke$arity$1(G__75469__$2));
if((G__75469__$3 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__75469__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,layout_style], null));
}
})();
return render_fn;
}
});
/**
 * Given a form rendering environment and an attribute: returns the renderer that can render the given attribute.
 * 
 *   The attribute style of :default is the default, and can be overridden in ::form/field-styles on the form (master
 *   has precedence, followed by the form it actually appears on) or
 *   using ::form/field-style on the attribute itself.
 */
com.fulcrologic.rad.form.attr__GT_renderer = (function com$fulcrologic$rad$form$attr__GT_renderer(p__75476,p__75477){
var map__75478 = p__75476;
var map__75478__$1 = (((((!((map__75478 == null))))?(((((map__75478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75478):map__75478);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75478__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75478__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__75479 = p__75477;
var map__75479__$1 = (((((!((map__75479 == null))))?(((((map__75479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75479):map__75479);
var attr = map__75479__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75479__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75479__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75479__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","style","com.fulcrologic.rad.attributes/style",816608992));
var field_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75479__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885));
var map__75491 = com.fulcrologic.fulcro.components.any__GT_app(form_instance);
var map__75491__$1 = (((((!((map__75491 == null))))?(((((map__75491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75491):map__75491);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75491__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var field_style__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = (function (){var G__75515 = master_form;
var G__75515__$1 = (((G__75515 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75515) : com.fulcrologic.fulcro.components.component_options.call(null,G__75515)));
var G__75515__$2 = (((G__75515__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968).cljs$core$IFn$_invoke$arity$1(G__75515__$1));
if((G__75515__$2 == null)){
return null;
} else {
return (qualified_key.cljs$core$IFn$_invoke$arity$1 ? qualified_key.cljs$core$IFn$_invoke$arity$1(G__75515__$2) : qualified_key.call(null,G__75515__$2));
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__75524 = form_instance;
var G__75524__$1 = (((G__75524 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75524) : com.fulcrologic.fulcro.components.component_options.call(null,G__75524)));
var G__75524__$2 = (((G__75524__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968).cljs$core$IFn$_invoke$arity$1(G__75524__$1));
if((G__75524__$2 == null)){
return null;
} else {
return (qualified_key.cljs$core$IFn$_invoke$arity$1 ? qualified_key.cljs$core$IFn$_invoke$arity$1(G__75524__$2) : qualified_key.call(null,G__75524__$2));
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = field_style;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = style;
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
var control_map = (function (){var G__75525 = runtime_atom;
var G__75525__$1 = (((G__75525 == null))?null:cljs.core.deref(G__75525));
var G__75525__$2 = (((G__75525__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__75525__$1));
if((G__75525__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","type->style->control","com.fulcrologic.rad.form/type->style->control",146932348).cljs$core$IFn$_invoke$arity$1(G__75525__$2);
}
})();
var control = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(control_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,field_style__$1], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer not found: ",type,field_style__$1], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer not found: ",type,field_style__$1], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer not found: ",type,field_style__$1], null);
}),null)),null,-391801987,null);
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(control_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})();
if(cljs.core.truth_(control)){
return control;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,211,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find control (no default) for attribute ",attr], null);
}),null)),null,1633926086,null);
}
});
/**
 * Given a form rendering environment and an attrbute: renders that attribute according to its type/style/value.
 */
com.fulcrologic.rad.form.render_field = (function com$fulcrologic$rad$form$render_field(env,attr){
var render = com.fulcrologic.rad.form.attr__GT_renderer(env,attr);
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(env,attr) : render.call(null,env,attr));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No renderer installed to support attribute",attr], null);
}),null)),null,1164419156,null);

return null;
}
});
/**
 * Create a form rendering environment. `form-instance` is the react element instance of the form (typically a master form),
 * but this function can be called using an active sub-form. `props` should be the props of the `form-instance`, and are
 * allowed to be passed as an optimization when you've already got them.
 * 
 * NOTE: This function will automatically extract the master form from the computed props of form-instance in cases
 * where you are in the context of a sub-form.
 */
com.fulcrologic.rad.form.rendering_env = (function com$fulcrologic$rad$form$rendering_env(var_args){
var G__75542 = arguments.length;
switch (G__75542) {
case 1:
return com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1 = (function (form_instance){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var cprops = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cprops,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),com.fulcrologic.rad.form.master_form(form_instance),new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","props","com.fulcrologic.rad.form/props",278185108),props,new cljs.core.Keyword("com.fulcrologic.rad.form","computed-props","com.fulcrologic.rad.form/computed-props",-321049616),cprops], null)], 0));
}));

(com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2 = (function (form_instance,props){
var cprops = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cprops,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),com.fulcrologic.rad.form.master_form(form_instance),new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","props","com.fulcrologic.rad.form/props",278185108),props,new cljs.core.Keyword("com.fulcrologic.rad.form","computed-props","com.fulcrologic.rad.form/computed-props",-321049616),cprops], null)], 0));
}));

(com.fulcrologic.rad.form.rendering_env.cljs$lang$maxFixedArity = 2);

/**
 * Render JUST the form fields (and subforms). This will skip rendering the header/controls on the top-level form, and
 * will skip the form container on subforms.
 * 
 * If you use this on the top-level form then you will need to provide your own rendering of the controls for
 * navigation, save, undo, etc.  You can use the support functions in this
 * namespace (e.g. `save!`, `undo-all!`, `cancel!`) to implement the behavior of those controls.
 * 
 * This function bypasses the body container for the form elements, so you may need to do additional work to wrap
 * them for appropriate rendering (e.g. in the semantic-ui plugin, you'll need a div with the `form` class on it).
 * 
 */
com.fulcrologic.rad.form.render_form_fields = (function com$fulcrologic$rad$form$render_form_fields(form_instance,props){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,form_instance)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid form instance.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance], null));
}

var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2(form_instance,props);
var render = com.fulcrologic.rad.form.form_layout_renderer(env);
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(env) : render.call(null,env));
} else {
return null;
}
});
/**
 * Render the complete layout of a form. This is the default body of normal form classes. It will call a render factory
 * on any subforms, and they, in turn, will use this to render *their* body. Thus, any form can have a manually-overriden
 * render body.
 */
com.fulcrologic.rad.form.render_layout = (function com$fulcrologic$rad$form$render_layout(form_instance,props){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,form_instance)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid form instance propagated to render layout.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance], null));
}

var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2(form_instance,props);
var render = com.fulcrologic.rad.form.form_container_renderer(env);
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(env) : render.call(null,env));
} else {
return null;
}
});
/**
 * Recursively walks the definition of a RAD form (form and all subforms), and returns the attribute qualified keys
 * that match `(pred attribute)`
 */
com.fulcrologic.rad.form.find_fields = (function com$fulcrologic$rad$form$find_fields(form_class,pred){
var attributes = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var local_optional = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(pred),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949))),attributes);
var children = (function (){var G__75553 = form_class;
var G__75553__$1 = (((G__75553 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__75553));
var G__75553__$2 = (((G__75553__$1 == null))?null:edn_query_language.core.query__GT_ast(G__75553__$1));
var G__75553__$3 = (((G__75553__$2 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__75553__$2));
if((G__75553__$3 == null)){
return null;
} else {
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),G__75553__$3);
}
})();
var children_optional = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75551_SHARP_){
return (com.fulcrologic.rad.form.find_fields.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.find_fields.cljs$core$IFn$_invoke$arity$2(p1__75551_SHARP_,pred) : com.fulcrologic.rad.form.find_fields.call(null,p1__75551_SHARP_,pred));
}),children);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,local_optional,children_optional);
});
/**
 * Returns all of the form fields from a form (recursively) that are not marked ao/required?
 */
com.fulcrologic.rad.form.optional_fields = (function com$fulcrologic$rad$form$optional_fields(form_class){
return com.fulcrologic.rad.form.find_fields(form_class,(function (p1__75573_SHARP_){
return (!(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__75573_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330)) === true));
}));
});
com.fulcrologic.rad.form.sc = (function com$fulcrologic$rad$form$sc(registry_key,options){
var cls = (function (){
return null;
});
return com.fulcrologic.fulcro.components.configure_component_BANG_(cls,registry_key,options);
});
/**
 * Converts form options to the necessary EQL query for a form class.
 */
com.fulcrologic.rad.form.form_options__GT_form_query = (function com$fulcrologic$rad$form$form_options__GT_form_query(p__75581){
var map__75583 = p__75581;
var map__75583__$1 = (((((!((map__75583 == null))))?(((((map__75583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75583):map__75583);
var _form_options = map__75583__$1;
var id_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75583__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75583__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75583__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id_attr);
var map__75587 = cljs.core.group_by((function (p1__75578_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804).cljs$core$IFn$_invoke$arity$1(p1__75578_SHARP_));
}),attributes);
var map__75587__$1 = (((((!((map__75587 == null))))?(((((map__75587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75587):map__75587);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75587__$1,true);
var scalars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75587__$1,false);
var query_with_scalars = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,new cljs.core.Keyword("ui","confirmation-message","ui/confirmation-message",-1177012486),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)),scalars);
var full_query = cljs.core.into.cljs$core$IFn$_invoke$arity$3(query_with_scalars,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__75592){
var map__75593 = p__75592;
var map__75593__$1 = (((((!((map__75593 == null))))?(((((map__75593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75593):map__75593);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75593__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var subform = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([qualified_key,com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(subform)])], null);
} else {
var k__GT_attr = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__75602){
var map__75603 = p__75602;
var map__75603__$1 = (((((!((map__75603 == null))))?(((((map__75603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75603):map__75603);
var attr = map__75603__$1;
var qualified_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75603__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key__$1,attr], null);
})),attributes);
var target_id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039).cljs$core$IFn$_invoke$arity$1((k__GT_attr.cljs$core$IFn$_invoke$arity$1 ? k__GT_attr.cljs$core$IFn$_invoke$arity$1(qualified_key) : k__GT_attr.call(null,qualified_key)));
var fake_component = com.fulcrologic.rad.form.sc(qualified_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,target_id_key)], null);
})], null));
if(cljs.core.truth_(target_id_key)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,341,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference attribute",qualified_key,"in form has no subform ::form/ui, and no ::attr/target."], null);
}),null)),null,1145471572,null);
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([qualified_key,com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(fake_component)])], null);
}
})),refs);
return full_query;
});
/**
 * moved to integer.cljs
 */
com.fulcrologic.rad.form.parse_long = com.fulcrologic.rad.type_support.integer.parse_long;
/**
 * Forms use a state machine to control their behavior. Normally that state machine is started when you route to
 *   it using Fulcro's dynamic router system. If you start with a form on-screen, or do not use routing, then you will
 *   have to call this function when the form first appears in order to ensure it operates. Calling this function is
 *   *destructive* and will re-start the form's machine and destroy any current state in that form.
 * 
 *   * app - The app
 *   * id - The ID of the form, in the correct type (i.e. int, UUID, etc.). Use a `tempid` to create something new, otherwise
 *   the form will attempt to load the current value from the server.
 *   * form-class - The component class that will render the form and has the form's configuration.
 *   * params - Extra parameters to include in the initial event data. The state machine definition you're using will
 *  determine the meanings of these (if any). The default machine supports:
 *  ** `:on-saved fulcro-txn` A transaction to run when the form is successfully saved. Exactly what you'd pass to `transact!`.
 *  ** `:on-cancel fulcro-txn` A transaction to run when the edit is cancelled.
 *  ** `:on-save-failed fulcro-txn` A transaction to run when the server refuses to save the data.
 *  ** `:embedded? boolean` Disable history and routing for embedded forms. Default false.
 * 
 *   The state machine definition used by this method can be overridden by setting `::form/machine` in component options
 *   to a different Fulcro uism state machine definition. Machines do *not* run in subforms, only in the master, which
 *   is what `form-class` will become for that machine.
 *   
 */
com.fulcrologic.rad.form.start_form_BANG_ = (function com$fulcrologic$rad$form$start_form_BANG_(var_args){
var G__75606 = arguments.length;
switch (G__75606) {
case 3:
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,id,form_class){
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4(app,id,form_class,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,id,form_class,params){
var map__75607 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var map__75607__$1 = (((((!((map__75607 == null))))?(((((map__75607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75607):map__75607);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75607__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var machine = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","machine","com.fulcrologic.rad.form/machine",-1164263159)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","machine","com.fulcrologic.rad.form/machine",-1164263159)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.form.form_machine;
}
})();
var new_QMARK_ = com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id);
var form_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,id], null);
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,machine,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(form_ident,form_class)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893),new_QMARK_], null)], 0)));
}));

(com.fulcrologic.rad.form.start_form_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Used as the implementation and return value of a form target's will-enter dynamic routing hook.
 */
com.fulcrologic.rad.form.form_will_enter = (function com$fulcrologic$rad$form$form_will_enter(app,p__75609,form_class){
var map__75610 = p__75609;
var map__75610__$1 = (((((!((map__75610 == null))))?(((((map__75610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75610):map__75610);
var route_params = map__75610__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75610__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75610__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__75612 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var map__75612__$1 = (((((!((map__75612 == null))))?(((((map__75612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75612):map__75612);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75612__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75612__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var new_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.form.create_action,action);
var coerced_id = ((new_QMARK_)?com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0():com.fulcrologic.rad.ids.id_string__GT_id(type,id));
var form_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,coerced_id], null);
if(((new_QMARK_) && ((!(com.fulcrologic.rad.ids.valid_uuid_string_QMARK_(id)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,388,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_name.call(null,form_class)),"Invalid UUID string ",id,"used in route for new entity. The form may misbehave."], null);
}),null)),null,-526430987,null);
} else {
}

return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(form_ident,(function (){
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4(app,coerced_id,form_class,route_params);
}));
});
/**
 * Stop the state machine for the given form without warning. Does not reset the form or give any warnings: just exits the state machine.
 * You should only use this when you are embedding the form in something, and you are controlling the form directly. Usually,
 * you will combine this with `undo-all!` and some kind of UI routing change.
 */
com.fulcrologic.rad.form.abandon_form_BANG_ = (function com$fulcrologic$rad$form$abandon_form_BANG_(app_ish,form_ident){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,form_ident,new cljs.core.Keyword("event","exit","event/exit",373463484),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Checks to see if the UISM is still running (indicating an exit via routing) and cleans up the machine.
 */
com.fulcrologic.rad.form.form_will_leave = (function com$fulcrologic$rad$form$form_will_leave(this$){
var master_form = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return this$;
}
})();
var state_map = com.fulcrologic.fulcro.raw.application.current_state(this$);
var form_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
var silent_abandon_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var machine = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),form_ident], null));
if(cljs.core.truth_(machine)){
if(cljs.core.truth_(silent_abandon_QMARK_)){
com.fulcrologic.rad.form.abandon_form_BANG_(this$,form_ident);
} else {
}

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,form_ident,new cljs.core.Keyword("event","exit","event/exit",373463484),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return true;
});
com.fulcrologic.rad.form.form_allow_route_change = (function com$fulcrologic$rad$form$form_allow_route_change(this$){

var id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var silent_abandon_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var current_state = com.fulcrologic.fulcro.raw.application.current_state(this$);
var abandoned_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),new cljs.core.Keyword(null,"abandoned?","abandoned?",1788912865)], null),false);
var dirty_QMARK_ = ((cljs.core.not(abandoned_QMARK_)) && (com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(form_props)));
var or__4126__auto__ = silent_abandon_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = read_only_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(dirty_QMARK_));
}
}
});
/**
 * Generate a pre-merge for a component that has the given for attribute map. Returns a proper
 *   pre-merge fn, or `nil` if none is needed
 */
com.fulcrologic.rad.form.form_pre_merge = (function com$fulcrologic$rad$form$form_pre_merge(p__75614,key__GT_attribute){
var map__75615 = p__75614;
var map__75615__$1 = (((((!((map__75615 == null))))?(((((map__75615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75615):map__75615);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75615__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var sorters_by_k = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.fulcrologic.rad.form","sort-children","com.fulcrologic.rad.form/sort-children",-1384515906)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var sorter = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sorter], null);
} else {
return null;
}
}),cljs.core.keys(key__GT_attribute)));
if(cljs.core.seq(sorters_by_k)){
return (function (p__75617){
var map__75618 = p__75617;
var map__75618__$1 = (((((!((map__75618 == null))))?(((((map__75618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75618):map__75618);
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75618__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var ks = cljs.core.keys(sorters_by_k);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,433,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form system sorting data tree children for keys ",ks], null);
}),null)),null,486444303,null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tree,k){
if(cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,k))){
try{return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tree,k,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.get.cljs$core$IFn$_invoke$arity$2(sorters_by_k,k)));
}catch (e75620){var e = e75620;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,440,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sort failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null);
}),null)),null,-91274600,null);

return tree;
}} else {
return tree;
}
}),data_tree,ks);
});
} else {
return null;
}
});
/**
 * Find all attributes that are referenced by a form and all of its subforms, recursively.
 */
com.fulcrologic.rad.form.form_and_subform_attributes = (function com$fulcrologic$rad$form$form_and_subform_attributes(cls){
var options = (function (){var G__75621 = cls;
if((G__75621 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75621) : com.fulcrologic.fulcro.components.component_options.call(null,G__75621));
}
})();
var base_attributes = com.fulcrologic.rad.form_options.attributes.cljs$core$IFn$_invoke$arity$1(options);
var subforms = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.form_options.ui,cljs.core.vals(com.fulcrologic.rad.form_options.subforms.cljs$core$IFn$_invoke$arity$1(options)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(base_attributes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.form_and_subform_attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subforms], 0)));
});
/**
 * Runtime conversion of form options to what comp/configure-component! needs.
 */
com.fulcrologic.rad.form.convert_options = (function com$fulcrologic$rad$form$convert_options(get_class,location,options){
if(((cljs.core.contains_QMARK_(options,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591))) && (cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)))))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,"MUST include",new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),"that satisfies predicate","vector?"], null);
}),null)),null,1066559519,null);
}

if(((cljs.core.contains_QMARK_(options,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937))) && (com.fulcrologic.rad.attributes.attribute_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)))))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,"MUST include",new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),"that satisfies predicate","attr/attribute?"], null);
}),null)),null,-180016933,null);
}

var map__75622 = options;
var map__75622__$1 = (((((!((map__75622 == null))))?(((((map__75622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75622):map__75622);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75622__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75622__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var route_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75622__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703));
var query_inclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75622__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736));
var will_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75622__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id);
var form_field_QMARK_ = (function (p__75624){
var map__75625 = p__75624;
var map__75625__$1 = (((((!((map__75625 == null))))?(((((map__75625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75625):map__75625);
var identity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75625__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","identity?","com.fulcrologic.rad.attributes/identity?",-576130258));
var computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75625__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-value","com.fulcrologic.rad.attributes/computed-value",-1657154665));
return ((cljs.core.not(computed_value)) && (cljs.core.not(identity_QMARK_)));
});
var attribute_map = com.fulcrologic.rad.attributes.attribute_map(attributes);
var pre_merge = com.fulcrologic.rad.form.form_pre_merge(options,attribute_map);
var base_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894),com.fulcrologic.rad.attributes.make_attribute_validator.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.form.form_and_subform_attributes((get_class.cljs$core$IFn$_invoke$arity$0 ? get_class.cljs$core$IFn$_invoke$arity$0() : get_class.call(null))),true),new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),com.fulcrologic.rad.form.standard_controls,new cljs.core.Keyword(null,"route-denied","route-denied",-1140339590),(function (this$,relative_root,proposed_route,timeouts_and_params){
var temp__5735__auto__ = (function (){var or__4126__auto__ = (function (){var G__75629 = (get_class.cljs$core$IFn$_invoke$arity$0 ? get_class.cljs$core$IFn$_invoke$arity$0() : get_class.call(null));
var G__75630 = new cljs.core.Keyword("com.fulcrologic.rad.form","confirm","com.fulcrologic.rad.form/confirm",-1829135245);
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__75629,G__75630) : com.fulcrologic.fulcro.components.component_options.call(null,G__75629,G__75630));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return confirm;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var confirm_fn = temp__5735__auto__;
if(cljs.core.truth_((confirm_fn.cljs$core$IFn$_invoke$arity$1 ? confirm_fn.cljs$core$IFn$_invoke$arity$1("You will lose unsaved changes. Are you sure?") : confirm_fn.call(null,"You will lose unsaved changes. Are you sure?")))){
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(this$,relative_root,proposed_route,timeouts_and_params);
} else {
return null;
}
} else {
return null;
}
})], null),options,(function (){var G__75631 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id_key)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333),attribute_map,new cljs.core.Keyword(null,"form-fields","form-fields",35924568),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(form_field_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949))),attributes)], null);
var G__75631__$1 = (cljs.core.truth_(pre_merge)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75631,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),pre_merge):G__75631);
if(cljs.core.truth_(route_prefix)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__75631__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_prefix,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"allow-route-change?","allow-route-change?",173143289),com.fulcrologic.rad.form.form_allow_route_change,new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),(function (this$,props){
return com.fulcrologic.rad.form.form_will_leave(this$);
}),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (){var or__4126__auto__ = will_enter;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (app,route_params){
return com.fulcrologic.rad.form.form_will_enter(app,route_params,(get_class.cljs$core$IFn$_invoke$arity$0 ? get_class.cljs$core$IFn$_invoke$arity$0() : get_class.call(null)));
});
}
})()], null)], 0));
} else {
return G__75631__$1;
}
})()], 0));
var attribute_query_inclusions = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes], 0)));
var inclusions = clojure.set.union.cljs$core$IFn$_invoke$arity$2(attribute_query_inclusions,cljs.core.set(query_inclusion));
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (!(typeof route_prefix === 'string'));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: ",location," does not have a route prefix and will only be usable as a sub-form."], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: ",location," does not have a route prefix and will only be usable as a sub-form."], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: ",location," does not have a route prefix and will only be usable as a sub-form."], null);
}),null)),null,-755781823,null);
}
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = will_enter;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(route_prefix);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: There's a :will-enter option in form/defsc-form",location,"that will be ignored because ::report/route-prefix is not specified"], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: There's a :will-enter option in form/defsc-form",location,"that will be ignored because ::report/route-prefix is not specified"], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: There's a :will-enter option in form/defsc-form",location,"that will be ignored because ::report/route-prefix is not specified"], null);
}),null)),null,-1654870442,null);
}
} else {
}
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_options,new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
var G__75632 = com.fulcrologic.rad.form.form_options__GT_form_query(base_options);
if(cljs.core.seq(inclusions)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__75632,inclusions);
} else {
return G__75632;
}
}));
});
/**
 * Internal implementation of clj-side form save. Can be used in your own mutations to accomplish writes through
 * the save middleware.
 * 
 * params MUST contain:
 * 
 * * `::form/delta` - The data to save. Map keyed by ident whose values are maps with `:before` and `:after` values.
 * * `::form/id` - The actual ID of the entity being changed.
 * * `::form/master-pk` - The keyword representing the form's ID in your RAD model's attributes.
 * 
 * Returns:
 * 
 * {:tempid {} ; tempid remaps
 *  master-pk id} ; the k/id of the entity saved. The id here will be remapped already if it was a tempid.
 * 
 */
com.fulcrologic.rad.form.save_form_STAR_ = (function com$fulcrologic$rad$form$save_form_STAR_(env,params){
var save_middleware = new cljs.core.Keyword("com.fulcrologic.rad.form","save-middleware","com.fulcrologic.rad.form/save-middleware",-2012160669).cljs$core$IFn$_invoke$arity$1(env);
var save_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),params);
var result = (cljs.core.truth_(save_middleware)?(save_middleware.cljs$core$IFn$_invoke$arity$1 ? save_middleware.cljs$core$IFn$_invoke$arity$1(save_env) : save_middleware.call(null,save_env)):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("form/pathom-plugin is not installed on the parser.",cljs.core.PersistentArrayMap.EMPTY)})());
var map__75642 = params;
var map__75642__$1 = (((((!((map__75642 == null))))?(((((map__75642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75642):map__75642);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75642__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var master_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75642__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068));
var map__75643 = result;
var map__75643__$1 = (((((!((map__75643 == null))))?(((((map__75643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75643):map__75643);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75643__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,id,id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,cljs.core.PersistentArrayMap.createAsIfByAssoc([master_pk,id__$1])], 0));
});
com.fulcrologic.rad.form.pathom2_server_save_form_mutation = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),(function (env,params){
return com.fulcrologic.rad.form.save_form_STAR_(env,params);
}),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),null,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),null,new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),null], null), null)], null);
com.fulcrologic.rad.form.pathom2_server_save_as_form_mutation = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.form.pathom2_server_save_form_mutation,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null));
/**
 * MUTATION: DO NOT USE. See save-as-form mutation for a mutation you can use to leverage the form save mechansims for
 *    arbitrary purposes.
 */
com.fulcrologic.rad.form.save_form = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$form$action(___$1){
var _STAR_after_render_STAR__orig_val__75646_76970 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__75647_76971 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__75647_76971);

try{}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__75646_76970);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__75648 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__75649 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__75649);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__75648);
}})], null);
}));
/**
 * MUTATION: Run a full-stack write as-if it were the save of a form. This allows you to leverage the save middleware
 *    to do all of the save magic without using a form. Useful for implementing simple model updates from action buttons.
 * 
 *    Required params:
 * 
 *    :root-ident - The ident of the entity to change
 * 
 *    And ONE of:
 * 
 *    :entity - A flat entity to write at :root-ident
 *    :delta - A proper form delta, a map ident->attr-key->before-after-map.
 * 
 *    If you specify both, only delta will be used.
 * 
 *    This mutation's ok-action will also update the data in the local state.
 */
com.fulcrologic.rad.form.save_as_form = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null),(function (fulcro_mutation_env_symbol){
var map__75650 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__75650__$1 = (((((!((map__75650 == null))))?(((((map__75650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75650):map__75650);
var root_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75650__$1,new cljs.core.Keyword(null,"root-ident","root-ident",-869759776));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75650__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75650__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$fulcrologic$rad$form$remote(env){
var delta__$1 = (function (){var or__4126__auto__ = delta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([root_ident,cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),v], null));
}),cljs.core.PersistentArrayMap.EMPTY,entity)]);
}
})();
return com.fulcrologic.fulcro.mutations.with_params(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),cljs.core.first(root_ident),new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(root_ident),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),delta__$1], null));
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$fulcrologic$rad$form$ok_action(p__75652){
var map__75653 = p__75652;
var map__75653__$1 = (((((!((map__75653 == null))))?(((((map__75653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75653):map__75653);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75653__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var tempid__GT_realid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75653__$1,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437));
var _STAR_after_render_STAR__orig_val__75655_76991 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__75656_76992 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__75656_76992);

try{if(cljs.core.truth_(delta)){
var seq__75657_76993 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(delta,tempid__GT_realid));
var chunk__75659_76994 = null;
var count__75660_76995 = (0);
var i__75661_76996 = (0);
while(true){
if((i__75661_76996 < count__75660_76995)){
var vec__75670_76997 = chunk__75659_76994.cljs$core$IIndexed$_nth$arity$2(null,i__75661_76996);
var ident_76998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75670_76997,(0),null);
var changes_76999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75670_76997,(1),null);
var data_to_merge_77000 = cljs.core.reduce_kv(((function (seq__75657_76993,chunk__75659_76994,count__75660_76995,i__75661_76996,vec__75670_76997,ident_76998,changes_76999,_STAR_after_render_STAR__orig_val__75655_76991,_STAR_after_render_STAR__temp_val__75656_76992,map__75653,map__75653__$1,state,tempid__GT_realid,map__75650,map__75650__$1,root_ident,entity,delta){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(v));
});})(seq__75657_76993,chunk__75659_76994,count__75660_76995,i__75661_76996,vec__75670_76997,ident_76998,changes_76999,_STAR_after_render_STAR__orig_val__75655_76991,_STAR_after_render_STAR__temp_val__75656_76992,map__75653,map__75653__$1,state,tempid__GT_realid,map__75650,map__75650__$1,root_ident,entity,delta))
,cljs.core.PersistentArrayMap.EMPTY,changes_76999);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ident_76998,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_to_merge_77000], 0));


var G__77001 = seq__75657_76993;
var G__77002 = chunk__75659_76994;
var G__77003 = count__75660_76995;
var G__77004 = (i__75661_76996 + (1));
seq__75657_76993 = G__77001;
chunk__75659_76994 = G__77002;
count__75660_76995 = G__77003;
i__75661_76996 = G__77004;
continue;
} else {
var temp__5735__auto___77005 = cljs.core.seq(seq__75657_76993);
if(temp__5735__auto___77005){
var seq__75657_77006__$1 = temp__5735__auto___77005;
if(cljs.core.chunked_seq_QMARK_(seq__75657_77006__$1)){
var c__4556__auto___77007 = cljs.core.chunk_first(seq__75657_77006__$1);
var G__77008 = cljs.core.chunk_rest(seq__75657_77006__$1);
var G__77009 = c__4556__auto___77007;
var G__77010 = cljs.core.count(c__4556__auto___77007);
var G__77011 = (0);
seq__75657_76993 = G__77008;
chunk__75659_76994 = G__77009;
count__75660_76995 = G__77010;
i__75661_76996 = G__77011;
continue;
} else {
var vec__75673_77012 = cljs.core.first(seq__75657_77006__$1);
var ident_77013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75673_77012,(0),null);
var changes_77014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75673_77012,(1),null);
var data_to_merge_77015 = cljs.core.reduce_kv(((function (seq__75657_76993,chunk__75659_76994,count__75660_76995,i__75661_76996,vec__75673_77012,ident_77013,changes_77014,seq__75657_77006__$1,temp__5735__auto___77005,_STAR_after_render_STAR__orig_val__75655_76991,_STAR_after_render_STAR__temp_val__75656_76992,map__75653,map__75653__$1,state,tempid__GT_realid,map__75650,map__75650__$1,root_ident,entity,delta){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(v));
});})(seq__75657_76993,chunk__75659_76994,count__75660_76995,i__75661_76996,vec__75673_77012,ident_77013,changes_77014,seq__75657_77006__$1,temp__5735__auto___77005,_STAR_after_render_STAR__orig_val__75655_76991,_STAR_after_render_STAR__temp_val__75656_76992,map__75653,map__75653__$1,state,tempid__GT_realid,map__75650,map__75650__$1,root_ident,entity,delta))
,cljs.core.PersistentArrayMap.EMPTY,changes_77014);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ident_77013,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_to_merge_77015], 0));


var G__77017 = cljs.core.next(seq__75657_77006__$1);
var G__77018 = null;
var G__77019 = (0);
var G__77020 = (0);
seq__75657_76993 = G__77017;
chunk__75659_76994 = G__77018;
count__75660_76995 = G__77019;
i__75661_76996 = G__77020;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(root_ident,tempid__GT_realid),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(entity,tempid__GT_realid)], 0));
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__75655_76991);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__75676 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__75677 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__75677);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__75676);
}})], null);
}));
com.fulcrologic.rad.form.start_edit = (function com$fulcrologic$rad$form$start_edit(uism_env,_){
var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,686,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Issuing load of pre-existing form entity",form_ident], null);
}),null)),null,962333762,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4(uism_env,form_ident,FormClass,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","failed","event/failed",-1561105400)], null)),new cljs.core.Keyword("state","loading","state/loading",-628573180));
});
/**
 * Use `default-state` on the top level form. This is part of the recursive implementation.
 * 
 * Calculate a default value for any to-many attributes on the form. This is part of the recursive algorithm that
 * can generate initial state for a new instance of a form.
 * 
 * If a form has subform configuration that declares a `::form/default` which is a vector, then each element
 * in that vector will generate new subform state.
 * 
 * The result will be a `merge` of:
 * 
 * ```
 * (merge (form/default-state SubformClass id) default-value {id-key id})
 * ```
 * 
 * If no defaults are provided you will at least get something that will normalize properly.
 * 
 * Example:
 * 
 * ```
 * (defattr people :people :ref
 *   {::attr/cardinality :many
 *    ::form/default-value [{}] ; used if form doesn't declare
 *    ...})
 * 
 * (defsc Form [this props]
 *   {::form/id id
 *    ::form/columns [people]
 *    ::form/default-values {:people [{} {} {}]} ; overrides what is on attributes
 *    ::form/subforms {:people {::form/ui Person}}})
 * ```
 * 
 * Default value can be a 0-arg function. Each *value* can be a 1-arg function that receives a tempid to put on the
 * new default entity.
 * 
 */
com.fulcrologic.rad.form.default_to_many = (function com$fulcrologic$rad$form$default_to_many(FormClass,attribute){
var map__75679 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__75679__$1 = (((((!((map__75679 == null))))?(((((map__75679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75679):map__75679);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75679__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var map__75680 = attribute;
var map__75680__$1 = (((((!((map__75680 == null))))?(((((map__75680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75680):map__75680);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75680__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75680__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-value","com.fulcrologic.rad.form/default-value",-28925395));
var default_value__$1 = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(FormClass,com.fulcrologic.rad.form_options.default_values,qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass,com.fulcrologic.rad.form_options.default_values,qualified_key)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844)], null)));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_(default_value);
}
}
})();
var b2__11668__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864)], null));
if(cljs.core.truth_(b2__11668__auto__)){
var SubClass = b2__11668__auto__;
if(cljs.core.truth_(SubClass)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,739,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subforms for class",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_name.call(null,FormClass)),"must include a ::form/ui entry for",qualified_key], null);
}),null)),null,-771352685,null);
}

if((((default_value__$1 == null)) || (cljs.core.vector_QMARK_(default_value__$1)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
var id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var base_entity = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
var vec__75693 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(SubClass,base_entity) : com.fulcrologic.fulcro.components.get_ident.call(null,SubClass,base_entity));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75693,(0),null);
var iid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75693,(1),null);
var ident = vec__75693;
var ChildForm = (cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(SubClass) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,SubClass)))?(function (){var G__75696 = SubClass;
var G__75696__$1 = (((G__75696 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__75696));
var G__75696__$2 = (((G__75696__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__75696__$1,k));
if((G__75696__$2 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.query__GT_component.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.query__GT_component.cljs$core$IFn$_invoke$arity$1(G__75696__$2) : com.fulcrologic.fulcro.components.query__GT_component.call(null,G__75696__$2));
}
})():SubClass);
var id_key = (function (){var G__75699 = ChildForm;
var G__75699__$1 = (((G__75699 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75699) : com.fulcrologic.fulcro.components.component_options.call(null,G__75699)));
var G__75699__$2 = (((G__75699__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937).cljs$core$IFn$_invoke$arity$1(G__75699__$1));
if((G__75699__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(G__75699__$2);
}
})();
if(cljs.core.truth_(ChildForm)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,751,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union subform's default-value function failed to assign the ID. Cannot determine which kind of thing we are creating"], null);
}),null)),null,-1269783433,null);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2(ChildForm,id) : com.fulcrologic.rad.form.default_state.call(null,ChildForm,id)),base_entity,cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,id])], 0));
}),default_value__$1);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,758,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default value for",qualified_key,"MUST be a vector."], null);
}),null)),null,-15535874,null);

return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,761,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subform not declared (or is missing ::form/id) for",qualified_key,"on",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_name.call(null,FormClass))], null);
}),null)),null,1897115115,null);

return null;
}
});
/**
 * Use `default-state` on the top level form. This is part of the recursive implementation.
 * 
 *   Generates the default value for a to-one ref in a new instance of a form set. Has the same
 *   behavior as default-to-many, though the default values must be a map instead of a vector.
 * 
 *   Default value can be a no-arg function, but the argument list may change in future versions.
 * 
 *   The final result that will appear in the app state will be:
 * 
 *   ```
 *    (merge
 *      (default-state SubClass new-id)
 *      (when (map? default-value) default-value) ; local form's default value
 *      {id-key new-id})
 *   ```
 * 
 *   where `SubClass` is the UI class of the subform for the relation.
 *   
 */
com.fulcrologic.rad.form.default_to_one = (function com$fulcrologic$rad$form$default_to_one(FormClass,attribute){
var map__75701 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__75701__$1 = (((((!((map__75701 == null))))?(((((map__75701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75701):map__75701);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75701__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var default_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75701__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844));
var map__75702 = attribute;
var map__75702__$1 = (((((!((map__75702 == null))))?(((((map__75702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75702):map__75702);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75702__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-value","com.fulcrologic.rad.form/default-value",-28925395));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75702__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var default_value__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(default_values,qualified_key,default_value));
var SubClass = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864)], null));
var new_id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var id_key = (function (){var G__75710 = SubClass;
if((G__75710 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__75710,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)) : com.fulcrologic.fulcro.components.component_options.call(null,G__75710,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)));
}
})();
if(cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(SubClass) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,SubClass)))){
return null;
} else {
if(cljs.core.truth_(SubClass)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,792,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subforms for class",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_name.call(null,FormClass)),"must include a ::form/ui entry for",qualified_key], null);
}),null)),null,-1529301752,null);
}

if((id_key instanceof cljs.core.Keyword)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,795,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subform class",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(SubClass) : com.fulcrologic.fulcro.components.component_name.call(null,SubClass)),"must include a ::form/id that is an attr/attribute"], null);
}),null)),null,-471483319,null);
}

if(cljs.core.truth_(id_key)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2(SubClass,new_id) : com.fulcrologic.rad.form.default_state.call(null,SubClass,new_id)),((cljs.core.map_QMARK_(default_value__$1))?default_value__$1:null),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id])], 0));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
});
/**
 * Generate a potentially recursive tree of data that represents the tree of initial
 *   state for the given FormClass. Such generated trees will be rooted with the provided
 *   `new-id`, and will generate Fulcro tempids for all nested entities. To-one relations
 *   that have no default will not be included. To-many relations that have no default
 *   will default to an empty vector.
 * 
 *   The FormClass can have `::form/default-values`, a map from attribute *keyword* to the value
 *   to give that attribute in new instances of the form. A global default can be set on the
 *   attribute itself using `::form/default-value`.
 * 
 *   See the doc strings on default-to-one and default-to-many for more information on setting options.
 * 
 *   WARNING: If a rendering field style is given to a ref attribute on a field, then the default value will be
 *   the *raw* default value declared on the attribute or form, but should generally be nil.
 */
com.fulcrologic.rad.form.default_state = (function com$fulcrologic$rad$form$default_state(FormClass,new_id){
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(new_id)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Default state received ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_id)," for a new form ID. It MUST be a Fulcro tempid."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,FormClass)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var map__75711 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__75711__$1 = (((((!((map__75711 == null))))?(((((map__75711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75711):map__75711);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75711__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75711__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var default_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75711__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844));
var initialize_ui_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75711__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initialize-ui-props","com.fulcrologic.rad.form/initialize-ui-props",-1823698482));
var field_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75711__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968));
var map__75712 = id;
var map__75712__$1 = (((((!((map__75712 == null))))?(((((map__75712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75712):map__75712);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75712__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var entity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__75715){
var map__75716 = p__75715;
var map__75716__$1 = (((((!((map__75716 == null))))?(((((map__75716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75716):map__75716);
var attr = map__75716__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75716__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75716__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var field_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75716__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","field-style","com.fulcrologic.rad.attributes/field-style",1264685858));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75716__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-value","com.fulcrologic.rad.form/default-value",-28925395));
var field_style__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_styles,qualified_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return field_style;
}
})());
var default_value__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(default_values,qualified_key,default_value));
if(((cljs.core.not(field_style__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type)) && (com.fulcrologic.rad.attributes.to_many_QMARK_(attr)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,qualified_key,com.fulcrologic.rad.form.default_to_many(FormClass,attr));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = default_value__$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(field_style__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type)) && ((!(com.fulcrologic.rad.attributes.to_many_QMARK_(attr)))));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,qualified_key,com.fulcrologic.rad.form.default_to_one(FormClass,attr));
} else {
if((!((default_value__$1 == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,qualified_key,default_value__$1);
} else {
return result;
}

}
}
}),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id]),attributes);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(initialize_ui_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,entity], 0)),entity], 0));
}
});
/**
 * Same as dynamic routing target-ready, but works in UISM via env.
 */
com.fulcrologic.rad.form.route_target_ready = (function com$fulcrologic$rad$form$route_target_ready(p__75723,target){
var map__75724 = p__75723;
var map__75724__$1 = (((((!((map__75724 == null))))?(((((map__75724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75724):map__75724);
var env = map__75724__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75724__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,854,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id,"notified that pending route is ready."], null);
}),null)),null,-904873769,null);

return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(env,router_id,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,857,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another."], null);
}),null)),null,-2007647585,null);

return env;
}
});
/**
 * Helper function against app state. This function marks `target-keys` as complete on the form given a set of
 * keys that you consider initialized. Like form state's mark-complete, but on all of the target-keys that appear
 * on the form or subforms recursively.
 */
com.fulcrologic.rad.form.mark_fields_complete_STAR_ = (function com$fulcrologic$rad$form$mark_fields_complete_STAR_(state_map,p__75730){
var map__75731 = p__75730;
var map__75731__$1 = (((((!((map__75731 == null))))?(((((map__75731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75731):map__75731);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75731__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var target_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75731__$1,new cljs.core.Keyword(null,"target-keys","target-keys",-1034341011));
var mark_complete_STAR_ = (function (entity,p__75733){
var map__75734 = p__75733;
var map__75734__$1 = (((((!((map__75734 == null))))?(((((map__75734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75734):map__75734);
var form_config = map__75734__$1;
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75734__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75734__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var to_mark = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(complete_QMARK_),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(fields),cljs.core.set(target_keys)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),to_mark)], null);
});
return com.fulcrologic.fulcro.algorithms.form_state.update_forms.cljs$core$IFn$_invoke$arity$3(state_map,mark_complete_STAR_,entity_ident);
});
/**
 * Mark fields complete. Use `mark-fields-complete*` instead, but note the signature change.
 */
com.fulcrologic.rad.form.mark_filled_fields_complete_STAR_ = (function com$fulcrologic$rad$form$mark_filled_fields_complete_STAR_(state_map,p__75736){
var map__75737 = p__75736;
var map__75737__$1 = (((((!((map__75737 == null))))?(((((map__75737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75737):map__75737);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75737__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var initialized_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75737__$1,new cljs.core.Keyword(null,"initialized-keys","initialized-keys",1245023726));
return com.fulcrologic.rad.form.mark_fields_complete_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),entity_ident,new cljs.core.Keyword(null,"target-keys","target-keys",-1034341011),initialized_keys], null));
});
com.fulcrologic.rad.form.all_keys = (function com$fulcrologic$rad$form$all_keys(m){
return cljs.core.reduce_kv((function (result,k,v){
var G__75741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,k);
if(cljs.core.map_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__75741,(com.fulcrologic.rad.form.all_keys.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.all_keys.cljs$core$IFn$_invoke$arity$1(v) : com.fulcrologic.rad.form.all_keys.call(null,v)));
} else {
return G__75741;
}
}),cljs.core.PersistentHashSet.EMPTY,m);
});
com.fulcrologic.rad.form.start_create = (function com$fulcrologic$rad$form$start_create(p__75742,start_params){
var map__75744 = p__75742;
var map__75744__$1 = (((((!((map__75744 == null))))?(((((map__75744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75744):map__75744);
var uism_env = map__75744__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75744__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var form_overrides = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(start_params);
var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var routeable_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass)),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703)));
var route_pending_QMARK_ = ((routeable_QMARK_) && ((!((com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,form_ident) == null)))));
var id = cljs.core.second(form_ident);
var initial_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.default_state(FormClass,id),form_overrides], 0));
var entity_to_merge = com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(FormClass,initial_state);
var initialized_keys = com.fulcrologic.rad.form.all_keys(initial_state);
var optional_keys = com.fulcrologic.rad.form.optional_fields(FormClass);
return com.fulcrologic.fulcro.ui_state_machines.activate((function (){var G__75753 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(uism_env,com.fulcrologic.fulcro.algorithms.merge.merge_component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,entity_to_merge], 0)),com.fulcrologic.rad.form.mark_fields_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),form_ident,new cljs.core.Keyword(null,"target-keys","target-keys",-1034341011),clojure.set.union.cljs$core$IFn$_invoke$arity$2(initialized_keys,optional_keys)], null)], 0));
if(route_pending_QMARK_){
return com.fulcrologic.rad.form.route_target_ready(G__75753,form_ident);
} else {
return G__75753;
}
})(),new cljs.core.Keyword("state","editing","state/editing",1406008034));
});
/**
 * Discard all changes, and attempt to change route.
 */
com.fulcrologic.rad.form.leave_form = (function com$fulcrologic$rad$form$leave_form(p__75758){
var map__75759 = p__75758;
var map__75759__$1 = (((((!((map__75759 == null))))?(((((map__75759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75759):map__75759);
var uism_env = map__75759__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75759__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var state_map = com.fulcrologic.fulcro.raw.application.current_state(fulcro_app);
var cancel_route = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__75762 = Form;
var G__75762__$1 = (((G__75762 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75762) : com.fulcrologic.fulcro.components.component_options.call(null,G__75762)));
if((G__75762__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","cancel-route","com.fulcrologic.rad.form/cancel-route",-1144534404).cljs$core$IFn$_invoke$arity$1(G__75762__$1);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_app,com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,Form,form_ident)], 0));
var map__75761 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(uism_env,new cljs.core.Keyword(null,"options","options",99638489));
var map__75761__$1 = (((((!((map__75761 == null))))?(((((map__75761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75761):map__75761);
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75761__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var embedded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75761__$1,new cljs.core.Keyword(null,"embedded?","embedded?",298781012));
var use_history = ((cljs.core.not(embedded_QMARK_)) && (com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)));
var error_BANG_ = (function (msg){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,911,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The cancel-route option of",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(Form) : com.fulcrologic.fulcro.components.component_name.call(null,Form)),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cancel_route),")"].join(''),msg], null);
}),null)),null,-1519370357,null);
});
var routing_action = (function (){
if(cljs.core.map_QMARK_(cancel_route)){
var map__75790 = cancel_route;
var map__75790__$1 = (((((!((map__75790 == null))))?(((((map__75790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75790):map__75790);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75790__$1,new cljs.core.Keyword(null,"route","route",329891309));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75790__$1,new cljs.core.Keyword(null,"target","target",253001721));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75790__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(com.fulcrologic.fulcro.components.component_class_QMARK_(target)){
return com.fulcrologic.rad.routing.route_to_BANG_(fulcro_app,target,(function (){var or__4126__auto__ = params;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,route)){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro_app,route,params);
} else {
error_BANG_("did not return a valid route.");

return new cljs.core.Keyword(null,"back","back",-417520012);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),cancel_route)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"back","back",-417520012),cancel_route)){
if(com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)){
if(cljs.core.not(embedded_QMARK_)){
return com.fulcrologic.rad.routing.history.back_BANG_(fulcro_app);
} else {
return null;
}
} else {
return error_BANG_("Back not supported. No history installed.");
}
} else {
if(((cljs.core.seq(cancel_route)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,cancel_route)))){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cancel_route);
} else {
if(com.fulcrologic.fulcro.components.component_class_QMARK_(cancel_route)){
return com.fulcrologic.rad.routing.route_to_BANG_(fulcro_app,cancel_route,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(use_history){
return com.fulcrologic.rad.routing.history.back_BANG_(fulcro_app);
} else {
return null;
}
}
}
}
}
}
});
com.fulcrologic.fulcro.algorithms.scheduling.defer(routing_action,(100));

return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store((function (){var G__75792 = uism_env;
if(cljs.core.truth_(on_cancel)){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(G__75792,on_cancel);
} else {
return G__75792;
}
})(),new cljs.core.Keyword(null,"abandoned?","abandoned?",1788912865),true),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","calc-diff","com.fulcrologic.rad.form/calc-diff",-227463346,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__75798){
return cljs.core.map_QMARK_(G__75798);
}),(function (G__75798){
return cljs.core.contains_QMARK_(G__75798,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096));
})], null),(function (G__75798){
return ((cljs.core.map_QMARK_(G__75798)) && (cljs.core.contains_QMARK_(G__75798,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),null,null,null));


/**
 * Calculates the minimal form diff from the UISM env of the master form's state machine.
 * @type {function(*): !cljs.core.IMap}
 */
com.fulcrologic.rad.form.calc_diff = (function com$fulcrologic$rad$form$calc_diff(uism_env){
var map__75813 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__75814){
return cljs.core.map_QMARK_(G__75814);
}),(function (G__75814){
return cljs.core.contains_QMARK_(G__75814,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096));
})], null),(function (G__75814){
return ((cljs.core.map_QMARK_(G__75814)) && (cljs.core.contains_QMARK_(G__75814,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),null,null,null);
var map__75813__$1 = (((((!((map__75813 == null))))?(((((map__75813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75813):map__75813);
var argspec75793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75813__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec75794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75813__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec75793)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:935 calc-diff's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec75793,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uism_env], null));
} else {
}

var f75796 = (function (uism_env__$1){
var map__75818 = uism_env__$1;
var map__75818__$1 = (((((!((map__75818 == null))))?(((((map__75818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75818):map__75818);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75818__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env__$1,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env__$1,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,Form,form_ident);
var delta = com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2(props,true);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),delta], null);
});
var ret75795 = f75796(uism_env);
if(cljs.core.truth_(retspec75794)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:935 calc-diff's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec75794,ret75795);
} else {
}

return ret75795;
});
/**
 * UISM helper. Clears the server errors on the form.
 */
com.fulcrologic.rad.form.clear_server_errors = (function com$fulcrologic$rad$form$clear_server_errors(uism_env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),cljs.core.PersistentVector.EMPTY);
});
com.fulcrologic.rad.form.global_events = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("event","exit","event/exit",373463484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.exit(env);
})], null),new cljs.core.Keyword("event","reload","event/reload",692165289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var vec__75820 = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75820,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75820,(1),null);
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,956,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot load a new thing!"], null);
}),null)),null,-144611293,null);
} else {
return com.fulcrologic.rad.form.start_edit(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(env));
}
})], null),new cljs.core.Keyword("event","mark-complete","event/mark-complete",-256617070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
})], null),new cljs.core.Keyword("event","route-denied","event/route-denied",-1177347564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null)], null);
com.fulcrologic.rad.form.mark_all_complete_BANG_ = (function com$fulcrologic$rad$form$mark_all_complete_BANG_(master_form_instance){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(master_form_instance,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form_instance)),new cljs.core.Keyword("event","mark-complete","event/mark-complete",-256617070));
});
/**
 * Create any to-one referenced entities that did not load, but which are marked as auto-create.
 */
com.fulcrologic.rad.form.auto_create_to_one = (function com$fulcrologic$rad$form$auto_create_to_one(p__75823){
var map__75824 = p__75823;
var map__75824__$1 = (((((!((map__75824 == null))))?(((((map__75824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75824):map__75824);
var env = map__75824__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75824__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_ident);
var map__75826 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__75826__$1 = (((((!((map__75826 == null))))?(((((map__75826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75826):map__75826);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75826__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75826__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var possible_keys = cljs.core.set(cljs.core.keys(subforms));
var attrs_to_create = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__75828){
var map__75829 = p__75828;
var map__75829__$1 = (((((!((map__75829 == null))))?(((((map__75829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75829):map__75829);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75829__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75829__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75829__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
return ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,new cljs.core.Keyword("com.fulcrologic.rad.form","autocreate-on-load?","com.fulcrologic.rad.form/autocreate-on-load?",-1412919550)], null)) === true) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_value,qualified_key) == null)) && (cljs.core.contains_QMARK_(possible_keys,qualified_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"one","one",935007904))) || ((cardinality == null)))));
})),attributes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__75831){
var map__75832 = p__75831;
var map__75832__$1 = (((((!((map__75832 == null))))?(((((map__75832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75832):map__75832);
var _attr = map__75832__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75832__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75832__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
var map__75834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,qualified_key);
var map__75834__$1 = (((((!((map__75834 == null))))?(((((map__75834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75834):map__75834);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75834__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var new_entity = com.fulcrologic.rad.form.default_state(ui,id);
var new_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,id], null);
if(cljs.core.truth_(ui)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,989,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::form/ui missing in subforms for autocreate target",qualified_key], null);
}),null)),null,430333102,null);
}

if(cljs.core.truth_(target)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,990,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference attribute is missing ::attr/target",qualified_key], null);
}),null)),null,-1018309312,null);
}

return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env__$1,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,qualified_key),new_ident], 0)),cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ident,new_entity], 0));
}),env,attrs_to_create);
});
/**
 * Run the given `(xform ui-props)` against the current ui props of `component-class`'s instance at `component-ident`
 *   in `state-map`. Returns an updated state map with the transformed ui-props re-normalized and merged back into app state.
 */
com.fulcrologic.rad.form.update_tree_STAR_ = (function com$fulcrologic$rad$form$update_tree_STAR_(state_map,xform,component_class,component_ident){
if(cljs.core.truth_((function (){var and__4115__auto__ = xform;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = component_class;
if(cljs.core.truth_(and__4115__auto____$1)){
return component_ident;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var ui_props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,component_class,component_ident);
var new_ui_props = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(ui_props) : xform.call(null,ui_props));
var new_state_map = com.fulcrologic.fulcro.algorithms.merge.merge_component(state_map,component_class,new_ui_props);
return new_state_map;
} else {
return state_map;
}
});
/**
 * Apply derived calcuations to the form using the UISM env of the master form. Derived calculations are configured on
 * the form via `::form/triggers` `:derive-fields` function (a fn of ui props that must return new ui props).
 * 
 * Derived field calculations are first performed on the (sub)form on which the attribute that changed exists, and then
 * via any defined trigger on the master form (assuming it isn't the same form).
 * 
 * The `:derive-fields` functions should be pure functions.
 */
com.fulcrologic.rad.form.apply_derived_calculations = (function com$fulcrologic$rad$form$apply_derived_calculations(p__75837){
var map__75838 = p__75837;
var map__75838__$1 = (((((!((map__75838 == null))))?(((((map__75838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75838):map__75838);
var env = map__75838__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75838__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__75840 = event_data;
var map__75840__$1 = (((((!((map__75840 == null))))?(((((map__75840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75840):map__75840);
var form_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75840__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75840__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
var form_class = (function (){var G__75846 = form_key;
if((G__75846 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__75846) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__75846));
}
})();
var master_form_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var master_form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75841 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(master_form_class) : com.fulcrologic.fulcro.components.component_options.call(null,master_form_class));
var map__75841__$1 = (((((!((map__75841 == null))))?(((((map__75841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75841):map__75841);
var map__75842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75841__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75842__$1 = (((((!((map__75842 == null))))?(((((map__75842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75842):map__75842);
var master_derive_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75842__$1,new cljs.core.Keyword(null,"derive-fields","derive-fields",1006749330));
var map__75843 = (function (){var G__75849 = form_class;
if((G__75849 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75849) : com.fulcrologic.fulcro.components.component_options.call(null,G__75849));
}
})();
var map__75843__$1 = (((((!((map__75843 == null))))?(((((map__75843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75843):map__75843);
var map__75844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75843__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75844__$1 = (((((!((map__75844 == null))))?(((((map__75844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75844):map__75844);
var derive_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75844__$1,new cljs.core.Keyword(null,"derive-fields","derive-fields",1006749330));
var G__75852 = env;
var G__75852__$1 = (cljs.core.truth_(derive_fields)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75852,com.fulcrologic.rad.form.update_tree_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([derive_fields,form_class,form_ident], 0)):G__75852);
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(master_form_class,form_class))?master_derive_fields:false))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75852__$1,com.fulcrologic.rad.form.update_tree_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_derive_fields,master_form_class,master_form_ident], 0));
} else {
return G__75852__$1;
}
});
/**
 * UISM handler for invoking a form's `initialize-ui-props` option.
 */
com.fulcrologic.rad.form.handle_user_ui_props = (function com$fulcrologic$rad$form$handle_user_ui_props(p__75853,FormClass,form_ident){
var map__75854 = p__75853;
var map__75854__$1 = (((((!((map__75854 == null))))?(((((map__75854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75854):map__75854);
var env = map__75854__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__75856 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__75856__$1 = (((((!((map__75856 == null))))?(((((map__75856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75856):map__75856);
var initialize_ui_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75856__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initialize-ui-props","com.fulcrologic.rad.form/initialize-ui-props",-1823698482));
if(cljs.core.truth_(initialize_ui_props)){
var denorm_props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,FormClass,form_ident);
var predefined_keys = cljs.core.set(cljs.core.keys(denorm_props));
var ui_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(initialize_ui_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,denorm_props], 0));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(FormClass,state_map);
var k__GT_component = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__75858){
var map__75859 = p__75858;
var map__75859__$1 = (((((!((map__75859 == null))))?(((((map__75859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75859):map__75859);
var _node = map__75859__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75859__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75859__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_(component)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,component]);
} else {
return null;
}
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
var all_keys = cljs.core.set(cljs.core.keys(ui_props));
var allowed_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_keys,predefined_keys);
var populate_data = (function (sm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
var raw_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_props,k);
var c = (k__GT_component.cljs$core$IFn$_invoke$arity$1 ? k__GT_component.cljs$core$IFn$_invoke$arity$1(k) : k__GT_component.call(null,k));
var component_ident = (cljs.core.truth_(c)?(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(c,raw_value) : com.fulcrologic.fulcro.components.get_ident.call(null,c,raw_value)):null);
var value_to_place = (cljs.core.truth_((function (){var and__4115__auto__ = c;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.vector_QMARK_(component_ident)) && ((!((cljs.core.second(component_ident) == null)))));
} else {
return and__4115__auto__;
}
})())?component_ident:raw_value);
var G__75861 = cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,k),value_to_place);
if(cljs.core.truth_(c)){
return com.fulcrologic.fulcro.algorithms.merge.merge_component(G__75861,c,raw_value);
} else {
return G__75861;
}
}),sm,allowed_keys);
});
return com.fulcrologic.fulcro.ui_state_machines.apply_action(env,populate_data);
} else {
return env;
}
});
com.fulcrologic.rad.form.protected_on_change = (function com$fulcrologic$rad$form$protected_on_change(env,on_change,form_ident,qualified_key,old_value,value){
var new_env = (on_change.cljs$core$IFn$_invoke$arity$5 ? on_change.cljs$core$IFn$_invoke$arity$5(env,form_ident,qualified_key,old_value,value) : on_change.call(null,env,form_ident,qualified_key,old_value,value));
if((((new_env == null)) || (cljs.core.contains_QMARK_(new_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138))))){
return new_env;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1065,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invalid on-change handler! It MUST return an updated env!"], null);
}),null)),null,-596502566,null);

return env;
}
});
com.fulcrologic.rad.form.run_on_saved = (function com$fulcrologic$rad$form$run_on_saved(env){
try{var vec__75863 = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var id_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75863,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75863,(1),null);
var form_ident = vec__75863;
var map__75866 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__75866__$1 = (((((!((map__75866 == null))))?(((((map__75866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75866):map__75866);
var on_saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75866__$1,new cljs.core.Keyword(null,"on-saved","on-saved",1116356889));
var on_saved__$1 = (cljs.core.truth_(on_saved)?(function (){var map__75868 = edn_query_language.core.query__GT_ast(on_saved);
var map__75868__$1 = (((((!((map__75868 == null))))?(((((map__75868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75868):map__75868);
var ast = map__75868__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__75870){
var map__75871 = p__75870;
var map__75871__$1 = (((((!((map__75871 == null))))?(((((map__75871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75871):map__75871);
var node = map__75871__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75871__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"call","call",-519999866))){
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),id_key], null),id);
} else {
return node;
}
}),children));
var txn = edn_query_language.core.ast__GT_query(new_ast);
return txn;
})():null);
if(cljs.core.seq(on_saved__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1085,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running on-saved tx:",on_saved__$1], null);
}),null)),null,-549974173,null);

return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(env,on_saved__$1);
} else {
return env;
}
}catch (e75862){var e = e75862;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1089,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Could not run the on-saved transaction"], null);
}),null)),null,272120080,null);
}});
com.fulcrologic.rad.form.form_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"confirmation-message","confirmation-message",-1177008026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("ui","confirmation-message","ui/confirmation-message",-1177012486)], null),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__75881 = env;
var map__75881__$1 = (((((!((map__75881 == null))))?(((((map__75881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75881):map__75881);
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75881__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__75882 = event_data;
var map__75882__$1 = (((((!((map__75882 == null))))?(((((map__75882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75882):map__75882);
var create_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75882__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75883 = (function (){var G__75888 = Form;
if((G__75888 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75888) : com.fulcrologic.fulcro.components.component_options.call(null,G__75888));
}
})();
var map__75883__$1 = (((((!((map__75883 == null))))?(((((map__75883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75883):map__75883);
var map__75884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75883__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75884__$1 = (((((!((map__75884 == null))))?(((((map__75884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75884):map__75884);
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75884__$1,new cljs.core.Keyword(null,"started","started",585705024));
var G__75891 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"options","options",99638489),event_data);
var G__75891__$1 = (cljs.core.truth_(create_QMARK_)?com.fulcrologic.rad.form.start_create(G__75891,event_data):G__75891);
var G__75891__$2 = ((cljs.core.not(create_QMARK_))?com.fulcrologic.rad.form.start_edit(G__75891__$1,event_data):G__75891__$1);
if(cljs.core.fn_QMARK_(started)){
return (started.cljs$core$IFn$_invoke$arity$2 ? started.cljs$core$IFn$_invoke$arity$2(G__75891__$2,form_ident) : started.call(null,G__75891__$2,form_ident));
} else {
return G__75891__$2;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75892){
var map__75893 = p__75892;
var map__75893__$1 = (((((!((map__75893 == null))))?(((((map__75893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75893):map__75893);
var env = map__75893__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75893__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1118,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loaded. Marking the form complete."], null);
}),null)),null,1784169519,null);

var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var routeable_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass)),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703)));
var route_pending_QMARK_ = ((routeable_QMARK_) && ((!((com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,form_ident) == null)))));
return com.fulcrologic.fulcro.ui_state_machines.activate((function (){var G__75895 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.handle_user_ui_props(com.fulcrologic.rad.form.auto_create_to_one(com.fulcrologic.rad.form.clear_server_errors(env)),FormClass,form_ident),com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destructive?","destructive?",1136140718),true], null)], 0)),com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
if(route_pending_QMARK_){
return com.fulcrologic.rad.form.route_target_ready(G__75895,form_ident);
} else {
return G__75895;
}
})(),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Load failed."], null)], null));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","asking-to-discard-changes","state/asking-to-discard-changes",-2141307476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","ok","event/ok",803597750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","saving","state/saving",-726221934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__75896 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__75896__$1 = (((((!((map__75896 == null))))?(((((map__75896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75896):map__75896);
var on_save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75896__$1,new cljs.core.Keyword(null,"on-save-failed","on-save-failed",-1229172380));
var errors = (function (){var G__75900 = env;
var G__75900__$1 = (((G__75900 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(G__75900));
var G__75900__$2 = (((G__75900__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-result","com.fulcrologic.fulcro.ui-state-machines/mutation-result",-1418456314).cljs$core$IFn$_invoke$arity$1(G__75900__$1));
var G__75900__$3 = (((G__75900__$2 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__75900__$2));
var G__75900__$4 = (((G__75900__$3 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__75900__$3,new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null)));
if((G__75900__$4 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443).cljs$core$IFn$_invoke$arity$1(G__75900__$4);
}
})();
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75897 = (function (){var G__75901 = Form;
if((G__75901 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75901) : com.fulcrologic.fulcro.components.component_options.call(null,G__75901));
}
})();
var map__75897__$1 = (((((!((map__75897 == null))))?(((((map__75897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75897):map__75897);
var map__75898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75897__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75898__$1 = (((((!((map__75898 == null))))?(((((map__75898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75898):map__75898);
var save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75898__$1,new cljs.core.Keyword(null,"save-failed","save-failed",616502634));
var G__75904 = com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
var G__75904__$1 = ((cljs.core.seq(errors))?com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__75904,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),errors):G__75904);
var G__75904__$2 = (cljs.core.truth_(save_failed)?(save_failed.cljs$core$IFn$_invoke$arity$2 ? save_failed.cljs$core$IFn$_invoke$arity$2(G__75904__$1,form_ident) : save_failed.call(null,G__75904__$1,form_ident)):G__75904__$1);
if(cljs.core.truth_(on_save_failed)){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(G__75904__$2,on_save_failed);
} else {
return G__75904__$2;
}
})], null),new cljs.core.Keyword("event","saved","event/saved",326086646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75905){
var map__75906 = p__75905;
var map__75906__$1 = (((((!((map__75906 == null))))?(((((map__75906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75906):map__75906);
var env = map__75906__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75906__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75908 = (function (){var G__75911 = Form;
if((G__75911 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75911) : com.fulcrologic.fulcro.components.component_options.call(null,G__75911));
}
})();
var map__75908__$1 = (((((!((map__75908 == null))))?(((((map__75908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75908):map__75908);
var map__75909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75908__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75909__$1 = (((((!((map__75909 == null))))?(((((map__75909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75909):map__75909);
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75909__$1,new cljs.core.Keyword(null,"saved","saved",288760660));
var map__75910 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__75910__$1 = (((((!((map__75910 == null))))?(((((map__75910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75910):map__75910);
var embedded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75910__$1,new cljs.core.Keyword(null,"embedded?","embedded?",298781012));
var use_history = ((cljs.core.not(embedded_QMARK_)) && (com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)));
if(use_history){
var map__75915_77471 = com.fulcrologic.rad.routing.history.current_route(fulcro_app);
var map__75915_77472__$1 = (((((!((map__75915_77471 == null))))?(((((map__75915_77471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75915_77471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75915_77471):map__75915_77471);
var route_77473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75915_77472__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params_77474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75915_77472__$1,new cljs.core.Keyword(null,"params","params",710516235));
var new_route_77475 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),route_77473)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form.edit_action,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(form_ident))], null));
com.fulcrologic.rad.routing.history.replace_route_BANG_(fulcro_app,new_route_77475,params_77474);
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.run_on_saved((function (){var G__75917 = env;
if(cljs.core.truth_(saved)){
return (saved.cljs$core$IFn$_invoke$arity$2 ? saved.cljs$core$IFn$_invoke$arity$2(G__75917,form_ident) : saved.call(null,G__75917,form_ident));
} else {
return G__75917;
}
})()),com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","editing","state/editing",1406008034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("event","attribute-changed","event/attribute-changed",-868443355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75918){
var map__75919 = p__75918;
var map__75919__$1 = (((((!((map__75919 == null))))?(((((map__75919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75919):map__75919);
var env = map__75919__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75919__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__75921 = event_data;
var map__75921__$1 = (((((!((map__75921 == null))))?(((((map__75921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75921):map__75921);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword(null,"old-value","old-value",862546795));
var form_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword(null,"value","value",305978217));
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75921__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var form_class = (function (){var G__75925 = form_key;
if((G__75925 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__75925) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__75925));
}
})();
var map__75922 = (function (){var G__75926 = form_class;
if((G__75926 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75926) : com.fulcrologic.fulcro.components.component_options.call(null,G__75926));
}
})();
var map__75922__$1 = (((((!((map__75922 == null))))?(((((map__75922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75922):map__75922);
var map__75923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75922__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75923__$1 = (((((!((map__75923 == null))))?(((((map__75923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75923):map__75923);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75923__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality);
var ref_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type);
var missing_QMARK_ = (value == null);
var value__$1 = ((((ref_QMARK_) && (many_QMARK_) && ((value == null))))?cljs.core.PersistentVector.EMPTY:((((many_QMARK_) && ((value == null))))?cljs.core.PersistentHashSet.EMPTY:((((ref_QMARK_) && (many_QMARK_)))?cljs.core.filterv((function (p1__75877_SHARP_){
return (!((cljs.core.second(p1__75877_SHARP_) == null)));
}),value):((ref_QMARK_)?(((cljs.core.second(value) == null))?null:value):value
))));
var path = (cljs.core.truth_((function (){var and__4115__auto__ = form_ident;
if(cljs.core.truth_(and__4115__auto__)){
return qualified_key;
} else {
return and__4115__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,qualified_key):null);
var mark_complete_QMARK_ = true;
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1205,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to record attribute change. Path cannot be calculated."], null);
}),null)),null,-1374478841,null);
}

if(((ref_QMARK_) && (many_QMARK_) && ((!(cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,value__$1)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1207,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-many attribute to incorrect type. Value should be a vector of idents:",qualified_key,value__$1], null);
}),null)),null,-1541574820,null);
} else {
}

if(((ref_QMARK_) && ((!(many_QMARK_))) && ((!(missing_QMARK_))) && ((!(edn_query_language.core.ident_QMARK_(value__$1)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1209,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-one attribute to incorrect type. Value should an ident:",qualified_key,value__$1], null);
}),null)),null,-1626334666,null);
} else {
}
} else {
}

return com.fulcrologic.rad.form.apply_derived_calculations((function (){var G__75929 = com.fulcrologic.rad.form.clear_server_errors(env);
var G__75929__$1 = ((mark_complete_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75929,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,qualified_key], 0)):G__75929);
var G__75929__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = path;
if(cljs.core.truth_(and__4115__auto__)){
return (value__$1 == null);
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75929__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,cljs.core.dissoc,qualified_key], 0)):G__75929__$1);
var G__75929__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = path;
if(cljs.core.truth_(and__4115__auto__)){
return (!((value__$1 == null)));
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75929__$2,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,value__$1], 0)):G__75929__$2);
if(cljs.core.truth_(on_change)){
return com.fulcrologic.rad.form.protected_on_change(G__75929__$3,on_change,form_ident,qualified_key,old_value,value__$1);
} else {
return G__75929__$3;
}
})());
})], null),new cljs.core.Keyword("event","blur","event/blur",448962841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null),new cljs.core.Keyword("event","add-row","event/add-row",335011085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75930){
var map__75931 = p__75930;
var map__75931__$1 = (((((!((map__75931 == null))))?(((((map__75931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75931):map__75931);
var env = map__75931__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75931__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75931__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__75933 = event_data;
var map__75933__$1 = (((((!((map__75933 == null))))?(((((map__75933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75933):map__75933);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75933__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75933__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75933__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75933__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75933__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initial-state","com.fulcrologic.rad.form/initial-state",-1829742723));
var default_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75933__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-overrides","com.fulcrologic.rad.form/default-overrides",-385856423));
var map__75934 = (function (){var G__75937 = parent;
if((G__75937 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75937) : com.fulcrologic.fulcro.components.component_options.call(null,G__75937));
}
})();
var map__75934__$1 = (((((!((map__75934 == null))))?(((((map__75934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75934):map__75934);
var map__75935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75934__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75935__$1 = (((((!((map__75935 == null))))?(((((map__75935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75935):map__75935);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75935__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var new_child = ((cljs.core.map_QMARK_(initial_state))?initial_state:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.default_state(child_class,com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0()),default_overrides], 0)));
var child_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(child_class,new_child) : com.fulcrologic.fulcro.components.get_ident.call(null,child_class,new_child));
var optional_keys = com.fulcrologic.rad.form.optional_fields(child_class);
var mark_fields_complete = (function (state_map__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3(s,child_ident,k);
}),state_map__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(optional_keys,cljs.core.keys(new_child)));
});
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change(com.fulcrologic.fulcro.ui_state_machines.apply_action(env,(function (s){
return mark_fields_complete(com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(s,child_class,new_child,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((many_QMARK_)?(function (){var or__4126__auto__ = order;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"append","append",-291298229);
}
})():new cljs.core.Keyword(null,"replace","replace",-786587770)),target_path], 0)),child_class,child_ident));
}))));
})], null),new cljs.core.Keyword("event","delete-row","event/delete-row",-1920896913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75940){
var map__75941 = p__75940;
var map__75941__$1 = (((((!((map__75941 == null))))?(((((map__75941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75941):map__75941);
var env = map__75941__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75941__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75941__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__75943 = event_data;
var map__75943__$1 = (((((!((map__75943 == null))))?(((((map__75943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75943):map__75943);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75943__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var child_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75943__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-ident","com.fulcrologic.rad.form/child-ident",-335397426));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75943__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75943__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var map__75944 = (function (){var G__75947 = parent;
if((G__75947 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75947) : com.fulcrologic.fulcro.components.component_options.call(null,G__75947));
}
})();
var map__75944__$1 = (((((!((map__75944 == null))))?(((((map__75944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75944):map__75944);
var map__75945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75944__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75945__$1 = (((((!((map__75945 == null))))?(((((map__75945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75945):map__75945);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75945__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var child_ident__$1 = (function (){var or__4126__auto__ = child_ident;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = form_instance;
if(cljs.core.truth_(and__4115__auto__)){
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
} else {
return and__4115__auto__;
}
}
})();
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
if(cljs.core.truth_(target_path)){
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change((function (){var G__75950 = env;
var G__75950__$1 = ((many_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75950,com.fulcrologic.fulcro.algorithms.normalized_state.remove_ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_ident__$1,target_path], 0)):G__75950);
if((!(many_QMARK_))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__75950__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_ident,cljs.core.dissoc,parent_relation], 0));
} else {
return G__75950__$1;
}
})()));
} else {
return null;
}
})], null),new cljs.core.Keyword("event","save","event/save",1752120523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75951){
var map__75952 = p__75951;
var map__75952__$1 = (((((!((map__75952 == null))))?(((((map__75952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75952):map__75952);
var env = map__75952__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75952__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75952__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var form_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75954 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_options.call(null,form_class));
var map__75954__$1 = (((((!((map__75954 == null))))?(((((map__75954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75954):map__75954);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75954__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var save_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75954__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","save-mutation","com.fulcrologic.rad.form/save-mutation",680293905));
var master_pk = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id);
var proposed_form_props = com.fulcrologic.fulcro.algorithms.form_state.completed_form_props(state_map,form_class,form_ident);
if(cljs.core.truth_((com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_class,proposed_form_props) : com.fulcrologic.rad.form.valid_QMARK_.call(null,form_class,proposed_form_props)))){
var data_to_save = com.fulcrologic.rad.form.calc_diff(env);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data,data_to_save], 0));
var save_mutation__$1 = (function (){var or__4126__auto__ = save_mutation;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null);
}
})();
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.trigger_remote_mutation(com.fulcrologic.rad.form.clear_server_errors(env),new cljs.core.Keyword("actor","form","actor/form",-1666413564),save_mutation__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),master_pk,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(form_ident),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),form_class,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","saved","event/saved",326086646)], null)], 0))),new cljs.core.Keyword("state","saving","state/saving",-726221934));
} else {
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
}
})], null),new cljs.core.Keyword("event","reset","event/reset",-705072700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.clear_server_errors(env),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
})], null),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null)], null)], 0))], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.form","form-machine","com.fulcrologic.rad.form/form-machine",-1050751722,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.form","form-machine","com.fulcrologic.rad.form/form-machine",-1050751722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"confirmation-message","confirmation-message",-1177008026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("ui","confirmation-message","ui/confirmation-message",-1177012486)], null),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__75956 = env;
var map__75956__$1 = (((((!((map__75956 == null))))?(((((map__75956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75956):map__75956);
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75956__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__75957 = event_data;
var map__75957__$1 = (((((!((map__75957 == null))))?(((((map__75957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75957):map__75957);
var create_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75957__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75958 = (function (){var G__75962 = Form;
if((G__75962 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75962) : com.fulcrologic.fulcro.components.component_options.call(null,G__75962));
}
})();
var map__75958__$1 = (((((!((map__75958 == null))))?(((((map__75958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75958):map__75958);
var map__75959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75958__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75959__$1 = (((((!((map__75959 == null))))?(((((map__75959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75959):map__75959);
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75959__$1,new cljs.core.Keyword(null,"started","started",585705024));
var G__75965 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"options","options",99638489),event_data);
var G__75965__$1 = (cljs.core.truth_(create_QMARK_)?com.fulcrologic.rad.form.start_create(G__75965,event_data):G__75965);
var G__75965__$2 = ((cljs.core.not(create_QMARK_))?com.fulcrologic.rad.form.start_edit(G__75965__$1,event_data):G__75965__$1);
if(cljs.core.fn_QMARK_(started)){
return (started.cljs$core$IFn$_invoke$arity$2 ? started.cljs$core$IFn$_invoke$arity$2(G__75965__$2,form_ident) : started.call(null,G__75965__$2,form_ident));
} else {
return G__75965__$2;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75966){
var map__75967 = p__75966;
var map__75967__$1 = (((((!((map__75967 == null))))?(((((map__75967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75967):map__75967);
var env = map__75967__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75967__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1118,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loaded. Marking the form complete."], null);
}),null)),null,-435981155,null);

var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var routeable_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass)),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703)));
var route_pending_QMARK_ = ((routeable_QMARK_) && ((!((com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,form_ident) == null)))));
return com.fulcrologic.fulcro.ui_state_machines.activate((function (){var G__75969 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.handle_user_ui_props(com.fulcrologic.rad.form.auto_create_to_one(com.fulcrologic.rad.form.clear_server_errors(env)),FormClass,form_ident),com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destructive?","destructive?",1136140718),true], null)], 0)),com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
if(route_pending_QMARK_){
return com.fulcrologic.rad.form.route_target_ready(G__75969,form_ident);
} else {
return G__75969;
}
})(),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Load failed."], null)], null));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","asking-to-discard-changes","state/asking-to-discard-changes",-2141307476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","ok","event/ok",803597750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","saving","state/saving",-726221934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__75970 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__75970__$1 = (((((!((map__75970 == null))))?(((((map__75970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75970):map__75970);
var on_save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75970__$1,new cljs.core.Keyword(null,"on-save-failed","on-save-failed",-1229172380));
var errors = (function (){var G__75974 = env;
var G__75974__$1 = (((G__75974 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(G__75974));
var G__75974__$2 = (((G__75974__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-result","com.fulcrologic.fulcro.ui-state-machines/mutation-result",-1418456314).cljs$core$IFn$_invoke$arity$1(G__75974__$1));
var G__75974__$3 = (((G__75974__$2 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__75974__$2));
var G__75974__$4 = (((G__75974__$3 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__75974__$3,new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null)));
if((G__75974__$4 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443).cljs$core$IFn$_invoke$arity$1(G__75974__$4);
}
})();
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75971 = (function (){var G__75975 = Form;
if((G__75975 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75975) : com.fulcrologic.fulcro.components.component_options.call(null,G__75975));
}
})();
var map__75971__$1 = (((((!((map__75971 == null))))?(((((map__75971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75971):map__75971);
var map__75972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75971__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75972__$1 = (((((!((map__75972 == null))))?(((((map__75972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75972):map__75972);
var save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75972__$1,new cljs.core.Keyword(null,"save-failed","save-failed",616502634));
var G__75978 = com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
var G__75978__$1 = ((cljs.core.seq(errors))?com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__75978,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),errors):G__75978);
var G__75978__$2 = (cljs.core.truth_(save_failed)?(save_failed.cljs$core$IFn$_invoke$arity$2 ? save_failed.cljs$core$IFn$_invoke$arity$2(G__75978__$1,form_ident) : save_failed.call(null,G__75978__$1,form_ident)):G__75978__$1);
if(cljs.core.truth_(on_save_failed)){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(G__75978__$2,on_save_failed);
} else {
return G__75978__$2;
}
})], null),new cljs.core.Keyword("event","saved","event/saved",326086646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75979){
var map__75980 = p__75979;
var map__75980__$1 = (((((!((map__75980 == null))))?(((((map__75980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75980):map__75980);
var env = map__75980__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75980__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__75982 = (function (){var G__75985 = Form;
if((G__75985 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__75985) : com.fulcrologic.fulcro.components.component_options.call(null,G__75985));
}
})();
var map__75982__$1 = (((((!((map__75982 == null))))?(((((map__75982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75982):map__75982);
var map__75983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75982__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75983__$1 = (((((!((map__75983 == null))))?(((((map__75983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75983):map__75983);
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75983__$1,new cljs.core.Keyword(null,"saved","saved",288760660));
var map__75984 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__75984__$1 = (((((!((map__75984 == null))))?(((((map__75984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75984):map__75984);
var embedded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75984__$1,new cljs.core.Keyword(null,"embedded?","embedded?",298781012));
var use_history = ((cljs.core.not(embedded_QMARK_)) && (com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)));
if(use_history){
var map__75989_77571 = com.fulcrologic.rad.routing.history.current_route(fulcro_app);
var map__75989_77572__$1 = (((((!((map__75989_77571 == null))))?(((((map__75989_77571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75989_77571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75989_77571):map__75989_77571);
var route_77573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75989_77572__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params_77574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75989_77572__$1,new cljs.core.Keyword(null,"params","params",710516235));
var new_route_77575 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),route_77573)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form.edit_action,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(form_ident))], null));
com.fulcrologic.rad.routing.history.replace_route_BANG_(fulcro_app,new_route_77575,params_77574);
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.run_on_saved((function (){var G__75991 = env;
if(cljs.core.truth_(saved)){
return (saved.cljs$core$IFn$_invoke$arity$2 ? saved.cljs$core$IFn$_invoke$arity$2(G__75991,form_ident) : saved.call(null,G__75991,form_ident));
} else {
return G__75991;
}
})()),com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","editing","state/editing",1406008034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("event","attribute-changed","event/attribute-changed",-868443355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__75992){
var map__75993 = p__75992;
var map__75993__$1 = (((((!((map__75993 == null))))?(((((map__75993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75993):map__75993);
var env = map__75993__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75993__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__75995 = event_data;
var map__75995__$1 = (((((!((map__75995 == null))))?(((((map__75995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75995):map__75995);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword(null,"old-value","old-value",862546795));
var form_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword(null,"value","value",305978217));
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75995__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var form_class = (function (){var G__75999 = form_key;
if((G__75999 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__75999) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__75999));
}
})();
var map__75996 = (function (){var G__76000 = form_class;
if((G__76000 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__76000) : com.fulcrologic.fulcro.components.component_options.call(null,G__76000));
}
})();
var map__75996__$1 = (((((!((map__75996 == null))))?(((((map__75996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75996):map__75996);
var map__75997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75996__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__75997__$1 = (((((!((map__75997 == null))))?(((((map__75997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75997):map__75997);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75997__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality);
var ref_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type);
var missing_QMARK_ = (value == null);
var value__$1 = ((((ref_QMARK_) && (many_QMARK_) && ((value == null))))?cljs.core.PersistentVector.EMPTY:((((many_QMARK_) && ((value == null))))?cljs.core.PersistentHashSet.EMPTY:((((ref_QMARK_) && (many_QMARK_)))?cljs.core.filterv((function (p1__75877_SHARP_){
return (!((cljs.core.second(p1__75877_SHARP_) == null)));
}),value):((ref_QMARK_)?(((cljs.core.second(value) == null))?null:value):value
))));
var path = (cljs.core.truth_((function (){var and__4115__auto__ = form_ident;
if(cljs.core.truth_(and__4115__auto__)){
return qualified_key;
} else {
return and__4115__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,qualified_key):null);
var mark_complete_QMARK_ = true;
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1205,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to record attribute change. Path cannot be calculated."], null);
}),null)),null,902123458,null);
}

if(((ref_QMARK_) && (many_QMARK_) && ((!(cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,value__$1)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1207,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-many attribute to incorrect type. Value should be a vector of idents:",qualified_key,value__$1], null);
}),null)),null,915698415,null);
} else {
}

if(((ref_QMARK_) && ((!(many_QMARK_))) && ((!(missing_QMARK_))) && ((!(edn_query_language.core.ident_QMARK_(value__$1)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1209,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-one attribute to incorrect type. Value should an ident:",qualified_key,value__$1], null);
}),null)),null,-85785623,null);
} else {
}
} else {
}

return com.fulcrologic.rad.form.apply_derived_calculations((function (){var G__76003 = com.fulcrologic.rad.form.clear_server_errors(env);
var G__76003__$1 = ((mark_complete_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__76003,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,qualified_key], 0)):G__76003);
var G__76003__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = path;
if(cljs.core.truth_(and__4115__auto__)){
return (value__$1 == null);
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__76003__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,cljs.core.dissoc,qualified_key], 0)):G__76003__$1);
var G__76003__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = path;
if(cljs.core.truth_(and__4115__auto__)){
return (!((value__$1 == null)));
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__76003__$2,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,value__$1], 0)):G__76003__$2);
if(cljs.core.truth_(on_change)){
return com.fulcrologic.rad.form.protected_on_change(G__76003__$3,on_change,form_ident,qualified_key,old_value,value__$1);
} else {
return G__76003__$3;
}
})());
})], null),new cljs.core.Keyword("event","blur","event/blur",448962841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null),new cljs.core.Keyword("event","add-row","event/add-row",335011085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__76004){
var map__76005 = p__76004;
var map__76005__$1 = (((((!((map__76005 == null))))?(((((map__76005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76005):map__76005);
var env = map__76005__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76005__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76005__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__76007 = event_data;
var map__76007__$1 = (((((!((map__76007 == null))))?(((((map__76007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76007):map__76007);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76007__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76007__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76007__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76007__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76007__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initial-state","com.fulcrologic.rad.form/initial-state",-1829742723));
var default_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76007__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-overrides","com.fulcrologic.rad.form/default-overrides",-385856423));
var map__76008 = (function (){var G__76011 = parent;
if((G__76011 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__76011) : com.fulcrologic.fulcro.components.component_options.call(null,G__76011));
}
})();
var map__76008__$1 = (((((!((map__76008 == null))))?(((((map__76008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76008):map__76008);
var map__76009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76008__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__76009__$1 = (((((!((map__76009 == null))))?(((((map__76009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76009):map__76009);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76009__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var new_child = ((cljs.core.map_QMARK_(initial_state))?initial_state:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.default_state(child_class,com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0()),default_overrides], 0)));
var child_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(child_class,new_child) : com.fulcrologic.fulcro.components.get_ident.call(null,child_class,new_child));
var optional_keys = com.fulcrologic.rad.form.optional_fields(child_class);
var mark_fields_complete = (function (state_map__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3(s,child_ident,k);
}),state_map__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(optional_keys,cljs.core.keys(new_child)));
});
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change(com.fulcrologic.fulcro.ui_state_machines.apply_action(env,(function (s){
return mark_fields_complete(com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(s,child_class,new_child,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((many_QMARK_)?(function (){var or__4126__auto__ = order;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"append","append",-291298229);
}
})():new cljs.core.Keyword(null,"replace","replace",-786587770)),target_path], 0)),child_class,child_ident));
}))));
})], null),new cljs.core.Keyword("event","delete-row","event/delete-row",-1920896913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__76014){
var map__76015 = p__76014;
var map__76015__$1 = (((((!((map__76015 == null))))?(((((map__76015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76015):map__76015);
var env = map__76015__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76015__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76015__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__76017 = event_data;
var map__76017__$1 = (((((!((map__76017 == null))))?(((((map__76017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76017):map__76017);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76017__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var child_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76017__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-ident","com.fulcrologic.rad.form/child-ident",-335397426));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76017__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76017__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var map__76018 = (function (){var G__76021 = parent;
if((G__76021 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__76021) : com.fulcrologic.fulcro.components.component_options.call(null,G__76021));
}
})();
var map__76018__$1 = (((((!((map__76018 == null))))?(((((map__76018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76018):map__76018);
var map__76019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76018__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__76019__$1 = (((((!((map__76019 == null))))?(((((map__76019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76019):map__76019);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76019__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var child_ident__$1 = (function (){var or__4126__auto__ = child_ident;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = form_instance;
if(cljs.core.truth_(and__4115__auto__)){
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
} else {
return and__4115__auto__;
}
}
})();
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
if(cljs.core.truth_(target_path)){
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change((function (){var G__76024 = env;
var G__76024__$1 = ((many_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__76024,com.fulcrologic.fulcro.algorithms.normalized_state.remove_ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_ident__$1,target_path], 0)):G__76024);
if((!(many_QMARK_))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__76024__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_ident,cljs.core.dissoc,parent_relation], 0));
} else {
return G__76024__$1;
}
})()));
} else {
return null;
}
})], null),new cljs.core.Keyword("event","save","event/save",1752120523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__76025){
var map__76026 = p__76025;
var map__76026__$1 = (((((!((map__76026 == null))))?(((((map__76026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76026):map__76026);
var env = map__76026__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76026__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76026__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var form_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__76028 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_options.call(null,form_class));
var map__76028__$1 = (((((!((map__76028 == null))))?(((((map__76028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76028):map__76028);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76028__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var save_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76028__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","save-mutation","com.fulcrologic.rad.form/save-mutation",680293905));
var master_pk = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id);
var proposed_form_props = com.fulcrologic.fulcro.algorithms.form_state.completed_form_props(state_map,form_class,form_ident);
if(cljs.core.truth_((com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_class,proposed_form_props) : com.fulcrologic.rad.form.valid_QMARK_.call(null,form_class,proposed_form_props)))){
var data_to_save = com.fulcrologic.rad.form.calc_diff(env);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data,data_to_save], 0));
var save_mutation__$1 = (function (){var or__4126__auto__ = save_mutation;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null);
}
})();
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.trigger_remote_mutation(com.fulcrologic.rad.form.clear_server_errors(env),new cljs.core.Keyword("actor","form","actor/form",-1666413564),save_mutation__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),master_pk,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(form_ident),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),form_class,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","saved","event/saved",326086646)], null)], 0))),new cljs.core.Keyword("state","saving","state/saving",-726221934));
} else {
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
}
})], null),new cljs.core.Keyword("event","reset","event/reset",-705072700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.clear_server_errors(env),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
})], null),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null)], null)], 0))], null)], null)], null));
/**
 * Trigger a save on the given form rendering env. `addl-save-params` is a map of data that can
 * optionally be included in the form's save, which will be available to the server-side mutation
 * (and therefore save middleware). Defaults to whatever the form's `fo/save-params` has.
 */
com.fulcrologic.rad.form.save_BANG_ = (function com$fulcrologic$rad$form$save_BANG_(var_args){
var G__76031 = arguments.length;
switch (G__76031) {
case 1:
return com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__76032){
var map__76033 = p__76032;
var map__76033__$1 = (((((!((map__76033 == null))))?(((((map__76033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76033):map__76033);
var form_rendering_env = map__76033__$1;
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76033__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var save_params = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","save-params","com.fulcrologic.rad.form/save-params",-307782477)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","save-params","com.fulcrologic.rad.form/save-params",-307782477)));
var params = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(save_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_rendering_env], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$2(form_rendering_env,params);
}));

(com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__76035,addl_save_params){
var map__76036 = p__76035;
var map__76036__$1 = (((((!((map__76036 == null))))?(((((map__76036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76036):map__76036);
var _form_rendering_env = map__76036__$1;
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76036__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","save","event/save",1752120523),addl_save_params);
}));

(com.fulcrologic.rad.form.save_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Trigger an undo of all changes on the given form rendering env.
 */
com.fulcrologic.rad.form.undo_all_BANG_ = (function com$fulcrologic$rad$form$undo_all_BANG_(p__76038){
var map__76039 = p__76038;
var map__76039__$1 = (((((!((map__76039 == null))))?(((((map__76039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76039):map__76039);
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76039__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","reset","event/reset",-705072700),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Trigger a cancel of all changes on the given form rendering env. This is like undo, but attempts to route away from
 * the form.
 */
com.fulcrologic.rad.form.cancel_BANG_ = (function com$fulcrologic$rad$form$cancel_BANG_(p__76041){
var map__76042 = p__76041;
var map__76042__$1 = (((((!((map__76042 == null))))?(((((map__76042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76042):map__76042);
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76042__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Add a child.
 * 
 *   * form-instance - The form that has the relation to the children. E.g. `this` of a `Person`.
 *   * parent-relation - The keyword of the join to the children. E.g. `:person/addresses`
 *   * ChildForm - The form UI component that represents the child form.
 *   * options - Additional options. Currently only supports `::form/order`, which defaults to `:prepend`.
 * 
 *   If you pass just an `env`, then you must manually augment it with:
 * 
 *   ```
 *   (form/add-child! (assoc env
 *                   ::form/order :prepend
 *                   ::form/parent-relation :person/addresses
 *                   ::form/parent form-instance
 *                   ::form/child-class ui))
 *   ```
 * 
 *   See renderers for usage examples.
 * 
 *   If you use the variant `form-instance`, then the `options` are (the can be non-namespaced, or use ::form/...):
 * 
 *   :order - :prepend of :append (default)
 *   :initial-state - A map that will be used for the new child (YOU MUST add a tempid ID to this map. It will not use default-state at all)
 *   :default-overrides - A map that will be merged into the calculated `default-state` of the new child. (NOT USED if you
 *  supply `:initial-state`).
 * 
 *   The options can also include any keyword you want (namespaced preferred) and will appear in event-data of the state
 *   machine (useful if you customized the state machine). NOTE: The above three options will be renamed to include the ::form
 *   namespace when passed through to the state machine.
 *   
 */
com.fulcrologic.rad.form.add_child_BANG_ = (function com$fulcrologic$rad$form$add_child_BANG_(var_args){
var G__76045 = arguments.length;
switch (G__76045) {
case 1:
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__76046){
var map__76047 = p__76046;
var map__76047__$1 = (((((!((map__76047 == null))))?(((((map__76047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76047):map__76047);
var env = map__76047__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76047__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,asm_id,new cljs.core.Keyword("event","add-row","event/add-row",335011085),env);
}));

(com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (form_instance,parent_relation,ChildForm){
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,parent_relation,ChildForm,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (form_instance,parent_relation,ChildForm,p__76049){
var map__76050 = p__76049;
var map__76050__$1 = (((((!((map__76050 == null))))?(((((map__76050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76050):map__76050);
var options = map__76050__$1;
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76050__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76050__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var default_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76050__$1,new cljs.core.Keyword(null,"default-overrides","default-overrides",-40890186));
var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(form_instance);
var options__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"default-overrides","default-overrides",-40890186)], 0));
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403),new cljs.core.Keyword(null,"prepend","prepend",342616040)], null),options__$1,(function (){var G__76052 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),parent_relation,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564),ChildForm], null);
var G__76052__$1 = (cljs.core.truth_(order)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76052,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403),order):G__76052);
var G__76052__$2 = (cljs.core.truth_(initial_state)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76052__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initial-state","com.fulcrologic.rad.form/initial-state",-1829742723),initial_state):G__76052__$1);
if(cljs.core.truth_(default_overrides)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76052__$2,new cljs.core.Keyword("com.fulcrologic.rad.form","default-overrides","com.fulcrologic.rad.form/default-overrides",-385856423),default_overrides);
} else {
return G__76052__$2;
}
})()], 0)));
}));

(com.fulcrologic.rad.form.add_child_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Delete the current form instance from the parent relation of its containing form. You may pass either a
 * rendering env (if you've constructed one via `rendering-env` in the current form) or `this` OF THE
 * ITEM THAT IS TO BE DELETED.
 * 
 * If you want to use this FROM the parent, then you have to pass the parent-instance, parent-relation,
 * and child ident to remove.
 * 
 * NOTE: This removes the child from the form. You are responsible for augmenting save middleware to
 * actually completely remove the child from the database since there is no way from the form or base
 * model to know if removing a relationship to the child should also remove the child itself.
 * 
 * See also `delete!` for deleting the top-level (entire) form/entity.
 * 
 */
com.fulcrologic.rad.form.delete_child_BANG_ = (function com$fulcrologic$rad$form$delete_child_BANG_(var_args){
var G__76054 = arguments.length;
switch (G__76054) {
case 1:
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this_or_rendering_env){
var map__76055 = ((com.fulcrologic.fulcro.components.component_instance_QMARK_(this_or_rendering_env))?com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(this_or_rendering_env):this_or_rendering_env);
var map__76055__$1 = (((((!((map__76055 == null))))?(((((map__76055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76055):map__76055);
var env = map__76055__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76055__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,asm_id,new cljs.core.Keyword("event","delete-row","event/delete-row",-1920896913),env);
}));

(com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (parent_instance,relation_key,child_ident){
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(parent_instance),new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),parent_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),relation_key,new cljs.core.Keyword("com.fulcrologic.rad.form","child-ident","com.fulcrologic.rad.form/child-ident",-335397426),child_ident], 0));
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
}));

(com.fulcrologic.rad.form.delete_child_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if the given attribute is meant to show up as read only on the given form instance. Attributes
 *   configure this by placing a boolean value (or function returning boolean) on the attribute at `::attr/read-only?`.
 * 
 *   The form's options may also include `::form/read-only-fields` as a set (or a function returning a set) of the keys that should
 *   currently be considered read-only. If it is a function it will only be passed the form instance.
 * 
 *   If the form has a `::form/read-only?` option that is `true` (or a `(fn [form-instance] boolean?)` that returns true) then
 *   *everything* on the form will be read-only.
 * 
 *   If you use a function for read only detection it will be passed the `form-instance` and the `attribute` being
 *   checked. You may reach into app state to examine things, but beware that doing so may not dynamically update
 *   as you'd expect.
 */
com.fulcrologic.rad.form.read_only_QMARK_ = (function com$fulcrologic$rad$form$read_only_QMARK_(form_instance,p__76057){
var map__76058 = p__76057;
var map__76058__$1 = (((((!((map__76058 == null))))?(((((map__76058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76058):map__76058);
var attr = map__76058__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76058__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var identity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76058__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","identity?","com.fulcrologic.rad.attributes/identity?",-576130258));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76058__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","read-only?","com.fulcrologic.rad.attributes/read-only?",-2011172282));
var computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76058__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-value","com.fulcrologic.rad.attributes/computed-value",-1657154665));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_QMARK_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var map__76063 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__76063__$1 = (((((!((map__76063 == null))))?(((((map__76063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76063):map__76063);
var read_only_form_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76063__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695));
var read_only_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76063__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only-fields","com.fulcrologic.rad.form/read-only-fields",1091648316));
var master_form = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)) : com.fulcrologic.fulcro.components.get_computed.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)));
var master_read_only_QMARK_ = (function (){var G__76065 = master_form;
if((G__76065 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__76065,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,G__76065,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)));
}
})();
return cljs.core.boolean$((function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(read_only_form_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(master_read_only_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_form], 0));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = identity_QMARK_;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(read_only_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = computed_value;
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var read_only_fields__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(read_only_fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
return ((cljs.core.set_QMARK_(read_only_fields__$1)) && (cljs.core.contains_QMARK_(read_only_fields__$1,qualified_key)));
}
}
}
}
}
})());
});
/**
 * Should the `attr` on the given `form-instance` be visible? This is controlled:
 * 
 *   * On the attribute at `::form/field-visible?`. A boolean or `(fn [form-instance attr] boolean?)`
 *   * On the form via the map `::form/fields-visible?`. A map from attr keyword to boolean or `(fn [form-instance attr] boolean?)`
 * 
 *   A field is visible if the form says it is. If the form has *no opinion*, then it is visible if the attribute
 *   says it is (as true?). If neither the form nor attribute return a boolean, then the field is visible.
 *   
 */
com.fulcrologic.rad.form.field_visible_QMARK_ = (function com$fulcrologic$rad$form$field_visible_QMARK_(form_instance,p__76071){
var map__76075 = p__76071;
var map__76075__$1 = (((((!((map__76075 == null))))?(((((map__76075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76075):map__76075);
var attr = map__76075__$1;
var field_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76075__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-visible?","com.fulcrologic.rad.form/field-visible?",834662826));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76075__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_QMARK_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var form_field_visible_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","fields-visible?","com.fulcrologic.rad.form/fields-visible?",1712071108),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","fields-visible?","com.fulcrologic.rad.form/fields-visible?",1712071108),qualified_key)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
var field_visible_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(field_visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
return cljs.core.boolean$(((form_field_visible_QMARK_ === true) || ((((form_field_visible_QMARK_ == null)) && (field_visible_QMARK___$1 === true))) || ((((form_field_visible_QMARK_ == null)) && ((field_visible_QMARK___$1 == null))))));
});
/**
 * Route to the given form in read-only mode.
 */
com.fulcrologic.rad.form.view_BANG_ = (function com$fulcrologic$rad$form$view_BANG_(var_args){
var G__76079 = arguments.length;
switch (G__76079) {
case 3:
return com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,form_class,entity_id){
return com.fulcrologic.rad.routing.route_to_BANG_(this$,form_class,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.view_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null));
}));

(com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,form_class,entity_id,extra_params){
return com.fulcrologic.rad.routing.route_to_BANG_(this$,form_class,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.view_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null)], 0)));
}));

(com.fulcrologic.rad.form.view_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Route to the given form for editing the entity with the given ID.
 */
com.fulcrologic.rad.form.edit_BANG_ = (function com$fulcrologic$rad$form$edit_BANG_(var_args){
var G__76081 = arguments.length;
switch (G__76081) {
case 3:
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,form_class,entity_id){
return com.fulcrologic.rad.routing.route_to_BANG_(this$,form_class,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.edit_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null));
}));

(com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,form_class,entity_id,extra_params){
return com.fulcrologic.rad.routing.route_to_BANG_(this$,form_class,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.edit_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null)], 0)));
}));

(com.fulcrologic.rad.form.edit_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Create a new instance of the given form-class using the provided `entity-id` and then route
 * to that form for editing.
 * 
 * - `app-ish`: A component instance or the app.
 * - `form-class`: The form to create.
 * - `options` map will be passed to the form as extra options.
 * 
 * The `options` in the default form state machine can contain:
 * 
 * * `:initial-state` - A tree of data to be deep-merged into the new instance of the form before form config
 * is added. This can be used to pre-set form fields to specific values.
 * 
 */
com.fulcrologic.rad.form.create_BANG_ = (function com$fulcrologic$rad$form$create_BANG_(var_args){
var G__76086 = arguments.length;
switch (G__76086) {
case 2:
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,form_class){
return com.fulcrologic.rad.routing.route_to_BANG_(app_ish,form_class,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.create_action,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0())], null));
}));

(com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,form_class,options){
return com.fulcrologic.rad.routing.route_to_BANG_(app_ish,form_class,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.create_action,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0())], null)], 0)));
}));

(com.fulcrologic.rad.form.create_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.rad.form.pathom2_server_delete_entity_mutation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.fulcrologic.rad.form","delete-entity","com.fulcrologic.rad.form/delete-entity",-1894476495,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),(function (env,params){
var temp__5733__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.form","delete-middleware","com.fulcrologic.rad.form/delete-middleware",566297398).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5733__auto__)){
var delete_middleware = temp__5733__auto__;
var delete_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),params);
return (delete_middleware.cljs$core$IFn$_invoke$arity$1 ? delete_middleware.cljs$core$IFn$_invoke$arity$1(delete_env) : delete_middleware.call(null,delete_env));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("form/pathom-plugin in not installed on Pathom parser.",cljs.core.PersistentArrayMap.EMPTY);
}
})], null);
/**
 * 
 */
com.fulcrologic.rad.form.delete_entity = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.form","delete-entity","com.fulcrologic.rad.form/delete-entity",-1894476495,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.form","delete-entity","com.fulcrologic.rad.form/delete-entity",-1894476495,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$fulcrologic$rad$form$remote(_){
return true;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$fulcrologic$rad$form$ok_action(p__76091){
var map__76092 = p__76091;
var map__76092__$1 = (((((!((map__76092 == null))))?(((((map__76092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76092):map__76092);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76092__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__76095_78095 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__76096_78096 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__76096_78096);

try{var target_ident_78097 = cljs.core.first(params);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity,target_ident_78097);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__76095_78095);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__76097 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__76098 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__76098);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__76097);
}})], null);
}));
/**
 * Delete the given entity from local app state and the remote (if present). This method assumes that the
 * given entity is *not* currently being edited and can be used from anyplace else in the application.
 */
com.fulcrologic.rad.form.delete_BANG_ = (function com$fulcrologic$rad$form$delete_BANG_(this$,id_key,entity_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__76102 = cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,entity_id]);
return (com.fulcrologic.rad.form.delete_entity.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.delete_entity.cljs$core$IFn$_invoke$arity$1(G__76102) : com.fulcrologic.rad.form.delete_entity.call(null,G__76102));
})()], null));
});
/**
 * Helper: Informs the form's state machine that focus has left an input. Requires a form rendering env, attr keyword,
 * and the current value.
 */
com.fulcrologic.rad.form.input_blur_BANG_ = (function com$fulcrologic$rad$form$input_blur_BANG_(p__76105,k,value){
var map__76106 = p__76105;
var map__76106__$1 = (((((!((map__76106 == null))))?(((((map__76106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76106):map__76106);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76106__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76106__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,asm_id,new cljs.core.Keyword("event","blur","event/blur",448962841),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),k,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473),form_ident,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Helper: Informs the form's state machine that an input's value has changed. Requires a form rendering env, attr keyword,
 * and the current value.
 * 
 * Using a value of `nil` will cause the field to become empty in an attribute-aware way:
 * 
 * - If the cardinality is to-one, will be dissoc'd
 * - Scalar to-many will be set to #{} instead.
 * - Ref to-many will be set to [] instead.
 * 
 * Furthermore, idents that contain a nil ID are considered nil.
 */
com.fulcrologic.rad.form.input_changed_BANG_ = (function com$fulcrologic$rad$form$input_changed_BANG_(p__76112,k,value){
var map__76113 = p__76112;
var map__76113__$1 = (((((!((map__76113 == null))))?(((((map__76113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76113):map__76113);
var _env = map__76113__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76113__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76113__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance)),k);
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,asm_id,new cljs.core.Keyword("event","attribute-changed","event/attribute-changed",-868443355),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),k,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473),form_ident,new cljs.core.Keyword(null,"form-key","form-key",-309492408),(function (){var G__76117 = com.fulcrologic.fulcro.components.react_type(form_instance);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__76117) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__76117));
})(),new cljs.core.Keyword(null,"old-value","old-value",862546795),old_value,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Returns the computed value of the given attribute on the form from `env` (if it is a computed attribute).
 * 
 *   Computed attributes are regular attributes with no storage (though they may have resolvers) and a `::attr/computed-value`
 *   function. Such a function will be called with the form rendering env and the attribute definition itself.
 */
com.fulcrologic.rad.form.computed_value = (function com$fulcrologic$rad$form$computed_value(env,p__76118){
var map__76119 = p__76118;
var map__76119__$1 = (((((!((map__76119 == null))))?(((((map__76119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76119):map__76119);
var attr = map__76119__$1;
var computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76119__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-value","com.fulcrologic.rad.attributes/computed-value",-1657154665));
if(cljs.core.truth_(computed_value)){
return (computed_value.cljs$core$IFn$_invoke$arity$2 ? computed_value.cljs$core$IFn$_invoke$arity$2(env,attr) : computed_value.call(null,env,attr));
} else {
return null;
}
});
/**
 * Renamed to rad-application/install-ui-controls!
 */
com.fulcrologic.rad.form.install_ui_controls_BANG_ = com.fulcrologic.rad.application.install_ui_controls_BANG_;
/**
 * Returns a human readable label for a given attribute (which can be declared on the attribute, and overridden on the
 *   specific form). Defaults to the capitalized name of the attribute qualified key. Labels can be configured
 *   on the form that renders them or on the attribute. The form overrides the attribute.
 * 
 *   * On an attribute `::form/field-label`: A string or function returning a string.
 *   * On a form `::form/field-labels`: A map from attribute keyword to a string or function returning a string.
 * 
 *   The ao/label option can be used to provide a default that applies in all contexts.
 * 
 *   If label functions are used they are passed the form instance that is rendering them. They must not side-effect.
 *   
 */
com.fulcrologic.rad.form.field_label = (function com$fulcrologic$rad$form$field_label(form_env,attribute){
var map__76124 = form_env;
var map__76124__$1 = (((((!((map__76124 == null))))?(((((map__76124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76124):map__76124);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76124__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var options = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var field_label = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","field-labels","com.fulcrologic.rad.form/field-labels",1559200440),k], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword("com.fulcrologic.rad.form","field-label","com.fulcrologic.rad.form/field-label",964001567).cljs$core$IFn$_invoke$arity$1(attribute);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = com.fulcrologic.rad.attributes_options.label.cljs$core$IFn$_invoke$arity$1(attribute);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var G__76135 = k;
var G__76135__$1 = (((G__76135 == null))?null:cljs.core.name(G__76135));
var G__76135__$2 = (((G__76135__$1 == null))?null:clojure.string.capitalize(G__76135__$1));
if((G__76135__$2 == null)){
return null;
} else {
return clojure.string.replace(G__76135__$2,/-/," ");
}
}
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
return field_label;
});
/**
 * Returns true if the validator on the form in `env` indicates that some form field(s) are invalid. Note that a
 *   field does not report valid OR invalid until it is marked complete (usually on blur).
 */
com.fulcrologic.rad.form.invalid_QMARK_ = (function com$fulcrologic$rad$form$invalid_QMARK_(var_args){
var G__76140 = arguments.length;
switch (G__76140) {
case 1:
return com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (form_rendering_env){
var map__76141 = form_rendering_env;
var map__76141__$1 = (((((!((map__76141 == null))))?(((((map__76141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76141):map__76141);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76141__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_instance,props);
}));

(com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form_class_or_instance,props){
var map__76143 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class_or_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_class_or_instance));
var map__76143__$1 = (((((!((map__76143 == null))))?(((((map__76143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76143):map__76143);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76143__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894));
var and__4115__auto__ = validator;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),(validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)));
} else {
return and__4115__auto__;
}
}));

(com.fulcrologic.rad.form.invalid_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the validator on the form in `env` indicates that all of the form fields are valid. Note that a
 *   field does not report valid OR invalid until it is marked complete (usually on blur).
 */
com.fulcrologic.rad.form.valid_QMARK_ = (function com$fulcrologic$rad$form$valid_QMARK_(var_args){
var G__76146 = arguments.length;
switch (G__76146) {
case 1:
return com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (form_rendering_env){
var map__76149 = form_rendering_env;
var map__76149__$1 = (((((!((map__76149 == null))))?(((((map__76149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76149):map__76149);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76149__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_instance,props);
}));

(com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form_class_or_instance,props){
var map__76152 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class_or_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_class_or_instance));
var map__76152__$1 = (((((!((map__76152 == null))))?(((((map__76152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76152):map__76152);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894));
var required_attributes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330),attributes);
var all_required_present_QMARK_ = ((cljs.core.empty_QMARK_(required_attributes)) || (cljs.core.every_QMARK_((function (attr){
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k);
var ok_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.rad.attributes_options.type.cljs$core$IFn$_invoke$arity$1(attr)))?(!(cljs.core.empty_QMARK_(v))):(!((v == null))));
if(cljs.core.truth_((function (){var and__4115__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4115__auto__)){
return (!(ok_QMARK_));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1636,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form is not valid because required attribute is missing:",k], null);
}),null)),null,780427269,null);
} else {
}

return ok_QMARK_;
}),required_attributes)));
if(all_required_present_QMARK_){
var or__4126__auto__ = cljs.core.not(validator);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = validator;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),(validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)));
} else {
return and__4115__auto__;
}
}
} else {
return false;
}
}));

(com.fulcrologic.rad.form.valid_QMARK_.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","field-style-config","com.fulcrologic.rad.form/field-style-config",926730890,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"config-key","config-key",1125141517)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Get the value of an overridable field-style-config option. If both the form and attribute set these
 *   then the result will be a deep merge of the two (with form winning).
 * @type {function(*, *, !cljs.core.Keyword): *}
 */
com.fulcrologic.rad.form.field_style_config = (function com$fulcrologic$rad$form$field_style_config(p__76185,attribute,config_key){
var map__76186 = p__76185;
var map__76186__$1 = (((((!((map__76186 == null))))?(((((map__76186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76186):map__76186);
var arg_76180 = map__76186__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76186__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__76188 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"config-key","config-key",1125141517)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__76188__$1 = (((((!((map__76188 == null))))?(((((map__76188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76188):map__76188);
var retspec76182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76188__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec76181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76188__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec76181)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1645 field-style-config's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec76181,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_76180,attribute,config_key], null));
} else {
}

var f76184 = (function (p__76212,attribute__$1,config_key__$1){
var map__76213 = p__76212;
var map__76213__$1 = (((((!((map__76213 == null))))?(((((map__76213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76213):map__76213);
var arg_76180__$1 = map__76213__$1;
var form_instance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76213__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__76215 = attribute__$1;
var map__76215__$1 = (((((!((map__76215 == null))))?(((((map__76215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76215):map__76215);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76215__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var field_style_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76215__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","field-style-config","com.fulcrologic.rad.attributes/field-style-config",-1110341024));
var form_value = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$4(form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style-configs","com.fulcrologic.rad.form/field-style-configs",457844258),qualified_key,config_key__$1) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style-configs","com.fulcrologic.rad.form/field-style-configs",457844258),qualified_key,config_key__$1));
var attribute_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_style_config,config_key__$1);
if(((cljs.core.map_QMARK_(form_value)) && (cljs.core.map_QMARK_(attribute_value)))){
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute_value,form_value], 0));
} else {
var or__4126__auto__ = form_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attribute_value;
}
}
});
var ret76183 = f76184(arg_76180,attribute,config_key);
if(cljs.core.truth_(retspec76182)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1645 field-style-config's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec76182,ret76183);
} else {
}

return ret76183;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","field-autocomplete","com.fulcrologic.rad.form/field-autocomplete",-967856508,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Returns the proper string (or nil) for a given attribute's autocomplete setting
 * @type {function(*, *): *}
 */
com.fulcrologic.rad.form.field_autocomplete = (function com$fulcrologic$rad$form$field_autocomplete(p__76224,attribute){
var map__76225 = p__76224;
var map__76225__$1 = (((((!((map__76225 == null))))?(((((map__76225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76225):map__76225);
var _env = map__76225__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76225__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__76236 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__76236__$1 = (((((!((map__76236 == null))))?(((((map__76236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76236):map__76236);
var argspec76217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76236__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec76218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76236__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec76217)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1657 field-autocomplete's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec76217,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_env,attribute], null));
} else {
}

var f76220 = (function (p__76239,attribute__$1){
var map__76241 = p__76239;
var map__76241__$1 = (((((!((map__76241 == null))))?(((((map__76241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76241):map__76241);
var _env__$1 = map__76241__$1;
var form_instance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76241__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__76244 = attribute__$1;
var map__76244__$1 = (((((!((map__76244 == null))))?(((((map__76244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76244):map__76244);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76244__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var autocomplete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76244__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","autocomplete","com.fulcrologic.rad.form/autocomplete",-2005027528));
var override = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","auto-completes","com.fulcrologic.rad.form/auto-completes",475748365),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","auto-completes","com.fulcrologic.rad.form/auto-completes",475748365),qualified_key));
var autocomplete__$1 = (((override == null))?autocomplete:override);
var autocomplete__$2 = ((cljs.core.boolean_QMARK_(autocomplete__$1))?((autocomplete__$1)?"on":"off"):autocomplete__$1);
return autocomplete__$2;
});
var ret76219 = f76220(_env,attribute);
if(cljs.core.truth_(retspec76218)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1657 field-autocomplete's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec76218,ret76219);
} else {
}

return ret76219;
});
/**
 * Build a (fn [env] env') that adds RAD form-related data to an env. If `base-wrapper` is supplied, then it will be called
 * as part of the evaluation, allowing you to build up a chain of environment middleware.
 * 
 * ```
 * (def build-env
 *   (-> (wrap-env save-middleware delete-middleware)
 *      ...))
 * 
 * ;; Pathom 2
 * (def env-plugin (p/env-wrap-plugin build-env))
 * 
 * ;; Pathom 3
 * (let [base-env (pci/register [...])
 *       env (build-env base-env)]
 *    (process env eql))
 * ```
 * 
 * similar to Ring middleware.
 * 
 */
com.fulcrologic.rad.form.wrap_env = (function com$fulcrologic$rad$form$wrap_env(var_args){
var G__76320 = arguments.length;
switch (G__76320) {
case 2:
return com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$2 = (function (save_middleware,delete_middleware){
return com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$3(null,save_middleware,delete_middleware);
}));

(com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$3 = (function (base_wrapper,save_middleware,delete_middleware){
return (function (env){
var G__76376 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.fulcrologic.rad.form","save-middleware","com.fulcrologic.rad.form/save-middleware",-2012160669),save_middleware,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","delete-middleware","com.fulcrologic.rad.form/delete-middleware",566297398),delete_middleware], 0));
if(cljs.core.truth_(base_wrapper)){
return (base_wrapper.cljs$core$IFn$_invoke$arity$1 ? base_wrapper.cljs$core$IFn$_invoke$arity$1(G__76376) : base_wrapper.call(null,G__76376));
} else {
return G__76376;
}
});
}));

(com.fulcrologic.rad.form.wrap_env.cljs$lang$maxFixedArity = 3);

/**
 * A pathom 2 plugin that installs general form save/delete support on the pathom parser. Requires
 *   save and delete middleware, which will accomplish the actual actions.  Calling RAD form save/delete
 *   without this plugin and both bits of middleware will result in a runtime error.
 */
com.fulcrologic.rad.form.pathom_plugin = (function com$fulcrologic$rad$form$pathom_plugin(save_middleware,delete_middleware){
var augment = com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$2(save_middleware,delete_middleware);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$fulcrologic$rad$form$pathom_plugin_$_env_wrap_wrap_parser(parser){
return (function com$fulcrologic$rad$form$pathom_plugin_$_env_wrap_wrap_parser_$_env_wrap_wrap_internal(env,tx){
var G__76377 = (augment.cljs$core$IFn$_invoke$arity$1 ? augment.cljs$core$IFn$_invoke$arity$1(env) : augment.call(null,env));
var G__76378 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__76377,G__76378) : parser.call(null,G__76377,G__76378));
});
})], null);
});
/**
 * Returns true if the given `attribute` is invalid in the given form `env` context. This is meant to be used in UI
 *   functions, not resolvers/mutations. If there is a validator defined on the form it completely overrides all
 *   attribute validators.
 */
com.fulcrologic.rad.form.invalid_attribute_value_QMARK_ = (function com$fulcrologic$rad$form$invalid_attribute_value_QMARK_(p__76379,attribute){
var map__76380 = p__76379;
var map__76380__$1 = (((((!((map__76380 == null))))?(((((map__76380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76380):map__76380);
var _env = map__76380__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76380__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76380__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var and__4115__auto__ = attribute;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k);
} else {
return and__4115__auto__;
}
})();
var checked_QMARK_ = com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$2(props,k);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribute,com.fulcrologic.rad.attributes_options.required_QMARK_,false);
var form_validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894)) : com.fulcrologic.fulcro.components.component_options.call(null,master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894)));
var invalid_QMARK_ = (function (){var or__4126__auto__ = ((checked_QMARK_)?(function (){var and__4115__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (((value == null)) || (((typeof value === 'string') && (cljs.core.empty_QMARK_(value)))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((checked_QMARK_) && (cljs.core.not(form_validator)) && (cljs.core.not(com.fulcrologic.rad.attributes.valid_value_QMARK_(attribute,value,props,k))));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = form_validator;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),(form_validator.cljs$core$IFn$_invoke$arity$2 ? form_validator.cljs$core$IFn$_invoke$arity$2(props,k) : form_validator.call(null,props,k)));
} else {
return and__4115__auto__;
}
}
}
})();
return invalid_QMARK_;
});
/**
 * Get the string that should be shown for the error message on a given attribute in the given form context.
 */
com.fulcrologic.rad.form.validation_error_message = (function com$fulcrologic$rad$form$validation_error_message(p__76651,p__76652){
var map__76653 = p__76651;
var map__76653__$1 = (((((!((map__76653 == null))))?(((((map__76653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76653):map__76653);
var _env = map__76653__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76653__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76653__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__76654 = p__76652;
var map__76654__$1 = (((((!((map__76654 == null))))?(((((map__76654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76654):map__76654);
var attribute = map__76654__$1;
var validation_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76654__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-message","com.fulcrologic.rad.form/validation-message",-2123075367));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76654__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var and__4115__auto__ = attribute;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
} else {
return and__4115__auto__;
}
})();
var master_message = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key));
var local_message = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key));
var message = (function (){var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(master_message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,qualified_key], 0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(local_message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,qualified_key], 0));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(validation_message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return tr("Invalid value");
}
}
}
})();
return message;
});
/**
 * Get the field context for a given form field. `env` is the rendering env (see `rendering-env`) and attribute
 * is the full RAD attribute for the field in question.
 * 
 * Returns live details about the given field of the form as a map containing:
 * 
 * :value - The current field's value
 * :invalid? - True if the field is marked complete AND is invalid. See `form-state` validation.
 * :validation-message - The string that has been configured (or dynamically generated) to be the validation message. Only
 *                       available when `:invalid?` is true.
 * :field-label - The desired label on the field
 * :visible? - Indicates when the field should be shown/hidden
 * :read-only? - Indicates when the field should not be editable
 * :field-style-config - Additional options that were configured for the field as field-style-config.
 * 
 */
com.fulcrologic.rad.form.field_context = (function com$fulcrologic$rad$form$field_context(p__76657,p__76658){
var map__76671 = p__76657;
var map__76671__$1 = (((((!((map__76671 == null))))?(((((map__76671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76671):map__76671);
var env = map__76671__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76671__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__76672 = p__76658;
var map__76672__$1 = (((((!((map__76672 == null))))?(((((map__76672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76672):map__76672);
var attribute = map__76672__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76672__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var or__4126__auto__ = com.fulcrologic.rad.form.computed_value(env,attribute);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = attribute;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
} else {
return and__4115__auto__;
}
}
})();
var addl_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attribute);
var validation_message = (cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.rad.form.validation_error_message(env,attribute):null);
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"invalid?","invalid?",789397235),invalid_QMARK_,new cljs.core.Keyword(null,"validation-message","validation-message",-1897616074),validation_message,new cljs.core.Keyword(null,"field-label","field-label",872823490),field_label,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),read_only_QMARK_,new cljs.core.Keyword(null,"visible?","visible?",2129863715),visible_QMARK_,new cljs.core.Keyword(null,"field-style-config","field-style-config",-1006368464),addl_props], null);
});
/**
 * Install a `renderer` for the given attribute `type`, to be known as field `style`.
 * 
 * See `field-context` for obtaining the data to render, and `input-changed!` and `input-blur!` for
 * communcating model changes.
 */
com.fulcrologic.rad.form.install_field_renderer_BANG_ = (function com$fulcrologic$rad$form$install_field_renderer_BANG_(app,type,style,render){
var map__76681 = app;
var map__76681__$1 = (((((!((map__76681 == null))))?(((((map__76681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76681):map__76681);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76681__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","type->style->control","com.fulcrologic.rad.form/type->style->control",146932348),type,style], null),render);
});
/**
 * Install a renderer for a given `style` of form container.
 */
com.fulcrologic.rad.form.install_form_container_renderer_BANG_ = (function com$fulcrologic$rad$form$install_form_container_renderer_BANG_(app,style,render){
var map__76688 = app;
var map__76688__$1 = (((((!((map__76688 == null))))?(((((map__76688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76688):map__76688);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76688__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076),new cljs.core.Keyword(null,"form-container","form-container",-1768135707),style], null),render);
});
/**
 * Install a renderer for a given `style` of form body.
 */
com.fulcrologic.rad.form.install_form_body_renderer_BANG_ = (function com$fulcrologic$rad$form$install_form_body_renderer_BANG_(app,style,render){
var map__76699 = app;
var map__76699__$1 = (((((!((map__76699 == null))))?(((((map__76699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76699):map__76699);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76699__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076),new cljs.core.Keyword(null,"form-body-container","form-body-container",819827704),style], null),render);
});
/**
 * Install a renderer for a given `style` of subform reference container.
 */
com.fulcrologic.rad.form.install_form_ref_renderer_BANG_ = (function com$fulcrologic$rad$form$install_form_ref_renderer_BANG_(app,style,render){
var map__76701 = app;
var map__76701__$1 = (((((!((map__76701 == null))))?(((((map__76701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76701):map__76701);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76701__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076),new cljs.core.Keyword(null,"ref-container","ref-container",-1728504269),style], null),render);
});
/**
 * Create a RAD form component. `options` is the map of form/Fulcro options. The `registry-key` is the globally
 * unique name (as a keyword) that this component should be known by, and `render` is a `(fn [this props])` (optional)
 * for rendering the body, which defaults to the built-in `render-layout`.
 * 
 * WARNING: The macro version ensures that there is a constant react type to refer to. Using this function MAY cause
 * hot code reload behaviors that rely on react-type to misbehave due to the mismatch (closure over old version).
 */
com.fulcrologic.rad.form.form = (function com$fulcrologic$rad$form$form(var_args){
var G__76707 = arguments.length;
switch (G__76707) {
case 2:
return com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$2 = (function (registry_key,options){
return com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$3(registry_key,options,(function (this$,props){
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}));

(com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$3 = (function (registry_key,options,render){
var render__$1 = (function (this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(this$,props) : render.call(null,this$,props));
}));
});
var component_class = cljs.core.volatile_BANG_(null);
var get_class = (function (){
return cljs.core.deref(component_class);
});
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.form.convert_options(get_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry-key","registry-key",-1128363419),registry_key], null),options),new cljs.core.Keyword(null,"render","render",-1408033454),render__$1);
var constructor$ = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
var result = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,registry_key,options__$1);
return cljs.core.vreset_BANG_(component_class,result);
}));

(com.fulcrologic.rad.form.form.cljs$lang$maxFixedArity = 3);

/**
 * Undo all changes to the current form by reloading it from the server.
 */
com.fulcrologic.rad.form.undo_via_load_BANG_ = (function com$fulcrologic$rad$form$undo_via_load_BANG_(p__76718){
var map__76719 = p__76718;
var map__76719__$1 = (((((!((map__76719 == null))))?(((((map__76719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76719):map__76719);
var _rendering_env = map__76719__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76719__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(master_form,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form)),new cljs.core.Keyword("event","reload","event/reload",692165289));
});
/**
 * Render a RAD subform from a parent form. This can be used instead of a normal factory in order to avoid having
 * to construct the proper computed props for the subform.
 * 
 * parent-form-instance - The `this` of the parent form
 * relation-key - The key (in props) of the subform(s) data
 * ChildForm - The defsc-form component class to use for rendering the child
 * extra-computed-props - optional. Things to merge into the computed props for the child.
 */
com.fulcrologic.rad.form.render_subform = (function com$fulcrologic$rad$form$render_subform(var_args){
var G__76742 = arguments.length;
switch (G__76742) {
case 4:
return com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$4 = (function (parent_form_instance,relation_key,ChildForm,child_props){
return com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$5(parent_form_instance,relation_key,ChildForm,child_props,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$5 = (function (parent_form_instance,relation_key,ChildForm,child_props,extra_computed_props){
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(ChildForm);
var renv = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(parent_form_instance);
var G__76743 = child_props;
var G__76744 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_computed_props,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(renv,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),parent_form_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),relation_key], 0))], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__76743,G__76744) : ui_factory.call(null,G__76743,G__76744));
}));

(com.fulcrologic.rad.form.render_subform.cljs$lang$maxFixedArity = 5);

/**
 * Given the top-level form instance (this), returns a vector of maps. Each map should have a `:message` key, and MAY
 * contain additional information if the back end added anything else to the error maps.
 */
com.fulcrologic.rad.form.server_errors = (function com$fulcrologic$rad$form$server_errors(top_form_instance){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(top_form_instance) : com.fulcrologic.fulcro.components.props.call(null,top_form_instance)),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443));
});

//# sourceMappingURL=com.fulcrologic.rad.form.js.map
