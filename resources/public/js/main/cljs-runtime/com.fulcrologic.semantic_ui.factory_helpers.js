goog.provide('com.fulcrologic.semantic_ui.factory_helpers');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Creates a function that can make elements of the given class.
 */
com.fulcrologic.semantic_ui.factory_helpers.factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$factory_apply(class$){
return (function() { 
var G__58645__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,class$,cljs.core.clj__GT_js(props),children);
};
var G__58645 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__58646__i = 0, G__58646__a = new Array(arguments.length -  1);
while (G__58646__i < G__58646__a.length) {G__58646__a[G__58646__i] = arguments[G__58646__i + 1]; ++G__58646__i;}
  children = new cljs.core.IndexedSeq(G__58646__a,0,null);
} 
return G__58645__delegate.call(this,props,children);};
G__58645.cljs$lang$maxFixedArity = 1;
G__58645.cljs$lang$applyTo = (function (arglist__58647){
var props = cljs.core.first(arglist__58647);
var children = cljs.core.rest(arglist__58647);
return G__58645__delegate(props,children);
});
G__58645.cljs$core$IFn$_invoke$arity$variadic = G__58645__delegate;
return G__58645;
})()
;
});
/**
 * Returns a factory that wraps the given class as an input. Requires that the target item support `:value` as a prop.
 */
com.fulcrologic.semantic_ui.factory_helpers.wrapped_factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$wrapped_factory_apply(class$){
var factory = com.fulcrologic.fulcro.dom.wrap_form_element(class$);
return (function() { 
var G__58648__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,cljs.core.clj__GT_js(props),children);
};
var G__58648 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__58649__i = 0, G__58649__a = new Array(arguments.length -  1);
while (G__58649__i < G__58649__a.length) {G__58649__a[G__58649__i] = arguments[G__58649__i + 1]; ++G__58649__i;}
  children = new cljs.core.IndexedSeq(G__58649__a,0,null);
} 
return G__58648__delegate.call(this,props,children);};
G__58648.cljs$lang$maxFixedArity = 1;
G__58648.cljs$lang$applyTo = (function (arglist__58650){
var props = cljs.core.first(arglist__58650);
var children = cljs.core.rest(arglist__58650);
return G__58648__delegate(props,children);
});
G__58648.cljs$core$IFn$_invoke$arity$variadic = G__58648__delegate;
return G__58648;
})()
;
});

//# sourceMappingURL=com.fulcrologic.semantic_ui.factory_helpers.js.map
