goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_41851 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_41851(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_41853 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_41853(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41204 = coll;
var G__41205 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41204,G__41205) : shadow.dom.lazy_native_coll_seq.call(null,G__41204,G__41205));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__41219 = arguments.length;
switch (G__41219) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__41230 = arguments.length;
switch (G__41230) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__41236 = arguments.length;
switch (G__41236) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__41241 = arguments.length;
switch (G__41241) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__41250 = arguments.length;
switch (G__41250) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__41261 = arguments.length;
switch (G__41261) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e41268){if((e41268 instanceof Object)){
var e = e41268;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41268;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__41275 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41276 = null;
var count__41277 = (0);
var i__41278 = (0);
while(true){
if((i__41278 < count__41277)){
var el = chunk__41276.cljs$core$IIndexed$_nth$arity$2(null,i__41278);
var handler_41873__$1 = ((function (seq__41275,chunk__41276,count__41277,i__41278,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41275,chunk__41276,count__41277,i__41278,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_41873__$1);


var G__41875 = seq__41275;
var G__41876 = chunk__41276;
var G__41877 = count__41277;
var G__41878 = (i__41278 + (1));
seq__41275 = G__41875;
chunk__41276 = G__41876;
count__41277 = G__41877;
i__41278 = G__41878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41275);
if(temp__5735__auto__){
var seq__41275__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41275__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41275__$1);
var G__41879 = cljs.core.chunk_rest(seq__41275__$1);
var G__41880 = c__4556__auto__;
var G__41881 = cljs.core.count(c__4556__auto__);
var G__41882 = (0);
seq__41275 = G__41879;
chunk__41276 = G__41880;
count__41277 = G__41881;
i__41278 = G__41882;
continue;
} else {
var el = cljs.core.first(seq__41275__$1);
var handler_41883__$1 = ((function (seq__41275,chunk__41276,count__41277,i__41278,el,seq__41275__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41275,chunk__41276,count__41277,i__41278,el,seq__41275__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_41883__$1);


var G__41884 = cljs.core.next(seq__41275__$1);
var G__41885 = null;
var G__41886 = (0);
var G__41887 = (0);
seq__41275 = G__41884;
chunk__41276 = G__41885;
count__41277 = G__41886;
i__41278 = G__41887;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__41288 = arguments.length;
switch (G__41288) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__41297 = cljs.core.seq(events);
var chunk__41298 = null;
var count__41299 = (0);
var i__41300 = (0);
while(true){
if((i__41300 < count__41299)){
var vec__41313 = chunk__41298.cljs$core$IIndexed$_nth$arity$2(null,i__41300);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41892 = seq__41297;
var G__41893 = chunk__41298;
var G__41894 = count__41299;
var G__41895 = (i__41300 + (1));
seq__41297 = G__41892;
chunk__41298 = G__41893;
count__41299 = G__41894;
i__41300 = G__41895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41297);
if(temp__5735__auto__){
var seq__41297__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41297__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41297__$1);
var G__41897 = cljs.core.chunk_rest(seq__41297__$1);
var G__41898 = c__4556__auto__;
var G__41899 = cljs.core.count(c__4556__auto__);
var G__41900 = (0);
seq__41297 = G__41897;
chunk__41298 = G__41898;
count__41299 = G__41899;
i__41300 = G__41900;
continue;
} else {
var vec__41319 = cljs.core.first(seq__41297__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41901 = cljs.core.next(seq__41297__$1);
var G__41902 = null;
var G__41903 = (0);
var G__41904 = (0);
seq__41297 = G__41901;
chunk__41298 = G__41902;
count__41299 = G__41903;
i__41300 = G__41904;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__41325 = cljs.core.seq(styles);
var chunk__41326 = null;
var count__41327 = (0);
var i__41328 = (0);
while(true){
if((i__41328 < count__41327)){
var vec__41339 = chunk__41326.cljs$core$IIndexed$_nth$arity$2(null,i__41328);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__41906 = seq__41325;
var G__41907 = chunk__41326;
var G__41908 = count__41327;
var G__41909 = (i__41328 + (1));
seq__41325 = G__41906;
chunk__41326 = G__41907;
count__41327 = G__41908;
i__41328 = G__41909;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41325);
if(temp__5735__auto__){
var seq__41325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41325__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41325__$1);
var G__41910 = cljs.core.chunk_rest(seq__41325__$1);
var G__41911 = c__4556__auto__;
var G__41912 = cljs.core.count(c__4556__auto__);
var G__41913 = (0);
seq__41325 = G__41910;
chunk__41326 = G__41911;
count__41327 = G__41912;
i__41328 = G__41913;
continue;
} else {
var vec__41343 = cljs.core.first(seq__41325__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41343,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__41914 = cljs.core.next(seq__41325__$1);
var G__41915 = null;
var G__41916 = (0);
var G__41917 = (0);
seq__41325 = G__41914;
chunk__41326 = G__41915;
count__41327 = G__41916;
i__41328 = G__41917;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__41347_41919 = key;
var G__41347_41920__$1 = (((G__41347_41919 instanceof cljs.core.Keyword))?G__41347_41919.fqn:null);
switch (G__41347_41920__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_41925 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_41925,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_41925,"aria-");
}
})())){
el.setAttribute(ks_41925,value);
} else {
(el[ks_41925] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41367){
var map__41369 = p__41367;
var map__41369__$1 = (((((!((map__41369 == null))))?(((((map__41369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41369):map__41369);
var props = map__41369__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41373 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41373,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41373,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41373,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41376 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41376,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41376;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41380 = arguments.length;
switch (G__41380) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41388){
var vec__41389 = p__41388;
var seq__41390 = cljs.core.seq(vec__41389);
var first__41391 = cljs.core.first(seq__41390);
var seq__41390__$1 = cljs.core.next(seq__41390);
var nn = first__41391;
var first__41391__$1 = cljs.core.first(seq__41390__$1);
var seq__41390__$2 = cljs.core.next(seq__41390__$1);
var np = first__41391__$1;
var nc = seq__41390__$2;
var node = vec__41389;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41392 = nn;
var G__41393 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41392,G__41393) : create_fn.call(null,G__41392,G__41393));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41394 = nn;
var G__41395 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41394,G__41395) : create_fn.call(null,G__41394,G__41395));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41399 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41399,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41399,(1),null);
var seq__41402_41946 = cljs.core.seq(node_children);
var chunk__41403_41947 = null;
var count__41404_41948 = (0);
var i__41405_41949 = (0);
while(true){
if((i__41405_41949 < count__41404_41948)){
var child_struct_41951 = chunk__41403_41947.cljs$core$IIndexed$_nth$arity$2(null,i__41405_41949);
var children_41952 = shadow.dom.dom_node(child_struct_41951);
if(cljs.core.seq_QMARK_(children_41952)){
var seq__41437_41954 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41952));
var chunk__41439_41955 = null;
var count__41440_41956 = (0);
var i__41441_41957 = (0);
while(true){
if((i__41441_41957 < count__41440_41956)){
var child_41958 = chunk__41439_41955.cljs$core$IIndexed$_nth$arity$2(null,i__41441_41957);
if(cljs.core.truth_(child_41958)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41958);


var G__41959 = seq__41437_41954;
var G__41960 = chunk__41439_41955;
var G__41961 = count__41440_41956;
var G__41962 = (i__41441_41957 + (1));
seq__41437_41954 = G__41959;
chunk__41439_41955 = G__41960;
count__41440_41956 = G__41961;
i__41441_41957 = G__41962;
continue;
} else {
var G__41963 = seq__41437_41954;
var G__41964 = chunk__41439_41955;
var G__41965 = count__41440_41956;
var G__41966 = (i__41441_41957 + (1));
seq__41437_41954 = G__41963;
chunk__41439_41955 = G__41964;
count__41440_41956 = G__41965;
i__41441_41957 = G__41966;
continue;
}
} else {
var temp__5735__auto___41967 = cljs.core.seq(seq__41437_41954);
if(temp__5735__auto___41967){
var seq__41437_41968__$1 = temp__5735__auto___41967;
if(cljs.core.chunked_seq_QMARK_(seq__41437_41968__$1)){
var c__4556__auto___41970 = cljs.core.chunk_first(seq__41437_41968__$1);
var G__41971 = cljs.core.chunk_rest(seq__41437_41968__$1);
var G__41973 = c__4556__auto___41970;
var G__41974 = cljs.core.count(c__4556__auto___41970);
var G__41975 = (0);
seq__41437_41954 = G__41971;
chunk__41439_41955 = G__41973;
count__41440_41956 = G__41974;
i__41441_41957 = G__41975;
continue;
} else {
var child_41976 = cljs.core.first(seq__41437_41968__$1);
if(cljs.core.truth_(child_41976)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41976);


var G__41978 = cljs.core.next(seq__41437_41968__$1);
var G__41979 = null;
var G__41980 = (0);
var G__41981 = (0);
seq__41437_41954 = G__41978;
chunk__41439_41955 = G__41979;
count__41440_41956 = G__41980;
i__41441_41957 = G__41981;
continue;
} else {
var G__41982 = cljs.core.next(seq__41437_41968__$1);
var G__41983 = null;
var G__41984 = (0);
var G__41985 = (0);
seq__41437_41954 = G__41982;
chunk__41439_41955 = G__41983;
count__41440_41956 = G__41984;
i__41441_41957 = G__41985;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41952);
}


var G__41986 = seq__41402_41946;
var G__41987 = chunk__41403_41947;
var G__41988 = count__41404_41948;
var G__41989 = (i__41405_41949 + (1));
seq__41402_41946 = G__41986;
chunk__41403_41947 = G__41987;
count__41404_41948 = G__41988;
i__41405_41949 = G__41989;
continue;
} else {
var temp__5735__auto___41991 = cljs.core.seq(seq__41402_41946);
if(temp__5735__auto___41991){
var seq__41402_41993__$1 = temp__5735__auto___41991;
if(cljs.core.chunked_seq_QMARK_(seq__41402_41993__$1)){
var c__4556__auto___41994 = cljs.core.chunk_first(seq__41402_41993__$1);
var G__41995 = cljs.core.chunk_rest(seq__41402_41993__$1);
var G__41996 = c__4556__auto___41994;
var G__41997 = cljs.core.count(c__4556__auto___41994);
var G__41998 = (0);
seq__41402_41946 = G__41995;
chunk__41403_41947 = G__41996;
count__41404_41948 = G__41997;
i__41405_41949 = G__41998;
continue;
} else {
var child_struct_41999 = cljs.core.first(seq__41402_41993__$1);
var children_42000 = shadow.dom.dom_node(child_struct_41999);
if(cljs.core.seq_QMARK_(children_42000)){
var seq__41446_42001 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42000));
var chunk__41448_42002 = null;
var count__41449_42003 = (0);
var i__41450_42004 = (0);
while(true){
if((i__41450_42004 < count__41449_42003)){
var child_42007 = chunk__41448_42002.cljs$core$IIndexed$_nth$arity$2(null,i__41450_42004);
if(cljs.core.truth_(child_42007)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42007);


var G__42009 = seq__41446_42001;
var G__42010 = chunk__41448_42002;
var G__42011 = count__41449_42003;
var G__42012 = (i__41450_42004 + (1));
seq__41446_42001 = G__42009;
chunk__41448_42002 = G__42010;
count__41449_42003 = G__42011;
i__41450_42004 = G__42012;
continue;
} else {
var G__42014 = seq__41446_42001;
var G__42015 = chunk__41448_42002;
var G__42016 = count__41449_42003;
var G__42017 = (i__41450_42004 + (1));
seq__41446_42001 = G__42014;
chunk__41448_42002 = G__42015;
count__41449_42003 = G__42016;
i__41450_42004 = G__42017;
continue;
}
} else {
var temp__5735__auto___42019__$1 = cljs.core.seq(seq__41446_42001);
if(temp__5735__auto___42019__$1){
var seq__41446_42020__$1 = temp__5735__auto___42019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41446_42020__$1)){
var c__4556__auto___42021 = cljs.core.chunk_first(seq__41446_42020__$1);
var G__42022 = cljs.core.chunk_rest(seq__41446_42020__$1);
var G__42023 = c__4556__auto___42021;
var G__42024 = cljs.core.count(c__4556__auto___42021);
var G__42025 = (0);
seq__41446_42001 = G__42022;
chunk__41448_42002 = G__42023;
count__41449_42003 = G__42024;
i__41450_42004 = G__42025;
continue;
} else {
var child_42028 = cljs.core.first(seq__41446_42020__$1);
if(cljs.core.truth_(child_42028)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42028);


var G__42030 = cljs.core.next(seq__41446_42020__$1);
var G__42031 = null;
var G__42032 = (0);
var G__42033 = (0);
seq__41446_42001 = G__42030;
chunk__41448_42002 = G__42031;
count__41449_42003 = G__42032;
i__41450_42004 = G__42033;
continue;
} else {
var G__42035 = cljs.core.next(seq__41446_42020__$1);
var G__42036 = null;
var G__42037 = (0);
var G__42038 = (0);
seq__41446_42001 = G__42035;
chunk__41448_42002 = G__42036;
count__41449_42003 = G__42037;
i__41450_42004 = G__42038;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42000);
}


var G__42039 = cljs.core.next(seq__41402_41993__$1);
var G__42040 = null;
var G__42041 = (0);
var G__42042 = (0);
seq__41402_41946 = G__42039;
chunk__41403_41947 = G__42040;
count__41404_41948 = G__42041;
i__41405_41949 = G__42042;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__41463 = cljs.core.seq(node);
var chunk__41464 = null;
var count__41465 = (0);
var i__41466 = (0);
while(true){
if((i__41466 < count__41465)){
var n = chunk__41464.cljs$core$IIndexed$_nth$arity$2(null,i__41466);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42045 = seq__41463;
var G__42046 = chunk__41464;
var G__42047 = count__41465;
var G__42048 = (i__41466 + (1));
seq__41463 = G__42045;
chunk__41464 = G__42046;
count__41465 = G__42047;
i__41466 = G__42048;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41463);
if(temp__5735__auto__){
var seq__41463__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41463__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41463__$1);
var G__42053 = cljs.core.chunk_rest(seq__41463__$1);
var G__42054 = c__4556__auto__;
var G__42055 = cljs.core.count(c__4556__auto__);
var G__42056 = (0);
seq__41463 = G__42053;
chunk__41464 = G__42054;
count__41465 = G__42055;
i__41466 = G__42056;
continue;
} else {
var n = cljs.core.first(seq__41463__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42057 = cljs.core.next(seq__41463__$1);
var G__42058 = null;
var G__42059 = (0);
var G__42060 = (0);
seq__41463 = G__42057;
chunk__41464 = G__42058;
count__41465 = G__42059;
i__41466 = G__42060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__41475 = arguments.length;
switch (G__41475) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__41482 = arguments.length;
switch (G__41482) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__41493 = arguments.length;
switch (G__41493) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42076 = arguments.length;
var i__4737__auto___42077 = (0);
while(true){
if((i__4737__auto___42077 < len__4736__auto___42076)){
args__4742__auto__.push((arguments[i__4737__auto___42077]));

var G__42078 = (i__4737__auto___42077 + (1));
i__4737__auto___42077 = G__42078;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__41515_42079 = cljs.core.seq(nodes);
var chunk__41516_42080 = null;
var count__41517_42081 = (0);
var i__41518_42082 = (0);
while(true){
if((i__41518_42082 < count__41517_42081)){
var node_42086 = chunk__41516_42080.cljs$core$IIndexed$_nth$arity$2(null,i__41518_42082);
fragment.appendChild(shadow.dom._to_dom(node_42086));


var G__42087 = seq__41515_42079;
var G__42088 = chunk__41516_42080;
var G__42089 = count__41517_42081;
var G__42090 = (i__41518_42082 + (1));
seq__41515_42079 = G__42087;
chunk__41516_42080 = G__42088;
count__41517_42081 = G__42089;
i__41518_42082 = G__42090;
continue;
} else {
var temp__5735__auto___42091 = cljs.core.seq(seq__41515_42079);
if(temp__5735__auto___42091){
var seq__41515_42092__$1 = temp__5735__auto___42091;
if(cljs.core.chunked_seq_QMARK_(seq__41515_42092__$1)){
var c__4556__auto___42093 = cljs.core.chunk_first(seq__41515_42092__$1);
var G__42094 = cljs.core.chunk_rest(seq__41515_42092__$1);
var G__42095 = c__4556__auto___42093;
var G__42096 = cljs.core.count(c__4556__auto___42093);
var G__42097 = (0);
seq__41515_42079 = G__42094;
chunk__41516_42080 = G__42095;
count__41517_42081 = G__42096;
i__41518_42082 = G__42097;
continue;
} else {
var node_42098 = cljs.core.first(seq__41515_42092__$1);
fragment.appendChild(shadow.dom._to_dom(node_42098));


var G__42099 = cljs.core.next(seq__41515_42092__$1);
var G__42100 = null;
var G__42101 = (0);
var G__42102 = (0);
seq__41515_42079 = G__42099;
chunk__41516_42080 = G__42100;
count__41517_42081 = G__42101;
i__41518_42082 = G__42102;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41510){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41510));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41528_42103 = cljs.core.seq(scripts);
var chunk__41529_42104 = null;
var count__41530_42105 = (0);
var i__41531_42106 = (0);
while(true){
if((i__41531_42106 < count__41530_42105)){
var vec__41540_42111 = chunk__41529_42104.cljs$core$IIndexed$_nth$arity$2(null,i__41531_42106);
var script_tag_42112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540_42111,(0),null);
var script_body_42113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540_42111,(1),null);
eval(script_body_42113);


var G__42114 = seq__41528_42103;
var G__42115 = chunk__41529_42104;
var G__42116 = count__41530_42105;
var G__42117 = (i__41531_42106 + (1));
seq__41528_42103 = G__42114;
chunk__41529_42104 = G__42115;
count__41530_42105 = G__42116;
i__41531_42106 = G__42117;
continue;
} else {
var temp__5735__auto___42118 = cljs.core.seq(seq__41528_42103);
if(temp__5735__auto___42118){
var seq__41528_42119__$1 = temp__5735__auto___42118;
if(cljs.core.chunked_seq_QMARK_(seq__41528_42119__$1)){
var c__4556__auto___42120 = cljs.core.chunk_first(seq__41528_42119__$1);
var G__42121 = cljs.core.chunk_rest(seq__41528_42119__$1);
var G__42122 = c__4556__auto___42120;
var G__42123 = cljs.core.count(c__4556__auto___42120);
var G__42124 = (0);
seq__41528_42103 = G__42121;
chunk__41529_42104 = G__42122;
count__41530_42105 = G__42123;
i__41531_42106 = G__42124;
continue;
} else {
var vec__41544_42125 = cljs.core.first(seq__41528_42119__$1);
var script_tag_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41544_42125,(0),null);
var script_body_42127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41544_42125,(1),null);
eval(script_body_42127);


var G__42128 = cljs.core.next(seq__41528_42119__$1);
var G__42129 = null;
var G__42130 = (0);
var G__42131 = (0);
seq__41528_42103 = G__42128;
chunk__41529_42104 = G__42129;
count__41530_42105 = G__42130;
i__41531_42106 = G__42131;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41547){
var vec__41548 = p__41547;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41548,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41548,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__41557 = arguments.length;
switch (G__41557) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__41561 = cljs.core.seq(style_keys);
var chunk__41562 = null;
var count__41563 = (0);
var i__41564 = (0);
while(true){
if((i__41564 < count__41563)){
var it = chunk__41562.cljs$core$IIndexed$_nth$arity$2(null,i__41564);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42133 = seq__41561;
var G__42134 = chunk__41562;
var G__42135 = count__41563;
var G__42136 = (i__41564 + (1));
seq__41561 = G__42133;
chunk__41562 = G__42134;
count__41563 = G__42135;
i__41564 = G__42136;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41561);
if(temp__5735__auto__){
var seq__41561__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41561__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41561__$1);
var G__42137 = cljs.core.chunk_rest(seq__41561__$1);
var G__42138 = c__4556__auto__;
var G__42139 = cljs.core.count(c__4556__auto__);
var G__42140 = (0);
seq__41561 = G__42137;
chunk__41562 = G__42138;
count__41563 = G__42139;
i__41564 = G__42140;
continue;
} else {
var it = cljs.core.first(seq__41561__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42141 = cljs.core.next(seq__41561__$1);
var G__42142 = null;
var G__42143 = (0);
var G__42144 = (0);
seq__41561 = G__42141;
chunk__41562 = G__42142;
count__41563 = G__42143;
i__41564 = G__42144;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41571,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41582 = k41571;
var G__41582__$1 = (((G__41582 instanceof cljs.core.Keyword))?G__41582.fqn:null);
switch (G__41582__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41571,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41583){
var vec__41585 = p__41583;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41585,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41585,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41570){
var self__ = this;
var G__41570__$1 = this;
return (new cljs.core.RecordIter((0),G__41570__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41573,other41574){
var self__ = this;
var this41573__$1 = this;
return (((!((other41574 == null)))) && ((this41573__$1.constructor === other41574.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41573__$1.x,other41574.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41573__$1.y,other41574.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41573__$1.__extmap,other41574.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41570){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41611 = cljs.core.keyword_identical_QMARK_;
var expr__41612 = k__4388__auto__;
if(cljs.core.truth_((pred__41611.cljs$core$IFn$_invoke$arity$2 ? pred__41611.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41612) : pred__41611.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41612)))){
return (new shadow.dom.Coordinate(G__41570,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41611.cljs$core$IFn$_invoke$arity$2 ? pred__41611.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41612) : pred__41611.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41612)))){
return (new shadow.dom.Coordinate(self__.x,G__41570,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41570),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41570){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41570,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41575){
var extmap__4419__auto__ = (function (){var G__41623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41575,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41575)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41623);
} else {
return G__41623;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41575),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41575),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41630,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41636 = k41630;
var G__41636__$1 = (((G__41636 instanceof cljs.core.Keyword))?G__41636.fqn:null);
switch (G__41636__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41630,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41639){
var vec__41640 = p__41639;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41629){
var self__ = this;
var G__41629__$1 = this;
return (new cljs.core.RecordIter((0),G__41629__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41631,other41632){
var self__ = this;
var this41631__$1 = this;
return (((!((other41632 == null)))) && ((this41631__$1.constructor === other41632.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41631__$1.w,other41632.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41631__$1.h,other41632.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41631__$1.__extmap,other41632.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41629){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41645 = cljs.core.keyword_identical_QMARK_;
var expr__41646 = k__4388__auto__;
if(cljs.core.truth_((pred__41645.cljs$core$IFn$_invoke$arity$2 ? pred__41645.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41646) : pred__41645.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41646)))){
return (new shadow.dom.Size(G__41629,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41645.cljs$core$IFn$_invoke$arity$2 ? pred__41645.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41646) : pred__41645.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41646)))){
return (new shadow.dom.Size(self__.w,G__41629,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41629),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41629){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41629,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41634){
var extmap__4419__auto__ = (function (){var G__41657 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41634,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41657);
} else {
return G__41657;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41634),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41634),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__42164 = (i + (1));
var G__42165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42164;
ret = G__42165;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41678){
var vec__41679 = p__41678;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41687 = arguments.length;
switch (G__41687) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__42174 = ps;
var G__42175 = (i + (1));
el__$1 = G__42174;
i = G__42175;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41708 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41708,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41713_42179 = cljs.core.seq(props);
var chunk__41714_42180 = null;
var count__41715_42181 = (0);
var i__41716_42182 = (0);
while(true){
if((i__41716_42182 < count__41715_42181)){
var vec__41729_42183 = chunk__41714_42180.cljs$core$IIndexed$_nth$arity$2(null,i__41716_42182);
var k_42184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41729_42183,(0),null);
var v_42185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41729_42183,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_42184);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42184),v_42185);


var G__42189 = seq__41713_42179;
var G__42190 = chunk__41714_42180;
var G__42191 = count__41715_42181;
var G__42192 = (i__41716_42182 + (1));
seq__41713_42179 = G__42189;
chunk__41714_42180 = G__42190;
count__41715_42181 = G__42191;
i__41716_42182 = G__42192;
continue;
} else {
var temp__5735__auto___42193 = cljs.core.seq(seq__41713_42179);
if(temp__5735__auto___42193){
var seq__41713_42194__$1 = temp__5735__auto___42193;
if(cljs.core.chunked_seq_QMARK_(seq__41713_42194__$1)){
var c__4556__auto___42195 = cljs.core.chunk_first(seq__41713_42194__$1);
var G__42196 = cljs.core.chunk_rest(seq__41713_42194__$1);
var G__42197 = c__4556__auto___42195;
var G__42198 = cljs.core.count(c__4556__auto___42195);
var G__42199 = (0);
seq__41713_42179 = G__42196;
chunk__41714_42180 = G__42197;
count__41715_42181 = G__42198;
i__41716_42182 = G__42199;
continue;
} else {
var vec__41735_42200 = cljs.core.first(seq__41713_42194__$1);
var k_42201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41735_42200,(0),null);
var v_42202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41735_42200,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_42201);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42201),v_42202);


var G__42203 = cljs.core.next(seq__41713_42194__$1);
var G__42204 = null;
var G__42205 = (0);
var G__42206 = (0);
seq__41713_42179 = G__42203;
chunk__41714_42180 = G__42204;
count__41715_42181 = G__42205;
i__41716_42182 = G__42206;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__41747 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41747,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41747,(1),null);
var seq__41750_42207 = cljs.core.seq(node_children);
var chunk__41752_42208 = null;
var count__41753_42209 = (0);
var i__41754_42210 = (0);
while(true){
if((i__41754_42210 < count__41753_42209)){
var child_struct_42211 = chunk__41752_42208.cljs$core$IIndexed$_nth$arity$2(null,i__41754_42210);
if((!((child_struct_42211 == null)))){
if(typeof child_struct_42211 === 'string'){
var text_42215 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42215),child_struct_42211].join(''));
} else {
var children_42216 = shadow.dom.svg_node(child_struct_42211);
if(cljs.core.seq_QMARK_(children_42216)){
var seq__41786_42217 = cljs.core.seq(children_42216);
var chunk__41788_42218 = null;
var count__41789_42219 = (0);
var i__41790_42220 = (0);
while(true){
if((i__41790_42220 < count__41789_42219)){
var child_42221 = chunk__41788_42218.cljs$core$IIndexed$_nth$arity$2(null,i__41790_42220);
if(cljs.core.truth_(child_42221)){
node.appendChild(child_42221);


var G__42222 = seq__41786_42217;
var G__42223 = chunk__41788_42218;
var G__42224 = count__41789_42219;
var G__42225 = (i__41790_42220 + (1));
seq__41786_42217 = G__42222;
chunk__41788_42218 = G__42223;
count__41789_42219 = G__42224;
i__41790_42220 = G__42225;
continue;
} else {
var G__42226 = seq__41786_42217;
var G__42227 = chunk__41788_42218;
var G__42228 = count__41789_42219;
var G__42229 = (i__41790_42220 + (1));
seq__41786_42217 = G__42226;
chunk__41788_42218 = G__42227;
count__41789_42219 = G__42228;
i__41790_42220 = G__42229;
continue;
}
} else {
var temp__5735__auto___42230 = cljs.core.seq(seq__41786_42217);
if(temp__5735__auto___42230){
var seq__41786_42231__$1 = temp__5735__auto___42230;
if(cljs.core.chunked_seq_QMARK_(seq__41786_42231__$1)){
var c__4556__auto___42232 = cljs.core.chunk_first(seq__41786_42231__$1);
var G__42233 = cljs.core.chunk_rest(seq__41786_42231__$1);
var G__42234 = c__4556__auto___42232;
var G__42235 = cljs.core.count(c__4556__auto___42232);
var G__42236 = (0);
seq__41786_42217 = G__42233;
chunk__41788_42218 = G__42234;
count__41789_42219 = G__42235;
i__41790_42220 = G__42236;
continue;
} else {
var child_42237 = cljs.core.first(seq__41786_42231__$1);
if(cljs.core.truth_(child_42237)){
node.appendChild(child_42237);


var G__42238 = cljs.core.next(seq__41786_42231__$1);
var G__42239 = null;
var G__42240 = (0);
var G__42241 = (0);
seq__41786_42217 = G__42238;
chunk__41788_42218 = G__42239;
count__41789_42219 = G__42240;
i__41790_42220 = G__42241;
continue;
} else {
var G__42242 = cljs.core.next(seq__41786_42231__$1);
var G__42243 = null;
var G__42244 = (0);
var G__42245 = (0);
seq__41786_42217 = G__42242;
chunk__41788_42218 = G__42243;
count__41789_42219 = G__42244;
i__41790_42220 = G__42245;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42216);
}
}


var G__42246 = seq__41750_42207;
var G__42247 = chunk__41752_42208;
var G__42248 = count__41753_42209;
var G__42249 = (i__41754_42210 + (1));
seq__41750_42207 = G__42246;
chunk__41752_42208 = G__42247;
count__41753_42209 = G__42248;
i__41754_42210 = G__42249;
continue;
} else {
var G__42250 = seq__41750_42207;
var G__42251 = chunk__41752_42208;
var G__42252 = count__41753_42209;
var G__42253 = (i__41754_42210 + (1));
seq__41750_42207 = G__42250;
chunk__41752_42208 = G__42251;
count__41753_42209 = G__42252;
i__41754_42210 = G__42253;
continue;
}
} else {
var temp__5735__auto___42254 = cljs.core.seq(seq__41750_42207);
if(temp__5735__auto___42254){
var seq__41750_42255__$1 = temp__5735__auto___42254;
if(cljs.core.chunked_seq_QMARK_(seq__41750_42255__$1)){
var c__4556__auto___42256 = cljs.core.chunk_first(seq__41750_42255__$1);
var G__42257 = cljs.core.chunk_rest(seq__41750_42255__$1);
var G__42258 = c__4556__auto___42256;
var G__42259 = cljs.core.count(c__4556__auto___42256);
var G__42260 = (0);
seq__41750_42207 = G__42257;
chunk__41752_42208 = G__42258;
count__41753_42209 = G__42259;
i__41754_42210 = G__42260;
continue;
} else {
var child_struct_42261 = cljs.core.first(seq__41750_42255__$1);
if((!((child_struct_42261 == null)))){
if(typeof child_struct_42261 === 'string'){
var text_42262 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42262),child_struct_42261].join(''));
} else {
var children_42264 = shadow.dom.svg_node(child_struct_42261);
if(cljs.core.seq_QMARK_(children_42264)){
var seq__41792_42265 = cljs.core.seq(children_42264);
var chunk__41794_42266 = null;
var count__41795_42267 = (0);
var i__41796_42268 = (0);
while(true){
if((i__41796_42268 < count__41795_42267)){
var child_42272 = chunk__41794_42266.cljs$core$IIndexed$_nth$arity$2(null,i__41796_42268);
if(cljs.core.truth_(child_42272)){
node.appendChild(child_42272);


var G__42273 = seq__41792_42265;
var G__42274 = chunk__41794_42266;
var G__42275 = count__41795_42267;
var G__42276 = (i__41796_42268 + (1));
seq__41792_42265 = G__42273;
chunk__41794_42266 = G__42274;
count__41795_42267 = G__42275;
i__41796_42268 = G__42276;
continue;
} else {
var G__42277 = seq__41792_42265;
var G__42278 = chunk__41794_42266;
var G__42279 = count__41795_42267;
var G__42280 = (i__41796_42268 + (1));
seq__41792_42265 = G__42277;
chunk__41794_42266 = G__42278;
count__41795_42267 = G__42279;
i__41796_42268 = G__42280;
continue;
}
} else {
var temp__5735__auto___42281__$1 = cljs.core.seq(seq__41792_42265);
if(temp__5735__auto___42281__$1){
var seq__41792_42282__$1 = temp__5735__auto___42281__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41792_42282__$1)){
var c__4556__auto___42283 = cljs.core.chunk_first(seq__41792_42282__$1);
var G__42284 = cljs.core.chunk_rest(seq__41792_42282__$1);
var G__42285 = c__4556__auto___42283;
var G__42286 = cljs.core.count(c__4556__auto___42283);
var G__42287 = (0);
seq__41792_42265 = G__42284;
chunk__41794_42266 = G__42285;
count__41795_42267 = G__42286;
i__41796_42268 = G__42287;
continue;
} else {
var child_42288 = cljs.core.first(seq__41792_42282__$1);
if(cljs.core.truth_(child_42288)){
node.appendChild(child_42288);


var G__42289 = cljs.core.next(seq__41792_42282__$1);
var G__42290 = null;
var G__42291 = (0);
var G__42292 = (0);
seq__41792_42265 = G__42289;
chunk__41794_42266 = G__42290;
count__41795_42267 = G__42291;
i__41796_42268 = G__42292;
continue;
} else {
var G__42293 = cljs.core.next(seq__41792_42282__$1);
var G__42294 = null;
var G__42295 = (0);
var G__42296 = (0);
seq__41792_42265 = G__42293;
chunk__41794_42266 = G__42294;
count__41795_42267 = G__42295;
i__41796_42268 = G__42296;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42264);
}
}


var G__42297 = cljs.core.next(seq__41750_42255__$1);
var G__42298 = null;
var G__42299 = (0);
var G__42300 = (0);
seq__41750_42207 = G__42297;
chunk__41752_42208 = G__42298;
count__41753_42209 = G__42299;
i__41754_42210 = G__42300;
continue;
} else {
var G__42301 = cljs.core.next(seq__41750_42255__$1);
var G__42302 = null;
var G__42303 = (0);
var G__42304 = (0);
seq__41750_42207 = G__42301;
chunk__41752_42208 = G__42302;
count__41753_42209 = G__42303;
i__41754_42210 = G__42304;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42305 = arguments.length;
var i__4737__auto___42306 = (0);
while(true){
if((i__4737__auto___42306 < len__4736__auto___42305)){
args__4742__auto__.push((arguments[i__4737__auto___42306]));

var G__42307 = (i__4737__auto___42306 + (1));
i__4737__auto___42306 = G__42307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq41798){
var G__41799 = cljs.core.first(seq41798);
var seq41798__$1 = cljs.core.next(seq41798);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41799,seq41798__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__41807 = arguments.length;
switch (G__41807) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__27964__auto___42311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_41821){
var state_val_41822 = (state_41821[(1)]);
if((state_val_41822 === (1))){
var state_41821__$1 = state_41821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41821__$1,(2),once_or_cleanup);
} else {
if((state_val_41822 === (2))){
var inst_41818 = (state_41821[(2)]);
var inst_41819 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41821__$1 = (function (){var statearr_41825 = state_41821;
(statearr_41825[(7)] = inst_41818);

return statearr_41825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41821__$1,inst_41819);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27873__auto__ = null;
var shadow$dom$state_machine__27873__auto____0 = (function (){
var statearr_41828 = [null,null,null,null,null,null,null,null];
(statearr_41828[(0)] = shadow$dom$state_machine__27873__auto__);

(statearr_41828[(1)] = (1));

return statearr_41828;
});
var shadow$dom$state_machine__27873__auto____1 = (function (state_41821){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_41821);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e41832){var ex__27876__auto__ = e41832;
var statearr_41834_42312 = state_41821;
(statearr_41834_42312[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_41821[(4)]))){
var statearr_41835_42313 = state_41821;
(statearr_41835_42313[(1)] = cljs.core.first((state_41821[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42314 = state_41821;
state_41821 = G__42314;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
shadow$dom$state_machine__27873__auto__ = function(state_41821){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27873__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27873__auto____1.call(this,state_41821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27873__auto____0;
shadow$dom$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27873__auto____1;
return shadow$dom$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_41838 = f__27965__auto__();
(statearr_41838[(6)] = c__27964__auto___42311);

return statearr_41838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
