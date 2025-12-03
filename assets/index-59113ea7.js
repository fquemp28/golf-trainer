(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},mi={},os={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),xc=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),Pc=Symbol.for("react.lazy"),Qo=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,us={};function vn(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||as}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cs(){}cs.prototype=vn.prototype;function Zl(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||as}var eo=Zl.prototype=new cs;eo.constructor=Zl;ss(eo,vn.prototype);eo.isPureReactComponent=!0;var Ko=Array.isArray,ds=Object.prototype.hasOwnProperty,to={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)ds.call(t,r)&&!ps.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:or,type:e,key:l,ref:o,props:i,_owner:to.current}}function Tc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function no(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Lc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yo=/\/+/g;function Ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lc(""+e.key):t.toString(36)}function Tr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case or:case xc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ti(o,0):r,Ko(i)?(n="",e!=null&&(n=e.replace(Yo,"$&/")+"/"),Tr(i,t,n,"",function(d){return d})):i!=null&&(no(i)&&(i=Tc(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ko(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ti(l,a);o+=Tr(l,t,n,s,i)}else if(s=_c(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ti(l,a++),o+=Tr(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fr(e,t,n){if(e==null)return e;var r=[],i=0;return Tr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Rc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Lr={transition:null},Fc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:to};function ms(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:fr,forEach:function(e,t,n){fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fr(e,function(){t++}),t},toArray:function(e){return fr(e,function(t){return t})||[]},only:function(e){if(!no(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=vn;F.Fragment=kc;F.Profiler=bc;F.PureComponent=Zl;F.StrictMode=Sc;F.Suspense=zc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fc;F.act=ms;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=to.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ds.call(t,s)&&!ps.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:or,type:e.type,key:i,ref:l,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Nc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ec,_context:e},e.Consumer=e};F.createElement=fs;F.createFactory=function(e){var t=fs.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Cc,render:e}};F.isValidElement=no;F.lazy=function(e){return{$$typeof:Pc,_payload:{_status:-1,_result:e},_init:Rc}};F.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};F.unstable_act=ms;F.useCallback=function(e,t){return he.current.useCallback(e,t)};F.useContext=function(e){return he.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return he.current.useDeferredValue(e)};F.useEffect=function(e,t){return he.current.useEffect(e,t)};F.useId=function(){return he.current.useId()};F.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return he.current.useMemo(e,t)};F.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};F.useRef=function(e){return he.current.useRef(e)};F.useState=function(e){return he.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return he.current.useTransition()};F.version="18.3.1";os.exports=F;var A=os.exports;const Dc=wc(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=A,Ac=Symbol.for("react.element"),Ic=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,Oc=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$c.call(t,r)&&!Bc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ac,type:e,key:l,ref:o,props:i,_owner:Oc.current}}mi.Fragment=Ic;mi.jsx=hs;mi.jsxs=hs;ls.exports=mi;var u=ls.exports,il={},gs={exports:{}},je={},ys={exports:{}},vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,_){var T=b.length;b.push(_);e:for(;0<T;){var O=T-1>>>1,ee=b[O];if(0<i(ee,_))b[O]=_,b[T]=ee,T=O;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var _=b[0],T=b.pop();if(T!==_){b[0]=T;e:for(var O=0,ee=b.length,dr=ee>>>1;O<dr;){var zt=2*(O+1)-1,_i=b[zt],jt=zt+1,pr=b[jt];if(0>i(_i,T))jt<ee&&0>i(pr,_i)?(b[O]=pr,b[jt]=T,O=jt):(b[O]=_i,b[zt]=T,O=zt);else if(jt<ee&&0>i(pr,T))b[O]=pr,b[jt]=T,O=jt;else break e}}return _}function i(b,_){var T=b.sortIndex-_.sortIndex;return T!==0?T:b.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],d=[],g=1,h=null,m=3,w=!1,S=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(b){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=b)r(d),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(d)}}function v(b){if(k=!1,f(b),!S)if(n(s)!==null)S=!0,We(N);else{var _=n(d);_!==null&&R(v,_.startTime-b)}}function N(b,_){S=!1,k&&(k=!1,p(P),P=-1),w=!0;var T=m;try{for(f(_),h=n(s);h!==null&&(!(h.expirationTime>_)||b&&!Y());){var O=h.callback;if(typeof O=="function"){h.callback=null,m=h.priorityLevel;var ee=O(h.expirationTime<=_);_=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(s)&&r(s),f(_)}else r(s);h=n(s)}if(h!==null)var dr=!0;else{var zt=n(d);zt!==null&&R(v,zt.startTime-_),dr=!1}return dr}finally{h=null,m=T,w=!1}}var z=!1,C=null,P=-1,$=5,L=-1;function Y(){return!(e.unstable_now()-L<$)}function Se(){if(C!==null){var b=e.unstable_now();L=b;var _=!0;try{_=C(!0,b)}finally{_?Ke():(z=!1,C=null)}}else z=!1}var Ke;if(typeof c=="function")Ke=function(){c(Se)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,be=E.port2;E.port1.onmessage=Se,Ke=function(){be.postMessage(null)}}else Ke=function(){D(Se,0)};function We(b){C=b,z||(z=!0,Ke())}function R(b,_){P=D(function(){b(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,We(N))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var T=m;m=_;try{return b()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,_){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var T=m;m=b;try{return _()}finally{m=T}},e.unstable_scheduleCallback=function(b,_,T){var O=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?O+T:O):T=O,b){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,b={id:g++,callback:_,priorityLevel:b,startTime:T,expirationTime:ee,sortIndex:-1},T>O?(b.sortIndex=T,t(d,b),n(s)===null&&b===n(d)&&(k?(p(P),P=-1):k=!0,R(v,T-O))):(b.sortIndex=ee,t(s,b),S||w||(S=!0,We(N))),b},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(b){var _=m;return function(){var T=m;m=_;try{return b.apply(this,arguments)}finally{m=T}}}})(vs);ys.exports=vs;var Uc=ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=A,ze=Uc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ws=new Set,Wn={};function Ut(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)ws.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,Hc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Jo={};function Vc(e){return ll.call(Jo,e)?!0:ll.call(Xo,e)?!1:Hc.test(e)?Jo[e]=!0:(Xo[e]=!0,!1)}function qc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gc(e,t,n,r){if(t===null||typeof t>"u"||qc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ro=/[\-:]([a-z])/g;function io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ro,io);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ro,io);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ro,io);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function lo(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gc(t,n,i,r)&&(n=null),r||i===null?Vc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),oo=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),ks=Symbol.for("react.context"),ao=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),so=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Ss=Symbol.for("react.offscreen"),Zo=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Li;function _n(e){if(Li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var Ri=!1;function Fi(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Qc(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case qt:return"Portal";case ol:return"Profiler";case oo:return"StrictMode";case al:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ks:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case ao:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case so:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Kc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===oo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yc(e){var t=bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Yc(e))}function Es(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ea(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ns(e,t){t=t.checked,t!=null&&lo(e,"checked",t,!1)}function dl(e,t){Ns(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ta(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function na(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Tn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Cs(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ra(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Xc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function _s(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if(Jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yl=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,on=null,an=null;function ia(e){if(e=ur(e)){if(typeof vl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=wi(t),vl(e.stateNode,e.type,t))}}function Ts(e){on?an?an.push(e):an=[e]:on=e}function Ls(){if(on){var e=on,t=an;if(an=on=null,ia(e),t)for(e=0;e<t.length;e++)ia(t[e])}}function Rs(e,t){return e(t)}function Fs(){}var Di=!1;function Ds(e,t,n){if(Di)return e(t,n);Di=!0;try{return Rs(e,t,n)}finally{Di=!1,(on!==null||an!==null)&&(Fs(),Ls())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var wl=!1;if(tt)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{wl=!1}function Zc(e,t,n,r,i,l,o,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Dn=!1,Hr=null,Vr=!1,xl=null,ed={onError:function(e){Dn=!0,Hr=e}};function td(e,t,n,r,i,l,o,a,s){Dn=!1,Hr=null,Zc.apply(ed,arguments)}function nd(e,t,n,r,i,l,o,a,s){if(td.apply(this,arguments),Dn){if(Dn){var d=Hr;Dn=!1,Hr=null}else throw Error(x(198));Vr||(Vr=!0,xl=d)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ms(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(Wt(e)!==e)throw Error(x(188))}function rd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return la(i),e;if(l===r)return la(i),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function As(e){return e=rd(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var $s=ze.unstable_scheduleCallback,oa=ze.unstable_cancelCallback,id=ze.unstable_shouldYield,ld=ze.unstable_requestPaint,X=ze.unstable_now,od=ze.unstable_getCurrentPriorityLevel,co=ze.unstable_ImmediatePriority,Os=ze.unstable_UserBlockingPriority,qr=ze.unstable_NormalPriority,ad=ze.unstable_LowPriority,Bs=ze.unstable_IdlePriority,hi=null,Ge=null;function sd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:dd,ud=Math.log,cd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(ud(e)/cd|0)|0}var yr=64,vr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ln(a):(l&=o,l!==0&&(r=Ln(l)))}else o=n&~i,o!==0?r=Ln(o):l!==0&&(r=Ln(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Oe(l),a=1<<o,s=i[o];s===-1?(!(a&n)||a&r)&&(i[o]=pd(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Us(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Ws(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hs,fo,Vs,qs,Gs,Sl=!1,wr=[],mt=null,ht=null,gt=null,qn=new Map,Gn=new Map,ct=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aa(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function bn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ur(t),t!==null&&fo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gd(e,t,n,r,i){switch(t){case"focusin":return mt=bn(mt,e,t,n,r,i),!0;case"dragenter":return ht=bn(ht,e,t,n,r,i),!0;case"mouseover":return gt=bn(gt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return qn.set(l,bn(qn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Gn.set(l,bn(Gn.get(l)||null,e,t,n,r,i)),!0}return!1}function Qs(e){var t=Lt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ms(n),t!==null){e.blockedOn=t,Gs(e.priority,function(){Vs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yl=r,n.target.dispatchEvent(r),yl=null}else return t=ur(n),t!==null&&fo(t),e.blockedOn=n,!1;t.shift()}return!0}function sa(e,t,n){Rr(e)&&n.delete(t)}function yd(){Sl=!1,mt!==null&&Rr(mt)&&(mt=null),ht!==null&&Rr(ht)&&(ht=null),gt!==null&&Rr(gt)&&(gt=null),qn.forEach(sa),Gn.forEach(sa)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,yd)))}function Qn(e){function t(i){return En(i,e)}if(0<wr.length){En(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&En(mt,e),ht!==null&&En(ht,e),gt!==null&&En(gt,e),qn.forEach(t),Gn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Qs(n),n.blockedOn===null&&ct.shift()}var sn=lt.ReactCurrentBatchConfig,Qr=!0;function vd(e,t,n,r){var i=I,l=sn.transition;sn.transition=null;try{I=1,mo(e,t,n,r)}finally{I=i,sn.transition=l}}function wd(e,t,n,r){var i=I,l=sn.transition;sn.transition=null;try{I=4,mo(e,t,n,r)}finally{I=i,sn.transition=l}}function mo(e,t,n,r){if(Qr){var i=bl(e,t,n,r);if(i===null)qi(e,t,r,Kr,n),aa(e,r);else if(gd(i,e,t,n,r))r.stopPropagation();else if(aa(e,r),t&4&&-1<hd.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&Hs(l),l=bl(e,t,n,r),l===null&&qi(e,t,r,Kr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else qi(e,t,r,null,n)}}var Kr=null;function bl(e,t,n,r){if(Kr=null,e=uo(r),e=Lt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ms(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function Ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case co:return 1;case Os:return 4;case qr:case ad:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var pt=null,ho=null,Fr=null;function Ys(){if(Fr)return Fr;var e,t=ho,n=t.length,r,i="value"in pt?pt.value:pt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function ua(){return!1}function Pe(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xr:ua,this.isPropagationStopped=ua,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},go=Pe(wn),sr=G({},wn,{view:0,detail:0}),xd=Pe(sr),Ai,Ii,Nn,gi=G({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Ai=e.screenX-Nn.screenX,Ii=e.screenY-Nn.screenY):Ii=Ai=0,Nn=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),ca=Pe(gi),kd=G({},gi,{dataTransfer:0}),Sd=Pe(kd),bd=G({},sr,{relatedTarget:0}),$i=Pe(bd),Ed=G({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nd=Pe(Ed),Cd=G({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zd=Pe(Cd),jd=G({},wn,{data:0}),da=Pe(jd),Pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Td[e])?!!t[e]:!1}function yo(){return Ld}var Rd=G({},sr,{key:function(e){if(e.key){var t=Pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=Pe(Rd),Dd=G({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pa=Pe(Dd),Md=G({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),Ad=Pe(Md),Id=G({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=Pe(Id),Od=G({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Pe(Od),Ud=[9,13,27,32],vo=tt&&"CompositionEvent"in window,Mn=null;tt&&"documentMode"in document&&(Mn=document.documentMode);var Wd=tt&&"TextEvent"in window&&!Mn,Xs=tt&&(!vo||Mn&&8<Mn&&11>=Mn),fa=String.fromCharCode(32),ma=!1;function Js(e,t){switch(e){case"keyup":return Ud.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Hd(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(ma=!0,fa);case"textInput":return e=t.data,e===fa&&ma?null:e;default:return null}}function Vd(e,t){if(Qt)return e==="compositionend"||!vo&&Js(e,t)?(e=Ys(),Fr=ho=pt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qd[e.type]:t==="textarea"}function eu(e,t,n,r){Ts(r),t=Yr(t,"onChange"),0<t.length&&(n=new go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Kn=null;function Gd(e){du(e,0)}function yi(e){var t=Xt(e);if(Es(t))return e}function Qd(e,t){if(e==="change")return t}var tu=!1;if(tt){var Oi;if(tt){var Bi="oninput"in document;if(!Bi){var ga=document.createElement("div");ga.setAttribute("oninput","return;"),Bi=typeof ga.oninput=="function"}Oi=Bi}else Oi=!1;tu=Oi&&(!document.documentMode||9<document.documentMode)}function ya(){An&&(An.detachEvent("onpropertychange",nu),Kn=An=null)}function nu(e){if(e.propertyName==="value"&&yi(Kn)){var t=[];eu(t,Kn,e,uo(e)),Ds(Gd,t)}}function Kd(e,t,n){e==="focusin"?(ya(),An=t,Kn=n,An.attachEvent("onpropertychange",nu)):e==="focusout"&&ya()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(Kn)}function Xd(e,t){if(e==="click")return yi(t)}function Jd(e,t){if(e==="input"||e==="change")return yi(t)}function Zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Zd;function Yn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ll.call(t,i)||!Ue(e[i],t[i]))return!1}return!0}function va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wa(e,t){var n=va(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=va(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ep(e){var t=iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ru(n.ownerDocument.documentElement,n)){if(r!==null&&wo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=wa(n,l);var o=wa(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tp=tt&&"documentMode"in document&&11>=document.documentMode,Kt=null,El=null,In=null,Nl=!1;function xa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||Kt==null||Kt!==Wr(r)||(r=Kt,"selectionStart"in r&&wo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&Yn(In,r)||(In=r,r=Yr(El,"onSelect"),0<r.length&&(t=new go("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Ui={},lu={};tt&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function vi(e){if(Ui[e])return Ui[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lu)return Ui[e]=t[n];return e}var ou=vi("animationend"),au=vi("animationiteration"),su=vi("animationstart"),uu=vi("transitionend"),cu=new Map,ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){cu.set(e,t),Ut(t,[e])}for(var Wi=0;Wi<ka.length;Wi++){var Hi=ka[Wi],np=Hi.toLowerCase(),rp=Hi[0].toUpperCase()+Hi.slice(1);Et(np,"on"+rp)}Et(ou,"onAnimationEnd");Et(au,"onAnimationIteration");Et(su,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(uu,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function Sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Sa(i,a,d),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,d=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Sa(i,a,d),l=s}}}if(Vr)throw e=xl,Vr=!1,xl=null,e}function U(e,t){var n=t[_l];n===void 0&&(n=t[_l]=new Set);var r=e+"__bubble";n.has(r)||(pu(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),pu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Sr]){e[Sr]=!0,ws.forEach(function(n){n!=="selectionchange"&&(ip.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Vi("selectionchange",!1,t))}}function pu(e,t,n,r){switch(Ks(t)){case 1:var i=vd;break;case 4:i=wd;break;default:i=mo}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lt(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Ds(function(){var d=l,g=uo(n),h=[];e:{var m=cu.get(e);if(m!==void 0){var w=go,S=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":w=Fd;break;case"focusin":S="focus",w=$i;break;case"focusout":S="blur",w=$i;break;case"beforeblur":case"afterblur":w=$i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ad;break;case ou:case au:case su:w=Nd;break;case uu:w=$d;break;case"scroll":w=xd;break;case"wheel":w=Bd;break;case"copy":case"cut":case"paste":w=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=pa}var k=(t&4)!==0,D=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Vn(c,p),v!=null&&k.push(Jn(c,v,f)))),D)break;c=c.return}0<k.length&&(m=new w(m,S,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==yl&&(S=n.relatedTarget||n.fromElement)&&(Lt(S)||S[nt]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=d,S=S?Lt(S):null,S!==null&&(D=Wt(S),S!==D||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=d),w!==S)){if(k=ca,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=pa,v="onPointerLeave",p="onPointerEnter",c="pointer"),D=w==null?m:Xt(w),f=S==null?m:Xt(S),m=new k(v,c+"leave",w,n,g),m.target=D,m.relatedTarget=f,v=null,Lt(g)===d&&(k=new k(p,c+"enter",S,n,g),k.target=f,k.relatedTarget=D,v=k),D=v,w&&S)t:{for(k=w,p=S,c=0,f=k;f;f=Ht(f))c++;for(f=0,v=p;v;v=Ht(v))f++;for(;0<c-f;)k=Ht(k),c--;for(;0<f-c;)p=Ht(p),f--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Ht(k),p=Ht(p)}k=null}else k=null;w!==null&&ba(h,m,w,k,!1),S!==null&&D!==null&&ba(h,D,S,k,!0)}}e:{if(m=d?Xt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=Qd;else if(ha(m))if(tu)N=Jd;else{N=Yd;var z=Kd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Xd);if(N&&(N=N(e,d))){eu(h,N,n,g);break e}z&&z(e,m,d),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&pl(m,"number",m.value)}switch(z=d?Xt(d):window,e){case"focusin":(ha(z)||z.contentEditable==="true")&&(Kt=z,El=d,In=null);break;case"focusout":In=El=Kt=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,xa(h,n,g);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":xa(h,n,g)}var C;if(vo)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qt?Js(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xs&&n.locale!=="ko"&&(Qt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qt&&(C=Ys()):(pt=g,ho="value"in pt?pt.value:pt.textContent,Qt=!0)),z=Yr(d,P),0<z.length&&(P=new da(P,e,null,n,g),h.push({event:P,listeners:z}),C?P.data=C:(C=Zs(n),C!==null&&(P.data=C)))),(C=Wd?Hd(e,n):Vd(e,n))&&(d=Yr(d,"onBeforeInput"),0<d.length&&(g=new da("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=C))}du(h,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Vn(e,n),l!=null&&r.unshift(Jn(e,l,i)),l=Vn(e,t),l!=null&&r.push(Jn(e,l,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,i?(s=Vn(n,l),s!=null&&o.unshift(Jn(n,s,a))):i||(s=Vn(n,l),s!=null&&o.push(Jn(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var lp=/\r\n?/g,op=/\u0000|\uFFFD/g;function Ea(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(op,"")}function br(e,t,n){if(t=Ea(t),Ea(e)!==t&&n)throw Error(x(425))}function Xr(){}var Cl=null,zl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,Na=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Na<"u"?function(e){return Na.resolve(null).then(e).catch(up)}:Pl;function up(e){setTimeout(function(){throw e})}function Gi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ca(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),qe="__reactFiber$"+xn,Zn="__reactProps$"+xn,nt="__reactContainer$"+xn,_l="__reactEvents$"+xn,cp="__reactListeners$"+xn,dp="__reactHandles$"+xn;function Lt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ca(e);e!==null;){if(n=e[qe])return n;e=Ca(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function wi(e){return e[Zn]||null}var Tl=[],Jt=-1;function Nt(e){return{current:e}}function W(e){0>Jt||(e.current=Tl[Jt],Tl[Jt]=null,Jt--)}function B(e,t){Jt++,Tl[Jt]=e.current,e.current=t}var bt={},pe=Nt(bt),we=Nt(!1),At=bt;function pn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Jr(){W(we),W(pe)}function za(e,t,n){if(pe.current!==bt)throw Error(x(168));B(pe,t),B(we,n)}function fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,Kc(e)||"Unknown",i));return G({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,At=pe.current,B(pe,e),B(we,we.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=fu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,W(we),W(pe),B(pe,e)):W(we),B(we,n)}var Xe=null,xi=!1,Qi=!1;function mu(e){Xe===null?Xe=[e]:Xe.push(e)}function pp(e){xi=!0,mu(e)}function Ct(){if(!Qi&&Xe!==null){Qi=!0;var e=0,t=I;try{var n=Xe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,xi=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),$s(co,Ct),i}finally{I=t,Qi=!1}}return null}var Zt=[],en=0,ei=null,ti=0,_e=[],Te=0,It=null,Je=1,Ze="";function _t(e,t){Zt[en++]=ti,Zt[en++]=ei,ei=e,ti=t}function hu(e,t,n){_e[Te++]=Je,_e[Te++]=Ze,_e[Te++]=It,It=e;var r=Je;e=Ze;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var l=32-Oe(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Je=1<<32-Oe(t)+i|n<<i|r,Ze=l+e}else Je=1<<l|n<<i|r,Ze=e}function xo(e){e.return!==null&&(_t(e,1),hu(e,1,0))}function ko(e){for(;e===ei;)ei=Zt[--en],Zt[en]=null,ti=Zt[--en],Zt[en]=null;for(;e===It;)It=_e[--Te],_e[Te]=null,Ze=_e[--Te],_e[Te]=null,Je=_e[--Te],_e[Te]=null}var Ce=null,Ne=null,H=!1,$e=null;function gu(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ne=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(H){var t=Ne;if(t){var n=t;if(!Pa(e,t)){if(Ll(e))throw Error(x(418));t=yt(n.nextSibling);var r=Ce;t&&Pa(e,t)?gu(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(Ll(e))throw Error(x(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Er(e){if(e!==Ce)return!1;if(!H)return _a(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=Ne)){if(Ll(e))throw yu(),Error(x(418));for(;t;)gu(e,t),t=yt(t.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Ce?yt(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=Ne;e;)e=yt(e.nextSibling)}function fn(){Ne=Ce=null,H=!1}function So(e){$e===null?$e=[e]:$e.push(e)}var fp=lt.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ta(e){var t=e._init;return t(e._payload)}function vu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=kt(p,c),p.index=0,p.sibling=null,p}function l(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,f,v){return c===null||c.tag!==6?(c=tl(f,p.mode,v),c.return=p,c):(c=i(c,f),c.return=p,c)}function s(p,c,f,v){var N=f.type;return N===Gt?g(p,c,f.props.children,v,f.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===at&&Ta(N)===c.type)?(v=i(c,f.props),v.ref=Cn(p,c,f),v.return=p,v):(v=Ur(f.type,f.key,f.props,null,p.mode,v),v.ref=Cn(p,c,f),v.return=p,v)}function d(p,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=nl(f,p.mode,v),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function g(p,c,f,v,N){return c===null||c.tag!==7?(c=Mt(f,p.mode,v,N),c.return=p,c):(c=i(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=tl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return f=Ur(c.type,c.key,c.props,null,p.mode,f),f.ref=Cn(p,null,c),f.return=p,f;case qt:return c=nl(c,p.mode,f),c.return=p,c;case at:var v=c._init;return h(p,v(c._payload),f)}if(Tn(c)||kn(c))return c=Mt(c,p.mode,f,null),c.return=p,c;Nr(p,c)}return null}function m(p,c,f,v){var N=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:a(p,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===N?s(p,c,f,v):null;case qt:return f.key===N?d(p,c,f,v):null;case at:return N=f._init,m(p,c,N(f._payload),v)}if(Tn(f)||kn(f))return N!==null?null:g(p,c,f,v,null);Nr(p,f)}return null}function w(p,c,f,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(c,p,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mr:return p=p.get(v.key===null?f:v.key)||null,s(c,p,v,N);case qt:return p=p.get(v.key===null?f:v.key)||null,d(c,p,v,N);case at:var z=v._init;return w(p,c,f,z(v._payload),N)}if(Tn(v)||kn(v))return p=p.get(f)||null,g(c,p,v,N,null);Nr(c,v)}return null}function S(p,c,f,v){for(var N=null,z=null,C=c,P=c=0,$=null;C!==null&&P<f.length;P++){C.index>P?($=C,C=null):$=C.sibling;var L=m(p,C,f[P],v);if(L===null){C===null&&(C=$);break}e&&C&&L.alternate===null&&t(p,C),c=l(L,c,P),z===null?N=L:z.sibling=L,z=L,C=$}if(P===f.length)return n(p,C),H&&_t(p,P),N;if(C===null){for(;P<f.length;P++)C=h(p,f[P],v),C!==null&&(c=l(C,c,P),z===null?N=C:z.sibling=C,z=C);return H&&_t(p,P),N}for(C=r(p,C);P<f.length;P++)$=w(C,p,P,f[P],v),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?P:$.key),c=l($,c,P),z===null?N=$:z.sibling=$,z=$);return e&&C.forEach(function(Y){return t(p,Y)}),H&&_t(p,P),N}function k(p,c,f,v){var N=kn(f);if(typeof N!="function")throw Error(x(150));if(f=N.call(f),f==null)throw Error(x(151));for(var z=N=null,C=c,P=c=0,$=null,L=f.next();C!==null&&!L.done;P++,L=f.next()){C.index>P?($=C,C=null):$=C.sibling;var Y=m(p,C,L.value,v);if(Y===null){C===null&&(C=$);break}e&&C&&Y.alternate===null&&t(p,C),c=l(Y,c,P),z===null?N=Y:z.sibling=Y,z=Y,C=$}if(L.done)return n(p,C),H&&_t(p,P),N;if(C===null){for(;!L.done;P++,L=f.next())L=h(p,L.value,v),L!==null&&(c=l(L,c,P),z===null?N=L:z.sibling=L,z=L);return H&&_t(p,P),N}for(C=r(p,C);!L.done;P++,L=f.next())L=w(C,p,P,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),c=l(L,c,P),z===null?N=L:z.sibling=L,z=L);return e&&C.forEach(function(Se){return t(p,Se)}),H&&_t(p,P),N}function D(p,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Gt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var N=f.key,z=c;z!==null;){if(z.key===N){if(N=f.type,N===Gt){if(z.tag===7){n(p,z.sibling),c=i(z,f.props.children),c.return=p,p=c;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===at&&Ta(N)===z.type){n(p,z.sibling),c=i(z,f.props),c.ref=Cn(p,z,f),c.return=p,p=c;break e}n(p,z);break}else t(p,z);z=z.sibling}f.type===Gt?(c=Mt(f.props.children,p.mode,v,f.key),c.return=p,p=c):(v=Ur(f.type,f.key,f.props,null,p.mode,v),v.ref=Cn(p,c,f),v.return=p,p=v)}return o(p);case qt:e:{for(z=f.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=nl(f,p.mode,v),c.return=p,p=c}return o(p);case at:return z=f._init,D(p,c,z(f._payload),v)}if(Tn(f))return S(p,c,f,v);if(kn(f))return k(p,c,f,v);Nr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=tl(f,p.mode,v),c.return=p,p=c),o(p)):n(p,c)}return D}var mn=vu(!0),wu=vu(!1),ni=Nt(null),ri=null,tn=null,bo=null;function Eo(){bo=tn=ri=null}function No(e){var t=ni.current;W(ni),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){ri=e,bo=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(bo!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(ri===null)throw Error(x(308));tn=e,ri.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Rt=null;function Co(e){Rt===null?Rt=[e]:Rt.push(e)}function xu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Co(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Co(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,po(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;st=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,d=s.next;s.next=null,o===null?l=d:o.next=d,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=s))}if(l!==null){var h=i.baseState;o=0,g=d=s=null,a=l;do{var m=a.lane,w=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,k=a;switch(m=t,w=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){h=S.call(w,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(w,h,m):S,m==null)break e;h=G({},h,m);break e;case 2:st=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=w,s=h):g=g.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(g===null&&(s=h),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=h}}function Ra(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var cr={},Qe=Nt(cr),er=Nt(cr),tr=Nt(cr);function Ft(e){if(e===cr)throw Error(x(174));return e}function jo(e,t){switch(B(tr,t),B(er,e),B(Qe,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}W(Qe),B(Qe,t)}function hn(){W(Qe),W(er),W(tr)}function Su(e){Ft(tr.current);var t=Ft(Qe.current),n=ml(t,e.type);t!==n&&(B(er,e),B(Qe,n))}function Po(e){er.current===e&&(W(Qe),W(er))}var V=Nt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=[];function _o(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var Ar=lt.ReactCurrentDispatcher,Yi=lt.ReactCurrentBatchConfig,$t=0,q=null,te=null,ie=null,oi=!1,$n=!1,nr=0,mp=0;function ue(){throw Error(x(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,i,l){if($t=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?vp:wp,e=n(r,i),$n){l=0;do{if($n=!1,nr=0,25<=l)throw Error(x(301));l+=1,ie=te=null,t.updateQueue=null,Ar.current=xp,e=n(r,i)}while($n)}if(Ar.current=ai,t=te!==null&&te.next!==null,$t=0,ie=te=q=null,oi=!1,t)throw Error(x(300));return e}function Ro(){var e=nr!==0;return nr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?q.memoizedState=ie=e:ie=ie.next=e,ie}function De(){if(te===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?q.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(x(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?q.memoizedState=ie=e:ie=ie.next=e}return ie}function rr(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=De(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,d=l;do{var g=d.lane;if(($t&g)===g)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,q.lanes|=g,Ot|=g}d=d.next}while(d!==null&&d!==l);s===null?o=r:s.next=a,Ue(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,q.lanes|=l,Ot|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=De(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ue(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function bu(){}function Eu(e,t){var n=q,r=De(),i=t(),l=!Ue(r.memoizedState,i);if(l&&(r.memoizedState=i,ve=!0),r=r.queue,Fo(zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,ir(9,Cu.bind(null,n,r,i,t),void 0,null),le===null)throw Error(x(349));$t&30||Nu(n,t,i)}return i}function Nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,r){t.value=n,t.getSnapshot=r,ju(t)&&Pu(e)}function zu(e,t,n){return n(function(){ju(t)&&Pu(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Pu(e){var t=rt(e,1);t!==null&&Be(t,e,1,-1)}function Fa(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=yp.bind(null,q,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _u(){return De().memoizedState}function Ir(e,t,n,r){var i=Ve();q.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var i=De();r=r===void 0?null:r;var l=void 0;if(te!==null){var o=te.memoizedState;if(l=o.destroy,r!==null&&To(r,o.deps)){i.memoizedState=ir(t,n,l,r);return}}q.flags|=e,i.memoizedState=ir(1|t,n,l,r)}function Da(e,t){return Ir(8390656,8,e,t)}function Fo(e,t){return ki(2048,8,e,t)}function Tu(e,t){return ki(4,2,e,t)}function Lu(e,t){return ki(4,4,e,t)}function Ru(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,Ru.bind(null,t,e),n)}function Do(){}function Du(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Au(e,t,n){return $t&21?(Ue(n,t)||(n=Us(),q.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function hp(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{I=n,Yi.transition=r}}function Iu(){return De().memoizedState}function gp(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e))Ou(t,n);else if(n=xu(e,t,n,r),n!==null){var i=me();Be(n,e,r,i),Bu(n,t,r)}}function yp(e,t,n){var r=xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))Ou(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ue(a,o)){var s=t.interleaved;s===null?(i.next=i,Co(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=xu(e,t,i,r),n!==null&&(i=me(),Be(n,e,r,i),Bu(n,t,r))}}function $u(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ou(e,t){$n=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,po(e,n)}}var ai={readContext:Fe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},vp={readContext:Fe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Da,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,Ru.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gp.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Fa,useDebugValue:Do,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Fa(!1),t=e[0];return e=hp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=Ve();if(H){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),le===null)throw Error(x(349));$t&30||Nu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Da(zu.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,Cu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ve(),t=le.identifierPrefix;if(H){var n=Ze,r=Je;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wp={readContext:Fe,useCallback:Du,useContext:Fe,useEffect:Fo,useImperativeHandle:Fu,useInsertionEffect:Tu,useLayoutEffect:Lu,useMemo:Mu,useReducer:Xi,useRef:_u,useState:function(){return Xi(rr)},useDebugValue:Do,useDeferredValue:function(e){var t=De();return Au(t,te.memoizedState,e)},useTransition:function(){var e=Xi(rr)[0],t=De().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Eu,useId:Iu,unstable_isNewReconciler:!1},xp={readContext:Fe,useCallback:Du,useContext:Fe,useEffect:Fo,useImperativeHandle:Fu,useInsertionEffect:Tu,useLayoutEffect:Lu,useMemo:Mu,useReducer:Ji,useRef:_u,useState:function(){return Ji(rr)},useDebugValue:Do,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:Au(t,te.memoizedState,e)},useTransition:function(){var e=Ji(rr)[0],t=De().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Eu,useId:Iu,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=xt(e),l=et(r,i);l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,i),t!==null&&(Be(t,e,i,r),Mr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=xt(e),l=et(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,i),t!==null&&(Be(t,e,i,r),Mr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=xt(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=vt(e,i,r),t!==null&&(Be(t,e,r,n),Mr(t,e,r))}};function Ma(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,l):!0}function Uu(e,t,n){var r=!1,i=bt,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(i=xe(t)?At:pe.current,r=t.contextTypes,l=(r=r!=null)?pn(e,i):bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Fe(l):(l=xe(t)?At:pe.current,i.context=pn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Dl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=Qc(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,Gl=r),Al(e,t)},n}function Hu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Al(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ia(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dp.bind(null,e,t,n),t.then(e,e))}function $a(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Oa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Sp=lt.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?wu(t,null,n,r):mn(t,e.child,n,r)}function Ba(e,t,n,r,i){n=n.render;var l=t.ref;return un(t,i),r=Lo(e,t,n,r,l,i),n=Ro(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(H&&n&&xo(t),t.flags|=1,fe(e,t,r,i),t.child)}function Ua(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Wo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Vu(e,t,l,r,i)):(e=Ur(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(o,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=kt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Vu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Yn(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,it(e,t,i)}return Il(e,t,n,r,i)}function qu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(rn,Ee),Ee|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(rn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,B(rn,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,B(rn,Ee),Ee|=r;return fe(e,t,i,n),t.child}function Gu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,i){var l=xe(n)?At:pe.current;return l=pn(t,l),un(t,i),n=Lo(e,t,n,r,l,i),r=Ro(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(H&&r&&xo(t),t.flags|=1,fe(e,t,n,i),t.child)}function Wa(e,t,n,r,i){if(xe(n)){var l=!0;Zr(t)}else l=!1;if(un(t,i),t.stateNode===null)$r(e,t),Uu(t,n,r),Ml(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Fe(d):(d=xe(n)?At:pe.current,d=pn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==d)&&Aa(t,o,r,d),st=!1;var m=t.memoizedState;o.state=m,ii(t,r,o,i),s=t.memoizedState,a!==r||m!==s||we.current||st?(typeof g=="function"&&(Dl(t,n,g,r),s=t.memoizedState),(a=st||Ma(t,n,a,r,m,s,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ku(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ae(t.type,a),o.props=d,h=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Fe(s):(s=xe(n)?At:pe.current,s=pn(t,s));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Aa(t,o,r,s),st=!1,m=t.memoizedState,o.state=m,ii(t,r,o,i);var S=t.memoizedState;a!==h||m!==S||we.current||st?(typeof w=="function"&&(Dl(t,n,w,r),S=t.memoizedState),(d=st||Ma(t,n,d,r,m,S,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,l,i)}function $l(e,t,n,r,i,l){Gu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ja(t,n,!1),it(e,t,l);r=t.stateNode,Sp.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=mn(t,e.child,null,l),t.child=mn(t,null,a,l)):fe(e,t,a,l),t.memoizedState=r.state,i&&ja(t,n,!0),t.child}function Qu(e){var t=e.stateNode;t.pendingContext?za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&za(e,t.context,!1),jo(e,t.containerInfo)}function Ha(e,t,n,r,i){return fn(),So(i),t.flags|=256,fe(e,t,n,r),t.child}var Ol={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var r=t.pendingProps,i=V.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(V,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ni(o,r,0,null),e=Mt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Bl(n),t.memoizedState=Ol,e):Mo(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bp(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=kt(a,l):(l=Mt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Bl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ol,r}return l=e.child,e=l.sibling,r=kt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mo(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&So(r),mn(t,e.child,null,n),e=Mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(x(422))),Cr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ni({mode:"visible",children:r.children},i,0,null),l=Mt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&mn(t,e.child,null,o),t.child.memoizedState=Bl(o),t.memoizedState=Ol,l);if(!(t.mode&1))return Cr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(x(419)),r=Zi(l,r,void 0),Cr(e,t,o,r)}if(a=(o&e.childLanes)!==0,ve||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,rt(e,i),Be(r,e,i,-1))}return Uo(),r=Zi(Error(x(421))),Cr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ne=yt(i.nextSibling),Ce=t,H=!0,$e=null,e!==null&&(_e[Te++]=Je,_e[Te++]=Ze,_e[Te++]=It,Je=e.id,Ze=e.overflow,It=t),t=Mo(t,r.children),t.flags|=4096,t)}function Va(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function el(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Yu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Va(e,n,t);else if(e.tag===19)Va(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,l);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:Qu(t),fn();break;case 5:Su(t);break;case 1:xe(t.type)&&Zr(t);break;case 4:jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Ku(e,t,n):(B(V,V.current&1),e=it(e,t,n),e!==null?e.sibling:null);B(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,qu(e,t,n)}return it(e,t,n)}var Xu,Ul,Ju,Zu;Xu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ul=function(){};Ju=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ft(Qe.current);var l=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),l=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),l=[];break;case"textarea":i=fl(e,i),r=fl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}hl(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var s=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&U("scroll",e),l||a===s||(l=[])):(l=l||[]).push(d,s))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return xe(t.type)&&Jr(),ce(t),null;case 3:return r=t.stateNode,hn(),W(we),W(pe),_o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Yl($e),$e=null))),Ul(e,t),ce(t),null;case 5:Po(t);var i=Ft(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ju(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ce(t),null}if(e=Ft(Qe.current),Er(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[qe]=t,r[Zn]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Rn.length;i++)U(Rn[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ea(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":na(r,l),U("invalid",r)}hl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&br(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&br(r.textContent,a,e),i=["children",""+a]):Wn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":hr(r),ta(r,l,!0);break;case"textarea":hr(r),ra(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Xr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[Zn]=r,Xu(e,t,!1,!1),t.stateNode=e;e:{switch(o=gl(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rn.length;i++)U(Rn[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":ea(e,r),i=cl(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),U("invalid",e);break;case"textarea":na(e,r),i=fl(e,r),U("invalid",e);break;default:i=r}hl(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?_s(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&js(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hn(e,s):typeof s=="number"&&Hn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Wn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&U("scroll",e):s!=null&&lo(e,l,s,o))}switch(n){case"input":hr(e),ta(e,r,!1);break;case"textarea":hr(e),ra(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ft(tr.current),Ft(Qe.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(l=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ce(t),null;case 13:if(W(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ne!==null&&t.mode&1&&!(t.flags&128))yu(),fn(),t.flags|=98560,l=!1;else if(l=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[qe]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),l=!1}else $e!==null&&(Yl($e),$e=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?ne===0&&(ne=3):Uo())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return hn(),Ul(e,t),e===null&&Xn(t.stateNode.containerInfo),ce(t),null;case 10:return No(t.type._context),ce(t),null;case 17:return xe(t.type)&&Jr(),ce(t),null;case 19:if(W(V),l=t.memoizedState,l===null)return ce(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)zn(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=li(e),o!==null){for(t.flags|=128,zn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&X()>yn&&(t.flags|=128,r=!0,zn(l,!1),t.lanes=4194304)}else{if(!r)if(e=li(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!H)return ce(t),null}else 2*X()-l.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,zn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=X(),t.sibling=null,n=V.current,B(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Bo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Cp(e,t){switch(ko(t),t.tag){case 1:return xe(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),W(we),W(pe),_o(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Po(t),null;case 13:if(W(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(V),null;case 4:return hn(),null;case 10:return No(t.type._context),null;case 22:case 23:return Bo(),null;case 24:return null;default:return null}}var zr=!1,de=!1,zp=typeof WeakSet=="function"?WeakSet:Set,j=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Wl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var qa=!1;function jp(e,t){if(Cl=Qr,e=iu(),wo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==l||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++d===i&&(a=o),m===l&&++g===r&&(s=o),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Qr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,D=S.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ae(t.type,k),D);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return S=qa,qa=!1,S}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Wl(t,n,l)}i=i.next}while(i!==r)}}function bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ec(e){var t=e.alternate;t!==null&&(e.alternate=null,ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Zn],delete t[_l],delete t[cp],delete t[dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var oe=null,Ie=!1;function ot(e,t,n){for(n=n.child;n!==null;)nc(e,t,n),n=n.sibling}function nc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(hi,n)}catch{}switch(n.tag){case 5:de||nn(n,t);case 6:var r=oe,i=Ie;oe=null,ot(e,t,n),oe=r,Ie=i,oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?Gi(e.parentNode,n):e.nodeType===1&&Gi(e,n),Qn(e)):Gi(oe,n.stateNode));break;case 4:r=oe,i=Ie,oe=n.stateNode.containerInfo,Ie=!0,ot(e,t,n),oe=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Wl(n,t,o),i=i.next}while(i!==r)}ot(e,t,n);break;case 1:if(!de&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ot(e,t,n),de=r):ot(e,t,n);break;default:ot(e,t,n)}}function Qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zp),t.forEach(function(r){var i=Ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,Ie=!1;break e;case 3:oe=a.stateNode.containerInfo,Ie=!0;break e;case 4:oe=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(oe===null)throw Error(x(160));nc(l,o,i),oe=null,Ie=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){Q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rc(t,e),t=t.sibling}function rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{On(3,e,e.return),bi(3,e)}catch(k){Q(e,e.return,k)}try{On(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ns(i,l),gl(a,o);var d=gl(a,l);for(o=0;o<s.length;o+=2){var g=s[o],h=s[o+1];g==="style"?_s(i,h):g==="dangerouslySetInnerHTML"?js(i,h):g==="children"?Hn(i,h):lo(i,g,h,d)}switch(a){case"input":dl(i,l);break;case"textarea":Cs(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?ln(i,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?ln(i,!!l.multiple,l.defaultValue,!0):ln(i,!!l.multiple,l.multiple?[]:"",!1))}i[Zn]=l}catch(k){Q(e,e.return,k)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){Q(e,e.return,k)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||($o=X())),r&4&&Qa(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||g,Me(t,e),de=d):Me(t,e),He(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(h=j=g;j!==null;){switch(m=j,w=m.child,m.tag){case 0:case 11:case 14:case 15:On(4,m,m.return);break;case 1:nn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:nn(m,m.return);break;case 22:if(m.memoizedState!==null){Ya(h);continue}}w!==null?(w.return=m,j=w):Ya(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ps("display",o))}catch(k){Q(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){Q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Me(t,e),He(e),r&4&&Qa(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tc(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var l=Ga(e);ql(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ga(e);Vl(e,a,o);break;default:throw Error(x(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pp(e,t,n){j=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zr;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||de;a=zr;var d=de;if(zr=o,(de=s)&&!d)for(j=i;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?Xa(i):s!==null?(s.return=o,j=s):Xa(i);for(;l!==null;)j=l,ic(l),l=l.sibling;j=i,zr=a,de=d}Ka(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,j=l):Ka(e)}}function Ka(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ra(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ra(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}de||t.flags&512&&Hl(t)}catch(m){Q(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ya(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Xa(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bi(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Q(t,i,s)}}var l=t.return;try{Hl(t)}catch(s){Q(t,l,s)}break;case 5:var o=t.return;try{Hl(t)}catch(s){Q(t,o,s)}}}catch(s){Q(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var _p=Math.ceil,si=lt.ReactCurrentDispatcher,Ao=lt.ReactCurrentOwner,Re=lt.ReactCurrentBatchConfig,M=0,le=null,Z=null,ae=0,Ee=0,rn=Nt(0),ne=0,lr=null,Ot=0,Ei=0,Io=0,Bn=null,ye=null,$o=0,yn=1/0,Ye=null,ui=!1,Gl=null,wt=null,jr=!1,ft=null,ci=0,Un=0,Ql=null,Or=-1,Br=0;function me(){return M&6?X():Or!==-1?Or:Or=X()}function xt(e){return e.mode&1?M&2&&ae!==0?ae&-ae:fp.transition!==null?(Br===0&&(Br=Us()),Br):(e=I,e!==0||(e=window.event,e=e===void 0?16:Ks(e.type)),e):1}function Be(e,t,n,r){if(50<Un)throw Un=0,Ql=null,Error(x(185));ar(e,n,r),(!(M&2)||e!==le)&&(e===le&&(!(M&2)&&(Ei|=n),ne===4&&dt(e,ae)),ke(e,r),n===1&&M===0&&!(t.mode&1)&&(yn=X()+500,xi&&Ct()))}function ke(e,t){var n=e.callbackNode;fd(e,t);var r=Gr(e,e===le?ae:0);if(r===0)n!==null&&oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oa(n),t===1)e.tag===0?pp(Ja.bind(null,e)):mu(Ja.bind(null,e)),sp(function(){!(M&6)&&Ct()}),n=null;else{switch(Ws(r)){case 1:n=co;break;case 4:n=Os;break;case 16:n=qr;break;case 536870912:n=Bs;break;default:n=qr}n=pc(n,lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lc(e,t){if(Or=-1,Br=0,M&6)throw Error(x(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Gr(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=M;M|=2;var l=ac();(le!==e||ae!==t)&&(Ye=null,yn=X()+500,Dt(e,t));do try{Rp();break}catch(a){oc(e,a)}while(1);Eo(),si.current=l,M=i,Z!==null?t=0:(le=null,ae=0,t=ne)}if(t!==0){if(t===2&&(i=kl(e),i!==0&&(r=i,t=Kl(e,i))),t===1)throw n=lr,Dt(e,0),dt(e,r),ke(e,X()),n;if(t===6)dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Tp(i)&&(t=di(e,r),t===2&&(l=kl(e),l!==0&&(r=l,t=Kl(e,l))),t===1))throw n=lr,Dt(e,0),dt(e,r),ke(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Tt(e,ye,Ye);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=$o+500-X(),10<t)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(Tt.bind(null,e,ye,Ye),t);break}Tt(e,ye,Ye);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Oe(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_p(r/1960))-r,10<r){e.timeoutHandle=Pl(Tt.bind(null,e,ye,Ye),r);break}Tt(e,ye,Ye);break;case 5:Tt(e,ye,Ye);break;default:throw Error(x(329))}}}return ke(e,X()),e.callbackNode===n?lc.bind(null,e):null}function Kl(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=di(e,t),e!==2&&(t=ye,ye=n,t!==null&&Yl(t)),e}function Yl(e){ye===null?ye=e:ye.push.apply(ye,e)}function Tp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ue(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Io,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function Ja(e){if(M&6)throw Error(x(327));cn();var t=Gr(e,0);if(!(t&1))return ke(e,X()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=lr,Dt(e,0),dt(e,t),ke(e,X()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,ye,Ye),ke(e,X()),null}function Oo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(yn=X()+500,xi&&Ct())}}function Bt(e){ft!==null&&ft.tag===0&&!(M&6)&&cn();var t=M;M|=1;var n=Re.transition,r=I;try{if(Re.transition=null,I=1,e)return e()}finally{I=r,Re.transition=n,M=t,!(M&6)&&Ct()}}function Bo(){Ee=rn.current,W(rn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ap(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:hn(),W(we),W(pe),_o();break;case 5:Po(r);break;case 4:hn();break;case 13:W(V);break;case 19:W(V);break;case 10:No(r.type._context);break;case 22:case 23:Bo()}n=n.return}if(le=e,Z=e=kt(e.current,null),ae=Ee=t,ne=0,lr=null,Io=Ei=Ot=0,ye=Bn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Rt=null}return e}function oc(e,t){do{var n=Z;try{if(Eo(),Ar.current=ai,oi){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if($t=0,ie=te=q=null,$n=!1,nr=0,Ao.current=null,n===null||n.return===null){ne=1,lr=t,Z=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=$a(o);if(w!==null){w.flags&=-257,Oa(w,o,a,l,t),w.mode&1&&Ia(l,d,t),t=w,s=d;var S=t.updateQueue;if(S===null){var k=new Set;k.add(s),t.updateQueue=k}else S.add(s);break e}else{if(!(t&1)){Ia(l,d,t),Uo();break e}s=Error(x(426))}}else if(H&&a.mode&1){var D=$a(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Oa(D,o,a,l,t),So(gn(s,a));break e}}l=s=gn(s,a),ne!==4&&(ne=2),Bn===null?Bn=[l]:Bn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Wu(l,s,t);La(l,p);break e;case 1:a=s;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wt===null||!wt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Hu(l,a,t);La(l,v);break e}}l=l.return}while(l!==null)}uc(n)}catch(N){t=N,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function ac(){var e=si.current;return si.current=ai,e===null?ai:e}function Uo(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Ot&268435455)&&!(Ei&268435455)||dt(le,ae)}function di(e,t){var n=M;M|=2;var r=ac();(le!==e||ae!==t)&&(Ye=null,Dt(e,t));do try{Lp();break}catch(i){oc(e,i)}while(1);if(Eo(),M=n,si.current=r,Z!==null)throw Error(x(261));return le=null,ae=0,ne}function Lp(){for(;Z!==null;)sc(Z)}function Rp(){for(;Z!==null&&!id();)sc(Z)}function sc(e){var t=dc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?uc(e):Z=t,Ao.current=null}function uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cp(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=Np(n,t,Ee),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function Tt(e,t,n){var r=I,i=Re.transition;try{Re.transition=null,I=1,Fp(e,t,n,r)}finally{Re.transition=i,I=r}return null}function Fp(e,t,n,r){do cn();while(ft!==null);if(M&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(md(e,l),e===le&&(Z=le=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,pc(qr,function(){return cn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Re.transition,Re.transition=null;var o=I;I=1;var a=M;M|=4,Ao.current=null,jp(e,n),rc(n,e),ep(zl),Qr=!!Cl,zl=Cl=null,e.current=n,Pp(n),ld(),M=a,I=o,Re.transition=l}else e.current=n;if(jr&&(jr=!1,ft=e,ci=i),l=e.pendingLanes,l===0&&(wt=null),sd(n.stateNode),ke(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=Gl,Gl=null,e;return ci&1&&e.tag!==0&&cn(),l=e.pendingLanes,l&1?e===Ql?Un++:(Un=0,Ql=e):Un=0,Ct(),null}function cn(){if(ft!==null){var e=Ws(ci),t=Re.transition,n=I;try{if(Re.transition=null,I=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,ci=0,M&6)throw Error(x(331));var i=M;for(M|=4,j=e.current;j!==null;){var l=j,o=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(j=d;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:On(8,g,l)}var h=g.child;if(h!==null)h.return=g,j=h;else for(;j!==null;){g=j;var m=g.sibling,w=g.return;if(ec(g),g===d){j=null;break}if(m!==null){m.return=w,j=m;break}j=w}}}var S=l.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}j=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,j=o;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:On(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,j=p;break e}j=l.return}}var c=e.current;for(j=c;j!==null;){o=j;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,j=f;else e:for(o=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bi(9,a)}}catch(N){Q(a,a.return,N)}if(a===o){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(M=i,Ct(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(hi,e)}catch{}r=!0}return r}finally{I=n,Re.transition=t}}return!1}function Za(e,t,n){t=gn(n,t),t=Wu(e,t,1),e=vt(e,t,1),t=me(),e!==null&&(ar(e,1,t),ke(e,t))}function Q(e,t,n){if(e.tag===3)Za(e,e,n);else for(;t!==null;){if(t.tag===3){Za(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=gn(n,e),e=Hu(t,e,1),t=vt(t,e,1),e=me(),t!==null&&(ar(t,1,e),ke(t,e));break}}t=t.return}}function Dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>X()-$o?Dt(e,0):Io|=n),ke(e,t)}function cc(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(ar(e,t,n),ke(e,n))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cc(e,n)}function Ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),cc(e,n)}var dc;dc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Ep(e,t,n);ve=!!(e.flags&131072)}else ve=!1,H&&t.flags&1048576&&hu(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var i=pn(t,pe.current);un(t,n),i=Lo(null,t,r,e,i,n);var l=Ro();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(l=!0,Zr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zo(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,Ml(t,r,e,n),t=$l(null,t,r,!0,l,n)):(t.tag=0,H&&l&&xo(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$p(r),e=Ae(r,e),i){case 0:t=Il(null,t,r,e,n);break e;case 1:t=Wa(null,t,r,e,n);break e;case 11:t=Ba(null,t,r,e,n);break e;case 14:t=Ua(null,t,r,Ae(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),Il(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),Wa(e,t,r,i,n);case 3:e:{if(Qu(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ku(e,t),ii(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=gn(Error(x(423)),t),t=Ha(e,t,r,n,i);break e}else if(r!==i){i=gn(Error(x(424)),t),t=Ha(e,t,r,n,i);break e}else for(Ne=yt(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,$e=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===i){t=it(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,jl(r,i)?o=null:l!==null&&jl(r,l)&&(t.flags|=32),Gu(e,t),fe(e,t,o,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return Ku(e,t,n);case 4:return jo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),Ba(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,B(ni,r._currentValue),r._currentValue=o,l!==null)if(Ue(l.value,o)){if(l.children===i.children&&!we.current){t=it(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=et(-1,n&-n),s.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Fl(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,un(t,n),i=Fe(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=Ae(r,t.pendingProps),i=Ae(r.type,i),Ua(e,t,r,i,n);case 15:return Vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),$r(e,t),t.tag=1,xe(r)?(e=!0,Zr(t)):e=!1,un(t,n),Uu(t,r,i),Ml(t,r,i,n),$l(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return qu(e,t,n)}throw Error(x(156,t.tag))};function pc(e,t){return $s(e,t)}function Ip(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Ip(e,t,n,r)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $p(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ao)return 11;if(e===so)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ur(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Wo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gt:return Mt(n.children,i,l,t);case oo:o=8,i|=8;break;case ol:return e=Le(12,n,t,i|2),e.elementType=ol,e.lanes=l,e;case al:return e=Le(13,n,t,i),e.elementType=al,e.lanes=l,e;case sl:return e=Le(19,n,t,i),e.elementType=sl,e.lanes=l,e;case Ss:return Ni(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:o=10;break e;case ks:o=9;break e;case ao:o=11;break e;case so:o=14;break e;case at:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Le(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Mt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Ss,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Op(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ho(e,t,n,r,i,l,o,a,s){return e=new Op(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Le(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zo(l),e}function Bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fc(e){if(!e)return bt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(xe(n))return fu(e,n,t)}return t}function mc(e,t,n,r,i,l,o,a,s){return e=Ho(n,r,!0,e,i,l,o,a,s),e.context=fc(null),n=e.current,r=me(),i=xt(n),l=et(r,i),l.callback=t??null,vt(n,l,i),e.current.lanes=i,ar(e,i,r),ke(e,r),e}function Ci(e,t,n,r){var i=t.current,l=me(),o=xt(i);return n=fc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(i,t,o),e!==null&&(Be(e,i,o,l),Mr(e,i,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function es(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vo(e,t){es(e,t),(e=e.alternate)&&es(e,t)}function Up(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function qo(e){this._internalRoot=e}zi.prototype.render=qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Ci(e,t,null,null)};zi.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Ci(null,e,null,null)}),t[nt]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Qs(e)}};function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ts(){}function Wp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=pi(o);l.call(d)}}var o=mc(t,r,e,0,null,!1,!1,"",ts);return e._reactRootContainer=o,e[nt]=o.current,Xn(e.nodeType===8?e.parentNode:e),Bt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=pi(s);a.call(d)}}var s=Ho(e,0,!1,null,null,!1,!1,"",ts);return e._reactRootContainer=s,e[nt]=s.current,Xn(e.nodeType===8?e.parentNode:e),Bt(function(){Ci(t,s,n,r)}),s}function Pi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=pi(o);a.call(s)}}Ci(t,o,e,i)}else o=Wp(n,t,e,i,r);return pi(o)}Hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(po(t,n|1),ke(t,X()),!(M&6)&&(yn=X()+500,Ct()))}break;case 13:Bt(function(){var r=rt(e,1);if(r!==null){var i=me();Be(r,e,1,i)}}),Vo(e,1)}};fo=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();Be(t,e,134217728,n)}Vo(e,134217728)}};Vs=function(e){if(e.tag===13){var t=xt(e),n=rt(e,t);if(n!==null){var r=me();Be(n,e,t,r)}Vo(e,t)}};qs=function(){return I};Gs=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};vl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(x(90));Es(r),dl(r,i)}}}break;case"textarea":Cs(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Rs=Oo;Fs=Bt;var Hp={usingClientEntryPoint:!1,Events:[ur,Xt,wi,Ts,Ls,Oo]},jn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vp={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{hi=Pr.inject(Vp),Ge=Pr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Go(t))throw Error(x(200));return Bp(e,t,null,n)};je.createRoot=function(e,t){if(!Go(e))throw Error(x(299));var n=!1,r="",i=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ho(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,Xn(e.nodeType===8?e.parentNode:e),new qo(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=As(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Bt(e)};je.hydrate=function(e,t,n){if(!ji(t))throw Error(x(200));return Pi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Go(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=hc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=mc(t,null,e,1,n??null,i,!1,l,o),e[nt]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zi(t)};je.render=function(e,t,n){if(!ji(t))throw Error(x(200));return Pi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!ji(e))throw Error(x(40));return e._reactRootContainer?(Bt(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};je.unstable_batchedUpdates=Oo;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Pi(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc)}catch(e){console.error(e)}}gc(),gs.exports=je;var qp=gs.exports,ns=qp;il.createRoot=ns.createRoot,il.hydrateRoot=ns.hydrateRoot;var Gp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Qp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kp=(e,t)=>{const n=A.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,children:a,...s},d)=>A.createElement("svg",{ref:d,...Gp,width:i,height:i,stroke:r,strokeWidth:o?Number(l)*24/Number(i):l,className:`lucide lucide-${Qp(e)}`,...s},[...t.map(([g,h])=>A.createElement(g,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var K=Kp;const Pn=K("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),Yp=K("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]),Xp=K("Box",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),Jp=K("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Zp=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ef=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),tf=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),_r=K("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]),J=K("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]),Pt=K("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),nf=K("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),rf=K("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),Xl=K("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]),yc=K("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),Jl=K("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),vc=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),lf=K("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),of=K("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]),rs=K("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),af=K("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),re=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),sf=K("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),uf=()=>u.jsxs("div",{className:"putting-drill-wrapper",children:[u.jsx("style",{children:`
        .putting-drill-wrapper {
          width: 100%;
          /* La hauteur est maintenant fixe pour correspondre aux autres cartes (h-56 = 14rem) */
          height: 14rem; 
          display: flex;
          justify-content: center;
        }

        .pd-container {
          width: 100%;
          height: 100%;
          /* Fond gris clair et bordure fine pour matcher 'bg-neutral-50' et 'border-neutral-200' */
          background-color: #f9fafb; 
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem; /* rounded-xl */
          /* Ombre interne subtile pour matcher 'shadow-inner' */
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* Suppression de la texture d'herbe pour un look "flat" */
        
        /* --- ÉLÉMENTS DÉCOR --- */
        .pd-stick {
          position: absolute;
          top: 42%; /* Décalé vers le haut pour laisser de la place */
          left: 10%;
          width: 80%;
          height: 4px;
          /* Couleur plate gris foncé pour matcher le style des autres éléments */
          background-color: #374151; 
          border-radius: 2px;
          transform: translateY(-50%);
        }

        .pd-stick-mark {
            position: absolute;
            top: 0; bottom: 0;
            width: 2px;
            background-color: rgba(255,255,255,0.3); /* Marques subtiles */
        }
        .pd-mark-start { left: 15%; }
        .pd-mark-end { right: 5%; }

        /* --- ÉLÉMENTS ANIMÉS --- */
        .pd-ball {
          position: absolute;
          top: 58%; /* Décalé vers le bas (sous le stick) */
          left: 22%;
          width: 16px; /* Légèrement plus grande */
          height: 16px;
          background-color: #fff;
          border-radius: 50%;
          /* Bordure fine et ombre très légère pour le style "flat" */
          border: 1px solid #d1d5db;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transform: translateY(-50%);
          z-index: 10;
          animation: pd-ball-roll 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        .pd-putter {
          position: absolute;
          top: 58%; /* Aligné avec la balle */
          left: 22%;
          width: 10px;
          height: 40px;
          /* Couleur plate gris moyen pour la tête du putter */
          background-color: #6b7280;
          border-radius: 2px;
          transform: translate(-150%, -50%);
          z-index: 20;
          animation: pd-putter-swing 4s ease-in-out infinite;
        }

        /* La tige du putter */
        .pd-putter::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 4px;
          /* Couleur plate gris plus clair pour la tige */
          background-color: #9ca3af;
          transform-origin: left center;
          transform: translateY(-50%) rotate(-15deg);
          z-index: -1;
          border-radius: 2px;
        }

        .pd-path-guide {
          position: absolute;
          top: 58%; /* Aligné avec la balle */
          left: 22%;
          width: 0%;
          height: 2px;
          /* Guide visuel plus subtil en gris clair */
          background-color: #e5e7eb;
          transform: translateY(-50%);
          z-index: 1;
          animation: pd-show-path 4s linear infinite;
        }

        /* --- KEYFRAMES (Mouvement inchangé) --- */
        @keyframes pd-putter-swing {
          0% { left: 22%; transform: translate(-150%, -50%); }
          25% { left: 22%; transform: translate(-400%, -50%); }
          30% { left: 22%; transform: translate(-400%, -50%); }
          35% { left: 22%; transform: translate(-120%, -50%); } /* Impact */
          45% { left: 22%; transform: translate(100%, -50%); opacity: 1; }
          80% { left: 22%; transform: translate(100%, -50%); opacity: 0; }
          100% { left: 22%; transform: translate(-150%, -50%); opacity: 0; }
        }

        @keyframes pd-ball-roll {
          0%, 35% { left: 22%; opacity: 1; transform: translateY(-50%); }
          85% { left: 95%; opacity: 1; transform: translateY(-50%); }
          100% { left: 100%; opacity: 0; transform: translateY(-50%); }
        }

        @keyframes pd-show-path {
          0%, 35% { width: 0; opacity: 0; }
          36% { opacity: 1; }
          80% { width: 70%; opacity: 0; }
          100% { width: 70%; opacity: 0; }
        }
      `}),u.jsxs("div",{className:"pd-container",children:[u.jsxs("div",{className:"pd-stick",children:[u.jsx("div",{className:"pd-stick-mark pd-mark-start"}),u.jsx("div",{className:"pd-stick-mark pd-mark-end"})]}),u.jsx("div",{className:"pd-path-guide"}),u.jsx("div",{className:"pd-ball"}),u.jsx("div",{className:"pd-putter"})]})]}),cf=()=>u.jsxs("div",{className:"ap-drill-wrapper",children:[u.jsx("style",{children:`
        .ap-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .ap-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- ÉLÉMENTS DÉCOR (Cibles) --- */
        .ap-hole {
          position: absolute;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .ap-hole-1 { top: 45%; left: 35%; }
        .ap-hole-2 { top: 20%; left: 65%; }

        /* --- ÉLÉMENTS ANIMÉS --- */
        .ap-ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ap-ball-sequence 8s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        .ap-putter {
          position: absolute;
          width: 40px;
          height: 10px;
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          transform-origin: center center;
          top: 80%;
          left: 50%;
          /* Le putter commence un peu plus bas pour être derrière la balle */
          margin-top: 15px; 
          margin-left: -20px;
          animation: ap-putter-sequence 8s ease-in-out infinite;
        }

        /* Tige du putter (Shaft) - CORRIGÉ : Pointe vers le bas (le joueur) */
        .ap-putter::after {
          content: '';
          position: absolute;
          top: 50%; /* Commence au milieu de la tête */
          left: 50%;
          width: 4px;
          height: 60px; /* Longueur du shaft visible */
          background-color: #9ca3af;
          transform-origin: top center;
          transform: translateX(-50%); /* Pas de rotation interne, suit le parent */
          z-index: -1;
          border-radius: 2px;
        }

        /* --- ANIMATIONS --- */
        
        @keyframes ap-ball-sequence {
          /* PUTT 1 (Gauche) */
          0% { opacity: 1; top: 80%; left: 50%; }
          15% { top: 80%; left: 50%; }
          30% { top: 45%; left: 35%; opacity: 1;}
          35% { opacity: 0; }
          36% { opacity: 0; top: 80%; left: 50%; }
          
          /* PUTT 2 (Droite) */
          50% { opacity: 1; top: 80%; left: 50%; }
          65% { top: 80%; left: 50%; }
          85% { top: 20%; left: 65%; opacity: 1; }
          90% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes ap-putter-sequence {
          /* --- PUTT 1 : Cible à -113°, Putter rotaté à -23° --- */
          0% { opacity: 1; transform: rotate(-23deg) translate(0, 0); }
          5% { transform: rotate(-23deg) translate(0, 0); }
          10% { transform: rotate(-23deg) translate(0, 15px); } /* Backswing (Recule dans l'axe Y local) */
          15% { transform: rotate(-23deg) translate(0, -5px); } /* Impact */
          20% { opacity: 1; transform: rotate(-23deg) translate(0, -25px); } /* Follow through vers la cible */
          25% { opacity: 0; }

          /* Reset invisible */
          49% { opacity: 0; transform: rotate(14deg) translate(0, 0); }

          /* --- PUTT 2 : Cible à -76°, Putter rotaté à +14° --- */
          50% { opacity: 1; transform: rotate(14deg) translate(0, 0); }
          55% { transform: rotate(14deg) translate(0, 0); }
          60% { transform: rotate(14deg) translate(0, 15px); } /* Backswing */
          65% { transform: rotate(14deg) translate(0, -5px); } /* Impact */
          70% { opacity: 1; transform: rotate(14deg) translate(0, -25px); } /* Follow through */
          75% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}),u.jsxs("div",{className:"ap-container",children:[u.jsx("div",{className:"ap-hole ap-hole-1"}),u.jsx("div",{className:"ap-hole ap-hole-2"}),u.jsx("div",{className:"ap-ball"}),u.jsx("div",{className:"ap-putter"})]})]}),df=()=>u.jsxs("div",{className:"pg-drill-wrapper",children:[u.jsx("style",{children:`
        .pg-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .pg-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- ÉLÉMENTS DÉCOR --- */
        
        /* Trou (Cible) - Positionné à droite */
        .pg-hole {
          position: absolute;
          top: 50%;
          left: 85%;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Les Tees (Porte) - Positionnés à gauche (Zone d'impact) */
        .pg-tee {
          position: absolute;
          left: 20%; /* Alignés avec la position de départ de la balle */
          width: 6px;
          height: 6px;
          background-color: #fb923c; /* Orange */
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          z-index: 5;
        }
        
        /* Écartement vertical pour laisser passer le putter */
        .pg-tee-top { top: calc(50% - 28px); }
        .pg-tee-bottom { top: calc(50% + 28px); }

        /* --- ÉLÉMENTS ANIMÉS --- */
        
        /* Balle */
        .pg-ball {
          position: absolute;
          top: 50%;
          left: 20%;
          width: 14px;
          height: 14px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          transform: translate(-50%, -50%); /* Centrage parfait */
          animation: pg-ball-roll 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        /* Putter - Tête verticale pour mouvement horizontal */
        .pg-putter {
          position: absolute;
          top: 50%;
          left: 20%;
          width: 10px; /* Épaisseur */
          height: 40px; /* Largeur (verticale ici) */
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          transform: translate(-150%, -50%); /* Position initiale derrière la balle */
          animation: pg-putter-swing 4s ease-in-out infinite;
        }

        /* Tige du putter (Shaft) - Oriente vers le joueur (en bas) */
        .pg-putter::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 60px;
          background-color: #9ca3af;
          transform-origin: top center;
          /* Rotation légère pour la perspective */
          transform: translateX(-50%) rotate(-5deg); 
          z-index: -1;
          border-radius: 2px;
        }

        /* --- ANIMATIONS (Horizontales) --- */

        @keyframes pg-putter-swing {
          0% { 
            left: 20%;
            transform: translate(-150%, -50%); /* Adresse */
          }
          20% { 
            left: 20%;
            transform: translate(-400%, -50%); /* Backswing (Recule vers la gauche) */
          }
          30% { 
            left: 20%;
            transform: translate(-400%, -50%); /* Pause */
          }
          35% { 
            left: 20%;
            transform: translate(-110%, -50%); /* Impact (entre les tees) */
          }
          45% { 
            left: 20%;
            transform: translate(100%, -50%); /* Follow through (vers la droite) */
            opacity: 1;
          }
          70% {
             left: 20%;
             transform: translate(100%, -50%);
             opacity: 0;
          }
          100% { 
            left: 20%;
            transform: translate(-150%, -50%);
            opacity: 0; 
          }
        }

        @keyframes pg-ball-roll {
          0%, 35% { 
            left: 20%; 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1);
          }
          75% { 
            left: 85%; /* Arrive au trou */
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          80% { 
            left: 85%; 
            transform: translate(-50%, -50%) scale(0.8); /* Tombe visuellement */
            opacity: 0;
          }
          100% { 
            left: 85%; 
            opacity: 0; 
          }
        }

      `}),u.jsxs("div",{className:"pg-container",children:[u.jsx("div",{className:"pg-hole"}),u.jsx("div",{className:"pg-tee pg-tee-top"}),u.jsx("div",{className:"pg-tee pg-tee-bottom"}),u.jsx("div",{className:"pg-ball"}),u.jsx("div",{className:"pg-putter"})]})]}),pf=()=>u.jsxs("div",{className:"sd-drill-wrapper",children:[u.jsx("style",{children:`
        .sd-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .sd-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR --- */
        
        .sd-hole {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          z-index: 5;
        }

        /* Ligne guide Fibonacci (Optionnel : aide visuelle subtile) */
        .sd-fib-guide {
            position: absolute;
            top: 50%; left: 50%;
            width: 1px; height: 1px;
            /* Pas de bordure visible pour garder le style flat, 
               mais les balles suivent cette courbe invisible */
        }

        /* --- BALLES (8 Positions - Spirale Fibonacci) --- */
        .sd-ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        /* CALCUL FIBONACCI (Distances approximatives du centre) :
           Angle step: 45deg (Clockwise)
           Ratios dist: 8%, 10%, 13%, 17%, 22%, 28%, 35%, 44%
        */

        /* Balle 1 (Très proche - Bas) */
        .sd-ball-1 { top: 58%; left: 50%; animation: sd-ball-anim-1 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        
        /* Balle 2 (Proche - Bas Gauche) */
        .sd-ball-2 { top: 57%; left: 43%; animation: sd-ball-anim-2 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        
        /* Balle 3 (Moyenne - Gauche) */
        .sd-ball-3 { top: 50%; left: 37%; animation: sd-ball-anim-3 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        
        /* Balle 4 (Moyenne - Haut Gauche) */
        .sd-ball-4 { top: 38%; left: 38%; animation: sd-ball-anim-4 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 5 (Loin - Haut) */
        .sd-ball-5 { top: 28%; left: 50%; animation: sd-ball-anim-5 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 6 (Loin - Haut Droite) */
        .sd-ball-6 { top: 30%; left: 70%; animation: sd-ball-anim-6 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 7 (Très Loin - Droite) */
        .sd-ball-7 { top: 50%; left: 85%; animation: sd-ball-anim-7 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

        /* Balle 8 (Max - Bas Droite) */
        .sd-ball-8 { top: 81%; left: 81%; animation: sd-ball-anim-8 16s cubic-bezier(0.25, 1, 0.5, 1) infinite; }


        /* --- PUTTER --- */
        .sd-putter {
          position: absolute;
          width: 10px; height: 40px;
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          transform-origin: center center;
          opacity: 0;
          animation: sd-putter-sequence 16s ease-in-out infinite;
        }

        .sd-putter::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 60px;
          background-color: #9ca3af;
          transform-origin: top center;
          transform: translateX(-50%); 
          z-index: -1;
          border-radius: 2px;
        }


        /* --- KEYFRAMES --- */

        @keyframes sd-putter-sequence {
          /* --- BALLE 1 (90deg) --- */
          0%   { opacity: 1; top: 60%; left: 50%; transform: translate(-50%, -50%) rotate(90deg); }
          2%   { top: 58%; left: 50%; transform: translate(-50%, -50%) rotate(90deg); } /* Impact */
          6%   { opacity: 1; top: 55%; left: 50%; }
          7%   { opacity: 0; }

          /* --- BALLE 2 (135deg) --- */
          12.5% { opacity: 1; top: 59%; left: 41%; transform: translate(-50%, -50%) rotate(135deg); }
          14.5% { top: 57%; left: 43%; transform: translate(-50%, -50%) rotate(135deg); } /* Impact */
          18.5% { opacity: 1; top: 54%; left: 46%; }
          19.5% { opacity: 0; }

          /* --- BALLE 3 (180deg) --- */
          25%   { opacity: 1; top: 50%; left: 35%; transform: translate(-50%, -50%) rotate(180deg); }
          27%   { top: 50%; left: 37%; transform: translate(-50%, -50%) rotate(180deg); } /* Impact */
          31%   { opacity: 1; top: 50%; left: 41%; }
          32%   { opacity: 0; }

          /* --- BALLE 4 (225deg) --- */
          37.5% { opacity: 1; top: 36%; left: 36%; transform: translate(-50%, -50%) rotate(225deg); }
          39.5% { top: 38%; left: 38%; transform: translate(-50%, -50%) rotate(225deg); } /* Impact */
          43.5% { opacity: 1; top: 41%; left: 41%; }
          44.5% { opacity: 0; }

          /* --- BALLE 5 (270deg) --- */
          50%   { opacity: 1; top: 26%; left: 50%; transform: translate(-50%, -50%) rotate(270deg); }
          52%   { top: 28%; left: 50%; transform: translate(-50%, -50%) rotate(270deg); } /* Impact */
          56%   { opacity: 1; top: 33%; left: 50%; }
          57%   { opacity: 0; }

          /* --- BALLE 6 (315deg) --- */
          62.5% { opacity: 1; top: 28%; left: 72%; transform: translate(-50%, -50%) rotate(315deg); }
          64.5% { top: 30%; left: 70%; transform: translate(-50%, -50%) rotate(315deg); } /* Impact */
          68.5% { opacity: 1; top: 34%; left: 66%; }
          69.5% { opacity: 0; }

          /* --- BALLE 7 (0deg) --- */
          75%   { opacity: 1; top: 50%; left: 87%; transform: translate(-50%, -50%) rotate(0deg); }
          77%   { top: 50%; left: 85%; transform: translate(-50%, -50%) rotate(0deg); } /* Impact */
          81%   { opacity: 1; top: 50%; left: 80%; }
          82%   { opacity: 0; }

          /* --- BALLE 8 (45deg) --- */
          87.5% { opacity: 1; top: 83%; left: 83%; transform: translate(-50%, -50%) rotate(45deg); }
          89.5% { top: 81%; left: 81%; transform: translate(-50%, -50%) rotate(45deg); } /* Impact */
          93.5% { opacity: 1; top: 76%; left: 76%; }
          94.5% { opacity: 0; }
          100%  { opacity: 0; }
        }

        /* --- ANIMATIONS BALLES --- */

        @keyframes sd-ball-anim-1 {
          0%, 2% { top: 58%; left: 50%; opacity: 1; }
          4% { top: 50%; left: 50%; opacity: 1; }
          5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 58%; left: 50%; }
        }
        @keyframes sd-ball-anim-2 {
          0%, 14.5% { top: 57%; left: 43%; opacity: 1; }
          16.5% { top: 50%; left: 50%; opacity: 1; }
          17.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 57%; left: 43%; }
        }
        @keyframes sd-ball-anim-3 {
          0%, 27% { top: 50%; left: 37%; opacity: 1; }
          29% { top: 50%; left: 50%; opacity: 1; }
          30% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 50%; left: 37%; }
        }
        @keyframes sd-ball-anim-4 {
          0%, 39.5% { top: 38%; left: 38%; opacity: 1; }
          41.5% { top: 50%; left: 50%; opacity: 1; }
          42.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 38%; left: 38%; }
        }
        @keyframes sd-ball-anim-5 {
          0%, 52% { top: 28%; left: 50%; opacity: 1; }
          54% { top: 50%; left: 50%; opacity: 1; }
          55% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 28%; left: 50%; }
        }
        @keyframes sd-ball-anim-6 {
          0%, 64.5% { top: 30%; left: 70%; opacity: 1; }
          66.5% { top: 50%; left: 50%; opacity: 1; }
          67.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 30%; left: 70%; }
        }
        @keyframes sd-ball-anim-7 {
          0%, 77% { top: 50%; left: 85%; opacity: 1; }
          79% { top: 50%; left: 50%; opacity: 1; }
          80% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 50%; left: 85%; }
        }
        @keyframes sd-ball-anim-8 {
          0%, 89.5% { top: 81%; left: 81%; opacity: 1; }
          91.5% { top: 50%; left: 50%; opacity: 1; }
          92.5% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; top: 81%; left: 81%; }
        }

      `}),u.jsxs("div",{className:"sd-container",children:[u.jsx("div",{className:"sd-hole"}),u.jsx("div",{className:"sd-fib-guide"}),u.jsx("div",{className:"sd-ball sd-ball-1"}),u.jsx("div",{className:"sd-ball sd-ball-2"}),u.jsx("div",{className:"sd-ball sd-ball-3"}),u.jsx("div",{className:"sd-ball sd-ball-4"}),u.jsx("div",{className:"sd-ball sd-ball-5"}),u.jsx("div",{className:"sd-ball sd-ball-6"}),u.jsx("div",{className:"sd-ball sd-ball-7"}),u.jsx("div",{className:"sd-ball sd-ball-8"}),u.jsx("div",{className:"sd-putter"})]})]}),ff=()=>u.jsxs("div",{className:"lp-drill-wrapper",children:[u.jsx("style",{children:`
        .lp-drill-wrapper {
          width: 100%;
          height: 14rem; /* h-56 */
          display: flex;
          justify-content: center;
        }

        .lp-container {
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR (Zone Cible) --- */
        
        .lp-zone {
          position: absolute;
          top: 50%;
          left: 80%;
          width: 100px;
          height: 100px;
          background-color: rgba(229, 231, 235, 0.4);
          border: 1px dashed #d1d5db;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          /* Feedback visuel : Rouge (Échec) puis Vert (Réussite) */
          animation: lp-zone-feedback 24s ease-in-out infinite;
        }

        .lp-hole {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
          z-index: 2;
        }

        /* --- INDICATEURS --- */
        .lp-marker-dist {
          position: absolute;
          bottom: 15%;
          left: 15%; right: 20%;
          height: 1px;
          background-color: #d1d5db;
        }
        .lp-marker-dist::before, .lp-marker-dist::after {
          content: ''; position: absolute; top: -3px; width: 1px; height: 7px; background-color: #d1d5db;
        }
        .lp-marker-dist::before { left: 0; }
        .lp-marker-dist::after { right: 0; }
        
        .lp-text-dist {
          position: absolute;
          bottom: 17%; left: 50%; transform: translateX(-50%);
          font-size: 0.7rem; color: #9ca3af; font-weight: 500;
          background-color: #f9fafb; padding: 0 4px;
        }

        .lp-marker-radius {
          position: absolute; top: 50%; left: 50%; width: 50px; height: 1px;
          background-color: #9ca3af; transform-origin: left center; transform: rotate(-45deg);
        }
        .lp-text-radius {
          position: absolute; top: -12px; left: 20px;
          font-size: 0.6rem; color: #6b7280; white-space: nowrap; transform: rotate(0deg);
        }

        /* --- BALLES --- */
        .lp-ball {
          position: absolute;
          width: 12px; height: 12px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        /* Positions initiales plus espacées (30%, 50%, 70%) */
        .lp-ball-1 { top: 30%; left: 15%; animation: lp-ball-1-seq 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
        .lp-ball-2 { top: 50%; left: 15%; animation: lp-ball-2-seq 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
        .lp-ball-3 { top: 70%; left: 15%; animation: lp-ball-3-seq 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }

        /* --- PUTTER --- */
        .lp-putter {
          position: absolute;
          width: 10px; height: 36px;
          background-color: #6b7280;
          border-radius: 2px;
          z-index: 20;
          /* CORRECTION MAJEURE : Centrage du putter pour frappe au 'Sweet Spot' */
          transform: translate(-50%, -50%); 
          top: 50%; left: 15%; 
          opacity: 0;
          animation: lp-putter-sequence 24s ease-in-out infinite;
        }

        .lp-putter::after {
          content: ''; position: absolute; top: 50%; left: 50%; width: 4px; height: 50px;
          background-color: #9ca3af; transform-origin: top center; 
          /* Centrage de la tige par rapport au centre de la tête */
          transform: translateX(-50%) rotate(-5deg);
          z-index: -1; border-radius: 2px;
        }

        /* --- KEYFRAMES --- */

        /* Animation Feedback Zone : Rouge (Fail) -> Neutre -> Vert (Success) */
        @keyframes lp-zone-feedback {
          /* Phase Échec (0-50%) */
          0% { background-color: rgba(229, 231, 235, 0.4); border-color: #d1d5db; }
          15%, 45% { background-color: rgba(254, 202, 202, 0.3); border-color: #fca5a5; } /* Rouge léger */
          50% { background-color: rgba(229, 231, 235, 0.4); border-color: #d1d5db; }
          
          /* Phase Réussite (50-100%) */
          65%, 95% { background-color: rgba(167, 243, 208, 0.3); border-color: #6ee7b7; } /* Vert léger */
          100% { background-color: rgba(229, 231, 235, 0.4); border-color: #d1d5db; }
        }

        /* PUTTER SEQUENCE
           Utilisation de 'margin-left' pour le mouvement relatif, 
           en gardant 'left: 15%' comme base.
           Base margin-left: -12px (Position adresse, juste derrière la balle)
        */
        @keyframes lp-putter-sequence {
          /* --- Séquence 1 (Essai) --- */
          /* Coup 1 (Haut - 30%) */ 
          0% { opacity: 1; top: 30%; margin-left: -12px; } 
          1.5% { margin-left: -32px; } /* Backswing */
          2.5% { margin-left: -2px; } /* Impact (Face touche balle) */
          5% { opacity: 1; margin-left: 18px; } /* Follow through */
          6% { opacity: 0; }

          /* Coup 2 (Milieu - 50%) */ 
          16.6% { opacity: 1; top: 50%; margin-left: -12px; } 
          18% { margin-left: -32px; } 
          19% { margin-left: -2px; } 
          21.6% { opacity: 1; margin-left: 18px; } 
          22.6% { opacity: 0; }

          /* Coup 3 (Bas - 70%) */ 
          33.3% { opacity: 1; top: 70%; margin-left: -12px; } 
          35% { margin-left: -32px; } 
          36% { margin-left: -2px; } 
          38.3% { opacity: 1; margin-left: 18px; } 
          39.3% { opacity: 0; }

          /* --- Séquence 2 (Réussite) --- */
          /* Coup 4 (Haut) */ 
          50% { opacity: 1; top: 30%; margin-left: -12px; } 
          51.5% { margin-left: -32px; } 
          52.5% { margin-left: -2px; } 
          55% { opacity: 1; margin-left: 18px; } 
          56% { opacity: 0; }

          /* Coup 5 (Milieu) */ 
          66.6% { opacity: 1; top: 50%; margin-left: -12px; } 
          68% { margin-left: -32px; } 
          69% { margin-left: -2px; } 
          71.6% { opacity: 1; margin-left: 18px; } 
          72.6% { opacity: 0; }

          /* Coup 6 (Bas) */ 
          83.3% { opacity: 1; top: 70%; margin-left: -12px; } 
          85% { margin-left: -32px; } 
          86% { margin-left: -2px; } 
          88.3% { opacity: 1; margin-left: 18px; } 
          89.3% { opacity: 0; }
          
          100% { opacity: 0; }
        }

        /* BALLE 1 : Échec (Court) -> Réussite (Dans zone) */
        @keyframes lp-ball-1-seq {
          /* Seq 1 : Court (60%) */
          0%, 2.5% { top: 30%; left: 15%; opacity: 1; }
          15% { left: 60%; opacity: 1; } 
          48% { left: 60%; opacity: 1; } 
          49% { opacity: 0; }
          
          /* Seq 2 : Parfait (80%) */
          50%, 52.5% { top: 30%; left: 15%; opacity: 1; }
          65% { top: 33%; left: 78%; opacity: 1; } /* Dans la zone */
          98% { top: 33%; left: 78%; opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* BALLE 2 : Échec (Long) -> Réussite (Dans zone) */
        @keyframes lp-ball-2-seq {
          /* Seq 1 : Long (90%) */
          0%, 19% { top: 50%; left: 15%; opacity: 1; }
          32% { left: 90%; opacity: 1; }
          48% { left: 90%; opacity: 1; }
          49% { opacity: 0; }

          /* Seq 2 : Parfait (85%) */
          50%, 69% { top: 50%; left: 15%; opacity: 1; }
          81% { top: 50%; left: 82%; opacity: 1; } /* Dans la zone, derrière trou */
          98% { top: 50%; left: 82%; opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* BALLE 3 : Ok (Zone) -> Réussite (Dans zone) */
        @keyframes lp-ball-3-seq {
          /* Seq 1 : Ok (76%) */
          0%, 36% { top: 70%; left: 15%; opacity: 1; }
          48% { left: 76%; opacity: 1; }
          49% { opacity: 0; }

          /* Seq 2 : Parfait (83%) */
          50%, 86% { top: 70%; left: 15%; opacity: 1; }
          95% { top: 67%; left: 80%; opacity: 1; } /* Dans la zone, proche trou */
          98% { top: 67%; left: 80%; opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

      `}),u.jsxs("div",{className:"lp-container",children:[u.jsxs("div",{className:"lp-zone",children:[u.jsx("div",{className:"lp-hole"}),u.jsx("div",{className:"lp-marker-radius",children:u.jsx("span",{className:"lp-text-radius",children:"1m"})})]}),u.jsx("div",{className:"lp-marker-dist"}),u.jsx("div",{className:"lp-text-dist",children:"10m"}),u.jsx("div",{className:"lp-ball lp-ball-1"}),u.jsx("div",{className:"lp-ball lp-ball-2"}),u.jsx("div",{className:"lp-ball lp-ball-3"}),u.jsx("div",{className:"lp-putter"})]})]}),mf=()=>u.jsxs("div",{className:"pc-drill-wrapper",children:[u.jsx("style",{children:`
        .pc-drill-wrapper {
          width: 100%;
          height: 14rem;
          display: flex;
          justify-content: center;
        }

        .pc-container {
          width: 100%;
          height: 100%;
          /* Fond Fringe (Avant-green) : Vert un peu jaune/terreux */
          background-color: #ecfccb; 
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR ORGANIQUE --- */
        
        /* Forme SVG pour la délimitation Green / Fringe */
        .pc-green-shape {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .pc-green-path {
          /* Green : Vert tendre et propre */
          fill: #d1fae5; 
        }

        /* Trou & Drapeau */
        .pc-hole {
          position: absolute;
          top: 50%;
          right: 15%;
          width: 24px;
          height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          z-index: 2;
        }
        
        .pc-pin {
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 4px;
          background-color: #ef4444; /* Rouge pour le drapeau vu de haut */
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 2px #fff; /* Petit contour blanc pour le contraste */
        }

        /* --- LÉGENDES TEXTUELLES --- */
        .pc-label {
          position: absolute;
          bottom: 12px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 5;
          pointer-events: none;
        }
        
        .pc-label-fringe {
          left: 14px;
          color: #65a30d; /* Vert olive foncé pour le contraste sur le fringe */
          opacity: 0.8;
        }

        .pc-label-green {
          right: 14px;
          color: #059669; /* Vert émeraude pour le contraste sur le green */
          opacity: 0.8;
        }


        /* --- BALLES & OMBRES --- */
        
        .pc-ball-wrapper {
          position: absolute;
          top: 50%;
          left: 15%;
          width: 14px;
          height: 14px;
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        .pc-ball {
          width: 100%; height: 100%;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .pc-shadow {
          position: absolute;
          top: 50%; left: 50%;
          width: 12px; height: 12px;
          background-color: rgba(0,0,0,0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        /* Putt Wrapper */
        .pc-wrapper-1 {
          animation: pc-ball-putt 10s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        /* Chip Wrapper */
        .pc-wrapper-2 {
          animation: pc-ball-chip-move 10s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .pc-ball-2 {
          animation: pc-ball-chip-height 10s ease-in-out infinite;
        }
        .pc-shadow-2 {
          animation: pc-shadow-chip 10s ease-in-out infinite;
        }


        /* --- CLUBS (Redesign) --- */
        
        .pc-club {
          position: absolute;
          top: 50%;
          left: 15%;
          z-index: 20;
          transform-origin: center center;
          transform: translate(-150%, -50%);
          opacity: 0;
        }

        /* PUTTER : Rectangulaire, sombre (Maillet ou lame) */
        .pc-putter {
          width: 10px; height: 40px;
          background-color: #374151;
          border-radius: 2px;
          animation: pc-swing-putt 10s ease-in-out infinite;
        }
        /* Tige Putter */
        .pc-putter::after {
          content: ''; position: absolute; top: 50%; left: 50%;
          width: 4px; height: 60px; background-color: #9ca3af;
          transform-origin: top center; transform: translateX(-50%) rotate(-5deg);
          z-index: -1; border-radius: 2px;
        }


        /* WEDGE : Forme de fer réaliste (Chrome) */
        .pc-wedge {
          width: 18px; /* Un peu plus large pour le texte */
          height: 44px;
          background-color: #e5e7eb; /* Chrome/Silver */
          border: 1px solid #d1d5db;
          
          /* Forme trapézoïdale typique d'un fer vu de dessus */
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%);
          border-radius: 2px 8px 2px 2px;
          
          animation: pc-swing-chip 10s ease-in-out infinite;
          
          /* Centrage du texte SW */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Inscription "SW" sur la tête de club */
        .pc-wedge-text {
          font-size: 8px;
          font-weight: 800;
          color: #9ca3af; /* Gris foncé effet gravure */
          transform: rotate(90deg); /* Texte vertical le long de la tête */
          user-select: none;
          white-space: nowrap;
        }
        
        /* Hosel (Jonction tête-manche) pour le wedge */
        .pc-wedge::before {
          content: ''; position: absolute; bottom: -5px; left: 2px;
          width: 6px; height: 10px; background-color: #d1d5db;
          transform: rotate(-10deg); border-radius: 2px;
        }
        
        /* Tige Wedge */
        .pc-wedge::after {
          content: ''; position: absolute; top: 50%; left: 30%; /* Tige décalée vers le talon */
          width: 4px; height: 60px; background-color: #9ca3af;
          transform-origin: top center; transform: translateX(-50%) rotate(-5deg);
          z-index: -1; border-radius: 2px;
        }


        /* --- KEYFRAMES --- */
        
        /* 1. PUTT SWING */
        @keyframes pc-swing-putt {
          0% { opacity: 1; transform: translate(-150%, -50%); } 
          5% { transform: translate(-350%, -50%); } 
          10% { transform: translate(-50%, -50%); } 
          15% { opacity: 1; transform: translate(100%, -50%); } 
          20% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* 1. PUTT BALL */
        @keyframes pc-ball-putt {
          0%, 10% { left: 15%; opacity: 1; }
          40% { left: 83%; opacity: 1; }
          45% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* 2. CHIP SWING */
        @keyframes pc-swing-chip {
          0%, 50% { opacity: 0; transform: translate(-150%, -50%); }
          50% { opacity: 1; transform: translate(-150%, -50%); } 
          55% { transform: translate(-350%, -50%) rotate(-10deg); } 
          60% { transform: translate(-50%, -50%) rotate(0deg); } 
          65% { opacity: 1; transform: translate(100%, -50%); } 
          70% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* 2. CHIP BALL MOVEMENT */
        @keyframes pc-ball-chip-move {
          0%, 60% { left: 15%; opacity: 1; }
          85% { left: 83%; opacity: 1; } 
          90% { opacity: 0; }
          100% { opacity: 0; left: 15%; }
        }

        /* 2. CHIP HEIGHT */
        @keyframes pc-ball-chip-height {
          0%, 60% { transform: scale(1); }
          70% { transform: scale(1.5); } /* Monte plus haut */
          80% { transform: scale(1); } 
          100% { transform: scale(1); }
        }

        /* 2. CHIP SHADOW */
        @keyframes pc-shadow-chip {
          0%, 60% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          70% { opacity: 0.2; transform: translate(-60%, 25px) scale(0.5); }
          80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%); }
        }

      `}),u.jsxs("div",{className:"pc-container",children:[u.jsxs("svg",{className:"pc-green-shape",preserveAspectRatio:"none",viewBox:"0 0 100 100",children:[u.jsx("defs",{children:u.jsx("filter",{id:"shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:u.jsx("feDropShadow",{dx:"0",dy:"1",stdDeviation:"1",floodOpacity:"0.1"})})}),u.jsx("path",{className:"pc-green-path",d:"M 30,0 C 40,20 20,40 35,60 C 45,80 30,100 30,100 L 100,100 L 100,0 Z",filter:"url(#shadow)"})]}),u.jsx("div",{className:"pc-label pc-label-fringe",children:"Bord du green"}),u.jsx("div",{className:"pc-label pc-label-green",children:"Green"}),u.jsx("div",{className:"pc-hole",children:u.jsx("div",{className:"pc-pin"})}),u.jsxs("div",{className:"pc-ball-wrapper pc-wrapper-1",children:[u.jsx("div",{className:"pc-shadow pc-shadow-1"}),u.jsx("div",{className:"pc-ball"})]}),u.jsx("div",{className:"pc-club pc-putter"}),u.jsxs("div",{className:"pc-ball-wrapper pc-wrapper-2",children:[u.jsx("div",{className:"pc-shadow pc-shadow-2"}),u.jsx("div",{className:"pc-ball pc-ball-2"})]}),u.jsx("div",{className:"pc-club pc-wedge",children:u.jsx("span",{className:"pc-wedge-text",children:"SW"})})]})]}),hf=()=>u.jsxs("div",{className:"pc-drill-wrapper",children:[u.jsx("style",{children:`
        .pc-drill-wrapper {
          width: 100%;
          height: 14rem;
          display: flex;
          justify-content: center;
        }

        .pc-container {
          width: 100%;
          height: 100%;
          background-color: #ecfccb; 
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* --- DÉCOR ORGANIQUE --- */
        .pc-green-shape {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .pc-green-path { fill: #d1fae5; }

        .pc-hole {
          position: absolute;
          top: 50%; right: 15%;
          width: 24px; height: 24px;
          background-color: #374151;
          border-radius: 50%;
          transform: translate(50%, -50%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
          z-index: 2;
        }
        .pc-pin {
          position: absolute;
          top: 50%; left: 50%;
          width: 4px; height: 4px;
          background-color: #ef4444;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 2px #fff;
        }

        /* --- SCORE FEEDBACK (Corrigé) --- */
        .pc-score-card {
          position: absolute;
          top: 20%; left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          padding: 4px 8px;
          display: flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 30;
          opacity: 0;
          /* Cycle 28s : Score apparaît après chaque putt */
          animation: pc-score-anim 28s ease-in-out infinite;
        }
        .pc-score-text { font-size: 0.7rem; font-weight: 700; color: #374151; text-transform: uppercase; }
        .pc-score-check { width: 12px; height: 12px; border: 1px solid #d1d5db; border-radius: 2px; position: relative; }
        .pc-score-check::after {
          content: '✓'; position: absolute; top: -2px; left: 1px; font-size: 10px; color: #16a34a; opacity: 0;
          animation: pc-check-anim 28s ease-in-out infinite;
        }

        /* --- LÉGENDES --- */
        .pc-label {
          position: absolute; bottom: 12px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
          z-index: 5; pointer-events: none;
        }
        .pc-label-fringe { left: 14px; color: #65a30d; opacity: 0.8; }
        .pc-label-green { right: 14px; color: #059669; opacity: 0.8; }

        /* --- ELEMENTS COMMUNS --- */
        .pc-ball-wrapper { position: absolute; width: 14px; height: 14px; z-index: 10; transform: translate(-50%, -50%); }
        .pc-ball { width: 100%; height: 100%; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 50%; position: relative; z-index: 2; }
        .pc-shadow { position: absolute; top: 50%; left: 50%; width: 12px; height: 12px; background-color: rgba(0,0,0,0.2); border-radius: 50%; transform: translate(-50%, -50%); z-index: 1; }
        
        .pc-club { position: absolute; z-index: 20; transform-origin: center center; transform: translate(-150%, -50%); opacity: 0; }
        
        /* Styles Têtes de Club */
        .head-wedge {
          width: 18px; height: 44px; background-color: #e5e7eb; border: 1px solid #d1d5db;
          clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%); border-radius: 2px 8px 2px 2px;
          display: flex; align-items: center; justify-content: center;
        }
        .head-wedge::before { content: ''; position: absolute; bottom: -5px; left: 2px; width: 6px; height: 10px; background-color: #d1d5db; transform: rotate(-10deg); border-radius: 2px; }
        .head-putter { width: 10px; height: 40px; background-color: #374151; border-radius: 2px; }
        
        /* Tiges */
        .stem { content: ''; position: absolute; top: 50%; width: 4px; height: 60px; background-color: #9ca3af; transform-origin: top center; z-index: -1; border-radius: 2px; }
        .stem-wedge { left: 30%; transform: translateX(-50%) rotate(-5deg); }
        .stem-putter { left: 50%; transform: translateX(-50%) rotate(-5deg); }
        .pc-wedge-text { font-size: 8px; font-weight: 800; color: #9ca3af; transform: rotate(90deg); user-select: none; white-space: nowrap; }


        /* ============================ */
        /* === SEQUENCE 1 (0% - 50%) === */
        /* ============================ */
        
        /* CHIP 1 (Gauche -> Centre) */
        .pc-chip-1 { top: 50%; left: 15%; animation: pc-chip-move-1 28s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .pc-chip-ball-1 { animation: pc-chip-height-1 28s ease-in-out infinite; }
        .pc-chip-shadow-1 { animation: pc-chip-shadow-1 28s ease-in-out infinite; }
        
        .pc-club-chip-1 { top: 50%; left: 15%; animation: pc-swing-chip-1 28s ease-in-out infinite; }

        /* PUTT 1 (Centre -> Trou) */
        .pc-putt-1 { top: 50%; left: 65%; opacity: 0; animation: pc-putt-move-1 28s ease-out infinite; }
        .pc-club-putt-1 { top: 50%; left: 65%; animation: pc-swing-putt-1 28s ease-in-out infinite; }


        /* ============================ */
        /* === SEQUENCE 2 (50% - 100%) === */
        /* ============================ */
        
        /* CHIP 2 (Bas Gauche -> Centre) */
        .pc-chip-2 { top: 80%; left: 20%; animation: pc-chip-move-2 28s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .pc-chip-ball-2 { animation: pc-chip-height-2 28s ease-in-out infinite; }
        .pc-chip-shadow-2 { animation: pc-chip-shadow-2 28s ease-in-out infinite; }
        
        /* Club orienté différemment pour le chip diagonal */
        .pc-club-chip-2 { top: 80%; left: 20%; transform: translate(-150%, -50%) rotate(-20deg); animation: pc-swing-chip-2 28s ease-in-out infinite; }

        /* PUTT 2 (Centre -> Trou) */
        .pc-putt-2 { top: 50%; left: 60%; opacity: 0; animation: pc-putt-move-2 28s ease-out infinite; }
        .pc-club-putt-2 { top: 50%; left: 60%; animation: pc-swing-putt-2 28s ease-in-out infinite; }


        /* ============================ */
        /* === KEYFRAMES ANIMATION === */
        /* ============================ */

        /* --- SCORE CARD FIX --- */
        @keyframes pc-score-anim {
            0% { opacity: 0; transform: translate(-50%, -30%) scale(0.8); } /* Début invisible */

            /* Score 1 (Après Putt 1 vers 41%) */
            42% { opacity: 0; transform: translate(-50%, -30%) scale(0.8); }
            44% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            52% { opacity: 0; transform: translate(-50%, -60%) scale(1); }
            
            /* Score 2 (Après Putt 2 vers 91%) */
            92% { opacity: 0; transform: translate(-50%, -30%) scale(0.8); }
            94% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            98% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            99.9% { opacity: 0; transform: translate(-50%, -60%) scale(1); } /* Fin invisible */
            100% { opacity: 0; }
        }
        @keyframes pc-check-anim {
            44% { opacity: 0; } 45% { opacity: 1; transform: scale(1.2); } 46% { transform: scale(1); } 52% { opacity: 1; }
            94% { opacity: 0; } 95% { opacity: 1; transform: scale(1.2); } 96% { transform: scale(1); } 99% { opacity: 1; }
        }

        /* --- SEQUENCE 1 (0-50%) --- */
        
        /* Chip 1 */
        @keyframes pc-swing-chip-1 {
          0% { opacity: 0; transform: translate(-150%, -50%); }
          2% { opacity: 1; transform: translate(-150%, -50%); }
          4% { transform: translate(-350%, -50%) rotate(-10deg); }
          6% { transform: translate(-50%, -50%) rotate(0deg); } /* Impact */
          8% { opacity: 1; transform: translate(100%, -50%); }
          10% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-chip-move-1 {
          0%, 6% { left: 15%; opacity: 1; }
          15% { left: 65%; opacity: 1; } /* Atterri */
          25% { left: 65%; opacity: 1; } /* Pause */
          /* Fix liaison Putt : Reste visible jusqu'au dernier moment */
          27.9% { opacity: 1; left: 65%; } 
          28% { opacity: 0; left: 65%; } /* Disparait à l'impact putt */
          100% { opacity: 0; left: 15%; }
        }
        @keyframes pc-chip-height-1 {
          0%, 6% { transform: scale(1); } 10% { transform: scale(1.5); } 15% { transform: scale(1); } 100% { transform: scale(1); }
        }
        @keyframes pc-chip-shadow-1 {
          0%, 6% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 10% { opacity: 0.3; transform: translate(-60%, 25px) scale(0.6); } 15% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%); }
        }

        /* Putt 1 (25% à 40%) */
        @keyframes pc-swing-putt-1 {
          0%, 23% { opacity: 0; transform: translate(-150%, -50%); }
          25% { opacity: 1; transform: translate(-150%, -50%); } /* Adresse */
          26.5% { transform: translate(-350%, -50%); }
          28% { transform: translate(-50%, -50%); } /* Impact à 28% */
          29.5% { opacity: 1; transform: translate(100%, -50%); }
          32% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-putt-move-1 {
          0% { opacity: 0; left: 65%; }
          27.9% { opacity: 0; left: 65%; }
          28% { opacity: 1; left: 65%; } /* Apparition synchronisée */
          40% { left: 85%; opacity: 1; }
          41% { opacity: 0; left: 85%; }
          100% { opacity: 0; left: 65%; }
        }


        /* --- SEQUENCE 2 (50-100%) --- */
        
        /* Chip 2 */
        @keyframes pc-swing-chip-2 {
          0%, 50% { opacity: 0; transform: translate(-150%, -50%) rotate(-20deg); }
          52% { opacity: 1; transform: translate(-150%, -50%) rotate(-20deg); }
          54% { transform: translate(-350%, -50%) rotate(-30deg); }
          56% { transform: translate(-50%, -50%) rotate(-20deg); } /* Impact */
          58% { opacity: 1; transform: translate(100%, -50%) rotate(-10deg); }
          60% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-chip-move-2 {
          0%, 56% { top: 80%; left: 20%; opacity: 1; }
          65% { top: 50%; left: 60%; opacity: 1; } /* Atterri au centre */
          75% { top: 50%; left: 60%; opacity: 1; }
          /* Fix liaison Putt 2 : Reste visible jusqu'au dernier moment */
          77.9% { opacity: 1; top: 50%; left: 60%; }
          78% { opacity: 0; top: 50%; left: 60%; } /* Disparait à l'impact putt */
          100% { opacity: 0; top: 80%; left: 20%; }
        }
        @keyframes pc-chip-height-2 {
          0%, 56% { transform: scale(1); } 60% { transform: scale(1.5); } 65% { transform: scale(1); } 100% { transform: scale(1); }
        }
        @keyframes pc-chip-shadow-2 {
          0%, 56% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 60% { opacity: 0.3; transform: translate(-60%, 25px) scale(0.6); } 65% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%); }
        }

        /* Putt 2 (75% à 90%) */
        @keyframes pc-swing-putt-2 {
          0%, 73% { opacity: 0; transform: translate(-150%, -50%); }
          75% { opacity: 1; transform: translate(-150%, -50%); }
          76.5% { transform: translate(-350%, -50%); }
          78% { transform: translate(-50%, -50%); } /* Impact à 78% */
          79.5% { opacity: 1; transform: translate(100%, -50%); }
          82% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes pc-putt-move-2 {
          0% { opacity: 0; left: 60%; }
          77.9% { opacity: 0; left: 60%; }
          78% { opacity: 1; left: 60%; } /* Apparition synchronisée */
          90% { left: 85%; opacity: 1; }
          91% { opacity: 0; left: 85%; }
          100% { opacity: 0; left: 60%; }
        }

      `}),u.jsxs("div",{className:"pc-container",children:[u.jsxs("svg",{className:"pc-green-shape",preserveAspectRatio:"none",viewBox:"0 0 100 100",children:[u.jsx("defs",{children:u.jsx("filter",{id:"shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:u.jsx("feDropShadow",{dx:"0",dy:"1",stdDeviation:"1",floodOpacity:"0.1"})})}),u.jsx("path",{className:"pc-green-path",d:"M 30,0 C 40,20 20,40 35,60 C 45,80 30,100 30,100 L 100,100 L 100,0 Z",filter:"url(#shadow)"})]}),u.jsx("div",{className:"pc-label pc-label-fringe",children:"Bord du green"}),u.jsx("div",{className:"pc-label pc-label-green",children:"Green"}),u.jsxs("div",{className:"pc-score-card",children:[u.jsx("span",{className:"pc-score-text",children:"Score"}),u.jsx("div",{className:"pc-score-check"})]}),u.jsx("div",{className:"pc-hole",children:u.jsx("div",{className:"pc-pin"})}),u.jsxs("div",{className:"pc-ball-wrapper pc-chip-1",children:[u.jsx("div",{className:"pc-shadow pc-chip-shadow-1"}),u.jsx("div",{className:"pc-ball pc-chip-ball-1"})]}),u.jsxs("div",{className:"pc-club head-wedge pc-club-chip-1",children:[u.jsx("span",{className:"pc-wedge-text",children:"SW"}),u.jsx("div",{className:"stem stem-wedge"})]}),u.jsxs("div",{className:"pc-ball-wrapper pc-putt-1",children:[u.jsx("div",{className:"pc-shadow"}),u.jsx("div",{className:"pc-ball"})]}),u.jsx("div",{className:"pc-club head-putter pc-club-putt-1",children:u.jsx("div",{className:"stem stem-putter"})}),u.jsxs("div",{className:"pc-ball-wrapper pc-chip-2",children:[u.jsx("div",{className:"pc-shadow pc-chip-shadow-2"}),u.jsx("div",{className:"pc-ball pc-chip-ball-2"})]}),u.jsxs("div",{className:"pc-club head-wedge pc-club-chip-2",children:[u.jsx("span",{className:"pc-wedge-text",children:"SW"}),u.jsx("div",{className:"stem stem-wedge"})]}),u.jsxs("div",{className:"pc-ball-wrapper pc-putt-2",children:[u.jsx("div",{className:"pc-shadow"}),u.jsx("div",{className:"pc-ball"})]}),u.jsx("div",{className:"pc-club head-putter pc-club-putt-2",children:u.jsx("div",{className:"stem stem-putter"})})]})]}),y={primary:"emerald",neutral:"slate",accent:"orange"},Vt=[{id:"putt-shaft",category:"Putting",duration:10,icon:Pn,reps:"20",audioFile:"putt-shaft.mp3",place:"green"},{id:"putt-alt",category:"Putting",duration:10,icon:Pn,reps:"20",audioFile:"putt-alt.mp3",place:"green"},{id:"putt-tiger",category:"Putting",duration:10,icon:Pn,audioFile:"putt-tiger.mp3",place:"green"},{id:"putt-snail",category:"Putting",duration:10,icon:Pn,balls:"10",audioFile:"putt-snail.mp3",place:"green"},{id:"putt-10m",category:"Putting",duration:5,icon:Pn,balls:"3",audioFile:"putt-10m.mp3",place:"green"},{id:"chip-edge",category:"Chip",duration:10,icon:Pt,reps:"20",audioFile:"chip-edge.mp3",place:"green"},{id:"chip-score",category:"Chip",duration:20,icon:Pt,sets:"4",audioFile:"chip-score.mp3",place:"green"},{id:"chip-wedge",category:"Chip",duration:10,icon:Pt,audioFile:"chip-weedg.mp3",place:"range"},{id:"chip-mat",category:"Chip",duration:5,icon:Pt,balls:"10",audioFile:"chip-mat.mp3",place:"range"},{id:"chip-target",category:"Chip",duration:20,icon:Pt,reps:"10",sets:"3",audioFile:"chip-target.mp3",place:"green"},{id:"bunker-full",category:"Bunker",duration:15,icon:Pt,reps:"20",audioFile:"bunker-full.mp3",place:"bunker"},{id:"bunker-egg",category:"Bunker",duration:5,icon:Pt,balls:"10",audioFile:"bunker-egg.mp3",place:"bunker"},{id:"iron-tech",category:"Irons",duration:20,icon:_r,audioFile:"iron-tech.mp3",place:"range"},{id:"iron-target",category:"Irons",duration:20,icon:_r,reps:"5 balles/cible",audioFile:"iron-target.mp3",place:"range"},{id:"iron-grip",category:"Irons",duration:5,icon:_r,balls:"10",audioFile:"iron-grip.mp3",place:"range"},{id:"iron-tempo",category:"Irons",duration:10,icon:_r,balls:"20",audioFile:"iron-tempo.mp3",place:"range"},{id:"hyb-routine",category:"Woods",duration:5,icon:rs,balls:"10",audioFile:"hyb-routine.mp3",place:"range"},{id:"drv-safe-att",category:"Driver",duration:10,icon:Yp,balls:"10",audioFile:"drv-safe-att.mp3",place:"range"},{id:"wood-speed",category:"Woods",duration:3,icon:rs,balls:"5",audioFile:"wood-speed.mp3",place:"range"},{id:"warm-wrist",category:"Warmup",duration:1,icon:re,audioFile:"warm-wrist.mp3",place:"everywhere"},{id:"warm-lunge-rot",category:"Warmup",duration:2,icon:re,audioFile:"warm-lunge-rot.mp3",place:"everywhere"},{id:"warm-open",category:"Warmup",duration:2,icon:re,audioFile:"warm-open.mp3",place:"everywhere"},{id:"warm-heli",category:"Warmup",duration:1,icon:re,audioFile:"warm-heli.mp3",place:"everywhere"},{id:"warm-band-sh",category:"Warmup",duration:3,icon:re,reps:"10",sets:"2",audioFile:"warm-band-sh.mp3",place:"everywhere"},{id:"warm-takeaway",category:"Warmup",duration:3,icon:re,reps:"15",sets:"2",audioFile:"warm-takeaway.mp3",place:"everywhere"},{id:"warm-backswing",category:"Warmup",duration:3,icon:re,reps:"15",sets:"2",audioFile:"warm-backswing.mp3",place:"everywhere"},{id:"warm-downswing",category:"Warmup",duration:3,icon:re,reps:"15",sets:"2",audioFile:"warm-downswing.mp3",place:"everywhere"},{id:"warm-impact",category:"Warmup",duration:3,icon:re,reps:"10",sets:"3",audioFile:"warm-impact.mp3",place:"everywhere"},{id:"warm-head",category:"Warmup",duration:2,icon:re,reps:"5",audioFile:"warm-head.mp3",place:"everywhere"},{id:"warm-shoulder",category:"Warmup",duration:2,icon:re,reps:"5",audioFile:"warm-shoulder.mp3",place:"everywhere"},{id:"warm-side",category:"Warmup",duration:2,icon:re,reps:"5",isSidesExercise:!0,audioFile:"warm-side.mp3",place:"everywhere"},{id:"warm-torso",category:"Warmup",duration:2,icon:re,reps:"5",isSidesExercise:!0,audioFile:"warm-torso.mp3",place:"everywhere"},{id:"warm-pelvis",category:"Warmup",duration:2,icon:re,reps:"5",audioFile:"warm-pelvis.mp3",place:"everywhere"},{id:"warm-ankle",category:"Warmup",duration:2,icon:re,reps:"5",audioFile:"warm-ankle.mp3",place:"everywhere"},{id:"warm-jacks",category:"Warmup",duration:2,icon:re,reps:"10",audioFile:"warm-jacks.mp3",place:"everywhere"},{id:"warm-climber",category:"Warmup",duration:2,icon:re,reps:"10",audioFile:"warm-climber.mp3",place:"everywhere"},{id:"warm-lunge-open",category:"Warmup",duration:2,icon:re,reps:"5",isSidesExercise:!0,audioFile:"warm-lunge-open.mp3",place:"everywhere"},{id:"body-tree",category:"Body",intended:"balance",duration:3,icon:J,audioFile:"body-tree.mp3",place:"everywhere"},{id:"body-sl-dead",category:"Body",intended:"balance",duration:5,icon:J,reps:"10",sets:"3",isSidesExercise:!0,audioFile:"body-sl-dead.mp3",place:"everywhere"},{id:"body-skater",category:"Body",intended:"balance",duration:5,icon:J,reps:"20",sets:"4",audioFile:"body-skater.mp3",place:"everywhere"},{id:"body-bird-dog",category:"Body",intended:"balance",duration:5,icon:J,reps:"10",sets:"4",isSidesExercise:!0,audioFile:"body-bird-dog.mp3",place:"everywhere"},{id:"body-balance",category:"Body",intended:"balance",duration:3,icon:J,reps:"10",sets:"3",audioFile:"body-balance.mp3",place:"everywhere"},{id:"body-boat",category:"Body",intended:"balance",duration:5,icon:J,reps:"10",sets:"4",audioFile:"body-boat.mp3",place:"everywhere"},{id:"body-plank",category:"Body",intended:"balance",duration:4,icon:J,reps:"5",sets:"4",audioFile:"body-plank.mp3",place:"everywhere"},{id:"body-swiss-knee",category:"Body",intended:"balance",duration:5,icon:J,audioFile:"body-swiss-knee.mp3",place:"everywhere"},{id:"body-squat-burp",category:"Body",intended:"power",duration:8,icon:J,reps:"8",sets:"5",audioFile:"body-squat-burp.mp3",place:"everywhere"},{id:"body-kettle",category:"Body",intended:"power",duration:5,icon:J,reps:"15",sets:"4",audioFile:"body-kettle.mp3",place:"everywhere"},{id:"body-push-iso",category:"Body",intended:"power",duration:6,icon:J,reps:"10",sets:"4",audioFile:"body-push-iso.mp3",place:"everywhere"},{id:"body-lunge-lat",category:"Body",intended:"power",duration:5,icon:J,reps:"10",sets:"4",isSidesExercise:!0,audioFile:"body-lunge-lat.mp3",place:"everywhere"},{id:"body-plank-jack",category:"Body",intended:"power",duration:5,icon:J,reps:"20",sets:"4",audioFile:"body-plank-jack.mp3",place:"everywhere"},{id:"body-superman",category:"Body",intended:"power",duration:5,icon:J,reps:"15",sets:"4",audioFile:"body-superman.mp3",place:"everywhere"},{id:"body-chair-jump",category:"Body",intended:"explosiveness",duration:5,icon:J,reps:"8",sets:"5",audioFile:"body-chair-jump.mp3",place:"everywhere"},{id:"body-lunge-stat",category:"Body",intended:"explosiveness",duration:5,icon:J,reps:"8",sets:"5",isSidesExercise:!0,audioFile:"body-lunge-stat.mp3",place:"everywhere"},{id:"body-swing-el",category:"Body",intended:"explosiveness",duration:5,icon:J,reps:"8",sets:"5",isSidesExercise:!0,audioFile:"body-swing-el.mp3",place:"everywhere"},{id:"body-push-var",category:"Body",intended:"explosiveness",duration:6,icon:J,reps:"8",sets:"5",audioFile:"body-push-var.mp3",place:"everywhere"},{id:"body-swiss-rot",category:"Body",intended:"explosiveness",duration:5,icon:J,reps:"8",sets:"5",audioFile:"body-swiss-rot.mp3",place:"everywhere"},{id:"body-push-exp",category:"Body",intended:"explosiveness",duration:5,icon:J,reps:"8",sets:"5",audioFile:"body-push-exp.mp3",place:"everywhere"}],is=()=>{const e=E=>[...E].sort(()=>.5-Math.random()),t=E=>{const be=parseInt(E.balls||E.reps||0,10),We=parseInt(E.sets||1,10),R=be*We;return R===0?E.id==="iron-tech"?15:E.id==="drv-safe-att"?10:E.duration*2:R},n=[];let r=0;const i=e(Vt.filter(E=>E.category==="Warmup"));let l=0;for(const E of i)l<10&&(n.push(E),l+=E.duration,r+=E.duration);const o=Vt.filter(E=>E.place==="bunker"||E.place==="green"),a=e(o.filter(E=>E.place==="bunker")),s=e(o.filter(E=>E.category==="Putting")),d=e(o.filter(E=>E.category==="Chip"&&E.place!=="bunker"));let g=[],h=[],m=[],w=0;a.length>0&&(g.push(a[0]),w+=t(a[0]),r+=a[0].duration),d.length>0&&(h.push(d[0]),w+=t(d[0]),r+=d[0].duration),s.length>0&&(m.push(s[0]),w+=t(s[0]),r+=s[0].duration);const S=e(o.filter(E=>{var be,We,R;return E.id!==((be=a[0])==null?void 0:be.id)&&E.id!==((We=d[0])==null?void 0:We.id)&&E.id!==((R=s[0])==null?void 0:R.id)}));for(const E of S)w<100&&(E.place==="bunker"?g.push(E):E.category==="Putting"?m.push(E):h.push(E),w+=t(E),r+=E.duration);n.push(...m,...h,...g);const k=e(Vt.filter(E=>E.category==="Irons"&&E.place==="range")),D=e(Vt.filter(E=>E.category==="Driver"&&E.place==="range")),p=e(Vt.filter(E=>E.category==="Woods"&&E.place==="range"));let c=[],f=[],v=[],N=0;const z=45;D.length>0&&(f.push(D[0]),N+=t(D[0]),r+=D[0].duration),p.length>0&&(v.push(p[0]),N+=t(p[0]),r+=p[0].duration);for(const E of k){const be=t(E);(N<34||N+be<=z)&&(c.push(E),N+=be,r+=E.duration)}n.push(...c,...f,...v);const C=Vt.filter(E=>E.category==="Body"),P=e(C.filter(E=>E.intended==="balance")),$=e(C.filter(E=>E.intended==="power")),L=e(C.filter(E=>E.intended==="explosiveness"));let Y=[];P.length>0&&Y.push(P[0]),$.length>0&&Y.push($[0]),L.length>0&&Y.push(L[0]),Y.forEach(E=>r+=E.duration);const Se=new Set(Y.map(E=>E.id)),Ke=e(C.filter(E=>!Se.has(E.id)));for(const E of Ke)if(r<60)Y.push(E),r+=E.duration;else break;return n.push(...Y),n.map((E,be)=>({...E,id:`session-step-${be}`,drillId:E.id,audioSrc:`audio/${E.id}.mp3`}))},rl={fr:{meta:{label:"Français",flag:"🇫🇷"},ui:{recommended:"Entraînement du Jour",protocol_title:"SESSION",protocol_subtitle:"GÉNÉRÉE",start_manual:"MODE MANUEL",start_audio:"MODE AUDIO GUIDÉ",resume_session:"REPRENDRE LA SESSION",step:"Étape",steps_plural:"Étapes",mins_short:"Min",audio_mode_active:"Mode audio actif. Le minuteur a démarré.",execution_steps:"Instructions",done_next:"TERMINÉ / SUIVANT",next_step:"Exercice Suivant",session_complete:"Session Terminée !",session_complete_sub:"Vous avez complété l'entraînement du jour. Direction la douche.",minutes:"Minutes",drills:"Exos",start_new:"Générer Nouvelle Session",duration:"Durée",get_ready:"Préparez-vous",starting_in:"Départ dans",resuming_in:"Reprise dans",listen_instruction:"Écoutez les instructions...",speaking:"LECTURE",audio_on:"AUDIO ACTIF",paused:"PAUSE",start:"DÉMARRER",pause:"PAUSE",resume:"REPRENDRE",reps:"Répétitions",skip_intro:"PASSER L'INTRO",balls_unit:"balles",rounds_unit:"tours",reps_unit:"répétitions",shots_unit:"coups",per_side:"/ côté"},categories:{Putting:{category:"Putting"},Chip:{category:"Approche"},Irons:{category:"Fers"},Woods:{category:"Bois & Hybrides"},Driver:{category:"Driver"},Warmup:{category:"Échauffement"},Body:{category:"Physique"},Bunker:{category:"Bunker"}},drillData:{"putt-shaft":{title:"20 Putts le long du shaft",description:"Travail de la capacité à putter droit le long d'un guide visuel.",steps:["Placez un club (shaft) au sol pointant vers la cible.","Placez votre balle juste à côté du shaft.","Puttez en suivant la ligne du shaft sans le toucher."],needs:["Putter","1 Club (comme guide)"]},"putt-alt":{title:"20 Putts vers une cible alternée",description:"Alternance de putts courts et longs pour travailler le dosage.",steps:["Choisissez deux cibles (trous) : une proche, une éloignée.","Exécutez un putt court.","Exécutez immédiatement un putt long.","Répétez l'alternance."],needs:["Putter"]},"putt-tiger":{title:"Exercice Tiger",description:"Calage de la sortie de balle et contrôle de la face de club à l'impact.",steps:["Plantez deux tees au sol espacés à peine plus large que la tête de votre putter.","Placez la balle au milieu.","Puttez en passant la tête du club entre les tees sans les toucher."],needs:["Putter","2 Tees"]},"putt-snail":{title:"L'Escargot",description:"Enchaînement de putts à distances croissantes autour du trou.",steps:["Disposez 10 balles en spirale autour du trou.","La première balle est à 1 mètre.","La dernière balle est à 3 mètres.","Jouez chaque balle avec une routine complète."],needs:["Putter"]},"putt-10m":{title:"Putt à 10 mètres",description:"Enchaînement de putts longs avec objectif de lag putting (zone d'un mètre).",steps:["Placez-vous à environ 10 mètres du trou.","Jouez 3 balles consécutives.","Recommencez tant que les 3 balles ne finissent pas dans un rayon d'1 mètre autour du trou."],needs:["Putter"]},"chip-edge":{title:"20 Coups du bord du green",description:"Alternance putt et approche vers le même drapeau avec le même mouvement.",steps:["Placez-vous en bordure de green.","Jouez un putt vers le drapeau.","Jouez une approche vers le même drapeau avec un club différent.","Conservez la même intention de mouvement pour les deux clubs."],needs:["Sand Wedge","Pitching Wedge","Fer 9","Putter"]},"chip-score":{title:"5 Situations d'Approche-Putt",description:"Simulation de compétition en jouant le trou jusqu'au bout.",steps:["Définissez 5 points de départ différents autour du green.","Jouez l'approche.","Finissez le trou au putting (hole out).","Faites 4 fois ce circuit et comparez vos scores."],needs:["Sand Wedge","Pitching Wedge","Fer 9","Putter"]},"chip-wedge":{title:"Wedging : Plein Swing & Demi Swing",description:"Variation des distances et des amplitudes avec différents wedges.",steps:["Utilisez vos différents Sand Wedges et Pitching Wedge.","Alternez des pleins swings et des demi-swings.","Vérifiez vos distances (si possible à la jumelle/radar)."],needs:["Sand Wedge","Pitching Wedge"]},"chip-mat":{title:"Chipping sur tapis",description:"Révision de la mécanique pure de contact sur tapis.",steps:["Sur un tapis de practice.","Tapez 10 balles en chip.","Focalisez-vous uniquement sur la propreté du contact et la mécanique."],needs:["Sand Wedge","Pitching Wedge","Fer 9"]},"chip-target":{title:"Chipping autour du green",description:"Approches variées avec exigence de précision.",steps:["Lancez aléatoirement 10 balles autour du green.","Jouez chaque balle avec une exigence de précision : finir dans un rayon de 1m50.","Comptez le nombre de réussites.","Recommencez la série 3 fois."],needs:["Sand Wedge","Pitching Wedge","Fer 9"]},"bunker-full":{title:"20 Sorties de Bunker",description:"Enchaînement de sorties de bunker avec engagement total.",steps:["Placez-vous dans un bunker de green.","Exécutez 20 sorties en 'Full Swing' (swing complet).","L'objectif est de générer de la vitesse et de sortir la balle avec assurance."],needs:["Wedge préféré"]},"bunker-egg":{title:"Bunker : Œuf sur le plat",description:"Entraînement spécifique pour les lies difficiles (balle enfoncée).",steps:["Dans le bunker, enfoncez volontairement la balle.","Tapez 10 balles dans cette configuration.","Forcez l'angle d'attaque vertical."],needs:["Wedge préféré"]},"iron-tech":{title:"Fers Moyens : 5 Techniques / 2 Normales",description:"Alternance travail technique et jeu instinctif.",steps:["Prenez un fer 7 ou 8.","Tapez 5 balles en appliquant un exercice technique spécifique vue avec votre pro.","Tapez 2 balles 'normalement', sans penser à la technique, juste la cible.","Répétez pendant 20 minutes."],needs:["Fer 7","Fer 8"]},"iron-target":{title:"Passage sur la cible",description:"Simulation de situations de parcours avec changement de club et routine.",steps:["Par groupe de 5 balles, changez de club et de cible à chaque coup.","Alternez : un coup long (Hybride/Bois/Fer long) puis un coup court (Fer court).","Effectuez une routine complète (visualisation, coups d'essai) avant chaque frappe."],needs:["Hybride","Bois","Fer long","Fer court"]},"iron-grip":{title:"Grip & Posture",description:"Échauffement spécifique focalisé sur les fondamentaux statiques.",steps:["Prenez un petit club (Sand wedge, PW, Fer 9).","Vérifiez méticuleusement votre grip et votre posture avant chaque coup.","Tapez 10 balles tranquillement."],needs:["Sand wedge","Pitching Wedge","Fer 9"]},"iron-tempo":{title:"Élan & Lancé",description:"Travail du rythme et du relâchement.",steps:["Prenez un club moyen (Fer 6, 7).","Concentrez-vous sur la sensation d'élan au backswing et de lancé au finish.","Tapez 20 balles."],needs:["Fer 6","Fer 7"]},"hyb-routine":{title:"Première routine à l'Hybride",description:"Intégration de la routine de pré-coup avec un club hybride.",steps:["Prenez votre Hybride.","Définissez une cible différente pour chaque balle.","Appliquez votre routine complète.","Tapez 10 balles."],needs:["Hybride"]},"drv-safe-att":{title:"Driving : Drive Safe vs Drive Attack",description:"Alternance entre mise en jeu sécurisée et drive de puissance.",steps:["Définissez un couloir (fairway virtuel) sur le practice.","Tapez un 'Drive Safe' (coup de sécurité, en contrôle pour toucher le fairway).","Tapez un 'Drive Attack' (coup agressif, vitesse maximale).","Alternez les deux types de coups."],needs:["Driver"]},"wood-speed":{title:"Plaisir & Création de Vitesse",description:"Recherche de vitesse pure et de sensations agréables en fin de séance.",steps:["Prenez un Bois de parcours ou Driver.","Tapez 5 balles avec pour seul objectif la vitesse et le plaisir de la frappe.","Lâchez les chevaux."],needs:["Bois","Driver"]},"warm-wrist":{title:"Moulins à vent de poignets",description:"Échauffement articulaire des poignets avec le club.",steps:["Tenez le club au milieu du manche.","Bras allongés devant vous.","Faites des cercles avec la tête de club en utilisant uniquement les poignets.","Gardez les épaules fixes."],needs:["1 Club"]},"warm-lunge-rot":{title:"Mobilité & Rotation",description:"Combinaison de fente et de rotation du buste.",steps:["Départ pieds joints, club tenu à deux mains devant vous bras tendus.","Avancez un pied en fente.","En position basse, tournez le buste et les bras tendus du côté de la jambe avant (côté fermé).","Revenez et alternez de jambe."],needs:["1 Club"]},"warm-open":{title:"Ouverture & Centrage",description:"Étirement dynamique pectoral et rotation thoracique.",steps:["Prenez votre posture de golf.","Posez une main sur le haut du club (vertical au sol comme une canne).","Avec le bras libre, ouvrez la poitrine vers le ciel en levant le bras vers l'arrière et le haut.","Alternez de main."],needs:["1 Club"]},"warm-heli":{title:"L'Hélicoptère",description:"Rotation du buste autour de la colonne vertébrale.",steps:["Pieds joints.","Penchez-vous en prenant les angles de votre posture.","Tendez les bras sur les côtés (en croix).","Faites tourner la ligne des épaules autour de l'axe de la colonne."],needs:["Sans matériel"]},"warm-band-sh":{title:"Mobilisation des épaules",description:"Élévation frontale avec résistance élastique.",steps:["Passez l'élastique sous les pieds, écart largeur épaules.","Tenez l'élastique dans chaque main.","Levez les bras tendus de la ceinture jusqu'à la hauteur des yeux (ou au-dessus de la tête pour la variante).","Seuls les bras bougent."],needs:["Elastique de sport"]},"warm-takeaway":{title:"Takeaway",description:"Activation des abdos obliques pour le début du swing.",steps:["Élastique sous le pied gauche.","Prenez votre grip au milieu de l'élastique.","Simulez le début du backswing (Takeaway) en tirant l'élastique vers la droite.","Focalisez-vous sur les abdominaux, ne roulez pas les avant-bras."],needs:["Elastique de sport"]},"warm-backswing":{title:"La Voile de Force",description:"Travail de l'extension et de la rotation au backswing.",steps:["Élastique sous le pied gauche, grip à l'extrémité opposée.","Faites votre Takeaway.","Continuez en étendant l'élastique au travers de la poitrine jusqu'au dessus de l'épaule droite."],needs:["Elastique de sport"]},"warm-downswing":{title:"Moulin avant pour la descente",description:"Simulation de la séquence de descente avec grande amplitude.",steps:["Élastique tenu entre les pouces, bras écartés.","Tendez l'élastique devant la poitrine.","Faites de grandes rotations : Backswing -> Finish.","Laissez le talon droit se lever au finish."],needs:["Elastique de sport"]},"warm-impact":{title:"La Traversée",description:"Travail de l'extension des bras après l'impact.",steps:["Élastique sous le pied droit.","Grip au milieu.","Mimez la traversée (après impact) en tirant vers la gauche et le bas.","Déverrouillez le talon droit."],needs:["Elastique de sport"]},"warm-head":{title:"Rotation & Flexion de la tête",description:"Échauffement des cervicales.",steps:["Tournez la tête à droite puis à gauche.","Inclinez la tête en avant (menton poitrine) puis en arrière.","Doucement, sans forcer."],needs:["Sans matériel"]},"warm-shoulder":{title:"Rotation des épaules",description:"Échauffement articulaire des épaules.",steps:["Mains sur les épaules (coudes pliés).","Faites des cercles avec les coudes vers l'avant.","Faites des cercles vers l'arrière."],needs:["Sans matériel"]},"warm-side":{title:"Inclinaison latérale du buste",description:"Étirement des flancs.",steps:["Debout, bras le long du corps.","Laissez glisser la main droite le long de la jambe droite vers le genou.","Revenez et faites pareil à gauche."],needs:["Sans matériel"]},"warm-torso":{title:"Rotation du buste",description:"Mobilisation thoracique en posture.",steps:["Mains croisées sur la poitrine.","Debout : tournez à droite et à gauche.","Penché (posture golf) : tournez à droite et à gauche."],needs:["Sans matériel"]},"warm-pelvis":{title:"Antéversion & Rétroversion du bassin",description:"Déverrouillage des lombaires et du bassin.",steps:["Mains sur les hanches.","Cambrez le dos (antéversion).","Arrondissez le bas du dos en rentrant les fesses (rétroversion)."],needs:["Sans matériel"]},"warm-ankle":{title:"Flexion-Extension des chevilles",description:"Échauffement des chevilles.",steps:["Montez sur la pointe des pieds.","Redescendez sur les talons en levant les orteils."],needs:["Sans matériel"]},"warm-jacks":{title:"Jumping Jacks avec touche main opposée",description:"Cardio et coordination.",steps:["Sautez en écartant les pieds.","En même temps, levez les bras.","En resserrant, venez toucher le genou ou pied opposé avec la main (croisement)."],needs:["Sans matériel"]},"warm-climber":{title:"Mountain Climbers",description:"Cardio et abdos.",steps:["Position de pompe (planche haute).","Ramenez alternativement et rapidement les genoux vers la poitrine."],needs:["Sans matériel"]},"warm-lunge-open":{title:"Fente avec ouverture bras opposé",description:"Étirement dynamique complet.",steps:["Faites une fente avant.","Levez le bras opposé à la jambe avant vers le ciel.","Inclinez légèrement le buste latéralement pour étirer toute la chaîne."],needs:["Sans matériel"]},"body-tree":{title:"L'Arbre les yeux fermés",description:"Test et travail de proprioception statique.",steps:["Debout sur une jambe.","Placez la plante de l'autre pied contre l'intérieur de la cuisse ou du genou (position yoga).","Tendez les bras sur les côtés.","Fermez les yeux et tenez l'équilibre."],needs:["Sans matériel"]},"body-sl-dead":{title:"Équilibre sur une jambe avec poids",description:"Travail de stabilité dynamique sur une jambe avec charge.",steps:["En équilibre sur une jambe.","Tenez un kettlebell ou un poids à une main.","Penchez le buste en avant en tendant la jambe libre vers l'arrière.","Remontez en position droite."],needs:["Kettlebell ou Poids"]},"body-skater":{title:"Roller-Jumps",description:"Sauts latéraux pour la stabilité dynamique et la puissance latérale.",steps:["Sautez latéralement d'un pied sur l'autre.","Amortissez la réception en fléchissant le genou.","Croisez la jambe libre derrière la jambe d'appui.","Enchaînez dynamiquement."],needs:["Sans matériel"]},"body-bird-dog":{title:"Gainage dynamique",description:"Renforcement de la chaîne croisée et du dos.",steps:["À quatre pattes.","Tendez simultanément le bras droit devant et la jambe gauche derrière.","Maintenez l'horizontalité du dos.","Revenez et changez de diagonale (bras gauche / jambe droite)."],needs:["Sans matériel"]},"body-balance":{title:"Simulation Posture à l'adresse",description:"Travail de l'ancrage et de l'équilibre antéro-postérieur.",steps:["Prenez votre posture de golf sans club, bras pendants.","Basculez le poids du corps vers les pointes de pieds.","Basculez le poids vers les talons (en levant les pointes).","Cherchez le point d'équilibre central."],needs:["Sans matériel"]},"body-boat":{title:"Rameur Iso",description:"Gainage abdominal statique ou dynamique.",steps:["Assis au sol.","Relevez les jambes fléchies et penchez le buste en arrière pour trouver l'équilibre sur les fesses.","Tenez un poids dans les mains.","Tendez les jambes et le buste (ouverture) puis regroupez-vous (fermeture) sans toucher le sol."],needs:["Poids"]},"body-plank":{title:"Planche 5 secondes",description:"Gainage dynamique alternant position haute et basse.",steps:["Position de planche sur les coudes. Tenez 5 secondes.","Montez en position de planche sur les mains (bras tendus). Tenez 5 secondes.","Redescendez sur les coudes."],needs:["Sans matériel"]},"body-swiss-knee":{title:"Équilibre à genoux",description:"Travail ultime de proprioception et gainage profond.",steps:["Placez une Swissball.","Montez à genoux dessus.","Trouvez l'équilibre sans toucher le sol.","Redressez le buste et écartez les bras."],needs:["Swiss Ball"]},"body-squat-burp":{title:"4 Squats & 1 Burpee",description:"Combo cardio et force pour le bas du corps.",steps:["Faites 4 squats dynamiques.","Enchaînez immédiatement avec 1 Burpee (flexion, planche, pompe, saut).","Répétez."],needs:["Sans matériel"]},"body-kettle":{title:"Russian Swing",description:"Développement de la puissance d'extension de hanche.",steps:["Debout, pieds écartés, poids tenu à deux mains entre les jambes.","Fléchissez légèrement et envoyez les hanches en arrière.","Contractez violemment les fessiers pour projeter le poids vers l'avant (hauteur d'épaules) bras tendus."],needs:["Poids"]},"body-push-iso":{title:"2 Push-ups & 1 Maintien à 1 bras",description:"Force du haut du corps et anti-rotation.",steps:["Faites 2 pompes classiques.","En remontant la 2ème, levez une main pour toucher l'épaule opposée ou le flanc.","Tenez l'équilibre sur 1 bras brièvement.","Repartez pour 2 pompes et changez de bras."],needs:["Sans matériel"]},"body-lunge-lat":{title:"Fentes latérales avec poids bras tendus",description:"Force latérale et stabilité du Core.",steps:["Debout, tenez un poids à deux mains, bras tendus devant vous.","Faites une fente latérale (grand pas sur le côté).","Gardez les bras tendus devant vous (résistance à l'inertie).","Poussez fort pour revenir au centre."],needs:["Poids"]},"body-plank-jack":{title:"Gainage avec ouverture-fermeture des pieds",description:"Gainage dynamique cardio.",steps:["Position de planche sur les coudes.","Sautez pour écarter les pieds.","Sautez pour resserrer les pieds.","Gardez le bassin stable."],needs:["Sans matériel"]},"body-superman":{title:"Superman Dynamique",description:"Renforcement des lombaires et chaîne postérieure.",steps:["Allongé sur le ventre.","Bras tendus devant (ou sur les côtés).","Relevez simultanément le buste et les jambes.","Redescendez sans toucher totalement le sol et repartez."],needs:["Sans matériel"]},"body-chair-jump":{title:"Chaise + Jump",description:"Explosivité des jambes (pliométrie).",steps:["Mettez-vous en position de chaise (cuisses parallèles au sol) sans mur.","Tenez 3 secondes immobile.","Explosez en saut vertical le plus haut possible.","Amortissez et revenez en chaise."],needs:["Sans matériel"]},"body-lunge-stat":{title:"Fentes statiques",description:"Travail de force et stabilité en position fente.",steps:["En position de fente (un genou proche du sol).","Tenez un poids contre la poitrine ou bras ballants.","Effectuez de petits mouvements de rebond ou de montée-descente sur place.","Changez de jambe."],needs:["Sans matériel"]},"body-swing-el":{title:"Montée du swing à vide",description:"Travail de la vitesse de rotation au backswing.",steps:["Élastique sous le pied avant.","Tenez l'élastique comme un club.","Montez au backswing avec explosivité contre la résistance."],needs:["Elastique de sport"]},"body-push-var":{title:"Demi-pompes et Full-pompes alternées",description:"Variation d'amplitude et de prise pour les pectoraux/triceps.",steps:["En position pompe.","Faites une demi-pompe (faible amplitude) prise large.","Faites une pompe complète (poitrine au sol) prise serrée (ou alternée)."],needs:["Sans matériel"]},"body-swiss-rot":{title:"Bas du tronc dynamique",description:"Rotation du bassin avec charge instable.",steps:["Assis au sol.","Tenez un Swiss Ball à bout de bras.","Effectuez des rotations du buste de gauche à droite en touchant la balle au sol de chaque côté."],needs:["Swiss Ball"]},"body-push-exp":{title:"Haut du tronc dynamique",description:"Travail de la puissance de poussée (explosivité haut du corps).",steps:["Debout face à un mur, à environ 1m.","Laissez-vous tomber vers le mur et amortissez avec les mains (comme une pompe).","Poussez violemment pour vous repousser en position debout initiale."],needs:["Sans matériel"]}}},en:{meta:{label:"English",flag:"🇺🇸"},ui:{recommended:"Daily Training",protocol_title:"GENERATED",protocol_subtitle:"SESSION",start_manual:"START MANUAL",start_audio:"START AUDIO PLAYLIST",resume_session:"RESUME SESSION",step:"Step",steps_plural:"Steps",mins_short:"Mins",audio_mode_active:"Audio mode active. Timer started automatically.",execution_steps:"Instructions",done_next:"DONE / NEXT",next_step:"Next Step",session_complete:"Session Complete!",session_complete_sub:"You've successfully completed today's training.",minutes:"Minutes",drills:"Drills",start_new:"Generate New Session",duration:"Duration",get_ready:"Get Ready",starting_in:"Starting in",resuming_in:"Resuming in",listen_instruction:"Listen to instructions...",speaking:"SPEAKING",audio_on:"AUDIO ON",paused:"PAUSED",start:"START",pause:"PAUSE",resume:"RESUME",reps:"Reps",skip_intro:"SKIP INTRO"},categories:{Putting:{category:"Putting"},Chip:{category:"Short Game"},Irons:{category:"Irons"},Woods:{category:"Woods & Hybrids"},Driver:{category:"Driver"},Warmup:{category:"Warmup"},Body:{category:"Fitness"},Bunker:{category:"Bunker"}},drillData:{"putt-shaft":{title:"20 Putts Along the Shaft",description:"Work on putting straight along a visual guide.",steps:["Place a club (shaft) on the ground pointing towards the target.","Place your ball just beside the shaft.","Putt following the line of the shaft without touching it."]},"putt-alt":{title:"20 Putts to Alternating Targets",description:"Alternating short and long putts to work on distance control.",steps:["Choose two targets (holes): one close, one far.","Execute a short putt.","Immediately execute a long putt.","Repeat the alternation."]},"putt-tiger":{title:"Tiger Drill (Gate of Tees)",description:"Calibration of ball exit and face control at impact.",steps:["Plant two tees on the ground spaced just wider than your putter head.","Place the ball in the middle.","Putt passing the clubhead between the tees without touching them."]},"putt-snail":{title:"The Snail",description:"Sequence of putts at increasing distances around the hole.",steps:["Arrange 10 balls in a spiral around the hole.","The first ball is at 1 meter.","The last ball is at 3 meters.","Play each ball with a full routine."]},"putt-10m":{title:"10-Meter Putt (Safety Zone)",description:"Sequence of long putts targeting a 1-meter zone.",steps:["Stand about 10 meters from the hole.","Play 3 consecutive balls.","Restart as long as the 3 balls do not end up within a 1-meter radius of the hole."]},"chip-edge":{title:"20 Shots from Fringe (Mixed)",description:"Alternate putt and chip to the same flag with the same motion.",steps:["Stand at the edge of the green.","Play a putt towards the flag.","Play a chip towards the same flag with a different club (iron).","Maintain the same motion intention for both clubs."]},"chip-score":{title:"5 Up & Down Situations (Scoring)",description:"Competition simulation by playing the hole out.",steps:["Define 5 different starting points around the green (lie, distance).","Play the approach.","Finish the hole putting (hole out).","Do this circuit 4 times and compare your scores."]},"chip-wedge":{title:"Wedging: Full Swing & Half Swing",description:"Variation of distances and amplitudes with different wedges.",steps:["Use your different Sand Wedges and Pitching Wedge.","Alternate full swings and half swings.","Check your distances (with rangefinder/radar if possible)."]},"chip-mat":{title:"Chipping on Mat (Mechanics)",description:"Review of pure contact mechanics on a mat.",steps:["On a practice mat.","Hit 10 balls chipping.","Focus only on clean contact and mechanics."]},"chip-target":{title:"Chipping Around Green (1.5m Target)",description:"Varied approaches with precision requirement (1.5m radius).",steps:["Randomly throw 10 balls around the green.","Play each ball with a precision requirement: finish within a 1.5m radius.","Count the number of successes.","Repeat the series 3 times."]},"bunker-full":{title:"20 Bunker Shots (Full Swing)",description:"Sequence of bunker shots with total commitment.",steps:["Stand in a greenside bunker.","Execute 20 shots in 'Full Swing'.","The goal is to generate speed and get the ball out with confidence."]},"bunker-egg":{title:"Bunker: Fried Egg",description:"Specific training for difficult lies (buried ball).",steps:["In the bunker, bury the ball intentionally (fried egg position).","Hit 10 balls in this configuration.","Force a vertical angle of attack."]},"iron-tech":{title:"Mid Irons (7 & 8): 5 Tech / 2 Normal",description:"Alternating technical work (lesson) and instinctive play.",steps:["Take a 7 or 8 iron.","Hit 5 balls applying a specific technical drill.","Hit 2 balls 'normally' (without thinking technique, just target).","Repeat for 20 minutes."]},"iron-target":{title:"Target Switching (Course Sim)",description:"Course situation simulation with club change and routine.",steps:["Change club and target for every shot.","Alternate: one long shot (Hybrid/Wood/Long Iron) then one short shot (Short Iron).","Perform a full routine (visualization, practice swings) before each shot.","Do groups of 5 balls."]},"iron-grip":{title:"Grip & Posture (Short Clubs)",description:"Specific warmup focused on static fundamentals.",steps:["Take a short club (Sand wedge, PW, 9 Iron).","Meticulously check your grip and posture before each shot.","Hit 10 balls quietly."]},"iron-tempo":{title:"Swing & Release (Mid Clubs)",description:"Work on rhythm and release.",steps:["Take a mid club (6, 7 Iron).","Focus on the sensation of momentum in backswing and release at finish.","Hit 20 balls."]},"hyb-routine":{title:"First Routine (Hybrid)",description:"Integration of pre-shot routine with a hybrid.",steps:["Take your Hybrid.","Define a different target for each ball.","Apply your full routine.","Hit 10 balls."]},"drv-safe-att":{title:"Driving: Drive Safe vs Drive Attack",description:"Alternating between safe tee shot and power drive.",steps:["Define a corridor (virtual fairway) on the range.","Hit a 'Drive Safe' (control shot to hit fairway).","Hit a 'Drive Attack' (aggressive shot, max speed).","Alternate the two types of shots."]},"wood-speed":{title:"Fun & Speed Creation (Woods)",description:"Pure speed research and pleasant sensations to end session.",steps:["Take a Fairway Wood or Driver.","Hit 5 balls with the sole goal of speed and hitting pleasure.","Let it go."]},"warm-wrist":{title:"Wrist Windmills",description:"Joint warmup for wrists with club.",steps:["Hold club in middle of shaft.","Arms extended in front of you.","Make circles with clubhead using only wrists.","Keep shoulders fixed."]},"warm-lunge-rot":{title:"Lunge & Rotation",description:"Combination of lunge and torso rotation.",steps:["Start feet together, club held with two hands arms extended.","Step forward into lunge.","In low position, rotate torso and arms towards the front leg side.","Return and switch legs."]},"warm-open":{title:"Opening & Centering",description:"Dynamic pectoral stretch and thoracic rotation.",steps:["Take your golf posture.","Place one hand on top of vertical club.","With free arm, open chest to sky lifting arm back and up.","Switch hands."]},"warm-heli":{title:"The Helicopter",description:"Torso rotation around spine.",steps:["Feet together.","Bend forward taking posture angles.","Extend arms to sides.","Rotate shoulder line around spine axis."]},"warm-band-sh":{title:"Shoulder Mobilization (Band)",description:"Front raise with elastic resistance.",steps:["Band under feet, shoulder width.","Hold band in each hand.","Raise extended arms from waist to eye level.","Only arms move."]},"warm-takeaway":{title:"Takeaway (Band)",description:"Oblique activation for start of swing.",steps:["Band under left foot.","Grip middle of band.","Simulate start of backswing (Takeaway) pulling band to right.","Focus on abs, don't roll forearms."]},"warm-backswing":{title:"Power Sail (Band Backswing)",description:"Work on extension and rotation in backswing.",steps:["Band under left foot, grip at opposite end.","Do your Takeaway.","Continue extending band across chest to above right shoulder."]},"warm-downswing":{title:"Forward Windmill (Band)",description:"Simulation of downswing sequence with large amplitude.",steps:["Band held between thumbs, arms apart.","Extend band in front of chest.","Make large fluid rotations: Backswing -> Finish.","Let right heel rise at finish."]},"warm-impact":{title:"The Through-Swing (Band)",description:"Work on arm extension after impact.",steps:["Band under right foot.","Grip in middle.","Mimic through-swing (post impact) pulling to left and down.","Release right heel."]},"warm-head":{title:"Head Rotation & Flexion",description:"Cervical warmup.",steps:["Turn head right then left.","Tilt head forward (chin to chest) then back.","Gently, don't force."]},"warm-shoulder":{title:"Shoulder Rotation",description:"Joint warmup for shoulders.",steps:["Hands on shoulders (elbows bent).","Make circles with elbows forward.","Make circles backward."]},"warm-side":{title:"Lateral Torso Tilt",description:"Flank stretch.",steps:["Standing, arms by sides.","Slide right hand down right leg towards knee.","Return and do same on left."]},"warm-torso":{title:"Torso Rotation (Upright then Bent)",description:"Thoracic mobilization in posture.",steps:["Hands crossed on chest.","Standing: turn right and left.","Bent (golf posture): turn right and left."]},"warm-pelvis":{title:"Pelvic Tilt (Anteversion/Retroversion)",description:"Unlocking lumbar and pelvis.",steps:["Hands on hips.","Arch back (anteversion).","Round lower back tucking glutes (retroversion)."]},"warm-ankle":{title:"Ankle Flexion-Extension",description:"Ankle warmup.",steps:["Go up on toes.","Rock back on heels lifting toes."]},"warm-jacks":{title:"Jumping Jacks with Cross Touch",description:"Cardio and coordination.",steps:["Jump spreading feet.","At same time raise arms.","Closing, touch opposite knee or foot with hand.","Rhythmic."]},"warm-climber":{title:"Mountain Climbers",description:"Cardio and abs.",steps:["Pushup position (high plank).","Alternately and quickly bring knees to chest."]},"warm-lunge-open":{title:"Lunge with Opposite Arm Opening",description:"Complete dynamic stretch.",steps:["Do a forward lunge.","Raise arm opposite to front leg towards sky.","Tilt torso slightly laterally to stretch entire chain."]},"body-tree":{title:"Blind Tree",description:"Static proprioception test and work.",steps:["Stand on one leg.","Place sole of other foot against inner thigh or knee.","Extend arms to sides.","Close eyes and hold balance."]},"body-sl-dead":{title:"Single Leg Balance with Weight",description:"Dynamic stability work on one leg with load.",steps:["Balance on one leg.","Hold weight in one hand.","Hinge torso forward extending free leg back.","Return to upright."]},"body-skater":{title:"Roller-Jumps (Skater Jumps)",description:"Lateral jumps for dynamic stability and lateral power.",steps:["Jump laterally from one foot to the other.","Cushion landing bending knee.","Cross free leg behind standing leg.","Chain dynamically."]},"body-bird-dog":{title:"Dynamic Plank (Bird-Dog)",description:"Cross chain and back strengthening.",steps:["On all fours.","Extend right arm forward and left leg back simultaneously.","Maintain horizontal back.","Return and switch diagonal."]},"body-balance":{title:"Address Posture Simulation (Toe/Heel)",description:"Anchoring and anteroposterior balance work.",steps:["Take golf posture without club, arms hanging.","Rock body weight to toes.","Rock weight to heels (lifting toes).","Find central balance point."]},"body-boat":{title:"Iso Rower (Boat Pose)",description:"Static or dynamic abdominal plank.",steps:["Sitting on floor.","Lift bent legs and lean torso back to balance on glutes.","Hold weight in hands.","Extend legs and torso (open) then tuck in (close) without touching floor."]},"body-plank":{title:"5 Second Plank (Arms/Elbows)",description:"Dynamic plank alternating high and low position.",steps:["Elbow plank position. Hold 5 seconds.","Go up to hand plank position (arms extended). Hold 5 seconds.","Go back down to elbows."]},"body-swiss-knee":{title:"Kneeling Balance on Swissball",description:"Ultimate proprioception and deep core work.",steps:["Place large Swissball.","Kneel on top.","Find balance without touching floor.","Straighten torso and spread arms."]},"body-squat-burp":{title:"4 Squats & 1 Burpee",description:"Cardio and strength combo for lower body.",steps:["Do 4 dynamic squats.","Immediately follow with 1 Burpee (squat, plank, pushup, jump).","Repeat."]},"body-kettle":{title:"Russian Swing (Kettlebell)",description:"Hip extension power development.",steps:["Standing, feet apart, weight held two hands between legs.","Hinge slightly and send hips back.","Violently contract glutes to project weight forward (shoulder height) arms straight."]},"body-push-iso":{title:"2 Push-ups & 1 Single Arm Hold",description:"Upper body strength and anti-rotation.",steps:["Do 2 classic pushups.","On coming up from 2nd, lift one hand to touch opposite shoulder or flank.","Hold 1-arm balance briefly.","Go again for 2 pushups and switch arms."]},"body-lunge-lat":{title:"Lateral Lunges with Weighted Arms Extended",description:"Lateral strength and Core stability.",steps:["Standing, hold weight two hands, arms extended in front.","Do a lateral lunge.","Keep arms extended in front (resist inertia).","Push hard to return to center."]},"body-plank-jack":{title:"Plank with Feet Open-Close (Plank Jacks)",description:"Dynamic cardio plank.",steps:["Elbow plank position.","Jump to spread feet.","Jump to close feet.","Keep hips stable."]},"body-superman":{title:"Dynamic Superman",description:"Strengthening lower back and posterior chain.",steps:["Lying on stomach.","Arms extended in front (or sides).","Lift torso and legs simultaneously.","Lower without fully touching ground and repeat."]},"body-chair-jump":{title:"Wall Sit (3 sec) + Jump",description:"Leg explosiveness (plyometrics).",steps:["Get into chair position (thighs parallel to floor) without wall.","Hold 3 seconds immobile.","Explode into vertical jump as high as possible.","Land soft and return to chair."]},"body-lunge-stat":{title:"Static Lunges (Iso + Dynamic)",description:"Strength and stability work in lunge position.",steps:["In lunge position (one knee close to ground).","Hold weight to chest or arms hanging.","Perform small bounce or up-down movements in place.","Switch legs."]},"body-swing-el":{title:"Empty Swing Rise (Band)",description:"Rotation speed work at backswing.",steps:["Band under front foot.","Hold band like a club.","Go to backswing explosively against resistance."]},"body-push-var":{title:"Alt Half & Full Pushups",description:"Amplitude and grip variation for pecs/triceps.",steps:["In pushup position.","Do a half-pushup (low amplitude) wide grip.","Do a full pushup (chest to floor) narrow grip (or alternating)."]},"body-swiss-rot":{title:"Dynamic Lower Trunk with Swiss Ball",description:"Pelvic rotation with unstable load.",steps:["Sitting on floor.","Hold Swiss Ball at arms length.","Perform torso rotations left to right touching ball to floor on each side."]},"body-push-exp":{title:"Dynamic Upper Trunk with Wall (Explosive Pushups)",description:"Push power work (upper body explosiveness).",steps:["Standing facing wall, about 1m away.","Fall towards wall and cushion with hands.","Push violently to repel yourself back to initial standing position."]}}}},gf=()=>u.jsx("style",{children:`
    @keyframes swing-rotate { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(45deg); } }
    @keyframes torso-twist { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-30deg); } 75% { transform: rotate(30deg); } }
    @keyframes putt-stroke { 0% { transform: translateY(0); } 20% { transform: translateY(10px); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
    @keyframes chip-shot-1 { 0% { opacity: 0; transform: translate(0, 0) scale(0.5); } 20% { opacity: 1; } 80% { opacity: 1; transform: translate(20px, -40px) scale(0.8); } 100% { opacity: 0; transform: translate(20px, -40px); } }
    @keyframes chip-shot-2 { 0% { opacity: 0; transform: translate(0, 0) scale(0.5); } 20% { opacity: 1; } 80% { opacity: 1; transform: translate(50px, -60px) scale(0.7); } 100% { opacity: 0; transform: translate(50px, -60px); } }
    @keyframes chip-shot-3 { 0% { opacity: 0; transform: translate(0, 0) scale(0.5); } 20% { opacity: 1; } 80% { opacity: 1; transform: translate(80px, -80px) scale(0.6); } 100% { opacity: 0; transform: translate(80px, -80px); } }
    @keyframes drive-path { 0% { transform: translateY(40px); opacity: 0; } 10% { opacity: 1; } 90% { transform: translateY(-40px); opacity: 1; } 100% { transform: translateY(-40px); opacity: 0; } }
    @keyframes pause-top { 0% { transform: rotate(0deg); } 30% { transform: rotate(-90deg); } 60% { transform: rotate(-90deg); } 80% { transform: rotate(10deg); } 100% { transform: rotate(0deg); } }
    @keyframes pulse-red { 0%, 30%, 60%, 100% { fill: #94a3b8; } 45% { fill: #ef4444; } }
  `}),fi=(e=440,t="sine",n=.1)=>{const r=window.AudioContext||window.webkitAudioContext;if(!r)return;const i=new r,l=i.createOscillator(),o=i.createGain();l.type=t,l.frequency.setValueAtTime(e,i.currentTime),o.gain.setValueAtTime(.1,i.currentTime),o.gain.exponentialRampToValueAtTime(1e-5,i.currentTime+n),l.connect(o),o.connect(i.destination),l.start(),l.stop(i.currentTime+n)},yf=()=>{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,n=t.createOscillator(),r=t.createGain();t.state==="suspended"&&t.resume(),n.type="sawtooth",n.frequency.setValueAtTime(880,t.currentTime),r.gain.setValueAtTime(.1,t.currentTime),r.gain.exponentialRampToValueAtTime(1e-5,t.currentTime+.5),n.connect(r),r.connect(t.destination),n.start(),n.stop(t.currentTime+.5)},ut=e=>{e>0?fi(600,"sine",.2):yf()},vf=()=>{fi(500,"triangle",.15)},wf=()=>{fi(800,"sine",.2),setTimeout(()=>fi(600,"sine",.4),250)},xf=({drillId:e})=>e==="putt-shaft"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(uf,{})}):e==="putt-alt"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(cf,{})}):e==="putt-tiger"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(df,{})}):e==="putt-snail"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(pf,{})}):e==="putt-10m"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(ff,{})}):e==="chip-edge"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(mf,{})}):e==="chip-score"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(hf,{})}):e==="chip-wedge"?u.jsx("div",{className:"w-full flex justify-center mb-6",children:u.jsx(ChipWedge,{})}):null,kf=({drill:e,uiText:t})=>{const n=[];return e.balls&&!e.sets&&!e.reps?n.push(`${e.balls} ${t.balls_unit}`):e.balls&&e.sets?n.push(`${e.balls} ${t.balls_unit} x ${e.sets} ${t.rounds_unit}`):e.sets&&!e.balls&&!e.reps?n.push(`${e.sets} ${t.rounds_unit}`):e.reps&&e.sets?e.isSidesExercise?n.push(`${e.sets}x${e.reps} ${t.per_side}`):n.push(`${e.sets}x${e.reps} ${t.reps_unit}`):e.reps&&!e.sets&&(e.isSidesExercise?n.push(`${e.reps} ${t.per_side}`):n.push(`${e.reps} ${t.shots_unit}`)),e.needs&&e.needs.length>0&&e.needs.forEach(r=>n.push(r)),n.length===0?null:u.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.map((r,i)=>u.jsxs("div",{className:`flex items-center gap-1.5 px-3 py-1.5 bg-${y.accent}-50 text-${y.accent}-700 rounded-md border border-${y.accent}-200 shadow-sm`,children:[i===0?u.jsx(rf,{className:"w-3.5 h-3.5"}):u.jsx(Xp,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"text-xs font-bold uppercase tracking-wide",children:r})]},i))})},Sf=({seconds:e,setSeconds:t,defaultDuration:n,audioMode:r,onComplete:i,triggerCountdown:l,onCountdownComplete:o,uiText:a})=>{const[s,d]=A.useState(!1),[g,h]=A.useState(null),m=A.useRef(i),w=A.useRef(o);A.useEffect(()=>{m.current=i,w.current=o},[i,o]),A.useEffect(()=>{l&&g===null&&!s&&(h(3),ut(3))},[l]),A.useEffect(()=>{e===0&&s&&(d(!1),m.current&&m.current()),r&&s&&e<=5&&e>0&&vf()},[e,s,r]),A.useEffect(()=>{let c=null;return s&&(c=setInterval(()=>{t(f=>f<=0?0:f-1)},1e3)),()=>clearInterval(c)},[s,t]),A.useEffect(()=>{let c=null;return g!==null&&(c=setTimeout(()=>{if(g<=1)h(null),ut(0),d(!0),l&&w.current&&w.current();else{const f=g-1;ut(f),h(f)}},1e3)),()=>clearTimeout(c)},[g,l]);const S=()=>{if(s)d(!1);else{if(e===0){t(n*60),r?(ut(3),h(3)):d(!0);return}r?(ut(3),h(3)):d(!0)}},k=()=>{d(!1),t(n*60),r?(h(3),ut(3)):h(null)},D=c=>{const f=Math.floor(c/60),v=c%60;return`${f}:${v<10?"0":""}${v}`},p=()=>e===n*60?a.starting_in:a.resuming_in;return u.jsxs("div",{className:"relative",children:[g!==null&&u.jsxs("div",{className:`absolute inset-0 z-10 bg-${y.neutral}-900/90 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm transition-all`,children:[u.jsx("span",{className:`text-${y.primary}-400 font-bold uppercase text-xs tracking-widest mb-1`,children:p()}),u.jsx("div",{className:`text-6xl font-black text-white transition-all transform ${g==="GO"?`scale-125 text-${y.primary}-500`:"scale-100"}`,children:g})]}),u.jsxs("div",{className:`bg-${y.neutral}-800 text-white rounded-xl p-4 flex items-center justify-between shadow-lg mb-6 ring-1 ring-${y.neutral}-700`,children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:`text-[10px] text-${y.primary}-400 font-bold uppercase tracking-wider mb-1`,children:a.duration}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(tf,{className:`w-5 h-5 text-${y.neutral}-400`}),u.jsx("span",{className:`text-3xl font-mono font-bold ${e<60&&s?"text-red-400 animate-pulse":"text-white"}`,children:D(e)})]})]}),(!r||e>0&&!l&&g===null)&&u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:k,className:`h-12 w-12 rounded-lg bg-${y.neutral}-700 hover:bg-${y.neutral}-600 flex items-center justify-center text-${y.neutral}-300 transition-colors`,title:"Reset Timer",children:u.jsx(lf,{className:"w-5 h-5"})}),u.jsxs("button",{onClick:S,className:`h-12 px-6 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 ${s?`bg-${y.neutral}-700 hover:bg-${y.neutral}-600 text-white border border-${y.neutral}-600`:`bg-${y.primary}-500 hover:bg-${y.primary}-600 text-white`}`,children:[s?u.jsx(yc,{className:"w-4 h-4"}):u.jsx(Jl,{className:"w-4 h-4"}),s?a.pause:e===0?a.start:e<n*60?a.resume:a.start]})]})]})]})},bf=({sessionStarted:e,currentStepIndex:t,setAppState:n,startSession:r,sessionData:i,uiText:l,language:o,setLanguage:a,generateNewSession:s})=>{const d=()=>{a(m=>m==="en"?"fr":"en")},g=i.length,h=i.reduce((m,w)=>m+w.duration,0);return u.jsxs("div",{className:`p-6 h-full flex flex-col bg-${y.neutral}-50`,children:[u.jsxs("div",{className:"flex justify-between items-start mb-6",children:[u.jsxs("div",{children:[u.jsx("div",{className:`inline-block px-3 py-1 bg-${y.primary}-100 text-${y.primary}-700 rounded-full text-xs font-bold mb-3`,children:l.recommended}),u.jsxs("h1",{className:`text-3xl font-black text-${y.neutral}-900 leading-tight`,children:[l.protocol_title,u.jsx("br",{}),u.jsx("span",{className:`text-${y.primary}-600`,children:l.protocol_subtitle})]}),u.jsxs("p",{className:`text-${y.neutral}-500 font-medium mt-2 text-sm`,children:[g," ",l.steps_plural," • ~",h," ",l.mins_short]})]}),u.jsxs("button",{onClick:d,className:`p-2 bg-white rounded-full shadow-sm border border-${y.neutral}-200 text-${y.neutral}-600 hover:text-${y.primary}-600 transition-colors`,title:"Switch Language",children:[u.jsx(nf,{className:"w-6 h-6"}),u.jsx("span",{className:"sr-only",children:"Switch Language"})]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto pr-2 -mr-2 pb-64",children:u.jsx("div",{className:`relative pl-4 border-l-2 border-${y.neutral}-200 ml-4 space-y-8 py-2`,children:i.map((m,w)=>{const S=e&&w===t,k=e&&w<t;return u.jsxs("div",{className:"relative pl-8",children:[u.jsx("div",{className:`absolute -left-[25px] top-0 w-8 h-8 rounded-full border-4 flex items-center justify-center shadow-sm transition-colors ${S?`border-${y.primary}-500 bg-${y.primary}-500 text-white`:k?`border-${y.primary}-200 bg-${y.primary}-200 text-${y.primary}-700`:`border-${y.neutral}-50 bg-white text-${y.neutral}-300`}`,children:k?u.jsx(Jp,{className:"w-4 h-4"}):u.jsx(m.icon,{className:"w-3 h-3"})}),u.jsxs("div",{className:`bg-white p-4 rounded-xl border shadow-sm transition-all duration-300 ${S?`border-${y.primary}-500 ring-2 ring-${y.primary}-500/20 shadow-md transform scale-[1.02]`:`border-${y.neutral}-200`}`,children:[u.jsxs("div",{className:"flex justify-between items-start mb-1",children:[u.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wider ${S?`text-${y.primary}-600`:`text-${y.neutral}-400`}`,children:m.category}),u.jsxs("div",{className:"flex gap-2",children:[S&&u.jsxs("span",{className:`text-[10px] font-bold text-white bg-${y.primary}-500 px-2 py-0.5 rounded flex items-center gap-1`,children:[u.jsx(yc,{className:"w-3 h-3"})," ",l.paused]}),u.jsxs("span",{className:`text-[10px] font-bold text-${y.neutral}-400 bg-${y.neutral}-100 px-2 py-0.5 rounded`,children:[m.duration,"m"]})]})]}),u.jsx("h3",{className:`font-bold text-base ${S?`text-${y.neutral}-800`:`text-${y.neutral}-600`}`,children:m.title})]})]},m.id)})})}),u.jsx("div",{className:`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-${y.neutral}-200 space-y-3`,children:e?u.jsxs("button",{onClick:()=>n("active"),className:`w-full max-w-md mx-auto bg-${y.primary}-600 hover:bg-${y.primary}-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-${y.primary}-200/50 flex items-center justify-center gap-2 animate-pulse`,children:[u.jsx(Jl,{className:"w-5 h-5 fill-current"})," ",l.resume_session]}):u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:()=>r(!1),className:`w-full max-w-md mx-auto bg-white border-2 border-${y.neutral}-200 hover:border-${y.primary}-500 hover:text-${y.primary}-600 text-${y.neutral}-700 font-bold text-lg py-3 rounded-xl flex items-center justify-center gap-2`,children:[u.jsx(Jl,{className:"w-5 h-5 fill-current"})," ",l.start_manual]}),u.jsxs("button",{onClick:()=>r(!0),className:`w-full max-w-md mx-auto bg-${y.primary}-600 hover:bg-${y.primary}-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-${y.primary}-200/50 flex items-center justify-center gap-2`,children:[u.jsx(Xl,{className:"w-5 h-5"})," ",l.start_audio]}),u.jsxs("button",{onClick:s,className:`w-full max-w-md mx-auto text-${y.neutral}-400 text-sm hover:text-${y.primary}-600 py-2 flex items-center justify-center gap-2`,children:[u.jsx(vc,{className:"w-4 h-4"})," ",l.start_new]})]})})]})},Ef=({currentStepIndex:e,handleBackToOverview:t,currentDrill:n,audioMode:r,progressPercentage:i,timerSeconds:l,setTimerSeconds:o,handleTimerComplete:a,nextStep:s,exercisePhase:d,setExercisePhase:g,uiText:h,sessionLength:m,handleSkipIntro:w})=>u.jsxs("div",{className:`h-full flex flex-col bg-${y.neutral}-50`,children:[r&&d==="intro"&&u.jsxs("div",{className:`absolute inset-0 z-50 bg-${y.neutral}-900/95 flex flex-col items-center justify-center backdrop-blur-md p-8 text-center`,children:[u.jsxs("div",{className:"animate-pulse flex flex-col items-center mb-8",children:[u.jsx(Xl,{className:`w-16 h-16 text-${y.primary}-400 mb-4`}),u.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:n.title}),u.jsx("p",{className:`text-${y.neutral}-400`,children:h.listen_instruction})]}),u.jsxs("button",{onClick:w,className:"flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-bold transition-all active:scale-95 backdrop-blur-sm",children:[u.jsx(of,{className:"w-5 h-5"}),h.skip_intro]})]}),u.jsxs("div",{className:"bg-white p-4 pb-4 shadow-sm z-20 sticky top-0",children:[u.jsxs("div",{className:"flex justify-between items-end mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:t,className:`p-2 -ml-2 hover:bg-${y.neutral}-100 rounded-full text-${y.neutral}-500 transition-colors`,children:u.jsx(Zp,{className:"w-6 h-6"})}),u.jsxs("div",{children:[u.jsxs("span",{className:`text-[10px] font-bold text-${y.neutral}-400 uppercase tracking-widest block`,children:[h.step," ",e+1,"/",m]}),u.jsx("h2",{className:`text-xl font-black text-${y.neutral}-800 leading-none mt-1`,children:n.category})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[r&&u.jsxs("div",{className:`flex items-center gap-1 px-2 py-1 bg-${y.primary}-50 text-${y.primary}-700 rounded text-xs font-bold border border-${y.primary}-100 ${d==="intro"?"animate-pulse":""}`,children:[d==="intro"?u.jsx(sf,{className:"w-3 h-3"}):u.jsx(Xl,{className:"w-3 h-3"}),d==="intro"?h.speaking:h.audio_on]}),u.jsx("span",{className:`px-2 py-1 bg-${y.neutral}-100 text-${y.neutral}-500 rounded text-xs font-bold uppercase`,children:n.type})]})]}),u.jsx("div",{className:`w-full bg-${y.neutral}-100 h-1.5 rounded-full overflow-hidden`,children:u.jsx("div",{className:`bg-${y.primary}-500 h-full transition-all duration-500 ease-out`,style:{width:`${i}%`}})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-4 pb-32",children:[u.jsx(xf,{drillId:n.drillId}),u.jsx("h3",{className:`text-2xl font-bold text-${y.neutral}-800 mb-2`,children:n.title}),u.jsx(kf,{drill:n,uiText:h}),u.jsx("p",{className:`text-${y.neutral}-600 mb-6 leading-relaxed text-sm`,children:n.description}),u.jsx(Sf,{seconds:l,setSeconds:o,defaultDuration:n.duration,audioMode:r,onComplete:a,triggerCountdown:d==="countdown",onCountdownComplete:()=>g("working"),uiText:h},n.id),u.jsxs("div",{className:`bg-white p-5 rounded-xl border border-${y.neutral}-200 shadow-sm`,children:[u.jsx("h4",{className:`text-xs font-bold text-${y.neutral}-400 uppercase tracking-wider mb-4 border-b border-${y.neutral}-100 pb-2`,children:h.execution_steps}),u.jsx("div",{className:"space-y-4",children:n.steps.map((S,k)=>u.jsxs("div",{className:"flex gap-4 items-start",children:[u.jsx("div",{className:`flex-shrink-0 w-6 h-6 rounded-full bg-${y.neutral}-100 text-${y.neutral}-600 font-bold flex items-center justify-center text-xs mt-0.5 border border-${y.neutral}-200`,children:k+1}),u.jsx("p",{className:`text-${y.neutral}-700 font-medium leading-snug text-sm`,children:S})]},k))})]})]}),u.jsx("div",{className:`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-${y.neutral}-200`,children:u.jsxs("button",{onClick:s,className:`w-full max-w-md mx-auto bg-${y.neutral}-900 hover:bg-${y.neutral}-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-between px-6 transition-transform active:scale-95`,children:[u.jsx("span",{children:h.done_next}),u.jsxs("div",{className:`flex items-center gap-2 text-${y.neutral}-400`,children:[u.jsx("span",{className:"text-xs font-medium uppercase tracking-wider",children:h.next_step}),u.jsx(ef,{className:"w-5 h-5 text-white"})]})]})})]}),Nf=({setAudioMode:e,setAppState:t,setSessionStarted:n,uiText:r,generateNewSession:i})=>u.jsxs("div",{className:"h-full flex flex-col items-center justify-center p-8 text-center bg-white",children:[u.jsx("div",{className:`w-24 h-24 bg-${y.primary}-100 rounded-full flex items-center justify-center mb-6 animate-bounce`,children:u.jsx(af,{className:`w-12 h-12 text-${y.primary}-600`})}),u.jsx("h1",{className:`text-3xl font-black text-${y.neutral}-900 mb-2`,children:r.session_complete}),u.jsx("p",{className:`text-${y.neutral}-500 mb-8 max-w-xs mx-auto text-sm`,children:r.session_complete_sub}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 w-full mb-8",children:[u.jsxs("div",{className:`bg-${y.neutral}-50 p-4 rounded-xl border border-${y.neutral}-100`,children:[u.jsx("span",{className:`block text-3xl font-black text-${y.neutral}-800`,children:"50"}),u.jsx("span",{className:`text-xs font-bold text-${y.neutral}-400 uppercase`,children:r.minutes})]}),u.jsxs("div",{className:`bg-${y.neutral}-50 p-4 rounded-xl border border-${y.neutral}-100`,children:[u.jsx("span",{className:`block text-3xl font-black text-${y.neutral}-800`,children:"6"}),u.jsx("span",{className:`text-xs font-bold text-${y.neutral}-400 uppercase`,children:r.drills})]})]}),u.jsxs("button",{onClick:()=>{e(!1),t("overview"),n(!1),i()},className:`flex items-center gap-2 text-${y.primary}-600 font-bold px-6 py-3 rounded-full hover:bg-${y.primary}-50 transition-colors`,children:[u.jsx(vc,{className:"w-5 h-5"})," ",r.start_new]})]});function Cf(){const[e,t]=A.useState("overview"),[n,r]=A.useState(0),[i,l]=A.useState(!1),[o,a]=A.useState(null),[s,d]=A.useState(!1),[g,h]=A.useState(0),[m,w]=A.useState("fr"),[S,k]=A.useState("idle"),[D,p]=A.useState([]),c=A.useRef(new Audio),f=rl[m].ui;A.useEffect(()=>{const R=is();p(R)},[]);const v=()=>{const R=is();p(R),d(!1),r(0),h(R[0].duration*60),k("idle")},N=R=>D.map(b=>({...b,...rl[R].drillData[b.drillId],...rl[R].categories[b.category]})),z=A.useMemo(()=>N(m),[m,D]),C=z[n],P=D.length>0?(n+1)/D.length*100:0;A.useEffect(()=>{i&&"wakeLock"in navigator&&navigator.wakeLock.request("screen").catch(R=>console.log("Wake Lock error:",R))},[i]);const $=R=>{!z||z.length===0||(l(R),r(0),d(!0),h(z[0].duration*60),k("idle"),R?(t("countdown"),be()):(t("active"),k("working")))},L=()=>{if(Se(),n<z.length-1){const R=n+1;r(R),h(z[R].duration*60),k("idle"),window.scrollTo(0,0)}else t("summary")},Y=()=>{Se(),t("overview")},Se=()=>{c.current&&(c.current.pause(),c.current.currentTime=0)},Ke=(R,b)=>{if(!R){b&&b();return}const _=c.current;_.src=R,_.load();const T=()=>{_.removeEventListener("ended",T),_.removeEventListener("error",O),b&&b()},O=()=>{_.removeEventListener("ended",T),_.removeEventListener("error",O),b&&b()};_.addEventListener("ended",T),_.addEventListener("error",O),_.play().catch(ee=>O())},E=()=>{Se(),k("countdown")},be=()=>{let R=3;a(R),ut(R);const b=setInterval(()=>{R--,a(R>0?R:"GO"),ut(R),R<=0&&(clearInterval(b),setTimeout(()=>{a(null),t("active")},1e3))},1e3)};A.useEffect(()=>{if(Se(),e==="active"&&C){const R=g===C.duration*60;i&&R?(k("intro"),Ke(C.audioSrc,()=>{k("countdown")})):k("working")}return()=>Se()},[n,e,i,m,C]);const We=()=>{wf(),i&&setTimeout(()=>L(),2e3)};return C?u.jsxs(u.Fragment,{children:[u.jsx(gf,{}),u.jsx("div",{className:`bg-${y.neutral}-100 min-h-screen flex justify-center font-sans`,children:u.jsxs("div",{className:"w-full max-w-md bg-white h-screen shadow-2xl relative overflow-hidden flex flex-col",children:[e==="countdown"&&u.jsxs("div",{className:`absolute inset-0 z-50 bg-${y.neutral}-900/90 flex flex-col items-center justify-center backdrop-blur-sm`,children:[u.jsx("p",{className:`text-${y.primary}-400 font-bold uppercase tracking-[0.5em] mb-4 animate-pulse`,children:f.get_ready}),u.jsx("div",{className:`text-9xl font-black text-white transition-all transform ${o==="GO"?`scale-125 text-${y.primary}-500`:"scale-100"}`,children:o})]}),e==="overview"&&u.jsx(bf,{sessionStarted:s,currentStepIndex:n,setAppState:t,startSession:$,sessionData:z,uiText:f,language:m,setLanguage:w,generateNewSession:v}),(e==="active"||e==="countdown")&&u.jsx(Ef,{currentStepIndex:n,handleBackToOverview:Y,currentDrill:C,audioMode:i,progressPercentage:P,timerSeconds:g,setTimerSeconds:h,handleTimerComplete:We,nextStep:L,exercisePhase:S,setExercisePhase:k,uiText:f,sessionLength:z.length,handleSkipIntro:E}),e==="summary"&&u.jsx(Nf,{setAudioMode:l,setAppState:t,setSessionStarted:d,uiText:f,generateNewSession:v})]})})]}):u.jsx("div",{className:"flex h-screen items-center justify-center",children:"Loading Session..."})}il.createRoot(document.getElementById("root")).render(u.jsx(Dc.StrictMode,{children:u.jsx(Cf,{})}));
