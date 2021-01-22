goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29209 = arguments.length;
var i__4737__auto___29210 = (0);
while(true){
if((i__4737__auto___29210 < len__4736__auto___29209)){
args__4742__auto__.push((arguments[i__4737__auto___29210]));

var G__29211 = (i__4737__auto___29210 + (1));
i__4737__auto___29210 = G__29211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq28972){
var G__28973 = cljs.core.first(seq28972);
var seq28972__$1 = cljs.core.next(seq28972);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28973,seq28972__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__28975 = cljs.core.seq(sources);
var chunk__28976 = null;
var count__28977 = (0);
var i__28978 = (0);
while(true){
if((i__28978 < count__28977)){
var map__29008 = chunk__28976.cljs$core$IIndexed$_nth$arity$2(null,i__28978);
var map__29008__$1 = (((((!((map__29008 == null))))?(((((map__29008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29008):map__29008);
var src = map__29008__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29008__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e29010){var e_29213 = e29010;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_29213);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_29213.message)].join('')));
}

var G__29214 = seq__28975;
var G__29215 = chunk__28976;
var G__29216 = count__28977;
var G__29217 = (i__28978 + (1));
seq__28975 = G__29214;
chunk__28976 = G__29215;
count__28977 = G__29216;
i__28978 = G__29217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28975);
if(temp__5735__auto__){
var seq__28975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28975__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28975__$1);
var G__29218 = cljs.core.chunk_rest(seq__28975__$1);
var G__29219 = c__4556__auto__;
var G__29220 = cljs.core.count(c__4556__auto__);
var G__29221 = (0);
seq__28975 = G__29218;
chunk__28976 = G__29219;
count__28977 = G__29220;
i__28978 = G__29221;
continue;
} else {
var map__29019 = cljs.core.first(seq__28975__$1);
var map__29019__$1 = (((((!((map__29019 == null))))?(((((map__29019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29019):map__29019);
var src = map__29019__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29019__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29019__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29019__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29019__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e29021){var e_29222 = e29021;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_29222);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_29222.message)].join('')));
}

var G__29223 = cljs.core.next(seq__28975__$1);
var G__29224 = null;
var G__29225 = (0);
var G__29226 = (0);
seq__28975 = G__29223;
chunk__28976 = G__29224;
count__28977 = G__29225;
i__28978 = G__29226;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__29022 = cljs.core.seq(js_requires);
var chunk__29023 = null;
var count__29024 = (0);
var i__29025 = (0);
while(true){
if((i__29025 < count__29024)){
var js_ns = chunk__29023.cljs$core$IIndexed$_nth$arity$2(null,i__29025);
var require_str_29229 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29229);


var G__29231 = seq__29022;
var G__29232 = chunk__29023;
var G__29233 = count__29024;
var G__29234 = (i__29025 + (1));
seq__29022 = G__29231;
chunk__29023 = G__29232;
count__29024 = G__29233;
i__29025 = G__29234;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29022);
if(temp__5735__auto__){
var seq__29022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29022__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29022__$1);
var G__29235 = cljs.core.chunk_rest(seq__29022__$1);
var G__29237 = c__4556__auto__;
var G__29238 = cljs.core.count(c__4556__auto__);
var G__29239 = (0);
seq__29022 = G__29235;
chunk__29023 = G__29237;
count__29024 = G__29238;
i__29025 = G__29239;
continue;
} else {
var js_ns = cljs.core.first(seq__29022__$1);
var require_str_29240 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29240);


var G__29241 = cljs.core.next(seq__29022__$1);
var G__29242 = null;
var G__29243 = (0);
var G__29244 = (0);
seq__29022 = G__29241;
chunk__29023 = G__29242;
count__29024 = G__29243;
i__29025 = G__29244;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__29027){
var map__29028 = p__29027;
var map__29028__$1 = (((((!((map__29028 == null))))?(((((map__29028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29028):map__29028);
var msg = map__29028__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29030(s__29031){
return (new cljs.core.LazySeq(null,(function (){
var s__29031__$1 = s__29031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29031__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__29036 = cljs.core.first(xs__6292__auto__);
var map__29036__$1 = (((((!((map__29036 == null))))?(((((map__29036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29036):map__29036);
var src = map__29036__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29036__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29036__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__29031__$1,map__29036,map__29036__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29028,map__29028__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29030_$_iter__29032(s__29033){
return (new cljs.core.LazySeq(null,((function (s__29031__$1,map__29036,map__29036__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29028,map__29028__$1,msg,info,reload_info){
return (function (){
var s__29033__$1 = s__29033;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29033__$1);
if(temp__5735__auto____$1){
var s__29033__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29033__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29033__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29035 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29034 = (0);
while(true){
if((i__29034 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__29034);
cljs.core.chunk_append(b__29035,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29248 = (i__29034 + (1));
i__29034 = G__29248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29035),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29030_$_iter__29032(cljs.core.chunk_rest(s__29033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29035),null);
}
} else {
var warning = cljs.core.first(s__29033__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29030_$_iter__29032(cljs.core.rest(s__29033__$2)));
}
} else {
return null;
}
break;
}
});})(s__29031__$1,map__29036,map__29036__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29028,map__29028__$1,msg,info,reload_info))
,null,null));
});})(s__29031__$1,map__29036,map__29036__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29028,map__29028__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29030(cljs.core.rest(s__29031__$1)));
} else {
var G__29249 = cljs.core.rest(s__29031__$1);
s__29031__$1 = G__29249;
continue;
}
} else {
var G__29250 = cljs.core.rest(s__29031__$1);
s__29031__$1 = G__29250;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__29051_29251 = cljs.core.seq(warnings);
var chunk__29052_29252 = null;
var count__29053_29253 = (0);
var i__29054_29254 = (0);
while(true){
if((i__29054_29254 < count__29053_29253)){
var map__29076_29256 = chunk__29052_29252.cljs$core$IIndexed$_nth$arity$2(null,i__29054_29254);
var map__29076_29257__$1 = (((((!((map__29076_29256 == null))))?(((((map__29076_29256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29076_29256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29076_29256):map__29076_29256);
var w_29258 = map__29076_29257__$1;
var msg_29259__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29076_29257__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29076_29257__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29076_29257__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29076_29257__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29262)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29260),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29261),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29259__$1)].join(''));


var G__29263 = seq__29051_29251;
var G__29264 = chunk__29052_29252;
var G__29265 = count__29053_29253;
var G__29266 = (i__29054_29254 + (1));
seq__29051_29251 = G__29263;
chunk__29052_29252 = G__29264;
count__29053_29253 = G__29265;
i__29054_29254 = G__29266;
continue;
} else {
var temp__5735__auto___29267 = cljs.core.seq(seq__29051_29251);
if(temp__5735__auto___29267){
var seq__29051_29268__$1 = temp__5735__auto___29267;
if(cljs.core.chunked_seq_QMARK_(seq__29051_29268__$1)){
var c__4556__auto___29269 = cljs.core.chunk_first(seq__29051_29268__$1);
var G__29270 = cljs.core.chunk_rest(seq__29051_29268__$1);
var G__29271 = c__4556__auto___29269;
var G__29272 = cljs.core.count(c__4556__auto___29269);
var G__29273 = (0);
seq__29051_29251 = G__29270;
chunk__29052_29252 = G__29271;
count__29053_29253 = G__29272;
i__29054_29254 = G__29273;
continue;
} else {
var map__29080_29274 = cljs.core.first(seq__29051_29268__$1);
var map__29080_29275__$1 = (((((!((map__29080_29274 == null))))?(((((map__29080_29274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29080_29274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29080_29274):map__29080_29274);
var w_29276 = map__29080_29275__$1;
var msg_29277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29080_29275__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29080_29275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29080_29275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29080_29275__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29280)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29278),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29279),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29277__$1)].join(''));


var G__29281 = cljs.core.next(seq__29051_29268__$1);
var G__29282 = null;
var G__29283 = (0);
var G__29284 = (0);
seq__29051_29251 = G__29281;
chunk__29052_29252 = G__29282;
count__29053_29253 = G__29283;
i__29054_29254 = G__29284;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__29026_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__29026_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__29088){
var map__29089 = p__29088;
var map__29089__$1 = (((((!((map__29089 == null))))?(((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29089):map__29089);
var msg = map__29089__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29089__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__29091 = cljs.core.seq(updates);
var chunk__29093 = null;
var count__29094 = (0);
var i__29095 = (0);
while(true){
if((i__29095 < count__29094)){
var path = chunk__29093.cljs$core$IIndexed$_nth$arity$2(null,i__29095);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29131_29288 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29135_29289 = null;
var count__29136_29290 = (0);
var i__29137_29291 = (0);
while(true){
if((i__29137_29291 < count__29136_29290)){
var node_29292 = chunk__29135_29289.cljs$core$IIndexed$_nth$arity$2(null,i__29137_29291);
if(cljs.core.not(node_29292.shadow$old)){
var path_match_29293 = shadow.cljs.devtools.client.browser.match_paths(node_29292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29293)){
var new_link_29294 = (function (){var G__29145 = node_29292.cloneNode(true);
G__29145.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29293),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29145;
})();
(node_29292.shadow$old = true);

(new_link_29294.onload = ((function (seq__29131_29288,chunk__29135_29289,count__29136_29290,i__29137_29291,seq__29091,chunk__29093,count__29094,i__29095,new_link_29294,path_match_29293,node_29292,path,map__29089,map__29089__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_29292);
});})(seq__29131_29288,chunk__29135_29289,count__29136_29290,i__29137_29291,seq__29091,chunk__29093,count__29094,i__29095,new_link_29294,path_match_29293,node_29292,path,map__29089,map__29089__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29293], 0));

goog.dom.insertSiblingAfter(new_link_29294,node_29292);


var G__29295 = seq__29131_29288;
var G__29296 = chunk__29135_29289;
var G__29297 = count__29136_29290;
var G__29298 = (i__29137_29291 + (1));
seq__29131_29288 = G__29295;
chunk__29135_29289 = G__29296;
count__29136_29290 = G__29297;
i__29137_29291 = G__29298;
continue;
} else {
var G__29299 = seq__29131_29288;
var G__29300 = chunk__29135_29289;
var G__29301 = count__29136_29290;
var G__29302 = (i__29137_29291 + (1));
seq__29131_29288 = G__29299;
chunk__29135_29289 = G__29300;
count__29136_29290 = G__29301;
i__29137_29291 = G__29302;
continue;
}
} else {
var G__29303 = seq__29131_29288;
var G__29304 = chunk__29135_29289;
var G__29305 = count__29136_29290;
var G__29306 = (i__29137_29291 + (1));
seq__29131_29288 = G__29303;
chunk__29135_29289 = G__29304;
count__29136_29290 = G__29305;
i__29137_29291 = G__29306;
continue;
}
} else {
var temp__5735__auto___29307 = cljs.core.seq(seq__29131_29288);
if(temp__5735__auto___29307){
var seq__29131_29308__$1 = temp__5735__auto___29307;
if(cljs.core.chunked_seq_QMARK_(seq__29131_29308__$1)){
var c__4556__auto___29309 = cljs.core.chunk_first(seq__29131_29308__$1);
var G__29310 = cljs.core.chunk_rest(seq__29131_29308__$1);
var G__29311 = c__4556__auto___29309;
var G__29312 = cljs.core.count(c__4556__auto___29309);
var G__29313 = (0);
seq__29131_29288 = G__29310;
chunk__29135_29289 = G__29311;
count__29136_29290 = G__29312;
i__29137_29291 = G__29313;
continue;
} else {
var node_29314 = cljs.core.first(seq__29131_29308__$1);
if(cljs.core.not(node_29314.shadow$old)){
var path_match_29315 = shadow.cljs.devtools.client.browser.match_paths(node_29314.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29315)){
var new_link_29316 = (function (){var G__29147 = node_29314.cloneNode(true);
G__29147.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29315),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29147;
})();
(node_29314.shadow$old = true);

(new_link_29316.onload = ((function (seq__29131_29288,chunk__29135_29289,count__29136_29290,i__29137_29291,seq__29091,chunk__29093,count__29094,i__29095,new_link_29316,path_match_29315,node_29314,seq__29131_29308__$1,temp__5735__auto___29307,path,map__29089,map__29089__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_29314);
});})(seq__29131_29288,chunk__29135_29289,count__29136_29290,i__29137_29291,seq__29091,chunk__29093,count__29094,i__29095,new_link_29316,path_match_29315,node_29314,seq__29131_29308__$1,temp__5735__auto___29307,path,map__29089,map__29089__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29315], 0));

goog.dom.insertSiblingAfter(new_link_29316,node_29314);


var G__29317 = cljs.core.next(seq__29131_29308__$1);
var G__29318 = null;
var G__29319 = (0);
var G__29320 = (0);
seq__29131_29288 = G__29317;
chunk__29135_29289 = G__29318;
count__29136_29290 = G__29319;
i__29137_29291 = G__29320;
continue;
} else {
var G__29321 = cljs.core.next(seq__29131_29308__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29131_29288 = G__29321;
chunk__29135_29289 = G__29322;
count__29136_29290 = G__29323;
i__29137_29291 = G__29324;
continue;
}
} else {
var G__29325 = cljs.core.next(seq__29131_29308__$1);
var G__29326 = null;
var G__29327 = (0);
var G__29328 = (0);
seq__29131_29288 = G__29325;
chunk__29135_29289 = G__29326;
count__29136_29290 = G__29327;
i__29137_29291 = G__29328;
continue;
}
}
} else {
}
}
break;
}


var G__29329 = seq__29091;
var G__29330 = chunk__29093;
var G__29331 = count__29094;
var G__29332 = (i__29095 + (1));
seq__29091 = G__29329;
chunk__29093 = G__29330;
count__29094 = G__29331;
i__29095 = G__29332;
continue;
} else {
var G__29333 = seq__29091;
var G__29334 = chunk__29093;
var G__29335 = count__29094;
var G__29336 = (i__29095 + (1));
seq__29091 = G__29333;
chunk__29093 = G__29334;
count__29094 = G__29335;
i__29095 = G__29336;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29091);
if(temp__5735__auto__){
var seq__29091__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29091__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29091__$1);
var G__29337 = cljs.core.chunk_rest(seq__29091__$1);
var G__29338 = c__4556__auto__;
var G__29339 = cljs.core.count(c__4556__auto__);
var G__29340 = (0);
seq__29091 = G__29337;
chunk__29093 = G__29338;
count__29094 = G__29339;
i__29095 = G__29340;
continue;
} else {
var path = cljs.core.first(seq__29091__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29148_29344 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29152_29345 = null;
var count__29153_29346 = (0);
var i__29154_29347 = (0);
while(true){
if((i__29154_29347 < count__29153_29346)){
var node_29348 = chunk__29152_29345.cljs$core$IIndexed$_nth$arity$2(null,i__29154_29347);
if(cljs.core.not(node_29348.shadow$old)){
var path_match_29349 = shadow.cljs.devtools.client.browser.match_paths(node_29348.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29349)){
var new_link_29350 = (function (){var G__29161 = node_29348.cloneNode(true);
G__29161.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29349),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29161;
})();
(node_29348.shadow$old = true);

(new_link_29350.onload = ((function (seq__29148_29344,chunk__29152_29345,count__29153_29346,i__29154_29347,seq__29091,chunk__29093,count__29094,i__29095,new_link_29350,path_match_29349,node_29348,path,seq__29091__$1,temp__5735__auto__,map__29089,map__29089__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_29348);
});})(seq__29148_29344,chunk__29152_29345,count__29153_29346,i__29154_29347,seq__29091,chunk__29093,count__29094,i__29095,new_link_29350,path_match_29349,node_29348,path,seq__29091__$1,temp__5735__auto__,map__29089,map__29089__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29349], 0));

goog.dom.insertSiblingAfter(new_link_29350,node_29348);


var G__29351 = seq__29148_29344;
var G__29352 = chunk__29152_29345;
var G__29353 = count__29153_29346;
var G__29354 = (i__29154_29347 + (1));
seq__29148_29344 = G__29351;
chunk__29152_29345 = G__29352;
count__29153_29346 = G__29353;
i__29154_29347 = G__29354;
continue;
} else {
var G__29355 = seq__29148_29344;
var G__29356 = chunk__29152_29345;
var G__29357 = count__29153_29346;
var G__29358 = (i__29154_29347 + (1));
seq__29148_29344 = G__29355;
chunk__29152_29345 = G__29356;
count__29153_29346 = G__29357;
i__29154_29347 = G__29358;
continue;
}
} else {
var G__29361 = seq__29148_29344;
var G__29363 = chunk__29152_29345;
var G__29364 = count__29153_29346;
var G__29365 = (i__29154_29347 + (1));
seq__29148_29344 = G__29361;
chunk__29152_29345 = G__29363;
count__29153_29346 = G__29364;
i__29154_29347 = G__29365;
continue;
}
} else {
var temp__5735__auto___29366__$1 = cljs.core.seq(seq__29148_29344);
if(temp__5735__auto___29366__$1){
var seq__29148_29367__$1 = temp__5735__auto___29366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29148_29367__$1)){
var c__4556__auto___29368 = cljs.core.chunk_first(seq__29148_29367__$1);
var G__29369 = cljs.core.chunk_rest(seq__29148_29367__$1);
var G__29370 = c__4556__auto___29368;
var G__29371 = cljs.core.count(c__4556__auto___29368);
var G__29372 = (0);
seq__29148_29344 = G__29369;
chunk__29152_29345 = G__29370;
count__29153_29346 = G__29371;
i__29154_29347 = G__29372;
continue;
} else {
var node_29373 = cljs.core.first(seq__29148_29367__$1);
if(cljs.core.not(node_29373.shadow$old)){
var path_match_29374 = shadow.cljs.devtools.client.browser.match_paths(node_29373.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29374)){
var new_link_29375 = (function (){var G__29162 = node_29373.cloneNode(true);
G__29162.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29374),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29162;
})();
(node_29373.shadow$old = true);

(new_link_29375.onload = ((function (seq__29148_29344,chunk__29152_29345,count__29153_29346,i__29154_29347,seq__29091,chunk__29093,count__29094,i__29095,new_link_29375,path_match_29374,node_29373,seq__29148_29367__$1,temp__5735__auto___29366__$1,path,seq__29091__$1,temp__5735__auto__,map__29089,map__29089__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_29373);
});})(seq__29148_29344,chunk__29152_29345,count__29153_29346,i__29154_29347,seq__29091,chunk__29093,count__29094,i__29095,new_link_29375,path_match_29374,node_29373,seq__29148_29367__$1,temp__5735__auto___29366__$1,path,seq__29091__$1,temp__5735__auto__,map__29089,map__29089__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29374], 0));

goog.dom.insertSiblingAfter(new_link_29375,node_29373);


var G__29376 = cljs.core.next(seq__29148_29367__$1);
var G__29377 = null;
var G__29378 = (0);
var G__29379 = (0);
seq__29148_29344 = G__29376;
chunk__29152_29345 = G__29377;
count__29153_29346 = G__29378;
i__29154_29347 = G__29379;
continue;
} else {
var G__29380 = cljs.core.next(seq__29148_29367__$1);
var G__29381 = null;
var G__29382 = (0);
var G__29383 = (0);
seq__29148_29344 = G__29380;
chunk__29152_29345 = G__29381;
count__29153_29346 = G__29382;
i__29154_29347 = G__29383;
continue;
}
} else {
var G__29384 = cljs.core.next(seq__29148_29367__$1);
var G__29385 = null;
var G__29386 = (0);
var G__29387 = (0);
seq__29148_29344 = G__29384;
chunk__29152_29345 = G__29385;
count__29153_29346 = G__29386;
i__29154_29347 = G__29387;
continue;
}
}
} else {
}
}
break;
}


var G__29388 = cljs.core.next(seq__29091__$1);
var G__29389 = null;
var G__29390 = (0);
var G__29391 = (0);
seq__29091 = G__29388;
chunk__29093 = G__29389;
count__29094 = G__29390;
i__29095 = G__29391;
continue;
} else {
var G__29392 = cljs.core.next(seq__29091__$1);
var G__29393 = null;
var G__29394 = (0);
var G__29395 = (0);
seq__29091 = G__29392;
chunk__29093 = G__29393;
count__29094 = G__29394;
i__29095 = G__29395;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__29165){
var map__29166 = p__29165;
var map__29166__$1 = (((((!((map__29166 == null))))?(((((map__29166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29166):map__29166);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29166__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__29178){
var map__29179 = p__29178;
var map__29179__$1 = (((((!((map__29179 == null))))?(((((map__29179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29179):map__29179);
var _ = map__29179__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29179__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__29181,done,error){
var map__29182 = p__29181;
var map__29182__$1 = (((((!((map__29182 == null))))?(((((map__29182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29182):map__29182);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29182__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__29184,done,error){
var map__29185 = p__29184;
var map__29185__$1 = (((((!((map__29185 == null))))?(((((map__29185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29185):map__29185);
var msg = map__29185__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29185__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29185__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29185__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__29187){
var map__29188 = p__29187;
var map__29188__$1 = (((((!((map__29188 == null))))?(((((map__29188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29188):map__29188);
var src = map__29188__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29188__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__29192 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__29192) : done.call(null,G__29192));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__29193){
var map__29194 = p__29193;
var map__29194__$1 = (((((!((map__29194 == null))))?(((((map__29194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29194):map__29194);
var msg__$1 = map__29194__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29194__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e29196){var ex = e29196;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__29197){
var map__29198 = p__29197;
var map__29198__$1 = (((((!((map__29198 == null))))?(((((map__29198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29198):map__29198);
var env = map__29198__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29198__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__29200){
var map__29201 = p__29200;
var map__29201__$1 = (((((!((map__29201 == null))))?(((((map__29201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29201):map__29201);
var msg = map__29201__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29201__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__29203){
var map__29204 = p__29203;
var map__29204__$1 = (((((!((map__29204 == null))))?(((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29204):map__29204);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__29206){
var map__29207 = p__29206;
var map__29207__$1 = (((((!((map__29207 == null))))?(((((map__29207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29207):map__29207);
var svc = map__29207__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29207__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
