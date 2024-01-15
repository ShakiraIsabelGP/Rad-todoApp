goog.provide('com.yetanalytics.squuid.uuid');
com.yetanalytics.squuid.uuid.bit_mask_16 = BigInt((65535));
com.yetanalytics.squuid.uuid.bit_shift_16 = BigInt((16));
/**
 * The v0 UUID of all zeroes.
 */
com.yetanalytics.squuid.uuid.zero_uuid = new cljs.core.UUID("00000000-0000-0000-0000-000000000000", 1297391103);
/**
 * Generate a random v4 UUID.
 */
com.yetanalytics.squuid.uuid.rand_uuid = (function com$yetanalytics$squuid$uuid$rand_uuid(){
return cljs.core.random_uuid();
});
/**
 * Returns:
 * - (< uuid1 uuid2): -1
 * - (= uuid1 uuid2): 0
 * - (> uuid1 uuid2): 1
 */
com.yetanalytics.squuid.uuid.compare_uuid = (function com$yetanalytics$squuid$uuid$compare_uuid(u1,u2){
var u1__$1 = u1.toString();
var u2__$1 = u2.toString();
if((u1__$1 < u2__$1)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u1__$1,u2__$1)){
return (0);
} else {
if((u1__$1 > u2__$1)){
return (1);
} else {
return null;
}
}
}
});
/**
 * Extracts the first 48 bits of a SQUUID corresponding to a timestamp.
 */
com.yetanalytics.squuid.uuid.extract_ts_bytes = (function com$yetanalytics$squuid$uuid$extract_ts_bytes(uuid){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid);
return parseInt([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(8)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(9),(13))].join(''),(16));
});
com.yetanalytics.squuid.uuid.throw_inc_uuid_error = (function com$yetanalytics$squuid$uuid$throw_inc_uuid_error(u){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot increment UUID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)," any further."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.yetanalytics.squuid.uuid","exceeded-max-uuid-node","com.yetanalytics.squuid.uuid/exceeded-max-uuid-node",-768609543),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),u], null));
});
com.yetanalytics.squuid.uuid.throw_neg_timestamp = (function com$yetanalytics$squuid$uuid$throw_neg_timestamp(ts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Timestamp ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," occurs before January 1, 1970"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.yetanalytics.squuid.uuid","negative-timestamp","com.yetanalytics.squuid.uuid/negative-timestamp",116349800),new cljs.core.Keyword(null,"time","time",1385887882),ts], null));
});
com.yetanalytics.squuid.uuid.ts__GT_num = (function com$yetanalytics$squuid$uuid$ts__GT_num(ts){
var ts_num = cljs.core.inst_ms(ts);
if(cljs.core.nat_int_QMARK_(ts_num)){
} else {
com.yetanalytics.squuid.uuid.throw_neg_timestamp(ts);
}

return ts_num;
});
/**
 * Increment the UUID by one bit. Throws an exception if there are no available
 * bits left to increment.
 */
com.yetanalytics.squuid.uuid.inc_uuid = (function com$yetanalytics$squuid$uuid$inc_uuid(u){
var u_char_arr = Array.from(u.toString());
var inc_char = (function (c){
return (parseInt(c,(16)) + (1)).toString((16));
});
var ret_uuid = (function (char_arr){
return (new cljs.core.UUID(clojure.string.join.cljs$core$IFn$_invoke$arity$1(char_arr),null));
});
var i = (35);
while(true){
if(((((23) < i)) || (((((19) < i)) && ((i < (23))))) || (((((14) < i)) && ((i < (18))))))){
var c = (u_char_arr[i]);
if(((("F" === c)) || (("f" === c)))){
(u_char_arr[i] = "0");

var G__69045 = (i - (1));
i = G__69045;
continue;
} else {
(u_char_arr[i] = inc_char(c));

return ret_uuid(u_char_arr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),i)){
var c = (u_char_arr[i]);
if(((("B" === c)) || (("b" === c)))){
(u_char_arr[i] = "8");

var G__69046 = (i - (1));
i = G__69046;
continue;
} else {
(u_char_arr[i] = inc_char(c));

return ret_uuid(u_char_arr);
}
} else {
if(cljs.core.truth_((function (){var fexpr__69042 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(23),null,(18),null], null), null);
return (fexpr__69042.cljs$core$IFn$_invoke$arity$1 ? fexpr__69042.cljs$core$IFn$_invoke$arity$1(i) : fexpr__69042.call(null,i));
})())){
var G__69047 = (i - (1));
i = G__69047;
continue;
} else {
return com.yetanalytics.squuid.uuid.throw_inc_uuid_error(u);

}
}
}
break;
}
});
/**
 * Make a new v8 sequential UUID. Uses `uuid` as the base UUID if provided;
 * otherwise uses a random v4 UUID as the base. Returns a map containing
 * `:base-uuid` and `:squuid`.
 */
com.yetanalytics.squuid.uuid.make_squuid = (function com$yetanalytics$squuid$uuid$make_squuid(var_args){
var G__69044 = arguments.length;
switch (G__69044) {
case 1:
return com.yetanalytics.squuid.uuid.make_squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.yetanalytics.squuid.uuid.make_squuid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.yetanalytics.squuid.uuid.make_squuid.cljs$core$IFn$_invoke$arity$1 = (function (ts){
return com.yetanalytics.squuid.uuid.make_squuid.cljs$core$IFn$_invoke$arity$2(ts,com.yetanalytics.squuid.uuid.rand_uuid());
}));

(com.yetanalytics.squuid.uuid.make_squuid.cljs$core$IFn$_invoke$arity$2 = (function (ts,u){
var make_padding = (function (max_len,s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((max_len - cljs.core.count(s)),"0"));
});
var ts_SINGLEQUOTE_ = BigInt(com.yetanalytics.squuid.uuid.ts__GT_num(ts));
var ts_hi = (ts_SINGLEQUOTE_ >> com.yetanalytics.squuid.uuid.bit_shift_16);
var ts_lo = (ts_SINGLEQUOTE_ & com.yetanalytics.squuid.uuid.bit_mask_16);
var ts_hs = ts_hi.toString((16));
var ts_ls = ts_lo.toString((16));
var ts_hp = make_padding((8),ts_hs);
var ts_lp = make_padding((4),ts_ls);
var u_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(u.toString(),(15));
var raw_squuid = [ts_hp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts_hs),"-",ts_lp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts_ls),"-","8",u_str].join('');
var cooked_squuid = (new cljs.core.UUID(raw_squuid,null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-uuid","base-uuid",103954610),u,new cljs.core.Keyword(null,"squuid","squuid",756227972),cooked_squuid], null);
}));

(com.yetanalytics.squuid.uuid.make_squuid.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.yetanalytics.squuid.uuid.js.map
