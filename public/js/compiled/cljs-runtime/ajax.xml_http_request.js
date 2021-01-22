goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__33612 = e.target.readyState;
var fexpr__33611 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__33611.cljs$core$IFn$_invoke$arity$1 ? fexpr__33611.cljs$core$IFn$_invoke$arity$1(G__33612) : fexpr__33611.call(null,G__33612));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33616,handler){
var map__33617 = p__33616;
var map__33617__$1 = (((((!((map__33617 == null))))?(((((map__33617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33617):map__33617);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33617__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33617__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__33615_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__33615_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___33638 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___33638)){
var response_type_33639 = temp__5735__auto___33638;
(this$__$1.responseType = cljs.core.name(response_type_33639));
} else {
}

var seq__33619_33640 = cljs.core.seq(headers);
var chunk__33620_33641 = null;
var count__33621_33642 = (0);
var i__33622_33643 = (0);
while(true){
if((i__33622_33643 < count__33621_33642)){
var vec__33629_33644 = chunk__33620_33641.cljs$core$IIndexed$_nth$arity$2(null,i__33622_33643);
var k_33645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33629_33644,(0),null);
var v_33646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33629_33644,(1),null);
this$__$1.setRequestHeader(k_33645,v_33646);


var G__33647 = seq__33619_33640;
var G__33648 = chunk__33620_33641;
var G__33649 = count__33621_33642;
var G__33650 = (i__33622_33643 + (1));
seq__33619_33640 = G__33647;
chunk__33620_33641 = G__33648;
count__33621_33642 = G__33649;
i__33622_33643 = G__33650;
continue;
} else {
var temp__5735__auto___33651 = cljs.core.seq(seq__33619_33640);
if(temp__5735__auto___33651){
var seq__33619_33652__$1 = temp__5735__auto___33651;
if(cljs.core.chunked_seq_QMARK_(seq__33619_33652__$1)){
var c__4556__auto___33653 = cljs.core.chunk_first(seq__33619_33652__$1);
var G__33656 = cljs.core.chunk_rest(seq__33619_33652__$1);
var G__33657 = c__4556__auto___33653;
var G__33658 = cljs.core.count(c__4556__auto___33653);
var G__33659 = (0);
seq__33619_33640 = G__33656;
chunk__33620_33641 = G__33657;
count__33621_33642 = G__33658;
i__33622_33643 = G__33659;
continue;
} else {
var vec__33633_33660 = cljs.core.first(seq__33619_33652__$1);
var k_33661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33633_33660,(0),null);
var v_33662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33633_33660,(1),null);
this$__$1.setRequestHeader(k_33661,v_33662);


var G__33663 = cljs.core.next(seq__33619_33652__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__33619_33640 = G__33663;
chunk__33620_33641 = G__33664;
count__33621_33642 = G__33665;
i__33622_33643 = G__33666;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
