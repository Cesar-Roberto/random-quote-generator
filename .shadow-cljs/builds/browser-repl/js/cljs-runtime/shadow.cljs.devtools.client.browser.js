goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45071 = arguments.length;
var i__4737__auto___45072 = (0);
while(true){
if((i__4737__auto___45072 < len__4736__auto___45071)){
args__4742__auto__.push((arguments[i__4737__auto___45072]));

var G__45073 = (i__4737__auto___45072 + (1));
i__4737__auto___45072 = G__45073;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44908){
var G__44909 = cljs.core.first(seq44908);
var seq44908__$1 = cljs.core.next(seq44908);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44909,seq44908__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44915 = cljs.core.seq(sources);
var chunk__44916 = null;
var count__44917 = (0);
var i__44918 = (0);
while(true){
if((i__44918 < count__44917)){
var map__44925 = chunk__44916.cljs$core$IIndexed$_nth$arity$2(null,i__44918);
var map__44925__$1 = (((((!((map__44925 == null))))?(((((map__44925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44925):map__44925);
var src = map__44925__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44925__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44925__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44925__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44928){var e_45074 = e44928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45074);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45074.message)].join('')));
}

var G__45075 = seq__44915;
var G__45076 = chunk__44916;
var G__45077 = count__44917;
var G__45078 = (i__44918 + (1));
seq__44915 = G__45075;
chunk__44916 = G__45076;
count__44917 = G__45077;
i__44918 = G__45078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44915);
if(temp__5735__auto__){
var seq__44915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44915__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44915__$1);
var G__45079 = cljs.core.chunk_rest(seq__44915__$1);
var G__45080 = c__4556__auto__;
var G__45081 = cljs.core.count(c__4556__auto__);
var G__45082 = (0);
seq__44915 = G__45079;
chunk__44916 = G__45080;
count__44917 = G__45081;
i__44918 = G__45082;
continue;
} else {
var map__44929 = cljs.core.first(seq__44915__$1);
var map__44929__$1 = (((((!((map__44929 == null))))?(((((map__44929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44929):map__44929);
var src = map__44929__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44929__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44929__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44929__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44929__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44932){var e_45083 = e44932;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45083);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45083.message)].join('')));
}

var G__45084 = cljs.core.next(seq__44915__$1);
var G__45085 = null;
var G__45086 = (0);
var G__45087 = (0);
seq__44915 = G__45084;
chunk__44916 = G__45085;
count__44917 = G__45086;
i__44918 = G__45087;
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
var seq__44933 = cljs.core.seq(js_requires);
var chunk__44934 = null;
var count__44935 = (0);
var i__44936 = (0);
while(true){
if((i__44936 < count__44935)){
var js_ns = chunk__44934.cljs$core$IIndexed$_nth$arity$2(null,i__44936);
var require_str_45088 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45088);


var G__45089 = seq__44933;
var G__45090 = chunk__44934;
var G__45091 = count__44935;
var G__45092 = (i__44936 + (1));
seq__44933 = G__45089;
chunk__44934 = G__45090;
count__44935 = G__45091;
i__44936 = G__45092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44933);
if(temp__5735__auto__){
var seq__44933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44933__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44933__$1);
var G__45093 = cljs.core.chunk_rest(seq__44933__$1);
var G__45094 = c__4556__auto__;
var G__45095 = cljs.core.count(c__4556__auto__);
var G__45096 = (0);
seq__44933 = G__45093;
chunk__44934 = G__45094;
count__44935 = G__45095;
i__44936 = G__45096;
continue;
} else {
var js_ns = cljs.core.first(seq__44933__$1);
var require_str_45097 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45097);


var G__45098 = cljs.core.next(seq__44933__$1);
var G__45099 = null;
var G__45100 = (0);
var G__45101 = (0);
seq__44933 = G__45098;
chunk__44934 = G__45099;
count__44935 = G__45100;
i__44936 = G__45101;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44948){
var map__44949 = p__44948;
var map__44949__$1 = (((((!((map__44949 == null))))?(((((map__44949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44949):map__44949);
var msg = map__44949__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44949__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44949__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44951(s__44952){
return (new cljs.core.LazySeq(null,(function (){
var s__44952__$1 = s__44952;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44952__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__44957 = cljs.core.first(xs__6292__auto__);
var map__44957__$1 = (((((!((map__44957 == null))))?(((((map__44957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44957):map__44957);
var src = map__44957__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44957__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44957__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__44952__$1,map__44957,map__44957__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44949,map__44949__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44951_$_iter__44953(s__44954){
return (new cljs.core.LazySeq(null,((function (s__44952__$1,map__44957,map__44957__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44949,map__44949__$1,msg,info,reload_info){
return (function (){
var s__44954__$1 = s__44954;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44954__$1);
if(temp__5735__auto____$1){
var s__44954__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44954__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44954__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44956 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44955 = (0);
while(true){
if((i__44955 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__44955);
cljs.core.chunk_append(b__44956,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45102 = (i__44955 + (1));
i__44955 = G__45102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44956),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44951_$_iter__44953(cljs.core.chunk_rest(s__44954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44956),null);
}
} else {
var warning = cljs.core.first(s__44954__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44951_$_iter__44953(cljs.core.rest(s__44954__$2)));
}
} else {
return null;
}
break;
}
});})(s__44952__$1,map__44957,map__44957__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44949,map__44949__$1,msg,info,reload_info))
,null,null));
});})(s__44952__$1,map__44957,map__44957__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44949,map__44949__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44951(cljs.core.rest(s__44952__$1)));
} else {
var G__45103 = cljs.core.rest(s__44952__$1);
s__44952__$1 = G__45103;
continue;
}
} else {
var G__45104 = cljs.core.rest(s__44952__$1);
s__44952__$1 = G__45104;
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
var seq__44959_45105 = cljs.core.seq(warnings);
var chunk__44960_45106 = null;
var count__44961_45107 = (0);
var i__44962_45108 = (0);
while(true){
if((i__44962_45108 < count__44961_45107)){
var map__44967_45109 = chunk__44960_45106.cljs$core$IIndexed$_nth$arity$2(null,i__44962_45108);
var map__44967_45110__$1 = (((((!((map__44967_45109 == null))))?(((((map__44967_45109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44967_45109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44967_45109):map__44967_45109);
var w_45111 = map__44967_45110__$1;
var msg_45112__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45110__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45110__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45110__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45110__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45115)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45113),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45114),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45112__$1)].join(''));


var G__45116 = seq__44959_45105;
var G__45117 = chunk__44960_45106;
var G__45118 = count__44961_45107;
var G__45119 = (i__44962_45108 + (1));
seq__44959_45105 = G__45116;
chunk__44960_45106 = G__45117;
count__44961_45107 = G__45118;
i__44962_45108 = G__45119;
continue;
} else {
var temp__5735__auto___45120 = cljs.core.seq(seq__44959_45105);
if(temp__5735__auto___45120){
var seq__44959_45121__$1 = temp__5735__auto___45120;
if(cljs.core.chunked_seq_QMARK_(seq__44959_45121__$1)){
var c__4556__auto___45122 = cljs.core.chunk_first(seq__44959_45121__$1);
var G__45123 = cljs.core.chunk_rest(seq__44959_45121__$1);
var G__45124 = c__4556__auto___45122;
var G__45125 = cljs.core.count(c__4556__auto___45122);
var G__45126 = (0);
seq__44959_45105 = G__45123;
chunk__44960_45106 = G__45124;
count__44961_45107 = G__45125;
i__44962_45108 = G__45126;
continue;
} else {
var map__44969_45127 = cljs.core.first(seq__44959_45121__$1);
var map__44969_45128__$1 = (((((!((map__44969_45127 == null))))?(((((map__44969_45127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44969_45127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44969_45127):map__44969_45127);
var w_45129 = map__44969_45128__$1;
var msg_45130__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969_45128__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969_45128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969_45128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969_45128__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45133)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45131),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45132),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45130__$1)].join(''));


var G__45134 = cljs.core.next(seq__44959_45121__$1);
var G__45135 = null;
var G__45136 = (0);
var G__45137 = (0);
seq__44959_45105 = G__45134;
chunk__44960_45106 = G__45135;
count__44961_45107 = G__45136;
i__44962_45108 = G__45137;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44946_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44946_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44972){
var map__44973 = p__44972;
var map__44973__$1 = (((((!((map__44973 == null))))?(((((map__44973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44973):map__44973);
var msg = map__44973__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44973__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__44975 = cljs.core.seq(updates);
var chunk__44977 = null;
var count__44978 = (0);
var i__44979 = (0);
while(true){
if((i__44979 < count__44978)){
var path = chunk__44977.cljs$core$IIndexed$_nth$arity$2(null,i__44979);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45011_45138 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45015_45139 = null;
var count__45016_45140 = (0);
var i__45017_45141 = (0);
while(true){
if((i__45017_45141 < count__45016_45140)){
var node_45142 = chunk__45015_45139.cljs$core$IIndexed$_nth$arity$2(null,i__45017_45141);
if(cljs.core.not(node_45142.shadow$old)){
var path_match_45143 = shadow.cljs.devtools.client.browser.match_paths(node_45142.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45143)){
var new_link_45144 = (function (){var G__45023 = node_45142.cloneNode(true);
G__45023.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45143),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45023;
})();
(node_45142.shadow$old = true);

(new_link_45144.onload = ((function (seq__45011_45138,chunk__45015_45139,count__45016_45140,i__45017_45141,seq__44975,chunk__44977,count__44978,i__44979,new_link_45144,path_match_45143,node_45142,path,map__44973,map__44973__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45142);
});})(seq__45011_45138,chunk__45015_45139,count__45016_45140,i__45017_45141,seq__44975,chunk__44977,count__44978,i__44979,new_link_45144,path_match_45143,node_45142,path,map__44973,map__44973__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45143], 0));

goog.dom.insertSiblingAfter(new_link_45144,node_45142);


var G__45145 = seq__45011_45138;
var G__45146 = chunk__45015_45139;
var G__45147 = count__45016_45140;
var G__45148 = (i__45017_45141 + (1));
seq__45011_45138 = G__45145;
chunk__45015_45139 = G__45146;
count__45016_45140 = G__45147;
i__45017_45141 = G__45148;
continue;
} else {
var G__45149 = seq__45011_45138;
var G__45150 = chunk__45015_45139;
var G__45151 = count__45016_45140;
var G__45152 = (i__45017_45141 + (1));
seq__45011_45138 = G__45149;
chunk__45015_45139 = G__45150;
count__45016_45140 = G__45151;
i__45017_45141 = G__45152;
continue;
}
} else {
var G__45153 = seq__45011_45138;
var G__45154 = chunk__45015_45139;
var G__45155 = count__45016_45140;
var G__45156 = (i__45017_45141 + (1));
seq__45011_45138 = G__45153;
chunk__45015_45139 = G__45154;
count__45016_45140 = G__45155;
i__45017_45141 = G__45156;
continue;
}
} else {
var temp__5735__auto___45157 = cljs.core.seq(seq__45011_45138);
if(temp__5735__auto___45157){
var seq__45011_45158__$1 = temp__5735__auto___45157;
if(cljs.core.chunked_seq_QMARK_(seq__45011_45158__$1)){
var c__4556__auto___45159 = cljs.core.chunk_first(seq__45011_45158__$1);
var G__45160 = cljs.core.chunk_rest(seq__45011_45158__$1);
var G__45161 = c__4556__auto___45159;
var G__45162 = cljs.core.count(c__4556__auto___45159);
var G__45163 = (0);
seq__45011_45138 = G__45160;
chunk__45015_45139 = G__45161;
count__45016_45140 = G__45162;
i__45017_45141 = G__45163;
continue;
} else {
var node_45164 = cljs.core.first(seq__45011_45158__$1);
if(cljs.core.not(node_45164.shadow$old)){
var path_match_45165 = shadow.cljs.devtools.client.browser.match_paths(node_45164.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45165)){
var new_link_45166 = (function (){var G__45024 = node_45164.cloneNode(true);
G__45024.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45024;
})();
(node_45164.shadow$old = true);

(new_link_45166.onload = ((function (seq__45011_45138,chunk__45015_45139,count__45016_45140,i__45017_45141,seq__44975,chunk__44977,count__44978,i__44979,new_link_45166,path_match_45165,node_45164,seq__45011_45158__$1,temp__5735__auto___45157,path,map__44973,map__44973__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45164);
});})(seq__45011_45138,chunk__45015_45139,count__45016_45140,i__45017_45141,seq__44975,chunk__44977,count__44978,i__44979,new_link_45166,path_match_45165,node_45164,seq__45011_45158__$1,temp__5735__auto___45157,path,map__44973,map__44973__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45165], 0));

goog.dom.insertSiblingAfter(new_link_45166,node_45164);


var G__45167 = cljs.core.next(seq__45011_45158__$1);
var G__45168 = null;
var G__45169 = (0);
var G__45170 = (0);
seq__45011_45138 = G__45167;
chunk__45015_45139 = G__45168;
count__45016_45140 = G__45169;
i__45017_45141 = G__45170;
continue;
} else {
var G__45171 = cljs.core.next(seq__45011_45158__$1);
var G__45172 = null;
var G__45173 = (0);
var G__45174 = (0);
seq__45011_45138 = G__45171;
chunk__45015_45139 = G__45172;
count__45016_45140 = G__45173;
i__45017_45141 = G__45174;
continue;
}
} else {
var G__45175 = cljs.core.next(seq__45011_45158__$1);
var G__45176 = null;
var G__45177 = (0);
var G__45178 = (0);
seq__45011_45138 = G__45175;
chunk__45015_45139 = G__45176;
count__45016_45140 = G__45177;
i__45017_45141 = G__45178;
continue;
}
}
} else {
}
}
break;
}


var G__45179 = seq__44975;
var G__45180 = chunk__44977;
var G__45181 = count__44978;
var G__45182 = (i__44979 + (1));
seq__44975 = G__45179;
chunk__44977 = G__45180;
count__44978 = G__45181;
i__44979 = G__45182;
continue;
} else {
var G__45183 = seq__44975;
var G__45184 = chunk__44977;
var G__45185 = count__44978;
var G__45186 = (i__44979 + (1));
seq__44975 = G__45183;
chunk__44977 = G__45184;
count__44978 = G__45185;
i__44979 = G__45186;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44975);
if(temp__5735__auto__){
var seq__44975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44975__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44975__$1);
var G__45187 = cljs.core.chunk_rest(seq__44975__$1);
var G__45188 = c__4556__auto__;
var G__45189 = cljs.core.count(c__4556__auto__);
var G__45190 = (0);
seq__44975 = G__45187;
chunk__44977 = G__45188;
count__44978 = G__45189;
i__44979 = G__45190;
continue;
} else {
var path = cljs.core.first(seq__44975__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45025_45191 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45029_45192 = null;
var count__45030_45193 = (0);
var i__45031_45194 = (0);
while(true){
if((i__45031_45194 < count__45030_45193)){
var node_45195 = chunk__45029_45192.cljs$core$IIndexed$_nth$arity$2(null,i__45031_45194);
if(cljs.core.not(node_45195.shadow$old)){
var path_match_45196 = shadow.cljs.devtools.client.browser.match_paths(node_45195.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45196)){
var new_link_45197 = (function (){var G__45037 = node_45195.cloneNode(true);
G__45037.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45196),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45037;
})();
(node_45195.shadow$old = true);

(new_link_45197.onload = ((function (seq__45025_45191,chunk__45029_45192,count__45030_45193,i__45031_45194,seq__44975,chunk__44977,count__44978,i__44979,new_link_45197,path_match_45196,node_45195,path,seq__44975__$1,temp__5735__auto__,map__44973,map__44973__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45195);
});})(seq__45025_45191,chunk__45029_45192,count__45030_45193,i__45031_45194,seq__44975,chunk__44977,count__44978,i__44979,new_link_45197,path_match_45196,node_45195,path,seq__44975__$1,temp__5735__auto__,map__44973,map__44973__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45196], 0));

goog.dom.insertSiblingAfter(new_link_45197,node_45195);


var G__45198 = seq__45025_45191;
var G__45199 = chunk__45029_45192;
var G__45200 = count__45030_45193;
var G__45201 = (i__45031_45194 + (1));
seq__45025_45191 = G__45198;
chunk__45029_45192 = G__45199;
count__45030_45193 = G__45200;
i__45031_45194 = G__45201;
continue;
} else {
var G__45202 = seq__45025_45191;
var G__45203 = chunk__45029_45192;
var G__45204 = count__45030_45193;
var G__45205 = (i__45031_45194 + (1));
seq__45025_45191 = G__45202;
chunk__45029_45192 = G__45203;
count__45030_45193 = G__45204;
i__45031_45194 = G__45205;
continue;
}
} else {
var G__45206 = seq__45025_45191;
var G__45207 = chunk__45029_45192;
var G__45208 = count__45030_45193;
var G__45209 = (i__45031_45194 + (1));
seq__45025_45191 = G__45206;
chunk__45029_45192 = G__45207;
count__45030_45193 = G__45208;
i__45031_45194 = G__45209;
continue;
}
} else {
var temp__5735__auto___45210__$1 = cljs.core.seq(seq__45025_45191);
if(temp__5735__auto___45210__$1){
var seq__45025_45211__$1 = temp__5735__auto___45210__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45025_45211__$1)){
var c__4556__auto___45212 = cljs.core.chunk_first(seq__45025_45211__$1);
var G__45213 = cljs.core.chunk_rest(seq__45025_45211__$1);
var G__45214 = c__4556__auto___45212;
var G__45215 = cljs.core.count(c__4556__auto___45212);
var G__45216 = (0);
seq__45025_45191 = G__45213;
chunk__45029_45192 = G__45214;
count__45030_45193 = G__45215;
i__45031_45194 = G__45216;
continue;
} else {
var node_45217 = cljs.core.first(seq__45025_45211__$1);
if(cljs.core.not(node_45217.shadow$old)){
var path_match_45218 = shadow.cljs.devtools.client.browser.match_paths(node_45217.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45218)){
var new_link_45219 = (function (){var G__45038 = node_45217.cloneNode(true);
G__45038.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45218),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45038;
})();
(node_45217.shadow$old = true);

(new_link_45219.onload = ((function (seq__45025_45191,chunk__45029_45192,count__45030_45193,i__45031_45194,seq__44975,chunk__44977,count__44978,i__44979,new_link_45219,path_match_45218,node_45217,seq__45025_45211__$1,temp__5735__auto___45210__$1,path,seq__44975__$1,temp__5735__auto__,map__44973,map__44973__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45217);
});})(seq__45025_45191,chunk__45029_45192,count__45030_45193,i__45031_45194,seq__44975,chunk__44977,count__44978,i__44979,new_link_45219,path_match_45218,node_45217,seq__45025_45211__$1,temp__5735__auto___45210__$1,path,seq__44975__$1,temp__5735__auto__,map__44973,map__44973__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45218], 0));

goog.dom.insertSiblingAfter(new_link_45219,node_45217);


var G__45220 = cljs.core.next(seq__45025_45211__$1);
var G__45221 = null;
var G__45222 = (0);
var G__45223 = (0);
seq__45025_45191 = G__45220;
chunk__45029_45192 = G__45221;
count__45030_45193 = G__45222;
i__45031_45194 = G__45223;
continue;
} else {
var G__45224 = cljs.core.next(seq__45025_45211__$1);
var G__45225 = null;
var G__45226 = (0);
var G__45227 = (0);
seq__45025_45191 = G__45224;
chunk__45029_45192 = G__45225;
count__45030_45193 = G__45226;
i__45031_45194 = G__45227;
continue;
}
} else {
var G__45228 = cljs.core.next(seq__45025_45211__$1);
var G__45229 = null;
var G__45230 = (0);
var G__45231 = (0);
seq__45025_45191 = G__45228;
chunk__45029_45192 = G__45229;
count__45030_45193 = G__45230;
i__45031_45194 = G__45231;
continue;
}
}
} else {
}
}
break;
}


var G__45232 = cljs.core.next(seq__44975__$1);
var G__45233 = null;
var G__45234 = (0);
var G__45235 = (0);
seq__44975 = G__45232;
chunk__44977 = G__45233;
count__44978 = G__45234;
i__44979 = G__45235;
continue;
} else {
var G__45236 = cljs.core.next(seq__44975__$1);
var G__45237 = null;
var G__45238 = (0);
var G__45239 = (0);
seq__44975 = G__45236;
chunk__44977 = G__45237;
count__44978 = G__45238;
i__44979 = G__45239;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45039){
var map__45040 = p__45039;
var map__45040__$1 = (((((!((map__45040 == null))))?(((((map__45040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45040):map__45040);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45042){
var map__45043 = p__45042;
var map__45043__$1 = (((((!((map__45043 == null))))?(((((map__45043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45043):map__45043);
var _ = map__45043__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45045,done,error){
var map__45046 = p__45045;
var map__45046__$1 = (((((!((map__45046 == null))))?(((((map__45046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45046):map__45046);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45046__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45048,done,error){
var map__45049 = p__45048;
var map__45049__$1 = (((((!((map__45049 == null))))?(((((map__45049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45049):map__45049);
var msg = map__45049__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45051){
var map__45052 = p__45051;
var map__45052__$1 = (((((!((map__45052 == null))))?(((((map__45052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45052):map__45052);
var src = map__45052__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45052__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45054 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45054) : done.call(null,G__45054));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45055){
var map__45056 = p__45055;
var map__45056__$1 = (((((!((map__45056 == null))))?(((((map__45056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45056):map__45056);
var msg__$1 = map__45056__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45058){var ex = e45058;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45059){
var map__45060 = p__45059;
var map__45060__$1 = (((((!((map__45060 == null))))?(((((map__45060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45060):map__45060);
var env = map__45060__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45062){
var map__45063 = p__45062;
var map__45063__$1 = (((((!((map__45063 == null))))?(((((map__45063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45063):map__45063);
var msg = map__45063__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45063__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45065){
var map__45066 = p__45065;
var map__45066__$1 = (((((!((map__45066 == null))))?(((((map__45066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45066):map__45066);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45066__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45066__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__45068){
var map__45069 = p__45068;
var map__45069__$1 = (((((!((map__45069 == null))))?(((((map__45069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45069):map__45069);
var svc = map__45069__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45069__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
