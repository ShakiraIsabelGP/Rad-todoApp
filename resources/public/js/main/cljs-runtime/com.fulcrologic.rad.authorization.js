goog.provide('com.fulcrologic.rad.authorization');
com.fulcrologic.rad.authorization.machine_id = new cljs.core.Keyword("com.fulcrologic.rad.authorization","auth-machine","com.fulcrologic.rad.authorization/auth-machine",-785096215);

var options__56259__auto___71070 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$authorization$query_STAR_(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","provider","com.fulcrologic.rad.authorization/provider",1880340412),new cljs.core.Keyword("com.fulcrologic.rad.authorization","status","com.fulcrologic.rad.authorization/status",764781427),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$rad$authorization$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312),new cljs.core.Keyword("com.fulcrologic.rad.authorization","provider","com.fulcrologic.rad.authorization/provider",1880340412).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$authorization$render_Session(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.authorization !== 'undefined') && (typeof com.fulcrologic.rad.authorization.Session !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.authorization.Session = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___71070,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.authorization.Session,new cljs.core.Keyword("com.fulcrologic.rad.authorization","Session","com.fulcrologic.rad.authorization/Session",-1442511780),options__56259__auto___71070);
/**
 * Returns the providers that are currently authenticated.
 */
com.fulcrologic.rad.authorization.verified_authorities = (function com$fulcrologic$rad$authorization$verified_authorities(app_ish){
var state_map = com.fulcrologic.fulcro.application.current_state(app_ish);
var env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$2(state_map,com.fulcrologic.rad.authorization.machine_id);
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
});
/**
 * Start an authentication sequence for the given provider, and report results to the source-machine-id.
 * 
 *   Sends and :event/authenticated or :event/authentication-failed to that source machine when done.
 */
com.fulcrologic.rad.authorization.authenticate_BANG_ = (function com$fulcrologic$rad$authorization$authenticate_BANG_(app_ish,provider,source_machine_id){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,com.fulcrologic.rad.authorization.machine_id,new cljs.core.Keyword("event","authenticate","event/authenticate",642998517),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-machine-id","source-machine-id",764923435),source_machine_id,new cljs.core.Keyword(null,"provider","provider",-302056900),provider], null));
});
/**
 * Force logout on the given provider.
 */
com.fulcrologic.rad.authorization.logout_BANG_ = (function com$fulcrologic$rad$authorization$logout_BANG_(app_ish,provider){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,com.fulcrologic.rad.authorization.machine_id,new cljs.core.Keyword("event","logout","event/logout",1523837331),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provider","provider",-302056900),provider], null));
});
/**
 * Start an authentication sequence for the given provider, and report results to the source-machine-id. This version
 * is identical to authenticate!, but accepts any state machine env as the first parameter.
 * 
 *   Sends and :event/authenticated or :event/authentication-failed to that source machine when done.
 */
com.fulcrologic.rad.authorization.authenticate = (function com$fulcrologic$rad$authorization$authenticate(any_sm_env,provider,source_machine_id){
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4(any_sm_env,com.fulcrologic.rad.authorization.machine_id,new cljs.core.Keyword("event","authenticate","event/authenticate",642998517),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-machine-id","source-machine-id",764923435),source_machine_id,new cljs.core.Keyword(null,"provider","provider",-302056900),provider], null));
});
/**
 * Tell the auth system that the given provider succeeded.
 */
com.fulcrologic.rad.authorization.logged_in_BANG_ = (function com$fulcrologic$rad$authorization$logged_in_BANG_(app_ish,provider){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,new cljs.core.Keyword("com.fulcrologic.rad.authorization","auth-machine","com.fulcrologic.rad.authorization/auth-machine",-785096215),new cljs.core.Keyword("event","logged-in","event/logged-in",659134801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provider","provider",-302056900),provider], null));
});
/**
 * Tell the auth system that the given provider failed.
 */
com.fulcrologic.rad.authorization.failed_BANG_ = (function com$fulcrologic$rad$authorization$failed_BANG_(app_ish,provider){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,new cljs.core.Keyword("com.fulcrologic.rad.authorization","auth-machine","com.fulcrologic.rad.authorization/auth-machine",-785096215),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provider","provider",-302056900),provider], null));
});
/**
 * Change the actor that acts as the UI for gathering the credentials based on env provider
 */
com.fulcrologic.rad.authorization.set_authentication_actor = (function com$fulcrologic$rad$authorization$set_authentication_actor(env,provider){
var controller = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","controller","actor/controller",1686990038));
var provider_ui = (function (){var G__70996 = controller;
var G__70996__$1 = (((G__70996 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.authorization","authentication-providers","com.fulcrologic.rad.authorization/authentication-providers",77791421).cljs$core$IFn$_invoke$arity$1(G__70996));
if((G__70996__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__70996__$1,provider);
}
})();
var G__70997 = env;
if(cljs.core.truth_(provider_ui)){
return com.fulcrologic.fulcro.ui_state_machines.reset_actor_ident(G__70997,new cljs.core.Keyword("actor","auth-dialog","actor/auth-dialog",209164546),com.fulcrologic.fulcro.ui_state_machines.with_actor_class((function (){var G__70998 = provider_ui;
var G__70999 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__70998,G__70999) : com.fulcrologic.fulcro.components.get_ident.call(null,G__70998,G__70999));
})(),provider_ui));
} else {
return G__70997;
}
});
/**
 * Start the process of authenticating for a given provider
 */
com.fulcrologic.rad.authorization._authenticate = (function com$fulcrologic$rad$authorization$_authenticate(p__71000){
var map__71001 = p__71000;
var map__71001__$1 = (((((!((map__71001 == null))))?(((((map__71001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71001):map__71001);
var env = map__71001__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__71003 = event_data;
var map__71003__$1 = (((((!((map__71003 == null))))?(((((map__71003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71003):map__71003);
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71003__$1,new cljs.core.Keyword(null,"provider","provider",-302056900));
var source_machine_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71003__$1,new cljs.core.Keyword(null,"source-machine-id","source-machine-id",764923435));
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.authorization.set_authentication_actor(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"source-machine-id","source-machine-id",764923435),source_machine_id),provider),new cljs.core.Keyword(null,"username","username",1605666410),""),new cljs.core.Keyword(null,"password","password",417022471),""),new cljs.core.Keyword("state","gathering-credentials","state/gathering-credentials",-723858569));
});
com.fulcrologic.rad.authorization._reply_to_initiator = (function com$fulcrologic$rad$authorization$_reply_to_initiator(env,event){
var temp__5733__auto__ = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"source-machine-id","source-machine-id",764923435));
if(cljs.core.truth_(temp__5733__auto__)){
var source_machine_id = temp__5733__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.rad.authorization",null,129,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sending",event,"to",source_machine_id], null);
}),null)),null,-1364817674,null);

var G__71005 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"source-machine-id","source-machine-id",764923435),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = source_machine_id;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),source_machine_id);
} else {
return and__4115__auto__;
}
})())){
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(G__71005,source_machine_id,event);
} else {
return G__71005;
}
} else {
return env;
}
});
com.fulcrologic.rad.authorization._add_authenticated_provider = (function com$fulcrologic$rad$authorization$_add_authenticated_provider(env,p){
var current = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
return com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"authenticated","authenticated",1282954211),clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = current;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.PersistentHashSet.createAsIfByAssoc([p])));
});
com.fulcrologic.rad.authorization.remove_authenticated_provider = (function com$fulcrologic$rad$authorization$remove_authenticated_provider(env,p){
var current = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
return com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"authenticated","authenticated",1282954211),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = current;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.PersistentHashSet.createAsIfByAssoc([p])));
});
com.fulcrologic.rad.authorization.logged_in = (function com$fulcrologic$rad$authorization$logged_in(env){
var provider = new cljs.core.Keyword(null,"provider","provider",-302056900).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(env));
var expected_provider = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"provider","provider",-302056900));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(provider,expected_provider)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.authorization",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Provider mismatch",provider,expected_provider], null);
}),null)),null,-1306249519,null);
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.rad.authorization._reply_to_initiator(com.fulcrologic.rad.authorization._add_authenticated_provider(env,(function (){var or__4126__auto__ = provider;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return expected_provider;
}
})()),new cljs.core.Keyword("event","authenticated","event/authenticated",785441385)),new cljs.core.Keyword("state","idle","state/idle",2145385268));
});
com.fulcrologic.rad.authorization.login_failed = (function com$fulcrologic$rad$authorization$login_failed(env){
var provider = new cljs.core.Keyword(null,"provider","provider",-302056900).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(env));
var expected_provider = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"provider","provider",-302056900));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(provider,expected_provider)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.authorization",null,156,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Provider mismatch",provider,expected_provider], null);
}),null)),null,-590919833,null);
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.rad.authorization._reply_to_initiator(com.fulcrologic.rad.authorization.remove_authenticated_provider(env,(function (){var or__4126__auto__ = provider;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return expected_provider;
}
})()),new cljs.core.Keyword("event","authentication-failed","event/authentication-failed",-770284776)),new cljs.core.Keyword("state","failed","state/failed",-1541465587));
});
com.fulcrologic.rad.authorization.log_out = (function com$fulcrologic$rad$authorization$log_out(p__71006){
var map__71007 = p__71006;
var map__71007__$1 = (((((!((map__71007 == null))))?(((((map__71007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71007):map__71007);
var env = map__71007__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71007__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var provider = new cljs.core.Keyword(null,"provider","provider",-302056900).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(env));
var expected_provider = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"provider","provider",-302056900));
var actors = cljs.core.keys(com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)));
var seq__71009_71071 = cljs.core.seq(actors);
var chunk__71011_71072 = null;
var count__71012_71073 = (0);
var i__71013_71074 = (0);
while(true){
if((i__71013_71074 < count__71012_71073)){
var actor_71075 = chunk__71011_71072.cljs$core$IIndexed$_nth$arity$2(null,i__71013_71074);
var m_71076 = (function (){var G__71017 = env;
var G__71017__$1 = (((G__71017 == null))?null:com.fulcrologic.fulcro.ui_state_machines.actor_class(G__71017,actor_71075));
var G__71017__$2 = (((G__71017__$1 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__71017__$1) : com.fulcrologic.fulcro.components.component_options.call(null,G__71017__$1)));
if((G__71017__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","logout","com.fulcrologic.rad.authorization/logout",-966249367).cljs$core$IFn$_invoke$arity$1(G__71017__$2);
}
})();
if(cljs.core.truth_(m_71076)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,m_71076,null,(1),null))))),null,(1),null)))))));
} else {
}


