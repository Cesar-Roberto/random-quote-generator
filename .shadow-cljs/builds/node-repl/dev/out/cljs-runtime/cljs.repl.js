goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50960){
var map__50961 = p__50960;
var map__50961__$1 = (((((!((map__50961 == null))))?(((((map__50961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50961):map__50961);
var m = map__50961__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50963_51177 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50964_51178 = null;
var count__50965_51179 = (0);
var i__50966_51180 = (0);
while(true){
if((i__50966_51180 < count__50965_51179)){
var f_51181 = chunk__50964_51178.cljs$core$IIndexed$_nth$arity$2(null,i__50966_51180);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51181], 0));


var G__51182 = seq__50963_51177;
var G__51183 = chunk__50964_51178;
var G__51184 = count__50965_51179;
var G__51185 = (i__50966_51180 + (1));
seq__50963_51177 = G__51182;
chunk__50964_51178 = G__51183;
count__50965_51179 = G__51184;
i__50966_51180 = G__51185;
continue;
} else {
var temp__5735__auto___51186 = cljs.core.seq(seq__50963_51177);
if(temp__5735__auto___51186){
var seq__50963_51187__$1 = temp__5735__auto___51186;
if(cljs.core.chunked_seq_QMARK_(seq__50963_51187__$1)){
var c__4556__auto___51188 = cljs.core.chunk_first(seq__50963_51187__$1);
var G__51189 = cljs.core.chunk_rest(seq__50963_51187__$1);
var G__51190 = c__4556__auto___51188;
var G__51191 = cljs.core.count(c__4556__auto___51188);
var G__51192 = (0);
seq__50963_51177 = G__51189;
chunk__50964_51178 = G__51190;
count__50965_51179 = G__51191;
i__50966_51180 = G__51192;
continue;
} else {
var f_51193 = cljs.core.first(seq__50963_51187__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51193], 0));


var G__51198 = cljs.core.next(seq__50963_51187__$1);
var G__51199 = null;
var G__51200 = (0);
var G__51201 = (0);
seq__50963_51177 = G__51198;
chunk__50964_51178 = G__51199;
count__50965_51179 = G__51200;
i__50966_51180 = G__51201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51202], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51202)))?cljs.core.second(arglists_51202):arglists_51202)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50969_51205 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50970_51206 = null;
var count__50971_51207 = (0);
var i__50972_51208 = (0);
while(true){
if((i__50972_51208 < count__50971_51207)){
var vec__50988_51209 = chunk__50970_51206.cljs$core$IIndexed$_nth$arity$2(null,i__50972_51208);
var name_51210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50988_51209,(0),null);
var map__50991_51211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50988_51209,(1),null);
var map__50991_51212__$1 = (((((!((map__50991_51211 == null))))?(((((map__50991_51211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50991_51211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50991_51211):map__50991_51211);
var doc_51213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991_51212__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991_51212__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51210], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51214], 0));

if(cljs.core.truth_(doc_51213)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51213], 0));
} else {
}


var G__51219 = seq__50969_51205;
var G__51220 = chunk__50970_51206;
var G__51221 = count__50971_51207;
var G__51222 = (i__50972_51208 + (1));
seq__50969_51205 = G__51219;
chunk__50970_51206 = G__51220;
count__50971_51207 = G__51221;
i__50972_51208 = G__51222;
continue;
} else {
var temp__5735__auto___51223 = cljs.core.seq(seq__50969_51205);
if(temp__5735__auto___51223){
var seq__50969_51224__$1 = temp__5735__auto___51223;
if(cljs.core.chunked_seq_QMARK_(seq__50969_51224__$1)){
var c__4556__auto___51225 = cljs.core.chunk_first(seq__50969_51224__$1);
var G__51226 = cljs.core.chunk_rest(seq__50969_51224__$1);
var G__51227 = c__4556__auto___51225;
var G__51228 = cljs.core.count(c__4556__auto___51225);
var G__51229 = (0);
seq__50969_51205 = G__51226;
chunk__50970_51206 = G__51227;
count__50971_51207 = G__51228;
i__50972_51208 = G__51229;
continue;
} else {
var vec__50993_51230 = cljs.core.first(seq__50969_51224__$1);
var name_51231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50993_51230,(0),null);
var map__50996_51232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50993_51230,(1),null);
var map__50996_51233__$1 = (((((!((map__50996_51232 == null))))?(((((map__50996_51232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50996_51232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50996_51232):map__50996_51232);
var doc_51234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50996_51233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50996_51233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51235], 0));

if(cljs.core.truth_(doc_51234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51234], 0));
} else {
}


var G__51236 = cljs.core.next(seq__50969_51224__$1);
var G__51237 = null;
var G__51238 = (0);
var G__51239 = (0);
seq__50969_51205 = G__51236;
chunk__50970_51206 = G__51237;
count__50971_51207 = G__51238;
i__50972_51208 = G__51239;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51000 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51001 = null;
var count__51002 = (0);
var i__51003 = (0);
while(true){
if((i__51003 < count__51002)){
var role = chunk__51001.cljs$core$IIndexed$_nth$arity$2(null,i__51003);
var temp__5735__auto___51240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51240__$1)){
var spec_51241 = temp__5735__auto___51240__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51241)], 0));
} else {
}


