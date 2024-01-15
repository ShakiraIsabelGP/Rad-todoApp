goog.provide('com.fulcrologic.fulcro_i18n.i18n');

var options__56259__auto___72067 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$fulcro_i18n$i18n$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale","com.fulcrologic.fulcro-i18n.i18n/locale",-237875589),new cljs.core.Keyword("ui","locale-name","ui/locale-name",-1682103873),new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$fulcrologic$fulcro_i18n$i18n$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale","com.fulcrologic.fulcro-i18n.i18n/locale",-237875589),new cljs.core.Keyword("param","locale","param/locale",-2109951818),new cljs.core.Keyword("ui","locale-name","ui/locale-name",-1682103873),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163),new cljs.core.Keyword("param","translations","param/translations",-1531031116)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$fulcro_i18n$i18n$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale-by-id","com.fulcrologic.fulcro-i18n.i18n/locale-by-id",-2053087816),new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale","com.fulcrologic.fulcro-i18n.i18n/locale",-237875589).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro_i18n$i18n$render_Locale(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro_i18n !== 'undefined') && (typeof com.fulcrologic.fulcro_i18n.i18n !== 'undefined') && (typeof com.fulcrologic.fulcro_i18n.i18n.Locale !== 'undefined')){
} else {
/**
 * Represents the data of a locale in app state. Normalized by locale ID.
 * @constructor
 */
com.fulcrologic.fulcro_i18n.i18n.Locale = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___72067,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro_i18n.i18n.Locale,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","Locale","com.fulcrologic.fulcro-i18n.i18n/Locale",677557149),options__56259__auto___72067);
/**
 * Post-mutation. Called after a successful load of a locale.
 */
com.fulcrologic.fulcro_i18n.i18n.translations_loaded = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro-i18n.i18n","translations-loaded","com.fulcrologic.fulcro-i18n.i18n/translations-loaded",1097479033,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro-i18n.i18n","translations-loaded","com.fulcrologic.fulcro-i18n.i18n/translations-loaded",1097479033,null),(function (fulcro_mutation_env_symbol){
var ignored = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro_i18n$i18n$action(p__72021){
var map__72022 = p__72021;
var map__72022__$1 = (((((!((map__72022 == null))))?(((((map__72022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72022):map__72022);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72022__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72022__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__72024_72068 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72025_72069 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72025_72069);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163));

if(cljs.core.truth_(app)){
com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
} else {
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72024_72068);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72026 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72027 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72027);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72026);
}})], null);
}));
/**
 * Returns true if the given locale is loaded in the given state map.
 */
com.fulcrologic.fulcro_i18n.i18n.is_locale_loaded_QMARK_ = (function com$fulcrologic$fulcro_i18n$i18n$is_locale_loaded_QMARK_(state_map,locale){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale-by-id","com.fulcrologic.fulcro-i18n.i18n/locale-by-id",-2053087816),locale,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163)], null),false));
});
/**
 * Ensure that the given locale is loaded. Is a no-op if there are translations in app state for the given locale
 *   which is a keyword like :es-MX.
 */
com.fulcrologic.fulcro_i18n.i18n.ensure_locale_loaded_BANG_ = (function com$fulcrologic$fulcro_i18n$i18n$ensure_locale_loaded_BANG_(app,locale){
var state = com.fulcrologic.fulcro.application.current_state(app);
if(com.fulcrologic.fulcro_i18n.i18n.is_locale_loaded_QMARK_(state,locale)){
return null;
} else {
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163),com.fulcrologic.fulcro_i18n.i18n.Locale,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),locale], null),new cljs.core.Keyword(null,"marker","marker",865118313),false,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.fulcrologic.fulcro-i18n.i18n","translations-loaded","com.fulcrologic.fulcro-i18n.i18n/translations-loaded",1097479033,null)], null));
}
});
/**
 * Mutation: Change the locale. The parameter should be a locale ID, which is a keyword like :en or :es-MX.
 */
com.fulcrologic.fulcro_i18n.i18n.change_locale = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro-i18n.i18n","change-locale","com.fulcrologic.fulcro-i18n.i18n/change-locale",-1674705286,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro-i18n.i18n","change-locale","com.fulcrologic.fulcro-i18n.i18n/change-locale",-1674705286,null),(function (fulcro_mutation_env_symbol){
var map__72028 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__72028__$1 = (((((!((map__72028 == null))))?(((((map__72028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72028):map__72028);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72028__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function com$fulcrologic$fulcro_i18n$i18n$refresh(env){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","current-locale","com.fulcrologic.fulcro-i18n.i18n/current-locale",-1133763023)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro_i18n$i18n$action(p__72030){
var map__72031 = p__72030;
var map__72031__$1 = (((((!((map__72031 == null))))?(((((map__72031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72031):map__72031);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72031__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72031__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__72033_72070 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72034_72071 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72034_72071);

try{com.fulcrologic.fulcro_i18n.i18n.ensure_locale_loaded_BANG_(app,locale);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","current-locale","com.fulcrologic.fulcro-i18n.i18n/current-locale",-1133763023),(function (){var G__72035 = com.fulcrologic.fulcro_i18n.i18n.Locale;
var G__72036 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale","com.fulcrologic.fulcro-i18n.i18n/locale",-237875589),locale], null);
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__72035,G__72036) : com.fulcrologic.fulcro.components.get_ident.call(null,G__72035,G__72036));
})());

com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72033_72070);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__72037 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__72038 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__72038);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__72037);
}})], null);
}));
/**
 * Translate a string in the context of the given component.
 * 
 *   This is a general-purpose function for doing everything that tr, trc, and trf do; however, it does not allow for
 *   source-level string extraction with GNU gettext. It is recommended that you use
 *   use `tr`, `trc`, and such instead.
 * 
 *   Options is sent to the configured formatter, and may also include ::i18n/context to represent translation context.
 *   
 */