var G__71077 = seq__71009_71071;
var G__71078 = chunk__71011_71072;
var G__71079 = count__71012_71073;
var G__71080 = (i__71013_71074 + (1));
seq__71009_71071 = G__71077;
chunk__71011_71072 = G__71078;
count__71012_71073 = G__71079;
i__71013_71074 = G__71080;
continue;
} else {
var temp__5735__auto___71081 = cljs.core.seq(seq__71009_71071);
if(temp__5735__auto___71081){
var seq__71009_71082__$1 = temp__5735__auto___71081;
if(cljs.core.chunked_seq_QMARK_(seq__71009_71082__$1)){
var c__4556__auto___71083 = cljs.core.chunk_first(seq__71009_71082__$1);
var G__71084 = cljs.core.chunk_rest(seq__71009_71082__$1);
var G__71085 = c__4556__auto___71083;
var G__71086 = cljs.core.count(c__4556__auto___71083);
var G__71087 = (0);
seq__71009_71071 = G__71084;
chunk__71011_71072 = G__71085;
count__71012_71073 = G__71086;
i__71013_71074 = G__71087;
continue;
} else {
var actor_71088 = cljs.core.first(seq__71009_71082__$1);
var m_71089 = (function (){var G__71018 = env;
var G__71018__$1 = (((G__71018 == null))?null:com.fulcrologic.fulcro.ui_state_machines.actor_class(G__71018,actor_71088));
var G__71018__$2 = (((G__71018__$1 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__71018__$1) : com.fulcrologic.fulcro.components.component_options.call(null,G__71018__$1)));
if((G__71018__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","logout","com.fulcrologic.rad.authorization/logout",-966249367).cljs$core$IFn$_invoke$arity$1(G__71018__$2);
}
})();
if(cljs.core.truth_(m_71089)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,m_71089,null,(1),null))))),null,(1),null)))))));
} else {
}


