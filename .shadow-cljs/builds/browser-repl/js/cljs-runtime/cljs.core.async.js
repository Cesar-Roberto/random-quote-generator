goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39535 = arguments.length;
switch (G__39535) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39539 = (function (f,blockable,meta39540){
this.f = f;
this.blockable = blockable;
this.meta39540 = meta39540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39541,meta39540__$1){
var self__ = this;
var _39541__$1 = this;
return (new cljs.core.async.t_cljs$core$async39539(self__.f,self__.blockable,meta39540__$1));
}));

(cljs.core.async.t_cljs$core$async39539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39541){
var self__ = this;
var _39541__$1 = this;
return self__.meta39540;
}));

(cljs.core.async.t_cljs$core$async39539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39540","meta39540",-600933325,null)], null);
}));

(cljs.core.async.t_cljs$core$async39539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39539");

(cljs.core.async.t_cljs$core$async39539.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39539.
 */
cljs.core.async.__GT_t_cljs$core$async39539 = (function cljs$core$async$__GT_t_cljs$core$async39539(f__$1,blockable__$1,meta39540){
return (new cljs.core.async.t_cljs$core$async39539(f__$1,blockable__$1,meta39540));
});

}

return (new cljs.core.async.t_cljs$core$async39539(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39567 = arguments.length;
switch (G__39567) {
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
var G__39569 = arguments.length;
switch (G__39569) {
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
var G__39571 = arguments.length;
switch (G__39571) {
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
var val_41199 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41199) : fn1.call(null,val_41199));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41199) : fn1.call(null,val_41199));
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
var G__39573 = arguments.length;
switch (G__39573) {
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
var n__4613__auto___41201 = n;
var x_41202 = (0);
while(true){
if((x_41202 < n__4613__auto___41201)){
(a[x_41202] = x_41202);

var G__41203 = (x_41202 + (1));
x_41202 = G__41203;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39574 = (function (flag,meta39575){
this.flag = flag;
this.meta39575 = meta39575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39576,meta39575__$1){
var self__ = this;
var _39576__$1 = this;
return (new cljs.core.async.t_cljs$core$async39574(self__.flag,meta39575__$1));
}));

(cljs.core.async.t_cljs$core$async39574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39576){
var self__ = this;
var _39576__$1 = this;
return self__.meta39575;
}));

(cljs.core.async.t_cljs$core$async39574.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39575","meta39575",-1591846277,null)], null);
}));

(cljs.core.async.t_cljs$core$async39574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39574");

(cljs.core.async.t_cljs$core$async39574.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39574.
 */
cljs.core.async.__GT_t_cljs$core$async39574 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39574(flag__$1,meta39575){
return (new cljs.core.async.t_cljs$core$async39574(flag__$1,meta39575));
});

}

return (new cljs.core.async.t_cljs$core$async39574(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39578 = (function (flag,cb,meta39579){
this.flag = flag;
this.cb = cb;
this.meta39579 = meta39579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39580,meta39579__$1){
var self__ = this;
var _39580__$1 = this;
return (new cljs.core.async.t_cljs$core$async39578(self__.flag,self__.cb,meta39579__$1));
}));

(cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39580){
var self__ = this;
var _39580__$1 = this;
return self__.meta39579;
}));

(cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39579","meta39579",1574837031,null)], null);
}));

(cljs.core.async.t_cljs$core$async39578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39578");

(cljs.core.async.t_cljs$core$async39578.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39578.
 */
cljs.core.async.__GT_t_cljs$core$async39578 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39578(flag__$1,cb__$1,meta39579){
return (new cljs.core.async.t_cljs$core$async39578(flag__$1,cb__$1,meta39579));
});

}

