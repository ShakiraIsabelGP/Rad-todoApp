goog.provide('com.wsscode.async.async_cljs');
/**
 * Check if c is a core.async channel.
 */
com.wsscode.async.async_cljs.chan_QMARK_ = (function com$wsscode$async$async_cljs$chan_QMARK_(c){
if((!((c == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!c.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
}
});
/**
 * Return true if X is a js obj with the property .then available as a fn.
 */
com.wsscode.async.async_cljs.promise_QMARK_ = (function com$wsscode$async$async_cljs$promise_QMARK_(x){
try{return cljs.core.fn_QMARK_(goog.object.get(x,"then"));
}catch (e75315){var _ = e75315;
return false;
}});
/**
 * Converts promise p in a promise-chan. The response of this channel should be consumed
 *   using `consume-pair`.
 */
com.wsscode.async.async_cljs.promise__GT_chan = (function com$wsscode$async$async_cljs$promise__GT_chan(p){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
p.then((function (p1__75316_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),p1__75316_SHARP_], null));
}),(function (p1__75318_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__75318_SHARP_], null));
}));

return c;
});
/**
 * Consume promise channel result pair.
 */
com.wsscode.async.async_cljs.consumer_pair = (function com$wsscode$async$async_cljs$consumer_pair(resp){
if(cljs.core.contains_QMARK_(resp,new cljs.core.Keyword(null,"error","error",-978969032))){
throw new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp);
} else {
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(resp);
}
});
/**
 * Returns true if err is an error object.
 */
com.wsscode.async.async_cljs.error_QMARK_ = (function com$wsscode$async$async_cljs$error_QMARK_(err){
return (err instanceof Error);
});
/**
 * Throw error x if x is an error.
 */
com.wsscode.async.async_cljs.throw_err = (function com$wsscode$async$async_cljs$throw_err(x){
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
throw x;
} else {
return x;
}
});
/**
 * Returns a channel that will respond will c, or an error after timeout-ms.
 */