var G__71090 = cljs.core.next(seq__71009_71082__$1);
var G__71091 = null;
var G__71092 = (0);
var G__71093 = (0);
seq__71009_71071 = G__71090;
chunk__71011_71072 = G__71091;
count__71012_71073 = G__71092;
i__71013_71074 = G__71093;
continue;
}
} else {
}
}
break;
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.authorization.remove_authenticated_provider(env,(function (){var or__4126__auto__ = provider;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return expected_provider;
}
})()),cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312),provider], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","provider","com.fulcrologic.rad.authorization/provider",1880340412),provider,new cljs.core.Keyword("com.fulcrologic.rad.authorization","status","com.fulcrologic.rad.authorization/status",764781427),new cljs.core.Keyword(null,"logged-out","logged-out",829194832)], null)], 0)),new cljs.core.Keyword("state","idle","state/idle",2145385268));
});
com.fulcrologic.rad.authorization.global_events = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("event","logout","event/logout",1523837331),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.authorization.log_out], null),new cljs.core.Keyword("event","logged-in","event/logged-in",659134801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.authorization.logged_in], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.authorization.login_failed], null),new cljs.core.Keyword("event","session-checked","event/session-checked",2090886638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__71019){
var map__71020 = p__71019;
var map__71020__$1 = (((((!((map__71020 == null))))?(((((map__71020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71020):map__71020);
var env = map__71020__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71020__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71020__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71020__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var provider = new cljs.core.Keyword(null,"provider","provider",-302056900).cljs$core$IFn$_invoke$arity$1(event_data);
var status = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312),provider,new cljs.core.Keyword("com.fulcrologic.rad.authorization","status","com.fulcrologic.rad.authorization/status",764781427)], null));
var map__71022 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"config","config",994861415));
var map__71022__$1 = (((((!((map__71022 == null))))?(((((map__71022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71022):map__71022);
var after_session_check = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71022__$1,new cljs.core.Keyword(null,"after-session-check","after-session-check",918954954));
var ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success","success",1890645906),status);
if(cljs.core.truth_(after_session_check)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,after_session_check,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
} else {
}

var G__71024 = env;
var G__71024__$1 = ((ok_QMARK_)?com.fulcrologic.rad.authorization._add_authenticated_provider(G__71024,provider):G__71024);
if((!(ok_QMARK_))){
return com.fulcrologic.rad.authorization.remove_authenticated_provider(G__71024__$1,provider);
} else {
return G__71024__$1;
}
})], null),new cljs.core.Keyword("event","authenticate","event/authenticate",642998517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__71025){
var map__71026 = p__71025;
var map__71026__$1 = (((((!((map__71026 == null))))?(((((map__71026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71026):map__71026);
var env = map__71026__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71026__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__71028 = event_data;
var map__71028__$1 = (((((!((map__71028 == null))))?(((((map__71028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71028):map__71028);
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71028__$1,new cljs.core.Keyword(null,"provider","provider",-302056900));
var authenticated = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.authorization",null,193,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checking for authentication "], null);
}),null)),null,171261420,null);

if(cljs.core.contains_QMARK_(authenticated,provider)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.authorization",null,196,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Already authenticated"], null);
}),null)),null,869101568,null);

return com.fulcrologic.rad.authorization._reply_to_initiator(env,new cljs.core.Keyword("event","authenticated","event/authenticated",785441385));
} else {
return com.fulcrologic.rad.authorization._authenticate(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"provider","provider",-302056900),provider));
}
})], null)], null);
com.fulcrologic.rad.authorization.auth_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","auth-dialog","actor/auth-dialog",209164546),new cljs.core.Keyword("ui","username","ui/username",1605670678)], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","auth-dialog","actor/auth-dialog",209164546),new cljs.core.Keyword("ui","password","ui/password",417022099)], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","session","actor/session",950226002)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__71030){
var map__71031 = p__71030;
var map__71031__$1 = (((((!((map__71031 == null))))?(((((map__71031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71031):map__71031);
var env = map__71031__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71031__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71031__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var actors = cljs.core.keys(com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)));
var seq__71033_71094 = cljs.core.seq(actors);
var chunk__71035_71095 = null;
var count__71036_71096 = (0);
var i__71037_71097 = (0);
while(true){
if((i__71037_71097 < count__71036_71096)){
var actor_71098 = chunk__71035_71095.cljs$core$IIndexed$_nth$arity$2(null,i__71037_71097);
var m_71099 = (function (){var G__71041 = env;
var G__71041__$1 = (((G__71041 == null))?null:com.fulcrologic.fulcro.ui_state_machines.actor_class(G__71041,actor_71098));
var G__71041__$2 = (((G__71041__$1 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__71041__$1) : com.fulcrologic.fulcro.components.component_options.call(null,G__71041__$1)));
if((G__71041__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","check-session","com.fulcrologic.rad.authorization/check-session",-1901194280).cljs$core$IFn$_invoke$arity$1(G__71041__$2);
}
})();
if(cljs.core.truth_(m_71099)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,m_71099,null,(1),null))))),null,(1),null)))))));
} else {
}


