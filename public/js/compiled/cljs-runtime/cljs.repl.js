goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38505){
var map__38506 = p__38505;
var map__38506__$1 = (((((!((map__38506 == null))))?(((((map__38506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38506):map__38506);
var m = map__38506__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38510_38742 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38511_38743 = null;
var count__38512_38744 = (0);
var i__38513_38745 = (0);
while(true){
if((i__38513_38745 < count__38512_38744)){
var f_38746 = chunk__38511_38743.cljs$core$IIndexed$_nth$arity$2(null,i__38513_38745);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38746], 0));


var G__38747 = seq__38510_38742;
var G__38748 = chunk__38511_38743;
var G__38749 = count__38512_38744;
var G__38750 = (i__38513_38745 + (1));
seq__38510_38742 = G__38747;
chunk__38511_38743 = G__38748;
count__38512_38744 = G__38749;
i__38513_38745 = G__38750;
continue;
} else {
var temp__5735__auto___38751 = cljs.core.seq(seq__38510_38742);
if(temp__5735__auto___38751){
var seq__38510_38752__$1 = temp__5735__auto___38751;
if(cljs.core.chunked_seq_QMARK_(seq__38510_38752__$1)){
var c__4556__auto___38753 = cljs.core.chunk_first(seq__38510_38752__$1);
var G__38754 = cljs.core.chunk_rest(seq__38510_38752__$1);
var G__38755 = c__4556__auto___38753;
var G__38756 = cljs.core.count(c__4556__auto___38753);
var G__38757 = (0);
seq__38510_38742 = G__38754;
chunk__38511_38743 = G__38755;
count__38512_38744 = G__38756;
i__38513_38745 = G__38757;
continue;
} else {
var f_38758 = cljs.core.first(seq__38510_38752__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38758], 0));


var G__38759 = cljs.core.next(seq__38510_38752__$1);
var G__38760 = null;
var G__38761 = (0);
var G__38762 = (0);
seq__38510_38742 = G__38759;
chunk__38511_38743 = G__38760;
count__38512_38744 = G__38761;
i__38513_38745 = G__38762;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38763 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38763], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38763)))?cljs.core.second(arglists_38763):arglists_38763)], 0));
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
var seq__38519_38764 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38522_38765 = null;
var count__38523_38766 = (0);
var i__38524_38767 = (0);
while(true){
if((i__38524_38767 < count__38523_38766)){
var vec__38538_38768 = chunk__38522_38765.cljs$core$IIndexed$_nth$arity$2(null,i__38524_38767);
var name_38769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38538_38768,(0),null);
var map__38541_38770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38538_38768,(1),null);
var map__38541_38771__$1 = (((((!((map__38541_38770 == null))))?(((((map__38541_38770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38541_38770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38541_38770):map__38541_38770);
var doc_38772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38541_38771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38541_38771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38769], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38773], 0));

if(cljs.core.truth_(doc_38772)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38772], 0));
} else {
}


var G__38774 = seq__38519_38764;
var G__38775 = chunk__38522_38765;
var G__38776 = count__38523_38766;
var G__38777 = (i__38524_38767 + (1));
seq__38519_38764 = G__38774;
chunk__38522_38765 = G__38775;
count__38523_38766 = G__38776;
i__38524_38767 = G__38777;
continue;
} else {
var temp__5735__auto___38778 = cljs.core.seq(seq__38519_38764);
if(temp__5735__auto___38778){
var seq__38519_38779__$1 = temp__5735__auto___38778;
if(cljs.core.chunked_seq_QMARK_(seq__38519_38779__$1)){
var c__4556__auto___38780 = cljs.core.chunk_first(seq__38519_38779__$1);
var G__38781 = cljs.core.chunk_rest(seq__38519_38779__$1);
var G__38782 = c__4556__auto___38780;
var G__38783 = cljs.core.count(c__4556__auto___38780);
var G__38784 = (0);
seq__38519_38764 = G__38781;
chunk__38522_38765 = G__38782;
count__38523_38766 = G__38783;
i__38524_38767 = G__38784;
continue;
} else {
var vec__38560_38785 = cljs.core.first(seq__38519_38779__$1);
var name_38786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38560_38785,(0),null);
var map__38563_38787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38560_38785,(1),null);
var map__38563_38788__$1 = (((((!((map__38563_38787 == null))))?(((((map__38563_38787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38563_38787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38563_38787):map__38563_38787);
var doc_38789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563_38788__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563_38788__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38786], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38790], 0));

if(cljs.core.truth_(doc_38789)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38789], 0));
} else {
}


var G__38792 = cljs.core.next(seq__38519_38779__$1);
var G__38793 = null;
var G__38794 = (0);
var G__38795 = (0);
seq__38519_38764 = G__38792;
chunk__38522_38765 = G__38793;
count__38523_38766 = G__38794;
i__38524_38767 = G__38795;
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

var seq__38572 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38573 = null;
var count__38574 = (0);
var i__38575 = (0);
while(true){
if((i__38575 < count__38574)){
var role = chunk__38573.cljs$core$IIndexed$_nth$arity$2(null,i__38575);
var temp__5735__auto___38796__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38796__$1)){
var spec_38797 = temp__5735__auto___38796__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38797)], 0));
} else {
}


