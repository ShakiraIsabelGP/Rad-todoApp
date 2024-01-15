goog.provide('com.fulcrologic.rad.container');
/**
 * Returns a sequence of [id cls] pairs for each child (i.e. the seq of the children setting)
 */
com.fulcrologic.rad.container.id_child_pairs = (function com$fulcrologic$rad$container$id_child_pairs(container){
return cljs.core.seq((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422)) : com.fulcrologic.fulcro.components.component_options.call(null,container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422))));
});
/**
 * Returns a de-duped set of classes of the children of the given instance/class (using it's query)
 */
com.fulcrologic.rad.container.child_classes = (function com$fulcrologic$rad$container$child_classes(container){
return cljs.core.set(cljs.core.vals((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422)) : com.fulcrologic.fulcro.components.component_options.call(null,container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422)))));
});
com.fulcrologic.rad.container.merge_children = (function com$fulcrologic$rad$container$merge_children(env){
var container_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926));
var container_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926));
var merge_children_STAR_ = (function (s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,p__88860){
var vec__88861 = p__88860;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88861,(0),null);
var cls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88861,(1),null);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(cls) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,cls));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(container_ident,k);
return com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(state,cls,(function (){var or__4126__auto__ = (function (){var G__88866 = cls;
var G__88867 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__88866,G__88867) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__88866,G__88867));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace","replace",-786587770),path], 0));
}),s,com.fulcrologic.rad.container.id_child_pairs(container_class));
});
return com.fulcrologic.fulcro.ui_state_machines.apply_action(env,merge_children_STAR_);
});
com.fulcrologic.rad.container.start_children_BANG_ = (function com$fulcrologic$rad$container$start_children_BANG_(p__88868){
var map__88869 = p__88868;
var map__88869__$1 = (((((!((map__88869 == null))))?(((((map__88869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88869):map__88869);
var env = map__88869__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88869__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88869__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var container_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926));
var id_children = com.fulcrologic.rad.container.id_child_pairs(container_class);
var seq__88871_88927 = cljs.core.seq(id_children);
var chunk__88872_88928 = null;
var count__88873_88929 = (0);
var i__88874_88930 = (0);
while(true){
if((i__88874_88930 < count__88873_88929)){
var vec__88881_88931 = chunk__88872_88928.cljs$core$IIndexed$_nth$arity$2(null,i__88874_88930);
var id_88932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88881_88931,(0),null);
var c_88933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88881_88931,(1),null);
com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,c_88933,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event_data,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id_88932,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","externally-controlled?","com.fulcrologic.rad.report/externally-controlled?",607281641),true], 0)));


var G__88934 = seq__88871_88927;
var G__88935 = chunk__88872_88928;
var G__88936 = count__88873_88929;
var G__88937 = (i__88874_88930 + (1));
seq__88871_88927 = G__88934;
chunk__88872_88928 = G__88935;
count__88873_88929 = G__88936;
i__88874_88930 = G__88937;
continue;
} else {
var temp__5735__auto___88938 = cljs.core.seq(seq__88871_88927);
if(temp__5735__auto___88938){
var seq__88871_88939__$1 = temp__5735__auto___88938;
if(cljs.core.chunked_seq_QMARK_(seq__88871_88939__$1)){
var c__4556__auto___88940 = cljs.core.chunk_first(seq__88871_88939__$1);
var G__88941 = cljs.core.chunk_rest(seq__88871_88939__$1);
var G__88942 = c__4556__auto___88940;
var G__88943 = cljs.core.count(c__4556__auto___88940);
var G__88944 = (0);
seq__88871_88927 = G__88941;
chunk__88872_88928 = G__88942;
count__88873_88929 = G__88943;
i__88874_88930 = G__88944;
continue;
} else {
var vec__88884_88945 = cljs.core.first(seq__88871_88939__$1);
var id_88946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88884_88945,(0),null);
var c_88947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88884_88945,(1),null);
com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,c_88947,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event_data,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id_88946,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","externally-controlled?","com.fulcrologic.rad.report/externally-controlled?",607281641),true], 0)));


var G__88948 = cljs.core.next(seq__88871_88939__$1);
var G__88949 = null;
var G__88950 = (0);
var G__88951 = (0);
seq__88871_88927 = G__88948;
chunk__88872_88928 = G__88949;
count__88873_88929 = G__88950;
i__88874_88930 = G__88951;
continue;
}
} else {
}
}
break;
}

return env;
});
/**
 * Returns the report options from the current report actor.
 */
