goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__39387__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39388__i = 0, G__39388__a = new Array(arguments.length -  0);
while (G__39388__i < G__39388__a.length) {G__39388__a[G__39388__i] = arguments[G__39388__i + 0]; ++G__39388__i;}
  args = new cljs.core.IndexedSeq(G__39388__a,0,null);
} 
return G__39387__delegate.call(this,args);};
G__39387.cljs$lang$maxFixedArity = 0;
G__39387.cljs$lang$applyTo = (function (arglist__39390){
var args = cljs.core.seq(arglist__39390);
return G__39387__delegate(args);
});
G__39387.cljs$core$IFn$_invoke$arity$variadic = G__39387__delegate;
return G__39387;
})()
);

(o.error = (function() { 
var G__39391__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39392__i = 0, G__39392__a = new Array(arguments.length -  0);
while (G__39392__i < G__39392__a.length) {G__39392__a[G__39392__i] = arguments[G__39392__i + 0]; ++G__39392__i;}
  args = new cljs.core.IndexedSeq(G__39392__a,0,null);
} 
return G__39391__delegate.call(this,args);};
G__39391.cljs$lang$maxFixedArity = 0;
G__39391.cljs$lang$applyTo = (function (arglist__39393){
var args = cljs.core.seq(arglist__39393);
return G__39391__delegate(args);
});
G__39391.cljs$core$IFn$_invoke$arity$variadic = G__39391__delegate;
return G__39391;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
