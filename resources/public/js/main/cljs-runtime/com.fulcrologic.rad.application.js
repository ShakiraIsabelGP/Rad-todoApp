goog.provide('com.fulcrologic.rad.application');
com.fulcrologic.rad.application.secured_request_middleware = (function com$fulcrologic$rad$application$secured_request_middleware(p__71778){
var map__71779 = p__71778;
var map__71779__$1 = (((((!((map__71779 == null))))?(((((map__71779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71779):map__71779);
var csrf_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71779__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856));
var G__71781 = com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(csrf_token)){
return com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$core$IFn$_invoke$arity$2(G__71781,csrf_token);
} else {
return G__71781;
}
});
/**
 * A set of the keywords that should not appear on network requests.
 */
com.fulcrologic.rad.application.default_network_blacklist = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.rad.blob","blobs","com.fulcrologic.rad.blob/blobs",-1431153434),com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)]);
/**
 * Returns an elision predicate that will return true if the keyword k is in the blacklist or has the namespace
 *   `ui`.
 */
com.fulcrologic.rad.application.elision_predicate = (function com$fulcrologic$rad$application$elision_predicate(blacklist){
return (function (k){
var kw_namespace = (function (k__$1){
if((k__$1 instanceof cljs.core.Keyword)){
return cljs.core.namespace(k__$1);
} else {
return false;
}
});
var k__$1 = ((cljs.core.vector_QMARK_(k))?cljs.core.first(k):k);
var ns = (function (){var G__71782 = k__$1;
if((G__71782 == null)){
return null;
} else {
return kw_namespace(G__71782);
}
})();
return ((cljs.core.contains_QMARK_(blacklist,k__$1)) || (((typeof ns === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ui",ns)))));
});
});
/**
 * Given a params map, elides any k-v pairs where `(pred k)` is false.
 */
com.fulcrologic.rad.application.elide_params = (function com$fulcrologic$rad$application$elide_params(params,pred){
return clojure.walk.postwalk((function (x){
if(cljs.core.truth_(((cljs.core.vector_QMARK_(x))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))?(function (){var G__71785 = cljs.core.first(x);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__71785) : pred.call(null,G__71785));
})():false):false))){
return null;
} else {
return x;
}
}),params);
});
/**
 * Like df/elide-ast-nodes but also applies elision-predicate logic to mutation params.
 */
com.fulcrologic.rad.application.elide_ast_nodes = (function com$fulcrologic$rad$application$elide_ast_nodes(p__71787,elision_predicate){
var map__71788 = p__71787;
var map__71788__$1 = (((((!((map__71788 == null))))?(((((map__71788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71788):map__71788);
var ast = map__71788__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71788__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71788__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = (function (){var and__4115__auto__ = union_key;
if(cljs.core.truth_(and__4115__auto__)){
return (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(union_key) : elision_predicate.call(null,union_key));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var or__4126__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(key) : elision_predicate.call(null,key));
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(children) <= (2));
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.application",null,60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], null);
}),null)),null,-1314263603,null);
} else {
}

var new_ast = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__71786_SHARP_){
return (com.fulcrologic.rad.application.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.application.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__71786_SHARP_,elision_predicate) : com.fulcrologic.rad.application.elide_ast_nodes.call(null,p1__71786_SHARP_,elision_predicate));
}),c));
})),new cljs.core.Keyword(null,"params","params",710516235),com.fulcrologic.rad.application.elide_params,elision_predicate);
if(cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new_ast))){
return new_ast;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_ast,new cljs.core.Keyword(null,"children","children",-940561982));
}
}
});
/**
 * Returns an EQL transform that removes `(pred k)` keywords from network requests.
 */
com.fulcrologic.rad.application.global_eql_transform = (function com$fulcrologic$rad$application$global_eql_transform(pred){
return (function (ast){
var mutation_QMARK_ = (new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol);
var has_children_QMARK_ = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var G__71790 = com.fulcrologic.rad.application.elide_ast_nodes(ast,pred);
var G__71790__$1 = ((((mutation_QMARK_) && (cljs.core.not(has_children_QMARK_))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71790,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,edn_query_language.core.expr__GT_ast(new cljs.core.Symbol(null,"*","*",345799209,null))):G__71790);
if(mutation_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__71790__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,edn_query_language.core.expr__GT_ast(new cljs.core.Keyword(null,"tempids","tempids",1767509089)));
} else {
return G__71790__$1;
}
});
});
/**
 * Remote error detection for RAD that adds in support for form errors.
 */
com.fulcrologic.rad.application.default_remote_error_QMARK_ = (function com$fulcrologic$rad$application$default_remote_error_QMARK_(p__71791){
var map__71792 = p__71791;
var map__71792__$1 = (((((!((map__71792 == null))))?(((((map__71792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71792):map__71792);
var result = map__71792__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71792__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var or__4126__auto__ = (com.fulcrologic.fulcro.application.default_remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.application.default_remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : com.fulcrologic.fulcro.application.default_remote_error_QMARK_.call(null,result));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443)], null)));
}
});
/**
 * Create a new fulcro RAD application with reasonable defaults.
 * 
 *   `options` is the same as for `app/fulcro-app`. You should use caution when overridding the :optimized-render!
 * or `:global-eql-transform` options.
 */
com.fulcrologic.rad.application.fulcro_rad_app = (function com$fulcrologic$rad$application$fulcro_rad_app(p__71794){
var map__71795 = p__71794;
var map__71795__$1 = (((((!((map__71795 == null))))?(((((map__71795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71795):map__71795);
var options = map__71795__$1;
var remote_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71795__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var token = (((typeof fulcro_network_csrf_token !== 'undefined'))?fulcro_network_csrf_token:null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.fulcrologic.fulcro.networking.http_remote.fulcro_http_remote(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/api",new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),com.fulcrologic.rad.application.secured_request_middleware(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),token], null))], null))], null)], null);
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548),com.fulcrologic.rad.application.global_eql_transform(com.fulcrologic.rad.application.elision_predicate(com.fulcrologic.rad.application.default_network_blacklist)),new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964),com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_], null),options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497),(function (result){
var or__4126__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(remote_error_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)) === true;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return com.fulcrologic.rad.application.default_remote_error_QMARK_(result);
}
})], null)], 0)));
});
/**
 * Install the given control set as the RAD UI controls used for rendering forms. This should be called before mounting
 *   your app. The `controls` is just a map from data type to a sub-map that contains a :default key, with optional
 *   alternate renderings for that data type that can be selected with `::form/field-style {attr-key style-key}`.
 */
com.fulcrologic.rad.application.install_ui_controls_BANG_ = (function com$fulcrologic$rad$application$install_ui_controls_BANG_(app,controls){
var map__71797 = app;
var map__71797__$1 = (((((!((map__71797 == null))))?(((((map__71797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71797):map__71797);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71797__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),controls);
});

//# sourceMappingURL=com.fulcrologic.rad.application.js.map