com.wsscode.async.async_cljs.timeout_chan = (function com$wsscode$async$async_cljs$timeout_chan(timeout_ms,c){
var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___75532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_75360){
var state_val_75361 = (state_75360[(1)]);
if((state_val_75361 === (7))){
var inst_75341 = [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406)];
var inst_75342 = [timeout_ms];
var inst_75343 = cljs.core.PersistentHashMap.fromArrays(inst_75341,inst_75342);
var inst_75344 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout",inst_75343);
var inst_75345 = (function(){throw inst_75344})();
var state_75360__$1 = state_75360;
var statearr_75362_75533 = state_75360__$1;
(statearr_75362_75533[(2)] = inst_75345);

(statearr_75362_75533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (1))){
var state_75360__$1 = state_75360;
var statearr_75363_75534 = state_75360__$1;
(statearr_75363_75534[(2)] = null);

(statearr_75363_75534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (4))){
var inst_75322 = (state_75360[(2)]);
var state_75360__$1 = state_75360;
var statearr_75364_75535 = state_75360__$1;
(statearr_75364_75535[(2)] = inst_75322);

(statearr_75364_75535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (6))){
var inst_75331 = (state_75360[(7)]);
var inst_75336 = (state_75360[(2)]);
var inst_75337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75336,(0),null);
var inst_75338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75336,(1),null);
var inst_75339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75338,inst_75331);
var state_75360__$1 = (function (){var statearr_75365 = state_75360;
(statearr_75365[(8)] = inst_75337);

return statearr_75365;
})();
if(inst_75339){
var statearr_75366_75536 = state_75360__$1;
(statearr_75366_75536[(1)] = (7));

} else {
var statearr_75367_75537 = state_75360__$1;
(statearr_75367_75537[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (3))){
var inst_75351 = (state_75360[(9)]);
var inst_75351__$1 = (state_75360[(2)]);
var inst_75352 = (inst_75351__$1 == null);
var state_75360__$1 = (function (){var statearr_75368 = state_75360;
(statearr_75368[(9)] = inst_75351__$1);

return statearr_75368;
})();
if(cljs.core.truth_(inst_75352)){
var statearr_75369_75538 = state_75360__$1;
(statearr_75369_75538[(1)] = (10));

} else {
var statearr_75370_75539 = state_75360__$1;
(statearr_75370_75539[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (12))){
var inst_75358 = (state_75360[(2)]);
var state_75360__$1 = state_75360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75360__$1,inst_75358);
} else {
if((state_val_75361 === (2))){
var inst_75331 = (state_75360[(7)]);
var _ = (function (){var statearr_75371 = state_75360;
(statearr_75371[(4)] = cljs.core.cons((5),(state_75360[(4)])));

return statearr_75371;
})();
var inst_75331__$1 = cljs.core.async.timeout(timeout_ms);
var inst_75332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75333 = [c,inst_75331__$1];
var inst_75334 = (new cljs.core.PersistentVector(null,2,(5),inst_75332,inst_75333,null));
var state_75360__$1 = (function (){var statearr_75372 = state_75360;
(statearr_75372[(7)] = inst_75331__$1);

return statearr_75372;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_75360__$1,(6),inst_75334,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_75361 === (11))){
var inst_75351 = (state_75360[(9)]);
var inst_75356 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_75351);
var state_75360__$1 = state_75360;
var statearr_75374_75540 = state_75360__$1;
(statearr_75374_75540[(2)] = inst_75356);

(statearr_75374_75540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (9))){
var inst_75348 = (state_75360[(2)]);
var _ = (function (){var statearr_75375 = state_75360;
(statearr_75375[(4)] = cljs.core.rest((state_75360[(4)])));

return statearr_75375;
})();
var state_75360__$1 = state_75360;
var statearr_75376_75543 = state_75360__$1;
(statearr_75376_75543[(2)] = inst_75348);

(statearr_75376_75543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (5))){
var _ = (function (){var statearr_75377 = state_75360;
(statearr_75377[(4)] = cljs.core.rest((state_75360[(4)])));

return statearr_75377;
})();
var state_75360__$1 = state_75360;
var ex75373 = (state_75360__$1[(2)]);
var statearr_75378_75544 = state_75360__$1;
(statearr_75378_75544[(5)] = ex75373);


var statearr_75379_75545 = state_75360__$1;
(statearr_75379_75545[(1)] = (4));

(statearr_75379_75545[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (10))){
var inst_75354 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_75360__$1 = state_75360;
var statearr_75382_75546 = state_75360__$1;
(statearr_75382_75546[(2)] = inst_75354);

(statearr_75382_75546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75361 === (8))){
var inst_75337 = (state_75360[(8)]);
var state_75360__$1 = state_75360;
var statearr_75385_75547 = state_75360__$1;
(statearr_75385_75547[(2)] = inst_75337);

(statearr_75385_75547[(1)] = (9));


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
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto__ = null;
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto____0 = (function (){
var statearr_75387 = [null,null,null,null,null,null,null,null,null,null];
(statearr_75387[(0)] = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto__);

(statearr_75387[(1)] = (1));

return statearr_75387;
});
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto____1 = (function (state_75360){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_75360);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e75389){var ex__50860__auto__ = e75389;
var statearr_75390_75548 = state_75360;
(statearr_75390_75548[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_75360[(4)]))){
var statearr_75391_75549 = state_75360;
(statearr_75391_75549[(1)] = cljs.core.first((state_75360[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75550 = state_75360;
state_75360 = G__75550;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto__ = function(state_75360){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto____1.call(this,state_75360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto____0;
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto____1;
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_75394 = f__50893__auto__();
(statearr_75394[(6)] = c__50892__auto___75532);

return statearr_75394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
});
com.wsscode.async.async_cljs.pulling_retry_STAR_ = (function com$wsscode$async$async_cljs$pulling_retry_STAR_(options,f){
var options_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(options))?options:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146),options], null));
var map__75395 = options_SINGLEQUOTE_;
var map__75395__$1 = (((((!((map__75395 == null))))?(((((map__75395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75395):map__75395);
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75395__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75395__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","timeout","com.wsscode.async.async-cljs/timeout",-2054846554),(2000));
var retry_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75395__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","retry-ms","com.wsscode.async.async-cljs/retry-ms",-1284672644),(10));
var _STAR_stop_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var res = com.wsscode.async.async_cljs.timeout_chan(timeout,(function (){var ch__75196__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__50892__auto___75552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_75453){
var state_val_75454 = (state_75453[(1)]);
if((state_val_75454 === (7))){
var inst_75441 = (state_75453[(2)]);
var _ = (function (){var statearr_75455 = state_75453;
(statearr_75455[(4)] = cljs.core.rest((state_75453[(4)])));

return statearr_75455;
})();
var state_75453__$1 = state_75453;
var statearr_75459_75554 = state_75453__$1;
(statearr_75459_75554[(2)] = inst_75441);

(statearr_75459_75554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (20))){
var state_75453__$1 = state_75453;
var statearr_75461_75555 = state_75453__$1;
(statearr_75461_75555[(2)] = null);

(statearr_75461_75555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (27))){
var inst_75444 = (state_75453[(7)]);
var inst_75449 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__75196__auto__,inst_75444);
var state_75453__$1 = state_75453;
var statearr_75463_75556 = state_75453__$1;
(statearr_75463_75556[(2)] = inst_75449);

(statearr_75463_75556[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (1))){
var state_75453__$1 = state_75453;
var statearr_75464_75557 = state_75453__$1;
(statearr_75464_75557[(2)] = null);

(statearr_75464_75557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (24))){
var inst_75437 = (state_75453[(2)]);
var state_75453__$1 = state_75453;
var statearr_75466_75558 = state_75453__$1;
(statearr_75466_75558[(2)] = inst_75437);

(statearr_75466_75558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (4))){
var inst_75397 = (state_75453[(2)]);
var state_75453__$1 = state_75453;
var statearr_75467_75559 = state_75453__$1;
(statearr_75467_75559[(2)] = inst_75397);

(statearr_75467_75559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (15))){
var inst_75407 = (state_75453[(8)]);
var inst_75416 = com.wsscode.async.async_cljs.promise__GT_chan(inst_75407);
var state_75453__$1 = state_75453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75453__$1,(18),inst_75416);
} else {
if((state_val_75454 === (21))){
var inst_75424 = (state_75453[(2)]);
var state_75453__$1 = state_75453;
var statearr_75468_75560 = state_75453__$1;
(statearr_75468_75560[(2)] = inst_75424);

(statearr_75468_75560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (13))){
var inst_75428 = (state_75453[(9)]);
var inst_75428__$1 = (state_75453[(2)]);
var inst_75429 = (done_QMARK_.cljs$core$IFn$_invoke$arity$1 ? done_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_75428__$1) : done_QMARK_.call(null,inst_75428__$1));
var state_75453__$1 = (function (){var statearr_75470 = state_75453;
(statearr_75470[(9)] = inst_75428__$1);

return statearr_75470;
})();
if(cljs.core.truth_(inst_75429)){
var statearr_75471_75561 = state_75453__$1;
(statearr_75471_75561[(1)] = (22));

} else {
var statearr_75472_75562 = state_75453__$1;
(statearr_75472_75562[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (22))){
var inst_75428 = (state_75453[(9)]);
var state_75453__$1 = state_75453;
var statearr_75473_75563 = state_75453__$1;
(statearr_75473_75563[(2)] = inst_75428);

(statearr_75473_75563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (6))){
var inst_75404 = cljs.core.deref(_STAR_stop_QMARK_);
var state_75453__$1 = state_75453;
if(cljs.core.truth_(inst_75404)){
var statearr_75474_75564 = state_75453__$1;
(statearr_75474_75564[(1)] = (8));

} else {
var statearr_75475_75565 = state_75453__$1;
(statearr_75475_75565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (28))){
var inst_75451 = (state_75453[(2)]);
var state_75453__$1 = state_75453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75453__$1,inst_75451);
} else {
if((state_val_75454 === (25))){
var inst_75434 = (state_75453[(2)]);
var state_75453__$1 = (function (){var statearr_75481 = state_75453;
(statearr_75481[(10)] = inst_75434);

return statearr_75481;
})();
var statearr_75482_75566 = state_75453__$1;
(statearr_75482_75566[(2)] = null);

(statearr_75482_75566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (17))){
var inst_75426 = (state_75453[(2)]);
var state_75453__$1 = state_75453;
var statearr_75483_75567 = state_75453__$1;
(statearr_75483_75567[(2)] = inst_75426);

(statearr_75483_75567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (3))){
var inst_75444 = (state_75453[(7)]);
var inst_75444__$1 = (state_75453[(2)]);
var inst_75445 = (inst_75444__$1 == null);
var state_75453__$1 = (function (){var statearr_75484 = state_75453;
(statearr_75484[(7)] = inst_75444__$1);

return statearr_75484;
})();
if(cljs.core.truth_(inst_75445)){
var statearr_75485_75568 = state_75453__$1;
(statearr_75485_75568[(1)] = (26));

} else {
var statearr_75486_75569 = state_75453__$1;
(statearr_75486_75569[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (12))){
var inst_75407 = (state_75453[(8)]);
var inst_75414 = com.wsscode.async.async_cljs.promise_QMARK_(inst_75407);
var state_75453__$1 = state_75453;
if(cljs.core.truth_(inst_75414)){
var statearr_75488_75570 = state_75453__$1;
(statearr_75488_75570[(1)] = (15));

} else {
var statearr_75489_75571 = state_75453__$1;
(statearr_75489_75571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (2))){
var _ = (function (){var statearr_75490 = state_75453;
(statearr_75490[(4)] = cljs.core.cons((5),(state_75453[(4)])));

return statearr_75490;
})();
var state_75453__$1 = state_75453;
var statearr_75493_75572 = state_75453__$1;
(statearr_75493_75572[(2)] = null);

(statearr_75493_75572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (23))){
var inst_75432 = cljs.core.async.timeout(retry_ms);
var state_75453__$1 = state_75453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75453__$1,(25),inst_75432);
} else {
if((state_val_75454 === (19))){
var inst_75407 = (state_75453[(8)]);
var state_75453__$1 = state_75453;
var statearr_75494_75574 = state_75453__$1;
(statearr_75494_75574[(2)] = inst_75407);

(statearr_75494_75574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (11))){
var inst_75407 = (state_75453[(8)]);
var state_75453__$1 = state_75453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75453__$1,(14),inst_75407);
} else {
if((state_val_75454 === (9))){
var inst_75407 = (state_75453[(8)]);
var inst_75407__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_75408 = com.wsscode.async.async_cljs.chan_QMARK_(inst_75407__$1);
var state_75453__$1 = (function (){var statearr_75496 = state_75453;
(statearr_75496[(8)] = inst_75407__$1);

return statearr_75496;
})();
if(inst_75408){
var statearr_75497_75576 = state_75453__$1;
(statearr_75497_75576[(1)] = (11));

} else {
var statearr_75498_75577 = state_75453__$1;
(statearr_75498_75577[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (5))){
var _ = (function (){var statearr_75499 = state_75453;
(statearr_75499[(4)] = cljs.core.rest((state_75453[(4)])));

return statearr_75499;
})();
var state_75453__$1 = state_75453;
var ex75495 = (state_75453__$1[(2)]);
var statearr_75500_75579 = state_75453__$1;
(statearr_75500_75579[(5)] = ex75495);


var statearr_75501_75580 = state_75453__$1;
(statearr_75501_75580[(1)] = (4));

(statearr_75501_75580[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (14))){
var inst_75411 = (state_75453[(2)]);
var inst_75412 = com.wsscode.async.async_cljs.throw_err(inst_75411);
var state_75453__$1 = state_75453;
var statearr_75502_75582 = state_75453__$1;
(statearr_75502_75582[(2)] = inst_75412);

(statearr_75502_75582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (26))){
var inst_75447 = cljs.core.async.close_BANG_(ch__75196__auto__);
var state_75453__$1 = state_75453;
var statearr_75503_75585 = state_75453__$1;
(statearr_75503_75585[(2)] = inst_75447);

(statearr_75503_75585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (16))){
var state_75453__$1 = state_75453;
var statearr_75504_75586 = state_75453__$1;
(statearr_75504_75586[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (10))){
var inst_75439 = (state_75453[(2)]);
var state_75453__$1 = state_75453;
var statearr_75506_75588 = state_75453__$1;
(statearr_75506_75588[(2)] = inst_75439);

(statearr_75506_75588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (18))){
var inst_75418 = (state_75453[(2)]);
var inst_75419 = com.wsscode.async.async_cljs.consumer_pair(inst_75418);
var state_75453__$1 = state_75453;
var statearr_75507_75590 = state_75453__$1;
(statearr_75507_75590[(2)] = inst_75419);

(statearr_75507_75590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75454 === (8))){
var state_75453__$1 = state_75453;
var statearr_75508_75591 = state_75453__$1;
(statearr_75508_75591[(2)] = null);

(statearr_75508_75591[(1)] = (10));


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
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_75509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75509[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__);

(statearr_75509[(1)] = (1));

return statearr_75509;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____1 = (function (state_75453){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_75453);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e75510){var ex__50860__auto__ = e75510;
var statearr_75511_75595 = state_75453;
(statearr_75511_75595[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_75453[(4)]))){
var statearr_75512_75596 = state_75453;
(statearr_75512_75596[(1)] = cljs.core.first((state_75453[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75597 = state_75453;
state_75453 = G__75597;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__ = function(state_75453){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____1.call(this,state_75453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_75513 = f__50893__auto__();
(statearr_75513[(6)] = c__50892__auto___75552);

return statearr_75513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return ch__75196__auto__;
})());
var c__50892__auto___75598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_75522){
var state_val_75523 = (state_75522[(1)]);
if((state_val_75523 === (1))){
var inst_75517 = cljs.core.async.timeout(timeout);
var state_75522__$1 = state_75522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75522__$1,(2),inst_75517);
} else {
if((state_val_75523 === (2))){
var inst_75519 = (state_75522[(2)]);
var inst_75520 = cljs.core.reset_BANG_(_STAR_stop_QMARK_,true);
var state_75522__$1 = (function (){var statearr_75526 = state_75522;
(statearr_75526[(7)] = inst_75519);

return statearr_75526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75522__$1,inst_75520);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____0 = (function (){
var statearr_75527 = [null,null,null,null,null,null,null,null];
(statearr_75527[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__);

(statearr_75527[(1)] = (1));

return statearr_75527;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____1 = (function (state_75522){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_75522);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e75528){var ex__50860__auto__ = e75528;
var statearr_75529_75599 = state_75522;
(statearr_75529_75599[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_75522[(4)]))){
var statearr_75530_75600 = state_75522;
(statearr_75530_75600[(1)] = cljs.core.first((state_75522[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75601 = state_75522;
state_75522 = G__75601;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__ = function(state_75522){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____1.call(this,state_75522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_75531 = f__50893__auto__();
(statearr_75531[(6)] = c__50892__auto___75598);

return statearr_75531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));


return res;
});

//# sourceMappingURL=com.wsscode.async.async_cljs.js.map