var G__71100 = seq__71033_71094;
var G__71101 = chunk__71035_71095;
var G__71102 = count__71036_71096;
var G__71103 = (i__71037_71097 + (1));
seq__71033_71094 = G__71100;
chunk__71035_71095 = G__71101;
count__71036_71096 = G__71102;
i__71037_71097 = G__71103;
continue;
} else {
var temp__5735__auto___71104 = cljs.core.seq(seq__71033_71094);
if(temp__5735__auto___71104){
var seq__71033_71105__$1 = temp__5735__auto___71104;
if(cljs.core.chunked_seq_QMARK_(seq__71033_71105__$1)){
var c__4556__auto___71106 = cljs.core.chunk_first(seq__71033_71105__$1);
var G__71107 = cljs.core.chunk_rest(seq__71033_71105__$1);
var G__71108 = c__4556__auto___71106;
var G__71109 = cljs.core.count(c__4556__auto___71106);
var G__71110 = (0);
seq__71033_71094 = G__71107;
chunk__71035_71095 = G__71108;
count__71036_71096 = G__71109;
i__71037_71097 = G__71110;
continue;
} else {
var actor_71111 = cljs.core.first(seq__71033_71105__$1);
var m_71112 = (function (){var G__71042 = env;
var G__71042__$1 = (((G__71042 == null))?null:com.fulcrologic.fulcro.ui_state_machines.actor_class(G__71042,actor_71111));
var G__71042__$2 = (((G__71042__$1 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__71042__$1) : com.fulcrologic.fulcro.components.component_options.call(null,G__71042__$1)));
if((G__71042__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","check-session","com.fulcrologic.rad.authorization/check-session",-1901194280).cljs$core$IFn$_invoke$arity$1(G__71042__$2);
}
})();
if(cljs.core.truth_(m_71112)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,m_71112,null,(1),null))))),null,(1),null)))))));
} else {
}


