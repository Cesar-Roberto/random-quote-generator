goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44659,p__44660){
var map__44661 = p__44659;
var map__44661__$1 = (((((!((map__44661 == null))))?(((((map__44661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44661):map__44661);
var svc = map__44661__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44661__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44661__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44661__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44662 = p__44660;
var map__44662__$1 = (((((!((map__44662 == null))))?(((((map__44662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44662):map__44662);
var msg = map__44662__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44662__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44662__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44662__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44662__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44665,p__44666){
var map__44668 = p__44665;
var map__44668__$1 = (((((!((map__44668 == null))))?(((((map__44668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44668):map__44668);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44668__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44669 = p__44666;
var map__44669__$1 = (((((!((map__44669 == null))))?(((((map__44669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44669):map__44669);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44669__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44695,p__44696){
var map__44697 = p__44695;
var map__44697__$1 = (((((!((map__44697 == null))))?(((((map__44697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44697):map__44697);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44697__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44697__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44698 = p__44696;
var map__44698__$1 = (((((!((map__44698 == null))))?(((((map__44698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44698):map__44698);
var msg = map__44698__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44698__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44701,tid){
var map__44702 = p__44701;
var map__44702__$1 = (((((!((map__44702 == null))))?(((((map__44702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44702):map__44702);
var svc = map__44702__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44702__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44712 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44713 = null;
var count__44714 = (0);
var i__44715 = (0);
while(true){
if((i__44715 < count__44714)){
var vec__44722 = chunk__44713.cljs$core$IIndexed$_nth$arity$2(null,i__44715);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44722,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44722,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44746 = seq__44712;
var G__44747 = chunk__44713;
var G__44748 = count__44714;
var G__44749 = (i__44715 + (1));
seq__44712 = G__44746;
chunk__44713 = G__44747;
count__44714 = G__44748;
i__44715 = G__44749;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44712);
if(temp__5735__auto__){
var seq__44712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44712__$1);
var G__44750 = cljs.core.chunk_rest(seq__44712__$1);
var G__44751 = c__4556__auto__;
var G__44752 = cljs.core.count(c__4556__auto__);
var G__44753 = (0);
seq__44712 = G__44750;
chunk__44713 = G__44751;
count__44714 = G__44752;
i__44715 = G__44753;
continue;
} else {
var vec__44725 = cljs.core.first(seq__44712__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44725,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44725,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44754 = cljs.core.next(seq__44712__$1);
var G__44755 = null;
var G__44756 = (0);
var G__44757 = (0);
seq__44712 = G__44754;
chunk__44713 = G__44755;
count__44714 = G__44756;
i__44715 = G__44757;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44708_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44708_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44709_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44709_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44710_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44710_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44711_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44711_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44728){
var map__44729 = p__44728;
var map__44729__$1 = (((((!((map__44729 == null))))?(((((map__44729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44729):map__44729);
var svc = map__44729__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44729__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44729__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