com.fulcrologic.rad.container.container_options = (function com$fulcrologic$rad$container$container_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___88952 = arguments.length;
var i__4737__auto___88953 = (0);
while(true){
if((i__4737__auto___88953 < len__4736__auto___88952)){
args__4742__auto__.push((arguments[i__4737__auto___88953]));

var G__88954 = (i__4737__auto___88953 + (1));
i__4737__auto___88953 = G__88954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.container.container_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.rad.container.container_options.cljs$core$IFn$_invoke$arity$variadic = (function (uism_env,k_or_ks){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.component_options,com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","container","actor/container",-1644380926)),k_or_ks);
}));

(com.fulcrologic.rad.container.container_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.container.container_options.cljs$lang$applyTo = (function (seq88887){
var G__88888 = cljs.core.first(seq88887);
var seq88887__$1 = cljs.core.next(seq88887);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88888,seq88887__$1);
}));

com.fulcrologic.rad.container.initialize_parameters = (function com$fulcrologic$rad$container$initialize_parameters(p__88889){
var map__88890 = p__88889;
var map__88890__$1 = (((((!((map__88890 == null))))?(((((map__88890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88890):map__88890);
var env = map__88890__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88890__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88890__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__88892 = com.fulcrologic.rad.routing.history.current_route(app);
var map__88892__$1 = (((((!((map__88892 == null))))?(((((map__88892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88892):map__88892);
var history_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88892__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__88893 = event_data;
var map__88893__$1 = (((((!((map__88893 == null))))?(((((map__88893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88893):map__88893);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88893__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926)));
return cljs.core.reduce_kv((function (new_env,control_key,p__88896){
var map__88897 = p__88896;
var map__88897__$1 = (((((!((map__88897 == null))))?(((((map__88897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88897):map__88897);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88897__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var v = ((cljs.core.contains_QMARK_(route_params,control_key))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(route_params,control_key):((cljs.core.contains_QMARK_(history_params,control_key))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(history_params,control_key):(((!((default_value == null))))?com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(default_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app], 0)):null)));
if((!((v == null)))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(new_env,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),control_key,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null),v], 0));
} else {
return new_env;
}
}),env,controls);
});
com.fulcrologic.rad.container.container_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.rad.container.start_children_BANG_(com.fulcrologic.rad.container.initialize_parameters(com.fulcrologic.rad.container.merge_children(env)));
})], null),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__88899){
var vec__88900 = p__88899;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88900,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88900,(1),null);
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(env__$1,(function (){var G__88903 = c;
var G__88904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id], null);
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__88903,G__88904) : com.fulcrologic.fulcro.components.get_ident.call(null,G__88903,G__88904));
})(),new cljs.core.Keyword("event","run","event/run",1832485709));
}),env,com.fulcrologic.rad.container.id_child_pairs(com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926))));
})], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.container","container-machine","com.fulcrologic.rad.container/container-machine",1724882138,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.container","container-machine","com.fulcrologic.rad.container/container-machine",1724882138,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.rad.container.start_children_BANG_(com.fulcrologic.rad.container.initialize_parameters(com.fulcrologic.rad.container.merge_children(env)));
})], null),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__88905){
var vec__88906 = p__88905;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88906,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88906,(1),null);
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(env__$1,(function (){var G__88909 = c;
var G__88910 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id], null);
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__88909,G__88910) : com.fulcrologic.fulcro.components.get_ident.call(null,G__88909,G__88910));
})(),new cljs.core.Keyword("event","run","event/run",1832485709));
}),env,com.fulcrologic.rad.container.id_child_pairs(com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926))));
})], null)], null)], null)], null)], null));
/**
 * Auto-render the content of a container. This is the automatic body of a container. If you supply no render body
 * to a container, this is what it will hold. Configurable through component options via `::container/layout-style`.  You can also do custom rendering
 * in the container, and call this to embed the generated UI.
 */
com.fulcrologic.rad.container.render_layout = (function com$fulcrologic$rad$container$render_layout(container_instance){
var map__88911 = com.fulcrologic.fulcro.components.any__GT_app(container_instance);
var map__88911__$1 = (((((!((map__88911 == null))))?(((((map__88911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88911):map__88911);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88911__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var layout_style = (function (){var or__4126__auto__ = (function (){var G__88914 = container_instance;
var G__88914__$1 = (((G__88914 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__88914) : com.fulcrologic.fulcro.components.component_options.call(null,G__88914)));
if((G__88914__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.container","layout-style","com.fulcrologic.rad.container/layout-style",-530499190).cljs$core$IFn$_invoke$arity$1(G__88914__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var layout = (function (){var G__88915 = runtime_atom;
var G__88915__$1 = (((G__88915 == null))?null:cljs.core.deref(G__88915));
var G__88915__$2 = (((G__88915__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__88915__$1));
var G__88915__$3 = (((G__88915__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.container","style->layout","com.fulcrologic.rad.container/style->layout",331968533).cljs$core$IFn$_invoke$arity$1(G__88915__$2));
if((G__88915__$3 == null)){
return null;
} else {
return (layout_style.cljs$core$IFn$_invoke$arity$1 ? layout_style.cljs$core$IFn$_invoke$arity$1(G__88915__$3) : layout_style.call(null,G__88915__$3));
}
})();
if(cljs.core.truth_(layout)){
return (layout.cljs$core$IFn$_invoke$arity$1 ? layout.cljs$core$IFn$_invoke$arity$1(container_instance) : layout.call(null,container_instance));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.container",null,120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for form layout style",layout_style], null);
}),null)),null,485398257,null);

return null;
}
});
com.fulcrologic.rad.container.start_container_BANG_ = (function com$fulcrologic$rad$container$start_container_BANG_(app,container_class,options){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.rad.container",null,124,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting container!"], null);
}),null)),null,-1199449131,null);

var container_ident = (function (){var G__88916 = container_class;
var G__88917 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__88916,G__88917) : com.fulcrologic.fulcro.components.get_ident.call(null,G__88916,G__88917));
})();
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,com.fulcrologic.rad.container.container_machine,container_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),container_class], null),options);
});
com.fulcrologic.rad.container.container_will_enter = (function com$fulcrologic$rad$container$container_will_enter(app,route_params,container_class){
var container_ident = (function (){var G__88918 = container_class;
var G__88919 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__88918,G__88919) : com.fulcrologic.fulcro.components.get_ident.call(null,G__88918,G__88919));
})();
return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(container_ident,(function (){
com.fulcrologic.rad.container.start_container_BANG_(app,container_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__88920 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),container_ident], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__88920) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__88920));
})()], null));
}));
});

//# sourceMappingURL=com.fulcrologic.rad.container.js.map