var G__38798 = seq__38572;
var G__38799 = chunk__38573;
var G__38800 = count__38574;
var G__38801 = (i__38575 + (1));
seq__38572 = G__38798;
chunk__38573 = G__38799;
count__38574 = G__38800;
i__38575 = G__38801;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38572);
if(temp__5735__auto____$1){
var seq__38572__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38572__$1);
var G__38802 = cljs.core.chunk_rest(seq__38572__$1);
var G__38803 = c__4556__auto__;
var G__38804 = cljs.core.count(c__4556__auto__);
var G__38805 = (0);
seq__38572 = G__38802;
chunk__38573 = G__38803;
count__38574 = G__38804;
i__38575 = G__38805;
continue;
} else {
var role = cljs.core.first(seq__38572__$1);
var temp__5735__auto___38806__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38806__$2)){
var spec_38807 = temp__5735__auto___38806__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38807)], 0));
} else {
}


var G__38808 = cljs.core.next(seq__38572__$1);
var G__38809 = null;
var G__38810 = (0);
var G__38811 = (0);
seq__38572 = G__38808;
chunk__38573 = G__38809;
count__38574 = G__38810;
i__38575 = G__38811;
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
var G__38816 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38817 = cljs.core.ex_cause(t);
via = G__38816;
t = G__38817;
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
var map__38651 = datafied_throwable;
var map__38651__$1 = (((((!((map__38651 == null))))?(((((map__38651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38651):map__38651);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38651__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38651__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38652 = cljs.core.last(via);
var map__38652__$1 = (((((!((map__38652 == null))))?(((((map__38652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38652):map__38652);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38653 = data;
var map__38653__$1 = (((((!((map__38653 == null))))?(((((map__38653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38653):map__38653);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38654 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38654__$1 = (((((!((map__38654 == null))))?(((((map__38654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38654):map__38654);
var top_data = map__38654__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38661 = phase;
var G__38661__$1 = (((G__38661 instanceof cljs.core.Keyword))?G__38661.fqn:null);
switch (G__38661__$1) {
case "read-source":
var map__38662 = data;
var map__38662__$1 = (((((!((map__38662 == null))))?(((((map__38662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38662):map__38662);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38662__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38662__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38665 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38665__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38665,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38665);
var G__38665__$2 = (cljs.core.truth_((function (){var fexpr__38666 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38666.cljs$core$IFn$_invoke$arity$1 ? fexpr__38666.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38666.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38665__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38665__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38665__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38667 = top_data;
var G__38667__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38667,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38667);
var G__38667__$2 = (cljs.core.truth_((function (){var fexpr__38668 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38668.cljs$core$IFn$_invoke$arity$1 ? fexpr__38668.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38668.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38667__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38667__$1);
var G__38667__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38667__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38667__$2);
var G__38667__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38667__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38667__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38667__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38667__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38669 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38669,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38669,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38669,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38669,(3),null);
var G__38672 = top_data;
var G__38672__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38672,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38672);
var G__38672__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38672__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38672__$1);
var G__38672__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38672__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38672__$2);
var G__38672__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38672__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38672__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38672__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38672__$4;
}

break;
case "execution":
var vec__38674 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38674,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38674,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38674,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38674,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38650_SHARP_){
var or__4126__auto__ = (p1__38650_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38678.cljs$core$IFn$_invoke$arity$1 ? fexpr__38678.cljs$core$IFn$_invoke$arity$1(p1__38650_SHARP_) : fexpr__38678.call(null,p1__38650_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38679 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38679__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38679,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38679);
var G__38679__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38679__$1);
var G__38679__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38679__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38679__$2);
var G__38679__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38679__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38679__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38679__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38679__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38661__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38682){
var map__38683 = p__38682;
var map__38683__$1 = (((((!((map__38683 == null))))?(((((map__38683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38683):map__38683);
var triage_data = map__38683__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38689 = phase;
var G__38689__$1 = (((G__38689 instanceof cljs.core.Keyword))?G__38689.fqn:null);
switch (G__38689__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38692 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38693 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38694 = loc;
var G__38695 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38698_38835 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38699_38836 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38700_38837 = true;
var _STAR_print_fn_STAR__temp_val__38701_38838 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38700_38837);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38701_38838);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38680_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38680_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38699_38836);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38698_38835);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38692,G__38693,G__38694,G__38695) : format.call(null,G__38692,G__38693,G__38694,G__38695));

break;
case "macroexpansion":
var G__38702 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38703 = cause_type;
var G__38704 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38705 = loc;
var G__38706 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38702,G__38703,G__38704,G__38705,G__38706) : format.call(null,G__38702,G__38703,G__38704,G__38705,G__38706));

break;
case "compile-syntax-check":
var G__38707 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38708 = cause_type;
var G__38709 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38710 = loc;
var G__38711 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38707,G__38708,G__38709,G__38710,G__38711) : format.call(null,G__38707,G__38708,G__38709,G__38710,G__38711));

break;
case "compilation":
var G__38712 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38713 = cause_type;
var G__38714 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38715 = loc;
var G__38716 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38712,G__38713,G__38714,G__38715,G__38716) : format.call(null,G__38712,G__38713,G__38714,G__38715,G__38716));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38717 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38718 = symbol;
var G__38719 = loc;
var G__38720 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38721_38839 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38722_38840 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38723_38841 = true;
var _STAR_print_fn_STAR__temp_val__38724_38842 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38723_38841);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38724_38842);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38681_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38681_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38722_38840);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38721_38839);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38717,G__38718,G__38719,G__38720) : format.call(null,G__38717,G__38718,G__38719,G__38720));
} else {
var G__38725 = "Execution error%s at %s(%s).\n%s\n";
var G__38726 = cause_type;
var G__38727 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38728 = loc;
var G__38729 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38725,G__38726,G__38727,G__38728,G__38729) : format.call(null,G__38725,G__38726,G__38727,G__38728,G__38729));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38689__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
