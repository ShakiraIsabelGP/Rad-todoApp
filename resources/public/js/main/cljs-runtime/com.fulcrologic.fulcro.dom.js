goog.provide('com.fulcrologic.fulcro.dom');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__57998){
var vec__57999 = p__57998;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57999,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57999,(1),null);
var pair = vec__57999;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__58002){
var vec__58003 = p__58002;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58003,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58003,(1),null);
var pair = vec__58003;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__58006){
var vec__58007 = p__58006;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58007,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58007,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__58010 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58010,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__58010;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__58012 = arguments.length;
switch (G__58012) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__58013 = component.refs;
var G__58013__$1 = (((G__58013 == null))?null:goog.object.get(G__58013,name));
if((G__58013__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__58013__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5733__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
var G__58014 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__58015 = (function (){var G__58016 = r;
if((G__58016 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__58016);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__58015) : ref.call(null,G__58015));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__58014) : factory.call(null,G__58014));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__58021 = arguments.length;
switch (G__58021) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___58653 = arguments.length;
var i__4737__auto___58654 = (0);
while(true){
if((i__4737__auto___58654 < len__4736__auto___58653)){
args_arr__4757__auto__.push((arguments[i__4737__auto___58654]));

var G__58655 = (i__4737__auto___58654 + (1));
i__4737__auto___58654 = G__58655;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq58018){
var G__58019 = cljs.core.first(seq58018);
var seq58018__$1 = cljs.core.next(seq58018);
var G__58020 = cljs.core.first(seq58018__$1);
var seq58018__$2 = cljs.core.next(seq58018__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58019,G__58020,seq58018__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4115__auto__ = tag;
if(cljs.core.truth_(and__4115__auto__)){
var G__58022 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58022) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__58022));
} else {
return and__4115__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x58024_58656 = ctor.prototype;
(x58024_58656.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x58024_58656.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__58023_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__58023_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4115__auto__ = state_value;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = element_value;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-2127264050,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x58024_58656.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__58657__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__58657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58658__i = 0, G__58658__a = new Array(arguments.length -  0);
while (G__58658__i < G__58658__a.length) {G__58658__a[G__58658__i] = arguments[G__58658__i + 0]; ++G__58658__i;}
  args = new cljs.core.IndexedSeq(G__58658__a,0,null);
} 
return G__58657__delegate.call(this,args);};
G__58657.cljs$lang$maxFixedArity = 0;
G__58657.cljs$lang$applyTo = (function (arglist__58659){
var args = cljs.core.seq(arglist__58659);
return G__58657__delegate(args);
});
G__58657.cljs$core$IFn$_invoke$arity$variadic = G__58657__delegate;
return G__58657;
})()
;
return (function() { 
var G__58660__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__58660 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__58661__i = 0, G__58661__a = new Array(arguments.length -  1);
while (G__58661__i < G__58661__a.length) {G__58661__a[G__58661__i] = arguments[G__58661__i + 1]; ++G__58661__i;}
  children = new cljs.core.IndexedSeq(G__58661__a,0,null);
} 
return G__58660__delegate.call(this,props,children);};
G__58660.cljs$lang$maxFixedArity = 1;
G__58660.cljs$lang$applyTo = (function (arglist__58662){
var props = cljs.core.first(arglist__58662);
var children = cljs.core.rest(arglist__58662);
return G__58660__delegate(props,children);
});
G__58660.cljs$core$IFn$_invoke$arity$variadic = G__58660__delegate;
return G__58660;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__58025 = tag;
switch (G__58025) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58025)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__58027 = arguments.length;
switch (G__58027) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58028 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58029 = cljs.core.seq(vec__58028);
var first__58030 = cljs.core.first(seq__58029);
var seq__58029__$1 = cljs.core.next(seq__58029);
var head = first__58030;
var tail = seq__58029__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__58031 = (function (){var G__58032 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58032,tail);

return G__58032;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58031) : f.call(null,G__58031));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__58033 = (function (){var G__58034 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58034,args);

return G__58034;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58033) : f.call(null,G__58033));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58035 = (function (){var G__58036 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58036,tail);

return G__58036;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58035) : f.call(null,G__58035));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58037 = (function (){var G__58038 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58038,tail);

return G__58038;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58037) : f.call(null,G__58037));
} else {
var G__58039 = (function (){var G__58040 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58040,args);

return G__58040;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58039) : f.call(null,G__58039));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__58042 = arguments.length;
switch (G__58042) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58043 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58044 = cljs.core.seq(vec__58043);
var first__58045 = cljs.core.first(seq__58044);
var seq__58044__$1 = cljs.core.next(seq__58044);
var head = first__58045;
var tail = seq__58044__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58046 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58046,tail);

return G__58046;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58047 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58047,args);

return G__58047;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58048 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58048,tail);

return G__58048;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58049 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58049,tail);

return G__58049;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58050 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58050,args);

