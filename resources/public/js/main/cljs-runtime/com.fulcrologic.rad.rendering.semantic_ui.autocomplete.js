goog.provide('com.fulcrologic.rad.rendering.semantic_ui.autocomplete');

var options__50078__auto___62917 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$query_STAR_(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$render_AutocompleteQuery(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.autocomplete !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteQuery !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteQuery = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62917,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteQuery,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","AutocompleteQuery","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/AutocompleteQuery",-81381062),options__50078__auto___62917);
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.to_js = (function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$to_js(v){
return cljs.core.clj__GT_js(v);
});
/**
 * 
 */
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.normalize_options = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","normalize-options","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/normalize-options",-331921921,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","normalize-options","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/normalize-options",-331921921,null),(function (fulcro_mutation_env_symbol){
var map__62843 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__62843__$1 = (((((!((map__62843 == null))))?(((((map__62843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62843):map__62843);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62843__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62843__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$action(p__62845){
var map__62846 = p__62845;
var map__62846__$1 = (((((!((map__62846 == null))))?(((((map__62846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62846):map__62846);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62846__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__62848_62918 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__62849_62919 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__62849_62919);

try{var options_62920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),source);
var normalized_options_62921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62850){
var map__62851 = p__62850;
var map__62851__$1 = (((((!((map__62851 == null))))?(((((map__62851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62851):map__62851);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ({"text": text, "value": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))});
}),options_62920));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__53991__auto__){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(s__53991__auto__,source),target,normalized_options_62921);
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__62848_62918);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__62853 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__62854 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__62854);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__62853);
}})], null);
}));

var options__50078__auto___62922 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
var map__62858 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62858__$1 = (((((!((map__62858 == null))))?(((((map__62858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62858):map__62858);
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62858__$1,new cljs.core.Keyword("autocomplete","debounce-ms","autocomplete/debounce-ms",113075289));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load!","load!",388084319),com.fulcrologic.rad.options_util.debounce((function (s){
var map__62865 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62865__$1 = (((((!((map__62865 == null))))?(((((map__62865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62865):map__62865);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62865__$1,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187));
var search_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62865__$1,new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844));
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,search_key,com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteQuery,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-string","search-string",68818394),s], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","normalize-options","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/normalize-options",-331921921,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),search_key,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),id,new cljs.core.Keyword("ui","options","ui/options",99633773)], null)], null)], null));
}),(function (){var or__4126__auto__ = debounce_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (200);
}
})())], null);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__62867 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62867__$1 = (((((!((map__62867 == null))))?(((((map__62867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62867):map__62867);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187));
var search_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844));
var value = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"value","value",305978217)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"value","value",305978217)));
if(cljs.core.truth_((function (){var and__4115__auto__ = search_key;
if(cljs.core.truth_(and__4115__auto__)){
return value;
} else {
return and__4115__auto__;
}
})())){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(this$,search_key,com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteQuery,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",1907811652),value], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","normalize-options","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/normalize-options",-331921921,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),search_key,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),id,new cljs.core.Keyword("ui","options","ui/options",99633773)], null)], null)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),new cljs.core.Keyword("ui","search-string","ui/search-string",68839790),new cljs.core.Keyword("ui","options","ui/options",99633773),new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844),new cljs.core.Keyword("autocomplete","debounce-ms","autocomplete/debounce-ms",113075289),new cljs.core.Keyword("autocomplete","minimum-input","autocomplete/minimum-input",-924197187)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$render_AutocompleteField(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__62869 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62869__$1 = (((((!((map__62869 == null))))?(((((map__62869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62869):map__62869);
var props = map__62869__$1;
var search_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62869__$1,new cljs.core.Keyword("ui","search-string","ui/search-string",68839790));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62869__$1,new cljs.core.Keyword("ui","options","ui/options",99633773));
var map__62870 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__62870__$1 = (((((!((map__62870 == null))))?(((((map__62870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62870):map__62870);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var invalid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"invalid?","invalid?",789397235));
var validation_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"validation-message","validation-message",-1897616074));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62870__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var load_BANG_ = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"load!","load!",388084319));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,(cljs.core.truth_(invalid_QMARK_)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(validation_message)].join(''):null)], null),null),(cljs.core.truth_(read_only_QMARK_)?goog.object.getValueByKeys(options,(0),"text"):com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(({"openOnFocus": true, "selectOnBlur": true, "selectOnNavigation": true, "value": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)), "onSearchChange": (function (_,v){
var query = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(v,"searchQuery") : com.fulcrologic.fulcro.components.isoget.call(null,v,"searchQuery"));
return (load_BANG_.cljs$core$IFn$_invoke$arity$1 ? load_BANG_.cljs$core$IFn$_invoke$arity$1(query) : load_BANG_.call(null,query));
}), "search": true, "closeOnBlur": true, "options": (cljs.core.truth_(options)?options:[]), "onChange": (function (_,v){
if(cljs.core.truth_(onChange)){
var G__62876 = (function (){var G__62877 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(v,"value") : com.fulcrologic.fulcro.components.isoget.call(null,v,"value"));
if((G__62877 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__62877);
}
})();
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__62876) : onChange.call(null,G__62876));
} else {
return null;
}
}), "selection": true})))], null),new cljs.core.Keyword(null,".field",".field",954681856));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.autocomplete !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteField !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteField = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62922,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteField,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","AutocompleteField","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/AutocompleteField",71481928),options__50078__auto___62922);
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteField,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187)], null));
/**
 * 
 */
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.gc_autocomplete = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","gc-autocomplete","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/gc-autocomplete",-431345198,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","gc-autocomplete","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/gc-autocomplete",-431345198,null),(function (fulcro_mutation_env_symbol){
var map__62884 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__62884__$1 = (((((!((map__62884 == null))))?(((((map__62884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62884):map__62884);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62884__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$action(p__62886){
var map__62887 = p__62886;
var map__62887__$1 = (((((!((map__62887 == null))))?(((((map__62887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62887):map__62887);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62887__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__62889_62923 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__62890_62924 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__62890_62924);

try{if(cljs.core.truth_(id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),id], null));
} else {
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__62889_62923);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__62891 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__62892 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__62892);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__62891);
}})], null);
}));

var options__50078__auto___62925 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field-id","field-id",-353751335),com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0()], null);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var id_62926 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var map__62897_62927 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__62897_62928__$1 = (((((!((map__62897_62927 == null))))?(((((map__62897_62927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62897_62927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62897_62927):map__62897_62927);
var attribute_62929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62897_62928__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var map__62898_62930 = new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138).cljs$core$IFn$_invoke$arity$1(attribute_62929);
var map__62898_62931__$1 = (((((!((map__62898_62930 == null))))?(((((map__62898_62930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62898_62930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62898_62930):map__62898_62930);
var search_key_62932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62898_62931__$1,new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844));
var debounce_ms_62933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62898_62931__$1,new cljs.core.Keyword("autocomplete","debounce-ms","autocomplete/debounce-ms",113075289));
var minimum_input_62934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62898_62931__$1,new cljs.core.Keyword("autocomplete","minimum-input","autocomplete/minimum-input",-924197187));
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_(this$,com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteField,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),id_62926,new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844),search_key_62932,new cljs.core.Keyword("autocomplete","debounce-ms","autocomplete/debounce-ms",113075289),debounce_ms_62933,new cljs.core.Keyword("autocomplete","minimum-input","autocomplete/minimum-input",-924197187),minimum_input_62934,new cljs.core.Keyword("ui","search-string","ui/search-string",68839790),"",new cljs.core.Keyword("ui","options","ui/options",99633773),[]], null));

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1){
return true;
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (this$){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"field-id","field-id",-353751335))], null);
return (com.fulcrologic.rad.rendering.semantic_ui.autocomplete.gc_autocomplete.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.autocomplete.gc_autocomplete.cljs$core$IFn$_invoke$arity$1(G__62904) : com.fulcrologic.rad.rendering.semantic_ui.autocomplete.gc_autocomplete.call(null,G__62904));
})()], null));

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$render_AutocompleteFieldRoot(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__62905 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__62905__$1 = (((((!((map__62905 == null))))?(((((map__62905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62905):map__62905);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62905__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62905__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var map__62907 = new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138).cljs$core$IFn$_invoke$arity$1(attribute);
var map__62907__$1 = (((((!((map__62907 == null))))?(((((map__62907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62907):map__62907);
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62907__$1,new cljs.core.Keyword("autocomplete","debounce-ms","autocomplete/debounce-ms",113075289));
var search_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62907__$1,new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844));
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var map__62908 = env;
var map__62908__$1 = (((((!((map__62908 == null))))?(((((map__62908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62908):map__62908);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62908__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance)),k);
var id = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var label = com.fulcrologic.rad.form.field_label(env,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var invalid_QMARK_ = (com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.invalid_attribute_value_QMARK_.call(null,env,attribute));
var validation_message = (cljs.core.truth_(invalid_QMARK_)?(com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.ui_validation.validation_error_message.cljs$core$IFn$_invoke$arity$2(env,attribute) : com.fulcrologic.rad.ui_validation.validation_error_message.call(null,env,attribute)):null);
var field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),id], null));
var G__62911 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(field,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","autocomplete-id","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/autocomplete-id",1641420187),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("autocomplete","search-key","autocomplete/search-key",318849844),search_key,new cljs.core.Keyword("autocomplete","debounce-ms","autocomplete/debounce-ms",113075289),debounce_ms], 0));
var G__62912 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"invalid?","invalid?",789397235),invalid_QMARK_,new cljs.core.Keyword(null,"validation-message","validation-message",-1897616074),validation_message,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),read_only_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (normalized_value){
if(cljs.core.truth_(normalized_value)){
return com.fulcrologic.rad.form.input_changed_BANG_(env,k,normalized_value);
} else {
return null;
}
})], null);
return (com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field.cljs$core$IFn$_invoke$arity$2(G__62911,G__62912) : com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field.call(null,G__62911,G__62912));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.autocomplete !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteFieldRoot !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteFieldRoot = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50078__auto___62925,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteFieldRoot,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","AutocompleteFieldRoot","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/AutocompleteFieldRoot",-1011632802),options__50078__auto___62925);
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field_root = com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.autocomplete.AutocompleteFieldRoot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attribute","attribute",-2074029119).cljs$core$IFn$_invoke$arity$1(props));
})], null));
com.fulcrologic.rad.rendering.semantic_ui.autocomplete.render_autocomplete_field = (function com$fulcrologic$rad$rendering$semantic_ui$autocomplete$render_autocomplete_field(env,p__62913){
var map__62914 = p__62913;
var map__62914__$1 = (((((!((map__62914 == null))))?(((((map__62914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62914):map__62914);
var attribute = map__62914__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62914__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325),new cljs.core.Keyword(null,"one","one",935007904));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.autocomplete",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot autocomplete to-many attributes with renderer",new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.autocomplete","render-autocomplete-field","com.fulcrologic.rad.rendering.semantic-ui.autocomplete/render-autocomplete-field",1795278778,null)], null);
}),null)),null,-216766574,null);
} else {
var G__62916 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attribute], null);
return (com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field_root.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field_root.cljs$core$IFn$_invoke$arity$1(G__62916) : com.fulcrologic.rad.rendering.semantic_ui.autocomplete.ui_autocomplete_field_root.call(null,G__62916));
}
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.autocomplete.js.map
