goog.provide('com.fulcrologic.rad.rendering.semantic_ui.components');
/**
 * Converts transit encoded value(s), used by Semantic UI, into CLJS datastructure.
 */
com.fulcrologic.rad.rendering.semantic_ui.components.sui_format__GT_user_format = (function com$fulcrologic$rad$rendering$semantic_ui$components$sui_format__GT_user_format(p__88974,value){
var map__88975 = p__88974;
var map__88975__$1 = (((((!((map__88975 == null))))?(((((map__88975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88975):map__88975);
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88975__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
if(cljs.core.truth_(multiple)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj,value));
} else {
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1(value);
}
});
com.fulcrologic.rad.rendering.semantic_ui.components.user_format__GT_sui_format = (function com$fulcrologic$rad$rendering$semantic_ui$components$user_format__GT_sui_format(p__88977,value){
var map__88978 = p__88977;
var map__88978__$1 = (((((!((map__88978 == null))))?(((((map__88978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88978):map__88978);
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88978__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));

if(cljs.core.truth_(multiple)){
if(cljs.core.truth_(value)){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str,value));
} else {
return [];
}
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.boolean_QMARK_(value);
}
})())){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1(value);
} else {
return "";
}
}
});
/**
 * Wraps userOnChange fn with try/catch and sui-form->user-format conversion.
 */
com.fulcrologic.rad.rendering.semantic_ui.components.wrapped_onChange = (function com$fulcrologic$rad$rendering$semantic_ui$components$wrapped_onChange(props,userOnChange){
return (function (_,v){
try{if(cljs.core.truth_((function (){var and__4115__auto__ = v.value;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(v.value);
} else {
return and__4115__auto__;
}
})())){
var value = com.fulcrologic.rad.rendering.semantic_ui.components.sui_format__GT_user_format(props,v.value);
if(cljs.core.truth_((function (){var and__4115__auto__ = value;
if(cljs.core.truth_(and__4115__auto__)){
return userOnChange;
} else {
return and__4115__auto__;
}
})())){
return (userOnChange.cljs$core$IFn$_invoke$arity$1 ? userOnChange.cljs$core$IFn$_invoke$arity$1(value) : userOnChange.call(null,value));
} else {
return null;
}
} else {
return (userOnChange.cljs$core$IFn$_invoke$arity$1 ? userOnChange.cljs$core$IFn$_invoke$arity$1(null) : userOnChange.call(null,null));
}
}catch (e88980){var e = e88980;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.components",null,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to read dropdown value ",(cljs.core.truth_(v)?v.value:null)], null);
}),null)),null,1543730635,null);
}});
});

var options__56259__auto___88991 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
var xform_options = cljs.core.memoize((function (options){
return cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__88982){
var map__88983 = p__88982;
var map__88983__$1 = (((((!((map__88983 == null))))?(((((map__88983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88983):map__88983);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88983__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88983__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ({"text": text, "value": (function (){var G__88985 = value;
if((G__88985 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1(G__88985);
}
})()});
}),options));
}));
var xform_value = (function (multiple_QMARK_,value){
return com.fulcrologic.rad.rendering.semantic_ui.components.user_format__GT_sui_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),multiple_QMARK_], null),value);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-options","get-options",-987973923),(function (props){
return xform_options(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(props));
}),new cljs.core.Keyword(null,"format-value","format-value",1000187796),(function (props,value){
return xform_value(new cljs.core.Keyword(null,"multiple","multiple",1244445549).cljs$core$IFn$_invoke$arity$1(props),value);
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$components$render_WrappedDropdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__88986 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__88986__$1 = (((((!((map__88986 == null))))?(((((map__88986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88986):map__88986);
var props = map__88986__$1;
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88986__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88986__$1,new cljs.core.Keyword(null,"value","value",305978217));
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88986__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var map__88988 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__88988__$1 = (((((!((map__88988 == null))))?(((((map__88988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88988):map__88988);
var get_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88988__$1,new cljs.core.Keyword(null,"get-options","get-options",-987973923));
var format_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88988__$1,new cljs.core.Keyword(null,"format-value","format-value",1000187796));
var userOnChange = onChange;
var options = (get_options.cljs$core$IFn$_invoke$arity$1 ? get_options.cljs$core$IFn$_invoke$arity$1(props) : get_options.call(null,props));
var value__$1 = (format_value.cljs$core$IFn$_invoke$arity$2 ? format_value.cljs$core$IFn$_invoke$arity$2(props,value) : format_value.call(null,props,value));
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),true,new cljs.core.Keyword(null,"selection","selection",975998651),true,new cljs.core.Keyword(null,"closeOnBlur","closeOnBlur",2083528494),true,new cljs.core.Keyword(null,"openOnFocus","openOnFocus",-183721789),true,new cljs.core.Keyword(null,"selectOnBlur","selectOnBlur",-859322492),true,new cljs.core.Keyword(null,"selectOnNavigation","selectOnNavigation",-1558766488),true,new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.boolean$(multiple)], null),props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e,v){
try{var string_value = v.value;
var value__$2 = (cljs.core.truth_(multiple)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__88981_SHARP_){
if(cljs.core.seq(p1__88981_SHARP_)){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__88981_SHARP_);
} else {
return null;
}
}),string_value):((cljs.core.seq(string_value))?com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1(string_value):null));
if(cljs.core.truth_(userOnChange)){
return (userOnChange.cljs$core$IFn$_invoke$arity$1 ? userOnChange.cljs$core$IFn$_invoke$arity$1(value__$2) : userOnChange.call(null,value__$2));
} else {
return null;
}
}catch (e88990){var e__$1 = e88990;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.components",null,78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to read dropdown value ",e__$1,(cljs.core.truth_(v)?v.value:null)], null);
}),null)),null,1005326131,null);
}})], null)], 0));
return com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(props__$1);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.components !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___88991,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.components","WrappedDropdown","com.fulcrologic.rad.rendering.semantic-ui.components/WrappedDropdown",2107214556),options__56259__auto___88991);
/**
 * Draw a SUI dropdown with the given props.  The arguments are identical to sui/ui-dropdown, but options and onChange
 *   are auto-wrapped so that clojure data (e.g. keywords) can be used for the option :value fields. It also defaults
 *   a number of things (:search, :closeOnBlue, openOnFocus, selectOnBlue, and :selectOnNavigation) to true, but you can
 */
com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown);

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.components.js.map
