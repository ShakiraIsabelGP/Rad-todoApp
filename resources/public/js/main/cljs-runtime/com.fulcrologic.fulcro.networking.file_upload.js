goog.provide('com.fulcrologic.fulcro.networking.file_upload');
/**
 * Create a new upload object from a string name and a js object (Blob, ArrayBuffer, or File). The resulting map is
 *   safe to store in app state. If `content-type` is supplied then the file upload support will attempt to force the
 *   content type to the one provided. Normally js File objects will auto-set their MIME type, but this can sometimes be
 *   mis-interpreted by server MIME configurations.
 * 
 *   See `attach-uploads`.
 */
com.fulcrologic.fulcro.networking.file_upload.new_upload = (function com$fulcrologic$fulcro$networking$file_upload$new_upload(var_args){
var G__71564 = arguments.length;
switch (G__71564) {
case 2:
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2 = (function (name,content){
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3(name,content,null);
}));

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3 = (function (name,content,content_type){
var G__71565 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","name","file/name",1848919477),name,new cljs.core.Keyword("file","content","file/content",12680964),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-value","js-value",-758336661),content], null))], null);
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71565,new cljs.core.Keyword("file","content-type","file/content-type",-513460014),content_type);
} else {
return G__71565;
}
}));

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$lang$maxFixedArity = 3);

/**
 * Converts a file input onChange event into a sequence upload objects that are compatible with `attach-uploads`.
 * 
 * If you want to manually set the content type of any item, then add a `:file/content-type` key/value pair to the
 * returned uploads (which are just clojure maps), or pass a content-type argument to have that content type applied
 * to ALL of the uploads.  NOTE: some server middleware can mis-interpret certain MIME types and open Readers on them
 * instead of byte streams, leading to file corruption of the uploaded file.  You can try forcing the MIME type to
 * `application/octet-stream` to overcome this.
 */
com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads = (function com$fulcrologic$fulcro$networking$file_upload$evt__GT_uploads(var_args){
var G__71567 = arguments.length;
switch (G__71567) {
case 2:
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2 = (function (file_input_change_event,content_type){
var js_file_list = file_input_change_event.target.files;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file_idx){
var js_file = js_file_list.item(file_idx);
var name = js_file.name;
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3(name,js_file,content_type);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(js_file_list.length));
}));

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$1 = (function (file_input_change_event){
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2(file_input_change_event,null);
}));

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$lang$maxFixedArity = 2);

/**
 * Attach js Blob or ArrayBuffer objects to the `params`. This requires that you use `http-remote` and that you
 * also install `wrap-file-upload` middleware. If you use js/File objects then the filenames of those objects
 * will be available to the mutations on the server.
 * 
 * Example usage:
 * 
 * ```
 * (let [uploads [(file-upload/new-upload "test" some-js-file)
 *                (file-upload/new-upload "other" other-js-file)]]
 *   (comp/transact! this [(some-mutation (attach-uploads {} uploads))]))
 * ```
 * 
 * If you are using a browser file input, you can use `evt->uploads`:
 * 
 * ```
 * (dom/input {:type "file"
 *             :multiple true
 *             :onChange (fn [evt]
 *                         (let [uploads (file-upload/evt->uploads evt)]
 *                           (comp/transact! this [(some-mutation (file-upload/attach-uploads {} uploads))])))})
 * ```
 * 
 */