return G__58050;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58666 = arguments.length;
var i__4737__auto___58667 = (0);
while(true){
if((i__4737__auto___58667 < len__4736__auto___58666)){
args__4742__auto__.push((arguments[i__4737__auto___58667]));

var G__58668 = (i__4737__auto___58667 + (1));
i__4737__auto___58667 = G__58668;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58052 = conformed_args__56786__auto__;
var map__58052__$1 = (((((!((map__58052 == null))))?(((((map__58052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58052):map__58052);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq58051){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58051));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58669 = arguments.length;
var i__4737__auto___58670 = (0);
while(true){
if((i__4737__auto___58670 < len__4736__auto___58669)){
args__4742__auto__.push((arguments[i__4737__auto___58670]));

var G__58671 = (i__4737__auto___58670 + (1));
i__4737__auto___58670 = G__58671;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58055 = conformed_args__56786__auto__;
var map__58055__$1 = (((((!((map__58055 == null))))?(((((map__58055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58055):map__58055);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq58054){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58054));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58672 = arguments.length;
var i__4737__auto___58673 = (0);
while(true){
if((i__4737__auto___58673 < len__4736__auto___58672)){
args__4742__auto__.push((arguments[i__4737__auto___58673]));

var G__58674 = (i__4737__auto___58673 + (1));
i__4737__auto___58673 = G__58674;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58058 = conformed_args__56786__auto__;
var map__58058__$1 = (((((!((map__58058 == null))))?(((((map__58058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58058):map__58058);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq58057){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58057));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58675 = arguments.length;
var i__4737__auto___58676 = (0);
while(true){
if((i__4737__auto___58676 < len__4736__auto___58675)){
args__4742__auto__.push((arguments[i__4737__auto___58676]));

var G__58677 = (i__4737__auto___58676 + (1));
i__4737__auto___58676 = G__58677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58061 = conformed_args__56786__auto__;
var map__58061__$1 = (((((!((map__58061 == null))))?(((((map__58061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58061):map__58061);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq58060){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58060));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58678 = arguments.length;
var i__4737__auto___58679 = (0);
while(true){
if((i__4737__auto___58679 < len__4736__auto___58678)){
args__4742__auto__.push((arguments[i__4737__auto___58679]));

var G__58680 = (i__4737__auto___58679 + (1));
i__4737__auto___58679 = G__58680;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58064 = conformed_args__56786__auto__;
var map__58064__$1 = (((((!((map__58064 == null))))?(((((map__58064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58064):map__58064);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq58063){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58063));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58681 = arguments.length;
var i__4737__auto___58682 = (0);
while(true){
if((i__4737__auto___58682 < len__4736__auto___58681)){
args__4742__auto__.push((arguments[i__4737__auto___58682]));

var G__58683 = (i__4737__auto___58682 + (1));
i__4737__auto___58682 = G__58683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58067 = conformed_args__56786__auto__;
var map__58067__$1 = (((((!((map__58067 == null))))?(((((map__58067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58067):map__58067);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq58066){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58684 = arguments.length;
var i__4737__auto___58685 = (0);
while(true){
if((i__4737__auto___58685 < len__4736__auto___58684)){
args__4742__auto__.push((arguments[i__4737__auto___58685]));

var G__58686 = (i__4737__auto___58685 + (1));
i__4737__auto___58685 = G__58686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58070 = conformed_args__56786__auto__;
var map__58070__$1 = (((((!((map__58070 == null))))?(((((map__58070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58070):map__58070);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq58069){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58069));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58687 = arguments.length;
var i__4737__auto___58688 = (0);
while(true){
if((i__4737__auto___58688 < len__4736__auto___58687)){
args__4742__auto__.push((arguments[i__4737__auto___58688]));

var G__58689 = (i__4737__auto___58688 + (1));
i__4737__auto___58688 = G__58689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58073 = conformed_args__56786__auto__;
var map__58073__$1 = (((((!((map__58073 == null))))?(((((map__58073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58073):map__58073);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58072){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58690 = arguments.length;
var i__4737__auto___58691 = (0);
while(true){
if((i__4737__auto___58691 < len__4736__auto___58690)){
args__4742__auto__.push((arguments[i__4737__auto___58691]));

var G__58692 = (i__4737__auto___58691 + (1));
i__4737__auto___58691 = G__58692;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58076 = conformed_args__56786__auto__;
var map__58076__$1 = (((((!((map__58076 == null))))?(((((map__58076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58076):map__58076);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq58075){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58693 = arguments.length;
var i__4737__auto___58694 = (0);
while(true){
if((i__4737__auto___58694 < len__4736__auto___58693)){
args__4742__auto__.push((arguments[i__4737__auto___58694]));

var G__58695 = (i__4737__auto___58694 + (1));
i__4737__auto___58694 = G__58695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58079 = conformed_args__56786__auto__;
var map__58079__$1 = (((((!((map__58079 == null))))?(((((map__58079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58079):map__58079);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq58078){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58078));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58696 = arguments.length;
var i__4737__auto___58697 = (0);
while(true){
if((i__4737__auto___58697 < len__4736__auto___58696)){
args__4742__auto__.push((arguments[i__4737__auto___58697]));

var G__58698 = (i__4737__auto___58697 + (1));
i__4737__auto___58697 = G__58698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58082 = conformed_args__56786__auto__;
var map__58082__$1 = (((((!((map__58082 == null))))?(((((map__58082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58082):map__58082);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq58081){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58081));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58699 = arguments.length;
var i__4737__auto___58700 = (0);
while(true){
if((i__4737__auto___58700 < len__4736__auto___58699)){
args__4742__auto__.push((arguments[i__4737__auto___58700]));

var G__58701 = (i__4737__auto___58700 + (1));
i__4737__auto___58700 = G__58701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58085 = conformed_args__56786__auto__;
var map__58085__$1 = (((((!((map__58085 == null))))?(((((map__58085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58085):map__58085);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq58084){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58084));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58702 = arguments.length;
var i__4737__auto___58703 = (0);
while(true){
if((i__4737__auto___58703 < len__4736__auto___58702)){
args__4742__auto__.push((arguments[i__4737__auto___58703]));

var G__58704 = (i__4737__auto___58703 + (1));
i__4737__auto___58703 = G__58704;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58088 = conformed_args__56786__auto__;
var map__58088__$1 = (((((!((map__58088 == null))))?(((((map__58088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58088):map__58088);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq58087){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58705 = arguments.length;
var i__4737__auto___58706 = (0);
while(true){
if((i__4737__auto___58706 < len__4736__auto___58705)){
args__4742__auto__.push((arguments[i__4737__auto___58706]));

var G__58707 = (i__4737__auto___58706 + (1));
i__4737__auto___58706 = G__58707;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58091 = conformed_args__56786__auto__;
var map__58091__$1 = (((((!((map__58091 == null))))?(((((map__58091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58091):map__58091);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq58090){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58090));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58708 = arguments.length;
var i__4737__auto___58709 = (0);
while(true){
if((i__4737__auto___58709 < len__4736__auto___58708)){
args__4742__auto__.push((arguments[i__4737__auto___58709]));

var G__58710 = (i__4737__auto___58709 + (1));
i__4737__auto___58709 = G__58710;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58094 = conformed_args__56786__auto__;
var map__58094__$1 = (((((!((map__58094 == null))))?(((((map__58094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58094):map__58094);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq58093){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58093));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58711 = arguments.length;
var i__4737__auto___58712 = (0);
while(true){
if((i__4737__auto___58712 < len__4736__auto___58711)){
args__4742__auto__.push((arguments[i__4737__auto___58712]));

var G__58713 = (i__4737__auto___58712 + (1));
i__4737__auto___58712 = G__58713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58097 = conformed_args__56786__auto__;
var map__58097__$1 = (((((!((map__58097 == null))))?(((((map__58097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58097):map__58097);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq58096){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58714 = arguments.length;
var i__4737__auto___58715 = (0);
while(true){
if((i__4737__auto___58715 < len__4736__auto___58714)){
args__4742__auto__.push((arguments[i__4737__auto___58715]));

var G__58716 = (i__4737__auto___58715 + (1));
i__4737__auto___58715 = G__58716;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58100 = conformed_args__56786__auto__;
var map__58100__$1 = (((((!((map__58100 == null))))?(((((map__58100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58100):map__58100);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq58099){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58099));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58717 = arguments.length;
var i__4737__auto___58718 = (0);
while(true){
if((i__4737__auto___58718 < len__4736__auto___58717)){
args__4742__auto__.push((arguments[i__4737__auto___58718]));

var G__58719 = (i__4737__auto___58718 + (1));
i__4737__auto___58718 = G__58719;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58103 = conformed_args__56786__auto__;
var map__58103__$1 = (((((!((map__58103 == null))))?(((((map__58103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58103):map__58103);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq58102){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58102));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58720 = arguments.length;
var i__4737__auto___58721 = (0);
while(true){
if((i__4737__auto___58721 < len__4736__auto___58720)){
args__4742__auto__.push((arguments[i__4737__auto___58721]));

var G__58722 = (i__4737__auto___58721 + (1));
i__4737__auto___58721 = G__58722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58106 = conformed_args__56786__auto__;
var map__58106__$1 = (((((!((map__58106 == null))))?(((((map__58106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58106):map__58106);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq58105){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58105));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58723 = arguments.length;
var i__4737__auto___58724 = (0);
while(true){
if((i__4737__auto___58724 < len__4736__auto___58723)){
args__4742__auto__.push((arguments[i__4737__auto___58724]));

var G__58725 = (i__4737__auto___58724 + (1));
i__4737__auto___58724 = G__58725;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58109 = conformed_args__56786__auto__;
var map__58109__$1 = (((((!((map__58109 == null))))?(((((map__58109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58109):map__58109);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq58108){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58108));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58726 = arguments.length;
var i__4737__auto___58727 = (0);
while(true){
if((i__4737__auto___58727 < len__4736__auto___58726)){
args__4742__auto__.push((arguments[i__4737__auto___58727]));

var G__58728 = (i__4737__auto___58727 + (1));
i__4737__auto___58727 = G__58728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58112 = conformed_args__56786__auto__;
var map__58112__$1 = (((((!((map__58112 == null))))?(((((map__58112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58112):map__58112);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq58111){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58111));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58729 = arguments.length;
var i__4737__auto___58730 = (0);
while(true){
if((i__4737__auto___58730 < len__4736__auto___58729)){
args__4742__auto__.push((arguments[i__4737__auto___58730]));

var G__58731 = (i__4737__auto___58730 + (1));
i__4737__auto___58730 = G__58731;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58115 = conformed_args__56786__auto__;
var map__58115__$1 = (((((!((map__58115 == null))))?(((((map__58115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58115):map__58115);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq58114){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58114));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58732 = arguments.length;
var i__4737__auto___58733 = (0);
while(true){
if((i__4737__auto___58733 < len__4736__auto___58732)){
args__4742__auto__.push((arguments[i__4737__auto___58733]));

var G__58734 = (i__4737__auto___58733 + (1));
i__4737__auto___58733 = G__58734;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58118 = conformed_args__56786__auto__;
var map__58118__$1 = (((((!((map__58118 == null))))?(((((map__58118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58118):map__58118);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq58117){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58117));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58735 = arguments.length;
var i__4737__auto___58736 = (0);
while(true){
if((i__4737__auto___58736 < len__4736__auto___58735)){
args__4742__auto__.push((arguments[i__4737__auto___58736]));

var G__58737 = (i__4737__auto___58736 + (1));
i__4737__auto___58736 = G__58737;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58121 = conformed_args__56786__auto__;
var map__58121__$1 = (((((!((map__58121 == null))))?(((((map__58121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58121):map__58121);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq58120){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58738 = arguments.length;
var i__4737__auto___58739 = (0);
while(true){
if((i__4737__auto___58739 < len__4736__auto___58738)){
args__4742__auto__.push((arguments[i__4737__auto___58739]));

var G__58740 = (i__4737__auto___58739 + (1));
i__4737__auto___58739 = G__58740;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58124 = conformed_args__56786__auto__;
var map__58124__$1 = (((((!((map__58124 == null))))?(((((map__58124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58124):map__58124);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq58123){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58123));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58741 = arguments.length;
var i__4737__auto___58742 = (0);
while(true){
if((i__4737__auto___58742 < len__4736__auto___58741)){
args__4742__auto__.push((arguments[i__4737__auto___58742]));

var G__58743 = (i__4737__auto___58742 + (1));
i__4737__auto___58742 = G__58743;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58127 = conformed_args__56786__auto__;
var map__58127__$1 = (((((!((map__58127 == null))))?(((((map__58127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58127):map__58127);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq58126){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58126));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58744 = arguments.length;
var i__4737__auto___58745 = (0);
while(true){
if((i__4737__auto___58745 < len__4736__auto___58744)){
args__4742__auto__.push((arguments[i__4737__auto___58745]));

var G__58746 = (i__4737__auto___58745 + (1));
i__4737__auto___58745 = G__58746;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58130 = conformed_args__56786__auto__;
var map__58130__$1 = (((((!((map__58130 == null))))?(((((map__58130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58130):map__58130);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq58129){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58129));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58747 = arguments.length;
var i__4737__auto___58748 = (0);
while(true){
if((i__4737__auto___58748 < len__4736__auto___58747)){
args__4742__auto__.push((arguments[i__4737__auto___58748]));

var G__58749 = (i__4737__auto___58748 + (1));
i__4737__auto___58748 = G__58749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58133 = conformed_args__56786__auto__;
var map__58133__$1 = (((((!((map__58133 == null))))?(((((map__58133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58133):map__58133);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq58132){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58750 = arguments.length;
var i__4737__auto___58751 = (0);
while(true){
if((i__4737__auto___58751 < len__4736__auto___58750)){
args__4742__auto__.push((arguments[i__4737__auto___58751]));

var G__58752 = (i__4737__auto___58751 + (1));
i__4737__auto___58751 = G__58752;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58136 = conformed_args__56786__auto__;
var map__58136__$1 = (((((!((map__58136 == null))))?(((((map__58136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58136):map__58136);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq58135){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58135));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58753 = arguments.length;
var i__4737__auto___58754 = (0);
while(true){
if((i__4737__auto___58754 < len__4736__auto___58753)){
args__4742__auto__.push((arguments[i__4737__auto___58754]));

var G__58755 = (i__4737__auto___58754 + (1));
i__4737__auto___58754 = G__58755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58139 = conformed_args__56786__auto__;
var map__58139__$1 = (((((!((map__58139 == null))))?(((((map__58139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58139):map__58139);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq58138){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58138));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58756 = arguments.length;
var i__4737__auto___58757 = (0);
while(true){
if((i__4737__auto___58757 < len__4736__auto___58756)){
args__4742__auto__.push((arguments[i__4737__auto___58757]));

var G__58758 = (i__4737__auto___58757 + (1));
i__4737__auto___58757 = G__58758;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58142 = conformed_args__56786__auto__;
var map__58142__$1 = (((((!((map__58142 == null))))?(((((map__58142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58142):map__58142);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq58141){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58141));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58759 = arguments.length;
var i__4737__auto___58760 = (0);
while(true){
if((i__4737__auto___58760 < len__4736__auto___58759)){
args__4742__auto__.push((arguments[i__4737__auto___58760]));

var G__58761 = (i__4737__auto___58760 + (1));
i__4737__auto___58760 = G__58761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58145 = conformed_args__56786__auto__;
var map__58145__$1 = (((((!((map__58145 == null))))?(((((map__58145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58145):map__58145);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq58144){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58144));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58762 = arguments.length;
var i__4737__auto___58763 = (0);
while(true){
if((i__4737__auto___58763 < len__4736__auto___58762)){
args__4742__auto__.push((arguments[i__4737__auto___58763]));

var G__58764 = (i__4737__auto___58763 + (1));
i__4737__auto___58763 = G__58764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58148 = conformed_args__56786__auto__;
var map__58148__$1 = (((((!((map__58148 == null))))?(((((map__58148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58148):map__58148);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq58147){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58147));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58765 = arguments.length;
var i__4737__auto___58766 = (0);
while(true){
if((i__4737__auto___58766 < len__4736__auto___58765)){
args__4742__auto__.push((arguments[i__4737__auto___58766]));

var G__58767 = (i__4737__auto___58766 + (1));
i__4737__auto___58766 = G__58767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58151 = conformed_args__56786__auto__;
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq58150){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58150));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58768 = arguments.length;
var i__4737__auto___58769 = (0);
while(true){
if((i__4737__auto___58769 < len__4736__auto___58768)){
args__4742__auto__.push((arguments[i__4737__auto___58769]));

var G__58770 = (i__4737__auto___58769 + (1));
i__4737__auto___58769 = G__58770;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58154 = conformed_args__56786__auto__;
var map__58154__$1 = (((((!((map__58154 == null))))?(((((map__58154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58154):map__58154);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq58153){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58153));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58771 = arguments.length;
var i__4737__auto___58772 = (0);
while(true){
if((i__4737__auto___58772 < len__4736__auto___58771)){
args__4742__auto__.push((arguments[i__4737__auto___58772]));

var G__58773 = (i__4737__auto___58772 + (1));
i__4737__auto___58772 = G__58773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58157 = conformed_args__56786__auto__;
var map__58157__$1 = (((((!((map__58157 == null))))?(((((map__58157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58157):map__58157);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq58156){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58156));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58774 = arguments.length;
var i__4737__auto___58775 = (0);
while(true){
if((i__4737__auto___58775 < len__4736__auto___58774)){
args__4742__auto__.push((arguments[i__4737__auto___58775]));

var G__58776 = (i__4737__auto___58775 + (1));
i__4737__auto___58775 = G__58776;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58160 = conformed_args__56786__auto__;
var map__58160__$1 = (((((!((map__58160 == null))))?(((((map__58160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58160):map__58160);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq58159){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58159));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58777 = arguments.length;
var i__4737__auto___58778 = (0);
while(true){
if((i__4737__auto___58778 < len__4736__auto___58777)){
args__4742__auto__.push((arguments[i__4737__auto___58778]));

var G__58779 = (i__4737__auto___58778 + (1));
i__4737__auto___58778 = G__58779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58163 = conformed_args__56786__auto__;
var map__58163__$1 = (((((!((map__58163 == null))))?(((((map__58163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58163):map__58163);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq58162){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58162));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58780 = arguments.length;
var i__4737__auto___58781 = (0);
while(true){
if((i__4737__auto___58781 < len__4736__auto___58780)){
args__4742__auto__.push((arguments[i__4737__auto___58781]));

var G__58782 = (i__4737__auto___58781 + (1));
i__4737__auto___58781 = G__58782;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58166 = conformed_args__56786__auto__;
var map__58166__$1 = (((((!((map__58166 == null))))?(((((map__58166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58166):map__58166);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq58165){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58165));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58783 = arguments.length;
var i__4737__auto___58784 = (0);
while(true){
if((i__4737__auto___58784 < len__4736__auto___58783)){
args__4742__auto__.push((arguments[i__4737__auto___58784]));

var G__58785 = (i__4737__auto___58784 + (1));
i__4737__auto___58784 = G__58785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58169 = conformed_args__56786__auto__;
var map__58169__$1 = (((((!((map__58169 == null))))?(((((map__58169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58169):map__58169);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq58168){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58786 = arguments.length;
var i__4737__auto___58787 = (0);
while(true){
if((i__4737__auto___58787 < len__4736__auto___58786)){
args__4742__auto__.push((arguments[i__4737__auto___58787]));

var G__58788 = (i__4737__auto___58787 + (1));
i__4737__auto___58787 = G__58788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58172 = conformed_args__56786__auto__;
var map__58172__$1 = (((((!((map__58172 == null))))?(((((map__58172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58172):map__58172);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq58171){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58171));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58789 = arguments.length;
var i__4737__auto___58790 = (0);
while(true){
if((i__4737__auto___58790 < len__4736__auto___58789)){
args__4742__auto__.push((arguments[i__4737__auto___58790]));

var G__58791 = (i__4737__auto___58790 + (1));
i__4737__auto___58790 = G__58791;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58175 = conformed_args__56786__auto__;
var map__58175__$1 = (((((!((map__58175 == null))))?(((((map__58175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58175):map__58175);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq58174){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58174));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58792 = arguments.length;
var i__4737__auto___58793 = (0);
while(true){
if((i__4737__auto___58793 < len__4736__auto___58792)){
args__4742__auto__.push((arguments[i__4737__auto___58793]));

var G__58794 = (i__4737__auto___58793 + (1));
i__4737__auto___58793 = G__58794;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58178 = conformed_args__56786__auto__;
var map__58178__$1 = (((((!((map__58178 == null))))?(((((map__58178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58178):map__58178);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq58177){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58177));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58795 = arguments.length;
var i__4737__auto___58796 = (0);
while(true){
if((i__4737__auto___58796 < len__4736__auto___58795)){
args__4742__auto__.push((arguments[i__4737__auto___58796]));

var G__58797 = (i__4737__auto___58796 + (1));
i__4737__auto___58796 = G__58797;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58181 = conformed_args__56786__auto__;
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq58180){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58180));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58798 = arguments.length;
var i__4737__auto___58799 = (0);
while(true){
if((i__4737__auto___58799 < len__4736__auto___58798)){
args__4742__auto__.push((arguments[i__4737__auto___58799]));

var G__58800 = (i__4737__auto___58799 + (1));
i__4737__auto___58799 = G__58800;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58184 = conformed_args__56786__auto__;
var map__58184__$1 = (((((!((map__58184 == null))))?(((((map__58184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58184):map__58184);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq58183){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58183));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58801 = arguments.length;
var i__4737__auto___58802 = (0);
while(true){
if((i__4737__auto___58802 < len__4736__auto___58801)){
args__4742__auto__.push((arguments[i__4737__auto___58802]));

var G__58803 = (i__4737__auto___58802 + (1));
i__4737__auto___58802 = G__58803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58187 = conformed_args__56786__auto__;
var map__58187__$1 = (((((!((map__58187 == null))))?(((((map__58187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58187):map__58187);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq58186){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58186));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58804 = arguments.length;
var i__4737__auto___58805 = (0);
while(true){
if((i__4737__auto___58805 < len__4736__auto___58804)){
args__4742__auto__.push((arguments[i__4737__auto___58805]));

var G__58806 = (i__4737__auto___58805 + (1));
i__4737__auto___58805 = G__58806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58190 = conformed_args__56786__auto__;
var map__58190__$1 = (((((!((map__58190 == null))))?(((((map__58190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58190):map__58190);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq58189){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58189));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58807 = arguments.length;
var i__4737__auto___58808 = (0);
while(true){
if((i__4737__auto___58808 < len__4736__auto___58807)){
args__4742__auto__.push((arguments[i__4737__auto___58808]));

var G__58809 = (i__4737__auto___58808 + (1));
i__4737__auto___58808 = G__58809;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58193 = conformed_args__56786__auto__;
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq58192){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58192));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58810 = arguments.length;
var i__4737__auto___58811 = (0);
while(true){
if((i__4737__auto___58811 < len__4736__auto___58810)){
args__4742__auto__.push((arguments[i__4737__auto___58811]));

var G__58812 = (i__4737__auto___58811 + (1));
i__4737__auto___58811 = G__58812;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58196 = conformed_args__56786__auto__;
var map__58196__$1 = (((((!((map__58196 == null))))?(((((map__58196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58196):map__58196);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq58195){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58195));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58813 = arguments.length;
var i__4737__auto___58814 = (0);
while(true){
if((i__4737__auto___58814 < len__4736__auto___58813)){
args__4742__auto__.push((arguments[i__4737__auto___58814]));

var G__58815 = (i__4737__auto___58814 + (1));
i__4737__auto___58814 = G__58815;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58199 = conformed_args__56786__auto__;
var map__58199__$1 = (((((!((map__58199 == null))))?(((((map__58199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58199):map__58199);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58199__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58199__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58199__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq58198){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58816 = arguments.length;
var i__4737__auto___58817 = (0);
while(true){
if((i__4737__auto___58817 < len__4736__auto___58816)){
args__4742__auto__.push((arguments[i__4737__auto___58817]));

var G__58818 = (i__4737__auto___58817 + (1));
i__4737__auto___58817 = G__58818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58202 = conformed_args__56786__auto__;
var map__58202__$1 = (((((!((map__58202 == null))))?(((((map__58202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58202):map__58202);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq58201){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58201));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58819 = arguments.length;
var i__4737__auto___58820 = (0);
while(true){
if((i__4737__auto___58820 < len__4736__auto___58819)){
args__4742__auto__.push((arguments[i__4737__auto___58820]));

var G__58821 = (i__4737__auto___58820 + (1));
i__4737__auto___58820 = G__58821;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58205 = conformed_args__56786__auto__;
var map__58205__$1 = (((((!((map__58205 == null))))?(((((map__58205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58205):map__58205);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq58204){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58204));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58822 = arguments.length;
var i__4737__auto___58823 = (0);
while(true){
if((i__4737__auto___58823 < len__4736__auto___58822)){
args__4742__auto__.push((arguments[i__4737__auto___58823]));

var G__58824 = (i__4737__auto___58823 + (1));
i__4737__auto___58823 = G__58824;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58208 = conformed_args__56786__auto__;
var map__58208__$1 = (((((!((map__58208 == null))))?(((((map__58208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58208):map__58208);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq58207){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58825 = arguments.length;
var i__4737__auto___58826 = (0);
while(true){
if((i__4737__auto___58826 < len__4736__auto___58825)){
args__4742__auto__.push((arguments[i__4737__auto___58826]));

var G__58827 = (i__4737__auto___58826 + (1));
i__4737__auto___58826 = G__58827;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58211 = conformed_args__56786__auto__;
var map__58211__$1 = (((((!((map__58211 == null))))?(((((map__58211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58211):map__58211);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq58210){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58828 = arguments.length;
var i__4737__auto___58829 = (0);
while(true){
if((i__4737__auto___58829 < len__4736__auto___58828)){
args__4742__auto__.push((arguments[i__4737__auto___58829]));

var G__58830 = (i__4737__auto___58829 + (1));
i__4737__auto___58829 = G__58830;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58214 = conformed_args__56786__auto__;
var map__58214__$1 = (((((!((map__58214 == null))))?(((((map__58214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58214):map__58214);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq58213){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58213));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58831 = arguments.length;
var i__4737__auto___58832 = (0);
while(true){
if((i__4737__auto___58832 < len__4736__auto___58831)){
args__4742__auto__.push((arguments[i__4737__auto___58832]));

var G__58833 = (i__4737__auto___58832 + (1));
i__4737__auto___58832 = G__58833;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58217 = conformed_args__56786__auto__;
var map__58217__$1 = (((((!((map__58217 == null))))?(((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58217):map__58217);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq58216){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58834 = arguments.length;
var i__4737__auto___58835 = (0);
while(true){
if((i__4737__auto___58835 < len__4736__auto___58834)){
args__4742__auto__.push((arguments[i__4737__auto___58835]));

var G__58836 = (i__4737__auto___58835 + (1));
i__4737__auto___58835 = G__58836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58220 = conformed_args__56786__auto__;
var map__58220__$1 = (((((!((map__58220 == null))))?(((((map__58220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58220):map__58220);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq58219){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58837 = arguments.length;
var i__4737__auto___58838 = (0);
while(true){
if((i__4737__auto___58838 < len__4736__auto___58837)){
args__4742__auto__.push((arguments[i__4737__auto___58838]));

var G__58839 = (i__4737__auto___58838 + (1));
i__4737__auto___58838 = G__58839;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58223 = conformed_args__56786__auto__;
var map__58223__$1 = (((((!((map__58223 == null))))?(((((map__58223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58223):map__58223);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq58222){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58222));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58840 = arguments.length;
var i__4737__auto___58841 = (0);
while(true){
if((i__4737__auto___58841 < len__4736__auto___58840)){
args__4742__auto__.push((arguments[i__4737__auto___58841]));

var G__58842 = (i__4737__auto___58841 + (1));
i__4737__auto___58841 = G__58842;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58226 = conformed_args__56786__auto__;
var map__58226__$1 = (((((!((map__58226 == null))))?(((((map__58226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58226):map__58226);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq58225){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58225));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58843 = arguments.length;
var i__4737__auto___58844 = (0);
while(true){
if((i__4737__auto___58844 < len__4736__auto___58843)){
args__4742__auto__.push((arguments[i__4737__auto___58844]));

var G__58845 = (i__4737__auto___58844 + (1));
i__4737__auto___58844 = G__58845;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58229 = conformed_args__56786__auto__;
var map__58229__$1 = (((((!((map__58229 == null))))?(((((map__58229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58229):map__58229);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq58228){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58228));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58846 = arguments.length;
var i__4737__auto___58847 = (0);
while(true){
if((i__4737__auto___58847 < len__4736__auto___58846)){
args__4742__auto__.push((arguments[i__4737__auto___58847]));

var G__58848 = (i__4737__auto___58847 + (1));
i__4737__auto___58847 = G__58848;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58232 = conformed_args__56786__auto__;
var map__58232__$1 = (((((!((map__58232 == null))))?(((((map__58232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58232):map__58232);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq58231){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58849 = arguments.length;
var i__4737__auto___58850 = (0);
while(true){
if((i__4737__auto___58850 < len__4736__auto___58849)){
args__4742__auto__.push((arguments[i__4737__auto___58850]));

var G__58851 = (i__4737__auto___58850 + (1));
i__4737__auto___58850 = G__58851;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58235 = conformed_args__56786__auto__;
var map__58235__$1 = (((((!((map__58235 == null))))?(((((map__58235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58235):map__58235);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq58234){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58234));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58852 = arguments.length;
var i__4737__auto___58853 = (0);
while(true){
if((i__4737__auto___58853 < len__4736__auto___58852)){
args__4742__auto__.push((arguments[i__4737__auto___58853]));

var G__58854 = (i__4737__auto___58853 + (1));
i__4737__auto___58853 = G__58854;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58238 = conformed_args__56786__auto__;
var map__58238__$1 = (((((!((map__58238 == null))))?(((((map__58238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58238):map__58238);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq58237){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58237));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58855 = arguments.length;
var i__4737__auto___58856 = (0);
while(true){
if((i__4737__auto___58856 < len__4736__auto___58855)){
args__4742__auto__.push((arguments[i__4737__auto___58856]));

var G__58857 = (i__4737__auto___58856 + (1));
i__4737__auto___58856 = G__58857;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58241 = conformed_args__56786__auto__;
var map__58241__$1 = (((((!((map__58241 == null))))?(((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58241):map__58241);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq58240){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58240));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58858 = arguments.length;
var i__4737__auto___58859 = (0);
while(true){
if((i__4737__auto___58859 < len__4736__auto___58858)){
args__4742__auto__.push((arguments[i__4737__auto___58859]));

var G__58860 = (i__4737__auto___58859 + (1));
i__4737__auto___58859 = G__58860;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58244 = conformed_args__56786__auto__;
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq58243){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58243));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58861 = arguments.length;
var i__4737__auto___58862 = (0);
while(true){
if((i__4737__auto___58862 < len__4736__auto___58861)){
args__4742__auto__.push((arguments[i__4737__auto___58862]));

var G__58863 = (i__4737__auto___58862 + (1));
i__4737__auto___58862 = G__58863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58247 = conformed_args__56786__auto__;
var map__58247__$1 = (((((!((map__58247 == null))))?(((((map__58247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58247):map__58247);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq58246){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58246));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58864 = arguments.length;
var i__4737__auto___58865 = (0);
while(true){
if((i__4737__auto___58865 < len__4736__auto___58864)){
args__4742__auto__.push((arguments[i__4737__auto___58865]));

var G__58866 = (i__4737__auto___58865 + (1));
i__4737__auto___58865 = G__58866;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58250 = conformed_args__56786__auto__;
var map__58250__$1 = (((((!((map__58250 == null))))?(((((map__58250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58250):map__58250);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq58249){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58249));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58867 = arguments.length;
var i__4737__auto___58868 = (0);
while(true){
if((i__4737__auto___58868 < len__4736__auto___58867)){
args__4742__auto__.push((arguments[i__4737__auto___58868]));

var G__58869 = (i__4737__auto___58868 + (1));
i__4737__auto___58868 = G__58869;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58253 = conformed_args__56786__auto__;
var map__58253__$1 = (((((!((map__58253 == null))))?(((((map__58253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58253):map__58253);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq58252){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58252));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58870 = arguments.length;
var i__4737__auto___58871 = (0);
while(true){
if((i__4737__auto___58871 < len__4736__auto___58870)){
args__4742__auto__.push((arguments[i__4737__auto___58871]));

var G__58872 = (i__4737__auto___58871 + (1));
i__4737__auto___58871 = G__58872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58256 = conformed_args__56786__auto__;
var map__58256__$1 = (((((!((map__58256 == null))))?(((((map__58256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58256):map__58256);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq58255){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58255));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58873 = arguments.length;
var i__4737__auto___58874 = (0);
while(true){
if((i__4737__auto___58874 < len__4736__auto___58873)){
args__4742__auto__.push((arguments[i__4737__auto___58874]));

var G__58875 = (i__4737__auto___58874 + (1));
i__4737__auto___58874 = G__58875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58259 = conformed_args__56786__auto__;
var map__58259__$1 = (((((!((map__58259 == null))))?(((((map__58259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58259):map__58259);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq58258){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58258));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58876 = arguments.length;
var i__4737__auto___58877 = (0);
while(true){
if((i__4737__auto___58877 < len__4736__auto___58876)){
args__4742__auto__.push((arguments[i__4737__auto___58877]));

var G__58878 = (i__4737__auto___58877 + (1));
i__4737__auto___58877 = G__58878;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58262 = conformed_args__56786__auto__;
var map__58262__$1 = (((((!((map__58262 == null))))?(((((map__58262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58262):map__58262);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq58261){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58261));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58879 = arguments.length;
var i__4737__auto___58880 = (0);
while(true){
if((i__4737__auto___58880 < len__4736__auto___58879)){
args__4742__auto__.push((arguments[i__4737__auto___58880]));

var G__58881 = (i__4737__auto___58880 + (1));
i__4737__auto___58880 = G__58881;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58265 = conformed_args__56786__auto__;
var map__58265__$1 = (((((!((map__58265 == null))))?(((((map__58265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58265):map__58265);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq58264){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58264));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58882 = arguments.length;
var i__4737__auto___58883 = (0);
while(true){
if((i__4737__auto___58883 < len__4736__auto___58882)){
args__4742__auto__.push((arguments[i__4737__auto___58883]));

var G__58884 = (i__4737__auto___58883 + (1));
i__4737__auto___58883 = G__58884;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58268 = conformed_args__56786__auto__;
var map__58268__$1 = (((((!((map__58268 == null))))?(((((map__58268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58268):map__58268);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq58267){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58267));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58885 = arguments.length;
var i__4737__auto___58886 = (0);
while(true){
if((i__4737__auto___58886 < len__4736__auto___58885)){
args__4742__auto__.push((arguments[i__4737__auto___58886]));

var G__58887 = (i__4737__auto___58886 + (1));
i__4737__auto___58886 = G__58887;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58271 = conformed_args__56786__auto__;
var map__58271__$1 = (((((!((map__58271 == null))))?(((((map__58271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58271):map__58271);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq58270){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58888 = arguments.length;
var i__4737__auto___58889 = (0);
while(true){
if((i__4737__auto___58889 < len__4736__auto___58888)){
args__4742__auto__.push((arguments[i__4737__auto___58889]));

var G__58890 = (i__4737__auto___58889 + (1));
i__4737__auto___58889 = G__58890;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58274 = conformed_args__56786__auto__;
var map__58274__$1 = (((((!((map__58274 == null))))?(((((map__58274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58274):map__58274);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq58273){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58273));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58891 = arguments.length;
var i__4737__auto___58892 = (0);
while(true){
if((i__4737__auto___58892 < len__4736__auto___58891)){
args__4742__auto__.push((arguments[i__4737__auto___58892]));

var G__58893 = (i__4737__auto___58892 + (1));
i__4737__auto___58892 = G__58893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58277 = conformed_args__56786__auto__;
var map__58277__$1 = (((((!((map__58277 == null))))?(((((map__58277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58277):map__58277);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq58276){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58276));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58894 = arguments.length;
var i__4737__auto___58895 = (0);
while(true){
if((i__4737__auto___58895 < len__4736__auto___58894)){
args__4742__auto__.push((arguments[i__4737__auto___58895]));

var G__58896 = (i__4737__auto___58895 + (1));
i__4737__auto___58895 = G__58896;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58280 = conformed_args__56786__auto__;
var map__58280__$1 = (((((!((map__58280 == null))))?(((((map__58280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58280):map__58280);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq58279){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58279));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58897 = arguments.length;
var i__4737__auto___58898 = (0);
while(true){
if((i__4737__auto___58898 < len__4736__auto___58897)){
args__4742__auto__.push((arguments[i__4737__auto___58898]));

var G__58899 = (i__4737__auto___58898 + (1));
i__4737__auto___58898 = G__58899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58283 = conformed_args__56786__auto__;
var map__58283__$1 = (((((!((map__58283 == null))))?(((((map__58283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58283):map__58283);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq58282){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58282));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58900 = arguments.length;
var i__4737__auto___58901 = (0);
while(true){
if((i__4737__auto___58901 < len__4736__auto___58900)){
args__4742__auto__.push((arguments[i__4737__auto___58901]));

var G__58902 = (i__4737__auto___58901 + (1));
i__4737__auto___58901 = G__58902;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58286 = conformed_args__56786__auto__;
var map__58286__$1 = (((((!((map__58286 == null))))?(((((map__58286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58286):map__58286);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq58285){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58285));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58903 = arguments.length;
var i__4737__auto___58904 = (0);
while(true){
if((i__4737__auto___58904 < len__4736__auto___58903)){
args__4742__auto__.push((arguments[i__4737__auto___58904]));

var G__58905 = (i__4737__auto___58904 + (1));
i__4737__auto___58904 = G__58905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58289 = conformed_args__56786__auto__;
var map__58289__$1 = (((((!((map__58289 == null))))?(((((map__58289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58289):map__58289);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq58288){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58288));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58906 = arguments.length;
var i__4737__auto___58907 = (0);
while(true){
if((i__4737__auto___58907 < len__4736__auto___58906)){
args__4742__auto__.push((arguments[i__4737__auto___58907]));

var G__58908 = (i__4737__auto___58907 + (1));
i__4737__auto___58907 = G__58908;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58292 = conformed_args__56786__auto__;
var map__58292__$1 = (((((!((map__58292 == null))))?(((((map__58292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58292):map__58292);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq58291){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58291));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58909 = arguments.length;
var i__4737__auto___58910 = (0);
while(true){
if((i__4737__auto___58910 < len__4736__auto___58909)){
args__4742__auto__.push((arguments[i__4737__auto___58910]));

var G__58911 = (i__4737__auto___58910 + (1));
i__4737__auto___58910 = G__58911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58295 = conformed_args__56786__auto__;
var map__58295__$1 = (((((!((map__58295 == null))))?(((((map__58295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58295):map__58295);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq58294){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58294));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58912 = arguments.length;
var i__4737__auto___58913 = (0);
while(true){
if((i__4737__auto___58913 < len__4736__auto___58912)){
args__4742__auto__.push((arguments[i__4737__auto___58913]));

var G__58914 = (i__4737__auto___58913 + (1));
i__4737__auto___58913 = G__58914;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58298 = conformed_args__56786__auto__;
var map__58298__$1 = (((((!((map__58298 == null))))?(((((map__58298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58298):map__58298);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq58297){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58297));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58915 = arguments.length;
var i__4737__auto___58916 = (0);
while(true){
if((i__4737__auto___58916 < len__4736__auto___58915)){
args__4742__auto__.push((arguments[i__4737__auto___58916]));

var G__58917 = (i__4737__auto___58916 + (1));
i__4737__auto___58916 = G__58917;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58301 = conformed_args__56786__auto__;
var map__58301__$1 = (((((!((map__58301 == null))))?(((((map__58301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58301):map__58301);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq58300){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58918 = arguments.length;
var i__4737__auto___58919 = (0);
while(true){
if((i__4737__auto___58919 < len__4736__auto___58918)){
args__4742__auto__.push((arguments[i__4737__auto___58919]));

var G__58920 = (i__4737__auto___58919 + (1));
i__4737__auto___58919 = G__58920;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58304 = conformed_args__56786__auto__;
var map__58304__$1 = (((((!((map__58304 == null))))?(((((map__58304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58304):map__58304);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq58303){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58921 = arguments.length;
var i__4737__auto___58922 = (0);
while(true){
if((i__4737__auto___58922 < len__4736__auto___58921)){
args__4742__auto__.push((arguments[i__4737__auto___58922]));

var G__58923 = (i__4737__auto___58922 + (1));
i__4737__auto___58922 = G__58923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58307 = conformed_args__56786__auto__;
var map__58307__$1 = (((((!((map__58307 == null))))?(((((map__58307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58307):map__58307);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq58306){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58924 = arguments.length;
var i__4737__auto___58925 = (0);
while(true){
if((i__4737__auto___58925 < len__4736__auto___58924)){
args__4742__auto__.push((arguments[i__4737__auto___58925]));

var G__58926 = (i__4737__auto___58925 + (1));
i__4737__auto___58925 = G__58926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58310 = conformed_args__56786__auto__;
var map__58310__$1 = (((((!((map__58310 == null))))?(((((map__58310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58310):map__58310);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq58309){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58309));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58927 = arguments.length;
var i__4737__auto___58928 = (0);
while(true){
if((i__4737__auto___58928 < len__4736__auto___58927)){
args__4742__auto__.push((arguments[i__4737__auto___58928]));

var G__58929 = (i__4737__auto___58928 + (1));
i__4737__auto___58928 = G__58929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58313 = conformed_args__56786__auto__;
var map__58313__$1 = (((((!((map__58313 == null))))?(((((map__58313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58313):map__58313);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq58312){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58312));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58930 = arguments.length;
var i__4737__auto___58931 = (0);
while(true){
if((i__4737__auto___58931 < len__4736__auto___58930)){
args__4742__auto__.push((arguments[i__4737__auto___58931]));

var G__58932 = (i__4737__auto___58931 + (1));
i__4737__auto___58931 = G__58932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58316 = conformed_args__56786__auto__;
var map__58316__$1 = (((((!((map__58316 == null))))?(((((map__58316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58316):map__58316);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq58315){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58933 = arguments.length;
var i__4737__auto___58934 = (0);
while(true){
if((i__4737__auto___58934 < len__4736__auto___58933)){
args__4742__auto__.push((arguments[i__4737__auto___58934]));

var G__58935 = (i__4737__auto___58934 + (1));
i__4737__auto___58934 = G__58935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58319 = conformed_args__56786__auto__;
var map__58319__$1 = (((((!((map__58319 == null))))?(((((map__58319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58319):map__58319);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq58318){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58318));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58936 = arguments.length;
var i__4737__auto___58937 = (0);
while(true){
if((i__4737__auto___58937 < len__4736__auto___58936)){
args__4742__auto__.push((arguments[i__4737__auto___58937]));

var G__58938 = (i__4737__auto___58937 + (1));
i__4737__auto___58937 = G__58938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58322 = conformed_args__56786__auto__;
var map__58322__$1 = (((((!((map__58322 == null))))?(((((map__58322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58322):map__58322);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq58321){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58321));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58939 = arguments.length;
var i__4737__auto___58940 = (0);
while(true){
if((i__4737__auto___58940 < len__4736__auto___58939)){
args__4742__auto__.push((arguments[i__4737__auto___58940]));

var G__58941 = (i__4737__auto___58940 + (1));
i__4737__auto___58940 = G__58941;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58325 = conformed_args__56786__auto__;
var map__58325__$1 = (((((!((map__58325 == null))))?(((((map__58325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58325):map__58325);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq58324){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58324));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58942 = arguments.length;
var i__4737__auto___58943 = (0);
while(true){
if((i__4737__auto___58943 < len__4736__auto___58942)){
args__4742__auto__.push((arguments[i__4737__auto___58943]));

var G__58944 = (i__4737__auto___58943 + (1));
i__4737__auto___58943 = G__58944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58328 = conformed_args__56786__auto__;
var map__58328__$1 = (((((!((map__58328 == null))))?(((((map__58328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58328):map__58328);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq58327){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58327));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58945 = arguments.length;
var i__4737__auto___58946 = (0);
while(true){
if((i__4737__auto___58946 < len__4736__auto___58945)){
args__4742__auto__.push((arguments[i__4737__auto___58946]));

var G__58947 = (i__4737__auto___58946 + (1));
i__4737__auto___58946 = G__58947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58331 = conformed_args__56786__auto__;
var map__58331__$1 = (((((!((map__58331 == null))))?(((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58331):map__58331);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq58330){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58330));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58948 = arguments.length;
var i__4737__auto___58949 = (0);
while(true){
if((i__4737__auto___58949 < len__4736__auto___58948)){
args__4742__auto__.push((arguments[i__4737__auto___58949]));

var G__58950 = (i__4737__auto___58949 + (1));
i__4737__auto___58949 = G__58950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58334 = conformed_args__56786__auto__;
var map__58334__$1 = (((((!((map__58334 == null))))?(((((map__58334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58334):map__58334);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq58333){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58951 = arguments.length;
var i__4737__auto___58952 = (0);
while(true){
if((i__4737__auto___58952 < len__4736__auto___58951)){
args__4742__auto__.push((arguments[i__4737__auto___58952]));

var G__58953 = (i__4737__auto___58952 + (1));
i__4737__auto___58952 = G__58953;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58337 = conformed_args__56786__auto__;
var map__58337__$1 = (((((!((map__58337 == null))))?(((((map__58337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58337):map__58337);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq58336){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58336));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58954 = arguments.length;
var i__4737__auto___58955 = (0);
while(true){
if((i__4737__auto___58955 < len__4736__auto___58954)){
args__4742__auto__.push((arguments[i__4737__auto___58955]));

var G__58956 = (i__4737__auto___58955 + (1));
i__4737__auto___58955 = G__58956;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58340 = conformed_args__56786__auto__;
var map__58340__$1 = (((((!((map__58340 == null))))?(((((map__58340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58340):map__58340);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq58339){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58339));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58957 = arguments.length;
var i__4737__auto___58958 = (0);
while(true){
if((i__4737__auto___58958 < len__4736__auto___58957)){
args__4742__auto__.push((arguments[i__4737__auto___58958]));

var G__58959 = (i__4737__auto___58958 + (1));
i__4737__auto___58958 = G__58959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58343 = conformed_args__56786__auto__;
var map__58343__$1 = (((((!((map__58343 == null))))?(((((map__58343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58343):map__58343);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq58342){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58342));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58960 = arguments.length;
var i__4737__auto___58961 = (0);
while(true){
if((i__4737__auto___58961 < len__4736__auto___58960)){
args__4742__auto__.push((arguments[i__4737__auto___58961]));

var G__58962 = (i__4737__auto___58961 + (1));
i__4737__auto___58961 = G__58962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58346 = conformed_args__56786__auto__;
var map__58346__$1 = (((((!((map__58346 == null))))?(((((map__58346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58346):map__58346);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq58345){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58345));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58963 = arguments.length;
var i__4737__auto___58964 = (0);
while(true){
if((i__4737__auto___58964 < len__4736__auto___58963)){
args__4742__auto__.push((arguments[i__4737__auto___58964]));

var G__58965 = (i__4737__auto___58964 + (1));
i__4737__auto___58964 = G__58965;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58349 = conformed_args__56786__auto__;
var map__58349__$1 = (((((!((map__58349 == null))))?(((((map__58349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58349):map__58349);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq58348){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58348));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58966 = arguments.length;
var i__4737__auto___58967 = (0);
while(true){
if((i__4737__auto___58967 < len__4736__auto___58966)){
args__4742__auto__.push((arguments[i__4737__auto___58967]));

var G__58968 = (i__4737__auto___58967 + (1));
i__4737__auto___58967 = G__58968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58352 = conformed_args__56786__auto__;
var map__58352__$1 = (((((!((map__58352 == null))))?(((((map__58352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58352):map__58352);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq58351){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58969 = arguments.length;
var i__4737__auto___58970 = (0);
while(true){
if((i__4737__auto___58970 < len__4736__auto___58969)){
args__4742__auto__.push((arguments[i__4737__auto___58970]));

var G__58971 = (i__4737__auto___58970 + (1));
i__4737__auto___58970 = G__58971;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58355 = conformed_args__56786__auto__;
var map__58355__$1 = (((((!((map__58355 == null))))?(((((map__58355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58355):map__58355);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq58354){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58354));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58972 = arguments.length;
var i__4737__auto___58973 = (0);
while(true){
if((i__4737__auto___58973 < len__4736__auto___58972)){
args__4742__auto__.push((arguments[i__4737__auto___58973]));

var G__58974 = (i__4737__auto___58973 + (1));
i__4737__auto___58973 = G__58974;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58358 = conformed_args__56786__auto__;
var map__58358__$1 = (((((!((map__58358 == null))))?(((((map__58358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58358):map__58358);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq58357){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58357));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58975 = arguments.length;
var i__4737__auto___58976 = (0);
while(true){
if((i__4737__auto___58976 < len__4736__auto___58975)){
args__4742__auto__.push((arguments[i__4737__auto___58976]));

var G__58977 = (i__4737__auto___58976 + (1));
i__4737__auto___58976 = G__58977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58361 = conformed_args__56786__auto__;
var map__58361__$1 = (((((!((map__58361 == null))))?(((((map__58361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58361):map__58361);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq58360){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58360));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58978 = arguments.length;
var i__4737__auto___58979 = (0);
while(true){
if((i__4737__auto___58979 < len__4736__auto___58978)){
args__4742__auto__.push((arguments[i__4737__auto___58979]));

var G__58980 = (i__4737__auto___58979 + (1));
i__4737__auto___58979 = G__58980;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58364 = conformed_args__56786__auto__;
var map__58364__$1 = (((((!((map__58364 == null))))?(((((map__58364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58364):map__58364);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq58363){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58363));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58981 = arguments.length;
var i__4737__auto___58982 = (0);
while(true){
if((i__4737__auto___58982 < len__4736__auto___58981)){
args__4742__auto__.push((arguments[i__4737__auto___58982]));

var G__58983 = (i__4737__auto___58982 + (1));
i__4737__auto___58982 = G__58983;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58367 = conformed_args__56786__auto__;
var map__58367__$1 = (((((!((map__58367 == null))))?(((((map__58367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58367):map__58367);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq58366){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58366));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58984 = arguments.length;
var i__4737__auto___58985 = (0);
while(true){
if((i__4737__auto___58985 < len__4736__auto___58984)){
args__4742__auto__.push((arguments[i__4737__auto___58985]));

var G__58986 = (i__4737__auto___58985 + (1));
i__4737__auto___58985 = G__58986;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58370 = conformed_args__56786__auto__;
var map__58370__$1 = (((((!((map__58370 == null))))?(((((map__58370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58370):map__58370);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq58369){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58369));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58987 = arguments.length;
var i__4737__auto___58988 = (0);
while(true){
if((i__4737__auto___58988 < len__4736__auto___58987)){
args__4742__auto__.push((arguments[i__4737__auto___58988]));

var G__58989 = (i__4737__auto___58988 + (1));
i__4737__auto___58988 = G__58989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58373 = conformed_args__56786__auto__;
var map__58373__$1 = (((((!((map__58373 == null))))?(((((map__58373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58373):map__58373);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq58372){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58372));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58990 = arguments.length;
var i__4737__auto___58991 = (0);
while(true){
if((i__4737__auto___58991 < len__4736__auto___58990)){
args__4742__auto__.push((arguments[i__4737__auto___58991]));

var G__58992 = (i__4737__auto___58991 + (1));
i__4737__auto___58991 = G__58992;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58376 = conformed_args__56786__auto__;
var map__58376__$1 = (((((!((map__58376 == null))))?(((((map__58376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58376):map__58376);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq58375){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58375));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58993 = arguments.length;
var i__4737__auto___58994 = (0);
while(true){
if((i__4737__auto___58994 < len__4736__auto___58993)){
args__4742__auto__.push((arguments[i__4737__auto___58994]));

var G__58995 = (i__4737__auto___58994 + (1));
i__4737__auto___58994 = G__58995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58379 = conformed_args__56786__auto__;
var map__58379__$1 = (((((!((map__58379 == null))))?(((((map__58379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58379):map__58379);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq58378){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58378));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58996 = arguments.length;
var i__4737__auto___58997 = (0);
while(true){
if((i__4737__auto___58997 < len__4736__auto___58996)){
args__4742__auto__.push((arguments[i__4737__auto___58997]));

var G__58998 = (i__4737__auto___58997 + (1));
i__4737__auto___58997 = G__58998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58382 = conformed_args__56786__auto__;
var map__58382__$1 = (((((!((map__58382 == null))))?(((((map__58382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58382):map__58382);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq58381){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58381));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58999 = arguments.length;
var i__4737__auto___59000 = (0);
while(true){
if((i__4737__auto___59000 < len__4736__auto___58999)){
args__4742__auto__.push((arguments[i__4737__auto___59000]));

var G__59001 = (i__4737__auto___59000 + (1));
i__4737__auto___59000 = G__59001;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58385 = conformed_args__56786__auto__;
var map__58385__$1 = (((((!((map__58385 == null))))?(((((map__58385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58385):map__58385);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq58384){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58384));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59002 = arguments.length;
var i__4737__auto___59003 = (0);
while(true){
if((i__4737__auto___59003 < len__4736__auto___59002)){
args__4742__auto__.push((arguments[i__4737__auto___59003]));

var G__59004 = (i__4737__auto___59003 + (1));
i__4737__auto___59003 = G__59004;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58388 = conformed_args__56786__auto__;
var map__58388__$1 = (((((!((map__58388 == null))))?(((((map__58388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58388):map__58388);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq58387){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58387));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59005 = arguments.length;
var i__4737__auto___59006 = (0);
while(true){
if((i__4737__auto___59006 < len__4736__auto___59005)){
args__4742__auto__.push((arguments[i__4737__auto___59006]));

var G__59007 = (i__4737__auto___59006 + (1));
i__4737__auto___59006 = G__59007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58391 = conformed_args__56786__auto__;
var map__58391__$1 = (((((!((map__58391 == null))))?(((((map__58391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58391):map__58391);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq58390){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58390));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59008 = arguments.length;
var i__4737__auto___59009 = (0);
while(true){
if((i__4737__auto___59009 < len__4736__auto___59008)){
args__4742__auto__.push((arguments[i__4737__auto___59009]));

var G__59010 = (i__4737__auto___59009 + (1));
i__4737__auto___59009 = G__59010;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58394 = conformed_args__56786__auto__;
var map__58394__$1 = (((((!((map__58394 == null))))?(((((map__58394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58394):map__58394);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq58393){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58393));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59011 = arguments.length;
var i__4737__auto___59012 = (0);
while(true){
if((i__4737__auto___59012 < len__4736__auto___59011)){
args__4742__auto__.push((arguments[i__4737__auto___59012]));

var G__59013 = (i__4737__auto___59012 + (1));
i__4737__auto___59012 = G__59013;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58397 = conformed_args__56786__auto__;
var map__58397__$1 = (((((!((map__58397 == null))))?(((((map__58397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58397):map__58397);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq58396){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58396));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59014 = arguments.length;
var i__4737__auto___59015 = (0);
while(true){
if((i__4737__auto___59015 < len__4736__auto___59014)){
args__4742__auto__.push((arguments[i__4737__auto___59015]));

var G__59016 = (i__4737__auto___59015 + (1));
i__4737__auto___59015 = G__59016;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58400 = conformed_args__56786__auto__;
var map__58400__$1 = (((((!((map__58400 == null))))?(((((map__58400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58400):map__58400);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq58399){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59017 = arguments.length;
var i__4737__auto___59018 = (0);
while(true){
if((i__4737__auto___59018 < len__4736__auto___59017)){
args__4742__auto__.push((arguments[i__4737__auto___59018]));

var G__59019 = (i__4737__auto___59018 + (1));
i__4737__auto___59018 = G__59019;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58403 = conformed_args__56786__auto__;
var map__58403__$1 = (((((!((map__58403 == null))))?(((((map__58403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58403):map__58403);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq58402){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58402));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59020 = arguments.length;
var i__4737__auto___59021 = (0);
while(true){
if((i__4737__auto___59021 < len__4736__auto___59020)){
args__4742__auto__.push((arguments[i__4737__auto___59021]));

var G__59022 = (i__4737__auto___59021 + (1));
i__4737__auto___59021 = G__59022;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58406 = conformed_args__56786__auto__;
var map__58406__$1 = (((((!((map__58406 == null))))?(((((map__58406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58406):map__58406);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq58405){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58405));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59023 = arguments.length;
var i__4737__auto___59024 = (0);
while(true){
if((i__4737__auto___59024 < len__4736__auto___59023)){
args__4742__auto__.push((arguments[i__4737__auto___59024]));

var G__59025 = (i__4737__auto___59024 + (1));
i__4737__auto___59024 = G__59025;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58409 = conformed_args__56786__auto__;
var map__58409__$1 = (((((!((map__58409 == null))))?(((((map__58409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58409):map__58409);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58409__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58409__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58409__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq58408){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58408));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59026 = arguments.length;
var i__4737__auto___59027 = (0);
while(true){
if((i__4737__auto___59027 < len__4736__auto___59026)){
args__4742__auto__.push((arguments[i__4737__auto___59027]));

var G__59028 = (i__4737__auto___59027 + (1));
i__4737__auto___59027 = G__59028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58412 = conformed_args__56786__auto__;
var map__58412__$1 = (((((!((map__58412 == null))))?(((((map__58412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58412):map__58412);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq58411){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58411));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59029 = arguments.length;
var i__4737__auto___59030 = (0);
while(true){
if((i__4737__auto___59030 < len__4736__auto___59029)){
args__4742__auto__.push((arguments[i__4737__auto___59030]));

var G__59031 = (i__4737__auto___59030 + (1));
i__4737__auto___59030 = G__59031;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58415 = conformed_args__56786__auto__;
var map__58415__$1 = (((((!((map__58415 == null))))?(((((map__58415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58415):map__58415);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq58414){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59032 = arguments.length;
var i__4737__auto___59033 = (0);
while(true){
if((i__4737__auto___59033 < len__4736__auto___59032)){
args__4742__auto__.push((arguments[i__4737__auto___59033]));

var G__59034 = (i__4737__auto___59033 + (1));
i__4737__auto___59033 = G__59034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58418 = conformed_args__56786__auto__;
var map__58418__$1 = (((((!((map__58418 == null))))?(((((map__58418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58418):map__58418);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq58417){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58417));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59035 = arguments.length;
var i__4737__auto___59036 = (0);
while(true){
if((i__4737__auto___59036 < len__4736__auto___59035)){
args__4742__auto__.push((arguments[i__4737__auto___59036]));

var G__59037 = (i__4737__auto___59036 + (1));
i__4737__auto___59036 = G__59037;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58421 = conformed_args__56786__auto__;
var map__58421__$1 = (((((!((map__58421 == null))))?(((((map__58421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58421):map__58421);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq58420){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58420));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59038 = arguments.length;
var i__4737__auto___59039 = (0);
while(true){
if((i__4737__auto___59039 < len__4736__auto___59038)){
args__4742__auto__.push((arguments[i__4737__auto___59039]));

var G__59040 = (i__4737__auto___59039 + (1));
i__4737__auto___59039 = G__59040;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58424 = conformed_args__56786__auto__;
var map__58424__$1 = (((((!((map__58424 == null))))?(((((map__58424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58424):map__58424);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq58423){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58423));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59041 = arguments.length;
var i__4737__auto___59042 = (0);
while(true){
if((i__4737__auto___59042 < len__4736__auto___59041)){
args__4742__auto__.push((arguments[i__4737__auto___59042]));

var G__59043 = (i__4737__auto___59042 + (1));
i__4737__auto___59042 = G__59043;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58427 = conformed_args__56786__auto__;
var map__58427__$1 = (((((!((map__58427 == null))))?(((((map__58427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58427):map__58427);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq58426){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58426));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59044 = arguments.length;
var i__4737__auto___59045 = (0);
while(true){
if((i__4737__auto___59045 < len__4736__auto___59044)){
args__4742__auto__.push((arguments[i__4737__auto___59045]));

var G__59046 = (i__4737__auto___59045 + (1));
i__4737__auto___59045 = G__59046;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58430 = conformed_args__56786__auto__;
var map__58430__$1 = (((((!((map__58430 == null))))?(((((map__58430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58430):map__58430);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq58429){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58429));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59047 = arguments.length;
var i__4737__auto___59048 = (0);
while(true){
if((i__4737__auto___59048 < len__4736__auto___59047)){
args__4742__auto__.push((arguments[i__4737__auto___59048]));

var G__59049 = (i__4737__auto___59048 + (1));
i__4737__auto___59048 = G__59049;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58433 = conformed_args__56786__auto__;
var map__58433__$1 = (((((!((map__58433 == null))))?(((((map__58433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58433):map__58433);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq58432){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58432));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59050 = arguments.length;
var i__4737__auto___59051 = (0);
while(true){
if((i__4737__auto___59051 < len__4736__auto___59050)){
args__4742__auto__.push((arguments[i__4737__auto___59051]));

var G__59052 = (i__4737__auto___59051 + (1));
i__4737__auto___59051 = G__59052;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58436 = conformed_args__56786__auto__;
var map__58436__$1 = (((((!((map__58436 == null))))?(((((map__58436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58436):map__58436);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq58435){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58435));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59053 = arguments.length;
var i__4737__auto___59054 = (0);
while(true){
if((i__4737__auto___59054 < len__4736__auto___59053)){
args__4742__auto__.push((arguments[i__4737__auto___59054]));

var G__59055 = (i__4737__auto___59054 + (1));
i__4737__auto___59054 = G__59055;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58439 = conformed_args__56786__auto__;
var map__58439__$1 = (((((!((map__58439 == null))))?(((((map__58439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58439):map__58439);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq58438){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58438));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59056 = arguments.length;
var i__4737__auto___59057 = (0);
while(true){
if((i__4737__auto___59057 < len__4736__auto___59056)){
args__4742__auto__.push((arguments[i__4737__auto___59057]));

var G__59058 = (i__4737__auto___59057 + (1));
i__4737__auto___59057 = G__59058;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58442 = conformed_args__56786__auto__;
var map__58442__$1 = (((((!((map__58442 == null))))?(((((map__58442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58442):map__58442);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq58441){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58441));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59063 = arguments.length;
var i__4737__auto___59064 = (0);
while(true){
if((i__4737__auto___59064 < len__4736__auto___59063)){
args__4742__auto__.push((arguments[i__4737__auto___59064]));

var G__59066 = (i__4737__auto___59064 + (1));
i__4737__auto___59064 = G__59066;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58445 = conformed_args__56786__auto__;
var map__58445__$1 = (((((!((map__58445 == null))))?(((((map__58445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58445):map__58445);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58445__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq58444){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58444));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59067 = arguments.length;
var i__4737__auto___59068 = (0);
while(true){
if((i__4737__auto___59068 < len__4736__auto___59067)){
args__4742__auto__.push((arguments[i__4737__auto___59068]));

var G__59069 = (i__4737__auto___59068 + (1));
i__4737__auto___59068 = G__59069;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58448 = conformed_args__56786__auto__;
var map__58448__$1 = (((((!((map__58448 == null))))?(((((map__58448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58448):map__58448);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq58447){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58447));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59070 = arguments.length;
var i__4737__auto___59071 = (0);
while(true){
if((i__4737__auto___59071 < len__4736__auto___59070)){
args__4742__auto__.push((arguments[i__4737__auto___59071]));

var G__59072 = (i__4737__auto___59071 + (1));
i__4737__auto___59071 = G__59072;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58451 = conformed_args__56786__auto__;
var map__58451__$1 = (((((!((map__58451 == null))))?(((((map__58451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58451):map__58451);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq58450){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58450));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59073 = arguments.length;
var i__4737__auto___59074 = (0);
while(true){
if((i__4737__auto___59074 < len__4736__auto___59073)){
args__4742__auto__.push((arguments[i__4737__auto___59074]));

var G__59075 = (i__4737__auto___59074 + (1));
i__4737__auto___59074 = G__59075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58454 = conformed_args__56786__auto__;
var map__58454__$1 = (((((!((map__58454 == null))))?(((((map__58454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58454):map__58454);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq58453){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58453));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59082 = arguments.length;
var i__4737__auto___59083 = (0);
while(true){
if((i__4737__auto___59083 < len__4736__auto___59082)){
args__4742__auto__.push((arguments[i__4737__auto___59083]));

var G__59084 = (i__4737__auto___59083 + (1));
i__4737__auto___59083 = G__59084;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58457 = conformed_args__56786__auto__;
var map__58457__$1 = (((((!((map__58457 == null))))?(((((map__58457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58457):map__58457);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq58456){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58456));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59085 = arguments.length;
var i__4737__auto___59086 = (0);
while(true){
if((i__4737__auto___59086 < len__4736__auto___59085)){
args__4742__auto__.push((arguments[i__4737__auto___59086]));

var G__59087 = (i__4737__auto___59086 + (1));
i__4737__auto___59086 = G__59087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58460 = conformed_args__56786__auto__;
var map__58460__$1 = (((((!((map__58460 == null))))?(((((map__58460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58460):map__58460);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq58459){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58459));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59090 = arguments.length;
var i__4737__auto___59091 = (0);
while(true){
if((i__4737__auto___59091 < len__4736__auto___59090)){
args__4742__auto__.push((arguments[i__4737__auto___59091]));

var G__59092 = (i__4737__auto___59091 + (1));
i__4737__auto___59091 = G__59092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58463 = conformed_args__56786__auto__;
var map__58463__$1 = (((((!((map__58463 == null))))?(((((map__58463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58463):map__58463);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq58462){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58462));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59097 = arguments.length;
var i__4737__auto___59098 = (0);
while(true){
if((i__4737__auto___59098 < len__4736__auto___59097)){
args__4742__auto__.push((arguments[i__4737__auto___59098]));

var G__59099 = (i__4737__auto___59098 + (1));
i__4737__auto___59098 = G__59099;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58466 = conformed_args__56786__auto__;
var map__58466__$1 = (((((!((map__58466 == null))))?(((((map__58466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58466):map__58466);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq58465){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59101 = arguments.length;
var i__4737__auto___59102 = (0);
while(true){
if((i__4737__auto___59102 < len__4736__auto___59101)){
args__4742__auto__.push((arguments[i__4737__auto___59102]));

var G__59103 = (i__4737__auto___59102 + (1));
i__4737__auto___59102 = G__59103;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58469 = conformed_args__56786__auto__;
var map__58469__$1 = (((((!((map__58469 == null))))?(((((map__58469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58469):map__58469);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq58468){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58468));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59109 = arguments.length;
var i__4737__auto___59110 = (0);
while(true){
if((i__4737__auto___59110 < len__4736__auto___59109)){
args__4742__auto__.push((arguments[i__4737__auto___59110]));

var G__59111 = (i__4737__auto___59110 + (1));
i__4737__auto___59110 = G__59111;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58472 = conformed_args__56786__auto__;
var map__58472__$1 = (((((!((map__58472 == null))))?(((((map__58472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58472):map__58472);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq58471){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58471));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59112 = arguments.length;
var i__4737__auto___59113 = (0);
while(true){
if((i__4737__auto___59113 < len__4736__auto___59112)){
args__4742__auto__.push((arguments[i__4737__auto___59113]));

var G__59114 = (i__4737__auto___59113 + (1));
i__4737__auto___59113 = G__59114;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58475 = conformed_args__56786__auto__;
var map__58475__$1 = (((((!((map__58475 == null))))?(((((map__58475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58475):map__58475);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq58474){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59121 = arguments.length;
var i__4737__auto___59122 = (0);
while(true){
if((i__4737__auto___59122 < len__4736__auto___59121)){
args__4742__auto__.push((arguments[i__4737__auto___59122]));

var G__59123 = (i__4737__auto___59122 + (1));
i__4737__auto___59122 = G__59123;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58478 = conformed_args__56786__auto__;
var map__58478__$1 = (((((!((map__58478 == null))))?(((((map__58478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58478):map__58478);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq58477){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59126 = arguments.length;
var i__4737__auto___59127 = (0);
while(true){
if((i__4737__auto___59127 < len__4736__auto___59126)){
args__4742__auto__.push((arguments[i__4737__auto___59127]));

var G__59128 = (i__4737__auto___59127 + (1));
i__4737__auto___59127 = G__59128;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58481 = conformed_args__56786__auto__;
var map__58481__$1 = (((((!((map__58481 == null))))?(((((map__58481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58481):map__58481);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq58480){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58480));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59133 = arguments.length;
var i__4737__auto___59134 = (0);
while(true){
if((i__4737__auto___59134 < len__4736__auto___59133)){
args__4742__auto__.push((arguments[i__4737__auto___59134]));

var G__59135 = (i__4737__auto___59134 + (1));
i__4737__auto___59134 = G__59135;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58484 = conformed_args__56786__auto__;
var map__58484__$1 = (((((!((map__58484 == null))))?(((((map__58484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58484):map__58484);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq58483){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59138 = arguments.length;
var i__4737__auto___59139 = (0);
while(true){
if((i__4737__auto___59139 < len__4736__auto___59138)){
args__4742__auto__.push((arguments[i__4737__auto___59139]));

var G__59140 = (i__4737__auto___59139 + (1));
i__4737__auto___59139 = G__59140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58487 = conformed_args__56786__auto__;
var map__58487__$1 = (((((!((map__58487 == null))))?(((((map__58487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58487):map__58487);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq58486){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58486));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59141 = arguments.length;
var i__4737__auto___59142 = (0);
while(true){
if((i__4737__auto___59142 < len__4736__auto___59141)){
args__4742__auto__.push((arguments[i__4737__auto___59142]));

var G__59143 = (i__4737__auto___59142 + (1));
i__4737__auto___59142 = G__59143;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58490 = conformed_args__56786__auto__;
var map__58490__$1 = (((((!((map__58490 == null))))?(((((map__58490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58490):map__58490);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq58489){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58489));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59148 = arguments.length;
var i__4737__auto___59149 = (0);
while(true){
if((i__4737__auto___59149 < len__4736__auto___59148)){
args__4742__auto__.push((arguments[i__4737__auto___59149]));

var G__59150 = (i__4737__auto___59149 + (1));
i__4737__auto___59149 = G__59150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58493 = conformed_args__56786__auto__;
var map__58493__$1 = (((((!((map__58493 == null))))?(((((map__58493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58493):map__58493);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq58492){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58492));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59153 = arguments.length;
var i__4737__auto___59154 = (0);
while(true){
if((i__4737__auto___59154 < len__4736__auto___59153)){
args__4742__auto__.push((arguments[i__4737__auto___59154]));

var G__59155 = (i__4737__auto___59154 + (1));
i__4737__auto___59154 = G__59155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58496 = conformed_args__56786__auto__;
var map__58496__$1 = (((((!((map__58496 == null))))?(((((map__58496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58496):map__58496);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq58495){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58495));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59156 = arguments.length;
var i__4737__auto___59157 = (0);
while(true){
if((i__4737__auto___59157 < len__4736__auto___59156)){
args__4742__auto__.push((arguments[i__4737__auto___59157]));

var G__59158 = (i__4737__auto___59157 + (1));
i__4737__auto___59157 = G__59158;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58499 = conformed_args__56786__auto__;
var map__58499__$1 = (((((!((map__58499 == null))))?(((((map__58499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58499):map__58499);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq58498){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58498));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59165 = arguments.length;
var i__4737__auto___59166 = (0);
while(true){
if((i__4737__auto___59166 < len__4736__auto___59165)){
args__4742__auto__.push((arguments[i__4737__auto___59166]));

var G__59167 = (i__4737__auto___59166 + (1));
i__4737__auto___59166 = G__59167;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58502 = conformed_args__56786__auto__;
var map__58502__$1 = (((((!((map__58502 == null))))?(((((map__58502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58502):map__58502);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq58501){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59168 = arguments.length;
var i__4737__auto___59169 = (0);
while(true){
if((i__4737__auto___59169 < len__4736__auto___59168)){
args__4742__auto__.push((arguments[i__4737__auto___59169]));

var G__59170 = (i__4737__auto___59169 + (1));
i__4737__auto___59169 = G__59170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58505 = conformed_args__56786__auto__;
var map__58505__$1 = (((((!((map__58505 == null))))?(((((map__58505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58505):map__58505);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq58504){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58504));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59176 = arguments.length;
var i__4737__auto___59177 = (0);
while(true){
if((i__4737__auto___59177 < len__4736__auto___59176)){
args__4742__auto__.push((arguments[i__4737__auto___59177]));

var G__59178 = (i__4737__auto___59177 + (1));
i__4737__auto___59177 = G__59178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58508 = conformed_args__56786__auto__;
var map__58508__$1 = (((((!((map__58508 == null))))?(((((map__58508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58508):map__58508);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq58507){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58507));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59180 = arguments.length;
var i__4737__auto___59181 = (0);
while(true){
if((i__4737__auto___59181 < len__4736__auto___59180)){
args__4742__auto__.push((arguments[i__4737__auto___59181]));

var G__59182 = (i__4737__auto___59181 + (1));
i__4737__auto___59181 = G__59182;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58511 = conformed_args__56786__auto__;
var map__58511__$1 = (((((!((map__58511 == null))))?(((((map__58511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58511):map__58511);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq58510){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58510));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59192 = arguments.length;
var i__4737__auto___59193 = (0);
while(true){
if((i__4737__auto___59193 < len__4736__auto___59192)){
args__4742__auto__.push((arguments[i__4737__auto___59193]));

var G__59194 = (i__4737__auto___59193 + (1));
i__4737__auto___59193 = G__59194;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58514 = conformed_args__56786__auto__;
var map__58514__$1 = (((((!((map__58514 == null))))?(((((map__58514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58514):map__58514);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq58513){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58513));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59195 = arguments.length;
var i__4737__auto___59196 = (0);
while(true){
if((i__4737__auto___59196 < len__4736__auto___59195)){
args__4742__auto__.push((arguments[i__4737__auto___59196]));

var G__59197 = (i__4737__auto___59196 + (1));
i__4737__auto___59196 = G__59197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58517 = conformed_args__56786__auto__;
var map__58517__$1 = (((((!((map__58517 == null))))?(((((map__58517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58517):map__58517);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq58516){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58516));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59198 = arguments.length;
var i__4737__auto___59199 = (0);
while(true){
if((i__4737__auto___59199 < len__4736__auto___59198)){
args__4742__auto__.push((arguments[i__4737__auto___59199]));

var G__59200 = (i__4737__auto___59199 + (1));
i__4737__auto___59199 = G__59200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58520 = conformed_args__56786__auto__;
var map__58520__$1 = (((((!((map__58520 == null))))?(((((map__58520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58520):map__58520);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq58519){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58519));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59202 = arguments.length;
var i__4737__auto___59203 = (0);
while(true){
if((i__4737__auto___59203 < len__4736__auto___59202)){
args__4742__auto__.push((arguments[i__4737__auto___59203]));

var G__59204 = (i__4737__auto___59203 + (1));
i__4737__auto___59203 = G__59204;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58523 = conformed_args__56786__auto__;
var map__58523__$1 = (((((!((map__58523 == null))))?(((((map__58523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58523):map__58523);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58523__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58523__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58523__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq58522){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58522));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59206 = arguments.length;
var i__4737__auto___59207 = (0);
while(true){
if((i__4737__auto___59207 < len__4736__auto___59206)){
args__4742__auto__.push((arguments[i__4737__auto___59207]));

var G__59208 = (i__4737__auto___59207 + (1));
i__4737__auto___59207 = G__59208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58526 = conformed_args__56786__auto__;
var map__58526__$1 = (((((!((map__58526 == null))))?(((((map__58526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58526):map__58526);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq58525){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58525));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59214 = arguments.length;
var i__4737__auto___59215 = (0);
while(true){
if((i__4737__auto___59215 < len__4736__auto___59214)){
args__4742__auto__.push((arguments[i__4737__auto___59215]));

var G__59216 = (i__4737__auto___59215 + (1));
i__4737__auto___59215 = G__59216;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58529 = conformed_args__56786__auto__;
var map__58529__$1 = (((((!((map__58529 == null))))?(((((map__58529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58529):map__58529);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq58528){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58528));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59217 = arguments.length;
var i__4737__auto___59218 = (0);
while(true){
if((i__4737__auto___59218 < len__4736__auto___59217)){
args__4742__auto__.push((arguments[i__4737__auto___59218]));

var G__59219 = (i__4737__auto___59218 + (1));
i__4737__auto___59218 = G__59219;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58532 = conformed_args__56786__auto__;
var map__58532__$1 = (((((!((map__58532 == null))))?(((((map__58532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58532):map__58532);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq58531){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59220 = arguments.length;
var i__4737__auto___59221 = (0);
while(true){
if((i__4737__auto___59221 < len__4736__auto___59220)){
args__4742__auto__.push((arguments[i__4737__auto___59221]));

var G__59222 = (i__4737__auto___59221 + (1));
i__4737__auto___59221 = G__59222;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58535 = conformed_args__56786__auto__;
var map__58535__$1 = (((((!((map__58535 == null))))?(((((map__58535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58535):map__58535);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq58534){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58534));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59232 = arguments.length;
var i__4737__auto___59233 = (0);
while(true){
if((i__4737__auto___59233 < len__4736__auto___59232)){
args__4742__auto__.push((arguments[i__4737__auto___59233]));

var G__59234 = (i__4737__auto___59233 + (1));
i__4737__auto___59233 = G__59234;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58538 = conformed_args__56786__auto__;
var map__58538__$1 = (((((!((map__58538 == null))))?(((((map__58538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58538):map__58538);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq58537){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58537));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59235 = arguments.length;
var i__4737__auto___59236 = (0);
while(true){
if((i__4737__auto___59236 < len__4736__auto___59235)){
args__4742__auto__.push((arguments[i__4737__auto___59236]));

var G__59237 = (i__4737__auto___59236 + (1));
i__4737__auto___59236 = G__59237;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58541 = conformed_args__56786__auto__;
var map__58541__$1 = (((((!((map__58541 == null))))?(((((map__58541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58541):map__58541);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq58540){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58540));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59241 = arguments.length;
var i__4737__auto___59242 = (0);
while(true){
if((i__4737__auto___59242 < len__4736__auto___59241)){
args__4742__auto__.push((arguments[i__4737__auto___59242]));

var G__59243 = (i__4737__auto___59242 + (1));
i__4737__auto___59242 = G__59243;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58544 = conformed_args__56786__auto__;
var map__58544__$1 = (((((!((map__58544 == null))))?(((((map__58544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58544):map__58544);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq58543){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58543));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59244 = arguments.length;
var i__4737__auto___59245 = (0);
while(true){
if((i__4737__auto___59245 < len__4736__auto___59244)){
args__4742__auto__.push((arguments[i__4737__auto___59245]));

var G__59246 = (i__4737__auto___59245 + (1));
i__4737__auto___59245 = G__59246;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58547 = conformed_args__56786__auto__;
var map__58547__$1 = (((((!((map__58547 == null))))?(((((map__58547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58547):map__58547);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq58546){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58546));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59250 = arguments.length;
var i__4737__auto___59251 = (0);
while(true){
if((i__4737__auto___59251 < len__4736__auto___59250)){
args__4742__auto__.push((arguments[i__4737__auto___59251]));

var G__59252 = (i__4737__auto___59251 + (1));
i__4737__auto___59251 = G__59252;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58550 = conformed_args__56786__auto__;
var map__58550__$1 = (((((!((map__58550 == null))))?(((((map__58550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58550):map__58550);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq58549){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58549));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59253 = arguments.length;
var i__4737__auto___59254 = (0);
while(true){
if((i__4737__auto___59254 < len__4736__auto___59253)){
args__4742__auto__.push((arguments[i__4737__auto___59254]));

var G__59255 = (i__4737__auto___59254 + (1));
i__4737__auto___59254 = G__59255;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58553 = conformed_args__56786__auto__;
var map__58553__$1 = (((((!((map__58553 == null))))?(((((map__58553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58553):map__58553);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58553__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58553__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58553__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq58552){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58552));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59256 = arguments.length;
var i__4737__auto___59258 = (0);
while(true){
if((i__4737__auto___59258 < len__4736__auto___59256)){
args__4742__auto__.push((arguments[i__4737__auto___59258]));

var G__59259 = (i__4737__auto___59258 + (1));
i__4737__auto___59258 = G__59259;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58556 = conformed_args__56786__auto__;
var map__58556__$1 = (((((!((map__58556 == null))))?(((((map__58556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58556):map__58556);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq58555){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58555));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59260 = arguments.length;
var i__4737__auto___59261 = (0);
while(true){
if((i__4737__auto___59261 < len__4736__auto___59260)){
args__4742__auto__.push((arguments[i__4737__auto___59261]));

var G__59262 = (i__4737__auto___59261 + (1));
i__4737__auto___59261 = G__59262;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58559 = conformed_args__56786__auto__;
var map__58559__$1 = (((((!((map__58559 == null))))?(((((map__58559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58559):map__58559);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq58558){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58558));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59263 = arguments.length;
var i__4737__auto___59264 = (0);
while(true){
if((i__4737__auto___59264 < len__4736__auto___59263)){
args__4742__auto__.push((arguments[i__4737__auto___59264]));

var G__59265 = (i__4737__auto___59264 + (1));
i__4737__auto___59264 = G__59265;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58562 = conformed_args__56786__auto__;
var map__58562__$1 = (((((!((map__58562 == null))))?(((((map__58562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58562):map__58562);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq58561){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58561));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59268 = arguments.length;
var i__4737__auto___59269 = (0);
while(true){
if((i__4737__auto___59269 < len__4736__auto___59268)){
args__4742__auto__.push((arguments[i__4737__auto___59269]));

var G__59270 = (i__4737__auto___59269 + (1));
i__4737__auto___59269 = G__59270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58565 = conformed_args__56786__auto__;
var map__58565__$1 = (((((!((map__58565 == null))))?(((((map__58565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58565):map__58565);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq58564){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59271 = arguments.length;
var i__4737__auto___59272 = (0);
while(true){
if((i__4737__auto___59272 < len__4736__auto___59271)){
args__4742__auto__.push((arguments[i__4737__auto___59272]));

var G__59275 = (i__4737__auto___59272 + (1));
i__4737__auto___59272 = G__59275;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58568 = conformed_args__56786__auto__;
var map__58568__$1 = (((((!((map__58568 == null))))?(((((map__58568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58568):map__58568);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq58567){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58567));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59280 = arguments.length;
var i__4737__auto___59281 = (0);
while(true){
if((i__4737__auto___59281 < len__4736__auto___59280)){
args__4742__auto__.push((arguments[i__4737__auto___59281]));

var G__59282 = (i__4737__auto___59281 + (1));
i__4737__auto___59281 = G__59282;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58571 = conformed_args__56786__auto__;
var map__58571__$1 = (((((!((map__58571 == null))))?(((((map__58571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58571):map__58571);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq58570){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58570));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59283 = arguments.length;
var i__4737__auto___59284 = (0);
while(true){
if((i__4737__auto___59284 < len__4736__auto___59283)){
args__4742__auto__.push((arguments[i__4737__auto___59284]));

var G__59285 = (i__4737__auto___59284 + (1));
i__4737__auto___59284 = G__59285;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58574 = conformed_args__56786__auto__;
var map__58574__$1 = (((((!((map__58574 == null))))?(((((map__58574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58574):map__58574);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq58573){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59286 = arguments.length;
var i__4737__auto___59287 = (0);
while(true){
if((i__4737__auto___59287 < len__4736__auto___59286)){
args__4742__auto__.push((arguments[i__4737__auto___59287]));

var G__59288 = (i__4737__auto___59287 + (1));
i__4737__auto___59287 = G__59288;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58577 = conformed_args__56786__auto__;
var map__58577__$1 = (((((!((map__58577 == null))))?(((((map__58577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58577):map__58577);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq58576){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59289 = arguments.length;
var i__4737__auto___59290 = (0);
while(true){
if((i__4737__auto___59290 < len__4736__auto___59289)){
args__4742__auto__.push((arguments[i__4737__auto___59290]));

var G__59291 = (i__4737__auto___59290 + (1));
i__4737__auto___59290 = G__59291;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58580 = conformed_args__56786__auto__;
var map__58580__$1 = (((((!((map__58580 == null))))?(((((map__58580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58580):map__58580);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq58579){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59292 = arguments.length;
var i__4737__auto___59293 = (0);
while(true){
if((i__4737__auto___59293 < len__4736__auto___59292)){
args__4742__auto__.push((arguments[i__4737__auto___59293]));

var G__59294 = (i__4737__auto___59293 + (1));
i__4737__auto___59293 = G__59294;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58583 = conformed_args__56786__auto__;
var map__58583__$1 = (((((!((map__58583 == null))))?(((((map__58583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58583):map__58583);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq58582){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58582));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59295 = arguments.length;
var i__4737__auto___59296 = (0);
while(true){
if((i__4737__auto___59296 < len__4736__auto___59295)){
args__4742__auto__.push((arguments[i__4737__auto___59296]));

var G__59297 = (i__4737__auto___59296 + (1));
i__4737__auto___59296 = G__59297;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58586 = conformed_args__56786__auto__;
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq58585){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59298 = arguments.length;
var i__4737__auto___59299 = (0);
while(true){
if((i__4737__auto___59299 < len__4736__auto___59298)){
args__4742__auto__.push((arguments[i__4737__auto___59299]));

var G__59300 = (i__4737__auto___59299 + (1));
i__4737__auto___59299 = G__59300;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58589 = conformed_args__56786__auto__;
var map__58589__$1 = (((((!((map__58589 == null))))?(((((map__58589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58589):map__58589);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq58588){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59301 = arguments.length;
var i__4737__auto___59302 = (0);
while(true){
if((i__4737__auto___59302 < len__4736__auto___59301)){
args__4742__auto__.push((arguments[i__4737__auto___59302]));

var G__59303 = (i__4737__auto___59302 + (1));
i__4737__auto___59302 = G__59303;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58592 = conformed_args__56786__auto__;
var map__58592__$1 = (((((!((map__58592 == null))))?(((((map__58592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58592):map__58592);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq58591){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59304 = arguments.length;
var i__4737__auto___59305 = (0);
while(true){
if((i__4737__auto___59305 < len__4736__auto___59304)){
args__4742__auto__.push((arguments[i__4737__auto___59305]));

var G__59306 = (i__4737__auto___59305 + (1));
i__4737__auto___59305 = G__59306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58595 = conformed_args__56786__auto__;
var map__58595__$1 = (((((!((map__58595 == null))))?(((((map__58595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58595):map__58595);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq58594){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58594));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59307 = arguments.length;
var i__4737__auto___59308 = (0);
while(true){
if((i__4737__auto___59308 < len__4736__auto___59307)){
args__4742__auto__.push((arguments[i__4737__auto___59308]));

var G__59309 = (i__4737__auto___59308 + (1));
i__4737__auto___59308 = G__59309;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58598 = conformed_args__56786__auto__;
var map__58598__$1 = (((((!((map__58598 == null))))?(((((map__58598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58598):map__58598);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq58597){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59310 = arguments.length;
var i__4737__auto___59311 = (0);
while(true){
if((i__4737__auto___59311 < len__4736__auto___59310)){
args__4742__auto__.push((arguments[i__4737__auto___59311]));

var G__59312 = (i__4737__auto___59311 + (1));
i__4737__auto___59311 = G__59312;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58601 = conformed_args__56786__auto__;
var map__58601__$1 = (((((!((map__58601 == null))))?(((((map__58601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58601):map__58601);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq58600){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58600));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59313 = arguments.length;
var i__4737__auto___59314 = (0);
while(true){
if((i__4737__auto___59314 < len__4736__auto___59313)){
args__4742__auto__.push((arguments[i__4737__auto___59314]));

var G__59315 = (i__4737__auto___59314 + (1));
i__4737__auto___59314 = G__59315;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58604 = conformed_args__56786__auto__;
var map__58604__$1 = (((((!((map__58604 == null))))?(((((map__58604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58604):map__58604);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq58603){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58603));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59316 = arguments.length;
var i__4737__auto___59317 = (0);
while(true){
if((i__4737__auto___59317 < len__4736__auto___59316)){
args__4742__auto__.push((arguments[i__4737__auto___59317]));

var G__59318 = (i__4737__auto___59317 + (1));
i__4737__auto___59317 = G__59318;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58607 = conformed_args__56786__auto__;
var map__58607__$1 = (((((!((map__58607 == null))))?(((((map__58607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58607):map__58607);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq58606){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58606));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59319 = arguments.length;
var i__4737__auto___59320 = (0);
while(true){
if((i__4737__auto___59320 < len__4736__auto___59319)){
args__4742__auto__.push((arguments[i__4737__auto___59320]));

var G__59321 = (i__4737__auto___59320 + (1));
i__4737__auto___59320 = G__59321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58610 = conformed_args__56786__auto__;
var map__58610__$1 = (((((!((map__58610 == null))))?(((((map__58610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58610):map__58610);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq58609){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58609));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59322 = arguments.length;
var i__4737__auto___59323 = (0);
while(true){
if((i__4737__auto___59323 < len__4736__auto___59322)){
args__4742__auto__.push((arguments[i__4737__auto___59323]));

var G__59324 = (i__4737__auto___59323 + (1));
i__4737__auto___59323 = G__59324;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58613 = conformed_args__56786__auto__;
var map__58613__$1 = (((((!((map__58613 == null))))?(((((map__58613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58613):map__58613);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq58612){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58612));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59325 = arguments.length;
var i__4737__auto___59326 = (0);
while(true){
if((i__4737__auto___59326 < len__4736__auto___59325)){
args__4742__auto__.push((arguments[i__4737__auto___59326]));

var G__59327 = (i__4737__auto___59326 + (1));
i__4737__auto___59326 = G__59327;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58616 = conformed_args__56786__auto__;
var map__58616__$1 = (((((!((map__58616 == null))))?(((((map__58616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58616):map__58616);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq58615){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58615));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59331 = arguments.length;
var i__4737__auto___59332 = (0);
while(true){
if((i__4737__auto___59332 < len__4736__auto___59331)){
args__4742__auto__.push((arguments[i__4737__auto___59332]));

var G__59333 = (i__4737__auto___59332 + (1));
i__4737__auto___59332 = G__59333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58619 = conformed_args__56786__auto__;
var map__58619__$1 = (((((!((map__58619 == null))))?(((((map__58619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58619):map__58619);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq58618){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58618));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59336 = arguments.length;
var i__4737__auto___59337 = (0);
while(true){
if((i__4737__auto___59337 < len__4736__auto___59336)){
args__4742__auto__.push((arguments[i__4737__auto___59337]));

var G__59338 = (i__4737__auto___59337 + (1));
i__4737__auto___59337 = G__59338;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58622 = conformed_args__56786__auto__;
var map__58622__$1 = (((((!((map__58622 == null))))?(((((map__58622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58622):map__58622);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq58621){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59339 = arguments.length;
var i__4737__auto___59340 = (0);
while(true){
if((i__4737__auto___59340 < len__4736__auto___59339)){
args__4742__auto__.push((arguments[i__4737__auto___59340]));

var G__59341 = (i__4737__auto___59340 + (1));
i__4737__auto___59340 = G__59341;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58625 = conformed_args__56786__auto__;
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq58624){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58624));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59344 = arguments.length;
var i__4737__auto___59345 = (0);
while(true){
if((i__4737__auto___59345 < len__4736__auto___59344)){
args__4742__auto__.push((arguments[i__4737__auto___59345]));

var G__59346 = (i__4737__auto___59345 + (1));
i__4737__auto___59345 = G__59346;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58628 = conformed_args__56786__auto__;
var map__58628__$1 = (((((!((map__58628 == null))))?(((((map__58628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58628):map__58628);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq58627){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59347 = arguments.length;
var i__4737__auto___59348 = (0);
while(true){
if((i__4737__auto___59348 < len__4736__auto___59347)){
args__4742__auto__.push((arguments[i__4737__auto___59348]));

var G__59349 = (i__4737__auto___59348 + (1));
i__4737__auto___59348 = G__59349;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58631 = conformed_args__56786__auto__;
var map__58631__$1 = (((((!((map__58631 == null))))?(((((map__58631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58631):map__58631);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq58630){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58630));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59350 = arguments.length;
var i__4737__auto___59351 = (0);
while(true){
if((i__4737__auto___59351 < len__4736__auto___59350)){
args__4742__auto__.push((arguments[i__4737__auto___59351]));

var G__59352 = (i__4737__auto___59351 + (1));
i__4737__auto___59351 = G__59352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58634 = conformed_args__56786__auto__;
var map__58634__$1 = (((((!((map__58634 == null))))?(((((map__58634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58634):map__58634);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq58633){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58633));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59353 = arguments.length;
var i__4737__auto___59354 = (0);
while(true){
if((i__4737__auto___59354 < len__4736__auto___59353)){
args__4742__auto__.push((arguments[i__4737__auto___59354]));

var G__59355 = (i__4737__auto___59354 + (1));
i__4737__auto___59354 = G__59355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58637 = conformed_args__56786__auto__;
var map__58637__$1 = (((((!((map__58637 == null))))?(((((map__58637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58637):map__58637);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq58636){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58636));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59356 = arguments.length;
var i__4737__auto___59357 = (0);
while(true){
if((i__4737__auto___59357 < len__4736__auto___59356)){
args__4742__auto__.push((arguments[i__4737__auto___59357]));

var G__59358 = (i__4737__auto___59357 + (1));
i__4737__auto___59357 = G__59358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58640 = conformed_args__56786__auto__;
var map__58640__$1 = (((((!((map__58640 == null))))?(((((map__58640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58640):map__58640);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq58639){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59360 = arguments.length;
var i__4737__auto___59361 = (0);
while(true){
if((i__4737__auto___59361 < len__4736__auto___59360)){
args__4742__auto__.push((arguments[i__4737__auto___59361]));

var G__59362 = (i__4737__auto___59361 + (1));
i__4737__auto___59361 = G__59362;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56786__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58643 = conformed_args__56786__auto__;
var map__58643__$1 = (((((!((map__58643 == null))))?(((((map__58643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58643):map__58643);
var children__56788__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56787__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__56789__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56788__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56788__auto__);
var attrs_value__56790__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__56787__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56790__auto__], null),children__56788__auto____$1),css__56789__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq58642){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58642));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