return (new cljs.core.async.t_cljs$core$async39578(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39583_SHARP_){
var G__39589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39583_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39589) : fret.call(null,G__39589));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39584_SHARP_){
var G__39590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39584_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39590) : fret.call(null,G__39590));
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
var G__41206 = (i + (1));
i = G__41206;
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
var len__4736__auto___41207 = arguments.length;
var i__4737__auto___41208 = (0);
while(true){
if((i__4737__auto___41208 < len__4736__auto___41207)){
args__4742__auto__.push((arguments[i__4737__auto___41208]));

var G__41209 = (i__4737__auto___41208 + (1));
i__4737__auto___41208 = G__41209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39595){
var map__39596 = p__39595;
var map__39596__$1 = (((((!((map__39596 == null))))?(((((map__39596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39596):map__39596);
var opts = map__39596__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39591){
var G__39592 = cljs.core.first(seq39591);
var seq39591__$1 = cljs.core.next(seq39591);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39592,seq39591__$1);
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
var G__39599 = arguments.length;
switch (G__39599) {
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
var c__27964__auto___41212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_39631){
var state_val_39632 = (state_39631[(1)]);
if((state_val_39632 === (7))){
var inst_39627 = (state_39631[(2)]);
var state_39631__$1 = state_39631;
var statearr_39633_41213 = state_39631__$1;
(statearr_39633_41213[(2)] = inst_39627);

(statearr_39633_41213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (1))){
var state_39631__$1 = state_39631;
var statearr_39634_41214 = state_39631__$1;
(statearr_39634_41214[(2)] = null);

(statearr_39634_41214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (4))){
var inst_39602 = (state_39631[(7)]);
var inst_39602__$1 = (state_39631[(2)]);
var inst_39603 = (inst_39602__$1 == null);
var state_39631__$1 = (function (){var statearr_39635 = state_39631;
(statearr_39635[(7)] = inst_39602__$1);

return statearr_39635;
})();
if(cljs.core.truth_(inst_39603)){
var statearr_39636_41215 = state_39631__$1;
(statearr_39636_41215[(1)] = (5));

} else {
var statearr_39637_41216 = state_39631__$1;
(statearr_39637_41216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (13))){
var state_39631__$1 = state_39631;
var statearr_39641_41218 = state_39631__$1;
(statearr_39641_41218[(2)] = null);

(statearr_39641_41218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (6))){
var inst_39602 = (state_39631[(7)]);
var state_39631__$1 = state_39631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39631__$1,(11),to,inst_39602);
} else {
if((state_val_39632 === (3))){
var inst_39629 = (state_39631[(2)]);
var state_39631__$1 = state_39631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39631__$1,inst_39629);
} else {
if((state_val_39632 === (12))){
var state_39631__$1 = state_39631;
var statearr_39643_41220 = state_39631__$1;
(statearr_39643_41220[(2)] = null);

(statearr_39643_41220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (2))){
var state_39631__$1 = state_39631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39631__$1,(4),from);
} else {
if((state_val_39632 === (11))){
var inst_39612 = (state_39631[(2)]);
var state_39631__$1 = state_39631;
if(cljs.core.truth_(inst_39612)){
var statearr_39645_41221 = state_39631__$1;
(statearr_39645_41221[(1)] = (12));

} else {
var statearr_39646_41222 = state_39631__$1;
(statearr_39646_41222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (9))){
var state_39631__$1 = state_39631;
var statearr_39647_41223 = state_39631__$1;
(statearr_39647_41223[(2)] = null);

(statearr_39647_41223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (5))){
var state_39631__$1 = state_39631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39648_41224 = state_39631__$1;
(statearr_39648_41224[(1)] = (8));

} else {
var statearr_39649_41225 = state_39631__$1;
(statearr_39649_41225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (14))){
var inst_39625 = (state_39631[(2)]);
var state_39631__$1 = state_39631;
var statearr_39650_41226 = state_39631__$1;
(statearr_39650_41226[(2)] = inst_39625);

(statearr_39650_41226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (10))){
var inst_39609 = (state_39631[(2)]);
var state_39631__$1 = state_39631;
var statearr_39651_41227 = state_39631__$1;
(statearr_39651_41227[(2)] = inst_39609);

(statearr_39651_41227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39632 === (8))){
var inst_39606 = cljs.core.async.close_BANG_(to);
var state_39631__$1 = state_39631;
var statearr_39652_41228 = state_39631__$1;
(statearr_39652_41228[(2)] = inst_39606);

(statearr_39652_41228[(1)] = (10));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_39654 = [null,null,null,null,null,null,null,null];
(statearr_39654[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_39654[(1)] = (1));

return statearr_39654;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_39631){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39631);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39655){var ex__27876__auto__ = e39655;
var statearr_39656_41231 = state_39631;
(statearr_39656_41231[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39631[(4)]))){
var statearr_39657_41232 = state_39631;
(statearr_39657_41232[(1)] = cljs.core.first((state_39631[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41233 = state_39631;
state_39631 = G__41233;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_39631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_39631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_39658 = f__27965__auto__();
(statearr_39658[(6)] = c__27964__auto___41212);

return statearr_39658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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
var process = (function (p__39662){
var vec__39663 = p__39662;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39663,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39663,(1),null);
var job = vec__39663;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27964__auto___41235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_39671){
var state_val_39672 = (state_39671[(1)]);
if((state_val_39672 === (1))){
var state_39671__$1 = state_39671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39671__$1,(2),res,v);
} else {
if((state_val_39672 === (2))){
var inst_39668 = (state_39671[(2)]);
var inst_39669 = cljs.core.async.close_BANG_(res);
var state_39671__$1 = (function (){var statearr_39673 = state_39671;
(statearr_39673[(7)] = inst_39668);

return statearr_39673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39671__$1,inst_39669);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0 = (function (){
var statearr_39674 = [null,null,null,null,null,null,null,null];
(statearr_39674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__);

(statearr_39674[(1)] = (1));

return statearr_39674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1 = (function (state_39671){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39671);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39675){var ex__27876__auto__ = e39675;
var statearr_39676_41237 = state_39671;
(statearr_39676_41237[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39671[(4)]))){
var statearr_39677_41238 = state_39671;
(statearr_39677_41238[(1)] = cljs.core.first((state_39671[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41240 = state_39671;
state_39671 = G__41240;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = function(state_39671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1.call(this,state_39671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_39678 = f__27965__auto__();
(statearr_39678[(6)] = c__27964__auto___41235);

return statearr_39678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39679){
var vec__39680 = p__39679;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(1),null);
var job = vec__39680;
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
var n__4613__auto___41242 = n;
var __41243 = (0);
while(true){
if((__41243 < n__4613__auto___41242)){
var G__39683_41244 = type;
var G__39683_41245__$1 = (((G__39683_41244 instanceof cljs.core.Keyword))?G__39683_41244.fqn:null);
switch (G__39683_41245__$1) {
case "compute":
var c__27964__auto___41247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41243,c__27964__auto___41247,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async){
return (function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = ((function (__41243,c__27964__auto___41247,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async){
return (function (state_39696){
var state_val_39697 = (state_39696[(1)]);
if((state_val_39697 === (1))){
var state_39696__$1 = state_39696;
var statearr_39698_41248 = state_39696__$1;
(statearr_39698_41248[(2)] = null);

(statearr_39698_41248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (2))){
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39696__$1,(4),jobs);
} else {
if((state_val_39697 === (3))){
var inst_39694 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39696__$1,inst_39694);
} else {
if((state_val_39697 === (4))){
var inst_39686 = (state_39696[(2)]);
var inst_39687 = process(inst_39686);
var state_39696__$1 = state_39696;
if(cljs.core.truth_(inst_39687)){
var statearr_39699_41251 = state_39696__$1;
(statearr_39699_41251[(1)] = (5));

} else {
var statearr_39700_41252 = state_39696__$1;
(statearr_39700_41252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (5))){
var state_39696__$1 = state_39696;
var statearr_39701_41253 = state_39696__$1;
(statearr_39701_41253[(2)] = null);

(statearr_39701_41253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (6))){
var state_39696__$1 = state_39696;
var statearr_39702_41254 = state_39696__$1;
(statearr_39702_41254[(2)] = null);

(statearr_39702_41254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (7))){
var inst_39692 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
var statearr_39703_41255 = state_39696__$1;
(statearr_39703_41255[(2)] = inst_39692);

(statearr_39703_41255[(1)] = (3));


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
});})(__41243,c__27964__auto___41247,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async))
;
return ((function (__41243,switch__27872__auto__,c__27964__auto___41247,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0 = (function (){
var statearr_39705 = [null,null,null,null,null,null,null];
(statearr_39705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__);

(statearr_39705[(1)] = (1));

return statearr_39705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1 = (function (state_39696){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39696);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39706){var ex__27876__auto__ = e39706;
var statearr_39707_41256 = state_39696;
(statearr_39707_41256[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39696[(4)]))){
var statearr_39709_41257 = state_39696;
(statearr_39709_41257[(1)] = cljs.core.first((state_39696[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41258 = state_39696;
state_39696 = G__41258;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = function(state_39696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1.call(this,state_39696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__;
})()
;})(__41243,switch__27872__auto__,c__27964__auto___41247,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async))
})();
var state__27966__auto__ = (function (){var statearr_39710 = f__27965__auto__();
(statearr_39710[(6)] = c__27964__auto___41247);

return statearr_39710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
});})(__41243,c__27964__auto___41247,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async))
);


break;
case "async":
var c__27964__auto___41260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41243,c__27964__auto___41260,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async){
return (function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = ((function (__41243,c__27964__auto___41260,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async){
return (function (state_39724){
var state_val_39725 = (state_39724[(1)]);
if((state_val_39725 === (1))){
var state_39724__$1 = state_39724;
var statearr_39726_41262 = state_39724__$1;
(statearr_39726_41262[(2)] = null);

(statearr_39726_41262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (2))){
var state_39724__$1 = state_39724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39724__$1,(4),jobs);
} else {
if((state_val_39725 === (3))){
var inst_39722 = (state_39724[(2)]);
var state_39724__$1 = state_39724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39724__$1,inst_39722);
} else {
if((state_val_39725 === (4))){
var inst_39714 = (state_39724[(2)]);
var inst_39715 = async(inst_39714);
var state_39724__$1 = state_39724;
if(cljs.core.truth_(inst_39715)){
var statearr_39727_41263 = state_39724__$1;
(statearr_39727_41263[(1)] = (5));

} else {
var statearr_39728_41264 = state_39724__$1;
(statearr_39728_41264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (5))){
var state_39724__$1 = state_39724;
var statearr_39729_41265 = state_39724__$1;
(statearr_39729_41265[(2)] = null);

(statearr_39729_41265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (6))){
var state_39724__$1 = state_39724;
var statearr_39730_41266 = state_39724__$1;
(statearr_39730_41266[(2)] = null);

(statearr_39730_41266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (7))){
var inst_39720 = (state_39724[(2)]);
var state_39724__$1 = state_39724;
var statearr_39731_41267 = state_39724__$1;
(statearr_39731_41267[(2)] = inst_39720);

(statearr_39731_41267[(1)] = (3));


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
});})(__41243,c__27964__auto___41260,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async))
;
return ((function (__41243,switch__27872__auto__,c__27964__auto___41260,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0 = (function (){
var statearr_39732 = [null,null,null,null,null,null,null];
(statearr_39732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__);

(statearr_39732[(1)] = (1));

return statearr_39732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1 = (function (state_39724){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39724);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39733){var ex__27876__auto__ = e39733;
var statearr_39734_41269 = state_39724;
(statearr_39734_41269[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39724[(4)]))){
var statearr_39735_41270 = state_39724;
(statearr_39735_41270[(1)] = cljs.core.first((state_39724[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41271 = state_39724;
state_39724 = G__41271;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = function(state_39724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1.call(this,state_39724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__;
})()
;})(__41243,switch__27872__auto__,c__27964__auto___41260,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async))
})();
var state__27966__auto__ = (function (){var statearr_39742 = f__27965__auto__();
(statearr_39742[(6)] = c__27964__auto___41260);

return statearr_39742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
});})(__41243,c__27964__auto___41260,G__39683_41244,G__39683_41245__$1,n__4613__auto___41242,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39683_41245__$1)].join('')));

}

var G__41272 = (__41243 + (1));
__41243 = G__41272;
continue;
} else {
}
break;
}

var c__27964__auto___41273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_39769){
var state_val_39770 = (state_39769[(1)]);
if((state_val_39770 === (7))){
var inst_39765 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39771_41274 = state_39769__$1;
(statearr_39771_41274[(2)] = inst_39765);

(statearr_39771_41274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (1))){
var state_39769__$1 = state_39769;
var statearr_39773_41279 = state_39769__$1;
(statearr_39773_41279[(2)] = null);

(statearr_39773_41279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (4))){
var inst_39747 = (state_39769[(7)]);
var inst_39747__$1 = (state_39769[(2)]);
var inst_39748 = (inst_39747__$1 == null);
var state_39769__$1 = (function (){var statearr_39776 = state_39769;
(statearr_39776[(7)] = inst_39747__$1);

return statearr_39776;
})();
if(cljs.core.truth_(inst_39748)){
var statearr_39777_41280 = state_39769__$1;
(statearr_39777_41280[(1)] = (5));

} else {
var statearr_39778_41281 = state_39769__$1;
(statearr_39778_41281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (6))){
var inst_39747 = (state_39769[(7)]);
var inst_39755 = (state_39769[(8)]);
var inst_39755__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39757 = [inst_39747,inst_39755__$1];
var inst_39758 = (new cljs.core.PersistentVector(null,2,(5),inst_39756,inst_39757,null));
var state_39769__$1 = (function (){var statearr_39780 = state_39769;
(statearr_39780[(8)] = inst_39755__$1);

return statearr_39780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39769__$1,(8),jobs,inst_39758);
} else {
if((state_val_39770 === (3))){
var inst_39767 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39769__$1,inst_39767);
} else {
if((state_val_39770 === (2))){
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39769__$1,(4),from);
} else {
if((state_val_39770 === (9))){
var inst_39762 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39783 = state_39769;
(statearr_39783[(9)] = inst_39762);

return statearr_39783;
})();
var statearr_39784_41282 = state_39769__$1;
(statearr_39784_41282[(2)] = null);

(statearr_39784_41282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (5))){
var inst_39753 = cljs.core.async.close_BANG_(jobs);
var state_39769__$1 = state_39769;
var statearr_39785_41283 = state_39769__$1;
(statearr_39785_41283[(2)] = inst_39753);

(statearr_39785_41283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (8))){
var inst_39755 = (state_39769[(8)]);
var inst_39760 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39788 = state_39769;
(statearr_39788[(10)] = inst_39760);

return statearr_39788;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39769__$1,(9),results,inst_39755);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0 = (function (){
var statearr_39789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__);

(statearr_39789[(1)] = (1));

return statearr_39789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1 = (function (state_39769){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39769);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39790){var ex__27876__auto__ = e39790;
var statearr_39791_41284 = state_39769;
(statearr_39791_41284[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39769[(4)]))){
var statearr_39792_41285 = state_39769;
(statearr_39792_41285[(1)] = cljs.core.first((state_39769[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41287 = state_39769;
state_39769 = G__41287;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = function(state_39769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1.call(this,state_39769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_39793 = f__27965__auto__();
(statearr_39793[(6)] = c__27964__auto___41273);

return statearr_39793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


var c__27964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_39835){
var state_val_39836 = (state_39835[(1)]);
if((state_val_39836 === (7))){
var inst_39831 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39837_41289 = state_39835__$1;
(statearr_39837_41289[(2)] = inst_39831);

(statearr_39837_41289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (20))){
var state_39835__$1 = state_39835;
var statearr_39841_41290 = state_39835__$1;
(statearr_39841_41290[(2)] = null);

(statearr_39841_41290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (1))){
var state_39835__$1 = state_39835;
var statearr_39842_41291 = state_39835__$1;
(statearr_39842_41291[(2)] = null);

(statearr_39842_41291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (4))){
var inst_39796 = (state_39835[(7)]);
var inst_39796__$1 = (state_39835[(2)]);
var inst_39797 = (inst_39796__$1 == null);
var state_39835__$1 = (function (){var statearr_39846 = state_39835;
(statearr_39846[(7)] = inst_39796__$1);

return statearr_39846;
})();
if(cljs.core.truth_(inst_39797)){
var statearr_39847_41292 = state_39835__$1;
(statearr_39847_41292[(1)] = (5));

} else {
var statearr_39848_41293 = state_39835__$1;
(statearr_39848_41293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (15))){
var inst_39809 = (state_39835[(8)]);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39835__$1,(18),to,inst_39809);
} else {
if((state_val_39836 === (21))){
var inst_39826 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39849_41294 = state_39835__$1;
(statearr_39849_41294[(2)] = inst_39826);

(statearr_39849_41294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (13))){
var inst_39828 = (state_39835[(2)]);
var state_39835__$1 = (function (){var statearr_39850 = state_39835;
(statearr_39850[(9)] = inst_39828);

return statearr_39850;
})();
var statearr_39851_41295 = state_39835__$1;
(statearr_39851_41295[(2)] = null);

(statearr_39851_41295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (6))){
var inst_39796 = (state_39835[(7)]);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39835__$1,(11),inst_39796);
} else {
if((state_val_39836 === (17))){
var inst_39821 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39821)){
var statearr_39852_41296 = state_39835__$1;
(statearr_39852_41296[(1)] = (19));

} else {
var statearr_39853_41301 = state_39835__$1;
(statearr_39853_41301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (3))){
var inst_39833 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39835__$1,inst_39833);
} else {
if((state_val_39836 === (12))){
var inst_39806 = (state_39835[(10)]);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39835__$1,(14),inst_39806);
} else {
if((state_val_39836 === (2))){
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39835__$1,(4),results);
} else {
if((state_val_39836 === (19))){
var state_39835__$1 = state_39835;
var statearr_39856_41305 = state_39835__$1;
(statearr_39856_41305[(2)] = null);

(statearr_39856_41305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (11))){
var inst_39806 = (state_39835[(2)]);
var state_39835__$1 = (function (){var statearr_39857 = state_39835;
(statearr_39857[(10)] = inst_39806);

return statearr_39857;
})();
var statearr_39859_41306 = state_39835__$1;
(statearr_39859_41306[(2)] = null);

(statearr_39859_41306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (9))){
var state_39835__$1 = state_39835;
var statearr_39860_41310 = state_39835__$1;
(statearr_39860_41310[(2)] = null);

(statearr_39860_41310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (5))){
var state_39835__$1 = state_39835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39861_41311 = state_39835__$1;
(statearr_39861_41311[(1)] = (8));

} else {
var statearr_39862_41312 = state_39835__$1;
(statearr_39862_41312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (14))){
var inst_39809 = (state_39835[(8)]);
var inst_39809__$1 = (state_39835[(2)]);
var inst_39814 = (inst_39809__$1 == null);
var inst_39815 = cljs.core.not(inst_39814);
var state_39835__$1 = (function (){var statearr_39863 = state_39835;
(statearr_39863[(8)] = inst_39809__$1);

return statearr_39863;
})();
if(inst_39815){
var statearr_39864_41316 = state_39835__$1;
(statearr_39864_41316[(1)] = (15));

} else {
var statearr_39865_41317 = state_39835__$1;
(statearr_39865_41317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (16))){
var state_39835__$1 = state_39835;
var statearr_39866_41318 = state_39835__$1;
(statearr_39866_41318[(2)] = false);

(statearr_39866_41318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (10))){
var inst_39803 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39867_41322 = state_39835__$1;
(statearr_39867_41322[(2)] = inst_39803);

(statearr_39867_41322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (18))){
var inst_39818 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39868_41323 = state_39835__$1;
(statearr_39868_41323[(2)] = inst_39818);

(statearr_39868_41323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (8))){
var inst_39800 = cljs.core.async.close_BANG_(to);
var state_39835__$1 = state_39835;
var statearr_39869_41324 = state_39835__$1;
(statearr_39869_41324[(2)] = inst_39800);

(statearr_39869_41324[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0 = (function (){
var statearr_39871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__);

(statearr_39871[(1)] = (1));

return statearr_39871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1 = (function (state_39835){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39835);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39872){var ex__27876__auto__ = e39872;
var statearr_39873_41332 = state_39835;
(statearr_39873_41332[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39835[(4)]))){
var statearr_39874_41333 = state_39835;
(statearr_39874_41333[(1)] = cljs.core.first((state_39835[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41334 = state_39835;
state_39835 = G__41334;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__ = function(state_39835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1.call(this,state_39835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_39875 = f__27965__auto__();
(statearr_39875[(6)] = c__27964__auto__);

return statearr_39875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));

return c__27964__auto__;
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
var G__39877 = arguments.length;
switch (G__39877) {
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
var G__39879 = arguments.length;
switch (G__39879) {
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
var G__39881 = arguments.length;
switch (G__39881) {
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
var c__27964__auto___41348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_39907){
var state_val_39908 = (state_39907[(1)]);
if((state_val_39908 === (7))){
var inst_39903 = (state_39907[(2)]);
var state_39907__$1 = state_39907;
var statearr_39909_41349 = state_39907__$1;
(statearr_39909_41349[(2)] = inst_39903);

(statearr_39909_41349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (1))){
var state_39907__$1 = state_39907;
var statearr_39910_41350 = state_39907__$1;
(statearr_39910_41350[(2)] = null);

(statearr_39910_41350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (4))){
var inst_39884 = (state_39907[(7)]);
var inst_39884__$1 = (state_39907[(2)]);
var inst_39885 = (inst_39884__$1 == null);
var state_39907__$1 = (function (){var statearr_39911 = state_39907;
(statearr_39911[(7)] = inst_39884__$1);

return statearr_39911;
})();
if(cljs.core.truth_(inst_39885)){
var statearr_39912_41351 = state_39907__$1;
(statearr_39912_41351[(1)] = (5));

} else {
var statearr_39913_41352 = state_39907__$1;
(statearr_39913_41352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (13))){
var state_39907__$1 = state_39907;
var statearr_39914_41353 = state_39907__$1;
(statearr_39914_41353[(2)] = null);

(statearr_39914_41353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (6))){
var inst_39884 = (state_39907[(7)]);
var inst_39890 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39884) : p.call(null,inst_39884));
var state_39907__$1 = state_39907;
if(cljs.core.truth_(inst_39890)){
var statearr_39915_41354 = state_39907__$1;
(statearr_39915_41354[(1)] = (9));

} else {
var statearr_39916_41355 = state_39907__$1;
(statearr_39916_41355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (3))){
var inst_39905 = (state_39907[(2)]);
var state_39907__$1 = state_39907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39907__$1,inst_39905);
} else {
if((state_val_39908 === (12))){
var state_39907__$1 = state_39907;
var statearr_39917_41356 = state_39907__$1;
(statearr_39917_41356[(2)] = null);

(statearr_39917_41356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (2))){
var state_39907__$1 = state_39907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39907__$1,(4),ch);
} else {
if((state_val_39908 === (11))){
var inst_39884 = (state_39907[(7)]);
var inst_39894 = (state_39907[(2)]);
var state_39907__$1 = state_39907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39907__$1,(8),inst_39894,inst_39884);
} else {
if((state_val_39908 === (9))){
var state_39907__$1 = state_39907;
var statearr_39918_41357 = state_39907__$1;
(statearr_39918_41357[(2)] = tc);

(statearr_39918_41357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (5))){
var inst_39887 = cljs.core.async.close_BANG_(tc);
var inst_39888 = cljs.core.async.close_BANG_(fc);
var state_39907__$1 = (function (){var statearr_39919 = state_39907;
(statearr_39919[(8)] = inst_39887);

return statearr_39919;
})();
var statearr_39920_41358 = state_39907__$1;
(statearr_39920_41358[(2)] = inst_39888);

(statearr_39920_41358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (14))){
var inst_39901 = (state_39907[(2)]);
var state_39907__$1 = state_39907;
var statearr_39924_41359 = state_39907__$1;
(statearr_39924_41359[(2)] = inst_39901);

(statearr_39924_41359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (10))){
var state_39907__$1 = state_39907;
var statearr_39925_41360 = state_39907__$1;
(statearr_39925_41360[(2)] = fc);

(statearr_39925_41360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39908 === (8))){
var inst_39896 = (state_39907[(2)]);
var state_39907__$1 = state_39907;
if(cljs.core.truth_(inst_39896)){
var statearr_39926_41361 = state_39907__$1;
(statearr_39926_41361[(1)] = (12));

} else {
var statearr_39927_41362 = state_39907__$1;
(statearr_39927_41362[(1)] = (13));

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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_39931 = [null,null,null,null,null,null,null,null,null];
(statearr_39931[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_39931[(1)] = (1));

return statearr_39931;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_39907){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39907);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39932){var ex__27876__auto__ = e39932;
var statearr_39933_41363 = state_39907;
(statearr_39933_41363[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39907[(4)]))){
var statearr_39934_41364 = state_39907;
(statearr_39934_41364[(1)] = cljs.core.first((state_39907[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41365 = state_39907;
state_39907 = G__41365;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_39907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_39907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_39935 = f__27965__auto__();
(statearr_39935[(6)] = c__27964__auto___41348);

return statearr_39935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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
var c__27964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_39957){
var state_val_39958 = (state_39957[(1)]);
if((state_val_39958 === (7))){
var inst_39953 = (state_39957[(2)]);
var state_39957__$1 = state_39957;
var statearr_39963_41366 = state_39957__$1;
(statearr_39963_41366[(2)] = inst_39953);

(statearr_39963_41366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (1))){
var inst_39936 = init;
var inst_39937 = inst_39936;
var state_39957__$1 = (function (){var statearr_39964 = state_39957;
(statearr_39964[(7)] = inst_39937);

return statearr_39964;
})();
var statearr_39965_41368 = state_39957__$1;
(statearr_39965_41368[(2)] = null);

(statearr_39965_41368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (4))){
var inst_39940 = (state_39957[(8)]);
var inst_39940__$1 = (state_39957[(2)]);
var inst_39941 = (inst_39940__$1 == null);
var state_39957__$1 = (function (){var statearr_39981 = state_39957;
(statearr_39981[(8)] = inst_39940__$1);

return statearr_39981;
})();
if(cljs.core.truth_(inst_39941)){
var statearr_39982_41371 = state_39957__$1;
(statearr_39982_41371[(1)] = (5));

} else {
var statearr_39983_41372 = state_39957__$1;
(statearr_39983_41372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (6))){
var inst_39944 = (state_39957[(9)]);
var inst_39940 = (state_39957[(8)]);
var inst_39937 = (state_39957[(7)]);
var inst_39944__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39937,inst_39940) : f.call(null,inst_39937,inst_39940));
var inst_39945 = cljs.core.reduced_QMARK_(inst_39944__$1);
var state_39957__$1 = (function (){var statearr_39987 = state_39957;
(statearr_39987[(9)] = inst_39944__$1);

return statearr_39987;
})();
if(inst_39945){
var statearr_39988_41377 = state_39957__$1;
(statearr_39988_41377[(1)] = (8));

} else {
var statearr_39989_41378 = state_39957__$1;
(statearr_39989_41378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (3))){
var inst_39955 = (state_39957[(2)]);
var state_39957__$1 = state_39957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39957__$1,inst_39955);
} else {
if((state_val_39958 === (2))){
var state_39957__$1 = state_39957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39957__$1,(4),ch);
} else {
if((state_val_39958 === (9))){
var inst_39944 = (state_39957[(9)]);
var inst_39937 = inst_39944;
var state_39957__$1 = (function (){var statearr_39990 = state_39957;
(statearr_39990[(7)] = inst_39937);

return statearr_39990;
})();
var statearr_39991_41381 = state_39957__$1;
(statearr_39991_41381[(2)] = null);

(statearr_39991_41381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (5))){
var inst_39937 = (state_39957[(7)]);
var state_39957__$1 = state_39957;
var statearr_39992_41382 = state_39957__$1;
(statearr_39992_41382[(2)] = inst_39937);

(statearr_39992_41382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (10))){
var inst_39951 = (state_39957[(2)]);
var state_39957__$1 = state_39957;
var statearr_39993_41383 = state_39957__$1;
(statearr_39993_41383[(2)] = inst_39951);

(statearr_39993_41383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39958 === (8))){
var inst_39944 = (state_39957[(9)]);
var inst_39947 = cljs.core.deref(inst_39944);
var state_39957__$1 = state_39957;
var statearr_39994_41384 = state_39957__$1;
(statearr_39994_41384[(2)] = inst_39947);

(statearr_39994_41384[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27873__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27873__auto____0 = (function (){
var statearr_39995 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39995[(0)] = cljs$core$async$reduce_$_state_machine__27873__auto__);

(statearr_39995[(1)] = (1));

return statearr_39995;
});
var cljs$core$async$reduce_$_state_machine__27873__auto____1 = (function (state_39957){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_39957);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e39996){var ex__27876__auto__ = e39996;
var statearr_39997_41385 = state_39957;
(statearr_39997_41385[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_39957[(4)]))){
var statearr_39998_41386 = state_39957;
(statearr_39998_41386[(1)] = cljs.core.first((state_39957[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41387 = state_39957;
state_39957 = G__41387;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27873__auto__ = function(state_39957){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27873__auto____1.call(this,state_39957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27873__auto____0;
cljs$core$async$reduce_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27873__auto____1;
return cljs$core$async$reduce_$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_39999 = f__27965__auto__();
(statearr_39999[(6)] = c__27964__auto__);

return statearr_39999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));

return c__27964__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40005){
var state_val_40006 = (state_40005[(1)]);
if((state_val_40006 === (1))){
var inst_40000 = cljs.core.async.reduce(f__$1,init,ch);
var state_40005__$1 = state_40005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40005__$1,(2),inst_40000);
} else {
if((state_val_40006 === (2))){
var inst_40002 = (state_40005[(2)]);
var inst_40003 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40002) : f__$1.call(null,inst_40002));
var state_40005__$1 = state_40005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40005__$1,inst_40003);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27873__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27873__auto____0 = (function (){
var statearr_40007 = [null,null,null,null,null,null,null];
(statearr_40007[(0)] = cljs$core$async$transduce_$_state_machine__27873__auto__);

(statearr_40007[(1)] = (1));

return statearr_40007;
});
var cljs$core$async$transduce_$_state_machine__27873__auto____1 = (function (state_40005){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40005);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40010){var ex__27876__auto__ = e40010;
var statearr_40011_41396 = state_40005;
(statearr_40011_41396[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40005[(4)]))){
var statearr_40012_41397 = state_40005;
(statearr_40012_41397[(1)] = cljs.core.first((state_40005[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41398 = state_40005;
state_40005 = G__41398;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27873__auto__ = function(state_40005){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27873__auto____1.call(this,state_40005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27873__auto____0;
cljs$core$async$transduce_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27873__auto____1;
return cljs$core$async$transduce_$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40016 = f__27965__auto__();
(statearr_40016[(6)] = c__27964__auto__);

return statearr_40016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));

return c__27964__auto__;
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
var G__40018 = arguments.length;
switch (G__40018) {
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
var c__27964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40045){
var state_val_40046 = (state_40045[(1)]);
if((state_val_40046 === (7))){
var inst_40027 = (state_40045[(2)]);
var state_40045__$1 = state_40045;
var statearr_40047_41413 = state_40045__$1;
(statearr_40047_41413[(2)] = inst_40027);

(statearr_40047_41413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (1))){
var inst_40021 = cljs.core.seq(coll);
var inst_40022 = inst_40021;
var state_40045__$1 = (function (){var statearr_40048 = state_40045;
(statearr_40048[(7)] = inst_40022);

return statearr_40048;
})();
var statearr_40049_41414 = state_40045__$1;
(statearr_40049_41414[(2)] = null);

(statearr_40049_41414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (4))){
var inst_40022 = (state_40045[(7)]);
var inst_40025 = cljs.core.first(inst_40022);
var state_40045__$1 = state_40045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40045__$1,(7),ch,inst_40025);
} else {
if((state_val_40046 === (13))){
var inst_40039 = (state_40045[(2)]);
var state_40045__$1 = state_40045;
var statearr_40050_41415 = state_40045__$1;
(statearr_40050_41415[(2)] = inst_40039);

(statearr_40050_41415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (6))){
var inst_40030 = (state_40045[(2)]);
var state_40045__$1 = state_40045;
if(cljs.core.truth_(inst_40030)){
var statearr_40051_41416 = state_40045__$1;
(statearr_40051_41416[(1)] = (8));

} else {
var statearr_40052_41417 = state_40045__$1;
(statearr_40052_41417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (3))){
var inst_40043 = (state_40045[(2)]);
var state_40045__$1 = state_40045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40045__$1,inst_40043);
} else {
if((state_val_40046 === (12))){
var state_40045__$1 = state_40045;
var statearr_40053_41418 = state_40045__$1;
(statearr_40053_41418[(2)] = null);

(statearr_40053_41418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (2))){
var inst_40022 = (state_40045[(7)]);
var state_40045__$1 = state_40045;
if(cljs.core.truth_(inst_40022)){
var statearr_40054_41419 = state_40045__$1;
(statearr_40054_41419[(1)] = (4));

} else {
var statearr_40055_41420 = state_40045__$1;
(statearr_40055_41420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (11))){
var inst_40036 = cljs.core.async.close_BANG_(ch);
var state_40045__$1 = state_40045;
var statearr_40056_41421 = state_40045__$1;
(statearr_40056_41421[(2)] = inst_40036);

(statearr_40056_41421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (9))){
var state_40045__$1 = state_40045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40057_41422 = state_40045__$1;
(statearr_40057_41422[(1)] = (11));

} else {
var statearr_40058_41423 = state_40045__$1;
(statearr_40058_41423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (5))){
var inst_40022 = (state_40045[(7)]);
var state_40045__$1 = state_40045;
var statearr_40059_41430 = state_40045__$1;
(statearr_40059_41430[(2)] = inst_40022);

(statearr_40059_41430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (10))){
var inst_40041 = (state_40045[(2)]);
var state_40045__$1 = state_40045;
var statearr_40060_41431 = state_40045__$1;
(statearr_40060_41431[(2)] = inst_40041);

(statearr_40060_41431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40046 === (8))){
var inst_40022 = (state_40045[(7)]);
var inst_40032 = cljs.core.next(inst_40022);
var inst_40022__$1 = inst_40032;
var state_40045__$1 = (function (){var statearr_40062 = state_40045;
(statearr_40062[(7)] = inst_40022__$1);

return statearr_40062;
})();
var statearr_40063_41432 = state_40045__$1;
(statearr_40063_41432[(2)] = null);

(statearr_40063_41432[(1)] = (2));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_40103 = [null,null,null,null,null,null,null,null];
(statearr_40103[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_40103[(1)] = (1));

return statearr_40103;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_40045){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40045);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40107){var ex__27876__auto__ = e40107;
var statearr_40108_41433 = state_40045;
(statearr_40108_41433[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40045[(4)]))){
var statearr_40113_41434 = state_40045;
(statearr_40113_41434[(1)] = cljs.core.first((state_40045[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41435 = state_40045;
state_40045 = G__41435;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_40045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_40045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40114 = f__27965__auto__();
(statearr_40114[(6)] = c__27964__auto__);

return statearr_40114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));

return c__27964__auto__;
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
var G__40117 = arguments.length;
switch (G__40117) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_41443 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_41443(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41444 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_41444(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41445 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_41445(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41452 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_41452(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40140 = (function (ch,cs,meta40141){
this.ch = ch;
this.cs = cs;
this.meta40141 = meta40141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40142,meta40141__$1){
var self__ = this;
var _40142__$1 = this;
return (new cljs.core.async.t_cljs$core$async40140(self__.ch,self__.cs,meta40141__$1));
}));

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40142){
var self__ = this;
var _40142__$1 = this;
return self__.meta40141;
}));

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40140.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40141","meta40141",1803386258,null)], null);
}));

(cljs.core.async.t_cljs$core$async40140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40140");

(cljs.core.async.t_cljs$core$async40140.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40140.
 */
cljs.core.async.__GT_t_cljs$core$async40140 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40140(ch__$1,cs__$1,meta40141){
return (new cljs.core.async.t_cljs$core$async40140(ch__$1,cs__$1,meta40141));
});

}

return (new cljs.core.async.t_cljs$core$async40140(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27964__auto___41453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40275){
var state_val_40276 = (state_40275[(1)]);
if((state_val_40276 === (7))){
var inst_40271 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40277_41454 = state_40275__$1;
(statearr_40277_41454[(2)] = inst_40271);

(statearr_40277_41454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (20))){
var inst_40176 = (state_40275[(7)]);
var inst_40188 = cljs.core.first(inst_40176);
var inst_40189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40188,(0),null);
var inst_40190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40188,(1),null);
var state_40275__$1 = (function (){var statearr_40278 = state_40275;
(statearr_40278[(8)] = inst_40189);

return statearr_40278;
})();
if(cljs.core.truth_(inst_40190)){
var statearr_40279_41455 = state_40275__$1;
(statearr_40279_41455[(1)] = (22));

} else {
var statearr_40280_41456 = state_40275__$1;
(statearr_40280_41456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (27))){
var inst_40218 = (state_40275[(9)]);
var inst_40220 = (state_40275[(10)]);
var inst_40145 = (state_40275[(11)]);
var inst_40225 = (state_40275[(12)]);
var inst_40225__$1 = cljs.core._nth(inst_40218,inst_40220);
var inst_40226 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40225__$1,inst_40145,done);
var state_40275__$1 = (function (){var statearr_40281 = state_40275;
(statearr_40281[(12)] = inst_40225__$1);

return statearr_40281;
})();
if(cljs.core.truth_(inst_40226)){
var statearr_40282_41457 = state_40275__$1;
(statearr_40282_41457[(1)] = (30));

} else {
var statearr_40283_41458 = state_40275__$1;
(statearr_40283_41458[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (1))){
var state_40275__$1 = state_40275;
var statearr_40284_41459 = state_40275__$1;
(statearr_40284_41459[(2)] = null);

(statearr_40284_41459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (24))){
var inst_40176 = (state_40275[(7)]);
var inst_40195 = (state_40275[(2)]);
var inst_40196 = cljs.core.next(inst_40176);
var inst_40154 = inst_40196;
var inst_40155 = null;
var inst_40156 = (0);
var inst_40157 = (0);
var state_40275__$1 = (function (){var statearr_40285 = state_40275;
(statearr_40285[(13)] = inst_40195);

(statearr_40285[(14)] = inst_40155);

(statearr_40285[(15)] = inst_40154);

(statearr_40285[(16)] = inst_40156);

(statearr_40285[(17)] = inst_40157);

return statearr_40285;
})();
var statearr_40286_41461 = state_40275__$1;
(statearr_40286_41461[(2)] = null);

(statearr_40286_41461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (39))){
var state_40275__$1 = state_40275;
var statearr_40290_41462 = state_40275__$1;
(statearr_40290_41462[(2)] = null);

(statearr_40290_41462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (4))){
var inst_40145 = (state_40275[(11)]);
var inst_40145__$1 = (state_40275[(2)]);
var inst_40146 = (inst_40145__$1 == null);
var state_40275__$1 = (function (){var statearr_40291 = state_40275;
(statearr_40291[(11)] = inst_40145__$1);

return statearr_40291;
})();
if(cljs.core.truth_(inst_40146)){
var statearr_40292_41467 = state_40275__$1;
(statearr_40292_41467[(1)] = (5));

} else {
var statearr_40293_41468 = state_40275__$1;
(statearr_40293_41468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (15))){
var inst_40155 = (state_40275[(14)]);
var inst_40154 = (state_40275[(15)]);
var inst_40156 = (state_40275[(16)]);
var inst_40157 = (state_40275[(17)]);
var inst_40172 = (state_40275[(2)]);
var inst_40173 = (inst_40157 + (1));
var tmp40287 = inst_40155;
var tmp40288 = inst_40154;
var tmp40289 = inst_40156;
var inst_40154__$1 = tmp40288;
var inst_40155__$1 = tmp40287;
var inst_40156__$1 = tmp40289;
var inst_40157__$1 = inst_40173;
var state_40275__$1 = (function (){var statearr_40294 = state_40275;
(statearr_40294[(14)] = inst_40155__$1);

(statearr_40294[(15)] = inst_40154__$1);

(statearr_40294[(18)] = inst_40172);

(statearr_40294[(16)] = inst_40156__$1);

(statearr_40294[(17)] = inst_40157__$1);

return statearr_40294;
})();
var statearr_40295_41469 = state_40275__$1;
(statearr_40295_41469[(2)] = null);

(statearr_40295_41469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (21))){
var inst_40199 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40299_41470 = state_40275__$1;
(statearr_40299_41470[(2)] = inst_40199);

(statearr_40299_41470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (31))){
var inst_40225 = (state_40275[(12)]);
var inst_40229 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40225);
var state_40275__$1 = state_40275;
var statearr_40300_41471 = state_40275__$1;
(statearr_40300_41471[(2)] = inst_40229);

(statearr_40300_41471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (32))){
var inst_40219 = (state_40275[(19)]);
var inst_40218 = (state_40275[(9)]);
var inst_40220 = (state_40275[(10)]);
var inst_40217 = (state_40275[(20)]);
var inst_40231 = (state_40275[(2)]);
var inst_40232 = (inst_40220 + (1));
var tmp40296 = inst_40219;
var tmp40297 = inst_40218;
var tmp40298 = inst_40217;
var inst_40217__$1 = tmp40298;
var inst_40218__$1 = tmp40297;
var inst_40219__$1 = tmp40296;
var inst_40220__$1 = inst_40232;
var state_40275__$1 = (function (){var statearr_40301 = state_40275;
(statearr_40301[(19)] = inst_40219__$1);

(statearr_40301[(21)] = inst_40231);

(statearr_40301[(9)] = inst_40218__$1);

(statearr_40301[(10)] = inst_40220__$1);

(statearr_40301[(20)] = inst_40217__$1);

return statearr_40301;
})();
var statearr_40302_41472 = state_40275__$1;
(statearr_40302_41472[(2)] = null);

(statearr_40302_41472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (40))){
var inst_40244 = (state_40275[(22)]);
var inst_40248 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40244);
var state_40275__$1 = state_40275;
var statearr_40303_41474 = state_40275__$1;
(statearr_40303_41474[(2)] = inst_40248);

(statearr_40303_41474[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (33))){
var inst_40235 = (state_40275[(23)]);
var inst_40237 = cljs.core.chunked_seq_QMARK_(inst_40235);
var state_40275__$1 = state_40275;
if(inst_40237){
var statearr_40304_41476 = state_40275__$1;
(statearr_40304_41476[(1)] = (36));

} else {
var statearr_40305_41477 = state_40275__$1;
(statearr_40305_41477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (13))){
var inst_40166 = (state_40275[(24)]);
var inst_40169 = cljs.core.async.close_BANG_(inst_40166);
var state_40275__$1 = state_40275;
var statearr_40306_41478 = state_40275__$1;
(statearr_40306_41478[(2)] = inst_40169);

(statearr_40306_41478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (22))){
var inst_40189 = (state_40275[(8)]);
var inst_40192 = cljs.core.async.close_BANG_(inst_40189);
var state_40275__$1 = state_40275;
var statearr_40307_41479 = state_40275__$1;
(statearr_40307_41479[(2)] = inst_40192);

(statearr_40307_41479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (36))){
var inst_40235 = (state_40275[(23)]);
var inst_40239 = cljs.core.chunk_first(inst_40235);
var inst_40240 = cljs.core.chunk_rest(inst_40235);
var inst_40241 = cljs.core.count(inst_40239);
var inst_40217 = inst_40240;
var inst_40218 = inst_40239;
var inst_40219 = inst_40241;
var inst_40220 = (0);
var state_40275__$1 = (function (){var statearr_40308 = state_40275;
(statearr_40308[(19)] = inst_40219);

(statearr_40308[(9)] = inst_40218);

(statearr_40308[(10)] = inst_40220);

(statearr_40308[(20)] = inst_40217);

return statearr_40308;
})();
var statearr_40309_41481 = state_40275__$1;
(statearr_40309_41481[(2)] = null);

(statearr_40309_41481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (41))){
var inst_40235 = (state_40275[(23)]);
var inst_40250 = (state_40275[(2)]);
var inst_40251 = cljs.core.next(inst_40235);
var inst_40217 = inst_40251;
var inst_40218 = null;
var inst_40219 = (0);
var inst_40220 = (0);
var state_40275__$1 = (function (){var statearr_40310 = state_40275;
(statearr_40310[(25)] = inst_40250);

(statearr_40310[(19)] = inst_40219);

(statearr_40310[(9)] = inst_40218);

(statearr_40310[(10)] = inst_40220);

(statearr_40310[(20)] = inst_40217);

return statearr_40310;
})();
var statearr_40311_41483 = state_40275__$1;
(statearr_40311_41483[(2)] = null);

(statearr_40311_41483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (43))){
var state_40275__$1 = state_40275;
var statearr_40312_41484 = state_40275__$1;
(statearr_40312_41484[(2)] = null);

(statearr_40312_41484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (29))){
var inst_40259 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40313_41485 = state_40275__$1;
(statearr_40313_41485[(2)] = inst_40259);

(statearr_40313_41485[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (44))){
var inst_40268 = (state_40275[(2)]);
var state_40275__$1 = (function (){var statearr_40314 = state_40275;
(statearr_40314[(26)] = inst_40268);

return statearr_40314;
})();
var statearr_40315_41486 = state_40275__$1;
(statearr_40315_41486[(2)] = null);

(statearr_40315_41486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (6))){
var inst_40209 = (state_40275[(27)]);
var inst_40208 = cljs.core.deref(cs);
var inst_40209__$1 = cljs.core.keys(inst_40208);
var inst_40210 = cljs.core.count(inst_40209__$1);
var inst_40211 = cljs.core.reset_BANG_(dctr,inst_40210);
var inst_40216 = cljs.core.seq(inst_40209__$1);
var inst_40217 = inst_40216;
var inst_40218 = null;
var inst_40219 = (0);
var inst_40220 = (0);
var state_40275__$1 = (function (){var statearr_40316 = state_40275;
(statearr_40316[(19)] = inst_40219);

(statearr_40316[(9)] = inst_40218);

(statearr_40316[(10)] = inst_40220);

(statearr_40316[(27)] = inst_40209__$1);

(statearr_40316[(20)] = inst_40217);

(statearr_40316[(28)] = inst_40211);

return statearr_40316;
})();
var statearr_40317_41487 = state_40275__$1;
(statearr_40317_41487[(2)] = null);

(statearr_40317_41487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (28))){
var inst_40235 = (state_40275[(23)]);
var inst_40217 = (state_40275[(20)]);
var inst_40235__$1 = cljs.core.seq(inst_40217);
var state_40275__$1 = (function (){var statearr_40318 = state_40275;
(statearr_40318[(23)] = inst_40235__$1);

return statearr_40318;
})();
if(inst_40235__$1){
var statearr_40319_41488 = state_40275__$1;
(statearr_40319_41488[(1)] = (33));

} else {
var statearr_40320_41489 = state_40275__$1;
(statearr_40320_41489[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (25))){
var inst_40219 = (state_40275[(19)]);
var inst_40220 = (state_40275[(10)]);
var inst_40222 = (inst_40220 < inst_40219);
var inst_40223 = inst_40222;
var state_40275__$1 = state_40275;
if(cljs.core.truth_(inst_40223)){
var statearr_40321_41491 = state_40275__$1;
(statearr_40321_41491[(1)] = (27));

} else {
var statearr_40322_41492 = state_40275__$1;
(statearr_40322_41492[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (34))){
var state_40275__$1 = state_40275;
var statearr_40323_41494 = state_40275__$1;
(statearr_40323_41494[(2)] = null);

(statearr_40323_41494[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (17))){
var state_40275__$1 = state_40275;
var statearr_40324_41495 = state_40275__$1;
(statearr_40324_41495[(2)] = null);

(statearr_40324_41495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (3))){
var inst_40273 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40275__$1,inst_40273);
} else {
if((state_val_40276 === (12))){
var inst_40204 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40325_41496 = state_40275__$1;
(statearr_40325_41496[(2)] = inst_40204);

(statearr_40325_41496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (2))){
var state_40275__$1 = state_40275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40275__$1,(4),ch);
} else {
if((state_val_40276 === (23))){
var state_40275__$1 = state_40275;
var statearr_40326_41497 = state_40275__$1;
(statearr_40326_41497[(2)] = null);

(statearr_40326_41497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (35))){
var inst_40257 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40327_41498 = state_40275__$1;
(statearr_40327_41498[(2)] = inst_40257);

(statearr_40327_41498[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (19))){
var inst_40176 = (state_40275[(7)]);
var inst_40180 = cljs.core.chunk_first(inst_40176);
var inst_40181 = cljs.core.chunk_rest(inst_40176);
var inst_40182 = cljs.core.count(inst_40180);
var inst_40154 = inst_40181;
var inst_40155 = inst_40180;
var inst_40156 = inst_40182;
var inst_40157 = (0);
var state_40275__$1 = (function (){var statearr_40328 = state_40275;
(statearr_40328[(14)] = inst_40155);

(statearr_40328[(15)] = inst_40154);

(statearr_40328[(16)] = inst_40156);

(statearr_40328[(17)] = inst_40157);

return statearr_40328;
})();
var statearr_40329_41499 = state_40275__$1;
(statearr_40329_41499[(2)] = null);

(statearr_40329_41499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (11))){
var inst_40176 = (state_40275[(7)]);
var inst_40154 = (state_40275[(15)]);
var inst_40176__$1 = cljs.core.seq(inst_40154);
var state_40275__$1 = (function (){var statearr_40330 = state_40275;
(statearr_40330[(7)] = inst_40176__$1);

return statearr_40330;
})();
if(inst_40176__$1){
var statearr_40331_41500 = state_40275__$1;
(statearr_40331_41500[(1)] = (16));

} else {
var statearr_40332_41501 = state_40275__$1;
(statearr_40332_41501[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (9))){
var inst_40206 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40333_41502 = state_40275__$1;
(statearr_40333_41502[(2)] = inst_40206);

(statearr_40333_41502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (5))){
var inst_40152 = cljs.core.deref(cs);
var inst_40153 = cljs.core.seq(inst_40152);
var inst_40154 = inst_40153;
var inst_40155 = null;
var inst_40156 = (0);
var inst_40157 = (0);
var state_40275__$1 = (function (){var statearr_40334 = state_40275;
(statearr_40334[(14)] = inst_40155);

(statearr_40334[(15)] = inst_40154);

(statearr_40334[(16)] = inst_40156);

(statearr_40334[(17)] = inst_40157);

return statearr_40334;
})();
var statearr_40335_41503 = state_40275__$1;
(statearr_40335_41503[(2)] = null);

(statearr_40335_41503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (14))){
var state_40275__$1 = state_40275;
var statearr_40336_41504 = state_40275__$1;
(statearr_40336_41504[(2)] = null);

(statearr_40336_41504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (45))){
var inst_40265 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40337_41505 = state_40275__$1;
(statearr_40337_41505[(2)] = inst_40265);

(statearr_40337_41505[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (26))){
var inst_40209 = (state_40275[(27)]);
var inst_40261 = (state_40275[(2)]);
var inst_40262 = cljs.core.seq(inst_40209);
var state_40275__$1 = (function (){var statearr_40338 = state_40275;
(statearr_40338[(29)] = inst_40261);

return statearr_40338;
})();
if(inst_40262){
var statearr_40339_41506 = state_40275__$1;
(statearr_40339_41506[(1)] = (42));

} else {
var statearr_40340_41507 = state_40275__$1;
(statearr_40340_41507[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (16))){
var inst_40176 = (state_40275[(7)]);
var inst_40178 = cljs.core.chunked_seq_QMARK_(inst_40176);
var state_40275__$1 = state_40275;
if(inst_40178){
var statearr_40341_41508 = state_40275__$1;
(statearr_40341_41508[(1)] = (19));

} else {
var statearr_40342_41509 = state_40275__$1;
(statearr_40342_41509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (38))){
var inst_40254 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40343_41511 = state_40275__$1;
(statearr_40343_41511[(2)] = inst_40254);

(statearr_40343_41511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (30))){
var state_40275__$1 = state_40275;
var statearr_40344_41512 = state_40275__$1;
(statearr_40344_41512[(2)] = null);

(statearr_40344_41512[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (10))){
var inst_40155 = (state_40275[(14)]);
var inst_40157 = (state_40275[(17)]);
var inst_40165 = cljs.core._nth(inst_40155,inst_40157);
var inst_40166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40165,(0),null);
var inst_40167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40165,(1),null);
var state_40275__$1 = (function (){var statearr_40345 = state_40275;
(statearr_40345[(24)] = inst_40166);

return statearr_40345;
})();
if(cljs.core.truth_(inst_40167)){
var statearr_40346_41513 = state_40275__$1;
(statearr_40346_41513[(1)] = (13));

} else {
var statearr_40347_41514 = state_40275__$1;
(statearr_40347_41514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (18))){
var inst_40202 = (state_40275[(2)]);
var state_40275__$1 = state_40275;
var statearr_40348_41519 = state_40275__$1;
(statearr_40348_41519[(2)] = inst_40202);

(statearr_40348_41519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (42))){
var state_40275__$1 = state_40275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40275__$1,(45),dchan);
} else {
if((state_val_40276 === (37))){
var inst_40244 = (state_40275[(22)]);
var inst_40235 = (state_40275[(23)]);
var inst_40145 = (state_40275[(11)]);
var inst_40244__$1 = cljs.core.first(inst_40235);
var inst_40245 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40244__$1,inst_40145,done);
var state_40275__$1 = (function (){var statearr_40349 = state_40275;
(statearr_40349[(22)] = inst_40244__$1);

return statearr_40349;
})();
if(cljs.core.truth_(inst_40245)){
var statearr_40350_41520 = state_40275__$1;
(statearr_40350_41520[(1)] = (39));

} else {
var statearr_40351_41521 = state_40275__$1;
(statearr_40351_41521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40276 === (8))){
var inst_40156 = (state_40275[(16)]);
var inst_40157 = (state_40275[(17)]);
var inst_40159 = (inst_40157 < inst_40156);
var inst_40160 = inst_40159;
var state_40275__$1 = state_40275;
if(cljs.core.truth_(inst_40160)){
var statearr_40352_41522 = state_40275__$1;
(statearr_40352_41522[(1)] = (10));

} else {
var statearr_40353_41523 = state_40275__$1;
(statearr_40353_41523[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27873__auto__ = null;
var cljs$core$async$mult_$_state_machine__27873__auto____0 = (function (){
var statearr_40354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40354[(0)] = cljs$core$async$mult_$_state_machine__27873__auto__);

(statearr_40354[(1)] = (1));

return statearr_40354;
});
var cljs$core$async$mult_$_state_machine__27873__auto____1 = (function (state_40275){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40275);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40355){var ex__27876__auto__ = e40355;
var statearr_40356_41524 = state_40275;
(statearr_40356_41524[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40275[(4)]))){
var statearr_40357_41525 = state_40275;
(statearr_40357_41525[(1)] = cljs.core.first((state_40275[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41526 = state_40275;
state_40275 = G__41526;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27873__auto__ = function(state_40275){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27873__auto____1.call(this,state_40275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27873__auto____0;
cljs$core$async$mult_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27873__auto____1;
return cljs$core$async$mult_$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40358 = f__27965__auto__();
(statearr_40358[(6)] = c__27964__auto___41453);

return statearr_40358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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
var G__40360 = arguments.length;
switch (G__40360) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_41535 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_41535(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41539 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_41539(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41543 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41543(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41551 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_41551(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41552 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41552(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41553 = arguments.length;
var i__4737__auto___41554 = (0);
while(true){
if((i__4737__auto___41554 < len__4736__auto___41553)){
args__4742__auto__.push((arguments[i__4737__auto___41554]));

var G__41555 = (i__4737__auto___41554 + (1));
i__4737__auto___41554 = G__41555;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40365){
var map__40366 = p__40365;
var map__40366__$1 = (((((!((map__40366 == null))))?(((((map__40366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40366):map__40366);
var opts = map__40366__$1;
var statearr_40368_41558 = state;
(statearr_40368_41558[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40369_41559 = state;
(statearr_40369_41559[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_40370_41560 = state;
(statearr_40370_41560[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40361){
var G__40362 = cljs.core.first(seq40361);
var seq40361__$1 = cljs.core.next(seq40361);
var G__40363 = cljs.core.first(seq40361__$1);
var seq40361__$2 = cljs.core.next(seq40361__$1);
var G__40364 = cljs.core.first(seq40361__$2);
var seq40361__$3 = cljs.core.next(seq40361__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40362,G__40363,G__40364,seq40361__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40371 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40372){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40372 = meta40372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40373,meta40372__$1){
var self__ = this;
var _40373__$1 = this;
return (new cljs.core.async.t_cljs$core$async40371(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40372__$1));
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40373){
var self__ = this;
var _40373__$1 = this;
return self__.meta40372;
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40372","meta40372",-391547893,null)], null);
}));

(cljs.core.async.t_cljs$core$async40371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40371");

(cljs.core.async.t_cljs$core$async40371.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40371.
 */
cljs.core.async.__GT_t_cljs$core$async40371 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40371(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40372){
return (new cljs.core.async.t_cljs$core$async40371(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40372));
});

}

return (new cljs.core.async.t_cljs$core$async40371(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27964__auto___41565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40475){
var state_val_40476 = (state_40475[(1)]);
if((state_val_40476 === (7))){
var inst_40390 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
var statearr_40477_41566 = state_40475__$1;
(statearr_40477_41566[(2)] = inst_40390);

(statearr_40477_41566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (20))){
var inst_40402 = (state_40475[(7)]);
var state_40475__$1 = state_40475;
var statearr_40478_41567 = state_40475__$1;
(statearr_40478_41567[(2)] = inst_40402);

(statearr_40478_41567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (27))){
var state_40475__$1 = state_40475;
var statearr_40479_41568 = state_40475__$1;
(statearr_40479_41568[(2)] = null);

(statearr_40479_41568[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (1))){
var inst_40377 = (state_40475[(8)]);
var inst_40377__$1 = calc_state();
var inst_40379 = (inst_40377__$1 == null);
var inst_40380 = cljs.core.not(inst_40379);
var state_40475__$1 = (function (){var statearr_40480 = state_40475;
(statearr_40480[(8)] = inst_40377__$1);

return statearr_40480;
})();
if(inst_40380){
var statearr_40481_41569 = state_40475__$1;
(statearr_40481_41569[(1)] = (2));

} else {
var statearr_40482_41572 = state_40475__$1;
(statearr_40482_41572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (24))){
var inst_40449 = (state_40475[(9)]);
var inst_40426 = (state_40475[(10)]);
var inst_40435 = (state_40475[(11)]);
var inst_40449__$1 = (inst_40426.cljs$core$IFn$_invoke$arity$1 ? inst_40426.cljs$core$IFn$_invoke$arity$1(inst_40435) : inst_40426.call(null,inst_40435));
var state_40475__$1 = (function (){var statearr_40483 = state_40475;
(statearr_40483[(9)] = inst_40449__$1);

return statearr_40483;
})();
if(cljs.core.truth_(inst_40449__$1)){
var statearr_40484_41576 = state_40475__$1;
(statearr_40484_41576[(1)] = (29));

} else {
var statearr_40485_41577 = state_40475__$1;
(statearr_40485_41577[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (4))){
var inst_40393 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40393)){
var statearr_40486_41578 = state_40475__$1;
(statearr_40486_41578[(1)] = (8));

} else {
var statearr_40487_41579 = state_40475__$1;
(statearr_40487_41579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (15))){
var inst_40420 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40420)){
var statearr_40488_41580 = state_40475__$1;
(statearr_40488_41580[(1)] = (19));

} else {
var statearr_40489_41581 = state_40475__$1;
(statearr_40489_41581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (21))){
var inst_40425 = (state_40475[(12)]);
var inst_40425__$1 = (state_40475[(2)]);
var inst_40426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40425__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40425__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40425__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40475__$1 = (function (){var statearr_40490 = state_40475;
(statearr_40490[(13)] = inst_40427);

(statearr_40490[(10)] = inst_40426);

(statearr_40490[(12)] = inst_40425__$1);

return statearr_40490;
})();
return cljs.core.async.ioc_alts_BANG_(state_40475__$1,(22),inst_40428);
} else {
if((state_val_40476 === (31))){
var inst_40457 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40457)){
var statearr_40491_41584 = state_40475__$1;
(statearr_40491_41584[(1)] = (32));

} else {
var statearr_40492_41588 = state_40475__$1;
(statearr_40492_41588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (32))){
var inst_40434 = (state_40475[(14)]);
var state_40475__$1 = state_40475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40475__$1,(35),out,inst_40434);
} else {
if((state_val_40476 === (33))){
var inst_40425 = (state_40475[(12)]);
var inst_40402 = inst_40425;
var state_40475__$1 = (function (){var statearr_40493 = state_40475;
(statearr_40493[(7)] = inst_40402);

return statearr_40493;
})();
var statearr_40494_41589 = state_40475__$1;
(statearr_40494_41589[(2)] = null);

(statearr_40494_41589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (13))){
var inst_40402 = (state_40475[(7)]);
var inst_40409 = inst_40402.cljs$lang$protocol_mask$partition0$;
var inst_40410 = (inst_40409 & (64));
var inst_40411 = inst_40402.cljs$core$ISeq$;
var inst_40412 = (cljs.core.PROTOCOL_SENTINEL === inst_40411);
var inst_40413 = ((inst_40410) || (inst_40412));
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40413)){
var statearr_40495_41590 = state_40475__$1;
(statearr_40495_41590[(1)] = (16));

} else {
var statearr_40496_41591 = state_40475__$1;
(statearr_40496_41591[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (22))){
var inst_40434 = (state_40475[(14)]);
var inst_40435 = (state_40475[(11)]);
var inst_40433 = (state_40475[(2)]);
var inst_40434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40433,(0),null);
var inst_40435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40433,(1),null);
var inst_40436 = (inst_40434__$1 == null);
var inst_40437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40435__$1,change);
var inst_40438 = ((inst_40436) || (inst_40437));
var state_40475__$1 = (function (){var statearr_40497 = state_40475;
(statearr_40497[(14)] = inst_40434__$1);

(statearr_40497[(11)] = inst_40435__$1);

return statearr_40497;
})();
if(cljs.core.truth_(inst_40438)){
var statearr_40498_41592 = state_40475__$1;
(statearr_40498_41592[(1)] = (23));

} else {
var statearr_40499_41593 = state_40475__$1;
(statearr_40499_41593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (36))){
var inst_40425 = (state_40475[(12)]);
var inst_40402 = inst_40425;
var state_40475__$1 = (function (){var statearr_40500 = state_40475;
(statearr_40500[(7)] = inst_40402);

return statearr_40500;
})();
var statearr_40501_41594 = state_40475__$1;
(statearr_40501_41594[(2)] = null);

(statearr_40501_41594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (29))){
var inst_40449 = (state_40475[(9)]);
var state_40475__$1 = state_40475;
var statearr_40502_41595 = state_40475__$1;
(statearr_40502_41595[(2)] = inst_40449);

(statearr_40502_41595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (6))){
var state_40475__$1 = state_40475;
var statearr_40503_41596 = state_40475__$1;
(statearr_40503_41596[(2)] = false);

(statearr_40503_41596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (28))){
var inst_40445 = (state_40475[(2)]);
var inst_40446 = calc_state();
var inst_40402 = inst_40446;
var state_40475__$1 = (function (){var statearr_40504 = state_40475;
(statearr_40504[(7)] = inst_40402);

(statearr_40504[(15)] = inst_40445);

return statearr_40504;
})();
var statearr_40505_41597 = state_40475__$1;
(statearr_40505_41597[(2)] = null);

(statearr_40505_41597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (25))){
var inst_40471 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
var statearr_40506_41598 = state_40475__$1;
(statearr_40506_41598[(2)] = inst_40471);

(statearr_40506_41598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (34))){
var inst_40469 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
var statearr_40507_41599 = state_40475__$1;
(statearr_40507_41599[(2)] = inst_40469);

(statearr_40507_41599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (17))){
var state_40475__$1 = state_40475;
var statearr_40508_41600 = state_40475__$1;
(statearr_40508_41600[(2)] = false);

(statearr_40508_41600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (3))){
var state_40475__$1 = state_40475;
var statearr_40509_41601 = state_40475__$1;
(statearr_40509_41601[(2)] = false);

(statearr_40509_41601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (12))){
var inst_40473 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40475__$1,inst_40473);
} else {
if((state_val_40476 === (2))){
var inst_40377 = (state_40475[(8)]);
var inst_40382 = inst_40377.cljs$lang$protocol_mask$partition0$;
var inst_40383 = (inst_40382 & (64));
var inst_40384 = inst_40377.cljs$core$ISeq$;
var inst_40385 = (cljs.core.PROTOCOL_SENTINEL === inst_40384);
var inst_40386 = ((inst_40383) || (inst_40385));
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40386)){
var statearr_40510_41602 = state_40475__$1;
(statearr_40510_41602[(1)] = (5));

} else {
var statearr_40511_41603 = state_40475__$1;
(statearr_40511_41603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (23))){
var inst_40434 = (state_40475[(14)]);
var inst_40440 = (inst_40434 == null);
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40440)){
var statearr_40512_41604 = state_40475__$1;
(statearr_40512_41604[(1)] = (26));

} else {
var statearr_40513_41605 = state_40475__$1;
(statearr_40513_41605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (35))){
var inst_40460 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
if(cljs.core.truth_(inst_40460)){
var statearr_40514_41606 = state_40475__$1;
(statearr_40514_41606[(1)] = (36));

} else {
var statearr_40515_41607 = state_40475__$1;
(statearr_40515_41607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (19))){
var inst_40402 = (state_40475[(7)]);
var inst_40422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40402);
var state_40475__$1 = state_40475;
var statearr_40516_41608 = state_40475__$1;
(statearr_40516_41608[(2)] = inst_40422);

(statearr_40516_41608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (11))){
var inst_40402 = (state_40475[(7)]);
var inst_40406 = (inst_40402 == null);
var inst_40407 = cljs.core.not(inst_40406);
var state_40475__$1 = state_40475;
if(inst_40407){
var statearr_40517_41609 = state_40475__$1;
(statearr_40517_41609[(1)] = (13));

} else {
var statearr_40518_41610 = state_40475__$1;
(statearr_40518_41610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (9))){
var inst_40377 = (state_40475[(8)]);
var state_40475__$1 = state_40475;
var statearr_40519_41614 = state_40475__$1;
(statearr_40519_41614[(2)] = inst_40377);

(statearr_40519_41614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (5))){
var state_40475__$1 = state_40475;
var statearr_40520_41615 = state_40475__$1;
(statearr_40520_41615[(2)] = true);

(statearr_40520_41615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (14))){
var state_40475__$1 = state_40475;
var statearr_40521_41616 = state_40475__$1;
(statearr_40521_41616[(2)] = false);

(statearr_40521_41616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (26))){
var inst_40435 = (state_40475[(11)]);
var inst_40442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40435);
var state_40475__$1 = state_40475;
var statearr_40522_41617 = state_40475__$1;
(statearr_40522_41617[(2)] = inst_40442);

(statearr_40522_41617[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (16))){
var state_40475__$1 = state_40475;
var statearr_40523_41618 = state_40475__$1;
(statearr_40523_41618[(2)] = true);

(statearr_40523_41618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (38))){
var inst_40465 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
var statearr_40524_41619 = state_40475__$1;
(statearr_40524_41619[(2)] = inst_40465);

(statearr_40524_41619[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (30))){
var inst_40427 = (state_40475[(13)]);
var inst_40426 = (state_40475[(10)]);
var inst_40435 = (state_40475[(11)]);
var inst_40452 = cljs.core.empty_QMARK_(inst_40426);
var inst_40453 = (inst_40427.cljs$core$IFn$_invoke$arity$1 ? inst_40427.cljs$core$IFn$_invoke$arity$1(inst_40435) : inst_40427.call(null,inst_40435));
var inst_40454 = cljs.core.not(inst_40453);
var inst_40455 = ((inst_40452) && (inst_40454));
var state_40475__$1 = state_40475;
var statearr_40525_41620 = state_40475__$1;
(statearr_40525_41620[(2)] = inst_40455);

(statearr_40525_41620[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (10))){
var inst_40377 = (state_40475[(8)]);
var inst_40398 = (state_40475[(2)]);
var inst_40399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40398,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40398,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40398,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40402 = inst_40377;
var state_40475__$1 = (function (){var statearr_40526 = state_40475;
(statearr_40526[(16)] = inst_40399);

(statearr_40526[(7)] = inst_40402);

(statearr_40526[(17)] = inst_40401);

(statearr_40526[(18)] = inst_40400);

return statearr_40526;
})();
var statearr_40527_41621 = state_40475__$1;
(statearr_40527_41621[(2)] = null);

(statearr_40527_41621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (18))){
var inst_40417 = (state_40475[(2)]);
var state_40475__$1 = state_40475;
var statearr_40528_41622 = state_40475__$1;
(statearr_40528_41622[(2)] = inst_40417);

(statearr_40528_41622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (37))){
var state_40475__$1 = state_40475;
var statearr_40529_41624 = state_40475__$1;
(statearr_40529_41624[(2)] = null);

(statearr_40529_41624[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40476 === (8))){
var inst_40377 = (state_40475[(8)]);
var inst_40395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40377);
var state_40475__$1 = state_40475;
var statearr_40530_41625 = state_40475__$1;
(statearr_40530_41625[(2)] = inst_40395);

(statearr_40530_41625[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27873__auto__ = null;
var cljs$core$async$mix_$_state_machine__27873__auto____0 = (function (){
var statearr_40531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40531[(0)] = cljs$core$async$mix_$_state_machine__27873__auto__);

(statearr_40531[(1)] = (1));

return statearr_40531;
});
var cljs$core$async$mix_$_state_machine__27873__auto____1 = (function (state_40475){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40475);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40532){var ex__27876__auto__ = e40532;
var statearr_40533_41626 = state_40475;
(statearr_40533_41626[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40475[(4)]))){
var statearr_40534_41627 = state_40475;
(statearr_40534_41627[(1)] = cljs.core.first((state_40475[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41628 = state_40475;
state_40475 = G__41628;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27873__auto__ = function(state_40475){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27873__auto____1.call(this,state_40475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27873__auto____0;
cljs$core$async$mix_$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27873__auto____1;
return cljs$core$async$mix_$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40535 = f__27965__auto__();
(statearr_40535[(6)] = c__27964__auto___41565);

return statearr_40535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_41633 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_41633(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41635 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_41635(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41637 = (function() {
var G__41638 = null;
var G__41638__1 = (function (p){
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
var G__41638__2 = (function (p,v){
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
G__41638 = function(p,v){
switch(arguments.length){
case 1:
return G__41638__1.call(this,p);
case 2:
return G__41638__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41638.cljs$core$IFn$_invoke$arity$1 = G__41638__1;
G__41638.cljs$core$IFn$_invoke$arity$2 = G__41638__2;
return G__41638;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40537 = arguments.length;
switch (G__40537) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41637(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41637(p,v);
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
var G__40540 = arguments.length;
switch (G__40540) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40538_SHARP_){
if(cljs.core.truth_((p1__40538_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40538_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40538_SHARP_.call(null,topic)))){
return p1__40538_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40538_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40541 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40542){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40542 = meta40542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40543,meta40542__$1){
var self__ = this;
var _40543__$1 = this;
return (new cljs.core.async.t_cljs$core$async40541(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40542__$1));
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40543){
var self__ = this;
var _40543__$1 = this;
return self__.meta40542;
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40542","meta40542",-2062199349,null)], null);
}));

(cljs.core.async.t_cljs$core$async40541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40541");

(cljs.core.async.t_cljs$core$async40541.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40541.
 */
cljs.core.async.__GT_t_cljs$core$async40541 = (function cljs$core$async$__GT_t_cljs$core$async40541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40542){
return (new cljs.core.async.t_cljs$core$async40541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40542));
});

}

return (new cljs.core.async.t_cljs$core$async40541(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27964__auto___41648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40615){
var state_val_40616 = (state_40615[(1)]);
if((state_val_40616 === (7))){
var inst_40611 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
var statearr_40617_41649 = state_40615__$1;
(statearr_40617_41649[(2)] = inst_40611);

(statearr_40617_41649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (20))){
var state_40615__$1 = state_40615;
var statearr_40618_41650 = state_40615__$1;
(statearr_40618_41650[(2)] = null);

(statearr_40618_41650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (1))){
var state_40615__$1 = state_40615;
var statearr_40619_41651 = state_40615__$1;
(statearr_40619_41651[(2)] = null);

(statearr_40619_41651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (24))){
var inst_40594 = (state_40615[(7)]);
var inst_40603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40594);
var state_40615__$1 = state_40615;
var statearr_40620_41652 = state_40615__$1;
(statearr_40620_41652[(2)] = inst_40603);

(statearr_40620_41652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (4))){
var inst_40546 = (state_40615[(8)]);
var inst_40546__$1 = (state_40615[(2)]);
var inst_40547 = (inst_40546__$1 == null);
var state_40615__$1 = (function (){var statearr_40621 = state_40615;
(statearr_40621[(8)] = inst_40546__$1);

return statearr_40621;
})();
if(cljs.core.truth_(inst_40547)){
var statearr_40622_41653 = state_40615__$1;
(statearr_40622_41653[(1)] = (5));

} else {
var statearr_40623_41654 = state_40615__$1;
(statearr_40623_41654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (15))){
var inst_40588 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
var statearr_40624_41655 = state_40615__$1;
(statearr_40624_41655[(2)] = inst_40588);

(statearr_40624_41655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (21))){
var inst_40608 = (state_40615[(2)]);
var state_40615__$1 = (function (){var statearr_40625 = state_40615;
(statearr_40625[(9)] = inst_40608);

return statearr_40625;
})();
var statearr_40626_41656 = state_40615__$1;
(statearr_40626_41656[(2)] = null);

(statearr_40626_41656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (13))){
var inst_40570 = (state_40615[(10)]);
var inst_40572 = cljs.core.chunked_seq_QMARK_(inst_40570);
var state_40615__$1 = state_40615;
if(inst_40572){
var statearr_40627_41658 = state_40615__$1;
(statearr_40627_41658[(1)] = (16));

} else {
var statearr_40628_41659 = state_40615__$1;
(statearr_40628_41659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (22))){
var inst_40600 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
if(cljs.core.truth_(inst_40600)){
var statearr_40629_41660 = state_40615__$1;
(statearr_40629_41660[(1)] = (23));

} else {
var statearr_40630_41661 = state_40615__$1;
(statearr_40630_41661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (6))){
var inst_40594 = (state_40615[(7)]);
var inst_40596 = (state_40615[(11)]);
var inst_40546 = (state_40615[(8)]);
var inst_40594__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40546) : topic_fn.call(null,inst_40546));
var inst_40595 = cljs.core.deref(mults);
var inst_40596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40595,inst_40594__$1);
var state_40615__$1 = (function (){var statearr_40631 = state_40615;
(statearr_40631[(7)] = inst_40594__$1);

(statearr_40631[(11)] = inst_40596__$1);

return statearr_40631;
})();
if(cljs.core.truth_(inst_40596__$1)){
var statearr_40632_41662 = state_40615__$1;
(statearr_40632_41662[(1)] = (19));

} else {
var statearr_40633_41663 = state_40615__$1;
(statearr_40633_41663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (25))){
var inst_40605 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
var statearr_40634_41664 = state_40615__$1;
(statearr_40634_41664[(2)] = inst_40605);

(statearr_40634_41664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (17))){
var inst_40570 = (state_40615[(10)]);
var inst_40579 = cljs.core.first(inst_40570);
var inst_40580 = cljs.core.async.muxch_STAR_(inst_40579);
var inst_40581 = cljs.core.async.close_BANG_(inst_40580);
var inst_40582 = cljs.core.next(inst_40570);
var inst_40556 = inst_40582;
var inst_40557 = null;
var inst_40558 = (0);
var inst_40559 = (0);
var state_40615__$1 = (function (){var statearr_40635 = state_40615;
(statearr_40635[(12)] = inst_40556);

(statearr_40635[(13)] = inst_40558);

(statearr_40635[(14)] = inst_40557);

(statearr_40635[(15)] = inst_40559);

(statearr_40635[(16)] = inst_40581);

return statearr_40635;
})();
var statearr_40636_41665 = state_40615__$1;
(statearr_40636_41665[(2)] = null);

(statearr_40636_41665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (3))){
var inst_40613 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40615__$1,inst_40613);
} else {
if((state_val_40616 === (12))){
var inst_40590 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
var statearr_40637_41666 = state_40615__$1;
(statearr_40637_41666[(2)] = inst_40590);

(statearr_40637_41666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (2))){
var state_40615__$1 = state_40615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40615__$1,(4),ch);
} else {
if((state_val_40616 === (23))){
var state_40615__$1 = state_40615;
var statearr_40638_41667 = state_40615__$1;
(statearr_40638_41667[(2)] = null);

(statearr_40638_41667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (19))){
var inst_40596 = (state_40615[(11)]);
var inst_40546 = (state_40615[(8)]);
var inst_40598 = cljs.core.async.muxch_STAR_(inst_40596);
var state_40615__$1 = state_40615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40615__$1,(22),inst_40598,inst_40546);
} else {
if((state_val_40616 === (11))){
var inst_40556 = (state_40615[(12)]);
var inst_40570 = (state_40615[(10)]);
var inst_40570__$1 = cljs.core.seq(inst_40556);
var state_40615__$1 = (function (){var statearr_40639 = state_40615;
(statearr_40639[(10)] = inst_40570__$1);

return statearr_40639;
})();
if(inst_40570__$1){
var statearr_40640_41668 = state_40615__$1;
(statearr_40640_41668[(1)] = (13));

} else {
var statearr_40641_41669 = state_40615__$1;
(statearr_40641_41669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (9))){
var inst_40592 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
var statearr_40642_41670 = state_40615__$1;
(statearr_40642_41670[(2)] = inst_40592);

(statearr_40642_41670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (5))){
var inst_40553 = cljs.core.deref(mults);
var inst_40554 = cljs.core.vals(inst_40553);
var inst_40555 = cljs.core.seq(inst_40554);
var inst_40556 = inst_40555;
var inst_40557 = null;
var inst_40558 = (0);
var inst_40559 = (0);
var state_40615__$1 = (function (){var statearr_40643 = state_40615;
(statearr_40643[(12)] = inst_40556);

(statearr_40643[(13)] = inst_40558);

(statearr_40643[(14)] = inst_40557);

(statearr_40643[(15)] = inst_40559);

return statearr_40643;
})();
var statearr_40644_41671 = state_40615__$1;
(statearr_40644_41671[(2)] = null);

(statearr_40644_41671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (14))){
var state_40615__$1 = state_40615;
var statearr_40648_41672 = state_40615__$1;
(statearr_40648_41672[(2)] = null);

(statearr_40648_41672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (16))){
var inst_40570 = (state_40615[(10)]);
var inst_40574 = cljs.core.chunk_first(inst_40570);
var inst_40575 = cljs.core.chunk_rest(inst_40570);
var inst_40576 = cljs.core.count(inst_40574);
var inst_40556 = inst_40575;
var inst_40557 = inst_40574;
var inst_40558 = inst_40576;
var inst_40559 = (0);
var state_40615__$1 = (function (){var statearr_40649 = state_40615;
(statearr_40649[(12)] = inst_40556);

(statearr_40649[(13)] = inst_40558);

(statearr_40649[(14)] = inst_40557);

(statearr_40649[(15)] = inst_40559);

return statearr_40649;
})();
var statearr_40650_41677 = state_40615__$1;
(statearr_40650_41677[(2)] = null);

(statearr_40650_41677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (10))){
var inst_40556 = (state_40615[(12)]);
var inst_40558 = (state_40615[(13)]);
var inst_40557 = (state_40615[(14)]);
var inst_40559 = (state_40615[(15)]);
var inst_40564 = cljs.core._nth(inst_40557,inst_40559);
var inst_40565 = cljs.core.async.muxch_STAR_(inst_40564);
var inst_40566 = cljs.core.async.close_BANG_(inst_40565);
var inst_40567 = (inst_40559 + (1));
var tmp40645 = inst_40556;
var tmp40646 = inst_40558;
var tmp40647 = inst_40557;
var inst_40556__$1 = tmp40645;
var inst_40557__$1 = tmp40647;
var inst_40558__$1 = tmp40646;
var inst_40559__$1 = inst_40567;
var state_40615__$1 = (function (){var statearr_40651 = state_40615;
(statearr_40651[(12)] = inst_40556__$1);

(statearr_40651[(13)] = inst_40558__$1);

(statearr_40651[(14)] = inst_40557__$1);

(statearr_40651[(15)] = inst_40559__$1);

(statearr_40651[(17)] = inst_40566);

return statearr_40651;
})();
var statearr_40652_41682 = state_40615__$1;
(statearr_40652_41682[(2)] = null);

(statearr_40652_41682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (18))){
var inst_40585 = (state_40615[(2)]);
var state_40615__$1 = state_40615;
var statearr_40653_41683 = state_40615__$1;
(statearr_40653_41683[(2)] = inst_40585);

(statearr_40653_41683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40616 === (8))){
var inst_40558 = (state_40615[(13)]);
var inst_40559 = (state_40615[(15)]);
var inst_40561 = (inst_40559 < inst_40558);
var inst_40562 = inst_40561;
var state_40615__$1 = state_40615;
if(cljs.core.truth_(inst_40562)){
var statearr_40654_41685 = state_40615__$1;
(statearr_40654_41685[(1)] = (10));

} else {
var statearr_40655_41686 = state_40615__$1;
(statearr_40655_41686[(1)] = (11));

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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_40656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40656[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_40656[(1)] = (1));

return statearr_40656;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_40615){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40615);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40657){var ex__27876__auto__ = e40657;
var statearr_40658_41688 = state_40615;
(statearr_40658_41688[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40615[(4)]))){
var statearr_40659_41689 = state_40615;
(statearr_40659_41689[(1)] = cljs.core.first((state_40615[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41690 = state_40615;
state_40615 = G__41690;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_40615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_40615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40660 = f__27965__auto__();
(statearr_40660[(6)] = c__27964__auto___41648);

return statearr_40660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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
var G__40662 = arguments.length;
switch (G__40662) {
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
var G__40664 = arguments.length;
switch (G__40664) {
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
var G__40666 = arguments.length;
switch (G__40666) {
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
var c__27964__auto___41694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40709){
var state_val_40710 = (state_40709[(1)]);
if((state_val_40710 === (7))){
var state_40709__$1 = state_40709;
var statearr_40711_41695 = state_40709__$1;
(statearr_40711_41695[(2)] = null);

(statearr_40711_41695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (1))){
var state_40709__$1 = state_40709;
var statearr_40712_41696 = state_40709__$1;
(statearr_40712_41696[(2)] = null);

(statearr_40712_41696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (4))){
var inst_40669 = (state_40709[(7)]);
var inst_40670 = (state_40709[(8)]);
var inst_40672 = (inst_40670 < inst_40669);
var state_40709__$1 = state_40709;
if(cljs.core.truth_(inst_40672)){
var statearr_40713_41697 = state_40709__$1;
(statearr_40713_41697[(1)] = (6));

} else {
var statearr_40714_41698 = state_40709__$1;
(statearr_40714_41698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (15))){
var inst_40695 = (state_40709[(9)]);
var inst_40700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40695);
var state_40709__$1 = state_40709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40709__$1,(17),out,inst_40700);
} else {
if((state_val_40710 === (13))){
var inst_40695 = (state_40709[(9)]);
var inst_40695__$1 = (state_40709[(2)]);
var inst_40696 = cljs.core.some(cljs.core.nil_QMARK_,inst_40695__$1);
var state_40709__$1 = (function (){var statearr_40715 = state_40709;
(statearr_40715[(9)] = inst_40695__$1);

return statearr_40715;
})();
if(cljs.core.truth_(inst_40696)){
var statearr_40716_41699 = state_40709__$1;
(statearr_40716_41699[(1)] = (14));

} else {
var statearr_40717_41700 = state_40709__$1;
(statearr_40717_41700[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (6))){
var state_40709__$1 = state_40709;
var statearr_40718_41701 = state_40709__$1;
(statearr_40718_41701[(2)] = null);

(statearr_40718_41701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (17))){
var inst_40702 = (state_40709[(2)]);
var state_40709__$1 = (function (){var statearr_40720 = state_40709;
(statearr_40720[(10)] = inst_40702);

return statearr_40720;
})();
var statearr_40721_41702 = state_40709__$1;
(statearr_40721_41702[(2)] = null);

(statearr_40721_41702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (3))){
var inst_40707 = (state_40709[(2)]);
var state_40709__$1 = state_40709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40709__$1,inst_40707);
} else {
if((state_val_40710 === (12))){
var _ = (function (){var statearr_40722 = state_40709;
(statearr_40722[(4)] = cljs.core.rest((state_40709[(4)])));

return statearr_40722;
})();
var state_40709__$1 = state_40709;
var ex40719 = (state_40709__$1[(2)]);
var statearr_40723_41703 = state_40709__$1;
(statearr_40723_41703[(5)] = ex40719);


if((ex40719 instanceof Object)){
var statearr_40724_41704 = state_40709__$1;
(statearr_40724_41704[(1)] = (11));

(statearr_40724_41704[(5)] = null);

} else {
throw ex40719;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (2))){
var inst_40668 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40669 = cnt;
var inst_40670 = (0);
var state_40709__$1 = (function (){var statearr_40725 = state_40709;
(statearr_40725[(11)] = inst_40668);

(statearr_40725[(7)] = inst_40669);

(statearr_40725[(8)] = inst_40670);

return statearr_40725;
})();
var statearr_40726_41705 = state_40709__$1;
(statearr_40726_41705[(2)] = null);

(statearr_40726_41705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (11))){
var inst_40674 = (state_40709[(2)]);
var inst_40675 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40709__$1 = (function (){var statearr_40727 = state_40709;
(statearr_40727[(12)] = inst_40674);

return statearr_40727;
})();
var statearr_40728_41706 = state_40709__$1;
(statearr_40728_41706[(2)] = inst_40675);

(statearr_40728_41706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (9))){
var inst_40670 = (state_40709[(8)]);
var _ = (function (){var statearr_40729 = state_40709;
(statearr_40729[(4)] = cljs.core.cons((12),(state_40709[(4)])));

return statearr_40729;
})();
var inst_40681 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40670) : chs__$1.call(null,inst_40670));
var inst_40682 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40670) : done.call(null,inst_40670));
var inst_40683 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40681,inst_40682);
var ___$1 = (function (){var statearr_40730 = state_40709;
(statearr_40730[(4)] = cljs.core.rest((state_40709[(4)])));

return statearr_40730;
})();
var state_40709__$1 = state_40709;
var statearr_40731_41707 = state_40709__$1;
(statearr_40731_41707[(2)] = inst_40683);

(statearr_40731_41707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (5))){
var inst_40693 = (state_40709[(2)]);
var state_40709__$1 = (function (){var statearr_40732 = state_40709;
(statearr_40732[(13)] = inst_40693);

return statearr_40732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40709__$1,(13),dchan);
} else {
if((state_val_40710 === (14))){
var inst_40698 = cljs.core.async.close_BANG_(out);
var state_40709__$1 = state_40709;
var statearr_40733_41711 = state_40709__$1;
(statearr_40733_41711[(2)] = inst_40698);

(statearr_40733_41711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (16))){
var inst_40705 = (state_40709[(2)]);
var state_40709__$1 = state_40709;
var statearr_40734_41712 = state_40709__$1;
(statearr_40734_41712[(2)] = inst_40705);

(statearr_40734_41712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (10))){
var inst_40670 = (state_40709[(8)]);
var inst_40686 = (state_40709[(2)]);
var inst_40687 = (inst_40670 + (1));
var inst_40670__$1 = inst_40687;
var state_40709__$1 = (function (){var statearr_40735 = state_40709;
(statearr_40735[(14)] = inst_40686);

(statearr_40735[(8)] = inst_40670__$1);

return statearr_40735;
})();
var statearr_40736_41717 = state_40709__$1;
(statearr_40736_41717[(2)] = null);

(statearr_40736_41717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40710 === (8))){
var inst_40691 = (state_40709[(2)]);
var state_40709__$1 = state_40709;
var statearr_40737_41721 = state_40709__$1;
(statearr_40737_41721[(2)] = inst_40691);

(statearr_40737_41721[(1)] = (5));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_40738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40738[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_40738[(1)] = (1));

return statearr_40738;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_40709){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40709);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40739){var ex__27876__auto__ = e40739;
var statearr_40740_41722 = state_40709;
(statearr_40740_41722[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40709[(4)]))){
var statearr_40741_41723 = state_40709;
(statearr_40741_41723[(1)] = cljs.core.first((state_40709[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41727 = state_40709;
state_40709 = G__41727;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_40709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_40709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40742 = f__27965__auto__();
(statearr_40742[(6)] = c__27964__auto___41694);

return statearr_40742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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
var G__40745 = arguments.length;
switch (G__40745) {
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
var c__27964__auto___41732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40777){
var state_val_40778 = (state_40777[(1)]);
if((state_val_40778 === (7))){
var inst_40756 = (state_40777[(7)]);
var inst_40757 = (state_40777[(8)]);
var inst_40756__$1 = (state_40777[(2)]);
var inst_40757__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40756__$1,(0),null);
var inst_40758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40756__$1,(1),null);
var inst_40759 = (inst_40757__$1 == null);
var state_40777__$1 = (function (){var statearr_40779 = state_40777;
(statearr_40779[(7)] = inst_40756__$1);

(statearr_40779[(8)] = inst_40757__$1);

(statearr_40779[(9)] = inst_40758);

return statearr_40779;
})();
if(cljs.core.truth_(inst_40759)){
var statearr_40780_41733 = state_40777__$1;
(statearr_40780_41733[(1)] = (8));

} else {
var statearr_40781_41734 = state_40777__$1;
(statearr_40781_41734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (1))){
var inst_40746 = cljs.core.vec(chs);
var inst_40747 = inst_40746;
var state_40777__$1 = (function (){var statearr_40782 = state_40777;
(statearr_40782[(10)] = inst_40747);

return statearr_40782;
})();
var statearr_40783_41738 = state_40777__$1;
(statearr_40783_41738[(2)] = null);

(statearr_40783_41738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (4))){
var inst_40747 = (state_40777[(10)]);
var state_40777__$1 = state_40777;
return cljs.core.async.ioc_alts_BANG_(state_40777__$1,(7),inst_40747);
} else {
if((state_val_40778 === (6))){
var inst_40773 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
var statearr_40784_41739 = state_40777__$1;
(statearr_40784_41739[(2)] = inst_40773);

(statearr_40784_41739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (3))){
var inst_40775 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40777__$1,inst_40775);
} else {
if((state_val_40778 === (2))){
var inst_40747 = (state_40777[(10)]);
var inst_40749 = cljs.core.count(inst_40747);
var inst_40750 = (inst_40749 > (0));
var state_40777__$1 = state_40777;
if(cljs.core.truth_(inst_40750)){
var statearr_40786_41741 = state_40777__$1;
(statearr_40786_41741[(1)] = (4));

} else {
var statearr_40787_41742 = state_40777__$1;
(statearr_40787_41742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (11))){
var inst_40747 = (state_40777[(10)]);
var inst_40766 = (state_40777[(2)]);
var tmp40785 = inst_40747;
var inst_40747__$1 = tmp40785;
var state_40777__$1 = (function (){var statearr_40788 = state_40777;
(statearr_40788[(11)] = inst_40766);

(statearr_40788[(10)] = inst_40747__$1);

return statearr_40788;
})();
var statearr_40789_41743 = state_40777__$1;
(statearr_40789_41743[(2)] = null);

(statearr_40789_41743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (9))){
var inst_40757 = (state_40777[(8)]);
var state_40777__$1 = state_40777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40777__$1,(11),out,inst_40757);
} else {
if((state_val_40778 === (5))){
var inst_40771 = cljs.core.async.close_BANG_(out);
var state_40777__$1 = state_40777;
var statearr_40790_41744 = state_40777__$1;
(statearr_40790_41744[(2)] = inst_40771);

(statearr_40790_41744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (10))){
var inst_40769 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
var statearr_40791_41745 = state_40777__$1;
(statearr_40791_41745[(2)] = inst_40769);

(statearr_40791_41745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (8))){
var inst_40756 = (state_40777[(7)]);
var inst_40747 = (state_40777[(10)]);
var inst_40757 = (state_40777[(8)]);
var inst_40758 = (state_40777[(9)]);
var inst_40761 = (function (){var cs = inst_40747;
var vec__40752 = inst_40756;
var v = inst_40757;
var c = inst_40758;
return (function (p1__40743_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40743_SHARP_);
});
})();
var inst_40762 = cljs.core.filterv(inst_40761,inst_40747);
var inst_40747__$1 = inst_40762;
var state_40777__$1 = (function (){var statearr_40792 = state_40777;
(statearr_40792[(10)] = inst_40747__$1);

return statearr_40792;
})();
var statearr_40793_41746 = state_40777__$1;
(statearr_40793_41746[(2)] = null);

(statearr_40793_41746[(1)] = (2));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_40794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40794[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_40794[(1)] = (1));

return statearr_40794;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_40777){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40777);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40795){var ex__27876__auto__ = e40795;
var statearr_40796_41756 = state_40777;
(statearr_40796_41756[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40777[(4)]))){
var statearr_40797_41763 = state_40777;
(statearr_40797_41763[(1)] = cljs.core.first((state_40777[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41764 = state_40777;
state_40777 = G__41764;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_40777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_40777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40798 = f__27965__auto__();
(statearr_40798[(6)] = c__27964__auto___41732);

return statearr_40798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
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
var G__40800 = arguments.length;
switch (G__40800) {
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
var c__27964__auto___41766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40824){
var state_val_40825 = (state_40824[(1)]);
if((state_val_40825 === (7))){
var inst_40806 = (state_40824[(7)]);
var inst_40806__$1 = (state_40824[(2)]);
var inst_40807 = (inst_40806__$1 == null);
var inst_40808 = cljs.core.not(inst_40807);
var state_40824__$1 = (function (){var statearr_40826 = state_40824;
(statearr_40826[(7)] = inst_40806__$1);

return statearr_40826;
})();
if(inst_40808){
var statearr_40827_41767 = state_40824__$1;
(statearr_40827_41767[(1)] = (8));

} else {
var statearr_40828_41768 = state_40824__$1;
(statearr_40828_41768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (1))){
var inst_40801 = (0);
var state_40824__$1 = (function (){var statearr_40829 = state_40824;
(statearr_40829[(8)] = inst_40801);

return statearr_40829;
})();
var statearr_40830_41769 = state_40824__$1;
(statearr_40830_41769[(2)] = null);

(statearr_40830_41769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (4))){
var state_40824__$1 = state_40824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40824__$1,(7),ch);
} else {
if((state_val_40825 === (6))){
var inst_40819 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
var statearr_40831_41770 = state_40824__$1;
(statearr_40831_41770[(2)] = inst_40819);

(statearr_40831_41770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (3))){
var inst_40821 = (state_40824[(2)]);
var inst_40822 = cljs.core.async.close_BANG_(out);
var state_40824__$1 = (function (){var statearr_40832 = state_40824;
(statearr_40832[(9)] = inst_40821);

return statearr_40832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40824__$1,inst_40822);
} else {
if((state_val_40825 === (2))){
var inst_40801 = (state_40824[(8)]);
var inst_40803 = (inst_40801 < n);
var state_40824__$1 = state_40824;
if(cljs.core.truth_(inst_40803)){
var statearr_40833_41777 = state_40824__$1;
(statearr_40833_41777[(1)] = (4));

} else {
var statearr_40834_41778 = state_40824__$1;
(statearr_40834_41778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (11))){
var inst_40801 = (state_40824[(8)]);
var inst_40811 = (state_40824[(2)]);
var inst_40812 = (inst_40801 + (1));
var inst_40801__$1 = inst_40812;
var state_40824__$1 = (function (){var statearr_40835 = state_40824;
(statearr_40835[(10)] = inst_40811);

(statearr_40835[(8)] = inst_40801__$1);

return statearr_40835;
})();
var statearr_40836_41779 = state_40824__$1;
(statearr_40836_41779[(2)] = null);

(statearr_40836_41779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (9))){
var state_40824__$1 = state_40824;
var statearr_40837_41780 = state_40824__$1;
(statearr_40837_41780[(2)] = null);

(statearr_40837_41780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (5))){
var state_40824__$1 = state_40824;
var statearr_40838_41781 = state_40824__$1;
(statearr_40838_41781[(2)] = null);

(statearr_40838_41781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (10))){
var inst_40816 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
var statearr_40839_41782 = state_40824__$1;
(statearr_40839_41782[(2)] = inst_40816);

(statearr_40839_41782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (8))){
var inst_40806 = (state_40824[(7)]);
var state_40824__$1 = state_40824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40824__$1,(11),out,inst_40806);
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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_40840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40840[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_40840[(1)] = (1));

return statearr_40840;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_40824){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40824);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40841){var ex__27876__auto__ = e40841;
var statearr_40842_41783 = state_40824;
(statearr_40842_41783[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40824[(4)]))){
var statearr_40843_41784 = state_40824;
(statearr_40843_41784[(1)] = cljs.core.first((state_40824[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41785 = state_40824;
state_40824 = G__41785;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_40824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_40824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40844 = f__27965__auto__();
(statearr_40844[(6)] = c__27964__auto___41766);

return statearr_40844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40846 = (function (f,ch,meta40847){
this.f = f;
this.ch = ch;
this.meta40847 = meta40847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40848,meta40847__$1){
var self__ = this;
var _40848__$1 = this;
return (new cljs.core.async.t_cljs$core$async40846(self__.f,self__.ch,meta40847__$1));
}));

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40848){
var self__ = this;
var _40848__$1 = this;
return self__.meta40847;
}));

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40849 = (function (f,ch,meta40847,_,fn1,meta40850){
this.f = f;
this.ch = ch;
this.meta40847 = meta40847;
this._ = _;
this.fn1 = fn1;
this.meta40850 = meta40850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40851,meta40850__$1){
var self__ = this;
var _40851__$1 = this;
return (new cljs.core.async.t_cljs$core$async40849(self__.f,self__.ch,self__.meta40847,self__._,self__.fn1,meta40850__$1));
}));

(cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40851){
var self__ = this;
var _40851__$1 = this;
return self__.meta40850;
}));

(cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40845_SHARP_){
var G__40852 = (((p1__40845_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40845_SHARP_) : self__.f.call(null,p1__40845_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40852) : f1.call(null,G__40852));
});
}));

(cljs.core.async.t_cljs$core$async40849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40847","meta40847",2100191908,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40846","cljs.core.async/t_cljs$core$async40846",-508001385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40850","meta40850",1928576363,null)], null);
}));

(cljs.core.async.t_cljs$core$async40849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40849");

(cljs.core.async.t_cljs$core$async40849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40849.
 */
cljs.core.async.__GT_t_cljs$core$async40849 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40849(f__$1,ch__$1,meta40847__$1,___$2,fn1__$1,meta40850){
return (new cljs.core.async.t_cljs$core$async40849(f__$1,ch__$1,meta40847__$1,___$2,fn1__$1,meta40850));
});

}

return (new cljs.core.async.t_cljs$core$async40849(self__.f,self__.ch,self__.meta40847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40853 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40853) : self__.f.call(null,G__40853));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40847","meta40847",2100191908,null)], null);
}));

(cljs.core.async.t_cljs$core$async40846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40846");

(cljs.core.async.t_cljs$core$async40846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40846.
 */
cljs.core.async.__GT_t_cljs$core$async40846 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40846(f__$1,ch__$1,meta40847){
return (new cljs.core.async.t_cljs$core$async40846(f__$1,ch__$1,meta40847));
});

}

return (new cljs.core.async.t_cljs$core$async40846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40854 = (function (f,ch,meta40855){
this.f = f;
this.ch = ch;
this.meta40855 = meta40855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40856,meta40855__$1){
var self__ = this;
var _40856__$1 = this;
return (new cljs.core.async.t_cljs$core$async40854(self__.f,self__.ch,meta40855__$1));
}));

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40856){
var self__ = this;
var _40856__$1 = this;
return self__.meta40855;
}));

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40855","meta40855",-370938615,null)], null);
}));

(cljs.core.async.t_cljs$core$async40854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40854");

(cljs.core.async.t_cljs$core$async40854.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40854.
 */
cljs.core.async.__GT_t_cljs$core$async40854 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40854(f__$1,ch__$1,meta40855){
return (new cljs.core.async.t_cljs$core$async40854(f__$1,ch__$1,meta40855));
});

}

return (new cljs.core.async.t_cljs$core$async40854(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40857 = (function (p,ch,meta40858){
this.p = p;
this.ch = ch;
this.meta40858 = meta40858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40859,meta40858__$1){
var self__ = this;
var _40859__$1 = this;
return (new cljs.core.async.t_cljs$core$async40857(self__.p,self__.ch,meta40858__$1));
}));

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40859){
var self__ = this;
var _40859__$1 = this;
return self__.meta40858;
}));

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40858","meta40858",-682697712,null)], null);
}));

(cljs.core.async.t_cljs$core$async40857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40857");

(cljs.core.async.t_cljs$core$async40857.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40857.
 */
cljs.core.async.__GT_t_cljs$core$async40857 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40857(p__$1,ch__$1,meta40858){
return (new cljs.core.async.t_cljs$core$async40857(p__$1,ch__$1,meta40858));
});

}

return (new cljs.core.async.t_cljs$core$async40857(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40861 = arguments.length;
switch (G__40861) {
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
var c__27964__auto___41801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40882){
var state_val_40883 = (state_40882[(1)]);
if((state_val_40883 === (7))){
var inst_40878 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
var statearr_40884_41802 = state_40882__$1;
(statearr_40884_41802[(2)] = inst_40878);

(statearr_40884_41802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (1))){
var state_40882__$1 = state_40882;
var statearr_40885_41803 = state_40882__$1;
(statearr_40885_41803[(2)] = null);

(statearr_40885_41803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (4))){
var inst_40864 = (state_40882[(7)]);
var inst_40864__$1 = (state_40882[(2)]);
var inst_40865 = (inst_40864__$1 == null);
var state_40882__$1 = (function (){var statearr_40886 = state_40882;
(statearr_40886[(7)] = inst_40864__$1);

return statearr_40886;
})();
if(cljs.core.truth_(inst_40865)){
var statearr_40887_41804 = state_40882__$1;
(statearr_40887_41804[(1)] = (5));

} else {
var statearr_40888_41805 = state_40882__$1;
(statearr_40888_41805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (6))){
var inst_40864 = (state_40882[(7)]);
var inst_40869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40864) : p.call(null,inst_40864));
var state_40882__$1 = state_40882;
if(cljs.core.truth_(inst_40869)){
var statearr_40889_41808 = state_40882__$1;
(statearr_40889_41808[(1)] = (8));

} else {
var statearr_40890_41809 = state_40882__$1;
(statearr_40890_41809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (3))){
var inst_40880 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40882__$1,inst_40880);
} else {
if((state_val_40883 === (2))){
var state_40882__$1 = state_40882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40882__$1,(4),ch);
} else {
if((state_val_40883 === (11))){
var inst_40872 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
var statearr_40891_41810 = state_40882__$1;
(statearr_40891_41810[(2)] = inst_40872);

(statearr_40891_41810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (9))){
var state_40882__$1 = state_40882;
var statearr_40892_41811 = state_40882__$1;
(statearr_40892_41811[(2)] = null);

(statearr_40892_41811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (5))){
var inst_40867 = cljs.core.async.close_BANG_(out);
var state_40882__$1 = state_40882;
var statearr_40893_41812 = state_40882__$1;
(statearr_40893_41812[(2)] = inst_40867);

(statearr_40893_41812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (10))){
var inst_40875 = (state_40882[(2)]);
var state_40882__$1 = (function (){var statearr_40894 = state_40882;
(statearr_40894[(8)] = inst_40875);

return statearr_40894;
})();
var statearr_40895_41813 = state_40882__$1;
(statearr_40895_41813[(2)] = null);

(statearr_40895_41813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (8))){
var inst_40864 = (state_40882[(7)]);
var state_40882__$1 = state_40882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40882__$1,(11),out,inst_40864);
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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_40896 = [null,null,null,null,null,null,null,null,null];
(statearr_40896[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_40896[(1)] = (1));

return statearr_40896;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_40882){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40882);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e40897){var ex__27876__auto__ = e40897;
var statearr_40898_41814 = state_40882;
(statearr_40898_41814[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40882[(4)]))){
var statearr_40899_41815 = state_40882;
(statearr_40899_41815[(1)] = cljs.core.first((state_40882[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41816 = state_40882;
state_40882 = G__41816;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_40882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_40882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_40900 = f__27965__auto__();
(statearr_40900[(6)] = c__27964__auto___41801);

return statearr_40900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40902 = arguments.length;
switch (G__40902) {
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
var c__27964__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_40964){
var state_val_40965 = (state_40964[(1)]);
if((state_val_40965 === (7))){
var inst_40960 = (state_40964[(2)]);
var state_40964__$1 = state_40964;
var statearr_40966_41824 = state_40964__$1;
(statearr_40966_41824[(2)] = inst_40960);

(statearr_40966_41824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (20))){
var inst_40930 = (state_40964[(7)]);
var inst_40941 = (state_40964[(2)]);
var inst_40942 = cljs.core.next(inst_40930);
var inst_40916 = inst_40942;
var inst_40917 = null;
var inst_40918 = (0);
var inst_40919 = (0);
var state_40964__$1 = (function (){var statearr_40967 = state_40964;
(statearr_40967[(8)] = inst_40917);

(statearr_40967[(9)] = inst_40918);

(statearr_40967[(10)] = inst_40916);

(statearr_40967[(11)] = inst_40919);

(statearr_40967[(12)] = inst_40941);

return statearr_40967;
})();
var statearr_40968_41826 = state_40964__$1;
(statearr_40968_41826[(2)] = null);

(statearr_40968_41826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (1))){
var state_40964__$1 = state_40964;
var statearr_40969_41827 = state_40964__$1;
(statearr_40969_41827[(2)] = null);

(statearr_40969_41827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (4))){
var inst_40905 = (state_40964[(13)]);
var inst_40905__$1 = (state_40964[(2)]);
var inst_40906 = (inst_40905__$1 == null);
var state_40964__$1 = (function (){var statearr_40970 = state_40964;
(statearr_40970[(13)] = inst_40905__$1);

return statearr_40970;
})();
if(cljs.core.truth_(inst_40906)){
var statearr_40971_41829 = state_40964__$1;
(statearr_40971_41829[(1)] = (5));

} else {
var statearr_40972_41830 = state_40964__$1;
(statearr_40972_41830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (15))){
var state_40964__$1 = state_40964;
var statearr_40976_41831 = state_40964__$1;
(statearr_40976_41831[(2)] = null);

(statearr_40976_41831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (21))){
var state_40964__$1 = state_40964;
var statearr_40977_41833 = state_40964__$1;
(statearr_40977_41833[(2)] = null);

(statearr_40977_41833[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (13))){
var inst_40917 = (state_40964[(8)]);
var inst_40918 = (state_40964[(9)]);
var inst_40916 = (state_40964[(10)]);
var inst_40919 = (state_40964[(11)]);
var inst_40926 = (state_40964[(2)]);
var inst_40927 = (inst_40919 + (1));
var tmp40973 = inst_40917;
var tmp40974 = inst_40918;
var tmp40975 = inst_40916;
var inst_40916__$1 = tmp40975;
var inst_40917__$1 = tmp40973;
var inst_40918__$1 = tmp40974;
var inst_40919__$1 = inst_40927;
var state_40964__$1 = (function (){var statearr_40978 = state_40964;
(statearr_40978[(14)] = inst_40926);

(statearr_40978[(8)] = inst_40917__$1);

(statearr_40978[(9)] = inst_40918__$1);

(statearr_40978[(10)] = inst_40916__$1);

(statearr_40978[(11)] = inst_40919__$1);

return statearr_40978;
})();
var statearr_40979_41836 = state_40964__$1;
(statearr_40979_41836[(2)] = null);

(statearr_40979_41836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (22))){
var state_40964__$1 = state_40964;
var statearr_40980_41837 = state_40964__$1;
(statearr_40980_41837[(2)] = null);

(statearr_40980_41837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (6))){
var inst_40905 = (state_40964[(13)]);
var inst_40914 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40905) : f.call(null,inst_40905));
var inst_40915 = cljs.core.seq(inst_40914);
var inst_40916 = inst_40915;
var inst_40917 = null;
var inst_40918 = (0);
var inst_40919 = (0);
var state_40964__$1 = (function (){var statearr_40981 = state_40964;
(statearr_40981[(8)] = inst_40917);

(statearr_40981[(9)] = inst_40918);

(statearr_40981[(10)] = inst_40916);

(statearr_40981[(11)] = inst_40919);

return statearr_40981;
})();
var statearr_40982_41839 = state_40964__$1;
(statearr_40982_41839[(2)] = null);

(statearr_40982_41839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (17))){
var inst_40930 = (state_40964[(7)]);
var inst_40934 = cljs.core.chunk_first(inst_40930);
var inst_40935 = cljs.core.chunk_rest(inst_40930);
var inst_40936 = cljs.core.count(inst_40934);
var inst_40916 = inst_40935;
var inst_40917 = inst_40934;
var inst_40918 = inst_40936;
var inst_40919 = (0);
var state_40964__$1 = (function (){var statearr_40983 = state_40964;
(statearr_40983[(8)] = inst_40917);

(statearr_40983[(9)] = inst_40918);

(statearr_40983[(10)] = inst_40916);

(statearr_40983[(11)] = inst_40919);

return statearr_40983;
})();
var statearr_40984_41840 = state_40964__$1;
(statearr_40984_41840[(2)] = null);

(statearr_40984_41840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (3))){
var inst_40962 = (state_40964[(2)]);
var state_40964__$1 = state_40964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40964__$1,inst_40962);
} else {
if((state_val_40965 === (12))){
var inst_40950 = (state_40964[(2)]);
var state_40964__$1 = state_40964;
var statearr_40985_41841 = state_40964__$1;
(statearr_40985_41841[(2)] = inst_40950);

(statearr_40985_41841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (2))){
var state_40964__$1 = state_40964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40964__$1,(4),in$);
} else {
if((state_val_40965 === (23))){
var inst_40958 = (state_40964[(2)]);
var state_40964__$1 = state_40964;
var statearr_40986_41842 = state_40964__$1;
(statearr_40986_41842[(2)] = inst_40958);

(statearr_40986_41842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (19))){
var inst_40945 = (state_40964[(2)]);
var state_40964__$1 = state_40964;
var statearr_40987_41843 = state_40964__$1;
(statearr_40987_41843[(2)] = inst_40945);

(statearr_40987_41843[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (11))){
var inst_40916 = (state_40964[(10)]);
var inst_40930 = (state_40964[(7)]);
var inst_40930__$1 = cljs.core.seq(inst_40916);
var state_40964__$1 = (function (){var statearr_40988 = state_40964;
(statearr_40988[(7)] = inst_40930__$1);

return statearr_40988;
})();
if(inst_40930__$1){
var statearr_40989_41844 = state_40964__$1;
(statearr_40989_41844[(1)] = (14));

} else {
var statearr_40990_41845 = state_40964__$1;
(statearr_40990_41845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (9))){
var inst_40952 = (state_40964[(2)]);
var inst_40953 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40964__$1 = (function (){var statearr_40991 = state_40964;
(statearr_40991[(15)] = inst_40952);

return statearr_40991;
})();
if(cljs.core.truth_(inst_40953)){
var statearr_40992_41846 = state_40964__$1;
(statearr_40992_41846[(1)] = (21));

} else {
var statearr_40993_41847 = state_40964__$1;
(statearr_40993_41847[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (5))){
var inst_40908 = cljs.core.async.close_BANG_(out);
var state_40964__$1 = state_40964;
var statearr_40994_41848 = state_40964__$1;
(statearr_40994_41848[(2)] = inst_40908);

(statearr_40994_41848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (14))){
var inst_40930 = (state_40964[(7)]);
var inst_40932 = cljs.core.chunked_seq_QMARK_(inst_40930);
var state_40964__$1 = state_40964;
if(inst_40932){
var statearr_40995_41849 = state_40964__$1;
(statearr_40995_41849[(1)] = (17));

} else {
var statearr_40996_41850 = state_40964__$1;
(statearr_40996_41850[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (16))){
var inst_40948 = (state_40964[(2)]);
var state_40964__$1 = state_40964;
var statearr_40997_41852 = state_40964__$1;
(statearr_40997_41852[(2)] = inst_40948);

(statearr_40997_41852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40965 === (10))){
var inst_40917 = (state_40964[(8)]);
var inst_40919 = (state_40964[(11)]);
var inst_40924 = cljs.core._nth(inst_40917,inst_40919);
var state_40964__$1 = state_40964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40964__$1,(13),out,inst_40924);
} else {
if((state_val_40965 === (18))){
var inst_40930 = (state_40964[(7)]);
var inst_40939 = cljs.core.first(inst_40930);
var state_40964__$1 = state_40964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40964__$1,(20),out,inst_40939);
} else {
if((state_val_40965 === (8))){
var inst_40918 = (state_40964[(9)]);
var inst_40919 = (state_40964[(11)]);
var inst_40921 = (inst_40919 < inst_40918);
var inst_40922 = inst_40921;
var state_40964__$1 = state_40964;
if(cljs.core.truth_(inst_40922)){
var statearr_40998_41854 = state_40964__$1;
(statearr_40998_41854[(1)] = (10));

} else {
var statearr_40999_41855 = state_40964__$1;
(statearr_40999_41855[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27873__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27873__auto____0 = (function (){
var statearr_41000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41000[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27873__auto__);

(statearr_41000[(1)] = (1));

return statearr_41000;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27873__auto____1 = (function (state_40964){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_40964);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e41001){var ex__27876__auto__ = e41001;
var statearr_41002_41856 = state_40964;
(statearr_41002_41856[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_40964[(4)]))){
var statearr_41003_41857 = state_40964;
(statearr_41003_41857[(1)] = cljs.core.first((state_40964[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41858 = state_40964;
state_40964 = G__41858;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27873__auto__ = function(state_40964){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27873__auto____1.call(this,state_40964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27873__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27873__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_41004 = f__27965__auto__();
(statearr_41004[(6)] = c__27964__auto__);

return statearr_41004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));

return c__27964__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41006 = arguments.length;
switch (G__41006) {
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
var G__41008 = arguments.length;
switch (G__41008) {
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
var G__41010 = arguments.length;
switch (G__41010) {
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
var c__27964__auto___41867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_41034){
var state_val_41035 = (state_41034[(1)]);
if((state_val_41035 === (7))){
var inst_41029 = (state_41034[(2)]);
var state_41034__$1 = state_41034;
var statearr_41036_41869 = state_41034__$1;
(statearr_41036_41869[(2)] = inst_41029);

(statearr_41036_41869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (1))){
var inst_41011 = null;
var state_41034__$1 = (function (){var statearr_41037 = state_41034;
(statearr_41037[(7)] = inst_41011);

return statearr_41037;
})();
var statearr_41038_41870 = state_41034__$1;
(statearr_41038_41870[(2)] = null);

(statearr_41038_41870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (4))){
var inst_41014 = (state_41034[(8)]);
var inst_41014__$1 = (state_41034[(2)]);
var inst_41015 = (inst_41014__$1 == null);
var inst_41016 = cljs.core.not(inst_41015);
var state_41034__$1 = (function (){var statearr_41039 = state_41034;
(statearr_41039[(8)] = inst_41014__$1);

return statearr_41039;
})();
if(inst_41016){
var statearr_41040_41871 = state_41034__$1;
(statearr_41040_41871[(1)] = (5));

} else {
var statearr_41041_41872 = state_41034__$1;
(statearr_41041_41872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (6))){
var state_41034__$1 = state_41034;
var statearr_41042_41874 = state_41034__$1;
(statearr_41042_41874[(2)] = null);

(statearr_41042_41874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (3))){
var inst_41031 = (state_41034[(2)]);
var inst_41032 = cljs.core.async.close_BANG_(out);
var state_41034__$1 = (function (){var statearr_41043 = state_41034;
(statearr_41043[(9)] = inst_41031);

return statearr_41043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41034__$1,inst_41032);
} else {
if((state_val_41035 === (2))){
var state_41034__$1 = state_41034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41034__$1,(4),ch);
} else {
if((state_val_41035 === (11))){
var inst_41014 = (state_41034[(8)]);
var inst_41023 = (state_41034[(2)]);
var inst_41011 = inst_41014;
var state_41034__$1 = (function (){var statearr_41044 = state_41034;
(statearr_41044[(7)] = inst_41011);

(statearr_41044[(10)] = inst_41023);

return statearr_41044;
})();
var statearr_41045_41889 = state_41034__$1;
(statearr_41045_41889[(2)] = null);

(statearr_41045_41889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (9))){
var inst_41014 = (state_41034[(8)]);
var state_41034__$1 = state_41034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41034__$1,(11),out,inst_41014);
} else {
if((state_val_41035 === (5))){
var inst_41014 = (state_41034[(8)]);
var inst_41011 = (state_41034[(7)]);
var inst_41018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41014,inst_41011);
var state_41034__$1 = state_41034;
if(inst_41018){
var statearr_41047_41890 = state_41034__$1;
(statearr_41047_41890[(1)] = (8));

} else {
var statearr_41048_41891 = state_41034__$1;
(statearr_41048_41891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (10))){
var inst_41026 = (state_41034[(2)]);
var state_41034__$1 = state_41034;
var statearr_41049_41896 = state_41034__$1;
(statearr_41049_41896[(2)] = inst_41026);

(statearr_41049_41896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41035 === (8))){
var inst_41011 = (state_41034[(7)]);
var tmp41046 = inst_41011;
var inst_41011__$1 = tmp41046;
var state_41034__$1 = (function (){var statearr_41050 = state_41034;
(statearr_41050[(7)] = inst_41011__$1);

return statearr_41050;
})();
var statearr_41051_41905 = state_41034__$1;
(statearr_41051_41905[(2)] = null);

(statearr_41051_41905[(1)] = (2));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_41052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41052[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_41052[(1)] = (1));

return statearr_41052;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_41034){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_41034);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e41053){var ex__27876__auto__ = e41053;
var statearr_41054_41918 = state_41034;
(statearr_41054_41918[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_41034[(4)]))){
var statearr_41055_41921 = state_41034;
(statearr_41055_41921[(1)] = cljs.core.first((state_41034[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41923 = state_41034;
state_41034 = G__41923;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_41034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_41034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_41056 = f__27965__auto__();
(statearr_41056[(6)] = c__27964__auto___41867);

return statearr_41056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41058 = arguments.length;
switch (G__41058) {
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
var c__27964__auto___41926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_41096){
var state_val_41097 = (state_41096[(1)]);
if((state_val_41097 === (7))){
var inst_41092 = (state_41096[(2)]);
var state_41096__$1 = state_41096;
var statearr_41098_41927 = state_41096__$1;
(statearr_41098_41927[(2)] = inst_41092);

(statearr_41098_41927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (1))){
var inst_41059 = (new Array(n));
var inst_41060 = inst_41059;
var inst_41061 = (0);
var state_41096__$1 = (function (){var statearr_41099 = state_41096;
(statearr_41099[(7)] = inst_41061);

(statearr_41099[(8)] = inst_41060);

return statearr_41099;
})();
var statearr_41100_41928 = state_41096__$1;
(statearr_41100_41928[(2)] = null);

(statearr_41100_41928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (4))){
var inst_41064 = (state_41096[(9)]);
var inst_41064__$1 = (state_41096[(2)]);
var inst_41065 = (inst_41064__$1 == null);
var inst_41066 = cljs.core.not(inst_41065);
var state_41096__$1 = (function (){var statearr_41101 = state_41096;
(statearr_41101[(9)] = inst_41064__$1);

return statearr_41101;
})();
if(inst_41066){
var statearr_41102_41931 = state_41096__$1;
(statearr_41102_41931[(1)] = (5));

} else {
var statearr_41103_41932 = state_41096__$1;
(statearr_41103_41932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (15))){
var inst_41086 = (state_41096[(2)]);
var state_41096__$1 = state_41096;
var statearr_41104_41933 = state_41096__$1;
(statearr_41104_41933[(2)] = inst_41086);

(statearr_41104_41933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (13))){
var state_41096__$1 = state_41096;
var statearr_41105_41934 = state_41096__$1;
(statearr_41105_41934[(2)] = null);

(statearr_41105_41934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (6))){
var inst_41061 = (state_41096[(7)]);
var inst_41082 = (inst_41061 > (0));
var state_41096__$1 = state_41096;
if(cljs.core.truth_(inst_41082)){
var statearr_41106_41935 = state_41096__$1;
(statearr_41106_41935[(1)] = (12));

} else {
var statearr_41107_41936 = state_41096__$1;
(statearr_41107_41936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (3))){
var inst_41094 = (state_41096[(2)]);
var state_41096__$1 = state_41096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41096__$1,inst_41094);
} else {
if((state_val_41097 === (12))){
var inst_41060 = (state_41096[(8)]);
var inst_41084 = cljs.core.vec(inst_41060);
var state_41096__$1 = state_41096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41096__$1,(15),out,inst_41084);
} else {
if((state_val_41097 === (2))){
var state_41096__$1 = state_41096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41096__$1,(4),ch);
} else {
if((state_val_41097 === (11))){
var inst_41076 = (state_41096[(2)]);
var inst_41077 = (new Array(n));
var inst_41060 = inst_41077;
var inst_41061 = (0);
var state_41096__$1 = (function (){var statearr_41108 = state_41096;
(statearr_41108[(10)] = inst_41076);

(statearr_41108[(7)] = inst_41061);

(statearr_41108[(8)] = inst_41060);

return statearr_41108;
})();
var statearr_41109_41938 = state_41096__$1;
(statearr_41109_41938[(2)] = null);

(statearr_41109_41938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (9))){
var inst_41060 = (state_41096[(8)]);
var inst_41074 = cljs.core.vec(inst_41060);
var state_41096__$1 = state_41096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41096__$1,(11),out,inst_41074);
} else {
if((state_val_41097 === (5))){
var inst_41061 = (state_41096[(7)]);
var inst_41060 = (state_41096[(8)]);
var inst_41064 = (state_41096[(9)]);
var inst_41069 = (state_41096[(11)]);
var inst_41068 = (inst_41060[inst_41061] = inst_41064);
var inst_41069__$1 = (inst_41061 + (1));
var inst_41070 = (inst_41069__$1 < n);
var state_41096__$1 = (function (){var statearr_41110 = state_41096;
(statearr_41110[(12)] = inst_41068);

(statearr_41110[(11)] = inst_41069__$1);

return statearr_41110;
})();
if(cljs.core.truth_(inst_41070)){
var statearr_41111_41941 = state_41096__$1;
(statearr_41111_41941[(1)] = (8));

} else {
var statearr_41112_41942 = state_41096__$1;
(statearr_41112_41942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (14))){
var inst_41089 = (state_41096[(2)]);
var inst_41090 = cljs.core.async.close_BANG_(out);
var state_41096__$1 = (function (){var statearr_41114 = state_41096;
(statearr_41114[(13)] = inst_41089);

return statearr_41114;
})();
var statearr_41115_41943 = state_41096__$1;
(statearr_41115_41943[(2)] = inst_41090);

(statearr_41115_41943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (10))){
var inst_41080 = (state_41096[(2)]);
var state_41096__$1 = state_41096;
var statearr_41116_41945 = state_41096__$1;
(statearr_41116_41945[(2)] = inst_41080);

(statearr_41116_41945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41097 === (8))){
var inst_41060 = (state_41096[(8)]);
var inst_41069 = (state_41096[(11)]);
var tmp41113 = inst_41060;
var inst_41060__$1 = tmp41113;
var inst_41061 = inst_41069;
var state_41096__$1 = (function (){var statearr_41117 = state_41096;
(statearr_41117[(7)] = inst_41061);

(statearr_41117[(8)] = inst_41060__$1);

return statearr_41117;
})();
var statearr_41118_41953 = state_41096__$1;
(statearr_41118_41953[(2)] = null);

(statearr_41118_41953[(1)] = (2));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_41119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41119[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_41119[(1)] = (1));

return statearr_41119;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_41096){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_41096);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e41120){var ex__27876__auto__ = e41120;
var statearr_41121_41969 = state_41096;
(statearr_41121_41969[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_41096[(4)]))){
var statearr_41122_41972 = state_41096;
(statearr_41122_41972[(1)] = cljs.core.first((state_41096[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41977 = state_41096;
state_41096 = G__41977;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_41096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_41096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_41123 = f__27965__auto__();
(statearr_41123[(6)] = c__27964__auto___41926);

return statearr_41123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41125 = arguments.length;
switch (G__41125) {
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
var c__27964__auto___42005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27965__auto__ = (function (){var switch__27872__auto__ = (function (state_41167){
var state_val_41168 = (state_41167[(1)]);
if((state_val_41168 === (7))){
var inst_41163 = (state_41167[(2)]);
var state_41167__$1 = state_41167;
var statearr_41169_42013 = state_41167__$1;
(statearr_41169_42013[(2)] = inst_41163);

(statearr_41169_42013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (1))){
var inst_41126 = [];
var inst_41127 = inst_41126;
var inst_41128 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41167__$1 = (function (){var statearr_41170 = state_41167;
(statearr_41170[(7)] = inst_41128);

(statearr_41170[(8)] = inst_41127);

return statearr_41170;
})();
var statearr_41171_42018 = state_41167__$1;
(statearr_41171_42018[(2)] = null);

(statearr_41171_42018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (4))){
var inst_41131 = (state_41167[(9)]);
var inst_41131__$1 = (state_41167[(2)]);
var inst_41132 = (inst_41131__$1 == null);
var inst_41133 = cljs.core.not(inst_41132);
var state_41167__$1 = (function (){var statearr_41172 = state_41167;
(statearr_41172[(9)] = inst_41131__$1);

return statearr_41172;
})();
if(inst_41133){
var statearr_41173_42026 = state_41167__$1;
(statearr_41173_42026[(1)] = (5));

} else {
var statearr_41174_42027 = state_41167__$1;
(statearr_41174_42027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (15))){
var inst_41157 = (state_41167[(2)]);
var state_41167__$1 = state_41167;
var statearr_41175_42029 = state_41167__$1;
(statearr_41175_42029[(2)] = inst_41157);

(statearr_41175_42029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (13))){
var state_41167__$1 = state_41167;
var statearr_41176_42034 = state_41167__$1;
(statearr_41176_42034[(2)] = null);

(statearr_41176_42034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (6))){
var inst_41127 = (state_41167[(8)]);
var inst_41152 = inst_41127.length;
var inst_41153 = (inst_41152 > (0));
var state_41167__$1 = state_41167;
if(cljs.core.truth_(inst_41153)){
var statearr_41177_42050 = state_41167__$1;
(statearr_41177_42050[(1)] = (12));

} else {
var statearr_41178_42052 = state_41167__$1;
(statearr_41178_42052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (3))){
var inst_41165 = (state_41167[(2)]);
var state_41167__$1 = state_41167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41167__$1,inst_41165);
} else {
if((state_val_41168 === (12))){
var inst_41127 = (state_41167[(8)]);
var inst_41155 = cljs.core.vec(inst_41127);
var state_41167__$1 = state_41167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41167__$1,(15),out,inst_41155);
} else {
if((state_val_41168 === (2))){
var state_41167__$1 = state_41167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41167__$1,(4),ch);
} else {
if((state_val_41168 === (11))){
var inst_41131 = (state_41167[(9)]);
var inst_41135 = (state_41167[(10)]);
var inst_41145 = (state_41167[(2)]);
var inst_41146 = [];
var inst_41147 = inst_41146.push(inst_41131);
var inst_41127 = inst_41146;
var inst_41128 = inst_41135;
var state_41167__$1 = (function (){var statearr_41179 = state_41167;
(statearr_41179[(11)] = inst_41147);

(statearr_41179[(7)] = inst_41128);

(statearr_41179[(12)] = inst_41145);

(statearr_41179[(8)] = inst_41127);

return statearr_41179;
})();
var statearr_41180_42064 = state_41167__$1;
(statearr_41180_42064[(2)] = null);

(statearr_41180_42064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (9))){
var inst_41127 = (state_41167[(8)]);
var inst_41143 = cljs.core.vec(inst_41127);
var state_41167__$1 = state_41167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41167__$1,(11),out,inst_41143);
} else {
if((state_val_41168 === (5))){
var inst_41131 = (state_41167[(9)]);
var inst_41128 = (state_41167[(7)]);
var inst_41135 = (state_41167[(10)]);
var inst_41135__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41131) : f.call(null,inst_41131));
var inst_41136 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41135__$1,inst_41128);
var inst_41137 = cljs.core.keyword_identical_QMARK_(inst_41128,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41138 = ((inst_41136) || (inst_41137));
var state_41167__$1 = (function (){var statearr_41181 = state_41167;
(statearr_41181[(10)] = inst_41135__$1);

return statearr_41181;
})();
if(cljs.core.truth_(inst_41138)){
var statearr_41182_42067 = state_41167__$1;
(statearr_41182_42067[(1)] = (8));

} else {
var statearr_41183_42068 = state_41167__$1;
(statearr_41183_42068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (14))){
var inst_41160 = (state_41167[(2)]);
var inst_41161 = cljs.core.async.close_BANG_(out);
var state_41167__$1 = (function (){var statearr_41185 = state_41167;
(statearr_41185[(13)] = inst_41160);

return statearr_41185;
})();
var statearr_41186_42069 = state_41167__$1;
(statearr_41186_42069[(2)] = inst_41161);

(statearr_41186_42069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (10))){
var inst_41150 = (state_41167[(2)]);
var state_41167__$1 = state_41167;
var statearr_41187_42070 = state_41167__$1;
(statearr_41187_42070[(2)] = inst_41150);

(statearr_41187_42070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (8))){
var inst_41131 = (state_41167[(9)]);
var inst_41135 = (state_41167[(10)]);
var inst_41127 = (state_41167[(8)]);
var inst_41140 = inst_41127.push(inst_41131);
var tmp41184 = inst_41127;
var inst_41127__$1 = tmp41184;
var inst_41128 = inst_41135;
var state_41167__$1 = (function (){var statearr_41188 = state_41167;
(statearr_41188[(14)] = inst_41140);

(statearr_41188[(7)] = inst_41128);

(statearr_41188[(8)] = inst_41127__$1);

return statearr_41188;
})();
var statearr_41189_42071 = state_41167__$1;
(statearr_41189_42071[(2)] = null);

(statearr_41189_42071[(1)] = (2));


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
var cljs$core$async$state_machine__27873__auto__ = null;
var cljs$core$async$state_machine__27873__auto____0 = (function (){
var statearr_41190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41190[(0)] = cljs$core$async$state_machine__27873__auto__);

(statearr_41190[(1)] = (1));

return statearr_41190;
});
var cljs$core$async$state_machine__27873__auto____1 = (function (state_41167){
while(true){
var ret_value__27874__auto__ = (function (){try{while(true){
var result__27875__auto__ = switch__27872__auto__(state_41167);
if(cljs.core.keyword_identical_QMARK_(result__27875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27875__auto__;
}
break;
}
}catch (e41191){var ex__27876__auto__ = e41191;
var statearr_41192_42073 = state_41167;
(statearr_41192_42073[(2)] = ex__27876__auto__);


if(cljs.core.seq((state_41167[(4)]))){
var statearr_41193_42074 = state_41167;
(statearr_41193_42074[(1)] = cljs.core.first((state_41167[(4)])));

} else {
throw ex__27876__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42075 = state_41167;
state_41167 = G__42075;
continue;
} else {
return ret_value__27874__auto__;
}
break;
}
});
cljs$core$async$state_machine__27873__auto__ = function(state_41167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27873__auto____1.call(this,state_41167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27873__auto____0;
cljs$core$async$state_machine__27873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27873__auto____1;
return cljs$core$async$state_machine__27873__auto__;
})()
})();
var state__27966__auto__ = (function (){var statearr_41194 = f__27965__auto__();
(statearr_41194[(6)] = c__27964__auto___42005);

return statearr_41194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27966__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
