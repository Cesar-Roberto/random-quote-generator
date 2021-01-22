goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51437,p__51438){
var map__51439 = p__51437;
var map__51439__$1 = (((((!((map__51439 == null))))?(((((map__51439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51439):map__51439);
var svc = map__51439__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51439__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51439__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51439__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51440 = p__51438;
var map__51440__$1 = (((((!((map__51440 == null))))?(((((map__51440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51440):map__51440);
var msg = map__51440__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51440__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51440__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51440__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51440__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51443,p__51444){
var map__51445 = p__51443;
var map__51445__$1 = (((((!((map__51445 == null))))?(((((map__51445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51445):map__51445);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51445__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51446 = p__51444;
var map__51446__$1 = (((((!((map__51446 == null))))?(((((map__51446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51446):map__51446);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51446__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51449,p__51450){
var map__51451 = p__51449;
var map__51451__$1 = (((((!((map__51451 == null))))?(((((map__51451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51451):map__51451);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51452 = p__51450;
var map__51452__$1 = (((((!((map__51452 == null))))?(((((map__51452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51452):map__51452);
var msg = map__51452__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51452__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51455,tid){
var map__51456 = p__51455;
var map__51456__$1 = (((((!((map__51456 == null))))?(((((map__51456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51456):map__51456);
var svc = map__51456__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51462 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51463 = null;
var count__51464 = (0);
var i__51465 = (0);
while(true){
if((i__51465 < count__51464)){
var vec__51472 = chunk__51463.cljs$core$IIndexed$_nth$arity$2(null,i__51465);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51472,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51472,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51489 = seq__51462;
var G__51490 = chunk__51463;
var G__51491 = count__51464;
var G__51492 = (i__51465 + (1));
seq__51462 = G__51489;
chunk__51463 = G__51490;
count__51464 = G__51491;
i__51465 = G__51492;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51462);
if(temp__5735__auto__){
var seq__51462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51462__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51462__$1);
var G__51498 = cljs.core.chunk_rest(seq__51462__$1);
var G__51499 = c__4556__auto__;
var G__51500 = cljs.core.count(c__4556__auto__);
var G__51501 = (0);
seq__51462 = G__51498;
chunk__51463 = G__51499;
count__51464 = G__51500;
i__51465 = G__51501;
continue;
} else {
var vec__51478 = cljs.core.first(seq__51462__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51478,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51478,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51502 = cljs.core.next(seq__51462__$1);
var G__51503 = null;
var G__51504 = (0);
var G__51505 = (0);
seq__51462 = G__51502;
chunk__51463 = G__51503;
count__51464 = G__51504;
i__51465 = G__51505;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51458_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51458_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51459_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51459_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51460_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51460_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51461_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51461_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51481){
var map__51482 = p__51481;
var map__51482__$1 = (((((!((map__51482 == null))))?(((((map__51482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51482):map__51482);
var svc = map__51482__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