var G__71113 = cljs.core.next(seq__71033_71105__$1);
var G__71114 = null;
var G__71115 = (0);
var G__71116 = (0);
seq__71033_71094 = G__71113;
chunk__71035_71095 = G__71114;
count__71036_71096 = G__71115;
i__71037_71097 = G__71116;
continue;
}
} else {
}
}
break;
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"config","config",994861415),event_data),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("state","idle","state/idle",2145385268));
})], null),new cljs.core.Keyword("state","idle","state/idle",2145385268),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),com.fulcrologic.rad.authorization.global_events], null),new cljs.core.Keyword("state","failed","state/failed",-1541465587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),com.fulcrologic.rad.authorization.global_events], null),new cljs.core.Keyword("state","gathering-credentials","state/gathering-credentials",-723858569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),com.fulcrologic.rad.authorization.global_events], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.authorization","auth-machine","com.fulcrologic.rad.authorization/auth-machine",855435312,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.authorization","auth-machine","com.fulcrologic.rad.authorization/auth-machine",855435312,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","auth-dialog","actor/auth-dialog",209164546),new cljs.core.Keyword("ui","username","ui/username",1605670678)], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","auth-dialog","actor/auth-dialog",209164546),new cljs.core.Keyword("ui","password","ui/password",417022099)], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","session","actor/session",950226002)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__71043){
var map__71044 = p__71043;
var map__71044__$1 = (((((!((map__71044 == null))))?(((((map__71044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71044):map__71044);
var env = map__71044__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71044__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71044__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var actors = cljs.core.keys(com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)));
var seq__71046_71117 = cljs.core.seq(actors);
var chunk__71048_71118 = null;
var count__71049_71119 = (0);
var i__71050_71120 = (0);
while(true){
if((i__71050_71120 < count__71049_71119)){
var actor_71121 = chunk__71048_71118.cljs$core$IIndexed$_nth$arity$2(null,i__71050_71120);
var m_71122 = (function (){var G__71054 = env;
var G__71054__$1 = (((G__71054 == null))?null:com.fulcrologic.fulcro.ui_state_machines.actor_class(G__71054,actor_71121));
var G__71054__$2 = (((G__71054__$1 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__71054__$1) : com.fulcrologic.fulcro.components.component_options.call(null,G__71054__$1)));
if((G__71054__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","check-session","com.fulcrologic.rad.authorization/check-session",-1901194280).cljs$core$IFn$_invoke$arity$1(G__71054__$2);
}
})();
if(cljs.core.truth_(m_71122)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,m_71122,null,(1),null))))),null,(1),null)))))));
} else {
}


