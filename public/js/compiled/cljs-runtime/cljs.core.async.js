goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33827 = arguments.length;
switch (G__33827) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33829 = (function (f,blockable,meta33830){
this.f = f;
this.blockable = blockable;
this.meta33830 = meta33830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33831,meta33830__$1){
var self__ = this;
var _33831__$1 = this;
return (new cljs.core.async.t_cljs$core$async33829(self__.f,self__.blockable,meta33830__$1));
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33831){
var self__ = this;
var _33831__$1 = this;
return self__.meta33830;
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33830","meta33830",710139749,null)], null);
}));

(cljs.core.async.t_cljs$core$async33829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33829");

(cljs.core.async.t_cljs$core$async33829.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33829.
 */
cljs.core.async.__GT_t_cljs$core$async33829 = (function cljs$core$async$__GT_t_cljs$core$async33829(f__$1,blockable__$1,meta33830){
return (new cljs.core.async.t_cljs$core$async33829(f__$1,blockable__$1,meta33830));
});

}

return (new cljs.core.async.t_cljs$core$async33829(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33838 = arguments.length;
switch (G__33838) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33848 = arguments.length;
switch (G__33848) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33852 = arguments.length;
switch (G__33852) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35520 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35520) : fn1.call(null,val_35520));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35520) : fn1.call(null,val_35520));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33868 = arguments.length;
switch (G__33868) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35529 = n;
var x_35530 = (0);
while(true){
if((x_35530 < n__4613__auto___35529)){
(a[x_35530] = x_35530);

var G__35531 = (x_35530 + (1));
x_35530 = G__35531;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33885 = (function (flag,meta33886){
this.flag = flag;
this.meta33886 = meta33886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33887,meta33886__$1){
var self__ = this;
var _33887__$1 = this;
return (new cljs.core.async.t_cljs$core$async33885(self__.flag,meta33886__$1));
}));

(cljs.core.async.t_cljs$core$async33885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33887){
var self__ = this;
var _33887__$1 = this;
return self__.meta33886;
}));

(cljs.core.async.t_cljs$core$async33885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33886","meta33886",645196985,null)], null);
}));

(cljs.core.async.t_cljs$core$async33885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33885");

(cljs.core.async.t_cljs$core$async33885.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33885.
 */
cljs.core.async.__GT_t_cljs$core$async33885 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33885(flag__$1,meta33886){
return (new cljs.core.async.t_cljs$core$async33885(flag__$1,meta33886));
});

}

return (new cljs.core.async.t_cljs$core$async33885(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33890 = (function (flag,cb,meta33891){
this.flag = flag;
this.cb = cb;
this.meta33891 = meta33891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33892,meta33891__$1){
var self__ = this;
var _33892__$1 = this;
return (new cljs.core.async.t_cljs$core$async33890(self__.flag,self__.cb,meta33891__$1));
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33892){
var self__ = this;
var _33892__$1 = this;
return self__.meta33891;
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33891","meta33891",554769935,null)], null);
}));

(cljs.core.async.t_cljs$core$async33890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33890");

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33890.
 */
cljs.core.async.__GT_t_cljs$core$async33890 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33890(flag__$1,cb__$1,meta33891){
return (new cljs.core.async.t_cljs$core$async33890(flag__$1,cb__$1,meta33891));
});

}