var G__51242 = seq__51000;
var G__51243 = chunk__51001;
var G__51244 = count__51002;
var G__51245 = (i__51003 + (1));
seq__51000 = G__51242;
chunk__51001 = G__51243;
count__51002 = G__51244;
i__51003 = G__51245;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51000);
if(temp__5735__auto____$1){
var seq__51000__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51000__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51000__$1);
var G__51246 = cljs.core.chunk_rest(seq__51000__$1);
var G__51247 = c__4556__auto__;
var G__51248 = cljs.core.count(c__4556__auto__);
var G__51249 = (0);
seq__51000 = G__51246;
chunk__51001 = G__51247;
count__51002 = G__51248;
i__51003 = G__51249;
continue;
} else {
var role = cljs.core.first(seq__51000__$1);
var temp__5735__auto___51250__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51250__$2)){
var spec_51251 = temp__5735__auto___51250__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51251)], 0));
} else {
}


var G__51252 = cljs.core.next(seq__51000__$1);
var G__51253 = null;
var G__51254 = (0);
var G__51255 = (0);
seq__51000 = G__51252;
chunk__51001 = G__51253;
count__51002 = G__51254;
i__51003 = G__51255;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51257 = cljs.core.ex_cause(t);
via = G__51256;
t = G__51257;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51071 = datafied_throwable;
var map__51071__$1 = (((((!((map__51071 == null))))?(((((map__51071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51071):map__51071);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51071__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51072 = cljs.core.last(via);
var map__51072__$1 = (((((!((map__51072 == null))))?(((((map__51072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51072):map__51072);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51073 = data;
var map__51073__$1 = (((((!((map__51073 == null))))?(((((map__51073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51073):map__51073);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51074 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51074__$1 = (((((!((map__51074 == null))))?(((((map__51074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51074):map__51074);
var top_data = map__51074__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51092 = phase;
var G__51092__$1 = (((G__51092 instanceof cljs.core.Keyword))?G__51092.fqn:null);
switch (G__51092__$1) {
case "read-source":
var map__51101 = data;
var map__51101__$1 = (((((!((map__51101 == null))))?(((((map__51101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51101):map__51101);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51111 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51111__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51111,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51111);
var G__51111__$2 = (cljs.core.truth_((function (){var fexpr__51112 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51112.cljs$core$IFn$_invoke$arity$1 ? fexpr__51112.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51112.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51111__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51111__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51111__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51111__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51113 = top_data;
var G__51113__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51113,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51113);
var G__51113__$2 = (cljs.core.truth_((function (){var fexpr__51118 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51118.cljs$core$IFn$_invoke$arity$1 ? fexpr__51118.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51118.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51113__$1);
var G__51113__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51113__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51113__$2);
var G__51113__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51113__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51113__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51113__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51113__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51119 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51119,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51119,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51119,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51119,(3),null);
var G__51122 = top_data;
var G__51122__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51122,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51122);
var G__51122__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51122__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51122__$1);
var G__51122__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51122__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51122__$2);
var G__51122__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51122__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51122__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51122__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51122__$4;
}

break;
case "execution":
var vec__51124 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51124,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51124,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51124,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51124,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51061_SHARP_){
var or__4126__auto__ = (p1__51061_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__51128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51128.cljs$core$IFn$_invoke$arity$1 ? fexpr__51128.cljs$core$IFn$_invoke$arity$1(p1__51061_SHARP_) : fexpr__51128.call(null,p1__51061_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__51130 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51130__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51130,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51130);
var G__51130__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51130__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51130__$1);
var G__51130__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51130__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51130__$2);
var G__51130__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51130__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51130__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51130__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51130__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51092__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51134){
var map__51135 = p__51134;
var map__51135__$1 = (((((!((map__51135 == null))))?(((((map__51135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51135):map__51135);
var triage_data = map__51135__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51135__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51139 = phase;
var G__51139__$1 = (((G__51139 instanceof cljs.core.Keyword))?G__51139.fqn:null);
switch (G__51139__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51140 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51142 = loc;
var G__51143 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51144_51272 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51145_51273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51146_51274 = true;
var _STAR_print_fn_STAR__temp_val__51147_51275 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51146_51274);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51147_51275);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51132_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51132_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51145_51273);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51144_51272);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51140,G__51141,G__51142,G__51143) : format.call(null,G__51140,G__51141,G__51142,G__51143));

break;
case "macroexpansion":
var G__51148 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51149 = cause_type;
var G__51150 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51151 = loc;
var G__51152 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51148,G__51149,G__51150,G__51151,G__51152) : format.call(null,G__51148,G__51149,G__51150,G__51151,G__51152));

break;
case "compile-syntax-check":
var G__51153 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51154 = cause_type;
var G__51155 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51156 = loc;
var G__51157 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51153,G__51154,G__51155,G__51156,G__51157) : format.call(null,G__51153,G__51154,G__51155,G__51156,G__51157));

break;
case "compilation":
var G__51158 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51159 = cause_type;
var G__51160 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51161 = loc;
var G__51162 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51158,G__51159,G__51160,G__51161,G__51162) : format.call(null,G__51158,G__51159,G__51160,G__51161,G__51162));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51164 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51165 = symbol;
var G__51166 = loc;
var G__51167 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51168_51284 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51169_51285 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51170_51286 = true;
var _STAR_print_fn_STAR__temp_val__51171_51287 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51170_51286);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51171_51287);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51133_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51133_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51169_51285);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51168_51284);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51164,G__51165,G__51166,G__51167) : format.call(null,G__51164,G__51165,G__51166,G__51167));
} else {
var G__51172 = "Execution error%s at %s(%s).\n%s\n";
var G__51173 = cause_type;
var G__51174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51175 = loc;
var G__51176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51172,G__51173,G__51174,G__51175,G__51176) : format.call(null,G__51172,G__51173,G__51174,G__51175,G__51176));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51139__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