var G__71123 = seq__71046_71117;
var G__71124 = chunk__71048_71118;
var G__71125 = count__71049_71119;
var G__71126 = (i__71050_71120 + (1));
seq__71046_71117 = G__71123;
chunk__71048_71118 = G__71124;
count__71049_71119 = G__71125;
i__71050_71120 = G__71126;
continue;
} else {
var temp__5735__auto___71127 = cljs.core.seq(seq__71046_71117);
if(temp__5735__auto___71127){
var seq__71046_71128__$1 = temp__5735__auto___71127;
if(cljs.core.chunked_seq_QMARK_(seq__71046_71128__$1)){
var c__4556__auto___71129 = cljs.core.chunk_first(seq__71046_71128__$1);
var G__71130 = cljs.core.chunk_rest(seq__71046_71128__$1);
var G__71131 = c__4556__auto___71129;
var G__71132 = cljs.core.count(c__4556__auto___71129);
var G__71133 = (0);
seq__71046_71117 = G__71130;
chunk__71048_71118 = G__71131;
count__71049_71119 = G__71132;
i__71050_71120 = G__71133;
continue;
} else {
var actor_71134 = cljs.core.first(seq__71046_71128__$1);
var m_71135 = (function (){var G__71055 = env;
var G__71055__$1 = (((G__71055 == null))?null:com.fulcrologic.fulcro.ui_state_machines.actor_class(G__71055,actor_71134));
var G__71055__$2 = (((G__71055__$1 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__71055__$1) : com.fulcrologic.fulcro.components.component_options.call(null,G__71055__$1)));
if((G__71055__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","check-session","com.fulcrologic.rad.authorization/check-session",-1901194280).cljs$core$IFn$_invoke$arity$1(G__71055__$2);
}
})();
if(cljs.core.truth_(m_71135)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,m_71135,null,(1),null))))),null,(1),null)))))));
} else {
}


var G__71136 = cljs.core.next(seq__71046_71128__$1);
var G__71137 = null;
var G__71138 = (0);
var G__71139 = (0);
seq__71046_71117 = G__71136;
chunk__71048_71118 = G__71137;
count__71049_71119 = G__71138;
i__71050_71120 = G__71139;
continue;
}
} else {
}
}
break;
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"config","config",994861415),event_data),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("state","idle","state/idle",2145385268));
})], null),new cljs.core.Keyword("state","idle","state/idle",2145385268),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),com.fulcrologic.rad.authorization.global_events], null),new cljs.core.Keyword("state","failed","state/failed",-1541465587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),com.fulcrologic.rad.authorization.global_events], null),new cljs.core.Keyword("state","gathering-credentials","state/gathering-credentials",-723858569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),com.fulcrologic.rad.authorization.global_events], null)], null)], null));
/**
 * Start the authentication system and configure it to use the provided UI components (with options).
 * 
 *   NOTE: THIS IS NOT A PRODUCTION-READY IMPLEMENTATION. You can use the source of this and its corresponding state
 *   machine as a basis for your own, but it needs more work. PRs welcome.
 * 
 *   * `app` - The Fulcro app to manage.
 *   * `authority-ui-roots` - A vector of UI components with singleton idents. Each must have
 *   a unique ::auth/provider (the name of the authority) and ::auth/check-session (a mutation to run that
 *   should return a Session from a remote that has looked for an existing session.)
 *   * `options` - A map of additional startup options.
 */
com.fulcrologic.rad.authorization.start_BANG_ = (function com$fulcrologic$rad$authorization$start_BANG_(var_args){
var G__71057 = arguments.length;
switch (G__71057) {
case 2:
return com.fulcrologic.rad.authorization.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.authorization.start_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.authorization.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,authority_ui_roots){
return com.fulcrologic.rad.authorization.start_BANG_.cljs$core$IFn$_invoke$arity$3(app,authority_ui_roots,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.authorization.start_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,authority_ui_roots,options){
var actors = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (c){
var map__71058 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.component_options.call(null,c));
var map__71058__$1 = (((((!((map__71058 == null))))?(((((map__71058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71058):map__71058);
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71058__$1,new cljs.core.Keyword("com.fulcrologic.rad.authorization","provider","com.fulcrologic.rad.authorization/provider",1880340412));
if(cljs.core.truth_(provider)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.rad.authorization",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing auth UI for provider",provider], null);
}),null)),null,-380983604,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provider,c], null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.authorization",null,250,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to add auth root. Missing ::auth/provider key on",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.component_name.call(null,c))], null);
}),null)),null,876017063,null);

