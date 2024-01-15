goog.provide('com.fulcrologic.fulcro.algorithms.transit');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit.transit_handlers !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.transit.transit_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentArrayMap.EMPTY], null));
}
/**
 * Returns a map that can be used for the :handlers key of a transit reader, taken from the current type handler registry.
 */
com.fulcrologic.fulcro.algorithms.transit.read_handlers = (function com$fulcrologic$fulcro$algorithms$transit$read_handlers(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.transit.transit_handlers),new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns a map that can be used for the :handlers key of a transit writer, taken from the current type handler registry.
 */
com.fulcrologic.fulcro.algorithms.transit.write_handlers = (function com$fulcrologic$fulcro$algorithms$transit$write_handlers(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.transit.transit_handlers),new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Create a transit writer.
 * 
 *   - `out`: An acceptable output for transit writers.
 *   - `opts`: (optional) options to pass to `cognitect.transit/writer` (such as handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.writer = (function com$fulcrologic$fulcro$algorithms$transit$writer(var_args){
var G__49191 = arguments.length;
switch (G__49191) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge,com.fulcrologic.fulcro.algorithms.transit.write_handlers()));
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$lang$maxFixedArity = 1);

/**
 * Create a transit reader.
 * 
 *   - `opts`: (optional) options to pass to `cognitect.transit/reader` (such as data type handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.reader = (function com$fulcrologic$fulcro$algorithms$transit$reader(var_args){
var G__49197 = arguments.length;
switch (G__49197) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge,com.fulcrologic.fulcro.algorithms.transit.read_handlers()));
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$lang$maxFixedArity = 1);

/**
 * Checks to see that the value in question can be serialized by the default fulcro writer by actually attempting to
 *   serialize it.  This is *not* an efficient check.
 */
com.fulcrologic.fulcro.algorithms.transit.serializable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$transit$serializable_QMARK_(v){
try{com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0().write(v);

return true;
}catch (e49203){var e = e49203;
return false;
}});
/**
 * Use transit to encode clj data as a string. Useful for encoding initial app state from server-side rendering.
 * 
 *   - `data`: Arbitrary data
 *   - `opts`: (optional) Options to send when creating a `writer`. Always preserves metadata. Adding :metadata? true/false
 *  will turn on/off metadata support. Defaults to on.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str = (function com$fulcrologic$fulcro$algorithms$transit$transit_clj__GT_str(var_args){
var G__49205 = arguments.length;
switch (G__49205) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var write_meta = cognitect.transit.write_meta;
var opts__$1 = (function (){var G__49206 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050));
if(cljs.core.truth_((function (){var and__4115__auto__ = write_meta;
if(cljs.core.truth_(and__4115__auto__)){
return (!(new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050).cljs$core$IFn$_invoke$arity$1(opts) === false));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49206,new cljs.core.Keyword(null,"transform","transform",1381301764),write_meta);
} else {
return G__49206;
}
})();
return cognitect.transit.write(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(opts__$1),data);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Use transit to decode a string into a clj data structure. Useful for decoding initial app state
 * when starting from a server-side rendering.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj = (function com$fulcrologic$fulcro$algorithms$transit$transit_str__GT_clj(var_args){
var G__49214 = arguments.length;
switch (G__49214) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (str){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(str,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (str,opts){
return cognitect.transit.read(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(opts),str);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.transit","type-handler","com.fulcrologic.fulcro.algorithms.transit/type-handler",753102134,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.string_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49320){
return cljs.core.map_QMARK_(G__49320);
}),(function (G__49320){
return cljs.core.contains_QMARK_(G__49320,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__49320){
return cljs.core.contains_QMARK_(G__49320,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__49320){
return ((cljs.core.map_QMARK_(G__49320)) && (cljs.core.contains_QMARK_(G__49320,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__49320,new cljs.core.Keyword(null,"writer","writer",-277568236))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),null,null,null));


/**
 * Creates a map that can be registered with Fulcro's transit support.
 * 
 * * `type` is a `deftype` or `defrecord` that represents your runtime data that you want to support in Transit
 * * `tag` is a string that uniquely identifies your type on the wire
 * * `type->ground` is a function that can take an instance of your `type` and turn it into something transit already
 * knows how to handle.
 * * `ground->type` is a function that can take whatever `type->ground` generated and turn it back into your `type`.
 * 
 * This function returns a map that contains a :reader and :writer key. The value at these keys is suitable for merging
 * at the `:handlers` key of a reader or writer's option map.
 * 
 * See also `install-type-handler!` for adding this to Fulcro's registry of type support.
 * @type {function(*, !string, !Function, !Function): !cljs.core.IMap}
 */
com.fulcrologic.fulcro.algorithms.transit.type_handler = (function com$fulcrologic$fulcro$algorithms$transit$type_handler(type,tag,type__GT_ground,ground__GT_type){
var map__49321 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.string_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49322){
return cljs.core.map_QMARK_(G__49322);
}),(function (G__49322){
return cljs.core.contains_QMARK_(G__49322,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__49322){
return cljs.core.contains_QMARK_(G__49322,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__49322){
return ((cljs.core.map_QMARK_(G__49322)) && (cljs.core.contains_QMARK_(G__49322,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__49322,new cljs.core.Keyword(null,"writer","writer",-277568236))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),null,null,null);
var map__49321__$1 = (((((!((map__49321 == null))))?(((((map__49321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49321):map__49321);
var argspec49316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49321__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec49317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49321__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec49316)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:110 type-handler's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec49316,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,tag,type__GT_ground,ground__GT_type], null));
} else {
}

var f49319 = (function (type__$1,tag__$1,type__GT_ground__$1,ground__GT_type__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writer","writer",-277568236),cljs.core.PersistentArrayMap.createAsIfByAssoc([type__$1,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (_){
return tag__$1;
}),(function (t){
return (type__GT_ground__$1.cljs$core$IFn$_invoke$arity$1 ? type__GT_ground__$1.cljs$core$IFn$_invoke$arity$1(t) : type__GT_ground__$1.call(null,t));
}),(function (r){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
}))]),new cljs.core.Keyword(null,"reader","reader",169660853),cljs.core.PersistentArrayMap.createAsIfByAssoc([tag__$1,cognitect.transit.read_handler(ground__GT_type__$1)])], null);
});
var ret49318 = f49319(type,tag,type__GT_ground,ground__GT_type);
if(cljs.core.truth_(retspec49317)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:110 type-handler's",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec49317,ret49318);
} else {
}

return ret49318;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.transit","install-type-handler!","com.fulcrologic.fulcro.algorithms.transit/install-type-handler!",-1612135230,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49328){
return cljs.core.map_QMARK_(G__49328);
}),(function (G__49328){
return cljs.core.contains_QMARK_(G__49328,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__49328){
return cljs.core.contains_QMARK_(G__49328,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__49328){
return ((cljs.core.map_QMARK_(G__49328)) && (cljs.core.contains_QMARK_(G__49328,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__49328,new cljs.core.Keyword(null,"writer","writer",-277568236))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));


/**
 * Install a type handler (generated by `type-handler`) into the global Fulcro transit support registry. This registry
 * can be used by any Fulcro-aware facility that needs to use transit for any standard purpose where app-specific type
 * support is desired.
 * @type {function(!cljs.core.IMap): *}
 */
com.fulcrologic.fulcro.algorithms.transit.install_type_handler_BANG_ = (function com$fulcrologic$fulcro$algorithms$transit$install_type_handler_BANG_(t){
var map__49329 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49330){
return cljs.core.map_QMARK_(G__49330);
}),(function (G__49330){
return cljs.core.contains_QMARK_(G__49330,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__49330){
return cljs.core.contains_QMARK_(G__49330,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__49330){
return ((cljs.core.map_QMARK_(G__49330)) && (cljs.core.contains_QMARK_(G__49330,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__49330,new cljs.core.Keyword(null,"writer","writer",-277568236))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null);
var map__49329__$1 = (((((!((map__49329 == null))))?(((((map__49329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49329):map__49329);
var retspec49325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49329__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec49324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49329__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec49324)){
com.fulcrologic.guardrails.core.run_check(true,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:131 install-type-handler!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),argspec49324,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
} else {
}

var f49327 = (function (t__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.transit.transit_handlers,(function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.merge,new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(t__$1)),new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.merge,new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(t__$1));
}));

return null;
});
var ret49326 = f49327(t);
if(cljs.core.truth_(retspec49325)){
com.fulcrologic.guardrails.core.run_check(false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:131 install-type-handler!'s",new cljs.core.Keyword(null,"emit-spec?","emit-spec?",-837774868),true,new cljs.core.Keyword(null,"log-level","log-level",862121670),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false], null),retspec49325,ret49326);
} else {
}

return ret49326;
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit.install_tempid_handler !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.transit.install_tempid_handler = com.fulcrologic.fulcro.algorithms.transit.install_type_handler_BANG_(com.fulcrologic.fulcro.algorithms.transit.type_handler(com.fulcrologic.fulcro.algorithms.tempid.TempId,com.fulcrologic.fulcro.algorithms.tempid.tag,(function (tid){
return tid.id;
}),(function (uuid){
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1(uuid);
})));
}

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.transit.js.map
