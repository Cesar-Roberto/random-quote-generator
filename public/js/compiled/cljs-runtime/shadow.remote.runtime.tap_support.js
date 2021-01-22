goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__28628,p__28629){
var map__28630 = p__28628;
var map__28630__$1 = (((((!((map__28630 == null))))?(((((map__28630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28630):map__28630);
var svc = map__28630__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28630__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28630__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28630__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28631 = p__28629;
var map__28631__$1 = (((((!((map__28631 == null))))?(((((map__28631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28631):map__28631);
var msg = map__28631__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28631__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28631__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28631__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28631__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__28645,p__28646){
var map__28647 = p__28645;
var map__28647__$1 = (((((!((map__28647 == null))))?(((((map__28647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28647):map__28647);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28647__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__28648 = p__28646;
var map__28648__$1 = (((((!((map__28648 == null))))?(((((map__28648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28648):map__28648);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28648__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__28659,p__28660){
var map__28661 = p__28659;
var map__28661__$1 = (((((!((map__28661 == null))))?(((((map__28661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28661):map__28661);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28661__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28661__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28662 = p__28660;
var map__28662__$1 = (((((!((map__28662 == null))))?(((((map__28662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28662):map__28662);
var msg = map__28662__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28662__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__28667,tid){
var map__28668 = p__28667;
var map__28668__$1 = (((((!((map__28668 == null))))?(((((map__28668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28668):map__28668);
var svc = map__28668__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28668__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__28678 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__28679 = null;
var count__28680 = (0);
var i__28681 = (0);
while(true){
if((i__28681 < count__28680)){
var vec__28691 = chunk__28679.cljs$core$IIndexed$_nth$arity$2(null,i__28681);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28691,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28691,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28707 = seq__28678;
var G__28708 = chunk__28679;
var G__28709 = count__28680;
var G__28710 = (i__28681 + (1));
seq__28678 = G__28707;
chunk__28679 = G__28708;
count__28680 = G__28709;
i__28681 = G__28710;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28678);
if(temp__5735__auto__){
var seq__28678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28678__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28678__$1);
var G__28711 = cljs.core.chunk_rest(seq__28678__$1);
var G__28712 = c__4556__auto__;
var G__28713 = cljs.core.count(c__4556__auto__);
var G__28714 = (0);
seq__28678 = G__28711;
chunk__28679 = G__28712;
count__28680 = G__28713;
i__28681 = G__28714;
continue;
} else {
var vec__28697 = cljs.core.first(seq__28678__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28697,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28697,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28715 = cljs.core.next(seq__28678__$1);
var G__28716 = null;
var G__28717 = (0);
var G__28718 = (0);
seq__28678 = G__28715;
chunk__28679 = G__28716;
count__28680 = G__28717;
i__28681 = G__28718;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__28674_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__28674_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__28675_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__28675_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__28676_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__28676_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__28677_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__28677_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__28700){
var map__28701 = p__28700;
var map__28701__$1 = (((((!((map__28701 == null))))?(((((map__28701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28701):map__28701);
var svc = map__28701__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28701__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28701__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