return (new cljs.core.async.t_cljs$core$async33890(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33896_SHARP_){
var G__33903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33896_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33903) : fret.call(null,G__33903));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33897_SHARP_){
var G__33904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33897_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33904) : fret.call(null,G__33904));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35532 = (i + (1));
i = G__35532;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35533 = arguments.length;
var i__4737__auto___35534 = (0);
while(true){
if((i__4737__auto___35534 < len__4736__auto___35533)){
args__4742__auto__.push((arguments[i__4737__auto___35534]));

var G__35535 = (i__4737__auto___35534 + (1));
i__4737__auto___35534 = G__35535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33907){
var map__33908 = p__33907;
var map__33908__$1 = (((((!((map__33908 == null))))?(((((map__33908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33908):map__33908);
var opts = map__33908__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33905){
var G__33906 = cljs.core.first(seq33905);
var seq33905__$1 = cljs.core.next(seq33905);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33906,seq33905__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33913 = arguments.length;
switch (G__33913) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33755__auto___35539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_33945){
var state_val_33946 = (state_33945[(1)]);
if((state_val_33946 === (7))){
var inst_33940 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33947_35540 = state_33945__$1;
(statearr_33947_35540[(2)] = inst_33940);

(statearr_33947_35540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (1))){
var state_33945__$1 = state_33945;
var statearr_33948_35541 = state_33945__$1;
(statearr_33948_35541[(2)] = null);

(statearr_33948_35541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (4))){
var inst_33920 = (state_33945[(7)]);
var inst_33920__$1 = (state_33945[(2)]);
var inst_33921 = (inst_33920__$1 == null);
var state_33945__$1 = (function (){var statearr_33949 = state_33945;
(statearr_33949[(7)] = inst_33920__$1);

return statearr_33949;
})();
if(cljs.core.truth_(inst_33921)){
var statearr_33950_35542 = state_33945__$1;
(statearr_33950_35542[(1)] = (5));

} else {
var statearr_33951_35543 = state_33945__$1;
(statearr_33951_35543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (13))){
var state_33945__$1 = state_33945;
var statearr_33952_35544 = state_33945__$1;
(statearr_33952_35544[(2)] = null);

(statearr_33952_35544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (6))){
var inst_33920 = (state_33945[(7)]);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33945__$1,(11),to,inst_33920);
} else {
if((state_val_33946 === (3))){
var inst_33942 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33945__$1,inst_33942);
} else {
if((state_val_33946 === (12))){
var state_33945__$1 = state_33945;
var statearr_33953_35545 = state_33945__$1;
(statearr_33953_35545[(2)] = null);

(statearr_33953_35545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (2))){
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33945__$1,(4),from);
} else {
if((state_val_33946 === (11))){
var inst_33933 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
if(cljs.core.truth_(inst_33933)){
var statearr_33958_35546 = state_33945__$1;
(statearr_33958_35546[(1)] = (12));

} else {
var statearr_33959_35547 = state_33945__$1;
(statearr_33959_35547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (9))){
var state_33945__$1 = state_33945;
var statearr_33960_35548 = state_33945__$1;
(statearr_33960_35548[(2)] = null);

(statearr_33960_35548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (5))){
var state_33945__$1 = state_33945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33961_35549 = state_33945__$1;
(statearr_33961_35549[(1)] = (8));

} else {
var statearr_33962_35550 = state_33945__$1;
(statearr_33962_35550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (14))){
var inst_33938 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33963_35551 = state_33945__$1;
(statearr_33963_35551[(2)] = inst_33938);

(statearr_33963_35551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (10))){
var inst_33930 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33973_35552 = state_33945__$1;
(statearr_33973_35552[(2)] = inst_33930);

(statearr_33973_35552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (8))){
var inst_33927 = cljs.core.async.close_BANG_(to);
var state_33945__$1 = state_33945;
var statearr_33977_35554 = state_33945__$1;
(statearr_33977_35554[(2)] = inst_33927);

(statearr_33977_35554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_33978 = [null,null,null,null,null,null,null,null];
(statearr_33978[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_33978[(1)] = (1));

return statearr_33978;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_33945){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_33945);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e33982){var ex__33711__auto__ = e33982;
var statearr_33983_35555 = state_33945;
(statearr_33983_35555[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_33945[(4)]))){
var statearr_33984_35556 = state_33945;
(statearr_33984_35556[(1)] = cljs.core.first((state_33945[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35557 = state_33945;
state_33945 = G__35557;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_33945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_33945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_33988 = f__33756__auto__();
(statearr_33988[(6)] = c__33755__auto___35539);

return statearr_33988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33989){
var vec__33990 = p__33989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(1),null);
var job = vec__33990;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33755__auto___35560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_33997){
var state_val_33998 = (state_33997[(1)]);
if((state_val_33998 === (1))){
var state_33997__$1 = state_33997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33997__$1,(2),res,v);
} else {
if((state_val_33998 === (2))){
var inst_33994 = (state_33997[(2)]);
var inst_33995 = cljs.core.async.close_BANG_(res);
var state_33997__$1 = (function (){var statearr_34004 = state_33997;
(statearr_34004[(7)] = inst_33994);

return statearr_34004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33997__$1,inst_33995);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0 = (function (){
var statearr_34005 = [null,null,null,null,null,null,null,null];
(statearr_34005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__);

(statearr_34005[(1)] = (1));

return statearr_34005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1 = (function (state_33997){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_33997);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34006){var ex__33711__auto__ = e34006;
var statearr_34007_35563 = state_33997;
(statearr_34007_35563[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_33997[(4)]))){
var statearr_34008_35564 = state_33997;
(statearr_34008_35564[(1)] = cljs.core.first((state_33997[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35565 = state_33997;
state_33997 = G__35565;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = function(state_33997){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1.call(this,state_33997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34009 = f__33756__auto__();
(statearr_34009[(6)] = c__33755__auto___35560);

return statearr_34009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34011){
var vec__34023 = p__34011;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34023,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34023,(1),null);
var job = vec__34023;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35568 = n;
var __35569 = (0);
while(true){
if((__35569 < n__4613__auto___35568)){
var G__34033_35570 = type;
var G__34033_35571__$1 = (((G__34033_35570 instanceof cljs.core.Keyword))?G__34033_35570.fqn:null);
switch (G__34033_35571__$1) {
case "compute":
var c__33755__auto___35573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35569,c__33755__auto___35573,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async){
return (function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = ((function (__35569,c__33755__auto___35573,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async){
return (function (state_34048){
var state_val_34049 = (state_34048[(1)]);
if((state_val_34049 === (1))){
var state_34048__$1 = state_34048;
var statearr_34057_35574 = state_34048__$1;
(statearr_34057_35574[(2)] = null);

(statearr_34057_35574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (2))){
var state_34048__$1 = state_34048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34048__$1,(4),jobs);
} else {
if((state_val_34049 === (3))){
var inst_34046 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34048__$1,inst_34046);
} else {
if((state_val_34049 === (4))){
var inst_34038 = (state_34048[(2)]);
var inst_34039 = process(inst_34038);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_34039)){
var statearr_34065_35575 = state_34048__$1;
(statearr_34065_35575[(1)] = (5));

} else {
var statearr_34066_35576 = state_34048__$1;
(statearr_34066_35576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (5))){
var state_34048__$1 = state_34048;
var statearr_34067_35577 = state_34048__$1;
(statearr_34067_35577[(2)] = null);

(statearr_34067_35577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (6))){
var state_34048__$1 = state_34048;
var statearr_34068_35578 = state_34048__$1;
(statearr_34068_35578[(2)] = null);

(statearr_34068_35578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (7))){
var inst_34044 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34069_35580 = state_34048__$1;
(statearr_34069_35580[(2)] = inst_34044);

(statearr_34069_35580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35569,c__33755__auto___35573,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async))
;
return ((function (__35569,switch__33707__auto__,c__33755__auto___35573,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1 = (function (state_34048){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34048);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34071){var ex__33711__auto__ = e34071;
var statearr_34072_35582 = state_34048;
(statearr_34072_35582[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34048[(4)]))){
var statearr_34074_35583 = state_34048;
(statearr_34074_35583[(1)] = cljs.core.first((state_34048[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35584 = state_34048;
state_34048 = G__35584;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = function(state_34048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1.call(this,state_34048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__;
})()
;})(__35569,switch__33707__auto__,c__33755__auto___35573,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async))
})();
var state__33757__auto__ = (function (){var statearr_34075 = f__33756__auto__();
(statearr_34075[(6)] = c__33755__auto___35573);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
});})(__35569,c__33755__auto___35573,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async))
);


break;
case "async":
var c__33755__auto___35585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35569,c__33755__auto___35585,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async){
return (function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = ((function (__35569,c__33755__auto___35585,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async){
return (function (state_34088){
var state_val_34089 = (state_34088[(1)]);
if((state_val_34089 === (1))){
var state_34088__$1 = state_34088;
var statearr_34098_35586 = state_34088__$1;
(statearr_34098_35586[(2)] = null);

(statearr_34098_35586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (2))){
var state_34088__$1 = state_34088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34088__$1,(4),jobs);
} else {
if((state_val_34089 === (3))){
var inst_34086 = (state_34088[(2)]);
var state_34088__$1 = state_34088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34088__$1,inst_34086);
} else {
if((state_val_34089 === (4))){
var inst_34078 = (state_34088[(2)]);
var inst_34079 = async(inst_34078);
var state_34088__$1 = state_34088;
if(cljs.core.truth_(inst_34079)){
var statearr_34110_35588 = state_34088__$1;
(statearr_34110_35588[(1)] = (5));

} else {
var statearr_34111_35590 = state_34088__$1;
(statearr_34111_35590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (5))){
var state_34088__$1 = state_34088;
var statearr_34112_35591 = state_34088__$1;
(statearr_34112_35591[(2)] = null);

(statearr_34112_35591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (6))){
var state_34088__$1 = state_34088;
var statearr_34113_35592 = state_34088__$1;
(statearr_34113_35592[(2)] = null);

(statearr_34113_35592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (7))){
var inst_34084 = (state_34088[(2)]);
var state_34088__$1 = state_34088;
var statearr_34114_35593 = state_34088__$1;
(statearr_34114_35593[(2)] = inst_34084);

(statearr_34114_35593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35569,c__33755__auto___35585,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async))
;
return ((function (__35569,switch__33707__auto__,c__33755__auto___35585,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1 = (function (state_34088){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34088);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34116){var ex__33711__auto__ = e34116;
var statearr_34117_35594 = state_34088;
(statearr_34117_35594[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34088[(4)]))){
var statearr_34119_35595 = state_34088;
(statearr_34119_35595[(1)] = cljs.core.first((state_34088[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35596 = state_34088;
state_34088 = G__35596;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = function(state_34088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1.call(this,state_34088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__;
})()
;})(__35569,switch__33707__auto__,c__33755__auto___35585,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async))
})();
var state__33757__auto__ = (function (){var statearr_34128 = f__33756__auto__();
(statearr_34128[(6)] = c__33755__auto___35585);

return statearr_34128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
});})(__35569,c__33755__auto___35585,G__34033_35570,G__34033_35571__$1,n__4613__auto___35568,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34033_35571__$1)].join('')));

}

var G__35597 = (__35569 + (1));
__35569 = G__35597;
continue;
} else {
}
break;
}

var c__33755__auto___35598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34181){
var state_val_34182 = (state_34181[(1)]);
if((state_val_34182 === (7))){
var inst_34158 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34201_35599 = state_34181__$1;
(statearr_34201_35599[(2)] = inst_34158);

(statearr_34201_35599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (1))){
var state_34181__$1 = state_34181;
var statearr_34202_35600 = state_34181__$1;
(statearr_34202_35600[(2)] = null);

(statearr_34202_35600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (4))){
var inst_34131 = (state_34181[(7)]);
var inst_34131__$1 = (state_34181[(2)]);
var inst_34132 = (inst_34131__$1 == null);
var state_34181__$1 = (function (){var statearr_34205 = state_34181;
(statearr_34205[(7)] = inst_34131__$1);

return statearr_34205;
})();
if(cljs.core.truth_(inst_34132)){
var statearr_34206_35601 = state_34181__$1;
(statearr_34206_35601[(1)] = (5));

} else {
var statearr_34207_35602 = state_34181__$1;
(statearr_34207_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (6))){
var inst_34136 = (state_34181[(8)]);
var inst_34131 = (state_34181[(7)]);
var inst_34136__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34143 = [inst_34131,inst_34136__$1];
var inst_34146 = (new cljs.core.PersistentVector(null,2,(5),inst_34137,inst_34143,null));
var state_34181__$1 = (function (){var statearr_34209 = state_34181;
(statearr_34209[(8)] = inst_34136__$1);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34181__$1,(8),jobs,inst_34146);
} else {
if((state_val_34182 === (3))){
var inst_34176 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34181__$1,inst_34176);
} else {
if((state_val_34182 === (2))){
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34181__$1,(4),from);
} else {
if((state_val_34182 === (9))){
var inst_34155 = (state_34181[(2)]);
var state_34181__$1 = (function (){var statearr_34210 = state_34181;
(statearr_34210[(9)] = inst_34155);

return statearr_34210;
})();
var statearr_34211_35603 = state_34181__$1;
(statearr_34211_35603[(2)] = null);

(statearr_34211_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (5))){
var inst_34134 = cljs.core.async.close_BANG_(jobs);
var state_34181__$1 = state_34181;
var statearr_34212_35604 = state_34181__$1;
(statearr_34212_35604[(2)] = inst_34134);

(statearr_34212_35604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (8))){
var inst_34136 = (state_34181[(8)]);
var inst_34149 = (state_34181[(2)]);
var state_34181__$1 = (function (){var statearr_34213 = state_34181;
(statearr_34213[(10)] = inst_34149);

return statearr_34213;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34181__$1,(9),results,inst_34136);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0 = (function (){
var statearr_34214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__);

(statearr_34214[(1)] = (1));

return statearr_34214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1 = (function (state_34181){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34181);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34215){var ex__33711__auto__ = e34215;
var statearr_34216_35607 = state_34181;
(statearr_34216_35607[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34181[(4)]))){
var statearr_34217_35608 = state_34181;
(statearr_34217_35608[(1)] = cljs.core.first((state_34181[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35609 = state_34181;
state_34181 = G__35609;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = function(state_34181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1.call(this,state_34181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34221 = f__33756__auto__();
(statearr_34221[(6)] = c__33755__auto___35598);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


var c__33755__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34261_35610 = state_34259__$1;
(statearr_34261_35610[(2)] = inst_34255);

(statearr_34261_35610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (20))){
var state_34259__$1 = state_34259;
var statearr_34262_35611 = state_34259__$1;
(statearr_34262_35611[(2)] = null);

(statearr_34262_35611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
var statearr_34263_35612 = state_34259__$1;
(statearr_34263_35612[(2)] = null);

(statearr_34263_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var inst_34224 = (state_34259[(7)]);
var inst_34224__$1 = (state_34259[(2)]);
var inst_34225 = (inst_34224__$1 == null);
var state_34259__$1 = (function (){var statearr_34264 = state_34259;
(statearr_34264[(7)] = inst_34224__$1);

return statearr_34264;
})();
if(cljs.core.truth_(inst_34225)){
var statearr_34265_35614 = state_34259__$1;
(statearr_34265_35614[(1)] = (5));

} else {
var statearr_34266_35615 = state_34259__$1;
(statearr_34266_35615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (15))){
var inst_34237 = (state_34259[(8)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34259__$1,(18),to,inst_34237);
} else {
if((state_val_34260 === (21))){
var inst_34250 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34267_35616 = state_34259__$1;
(statearr_34267_35616[(2)] = inst_34250);

(statearr_34267_35616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (13))){
var inst_34252 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34268 = state_34259;
(statearr_34268[(9)] = inst_34252);

return statearr_34268;
})();
var statearr_34269_35617 = state_34259__$1;
(statearr_34269_35617[(2)] = null);

(statearr_34269_35617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34224 = (state_34259[(7)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(11),inst_34224);
} else {
if((state_val_34260 === (17))){
var inst_34245 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34245)){
var statearr_34270_35618 = state_34259__$1;
(statearr_34270_35618[(1)] = (19));

} else {
var statearr_34271_35619 = state_34259__$1;
(statearr_34271_35619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34259__$1,inst_34257);
} else {
if((state_val_34260 === (12))){
var inst_34234 = (state_34259[(10)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(14),inst_34234);
} else {
if((state_val_34260 === (2))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(4),results);
} else {
if((state_val_34260 === (19))){
var state_34259__$1 = state_34259;
var statearr_34272_35624 = state_34259__$1;
(statearr_34272_35624[(2)] = null);

(statearr_34272_35624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (11))){
var inst_34234 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34273 = state_34259;
(statearr_34273[(10)] = inst_34234);

return statearr_34273;
})();
var statearr_34274_35625 = state_34259__$1;
(statearr_34274_35625[(2)] = null);

(statearr_34274_35625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (9))){
var state_34259__$1 = state_34259;
var statearr_34275_35626 = state_34259__$1;
(statearr_34275_35626[(2)] = null);

(statearr_34275_35626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var state_34259__$1 = state_34259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34276_35627 = state_34259__$1;
(statearr_34276_35627[(1)] = (8));

} else {
var statearr_34277_35628 = state_34259__$1;
(statearr_34277_35628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (14))){
var inst_34237 = (state_34259[(8)]);
var inst_34237__$1 = (state_34259[(2)]);
var inst_34238 = (inst_34237__$1 == null);
var inst_34239 = cljs.core.not(inst_34238);
var state_34259__$1 = (function (){var statearr_34278 = state_34259;
(statearr_34278[(8)] = inst_34237__$1);

return statearr_34278;
})();
if(inst_34239){
var statearr_34279_35629 = state_34259__$1;
(statearr_34279_35629[(1)] = (15));

} else {
var statearr_34280_35630 = state_34259__$1;
(statearr_34280_35630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (16))){
var state_34259__$1 = state_34259;
var statearr_34281_35631 = state_34259__$1;
(statearr_34281_35631[(2)] = false);

(statearr_34281_35631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var inst_34231 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34282_35632 = state_34259__$1;
(statearr_34282_35632[(2)] = inst_34231);

(statearr_34282_35632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (18))){
var inst_34242 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34283_35633 = state_34259__$1;
(statearr_34283_35633[(2)] = inst_34242);

(statearr_34283_35633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (8))){
var inst_34228 = cljs.core.async.close_BANG_(to);
var state_34259__$1 = state_34259;
var statearr_34284_35634 = state_34259__$1;
(statearr_34284_35634[(2)] = inst_34228);

(statearr_34284_35634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0 = (function (){
var statearr_34285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__);

(statearr_34285[(1)] = (1));

return statearr_34285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1 = (function (state_34259){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34259);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34286){var ex__33711__auto__ = e34286;
var statearr_34287_35635 = state_34259;
(statearr_34287_35635[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34259[(4)]))){
var statearr_34288_35636 = state_34259;
(statearr_34288_35636[(1)] = cljs.core.first((state_34259[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_34259;
state_34259 = G__35637;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33708__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34289 = f__33756__auto__();
(statearr_34289[(6)] = c__33755__auto__);

return statearr_34289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));

return c__33755__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34291 = arguments.length;
switch (G__34291) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34293 = arguments.length;
switch (G__34293) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34295 = arguments.length;
switch (G__34295) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33755__auto___35650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34321){
var state_val_34322 = (state_34321[(1)]);
if((state_val_34322 === (7))){
var inst_34317 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34323_35654 = state_34321__$1;
(statearr_34323_35654[(2)] = inst_34317);

(statearr_34323_35654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (1))){
var state_34321__$1 = state_34321;
var statearr_34324_35655 = state_34321__$1;
(statearr_34324_35655[(2)] = null);

(statearr_34324_35655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (4))){
var inst_34298 = (state_34321[(7)]);
var inst_34298__$1 = (state_34321[(2)]);
var inst_34299 = (inst_34298__$1 == null);
var state_34321__$1 = (function (){var statearr_34325 = state_34321;
(statearr_34325[(7)] = inst_34298__$1);

return statearr_34325;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34326_35659 = state_34321__$1;
(statearr_34326_35659[(1)] = (5));

} else {
var statearr_34327_35660 = state_34321__$1;
(statearr_34327_35660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (13))){
var state_34321__$1 = state_34321;
var statearr_34328_35661 = state_34321__$1;
(statearr_34328_35661[(2)] = null);

(statearr_34328_35661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (6))){
var inst_34298 = (state_34321[(7)]);
var inst_34304 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34298) : p.call(null,inst_34298));
var state_34321__$1 = state_34321;
if(cljs.core.truth_(inst_34304)){
var statearr_34329_35665 = state_34321__$1;
(statearr_34329_35665[(1)] = (9));

} else {
var statearr_34330_35666 = state_34321__$1;
(statearr_34330_35666[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (3))){
var inst_34319 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34321__$1,inst_34319);
} else {
if((state_val_34322 === (12))){
var state_34321__$1 = state_34321;
var statearr_34331_35667 = state_34321__$1;
(statearr_34331_35667[(2)] = null);

(statearr_34331_35667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (2))){
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34321__$1,(4),ch);
} else {
if((state_val_34322 === (11))){
var inst_34298 = (state_34321[(7)]);
var inst_34308 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34321__$1,(8),inst_34308,inst_34298);
} else {
if((state_val_34322 === (9))){
var state_34321__$1 = state_34321;
var statearr_34332_35675 = state_34321__$1;
(statearr_34332_35675[(2)] = tc);

(statearr_34332_35675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (5))){
var inst_34301 = cljs.core.async.close_BANG_(tc);
var inst_34302 = cljs.core.async.close_BANG_(fc);
var state_34321__$1 = (function (){var statearr_34333 = state_34321;
(statearr_34333[(8)] = inst_34301);

return statearr_34333;
})();
var statearr_34334_35676 = state_34321__$1;
(statearr_34334_35676[(2)] = inst_34302);

(statearr_34334_35676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (14))){
var inst_34315 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34335_35680 = state_34321__$1;
(statearr_34335_35680[(2)] = inst_34315);

(statearr_34335_35680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (10))){
var state_34321__$1 = state_34321;
var statearr_34336_35681 = state_34321__$1;
(statearr_34336_35681[(2)] = fc);

(statearr_34336_35681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (8))){
var inst_34310 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
if(cljs.core.truth_(inst_34310)){
var statearr_34337_35682 = state_34321__$1;
(statearr_34337_35682[(1)] = (12));

} else {
var statearr_34338_35683 = state_34321__$1;
(statearr_34338_35683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_34339 = [null,null,null,null,null,null,null,null,null];
(statearr_34339[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_34339[(1)] = (1));

return statearr_34339;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_34321){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34321);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34340){var ex__33711__auto__ = e34340;
var statearr_34341_35687 = state_34321;
(statearr_34341_35687[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34321[(4)]))){
var statearr_34342_35688 = state_34321;
(statearr_34342_35688[(1)] = cljs.core.first((state_34321[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35692 = state_34321;
state_34321 = G__35692;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_34321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_34321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34343 = f__33756__auto__();
(statearr_34343[(6)] = c__33755__auto___35650);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33755__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34365){
var state_val_34366 = (state_34365[(1)]);
if((state_val_34366 === (7))){
var inst_34361 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34367_35693 = state_34365__$1;
(statearr_34367_35693[(2)] = inst_34361);

(statearr_34367_35693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (1))){
var inst_34344 = init;
var inst_34345 = inst_34344;
var state_34365__$1 = (function (){var statearr_34368 = state_34365;
(statearr_34368[(7)] = inst_34345);

return statearr_34368;
})();
var statearr_34369_35695 = state_34365__$1;
(statearr_34369_35695[(2)] = null);

(statearr_34369_35695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (4))){
var inst_34348 = (state_34365[(8)]);
var inst_34348__$1 = (state_34365[(2)]);
var inst_34349 = (inst_34348__$1 == null);
var state_34365__$1 = (function (){var statearr_34370 = state_34365;
(statearr_34370[(8)] = inst_34348__$1);

return statearr_34370;
})();
if(cljs.core.truth_(inst_34349)){
var statearr_34371_35696 = state_34365__$1;
(statearr_34371_35696[(1)] = (5));

} else {
var statearr_34372_35697 = state_34365__$1;
(statearr_34372_35697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (6))){
var inst_34345 = (state_34365[(7)]);
var inst_34352 = (state_34365[(9)]);
var inst_34348 = (state_34365[(8)]);
var inst_34352__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34345,inst_34348) : f.call(null,inst_34345,inst_34348));
var inst_34353 = cljs.core.reduced_QMARK_(inst_34352__$1);
var state_34365__$1 = (function (){var statearr_34373 = state_34365;
(statearr_34373[(9)] = inst_34352__$1);

return statearr_34373;
})();
if(inst_34353){
var statearr_34374_35698 = state_34365__$1;
(statearr_34374_35698[(1)] = (8));

} else {
var statearr_34375_35699 = state_34365__$1;
(statearr_34375_35699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (3))){
var inst_34363 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34365__$1,inst_34363);
} else {
if((state_val_34366 === (2))){
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34365__$1,(4),ch);
} else {
if((state_val_34366 === (9))){
var inst_34352 = (state_34365[(9)]);
var inst_34345 = inst_34352;
var state_34365__$1 = (function (){var statearr_34376 = state_34365;
(statearr_34376[(7)] = inst_34345);

return statearr_34376;
})();
var statearr_34377_35700 = state_34365__$1;
(statearr_34377_35700[(2)] = null);

(statearr_34377_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (5))){
var inst_34345 = (state_34365[(7)]);
var state_34365__$1 = state_34365;
var statearr_34378_35701 = state_34365__$1;
(statearr_34378_35701[(2)] = inst_34345);

(statearr_34378_35701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (10))){
var inst_34359 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34379_35702 = state_34365__$1;
(statearr_34379_35702[(2)] = inst_34359);

(statearr_34379_35702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (8))){
var inst_34352 = (state_34365[(9)]);
var inst_34355 = cljs.core.deref(inst_34352);
var state_34365__$1 = state_34365;
var statearr_34380_35703 = state_34365__$1;
(statearr_34380_35703[(2)] = inst_34355);

(statearr_34380_35703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33708__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33708__auto____0 = (function (){
var statearr_34381 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34381[(0)] = cljs$core$async$reduce_$_state_machine__33708__auto__);

(statearr_34381[(1)] = (1));

return statearr_34381;
});
var cljs$core$async$reduce_$_state_machine__33708__auto____1 = (function (state_34365){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34365);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34382){var ex__33711__auto__ = e34382;
var statearr_34383_35704 = state_34365;
(statearr_34383_35704[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34365[(4)]))){
var statearr_34384_35705 = state_34365;
(statearr_34384_35705[(1)] = cljs.core.first((state_34365[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35706 = state_34365;
state_34365 = G__35706;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33708__auto__ = function(state_34365){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33708__auto____1.call(this,state_34365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33708__auto____0;
cljs$core$async$reduce_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33708__auto____1;
return cljs$core$async$reduce_$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34385 = f__33756__auto__();
(statearr_34385[(6)] = c__33755__auto__);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));

return c__33755__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33755__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34391){
var state_val_34392 = (state_34391[(1)]);
if((state_val_34392 === (1))){
var inst_34386 = cljs.core.async.reduce(f__$1,init,ch);
var state_34391__$1 = state_34391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34391__$1,(2),inst_34386);
} else {
if((state_val_34392 === (2))){
var inst_34388 = (state_34391[(2)]);
var inst_34389 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34388) : f__$1.call(null,inst_34388));
var state_34391__$1 = state_34391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34391__$1,inst_34389);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33708__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33708__auto____0 = (function (){
var statearr_34393 = [null,null,null,null,null,null,null];
(statearr_34393[(0)] = cljs$core$async$transduce_$_state_machine__33708__auto__);

(statearr_34393[(1)] = (1));

return statearr_34393;
});
var cljs$core$async$transduce_$_state_machine__33708__auto____1 = (function (state_34391){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34391);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34394){var ex__33711__auto__ = e34394;
var statearr_34395_35707 = state_34391;
(statearr_34395_35707[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34391[(4)]))){
var statearr_34396_35708 = state_34391;
(statearr_34396_35708[(1)] = cljs.core.first((state_34391[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35709 = state_34391;
state_34391 = G__35709;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33708__auto__ = function(state_34391){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33708__auto____1.call(this,state_34391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33708__auto____0;
cljs$core$async$transduce_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33708__auto____1;
return cljs$core$async$transduce_$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34397 = f__33756__auto__();
(statearr_34397[(6)] = c__33755__auto__);

return statearr_34397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));

return c__33755__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34399 = arguments.length;
switch (G__34399) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33755__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34424){
var state_val_34425 = (state_34424[(1)]);
if((state_val_34425 === (7))){
var inst_34406 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
var statearr_34426_35717 = state_34424__$1;
(statearr_34426_35717[(2)] = inst_34406);

(statearr_34426_35717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (1))){
var inst_34400 = cljs.core.seq(coll);
var inst_34401 = inst_34400;
var state_34424__$1 = (function (){var statearr_34427 = state_34424;
(statearr_34427[(7)] = inst_34401);

return statearr_34427;
})();
var statearr_34428_35719 = state_34424__$1;
(statearr_34428_35719[(2)] = null);

(statearr_34428_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (4))){
var inst_34401 = (state_34424[(7)]);
var inst_34404 = cljs.core.first(inst_34401);
var state_34424__$1 = state_34424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34424__$1,(7),ch,inst_34404);
} else {
if((state_val_34425 === (13))){
var inst_34418 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
var statearr_34429_35720 = state_34424__$1;
(statearr_34429_35720[(2)] = inst_34418);

(statearr_34429_35720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (6))){
var inst_34409 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
if(cljs.core.truth_(inst_34409)){
var statearr_34430_35723 = state_34424__$1;
(statearr_34430_35723[(1)] = (8));

} else {
var statearr_34431_35724 = state_34424__$1;
(statearr_34431_35724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (3))){
var inst_34422 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34424__$1,inst_34422);
} else {
if((state_val_34425 === (12))){
var state_34424__$1 = state_34424;
var statearr_34432_35725 = state_34424__$1;
(statearr_34432_35725[(2)] = null);

(statearr_34432_35725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (2))){
var inst_34401 = (state_34424[(7)]);
var state_34424__$1 = state_34424;
if(cljs.core.truth_(inst_34401)){
var statearr_34433_35726 = state_34424__$1;
(statearr_34433_35726[(1)] = (4));

} else {
var statearr_34434_35727 = state_34424__$1;
(statearr_34434_35727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (11))){
var inst_34415 = cljs.core.async.close_BANG_(ch);
var state_34424__$1 = state_34424;
var statearr_34435_35728 = state_34424__$1;
(statearr_34435_35728[(2)] = inst_34415);

(statearr_34435_35728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (9))){
var state_34424__$1 = state_34424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34436_35729 = state_34424__$1;
(statearr_34436_35729[(1)] = (11));

} else {
var statearr_34437_35730 = state_34424__$1;
(statearr_34437_35730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (5))){
var inst_34401 = (state_34424[(7)]);
var state_34424__$1 = state_34424;
var statearr_34438_35731 = state_34424__$1;
(statearr_34438_35731[(2)] = inst_34401);

(statearr_34438_35731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (10))){
var inst_34420 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
var statearr_34439_35732 = state_34424__$1;
(statearr_34439_35732[(2)] = inst_34420);

(statearr_34439_35732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (8))){
var inst_34401 = (state_34424[(7)]);
var inst_34411 = cljs.core.next(inst_34401);
var inst_34401__$1 = inst_34411;
var state_34424__$1 = (function (){var statearr_34440 = state_34424;
(statearr_34440[(7)] = inst_34401__$1);

return statearr_34440;
})();
var statearr_34441_35737 = state_34424__$1;
(statearr_34441_35737[(2)] = null);

(statearr_34441_35737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_34442 = [null,null,null,null,null,null,null,null];
(statearr_34442[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_34442[(1)] = (1));

return statearr_34442;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_34424){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34424);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34443){var ex__33711__auto__ = e34443;
var statearr_34444_35740 = state_34424;
(statearr_34444_35740[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34424[(4)]))){
var statearr_34445_35741 = state_34424;
(statearr_34445_35741[(1)] = cljs.core.first((state_34424[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35744 = state_34424;
state_34424 = G__35744;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_34424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_34424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34446 = f__33756__auto__();
(statearr_34446[(6)] = c__33755__auto__);

return statearr_34446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));

return c__33755__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34448 = arguments.length;
switch (G__34448) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35759 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35759(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35760 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35760(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35761 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35761(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35768 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35768(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34449 = (function (ch,cs,meta34450){
this.ch = ch;
this.cs = cs;
this.meta34450 = meta34450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34451,meta34450__$1){
var self__ = this;
var _34451__$1 = this;
return (new cljs.core.async.t_cljs$core$async34449(self__.ch,self__.cs,meta34450__$1));
}));

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34451){
var self__ = this;
var _34451__$1 = this;
return self__.meta34450;
}));

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34450","meta34450",222943141,null)], null);
}));

(cljs.core.async.t_cljs$core$async34449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34449");

(cljs.core.async.t_cljs$core$async34449.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34449.
 */
cljs.core.async.__GT_t_cljs$core$async34449 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34449(ch__$1,cs__$1,meta34450){
return (new cljs.core.async.t_cljs$core$async34449(ch__$1,cs__$1,meta34450));
});

}

return (new cljs.core.async.t_cljs$core$async34449(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33755__auto___35775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34584){
var state_val_34585 = (state_34584[(1)]);
if((state_val_34585 === (7))){
var inst_34580 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34586_35776 = state_34584__$1;
(statearr_34586_35776[(2)] = inst_34580);

(statearr_34586_35776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (20))){
var inst_34485 = (state_34584[(7)]);
var inst_34497 = cljs.core.first(inst_34485);
var inst_34498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34497,(0),null);
var inst_34499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34497,(1),null);
var state_34584__$1 = (function (){var statearr_34587 = state_34584;
(statearr_34587[(8)] = inst_34498);

return statearr_34587;
})();
if(cljs.core.truth_(inst_34499)){
var statearr_34588_35777 = state_34584__$1;
(statearr_34588_35777[(1)] = (22));

} else {
var statearr_34589_35778 = state_34584__$1;
(statearr_34589_35778[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (27))){
var inst_34454 = (state_34584[(9)]);
var inst_34529 = (state_34584[(10)]);
var inst_34534 = (state_34584[(11)]);
var inst_34527 = (state_34584[(12)]);
var inst_34534__$1 = cljs.core._nth(inst_34527,inst_34529);
var inst_34535 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34534__$1,inst_34454,done);
var state_34584__$1 = (function (){var statearr_34590 = state_34584;
(statearr_34590[(11)] = inst_34534__$1);

return statearr_34590;
})();
if(cljs.core.truth_(inst_34535)){
var statearr_34591_35779 = state_34584__$1;
(statearr_34591_35779[(1)] = (30));

} else {
var statearr_34592_35780 = state_34584__$1;
(statearr_34592_35780[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (1))){
var state_34584__$1 = state_34584;
var statearr_34593_35781 = state_34584__$1;
(statearr_34593_35781[(2)] = null);

(statearr_34593_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (24))){
var inst_34485 = (state_34584[(7)]);
var inst_34504 = (state_34584[(2)]);
var inst_34505 = cljs.core.next(inst_34485);
var inst_34463 = inst_34505;
var inst_34464 = null;
var inst_34465 = (0);
var inst_34466 = (0);
var state_34584__$1 = (function (){var statearr_34594 = state_34584;
(statearr_34594[(13)] = inst_34464);

(statearr_34594[(14)] = inst_34466);

(statearr_34594[(15)] = inst_34463);

(statearr_34594[(16)] = inst_34504);

(statearr_34594[(17)] = inst_34465);

return statearr_34594;
})();
var statearr_34595_35782 = state_34584__$1;
(statearr_34595_35782[(2)] = null);

(statearr_34595_35782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (39))){
var state_34584__$1 = state_34584;
var statearr_34599_35783 = state_34584__$1;
(statearr_34599_35783[(2)] = null);

(statearr_34599_35783[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (4))){
var inst_34454 = (state_34584[(9)]);
var inst_34454__$1 = (state_34584[(2)]);
var inst_34455 = (inst_34454__$1 == null);
var state_34584__$1 = (function (){var statearr_34600 = state_34584;
(statearr_34600[(9)] = inst_34454__$1);

return statearr_34600;
})();
if(cljs.core.truth_(inst_34455)){
var statearr_34601_35790 = state_34584__$1;
(statearr_34601_35790[(1)] = (5));

} else {
var statearr_34602_35791 = state_34584__$1;
(statearr_34602_35791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (15))){
var inst_34464 = (state_34584[(13)]);
var inst_34466 = (state_34584[(14)]);
var inst_34463 = (state_34584[(15)]);
var inst_34465 = (state_34584[(17)]);
var inst_34481 = (state_34584[(2)]);
var inst_34482 = (inst_34466 + (1));
var tmp34596 = inst_34464;
var tmp34597 = inst_34463;
var tmp34598 = inst_34465;
var inst_34463__$1 = tmp34597;
var inst_34464__$1 = tmp34596;
var inst_34465__$1 = tmp34598;
var inst_34466__$1 = inst_34482;
var state_34584__$1 = (function (){var statearr_34603 = state_34584;
(statearr_34603[(13)] = inst_34464__$1);

(statearr_34603[(14)] = inst_34466__$1);

(statearr_34603[(15)] = inst_34463__$1);

(statearr_34603[(18)] = inst_34481);

(statearr_34603[(17)] = inst_34465__$1);

return statearr_34603;
})();
var statearr_34604_35792 = state_34584__$1;
(statearr_34604_35792[(2)] = null);

(statearr_34604_35792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (21))){
var inst_34508 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34608_35793 = state_34584__$1;
(statearr_34608_35793[(2)] = inst_34508);

(statearr_34608_35793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (31))){
var inst_34534 = (state_34584[(11)]);
var inst_34538 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34534);
var state_34584__$1 = state_34584;
var statearr_34609_35794 = state_34584__$1;
(statearr_34609_35794[(2)] = inst_34538);

(statearr_34609_35794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (32))){
var inst_34529 = (state_34584[(10)]);
var inst_34527 = (state_34584[(12)]);
var inst_34526 = (state_34584[(19)]);
var inst_34528 = (state_34584[(20)]);
var inst_34540 = (state_34584[(2)]);
var inst_34541 = (inst_34529 + (1));
var tmp34605 = inst_34527;
var tmp34606 = inst_34526;
var tmp34607 = inst_34528;
var inst_34526__$1 = tmp34606;
var inst_34527__$1 = tmp34605;
var inst_34528__$1 = tmp34607;
var inst_34529__$1 = inst_34541;
var state_34584__$1 = (function (){var statearr_34610 = state_34584;
(statearr_34610[(10)] = inst_34529__$1);

(statearr_34610[(21)] = inst_34540);

(statearr_34610[(12)] = inst_34527__$1);

(statearr_34610[(19)] = inst_34526__$1);

(statearr_34610[(20)] = inst_34528__$1);

return statearr_34610;
})();
var statearr_34611_35795 = state_34584__$1;
(statearr_34611_35795[(2)] = null);

(statearr_34611_35795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (40))){
var inst_34553 = (state_34584[(22)]);
var inst_34557 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34553);
var state_34584__$1 = state_34584;
var statearr_34612_35796 = state_34584__$1;
(statearr_34612_35796[(2)] = inst_34557);

(statearr_34612_35796[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (33))){
var inst_34544 = (state_34584[(23)]);
var inst_34546 = cljs.core.chunked_seq_QMARK_(inst_34544);
var state_34584__$1 = state_34584;
if(inst_34546){
var statearr_34613_35797 = state_34584__$1;
(statearr_34613_35797[(1)] = (36));

} else {
var statearr_34614_35798 = state_34584__$1;
(statearr_34614_35798[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (13))){
var inst_34475 = (state_34584[(24)]);
var inst_34478 = cljs.core.async.close_BANG_(inst_34475);
var state_34584__$1 = state_34584;
var statearr_34615_35799 = state_34584__$1;
(statearr_34615_35799[(2)] = inst_34478);

(statearr_34615_35799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (22))){
var inst_34498 = (state_34584[(8)]);
var inst_34501 = cljs.core.async.close_BANG_(inst_34498);
var state_34584__$1 = state_34584;
var statearr_34616_35800 = state_34584__$1;
(statearr_34616_35800[(2)] = inst_34501);

(statearr_34616_35800[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (36))){
var inst_34544 = (state_34584[(23)]);
var inst_34548 = cljs.core.chunk_first(inst_34544);
var inst_34549 = cljs.core.chunk_rest(inst_34544);
var inst_34550 = cljs.core.count(inst_34548);
var inst_34526 = inst_34549;
var inst_34527 = inst_34548;
var inst_34528 = inst_34550;
var inst_34529 = (0);
var state_34584__$1 = (function (){var statearr_34617 = state_34584;
(statearr_34617[(10)] = inst_34529);

(statearr_34617[(12)] = inst_34527);

(statearr_34617[(19)] = inst_34526);

(statearr_34617[(20)] = inst_34528);

return statearr_34617;
})();
var statearr_34618_35801 = state_34584__$1;
(statearr_34618_35801[(2)] = null);

(statearr_34618_35801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (41))){
var inst_34544 = (state_34584[(23)]);
var inst_34559 = (state_34584[(2)]);
var inst_34560 = cljs.core.next(inst_34544);
var inst_34526 = inst_34560;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34584__$1 = (function (){var statearr_34619 = state_34584;
(statearr_34619[(10)] = inst_34529);

(statearr_34619[(12)] = inst_34527);

(statearr_34619[(25)] = inst_34559);

(statearr_34619[(19)] = inst_34526);

(statearr_34619[(20)] = inst_34528);

return statearr_34619;
})();
var statearr_34620_35802 = state_34584__$1;
(statearr_34620_35802[(2)] = null);

(statearr_34620_35802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (43))){
var state_34584__$1 = state_34584;
var statearr_34621_35803 = state_34584__$1;
(statearr_34621_35803[(2)] = null);

(statearr_34621_35803[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (29))){
var inst_34568 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34622_35804 = state_34584__$1;
(statearr_34622_35804[(2)] = inst_34568);

(statearr_34622_35804[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (44))){
var inst_34577 = (state_34584[(2)]);
var state_34584__$1 = (function (){var statearr_34623 = state_34584;
(statearr_34623[(26)] = inst_34577);

return statearr_34623;
})();
var statearr_34624_35805 = state_34584__$1;
(statearr_34624_35805[(2)] = null);

(statearr_34624_35805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (6))){
var inst_34518 = (state_34584[(27)]);
var inst_34517 = cljs.core.deref(cs);
var inst_34518__$1 = cljs.core.keys(inst_34517);
var inst_34519 = cljs.core.count(inst_34518__$1);
var inst_34520 = cljs.core.reset_BANG_(dctr,inst_34519);
var inst_34525 = cljs.core.seq(inst_34518__$1);
var inst_34526 = inst_34525;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34584__$1 = (function (){var statearr_34625 = state_34584;
(statearr_34625[(10)] = inst_34529);

(statearr_34625[(12)] = inst_34527);

(statearr_34625[(28)] = inst_34520);

(statearr_34625[(19)] = inst_34526);

(statearr_34625[(20)] = inst_34528);

(statearr_34625[(27)] = inst_34518__$1);

return statearr_34625;
})();
var statearr_34626_35806 = state_34584__$1;
(statearr_34626_35806[(2)] = null);

(statearr_34626_35806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (28))){
var inst_34544 = (state_34584[(23)]);
var inst_34526 = (state_34584[(19)]);
var inst_34544__$1 = cljs.core.seq(inst_34526);
var state_34584__$1 = (function (){var statearr_34627 = state_34584;
(statearr_34627[(23)] = inst_34544__$1);

return statearr_34627;
})();
if(inst_34544__$1){
var statearr_34628_35807 = state_34584__$1;
(statearr_34628_35807[(1)] = (33));

} else {
var statearr_34629_35808 = state_34584__$1;
(statearr_34629_35808[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (25))){
var inst_34529 = (state_34584[(10)]);
var inst_34528 = (state_34584[(20)]);
var inst_34531 = (inst_34529 < inst_34528);
var inst_34532 = inst_34531;
var state_34584__$1 = state_34584;
if(cljs.core.truth_(inst_34532)){
var statearr_34630_35810 = state_34584__$1;
(statearr_34630_35810[(1)] = (27));

} else {
var statearr_34631_35811 = state_34584__$1;
(statearr_34631_35811[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (34))){
var state_34584__$1 = state_34584;
var statearr_34632_35813 = state_34584__$1;
(statearr_34632_35813[(2)] = null);

(statearr_34632_35813[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (17))){
var state_34584__$1 = state_34584;
var statearr_34633_35817 = state_34584__$1;
(statearr_34633_35817[(2)] = null);

(statearr_34633_35817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (3))){
var inst_34582 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34584__$1,inst_34582);
} else {
if((state_val_34585 === (12))){
var inst_34513 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34634_35818 = state_34584__$1;
(statearr_34634_35818[(2)] = inst_34513);

(statearr_34634_35818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (2))){
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34584__$1,(4),ch);
} else {
if((state_val_34585 === (23))){
var state_34584__$1 = state_34584;
var statearr_34635_35819 = state_34584__$1;
(statearr_34635_35819[(2)] = null);

(statearr_34635_35819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (35))){
var inst_34566 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34636_35820 = state_34584__$1;
(statearr_34636_35820[(2)] = inst_34566);

(statearr_34636_35820[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (19))){
var inst_34485 = (state_34584[(7)]);
var inst_34489 = cljs.core.chunk_first(inst_34485);
var inst_34490 = cljs.core.chunk_rest(inst_34485);
var inst_34491 = cljs.core.count(inst_34489);
var inst_34463 = inst_34490;
var inst_34464 = inst_34489;
var inst_34465 = inst_34491;
var inst_34466 = (0);
var state_34584__$1 = (function (){var statearr_34637 = state_34584;
(statearr_34637[(13)] = inst_34464);

(statearr_34637[(14)] = inst_34466);

(statearr_34637[(15)] = inst_34463);

(statearr_34637[(17)] = inst_34465);

return statearr_34637;
})();
var statearr_34638_35821 = state_34584__$1;
(statearr_34638_35821[(2)] = null);

(statearr_34638_35821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (11))){
var inst_34463 = (state_34584[(15)]);
var inst_34485 = (state_34584[(7)]);
var inst_34485__$1 = cljs.core.seq(inst_34463);
var state_34584__$1 = (function (){var statearr_34639 = state_34584;
(statearr_34639[(7)] = inst_34485__$1);

return statearr_34639;
})();
if(inst_34485__$1){
var statearr_34640_35822 = state_34584__$1;
(statearr_34640_35822[(1)] = (16));

} else {
var statearr_34641_35823 = state_34584__$1;
(statearr_34641_35823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (9))){
var inst_34515 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34642_35824 = state_34584__$1;
(statearr_34642_35824[(2)] = inst_34515);

(statearr_34642_35824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (5))){
var inst_34461 = cljs.core.deref(cs);
var inst_34462 = cljs.core.seq(inst_34461);
var inst_34463 = inst_34462;
var inst_34464 = null;
var inst_34465 = (0);
var inst_34466 = (0);
var state_34584__$1 = (function (){var statearr_34643 = state_34584;
(statearr_34643[(13)] = inst_34464);

(statearr_34643[(14)] = inst_34466);

(statearr_34643[(15)] = inst_34463);

(statearr_34643[(17)] = inst_34465);

return statearr_34643;
})();
var statearr_34644_35827 = state_34584__$1;
(statearr_34644_35827[(2)] = null);

(statearr_34644_35827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (14))){
var state_34584__$1 = state_34584;
var statearr_34645_35828 = state_34584__$1;
(statearr_34645_35828[(2)] = null);

(statearr_34645_35828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (45))){
var inst_34574 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34646_35829 = state_34584__$1;
(statearr_34646_35829[(2)] = inst_34574);

(statearr_34646_35829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (26))){
var inst_34518 = (state_34584[(27)]);
var inst_34570 = (state_34584[(2)]);
var inst_34571 = cljs.core.seq(inst_34518);
var state_34584__$1 = (function (){var statearr_34647 = state_34584;
(statearr_34647[(29)] = inst_34570);

return statearr_34647;
})();
if(inst_34571){
var statearr_34648_35830 = state_34584__$1;
(statearr_34648_35830[(1)] = (42));

} else {
var statearr_34649_35831 = state_34584__$1;
(statearr_34649_35831[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (16))){
var inst_34485 = (state_34584[(7)]);
var inst_34487 = cljs.core.chunked_seq_QMARK_(inst_34485);
var state_34584__$1 = state_34584;
if(inst_34487){
var statearr_34650_35834 = state_34584__$1;
(statearr_34650_35834[(1)] = (19));

} else {
var statearr_34651_35835 = state_34584__$1;
(statearr_34651_35835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (38))){
var inst_34563 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34652_35836 = state_34584__$1;
(statearr_34652_35836[(2)] = inst_34563);

(statearr_34652_35836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (30))){
var state_34584__$1 = state_34584;
var statearr_34653_35837 = state_34584__$1;
(statearr_34653_35837[(2)] = null);

(statearr_34653_35837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (10))){
var inst_34464 = (state_34584[(13)]);
var inst_34466 = (state_34584[(14)]);
var inst_34474 = cljs.core._nth(inst_34464,inst_34466);
var inst_34475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34474,(0),null);
var inst_34476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34474,(1),null);
var state_34584__$1 = (function (){var statearr_34654 = state_34584;
(statearr_34654[(24)] = inst_34475);

return statearr_34654;
})();
if(cljs.core.truth_(inst_34476)){
var statearr_34655_35838 = state_34584__$1;
(statearr_34655_35838[(1)] = (13));

} else {
var statearr_34656_35839 = state_34584__$1;
(statearr_34656_35839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (18))){
var inst_34511 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34657_35840 = state_34584__$1;
(statearr_34657_35840[(2)] = inst_34511);

(statearr_34657_35840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (42))){
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34584__$1,(45),dchan);
} else {
if((state_val_34585 === (37))){
var inst_34454 = (state_34584[(9)]);
var inst_34544 = (state_34584[(23)]);
var inst_34553 = (state_34584[(22)]);
var inst_34553__$1 = cljs.core.first(inst_34544);
var inst_34554 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34553__$1,inst_34454,done);
var state_34584__$1 = (function (){var statearr_34658 = state_34584;
(statearr_34658[(22)] = inst_34553__$1);

return statearr_34658;
})();
if(cljs.core.truth_(inst_34554)){
var statearr_34659_35841 = state_34584__$1;
(statearr_34659_35841[(1)] = (39));

} else {
var statearr_34660_35842 = state_34584__$1;
(statearr_34660_35842[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (8))){
var inst_34466 = (state_34584[(14)]);
var inst_34465 = (state_34584[(17)]);
var inst_34468 = (inst_34466 < inst_34465);
var inst_34469 = inst_34468;
var state_34584__$1 = state_34584;
if(cljs.core.truth_(inst_34469)){
var statearr_34661_35843 = state_34584__$1;
(statearr_34661_35843[(1)] = (10));

} else {
var statearr_34662_35844 = state_34584__$1;
(statearr_34662_35844[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33708__auto__ = null;
var cljs$core$async$mult_$_state_machine__33708__auto____0 = (function (){
var statearr_34663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34663[(0)] = cljs$core$async$mult_$_state_machine__33708__auto__);

(statearr_34663[(1)] = (1));

return statearr_34663;
});
var cljs$core$async$mult_$_state_machine__33708__auto____1 = (function (state_34584){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34584);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34664){var ex__33711__auto__ = e34664;
var statearr_34665_35847 = state_34584;
(statearr_34665_35847[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34584[(4)]))){
var statearr_34666_35848 = state_34584;
(statearr_34666_35848[(1)] = cljs.core.first((state_34584[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35849 = state_34584;
state_34584 = G__35849;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33708__auto__ = function(state_34584){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33708__auto____1.call(this,state_34584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33708__auto____0;
cljs$core$async$mult_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33708__auto____1;
return cljs$core$async$mult_$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34667 = f__33756__auto__();
(statearr_34667[(6)] = c__33755__auto___35775);

return statearr_34667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34669 = arguments.length;
switch (G__34669) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35851 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35851(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35852 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35852(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35853 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35853(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35855 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35855(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35856 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35856(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35861 = arguments.length;
var i__4737__auto___35862 = (0);
while(true){
if((i__4737__auto___35862 < len__4736__auto___35861)){
args__4742__auto__.push((arguments[i__4737__auto___35862]));

var G__35863 = (i__4737__auto___35862 + (1));
i__4737__auto___35862 = G__35863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34674){
var map__34675 = p__34674;
var map__34675__$1 = (((((!((map__34675 == null))))?(((((map__34675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34675):map__34675);
var opts = map__34675__$1;
var statearr_34677_35864 = state;
(statearr_34677_35864[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34678_35865 = state;
(statearr_34678_35865[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34679_35866 = state;
(statearr_34679_35866[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34670){
var G__34671 = cljs.core.first(seq34670);
var seq34670__$1 = cljs.core.next(seq34670);
var G__34672 = cljs.core.first(seq34670__$1);
var seq34670__$2 = cljs.core.next(seq34670__$1);
var G__34673 = cljs.core.first(seq34670__$2);
var seq34670__$3 = cljs.core.next(seq34670__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34671,G__34672,G__34673,seq34670__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34680 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34681){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34681 = meta34681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34682,meta34681__$1){
var self__ = this;
var _34682__$1 = this;
return (new cljs.core.async.t_cljs$core$async34680(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34681__$1));
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34682){
var self__ = this;
var _34682__$1 = this;
return self__.meta34681;
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34680.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34681","meta34681",-547978257,null)], null);
}));

(cljs.core.async.t_cljs$core$async34680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34680");

(cljs.core.async.t_cljs$core$async34680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34680.
 */
cljs.core.async.__GT_t_cljs$core$async34680 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34680(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34681){
return (new cljs.core.async.t_cljs$core$async34680(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34681));
});

}

return (new cljs.core.async.t_cljs$core$async34680(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33755__auto___35887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34784){
var state_val_34785 = (state_34784[(1)]);
if((state_val_34785 === (7))){
var inst_34699 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34786_35888 = state_34784__$1;
(statearr_34786_35888[(2)] = inst_34699);

(statearr_34786_35888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (20))){
var inst_34711 = (state_34784[(7)]);
var state_34784__$1 = state_34784;
var statearr_34787_35890 = state_34784__$1;
(statearr_34787_35890[(2)] = inst_34711);

(statearr_34787_35890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (27))){
var state_34784__$1 = state_34784;
var statearr_34788_35892 = state_34784__$1;
(statearr_34788_35892[(2)] = null);

(statearr_34788_35892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (1))){
var inst_34686 = (state_34784[(8)]);
var inst_34686__$1 = calc_state();
var inst_34688 = (inst_34686__$1 == null);
var inst_34689 = cljs.core.not(inst_34688);
var state_34784__$1 = (function (){var statearr_34789 = state_34784;
(statearr_34789[(8)] = inst_34686__$1);

return statearr_34789;
})();
if(inst_34689){
var statearr_34790_35893 = state_34784__$1;
(statearr_34790_35893[(1)] = (2));

} else {
var statearr_34791_35894 = state_34784__$1;
(statearr_34791_35894[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (24))){
var inst_34758 = (state_34784[(9)]);
var inst_34735 = (state_34784[(10)]);
var inst_34744 = (state_34784[(11)]);
var inst_34758__$1 = (inst_34735.cljs$core$IFn$_invoke$arity$1 ? inst_34735.cljs$core$IFn$_invoke$arity$1(inst_34744) : inst_34735.call(null,inst_34744));
var state_34784__$1 = (function (){var statearr_34792 = state_34784;
(statearr_34792[(9)] = inst_34758__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34758__$1)){
var statearr_34793_35895 = state_34784__$1;
(statearr_34793_35895[(1)] = (29));

} else {
var statearr_34794_35896 = state_34784__$1;
(statearr_34794_35896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (4))){
var inst_34702 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34702)){
var statearr_34795_35897 = state_34784__$1;
(statearr_34795_35897[(1)] = (8));

} else {
var statearr_34796_35898 = state_34784__$1;
(statearr_34796_35898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (15))){
var inst_34729 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34729)){
var statearr_34797_35899 = state_34784__$1;
(statearr_34797_35899[(1)] = (19));

} else {
var statearr_34798_35900 = state_34784__$1;
(statearr_34798_35900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (21))){
var inst_34734 = (state_34784[(12)]);
var inst_34734__$1 = (state_34784[(2)]);
var inst_34735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34734__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34734__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34734__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34784__$1 = (function (){var statearr_34799 = state_34784;
(statearr_34799[(12)] = inst_34734__$1);

(statearr_34799[(10)] = inst_34735);

(statearr_34799[(13)] = inst_34736);

return statearr_34799;
})();
return cljs.core.async.ioc_alts_BANG_(state_34784__$1,(22),inst_34737);
} else {
if((state_val_34785 === (31))){
var inst_34766 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34766)){
var statearr_34800_35901 = state_34784__$1;
(statearr_34800_35901[(1)] = (32));

} else {
var statearr_34801_35902 = state_34784__$1;
(statearr_34801_35902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (32))){
var inst_34743 = (state_34784[(14)]);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34784__$1,(35),out,inst_34743);
} else {
if((state_val_34785 === (33))){
var inst_34734 = (state_34784[(12)]);
var inst_34711 = inst_34734;
var state_34784__$1 = (function (){var statearr_34802 = state_34784;
(statearr_34802[(7)] = inst_34711);

return statearr_34802;
})();
var statearr_34803_35903 = state_34784__$1;
(statearr_34803_35903[(2)] = null);

(statearr_34803_35903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (13))){
var inst_34711 = (state_34784[(7)]);
var inst_34718 = inst_34711.cljs$lang$protocol_mask$partition0$;
var inst_34719 = (inst_34718 & (64));
var inst_34720 = inst_34711.cljs$core$ISeq$;
var inst_34721 = (cljs.core.PROTOCOL_SENTINEL === inst_34720);
var inst_34722 = ((inst_34719) || (inst_34721));
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34722)){
var statearr_34804_35904 = state_34784__$1;
(statearr_34804_35904[(1)] = (16));

} else {
var statearr_34805_35905 = state_34784__$1;
(statearr_34805_35905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (22))){
var inst_34743 = (state_34784[(14)]);
var inst_34744 = (state_34784[(11)]);
var inst_34742 = (state_34784[(2)]);
var inst_34743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34742,(0),null);
var inst_34744__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34742,(1),null);
var inst_34745 = (inst_34743__$1 == null);
var inst_34746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34744__$1,change);
var inst_34747 = ((inst_34745) || (inst_34746));
var state_34784__$1 = (function (){var statearr_34806 = state_34784;
(statearr_34806[(14)] = inst_34743__$1);

(statearr_34806[(11)] = inst_34744__$1);

return statearr_34806;
})();
if(cljs.core.truth_(inst_34747)){
var statearr_34807_35906 = state_34784__$1;
(statearr_34807_35906[(1)] = (23));

} else {
var statearr_34808_35907 = state_34784__$1;
(statearr_34808_35907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (36))){
var inst_34734 = (state_34784[(12)]);
var inst_34711 = inst_34734;
var state_34784__$1 = (function (){var statearr_34809 = state_34784;
(statearr_34809[(7)] = inst_34711);

return statearr_34809;
})();
var statearr_34810_35908 = state_34784__$1;
(statearr_34810_35908[(2)] = null);

(statearr_34810_35908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (29))){
var inst_34758 = (state_34784[(9)]);
var state_34784__$1 = state_34784;
var statearr_34811_35913 = state_34784__$1;
(statearr_34811_35913[(2)] = inst_34758);

(statearr_34811_35913[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (6))){
var state_34784__$1 = state_34784;
var statearr_34812_35914 = state_34784__$1;
(statearr_34812_35914[(2)] = false);

(statearr_34812_35914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (28))){
var inst_34754 = (state_34784[(2)]);
var inst_34755 = calc_state();
var inst_34711 = inst_34755;
var state_34784__$1 = (function (){var statearr_34813 = state_34784;
(statearr_34813[(7)] = inst_34711);

(statearr_34813[(15)] = inst_34754);

return statearr_34813;
})();
var statearr_34814_35915 = state_34784__$1;
(statearr_34814_35915[(2)] = null);

(statearr_34814_35915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (25))){
var inst_34780 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34815_35916 = state_34784__$1;
(statearr_34815_35916[(2)] = inst_34780);

(statearr_34815_35916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (34))){
var inst_34778 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34816_35917 = state_34784__$1;
(statearr_34816_35917[(2)] = inst_34778);

(statearr_34816_35917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (17))){
var state_34784__$1 = state_34784;
var statearr_34817_35918 = state_34784__$1;
(statearr_34817_35918[(2)] = false);

(statearr_34817_35918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (3))){
var state_34784__$1 = state_34784;
var statearr_34818_35919 = state_34784__$1;
(statearr_34818_35919[(2)] = false);

(statearr_34818_35919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (12))){
var inst_34782 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34784__$1,inst_34782);
} else {
if((state_val_34785 === (2))){
var inst_34686 = (state_34784[(8)]);
var inst_34691 = inst_34686.cljs$lang$protocol_mask$partition0$;
var inst_34692 = (inst_34691 & (64));
var inst_34693 = inst_34686.cljs$core$ISeq$;
var inst_34694 = (cljs.core.PROTOCOL_SENTINEL === inst_34693);
var inst_34695 = ((inst_34692) || (inst_34694));
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34695)){
var statearr_34819_35920 = state_34784__$1;
(statearr_34819_35920[(1)] = (5));

} else {
var statearr_34820_35921 = state_34784__$1;
(statearr_34820_35921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (23))){
var inst_34743 = (state_34784[(14)]);
var inst_34749 = (inst_34743 == null);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34749)){
var statearr_34821_35922 = state_34784__$1;
(statearr_34821_35922[(1)] = (26));

} else {
var statearr_34822_35923 = state_34784__$1;
(statearr_34822_35923[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (35))){
var inst_34769 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34769)){
var statearr_34823_35924 = state_34784__$1;
(statearr_34823_35924[(1)] = (36));

} else {
var statearr_34824_35925 = state_34784__$1;
(statearr_34824_35925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (19))){
var inst_34711 = (state_34784[(7)]);
var inst_34731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34711);
var state_34784__$1 = state_34784;
var statearr_34825_35926 = state_34784__$1;
(statearr_34825_35926[(2)] = inst_34731);

(statearr_34825_35926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (11))){
var inst_34711 = (state_34784[(7)]);
var inst_34715 = (inst_34711 == null);
var inst_34716 = cljs.core.not(inst_34715);
var state_34784__$1 = state_34784;
if(inst_34716){
var statearr_34826_35931 = state_34784__$1;
(statearr_34826_35931[(1)] = (13));

} else {
var statearr_34827_35932 = state_34784__$1;
(statearr_34827_35932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (9))){
var inst_34686 = (state_34784[(8)]);
var state_34784__$1 = state_34784;
var statearr_34828_35933 = state_34784__$1;
(statearr_34828_35933[(2)] = inst_34686);

(statearr_34828_35933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (5))){
var state_34784__$1 = state_34784;
var statearr_34829_35935 = state_34784__$1;
(statearr_34829_35935[(2)] = true);

(statearr_34829_35935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (14))){
var state_34784__$1 = state_34784;
var statearr_34830_35936 = state_34784__$1;
(statearr_34830_35936[(2)] = false);

(statearr_34830_35936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (26))){
var inst_34744 = (state_34784[(11)]);
var inst_34751 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34744);
var state_34784__$1 = state_34784;
var statearr_34831_35937 = state_34784__$1;
(statearr_34831_35937[(2)] = inst_34751);

(statearr_34831_35937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (16))){
var state_34784__$1 = state_34784;
var statearr_34832_35938 = state_34784__$1;
(statearr_34832_35938[(2)] = true);

(statearr_34832_35938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (38))){
var inst_34774 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34833_35939 = state_34784__$1;
(statearr_34833_35939[(2)] = inst_34774);

(statearr_34833_35939[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (30))){
var inst_34735 = (state_34784[(10)]);
var inst_34736 = (state_34784[(13)]);
var inst_34744 = (state_34784[(11)]);
var inst_34761 = cljs.core.empty_QMARK_(inst_34735);
var inst_34762 = (inst_34736.cljs$core$IFn$_invoke$arity$1 ? inst_34736.cljs$core$IFn$_invoke$arity$1(inst_34744) : inst_34736.call(null,inst_34744));
var inst_34763 = cljs.core.not(inst_34762);
var inst_34764 = ((inst_34761) && (inst_34763));
var state_34784__$1 = state_34784;
var statearr_34834_35941 = state_34784__$1;
(statearr_34834_35941[(2)] = inst_34764);

(statearr_34834_35941[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (10))){
var inst_34686 = (state_34784[(8)]);
var inst_34707 = (state_34784[(2)]);
var inst_34708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34707,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34707,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34707,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34711 = inst_34686;
var state_34784__$1 = (function (){var statearr_34835 = state_34784;
(statearr_34835[(7)] = inst_34711);

(statearr_34835[(16)] = inst_34710);

(statearr_34835[(17)] = inst_34708);

(statearr_34835[(18)] = inst_34709);

return statearr_34835;
})();
var statearr_34836_35946 = state_34784__$1;
(statearr_34836_35946[(2)] = null);

(statearr_34836_35946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (18))){
var inst_34726 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34837_35947 = state_34784__$1;
(statearr_34837_35947[(2)] = inst_34726);

(statearr_34837_35947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (37))){
var state_34784__$1 = state_34784;
var statearr_34838_35948 = state_34784__$1;
(statearr_34838_35948[(2)] = null);

(statearr_34838_35948[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (8))){
var inst_34686 = (state_34784[(8)]);
var inst_34704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34686);
var state_34784__$1 = state_34784;
var statearr_34839_35949 = state_34784__$1;
(statearr_34839_35949[(2)] = inst_34704);

(statearr_34839_35949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33708__auto__ = null;
var cljs$core$async$mix_$_state_machine__33708__auto____0 = (function (){
var statearr_34840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34840[(0)] = cljs$core$async$mix_$_state_machine__33708__auto__);

(statearr_34840[(1)] = (1));

return statearr_34840;
});
var cljs$core$async$mix_$_state_machine__33708__auto____1 = (function (state_34784){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34784);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34841){var ex__33711__auto__ = e34841;
var statearr_34842_35950 = state_34784;
(statearr_34842_35950[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34784[(4)]))){
var statearr_34843_35951 = state_34784;
(statearr_34843_35951[(1)] = cljs.core.first((state_34784[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35952 = state_34784;
state_34784 = G__35952;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33708__auto__ = function(state_34784){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33708__auto____1.call(this,state_34784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33708__auto____0;
cljs$core$async$mix_$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33708__auto____1;
return cljs$core$async$mix_$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34844 = f__33756__auto__();
(statearr_34844[(6)] = c__33755__auto___35887);

return statearr_34844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35953 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35953(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35957 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35957(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35958 = (function() {
var G__35959 = null;
var G__35959__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35959__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35959 = function(p,v){
switch(arguments.length){
case 1:
return G__35959__1.call(this,p);
case 2:
return G__35959__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35959.cljs$core$IFn$_invoke$arity$1 = G__35959__1;
G__35959.cljs$core$IFn$_invoke$arity$2 = G__35959__2;
return G__35959;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34846 = arguments.length;
switch (G__34846) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35958(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35958(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34849 = arguments.length;
switch (G__34849) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34847_SHARP_){
if(cljs.core.truth_((p1__34847_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34847_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34847_SHARP_.call(null,topic)))){
return p1__34847_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34847_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34850 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34851){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34851 = meta34851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34852,meta34851__$1){
var self__ = this;
var _34852__$1 = this;
return (new cljs.core.async.t_cljs$core$async34850(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34851__$1));
}));

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34852){
var self__ = this;
var _34852__$1 = this;
return self__.meta34851;
}));

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34851","meta34851",-1952119241,null)], null);
}));

(cljs.core.async.t_cljs$core$async34850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34850");

(cljs.core.async.t_cljs$core$async34850.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34850.
 */
cljs.core.async.__GT_t_cljs$core$async34850 = (function cljs$core$async$__GT_t_cljs$core$async34850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34851){
return (new cljs.core.async.t_cljs$core$async34850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34851));
});

}

return (new cljs.core.async.t_cljs$core$async34850(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33755__auto___35963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_34924){
var state_val_34925 = (state_34924[(1)]);
if((state_val_34925 === (7))){
var inst_34920 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34926_35968 = state_34924__$1;
(statearr_34926_35968[(2)] = inst_34920);

(statearr_34926_35968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (20))){
var state_34924__$1 = state_34924;
var statearr_34927_35970 = state_34924__$1;
(statearr_34927_35970[(2)] = null);

(statearr_34927_35970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (1))){
var state_34924__$1 = state_34924;
var statearr_34928_35971 = state_34924__$1;
(statearr_34928_35971[(2)] = null);

(statearr_34928_35971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (24))){
var inst_34903 = (state_34924[(7)]);
var inst_34912 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34903);
var state_34924__$1 = state_34924;
var statearr_34929_35972 = state_34924__$1;
(statearr_34929_35972[(2)] = inst_34912);

(statearr_34929_35972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (4))){
var inst_34855 = (state_34924[(8)]);
var inst_34855__$1 = (state_34924[(2)]);
var inst_34856 = (inst_34855__$1 == null);
var state_34924__$1 = (function (){var statearr_34930 = state_34924;
(statearr_34930[(8)] = inst_34855__$1);

return statearr_34930;
})();
if(cljs.core.truth_(inst_34856)){
var statearr_34931_35973 = state_34924__$1;
(statearr_34931_35973[(1)] = (5));

} else {
var statearr_34932_35974 = state_34924__$1;
(statearr_34932_35974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (15))){
var inst_34897 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34933_35976 = state_34924__$1;
(statearr_34933_35976[(2)] = inst_34897);

(statearr_34933_35976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (21))){
var inst_34917 = (state_34924[(2)]);
var state_34924__$1 = (function (){var statearr_34934 = state_34924;
(statearr_34934[(9)] = inst_34917);

return statearr_34934;
})();
var statearr_34935_35977 = state_34924__$1;
(statearr_34935_35977[(2)] = null);

(statearr_34935_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (13))){
var inst_34879 = (state_34924[(10)]);
var inst_34881 = cljs.core.chunked_seq_QMARK_(inst_34879);
var state_34924__$1 = state_34924;
if(inst_34881){
var statearr_34936_35978 = state_34924__$1;
(statearr_34936_35978[(1)] = (16));

} else {
var statearr_34937_35980 = state_34924__$1;
(statearr_34937_35980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (22))){
var inst_34909 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34909)){
var statearr_34938_35984 = state_34924__$1;
(statearr_34938_35984[(1)] = (23));

} else {
var statearr_34939_35985 = state_34924__$1;
(statearr_34939_35985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (6))){
var inst_34905 = (state_34924[(11)]);
var inst_34855 = (state_34924[(8)]);
var inst_34903 = (state_34924[(7)]);
var inst_34903__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34855) : topic_fn.call(null,inst_34855));
var inst_34904 = cljs.core.deref(mults);
var inst_34905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34904,inst_34903__$1);
var state_34924__$1 = (function (){var statearr_34940 = state_34924;
(statearr_34940[(11)] = inst_34905__$1);

(statearr_34940[(7)] = inst_34903__$1);

return statearr_34940;
})();
if(cljs.core.truth_(inst_34905__$1)){
var statearr_34941_35986 = state_34924__$1;
(statearr_34941_35986[(1)] = (19));

} else {
var statearr_34942_35987 = state_34924__$1;
(statearr_34942_35987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (25))){
var inst_34914 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34943_35988 = state_34924__$1;
(statearr_34943_35988[(2)] = inst_34914);

(statearr_34943_35988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (17))){
var inst_34879 = (state_34924[(10)]);
var inst_34888 = cljs.core.first(inst_34879);
var inst_34889 = cljs.core.async.muxch_STAR_(inst_34888);
var inst_34890 = cljs.core.async.close_BANG_(inst_34889);
var inst_34891 = cljs.core.next(inst_34879);
var inst_34865 = inst_34891;
var inst_34866 = null;
var inst_34867 = (0);
var inst_34868 = (0);
var state_34924__$1 = (function (){var statearr_34944 = state_34924;
(statearr_34944[(12)] = inst_34866);

(statearr_34944[(13)] = inst_34865);

(statearr_34944[(14)] = inst_34868);

(statearr_34944[(15)] = inst_34890);

(statearr_34944[(16)] = inst_34867);

return statearr_34944;
})();
var statearr_34945_35989 = state_34924__$1;
(statearr_34945_35989[(2)] = null);

(statearr_34945_35989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (3))){
var inst_34922 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34924__$1,inst_34922);
} else {
if((state_val_34925 === (12))){
var inst_34899 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34946_35990 = state_34924__$1;
(statearr_34946_35990[(2)] = inst_34899);

(statearr_34946_35990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (2))){
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34924__$1,(4),ch);
} else {
if((state_val_34925 === (23))){
var state_34924__$1 = state_34924;
var statearr_34947_35991 = state_34924__$1;
(statearr_34947_35991[(2)] = null);

(statearr_34947_35991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (19))){
var inst_34905 = (state_34924[(11)]);
var inst_34855 = (state_34924[(8)]);
var inst_34907 = cljs.core.async.muxch_STAR_(inst_34905);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34924__$1,(22),inst_34907,inst_34855);
} else {
if((state_val_34925 === (11))){
var inst_34879 = (state_34924[(10)]);
var inst_34865 = (state_34924[(13)]);
var inst_34879__$1 = cljs.core.seq(inst_34865);
var state_34924__$1 = (function (){var statearr_34948 = state_34924;
(statearr_34948[(10)] = inst_34879__$1);

return statearr_34948;
})();
if(inst_34879__$1){
var statearr_34949_35992 = state_34924__$1;
(statearr_34949_35992[(1)] = (13));

} else {
var statearr_34950_35993 = state_34924__$1;
(statearr_34950_35993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (9))){
var inst_34901 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34951_35994 = state_34924__$1;
(statearr_34951_35994[(2)] = inst_34901);

(statearr_34951_35994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (5))){
var inst_34862 = cljs.core.deref(mults);
var inst_34863 = cljs.core.vals(inst_34862);
var inst_34864 = cljs.core.seq(inst_34863);
var inst_34865 = inst_34864;
var inst_34866 = null;
var inst_34867 = (0);
var inst_34868 = (0);
var state_34924__$1 = (function (){var statearr_34952 = state_34924;
(statearr_34952[(12)] = inst_34866);

(statearr_34952[(13)] = inst_34865);

(statearr_34952[(14)] = inst_34868);

(statearr_34952[(16)] = inst_34867);

return statearr_34952;
})();
var statearr_34953_35995 = state_34924__$1;
(statearr_34953_35995[(2)] = null);

(statearr_34953_35995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (14))){
var state_34924__$1 = state_34924;
var statearr_34957_35996 = state_34924__$1;
(statearr_34957_35996[(2)] = null);

(statearr_34957_35996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (16))){
var inst_34879 = (state_34924[(10)]);
var inst_34883 = cljs.core.chunk_first(inst_34879);
var inst_34884 = cljs.core.chunk_rest(inst_34879);
var inst_34885 = cljs.core.count(inst_34883);
var inst_34865 = inst_34884;
var inst_34866 = inst_34883;
var inst_34867 = inst_34885;
var inst_34868 = (0);
var state_34924__$1 = (function (){var statearr_34958 = state_34924;
(statearr_34958[(12)] = inst_34866);

(statearr_34958[(13)] = inst_34865);

(statearr_34958[(14)] = inst_34868);

(statearr_34958[(16)] = inst_34867);

return statearr_34958;
})();
var statearr_34959_35997 = state_34924__$1;
(statearr_34959_35997[(2)] = null);

(statearr_34959_35997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (10))){
var inst_34866 = (state_34924[(12)]);
var inst_34865 = (state_34924[(13)]);
var inst_34868 = (state_34924[(14)]);
var inst_34867 = (state_34924[(16)]);
var inst_34873 = cljs.core._nth(inst_34866,inst_34868);
var inst_34874 = cljs.core.async.muxch_STAR_(inst_34873);
var inst_34875 = cljs.core.async.close_BANG_(inst_34874);
var inst_34876 = (inst_34868 + (1));
var tmp34954 = inst_34866;
var tmp34955 = inst_34865;
var tmp34956 = inst_34867;
var inst_34865__$1 = tmp34955;
var inst_34866__$1 = tmp34954;
var inst_34867__$1 = tmp34956;
var inst_34868__$1 = inst_34876;
var state_34924__$1 = (function (){var statearr_34960 = state_34924;
(statearr_34960[(12)] = inst_34866__$1);

(statearr_34960[(13)] = inst_34865__$1);

(statearr_34960[(17)] = inst_34875);

(statearr_34960[(14)] = inst_34868__$1);

(statearr_34960[(16)] = inst_34867__$1);

return statearr_34960;
})();
var statearr_34961_36001 = state_34924__$1;
(statearr_34961_36001[(2)] = null);

(statearr_34961_36001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (18))){
var inst_34894 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34962_36002 = state_34924__$1;
(statearr_34962_36002[(2)] = inst_34894);

(statearr_34962_36002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (8))){
var inst_34868 = (state_34924[(14)]);
var inst_34867 = (state_34924[(16)]);
var inst_34870 = (inst_34868 < inst_34867);
var inst_34871 = inst_34870;
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34871)){
var statearr_34963_36003 = state_34924__$1;
(statearr_34963_36003[(1)] = (10));

} else {
var statearr_34964_36004 = state_34924__$1;
(statearr_34964_36004[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_34965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34965[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_34965[(1)] = (1));

return statearr_34965;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_34924){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_34924);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e34966){var ex__33711__auto__ = e34966;
var statearr_34967_36005 = state_34924;
(statearr_34967_36005[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_34924[(4)]))){
var statearr_34968_36006 = state_34924;
(statearr_34968_36006[(1)] = cljs.core.first((state_34924[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36007 = state_34924;
state_34924 = G__36007;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_34924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_34924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_34969 = f__33756__auto__();
(statearr_34969[(6)] = c__33755__auto___35963);

return statearr_34969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34971 = arguments.length;
switch (G__34971) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34973 = arguments.length;
switch (G__34973) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34975 = arguments.length;
switch (G__34975) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33755__auto___36012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35018){
var state_val_35019 = (state_35018[(1)]);
if((state_val_35019 === (7))){
var state_35018__$1 = state_35018;
var statearr_35020_36013 = state_35018__$1;
(statearr_35020_36013[(2)] = null);

(statearr_35020_36013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (1))){
var state_35018__$1 = state_35018;
var statearr_35021_36014 = state_35018__$1;
(statearr_35021_36014[(2)] = null);

(statearr_35021_36014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (4))){
var inst_34979 = (state_35018[(7)]);
var inst_34978 = (state_35018[(8)]);
var inst_34981 = (inst_34979 < inst_34978);
var state_35018__$1 = state_35018;
if(cljs.core.truth_(inst_34981)){
var statearr_35022_36015 = state_35018__$1;
(statearr_35022_36015[(1)] = (6));

} else {
var statearr_35023_36016 = state_35018__$1;
(statearr_35023_36016[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (15))){
var inst_35004 = (state_35018[(9)]);
var inst_35009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35004);
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35018__$1,(17),out,inst_35009);
} else {
if((state_val_35019 === (13))){
var inst_35004 = (state_35018[(9)]);
var inst_35004__$1 = (state_35018[(2)]);
var inst_35005 = cljs.core.some(cljs.core.nil_QMARK_,inst_35004__$1);
var state_35018__$1 = (function (){var statearr_35024 = state_35018;
(statearr_35024[(9)] = inst_35004__$1);

return statearr_35024;
})();
if(cljs.core.truth_(inst_35005)){
var statearr_35025_36021 = state_35018__$1;
(statearr_35025_36021[(1)] = (14));

} else {
var statearr_35026_36022 = state_35018__$1;
(statearr_35026_36022[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (6))){
var state_35018__$1 = state_35018;
var statearr_35027_36024 = state_35018__$1;
(statearr_35027_36024[(2)] = null);

(statearr_35027_36024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (17))){
var inst_35011 = (state_35018[(2)]);
var state_35018__$1 = (function (){var statearr_35029 = state_35018;
(statearr_35029[(10)] = inst_35011);

return statearr_35029;
})();
var statearr_35030_36028 = state_35018__$1;
(statearr_35030_36028[(2)] = null);

(statearr_35030_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (3))){
var inst_35016 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35018__$1,inst_35016);
} else {
if((state_val_35019 === (12))){
var _ = (function (){var statearr_35031 = state_35018;
(statearr_35031[(4)] = cljs.core.rest((state_35018[(4)])));

return statearr_35031;
})();
var state_35018__$1 = state_35018;
var ex35028 = (state_35018__$1[(2)]);
var statearr_35032_36031 = state_35018__$1;
(statearr_35032_36031[(5)] = ex35028);


if((ex35028 instanceof Object)){
var statearr_35033_36032 = state_35018__$1;
(statearr_35033_36032[(1)] = (11));

(statearr_35033_36032[(5)] = null);

} else {
throw ex35028;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (2))){
var inst_34977 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34978 = cnt;
var inst_34979 = (0);
var state_35018__$1 = (function (){var statearr_35034 = state_35018;
(statearr_35034[(7)] = inst_34979);

(statearr_35034[(11)] = inst_34977);

(statearr_35034[(8)] = inst_34978);

return statearr_35034;
})();
var statearr_35035_36033 = state_35018__$1;
(statearr_35035_36033[(2)] = null);

(statearr_35035_36033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (11))){
var inst_34983 = (state_35018[(2)]);
var inst_34984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35018__$1 = (function (){var statearr_35036 = state_35018;
(statearr_35036[(12)] = inst_34983);

return statearr_35036;
})();
var statearr_35037_36034 = state_35018__$1;
(statearr_35037_36034[(2)] = inst_34984);

(statearr_35037_36034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (9))){
var inst_34979 = (state_35018[(7)]);
var _ = (function (){var statearr_35038 = state_35018;
(statearr_35038[(4)] = cljs.core.cons((12),(state_35018[(4)])));

return statearr_35038;
})();
var inst_34990 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34979) : chs__$1.call(null,inst_34979));
var inst_34991 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34979) : done.call(null,inst_34979));
var inst_34992 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34990,inst_34991);
var ___$1 = (function (){var statearr_35039 = state_35018;
(statearr_35039[(4)] = cljs.core.rest((state_35018[(4)])));

return statearr_35039;
})();
var state_35018__$1 = state_35018;
var statearr_35040_36035 = state_35018__$1;
(statearr_35040_36035[(2)] = inst_34992);

(statearr_35040_36035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (5))){
var inst_35002 = (state_35018[(2)]);
var state_35018__$1 = (function (){var statearr_35041 = state_35018;
(statearr_35041[(13)] = inst_35002);

return statearr_35041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35018__$1,(13),dchan);
} else {
if((state_val_35019 === (14))){
var inst_35007 = cljs.core.async.close_BANG_(out);
var state_35018__$1 = state_35018;
var statearr_35042_36036 = state_35018__$1;
(statearr_35042_36036[(2)] = inst_35007);

(statearr_35042_36036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (16))){
var inst_35014 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35043_36037 = state_35018__$1;
(statearr_35043_36037[(2)] = inst_35014);

(statearr_35043_36037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (10))){
var inst_34979 = (state_35018[(7)]);
var inst_34995 = (state_35018[(2)]);
var inst_34996 = (inst_34979 + (1));
var inst_34979__$1 = inst_34996;
var state_35018__$1 = (function (){var statearr_35044 = state_35018;
(statearr_35044[(14)] = inst_34995);

(statearr_35044[(7)] = inst_34979__$1);

return statearr_35044;
})();
var statearr_35045_36038 = state_35018__$1;
(statearr_35045_36038[(2)] = null);

(statearr_35045_36038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (8))){
var inst_35000 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35046_36039 = state_35018__$1;
(statearr_35046_36039[(2)] = inst_35000);

(statearr_35046_36039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35047[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35047[(1)] = (1));

return statearr_35047;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35018){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35018);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35048){var ex__33711__auto__ = e35048;
var statearr_35049_36040 = state_35018;
(statearr_35049_36040[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35018[(4)]))){
var statearr_35050_36041 = state_35018;
(statearr_35050_36041[(1)] = cljs.core.first((state_35018[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36042 = state_35018;
state_35018 = G__36042;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35051 = f__33756__auto__();
(statearr_35051[(6)] = c__33755__auto___36012);

return statearr_35051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35054 = arguments.length;
switch (G__35054) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33755__auto___36044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35086){
var state_val_35087 = (state_35086[(1)]);
if((state_val_35087 === (7))){
var inst_35065 = (state_35086[(7)]);
var inst_35066 = (state_35086[(8)]);
var inst_35065__$1 = (state_35086[(2)]);
var inst_35066__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35065__$1,(0),null);
var inst_35067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35065__$1,(1),null);
var inst_35068 = (inst_35066__$1 == null);
var state_35086__$1 = (function (){var statearr_35088 = state_35086;
(statearr_35088[(9)] = inst_35067);

(statearr_35088[(7)] = inst_35065__$1);

(statearr_35088[(8)] = inst_35066__$1);

return statearr_35088;
})();
if(cljs.core.truth_(inst_35068)){
var statearr_35089_36045 = state_35086__$1;
(statearr_35089_36045[(1)] = (8));

} else {
var statearr_35090_36046 = state_35086__$1;
(statearr_35090_36046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (1))){
var inst_35055 = cljs.core.vec(chs);
var inst_35056 = inst_35055;
var state_35086__$1 = (function (){var statearr_35091 = state_35086;
(statearr_35091[(10)] = inst_35056);

return statearr_35091;
})();
var statearr_35092_36047 = state_35086__$1;
(statearr_35092_36047[(2)] = null);

(statearr_35092_36047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (4))){
var inst_35056 = (state_35086[(10)]);
var state_35086__$1 = state_35086;
return cljs.core.async.ioc_alts_BANG_(state_35086__$1,(7),inst_35056);
} else {
if((state_val_35087 === (6))){
var inst_35082 = (state_35086[(2)]);
var state_35086__$1 = state_35086;
var statearr_35093_36048 = state_35086__$1;
(statearr_35093_36048[(2)] = inst_35082);

(statearr_35093_36048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (3))){
var inst_35084 = (state_35086[(2)]);
var state_35086__$1 = state_35086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35086__$1,inst_35084);
} else {
if((state_val_35087 === (2))){
var inst_35056 = (state_35086[(10)]);
var inst_35058 = cljs.core.count(inst_35056);
var inst_35059 = (inst_35058 > (0));
var state_35086__$1 = state_35086;
if(cljs.core.truth_(inst_35059)){
var statearr_35095_36049 = state_35086__$1;
(statearr_35095_36049[(1)] = (4));

} else {
var statearr_35096_36050 = state_35086__$1;
(statearr_35096_36050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (11))){
var inst_35056 = (state_35086[(10)]);
var inst_35075 = (state_35086[(2)]);
var tmp35094 = inst_35056;
var inst_35056__$1 = tmp35094;
var state_35086__$1 = (function (){var statearr_35097 = state_35086;
(statearr_35097[(10)] = inst_35056__$1);

(statearr_35097[(11)] = inst_35075);

return statearr_35097;
})();
var statearr_35098_36051 = state_35086__$1;
(statearr_35098_36051[(2)] = null);

(statearr_35098_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (9))){
var inst_35066 = (state_35086[(8)]);
var state_35086__$1 = state_35086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35086__$1,(11),out,inst_35066);
} else {
if((state_val_35087 === (5))){
var inst_35080 = cljs.core.async.close_BANG_(out);
var state_35086__$1 = state_35086;
var statearr_35099_36055 = state_35086__$1;
(statearr_35099_36055[(2)] = inst_35080);

(statearr_35099_36055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (10))){
var inst_35078 = (state_35086[(2)]);
var state_35086__$1 = state_35086;
var statearr_35100_36060 = state_35086__$1;
(statearr_35100_36060[(2)] = inst_35078);

(statearr_35100_36060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (8))){
var inst_35067 = (state_35086[(9)]);
var inst_35056 = (state_35086[(10)]);
var inst_35065 = (state_35086[(7)]);
var inst_35066 = (state_35086[(8)]);
var inst_35070 = (function (){var cs = inst_35056;
var vec__35061 = inst_35065;
var v = inst_35066;
var c = inst_35067;
return (function (p1__35052_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35052_SHARP_);
});
})();
var inst_35071 = cljs.core.filterv(inst_35070,inst_35056);
var inst_35056__$1 = inst_35071;
var state_35086__$1 = (function (){var statearr_35101 = state_35086;
(statearr_35101[(10)] = inst_35056__$1);

return statearr_35101;
})();
var statearr_35102_36064 = state_35086__$1;
(statearr_35102_36064[(2)] = null);

(statearr_35102_36064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35103[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35103[(1)] = (1));

return statearr_35103;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35086){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35086);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35104){var ex__33711__auto__ = e35104;
var statearr_35105_36068 = state_35086;
(statearr_35105_36068[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35086[(4)]))){
var statearr_35106_36069 = state_35086;
(statearr_35106_36069[(1)] = cljs.core.first((state_35086[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36070 = state_35086;
state_35086 = G__36070;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35107 = f__33756__auto__();
(statearr_35107[(6)] = c__33755__auto___36044);

return statearr_35107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33755__auto___36075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35133){
var state_val_35134 = (state_35133[(1)]);
if((state_val_35134 === (7))){
var inst_35115 = (state_35133[(7)]);
var inst_35115__$1 = (state_35133[(2)]);
var inst_35116 = (inst_35115__$1 == null);
var inst_35117 = cljs.core.not(inst_35116);
var state_35133__$1 = (function (){var statearr_35135 = state_35133;
(statearr_35135[(7)] = inst_35115__$1);

return statearr_35135;
})();
if(inst_35117){
var statearr_35136_36079 = state_35133__$1;
(statearr_35136_36079[(1)] = (8));

} else {
var statearr_35137_36080 = state_35133__$1;
(statearr_35137_36080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (1))){
var inst_35110 = (0);
var state_35133__$1 = (function (){var statearr_35138 = state_35133;
(statearr_35138[(8)] = inst_35110);

return statearr_35138;
})();
var statearr_35139_36081 = state_35133__$1;
(statearr_35139_36081[(2)] = null);

(statearr_35139_36081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (4))){
var state_35133__$1 = state_35133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35133__$1,(7),ch);
} else {
if((state_val_35134 === (6))){
var inst_35128 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35140_36083 = state_35133__$1;
(statearr_35140_36083[(2)] = inst_35128);

(statearr_35140_36083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (3))){
var inst_35130 = (state_35133[(2)]);
var inst_35131 = cljs.core.async.close_BANG_(out);
var state_35133__$1 = (function (){var statearr_35141 = state_35133;
(statearr_35141[(9)] = inst_35130);

return statearr_35141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35133__$1,inst_35131);
} else {
if((state_val_35134 === (2))){
var inst_35110 = (state_35133[(8)]);
var inst_35112 = (inst_35110 < n);
var state_35133__$1 = state_35133;
if(cljs.core.truth_(inst_35112)){
var statearr_35142_36084 = state_35133__$1;
(statearr_35142_36084[(1)] = (4));

} else {
var statearr_35143_36085 = state_35133__$1;
(statearr_35143_36085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (11))){
var inst_35110 = (state_35133[(8)]);
var inst_35120 = (state_35133[(2)]);
var inst_35121 = (inst_35110 + (1));
var inst_35110__$1 = inst_35121;
var state_35133__$1 = (function (){var statearr_35144 = state_35133;
(statearr_35144[(10)] = inst_35120);

(statearr_35144[(8)] = inst_35110__$1);

return statearr_35144;
})();
var statearr_35145_36095 = state_35133__$1;
(statearr_35145_36095[(2)] = null);

(statearr_35145_36095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (9))){
var state_35133__$1 = state_35133;
var statearr_35146_36096 = state_35133__$1;
(statearr_35146_36096[(2)] = null);

(statearr_35146_36096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (5))){
var state_35133__$1 = state_35133;
var statearr_35147_36097 = state_35133__$1;
(statearr_35147_36097[(2)] = null);

(statearr_35147_36097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (10))){
var inst_35125 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35148_36104 = state_35133__$1;
(statearr_35148_36104[(2)] = inst_35125);

(statearr_35148_36104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (8))){
var inst_35115 = (state_35133[(7)]);
var state_35133__$1 = state_35133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35133__$1,(11),out,inst_35115);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35149[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35149[(1)] = (1));

return statearr_35149;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35133){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35133);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35150){var ex__33711__auto__ = e35150;
var statearr_35151_36105 = state_35133;
(statearr_35151_36105[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35133[(4)]))){
var statearr_35152_36106 = state_35133;
(statearr_35152_36106[(1)] = cljs.core.first((state_35133[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36107 = state_35133;
state_35133 = G__36107;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35153 = f__33756__auto__();
(statearr_35153[(6)] = c__33755__auto___36075);

return statearr_35153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35155 = (function (f,ch,meta35156){
this.f = f;
this.ch = ch;
this.meta35156 = meta35156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35157,meta35156__$1){
var self__ = this;
var _35157__$1 = this;
return (new cljs.core.async.t_cljs$core$async35155(self__.f,self__.ch,meta35156__$1));
}));

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35157){
var self__ = this;
var _35157__$1 = this;
return self__.meta35156;
}));

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35158 = (function (f,ch,meta35156,_,fn1,meta35159){
this.f = f;
this.ch = ch;
this.meta35156 = meta35156;
this._ = _;
this.fn1 = fn1;
this.meta35159 = meta35159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35160,meta35159__$1){
var self__ = this;
var _35160__$1 = this;
return (new cljs.core.async.t_cljs$core$async35158(self__.f,self__.ch,self__.meta35156,self__._,self__.fn1,meta35159__$1));
}));

(cljs.core.async.t_cljs$core$async35158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35160){
var self__ = this;
var _35160__$1 = this;
return self__.meta35159;
}));

(cljs.core.async.t_cljs$core$async35158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35154_SHARP_){
var G__35161 = (((p1__35154_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35154_SHARP_) : self__.f.call(null,p1__35154_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35161) : f1.call(null,G__35161));
});
}));

(cljs.core.async.t_cljs$core$async35158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35156","meta35156",2020590666,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35155","cljs.core.async/t_cljs$core$async35155",706025981,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35159","meta35159",562230335,null)], null);
}));

(cljs.core.async.t_cljs$core$async35158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35158");

(cljs.core.async.t_cljs$core$async35158.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35158.
 */
cljs.core.async.__GT_t_cljs$core$async35158 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35158(f__$1,ch__$1,meta35156__$1,___$2,fn1__$1,meta35159){
return (new cljs.core.async.t_cljs$core$async35158(f__$1,ch__$1,meta35156__$1,___$2,fn1__$1,meta35159));
});

}

return (new cljs.core.async.t_cljs$core$async35158(self__.f,self__.ch,self__.meta35156,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35162 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35162) : self__.f.call(null,G__35162));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35156","meta35156",2020590666,null)], null);
}));

(cljs.core.async.t_cljs$core$async35155.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35155");

(cljs.core.async.t_cljs$core$async35155.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35155");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35155.
 */
cljs.core.async.__GT_t_cljs$core$async35155 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35155(f__$1,ch__$1,meta35156){
return (new cljs.core.async.t_cljs$core$async35155(f__$1,ch__$1,meta35156));
});

}

return (new cljs.core.async.t_cljs$core$async35155(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35163 = (function (f,ch,meta35164){
this.f = f;
this.ch = ch;
this.meta35164 = meta35164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35165,meta35164__$1){
var self__ = this;
var _35165__$1 = this;
return (new cljs.core.async.t_cljs$core$async35163(self__.f,self__.ch,meta35164__$1));
}));

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35165){
var self__ = this;
var _35165__$1 = this;
return self__.meta35164;
}));

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35164","meta35164",-1314945070,null)], null);
}));

(cljs.core.async.t_cljs$core$async35163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35163");

(cljs.core.async.t_cljs$core$async35163.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35163.
 */
cljs.core.async.__GT_t_cljs$core$async35163 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35163(f__$1,ch__$1,meta35164){
return (new cljs.core.async.t_cljs$core$async35163(f__$1,ch__$1,meta35164));
});

}

return (new cljs.core.async.t_cljs$core$async35163(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35166 = (function (p,ch,meta35167){
this.p = p;
this.ch = ch;
this.meta35167 = meta35167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35168,meta35167__$1){
var self__ = this;
var _35168__$1 = this;
return (new cljs.core.async.t_cljs$core$async35166(self__.p,self__.ch,meta35167__$1));
}));

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35168){
var self__ = this;
var _35168__$1 = this;
return self__.meta35167;
}));

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35166.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35167","meta35167",189673326,null)], null);
}));

(cljs.core.async.t_cljs$core$async35166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35166");

(cljs.core.async.t_cljs$core$async35166.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35166.
 */
cljs.core.async.__GT_t_cljs$core$async35166 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35166(p__$1,ch__$1,meta35167){
return (new cljs.core.async.t_cljs$core$async35166(p__$1,ch__$1,meta35167));
});

}

return (new cljs.core.async.t_cljs$core$async35166(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35170 = arguments.length;
switch (G__35170) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33755__auto___36127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35191){
var state_val_35192 = (state_35191[(1)]);
if((state_val_35192 === (7))){
var inst_35187 = (state_35191[(2)]);
var state_35191__$1 = state_35191;
var statearr_35193_36128 = state_35191__$1;
(statearr_35193_36128[(2)] = inst_35187);

(statearr_35193_36128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (1))){
var state_35191__$1 = state_35191;
var statearr_35194_36129 = state_35191__$1;
(statearr_35194_36129[(2)] = null);

(statearr_35194_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (4))){
var inst_35173 = (state_35191[(7)]);
var inst_35173__$1 = (state_35191[(2)]);
var inst_35174 = (inst_35173__$1 == null);
var state_35191__$1 = (function (){var statearr_35195 = state_35191;
(statearr_35195[(7)] = inst_35173__$1);

return statearr_35195;
})();
if(cljs.core.truth_(inst_35174)){
var statearr_35196_36130 = state_35191__$1;
(statearr_35196_36130[(1)] = (5));

} else {
var statearr_35197_36131 = state_35191__$1;
(statearr_35197_36131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (6))){
var inst_35173 = (state_35191[(7)]);
var inst_35178 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35173) : p.call(null,inst_35173));
var state_35191__$1 = state_35191;
if(cljs.core.truth_(inst_35178)){
var statearr_35198_36132 = state_35191__$1;
(statearr_35198_36132[(1)] = (8));

} else {
var statearr_35199_36133 = state_35191__$1;
(statearr_35199_36133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (3))){
var inst_35189 = (state_35191[(2)]);
var state_35191__$1 = state_35191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35191__$1,inst_35189);
} else {
if((state_val_35192 === (2))){
var state_35191__$1 = state_35191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35191__$1,(4),ch);
} else {
if((state_val_35192 === (11))){
var inst_35181 = (state_35191[(2)]);
var state_35191__$1 = state_35191;
var statearr_35200_36134 = state_35191__$1;
(statearr_35200_36134[(2)] = inst_35181);

(statearr_35200_36134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (9))){
var state_35191__$1 = state_35191;
var statearr_35201_36135 = state_35191__$1;
(statearr_35201_36135[(2)] = null);

(statearr_35201_36135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (5))){
var inst_35176 = cljs.core.async.close_BANG_(out);
var state_35191__$1 = state_35191;
var statearr_35202_36136 = state_35191__$1;
(statearr_35202_36136[(2)] = inst_35176);

(statearr_35202_36136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (10))){
var inst_35184 = (state_35191[(2)]);
var state_35191__$1 = (function (){var statearr_35203 = state_35191;
(statearr_35203[(8)] = inst_35184);

return statearr_35203;
})();
var statearr_35204_36137 = state_35191__$1;
(statearr_35204_36137[(2)] = null);

(statearr_35204_36137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35192 === (8))){
var inst_35173 = (state_35191[(7)]);
var state_35191__$1 = state_35191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35191__$1,(11),out,inst_35173);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35205 = [null,null,null,null,null,null,null,null,null];
(statearr_35205[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35205[(1)] = (1));

return statearr_35205;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35191){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35191);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35206){var ex__33711__auto__ = e35206;
var statearr_35207_36140 = state_35191;
(statearr_35207_36140[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35191[(4)]))){
var statearr_35208_36141 = state_35191;
(statearr_35208_36141[(1)] = cljs.core.first((state_35191[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36142 = state_35191;
state_35191 = G__36142;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35209 = f__33756__auto__();
(statearr_35209[(6)] = c__33755__auto___36127);

return statearr_35209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35211 = arguments.length;
switch (G__35211) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33755__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35273){
var state_val_35274 = (state_35273[(1)]);
if((state_val_35274 === (7))){
var inst_35269 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35275_36145 = state_35273__$1;
(statearr_35275_36145[(2)] = inst_35269);

(statearr_35275_36145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (20))){
var inst_35239 = (state_35273[(7)]);
var inst_35250 = (state_35273[(2)]);
var inst_35251 = cljs.core.next(inst_35239);
var inst_35225 = inst_35251;
var inst_35226 = null;
var inst_35227 = (0);
var inst_35228 = (0);
var state_35273__$1 = (function (){var statearr_35276 = state_35273;
(statearr_35276[(8)] = inst_35227);

(statearr_35276[(9)] = inst_35250);

(statearr_35276[(10)] = inst_35225);

(statearr_35276[(11)] = inst_35226);

(statearr_35276[(12)] = inst_35228);

return statearr_35276;
})();
var statearr_35277_36147 = state_35273__$1;
(statearr_35277_36147[(2)] = null);

(statearr_35277_36147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (1))){
var state_35273__$1 = state_35273;
var statearr_35278_36148 = state_35273__$1;
(statearr_35278_36148[(2)] = null);

(statearr_35278_36148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (4))){
var inst_35214 = (state_35273[(13)]);
var inst_35214__$1 = (state_35273[(2)]);
var inst_35215 = (inst_35214__$1 == null);
var state_35273__$1 = (function (){var statearr_35279 = state_35273;
(statearr_35279[(13)] = inst_35214__$1);

return statearr_35279;
})();
if(cljs.core.truth_(inst_35215)){
var statearr_35280_36149 = state_35273__$1;
(statearr_35280_36149[(1)] = (5));

} else {
var statearr_35281_36150 = state_35273__$1;
(statearr_35281_36150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (15))){
var state_35273__$1 = state_35273;
var statearr_35285_36151 = state_35273__$1;
(statearr_35285_36151[(2)] = null);

(statearr_35285_36151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (21))){
var state_35273__$1 = state_35273;
var statearr_35286_36152 = state_35273__$1;
(statearr_35286_36152[(2)] = null);

(statearr_35286_36152[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (13))){
var inst_35227 = (state_35273[(8)]);
var inst_35225 = (state_35273[(10)]);
var inst_35226 = (state_35273[(11)]);
var inst_35228 = (state_35273[(12)]);
var inst_35235 = (state_35273[(2)]);
var inst_35236 = (inst_35228 + (1));
var tmp35282 = inst_35227;
var tmp35283 = inst_35225;
var tmp35284 = inst_35226;
var inst_35225__$1 = tmp35283;
var inst_35226__$1 = tmp35284;
var inst_35227__$1 = tmp35282;
var inst_35228__$1 = inst_35236;
var state_35273__$1 = (function (){var statearr_35287 = state_35273;
(statearr_35287[(8)] = inst_35227__$1);

(statearr_35287[(14)] = inst_35235);

(statearr_35287[(10)] = inst_35225__$1);

(statearr_35287[(11)] = inst_35226__$1);

(statearr_35287[(12)] = inst_35228__$1);

return statearr_35287;
})();
var statearr_35288_36155 = state_35273__$1;
(statearr_35288_36155[(2)] = null);

(statearr_35288_36155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (22))){
var state_35273__$1 = state_35273;
var statearr_35289_36160 = state_35273__$1;
(statearr_35289_36160[(2)] = null);

(statearr_35289_36160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (6))){
var inst_35214 = (state_35273[(13)]);
var inst_35223 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35214) : f.call(null,inst_35214));
var inst_35224 = cljs.core.seq(inst_35223);
var inst_35225 = inst_35224;
var inst_35226 = null;
var inst_35227 = (0);
var inst_35228 = (0);
var state_35273__$1 = (function (){var statearr_35290 = state_35273;
(statearr_35290[(8)] = inst_35227);

(statearr_35290[(10)] = inst_35225);

(statearr_35290[(11)] = inst_35226);

(statearr_35290[(12)] = inst_35228);

return statearr_35290;
})();
var statearr_35291_36161 = state_35273__$1;
(statearr_35291_36161[(2)] = null);

(statearr_35291_36161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (17))){
var inst_35239 = (state_35273[(7)]);
var inst_35243 = cljs.core.chunk_first(inst_35239);
var inst_35244 = cljs.core.chunk_rest(inst_35239);
var inst_35245 = cljs.core.count(inst_35243);
var inst_35225 = inst_35244;
var inst_35226 = inst_35243;
var inst_35227 = inst_35245;
var inst_35228 = (0);
var state_35273__$1 = (function (){var statearr_35292 = state_35273;
(statearr_35292[(8)] = inst_35227);

(statearr_35292[(10)] = inst_35225);

(statearr_35292[(11)] = inst_35226);

(statearr_35292[(12)] = inst_35228);

return statearr_35292;
})();
var statearr_35293_36164 = state_35273__$1;
(statearr_35293_36164[(2)] = null);

(statearr_35293_36164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (3))){
var inst_35271 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35273__$1,inst_35271);
} else {
if((state_val_35274 === (12))){
var inst_35259 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35294_36168 = state_35273__$1;
(statearr_35294_36168[(2)] = inst_35259);

(statearr_35294_36168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (2))){
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35273__$1,(4),in$);
} else {
if((state_val_35274 === (23))){
var inst_35267 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35295_36170 = state_35273__$1;
(statearr_35295_36170[(2)] = inst_35267);

(statearr_35295_36170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (19))){
var inst_35254 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35296_36171 = state_35273__$1;
(statearr_35296_36171[(2)] = inst_35254);

(statearr_35296_36171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (11))){
var inst_35239 = (state_35273[(7)]);
var inst_35225 = (state_35273[(10)]);
var inst_35239__$1 = cljs.core.seq(inst_35225);
var state_35273__$1 = (function (){var statearr_35297 = state_35273;
(statearr_35297[(7)] = inst_35239__$1);

return statearr_35297;
})();
if(inst_35239__$1){
var statearr_35298_36172 = state_35273__$1;
(statearr_35298_36172[(1)] = (14));

} else {
var statearr_35299_36173 = state_35273__$1;
(statearr_35299_36173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (9))){
var inst_35261 = (state_35273[(2)]);
var inst_35262 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35273__$1 = (function (){var statearr_35300 = state_35273;
(statearr_35300[(15)] = inst_35261);

return statearr_35300;
})();
if(cljs.core.truth_(inst_35262)){
var statearr_35301_36174 = state_35273__$1;
(statearr_35301_36174[(1)] = (21));

} else {
var statearr_35302_36175 = state_35273__$1;
(statearr_35302_36175[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (5))){
var inst_35217 = cljs.core.async.close_BANG_(out);
var state_35273__$1 = state_35273;
var statearr_35303_36176 = state_35273__$1;
(statearr_35303_36176[(2)] = inst_35217);

(statearr_35303_36176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (14))){
var inst_35239 = (state_35273[(7)]);
var inst_35241 = cljs.core.chunked_seq_QMARK_(inst_35239);
var state_35273__$1 = state_35273;
if(inst_35241){
var statearr_35304_36177 = state_35273__$1;
(statearr_35304_36177[(1)] = (17));

} else {
var statearr_35305_36178 = state_35273__$1;
(statearr_35305_36178[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (16))){
var inst_35257 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35306_36179 = state_35273__$1;
(statearr_35306_36179[(2)] = inst_35257);

(statearr_35306_36179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (10))){
var inst_35226 = (state_35273[(11)]);
var inst_35228 = (state_35273[(12)]);
var inst_35233 = cljs.core._nth(inst_35226,inst_35228);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35273__$1,(13),out,inst_35233);
} else {
if((state_val_35274 === (18))){
var inst_35239 = (state_35273[(7)]);
var inst_35248 = cljs.core.first(inst_35239);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35273__$1,(20),out,inst_35248);
} else {
if((state_val_35274 === (8))){
var inst_35227 = (state_35273[(8)]);
var inst_35228 = (state_35273[(12)]);
var inst_35230 = (inst_35228 < inst_35227);
var inst_35231 = inst_35230;
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35231)){
var statearr_35307_36180 = state_35273__$1;
(statearr_35307_36180[(1)] = (10));

} else {
var statearr_35308_36181 = state_35273__$1;
(statearr_35308_36181[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33708__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33708__auto____0 = (function (){
var statearr_35309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35309[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33708__auto__);

(statearr_35309[(1)] = (1));

return statearr_35309;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33708__auto____1 = (function (state_35273){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35273);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35310){var ex__33711__auto__ = e35310;
var statearr_35311_36182 = state_35273;
(statearr_35311_36182[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35273[(4)]))){
var statearr_35312_36183 = state_35273;
(statearr_35312_36183[(1)] = cljs.core.first((state_35273[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36184 = state_35273;
state_35273 = G__36184;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33708__auto__ = function(state_35273){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33708__auto____1.call(this,state_35273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33708__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33708__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35313 = f__33756__auto__();
(statearr_35313[(6)] = c__33755__auto__);

return statearr_35313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));

return c__33755__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35315 = arguments.length;
switch (G__35315) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35317 = arguments.length;
switch (G__35317) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35319 = arguments.length;
switch (G__35319) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33755__auto___36188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35343){
var state_val_35344 = (state_35343[(1)]);
if((state_val_35344 === (7))){
var inst_35338 = (state_35343[(2)]);
var state_35343__$1 = state_35343;
var statearr_35345_36189 = state_35343__$1;
(statearr_35345_36189[(2)] = inst_35338);

(statearr_35345_36189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (1))){
var inst_35320 = null;
var state_35343__$1 = (function (){var statearr_35346 = state_35343;
(statearr_35346[(7)] = inst_35320);

return statearr_35346;
})();
var statearr_35347_36190 = state_35343__$1;
(statearr_35347_36190[(2)] = null);

(statearr_35347_36190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (4))){
var inst_35323 = (state_35343[(8)]);
var inst_35323__$1 = (state_35343[(2)]);
var inst_35324 = (inst_35323__$1 == null);
var inst_35325 = cljs.core.not(inst_35324);
var state_35343__$1 = (function (){var statearr_35348 = state_35343;
(statearr_35348[(8)] = inst_35323__$1);

return statearr_35348;
})();
if(inst_35325){
var statearr_35349_36191 = state_35343__$1;
(statearr_35349_36191[(1)] = (5));

} else {
var statearr_35350_36192 = state_35343__$1;
(statearr_35350_36192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (6))){
var state_35343__$1 = state_35343;
var statearr_35351_36193 = state_35343__$1;
(statearr_35351_36193[(2)] = null);

(statearr_35351_36193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (3))){
var inst_35340 = (state_35343[(2)]);
var inst_35341 = cljs.core.async.close_BANG_(out);
var state_35343__$1 = (function (){var statearr_35352 = state_35343;
(statearr_35352[(9)] = inst_35340);

return statearr_35352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35343__$1,inst_35341);
} else {
if((state_val_35344 === (2))){
var state_35343__$1 = state_35343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35343__$1,(4),ch);
} else {
if((state_val_35344 === (11))){
var inst_35323 = (state_35343[(8)]);
var inst_35332 = (state_35343[(2)]);
var inst_35320 = inst_35323;
var state_35343__$1 = (function (){var statearr_35353 = state_35343;
(statearr_35353[(7)] = inst_35320);

(statearr_35353[(10)] = inst_35332);

return statearr_35353;
})();
var statearr_35354_36194 = state_35343__$1;
(statearr_35354_36194[(2)] = null);

(statearr_35354_36194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (9))){
var inst_35323 = (state_35343[(8)]);
var state_35343__$1 = state_35343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35343__$1,(11),out,inst_35323);
} else {
if((state_val_35344 === (5))){
var inst_35320 = (state_35343[(7)]);
var inst_35323 = (state_35343[(8)]);
var inst_35327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35323,inst_35320);
var state_35343__$1 = state_35343;
if(inst_35327){
var statearr_35356_36195 = state_35343__$1;
(statearr_35356_36195[(1)] = (8));

} else {
var statearr_35357_36196 = state_35343__$1;
(statearr_35357_36196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (10))){
var inst_35335 = (state_35343[(2)]);
var state_35343__$1 = state_35343;
var statearr_35358_36198 = state_35343__$1;
(statearr_35358_36198[(2)] = inst_35335);

(statearr_35358_36198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (8))){
var inst_35320 = (state_35343[(7)]);
var tmp35355 = inst_35320;
var inst_35320__$1 = tmp35355;
var state_35343__$1 = (function (){var statearr_35359 = state_35343;
(statearr_35359[(7)] = inst_35320__$1);

return statearr_35359;
})();
var statearr_35360_36199 = state_35343__$1;
(statearr_35360_36199[(2)] = null);

(statearr_35360_36199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35361[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35361[(1)] = (1));

return statearr_35361;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35343){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35343);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35362){var ex__33711__auto__ = e35362;
var statearr_35363_36201 = state_35343;
(statearr_35363_36201[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35343[(4)]))){
var statearr_35364_36202 = state_35343;
(statearr_35364_36202[(1)] = cljs.core.first((state_35343[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36203 = state_35343;
state_35343 = G__36203;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35365 = f__33756__auto__();
(statearr_35365[(6)] = c__33755__auto___36188);

return statearr_35365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35367 = arguments.length;
switch (G__35367) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33755__auto___36205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35405){
var state_val_35406 = (state_35405[(1)]);
if((state_val_35406 === (7))){
var inst_35401 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35407_36206 = state_35405__$1;
(statearr_35407_36206[(2)] = inst_35401);

(statearr_35407_36206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (1))){
var inst_35368 = (new Array(n));
var inst_35369 = inst_35368;
var inst_35370 = (0);
var state_35405__$1 = (function (){var statearr_35408 = state_35405;
(statearr_35408[(7)] = inst_35369);

(statearr_35408[(8)] = inst_35370);

return statearr_35408;
})();
var statearr_35409_36207 = state_35405__$1;
(statearr_35409_36207[(2)] = null);

(statearr_35409_36207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (4))){
var inst_35373 = (state_35405[(9)]);
var inst_35373__$1 = (state_35405[(2)]);
var inst_35374 = (inst_35373__$1 == null);
var inst_35375 = cljs.core.not(inst_35374);
var state_35405__$1 = (function (){var statearr_35410 = state_35405;
(statearr_35410[(9)] = inst_35373__$1);

return statearr_35410;
})();
if(inst_35375){
var statearr_35411_36208 = state_35405__$1;
(statearr_35411_36208[(1)] = (5));

} else {
var statearr_35412_36209 = state_35405__$1;
(statearr_35412_36209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (15))){
var inst_35395 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35413_36210 = state_35405__$1;
(statearr_35413_36210[(2)] = inst_35395);

(statearr_35413_36210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (13))){
var state_35405__$1 = state_35405;
var statearr_35414_36211 = state_35405__$1;
(statearr_35414_36211[(2)] = null);

(statearr_35414_36211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (6))){
var inst_35370 = (state_35405[(8)]);
var inst_35391 = (inst_35370 > (0));
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35391)){
var statearr_35415_36212 = state_35405__$1;
(statearr_35415_36212[(1)] = (12));

} else {
var statearr_35416_36213 = state_35405__$1;
(statearr_35416_36213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (3))){
var inst_35403 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35405__$1,inst_35403);
} else {
if((state_val_35406 === (12))){
var inst_35369 = (state_35405[(7)]);
var inst_35393 = cljs.core.vec(inst_35369);
var state_35405__$1 = state_35405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35405__$1,(15),out,inst_35393);
} else {
if((state_val_35406 === (2))){
var state_35405__$1 = state_35405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35405__$1,(4),ch);
} else {
if((state_val_35406 === (11))){
var inst_35385 = (state_35405[(2)]);
var inst_35386 = (new Array(n));
var inst_35369 = inst_35386;
var inst_35370 = (0);
var state_35405__$1 = (function (){var statearr_35417 = state_35405;
(statearr_35417[(10)] = inst_35385);

(statearr_35417[(7)] = inst_35369);

(statearr_35417[(8)] = inst_35370);

return statearr_35417;
})();
var statearr_35418_36214 = state_35405__$1;
(statearr_35418_36214[(2)] = null);

(statearr_35418_36214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (9))){
var inst_35369 = (state_35405[(7)]);
var inst_35383 = cljs.core.vec(inst_35369);
var state_35405__$1 = state_35405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35405__$1,(11),out,inst_35383);
} else {
if((state_val_35406 === (5))){
var inst_35369 = (state_35405[(7)]);
var inst_35370 = (state_35405[(8)]);
var inst_35378 = (state_35405[(11)]);
var inst_35373 = (state_35405[(9)]);
var inst_35377 = (inst_35369[inst_35370] = inst_35373);
var inst_35378__$1 = (inst_35370 + (1));
var inst_35379 = (inst_35378__$1 < n);
var state_35405__$1 = (function (){var statearr_35419 = state_35405;
(statearr_35419[(11)] = inst_35378__$1);

(statearr_35419[(12)] = inst_35377);

return statearr_35419;
})();
if(cljs.core.truth_(inst_35379)){
var statearr_35420_36216 = state_35405__$1;
(statearr_35420_36216[(1)] = (8));

} else {
var statearr_35421_36217 = state_35405__$1;
(statearr_35421_36217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (14))){
var inst_35398 = (state_35405[(2)]);
var inst_35399 = cljs.core.async.close_BANG_(out);
var state_35405__$1 = (function (){var statearr_35423 = state_35405;
(statearr_35423[(13)] = inst_35398);

return statearr_35423;
})();
var statearr_35424_36219 = state_35405__$1;
(statearr_35424_36219[(2)] = inst_35399);

(statearr_35424_36219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (10))){
var inst_35389 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35425_36220 = state_35405__$1;
(statearr_35425_36220[(2)] = inst_35389);

(statearr_35425_36220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (8))){
var inst_35369 = (state_35405[(7)]);
var inst_35378 = (state_35405[(11)]);
var tmp35422 = inst_35369;
var inst_35369__$1 = tmp35422;
var inst_35370 = inst_35378;
var state_35405__$1 = (function (){var statearr_35426 = state_35405;
(statearr_35426[(7)] = inst_35369__$1);

(statearr_35426[(8)] = inst_35370);

return statearr_35426;
})();
var statearr_35427_36222 = state_35405__$1;
(statearr_35427_36222[(2)] = null);

(statearr_35427_36222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35428[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35428[(1)] = (1));

return statearr_35428;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35405){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35405);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35429){var ex__33711__auto__ = e35429;
var statearr_35430_36224 = state_35405;
(statearr_35430_36224[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35405[(4)]))){
var statearr_35431_36225 = state_35405;
(statearr_35431_36225[(1)] = cljs.core.first((state_35405[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36226 = state_35405;
state_35405 = G__36226;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35432 = f__33756__auto__();
(statearr_35432[(6)] = c__33755__auto___36205);

return statearr_35432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35434 = arguments.length;
switch (G__35434) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33755__auto___36230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33756__auto__ = (function (){var switch__33707__auto__ = (function (state_35476){
var state_val_35477 = (state_35476[(1)]);
if((state_val_35477 === (7))){
var inst_35472 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35478_36231 = state_35476__$1;
(statearr_35478_36231[(2)] = inst_35472);

(statearr_35478_36231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (1))){
var inst_35435 = [];
var inst_35436 = inst_35435;
var inst_35437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35476__$1 = (function (){var statearr_35479 = state_35476;
(statearr_35479[(7)] = inst_35436);

(statearr_35479[(8)] = inst_35437);

return statearr_35479;
})();
var statearr_35480_36232 = state_35476__$1;
(statearr_35480_36232[(2)] = null);

(statearr_35480_36232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (4))){
var inst_35440 = (state_35476[(9)]);
var inst_35440__$1 = (state_35476[(2)]);
var inst_35441 = (inst_35440__$1 == null);
var inst_35442 = cljs.core.not(inst_35441);
var state_35476__$1 = (function (){var statearr_35481 = state_35476;
(statearr_35481[(9)] = inst_35440__$1);

return statearr_35481;
})();
if(inst_35442){
var statearr_35482_36233 = state_35476__$1;
(statearr_35482_36233[(1)] = (5));

} else {
var statearr_35483_36234 = state_35476__$1;
(statearr_35483_36234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (15))){
var inst_35466 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35484_36235 = state_35476__$1;
(statearr_35484_36235[(2)] = inst_35466);

(statearr_35484_36235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (13))){
var state_35476__$1 = state_35476;
var statearr_35485_36236 = state_35476__$1;
(statearr_35485_36236[(2)] = null);

(statearr_35485_36236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (6))){
var inst_35436 = (state_35476[(7)]);
var inst_35461 = inst_35436.length;
var inst_35462 = (inst_35461 > (0));
var state_35476__$1 = state_35476;
if(cljs.core.truth_(inst_35462)){
var statearr_35486_36242 = state_35476__$1;
(statearr_35486_36242[(1)] = (12));

} else {
var statearr_35487_36243 = state_35476__$1;
(statearr_35487_36243[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (3))){
var inst_35474 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35476__$1,inst_35474);
} else {
if((state_val_35477 === (12))){
var inst_35436 = (state_35476[(7)]);
var inst_35464 = cljs.core.vec(inst_35436);
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35476__$1,(15),out,inst_35464);
} else {
if((state_val_35477 === (2))){
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35476__$1,(4),ch);
} else {
if((state_val_35477 === (11))){
var inst_35444 = (state_35476[(10)]);
var inst_35440 = (state_35476[(9)]);
var inst_35454 = (state_35476[(2)]);
var inst_35455 = [];
var inst_35456 = inst_35455.push(inst_35440);
var inst_35436 = inst_35455;
var inst_35437 = inst_35444;
var state_35476__$1 = (function (){var statearr_35488 = state_35476;
(statearr_35488[(7)] = inst_35436);

(statearr_35488[(11)] = inst_35456);

(statearr_35488[(12)] = inst_35454);

(statearr_35488[(8)] = inst_35437);

return statearr_35488;
})();
var statearr_35489_36254 = state_35476__$1;
(statearr_35489_36254[(2)] = null);

(statearr_35489_36254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (9))){
var inst_35436 = (state_35476[(7)]);
var inst_35452 = cljs.core.vec(inst_35436);
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35476__$1,(11),out,inst_35452);
} else {
if((state_val_35477 === (5))){
var inst_35444 = (state_35476[(10)]);
var inst_35440 = (state_35476[(9)]);
var inst_35437 = (state_35476[(8)]);
var inst_35444__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35440) : f.call(null,inst_35440));
var inst_35445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35444__$1,inst_35437);
var inst_35446 = cljs.core.keyword_identical_QMARK_(inst_35437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35447 = ((inst_35445) || (inst_35446));
var state_35476__$1 = (function (){var statearr_35490 = state_35476;
(statearr_35490[(10)] = inst_35444__$1);

return statearr_35490;
})();
if(cljs.core.truth_(inst_35447)){
var statearr_35491_36257 = state_35476__$1;
(statearr_35491_36257[(1)] = (8));

} else {
var statearr_35492_36258 = state_35476__$1;
(statearr_35492_36258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (14))){
var inst_35469 = (state_35476[(2)]);
var inst_35470 = cljs.core.async.close_BANG_(out);
var state_35476__$1 = (function (){var statearr_35494 = state_35476;
(statearr_35494[(13)] = inst_35469);

return statearr_35494;
})();
var statearr_35495_36267 = state_35476__$1;
(statearr_35495_36267[(2)] = inst_35470);

(statearr_35495_36267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (10))){
var inst_35459 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35496_36272 = state_35476__$1;
(statearr_35496_36272[(2)] = inst_35459);

(statearr_35496_36272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (8))){
var inst_35436 = (state_35476[(7)]);
var inst_35444 = (state_35476[(10)]);
var inst_35440 = (state_35476[(9)]);
var inst_35449 = inst_35436.push(inst_35440);
var tmp35493 = inst_35436;
var inst_35436__$1 = tmp35493;
var inst_35437 = inst_35444;
var state_35476__$1 = (function (){var statearr_35497 = state_35476;
(statearr_35497[(7)] = inst_35436__$1);

(statearr_35497[(14)] = inst_35449);

(statearr_35497[(8)] = inst_35437);

return statearr_35497;
})();
var statearr_35498_36273 = state_35476__$1;
(statearr_35498_36273[(2)] = null);

(statearr_35498_36273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33708__auto__ = null;
var cljs$core$async$state_machine__33708__auto____0 = (function (){
var statearr_35499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35499[(0)] = cljs$core$async$state_machine__33708__auto__);

(statearr_35499[(1)] = (1));

return statearr_35499;
});
var cljs$core$async$state_machine__33708__auto____1 = (function (state_35476){
while(true){
var ret_value__33709__auto__ = (function (){try{while(true){
var result__33710__auto__ = switch__33707__auto__(state_35476);
if(cljs.core.keyword_identical_QMARK_(result__33710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33710__auto__;
}
break;
}
}catch (e35500){var ex__33711__auto__ = e35500;
var statearr_35501_36282 = state_35476;
(statearr_35501_36282[(2)] = ex__33711__auto__);


if(cljs.core.seq((state_35476[(4)]))){
var statearr_35502_36287 = state_35476;
(statearr_35502_36287[(1)] = cljs.core.first((state_35476[(4)])));

} else {
throw ex__33711__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36290 = state_35476;
state_35476 = G__36290;
continue;
} else {
return ret_value__33709__auto__;
}
break;
}
});
cljs$core$async$state_machine__33708__auto__ = function(state_35476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33708__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33708__auto____1.call(this,state_35476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33708__auto____0;
cljs$core$async$state_machine__33708__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33708__auto____1;
return cljs$core$async$state_machine__33708__auto__;
})()
})();
var state__33757__auto__ = (function (){var statearr_35503 = f__33756__auto__();
(statearr_35503[(6)] = c__33755__auto___36230);

return statearr_35503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33757__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