com.fulcrologic.fulcro_i18n.i18n.t = (function com$fulcrologic$fulcro_i18n$i18n$t(var_args){
var G__72050 = arguments.length;
switch (G__72050) {
case 1:
return com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$1 = (function (string){
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",string], null);
var translation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components._STAR_shared_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163),k], null),string);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",translation)){
return string;
} else {
return translation;
}
}));

(com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$2 = (function (string,p__72052){
var map__72053 = p__72052;
var map__72053__$1 = (((((!((map__72053 == null))))?(((((map__72053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72053):map__72053);
var options = map__72053__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72053__$1,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","context","com.fulcrologic.fulcro-i18n.i18n/context",-564931405));
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = context;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),string], null);
var locale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components._STAR_shared_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale","com.fulcrologic.fulcro-i18n.i18n/locale",-237875589)], null),new cljs.core.Keyword(null,"en","en",88457073));
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components._STAR_shared_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","translations","com.fulcrologic.fulcro-i18n.i18n/translations",759607163),k], null),string);
var translation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",entry))?string:entry);
var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components._STAR_shared_STAR_,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","message-formatter","com.fulcrologic.fulcro-i18n.i18n/message-formatter",-1572201620),(function (p__72056){
var map__72058 = p__72056;
var map__72058__$1 = (((((!((map__72058 == null))))?(((((map__72058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72058):map__72058);
var localized_format_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72058__$1,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","localized-format-string","com.fulcrologic.fulcro-i18n.i18n/localized-format-string",96069381));
return localized_format_string;
}));
if(cljs.core.empty_QMARK_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","context","com.fulcrologic.fulcro-i18n.i18n/context",-564931405)))){
return translation;
} else {
try{var G__72065 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","localized-format-string","com.fulcrologic.fulcro-i18n.i18n/localized-format-string",96069381),translation,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","locale","com.fulcrologic.fulcro-i18n.i18n/locale",-237875589),locale,new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","format-options","com.fulcrologic.fulcro-i18n.i18n/format-options",1795706046),options], null);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__72065) : formatter.call(null,G__72065));
}catch (e72064){var e = e72064;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro-i18n.i18n",null,115,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to format output ",e], null);
}),null)),null,-1717054600,null);

return "???";
}}
}));

(com.fulcrologic.fulcro_i18n.i18n.t.cljs$lang$maxFixedArity = 2);

(tr = (function com$fulcrologic$fulcro_i18n$i18n$tr(msg){
return com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$1(msg);
}));
(trc = (function (ctxt,msg){
return com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro-i18n.i18n","context","com.fulcrologic.fulcro-i18n.i18n/context",-564931405),ctxt], null));
}));
(trf = (function() { 
var com$fulcrologic$fulcro_i18n$i18n$trf__delegate = function (fmt,args){
var argmap = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))) && (cljs.core.map_QMARK_(cljs.core.first(args)))))?cljs.core.first(args):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args))));
return com.fulcrologic.fulcro_i18n.i18n.t.cljs$core$IFn$_invoke$arity$2(fmt,argmap);
};
var com$fulcrologic$fulcro_i18n$i18n$trf = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__72073__i = 0, G__72073__a = new Array(arguments.length -  1);
while (G__72073__i < G__72073__a.length) {G__72073__a[G__72073__i] = arguments[G__72073__i + 1]; ++G__72073__i;}
  args = new cljs.core.IndexedSeq(G__72073__a,0,null);
} 
return com$fulcrologic$fulcro_i18n$i18n$trf__delegate.call(this,fmt,args);};
com$fulcrologic$fulcro_i18n$i18n$trf.cljs$lang$maxFixedArity = 1;
com$fulcrologic$fulcro_i18n$i18n$trf.cljs$lang$applyTo = (function (arglist__72074){
var fmt = cljs.core.first(arglist__72074);
var args = cljs.core.rest(arglist__72074);
return com$fulcrologic$fulcro_i18n$i18n$trf__delegate(fmt,args);
});
com$fulcrologic$fulcro_i18n$i18n$trf.cljs$core$IFn$_invoke$arity$variadic = com$fulcrologic$fulcro_i18n$i18n$trf__delegate;
return com$fulcrologic$fulcro_i18n$i18n$trf;
})()
);

//# sourceMappingURL=com.fulcrologic.fulcro_i18n.i18n.js.map