com.fulcrologic.fulcro.networking.file_upload.attach_uploads = (function com$fulcrologic$fulcro$networking$file_upload$attach_uploads(params,objects_to_upload){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167),objects_to_upload);
});
com.fulcrologic.fulcro.networking.file_upload.has_uploads_QMARK_ = (function com$fulcrologic$fulcro$networking$file_upload$has_uploads_QMARK_(req){
var mutations = (function (){var G__71568 = req;
var G__71568__$1 = (((G__71568 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__71568));
var G__71568__$2 = (((G__71568__$1 == null))?null:edn_query_language.core.query__GT_ast(G__71568__$1));
if((G__71568__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__71568__$2);
}
})();
var mutation_with_upload = cljs.core.some((function (p__71569){
var map__71570 = p__71569;
var map__71570__$1 = (((((!((map__71570 == null))))?(((((map__71570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71570):map__71570);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71570__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167));
}),mutations);
return cljs.core.boolean$(mutation_with_upload);
});
/**
 * Coerce the js object into a blob to ensure it can be uploaded.
 */
com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object = (function com$fulcrologic$fulcro$networking$file_upload$js_value__GT_uploadable_object(v,content_type){
var G__71572 = (((v instanceof Blob))?v:Blob([v]));
if(cljs.core.truth_(content_type)){
return G__71572.slice((0),v.size,content_type);
} else {
return G__71572;
}
});
/**
 * Adds support for attaching uploads to the parameters of any mutation.
 * 
 * `transit-options` - A map of options to be included when converting the mutation and params for transmission. See
 *                     `transit/transit-clj->str`. Use this to extend the transit support. This is necessary because
 *                     the regular request middleware will not be used to send transactions that include file uploads,
 *                     so any extensions to transit must be done in both places.
 * 
 * NOTE: This middleware acts as the end of the chain when it detects the need for a file upload, and rewrites the body,
 * method, and clears any content-type header. As such, it should be used in the middleware so that it will be executed
 * first:
 * 
 * ```
 * (def client-middleware
 *   (->
 *     (net/wrap-fulcro-request)
 *     (file-upload/wrap-file-upload)
 *     ...))
 * ```
 * 
 */
com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload = (function com$fulcrologic$fulcro$networking$file_upload$wrap_file_upload(var_args){
var G__71575 = arguments.length;
switch (G__71575) {
case 1:
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2(handler,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2 = (function (handler,transit_options){
return (function (req){
if(com.fulcrologic.fulcro.networking.file_upload.has_uploads_QMARK_(req)){
try{var vec__71577 = com.fulcrologic.fulcro.networking.http_remote.desired_response_type(req);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71577,(0),null);
var response_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71577,(1),null);
var ast = edn_query_language.core.query__GT_ast(body);
var ast_to_send = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__71573_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(n,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167));
}),p1__71573_SHARP_);
}));
var txn = edn_query_language.core.ast__GT_query(ast_to_send);
var form = (new FormData());
form.append("upload-transaction",com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(txn,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transit_options,new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false)));

var seq__71580_71663 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__71581_71664 = null;
var count__71582_71665 = (0);
var i__71583_71666 = (0);
while(true){
if((i__71583_71666 < count__71582_71665)){
var map__71621_71667 = chunk__71581_71664.cljs$core$IIndexed$_nth$arity$2(null,i__71583_71666);
var map__71621_71668__$1 = (((((!((map__71621_71667 == null))))?(((((map__71621_71667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71621_71667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71621_71667):map__71621_71667);
var dispatch_key_71669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71621_71668__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params_71670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71621_71668__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5735__auto___71671 = new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167).cljs$core$IFn$_invoke$arity$1(params_71670);
if(cljs.core.truth_(temp__5735__auto___71671)){
var uploads_71672 = temp__5735__auto___71671;
var seq__71623_71673 = cljs.core.seq(uploads_71672);
var chunk__71624_71674 = null;
var count__71625_71675 = (0);
var i__71626_71676 = (0);
while(true){
if((i__71626_71676 < count__71625_71675)){
var map__71633_71677 = chunk__71624_71674.cljs$core$IIndexed$_nth$arity$2(null,i__71626_71676);
var map__71633_71678__$1 = (((((!((map__71633_71677 == null))))?(((((map__71633_71677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71633_71677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71633_71677):map__71633_71677);
var name_71679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71633_71678__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_71680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71633_71678__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_71681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71633_71678__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_71682 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_71669),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_71679)].join('');
var js_value_71683 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_71680));
var content_71684__$1 = (function (){var G__71635 = js_value_71683;
if((G__71635 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__71635,content_type_71681);
}
})();
form.append("files",content_71684__$1,name_with_mutation_71682);


var G__71685 = seq__71623_71673;
var G__71686 = chunk__71624_71674;
var G__71687 = count__71625_71675;
var G__71688 = (i__71626_71676 + (1));
seq__71623_71673 = G__71685;
chunk__71624_71674 = G__71686;
count__71625_71675 = G__71687;
i__71626_71676 = G__71688;
continue;
} else {
var temp__5735__auto___71689__$1 = cljs.core.seq(seq__71623_71673);
if(temp__5735__auto___71689__$1){
var seq__71623_71690__$1 = temp__5735__auto___71689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71623_71690__$1)){
var c__4556__auto___71691 = cljs.core.chunk_first(seq__71623_71690__$1);
var G__71692 = cljs.core.chunk_rest(seq__71623_71690__$1);
var G__71693 = c__4556__auto___71691;
var G__71694 = cljs.core.count(c__4556__auto___71691);
var G__71695 = (0);
seq__71623_71673 = G__71692;
chunk__71624_71674 = G__71693;
count__71625_71675 = G__71694;
i__71626_71676 = G__71695;
continue;
} else {
var map__71636_71696 = cljs.core.first(seq__71623_71690__$1);
var map__71636_71697__$1 = (((((!((map__71636_71696 == null))))?(((((map__71636_71696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71636_71696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71636_71696):map__71636_71696);
var name_71698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71636_71697__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_71699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71636_71697__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_71700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71636_71697__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_71701 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_71669),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_71698)].join('');
var js_value_71702 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_71699));
var content_71703__$1 = (function (){var G__71638 = js_value_71702;
if((G__71638 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__71638,content_type_71700);
}
})();
form.append("files",content_71703__$1,name_with_mutation_71701);


var G__71704 = cljs.core.next(seq__71623_71690__$1);
var G__71705 = null;
var G__71706 = (0);
var G__71707 = (0);
seq__71623_71673 = G__71704;
chunk__71624_71674 = G__71705;
count__71625_71675 = G__71706;
i__71626_71676 = G__71707;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__71708 = seq__71580_71663;
var G__71709 = chunk__71581_71664;
var G__71710 = count__71582_71665;
var G__71711 = (i__71583_71666 + (1));
seq__71580_71663 = G__71708;
chunk__71581_71664 = G__71709;
count__71582_71665 = G__71710;
i__71583_71666 = G__71711;
continue;
} else {
var temp__5735__auto___71712 = cljs.core.seq(seq__71580_71663);
if(temp__5735__auto___71712){
var seq__71580_71713__$1 = temp__5735__auto___71712;
if(cljs.core.chunked_seq_QMARK_(seq__71580_71713__$1)){
var c__4556__auto___71714 = cljs.core.chunk_first(seq__71580_71713__$1);
var G__71715 = cljs.core.chunk_rest(seq__71580_71713__$1);
var G__71716 = c__4556__auto___71714;
var G__71717 = cljs.core.count(c__4556__auto___71714);
var G__71718 = (0);
seq__71580_71663 = G__71715;
chunk__71581_71664 = G__71716;
count__71582_71665 = G__71717;
i__71583_71666 = G__71718;
continue;
} else {
var map__71639_71719 = cljs.core.first(seq__71580_71713__$1);
var map__71639_71720__$1 = (((((!((map__71639_71719 == null))))?(((((map__71639_71719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71639_71719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71639_71719):map__71639_71719);
var dispatch_key_71721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639_71720__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params_71722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639_71720__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5735__auto___71723__$1 = new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167).cljs$core$IFn$_invoke$arity$1(params_71722);
if(cljs.core.truth_(temp__5735__auto___71723__$1)){
var uploads_71724 = temp__5735__auto___71723__$1;
var seq__71641_71725 = cljs.core.seq(uploads_71724);
var chunk__71642_71726 = null;
var count__71643_71727 = (0);
var i__71644_71728 = (0);
while(true){
if((i__71644_71728 < count__71643_71727)){
var map__71652_71729 = chunk__71642_71726.cljs$core$IIndexed$_nth$arity$2(null,i__71644_71728);
var map__71652_71730__$1 = (((((!((map__71652_71729 == null))))?(((((map__71652_71729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71652_71729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71652_71729):map__71652_71729);
var name_71731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71652_71730__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_71732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71652_71730__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_71733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71652_71730__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_71734 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_71721),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_71731)].join('');
var js_value_71735 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_71732));
var content_71736__$1 = (function (){var G__71655 = js_value_71735;
if((G__71655 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__71655,content_type_71733);
}
})();
form.append("files",content_71736__$1,name_with_mutation_71734);


var G__71737 = seq__71641_71725;
var G__71738 = chunk__71642_71726;
var G__71739 = count__71643_71727;
var G__71740 = (i__71644_71728 + (1));
seq__71641_71725 = G__71737;
chunk__71642_71726 = G__71738;
count__71643_71727 = G__71739;
i__71644_71728 = G__71740;
continue;
} else {
var temp__5735__auto___71741__$2 = cljs.core.seq(seq__71641_71725);
if(temp__5735__auto___71741__$2){
var seq__71641_71742__$1 = temp__5735__auto___71741__$2;
if(cljs.core.chunked_seq_QMARK_(seq__71641_71742__$1)){
var c__4556__auto___71743 = cljs.core.chunk_first(seq__71641_71742__$1);
var G__71744 = cljs.core.chunk_rest(seq__71641_71742__$1);
var G__71745 = c__4556__auto___71743;
var G__71746 = cljs.core.count(c__4556__auto___71743);
var G__71747 = (0);
seq__71641_71725 = G__71744;
chunk__71642_71726 = G__71745;
count__71643_71727 = G__71746;
i__71644_71728 = G__71747;
continue;
} else {
var map__71657_71748 = cljs.core.first(seq__71641_71742__$1);
var map__71657_71749__$1 = (((((!((map__71657_71748 == null))))?(((((map__71657_71748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71657_71748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71657_71748):map__71657_71748);
var name_71750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71657_71749__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_71751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71657_71749__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_71752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71657_71749__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_71753 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_71721),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_71750)].join('');
var js_value_71754 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_71751));
var content_71755__$1 = (function (){var G__71659 = js_value_71754;
if((G__71659 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__71659,content_type_71752);
}
})();
form.append("files",content_71755__$1,name_with_mutation_71753);


var G__71756 = cljs.core.next(seq__71641_71742__$1);
var G__71757 = null;
var G__71758 = (0);
var G__71759 = (0);
seq__71641_71725 = G__71756;
chunk__71642_71726 = G__71757;
count__71643_71727 = G__71758;
i__71644_71728 = G__71759;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__71760 = cljs.core.next(seq__71580_71713__$1);
var G__71761 = null;
var G__71762 = (0);
var G__71763 = (0);
seq__71580_71663 = G__71760;
chunk__71581_71664 = G__71761;
count__71582_71665 = G__71762;
i__71583_71666 = G__71763;
continue;
}
} else {
}
}
break;
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(req,new cljs.core.Keyword(null,"body","body",-2049205669),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),response_type], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.dissoc,"Content-Type");
}catch (e71576){var e = e71576;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.file-upload",null,123,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception while converting mutation with file uploads. See https://book.fulcrologic.com/#err-fu-mut-convert-exc"], null);
}),null)),null,-1000254820,null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null);
}} else {
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(req) : handler.call(null,req));
}
});
}));

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.networking.file_upload.js.map