return null;
}
})),authority_ui_roots);
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,com.fulcrologic.rad.authorization.auth_machine,com.fulcrologic.rad.authorization.machine_id,actors,options);
}));

(com.fulcrologic.rad.authorization.start_BANG_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),"null",new cljs.core.Keyword(null,"execute","execute",-129499188),"null",new cljs.core.Keyword(null,"write","write",-1857649168),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"execute","execute",-129499188),null,new cljs.core.Keyword(null,"write","write",-1857649168),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.authorization","context","com.fulcrologic.rad.authorization/context",-57806985),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.authorization","action-map","com.fulcrologic.rad.authorization/action-map",-1192647738),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592),new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","context","com.fulcrologic.rad.authorization/context",-57806985)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71060){
return cljs.core.map_QMARK_(G__71060);
}),(function (G__71060){
return cljs.core.contains_QMARK_(G__71060,new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592));
}),(function (G__71060){
return cljs.core.contains_QMARK_(G__71060,new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693));
})], null),(function (G__71060){
return ((cljs.core.map_QMARK_(G__71060)) && (cljs.core.contains_QMARK_(G__71060,new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592))) && (cljs.core.contains_QMARK_(G__71060,new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","context","com.fulcrologic.rad.authorization/context",-57806985)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592),new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592),new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592),new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","context","com.fulcrologic.rad.authorization/context",-57806985)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.rad.authorization","action","com.fulcrologic.rad.authorization/action",851449592))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.rad.authorization","subject","com.fulcrologic.rad.authorization/subject",1102957693)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","context","com.fulcrologic.rad.authorization/context",-57806985)], null)])));
com.fulcrologic.rad.authorization.readable_QMARK_ = (function com$fulcrologic$rad$authorization$readable_QMARK_(env,a){
var map__71061 = a;
var map__71061__$1 = (((((!((map__71061 == null))))?(((((map__71061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71061):map__71061);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71061__$1,new cljs.core.Keyword("com.fulcrologic.rad.authorization","permissions","com.fulcrologic.rad.authorization/permissions",-1720454589));
return cljs.core.boolean$((function (){var or__4126__auto__ = (permissions == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = permissions;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.contains_QMARK_(cljs.core.set((permissions.cljs$core$IFn$_invoke$arity$1 ? permissions.cljs$core$IFn$_invoke$arity$1(env) : permissions.call(null,env))),new cljs.core.Keyword(null,"read","read",1140058661));
} else {
return and__4115__auto__;
}
}
})());
});
com.fulcrologic.rad.authorization.native_map_QMARK_ = (function com$fulcrologic$rad$authorization$native_map_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentArrayMap)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentHashMap)));
});
/**
 * Walk the structure and transduce every map with xform.
 */
com.fulcrologic.rad.authorization.transduce_maps = (function com$fulcrologic$rad$authorization$transduce_maps(xform,input){
return clojure.walk.prewalk((function com$fulcrologic$rad$authorization$transduce_maps_$_elide_items_walk(x){
if(com.fulcrologic.rad.authorization.native_map_QMARK_(x)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,x),cljs.core.meta(x));
} else {
return x;
}
}),input);
});
/**
 * Creates a post-processing plugin that redacts attributes that are marked as non-readable
 */
com.fulcrologic.rad.authorization.redact = (function com$fulcrologic$rad$authorization$redact(p__71063,query_result){
var map__71064 = p__71063;
var map__71064__$1 = (((((!((map__71064 == null))))?(((((map__71064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71064):map__71064);
var env = map__71064__$1;
var attr_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71064__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","key->attribute","com.fulcrologic.rad.attributes/key->attribute",1058115384));
return com.fulcrologic.rad.authorization.transduce_maps(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__71066){
var vec__71067 = p__71066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71067,(1),null);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_map,k);
if(com.fulcrologic.rad.authorization.readable_QMARK_(env,a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.fulcrologic.rad.authorization","REDACTED","com.fulcrologic.rad.authorization/REDACTED",-1010705551)], null);
}
})),query_result);
});

//# sourceMappingURL=com.fulcrologic.rad.authorization.js.map
