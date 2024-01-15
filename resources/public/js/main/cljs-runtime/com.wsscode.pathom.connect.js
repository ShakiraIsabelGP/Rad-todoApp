goog.provide('com.wsscode.pathom.connect');

com.wsscode.pathom.connect.atom_with = (function com$wsscode$pathom$connect$atom_with(spec){
return cljs.spec.alpha.with_gen(com.wsscode.pathom.core.atom_QMARK_,(function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.atom,cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(spec)], 0));
}));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81613){
return cljs.core.set_QMARK_(G__81613);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81614){
return cljs.core.map_QMARK_(G__81614);
})], null),(function (G__81614){
return cljs.core.map_QMARK_(G__81614);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81615){
return cljs.core.map_QMARK_(G__81615);
})], null),(function (G__81615){
return cljs.core.map_QMARK_(G__81615);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81616){
return cljs.core.map_QMARK_(G__81616);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81617){
return ((cljs.core.vector_QMARK_(G__81617)) && (((((function (){var or__4126__auto__ = (1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__81617))) && ((cljs.core.bounded_count((1)
,G__81617) <= (function (){var or__4126__auto__ = null;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81618){
return cljs.core.map_QMARK_(G__81618);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81619){
return cljs.core.map_QMARK_(G__81619);
}),(function (G__81619){
return cljs.core.contains_QMARK_(G__81619,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__81619){
return ((cljs.core.map_QMARK_(G__81619)) && (cljs.core.contains_QMARK_(G__81619,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81622){
return cljs.core.map_QMARK_(G__81622);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81623){
return cljs.core.map_QMARK_(G__81623);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81624){
return cljs.core.map_QMARK_(G__81624);
}),(function (G__81624){
return cljs.core.contains_QMARK_(G__81624,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__81624){
return ((cljs.core.map_QMARK_(G__81624)) && (cljs.core.contains_QMARK_(G__81624,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81625){
return cljs.core.map_QMARK_(G__81625);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81626){
return cljs.core.map_QMARK_(G__81626);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81628){
return cljs.core.set_QMARK_(G__81628);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81627){
return cljs.core.map_QMARK_(G__81627);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81629){
return cljs.core.map_QMARK_(G__81629);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81631){
return cljs.core.map_QMARK_(G__81631);
})], null),(function (G__81631){
return cljs.core.map_QMARK_(G__81631);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81635){
return cljs.core.set_QMARK_(G__81635);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81636){
return cljs.core.coll_QMARK_(G__81636);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81637){
return cljs.core.map_QMARK_(G__81637);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81638){
return ((cljs.core.vector_QMARK_(G__81638)) && (((((function (){var or__4126__auto__ = (2);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__81638))) && ((cljs.core.bounded_count((2)
,G__81638) <= (function (){var or__4126__auto__ = null;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81639){
return cljs.core.map_QMARK_(G__81639);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81640){
return cljs.core.set_QMARK_(G__81640);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81641){
return cljs.core.map_QMARK_(G__81641);
})], null),(function (G__81641){
return cljs.core.map_QMARK_(G__81641);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81642){
return cljs.core.map_QMARK_(G__81642);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81643){
return cljs.core.map_QMARK_(G__81643);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__19036__auto__,v__19037__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__19037__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81644){
return cljs.core.map_QMARK_(G__81644);
}),(function (G__81644){
return cljs.core.contains_QMARK_(G__81644,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__81644){
return cljs.core.contains_QMARK_(G__81644,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__81644){
return ((cljs.core.map_QMARK_(G__81644)) && (cljs.core.contains_QMARK_(G__81644,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__81644,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__81645){
return cljs.core.map_QMARK_(G__81645);
}),(function (G__81645){
return cljs.core.contains_QMARK_(G__81645,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__81645){
return ((cljs.core.map_QMARK_(G__81645)) && (cljs.core.contains_QMARK_(G__81645,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81646){
return cljs.core.coll_QMARK_(G__81646);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81647){
return cljs.core.coll_QMARK_(G__81647);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81648){
return cljs.core.coll_QMARK_(G__81648);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__81649){
return cljs.core.set_QMARK_(G__81649);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
com.wsscode.pathom.connect.resolver_data = com.wsscode.pathom.connect.indexes.resolver_data;
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__81650 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__81650);
} else {
return G__81650;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
});
com.wsscode.pathom.connect.flat_query = (function com$wsscode$pathom$connect$flat_query(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.flat_query,cljs.core.vals(query)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.merge_io_attrs = com.wsscode.pathom.connect.indexes.merge_io_attrs;
com.wsscode.pathom.connect.normalize_io = com.wsscode.pathom.connect.indexes.normalize_io;
com.wsscode.pathom.connect.merge_io = com.wsscode.pathom.connect.indexes.merge_io;
com.wsscode.pathom.connect.merge_oir = com.wsscode.pathom.connect.indexes.merge_oir;
com.wsscode.pathom.connect.merge_grow = (function com$wsscode$pathom$connect$merge_grow(a,b){
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_grow,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if((b == null)){
return a;
} else {
return b;

}
}
}
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.connect !== 'undefined') && (typeof com.wsscode.pathom.connect.index_merger !== 'undefined')){
} else {
/**
 * This is an extensible gateway so you can define different strategies for merging different
 *   kinds of indexes.
 */
com.wsscode.pathom.connect.index_merger = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__81651 = cljs.core.get_global_hierarchy;
return (fexpr__81651.cljs$core$IFn$_invoke$arity$0 ? fexpr__81651.cljs$core$IFn$_invoke$arity$0() : fexpr__81651.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.connect","index-merger"),(function (k,_,___$1){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),(function (_,ia,ib){
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(ia,ib) : com.wsscode.pathom.connect.merge_io.call(null,ia,ib));
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),(function (_,ia,ib){
return (com.wsscode.pathom.connect.merge_oir.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_oir.cljs$core$IFn$_invoke$arity$2(ia,ib) : com.wsscode.pathom.connect.merge_oir.call(null,ia,ib));
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.merge_indexes = (function com$wsscode$pathom$connect$merge_indexes(ia,ib){
return cljs.core.reduce_kv((function (idx,k,v){
if(cljs.core.contains_QMARK_(idx,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__81652_SHARP_){
return com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__81652_SHARP_,v);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__81655){
var map__81656 = p__81655;
var map__81656__$1 = (((((!((map__81656 == null))))?(((((map__81656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81656):map__81656);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81656__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__81658 = children;
var G__81658__$1 = (((G__81658 == null))?null:cljs.core.first(G__81658));
var G__81658__$2 = (((G__81658__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__81658__$1));
if((G__81658__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__81658__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__81659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__81659,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81653_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__81653_SHARP_],null))));
}),x);
}),(function (p1__81654_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__81654_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__81654_SHARP_));
}))),children__$1);
} else {
return G__81659;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__81660){
var map__81661 = p__81660;
var map__81661__$1 = (((((!((map__81661 == null))))?(((((map__81661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81661):map__81661);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__81663 = children;
var G__81663__$1 = (((G__81663 == null))?null:cljs.core.first(G__81663));
var G__81663__$2 = (((G__81663__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__81663__$1));
if((G__81663__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__81663__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__81666){
var map__81667 = p__81666;
var map__81667__$1 = (((((!((map__81667 == null))))?(((((map__81667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81667):map__81667);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81667__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81667__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81667__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81664_SHARP_){
return cljs.core.contains_QMARK_(input,p1__81664_SHARP_);
}),com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
}),_LT__GT_,(function (){var G__81669 = input_count;
switch (G__81669) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY], null);

break;
case (1):
return input;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);

}
})());
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
}),_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
}),_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__81670){
var map__81671 = p__81670;
var map__81671__$1 = (((((!((map__81671 == null))))?(((((map__81671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81671):map__81671);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81671__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__81673 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__81673,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__81673;
}
}),_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__81665_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__81665_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(output)], 0)):cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),edn_query_language.core.query__GT_ast(output))));
});
/**
 * Low level function to add resolvers to the index. This function adds the resolver
 *   configuration to the index set, adds the resolver to the ::pc/index-resolvers, add
 *   the output to input index in the ::pc/index-oir and the reverse index for auto-complete
 *   to the index ::pc/index-io.
 * 
 *   This is a low level function, for adding to your index prefer using `pc/register`.
 */
com.wsscode.pathom.connect.add = (function com$wsscode$pathom$connect$add(var_args){
var G__81675 = arguments.length;
switch (G__81675) {
case 2:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2 = (function (indexes,sym){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,sym,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3 = (function (indexes,sym,sym_data){
var provides = (function (){var G__81677 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sym_data,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.PersistentVector.EMPTY);
return (com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(G__81677) : com.wsscode.pathom.connect.normalize_io.call(null,G__81677));
})();
var map__81676 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.wsscode.pathom.connect","provides","com.wsscode.pathom.connect/provides",865831498),provides], null),sym_data], 0));
var map__81676__$1 = (((((!((map__81676 == null))))?(((((map__81676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81676):map__81676);
var sym_data__$1 = map__81676__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81676__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81676__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__81679 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,provides]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (indexes__$1,out_attr){
var G__81680 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__81680,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),com.wsscode.pathom.misc.sconj,sym);
} else {
return G__81680;
}
}),cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81679,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__81679;
}
})());
}));

(com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3);

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__81681){
var map__81682 = p__81681;
var map__81682__$1 = (((((!((map__81682 == null))))?(((((map__81682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81682):map__81682);
var data = map__81682__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81682__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81682__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
}),_LT__GT_,(function (){var G__81684 = params;
var G__81684__$1 = (((G__81684 == null))?null:edn_query_language.core.query__GT_ast(G__81684));
if((G__81684__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__81684__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
}),_LT__GT___$1,(function (){var G__81685 = output;
var G__81685__$1 = (((G__81685 == null))?null:edn_query_language.core.query__GT_ast(G__81685));
if((G__81685__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__81685__$1);
}
})());
})()], null));
});
/**
 * Updates the index by registering the given resolver or mutation (lets call it item),
 *   an item can be:
 * 
 *   1. a resolver map
 *   2. a mutation map
 *   3. a sequence with items
 * 
 *   The sequence version can have nested sequences, they will be recursively add.
 * 
 *   Examples of possible usages:
 * 
 *    (-> {} ; blank index
 *        (pc/register one-resolver) ; single resolver
 *        (pc/register one-mutation) ; single mutation
 *        (pc/register [one-resolver one-mutation]) ; sequence of resolvers/mutations
 *        (pc/register [[resolver1 resolver2] [resolver3 mutation]]) ; nested sequences
 *        (pc/register [[resolver1 resolver2] resolver-out [resolver3 mutation]]) ; all mixed
 *        )
 *   
 */
com.wsscode.pathom.connect.register = (function com$wsscode$pathom$connect$register(indexes,item_or_items){
if(cljs.core.sequential_QMARK_(item_or_items)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.register,indexes,item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add_mutation(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__81686,resolvers,e){
var map__81687 = p__81686;
var map__81687__$1 = (((((!((map__81687 == null))))?(((((map__81687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81687):map__81687);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81687__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (s){
if(cljs.core.truth_(request_cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null))){
return (0);
} else {
return (1);
}
} else {
return (1);
}
}),resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__81689){
var map__81690 = p__81689;
var map__81690__$1 = (((((!((map__81690 == null))))?(((((map__81690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81690):map__81690);
var env = map__81690__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81690__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81690__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5733__auto__)){
var attr_resolvers = temp__5733__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81692){
var vec__81693 = p__81692;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81693,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81693,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
}),attr_resolvers));
var G__81700 = r;
var vec__81701 = G__81700;
var seq__81702 = cljs.core.seq(vec__81701);
var first__81703 = cljs.core.first(seq__81702);
var seq__81702__$1 = cljs.core.next(seq__81702);
var map__81704 = first__81703;
var map__81704__$1 = (((((!((map__81704 == null))))?(((((map__81704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81704):map__81704);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81704__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__81702__$1;
var xs = vec__81701;
var G__81700__$1 = G__81700;
while(true){
var vec__81706 = G__81700__$1;
var seq__81707 = cljs.core.seq(vec__81706);
var first__81708 = cljs.core.first(seq__81707);
var seq__81707__$1 = cljs.core.next(seq__81707);
var map__81709 = first__81708;
var map__81709__$1 = (((((!((map__81709 == null))))?(((((map__81709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81709):map__81709);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81709__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__81707__$1;
var xs__$1 = vec__81706;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e81711){var _ = e81711;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__85888 = t__$1;
G__81700__$1 = G__85888;
continue;
} else {
var e__$2 = cljs.core.select_keys(e__$1,attrs__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),e__$2,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.first(com.wsscode.pathom.connect.sort_resolvers(env,sym__$1,e__$2))], null);
}
} else {
return null;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__81712){
var map__81713 = p__81712;
var map__81713__$1 = (((((!((map__81713 == null))))?(((((map__81713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81713):map__81713);
var env = map__81713__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81713__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81713__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_81861){
var state_val_81862 = (state_81861[(1)]);
if((state_val_81862 === (7))){
var state_81861__$1 = state_81861;
var statearr_81863_85889 = state_81861__$1;
(statearr_81863_85889[(2)] = null);

(statearr_81863_85889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (20))){
var inst_81776 = (state_81861[(7)]);
var inst_81782 = inst_81776.cljs$lang$protocol_mask$partition0$;
var inst_81783 = (inst_81782 & (64));
var inst_81784 = inst_81776.cljs$core$ISeq$;
var inst_81785 = (cljs.core.PROTOCOL_SENTINEL === inst_81784);
var inst_81786 = ((inst_81783) || (inst_81785));
var state_81861__$1 = state_81861;
if(cljs.core.truth_(inst_81786)){
var statearr_81864_85890 = state_81861__$1;
(statearr_81864_85890[(1)] = (23));

} else {
var statearr_81865_85891 = state_81861__$1;
(statearr_81865_85891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (27))){
var inst_81776 = (state_81861[(7)]);
var state_81861__$1 = state_81861;
var statearr_81866_85892 = state_81861__$1;
(statearr_81866_85892[(2)] = inst_81776);

(statearr_81866_85892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (1))){
var state_81861__$1 = state_81861;
var statearr_81867_85893 = state_81861__$1;
(statearr_81867_85893[(2)] = null);

(statearr_81867_85893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (24))){
var state_81861__$1 = state_81861;
var statearr_81868_85894 = state_81861__$1;
(statearr_81868_85894[(2)] = false);

(statearr_81868_85894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (39))){
var inst_81824 = (state_81861[(2)]);
var inst_81825 = com.wsscode.async.async_cljs.throw_err(inst_81824);
var inst_81826 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_81825);
var _ = (function (){var statearr_81869 = state_81861;
(statearr_81869[(4)] = cljs.core.rest((state_81861[(4)])));

return statearr_81869;
})();
var state_81861__$1 = state_81861;
var statearr_81870_85895 = state_81861__$1;
(statearr_81870_85895[(2)] = inst_81826);

(statearr_81870_85895[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (4))){
var inst_81715 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81871_85896 = state_81861__$1;
(statearr_81871_85896[(2)] = inst_81715);

(statearr_81871_85896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (15))){
var inst_81744 = (state_81861[(8)]);
var inst_81763 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_81744);
var state_81861__$1 = state_81861;
var statearr_81872_85897 = state_81861__$1;
(statearr_81872_85897[(2)] = inst_81763);

(statearr_81872_85897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (21))){
var state_81861__$1 = state_81861;
var statearr_81873_85898 = state_81861__$1;
(statearr_81873_85898[(2)] = false);

(statearr_81873_85898[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (31))){
var inst_81851 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81874_85899 = state_81861__$1;
(statearr_81874_85899[(2)] = inst_81851);

(statearr_81874_85899[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (32))){
var state_81861__$1 = state_81861;
var statearr_81875_85900 = state_81861__$1;
(statearr_81875_85900[(2)] = null);

(statearr_81875_85900[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (40))){
var inst_81777 = (state_81861[(9)]);
var inst_81769 = inst_81777;
var state_81861__$1 = (function (){var statearr_81876 = state_81861;
(statearr_81876[(10)] = inst_81769);

return statearr_81876;
})();
var statearr_81877_85901 = state_81861__$1;
(statearr_81877_85901[(2)] = null);

(statearr_81877_85901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (33))){
var state_81861__$1 = state_81861;
var statearr_81878_85902 = state_81861__$1;
(statearr_81878_85902[(2)] = null);

(statearr_81878_85902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (13))){
var state_81861__$1 = state_81861;
var statearr_81879_85903 = state_81861__$1;
(statearr_81879_85903[(2)] = false);

(statearr_81879_85903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (22))){
var inst_81793 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
if(cljs.core.truth_(inst_81793)){
var statearr_81880_85904 = state_81861__$1;
(statearr_81880_85904[(1)] = (26));

} else {
var statearr_81881_85905 = state_81861__$1;
(statearr_81881_85905[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (36))){
var inst_81800 = (state_81861[(11)]);
var inst_81829 = (state_81861[(12)]);
var inst_81829__$1 = (state_81861[(2)]);
var inst_81830 = cljs.core.set(inst_81800);
var inst_81831 = cljs.core.keys(inst_81829__$1);
var inst_81832 = cljs.core.set(inst_81831);
var inst_81833 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_81830,inst_81832);
var inst_81834 = cljs.core.seq(inst_81833);
var state_81861__$1 = (function (){var statearr_81882 = state_81861;
(statearr_81882[(12)] = inst_81829__$1);

return statearr_81882;
})();
if(inst_81834){
var statearr_81883_85906 = state_81861__$1;
(statearr_81883_85906[(1)] = (40));

} else {
var statearr_81884_85907 = state_81861__$1;
(statearr_81884_85907[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (41))){
var inst_81829 = (state_81861[(12)]);
var inst_81800 = (state_81861[(11)]);
var inst_81799 = (state_81861[(13)]);
var inst_81838 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_81839 = cljs.core.select_keys(inst_81829,inst_81800);
var inst_81840 = com.wsscode.pathom.connect.sort_resolvers(env,inst_81799,inst_81829);
var inst_81841 = cljs.core.first(inst_81840);
var inst_81842 = [inst_81839,inst_81841];
var inst_81843 = cljs.core.PersistentHashMap.fromArrays(inst_81838,inst_81842);
var state_81861__$1 = state_81861;
var statearr_81885_85908 = state_81861__$1;
(statearr_81885_85908[(2)] = inst_81843);

(statearr_81885_85908[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (29))){
var inst_81799 = (state_81861[(13)]);
var inst_81800 = (state_81861[(11)]);
var inst_81802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81803 = [inst_81799,inst_81800];
var inst_81804 = (new cljs.core.PersistentVector(null,2,(5),inst_81802,inst_81803,null));
var inst_81805 = cljs.core.contains_QMARK_(dependency_track,inst_81804);
var inst_81806 = (!(inst_81805));
var state_81861__$1 = state_81861;
if(inst_81806){
var statearr_81886_85909 = state_81861__$1;
(statearr_81886_85909[(1)] = (32));

} else {
var statearr_81887_85910 = state_81861__$1;
(statearr_81887_85910[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (6))){
var inst_81722 = (state_81861[(14)]);
var inst_81723 = (state_81861[(15)]);
var inst_81727 = (state_81861[(16)]);
var inst_81733 = (state_81861[(17)]);
var inst_81744 = (state_81861[(8)]);
var inst_81729 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_81731 = (function (){var k = inst_81722;
var e = inst_81723;
var temp__5733__auto__ = inst_81727;
var attr_resolvers = inst_81727;
return (function (p__81730){
var vec__81888 = p__81730;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81888,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81888,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
})();
var inst_81732 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_81731,inst_81727);
var inst_81733__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_81729,inst_81732);
var inst_81743 = cljs.core.seq(inst_81733__$1);
var inst_81744__$1 = cljs.core.first(inst_81743);
var inst_81745 = cljs.core.next(inst_81743);
var inst_81747 = (inst_81744__$1 == null);
var inst_81748 = cljs.core.not(inst_81747);
var state_81861__$1 = (function (){var statearr_81891 = state_81861;
(statearr_81891[(17)] = inst_81733__$1);

(statearr_81891[(8)] = inst_81744__$1);

(statearr_81891[(18)] = inst_81745);

return statearr_81891;
})();
if(inst_81748){
var statearr_81892_85911 = state_81861__$1;
(statearr_81892_85911[(1)] = (9));

} else {
var statearr_81893_85912 = state_81861__$1;
(statearr_81893_85912[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (28))){
var inst_81769 = (state_81861[(10)]);
var inst_81798 = (state_81861[(2)]);
var inst_81799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_81798,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_81800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_81798,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_81861__$1 = (function (){var statearr_81894 = state_81861;
(statearr_81894[(13)] = inst_81799);

(statearr_81894[(11)] = inst_81800);

return statearr_81894;
})();
if(cljs.core.truth_(inst_81769)){
var statearr_81895_85913 = state_81861__$1;
(statearr_81895_85913[(1)] = (29));

} else {
var statearr_81896_85914 = state_81861__$1;
(statearr_81896_85914[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (25))){
var inst_81790 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81897_85915 = state_81861__$1;
(statearr_81897_85915[(2)] = inst_81790);

(statearr_81897_85915[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (34))){
var inst_81848 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81898_85916 = state_81861__$1;
(statearr_81898_85916[(2)] = inst_81848);

(statearr_81898_85916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (17))){
var inst_81733 = (state_81861[(17)]);
var inst_81766 = (state_81861[(2)]);
var inst_81767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_81766,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_81768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_81766,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_81769 = inst_81733;
var state_81861__$1 = (function (){var statearr_81899 = state_81861;
(statearr_81899[(19)] = inst_81767);

(statearr_81899[(20)] = inst_81768);

(statearr_81899[(10)] = inst_81769);

return statearr_81899;
})();
var statearr_81900_85917 = state_81861__$1;
(statearr_81900_85917[(2)] = null);

(statearr_81900_85917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (3))){
var inst_81859 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81861__$1,inst_81859);
} else {
if((state_val_81862 === (12))){
var state_81861__$1 = state_81861;
var statearr_81901_85918 = state_81861__$1;
(statearr_81901_85918[(2)] = true);

(statearr_81901_85918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (2))){
var inst_81722 = (state_81861[(14)]);
var inst_81727 = (state_81861[(16)]);
var _ = (function (){var statearr_81902 = state_81861;
(statearr_81902[(4)] = cljs.core.cons((5),(state_81861[(4)])));

return statearr_81902;
})();
var inst_81721 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_81722__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_81721);
var inst_81723 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_81724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81725 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_81722__$1];
var inst_81726 = (new cljs.core.PersistentVector(null,2,(5),inst_81724,inst_81725,null));
var inst_81727__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_81726);
var state_81861__$1 = (function (){var statearr_81903 = state_81861;
(statearr_81903[(14)] = inst_81722__$1);

(statearr_81903[(15)] = inst_81723);

(statearr_81903[(16)] = inst_81727__$1);

return statearr_81903;
})();
if(cljs.core.truth_(inst_81727__$1)){
var statearr_81904_85919 = state_81861__$1;
(statearr_81904_85919[(1)] = (6));

} else {
var statearr_81905_85920 = state_81861__$1;
(statearr_81905_85920[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (23))){
var state_81861__$1 = state_81861;
var statearr_81906_85921 = state_81861__$1;
(statearr_81906_85921[(2)] = true);

(statearr_81906_85921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (35))){
var inst_81799 = (state_81861[(13)]);
var inst_81800 = (state_81861[(11)]);
var _ = (function (){var statearr_81907 = state_81861;
(statearr_81907[(4)] = cljs.core.cons((38),(state_81861[(4)])));

return statearr_81907;
})();
var inst_81815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_81816 = cljs.core.PersistentHashSet.EMPTY;
var inst_81817 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_81816);
var inst_81818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81819 = [inst_81799,inst_81800];
var inst_81820 = (new cljs.core.PersistentVector(null,2,(5),inst_81818,inst_81819,null));
var inst_81821 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_81815,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_81817,inst_81820);
var inst_81822 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_81821,inst_81800);
var state_81861__$1 = state_81861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81861__$1,(39),inst_81822);
} else {
if((state_val_81862 === (19))){
var inst_81853 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81908_85922 = state_81861__$1;
(statearr_81908_85922[(2)] = inst_81853);

(statearr_81908_85922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (11))){
var inst_81761 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
if(cljs.core.truth_(inst_81761)){
var statearr_81910_85923 = state_81861__$1;
(statearr_81910_85923[(1)] = (15));

} else {
var statearr_81911_85924 = state_81861__$1;
(statearr_81911_85924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (9))){
var inst_81744 = (state_81861[(8)]);
var inst_81750 = inst_81744.cljs$lang$protocol_mask$partition0$;
var inst_81751 = (inst_81750 & (64));
var inst_81752 = inst_81744.cljs$core$ISeq$;
var inst_81753 = (cljs.core.PROTOCOL_SENTINEL === inst_81752);
var inst_81754 = ((inst_81751) || (inst_81753));
var state_81861__$1 = state_81861;
if(cljs.core.truth_(inst_81754)){
var statearr_81912_85925 = state_81861__$1;
(statearr_81912_85925[(1)] = (12));

} else {
var statearr_81913_85926 = state_81861__$1;
(statearr_81913_85926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (5))){
var _ = (function (){var statearr_81914 = state_81861;
(statearr_81914[(4)] = cljs.core.rest((state_81861[(4)])));

return statearr_81914;
})();
var state_81861__$1 = state_81861;
var ex81909 = (state_81861__$1[(2)]);
var statearr_81915_85927 = state_81861__$1;
(statearr_81915_85927[(5)] = ex81909);


var statearr_81916_85928 = state_81861__$1;
(statearr_81916_85928[(1)] = (4));

(statearr_81916_85928[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (14))){
var inst_81758 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81917_85929 = state_81861__$1;
(statearr_81917_85929[(2)] = inst_81758);

(statearr_81917_85929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (26))){
var inst_81776 = (state_81861[(7)]);
var inst_81795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_81776);
var state_81861__$1 = state_81861;
var statearr_81919_85930 = state_81861__$1;
(statearr_81919_85930[(2)] = inst_81795);

(statearr_81919_85930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (16))){
var inst_81744 = (state_81861[(8)]);
var state_81861__$1 = state_81861;
var statearr_81920_85931 = state_81861__$1;
(statearr_81920_85931[(2)] = inst_81744);

(statearr_81920_85931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (38))){
var _ = (function (){var statearr_81921 = state_81861;
(statearr_81921[(4)] = cljs.core.rest((state_81861[(4)])));

return statearr_81921;
})();
var state_81861__$1 = state_81861;
var ex81918 = (state_81861__$1[(2)]);
var statearr_81922_85932 = state_81861__$1;
(statearr_81922_85932[(5)] = ex81918);


var statearr_81923_85933 = state_81861__$1;
(statearr_81923_85933[(1)] = (37));

(statearr_81923_85933[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (30))){
var state_81861__$1 = state_81861;
var statearr_81924_85934 = state_81861__$1;
(statearr_81924_85934[(2)] = null);

(statearr_81924_85934[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (10))){
var state_81861__$1 = state_81861;
var statearr_81925_85935 = state_81861__$1;
(statearr_81925_85935[(2)] = false);

(statearr_81925_85935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (18))){
var inst_81769 = (state_81861[(10)]);
var inst_81776 = (state_81861[(7)]);
var inst_81775 = cljs.core.seq(inst_81769);
var inst_81776__$1 = cljs.core.first(inst_81775);
var inst_81777 = cljs.core.next(inst_81775);
var inst_81779 = (inst_81776__$1 == null);
var inst_81780 = cljs.core.not(inst_81779);
var state_81861__$1 = (function (){var statearr_81926 = state_81861;
(statearr_81926[(7)] = inst_81776__$1);

(statearr_81926[(9)] = inst_81777);

return statearr_81926;
})();
if(inst_81780){
var statearr_81927_85936 = state_81861__$1;
(statearr_81927_85936[(1)] = (20));

} else {
var statearr_81928_85937 = state_81861__$1;
(statearr_81928_85937[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (42))){
var inst_81845 = (state_81861[(2)]);
var state_81861__$1 = state_81861;
var statearr_81929_85938 = state_81861__$1;
(statearr_81929_85938[(2)] = inst_81845);

(statearr_81929_85938[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (37))){
var inst_81808 = (state_81861[(2)]);
var inst_81809 = cljs.core.PersistentHashMap.EMPTY;
var state_81861__$1 = (function (){var statearr_81930 = state_81861;
(statearr_81930[(21)] = inst_81808);

return statearr_81930;
})();
var statearr_81931_85939 = state_81861__$1;
(statearr_81931_85939[(2)] = inst_81809);

(statearr_81931_85939[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81862 === (8))){
var inst_81856 = (state_81861[(2)]);
var _ = (function (){var statearr_81932 = state_81861;
(statearr_81932[(4)] = cljs.core.rest((state_81861[(4)])));

return statearr_81932;
})();
var state_81861__$1 = state_81861;
var statearr_81933_85940 = state_81861__$1;
(statearr_81933_85940[(2)] = inst_81856);

(statearr_81933_85940[(1)] = (3));


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
});
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto____0 = (function (){
var statearr_81934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81934[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto__);

(statearr_81934[(1)] = (1));

return statearr_81934;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto____1 = (function (state_81861){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_81861);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e81935){var ex__50860__auto__ = e81935;
var statearr_81936_85941 = state_81861;
(statearr_81936_85941[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_81861[(4)]))){
var statearr_81937_85942 = state_81861;
(statearr_81937_85942[(1)] = cljs.core.first((state_81861[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85943 = state_81861;
state_81861 = G__85943;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto__ = function(state_81861){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto____1.call(this,state_81861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_81938 = f__50893__auto__();
(statearr_81938[(6)] = c__50892__auto__);

return statearr_81938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(_env,_entity){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__81940 = arguments.length;
switch (G__81940) {
case 1:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1 = (function (env){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
}));

(com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2 = (function (env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
}));

(com.wsscode.pathom.connect.resolver_dispatch.cljs$lang$maxFixedArity = 2);

/**
 * This dispatch method will fire the resolver by looking at the ::pc/resolve
 *   key in the resolver map details.
 */
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__81941,entity){
var map__81942 = p__81941;
var map__81942__$1 = (((((!((map__81942 == null))))?(((((map__81942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81942):map__81942);
var env = map__81942__$1;
var map__81943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81942__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__81943__$1 = (((((!((map__81943 == null))))?(((((map__81943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81943):map__81943);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81943__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81943__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
if(cljs.core.truth_(resolve)){
} else {
throw (new Error(["Assert failed: ",["Can't find resolve fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","resolve"].join('')));
}

return (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,entity) : resolve.call(null,env,entity));
});
com.wsscode.pathom.connect.step_weight = (function com$wsscode$pathom$connect$step_weight(value,new_value){
return (((function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + new_value) * 0.5);
});
com.wsscode.pathom.connect.update_resolver_weight = (function com$wsscode$pathom$connect$update_resolver_weight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___85945 = arguments.length;
var i__4737__auto___85946 = (0);
while(true){
if((i__4737__auto___85946 < len__4736__auto___85945)){
args__4742__auto__.push((arguments[i__4737__auto___85946]));

var G__85947 = (i__4737__auto___85946 + (1));
i__4737__auto___85946 = G__85947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__81949,resolver,args){
var map__81950 = p__81949;
var map__81950__$1 = (((((!((map__81950 == null))))?(((((map__81950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81950):map__81950);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81950__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
}));

(com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq81946){
var G__81947 = cljs.core.first(seq81946);
var seq81946__$1 = cljs.core.next(seq81946);
var G__81948 = cljs.core.first(seq81946__$1);
var seq81946__$2 = cljs.core.next(seq81946__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81947,G__81948,seq81946__$2);
}));

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__81952,entity){
var map__81953 = p__81952;
var map__81953__$1 = (((((!((map__81953 == null))))?(((((map__81953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81953):map__81953);
var env = map__81953__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81953__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81953__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolver_sym),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__75242__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e81955){var e = e81955;
return e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__75242__auto__)){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_81988){
var state_val_81989 = (state_81988[(1)]);
if((state_val_81989 === (7))){
var inst_81965 = com.wsscode.pathom.trace.now();
var inst_81966 = (inst_81965 - start);
var inst_81967 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_81966], 0));
var state_81988__$1 = state_81988;
var statearr_81990_85948 = state_81988__$1;
(statearr_81990_85948[(2)] = inst_81967);

(statearr_81990_85948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (1))){
var state_81988__$1 = state_81988;
var statearr_81991_85949 = state_81988__$1;
(statearr_81991_85949[(2)] = null);

(statearr_81991_85949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (4))){
var inst_81956 = (state_81988[(2)]);
var state_81988__$1 = state_81988;
var statearr_81992_85950 = state_81988__$1;
(statearr_81992_85950[(2)] = inst_81956);

(statearr_81992_85950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (6))){
var inst_81963 = (state_81988[(2)]);
var state_81988__$1 = (function (){var statearr_81993 = state_81988;
(statearr_81993[(7)] = inst_81963);

return statearr_81993;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_81994_85951 = state_81988__$1;
(statearr_81994_85951[(1)] = (7));

} else {
var statearr_81995_85952 = state_81988__$1;
(statearr_81995_85952[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (3))){
var inst_81986 = (state_81988[(2)]);
var state_81988__$1 = state_81988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81988__$1,inst_81986);
} else {
if((state_val_81989 === (12))){
var inst_81963 = (state_81988[(7)]);
var inst_81981 = (state_81988[(2)]);
var inst_81982 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_81981);
var inst_81983 = com.wsscode.async.async_cljs.throw_err(inst_81963);
var _ = (function (){var statearr_81996 = state_81988;
(statearr_81996[(4)] = cljs.core.rest((state_81988[(4)])));

return statearr_81996;
})();
var state_81988__$1 = (function (){var statearr_81997 = state_81988;
(statearr_81997[(8)] = inst_81982);

return statearr_81997;
})();
var statearr_81998_85953 = state_81988__$1;
(statearr_81998_85953[(2)] = inst_81983);

(statearr_81998_85953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (2))){
var _ = (function (){var statearr_81999 = state_81988;
(statearr_81999[(4)] = cljs.core.cons((5),(state_81988[(4)])));

return statearr_81999;
})();
var state_81988__$1 = state_81988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81988__$1,(6),res__75242__auto__);
} else {
if((state_val_81989 === (11))){
var inst_81974 = (state_81988[(9)]);
var state_81988__$1 = state_81988;
var statearr_82001_85954 = state_81988__$1;
(statearr_82001_85954[(2)] = inst_81974);

(statearr_82001_85954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (9))){
var inst_81963 = (state_81988[(7)]);
var inst_81970 = (state_81988[(2)]);
var inst_81972 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_81973 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_81974 = cljs.core.PersistentHashMap.fromArrays(inst_81972,inst_81973);
var inst_81975 = com.wsscode.async.async_cljs.error_QMARK_(inst_81963);
var state_81988__$1 = (function (){var statearr_82002 = state_81988;
(statearr_82002[(10)] = inst_81970);

(statearr_82002[(9)] = inst_81974);

return statearr_82002;
})();
if(inst_81975){
var statearr_82003_85955 = state_81988__$1;
(statearr_82003_85955[(1)] = (10));

} else {
var statearr_82004_85956 = state_81988__$1;
(statearr_82004_85956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (5))){
var _ = (function (){var statearr_82005 = state_81988;
(statearr_82005[(4)] = cljs.core.rest((state_81988[(4)])));

return statearr_82005;
})();
var state_81988__$1 = state_81988;
var ex82000 = (state_81988__$1[(2)]);
var statearr_82006_85957 = state_81988__$1;
(statearr_82006_85957[(5)] = ex82000);


var statearr_82007_85958 = state_81988__$1;
(statearr_82007_85958[(1)] = (4));

(statearr_82007_85958[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (10))){
var inst_81963 = (state_81988[(7)]);
var inst_81974 = (state_81988[(9)]);
var inst_81977 = com.wsscode.pathom.core.process_error(env,inst_81963);
var inst_81978 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_81974,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_81977);
var state_81988__$1 = state_81988;
var statearr_82008_85959 = state_81988__$1;
(statearr_82008_85959[(2)] = inst_81978);

(statearr_82008_85959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81989 === (8))){
var state_81988__$1 = state_81988;
var statearr_82009_85960 = state_81988__$1;
(statearr_82009_85960[(2)] = null);

(statearr_82009_85960[(1)] = (9));


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
});
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_82010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82010[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto__);

(statearr_82010[(1)] = (1));

return statearr_82010;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto____1 = (function (state_81988){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_81988);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82011){var ex__50860__auto__ = e82011;
var statearr_82012_85961 = state_81988;
(statearr_82012_85961[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_81988[(4)]))){
var statearr_82013_85962 = state_81988;
(statearr_82013_85962[(1)] = cljs.core.first((state_81988[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85963 = state_81988;
state_81988 = G__85963;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto__ = function(state_81988){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto____1.call(this,state_81988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82014 = f__50893__auto__();
(statearr_82014[(6)] = c__50892__auto__);

return statearr_82014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
var x = res__75242__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__82015 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82015,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__82015;
}
})());

return com.wsscode.async.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__82017,entity){
var map__82018 = p__82017;
var map__82018__$1 = (((((!((map__82018 == null))))?(((((map__82018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82018):map__82018);
var env = map__82018__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82018__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__82016_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__82016_SHARP_));
}),entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___85964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_82038){
var state_val_82039 = (state_82038[(1)]);
if((state_val_82039 === (1))){
var inst_82020 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_82021 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_82022 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_82021);
var inst_82023 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_82022);
var inst_82024 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_82025 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_82024);
var inst_82026 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_82027 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_82026);
var inst_82028 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_82023,inst_82025,inst_82027,entity];
var inst_82029 = cljs.core.PersistentHashMap.fromArrays(inst_82020,inst_82028);
var inst_82030 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_82029);
var inst_82031 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_82032 = (function (){var tid = inst_82030;
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e82040){var e = e82040;
return e;
}});
})();
var inst_82033 = [out,inst_82032];
var inst_82034 = cljs.core.PersistentHashMap.fromArrays(inst_82031,inst_82033);
var state_82038__$1 = state_82038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82038__$1,(2),pool_chan,inst_82034);
} else {
if((state_val_82039 === (2))){
var inst_82036 = (state_82038[(2)]);
var state_82038__$1 = state_82038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82038__$1,inst_82036);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto____0 = (function (){
var statearr_82041 = [null,null,null,null,null,null,null];
(statearr_82041[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto__);

(statearr_82041[(1)] = (1));

return statearr_82041;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto____1 = (function (state_82038){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_82038);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82042){var ex__50860__auto__ = e82042;
var statearr_82043_85965 = state_82038;
(statearr_82043_85965[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_82038[(4)]))){
var statearr_82044_85966 = state_82038;
(statearr_82044_85966[(1)] = cljs.core.first((state_82038[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85967 = state_82038;
state_82038 = G__85967;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto__ = function(state_82038){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto____1.call(this,state_82038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82045 = f__50893__auto__();
(statearr_82045[(6)] = c__50892__auto___85964);

return statearr_82045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__75232__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity__$1)),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__75232__auto__)){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_82060){
var state_val_82061 = (state_82060[(1)]);
if((state_val_82061 === (1))){
var state_82060__$1 = state_82060;
var statearr_82062_85968 = state_82060__$1;
(statearr_82062_85968[(2)] = null);

(statearr_82062_85968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82061 === (2))){
var _ = (function (){var statearr_82063 = state_82060;
(statearr_82063[(4)] = cljs.core.cons((5),(state_82060[(4)])));

return statearr_82063;
})();
var state_82060__$1 = state_82060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82060__$1,(6),res__75232__auto__);
} else {
if((state_val_82061 === (3))){
var inst_82058 = (state_82060[(2)]);
var state_82060__$1 = state_82060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82060__$1,inst_82058);
} else {
if((state_val_82061 === (4))){
var inst_82046 = (state_82060[(2)]);
var state_82060__$1 = state_82060;
var statearr_82065_85969 = state_82060__$1;
(statearr_82065_85969[(2)] = inst_82046);

(statearr_82065_85969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82061 === (5))){
var _ = (function (){var statearr_82066 = state_82060;
(statearr_82066[(4)] = cljs.core.rest((state_82060[(4)])));

return statearr_82066;
})();
var state_82060__$1 = state_82060;
var ex82064 = (state_82060__$1[(2)]);
var statearr_82067_85970 = state_82060__$1;
(statearr_82067_85970[(5)] = ex82064);


var statearr_82068_85971 = state_82060__$1;
(statearr_82068_85971[(1)] = (4));

(statearr_82068_85971[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82061 === (6))){
var inst_82053 = (state_82060[(2)]);
var inst_82054 = com.wsscode.async.async_cljs.throw_err(inst_82053);
var inst_82055 = cljs.core.select_keys(inst_82054,input);
var _ = (function (){var statearr_82069 = state_82060;
(statearr_82069[(4)] = cljs.core.rest((state_82060[(4)])));

return statearr_82069;
})();
var state_82060__$1 = state_82060;
var statearr_82070_85972 = state_82060__$1;
(statearr_82070_85972[(2)] = inst_82055);

(statearr_82070_85972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto____0 = (function (){
var statearr_82071 = [null,null,null,null,null,null,null];
(statearr_82071[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto__);

(statearr_82071[(1)] = (1));

return statearr_82071;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto____1 = (function (state_82060){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_82060);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82072){var ex__50860__auto__ = e82072;
var statearr_82073_85973 = state_82060;
(statearr_82073_85973[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_82060[(4)]))){
var statearr_82074_85974 = state_82060;
(statearr_82074_85974[(1)] = cljs.core.first((state_82060[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85975 = state_82060;
state_82060 = G__85975;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto__ = function(state_82060){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto____1.call(this,state_82060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82075 = f__50893__auto__();
(statearr_82075[(6)] = c__50892__auto__);

return statearr_82075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
var e = res__75232__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__82080){
var vec__82081 = p__82080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82081,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__82084 = cljs.core.seq(linked_results);
var chunk__82085 = null;
var count__82086 = (0);
var i__82087 = (0);
while(true){
if((i__82087 < count__82086)){
var vec__82094 = chunk__82085.cljs$core$IIndexed$_nth$arity$2(null,i__82087);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82094,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82094,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__82084,chunk__82085,count__82086,i__82087,vec__82094,input,value,params){
return (function (){
return value;
});})(seq__82084,chunk__82085,count__82086,i__82087,vec__82094,input,value,params))
);


var G__85976 = seq__82084;
var G__85977 = chunk__82085;
var G__85978 = count__82086;
var G__85979 = (i__82087 + (1));
seq__82084 = G__85976;
chunk__82085 = G__85977;
count__82086 = G__85978;
i__82087 = G__85979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82084);
if(temp__5735__auto__){
var seq__82084__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82084__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__82084__$1);
var G__85980 = cljs.core.chunk_rest(seq__82084__$1);
var G__85981 = c__4556__auto__;
var G__85982 = cljs.core.count(c__4556__auto__);
var G__85983 = (0);
seq__82084 = G__85980;
chunk__82085 = G__85981;
count__82086 = G__85982;
i__82087 = G__85983;
continue;
} else {
var vec__82097 = cljs.core.first(seq__82084__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82097,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82097,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__82084,chunk__82085,count__82086,i__82087,vec__82097,input,value,seq__82084__$1,temp__5735__auto__,params){
return (function (){
return value;
});})(seq__82084,chunk__82085,count__82086,i__82087,vec__82097,input,value,seq__82084__$1,temp__5735__auto__,params))
);


var G__85984 = cljs.core.next(seq__82084__$1);
var G__85985 = null;
var G__85986 = (0);
var G__85987 = (0);
seq__82084 = G__85984;
chunk__82085 = G__85985;
count__82086 = G__85986;
i__82087 = G__85987;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom.connect.output__GT_provides = (function com$wsscode$pathom$connect$output__GT_provides(output){
var ast = com.wsscode.pathom.core.query__GT_ast(output);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
com.wsscode.pathom.connect.compute_paths_STAR_ = (function com$wsscode$pathom$connect$compute_paths_STAR_(index_oir,keys,bad_keys,attr,pending){
if(cljs.core.contains_QMARK_(index_oir,attr)){
return cljs.core.reduce_kv((function (paths,input,resolvers){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.some(bad_keys,input);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core.contains_QMARK_(input,attr)) || (((cljs.core.seq(input)) && (cljs.core.every_QMARK_(pending,input)))));
}
})())){
return paths;
} else {
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__82101_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__82101_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82103_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
}),cljs.core.first(p1__82103_SHARP_),cljs.core.next(p1__82103_SHARP_));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__82102_SHARP_){
var G__82105 = index_oir;
var G__82106 = keys;
var G__82107 = bad_keys;
var G__82108 = p1__82102_SHARP_;
var G__82109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__82102_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__82105,G__82106,G__82107,G__82108,G__82109) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__82105,G__82106,G__82107,G__82108,G__82109));
})),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82104_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
}),cljs.core.first(p1__82104_SHARP_),cljs.core.next(p1__82104_SHARP_));
}),com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_paths,missing_paths], 0))));
} else {
return paths;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,new_paths);
}
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_oir,attr));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
/**
 * This function will return a set of possible paths given a set of available keys to reach some attribute. You also
 *   send a set of bad keys, bad keys mean information you cannot use (maybe they already got an error, or you known will
 *   not be available).
 */
com.wsscode.pathom.connect.compute_paths = (function com$wsscode$pathom$connect$compute_paths(index_oir,keys,bad_keys,attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__82112_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__82112_SHARP_);
}),(function (p1__82113_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__82113_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__82115 = cljs.core.group_by((function (p1__82114_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__82114_SHARP_));
}),entity);
var map__82115__$1 = (((((!((map__82115 == null))))?(((((map__82115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82115):map__82115);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82115__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82115__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__82117,path){
var map__82118 = p__82117;
var map__82118__$1 = (((((!((map__82118 == null))))?(((((map__82118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82118):map__82118);
var env = map__82118__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82118__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82118__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4126__auto__ = (function (){var G__82121 = resolver_weights;
if((G__82121 == null)){
return null;
} else {
return cljs.core.deref(G__82121);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (sym){
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1((com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,sym) : com.wsscode.pathom.connect.resolver_data.call(null,env,sym))));
if(cljs.core.truth_((function (){var and__4115__auto__ = request_cache;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e], null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,sym,(1));
}
})),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__82122_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__82122_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__82123){
var map__82124 = p__82123;
var map__82124__$1 = (((((!((map__82124 == null))))?(((((map__82124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82124):map__82124);
var env = map__82124__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82124__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82124__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4126__auto__ = sort_plan;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__82126 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82126,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82126,(1),null);
var G__82129 = env;
var G__82130 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__82129,G__82130) : sort_plan__$1.call(null,G__82129,G__82130));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__82131 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__82131__$1 = (((((!((map__82131 == null))))?(((((map__82131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82131):map__82131);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82131__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82131__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
if(cljs.core.truth_(compute_output)){
return (compute_output.cljs$core$IFn$_invoke$arity$1 ? compute_output.cljs$core$IFn$_invoke$arity$1(env) : compute_output.call(null,env));
} else {
if(cljs.core.truth_(output)){
return output;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No output available",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

}
}
});
com.wsscode.pathom.connect.plan__GT_provides = (function com$wsscode$pathom$connect$plan__GT_provides(env,plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__82133_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__82133_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__82135,plan){
var map__82136 = p__82135;
var map__82136__$1 = (((((!((map__82136 == null))))?(((((map__82136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82136):map__82136);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82136__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82136__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,(function (p1__82134_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
}),p1__82134_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
}));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__82138_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__82138_SHARP_));
}),com.wsscode.pathom.connect.resolve_plan(env));
if(cljs.core.seq(plan)){
var plan_SINGLEQUOTE_ = cljs.core.first(plan);
var out = com.wsscode.pathom.connect.plan__GT_provides(env,plan_SINGLEQUOTE_);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out], null));

com.wsscode.pathom.connect.decrease_path_costs(env,plan);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan_SINGLEQUOTE_,out], null);
} else {
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));

return null;
}
});
/**
 * Returns a set containing all attributes that are expected to participate in path
 *   resolution given a query. This function is intended to help dynamic
 *   resolvers that need to know which attributes are required before doing a call to the
 *   information source. For example, we never want to issue more than one GraphQL query
 *   to the same server at the same query level, but if we just look at the parent query
 *   is not enough; that's because some of the attributes might require other attributes
 *   to be fetched, this function will scan the attributes and figure everything that is
 *   required so you can issue a single request.
 * 
 *   Please note the attribute calculation might depend on the data currently available
 *   in the `::p/entity`, if you are calculating attributes for a different context
 *   you might want to replace some of the entity data.
 * 
 *   This function is intended to be called during resolver code.
 */
com.wsscode.pathom.connect.project_query_attributes = (function com$wsscode$pathom$connect$project_query_attributes(env,query){
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(com.wsscode.pathom.core.lift_placeholders(env,query)));
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__82139,p__82140){
var map__82141 = p__82139;
var map__82141__$1 = (((((!((map__82141 == null))))?(((((map__82141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82141):map__82141);
var acc = map__82141__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82141__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__82142 = p__82140;
var map__82142__$1 = (((((!((map__82142 == null))))?(((((map__82142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82142):map__82142);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82142__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5733__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5733__auto__)){
var plan = temp__5733__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__82145 = plan;
var G__82145__$1 = (((G__82145 == null))?null:cljs.core.first(G__82145));
var G__82145__$2 = (((G__82145__$1 == null))?null:cljs.core.second(G__82145__$1));
var G__82145__$3 = (((G__82145__$2 == null))?null:(com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,G__82145__$2) : com.wsscode.pathom.connect.resolver_data.call(null,env,G__82145__$2)));
if((G__82145__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__82145__$3);
}
})()),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),plan),new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.into,com.wsscode.pathom.connect.plan__GT_provides(env,plan));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.PersistentHashSet.EMPTY], null),children));
});
/**
 * Project query attributes for the parent query. See
 */
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__82146){
var map__82147 = p__82146;
var map__82147__$1 = (((((!((map__82147 == null))))?(((((map__82147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82147):map__82147);
var env = map__82147__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82147__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.project_query_attributes(env,parent_query);
});
/**
 * DEPRECATED: use reader2 instead
 * 
 *   Connect reader, this reader will lookup the given key in the index
 *   to process it, in case the resolver input can't be satisfied it will
 *   do a recursive lookup trying to find the next input.
 * 
 *   I recommend you switch to reader2, which instead plans ahead of time
 *   the full path it will need to cover to go from the current data to
 *   the requested attribute.
 */
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__82152){
var map__82153 = p__82152;
var map__82153__$1 = (((((!((map__82153 == null))))?(((((map__82153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82153):map__82153);
var env = map__82153__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82153__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82153__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5733__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5733__auto__)){
var map__82155 = temp__5733__auto__;
var map__82155__$1 = (((((!((map__82155 == null))))?(((((map__82155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82155):map__82155);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82155__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82155__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__82157 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,s) : com.wsscode.pathom.connect.resolver_data.call(null,env,s));
var map__82157__$1 = (((((!((map__82157 == null))))?(((((map__82157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82157):map__82157);
var resolver = map__82157__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82157__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82157__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82157__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return processing_sequence;
} else {
return and__4115__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv((function (p1__82150_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82150_SHARP_,input);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82149_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__82149_SHARP_,input);
}),processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
}))):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,(function (p1__82151_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__82151_SHARP_], 0));
}));

var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$1,k);
if(cljs.core.sequential_QMARK_(x)){
return com.wsscode.pathom.core.join_seq(env_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,x));
} else {
if((x == null)){
if(cljs.core.contains_QMARK_(response__$1,k)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x),env_SINGLEQUOTE_);

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.serial_resolver_call_batch = (function com$wsscode$pathom$connect$serial_resolver_call_batch(p__82161,e){
var map__82162 = p__82161;
var map__82162__$1 = (((((!((map__82162 == null))))?(((((map__82162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82162):map__82162);
var env = map__82162__$1;
var map__82163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82162__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__82163__$1 = (((((!((map__82163 == null))))?(((((map__82163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82163):map__82163);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82163__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82163__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82162__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__29443__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv((function (p1__82160_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82160_SHARP_,input);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82159_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__82159_SHARP_,input);
}),processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__29442__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__29443__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv((function (p1__82160_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82160_SHARP_,input);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82159_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__82159_SHARP_,input);
}),processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
});
com.wsscode.pathom.connect.serial_cache_resolver_call = (function com$wsscode$pathom$connect$serial_cache_resolver_call(p__82166,e){
var map__82167 = p__82166;
var map__82167__$1 = (((((!((map__82167 == null))))?(((((map__82167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82167):map__82167);
var env = map__82167__$1;
var map__82168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82167__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__82168__$1 = (((((!((map__82168 == null))))?(((((map__82168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82168):map__82168);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82168__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82168__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82167__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var p = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,p], null),(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return processing_sequence;
} else {
return and__4115__auto__;
}
})())){
return com.wsscode.pathom.connect.serial_resolver_call_batch(env,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env,e);
}
}));
});
/**
 * Recommended reader to use with Pathom serial parser.
 * 
 *   This reader uses the connect index to compute a EQL property requirement.
 * 
 *   The process goes as:
 * 
 *   - find possible paths to realize the attribute, given the current available data, generating a plan
 *   - executes the plan
 *   - in case a resolver fails (due to exception, or missing required data) the reader will
 *  try to backtrack and execute another path (if there is one available).
 * 
 *   This only handles sync process, if you return a core.async channel, the channel itself
 *   will be the response. If you need to handle async use `async-reader2`.
 */
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__82175){
var map__82176 = p__82175;
var map__82176__$1 = (((((!((map__82176 == null))))?(((((map__82176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82176):map__82176);
var env = map__82176__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82176__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82176__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82176__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5733__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__82178 = temp__5733__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82178,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82178,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__82184 = plan;
var vec__82185 = G__82184;
var seq__82186 = cljs.core.seq(vec__82185);
var first__82187 = cljs.core.first(seq__82186);
var seq__82186__$1 = cljs.core.next(seq__82186);
var step = first__82187;
var tail = seq__82186__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__82184__$1 = G__82184;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__82213 = G__82184__$1;
var seq__82214 = cljs.core.seq(vec__82213);
var first__82215 = cljs.core.first(seq__82214);
var seq__82214__$1 = cljs.core.next(seq__82214);
var step__$1 = first__82215;
var tail__$1 = seq__82214__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__82216 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82216,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82216,(1),null);
var map__82219 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__82219__$1 = (((((!((map__82219 == null))))?(((((map__82219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82219):map__82219);
var resolver = map__82219__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82219__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82219__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82219__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = ((cljs.core.contains_QMARK_(entity,key_SINGLEQUOTE_))?cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)):(cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__82184__$1,failed_resolvers__$1,out_left__$1,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return processing_sequence;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__29443__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__82184__$1,failed_resolvers__$1,out_left__$1,_,trace_id__29442__auto__,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__82172_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82172_SHARP_,input);
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,_,trace_id__29442__auto__,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__82184__$1,failed_resolvers__$1,out_left__$1,_,trace_id__29442__auto__,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__82171_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__82171_SHARP_,input);
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,_,trace_id__29442__auto__,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__29442__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__29443__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__82184__$1,failed_resolvers__$1,out_left__$1,_,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__82172_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82172_SHARP_,input);
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,_,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__82184__$1,failed_resolvers__$1,out_left__$1,_,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__82171_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__82171_SHARP_,input);
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,_,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e)
));
var response__$1 = (function (){var or__4126__auto__ = response;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__82184__$1,failed_resolvers__$1,out_left__$1,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__82184__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__82173_SHARP_){
var x__4217__auto__ = ((function (){var or__4126__auto__ = p1__82173_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() * (2));
var y__4218__auto__ = max_resolver_weight;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5733__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__82221 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82221,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82221,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__82184__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__82174_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__82174_SHARP_], 0));
});})(G__82184__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__82216,key_SINGLEQUOTE_,resolver_sym,map__82219,map__82219__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__82213,seq__82214,first__82215,seq__82214__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__82184,vec__82185,seq__82186,first__82187,seq__82186__$1,step,tail,failed_resolvers,out_left,key,vec__82178,plan,out,temp__5733__auto__,map__82176,map__82176__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__82225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__82225) : com.wsscode.pathom.core.break_values.call(null,G__82225));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__85992 = tail__$1;
var G__85993 = failed_resolvers__$2;
var G__85994 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__82184__$1 = G__85992;
failed_resolvers__$1 = G__85993;
out_left__$1 = G__85994;
continue;
} else {
return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
} else {
var temp__5733__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__82227 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82227,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82227,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82227,(2),null);
var G__85995 = plan__$1;
var G__85996 = failed_resolvers__$3;
var G__85997 = out_SINGLEQUOTE_;
G__82184__$1 = G__85995;
failed_resolvers__$1 = G__85996;
out_left__$1 = G__85997;
continue;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(tail__$1);
if(and__4115__auto__){
var G__82231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__82231) : com.wsscode.pathom.core.break_values.call(null,G__82231));
} else {
return and__4115__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null));
} else {
}

return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
}
} else {
var temp__5733__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null)));
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__82232 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82232,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82232,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82232,(2),null);
var G__85998 = plan__$1;
var G__85999 = failed_resolvers__$3;
var G__86000 = out_SINGLEQUOTE_;
G__82184__$1 = G__85998;
failed_resolvers__$1 = G__85999;
out_left__$1 = G__86000;
continue;
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));
}

}
} else {
return null;
}
break;
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.map_async_serial = (function com$wsscode$pathom$connect$map_async_serial(f,s){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_82282){
var state_val_82283 = (state_82282[(1)]);
if((state_val_82283 === (7))){
var inst_82277 = (state_82282[(2)]);
var _ = (function (){var statearr_82284 = state_82282;
(statearr_82284[(4)] = cljs.core.rest((state_82282[(4)])));

return statearr_82284;
})();
var state_82282__$1 = state_82282;
var statearr_82285_86001 = state_82282__$1;
(statearr_82285_86001[(2)] = inst_82277);

(statearr_82285_86001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (20))){
var state_82282__$1 = state_82282;
var statearr_82286_86002 = state_82282__$1;
(statearr_82286_86002[(2)] = null);

(statearr_82286_86002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (1))){
var state_82282__$1 = state_82282;
var statearr_82287_86003 = state_82282__$1;
(statearr_82287_86003[(2)] = null);

(statearr_82287_86003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (4))){
var inst_82235 = (state_82282[(2)]);
var state_82282__$1 = state_82282;
var statearr_82288_86004 = state_82282__$1;
(statearr_82288_86004[(2)] = inst_82235);

(statearr_82288_86004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (15))){
var inst_82248 = (state_82282[(7)]);
var inst_82257 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82248);
var state_82282__$1 = state_82282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82282__$1,(18),inst_82257);
} else {
if((state_val_82283 === (21))){
var inst_82265 = (state_82282[(2)]);
var state_82282__$1 = state_82282;
var statearr_82289_86005 = state_82282__$1;
(statearr_82289_86005[(2)] = inst_82265);

(statearr_82289_86005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (13))){
var inst_82243 = (state_82282[(8)]);
var inst_82244 = (state_82282[(9)]);
var inst_82269 = (state_82282[(2)]);
var inst_82270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_82243,inst_82269);
var inst_82271 = cljs.core.next(inst_82244);
var inst_82243__$1 = inst_82270;
var inst_82244__$1 = inst_82271;
var state_82282__$1 = (function (){var statearr_82290 = state_82282;
(statearr_82290[(8)] = inst_82243__$1);

(statearr_82290[(9)] = inst_82244__$1);

return statearr_82290;
})();
var statearr_82291_86006 = state_82282__$1;
(statearr_82291_86006[(2)] = null);

(statearr_82291_86006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (6))){
var inst_82244 = (state_82282[(9)]);
var inst_82246 = (state_82282[(10)]);
var inst_82246__$1 = cljs.core.first(inst_82244);
var state_82282__$1 = (function (){var statearr_82292 = state_82282;
(statearr_82292[(10)] = inst_82246__$1);

return statearr_82292;
})();
if(cljs.core.truth_(inst_82246__$1)){
var statearr_82293_86007 = state_82282__$1;
(statearr_82293_86007[(1)] = (8));

} else {
var statearr_82294_86008 = state_82282__$1;
(statearr_82294_86008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (17))){
var inst_82267 = (state_82282[(2)]);
var state_82282__$1 = state_82282;
var statearr_82295_86009 = state_82282__$1;
(statearr_82295_86009[(2)] = inst_82267);

(statearr_82295_86009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (3))){
var inst_82280 = (state_82282[(2)]);
var state_82282__$1 = state_82282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82282__$1,inst_82280);
} else {
if((state_val_82283 === (12))){
var inst_82248 = (state_82282[(7)]);
var inst_82255 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82248);
var state_82282__$1 = state_82282;
if(cljs.core.truth_(inst_82255)){
var statearr_82296_86010 = state_82282__$1;
(statearr_82296_86010[(1)] = (15));

} else {
var statearr_82297_86011 = state_82282__$1;
(statearr_82297_86011[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (2))){
var _ = (function (){var statearr_82298 = state_82282;
(statearr_82298[(4)] = cljs.core.cons((5),(state_82282[(4)])));

return statearr_82298;
})();
var inst_82241 = cljs.core.PersistentVector.EMPTY;
var inst_82242 = s;
var inst_82243 = inst_82241;
var inst_82244 = inst_82242;
var state_82282__$1 = (function (){var statearr_82299 = state_82282;
(statearr_82299[(8)] = inst_82243);

(statearr_82299[(9)] = inst_82244);

return statearr_82299;
})();
var statearr_82300_86012 = state_82282__$1;
(statearr_82300_86012[(2)] = null);

(statearr_82300_86012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (19))){
var inst_82248 = (state_82282[(7)]);
var state_82282__$1 = state_82282;
var statearr_82301_86013 = state_82282__$1;
(statearr_82301_86013[(2)] = inst_82248);

(statearr_82301_86013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (11))){
var inst_82248 = (state_82282[(7)]);
var state_82282__$1 = state_82282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82282__$1,(14),inst_82248);
} else {
if((state_val_82283 === (9))){
var inst_82243 = (state_82282[(8)]);
var state_82282__$1 = state_82282;
var statearr_82303_86014 = state_82282__$1;
(statearr_82303_86014[(2)] = inst_82243);

(statearr_82303_86014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (5))){
var _ = (function (){var statearr_82304 = state_82282;
(statearr_82304[(4)] = cljs.core.rest((state_82282[(4)])));

return statearr_82304;
})();
var state_82282__$1 = state_82282;
var ex82302 = (state_82282__$1[(2)]);
var statearr_82305_86015 = state_82282__$1;
(statearr_82305_86015[(5)] = ex82302);


var statearr_82306_86016 = state_82282__$1;
(statearr_82306_86016[(1)] = (4));

(statearr_82306_86016[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (14))){
var inst_82252 = (state_82282[(2)]);
var inst_82253 = com.wsscode.async.async_cljs.throw_err(inst_82252);
var state_82282__$1 = state_82282;
var statearr_82307_86017 = state_82282__$1;
(statearr_82307_86017[(2)] = inst_82253);

(statearr_82307_86017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (16))){
var state_82282__$1 = state_82282;
var statearr_82308_86018 = state_82282__$1;
(statearr_82308_86018[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (10))){
var inst_82275 = (state_82282[(2)]);
var state_82282__$1 = state_82282;
var statearr_82310_86019 = state_82282__$1;
(statearr_82310_86019[(2)] = inst_82275);

(statearr_82310_86019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (18))){
var inst_82259 = (state_82282[(2)]);
var inst_82260 = com.wsscode.async.async_cljs.consumer_pair(inst_82259);
var state_82282__$1 = state_82282;
var statearr_82311_86020 = state_82282__$1;
(statearr_82311_86020[(2)] = inst_82260);

(statearr_82311_86020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82283 === (8))){
var inst_82246 = (state_82282[(10)]);
var inst_82248 = (state_82282[(7)]);
var inst_82248__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_82246) : f.call(null,inst_82246));
var inst_82249 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82248__$1);
var state_82282__$1 = (function (){var statearr_82312 = state_82282;
(statearr_82312[(7)] = inst_82248__$1);

return statearr_82312;
})();
if(inst_82249){
var statearr_82313_86021 = state_82282__$1;
(statearr_82313_86021[(1)] = (11));

} else {
var statearr_82314_86022 = state_82282__$1;
(statearr_82314_86022[(1)] = (12));

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
});
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto____0 = (function (){
var statearr_82315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82315[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto__);

(statearr_82315[(1)] = (1));

return statearr_82315;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto____1 = (function (state_82282){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_82282);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82316){var ex__50860__auto__ = e82316;
var statearr_82317_86023 = state_82282;
(statearr_82317_86023[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_82282[(4)]))){
var statearr_82318_86024 = state_82282;
(statearr_82318_86024[(1)] = cljs.core.first((state_82282[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86025 = state_82282;
state_82282 = G__86025;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto__ = function(state_82282){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto____1.call(this,state_82282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82319 = f__50893__auto__();
(statearr_82319[(6)] = c__50892__auto__);

return statearr_82319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__82323){
var map__82324 = p__82323;
var map__82324__$1 = (((((!((map__82324 == null))))?(((((map__82324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82324):map__82324);
var env = map__82324__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82324__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82324__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_82530){
var state_val_82531 = (state_82530[(1)]);
if((state_val_82531 === (65))){
var inst_82480 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82532_86026 = state_82530__$1;
(statearr_82532_86026[(2)] = inst_82480);

(statearr_82532_86026[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (70))){
var inst_82441 = (state_82530[(7)]);
var inst_82486 = cljs.core.contains_QMARK_(inst_82441,k);
var state_82530__$1 = state_82530;
if(inst_82486){
var statearr_82533_86027 = state_82530__$1;
(statearr_82533_86027[(1)] = (73));

} else {
var statearr_82534_86028 = state_82530__$1;
(statearr_82534_86028[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (62))){
var inst_82465 = (state_82530[(2)]);
var inst_82466 = com.wsscode.async.async_cljs.throw_err(inst_82465);
var state_82530__$1 = state_82530;
var statearr_82535_86029 = state_82530__$1;
(statearr_82535_86029[(2)] = inst_82466);

(statearr_82535_86029[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (74))){
var state_82530__$1 = state_82530;
var statearr_82536_86030 = state_82530__$1;
(statearr_82536_86030[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_82536_86030[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (7))){
var inst_82335 = (state_82530[(8)]);
var inst_82339 = (inst_82335 == null);
var inst_82340 = cljs.core.not(inst_82339);
var state_82530__$1 = state_82530;
if(inst_82340){
var statearr_82537_86031 = state_82530__$1;
(statearr_82537_86031[(1)] = (10));

} else {
var statearr_82538_86032 = state_82530__$1;
(statearr_82538_86032[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (59))){
var inst_82461 = (state_82530[(9)]);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(62),inst_82461);
} else {
if((state_val_82531 === (86))){
var inst_82505 = (state_82530[(2)]);
var inst_82506 = com.wsscode.async.async_cljs.consumer_pair(inst_82505);
var state_82530__$1 = state_82530;
var statearr_82539_86033 = state_82530__$1;
(statearr_82539_86033[(2)] = inst_82506);

(statearr_82539_86033[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (20))){
var state_82530__$1 = state_82530;
var statearr_82540_86034 = state_82530__$1;
(statearr_82540_86034[(2)] = false);

(statearr_82540_86034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (72))){
var inst_82520 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82541_86035 = state_82530__$1;
(statearr_82541_86035[(2)] = inst_82520);

(statearr_82541_86035[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (58))){
var inst_82522 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82542_86036 = state_82530__$1;
(statearr_82542_86036[(2)] = inst_82522);

(statearr_82542_86036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (60))){
var inst_82461 = (state_82530[(9)]);
var inst_82468 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82461);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82468)){
var statearr_82543_86037 = state_82530__$1;
(statearr_82543_86037[(1)] = (63));

} else {
var statearr_82544_86038 = state_82530__$1;
(statearr_82544_86038[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (27))){
var inst_82383 = (state_82530[(10)]);
var inst_82384 = (state_82530[(11)]);
var inst_82383__$1 = (state_82530[(2)]);
var inst_82384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_82383__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_82385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82383__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_82386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82383__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_82387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_82383__$1);
var state_82530__$1 = (function (){var statearr_82545 = state_82530;
(statearr_82545[(10)] = inst_82383__$1);

(statearr_82545[(11)] = inst_82384__$1);

(statearr_82545[(12)] = inst_82385);

(statearr_82545[(13)] = inst_82386);

(statearr_82545[(14)] = inst_82387);

return statearr_82545;
})();
if(cljs.core.truth_(inst_82384__$1)){
var statearr_82546_86039 = state_82530__$1;
(statearr_82546_86039[(1)] = (28));

} else {
var statearr_82547_86040 = state_82530__$1;
(statearr_82547_86040[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (1))){
var state_82530__$1 = state_82530;
var statearr_82548_86041 = state_82530__$1;
(statearr_82548_86041[(2)] = null);

(statearr_82548_86041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (69))){
var inst_82478 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82549_86042 = state_82530__$1;
(statearr_82549_86042[(2)] = inst_82478);

(statearr_82549_86042[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (24))){
var inst_82375 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82550_86043 = state_82530__$1;
(statearr_82550_86043[(2)] = inst_82375);

(statearr_82550_86043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (55))){
var inst_82386 = (state_82530[(13)]);
var inst_82358 = (state_82530[(15)]);
var inst_82335 = (state_82530[(8)]);
var inst_82383 = (state_82530[(10)]);
var inst_82441 = (state_82530[(7)]);
var inst_82384 = (state_82530[(11)]);
var inst_82385 = (state_82530[(12)]);
var inst_82387 = (state_82530[(14)]);
var inst_82359 = (state_82530[(16)]);
var inst_82360 = (state_82530[(17)]);
var inst_82440 = (state_82530[(18)]);
var inst_82457 = (state_82530[(19)]);
var inst_82454 = (state_82530[(2)]);
var inst_82455 = (function (){var input = inst_82386;
var map__82337 = inst_82358;
var temp__5733__auto__ = inst_82335;
var map__82361 = inst_82383;
var response = inst_82441;
var cache_QMARK_ = inst_82384;
var batch_QMARK_ = inst_82385;
var env__$1 = inst_82387;
var e = inst_82359;
var s = inst_82360;
var resolver = inst_82383;
var env_SINGLEQUOTE_ = inst_82440;
return (function (p1__82322_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__82322_SHARP_], 0));
});
})();
var inst_82456 = com.wsscode.pathom.core.swap_entity_BANG_(inst_82440,inst_82455);
var inst_82457__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82441,k);
var inst_82458 = cljs.core.sequential_QMARK_(inst_82457__$1);
var state_82530__$1 = (function (){var statearr_82551 = state_82530;
(statearr_82551[(20)] = inst_82454);

(statearr_82551[(21)] = inst_82456);

(statearr_82551[(19)] = inst_82457__$1);

return statearr_82551;
})();
if(inst_82458){
var statearr_82552_86044 = state_82530__$1;
(statearr_82552_86044[(1)] = (56));

} else {
var statearr_82553_86045 = state_82530__$1;
(statearr_82553_86045[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (85))){
var inst_82513 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82554_86046 = state_82530__$1;
(statearr_82554_86046[(2)] = inst_82513);

(statearr_82554_86046[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (39))){
var inst_82393 = (state_82530[(22)]);
var state_82530__$1 = state_82530;
var statearr_82555_86047 = state_82530__$1;
(statearr_82555_86047[(2)] = inst_82393);

(statearr_82555_86047[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (88))){
var state_82530__$1 = state_82530;
var statearr_82556_86048 = state_82530__$1;
(statearr_82556_86048[(2)] = null);

(statearr_82556_86048[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (46))){
var inst_82416 = (state_82530[(23)]);
var inst_82425 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82416);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(49),inst_82425);
} else {
if((state_val_82531 === (4))){
var inst_82326 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82557_86049 = state_82530__$1;
(statearr_82557_86049[(2)] = inst_82326);

(statearr_82557_86049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (77))){
var state_82530__$1 = state_82530;
var statearr_82558_86050 = state_82530__$1;
(statearr_82558_86050[(2)] = null);

(statearr_82558_86050[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (54))){
var state_82530__$1 = state_82530;
var statearr_82559_86051 = state_82530__$1;
(statearr_82559_86051[(2)] = null);

(statearr_82559_86051[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (15))){
var inst_82350 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82560_86052 = state_82530__$1;
(statearr_82560_86052[(2)] = inst_82350);

(statearr_82560_86052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (48))){
var inst_82435 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82561_86053 = state_82530__$1;
(statearr_82561_86053[(2)] = inst_82435);

(statearr_82561_86053[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (50))){
var inst_82416 = (state_82530[(23)]);
var state_82530__$1 = state_82530;
var statearr_82562_86054 = state_82530__$1;
(statearr_82562_86054[(2)] = inst_82416);

(statearr_82562_86054[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (75))){
var inst_82490 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82563_86055 = state_82530__$1;
(statearr_82563_86055[(2)] = inst_82490);

(statearr_82563_86055[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (21))){
var inst_82378 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82378)){
var statearr_82564_86056 = state_82530__$1;
(statearr_82564_86056[(1)] = (25));

} else {
var statearr_82565_86057 = state_82530__$1;
(statearr_82565_86057[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (31))){
var inst_82393 = (state_82530[(22)]);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(34),inst_82393);
} else {
if((state_val_82531 === (32))){
var inst_82393 = (state_82530[(22)]);
var inst_82400 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82393);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82400)){
var statearr_82566_86058 = state_82530__$1;
(statearr_82566_86058[(1)] = (35));

} else {
var statearr_82567_86059 = state_82530__$1;
(statearr_82567_86059[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (40))){
var state_82530__$1 = state_82530;
var statearr_82568_86060 = state_82530__$1;
(statearr_82568_86060[(2)] = null);

(statearr_82568_86060[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (56))){
var inst_82457 = (state_82530[(19)]);
var inst_82440 = (state_82530[(18)]);
var inst_82461 = (state_82530[(9)]);
var inst_82460 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_82457);
var inst_82461__$1 = com.wsscode.pathom.core.join_seq(inst_82440,inst_82460);
var inst_82462 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82461__$1);
var state_82530__$1 = (function (){var statearr_82569 = state_82530;
(statearr_82569[(9)] = inst_82461__$1);

return statearr_82569;
})();
if(inst_82462){
var statearr_82570_86061 = state_82530__$1;
(statearr_82570_86061[(1)] = (59));

} else {
var statearr_82571_86062 = state_82530__$1;
(statearr_82571_86062[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (33))){
var inst_82414 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82572_86063 = state_82530__$1;
(statearr_82572_86063[(2)] = inst_82414);

(statearr_82572_86063[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (13))){
var state_82530__$1 = state_82530;
var statearr_82573_86064 = state_82530__$1;
(statearr_82573_86064[(2)] = true);

(statearr_82573_86064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (22))){
var state_82530__$1 = state_82530;
var statearr_82574_86065 = state_82530__$1;
(statearr_82574_86065[(2)] = true);

(statearr_82574_86065[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (36))){
var state_82530__$1 = state_82530;
var statearr_82575_86066 = state_82530__$1;
(statearr_82575_86066[(1)] = (39));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (41))){
var inst_82410 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82577_86069 = state_82530__$1;
(statearr_82577_86069[(2)] = inst_82410);

(statearr_82577_86069[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (89))){
var inst_82511 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82578_86070 = state_82530__$1;
(statearr_82578_86070[(2)] = inst_82511);

(statearr_82578_86070[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (43))){
var inst_82416 = (state_82530[(23)]);
var inst_82423 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82416);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82423)){
var statearr_82579_86073 = state_82530__$1;
(statearr_82579_86073[(1)] = (46));

} else {
var statearr_82580_86074 = state_82530__$1;
(statearr_82580_86074[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (61))){
var inst_82482 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82581_86077 = state_82530__$1;
(statearr_82581_86077[(2)] = inst_82482);

(statearr_82581_86077[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (29))){
var inst_82387 = (state_82530[(14)]);
var inst_82359 = (state_82530[(16)]);
var inst_82416 = (state_82530[(23)]);
var inst_82416__$1 = com.wsscode.pathom.connect.call_resolver(inst_82387,inst_82359);
var inst_82417 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82416__$1);
var state_82530__$1 = (function (){var statearr_82582 = state_82530;
(statearr_82582[(23)] = inst_82416__$1);

return statearr_82582;
})();
if(inst_82417){
var statearr_82583_86080 = state_82530__$1;
(statearr_82583_86080[(1)] = (42));

} else {
var statearr_82584_86081 = state_82530__$1;
(statearr_82584_86081[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (44))){
var inst_82437 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82585_86082 = state_82530__$1;
(statearr_82585_86082[(2)] = inst_82437);

(statearr_82585_86082[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (6))){
var inst_82335 = (state_82530[(8)]);
var inst_82334 = (state_82530[(2)]);
var inst_82335__$1 = com.wsscode.async.async_cljs.throw_err(inst_82334);
var state_82530__$1 = (function (){var statearr_82586 = state_82530;
(statearr_82586[(8)] = inst_82335__$1);

return statearr_82586;
})();
if(cljs.core.truth_(inst_82335__$1)){
var statearr_82587_86083 = state_82530__$1;
(statearr_82587_86083[(1)] = (7));

} else {
var statearr_82588_86084 = state_82530__$1;
(statearr_82588_86084[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (28))){
var inst_82360 = (state_82530[(17)]);
var inst_82359 = (state_82530[(16)]);
var inst_82386 = (state_82530[(13)]);
var inst_82358 = (state_82530[(15)]);
var inst_82335 = (state_82530[(8)]);
var inst_82383 = (state_82530[(10)]);
var inst_82384 = (state_82530[(11)]);
var inst_82385 = (state_82530[(12)]);
var inst_82387 = (state_82530[(14)]);
var inst_82393 = (state_82530[(22)]);
var inst_82389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82390 = [inst_82360,inst_82359,p];
var inst_82391 = (new cljs.core.PersistentVector(null,3,(5),inst_82389,inst_82390,null));
var inst_82392 = (function (){var input = inst_82386;
var map__82337 = inst_82358;
var temp__5733__auto__ = inst_82335;
var map__82361 = inst_82383;
var cache_QMARK_ = inst_82384;
var batch_QMARK_ = inst_82385;
var env__$1 = inst_82387;
var e = inst_82359;
var s = inst_82360;
var resolver = inst_82383;
return (function (){
var c__50892__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_82662){
var state_val_82663 = (state_82662[(1)]);
if((state_val_82663 === (7))){
var inst_82595 = (state_82662[(7)]);
var state_82662__$1 = state_82662;
var statearr_82664_86089 = state_82662__$1;
(statearr_82664_86089[(2)] = inst_82595);

(statearr_82664_86089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (20))){
var inst_82619 = (state_82662[(2)]);
var inst_82620 = com.wsscode.async.async_cljs.consumer_pair(inst_82619);
var state_82662__$1 = state_82662;
var statearr_82665_86091 = state_82662__$1;
(statearr_82665_86091[(2)] = inst_82620);

(statearr_82665_86091[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (27))){
var inst_82638 = (state_82662[(2)]);
var inst_82639 = com.wsscode.async.async_cljs.throw_err(inst_82638);
var state_82662__$1 = state_82662;
var statearr_82666_86092 = state_82662__$1;
(statearr_82666_86092[(2)] = inst_82639);

(statearr_82666_86092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (1))){
var state_82662__$1 = state_82662;
var statearr_82667_86093 = state_82662__$1;
(statearr_82667_86093[(2)] = null);

(statearr_82667_86093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (24))){
var inst_82634 = (state_82662[(8)]);
var state_82662__$1 = state_82662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82662__$1,(27),inst_82634);
} else {
if((state_val_82663 === (4))){
var inst_82589 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
var statearr_82668_86098 = state_82662__$1;
(statearr_82668_86098[(2)] = inst_82589);

(statearr_82668_86098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (15))){
var inst_82607 = (state_82662[(9)]);
var inst_82629 = (state_82662[(2)]);
var inst_82630 = cljs.core.zipmap(inst_82607,inst_82629);
var inst_82631 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_82630);
var inst_82632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82630,e);
var state_82662__$1 = (function (){var statearr_82669 = state_82662;
(statearr_82669[(10)] = inst_82631);

return statearr_82669;
})();
var statearr_82670_86102 = state_82662__$1;
(statearr_82670_86102[(2)] = inst_82632);

(statearr_82670_86102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (21))){
var inst_82608 = (state_82662[(11)]);
var state_82662__$1 = state_82662;
var statearr_82671_86105 = state_82662__$1;
(statearr_82671_86105[(2)] = inst_82608);

(statearr_82671_86105[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (31))){
var inst_82645 = (state_82662[(2)]);
var inst_82646 = com.wsscode.async.async_cljs.consumer_pair(inst_82645);
var state_82662__$1 = state_82662;
var statearr_82672_86106 = state_82662__$1;
(statearr_82672_86106[(2)] = inst_82646);

(statearr_82672_86106[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (32))){
var inst_82634 = (state_82662[(8)]);
var state_82662__$1 = state_82662;
var statearr_82673_86107 = state_82662__$1;
(statearr_82673_86107[(2)] = inst_82634);

(statearr_82673_86107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (33))){
var state_82662__$1 = state_82662;
var statearr_82674_86109 = state_82662__$1;
(statearr_82674_86109[(2)] = null);

(statearr_82674_86109[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (13))){
var inst_82608 = (state_82662[(11)]);
var state_82662__$1 = state_82662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82662__$1,(16),inst_82608);
} else {
if((state_val_82663 === (22))){
var state_82662__$1 = state_82662;
var statearr_82675_86110 = state_82662__$1;
(statearr_82675_86110[(2)] = null);

(statearr_82675_86110[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (29))){
var state_82662__$1 = state_82662;
var statearr_82676_86111 = state_82662__$1;
(statearr_82676_86111[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (6))){
var state_82662__$1 = state_82662;
var statearr_82678_86112 = state_82662__$1;
(statearr_82678_86112[(2)] = processing_sequence);

(statearr_82678_86112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (28))){
var inst_82634 = (state_82662[(8)]);
var inst_82643 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82634);
var state_82662__$1 = state_82662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82662__$1,(31),inst_82643);
} else {
if((state_val_82663 === (25))){
var inst_82634 = (state_82662[(8)]);
var inst_82641 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82634);
var state_82662__$1 = state_82662;
if(cljs.core.truth_(inst_82641)){
var statearr_82679_86113 = state_82662__$1;
(statearr_82679_86113[(1)] = (28));

} else {
var statearr_82680_86114 = state_82662__$1;
(statearr_82680_86114[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (34))){
var inst_82651 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
var statearr_82681_86115 = state_82662__$1;
(statearr_82681_86115[(2)] = inst_82651);

(statearr_82681_86115[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (17))){
var inst_82608 = (state_82662[(11)]);
var inst_82617 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82608);
var state_82662__$1 = state_82662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82662__$1,(20),inst_82617);
} else {
if((state_val_82663 === (3))){
var inst_82660 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82662__$1,inst_82660);
} else {
if((state_val_82663 === (12))){
var inst_82601 = (state_82662[(12)]);
var inst_82607 = (state_82662[(9)]);
var inst_82608 = (state_82662[(11)]);
var inst_82605 = (state_82662[(2)]);
var inst_82606 = com.wsscode.async.async_cljs.throw_err(inst_82605);
var inst_82607__$1 = cljs.core.filterv(inst_82601,inst_82606);
var inst_82608__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_82607__$1);
var inst_82609 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82608__$1);
var state_82662__$1 = (function (){var statearr_82682 = state_82662;
(statearr_82682[(9)] = inst_82607__$1);

(statearr_82682[(11)] = inst_82608__$1);

return statearr_82682;
})();
if(inst_82609){
var statearr_82683_86116 = state_82662__$1;
(statearr_82683_86116[(1)] = (13));

} else {
var statearr_82684_86117 = state_82662__$1;
(statearr_82684_86117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (2))){
var inst_82595 = (state_82662[(7)]);
var _ = (function (){var statearr_82685 = state_82662;
(statearr_82685[(4)] = cljs.core.cons((5),(state_82662[(4)])));

return statearr_82685;
})();
var inst_82595__$1 = batch_QMARK_;
var state_82662__$1 = (function (){var statearr_82686 = state_82662;
(statearr_82686[(7)] = inst_82595__$1);

return statearr_82686;
})();
if(cljs.core.truth_(inst_82595__$1)){
var statearr_82687_86118 = state_82662__$1;
(statearr_82687_86118[(1)] = (6));

} else {
var statearr_82688_86119 = state_82662__$1;
(statearr_82688_86119[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (23))){
var inst_82625 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
var statearr_82689_86120 = state_82662__$1;
(statearr_82689_86120[(2)] = inst_82625);

(statearr_82689_86120[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (19))){
var inst_82627 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
var statearr_82690_86121 = state_82662__$1;
(statearr_82690_86121[(2)] = inst_82627);

(statearr_82690_86121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (11))){
var inst_82657 = (state_82662[(2)]);
var _ = (function (){var statearr_82692 = state_82662;
(statearr_82692[(4)] = cljs.core.rest((state_82662[(4)])));

return statearr_82692;
})();
var state_82662__$1 = state_82662;
var statearr_82693_86122 = state_82662__$1;
(statearr_82693_86122[(2)] = inst_82657);

(statearr_82693_86122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (9))){
var inst_82601 = (function (){return (function (p1__82321_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82321_SHARP_,input);
});
})();
var inst_82602 = (function (){return (function (p1__82320_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__82320_SHARP_,input);
});
})();
var inst_82603 = com.wsscode.pathom.connect.map_async_serial(inst_82602,processing_sequence);
var state_82662__$1 = (function (){var statearr_82694 = state_82662;
(statearr_82694[(12)] = inst_82601);

return statearr_82694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82662__$1,(12),inst_82603);
} else {
if((state_val_82663 === (5))){
var _ = (function (){var statearr_82695 = state_82662;
(statearr_82695[(4)] = cljs.core.rest((state_82662[(4)])));

return statearr_82695;
})();
var state_82662__$1 = state_82662;
var ex82691 = (state_82662__$1[(2)]);
var statearr_82696_86123 = state_82662__$1;
(statearr_82696_86123[(5)] = ex82691);


var statearr_82697_86124 = state_82662__$1;
(statearr_82697_86124[(1)] = (4));

(statearr_82697_86124[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (14))){
var inst_82608 = (state_82662[(11)]);
var inst_82615 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82608);
var state_82662__$1 = state_82662;
if(cljs.core.truth_(inst_82615)){
var statearr_82698_86125 = state_82662__$1;
(statearr_82698_86125[(1)] = (17));

} else {
var statearr_82699_86126 = state_82662__$1;
(statearr_82699_86126[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (26))){
var inst_82655 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
var statearr_82700_86127 = state_82662__$1;
(statearr_82700_86127[(2)] = inst_82655);

(statearr_82700_86127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (16))){
var inst_82612 = (state_82662[(2)]);
var inst_82613 = com.wsscode.async.async_cljs.throw_err(inst_82612);
var state_82662__$1 = state_82662;
var statearr_82701_86128 = state_82662__$1;
(statearr_82701_86128[(2)] = inst_82613);

(statearr_82701_86128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (30))){
var inst_82653 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
var statearr_82702_86129 = state_82662__$1;
(statearr_82702_86129[(2)] = inst_82653);

(statearr_82702_86129[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (10))){
var inst_82634 = (state_82662[(8)]);
var inst_82634__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_82635 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82634__$1);
var state_82662__$1 = (function (){var statearr_82703 = state_82662;
(statearr_82703[(8)] = inst_82634__$1);

return statearr_82703;
})();
if(inst_82635){
var statearr_82704_86156 = state_82662__$1;
(statearr_82704_86156[(1)] = (24));

} else {
var statearr_82705_86157 = state_82662__$1;
(statearr_82705_86157[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (18))){
var state_82662__$1 = state_82662;
var statearr_82706_86158 = state_82662__$1;
(statearr_82706_86158[(1)] = (21));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82663 === (8))){
var inst_82599 = (state_82662[(2)]);
var state_82662__$1 = state_82662;
if(cljs.core.truth_(inst_82599)){
var statearr_82708_86159 = state_82662__$1;
(statearr_82708_86159[(1)] = (9));

} else {
var statearr_82709_86160 = state_82662__$1;
(statearr_82709_86160[(1)] = (10));

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
});
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____0 = (function (){
var statearr_82710 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82710[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__);

(statearr_82710[(1)] = (1));

return statearr_82710;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____1 = (function (state_82662){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_82662);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82711){var ex__50860__auto__ = e82711;
var statearr_82712_86161 = state_82662;
(statearr_82712_86161[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_82662[(4)]))){
var statearr_82713_86162 = state_82662;
(statearr_82713_86162[(1)] = cljs.core.first((state_82662[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86163 = state_82662;
state_82662 = G__86163;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__ = function(state_82662){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____1.call(this,state_82662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82714 = f__50893__auto__();
(statearr_82714[(6)] = c__50892__auto____$1);

return statearr_82714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto____$1;
});
})();
var inst_82393__$1 = com.wsscode.pathom.core.cached_async(inst_82387,inst_82391,inst_82392);
var inst_82394 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82393__$1);
var state_82530__$1 = (function (){var statearr_82715 = state_82530;
(statearr_82715[(22)] = inst_82393__$1);

return statearr_82715;
})();
if(inst_82394){
var statearr_82716_86170 = state_82530__$1;
(statearr_82716_86170[(1)] = (31));

} else {
var statearr_82717_86171 = state_82530__$1;
(statearr_82717_86171[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (64))){
var state_82530__$1 = state_82530;
var statearr_82718_86173 = state_82530__$1;
(statearr_82718_86173[(1)] = (67));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (51))){
var state_82530__$1 = state_82530;
var statearr_82720_86174 = state_82530__$1;
(statearr_82720_86174[(2)] = null);

(statearr_82720_86174[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (25))){
var inst_82362 = (state_82530[(24)]);
var inst_82380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_82362);
var state_82530__$1 = state_82530;
var statearr_82721_86177 = state_82530__$1;
(statearr_82721_86177[(2)] = inst_82380);

(statearr_82721_86177[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (34))){
var inst_82397 = (state_82530[(2)]);
var inst_82398 = com.wsscode.async.async_cljs.throw_err(inst_82397);
var state_82530__$1 = state_82530;
var statearr_82722_86178 = state_82530__$1;
(statearr_82722_86178[(2)] = inst_82398);

(statearr_82722_86178[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (17))){
var inst_82335 = (state_82530[(8)]);
var state_82530__$1 = state_82530;
var statearr_82723_86179 = state_82530__$1;
(statearr_82723_86179[(2)] = inst_82335);

(statearr_82723_86179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (3))){
var inst_82528 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82530__$1,inst_82528);
} else {
if((state_val_82531 === (12))){
var inst_82353 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82353)){
var statearr_82724_86183 = state_82530__$1;
(statearr_82724_86183[(1)] = (16));

} else {
var statearr_82725_86184 = state_82530__$1;
(statearr_82725_86184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (2))){
var _ = (function (){var statearr_82726 = state_82530;
(statearr_82726[(4)] = cljs.core.cons((5),(state_82530[(4)])));

return statearr_82726;
})();
var inst_82332 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(6),inst_82332);
} else {
if((state_val_82531 === (66))){
var inst_82472 = (state_82530[(2)]);
var inst_82473 = com.wsscode.async.async_cljs.consumer_pair(inst_82472);
var state_82530__$1 = state_82530;
var statearr_82727_86185 = state_82530__$1;
(statearr_82727_86185[(2)] = inst_82473);

(statearr_82727_86185[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (23))){
var state_82530__$1 = state_82530;
var statearr_82728_86186 = state_82530__$1;
(statearr_82728_86186[(2)] = false);

(statearr_82728_86186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (47))){
var state_82530__$1 = state_82530;
var statearr_82729_86187 = state_82530__$1;
(statearr_82729_86187[(1)] = (50));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (35))){
var inst_82393 = (state_82530[(22)]);
var inst_82402 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82393);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(38),inst_82402);
} else {
if((state_val_82531 === (82))){
var inst_82498 = (state_82530[(2)]);
var inst_82499 = com.wsscode.async.async_cljs.throw_err(inst_82498);
var state_82530__$1 = state_82530;
var statearr_82731_86188 = state_82530__$1;
(statearr_82731_86188[(2)] = inst_82499);

(statearr_82731_86188[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (76))){
var inst_82457 = (state_82530[(19)]);
var inst_82440 = (state_82530[(18)]);
var inst_82494 = (state_82530[(25)]);
var inst_82493 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_82457);
var inst_82494__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_82493,inst_82440);
var inst_82495 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82494__$1);
var state_82530__$1 = (function (){var statearr_82732 = state_82530;
(statearr_82732[(25)] = inst_82494__$1);

return statearr_82732;
})();
if(inst_82495){
var statearr_82733_86189 = state_82530__$1;
(statearr_82733_86189[(1)] = (79));

} else {
var statearr_82734_86190 = state_82530__$1;
(statearr_82734_86190[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (19))){
var inst_82362 = (state_82530[(24)]);
var inst_82367 = inst_82362.cljs$lang$protocol_mask$partition0$;
var inst_82368 = (inst_82367 & (64));
var inst_82369 = inst_82362.cljs$core$ISeq$;
var inst_82370 = (cljs.core.PROTOCOL_SENTINEL === inst_82369);
var inst_82371 = ((inst_82368) || (inst_82370));
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82371)){
var statearr_82735_86191 = state_82530__$1;
(statearr_82735_86191[(1)] = (22));

} else {
var statearr_82736_86192 = state_82530__$1;
(statearr_82736_86192[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (57))){
var inst_82457 = (state_82530[(19)]);
var inst_82484 = (inst_82457 == null);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82484)){
var statearr_82737_86193 = state_82530__$1;
(statearr_82737_86193[(1)] = (70));

} else {
var statearr_82738_86194 = state_82530__$1;
(statearr_82738_86194[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (68))){
var state_82530__$1 = state_82530;
var statearr_82739_86195 = state_82530__$1;
(statearr_82739_86195[(2)] = null);

(statearr_82739_86195[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (11))){
var state_82530__$1 = state_82530;
var statearr_82741_86196 = state_82530__$1;
(statearr_82741_86196[(2)] = false);

(statearr_82741_86196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (9))){
var inst_82525 = (state_82530[(2)]);
var _ = (function (){var statearr_82742 = state_82530;
(statearr_82742[(4)] = cljs.core.rest((state_82530[(4)])));

return statearr_82742;
})();
var state_82530__$1 = state_82530;
var statearr_82743_86203 = state_82530__$1;
(statearr_82743_86203[(2)] = inst_82525);

(statearr_82743_86203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (5))){
var _ = (function (){var statearr_82744 = state_82530;
(statearr_82744[(4)] = cljs.core.rest((state_82530[(4)])));

return statearr_82744;
})();
var state_82530__$1 = state_82530;
var ex82740 = (state_82530__$1[(2)]);
var statearr_82745_86204 = state_82530__$1;
(statearr_82745_86204[(5)] = ex82740);


var statearr_82746_86205 = state_82530__$1;
(statearr_82746_86205[(1)] = (4));

(statearr_82746_86205[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (83))){
var inst_82494 = (state_82530[(25)]);
var inst_82503 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82494);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(86),inst_82503);
} else {
if((state_val_82531 === (14))){
var state_82530__$1 = state_82530;
var statearr_82747_86206 = state_82530__$1;
(statearr_82747_86206[(2)] = false);

(statearr_82747_86206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (45))){
var inst_82420 = (state_82530[(2)]);
var inst_82421 = com.wsscode.async.async_cljs.throw_err(inst_82420);
var state_82530__$1 = state_82530;
var statearr_82748_86207 = state_82530__$1;
(statearr_82748_86207[(2)] = inst_82421);

(statearr_82748_86207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (53))){
var inst_82360 = (state_82530[(17)]);
var inst_82441 = (state_82530[(7)]);
var inst_82447 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_82448 = [inst_82360,inst_82441];
var inst_82449 = cljs.core.PersistentHashMap.fromArrays(inst_82447,inst_82448);
var inst_82450 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_82449);
var inst_82451 = (function(){throw inst_82450})();
var state_82530__$1 = state_82530;
var statearr_82749_86208 = state_82530__$1;
(statearr_82749_86208[(2)] = inst_82451);

(statearr_82749_86208[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (78))){
var inst_82518 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82750_86209 = state_82530__$1;
(statearr_82750_86209[(2)] = inst_82518);

(statearr_82750_86209[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (26))){
var inst_82362 = (state_82530[(24)]);
var state_82530__$1 = state_82530;
var statearr_82751_86210 = state_82530__$1;
(statearr_82751_86210[(2)] = inst_82362);

(statearr_82751_86210[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (16))){
var inst_82335 = (state_82530[(8)]);
var inst_82355 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_82335);
var state_82530__$1 = state_82530;
var statearr_82752_86211 = state_82530__$1;
(statearr_82752_86211[(2)] = inst_82355);

(statearr_82752_86211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (81))){
var inst_82515 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82753_86212 = state_82530__$1;
(statearr_82753_86212[(2)] = inst_82515);

(statearr_82753_86212[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (79))){
var inst_82494 = (state_82530[(25)]);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(82),inst_82494);
} else {
if((state_val_82531 === (38))){
var inst_82404 = (state_82530[(2)]);
var inst_82405 = com.wsscode.async.async_cljs.consumer_pair(inst_82404);
var state_82530__$1 = state_82530;
var statearr_82754_86213 = state_82530__$1;
(statearr_82754_86213[(2)] = inst_82405);

(statearr_82754_86213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (87))){
var inst_82494 = (state_82530[(25)]);
var state_82530__$1 = state_82530;
var statearr_82755_86214 = state_82530__$1;
(statearr_82755_86214[(2)] = inst_82494);

(statearr_82755_86214[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (30))){
var inst_82387 = (state_82530[(14)]);
var inst_82441 = (state_82530[(7)]);
var inst_82439 = (state_82530[(2)]);
var inst_82440 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_82439,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_82387);
var inst_82441__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_82439,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_82442 = (inst_82441__$1 == null);
var inst_82443 = cljs.core.map_QMARK_(inst_82441__$1);
var inst_82444 = ((inst_82442) || (inst_82443));
var inst_82445 = cljs.core.not(inst_82444);
var state_82530__$1 = (function (){var statearr_82756 = state_82530;
(statearr_82756[(18)] = inst_82440);

(statearr_82756[(7)] = inst_82441__$1);

return statearr_82756;
})();
if(inst_82445){
var statearr_82757_86221 = state_82530__$1;
(statearr_82757_86221[(1)] = (53));

} else {
var statearr_82758_86222 = state_82530__$1;
(statearr_82758_86222[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (73))){
var inst_82457 = (state_82530[(19)]);
var state_82530__$1 = state_82530;
var statearr_82759_86223 = state_82530__$1;
(statearr_82759_86223[(2)] = inst_82457);

(statearr_82759_86223[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (10))){
var inst_82335 = (state_82530[(8)]);
var inst_82342 = inst_82335.cljs$lang$protocol_mask$partition0$;
var inst_82343 = (inst_82342 & (64));
var inst_82344 = inst_82335.cljs$core$ISeq$;
var inst_82345 = (cljs.core.PROTOCOL_SENTINEL === inst_82344);
var inst_82346 = ((inst_82343) || (inst_82345));
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82346)){
var statearr_82760_86224 = state_82530__$1;
(statearr_82760_86224[(1)] = (13));

} else {
var statearr_82761_86225 = state_82530__$1;
(statearr_82761_86225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (18))){
var inst_82358 = (state_82530[(15)]);
var inst_82360 = (state_82530[(17)]);
var inst_82362 = (state_82530[(24)]);
var inst_82358__$1 = (state_82530[(2)]);
var inst_82359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82358__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_82360__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82358__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_82362__$1 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,inst_82360__$1) : com.wsscode.pathom.connect.resolver_data.call(null,env,inst_82360__$1));
var inst_82364 = (inst_82362__$1 == null);
var inst_82365 = cljs.core.not(inst_82364);
var state_82530__$1 = (function (){var statearr_82762 = state_82530;
(statearr_82762[(15)] = inst_82358__$1);

(statearr_82762[(16)] = inst_82359);

(statearr_82762[(17)] = inst_82360__$1);

(statearr_82762[(24)] = inst_82362__$1);

return statearr_82762;
})();
if(inst_82365){
var statearr_82763_86226 = state_82530__$1;
(statearr_82763_86226[(1)] = (19));

} else {
var statearr_82764_86227 = state_82530__$1;
(statearr_82764_86227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (52))){
var inst_82433 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82765_86228 = state_82530__$1;
(statearr_82765_86228[(2)] = inst_82433);

(statearr_82765_86228[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (67))){
var inst_82461 = (state_82530[(9)]);
var state_82530__$1 = state_82530;
var statearr_82766_86230 = state_82530__$1;
(statearr_82766_86230[(2)] = inst_82461);

(statearr_82766_86230[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (71))){
var state_82530__$1 = state_82530;
var statearr_82767_86232 = state_82530__$1;
(statearr_82767_86232[(1)] = (76));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (42))){
var inst_82416 = (state_82530[(23)]);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(45),inst_82416);
} else {
if((state_val_82531 === (80))){
var inst_82494 = (state_82530[(25)]);
var inst_82501 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82494);
var state_82530__$1 = state_82530;
if(cljs.core.truth_(inst_82501)){
var statearr_82769_86233 = state_82530__$1;
(statearr_82769_86233[(1)] = (83));

} else {
var statearr_82770_86234 = state_82530__$1;
(statearr_82770_86234[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (37))){
var inst_82412 = (state_82530[(2)]);
var state_82530__$1 = state_82530;
var statearr_82771_86235 = state_82530__$1;
(statearr_82771_86235[(2)] = inst_82412);

(statearr_82771_86235[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (63))){
var inst_82461 = (state_82530[(9)]);
var inst_82470 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82461);
var state_82530__$1 = state_82530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82530__$1,(66),inst_82470);
} else {
if((state_val_82531 === (8))){
var state_82530__$1 = state_82530;
var statearr_82772_86236 = state_82530__$1;
(statearr_82772_86236[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_82772_86236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (49))){
var inst_82427 = (state_82530[(2)]);
var inst_82428 = com.wsscode.async.async_cljs.consumer_pair(inst_82427);
var state_82530__$1 = state_82530;
var statearr_82773_86237 = state_82530__$1;
(statearr_82773_86237[(2)] = inst_82428);

(statearr_82773_86237[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82531 === (84))){
var state_82530__$1 = state_82530;
var statearr_82774_86240 = state_82530__$1;
(statearr_82774_86240[(1)] = (87));



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
});
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____0 = (function (){
var statearr_82776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82776[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__);

(statearr_82776[(1)] = (1));

return statearr_82776;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____1 = (function (state_82530){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_82530);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82777){var ex__50860__auto__ = e82777;
var statearr_82778_86243 = state_82530;
(statearr_82778_86243[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_82530[(4)]))){
var statearr_82779_86244 = state_82530;
(statearr_82779_86244[(1)] = cljs.core.first((state_82530[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86245 = state_82530;
state_82530 = G__86245;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__ = function(state_82530){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____1.call(this,state_82530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82780 = f__50893__auto__();
(statearr_82780[(6)] = c__50892__auto__);

return statearr_82780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_call_batch = (function com$wsscode$pathom$connect$async_read_call_batch(p__82783,e,trace_data,input){
var map__82784 = p__82783;
var map__82784__$1 = (((((!((map__82784 == null))))?(((((map__82784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82784):map__82784);
var env = map__82784__$1;
var map__82785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82784__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__82785__$1 = (((((!((map__82785 == null))))?(((((map__82785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82785):map__82785);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82785__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82784__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_82902){
var state_val_82903 = (state_82902[(1)]);
if((state_val_82903 === (7))){
var inst_82845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_82846 = com.wsscode.pathom.trace.trace(env,inst_82845);
var inst_82847 = (function (){var _ = inst_82846;
return (function (p1__82782_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82782_SHARP_,input);
});
})();
var inst_82848 = (function (){var _ = inst_82846;
return (function (p1__82781_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__82781_SHARP_,input);
});
})();
var inst_82849 = com.wsscode.pathom.connect.map_async_serial(inst_82848,processing_sequence);
var state_82902__$1 = (function (){var statearr_82904 = state_82902;
(statearr_82904[(7)] = inst_82847);

return statearr_82904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82902__$1,(21),inst_82849);
} else {
if((state_val_82903 === (20))){
var inst_82829 = (state_82902[(2)]);
var state_82902__$1 = state_82902;
var statearr_82905_86250 = state_82902__$1;
(statearr_82905_86250[(2)] = inst_82829);

(statearr_82905_86250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (27))){
var state_82902__$1 = state_82902;
var statearr_82906_86252 = state_82902__$1;
(statearr_82906_86252[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (1))){
var state_82902__$1 = state_82902;
var statearr_82908_86253 = state_82902__$1;
(statearr_82908_86253[(2)] = null);

(statearr_82908_86253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (24))){
var inst_82854 = (state_82902[(8)]);
var inst_82880 = (state_82902[(2)]);
var inst_82881 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_82882 = cljs.core.count(inst_82880);
var inst_82883 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_82882];
var inst_82884 = cljs.core.PersistentHashMap.fromArrays(inst_82881,inst_82883);
var inst_82885 = com.wsscode.pathom.trace.trace(env,inst_82884);
var inst_82886 = cljs.core.zipmap(inst_82854,inst_82880);
var inst_82887 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_82886);
var inst_82888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82886,e);
var state_82902__$1 = (function (){var statearr_82909 = state_82902;
(statearr_82909[(9)] = inst_82885);

(statearr_82909[(10)] = inst_82887);

return statearr_82909;
})();
var statearr_82910_86254 = state_82902__$1;
(statearr_82910_86254[(2)] = inst_82888);

(statearr_82910_86254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (4))){
var inst_82788 = (state_82902[(2)]);
var state_82902__$1 = state_82902;
var statearr_82911_86260 = state_82902__$1;
(statearr_82911_86260[(2)] = inst_82788);

(statearr_82911_86260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (15))){
var state_82902__$1 = state_82902;
var statearr_82912_86261 = state_82902__$1;
(statearr_82912_86261[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (21))){
var inst_82847 = (state_82902[(7)]);
var inst_82854 = (state_82902[(8)]);
var inst_82859 = (state_82902[(11)]);
var inst_82851 = (state_82902[(2)]);
var inst_82852 = com.wsscode.async.async_cljs.throw_err(inst_82851);
var inst_82853 = cljs.core.filterv(inst_82847,inst_82852);
var inst_82854__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_82853);
var inst_82855 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_82856 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_82854__$1];
var inst_82857 = cljs.core.PersistentHashMap.fromArrays(inst_82855,inst_82856);
var inst_82858 = com.wsscode.pathom.trace.trace(env,inst_82857);
var inst_82859__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_82854__$1);
var inst_82860 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82859__$1);
var state_82902__$1 = (function (){var statearr_82914 = state_82902;
(statearr_82914[(8)] = inst_82854__$1);

(statearr_82914[(12)] = inst_82858);

(statearr_82914[(11)] = inst_82859__$1);

return statearr_82914;
})();
if(inst_82860){
var statearr_82915_86262 = state_82902__$1;
(statearr_82915_86262[(1)] = (22));

} else {
var statearr_82916_86263 = state_82902__$1;
(statearr_82916_86263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (31))){
var state_82902__$1 = state_82902;
var statearr_82917_86264 = state_82902__$1;
(statearr_82917_86264[(2)] = null);

(statearr_82917_86264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (32))){
var inst_82876 = (state_82902[(2)]);
var state_82902__$1 = state_82902;
var statearr_82918_86265 = state_82902__$1;
(statearr_82918_86265[(2)] = inst_82876);

(statearr_82918_86265[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (33))){
var inst_82896 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_82902__$1 = state_82902;
var statearr_82919_86266 = state_82902__$1;
(statearr_82919_86266[(2)] = inst_82896);

(statearr_82919_86266[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (13))){
var inst_82816 = (state_82902[(2)]);
var inst_82817 = com.wsscode.async.async_cljs.throw_err(inst_82816);
var state_82902__$1 = state_82902;
var statearr_82920_86267 = state_82902__$1;
(statearr_82920_86267[(2)] = inst_82817);

(statearr_82920_86267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (22))){
var inst_82859 = (state_82902[(11)]);
var state_82902__$1 = state_82902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82902__$1,(25),inst_82859);
} else {
if((state_val_82903 === (29))){
var inst_82870 = (state_82902[(2)]);
var inst_82871 = com.wsscode.async.async_cljs.consumer_pair(inst_82870);
var state_82902__$1 = state_82902;
var statearr_82921_86268 = state_82902__$1;
(statearr_82921_86268[(2)] = inst_82871);

(statearr_82921_86268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (6))){
var inst_82797 = (state_82902[(13)]);
var inst_82796 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_82797__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_82796);
var inst_82798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_82799 = com.wsscode.pathom.trace.trace(env,inst_82798);
var inst_82800 = (function (){var trace_id__29442__auto__ = inst_82797__$1;
var _ = inst_82799;
return (function (p1__82782_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__82782_SHARP_,input);
});
})();
var inst_82801 = (function (){var trace_id__29442__auto__ = inst_82797__$1;
var _ = inst_82799;
return (function (p1__82781_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__82781_SHARP_,input);
});
})();
var inst_82802 = com.wsscode.pathom.connect.map_async_serial(inst_82801,processing_sequence);
var state_82902__$1 = (function (){var statearr_82922 = state_82902;
(statearr_82922[(13)] = inst_82797__$1);

(statearr_82922[(14)] = inst_82800);

return statearr_82922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82902__$1,(9),inst_82802);
} else {
if((state_val_82903 === (28))){
var inst_82878 = (state_82902[(2)]);
var state_82902__$1 = state_82902;
var statearr_82923_86269 = state_82902__$1;
(statearr_82923_86269[(2)] = inst_82878);

(statearr_82923_86269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (25))){
var inst_82863 = (state_82902[(2)]);
var inst_82864 = com.wsscode.async.async_cljs.throw_err(inst_82863);
var state_82902__$1 = state_82902;
var statearr_82924_86275 = state_82902__$1;
(statearr_82924_86275[(2)] = inst_82864);

(statearr_82924_86275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (34))){
var inst_82893 = (state_82902[(15)]);
var inst_82898 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_82893);
var state_82902__$1 = state_82902;
var statearr_82925_86276 = state_82902__$1;
(statearr_82925_86276[(2)] = inst_82898);

(statearr_82925_86276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (17))){
var inst_82823 = (state_82902[(2)]);
var inst_82824 = com.wsscode.async.async_cljs.consumer_pair(inst_82823);
var state_82902__$1 = state_82902;
var statearr_82926_86277 = state_82902__$1;
(statearr_82926_86277[(2)] = inst_82824);

(statearr_82926_86277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (3))){
var inst_82893 = (state_82902[(15)]);
var inst_82893__$1 = (state_82902[(2)]);
var inst_82894 = (inst_82893__$1 == null);
var state_82902__$1 = (function (){var statearr_82927 = state_82902;
(statearr_82927[(15)] = inst_82893__$1);

return statearr_82927;
})();
if(cljs.core.truth_(inst_82894)){
var statearr_82928_86278 = state_82902__$1;
(statearr_82928_86278[(1)] = (33));

} else {
var statearr_82929_86279 = state_82902__$1;
(statearr_82929_86279[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (12))){
var inst_82807 = (state_82902[(16)]);
var inst_82797 = (state_82902[(13)]);
var inst_82833 = (state_82902[(2)]);
var inst_82834 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_82835 = cljs.core.count(inst_82833);
var inst_82836 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_82835];
var inst_82837 = cljs.core.PersistentHashMap.fromArrays(inst_82834,inst_82836);
var inst_82838 = com.wsscode.pathom.trace.trace(env,inst_82837);
var inst_82839 = cljs.core.zipmap(inst_82807,inst_82833);
var inst_82840 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_82839);
var inst_82841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82839,e);
var inst_82842 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_82843 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_82797,inst_82842);
var state_82902__$1 = (function (){var statearr_82930 = state_82902;
(statearr_82930[(17)] = inst_82838);

(statearr_82930[(18)] = inst_82840);

(statearr_82930[(19)] = inst_82843);

return statearr_82930;
})();
var statearr_82931_86280 = state_82902__$1;
(statearr_82931_86280[(2)] = inst_82841);

(statearr_82931_86280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (2))){
var _ = (function (){var statearr_82932 = state_82902;
(statearr_82932[(4)] = cljs.core.cons((5),(state_82902[(4)])));

return statearr_82932;
})();
var inst_82794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_82902__$1 = state_82902;
if(cljs.core.truth_(inst_82794)){
var statearr_82933_86283 = state_82902__$1;
(statearr_82933_86283[(1)] = (6));

} else {
var statearr_82934_86284 = state_82902__$1;
(statearr_82934_86284[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (23))){
var inst_82859 = (state_82902[(11)]);
var inst_82866 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82859);
var state_82902__$1 = state_82902;
if(cljs.core.truth_(inst_82866)){
var statearr_82935_86285 = state_82902__$1;
(statearr_82935_86285[(1)] = (26));

} else {
var statearr_82936_86286 = state_82902__$1;
(statearr_82936_86286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (35))){
var inst_82900 = (state_82902[(2)]);
var state_82902__$1 = state_82902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82902__$1,inst_82900);
} else {
if((state_val_82903 === (19))){
var state_82902__$1 = state_82902;
var statearr_82937_86287 = state_82902__$1;
(statearr_82937_86287[(2)] = null);

(statearr_82937_86287[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (11))){
var inst_82812 = (state_82902[(20)]);
var inst_82819 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82812);
var state_82902__$1 = state_82902;
if(cljs.core.truth_(inst_82819)){
var statearr_82939_86288 = state_82902__$1;
(statearr_82939_86288[(1)] = (14));

} else {
var statearr_82940_86290 = state_82902__$1;
(statearr_82940_86290[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (9))){
var inst_82800 = (state_82902[(14)]);
var inst_82807 = (state_82902[(16)]);
var inst_82812 = (state_82902[(20)]);
var inst_82804 = (state_82902[(2)]);
var inst_82805 = com.wsscode.async.async_cljs.throw_err(inst_82804);
var inst_82806 = cljs.core.filterv(inst_82800,inst_82805);
var inst_82807__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_82806);
var inst_82808 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_82809 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_82807__$1];
var inst_82810 = cljs.core.PersistentHashMap.fromArrays(inst_82808,inst_82809);
var inst_82811 = com.wsscode.pathom.trace.trace(env,inst_82810);
var inst_82812__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_82807__$1);
var inst_82813 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82812__$1);
var state_82902__$1 = (function (){var statearr_82941 = state_82902;
(statearr_82941[(16)] = inst_82807__$1);

(statearr_82941[(21)] = inst_82811);

(statearr_82941[(20)] = inst_82812__$1);

return statearr_82941;
})();
if(inst_82813){
var statearr_82942_86292 = state_82902__$1;
(statearr_82942_86292[(1)] = (10));

} else {
var statearr_82943_86293 = state_82902__$1;
(statearr_82943_86293[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (5))){
var _ = (function (){var statearr_82944 = state_82902;
(statearr_82944[(4)] = cljs.core.rest((state_82902[(4)])));

return statearr_82944;
})();
var state_82902__$1 = state_82902;
var ex82938 = (state_82902__$1[(2)]);
var statearr_82945_86294 = state_82902__$1;
(statearr_82945_86294[(5)] = ex82938);


var statearr_82946_86295 = state_82902__$1;
(statearr_82946_86295[(1)] = (4));

(statearr_82946_86295[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (14))){
var inst_82812 = (state_82902[(20)]);
var inst_82821 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82812);
var state_82902__$1 = state_82902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82902__$1,(17),inst_82821);
} else {
if((state_val_82903 === (26))){
var inst_82859 = (state_82902[(11)]);
var inst_82868 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82859);
var state_82902__$1 = state_82902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82902__$1,(29),inst_82868);
} else {
if((state_val_82903 === (16))){
var inst_82831 = (state_82902[(2)]);
var state_82902__$1 = state_82902;
var statearr_82947_86296 = state_82902__$1;
(statearr_82947_86296[(2)] = inst_82831);

(statearr_82947_86296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (30))){
var inst_82859 = (state_82902[(11)]);
var state_82902__$1 = state_82902;
var statearr_82948_86297 = state_82902__$1;
(statearr_82948_86297[(2)] = inst_82859);

(statearr_82948_86297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (10))){
var inst_82812 = (state_82902[(20)]);
var state_82902__$1 = state_82902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82902__$1,(13),inst_82812);
} else {
if((state_val_82903 === (18))){
var inst_82812 = (state_82902[(20)]);
var state_82902__$1 = state_82902;
var statearr_82949_86298 = state_82902__$1;
(statearr_82949_86298[(2)] = inst_82812);

(statearr_82949_86298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82903 === (8))){
var inst_82890 = (state_82902[(2)]);
var _ = (function (){var statearr_82950 = state_82902;
(statearr_82950[(4)] = cljs.core.rest((state_82902[(4)])));

return statearr_82950;
})();
var state_82902__$1 = state_82902;
var statearr_82951_86299 = state_82902__$1;
(statearr_82951_86299[(2)] = inst_82890);

(statearr_82951_86299[(1)] = (3));


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
});
return (function() {
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto____0 = (function (){
var statearr_82952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82952[(0)] = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto__);

(statearr_82952[(1)] = (1));

return statearr_82952;
});
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto____1 = (function (state_82902){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_82902);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e82953){var ex__50860__auto__ = e82953;
var statearr_82954_86303 = state_82902;
(statearr_82954_86303[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_82902[(4)]))){
var statearr_82955_86304 = state_82902;
(statearr_82955_86304[(1)] = cljs.core.first((state_82902[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86305 = state_82902;
state_82902 = G__86305;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto__ = function(state_82902){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto____1.call(this,state_82902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_82956 = f__50893__auto__();
(statearr_82956[(6)] = c__50892__auto___86249);

return statearr_82956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(p__82957,e,trace_data,input){
var map__82958 = p__82957;
var map__82958__$1 = (((((!((map__82958 == null))))?(((((map__82958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82958):map__82958);
var env = map__82958__$1;
var map__82959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82958__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__82959__$1 = (((((!((map__82959 == null))))?(((((map__82959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82959):map__82959);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82959__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82959__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82958__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,params], null),(function (){
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_83037){
var state_val_83038 = (state_83037[(1)]);
if((state_val_83038 === (7))){
var inst_82968 = (state_83037[(7)]);
var state_83037__$1 = state_83037;
var statearr_83039_86307 = state_83037__$1;
(statearr_83039_86307[(2)] = inst_82968);

(statearr_83039_86307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (20))){
var inst_82974 = (state_83037[(8)]);
var state_83037__$1 = state_83037;
var statearr_83040_86308 = state_83037__$1;
(statearr_83040_86308[(2)] = inst_82974);

(statearr_83040_86308[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (27))){
var inst_82997 = (state_83037[(9)]);
var inst_83006 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82997);
var state_83037__$1 = state_83037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83037__$1,(30),inst_83006);
} else {
if((state_val_83038 === (1))){
var state_83037__$1 = state_83037;
var statearr_83041_86309 = state_83037__$1;
(statearr_83041_86309[(2)] = null);

(statearr_83041_86309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (24))){
var inst_82997 = (state_83037[(9)]);
var inst_83004 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82997);
var state_83037__$1 = state_83037;
if(cljs.core.truth_(inst_83004)){
var statearr_83042_86310 = state_83037__$1;
(statearr_83042_86310[(1)] = (27));

} else {
var statearr_83043_86311 = state_83037__$1;
(statearr_83043_86311[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (39))){
var inst_83035 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83037__$1,inst_83035);
} else {
if((state_val_83038 === (4))){
var inst_82962 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83044_86312 = state_83037__$1;
(statearr_83044_86312[(2)] = inst_82962);

(statearr_83044_86312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (15))){
var inst_82978 = (state_83037[(2)]);
var inst_82979 = com.wsscode.async.async_cljs.throw_err(inst_82978);
var state_83037__$1 = state_83037;
var statearr_83045_86313 = state_83037__$1;
(statearr_83045_86313[(2)] = inst_82979);

(statearr_83045_86313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (21))){
var state_83037__$1 = state_83037;
var statearr_83046_86314 = state_83037__$1;
(statearr_83046_86314[(2)] = null);

(statearr_83046_86314[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (31))){
var inst_82997 = (state_83037[(9)]);
var state_83037__$1 = state_83037;
var statearr_83047_86315 = state_83037__$1;
(statearr_83047_86315[(2)] = inst_82997);

(statearr_83047_86315[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (32))){
var state_83037__$1 = state_83037;
var statearr_83048_86316 = state_83037__$1;
(statearr_83048_86316[(2)] = null);

(statearr_83048_86316[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (33))){
var inst_83014 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83049_86317 = state_83037__$1;
(statearr_83049_86317[(2)] = inst_83014);

(statearr_83049_86317[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (13))){
var inst_82974 = (state_83037[(8)]);
var inst_82981 = com.wsscode.async.async_cljs.promise_QMARK_(inst_82974);
var state_83037__$1 = state_83037;
if(cljs.core.truth_(inst_82981)){
var statearr_83050_86318 = state_83037__$1;
(statearr_83050_86318[(1)] = (16));

} else {
var statearr_83051_86319 = state_83037__$1;
(statearr_83051_86319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (22))){
var inst_82991 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83052_86320 = state_83037__$1;
(statearr_83052_86320[(2)] = inst_82991);

(statearr_83052_86320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (36))){
var inst_83025 = (state_83037[(2)]);
var _ = (function (){var statearr_83053 = state_83037;
(statearr_83053[(4)] = cljs.core.rest((state_83037[(4)])));

return statearr_83053;
})();
var state_83037__$1 = state_83037;
var statearr_83054_86321 = state_83037__$1;
(statearr_83054_86321[(2)] = inst_83025);

(statearr_83054_86321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (29))){
var inst_83016 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83055_86322 = state_83037__$1;
(statearr_83055_86322[(2)] = inst_83016);

(statearr_83055_86322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (6))){
var state_83037__$1 = state_83037;
var statearr_83056_86323 = state_83037__$1;
(statearr_83056_86323[(2)] = processing_sequence);

(statearr_83056_86323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (28))){
var state_83037__$1 = state_83037;
var statearr_83057_86324 = state_83037__$1;
(statearr_83057_86324[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (25))){
var inst_83018 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83059_86325 = state_83037__$1;
(statearr_83059_86325[(2)] = inst_83018);

(statearr_83059_86325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (34))){
var inst_83020 = (state_83037[(10)]);
var state_83037__$1 = state_83037;
var statearr_83060_86326 = state_83037__$1;
(statearr_83060_86326[(2)] = inst_83020);

(statearr_83060_86326[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (17))){
var state_83037__$1 = state_83037;
var statearr_83061_86327 = state_83037__$1;
(statearr_83061_86327[(1)] = (20));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (3))){
var inst_83028 = (state_83037[(11)]);
var inst_83028__$1 = (state_83037[(2)]);
var inst_83029 = (inst_83028__$1 == null);
var state_83037__$1 = (function (){var statearr_83063 = state_83037;
(statearr_83063[(11)] = inst_83028__$1);

return statearr_83063;
})();
if(cljs.core.truth_(inst_83029)){
var statearr_83064_86328 = state_83037__$1;
(statearr_83064_86328[(1)] = (37));

} else {
var statearr_83065_86329 = state_83037__$1;
(statearr_83065_86329[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (12))){
var inst_82974 = (state_83037[(8)]);
var state_83037__$1 = state_83037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83037__$1,(15),inst_82974);
} else {
if((state_val_83038 === (2))){
var inst_82968 = (state_83037[(7)]);
var _ = (function (){var statearr_83066 = state_83037;
(statearr_83066[(4)] = cljs.core.cons((5),(state_83037[(4)])));

return statearr_83066;
})();
var inst_82968__$1 = batch_QMARK_;
var state_83037__$1 = (function (){var statearr_83067 = state_83037;
(statearr_83067[(7)] = inst_82968__$1);

return statearr_83067;
})();
if(cljs.core.truth_(inst_82968__$1)){
var statearr_83068_86330 = state_83037__$1;
(statearr_83068_86330[(1)] = (6));

} else {
var statearr_83069_86331 = state_83037__$1;
(statearr_83069_86331[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (23))){
var inst_82997 = (state_83037[(9)]);
var state_83037__$1 = state_83037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83037__$1,(26),inst_82997);
} else {
if((state_val_83038 === (35))){
var inst_83023 = cljs.core.PersistentHashMap.EMPTY;
var state_83037__$1 = state_83037;
var statearr_83070_86332 = state_83037__$1;
(statearr_83070_86332[(2)] = inst_83023);

(statearr_83070_86332[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (19))){
var inst_82985 = (state_83037[(2)]);
var inst_82986 = com.wsscode.async.async_cljs.consumer_pair(inst_82985);
var state_83037__$1 = state_83037;
var statearr_83071_86333 = state_83037__$1;
(statearr_83071_86333[(2)] = inst_82986);

(statearr_83071_86333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (11))){
var inst_83020 = (state_83037[(10)]);
var inst_83020__$1 = (state_83037[(2)]);
var state_83037__$1 = (function (){var statearr_83073 = state_83037;
(statearr_83073[(10)] = inst_83020__$1);

return statearr_83073;
})();
if(cljs.core.truth_(inst_83020__$1)){
var statearr_83074_86334 = state_83037__$1;
(statearr_83074_86334[(1)] = (34));

} else {
var statearr_83075_86335 = state_83037__$1;
(statearr_83075_86335[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (9))){
var inst_82974 = (state_83037[(8)]);
var inst_82974__$1 = com.wsscode.pathom.connect.async_read_call_batch(env,e,trace_data,input);
var inst_82975 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82974__$1);
var state_83037__$1 = (function (){var statearr_83076 = state_83037;
(statearr_83076[(8)] = inst_82974__$1);

return statearr_83076;
})();
if(inst_82975){
var statearr_83077_86337 = state_83037__$1;
(statearr_83077_86337[(1)] = (12));

} else {
var statearr_83078_86338 = state_83037__$1;
(statearr_83078_86338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (5))){
var _ = (function (){var statearr_83079 = state_83037;
(statearr_83079[(4)] = cljs.core.rest((state_83037[(4)])));

return statearr_83079;
})();
var state_83037__$1 = state_83037;
var ex83072 = (state_83037__$1[(2)]);
var statearr_83080_86339 = state_83037__$1;
(statearr_83080_86339[(5)] = ex83072);


var statearr_83081_86340 = state_83037__$1;
(statearr_83081_86340[(1)] = (4));

(statearr_83081_86340[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (14))){
var inst_82995 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83082_86341 = state_83037__$1;
(statearr_83082_86341[(2)] = inst_82995);

(statearr_83082_86341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (26))){
var inst_83001 = (state_83037[(2)]);
var inst_83002 = com.wsscode.async.async_cljs.throw_err(inst_83001);
var state_83037__$1 = state_83037;
var statearr_83083_86342 = state_83037__$1;
(statearr_83083_86342[(2)] = inst_83002);

(statearr_83083_86342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (16))){
var inst_82974 = (state_83037[(8)]);
var inst_82983 = com.wsscode.async.async_cljs.promise__GT_chan(inst_82974);
var state_83037__$1 = state_83037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83037__$1,(19),inst_82983);
} else {
if((state_val_83038 === (38))){
var inst_83028 = (state_83037[(11)]);
var inst_83033 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_83028);
var state_83037__$1 = state_83037;
var statearr_83084_86345 = state_83037__$1;
(statearr_83084_86345[(2)] = inst_83033);

(statearr_83084_86345[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (30))){
var inst_83008 = (state_83037[(2)]);
var inst_83009 = com.wsscode.async.async_cljs.consumer_pair(inst_83008);
var state_83037__$1 = state_83037;
var statearr_83085_86348 = state_83037__$1;
(statearr_83085_86348[(2)] = inst_83009);

(statearr_83085_86348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (10))){
var inst_82997 = (state_83037[(9)]);
var inst_82997__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_82998 = com.wsscode.async.async_cljs.chan_QMARK_(inst_82997__$1);
var state_83037__$1 = (function (){var statearr_83086 = state_83037;
(statearr_83086[(9)] = inst_82997__$1);

return statearr_83086;
})();
if(inst_82998){
var statearr_83087_86349 = state_83037__$1;
(statearr_83087_86349[(1)] = (23));

} else {
var statearr_83088_86350 = state_83037__$1;
(statearr_83088_86350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (18))){
var inst_82993 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
var statearr_83089_86351 = state_83037__$1;
(statearr_83089_86351[(2)] = inst_82993);

(statearr_83089_86351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (37))){
var inst_83031 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_83037__$1 = state_83037;
var statearr_83090_86352 = state_83037__$1;
(statearr_83090_86352[(2)] = inst_83031);

(statearr_83090_86352[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83038 === (8))){
var inst_82972 = (state_83037[(2)]);
var state_83037__$1 = state_83037;
if(cljs.core.truth_(inst_82972)){
var statearr_83091_86353 = state_83037__$1;
(statearr_83091_86353[(1)] = (9));

} else {
var statearr_83092_86354 = state_83037__$1;
(statearr_83092_86354[(1)] = (10));

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
});
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto____0 = (function (){
var statearr_83093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83093[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto__);

(statearr_83093[(1)] = (1));

return statearr_83093;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto____1 = (function (state_83037){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_83037);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e83094){var ex__50860__auto__ = e83094;
var statearr_83095_86358 = state_83037;
(statearr_83095_86358[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_83037[(4)]))){
var statearr_83096_86359 = state_83037;
(statearr_83096_86359[(1)] = cljs.core.first((state_83037[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86360 = state_83037;
state_83037 = G__86360;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto__ = function(state_83037){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto____1.call(this,state_83037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_83097 = f__50893__auto__();
(statearr_83097[(6)] = c__50892__auto___86306);

return statearr_83097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
}));
});
/**
 * Works in the same way `reader2`, but supports async values (core.async channels)
 * on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__83100){
var map__83101 = p__83100;
var map__83101__$1 = (((((!((map__83101 == null))))?(((((map__83101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83101):map__83101);
var env = map__83101__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83101__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83101__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var temp__5733__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__83103 = temp__5733__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83103,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83103,(1),null);
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_83384){
var state_val_83385 = (state_83384[(1)]);
if((state_val_83385 === (65))){
var inst_83289 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83386_86365 = state_83384__$1;
(statearr_83386_86365[(2)] = inst_83289);

(statearr_83386_86365[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (70))){
var inst_83279 = (state_83384[(2)]);
var inst_83280 = com.wsscode.async.async_cljs.consumer_pair(inst_83279);
var state_83384__$1 = state_83384;
var statearr_83387_86367 = state_83384__$1;
(statearr_83387_86367[(2)] = inst_83280);

(statearr_83387_86367[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (62))){
var inst_83291 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83388_86368 = state_83384__$1;
(statearr_83388_86368[(2)] = inst_83291);

(statearr_83388_86368[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (74))){
var inst_83297 = (state_83384[(7)]);
var inst_83302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83297,(0),null);
var inst_83303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83297,(1),null);
var inst_83304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83297,(2),null);
var inst_83127 = inst_83302;
var inst_83128 = inst_83303;
var inst_83129 = inst_83304;
var state_83384__$1 = (function (){var statearr_83389 = state_83384;
(statearr_83389[(8)] = inst_83127);

(statearr_83389[(9)] = inst_83128);

(statearr_83389[(10)] = inst_83129);

return statearr_83389;
})();
var statearr_83390_86369 = state_83384__$1;
(statearr_83390_86369[(2)] = null);

(statearr_83390_86369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (7))){
var inst_83379 = (state_83384[(2)]);
var _ = (function (){var statearr_83391 = state_83384;
(statearr_83391[(4)] = cljs.core.rest((state_83384[(4)])));

return statearr_83391;
})();
var state_83384__$1 = state_83384;
var statearr_83392_86370 = state_83384__$1;
(statearr_83392_86370[(2)] = inst_83379);

(statearr_83392_86370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (59))){
var inst_83342 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83393_86372 = state_83384__$1;
(statearr_83393_86372[(2)] = inst_83342);

(statearr_83393_86372[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (86))){
var inst_83336 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83394_86373 = state_83384__$1;
(statearr_83394_86373[(2)] = inst_83336);

(statearr_83394_86373[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (20))){
var inst_83113 = (state_83384[(11)]);
var inst_83173 = (state_83384[(12)]);
var inst_83180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83181 = [inst_83113];
var inst_83182 = (new cljs.core.PersistentVector(null,1,(5),inst_83180,inst_83181,null));
var inst_83183 = cljs.core.select_keys(inst_83173,inst_83182);
var state_83384__$1 = state_83384;
var statearr_83395_86377 = state_83384__$1;
(statearr_83395_86377[(2)] = inst_83183);

(statearr_83395_86377[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (72))){
var state_83384__$1 = state_83384;
var statearr_83397_86379 = state_83384__$1;
(statearr_83397_86379[(2)] = null);

(statearr_83397_86379[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (58))){
var inst_83248 = (state_83384[(13)]);
var inst_83142 = (state_83384[(14)]);
var inst_83244 = (state_83384[(15)]);
var inst_83297 = (state_83384[(7)]);
var inst_83293 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_83294 = [inst_83248,inst_83142];
var inst_83295 = cljs.core.PersistentHashMap.fromArrays(inst_83293,inst_83294);
var inst_83296 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_83295);
var inst_83297__$1 = (inst_83244.cljs$core$IFn$_invoke$arity$1 ? inst_83244.cljs$core$IFn$_invoke$arity$1(inst_83296) : inst_83244.call(null,inst_83296));
var state_83384__$1 = (function (){var statearr_83398 = state_83384;
(statearr_83398[(7)] = inst_83297__$1);

return statearr_83398;
})();
if(cljs.core.truth_(inst_83297__$1)){
var statearr_83399_86383 = state_83384__$1;
(statearr_83399_86383[(1)] = (74));

} else {
var statearr_83400_86384 = state_83384__$1;
(statearr_83400_86384[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (60))){
var inst_83129 = (state_83384[(10)]);
var inst_83258 = (state_83384[(16)]);
var inst_83136 = (state_83384[(17)]);
var inst_83128 = (state_83384[(9)]);
var inst_83265 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_83129,inst_83258);
var tmp83396 = inst_83128;
var inst_83127 = inst_83136;
var inst_83128__$1 = tmp83396;
var inst_83129__$1 = inst_83265;
var state_83384__$1 = (function (){var statearr_83401 = state_83384;
(statearr_83401[(8)] = inst_83127);

(statearr_83401[(9)] = inst_83128__$1);

(statearr_83401[(10)] = inst_83129__$1);

return statearr_83401;
})();
var statearr_83402_86386 = state_83384__$1;
(statearr_83402_86386[(2)] = null);

(statearr_83402_86386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (27))){
var inst_83186 = (state_83384[(18)]);
var inst_83193 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83186);
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83193)){
var statearr_83403_86387 = state_83384__$1;
(statearr_83403_86387[(1)] = (30));

} else {
var statearr_83404_86388 = state_83384__$1;
(statearr_83404_86388[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (1))){
var state_83384__$1 = state_83384;
var statearr_83405_86391 = state_83384__$1;
(statearr_83405_86391[(2)] = null);

(statearr_83405_86391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (69))){
var inst_83287 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83406_86393 = state_83384__$1;
(statearr_83406_86393[(2)] = inst_83287);

(statearr_83406_86393[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (24))){
var state_83384__$1 = state_83384;
var statearr_83407_86394 = state_83384__$1;
(statearr_83407_86394[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (55))){
var state_83384__$1 = state_83384;
var statearr_83409_86395 = state_83384__$1;
(statearr_83409_86395[(1)] = (91));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (85))){
var state_83384__$1 = state_83384;
var statearr_83411_86396 = state_83384__$1;
(statearr_83411_86396[(1)] = (88));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (39))){
var inst_83234 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83413_86398 = state_83384__$1;
(statearr_83413_86398[(2)] = inst_83234);

(statearr_83413_86398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (88))){
var inst_83317 = (state_83384[(19)]);
var state_83384__$1 = state_83384;
var statearr_83414_86399 = state_83384__$1;
(statearr_83414_86399[(2)] = inst_83317);

(statearr_83414_86399[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (46))){
var inst_83229 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83415_86400 = state_83384__$1;
(statearr_83415_86400[(2)] = inst_83229);

(statearr_83415_86400[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (4))){
var inst_83106 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83416_86401 = state_83384__$1;
(statearr_83416_86401[(2)] = inst_83106);

(statearr_83416_86401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (77))){
var inst_83248 = (state_83384[(13)]);
var inst_83142 = (state_83384[(14)]);
var inst_83309 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_83310 = [inst_83248,inst_83142];
var inst_83311 = cljs.core.PersistentHashMap.fromArrays(inst_83309,inst_83310);
var inst_83312 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_83311);
var inst_83313 = (function(){throw inst_83312})();
var state_83384__$1 = state_83384;
var statearr_83417_86402 = state_83384__$1;
(statearr_83417_86402[(2)] = inst_83313);

(statearr_83417_86402[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (95))){
var inst_83113 = (state_83384[(11)]);
var inst_83143 = (state_83384[(20)]);
var inst_83243 = (state_83384[(21)]);
var inst_83172 = (state_83384[(22)]);
var inst_83359 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_83360 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_83113,inst_83143,inst_83243];
var inst_83361 = cljs.core.PersistentHashMap.fromArrays(inst_83359,inst_83360);
var inst_83362 = com.wsscode.pathom.trace.trace(inst_83172,inst_83361);
var inst_83363 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_83364 = [inst_83243];
var inst_83365 = cljs.core.PersistentHashMap.fromArrays(inst_83363,inst_83364);
var inst_83366 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_83365);
var inst_83367 = (function(){throw inst_83366})();
var state_83384__$1 = (function (){var statearr_83418 = state_83384;
(statearr_83418[(23)] = inst_83362);

return statearr_83418;
})();
var statearr_83419_86404 = state_83384__$1;
(statearr_83419_86404[(2)] = inst_83367);

(statearr_83419_86404[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (54))){
var inst_83243 = (state_83384[(21)]);
var inst_83172 = (state_83384[(22)]);
var inst_83170 = (state_83384[(24)]);
var inst_83135 = (state_83384[(25)]);
var inst_83136 = (state_83384[(17)]);
var inst_83173 = (state_83384[(12)]);
var inst_83142 = (state_83384[(14)]);
var inst_83248 = (state_83384[(13)]);
var inst_83169 = (state_83384[(26)]);
var inst_83129 = (state_83384[(10)]);
var inst_83113 = (state_83384[(11)]);
var inst_83128 = (state_83384[(9)]);
var inst_83127 = (state_83384[(8)]);
var inst_83124 = (state_83384[(27)]);
var inst_83171 = (state_83384[(28)]);
var inst_83174 = (state_83384[(29)]);
var inst_83143 = (state_83384[(20)]);
var inst_83123 = (state_83384[(30)]);
var inst_83177 = (state_83384[(31)]);
var inst_83168 = (state_83384[(32)]);
var inst_83121 = (state_83384[(33)]);
var inst_83244 = (state_83384[(15)]);
var inst_83247 = (state_83384[(34)]);
var inst_83247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_83243,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_83172);
var inst_83248__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_83243,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_83249 = (function (){var input = inst_83170;
var first__83133 = inst_83135;
var step = inst_83135;
var seq__83132 = inst_83136;
var entity = inst_83173;
var key_SINGLEQUOTE_ = inst_83142;
var response = inst_83248__$1;
var vec__83138 = inst_83135;
var cache_QMARK_ = inst_83169;
var out_left = inst_83129;
var key = inst_83113;
var failed_resolvers = inst_83128;
var vec__83131 = inst_83127;
var seq__83119 = inst_83124;
var output = inst_83171;
var env__$1 = inst_83172;
var e = inst_83174;
var resolver_sym = inst_83143;
var first__83120 = inst_83123;
var trace_data = inst_83177;
var map__83141 = inst_83168;
var resolver = inst_83168;
var vec__83118 = inst_83121;
var replan = inst_83244;
var env_SINGLEQUOTE_ = inst_83247__$1;
var tail = inst_83136;
var G__83117 = inst_83127;
return (function (p1__83099_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__83099_SHARP_], 0));
});
})();
var inst_83250 = com.wsscode.pathom.core.swap_entity_BANG_(inst_83247__$1,inst_83249);
var inst_83252 = cljs.core.contains_QMARK_(inst_83248__$1,inst_83142);
var inst_83253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_83248__$1,inst_83142);
var inst_83254 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_83253) : com.wsscode.pathom.core.break_values.call(null,inst_83253));
var inst_83255 = cljs.core.not(inst_83254);
var inst_83256 = ((inst_83252) && (inst_83255));
var state_83384__$1 = (function (){var statearr_83420 = state_83384;
(statearr_83420[(34)] = inst_83247__$1);

(statearr_83420[(13)] = inst_83248__$1);

(statearr_83420[(35)] = inst_83250);

return statearr_83420;
})();
if(cljs.core.truth_(inst_83256)){
var statearr_83421_86405 = state_83384__$1;
(statearr_83421_86405[(1)] = (57));

} else {
var statearr_83422_86406 = state_83384__$1;
(statearr_83422_86406[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (92))){
var state_83384__$1 = state_83384;
var statearr_83423_86407 = state_83384__$1;
(statearr_83423_86407[(2)] = null);

(statearr_83423_86407[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (15))){
var state_83384__$1 = state_83384;
var statearr_83424_86408 = state_83384__$1;
(statearr_83424_86408[(2)] = false);

(statearr_83424_86408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (48))){
var inst_83210 = (state_83384[(36)]);
var state_83384__$1 = state_83384;
var statearr_83425_86409 = state_83384__$1;
(statearr_83425_86409[(2)] = inst_83210);

(statearr_83425_86409[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (50))){
var inst_83227 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83426_86410 = state_83384__$1;
(statearr_83426_86410[(2)] = inst_83227);

(statearr_83426_86410[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (75))){
var inst_83136 = (state_83384[(17)]);
var inst_83307 = cljs.core.seq(inst_83136);
var state_83384__$1 = state_83384;
if(inst_83307){
var statearr_83427_86411 = state_83384__$1;
(statearr_83427_86411[(1)] = (77));

} else {
var statearr_83428_86412 = state_83384__$1;
(statearr_83428_86412[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (21))){
var inst_83169 = (state_83384[(26)]);
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83169)){
var statearr_83429_86413 = state_83384__$1;
(statearr_83429_86413[(1)] = (23));

} else {
var statearr_83430_86414 = state_83384__$1;
(statearr_83430_86414[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (31))){
var state_83384__$1 = state_83384;
var statearr_83431_86415 = state_83384__$1;
(statearr_83431_86415[(1)] = (34));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (32))){
var inst_83205 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83433_86416 = state_83384__$1;
(statearr_83433_86416[(2)] = inst_83205);

(statearr_83433_86416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (40))){
var inst_83210 = (state_83384[(36)]);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(43),inst_83210);
} else {
if((state_val_83385 === (91))){
var inst_83243 = (state_83384[(21)]);
var inst_83244 = (state_83384[(15)]);
var inst_83349 = (state_83384[(37)]);
var inst_83345 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_83346 = [inst_83243];
var inst_83347 = cljs.core.PersistentHashMap.fromArrays(inst_83345,inst_83346);
var inst_83348 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_83347);
var inst_83349__$1 = (inst_83244.cljs$core$IFn$_invoke$arity$1 ? inst_83244.cljs$core$IFn$_invoke$arity$1(inst_83348) : inst_83244.call(null,inst_83348));
var state_83384__$1 = (function (){var statearr_83434 = state_83384;
(statearr_83434[(37)] = inst_83349__$1);

return statearr_83434;
})();
if(cljs.core.truth_(inst_83349__$1)){
var statearr_83435_86417 = state_83384__$1;
(statearr_83435_86417[(1)] = (94));

} else {
var statearr_83436_86418 = state_83384__$1;
(statearr_83436_86418[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (56))){
var inst_83374 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83437_86419 = state_83384__$1;
(statearr_83437_86419[(2)] = inst_83374);

(statearr_83437_86419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (33))){
var inst_83197 = (state_83384[(2)]);
var inst_83198 = com.wsscode.async.async_cljs.consumer_pair(inst_83197);
var state_83384__$1 = state_83384;
var statearr_83438_86420 = state_83384__$1;
(statearr_83438_86420[(2)] = inst_83198);

(statearr_83438_86420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (13))){
var inst_83163 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83163)){
var statearr_83439_86421 = state_83384__$1;
(statearr_83439_86421[(1)] = (17));

} else {
var statearr_83440_86422 = state_83384__$1;
(statearr_83440_86422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (22))){
var inst_83238 = (state_83384[(38)]);
var inst_83238__$1 = (state_83384[(2)]);
var state_83384__$1 = (function (){var statearr_83441 = state_83384;
(statearr_83441[(38)] = inst_83238__$1);

return statearr_83441;
})();
if(cljs.core.truth_(inst_83238__$1)){
var statearr_83442_86423 = state_83384__$1;
(statearr_83442_86423[(1)] = (51));

} else {
var statearr_83443_86424 = state_83384__$1;
(statearr_83443_86424[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (90))){
var inst_83334 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83444_86425 = state_83384__$1;
(statearr_83444_86425[(2)] = inst_83334);

(statearr_83444_86425[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (36))){
var inst_83203 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83445_86426 = state_83384__$1;
(statearr_83445_86426[(2)] = inst_83203);

(statearr_83445_86426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (41))){
var inst_83210 = (state_83384[(36)]);
var inst_83217 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83210);
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83217)){
var statearr_83446_86427 = state_83384__$1;
(statearr_83446_86427[(1)] = (44));

} else {
var statearr_83447_86428 = state_83384__$1;
(statearr_83447_86428[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (89))){
var state_83384__$1 = state_83384;
var statearr_83448_86429 = state_83384__$1;
(statearr_83448_86429[(2)] = null);

(statearr_83448_86429[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (43))){
var inst_83214 = (state_83384[(2)]);
var inst_83215 = com.wsscode.async.async_cljs.throw_err(inst_83214);
var state_83384__$1 = state_83384;
var statearr_83449_86430 = state_83384__$1;
(statearr_83449_86430[(2)] = inst_83215);

(statearr_83449_86430[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (61))){
var inst_83247 = (state_83384[(34)]);
var inst_83268 = (state_83384[(39)]);
var inst_83268__$1 = com.wsscode.pathom.core.map_reader(inst_83247);
var inst_83269 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83268__$1);
var state_83384__$1 = (function (){var statearr_83450 = state_83384;
(statearr_83450[(39)] = inst_83268__$1);

return statearr_83450;
})();
if(inst_83269){
var statearr_83451_86431 = state_83384__$1;
(statearr_83451_86431[(1)] = (63));

} else {
var statearr_83452_86432 = state_83384__$1;
(statearr_83452_86432[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (29))){
var inst_83190 = (state_83384[(2)]);
var inst_83191 = com.wsscode.async.async_cljs.throw_err(inst_83190);
var state_83384__$1 = state_83384;
var statearr_83453_86433 = state_83384__$1;
(statearr_83453_86433[(2)] = inst_83191);

(statearr_83453_86433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (44))){
var inst_83210 = (state_83384[(36)]);
var inst_83219 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83210);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(47),inst_83219);
} else {
if((state_val_83385 === (93))){
var inst_83372 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83454_86434 = state_83384__$1;
(statearr_83454_86434[(2)] = inst_83372);

(statearr_83454_86434[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (6))){
var inst_83127 = (state_83384[(8)]);
var inst_83135 = (state_83384[(25)]);
var inst_83134 = cljs.core.seq(inst_83127);
var inst_83135__$1 = cljs.core.first(inst_83134);
var inst_83136 = cljs.core.next(inst_83134);
var state_83384__$1 = (function (){var statearr_83455 = state_83384;
(statearr_83455[(25)] = inst_83135__$1);

(statearr_83455[(17)] = inst_83136);

return statearr_83455;
})();
if(cljs.core.truth_(inst_83135__$1)){
var statearr_83456_86435 = state_83384__$1;
(statearr_83456_86435[(1)] = (8));

} else {
var statearr_83457_86436 = state_83384__$1;
(statearr_83457_86436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (28))){
var inst_83207 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83458_86437 = state_83384__$1;
(statearr_83458_86437[(2)] = inst_83207);

(statearr_83458_86437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (64))){
var inst_83268 = (state_83384[(39)]);
var inst_83275 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83268);
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83275)){
var statearr_83459_86438 = state_83384__$1;
(statearr_83459_86438[(1)] = (67));

} else {
var statearr_83460_86439 = state_83384__$1;
(statearr_83460_86439[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (51))){
var inst_83238 = (state_83384[(38)]);
var state_83384__$1 = state_83384;
var statearr_83461_86440 = state_83384__$1;
(statearr_83461_86440[(2)] = inst_83238);

(statearr_83461_86440[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (25))){
var inst_83236 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83462_86441 = state_83384__$1;
(statearr_83462_86441[(2)] = inst_83236);

(statearr_83462_86441[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (34))){
var inst_83186 = (state_83384[(18)]);
var state_83384__$1 = state_83384;
var statearr_83463_86442 = state_83384__$1;
(statearr_83463_86442[(2)] = inst_83186);

(statearr_83463_86442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (17))){
var inst_83147 = (state_83384[(40)]);
var inst_83165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_83147);
var state_83384__$1 = state_83384;
var statearr_83464_86443 = state_83384__$1;
(statearr_83464_86443[(2)] = inst_83165);

(statearr_83464_86443[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (3))){
var inst_83382 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83384__$1,inst_83382);
} else {
if((state_val_83385 === (12))){
var state_83384__$1 = state_83384;
var statearr_83465_86444 = state_83384__$1;
(statearr_83465_86444[(2)] = false);

(statearr_83465_86444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (2))){
var inst_83121 = (state_83384[(33)]);
var _ = (function (){var statearr_83466 = state_83384;
(statearr_83466[(4)] = cljs.core.cons((5),(state_83384[(4)])));

return statearr_83466;
})();
var inst_83112 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_83113 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_83112);
var inst_83121__$1 = plan;
var inst_83122 = cljs.core.seq(inst_83121__$1);
var inst_83123 = cljs.core.first(inst_83122);
var inst_83124 = cljs.core.next(inst_83122);
var inst_83125 = cljs.core.PersistentHashMap.EMPTY;
var inst_83126 = out;
var inst_83127 = inst_83121__$1;
var inst_83128 = inst_83125;
var inst_83129 = inst_83126;
var state_83384__$1 = (function (){var statearr_83467 = state_83384;
(statearr_83467[(11)] = inst_83113);

(statearr_83467[(33)] = inst_83121__$1);

(statearr_83467[(30)] = inst_83123);

(statearr_83467[(27)] = inst_83124);

(statearr_83467[(8)] = inst_83127);

(statearr_83467[(9)] = inst_83128);

(statearr_83467[(10)] = inst_83129);

return statearr_83467;
})();
var statearr_83468_86445 = state_83384__$1;
(statearr_83468_86445[(2)] = null);

(statearr_83468_86445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (66))){
var inst_83272 = (state_83384[(2)]);
var inst_83273 = com.wsscode.async.async_cljs.throw_err(inst_83272);
var state_83384__$1 = state_83384;
var statearr_83469_86446 = state_83384__$1;
(statearr_83469_86446[(2)] = inst_83273);

(statearr_83469_86446[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (23))){
var inst_83172 = (state_83384[(22)]);
var inst_83174 = (state_83384[(29)]);
var inst_83177 = (state_83384[(31)]);
var inst_83170 = (state_83384[(24)]);
var inst_83186 = (state_83384[(18)]);
var inst_83186__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_83172,inst_83174,inst_83177,inst_83170);
var inst_83187 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83186__$1);
var state_83384__$1 = (function (){var statearr_83470 = state_83384;
(statearr_83470[(18)] = inst_83186__$1);

return statearr_83470;
})();
if(inst_83187){
var statearr_83471_86447 = state_83384__$1;
(statearr_83471_86447[(1)] = (26));

} else {
var statearr_83472_86448 = state_83384__$1;
(statearr_83472_86448[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (47))){
var inst_83221 = (state_83384[(2)]);
var inst_83222 = com.wsscode.async.async_cljs.consumer_pair(inst_83221);
var state_83384__$1 = state_83384;
var statearr_83473_86449 = state_83384__$1;
(statearr_83473_86449[(2)] = inst_83222);

(statearr_83473_86449[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (35))){
var state_83384__$1 = state_83384;
var statearr_83474_86450 = state_83384__$1;
(statearr_83474_86450[(2)] = null);

(statearr_83474_86450[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (82))){
var inst_83338 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83475_86451 = state_83384__$1;
(statearr_83475_86451[(2)] = inst_83338);

(statearr_83475_86451[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (76))){
var inst_83340 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83476_86452 = state_83384__$1;
(statearr_83476_86452[(2)] = inst_83340);

(statearr_83476_86452[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (19))){
var inst_83168 = (state_83384[(32)]);
var inst_83143 = (state_83384[(20)]);
var inst_83172 = (state_83384[(22)]);
var inst_83173 = (state_83384[(12)]);
var inst_83170 = (state_83384[(24)]);
var inst_83113 = (state_83384[(11)]);
var inst_83174 = (state_83384[(29)]);
var inst_83142 = (state_83384[(14)]);
var inst_83168__$1 = (state_83384[(2)]);
var inst_83169 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_83168__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_83170__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_83168__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_83171 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_83143);
var inst_83172__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_83168__$1);
var inst_83173__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_83172__$1);
var inst_83174__$1 = cljs.core.select_keys(inst_83173__$1,inst_83170__$1);
var inst_83175 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_83176 = [inst_83113,inst_83143,inst_83174__$1];
var inst_83177 = cljs.core.PersistentHashMap.fromArrays(inst_83175,inst_83176);
var inst_83178 = cljs.core.contains_QMARK_(inst_83173__$1,inst_83142);
var state_83384__$1 = (function (){var statearr_83477 = state_83384;
(statearr_83477[(32)] = inst_83168__$1);

(statearr_83477[(26)] = inst_83169);

(statearr_83477[(24)] = inst_83170__$1);

(statearr_83477[(28)] = inst_83171);

(statearr_83477[(22)] = inst_83172__$1);

(statearr_83477[(12)] = inst_83173__$1);

(statearr_83477[(29)] = inst_83174__$1);

(statearr_83477[(31)] = inst_83177);

return statearr_83477;
})();
if(inst_83178){
var statearr_83478_86453 = state_83384__$1;
(statearr_83478_86453[(1)] = (20));

} else {
var statearr_83479_86454 = state_83384__$1;
(statearr_83479_86454[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (57))){
var inst_83171 = (state_83384[(28)]);
var inst_83113 = (state_83384[(11)]);
var inst_83143 = (state_83384[(20)]);
var inst_83247 = (state_83384[(34)]);
var inst_83136 = (state_83384[(17)]);
var inst_83258 = com.wsscode.pathom.connect.output__GT_provides(inst_83171);
var inst_83259 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_83260 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_83113,inst_83143];
var inst_83261 = cljs.core.PersistentHashMap.fromArrays(inst_83259,inst_83260);
var inst_83262 = com.wsscode.pathom.trace.trace(inst_83247,inst_83261);
var inst_83263 = cljs.core.seq(inst_83136);
var state_83384__$1 = (function (){var statearr_83480 = state_83384;
(statearr_83480[(16)] = inst_83258);

(statearr_83480[(41)] = inst_83262);

return statearr_83480;
})();
if(inst_83263){
var statearr_83481_86455 = state_83384__$1;
(statearr_83481_86455[(1)] = (60));

} else {
var statearr_83482_86456 = state_83384__$1;
(statearr_83482_86456[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (68))){
var state_83384__$1 = state_83384;
var statearr_83483_86457 = state_83384__$1;
(statearr_83483_86457[(1)] = (71));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (11))){
var inst_83147 = (state_83384[(40)]);
var inst_83152 = inst_83147.cljs$lang$protocol_mask$partition0$;
var inst_83153 = (inst_83152 & (64));
var inst_83154 = inst_83147.cljs$core$ISeq$;
var inst_83155 = (cljs.core.PROTOCOL_SENTINEL === inst_83154);
var inst_83156 = ((inst_83153) || (inst_83155));
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83156)){
var statearr_83486_86458 = state_83384__$1;
(statearr_83486_86458[(1)] = (14));

} else {
var statearr_83487_86459 = state_83384__$1;
(statearr_83487_86459[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (9))){
var state_83384__$1 = state_83384;
var statearr_83488_86460 = state_83384__$1;
(statearr_83488_86460[(2)] = null);

(statearr_83488_86460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (5))){
var _ = (function (){var statearr_83489 = state_83384;
(statearr_83489[(4)] = cljs.core.rest((state_83384[(4)])));

return statearr_83489;
})();
var state_83384__$1 = state_83384;
var ex83485 = (state_83384__$1[(2)]);
var statearr_83490_86461 = state_83384__$1;
(statearr_83490_86461[(5)] = ex83485);


var statearr_83491_86462 = state_83384__$1;
(statearr_83491_86462[(1)] = (4));

(statearr_83491_86462[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (83))){
var inst_83321 = (state_83384[(2)]);
var inst_83322 = com.wsscode.async.async_cljs.throw_err(inst_83321);
var state_83384__$1 = state_83384;
var statearr_83492_86463 = state_83384__$1;
(statearr_83492_86463[(2)] = inst_83322);

(statearr_83492_86463[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (14))){
var state_83384__$1 = state_83384;
var statearr_83493_86464 = state_83384__$1;
(statearr_83493_86464[(2)] = true);

(statearr_83493_86464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (45))){
var state_83384__$1 = state_83384;
var statearr_83494_86465 = state_83384__$1;
(statearr_83494_86465[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (53))){
var inst_83170 = (state_83384[(24)]);
var inst_83135 = (state_83384[(25)]);
var inst_83136 = (state_83384[(17)]);
var inst_83173 = (state_83384[(12)]);
var inst_83142 = (state_83384[(14)]);
var inst_83243 = (state_83384[(21)]);
var inst_83169 = (state_83384[(26)]);
var inst_83129 = (state_83384[(10)]);
var inst_83113 = (state_83384[(11)]);
var inst_83128 = (state_83384[(9)]);
var inst_83127 = (state_83384[(8)]);
var inst_83124 = (state_83384[(27)]);
var inst_83171 = (state_83384[(28)]);
var inst_83172 = (state_83384[(22)]);
var inst_83174 = (state_83384[(29)]);
var inst_83143 = (state_83384[(20)]);
var inst_83123 = (state_83384[(30)]);
var inst_83177 = (state_83384[(31)]);
var inst_83168 = (state_83384[(32)]);
var inst_83121 = (state_83384[(33)]);
var inst_83243__$1 = (state_83384[(2)]);
var inst_83244 = (function (){var input = inst_83170;
var first__83133 = inst_83135;
var step = inst_83135;
var seq__83132 = inst_83136;
var entity = inst_83173;
var key_SINGLEQUOTE_ = inst_83142;
var response = inst_83243__$1;
var vec__83138 = inst_83135;
var cache_QMARK_ = inst_83169;
var out_left = inst_83129;
var key = inst_83113;
var failed_resolvers = inst_83128;
var vec__83131 = inst_83127;
var seq__83119 = inst_83124;
var output = inst_83171;
var env__$1 = inst_83172;
var e = inst_83174;
var resolver_sym = inst_83143;
var first__83120 = inst_83123;
var trace_data = inst_83177;
var map__83141 = inst_83168;
var resolver = inst_83168;
var vec__83118 = inst_83121;
var tail = inst_83136;
var G__83117 = inst_83127;
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__83098_SHARP_){
var x__4217__auto__ = ((function (){var or__4126__auto__ = p1__83098_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() * (2));
var y__4218__auto__ = max_resolver_weight;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})], 0));

var temp__5733__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__83496 = temp__5733__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83496,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83496,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
})();
var inst_83245 = cljs.core.map_QMARK_(inst_83243__$1);
var state_83384__$1 = (function (){var statearr_83499 = state_83384;
(statearr_83499[(21)] = inst_83243__$1);

(statearr_83499[(15)] = inst_83244);

return statearr_83499;
})();
if(inst_83245){
var statearr_83500_86466 = state_83384__$1;
(statearr_83500_86466[(1)] = (54));

} else {
var statearr_83501_86467 = state_83384__$1;
(statearr_83501_86467[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (78))){
var state_83384__$1 = state_83384;
var statearr_83502_86468 = state_83384__$1;
(statearr_83502_86468[(2)] = null);

(statearr_83502_86468[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (26))){
var inst_83186 = (state_83384[(18)]);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(29),inst_83186);
} else {
if((state_val_83385 === (16))){
var inst_83160 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83503_86469 = state_83384__$1;
(statearr_83503_86469[(2)] = inst_83160);

(statearr_83503_86469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (81))){
var inst_83317 = (state_83384[(19)]);
var inst_83324 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83317);
var state_83384__$1 = state_83384;
if(cljs.core.truth_(inst_83324)){
var statearr_83504_86470 = state_83384__$1;
(statearr_83504_86470[(1)] = (84));

} else {
var statearr_83505_86471 = state_83384__$1;
(statearr_83505_86471[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (79))){
var inst_83247 = (state_83384[(34)]);
var inst_83317 = (state_83384[(19)]);
var inst_83316 = (state_83384[(2)]);
var inst_83317__$1 = com.wsscode.pathom.core.map_reader(inst_83247);
var inst_83318 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83317__$1);
var state_83384__$1 = (function (){var statearr_83506 = state_83384;
(statearr_83506[(42)] = inst_83316);

(statearr_83506[(19)] = inst_83317__$1);

return statearr_83506;
})();
if(inst_83318){
var statearr_83507_86472 = state_83384__$1;
(statearr_83507_86472[(1)] = (80));

} else {
var statearr_83508_86473 = state_83384__$1;
(statearr_83508_86473[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (38))){
var state_83384__$1 = state_83384;
var statearr_83509_86474 = state_83384__$1;
(statearr_83509_86474[(2)] = null);

(statearr_83509_86474[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (87))){
var inst_83328 = (state_83384[(2)]);
var inst_83329 = com.wsscode.async.async_cljs.consumer_pair(inst_83328);
var state_83384__$1 = state_83384;
var statearr_83510_86475 = state_83384__$1;
(statearr_83510_86475[(2)] = inst_83329);

(statearr_83510_86475[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (30))){
var inst_83186 = (state_83384[(18)]);
var inst_83195 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83186);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(33),inst_83195);
} else {
if((state_val_83385 === (73))){
var inst_83285 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83511_86476 = state_83384__$1;
(statearr_83511_86476[(2)] = inst_83285);

(statearr_83511_86476[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (96))){
var inst_83369 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83512_86477 = state_83384__$1;
(statearr_83512_86477[(2)] = inst_83369);

(statearr_83512_86477[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (10))){
var inst_83377 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83513_86478 = state_83384__$1;
(statearr_83513_86478[(2)] = inst_83377);

(statearr_83513_86478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (18))){
var inst_83147 = (state_83384[(40)]);
var state_83384__$1 = state_83384;
var statearr_83514_86479 = state_83384__$1;
(statearr_83514_86479[(2)] = inst_83147);

(statearr_83514_86479[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (52))){
var inst_83241 = cljs.core.PersistentHashMap.EMPTY;
var state_83384__$1 = state_83384;
var statearr_83515_86480 = state_83384__$1;
(statearr_83515_86480[(2)] = inst_83241);

(statearr_83515_86480[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (67))){
var inst_83268 = (state_83384[(39)]);
var inst_83277 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83268);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(70),inst_83277);
} else {
if((state_val_83385 === (71))){
var inst_83268 = (state_83384[(39)]);
var state_83384__$1 = state_83384;
var statearr_83516_86481 = state_83384__$1;
(statearr_83516_86481[(2)] = inst_83268);

(statearr_83516_86481[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (42))){
var inst_83231 = (state_83384[(2)]);
var state_83384__$1 = state_83384;
var statearr_83517_86482 = state_83384__$1;
(statearr_83517_86482[(2)] = inst_83231);

(statearr_83517_86482[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (80))){
var inst_83317 = (state_83384[(19)]);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(83),inst_83317);
} else {
if((state_val_83385 === (37))){
var inst_83172 = (state_83384[(22)]);
var inst_83174 = (state_83384[(29)]);
var inst_83210 = (state_83384[(36)]);
var inst_83210__$1 = com.wsscode.pathom.connect.call_resolver(inst_83172,inst_83174);
var inst_83211 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83210__$1);
var state_83384__$1 = (function (){var statearr_83518 = state_83384;
(statearr_83518[(36)] = inst_83210__$1);

return statearr_83518;
})();
if(inst_83211){
var statearr_83519_86483 = state_83384__$1;
(statearr_83519_86483[(1)] = (40));

} else {
var statearr_83520_86484 = state_83384__$1;
(statearr_83520_86484[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (63))){
var inst_83268 = (state_83384[(39)]);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(66),inst_83268);
} else {
if((state_val_83385 === (94))){
var inst_83349 = (state_83384[(37)]);
var inst_83354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83349,(0),null);
var inst_83355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83349,(1),null);
var inst_83356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83349,(2),null);
var inst_83127 = inst_83354;
var inst_83128 = inst_83355;
var inst_83129 = inst_83356;
var state_83384__$1 = (function (){var statearr_83521 = state_83384;
(statearr_83521[(8)] = inst_83127);

(statearr_83521[(9)] = inst_83128);

(statearr_83521[(10)] = inst_83129);

return statearr_83521;
})();
var statearr_83522_86485 = state_83384__$1;
(statearr_83522_86485[(2)] = null);

(statearr_83522_86485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (8))){
var inst_83135 = (state_83384[(25)]);
var inst_83143 = (state_83384[(20)]);
var inst_83147 = (state_83384[(40)]);
var inst_83142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83135,(0),null);
var inst_83143__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83135,(1),null);
var inst_83144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83145 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_83143__$1];
var inst_83146 = (new cljs.core.PersistentVector(null,2,(5),inst_83144,inst_83145,null));
var inst_83147__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_83146);
var inst_83149 = (inst_83147__$1 == null);
var inst_83150 = cljs.core.not(inst_83149);
var state_83384__$1 = (function (){var statearr_83523 = state_83384;
(statearr_83523[(14)] = inst_83142);

(statearr_83523[(20)] = inst_83143__$1);

(statearr_83523[(40)] = inst_83147__$1);

return statearr_83523;
})();
if(inst_83150){
var statearr_83524_86486 = state_83384__$1;
(statearr_83524_86486[(1)] = (11));

} else {
var statearr_83525_86487 = state_83384__$1;
(statearr_83525_86487[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (49))){
var state_83384__$1 = state_83384;
var statearr_83526_86488 = state_83384__$1;
(statearr_83526_86488[(2)] = null);

(statearr_83526_86488[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83385 === (84))){
var inst_83317 = (state_83384[(19)]);
var inst_83326 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83317);
var state_83384__$1 = state_83384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83384__$1,(87),inst_83326);
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
});
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto____0 = (function (){
var statearr_83527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83527[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto__);

(statearr_83527[(1)] = (1));

return statearr_83527;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto____1 = (function (state_83384){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_83384);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e83528){var ex__50860__auto__ = e83528;
var statearr_83529_86489 = state_83384;
(statearr_83529_86489[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_83384[(4)]))){
var statearr_83530_86490 = state_83384;
(statearr_83530_86490[(1)] = cljs.core.first((state_83384[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86491 = state_83384;
state_83384 = G__86491;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto__ = function(state_83384){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto____1.call(this,state_83384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_83531 = f__50893__auto__();
(statearr_83531[(6)] = c__50892__auto__);

return statearr_83531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.reader3_node_log_BANG_ = (function com$wsscode$pathom$connect$reader3_node_log_BANG_(p__83532,p__83533,event){
var map__83534 = p__83532;
var map__83534__$1 = (((((!((map__83534 == null))))?(((((map__83534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83534):map__83534);
var env = map__83534__$1;
var run_plan_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83534__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000));
var map__83535 = p__83533;
var map__83535__$1 = (((((!((map__83535 == null))))?(((((map__83535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83535):map__83535);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83535__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node-id","com.wsscode.pathom.connect.planner/node-id",1016027450));
if(cljs.core.truth_(run_plan_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(run_plan_STAR_,com.wsscode.pathom.connect.planner.add_node_log,node_id,event);
} else {
}

return env;
});
com.wsscode.pathom.connect.reader3_run_next_node = (function com$wsscode$pathom$connect$reader3_run_next_node(env,plan,p__83538){
var map__83539 = p__83538;
var map__83539__$1 = (((((!((map__83539 == null))))?(((((map__83539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83539):map__83539);
var run_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83539__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-next","com.wsscode.pathom.connect.planner/run-next",932482163));
if(cljs.core.truth_(run_next)){
var G__83541 = env;
var G__83542 = plan;
var G__83543 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,run_next);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__83541,G__83542,G__83543) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__83541,G__83542,G__83543));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_ = (function com$wsscode$pathom$connect$reader3_all_requires_ready_QMARK_(env,p__83545){
var map__83546 = p__83545;
var map__83546__$1 = (((((!((map__83546 == null))))?(((((map__83546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83546):map__83546);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83546__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","requires","com.wsscode.pathom.connect.planner/requires",-2118404289));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.every_QMARK_((function (p1__83544_SHARP_){
return cljs.core.contains_QMARK_(entity,p1__83544_SHARP_);
}),cljs.core.keys(requires));
});
com.wsscode.pathom.connect.reader3_report_invalid_response = (function com$wsscode$pathom$connect$reader3_report_invalid_response(env,sym,response){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response], null));

return null;
});
com.wsscode.pathom.connect.reader3_merge_resolver_response = (function com$wsscode$pathom$connect$reader3_merge_resolver_response(env,sym,response){
if(cljs.core.map_QMARK_(response)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
return com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,(function (p1__83548_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__83548_SHARP_], 0));
}));
} else {
return com.wsscode.pathom.connect.reader3_report_invalid_response(env,sym,response);
}
});
/**
 * Call a run graph node resolver and execute it.
 */
com.wsscode.pathom.connect.reader3_run_resolver_node = (function com$wsscode$pathom$connect$reader3_run_resolver_node(p__83549,plan,p__83550){
var map__83551 = p__83549;
var map__83551__$1 = (((((!((map__83551 == null))))?(((((map__83551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83551):map__83551);
var env = map__83551__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83551__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83551__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
var map__83552 = p__83550;
var map__83552__$1 = (((((!((map__83552 == null))))?(((((map__83552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83552):map__83552);
var node = map__83552__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83552__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83552__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83552__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","params","com.wsscode.pathom.connect.planner/params",600636577));
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node)){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","skip-node-requires-ready","com.wsscode.pathom.connect/skip-node-requires-ready",-1999300692)], null));

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
} else {
var input_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(input));
var map__83555 = (function (){var G__83556 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
if(cljs.core.seq(input)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__83556,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),input_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915),input], 0));
} else {
return G__83556;
}
})();
var map__83555__$1 = (((((!((map__83555 == null))))?(((((map__83555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83555):map__83555);
var resolver = map__83555__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83555__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node","com.wsscode.pathom.connect.planner/node",754110552),node], 0)),new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),params);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input_SINGLEQUOTE_);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?(cljs.core.truth_(async_parser_QMARK_)?com.wsscode.pathom.connect.async_read_cache_read(env__$1,e,trace_data,input_SINGLEQUOTE_):(function (){try{var r = com.wsscode.pathom.connect.serial_cache_resolver_call(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e83558){var err = e83558;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})()):(function (){try{var r = com.wsscode.pathom.connect.call_resolver(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e83559){var err = e83559;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})());
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_83644){
var state_val_83645 = (state_83644[(1)]);
if((state_val_83645 === (7))){
var inst_83605 = (state_83644[(2)]);
var inst_83606 = com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,inst_83605);
var state_83644__$1 = state_83644;
if(cljs.core.truth_(inst_83606)){
var statearr_83646_86493 = state_83644__$1;
(statearr_83646_86493[(1)] = (21));

} else {
var statearr_83647_86494 = state_83644__$1;
(statearr_83647_86494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (20))){
var inst_83594 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
var statearr_83648_86495 = state_83644__$1;
(statearr_83648_86495[(2)] = inst_83594);

(statearr_83648_86495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (27))){
var inst_83612 = (state_83644[(2)]);
var inst_83613 = com.wsscode.async.async_cljs.throw_err(inst_83612);
var state_83644__$1 = state_83644;
var statearr_83649_86496 = state_83644__$1;
(statearr_83649_86496[(2)] = inst_83613);

(statearr_83649_86496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (1))){
var state_83644__$1 = state_83644;
var statearr_83650_86497 = state_83644__$1;
(statearr_83650_86497[(2)] = null);

(statearr_83650_86497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (24))){
var inst_83608 = (state_83644[(7)]);
var state_83644__$1 = state_83644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83644__$1,(27),inst_83608);
} else {
if((state_val_83645 === (4))){
var inst_83560 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
var statearr_83651_86498 = state_83644__$1;
(statearr_83651_86498[(2)] = inst_83560);

(statearr_83651_86498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (15))){
var state_83644__$1 = state_83644;
var statearr_83652_86499 = state_83644__$1;
(statearr_83652_86499[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (21))){
var inst_83608 = (state_83644[(7)]);
var inst_83608__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
var inst_83609 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83608__$1);
var state_83644__$1 = (function (){var statearr_83654 = state_83644;
(statearr_83654[(7)] = inst_83608__$1);

return statearr_83654;
})();
if(inst_83609){
var statearr_83655_86500 = state_83644__$1;
(statearr_83655_86500[(1)] = (24));

} else {
var statearr_83656_86501 = state_83644__$1;
(statearr_83656_86501[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (31))){
var inst_83619 = (state_83644[(2)]);
var inst_83620 = com.wsscode.async.async_cljs.consumer_pair(inst_83619);
var state_83644__$1 = state_83644;
var statearr_83657_86502 = state_83644__$1;
(statearr_83657_86502[(2)] = inst_83620);

(statearr_83657_86502[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (32))){
var inst_83608 = (state_83644[(7)]);
var state_83644__$1 = state_83644;
var statearr_83658_86503 = state_83644__$1;
(statearr_83658_86503[(2)] = inst_83608);

(statearr_83658_86503[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (33))){
var state_83644__$1 = state_83644;
var statearr_83659_86504 = state_83644__$1;
(statearr_83659_86504[(2)] = null);

(statearr_83659_86504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (13))){
var inst_83581 = (state_83644[(2)]);
var inst_83582 = com.wsscode.async.async_cljs.throw_err(inst_83581);
var state_83644__$1 = state_83644;
var statearr_83660_86505 = state_83644__$1;
(statearr_83660_86505[(2)] = inst_83582);

(statearr_83660_86505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (22))){
var state_83644__$1 = state_83644;
var statearr_83661_86506 = state_83644__$1;
(statearr_83661_86506[(2)] = null);

(statearr_83661_86506[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (36))){
var inst_83635 = (state_83644[(8)]);
var inst_83640 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_83635);
var state_83644__$1 = state_83644;
var statearr_83662_86507 = state_83644__$1;
(statearr_83662_86507[(2)] = inst_83640);

(statearr_83662_86507[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (29))){
var state_83644__$1 = state_83644;
var statearr_83663_86508 = state_83644__$1;
(statearr_83663_86508[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (6))){
var inst_83577 = (state_83644[(9)]);
var _ = (function (){var statearr_83665 = state_83644;
(statearr_83665[(4)] = cljs.core.cons((9),(state_83644[(4)])));

return statearr_83665;
})();
var inst_83577__$1 = response;
var inst_83578 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83577__$1);
var state_83644__$1 = (function (){var statearr_83666 = state_83644;
(statearr_83666[(9)] = inst_83577__$1);

return statearr_83666;
})();
if(inst_83578){
var statearr_83667_86509 = state_83644__$1;
(statearr_83667_86509[(1)] = (10));

} else {
var statearr_83668_86510 = state_83644__$1;
(statearr_83668_86510[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (28))){
var inst_83608 = (state_83644[(7)]);
var inst_83617 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83608);
var state_83644__$1 = state_83644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83644__$1,(31),inst_83617);
} else {
if((state_val_83645 === (25))){
var inst_83608 = (state_83644[(7)]);
var inst_83615 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83608);
var state_83644__$1 = state_83644;
if(cljs.core.truth_(inst_83615)){
var statearr_83669_86511 = state_83644__$1;
(statearr_83669_86511[(1)] = (28));

} else {
var statearr_83670_86512 = state_83644__$1;
(statearr_83670_86512[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (34))){
var inst_83625 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
var statearr_83671_86513 = state_83644__$1;
(statearr_83671_86513[(2)] = inst_83625);

(statearr_83671_86513[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (17))){
var inst_83588 = (state_83644[(2)]);
var inst_83589 = com.wsscode.async.async_cljs.consumer_pair(inst_83588);
var state_83644__$1 = state_83644;
var statearr_83672_86514 = state_83644__$1;
(statearr_83672_86514[(2)] = inst_83589);

(statearr_83672_86514[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (3))){
var inst_83635 = (state_83644[(8)]);
var inst_83635__$1 = (state_83644[(2)]);
var inst_83636 = (inst_83635__$1 == null);
var state_83644__$1 = (function (){var statearr_83673 = state_83644;
(statearr_83673[(8)] = inst_83635__$1);

return statearr_83673;
})();
if(cljs.core.truth_(inst_83636)){
var statearr_83674_86515 = state_83644__$1;
(statearr_83674_86515[(1)] = (35));

} else {
var statearr_83675_86516 = state_83644__$1;
(statearr_83675_86516[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (12))){
var inst_83598 = (state_83644[(2)]);
var inst_83599 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817)];
var inst_83600 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),e,inst_83598];
var inst_83601 = cljs.core.PersistentHashMap.fromArrays(inst_83599,inst_83600);
var inst_83602 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_83601);
var _ = (function (){var statearr_83676 = state_83644;
(statearr_83676[(4)] = cljs.core.rest((state_83644[(4)])));

return statearr_83676;
})();
var state_83644__$1 = (function (){var statearr_83677 = state_83644;
(statearr_83677[(10)] = inst_83602);

return statearr_83677;
})();
var statearr_83678_86517 = state_83644__$1;
(statearr_83678_86517[(2)] = inst_83598);

(statearr_83678_86517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (2))){
var _ = (function (){var statearr_83679 = state_83644;
(statearr_83679[(4)] = cljs.core.cons((5),(state_83644[(4)])));

return statearr_83679;
})();
var state_83644__$1 = state_83644;
var statearr_83680_86518 = state_83644__$1;
(statearr_83680_86518[(2)] = null);

(statearr_83680_86518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (23))){
var inst_83632 = (state_83644[(2)]);
var _ = (function (){var statearr_83681 = state_83644;
(statearr_83681[(4)] = cljs.core.rest((state_83644[(4)])));

return statearr_83681;
})();
var state_83644__$1 = state_83644;
var statearr_83682_86519 = state_83644__$1;
(statearr_83682_86519[(2)] = inst_83632);

(statearr_83682_86519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (35))){
var inst_83638 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_83644__$1 = state_83644;
var statearr_83683_86520 = state_83644__$1;
(statearr_83683_86520[(2)] = inst_83638);

(statearr_83683_86520[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (19))){
var state_83644__$1 = state_83644;
var statearr_83685_86521 = state_83644__$1;
(statearr_83685_86521[(2)] = null);

(statearr_83685_86521[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (11))){
var inst_83577 = (state_83644[(9)]);
var inst_83584 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83577);
var state_83644__$1 = state_83644;
if(cljs.core.truth_(inst_83584)){
var statearr_83687_86522 = state_83644__$1;
(statearr_83687_86522[(1)] = (14));

} else {
var statearr_83688_86523 = state_83644__$1;
(statearr_83688_86523[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (9))){
var _ = (function (){var statearr_83689 = state_83644;
(statearr_83689[(4)] = cljs.core.rest((state_83644[(4)])));

return statearr_83689;
})();
var state_83644__$1 = state_83644;
var ex83684 = (state_83644__$1[(2)]);
var statearr_83690_86524 = state_83644__$1;
(statearr_83690_86524[(5)] = ex83684);


var statearr_83691_86525 = state_83644__$1;
(statearr_83691_86525[(1)] = (8));

(statearr_83691_86525[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (5))){
var _ = (function (){var statearr_83692 = state_83644;
(statearr_83692[(4)] = cljs.core.rest((state_83644[(4)])));

return statearr_83692;
})();
var state_83644__$1 = state_83644;
var ex83686 = (state_83644__$1[(2)]);
var statearr_83693_86526 = state_83644__$1;
(statearr_83693_86526[(5)] = ex83686);


var statearr_83694_86527 = state_83644__$1;
(statearr_83694_86527[(1)] = (4));

(statearr_83694_86527[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (14))){
var inst_83577 = (state_83644[(9)]);
var inst_83586 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83577);
var state_83644__$1 = state_83644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83644__$1,(17),inst_83586);
} else {
if((state_val_83645 === (26))){
var inst_83629 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
var statearr_83695_86528 = state_83644__$1;
(statearr_83695_86528[(2)] = inst_83629);

(statearr_83695_86528[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (16))){
var inst_83596 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
var statearr_83696_86529 = state_83644__$1;
(statearr_83696_86529[(2)] = inst_83596);

(statearr_83696_86529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (30))){
var inst_83627 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
var statearr_83697_86530 = state_83644__$1;
(statearr_83697_86530[(2)] = inst_83627);

(statearr_83697_86530[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (10))){
var inst_83577 = (state_83644[(9)]);
var state_83644__$1 = state_83644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83644__$1,(13),inst_83577);
} else {
if((state_val_83645 === (18))){
var inst_83577 = (state_83644[(9)]);
var state_83644__$1 = state_83644;
var statearr_83698_86531 = state_83644__$1;
(statearr_83698_86531[(2)] = inst_83577);

(statearr_83698_86531[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83645 === (37))){
var inst_83642 = (state_83644[(2)]);
var state_83644__$1 = state_83644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83644__$1,inst_83642);
} else {
if((state_val_83645 === (8))){
var inst_83566 = (state_83644[(2)]);
var inst_83567 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416)];
var inst_83568 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),e,inst_83566];
var inst_83569 = cljs.core.PersistentHashMap.fromArrays(inst_83567,inst_83568);
var inst_83570 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_83569);
var inst_83571 = (function(){throw inst_83566})();
var state_83644__$1 = (function (){var statearr_83699 = state_83644;
(statearr_83699[(11)] = inst_83570);

return statearr_83699;
})();
var statearr_83700_86532 = state_83644__$1;
(statearr_83700_86532[(2)] = inst_83571);

(statearr_83700_86532[(1)] = (7));


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
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto____0 = (function (){
var statearr_83701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83701[(0)] = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto__);

(statearr_83701[(1)] = (1));

return statearr_83701;
});
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto____1 = (function (state_83644){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_83644);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e83702){var ex__50860__auto__ = e83702;
var statearr_83703_86533 = state_83644;
(statearr_83703_86533[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_83644[(4)]))){
var statearr_83704_86534 = state_83644;
(statearr_83704_86534[(1)] = cljs.core.first((state_83644[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86535 = state_83644;
state_83644 = G__86535;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto__ = function(state_83644){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto____1.call(this,state_83644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_83705 = f__50893__auto__();
(statearr_83705[(6)] = c__50892__auto___86492);

return statearr_83705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
} else {
if(cljs.core.truth_(com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,response))){
return com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.reader3_run_and_node_sync = (function com$wsscode$pathom$connect$reader3_run_and_node_sync(env,plan,p__83706){
var map__83707 = p__83706;
var map__83707__$1 = (((((!((map__83707 == null))))?(((((map__83707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83707):map__83707);
var node = map__83707__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83707__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var seq__83709_86536 = cljs.core.seq(run_and);
var chunk__83710_86537 = null;
var count__83711_86538 = (0);
var i__83712_86539 = (0);
while(true){
if((i__83712_86539 < count__83711_86538)){
var node_id_86540 = chunk__83710_86537.cljs$core$IIndexed$_nth$arity$2(null,i__83712_86539);
var G__83719_86541 = env;
var G__83720_86542 = plan;
var G__83721_86543 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_86540);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__83719_86541,G__83720_86542,G__83721_86543) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__83719_86541,G__83720_86542,G__83721_86543));


var G__86544 = seq__83709_86536;
var G__86545 = chunk__83710_86537;
var G__86546 = count__83711_86538;
var G__86547 = (i__83712_86539 + (1));
seq__83709_86536 = G__86544;
chunk__83710_86537 = G__86545;
count__83711_86538 = G__86546;
i__83712_86539 = G__86547;
continue;
} else {
var temp__5735__auto___86548 = cljs.core.seq(seq__83709_86536);
if(temp__5735__auto___86548){
var seq__83709_86549__$1 = temp__5735__auto___86548;
if(cljs.core.chunked_seq_QMARK_(seq__83709_86549__$1)){
var c__4556__auto___86550 = cljs.core.chunk_first(seq__83709_86549__$1);
var G__86551 = cljs.core.chunk_rest(seq__83709_86549__$1);
var G__86552 = c__4556__auto___86550;
var G__86553 = cljs.core.count(c__4556__auto___86550);
var G__86554 = (0);
seq__83709_86536 = G__86551;
chunk__83710_86537 = G__86552;
count__83711_86538 = G__86553;
i__83712_86539 = G__86554;
continue;
} else {
var node_id_86555 = cljs.core.first(seq__83709_86549__$1);
var G__83722_86556 = env;
var G__83723_86557 = plan;
var G__83724_86558 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_86555);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__83722_86556,G__83723_86557,G__83724_86558) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__83722_86556,G__83723_86557,G__83724_86558));


var G__86559 = cljs.core.next(seq__83709_86549__$1);
var G__86560 = null;
var G__86561 = (0);
var G__86562 = (0);
seq__83709_86536 = G__86559;
chunk__83710_86537 = G__86560;
count__83711_86538 = G__86561;
i__83712_86539 = G__86562;
continue;
}
} else {
}
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
});
com.wsscode.pathom.connect.reader3_run_and_node_async = (function com$wsscode$pathom$connect$reader3_run_and_node_async(env,plan,p__83725){
var map__83726 = p__83725;
var map__83726__$1 = (((((!((map__83726 == null))))?(((((map__83726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83726):map__83726);
var node = map__83726__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83726__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_83780){
var state_val_83781 = (state_83780[(1)]);
if((state_val_83781 === (7))){
var inst_83744 = (state_83780[(7)]);
var inst_83744__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
var inst_83745 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83744__$1);
var state_83780__$1 = (function (){var statearr_83782 = state_83780;
(statearr_83782[(7)] = inst_83744__$1);

return statearr_83782;
})();
if(inst_83745){
var statearr_83783_86564 = state_83780__$1;
(statearr_83783_86564[(1)] = (10));

} else {
var statearr_83784_86565 = state_83780__$1;
(statearr_83784_86565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (20))){
var inst_83761 = (state_83780[(2)]);
var state_83780__$1 = state_83780;
var statearr_83785_86566 = state_83780__$1;
(statearr_83785_86566[(2)] = inst_83761);

(statearr_83785_86566[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (1))){
var state_83780__$1 = state_83780;
var statearr_83786_86567 = state_83780__$1;
(statearr_83786_86567[(2)] = null);

(statearr_83786_86567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (4))){
var inst_83728 = (state_83780[(2)]);
var state_83780__$1 = state_83780;
var statearr_83787_86568 = state_83780__$1;
(statearr_83787_86568[(2)] = inst_83728);

(statearr_83787_86568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (15))){
var state_83780__$1 = state_83780;
var statearr_83788_86569 = state_83780__$1;
(statearr_83788_86569[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (21))){
var inst_83774 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_83780__$1 = state_83780;
var statearr_83790_86570 = state_83780__$1;
(statearr_83790_86570[(2)] = inst_83774);

(statearr_83790_86570[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (13))){
var inst_83748 = (state_83780[(2)]);
var inst_83749 = com.wsscode.async.async_cljs.throw_err(inst_83748);
var state_83780__$1 = state_83780;
var statearr_83791_86571 = state_83780__$1;
(statearr_83791_86571[(2)] = inst_83749);

(statearr_83791_86571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (22))){
var inst_83771 = (state_83780[(8)]);
var inst_83776 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_83771);
var state_83780__$1 = state_83780;
var statearr_83792_86572 = state_83780__$1;
(statearr_83792_86572[(2)] = inst_83776);

(statearr_83792_86572[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (6))){
var inst_83741 = (state_83780[(2)]);
var inst_83742 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node);
var state_83780__$1 = (function (){var statearr_83793 = state_83780;
(statearr_83793[(9)] = inst_83741);

return statearr_83793;
})();
if(inst_83742){
var statearr_83794_86573 = state_83780__$1;
(statearr_83794_86573[(1)] = (7));

} else {
var statearr_83795_86574 = state_83780__$1;
(statearr_83795_86574[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (17))){
var inst_83755 = (state_83780[(2)]);
var inst_83756 = com.wsscode.async.async_cljs.consumer_pair(inst_83755);
var state_83780__$1 = state_83780;
var statearr_83796_86575 = state_83780__$1;
(statearr_83796_86575[(2)] = inst_83756);

(statearr_83796_86575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (3))){
var inst_83771 = (state_83780[(8)]);
var inst_83771__$1 = (state_83780[(2)]);
var inst_83772 = (inst_83771__$1 == null);
var state_83780__$1 = (function (){var statearr_83797 = state_83780;
(statearr_83797[(8)] = inst_83771__$1);

return statearr_83797;
})();
if(cljs.core.truth_(inst_83772)){
var statearr_83798_86576 = state_83780__$1;
(statearr_83798_86576[(1)] = (21));

} else {
var statearr_83799_86577 = state_83780__$1;
(statearr_83799_86577[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (12))){
var inst_83765 = (state_83780[(2)]);
var state_83780__$1 = state_83780;
var statearr_83800_86578 = state_83780__$1;
(statearr_83800_86578[(2)] = inst_83765);

(statearr_83800_86578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (2))){
var _ = (function (){var statearr_83801 = state_83780;
(statearr_83801[(4)] = cljs.core.cons((5),(state_83780[(4)])));

return statearr_83801;
})();
var inst_83734 = cljs.core.async.to_chan_BANG_(run_and);
var inst_83735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_83736 = (function (){var from_chan = inst_83734;
var out_chan = inst_83735;
return (function com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline(node_id,res_ch){
var c__50892__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_83820){
var state_val_83821 = (state_83820[(1)]);
if((state_val_83821 === (7))){
var inst_83810 = (state_83820[(7)]);
var state_83820__$1 = state_83820;
var statearr_83822_86579 = state_83820__$1;
(statearr_83822_86579[(2)] = inst_83810);

(statearr_83822_86579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83821 === (1))){
var inst_83803 = (state_83820[(8)]);
var inst_83802 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id);
var inst_83803__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_83802) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_83802));
var inst_83804 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83803__$1);
var state_83820__$1 = (function (){var statearr_83823 = state_83820;
(statearr_83823[(8)] = inst_83803__$1);

return statearr_83823;
})();
if(inst_83804){
var statearr_83824_86580 = state_83820__$1;
(statearr_83824_86580[(1)] = (2));

} else {
var statearr_83825_86581 = state_83820__$1;
(statearr_83825_86581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83821 === (4))){
var inst_83810 = (state_83820[(7)]);
var inst_83810__$1 = (state_83820[(2)]);
var state_83820__$1 = (function (){var statearr_83826 = state_83820;
(statearr_83826[(7)] = inst_83810__$1);

return statearr_83826;
})();
if(cljs.core.truth_(inst_83810__$1)){
var statearr_83827_86582 = state_83820__$1;
(statearr_83827_86582[(1)] = (7));

} else {
var statearr_83828_86583 = state_83820__$1;
(statearr_83828_86583[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83821 === (6))){
var inst_83817 = (state_83820[(2)]);
var inst_83818 = cljs.core.async.close_BANG_(res_ch);
var state_83820__$1 = (function (){var statearr_83829 = state_83820;
(statearr_83829[(9)] = inst_83817);

return statearr_83829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_83820__$1,inst_83818);
} else {
if((state_val_83821 === (3))){
var inst_83803 = (state_83820[(8)]);
var state_83820__$1 = state_83820;
var statearr_83830_86584 = state_83820__$1;
(statearr_83830_86584[(2)] = inst_83803);

(statearr_83830_86584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83821 === (2))){
var inst_83803 = (state_83820[(8)]);
var state_83820__$1 = state_83820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83820__$1,(5),inst_83803);
} else {
if((state_val_83821 === (9))){
var inst_83815 = (state_83820[(2)]);
var state_83820__$1 = state_83820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83820__$1,(6),res_ch,inst_83815);
} else {
if((state_val_83821 === (5))){
var inst_83807 = (state_83820[(2)]);
var state_83820__$1 = state_83820;
var statearr_83831_86587 = state_83820__$1;
(statearr_83831_86587[(2)] = inst_83807);

(statearr_83831_86587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83821 === (8))){
var inst_83813 = cljs.core.PersistentHashMap.EMPTY;
var state_83820__$1 = state_83820;
var statearr_83832_86596 = state_83820__$1;
(statearr_83832_86596[(2)] = inst_83813);

(statearr_83832_86596[(1)] = (9));


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
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto____0 = (function (){
var statearr_83833 = [null,null,null,null,null,null,null,null,null,null];
(statearr_83833[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto__);

(statearr_83833[(1)] = (1));

return statearr_83833;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto____1 = (function (state_83820){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_83820);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e83834){var ex__50860__auto__ = e83834;
var statearr_83835_86597 = state_83820;
(statearr_83835_86597[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_83820[(4)]))){
var statearr_83836_86598 = state_83820;
(statearr_83836_86598[(1)] = cljs.core.first((state_83820[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86599 = state_83820;
state_83820 = G__86599;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto__ = function(state_83820){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto____1.call(this,state_83820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_83837 = f__50893__auto__();
(statearr_83837[(6)] = c__50892__auto____$1);

return statearr_83837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto____$1;
});
})();
var inst_83737 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_83735,inst_83736,inst_83734);
var inst_83738 = cljs.core.PersistentVector.EMPTY;
var inst_83739 = cljs.core.async.into(inst_83738,inst_83735);
var state_83780__$1 = (function (){var statearr_83838 = state_83780;
(statearr_83838[(10)] = inst_83737);

return statearr_83838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83780__$1,(6),inst_83739);
} else {
if((state_val_83781 === (23))){
var inst_83778 = (state_83780[(2)]);
var state_83780__$1 = state_83780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83780__$1,inst_83778);
} else {
if((state_val_83781 === (19))){
var state_83780__$1 = state_83780;
var statearr_83839_86600 = state_83780__$1;
(statearr_83839_86600[(2)] = null);

(statearr_83839_86600[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (11))){
var inst_83744 = (state_83780[(7)]);
var inst_83751 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83744);
var state_83780__$1 = state_83780;
if(cljs.core.truth_(inst_83751)){
var statearr_83841_86611 = state_83780__$1;
(statearr_83841_86611[(1)] = (14));

} else {
var statearr_83842_86612 = state_83780__$1;
(statearr_83842_86612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (9))){
var inst_83768 = (state_83780[(2)]);
var _ = (function (){var statearr_83843 = state_83780;
(statearr_83843[(4)] = cljs.core.rest((state_83780[(4)])));

return statearr_83843;
})();
var state_83780__$1 = state_83780;
var statearr_83844_86613 = state_83780__$1;
(statearr_83844_86613[(2)] = inst_83768);

(statearr_83844_86613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (5))){
var _ = (function (){var statearr_83845 = state_83780;
(statearr_83845[(4)] = cljs.core.rest((state_83780[(4)])));

return statearr_83845;
})();
var state_83780__$1 = state_83780;
var ex83840 = (state_83780__$1[(2)]);
var statearr_83846_86617 = state_83780__$1;
(statearr_83846_86617[(5)] = ex83840);


var statearr_83847_86618 = state_83780__$1;
(statearr_83847_86618[(1)] = (4));

(statearr_83847_86618[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (14))){
var inst_83744 = (state_83780[(7)]);
var inst_83753 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83744);
var state_83780__$1 = state_83780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83780__$1,(17),inst_83753);
} else {
if((state_val_83781 === (16))){
var inst_83763 = (state_83780[(2)]);
var state_83780__$1 = state_83780;
var statearr_83848_86620 = state_83780__$1;
(statearr_83848_86620[(2)] = inst_83763);

(statearr_83848_86620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (10))){
var inst_83744 = (state_83780[(7)]);
var state_83780__$1 = state_83780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83780__$1,(13),inst_83744);
} else {
if((state_val_83781 === (18))){
var inst_83744 = (state_83780[(7)]);
var state_83780__$1 = state_83780;
var statearr_83849_86622 = state_83780__$1;
(statearr_83849_86622[(2)] = inst_83744);

(statearr_83849_86622[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83781 === (8))){
var state_83780__$1 = state_83780;
var statearr_83850_86623 = state_83780__$1;
(statearr_83850_86623[(2)] = null);

(statearr_83850_86623[(1)] = (9));


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
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto____0 = (function (){
var statearr_83851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_83851[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto__);

(statearr_83851[(1)] = (1));

return statearr_83851;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto____1 = (function (state_83780){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_83780);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e83852){var ex__50860__auto__ = e83852;
var statearr_83853_86627 = state_83780;
(statearr_83853_86627[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_83780[(4)]))){
var statearr_83854_86631 = state_83780;
(statearr_83854_86631[(1)] = cljs.core.first((state_83780[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86633 = state_83780;
state_83780 = G__86633;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto__ = function(state_83780){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto____1.call(this,state_83780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_83855 = f__50893__auto__();
(statearr_83855[(6)] = c__50892__auto___86563);

return statearr_83855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
});
/**
 * Execute an AND node.
 */
com.wsscode.pathom.connect.reader3_run_and_node = (function com$wsscode$pathom$connect$reader3_run_and_node(env,plan,node){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","and-node-run","com.wsscode.pathom.connect/and-node-run",1169565319)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905).cljs$core$IFn$_invoke$arity$1(env))){
return com.wsscode.pathom.connect.reader3_run_and_node_async(env,plan,node);
} else {
return com.wsscode.pathom.connect.reader3_run_and_node_sync(env,plan,node);
}
});
com.wsscode.pathom.connect.reader3_run_or_node_sync = (function com$wsscode$pathom$connect$reader3_run_or_node_sync(env,plan,p__83856){
var map__83857 = p__83856;
var map__83857__$1 = (((((!((map__83857 == null))))?(((((map__83857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83857):map__83857);
var or_node = map__83857__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83857__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var nodes_86634 = run_or;
var resp_86635 = null;
while(true){
var vec__83865_86636 = nodes_86634;
var seq__83866_86637 = cljs.core.seq(vec__83865_86636);
var first__83867_86638 = cljs.core.first(seq__83866_86637);
var seq__83866_86639__$1 = cljs.core.next(seq__83866_86637);
var node_id_86640 = first__83867_86638;
var tail_86641 = seq__83866_86639__$1;
if(cljs.core.truth_(node_id_86640)){
var response_86642 = (function (){var G__83868 = env;
var G__83869 = plan;
var G__83870 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_86640);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__83868,G__83869,G__83870) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__83868,G__83869,G__83870));
})();
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node)){
} else {
var G__86643 = tail_86641;
var G__86644 = response_86642;
nodes_86634 = G__86643;
resp_86635 = G__86644;
continue;
}
} else {
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
});
com.wsscode.pathom.connect.reader3_run_or_node_async = (function com$wsscode$pathom$connect$reader3_run_or_node_async(env,plan,p__83871){
var map__83872 = p__83871;
var map__83872__$1 = (((((!((map__83872 == null))))?(((((map__83872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83872):map__83872);
var or_node = map__83872__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83872__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_83944){
var state_val_83945 = (state_83944[(1)]);
if((state_val_83945 === (7))){
var inst_83911 = (state_83944[(7)]);
var inst_83910 = (state_83944[(2)]);
var inst_83911__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
var inst_83912 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83911__$1);
var state_83944__$1 = (function (){var statearr_83946 = state_83944;
(statearr_83946[(8)] = inst_83910);

(statearr_83946[(7)] = inst_83911__$1);

return statearr_83946;
})();
if(inst_83912){
var statearr_83947_86646 = state_83944__$1;
(statearr_83947_86646[(1)] = (18));

} else {
var statearr_83948_86647 = state_83944__$1;
(statearr_83948_86647[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (20))){
var inst_83932 = (state_83944[(2)]);
var _ = (function (){var statearr_83949 = state_83944;
(statearr_83949[(4)] = cljs.core.rest((state_83944[(4)])));

return statearr_83949;
})();
var state_83944__$1 = state_83944;
var statearr_83950_86648 = state_83944__$1;
(statearr_83950_86648[(2)] = inst_83932);

(statearr_83950_86648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (27))){
var state_83944__$1 = state_83944;
var statearr_83951_86649 = state_83944__$1;
(statearr_83951_86649[(2)] = null);

(statearr_83951_86649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (1))){
var state_83944__$1 = state_83944;
var statearr_83952_86650 = state_83944__$1;
(statearr_83952_86650[(2)] = null);

(statearr_83952_86650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (24))){
var inst_83930 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
var statearr_83953_86651 = state_83944__$1;
(statearr_83953_86651[(2)] = inst_83930);

(statearr_83953_86651[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (4))){
var inst_83874 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
var statearr_83954_86653 = state_83944__$1;
(statearr_83954_86653[(2)] = inst_83874);

(statearr_83954_86653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (15))){
var inst_83899 = (state_83944[(9)]);
var state_83944__$1 = state_83944;
var statearr_83955_86656 = state_83944__$1;
(statearr_83955_86656[(2)] = inst_83899);

(statearr_83955_86656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (21))){
var inst_83915 = (state_83944[(2)]);
var inst_83916 = com.wsscode.async.async_cljs.throw_err(inst_83915);
var state_83944__$1 = state_83944;
var statearr_83956_86660 = state_83944__$1;
(statearr_83956_86660[(2)] = inst_83916);

(statearr_83956_86660[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (31))){
var inst_83942 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83944__$1,inst_83942);
} else {
if((state_val_83945 === (13))){
var inst_83899 = (state_83944[(2)]);
var inst_83900 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node);
var state_83944__$1 = (function (){var statearr_83957 = state_83944;
(statearr_83957[(9)] = inst_83899);

return statearr_83957;
})();
if(inst_83900){
var statearr_83958_86662 = state_83944__$1;
(statearr_83958_86662[(1)] = (15));

} else {
var statearr_83959_86663 = state_83944__$1;
(statearr_83959_86663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (22))){
var inst_83911 = (state_83944[(7)]);
var inst_83920 = com.wsscode.async.async_cljs.promise__GT_chan(inst_83911);
var state_83944__$1 = state_83944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83944__$1,(25),inst_83920);
} else {
if((state_val_83945 === (29))){
var inst_83938 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_83944__$1 = state_83944;
var statearr_83960_86664 = state_83944__$1;
(statearr_83960_86664[(2)] = inst_83938);

(statearr_83960_86664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (6))){
var inst_83881 = (state_83944[(10)]);
var inst_83888 = (state_83944[(11)]);
var inst_83887 = cljs.core.seq(inst_83881);
var inst_83888__$1 = cljs.core.first(inst_83887);
var inst_83889 = cljs.core.next(inst_83887);
var state_83944__$1 = (function (){var statearr_83961 = state_83944;
(statearr_83961[(11)] = inst_83888__$1);

(statearr_83961[(12)] = inst_83889);

return statearr_83961;
})();
if(cljs.core.truth_(inst_83888__$1)){
var statearr_83962_86665 = state_83944__$1;
(statearr_83962_86665[(1)] = (8));

} else {
var statearr_83963_86666 = state_83944__$1;
(statearr_83963_86666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (28))){
var inst_83928 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
var statearr_83964_86667 = state_83944__$1;
(statearr_83964_86667[(2)] = inst_83928);

(statearr_83964_86667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (25))){
var inst_83922 = (state_83944[(2)]);
var inst_83923 = com.wsscode.async.async_cljs.consumer_pair(inst_83922);
var state_83944__$1 = state_83944;
var statearr_83965_86668 = state_83944__$1;
(statearr_83965_86668[(2)] = inst_83923);

(statearr_83965_86668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (17))){
var inst_83905 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
var statearr_83966_86669 = state_83944__$1;
(statearr_83966_86669[(2)] = inst_83905);

(statearr_83966_86669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (3))){
var inst_83935 = (state_83944[(13)]);
var inst_83935__$1 = (state_83944[(2)]);
var inst_83936 = (inst_83935__$1 == null);
var state_83944__$1 = (function (){var statearr_83967 = state_83944;
(statearr_83967[(13)] = inst_83935__$1);

return statearr_83967;
})();
if(cljs.core.truth_(inst_83936)){
var statearr_83968_86670 = state_83944__$1;
(statearr_83968_86670[(1)] = (29));

} else {
var statearr_83969_86671 = state_83944__$1;
(statearr_83969_86671[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (12))){
var inst_83892 = (state_83944[(14)]);
var state_83944__$1 = state_83944;
var statearr_83970_86672 = state_83944__$1;
(statearr_83970_86672[(2)] = inst_83892);

(statearr_83970_86672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (2))){
var _ = (function (){var statearr_83971 = state_83944;
(statearr_83971[(4)] = cljs.core.cons((5),(state_83944[(4)])));

return statearr_83971;
})();
var inst_83880 = run_or;
var inst_83881 = inst_83880;
var inst_83882 = null;
var state_83944__$1 = (function (){var statearr_83972 = state_83944;
(statearr_83972[(10)] = inst_83881);

(statearr_83972[(15)] = inst_83882);

return statearr_83972;
})();
var statearr_83973_86673 = state_83944__$1;
(statearr_83973_86673[(2)] = null);

(statearr_83973_86673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (23))){
var state_83944__$1 = state_83944;
var statearr_83974_86674 = state_83944__$1;
(statearr_83974_86674[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (19))){
var inst_83911 = (state_83944[(7)]);
var inst_83918 = com.wsscode.async.async_cljs.promise_QMARK_(inst_83911);
var state_83944__$1 = state_83944;
if(cljs.core.truth_(inst_83918)){
var statearr_83976_86675 = state_83944__$1;
(statearr_83976_86675[(1)] = (22));

} else {
var statearr_83977_86676 = state_83944__$1;
(statearr_83977_86676[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (11))){
var inst_83892 = (state_83944[(14)]);
var state_83944__$1 = state_83944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83944__$1,(14),inst_83892);
} else {
if((state_val_83945 === (9))){
var inst_83882 = (state_83944[(15)]);
var state_83944__$1 = state_83944;
var statearr_83979_86677 = state_83944__$1;
(statearr_83979_86677[(2)] = inst_83882);

(statearr_83979_86677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (5))){
var _ = (function (){var statearr_83980 = state_83944;
(statearr_83980[(4)] = cljs.core.rest((state_83944[(4)])));

return statearr_83980;
})();
var state_83944__$1 = state_83944;
var ex83978 = (state_83944__$1[(2)]);
var statearr_83981_86678 = state_83944__$1;
(statearr_83981_86678[(5)] = ex83978);


var statearr_83982_86679 = state_83944__$1;
(statearr_83982_86679[(1)] = (4));

(statearr_83982_86679[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (14))){
var inst_83896 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
var statearr_83983_86680 = state_83944__$1;
(statearr_83983_86680[(2)] = inst_83896);

(statearr_83983_86680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (26))){
var inst_83911 = (state_83944[(7)]);
var state_83944__$1 = state_83944;
var statearr_83984_86681 = state_83944__$1;
(statearr_83984_86681[(2)] = inst_83911);

(statearr_83984_86681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (16))){
var inst_83889 = (state_83944[(12)]);
var inst_83899 = (state_83944[(9)]);
var inst_83881 = inst_83889;
var inst_83882 = inst_83899;
var state_83944__$1 = (function (){var statearr_83985 = state_83944;
(statearr_83985[(10)] = inst_83881);

(statearr_83985[(15)] = inst_83882);

return statearr_83985;
})();
var statearr_83986_86682 = state_83944__$1;
(statearr_83986_86682[(2)] = null);

(statearr_83986_86682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (30))){
var inst_83935 = (state_83944[(13)]);
var inst_83940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_83935);
var state_83944__$1 = state_83944;
var statearr_83987_86683 = state_83944__$1;
(statearr_83987_86683[(2)] = inst_83940);

(statearr_83987_86683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (10))){
var inst_83908 = (state_83944[(2)]);
var state_83944__$1 = state_83944;
var statearr_83988_86684 = state_83944__$1;
(statearr_83988_86684[(2)] = inst_83908);

(statearr_83988_86684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83945 === (18))){
var inst_83911 = (state_83944[(7)]);
var state_83944__$1 = state_83944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83944__$1,(21),inst_83911);
} else {
if((state_val_83945 === (8))){
var inst_83888 = (state_83944[(11)]);
var inst_83892 = (state_83944[(14)]);
var inst_83891 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,inst_83888);
var inst_83892__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_83891) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_83891));
var inst_83893 = com.wsscode.async.async_cljs.chan_QMARK_(inst_83892__$1);
var state_83944__$1 = (function (){var statearr_83989 = state_83944;
(statearr_83989[(14)] = inst_83892__$1);

return statearr_83989;
})();
if(inst_83893){
var statearr_83990_86685 = state_83944__$1;
(statearr_83990_86685[(1)] = (11));

} else {
var statearr_83991_86697 = state_83944__$1;
(statearr_83991_86697[(1)] = (12));

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
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto____0 = (function (){
var statearr_83992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83992[(0)] = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto__);

(statearr_83992[(1)] = (1));

return statearr_83992;
});
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto____1 = (function (state_83944){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_83944);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e83993){var ex__50860__auto__ = e83993;
var statearr_83994_86698 = state_83944;
(statearr_83994_86698[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_83944[(4)]))){
var statearr_83995_86699 = state_83944;
(statearr_83995_86699[(1)] = cljs.core.first((state_83944[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86700 = state_83944;
state_83944 = G__86700;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto__ = function(state_83944){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto____1.call(this,state_83944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_83996 = f__50893__auto__();
(statearr_83996[(6)] = c__50892__auto___86645);

return statearr_83996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
});
/**
 * Execute an OR node.
 */
com.wsscode.pathom.connect.reader3_run_or_node = (function com$wsscode$pathom$connect$reader3_run_or_node(env,plan,node){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","or-node-run","com.wsscode.pathom.connect/or-node-run",1191868157)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905).cljs$core$IFn$_invoke$arity$1(env))){
return com.wsscode.pathom.connect.reader3_run_or_node_async(env,plan,node);
} else {
return com.wsscode.pathom.connect.reader3_run_or_node_sync(env,plan,node);
}
});
com.wsscode.pathom.connect.reader3_run_node = (function com$wsscode$pathom$connect$reader3_run_node(env,plan,node){
var G__83997 = com.wsscode.pathom.connect.planner.node_kind(node);
var G__83997__$1 = (((G__83997 instanceof cljs.core.Keyword))?G__83997.fqn:null);
switch (G__83997__$1) {
case "com.wsscode.pathom.connect.planner/node-resolver":
return com.wsscode.pathom.connect.reader3_run_resolver_node(env,plan,node);

break;
case "com.wsscode.pathom.connect.planner/node-and":
return com.wsscode.pathom.connect.reader3_run_and_node(env,plan,node);

break;
case "com.wsscode.pathom.connect.planner/node-or":
return com.wsscode.pathom.connect.reader3_run_or_node(env,plan,node);

break;
default:
return null;

}
});
/**
 * Prepare AST from parent query. This will lift placeholder nodes, convert
 *   query to AST and remove children keys that are already present in the current
 *   entity.
 */
com.wsscode.pathom.connect.reader3_prepare_ast = (function com$wsscode$pathom$connect$reader3_prepare_ast(p__83998){
var map__83999 = p__83998;
var map__83999__$1 = (((((!((map__83999 == null))))?(((((map__83999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83999):map__83999);
var env = map__83999__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83999__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.planner.prepare_ast(env,com.wsscode.pathom.core.query__GT_ast(parent_query));
});
com.wsscode.pathom.connect.reader3_compute_run_graph = (function com$wsscode$pathom$connect$reader3_compute_run_graph(env){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = com.wsscode.pathom.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan], null));

return plan;
});
com.wsscode.pathom.connect.reader3 = (function com$wsscode$pathom$connect$reader3(p__84001){
var map__84002 = p__84001;
var map__84002__$1 = (((((!((map__84002 == null))))?(((((map__84002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84002):map__84002);
var env = map__84002__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84002__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var reader3_computed_plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84002__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84002__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-enter","com.wsscode.pathom.connect/reader3-enter",-1844342031)], null));

var path = com.wsscode.pathom.core.path_without_placeholders(env);
if(cljs.core.contains_QMARK_(reader3_computed_plans,path)){
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
} else {
var ast = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));
var res__29443__auto__ = com.wsscode.pathom.connect.reader3_prepare_ast(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__29442__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));

return res__29443__auto__;
})():com.wsscode.pathom.connect.reader3_prepare_ast(env));
var available_data = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__29442__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));
var res__29443__auto__ = com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__29442__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));

return res__29443__auto__;
})():com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env)));
var process_start = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935)], null));
var plan = com.wsscode.pathom.connect.reader3_compute_run_graph(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","available-data","com.wsscode.pathom.connect.planner/available-data",-2081264117),available_data], null)], 0)));
var plan_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(plan);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000),plan_STAR_);
var temp__5733__auto__ = com.wsscode.pathom.connect.planner.get_root_node(plan);
if(cljs.core.truth_(temp__5733__auto__)){
var root = temp__5733__auto__;
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_84074){
var state_val_84075 = (state_84074[(1)]);
if((state_val_84075 === (7))){
var inst_84010 = (state_84074[(7)]);
var inst_84017 = com.wsscode.async.async_cljs.promise_QMARK_(inst_84010);
var state_84074__$1 = state_84074;
if(cljs.core.truth_(inst_84017)){
var statearr_84076_86719 = state_84074__$1;
(statearr_84076_86719[(1)] = (10));

} else {
var statearr_84077_86720 = state_84074__$1;
(statearr_84077_86720[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (20))){
var inst_84045 = (state_84074[(2)]);
var inst_84046 = com.wsscode.async.async_cljs.throw_err(inst_84045);
var state_84074__$1 = state_84074;
var statearr_84078_86721 = state_84074__$1;
(statearr_84078_86721[(2)] = inst_84046);

(statearr_84078_86721[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (27))){
var inst_84058 = (state_84074[(2)]);
var state_84074__$1 = state_84074;
var statearr_84079_86722 = state_84074__$1;
(statearr_84079_86722[(2)] = inst_84058);

(statearr_84079_86722[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (1))){
var state_84074__$1 = state_84074;
var statearr_84080_86723 = state_84074__$1;
(statearr_84080_86723[(2)] = null);

(statearr_84080_86723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (24))){
var inst_84052 = (state_84074[(2)]);
var inst_84053 = com.wsscode.async.async_cljs.consumer_pair(inst_84052);
var state_84074__$1 = state_84074;
var statearr_84081_86724 = state_84074__$1;
(statearr_84081_86724[(2)] = inst_84053);

(statearr_84081_86724[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (4))){
var inst_84004 = (state_84074[(2)]);
var state_84074__$1 = state_84074;
var statearr_84082_86725 = state_84074__$1;
(statearr_84082_86725[(2)] = inst_84004);

(statearr_84082_86725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (15))){
var state_84074__$1 = state_84074;
var statearr_84083_86726 = state_84074__$1;
(statearr_84083_86726[(2)] = null);

(statearr_84083_86726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (21))){
var inst_84041 = (state_84074[(8)]);
var inst_84050 = com.wsscode.async.async_cljs.promise__GT_chan(inst_84041);
var state_84074__$1 = state_84074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84074__$1,(24),inst_84050);
} else {
if((state_val_84075 === (13))){
var inst_84021 = (state_84074[(2)]);
var inst_84022 = com.wsscode.async.async_cljs.consumer_pair(inst_84021);
var state_84074__$1 = state_84074;
var statearr_84084_86747 = state_84074__$1;
(statearr_84084_86747[(2)] = inst_84022);

(statearr_84084_86747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (22))){
var state_84074__$1 = state_84074;
var statearr_84085_86748 = state_84074__$1;
(statearr_84085_86748[(1)] = (25));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (29))){
var inst_84065 = (state_84074[(9)]);
var inst_84070 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_84065);
var state_84074__$1 = state_84074;
var statearr_84087_86749 = state_84074__$1;
(statearr_84087_86749[(2)] = inst_84070);

(statearr_84087_86749[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (6))){
var inst_84010 = (state_84074[(7)]);
var state_84074__$1 = state_84074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84074__$1,(9),inst_84010);
} else {
if((state_val_84075 === (28))){
var inst_84068 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_84074__$1 = state_84074;
var statearr_84088_86750 = state_84074__$1;
(statearr_84088_86750[(2)] = inst_84068);

(statearr_84088_86750[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (25))){
var inst_84041 = (state_84074[(8)]);
var state_84074__$1 = state_84074;
var statearr_84089_86751 = state_84074__$1;
(statearr_84089_86751[(2)] = inst_84041);

(statearr_84089_86751[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (17))){
var inst_84041 = (state_84074[(8)]);
var state_84074__$1 = state_84074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84074__$1,(20),inst_84041);
} else {
if((state_val_84075 === (3))){
var inst_84065 = (state_84074[(9)]);
var inst_84065__$1 = (state_84074[(2)]);
var inst_84066 = (inst_84065__$1 == null);
var state_84074__$1 = (function (){var statearr_84090 = state_84074;
(statearr_84090[(9)] = inst_84065__$1);

return statearr_84090;
})();
if(cljs.core.truth_(inst_84066)){
var statearr_84091_86752 = state_84074__$1;
(statearr_84091_86752[(1)] = (28));

} else {
var statearr_84092_86753 = state_84074__$1;
(statearr_84092_86753[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (12))){
var inst_84029 = (state_84074[(2)]);
var state_84074__$1 = state_84074;
var statearr_84093_86754 = state_84074__$1;
(statearr_84093_86754[(2)] = inst_84029);

(statearr_84093_86754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (2))){
var inst_84010 = (state_84074[(7)]);
var _ = (function (){var statearr_84094 = state_84074;
(statearr_84094[(4)] = cljs.core.cons((5),(state_84074[(4)])));

return statearr_84094;
})();
var inst_84010__$1 = com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);
var inst_84011 = com.wsscode.async.async_cljs.chan_QMARK_(inst_84010__$1);
var state_84074__$1 = (function (){var statearr_84095 = state_84074;
(statearr_84095[(7)] = inst_84010__$1);

return statearr_84095;
})();
if(inst_84011){
var statearr_84096_86755 = state_84074__$1;
(statearr_84096_86755[(1)] = (6));

} else {
var statearr_84097_86756 = state_84074__$1;
(statearr_84097_86756[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (23))){
var inst_84060 = (state_84074[(2)]);
var state_84074__$1 = state_84074;
var statearr_84098_86757 = state_84074__$1;
(statearr_84098_86757[(2)] = inst_84060);

(statearr_84098_86757[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (19))){
var inst_84062 = (state_84074[(2)]);
var _ = (function (){var statearr_84099 = state_84074;
(statearr_84099[(4)] = cljs.core.rest((state_84074[(4)])));

return statearr_84099;
})();
var state_84074__$1 = state_84074;
var statearr_84100_86773 = state_84074__$1;
(statearr_84100_86773[(2)] = inst_84062);

(statearr_84100_86773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (11))){
var state_84074__$1 = state_84074;
var statearr_84102_86774 = state_84074__$1;
(statearr_84102_86774[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (9))){
var inst_84014 = (state_84074[(2)]);
var inst_84015 = com.wsscode.async.async_cljs.throw_err(inst_84014);
var state_84074__$1 = state_84074;
var statearr_84104_86775 = state_84074__$1;
(statearr_84104_86775[(2)] = inst_84015);

(statearr_84104_86775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (5))){
var _ = (function (){var statearr_84105 = state_84074;
(statearr_84105[(4)] = cljs.core.rest((state_84074[(4)])));

return statearr_84105;
})();
var state_84074__$1 = state_84074;
var ex84101 = (state_84074__$1[(2)]);
var statearr_84106_86776 = state_84074__$1;
(statearr_84106_86776[(5)] = ex84101);


var statearr_84107_86777 = state_84074__$1;
(statearr_84107_86777[(1)] = (4));

(statearr_84107_86777[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (14))){
var inst_84010 = (state_84074[(7)]);
var state_84074__$1 = state_84074;
var statearr_84108_86778 = state_84074__$1;
(statearr_84108_86778[(2)] = inst_84010);

(statearr_84108_86778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (26))){
var state_84074__$1 = state_84074;
var statearr_84109_86779 = state_84074__$1;
(statearr_84109_86779[(2)] = null);

(statearr_84109_86779[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (16))){
var inst_84027 = (state_84074[(2)]);
var state_84074__$1 = state_84074;
var statearr_84110_86780 = state_84074__$1;
(statearr_84110_86780[(2)] = inst_84027);

(statearr_84110_86780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (30))){
var inst_84072 = (state_84074[(2)]);
var state_84074__$1 = state_84074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84074__$1,inst_84072);
} else {
if((state_val_84075 === (10))){
var inst_84010 = (state_84074[(7)]);
var inst_84019 = com.wsscode.async.async_cljs.promise__GT_chan(inst_84010);
var state_84074__$1 = state_84074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84074__$1,(13),inst_84019);
} else {
if((state_val_84075 === (18))){
var inst_84041 = (state_84074[(8)]);
var inst_84048 = com.wsscode.async.async_cljs.promise_QMARK_(inst_84041);
var state_84074__$1 = state_84074;
if(cljs.core.truth_(inst_84048)){
var statearr_84111_86781 = state_84074__$1;
(statearr_84111_86781[(1)] = (21));

} else {
var statearr_84112_86782 = state_84074__$1;
(statearr_84112_86782[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84075 === (8))){
var inst_84041 = (state_84074[(8)]);
var inst_84031 = (state_84074[(2)]);
var inst_84032 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_84033 = cljs.core.deref(plan_STAR_);
var inst_84034 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_84035 = ["#6ac5ec"];
var inst_84036 = cljs.core.PersistentHashMap.fromArrays(inst_84034,inst_84035);
var inst_84037 = [new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),inst_84033,inst_84036];
var inst_84038 = cljs.core.PersistentHashMap.fromArrays(inst_84032,inst_84037);
var inst_84039 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,inst_84038);
var inst_84040 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path);
var inst_84041__$1 = com.wsscode.pathom.core.reader(inst_84040);
var inst_84042 = com.wsscode.async.async_cljs.chan_QMARK_(inst_84041__$1);
var state_84074__$1 = (function (){var statearr_84113 = state_84074;
(statearr_84113[(10)] = inst_84031);

(statearr_84113[(11)] = inst_84039);

(statearr_84113[(8)] = inst_84041__$1);

return statearr_84113;
})();
if(inst_84042){
var statearr_84114_86799 = state_84074__$1;
(statearr_84114_86799[(1)] = (17));

} else {
var statearr_84115_86800 = state_84074__$1;
(statearr_84115_86800[(1)] = (18));

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
});
return (function() {
var com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto____0 = (function (){
var statearr_84116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84116[(0)] = com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto__);

(statearr_84116[(1)] = (1));

return statearr_84116;
});
var com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto____1 = (function (state_84074){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_84074);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e84117){var ex__50860__auto__ = e84117;
var statearr_84118_86801 = state_84074;
(statearr_84118_86801[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_84074[(4)]))){
var statearr_84119_86802 = state_84074;
(statearr_84119_86802[(1)] = cljs.core.first((state_84074[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86803 = state_84074;
state_84074 = G__86803;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto__ = function(state_84074){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto____1.call(this,state_84074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$reader3_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_84120 = f__50893__auto__();
(statearr_84120[(6)] = c__50892__auto___86718);

return statearr_84120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
} else {
com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.deref(plan_STAR_),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#6ac5ec"], null)], null));

return com.wsscode.pathom.core.reader(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path));
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__84121,e){
var map__84122 = p__84121;
var map__84122__$1 = (((((!((map__84122 == null))))?(((((map__84122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84122):map__84122);
var env = map__84122__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84122__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__84124 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__84124__$1 = (((((!((map__84124 == null))))?(((((map__84124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84124):map__84124);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84124__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__84126_86809 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__84131_86810 = null;
var count__84132_86811 = (0);
var i__84133_86812 = (0);
while(true){
if((i__84133_86812 < count__84132_86811)){
var o_86819 = chunk__84131_86810.cljs$core$IIndexed$_nth$arity$2(null,i__84133_86812);
var seq__84134_86820 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__84135_86821 = null;
var count__84136_86822 = (0);
var i__84137_86823 = (0);
while(true){
if((i__84137_86823 < count__84136_86822)){
var i_86824 = chunk__84135_86821.cljs$core$IIndexed$_nth$arity$2(null,i__84137_86823);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_86824,o_86819)),e);


var G__86825 = seq__84134_86820;
var G__86826 = chunk__84135_86821;
var G__86827 = count__84136_86822;
var G__86828 = (i__84137_86823 + (1));
seq__84134_86820 = G__86825;
chunk__84135_86821 = G__86826;
count__84136_86822 = G__86827;
i__84137_86823 = G__86828;
continue;
} else {
var temp__5735__auto___86829 = cljs.core.seq(seq__84134_86820);
if(temp__5735__auto___86829){
var seq__84134_86830__$1 = temp__5735__auto___86829;
if(cljs.core.chunked_seq_QMARK_(seq__84134_86830__$1)){
var c__4556__auto___86831 = cljs.core.chunk_first(seq__84134_86830__$1);
var G__86832 = cljs.core.chunk_rest(seq__84134_86830__$1);
var G__86833 = c__4556__auto___86831;
var G__86834 = cljs.core.count(c__4556__auto___86831);
var G__86835 = (0);
seq__84134_86820 = G__86832;
chunk__84135_86821 = G__86833;
count__84136_86822 = G__86834;
i__84137_86823 = G__86835;
continue;
} else {
var i_86836 = cljs.core.first(seq__84134_86830__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_86836,o_86819)),e);


var G__86837 = cljs.core.next(seq__84134_86830__$1);
var G__86838 = null;
var G__86839 = (0);
var G__86840 = (0);
seq__84134_86820 = G__86837;
chunk__84135_86821 = G__86838;
count__84136_86822 = G__86839;
i__84137_86823 = G__86840;
continue;
}
} else {
}
}
break;
}

var G__86841 = seq__84126_86809;
var G__86842 = chunk__84131_86810;
var G__86843 = count__84132_86811;
var G__86844 = (i__84133_86812 + (1));
seq__84126_86809 = G__86841;
chunk__84131_86810 = G__86842;
count__84132_86811 = G__86843;
i__84133_86812 = G__86844;
continue;
} else {
var temp__5735__auto___86845 = cljs.core.seq(seq__84126_86809);
if(temp__5735__auto___86845){
var seq__84126_86846__$1 = temp__5735__auto___86845;
if(cljs.core.chunked_seq_QMARK_(seq__84126_86846__$1)){
var c__4556__auto___86847 = cljs.core.chunk_first(seq__84126_86846__$1);
var G__86848 = cljs.core.chunk_rest(seq__84126_86846__$1);
var G__86849 = c__4556__auto___86847;
var G__86850 = cljs.core.count(c__4556__auto___86847);
var G__86851 = (0);
seq__84126_86809 = G__86848;
chunk__84131_86810 = G__86849;
count__84132_86811 = G__86850;
i__84133_86812 = G__86851;
continue;
} else {
var o_86852 = cljs.core.first(seq__84126_86846__$1);
var seq__84127_86853 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__84128_86854 = null;
var count__84129_86855 = (0);
var i__84130_86856 = (0);
while(true){
if((i__84130_86856 < count__84129_86855)){
var i_86857 = chunk__84128_86854.cljs$core$IIndexed$_nth$arity$2(null,i__84130_86856);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_86857,o_86852)),e);


var G__86858 = seq__84127_86853;
var G__86859 = chunk__84128_86854;
var G__86860 = count__84129_86855;
var G__86861 = (i__84130_86856 + (1));
seq__84127_86853 = G__86858;
chunk__84128_86854 = G__86859;
count__84129_86855 = G__86860;
i__84130_86856 = G__86861;
continue;
} else {
var temp__5735__auto___86862__$1 = cljs.core.seq(seq__84127_86853);
if(temp__5735__auto___86862__$1){
var seq__84127_86863__$1 = temp__5735__auto___86862__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84127_86863__$1)){
var c__4556__auto___86864 = cljs.core.chunk_first(seq__84127_86863__$1);
var G__86865 = cljs.core.chunk_rest(seq__84127_86863__$1);
var G__86866 = c__4556__auto___86864;
var G__86867 = cljs.core.count(c__4556__auto___86864);
var G__86868 = (0);
seq__84127_86853 = G__86865;
chunk__84128_86854 = G__86866;
count__84129_86855 = G__86867;
i__84130_86856 = G__86868;
continue;
} else {
var i_86869 = cljs.core.first(seq__84127_86863__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_86869,o_86852)),e);


var G__86870 = cljs.core.next(seq__84127_86863__$1);
var G__86871 = null;
var G__86872 = (0);
var G__86873 = (0);
seq__84127_86853 = G__86870;
chunk__84128_86854 = G__86871;
count__84129_86855 = G__86872;
i__84130_86856 = G__86873;
continue;
}
} else {
}
}
break;
}

var G__86874 = cljs.core.next(seq__84126_86846__$1);
var G__86875 = null;
var G__86876 = (0);
var G__86877 = (0);
seq__84126_86809 = G__86874;
chunk__84131_86810 = G__86875;
count__84132_86811 = G__86876;
i__84133_86812 = G__86877;
continue;
}
} else {
}
}
break;
}

return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.zipmap(output_SINGLEQUOTE_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))));
});
com.wsscode.pathom.connect.group_input_indexes = (function com$wsscode$pathom$connect$group_input_indexes(inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__84138){
var vec__84139 = p__84138;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84139,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84139,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__84146){
var map__84147 = p__84146;
var map__84147__$1 = (((((!((map__84147 == null))))?(((((map__84147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84147):map__84147);
var env = map__84147__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84147__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84147__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84147__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___86915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_84634){
var state_val_84635 = (state_84634[(1)]);
if((state_val_84635 === (121))){
var inst_84544 = (state_84634[(7)]);
var inst_84554 = cljs.core.async.close_BANG_(inst_84544);
var state_84634__$1 = state_84634;
var statearr_84636_86916 = state_84634__$1;
(statearr_84636_86916[(2)] = inst_84554);

(statearr_84636_86916[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (65))){
var state_84634__$1 = state_84634;
var statearr_84637_86917 = state_84634__$1;
(statearr_84637_86917[(2)] = null);

(statearr_84637_86917[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (70))){
var inst_84363 = (state_84634[(8)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84363)){
var statearr_84638_86918 = state_84634__$1;
(statearr_84638_86918[(1)] = (73));

} else {
var statearr_84639_86919 = state_84634__$1;
(statearr_84639_86919[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (62))){
var inst_84333 = cljs.core.PersistentHashMap.EMPTY;
var state_84634__$1 = state_84634;
var statearr_84640_86920 = state_84634__$1;
(statearr_84640_86920[(2)] = inst_84333);

(statearr_84640_86920[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (74))){
var inst_84367 = cljs.core.PersistentHashMap.EMPTY;
var state_84634__$1 = state_84634;
var statearr_84641_86921 = state_84634__$1;
(statearr_84641_86921[(2)] = inst_84367);

(statearr_84641_86921[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (110))){
var state_84634__$1 = state_84634;
var statearr_84642_86922 = state_84634__$1;
(statearr_84642_86922[(2)] = null);

(statearr_84642_86922[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (130))){
var inst_84560 = (state_84634[(9)]);
var inst_84579 = (state_84634[(10)]);
var inst_84575 = cljs.core.first(inst_84560);
var inst_84576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84575,(0),null);
var inst_84577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84575,(1),null);
var inst_84578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84577,(0),null);
var inst_84579__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84577,(1),null);
var state_84634__$1 = (function (){var statearr_84643 = state_84634;
(statearr_84643[(11)] = inst_84576);

(statearr_84643[(12)] = inst_84578);

(statearr_84643[(10)] = inst_84579__$1);

return statearr_84643;
})();
if(cljs.core.truth_(inst_84579__$1)){
var statearr_84644_86923 = state_84634__$1;
(statearr_84644_86923[(1)] = (132));

} else {
var statearr_84645_86924 = state_84634__$1;
(statearr_84645_86924[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (128))){
var inst_84597 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84646_86925 = state_84634__$1;
(statearr_84646_86925[(2)] = inst_84597);

(statearr_84646_86925[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (7))){
var state_84634__$1 = state_84634;
var statearr_84647_86948 = state_84634__$1;
(statearr_84647_86948[(2)] = false);

(statearr_84647_86948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (59))){
var inst_84328 = (state_84634[(13)]);
var inst_84338 = cljs.core.async.close_BANG_(inst_84328);
var state_84634__$1 = state_84634;
var statearr_84648_86953 = state_84634__$1;
(statearr_84648_86953[(2)] = inst_84338);

(statearr_84648_86953[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (86))){
var state_84634__$1 = state_84634;
var statearr_84649_86956 = state_84634__$1;
(statearr_84649_86956[(2)] = false);

(statearr_84649_86956[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (20))){
var inst_84187 = (state_84634[(14)]);
var inst_84191 = (state_84634[(15)]);
var inst_84404 = (state_84634[(2)]);
var inst_84405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_84187,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_84406 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_84191,inst_84405);
var state_84634__$1 = (function (){var statearr_84650 = state_84634;
(statearr_84650[(16)] = inst_84406);

return statearr_84650;
})();
var statearr_84651_86963 = state_84634__$1;
(statearr_84651_86963[(2)] = inst_84404);

(statearr_84651_86963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (72))){
var inst_84344 = (state_84634[(17)]);
var inst_84374 = (state_84634[(2)]);
var inst_84375 = cljs.core.next(inst_84344);
var inst_84311 = inst_84375;
var inst_84312 = null;
var inst_84313 = (0);
var inst_84314 = (0);
var state_84634__$1 = (function (){var statearr_84655 = state_84634;
(statearr_84655[(18)] = inst_84374);

(statearr_84655[(19)] = inst_84311);

(statearr_84655[(20)] = inst_84312);

(statearr_84655[(21)] = inst_84313);

(statearr_84655[(22)] = inst_84314);

return statearr_84655;
})();
var statearr_84656_86972 = state_84634__$1;
(statearr_84656_86972[(2)] = null);

(statearr_84656_86972[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (58))){
var inst_84329 = (state_84634[(23)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84329)){
var statearr_84657_86977 = state_84634__$1;
(statearr_84657_86977[(1)] = (61));

} else {
var statearr_84658_86978 = state_84634__$1;
(statearr_84658_86978[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (60))){
var inst_84314 = (state_84634[(22)]);
var inst_84311 = (state_84634[(19)]);
var inst_84312 = (state_84634[(20)]);
var inst_84313 = (state_84634[(21)]);
var inst_84340 = (state_84634[(2)]);
var inst_84341 = (inst_84314 + (1));
var tmp84652 = inst_84311;
var tmp84653 = inst_84313;
var tmp84654 = inst_84312;
var inst_84311__$1 = tmp84652;
var inst_84312__$1 = tmp84654;
var inst_84313__$1 = tmp84653;
var inst_84314__$1 = inst_84341;
var state_84634__$1 = (function (){var statearr_84659 = state_84634;
(statearr_84659[(24)] = inst_84340);

(statearr_84659[(19)] = inst_84311__$1);

(statearr_84659[(20)] = inst_84312__$1);

(statearr_84659[(21)] = inst_84313__$1);

(statearr_84659[(22)] = inst_84314__$1);

return statearr_84659;
})();
var statearr_84660_86985 = state_84634__$1;
(statearr_84660_86985[(2)] = null);

(statearr_84660_86985[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (27))){
var state_84634__$1 = state_84634;
var statearr_84661_86988 = state_84634__$1;
(statearr_84661_86988[(2)] = false);

(statearr_84661_86988[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (1))){
var state_84634__$1 = state_84634;
var statearr_84662_86990 = state_84634__$1;
(statearr_84662_86990[(2)] = null);

(statearr_84662_86990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (69))){
var inst_84378 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84663_86991 = state_84634__$1;
(statearr_84663_86991[(2)] = inst_84378);

(statearr_84663_86991[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (101))){
var inst_84474 = (state_84634[(25)]);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(104),inst_84474);
} else {
if((state_val_84635 === (24))){
var state_84634__$1 = state_84634;
var statearr_84664_86992 = state_84634__$1;
(statearr_84664_86992[(2)] = false);

(statearr_84664_86992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (102))){
var inst_84474 = (state_84634[(25)]);
var inst_84481 = com.wsscode.async.async_cljs.promise_QMARK_(inst_84474);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84481)){
var statearr_84665_86993 = state_84634__$1;
(statearr_84665_86993[(1)] = (105));

} else {
var statearr_84666_86994 = state_84634__$1;
(statearr_84666_86994[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (135))){
var inst_84579 = (state_84634[(10)]);
var state_84634__$1 = state_84634;
var statearr_84667_86995 = state_84634__$1;
(statearr_84667_86995[(2)] = inst_84579);

(statearr_84667_86995[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (55))){
var inst_84312 = (state_84634[(20)]);
var inst_84314 = (state_84634[(22)]);
var inst_84329 = (state_84634[(23)]);
var inst_84325 = cljs.core._nth(inst_84312,inst_84314);
var inst_84326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84325,(0),null);
var inst_84327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84325,(1),null);
var inst_84328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84327,(0),null);
var inst_84329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84327,(1),null);
var state_84634__$1 = (function (){var statearr_84668 = state_84634;
(statearr_84668[(26)] = inst_84326);

(statearr_84668[(13)] = inst_84328);

(statearr_84668[(23)] = inst_84329__$1);

return statearr_84668;
})();
if(cljs.core.truth_(inst_84329__$1)){
var statearr_84669_86997 = state_84634__$1;
(statearr_84669_86997[(1)] = (58));

} else {
var statearr_84670_86998 = state_84634__$1;
(statearr_84670_86998[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (85))){
var inst_84435 = (state_84634[(27)]);
var inst_84440 = inst_84435.cljs$lang$protocol_mask$partition0$;
var inst_84441 = (inst_84440 & (64));
var inst_84442 = inst_84435.cljs$core$ISeq$;
var inst_84443 = (cljs.core.PROTOCOL_SENTINEL === inst_84442);
var inst_84444 = ((inst_84441) || (inst_84443));
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84444)){
var statearr_84671_87001 = state_84634__$1;
(statearr_84671_87001[(1)] = (88));

} else {
var statearr_84672_87002 = state_84634__$1;
(statearr_84672_87002[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (39))){
var inst_84258 = (state_84634[(28)]);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(42),inst_84258);
} else {
if((state_val_84635 === (88))){
var state_84634__$1 = state_84634;
var statearr_84673_87003 = state_84634__$1;
(statearr_84673_87003[(2)] = true);

(statearr_84673_87003[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (46))){
var inst_84269 = (state_84634[(2)]);
var inst_84270 = com.wsscode.async.async_cljs.consumer_pair(inst_84269);
var state_84634__$1 = state_84634;
var statearr_84674_87004 = state_84634__$1;
(statearr_84674_87004[(2)] = inst_84270);

(statearr_84674_87004[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (4))){
var inst_84149 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84675_87007 = state_84634__$1;
(statearr_84675_87007[(2)] = inst_84149);

(statearr_84675_87007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (77))){
var inst_84293 = (state_84634[(29)]);
var inst_84181 = (state_84634[(30)]);
var inst_84395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84396 = cljs.core.PersistentHashMap.EMPTY;
var inst_84397 = [null,inst_84396];
var inst_84398 = (new cljs.core.PersistentVector(null,2,(5),inst_84395,inst_84397,null));
var inst_84399 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_84293,inst_84181,inst_84398);
var inst_84400 = cljs.core.second(inst_84399);
var state_84634__$1 = state_84634;
var statearr_84676_87010 = state_84634__$1;
(statearr_84676_87010[(2)] = inst_84400);

(statearr_84676_87010[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (106))){
var state_84634__$1 = state_84634;
var statearr_84677_87011 = state_84634__$1;
(statearr_84677_87011[(1)] = (109));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (119))){
var inst_84599 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84679_87012 = state_84634__$1;
(statearr_84679_87012[(2)] = inst_84599);

(statearr_84679_87012[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (95))){
var state_84634__$1 = state_84634;
var statearr_84680_87013 = state_84634__$1;
(statearr_84680_87013[(2)] = null);

(statearr_84680_87013[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (144))){
var inst_84632 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_84634__$1,inst_84632);
} else {
if((state_val_84635 === (54))){
var inst_84294 = (state_84634[(31)]);
var inst_84181 = (state_84634[(30)]);
var inst_84385 = (state_84634[(2)]);
var inst_84386 = cljs.core.contains_QMARK_(inst_84294,inst_84181);
var state_84634__$1 = (function (){var statearr_84681 = state_84634;
(statearr_84681[(32)] = inst_84385);

return statearr_84681;
})();
if(inst_84386){
var statearr_84682_87014 = state_84634__$1;
(statearr_84682_87014[(1)] = (76));

} else {
var statearr_84683_87015 = state_84634__$1;
(statearr_84683_87015[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (92))){
var inst_84435 = (state_84634[(27)]);
var state_84634__$1 = state_84634;
var statearr_84684_87016 = state_84634__$1;
(statearr_84684_87016[(2)] = inst_84435);

(statearr_84684_87016[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (141))){
var inst_84609 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84685_87017 = state_84634__$1;
(statearr_84685_87017[(2)] = inst_84609);

(statearr_84685_87017[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (137))){
var inst_84578 = (state_84634[(12)]);
var inst_84585 = (state_84634[(2)]);
var inst_84586 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_84578,inst_84585);
var state_84634__$1 = state_84634;
var statearr_84686_87018 = state_84634__$1;
(statearr_84686_87018[(2)] = inst_84586);

(statearr_84686_87018[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (104))){
var inst_84478 = (state_84634[(2)]);
var inst_84479 = com.wsscode.async.async_cljs.throw_err(inst_84478);
var state_84634__$1 = state_84634;
var statearr_84687_87019 = state_84634__$1;
(statearr_84687_87019[(2)] = inst_84479);

(statearr_84687_87019[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (15))){
var inst_84187 = (state_84634[(14)]);
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84184 = (state_84634[(34)]);
var inst_84190 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_84187,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_84191 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_84190);
var inst_84192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84193 = [inst_84178,inst_84181,inst_84184];
var inst_84194 = (new cljs.core.PersistentVector(null,3,(5),inst_84192,inst_84193,null));
var inst_84195 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_84194);
var state_84634__$1 = (function (){var statearr_84688 = state_84634;
(statearr_84688[(15)] = inst_84191);

return statearr_84688;
})();
if(inst_84195){
var statearr_84689_87020 = state_84634__$1;
(statearr_84689_87020[(1)] = (18));

} else {
var statearr_84690_87021 = state_84634__$1;
(statearr_84690_87021[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (48))){
var state_84634__$1 = state_84634;
var statearr_84691_87042 = state_84634__$1;
(statearr_84691_87042[(2)] = null);

(statearr_84691_87042[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (50))){
var inst_84179 = (state_84634[(35)]);
var inst_84216 = (state_84634[(36)]);
var inst_84177 = (state_84634[(37)]);
var inst_84241 = (state_84634[(38)]);
var inst_84294 = (state_84634[(31)]);
var inst_84293 = (state_84634[(29)]);
var inst_84183 = (state_84634[(39)]);
var inst_84248 = (state_84634[(40)]);
var inst_84291 = (state_84634[(41)]);
var inst_84184 = (state_84634[(34)]);
var inst_84242 = (state_84634[(42)]);
var inst_84181 = (state_84634[(30)]);
var inst_84178 = (state_84634[(33)]);
var inst_84187 = (state_84634[(14)]);
var inst_84191 = (state_84634[(15)]);
var inst_84215 = (state_84634[(43)]);
var inst_84286 = (state_84634[(44)]);
var inst_84240 = (state_84634[(45)]);
var inst_84301 = (function (){var input = inst_84179;
var items_map = inst_84216;
var map__84155 = inst_84177;
var cached = inst_84241;
var cached_set = inst_84294;
var linked_results = inst_84293;
var key = inst_84183;
var channels = inst_84248;
var _ = inst_84291;
var params = inst_84184;
var uncached = inst_84242;
var e = inst_84181;
var resolver_sym = inst_84178;
var trace_data = inst_84187;
var trace_id__29442__auto__ = inst_84191;
var valid_inputs = inst_84215;
var batch_result = inst_84286;
var map__84204 = inst_84240;
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__84692){
var vec__84693 = p__84692;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84693,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84693,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),(function (p1__84145_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__84145_SHARP_], 0));
}));
}),cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
}),cache,cljs.core.zipmap(uncached,batch_result));
});
})();
var inst_84302 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_84301);
var state_84634__$1 = state_84634;
var statearr_84696_87043 = state_84634__$1;
(statearr_84696_87043[(2)] = inst_84302);

(statearr_84696_87043[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (116))){
var inst_84510 = (state_84634[(46)]);
var inst_84181 = (state_84634[(30)]);
var inst_84601 = (state_84634[(2)]);
var inst_84602 = cljs.core.contains_QMARK_(inst_84510,inst_84181);
var state_84634__$1 = (function (){var statearr_84697 = state_84634;
(statearr_84697[(47)] = inst_84601);

return statearr_84697;
})();
if(inst_84602){
var statearr_84698_87044 = state_84634__$1;
(statearr_84698_87044[(1)] = (138));

} else {
var statearr_84699_87045 = state_84634__$1;
(statearr_84699_87045[(1)] = (139));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (75))){
var inst_84362 = (state_84634[(48)]);
var inst_84369 = (state_84634[(2)]);
var inst_84370 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_84362,inst_84369);
var state_84634__$1 = state_84634;
var statearr_84700_87046 = state_84634__$1;
(statearr_84700_87046[(2)] = inst_84370);

(statearr_84700_87046[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (99))){
var inst_84467 = (state_84634[(2)]);
var inst_84468 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_84467);
var state_84634__$1 = state_84634;
var statearr_84701_87047 = state_84634__$1;
(statearr_84701_87047[(2)] = inst_84468);

(statearr_84701_87047[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (21))){
var inst_84202 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84702_87062 = state_84634__$1;
(statearr_84702_87062[(2)] = inst_84202);

(statearr_84702_87062[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (31))){
var inst_84240 = (state_84634[(45)]);
var inst_84242 = (state_84634[(42)]);
var inst_84179 = (state_84634[(35)]);
var inst_84216 = (state_84634[(36)]);
var inst_84177 = (state_84634[(37)]);
var inst_84241 = (state_84634[(38)]);
var inst_84183 = (state_84634[(39)]);
var inst_84184 = (state_84634[(34)]);
var inst_84181 = (state_84634[(30)]);
var inst_84178 = (state_84634[(33)]);
var inst_84187 = (state_84634[(14)]);
var inst_84191 = (state_84634[(15)]);
var inst_84215 = (state_84634[(43)]);
var inst_84240__$1 = (state_84634[(2)]);
var inst_84241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84240__$1,true);
var inst_84242__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84240__$1,false);
var inst_84243 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_84244 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_84242__$1];
var inst_84245 = cljs.core.PersistentHashMap.fromArrays(inst_84243,inst_84244);
var inst_84246 = com.wsscode.pathom.trace.trace(env,inst_84245);
var inst_84247 = (function (){var input = inst_84179;
var items_map = inst_84216;
var map__84155 = inst_84177;
var cached = inst_84241__$1;
var key = inst_84183;
var _ = inst_84246;
var params = inst_84184;
var uncached = inst_84242__$1;
var e = inst_84181;
var resolver_sym = inst_84178;
var trace_data = inst_84187;
var trace_id__29442__auto__ = inst_84191;
var valid_inputs = inst_84215;
var map__84204 = inst_84240__$1;
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
})();
var inst_84248 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_84247,inst_84242__$1);
var inst_84249 = cljs.core.seq(inst_84242__$1);
var state_84634__$1 = (function (){var statearr_84703 = state_84634;
(statearr_84703[(45)] = inst_84240__$1);

(statearr_84703[(38)] = inst_84241__$1);

(statearr_84703[(42)] = inst_84242__$1);

(statearr_84703[(40)] = inst_84248);

return statearr_84703;
})();
if(inst_84249){
var statearr_84704_87084 = state_84634__$1;
(statearr_84704_87084[(1)] = (32));

} else {
var statearr_84705_87085 = state_84634__$1;
(statearr_84705_87085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (113))){
var state_84634__$1 = state_84634;
var statearr_84706_87086 = state_84634__$1;
(statearr_84706_87086[(2)] = null);

(statearr_84706_87086[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (32))){
var state_84634__$1 = state_84634;
var statearr_84707_87087 = state_84634__$1;
(statearr_84707_87087[(2)] = null);

(statearr_84707_87087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (136))){
var inst_84583 = cljs.core.PersistentHashMap.EMPTY;
var state_84634__$1 = state_84634;
var statearr_84708_87088 = state_84634__$1;
(statearr_84708_87088[(2)] = inst_84583);

(statearr_84708_87088[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (139))){
var inst_84509 = (state_84634[(49)]);
var inst_84181 = (state_84634[(30)]);
var inst_84611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84612 = cljs.core.PersistentHashMap.EMPTY;
var inst_84613 = [null,inst_84612];
var inst_84614 = (new cljs.core.PersistentVector(null,2,(5),inst_84611,inst_84613,null));
var inst_84615 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_84509,inst_84181,inst_84614);
var inst_84616 = cljs.core.second(inst_84615);
var state_84634__$1 = state_84634;
var statearr_84709_87089 = state_84634__$1;
(statearr_84709_87089[(2)] = inst_84616);

(statearr_84709_87089[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (40))){
var inst_84258 = (state_84634[(28)]);
var inst_84265 = com.wsscode.async.async_cljs.promise_QMARK_(inst_84258);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84265)){
var statearr_84710_87090 = state_84634__$1;
(statearr_84710_87090[(1)] = (43));

} else {
var statearr_84711_87091 = state_84634__$1;
(statearr_84711_87091[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (129))){
var inst_84560 = (state_84634[(9)]);
var inst_84564 = cljs.core.chunk_first(inst_84560);
var inst_84565 = cljs.core.chunk_rest(inst_84560);
var inst_84566 = cljs.core.count(inst_84564);
var inst_84527 = inst_84565;
var inst_84528 = inst_84564;
var inst_84529 = inst_84566;
var inst_84530 = (0);
var state_84634__$1 = (function (){var statearr_84712 = state_84634;
(statearr_84712[(50)] = inst_84527);

(statearr_84712[(51)] = inst_84528);

(statearr_84712[(52)] = inst_84529);

(statearr_84712[(53)] = inst_84530);

return statearr_84712;
})();
var statearr_84713_87092 = state_84634__$1;
(statearr_84713_87092[(2)] = null);

(statearr_84713_87092[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (91))){
var inst_84435 = (state_84634[(27)]);
var inst_84453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_84435);
var state_84634__$1 = state_84634;
var statearr_84714_87093 = state_84634__$1;
(statearr_84714_87093[(2)] = inst_84453);

(statearr_84714_87093[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (117))){
var inst_84528 = (state_84634[(51)]);
var inst_84530 = (state_84634[(53)]);
var inst_84545 = (state_84634[(54)]);
var inst_84541 = cljs.core._nth(inst_84528,inst_84530);
var inst_84542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84541,(0),null);
var inst_84543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84541,(1),null);
var inst_84544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84543,(0),null);
var inst_84545__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84543,(1),null);
var state_84634__$1 = (function (){var statearr_84715 = state_84634;
(statearr_84715[(55)] = inst_84542);

(statearr_84715[(7)] = inst_84544);

(statearr_84715[(54)] = inst_84545__$1);

return statearr_84715;
})();
if(cljs.core.truth_(inst_84545__$1)){
var statearr_84716_87113 = state_84634__$1;
(statearr_84716_87113[(1)] = (120));

} else {
var statearr_84717_87114 = state_84634__$1;
(statearr_84717_87114[(1)] = (121));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (108))){
var inst_84485 = (state_84634[(2)]);
var inst_84486 = com.wsscode.async.async_cljs.consumer_pair(inst_84485);
var state_84634__$1 = state_84634;
var statearr_84718_87115 = state_84634__$1;
(statearr_84718_87115[(2)] = inst_84486);

(statearr_84718_87115[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (56))){
var inst_84311 = (state_84634[(19)]);
var inst_84344 = (state_84634[(17)]);
var inst_84344__$1 = cljs.core.seq(inst_84311);
var state_84634__$1 = (function (){var statearr_84719 = state_84634;
(statearr_84719[(17)] = inst_84344__$1);

return statearr_84719;
})();
if(inst_84344__$1){
var statearr_84720_87116 = state_84634__$1;
(statearr_84720_87116[(1)] = (64));

} else {
var statearr_84721_87117 = state_84634__$1;
(statearr_84721_87117[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (33))){
var state_84634__$1 = state_84634;
var statearr_84722_87118 = state_84634__$1;
(statearr_84722_87118[(2)] = null);

(statearr_84722_87118[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (13))){
var inst_84156 = (state_84634[(56)]);
var state_84634__$1 = state_84634;
var statearr_84723_87119 = state_84634__$1;
(statearr_84723_87119[(2)] = inst_84156);

(statearr_84723_87119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (22))){
var inst_84205 = (state_84634[(57)]);
var inst_84209 = (state_84634[(58)]);
var inst_84215 = (state_84634[(43)]);
var inst_84179 = (state_84634[(35)]);
var inst_84216 = (state_84634[(36)]);
var inst_84177 = (state_84634[(37)]);
var inst_84183 = (state_84634[(39)]);
var inst_84184 = (state_84634[(34)]);
var inst_84181 = (state_84634[(30)]);
var inst_84178 = (state_84634[(33)]);
var inst_84187 = (state_84634[(14)]);
var inst_84191 = (state_84634[(15)]);
var inst_84219 = (state_84634[(59)]);
var inst_84213 = (state_84634[(2)]);
var inst_84214 = com.wsscode.async.async_cljs.throw_err(inst_84213);
var inst_84215__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_84205,inst_84209,inst_84214);
var inst_84216__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_84215__$1);
var inst_84217 = (function (){var input = inst_84179;
var items_map = inst_84216__$1;
var map__84155 = inst_84177;
var key = inst_84183;
var params = inst_84184;
var e = inst_84181;
var resolver_sym = inst_84178;
var trace_data = inst_84187;
var trace_id__29442__auto__ = inst_84191;
var valid_inputs = inst_84215__$1;
return (function (p1__84144_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__84144_SHARP_,params], null));
});
})();
var inst_84218 = cljs.core.keys(inst_84216__$1);
var inst_84219__$1 = cljs.core.group_by(inst_84217,inst_84218);
var inst_84221 = (inst_84219__$1 == null);
var inst_84222 = cljs.core.not(inst_84221);
var state_84634__$1 = (function (){var statearr_84724 = state_84634;
(statearr_84724[(43)] = inst_84215__$1);

(statearr_84724[(36)] = inst_84216__$1);

(statearr_84724[(59)] = inst_84219__$1);

return statearr_84724;
})();
if(inst_84222){
var statearr_84725_87120 = state_84634__$1;
(statearr_84725_87120[(1)] = (23));

} else {
var statearr_84726_87121 = state_84634__$1;
(statearr_84726_87121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (90))){
var inst_84448 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84727_87122 = state_84634__$1;
(statearr_84727_87122[(2)] = inst_84448);

(statearr_84727_87122[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (109))){
var inst_84474 = (state_84634[(25)]);
var state_84634__$1 = state_84634;
var statearr_84728_87123 = state_84634__$1;
(statearr_84728_87123[(2)] = inst_84474);

(statearr_84728_87123[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (143))){
var inst_84625 = (state_84634[(60)]);
var inst_84630 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_84625);
var state_84634__$1 = state_84634;
var statearr_84729_87124 = state_84634__$1;
(statearr_84729_87124[(2)] = inst_84630);

(statearr_84729_87124[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (36))){
var inst_84283 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84730_87125 = state_84634__$1;
(statearr_84730_87125[(2)] = inst_84283);

(statearr_84730_87125[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (41))){
var inst_84279 = (state_84634[(2)]);
var inst_84280 = com.wsscode.async.async_cljs.throw_err(inst_84279);
var _ = (function (){var statearr_84731 = state_84634;
(statearr_84731[(4)] = cljs.core.rest((state_84634[(4)])));

return statearr_84731;
})();
var state_84634__$1 = state_84634;
var statearr_84732_87126 = state_84634__$1;
(statearr_84732_87126[(2)] = inst_84280);

(statearr_84732_87126[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (118))){
var inst_84527 = (state_84634[(50)]);
var inst_84560 = (state_84634[(9)]);
var inst_84560__$1 = cljs.core.seq(inst_84527);
var state_84634__$1 = (function (){var statearr_84734 = state_84634;
(statearr_84734[(9)] = inst_84560__$1);

return statearr_84734;
})();
if(inst_84560__$1){
var statearr_84735_87127 = state_84634__$1;
(statearr_84735_87127[(1)] = (126));

} else {
var statearr_84736_87128 = state_84634__$1;
(statearr_84736_87128[(1)] = (127));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (89))){
var state_84634__$1 = state_84634;
var statearr_84737_87129 = state_84634__$1;
(statearr_84737_87129[(2)] = false);

(statearr_84737_87129[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (100))){
var _ = (function (){var statearr_84741 = state_84634;
(statearr_84741[(4)] = cljs.core.rest((state_84634[(4)])));

return statearr_84741;
})();
var state_84634__$1 = state_84634;
var ex84733 = (state_84634__$1[(2)]);
var statearr_84742_87130 = state_84634__$1;
(statearr_84742_87130[(5)] = ex84733);


var statearr_84743_87131 = state_84634__$1;
(statearr_84743_87131[(1)] = (99));

(statearr_84743_87131[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (131))){
var inst_84594 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84744_87132 = state_84634__$1;
(statearr_84744_87132[(2)] = inst_84594);

(statearr_84744_87132[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (122))){
var inst_84530 = (state_84634[(53)]);
var inst_84527 = (state_84634[(50)]);
var inst_84528 = (state_84634[(51)]);
var inst_84529 = (state_84634[(52)]);
var inst_84556 = (state_84634[(2)]);
var inst_84557 = (inst_84530 + (1));
var tmp84738 = inst_84529;
var tmp84739 = inst_84527;
var tmp84740 = inst_84528;
var inst_84527__$1 = tmp84739;
var inst_84528__$1 = tmp84740;
var inst_84529__$1 = tmp84738;
var inst_84530__$1 = inst_84557;
var state_84634__$1 = (function (){var statearr_84745 = state_84634;
(statearr_84745[(61)] = inst_84556);

(statearr_84745[(50)] = inst_84527__$1);

(statearr_84745[(51)] = inst_84528__$1);

(statearr_84745[(52)] = inst_84529__$1);

(statearr_84745[(53)] = inst_84530__$1);

return statearr_84745;
})();
var statearr_84746_87135 = state_84634__$1;
(statearr_84746_87135[(2)] = null);

(statearr_84746_87135[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (43))){
var inst_84258 = (state_84634[(28)]);
var inst_84267 = com.wsscode.async.async_cljs.promise__GT_chan(inst_84258);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(46),inst_84267);
} else {
if((state_val_84635 === (61))){
var inst_84329 = (state_84634[(23)]);
var state_84634__$1 = state_84634;
var statearr_84747_87184 = state_84634__$1;
(statearr_84747_87184[(2)] = inst_84329);

(statearr_84747_87184[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (29))){
var inst_84219 = (state_84634[(59)]);
var inst_84237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_84219);
var state_84634__$1 = state_84634;
var statearr_84748_87185 = state_84634__$1;
(statearr_84748_87185[(2)] = inst_84237);

(statearr_84748_87185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (44))){
var state_84634__$1 = state_84634;
var statearr_84749_87186 = state_84634__$1;
(statearr_84749_87186[(1)] = (47));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (93))){
var inst_84456 = (state_84634[(62)]);
var inst_84458 = (state_84634[(63)]);
var inst_84179 = (state_84634[(35)]);
var inst_84432 = (state_84634[(64)]);
var inst_84177 = (state_84634[(37)]);
var inst_84457 = (state_84634[(65)]);
var inst_84183 = (state_84634[(39)]);
var inst_84184 = (state_84634[(34)]);
var inst_84181 = (state_84634[(30)]);
var inst_84178 = (state_84634[(33)]);
var inst_84187 = (state_84634[(14)]);
var inst_84431 = (state_84634[(66)]);
var inst_84456__$1 = (state_84634[(2)]);
var inst_84457__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84456__$1,true);
var inst_84458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84456__$1,false);
var inst_84459 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_84460 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_84458__$1];
var inst_84461 = cljs.core.PersistentHashMap.fromArrays(inst_84459,inst_84460);
var inst_84462 = com.wsscode.pathom.trace.trace(env,inst_84461);
var inst_84463 = (function (){var input = inst_84179;
var items_map = inst_84432;
var map__84155 = inst_84177;
var cached = inst_84457__$1;
var key = inst_84183;
var _ = inst_84462;
var params = inst_84184;
var map__84420 = inst_84456__$1;
var uncached = inst_84458__$1;
var e = inst_84181;
var resolver_sym = inst_84178;
var trace_data = inst_84187;
var valid_inputs = inst_84431;
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
})();
var inst_84464 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_84463,inst_84458__$1);
var inst_84465 = cljs.core.seq(inst_84458__$1);
var state_84634__$1 = (function (){var statearr_84751 = state_84634;
(statearr_84751[(62)] = inst_84456__$1);

(statearr_84751[(65)] = inst_84457__$1);

(statearr_84751[(63)] = inst_84458__$1);

(statearr_84751[(67)] = inst_84464);

return statearr_84751;
})();
if(inst_84465){
var statearr_84752_87187 = state_84634__$1;
(statearr_84752_87187[(1)] = (94));

} else {
var statearr_84753_87188 = state_84634__$1;
(statearr_84753_87188[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (6))){
var inst_84156 = (state_84634[(56)]);
var inst_84161 = inst_84156.cljs$lang$protocol_mask$partition0$;
var inst_84162 = (inst_84161 & (64));
var inst_84163 = inst_84156.cljs$core$ISeq$;
var inst_84164 = (cljs.core.PROTOCOL_SENTINEL === inst_84163);
var inst_84165 = ((inst_84162) || (inst_84164));
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84165)){
var statearr_84754_87189 = state_84634__$1;
(statearr_84754_87189[(1)] = (9));

} else {
var statearr_84755_87190 = state_84634__$1;
(statearr_84755_87190[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (111))){
var inst_84491 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84756_87191 = state_84634__$1;
(statearr_84756_87191[(2)] = inst_84491);

(statearr_84756_87191[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (28))){
var inst_84232 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84757_87200 = state_84634__$1;
(statearr_84757_87200[(2)] = inst_84232);

(statearr_84757_87200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (134))){
var inst_84560 = (state_84634[(9)]);
var inst_84590 = (state_84634[(2)]);
var inst_84591 = cljs.core.next(inst_84560);
var inst_84527 = inst_84591;
var inst_84528 = null;
var inst_84529 = (0);
var inst_84530 = (0);
var state_84634__$1 = (function (){var statearr_84758 = state_84634;
(statearr_84758[(68)] = inst_84590);

(statearr_84758[(50)] = inst_84527);

(statearr_84758[(51)] = inst_84528);

(statearr_84758[(52)] = inst_84529);

(statearr_84758[(53)] = inst_84530);

return statearr_84758;
})();
var statearr_84759_87201 = state_84634__$1;
(statearr_84759_87201[(2)] = null);

(statearr_84759_87201[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (64))){
var inst_84344 = (state_84634[(17)]);
var inst_84346 = cljs.core.chunked_seq_QMARK_(inst_84344);
var state_84634__$1 = state_84634;
if(inst_84346){
var statearr_84760_87202 = state_84634__$1;
(statearr_84760_87202[(1)] = (67));

} else {
var statearr_84761_87203 = state_84634__$1;
(statearr_84761_87203[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (103))){
var inst_84495 = (state_84634[(2)]);
var inst_84496 = com.wsscode.async.async_cljs.throw_err(inst_84495);
var _ = (function (){var statearr_84762 = state_84634;
(statearr_84762[(4)] = cljs.core.rest((state_84634[(4)])));

return statearr_84762;
})();
var state_84634__$1 = state_84634;
var statearr_84763_87204 = state_84634__$1;
(statearr_84763_87204[(2)] = inst_84496);

(statearr_84763_87204[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (51))){
var state_84634__$1 = state_84634;
var statearr_84764_87205 = state_84634__$1;
(statearr_84764_87205[(2)] = null);

(statearr_84764_87205[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (25))){
var inst_84235 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84235)){
var statearr_84765_87206 = state_84634__$1;
(statearr_84765_87206[(1)] = (29));

} else {
var statearr_84766_87207 = state_84634__$1;
(statearr_84766_87207[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (34))){
var inst_84286 = (state_84634[(44)]);
var inst_84248 = (state_84634[(40)]);
var inst_84242 = (state_84634[(42)]);
var inst_84241 = (state_84634[(38)]);
var inst_84286__$1 = (state_84634[(2)]);
var inst_84287 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_84288 = cljs.core.count(inst_84286__$1);
var inst_84289 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_84288];
var inst_84290 = cljs.core.PersistentHashMap.fromArrays(inst_84287,inst_84289);
var inst_84291 = com.wsscode.pathom.trace.trace(env,inst_84290);
var inst_84292 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_84248,inst_84286__$1);
var inst_84293 = cljs.core.zipmap(inst_84242,inst_84292);
var inst_84294 = cljs.core.set(inst_84241);
var inst_84295 = cljs.core.first(inst_84286__$1);
var inst_84296 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_84295);
var inst_84297 = cljs.core.count(path);
var inst_84298 = (inst_84297 >= (2));
var inst_84299 = ((inst_84296) && (inst_84298));
var state_84634__$1 = (function (){var statearr_84767 = state_84634;
(statearr_84767[(44)] = inst_84286__$1);

(statearr_84767[(41)] = inst_84291);

(statearr_84767[(29)] = inst_84293);

(statearr_84767[(31)] = inst_84294);

return statearr_84767;
})();
if(cljs.core.truth_(inst_84299)){
var statearr_84768_87208 = state_84634__$1;
(statearr_84768_87208[(1)] = (50));

} else {
var statearr_84769_87209 = state_84634__$1;
(statearr_84769_87209[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (125))){
var inst_84544 = (state_84634[(7)]);
var inst_84551 = (state_84634[(2)]);
var inst_84552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_84544,inst_84551);
var state_84634__$1 = state_84634;
var statearr_84770_87215 = state_84634__$1;
(statearr_84770_87215[(2)] = inst_84552);

(statearr_84770_87215[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (17))){
var inst_84622 = (state_84634[(2)]);
var _ = (function (){var statearr_84771 = state_84634;
(statearr_84771[(4)] = cljs.core.rest((state_84634[(4)])));

return statearr_84771;
})();
var state_84634__$1 = state_84634;
var statearr_84772_87216 = state_84634__$1;
(statearr_84772_87216[(2)] = inst_84622);

(statearr_84772_87216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (3))){
var inst_84625 = (state_84634[(60)]);
var inst_84625__$1 = (state_84634[(2)]);
var inst_84626 = (inst_84625__$1 == null);
var state_84634__$1 = (function (){var statearr_84773 = state_84634;
(statearr_84773[(60)] = inst_84625__$1);

return statearr_84773;
})();
if(cljs.core.truth_(inst_84626)){
var statearr_84774_87217 = state_84634__$1;
(statearr_84774_87217[(1)] = (142));

} else {
var statearr_84775_87218 = state_84634__$1;
(statearr_84775_87218[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (12))){
var inst_84156 = (state_84634[(56)]);
var inst_84174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_84156);
var state_84634__$1 = state_84634;
var statearr_84776_87219 = state_84634__$1;
(statearr_84776_87219[(2)] = inst_84174);

(statearr_84776_87219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (2))){
var inst_84156 = (state_84634[(56)]);
var _ = (function (){var statearr_84777 = state_84634;
(statearr_84777[(4)] = cljs.core.cons((5),(state_84634[(4)])));

return statearr_84777;
})();
var inst_84156__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_84158 = (inst_84156__$1 == null);
var inst_84159 = cljs.core.not(inst_84158);
var state_84634__$1 = (function (){var statearr_84778 = state_84634;
(statearr_84778[(56)] = inst_84156__$1);

return statearr_84778;
})();
if(inst_84159){
var statearr_84779_87220 = state_84634__$1;
(statearr_84779_87220[(1)] = (6));

} else {
var statearr_84780_87221 = state_84634__$1;
(statearr_84780_87221[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (66))){
var inst_84381 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84781_87222 = state_84634__$1;
(statearr_84781_87222[(2)] = inst_84381);

(statearr_84781_87222[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (142))){
var inst_84628 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_84634__$1 = state_84634;
var statearr_84782_87223 = state_84634__$1;
(statearr_84782_87223[(2)] = inst_84628);

(statearr_84782_87223[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (107))){
var inst_84493 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84783_87225 = state_84634__$1;
(statearr_84783_87225[(2)] = inst_84493);

(statearr_84783_87225[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (23))){
var inst_84219 = (state_84634[(59)]);
var inst_84224 = inst_84219.cljs$lang$protocol_mask$partition0$;
var inst_84225 = (inst_84224 & (64));
var inst_84226 = inst_84219.cljs$core$ISeq$;
var inst_84227 = (cljs.core.PROTOCOL_SENTINEL === inst_84226);
var inst_84228 = ((inst_84225) || (inst_84227));
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84228)){
var statearr_84784_87226 = state_84634__$1;
(statearr_84784_87226[(1)] = (26));

} else {
var statearr_84785_87227 = state_84634__$1;
(statearr_84785_87227[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (47))){
var inst_84258 = (state_84634[(28)]);
var state_84634__$1 = state_84634;
var statearr_84786_87229 = state_84634__$1;
(statearr_84786_87229[(2)] = inst_84258);

(statearr_84786_87229[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (35))){
var inst_84242 = (state_84634[(42)]);
var inst_84258 = (state_84634[(28)]);
var _ = (function (){var statearr_84787 = state_84634;
(statearr_84787[(4)] = cljs.core.cons((38),(state_84634[(4)])));

return statearr_84787;
})();
var inst_84258__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_84242);
var inst_84259 = com.wsscode.async.async_cljs.chan_QMARK_(inst_84258__$1);
var state_84634__$1 = (function (){var statearr_84788 = state_84634;
(statearr_84788[(28)] = inst_84258__$1);

return statearr_84788;
})();
if(inst_84259){
var statearr_84789_87240 = state_84634__$1;
(statearr_84789_87240[(1)] = (39));

} else {
var statearr_84790_87241 = state_84634__$1;
(statearr_84790_87241[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (127))){
var state_84634__$1 = state_84634;
var statearr_84791_87242 = state_84634__$1;
(statearr_84791_87242[(2)] = null);

(statearr_84791_87242[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (82))){
var inst_84620 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84792_87243 = state_84634__$1;
(statearr_84792_87243[(2)] = inst_84620);

(statearr_84792_87243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (76))){
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84184 = (state_84634[(34)]);
var inst_84388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84389 = [inst_84178,inst_84181,inst_84184];
var inst_84390 = (new cljs.core.PersistentVector(null,3,(5),inst_84388,inst_84389,null));
var inst_84391 = com.wsscode.pathom.core.cache_read(env,inst_84390);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(79),inst_84391);
} else {
if((state_val_84635 === (97))){
var inst_84458 = (state_84634[(63)]);
var inst_84474 = (state_84634[(25)]);
var _ = (function (){var statearr_84793 = state_84634;
(statearr_84793[(4)] = cljs.core.cons((100),(state_84634[(4)])));

return statearr_84793;
})();
var inst_84474__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_84458);
var inst_84475 = com.wsscode.async.async_cljs.chan_QMARK_(inst_84474__$1);
var state_84634__$1 = (function (){var statearr_84794 = state_84634;
(statearr_84794[(25)] = inst_84474__$1);

return statearr_84794;
})();
if(inst_84475){
var statearr_84795_87244 = state_84634__$1;
(statearr_84795_87244[(1)] = (101));

} else {
var statearr_84796_87245 = state_84634__$1;
(statearr_84796_87245[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (19))){
var inst_84177 = (state_84634[(37)]);
var inst_84178 = (state_84634[(33)]);
var inst_84179 = (state_84634[(35)]);
var inst_84181 = (state_84634[(30)]);
var inst_84183 = (state_84634[(39)]);
var inst_84184 = (state_84634[(34)]);
var inst_84187 = (state_84634[(14)]);
var inst_84191 = (state_84634[(15)]);
var inst_84205 = cljs.core.PersistentVector.EMPTY;
var inst_84206 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_84207 = (function (){var map__84155 = inst_84177;
var resolver_sym = inst_84178;
var input = inst_84179;
var e = inst_84181;
var key = inst_84183;
var params = inst_84184;
var trace_data = inst_84187;
var trace_id__29442__auto__ = inst_84191;
return (function (p1__84142_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__84142_SHARP_),input);
});
})();
var inst_84208 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_84207);
var inst_84209 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_84206,inst_84208);
var inst_84210 = (function (){var map__84155 = inst_84177;
var resolver_sym = inst_84178;
var input = inst_84179;
var e = inst_84181;
var key = inst_84183;
var params = inst_84184;
var trace_data = inst_84187;
var trace_id__29442__auto__ = inst_84191;
return (function (p1__84143_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__84143_SHARP_,input);
});
})();
var inst_84211 = com.wsscode.pathom.connect.map_async_serial(inst_84210,processing_sequence);
var state_84634__$1 = (function (){var statearr_84797 = state_84634;
(statearr_84797[(57)] = inst_84205);

(statearr_84797[(58)] = inst_84209);

return statearr_84797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(22),inst_84211);
} else {
if((state_val_84635 === (57))){
var inst_84383 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84798_87262 = state_84634__$1;
(statearr_84798_87262[(2)] = inst_84383);

(statearr_84798_87262[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (68))){
var inst_84344 = (state_84634[(17)]);
var inst_84363 = (state_84634[(8)]);
var inst_84359 = cljs.core.first(inst_84344);
var inst_84360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84359,(0),null);
var inst_84361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84359,(1),null);
var inst_84362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84361,(0),null);
var inst_84363__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84361,(1),null);
var state_84634__$1 = (function (){var statearr_84799 = state_84634;
(statearr_84799[(69)] = inst_84360);

(statearr_84799[(48)] = inst_84362);

(statearr_84799[(8)] = inst_84363__$1);

return statearr_84799;
})();
if(cljs.core.truth_(inst_84363__$1)){
var statearr_84800_87288 = state_84634__$1;
(statearr_84800_87288[(1)] = (70));

} else {
var statearr_84801_87289 = state_84634__$1;
(statearr_84801_87289[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (11))){
var inst_84169 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84802_87290 = state_84634__$1;
(statearr_84802_87290[(2)] = inst_84169);

(statearr_84802_87290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (115))){
var inst_84530 = (state_84634[(53)]);
var inst_84529 = (state_84634[(52)]);
var inst_84532 = (inst_84530 < inst_84529);
var inst_84533 = inst_84532;
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84533)){
var statearr_84804_87291 = state_84634__$1;
(statearr_84804_87291[(1)] = (117));

} else {
var statearr_84805_87292 = state_84634__$1;
(statearr_84805_87292[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (9))){
var state_84634__$1 = state_84634;
var statearr_84806_87293 = state_84634__$1;
(statearr_84806_87293[(2)] = true);

(statearr_84806_87293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (5))){
var _ = (function (){var statearr_84807 = state_84634;
(statearr_84807[(4)] = cljs.core.rest((state_84634[(4)])));

return statearr_84807;
})();
var state_84634__$1 = state_84634;
var ex84803 = (state_84634__$1[(2)]);
var statearr_84808_87294 = state_84634__$1;
(statearr_84808_87294[(5)] = ex84803);


var statearr_84809_87295 = state_84634__$1;
(statearr_84809_87295[(1)] = (4));

(statearr_84809_87295[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (112))){
var inst_84179 = (state_84634[(35)]);
var inst_84432 = (state_84634[(64)]);
var inst_84177 = (state_84634[(37)]);
var inst_84457 = (state_84634[(65)]);
var inst_84510 = (state_84634[(46)]);
var inst_84509 = (state_84634[(49)]);
var inst_84183 = (state_84634[(39)]);
var inst_84464 = (state_84634[(67)]);
var inst_84507 = (state_84634[(70)]);
var inst_84184 = (state_84634[(34)]);
var inst_84456 = (state_84634[(62)]);
var inst_84458 = (state_84634[(63)]);
var inst_84181 = (state_84634[(30)]);
var inst_84178 = (state_84634[(33)]);
var inst_84187 = (state_84634[(14)]);
var inst_84431 = (state_84634[(66)]);
var inst_84502 = (state_84634[(71)]);
var inst_84517 = (function (){var input = inst_84179;
var items_map = inst_84432;
var map__84155 = inst_84177;
var cached = inst_84457;
var cached_set = inst_84510;
var linked_results = inst_84509;
var key = inst_84183;
var channels = inst_84464;
var _ = inst_84507;
var params = inst_84184;
var map__84420 = inst_84456;
var uncached = inst_84458;
var e = inst_84181;
var resolver_sym = inst_84178;
var trace_data = inst_84187;
var valid_inputs = inst_84431;
var batch_result = inst_84502;
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__84810){
var vec__84811 = p__84810;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84811,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84811,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),(function (p1__84145_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__84145_SHARP_], 0));
}));
}),cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
}),cache,cljs.core.zipmap(uncached,batch_result));
});
})();
var inst_84518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_84517);
var state_84634__$1 = state_84634;
var statearr_84814_87324 = state_84634__$1;
(statearr_84814_87324[(2)] = inst_84518);

(statearr_84814_87324[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (83))){
var inst_84418 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84815_87325 = state_84634__$1;
(statearr_84815_87325[(2)] = inst_84418);

(statearr_84815_87325[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (138))){
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84184 = (state_84634[(34)]);
var inst_84604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84605 = [inst_84178,inst_84181,inst_84184];
var inst_84606 = (new cljs.core.PersistentVector(null,3,(5),inst_84604,inst_84605,null));
var inst_84607 = com.wsscode.pathom.core.cache_read(env,inst_84606);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(141),inst_84607);
} else {
if((state_val_84635 === (14))){
var inst_84177 = (state_84634[(37)]);
var inst_84179 = (state_84634[(35)]);
var inst_84183 = (state_84634[(39)]);
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84177__$1 = (state_84634[(2)]);
var inst_84178__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84177__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_84179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84177__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_84180 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_84181__$1 = cljs.core.select_keys(inst_84180,inst_84179__$1);
var inst_84182 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_84183__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_84182);
var inst_84184 = com.wsscode.pathom.core.params(env);
var inst_84185 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_84186 = [inst_84183__$1,inst_84178__$1,inst_84181__$1];
var inst_84187 = cljs.core.PersistentHashMap.fromArrays(inst_84185,inst_84186);
var inst_84188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_84634__$1 = (function (){var statearr_84816 = state_84634;
(statearr_84816[(37)] = inst_84177__$1);

(statearr_84816[(33)] = inst_84178__$1);

(statearr_84816[(35)] = inst_84179__$1);

(statearr_84816[(30)] = inst_84181__$1);

(statearr_84816[(39)] = inst_84183__$1);

(statearr_84816[(34)] = inst_84184);

(statearr_84816[(14)] = inst_84187);

return statearr_84816;
})();
if(cljs.core.truth_(inst_84188)){
var statearr_84817_87326 = state_84634__$1;
(statearr_84817_87326[(1)] = (15));

} else {
var statearr_84818_87327 = state_84634__$1;
(statearr_84818_87327[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (45))){
var inst_84277 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84819_87328 = state_84634__$1;
(statearr_84819_87328[(2)] = inst_84277);

(statearr_84819_87328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (53))){
var inst_84314 = (state_84634[(22)]);
var inst_84313 = (state_84634[(21)]);
var inst_84316 = (inst_84314 < inst_84313);
var inst_84317 = inst_84316;
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84317)){
var statearr_84820_87329 = state_84634__$1;
(statearr_84820_87329[(1)] = (55));

} else {
var statearr_84821_87330 = state_84634__$1;
(statearr_84821_87330[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (78))){
var inst_84402 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84822_87331 = state_84634__$1;
(statearr_84822_87331[(2)] = inst_84402);

(statearr_84822_87331[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (132))){
var inst_84579 = (state_84634[(10)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84579)){
var statearr_84823_87332 = state_84634__$1;
(statearr_84823_87332[(1)] = (135));

} else {
var statearr_84824_87333 = state_84634__$1;
(statearr_84824_87333[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (26))){
var state_84634__$1 = state_84634;
var statearr_84825_87334 = state_84634__$1;
(statearr_84825_87334[(2)] = true);

(statearr_84825_87334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (123))){
var inst_84545 = (state_84634[(54)]);
var state_84634__$1 = state_84634;
var statearr_84826_87335 = state_84634__$1;
(statearr_84826_87335[(2)] = inst_84545);

(statearr_84826_87335[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (140))){
var inst_84618 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84827_87336 = state_84634__$1;
(statearr_84827_87336[(2)] = inst_84618);

(statearr_84827_87336[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (16))){
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84184 = (state_84634[(34)]);
var inst_84408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84409 = [inst_84178,inst_84181,inst_84184];
var inst_84410 = (new cljs.core.PersistentVector(null,3,(5),inst_84408,inst_84409,null));
var inst_84411 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_84410);
var state_84634__$1 = state_84634;
if(inst_84411){
var statearr_84828_87337 = state_84634__$1;
(statearr_84828_87337[(1)] = (80));

} else {
var statearr_84829_87338 = state_84634__$1;
(statearr_84829_87338[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (133))){
var inst_84578 = (state_84634[(12)]);
var inst_84588 = cljs.core.async.close_BANG_(inst_84578);
var state_84634__$1 = state_84634;
var statearr_84830_87339 = state_84634__$1;
(statearr_84830_87339[(2)] = inst_84588);

(statearr_84830_87339[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (81))){
var inst_84177 = (state_84634[(37)]);
var inst_84178 = (state_84634[(33)]);
var inst_84179 = (state_84634[(35)]);
var inst_84181 = (state_84634[(30)]);
var inst_84183 = (state_84634[(39)]);
var inst_84184 = (state_84634[(34)]);
var inst_84187 = (state_84634[(14)]);
var inst_84421 = cljs.core.PersistentVector.EMPTY;
var inst_84422 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_84423 = (function (){var map__84155 = inst_84177;
var resolver_sym = inst_84178;
var input = inst_84179;
var e = inst_84181;
var key = inst_84183;
var params = inst_84184;
var trace_data = inst_84187;
return (function (p1__84142_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__84142_SHARP_),input);
});
})();
var inst_84424 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_84423);
var inst_84425 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_84422,inst_84424);
var inst_84426 = (function (){var map__84155 = inst_84177;
var resolver_sym = inst_84178;
var input = inst_84179;
var e = inst_84181;
var key = inst_84183;
var params = inst_84184;
var trace_data = inst_84187;
return (function (p1__84143_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__84143_SHARP_,input);
});
})();
var inst_84427 = com.wsscode.pathom.connect.map_async_serial(inst_84426,processing_sequence);
var state_84634__$1 = (function (){var statearr_84831 = state_84634;
(statearr_84831[(72)] = inst_84421);

(statearr_84831[(73)] = inst_84425);

return statearr_84831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(84),inst_84427);
} else {
if((state_val_84635 === (120))){
var inst_84545 = (state_84634[(54)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84545)){
var statearr_84833_87340 = state_84634__$1;
(statearr_84833_87340[(1)] = (123));

} else {
var statearr_84834_87341 = state_84634__$1;
(statearr_84834_87341[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (79))){
var inst_84393 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84835_87342 = state_84634__$1;
(statearr_84835_87342[(2)] = inst_84393);

(statearr_84835_87342[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (38))){
var _ = (function (){var statearr_84836 = state_84634;
(statearr_84836[(4)] = cljs.core.rest((state_84634[(4)])));

return statearr_84836;
})();
var state_84634__$1 = state_84634;
var ex84832 = (state_84634__$1[(2)]);
var statearr_84837_87343 = state_84634__$1;
(statearr_84837_87343[(5)] = ex84832);


var statearr_84838_87344 = state_84634__$1;
(statearr_84838_87344[(1)] = (37));

(statearr_84838_87344[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (126))){
var inst_84560 = (state_84634[(9)]);
var inst_84562 = cljs.core.chunked_seq_QMARK_(inst_84560);
var state_84634__$1 = state_84634;
if(inst_84562){
var statearr_84839_87345 = state_84634__$1;
(statearr_84839_87345[(1)] = (129));

} else {
var statearr_84840_87346 = state_84634__$1;
(statearr_84840_87346[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (98))){
var inst_84499 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84841_87347 = state_84634__$1;
(statearr_84841_87347[(2)] = inst_84499);

(statearr_84841_87347[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (124))){
var inst_84549 = cljs.core.PersistentHashMap.EMPTY;
var state_84634__$1 = state_84634;
var statearr_84842_87348 = state_84634__$1;
(statearr_84842_87348[(2)] = inst_84549);

(statearr_84842_87348[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (87))){
var inst_84451 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84451)){
var statearr_84843_87349 = state_84634__$1;
(statearr_84843_87349[(1)] = (91));

} else {
var statearr_84844_87350 = state_84634__$1;
(statearr_84844_87350[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (30))){
var inst_84219 = (state_84634[(59)]);
var state_84634__$1 = state_84634;
var statearr_84845_87351 = state_84634__$1;
(statearr_84845_87351[(2)] = inst_84219);

(statearr_84845_87351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (73))){
var inst_84363 = (state_84634[(8)]);
var state_84634__$1 = state_84634;
var statearr_84846_87352 = state_84634__$1;
(statearr_84846_87352[(2)] = inst_84363);

(statearr_84846_87352[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (96))){
var inst_84502 = (state_84634[(71)]);
var inst_84464 = (state_84634[(67)]);
var inst_84458 = (state_84634[(63)]);
var inst_84457 = (state_84634[(65)]);
var inst_84502__$1 = (state_84634[(2)]);
var inst_84503 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_84504 = cljs.core.count(inst_84502__$1);
var inst_84505 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_84504];
var inst_84506 = cljs.core.PersistentHashMap.fromArrays(inst_84503,inst_84505);
var inst_84507 = com.wsscode.pathom.trace.trace(env,inst_84506);
var inst_84508 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_84464,inst_84502__$1);
var inst_84509 = cljs.core.zipmap(inst_84458,inst_84508);
var inst_84510 = cljs.core.set(inst_84457);
var inst_84511 = cljs.core.first(inst_84502__$1);
var inst_84512 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_84511);
var inst_84513 = cljs.core.count(path);
var inst_84514 = (inst_84513 >= (2));
var inst_84515 = ((inst_84512) && (inst_84514));
var state_84634__$1 = (function (){var statearr_84847 = state_84634;
(statearr_84847[(71)] = inst_84502__$1);

(statearr_84847[(70)] = inst_84507);

(statearr_84847[(49)] = inst_84509);

(statearr_84847[(46)] = inst_84510);

return statearr_84847;
})();
if(cljs.core.truth_(inst_84515)){
var statearr_84848_87361 = state_84634__$1;
(statearr_84848_87361[(1)] = (112));

} else {
var statearr_84849_87362 = state_84634__$1;
(statearr_84849_87362[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (10))){
var state_84634__$1 = state_84634;
var statearr_84850_87363 = state_84634__$1;
(statearr_84850_87363[(2)] = false);

(statearr_84850_87363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (18))){
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84184 = (state_84634[(34)]);
var inst_84197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84198 = [inst_84178,inst_84181,inst_84184];
var inst_84199 = (new cljs.core.PersistentVector(null,3,(5),inst_84197,inst_84198,null));
var inst_84200 = com.wsscode.pathom.core.cache_read(env,inst_84199);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(21),inst_84200);
} else {
if((state_val_84635 === (105))){
var inst_84474 = (state_84634[(25)]);
var inst_84483 = com.wsscode.async.async_cljs.promise__GT_chan(inst_84474);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(108),inst_84483);
} else {
if((state_val_84635 === (52))){
var inst_84293 = (state_84634[(29)]);
var inst_84305 = (state_84634[(2)]);
var inst_84310 = cljs.core.seq(inst_84293);
var inst_84311 = inst_84310;
var inst_84312 = null;
var inst_84313 = (0);
var inst_84314 = (0);
var state_84634__$1 = (function (){var statearr_84851 = state_84634;
(statearr_84851[(74)] = inst_84305);

(statearr_84851[(19)] = inst_84311);

(statearr_84851[(20)] = inst_84312);

(statearr_84851[(21)] = inst_84313);

(statearr_84851[(22)] = inst_84314);

return statearr_84851;
})();
var statearr_84852_87366 = state_84634__$1;
(statearr_84852_87366[(2)] = null);

(statearr_84852_87366[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (114))){
var inst_84509 = (state_84634[(49)]);
var inst_84521 = (state_84634[(2)]);
var inst_84526 = cljs.core.seq(inst_84509);
var inst_84527 = inst_84526;
var inst_84528 = null;
var inst_84529 = (0);
var inst_84530 = (0);
var state_84634__$1 = (function (){var statearr_84853 = state_84634;
(statearr_84853[(75)] = inst_84521);

(statearr_84853[(50)] = inst_84527);

(statearr_84853[(51)] = inst_84528);

(statearr_84853[(52)] = inst_84529);

(statearr_84853[(53)] = inst_84530);

return statearr_84853;
})();
var statearr_84854_87367 = state_84634__$1;
(statearr_84854_87367[(2)] = null);

(statearr_84854_87367[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (67))){
var inst_84344 = (state_84634[(17)]);
var inst_84348 = cljs.core.chunk_first(inst_84344);
var inst_84349 = cljs.core.chunk_rest(inst_84344);
var inst_84350 = cljs.core.count(inst_84348);
var inst_84311 = inst_84349;
var inst_84312 = inst_84348;
var inst_84313 = inst_84350;
var inst_84314 = (0);
var state_84634__$1 = (function (){var statearr_84855 = state_84634;
(statearr_84855[(19)] = inst_84311);

(statearr_84855[(20)] = inst_84312);

(statearr_84855[(21)] = inst_84313);

(statearr_84855[(22)] = inst_84314);

return statearr_84855;
})();
var statearr_84856_87369 = state_84634__$1;
(statearr_84856_87369[(2)] = null);

(statearr_84856_87369[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (71))){
var inst_84362 = (state_84634[(48)]);
var inst_84372 = cljs.core.async.close_BANG_(inst_84362);
var state_84634__$1 = state_84634;
var statearr_84857_87374 = state_84634__$1;
(statearr_84857_87374[(2)] = inst_84372);

(statearr_84857_87374[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (42))){
var inst_84262 = (state_84634[(2)]);
var inst_84263 = com.wsscode.async.async_cljs.throw_err(inst_84262);
var state_84634__$1 = state_84634;
var statearr_84858_87375 = state_84634__$1;
(statearr_84858_87375[(2)] = inst_84263);

(statearr_84858_87375[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (80))){
var inst_84178 = (state_84634[(33)]);
var inst_84181 = (state_84634[(30)]);
var inst_84184 = (state_84634[(34)]);
var inst_84413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84414 = [inst_84178,inst_84181,inst_84184];
var inst_84415 = (new cljs.core.PersistentVector(null,3,(5),inst_84413,inst_84414,null));
var inst_84416 = com.wsscode.pathom.core.cache_read(env,inst_84415);
var state_84634__$1 = state_84634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_84634__$1,(83),inst_84416);
} else {
if((state_val_84635 === (37))){
var inst_84251 = (state_84634[(2)]);
var inst_84252 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_84251);
var state_84634__$1 = state_84634;
var statearr_84859_87382 = state_84634__$1;
(statearr_84859_87382[(2)] = inst_84252);

(statearr_84859_87382[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (63))){
var inst_84328 = (state_84634[(13)]);
var inst_84335 = (state_84634[(2)]);
var inst_84336 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_84328,inst_84335);
var state_84634__$1 = state_84634;
var statearr_84860_87384 = state_84634__$1;
(statearr_84860_87384[(2)] = inst_84336);

(statearr_84860_87384[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (94))){
var state_84634__$1 = state_84634;
var statearr_84861_87385 = state_84634__$1;
(statearr_84861_87385[(2)] = null);

(statearr_84861_87385[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (8))){
var inst_84172 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
if(cljs.core.truth_(inst_84172)){
var statearr_84862_87386 = state_84634__$1;
(statearr_84862_87386[(1)] = (12));

} else {
var statearr_84863_87388 = state_84634__$1;
(statearr_84863_87388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (49))){
var inst_84275 = (state_84634[(2)]);
var state_84634__$1 = state_84634;
var statearr_84864_87389 = state_84634__$1;
(statearr_84864_87389[(2)] = inst_84275);

(statearr_84864_87389[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84635 === (84))){
var inst_84421 = (state_84634[(72)]);
var inst_84425 = (state_84634[(73)]);
var inst_84431 = (state_84634[(66)]);
var inst_84179 = (state_84634[(35)]);
var inst_84432 = (state_84634[(64)]);
var inst_84177 = (state_84634[(37)]);
var inst_84183 = (state_84634[(39)]);
var inst_84184 = (state_84634[(34)]);
var inst_84181 = (state_84634[(30)]);
var inst_84178 = (state_84634[(33)]);
var inst_84187 = (state_84634[(14)]);
var inst_84435 = (state_84634[(27)]);
var inst_84429 = (state_84634[(2)]);
var inst_84430 = com.wsscode.async.async_cljs.throw_err(inst_84429);
var inst_84431__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_84421,inst_84425,inst_84430);
var inst_84432__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_84431__$1);
var inst_84433 = (function (){var input = inst_84179;
var items_map = inst_84432__$1;
var map__84155 = inst_84177;
var key = inst_84183;
var params = inst_84184;
var e = inst_84181;
var resolver_sym = inst_84178;
var trace_data = inst_84187;
var valid_inputs = inst_84431__$1;
return (function (p1__84144_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__84144_SHARP_,params], null));
});
})();
var inst_84434 = cljs.core.keys(inst_84432__$1);
var inst_84435__$1 = cljs.core.group_by(inst_84433,inst_84434);
var inst_84437 = (inst_84435__$1 == null);
var inst_84438 = cljs.core.not(inst_84437);
var state_84634__$1 = (function (){var statearr_84865 = state_84634;
(statearr_84865[(66)] = inst_84431__$1);

(statearr_84865[(64)] = inst_84432__$1);

(statearr_84865[(27)] = inst_84435__$1);

return statearr_84865;
})();
if(inst_84438){
var statearr_84866_87393 = state_84634__$1;
(statearr_84866_87393[(1)] = (85));

} else {
var statearr_84867_87394 = state_84634__$1;
(statearr_84867_87394[(1)] = (86));

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
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto____0 = (function (){
var statearr_84868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84868[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto__);

(statearr_84868[(1)] = (1));

return statearr_84868;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto____1 = (function (state_84634){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_84634);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e84869){var ex__50860__auto__ = e84869;
var statearr_84870_87398 = state_84634;
(statearr_84870_87398[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_84634[(4)]))){
var statearr_84871_87399 = state_84634;
(statearr_84871_87399[(1)] = cljs.core.first((state_84634[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87403 = state_84634;
state_84634 = G__87403;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto__ = function(state_84634){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto____1.call(this,state_84634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_84872 = f__50893__auto__();
(statearr_84872[(6)] = c__50892__auto___86915);

return statearr_84872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__84876){
var map__84877 = p__84876;
var map__84877__$1 = (((((!((map__84877 == null))))?(((((map__84877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84877):map__84877);
var env = map__84877__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84877__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84877__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84877__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84877__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5733__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__84879 = temp__5733__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84879,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84879,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__50892__auto___87406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85281){
var state_val_85282 = (state_85281[(1)]);
if((state_val_85282 === (65))){
var inst_85044 = cljs.core.PersistentHashMap.EMPTY;
var state_85281__$1 = state_85281;
var statearr_85283_87407 = state_85281__$1;
(statearr_85283_87407[(2)] = inst_85044);

(statearr_85283_87407[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (70))){
var inst_84943 = (state_85281[(7)]);
var inst_85069 = (state_85281[(8)]);
var inst_84912 = (state_85281[(9)]);
var inst_85067 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_84943);
var inst_85068 = cljs.core.keys(inst_85067);
var inst_85069__$1 = cljs.core.set(inst_85068);
var inst_85070 = cljs.core.contains_QMARK_(inst_85069__$1,inst_84912);
var state_85281__$1 = (function (){var statearr_85284 = state_85281;
(statearr_85284[(8)] = inst_85069__$1);

return statearr_85284;
})();
if(inst_85070){
var statearr_85285_87409 = state_85281__$1;
(statearr_85285_87409[(1)] = (73));

} else {
var statearr_85286_87410 = state_85281__$1;
(statearr_85286_87410[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (62))){
var state_85281__$1 = state_85281;
var statearr_85287_87411 = state_85281__$1;
(statearr_85287_87411[(2)] = null);

(statearr_85287_87411[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (74))){
var inst_84912 = (state_85281[(9)]);
var inst_85059 = (state_85281[(10)]);
var inst_85075 = cljs.core.PersistentHashMap.EMPTY;
var inst_85076 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_85077 = [inst_84912];
var inst_85078 = cljs.core.PersistentHashMap.fromArrays(inst_85076,inst_85077);
var inst_85079 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_85078);
var inst_85080 = (inst_85059.cljs$core$IFn$_invoke$arity$2 ? inst_85059.cljs$core$IFn$_invoke$arity$2(inst_85075,inst_85079) : inst_85059.call(null,inst_85075,inst_85079));
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(76),inst_85080);
} else {
if((state_val_85282 === (110))){
var inst_85209 = [key];
var inst_85210 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_85211 = cljs.core.PersistentHashMap.fromArrays(inst_85209,inst_85210);
var state_85281__$1 = state_85281;
var statearr_85288_87417 = state_85281__$1;
(statearr_85288_87417[(2)] = inst_85211);

(statearr_85288_87417[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (7))){
var inst_84917 = (state_85281[(11)]);
var inst_84922 = inst_84917.cljs$lang$protocol_mask$partition0$;
var inst_84923 = (inst_84922 & (64));
var inst_84924 = inst_84917.cljs$core$ISeq$;
var inst_84925 = (cljs.core.PROTOCOL_SENTINEL === inst_84924);
var inst_84926 = ((inst_84923) || (inst_84925));
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_84926)){
var statearr_85289_87418 = state_85281__$1;
(statearr_85289_87418[(1)] = (10));

} else {
var statearr_85290_87419 = state_85281__$1;
(statearr_85290_87419[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (59))){
var inst_85039 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85291_87421 = state_85281__$1;
(statearr_85291_87421[(2)] = inst_85039);

(statearr_85291_87421[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (86))){
var inst_85184 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85292_87422 = state_85281__$1;
(statearr_85292_87422[(2)] = inst_85184);

(statearr_85292_87422[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (20))){
var inst_84899 = (state_85281[(12)]);
var inst_84912 = (state_85281[(9)]);
var inst_84978 = cljs.core.contains_QMARK_(inst_84899,inst_84912);
var state_85281__$1 = state_85281;
if(inst_84978){
var statearr_85293_87423 = state_85281__$1;
(statearr_85293_87423[(1)] = (30));

} else {
var statearr_85294_87425 = state_85281__$1;
(statearr_85294_87425[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (72))){
var inst_85271 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85295_87426 = state_85281__$1;
(statearr_85295_87426[(2)] = inst_85271);

(statearr_85295_87426[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (58))){
var state_85281__$1 = state_85281;
var statearr_85296_87427 = state_85281__$1;
(statearr_85296_87427[(1)] = (61));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (60))){
var inst_85031 = (state_85281[(2)]);
var inst_85032 = com.wsscode.async.async_cljs.consumer_pair(inst_85031);
var state_85281__$1 = state_85281;
var statearr_85298_87428 = state_85281__$1;
(statearr_85298_87428[(2)] = inst_85032);

(statearr_85298_87428[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (27))){
var inst_84976 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85299_87432 = state_85281__$1;
(statearr_85299_87432[(2)] = inst_84976);

(statearr_85299_87432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (1))){
var inst_84889 = (state_85281[(13)]);
var inst_84889__$1 = plan;
var inst_84890 = cljs.core.seq(inst_84889__$1);
var inst_84891 = cljs.core.first(inst_84890);
var inst_84892 = cljs.core.next(inst_84890);
var inst_84893 = cljs.core.PersistentHashMap.EMPTY;
var inst_84894 = out;
var inst_84895 = waiting;
var inst_84896 = inst_84889__$1;
var inst_84897 = inst_84893;
var inst_84898 = inst_84894;
var inst_84899 = inst_84895;
var state_85281__$1 = (function (){var statearr_85300 = state_85281;
(statearr_85300[(13)] = inst_84889__$1);

(statearr_85300[(14)] = inst_84891);

(statearr_85300[(15)] = inst_84892);

(statearr_85300[(16)] = inst_84896);

(statearr_85300[(17)] = inst_84897);

(statearr_85300[(18)] = inst_84898);

(statearr_85300[(12)] = inst_84899);

return statearr_85300;
})();
var statearr_85301_87436 = state_85281__$1;
(statearr_85301_87436[(2)] = null);

(statearr_85301_87436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (69))){
var inst_85273 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85302_87437 = state_85281__$1;
(statearr_85302_87437[(2)] = inst_85273);

(statearr_85302_87437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (101))){
var inst_85152 = (state_85281[(19)]);
var inst_85161 = (state_85281[(20)]);
var inst_85175 = (state_85281[(2)]);
var inst_85176 = [out,inst_85152,inst_85175];
var inst_85177 = cljs.core.PersistentHashMap.fromArrays(inst_85161,inst_85176);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85281__$1,(95),ch,inst_85177);
} else {
if((state_val_85282 === (24))){
var inst_84960 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_84960)){
var statearr_85303_87438 = state_85281__$1;
(statearr_85303_87438[(1)] = (25));

} else {
var statearr_85304_87439 = state_85281__$1;
(statearr_85304_87439[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (102))){
var inst_85059 = (state_85281[(10)]);
var inst_85058 = (state_85281[(21)]);
var inst_85188 = cljs.core.PersistentHashMap.EMPTY;
var inst_85189 = (inst_85059.cljs$core$IFn$_invoke$arity$2 ? inst_85059.cljs$core$IFn$_invoke$arity$2(inst_85188,inst_85058) : inst_85059.call(null,inst_85188,inst_85058));
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(105),inst_85189);
} else {
if((state_val_85282 === (55))){
var inst_85041 = (state_85281[(22)]);
var inst_85041__$1 = (state_85281[(2)]);
var state_85281__$1 = (function (){var statearr_85305 = state_85281;
(statearr_85305[(22)] = inst_85041__$1);

return statearr_85305;
})();
if(cljs.core.truth_(inst_85041__$1)){
var statearr_85306_87440 = state_85281__$1;
(statearr_85306_87440[(1)] = (64));

} else {
var statearr_85307_87441 = state_85281__$1;
(statearr_85307_87441[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (85))){
var inst_85110 = (state_85281[(23)]);
var inst_84912 = (state_85281[(9)]);
var inst_85059 = (state_85281[(10)]);
var inst_85133 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_85134 = [inst_85110,inst_84912];
var inst_85135 = cljs.core.PersistentHashMap.fromArrays(inst_85133,inst_85134);
var inst_85136 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_85135);
var inst_85137 = (inst_85059.cljs$core$IFn$_invoke$arity$2 ? inst_85059.cljs$core$IFn$_invoke$arity$2(inst_85110,inst_85136) : inst_85059.call(null,inst_85110,inst_85136));
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(88),inst_85137);
} else {
if((state_val_85282 === (39))){
var inst_84998 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85308_87442 = state_85281__$1;
(statearr_85308_87442[(2)] = inst_84998);

(statearr_85308_87442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (88))){
var inst_85139 = (state_85281[(24)]);
var inst_85139__$1 = (state_85281[(2)]);
var state_85281__$1 = (function (){var statearr_85309 = state_85281;
(statearr_85309[(24)] = inst_85139__$1);

return statearr_85309;
})();
if(cljs.core.truth_(inst_85139__$1)){
var statearr_85310_87443 = state_85281__$1;
(statearr_85310_87443[(1)] = (89));

} else {
var statearr_85311_87444 = state_85281__$1;
(statearr_85311_87444[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (46))){
var state_85281__$1 = state_85281;
var statearr_85313_87445 = state_85281__$1;
(statearr_85313_87445[(2)] = null);

(statearr_85313_87445[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (4))){
var inst_84905 = (state_85281[(25)]);
var inst_84913 = (state_85281[(26)]);
var inst_84917 = (state_85281[(11)]);
var inst_84912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84905,(0),null);
var inst_84913__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_84905,(1),null);
var inst_84914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84915 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_84913__$1];
var inst_84916 = (new cljs.core.PersistentVector(null,2,(5),inst_84914,inst_84915,null));
var inst_84917__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_84916);
var inst_84919 = (inst_84917__$1 == null);
var inst_84920 = cljs.core.not(inst_84919);
var state_85281__$1 = (function (){var statearr_85315 = state_85281;
(statearr_85315[(9)] = inst_84912);

(statearr_85315[(26)] = inst_84913__$1);

(statearr_85315[(11)] = inst_84917__$1);

return statearr_85315;
})();
if(inst_84920){
var statearr_85316_87447 = state_85281__$1;
(statearr_85316_87447[(1)] = (7));

} else {
var statearr_85317_87448 = state_85281__$1;
(statearr_85317_87448[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (77))){
var inst_85082 = (state_85281[(27)]);
var inst_84899 = (state_85281[(12)]);
var inst_85087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85082,(0),null);
var inst_85088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85082,(1),null);
var inst_85089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85082,(2),null);
var tmp85312 = inst_84899;
var inst_84896 = inst_85087;
var inst_84897 = inst_85088;
var inst_84898 = inst_85089;
var inst_84899__$1 = tmp85312;
var state_85281__$1 = (function (){var statearr_85318 = state_85281;
(statearr_85318[(16)] = inst_84896);

(statearr_85318[(17)] = inst_84897);

(statearr_85318[(18)] = inst_84898);

(statearr_85318[(12)] = inst_84899__$1);

return statearr_85318;
})();
var statearr_85319_87449 = state_85281__$1;
(statearr_85319_87449[(2)] = null);

(statearr_85319_87449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (106))){
var inst_85191 = (state_85281[(28)]);
var inst_84899 = (state_85281[(12)]);
var inst_85196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85191,(0),null);
var inst_85197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85191,(1),null);
var inst_85198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85191,(2),null);
var tmp85314 = inst_84899;
var inst_84896 = inst_85196;
var inst_84897 = inst_85197;
var inst_84898 = inst_85198;
var inst_84899__$1 = tmp85314;
var state_85281__$1 = (function (){var statearr_85320 = state_85281;
(statearr_85320[(16)] = inst_84896);

(statearr_85320[(17)] = inst_84897);

(statearr_85320[(18)] = inst_84898);

(statearr_85320[(12)] = inst_84899__$1);

return statearr_85320;
})();
var statearr_85321_87450 = state_85281__$1;
(statearr_85321_87450[(2)] = null);

(statearr_85321_87450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (119))){
var inst_85262 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85322_87451 = state_85281__$1;
(statearr_85322_87451[(2)] = inst_85262);

(statearr_85322_87451[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (95))){
var inst_85179 = (state_85281[(2)]);
var inst_85180 = cljs.core.async.close_BANG_(ch);
var state_85281__$1 = (function (){var statearr_85323 = state_85281;
(statearr_85323[(29)] = inst_85179);

return statearr_85323;
})();
var statearr_85324_87456 = state_85281__$1;
(statearr_85324_87456[(2)] = inst_85180);

(statearr_85324_87456[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (54))){
var inst_85020 = (state_85281[(30)]);
var inst_85027 = com.wsscode.async.async_cljs.promise_QMARK_(inst_85020);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_85027)){
var statearr_85325_87457 = state_85281__$1;
(statearr_85325_87457[(1)] = (57));

} else {
var statearr_85326_87459 = state_85281__$1;
(statearr_85326_87459[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (92))){
var inst_84943 = (state_85281[(7)]);
var inst_85152 = (state_85281[(19)]);
var inst_85157 = com.wsscode.pathom.core.add_error(inst_84943,inst_85152);
var state_85281__$1 = state_85281;
var statearr_85327_87462 = state_85281__$1;
(statearr_85327_87462[(2)] = inst_85157);

(statearr_85327_87462[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (104))){
var inst_85267 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85328_87463 = state_85281__$1;
(statearr_85328_87463[(2)] = inst_85267);

(statearr_85328_87463[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (15))){
var inst_84938 = (state_85281[(31)]);
var inst_84913 = (state_85281[(26)]);
var inst_84943 = (state_85281[(7)]);
var inst_84944 = (state_85281[(32)]);
var inst_84941 = (state_85281[(33)]);
var inst_84945 = (state_85281[(34)]);
var inst_84912 = (state_85281[(9)]);
var inst_84938__$1 = (state_85281[(2)]);
var inst_84939 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_84938__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_84940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84938__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_84941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_84938__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_84942 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_84913);
var inst_84943__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_84938__$1);
var inst_84944__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_84943__$1);
var inst_84945__$1 = cljs.core.select_keys(inst_84944__$1,inst_84941__$1);
var inst_84946 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_84947 = [key,inst_84913,inst_84945__$1];
var inst_84948 = cljs.core.PersistentHashMap.fromArrays(inst_84946,inst_84947);
var inst_84949 = cljs.core.contains_QMARK_(inst_84944__$1,inst_84912);
var state_85281__$1 = (function (){var statearr_85329 = state_85281;
(statearr_85329[(31)] = inst_84938__$1);

(statearr_85329[(35)] = inst_84939);

(statearr_85329[(36)] = inst_84940);

(statearr_85329[(33)] = inst_84941__$1);

(statearr_85329[(37)] = inst_84942);

(statearr_85329[(7)] = inst_84943__$1);

(statearr_85329[(32)] = inst_84944__$1);

(statearr_85329[(34)] = inst_84945__$1);

(statearr_85329[(38)] = inst_84948);

return statearr_85329;
})();
if(inst_84949){
var statearr_85330_87467 = state_85281__$1;
(statearr_85330_87467[(1)] = (16));

} else {
var statearr_85331_87468 = state_85281__$1;
(statearr_85331_87468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (48))){
var inst_85052 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85332_87469 = state_85281__$1;
(statearr_85332_87469[(2)] = inst_85052);

(statearr_85332_87469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (50))){
var inst_85049 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85333_87470 = state_85281__$1;
(statearr_85333_87470[(2)] = inst_85049);

(statearr_85333_87470[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (116))){
var inst_85233 = (state_85281[(39)]);
var inst_85233__$1 = (state_85281[(2)]);
var state_85281__$1 = (function (){var statearr_85334 = state_85281;
(statearr_85334[(39)] = inst_85233__$1);

return statearr_85334;
})();
if(cljs.core.truth_(inst_85233__$1)){
var statearr_85335_87471 = state_85281__$1;
(statearr_85335_87471[(1)] = (117));

} else {
var statearr_85336_87472 = state_85281__$1;
(statearr_85336_87472[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (75))){
var inst_85106 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85337_87473 = state_85281__$1;
(statearr_85337_87473[(2)] = inst_85106);

(statearr_85337_87473[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (99))){
var inst_85169 = (state_85281[(40)]);
var inst_84912 = (state_85281[(9)]);
var inst_85172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_85169,inst_84912,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_85281__$1 = state_85281;
var statearr_85338_87474 = state_85281__$1;
(statearr_85338_87474[(2)] = inst_85172);

(statearr_85338_87474[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (21))){
var inst_85056 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85339_87475 = state_85281__$1;
(statearr_85339_87475[(2)] = inst_85056);

(statearr_85339_87475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (31))){
var state_85281__$1 = state_85281;
var statearr_85340_87476 = state_85281__$1;
(statearr_85340_87476[(1)] = (46));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (113))){
var inst_85058 = (state_85281[(21)]);
var inst_85059 = (state_85281[(10)]);
var inst_85226 = cljs.core.PersistentHashMap.EMPTY;
var inst_85227 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85228 = [inst_85058];
var inst_85229 = cljs.core.PersistentHashMap.fromArrays(inst_85227,inst_85228);
var inst_85230 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_85229);
var inst_85231 = (inst_85059.cljs$core$IFn$_invoke$arity$2 ? inst_85059.cljs$core$IFn$_invoke$arity$2(inst_85226,inst_85230) : inst_85059.call(null,inst_85226,inst_85230));
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(116),inst_85231);
} else {
if((state_val_85282 === (32))){
var inst_85054 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85342_87477 = state_85281__$1;
(statearr_85342_87477[(2)] = inst_85054);

(statearr_85342_87477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (40))){
var inst_84985 = (state_85281[(41)]);
var inst_85003 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_84985);
var state_85281__$1 = state_85281;
var statearr_85344_87478 = state_85281__$1;
(statearr_85344_87478[(2)] = inst_85003);

(statearr_85344_87478[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (91))){
var inst_85182 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85345_87481 = state_85281__$1;
(statearr_85345_87481[(2)] = inst_85182);

(statearr_85345_87481[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (117))){
var inst_85233 = (state_85281[(39)]);
var inst_84899 = (state_85281[(12)]);
var inst_85238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85233,(0),null);
var inst_85239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85233,(1),null);
var inst_85240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85233,(2),null);
var tmp85343 = inst_84899;
var inst_84896 = inst_85238;
var inst_84897 = inst_85239;
var inst_84898 = inst_85240;
var inst_84899__$1 = tmp85343;
var state_85281__$1 = (function (){var statearr_85346 = state_85281;
(statearr_85346[(16)] = inst_84896);

(statearr_85346[(17)] = inst_84897);

(statearr_85346[(18)] = inst_84898);

(statearr_85346[(12)] = inst_84899__$1);

return statearr_85346;
})();
var statearr_85347_87482 = state_85281__$1;
(statearr_85347_87482[(2)] = null);

(statearr_85347_87482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (108))){
var inst_85223 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85348_87483 = state_85281__$1;
(statearr_85348_87483[(2)] = inst_85223);

(statearr_85348_87483[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (56))){
var inst_85024 = (state_85281[(2)]);
var inst_85025 = com.wsscode.async.async_cljs.throw_err(inst_85024);
var state_85281__$1 = state_85281;
var statearr_85349_87484 = state_85281__$1;
(statearr_85349_87484[(2)] = inst_85025);

(statearr_85349_87484[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (33))){
var inst_84985 = (state_85281[(41)]);
var inst_84985__$1 = (state_85281[(2)]);
var inst_84987 = (inst_84985__$1 == null);
var inst_84988 = cljs.core.not(inst_84987);
var state_85281__$1 = (function (){var statearr_85350 = state_85281;
(statearr_85350[(41)] = inst_84985__$1);

return statearr_85350;
})();
if(inst_84988){
var statearr_85351_87485 = state_85281__$1;
(statearr_85351_87485[(1)] = (34));

} else {
var statearr_85352_87486 = state_85281__$1;
(statearr_85352_87486[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (13))){
var inst_84917 = (state_85281[(11)]);
var inst_84935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_84917);
var state_85281__$1 = state_85281;
var statearr_85353_87487 = state_85281__$1;
(statearr_85353_87487[(2)] = inst_84935);

(statearr_85353_87487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (22))){
var state_85281__$1 = state_85281;
var statearr_85354_87488 = state_85281__$1;
(statearr_85354_87488[(2)] = processing_sequence);

(statearr_85354_87488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (90))){
var inst_85110 = (state_85281[(23)]);
var inst_84912 = (state_85281[(9)]);
var inst_84941 = (state_85281[(33)]);
var inst_85139 = (state_85281[(24)]);
var inst_84891 = (state_85281[(14)]);
var inst_84905 = (state_85281[(25)]);
var inst_84944 = (state_85281[(32)]);
var inst_84892 = (state_85281[(15)]);
var inst_84906 = (state_85281[(42)]);
var inst_84939 = (state_85281[(35)]);
var inst_84898 = (state_85281[(18)]);
var inst_84897 = (state_85281[(17)]);
var inst_84896 = (state_85281[(16)]);
var inst_84889 = (state_85281[(13)]);
var inst_85152 = (state_85281[(19)]);
var inst_84940 = (state_85281[(36)]);
var inst_84942 = (state_85281[(37)]);
var inst_84943 = (state_85281[(7)]);
var inst_84945 = (state_85281[(34)]);
var inst_84913 = (state_85281[(26)]);
var inst_84899 = (state_85281[(12)]);
var inst_84948 = (state_85281[(38)]);
var inst_84938 = (state_85281[(31)]);
var inst_85059 = (state_85281[(10)]);
var inst_85149 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_85150 = [inst_85110,inst_84912];
var inst_85151 = cljs.core.PersistentHashMap.fromArrays(inst_85149,inst_85150);
var inst_85152__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_85151);
var inst_85153 = (function (){var input = inst_84941;
var temp__5733__auto____$1 = inst_85139;
var first__84888 = inst_84891;
var step = inst_84905;
var entity = inst_84944;
var key_SINGLEQUOTE_ = inst_84912;
var response = inst_85110;
var seq__84887 = inst_84892;
var seq__84902 = inst_84906;
var cache_QMARK_ = inst_84939;
var out_left = inst_84898;
var failed_resolvers = inst_84897;
var G__84885 = inst_84896;
var vec__84886 = inst_84889;
var err = inst_85152__$1;
var batch_QMARK_ = inst_84940;
var first__84903 = inst_84905;
var output = inst_84942;
var env__$2 = inst_84943;
var e = inst_84945;
var resolver_sym = inst_84913;
var waiting__$1 = inst_84899;
var trace_data = inst_84948;
var resolver = inst_84938;
var map__84911 = inst_84938;
var replan = inst_85059;
var vec__84901 = inst_84896;
var tail = inst_84906;
var vec__84908 = inst_84905;
return (function (p1__84875_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__84875_SHARP_], 0));
});
})();
var inst_85154 = com.wsscode.pathom.core.swap_entity_BANG_(inst_84943,inst_85153);
var inst_85155 = cljs.core.seq(inst_84906);
var state_85281__$1 = (function (){var statearr_85355 = state_85281;
(statearr_85355[(19)] = inst_85152__$1);

(statearr_85355[(43)] = inst_85154);

return statearr_85355;
})();
if(inst_85155){
var statearr_85356_87493 = state_85281__$1;
(statearr_85356_87493[(1)] = (92));

} else {
var statearr_85357_87494 = state_85281__$1;
(statearr_85357_87494[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (109))){
var inst_85220 = (state_85281[(2)]);
var inst_85221 = cljs.core.async.close_BANG_(ch);
var state_85281__$1 = (function (){var statearr_85358 = state_85281;
(statearr_85358[(44)] = inst_85220);

return statearr_85358;
})();
var statearr_85359_87503 = state_85281__$1;
(statearr_85359_87503[(2)] = inst_85221);

(statearr_85359_87503[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (36))){
var inst_85001 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_85001)){
var statearr_85360_87504 = state_85281__$1;
(statearr_85360_87504[(1)] = (40));

} else {
var statearr_85361_87505 = state_85281__$1;
(statearr_85361_87505[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (41))){
var inst_84985 = (state_85281[(41)]);
var state_85281__$1 = state_85281;
var statearr_85363_87506 = state_85281__$1;
(statearr_85363_87506[(2)] = inst_84985);

(statearr_85363_87506[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (118))){
var inst_85058 = (state_85281[(21)]);
var inst_84913 = (state_85281[(26)]);
var inst_84943 = (state_85281[(7)]);
var inst_85243 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85244 = [inst_85058];
var inst_85245 = cljs.core.PersistentHashMap.fromArrays(inst_85243,inst_85244);
var inst_85246 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_85245);
var inst_85247 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85248 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_84913,inst_85058];
var inst_85249 = cljs.core.PersistentHashMap.fromArrays(inst_85247,inst_85248);
var inst_85250 = com.wsscode.pathom.trace.trace(inst_84943,inst_85249);
var inst_85251 = com.wsscode.pathom.core.add_error(inst_84943,inst_85246);
var inst_85252 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85253 = [key];
var inst_85254 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_85255 = cljs.core.PersistentHashMap.fromArrays(inst_85253,inst_85254);
var inst_85256 = [out,inst_85246,inst_85255];
var inst_85257 = cljs.core.PersistentHashMap.fromArrays(inst_85252,inst_85256);
var state_85281__$1 = (function (){var statearr_85364 = state_85281;
(statearr_85364[(45)] = inst_85250);

(statearr_85364[(46)] = inst_85251);

return statearr_85364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85281__$1,(120),ch,inst_85257);
} else {
if((state_val_85282 === (89))){
var inst_85139 = (state_85281[(24)]);
var inst_84899 = (state_85281[(12)]);
var inst_85144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85139,(0),null);
var inst_85145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85139,(1),null);
var inst_85146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85139,(2),null);
var tmp85362 = inst_84899;
var inst_84896 = inst_85144;
var inst_84897 = inst_85145;
var inst_84898 = inst_85146;
var inst_84899__$1 = tmp85362;
var state_85281__$1 = (function (){var statearr_85365 = state_85281;
(statearr_85365[(16)] = inst_84896);

(statearr_85365[(17)] = inst_84897);

(statearr_85365[(18)] = inst_84898);

(statearr_85365[(12)] = inst_84899__$1);

return statearr_85365;
})();
var statearr_85366_87510 = state_85281__$1;
(statearr_85366_87510[(2)] = null);

(statearr_85366_87510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (100))){
var inst_85169 = (state_85281[(40)]);
var state_85281__$1 = state_85281;
var statearr_85367_87511 = state_85281__$1;
(statearr_85367_87511[(2)] = inst_85169);

(statearr_85367_87511[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (43))){
var inst_85007 = (state_85281[(47)]);
var state_85281__$1 = state_85281;
var statearr_85368_87512 = state_85281__$1;
(statearr_85368_87512[(2)] = inst_85007);

(statearr_85368_87512[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (61))){
var inst_85020 = (state_85281[(30)]);
var state_85281__$1 = state_85281;
var statearr_85369_87524 = state_85281__$1;
(statearr_85369_87524[(2)] = inst_85020);

(statearr_85369_87524[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (29))){
var inst_84974 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85370_87525 = state_85281__$1;
(statearr_85370_87525[(2)] = inst_84974);

(statearr_85370_87525[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (44))){
var state_85281__$1 = state_85281;
var statearr_85371_87526 = state_85281__$1;
(statearr_85371_87526[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_85371_87526[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (93))){
var state_85281__$1 = state_85281;
var statearr_85372_87527 = state_85281__$1;
(statearr_85372_87527[(2)] = null);

(statearr_85372_87527[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (6))){
var inst_85277 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85373_87528 = state_85281__$1;
(statearr_85373_87528[(2)] = inst_85277);

(statearr_85373_87528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (111))){
var inst_84898 = (state_85281[(18)]);
var inst_85213 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_85214 = cljs.core.zipmap(inst_84898,inst_85213);
var state_85281__$1 = state_85281;
var statearr_85374_87529 = state_85281__$1;
(statearr_85374_87529[(2)] = inst_85214);

(statearr_85374_87529[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (28))){
var inst_84964 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85375_87530 = state_85281__$1;
(statearr_85375_87530[(2)] = inst_84964);

(statearr_85375_87530[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (64))){
var inst_85041 = (state_85281[(22)]);
var state_85281__$1 = state_85281;
var statearr_85376_87531 = state_85281__$1;
(statearr_85376_87531[(2)] = inst_85041);

(statearr_85376_87531[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (103))){
var state_85281__$1 = state_85281;
var statearr_85377_87532 = state_85281__$1;
(statearr_85377_87532[(1)] = (113));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (51))){
var inst_85014 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85379_87533 = state_85281__$1;
(statearr_85379_87533[(2)] = inst_85014);

(statearr_85379_87533[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (25))){
var inst_84943 = (state_85281[(7)]);
var inst_84962 = com.wsscode.pathom.connect.parallel_batch(inst_84943);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(28),inst_84962);
} else {
if((state_val_85282 === (34))){
var inst_84985 = (state_85281[(41)]);
var inst_84990 = inst_84985.cljs$lang$protocol_mask$partition0$;
var inst_84991 = (inst_84990 & (64));
var inst_84992 = inst_84985.cljs$core$ISeq$;
var inst_84993 = (cljs.core.PROTOCOL_SENTINEL === inst_84992);
var inst_84994 = ((inst_84991) || (inst_84993));
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_84994)){
var statearr_85380_87534 = state_85281__$1;
(statearr_85380_87534[(1)] = (37));

} else {
var statearr_85381_87535 = state_85281__$1;
(statearr_85381_87535[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (17))){
var inst_84939 = (state_85281[(35)]);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_84939)){
var statearr_85382_87539 = state_85281__$1;
(statearr_85382_87539[(1)] = (19));

} else {
var statearr_85383_87540 = state_85281__$1;
(statearr_85383_87540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (3))){
var inst_85279 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85281__$1,inst_85279);
} else {
if((state_val_85282 === (12))){
var inst_84930 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85384_87541 = state_85281__$1;
(statearr_85384_87541[(2)] = inst_84930);

(statearr_85384_87541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (2))){
var inst_84896 = (state_85281[(16)]);
var inst_84905 = (state_85281[(25)]);
var inst_84904 = cljs.core.seq(inst_84896);
var inst_84905__$1 = cljs.core.first(inst_84904);
var inst_84906 = cljs.core.next(inst_84904);
var state_85281__$1 = (function (){var statearr_85385 = state_85281;
(statearr_85385[(25)] = inst_84905__$1);

(statearr_85385[(42)] = inst_84906);

return statearr_85385;
})();
if(cljs.core.truth_(inst_84905__$1)){
var statearr_85386_87550 = state_85281__$1;
(statearr_85386_87550[(1)] = (4));

} else {
var statearr_85387_87551 = state_85281__$1;
(statearr_85387_87551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (66))){
var inst_85046 = (state_85281[(2)]);
var _ = (function (){var statearr_85388 = state_85281;
(statearr_85388[(4)] = cljs.core.rest((state_85281[(4)])));

return statearr_85388;
})();
var state_85281__$1 = state_85281;
var statearr_85389_87552 = state_85281__$1;
(statearr_85389_87552[(2)] = inst_85046);

(statearr_85389_87552[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (107))){
var inst_84913 = (state_85281[(26)]);
var inst_84943 = (state_85281[(7)]);
var inst_85058 = (state_85281[(21)]);
var inst_84906 = (state_85281[(42)]);
var inst_85201 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_85202 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_84913];
var inst_85203 = cljs.core.PersistentHashMap.fromArrays(inst_85201,inst_85202);
var inst_85204 = com.wsscode.pathom.trace.trace(inst_84943,inst_85203);
var inst_85205 = com.wsscode.pathom.core.add_error(inst_84943,inst_85058);
var inst_85206 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85207 = cljs.core.seq(inst_84906);
var state_85281__$1 = (function (){var statearr_85390 = state_85281;
(statearr_85390[(48)] = inst_85204);

(statearr_85390[(49)] = inst_85205);

(statearr_85390[(50)] = inst_85206);

return statearr_85390;
})();
if(inst_85207){
var statearr_85391_87553 = state_85281__$1;
(statearr_85391_87553[(1)] = (110));

} else {
var statearr_85392_87554 = state_85281__$1;
(statearr_85392_87554[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (23))){
var inst_84940 = (state_85281[(36)]);
var state_85281__$1 = state_85281;
var statearr_85393_87555 = state_85281__$1;
(statearr_85393_87555[(2)] = inst_84940);

(statearr_85393_87555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (47))){
var state_85281__$1 = state_85281;
var statearr_85394_87556 = state_85281__$1;
(statearr_85394_87556[(2)] = null);

(statearr_85394_87556[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (35))){
var state_85281__$1 = state_85281;
var statearr_85395_87557 = state_85281__$1;
(statearr_85395_87557[(2)] = false);

(statearr_85395_87557[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (82))){
var inst_85058 = (state_85281[(21)]);
var inst_85186 = com.wsscode.async.async_cljs.error_QMARK_(inst_85058);
var state_85281__$1 = state_85281;
if(inst_85186){
var statearr_85396_87558 = state_85281__$1;
(statearr_85396_87558[(1)] = (102));

} else {
var statearr_85397_87559 = state_85281__$1;
(statearr_85397_87559[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (76))){
var inst_85082 = (state_85281[(27)]);
var inst_85082__$1 = (state_85281[(2)]);
var state_85281__$1 = (function (){var statearr_85398 = state_85281;
(statearr_85398[(27)] = inst_85082__$1);

return statearr_85398;
})();
if(cljs.core.truth_(inst_85082__$1)){
var statearr_85399_87563 = state_85281__$1;
(statearr_85399_87563[(1)] = (77));

} else {
var statearr_85400_87564 = state_85281__$1;
(statearr_85400_87564[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (97))){
var inst_85110 = (state_85281[(23)]);
var state_85281__$1 = state_85281;
var statearr_85401_87566 = state_85281__$1;
(statearr_85401_87566[(2)] = inst_85110);

(statearr_85401_87566[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (19))){
var inst_84940 = (state_85281[(36)]);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_84940)){
var statearr_85402_87578 = state_85281__$1;
(statearr_85402_87578[(1)] = (22));

} else {
var statearr_85403_87579 = state_85281__$1;
(statearr_85403_87579[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (57))){
var inst_85020 = (state_85281[(30)]);
var inst_85029 = com.wsscode.async.async_cljs.promise__GT_chan(inst_85020);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(60),inst_85029);
} else {
if((state_val_85282 === (68))){
var inst_85058 = (state_85281[(21)]);
var inst_85065 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_85058);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_85065)){
var statearr_85404_87580 = state_85281__$1;
(statearr_85404_87580[(1)] = (70));

} else {
var statearr_85405_87581 = state_85281__$1;
(statearr_85405_87581[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (11))){
var state_85281__$1 = state_85281;
var statearr_85406_87582 = state_85281__$1;
(statearr_85406_87582[(2)] = false);

(statearr_85406_87582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (115))){
var inst_85265 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85407_87583 = state_85281__$1;
(statearr_85407_87583[(2)] = inst_85265);

(statearr_85407_87583[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (9))){
var inst_84933 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
if(cljs.core.truth_(inst_84933)){
var statearr_85408_87584 = state_85281__$1;
(statearr_85408_87584[(1)] = (13));

} else {
var statearr_85409_87585 = state_85281__$1;
(statearr_85409_87585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (5))){
var inst_85275 = cljs.core.async.close_BANG_(ch);
var state_85281__$1 = state_85281;
var statearr_85410_87586 = state_85281__$1;
(statearr_85410_87586[(2)] = inst_85275);

(statearr_85410_87586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (112))){
var inst_85058 = (state_85281[(21)]);
var inst_85206 = (state_85281[(50)]);
var inst_85216 = (state_85281[(2)]);
var inst_85217 = [out,inst_85058,inst_85216];
var inst_85218 = cljs.core.PersistentHashMap.fromArrays(inst_85206,inst_85217);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85281__$1,(109),ch,inst_85218);
} else {
if((state_val_85282 === (83))){
var inst_85269 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85411_87587 = state_85281__$1;
(statearr_85411_87587[(2)] = inst_85269);

(statearr_85411_87587[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (14))){
var inst_84917 = (state_85281[(11)]);
var state_85281__$1 = state_85281;
var statearr_85412_87588 = state_85281__$1;
(statearr_85412_87588[(2)] = inst_84917);

(statearr_85412_87588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (45))){
var inst_85011 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85413_87589 = state_85281__$1;
(statearr_85413_87589[(2)] = inst_85011);

(statearr_85413_87589[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (53))){
var inst_85020 = (state_85281[(30)]);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(56),inst_85020);
} else {
if((state_val_85282 === (78))){
var inst_84912 = (state_85281[(9)]);
var inst_85092 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_85093 = [inst_84912];
var inst_85094 = cljs.core.PersistentHashMap.fromArrays(inst_85092,inst_85093);
var inst_85095 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_85094);
var inst_85096 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85097 = cljs.core.PersistentHashMap.EMPTY;
var inst_85098 = [out,inst_85095,inst_85097];
var inst_85099 = cljs.core.PersistentHashMap.fromArrays(inst_85096,inst_85098);
var state_85281__$1 = state_85281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85281__$1,(80),ch,inst_85099);
} else {
if((state_val_85282 === (26))){
var inst_84948 = (state_85281[(38)]);
var inst_84943 = (state_85281[(7)]);
var inst_84913 = (state_85281[(26)]);
var inst_84945 = (state_85281[(34)]);
var inst_84941 = (state_85281[(33)]);
var inst_84891 = (state_85281[(14)]);
var inst_84905 = (state_85281[(25)]);
var inst_84944 = (state_85281[(32)]);
var inst_84912 = (state_85281[(9)]);
var inst_84892 = (state_85281[(15)]);
var inst_84906 = (state_85281[(42)]);
var inst_84939 = (state_85281[(35)]);
var inst_84898 = (state_85281[(18)]);
var inst_84897 = (state_85281[(17)]);
var inst_84896 = (state_85281[(16)]);
var inst_84889 = (state_85281[(13)]);
var inst_84940 = (state_85281[(36)]);
var inst_84942 = (state_85281[(37)]);
var inst_84899 = (state_85281[(12)]);
var inst_84938 = (state_85281[(31)]);
var inst_84966 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_84948,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_84967 = com.wsscode.pathom.trace.trace(inst_84943,inst_84966);
var inst_84968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84969 = [inst_84913,inst_84945,params];
var inst_84970 = (new cljs.core.PersistentVector(null,3,(5),inst_84968,inst_84969,null));
var inst_84971 = (function (){var input = inst_84941;
var first__84888 = inst_84891;
var step = inst_84905;
var entity = inst_84944;
var key_SINGLEQUOTE_ = inst_84912;
var seq__84887 = inst_84892;
var seq__84902 = inst_84906;
var cache_QMARK_ = inst_84939;
var out_left = inst_84898;
var failed_resolvers = inst_84897;
var G__84885 = inst_84896;
var vec__84886 = inst_84889;
var batch_QMARK_ = inst_84940;
var first__84903 = inst_84905;
var output = inst_84942;
var env__$2 = inst_84943;
var e = inst_84945;
var resolver_sym = inst_84913;
var waiting__$1 = inst_84899;
var trace_data = inst_84948;
var resolver = inst_84938;
var map__84911 = inst_84938;
var vec__84901 = inst_84896;
var tail = inst_84906;
var vec__84908 = inst_84905;
return (function (){
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___87601__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85444){
var state_val_85445 = (state_85444[(1)]);
if((state_val_85445 === (7))){
var inst_85420 = (state_85444[(7)]);
var state_85444__$1 = state_85444;
var statearr_85446_87603 = state_85444__$1;
(statearr_85446_87603[(2)] = inst_85420);

(statearr_85446_87603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (1))){
var state_85444__$1 = state_85444;
var statearr_85447_87604 = state_85444__$1;
(statearr_85447_87604[(2)] = null);

(statearr_85447_87604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (4))){
var inst_85414 = (state_85444[(2)]);
var state_85444__$1 = state_85444;
var statearr_85448_87605 = state_85444__$1;
(statearr_85448_87605[(2)] = inst_85414);

(statearr_85448_87605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (15))){
var inst_85442 = (state_85444[(2)]);
var state_85444__$1 = state_85444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85444__$1,inst_85442);
} else {
if((state_val_85445 === (13))){
var inst_85438 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_85444__$1 = state_85444;
var statearr_85449_87606 = state_85444__$1;
(statearr_85449_87606[(2)] = inst_85438);

(statearr_85449_87606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (6))){
var inst_85420 = (state_85444[(7)]);
var state_85444__$1 = state_85444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85444__$1,(9),inst_85420);
} else {
if((state_val_85445 === (3))){
var inst_85435 = (state_85444[(8)]);
var inst_85435__$1 = (state_85444[(2)]);
var inst_85436 = (inst_85435__$1 == null);
var state_85444__$1 = (function (){var statearr_85450 = state_85444;
(statearr_85450[(8)] = inst_85435__$1);

return statearr_85450;
})();
if(cljs.core.truth_(inst_85436)){
var statearr_85451_87611 = state_85444__$1;
(statearr_85451_87611[(1)] = (13));

} else {
var statearr_85452_87612 = state_85444__$1;
(statearr_85452_87612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (12))){
var inst_85432 = (state_85444[(2)]);
var _ = (function (){var statearr_85453 = state_85444;
(statearr_85453[(4)] = cljs.core.rest((state_85444[(4)])));

return statearr_85453;
})();
var state_85444__$1 = state_85444;
var statearr_85454_87613 = state_85444__$1;
(statearr_85454_87613[(2)] = inst_85432);

(statearr_85454_87613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (2))){
var inst_85420 = (state_85444[(7)]);
var _ = (function (){var statearr_85455 = state_85444;
(statearr_85455[(4)] = cljs.core.cons((5),(state_85444[(4)])));

return statearr_85455;
})();
var inst_85420__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_85421 = com.wsscode.async.async_cljs.chan_QMARK_(inst_85420__$1);
var state_85444__$1 = (function (){var statearr_85456 = state_85444;
(statearr_85456[(7)] = inst_85420__$1);

return statearr_85456;
})();
if(inst_85421){
var statearr_85457_87614 = state_85444__$1;
(statearr_85457_87614[(1)] = (6));

} else {
var statearr_85458_87615 = state_85444__$1;
(statearr_85458_87615[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (11))){
var inst_85430 = cljs.core.PersistentHashMap.EMPTY;
var state_85444__$1 = state_85444;
var statearr_85460_87616 = state_85444__$1;
(statearr_85460_87616[(2)] = inst_85430);

(statearr_85460_87616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (9))){
var inst_85424 = (state_85444[(2)]);
var state_85444__$1 = state_85444;
var statearr_85461_87617 = state_85444__$1;
(statearr_85461_87617[(2)] = inst_85424);

(statearr_85461_87617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (5))){
var _ = (function (){var statearr_85462 = state_85444;
(statearr_85462[(4)] = cljs.core.rest((state_85444[(4)])));

return statearr_85462;
})();
var state_85444__$1 = state_85444;
var ex85459 = (state_85444__$1[(2)]);
var statearr_85463_87618 = state_85444__$1;
(statearr_85463_87618[(5)] = ex85459);


var statearr_85464_87620 = state_85444__$1;
(statearr_85464_87620[(1)] = (4));

(statearr_85464_87620[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (14))){
var inst_85435 = (state_85444[(8)]);
var inst_85440 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_85435);
var state_85444__$1 = state_85444;
var statearr_85465_87623 = state_85444__$1;
(statearr_85465_87623[(2)] = inst_85440);

(statearr_85465_87623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (10))){
var inst_85427 = (state_85444[(9)]);
var state_85444__$1 = state_85444;
var statearr_85466_87625 = state_85444__$1;
(statearr_85466_87625[(2)] = inst_85427);

(statearr_85466_87625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85445 === (8))){
var inst_85427 = (state_85444[(9)]);
var inst_85427__$1 = (state_85444[(2)]);
var state_85444__$1 = (function (){var statearr_85467 = state_85444;
(statearr_85467[(9)] = inst_85427__$1);

return statearr_85467;
})();
if(cljs.core.truth_(inst_85427__$1)){
var statearr_85468_87626 = state_85444__$1;
(statearr_85468_87626[(1)] = (10));

} else {
var statearr_85469_87627 = state_85444__$1;
(statearr_85469_87627[(1)] = (11));

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
});
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0 = (function (){
var statearr_85470 = [null,null,null,null,null,null,null,null,null,null];
(statearr_85470[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__);

(statearr_85470[(1)] = (1));

return statearr_85470;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1 = (function (state_85444){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85444);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85471){var ex__50860__auto__ = e85471;
var statearr_85472_87643 = state_85444;
(statearr_85472_87643[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85444[(4)]))){
var statearr_85473_87644 = state_85444;
(statearr_85473_87644[(1)] = cljs.core.first((state_85444[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87645 = state_85444;
state_85444 = G__87645;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__ = function(state_85444){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1.call(this,state_85444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85474 = f__50893__auto__();
(statearr_85474[(6)] = c__50892__auto___87601__$1);

return statearr_85474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
});
})();
var inst_84972 = com.wsscode.pathom.core.cached_async(inst_84943,inst_84970,inst_84971);
var state_85281__$1 = (function (){var statearr_85475 = state_85281;
(statearr_85475[(51)] = inst_84967);

return statearr_85475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(29),inst_84972);
} else {
if((state_val_85282 === (16))){
var inst_84912 = (state_85281[(9)]);
var inst_84944 = (state_85281[(32)]);
var inst_84951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84952 = [inst_84912];
var inst_84953 = (new cljs.core.PersistentVector(null,1,(5),inst_84951,inst_84952,null));
var inst_84954 = cljs.core.select_keys(inst_84944,inst_84953);
var state_85281__$1 = state_85281;
var statearr_85476_87648 = state_85281__$1;
(statearr_85476_87648[(2)] = inst_84954);

(statearr_85476_87648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (81))){
var inst_85058 = (state_85281[(21)]);
var inst_84941 = (state_85281[(33)]);
var inst_84891 = (state_85281[(14)]);
var inst_84905 = (state_85281[(25)]);
var inst_84944 = (state_85281[(32)]);
var inst_84912 = (state_85281[(9)]);
var inst_85110 = (state_85281[(23)]);
var inst_84892 = (state_85281[(15)]);
var inst_84906 = (state_85281[(42)]);
var inst_84939 = (state_85281[(35)]);
var inst_84898 = (state_85281[(18)]);
var inst_84897 = (state_85281[(17)]);
var inst_84896 = (state_85281[(16)]);
var inst_84889 = (state_85281[(13)]);
var inst_84940 = (state_85281[(36)]);
var inst_84942 = (state_85281[(37)]);
var inst_84943 = (state_85281[(7)]);
var inst_84945 = (state_85281[(34)]);
var inst_84913 = (state_85281[(26)]);
var inst_84899 = (state_85281[(12)]);
var inst_84948 = (state_85281[(38)]);
var inst_84938 = (state_85281[(31)]);
var inst_85059 = (state_85281[(10)]);
var inst_85110__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_85058,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_85111 = (function (){var input = inst_84941;
var first__84888 = inst_84891;
var step = inst_84905;
var entity = inst_84944;
var key_SINGLEQUOTE_ = inst_84912;
var response = inst_85110__$1;
var seq__84887 = inst_84892;
var seq__84902 = inst_84906;
var cache_QMARK_ = inst_84939;
var out_left = inst_84898;
var failed_resolvers = inst_84897;
var G__84885 = inst_84896;
var vec__84886 = inst_84889;
var batch_QMARK_ = inst_84940;
var first__84903 = inst_84905;
var output = inst_84942;
var env__$2 = inst_84943;
var e = inst_84945;
var resolver_sym = inst_84913;
var waiting__$1 = inst_84899;
var trace_data = inst_84948;
var resolver = inst_84938;
var map__84911 = inst_84938;
var replan = inst_85059;
var vec__84901 = inst_84896;
var tail = inst_84906;
var vec__84908 = inst_84905;
return (function (p1__84874_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__84874_SHARP_], 0));
});
})();
var inst_85112 = com.wsscode.pathom.core.swap_entity_BANG_(inst_84943,inst_85111);
var inst_85114 = cljs.core.contains_QMARK_(inst_85110__$1,inst_84912);
var inst_85115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_85110__$1,inst_84912);
var inst_85116 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_85115) : com.wsscode.pathom.core.break_values.call(null,inst_85115));
var inst_85117 = cljs.core.not(inst_85116);
var inst_85118 = ((inst_85114) && (inst_85117));
var state_85281__$1 = (function (){var statearr_85477 = state_85281;
(statearr_85477[(23)] = inst_85110__$1);

(statearr_85477[(52)] = inst_85112);

return statearr_85477;
})();
if(cljs.core.truth_(inst_85118)){
var statearr_85478_87654 = state_85281__$1;
(statearr_85478_87654[(1)] = (84));

} else {
var statearr_85479_87655 = state_85281__$1;
(statearr_85479_87655[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (120))){
var inst_85259 = (state_85281[(2)]);
var inst_85260 = cljs.core.async.close_BANG_(ch);
var state_85281__$1 = (function (){var statearr_85480 = state_85281;
(statearr_85480[(53)] = inst_85259);

return statearr_85480;
})();
var statearr_85481_87658 = state_85281__$1;
(statearr_85481_87658[(2)] = inst_85260);

(statearr_85481_87658[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (79))){
var inst_85104 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85482_87659 = state_85281__$1;
(statearr_85482_87659[(2)] = inst_85104);

(statearr_85482_87659[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (38))){
var state_85281__$1 = state_85281;
var statearr_85485_87660 = state_85281__$1;
(statearr_85485_87660[(2)] = false);

(statearr_85485_87660[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (98))){
var inst_84906 = (state_85281[(42)]);
var inst_85169 = (state_85281[(2)]);
var inst_85170 = cljs.core.seq(inst_84906);
var state_85281__$1 = (function (){var statearr_85486 = state_85281;
(statearr_85486[(40)] = inst_85169);

return statearr_85486;
})();
if(inst_85170){
var statearr_85487_87663 = state_85281__$1;
(statearr_85487_87663[(1)] = (99));

} else {
var statearr_85488_87664 = state_85281__$1;
(statearr_85488_87664[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (87))){
var inst_84898 = (state_85281[(18)]);
var inst_85120 = (state_85281[(54)]);
var inst_84906 = (state_85281[(42)]);
var inst_84897 = (state_85281[(17)]);
var inst_84899 = (state_85281[(12)]);
var inst_85129 = (state_85281[(2)]);
var inst_85130 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_84898,inst_85120);
var tmp85483 = inst_84899;
var tmp85484 = inst_84897;
var inst_84896 = inst_84906;
var inst_84897__$1 = tmp85484;
var inst_84898__$1 = inst_85130;
var inst_84899__$1 = tmp85483;
var state_85281__$1 = (function (){var statearr_85491 = state_85281;
(statearr_85491[(55)] = inst_85129);

(statearr_85491[(16)] = inst_84896);

(statearr_85491[(17)] = inst_84897__$1);

(statearr_85491[(18)] = inst_84898__$1);

(statearr_85491[(12)] = inst_84899__$1);

return statearr_85491;
})();
var statearr_85492_87665 = state_85281__$1;
(statearr_85492_87665[(2)] = null);

(statearr_85492_87665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (30))){
var inst_84948 = (state_85281[(38)]);
var inst_84912 = (state_85281[(9)]);
var inst_84943 = (state_85281[(7)]);
var inst_84980 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_84948,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_84912], 0));
var inst_84981 = com.wsscode.pathom.trace.trace(inst_84943,inst_84980);
var inst_84983 = com.wsscode.pathom.parser.watch_pending_key(inst_84943,inst_84912);
var state_85281__$1 = (function (){var statearr_85493 = state_85281;
(statearr_85493[(56)] = inst_84981);

return statearr_85493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85281__$1,(33),inst_84983);
} else {
if((state_val_85282 === (73))){
var inst_84898 = (state_85281[(18)]);
var inst_85069 = (state_85281[(8)]);
var inst_84906 = (state_85281[(42)]);
var inst_84897 = (state_85281[(17)]);
var inst_84899 = (state_85281[(12)]);
var inst_85072 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_84898,inst_85069);
var tmp85489 = inst_84899;
var tmp85490 = inst_84897;
var inst_84896 = inst_84906;
var inst_84897__$1 = tmp85490;
var inst_84898__$1 = inst_85072;
var inst_84899__$1 = tmp85489;
var state_85281__$1 = (function (){var statearr_85494 = state_85281;
(statearr_85494[(16)] = inst_84896);

(statearr_85494[(17)] = inst_84897__$1);

(statearr_85494[(18)] = inst_84898__$1);

(statearr_85494[(12)] = inst_84899__$1);

return statearr_85494;
})();
var statearr_85495_87667 = state_85281__$1;
(statearr_85495_87667[(2)] = null);

(statearr_85495_87667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (96))){
var inst_85110 = (state_85281[(23)]);
var inst_84912 = (state_85281[(9)]);
var inst_85166 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_85110,inst_84912,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_85281__$1 = state_85281;
var statearr_85496_87668 = state_85281__$1;
(statearr_85496_87668[(2)] = inst_85166);

(statearr_85496_87668[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (10))){
var state_85281__$1 = state_85281;
var statearr_85497_87669 = state_85281__$1;
(statearr_85497_87669[(2)] = true);

(statearr_85497_87669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (18))){
var inst_84941 = (state_85281[(33)]);
var inst_84891 = (state_85281[(14)]);
var inst_84905 = (state_85281[(25)]);
var inst_84944 = (state_85281[(32)]);
var inst_84912 = (state_85281[(9)]);
var inst_85058 = (state_85281[(21)]);
var inst_84892 = (state_85281[(15)]);
var inst_84906 = (state_85281[(42)]);
var inst_84939 = (state_85281[(35)]);
var inst_84898 = (state_85281[(18)]);
var inst_84897 = (state_85281[(17)]);
var inst_84896 = (state_85281[(16)]);
var inst_84889 = (state_85281[(13)]);
var inst_84940 = (state_85281[(36)]);
var inst_84942 = (state_85281[(37)]);
var inst_84943 = (state_85281[(7)]);
var inst_84945 = (state_85281[(34)]);
var inst_84913 = (state_85281[(26)]);
var inst_84899 = (state_85281[(12)]);
var inst_84948 = (state_85281[(38)]);
var inst_84938 = (state_85281[(31)]);
var inst_85058__$1 = (state_85281[(2)]);
var inst_85059 = (function (){var input = inst_84941;
var first__84888 = inst_84891;
var step = inst_84905;
var entity = inst_84944;
var key_SINGLEQUOTE_ = inst_84912;
var response = inst_85058__$1;
var seq__84887 = inst_84892;
var seq__84902 = inst_84906;
var cache_QMARK_ = inst_84939;
var out_left = inst_84898;
var failed_resolvers = inst_84897;
var G__84885 = inst_84896;
var vec__84886 = inst_84889;
var batch_QMARK_ = inst_84940;
var first__84903 = inst_84905;
var output = inst_84942;
var env__$2 = inst_84943;
var e = inst_84945;
var resolver_sym = inst_84913;
var waiting__$1 = inst_84899;
var trace_data = inst_84948;
var resolver = inst_84938;
var map__84911 = inst_84938;
var vec__84901 = inst_84896;
var tail = inst_84906;
var vec__84908 = inst_84905;
return (function (value,error){
var c__50892__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85521){
var state_val_85522 = (state_85521[(1)]);
if((state_val_85522 === (1))){
var inst_85499 = (state_85521[(7)]);
var inst_85502 = (state_85521[(8)]);
var inst_85499__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_85500 = (function (){var failed_resolvers__$1 = inst_85499__$1;
return (function (p1__84873_SHARP_){
var x__4217__auto__ = ((function (){var or__4126__auto__ = p1__84873_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() * (2));
var y__4218__auto__ = max_resolver_weight;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
})();
var inst_85501 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_85500], 0));
var inst_85502__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_85499__$1);
var state_85521__$1 = (function (){var statearr_85523 = state_85521;
(statearr_85523[(7)] = inst_85499__$1);

(statearr_85523[(9)] = inst_85501);

(statearr_85523[(8)] = inst_85502__$1);

return statearr_85523;
})();
if(cljs.core.truth_(inst_85502__$1)){
var statearr_85524_87676 = state_85521__$1;
(statearr_85524_87676[(1)] = (2));

} else {
var statearr_85525_87677 = state_85521__$1;
(statearr_85525_87677[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85522 === (2))){
var inst_85502 = (state_85521[(8)]);
var inst_85508 = (state_85521[(10)]);
var inst_85507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85502,(0),null);
var inst_85508__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_85502,(1),null);
var inst_85509 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85510 = [out,inst_85508__$1,value];
var inst_85511 = cljs.core.PersistentHashMap.fromArrays(inst_85509,inst_85510);
var state_85521__$1 = (function (){var statearr_85526 = state_85521;
(statearr_85526[(11)] = inst_85507);

(statearr_85526[(10)] = inst_85508__$1);

return statearr_85526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85521__$1,(5),ch,inst_85511);
} else {
if((state_val_85522 === (3))){
var state_85521__$1 = state_85521;
var statearr_85527_87678 = state_85521__$1;
(statearr_85527_87678[(2)] = null);

(statearr_85527_87678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85522 === (4))){
var inst_85519 = (state_85521[(2)]);
var state_85521__$1 = state_85521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85521__$1,inst_85519);
} else {
if((state_val_85522 === (5))){
var inst_85507 = (state_85521[(11)]);
var inst_85499 = (state_85521[(7)]);
var inst_85508 = (state_85521[(10)]);
var inst_85513 = (state_85521[(2)]);
var inst_85514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_85515 = [inst_85507,inst_85499,inst_85508];
var inst_85516 = (new cljs.core.PersistentVector(null,3,(5),inst_85514,inst_85515,null));
var state_85521__$1 = (function (){var statearr_85528 = state_85521;
(statearr_85528[(12)] = inst_85513);

return statearr_85528;
})();
var statearr_85529_87679 = state_85521__$1;
(statearr_85529_87679[(2)] = inst_85516);

(statearr_85529_87679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0 = (function (){
var statearr_85530 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85530[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__);

(statearr_85530[(1)] = (1));

return statearr_85530;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1 = (function (state_85521){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85521);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85531){var ex__50860__auto__ = e85531;
var statearr_85532_87680 = state_85521;
(statearr_85532_87680[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85521[(4)]))){
var statearr_85533_87681 = state_85521;
(statearr_85533_87681[(1)] = cljs.core.first((state_85521[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87682 = state_85521;
state_85521 = G__87682;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__ = function(state_85521){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1.call(this,state_85521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85534 = f__50893__auto__();
(statearr_85534[(6)] = c__50892__auto____$1);

return statearr_85534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto____$1;
});
})();
var inst_85060 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_85058__$1);
var state_85281__$1 = (function (){var statearr_85535 = state_85281;
(statearr_85535[(21)] = inst_85058__$1);

(statearr_85535[(10)] = inst_85059);

return statearr_85535;
})();
if(cljs.core.truth_(inst_85060)){
var statearr_85536_87684 = state_85281__$1;
(statearr_85536_87684[(1)] = (67));

} else {
var statearr_85537_87685 = state_85281__$1;
(statearr_85537_87685[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (105))){
var inst_85191 = (state_85281[(28)]);
var inst_85191__$1 = (state_85281[(2)]);
var state_85281__$1 = (function (){var statearr_85538 = state_85281;
(statearr_85538[(28)] = inst_85191__$1);

return statearr_85538;
})();
if(cljs.core.truth_(inst_85191__$1)){
var statearr_85539_87690 = state_85281__$1;
(statearr_85539_87690[(1)] = (106));

} else {
var statearr_85540_87691 = state_85281__$1;
(statearr_85540_87691[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (52))){
var _ = (function (){var statearr_85543 = state_85281;
(statearr_85543[(4)] = cljs.core.rest((state_85281[(4)])));

return statearr_85543;
})();
var state_85281__$1 = state_85281;
var ex85498 = (state_85281__$1[(2)]);
var statearr_85544_87692 = state_85281__$1;
(statearr_85544_87692[(5)] = ex85498);


var statearr_85545_87693 = state_85281__$1;
(statearr_85545_87693[(1)] = (51));

(statearr_85545_87693[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (114))){
var state_85281__$1 = state_85281;
var statearr_85546_87694 = state_85281__$1;
(statearr_85546_87694[(2)] = null);

(statearr_85546_87694[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (67))){
var inst_84899 = (state_85281[(12)]);
var inst_84912 = (state_85281[(9)]);
var inst_84897 = (state_85281[(17)]);
var inst_84898 = (state_85281[(18)]);
var inst_85062 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_84899,inst_84912);
var tmp85541 = inst_84898;
var tmp85542 = inst_84897;
var inst_84896 = plan;
var inst_84897__$1 = tmp85542;
var inst_84898__$1 = tmp85541;
var inst_84899__$1 = inst_85062;
var state_85281__$1 = (function (){var statearr_85547 = state_85281;
(statearr_85547[(16)] = inst_84896);

(statearr_85547[(17)] = inst_84897__$1);

(statearr_85547[(18)] = inst_84898__$1);

(statearr_85547[(12)] = inst_84899__$1);

return statearr_85547;
})();
var statearr_85548_87696 = state_85281__$1;
(statearr_85548_87696[(2)] = null);

(statearr_85548_87696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (71))){
var inst_85058 = (state_85281[(21)]);
var inst_85108 = cljs.core.map_QMARK_(inst_85058);
var state_85281__$1 = state_85281;
if(inst_85108){
var statearr_85549_87697 = state_85281__$1;
(statearr_85549_87697[(1)] = (81));

} else {
var statearr_85550_87698 = state_85281__$1;
(statearr_85550_87698[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (42))){
var inst_85007 = (state_85281[(47)]);
var inst_85006 = (state_85281[(2)]);
var inst_85007__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_85006,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_85281__$1 = (function (){var statearr_85551 = state_85281;
(statearr_85551[(47)] = inst_85007__$1);

return statearr_85551;
})();
if(cljs.core.truth_(inst_85007__$1)){
var statearr_85552_87700 = state_85281__$1;
(statearr_85552_87700[(1)] = (43));

} else {
var statearr_85553_87701 = state_85281__$1;
(statearr_85553_87701[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (80))){
var inst_85101 = (state_85281[(2)]);
var inst_85102 = cljs.core.async.close_BANG_(ch);
var state_85281__$1 = (function (){var statearr_85554 = state_85281;
(statearr_85554[(57)] = inst_85101);

return statearr_85554;
})();
var statearr_85555_87702 = state_85281__$1;
(statearr_85555_87702[(2)] = inst_85102);

(statearr_85555_87702[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (37))){
var state_85281__$1 = state_85281;
var statearr_85556_87703 = state_85281__$1;
(statearr_85556_87703[(2)] = true);

(statearr_85556_87703[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (63))){
var inst_85037 = (state_85281[(2)]);
var state_85281__$1 = state_85281;
var statearr_85557_87704 = state_85281__$1;
(statearr_85557_87704[(2)] = inst_85037);

(statearr_85557_87704[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (94))){
var inst_85110 = (state_85281[(23)]);
var inst_84912 = (state_85281[(9)]);
var inst_85160 = (state_85281[(2)]);
var inst_85161 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85163 = cljs.core.contains_QMARK_(inst_85110,inst_84912);
var inst_85164 = (!(inst_85163));
var state_85281__$1 = (function (){var statearr_85558 = state_85281;
(statearr_85558[(58)] = inst_85160);

(statearr_85558[(20)] = inst_85161);

return statearr_85558;
})();
if(inst_85164){
var statearr_85559_87709 = state_85281__$1;
(statearr_85559_87709[(1)] = (96));

} else {
var statearr_85560_87710 = state_85281__$1;
(statearr_85560_87710[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (8))){
var state_85281__$1 = state_85281;
var statearr_85561_87711 = state_85281__$1;
(statearr_85561_87711[(2)] = false);

(statearr_85561_87711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (49))){
var inst_84943 = (state_85281[(7)]);
var inst_84945 = (state_85281[(34)]);
var inst_85020 = (state_85281[(30)]);
var _ = (function (){var statearr_85562 = state_85281;
(statearr_85562[(4)] = cljs.core.cons((52),(state_85281[(4)])));

return statearr_85562;
})();
var inst_85020__$1 = com.wsscode.pathom.connect.call_resolver(inst_84943,inst_84945);
var inst_85021 = com.wsscode.async.async_cljs.chan_QMARK_(inst_85020__$1);
var state_85281__$1 = (function (){var statearr_85563 = state_85281;
(statearr_85563[(30)] = inst_85020__$1);

return statearr_85563;
})();
if(inst_85021){
var statearr_85564_87712 = state_85281__$1;
(statearr_85564_87712[(1)] = (53));

} else {
var statearr_85565_87713 = state_85281__$1;
(statearr_85565_87713[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85282 === (84))){
var inst_84942 = (state_85281[(37)]);
var inst_84913 = (state_85281[(26)]);
var inst_84943 = (state_85281[(7)]);
var inst_85120 = (state_85281[(54)]);
var inst_85110 = (state_85281[(23)]);
var inst_85120__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_84942);
var inst_85121 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_85122 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_84913];
var inst_85123 = cljs.core.PersistentHashMap.fromArrays(inst_85121,inst_85122);
var inst_85124 = com.wsscode.pathom.trace.trace(inst_84943,inst_85123);
var inst_85125 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_85126 = [inst_85120__$1,inst_85110];
var inst_85127 = cljs.core.PersistentHashMap.fromArrays(inst_85125,inst_85126);
var state_85281__$1 = (function (){var statearr_85566 = state_85281;
(statearr_85566[(54)] = inst_85120__$1);

(statearr_85566[(59)] = inst_85124);

return statearr_85566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85281__$1,(87),ch,inst_85127);
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
});
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0 = (function (){
var statearr_85567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85567[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__);

(statearr_85567[(1)] = (1));

return statearr_85567;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1 = (function (state_85281){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85281);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85568){var ex__50860__auto__ = e85568;
var statearr_85569_87714 = state_85281;
(statearr_85569_87714[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85281[(4)]))){
var statearr_85570_87715 = state_85281;
(statearr_85570_87715[(1)] = cljs.core.first((state_85281[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87716 = state_85281;
state_85281 = G__87716;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__ = function(state_85281){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1.call(this,state_85281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85571 = f__50893__auto__();
(statearr_85571[(6)] = c__50892__auto___87406);

return statearr_85571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__85572){
var map__85573 = p__85572;
var map__85573__$1 = (((((!((map__85573 == null))))?(((((map__85573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85573):map__85573);
var env = map__85573__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85573__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__85575){
var map__85576 = p__85575;
var map__85576__$1 = (((((!((map__85576 == null))))?(((((map__85576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85576):map__85576);
var env = map__85576__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85576__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var temp__5733__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5733__auto__)){
var attr = temp__5733__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(indexes),attr)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,com.wsscode.pathom.core.ident_value(env)]);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Helper to return a resolver map
 */
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__85578,resolve){
var map__85579 = p__85578;
var map__85579__$1 = (((((!((map__85579 == null))))?(((((map__85579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85579):map__85579);
var options = map__85579__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85579__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = options;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__85581){
return cljs.core.map_QMARK_(G__85581);
})], null),(function (G__85581){
return cljs.core.map_QMARK_(G__85581);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),options)));
} else {
return and__4115__auto__;
}
})())){
cljs.spec.alpha.explain(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__85582){
return cljs.core.map_QMARK_(G__85582);
})], null),(function (G__85582){
return cljs.core.map_QMARK_(G__85582);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),options);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid options on resolver of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain","explain",484226146),cljs.spec.alpha.explain_data(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__85583){
return cljs.core.map_QMARK_(G__85583);
})], null),(function (G__85583){
return cljs.core.map_QMARK_(G__85583);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),options)], null));
} else {
}

var G__85584 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__85584) : transform.call(null,G__85584));
} else {
return G__85584;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","defresolver-args","com.wsscode.pathom.connect/defresolver-args",1636311031),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
com.wsscode.pathom.connect.as_entry_QMARK_ = (function com$wsscode$pathom$connect$as_entry_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.first(x));
});
com.wsscode.pathom.connect.extract_destructure_map_keys_as_keywords = (function com$wsscode$pathom$connect$extract_destructure_map_keys_as_keywords(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.as_entry_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__85587){
var vec__85588 = p__85587;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85588,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85588,(1),null);
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keys",cljs.core.name(k))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__85586_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = cljs.core.namespace(p1__85586_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(k);
}
})(),cljs.core.name(p1__85586_SHARP_));
}),val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null);
}
}))),m);
});
com.wsscode.pathom.connect.params__GT_resolver_options = (function com$wsscode$pathom$connect$params__GT_resolver_options(p__85591){
var map__85592 = p__85591;
var map__85592__$1 = (((((!((map__85592 == null))))?(((((map__85592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85592):map__85592);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85592__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85592__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85592__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85592__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__85594 = cljs.core.last(arglist);
var input_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85594,(0),null);
var input_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85594,(1),null);
var last_expr = cljs.core.last(body);
var G__85597 = options;
var G__85597__$1 = ((((cljs.core.map_QMARK_(last_expr)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85597,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(last_expr) : com.wsscode.pathom.connect.data__GT_shape.call(null,last_expr))):G__85597);
var G__85597__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85597__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","docstring","com.wsscode.pathom.connect/docstring",-1622119529),docstring):G__85597__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),input_type)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(options))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85597__$2,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),com.wsscode.pathom.connect.extract_destructure_map_keys_as_keywords(input_arg));
} else {
return G__85597__$2;
}
});
/**
 * Ensures arglist contains two elements.
 */
com.wsscode.pathom.connect.normalize_arglist = (function com$wsscode$pathom$connect$normalize_arglist(arglist){
var arglist__$1 = arglist;
while(true){
if((cljs.core.count(arglist__$1) < (2))){
var G__87735 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),arglist__$1);
arglist__$1 = G__87735;
continue;
} else {
return arglist__$1;
}
break;
}
});
com.wsscode.pathom.connect.full_symbol = (function com$wsscode$pathom$connect$full_symbol(sym,ns){
if(cljs.core.truth_(cljs.core.namespace(sym))){
return sym;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(sym));
}
});
com.wsscode.pathom.connect.attr_alias_name = (function com$wsscode$pathom$connect$attr_alias_name(from,to){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),(1)))),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),(1))))].join(''));
});
/**
 * Create a resolver that will convert property `from` to a property `to` with
 *   the same value. This only creates the alias in one direction
 */
com.wsscode.pathom.connect.alias_resolver = (function com$wsscode$pathom$connect$alias_resolver(from,to){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),com.wsscode.pathom.connect.attr_alias_name(from,to),new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),true,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from)]);
})], null);
});
/**
 * Like alias-resolver, but returns a vector containing the alias in both directions.
 */
com.wsscode.pathom.connect.alias_resolver2 = (function com$wsscode$pathom$connect$alias_resolver2(from,to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.alias_resolver(from,to),com.wsscode.pathom.connect.alias_resolver(to,from)], null);
});
/**
 * Create a simple resolver that always return `value` for `attribute`.
 */
com.wsscode.pathom.connect.constantly_resolver = (function com$wsscode$pathom$connect$constantly_resolver(var_args){
var G__85599 = arguments.length;
switch (G__85599) {
case 2:
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2 = (function (attribute,value){
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"value","value",305978217),value], null));
}));

(com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__85600){
var map__85601 = p__85600;
var map__85601__$1 = (((((!((map__85601 == null))))?(((((map__85601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85601):map__85601);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85601__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85601__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85601__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sym__$1 = (function (){var or__4126__auto__ = sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute),(1)))),"-constant"].join(''));
}
})();
return com.wsscode.pathom.connect.resolver(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute], null)], null),(function (_,___$1){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,value]);
}));
}));

(com.wsscode.pathom.connect.constantly_resolver.cljs$lang$maxFixedArity = 2);

/**
 * Apply fn `f` to input `from` and spits the result with the name `to`.
 * 
 *   `f` receives a single argument, which is the input value from `from`.
 */
com.wsscode.pathom.connect.single_attr_resolver = (function com$wsscode$pathom$connect$single_attr_resolver(from,to,f){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.attr_alias_name(from,to)),"-single-attr-transform"].join(''));
return com.wsscode.pathom.connect.resolver(sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null)], null),(function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__85603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__85603) : f.call(null,G__85603));
})()]);
}));
});
/**
 * Similar single-attr-resolver, but `f` receives two arguments, `env` and the input.
 */
com.wsscode.pathom.connect.single_attr_resolver2 = (function com$wsscode$pathom$connect$single_attr_resolver2(from,to,f){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.attr_alias_name(from,to)),"-single-attr-transform"].join(''));
return com.wsscode.pathom.connect.resolver(sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null)], null),(function (env,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__85604 = env;
var G__85605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__85604,G__85605) : f.call(null,G__85604,G__85605));
})()]);
}));
});
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__85606,mutate){
var map__85607 = p__85606;
var map__85607__$1 = (((((!((map__85607 == null))))?(((((map__85607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85607):map__85607);
var options = map__85607__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85607__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__85609 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__85609) : transform.call(null,G__85609));
} else {
return G__85609;
}
});
/**
 * Reader for idents on connect, this reader will make a join to the ident making the
 *   context have that ident key and value. For example the ident [:user/id 123] will make
 *   a join to a context {:user/id 123}. This reader will continue if connect doesn't have
 *   a path to respond to that ident.
 * 
 *   This reader also supports params to add more context besides the entity value. To use
 *   that send the `:pathom/context` param with the join, as in:
 * 
 *   [{([:user/id 123] {:pathom/context {:user/foo "bar"}})
 *  [:user/name]}]
 * 
 *   In the previous case, the context will be the merge between the identity and the
 *   context, {:user/id 123 :user/foo "bar"} in this case.
 */
com.wsscode.pathom.connect.ident_reader = (function com$wsscode$pathom$connect$ident_reader(env){
var temp__5733__auto__ = com.wsscode.pathom.connect.indexed_ident(env);
if(cljs.core.truth_(temp__5733__auto__)){
var ent = temp__5733__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ent,extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent__$1),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like ident-reader, but ident key doesn't have to be in the index, this will respond
 *   to any ident join. Also supports extra context with :pathom/context param.
 */
com.wsscode.pathom.connect.open_ident_reader = (function com$wsscode$pathom$connect$open_ident_reader(env){
var temp__5733__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5733__auto__)){
var key = temp__5733__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Return a resolver that will dispatch to single-fn when the input is a single value, and multi-fn when
 *   multiple inputs are provided (on batch cases).
 * 
 *   Many times the implementation for the single can be the same as the multi, getting the first item, and
 *   if you provide only one function (the multi-fn) we will setup the single one automatically running
 *   the multi and returning the first result.
 */
com.wsscode.pathom.connect.batch_resolver = (function com$wsscode$pathom$connect$batch_resolver(var_args){
var G__85611 = arguments.length;
switch (G__85611) {
case 1:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1 = (function (multi_fn){
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((function (env,input){
var res__75232__auto__ = (function (){var G__85612 = env;
var G__85613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__85612,G__85613) : multi_fn.call(null,G__85612,G__85613));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__75232__auto__)){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85628){
var state_val_85629 = (state_85628[(1)]);
if((state_val_85629 === (1))){
var state_85628__$1 = state_85628;
var statearr_85630_87742 = state_85628__$1;
(statearr_85630_87742[(2)] = null);

(statearr_85630_87742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85629 === (2))){
var _ = (function (){var statearr_85631 = state_85628;
(statearr_85631[(4)] = cljs.core.cons((5),(state_85628[(4)])));

return statearr_85631;
})();
var state_85628__$1 = state_85628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85628__$1,(6),res__75232__auto__);
} else {
if((state_val_85629 === (3))){
var inst_85626 = (state_85628[(2)]);
var state_85628__$1 = state_85628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85628__$1,inst_85626);
} else {
if((state_val_85629 === (4))){
var inst_85614 = (state_85628[(2)]);
var state_85628__$1 = state_85628;
var statearr_85633_87743 = state_85628__$1;
(statearr_85633_87743[(2)] = inst_85614);

(statearr_85633_87743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85629 === (5))){
var _ = (function (){var statearr_85634 = state_85628;
(statearr_85634[(4)] = cljs.core.rest((state_85628[(4)])));

return statearr_85634;
})();
var state_85628__$1 = state_85628;
var ex85632 = (state_85628__$1[(2)]);
var statearr_85635_87744 = state_85628__$1;
(statearr_85635_87744[(5)] = ex85632);


var statearr_85636_87745 = state_85628__$1;
(statearr_85636_87745[(1)] = (4));

(statearr_85636_87745[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85629 === (6))){
var inst_85621 = (state_85628[(2)]);
var inst_85622 = com.wsscode.async.async_cljs.throw_err(inst_85621);
var inst_85623 = cljs.core.first(inst_85622);
var _ = (function (){var statearr_85637 = state_85628;
(statearr_85637[(4)] = cljs.core.rest((state_85628[(4)])));

return statearr_85637;
})();
var state_85628__$1 = state_85628;
var statearr_85638_87746 = state_85628__$1;
(statearr_85638_87746[(2)] = inst_85623);

(statearr_85638_87746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$state_machine__50857__auto____0 = (function (){
var statearr_85639 = [null,null,null,null,null,null,null];
(statearr_85639[(0)] = com$wsscode$pathom$connect$state_machine__50857__auto__);

(statearr_85639[(1)] = (1));

return statearr_85639;
});
var com$wsscode$pathom$connect$state_machine__50857__auto____1 = (function (state_85628){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85628);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85640){var ex__50860__auto__ = e85640;
var statearr_85641_87750 = state_85628;
(statearr_85641_87750[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85628[(4)]))){
var statearr_85642_87751 = state_85628;
(statearr_85642_87751[(1)] = cljs.core.first((state_85628[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87753 = state_85628;
state_85628 = G__87753;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__50857__auto__ = function(state_85628){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__50857__auto____1.call(this,state_85628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__50857__auto____0;
com$wsscode$pathom$connect$state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__50857__auto____1;
return com$wsscode$pathom$connect$state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85643 = f__50893__auto__();
(statearr_85643[(6)] = c__50892__auto__);

return statearr_85643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
} else {
var res = res__75232__auto__;
return cljs.core.first(res);
}
}),multi_fn);
}));

(com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2 = (function (single_fn,multi_fn){
return (function (env,input){
if(cljs.core.sequential_QMARK_(input)){
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(env,input) : multi_fn.call(null,env,input));
} else {
return (single_fn.cljs$core$IFn$_invoke$arity$2 ? single_fn.cljs$core$IFn$_invoke$arity$2(env,input) : single_fn.call(null,env,input));
}
});
}));

(com.wsscode.pathom.connect.batch_resolver.cljs$lang$maxFixedArity = 2);

/**
 * Given a resolver that implements the many case, return one that also supports the
 *   single case by running the many and taking the first result out.
 */
com.wsscode.pathom.connect.transform_batch_resolver = (function com$wsscode$pathom$connect$transform_batch_resolver(resolver){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver);
});
/**
 * Given a resolver that implements the single item case, wrap it implementing a batch
 *   resolver that will make a batch by running many in parallel, using `n` as the concurrency
 *   number.
 */
com.wsscode.pathom.connect.transform_auto_batch = (function com$wsscode$pathom$connect$transform_auto_batch(n){
return (function (p__85644){
var map__85645 = p__85644;
var map__85645__$1 = (((((!((map__85645 == null))))?(((((map__85645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85645):map__85645);
var resolver = map__85645__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85645__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1((function (env,inputs){
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85657){
var state_val_85658 = (state_85657[(1)]);
if((state_val_85658 === (1))){
var inst_85647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_85648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_85649 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(inst_85647,inputs);
var inst_85650 = (function (){var from_chan = inst_85647;
var out_chan = inst_85648;
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__50892__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85671){
var state_val_85672 = (state_85671[(1)]);
if((state_val_85672 === (1))){
var inst_85659 = (state_85671[(7)]);
var inst_85659__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_85660 = com.wsscode.async.async_cljs.chan_QMARK_(inst_85659__$1);
var state_85671__$1 = (function (){var statearr_85673 = state_85671;
(statearr_85673[(7)] = inst_85659__$1);

return statearr_85673;
})();
if(inst_85660){
var statearr_85674_87756 = state_85671__$1;
(statearr_85674_87756[(1)] = (2));

} else {
var statearr_85675_87757 = state_85671__$1;
(statearr_85675_87757[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85672 === (2))){
var inst_85659 = (state_85671[(7)]);
var state_85671__$1 = state_85671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85671__$1,(5),inst_85659);
} else {
if((state_val_85672 === (3))){
var inst_85659 = (state_85671[(7)]);
var state_85671__$1 = state_85671;
var statearr_85676_87758 = state_85671__$1;
(statearr_85676_87758[(2)] = inst_85659);

(statearr_85676_87758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85672 === (4))){
var inst_85666 = (state_85671[(2)]);
var state_85671__$1 = state_85671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_85671__$1,(6),res_ch,inst_85666);
} else {
if((state_val_85672 === (5))){
var inst_85663 = (state_85671[(2)]);
var state_85671__$1 = state_85671;
var statearr_85677_87759 = state_85671__$1;
(statearr_85677_87759[(2)] = inst_85663);

(statearr_85677_87759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85672 === (6))){
var inst_85668 = (state_85671[(2)]);
var inst_85669 = cljs.core.async.close_BANG_(res_ch);
var state_85671__$1 = (function (){var statearr_85678 = state_85671;
(statearr_85678[(8)] = inst_85668);

return statearr_85678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_85671__$1,inst_85669);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto____0 = (function (){
var statearr_85679 = [null,null,null,null,null,null,null,null,null];
(statearr_85679[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto__);

(statearr_85679[(1)] = (1));

return statearr_85679;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto____1 = (function (state_85671){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85671);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85680){var ex__50860__auto__ = e85680;
var statearr_85681_87760 = state_85671;
(statearr_85681_87760[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85671[(4)]))){
var statearr_85682_87761 = state_85671;
(statearr_85682_87761[(1)] = cljs.core.first((state_85671[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87762 = state_85671;
state_85671 = G__87762;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto__ = function(state_85671){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto____1.call(this,state_85671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85683 = f__50893__auto__();
(statearr_85683[(6)] = c__50892__auto____$1);

return statearr_85683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto____$1;
});
})();
var inst_85651 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_85648,inst_85650,inst_85647);
var inst_85652 = cljs.core.PersistentVector.EMPTY;
var inst_85653 = cljs.core.async.into(inst_85652,inst_85648);
var state_85657__$1 = (function (){var statearr_85684 = state_85657;
(statearr_85684[(7)] = inst_85649);

(statearr_85684[(8)] = inst_85651);

return statearr_85684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85657__$1,(2),inst_85653);
} else {
if((state_val_85658 === (2))){
var inst_85655 = (state_85657[(2)]);
var state_85657__$1 = state_85657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85657__$1,inst_85655);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto____0 = (function (){
var statearr_85685 = [null,null,null,null,null,null,null,null,null];
(statearr_85685[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto__);

(statearr_85685[(1)] = (1));

return statearr_85685;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto____1 = (function (state_85657){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85657);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85686){var ex__50860__auto__ = e85686;
var statearr_85687_87763 = state_85657;
(statearr_85687_87763[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85657[(4)]))){
var statearr_85688_87764 = state_85657;
(statearr_85688_87764[(1)] = cljs.core.first((state_85657[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87765 = state_85657;
state_85657 = G__87765;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto__ = function(state_85657){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto____1.call(this,state_85657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85689 = f__50893__auto__();
(statearr_85689[(6)] = c__50892__auto__);

return statearr_85689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
}))], 0));
});
});
com.wsscode.pathom.connect.all_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_async_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.async_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_parallel_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
/**
 * Helper method that extract key from ast symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for mutation dispatch.
 */
com.wsscode.pathom.connect.mutation_dispatch = (function com$wsscode$pathom$connect$mutation_dispatch(env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});
/**
 * This dispatch method will fire the mutation by looking at the ::pc/mutate
 *   key in the mutation map details.
 */
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__85690,entity){
var map__85691 = p__85690;
var map__85691__$1 = (((((!((map__85691 == null))))?(((((map__85691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85691):map__85691);
var env = map__85691__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85691__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__85693 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__85693__$1 = (((((!((map__85693 == null))))?(((((map__85693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85693):map__85693);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85693__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__85695,sym_SINGLEQUOTE_,p__85696){
var map__85697 = p__85695;
var map__85697__$1 = (((((!((map__85697 == null))))?(((((map__85697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85697):map__85697);
var env = map__85697__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85697__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85697__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85697__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85697__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85697__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__85698 = p__85696;
var map__85698__$1 = (((((!((map__85698 == null))))?(((((map__85698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85698):map__85698);
var input = map__85698__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85698__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5733__auto__)){
var map__85701 = temp__5733__auto__;
var map__85701__$1 = (((((!((map__85701 == null))))?(((((map__85701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85701):map__85701);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85701__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var res = (function (){var G__85703 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__85704 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__85703,G__85704) : mutate_dispatch.call(null,G__85703,G__85704));
})();
var res__$1 = (function (){var G__85705 = res;
if(cljs.core.truth_((function (){var and__4115__auto__ = context;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__85705,context], 0));
} else {
return G__85705;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = query;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(res__$1);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(res__$1,mutation_join_globals),com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(res__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast))], 0));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
}
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__85706,sym_SINGLEQUOTE_,p__85707){
var map__85708 = p__85706;
var map__85708__$1 = (((((!((map__85708 == null))))?(((((map__85708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85708):map__85708);
var env = map__85708__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85708__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85708__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85708__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85708__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85708__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__85709 = p__85707;
var map__85709__$1 = (((((!((map__85709 == null))))?(((((map__85709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85709):map__85709);
var input = map__85709__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85709__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5733__auto__)){
var map__85712 = temp__5733__auto__;
var map__85712__$1 = (((((!((map__85712 == null))))?(((((map__85712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85712):map__85712);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85712__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___87787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_85779){
var state_val_85780 = (state_85779[(1)]);
if((state_val_85780 === (7))){
var inst_85721 = (state_85779[(7)]);
var inst_85728 = com.wsscode.async.async_cljs.promise_QMARK_(inst_85721);
var state_85779__$1 = state_85779;
if(cljs.core.truth_(inst_85728)){
var statearr_85781_87788 = state_85779__$1;
(statearr_85781_87788[(1)] = (10));

} else {
var statearr_85782_87789 = state_85779__$1;
(statearr_85782_87789[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (20))){
var inst_85742 = (state_85779[(8)]);
var inst_85751 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_85742,context], 0));
var state_85779__$1 = state_85779;
var statearr_85783_87790 = state_85779__$1;
(statearr_85783_87790[(2)] = inst_85751);

(statearr_85783_87790[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (27))){
var inst_85773 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_85779__$1 = state_85779;
var statearr_85784_87791 = state_85779__$1;
(statearr_85784_87791[(2)] = inst_85773);

(statearr_85784_87791[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (1))){
var state_85779__$1 = state_85779;
var statearr_85785_87792 = state_85779__$1;
(statearr_85785_87792[(2)] = null);

(statearr_85785_87792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (24))){
var inst_85754 = (state_85779[(9)]);
var inst_85765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_85754,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var state_85779__$1 = state_85779;
var statearr_85786_87793 = state_85779__$1;
(statearr_85786_87793[(2)] = inst_85765);

(statearr_85786_87793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (4))){
var inst_85714 = (state_85779[(2)]);
var state_85779__$1 = state_85779;
var statearr_85787_87794 = state_85779__$1;
(statearr_85787_87794[(2)] = inst_85714);

(statearr_85787_87794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (15))){
var state_85779__$1 = state_85779;
var statearr_85788_87795 = state_85779__$1;
(statearr_85788_87795[(2)] = null);

(statearr_85788_87795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (21))){
var inst_85742 = (state_85779[(8)]);
var state_85779__$1 = state_85779;
var statearr_85789_87801 = state_85779__$1;
(statearr_85789_87801[(2)] = inst_85742);

(statearr_85789_87801[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (13))){
var inst_85732 = (state_85779[(2)]);
var inst_85733 = com.wsscode.async.async_cljs.consumer_pair(inst_85732);
var state_85779__$1 = state_85779;
var statearr_85790_87802 = state_85779__$1;
(statearr_85790_87802[(2)] = inst_85733);

(statearr_85790_87802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (22))){
var inst_85754 = (state_85779[(2)]);
var state_85779__$1 = (function (){var statearr_85791 = state_85779;
(statearr_85791[(9)] = inst_85754);

return statearr_85791;
})();
if(cljs.core.truth_(query)){
var statearr_85792_87806 = state_85779__$1;
(statearr_85792_87806[(1)] = (23));

} else {
var statearr_85793_87807 = state_85779__$1;
(statearr_85793_87807[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (29))){
var inst_85777 = (state_85779[(2)]);
var state_85779__$1 = state_85779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85779__$1,inst_85777);
} else {
if((state_val_85780 === (6))){
var inst_85721 = (state_85779[(7)]);
var state_85779__$1 = state_85779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85779__$1,(9),inst_85721);
} else {
if((state_val_85780 === (28))){
var inst_85770 = (state_85779[(10)]);
var inst_85775 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_85770);
var state_85779__$1 = state_85779;
var statearr_85794_87808 = state_85779__$1;
(statearr_85794_87808[(2)] = inst_85775);

(statearr_85794_87808[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (25))){
var inst_85767 = (state_85779[(2)]);
var _ = (function (){var statearr_85795 = state_85779;
(statearr_85795[(4)] = cljs.core.rest((state_85779[(4)])));

return statearr_85795;
})();
var state_85779__$1 = state_85779;
var statearr_85796_87809 = state_85779__$1;
(statearr_85796_87809[(2)] = inst_85767);

(statearr_85796_87809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (17))){
var inst_85742 = (state_85779[(8)]);
var inst_85746 = cljs.core.map_QMARK_(inst_85742);
var state_85779__$1 = state_85779;
var statearr_85797_87810 = state_85779__$1;
(statearr_85797_87810[(2)] = inst_85746);

(statearr_85797_87810[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (3))){
var inst_85770 = (state_85779[(10)]);
var inst_85770__$1 = (state_85779[(2)]);
var inst_85771 = (inst_85770__$1 == null);
var state_85779__$1 = (function (){var statearr_85798 = state_85779;
(statearr_85798[(10)] = inst_85770__$1);

return statearr_85798;
})();
if(cljs.core.truth_(inst_85771)){
var statearr_85799_87811 = state_85779__$1;
(statearr_85799_87811[(1)] = (27));

} else {
var statearr_85800_87812 = state_85779__$1;
(statearr_85800_87812[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (12))){
var inst_85740 = (state_85779[(2)]);
var state_85779__$1 = state_85779;
var statearr_85801_87813 = state_85779__$1;
(statearr_85801_87813[(2)] = inst_85740);

(statearr_85801_87813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (2))){
var inst_85721 = (state_85779[(7)]);
var _ = (function (){var statearr_85802 = state_85779;
(statearr_85802[(4)] = cljs.core.cons((5),(state_85779[(4)])));

return statearr_85802;
})();
var inst_85720 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_85721__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_85720,input) : mutate_dispatch.call(null,inst_85720,input));
var inst_85722 = com.wsscode.async.async_cljs.chan_QMARK_(inst_85721__$1);
var state_85779__$1 = (function (){var statearr_85803 = state_85779;
(statearr_85803[(7)] = inst_85721__$1);

return statearr_85803;
})();
if(inst_85722){
var statearr_85804_87814 = state_85779__$1;
(statearr_85804_87814[(1)] = (6));

} else {
var statearr_85805_87815 = state_85779__$1;
(statearr_85805_87815[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (23))){
var inst_85754 = (state_85779[(9)]);
var inst_85756 = cljs.core.select_keys(inst_85754,mutation_join_globals);
var inst_85757 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_85754);
var inst_85758 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast);
var inst_85759 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_85757,inst_85758);
var state_85779__$1 = (function (){var statearr_85806 = state_85779;
(statearr_85806[(11)] = inst_85756);

return statearr_85806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85779__$1,(26),inst_85759);
} else {
if((state_val_85780 === (19))){
var inst_85749 = (state_85779[(2)]);
var state_85779__$1 = state_85779;
if(cljs.core.truth_(inst_85749)){
var statearr_85807_87816 = state_85779__$1;
(statearr_85807_87816[(1)] = (20));

} else {
var statearr_85808_87817 = state_85779__$1;
(statearr_85808_87817[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (11))){
var state_85779__$1 = state_85779;
var statearr_85810_87818 = state_85779__$1;
(statearr_85810_87818[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (9))){
var inst_85725 = (state_85779[(2)]);
var inst_85726 = com.wsscode.async.async_cljs.throw_err(inst_85725);
var state_85779__$1 = state_85779;
var statearr_85812_87819 = state_85779__$1;
(statearr_85812_87819[(2)] = inst_85726);

(statearr_85812_87819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (5))){
var _ = (function (){var statearr_85813 = state_85779;
(statearr_85813[(4)] = cljs.core.rest((state_85779[(4)])));

return statearr_85813;
})();
var state_85779__$1 = state_85779;
var ex85809 = (state_85779__$1[(2)]);
var statearr_85814_87820 = state_85779__$1;
(statearr_85814_87820[(5)] = ex85809);


var statearr_85815_87821 = state_85779__$1;
(statearr_85815_87821[(1)] = (4));

(statearr_85815_87821[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (14))){
var inst_85721 = (state_85779[(7)]);
var state_85779__$1 = state_85779;
var statearr_85816_87822 = state_85779__$1;
(statearr_85816_87822[(2)] = inst_85721);

(statearr_85816_87822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (26))){
var inst_85756 = (state_85779[(11)]);
var inst_85761 = (state_85779[(2)]);
var inst_85762 = com.wsscode.async.async_cljs.throw_err(inst_85761);
var inst_85763 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_85756,inst_85762], 0));
var state_85779__$1 = state_85779;
var statearr_85817_87823 = state_85779__$1;
(statearr_85817_87823[(2)] = inst_85763);

(statearr_85817_87823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (16))){
var inst_85738 = (state_85779[(2)]);
var state_85779__$1 = state_85779;
var statearr_85818_87824 = state_85779__$1;
(statearr_85818_87824[(2)] = inst_85738);

(statearr_85818_87824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (10))){
var inst_85721 = (state_85779[(7)]);
var inst_85730 = com.wsscode.async.async_cljs.promise__GT_chan(inst_85721);
var state_85779__$1 = state_85779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85779__$1,(13),inst_85730);
} else {
if((state_val_85780 === (18))){
var inst_85744 = (state_85779[(12)]);
var state_85779__$1 = state_85779;
var statearr_85819_87825 = state_85779__$1;
(statearr_85819_87825[(2)] = inst_85744);

(statearr_85819_87825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85780 === (8))){
var inst_85744 = (state_85779[(12)]);
var inst_85742 = (state_85779[(2)]);
var inst_85744__$1 = context;
var state_85779__$1 = (function (){var statearr_85820 = state_85779;
(statearr_85820[(8)] = inst_85742);

(statearr_85820[(12)] = inst_85744__$1);

return statearr_85820;
})();
if(cljs.core.truth_(inst_85744__$1)){
var statearr_85821_87826 = state_85779__$1;
(statearr_85821_87826[(1)] = (17));

} else {
var statearr_85822_87827 = state_85779__$1;
(statearr_85822_87827[(1)] = (18));

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
});
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto____0 = (function (){
var statearr_85823 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85823[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto__);

(statearr_85823[(1)] = (1));

return statearr_85823;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto____1 = (function (state_85779){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_85779);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e85824){var ex__50860__auto__ = e85824;
var statearr_85825_87828 = state_85779;
(statearr_85825_87828[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_85779[(4)]))){
var statearr_85826_87829 = state_85779;
(statearr_85826_87829[(1)] = cljs.core.first((state_85779[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87830 = state_85779;
state_85779 = G__87830;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto__ = function(state_85779){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto____1.call(this,state_85779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_85827 = f__50893__auto__();
(statearr_85827[(6)] = c__50892__auto___87787);

return statearr_85827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Given multi-method mm and index atom idx, returns a function with the given signature:
 * [sym config f], the function will be add to the mm and will be indexed using config as
 * the config params for connect/add.
 */
com.wsscode.pathom.connect.resolver_factory = (function com$wsscode$pathom$connect$resolver_factory(mm,idx){
return (function com$wsscode$pathom$connect$resolver_factory_$_resolver_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.mutation_factory = (function com$wsscode$pathom$connect$mutation_factory(mm,idx){
return (function com$wsscode$pathom$connect$mutation_factory_$_mutation_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add_mutation,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.cached = (function com$wsscode$pathom$connect$cached(cache,x,f){
if(cljs.core.truth_(cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(cache),x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),x);
} else {
var res = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,x,res);

return res;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__85832,ctx){
var map__85833 = p__85832;
var map__85833__$1 = (((((!((map__85833 == null))))?(((((map__85833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85833):map__85833);
var index = map__85833__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85833__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85833__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,(function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
var attrs = (function (){var G__85835 = index;
var G__85836 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__85835,G__85836) : com.wsscode.pathom.connect.discover_attrs.call(null,G__85835,G__85836));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
}),null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__85829_SHARP_,p2__85828_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__85828_SHARP_) - (p1__85829_SHARP_ + (1))),p2__85828_SHARP_);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():(function (){var G__85837 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null));
var G__85838 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY);
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(G__85837,G__85838) : com.wsscode.pathom.connect.merge_io.call(null,G__85837,G__85838));
})());
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__85833,map__85833__$1,index,index_io,cache){
return (function (p__85843){
var vec__85844 = p__85843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85844,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85844,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__85833,map__85833__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__87834 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__85833,map__85833__$1,index,index_io,cache){
return (function (p1__85830_SHARP_,p2__85831_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__85830_SHARP_,p2__85831_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__85833,map__85833__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__87835 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__87834;
collected = G__87835;
continue;
} else {
return collected;
}
break;
}
}));
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__85847){
var map__85848 = p__85847;
var map__85848__$1 = (((((!((map__85848 == null))))?(((((map__85848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85848):map__85848);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85848__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
com.wsscode.pathom.connect.valid_eql_key_QMARK_ = (function com$wsscode$pathom$connect$valid_eql_key_QMARK_(k){
return (((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)) || (edn_query_language.core.ident_QMARK_(k)));
});
com.wsscode.pathom.connect.optimize_empty_joins = (function com$wsscode$pathom$connect$optimize_empty_joins(x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (y){
if(((cljs.core.map_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.vals(y)),cljs.core.PersistentVector.EMPTY)))){
return cljs.core.ffirst(y);
} else {
return y;
}
}),x);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__85850_SHARP_){
if(cljs.core.map_QMARK_(p1__85850_SHARP_)){
return cljs.core.ffirst(p1__85850_SHARP_);
} else {
return p1__85850_SHARP_;
}
})),cljs.core.reduce_kv((function (out,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.data__GT_shape.call(null,v))]):((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return com.wsscode.pathom.core.merge_queries(q,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom.connect.data__GT_shape.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq(shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
}),cljs.core.PersistentVector.EMPTY,data)));
} else {
return null;
}
});
/**
 * Sorts output list to match input list.
 * 
 *   When doing batch requests you must return a vector in the same order respective to
 *   the order of inputs. Many times when calling an external API sending a list of ids
 *   the returned list doesn't always garantee input order. To fix these cases this
 *   function can restore the order. Example:
 * 
 *    (fn batch-resolver [env inputs]
 *      ; inputs => [{:my.entity/id 1} {:my.entity/id 2}]
 *      (batch-restore-sort {::inputs inputs
 *                           ::key    :my.entity/id}
 *        [{:my.entity/id    2
 *          :my.entity/color :my.entity.color/green}
 *         {:my.entity/id    1
 *          :my.entity/color :my.entity.color/purple}])
 *      ; => [{:my.entity/id    1
 *      ;      :my.entity/color :my.entity.color/purple}
 *      ;     {:my.entity/id    2
 *      ;      :my.entity/color :my.entity.color/green}]
 * 
 *   You can provide a ::batch-default function to fill in for missing items on the output. The
 *   default function will take the respective input and must return a map containing
 *   any data you want to add, usually some nil keys to declare that value should not
 *   require further lookup.
 */
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__85852,items){
var map__85853 = p__85852;
var map__85853__$1 = (((((!((map__85853 == null))))?(((((map__85853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85853):map__85853);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85853__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85853__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85853__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4126__auto__ = batch_default;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (p1__85851_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__85851_SHARP_,key)]);
});
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (input){
var or__4126__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
})),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (p__85855,_){
var map__85856 = p__85855;
var map__85856__$1 = (((((!((map__85856 == null))))?(((((map__85856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85856):map__85856);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85856__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__85858 = env;
var G__85858__$1 = (((G__85858 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__85858));
if((G__85858__$1 == null)){
return null;
} else {
return cljs.core.deref(G__85858__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__85861 = env;
var G__85861__$1 = (((G__85861 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__85861));
var G__85861__$2 = (((G__85861__$1 == null))?null:cljs.core.deref(G__85861__$1));
if((G__85861__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,(function (p1__85860_SHARP_,p2__85859_SHARP_){
return cljs.core.compare(p2__85859_SHARP_,p1__85860_SHARP_);
}),G__85861__$2);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.resolver_weights_resolver,com.wsscode.pathom.connect.resolver_weights_sorted_resolver], null);
com.wsscode.pathom.connect.connect_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.indexes_resolver,com.wsscode.pathom.connect.resolver_weights_resolvers], null);
/**
 * This plugin facilitates the connect setup in a parser. It works by wrapping the parser,
 *   it setups the connect resolver and mutation dispatch using the embedded dispatchers (check resolver
 *   map format in the book for more details). It also sets up the resolver weights for load
 *   balacing calculation. Here are the available options to configure the plugin:
 * 
 *   `::pc/indexes` - provide an index atom to be used, otherwise the plugin will create one
 *   `::pc/register` - a resolver, mutation or sequence of resolvers/mutations to register in
 *   the index
 *   `::pc/pool-chan` - override the thread pool, use `nil` to disable thread pool feature (not recommended)
 * 
 *   This plugin also looks for the key `::pc/register` in the other plugins used in the
 *   parser configuration, this enable plugins to provide resolvers/mutations to be available
 *   in your connect system.
 * 
 *   By default this plugin will also register resolvers to provide the index itself, if
 *   you for some reason need to hide it you can dissoc the `::pc/register` from the output
 *   and they will not be available, but consider that doing so you lose the ability to
 *   have introspection tools like Pathom Viz and Fulcro Inspect.
 */
com.wsscode.pathom.connect.connect_plugin = (function com$wsscode$pathom$connect$connect_plugin(var_args){
var G__85863 = arguments.length;
switch (G__85863) {
case 0:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__85864){
var map__85865 = p__85864;
var map__85865__$1 = (((((!((map__85865 == null))))?(((((map__85865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85865):map__85865);
var env = map__85865__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85865__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4126__auto__ = indexes;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),(function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__85867){
var map__85868 = p__85867;
var map__85868__$1 = (((((!((map__85868 == null))))?(((((map__85868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85868):map__85868);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85868__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return (function (env__$1,tx){
var G__85870 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__85871 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__85870,G__85871) : parser.call(null,G__85870,G__85871));
});
}),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
}));

(com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=com.wsscode.pathom.connect.js.map
