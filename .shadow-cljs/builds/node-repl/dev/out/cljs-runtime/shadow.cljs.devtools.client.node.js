goog.provide('shadow.cljs.devtools.client.node');
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__51646){
var map__51647 = p__51646;
var map__51647__$1 = (((((!((map__51647 == null))))?(((((map__51647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51647):map__51647);
var msg = map__51647__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__51652){
var map__51653 = p__51652;
var map__51653__$1 = (((((!((map__51653 == null))))?(((((map__51653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51653):map__51653);
var msg = map__51653__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__51655 = info;
var map__51655__$1 = (((((!((map__51655 == null))))?(((((map__51655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51655):map__51655);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51655__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51655__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51655__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51657){
var map__51658 = p__51657;
var map__51658__$1 = (((((!((map__51658 == null))))?(((((map__51658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51658):map__51658);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51658__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51658__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51660){
var map__51661 = p__51660;
var map__51661__$1 = (((((!((map__51661 == null))))?(((((map__51661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51661):map__51661);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__51663 = cljs.core.seq(files_to_require);
var chunk__51664 = null;
var count__51665 = (0);
var i__51666 = (0);
while(true){
if((i__51666 < count__51665)){
var src = chunk__51664.cljs$core$IIndexed$_nth$arity$2(null,i__51666);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__51791 = seq__51663;
var G__51792 = chunk__51664;
var G__51793 = count__51665;
var G__51794 = (i__51666 + (1));
seq__51663 = G__51791;
chunk__51664 = G__51792;
count__51665 = G__51793;
i__51666 = G__51794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51663);
if(temp__5735__auto__){
var seq__51663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51663__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51663__$1);
var G__51795 = cljs.core.chunk_rest(seq__51663__$1);
var G__51796 = c__4556__auto__;
var G__51797 = cljs.core.count(c__4556__auto__);
var G__51798 = (0);
seq__51663 = G__51795;
chunk__51664 = G__51796;
count__51665 = G__51797;
i__51666 = G__51798;
continue;
} else {
var src = cljs.core.first(seq__51663__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__51799 = cljs.core.next(seq__51663__$1);
var G__51800 = null;
var G__51801 = (0);
var G__51802 = (0);
seq__51663 = G__51799;
chunk__51664 = G__51800;
count__51665 = G__51801;
i__51666 = G__51802;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__51676,msg){
var map__51677 = p__51676;
var map__51677__$1 = (((((!((map__51677 == null))))?(((((map__51677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51677):map__51677);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51677__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__51683){
var map__51684 = p__51683;
var map__51684__$1 = (((((!((map__51684 == null))))?(((((map__51684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51684):map__51684);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51684__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51684__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51705,done,error){
var map__51706 = p__51705;
var map__51706__$1 = (((((!((map__51706 == null))))?(((((map__51706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51706):map__51706);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51706__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__51713_51804 = cljs.core.seq(repl_sources);
var chunk__51715_51805 = null;
var count__51716_51806 = (0);
var i__51717_51807 = (0);
while(true){
if((i__51717_51807 < count__51716_51806)){
var map__51724_51808 = chunk__51715_51805.cljs$core$IIndexed$_nth$arity$2(null,i__51717_51807);
var map__51724_51809__$1 = (((((!((map__51724_51808 == null))))?(((((map__51724_51808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51724_51808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51724_51808):map__51724_51808);
var src_51810 = map__51724_51809__$1;
var output_name_51811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51724_51809__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_51811)))){
shadow.cljs.devtools.client.node.closure_import(output_name_51811);


var G__51812 = seq__51713_51804;
var G__51813 = chunk__51715_51805;
var G__51814 = count__51716_51806;
var G__51815 = (i__51717_51807 + (1));
seq__51713_51804 = G__51812;
chunk__51715_51805 = G__51813;
count__51716_51806 = G__51814;
i__51717_51807 = G__51815;
continue;
} else {
var G__51816 = seq__51713_51804;
var G__51817 = chunk__51715_51805;
var G__51818 = count__51716_51806;
var G__51819 = (i__51717_51807 + (1));
seq__51713_51804 = G__51816;
chunk__51715_51805 = G__51817;
count__51716_51806 = G__51818;
i__51717_51807 = G__51819;
continue;
}
} else {
var temp__5735__auto___51820 = cljs.core.seq(seq__51713_51804);
if(temp__5735__auto___51820){
var seq__51713_51821__$1 = temp__5735__auto___51820;
if(cljs.core.chunked_seq_QMARK_(seq__51713_51821__$1)){
var c__4556__auto___51822 = cljs.core.chunk_first(seq__51713_51821__$1);
var G__51823 = cljs.core.chunk_rest(seq__51713_51821__$1);
var G__51824 = c__4556__auto___51822;
var G__51825 = cljs.core.count(c__4556__auto___51822);
var G__51826 = (0);
seq__51713_51804 = G__51823;
chunk__51715_51805 = G__51824;
count__51716_51806 = G__51825;
i__51717_51807 = G__51826;
continue;
} else {
var map__51727_51827 = cljs.core.first(seq__51713_51821__$1);
var map__51727_51828__$1 = (((((!((map__51727_51827 == null))))?(((((map__51727_51827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51727_51827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51727_51827):map__51727_51827);
var src_51829 = map__51727_51828__$1;
var output_name_51830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51727_51828__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_51830)))){
shadow.cljs.devtools.client.node.closure_import(output_name_51830);


var G__51833 = cljs.core.next(seq__51713_51821__$1);
var G__51834 = null;
var G__51835 = (0);
var G__51836 = (0);
seq__51713_51804 = G__51833;
chunk__51715_51805 = G__51834;
count__51716_51806 = G__51835;
i__51717_51807 = G__51836;
continue;
} else {
var G__51837 = cljs.core.next(seq__51713_51821__$1);
var G__51838 = null;
var G__51839 = (0);
var G__51840 = (0);
seq__51713_51804 = G__51837;
chunk__51715_51805 = G__51838;
count__51716_51806 = G__51839;
i__51717_51807 = G__51840;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e51712){var e = e51712;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__51729,done,error){
var map__51730 = p__51729;
var map__51730__$1 = (((((!((map__51730 == null))))?(((((map__51730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51730):map__51730);
var msg = map__51730__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__51733_51841 = cljs.core.seq(sources);
var chunk__51734_51842 = null;
var count__51735_51843 = (0);
var i__51736_51844 = (0);
while(true){
if((i__51736_51844 < count__51735_51843)){
var map__51741_51845 = chunk__51734_51842.cljs$core$IIndexed$_nth$arity$2(null,i__51736_51844);
var map__51741_51846__$1 = (((((!((map__51741_51845 == null))))?(((((map__51741_51845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51741_51845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51741_51845):map__51741_51845);
var src_51847 = map__51741_51846__$1;
var provides_51848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51741_51846__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_51849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51741_51846__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_51849)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_51848);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_51849);
} else {
}


var G__51850 = seq__51733_51841;
var G__51851 = chunk__51734_51842;
var G__51852 = count__51735_51843;
var G__51853 = (i__51736_51844 + (1));
seq__51733_51841 = G__51850;
chunk__51734_51842 = G__51851;
count__51735_51843 = G__51852;
i__51736_51844 = G__51853;
continue;
} else {
var temp__5735__auto___51854 = cljs.core.seq(seq__51733_51841);
if(temp__5735__auto___51854){
var seq__51733_51855__$1 = temp__5735__auto___51854;
if(cljs.core.chunked_seq_QMARK_(seq__51733_51855__$1)){
var c__4556__auto___51856 = cljs.core.chunk_first(seq__51733_51855__$1);
var G__51857 = cljs.core.chunk_rest(seq__51733_51855__$1);
var G__51858 = c__4556__auto___51856;
var G__51859 = cljs.core.count(c__4556__auto___51856);
var G__51860 = (0);
seq__51733_51841 = G__51857;
chunk__51734_51842 = G__51858;
count__51735_51843 = G__51859;
i__51736_51844 = G__51860;
continue;
} else {
var map__51743_51861 = cljs.core.first(seq__51733_51855__$1);
var map__51743_51862__$1 = (((((!((map__51743_51861 == null))))?(((((map__51743_51861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51743_51861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51743_51861):map__51743_51861);
var src_51863 = map__51743_51862__$1;
var provides_51864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51743_51862__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_51865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51743_51862__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_51865)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_51864);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_51865);
} else {
}


var G__51866 = cljs.core.next(seq__51733_51855__$1);
var G__51867 = null;
var G__51868 = (0);
var G__51869 = (0);
seq__51733_51841 = G__51866;
chunk__51734_51842 = G__51867;
count__51735_51843 = G__51868;
i__51736_51844 = G__51869;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e51732){var e = e51732;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__51745){
var map__51746 = p__51745;
var map__51746__$1 = (((((!((map__51746 == null))))?(((((map__51746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51746):map__51746);
var env = map__51746__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51746__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51750){
var map__51751 = p__51750;
var map__51751__$1 = (((((!((map__51751 == null))))?(((((map__51751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51751):map__51751);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51751__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51751__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__51754){
var map__51755 = p__51754;
var map__51755__$1 = (((((!((map__51755 == null))))?(((((map__51755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51755):map__51755);
var svc = map__51755__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51755__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
