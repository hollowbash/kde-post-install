!function(n,t){for(var r in t)n[r]=t[r]}(exports,function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=478)}({10:function(n,t){n.exports=require("http")},100:function(n,t,r){"use strict";n.exports=function(n){return n=n||Math.random,function(t,r){return t?r&&r(t):r(null,n())}}},101:function(n,t,r){"use strict";n.exports=function(){return function(n,t){t(!0)}}},102:function(n,t,r){"use strict";n.exports=function(n){return function(t,r){r(n)}}},103:function(n,t,r){"use strict";n.exports={drain:r(19),onEnd:r(104),log:r(105),find:r(106),reduce:r(43),collect:r(107),concat:r(108)}},104:function(n,t,r){"use strict";var e=r(19);n.exports=function(n){return e(null,n)}},105:function(n,t,r){"use strict";var e=r(19);n.exports=function(n){return e((function(n){console.log(n)}),n)}},106:function(n,t,r){"use strict";function e(n){return n}var u=r(20),o=r(19);n.exports=function(n,t){var r=!1;return t?n=u(n)||e:(t=n,n=e),o((function(e){if(n(e))return r=!0,t(null,e),!1}),(function(n){r||t(!0===n?null:n,null)}))}},107:function(n,t,r){"use strict";var e=r(43);n.exports=function(n){return e((function(n,t){return n.push(t),n}),[],n)}},108:function(n,t,r){"use strict";var e=r(43);n.exports=function(n){return e((function(n,t){return n+t}),"",n)}},109:function(n,t,r){"use strict";n.exports={map:r(110),asyncMap:r(111),filter:r(44),filterNot:r(112),through:r(113),take:r(114),unique:r(67),nonUnique:r(115),flatten:r(116)}},110:function(n,t,r){"use strict";function e(n){return n}var u=r(20);n.exports=function(n){return n?(n=u(n),function(t){return function(r,e){t(r,(function(r,u){try{u=r?null:n(u)}catch(n){return t(n,(function(){return e(n)}))}e(r,u)}))}}):e}},111:function(n,t,r){"use strict";function e(n){return n}var u=r(20);n.exports=function(n){if(!n)return e;n=u(n);var t,r,o=!1;return function(e){return function u(i,s){if(r)return s(r);i?(r=i,e(i,o?function(n){o?t=s:s(i)}:function(n){s(i)})):e(null,(function(e,i){e?s(e):r?s(r):(o=!0,n(i,(function(n,e){o=!1,r?(s(r),t&&t(r)):n?u(n,s):s(null,e)})))}))}}}},112:function(n,t,r){"use strict";var e=r(66),u=r(44);n.exports=function(n){return n=e(n),u((function(t){return!n(t)}))}},113:function(n,t,r){"use strict";n.exports=function(n,t){var r=!1;function e(n){!r&&t&&(r=!0,t(!0===n?null:n))}return function(t){return function(r,u){return r&&e(r),t(r,(function(t,r){t?e(t):n&&n(r),u(t,r)}))}}}},114:function(n,t,r){"use strict";n.exports=function(n,t){var r=(t=t||{}).last||!1,e=!1;if("number"==typeof n){r=!0;var u=n;n=function(){return--u}}return function(t){function u(n){t(!0,(function(t){r=!1,n(t||!0)}))}return function(o,i){e&&!o?r?u(i):i(e):(e=o)?t(e,i):t(null,(function(t,o){(e=e||t)?i(e):n(o)?i(null,o):(e=!0,r?i(null,o):u(i))}))}}}},115:function(n,t,r){"use strict";var e=r(67);n.exports=function(n){return e(n,!0)}},116:function(n,t,r){"use strict";var e=r(42),u=r(65);n.exports=function(){return function(n){var t;return function(r,o){function i(){t(null,(function(t,r){!0===t?s():t?n(!0,(function(n){o(t)})):o(null,r)}))}function s(){t=null,n(null,(function(n,r){if(n)return o(n);Array.isArray(r)||r&&"object"==typeof r?r=e(r):"function"!=typeof r&&(r=u(r)),t=r,i()}))}r?t?t(r,(function(t){n(t||r,o)})):n(r,o):t?i():s()}}}},117:function(n,t,r){"use strict";var e=r(118),u=(r(21),r(122)),o=r(149),i=r(150),s=r(6).EventEmitter;function c(n,t,r,c,f,l,a){var p;"function"==typeof n&&(p=n,n={}),t=t||{},n=n||{};var h,d=new s;l||(l=e);var v={_emit:function(n,t){return d&&d._emit(n,t),v},id:c},y=u(i(r,t,f).bind(v),l,(function(n){if(!d.closed&&(d.closed=!0,d.emit("closed"),h)){var t=h;h=null,t(n)}}));if(o(d,n,(function(n,t,r,e){if(y.closed)throw new Error("stream is closed");return y.remoteCall(n,t,r,e)}),p),d._emit=d.emit,a){Object.__defineGetter__.call(d,"id",(function(){return v.id})),Object.__defineSetter__.call(d,"id",(function(n){v.id=n}));var m=!0;d.createStream=function(n){if(h=n,m)return m=!1,y;throw new Error("one stream per rpc")}}else d.stream=y;return d.closed=!1,d.close=function(n,t){return y.close(n,t),this},d}n.exports=function(n,t,r){return arguments.length>3?c.apply(this,arguments):function(e,u,o){return c(n,t,e,o,u,r,!0)}}},118:function(n,t,r){var e=r(119),u=r(120),o=0,i=1,s=2,c="GOODBYE",f=Buffer.isBuffer;function l(n){return"string"==typeof n}function a(n){var t=new Buffer(9),r=0,e=void 0!==n.value?n.value:n.end;return l(n)&&n===c?(t.fill(0),[t,null]):(l(e)?(r=i,e=new Buffer(e)):f(e)?r=o:(r=s,e=new Buffer(JSON.stringify(e))),r=n.stream<<3|n.end<<2|r,t[0]=r,t.writeUInt32BE(e.length,1),t.writeInt32BE(n.req||0,5),[t,e])}function p(n){if(9!=n.length)throw new Error("expected header to be 9 bytes long");var t=n[0],r=n.readUInt32BE(1);return{req:n.readInt32BE(5),stream:!!(8&t),end:!!(4&t),value:null,length:r,type:3&t}}function h(n,t){if(n.length!==t.length)throw new Error("incorrect length, expected:"+t.length+" found:"+n.length);if(o===t.type)t.value=n;else if(i===t.type)t.value=n.toString();else{if(s!==t.type)throw new Error("unknown message type");t.value=JSON.parse(n.toString())}return t}function d(){return e((function(n){var t=a(n);this.queue(t[0]),null!==t[1]&&this.queue(t[1])}))}function v(){var n=u(),t=!1;return function(r){return n(r),function(r,e){return t?e(!0):r?n.abort(r,e):void n.read(9,(function(r,u){if(r)return e(r);var o=p(u);if(0===o.length)return t=!0,e(null,c);n.read(o.length,(function(n,t){if(n)return e(n);try{h(t,o)}catch(n){return e(n)}e(null,o)}))}))}}}(t=n.exports=function(n){return{source:d()(n.source),sink:function(t){return n.sink(v()(t))}}}).encodePair=a,t.decodeHead=p,t.decodeBody=h,t.encode=d,t.decode=v},119:function(n,t,r){var e=r(69);n.exports=function(n,t){return function(r){var u,o,i=[];function s(n){i.push(n)}n=n||function(n){this.queue(n)},t=t||function(){this.queue(null)};var c,f={emit:function(n,t){"data"==n&&s(t),"end"==n&&(u=!0,s(null)),"error"==n&&(o=t)},queue:s};return function(s,l){if(u=u||s,s)return r(s,(function(){if(c){var n=c;c=null,n(s)}l(s)}));c=l,e((function e(s){if(c)if(l=c,o)c=null,l(o);else if(i.length){var a=i.shift();c=null,l(null===a,a)}else r(u,(function(i,a){if(i&&!0!==i)return o=i,s();if(u=u||i)t.call(f);else if(null!==a&&(n.call(f,a),o||u))return r(o||u,(function(){c=null,l(o||u)}));s(e)}))}))}}}},120:function(n,t,r){"use strict";var e=r(121);function u(n){return"function"==typeof n}function o(n,t){return t?function(r,e){var u=setTimeout((function(){n(new Error("pull-reader: read exceeded timeout"),e)}),t);n(r,(function(n,t){clearTimeout(u),e(n,t)}))}:n}n.exports=function(n){var t,r,i,s,c,f=[],l=!1,a=e();function p(){for(;f.length;)if(null==f[0].length&&a.has(1))f.shift().cb(null,a.get());else if(a.has(f[0].length)){var n=f.shift();n.cb(null,a.get(n.length))}else if(1==i&&f[0].length&&a.length<f[0].length){var t="stream ended with:"+a.length+" but wanted:"+f[0].length;f.shift().cb(new Error(t))}else{if(!i)return!!f.length;f.shift().cb(i)}return f.length||!a.has(1)||c}function h(){p()&&!l&&(!t||l||s||(l=!0,r(null,(function(n,t){if(l=!1,n)return i=n,p();a.add(t),h()}))))}function d(e){if(c){for(;f.length;)f.shift().cb(c);return cb&&cb(c)}r=o(e,n),t=e,h()}return d.abort=function(n,r){c=n||!0,t?(l=!0,t(c,(function(){for(;f.length;)f.shift().cb(c);r&&r(c)}))):r()},d.read=function(r,e,i){if(u(e)&&(i=e,e=n),!u(i))return s=!0,function(n,r){if(l||a.has(1)){if(n)return t(n,r);f.push({length:null,cb:r}),h()}else o(t,e)(n,(function(n,t){r(n,t)}))};var c;f.push({length:(c=r,Number.isFinite(c)?r:null),cb:i}),h()},d}},121:function(n,t){n.exports=function(){var n=[],t=0;return{length:t,data:this,add:function(r){if(!Buffer.isBuffer(r))throw new Error("data must be a buffer, was: "+JSON.stringify(r));return this.length=t+=r.length,n.push(r),this},has:function(n){return null==n?t>0:t>=n},get:function(r){var e;if(null==r||r===t){t=0;var u=n;return n=[],1==u.length?u[0]:Buffer.concat(u)}if(n.length>1&&r<=(e=n[0].length)){var o=n[0].slice(0,r);return r===e?n.shift():n[0]=n[0].slice(r,e),t-=r,o}if(r<t){for(var i=[],s=0;s+n[0].length<r;){var c=n.shift();s+=c.length,i.push(c)}return s<r&&(i.push(n[0].slice(0,r-s)),n[0]=n[0].slice(r-s,n[0].length),this.length=t-=r),Buffer.concat(i)}throw new Error("could not get "+r+" bytes")}}}},122:function(n,t,r){"use strict";var e=r(123),u=(r(30),r(124)),o=r(125),i=r(21),s=r(74);function c(n){return function(n){return"sync"===n}(n)||function(n){return"async"===n}(n)}function f(n){return function(n){return"source"===n}(n)||function(n){return"sink"===n}(n)||function(n){return"duplex"===n}(n)}n.exports=function(n,t,r){var l=e({message:function(n){},request:function(t,r){if(!Array.isArray(t.args))return r(new Error("invalid request, args should be array, was:"+JSON.stringify(t)));var e=t.name,u=t.args,o=!1,i=!1;u.push((function(n,t){i=!0,o=!0,r(n,t)}));try{n("async",e,u)}catch(n){if(o||i)throw s(n,"no callback provided to muxrpc async funtion");return r(n)}},stream:function(t){t.read=function(r,e){var o,s,c=r.name,l=r.type;if(t.read=null,!f(l))return t.write(null,new Error("unsupported stream type:"+l));if(e)return t.write(null,e);try{s=n(l,c,r.args)}catch(n){o=n}var a=u[{source:"sink",sink:"source"}[l]||"duplex"](t);return i.pipeToStream(l,a,o?i.errorAsStream(l,o):s)}},close:function(n){if(l=null,a.ended=!0,!a.closed&&(a.closed=!0,r)){var t=r;r=null,t(n)}}}),a=o(u(l,(function(n){})));return(a=t?t(a):a).remoteCall=function(n,t,r,e){if("emit"===t)return l.message(r);if(!c(n)&&!f(n))throw new Error("unsupported type:"+JSON.stringify(n));if(c(n))return l.request({name:t,args:r},e);var o=l.stream(),i=u[n](o,e);return o.write({name:t,args:r,type:n}),i},a.isOpen=function(){return!l.ended},a.close=function(n,t){return"function"==typeof n&&(t=n,n=!1),l?n?(l.destroy(n),t&&t()):(l.close((function(n){if(t)t(n);else if(n)throw s(n,"no callback provided for muxrpc close")})),this):t&&t()},a.closed=!1,a}},123:function(n,t){function r(n){return n?!0===n||{message:n.message,name:n.name,stack:n.stack}:n}function e(n){this.ended=!1,this.opts=n,this._req_counter=1,this._requests={},this._instreams={},this._outstreams={},this._closecbs=[],this._closing=!1,this._closed=!1,n.close&&this._closecbs.push(n.close)}function u(n){console.error("packet-stream asked to read after closed",n)}function o(n,t,r){this.id=n,this.read=null,this.writeEnd=null,this.readEnd=null,this._ps=t,this._remove=r,this._seq_counter=1}n.exports=function(n){return new e(n)},e.prototype.message=function(n){this.read({req:0,stream:!1,end:!1,value:n})},e.prototype.request=function(n,t){if(this._closing)return t(new Error("parent stream is closing"));var r=this._req_counter++,e=this;this._requests[r]=function(n,u){delete e._requests[r],t(n,u),e._maybedone()},this.read({req:r,stream:!1,end:!1,value:n})},e.prototype.stream=function(){if(this._closing)throw new Error("parent stream is closing");var n=this._req_counter++,t=this;return this._outstreams[n]=new o(n,this,(function(){delete t._outstreams[n]})),this._outstreams[n]},e.prototype.close=function(n){if(!n)throw new Error("packet-stream.close *must* have callback");if(this._closed)return n();this._closecbs.push(n),this._closing=!0,this._maybedone()},e.prototype.destroy=function(n){n=n||r(n),this.ended=n,this._closing=!0;var t=!0===n?new Error("unexpected end of parent stream"):n,e=0;for(var u in this._requests)e++,this._requests[u](t);for(var u in this._instreams)e++,this._instreams[u].writeEnd=!0,this._instreams[u].destroy(t);for(var u in this._outstreams)e++,this._outstreams[u].writeEnd=!0,this._outstreams[u].destroy(t);0===e&&!0===n&&(t=null),this._maybedone(t)},e.prototype._maybedone=function(n){!this._closed&&this._closing&&0===Object.keys(this._requests).length&&0===Object.keys(this._instreams).length&&0===Object.keys(this._outstreams).length&&(this._closed=!0,this._closecbs.forEach((function(t){t(n)})),this.read(null,n||!0),this.opts=null,this._closecbs.length=0,this.read=u)},e.prototype.read=function(n){console.error("please overwrite read method to do IO",n)},e.prototype.write=function(n,t){this.ended||(t?this.destroy(t):n.req&&!n.stream?this._onrequest(n):n.req&&n.stream?this._onstream(n):this._onmessage(n))},e.prototype._onmessage=function(n){this.opts&&"function"==typeof this.opts.message&&this.opts.message(n.value)},e.prototype._onrequest=function(n){var t=-1*n.req;if(n.req<0)"function"==typeof this._requests[t]&&this._requests[t](n.end?n.value:null,n.end?null:n.value);else if(this.opts&&"function"==typeof this.opts.request){var e=!1,u=this;this.opts.request(n.value,(function(n,o){if(e)throw new Error("cb called twice from local api");e=!0,n?u.read({value:r(n),end:!0,req:t}):u.read({value:o,end:!1,req:t}),u._maybedone()}))}else{if(this.ended){var o=!0===this.ended?new Error("unexpected end of parent stream"):this.ended;this.read({value:r(o),end:!0,stream:!1,req:t})}else this.read({value:{message:"Unable to handle requests",name:"NO_REQUEST_HANDLER",stack:null},end:!0,stream:!1,req:t});this._maybedone()}},e.prototype._onstream=function(n){if(n.req<0){var t=-1*n.req,r=this._outstreams[t];if(!r)return console.error("no stream for incoming msg",n);n.end?(r.writeEnd&&delete this._outstreams[t],r.readEnd=!0,r.read(null,n.value),this._maybedone()):r.read(n.value)}else{t=n.req;var e=this._instreams[t];if(!e){var u=this;e=this._instreams[t]=new o(-1*t,this,(function(){delete u._instreams[t]})),this.opts&&"function"==typeof this.opts.stream&&this.opts.stream(e)}n.end?(e.writeEnd&&delete this._instreams[t],e.readEnd=!0,e.read&&e.read(null,n.value),this._maybedone()):e.read?e.read(n.value):console.error("no .read for stream:",e.id,"dropped:",n)}},o.prototype.write=function(n,t){if(t){this.writeEnd=t;var e=this._ps;e&&(e.read({req:this.id,stream:!0,end:!0,value:r(t)}),this.readEnd&&this.destroy(),e._maybedone())}else this._ps&&this._ps.read({req:this.id,stream:!0,end:!1,value:n})},o.prototype.end=function(n){this.write(null,r(n||!0))},o.prototype.destroy=function(n){if(this.writeEnd){if(!this.readEnd){this.readEnd=!0;try{this.read&&this.read(null,n)}catch(n){console.error("Exception thrown by PacketStream substream end handler",n),console.error(n.stack)}}}else{if(this.writeEnd=!0,!this.readEnd){this.readEnd=!0;try{this.read(null,n)}catch(n){console.error("Exception thrown by PacketStream substream end handler",n),console.error(n.stack)}}this.write(null,n)}this._ps&&(this._remove(),this._remove=null,this.read=u,this._ps=null)}},124:function(n,t,r){"use strict";var e=r(30);function u(t,r){return n.exports(t,(function(n){t.writeEnd||t.write(null,n||!0),r&&r(n)}))}n.exports=function(n,t){var r,u,o=[],i=!1,s=function(n){var t=!1;return function(r,e){t||(t=!0,n(r,e))}}((function(e,o){t&&t(e,o),n=null,t=null,r=null,u&&u(e||!0,(function(){}))}));return n.read=function(n,t){if(i=i||t,r){var e=r;r=null,e(i,n)}else i||o.push(n);i&&s(!0!==i?i:null)},{source:function(t,e){t?(n&&n.write(null,t),e(t),s(!0!==t?t:null)):o.length?e(null,o.shift()):i?e(i):r=e},sink:function(t){if(i)return t(i,(function(){})),u=null;u=t,e.drain((function(t){if(i)return!1;n.write(t)}),(function(t){n&&!n.writeEnd&&n.write(null,t||!0),s&&s(t)}))(t)}}},n.exports.source=function(n){return u(n).source},n.exports.sink=function(n,t){return u(n,t).sink},n.exports.duplex=n.exports},125:function(n,t,r){var e=r(126),u=r(127);n.exports=function(n,t){var r=e(t=t||"GOODBYE");return{source:u(n.source,r),sink:u(u.filter((function(n){if(n!==t)return!0;r.end()})),n.sink)}}},126:function(n,t){n.exports=function(n){var t,r,e;function u(u){return function(o,i){u(o,(function(u,o){if(u&&!e)return e=!0,i(null,n);u&&t?i(u):u?r=i:i(null,o)}))}}return u.end=function(){return t=!0,r&&r(t),u},u}},127:function(n,t,r){"use strict";var e=r(128),u=r(134),o=r(140);for(var i in t=n.exports=r(148),e)t[i]=e[i];for(var i in o)t[i]=o[i];for(var i in u)t[i]=u[i]},128:function(n,t,r){"use strict";n.exports={keys:r(129),once:r(71),values:r(45),count:r(130),infinite:r(131),empty:r(132),error:r(133)}},129:function(n,t,r){"use strict";var e=r(45);n.exports=function(n){return e(Object.keys(n))}},130:function(n,t,r){"use strict";n.exports=function(n){var t=0;return n=n||1/0,function(r,e){return r?e&&e(r):t>n?e(!0):void e(null,t++)}}},131:function(n,t,r){"use strict";n.exports=function(n){return n=n||Math.random,function(t,r){return t?r&&r(t):r(null,n())}}},132:function(n,t,r){"use strict";n.exports=function(){return function(n,t){t(!0)}}},133:function(n,t,r){"use strict";n.exports=function(n){return function(t,r){r(n)}}},134:function(n,t,r){"use strict";n.exports={drain:r(22),onEnd:r(135),log:r(136),find:r(137),reduce:r(46),collect:r(138),concat:r(139)}},135:function(n,t,r){"use strict";var e=r(22);n.exports=function(n){return e(null,n)}},136:function(n,t,r){"use strict";var e=r(22);n.exports=function(n){return e((function(n){console.log(n)}),n)}},137:function(n,t,r){"use strict";function e(n){return n}var u=r(23),o=r(22);n.exports=function(n,t){var r=!1;return t?n=u(n)||e:(t=n,n=e),o((function(e){if(n(e))return r=!0,t(null,e),!1}),(function(n){r||t(!0===n?null:n,null)}))}},138:function(n,t,r){"use strict";var e=r(46);n.exports=function(n){return e((function(n,t){return n.push(t),n}),[],n)}},139:function(n,t,r){"use strict";var e=r(46);n.exports=function(n){return e((function(n,t){return n+t}),"",n)}},140:function(n,t,r){"use strict";n.exports={map:r(141),asyncMap:r(142),filter:r(47),filterNot:r(143),through:r(144),take:r(145),unique:r(73),nonUnique:r(146),flatten:r(147)}},141:function(n,t,r){"use strict";function e(n){return n}var u=r(23);n.exports=function(n){return n?(n=u(n),function(t){return function(r,e){t(r,(function(r,u){try{u=r?null:n(u)}catch(n){return t(n,(function(){return e(n)}))}e(r,u)}))}}):e}},142:function(n,t,r){"use strict";function e(n){return n}var u=r(23);n.exports=function(n){if(!n)return e;n=u(n);var t,r,o=!1;return function(e){return function u(i,s){if(r)return s(r);i?(r=i,e(i,o?function(){o?t=s:s(i)}:s)):e(null,(function(e,i){e?s(e):r?s(r):(o=!0,n(i,(function(n,e){o=!1,r?(s(r),t(r)):n?u(n,s):s(null,e)})))}))}}}},143:function(n,t,r){"use strict";var e=r(72),u=r(47);n.exports=function(n){return n=e(n),u((function(t){return!n(t)}))}},144:function(n,t,r){"use strict";n.exports=function(n,t){var r=!1;function e(n){!r&&t&&(r=!0,t(!0===n?null:n))}return function(t){return function(r,u){return r&&e(r),t(r,(function(t,r){t?e(t):n&&n(r),u(t,r)}))}}}},145:function(n,t,r){"use strict";n.exports=function(n,t){var r=(t=t||{}).last||!1,e=!1;if("number"==typeof n){r=!0;var u=n;n=function(){return--u}}return function(t){function u(n){t(!0,(function(t){r=!1,n(t||!0)}))}return function(o,i){e?r?u(i):i(e):(e=o)?t(e,i):t(null,(function(t,o){(e=e||t)?i(e):n(o)?i(null,o):(e=!0,r?i(null,o):u(i))}))}}}},146:function(n,t,r){"use strict";var e=r(73);n.exports=function(n){return e(n,!0)}},147:function(n,t,r){"use strict";var e=r(45),u=r(71);n.exports=function(){return function(n){var t;return function(r,o){function i(){t(null,(function(t,r){!0===t?s():t?n(!0,(function(n){o(t)})):o(null,r)}))}function s(){t=null,n(null,(function(n,r){if(n)return o(n);Array.isArray(r)||r&&"object"==typeof r?r=e(r):"function"!=typeof r&&(r=u(r)),t=r,i()}))}r?t?t(r,(function(t){n(t||r,o)})):n(r,o):t?i():s()}}}},148:function(n,t,r){"use strict";n.exports=function n(t){var r=arguments.length;if("function"==typeof t&&1===t.length){for(var e=new Array(r),u=0;u<r;u++)e[u]=arguments[u];return function(t){if(null==e)throw new TypeError("partial sink should only be called once!");var u=e;switch(e=null,r){case 1:return n(t,u[0]);case 2:return n(t,u[0],u[1]);case 3:return n(t,u[0],u[1],u[2]);case 4:return n(t,u[0],u[1],u[2],u[3]);default:return u.unshift(t),n.apply(null,u)}}}var o=t;o&&"function"==typeof o.source&&(o=o.source);for(u=1;u<r;u++){var i=arguments[u];"function"==typeof i?o=i(o):i&&"object"==typeof i&&(i.sink(o),o=i.source)}return o}},149:function(n,t,r){"use strict";var e=r(21),u=r(74);function o(n,t,r,e){for(var u in t)!function(t,u){var i,s=r?r.concat(t):[t];n[t]=(i=u)&&"object"==typeof i?o({},u,s,e):function(){return e(u,s,[].slice.call(arguments))}}(u,t[u]);return n}function i(n){if(n)throw u(n,"callback not provided")}const s=["sync","async"];n.exports=function(n,t,r,u){function c(n,t,u){var o,c="function"==typeof u[u.length-1]?u.pop():s.includes(n)?null:i;if("function"==typeof c){try{o=r(n,t,u,c)}catch(t){return e.errorAsStreamOrCb(n,t,c)}return o}return new Promise((e,o)=>r(n,t,u,(n,t)=>{n?o(n):e(t)}))}return n=n||{},u?c("async","manifest",[function(t,r){if(t)return u(t);o(n,r,null,c),u(null,r,n)}]):o(n,t,null,c),n}},150:function(n,t,r){var e=r(151),u=r(21);n.exports=function(n,t,r){function o(n,r){return n===u.get(t,r)}function i(t,r,e){if("emit"===r)throw new Error("emit has been removed");if("async"===t&&o("sync",r)){var i,s=e.pop();try{i=u.get(n,r).apply(this,e)}catch(n){return s(n)}return s(null,i)}if(!o(t,r))throw new Error("no "+t+":"+r);return u.get(n,r).apply(this,e)}return r=e(r),function(n,t,e){var u=r.pre(t,e);if(u)throw u;return i.call(this,n,t,e)}}},151:function(n,t,r){"use strict";var e=r(21),u=Array.isArray;function o(n){return"function"==typeof n}function i(n){return u(n)?n:n.split(".")}n.exports=function(n){if((t=n)&&o(t.pre)&&o(t.test)&&o(t.post))return n;var t;if(o(n))return{pre:n};var r=null,s={};function c(n){return n.allow?(r={},n.allow.forEach((function(n){e.set(r,i(n),!0)}))):r=null,n.deny?n.deny.forEach((function(n){e.set(s,i(n),!0)})):s={},this}return n&&c(n),c.pre=function(n,t){return n=u(n)?n:[n],r&&!e.prefix(r,n)?new Error("method:"+n+" is not in list of allowed methods"):s&&e.prefix(s,n)?new Error("method:"+n+" is on list of disallowed methods"):void 0},c.post=function(n,t){},c.test=function(n,t){return c.pre(n,t)},c.get=function(){return{allow:r,deny:s}},c}},152:function(n,t,r){r(68);var e=r(69);function u(n){n.destroy?n.destroy():console.error("warning, stream-to-pull-stream: \nthe wrapped node-stream does not implement `destroy`, \nthis may cause resource leaks.")}function o(n,t,r){var o,i,s=!1;function c(){i||(i=!0,r&&r(!0===o?null:o))}function f(){s||(s=!0,a(),o?c():n(o=!0,c))}function l(t){a(),o||n(o=t,c)}function a(){t.on("finish",f),t.removeListener("close",f),t.removeListener("error",l)}t.on("close",f),t.on("finish",f),t.on("error",l),process.nextTick((function(){e((function(r){n(null,(function(n,e){if(o=o||n,!0===n)return t._isStdio?c():t.end();if(o=o||n)return u(t),c();t._isStdio?t.write(e,(function(){r()})):!1===t.write(e)?t.once("drain",r):r()}))}))}))}function i(n){var t,r=[],e=[],o=!1;function i(){for(;(r.length||t)&&e.length;)e.shift()(r.length?null:t,r.shift());!r.length&&o&&(o=!1,n.resume())}return n.on("data",(function(t){r.push(t),i(),r.length&&n.pause&&(o=!0,n.pause())})),n.on("end",(function(){t=!0,i()})),n.on("close",(function(){t=!0,i()})),n.on("error",(function(n){t=n,i()})),function(r,o){if(!o)throw new Error("*must* provide cb");if(r){function s(){for(;e.length;)e.shift()(r);o(r)}if(t)return s();n.once("close",s),u(n)}else e.push(o),i()}}var s=i,c=function(n,t){return function(r){return o(r,n,t)}},f=function(n){return i(n)};(t=n.exports=function(n,t){return n.writable&&n.write?n.readable?function(r){return o(r,n,t),i(n)}:c(n,t):f(n)}).sink=c,t.source=f,t.read=s,t.read1=i,t.read2=function(n){var t,r=!1,e=!1;function u(){var r=n.read();if(null!==r&&t){var e=t;t=null,e(null,r)}}return n.on("readable",(function(){e=!0,t&&u()})).on("end",(function(){r=!0,t&&t(r)})).on("error",(function(n){r=n,t&&t(r)})),function(n,o){t=o,r?o(r):e&&u()}},t.duplex=function(n,t){return{source:f(n),sink:c(n,t)}},t.transform=function(n){return function(t){var r=f(n);return c(n)(t),r}}},19:function(n,t,r){"use strict";n.exports=function(n,t){var r,e;function u(o){if(r=o,e)return u.abort();!function u(){for(var o=!0,i=!1;o;)if(i=!1,r(null,(function(s,c){if(i=!0,s=s||e){if(o=!1,t)t(!0===s?null:s);else if(s&&!0!==s)throw s}else n&&!1===n(c)||e?(o=!1,r(e||!0,t||function(){})):o||u()})),!i)return void(o=!1)}()}return u.abort=function(n,t){if("function"==typeof n&&(t=n,n=!0),e=n||!0,r)return r(e,t||function(){})},u}},20:function(n,t){n.exports=function(n){return n&&("string"==typeof n?function(t){return t[n]}:"object"==typeof n&&"function"==typeof n.exec?function(t){var r=n.exec(t);return r&&r[0]}:n)}},21:function(n,t,r){"use strict";var e=r(30);Array.isArray;t.set=function(n,t,r){for(var e,u,o=0;o<t.length;o++){var i=t[o];n[i]=n[i]||{},e=n,u=i,n=n[i]}e[u]=r},t.get=function(n,t){if("string"==typeof t)return n[t];for(var r,e=0;e<t.length;e++){if(r=n=n[t[e]],null==n)return n}return r},t.prefix=function(n,t){for(var r,e=0;e<t.length;e++){if(r=n=n[t[e]],"object"!=typeof n)return n;n}return"object"!=typeof r&&!!r};t.mount=function(n,t,r){if(!Array.isArray(t))throw new Error("path must be array of strings");return function(n,t){for(var r in t)n[r]=t[r];return n}(function(n,t){for(var r in t){var e=t[r];n[e]||(n[e]={}),n=n[e]}return n}(n,t),r)},t.unmount=function(n,t){return function(n,t){!function n(r,e){var u=t[e];r&&(t.length-1===e?delete r[u]:e<t.length&&n(r[u],e+1),function(n){for(var t in n)return!1;return!0}(r[u])&&delete r[u])}(n,0)}(n,t)};function u(n){return"source"===n}function o(n){return"sink"===n}function i(n){return"duplex"===n}function s(n){return function(t){t(n||!0,(function(){}))}}function c(n){return{source:e.error(n),sink:s(n)}}t.errorAsStream=function(n,t){return u(n)?e.error(t):o(n)?s(t):c(t)},t.errorAsStreamOrCb=function(n,t,r){return function(n){return"sync"===n}(i=n)||function(n){return"async"===n}(i)?r(t):u(n)?e.error(t):o(n)?s(t):r(t),c(t);var i},t.pipeToStream=function(n,t,r){u(n)?t(r):o(n)?r(t):i(n)&&e(t,r,t)}},22:function(n,t,r){"use strict";n.exports=function(n,t){var r,e;function u(o){if(r=o,e)return u.abort();!function u(){for(var o=!0,i=!1;o;)if(i=!1,r(null,(function(s,c){if(i=!0,s=s||e){if(o=!1,t)t(!0===s?null:s);else if(s&&!0!==s)throw s}else n&&!1===n(c)||e?(o=!1,r(e||!0,t||function(){})):o||u()})),!i)return void(o=!1)}()}return u.abort=function(n,t){if("function"==typeof n&&(t=n,n=!0),e=n||!0,r)return r(e,t||function(){})},u}},23:function(n,t){n.exports=function(n){return n&&("string"==typeof n?function(t){return t[n]}:"object"==typeof n&&"function"==typeof n.exec?function(t){var r=n.exec(t);return r&&r[0]}:n)}},30:function(n,t,r){"use strict";var e=r(97),u=r(103),o=r(109);for(var i in(t=n.exports=r(68)).pull=t,e)t[i]=e[i];for(var i in o)t[i]=o[i];for(var i in u)t[i]=u[i]},33:function(n,t){n.exports=require("net")},42:function(n,t,r){"use strict";var e=r(64);n.exports=function(n,t){if(!n)return function(n,r){return n?e(r,n,t):r(!0)};Array.isArray(n)||(n=Object.keys(n).map((function(t){return n[t]})));var r=0;return function(u,o){if(u)return e(o,u,t);r>=n.length?o(!0):o(null,n[r++])}}},43:function(n,t,r){"use strict";var e=r(19);n.exports=function(n,t,r){r||(r=t,t=null);var u=e((function(r){t=n(t,r)}),(function(n){r(n,t)}));return 2===arguments.length?function(n){n(null,(function(e,o){if(e)return r(!0===e?null:e);t=o,u(n)}))}:u}},44:function(n,t,r){"use strict";var e=r(66);n.exports=function(n){return n=e(n),function(t){return function r(e,u){for(var o,i=!0;i;)i=!1,o=!0,t(e,(function(t,e){if(!t&&!n(e))return o?i=!0:r(t,u);u(t,e)})),o=!1}}}},45:function(n,t,r){"use strict";var e=r(70);n.exports=function(n,t){if(!n)return function(n,r){return n?e(r,n,t):r(!0)};Array.isArray(n)||(n=Object.keys(n).map((function(t){return n[t]})));var r=0;return function(u,o){if(u)return e(o,u,t);r>=n.length?o(!0):o(null,n[r++])}}},46:function(n,t,r){"use strict";var e=r(22);n.exports=function(n,t,r){r||(r=t,t=null);var u=e((function(r){t=n(t,r)}),(function(n){r(n,t)}));return 2===arguments.length?function(n){n(null,(function(e,o){if(e)return r(!0===e?null:e);t=o,u(n)}))}:u}},47:function(n,t,r){"use strict";var e=r(72);n.exports=function(n){return n=e(n),function(t){return function r(e,u){for(var o,i=!0;i;)i=!1,o=!0,t(e,(function(t,e){if(!t&&!n(e))return o?i=!0:r(t,u);u(t,e)})),o=!1}}}},478:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=r(33),u=r(10),o=r(30),i=r(117),s=r(152),c=[],f=i({sshAuth:"duplex",rpc:"async",ready:"async"},null)();o(s.source(process.stdin),f.createStream(),s.sink(process.stdout));const l=process.env.SSH_AUTH_SOCK;if(l){let n;c.push(new Promise(t=>n=t)),e.createServer(n=>{n=s.duplex(n),o(n,f.sshAuth(),n)}).listen(l,n)}let a;c.push(new Promise(n=>a=n)),u.createServer((n,t)=>{const r=[];n.on("data",n=>r.push(n)),n.on("end",()=>{f.rpc(Buffer.concat(r).toString(),(n,r)=>{n?(console.error(n),t.writeHead(500),t.end()):(t.writeHead(200),t.write(r,n=>{n&&console.error(n)}),t.end())})})}).listen(process.env.REMOTE_CONTAINERS_IPC,a),Promise.all(c).then(()=>f.ready(n=>console.error(n))).catch(n=>console.error(n))},6:function(n,t){n.exports=require("events")},64:function(n,t){n.exports=function(n,t,r){n(t),r&&r(!0===t?null:t)}},65:function(n,t,r){"use strict";var e=r(64);n.exports=function(n,t){return function(r,u){if(r)return e(u,r,t);if(null!=n){var o=n;n=null,u(null,o)}else u(!0)}}},66:function(n,t,r){var e=r(20);function u(n){return n}n.exports=function(n){return"object"==typeof n&&"function"==typeof n.test?function(t){return n.test(t)}:e(n)||u}},67:function(n,t,r){"use strict";function e(n){return n}var u=r(20),o=r(44);n.exports=function(n,t){n=u(n)||e;var r={};return o((function(e){var u=n(e);return r[u]?!!t:(r[u]=!0,!t)}))}},68:function(n,t,r){"use strict";n.exports=function n(t){var r=arguments.length;if("function"==typeof t&&1===t.length){for(var e=new Array(r),u=0;u<r;u++)e[u]=arguments[u];return function(t){if(null==e)throw new TypeError("partial sink should only be called once!");var u=e;switch(e=null,r){case 1:return n(t,u[0]);case 2:return n(t,u[0],u[1]);case 3:return n(t,u[0],u[1],u[2]);case 4:return n(t,u[0],u[1],u[2],u[3]);default:return u.unshift(t),n.apply(null,u)}}}var o=t;o&&"function"==typeof o.source&&(o=o.source);for(u=1;u<r;u++){var i=arguments[u];"function"==typeof i?o=i(o):i&&"object"==typeof i&&(i.sink(o),o=i.source)}return o}},69:function(n,t){n.exports=function(n){!function t(){var r=!0,e=!1;do{e=!0,r=!1,n.call(this,(function(){e?r=!0:t()})),e=!1}while(r)}()}},70:function(n,t){n.exports=function(n,t,r){n(t),r&&r(!0===t?null:t)}},71:function(n,t,r){"use strict";var e=r(70);n.exports=function(n,t){return function(r,u){if(r)return e(u,r,t);if(null!=n){var o=n;n=null,u(null,o)}else u(!0)}}},72:function(n,t,r){var e=r(23);function u(n){return n}n.exports=function(n){return"object"==typeof n&&"function"==typeof n.test?function(t){return n.test(t)}:e(n)||u}},73:function(n,t,r){"use strict";function e(n){return n}var u=r(23),o=r(47);n.exports=function(n,t){n=u(n)||e;var r={};return o((function(e){var u=n(e);return r[u]?!!t:(r[u]=!0,!t)}))}},74:function(n,t){function r(n){return n.stack&&n.name&&n.message?n.stack.substring(n.name.length+3+n.message.length).split("\n"):n.stack?n.stack.split("\n"):void 0}n.exports=function(n,t){if(!(n.stack&&n.name&&n.message))return console.error(new Error("stackless error")),n;var e,u,o=new Error(t),i=(e=r(o).slice(1),u=r(n),e.filter((function(n){return!~u.indexOf(n)}))).join("\n");return o.__proto__=n,o.stack=o.name+": "+o.message+"\n"+i+"\n  "+n.stack,o}},97:function(n,t,r){"use strict";n.exports={keys:r(98),once:r(65),values:r(42),count:r(99),infinite:r(100),empty:r(101),error:r(102)}},98:function(n,t,r){"use strict";var e=r(42);n.exports=function(n){return e(Object.keys(n))}},99:function(n,t,r){"use strict";n.exports=function(n){var t=0;return n=n||1/0,function(r,e){return r?e&&e(r):t>n?e(!0):void e(null,t++)}}}}));
//# sourceMappingURL=remoteContainersServer.js.map