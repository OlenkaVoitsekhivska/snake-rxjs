(()=>{"use strict";var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};function n(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function e(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function r(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function i(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}function c(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e.apply(t,n||[]),i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(t){o[t]&&(r[t]=function(n){return new Promise((function(e,r){i.push([t,n,e,r])>1||s(t,n)}))})}function s(t,n){try{(e=o[t](n)).value instanceof u?Promise.resolve(e.value.v).then(a,l):f(i[0][2],e)}catch(t){f(i[0][3],t)}var e}function a(t){s("next",t)}function l(t){s("throw",t)}function f(t,n){t(n),i.shift(),i.length&&s(i[0][0],i[0][1])}}Object.create,Object.create;var s=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function a(t){return"function"==typeof t}function l(t){return a(null==t?void 0:t.then)}var f,h=((f=function(t){return function(n){t(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n}}((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),f.prototype.constructor=f,f);function p(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var d=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var n;return t.prototype.unsubscribe=function(){var t,n,e,u,c;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var l=r(s),f=l.next();!f.done;f=l.next())f.value.remove(this)}catch(n){t={error:n}}finally{try{f&&!f.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(a(p))try{p()}catch(t){c=t instanceof h?t.errors:[t]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var v=r(d),b=v.next();!b.done;b=v.next()){var w=b.value;try{y(w)}catch(t){c=null!=c?c:[],t instanceof h?c=i(i([],o(c)),o(t.errors)):c.push(t)}}}catch(t){e={error:t}}finally{try{b&&!b.done&&(u=v.return)&&u.call(v)}finally{if(e)throw e.error}}}if(c)throw new h(c)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)y(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(n)}},t.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},t.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},t.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&p(n,t)},t.prototype.remove=function(n){var e=this._finalizers;e&&p(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=((n=new t).closed=!0,n),t}();function v(t){return t instanceof d||t&&"closed"in t&&a(t.remove)&&a(t.add)&&a(t.unsubscribe)}function y(t){a(t)?t():t.unsubscribe()}d.EMPTY;var b=null,w=null,m=void 0,x=!1,g=!1,S={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var u=S.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([t,n],o(e))):setTimeout.apply(void 0,i([t,n],o(e)))},clearTimeout:function(t){var n=S.delegate;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function _(t){S.setTimeout((function(){if(!b)throw t;b(t)}))}function I(){}var T=E("C",void 0,void 0);function E(t,n,e){return{kind:t,value:n,error:e}}var A=null,P=function(t){function e(n){var e=t.call(this)||this;return e.isStopped=!1,n?(e.destination=n,v(n)&&n.add(e)):e.destination=R,e}return n(e,t),e.create=function(t,n,e){return new L(t,n,e)},e.prototype.next=function(t){this.isStopped?C(function(t){return E("N",t,void 0)}(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?C(E("E",void 0,t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?C(T,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(d),k=Function.prototype.bind;function O(t,n){return k.call(t,n)}var j=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(t){z(t)}},t.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(t){z(t)}else z(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){z(t)}},t}(),L=function(t){function e(n,e,r){var o,i,u=t.call(this)||this;return a(n)||!n?o={next:null!=n?n:void 0,error:null!=e?e:void 0,complete:null!=r?r:void 0}:u&&g?((i=Object.create(n)).unsubscribe=function(){return u.unsubscribe()},o={next:n.next&&O(n.next,i),error:n.error&&O(n.error,i),complete:n.complete&&O(n.complete,i)}):o=n,u.destination=new j(o),u}return n(e,t),e}(P);function z(t){var n;x?(n=t,x&&A&&(A.errorThrown=!0,A.error=n)):_(t)}function C(t,n){var e=w;e&&S.setTimeout((function(){return e(t,n)}))}var R={closed:!0,next:I,error:function(t){throw t},complete:I},M="function"==typeof Symbol&&Symbol.observable||"@@observable";function U(t){return t}function Y(t){return 0===t.length?U:1===t.length?t[0]:function(n){return t.reduce((function(t,n){return n(t)}),n)}}var F=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(t,n,e){var r,o=this,i=(r=t)&&r instanceof P||function(t){return t&&a(t.next)&&a(t.error)&&a(t.complete)}(r)&&v(r)?t:new L(t,n,e);return function(t){if(x){var n=!A;if(n&&(A={errorThrown:!1,error:null}),t(),n){var e=A,r=e.errorThrown,o=e.error;if(A=null,r)throw o}}else t()}((function(){var t=o,n=t.operator,e=t.source;i.add(n?n.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},t.prototype.forEach=function(t,n){var e=this;return new(n=N(n))((function(n,r){var o=new L({next:function(n){try{t(n)}catch(t){r(t),o.unsubscribe()}},error:r,complete:n});e.subscribe(o)}))},t.prototype._subscribe=function(t){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(t)},t.prototype[M]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Y(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=N(t))((function(t,e){var r;n.subscribe((function(t){return r=t}),(function(t){return e(t)}),(function(){return t(r)}))}))},t.create=function(n){return new t(n)},t}();function N(t){var n;return null!==(n=null!=t?t:m)&&void 0!==n?n:Promise}function q(t){return a(t[M])}function D(t){return Symbol.asyncIterator&&a(null==t?void 0:t[Symbol.asyncIterator])}function G(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var B="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function X(t){return a(null==t?void 0:t[B])}function H(t){return c(this,arguments,(function(){var n,r,o;return e(this,(function(e){switch(e.label){case 0:n=t.getReader(),e.label=1;case 1:e.trys.push([1,,9,10]),e.label=2;case 2:return[4,u(n.read())];case 3:return r=e.sent(),o=r.value,r.done?[4,u(void 0)]:[3,5];case 4:return[2,e.sent()];case 5:return[4,u(o)];case 6:return[4,e.sent()];case 7:return e.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}}))}))}function J(t){return a(null==t?void 0:t.getReader)}function K(t){if(t instanceof F)return t;if(null!=t){if(q(t))return i=t,new F((function(t){var n=i[M]();if(a(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(s(t))return o=t,new F((function(t){for(var n=0;n<o.length&&!t.closed;n++)t.next(o[n]);t.complete()}));if(l(t))return e=t,new F((function(t){e.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,_)}));if(D(t))return Q(t);if(X(t))return n=t,new F((function(t){var e,o;try{for(var i=r(n),u=i.next();!u.done;u=i.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(t){e={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}t.complete()}));if(J(t))return Q(H(t))}var n,e,o,i;throw G(t)}function Q(t){return new F((function(n){(function(t,n){var o,i,u,c,s,a,l,f;return s=this,a=void 0,f=function(){var s,a;return e(this,(function(e){switch(e.label){case 0:e.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=r(t),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(e){n[e]=t[e]&&function(n){return new Promise((function(r,o){!function(t,n,e,r){Promise.resolve(r).then((function(n){t({value:n,done:e})}),n)}(r,o,(n=t[e](n)).done,n.value)}))}}}(t),e.label=1;case 1:return[4,o.next()];case 2:if((i=e.sent()).done)return[3,4];if(s=i.value,n.next(s),n.closed)return[2];e.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=e.sent(),u={error:a},[3,11];case 6:return e.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:e.sent(),e.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,n){function e(t){try{o(f.next(t))}catch(t){n(t)}}function r(t){try{o(f.throw(t))}catch(t){n(t)}}function o(n){var o;n.done?t(n.value):(o=n.value,o instanceof l?o:new l((function(t){t(o)}))).then(e,r)}o((f=f.apply(s,a||[])).next())}))})(t,n).catch((function(t){return n.error(t)}))}))}function V(t){return function(n){if(function(t){return a(null==t?void 0:t.lift)}(n))return n.lift((function(n){try{return t(n,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function W(t,n,e,r,o){return new Z(t,n,e,r,o)}var Z=function(t){function e(n,e,r,o,i,u){var c=t.call(this,n)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=e?function(t){try{e(t)}catch(t){n.error(t)}}:t.prototype._next,c._error=o?function(t){try{o(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=r?function(){try{r()}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return n(e,t),e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;t.prototype.unsubscribe.call(this),!e&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}},e}(P);function $(t,n){return V((function(e,r){var o=0;e.subscribe(W(r,(function(e){r.next(t.call(n,e,o++))})))}))}function tt(t,n,e,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=n.schedule((function(){e(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(i),!o)return i}function nt(t,n,e){return void 0===e&&(e=1/0),a(n)?nt((function(e,r){return $((function(t,o){return n(e,t,r,o)}))(K(t(e,r)))}),e):("number"==typeof n&&(e=n),V((function(n,r){return function(t,n,e,r,o,i,u,c){var s=[],a=0,l=0,f=!1,h=function(){!f||s.length||a||n.complete()},p=function(t){return a<r?d(t):s.push(t)},d=function(t){a++;var o=!1;K(e(t,l++)).subscribe(W(n,(function(t){n.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(;s.length&&a<r;)t=void 0,t=s.shift(),d(t);h()}catch(t){n.error(t)}var t})))};return t.subscribe(W(n,p,(function(){f=!0,h()}))),function(){}}(n,r,t,e)})))}var et=Array.isArray;var rt=["addListener","removeListener"],ot=["addEventListener","removeEventListener"],it=["on","off"];function ut(t,n,e,r){if(a(e)&&(r=e,e=void 0),r)return ut(t,n,e).pipe((u=r,$((function(t){return function(t,n){return et(n)?t.apply(void 0,i([],o(n))):t(n)}(u,t)}))));var u,c=o(function(t){return a(t.addEventListener)&&a(t.removeEventListener)}(t)?ot.map((function(r){return function(o){return t[r](n,o,e)}})):function(t){return a(t.addListener)&&a(t.removeListener)}(t)?rt.map(ct(t,n)):function(t){return a(t.on)&&a(t.off)}(t)?it.map(ct(t,n)):[],2),l=c[0],f=c[1];if(!l&&s(t))return nt((function(t){return ut(t,n,e)}))(K(t));if(!l)throw new TypeError("Invalid event target");return new F((function(t){var n=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.next(1<n.length?n:n[0])};return l(n),function(){return f(n)}}))}function ct(t,n){return function(e){return function(r){return t[e](n,r)}}}var st=function(t){function e(n,e){return t.call(this)||this}return n(e,t),e.prototype.schedule=function(t,n){return void 0===n&&(n=0),this},e}(d),at={setInterval:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var u=at.delegate;return(null==u?void 0:u.setInterval)?u.setInterval.apply(u,i([t,n],o(e))):setInterval.apply(void 0,i([t,n],o(e)))},clearInterval:function(t){var n=at.delegate;return((null==n?void 0:n.clearInterval)||clearInterval)(t)},delegate:void 0},lt=function(t){function e(n,e){var r=t.call(this,n,e)||this;return r.scheduler=n,r.work=e,r.pending=!1,r}return n(e,t),e.prototype.schedule=function(t,n){if(void 0===n&&(n=0),this.closed)return this;this.state=t;var e=this.id,r=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(r,e,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(r,this.id,n),this},e.prototype.requestAsyncId=function(t,n,e){return void 0===e&&(e=0),at.setInterval(t.flush.bind(t,this),e)},e.prototype.recycleAsyncId=function(t,n,e){if(void 0===e&&(e=0),null!=e&&this.delay===e&&!1===this.pending)return n;at.clearInterval(n)},e.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,n);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,n){var e,r=!1;try{this.work(t)}catch(t){r=!0,e=t||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),e},e.prototype.unsubscribe=function(){if(!this.closed){var n=this.id,e=this.scheduler,r=e.actions;this.work=this.state=this.scheduler=null,this.pending=!1,p(r,this),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(st),ft={now:function(){return(ft.delegate||Date).now()},delegate:void 0},ht=function(){function t(n,e){void 0===e&&(e=t.now),this.schedulerActionCtor=n,this.now=e}return t.prototype.schedule=function(t,n,e){return void 0===n&&(n=0),new this.schedulerActionCtor(this,t).schedule(e,n)},t.now=ft.now,t}(),pt=new(function(t){function e(n,e){void 0===e&&(e=ht.now);var r=t.call(this,n,e)||this;return r.actions=[],r._active=!1,r._scheduled=void 0,r}return n(e,t),e.prototype.flush=function(t){var n=this.actions;if(this._active)n.push(t);else{var e;this._active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,e){for(;t=n.shift();)t.unsubscribe();throw e}}},e}(ht))(lt),dt=pt;function vt(t){return t&&a(t.schedule)}function yt(){return void 0===(t=1)&&(t=1/0),nt(U,t);var t}function bt(t){return t[t.length-1]}function wt(t){return a(bt(t))?t.pop():void 0}function mt(t){return vt(bt(t))?t.pop():void 0}function xt(t,n){return void 0===n&&(n=0),V((function(e,r){e.subscribe(W(r,(function(e){return tt(r,t,(function(){return r.next(e)}),n)}),(function(){return tt(r,t,(function(){return r.complete()}),n)}),(function(e){return tt(r,t,(function(){return r.error(e)}),n)})))}))}function gt(t,n){return void 0===n&&(n=0),V((function(e,r){r.add(t.schedule((function(){return e.subscribe(r)}),n))}))}function St(t,n){if(!t)throw new Error("Iterable cannot be null");return new F((function(e){tt(e,n,(function(){var r=t[Symbol.asyncIterator]();tt(e,n,(function(){r.next().then((function(t){t.done?e.complete():e.next(t.value)}))}),0,!0)}))}))}function _t(t,n){return n?function(t,n){if(null!=t){if(q(t))return function(t,n){return K(t).pipe(gt(n),xt(n))}(t,n);if(s(t))return function(t,n){return new F((function(e){var r=0;return n.schedule((function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())}))}))}(t,n);if(l(t))return function(t,n){return K(t).pipe(gt(n),xt(n))}(t,n);if(D(t))return St(t,n);if(X(t))return function(t,n){return new F((function(e){var r;return tt(e,n,(function(){r=t[B](),tt(e,n,(function(){var t,n,o;try{n=(t=r.next()).value,o=t.done}catch(t){return void e.error(t)}o?e.complete():e.next(n)}),0,!0)})),function(){return a(null==r?void 0:r.return)&&r.return()}}))}(t,n);if(J(t))return function(t,n){return St(H(t),n)}(t,n)}throw G(t)}(t,n):K(t)}function It(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return yt()(_t(t,mt(t)))}function Tt(t,n,e,r,o){return function(i,u){var c=e,s=n,a=0;i.subscribe(W(u,(function(n){var e=a++;s=c?t(s,n,e):(c=!0,n),r&&u.next(s)}),o&&function(){c&&u.next(s),u.complete()}))}}function Et(t,n){return t===n}const At=document.getElementById("game-board"),Pt=At.getContext("2d");class kt{constructor(t,n){this.x=t,this.y=n}}let Ot=20,jt=At.width/Ot-2,Lt=10,zt=10;const Ct=[];let Rt=2,Mt=5,Ut=5;function Yt(){var t;Nt(),Mt===Lt&&Ut===zt&&(Mt=Math.floor(Math.random()*Ot),Ut=Math.floor(Math.random()*Ot),Rt++),Pt.fillStyle="red",Pt.fillRect(Mt*Ot,Ut*Ot,jt,jt),qt(),t=Rt,Pt.fillStyle="white",Pt.fillText("Score:"+(t-2),20,20)}const Ft={37:{xStep:-1,yStep:0},39:{xStep:1,yStep:0},38:{xStep:0,yStep:-1},40:{xStep:0,yStep:1}};function Nt(){Pt.fillStyle="black",Pt.fillRect(0,0,At.width,At.height)}function qt(){Pt.fillStyle="green";for(let t=0;t<Ct.length;t++){let n=Ct[t];Pt.fillRect(n.x*Ot,n.y*Ot,jt,jt)}Ct.push(new kt(Lt,zt)),Ct.length>Rt&&Ct.shift(),Pt.fillStyle="orange",Pt.fillRect(Lt*Ot,zt*Ot,jt,jt)}function Dt(t){return Lt+=t.xStep,zt+=t.yStep,{headX:Lt,headY:zt}}function Gt(t,n){return((t,n)=>n.xStep===-1*t.xStep||n.yStep===-1*t.yStep)(t,n)?t:n}Nt(),qt(),function t(){const n=ut(document,"keydown").pipe(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=mt(t);return V((function(n,r){(e?It(t,n,e):It(t,n)).subscribe(r)}))}(Yt),(u=({keyCode:t})=>37===t||38===t||39===t||40===t,V((function(t,n){var e=0;t.subscribe(W(n,(function(t){return u.call(undefined,t,e++)&&n.next(t)})))}))),$((({keyCode:t})=>Ft[t])),function(t,n){return V(Tt(t,n,arguments.length>=2,!0))}(Gt),(void 0===r&&(r=U),e=null!=e?e:Et,V((function(t,n){var o,i=!0;t.subscribe(W(n,(function(t){var u=r(t);!i&&e(o,u)||(i=!1,o=u,n.next(t))})))}))));var e,r,u;const c=(s=1e3,void 0===s&&(s=0),void 0===a&&(a=pt),s<0&&(s=0),function(t,n,e){void 0===t&&(t=0),void 0===e&&(e=dt);var r=-1;return null!=n&&(vt(n)?e=n:r=n),new F((function(n){var o,i=(o=t)instanceof Date&&!isNaN(o)?+t-e.now():t;i<0&&(i=0);var u=0;return e.schedule((function(){n.closed||(n.next(u++),0<=r?this.schedule(void 0,r):n.complete())}),i)}))}(s,s,a)).pipe(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=wt(t);return V((function(n,r){for(var u=t.length,c=new Array(u),s=t.map((function(){return!1})),a=!1,l=function(n){K(t[n]).subscribe(W(r,(function(t){c[n]=t,a||s[n]||(s[n]=!0,(a=s.every(U))&&(s=null))}),I))},f=0;f<u;f++)l(f);n.subscribe(W(r,(function(t){if(a){var n=i([t],o(c));r.next(e?e.apply(void 0,i([],o(n))):n)}})))}))}(n,((t,n)=>n)),$(Dt));var s,a;const l=c.subscribe((()=>{Yt(),function(n){Lt*Ot!==At.width&&zt*Ot!==At.height&&0!==Lt&&0!==zt||(n.unsubscribe(),Pt.fillStyle="white",Pt.fillText("Game over",200,200),Lt=10,zt=10,Ct.length=0,Rt=2,Mt=5,Ut=5,setTimeout((()=>alert("Punch any arrow key to continue")),1e3),t())}(l)}))}()})();