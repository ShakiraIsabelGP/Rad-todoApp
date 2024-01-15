goog.provide('com.fulcrologic.rad.type_support.js_date_formatter');
/**
 * [format-str]
 * 
 * Turns a string that has repeating characters into groups of those repeating letters. This function is memoized, so
 * it is best to ONLY use it on date/time format patterns, of which there will likely be few.
 */
com.fulcrologic.rad.type_support.js_date_formatter.tokenize = (function com$fulcrologic$rad$type_support$js_date_formatter$tokenize(format_str){
var add_token = (function (p__72241){
var map__72242 = p__72241;
var map__72242__$1 = (((((!((map__72242 == null))))?(((((map__72242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72242):map__72242);
var acc = map__72242__$1;
var literal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72242__$1,new cljs.core.Keyword(null,"literal?","literal?",352485871));
var letters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72242__$1,new cljs.core.Keyword(null,"letters","letters",2098125298));
if(cljs.core.seq(letters)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.conj,(function (){var G__72244 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(letters);
if(cljs.core.truth_(literal_QMARK_)){
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"literal","literal",1664775605),G__72244],null));
} else {
return G__72244;
}
})());
} else {
return acc;
}
});
var acc = (function (){var letters = cljs.core.seq(format_str);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__72245,letter){
var map__72246 = p__72245;
var map__72246__$1 = (((((!((map__72246 == null))))?(((((map__72246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72246):map__72246);
var acc = map__72246__$1;
var literal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72246__$1,new cljs.core.Keyword(null,"literal?","literal?",352485871));
var prior_letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72246__$1,new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",letter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",prior_letter)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"literal?","literal?",352485871),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"letters","letters",2098125298),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574),""], 0)),new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"literal","literal",1664775605),"'"], null));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = literal_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",letter);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(add_token(acc),new cljs.core.Keyword(null,"literal?","literal?",352485871),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"letters","letters",2098125298),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574),""], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",letter)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(add_token(acc),new cljs.core.Keyword(null,"literal?","literal?",352485871),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"letters","letters",2098125298),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574),"'"], 0));
} else {
if(cljs.core.truth_(literal_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574),letter),new cljs.core.Keyword(null,"letters","letters",2098125298),cljs.core.conj,letter);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior_letter,letter)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"letters","letters",2098125298),cljs.core.conj,letter);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(add_token(acc),new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574),letter),new cljs.core.Keyword(null,"letters","letters",2098125298),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [letter], null));

}
}
}
}
}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"literal?","literal?",352485871),false,new cljs.core.Keyword(null,"letters","letters",2098125298),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prior-letter","prior-letter",17228574),null], null),letters);
})();
return new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(add_token(acc));
});
com.fulcrologic.rad.type_support.js_date_formatter.std_formatter = (function com$fulcrologic$rad$type_support$js_date_formatter$std_formatter(p__72248){
var map__72249 = p__72248;
var map__72249__$1 = (((((!((map__72249 == null))))?(((((map__72249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72249):map__72249);
var options = map__72249__$1;
var zero_pad_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72249__$1,new cljs.core.Keyword(null,"zero-pad?","zero-pad?",-1203356908));
var zero_pad = (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(s))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;
}
});
return (function (locale_name,zone_name){
var formatter = (new Intl.DateTimeFormat(locale_name,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeZone","timeZone",-1874446783),zone_name], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"zero-pad?","zero-pad?",-1203356908))], 0)))));
return (function (inst){
var G__72251 = formatter.format(inst);
if(cljs.core.truth_(zero_pad_QMARK_)){
return zero_pad(G__72251);
} else {
return G__72251;
}
});
});
});
com.fulcrologic.rad.type_support.js_date_formatter.zone_name_formatter = (function com$fulcrologic$rad$type_support$js_date_formatter$zone_name_formatter(format){
return (function (locale_name,zone_name){
var formatter = (new Intl.DateTimeFormat(locale_name,({"timeZone": zone_name, "timeZoneName": format, "minute": "numeric"})));
return (function (inst){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(formatter.format(inst),/\s+/));
});
});
});
com.fulcrologic.rad.type_support.js_date_formatter.seconds__GT_zone_offset = (function com$fulcrologic$rad$type_support$js_date_formatter$seconds__GT_zone_offset(totalSeconds,size){
var absTotalSeconds = (Math.abs(totalSeconds) | (0));
var absSeconds = (cljs.core.mod(absTotalSeconds,(60)) | (0));
var absHours = ((absTotalSeconds / (3600)) | (0));
var absMinutes = (cljs.core.mod((absTotalSeconds / (60)),(60)) | (0));
var sign = (((totalSeconds < (0)))?"-":"+");
var hours = [(((absHours < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(absHours)].join('');
var mins = [(((absMinutes < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(absMinutes)].join('');
var secs = [(((absSeconds < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(absSeconds)].join('');
if((totalSeconds === (0))){
return "Z";
} else {
var G__72252 = size;
switch (G__72252) {
case (1):
return [sign,hours,(((absMinutes > (0)))?mins:null)].join('');

break;
case (2):
return [sign,hours,mins].join('');

break;
case (3):
return [sign,hours,":",mins].join('');

break;
case (4):
return [sign,hours,mins,(((absSeconds > (0)))?secs:null)].join('');

break;
case (5):
return [sign,hours,":",mins,(((absSeconds > (0)))?[":",secs].join(''):null)].join('');

break;
default:
return null;

}
}
});
com.fulcrologic.rad.type_support.js_date_formatter.zone_offset_formatter = (function com$fulcrologic$rad$type_support$js_date_formatter$zone_offset_formatter(size){
return (function (_,zone_name){
return (function (inst){
var z = cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1(zone_name);
var i = cljc.java_time.instant.of_epoch_milli(cljs.core.inst_ms((function (){var or__4126__auto__ = inst;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new Date());
}
})()));
var offset = cljc.java_time.zoned_date_time.get_offset(cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(i,z));
return com.fulcrologic.rad.type_support.js_date_formatter.seconds__GT_zone_offset(cljc.java_time.zone_offset.get_total_seconds(offset),size);
});
});
});
com.fulcrologic.rad.type_support.js_date_formatter.format_map = cljs.core.PersistentHashMap.fromArrays(["d","XX","HH","ZZ","s","MMM","XXX","ss","M","mm","MM","EEE","Z","H","E","yyy","dd","a","MMMMM","ZZZZ","ZZZ","hh","y","yyyy","X","EE","XXXXX","h","XXXX","m","yy","MMMM"],[com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"day","day",-274800446),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_offset_formatter((2)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hour12","hour12",788435038),false,new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_name_formatter("short"),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"second","second",-444702010),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),"short"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_offset_formatter((3)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"second","second",-444702010),"numeric",new cljs.core.Keyword(null,"zero-pad?","zero-pad?",-1203356908),true], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"minute","minute",-642875969),"numeric",new cljs.core.Keyword(null,"zero-pad?","zero-pad?",-1203356908),true], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),"2-digit"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"narrow"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_name_formatter("short"),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hour12","hour12",788435038),false,new cljs.core.Keyword(null,"hour","hour",-555989214),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"short"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",-274800446),"numeric",new cljs.core.Keyword(null,"zero-pad?","zero-pad?",-1203356908),true], null)),(function (locale_name,zone_name){
var formatter = (new Intl.DateTimeFormat(locale_name,({"timeZone": zone_name, "hour12": true, "hour": "numeric"})));
return (function (inst){
var or__4126__auto__ = (function (){var G__72254 = cljs.core.re_matches(/^\d+(.*)$/,formatter.format(inst));
var G__72254__$1 = (((G__72254 == null))?null:cljs.core.second(G__72254));
if((G__72254__$1 == null)){
return null;
} else {
return clojure.string.trim(G__72254__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
});
}),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),"narrow"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_name_formatter("long"),com.fulcrologic.rad.type_support.js_date_formatter.zone_name_formatter("short"),(function (locale_name,zone_name){
var formatter = (new Intl.DateTimeFormat(locale_name,({"timeZone": zone_name, "hour12": true, "hour": "2-digit"})));
return (function (inst){
return cljs.core.second(cljs.core.re_matches(/^(\d+).*$/,formatter.format(inst)));
});
}),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_offset_formatter((1)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"long"], null)),com.fulcrologic.rad.type_support.js_date_formatter.zone_offset_formatter((5)),(function (locale_name,zone_name){
var formatter = (new Intl.DateTimeFormat(locale_name,({"timeZone": zone_name, "hour12": true, "hour": "numeric"})));
return (function (inst){
return cljs.core.second(cljs.core.re_matches(/^(\d+).*$/,formatter.format(inst)));
});
}),com.fulcrologic.rad.type_support.js_date_formatter.zone_offset_formatter((4)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minute","minute",-642875969),"numeric"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),"2-digit"], null)),com.fulcrologic.rad.type_support.js_date_formatter.std_formatter(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),"long"], null))]);
/**
 * Build a formatter. Returns a `(fn [inst] string?)`.
 */
com.fulcrologic.rad.type_support.js_date_formatter.new_formatter = (function com$fulcrologic$rad$type_support$js_date_formatter$new_formatter(format_str,locale_name,zone_name){
var tokens = com.fulcrologic.rad.type_support.js_date_formatter.tokenize(format_str);
var generator = (function (token){
if(cljs.core.map_QMARK_(token)){
return cljs.core.constantly(new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(token));
} else {
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.type_support.js_date_formatter.format_map,token);
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(locale_name,zone_name) : f.call(null,locale_name,zone_name));
} else {
return cljs.core.constantly(token);
}
}
});
var generators = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(generator,tokens);
return (function (inst){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (gen){
return (gen.cljs$core$IFn$_invoke$arity$1 ? gen.cljs$core$IFn$_invoke$arity$1(inst) : gen.call(null,inst));
}),generators));
});
});

//# sourceMappingURL=com.fulcrologic.rad.type_support.js_date_formatter.js.map
