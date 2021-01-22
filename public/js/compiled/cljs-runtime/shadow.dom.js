goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36197 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_36197(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36200 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_36200(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35536 = coll;
var G__35537 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35536,G__35537) : shadow.dom.lazy_native_coll_seq.call(null,G__35536,G__35537));
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
var G__35559 = arguments.length;
switch (G__35559) {
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
var G__35562 = arguments.length;
switch (G__35562) {
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
var G__35567 = arguments.length;
switch (G__35567) {
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
var G__35581 = arguments.length;
switch (G__35581) {
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
var G__35589 = arguments.length;
switch (G__35589) {
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
var G__35606 = arguments.length;
switch (G__35606) {
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
}catch (e35613){if((e35613 instanceof Object)){
var e = e35613;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35613;

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
var seq__35620 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35621 = null;
var count__35622 = (0);
var i__35623 = (0);
while(true){
if((i__35623 < count__35622)){
var el = chunk__35621.cljs$core$IIndexed$_nth$arity$2(null,i__35623);
var handler_36237__$1 = ((function (seq__35620,chunk__35621,count__35622,i__35623,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35620,chunk__35621,count__35622,i__35623,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36237__$1);


var G__36238 = seq__35620;
var G__36239 = chunk__35621;
var G__36240 = count__35622;
var G__36241 = (i__35623 + (1));
seq__35620 = G__36238;
chunk__35621 = G__36239;
count__35622 = G__36240;
i__35623 = G__36241;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35620);
if(temp__5735__auto__){
var seq__35620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35620__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35620__$1);
var G__36244 = cljs.core.chunk_rest(seq__35620__$1);
var G__36245 = c__4556__auto__;
var G__36246 = cljs.core.count(c__4556__auto__);
var G__36247 = (0);
seq__35620 = G__36244;
chunk__35621 = G__36245;
count__35622 = G__36246;
i__35623 = G__36247;
continue;
} else {
var el = cljs.core.first(seq__35620__$1);
var handler_36248__$1 = ((function (seq__35620,chunk__35621,count__35622,i__35623,el,seq__35620__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35620,chunk__35621,count__35622,i__35623,el,seq__35620__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36248__$1);


var G__36249 = cljs.core.next(seq__35620__$1);
var G__36250 = null;
var G__36251 = (0);
var G__36252 = (0);
seq__35620 = G__36249;
chunk__35621 = G__36250;
count__35622 = G__36251;
i__35623 = G__36252;
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
var G__35639 = arguments.length;
switch (G__35639) {
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
var seq__35643 = cljs.core.seq(events);
var chunk__35644 = null;
var count__35645 = (0);
var i__35646 = (0);
while(true){
if((i__35646 < count__35645)){
var vec__35656 = chunk__35644.cljs$core$IIndexed$_nth$arity$2(null,i__35646);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36259 = seq__35643;
var G__36260 = chunk__35644;
var G__36261 = count__35645;
var G__36262 = (i__35646 + (1));
seq__35643 = G__36259;
chunk__35644 = G__36260;
count__35645 = G__36261;
i__35646 = G__36262;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35643);
if(temp__5735__auto__){
var seq__35643__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35643__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35643__$1);
var G__36263 = cljs.core.chunk_rest(seq__35643__$1);
var G__36264 = c__4556__auto__;
var G__36265 = cljs.core.count(c__4556__auto__);
var G__36266 = (0);
seq__35643 = G__36263;
chunk__35644 = G__36264;
count__35645 = G__36265;
i__35646 = G__36266;
continue;
} else {
var vec__35662 = cljs.core.first(seq__35643__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36268 = cljs.core.next(seq__35643__$1);
var G__36269 = null;
var G__36270 = (0);
var G__36271 = (0);
seq__35643 = G__36268;
chunk__35644 = G__36269;
count__35645 = G__36270;
i__35646 = G__36271;
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
var seq__35668 = cljs.core.seq(styles);
var chunk__35669 = null;
var count__35670 = (0);
var i__35671 = (0);
while(true){
if((i__35671 < count__35670)){
var vec__35684 = chunk__35669.cljs$core$IIndexed$_nth$arity$2(null,i__35671);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35684,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35684,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36274 = seq__35668;
var G__36275 = chunk__35669;
var G__36276 = count__35670;
var G__36277 = (i__35671 + (1));
seq__35668 = G__36274;
chunk__35669 = G__36275;
count__35670 = G__36276;
i__35671 = G__36277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35668);
if(temp__5735__auto__){
var seq__35668__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35668__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35668__$1);
var G__36278 = cljs.core.chunk_rest(seq__35668__$1);
var G__36279 = c__4556__auto__;
var G__36280 = cljs.core.count(c__4556__auto__);
var G__36281 = (0);
seq__35668 = G__36278;
chunk__35669 = G__36279;
count__35670 = G__36280;
i__35671 = G__36281;
continue;
} else {
var vec__35689 = cljs.core.first(seq__35668__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35689,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36283 = cljs.core.next(seq__35668__$1);
var G__36284 = null;
var G__36285 = (0);
var G__36286 = (0);
seq__35668 = G__36283;
chunk__35669 = G__36284;
count__35670 = G__36285;
i__35671 = G__36286;
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
var G__35694_36288 = key;
var G__35694_36289__$1 = (((G__35694_36288 instanceof cljs.core.Keyword))?G__35694_36288.fqn:null);
switch (G__35694_36289__$1) {
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
var ks_36292 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36292,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36292,"aria-");
}
})())){
el.setAttribute(ks_36292,value);
} else {
(el[ks_36292] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35710){
var map__35711 = p__35710;
var map__35711__$1 = (((((!((map__35711 == null))))?(((((map__35711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35711):map__35711);
var props = map__35711__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35711__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35714 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35714,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35714,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35714,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35718 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35718,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35718;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35722 = arguments.length;
switch (G__35722) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35733){
var vec__35734 = p__35733;
var seq__35735 = cljs.core.seq(vec__35734);
var first__35736 = cljs.core.first(seq__35735);
var seq__35735__$1 = cljs.core.next(seq__35735);
var nn = first__35736;
var first__35736__$1 = cljs.core.first(seq__35735__$1);
var seq__35735__$2 = cljs.core.next(seq__35735__$1);
var np = first__35736__$1;
var nc = seq__35735__$2;
var node = vec__35734;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35738 = nn;
var G__35739 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35738,G__35739) : create_fn.call(null,G__35738,G__35739));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35742 = nn;
var G__35743 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35742,G__35743) : create_fn.call(null,G__35742,G__35743));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35745 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35745,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35745,(1),null);
var seq__35749_36297 = cljs.core.seq(node_children);
var chunk__35750_36298 = null;
var count__35751_36299 = (0);
var i__35752_36300 = (0);
while(true){
if((i__35752_36300 < count__35751_36299)){
var child_struct_36302 = chunk__35750_36298.cljs$core$IIndexed$_nth$arity$2(null,i__35752_36300);
var children_36303 = shadow.dom.dom_node(child_struct_36302);
if(cljs.core.seq_QMARK_(children_36303)){
var seq__35769_36304 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36303));
var chunk__35771_36305 = null;
var count__35772_36306 = (0);
var i__35773_36307 = (0);
while(true){
if((i__35773_36307 < count__35772_36306)){
var child_36308 = chunk__35771_36305.cljs$core$IIndexed$_nth$arity$2(null,i__35773_36307);
if(cljs.core.truth_(child_36308)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36308);


var G__36309 = seq__35769_36304;
var G__36310 = chunk__35771_36305;
var G__36311 = count__35772_36306;
var G__36312 = (i__35773_36307 + (1));
seq__35769_36304 = G__36309;
chunk__35771_36305 = G__36310;
count__35772_36306 = G__36311;
i__35773_36307 = G__36312;
continue;
} else {
var G__36313 = seq__35769_36304;
var G__36314 = chunk__35771_36305;
var G__36315 = count__35772_36306;
var G__36316 = (i__35773_36307 + (1));
seq__35769_36304 = G__36313;
chunk__35771_36305 = G__36314;
count__35772_36306 = G__36315;
i__35773_36307 = G__36316;
continue;
}
} else {
var temp__5735__auto___36317 = cljs.core.seq(seq__35769_36304);
if(temp__5735__auto___36317){
var seq__35769_36318__$1 = temp__5735__auto___36317;
if(cljs.core.chunked_seq_QMARK_(seq__35769_36318__$1)){
var c__4556__auto___36319 = cljs.core.chunk_first(seq__35769_36318__$1);
var G__36320 = cljs.core.chunk_rest(seq__35769_36318__$1);
var G__36321 = c__4556__auto___36319;
var G__36322 = cljs.core.count(c__4556__auto___36319);
var G__36323 = (0);
seq__35769_36304 = G__36320;
chunk__35771_36305 = G__36321;
count__35772_36306 = G__36322;
i__35773_36307 = G__36323;
continue;
} else {
var child_36324 = cljs.core.first(seq__35769_36318__$1);
if(cljs.core.truth_(child_36324)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36324);


var G__36325 = cljs.core.next(seq__35769_36318__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__35769_36304 = G__36325;
chunk__35771_36305 = G__36326;
count__35772_36306 = G__36327;
i__35773_36307 = G__36328;
continue;
} else {
var G__36329 = cljs.core.next(seq__35769_36318__$1);
var G__36330 = null;
var G__36331 = (0);
var G__36332 = (0);
seq__35769_36304 = G__36329;
chunk__35771_36305 = G__36330;
count__35772_36306 = G__36331;
i__35773_36307 = G__36332;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36303);
}


var G__36333 = seq__35749_36297;
var G__36334 = chunk__35750_36298;
var G__36335 = count__35751_36299;
var G__36336 = (i__35752_36300 + (1));
seq__35749_36297 = G__36333;
chunk__35750_36298 = G__36334;
count__35751_36299 = G__36335;
i__35752_36300 = G__36336;
continue;
} else {
var temp__5735__auto___36337 = cljs.core.seq(seq__35749_36297);
if(temp__5735__auto___36337){
var seq__35749_36338__$1 = temp__5735__auto___36337;
if(cljs.core.chunked_seq_QMARK_(seq__35749_36338__$1)){
var c__4556__auto___36339 = cljs.core.chunk_first(seq__35749_36338__$1);
var G__36340 = cljs.core.chunk_rest(seq__35749_36338__$1);
var G__36341 = c__4556__auto___36339;
var G__36342 = cljs.core.count(c__4556__auto___36339);
var G__36343 = (0);
seq__35749_36297 = G__36340;
chunk__35750_36298 = G__36341;
count__35751_36299 = G__36342;
i__35752_36300 = G__36343;
continue;
} else {
var child_struct_36344 = cljs.core.first(seq__35749_36338__$1);
var children_36345 = shadow.dom.dom_node(child_struct_36344);
if(cljs.core.seq_QMARK_(children_36345)){
var seq__35784_36346 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36345));
var chunk__35786_36347 = null;
var count__35787_36348 = (0);
var i__35788_36349 = (0);
while(true){
if((i__35788_36349 < count__35787_36348)){
var child_36350 = chunk__35786_36347.cljs$core$IIndexed$_nth$arity$2(null,i__35788_36349);
if(cljs.core.truth_(child_36350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36350);


var G__36351 = seq__35784_36346;
var G__36352 = chunk__35786_36347;
var G__36353 = count__35787_36348;
var G__36354 = (i__35788_36349 + (1));
seq__35784_36346 = G__36351;
chunk__35786_36347 = G__36352;
count__35787_36348 = G__36353;
i__35788_36349 = G__36354;
continue;
} else {
var G__36355 = seq__35784_36346;
var G__36356 = chunk__35786_36347;
var G__36357 = count__35787_36348;
var G__36358 = (i__35788_36349 + (1));
seq__35784_36346 = G__36355;
chunk__35786_36347 = G__36356;
count__35787_36348 = G__36357;
i__35788_36349 = G__36358;
continue;
}
} else {
var temp__5735__auto___36359__$1 = cljs.core.seq(seq__35784_36346);
if(temp__5735__auto___36359__$1){
var seq__35784_36360__$1 = temp__5735__auto___36359__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35784_36360__$1)){
var c__4556__auto___36361 = cljs.core.chunk_first(seq__35784_36360__$1);
var G__36362 = cljs.core.chunk_rest(seq__35784_36360__$1);
var G__36363 = c__4556__auto___36361;
var G__36364 = cljs.core.count(c__4556__auto___36361);
var G__36365 = (0);
seq__35784_36346 = G__36362;
chunk__35786_36347 = G__36363;
count__35787_36348 = G__36364;
i__35788_36349 = G__36365;
continue;
} else {
var child_36366 = cljs.core.first(seq__35784_36360__$1);
if(cljs.core.truth_(child_36366)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36366);


var G__36367 = cljs.core.next(seq__35784_36360__$1);
var G__36368 = null;
var G__36369 = (0);
var G__36370 = (0);
seq__35784_36346 = G__36367;
chunk__35786_36347 = G__36368;
count__35787_36348 = G__36369;
i__35788_36349 = G__36370;
continue;
} else {
var G__36371 = cljs.core.next(seq__35784_36360__$1);
var G__36372 = null;
var G__36373 = (0);
var G__36374 = (0);
seq__35784_36346 = G__36371;
chunk__35786_36347 = G__36372;
count__35787_36348 = G__36373;
i__35788_36349 = G__36374;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36345);
}


var G__36375 = cljs.core.next(seq__35749_36338__$1);
var G__36376 = null;
var G__36377 = (0);
var G__36378 = (0);
seq__35749_36297 = G__36375;
chunk__35750_36298 = G__36376;
count__35751_36299 = G__36377;
i__35752_36300 = G__36378;
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
var seq__35812 = cljs.core.seq(node);
var chunk__35814 = null;
var count__35815 = (0);
var i__35816 = (0);
while(true){
if((i__35816 < count__35815)){
var n = chunk__35814.cljs$core$IIndexed$_nth$arity$2(null,i__35816);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36379 = seq__35812;
var G__36380 = chunk__35814;
var G__36381 = count__35815;
var G__36382 = (i__35816 + (1));
seq__35812 = G__36379;
chunk__35814 = G__36380;
count__35815 = G__36381;
i__35816 = G__36382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35812);
if(temp__5735__auto__){
var seq__35812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35812__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35812__$1);
var G__36383 = cljs.core.chunk_rest(seq__35812__$1);
var G__36384 = c__4556__auto__;
var G__36385 = cljs.core.count(c__4556__auto__);
var G__36386 = (0);
seq__35812 = G__36383;
chunk__35814 = G__36384;
count__35815 = G__36385;
i__35816 = G__36386;
continue;
} else {
var n = cljs.core.first(seq__35812__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36387 = cljs.core.next(seq__35812__$1);
var G__36388 = null;
var G__36389 = (0);
var G__36390 = (0);
seq__35812 = G__36387;
chunk__35814 = G__36388;
count__35815 = G__36389;
i__35816 = G__36390;
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
var G__35826 = arguments.length;
switch (G__35826) {
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
var G__35833 = arguments.length;
switch (G__35833) {
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
var G__35846 = arguments.length;
switch (G__35846) {
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
var len__4736__auto___36397 = arguments.length;
var i__4737__auto___36398 = (0);
while(true){
if((i__4737__auto___36398 < len__4736__auto___36397)){
args__4742__auto__.push((arguments[i__4737__auto___36398]));

var G__36399 = (i__4737__auto___36398 + (1));
i__4737__auto___36398 = G__36399;
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
var seq__35857_36400 = cljs.core.seq(nodes);
var chunk__35858_36401 = null;
var count__35859_36402 = (0);
var i__35860_36403 = (0);
while(true){
if((i__35860_36403 < count__35859_36402)){
var node_36404 = chunk__35858_36401.cljs$core$IIndexed$_nth$arity$2(null,i__35860_36403);
fragment.appendChild(shadow.dom._to_dom(node_36404));


var G__36405 = seq__35857_36400;
var G__36406 = chunk__35858_36401;
var G__36407 = count__35859_36402;
var G__36408 = (i__35860_36403 + (1));
seq__35857_36400 = G__36405;
chunk__35858_36401 = G__36406;
count__35859_36402 = G__36407;
i__35860_36403 = G__36408;
continue;
} else {
var temp__5735__auto___36409 = cljs.core.seq(seq__35857_36400);
if(temp__5735__auto___36409){
var seq__35857_36410__$1 = temp__5735__auto___36409;
if(cljs.core.chunked_seq_QMARK_(seq__35857_36410__$1)){
var c__4556__auto___36411 = cljs.core.chunk_first(seq__35857_36410__$1);
var G__36412 = cljs.core.chunk_rest(seq__35857_36410__$1);
var G__36413 = c__4556__auto___36411;
var G__36414 = cljs.core.count(c__4556__auto___36411);
var G__36415 = (0);
seq__35857_36400 = G__36412;
chunk__35858_36401 = G__36413;
count__35859_36402 = G__36414;
i__35860_36403 = G__36415;
continue;
} else {
var node_36416 = cljs.core.first(seq__35857_36410__$1);
fragment.appendChild(shadow.dom._to_dom(node_36416));


var G__36417 = cljs.core.next(seq__35857_36410__$1);
var G__36418 = null;
var G__36419 = (0);
var G__36420 = (0);
seq__35857_36400 = G__36417;
chunk__35858_36401 = G__36418;
count__35859_36402 = G__36419;
i__35860_36403 = G__36420;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35854){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35854));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35867_36421 = cljs.core.seq(scripts);
var chunk__35868_36422 = null;
var count__35869_36423 = (0);
var i__35870_36424 = (0);
while(true){
if((i__35870_36424 < count__35869_36423)){
var vec__35877_36425 = chunk__35868_36422.cljs$core$IIndexed$_nth$arity$2(null,i__35870_36424);
var script_tag_36426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877_36425,(0),null);
var script_body_36427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35877_36425,(1),null);
eval(script_body_36427);


var G__36428 = seq__35867_36421;
var G__36429 = chunk__35868_36422;
var G__36430 = count__35869_36423;
var G__36431 = (i__35870_36424 + (1));
seq__35867_36421 = G__36428;
chunk__35868_36422 = G__36429;
count__35869_36423 = G__36430;
i__35870_36424 = G__36431;
continue;
} else {
var temp__5735__auto___36432 = cljs.core.seq(seq__35867_36421);
if(temp__5735__auto___36432){
var seq__35867_36433__$1 = temp__5735__auto___36432;
if(cljs.core.chunked_seq_QMARK_(seq__35867_36433__$1)){
var c__4556__auto___36434 = cljs.core.chunk_first(seq__35867_36433__$1);
var G__36435 = cljs.core.chunk_rest(seq__35867_36433__$1);
var G__36436 = c__4556__auto___36434;
var G__36437 = cljs.core.count(c__4556__auto___36434);
var G__36438 = (0);
seq__35867_36421 = G__36435;
chunk__35868_36422 = G__36436;
count__35869_36423 = G__36437;
i__35870_36424 = G__36438;
continue;
} else {
var vec__35880_36439 = cljs.core.first(seq__35867_36433__$1);
var script_tag_36440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35880_36439,(0),null);
var script_body_36441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35880_36439,(1),null);
eval(script_body_36441);


var G__36442 = cljs.core.next(seq__35867_36433__$1);
var G__36443 = null;
var G__36444 = (0);
var G__36445 = (0);
seq__35867_36421 = G__36442;
chunk__35868_36422 = G__36443;
count__35869_36423 = G__36444;
i__35870_36424 = G__36445;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35883){
var vec__35884 = p__35883;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35884,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35884,(1),null);
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
var G__35891 = arguments.length;
switch (G__35891) {
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
var seq__35909 = cljs.core.seq(style_keys);
var chunk__35910 = null;
var count__35911 = (0);
var i__35912 = (0);
while(true){
if((i__35912 < count__35911)){
var it = chunk__35910.cljs$core$IIndexed$_nth$arity$2(null,i__35912);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36451 = seq__35909;
var G__36452 = chunk__35910;
var G__36453 = count__35911;
var G__36454 = (i__35912 + (1));
seq__35909 = G__36451;
chunk__35910 = G__36452;
count__35911 = G__36453;
i__35912 = G__36454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35909);
if(temp__5735__auto__){
var seq__35909__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35909__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35909__$1);
var G__36455 = cljs.core.chunk_rest(seq__35909__$1);
var G__36456 = c__4556__auto__;
var G__36457 = cljs.core.count(c__4556__auto__);
var G__36458 = (0);
seq__35909 = G__36455;
chunk__35910 = G__36456;
count__35911 = G__36457;
i__35912 = G__36458;
continue;
} else {
var it = cljs.core.first(seq__35909__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36459 = cljs.core.next(seq__35909__$1);
var G__36460 = null;
var G__36461 = (0);
var G__36462 = (0);
seq__35909 = G__36459;
chunk__35910 = G__36460;
count__35911 = G__36461;
i__35912 = G__36462;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35928,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35940 = k35928;
var G__35940__$1 = (((G__35940 instanceof cljs.core.Keyword))?G__35940.fqn:null);
switch (G__35940__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35928,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35942){
var vec__35943 = p__35942;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35927){
var self__ = this;
var G__35927__$1 = this;
return (new cljs.core.RecordIter((0),G__35927__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35929,other35930){
var self__ = this;
var this35929__$1 = this;
return (((!((other35930 == null)))) && ((this35929__$1.constructor === other35930.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35929__$1.x,other35930.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35929__$1.y,other35930.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35929__$1.__extmap,other35930.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35927){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35954 = cljs.core.keyword_identical_QMARK_;
var expr__35955 = k__4388__auto__;
if(cljs.core.truth_((pred__35954.cljs$core$IFn$_invoke$arity$2 ? pred__35954.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35955) : pred__35954.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35955)))){
return (new shadow.dom.Coordinate(G__35927,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35954.cljs$core$IFn$_invoke$arity$2 ? pred__35954.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35955) : pred__35954.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35955)))){
return (new shadow.dom.Coordinate(self__.x,G__35927,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35927),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35927){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35927,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35934){
var extmap__4419__auto__ = (function (){var G__35961 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35934,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35961);
} else {
return G__35961;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35934),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35934),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35965,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35975 = k35965;
var G__35975__$1 = (((G__35975 instanceof cljs.core.Keyword))?G__35975.fqn:null);
switch (G__35975__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35965,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35979){
var vec__35981 = p__35979;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35981,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35981,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35964){
var self__ = this;
var G__35964__$1 = this;
return (new cljs.core.RecordIter((0),G__35964__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35966,other35967){
var self__ = this;
var this35966__$1 = this;
return (((!((other35967 == null)))) && ((this35966__$1.constructor === other35967.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35966__$1.w,other35967.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35966__$1.h,other35967.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35966__$1.__extmap,other35967.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35964){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35998 = cljs.core.keyword_identical_QMARK_;
var expr__35999 = k__4388__auto__;
if(cljs.core.truth_((pred__35998.cljs$core$IFn$_invoke$arity$2 ? pred__35998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35999) : pred__35998.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35999)))){
return (new shadow.dom.Size(G__35964,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35998.cljs$core$IFn$_invoke$arity$2 ? pred__35998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35999) : pred__35998.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35999)))){
return (new shadow.dom.Size(self__.w,G__35964,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35964),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35964){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35964,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35969){
var extmap__4419__auto__ = (function (){var G__36008 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35969,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35969)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36008);
} else {
return G__36008;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35969),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35969),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__36475 = (i + (1));
var G__36476 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36475;
ret = G__36476;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36023){
var vec__36025 = p__36023;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36030 = arguments.length;
switch (G__36030) {
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
var G__36482 = ps;
var G__36483 = (i + (1));
el__$1 = G__36482;
i = G__36483;
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
var vec__36052 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36056_36484 = cljs.core.seq(props);
var chunk__36057_36485 = null;
var count__36058_36486 = (0);
var i__36059_36487 = (0);
while(true){
if((i__36059_36487 < count__36058_36486)){
var vec__36071_36488 = chunk__36057_36485.cljs$core$IIndexed$_nth$arity$2(null,i__36059_36487);
var k_36489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071_36488,(0),null);
var v_36490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071_36488,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36489);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36489),v_36490);


var G__36491 = seq__36056_36484;
var G__36492 = chunk__36057_36485;
var G__36493 = count__36058_36486;
var G__36494 = (i__36059_36487 + (1));
seq__36056_36484 = G__36491;
chunk__36057_36485 = G__36492;
count__36058_36486 = G__36493;
i__36059_36487 = G__36494;
continue;
} else {
var temp__5735__auto___36495 = cljs.core.seq(seq__36056_36484);
if(temp__5735__auto___36495){
var seq__36056_36496__$1 = temp__5735__auto___36495;
if(cljs.core.chunked_seq_QMARK_(seq__36056_36496__$1)){
var c__4556__auto___36497 = cljs.core.chunk_first(seq__36056_36496__$1);
var G__36498 = cljs.core.chunk_rest(seq__36056_36496__$1);
var G__36499 = c__4556__auto___36497;
var G__36500 = cljs.core.count(c__4556__auto___36497);
var G__36501 = (0);
seq__36056_36484 = G__36498;
chunk__36057_36485 = G__36499;
count__36058_36486 = G__36500;
i__36059_36487 = G__36501;
continue;
} else {
var vec__36076_36502 = cljs.core.first(seq__36056_36496__$1);
var k_36503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36076_36502,(0),null);
var v_36504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36076_36502,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36503);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36503),v_36504);


var G__36505 = cljs.core.next(seq__36056_36496__$1);
var G__36506 = null;
var G__36507 = (0);
var G__36508 = (0);
seq__36056_36484 = G__36505;
chunk__36057_36485 = G__36506;
count__36058_36486 = G__36507;
i__36059_36487 = G__36508;
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
var vec__36086 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(1),null);
var seq__36089_36509 = cljs.core.seq(node_children);
var chunk__36091_36510 = null;
var count__36092_36511 = (0);
var i__36093_36512 = (0);
while(true){
if((i__36093_36512 < count__36092_36511)){
var child_struct_36513 = chunk__36091_36510.cljs$core$IIndexed$_nth$arity$2(null,i__36093_36512);
if((!((child_struct_36513 == null)))){
if(typeof child_struct_36513 === 'string'){
var text_36517 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36517),child_struct_36513].join(''));
} else {
var children_36518 = shadow.dom.svg_node(child_struct_36513);
if(cljs.core.seq_QMARK_(children_36518)){
var seq__36114_36519 = cljs.core.seq(children_36518);
var chunk__36116_36520 = null;
var count__36117_36521 = (0);
var i__36118_36522 = (0);
while(true){
if((i__36118_36522 < count__36117_36521)){
var child_36523 = chunk__36116_36520.cljs$core$IIndexed$_nth$arity$2(null,i__36118_36522);
if(cljs.core.truth_(child_36523)){
node.appendChild(child_36523);


var G__36524 = seq__36114_36519;
var G__36525 = chunk__36116_36520;
var G__36526 = count__36117_36521;
var G__36527 = (i__36118_36522 + (1));
seq__36114_36519 = G__36524;
chunk__36116_36520 = G__36525;
count__36117_36521 = G__36526;
i__36118_36522 = G__36527;
continue;
} else {
var G__36528 = seq__36114_36519;
var G__36529 = chunk__36116_36520;
var G__36530 = count__36117_36521;
var G__36531 = (i__36118_36522 + (1));
seq__36114_36519 = G__36528;
chunk__36116_36520 = G__36529;
count__36117_36521 = G__36530;
i__36118_36522 = G__36531;
continue;
}
} else {
var temp__5735__auto___36532 = cljs.core.seq(seq__36114_36519);
if(temp__5735__auto___36532){
var seq__36114_36533__$1 = temp__5735__auto___36532;
if(cljs.core.chunked_seq_QMARK_(seq__36114_36533__$1)){
var c__4556__auto___36534 = cljs.core.chunk_first(seq__36114_36533__$1);
var G__36535 = cljs.core.chunk_rest(seq__36114_36533__$1);
var G__36536 = c__4556__auto___36534;
var G__36537 = cljs.core.count(c__4556__auto___36534);
var G__36538 = (0);
seq__36114_36519 = G__36535;
chunk__36116_36520 = G__36536;
count__36117_36521 = G__36537;
i__36118_36522 = G__36538;
continue;
} else {
var child_36539 = cljs.core.first(seq__36114_36533__$1);
if(cljs.core.truth_(child_36539)){
node.appendChild(child_36539);


var G__36540 = cljs.core.next(seq__36114_36533__$1);
var G__36541 = null;
var G__36542 = (0);
var G__36543 = (0);
seq__36114_36519 = G__36540;
chunk__36116_36520 = G__36541;
count__36117_36521 = G__36542;
i__36118_36522 = G__36543;
continue;
} else {
var G__36544 = cljs.core.next(seq__36114_36533__$1);
var G__36545 = null;
var G__36546 = (0);
var G__36547 = (0);
seq__36114_36519 = G__36544;
chunk__36116_36520 = G__36545;
count__36117_36521 = G__36546;
i__36118_36522 = G__36547;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36518);
}
}


var G__36548 = seq__36089_36509;
var G__36549 = chunk__36091_36510;
var G__36550 = count__36092_36511;
var G__36551 = (i__36093_36512 + (1));
seq__36089_36509 = G__36548;
chunk__36091_36510 = G__36549;
count__36092_36511 = G__36550;
i__36093_36512 = G__36551;
continue;
} else {
var G__36552 = seq__36089_36509;
var G__36553 = chunk__36091_36510;
var G__36554 = count__36092_36511;
var G__36555 = (i__36093_36512 + (1));
seq__36089_36509 = G__36552;
chunk__36091_36510 = G__36553;
count__36092_36511 = G__36554;
i__36093_36512 = G__36555;
continue;
}
} else {
var temp__5735__auto___36556 = cljs.core.seq(seq__36089_36509);
if(temp__5735__auto___36556){
var seq__36089_36557__$1 = temp__5735__auto___36556;
if(cljs.core.chunked_seq_QMARK_(seq__36089_36557__$1)){
var c__4556__auto___36558 = cljs.core.chunk_first(seq__36089_36557__$1);
var G__36559 = cljs.core.chunk_rest(seq__36089_36557__$1);
var G__36560 = c__4556__auto___36558;
var G__36561 = cljs.core.count(c__4556__auto___36558);
var G__36562 = (0);
seq__36089_36509 = G__36559;
chunk__36091_36510 = G__36560;
count__36092_36511 = G__36561;
i__36093_36512 = G__36562;
continue;
} else {
var child_struct_36563 = cljs.core.first(seq__36089_36557__$1);
if((!((child_struct_36563 == null)))){
if(typeof child_struct_36563 === 'string'){
var text_36564 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36564),child_struct_36563].join(''));
} else {
var children_36568 = shadow.dom.svg_node(child_struct_36563);
if(cljs.core.seq_QMARK_(children_36568)){
var seq__36120_36569 = cljs.core.seq(children_36568);
var chunk__36122_36570 = null;
var count__36123_36571 = (0);
var i__36124_36572 = (0);
while(true){
if((i__36124_36572 < count__36123_36571)){
var child_36573 = chunk__36122_36570.cljs$core$IIndexed$_nth$arity$2(null,i__36124_36572);
if(cljs.core.truth_(child_36573)){
node.appendChild(child_36573);


var G__36574 = seq__36120_36569;
var G__36575 = chunk__36122_36570;
var G__36576 = count__36123_36571;
var G__36577 = (i__36124_36572 + (1));
seq__36120_36569 = G__36574;
chunk__36122_36570 = G__36575;
count__36123_36571 = G__36576;
i__36124_36572 = G__36577;
continue;
} else {
var G__36578 = seq__36120_36569;
var G__36579 = chunk__36122_36570;
var G__36580 = count__36123_36571;
var G__36581 = (i__36124_36572 + (1));
seq__36120_36569 = G__36578;
chunk__36122_36570 = G__36579;
count__36123_36571 = G__36580;
i__36124_36572 = G__36581;
continue;
}
} else {
var temp__5735__auto___36582__$1 = cljs.core.seq(seq__36120_36569);
if(temp__5735__auto___36582__$1){
var seq__36120_36583__$1 = temp__5735__auto___36582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36120_36583__$1)){
var c__4556__auto___36584 = cljs.core.chunk_first(seq__36120_36583__$1);
var G__36585 = cljs.core.chunk_rest(seq__36120_36583__$1);
var G__36586 = c__4556__auto___36584;
var G__36587 = cljs.core.count(c__4556__auto___36584);
var G__36588 = (0);
seq__36120_36569 = G__36585;
chunk__36122_36570 = G__36586;
count__36123_36571 = G__36587;
i__36124_36572 = G__36588;
continue;
} else {
var child_36589 = cljs.core.first(seq__36120_36583__$1);
if(cljs.core.truth_(child_36589)){
node.appendChild(child_36589);


var G__36590 = cljs.core.next(seq__36120_36583__$1);
var G__36591 = null;
var G__36592 = (0);
var G__36593 = (0);
seq__36120_36569 = G__36590;
chunk__36122_36570 = G__36591;
count__36123_36571 = G__36592;
i__36124_36572 = G__36593;
continue;
} else {
var G__36594 = cljs.core.next(seq__36120_36583__$1);
var G__36595 = null;
var G__36596 = (0);
var G__36597 = (0);
seq__36120_36569 = G__36594;
chunk__36122_36570 = G__36595;
count__36123_36571 = G__36596;
i__36124_36572 = G__36597;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36568);
}
}


var G__36598 = cljs.core.next(seq__36089_36557__$1);
var G__36599 = null;
var G__36600 = (0);
var G__36601 = (0);
seq__36089_36509 = G__36598;
chunk__36091_36510 = G__36599;
count__36092_36511 = G__36600;
i__36093_36512 = G__36601;
continue;
} else {
var G__36602 = cljs.core.next(seq__36089_36557__$1);
var G__36603 = null;
var G__36604 = (0);
var G__36605 = (0);
seq__36089_36509 = G__36602;
chunk__36091_36510 = G__36603;
count__36092_36511 = G__36604;
i__36093_36512 = G__36605;
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
var len__4736__auto___36609 = arguments.length;
var i__4737__auto___36610 = (0);
while(true){
if((i__4737__auto___36610 < len__4736__auto___36609)){
args__4742__auto__.push((arguments[i__4737__auto___36610]));

var G__36611 = (i__4737__auto___36610 + (1));
i__4737__auto___36610 = G__36611;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36138){
var G__36139 = cljs.core.first(seq36138);
var seq36138__$1 = cljs.core.next(seq36138);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36139,seq36138__$1);
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
var G__36146 = arguments.length;
switch (G__36146) {
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
var c__33755__auto___36616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_36158){
var state_val_36159 = (state_36158[(1)]);
if((state_val_36159 === (1))){
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36158__$1,(2),once_or_cleanup);
} else {
if((state_val_36159 === (2))){
var inst_36154 = (state_36158[(2)]);
var inst_36156 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36158__$1 = (function (){var statearr_36162 = state_36158;
(statearr_36162[(7)] = inst_36154);

return statearr_36162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36158__$1,inst_36156);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33708__auto__ = null;
var shadow$dom$state_machine__33708__auto____0 = (function (){
var statearr_36163 = [null,null,null,null,null,null,null,null];
(statearr_36163[(0)] = shadow$dom$state_machine__33708__auto__);

(statearr_36163[(1)] = (1));

return statearr_36163;
});
var shadow$dom$state_machine__33708__auto____1 = (function (state_36158){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_36158);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e36165){var ex__33711__auto__ = e36165;
var statearr_36166_36618 = state_36158;
(statearr_36166_36618[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_36158[(4)]))){
var statearr_36167_36619 = state_36158;
(statearr_36167_36619[(1)] = cljs.core.first((state_36158[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36621 = state_36158;
state_36158 = G__36621;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
shadow$dom$state_machine__33708__auto__ = function(state_36158){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33708__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33708__auto____1.call(this,state_36158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33708__auto____0;
shadow$dom$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33708__auto____1;
return shadow$dom$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_36169 = f__33756__auto__();
(statearr_36169[(6)] = c__33755__auto___36616);

return statearr_36169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
