goog.provide('com.yetanalytics.squuid.time');
com.yetanalytics.squuid.time.max_time_emsg = ["Cannot generate SQUUID past August 2, 10889."," The timestamp would have exceeded 48 bits."].join('');
/**
 * The maximum underlying value of a 48-bit timestamp.
 */
com.yetanalytics.squuid.time.max_seconds = (281474976710655);
/**
 * Return the timestamp corresponding to the beginning of the UNIX epoch,
 * on Jan 1, 1970.
 */
com.yetanalytics.squuid.time.zero_time = (new Date((0)));
/**
 * Return the timestamp corresponding to the current system time.
 */
com.yetanalytics.squuid.time.current_time = (function com$yetanalytics$squuid$time$current_time(){
var curr_seconds = Date.now();
if((curr_seconds <= com.yetanalytics.squuid.time.max_seconds)){
} else {
throw (new Error(["Assert failed: ",com.yetanalytics.squuid.time.max_time_emsg,"\n","(<= curr-seconds max-seconds)"].join('')));
}

return (new Date(curr_seconds));
});
/**
 * Does `time1` occur strictly before `time2`?
 */
com.yetanalytics.squuid.time.before_QMARK_ = (function com$yetanalytics$squuid$time$before_QMARK_(time1,time2){
return (time1 < time2);
});

//# sourceMappingURL=com.yetanalytics.squuid.time.js.map
