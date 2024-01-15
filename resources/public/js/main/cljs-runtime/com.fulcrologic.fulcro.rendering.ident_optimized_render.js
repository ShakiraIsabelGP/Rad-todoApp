goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4115__auto__ = c;
if(cljs.core.truth_(and__4115__auto__)){
return ident;
} else {
return and__4115__auto__;
}
})())){
var map__66209 = app;
var map__66209__$1 = (((((!((map__66209 == null))))?(((((map__66209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66209):map__66209);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4126__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__66211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__66212 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__66211,G__66212) : com.fulcrologic.fulcro.components.computed.call(null,G__66211,G__66212));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1391631640,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__66213 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__66213) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__66213));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1828103906,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__66214 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__66215 = null;
var count__66216 = (0);
var i__66217 = (0);
while(true){
if((i__66217 < count__66216)){
var c = chunk__66215.cljs$core$IIndexed$_nth$arity$2(null,i__66217);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__66359 = seq__66214;
var G__66360 = chunk__66215;
var G__66361 = count__66216;
var G__66362 = (i__66217 + (1));
seq__66214 = G__66359;
chunk__66215 = G__66360;
count__66216 = G__66361;
i__66217 = G__66362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66214);
if(temp__5735__auto__){
var seq__66214__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66214__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66214__$1);
var G__66363 = cljs.core.chunk_rest(seq__66214__$1);
var G__66364 = c__4556__auto__;
var G__66365 = cljs.core.count(c__4556__auto__);
var G__66366 = (0);
seq__66214 = G__66363;
chunk__66215 = G__66364;
count__66216 = G__66365;
i__66217 = G__66366;
continue;
} else {
var c = cljs.core.first(seq__66214__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__66367 = cljs.core.next(seq__66214__$1);
var G__66368 = null;
var G__66369 = (0);
var G__66370 = (0);
seq__66214 = G__66367;
chunk__66215 = G__66368;
count__66216 = G__66369;
i__66217 = G__66370;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__66222 = app;
var map__66222__$1 = (((((!((map__66222 == null))))?(((((map__66222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66222):map__66222);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66222__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__66223 = cljs.core.deref(runtime_atom);
var map__66223__$1 = (((((!((map__66223 == null))))?(((((map__66223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66223):map__66223);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__66224 = indexes;
var map__66224__$1 = (((((!((map__66224 == null))))?(((((map__66224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66224):map__66224);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66224__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66224__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66224__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4126__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__66228 = cljs.core.seq(classes);
var chunk__66229 = null;
var count__66230 = (0);
var i__66231 = (0);
while(true){
if((i__66231 < count__66230)){
var class$ = chunk__66229.cljs$core$IIndexed$_nth$arity$2(null,i__66231);
var seq__66256_66372 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__66258_66373 = null;
var count__66259_66374 = (0);
var i__66260_66375 = (0);
while(true){
if((i__66260_66375 < count__66259_66374)){
var component_66376 = chunk__66258_66373.cljs$core$IIndexed$_nth$arity$2(null,i__66260_66375);
var component_ident_66377 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_66376) : com.fulcrologic.fulcro.components.get_ident.call(null,component_66376));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_66377,component_66376);


var G__66378 = seq__66256_66372;
var G__66379 = chunk__66258_66373;
var G__66380 = count__66259_66374;
var G__66381 = (i__66260_66375 + (1));
seq__66256_66372 = G__66378;
chunk__66258_66373 = G__66379;
count__66259_66374 = G__66380;
i__66260_66375 = G__66381;
continue;
} else {
var temp__5735__auto___66382 = cljs.core.seq(seq__66256_66372);
if(temp__5735__auto___66382){
var seq__66256_66383__$1 = temp__5735__auto___66382;
if(cljs.core.chunked_seq_QMARK_(seq__66256_66383__$1)){
var c__4556__auto___66384 = cljs.core.chunk_first(seq__66256_66383__$1);
var G__66385 = cljs.core.chunk_rest(seq__66256_66383__$1);
var G__66386 = c__4556__auto___66384;
var G__66387 = cljs.core.count(c__4556__auto___66384);
var G__66388 = (0);
seq__66256_66372 = G__66385;
chunk__66258_66373 = G__66386;
count__66259_66374 = G__66387;
i__66260_66375 = G__66388;
continue;
} else {
var component_66389 = cljs.core.first(seq__66256_66383__$1);
var component_ident_66390 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_66389) : com.fulcrologic.fulcro.components.get_ident.call(null,component_66389));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_66390,component_66389);


var G__66391 = cljs.core.next(seq__66256_66383__$1);
var G__66392 = null;
var G__66393 = (0);
var G__66394 = (0);
seq__66256_66372 = G__66391;
chunk__66258_66373 = G__66392;
count__66259_66374 = G__66393;
i__66260_66375 = G__66394;
continue;
}
} else {
}
}
break;
}


var G__66395 = seq__66228;
var G__66396 = chunk__66229;
var G__66397 = count__66230;
var G__66398 = (i__66231 + (1));
seq__66228 = G__66395;
chunk__66229 = G__66396;
count__66230 = G__66397;
i__66231 = G__66398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66228);
if(temp__5735__auto__){
var seq__66228__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66228__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66228__$1);
var G__66399 = cljs.core.chunk_rest(seq__66228__$1);
var G__66400 = c__4556__auto__;
var G__66401 = cljs.core.count(c__4556__auto__);
var G__66402 = (0);
seq__66228 = G__66399;
chunk__66229 = G__66400;
count__66230 = G__66401;
i__66231 = G__66402;
continue;
} else {
var class$ = cljs.core.first(seq__66228__$1);
var seq__66262_66403 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__66264_66404 = null;
var count__66265_66405 = (0);
var i__66266_66406 = (0);
while(true){
if((i__66266_66406 < count__66265_66405)){
var component_66407 = chunk__66264_66404.cljs$core$IIndexed$_nth$arity$2(null,i__66266_66406);
var component_ident_66408 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_66407) : com.fulcrologic.fulcro.components.get_ident.call(null,component_66407));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_66408,component_66407);


var G__66409 = seq__66262_66403;
var G__66410 = chunk__66264_66404;
var G__66411 = count__66265_66405;
var G__66412 = (i__66266_66406 + (1));
seq__66262_66403 = G__66409;
chunk__66264_66404 = G__66410;
count__66265_66405 = G__66411;
i__66266_66406 = G__66412;
continue;
} else {
var temp__5735__auto___66413__$1 = cljs.core.seq(seq__66262_66403);
if(temp__5735__auto___66413__$1){
var seq__66262_66414__$1 = temp__5735__auto___66413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66262_66414__$1)){
var c__4556__auto___66415 = cljs.core.chunk_first(seq__66262_66414__$1);
var G__66416 = cljs.core.chunk_rest(seq__66262_66414__$1);
var G__66417 = c__4556__auto___66415;
var G__66418 = cljs.core.count(c__4556__auto___66415);
var G__66419 = (0);
seq__66262_66403 = G__66416;
chunk__66264_66404 = G__66417;
count__66265_66405 = G__66418;
i__66266_66406 = G__66419;
continue;
} else {
var component_66420 = cljs.core.first(seq__66262_66414__$1);
var component_ident_66421 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_66420) : com.fulcrologic.fulcro.components.get_ident.call(null,component_66420));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_66421,component_66420);


var G__66422 = cljs.core.next(seq__66262_66414__$1);
var G__66423 = null;
var G__66424 = (0);
var G__66425 = (0);
seq__66262_66403 = G__66422;
chunk__66264_66404 = G__66423;
count__66265_66405 = G__66424;
i__66266_66406 = G__66425;
continue;
}
} else {
}
}
break;
}


var G__66426 = cljs.core.next(seq__66228__$1);
var G__66427 = null;
var G__66428 = (0);
var G__66429 = (0);
seq__66228 = G__66426;
chunk__66229 = G__66427;
count__66230 = G__66428;
i__66231 = G__66429;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__66280 = app;
var map__66280__$1 = (((((!((map__66280 == null))))?(((((map__66280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66280):map__66280);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66280__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__66281 = cljs.core.deref(runtime_atom);
var map__66281__$1 = (((((!((map__66281 == null))))?(((((map__66281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66281):map__66281);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66281__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__66282 = indexes;
var map__66282__$1 = (((((!((map__66282 == null))))?(((((map__66282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66282):map__66282);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66282__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66282__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66278_SHARP_,p2__66279_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__66278_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__66279_SHARP_) : class__GT_components.call(null,p2__66279_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__66293 = app;
var map__66293__$1 = (((((!((map__66293 == null))))?(((((map__66293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66293):map__66293);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__66294 = cljs.core.deref(runtime_atom);
var map__66294__$1 = (((((!((map__66294 == null))))?(((((map__66294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66294):map__66294);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__66295 = indexes;
var map__66295__$1 = (((((!((map__66295 == null))))?(((((map__66295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66295):map__66295);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__66299 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__66299__$1 = (((((!((map__66299 == null))))?(((((map__66299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66299):map__66299);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__66301_66435 = cljs.core.seq(limited_to_render);
var chunk__66303_66436 = null;
var count__66304_66437 = (0);
var i__66305_66438 = (0);
while(true){
if((i__66305_66438 < count__66304_66437)){
var c_66439 = chunk__66303_66436.cljs$core$IIndexed$_nth$arity$2(null,i__66305_66438);
var ident_66440 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_66439) : com.fulcrologic.fulcro.components.get_ident.call(null,c_66439));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_66440,c_66439);


var G__66441 = seq__66301_66435;
var G__66442 = chunk__66303_66436;
var G__66443 = count__66304_66437;
var G__66444 = (i__66305_66438 + (1));
seq__66301_66435 = G__66441;
chunk__66303_66436 = G__66442;
count__66304_66437 = G__66443;
i__66305_66438 = G__66444;
continue;
} else {
var temp__5735__auto___66445 = cljs.core.seq(seq__66301_66435);
if(temp__5735__auto___66445){
var seq__66301_66446__$1 = temp__5735__auto___66445;
if(cljs.core.chunked_seq_QMARK_(seq__66301_66446__$1)){
var c__4556__auto___66447 = cljs.core.chunk_first(seq__66301_66446__$1);
var G__66448 = cljs.core.chunk_rest(seq__66301_66446__$1);
var G__66449 = c__4556__auto___66447;
var G__66450 = cljs.core.count(c__4556__auto___66447);
var G__66451 = (0);
seq__66301_66435 = G__66448;
chunk__66303_66436 = G__66449;
count__66304_66437 = G__66450;
i__66305_66438 = G__66451;
continue;
} else {
var c_66452 = cljs.core.first(seq__66301_66446__$1);
var ident_66453 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_66452) : com.fulcrologic.fulcro.components.get_ident.call(null,c_66452));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_66453,c_66452);


var G__66454 = cljs.core.next(seq__66301_66446__$1);
var G__66455 = null;
var G__66456 = (0);
var G__66457 = (0);
seq__66301_66435 = G__66454;
chunk__66303_66436 = G__66455;
count__66304_66437 = G__66456;
i__66305_66438 = G__66457;
continue;
}
} else {
}
}
break;
}

var seq__66332 = cljs.core.seq(limited_idents);
var chunk__66333 = null;
var count__66334 = (0);
var i__66335 = (0);
while(true){
if((i__66335 < count__66334)){
var i = chunk__66333.cljs$core$IIndexed$_nth$arity$2(null,i__66335);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__66458 = seq__66332;
var G__66459 = chunk__66333;
var G__66460 = count__66334;
var G__66461 = (i__66335 + (1));
seq__66332 = G__66458;
chunk__66333 = G__66459;
count__66334 = G__66460;
i__66335 = G__66461;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66332);
if(temp__5735__auto__){
var seq__66332__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66332__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66332__$1);
var G__66462 = cljs.core.chunk_rest(seq__66332__$1);
var G__66463 = c__4556__auto__;
var G__66464 = cljs.core.count(c__4556__auto__);
var G__66465 = (0);
seq__66332 = G__66462;
chunk__66333 = G__66463;
count__66334 = G__66464;
i__66335 = G__66465;
continue;
} else {
var i = cljs.core.first(seq__66332__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__66466 = cljs.core.next(seq__66332__$1);
var G__66467 = null;
var G__66468 = (0);
var G__66469 = (0);
seq__66332 = G__66466;
chunk__66333 = G__66467;
count__66334 = G__66468;
i__66335 = G__66469;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4126__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__66336 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__66336__$1 = (((((!((map__66336 == null))))?(((((map__66336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66336):map__66336);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66336__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66336__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__66338_66470 = cljs.core.seq(all_idents);
var chunk__66339_66471 = null;
var count__66340_66472 = (0);
var i__66341_66473 = (0);
while(true){
if((i__66341_66473 < count__66340_66472)){
var i_66474 = chunk__66339_66471.cljs$core$IIndexed$_nth$arity$2(null,i__66341_66473);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_66474);


var G__66475 = seq__66338_66470;
var G__66476 = chunk__66339_66471;
var G__66477 = count__66340_66472;
var G__66478 = (i__66341_66473 + (1));
seq__66338_66470 = G__66475;
chunk__66339_66471 = G__66476;
count__66340_66472 = G__66477;
i__66341_66473 = G__66478;
continue;
} else {
var temp__5735__auto___66479 = cljs.core.seq(seq__66338_66470);
if(temp__5735__auto___66479){
var seq__66338_66480__$1 = temp__5735__auto___66479;
if(cljs.core.chunked_seq_QMARK_(seq__66338_66480__$1)){
var c__4556__auto___66481 = cljs.core.chunk_first(seq__66338_66480__$1);
var G__66482 = cljs.core.chunk_rest(seq__66338_66480__$1);
var G__66483 = c__4556__auto___66481;
var G__66484 = cljs.core.count(c__4556__auto___66481);
var G__66485 = (0);
seq__66338_66470 = G__66482;
chunk__66339_66471 = G__66483;
count__66340_66472 = G__66484;
i__66341_66473 = G__66485;
continue;
} else {
var i_66486 = cljs.core.first(seq__66338_66480__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_66486);


var G__66487 = cljs.core.next(seq__66338_66480__$1);
var G__66488 = null;
var G__66489 = (0);
var G__66490 = (0);
seq__66338_66470 = G__66487;
chunk__66339_66471 = G__66488;
count__66340_66472 = G__66489;
i__66341_66473 = G__66490;
continue;
}
} else {
}
}
break;
}

var seq__66342 = cljs.core.seq(extra_to_force);
var chunk__66343 = null;
var count__66344 = (0);
var i__66345 = (0);
while(true){
if((i__66345 < count__66344)){
var c = chunk__66343.cljs$core$IIndexed$_nth$arity$2(null,i__66345);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__66491 = seq__66342;
var G__66492 = chunk__66343;
var G__66493 = count__66344;
var G__66494 = (i__66345 + (1));
seq__66342 = G__66491;
chunk__66343 = G__66492;
count__66344 = G__66493;
i__66345 = G__66494;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66342);
if(temp__5735__auto__){
var seq__66342__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66342__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66342__$1);
var G__66495 = cljs.core.chunk_rest(seq__66342__$1);
var G__66496 = c__4556__auto__;
var G__66497 = cljs.core.count(c__4556__auto__);
var G__66498 = (0);
seq__66342 = G__66495;
chunk__66343 = G__66496;
count__66344 = G__66497;
i__66345 = G__66498;
continue;
} else {
var c = cljs.core.first(seq__66342__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__66499 = cljs.core.next(seq__66342__$1);
var G__66500 = null;
var G__66501 = (0);
var G__66502 = (0);
seq__66342 = G__66499;
chunk__66343 = G__66500;
count__66344 = G__66501;
i__66345 = G__66502;
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
/**
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__66347 = arguments.length;
switch (G__66347) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__66349){
var map__66350 = p__66349;
var map__66350__$1 = (((((!((map__66350 == null))))?(((((map__66350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66350):map__66350);
var options = map__66350__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66350__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66350__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4126__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e66353){var e = e66353;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-927905898,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
