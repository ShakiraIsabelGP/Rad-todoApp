goog.provide('com.wsscode.pathom.parser');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__76059){
return cljs.core.set_QMARK_(G__76059);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
com.wsscode.pathom.parser.atom_QMARK_ = (function com$wsscode$pathom$parser$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.parser.mark_meta = (function com$wsscode$pathom$parser$mark_meta(source,target){
var G__76061 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76061,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__76061;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__76066){
var vec__76067 = p__76066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76067,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__76070){
var vec__76072 = p__76070;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76072,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76072,(1),null);
var call = vec__76072;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : com.wsscode.pathom.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : com.wsscode.pathom.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__4126__auto__ = args;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__76077 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76077,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__76077;
}
}
});
/**
 * Convert a query to its AST representation.
 */
com.wsscode.pathom.parser.query__GT_ast = (function com$wsscode$pathom$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.join__GT_ast = (function com$wsscode$pathom$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__76082 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76082,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__76087){
var vec__76088 = p__76087;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76088,(0),null);
var ref = vec__76088;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.parser.expr__GT_ast = (function com$wsscode$pathom$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return com.wsscode.pathom.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return com.wsscode.pathom.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return com.wsscode.pathom.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return com.wsscode.pathom.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
com.wsscode.pathom.parser.wrap_expr = (function com$wsscode$pathom$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__76094 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__76094,null,(1),null));
} else {
return G__76094;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
com.wsscode.pathom.parser.parameterize = (function com$wsscode$pathom$parser$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_(params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
com.wsscode.pathom.parser.ast__GT_expr = (function com$wsscode$pathom$parser$ast__GT_expr(var_args){
var G__76104 = arguments.length;
switch (G__76104) {
case 1:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
}));

(com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__76108,unparse_QMARK_){
var map__76109 = p__76108;
var map__76109__$1 = (((((!((map__76109 == null))))?(((((map__76109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76109):map__76109);
var ast = map__76109__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76109__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76109__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76109__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__76111 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76099_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__76099_SHARP_,unparse_QMARK_);
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__76111,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__76111;
}
} else {
var map__76115 = ast;
var map__76115__$1 = (((((!((map__76115 == null))))?(((((map__76115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76115):map__76115);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76115__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76115__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76115__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76115__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.wsscode.pathom.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__4115__auto__ = params;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__4115__auto__;
}
})())?(function (){var expr = com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return com.wsscode.pathom.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?com.wsscode.pathom.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return false;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))){
var map__76121 = ast;
var map__76121__$1 = (((((!((map__76121 == null))))?(((((map__76121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76121):map__76121);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__76123 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__76123,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__76123;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76126){
var map__76127 = p__76126;
var map__76127__$1 = (((((!((map__76127 == null))))?(((((map__76127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76127):map__76127);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76127__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76127__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__76129 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76100_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__76100_SHARP_,unparse_QMARK_);
})),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__76129,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__76129;
}
})()], null);
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__76130 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76101_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__76101_SHARP_,unparse_QMARK_);
})),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__76130,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__76130;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
}));

(com.wsscode.pathom.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2);

com.wsscode.pathom.parser.focus_subquery_union_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76131_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__76131_SHARP_),p1__76131_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children,p__76132){
var map__76133 = p__76132;
var map__76133__$1 = (((((!((map__76133 == null))))?(((((map__76133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76133):map__76133);
var union_entry = map__76133__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76133__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5733__auto__)){
var sub = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
com.wsscode.pathom.parser.focus_subquery_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children,p__76136){
var map__76138 = p__76136;
var map__76138__$1 = (((((!((map__76138 == null))))?(((((map__76138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76138):map__76138);
var focus = map__76138__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76138__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76138__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5733__auto__)){
var source = temp__5733__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children__$1,source__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source__$1,focus) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,source__$1,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,com.wsscode.pathom.parser.focus_subquery_union_STAR_(source__$1,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,source__$1);

}
}
}),children,source);
} else {
return children;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
com.wsscode.pathom.parser.focus_subquery = (function com$wsscode$pathom$parser$focus_subquery(query,sub_query){
var query_ast = com.wsscode.pathom.parser.query__GT_ast(query);
var sub_ast = com.wsscode.pathom.parser.query__GT_ast(sub_query);
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.parser.focus_subquery_STAR_(query_ast,sub_ast),true);
});
com.wsscode.pathom.parser.normalize_atom = (function com$wsscode$pathom$parser$normalize_atom(x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.parser.ast__GT_out_key = (function com$wsscode$pathom$parser$ast__GT_out_key(ast){
var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"key","key",-1516042587));
}
});
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__76147){
var map__76148 = p__76147;
var map__76148__$1 = (((((!((map__76148 == null))))?(((((map__76148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76148):map__76148);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76148__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76148__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__29443__auto__ = (function (){var map__76154 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__76154__$1 = (((((!((map__76154 == null))))?(((((map__76154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76154):map__76154);
var tx_ast = map__76154__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__76160 = children;
var vec__76161 = G__76160;
var seq__76162 = cljs.core.seq(vec__76161);
var first__76163 = cljs.core.first(seq__76162);
var seq__76162__$1 = cljs.core.next(seq__76162);
var map__76164 = first__76163;
var map__76164__$1 = (((((!((map__76164 == null))))?(((((map__76164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76164):map__76164);
var ast = map__76164__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76164__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76164__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76164__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76164__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__76162__$1;
var res__$1 = res;
var G__76160__$1 = G__76160;
while(true){
var res__$2 = res__$1;
var vec__76175 = G__76160__$1;
var seq__76176 = cljs.core.seq(vec__76175);
var first__76177 = cljs.core.first(seq__76176);
var seq__76176__$1 = cljs.core.next(seq__76176);
var map__76178 = first__76177;
var map__76178__$1 = (((((!((map__76178 == null))))?(((((map__76178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76178):map__76178);
var ast__$1 = map__76178__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76178__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76178__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76178__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76178__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__76176__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__76190 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__76190__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__76190,new cljs.core.Keyword(null,"query","query",-1288509510)):G__76190);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76190__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__76190__$1;
}
})();
var value = (function (){var G__76191 = type__$1;
var G__76191__$1 = (((G__76191 instanceof cljs.core.Keyword))?G__76191.fqn:null);
switch (G__76191__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__76192 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__76192__$1 = (((((!((map__76192 == null))))?(((((map__76192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76192):map__76192);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76192__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__78398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__78399 = tail__$1;
res__$1 = G__78398;
G__76160__$1 = G__78399;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__29442__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__29443__auto__;
} else {
var map__76194 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__76194__$1 = (((((!((map__76194 == null))))?(((((map__76194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76194):map__76194);
var tx_ast = map__76194__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__76200 = children;
var vec__76201 = G__76200;
var seq__76202 = cljs.core.seq(vec__76201);
var first__76203 = cljs.core.first(seq__76202);
var seq__76202__$1 = cljs.core.next(seq__76202);
var map__76204 = first__76203;
var map__76204__$1 = (((((!((map__76204 == null))))?(((((map__76204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76204):map__76204);
var ast = map__76204__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76204__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76204__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76204__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76204__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__76202__$1;
var res__$1 = res;
var G__76200__$1 = G__76200;
while(true){
var res__$2 = res__$1;
var vec__76227 = G__76200__$1;
var seq__76228 = cljs.core.seq(vec__76227);
var first__76229 = cljs.core.first(seq__76228);
var seq__76228__$1 = cljs.core.next(seq__76228);
var map__76230 = first__76229;
var map__76230__$1 = (((((!((map__76230 == null))))?(((((map__76230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76230):map__76230);
var ast__$1 = map__76230__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76230__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76230__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76230__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76230__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__76228__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__76232 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__76232__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__76232,new cljs.core.Keyword(null,"query","query",-1288509510)):G__76232);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76232__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__76232__$1;
}
})();
var value = (function (){var G__76233 = type__$1;
var G__76233__$1 = (((G__76233 instanceof cljs.core.Keyword))?G__76233.fqn:null);
switch (G__76233__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__76234 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__76234__$1 = (((((!((map__76234 == null))))?(((((map__76234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76234):map__76234);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76234__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__78401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__78402 = tail__$1;
res__$1 = G__78401;
G__76200__$1 = G__78402;
continue;
} else {
return res__$2;
}
break;
}
}
});
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__76238){
var map__76240 = p__76238;
var map__76240__$1 = (((((!((map__76240 == null))))?(((((map__76240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76240):map__76240);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76240__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76240__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_76659){
var state_val_76660 = (state_76659[(1)]);
if((state_val_76660 === (121))){
var inst_76601 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76661_78403 = state_76659__$1;
(statearr_76661_78403[(2)] = inst_76601);

(statearr_76661_78403[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (65))){
var state_76659__$1 = state_76659;
var statearr_76662_78404 = state_76659__$1;
(statearr_76662_78404[(2)] = null);

(statearr_76662_78404[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (70))){
var inst_76436 = (state_76659[(7)]);
var state_76659__$1 = state_76659;
var statearr_76663_78405 = state_76659__$1;
(statearr_76663_78405[(2)] = inst_76436);

(statearr_76663_78405[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (62))){
var state_76659__$1 = state_76659;
var statearr_76664_78406 = state_76659__$1;
(statearr_76664_78406[(2)] = null);

(statearr_76664_78406[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (74))){
var state_76659__$1 = state_76659;
var statearr_76665_78407 = state_76659__$1;
(statearr_76665_78407[(2)] = false);

(statearr_76665_78407[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (110))){
var inst_76555 = (state_76659[(8)]);
var inst_76579 = (state_76659[(2)]);
var state_76659__$1 = (function (){var statearr_76666 = state_76659;
(statearr_76666[(9)] = inst_76579);

return statearr_76666;
})();
var G__76667_78408 = inst_76555;
var G__76667_78409__$1 = (((G__76667_78408 instanceof cljs.core.Keyword))?G__76667_78408.fqn:null);
switch (G__76667_78409__$1) {
case "call":
var statearr_76668_78411 = state_76659__$1;
(statearr_76668_78411[(1)] = (112));


break;
case "prop":
case "join":
case "union":
var statearr_76669_78412 = state_76659__$1;
(statearr_76669_78412[(1)] = (128));


break;
default:
var statearr_76670_78413 = state_76659__$1;
(statearr_76670_78413[(1)] = (132));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (130))){
var inst_76619 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_76620 = (new Error(inst_76619));
var inst_76621 = (function(){throw inst_76620})();
var state_76659__$1 = state_76659;
var statearr_76676_78414 = state_76659__$1;
(statearr_76676_78414[(2)] = inst_76621);

(statearr_76676_78414[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (128))){
var state_76659__$1 = state_76659;
if(cljs.core.truth_(read)){
var statearr_76677_78415 = state_76659__$1;
(statearr_76677_78415[(1)] = (129));

} else {
var statearr_76678_78416 = state_76659__$1;
(statearr_76678_78416[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (7))){
var inst_76459 = (state_76659[(10)]);
var inst_76459__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_76461 = (inst_76459__$1 == null);
var inst_76462 = cljs.core.not(inst_76461);
var state_76659__$1 = (function (){var statearr_76679 = state_76659;
(statearr_76679[(10)] = inst_76459__$1);

return statearr_76679;
})();
if(inst_76462){
var statearr_76680_78417 = state_76659__$1;
(statearr_76680_78417[(1)] = (73));

} else {
var statearr_76683_78418 = state_76659__$1;
(statearr_76683_78418[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (59))){
var inst_76396 = (state_76659[(11)]);
var state_76659__$1 = state_76659;
var statearr_76684_78419 = state_76659__$1;
(statearr_76684_78419[(2)] = inst_76396);

(statearr_76684_78419[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (86))){
var state_76659__$1 = state_76659;
var statearr_76685_78420 = state_76659__$1;
(statearr_76685_78420[(2)] = false);

(statearr_76685_78420[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (20))){
var inst_76313 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76313)){
var statearr_76686_78421 = state_76659__$1;
(statearr_76686_78421[(1)] = (24));

} else {
var statearr_76687_78422 = state_76659__$1;
(statearr_76687_78422[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (72))){
var inst_76440 = (state_76659[(2)]);
var inst_76441 = com.wsscode.async.async_cljs.throw_err(inst_76440);
var state_76659__$1 = state_76659;
var statearr_76690_78423 = state_76659__$1;
(statearr_76690_78423[(2)] = inst_76441);

(statearr_76690_78423[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (58))){
var inst_76396 = (state_76659[(11)]);
var inst_76414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76396);
var state_76659__$1 = state_76659;
var statearr_76691_78424 = state_76659__$1;
(statearr_76691_78424[(2)] = inst_76414);

(statearr_76691_78424[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (60))){
var inst_76418 = (state_76659[(12)]);
var inst_76417 = (state_76659[(2)]);
var inst_76418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76417,new cljs.core.Keyword(null,"action","action",-811238024));
var state_76659__$1 = (function (){var statearr_76692 = state_76659;
(statearr_76692[(12)] = inst_76418__$1);

return statearr_76692;
})();
if(cljs.core.truth_(inst_76418__$1)){
var statearr_76693_78425 = state_76659__$1;
(statearr_76693_78425[(1)] = (61));

} else {
var statearr_76694_78426 = state_76659__$1;
(statearr_76694_78426[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (27))){
var inst_76325 = (state_76659[(13)]);
var inst_76332 = (state_76659[(14)]);
var inst_76331 = cljs.core.seq(inst_76325);
var inst_76332__$1 = cljs.core.first(inst_76331);
var inst_76333 = cljs.core.next(inst_76331);
var inst_76335 = (inst_76332__$1 == null);
var inst_76336 = cljs.core.not(inst_76335);
var state_76659__$1 = (function (){var statearr_76695 = state_76659;
(statearr_76695[(14)] = inst_76332__$1);

(statearr_76695[(15)] = inst_76333);

return statearr_76695;
})();
if(inst_76336){
var statearr_76696_78427 = state_76659__$1;
(statearr_76696_78427[(1)] = (29));

} else {
var statearr_76697_78428 = state_76659__$1;
(statearr_76697_78428[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (1))){
var state_76659__$1 = state_76659;
var statearr_76698_78429 = state_76659__$1;
(statearr_76698_78429[(2)] = null);

(statearr_76698_78429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (69))){
var inst_76436 = (state_76659[(7)]);
var state_76659__$1 = state_76659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76659__$1,(72),inst_76436);
} else {
if((state_val_76660 === (101))){
var inst_76552 = (state_76659[(16)]);
var inst_76552__$1 = (state_76659[(2)]);
var inst_76553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76552__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_76554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76552__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_76555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76552__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_76556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76552__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_76659__$1 = (function (){var statearr_76703 = state_76659;
(statearr_76703[(16)] = inst_76552__$1);

(statearr_76703[(17)] = inst_76553);

(statearr_76703[(18)] = inst_76554);

(statearr_76703[(8)] = inst_76555);

(statearr_76703[(19)] = inst_76556);

return statearr_76703;
})();
if(cljs.core.truth_(inst_76552__$1)){
var statearr_76704_78430 = state_76659__$1;
(statearr_76704_78430[(1)] = (102));

} else {
var statearr_76705_78431 = state_76659__$1;
(statearr_76705_78431[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (24))){
var inst_76295 = (state_76659[(20)]);
var inst_76315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76295);
var state_76659__$1 = state_76659;
var statearr_76708_78432 = state_76659__$1;
(statearr_76708_78432[(2)] = inst_76315);

(statearr_76708_78432[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (102))){
var inst_76554 = (state_76659[(18)]);
var inst_76483 = (state_76659[(21)]);
var inst_76552 = (state_76659[(16)]);
var inst_76553 = (state_76659[(17)]);
var inst_76558 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_76559 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_76554];
var inst_76560 = cljs.core.PersistentHashMap.fromArrays(inst_76558,inst_76559);
var inst_76561 = com.wsscode.pathom.trace.trace(inst_76483,inst_76560);
var inst_76563 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_76564 = [inst_76552,inst_76553];
var inst_76565 = cljs.core.PersistentHashMap.fromArrays(inst_76563,inst_76564);
var inst_76566 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_76483,inst_76565], 0));
var inst_76567 = (inst_76553 == null);
var state_76659__$1 = (function (){var statearr_76709 = state_76659;
(statearr_76709[(22)] = inst_76561);

(statearr_76709[(23)] = inst_76566);

return statearr_76709;
})();
if(cljs.core.truth_(inst_76567)){
var statearr_76710_78433 = state_76659__$1;
(statearr_76710_78433[(1)] = (105));

} else {
var statearr_76711_78434 = state_76659__$1;
(statearr_76711_78434[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (135))){
var inst_76552 = (state_76659[(16)]);
var inst_76522 = (state_76659[(24)]);
var inst_76531 = (state_76659[(25)]);
var inst_76636 = (state_76659[(2)]);
var inst_76637 = com.wsscode.pathom.parser.ast__GT_out_key(inst_76552);
var inst_76638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_76522,inst_76637,inst_76636);
var inst_76522__$1 = inst_76638;
var inst_76523 = inst_76531;
var state_76659__$1 = (function (){var statearr_76712 = state_76659;
(statearr_76712[(24)] = inst_76522__$1);

(statearr_76712[(26)] = inst_76523);

return statearr_76712;
})();
var statearr_76713_78435 = state_76659__$1;
(statearr_76713_78435[(2)] = null);

(statearr_76713_78435[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (55))){
var state_76659__$1 = state_76659;
var statearr_76714_78436 = state_76659__$1;
(statearr_76714_78436[(2)] = true);

(statearr_76714_78436[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (85))){
var state_76659__$1 = state_76659;
var statearr_76715_78437 = state_76659__$1;
(statearr_76715_78437[(2)] = true);

(statearr_76715_78437[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (39))){
var inst_76324 = (state_76659[(27)]);
var state_76659__$1 = state_76659;
var statearr_76716_78438 = state_76659__$1;
(statearr_76716_78438[(2)] = inst_76324);

(statearr_76716_78438[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (88))){
var inst_76495 = (state_76659[(28)]);
var inst_76514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76495);
var state_76659__$1 = state_76659;
var statearr_76717_78439 = state_76659__$1;
(statearr_76717_78439[(2)] = inst_76514);

(statearr_76717_78439[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (46))){
var inst_76357 = (state_76659[(29)]);
var inst_76387 = (state_76659[(2)]);
var state_76659__$1 = (function (){var statearr_76721 = state_76659;
(statearr_76721[(30)] = inst_76387);

return statearr_76721;
})();
var G__76722_78440 = inst_76357;
var G__76722_78441__$1 = (((G__76722_78440 instanceof cljs.core.Keyword))?G__76722_78440.fqn:null);
switch (G__76722_78441__$1) {
case "call":
var statearr_76723_78443 = state_76659__$1;
(statearr_76723_78443[(1)] = (48));


break;
case "prop":
case "join":
case "union":
var statearr_76724_78444 = state_76659__$1;
(statearr_76724_78444[(1)] = (64));


break;
default:
var statearr_76725_78445 = state_76659__$1;
(statearr_76725_78445[(1)] = (68));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (4))){
var inst_76246 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76731_78446 = state_76659__$1;
(statearr_76731_78446[(2)] = inst_76246);

(statearr_76731_78446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (77))){
var state_76659__$1 = state_76659;
var statearr_76733_78447 = state_76659__$1;
(statearr_76733_78447[(2)] = false);

(statearr_76733_78447[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (106))){
var inst_76566 = (state_76659[(23)]);
var state_76659__$1 = state_76659;
var statearr_76745_78448 = state_76659__$1;
(statearr_76745_78448[(2)] = inst_76566);

(statearr_76745_78448[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (119))){
var state_76659__$1 = state_76659;
var statearr_76746_78449 = state_76659__$1;
(statearr_76746_78449[(2)] = true);

(statearr_76746_78449[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (95))){
var inst_76547 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76547)){
var statearr_76747_78450 = state_76659__$1;
(statearr_76747_78450[(1)] = (99));

} else {
var statearr_76748_78451 = state_76659__$1;
(statearr_76748_78451[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (54))){
var inst_76412 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76412)){
var statearr_76749_78452 = state_76659__$1;
(statearr_76749_78452[(1)] = (58));

} else {
var statearr_76750_78453 = state_76659__$1;
(statearr_76750_78453[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (92))){
var inst_76644 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76751_78454 = state_76659__$1;
(statearr_76751_78454[(2)] = inst_76644);

(statearr_76751_78454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (104))){
var inst_76642 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76752_78455 = state_76659__$1;
(statearr_76752_78455[(2)] = inst_76642);

(statearr_76752_78455[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (15))){
var inst_76259 = (state_76659[(31)]);
var inst_76277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76259);
var state_76659__$1 = state_76659;
var statearr_76753_78456 = state_76659__$1;
(statearr_76753_78456[(2)] = inst_76277);

(statearr_76753_78456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (48))){
var state_76659__$1 = state_76659;
if(cljs.core.truth_(mutate)){
var statearr_76754_78457 = state_76659__$1;
(statearr_76754_78457[(1)] = (49));

} else {
var statearr_76755_78458 = state_76659__$1;
(statearr_76755_78458[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (50))){
var inst_76390 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_76391 = (new Error(inst_76390));
var inst_76392 = (function(){throw inst_76391})();
var state_76659__$1 = state_76659;
var statearr_76756_78459 = state_76659__$1;
(statearr_76756_78459[(2)] = inst_76392);

(statearr_76756_78459[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (116))){
var inst_76588 = (state_76659[(32)]);
var inst_76593 = inst_76588.cljs$lang$protocol_mask$partition0$;
var inst_76594 = (inst_76593 & (64));
var inst_76595 = inst_76588.cljs$core$ISeq$;
var inst_76596 = (cljs.core.PROTOCOL_SENTINEL === inst_76595);
var inst_76597 = ((inst_76594) || (inst_76596));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76597)){
var statearr_76757_78460 = state_76659__$1;
(statearr_76757_78460[(1)] = (119));

} else {
var statearr_76758_78461 = state_76659__$1;
(statearr_76758_78461[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (75))){
var inst_76475 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76475)){
var statearr_76759_78462 = state_76659__$1;
(statearr_76759_78462[(1)] = (79));

} else {
var statearr_76760_78463 = state_76659__$1;
(statearr_76760_78463[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (99))){
var inst_76530 = (state_76659[(33)]);
var inst_76549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76530);
var state_76659__$1 = state_76659;
var statearr_76761_78464 = state_76659__$1;
(statearr_76761_78464[(2)] = inst_76549);

(statearr_76761_78464[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (21))){
var state_76659__$1 = state_76659;
var statearr_76762_78465 = state_76659__$1;
(statearr_76762_78465[(2)] = true);

(statearr_76762_78465[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (31))){
var inst_76349 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76349)){
var statearr_76763_78466 = state_76659__$1;
(statearr_76763_78466[(1)] = (35));

} else {
var statearr_76764_78467 = state_76659__$1;
(statearr_76764_78467[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (113))){
var state_76659__$1 = state_76659;
var statearr_76765_78468 = state_76659__$1;
(statearr_76765_78468[(2)] = null);

(statearr_76765_78468[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (32))){
var state_76659__$1 = state_76659;
var statearr_76766_78469 = state_76659__$1;
(statearr_76766_78469[(2)] = true);

(statearr_76766_78469[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (136))){
var inst_76632 = (state_76659[(2)]);
var inst_76633 = com.wsscode.async.async_cljs.throw_err(inst_76632);
var state_76659__$1 = state_76659;
var statearr_76767_78470 = state_76659__$1;
(statearr_76767_78470[(2)] = inst_76633);

(statearr_76767_78470[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (40))){
var inst_76450 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76768_78471 = state_76659__$1;
(statearr_76768_78471[(2)] = inst_76450);

(statearr_76768_78471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (129))){
var state_76659__$1 = state_76659;
var statearr_76769_78472 = state_76659__$1;
(statearr_76769_78472[(2)] = null);

(statearr_76769_78472[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (91))){
var inst_76523 = (state_76659[(26)]);
var inst_76530 = (state_76659[(33)]);
var inst_76529 = cljs.core.seq(inst_76523);
var inst_76530__$1 = cljs.core.first(inst_76529);
var inst_76531 = cljs.core.next(inst_76529);
var inst_76533 = (inst_76530__$1 == null);
var inst_76534 = cljs.core.not(inst_76533);
var state_76659__$1 = (function (){var statearr_76770 = state_76659;
(statearr_76770[(33)] = inst_76530__$1);

(statearr_76770[(25)] = inst_76531);

return statearr_76770;
})();
if(inst_76534){
var statearr_76771_78473 = state_76659__$1;
(statearr_76771_78473[(1)] = (93));

} else {
var statearr_76772_78474 = state_76659__$1;
(statearr_76772_78474[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (117))){
var state_76659__$1 = state_76659;
var statearr_76773_78475 = state_76659__$1;
(statearr_76773_78475[(2)] = false);

(statearr_76773_78475[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (108))){
var inst_76572 = (state_76659[(34)]);
var inst_76482 = (state_76659[(35)]);
var inst_76576 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_76572,new cljs.core.Keyword(null,"query","query",-1288509510),inst_76482);
var state_76659__$1 = state_76659;
var statearr_76774_78476 = state_76659__$1;
(statearr_76774_78476[(2)] = inst_76576);

(statearr_76774_78476[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (56))){
var state_76659__$1 = state_76659;
var statearr_76775_78477 = state_76659__$1;
(statearr_76775_78477[(2)] = false);

(statearr_76775_78477[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (33))){
var state_76659__$1 = state_76659;
var statearr_76776_78478 = state_76659__$1;
(statearr_76776_78478[(2)] = false);

(statearr_76776_78478[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (13))){
var state_76659__$1 = state_76659;
var statearr_76777_78479 = state_76659__$1;
(statearr_76777_78479[(2)] = false);

(statearr_76777_78479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (22))){
var state_76659__$1 = state_76659;
var statearr_76778_78480 = state_76659__$1;
(statearr_76778_78480[(2)] = false);

(statearr_76778_78480[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (90))){
var inst_76493 = (state_76659[(36)]);
var inst_76481 = (state_76659[(37)]);
var inst_76517 = (state_76659[(2)]);
var inst_76518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76517,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_76519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76517,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_76520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76517,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_76521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76517,new cljs.core.Keyword(null,"params","params",710516235));
var inst_76522 = inst_76493;
var inst_76523 = inst_76481;
var state_76659__$1 = (function (){var statearr_76779 = state_76659;
(statearr_76779[(38)] = inst_76518);

(statearr_76779[(39)] = inst_76519);

(statearr_76779[(40)] = inst_76520);

(statearr_76779[(41)] = inst_76521);

(statearr_76779[(24)] = inst_76522);

(statearr_76779[(26)] = inst_76523);

return statearr_76779;
})();
var statearr_76780_78481 = state_76659__$1;
(statearr_76780_78481[(2)] = null);

(statearr_76780_78481[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (109))){
var inst_76572 = (state_76659[(34)]);
var state_76659__$1 = state_76659;
var statearr_76781_78482 = state_76659__$1;
(statearr_76781_78482[(2)] = inst_76572);

(statearr_76781_78482[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (36))){
var inst_76332 = (state_76659[(14)]);
var state_76659__$1 = state_76659;
var statearr_76782_78483 = state_76659__$1;
(statearr_76782_78483[(2)] = inst_76332);

(statearr_76782_78483[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (41))){
var inst_76368 = (state_76659[(42)]);
var inst_76371 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_76368,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_76659__$1 = state_76659;
var statearr_76783_78484 = state_76659__$1;
(statearr_76783_78484[(2)] = inst_76371);

(statearr_76783_78484[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (118))){
var inst_76604 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76604)){
var statearr_76784_78485 = state_76659__$1;
(statearr_76784_78485[(1)] = (122));

} else {
var statearr_76785_78486 = state_76659__$1;
(statearr_76785_78486[(1)] = (123));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (89))){
var inst_76495 = (state_76659[(28)]);
var state_76659__$1 = state_76659;
var statearr_76787_78487 = state_76659__$1;
(statearr_76787_78487[(2)] = inst_76495);

(statearr_76787_78487[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (100))){
var inst_76530 = (state_76659[(33)]);
var state_76659__$1 = state_76659;
var statearr_76788_78488 = state_76659__$1;
(statearr_76788_78488[(2)] = inst_76530);

(statearr_76788_78488[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (131))){
var inst_76579 = (state_76659[(9)]);
var inst_76623 = (state_76659[(2)]);
var inst_76624 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_76579) : read.call(null,inst_76579));
var state_76659__$1 = (function (){var statearr_76789 = state_76659;
(statearr_76789[(43)] = inst_76623);

return statearr_76789;
})();
var statearr_76790_78489 = state_76659__$1;
(statearr_76790_78489[(2)] = inst_76624);

(statearr_76790_78489[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (122))){
var inst_76588 = (state_76659[(32)]);
var inst_76606 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76588);
var state_76659__$1 = state_76659;
var statearr_76791_78490 = state_76659__$1;
(statearr_76791_78490[(2)] = inst_76606);

(statearr_76791_78490[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (43))){
var inst_76355 = (state_76659[(44)]);
var inst_76374 = (state_76659[(2)]);
var inst_76375 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_76382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76375,inst_76355);
var state_76659__$1 = (function (){var statearr_76792 = state_76659;
(statearr_76792[(45)] = inst_76374);

return statearr_76792;
})();
if(inst_76382){
var statearr_76793_78491 = state_76659__$1;
(statearr_76793_78491[(1)] = (44));

} else {
var statearr_76794_78492 = state_76659__$1;
(statearr_76794_78492[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (61))){
var inst_76418 = (state_76659[(12)]);
var inst_76420 = (inst_76418.cljs$core$IFn$_invoke$arity$0 ? inst_76418.cljs$core$IFn$_invoke$arity$0() : inst_76418.call(null));
var state_76659__$1 = state_76659;
var statearr_76795_78493 = state_76659__$1;
(statearr_76795_78493[(2)] = inst_76420);

(statearr_76795_78493[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (29))){
var inst_76332 = (state_76659[(14)]);
var inst_76338 = inst_76332.cljs$lang$protocol_mask$partition0$;
var inst_76339 = (inst_76338 & (64));
var inst_76340 = inst_76332.cljs$core$ISeq$;
var inst_76341 = (cljs.core.PROTOCOL_SENTINEL === inst_76340);
var inst_76342 = ((inst_76339) || (inst_76341));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76342)){
var statearr_76796_78494 = state_76659__$1;
(statearr_76796_78494[(1)] = (32));

} else {
var statearr_76797_78495 = state_76659__$1;
(statearr_76797_78495[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (44))){
var inst_76374 = (state_76659[(45)]);
var inst_76282 = (state_76659[(46)]);
var inst_76384 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_76374,new cljs.core.Keyword(null,"query","query",-1288509510),inst_76282);
var state_76659__$1 = state_76659;
var statearr_76798_78496 = state_76659__$1;
(statearr_76798_78496[(2)] = inst_76384);

(statearr_76798_78496[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (93))){
var inst_76530 = (state_76659[(33)]);
var inst_76536 = inst_76530.cljs$lang$protocol_mask$partition0$;
var inst_76537 = (inst_76536 & (64));
var inst_76538 = inst_76530.cljs$core$ISeq$;
var inst_76539 = (cljs.core.PROTOCOL_SENTINEL === inst_76538);
var inst_76540 = ((inst_76537) || (inst_76539));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76540)){
var statearr_76799_78497 = state_76659__$1;
(statearr_76799_78497[(1)] = (96));

} else {
var statearr_76800_78498 = state_76659__$1;
(statearr_76800_78498[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (6))){
var inst_76259 = (state_76659[(31)]);
var inst_76254 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_76255 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_76256 = cljs.core.PersistentHashMap.fromArrays(inst_76254,inst_76255);
var inst_76257 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_76256);
var inst_76259__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_76261 = (inst_76259__$1 == null);
var inst_76262 = cljs.core.not(inst_76261);
var state_76659__$1 = (function (){var statearr_76801 = state_76659;
(statearr_76801[(47)] = inst_76257);

(statearr_76801[(31)] = inst_76259__$1);

return statearr_76801;
})();
if(inst_76262){
var statearr_76802_78499 = state_76659__$1;
(statearr_76802_78499[(1)] = (9));

} else {
var statearr_76803_78500 = state_76659__$1;
(statearr_76803_78500[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (111))){
var inst_76628 = (state_76659[(48)]);
var inst_76628__$1 = (state_76659[(2)]);
var inst_76629 = com.wsscode.async.async_cljs.chan_QMARK_(inst_76628__$1);
var state_76659__$1 = (function (){var statearr_76804 = state_76659;
(statearr_76804[(48)] = inst_76628__$1);

return statearr_76804;
})();
if(inst_76629){
var statearr_76805_78501 = state_76659__$1;
(statearr_76805_78501[(1)] = (133));

} else {
var statearr_76806_78502 = state_76659__$1;
(statearr_76806_78502[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (28))){
var inst_76257 = (state_76659[(47)]);
var inst_76452 = (state_76659[(2)]);
var inst_76453 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_76454 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_76455 = cljs.core.PersistentHashMap.fromArrays(inst_76453,inst_76454);
var inst_76456 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_76257,inst_76455);
var state_76659__$1 = (function (){var statearr_76807 = state_76659;
(statearr_76807[(49)] = inst_76456);

return statearr_76807;
})();
var statearr_76808_78503 = state_76659__$1;
(statearr_76808_78503[(2)] = inst_76452);

(statearr_76808_78503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (134))){
var inst_76628 = (state_76659[(48)]);
var state_76659__$1 = state_76659;
var statearr_76809_78504 = state_76659__$1;
(statearr_76809_78504[(2)] = inst_76628);

(statearr_76809_78504[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (64))){
var state_76659__$1 = state_76659;
if(cljs.core.truth_(read)){
var statearr_76810_78505 = state_76659__$1;
(statearr_76810_78505[(1)] = (65));

} else {
var statearr_76811_78506 = state_76659__$1;
(statearr_76811_78506[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (103))){
var inst_76522 = (state_76659[(24)]);
var state_76659__$1 = state_76659;
var statearr_76812_78507 = state_76659__$1;
(statearr_76812_78507[(2)] = inst_76522);

(statearr_76812_78507[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (51))){
var inst_76387 = (state_76659[(30)]);
var inst_76356 = (state_76659[(50)]);
var inst_76358 = (state_76659[(51)]);
var inst_76396 = (state_76659[(11)]);
var inst_76394 = (state_76659[(2)]);
var inst_76396__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_76387,inst_76356,inst_76358) : mutate.call(null,inst_76387,inst_76356,inst_76358));
var inst_76398 = (inst_76396__$1 == null);
var inst_76399 = cljs.core.not(inst_76398);
var state_76659__$1 = (function (){var statearr_76813 = state_76659;
(statearr_76813[(52)] = inst_76394);

(statearr_76813[(11)] = inst_76396__$1);

return statearr_76813;
})();
if(inst_76399){
var statearr_76814_78508 = state_76659__$1;
(statearr_76814_78508[(1)] = (52));

} else {
var statearr_76815_78509 = state_76659__$1;
(statearr_76815_78509[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (25))){
var inst_76295 = (state_76659[(20)]);
var state_76659__$1 = state_76659;
var statearr_76816_78510 = state_76659__$1;
(statearr_76816_78510[(2)] = inst_76295);

(statearr_76816_78510[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (34))){
var inst_76346 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76817_78511 = state_76659__$1;
(statearr_76817_78511[(2)] = inst_76346);

(statearr_76817_78511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (125))){
var inst_76610 = (state_76659[(53)]);
var inst_76612 = (inst_76610.cljs$core$IFn$_invoke$arity$0 ? inst_76610.cljs$core$IFn$_invoke$arity$0() : inst_76610.call(null));
var state_76659__$1 = state_76659;
var statearr_76818_78512 = state_76659__$1;
(statearr_76818_78512[(2)] = inst_76612);

(statearr_76818_78512[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (17))){
var inst_76282 = (state_76659[(46)]);
var inst_76281 = (state_76659[(54)]);
var inst_76295 = (state_76659[(20)]);
var inst_76280 = (state_76659[(2)]);
var inst_76281__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76280,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_76282__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_76280);
var inst_76283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_76282__$1], 0));
var inst_76293 = cljs.core.PersistentHashMap.EMPTY;
var inst_76294 = cljs.core.seq(inst_76281__$1);
var inst_76295__$1 = cljs.core.first(inst_76294);
var inst_76296 = cljs.core.next(inst_76294);
var inst_76298 = (inst_76295__$1 == null);
var inst_76299 = cljs.core.not(inst_76298);
var state_76659__$1 = (function (){var statearr_76819 = state_76659;
(statearr_76819[(54)] = inst_76281__$1);

(statearr_76819[(46)] = inst_76282__$1);

(statearr_76819[(55)] = inst_76283);

(statearr_76819[(56)] = inst_76293);

(statearr_76819[(20)] = inst_76295__$1);

(statearr_76819[(57)] = inst_76296);

return statearr_76819;
})();
if(inst_76299){
var statearr_76820_78513 = state_76659__$1;
(statearr_76820_78513[(1)] = (18));

} else {
var statearr_76821_78514 = state_76659__$1;
(statearr_76821_78514[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (3))){
var inst_76649 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76659__$1,inst_76649);
} else {
if((state_val_76660 === (12))){
var state_76659__$1 = state_76659;
var statearr_76822_78515 = state_76659__$1;
(statearr_76822_78515[(2)] = true);

(statearr_76822_78515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (2))){
var _ = (function (){var statearr_76823 = state_76659;
(statearr_76823[(4)] = cljs.core.cons((5),(state_76659[(4)])));

return statearr_76823;
})();
var inst_76252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76252)){
var statearr_76824_78516 = state_76659__$1;
(statearr_76824_78516[(1)] = (6));

} else {
var statearr_76825_78517 = state_76659__$1;
(statearr_76825_78517[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (66))){
var inst_76427 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_76428 = (new Error(inst_76427));
var inst_76429 = (function(){throw inst_76428})();
var state_76659__$1 = state_76659;
var statearr_76826_78518 = state_76659__$1;
(statearr_76826_78518[(2)] = inst_76429);

(statearr_76826_78518[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (107))){
var inst_76553 = (state_76659[(17)]);
var inst_76572 = (state_76659[(2)]);
var inst_76573 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_76574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76573,inst_76553);
var state_76659__$1 = (function (){var statearr_76827 = state_76659;
(statearr_76827[(34)] = inst_76572);

return statearr_76827;
})();
if(inst_76574){
var statearr_76828_78519 = state_76659__$1;
(statearr_76828_78519[(1)] = (108));

} else {
var statearr_76829_78520 = state_76659__$1;
(statearr_76829_78520[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (23))){
var inst_76310 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76830_78521 = state_76659__$1;
(statearr_76830_78521[(2)] = inst_76310);

(statearr_76830_78521[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (47))){
var inst_76436 = (state_76659[(7)]);
var inst_76436__$1 = (state_76659[(2)]);
var inst_76437 = com.wsscode.async.async_cljs.chan_QMARK_(inst_76436__$1);
var state_76659__$1 = (function (){var statearr_76831 = state_76659;
(statearr_76831[(7)] = inst_76436__$1);

return statearr_76831;
})();
if(inst_76437){
var statearr_76832_78522 = state_76659__$1;
(statearr_76832_78522[(1)] = (69));

} else {
var statearr_76833_78523 = state_76659__$1;
(statearr_76833_78523[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (35))){
var inst_76332 = (state_76659[(14)]);
var inst_76351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76332);
var state_76659__$1 = state_76659;
var statearr_76834_78524 = state_76659__$1;
(statearr_76834_78524[(2)] = inst_76351);

(statearr_76834_78524[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (127))){
var inst_76615 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76835_78525 = state_76659__$1;
(statearr_76835_78525[(2)] = inst_76615);

(statearr_76835_78525[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (82))){
var inst_76495 = (state_76659[(28)]);
var inst_76501 = inst_76495.cljs$lang$protocol_mask$partition0$;
var inst_76502 = (inst_76501 & (64));
var inst_76503 = inst_76495.cljs$core$ISeq$;
var inst_76504 = (cljs.core.PROTOCOL_SENTINEL === inst_76503);
var inst_76505 = ((inst_76502) || (inst_76504));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76505)){
var statearr_76836_78526 = state_76659__$1;
(statearr_76836_78526[(1)] = (85));

} else {
var statearr_76837_78527 = state_76659__$1;
(statearr_76837_78527[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (76))){
var state_76659__$1 = state_76659;
var statearr_76838_78528 = state_76659__$1;
(statearr_76838_78528[(2)] = true);

(statearr_76838_78528[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (97))){
var state_76659__$1 = state_76659;
var statearr_76839_78529 = state_76659__$1;
(statearr_76839_78529[(2)] = false);

(statearr_76839_78529[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (19))){
var state_76659__$1 = state_76659;
var statearr_76840_78530 = state_76659__$1;
(statearr_76840_78530[(2)] = false);

(statearr_76840_78530[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (57))){
var inst_76409 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76841_78531 = state_76659__$1;
(statearr_76841_78531[(2)] = inst_76409);

(statearr_76841_78531[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (68))){
var state_76659__$1 = state_76659;
var statearr_76842_78532 = state_76659__$1;
(statearr_76842_78532[(2)] = null);

(statearr_76842_78532[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (11))){
var inst_76275 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76275)){
var statearr_76843_78533 = state_76659__$1;
(statearr_76843_78533[(1)] = (15));

} else {
var statearr_76844_78534 = state_76659__$1;
(statearr_76844_78534[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (115))){
var inst_76579 = (state_76659[(9)]);
var inst_76554 = (state_76659[(18)]);
var inst_76556 = (state_76659[(19)]);
var inst_76588 = (state_76659[(32)]);
var inst_76586 = (state_76659[(2)]);
var inst_76588__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_76579,inst_76554,inst_76556) : mutate.call(null,inst_76579,inst_76554,inst_76556));
var inst_76590 = (inst_76588__$1 == null);
var inst_76591 = cljs.core.not(inst_76590);
var state_76659__$1 = (function (){var statearr_76846 = state_76659;
(statearr_76846[(58)] = inst_76586);

(statearr_76846[(32)] = inst_76588__$1);

return statearr_76846;
})();
if(inst_76591){
var statearr_76847_78535 = state_76659__$1;
(statearr_76847_78535[(1)] = (116));

} else {
var statearr_76848_78536 = state_76659__$1;
(statearr_76848_78536[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (9))){
var inst_76259 = (state_76659[(31)]);
var inst_76264 = inst_76259.cljs$lang$protocol_mask$partition0$;
var inst_76265 = (inst_76264 & (64));
var inst_76266 = inst_76259.cljs$core$ISeq$;
var inst_76267 = (cljs.core.PROTOCOL_SENTINEL === inst_76266);
var inst_76268 = ((inst_76265) || (inst_76267));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76268)){
var statearr_76850_78537 = state_76659__$1;
(statearr_76850_78537[(1)] = (12));

} else {
var statearr_76851_78538 = state_76659__$1;
(statearr_76851_78538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (5))){
var _ = (function (){var statearr_76852 = state_76659;
(statearr_76852[(4)] = cljs.core.rest((state_76659[(4)])));

return statearr_76852;
})();
var state_76659__$1 = state_76659;
var ex76845 = (state_76659__$1[(2)]);
var statearr_76853_78539 = state_76659__$1;
(statearr_76853_78539[(5)] = ex76845);


var statearr_76854_78540 = state_76659__$1;
(statearr_76854_78540[(1)] = (4));

(statearr_76854_78540[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (112))){
var state_76659__$1 = state_76659;
if(cljs.core.truth_(mutate)){
var statearr_76855_78541 = state_76659__$1;
(statearr_76855_78541[(1)] = (113));

} else {
var statearr_76856_78542 = state_76659__$1;
(statearr_76856_78542[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (83))){
var state_76659__$1 = state_76659;
var statearr_76857_78543 = state_76659__$1;
(statearr_76857_78543[(2)] = false);

(statearr_76857_78543[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (14))){
var inst_76272 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76858_78544 = state_76659__$1;
(statearr_76858_78544[(2)] = inst_76272);

(statearr_76858_78544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (45))){
var inst_76374 = (state_76659[(45)]);
var state_76659__$1 = state_76659;
var statearr_76859_78545 = state_76659__$1;
(statearr_76859_78545[(2)] = inst_76374);

(statearr_76859_78545[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (53))){
var state_76659__$1 = state_76659;
var statearr_76860_78546 = state_76659__$1;
(statearr_76860_78546[(2)] = false);

(statearr_76860_78546[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (78))){
var inst_76472 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76861_78547 = state_76659__$1;
(statearr_76861_78547[(2)] = inst_76472);

(statearr_76861_78547[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (132))){
var state_76659__$1 = state_76659;
var statearr_76862_78548 = state_76659__$1;
(statearr_76862_78548[(2)] = null);

(statearr_76862_78548[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (26))){
var inst_76293 = (state_76659[(56)]);
var inst_76281 = (state_76659[(54)]);
var inst_76318 = (state_76659[(2)]);
var inst_76319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76318,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_76321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76318,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_76322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76318,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_76323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76318,new cljs.core.Keyword(null,"params","params",710516235));
var inst_76324 = inst_76293;
var inst_76325 = inst_76281;
var state_76659__$1 = (function (){var statearr_76863 = state_76659;
(statearr_76863[(59)] = inst_76319);

(statearr_76863[(60)] = inst_76321);

(statearr_76863[(61)] = inst_76322);

(statearr_76863[(62)] = inst_76323);

(statearr_76863[(27)] = inst_76324);

(statearr_76863[(13)] = inst_76325);

return statearr_76863;
})();
var statearr_76864_78549 = state_76659__$1;
(statearr_76864_78549[(2)] = null);

(statearr_76864_78549[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (123))){
var inst_76588 = (state_76659[(32)]);
var state_76659__$1 = state_76659;
var statearr_76865_78550 = state_76659__$1;
(statearr_76865_78550[(2)] = inst_76588);

(statearr_76865_78550[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (16))){
var inst_76259 = (state_76659[(31)]);
var state_76659__$1 = state_76659;
var statearr_76866_78551 = state_76659__$1;
(statearr_76866_78551[(2)] = inst_76259);

(statearr_76866_78551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (133))){
var inst_76628 = (state_76659[(48)]);
var state_76659__$1 = state_76659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76659__$1,(136),inst_76628);
} else {
if((state_val_76660 === (81))){
var inst_76482 = (state_76659[(35)]);
var inst_76481 = (state_76659[(37)]);
var inst_76495 = (state_76659[(28)]);
var inst_76480 = (state_76659[(2)]);
var inst_76481__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76480,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_76482__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_76480);
var inst_76483 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_76482__$1], 0));
var inst_76493 = cljs.core.PersistentHashMap.EMPTY;
var inst_76494 = cljs.core.seq(inst_76481__$1);
var inst_76495__$1 = cljs.core.first(inst_76494);
var inst_76496 = cljs.core.next(inst_76494);
var inst_76498 = (inst_76495__$1 == null);
var inst_76499 = cljs.core.not(inst_76498);
var state_76659__$1 = (function (){var statearr_76867 = state_76659;
(statearr_76867[(37)] = inst_76481__$1);

(statearr_76867[(35)] = inst_76482__$1);

(statearr_76867[(21)] = inst_76483);

(statearr_76867[(36)] = inst_76493);

(statearr_76867[(28)] = inst_76495__$1);

(statearr_76867[(63)] = inst_76496);

return statearr_76867;
})();
if(inst_76499){
var statearr_76868_78552 = state_76659__$1;
(statearr_76868_78552[(1)] = (82));

} else {
var statearr_76869_78553 = state_76659__$1;
(statearr_76869_78553[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (120))){
var state_76659__$1 = state_76659;
var statearr_76870_78554 = state_76659__$1;
(statearr_76870_78554[(2)] = false);

(statearr_76870_78554[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (79))){
var inst_76459 = (state_76659[(10)]);
var inst_76477 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_76459);
var state_76659__$1 = state_76659;
var statearr_76871_78555 = state_76659__$1;
(statearr_76871_78555[(2)] = inst_76477);

(statearr_76871_78555[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (38))){
var inst_76356 = (state_76659[(50)]);
var inst_76283 = (state_76659[(55)]);
var inst_76354 = (state_76659[(64)]);
var inst_76355 = (state_76659[(44)]);
var inst_76360 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_76361 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_76356];
var inst_76362 = cljs.core.PersistentHashMap.fromArrays(inst_76360,inst_76361);
var inst_76363 = com.wsscode.pathom.trace.trace(inst_76283,inst_76362);
var inst_76365 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_76366 = [inst_76354,inst_76355];
var inst_76367 = cljs.core.PersistentHashMap.fromArrays(inst_76365,inst_76366);
var inst_76368 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_76283,inst_76367], 0));
var inst_76369 = (inst_76355 == null);
var state_76659__$1 = (function (){var statearr_76872 = state_76659;
(statearr_76872[(65)] = inst_76363);

(statearr_76872[(42)] = inst_76368);

return statearr_76872;
})();
if(cljs.core.truth_(inst_76369)){
var statearr_76873_78556 = state_76659__$1;
(statearr_76873_78556[(1)] = (41));

} else {
var statearr_76874_78557 = state_76659__$1;
(statearr_76874_78557[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (126))){
var state_76659__$1 = state_76659;
var statearr_76875_78558 = state_76659__$1;
(statearr_76875_78558[(2)] = null);

(statearr_76875_78558[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (98))){
var inst_76544 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76876_78559 = state_76659__$1;
(statearr_76876_78559[(2)] = inst_76544);

(statearr_76876_78559[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (124))){
var inst_76610 = (state_76659[(53)]);
var inst_76609 = (state_76659[(2)]);
var inst_76610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76609,new cljs.core.Keyword(null,"action","action",-811238024));
var state_76659__$1 = (function (){var statearr_76878 = state_76659;
(statearr_76878[(53)] = inst_76610__$1);

return statearr_76878;
})();
if(cljs.core.truth_(inst_76610__$1)){
var statearr_76879_78560 = state_76659__$1;
(statearr_76879_78560[(1)] = (125));

} else {
var statearr_76880_78561 = state_76659__$1;
(statearr_76880_78561[(1)] = (126));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (87))){
var inst_76509 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76881_78562 = state_76659__$1;
(statearr_76881_78562[(2)] = inst_76509);

(statearr_76881_78562[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (30))){
var state_76659__$1 = state_76659;
var statearr_76882_78563 = state_76659__$1;
(statearr_76882_78563[(2)] = false);

(statearr_76882_78563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (73))){
var inst_76459 = (state_76659[(10)]);
var inst_76464 = inst_76459.cljs$lang$protocol_mask$partition0$;
var inst_76465 = (inst_76464 & (64));
var inst_76466 = inst_76459.cljs$core$ISeq$;
var inst_76467 = (cljs.core.PROTOCOL_SENTINEL === inst_76466);
var inst_76468 = ((inst_76465) || (inst_76467));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76468)){
var statearr_76883_78564 = state_76659__$1;
(statearr_76883_78564[(1)] = (76));

} else {
var statearr_76884_78565 = state_76659__$1;
(statearr_76884_78565[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (96))){
var state_76659__$1 = state_76659;
var statearr_76885_78566 = state_76659__$1;
(statearr_76885_78566[(2)] = true);

(statearr_76885_78566[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (10))){
var state_76659__$1 = state_76659;
var statearr_76886_78567 = state_76659__$1;
(statearr_76886_78567[(2)] = false);

(statearr_76886_78567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (18))){
var inst_76295 = (state_76659[(20)]);
var inst_76301 = inst_76295.cljs$lang$protocol_mask$partition0$;
var inst_76302 = (inst_76301 & (64));
var inst_76304 = inst_76295.cljs$core$ISeq$;
var inst_76305 = (cljs.core.PROTOCOL_SENTINEL === inst_76304);
var inst_76306 = ((inst_76302) || (inst_76305));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76306)){
var statearr_76887_78568 = state_76659__$1;
(statearr_76887_78568[(1)] = (21));

} else {
var statearr_76888_78569 = state_76659__$1;
(statearr_76888_78569[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (105))){
var inst_76566 = (state_76659[(23)]);
var inst_76569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_76566,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_76659__$1 = state_76659;
var statearr_76889_78570 = state_76659__$1;
(statearr_76889_78570[(2)] = inst_76569);

(statearr_76889_78570[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (52))){
var inst_76396 = (state_76659[(11)]);
var inst_76401 = inst_76396.cljs$lang$protocol_mask$partition0$;
var inst_76402 = (inst_76401 & (64));
var inst_76403 = inst_76396.cljs$core$ISeq$;
var inst_76404 = (cljs.core.PROTOCOL_SENTINEL === inst_76403);
var inst_76405 = ((inst_76402) || (inst_76404));
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76405)){
var statearr_76890_78571 = state_76659__$1;
(statearr_76890_78571[(1)] = (55));

} else {
var statearr_76891_78572 = state_76659__$1;
(statearr_76891_78572[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (114))){
var inst_76582 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_76583 = (new Error(inst_76582));
var inst_76584 = (function(){throw inst_76583})();
var state_76659__$1 = state_76659;
var statearr_76892_78573 = state_76659__$1;
(statearr_76892_78573[(2)] = inst_76584);

(statearr_76892_78573[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (67))){
var inst_76387 = (state_76659[(30)]);
var inst_76431 = (state_76659[(2)]);
var inst_76432 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_76387) : read.call(null,inst_76387));
var state_76659__$1 = (function (){var statearr_76893 = state_76659;
(statearr_76893[(66)] = inst_76431);

return statearr_76893;
})();
var statearr_76894_78574 = state_76659__$1;
(statearr_76894_78574[(2)] = inst_76432);

(statearr_76894_78574[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (71))){
var inst_76354 = (state_76659[(64)]);
var inst_76324 = (state_76659[(27)]);
var inst_76333 = (state_76659[(15)]);
var inst_76444 = (state_76659[(2)]);
var inst_76445 = com.wsscode.pathom.parser.ast__GT_out_key(inst_76354);
var inst_76446 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_76324,inst_76445,inst_76444);
var inst_76324__$1 = inst_76446;
var inst_76325 = inst_76333;
var state_76659__$1 = (function (){var statearr_76895 = state_76659;
(statearr_76895[(27)] = inst_76324__$1);

(statearr_76895[(13)] = inst_76325);

return statearr_76895;
})();
var statearr_76896_78575 = state_76659__$1;
(statearr_76896_78575[(2)] = null);

(statearr_76896_78575[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (42))){
var inst_76368 = (state_76659[(42)]);
var state_76659__$1 = state_76659;
var statearr_76897_78576 = state_76659__$1;
(statearr_76897_78576[(2)] = inst_76368);

(statearr_76897_78576[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (80))){
var inst_76459 = (state_76659[(10)]);
var state_76659__$1 = state_76659;
var statearr_76898_78577 = state_76659__$1;
(statearr_76898_78577[(2)] = inst_76459);

(statearr_76898_78577[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (37))){
var inst_76354 = (state_76659[(64)]);
var inst_76354__$1 = (state_76659[(2)]);
var inst_76355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76354__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_76356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76354__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_76357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76354__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_76358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76354__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_76659__$1 = (function (){var statearr_76899 = state_76659;
(statearr_76899[(64)] = inst_76354__$1);

(statearr_76899[(44)] = inst_76355);

(statearr_76899[(50)] = inst_76356);

(statearr_76899[(29)] = inst_76357);

(statearr_76899[(51)] = inst_76358);

return statearr_76899;
})();
if(cljs.core.truth_(inst_76354__$1)){
var statearr_76900_78578 = state_76659__$1;
(statearr_76900_78578[(1)] = (38));

} else {
var statearr_76901_78579 = state_76659__$1;
(statearr_76901_78579[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (63))){
var inst_76423 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
var statearr_76902_78580 = state_76659__$1;
(statearr_76902_78580[(2)] = inst_76423);

(statearr_76902_78580[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (94))){
var state_76659__$1 = state_76659;
var statearr_76903_78581 = state_76659__$1;
(statearr_76903_78581[(2)] = false);

(statearr_76903_78581[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (8))){
var inst_76646 = (state_76659[(2)]);
var _ = (function (){var statearr_76904 = state_76659;
(statearr_76904[(4)] = cljs.core.rest((state_76659[(4)])));

return statearr_76904;
})();
var state_76659__$1 = state_76659;
var statearr_76905_78582 = state_76659__$1;
(statearr_76905_78582[(2)] = inst_76646);

(statearr_76905_78582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (49))){
var state_76659__$1 = state_76659;
var statearr_76906_78583 = state_76659__$1;
(statearr_76906_78583[(2)] = null);

(statearr_76906_78583[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76660 === (84))){
var inst_76512 = (state_76659[(2)]);
var state_76659__$1 = state_76659;
if(cljs.core.truth_(inst_76512)){
var statearr_76907_78584 = state_76659__$1;
(statearr_76907_78584[(1)] = (88));

} else {
var statearr_76908_78585 = state_76659__$1;
(statearr_76908_78585[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto____0 = (function (){
var statearr_76909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76909[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto__);

(statearr_76909[(1)] = (1));

return statearr_76909;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto____1 = (function (state_76659){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_76659);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e76910){var ex__50860__auto__ = e76910;
var statearr_76911_78586 = state_76659;
(statearr_76911_78586[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_76659[(4)]))){
var statearr_76912_78587 = state_76659;
(statearr_76912_78587[(1)] = cljs.core.first((state_76659[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78588 = state_76659;
state_76659 = G__78588;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto__ = function(state_76659){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto____1.call(this,state_76659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_76913 = f__50893__auto__();
(statearr_76913[(6)] = c__50892__auto__);

return statearr_76913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__76914,key){
var map__76915 = p__76914;
var map__76915__$1 = (((((!((map__76915 == null))))?(((((map__76915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76915):map__76915);
var env = map__76915__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76915__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76915__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__50892__auto___78589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_76939){
var state_val_76940 = (state_76939[(1)]);
if((state_val_76940 === (1))){
var inst_76917 = cljs.core.async.timeout((1));
var state_76939__$1 = state_76939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76939__$1,(2),inst_76917);
} else {
if((state_val_76940 === (2))){
var inst_76919 = (state_76939[(2)]);
var inst_76920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_76921 = cljs.core.deref(inst_76920);
var inst_76922 = cljs.core.contains_QMARK_(inst_76921,key);
var state_76939__$1 = (function (){var statearr_76941 = state_76939;
(statearr_76941[(7)] = inst_76919);

return statearr_76941;
})();
if(inst_76922){
var statearr_76942_78590 = state_76939__$1;
(statearr_76942_78590[(1)] = (3));

} else {
var statearr_76943_78591 = state_76939__$1;
(statearr_76943_78591[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76940 === (3))){
var inst_76924 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_76925 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_76926 = cljs.core.PersistentHashMap.fromArrays(inst_76924,inst_76925);
var inst_76927 = com.wsscode.pathom.trace.trace(env,inst_76926);
var inst_76928 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_76929 = [key];
var inst_76930 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_76929);
var inst_76931 = [inst_76930];
var inst_76932 = cljs.core.PersistentHashMap.fromArrays(inst_76928,inst_76931);
var inst_76933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_76932);
var inst_76934 = cljs.core.async.close_BANG_(ch);
var state_76939__$1 = (function (){var statearr_76944 = state_76939;
(statearr_76944[(8)] = inst_76927);

(statearr_76944[(9)] = inst_76933);

return statearr_76944;
})();
var statearr_76945_78592 = state_76939__$1;
(statearr_76945_78592[(2)] = inst_76934);

(statearr_76945_78592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76940 === (4))){
var state_76939__$1 = state_76939;
var statearr_76946_78593 = state_76939__$1;
(statearr_76946_78593[(2)] = null);

(statearr_76946_78593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76940 === (5))){
var inst_76937 = (state_76939[(2)]);
var state_76939__$1 = state_76939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76939__$1,inst_76937);
} else {
return null;
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____0 = (function (){
var statearr_76947 = [null,null,null,null,null,null,null,null,null,null];
(statearr_76947[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__);

(statearr_76947[(1)] = (1));

return statearr_76947;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____1 = (function (state_76939){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_76939);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e76948){var ex__50860__auto__ = e76948;
var statearr_76949_78594 = state_76939;
(statearr_76949_78594[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_76939[(4)]))){
var statearr_76950_78595 = state_76939;
(statearr_76950_78595[(1)] = cljs.core.first((state_76939[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78596 = state_76939;
state_76939 = G__78596;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__ = function(state_76939){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____1.call(this,state_76939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_76951 = f__50893__auto__();
(statearr_76951[(6)] = c__50892__auto___78589);

return statearr_76951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_76979){
var state_val_76980 = (state_76979[(1)]);
if((state_val_76980 === (1))){
var inst_76955 = (state_76979[(7)]);
var inst_76955__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_76956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_76957 = [ch,inst_76955__$1];
var inst_76958 = (new cljs.core.PersistentVector(null,2,(5),inst_76956,inst_76957,null));
var state_76979__$1 = (function (){var statearr_76981 = state_76979;
(statearr_76981[(7)] = inst_76955__$1);

return statearr_76981;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_76979__$1,(2),inst_76958,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_76980 === (2))){
var inst_76955 = (state_76979[(7)]);
var inst_76960 = (state_76979[(2)]);
var inst_76961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76960,(0),null);
var inst_76962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76960,(1),null);
var inst_76963 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76962,inst_76955);
var state_76979__$1 = (function (){var statearr_76982 = state_76979;
(statearr_76982[(8)] = inst_76961);

return statearr_76982;
})();
if(inst_76963){
var statearr_76983_78597 = state_76979__$1;
(statearr_76983_78597[(1)] = (3));

} else {
var statearr_76984_78598 = state_76979__$1;
(statearr_76984_78598[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76980 === (3))){
var inst_76965 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_76966 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_76967 = cljs.core.PersistentHashMap.fromArrays(inst_76965,inst_76966);
var inst_76968 = com.wsscode.pathom.trace.trace(env,inst_76967);
var inst_76969 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_76972 = cljs.core.PersistentHashSet.EMPTY;
var inst_76973 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_76972];
var inst_76974 = cljs.core.PersistentHashMap.fromArrays(inst_76969,inst_76973);
var state_76979__$1 = (function (){var statearr_76985 = state_76979;
(statearr_76985[(9)] = inst_76968);

return statearr_76985;
})();
var statearr_76986_78599 = state_76979__$1;
(statearr_76986_78599[(2)] = inst_76974);

(statearr_76986_78599[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76980 === (4))){
var inst_76961 = (state_76979[(8)]);
var state_76979__$1 = state_76979;
var statearr_76987_78600 = state_76979__$1;
(statearr_76987_78600[(2)] = inst_76961);

(statearr_76987_78600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76980 === (5))){
var inst_76977 = (state_76979[(2)]);
var state_76979__$1 = state_76979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76979__$1,inst_76977);
} else {
return null;
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____0 = (function (){
var statearr_76988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_76988[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__);

(statearr_76988[(1)] = (1));

return statearr_76988;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____1 = (function (state_76979){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_76979);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e76989){var ex__50860__auto__ = e76989;
var statearr_76990_78601 = state_76979;
(statearr_76990_78601[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_76979[(4)]))){
var statearr_77016_78602 = state_76979;
(statearr_77016_78602[(1)] = cljs.core.first((state_76979[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78603 = state_76979;
state_76979 = G__78603;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__ = function(state_76979){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____1.call(this,state_76979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_77021 = f__50893__auto__();
(statearr_77021[(6)] = c__50892__auto__);

return statearr_77021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__77022,e){
var map__77023 = p__77022;
var map__77023__$1 = (((((!((map__77023 == null))))?(((((map__77023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77023):map__77023);
var env = map__77023__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77023__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__77025 = ast;
var map__77025__$1 = (((((!((map__77025 == null))))?(((((map__77025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77025):map__77025);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77025__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77025__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77025__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77025__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__77027 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__77027__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__77027,new cljs.core.Keyword(null,"query","query",-1288509510)):G__77027);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77027__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__77027__$1;
}
})();
var value = (function (){var G__77028 = type;
var G__77028__$1 = (((G__77028 instanceof cljs.core.Keyword))?G__77028.fqn:null);
switch (G__77028__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__77029 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__77029__$1 = (((((!((map__77029 == null))))?(((((map__77029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77029):map__77029);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77029__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_77071){
var state_val_77072 = (state_77071[(1)]);
if((state_val_77072 === (7))){
var inst_77045 = (state_77071[(7)]);
var inst_77052 = com.wsscode.async.async_cljs.promise_QMARK_(inst_77045);
var state_77071__$1 = state_77071;
if(cljs.core.truth_(inst_77052)){
var statearr_77073_78605 = state_77071__$1;
(statearr_77073_78605[(1)] = (10));

} else {
var statearr_77074_78606 = state_77071__$1;
(statearr_77074_78606[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (1))){
var state_77071__$1 = state_77071;
var statearr_77075_78607 = state_77071__$1;
(statearr_77075_78607[(2)] = null);

(statearr_77075_78607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (4))){
var inst_77031 = (state_77071[(2)]);
var inst_77032 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_77033 = com.wsscode.pathom.parser.process_error(env__$1,inst_77031);
var inst_77034 = [inst_77033];
var inst_77035 = cljs.core.PersistentHashMap.fromArrays(inst_77032,inst_77034);
var state_77071__$1 = state_77071;
var statearr_77076_78608 = state_77071__$1;
(statearr_77076_78608[(2)] = inst_77035);

(statearr_77076_78608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (15))){
var state_77071__$1 = state_77071;
var statearr_77077_78609 = state_77071__$1;
(statearr_77077_78609[(2)] = null);

(statearr_77077_78609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (13))){
var inst_77056 = (state_77071[(2)]);
var inst_77057 = com.wsscode.async.async_cljs.consumer_pair(inst_77056);
var state_77071__$1 = state_77071;
var statearr_77078_78610 = state_77071__$1;
(statearr_77078_78610[(2)] = inst_77057);

(statearr_77078_78610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (6))){
var inst_77045 = (state_77071[(7)]);
var state_77071__$1 = state_77071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77071__$1,(9),inst_77045);
} else {
if((state_val_77072 === (3))){
var inst_77069 = (state_77071[(2)]);
var state_77071__$1 = state_77071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77071__$1,inst_77069);
} else {
if((state_val_77072 === (12))){
var inst_77064 = (state_77071[(2)]);
var state_77071__$1 = state_77071;
var statearr_77079_78611 = state_77071__$1;
(statearr_77079_78611[(2)] = inst_77064);

(statearr_77079_78611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (2))){
var inst_77045 = (state_77071[(7)]);
var _ = (function (){var statearr_77080 = state_77071;
(statearr_77080[(4)] = cljs.core.cons((5),(state_77071[(4)])));

return statearr_77080;
})();
var inst_77041 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_77042 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_77043 = cljs.core.PersistentHashMap.fromArrays(inst_77041,inst_77042);
var inst_77044 = com.wsscode.pathom.trace.trace(env__$1,inst_77043);
var inst_77045__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_77046 = com.wsscode.async.async_cljs.chan_QMARK_(inst_77045__$1);
var state_77071__$1 = (function (){var statearr_77081 = state_77071;
(statearr_77081[(8)] = inst_77044);

(statearr_77081[(7)] = inst_77045__$1);

return statearr_77081;
})();
if(inst_77046){
var statearr_77082_78612 = state_77071__$1;
(statearr_77082_78612[(1)] = (6));

} else {
var statearr_77083_78613 = state_77071__$1;
(statearr_77083_78613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (11))){
var state_77071__$1 = state_77071;
var statearr_77085_78614 = state_77071__$1;
(statearr_77085_78614[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (9))){
var inst_77049 = (state_77071[(2)]);
var inst_77050 = com.wsscode.async.async_cljs.throw_err(inst_77049);
var state_77071__$1 = state_77071;
var statearr_77087_78615 = state_77071__$1;
(statearr_77087_78615[(2)] = inst_77050);

(statearr_77087_78615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (5))){
var _ = (function (){var statearr_77088 = state_77071;
(statearr_77088[(4)] = cljs.core.rest((state_77071[(4)])));

return statearr_77088;
})();
var state_77071__$1 = state_77071;
var ex77084 = (state_77071__$1[(2)]);
var statearr_77089_78616 = state_77071__$1;
(statearr_77089_78616[(5)] = ex77084);


var statearr_77090_78617 = state_77071__$1;
(statearr_77090_78617[(1)] = (4));

(statearr_77090_78617[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (14))){
var inst_77045 = (state_77071[(7)]);
var state_77071__$1 = state_77071;
var statearr_77091_78618 = state_77071__$1;
(statearr_77091_78618[(2)] = inst_77045);

(statearr_77091_78618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (16))){
var inst_77062 = (state_77071[(2)]);
var state_77071__$1 = state_77071;
var statearr_77092_78619 = state_77071__$1;
(statearr_77092_78619[(2)] = inst_77062);

(statearr_77092_78619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77072 === (10))){
var inst_77045 = (state_77071[(7)]);
var inst_77054 = com.wsscode.async.async_cljs.promise__GT_chan(inst_77045);
var state_77071__$1 = state_77071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77071__$1,(13),inst_77054);
} else {
if((state_val_77072 === (8))){
var inst_77066 = (state_77071[(2)]);
var _ = (function (){var statearr_77093 = state_77071;
(statearr_77093[(4)] = cljs.core.rest((state_77071[(4)])));

return statearr_77093;
})();
var state_77071__$1 = state_77071;
var statearr_77094_78620 = state_77071__$1;
(statearr_77094_78620[(2)] = inst_77066);

(statearr_77094_78620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____0 = (function (){
var statearr_77095 = [null,null,null,null,null,null,null,null,null];
(statearr_77095[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__);

(statearr_77095[(1)] = (1));

return statearr_77095;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____1 = (function (state_77071){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_77071);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e77096){var ex__50860__auto__ = e77096;
var statearr_77097_78621 = state_77071;
(statearr_77097_78621[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_77071[(4)]))){
var statearr_77098_78622 = state_77071;
(statearr_77098_78622[(1)] = cljs.core.first((state_77071[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78623 = state_77071;
state_77071 = G__78623;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__ = function(state_77071){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____1.call(this,state_77071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_77099 = f__50893__auto__();
(statearr_77099[(6)] = c__50892__auto__);

return statearr_77099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__29443__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__29442__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__29443__auto__;
} else {
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
}

break;
default:
return null;

}
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(value)){
var provides = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var stream = (function (){var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_77110){
var state_val_77111 = (state_77110[(1)]);
if((state_val_77111 === (1))){
var inst_77100 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_77101 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_77110__$1 = (function (){var statearr_77112 = state_77110;
(statearr_77112[(7)] = inst_77100);

(statearr_77112[(8)] = inst_77101);

return statearr_77112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77110__$1,(2),value);
} else {
if((state_val_77111 === (2))){
var inst_77101 = (state_77110[(8)]);
var inst_77100 = (state_77110[(7)]);
var inst_77103 = (state_77110[(2)]);
var inst_77104 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_77105 = [inst_77103,inst_77104];
var inst_77106 = cljs.core.PersistentHashMap.fromArrays(inst_77101,inst_77105);
var inst_77107 = [provides,true,inst_77106];
var inst_77108 = cljs.core.PersistentHashMap.fromArrays(inst_77100,inst_77107);
var state_77110__$1 = state_77110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77110__$1,inst_77108);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____0 = (function (){
var statearr_77113 = [null,null,null,null,null,null,null,null,null];
(statearr_77113[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__);

(statearr_77113[(1)] = (1));

return statearr_77113;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____1 = (function (state_77110){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_77110);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e77114){var ex__50860__auto__ = e77114;
var statearr_77115_78624 = state_77110;
(statearr_77115_78624[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_77110[(4)]))){
var statearr_77116_78625 = state_77110;
(statearr_77116_78625[(1)] = cljs.core.first((state_77110[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78626 = state_77110;
state_77110 = G__78626;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__ = function(state_77110){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____1.call(this,state_77110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_77117 = f__50893__auto__();
(statearr_77117[(6)] = c__50892__auto__);

return statearr_77117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","channel-response","com.wsscode.pathom.parser/channel-response",140507736),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
if(cljs.core.truth_((function (){try{return new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
}catch (e77118){var _ = e77118;
return null;
}})())){
var provides = new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
var stream = new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292).cljs$core$IFn$_invoke$arity$1(value);
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provided-return","com.wsscode.pathom.parser/provided-return",9084378),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","parallel-reader","com.wsscode.pathom.parser/parallel-reader",283632954),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","value-return","com.wsscode.pathom.parser/value-return",1158220150),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,com.wsscode.pathom.parser.ast__GT_out_key(ast),value),waiting,processing,key_iterations,tail], null);

}
}
});
com.wsscode.pathom.parser.parallel_flush_watchers = (function com$wsscode$pathom$parser$parallel_flush_watchers(env,key_watchers,provides,error){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__29443__auto__ = (function (){var seq__77119 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__77120 = null;
var count__77121 = (0);
var i__77122 = (0);
while(true){
if((i__77122 < count__77121)){
var vec__77137 = chunk__77120.cljs$core$IIndexed$_nth$arity$2(null,i__77122);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77137,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77137,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__77140_78627 = cljs.core.seq(watchers);
var chunk__77141_78628 = null;
var count__77142_78629 = (0);
var i__77143_78630 = (0);
while(true){
if((i__77143_78630 < count__77142_78629)){
var out_78631 = chunk__77141_78628.cljs$core$IIndexed$_nth$arity$2(null,i__77143_78630);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78631,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78631);


var G__78632 = seq__77140_78627;
var G__78633 = chunk__77141_78628;
var G__78634 = count__77142_78629;
var G__78635 = (i__77143_78630 + (1));
seq__77140_78627 = G__78632;
chunk__77141_78628 = G__78633;
count__77142_78629 = G__78634;
i__77143_78630 = G__78635;
continue;
} else {
var temp__5735__auto___78636 = cljs.core.seq(seq__77140_78627);
if(temp__5735__auto___78636){
var seq__77140_78637__$1 = temp__5735__auto___78636;
if(cljs.core.chunked_seq_QMARK_(seq__77140_78637__$1)){
var c__4556__auto___78638 = cljs.core.chunk_first(seq__77140_78637__$1);
var G__78639 = cljs.core.chunk_rest(seq__77140_78637__$1);
var G__78640 = c__4556__auto___78638;
var G__78641 = cljs.core.count(c__4556__auto___78638);
var G__78642 = (0);
seq__77140_78627 = G__78639;
chunk__77141_78628 = G__78640;
count__77142_78629 = G__78641;
i__77143_78630 = G__78642;
continue;
} else {
var out_78643 = cljs.core.first(seq__77140_78637__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78643,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78643);


var G__78644 = cljs.core.next(seq__77140_78637__$1);
var G__78645 = null;
var G__78646 = (0);
var G__78647 = (0);
seq__77140_78627 = G__78644;
chunk__77141_78628 = G__78645;
count__77142_78629 = G__78646;
i__77143_78630 = G__78647;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__78648 = seq__77119;
var G__78649 = chunk__77120;
var G__78650 = count__77121;
var G__78651 = (i__77122 + (1));
seq__77119 = G__78648;
chunk__77120 = G__78649;
count__77121 = G__78650;
i__77122 = G__78651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77119);
if(temp__5735__auto__){
var seq__77119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77119__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77119__$1);
var G__78652 = cljs.core.chunk_rest(seq__77119__$1);
var G__78653 = c__4556__auto__;
var G__78654 = cljs.core.count(c__4556__auto__);
var G__78655 = (0);
seq__77119 = G__78652;
chunk__77120 = G__78653;
count__77121 = G__78654;
i__77122 = G__78655;
continue;
} else {
var vec__77144 = cljs.core.first(seq__77119__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77144,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77144,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__77147_78656 = cljs.core.seq(watchers);
var chunk__77148_78657 = null;
var count__77149_78658 = (0);
var i__77150_78659 = (0);
while(true){
if((i__77150_78659 < count__77149_78658)){
var out_78660 = chunk__77148_78657.cljs$core$IIndexed$_nth$arity$2(null,i__77150_78659);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78660,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78660);


var G__78661 = seq__77147_78656;
var G__78662 = chunk__77148_78657;
var G__78663 = count__77149_78658;
var G__78664 = (i__77150_78659 + (1));
seq__77147_78656 = G__78661;
chunk__77148_78657 = G__78662;
count__77149_78658 = G__78663;
i__77150_78659 = G__78664;
continue;
} else {
var temp__5735__auto___78665__$1 = cljs.core.seq(seq__77147_78656);
if(temp__5735__auto___78665__$1){
var seq__77147_78666__$1 = temp__5735__auto___78665__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77147_78666__$1)){
var c__4556__auto___78667 = cljs.core.chunk_first(seq__77147_78666__$1);
var G__78668 = cljs.core.chunk_rest(seq__77147_78666__$1);
var G__78669 = c__4556__auto___78667;
var G__78670 = cljs.core.count(c__4556__auto___78667);
var G__78671 = (0);
seq__77147_78656 = G__78668;
chunk__77148_78657 = G__78669;
count__77149_78658 = G__78670;
i__77150_78659 = G__78671;
continue;
} else {
var out_78672 = cljs.core.first(seq__77147_78666__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78672,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78672);


var G__78673 = cljs.core.next(seq__77147_78666__$1);
var G__78674 = null;
var G__78675 = (0);
var G__78676 = (0);
seq__77147_78656 = G__78673;
chunk__77148_78657 = G__78674;
count__77149_78658 = G__78675;
i__77150_78659 = G__78676;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__78677 = cljs.core.next(seq__77119__$1);
var G__78678 = null;
var G__78679 = (0);
var G__78680 = (0);
seq__77119 = G__78677;
chunk__77120 = G__78678;
count__77121 = G__78679;
i__77122 = G__78680;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__29442__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__29443__auto__;
} else {
var seq__77151 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__77152 = null;
var count__77153 = (0);
var i__77154 = (0);
while(true){
if((i__77154 < count__77153)){
var vec__77169 = chunk__77152.cljs$core$IIndexed$_nth$arity$2(null,i__77154);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77169,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77169,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__77172_78681 = cljs.core.seq(watchers);
var chunk__77173_78682 = null;
var count__77174_78683 = (0);
var i__77175_78684 = (0);
while(true){
if((i__77175_78684 < count__77174_78683)){
var out_78685 = chunk__77173_78682.cljs$core$IIndexed$_nth$arity$2(null,i__77175_78684);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78685,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78685);


var G__78686 = seq__77172_78681;
var G__78687 = chunk__77173_78682;
var G__78688 = count__77174_78683;
var G__78689 = (i__77175_78684 + (1));
seq__77172_78681 = G__78686;
chunk__77173_78682 = G__78687;
count__77174_78683 = G__78688;
i__77175_78684 = G__78689;
continue;
} else {
var temp__5735__auto___78690 = cljs.core.seq(seq__77172_78681);
if(temp__5735__auto___78690){
var seq__77172_78691__$1 = temp__5735__auto___78690;
if(cljs.core.chunked_seq_QMARK_(seq__77172_78691__$1)){
var c__4556__auto___78692 = cljs.core.chunk_first(seq__77172_78691__$1);
var G__78693 = cljs.core.chunk_rest(seq__77172_78691__$1);
var G__78694 = c__4556__auto___78692;
var G__78695 = cljs.core.count(c__4556__auto___78692);
var G__78696 = (0);
seq__77172_78681 = G__78693;
chunk__77173_78682 = G__78694;
count__77174_78683 = G__78695;
i__77175_78684 = G__78696;
continue;
} else {
var out_78697 = cljs.core.first(seq__77172_78691__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78697,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78697);


var G__78698 = cljs.core.next(seq__77172_78691__$1);
var G__78699 = null;
var G__78700 = (0);
var G__78701 = (0);
seq__77172_78681 = G__78698;
chunk__77173_78682 = G__78699;
count__77174_78683 = G__78700;
i__77175_78684 = G__78701;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__78702 = seq__77151;
var G__78703 = chunk__77152;
var G__78704 = count__77153;
var G__78705 = (i__77154 + (1));
seq__77151 = G__78702;
chunk__77152 = G__78703;
count__77153 = G__78704;
i__77154 = G__78705;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77151);
if(temp__5735__auto__){
var seq__77151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77151__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77151__$1);
var G__78706 = cljs.core.chunk_rest(seq__77151__$1);
var G__78707 = c__4556__auto__;
var G__78708 = cljs.core.count(c__4556__auto__);
var G__78709 = (0);
seq__77151 = G__78706;
chunk__77152 = G__78707;
count__77153 = G__78708;
i__77154 = G__78709;
continue;
} else {
var vec__77176 = cljs.core.first(seq__77151__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77176,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77176,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__77179_78710 = cljs.core.seq(watchers);
var chunk__77180_78711 = null;
var count__77181_78712 = (0);
var i__77182_78713 = (0);
while(true){
if((i__77182_78713 < count__77181_78712)){
var out_78714 = chunk__77180_78711.cljs$core$IIndexed$_nth$arity$2(null,i__77182_78713);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78714,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78714);


var G__78715 = seq__77179_78710;
var G__78716 = chunk__77180_78711;
var G__78717 = count__77181_78712;
var G__78718 = (i__77182_78713 + (1));
seq__77179_78710 = G__78715;
chunk__77180_78711 = G__78716;
count__77181_78712 = G__78717;
i__77182_78713 = G__78718;
continue;
} else {
var temp__5735__auto___78719__$1 = cljs.core.seq(seq__77179_78710);
if(temp__5735__auto___78719__$1){
var seq__77179_78720__$1 = temp__5735__auto___78719__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77179_78720__$1)){
var c__4556__auto___78721 = cljs.core.chunk_first(seq__77179_78720__$1);
var G__78722 = cljs.core.chunk_rest(seq__77179_78720__$1);
var G__78723 = c__4556__auto___78721;
var G__78724 = cljs.core.count(c__4556__auto___78721);
var G__78725 = (0);
seq__77179_78710 = G__78722;
chunk__77180_78711 = G__78723;
count__77181_78712 = G__78724;
i__77182_78713 = G__78725;
continue;
} else {
var out_78726 = cljs.core.first(seq__77179_78720__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_78726,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_78726);


var G__78727 = cljs.core.next(seq__77179_78720__$1);
var G__78728 = null;
var G__78729 = (0);
var G__78730 = (0);
seq__77179_78710 = G__78727;
chunk__77180_78711 = G__78728;
count__77181_78712 = G__78729;
i__77182_78713 = G__78730;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__78731 = cljs.core.next(seq__77151__$1);
var G__78732 = null;
var G__78733 = (0);
var G__78734 = (0);
seq__77151 = G__78731;
chunk__77152 = G__78732;
count__77153 = G__78733;
i__77154 = G__78734;
continue;
}
} else {
return null;
}
}
break;
}
}
});
com.wsscode.pathom.parser.default_step_fn = (function com$wsscode$pathom$parser$default_step_fn(amount,min){
return (function (_env,x){
return Math.max((x - amount),min);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__77183){
var vec__77184 = p__77183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77184,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
})),m);
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.parser.value_merge = (function com$wsscode$pathom$parser$value_merge(x,y){
if((((y === new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))) || ((y === new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137))))){
return x;
} else {
return y;
}
});
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__77189,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__77190 = p__77189;
var map__77190__$1 = (((((!((map__77190 == null))))?(((((map__77190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77190):map__77190);
var env = map__77190__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77190__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77190__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77190__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77190__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_77463){
var state_val_77464 = (state_77463[(1)]);
if((state_val_77464 === (65))){
var inst_77223 = (state_77463[(7)]);
var inst_77382 = (state_77463[(8)]);
var inst_77210 = (state_77463[(9)]);
var inst_77387 = (state_77463[(10)]);
var inst_77205 = (state_77463[(11)]);
var inst_77386 = (state_77463[(12)]);
var inst_77385 = (state_77463[(13)]);
var inst_77222 = (state_77463[(14)]);
var inst_77388 = (state_77463[(15)]);
var inst_77219 = (state_77463[(16)]);
var inst_77221 = (state_77463[(17)]);
var inst_77384 = (state_77463[(18)]);
var inst_77379 = (state_77463[(19)]);
var inst_77383 = (state_77463[(20)]);
var inst_77381 = (state_77463[(21)]);
var inst_77399 = (state_77463[(2)]);
var inst_77400 = com.wsscode.pathom.trace.trace(env,inst_77399);
var inst_77401 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_77402 = (function (){var p = inst_77223;
var merge_result_QMARK_ = inst_77382;
var recheck_ch = inst_77210;
var response_value = inst_77387;
var _ = inst_77205;
var key_as = inst_77386;
var provides_SINGLEQUOTE_ = inst_77385;
var msg = inst_77222;
var waiting__$1 = inst_77388;
var processing_SINGLEQUOTE_ = inst_77219;
var vec__77198 = inst_77221;
var waiting_SINGLEQUOTE_ = inst_77384;
var map__77358 = inst_77379;
var error = inst_77383;
var provides = inst_77381;
return (function (p1__77188_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__77188_SHARP_], 0));
});
})();
var inst_77403 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_77401,inst_77402);
var inst_77404 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_77385,inst_77383);
var state_77463__$1 = (function (){var statearr_77465 = state_77463;
(statearr_77465[(22)] = inst_77400);

(statearr_77465[(23)] = inst_77403);

(statearr_77465[(24)] = inst_77404);

return statearr_77465;
})();
if(cljs.core.truth_(inst_77382)){
var statearr_77466_78735 = state_77463__$1;
(statearr_77466_78735[(1)] = (66));

} else {
var statearr_77467_78736 = state_77463__$1;
(statearr_77467_78736[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (62))){
var inst_77456 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77468_78737 = state_77463__$1;
(statearr_77468_78737[(2)] = inst_77456);

(statearr_77468_78737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (7))){
var state_77463__$1 = state_77463;
var statearr_77469_78738 = state_77463__$1;
(statearr_77469_78738[(2)] = null);

(statearr_77469_78738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (59))){
var inst_77379 = (state_77463[(19)]);
var inst_77222 = (state_77463[(14)]);
var inst_77381 = (state_77463[(21)]);
var inst_77384 = (state_77463[(18)]);
var inst_77379__$1 = (state_77463[(2)]);
var inst_77380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77379__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_77381__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77379__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_77382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77379__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_77383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77379__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_77384__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_77222);
var inst_77385 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_77381__$1,inst_77384__$1);
var inst_77386 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_77380);
var inst_77387 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_77380,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_77388 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_77384__$1);
var state_77463__$1 = (function (){var statearr_77470 = state_77463;
(statearr_77470[(19)] = inst_77379__$1);

(statearr_77470[(21)] = inst_77381__$1);

(statearr_77470[(8)] = inst_77382);

(statearr_77470[(20)] = inst_77383);

(statearr_77470[(18)] = inst_77384__$1);

(statearr_77470[(13)] = inst_77385);

(statearr_77470[(12)] = inst_77386);

(statearr_77470[(10)] = inst_77387);

(statearr_77470[(15)] = inst_77388);

return statearr_77470;
})();
if(cljs.core.truth_(inst_77222)){
var statearr_77476_78739 = state_77463__$1;
(statearr_77476_78739[(1)] = (60));

} else {
var statearr_77477_78740 = state_77463__$1;
(statearr_77477_78740[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (20))){
var inst_77335 = (state_77463[(2)]);
var inst_77336 = cljs.core.deref(done_signal_STAR_);
var state_77463__$1 = (function (){var statearr_77478 = state_77463;
(statearr_77478[(25)] = inst_77335);

return statearr_77478;
})();
if(cljs.core.truth_(inst_77336)){
var statearr_77479_78741 = state_77463__$1;
(statearr_77479_78741[(1)] = (48));

} else {
var statearr_77480_78742 = state_77463__$1;
(statearr_77480_78742[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (58))){
var inst_77222 = (state_77463[(14)]);
var state_77463__$1 = state_77463;
var statearr_77481_78743 = state_77463__$1;
(statearr_77481_78743[(2)] = inst_77222);

(statearr_77481_78743[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (60))){
var inst_77382 = (state_77463[(8)]);
var inst_77381 = (state_77463[(21)]);
var inst_77387 = (state_77463[(10)]);
var inst_77384 = (state_77463[(18)]);
var inst_77391 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_77392 = cljs.core.boolean$(inst_77382);
var inst_77393 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_77381,inst_77387,inst_77392];
var inst_77394 = cljs.core.PersistentHashMap.fromArrays(inst_77391,inst_77393);
var state_77463__$1 = (function (){var statearr_77482 = state_77463;
(statearr_77482[(26)] = inst_77394);

return statearr_77482;
})();
if(cljs.core.truth_(inst_77384)){
var statearr_77483_78744 = state_77463__$1;
(statearr_77483_78744[(1)] = (63));

} else {
var statearr_77484_78745 = state_77463__$1;
(statearr_77484_78745[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (27))){
var state_77463__$1 = state_77463;
var statearr_77485_78746 = state_77463__$1;
(statearr_77485_78746[(2)] = true);

(statearr_77485_78746[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (1))){
var state_77463__$1 = state_77463;
var statearr_77486_78747 = state_77463__$1;
(statearr_77486_78747[(2)] = null);

(statearr_77486_78747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (24))){
var inst_77264 = (state_77463[(27)]);
var inst_77269 = inst_77264.cljs$lang$protocol_mask$partition0$;
var inst_77270 = (inst_77269 & (64));
var inst_77271 = inst_77264.cljs$core$ISeq$;
var inst_77272 = (cljs.core.PROTOCOL_SENTINEL === inst_77271);
var inst_77273 = ((inst_77270) || (inst_77272));
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77273)){
var statearr_77487_78748 = state_77463__$1;
(statearr_77487_78748[(1)] = (27));

} else {
var statearr_77488_78749 = state_77463__$1;
(statearr_77488_78749[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (55))){
var state_77463__$1 = state_77463;
var statearr_77489_78750 = state_77463__$1;
(statearr_77489_78750[(2)] = false);

(statearr_77489_78750[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (39))){
var inst_77301 = (state_77463[(28)]);
var inst_77306 = inst_77301.cljs$lang$protocol_mask$partition0$;
var inst_77307 = (inst_77306 & (64));
var inst_77308 = inst_77301.cljs$core$ISeq$;
var inst_77309 = (cljs.core.PROTOCOL_SENTINEL === inst_77308);
var inst_77310 = ((inst_77307) || (inst_77309));
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77310)){
var statearr_77490_78751 = state_77463__$1;
(statearr_77490_78751[(1)] = (42));

} else {
var statearr_77491_78752 = state_77463__$1;
(statearr_77491_78752[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (46))){
var inst_77301 = (state_77463[(28)]);
var state_77463__$1 = state_77463;
var statearr_77492_78753 = state_77463__$1;
(statearr_77492_78753[(2)] = inst_77301);

(statearr_77492_78753[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (4))){
var inst_77192 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77493_78754 = state_77463__$1;
(statearr_77493_78754[(2)] = inst_77192);

(statearr_77493_78754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (54))){
var state_77463__$1 = state_77463;
var statearr_77494_78755 = state_77463__$1;
(statearr_77494_78755[(2)] = true);

(statearr_77494_78755[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (15))){
var inst_77458 = (state_77463[(2)]);
var _ = (function (){var statearr_77495 = state_77463;
(statearr_77495[(4)] = cljs.core.rest((state_77463[(4)])));

return statearr_77495;
})();
var state_77463__$1 = state_77463;
var statearr_77496_78756 = state_77463__$1;
(statearr_77496_78756[(2)] = inst_77458);

(statearr_77496_78756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (48))){
var inst_77338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77339 = cljs.core.PersistentHashSet.EMPTY;
var inst_77340 = cljs.core.PersistentHashSet.EMPTY;
var inst_77341 = cljs.core.PersistentVector.EMPTY;
var inst_77342 = [res,inst_77339,inst_77340,key_iterations,inst_77341];
var inst_77343 = (new cljs.core.PersistentVector(null,5,(5),inst_77338,inst_77342,null));
var state_77463__$1 = state_77463;
var statearr_77497_78757 = state_77463__$1;
(statearr_77497_78757[(2)] = inst_77343);

(statearr_77497_78757[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (50))){
var inst_77354 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77498_78758 = state_77463__$1;
(statearr_77498_78758[(2)] = inst_77354);

(statearr_77498_78758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (21))){
var inst_77256 = (state_77463[(29)]);
var inst_77258 = (state_77463[(30)]);
var inst_77264 = (state_77463[(27)]);
var inst_77264__$1 = cljs.core._nth(inst_77256,inst_77258);
var inst_77266 = (inst_77264__$1 == null);
var inst_77267 = cljs.core.not(inst_77266);
var state_77463__$1 = (function (){var statearr_77502 = state_77463;
(statearr_77502[(27)] = inst_77264__$1);

return statearr_77502;
})();
if(inst_77267){
var statearr_77503_78759 = state_77463__$1;
(statearr_77503_78759[(1)] = (24));

} else {
var statearr_77504_78760 = state_77463__$1;
(statearr_77504_78760[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (31))){
var inst_77264 = (state_77463[(27)]);
var state_77463__$1 = state_77463;
var statearr_77505_78761 = state_77463__$1;
(statearr_77505_78761[(2)] = inst_77264);

(statearr_77505_78761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (32))){
var inst_77258 = (state_77463[(30)]);
var inst_77255 = (state_77463[(31)]);
var inst_77256 = (state_77463[(29)]);
var inst_77257 = (state_77463[(32)]);
var inst_77285 = (state_77463[(2)]);
var inst_77286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77285,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_77287 = cljs.core.async.close_BANG_(inst_77286);
var inst_77288 = (inst_77258 + (1));
var tmp77499 = inst_77257;
var tmp77500 = inst_77255;
var tmp77501 = inst_77256;
var inst_77255__$1 = tmp77500;
var inst_77256__$1 = tmp77501;
var inst_77257__$1 = tmp77499;
var inst_77258__$1 = inst_77288;
var state_77463__$1 = (function (){var statearr_77506 = state_77463;
(statearr_77506[(33)] = inst_77287);

(statearr_77506[(31)] = inst_77255__$1);

(statearr_77506[(29)] = inst_77256__$1);

(statearr_77506[(32)] = inst_77257__$1);

(statearr_77506[(30)] = inst_77258__$1);

return statearr_77506;
})();
var statearr_77507_78762 = state_77463__$1;
(statearr_77507_78762[(2)] = null);

(statearr_77507_78762[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (40))){
var state_77463__$1 = state_77463;
var statearr_77508_78763 = state_77463__$1;
(statearr_77508_78763[(2)] = false);

(statearr_77508_78763[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (56))){
var inst_77371 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77509_78764 = state_77463__$1;
(statearr_77509_78764[(2)] = inst_77371);

(statearr_77509_78764[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (33))){
var inst_77291 = (state_77463[(34)]);
var inst_77293 = cljs.core.chunked_seq_QMARK_(inst_77291);
var state_77463__$1 = state_77463;
if(inst_77293){
var statearr_77510_78765 = state_77463__$1;
(statearr_77510_78765[(1)] = (36));

} else {
var statearr_77511_78766 = state_77463__$1;
(statearr_77511_78766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (13))){
var inst_77230 = (state_77463[(35)]);
var inst_77223 = (state_77463[(7)]);
var inst_77210 = (state_77463[(9)]);
var inst_77205 = (state_77463[(11)]);
var inst_77222 = (state_77463[(14)]);
var inst_77219 = (state_77463[(16)]);
var inst_77221 = (state_77463[(17)]);
var inst_77226 = cljs.core.keys(indexed_props);
var inst_77227 = cljs.core.set(inst_77226);
var inst_77228 = cljs.core.keys(res);
var inst_77229 = cljs.core.set(inst_77228);
var inst_77230__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_77227,inst_77229);
var inst_77231 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_77232 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_77233 = [processing,inst_77230__$1];
var inst_77234 = cljs.core.PersistentHashMap.fromArrays(inst_77232,inst_77233);
var inst_77235 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_77234];
var inst_77236 = cljs.core.PersistentHashMap.fromArrays(inst_77231,inst_77235);
var inst_77237 = com.wsscode.pathom.trace.trace(env,inst_77236);
var inst_77238 = (function (){var missing_props = inst_77230__$1;
var p = inst_77223;
var recheck_ch = inst_77210;
var _ = inst_77205;
var msg = inst_77222;
var processing_SINGLEQUOTE_ = inst_77219;
var all_props = inst_77227;
var vec__77198 = inst_77221;
var current_props = inst_77229;
return (function (p1__77187_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__77187_SHARP_));
});
})();
var inst_77239 = cljs.core.some(inst_77238,inst_77230__$1);
var state_77463__$1 = (function (){var statearr_77512 = state_77463;
(statearr_77512[(35)] = inst_77230__$1);

(statearr_77512[(36)] = inst_77237);

return statearr_77512;
})();
if(cljs.core.truth_(inst_77239)){
var statearr_77513_78767 = state_77463__$1;
(statearr_77513_78767[(1)] = (16));

} else {
var statearr_77514_78768 = state_77463__$1;
(statearr_77514_78768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (22))){
var inst_77255 = (state_77463[(31)]);
var inst_77291 = (state_77463[(34)]);
var inst_77291__$1 = cljs.core.seq(inst_77255);
var state_77463__$1 = (function (){var statearr_77515 = state_77463;
(statearr_77515[(34)] = inst_77291__$1);

return statearr_77515;
})();
if(inst_77291__$1){
var statearr_77516_78769 = state_77463__$1;
(statearr_77516_78769[(1)] = (33));

} else {
var statearr_77517_78770 = state_77463__$1;
(statearr_77517_78770[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (36))){
var inst_77291 = (state_77463[(34)]);
var inst_77295 = cljs.core.chunk_first(inst_77291);
var inst_77296 = cljs.core.chunk_rest(inst_77291);
var inst_77297 = cljs.core.count(inst_77295);
var inst_77255 = inst_77296;
var inst_77256 = inst_77295;
var inst_77257 = inst_77297;
var inst_77258 = (0);
var state_77463__$1 = (function (){var statearr_77518 = state_77463;
(statearr_77518[(31)] = inst_77255);

(statearr_77518[(29)] = inst_77256);

(statearr_77518[(32)] = inst_77257);

(statearr_77518[(30)] = inst_77258);

return statearr_77518;
})();
var statearr_77519_78771 = state_77463__$1;
(statearr_77519_78771[(2)] = null);

(statearr_77519_78771[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (41))){
var inst_77317 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77317)){
var statearr_77520_78772 = state_77463__$1;
(statearr_77520_78772[(1)] = (45));

} else {
var statearr_77521_78773 = state_77463__$1;
(statearr_77521_78773[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (43))){
var state_77463__$1 = state_77463;
var statearr_77522_78774 = state_77463__$1;
(statearr_77522_78774[(2)] = false);

(statearr_77522_78774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (61))){
var inst_77223 = (state_77463[(7)]);
var inst_77388 = (state_77463[(15)]);
var inst_77445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77446 = cljs.core.PersistentHashSet.EMPTY;
var inst_77447 = [inst_77223];
var inst_77448 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_77447);
var inst_77449 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_77448,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_77450 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_77449);
var inst_77451 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_77446,inst_77450,processing);
var inst_77452 = cljs.core.PersistentVector.EMPTY;
var inst_77453 = [res,inst_77388,inst_77451,key_iterations,inst_77452];
var inst_77454 = (new cljs.core.PersistentVector(null,5,(5),inst_77445,inst_77453,null));
var state_77463__$1 = state_77463;
var statearr_77523_78775 = state_77463__$1;
(statearr_77523_78775[(2)] = inst_77454);

(statearr_77523_78775[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (29))){
var inst_77277 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77524_78776 = state_77463__$1;
(statearr_77524_78776[(2)] = inst_77277);

(statearr_77524_78776[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (44))){
var inst_77314 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77525_78777 = state_77463__$1;
(statearr_77525_78777[(2)] = inst_77314);

(statearr_77525_78777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (6))){
var inst_77207 = cljs.core.async.timeout(processing_recheck_timer);
var state_77463__$1 = state_77463;
var statearr_77526_78778 = state_77463__$1;
(statearr_77526_78778[(2)] = inst_77207);

(statearr_77526_78778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (28))){
var state_77463__$1 = state_77463;
var statearr_77527_78779 = state_77463__$1;
(statearr_77527_78779[(2)] = false);

(statearr_77527_78779[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (64))){
var inst_77394 = (state_77463[(26)]);
var state_77463__$1 = state_77463;
var statearr_77528_78780 = state_77463__$1;
(statearr_77528_78780[(2)] = inst_77394);

(statearr_77528_78780[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (51))){
var inst_77222 = (state_77463[(14)]);
var inst_77363 = inst_77222.cljs$lang$protocol_mask$partition0$;
var inst_77364 = (inst_77363 & (64));
var inst_77365 = inst_77222.cljs$core$ISeq$;
var inst_77366 = (cljs.core.PROTOCOL_SENTINEL === inst_77365);
var inst_77367 = ((inst_77364) || (inst_77366));
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77367)){
var statearr_77529_78781 = state_77463__$1;
(statearr_77529_78781[(1)] = (54));

} else {
var statearr_77530_78782 = state_77463__$1;
(statearr_77530_78782[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (25))){
var state_77463__$1 = state_77463;
var statearr_77531_78783 = state_77463__$1;
(statearr_77531_78783[(2)] = false);

(statearr_77531_78783[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (34))){
var state_77463__$1 = state_77463;
var statearr_77532_78784 = state_77463__$1;
(statearr_77532_78784[(2)] = null);

(statearr_77532_78784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (17))){
var inst_77230 = (state_77463[(35)]);
var inst_77246 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_77247 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_77230];
var inst_77248 = cljs.core.PersistentHashMap.fromArrays(inst_77246,inst_77247);
var inst_77249 = com.wsscode.pathom.trace.trace(env,inst_77248);
var inst_77254 = cljs.core.seq(processing);
var inst_77255 = inst_77254;
var inst_77256 = null;
var inst_77257 = (0);
var inst_77258 = (0);
var state_77463__$1 = (function (){var statearr_77533 = state_77463;
(statearr_77533[(37)] = inst_77249);

(statearr_77533[(31)] = inst_77255);

(statearr_77533[(29)] = inst_77256);

(statearr_77533[(32)] = inst_77257);

(statearr_77533[(30)] = inst_77258);

return statearr_77533;
})();
var statearr_77534_78785 = state_77463__$1;
(statearr_77534_78785[(2)] = null);

(statearr_77534_78785[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (3))){
var inst_77461 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77463__$1,inst_77461);
} else {
if((state_val_77464 === (12))){
var inst_77221 = (state_77463[(17)]);
var inst_77223 = (state_77463[(7)]);
var inst_77210 = (state_77463[(9)]);
var inst_77221__$1 = (state_77463[(2)]);
var inst_77222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77221__$1,(0),null);
var inst_77223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77221__$1,(1),null);
var inst_77224 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77223__$1,inst_77210);
var state_77463__$1 = (function (){var statearr_77535 = state_77463;
(statearr_77535[(17)] = inst_77221__$1);

(statearr_77535[(14)] = inst_77222);

(statearr_77535[(7)] = inst_77223__$1);

return statearr_77535;
})();
if(inst_77224){
var statearr_77536_78786 = state_77463__$1;
(statearr_77536_78786[(1)] = (13));

} else {
var statearr_77537_78787 = state_77463__$1;
(statearr_77537_78787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (2))){
var _ = (function (){var statearr_77538 = state_77463;
(statearr_77538[(4)] = cljs.core.cons((5),(state_77463[(4)])));

return statearr_77538;
})();
var inst_77201 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_77202 = cljs.core.count(processing);
var inst_77203 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_77202];
var inst_77204 = cljs.core.PersistentHashMap.fromArrays(inst_77201,inst_77203);
var inst_77205 = com.wsscode.pathom.trace.trace(env,inst_77204);
var state_77463__$1 = (function (){var statearr_77539 = state_77463;
(statearr_77539[(11)] = inst_77205);

return statearr_77539;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_77540_78788 = state_77463__$1;
(statearr_77540_78788[(1)] = (6));

} else {
var statearr_77541_78789 = state_77463__$1;
(statearr_77541_78789[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (66))){
var inst_77387 = (state_77463[(10)]);
var inst_77386 = (state_77463[(12)]);
var inst_77385 = (state_77463[(13)]);
var inst_77388 = (state_77463[(15)]);
var inst_77406 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_77407 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_77387];
var inst_77408 = cljs.core.PersistentHashMap.fromArrays(inst_77406,inst_77407);
var inst_77409 = com.wsscode.pathom.trace.trace(env,inst_77408);
var inst_77410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77411 = cljs.core.vals(inst_77387);
var inst_77412 = cljs.core.first(inst_77411);
var inst_77413 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_77386,inst_77412);
var inst_77414 = cljs.core.PersistentHashSet.EMPTY;
var inst_77415 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_77385);
var inst_77416 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_77414,inst_77415,inst_77388);
var inst_77417 = cljs.core.PersistentVector.EMPTY;
var inst_77418 = [inst_77413,inst_77416,processing,key_iterations,inst_77417];
var inst_77419 = (new cljs.core.PersistentVector(null,5,(5),inst_77410,inst_77418,null));
var state_77463__$1 = (function (){var statearr_77542 = state_77463;
(statearr_77542[(38)] = inst_77409);

return statearr_77542;
})();
var statearr_77543_78790 = state_77463__$1;
(statearr_77543_78790[(2)] = inst_77419);

(statearr_77543_78790[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (23))){
var inst_77333 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77544_78791 = state_77463__$1;
(statearr_77544_78791[(2)] = inst_77333);

(statearr_77544_78791[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (47))){
var inst_77291 = (state_77463[(34)]);
var inst_77322 = (state_77463[(2)]);
var inst_77323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77322,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_77324 = cljs.core.async.close_BANG_(inst_77323);
var inst_77325 = cljs.core.next(inst_77291);
var inst_77255 = inst_77325;
var inst_77256 = null;
var inst_77257 = (0);
var inst_77258 = (0);
var state_77463__$1 = (function (){var statearr_77545 = state_77463;
(statearr_77545[(39)] = inst_77324);

(statearr_77545[(31)] = inst_77255);

(statearr_77545[(29)] = inst_77256);

(statearr_77545[(32)] = inst_77257);

(statearr_77545[(30)] = inst_77258);

return statearr_77545;
})();
var statearr_77546_78792 = state_77463__$1;
(statearr_77546_78792[(2)] = null);

(statearr_77546_78792[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (35))){
var inst_77331 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77547_78793 = state_77463__$1;
(statearr_77547_78793[(2)] = inst_77331);

(statearr_77547_78793[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (19))){
var inst_77258 = (state_77463[(30)]);
var inst_77257 = (state_77463[(32)]);
var inst_77260 = (inst_77258 < inst_77257);
var inst_77261 = inst_77260;
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77261)){
var statearr_77548_78794 = state_77463__$1;
(statearr_77548_78794[(1)] = (21));

} else {
var statearr_77549_78795 = state_77463__$1;
(statearr_77549_78795[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (57))){
var inst_77222 = (state_77463[(14)]);
var inst_77376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77222);
var state_77463__$1 = state_77463;
var statearr_77550_78796 = state_77463__$1;
(statearr_77550_78796[(2)] = inst_77376);

(statearr_77550_78796[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (68))){
var inst_77443 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77551_78797 = state_77463__$1;
(statearr_77551_78797[(2)] = inst_77443);

(statearr_77551_78797[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (11))){
var inst_77219 = (state_77463[(16)]);
var inst_77219__$1 = (state_77463[(2)]);
var state_77463__$1 = (function (){var statearr_77553 = state_77463;
(statearr_77553[(16)] = inst_77219__$1);

return statearr_77553;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_77463__$1,(12),inst_77219__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_77464 === (9))){
var inst_77214 = (state_77463[(40)]);
var inst_77210 = (state_77463[(9)]);
var inst_77216 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_77214,inst_77210);
var state_77463__$1 = state_77463;
var statearr_77554_78798 = state_77463__$1;
(statearr_77554_78798[(2)] = inst_77216);

(statearr_77554_78798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (5))){
var _ = (function (){var statearr_77555 = state_77463;
(statearr_77555[(4)] = cljs.core.rest((state_77463[(4)])));

return statearr_77555;
})();
var state_77463__$1 = state_77463;
var ex77552 = (state_77463__$1[(2)]);
var statearr_77556_78799 = state_77463__$1;
(statearr_77556_78799[(5)] = ex77552);


var statearr_77557_78800 = state_77463__$1;
(statearr_77557_78800[(1)] = (4));

(statearr_77557_78800[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (14))){
var inst_77222 = (state_77463[(14)]);
var inst_77360 = (inst_77222 == null);
var inst_77361 = cljs.core.not(inst_77360);
var state_77463__$1 = state_77463;
if(inst_77361){
var statearr_77558_78801 = state_77463__$1;
(statearr_77558_78801[(1)] = (51));

} else {
var statearr_77559_78802 = state_77463__$1;
(statearr_77559_78802[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (45))){
var inst_77301 = (state_77463[(28)]);
var inst_77319 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77301);
var state_77463__$1 = state_77463;
var statearr_77560_78803 = state_77463__$1;
(statearr_77560_78803[(2)] = inst_77319);

(statearr_77560_78803[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (53))){
var inst_77374 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77374)){
var statearr_77561_78804 = state_77463__$1;
(statearr_77561_78804[(1)] = (57));

} else {
var statearr_77562_78805 = state_77463__$1;
(statearr_77562_78805[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (26))){
var inst_77280 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
if(cljs.core.truth_(inst_77280)){
var statearr_77563_78806 = state_77463__$1;
(statearr_77563_78806[(1)] = (30));

} else {
var statearr_77564_78807 = state_77463__$1;
(statearr_77564_78807[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (16))){
var inst_77241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77242 = cljs.core.PersistentVector.EMPTY;
var inst_77243 = [res,waiting,processing,key_iterations,inst_77242];
var inst_77244 = (new cljs.core.PersistentVector(null,5,(5),inst_77241,inst_77243,null));
var state_77463__$1 = state_77463;
var statearr_77565_78808 = state_77463__$1;
(statearr_77565_78808[(2)] = inst_77244);

(statearr_77565_78808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (38))){
var inst_77328 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77566_78809 = state_77463__$1;
(statearr_77566_78809[(2)] = inst_77328);

(statearr_77566_78809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (30))){
var inst_77264 = (state_77463[(27)]);
var inst_77282 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77264);
var state_77463__$1 = state_77463;
var statearr_77567_78810 = state_77463__$1;
(statearr_77567_78810[(2)] = inst_77282);

(statearr_77567_78810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (10))){
var inst_77214 = (state_77463[(40)]);
var state_77463__$1 = state_77463;
var statearr_77568_78811 = state_77463__$1;
(statearr_77568_78811[(2)] = inst_77214);

(statearr_77568_78811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (18))){
var inst_77356 = (state_77463[(2)]);
var state_77463__$1 = state_77463;
var statearr_77569_78812 = state_77463__$1;
(statearr_77569_78812[(2)] = inst_77356);

(statearr_77569_78812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (52))){
var state_77463__$1 = state_77463;
var statearr_77570_78813 = state_77463__$1;
(statearr_77570_78813[(2)] = false);

(statearr_77570_78813[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (67))){
var inst_77385 = (state_77463[(13)]);
var inst_77388 = (state_77463[(15)]);
var inst_77421 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_77422 = cljs.core.keys(inst_77421);
var inst_77423 = cljs.core.set(inst_77422);
var inst_77424 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_77423,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_77425 = cljs.core.vec(inst_77385);
var inst_77426 = com.wsscode.pathom.parser.focus_subquery(tx,inst_77425);
var inst_77427 = com.wsscode.pathom.parser.query__GT_ast(inst_77426);
var inst_77428 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_77427);
var inst_77429 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_77424,inst_77428);
var inst_77430 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_77429);
var inst_77431 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_77432 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_77430);
var inst_77433 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_77432];
var inst_77434 = cljs.core.PersistentHashMap.fromArrays(inst_77431,inst_77433);
var inst_77435 = com.wsscode.pathom.trace.trace(env,inst_77434);
var inst_77436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77437 = cljs.core.PersistentHashSet.EMPTY;
var inst_77438 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_77385);
var inst_77439 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_77437,inst_77438,inst_77388);
var inst_77440 = [res,inst_77439,processing,key_iterations,inst_77430];
var inst_77441 = (new cljs.core.PersistentVector(null,5,(5),inst_77436,inst_77440,null));
var state_77463__$1 = (function (){var statearr_77576 = state_77463;
(statearr_77576[(41)] = inst_77435);

return statearr_77576;
})();
var statearr_77577_78818 = state_77463__$1;
(statearr_77577_78818[(2)] = inst_77441);

(statearr_77577_78818[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (42))){
var state_77463__$1 = state_77463;
var statearr_77578_78819 = state_77463__$1;
(statearr_77578_78819[(2)] = true);

(statearr_77578_78819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (37))){
var inst_77291 = (state_77463[(34)]);
var inst_77301 = (state_77463[(28)]);
var inst_77301__$1 = cljs.core.first(inst_77291);
var inst_77303 = (inst_77301__$1 == null);
var inst_77304 = cljs.core.not(inst_77303);
var state_77463__$1 = (function (){var statearr_77579 = state_77463;
(statearr_77579[(28)] = inst_77301__$1);

return statearr_77579;
})();
if(inst_77304){
var statearr_77580_78820 = state_77463__$1;
(statearr_77580_78820[(1)] = (39));

} else {
var statearr_77581_78821 = state_77463__$1;
(statearr_77581_78821[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (63))){
var inst_77394 = (state_77463[(26)]);
var inst_77384 = (state_77463[(18)]);
var inst_77396 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_77394,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_77384);
var state_77463__$1 = state_77463;
var statearr_77582_78822 = state_77463__$1;
(statearr_77582_78822[(2)] = inst_77396);

(statearr_77582_78822[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (8))){
var inst_77210 = (state_77463[(9)]);
var inst_77210__$1 = (state_77463[(2)]);
var inst_77212 = cljs.core.PersistentVector.EMPTY;
var inst_77213 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_77214 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_77212,inst_77213,processing);
var state_77463__$1 = (function (){var statearr_77583 = state_77463;
(statearr_77583[(9)] = inst_77210__$1);

(statearr_77583[(40)] = inst_77214);

return statearr_77583;
})();
if(cljs.core.truth_(inst_77210__$1)){
var statearr_77584_78823 = state_77463__$1;
(statearr_77584_78823[(1)] = (9));

} else {
var statearr_77585_78824 = state_77463__$1;
(statearr_77585_78824[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77464 === (49))){
var inst_77230 = (state_77463[(35)]);
var inst_77345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77346 = cljs.core.PersistentHashSet.EMPTY;
var inst_77347 = cljs.core.PersistentHashSet.EMPTY;
var inst_77348 = cljs.core.PersistentVector.EMPTY;
var inst_77349 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_77350 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_77348,inst_77349,inst_77230);
var inst_77351 = [res,inst_77346,inst_77347,key_iterations,inst_77350];
var inst_77352 = (new cljs.core.PersistentVector(null,5,(5),inst_77345,inst_77351,null));
var state_77463__$1 = state_77463;
var statearr_77586_78825 = state_77463__$1;
(statearr_77586_78825[(2)] = inst_77352);

(statearr_77586_78825[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto____0 = (function (){
var statearr_77587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77587[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto__);

(statearr_77587[(1)] = (1));

return statearr_77587;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto____1 = (function (state_77463){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_77463);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e77588){var ex__50860__auto__ = e77588;
var statearr_77589_78826 = state_77463;
(statearr_77589_78826[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_77463[(4)]))){
var statearr_77590_78827 = state_77463;
(statearr_77590_78827[(1)] = cljs.core.first((state_77463[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78828 = state_77463;
state_77463 = G__78828;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto__ = function(state_77463){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto____1.call(this,state_77463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_77591 = f__50893__auto__();
(statearr_77591[(6)] = c__50892__auto__);

return statearr_77591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__77593,p__77594,tx){
var map__77595 = p__77593;
var map__77595__$1 = (((((!((map__77595 == null))))?(((((map__77595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77595):map__77595);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77595__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77595__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__77596 = p__77594;
var map__77596__$1 = (((((!((map__77596 == null))))?(((((map__77596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77596):map__77596);
var env = map__77596__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77596__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_78058){
var state_val_78059 = (state_78058[(1)]);
if((state_val_78059 === (121))){
var inst_78020 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78063_78829 = state_78058__$1;
(statearr_78063_78829[(2)] = inst_78020);

(statearr_78063_78829[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (65))){
var inst_77741 = (state_78058[(7)]);
var inst_77652 = (state_78058[(8)]);
var inst_77709 = (state_78058[(9)]);
var inst_77707 = (state_78058[(10)]);
var inst_77708 = (state_78058[(11)]);
var inst_77710 = (state_78058[(12)]);
var inst_77719 = (state_78058[(13)]);
var inst_77784 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77785 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_77741];
var inst_77786 = cljs.core.PersistentHashMap.fromArrays(inst_77784,inst_77785);
var inst_77787 = com.wsscode.pathom.trace.trace(inst_77652,inst_77786);
var inst_77788 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_77789 = com.wsscode.pathom.parser.watch_pending_key(inst_77652,inst_77741);
var inst_77790 = [inst_77741];
var inst_77791 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_77790);
var inst_77792 = [inst_77789,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_77791];
var inst_77793 = cljs.core.PersistentHashMap.fromArrays(inst_77788,inst_77792);
var inst_77794 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_77709,inst_77793);
var tmp78060 = inst_77708;
var tmp78061 = inst_77710;
var tmp78062 = inst_77707;
var inst_77707__$1 = tmp78062;
var inst_77708__$1 = tmp78060;
var inst_77709__$1 = inst_77794;
var inst_77710__$1 = tmp78061;
var inst_77711 = inst_77719;
var state_78058__$1 = (function (){var statearr_78064 = state_78058;
(statearr_78064[(14)] = inst_77787);

(statearr_78064[(10)] = inst_77707__$1);

(statearr_78064[(11)] = inst_77708__$1);

(statearr_78064[(9)] = inst_77709__$1);

(statearr_78064[(12)] = inst_77710__$1);

(statearr_78064[(15)] = inst_77711);

return statearr_78064;
})();
var statearr_78065_78830 = state_78058__$1;
(statearr_78065_78830[(2)] = null);

(statearr_78065_78830[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (70))){
var inst_77821 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78066_78832 = state_78058__$1;
(statearr_78066_78832[(2)] = inst_77821);

(statearr_78066_78832[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (62))){
var inst_77708 = (state_78058[(11)]);
var inst_77741 = (state_78058[(7)]);
var inst_77779 = cljs.core.contains_QMARK_(inst_77708,inst_77741);
var state_78058__$1 = state_78058;
var statearr_78067_78833 = state_78058__$1;
(statearr_78067_78833[(2)] = inst_77779);

(statearr_78067_78833[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (74))){
var inst_77652 = (state_78058[(8)]);
var inst_77708 = (state_78058[(11)]);
var inst_77657 = (state_78058[(16)]);
var inst_77709 = (state_78058[(9)]);
var inst_77710 = (state_78058[(12)]);
var inst_77646 = (state_78058[(17)]);
var inst_77707 = (state_78058[(10)]);
var inst_77834 = com.wsscode.pathom.parser.process_next_message(inst_77652,tx,inst_77708,inst_77657,inst_77709,inst_77710,inst_77646,inst_77707);
var state_78058__$1 = state_78058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78058__$1,(77),inst_77834);
} else {
if((state_val_78059 === (110))){
var inst_77903 = (state_78058[(18)]);
var inst_77940 = (state_78058[(19)]);
var inst_77957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_77903,inst_77940,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_78058__$1 = state_78058;
var statearr_78069_78836 = state_78058__$1;
(statearr_78069_78836[(2)] = inst_77957);

(statearr_78069_78836[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (130))){
var inst_78047 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78070_78837 = state_78058__$1;
(statearr_78070_78837[(2)] = inst_78047);

(statearr_78070_78837[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (128))){
var inst_77652 = (state_78058[(8)]);
var inst_77904 = (state_78058[(20)]);
var inst_77657 = (state_78058[(16)]);
var inst_77905 = (state_78058[(21)]);
var inst_77906 = (state_78058[(22)]);
var inst_77646 = (state_78058[(17)]);
var inst_77903 = (state_78058[(18)]);
var inst_78032 = com.wsscode.pathom.parser.process_next_message(inst_77652,tx,inst_77904,inst_77657,inst_77905,inst_77906,inst_77646,inst_77903);
var state_78058__$1 = state_78058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78058__$1,(131),inst_78032);
} else {
if((state_val_78059 === (7))){
var inst_77609 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_78058__$1 = state_78058;
var statearr_78076_78840 = state_78058__$1;
(statearr_78076_78840[(2)] = inst_77609);

(statearr_78076_78840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (59))){
var inst_77741 = (state_78058[(7)]);
var inst_77652 = (state_78058[(8)]);
var inst_77707 = (state_78058[(10)]);
var inst_77708 = (state_78058[(11)]);
var inst_77709 = (state_78058[(9)]);
var inst_77710 = (state_78058[(12)]);
var inst_77719 = (state_78058[(13)]);
var inst_77771 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77772 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_77741];
var inst_77773 = cljs.core.PersistentHashMap.fromArrays(inst_77771,inst_77772);
var inst_77774 = com.wsscode.pathom.trace.trace(inst_77652,inst_77773);
var tmp78072 = inst_77708;
var tmp78073 = inst_77709;
var tmp78074 = inst_77710;
var tmp78075 = inst_77707;
var inst_77707__$1 = tmp78075;
var inst_77708__$1 = tmp78072;
var inst_77709__$1 = tmp78073;
var inst_77710__$1 = tmp78074;
var inst_77711 = inst_77719;
var state_78058__$1 = (function (){var statearr_78077 = state_78058;
(statearr_78077[(23)] = inst_77774);

(statearr_78077[(10)] = inst_77707__$1);

(statearr_78077[(11)] = inst_77708__$1);

(statearr_78077[(9)] = inst_77709__$1);

(statearr_78077[(12)] = inst_77710__$1);

(statearr_78077[(15)] = inst_77711);

return statearr_78077;
})();
var statearr_78078_78847 = state_78058__$1;
(statearr_78078_78847[(2)] = null);

(statearr_78078_78847[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (86))){
var inst_77896 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77896)){
var statearr_78079_78848 = state_78058__$1;
(statearr_78079_78848[(1)] = (90));

} else {
var statearr_78080_78852 = state_78058__$1;
(statearr_78080_78852[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (20))){
var inst_77638 = (state_78058[(24)]);
var inst_77640 = (state_78058[(25)]);
var inst_77638__$1 = (state_78058[(2)]);
var inst_77639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_77640__$1 = key_watchers;
var state_78058__$1 = (function (){var statearr_78084 = state_78058;
(statearr_78084[(24)] = inst_77638__$1);

(statearr_78084[(26)] = inst_77639);

(statearr_78084[(25)] = inst_77640__$1);

return statearr_78084;
})();
if(cljs.core.truth_(inst_77640__$1)){
var statearr_78085_78854 = state_78058__$1;
(statearr_78085_78854[(1)] = (21));

} else {
var statearr_78086_78855 = state_78058__$1;
(statearr_78086_78855[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (72))){
var state_78058__$1 = state_78058;
var statearr_78087_78856 = state_78058__$1;
(statearr_78087_78856[(2)] = null);

(statearr_78087_78856[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (58))){
var inst_77708 = (state_78058[(11)]);
var inst_77709 = (state_78058[(9)]);
var inst_77710 = (state_78058[(12)]);
var inst_77719 = (state_78058[(13)]);
var inst_77763 = (state_78058[(2)]);
var tmp78081 = inst_77708;
var tmp78082 = inst_77709;
var tmp78083 = inst_77710;
var inst_77707 = inst_77763;
var inst_77708__$1 = tmp78081;
var inst_77709__$1 = tmp78082;
var inst_77710__$1 = tmp78083;
var inst_77711 = inst_77719;
var state_78058__$1 = (function (){var statearr_78089 = state_78058;
(statearr_78089[(10)] = inst_77707);

(statearr_78089[(11)] = inst_77708__$1);

(statearr_78089[(9)] = inst_77709__$1);

(statearr_78089[(12)] = inst_77710__$1);

(statearr_78089[(15)] = inst_77711);

return statearr_78089;
})();
var statearr_78090_78857 = state_78058__$1;
(statearr_78090_78857[(2)] = null);

(statearr_78090_78857[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (60))){
var inst_77652 = (state_78058[(8)]);
var inst_77777 = (state_78058[(27)]);
var inst_77777__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_77652);
var state_78058__$1 = (function (){var statearr_78091 = state_78058;
(statearr_78091[(27)] = inst_77777__$1);

return statearr_78091;
})();
if(cljs.core.truth_(inst_77777__$1)){
var statearr_78092_78858 = state_78058__$1;
(statearr_78092_78858[(1)] = (62));

} else {
var statearr_78093_78859 = state_78058__$1;
(statearr_78093_78859[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (27))){
var inst_77674 = (state_78058[(28)]);
var state_78058__$1 = state_78058;
var statearr_78094_78860 = state_78058__$1;
(statearr_78094_78860[(2)] = inst_77674);

(statearr_78094_78860[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (1))){
var state_78058__$1 = state_78058;
var statearr_78098_78861 = state_78058__$1;
(statearr_78098_78861[(2)] = null);

(statearr_78098_78861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (69))){
var state_78058__$1 = state_78058;
var statearr_78099_78862 = state_78058__$1;
(statearr_78099_78862[(1)] = (71));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (101))){
var inst_77914 = (state_78058[(29)]);
var inst_77934 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77914);
var state_78058__$1 = state_78058;
var statearr_78101_78863 = state_78058__$1;
(statearr_78101_78863[(2)] = inst_77934);

(statearr_78101_78863[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (24))){
var inst_77616 = (state_78058[(30)]);
var inst_77652 = (state_78058[(8)]);
var inst_77674 = (state_78058[(28)]);
var inst_77660 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_77661 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_77616];
var inst_77662 = cljs.core.PersistentHashMap.fromArrays(inst_77660,inst_77661);
var inst_77663 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_77652,inst_77662);
var inst_77673 = cljs.core.PersistentHashMap.EMPTY;
var inst_77674__$1 = waiting;
var state_78058__$1 = (function (){var statearr_78102 = state_78058;
(statearr_78102[(31)] = inst_77663);

(statearr_78102[(32)] = inst_77673);

(statearr_78102[(28)] = inst_77674__$1);

return statearr_78102;
})();
if(cljs.core.truth_(inst_77674__$1)){
var statearr_78103_78864 = state_78058__$1;
(statearr_78103_78864[(1)] = (27));

} else {
var statearr_78104_78868 = state_78058__$1;
(statearr_78104_78868[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (102))){
var inst_77914 = (state_78058[(29)]);
var state_78058__$1 = state_78058;
var statearr_78105_78869 = state_78058__$1;
(statearr_78105_78869[(2)] = inst_77914);

(statearr_78105_78869[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (55))){
var inst_77827 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78106_78870 = state_78058__$1;
(statearr_78106_78870[(2)] = inst_77827);

(statearr_78106_78870[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (85))){
var state_78058__$1 = state_78058;
var statearr_78107_78874 = state_78058__$1;
(statearr_78107_78874[(2)] = false);

(statearr_78107_78874[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (39))){
var inst_77711 = (state_78058[(15)]);
var inst_77718 = (state_78058[(33)]);
var inst_77717 = cljs.core.seq(inst_77711);
var inst_77718__$1 = cljs.core.first(inst_77717);
var inst_77719 = cljs.core.next(inst_77717);
var inst_77721 = (inst_77718__$1 == null);
var inst_77722 = cljs.core.not(inst_77721);
var state_78058__$1 = (function (){var statearr_78108 = state_78058;
(statearr_78108[(33)] = inst_77718__$1);

(statearr_78108[(13)] = inst_77719);

return statearr_78108;
})();
if(inst_77722){
var statearr_78109_78875 = state_78058__$1;
(statearr_78109_78875[(1)] = (41));

} else {
var statearr_78110_78876 = state_78058__$1;
(statearr_78110_78876[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (88))){
var state_78058__$1 = state_78058;
var statearr_78111_78877 = state_78058__$1;
(statearr_78111_78877[(2)] = false);

(statearr_78111_78877[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (46))){
var inst_77732 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78112_78878 = state_78058__$1;
(statearr_78112_78878[(2)] = inst_77732);

(statearr_78112_78878[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (4))){
var inst_77599 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78113_78879 = state_78058__$1;
(statearr_78113_78879[(2)] = inst_77599);

(statearr_78113_78879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (77))){
var inst_77836 = (state_78058[(2)]);
var inst_77837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77836,(0),null);
var inst_77838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77836,(1),null);
var inst_77839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77836,(2),null);
var inst_77840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77836,(3),null);
var inst_77841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77836,(4),null);
var inst_77707 = inst_77837;
var inst_77708 = inst_77838;
var inst_77709 = inst_77839;
var inst_77710 = inst_77840;
var inst_77711 = inst_77841;
var state_78058__$1 = (function (){var statearr_78117 = state_78058;
(statearr_78117[(10)] = inst_77707);

(statearr_78117[(11)] = inst_77708);

(statearr_78117[(9)] = inst_77709);

(statearr_78117[(12)] = inst_77710);

(statearr_78117[(15)] = inst_77711);

return statearr_78117;
})();
var statearr_78118_78881 = state_78058__$1;
(statearr_78118_78881[(2)] = null);

(statearr_78118_78881[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (106))){
var inst_78049 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78120_78882 = state_78058__$1;
(statearr_78120_78882[(2)] = inst_78049);

(statearr_78120_78882[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (119))){
var inst_77938 = (state_78058[(34)]);
var inst_77652 = (state_78058[(8)]);
var inst_77905 = (state_78058[(21)]);
var inst_77903 = (state_78058[(18)]);
var inst_77904 = (state_78058[(20)]);
var inst_77906 = (state_78058[(22)]);
var inst_77915 = (state_78058[(35)]);
var inst_77981 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77982 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_77938];
var inst_77983 = cljs.core.PersistentHashMap.fromArrays(inst_77981,inst_77982);
var inst_77984 = com.wsscode.pathom.trace.trace(inst_77652,inst_77983);
var inst_77985 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_77986 = com.wsscode.pathom.parser.watch_pending_key(inst_77652,inst_77938);
var inst_77987 = [inst_77938];
var inst_77988 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_77987);
var inst_77989 = [inst_77986,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_77988];
var inst_77990 = cljs.core.PersistentHashMap.fromArrays(inst_77985,inst_77989);
var inst_77991 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_77905,inst_77990);
var tmp78114 = inst_77906;
var tmp78115 = inst_77904;
var tmp78116 = inst_77903;
var inst_77903__$1 = tmp78116;
var inst_77904__$1 = tmp78115;
var inst_77905__$1 = inst_77991;
var inst_77906__$1 = tmp78114;
var inst_77907 = inst_77915;
var state_78058__$1 = (function (){var statearr_78121 = state_78058;
(statearr_78121[(36)] = inst_77984);

(statearr_78121[(18)] = inst_77903__$1);

(statearr_78121[(20)] = inst_77904__$1);

(statearr_78121[(21)] = inst_77905__$1);

(statearr_78121[(22)] = inst_77906__$1);

(statearr_78121[(37)] = inst_77907);

return statearr_78121;
})();
var statearr_78122_78890 = state_78058__$1;
(statearr_78122_78890[(2)] = null);

(statearr_78122_78890[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (95))){
var inst_77914 = (state_78058[(29)]);
var inst_77921 = inst_77914.cljs$lang$protocol_mask$partition0$;
var inst_77922 = (inst_77921 & (64));
var inst_77923 = inst_77914.cljs$core$ISeq$;
var inst_77924 = (cljs.core.PROTOCOL_SENTINEL === inst_77923);
var inst_77925 = ((inst_77922) || (inst_77924));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77925)){
var statearr_78123_78891 = state_78058__$1;
(statearr_78123_78891[(1)] = (98));

} else {
var statearr_78124_78892 = state_78058__$1;
(statearr_78124_78892[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (54))){
var inst_77707 = (state_78058[(10)]);
var inst_77743 = (state_78058[(38)]);
var inst_77766 = cljs.core.contains_QMARK_(inst_77707,inst_77743);
var inst_77767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77707,inst_77743);
var inst_77768 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_77767);
var inst_77769 = ((inst_77766) && (inst_77768));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77769)){
var statearr_78125_78893 = state_78058__$1;
(statearr_78125_78893[(1)] = (59));

} else {
var statearr_78126_78894 = state_78058__$1;
(statearr_78126_78894[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (92))){
var inst_77868 = (state_78058[(39)]);
var inst_77875 = (state_78058[(40)]);
var inst_77876 = (state_78058[(41)]);
var inst_77877 = (state_78058[(42)]);
var inst_77639 = (state_78058[(26)]);
var inst_77901 = (state_78058[(2)]);
var inst_77902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77901,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_77903 = inst_77868;
var inst_77904 = inst_77875;
var inst_77905 = inst_77876;
var inst_77906 = inst_77877;
var inst_77907 = inst_77639;
var state_78058__$1 = (function (){var statearr_78128 = state_78058;
(statearr_78128[(43)] = inst_77902);

(statearr_78128[(18)] = inst_77903);

(statearr_78128[(20)] = inst_77904);

(statearr_78128[(21)] = inst_77905);

(statearr_78128[(22)] = inst_77906);

(statearr_78128[(37)] = inst_77907);

return statearr_78128;
})();
var statearr_78129_78895 = state_78058__$1;
(statearr_78129_78895[(2)] = null);

(statearr_78129_78895[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (104))){
var inst_77937 = (state_78058[(44)]);
var inst_77938 = (state_78058[(34)]);
var inst_77652 = (state_78058[(8)]);
var inst_77906 = (state_78058[(22)]);
var inst_77940 = com.wsscode.pathom.parser.ast__GT_out_key(inst_77937);
var inst_77941 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77942 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_77938];
var inst_77943 = cljs.core.PersistentHashMap.fromArrays(inst_77941,inst_77942);
var inst_77944 = com.wsscode.pathom.trace.trace(inst_77652,inst_77943);
var inst_77945 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_77906,inst_77938,(0));
var inst_77946 = (max_key_iterations - (1));
var inst_77947 = (inst_77945 > inst_77946);
var state_78058__$1 = (function (){var statearr_78130 = state_78058;
(statearr_78130[(19)] = inst_77940);

(statearr_78130[(45)] = inst_77944);

return statearr_78130;
})();
if(cljs.core.truth_(inst_77947)){
var statearr_78131_78896 = state_78058__$1;
(statearr_78131_78896[(1)] = (107));

} else {
var statearr_78132_78897 = state_78058__$1;
(statearr_78132_78897[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (15))){
var state_78058__$1 = state_78058;
var statearr_78133_78898 = state_78058__$1;
(statearr_78133_78898[(2)] = true);

(statearr_78133_78898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (48))){
var inst_77718 = (state_78058[(33)]);
var state_78058__$1 = state_78058;
var statearr_78134_78900 = state_78058__$1;
(statearr_78134_78900[(2)] = inst_77718);

(statearr_78134_78900[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (50))){
var inst_77740 = (state_78058[(46)]);
var inst_77741 = (state_78058[(7)]);
var inst_77652 = (state_78058[(8)]);
var inst_77710 = (state_78058[(12)]);
var inst_77743 = com.wsscode.pathom.parser.ast__GT_out_key(inst_77740);
var inst_77744 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77745 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_77741];
var inst_77746 = cljs.core.PersistentHashMap.fromArrays(inst_77744,inst_77745);
var inst_77747 = com.wsscode.pathom.trace.trace(inst_77652,inst_77746);
var inst_77748 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_77710,inst_77741,(0));
var inst_77749 = (max_key_iterations - (1));
var inst_77750 = (inst_77748 > inst_77749);
var state_78058__$1 = (function (){var statearr_78135 = state_78058;
(statearr_78135[(38)] = inst_77743);

(statearr_78135[(47)] = inst_77747);

return statearr_78135;
})();
if(cljs.core.truth_(inst_77750)){
var statearr_78136_78905 = state_78058__$1;
(statearr_78136_78905[(1)] = (53));

} else {
var statearr_78137_78906 = state_78058__$1;
(statearr_78137_78906[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (116))){
var inst_77904 = (state_78058[(20)]);
var inst_77938 = (state_78058[(34)]);
var inst_77976 = cljs.core.contains_QMARK_(inst_77904,inst_77938);
var state_78058__$1 = state_78058;
var statearr_78138_78907 = state_78058__$1;
(statearr_78138_78907[(2)] = inst_77976);

(statearr_78138_78907[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (75))){
var state_78058__$1 = state_78058;
var statearr_78139_78908 = state_78058__$1;
(statearr_78139_78908[(1)] = (78));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (99))){
var state_78058__$1 = state_78058;
var statearr_78141_78909 = state_78058__$1;
(statearr_78141_78909[(2)] = false);

(statearr_78141_78909[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (21))){
var inst_77640 = (state_78058[(25)]);
var state_78058__$1 = state_78058;
var statearr_78146_78910 = state_78058__$1;
(statearr_78146_78910[(2)] = inst_77640);

(statearr_78146_78910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (31))){
var state_78058__$1 = state_78058;
var statearr_78147_78911 = state_78058__$1;
(statearr_78147_78911[(2)] = false);

(statearr_78147_78911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (113))){
var inst_77938 = (state_78058[(34)]);
var inst_77652 = (state_78058[(8)]);
var inst_77903 = (state_78058[(18)]);
var inst_77904 = (state_78058[(20)]);
var inst_77905 = (state_78058[(21)]);
var inst_77906 = (state_78058[(22)]);
var inst_77915 = (state_78058[(35)]);
var inst_77968 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77969 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_77938];
var inst_77970 = cljs.core.PersistentHashMap.fromArrays(inst_77968,inst_77969);
var inst_77971 = com.wsscode.pathom.trace.trace(inst_77652,inst_77970);
var tmp78142 = inst_77905;
var tmp78143 = inst_77906;
var tmp78144 = inst_77904;
var tmp78145 = inst_77903;
var inst_77903__$1 = tmp78145;
var inst_77904__$1 = tmp78144;
var inst_77905__$1 = tmp78142;
var inst_77906__$1 = tmp78143;
var inst_77907 = inst_77915;
var state_78058__$1 = (function (){var statearr_78148 = state_78058;
(statearr_78148[(48)] = inst_77971);

(statearr_78148[(18)] = inst_77903__$1);

(statearr_78148[(20)] = inst_77904__$1);

(statearr_78148[(21)] = inst_77905__$1);

(statearr_78148[(22)] = inst_77906__$1);

(statearr_78148[(37)] = inst_77907);

return statearr_78148;
})();
var statearr_78149_78916 = state_78058__$1;
(statearr_78149_78916[(2)] = null);

(statearr_78149_78916[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (32))){
var inst_77700 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77700)){
var statearr_78150_78917 = state_78058__$1;
(statearr_78150_78917[(1)] = (36));

} else {
var statearr_78151_78925 = state_78058__$1;
(statearr_78151_78925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (40))){
var inst_77616 = (state_78058[(30)]);
var inst_77652 = (state_78058[(8)]);
var inst_77663 = (state_78058[(31)]);
var inst_77853 = (state_78058[(2)]);
var inst_77854 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_77855 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_77616];
var inst_77856 = cljs.core.PersistentHashMap.fromArrays(inst_77854,inst_77855);
var inst_77857 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_77652,inst_77663,inst_77856);
var state_78058__$1 = (function (){var statearr_78152 = state_78058;
(statearr_78152[(49)] = inst_77857);

return statearr_78152;
})();
var statearr_78153_78929 = state_78058__$1;
(statearr_78153_78929[(2)] = inst_77853);

(statearr_78153_78929[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (129))){
var state_78058__$1 = state_78058;
var statearr_78154_78930 = state_78058__$1;
(statearr_78154_78930[(1)] = (132));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (91))){
var inst_77879 = (state_78058[(50)]);
var state_78058__$1 = state_78058;
var statearr_78156_78931 = state_78058__$1;
(statearr_78156_78931[(2)] = inst_77879);

(statearr_78156_78931[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (117))){
var inst_77974 = (state_78058[(51)]);
var state_78058__$1 = state_78058;
var statearr_78157_78932 = state_78058__$1;
(statearr_78157_78932[(2)] = inst_77974);

(statearr_78157_78932[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (108))){
var inst_77903 = (state_78058[(18)]);
var inst_77940 = (state_78058[(19)]);
var inst_77963 = cljs.core.contains_QMARK_(inst_77903,inst_77940);
var inst_77964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77903,inst_77940);
var inst_77965 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_77964);
var inst_77966 = ((inst_77963) && (inst_77965));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77966)){
var statearr_78158_78933 = state_78058__$1;
(statearr_78158_78933[(1)] = (113));

} else {
var statearr_78159_78934 = state_78058__$1;
(statearr_78159_78934[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (56))){
var inst_77707 = (state_78058[(10)]);
var inst_77743 = (state_78058[(38)]);
var inst_77760 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_77707,inst_77743,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_78058__$1 = state_78058;
var statearr_78160_78935 = state_78058__$1;
(statearr_78160_78935[(2)] = inst_77760);

(statearr_78160_78935[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (33))){
var state_78058__$1 = state_78058;
var statearr_78161_78936 = state_78058__$1;
(statearr_78161_78936[(2)] = true);

(statearr_78161_78936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (13))){
var state_78058__$1 = state_78058;
var statearr_78162_78937 = state_78058__$1;
(statearr_78162_78937[(2)] = false);

(statearr_78162_78937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (22))){
var inst_77643 = cljs.core.PersistentHashMap.EMPTY;
var inst_77644 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_77643);
var state_78058__$1 = state_78058;
var statearr_78163_78938 = state_78058__$1;
(statearr_78163_78938[(2)] = inst_77644);

(statearr_78163_78938[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (90))){
var inst_77879 = (state_78058[(50)]);
var inst_77898 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77879);
var state_78058__$1 = state_78058;
var statearr_78164_78959 = state_78058__$1;
(statearr_78164_78959[(2)] = inst_77898);

(statearr_78164_78959[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (109))){
var inst_78024 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78165_78962 = state_78058__$1;
(statearr_78165_78962[(2)] = inst_78024);

(statearr_78165_78962[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (36))){
var inst_77683 = (state_78058[(52)]);
var inst_77702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77683);
var state_78058__$1 = state_78058;
var statearr_78166_78964 = state_78058__$1;
(statearr_78166_78964[(2)] = inst_77702);

(statearr_78166_78964[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (41))){
var inst_77718 = (state_78058[(33)]);
var inst_77724 = inst_77718.cljs$lang$protocol_mask$partition0$;
var inst_77725 = (inst_77724 & (64));
var inst_77726 = inst_77718.cljs$core$ISeq$;
var inst_77727 = (cljs.core.PROTOCOL_SENTINEL === inst_77726);
var inst_77728 = ((inst_77725) || (inst_77727));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77728)){
var statearr_78167_78973 = state_78058__$1;
(statearr_78167_78973[(1)] = (44));

} else {
var statearr_78168_78974 = state_78058__$1;
(statearr_78168_78974[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (118))){
var inst_77979 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77979)){
var statearr_78169_78975 = state_78058__$1;
(statearr_78169_78975[(1)] = (119));

} else {
var statearr_78170_78976 = state_78058__$1;
(statearr_78170_78976[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (89))){
var inst_77893 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78171_78977 = state_78058__$1;
(statearr_78171_78977[(2)] = inst_77893);

(statearr_78171_78977[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (100))){
var inst_77929 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78176_78978 = state_78058__$1;
(statearr_78176_78978[(2)] = inst_77929);

(statearr_78176_78978[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (131))){
var inst_78034 = (state_78058[(2)]);
var inst_78035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78034,(0),null);
var inst_78036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78034,(1),null);
var inst_78037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78034,(2),null);
var inst_78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78034,(3),null);
var inst_78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78034,(4),null);
var inst_77903 = inst_78035;
var inst_77904 = inst_78036;
var inst_77905 = inst_78037;
var inst_77906 = inst_78038;
var inst_77907 = inst_78039;
var state_78058__$1 = (function (){var statearr_78178 = state_78058;
(statearr_78178[(18)] = inst_77903);

(statearr_78178[(20)] = inst_77904);

(statearr_78178[(21)] = inst_77905);

(statearr_78178[(22)] = inst_77906);

(statearr_78178[(37)] = inst_77907);

return statearr_78178;
})();
var statearr_78179_78979 = state_78058__$1;
(statearr_78179_78979[(2)] = null);

(statearr_78179_78979[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (122))){
var inst_77938 = (state_78058[(34)]);
var inst_77652 = (state_78058[(8)]);
var inst_77903 = (state_78058[(18)]);
var inst_77904 = (state_78058[(20)]);
var inst_77905 = (state_78058[(21)]);
var inst_77906 = (state_78058[(22)]);
var inst_77915 = (state_78058[(35)]);
var inst_77996 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77997 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_77938];
var inst_77998 = cljs.core.PersistentHashMap.fromArrays(inst_77996,inst_77997);
var inst_77999 = com.wsscode.pathom.trace.trace(inst_77652,inst_77998);
var tmp78172 = inst_77905;
var tmp78173 = inst_77906;
var tmp78174 = inst_77904;
var tmp78175 = inst_77903;
var inst_77903__$1 = tmp78175;
var inst_77904__$1 = tmp78174;
var inst_77905__$1 = tmp78172;
var inst_77906__$1 = tmp78173;
var inst_77907 = inst_77915;
var state_78058__$1 = (function (){var statearr_78180 = state_78058;
(statearr_78180[(53)] = inst_77999);

(statearr_78180[(18)] = inst_77903__$1);

(statearr_78180[(20)] = inst_77904__$1);

(statearr_78180[(21)] = inst_77905__$1);

(statearr_78180[(22)] = inst_77906__$1);

(statearr_78180[(37)] = inst_77907);

return statearr_78180;
})();
var statearr_78181_78980 = state_78058__$1;
(statearr_78181_78980[(2)] = null);

(statearr_78181_78980[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (43))){
var inst_77735 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77735)){
var statearr_78182_78981 = state_78058__$1;
(statearr_78182_78981[(1)] = (47));

} else {
var statearr_78183_78982 = state_78058__$1;
(statearr_78183_78982[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (61))){
var inst_77825 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78184_78983 = state_78058__$1;
(statearr_78184_78983[(2)] = inst_77825);

(statearr_78184_78983[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (29))){
var inst_77639 = (state_78058[(26)]);
var inst_77683 = (state_78058[(52)]);
var inst_77679 = (state_78058[(2)]);
var inst_77680 = cljs.core.PersistentHashSet.EMPTY;
var inst_77681 = cljs.core.PersistentHashMap.EMPTY;
var inst_77682 = cljs.core.seq(inst_77639);
var inst_77683__$1 = cljs.core.first(inst_77682);
var inst_77684 = cljs.core.next(inst_77682);
var inst_77686 = (inst_77683__$1 == null);
var inst_77687 = cljs.core.not(inst_77686);
var state_78058__$1 = (function (){var statearr_78185 = state_78058;
(statearr_78185[(54)] = inst_77679);

(statearr_78185[(55)] = inst_77680);

(statearr_78185[(56)] = inst_77681);

(statearr_78185[(52)] = inst_77683__$1);

(statearr_78185[(57)] = inst_77684);

return statearr_78185;
})();
if(inst_77687){
var statearr_78186_78992 = state_78058__$1;
(statearr_78186_78992[(1)] = (30));

} else {
var statearr_78187_78993 = state_78058__$1;
(statearr_78187_78993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (44))){
var state_78058__$1 = state_78058;
var statearr_78188_78994 = state_78058__$1;
(statearr_78188_78994[(2)] = true);

(statearr_78188_78994[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (93))){
var inst_77907 = (state_78058[(37)]);
var inst_77914 = (state_78058[(29)]);
var inst_77913 = cljs.core.seq(inst_77907);
var inst_77914__$1 = cljs.core.first(inst_77913);
var inst_77915 = cljs.core.next(inst_77913);
var inst_77917 = (inst_77914__$1 == null);
var inst_77918 = cljs.core.not(inst_77917);
var state_78058__$1 = (function (){var statearr_78189 = state_78058;
(statearr_78189[(29)] = inst_77914__$1);

(statearr_78189[(35)] = inst_77915);

return statearr_78189;
})();
if(inst_77918){
var statearr_78190_78996 = state_78058__$1;
(statearr_78190_78996[(1)] = (95));

} else {
var statearr_78191_78997 = state_78058__$1;
(statearr_78191_78997[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (6))){
var inst_77606 = (state_78058[(58)]);
var state_78058__$1 = state_78058;
var statearr_78192_78999 = state_78058__$1;
(statearr_78192_78999[(2)] = inst_77606);

(statearr_78192_78999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (111))){
var inst_77903 = (state_78058[(18)]);
var state_78058__$1 = state_78058;
var statearr_78193_79002 = state_78058__$1;
(statearr_78193_79002[(2)] = inst_77903);

(statearr_78193_79002[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (28))){
var inst_77677 = cljs.core.PersistentHashSet.EMPTY;
var state_78058__$1 = state_78058;
var statearr_78194_79004 = state_78058__$1;
(statearr_78194_79004[(2)] = inst_77677);

(statearr_78194_79004[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (134))){
var inst_78045 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78195_79005 = state_78058__$1;
(statearr_78195_79005[(2)] = inst_78045);

(statearr_78195_79005[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (64))){
var inst_77782 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77782)){
var statearr_78196_79006 = state_78058__$1;
(statearr_78196_79006[(1)] = (65));

} else {
var statearr_78197_79007 = state_78058__$1;
(statearr_78197_79007[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (103))){
var inst_77937 = (state_78058[(44)]);
var inst_77937__$1 = (state_78058[(2)]);
var inst_77938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77937__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_78058__$1 = (function (){var statearr_78198 = state_78058;
(statearr_78198[(44)] = inst_77937__$1);

(statearr_78198[(34)] = inst_77938);

return statearr_78198;
})();
if(cljs.core.truth_(inst_77937__$1)){
var statearr_78199_79008 = state_78058__$1;
(statearr_78199_79008[(1)] = (104));

} else {
var statearr_78200_79010 = state_78058__$1;
(statearr_78200_79010[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (51))){
var inst_77709 = (state_78058[(9)]);
var inst_77829 = cljs.core.seq(inst_77709);
var state_78058__$1 = state_78058;
if(inst_77829){
var statearr_78201_79014 = state_78058__$1;
(statearr_78201_79014[(1)] = (74));

} else {
var statearr_78202_79015 = state_78058__$1;
(statearr_78202_79015[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (25))){
var inst_77869 = (state_78058[(59)]);
var inst_77868 = cljs.core.PersistentHashMap.EMPTY;
var inst_77869__$1 = waiting;
var state_78058__$1 = (function (){var statearr_78203 = state_78058;
(statearr_78203[(39)] = inst_77868);

(statearr_78203[(59)] = inst_77869__$1);

return statearr_78203;
})();
if(cljs.core.truth_(inst_77869__$1)){
var statearr_78204_79016 = state_78058__$1;
(statearr_78204_79016[(1)] = (81));

} else {
var statearr_78205_79017 = state_78058__$1;
(statearr_78205_79017[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (34))){
var state_78058__$1 = state_78058;
var statearr_78206_79018 = state_78058__$1;
(statearr_78206_79018[(2)] = false);

(statearr_78206_79018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (125))){
var inst_77906 = (state_78058[(22)]);
var inst_77940 = (state_78058[(19)]);
var inst_77652 = (state_78058[(8)]);
var inst_77937 = (state_78058[(44)]);
var inst_77646 = (state_78058[(17)]);
var inst_77903 = (state_78058[(18)]);
var inst_77904 = (state_78058[(20)]);
var inst_77905 = (state_78058[(21)]);
var inst_77915 = (state_78058[(35)]);
var inst_78006 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_77906,inst_77940,com.wsscode.pathom.parser.zero_inc);
var inst_78007 = com.wsscode.pathom.parser.parallel_process_value(inst_77652,tx,inst_77937,inst_77646,inst_77903,inst_77904,inst_77905,read,mutate,inst_78006,inst_77915);
var inst_78008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78007,(0),null);
var inst_78009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78007,(1),null);
var inst_78010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78007,(2),null);
var inst_78011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78007,(3),null);
var inst_78012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78007,(4),null);
var inst_77903__$1 = inst_78008;
var inst_77904__$1 = inst_78009;
var inst_77905__$1 = inst_78010;
var inst_77906__$1 = inst_78011;
var inst_77907 = inst_78012;
var state_78058__$1 = (function (){var statearr_78208 = state_78058;
(statearr_78208[(18)] = inst_77903__$1);

(statearr_78208[(20)] = inst_77904__$1);

(statearr_78208[(21)] = inst_77905__$1);

(statearr_78208[(22)] = inst_77906__$1);

(statearr_78208[(37)] = inst_77907);

return statearr_78208;
})();
var statearr_78209_79023 = state_78058__$1;
(statearr_78209_79023[(2)] = null);

(statearr_78209_79023[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (17))){
var inst_77630 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78210_79024 = state_78058__$1;
(statearr_78210_79024[(2)] = inst_77630);

(statearr_78210_79024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (3))){
var inst_78056 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78058__$1,inst_78056);
} else {
if((state_val_78059 === (12))){
var inst_77617 = (state_78058[(60)]);
var inst_77622 = inst_77617.cljs$lang$protocol_mask$partition0$;
var inst_77623 = (inst_77622 & (64));
var inst_77624 = inst_77617.cljs$core$ISeq$;
var inst_77625 = (cljs.core.PROTOCOL_SENTINEL === inst_77624);
var inst_77626 = ((inst_77623) || (inst_77625));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77626)){
var statearr_78211_79025 = state_78058__$1;
(statearr_78211_79025[(1)] = (15));

} else {
var statearr_78212_79026 = state_78058__$1;
(statearr_78212_79026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (2))){
var inst_77606 = (state_78058[(58)]);
var _ = (function (){var statearr_78213 = state_78058;
(statearr_78213[(4)] = cljs.core.cons((5),(state_78058[(4)])));

return statearr_78213;
})();
var inst_77606__$1 = key_process_timeout_step;
var state_78058__$1 = (function (){var statearr_78214 = state_78058;
(statearr_78214[(58)] = inst_77606__$1);

return statearr_78214;
})();
if(cljs.core.truth_(inst_77606__$1)){
var statearr_78216_79027 = state_78058__$1;
(statearr_78216_79027[(1)] = (6));

} else {
var statearr_78217_79028 = state_78058__$1;
(statearr_78217_79028[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (66))){
var inst_77708 = (state_78058[(11)]);
var inst_77741 = (state_78058[(7)]);
var inst_77797 = cljs.core.contains_QMARK_(inst_77708,inst_77741);
var state_78058__$1 = state_78058;
if(inst_77797){
var statearr_78218_79029 = state_78058__$1;
(statearr_78218_79029[(1)] = (68));

} else {
var statearr_78219_79030 = state_78058__$1;
(statearr_78219_79030[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (107))){
var inst_77938 = (state_78058[(34)]);
var inst_77652 = (state_78058[(8)]);
var inst_77903 = (state_78058[(18)]);
var inst_77940 = (state_78058[(19)]);
var inst_77949 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_77950 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_77938,max_key_iterations];
var inst_77951 = cljs.core.PersistentHashMap.fromArrays(inst_77949,inst_77950);
var inst_77952 = com.wsscode.pathom.trace.trace(inst_77652,inst_77951);
var inst_77954 = cljs.core.contains_QMARK_(inst_77903,inst_77940);
var inst_77955 = (!(inst_77954));
var state_78058__$1 = (function (){var statearr_78220 = state_78058;
(statearr_78220[(61)] = inst_77952);

return statearr_78220;
})();
if(inst_77955){
var statearr_78221_79059 = state_78058__$1;
(statearr_78221_79059[(1)] = (110));

} else {
var statearr_78222_79060 = state_78058__$1;
(statearr_78222_79060[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (23))){
var inst_77616 = (state_78058[(30)]);
var inst_77611 = (state_78058[(62)]);
var inst_77638 = (state_78058[(24)]);
var inst_77639 = (state_78058[(26)]);
var inst_77646 = (state_78058[(17)]);
var inst_77652 = (state_78058[(8)]);
var inst_77646__$1 = (state_78058[(2)]);
var inst_77647 = cljs.core.deref(entity_path_cache);
var inst_77648 = cljs.core.PersistentHashMap.EMPTY;
var inst_77649 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_77647,path,inst_77648);
var inst_77650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_77616], 0));
var inst_77651 = (function (){var key_process_timeout_step__$1 = inst_77611;
var key_process_timeout__$1 = inst_77616;
var map__77605 = inst_77638;
var children = inst_77639;
var key_watchers__$1 = inst_77646__$1;
var path_entity = inst_77649;
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,(function (p1__77592_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__77592_SHARP_], 0));
}));

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
})();
var inst_77652__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_77650,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_77651);
var inst_77653 = cljs.core.PersistentHashMap.EMPTY;
var inst_77655 = (function (){var key_process_timeout_step__$1 = inst_77611;
var key_process_timeout__$1 = inst_77616;
var map__77605 = inst_77638;
var children = inst_77639;
var key_watchers__$1 = inst_77646__$1;
var path_entity = inst_77649;
var env__$1 = inst_77652__$1;
return (function (p__77654){
var map__78223 = p__77654;
var map__78223__$1 = (((((!((map__78223 == null))))?(((((map__78223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78223):map__78223);
var ast = map__78223__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78223__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
})();
var inst_77656 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_77655);
var inst_77657 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_77653,inst_77656,inst_77639);
var inst_77658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77652__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_78058__$1 = (function (){var statearr_78225 = state_78058;
(statearr_78225[(17)] = inst_77646__$1);

(statearr_78225[(8)] = inst_77652__$1);

(statearr_78225[(16)] = inst_77657);

return statearr_78225;
})();
if(cljs.core.truth_(inst_77658)){
var statearr_78226_79062 = state_78058__$1;
(statearr_78226_79062[(1)] = (24));

} else {
var statearr_78227_79063 = state_78058__$1;
(statearr_78227_79063[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (47))){
var inst_77718 = (state_78058[(33)]);
var inst_77737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77718);
var state_78058__$1 = state_78058;
var statearr_78228_79065 = state_78058__$1;
(statearr_78228_79065[(2)] = inst_77737);

(statearr_78228_79065[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (35))){
var inst_77697 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78229_79067 = state_78058__$1;
(statearr_78229_79067[(2)] = inst_77697);

(statearr_78229_79067[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (127))){
var inst_78016 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78230_79070 = state_78058__$1;
(statearr_78230_79070[(2)] = inst_78016);

(statearr_78230_79070[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (82))){
var inst_77873 = cljs.core.PersistentHashSet.EMPTY;
var state_78058__$1 = state_78058;
var statearr_78231_79085 = state_78058__$1;
(statearr_78231_79085[(2)] = inst_77873);

(statearr_78231_79085[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (76))){
var inst_77849 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78232_79086 = state_78058__$1;
(statearr_78232_79086[(2)] = inst_77849);

(statearr_78232_79086[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (97))){
var inst_77932 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77932)){
var statearr_78233_79087 = state_78058__$1;
(statearr_78233_79087[(1)] = (101));

} else {
var statearr_78234_79088 = state_78058__$1;
(statearr_78234_79088[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (19))){
var inst_77617 = (state_78058[(60)]);
var state_78058__$1 = state_78058;
var statearr_78239_79089 = state_78058__$1;
(statearr_78239_79089[(2)] = inst_77617);

(statearr_78239_79089[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (57))){
var inst_77707 = (state_78058[(10)]);
var state_78058__$1 = state_78058;
var statearr_78240_79090 = state_78058__$1;
(statearr_78240_79090[(2)] = inst_77707);

(statearr_78240_79090[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (68))){
var inst_77741 = (state_78058[(7)]);
var inst_77652 = (state_78058[(8)]);
var inst_77707 = (state_78058[(10)]);
var inst_77708 = (state_78058[(11)]);
var inst_77709 = (state_78058[(9)]);
var inst_77710 = (state_78058[(12)]);
var inst_77719 = (state_78058[(13)]);
var inst_77799 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_77800 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_77741];
var inst_77801 = cljs.core.PersistentHashMap.fromArrays(inst_77799,inst_77800);
var inst_77802 = com.wsscode.pathom.trace.trace(inst_77652,inst_77801);
var tmp78235 = inst_77708;
var tmp78236 = inst_77709;
var tmp78237 = inst_77710;
var tmp78238 = inst_77707;
var inst_77707__$1 = tmp78238;
var inst_77708__$1 = tmp78235;
var inst_77709__$1 = tmp78236;
var inst_77710__$1 = tmp78237;
var inst_77711 = inst_77719;
var state_78058__$1 = (function (){var statearr_78241 = state_78058;
(statearr_78241[(63)] = inst_77802);

(statearr_78241[(10)] = inst_77707__$1);

(statearr_78241[(11)] = inst_77708__$1);

(statearr_78241[(9)] = inst_77709__$1);

(statearr_78241[(12)] = inst_77710__$1);

(statearr_78241[(15)] = inst_77711);

return statearr_78241;
})();
var statearr_78242_79092 = state_78058__$1;
(statearr_78242_79092[(2)] = null);

(statearr_78242_79092[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (11))){
var inst_77617 = (state_78058[(60)]);
var inst_77616 = (state_78058[(2)]);
var inst_77617__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_77619 = (inst_77617__$1 == null);
var inst_77620 = cljs.core.not(inst_77619);
var state_78058__$1 = (function (){var statearr_78243 = state_78058;
(statearr_78243[(30)] = inst_77616);

(statearr_78243[(60)] = inst_77617__$1);

return statearr_78243;
})();
if(inst_77620){
var statearr_78244_79094 = state_78058__$1;
(statearr_78244_79094[(1)] = (12));

} else {
var statearr_78245_79095 = state_78058__$1;
(statearr_78245_79095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (115))){
var inst_78022 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78247_79096 = state_78058__$1;
(statearr_78247_79096[(2)] = inst_78022);

(statearr_78247_79096[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (9))){
var inst_77611 = (state_78058[(62)]);
var inst_77613 = (inst_77611.cljs$core$IFn$_invoke$arity$2 ? inst_77611.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_77611.call(null,env,key_process_timeout));
var state_78058__$1 = state_78058;
var statearr_78251_79111 = state_78058__$1;
(statearr_78251_79111[(2)] = inst_77613);

(statearr_78251_79111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (5))){
var _ = (function (){var statearr_78252 = state_78058;
(statearr_78252[(4)] = cljs.core.rest((state_78058[(4)])));

return statearr_78252;
})();
var state_78058__$1 = state_78058;
var ex78246 = (state_78058__$1[(2)]);
var statearr_78253_79114 = state_78058__$1;
(statearr_78253_79114[(5)] = ex78246);


var statearr_78254_79123 = state_78058__$1;
(statearr_78254_79123[(1)] = (4));

(statearr_78254_79123[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (112))){
var inst_77904 = (state_78058[(20)]);
var inst_77905 = (state_78058[(21)]);
var inst_77906 = (state_78058[(22)]);
var inst_77915 = (state_78058[(35)]);
var inst_77960 = (state_78058[(2)]);
var tmp78248 = inst_77905;
var tmp78249 = inst_77906;
var tmp78250 = inst_77904;
var inst_77903 = inst_77960;
var inst_77904__$1 = tmp78250;
var inst_77905__$1 = tmp78248;
var inst_77906__$1 = tmp78249;
var inst_77907 = inst_77915;
var state_78058__$1 = (function (){var statearr_78255 = state_78058;
(statearr_78255[(18)] = inst_77903);

(statearr_78255[(20)] = inst_77904__$1);

(statearr_78255[(21)] = inst_77905__$1);

(statearr_78255[(22)] = inst_77906__$1);

(statearr_78255[(37)] = inst_77907);

return statearr_78255;
})();
var statearr_78256_79124 = state_78058__$1;
(statearr_78256_79124[(2)] = null);

(statearr_78256_79124[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (83))){
var inst_77639 = (state_78058[(26)]);
var inst_77879 = (state_78058[(50)]);
var inst_77875 = (state_78058[(2)]);
var inst_77876 = cljs.core.PersistentHashSet.EMPTY;
var inst_77877 = cljs.core.PersistentHashMap.EMPTY;
var inst_77878 = cljs.core.seq(inst_77639);
var inst_77879__$1 = cljs.core.first(inst_77878);
var inst_77880 = cljs.core.next(inst_77878);
var inst_77882 = (inst_77879__$1 == null);
var inst_77883 = cljs.core.not(inst_77882);
var state_78058__$1 = (function (){var statearr_78257 = state_78058;
(statearr_78257[(40)] = inst_77875);

(statearr_78257[(41)] = inst_77876);

(statearr_78257[(42)] = inst_77877);

(statearr_78257[(50)] = inst_77879__$1);

(statearr_78257[(64)] = inst_77880);

return statearr_78257;
})();
if(inst_77883){
var statearr_78258_79125 = state_78058__$1;
(statearr_78258_79125[(1)] = (84));

} else {
var statearr_78259_79126 = state_78058__$1;
(statearr_78259_79126[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (14))){
var inst_77633 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77633)){
var statearr_78260_79127 = state_78058__$1;
(statearr_78260_79127[(1)] = (18));

} else {
var statearr_78261_79128 = state_78058__$1;
(statearr_78261_79128[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (45))){
var state_78058__$1 = state_78058;
var statearr_78262_79129 = state_78058__$1;
(statearr_78262_79129[(2)] = false);

(statearr_78262_79129[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (53))){
var inst_77741 = (state_78058[(7)]);
var inst_77652 = (state_78058[(8)]);
var inst_77707 = (state_78058[(10)]);
var inst_77743 = (state_78058[(38)]);
var inst_77752 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_77753 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_77741,max_key_iterations];
var inst_77754 = cljs.core.PersistentHashMap.fromArrays(inst_77752,inst_77753);
var inst_77755 = com.wsscode.pathom.trace.trace(inst_77652,inst_77754);
var inst_77757 = cljs.core.contains_QMARK_(inst_77707,inst_77743);
var inst_77758 = (!(inst_77757));
var state_78058__$1 = (function (){var statearr_78263 = state_78058;
(statearr_78263[(65)] = inst_77755);

return statearr_78263;
})();
if(inst_77758){
var statearr_78264_79133 = state_78058__$1;
(statearr_78264_79133[(1)] = (56));

} else {
var statearr_78265_79135 = state_78058__$1;
(statearr_78265_79135[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (78))){
var inst_77707 = (state_78058[(10)]);
var state_78058__$1 = state_78058;
var statearr_78266_79137 = state_78058__$1;
(statearr_78266_79137[(2)] = inst_77707);

(statearr_78266_79137[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (132))){
var inst_77903 = (state_78058[(18)]);
var state_78058__$1 = state_78058;
var statearr_78267_79138 = state_78058__$1;
(statearr_78267_79138[(2)] = inst_77903);

(statearr_78267_79138[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (26))){
var inst_78053 = (state_78058[(2)]);
var _ = (function (){var statearr_78268 = state_78058;
(statearr_78268[(4)] = cljs.core.rest((state_78058[(4)])));

return statearr_78268;
})();
var state_78058__$1 = state_78058;
var statearr_78269_79168 = state_78058__$1;
(statearr_78269_79168[(2)] = inst_78053);

(statearr_78269_79168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (123))){
var state_78058__$1 = state_78058;
var statearr_78270_79169 = state_78058__$1;
(statearr_78270_79169[(1)] = (125));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (16))){
var state_78058__$1 = state_78058;
var statearr_78272_79170 = state_78058__$1;
(statearr_78272_79170[(2)] = false);

(statearr_78272_79170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (133))){
var state_78058__$1 = state_78058;
var statearr_78273_79171 = state_78058__$1;
(statearr_78273_79171[(2)] = null);

(statearr_78273_79171[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (81))){
var inst_77869 = (state_78058[(59)]);
var state_78058__$1 = state_78058;
var statearr_78274_79172 = state_78058__$1;
(statearr_78274_79172[(2)] = inst_77869);

(statearr_78274_79172[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (120))){
var inst_77904 = (state_78058[(20)]);
var inst_77938 = (state_78058[(34)]);
var inst_77994 = cljs.core.contains_QMARK_(inst_77904,inst_77938);
var state_78058__$1 = state_78058;
if(inst_77994){
var statearr_78275_79173 = state_78058__$1;
(statearr_78275_79173[(1)] = (122));

} else {
var statearr_78276_79174 = state_78058__$1;
(statearr_78276_79174[(1)] = (123));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (79))){
var state_78058__$1 = state_78058;
var statearr_78277_79175 = state_78058__$1;
(statearr_78277_79175[(2)] = null);

(statearr_78277_79175[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (38))){
var inst_77673 = (state_78058[(32)]);
var inst_77679 = (state_78058[(54)]);
var inst_77680 = (state_78058[(55)]);
var inst_77681 = (state_78058[(56)]);
var inst_77639 = (state_78058[(26)]);
var inst_77705 = (state_78058[(2)]);
var inst_77706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77705,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_77707 = inst_77673;
var inst_77708 = inst_77679;
var inst_77709 = inst_77680;
var inst_77710 = inst_77681;
var inst_77711 = inst_77639;
var state_78058__$1 = (function (){var statearr_78278 = state_78058;
(statearr_78278[(66)] = inst_77706);

(statearr_78278[(10)] = inst_77707);

(statearr_78278[(11)] = inst_77708);

(statearr_78278[(9)] = inst_77709);

(statearr_78278[(12)] = inst_77710);

(statearr_78278[(15)] = inst_77711);

return statearr_78278;
})();
var statearr_78279_79181 = state_78058__$1;
(statearr_78279_79181[(2)] = null);

(statearr_78279_79181[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (126))){
var state_78058__$1 = state_78058;
var statearr_78280_79183 = state_78058__$1;
(statearr_78280_79183[(2)] = null);

(statearr_78280_79183[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (98))){
var state_78058__$1 = state_78058;
var statearr_78281_79185 = state_78058__$1;
(statearr_78281_79185[(2)] = true);

(statearr_78281_79185[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (124))){
var inst_78018 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78282_79188 = state_78058__$1;
(statearr_78282_79188[(2)] = inst_78018);

(statearr_78282_79188[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (87))){
var state_78058__$1 = state_78058;
var statearr_78283_79189 = state_78058__$1;
(statearr_78283_79189[(2)] = true);

(statearr_78283_79189[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (30))){
var inst_77683 = (state_78058[(52)]);
var inst_77689 = inst_77683.cljs$lang$protocol_mask$partition0$;
var inst_77690 = (inst_77689 & (64));
var inst_77691 = inst_77683.cljs$core$ISeq$;
var inst_77692 = (cljs.core.PROTOCOL_SENTINEL === inst_77691);
var inst_77693 = ((inst_77690) || (inst_77692));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77693)){
var statearr_78284_79192 = state_78058__$1;
(statearr_78284_79192[(1)] = (33));

} else {
var statearr_78285_79193 = state_78058__$1;
(statearr_78285_79193[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (73))){
var inst_77819 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78286_79202 = state_78058__$1;
(statearr_78286_79202[(2)] = inst_77819);

(statearr_78286_79202[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (96))){
var state_78058__$1 = state_78058;
var statearr_78287_79203 = state_78058__$1;
(statearr_78287_79203[(2)] = false);

(statearr_78287_79203[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (10))){
var state_78058__$1 = state_78058;
var statearr_78288_79204 = state_78058__$1;
(statearr_78288_79204[(2)] = null);

(statearr_78288_79204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (18))){
var inst_77617 = (state_78058[(60)]);
var inst_77635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77617);
var state_78058__$1 = state_78058;
var statearr_78289_79205 = state_78058__$1;
(statearr_78289_79205[(2)] = inst_77635);

(statearr_78289_79205[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (105))){
var inst_77905 = (state_78058[(21)]);
var inst_78026 = cljs.core.seq(inst_77905);
var state_78058__$1 = state_78058;
if(inst_78026){
var statearr_78290_79206 = state_78058__$1;
(statearr_78290_79206[(1)] = (128));

} else {
var statearr_78291_79207 = state_78058__$1;
(statearr_78291_79207[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (52))){
var inst_77851 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78292_79208 = state_78058__$1;
(statearr_78292_79208[(2)] = inst_77851);

(statearr_78292_79208[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (114))){
var inst_77652 = (state_78058[(8)]);
var inst_77974 = (state_78058[(51)]);
var inst_77974__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_77652);
var state_78058__$1 = (function (){var statearr_78293 = state_78058;
(statearr_78293[(51)] = inst_77974__$1);

return statearr_78293;
})();
if(cljs.core.truth_(inst_77974__$1)){
var statearr_78294_79209 = state_78058__$1;
(statearr_78294_79209[(1)] = (116));

} else {
var statearr_78295_79210 = state_78058__$1;
(statearr_78295_79210[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (67))){
var inst_77823 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78296_79211 = state_78058__$1;
(statearr_78296_79211[(2)] = inst_77823);

(statearr_78296_79211[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (71))){
var inst_77710 = (state_78058[(12)]);
var inst_77743 = (state_78058[(38)]);
var inst_77652 = (state_78058[(8)]);
var inst_77740 = (state_78058[(46)]);
var inst_77646 = (state_78058[(17)]);
var inst_77707 = (state_78058[(10)]);
var inst_77708 = (state_78058[(11)]);
var inst_77709 = (state_78058[(9)]);
var inst_77719 = (state_78058[(13)]);
var inst_77809 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_77710,inst_77743,com.wsscode.pathom.parser.zero_inc);
var inst_77810 = com.wsscode.pathom.parser.parallel_process_value(inst_77652,tx,inst_77740,inst_77646,inst_77707,inst_77708,inst_77709,read,mutate,inst_77809,inst_77719);
var inst_77811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77810,(0),null);
var inst_77812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77810,(1),null);
var inst_77813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77810,(2),null);
var inst_77814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77810,(3),null);
var inst_77815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_77810,(4),null);
var inst_77707__$1 = inst_77811;
var inst_77708__$1 = inst_77812;
var inst_77709__$1 = inst_77813;
var inst_77710__$1 = inst_77814;
var inst_77711 = inst_77815;
var state_78058__$1 = (function (){var statearr_78297 = state_78058;
(statearr_78297[(10)] = inst_77707__$1);

(statearr_78297[(11)] = inst_77708__$1);

(statearr_78297[(9)] = inst_77709__$1);

(statearr_78297[(12)] = inst_77710__$1);

(statearr_78297[(15)] = inst_77711);

return statearr_78297;
})();
var statearr_78298_79228 = state_78058__$1;
(statearr_78298_79228[(2)] = null);

(statearr_78298_79228[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (42))){
var state_78058__$1 = state_78058;
var statearr_78299_79243 = state_78058__$1;
(statearr_78299_79243[(2)] = false);

(statearr_78299_79243[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (80))){
var inst_77847 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78300_79246 = state_78058__$1;
(statearr_78300_79246[(2)] = inst_77847);

(statearr_78300_79246[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (37))){
var inst_77683 = (state_78058[(52)]);
var state_78058__$1 = state_78058;
var statearr_78301_79255 = state_78058__$1;
(statearr_78301_79255[(2)] = inst_77683);

(statearr_78301_79255[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (63))){
var inst_77777 = (state_78058[(27)]);
var state_78058__$1 = state_78058;
var statearr_78302_79256 = state_78058__$1;
(statearr_78302_79256[(2)] = inst_77777);

(statearr_78302_79256[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (94))){
var inst_78051 = (state_78058[(2)]);
var state_78058__$1 = state_78058;
var statearr_78303_79257 = state_78058__$1;
(statearr_78303_79257[(2)] = inst_78051);

(statearr_78303_79257[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (8))){
var inst_77611 = (state_78058[(2)]);
var state_78058__$1 = (function (){var statearr_78304 = state_78058;
(statearr_78304[(62)] = inst_77611);

return statearr_78304;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_78305_79258 = state_78058__$1;
(statearr_78305_79258[(1)] = (9));

} else {
var statearr_78306_79259 = state_78058__$1;
(statearr_78306_79259[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (49))){
var inst_77740 = (state_78058[(46)]);
var inst_77740__$1 = (state_78058[(2)]);
var inst_77741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77740__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_78058__$1 = (function (){var statearr_78307 = state_78058;
(statearr_78307[(46)] = inst_77740__$1);

(statearr_78307[(7)] = inst_77741);

return statearr_78307;
})();
if(cljs.core.truth_(inst_77740__$1)){
var statearr_78308_79260 = state_78058__$1;
(statearr_78308_79260[(1)] = (50));

} else {
var statearr_78309_79261 = state_78058__$1;
(statearr_78309_79261[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78059 === (84))){
var inst_77879 = (state_78058[(50)]);
var inst_77885 = inst_77879.cljs$lang$protocol_mask$partition0$;
var inst_77886 = (inst_77885 & (64));
var inst_77887 = inst_77879.cljs$core$ISeq$;
var inst_77888 = (cljs.core.PROTOCOL_SENTINEL === inst_77887);
var inst_77889 = ((inst_77886) || (inst_77888));
var state_78058__$1 = state_78058;
if(cljs.core.truth_(inst_77889)){
var statearr_78310_79264 = state_78058__$1;
(statearr_78310_79264[(1)] = (87));

} else {
var statearr_78311_79266 = state_78058__$1;
(statearr_78311_79266[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto____0 = (function (){
var statearr_78312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78312[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto__);

(statearr_78312[(1)] = (1));

return statearr_78312;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto____1 = (function (state_78058){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_78058);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e78313){var ex__50860__auto__ = e78313;
var statearr_78314_79272 = state_78058;
(statearr_78314_79272[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_78058[(4)]))){
var statearr_78315_79274 = state_78058;
(statearr_78315_79274[(1)] = cljs.core.first((state_78058[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79277 = state_78058;
state_78058 = G__79277;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto__ = function(state_78058){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto____1.call(this,state_78058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_78316 = f__50893__auto__();
(statearr_78316[(6)] = c__50892__auto__);

return statearr_78316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__78317){
var map__78318 = p__78317;
var map__78318__$1 = (((((!((map__78318 == null))))?(((((map__78318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78318):map__78318);
var pconfig = map__78318__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78318__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__78320,tx){
var map__78321 = p__78320;
var map__78321__$1 = (((((!((map__78321 == null))))?(((((map__78321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78321):map__78321);
var env = map__78321__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78321__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78321__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78321__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_78369){
var state_val_78370 = (state_78369[(1)]);
if((state_val_78370 === (7))){
var inst_78338 = (state_78369[(7)]);
var state_78369__$1 = state_78369;
var statearr_78371_79295 = state_78369__$1;
(statearr_78371_79295[(2)] = inst_78338);

(statearr_78371_79295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (1))){
var state_78369__$1 = state_78369;
var statearr_78372_79296 = state_78369__$1;
(statearr_78372_79296[(2)] = null);

(statearr_78372_79296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (4))){
var inst_78323 = (state_78369[(2)]);
var state_78369__$1 = state_78369;
var statearr_78373_79297 = state_78369__$1;
(statearr_78373_79297[(2)] = inst_78323);

(statearr_78373_79297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (6))){
var inst_78338 = (state_78369[(7)]);
var inst_78340 = cljs.core.async.timeout(key_process_timeout);
var inst_78341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_78338,inst_78340);
var state_78369__$1 = state_78369;
var statearr_78374_79298 = state_78369__$1;
(statearr_78374_79298[(2)] = inst_78341);

(statearr_78374_79298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (3))){
var inst_78367 = (state_78369[(2)]);
var state_78369__$1 = state_78369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78369__$1,inst_78367);
} else {
if((state_val_78370 === (12))){
var inst_78364 = (state_78369[(2)]);
var _ = (function (){var statearr_78375 = state_78369;
(statearr_78375[(4)] = cljs.core.rest((state_78369[(4)])));

return statearr_78375;
})();
var state_78369__$1 = state_78369;
var statearr_78376_79299 = state_78369__$1;
(statearr_78376_79299[(2)] = inst_78364);

(statearr_78376_79299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (2))){
var inst_78334 = (state_78369[(8)]);
var _ = (function (){var statearr_78377 = state_78369;
(statearr_78377[(4)] = cljs.core.cons((5),(state_78369[(4)])));

return statearr_78377;
})();
var inst_78329 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_78333 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], 0));
var inst_78334__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_78333,tx);
var inst_78336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78337 = [inst_78334__$1];
var inst_78338 = (new cljs.core.PersistentVector(null,1,(5),inst_78336,inst_78337,null));
var state_78369__$1 = (function (){var statearr_78378 = state_78369;
(statearr_78378[(9)] = inst_78329);

(statearr_78378[(8)] = inst_78334__$1);

(statearr_78378[(7)] = inst_78338);

return statearr_78378;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_78379_79303 = state_78369__$1;
(statearr_78379_79303[(1)] = (6));

} else {
var statearr_78380_79304 = state_78369__$1;
(statearr_78380_79304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (11))){
var inst_78353 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_78354 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_78355 = cljs.core.PersistentHashMap.fromArrays(inst_78353,inst_78354);
var inst_78356 = com.wsscode.pathom.trace.trace(env,inst_78355);
var inst_78357 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_78358 = [key_process_timeout];
var inst_78359 = cljs.core.PersistentHashMap.fromArrays(inst_78357,inst_78358);
var inst_78360 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_78359);
var inst_78361 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_78360) : add_error.call(null,env,inst_78360));
var inst_78362 = cljs.core.PersistentHashMap.EMPTY;
var state_78369__$1 = (function (){var statearr_78382 = state_78369;
(statearr_78382[(10)] = inst_78356);

(statearr_78382[(11)] = inst_78361);

return statearr_78382;
})();
var statearr_78383_79316 = state_78369__$1;
(statearr_78383_79316[(2)] = inst_78362);

(statearr_78383_79316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (9))){
var inst_78334 = (state_78369[(8)]);
var inst_78346 = (state_78369[(2)]);
var inst_78347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78346,(0),null);
var inst_78348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78346,(1),null);
var inst_78349 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_78350 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78334,inst_78348);
var state_78369__$1 = (function (){var statearr_78384 = state_78369;
(statearr_78384[(12)] = inst_78347);

(statearr_78384[(13)] = inst_78349);

return statearr_78384;
})();
if(inst_78350){
var statearr_78385_79317 = state_78369__$1;
(statearr_78385_79317[(1)] = (10));

} else {
var statearr_78386_79318 = state_78369__$1;
(statearr_78386_79318[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (5))){
var _ = (function (){var statearr_78387 = state_78369;
(statearr_78387[(4)] = cljs.core.rest((state_78369[(4)])));

return statearr_78387;
})();
var state_78369__$1 = state_78369;
var ex78381 = (state_78369__$1[(2)]);
var statearr_78388_79322 = state_78369__$1;
(statearr_78388_79322[(5)] = ex78381);


var statearr_78389_79323 = state_78369__$1;
(statearr_78389_79323[(1)] = (4));

(statearr_78389_79323[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (10))){
var inst_78347 = (state_78369[(12)]);
var state_78369__$1 = state_78369;
var statearr_78390_79324 = state_78369__$1;
(statearr_78390_79324[(2)] = inst_78347);

(statearr_78390_79324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78370 === (8))){
var inst_78344 = (state_78369[(2)]);
var state_78369__$1 = state_78369;
return cljs.core.async.ioc_alts_BANG_(state_78369__$1,(9),inst_78344);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto____0 = (function (){
var statearr_78391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78391[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto__);

(statearr_78391[(1)] = (1));

return statearr_78391;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto____1 = (function (state_78369){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_78369);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e78392){var ex__50860__auto__ = e78392;
var statearr_78393_79325 = state_78369;
(statearr_78393_79325[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_78369[(4)]))){
var statearr_78394_79326 = state_78369;
(statearr_78394_79326[(1)] = cljs.core.first((state_78369[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79329 = state_78369;
state_78369 = G__79329;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto__ = function(state_78369){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto____1.call(this,state_78369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_78395 = f__50893__auto__();
(statearr_78395[(6)] = c__50892__auto__);

return statearr_78395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
