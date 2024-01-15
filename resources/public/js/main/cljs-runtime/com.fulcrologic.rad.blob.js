goog.provide('com.fulcrologic.rad.blob');
com.fulcrologic.rad.blob.url_key = (function com$fulcrologic$rad$blob$url_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"url");
});
com.fulcrologic.rad.blob.progress_key = (function com$fulcrologic$rad$blob$progress_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"progress");
});
com.fulcrologic.rad.blob.status_key = (function com$fulcrologic$rad$blob$status_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"status");
});
com.fulcrologic.rad.blob.filename_key = (function com$fulcrologic$rad$blob$filename_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"filename");
});
com.fulcrologic.rad.blob.size_key = (function com$fulcrologic$rad$blob$size_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"size");
});
/**
 * Finds the SHA256 from the given Blob/File
 * 
 *   Returns an async channel that will eventually contain the hash or nil (if the input type was not understood).
 */
com.fulcrologic.rad.blob.file_sha256 = (function com$fulcrologic$rad$blob$file_sha256(blob){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var digest = (function (hasher,bytes){
hasher.update(bytes);

return hasher.digest();
});
var handler = (function (evt){
var buffer = evt.target.result;
var hash = goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),(new Uint8Array(buffer))));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_88519){
var state_val_88520 = (state_88519[(1)]);
if((state_val_88520 === (1))){
var state_88519__$1 = state_88519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_88519__$1,(2),c,hash);
} else {
if((state_val_88520 === (2))){
var inst_88517 = (state_88519[(2)]);
var state_88519__$1 = state_88519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88519__$1,inst_88517);
} else {
return null;
}
}
});
return (function() {
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__ = null;
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____0 = (function (){
var statearr_88521 = [null,null,null,null,null,null,null];
(statearr_88521[(0)] = com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__);

(statearr_88521[(1)] = (1));

return statearr_88521;
});
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____1 = (function (state_88519){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_88519);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e88524){var ex__50860__auto__ = e88524;
var statearr_88525_88612 = state_88519;
(statearr_88525_88612[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_88519[(4)]))){
var statearr_88527_88613 = state_88519;
(statearr_88527_88613[(1)] = cljs.core.first((state_88519[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88614 = state_88519;
state_88519 = G__88614;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__ = function(state_88519){
switch(arguments.length){
case 0:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____0.call(this);
case 1:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____1.call(this,state_88519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____0;
com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____1;
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_88528 = f__50893__auto__();
(statearr_88528[(6)] = c__50892__auto__);

return statearr_88528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
if((blob instanceof Blob)){
var reader_88615 = (new FileReader());
(reader_88615.onloadend = handler);

reader_88615.readAsArrayBuffer(blob);
} else {
}

var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_88532){
var state_val_88533 = (state_88532[(1)]);
if((state_val_88533 === (1))){
var state_88532__$1 = state_88532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88532__$1,(2),c);
} else {
if((state_val_88533 === (2))){
var inst_88530 = (state_88532[(2)]);
var state_88532__$1 = state_88532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88532__$1,inst_88530);
} else {
return null;
}
}
});
return (function() {
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__ = null;
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____0 = (function (){
var statearr_88534 = [null,null,null,null,null,null,null];
(statearr_88534[(0)] = com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__);

(statearr_88534[(1)] = (1));

return statearr_88534;
});
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____1 = (function (state_88532){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_88532);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e88535){var ex__50860__auto__ = e88535;
var statearr_88536_88616 = state_88532;
(statearr_88536_88616[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_88532[(4)]))){
var statearr_88537_88617 = state_88532;
(statearr_88537_88617[(1)] = cljs.core.first((state_88532[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88618 = state_88532;
state_88532 = G__88618;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__ = function(state_88532){
switch(arguments.length){
case 0:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____0.call(this);
case 1:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____1.call(this,state_88532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____0;
com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto____1;
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_88538 = f__50893__auto__();
(statearr_88538[(6)] = c__50892__auto__);

return statearr_88538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * Finds the SHA256 of the given string-or-bytes.
 * 
 *   On the JVM the argument can be a string or a byte array.
 *   In CLJS the argument can be a low-level string, Uint8Array, ArrayBuffer.
 * 
 *   Returns the hash or nil (if the input type was not understood).
 */
com.fulcrologic.rad.blob.sha256 = (function com$fulcrologic$rad$blob$sha256(string_or_bytes){
var digest = (function com$fulcrologic$rad$blob$sha256_$_digest(hasher,bytes){
hasher.update(bytes);

return hasher.digest();
});
if(typeof string_or_bytes === 'string'){
return goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),goog.crypt.stringToByteArray(string_or_bytes)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Uint8Array,cljs.core.type(string_or_bytes))){
return goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),string_or_bytes));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ArrayBuffer,cljs.core.type(string_or_bytes))){
return goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),(new Uint8Array(string_or_bytes))));
} else {
return null;
}
}
}
});

var options__56259__auto___88619 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$blob$query_STAR_(_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","uploading?","ui/uploading?",316177944),new cljs.core.Keyword("ui","percent-complete","ui/percent-complete",-1380623404),new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722),new cljs.core.Keyword("com.fulcrologic.rad.blob","local-filename","com.fulcrologic.rad.blob/local-filename",-1916328935),new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null);
}),new cljs.core.Keyword(null,"form-fields","form-fields",35924568),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.blob","local-filename","com.fulcrologic.rad.blob/local-filename",-1916328935),null,new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570),null], null), null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$rad$blob$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722),new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__88539){
var map__88540 = p__88539;
var map__88540__$1 = (((((!((map__88540 == null))))?(((((map__88540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88540):map__88540);
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88540__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","uploading?","ui/uploading?",316177944),false,new cljs.core.Keyword("ui","percent-complete","ui/percent-complete",-1380623404),(0),new cljs.core.Keyword("com.fulcrologic.rad.blob","local-filename","com.fulcrologic.rad.blob/local-filename",-1916328935),"file"], null),data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$blob$render_Blob(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.blob !== 'undefined') && (typeof com.fulcrologic.rad.blob.Blob !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.blob.Blob = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__56259__auto___88619,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.blob.Blob,new cljs.core.Keyword("com.fulcrologic.rad.blob","Blob","com.fulcrologic.rad.blob/Blob",-1396720242),options__56259__auto___88619);
com.fulcrologic.rad.blob.ui_blob = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.blob.Blob,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722)], null));
com.fulcrologic.rad.blob.upload_file = com.fulcrologic.fulcro.mutations.__GT_Mutation(cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("com.fulcrologic.rad.blob","upload-file","com.fulcrologic.rad.blob/upload-file",-1517758941,null)));
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.blob","upload-file","com.fulcrologic.rad.blob/upload-file",-1517758941,null),(function (p__88542){
var map__88543 = p__88542;
var map__88543__$1 = (((((!((map__88543 == null))))?(((((map__88543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88543):map__88543);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88543__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__88545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235));
var map__88545__$1 = (((((!((map__88545 == null))))?(((((map__88545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88545):map__88545);
var file_sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88545__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88545__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","filename","com.fulcrologic.rad.blob/filename",-1656275233));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88545__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88545__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var file_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88545__$1,new cljs.core.Keyword(null,"file-ident","file-ident",1455261634));
var remote_key = (function (){var or__4126__auto__ = remote;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})();
var name_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(file_ident,com.fulcrologic.rad.blob.filename_key(qualified_key));
var status_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(file_ident,com.fulcrologic.rad.blob.status_key(qualified_key));
var progress_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(file_ident,com.fulcrologic.rad.blob.progress_key(qualified_key));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$blob$progress_action(p__88547){
var map__88548 = p__88547;
var map__88548__$1 = (((((!((map__88548 == null))))?(((((map__88548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88548):map__88548);
var env = map__88548__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88548__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__63988__auto__){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(s__63988__auto__,name_path,filename),progress_path,(0)),status_path,new cljs.core.Keyword(null,"uploading","uploading",1069939393));
}));
}),new cljs.core.Keyword(null,"progress-action","progress-action",1342780181),(function com$fulcrologic$rad$blob$progress_action(p__88550){
var map__88551 = p__88550;
var map__88551__$1 = (((((!((map__88551 == null))))?(((((map__88551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88551):map__88551);
var env = map__88551__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88551__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var pct = com.fulcrologic.fulcro.networking.http_remote.overall_progress(env);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.blob",null,133,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress update",pct], null);
}),null)),null,-2106605874,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,progress_path,pct);
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function com$fulcrologic$rad$blob$result_action(p__88553){
var map__88554 = p__88553;
var map__88554__$1 = (((((!((map__88554 == null))))?(((((map__88554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88554):map__88554);
var env = map__88554__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88554__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88554__$1,new cljs.core.Keyword(null,"result","result",1415092211));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.blob",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload complete",result], null);
}),null)),null,-305957783,null);

var ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status-code","status-code",-1060410130).cljs$core$IFn$_invoke$arity$1(result));
com.fulcrologic.fulcro.mutations.default_result_action_BANG_(env);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__63988__auto__){
return cljs.core.assoc_in(cljs.core.assoc_in(s__63988__auto__,status_path,((ok_QMARK_)?new cljs.core.Keyword(null,"available","available",-1470697127):new cljs.core.Keyword(null,"failed","failed",-1397425762))),progress_path,((ok_QMARK_)?(100):(0)));
}));
}),remote_key,(function com$fulcrologic$rad$blob$remote(env){
if(edn_query_language.core.ident_QMARK_(file_ident)){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(file_ident),qualified_key,com.fulcrologic.rad.blob.status_key(qualified_key),com.fulcrologic.rad.blob.filename_key(qualified_key),com.fulcrologic.rad.blob.url_key(qualified_key)], null)));
} else {
return true;
}
})]);
}));
/**
 * This computes a SHA for the js-file, starts the upload (with progress tracking), and
 *   sets the form attribute to the SHA. The narrowed attributes (e.g. :file.sha/progress) will be updated as the file
 *   upload progresses. The rendering layer will auto-detect when a file upload attribute is a SHA
 *   and can render the progress of the upload (possibly with a preview, etc.).
 * 
 *   The upload can be aborted using the SHA.
 */
com.fulcrologic.rad.blob.upload_file_BANG_ = (function com$fulcrologic$rad$blob$upload_file_BANG_(form_instance,p__88556,js_file,p__88557){
var map__88558 = p__88556;
var map__88558__$1 = (((((!((map__88558 == null))))?(((((map__88558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88558):map__88558);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88558__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","remote","com.fulcrologic.rad.blob/remote",-1282256314));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88558__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__88559 = p__88557;
var map__88559__$1 = (((((!((map__88559 == null))))?(((((map__88559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88559):map__88559);
var file_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88559__$1,new cljs.core.Keyword(null,"file-ident","file-ident",1455261634));
var c__50892__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50893__auto__ = (function (){var switch__50856__auto__ = (function (state_88592){
var state_val_88593 = (state_88592[(1)]);
if((state_val_88593 === (1))){
var inst_88562 = com.fulcrologic.rad.blob.file_sha256(js_file);
var state_88592__$1 = state_88592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88592__$1,(2),inst_88562);
} else {
if((state_val_88593 === (2))){
var inst_88565 = (state_88592[(7)]);
var inst_88564 = (state_88592[(2)]);
var inst_88565__$1 = js_file.name;
var state_88592__$1 = (function (){var statearr_88594 = state_88592;
(statearr_88594[(8)] = inst_88564);

(statearr_88594[(7)] = inst_88565__$1);

return statearr_88594;
})();
if(cljs.core.truth_(inst_88565__$1)){
var statearr_88595_88637 = state_88592__$1;
(statearr_88595_88637[(1)] = (3));

} else {
var statearr_88596_88638 = state_88592__$1;
(statearr_88596_88638[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88593 === (3))){
var inst_88565 = (state_88592[(7)]);
var state_88592__$1 = state_88592;
var statearr_88597_88639 = state_88592__$1;
(statearr_88597_88639[(2)] = inst_88565);

(statearr_88597_88639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88593 === (4))){
var state_88592__$1 = state_88592;
var statearr_88598_88640 = state_88592__$1;
(statearr_88598_88640[(2)] = "file");

(statearr_88598_88640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88593 === (5))){
var inst_88569 = (state_88592[(9)]);
var inst_88576 = (state_88592[(10)]);
var inst_88569__$1 = (state_88592[(2)]);
var inst_88570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88571 = com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2(inst_88569__$1,js_file);
var inst_88572 = [inst_88571];
var inst_88573 = (new cljs.core.PersistentVector(null,1,(5),inst_88570,inst_88572,null));
var inst_88574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88575 = [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),new cljs.core.Keyword("com.fulcrologic.rad.blob","filename","com.fulcrologic.rad.blob/filename",-1656275233),new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570)];
var inst_88576__$1 = remote;
var state_88592__$1 = (function (){var statearr_88599 = state_88592;
(statearr_88599[(9)] = inst_88569__$1);

(statearr_88599[(11)] = inst_88573);

(statearr_88599[(12)] = inst_88574);

(statearr_88599[(13)] = inst_88575);

(statearr_88599[(10)] = inst_88576__$1);

return statearr_88599;
})();
if(cljs.core.truth_(inst_88576__$1)){
var statearr_88600_88649 = state_88592__$1;
(statearr_88600_88649[(1)] = (6));

} else {
var statearr_88601_88650 = state_88592__$1;
(statearr_88601_88650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88593 === (6))){
var inst_88576 = (state_88592[(10)]);
var state_88592__$1 = state_88592;
var statearr_88602_88652 = state_88592__$1;
(statearr_88602_88652[(2)] = inst_88576);

(statearr_88602_88652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88593 === (7))){
var state_88592__$1 = state_88592;
var statearr_88603_88653 = state_88592__$1;
(statearr_88603_88653[(2)] = new cljs.core.Keyword(null,"remote","remote",-1593576576));

(statearr_88603_88653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88593 === (8))){
var inst_88569 = (state_88592[(9)]);
var inst_88564 = (state_88592[(8)]);
var inst_88575 = (state_88592[(13)]);
var inst_88573 = (state_88592[(11)]);
var inst_88574 = (state_88592[(12)]);
var inst_88580 = (state_88592[(2)]);
var inst_88581 = [file_ident,inst_88580,qualified_key,inst_88569,inst_88564];
var inst_88582 = cljs.core.PersistentHashMap.fromArrays(inst_88575,inst_88581);
var inst_88583 = com.fulcrologic.fulcro.networking.file_upload.attach_uploads(inst_88582,inst_88573);
var inst_88584 = (com.fulcrologic.rad.blob.upload_file.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.blob.upload_file.cljs$core$IFn$_invoke$arity$1(inst_88583) : com.fulcrologic.rad.blob.upload_file.call(null,inst_88583));
var inst_88585 = [inst_88584];
var inst_88586 = (new cljs.core.PersistentVector(null,1,(5),inst_88574,inst_88585,null));
var inst_88587 = [new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)];
var inst_88588 = [inst_88564];
var inst_88589 = cljs.core.PersistentHashMap.fromArrays(inst_88587,inst_88588);
var inst_88590 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(form_instance,inst_88586,inst_88589);
var state_88592__$1 = state_88592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88592__$1,inst_88590);
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
});
return (function() {
var com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto__ = null;
var com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto____0 = (function (){
var statearr_88604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88604[(0)] = com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto__);

(statearr_88604[(1)] = (1));

return statearr_88604;
});
var com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto____1 = (function (state_88592){
while(true){
var ret_value__50858__auto__ = (function (){try{while(true){
var result__50859__auto__ = switch__50856__auto__(state_88592);
if(cljs.core.keyword_identical_QMARK_(result__50859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50859__auto__;
}
break;
}
}catch (e88605){var ex__50860__auto__ = e88605;
var statearr_88606_88658 = state_88592;
(statearr_88606_88658[(2)] = ex__50860__auto__);


if(cljs.core.seq((state_88592[(4)]))){
var statearr_88607_88659 = state_88592;
(statearr_88607_88659[(1)] = cljs.core.first((state_88592[(4)])));

} else {
throw ex__50860__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88660 = state_88592;
state_88592 = G__88660;
continue;
} else {
return ret_value__50858__auto__;
}
break;
}
});
com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto__ = function(state_88592){
switch(arguments.length){
case 0:
return com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto____0.call(this);
case 1:
return com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto____1.call(this,state_88592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto____0;
com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto____1;
return com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__50857__auto__;
})()
})();
var state__50894__auto__ = (function (){var statearr_88608 = f__50893__auto__();
(statearr_88608[(6)] = c__50892__auto__);

return statearr_88608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50894__auto__);
}));

return c__50892__auto__;
});
/**
 * Build a (fn [env] env') that adds RAD BLOB info to an env. If `base-wrapper` is supplied, then it will be called
 * as part of the evaluation, allowing you to build up a chain of environment middleware.
 * 
 * ```
 * (def build-env
 *   (-> (wrap-env temp-store perm-store)
 *      ...))
 * 
 * ;; Pathom 2
 * (def env-plugin (p/env-wrap-plugin build-env))
 * 
 * ;; Pathom 3
 * (let [base-env (pci/register [...])
 *       env (build-env base-env)]
 *    (process env eql))
 * ```
 * 
 * similar to Ring middleware.
 * 
 */
com.fulcrologic.rad.blob.wrap_env = (function com$fulcrologic$rad$blob$wrap_env(var_args){
var G__88610 = arguments.length;
switch (G__88610) {
case 2:
return com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$2 = (function (temporary_store,permanent_stores){
return com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$3(null,temporary_store,permanent_stores);
}));

(com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$3 = (function (base_wrapper,temporary_store,permanent_stores){
return (function (env){
var G__88611 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.fulcrologic.rad.blob","temporary-store","com.fulcrologic.rad.blob/temporary-store",1284677161),temporary_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.blob","permanent-stores","com.fulcrologic.rad.blob/permanent-stores",-1456142397),permanent_stores], 0));
if(cljs.core.truth_(base_wrapper)){
return (base_wrapper.cljs$core$IFn$_invoke$arity$1 ? base_wrapper.cljs$core$IFn$_invoke$arity$1(G__88611) : base_wrapper.call(null,G__88611));
} else {
return G__88611;
}
});
}));

(com.fulcrologic.rad.blob.wrap_env.cljs$lang$maxFixedArity = 3);

/**
 * Convert a file input change event into a sequence of the js File objects.
 */
com.fulcrologic.rad.blob.evt__GT_js_files = (function com$fulcrologic$rad$blob$evt__GT_js_files(evt){
var js_file_list = evt.target.files;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file_idx){
var js_file = js_file_list.item(file_idx);
var name = js_file.name;
return js_file;
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(js_file_list.length));
});
/**
 * Returns true if the blob tracked by `sha-key` in the given `form-props` is in a state that would allow for a download.
 */
com.fulcrologic.rad.blob.blob_downloadable_QMARK_ = (function com$fulcrologic$rad$blob$blob_downloadable_QMARK_(form_props,sha_key){
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.status_key(sha_key));
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,sha_key);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.url_key(sha_key));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"available","available",-1470697127),status)) && (cljs.core.seq(sha)) && (cljs.core.seq(url)));
});
/**
 * Returns true of the blob tracked by sha-key is actively being uploaded.
 */
com.fulcrologic.rad.blob.uploading_QMARK_ = (function com$fulcrologic$rad$blob$uploading_QMARK_(form_props,sha_key){
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.status_key(sha_key));
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,sha_key);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uploading","uploading",1069939393),status)) && (cljs.core.seq(sha)));
});
/**
 * Returns true of the blob tracked by sha-key failed to upload.
 */
com.fulcrologic.rad.blob.failed_upload_QMARK_ = (function com$fulcrologic$rad$blob$failed_upload_QMARK_(form_props,sha_key){
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.status_key(sha_key));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failed","failed",-1397425762),status);
});
/**
 * Returns a string of the form "n%" which represents what percentage of the given blob identified by
 *   sha-key has made it to the server.
 */
com.fulcrologic.rad.blob.upload_percentage = (function com$fulcrologic$rad$blob$upload_percentage(props,sha_key){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,com.fulcrologic.rad.blob.progress_key(sha_key),(0))),"%"].join('');
});

//# sourceMappingURL=com.fulcrologic.rad.blob.js.map
