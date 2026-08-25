(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();function Bf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Xa={exports:{}},ps={},Za={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function fg(){if(Vd)return he;Vd=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),T=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,B={};function Q(x,N,ce){this.props=x,this.context=N,this.refs=B,this.updater=ce||j}Q.prototype.isReactComponent={},Q.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function K(){}K.prototype=Q.prototype;function H(x,N,ce){this.props=x,this.context=N,this.refs=B,this.updater=ce||j}var q=H.prototype=new K;q.constructor=H,Y(q,Q.prototype),q.isPureReactComponent=!0;var ue=Array.isArray,me=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function $(x,N,ce){var fe,ge={},ye=null,Ee=null;if(N!=null)for(fe in N.ref!==void 0&&(Ee=N.ref),N.key!==void 0&&(ye=""+N.key),N)me.call(N,fe)&&!z.hasOwnProperty(fe)&&(ge[fe]=N[fe]);var Se=arguments.length-2;if(Se===1)ge.children=ce;else if(1<Se){for(var Te=Array(Se),rt=0;rt<Se;rt++)Te[rt]=arguments[rt+2];ge.children=Te}if(x&&x.defaultProps)for(fe in Se=x.defaultProps,Se)ge[fe]===void 0&&(ge[fe]=Se[fe]);return{$$typeof:i,type:x,key:ye,ref:Ee,props:ge,_owner:F.current}}function ie(x,N){return{$$typeof:i,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function R(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function de(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ce){return N[ce]})}var C=/\/+/g;function I(x,N){return typeof x=="object"&&x!==null&&x.key!=null?de(""+x.key):N.toString(36)}function G(x,N,ce,fe,ge){var ye=typeof x;(ye==="undefined"||ye==="boolean")&&(x=null);var Ee=!1;if(x===null)Ee=!0;else switch(ye){case"string":case"number":Ee=!0;break;case"object":switch(x.$$typeof){case i:case n:Ee=!0}}if(Ee)return Ee=x,ge=ge(Ee),x=fe===""?"."+I(Ee,0):fe,ue(ge)?(ce="",x!=null&&(ce=x.replace(C,"$&/")+"/"),G(ge,N,ce,"",function(rt){return rt})):ge!=null&&(R(ge)&&(ge=ie(ge,ce+(!ge.key||Ee&&Ee.key===ge.key?"":(""+ge.key).replace(C,"$&/")+"/")+x)),N.push(ge)),1;if(Ee=0,fe=fe===""?".":fe+":",ue(x))for(var Se=0;Se<x.length;Se++){ye=x[Se];var Te=fe+I(ye,Se);Ee+=G(ye,N,ce,Te,ge)}else if(Te=D(x),typeof Te=="function")for(x=Te.call(x),Se=0;!(ye=x.next()).done;)ye=ye.value,Te=fe+I(ye,Se++),Ee+=G(ye,N,ce,Te,ge);else if(ye==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Ee}function le(x,N,ce){if(x==null)return x;var fe=[],ge=0;return G(x,fe,"","",function(ye){return N.call(ce,ye,ge++)}),fe}function xe(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(ce){(x._status===0||x._status===-1)&&(x._status=1,x._result=ce)},function(ce){(x._status===0||x._status===-1)&&(x._status=2,x._result=ce)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var ne={current:null},M={transition:null},Z={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:M,ReactCurrentOwner:F};function U(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:le,forEach:function(x,N,ce){le(x,function(){N.apply(this,arguments)},ce)},count:function(x){var N=0;return le(x,function(){N++}),N},toArray:function(x){return le(x,function(N){return N})||[]},only:function(x){if(!R(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},he.Component=Q,he.Fragment=s,he.Profiler=d,he.PureComponent=H,he.StrictMode=c,he.Suspense=y,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,he.act=U,he.cloneElement=function(x,N,ce){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var fe=Y({},x.props),ge=x.key,ye=x.ref,Ee=x._owner;if(N!=null){if(N.ref!==void 0&&(ye=N.ref,Ee=F.current),N.key!==void 0&&(ge=""+N.key),x.type&&x.type.defaultProps)var Se=x.type.defaultProps;for(Te in N)me.call(N,Te)&&!z.hasOwnProperty(Te)&&(fe[Te]=N[Te]===void 0&&Se!==void 0?Se[Te]:N[Te])}var Te=arguments.length-2;if(Te===1)fe.children=ce;else if(1<Te){Se=Array(Te);for(var rt=0;rt<Te;rt++)Se[rt]=arguments[rt+2];fe.children=Se}return{$$typeof:i,type:x.type,key:ge,ref:ye,props:fe,_owner:Ee}},he.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:f,_context:x},x.Consumer=x},he.createElement=$,he.createFactory=function(x){var N=$.bind(null,x);return N.type=x,N},he.createRef=function(){return{current:null}},he.forwardRef=function(x){return{$$typeof:g,render:x}},he.isValidElement=R,he.lazy=function(x){return{$$typeof:L,_payload:{_status:-1,_result:x},_init:xe}},he.memo=function(x,N){return{$$typeof:k,type:x,compare:N===void 0?null:N}},he.startTransition=function(x){var N=M.transition;M.transition={};try{x()}finally{M.transition=N}},he.unstable_act=U,he.useCallback=function(x,N){return ne.current.useCallback(x,N)},he.useContext=function(x){return ne.current.useContext(x)},he.useDebugValue=function(){},he.useDeferredValue=function(x){return ne.current.useDeferredValue(x)},he.useEffect=function(x,N){return ne.current.useEffect(x,N)},he.useId=function(){return ne.current.useId()},he.useImperativeHandle=function(x,N,ce){return ne.current.useImperativeHandle(x,N,ce)},he.useInsertionEffect=function(x,N){return ne.current.useInsertionEffect(x,N)},he.useLayoutEffect=function(x,N){return ne.current.useLayoutEffect(x,N)},he.useMemo=function(x,N){return ne.current.useMemo(x,N)},he.useReducer=function(x,N,ce){return ne.current.useReducer(x,N,ce)},he.useRef=function(x){return ne.current.useRef(x)},he.useState=function(x){return ne.current.useState(x)},he.useSyncExternalStore=function(x,N,ce){return ne.current.useSyncExternalStore(x,N,ce)},he.useTransition=function(){return ne.current.useTransition()},he.version="18.3.1",he}var Hd;function Il(){return Hd||(Hd=1,Za.exports=fg()),Za.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function hg(){if(Wd)return ps;Wd=1;var i=Il(),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(g,y,k){var L,T={},D=null,j=null;k!==void 0&&(D=""+k),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(j=y.ref);for(L in y)c.call(y,L)&&!f.hasOwnProperty(L)&&(T[L]=y[L]);if(g&&g.defaultProps)for(L in y=g.defaultProps,y)T[L]===void 0&&(T[L]=y[L]);return{$$typeof:n,type:g,key:D,ref:j,props:T,_owner:d.current}}return ps.Fragment=s,ps.jsx=p,ps.jsxs=p,ps}var Gd;function pg(){return Gd||(Gd=1,Xa.exports=hg()),Xa.exports}var a=pg(),V=Il();const mg=Bf(V);var Oi={},el={exports:{}},nt={},tl={exports:{}},nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function gg(){return Kd||(Kd=1,(function(i){function n(M,Z){var U=M.length;M.push(Z);e:for(;0<U;){var x=U-1>>>1,N=M[x];if(0<d(N,Z))M[x]=Z,M[U]=N,U=x;else break e}}function s(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var Z=M[0],U=M.pop();if(U!==Z){M[0]=U;e:for(var x=0,N=M.length,ce=N>>>1;x<ce;){var fe=2*(x+1)-1,ge=M[fe],ye=fe+1,Ee=M[ye];if(0>d(ge,U))ye<N&&0>d(Ee,ge)?(M[x]=Ee,M[ye]=U,x=ye):(M[x]=ge,M[fe]=U,x=fe);else if(ye<N&&0>d(Ee,U))M[x]=Ee,M[ye]=U,x=ye;else break e}}return Z}function d(M,Z){var U=M.sortIndex-Z.sortIndex;return U!==0?U:M.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var p=Date,g=p.now();i.unstable_now=function(){return p.now()-g}}var y=[],k=[],L=1,T=null,D=3,j=!1,Y=!1,B=!1,Q=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(M){for(var Z=s(k);Z!==null;){if(Z.callback===null)c(k);else if(Z.startTime<=M)c(k),Z.sortIndex=Z.expirationTime,n(y,Z);else break;Z=s(k)}}function ue(M){if(B=!1,q(M),!Y)if(s(y)!==null)Y=!0,xe(me);else{var Z=s(k);Z!==null&&ne(ue,Z.startTime-M)}}function me(M,Z){Y=!1,B&&(B=!1,K($),$=-1),j=!0;var U=D;try{for(q(Z),T=s(y);T!==null&&(!(T.expirationTime>Z)||M&&!de());){var x=T.callback;if(typeof x=="function"){T.callback=null,D=T.priorityLevel;var N=x(T.expirationTime<=Z);Z=i.unstable_now(),typeof N=="function"?T.callback=N:T===s(y)&&c(y),q(Z)}else c(y);T=s(y)}if(T!==null)var ce=!0;else{var fe=s(k);fe!==null&&ne(ue,fe.startTime-Z),ce=!1}return ce}finally{T=null,D=U,j=!1}}var F=!1,z=null,$=-1,ie=5,R=-1;function de(){return!(i.unstable_now()-R<ie)}function C(){if(z!==null){var M=i.unstable_now();R=M;var Z=!0;try{Z=z(!0,M)}finally{Z?I():(F=!1,z=null)}}else F=!1}var I;if(typeof H=="function")I=function(){H(C)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,le=G.port2;G.port1.onmessage=C,I=function(){le.postMessage(null)}}else I=function(){Q(C,0)};function xe(M){z=M,F||(F=!0,I())}function ne(M,Z){$=Q(function(){M(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_continueExecution=function(){Y||j||(Y=!0,xe(me))},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return s(y)},i.unstable_next=function(M){switch(D){case 1:case 2:case 3:var Z=3;break;default:Z=D}var U=D;D=Z;try{return M()}finally{D=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(M,Z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=D;D=M;try{return Z()}finally{D=U}},i.unstable_scheduleCallback=function(M,Z,U){var x=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?x+U:x):U=x,M){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,M={id:L++,callback:Z,priorityLevel:M,startTime:U,expirationTime:N,sortIndex:-1},U>x?(M.sortIndex=U,n(k,M),s(y)===null&&M===s(k)&&(B?(K($),$=-1):B=!0,ne(ue,U-x))):(M.sortIndex=N,n(y,M),Y||j||(Y=!0,xe(me))),M},i.unstable_shouldYield=de,i.unstable_wrapCallback=function(M){var Z=D;return function(){var U=D;D=Z;try{return M.apply(this,arguments)}finally{D=U}}}})(nl)),nl}var qd;function yg(){return qd||(qd=1,tl.exports=gg()),tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function vg(){if(Jd)return nt;Jd=1;var i=Il(),n=yg();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function f(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},T={};function D(e){return y.call(T,e)?!0:y.call(L,e)?!1:k.test(e)?T[e]=!0:(L[e]=!0,!1)}function j(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,r,o){if(t===null||typeof t>"u"||j(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,r,o,l,u,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=h}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(K,H);Q[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(K,H);Q[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(K,H);Q[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,r,o){var l=Q.hasOwnProperty(t)?Q[t]:null;(l!==null?l.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y(t,r,l,o)&&(r=null),o||l===null?D(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,o=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var ue=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),de=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),M=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ce=!1;function fe(e,t){if(!e||ce)return"";ce=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var o=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){o=E}e.call(t.prototype)}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var l=E.stack.split(`
`),u=o.stack.split(`
`),h=l.length-1,m=u.length-1;1<=h&&0<=m&&l[h]!==u[m];)m--;for(;1<=h&&0<=m;h--,m--)if(l[h]!==u[m]){if(h!==1||m!==1)do if(h--,m--,0>m||l[h]!==u[m]){var v=`
`+l[h].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=h&&0<=m);break}}}finally{ce=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function ge(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case F:return"Portal";case ie:return"Profiler";case $:return"StrictMode";case I:return"Suspense";case G:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case de:return(e.displayName||"Context")+".Consumer";case R:return(e._context.displayName||"Context")+".Provider";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(t);case 8:return t===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rt(e){var t=Te(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){o=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(h){o=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){e._valueTracker||(e._valueTracker=rt(e))}function Jl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Te(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function so(e,t){var r=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Yl(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=Se(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ql(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function io(e,t){Ql(e,t);var r=Se(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oo(e,t.type,r):t.hasOwnProperty("defaultValue")&&oo(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function oo(e,t,r){(t!=="number"||Is(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var jr=Array.isArray;function Yn(e,t,r,o){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Se(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(jr(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Se(r)}}function ec(e,t){var r=Se(t.value),o=Se(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ts,rc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gp=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){gp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function sc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function ic(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,l=sc(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,l):e[r]=l}}var yp=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,t){if(t){if(yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,Qn=null,Xn=null;function oc(e){if(e=Zr(e)){if(typeof po!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Qs(t),po(e.stateNode,e.type,t))}}function ac(e){Qn?Xn?Xn.push(e):Xn=[e]:Qn=e}function lc(){if(Qn){var e=Qn,t=Xn;if(Xn=Qn=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function cc(e,t){return e(t)}function uc(){}var mo=!1;function dc(e,t,r){if(mo)return e(t,r);mo=!0;try{return cc(e,t,r)}finally{mo=!1,(Qn!==null||Xn!==null)&&(uc(),lc())}}function Rr(e,t){var r=e.stateNode;if(r===null)return null;var o=Qs(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var go=!1;if(g)try{var br={};Object.defineProperty(br,"passive",{get:function(){go=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{go=!1}function vp(e,t,r,o,l,u,h,m,v){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(P){this.onError(P)}}var Lr=!1,js=null,As=!1,yo=null,wp={onError:function(e){Lr=!0,js=e}};function xp(e,t,r,o,l,u,h,m,v){Lr=!1,js=null,vp.apply(wp,arguments)}function Sp(e,t,r,o,l,u,h,m,v){if(xp.apply(this,arguments),Lr){if(Lr){var E=js;Lr=!1,js=null}else throw Error(s(198));As||(As=!0,yo=E)}}function In(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hc(e){if(In(e)!==e)throw Error(s(188))}function kp(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,o=t;;){var l=r.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===r)return hc(l),e;if(u===o)return hc(l),t;u=u.sibling}throw Error(s(188))}if(r.return!==o.return)r=l,o=u;else{for(var h=!1,m=l.child;m;){if(m===r){h=!0,r=l,o=u;break}if(m===o){h=!0,o=l,r=u;break}m=m.sibling}if(!h){for(m=u.child;m;){if(m===r){h=!0,r=u,o=l;break}if(m===o){h=!0,o=u,r=l;break}m=m.sibling}if(!h)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function pc(e){return e=kp(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mc(e);if(t!==null)return t;e=e.sibling}return null}var gc=n.unstable_scheduleCallback,yc=n.unstable_cancelCallback,_p=n.unstable_shouldYield,Ep=n.unstable_requestPaint,be=n.unstable_now,Np=n.unstable_getCurrentPriorityLevel,vo=n.unstable_ImmediatePriority,vc=n.unstable_UserBlockingPriority,Ps=n.unstable_NormalPriority,Cp=n.unstable_LowPriority,wc=n.unstable_IdlePriority,Rs=null,It=null;function Ip(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Rs,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Ap,Tp=Math.log,jp=Math.LN2;function Ap(e){return e>>>=0,e===0?32:31-(Tp(e)/jp|0)|0}var bs=64,Ls=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,h=r&268435455;if(h!==0){var m=h&~l;m!==0?o=Dr(m):(u&=h,u!==0&&(o=Dr(u)))}else h=r&~l,h!==0?o=Dr(h):u!==0&&(o=Dr(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&l)===0&&(l=o&-o,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-vt(t),l=1<<r,o|=e[r],t&=~l;return o}function Pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rp(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var h=31-vt(u),m=1<<h,v=l[h];v===-1?((m&r)===0||(m&o)!==0)&&(l[h]=Pp(m,t)):v<=t&&(e.expiredLanes|=m),u&=~m}}function wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xc(){var e=bs;return bs<<=1,(bs&4194240)===0&&(bs=64),e}function xo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Or(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=r}function bp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-vt(r),u=1<<l;t[l]=0,o[l]=-1,e[l]=-1,r&=~u}}function So(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-vt(r),l=1<<o;l&t|e[o]&t&&(e[o]|=t),r&=~l}}var ke=0;function Sc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var kc,ko,_c,Ec,Nc,_o=!1,Os=[],Zt=null,en=null,tn=null,Mr=new Map,Fr=new Map,nn=[],Lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function Ur(e,t,r,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Zr(t),t!==null&&ko(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Dp(e,t,r,o,l){switch(t){case"focusin":return Zt=Ur(Zt,e,t,r,o,l),!0;case"dragenter":return en=Ur(en,e,t,r,o,l),!0;case"mouseover":return tn=Ur(tn,e,t,r,o,l),!0;case"pointerover":var u=l.pointerId;return Mr.set(u,Ur(Mr.get(u)||null,e,t,r,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Fr.set(u,Ur(Fr.get(u)||null,e,t,r,o,l)),!0}return!1}function Ic(e){var t=Tn(e.target);if(t!==null){var r=In(t);if(r!==null){if(t=r.tag,t===13){if(t=fc(r),t!==null){e.blockedOn=t,Nc(e.priority,function(){_c(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=No(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);fo=o,r.target.dispatchEvent(o),fo=null}else return t=Zr(r),t!==null&&ko(t),e.blockedOn=r,!1;t.shift()}return!0}function Tc(e,t,r){Ms(e)&&r.delete(t)}function Op(){_o=!1,Zt!==null&&Ms(Zt)&&(Zt=null),en!==null&&Ms(en)&&(en=null),tn!==null&&Ms(tn)&&(tn=null),Mr.forEach(Tc),Fr.forEach(Tc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,_o||(_o=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Op)))}function $r(e){function t(l){return zr(l,e)}if(0<Os.length){zr(Os[0],e);for(var r=1;r<Os.length;r++){var o=Os[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Zt!==null&&zr(Zt,e),en!==null&&zr(en,e),tn!==null&&zr(tn,e),Mr.forEach(t),Fr.forEach(t),r=0;r<nn.length;r++)o=nn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<nn.length&&(r=nn[0],r.blockedOn===null);)Ic(r),r.blockedOn===null&&nn.shift()}var Zn=ue.ReactCurrentBatchConfig,Fs=!0;function Mp(e,t,r,o){var l=ke,u=Zn.transition;Zn.transition=null;try{ke=1,Eo(e,t,r,o)}finally{ke=l,Zn.transition=u}}function Fp(e,t,r,o){var l=ke,u=Zn.transition;Zn.transition=null;try{ke=4,Eo(e,t,r,o)}finally{ke=l,Zn.transition=u}}function Eo(e,t,r,o){if(Fs){var l=No(e,t,r,o);if(l===null)Bo(e,t,o,Us,r),Cc(e,o);else if(Dp(l,e,t,r,o))o.stopPropagation();else if(Cc(e,o),t&4&&-1<Lp.indexOf(e)){for(;l!==null;){var u=Zr(l);if(u!==null&&kc(u),u=No(e,t,r,o),u===null&&Bo(e,t,o,Us,r),u===l)break;l=u}l!==null&&o.stopPropagation()}else Bo(e,t,o,null,r)}}var Us=null;function No(e,t,r,o){if(Us=null,e=ho(o),e=Tn(e),e!==null)if(t=In(e),t===null)e=null;else if(r=t.tag,r===13){if(e=fc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case vo:return 1;case vc:return 4;case Ps:case Cp:return 16;case wc:return 536870912;default:return 16}default:return 16}}var rn=null,Co=null,zs=null;function Ac(){if(zs)return zs;var e,t=Co,r=t.length,o,l="value"in rn?rn.value:rn.textContent,u=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(o=1;o<=h&&t[r-o]===l[u-o];o++);return zs=l.slice(e,1<o?1-o:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bs(){return!0}function Pc(){return!1}function st(e){function t(r,o,l,u,h){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bs:Pc,this.isPropagationStopped=Pc,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=st(er),Br=U({},er,{view:0,detail:0}),Up=st(Br),To,jo,Vr,Vs=U({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(To=e.screenX-Vr.screenX,jo=e.screenY-Vr.screenY):jo=To=0,Vr=e),To)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),Rc=st(Vs),zp=U({},Vs,{dataTransfer:0}),$p=st(zp),Bp=U({},Br,{relatedTarget:0}),Ao=st(Bp),Vp=U({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=st(Vp),Wp=U({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=st(Wp),Kp=U({},er,{data:0}),bc=st(Kp),qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function Po(){return Qp}var Xp=U({},Br,{key:function(e){if(e.key){var t=qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=st(Xp),em=U({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=st(em),tm=U({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),nm=st(tm),rm=U({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=st(rm),im=U({},Vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=st(im),am=[9,13,27,32],Ro=g&&"CompositionEvent"in window,Hr=null;g&&"documentMode"in document&&(Hr=document.documentMode);var lm=g&&"TextEvent"in window&&!Hr,Dc=g&&(!Ro||Hr&&8<Hr&&11>=Hr),Oc=" ",Mc=!1;function Fc(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function cm(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Mc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Mc?null:e;default:return null}}function um(e,t){if(tr)return e==="compositionend"||!Ro&&Fc(e,t)?(e=Ac(),zs=Co=rn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dc&&t.locale!=="ko"?null:t.data;default:return null}}var dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dm[e.type]:t==="textarea"}function $c(e,t,r,o){ac(o),t=qs(t,"onChange"),0<t.length&&(r=new Io("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Wr=null,Gr=null;function fm(e){iu(e,0)}function Hs(e){var t=or(e);if(Jl(t))return e}function hm(e,t){if(e==="change")return t}var Bc=!1;if(g){var bo;if(g){var Lo="oninput"in document;if(!Lo){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Lo=typeof Vc.oninput=="function"}bo=Lo}else bo=!1;Bc=bo&&(!document.documentMode||9<document.documentMode)}function Hc(){Wr&&(Wr.detachEvent("onpropertychange",Wc),Gr=Wr=null)}function Wc(e){if(e.propertyName==="value"&&Hs(Gr)){var t=[];$c(t,Gr,e,ho(e)),dc(fm,t)}}function pm(e,t,r){e==="focusin"?(Hc(),Wr=t,Gr=r,Wr.attachEvent("onpropertychange",Wc)):e==="focusout"&&Hc()}function mm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hs(Gr)}function gm(e,t){if(e==="click")return Hs(t)}function ym(e,t){if(e==="input"||e==="change")return Hs(t)}function vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:vm;function Kr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!y.call(t,l)||!wt(e[l],t[l]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kc(e,t){var r=Gc(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gc(r)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=Is();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Is(e.document)}return t}function Do(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wm(e){var t=Jc(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&qc(r.ownerDocument.documentElement,r)){if(o!==null&&Do(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=Kc(r,u);var h=Kc(r,o);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xm=g&&"documentMode"in document&&11>=document.documentMode,nr=null,Oo=null,qr=null,Mo=!1;function Yc(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mo||nr==null||nr!==Is(o)||(o=nr,"selectionStart"in o&&Do(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qr&&Kr(qr,o)||(qr=o,o=qs(Oo,"onSelect"),0<o.length&&(t=new Io("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=nr)))}function Ws(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var rr={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Fo={},Qc={};g&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Gs(e){if(Fo[e])return Fo[e];if(!rr[e])return e;var t=rr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Qc)return Fo[e]=t[r];return e}var Xc=Gs("animationend"),Zc=Gs("animationiteration"),eu=Gs("animationstart"),tu=Gs("transitionend"),nu=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){nu.set(e,t),f(t,[e])}for(var Uo=0;Uo<ru.length;Uo++){var zo=ru[Uo],Sm=zo.toLowerCase(),km=zo[0].toUpperCase()+zo.slice(1);sn(Sm,"on"+km)}sn(Xc,"onAnimationEnd"),sn(Zc,"onAnimationIteration"),sn(eu,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(tu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function su(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,Sp(o,t,void 0,e),e.currentTarget=null}function iu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var h=o.length-1;0<=h;h--){var m=o[h],v=m.instance,E=m.currentTarget;if(m=m.listener,v!==u&&l.isPropagationStopped())break e;su(l,m,E),u=v}else for(h=0;h<o.length;h++){if(m=o[h],v=m.instance,E=m.currentTarget,m=m.listener,v!==u&&l.isPropagationStopped())break e;su(l,m,E),u=v}}}if(As)throw e=yo,As=!1,yo=null,e}function Ce(e,t){var r=t[qo];r===void 0&&(r=t[qo]=new Set);var o=e+"__bubble";r.has(o)||(ou(t,e,2,!1),r.add(o))}function $o(e,t,r){var o=0;t&&(o|=4),ou(r,e,o,t)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Ks]){e[Ks]=!0,c.forEach(function(r){r!=="selectionchange"&&(_m.has(r)||$o(r,!1,e),$o(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ks]||(t[Ks]=!0,$o("selectionchange",!1,t))}}function ou(e,t,r,o){switch(jc(t)){case 1:var l=Mp;break;case 4:l=Fp;break;default:l=Eo}r=l.bind(null,t,r,e),l=void 0,!go||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Bo(e,t,r,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var h=o.tag;if(h===3||h===4){var m=o.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(h===4)for(h=o.return;h!==null;){var v=h.tag;if((v===3||v===4)&&(v=h.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;h=h.return}for(;m!==null;){if(h=Tn(m),h===null)return;if(v=h.tag,v===5||v===6){o=u=h;continue e}m=m.parentNode}}o=o.return}dc(function(){var E=u,P=ho(r),b=[];e:{var A=nu.get(e);if(A!==void 0){var W=Io,X=e;switch(e){case"keypress":if($s(r)===0)break e;case"keydown":case"keyup":W=Zp;break;case"focusin":X="focus",W=Ao;break;case"focusout":X="blur",W=Ao;break;case"beforeblur":case"afterblur":W=Ao;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=nm;break;case Xc:case Zc:case eu:W=Hp;break;case tu:W=sm;break;case"scroll":W=Up;break;case"wheel":W=om;break;case"copy":case"cut":case"paste":W=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Lc}var ee=(t&4)!==0,Le=!ee&&e==="scroll",S=ee?A!==null?A+"Capture":null:A;ee=[];for(var w=E,_;w!==null;){_=w;var O=_.stateNode;if(_.tag===5&&O!==null&&(_=O,S!==null&&(O=Rr(w,S),O!=null&&ee.push(Qr(w,O,_)))),Le)break;w=w.return}0<ee.length&&(A=new W(A,X,null,r,P),b.push({event:A,listeners:ee}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",A&&r!==fo&&(X=r.relatedTarget||r.fromElement)&&(Tn(X)||X[Ot]))break e;if((W||A)&&(A=P.window===P?P:(A=P.ownerDocument)?A.defaultView||A.parentWindow:window,W?(X=r.relatedTarget||r.toElement,W=E,X=X?Tn(X):null,X!==null&&(Le=In(X),X!==Le||X.tag!==5&&X.tag!==6)&&(X=null)):(W=null,X=E),W!==X)){if(ee=Rc,O="onMouseLeave",S="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Lc,O="onPointerLeave",S="onPointerEnter",w="pointer"),Le=W==null?A:or(W),_=X==null?A:or(X),A=new ee(O,w+"leave",W,r,P),A.target=Le,A.relatedTarget=_,O=null,Tn(P)===E&&(ee=new ee(S,w+"enter",X,r,P),ee.target=_,ee.relatedTarget=Le,O=ee),Le=O,W&&X)t:{for(ee=W,S=X,w=0,_=ee;_;_=sr(_))w++;for(_=0,O=S;O;O=sr(O))_++;for(;0<w-_;)ee=sr(ee),w--;for(;0<_-w;)S=sr(S),_--;for(;w--;){if(ee===S||S!==null&&ee===S.alternate)break t;ee=sr(ee),S=sr(S)}ee=null}else ee=null;W!==null&&au(b,A,W,ee,!1),X!==null&&Le!==null&&au(b,Le,X,ee,!0)}}e:{if(A=E?or(E):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var te=hm;else if(zc(A))if(Bc)te=ym;else{te=mm;var re=pm}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(te=gm);if(te&&(te=te(e,E))){$c(b,te,r,P);break e}re&&re(e,A,E),e==="focusout"&&(re=A._wrapperState)&&re.controlled&&A.type==="number"&&oo(A,"number",A.value)}switch(re=E?or(E):window,e){case"focusin":(zc(re)||re.contentEditable==="true")&&(nr=re,Oo=E,qr=null);break;case"focusout":qr=Oo=nr=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,Yc(b,r,P);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":Yc(b,r,P)}var se;if(Ro)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else tr?Fc(e,r)&&(ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ae="onCompositionStart");ae&&(Dc&&r.locale!=="ko"&&(tr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&tr&&(se=Ac()):(rn=P,Co="value"in rn?rn.value:rn.textContent,tr=!0)),re=qs(E,ae),0<re.length&&(ae=new bc(ae,e,null,r,P),b.push({event:ae,listeners:re}),se?ae.data=se:(se=Uc(r),se!==null&&(ae.data=se)))),(se=lm?cm(e,r):um(e,r))&&(E=qs(E,"onBeforeInput"),0<E.length&&(P=new bc("onBeforeInput","beforeinput",null,r,P),b.push({event:P,listeners:E}),P.data=se))}iu(b,t)})}function Qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qs(e,t){for(var r=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=Rr(e,r),u!=null&&o.unshift(Qr(e,u,l)),u=Rr(e,t),u!=null&&o.push(Qr(e,u,l))),e=e.return}return o}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,r,o,l){for(var u=t._reactName,h=[];r!==null&&r!==o;){var m=r,v=m.alternate,E=m.stateNode;if(v!==null&&v===o)break;m.tag===5&&E!==null&&(m=E,l?(v=Rr(r,u),v!=null&&h.unshift(Qr(r,v,m))):l||(v=Rr(r,u),v!=null&&h.push(Qr(r,v,m)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var Em=/\r\n?/g,Nm=/\u0000|\uFFFD/g;function lu(e){return(typeof e=="string"?e:""+e).replace(Em,`
`).replace(Nm,"")}function Js(e,t,r){if(t=lu(t),lu(e)!==t&&r)throw Error(s(425))}function Ys(){}var Vo=null,Ho=null;function Wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Go=typeof setTimeout=="function"?setTimeout:void 0,Cm=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,Im=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(Tm)}:Go;function Tm(e){setTimeout(function(){throw e})}function Ko(e,t){var r=t,o=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(o===0){e.removeChild(l),$r(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=l}while(r);$r(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ir,Xr="__reactProps$"+ir,Ot="__reactContainer$"+ir,qo="__reactEvents$"+ir,jm="__reactListeners$"+ir,Am="__reactHandles$"+ir;function Tn(e){var t=e[Tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ot]||r[Tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=uu(e);e!==null;){if(r=e[Tt])return r;e=uu(e)}return t}e=r,r=e.parentNode}return null}function Zr(e){return e=e[Tt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Qs(e){return e[Xr]||null}var Jo=[],ar=-1;function an(e){return{current:e}}function Ie(e){0>ar||(e.current=Jo[ar],Jo[ar]=null,ar--)}function Ne(e,t){ar++,Jo[ar]=e.current,e.current=t}var ln={},Ve=an(ln),Qe=an(!1),jn=ln;function lr(e,t){var r=e.type.contextTypes;if(!r)return ln;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in r)l[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(e){return e=e.childContextTypes,e!=null}function Xs(){Ie(Qe),Ie(Ve)}function du(e,t,r){if(Ve.current!==ln)throw Error(s(168));Ne(Ve,t),Ne(Qe,r)}function fu(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var l in o)if(!(l in t))throw Error(s(108,Ee(e)||"Unknown",l));return U({},r,o)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,jn=Ve.current,Ne(Ve,e),Ne(Qe,Qe.current),!0}function hu(e,t,r){var o=e.stateNode;if(!o)throw Error(s(169));r?(e=fu(e,t,jn),o.__reactInternalMemoizedMergedChildContext=e,Ie(Qe),Ie(Ve),Ne(Ve,e)):Ie(Qe),Ne(Qe,r)}var Mt=null,ei=!1,Yo=!1;function pu(e){Mt===null?Mt=[e]:Mt.push(e)}function Pm(e){ei=!0,pu(e)}function cn(){if(!Yo&&Mt!==null){Yo=!0;var e=0,t=ke;try{var r=Mt;for(ke=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Mt=null,ei=!1}catch(l){throw Mt!==null&&(Mt=Mt.slice(e+1)),gc(vo,cn),l}finally{ke=t,Yo=!1}}return null}var cr=[],ur=0,ti=null,ni=0,ut=[],dt=0,An=null,Ft=1,Ut="";function Pn(e,t){cr[ur++]=ni,cr[ur++]=ti,ti=e,ni=t}function mu(e,t,r){ut[dt++]=Ft,ut[dt++]=Ut,ut[dt++]=An,An=e;var o=Ft;e=Ut;var l=32-vt(o)-1;o&=~(1<<l),r+=1;var u=32-vt(t)+l;if(30<u){var h=l-l%5;u=(o&(1<<h)-1).toString(32),o>>=h,l-=h,Ft=1<<32-vt(t)+l|r<<l|o,Ut=u+e}else Ft=1<<u|r<<l|o,Ut=e}function Qo(e){e.return!==null&&(Pn(e,1),mu(e,1,0))}function Xo(e){for(;e===ti;)ti=cr[--ur],cr[ur]=null,ni=cr[--ur],cr[ur]=null;for(;e===An;)An=ut[--dt],ut[dt]=null,Ut=ut[--dt],ut[dt]=null,Ft=ut[--dt],ut[dt]=null}var it=null,ot=null,je=!1,xt=null;function gu(e,t){var r=mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function yu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,ot=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=An!==null?{id:Ft,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,it=e,ot=null,!0):!1;default:return!1}}function Zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ea(e){if(je){var t=ot;if(t){var r=t;if(!yu(e,t)){if(Zo(e))throw Error(s(418));t=on(r.nextSibling);var o=it;t&&yu(e,t)?gu(o,r):(e.flags=e.flags&-4097|2,je=!1,it=e)}}else{if(Zo(e))throw Error(s(418));e.flags=e.flags&-4097|2,je=!1,it=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function ri(e){if(e!==it)return!1;if(!je)return vu(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wo(e.type,e.memoizedProps)),t&&(t=ot)){if(Zo(e))throw wu(),Error(s(418));for(;t;)gu(e,t),t=on(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ot=on(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=it?on(e.stateNode.nextSibling):null;return!0}function wu(){for(var e=ot;e;)e=on(e.nextSibling)}function dr(){ot=it=null,je=!1}function ta(e){xt===null?xt=[e]:xt.push(e)}var Rm=ue.ReactCurrentBatchConfig;function es(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var o=r.stateNode}if(!o)throw Error(s(147,e));var l=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(h){var m=l.refs;h===null?delete m[u]:m[u]=h},t._stringRef=u,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function si(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function Su(e){function t(S,w){if(e){var _=S.deletions;_===null?(S.deletions=[w],S.flags|=16):_.push(w)}}function r(S,w){if(!e)return null;for(;w!==null;)t(S,w),w=w.sibling;return null}function o(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function l(S,w){return S=yn(S,w),S.index=0,S.sibling=null,S}function u(S,w,_){return S.index=_,e?(_=S.alternate,_!==null?(_=_.index,_<w?(S.flags|=2,w):_):(S.flags|=2,w)):(S.flags|=1048576,w)}function h(S){return e&&S.alternate===null&&(S.flags|=2),S}function m(S,w,_,O){return w===null||w.tag!==6?(w=Ga(_,S.mode,O),w.return=S,w):(w=l(w,_),w.return=S,w)}function v(S,w,_,O){var te=_.type;return te===z?P(S,w,_.props.children,O,_.key):w!==null&&(w.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&xu(te)===w.type)?(O=l(w,_.props),O.ref=es(S,w,_),O.return=S,O):(O=Ti(_.type,_.key,_.props,null,S.mode,O),O.ref=es(S,w,_),O.return=S,O)}function E(S,w,_,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==_.containerInfo||w.stateNode.implementation!==_.implementation?(w=Ka(_,S.mode,O),w.return=S,w):(w=l(w,_.children||[]),w.return=S,w)}function P(S,w,_,O,te){return w===null||w.tag!==7?(w=Un(_,S.mode,O,te),w.return=S,w):(w=l(w,_),w.return=S,w)}function b(S,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ga(""+w,S.mode,_),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case me:return _=Ti(w.type,w.key,w.props,null,S.mode,_),_.ref=es(S,null,w),_.return=S,_;case F:return w=Ka(w,S.mode,_),w.return=S,w;case xe:var O=w._init;return b(S,O(w._payload),_)}if(jr(w)||Z(w))return w=Un(w,S.mode,_,null),w.return=S,w;si(S,w)}return null}function A(S,w,_,O){var te=w!==null?w.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return te!==null?null:m(S,w,""+_,O);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case me:return _.key===te?v(S,w,_,O):null;case F:return _.key===te?E(S,w,_,O):null;case xe:return te=_._init,A(S,w,te(_._payload),O)}if(jr(_)||Z(_))return te!==null?null:P(S,w,_,O,null);si(S,_)}return null}function W(S,w,_,O,te){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(_)||null,m(w,S,""+O,te);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case me:return S=S.get(O.key===null?_:O.key)||null,v(w,S,O,te);case F:return S=S.get(O.key===null?_:O.key)||null,E(w,S,O,te);case xe:var re=O._init;return W(S,w,_,re(O._payload),te)}if(jr(O)||Z(O))return S=S.get(_)||null,P(w,S,O,te,null);si(w,O)}return null}function X(S,w,_,O){for(var te=null,re=null,se=w,ae=w=0,ze=null;se!==null&&ae<_.length;ae++){se.index>ae?(ze=se,se=null):ze=se.sibling;var ve=A(S,se,_[ae],O);if(ve===null){se===null&&(se=ze);break}e&&se&&ve.alternate===null&&t(S,se),w=u(ve,w,ae),re===null?te=ve:re.sibling=ve,re=ve,se=ze}if(ae===_.length)return r(S,se),je&&Pn(S,ae),te;if(se===null){for(;ae<_.length;ae++)se=b(S,_[ae],O),se!==null&&(w=u(se,w,ae),re===null?te=se:re.sibling=se,re=se);return je&&Pn(S,ae),te}for(se=o(S,se);ae<_.length;ae++)ze=W(se,S,ae,_[ae],O),ze!==null&&(e&&ze.alternate!==null&&se.delete(ze.key===null?ae:ze.key),w=u(ze,w,ae),re===null?te=ze:re.sibling=ze,re=ze);return e&&se.forEach(function(vn){return t(S,vn)}),je&&Pn(S,ae),te}function ee(S,w,_,O){var te=Z(_);if(typeof te!="function")throw Error(s(150));if(_=te.call(_),_==null)throw Error(s(151));for(var re=te=null,se=w,ae=w=0,ze=null,ve=_.next();se!==null&&!ve.done;ae++,ve=_.next()){se.index>ae?(ze=se,se=null):ze=se.sibling;var vn=A(S,se,ve.value,O);if(vn===null){se===null&&(se=ze);break}e&&se&&vn.alternate===null&&t(S,se),w=u(vn,w,ae),re===null?te=vn:re.sibling=vn,re=vn,se=ze}if(ve.done)return r(S,se),je&&Pn(S,ae),te;if(se===null){for(;!ve.done;ae++,ve=_.next())ve=b(S,ve.value,O),ve!==null&&(w=u(ve,w,ae),re===null?te=ve:re.sibling=ve,re=ve);return je&&Pn(S,ae),te}for(se=o(S,se);!ve.done;ae++,ve=_.next())ve=W(se,S,ae,ve.value,O),ve!==null&&(e&&ve.alternate!==null&&se.delete(ve.key===null?ae:ve.key),w=u(ve,w,ae),re===null?te=ve:re.sibling=ve,re=ve);return e&&se.forEach(function(dg){return t(S,dg)}),je&&Pn(S,ae),te}function Le(S,w,_,O){if(typeof _=="object"&&_!==null&&_.type===z&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case me:e:{for(var te=_.key,re=w;re!==null;){if(re.key===te){if(te=_.type,te===z){if(re.tag===7){r(S,re.sibling),w=l(re,_.props.children),w.return=S,S=w;break e}}else if(re.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&xu(te)===re.type){r(S,re.sibling),w=l(re,_.props),w.ref=es(S,re,_),w.return=S,S=w;break e}r(S,re);break}else t(S,re);re=re.sibling}_.type===z?(w=Un(_.props.children,S.mode,O,_.key),w.return=S,S=w):(O=Ti(_.type,_.key,_.props,null,S.mode,O),O.ref=es(S,w,_),O.return=S,S=O)}return h(S);case F:e:{for(re=_.key;w!==null;){if(w.key===re)if(w.tag===4&&w.stateNode.containerInfo===_.containerInfo&&w.stateNode.implementation===_.implementation){r(S,w.sibling),w=l(w,_.children||[]),w.return=S,S=w;break e}else{r(S,w);break}else t(S,w);w=w.sibling}w=Ka(_,S.mode,O),w.return=S,S=w}return h(S);case xe:return re=_._init,Le(S,w,re(_._payload),O)}if(jr(_))return X(S,w,_,O);if(Z(_))return ee(S,w,_,O);si(S,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,w!==null&&w.tag===6?(r(S,w.sibling),w=l(w,_),w.return=S,S=w):(r(S,w),w=Ga(_,S.mode,O),w.return=S,S=w),h(S)):r(S,w)}return Le}var fr=Su(!0),ku=Su(!1),ii=an(null),oi=null,hr=null,na=null;function ra(){na=hr=oi=null}function sa(e){var t=ii.current;Ie(ii),e._currentValue=t}function ia(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){oi=e,na=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ze=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(oi===null)throw Error(s(308));hr=e,oi.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Rn=null;function oa(e){Rn===null?Rn=[e]:Rn.push(e)}function _u(e,t,r,o){var l=t.interleaved;return l===null?(r.next=r,oa(t)):(r.next=l.next,l.next=r),t.interleaved=r,zt(e,o)}function zt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var un=!1;function aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,zt(e,r)}return l=o.interleaved,l===null?(t.next=t,oa(o)):(t.next=l.next,l.next=t),o.interleaved=t,zt(e,r)}function ai(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,So(e,r)}}function Nu(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?l=u=h:u=u.next=h,r=r.next}while(r!==null);u===null?l=u=t:u=u.next=t}else l=u=t;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function li(e,t,r,o){var l=e.updateQueue;un=!1;var u=l.firstBaseUpdate,h=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,E=v.next;v.next=null,h===null?u=E:h.next=E,h=v;var P=e.alternate;P!==null&&(P=P.updateQueue,m=P.lastBaseUpdate,m!==h&&(m===null?P.firstBaseUpdate=E:m.next=E,P.lastBaseUpdate=v))}if(u!==null){var b=l.baseState;h=0,P=E=v=null,m=u;do{var A=m.lane,W=m.eventTime;if((o&A)===A){P!==null&&(P=P.next={eventTime:W,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var X=e,ee=m;switch(A=t,W=r,ee.tag){case 1:if(X=ee.payload,typeof X=="function"){b=X.call(W,b,A);break e}b=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=ee.payload,A=typeof X=="function"?X.call(W,b,A):X,A==null)break e;b=U({},b,A);break e;case 2:un=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,A=l.effects,A===null?l.effects=[m]:A.push(m))}else W={eventTime:W,lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},P===null?(E=P=W,v=b):P=P.next=W,h|=A;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;A=m,m=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);if(P===null&&(v=b),l.baseState=v,l.firstBaseUpdate=E,l.lastBaseUpdate=P,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);Dn|=h,e.lanes=h,e.memoizedState=b}}function Cu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],l=o.callback;if(l!==null){if(o.callback=null,o=r,typeof l!="function")throw Error(s(191,l));l.call(o)}}}var ts={},jt=an(ts),ns=an(ts),rs=an(ts);function bn(e){if(e===ts)throw Error(s(174));return e}function la(e,t){switch(Ne(rs,t),Ne(ns,e),Ne(jt,ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}Ie(jt),Ne(jt,t)}function mr(){Ie(jt),Ie(ns),Ie(rs)}function Iu(e){bn(rs.current);var t=bn(jt.current),r=lo(t,e.type);t!==r&&(Ne(ns,e),Ne(jt,r))}function ca(e){ns.current===e&&(Ie(jt),Ie(ns))}var Ae=an(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function da(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var ui=ue.ReactCurrentDispatcher,fa=ue.ReactCurrentBatchConfig,Ln=0,Pe=null,Oe=null,Fe=null,di=!1,ss=!1,is=0,bm=0;function He(){throw Error(s(321))}function ha(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!wt(e[r],t[r]))return!1;return!0}function pa(e,t,r,o,l,u){if(Ln=u,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?Mm:Fm,e=r(o,l),ss){u=0;do{if(ss=!1,is=0,25<=u)throw Error(s(301));u+=1,Fe=Oe=null,t.updateQueue=null,ui.current=Um,e=r(o,l)}while(ss)}if(ui.current=pi,t=Oe!==null&&Oe.next!==null,Ln=0,Fe=Oe=Pe=null,di=!1,t)throw Error(s(300));return e}function ma(){var e=is!==0;return is=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Pe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function ht(){if(Oe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Fe===null?Pe.memoizedState:Fe.next;if(t!==null)Fe=t,Oe=e;else{if(e===null)throw Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Pe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function os(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=ht(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=Oe,l=o.baseQueue,u=r.pending;if(u!==null){if(l!==null){var h=l.next;l.next=u.next,u.next=h}o.baseQueue=l=u,r.pending=null}if(l!==null){u=l.next,o=o.baseState;var m=h=null,v=null,E=u;do{var P=E.lane;if((Ln&P)===P)v!==null&&(v=v.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),o=E.hasEagerState?E.eagerState:e(o,E.action);else{var b={lane:P,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};v===null?(m=v=b,h=o):v=v.next=b,Pe.lanes|=P,Dn|=P}E=E.next}while(E!==null&&E!==u);v===null?h=o:v.next=m,wt(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseState=h,t.baseQueue=v,r.lastRenderedState=o}if(e=r.interleaved,e!==null){l=e;do u=l.lane,Pe.lanes|=u,Dn|=u,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ya(e){var t=ht(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,l=r.pending,u=t.memoizedState;if(l!==null){r.pending=null;var h=l=l.next;do u=e(u,h.action),h=h.next;while(h!==l);wt(u,t.memoizedState)||(Ze=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,o]}function Tu(){}function ju(e,t){var r=Pe,o=ht(),l=t(),u=!wt(o.memoizedState,l);if(u&&(o.memoizedState=l,Ze=!0),o=o.queue,va(Ru.bind(null,r,o,e),[e]),o.getSnapshot!==t||u||Fe!==null&&Fe.memoizedState.tag&1){if(r.flags|=2048,as(9,Pu.bind(null,r,o,l,t),void 0,null),Ue===null)throw Error(s(349));(Ln&30)!==0||Au(r,t,l)}return l}function Au(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pu(e,t,r,o){t.value=r,t.getSnapshot=o,bu(t)&&Lu(e)}function Ru(e,t,r){return r(function(){bu(t)&&Lu(e)})}function bu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!wt(e,r)}catch{return!0}}function Lu(e){var t=zt(e,1);t!==null&&Et(t,e,1,-1)}function Du(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t.queue=e,e=e.dispatch=Om.bind(null,Pe,e),[t.memoizedState,e]}function as(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Ou(){return ht().memoizedState}function fi(e,t,r,o){var l=At();Pe.flags|=e,l.memoizedState=as(1|t,r,void 0,o===void 0?null:o)}function hi(e,t,r,o){var l=ht();o=o===void 0?null:o;var u=void 0;if(Oe!==null){var h=Oe.memoizedState;if(u=h.destroy,o!==null&&ha(o,h.deps)){l.memoizedState=as(t,r,u,o);return}}Pe.flags|=e,l.memoizedState=as(1|t,r,u,o)}function Mu(e,t){return fi(8390656,8,e,t)}function va(e,t){return hi(2048,8,e,t)}function Fu(e,t){return hi(4,2,e,t)}function Uu(e,t){return hi(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $u(e,t,r){return r=r!=null?r.concat([e]):null,hi(4,4,zu.bind(null,t,e),r)}function wa(){}function Bu(e,t){var r=ht();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&ha(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Vu(e,t){var r=ht();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&ha(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Hu(e,t,r){return(Ln&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=r):(wt(r,t)||(r=xc(),Pe.lanes|=r,Dn|=r,e.baseState=!0),t)}function Lm(e,t){var r=ke;ke=r!==0&&4>r?r:4,e(!0);var o=fa.transition;fa.transition={};try{e(!1),t()}finally{ke=r,fa.transition=o}}function Wu(){return ht().memoizedState}function Dm(e,t,r){var o=mn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Gu(e))Ku(t,r);else if(r=_u(e,t,r,o),r!==null){var l=qe();Et(r,e,o,l),qu(r,t,o)}}function Om(e,t,r){var o=mn(e),l={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Ku(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,m=u(h,r);if(l.hasEagerState=!0,l.eagerState=m,wt(m,h)){var v=t.interleaved;v===null?(l.next=l,oa(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}r=_u(e,t,l,o),r!==null&&(l=qe(),Et(r,e,o,l),qu(r,t,o))}}function Gu(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Ku(e,t){ss=di=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qu(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,So(e,r)}}var pi={readContext:ft,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Mm={readContext:ft,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Mu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,fi(4194308,4,zu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return fi(4,2,e,t)},useMemo:function(e,t){var r=At();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=At();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Dm.bind(null,Pe,e),[o.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:wa,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=Lm.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Pe,l=At();if(je){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),Ue===null)throw Error(s(349));(Ln&30)!==0||Au(o,t,r)}l.memoizedState=r;var u={value:r,getSnapshot:t};return l.queue=u,Mu(Ru.bind(null,o,u,e),[e]),o.flags|=2048,as(9,Pu.bind(null,o,u,r,t),void 0,null),r},useId:function(){var e=At(),t=Ue.identifierPrefix;if(je){var r=Ut,o=Ft;r=(o&~(1<<32-vt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=is++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fm={readContext:ft,useCallback:Bu,useContext:ft,useEffect:va,useImperativeHandle:$u,useInsertionEffect:Fu,useLayoutEffect:Uu,useMemo:Vu,useReducer:ga,useRef:Ou,useState:function(){return ga(os)},useDebugValue:wa,useDeferredValue:function(e){var t=ht();return Hu(t,Oe.memoizedState,e)},useTransition:function(){var e=ga(os)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:ju,useId:Wu,unstable_isNewReconciler:!1},Um={readContext:ft,useCallback:Bu,useContext:ft,useEffect:va,useImperativeHandle:$u,useInsertionEffect:Fu,useLayoutEffect:Uu,useMemo:Vu,useReducer:ya,useRef:Ou,useState:function(){return ya(os)},useDebugValue:wa,useDeferredValue:function(e){var t=ht();return Oe===null?t.memoizedState=e:Hu(t,Oe.memoizedState,e)},useTransition:function(){var e=ya(os)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:ju,useId:Wu,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function xa(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:U({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var mi={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=qe(),l=mn(e),u=$t(o,l);u.payload=t,r!=null&&(u.callback=r),t=dn(e,u,l),t!==null&&(Et(t,e,l,o),ai(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=qe(),l=mn(e),u=$t(o,l);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=dn(e,u,l),t!==null&&(Et(t,e,l,o),ai(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=qe(),o=mn(e),l=$t(r,o);l.tag=2,t!=null&&(l.callback=t),t=dn(e,l,o),t!==null&&(Et(t,e,o,r),ai(t,e,o))}};function Ju(e,t,r,o,l,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,h):t.prototype&&t.prototype.isPureReactComponent?!Kr(r,o)||!Kr(l,u):!0}function Yu(e,t,r){var o=!1,l=ln,u=t.contextType;return typeof u=="object"&&u!==null?u=ft(u):(l=Xe(t)?jn:Ve.current,o=t.contextTypes,u=(o=o!=null)?lr(e,l):ln),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function Qu(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function Sa(e,t,r,o){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},aa(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=ft(u):(u=Xe(t)?jn:Ve.current,l.context=lr(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(xa(e,t,u,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&mi.enqueueReplaceState(l,l.state,null),li(e,r,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var r="",o=t;do r+=ge(o),o=o.return;while(o);var l=r}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function ka(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function _a(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function Xu(e,t,r){r=$t(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ki||(ki=!0,Fa=o),_a(e,t)},r}function Zu(e,t,r){r=$t(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=t.value;r.payload=function(){return o(l)},r.callback=function(){_a(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){_a(e,t),typeof o!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function ed(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new zm;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(r)||(l.add(r),e=eg.bind(null,e,t,r),t.then(e,e))}function td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,r,o,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=$t(-1,1),t.tag=2,dn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var $m=ue.ReactCurrentOwner,Ze=!1;function Ke(e,t,r,o){t.child=e===null?ku(t,null,r,o):fr(t,e.child,r,o)}function rd(e,t,r,o,l){r=r.render;var u=t.ref;return pr(t,l),o=pa(e,t,r,o,u,l),r=ma(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Bt(e,t,l)):(je&&r&&Qo(t),t.flags|=1,Ke(e,t,o,l),t.child)}function sd(e,t,r,o,l){if(e===null){var u=r.type;return typeof u=="function"&&!Wa(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,id(e,t,u,o,l)):(e=Ti(r.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var h=u.memoizedProps;if(r=r.compare,r=r!==null?r:Kr,r(h,o)&&e.ref===t.ref)return Bt(e,t,l)}return t.flags|=1,e=yn(u,o),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,r,o,l){if(e!==null){var u=e.memoizedProps;if(Kr(u,o)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Bt(e,t,l)}return Ea(e,t,r,o,l)}function od(e,t,r){var o=t.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(vr,at),at|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(vr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:r,Ne(vr,at),at|=o}else u!==null?(o=u.baseLanes|r,t.memoizedState=null):o=r,Ne(vr,at),at|=o;return Ke(e,t,l,r),t.child}function ad(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ea(e,t,r,o,l){var u=Xe(r)?jn:Ve.current;return u=lr(t,u),pr(t,l),r=pa(e,t,r,o,u,l),o=ma(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Bt(e,t,l)):(je&&o&&Qo(t),t.flags|=1,Ke(e,t,r,l),t.child)}function ld(e,t,r,o,l){if(Xe(r)){var u=!0;Zs(t)}else u=!1;if(pr(t,l),t.stateNode===null)yi(e,t),Yu(t,r,o),Sa(t,r,o,l),o=!0;else if(e===null){var h=t.stateNode,m=t.memoizedProps;h.props=m;var v=h.context,E=r.contextType;typeof E=="object"&&E!==null?E=ft(E):(E=Xe(r)?jn:Ve.current,E=lr(t,E));var P=r.getDerivedStateFromProps,b=typeof P=="function"||typeof h.getSnapshotBeforeUpdate=="function";b||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(m!==o||v!==E)&&Qu(t,h,o,E),un=!1;var A=t.memoizedState;h.state=A,li(t,o,h,l),v=t.memoizedState,m!==o||A!==v||Qe.current||un?(typeof P=="function"&&(xa(t,r,P,o),v=t.memoizedState),(m=un||Ju(t,r,m,o,A,v,E))?(b||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=v),h.props=o,h.state=v,h.context=E,o=m):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{h=t.stateNode,Eu(e,t),m=t.memoizedProps,E=t.type===t.elementType?m:St(t.type,m),h.props=E,b=t.pendingProps,A=h.context,v=r.contextType,typeof v=="object"&&v!==null?v=ft(v):(v=Xe(r)?jn:Ve.current,v=lr(t,v));var W=r.getDerivedStateFromProps;(P=typeof W=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(m!==b||A!==v)&&Qu(t,h,o,v),un=!1,A=t.memoizedState,h.state=A,li(t,o,h,l);var X=t.memoizedState;m!==b||A!==X||Qe.current||un?(typeof W=="function"&&(xa(t,r,W,o),X=t.memoizedState),(E=un||Ju(t,r,E,o,A,X,v)||!1)?(P||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,X,v),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,X,v)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=X),h.props=o,h.state=X,h.context=v,o=E):(typeof h.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),o=!1)}return Na(e,t,r,o,u,l)}function Na(e,t,r,o,l,u){ad(e,t);var h=(t.flags&128)!==0;if(!o&&!h)return l&&hu(t,r,!1),Bt(e,t,u);o=t.stateNode,$m.current=t;var m=h&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&h?(t.child=fr(t,e.child,null,u),t.child=fr(t,null,m,u)):Ke(e,t,m,u),t.memoizedState=o.state,l&&hu(t,r,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&du(e,t.context,!1),la(e,t.containerInfo)}function ud(e,t,r,o,l){return dr(),ta(l),t.flags|=256,Ke(e,t,r,o),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function dd(e,t,r){var o=t.pendingProps,l=Ae.current,u=!1,h=(t.flags&128)!==0,m;if((m=h)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ne(Ae,l&1),e===null)return ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=o.children,e=o.fallback,u?(o=t.mode,u=t.child,h={mode:"hidden",children:h},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=h):u=ji(h,o,0,null),e=Un(e,o,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ia(r),t.memoizedState=Ca,e):Ta(t,h));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return Bm(e,t,h,o,m,l,r);if(u){u=o.fallback,h=t.mode,l=e.child,m=l.sibling;var v={mode:"hidden",children:o.children};return(h&1)===0&&t.child!==l?(o=t.child,o.childLanes=0,o.pendingProps=v,t.deletions=null):(o=yn(l,v),o.subtreeFlags=l.subtreeFlags&14680064),m!==null?u=yn(m,u):(u=Un(u,h,r,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,h=e.child.memoizedState,h=h===null?Ia(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},u.memoizedState=h,u.childLanes=e.childLanes&~r,t.memoizedState=Ca,o}return u=e.child,e=u.sibling,o=yn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ta(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,r,o){return o!==null&&ta(o),fr(t,e.child,null,r),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bm(e,t,r,o,l,u,h){if(r)return t.flags&256?(t.flags&=-257,o=ka(Error(s(422))),gi(e,t,h,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,l=t.mode,o=ji({mode:"visible",children:o.children},l,0,null),u=Un(u,l,h,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&fr(t,e.child,null,h),t.child.memoizedState=Ia(h),t.memoizedState=Ca,u);if((t.mode&1)===0)return gi(e,t,h,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var m=o.dgst;return o=m,u=Error(s(419)),o=ka(u,o,void 0),gi(e,t,h,o)}if(m=(h&e.childLanes)!==0,Ze||m){if(o=Ue,o!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|h))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,zt(e,l),Et(o,e,l,-1))}return Ha(),o=ka(Error(s(421))),gi(e,t,h,o)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=tg.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,ot=on(l.nextSibling),it=t,je=!0,xt=null,e!==null&&(ut[dt++]=Ft,ut[dt++]=Ut,ut[dt++]=An,Ft=e.id,Ut=e.overflow,An=t),t=Ta(t,o.children),t.flags|=4096,t)}function fd(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ia(e.return,t,r)}function ja(e,t,r,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=r,u.tailMode=l)}function hd(e,t,r){var o=t.pendingProps,l=o.revealOrder,u=o.tail;if(Ke(e,t,o.children,r),o=Ae.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fd(e,r,t);else if(e.tag===19)fd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ne(Ae,o),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&ci(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),ja(t,!1,l,r,u);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ci(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}ja(t,!0,r,null,u);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=yn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=yn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Vm(e,t,r){switch(t.tag){case 3:cd(t),dr();break;case 5:Iu(t);break;case 1:Xe(t.type)&&Zs(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,l=t.memoizedProps.value;Ne(ii,o._currentValue),o._currentValue=l;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ne(Ae,Ae.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?dd(e,t,r):(Ne(Ae,Ae.current&1),e=Bt(e,t,r),e!==null?e.sibling:null);Ne(Ae,Ae.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return hd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ne(Ae,Ae.current),o)break;return null;case 22:case 23:return t.lanes=0,od(e,t,r)}return Bt(e,t,r)}var pd,Aa,md,gd;pd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Aa=function(){},md=function(e,t,r,o){var l=e.memoizedProps;if(l!==o){e=t.stateNode,bn(jt.current);var u=null;switch(r){case"input":l=so(e,l),o=so(e,o),u=[];break;case"select":l=U({},l,{value:void 0}),o=U({},o,{value:void 0}),u=[];break;case"textarea":l=ao(e,l),o=ao(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ys)}co(r,o);var h;r=null;for(E in l)if(!o.hasOwnProperty(E)&&l.hasOwnProperty(E)&&l[E]!=null)if(E==="style"){var m=l[E];for(h in m)m.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(d.hasOwnProperty(E)?u||(u=[]):(u=u||[]).push(E,null));for(E in o){var v=o[E];if(m=l!=null?l[E]:void 0,o.hasOwnProperty(E)&&v!==m&&(v!=null||m!=null))if(E==="style")if(m){for(h in m)!m.hasOwnProperty(h)||v&&v.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in v)v.hasOwnProperty(h)&&m[h]!==v[h]&&(r||(r={}),r[h]=v[h])}else r||(u||(u=[]),u.push(E,r)),r=v;else E==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(u=u||[]).push(E,v)):E==="children"?typeof v!="string"&&typeof v!="number"||(u=u||[]).push(E,""+v):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(d.hasOwnProperty(E)?(v!=null&&E==="onScroll"&&Ce("scroll",e),u||m===v||(u=[])):(u=u||[]).push(E,v))}r&&(u=u||[]).push("style",r);var E=u;(t.updateQueue=E)&&(t.flags|=4)}},gd=function(e,t,r,o){r!==o&&(t.flags|=4)};function ls(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Hm(e,t,r){var o=t.pendingProps;switch(Xo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Xe(t.type)&&Xs(),We(t),null;case 3:return o=t.stateNode,mr(),Ie(Qe),Ie(Ve),da(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xt!==null&&($a(xt),xt=null))),Aa(e,t),We(t),null;case 5:ca(t);var l=bn(rs.current);if(r=t.type,e!==null&&t.stateNode!=null)md(e,t,r,o,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(s(166));return We(t),null}if(e=bn(jt.current),ri(t)){o=t.stateNode,r=t.type;var u=t.memoizedProps;switch(o[Tt]=t,o[Xr]=u,e=(t.mode&1)!==0,r){case"dialog":Ce("cancel",o),Ce("close",o);break;case"iframe":case"object":case"embed":Ce("load",o);break;case"video":case"audio":for(l=0;l<Jr.length;l++)Ce(Jr[l],o);break;case"source":Ce("error",o);break;case"img":case"image":case"link":Ce("error",o),Ce("load",o);break;case"details":Ce("toggle",o);break;case"input":Yl(o,u),Ce("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ce("invalid",o);break;case"textarea":Zl(o,u),Ce("invalid",o)}co(r,u),l=null;for(var h in u)if(u.hasOwnProperty(h)){var m=u[h];h==="children"?typeof m=="string"?o.textContent!==m&&(u.suppressHydrationWarning!==!0&&Js(o.textContent,m,e),l=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(u.suppressHydrationWarning!==!0&&Js(o.textContent,m,e),l=["children",""+m]):d.hasOwnProperty(h)&&m!=null&&h==="onScroll"&&Ce("scroll",o)}switch(r){case"input":Cs(o),Xl(o,u,!0);break;case"textarea":Cs(o),tc(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Ys)}o=l,t.updateQueue=o,o!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=h.createElement(r,{is:o.is}):(e=h.createElement(r),r==="select"&&(h=e,o.multiple?h.multiple=!0:o.size&&(h.size=o.size))):e=h.createElementNS(e,r),e[Tt]=t,e[Xr]=o,pd(e,t,!1,!1),t.stateNode=e;e:{switch(h=uo(r,o),r){case"dialog":Ce("cancel",e),Ce("close",e),l=o;break;case"iframe":case"object":case"embed":Ce("load",e),l=o;break;case"video":case"audio":for(l=0;l<Jr.length;l++)Ce(Jr[l],e);l=o;break;case"source":Ce("error",e),l=o;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=o;break;case"details":Ce("toggle",e),l=o;break;case"input":Yl(e,o),l=so(e,o),Ce("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=U({},o,{value:void 0}),Ce("invalid",e);break;case"textarea":Zl(e,o),l=ao(e,o),Ce("invalid",e);break;default:l=o}co(r,l),m=l;for(u in m)if(m.hasOwnProperty(u)){var v=m[u];u==="style"?ic(e,v):u==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&rc(e,v)):u==="children"?typeof v=="string"?(r!=="textarea"||v!=="")&&Ar(e,v):typeof v=="number"&&Ar(e,""+v):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(d.hasOwnProperty(u)?v!=null&&u==="onScroll"&&Ce("scroll",e):v!=null&&q(e,u,v,h))}switch(r){case"input":Cs(e),Xl(e,o,!1);break;case"textarea":Cs(e),tc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Se(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?Yn(e,!!o.multiple,u,!1):o.defaultValue!=null&&Yn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ys)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)gd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(r=bn(rs.current),bn(jt.current),ri(t)){if(o=t.stateNode,r=t.memoizedProps,o[Tt]=t,(u=o.nodeValue!==r)&&(e=it,e!==null))switch(e.tag){case 3:Js(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Js(o.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Tt]=t,t.stateNode=o}return We(t),null;case 13:if(Ie(Ae),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ot!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wu(),dr(),t.flags|=98560,u=!1;else if(u=ri(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Tt]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),u=!1}else xt!==null&&($a(xt),xt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ae.current&1)!==0?Me===0&&(Me=3):Ha())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return mr(),Aa(e,t),e===null&&Yr(t.stateNode.containerInfo),We(t),null;case 10:return sa(t.type._context),We(t),null;case 17:return Xe(t.type)&&Xs(),We(t),null;case 19:if(Ie(Ae),u=t.memoizedState,u===null)return We(t),null;if(o=(t.flags&128)!==0,h=u.rendering,h===null)if(o)ls(u,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=ci(e),h!==null){for(t.flags|=128,ls(u,!1),o=h.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)u=r,e=o,u.flags&=14680066,h=u.alternate,h===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=h.childLanes,u.lanes=h.lanes,u.child=h.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=h.memoizedProps,u.memoizedState=h.memoizedState,u.updateQueue=h.updateQueue,u.type=h.type,e=h.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ne(Ae,Ae.current&1|2),t.child}e=e.sibling}u.tail!==null&&be()>wr&&(t.flags|=128,o=!0,ls(u,!1),t.lanes=4194304)}else{if(!o)if(e=ci(h),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ls(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!je)return We(t),null}else 2*be()-u.renderingStartTime>wr&&r!==1073741824&&(t.flags|=128,o=!0,ls(u,!1),t.lanes=4194304);u.isBackwards?(h.sibling=t.child,t.child=h):(r=u.last,r!==null?r.sibling=h:t.child=h,u.last=h)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=be(),t.sibling=null,r=Ae.current,Ne(Ae,o?r&1|2:r&1),t):(We(t),null);case 22:case 23:return Va(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Wm(e,t){switch(Xo(t),t.tag){case 1:return Xe(t.type)&&Xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),Ie(Qe),Ie(Ve),da(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ca(t),null;case 13:if(Ie(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Ae),null;case 4:return mr(),null;case 10:return sa(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var vi=!1,Ge=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,J=null;function yr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Re(e,t,o)}else r.current=null}function Pa(e,t,r){try{r()}catch(o){Re(e,t,o)}}var yd=!1;function Km(e,t){if(Vo=Fs,e=Jc(),Do(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var h=0,m=-1,v=-1,E=0,P=0,b=e,A=null;t:for(;;){for(var W;b!==r||l!==0&&b.nodeType!==3||(m=h+l),b!==u||o!==0&&b.nodeType!==3||(v=h+o),b.nodeType===3&&(h+=b.nodeValue.length),(W=b.firstChild)!==null;)A=b,b=W;for(;;){if(b===e)break t;if(A===r&&++E===l&&(m=h),A===u&&++P===o&&(v=h),(W=b.nextSibling)!==null)break;b=A,A=b.parentNode}b=W}r=m===-1||v===-1?null:{start:m,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ho={focusedElem:e,selectionRange:r},Fs=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var ee=X.memoizedProps,Le=X.memoizedState,S=t.stateNode,w=S.getSnapshotBeforeUpdate(t.elementType===t.type?ee:St(t.type,ee),Le);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(O){Re(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return X=yd,yd=!1,X}function cs(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Pa(t,r,u)}l=l.next}while(l!==o)}}function wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Ra(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function vd(e){var t=e.alternate;t!==null&&(e.alternate=null,vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Xr],delete t[qo],delete t[jm],delete t[Am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ys));else if(o!==4&&(e=e.child,e!==null))for(ba(e,t,r),e=e.sibling;e!==null;)ba(e,t,r),e=e.sibling}function La(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(La(e,t,r),e=e.sibling;e!==null;)La(e,t,r),e=e.sibling}var $e=null,kt=!1;function fn(e,t,r){for(r=r.child;r!==null;)Sd(e,t,r),r=r.sibling}function Sd(e,t,r){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Rs,r)}catch{}switch(r.tag){case 5:Ge||yr(r,t);case 6:var o=$e,l=kt;$e=null,fn(e,t,r),$e=o,kt=l,$e!==null&&(kt?(e=$e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):$e.removeChild(r.stateNode));break;case 18:$e!==null&&(kt?(e=$e,r=r.stateNode,e.nodeType===8?Ko(e.parentNode,r):e.nodeType===1&&Ko(e,r),$r(e)):Ko($e,r.stateNode));break;case 4:o=$e,l=kt,$e=r.stateNode.containerInfo,kt=!0,fn(e,t,r),$e=o,kt=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,h=u.destroy;u=u.tag,h!==void 0&&((u&2)!==0||(u&4)!==0)&&Pa(r,t,h),l=l.next}while(l!==o)}fn(e,t,r);break;case 1:if(!Ge&&(yr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){Re(r,t,m)}fn(e,t,r);break;case 21:fn(e,t,r);break;case 22:r.mode&1?(Ge=(o=Ge)||r.memoizedState!==null,fn(e,t,r),Ge=o):fn(e,t,r);break;default:fn(e,t,r)}}function kd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gm),t.forEach(function(o){var l=ng.bind(null,e,o);r.has(o)||(r.add(o),o.then(l,l))})}}function _t(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o];try{var u=e,h=t,m=h;e:for(;m!==null;){switch(m.tag){case 5:$e=m.stateNode,kt=!1;break e;case 3:$e=m.stateNode.containerInfo,kt=!0;break e;case 4:$e=m.stateNode.containerInfo,kt=!0;break e}m=m.return}if($e===null)throw Error(s(160));Sd(u,h,l),$e=null,kt=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(E){Re(l,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}function _d(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Pt(e),o&4){try{cs(3,e,e.return),wi(3,e)}catch(ee){Re(e,e.return,ee)}try{cs(5,e,e.return)}catch(ee){Re(e,e.return,ee)}}break;case 1:_t(t,e),Pt(e),o&512&&r!==null&&yr(r,r.return);break;case 5:if(_t(t,e),Pt(e),o&512&&r!==null&&yr(r,r.return),e.flags&32){var l=e.stateNode;try{Ar(l,"")}catch(ee){Re(e,e.return,ee)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,h=r!==null?r.memoizedProps:u,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&u.type==="radio"&&u.name!=null&&Ql(l,u),uo(m,h);var E=uo(m,u);for(h=0;h<v.length;h+=2){var P=v[h],b=v[h+1];P==="style"?ic(l,b):P==="dangerouslySetInnerHTML"?rc(l,b):P==="children"?Ar(l,b):q(l,P,b,E)}switch(m){case"input":io(l,u);break;case"textarea":ec(l,u);break;case"select":var A=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var W=u.value;W!=null?Yn(l,!!u.multiple,W,!1):A!==!!u.multiple&&(u.defaultValue!=null?Yn(l,!!u.multiple,u.defaultValue,!0):Yn(l,!!u.multiple,u.multiple?[]:"",!1))}l[Xr]=u}catch(ee){Re(e,e.return,ee)}}break;case 6:if(_t(t,e),Pt(e),o&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(ee){Re(e,e.return,ee)}}break;case 3:if(_t(t,e),Pt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(ee){Re(e,e.return,ee)}break;case 4:_t(t,e),Pt(e);break;case 13:_t(t,e),Pt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Ma=be())),o&4&&kd(e);break;case 22:if(P=r!==null&&r.memoizedState!==null,e.mode&1?(Ge=(E=Ge)||P,_t(t,e),Ge=E):_t(t,e),Pt(e),o&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!P&&(e.mode&1)!==0)for(J=e,P=e.child;P!==null;){for(b=J=P;J!==null;){switch(A=J,W=A.child,A.tag){case 0:case 11:case 14:case 15:cs(4,A,A.return);break;case 1:yr(A,A.return);var X=A.stateNode;if(typeof X.componentWillUnmount=="function"){o=A,r=A.return;try{t=o,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(ee){Re(o,r,ee)}}break;case 5:yr(A,A.return);break;case 22:if(A.memoizedState!==null){Cd(b);continue}}W!==null?(W.return=A,J=W):Cd(b)}P=P.sibling}e:for(P=null,b=e;;){if(b.tag===5){if(P===null){P=b;try{l=b.stateNode,E?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(m=b.stateNode,v=b.memoizedProps.style,h=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=sc("display",h))}catch(ee){Re(e,e.return,ee)}}}else if(b.tag===6){if(P===null)try{b.stateNode.nodeValue=E?"":b.memoizedProps}catch(ee){Re(e,e.return,ee)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;P===b&&(P=null),b=b.return}P===b&&(P=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:_t(t,e),Pt(e),o&4&&kd(e);break;case 21:break;default:_t(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(wd(r)){var o=r;break e}r=r.return}throw Error(s(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Ar(l,""),o.flags&=-33);var u=xd(e);La(e,u,l);break;case 3:case 4:var h=o.stateNode.containerInfo,m=xd(e);ba(e,m,h);break;default:throw Error(s(161))}}catch(v){Re(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qm(e,t,r){J=e,Ed(e)}function Ed(e,t,r){for(var o=(e.mode&1)!==0;J!==null;){var l=J,u=l.child;if(l.tag===22&&o){var h=l.memoizedState!==null||vi;if(!h){var m=l.alternate,v=m!==null&&m.memoizedState!==null||Ge;m=vi;var E=Ge;if(vi=h,(Ge=v)&&!E)for(J=l;J!==null;)h=J,v=h.child,h.tag===22&&h.memoizedState!==null?Id(l):v!==null?(v.return=h,J=v):Id(l);for(;u!==null;)J=u,Ed(u),u=u.sibling;J=l,vi=m,Ge=E}Nd(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,J=u):Nd(e)}}function Nd(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||wi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ge)if(r===null)o.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:St(t.type,r.memoizedProps);o.componentDidUpdate(l,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Cu(t,u,o);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Cu(t,h,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src&&(r.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var P=E.memoizedState;if(P!==null){var b=P.dehydrated;b!==null&&$r(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ge||t.flags&512&&Ra(t)}catch(A){Re(t,t.return,A)}}if(t===e){J=null;break}if(r=t.sibling,r!==null){r.return=t.return,J=r;break}J=t.return}}function Cd(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var r=t.sibling;if(r!==null){r.return=t.return,J=r;break}J=t.return}}function Id(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wi(4,t)}catch(v){Re(t,r,v)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var l=t.return;try{o.componentDidMount()}catch(v){Re(t,l,v)}}var u=t.return;try{Ra(t)}catch(v){Re(t,u,v)}break;case 5:var h=t.return;try{Ra(t)}catch(v){Re(t,h,v)}}}catch(v){Re(t,t.return,v)}if(t===e){J=null;break}var m=t.sibling;if(m!==null){m.return=t.return,J=m;break}J=t.return}}var Jm=Math.ceil,xi=ue.ReactCurrentDispatcher,Da=ue.ReactCurrentOwner,pt=ue.ReactCurrentBatchConfig,pe=0,Ue=null,De=null,Be=0,at=0,vr=an(0),Me=0,us=null,Dn=0,Si=0,Oa=0,ds=null,et=null,Ma=0,wr=1/0,Vt=null,ki=!1,Fa=null,hn=null,_i=!1,pn=null,Ei=0,fs=0,Ua=null,Ni=-1,Ci=0;function qe(){return(pe&6)!==0?be():Ni!==-1?Ni:Ni=be()}function mn(e){return(e.mode&1)===0?1:(pe&2)!==0&&Be!==0?Be&-Be:Rm.transition!==null?(Ci===0&&(Ci=xc()),Ci):(e=ke,e!==0||(e=window.event,e=e===void 0?16:jc(e.type)),e)}function Et(e,t,r,o){if(50<fs)throw fs=0,Ua=null,Error(s(185));Or(e,r,o),((pe&2)===0||e!==Ue)&&(e===Ue&&((pe&2)===0&&(Si|=r),Me===4&&gn(e,Be)),tt(e,o),r===1&&pe===0&&(t.mode&1)===0&&(wr=be()+500,ei&&cn()))}function tt(e,t){var r=e.callbackNode;Rp(e,t);var o=Ds(e,e===Ue?Be:0);if(o===0)r!==null&&yc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&yc(r),t===1)e.tag===0?Pm(jd.bind(null,e)):pu(jd.bind(null,e)),Im(function(){(pe&6)===0&&cn()}),r=null;else{switch(Sc(o)){case 1:r=vo;break;case 4:r=vc;break;case 16:r=Ps;break;case 536870912:r=wc;break;default:r=Ps}r=Md(r,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Td(e,t){if(Ni=-1,Ci=0,(pe&6)!==0)throw Error(s(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var o=Ds(e,e===Ue?Be:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Ii(e,o);else{t=o;var l=pe;pe|=2;var u=Pd();(Ue!==e||Be!==t)&&(Vt=null,wr=be()+500,Mn(e,t));do try{Xm();break}catch(m){Ad(e,m)}while(!0);ra(),xi.current=u,pe=l,De!==null?t=0:(Ue=null,Be=0,t=Me)}if(t!==0){if(t===2&&(l=wo(e),l!==0&&(o=l,t=za(e,l))),t===1)throw r=us,Mn(e,0),gn(e,o),tt(e,be()),r;if(t===6)gn(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Ym(l)&&(t=Ii(e,o),t===2&&(u=wo(e),u!==0&&(o=u,t=za(e,u))),t===1))throw r=us,Mn(e,0),gn(e,o),tt(e,be()),r;switch(e.finishedWork=l,e.finishedLanes=o,t){case 0:case 1:throw Error(s(345));case 2:Fn(e,et,Vt);break;case 3:if(gn(e,o),(o&130023424)===o&&(t=Ma+500-be(),10<t)){if(Ds(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){qe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Go(Fn.bind(null,e,et,Vt),t);break}Fn(e,et,Vt);break;case 4:if(gn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,l=-1;0<o;){var h=31-vt(o);u=1<<h,h=t[h],h>l&&(l=h),o&=~u}if(o=l,o=be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Jm(o/1960))-o,10<o){e.timeoutHandle=Go(Fn.bind(null,e,et,Vt),o);break}Fn(e,et,Vt);break;case 5:Fn(e,et,Vt);break;default:throw Error(s(329))}}}return tt(e,be()),e.callbackNode===r?Td.bind(null,e):null}function za(e,t){var r=ds;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=et,et=r,t!==null&&$a(t)),e}function $a(e){et===null?et=e:et.push.apply(et,e)}function Ym(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var l=r[o],u=l.getSnapshot;l=l.value;try{if(!wt(u(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Oa,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-vt(t),o=1<<r;e[r]=-1,t&=~o}}function jd(e){if((pe&6)!==0)throw Error(s(327));xr();var t=Ds(e,0);if((t&1)===0)return tt(e,be()),null;var r=Ii(e,t);if(e.tag!==0&&r===2){var o=wo(e);o!==0&&(t=o,r=za(e,o))}if(r===1)throw r=us,Mn(e,0),gn(e,t),tt(e,be()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,et,Vt),tt(e,be()),null}function Ba(e,t){var r=pe;pe|=1;try{return e(t)}finally{pe=r,pe===0&&(wr=be()+500,ei&&cn())}}function On(e){pn!==null&&pn.tag===0&&(pe&6)===0&&xr();var t=pe;pe|=1;var r=pt.transition,o=ke;try{if(pt.transition=null,ke=1,e)return e()}finally{ke=o,pt.transition=r,pe=t,(pe&6)===0&&cn()}}function Va(){at=vr.current,Ie(vr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Cm(r)),De!==null)for(r=De.return;r!==null;){var o=r;switch(Xo(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Xs();break;case 3:mr(),Ie(Qe),Ie(Ve),da();break;case 5:ca(o);break;case 4:mr();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:sa(o.type._context);break;case 22:case 23:Va()}r=r.return}if(Ue=e,De=e=yn(e.current,null),Be=at=t,Me=0,us=null,Oa=Si=Dn=0,et=ds=null,Rn!==null){for(t=0;t<Rn.length;t++)if(r=Rn[t],o=r.interleaved,o!==null){r.interleaved=null;var l=o.next,u=r.pending;if(u!==null){var h=u.next;u.next=l,o.next=h}r.pending=o}Rn=null}return e}function Ad(e,t){do{var r=De;try{if(ra(),ui.current=pi,di){for(var o=Pe.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}di=!1}if(Ln=0,Fe=Oe=Pe=null,ss=!1,is=0,Da.current=null,r===null||r.return===null){Me=1,us=t,De=null;break}e:{var u=e,h=r.return,m=r,v=t;if(t=Be,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var E=v,P=m,b=P.tag;if((P.mode&1)===0&&(b===0||b===11||b===15)){var A=P.alternate;A?(P.updateQueue=A.updateQueue,P.memoizedState=A.memoizedState,P.lanes=A.lanes):(P.updateQueue=null,P.memoizedState=null)}var W=td(h);if(W!==null){W.flags&=-257,nd(W,h,m,u,t),W.mode&1&&ed(u,E,t),t=W,v=E;var X=t.updateQueue;if(X===null){var ee=new Set;ee.add(v),t.updateQueue=ee}else X.add(v);break e}else{if((t&1)===0){ed(u,E,t),Ha();break e}v=Error(s(426))}}else if(je&&m.mode&1){var Le=td(h);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),nd(Le,h,m,u,t),ta(gr(v,m));break e}}u=v=gr(v,m),Me!==4&&(Me=2),ds===null?ds=[u]:ds.push(u),u=h;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var S=Xu(u,v,t);Nu(u,S);break e;case 1:m=v;var w=u.type,_=u.stateNode;if((u.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(hn===null||!hn.has(_)))){u.flags|=65536,t&=-t,u.lanes|=t;var O=Zu(u,m,t);Nu(u,O);break e}}u=u.return}while(u!==null)}bd(r)}catch(te){t=te,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function Pd(){var e=xi.current;return xi.current=pi,e===null?pi:e}function Ha(){(Me===0||Me===3||Me===2)&&(Me=4),Ue===null||(Dn&268435455)===0&&(Si&268435455)===0||gn(Ue,Be)}function Ii(e,t){var r=pe;pe|=2;var o=Pd();(Ue!==e||Be!==t)&&(Vt=null,Mn(e,t));do try{Qm();break}catch(l){Ad(e,l)}while(!0);if(ra(),pe=r,xi.current=o,De!==null)throw Error(s(261));return Ue=null,Be=0,Me}function Qm(){for(;De!==null;)Rd(De)}function Xm(){for(;De!==null&&!_p();)Rd(De)}function Rd(e){var t=Od(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?bd(e):De=t,Da.current=null}function bd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Hm(r,t,at),r!==null){De=r;return}}else{if(r=Wm(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Me===0&&(Me=5)}function Fn(e,t,r){var o=ke,l=pt.transition;try{pt.transition=null,ke=1,Zm(e,t,r,o)}finally{pt.transition=l,ke=o}return null}function Zm(e,t,r,o){do xr();while(pn!==null);if((pe&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(bp(e,u),e===Ue&&(De=Ue=null,Be=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||_i||(_i=!0,Md(Ps,function(){return xr(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=pt.transition,pt.transition=null;var h=ke;ke=1;var m=pe;pe|=4,Da.current=null,Km(e,r),_d(r,e),wm(Ho),Fs=!!Vo,Ho=Vo=null,e.current=r,qm(r),Ep(),pe=m,ke=h,pt.transition=u}else e.current=r;if(_i&&(_i=!1,pn=e,Ei=l),u=e.pendingLanes,u===0&&(hn=null),Ip(r.stateNode),tt(e,be()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],o(l.value,{componentStack:l.stack,digest:l.digest});if(ki)throw ki=!1,e=Fa,Fa=null,e;return(Ei&1)!==0&&e.tag!==0&&xr(),u=e.pendingLanes,(u&1)!==0?e===Ua?fs++:(fs=0,Ua=e):fs=0,cn(),null}function xr(){if(pn!==null){var e=Sc(Ei),t=pt.transition,r=ke;try{if(pt.transition=null,ke=16>e?16:e,pn===null)var o=!1;else{if(e=pn,pn=null,Ei=0,(pe&6)!==0)throw Error(s(331));var l=pe;for(pe|=4,J=e.current;J!==null;){var u=J,h=u.child;if((J.flags&16)!==0){var m=u.deletions;if(m!==null){for(var v=0;v<m.length;v++){var E=m[v];for(J=E;J!==null;){var P=J;switch(P.tag){case 0:case 11:case 15:cs(8,P,u)}var b=P.child;if(b!==null)b.return=P,J=b;else for(;J!==null;){P=J;var A=P.sibling,W=P.return;if(vd(P),P===E){J=null;break}if(A!==null){A.return=W,J=A;break}J=W}}}var X=u.alternate;if(X!==null){var ee=X.child;if(ee!==null){X.child=null;do{var Le=ee.sibling;ee.sibling=null,ee=Le}while(ee!==null)}}J=u}}if((u.subtreeFlags&2064)!==0&&h!==null)h.return=u,J=h;else e:for(;J!==null;){if(u=J,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:cs(9,u,u.return)}var S=u.sibling;if(S!==null){S.return=u.return,J=S;break e}J=u.return}}var w=e.current;for(J=w;J!==null;){h=J;var _=h.child;if((h.subtreeFlags&2064)!==0&&_!==null)_.return=h,J=_;else e:for(h=w;J!==null;){if(m=J,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:wi(9,m)}}catch(te){Re(m,m.return,te)}if(m===h){J=null;break e}var O=m.sibling;if(O!==null){O.return=m.return,J=O;break e}J=m.return}}if(pe=l,cn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Rs,e)}catch{}o=!0}return o}finally{ke=r,pt.transition=t}}return!1}function Ld(e,t,r){t=gr(r,t),t=Xu(e,t,1),e=dn(e,t,1),t=qe(),e!==null&&(Or(e,1,t),tt(e,t))}function Re(e,t,r){if(e.tag===3)Ld(e,e,r);else for(;t!==null;){if(t.tag===3){Ld(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hn===null||!hn.has(o))){e=gr(r,e),e=Zu(t,e,1),t=dn(t,e,1),e=qe(),t!==null&&(Or(t,1,e),tt(t,e));break}}t=t.return}}function eg(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(Be&r)===r&&(Me===4||Me===3&&(Be&130023424)===Be&&500>be()-Ma?Mn(e,0):Oa|=r),tt(e,t)}function Dd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ls,Ls<<=1,(Ls&130023424)===0&&(Ls=4194304)));var r=qe();e=zt(e,t),e!==null&&(Or(e,t,r),tt(e,r))}function tg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dd(e,r)}function ng(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(t),Dd(e,r)}var Od;Od=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ze=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ze=!1,Vm(e,t,r);Ze=(e.flags&131072)!==0}else Ze=!1,je&&(t.flags&1048576)!==0&&mu(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;yi(e,t),e=t.pendingProps;var l=lr(t,Ve.current);pr(t,r),l=pa(null,t,o,e,l,r);var u=ma();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(o)?(u=!0,Zs(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,aa(t),l.updater=mi,t.stateNode=l,l._reactInternals=t,Sa(t,o,e,r),t=Na(null,t,o,!0,u,r)):(t.tag=0,je&&u&&Qo(t),Ke(null,t,l,r),t=t.child),t;case 16:o=t.elementType;e:{switch(yi(e,t),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=sg(o),e=St(o,e),l){case 0:t=Ea(null,t,o,e,r);break e;case 1:t=ld(null,t,o,e,r);break e;case 11:t=rd(null,t,o,e,r);break e;case 14:t=sd(null,t,o,St(o.type,e),r);break e}throw Error(s(306,o,""))}return t;case 0:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:St(o,l),Ea(e,t,o,l,r);case 1:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:St(o,l),ld(e,t,o,l,r);case 3:e:{if(cd(t),e===null)throw Error(s(387));o=t.pendingProps,u=t.memoizedState,l=u.element,Eu(e,t),li(t,o,null,r);var h=t.memoizedState;if(o=h.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=gr(Error(s(423)),t),t=ud(e,t,o,r,l);break e}else if(o!==l){l=gr(Error(s(424)),t),t=ud(e,t,o,r,l);break e}else for(ot=on(t.stateNode.containerInfo.firstChild),it=t,je=!0,xt=null,r=ku(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),o===l){t=Bt(e,t,r);break e}Ke(e,t,o,r)}t=t.child}return t;case 5:return Iu(t),e===null&&ea(t),o=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,h=l.children,Wo(o,l)?h=null:u!==null&&Wo(o,u)&&(t.flags|=32),ad(e,t),Ke(e,t,h,r),t.child;case 6:return e===null&&ea(t),null;case 13:return dd(e,t,r);case 4:return la(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=fr(t,null,o,r):Ke(e,t,o,r),t.child;case 11:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:St(o,l),rd(e,t,o,l,r);case 7:return Ke(e,t,t.pendingProps,r),t.child;case 8:return Ke(e,t,t.pendingProps.children,r),t.child;case 12:return Ke(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,l=t.pendingProps,u=t.memoizedProps,h=l.value,Ne(ii,o._currentValue),o._currentValue=h,u!==null)if(wt(u.value,h)){if(u.children===l.children&&!Qe.current){t=Bt(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var m=u.dependencies;if(m!==null){h=u.child;for(var v=m.firstContext;v!==null;){if(v.context===o){if(u.tag===1){v=$t(-1,r&-r),v.tag=2;var E=u.updateQueue;if(E!==null){E=E.shared;var P=E.pending;P===null?v.next=v:(v.next=P.next,P.next=v),E.pending=v}}u.lanes|=r,v=u.alternate,v!==null&&(v.lanes|=r),ia(u.return,r,t),m.lanes|=r;break}v=v.next}}else if(u.tag===10)h=u.type===t.type?null:u.child;else if(u.tag===18){if(h=u.return,h===null)throw Error(s(341));h.lanes|=r,m=h.alternate,m!==null&&(m.lanes|=r),ia(h,r,t),h=u.sibling}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}Ke(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,o=t.pendingProps.children,pr(t,r),l=ft(l),o=o(l),t.flags|=1,Ke(e,t,o,r),t.child;case 14:return o=t.type,l=St(o,t.pendingProps),l=St(o.type,l),sd(e,t,o,l,r);case 15:return id(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:St(o,l),yi(e,t),t.tag=1,Xe(o)?(e=!0,Zs(t)):e=!1,pr(t,r),Yu(t,o,l),Sa(t,o,l,r),Na(null,t,o,!0,e,r);case 19:return hd(e,t,r);case 22:return od(e,t,r)}throw Error(s(156,t.tag))};function Md(e,t){return gc(e,t)}function rg(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,r,o){return new rg(e,t,r,o)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===C)return 11;if(e===le)return 14}return 2}function yn(e,t){var r=e.alternate;return r===null?(r=mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ti(e,t,r,o,l,u){var h=2;if(o=e,typeof e=="function")Wa(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case z:return Un(r.children,l,u,t);case $:h=8,l|=8;break;case ie:return e=mt(12,r,t,l|2),e.elementType=ie,e.lanes=u,e;case I:return e=mt(13,r,t,l),e.elementType=I,e.lanes=u,e;case G:return e=mt(19,r,t,l),e.elementType=G,e.lanes=u,e;case ne:return ji(r,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:h=10;break e;case de:h=9;break e;case C:h=11;break e;case le:h=14;break e;case xe:h=16,o=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=mt(h,r,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function Un(e,t,r,o){return e=mt(7,e,o,t),e.lanes=r,e}function ji(e,t,r,o){return e=mt(22,e,o,t),e.elementType=ne,e.lanes=r,e.stateNode={isHidden:!1},e}function Ga(e,t,r){return e=mt(6,e,null,t),e.lanes=r,e}function Ka(e,t,r){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ig(e,t,r,o,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xo(0),this.expirationTimes=xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xo(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function qa(e,t,r,o,l,u,h,m,v){return e=new ig(e,t,r,m,v),t===1?(t=1,u===!0&&(t|=8)):t=0,u=mt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},aa(u),e}function og(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Fd(e){if(!e)return ln;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(Xe(r))return fu(e,r,t)}return t}function Ud(e,t,r,o,l,u,h,m,v){return e=qa(r,o,!0,e,l,u,h,m,v),e.context=Fd(null),r=e.current,o=qe(),l=mn(r),u=$t(o,l),u.callback=t??null,dn(r,u,l),e.current.lanes=l,Or(e,l,o),tt(e,o),e}function Ai(e,t,r,o){var l=t.current,u=qe(),h=mn(l);return r=Fd(r),t.context===null?t.context=r:t.pendingContext=r,t=$t(u,h),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=dn(l,t,h),e!==null&&(Et(e,l,h,u),ai(e,l,h)),h}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ja(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function ag(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}Ri.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ai(e,t,null,null)},Ri.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Ai(null,e,null,null)}),t[Ot]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ec();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nn.length&&t!==0&&t<nn[r].priority;r++);nn.splice(r,0,e),r===0&&Ic(e)}};function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function lg(e,t,r,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var E=Pi(h);u.call(E)}}var h=Ud(t,o,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=h,e[Ot]=h.current,Yr(e.nodeType===8?e.parentNode:e),On(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var m=o;o=function(){var E=Pi(v);m.call(E)}}var v=qa(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=v,e[Ot]=v.current,Yr(e.nodeType===8?e.parentNode:e),On(function(){Ai(t,v,r,o)}),v}function Li(e,t,r,o,l){var u=r._reactRootContainer;if(u){var h=u;if(typeof l=="function"){var m=l;l=function(){var v=Pi(h);m.call(v)}}Ai(t,h,e,l)}else h=lg(r,t,e,l,o);return Pi(h)}kc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(So(t,r|1),tt(t,be()),(pe&6)===0&&(wr=be()+500,cn()))}break;case 13:On(function(){var o=zt(e,1);if(o!==null){var l=qe();Et(o,e,1,l)}}),Ja(e,1)}},ko=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var r=qe();Et(t,e,134217728,r)}Ja(e,134217728)}},_c=function(e){if(e.tag===13){var t=mn(e),r=zt(e,t);if(r!==null){var o=qe();Et(r,e,t,o)}Ja(e,t)}},Ec=function(){return ke},Nc=function(e,t){var r=ke;try{return ke=e,t()}finally{ke=r}},po=function(e,t,r){switch(t){case"input":if(io(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var l=Qs(o);if(!l)throw Error(s(90));Jl(o),io(o,l)}}}break;case"textarea":ec(e,r);break;case"select":t=r.value,t!=null&&Yn(e,!!r.multiple,t,!1)}},cc=Ba,uc=On;var cg={usingClientEntryPoint:!1,Events:[Zr,or,Qs,ac,lc,Ba]},hs={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ug={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{Rs=Di.inject(ug),It=Di}catch{}}return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg,nt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qa(t))throw Error(s(200));return og(e,t,null,r)},nt.createRoot=function(e,t){if(!Qa(e))throw Error(s(299));var r=!1,o="",l=$d;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=qa(e,1,!1,null,null,r,!1,o,l),e[Ot]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Ya(t)},nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=pc(t),e=e===null?null:e.stateNode,e},nt.flushSync=function(e){return On(e)},nt.hydrate=function(e,t,r){if(!bi(t))throw Error(s(200));return Li(null,e,t,!0,r)},nt.hydrateRoot=function(e,t,r){if(!Qa(e))throw Error(s(405));var o=r!=null&&r.hydratedSources||null,l=!1,u="",h=$d;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=Ud(t,null,e,1,r??null,l,!1,u,h),e[Ot]=t.current,Yr(e),o)for(e=0;e<o.length;e++)r=o[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ri(t)},nt.render=function(e,t,r){if(!bi(t))throw Error(s(200));return Li(null,e,t,!1,r)},nt.unmountComponentAtNode=function(e){if(!bi(e))throw Error(s(40));return e._reactRootContainer?(On(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},nt.unstable_batchedUpdates=Ba,nt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!bi(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Li(e,t,r,!1,o)},nt.version="18.3.1-next-f1338f8080-20240426",nt}var Yd;function wg(){if(Yd)return el.exports;Yd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),el.exports=vg(),el.exports}var Qd;function xg(){if(Qd)return Oi;Qd=1;var i=wg();return Oi.createRoot=i.createRoot,Oi.hydrateRoot=i.hydrateRoot,Oi}var Sg=xg();const kg=Bf(Sg),pl=({size:i=36,iconSize:n,className:s="",variant:c="green"})=>{const d=n||Math.round(i*.58),p=(()=>{switch(c){case"light":return{backgroundColor:"#e2e4e8",color:"#1b4d2e"};case"dark":return{backgroundColor:"#272a30",color:"#ffffff"};case"transparent":return{backgroundColor:"transparent",color:"currentColor"};case"green":default:return{backgroundColor:"#225a39",color:"#ffffff"}}})();return a.jsx("div",{className:`vinora-brand-icon-wrapper ${s}`,style:{width:`${i}px`,height:`${i}px`,borderRadius:`${Math.round(i*.28)}px`,backgroundColor:p.backgroundColor,color:p.color,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.2s ease"},children:a.jsx("svg",{width:d,height:d,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M 12 4.2 C 12 8.6 15.4 12 19.8 12 C 15.4 12 12 15.4 12 19.8 C 12 15.4 8.6 12 4.2 12 C 8.6 12 12 8.6 12 4.2 Z",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})})},_g=()=>a.jsxs("div",{className:"brand-panel",children:[a.jsxs("div",{className:"brand-header",children:[a.jsx(pl,{size:38,variant:"green"}),a.jsx("span",{className:"brand-title",children:"Vinora"})]}),a.jsxs("div",{className:"brand-content",children:[a.jsxs("h1",{className:"hero-heading",children:["Where did it come",a.jsx("br",{}),"from, where did it go."]}),a.jsx("p",{className:"hero-description",children:"A calm ledger for income, spending and savings goals. No noise, no gamification — just a clear view of your month."})]}),a.jsx("div",{className:"brand-footer",children:"CALM BY DESIGN"})]});/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vf=(...i)=>i.filter((n,s,c)=>!!n&&n.trim()!==""&&c.indexOf(n)===s).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ng={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=V.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:f,iconNode:p,...g},y)=>V.createElement("svg",{ref:y,...Ng,width:n,height:n,stroke:i,strokeWidth:c?Number(s)*24/Number(n):s,className:Vf("lucide",d),...g},[...p.map(([k,L])=>V.createElement(k,L)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(i,n)=>{const s=V.forwardRef(({className:c,...d},f)=>V.createElement(Cg,{ref:f,iconNode:n,className:Vf(`lucide-${Eg(i)}`,c),...d}));return s.displayName=`${i}`,s};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=we("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=we("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=we("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=we("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=we("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=we("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=we("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=we("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=we("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=we("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=we("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=we("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=we("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=we("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=we("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=we("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=we("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=we("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=we("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=we("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=we("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=we("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=we("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=we("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=we("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=we("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=we("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=we("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=we("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=we("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=we("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qg=()=>{};var ef={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=function(i){const n=[];let s=0;for(let c=0;c<i.length;c++){let d=i.charCodeAt(c);d<128?n[s++]=d:d<2048?(n[s++]=d>>6|192,n[s++]=d&63|128):(d&64512)===55296&&c+1<i.length&&(i.charCodeAt(c+1)&64512)===56320?(d=65536+((d&1023)<<10)+(i.charCodeAt(++c)&1023),n[s++]=d>>18|240,n[s++]=d>>12&63|128,n[s++]=d>>6&63|128,n[s++]=d&63|128):(n[s++]=d>>12|224,n[s++]=d>>6&63|128,n[s++]=d&63|128)}return n},Jg=function(i){const n=[];let s=0,c=0;for(;s<i.length;){const d=i[s++];if(d<128)n[c++]=String.fromCharCode(d);else if(d>191&&d<224){const f=i[s++];n[c++]=String.fromCharCode((d&31)<<6|f&63)}else if(d>239&&d<365){const f=i[s++],p=i[s++],g=i[s++],y=((d&7)<<18|(f&63)<<12|(p&63)<<6|g&63)-65536;n[c++]=String.fromCharCode(55296+(y>>10)),n[c++]=String.fromCharCode(56320+(y&1023))}else{const f=i[s++],p=i[s++];n[c++]=String.fromCharCode((d&15)<<12|(f&63)<<6|p&63)}}return n.join("")},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,n){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let d=0;d<i.length;d+=3){const f=i[d],p=d+1<i.length,g=p?i[d+1]:0,y=d+2<i.length,k=y?i[d+2]:0,L=f>>2,T=(f&3)<<4|g>>4;let D=(g&15)<<2|k>>6,j=k&63;y||(j=64,p||(D=64)),c.push(s[L],s[T],s[D],s[j])}return c.join("")},encodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(i):this.encodeByteArray(Kf(i),n)},decodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(i):Jg(this.decodeStringToByteArray(i,n))},decodeStringToByteArray(i,n){this.init_();const s=n?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let d=0;d<i.length;){const f=s[i.charAt(d++)],g=d<i.length?s[i.charAt(d)]:0;++d;const k=d<i.length?s[i.charAt(d)]:64;++d;const T=d<i.length?s[i.charAt(d)]:64;if(++d,f==null||g==null||k==null||T==null)throw new Yg;const D=f<<2|g>>4;if(c.push(D),k!==64){const j=g<<4&240|k>>2;if(c.push(j),T!==64){const Y=k<<6&192|T;c.push(Y)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Yg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qg=function(i){const n=Kf(i);return qf.encodeByteArray(n,!0)},Jf=function(i){return Qg(i).replace(/\./g,"")},Yf=function(i){try{return qf.decodeString(i,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=()=>Xg().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof ef>"u")return;const i=ef.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ty=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=i&&Yf(i[1]);return n&&JSON.parse(n)},jl=()=>{try{return qg()||Zg()||ey()||ty()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ny=i=>{var n,s;return(s=(n=jl())==null?void 0:n.emulatorHosts)==null?void 0:s[i]},Qf=()=>{var i;return(i=jl())==null?void 0:i.config},Xf=i=>{var n;return(n=jl())==null?void 0:n[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}wrapCallback(n){return(s,c)=>{s?this.reject(s):this.resolve(c),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(s):n(s,c))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ry(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function sy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eh(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oy(){const i=Ye();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function th(){try{return typeof indexedDB=="object"}catch{return!1}}function nh(){return new Promise((i,n)=>{try{let s=!0;const c="validate-browser-context-for-indexeddb-analytics-module",d=self.indexedDB.open(c);d.onsuccess=()=>{d.result.close(),s||self.indexedDB.deleteDatabase(c),i(!0)},d.onupgradeneeded=()=>{s=!1},d.onerror=()=>{var f;n(((f=d.error)==null?void 0:f.message)||"")}}catch(s){n(s)}})}function ay(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="FirebaseError";class Dt extends Error{constructor(n,s,c){super(s),this.code=n,this.customData=c,this.name=ly,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(n,s,c){this.service=n,this.serviceName=s,this.errors=c}create(n,...s){const c=s[0]||{},d=`${this.service}/${n}`,f=this.errors[n],p=f?cy(f,c):"Error",g=`${this.serviceName}: ${p} (${d}).`;return new Dt(d,g,c)}}function cy(i,n){try{let s=0,c="";for(;s<i.length;){const d=i.indexOf("{$",s);if(d===-1){c+=i.substring(s);break}const f=i.indexOf("}",d+2);if(f===-1){c+=i.substring(s);break}const p=i.substring(d+2,f),g=n[p];c+=i.substring(s,d)+(g!=null?String(g):`<${p}?>`),s=f+1}return c}catch{return i}}function uy(i){for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n))return!1;return!0}function Hn(i,n){if(i===n)return!0;const s=Object.keys(i),c=Object.keys(n);for(const d of s){if(!c.includes(d))return!1;const f=i[d],p=n[d];if(tf(f)&&tf(p)){if(!Hn(f,p))return!1}else if(f!==p)return!1}for(const d of c)if(!s.includes(d))return!1;return!0}function tf(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(i){const n=[];for(const[s,c]of Object.entries(i))Array.isArray(c)?c.forEach(d=>{n.push(encodeURIComponent(s)+"="+encodeURIComponent(d))}):n.push(encodeURIComponent(s)+"="+encodeURIComponent(c));return n.length?"&"+n.join("&"):""}function ms(i){const n={};return i.replace(/^\?/,"").split("&").forEach(c=>{if(c){const[d,f]=c.split("=");n[decodeURIComponent(d)]=decodeURIComponent(f)}}),n}function gs(i){const n=i.indexOf("?");if(!n)return"";const s=i.indexOf("#",n);return i.substring(n,s>0?s:void 0)}function dy(i,n){const s=new fy(i,n);return s.subscribe.bind(s)}class fy{constructor(n,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{n(this)}).catch(c=>{this.error(c)})}next(n){this.forEachObserver(s=>{s.next(n)})}error(n){this.forEachObserver(s=>{s.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,s,c){let d;if(n===void 0&&s===void 0&&c===void 0)throw new Error("Missing Observer.");hy(n,["next","error","complete"])?d=n:d={next:n,error:s,complete:c},d.next===void 0&&(d.next=rl),d.error===void 0&&(d.error=rl),d.complete===void 0&&(d.complete=rl);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch{}}),this.observers.push(d),f}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,n)}sendOne(n,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{s(this.observers[n])}catch(c){typeof console<"u"&&console.error&&console.error(c)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hy(i,n){if(typeof i!="object"||i===null)return!1;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}function rl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=1e3,my=2,gy=14400*1e3,yy=.5;function nf(i,n=py,s=my){const c=n*Math.pow(s,i),d=Math.round(yy*c*(Math.random()-.5)*2);return Math.min(gy,c+d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vy(i){return(await fetch(i,{credentials:"include"})).ok}class Lt{constructor(n,s,c){this.name=n,this.instanceFactory=s,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(n,s){this.name=n,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const s=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(s)){const c=new Zf;if(this.instancesDeferred.set(s,c),this.isInitialized(s)||this.shouldAutoInitialize())try{const d=this.getOrInitializeService({instanceIdentifier:s});d&&c.resolve(d)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(n){const s=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),c=(n==null?void 0:n.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(d){if(c)return null;throw d}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(Sy(n))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[s,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(s);try{const f=this.getOrInitializeService({instanceIdentifier:d});c.resolve(f)}catch{}}}}clearInstance(n=zn){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...n.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=zn){return this.instances.has(n)}getOptions(n=zn){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:s={}}=n,c=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const d=this.getOrInitializeService({instanceIdentifier:c,options:s});for(const[f,p]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(f);c===g&&p.resolve(d)}return d}onInit(n,s){const c=this.normalizeInstanceIdentifier(s),d=this.onInitCallbacks.get(c)??new Set;d.add(n),this.onInitCallbacks.set(c,d);const f=this.instances.get(c);return f&&n(f,c),()=>{d.delete(n)}}invokeOnInitCallbacks(n,s){const c=this.onInitCallbacks.get(s);if(c)for(const d of c)try{d(n,s)}catch{}}getOrInitializeService({instanceIdentifier:n,options:s={}}){let c=this.instances.get(n);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:xy(n),options:s}),this.instances.set(n,c),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(c,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,c)}catch{}return c||null}normalizeInstanceIdentifier(n=zn){return this.component?this.component.multipleInstances?n:zn:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xy(i){return i===zn?void 0:i}function Sy(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const s=this.getProvider(n.name);if(s.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);s.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const s=new wy(n,this);return this.providers.set(n,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(_e||(_e={}));const _y={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Ey=_e.INFO,Ny={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Cy=(i,n,...s)=>{if(n<i.logLevel)return;const c=new Date().toISOString(),d=Ny[n];if(d)console[d](`[${c}]  ${i.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Pl{constructor(n){this.name=n,this._logLevel=Ey,this._logHandler=Cy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in _e))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?_y[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...n),this._logHandler(this,_e.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...n),this._logHandler(this,_e.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...n),this._logHandler(this,_e.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...n),this._logHandler(this,_e.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...n),this._logHandler(this,_e.ERROR,...n)}}const Iy=(i,n)=>n.some(s=>i instanceof s);let rf,sf;function Ty(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jy(){return sf||(sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rh=new WeakMap,vl=new WeakMap,sh=new WeakMap,sl=new WeakMap,Rl=new WeakMap;function Ay(i){const n=new Promise((s,c)=>{const d=()=>{i.removeEventListener("success",f),i.removeEventListener("error",p)},f=()=>{s(En(i.result)),d()},p=()=>{c(i.error),d()};i.addEventListener("success",f),i.addEventListener("error",p)});return n.then(s=>{s instanceof IDBCursor&&rh.set(s,i)}).catch(()=>{}),Rl.set(n,i),n}function Py(i){if(vl.has(i))return;const n=new Promise((s,c)=>{const d=()=>{i.removeEventListener("complete",f),i.removeEventListener("error",p),i.removeEventListener("abort",p)},f=()=>{s(),d()},p=()=>{c(i.error||new DOMException("AbortError","AbortError")),d()};i.addEventListener("complete",f),i.addEventListener("error",p),i.addEventListener("abort",p)});vl.set(i,n)}let wl={get(i,n,s){if(i instanceof IDBTransaction){if(n==="done")return vl.get(i);if(n==="objectStoreNames")return i.objectStoreNames||sh.get(i);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return En(i[n])},set(i,n,s){return i[n]=s,!0},has(i,n){return i instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in i}};function Ry(i){wl=i(wl)}function by(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...s){const c=i.call(il(this),n,...s);return sh.set(c,n.sort?n.sort():[n]),En(c)}:jy().includes(i)?function(...n){return i.apply(il(this),n),En(rh.get(this))}:function(...n){return En(i.apply(il(this),n))}}function Ly(i){return typeof i=="function"?by(i):(i instanceof IDBTransaction&&Py(i),Iy(i,Ty())?new Proxy(i,wl):i)}function En(i){if(i instanceof IDBRequest)return Ay(i);if(sl.has(i))return sl.get(i);const n=Ly(i);return n!==i&&(sl.set(i,n),Rl.set(n,i)),n}const il=i=>Rl.get(i);function ih(i,n,{blocked:s,upgrade:c,blocking:d,terminated:f}={}){const p=indexedDB.open(i,n),g=En(p);return c&&p.addEventListener("upgradeneeded",y=>{c(En(p.result),y.oldVersion,y.newVersion,En(p.transaction),y)}),s&&p.addEventListener("blocked",y=>s(y.oldVersion,y.newVersion,y)),g.then(y=>{f&&y.addEventListener("close",()=>f()),d&&y.addEventListener("versionchange",k=>d(k.oldVersion,k.newVersion,k))}).catch(()=>{}),g}const Dy=["get","getKey","getAll","getAllKeys","count"],Oy=["put","add","delete","clear"],ol=new Map;function of(i,n){if(!(i instanceof IDBDatabase&&!(n in i)&&typeof n=="string"))return;if(ol.get(n))return ol.get(n);const s=n.replace(/FromIndex$/,""),c=n!==s,d=Oy.includes(s);if(!(s in(c?IDBIndex:IDBObjectStore).prototype)||!(d||Dy.includes(s)))return;const f=async function(p,...g){const y=this.transaction(p,d?"readwrite":"readonly");let k=y.store;return c&&(k=k.index(g.shift())),(await Promise.all([k[s](...g),d&&y.done]))[0]};return ol.set(n,f),f}Ry(i=>({...i,get:(n,s,c)=>of(n,s)||i.get(n,s,c),has:(n,s)=>!!of(n,s)||i.has(n,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(Fy(s)){const c=s.getImmediate();return`${c.library}/${c.version}`}else return null}).filter(s=>s).join(" ")}}function Fy(i){const n=i.getComponent();return(n==null?void 0:n.type)==="VERSION"}const xl="@firebase/app",af="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Pl("@firebase/app"),Uy="@firebase/app-compat",zy="@firebase/analytics-compat",$y="@firebase/analytics",By="@firebase/app-check-compat",Vy="@firebase/app-check",Hy="@firebase/auth",Wy="@firebase/auth-compat",Gy="@firebase/database",Ky="@firebase/data-connect",qy="@firebase/database-compat",Jy="@firebase/functions",Yy="@firebase/functions-compat",Qy="@firebase/installations",Xy="@firebase/installations-compat",Zy="@firebase/messaging",ev="@firebase/messaging-compat",tv="@firebase/performance",nv="@firebase/performance-compat",rv="@firebase/remote-config",sv="@firebase/remote-config-compat",iv="@firebase/storage",ov="@firebase/storage-compat",av="@firebase/firestore",lv="@firebase/ai",cv="@firebase/firestore-compat",uv="firebase",dv="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="[DEFAULT]",fv={[xl]:"fire-core",[Uy]:"fire-core-compat",[$y]:"fire-analytics",[zy]:"fire-analytics-compat",[Vy]:"fire-app-check",[By]:"fire-app-check-compat",[Hy]:"fire-auth",[Wy]:"fire-auth-compat",[Gy]:"fire-rtdb",[Ky]:"fire-data-connect",[qy]:"fire-rtdb-compat",[Jy]:"fire-fn",[Yy]:"fire-fn-compat",[Qy]:"fire-iid",[Xy]:"fire-iid-compat",[Zy]:"fire-fcm",[ev]:"fire-fcm-compat",[tv]:"fire-perf",[nv]:"fire-perf-compat",[rv]:"fire-rc",[sv]:"fire-rc-compat",[iv]:"fire-gcs",[ov]:"fire-gcs-compat",[av]:"fire-fst",[cv]:"fire-fst-compat",[lv]:"fire-vertex","fire-js":"fire-js",[uv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,hv=new Map,kl=new Map;function lf(i,n){try{i.container.addComponent(n)}catch(s){Jt.debug(`Component ${n.name} failed to register with FirebaseApp ${i.name}`,s)}}function Yt(i){const n=i.name;if(kl.has(n))return Jt.debug(`There were multiple attempts to register component ${n}.`),!1;kl.set(n,i);for(const s of Vi.values())lf(s,i);for(const s of hv.values())lf(s,i);return!0}function Ir(i,n){const s=i.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),i.container.getProvider(n)}function gt(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new Jn("app","Firebase",pv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(n,s,c){this._isDeleted=!1,this._options={...n},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=dv;function oh(i,n={}){let s=i;typeof n!="object"&&(n={name:n});const c={name:Sl,automaticDataCollectionEnabled:!0,...n},d=c.name;if(typeof d!="string"||!d)throw Wt.create("bad-app-name",{appName:String(d)});if(s||(s=Qf()),!s)throw Wt.create("no-options");const f=Vi.get(d);if(f)if(Hn(s,f.options)){if(Hn(c,f.config))return f;throw Wt.create("duplicate-app",{appName:d,mismatchedParam:"config",oldValue:JSON.stringify(f.config),newValue:JSON.stringify(c)})}else throw Wt.create("duplicate-app",{appName:d,mismatchedParam:"options",oldValue:JSON.stringify(f.options),newValue:JSON.stringify(s)});const p=new ky(d);for(const y of kl.values())p.addComponent(y);const g=new mv(s,c,p);return Vi.set(d,g),g}function ah(i=Sl){const n=Vi.get(i);if(!n&&i===Sl&&Qf())return oh();if(!n)throw Wt.create("no-app",{appName:i});return n}function Rt(i,n,s){let c=fv[i]??i;s&&(c+=`-${s}`);const d=c.match(/\s|\//),f=n.match(/\s|\//);if(d||f){const p=[`Unable to register library "${c}" with version "${n}":`];d&&p.push(`library name "${c}" contains illegal characters (whitespace or "/")`),d&&f&&p.push("and"),f&&p.push(`version name "${n}" contains illegal characters (whitespace or "/")`),Jt.warn(p.join(" "));return}Yt(new Lt(`${c}-version`,()=>({library:c,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebase-heartbeat-database",yv=1,vs="firebase-heartbeat-store";let al=null;function lh(){return al||(al=ih(gv,yv,{upgrade:(i,n)=>{switch(n){case 0:try{i.createObjectStore(vs)}catch(s){console.warn(s)}}}}).catch(i=>{throw Wt.create("idb-open",{originalErrorMessage:i.message})})),al}async function vv(i){try{const s=(await lh()).transaction(vs),c=await s.objectStore(vs).get(ch(i));return await s.done,c}catch(n){if(n instanceof Dt)Jt.warn(n.message);else{const s=Wt.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(s.message)}}}async function cf(i,n){try{const c=(await lh()).transaction(vs,"readwrite");await c.objectStore(vs).put(n,ch(i)),await c.done}catch(s){if(s instanceof Dt)Jt.warn(s.message);else{const c=Wt.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});Jt.warn(c.message)}}}function ch(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=1024,xv=30;class Sv{constructor(n){this.container=n,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new _v(s),this._heartbeatsCachePromise=this._storage.read().then(c=>(this._heartbeatsCache=c,c))}async triggerHeartbeat(){var n,s;try{const d=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=uf();if(((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(p=>p.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:d}),this._heartbeatsCache.heartbeats.length>xv){const p=Ev(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(p,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(c){Jt.warn(c)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=uf(),{heartbeatsToSend:c,unsentEntries:d}=kv(this._heartbeatsCache.heartbeats),f=Jf(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=s,d.length>0?(this._heartbeatsCache.heartbeats=d,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(s){return Jt.warn(s),""}}}function uf(){return new Date().toISOString().substring(0,10)}function kv(i,n=wv){const s=[];let c=i.slice();for(const d of i){const f=s.find(p=>p.agent===d.agent);if(f){if(f.dates.push(d.date),df(s)>n){f.dates.pop();break}}else if(s.push({agent:d.agent,dates:[d.date]}),df(s)>n){s.pop();break}c=c.slice(1)}return{heartbeatsToSend:s,unsentEntries:c}}class _v{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return th()?nh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await vv(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const c=await this.read();return cf(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??c.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const c=await this.read();return cf(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...n.heartbeats]})}else return}}function df(i){return Jf(JSON.stringify({version:2,heartbeats:i})).length}function Ev(i){if(i.length===0)return-1;let n=0,s=i[0].date;for(let c=1;c<i.length;c++)i[c].date<s&&(s=i[c].date,n=c);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(i){Yt(new Lt("platform-logger",n=>new My(n),"PRIVATE")),Yt(new Lt("heartbeat",n=>new Sv(n),"PRIVATE")),Rt(xl,af,i),Rt(xl,af,"esm2020"),Rt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nv("");var Cv="firebase",Iv="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(Cv,Iv,"app");const uh="@firebase/installations",bl="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=1e4,fh=`w:${bl}`,hh="FIS_v2",Tv="https://firebaseinstallations.googleapis.com/v1",jv=3600*1e3,Av="installations",Pv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wn=new Jn(Av,Pv,Rv);function ph(i){return i instanceof Dt&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh({projectId:i}){return`${Tv}/projects/${i}/installations`}function gh(i){return{token:i.token,requestStatus:2,expiresIn:Lv(i.expiresIn),creationTime:Date.now()}}async function yh(i,n){const c=(await n.json()).error;return Wn.create("request-failed",{requestName:i,serverCode:c.code,serverMessage:c.message,serverStatus:c.status})}function vh({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function bv(i,{refreshToken:n}){const s=vh(i);return s.append("Authorization",Dv(n)),s}async function wh(i){const n=await i();return n.status>=500&&n.status<600?i():n}function Lv(i){return Number(i.replace("s","000"))}function Dv(i){return`${hh} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov({appConfig:i,heartbeatServiceProvider:n},{fid:s}){const c=mh(i),d=vh(i),f=n.getImmediate({optional:!0});if(f){const k=await f.getHeartbeatsHeader();k&&d.append("x-firebase-client",k)}const p={fid:s,authVersion:hh,appId:i.appId,sdkVersion:fh},g={method:"POST",headers:d,body:JSON.stringify(p)},y=await wh(()=>fetch(c,g));if(y.ok){const k=await y.json();return{fid:k.fid||s,registrationStatus:2,refreshToken:k.refreshToken,authToken:gh(k.authToken)}}else throw await yh("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(i){return new Promise(n=>{setTimeout(n,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=/^[cdef][\w-]{21}$/,_l="";function Uv(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const s=zv(i);return Fv.test(s)?s:_l}catch{return _l}}function zv(i){return Mv(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function kh(i,n){const s=Zi(i);_h(s,n),$v(s,n)}function _h(i,n){const s=Sh.get(i);if(s)for(const c of s)c(n)}function $v(i,n){const s=Bv();s&&s.postMessage({key:i,fid:n}),Vv()}let $n=null;function Bv(){return!$n&&"BroadcastChannel"in self&&($n=new BroadcastChannel("[Firebase] FID Change"),$n.onmessage=i=>{_h(i.data.key,i.data.fid)}),$n}function Vv(){Sh.size===0&&$n&&($n.close(),$n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firebase-installations-database",Wv=1,Gn="firebase-installations-store";let ll=null;function Ll(){return ll||(ll=ih(Hv,Wv,{upgrade:(i,n)=>{switch(n){case 0:i.createObjectStore(Gn)}}})),ll}async function Hi(i,n){const s=Zi(i),d=(await Ll()).transaction(Gn,"readwrite"),f=d.objectStore(Gn),p=await f.get(s);return await f.put(n,s),await d.done,(!p||p.fid!==n.fid)&&kh(i,n.fid),n}async function Eh(i){const n=Zi(i),c=(await Ll()).transaction(Gn,"readwrite");await c.objectStore(Gn).delete(n),await c.done}async function eo(i,n){const s=Zi(i),d=(await Ll()).transaction(Gn,"readwrite"),f=d.objectStore(Gn),p=await f.get(s),g=n(p);return g===void 0?await f.delete(s):await f.put(g,s),await d.done,g&&(!p||p.fid!==g.fid)&&kh(i,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(i){let n;const s=await eo(i.appConfig,c=>{const d=Gv(c),f=Kv(i,d);return n=f.registrationPromise,f.installationEntry});return s.fid===_l?{installationEntry:await n}:{installationEntry:s,registrationPromise:n}}function Gv(i){const n=i||{fid:Uv(),registrationStatus:0};return Nh(n)}function Kv(i,n){if(n.registrationStatus===0){if(!navigator.onLine){const d=Promise.reject(Wn.create("app-offline"));return{installationEntry:n,registrationPromise:d}}const s={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},c=qv(i,s);return{installationEntry:s,registrationPromise:c}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:Jv(i)}:{installationEntry:n}}async function qv(i,n){try{const s=await Ov(i,n);return Hi(i.appConfig,s)}catch(s){throw ph(s)&&s.customData.serverCode===409?await Eh(i.appConfig):await Hi(i.appConfig,{fid:n.fid,registrationStatus:0}),s}}async function Jv(i){let n=await ff(i.appConfig);for(;n.registrationStatus===1;)await xh(100),n=await ff(i.appConfig);if(n.registrationStatus===0){const{installationEntry:s,registrationPromise:c}=await Dl(i);return c||s}return n}function ff(i){return eo(i,n=>{if(!n)throw Wn.create("installation-not-found");return Nh(n)})}function Nh(i){return Yv(i)?{fid:i.fid,registrationStatus:0}:i}function Yv(i){return i.registrationStatus===1&&i.registrationTime+dh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv({appConfig:i,heartbeatServiceProvider:n},s){const c=Xv(i,s),d=bv(i,s),f=n.getImmediate({optional:!0});if(f){const k=await f.getHeartbeatsHeader();k&&d.append("x-firebase-client",k)}const p={installation:{sdkVersion:fh,appId:i.appId}},g={method:"POST",headers:d,body:JSON.stringify(p)},y=await wh(()=>fetch(c,g));if(y.ok){const k=await y.json();return gh(k)}else throw await yh("Generate Auth Token",y)}function Xv(i,{fid:n}){return`${mh(i)}/${n}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(i,n=!1){let s;const c=await eo(i.appConfig,f=>{if(!Ch(f))throw Wn.create("not-registered");const p=f.authToken;if(!n&&t0(p))return f;if(p.requestStatus===1)return s=Zv(i,n),f;{if(!navigator.onLine)throw Wn.create("app-offline");const g=r0(f);return s=e0(i,g),g}});return s?await s:c.authToken}async function Zv(i,n){let s=await hf(i.appConfig);for(;s.authToken.requestStatus===1;)await xh(100),s=await hf(i.appConfig);const c=s.authToken;return c.requestStatus===0?Ol(i,n):c}function hf(i){return eo(i,n=>{if(!Ch(n))throw Wn.create("not-registered");const s=n.authToken;return s0(s)?{...n,authToken:{requestStatus:0}}:n})}async function e0(i,n){try{const s=await Qv(i,n),c={...n,authToken:s};return await Hi(i.appConfig,c),s}catch(s){if(ph(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Eh(i.appConfig);else{const c={...n,authToken:{requestStatus:0}};await Hi(i.appConfig,c)}throw s}}function Ch(i){return i!==void 0&&i.registrationStatus===2}function t0(i){return i.requestStatus===2&&!n0(i)}function n0(i){const n=Date.now();return n<i.creationTime||i.creationTime+i.expiresIn<n+jv}function r0(i){const n={requestStatus:1,requestTime:Date.now()};return{...i,authToken:n}}function s0(i){return i.requestStatus===1&&i.requestTime+dh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(i){const n=i,{installationEntry:s,registrationPromise:c}=await Dl(n);return c?c.catch(console.error):Ol(n).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(i,n=!1){const s=i;return await a0(s),(await Ol(s,n)).token}async function a0(i){const{registrationPromise:n}=await Dl(i);n&&await n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(i){if(!i||!i.options)throw cl("App Configuration");if(!i.name)throw cl("App Name");const n=["projectId","apiKey","appId"];for(const s of n)if(!i.options[s])throw cl(s);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function cl(i){return Wn.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="installations",c0="installations-internal",u0=i=>{const n=i.getProvider("app").getImmediate(),s=l0(n),c=Ir(n,"heartbeat");return{app:n,appConfig:s,heartbeatServiceProvider:c,_delete:()=>Promise.resolve()}},d0=i=>{const n=i.getProvider("app").getImmediate(),s=Ir(n,Ih).getImmediate();return{getId:()=>i0(s),getToken:d=>o0(s,d)}};function f0(){Yt(new Lt(Ih,u0,"PUBLIC")),Yt(new Lt(c0,d0,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */f0();Rt(uh,bl);Rt(uh,bl,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="analytics",h0="firebase_id",p0="origin",m0=60*1e3,g0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ml="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Pl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},lt=new Jn("analytics","Analytics",y0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(i){if(!i.startsWith(Ml)){const n=lt.create("invalid-gtag-resource",{gtagURL:i});return Je.warn(n.message),""}return i}function Th(i){return Promise.all(i.map(n=>n.catch(s=>s)))}function w0(i,n){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(i,n)),s}function x0(i,n){const s=w0("firebase-js-sdk-policy",{createScriptURL:v0}),c=document.createElement("script"),d=`${Ml}?l=${i}&id=${n}`;c.src=s?s==null?void 0:s.createScriptURL(d):d,c.async=!0,document.head.appendChild(c)}function S0(i){let n=[];return Array.isArray(window[i])?n=window[i]:window[i]=n,n}async function k0(i,n,s,c,d,f){const p=c[d];try{if(p)await n[p];else{const y=(await Th(s)).find(k=>k.measurementId===d);y&&await n[y.appId]}}catch(g){Je.error(g)}i("config",d,f)}async function _0(i,n,s,c,d){try{let f=[];if(d&&d.send_to){let p=d.send_to;Array.isArray(p)||(p=[p]);const g=await Th(s);for(const y of p){const k=g.find(T=>T.measurementId===y),L=k&&n[k.appId];if(L)f.push(L);else{f=[];break}}}f.length===0&&(f=Object.values(n)),await Promise.all(f),i("event",c,d||{})}catch(f){Je.error(f)}}function E0(i,n,s,c){async function d(f,...p){try{if(f==="event"){const[g,y]=p;await _0(i,n,s,g,y)}else if(f==="config"){const[g,y]=p;await k0(i,n,s,c,g,y)}else if(f==="consent"){const[g,y]=p;i("consent",g,y)}else if(f==="get"){const[g,y,k]=p;i("get",g,y,k)}else if(f==="set"){const[g]=p;i("set",g)}else i(f,...p)}catch(g){Je.error(g)}}return d}function N0(i,n,s,c,d){let f=function(...p){window[c].push(arguments)};return window[d]&&typeof window[d]=="function"&&(f=window[d]),window[d]=E0(f,i,n,s),{gtagCore:f,wrappedGtag:window[d]}}function C0(i){const n=window.document.getElementsByTagName("script");for(const s of Object.values(n))if(s.src&&s.src.includes(Ml)&&s.src.includes(i))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=30,T0=1e3;class j0{constructor(n={},s=T0){this.throttleMetadata=n,this.intervalMillis=s}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,s){this.throttleMetadata[n]=s}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const jh=new j0;function A0(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function P0(i){var p;const{appId:n,apiKey:s}=i,c={method:"GET",headers:A0(s)},d=g0.replace("{app-id}",n),f=await fetch(d,c);if(f.status!==200&&f.status!==304){let g="";try{const y=await f.json();(p=y.error)!=null&&p.message&&(g=y.error.message)}catch{}throw lt.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function R0(i,n=jh,s){const{appId:c,apiKey:d,measurementId:f}=i.options;if(!c)throw lt.create("no-app-id");if(!d){if(f)return{measurementId:f,appId:c};throw lt.create("no-api-key")}const p=n.getThrottleMetadata(c)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new D0;return setTimeout(async()=>{g.abort()},m0),Ah({appId:c,apiKey:d,measurementId:f},p,g,n)}async function Ah(i,{throttleEndTimeMillis:n,backoffCount:s},c,d=jh){var g;const{appId:f,measurementId:p}=i;try{await b0(c,n)}catch(y){if(p)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:p};throw y}try{const y=await P0(i);return d.deleteThrottleMetadata(f),y}catch(y){const k=y;if(!L0(k)){if(d.deleteThrottleMetadata(f),p)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${k==null?void 0:k.message}]`),{appId:f,measurementId:p};throw y}const L=Number((g=k==null?void 0:k.customData)==null?void 0:g.httpStatus)===503?nf(s,d.intervalMillis,I0):nf(s,d.intervalMillis),T={throttleEndTimeMillis:Date.now()+L,backoffCount:s+1};return d.setThrottleMetadata(f,T),Je.debug(`Calling attemptFetch again in ${L} millis`),Ah(i,T,c,d)}}function b0(i,n){return new Promise((s,c)=>{const d=Math.max(n-Date.now(),0),f=setTimeout(s,d);i.addEventListener(()=>{clearTimeout(f),c(lt.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function L0(i){if(!(i instanceof Dt)||!i.customData)return!1;const n=Number(i.customData.httpStatus);return n===429||n===500||n===503||n===504}class D0{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function O0(i,n,s,c,d){if(d&&d.global){i("event",s,c);return}else{const f=await n,p={...c,send_to:f};i("event",s,p)}}async function M0(i,n,s,c){if(c&&c.global){const d={};for(const f of Object.keys(s))d[`user_properties.${f}`]=s[f];return i("set",d),Promise.resolve()}else{const d=await n;i("config",d,{update:!0,user_properties:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(){if(th())try{await nh()}catch(i){return Je.warn(lt.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return Je.warn(lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function U0(i,n,s,c,d,f,p){const g=R0(i);g.then(D=>{s[D.measurementId]=D.appId,i.options.measurementId&&D.measurementId!==i.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>Je.error(D)),n.push(g);const y=F0().then(D=>{if(D)return c.getId()}),[k,L]=await Promise.all([g,y]);C0(f)||x0(f,k.measurementId),d("js",new Date);const T=(p==null?void 0:p.config)??{};return T[p0]="firebase",T.update=!0,L!=null&&(T[h0]=L),d("config",k.measurementId,T),k.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(n){this.app=n}_delete(){return delete Sr[this.app.options.appId],Promise.resolve()}}let Sr={},pf=[];const mf={};let ul="dataLayer",$0="gtag",gf,Fl,yf=!1;function B0(){const i=[];if(eh()&&i.push("This is a browser extension environment."),ay()||i.push("Cookies are not available."),i.length>0){const n=i.map((c,d)=>`(${d+1}) ${c}`).join(" "),s=lt.create("invalid-analytics-context",{errorInfo:n});Je.warn(s.message)}}function V0(i,n,s){B0();const c=i.options.appId;if(!c)throw lt.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw lt.create("no-api-key");if(Sr[c]!=null)throw lt.create("already-exists",{id:c});if(!yf){S0(ul);const{wrappedGtag:f,gtagCore:p}=N0(Sr,pf,mf,ul,$0);Fl=f,gf=p,yf=!0}return Sr[c]=U0(i,pf,mf,n,gf,ul,s),new z0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(i=ah()){i=ct(i);const n=Ir(i,Wi);return n.isInitialized()?n.getImmediate():W0(i)}function W0(i,n={}){const s=Ir(i,Wi);if(s.isInitialized()){const d=s.getImmediate();if(Hn(n,s.getOptions()))return d;throw lt.create("already-initialized")}return s.initialize({options:n})}function G0(i,n,s){i=ct(i),M0(Fl,Sr[i.app.options.appId],n,s).catch(c=>Je.error(c))}function K0(i,n,s,c){i=ct(i),O0(Fl,Sr[i.app.options.appId],n,s,c).catch(d=>Je.error(d))}const vf="@firebase/analytics",wf="0.10.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(){Yt(new Lt(Wi,(n,{options:s})=>{const c=n.getProvider("app").getImmediate(),d=n.getProvider("installations-internal").getImmediate();return V0(c,d,s)},"PUBLIC")),Yt(new Lt("analytics-internal",i,"PRIVATE")),Rt(vf,wf),Rt(vf,wf,"esm2020");function i(n){try{const s=n.getProvider(Wi).getImmediate();return{logEvent:(c,d,f)=>K0(s,c,d,f),setUserProperties:(c,d)=>G0(s,c,d)}}catch(s){throw lt.create("interop-component-reg-failed",{reason:s})}}}q0();function Ph(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J0=Ph,Rh=new Jn("auth","Firebase",Ph());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Pl("@firebase/auth");function bh(i,...n){Gi.logLevel<=_e.WARN&&Gi.warn(`Auth (${Ss}): ${i}`,...n)}function Ui(i,...n){Gi.logLevel<=_e.ERROR&&Gi.error(`Auth (${Ss}): ${i}`,...n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(i,...n){throw zl(i,...n)}function Ct(i,...n){return zl(i,...n)}function Ul(i,n,s){const c={...J0(),[n]:s};return new Jn("auth","Firebase",c).create(n,{appName:i.name})}function qt(i){return Ul(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Y0(i,n,s){const c=s;if(!(n instanceof c))throw c.name!==n.constructor.name&&yt(i,"argument-error"),Ul(i,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zl(i,...n){if(typeof i!="string"){const s=n[0],c=[...n.slice(1)];return c[0]&&(c[0].appName=i.name),i._errorFactory.create(s,...c)}return Rh.create(i,...n)}function oe(i,n,...s){if(!i)throw zl(n,...s)}function Gt(i){const n="INTERNAL ASSERTION FAILED: "+i;throw Ui(n),new Error(n)}function Qt(i,n){i||Gt(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Q0(){return xf()==="http:"||xf()==="https:"}function xf(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q0()||eh()||"connection"in navigator)?navigator.onLine:!0}function Z0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(n,s){this.shortDelay=n,this.longDelay=s,Qt(s>n,"Short delay should be less than long delay!"),this.isMobile=ry()||iy()}get(){return X0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(i,n){Qt(i.emulator,"Emulator should always be set here");const{url:s}=i.emulator;return n?`${s}${n.startsWith("/")?n.slice(1):n}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{static initialize(n,s,c){this.fetchImpl=n,s&&(this.headersImpl=s),c&&(this.responseImpl=c)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],n1=new ks(3e4,6e4);function Nn(i,n){return i.tenantId&&!n.tenantId?{...n,tenantId:i.tenantId}:n}async function Xt(i,n,s,c,d={}){return Dh(i,d,async()=>{let f={},p={};c&&(n==="GET"?p=c:f={body:JSON.stringify(c)});const g=xs({...p,key:i.config.apiKey}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const k={method:n,headers:y,...f};return sy()||(k.referrerPolicy="strict-origin-when-cross-origin"),i.emulatorConfig&&Al(i.emulatorConfig.host)&&(k.credentials="include"),Lh.fetch()(await Oh(i,i.config.apiHost,s,g),k)})}async function Dh(i,n,s){i._canInitEmulator=!1;const c={...e1,...n};try{const d=new s1(i),f=await Promise.race([s(),d.promise]);d.clearNetworkTimeout();const p=await f.json();if("needConfirmation"in p)throw Mi(i,"account-exists-with-different-credential",p);if(f.ok&&!("errorMessage"in p))return p;{const g=f.ok?p.errorMessage:p.error.message,[y,k]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(i,"credential-already-in-use",p);if(y==="EMAIL_EXISTS")throw Mi(i,"email-already-in-use",p);if(y==="USER_DISABLED")throw Mi(i,"user-disabled",p);const L=c[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw Ul(i,L,k);yt(i,L)}}catch(d){if(d instanceof Dt)throw d;yt(i,"network-request-failed",{message:String(d)})}}async function _s(i,n,s,c,d={}){const f=await Xt(i,n,s,c,d);return"mfaPendingCredential"in f&&yt(i,"multi-factor-auth-required",{_serverResponse:f}),f}async function Oh(i,n,s,c){const d=`${n}${s}?${c}`,f=i,p=f.config.emulator?$l(i.config,d):`${i.config.apiScheme}://${d}`;return t1.includes(s)&&(await f._persistenceManagerAvailable,f._getPersistenceType()==="COOKIE")?f._getPersistence()._getFinalTarget(p).toString():p}function r1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class s1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((s,c)=>{this.timer=setTimeout(()=>c(Ct(this.auth,"network-request-failed")),n1.get())})}}function Mi(i,n,s){const c={appName:i.name};s.email&&(c.email=s.email),s.phoneNumber&&(c.phoneNumber=s.phoneNumber);const d=Ct(i,n,c);return d.customData._tokenResponse=s,d}function Sf(i){return i!==void 0&&i.enterprise!==void 0}class i1{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===n)return r1(s.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function o1(i,n){return Xt(i,"GET","/v2/recaptchaConfig",Nn(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(i,n){return Xt(i,"POST","/v1/accounts:delete",n)}async function Ki(i,n){return Xt(i,"POST","/v1/accounts:lookup",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(i){if(i)try{const n=new Date(Number(i));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function l1(i,n=!1){const s=ct(i),c=await s.getIdToken(n),d=Bl(c);oe(d&&d.exp&&d.auth_time&&d.iat,s.auth,"internal-error");const f=typeof d.firebase=="object"?d.firebase:void 0,p=f==null?void 0:f.sign_in_provider;return{claims:d,token:c,authTime:ys(dl(d.auth_time)),issuedAtTime:ys(dl(d.iat)),expirationTime:ys(dl(d.exp)),signInProvider:p||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function dl(i){return Number(i)*1e3}function Bl(i){const[n,s,c]=i.split(".");if(n===void 0||s===void 0||c===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const d=Yf(s);return d?JSON.parse(d):(Ui("Failed to decode base64 JWT payload"),null)}catch(d){return Ui("Caught error parsing JWT payload as JSON",d==null?void 0:d.toString()),null}}function kf(i){const n=Bl(i);return oe(n,"internal-error"),oe(typeof n.exp<"u","internal-error"),oe(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(i,n,s=!1){if(s)return n;try{return await n}catch(c){throw c instanceof Dt&&c1(c)&&i.auth.currentUser===i&&await i.auth.signOut(),c}}function c1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){if(n){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const c=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,c)}}schedule(n=!1){if(!this.isRunning)return;const s=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(n==null?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(n,s){this.createdAt=n,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(i){var T;const n=i.auth,s=await i.getIdToken(),c=await Nr(i,Ki(n,{idToken:s}));oe(c==null?void 0:c.users.length,n,"internal-error");const d=c.users[0];i._notifyReloadListener(d);const f=(T=d.providerUserInfo)!=null&&T.length?Mh(d.providerUserInfo):[],p=f1(i.providerData,f),g=i.isAnonymous,y=!(i.email&&d.passwordHash)&&!(p!=null&&p.length),k=g?y:!1,L={uid:d.localId,displayName:d.displayName||null,photoURL:d.photoUrl||null,email:d.email||null,emailVerified:d.emailVerified||!1,phoneNumber:d.phoneNumber||null,tenantId:d.tenantId||null,providerData:p,metadata:new Nl(d.createdAt,d.lastLoginAt),isAnonymous:k};Object.assign(i,L)}async function d1(i){const n=ct(i);await qi(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function f1(i,n){return[...i.filter(c=>!n.some(d=>d.providerId===c.providerId)),...n]}function Mh(i){return i.map(({providerId:n,...s})=>({providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(i,n){const s=await Dh(i,{},async()=>{const c=xs({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:d,apiKey:f}=i.config,p=await Oh(i,d,"/v1/token",`key=${f}`),g=await i._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:c};return i.emulatorConfig&&Al(i.emulatorConfig.host)&&(y.credentials="include"),Lh.fetch()(p,y)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function p1(i,n){return Xt(i,"POST","/v2/accounts:revokeToken",Nn(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){oe(n.idToken,"internal-error"),oe(typeof n.idToken<"u","internal-error"),oe(typeof n.refreshToken<"u","internal-error");const s="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):kf(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,s)}updateFromIdToken(n){oe(n.length!==0,"internal-error");const s=kf(n);this.updateTokensAndExpiration(n,null,s)}async getToken(n,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,s){const{accessToken:c,refreshToken:d,expiresIn:f}=await h1(n,s);this.updateTokensAndExpiration(c,d,Number(f))}updateTokensAndExpiration(n,s,c){this.refreshToken=s||null,this.accessToken=n||null,this.expirationTime=Date.now()+c*1e3}static fromJSON(n,s){const{refreshToken:c,accessToken:d,expirationTime:f}=s,p=new kr;return c&&(oe(typeof c=="string","internal-error",{appName:n}),p.refreshToken=c),d&&(oe(typeof d=="string","internal-error",{appName:n}),p.accessToken=d),f&&(oe(typeof f=="number","internal-error",{appName:n}),p.expirationTime=f),p}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new kr,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(i,n){oe(typeof i=="string"||typeof i>"u","internal-error",{appName:n})}class Nt{constructor({uid:n,auth:s,stsTokenManager:c,...d}){this.providerId="firebase",this.proactiveRefresh=new u1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=c,this.accessToken=c.accessToken,this.displayName=d.displayName||null,this.email=d.email||null,this.emailVerified=d.emailVerified||!1,this.phoneNumber=d.phoneNumber||null,this.photoURL=d.photoURL||null,this.isAnonymous=d.isAnonymous||!1,this.tenantId=d.tenantId||null,this.providerData=d.providerData?[...d.providerData]:[],this.metadata=new Nl(d.createdAt||void 0,d.lastLoginAt||void 0)}async getIdToken(n){const s=await Nr(this,this.stsTokenManager.getToken(this.auth,n));return oe(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(n){return l1(this,n)}reload(){return d1(this)}_assign(n){this!==n&&(oe(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(s=>({...s})),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const s=new Nt({...this,auth:n,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(n){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,s=!1){let c=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),c=!0),s&&await qi(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(qt(this.auth));const n=await this.getIdToken();return await Nr(this,a1(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>({...n})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,s){const c=s.displayName??void 0,d=s.email??void 0,f=s.phoneNumber??void 0,p=s.photoURL??void 0,g=s.tenantId??void 0,y=s._redirectEventId??void 0,k=s.createdAt??void 0,L=s.lastLoginAt??void 0,{uid:T,emailVerified:D,isAnonymous:j,providerData:Y,stsTokenManager:B}=s;oe(T&&B,n,"internal-error");const Q=kr.fromJSON(this.name,B);oe(typeof T=="string",n,"internal-error"),wn(c,n.name),wn(d,n.name),oe(typeof D=="boolean",n,"internal-error"),oe(typeof j=="boolean",n,"internal-error"),wn(f,n.name),wn(p,n.name),wn(g,n.name),wn(y,n.name),wn(k,n.name),wn(L,n.name);const K=new Nt({uid:T,auth:n,email:d,emailVerified:D,displayName:c,isAnonymous:j,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:Q,createdAt:k,lastLoginAt:L});return Y&&Array.isArray(Y)&&(K.providerData=Y.map(H=>({...H}))),y&&(K._redirectEventId=y),K}static async _fromIdTokenResponse(n,s,c=!1){const d=new kr;d.updateFromServerResponse(s);const f=new Nt({uid:s.localId,auth:n,stsTokenManager:d,isAnonymous:c});return await qi(f),f}static async _fromGetAccountInfoResponse(n,s,c){const d=s.users[0];oe(d.localId!==void 0,"internal-error");const f=d.providerUserInfo!==void 0?Mh(d.providerUserInfo):[],p=!(d.email&&d.passwordHash)&&!(f!=null&&f.length),g=new kr;g.updateFromIdToken(c);const y=new Nt({uid:d.localId,auth:n,stsTokenManager:g,isAnonymous:p}),k={uid:d.localId,displayName:d.displayName||null,photoURL:d.photoUrl||null,email:d.email||null,emailVerified:d.emailVerified||!1,phoneNumber:d.phoneNumber||null,tenantId:d.tenantId||null,providerData:f,metadata:new Nl(d.createdAt,d.lastLoginAt),isAnonymous:!(d.email&&d.passwordHash)&&!(f!=null&&f.length)};return Object.assign(y,k),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;function Kt(i){Qt(i instanceof Function,"Expected a class definition");let n=_f.get(i);return n?(Qt(n instanceof i,"Instance stored in cache mismatched with class"),n):(n=new i,_f.set(i,n),n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,s){this.storage[n]=s}async _get(n){const s=this.storage[n];return s===void 0?null:s}async _remove(n){delete this.storage[n]}_addListener(n,s){}_removeListener(n,s){}}Fh.type="NONE";const Ef=Fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(i,n,s){return`firebase:${i}:${n}:${s}`}class _r{constructor(n,s,c){this.persistence=n,this.auth=s,this.userKey=c;const{config:d,name:f}=this.auth;this.fullUserKey=zi(this.userKey,d.apiKey,f),this.fullPersistenceKey=zi("persistence",d.apiKey,f),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const s=await Ki(this.auth,{idToken:n}).catch(()=>{});return s?Nt._fromGetAccountInfoResponse(this.auth,s,n):null}return Nt._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,s,c="authUser"){if(!s.length)return new _r(Kt(Ef),n,c);const d=(await Promise.all(s.map(async k=>{if(await k._isAvailable())return k}))).filter(k=>k);let f=d[0]||Kt(Ef);const p=zi(c,n.config.apiKey,n.name);let g=null;for(const k of s)try{const L=await k._get(p);if(L){let T;if(typeof L=="string"){const D=await Ki(n,{idToken:L}).catch(()=>{});if(!D)break;T=await Nt._fromGetAccountInfoResponse(n,D,L)}else T=Nt._fromJSON(n,L);k!==f&&(g=T),f=k;break}}catch{}const y=d.filter(k=>k._shouldAllowMigration);return!f._shouldAllowMigration||!y.length?new _r(f,n,c):(f=y[0],g&&await f._set(p,g.toJSON()),await Promise.all(s.map(async k=>{if(k!==f)try{await k._remove(p)}catch{}})),new _r(f,n,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(i){const n=i.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(Bh(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(Uh(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(Hh(n))return"Blackberry";if(Wh(n))return"Webos";if(zh(n))return"Safari";if((n.includes("chrome/")||$h(n))&&!n.includes("edge/"))return"Chrome";if(Vh(n))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=i.match(s);if((c==null?void 0:c.length)===2)return c[1]}return"Other"}function Uh(i=Ye()){return/firefox\//i.test(i)}function zh(i=Ye()){const n=i.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function $h(i=Ye()){return/crios\//i.test(i)}function Bh(i=Ye()){return/iemobile/i.test(i)}function Vh(i=Ye()){return/android/i.test(i)}function Hh(i=Ye()){return/blackberry/i.test(i)}function Wh(i=Ye()){return/webos/i.test(i)}function Vl(i=Ye()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function m1(i=Ye()){var n;return Vl(i)&&!!((n=window.navigator)!=null&&n.standalone)}function g1(){return oy()&&document.documentMode===10}function Gh(i=Ye()){return Vl(i)||Vh(i)||Wh(i)||Hh(i)||/windows phone/i.test(i)||Bh(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(i,n=[]){let s;switch(i){case"Browser":s=Nf(Ye());break;case"Worker":s=`${Nf(Ye())}-${i}`;break;default:s=i}const c=n.length?n.join(","):"FirebaseCore-web";return`${s}/JsCore/${Ss}/${c}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,s){const c=f=>new Promise((p,g)=>{try{const y=n(f);p(y)}catch(y){g(y)}});c.onAbort=s,this.queue.push(c);const d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const s=[];try{for(const c of this.queue)await c(n),c.onAbort&&s.push(c.onAbort)}catch(c){s.reverse();for(const d of s)try{d()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:c==null?void 0:c.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(i,n={}){return Xt(i,"GET","/v2/passwordPolicy",Nn(i,n))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=6;class x1{constructor(n){var c;const s=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??w1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((c=n.allowedNonAlphanumericCharacters)==null?void 0:c.join(""))??"",this.forceUpgradeOnSignin=n.forceUpgradeOnSignin??!1,this.schemaVersion=n.schemaVersion}validatePassword(n){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,s),this.validatePasswordCharacterOptions(n,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(n,s){const c=this.customStrengthOptions.minPasswordLength,d=this.customStrengthOptions.maxPasswordLength;c&&(s.meetsMinPasswordLength=n.length>=c),d&&(s.meetsMaxPasswordLength=n.length<=d)}validatePasswordCharacterOptions(n,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let c;for(let d=0;d<n.length;d++)c=n.charAt(d),this.updatePasswordCharacterOptionsStatuses(s,c>="a"&&c<="z",c>="A"&&c<="Z",c>="0"&&c<="9",this.allowedNonAlphanumericCharacters.includes(c))}updatePasswordCharacterOptionsStatuses(n,s,c,d,f){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=c)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=d)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(n,s,c,d){this.app=n,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=c,this.config=d,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cf(this),this.idTokenSubscription=new Cf(this),this.beforeStateQueue=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=d.sdkClientVersion,this._persistenceManagerAvailable=new Promise(f=>this._resolvePersistenceManagerAvailable=f)}_initializeWithPersistence(n,s){return s&&(this._popupRedirectResolver=Kt(s)),this._initializationPromise=this.queue(async()=>{var c,d,f;if(!this._deleted&&(this.persistenceManager=await _r.create(this,n),(c=this._resolvePersistenceManagerAvailable)==null||c.call(this),!this._deleted)){if((d=this._popupRedirectResolver)!=null&&d._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((f=this.currentUser)==null?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const s=await Ki(this,{idToken:n}),c=await Nt._fromGetAccountInfoResponse(this,s,n);await this.directlySetCurrentUser(c)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var f;if(gt(this.app)){const p=this.app.settings.authIdToken;return p?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(p).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let c=s,d=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const p=(f=this.redirectUser)==null?void 0:f._redirectEventId,g=c==null?void 0:c._redirectEventId,y=await this.tryRedirectSignIn(n);(!p||p===g)&&(y!=null&&y.user)&&(c=y.user,d=!0)}if(!c)return this.directlySetCurrentUser(null);if(!c._redirectEventId){if(d)try{await this.beforeStateQueue.runMiddleware(c)}catch(p){c=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(p))}return c?this.reloadAndSetCurrentUserOrClear(c):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===c._redirectEventId?this.directlySetCurrentUser(c):this.reloadAndSetCurrentUserOrClear(c)}async tryRedirectSignIn(n){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(n){try{await qi(n)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=Z0()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(gt(this.app))return Promise.reject(qt(this));const s=n?ct(n):null;return s&&oe(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(n,s=!1){if(!this._deleted)return n&&oe(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return gt(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await v1(this),s=new x1(n);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new Jn("auth","Firebase",n())}onAuthStateChanged(n,s,c){return this.registerStateListener(this.authStateSubscription,n,s,c)}beforeAuthStateChanged(n,s){return this.beforeStateQueue.pushCallback(n,s)}onIdTokenChanged(n,s,c){return this.registerStateListener(this.idTokenSubscription,n,s,c)}authStateReady(){return new Promise((n,s)=>{if(this.currentUser)n();else{const c=this.onAuthStateChanged(()=>{c(),n()},s)}})}async revokeAccessToken(n){if(this.currentUser){const s=await this.currentUser.getIdToken(),c={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:s};this.tenantId!=null&&(c.tenantId=this.tenantId),await p1(this,c)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)==null?void 0:n.toJSON()}}async _setRedirectUser(n,s){const c=await this.getOrInitRedirectPersistenceManager(s);return n===null?c.removeCurrentUser():c.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const s=n&&Kt(n)||this._popupRedirectResolver;oe(s,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Kt(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var s,c;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===n?this._currentUser:((c=this.redirectUser)==null?void 0:c._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,s,c,d){if(this._deleted)return()=>{};const f=typeof s=="function"?s:s.next.bind(s);let p=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(g,this,"internal-error"),g.then(()=>{p||f(this.currentUser)}),typeof s=="function"){const y=n.addObserver(s,c,d);return()=>{p=!0,y()}}else{const y=n.addObserver(s);return()=>{p=!0,y()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Kh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var d;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((d=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:d.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const c=await this._getAppCheckToken();return c&&(n["X-Firebase-AppCheck"]=c),n}async _getAppCheckToken(){var s;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return n!=null&&n.error&&bh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cn(i){return ct(i)}class Cf{constructor(n){this.auth=n,this.observer=null,this.addObserver=dy(s=>this.observer=s)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k1(i){to=i}function qh(i){return to.loadJS(i)}function _1(){return to.recaptchaEnterpriseScript}function E1(){return to.gapiScript}function N1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class C1{constructor(){this.enterprise=new I1}ready(n){n()}execute(n,s){return Promise.resolve("token")}render(n,s){return""}}class I1{ready(n){n()}execute(n,s){return Promise.resolve("token")}render(n,s){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="recaptcha-enterprise",Jh="NO_RECAPTCHA",If="onFirebaseAuthREInstanceReady";class xn{constructor(n){this.type=T1,this.auth=Cn(n)}async verify(n="verify",s=!1){async function c(f){if(!s){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(p,g)=>{o1(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const k=new i1(y);return f.tenantId==null?f._agentRecaptchaConfig=k:f._tenantRecaptchaConfigs[f.tenantId]=k,p(k.siteKey)}}).catch(y=>{g(y)})})}function d(f,p,g){const y=window.grecaptcha;Sf(y)?y.enterprise.ready(()=>{y.enterprise.execute(f,{action:n}).then(k=>{p(k)}).catch(()=>{p(Jh)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new C1().execute("siteKey",{action:"verify"}):new Promise((f,p)=>{c(this.auth).then(async g=>{if(!s&&Sf(window.grecaptcha)&&xn.scriptInjectionDeferred)await xn.scriptInjectionDeferred.promise,d(g,f,p);else{if(typeof window>"u"){p(new Error("RecaptchaVerifier is only supported in browser"));return}let y=_1();y.length!==0&&(y+=g+`&onload=${If}`),xn.scriptInjectionDeferred=new Zf,window[If]=()=>{var k;(k=xn.scriptInjectionDeferred)==null||k.resolve()},qh(y).then(()=>{var k;return(k=xn.scriptInjectionDeferred)==null?void 0:k.promise}).then(()=>{d(g,f,p)}).catch(k=>{p(k)})}}).catch(g=>{p(g)})})}}xn.scriptInjectionDeferred=null;async function Tf(i,n,s,c=!1,d=!1){const f=new xn(i);let p;if(d)p=Jh;else try{p=await f.verify(s)}catch{p=await f.verify(s,!0)}const g={...n};if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const y=g.phoneEnrollmentInfo.phoneNumber,k=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:k,captchaResponse:p,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const y=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:p,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return c?Object.assign(g,{captchaResp:p}):Object.assign(g,{captchaResponse:p}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function Cl(i,n,s,c,d){var f;if((f=i._getRecaptchaConfig())!=null&&f.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const p=await Tf(i,n,s,s==="getOobCode");return c(i,p)}else return c(i,n).catch(async p=>{if(p.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await Tf(i,n,s,s==="getOobCode");return c(i,g)}else return Promise.reject(p)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(i,n){const s=Ir(i,"auth");if(s.isInitialized()){const d=s.getImmediate(),f=s.getOptions();if(Hn(f,n??{}))return d;yt(d,"already-initialized")}return s.initialize({options:n})}function A1(i,n){const s=(n==null?void 0:n.persistence)||[],c=(Array.isArray(s)?s:[s]).map(Kt);n!=null&&n.errorMap&&i._updateErrorMap(n.errorMap),i._initializeWithPersistence(c,n==null?void 0:n.popupRedirectResolver)}function P1(i,n,s){const c=Cn(i);oe(/^https?:\/\//.test(n),c,"invalid-emulator-scheme");const d=!1,f=Yh(n),{host:p,port:g}=R1(n),y=g===null?"":`:${g}`,k={url:`${f}//${p}${y}/`},L=Object.freeze({host:p,port:g,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:d})});if(!c._canInitEmulator){oe(c.config.emulator&&c.emulatorConfig,c,"emulator-config-failed"),oe(Hn(k,c.config.emulator)&&Hn(L,c.emulatorConfig),c,"emulator-config-failed");return}c.config.emulator=k,c.emulatorConfig=L,c.settings.appVerificationDisabledForTesting=!0,Al(p)?vy(`${f}//${p}${y}`):b1()}function Yh(i){const n=i.indexOf(":");return n<0?"":i.substr(0,n+1)}function R1(i){const n=Yh(i),s=/(\/\/)?([^?#/]+)/.exec(i.substr(n.length));if(!s)return{host:"",port:null};const c=s[2].split("@").pop()||"",d=/^(\[[^\]]+\])(:|$)/.exec(c);if(d){const f=d[1];return{host:f,port:jf(c.substr(f.length+1))}}else{const[f,p]=c.split(":");return{host:f,port:jf(p)}}}function jf(i){if(!i)return null;const n=Number(i);return isNaN(n)?null:n}function b1(){function i(){const n=document.createElement("p"),s=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(n,s){this.providerId=n,this.signInMethod=s}toJSON(){return Gt("not implemented")}_getIdTokenResponse(n){return Gt("not implemented")}_linkToIdToken(n,s){return Gt("not implemented")}_getReauthenticationResolver(n){return Gt("not implemented")}}async function L1(i,n){return Xt(i,"POST","/v1/accounts:signUp",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(i,n){return _s(i,"POST","/v1/accounts:signInWithPassword",Nn(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(i,n){return _s(i,"POST","/v1/accounts:signInWithEmailLink",Nn(i,n))}async function M1(i,n){return _s(i,"POST","/v1/accounts:signInWithEmailLink",Nn(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Hl{constructor(n,s,c,d=null){super("password",c),this._email=n,this._password=s,this._tenantId=d}static _fromEmailAndPassword(n,s){return new ws(n,s,"password")}static _fromEmailAndCode(n,s,c=null){return new ws(n,s,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cl(n,s,"signInWithPassword",D1);case"emailLink":return O1(n,{email:this._email,oobCode:this._password});default:yt(n,"internal-error")}}async _linkToIdToken(n,s){switch(this.signInMethod){case"password":const c={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cl(n,c,"signUpPassword",L1);case"emailLink":return M1(n,{idToken:s,email:this._email,oobCode:this._password});default:yt(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(i,n){return _s(i,"POST","/v1/accounts:signInWithIdp",Nn(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="http://localhost";class Kn extends Hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const s=new Kn(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(s.idToken=n.idToken),n.accessToken&&(s.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(s.nonce=n.nonce),n.pendingToken&&(s.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(s.accessToken=n.oauthToken,s.secret=n.oauthTokenSecret):yt("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n,{providerId:c,signInMethod:d,...f}=s;if(!c||!d)return null;const p=new Kn(c,d);return p.idToken=f.idToken||void 0,p.accessToken=f.accessToken||void 0,p.secret=f.secret,p.nonce=f.nonce,p.pendingToken=f.pendingToken||null,p}_getIdTokenResponse(n){const s=this.buildRequest();return Er(n,s)}_linkToIdToken(n,s){const c=this.buildRequest();return c.idToken=s,Er(n,c)}_getReauthenticationResolver(n){const s=this.buildRequest();return s.autoCreate=!1,Er(n,s)}buildRequest(){const n={requestUri:F1,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),n.postBody=xs(s)}return n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z1(i){const n=ms(gs(i)).link,s=n?ms(gs(n)).deep_link_id:null,c=ms(gs(i)).deep_link_id;return(c?ms(gs(c)).link:null)||c||s||n||i}class Wl{constructor(n){const s=ms(gs(n)),c=s.apiKey??null,d=s.oobCode??null,f=U1(s.mode??null);oe(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=s.continueUrl??null,this.languageCode=s.lang??null,this.tenantId=s.tenantId??null}static parseLink(n){const s=z1(n);try{return new Wl(s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(n,s){return ws._fromEmailAndPassword(n,s)}static credentialWithLink(n,s){const c=Wl.parseLink(s);return oe(c,"argument-error"),ws._fromEmailAndCode(n,c.code,c.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Es{constructor(){super("facebook.com")}static credential(n){return Kn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Sn.credentialFromTaggedObject(n)}static credentialFromError(n){return Sn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Sn.credential(n.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Es{constructor(){super("google.com"),this.addScope("profile")}static credential(n,s){return Kn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:s})}static credentialFromResult(n){return Ht.credentialFromTaggedObject(n)}static credentialFromError(n){return Ht.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:s,oauthAccessToken:c}=n;if(!s&&!c)return null;try{return Ht.credential(s,c)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Es{constructor(){super("github.com")}static credential(n){return Kn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return kn.credentialFromTaggedObject(n)}static credentialFromError(n){return kn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return kn.credential(n.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Es{constructor(){super("twitter.com")}static credential(n,s){return Kn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:s})}static credentialFromResult(n){return _n.credentialFromTaggedObject(n)}static credentialFromError(n){return _n.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:s,oauthTokenSecret:c}=n;if(!s||!c)return null;try{return _n.credential(s,c)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(i,n){return _s(i,"POST","/v1/accounts:signUp",Nn(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,s,c,d=!1){const f=await Nt._fromIdTokenResponse(n,c,d),p=Af(c);return new qn({user:f,providerId:p,_tokenResponse:c,operationType:s})}static async _forOperation(n,s,c){await n._updateTokensIfNecessary(c,!0);const d=Af(c);return new qn({user:n,providerId:d,_tokenResponse:c,operationType:s})}}function Af(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Dt{constructor(n,s,c,d){super(s.code,s.message),this.operationType=c,this.user=d,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:n.name,tenantId:n.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(n,s,c,d){return new Ji(n,s,c,d)}}function Qh(i,n,s,c){return(n==="reauthenticate"?s._getReauthenticationResolver(i):s._getIdTokenResponse(i)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(i,f,n,c):f})}async function B1(i,n,s=!1){const c=await Nr(i,n._linkToIdToken(i.auth,await i.getIdToken()),s);return qn._forOperation(i,"link",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(i,n,s=!1){const{auth:c}=i;if(gt(c.app))return Promise.reject(qt(c));const d="reauthenticate";try{const f=await Nr(i,Qh(c,d,n,i),s);oe(f.idToken,c,"internal-error");const p=Bl(f.idToken);oe(p,c,"internal-error");const{sub:g}=p;return oe(i.uid===g,c,"user-mismatch"),qn._forOperation(i,d,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&yt(c,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(i,n,s=!1){if(gt(i.app))return Promise.reject(qt(i));const c="signIn",d=await Qh(i,c,n),f=await qn._fromIdTokenResponse(i,c,d);return s||await i._updateCurrentUser(f.user),f}async function H1(i,n){return Xh(Cn(i),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(i){const n=Cn(i);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function W1(i,n,s){if(gt(i.app))return Promise.reject(qt(i));const c=Cn(i),p=await Cl(c,{returnSecureToken:!0,email:n,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$1).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Zh(i),y}),g=await qn._fromIdTokenResponse(c,"signIn",p);return await c._updateCurrentUser(g.user),g}function G1(i,n,s){return gt(i.app)?Promise.reject(qt(i)):H1(ct(i),Tr.credential(n,s)).catch(async c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Zh(i),c})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(i,n){return Xt(i,"POST","/v1/accounts:update",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(i,{displayName:n,photoURL:s}){if(n===void 0&&s===void 0)return;const c=ct(i),f={idToken:await c.getIdToken(),displayName:n,photoUrl:s,returnSecureToken:!0},p=await Nr(c,K1(c.auth,f));c.displayName=p.displayName||null,c.photoURL=p.photoUrl||null;const g=c.providerData.find(({providerId:y})=>y==="password");g&&(g.displayName=c.displayName,g.photoURL=c.photoURL),await c._updateTokensIfNecessary(p)}function J1(i,n,s,c){return ct(i).onIdTokenChanged(n,s,c)}function Y1(i,n,s){return ct(i).beforeAuthStateChanged(n,s)}function Q1(i,n,s,c){return ct(i).onAuthStateChanged(n,s,c)}function X1(i){return ct(i).signOut()}const Yi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(n,s){this.storageRetriever=n,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,s){return this.storage.setItem(n,JSON.stringify(s)),Promise.resolve()}_get(n){const s=this.storage.getItem(n);return Promise.resolve(s?JSON.parse(s):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=1e3,ew=10;class tp extends ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,s)=>this.onStorageEvent(n,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gh(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const s of Object.keys(this.listeners)){const c=this.storage.getItem(s),d=this.localCache[s];c!==d&&n(s,d,c)}}onStorageEvent(n,s=!1){if(!n.key){this.forAllChangedKeys((p,g,y)=>{this.notifyListeners(p,y)});return}const c=n.key;s?this.detachListener():this.stopPolling();const d=()=>{const p=this.storage.getItem(c);!s&&this.localCache[c]===p||this.notifyListeners(c,p)},f=this.storage.getItem(c);g1()&&f!==n.newValue&&n.newValue!==n.oldValue?setTimeout(d,ew):d()}notifyListeners(n,s){this.localCache[n]=s;const c=this.listeners[n];if(c)for(const d of Array.from(c))d(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,s,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:s,newValue:c}),!0)})},Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,s){await super._set(n,s),this.localCache[n]=JSON.stringify(s)}async _get(n){const s=await super._get(n);return this.localCache[n]=JSON.stringify(s),s}async _remove(n){await super._remove(n),delete this.localCache[n]}}tp.type="LOCAL";const tw=tp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,s){}_removeListener(n,s){}}np.type="SESSION";const rp=np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(i){return Promise.all(i.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const s=this.receivers.find(d=>d.isListeningto(n));if(s)return s;const c=new no(n);return this.receivers.push(c),c}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const s=n,{eventId:c,eventType:d,data:f}=s.data,p=this.handlersMap[d];if(!(p!=null&&p.size))return;s.ports[0].postMessage({status:"ack",eventId:c,eventType:d});const g=Array.from(p).map(async k=>k(s.origin,f)),y=await nw(g);s.ports[0].postMessage({status:"done",eventId:c,eventType:d,response:y})}_subscribe(n,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(s)}_unsubscribe(n,s){this.handlersMap[n]&&s&&this.handlersMap[n].delete(s),(!s||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(i="",n=10){let s="";for(let c=0;c<n;c++)s+=Math.floor(Math.random()*10);return i+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,s,c=50){const d=typeof MessageChannel<"u"?new MessageChannel:null;if(!d)throw new Error("connection_unavailable");let f,p;return new Promise((g,y)=>{const k=Kl("",20);d.port1.start();const L=setTimeout(()=>{y(new Error("unsupported_event"))},c);p={messageChannel:d,onMessage(T){const D=T;if(D.data.eventId===k)switch(D.data.status){case"ack":clearTimeout(L),f=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),g(D.data.response);break;default:clearTimeout(L),clearTimeout(f),y(new Error("invalid_response"));break}}},this.handlers.add(p),d.port1.addEventListener("message",p.onMessage),this.target.postMessage({eventType:n,eventId:k,data:s},[d.port2])}).finally(()=>{p&&this.removeMessageHandler(p)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function sw(i){bt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function iw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ow(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function aw(){return sp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="firebaseLocalStorageDb",lw=1,Qi="firebaseLocalStorage",op="fbase_key";class Ns{constructor(n){this.request=n}toPromise(){return new Promise((n,s)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function ro(i,n){return i.transaction([Qi],n?"readwrite":"readonly").objectStore(Qi)}function cw(){const i=indexedDB.deleteDatabase(ip);return new Ns(i).toPromise()}function ap(){const i=indexedDB.open(ip,lw);return new Promise((n,s)=>{i.addEventListener("error",()=>{s(i.error)}),i.addEventListener("upgradeneeded",()=>{const c=i.result;try{c.createObjectStore(Qi,{keyPath:op})}catch(d){s(d)}}),i.addEventListener("success",async()=>{const c=i.result;c.objectStoreNames.contains(Qi)?n(c):(c.close(),await cw(),n(await ap()))})})}async function Pf(i,n,s){const c=ro(i,!0).put({[op]:n,value:s});return new Ns(c).toPromise()}async function uw(i,n){const s=ro(i,!1).get(n),c=await new Ns(s).toPromise();return c===void 0?null:c.value}function Rf(i,n){const s=ro(i,!0).delete(n);return new Ns(s).toPromise()}const dw=800,fw=3;class lp{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(n=>n.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=ap(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(n){let s=0;for(;;)try{const c=await this._openDb();return await n(c)}catch(c){if(this.isClosing||s++>fw)throw c;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(aw()),this.receiver._subscribe("keyChanged",async(n,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(n,s)=>["keyChanged"])}async initializeSender(){var s,c;if(this.activeServiceWorker=await iw(),!this.activeServiceWorker)return;this.sender=new rw(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(s=n[0])!=null&&s.fulfilled&&(c=n[0])!=null&&c.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async n=>{await Pf(n,Yi,"1"),await Rf(n,Yi)}),!0):!1}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,s){return this._withPendingWrite(async()=>(await this._withRetries(c=>Pf(c,n,s)),this.localCache[n]=s,this.notifyServiceWorker(n)))}async _get(n){const s=await this._withRetries(c=>uw(c,n));return this.localCache[n]=s,s}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rf(s,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){if(this.isClosing)return[];try{const n=await this._withRetries(d=>{const f=ro(d,!1).getAll();return new Ns(f).toPromise()});if(this.isClosing)return[];if(!n)return[];if(this.pendingWrites!==0)return[];const s=[],c=new Set;if(n.length!==0)for(const{fbase_key:d,value:f}of n)c.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(f)&&(this.notifyListeners(d,f),s.push(d));for(const d of Object.keys(this.localCache))this.localCache[d]&&!c.has(d)&&(this.notifyListeners(d,null),s.push(d));return s}catch(n){return this.isClosing||bh(`Firebase Auth cross-tab polling failed with error: ${n}`),[]}}notifyListeners(n,s){this.localCache[n]=s;const c=this.listeners[n];if(c)for(const d of Array.from(c))d(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,s){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}lp.type="LOCAL";const hw=lp;new ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(i,n){return n?Kt(n):(oe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Hl{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Er(n,this._buildIdpRequest())}_linkToIdToken(n,s){return Er(n,this._buildIdpRequest(s))}_getReauthenticationResolver(n){return Er(n,this._buildIdpRequest())}_buildIdpRequest(n){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(s.idToken=n),s}}function pw(i){return Xh(i.auth,new ql(i),i.bypassAuthState)}function mw(i){const{auth:n,user:s}=i;return oe(s,n,"internal-error"),V1(s,new ql(i),i.bypassAuthState)}async function gw(i){const{auth:n,user:s}=i;return oe(s,n,"internal-error"),B1(s,new ql(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(n,s,c,d,f=!1){this.auth=n,this.resolver=c,this.user=d,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(n,s)=>{this.pendingPromise={resolve:n,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(n){const{urlResponse:s,sessionId:c,postBody:d,tenantId:f,error:p,type:g}=n;if(p){this.reject(p);return}const y={auth:this.auth,requestUri:s,sessionId:c,tenantId:f||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(k){this.reject(k)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return gw;case"reauthViaPopup":case"reauthViaRedirect":return mw;default:yt(this.auth,"internal-error")}}resolve(n){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new ks(2e3,1e4);async function dp(i,n,s){if(gt(i.app))return Promise.reject(Ct(i,"operation-not-supported-in-this-environment"));const c=Cn(i);Y0(i,n,Gl);const d=cp(c,s);return new Bn(c,"signInViaPopup",n,d).executeNotNull()}class Bn extends up{constructor(n,s,c,d,f){super(n,s,d,f),this.provider=c,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return oe(n,this.auth,"internal-error"),n}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const n=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)==null?void 0:n.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const n=()=>{var s,c;if((c=(s=this.authWindow)==null?void 0:s.window)!=null&&c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,yw.get())};n()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="pendingRedirect",$i=new Map;class ww extends up{constructor(n,s,c=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,c),this.eventId=null}async execute(){let n=$i.get(this.auth._key());if(!n){try{const c=await xw(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(c)}catch(s){n=()=>Promise.reject(s)}$i.set(this.auth._key(),n)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const s=await this.auth._redirectUserForId(n.eventId);if(s)return this.user=s,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xw(i,n){const s=_w(n),c=kw(i);if(!await c._isAvailable())return!1;const d=await c._get(s)==="true";return await c._remove(s),d}function Sw(i,n){$i.set(i._key(),n)}function kw(i){return Kt(i._redirectPersistence)}function _w(i){return zi(vw,i.config.apiKey,i.name)}async function Ew(i,n,s=!1){if(gt(i.app))return Promise.reject(qt(i));const c=Cn(i),d=cp(c,n),p=await new ww(c,d,s).execute();return p&&!s&&(delete p.user._redirectEventId,await c._persistUserIfCurrent(p.user),await c._setRedirectUser(null,n)),p}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=600*1e3;class Cw{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let s=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(n,c)&&(s=!0,this.sendToConsumer(n,c),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!Iw(n)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=n,s=!0)),s}sendToConsumer(n,s){var c;if(n.error&&!fp(n)){const d=((c=n.error.code)==null?void 0:c.split("auth/")[1])||"internal-error";s.onError(Ct(this.auth,d))}else s.onAuthEvent(n)}isEventForConsumer(n,s){const c=s.eventId===null||!!n.eventId&&n.eventId===s.eventId;return s.filter.includes(n.type)&&c}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=Nw&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(n))}saveEventToCache(n){this.cachedEventUids.add(bf(n)),this.lastProcessedEventTime=Date.now()}}function bf(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(n=>n).join("-")}function fp({type:i,error:n}){return i==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function Iw(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(i,n={}){return Xt(i,"GET","/v1/projects",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Aw=/^https?/;async function Pw(i){if(i.config.emulator)return;const{authorizedDomains:n}=await Tw(i);for(const s of n)try{if(Rw(s))return}catch{}yt(i,"unauthorized-domain")}function Rw(i){const n=El(),{protocol:s,hostname:c}=new URL(n);if(i.startsWith("chrome-extension://")){const p=new URL(i);return p.hostname===""&&c===""?s==="chrome-extension:"&&i.replace("chrome-extension://","")===n.replace("chrome-extension://",""):s==="chrome-extension:"&&p.hostname===c}if(!Aw.test(s))return!1;if(jw.test(i))return c===i;const d=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+d+"|"+d+")$","i").test(c)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new ks(3e4,6e4);function Lf(){const i=bt().___jsl;if(i!=null&&i.H){for(const n of Object.keys(i.H))if(i.H[n].r=i.H[n].r||[],i.H[n].L=i.H[n].L||[],i.H[n].r=[...i.H[n].L],i.CP)for(let s=0;s<i.CP.length;s++)i.CP[s]=null}}function Lw(i){return new Promise((n,s)=>{var d,f,p;function c(){Lf(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{Lf(),s(Ct(i,"network-request-failed"))},timeout:bw.get()})}if((f=(d=bt().gapi)==null?void 0:d.iframes)!=null&&f.Iframe)n(gapi.iframes.getContext());else if((p=bt().gapi)!=null&&p.load)c();else{const g=N1("iframefcb");return bt()[g]=()=>{gapi.load?c():s(Ct(i,"network-request-failed"))},qh(`${E1()}?onload=${g}`).catch(y=>s(y))}}).catch(n=>{throw Bi=null,n})}let Bi=null;function Dw(i){return Bi=Bi||Lw(i),Bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=new ks(5e3,15e3),Mw="__/auth/iframe",Fw="emulator/auth/iframe",Uw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $w(i){const n=i.config;oe(n.authDomain,i,"auth-domain-config-required");const s=n.emulator?$l(n,Fw):`https://${i.config.authDomain}/${Mw}`,c={apiKey:n.apiKey,appName:i.name,v:Ss},d=zw.get(i.config.apiHost);d&&(c.eid=d);const f=i._getFrameworks();return f.length&&(c.fw=f.join(",")),`${s}?${xs(c).slice(1)}`}async function Bw(i){const n=await Dw(i),s=bt().gapi;return oe(s,i,"internal-error"),n.open({where:document.body,url:$w(i),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uw,dontclear:!0},c=>new Promise(async(d,f)=>{await c.restyle({setHideOnLeave:!1});const p=Ct(i,"network-request-failed"),g=bt().setTimeout(()=>{f(p)},Ow.get());function y(){bt().clearTimeout(g),d(c)}c.ping(y).then(y,()=>{f(p)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hw=500,Ww=600,Gw="_blank",Kw="http://localhost";class Df{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qw(i,n,s,c=Hw,d=Ww){const f=Math.max((window.screen.availHeight-d)/2,0).toString(),p=Math.max((window.screen.availWidth-c)/2,0).toString();let g="";const y={...Vw,width:c.toString(),height:d.toString(),top:f,left:p},k=Ye().toLowerCase();s&&(g=$h(k)?Gw:s),Uh(k)&&(n=n||Kw,y.scrollbars="yes");const L=Object.entries(y).reduce((D,[j,Y])=>`${D}${j}=${Y},`,"");if(m1(k)&&g!=="_self")return Jw(n||"",g),new Df(null);const T=window.open(n||"",g,L);oe(T,i,"popup-blocked");try{T.focus()}catch{}return new Df(T)}function Jw(i,n){const s=document.createElement("a");s.href=i,s.target=n;const c=document.createEvent("MouseEvent");c.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="__/auth/handler",Qw="emulator/auth/handler",Xw=encodeURIComponent("fac");async function Of(i,n,s,c,d,f){oe(i.config.authDomain,i,"auth-domain-config-required"),oe(i.config.apiKey,i,"invalid-api-key");const p={apiKey:i.config.apiKey,appName:i.name,authType:s,redirectUrl:c,v:Ss,eventId:d};if(n instanceof Gl){n.setDefaultLanguage(i.languageCode),p.providerId=n.providerId||"",uy(n.getCustomParameters())||(p.customParameters=JSON.stringify(n.getCustomParameters()));for(const[L,T]of Object.entries({}))p[L]=T}if(n instanceof Es){const L=n.getScopes().filter(T=>T!=="");L.length>0&&(p.scopes=L.join(","))}i.tenantId&&(p.tid=i.tenantId);const g=p;for(const L of Object.keys(g))g[L]===void 0&&delete g[L];const y=await i._getAppCheckToken(),k=y?`#${Xw}=${encodeURIComponent(y)}`:"";return`${Zw(i)}?${xs(g).slice(1)}${k}`}function Zw({config:i}){return i.emulator?$l(i,Qw):`https://${i.authDomain}/${Yw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="webStorageSupport";class ex{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rp,this._completeRedirectFn=Ew,this._overrideRedirectResult=Sw}async _openPopup(n,s,c,d){var p;Qt((p=this.eventManagers[n._key()])==null?void 0:p.manager,"_initialize() not called before _openPopup()");const f=await Of(n,s,c,El(),d);return qw(n,f,Kl())}async _openRedirect(n,s,c,d){await this._originValidation(n);const f=await Of(n,s,c,El(),d);return sw(f),new Promise(()=>{})}_initialize(n){const s=n._key();if(this.eventManagers[s]){const{manager:d,promise:f}=this.eventManagers[s];return d?Promise.resolve(d):(Qt(f,"If manager is not set, promise should be"),f)}const c=this.initAndGetManager(n);return this.eventManagers[s]={promise:c},c.catch(()=>{delete this.eventManagers[s]}),c}async initAndGetManager(n){const s=await Bw(n),c=new Cw(n);return s.register("authEvent",d=>(oe(d==null?void 0:d.authEvent,n,"invalid-auth-event"),{status:c.onEvent(d.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:c},this.iframes[n._key()]=s,c}_isIframeWebStorageSupported(n,s){this.iframes[n._key()].send(fl,{type:fl},d=>{var p;const f=(p=d==null?void 0:d[0])==null?void 0:p[fl];f!==void 0&&s(!!f),yt(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const s=n._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=Pw(n)),this.originValidationPromises[s]}get _shouldInitProactively(){return Gh()||zh()||Vl()}}const tx=ex;var Mf="@firebase/auth",Ff="1.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)==null?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const s=this.auth.onIdTokenChanged(c=>{n((c==null?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,s),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const s=this.internalListeners.get(n);s&&(this.internalListeners.delete(n),s(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sx(i){Yt(new Lt("auth",(n,{options:s})=>{const c=n.getProvider("app").getImmediate(),d=n.getProvider("heartbeat"),f=n.getProvider("app-check-internal"),{apiKey:p,authDomain:g}=c.options;oe(p&&!p.includes(":"),"invalid-api-key",{appName:c.name});const y={apiKey:p,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kh(i)},k=new S1(c,d,f,y);return A1(k,s),k},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,s,c)=>{n.getProvider("auth-internal").initialize()})),Yt(new Lt("auth-internal",n=>{const s=Cn(n.getProvider("auth").getImmediate());return(c=>new nx(c))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Mf,Ff,rx(i)),Rt(Mf,Ff,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=300,ox=Xf("authIdTokenMaxAge")||ix;let Uf=null;const ax=i=>async n=>{const s=n&&await n.getIdTokenResult(),c=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(c&&c>ox)return;const d=s==null?void 0:s.token;Uf!==d&&(Uf=d,await fetch(i,{method:d?"POST":"DELETE",headers:d?{Authorization:`Bearer ${d}`}:{}}))};function lx(i=ah()){const n=Ir(i,"auth");if(n.isInitialized())return n.getImmediate();const s=j1(i,{popupRedirectResolver:tx,persistence:[hw,tw,rp]}),c=Xf("authTokenSyncURL");if(c&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(c,location.origin);if(location.origin===f.origin){const p=ax(f.toString());Y1(s,p,()=>p(s.currentUser)),J1(s,g=>p(g))}}const d=ny("auth");return d&&P1(s,`http://${d}`),s}function cx(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}k1({loadJS(i){return new Promise((n,s)=>{const c=document.createElement("script");c.setAttribute("src",i),c.onload=n,c.onerror=d=>{const f=Ct("internal-error");f.customData=d,s(f)},c.type="text/javascript",c.charset="UTF-8",cx().appendChild(c)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sx("Browser");const ux={apiKey:"AIzaSyBZv39mN0gJjsNUsSKIWeg3Ro5QvHiYfP8",authDomain:"vinora-database.firebaseapp.com",projectId:"vinora-database",storageBucket:"vinora-database.firebasestorage.app",messagingSenderId:"500994862971",appId:"1:500994862971:web:60f354445883756953d7de",measurementId:"G-MC2L79XFR3"},hp=oh(ux),Cr=lx(hp),pp=new Ht;typeof window<"u"&&H0(hp);const dx=({onSignInSuccess:i,onSwitchToRegister:n,onErrorMsg:s})=>{const[c,d]=V.useState(""),[f,p]=V.useState(""),[g,y]=V.useState(!1),[k,L]=V.useState(!1),[T,D]=V.useState(!1),j=async()=>{var B;D(!0);try{const K=(await dp(Cr,pp)).user;i({name:K.displayName||((B=K.email)==null?void 0:B.split("@")[0])||"User",email:K.email||"",avatar:K.photoURL||void 0,uid:K.uid})}catch(Q){console.error("Google Sign In Error:",Q);let K="Failed to sign in with Google.";Q.code==="auth/popup-closed-by-user"?K="Google sign-in window was closed.":Q.code==="auth/cancelled-popup-request"?K="Google sign-in attempt was cancelled.":Q.message&&(K=Q.message),s&&s(K)}finally{D(!1)}},Y=async B=>{var Q;if(B.preventDefault(),!(!c||!f)){L(!0);try{const H=(await G1(Cr,c,f)).user;i({name:H.displayName||((Q=H.email)==null?void 0:Q.split("@")[0])||"User",email:H.email||"",avatar:H.photoURL||void 0,uid:H.uid})}catch(K){console.error("Email Sign In Error:",K);let H="Failed to sign in. Please check your credentials.";K.code==="auth/invalid-credential"||K.code==="auth/wrong-password"||K.code==="auth/user-not-found"?H="Invalid email or password.":K.code==="auth/invalid-email"?H="Invalid email address format.":K.code==="auth/too-many-requests"?H="Too many failed login attempts. Please try again later.":K.message&&(H=K.message),s&&s(H)}finally{L(!1)}}};return a.jsxs("div",{className:"auth-container",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("h2",{className:"auth-title",children:"Welcome back"}),a.jsx("p",{className:"auth-subtitle",children:"Sign in to pick up where you left off."})]}),a.jsxs("button",{type:"button",className:"btn-google",onClick:j,disabled:k||T,children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("path",{fill:"#4285F4",d:"M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"}),a.jsx("path",{fill:"#34A853",d:"M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"}),a.jsx("path",{fill:"#FBBC05",d:"M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"}),a.jsx("path",{fill:"#EA4335",d:"M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"})]}),a.jsx("span",{children:T?"Connecting to Google...":"Sign in with Google"})]}),a.jsxs("div",{className:"divider-container",children:[a.jsx("div",{className:"divider-line"}),a.jsx("span",{className:"divider-text",children:"OR"}),a.jsx("div",{className:"divider-line"})]}),a.jsxs("form",{onSubmit:Y,style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email-input",children:"Email"}),a.jsx("div",{className:"input-wrapper",children:a.jsx("input",{id:"email-input",type:"email",className:"form-input",placeholder:"yours@example.com",value:c,onChange:B=>d(B.target.value),required:!0})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"password-input",children:"Password"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx("input",{id:"password-input",type:g?"text":"password",className:"form-input",placeholder:"At least 8 characters",value:f,onChange:B=>p(B.target.value),required:!0,minLength:8}),a.jsx("button",{type:"button",className:"password-toggle-btn",onClick:()=>y(!g),"aria-label":g?"Hide password":"Show password",children:g?a.jsx(Wf,{size:18}):a.jsx(Gf,{size:18})})]})]}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:k||T,children:k?a.jsx("span",{children:"Signing in..."}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Sign in"}),a.jsx(Hf,{size:16})]})})]}),a.jsxs("div",{className:"auth-footer",children:["New to Vinora?"," ",a.jsx("span",{className:"auth-link",onClick:n,role:"button",tabIndex:0,children:"Sign up"})]})]})},fx=({onRegisterSuccess:i,onSwitchToLogin:n,onErrorMsg:s})=>{const[c,d]=V.useState(""),[f,p]=V.useState(""),[g,y]=V.useState(""),[k,L]=V.useState(!1),[T,D]=V.useState(!1),[j,Y]=V.useState(!1),B=async()=>{var K;Y(!0);try{const q=(await dp(Cr,pp)).user;i({name:q.displayName||((K=q.email)==null?void 0:K.split("@")[0])||"User",email:q.email||"",avatar:q.photoURL||void 0,uid:q.uid})}catch(H){console.error("Google Sign In Error:",H);let q="Failed to sign in with Google.";H.code==="auth/popup-closed-by-user"?q="Google sign-in window was closed.":H.code==="auth/cancelled-popup-request"?q="Google sign-in attempt was cancelled.":H.message&&(q=H.message),s&&s(q)}finally{Y(!1)}},Q=async K=>{if(K.preventDefault(),!(!c||!f||!g)){D(!0);try{const H=await W1(Cr,f,g);H.user&&await q1(H.user,{displayName:c}),i({name:c,email:H.user.email||f,avatar:H.user.photoURL||void 0,uid:H.user.uid})}catch(H){console.error("Registration Error:",H);let q="Failed to create account.";H.code==="auth/email-already-in-use"?q="An account with this email already exists.":H.code==="auth/invalid-email"?q="Invalid email address format.":H.code==="auth/weak-password"?q="Password should be at least 6 characters.":H.message&&(q=H.message),s&&s(q)}finally{D(!1)}}};return a.jsxs("div",{className:"auth-container",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("h2",{className:"auth-title",children:"Create your account"}),a.jsx("p",{className:"auth-subtitle",children:"A minute to set up, a clearer month ahead."})]}),a.jsxs("button",{type:"button",className:"btn-google",onClick:B,disabled:T||j,children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("path",{fill:"#4285F4",d:"M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"}),a.jsx("path",{fill:"#34A853",d:"M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"}),a.jsx("path",{fill:"#FBBC05",d:"M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"}),a.jsx("path",{fill:"#EA4335",d:"M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"})]}),a.jsx("span",{children:j?"Connecting to Google...":"Sign in with Google"})]}),a.jsxs("div",{className:"divider-container",children:[a.jsx("div",{className:"divider-line"}),a.jsx("span",{className:"divider-text",children:"OR"}),a.jsx("div",{className:"divider-line"})]}),a.jsxs("form",{onSubmit:Q,style:{display:"flex",flexDirection:"column",gap:"1.15rem"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"name-input",children:"Name"}),a.jsx("div",{className:"input-wrapper",children:a.jsx("input",{id:"name-input",type:"text",className:"form-input",placeholder:"John Doe/Jane Doe",value:c,onChange:K=>d(K.target.value),required:!0})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"register-email-input",children:"Email"}),a.jsx("div",{className:"input-wrapper",children:a.jsx("input",{id:"register-email-input",type:"email",className:"form-input",placeholder:"yours@example.com",value:f,onChange:K=>p(K.target.value),required:!0})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"register-password-input",children:"Password"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx("input",{id:"register-password-input",type:k?"text":"password",className:"form-input",placeholder:"At least 8 characters",value:g,onChange:K=>y(K.target.value),required:!0,minLength:8}),a.jsx("button",{type:"button",className:"password-toggle-btn",onClick:()=>L(!k),"aria-label":k?"Hide password":"Show password",children:k?a.jsx(Wf,{size:18}):a.jsx(Gf,{size:18})})]})]}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:T||j,children:T?a.jsx("span",{children:"Creating account..."}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Sign up"}),a.jsx(Hf,{size:16})]})})]}),a.jsxs("div",{className:"auth-footer",children:["Already have an account?"," ",a.jsx("span",{className:"auth-link",onClick:n,role:"button",tabIndex:0,children:"Sign in"})]})]})},hx=({theme:i,authMode:n,onToggleTheme:s,onToggleAuthMode:c})=>a.jsxs("div",{className:"theme-switcher-bar",role:"region","aria-label":"Theme & Page Controls",children:[a.jsxs("div",{style:{display:"flex",gap:"2px",paddingRight:"6px",borderRight:"1px solid rgba(150, 150, 150, 0.2)"},children:[a.jsxs("button",{type:"button",className:`theme-toggle-btn ${n==="login"?"active":""}`,onClick:()=>c("login"),"aria-label":"Switch to Login page",children:[a.jsx(Fg,{size:13}),a.jsx("span",{children:"Login"})]}),a.jsxs("button",{type:"button",className:`theme-toggle-btn ${n==="register"?"active":""}`,onClick:()=>c("register"),"aria-label":"Switch to Register page",children:[a.jsx(Gg,{size:13}),a.jsx("span",{children:"Register"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"2px",paddingLeft:"6px"},children:[a.jsxs("button",{type:"button",className:`theme-toggle-btn ${i==="light"?"active":""}`,onClick:()=>s("light"),"aria-label":"Switch to Light mode",children:[a.jsx(yl,{size:13}),a.jsx("span",{children:"Light"})]}),a.jsxs("button",{type:"button",className:`theme-toggle-btn ${i==="dark"?"active":""}`,onClick:()=>s("dark"),"aria-label":"Switch to Dark mode",children:[a.jsx(ml,{size:13}),a.jsx("span",{children:"Dark"})]})]})]}),px=({theme:i,authMode:n,onToggleTheme:s,onToggleAuthMode:c,onLoginSuccess:d})=>{const[f,p]=V.useState(null),g=(T,D="success")=>{p({message:T,type:D}),setTimeout(()=>{p(null)},4e3)},y=T=>{g(`Welcome back! Signed in as ${T.name}`,"success"),setTimeout(()=>{d(T)},400)},k=T=>{g(`Account created successfully for ${T.name}! Redirecting...`,"success"),setTimeout(()=>{d(T)},400)},L=T=>{g(T,"error")};return a.jsxs("div",{className:"vinora-layout","data-theme":i,children:[a.jsx(hx,{theme:i,authMode:n,onToggleTheme:s,onToggleAuthMode:c}),a.jsx(_g,{}),a.jsx("div",{className:"auth-panel",children:n==="login"?a.jsx(dx,{onSignInSuccess:y,onSwitchToRegister:()=>c("register"),onErrorMsg:L}):a.jsx(fx,{onRegisterSuccess:k,onSwitchToLogin:()=>c("login"),onErrorMsg:L})}),f&&a.jsxs("div",{className:"toast-notification",style:f.type==="error"?{background:"#991B1B"}:void 0,children:[f.type==="success"?a.jsx(bg,{size:20,color:"#10B981"}):a.jsx(Rg,{size:20,color:"#FCA5A5"}),a.jsx("span",{children:f.message})]})]})},Fi={Groceries:"GR",Cafés:"CA",Transport:"TR",Rent:"RE",Utilities:"UT",Leisure:"LE",Freelance:"FR",Salary:"SA"},mx=({isOpen:i,onClose:n,onAddTransaction:s,initialData:c,onEditTransaction:d})=>{const[f,p]=V.useState(""),[g,y]=V.useState("Groceries"),[k,L]=V.useState("GR"),[T,D]=V.useState(""),[j,Y]=V.useState(""),[B,Q]=V.useState("expense");if(V.useEffect(()=>{c?(p(c.title||""),y(c.category||"Groceries"),L(c.badge||Fi[c.category]||"GR"),D(c.note||""),Y(Math.abs(c.amount).toString()),Q(c.amount>=0?"income":"expense")):(p(""),y("Groceries"),L("GR"),D(""),Y(""),Q("expense"))},[c,i]),!i)return null;const K=q=>{y(q),Fi[q]?L(Fi[q]):L(q.slice(0,2).toUpperCase())},H=q=>{if(q.preventDefault(),!f||!j)return;const ue=parseFloat(j),me=B==="expense"?-Math.abs(ue):Math.abs(ue),F=k.trim()?k.trim().toUpperCase().slice(0,3):Fi[g]||g.slice(0,2).toUpperCase();c&&d?d({...c,title:f,category:g,badge:F,note:T.trim(),amount:me}):s({title:f,category:g,badge:F,note:T.trim(),date:"Today",amount:me}),n()};return a.jsx("div",{className:"modal-overlay",onClick:n,children:a.jsxs("div",{className:"modal-content",onClick:q=>q.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:c?"Edit Transaction":"Log a Transaction"}),a.jsx("button",{className:"modal-close-btn",onClick:n,children:a.jsx(Vn,{size:18})})]}),a.jsxs("form",{onSubmit:H,className:"modal-form",children:[a.jsxs("div",{className:"type-toggle",children:[a.jsxs("button",{type:"button",className:`type-btn ${B==="expense"?"active-expense":""}`,onClick:()=>Q("expense"),children:[a.jsx(Lg,{size:16})," Expense"]}),a.jsxs("button",{type:"button",className:`type-btn ${B==="income"?"active-income":""}`,onClick:()=>Q("income"),children:[a.jsx(Dg,{size:16})," Income"]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Title / Merchant"}),a.jsx("input",{type:"text",placeholder:"e.g. Whole Foods, Freelance",value:f,onChange:q=>p(q.target.value),required:!0})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Category"}),a.jsxs("select",{value:g,onChange:q=>K(q.target.value),children:[a.jsx("option",{value:"Groceries",children:"Groceries"}),a.jsx("option",{value:"Cafés",children:"Cafés"}),a.jsx("option",{value:"Transport",children:"Transport"}),a.jsx("option",{value:"Rent",children:"Rent"}),a.jsx("option",{value:"Utilities",children:"Utilities"}),a.jsx("option",{value:"Leisure",children:"Leisure"}),a.jsx("option",{value:"Freelance",children:"Freelance"}),a.jsx("option",{value:"Salary",children:"Salary"})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"CatShow (Badge Code)"}),a.jsx("input",{type:"text",placeholder:"e.g. GR, FR, CA",value:k,maxLength:3,onChange:q=>L(q.target.value.toUpperCase())})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Note / Subtitle (Optional)"}),a.jsx("input",{type:"text",placeholder:"e.g. Weekly shop, Poster design",value:T,onChange:q=>D(q.target.value)})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Amount (€)"}),a.jsx("input",{type:"number",step:"0.01",placeholder:"0.00",value:j,onChange:q=>Y(q.target.value),required:!0})]})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{type:"button",className:"btn-cancel",onClick:n,children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-submit",children:c?"Update Transaction":"Save Transaction"})]})]})]})})},zf={Rent:{name:"Rent",color:"#181d27"},Transport:{name:"Transport",color:"#b45309"},Leisure:{name:"Leisure",color:"#2563eb"},Utilities:{name:"Utilities",color:"#475569"},Groceries:{name:"Groceries",color:"#2e7d32"},Cafés:{name:"Cafés",color:"#c05621"},Freelance:{name:"Freelance",color:"#0d9488"},Salary:{name:"Salary",color:"#1b4d2e"},"Dining out":{name:"Dining out",color:"#d97706"},Subscriptions:{name:"Subscriptions",color:"#7c3aed"}},gx=({isOpen:i,onClose:n,initialFilters:s,onApplyFilters:c,availableCategories:d})=>{const[f,p]=V.useState(s.category||"all"),[g,y]=V.useState(""),[k,L]=V.useState(s.minAmount||""),[T,D]=V.useState(s.maxAmount||""),[j,Y]=V.useState(s.fromDate||""),[B,Q]=V.useState(s.toDate||""),[K,H]=V.useState(["Rent","Transport","Leisure","Utilities","Groceries","Cafés","Freelance","Salary"]),[q,ue]=V.useState(["Dining out","Subscriptions"]),[me,F]=V.useState(null);if(V.useEffect(()=>{if(me){const I=setTimeout(()=>{F(null)},6e3);return()=>clearTimeout(I)}},[me]),V.useEffect(()=>{d.length>0&&H(I=>{const G=new Set([...I,...d]);return q.forEach(le=>G.delete(le)),Array.from(G)})},[d]),V.useEffect(()=>{i&&(p(s.category||"all"),L(s.minAmount||""),D(s.maxAmount||""),Y(s.fromDate||""),Q(s.toDate||""),y(""))},[i,s]),!i)return null;const z=(I,G)=>{I.stopPropagation();const le=!!zf[G];H(xe=>xe.filter(ne=>ne!==G)),le&&ue(xe=>xe.includes(G)?xe:[...xe,G]),F({categoryName:G,isDefault:le}),f.toLowerCase()===G.toLowerCase()&&p("all")},$=()=>{if(!me)return;const{categoryName:I,isDefault:G}=me;H(le=>le.includes(I)?le:[...le,I]),G&&ue(le=>le.filter(xe=>xe!==I)),p(I),F(null)},ie=I=>{ue(G=>G.filter(le=>le!==I)),H(G=>G.includes(I)?G:[...G,I]),p(I)},R=K.filter(I=>I.toLowerCase().includes(g.toLowerCase().trim())),de=()=>{p("all"),y(""),L(""),D(""),Y(""),Q("")},C=()=>{c({category:f,minAmount:k,maxAmount:T,fromDate:j,toDate:B}),n()};return a.jsx("div",{className:"modal-backdrop-overlay",onClick:n,children:a.jsxs("div",{className:"more-filters-modal-card",onClick:I=>I.stopPropagation(),role:"dialog","aria-modal":"true",children:[me&&a.jsxs("div",{className:"toast-undo-banner",children:[a.jsxs("div",{className:"toast-content-text",children:[a.jsxs("span",{className:"toast-title",children:[me.categoryName," removed."]}),a.jsx("span",{className:"toast-sub",children:"You can undo this right away."})]}),a.jsx("button",{className:"btn-toast-undo",onClick:$,children:"Undo"})]}),a.jsxs("div",{className:"modal-header-row",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"modal-title-text",children:"More filters"}),a.jsx("p",{className:"modal-subtitle-text",children:"Narrow the ledger by category, amount, or date."})]}),a.jsx("button",{className:"modal-close-btn",onClick:n,"aria-label":"Close modal",children:a.jsx(Vn,{size:18})})]}),a.jsxs("div",{className:"modal-body-content",children:[a.jsxs("div",{className:"filter-field-section",children:[a.jsx("label",{className:"field-label-title",children:"Category"}),a.jsxs("div",{className:"category-select-box",children:[a.jsxs("div",{className:"cat-box-search",children:[a.jsx(gl,{size:16,className:"cat-search-icon"}),a.jsx("input",{type:"text",className:"cat-search-input",placeholder:"Search or create a category...",value:g,onChange:I=>y(I.target.value)})]}),a.jsxs("div",{className:"cat-options-scroll",children:["All categories".toLowerCase().includes(g.toLowerCase().trim())&&a.jsxs("button",{className:`cat-option-item ${f==="all"?"selected":""}`,onClick:()=>p("all"),children:[a.jsxs("span",{className:"cat-option-left",children:[a.jsx("span",{className:"cat-dot",style:{backgroundColor:"#9e9e9e"}}),a.jsx("span",{className:"cat-option-name",children:"All categories"})]}),f==="all"&&a.jsx("span",{className:"cat-checkmark",children:"✓"})]}),R.map(I=>{const G=f.toLowerCase()===I.toLowerCase(),le=zf[I],xe=le?le.color:"#799c87";return a.jsxs("div",{className:`cat-option-item ${G?"selected":""}`,onClick:()=>p(I),children:[a.jsxs("span",{className:"cat-option-left",children:[a.jsx("span",{className:"cat-dot",style:{backgroundColor:xe}}),a.jsx("span",{className:"cat-option-name",children:I})]}),a.jsxs("div",{className:"cat-option-actions",children:[G&&a.jsx("span",{className:"cat-checkmark",children:"✓"}),a.jsx("button",{className:"cat-delete-btn",title:`Delete ${I}`,onClick:ne=>z(ne,I),children:a.jsx(Tl,{size:14})})]})]},I)}),g.trim()&&!R.some(I=>I.toLowerCase()===g.toLowerCase().trim())&&g.toLowerCase().trim()!=="all categories"&&a.jsx("button",{className:"cat-option-item custom-create",onClick:()=>{const I=g.trim();K.includes(I)||H([...K,I]),p(I),y("")},children:a.jsxs("span",{className:"cat-option-left",children:[a.jsx(Xi,{size:14}),a.jsxs("span",{children:['Use "',g.trim(),'"']})]})})]}),q.length>0&&a.jsxs("div",{className:"suggested-chips-section",children:[a.jsx("span",{className:"suggested-label",children:"SUGGESTED"}),a.jsx("div",{className:"suggested-chips-flex",children:q.map(I=>a.jsxs("button",{className:`chip-btn ${f.toLowerCase()===I.toLowerCase()?"active":""}`,onClick:()=>ie(I),children:["+ ",I]},I))})]})]})]}),a.jsxs("div",{className:"filter-two-col-grid",children:[a.jsxs("div",{className:"field-col",children:[a.jsx("label",{className:"field-label-title",children:"Min amount"}),a.jsx("input",{type:"number",step:"any",className:"filter-text-input",placeholder:"e.g. 10",value:k,onChange:I=>L(I.target.value)})]}),a.jsxs("div",{className:"field-col",children:[a.jsx("label",{className:"field-label-title",children:"Max amount"}),a.jsx("input",{type:"number",step:"any",className:"filter-text-input",placeholder:"e.g. 500",value:T,onChange:I=>D(I.target.value)})]})]}),a.jsxs("div",{className:"filter-two-col-grid",children:[a.jsxs("div",{className:"field-col",children:[a.jsx("label",{className:"field-label-title",children:"From"}),a.jsx("input",{type:"date",className:"filter-text-input",value:j,onChange:I=>Y(I.target.value)})]}),a.jsxs("div",{className:"field-col",children:[a.jsx("label",{className:"field-label-title",children:"To"}),a.jsx("input",{type:"date",className:"filter-text-input",value:B,onChange:I=>Q(I.target.value)})]})]})]}),a.jsxs("div",{className:"modal-footer-actions",children:[a.jsx("button",{className:"btn-modal-reset",onClick:de,children:"Reset"}),a.jsx("button",{className:"btn-modal-apply",onClick:C,children:"Apply filters"})]})]})})},yx=["#1f5335","#c05621","#d99b38","#ffffff","#0b3319","#5073b8","#3b6f7a","#008b8b","#c85043","#4e9b58","#8c56a8","#c89a24"],mp={GR:{bg:"#2e7d32",text:"#ffffff"},CA:{bg:"#c05621",text:"#ffffff"},TR:{bg:"#b45309",text:"#ffffff"},LE:{bg:"#2563eb",text:"#ffffff"},FR:{bg:"#0d9488",text:"#ffffff"},UT:{bg:"#475569",text:"#ffffff"},SA:{bg:"#1b4d2e",text:"#ffffff"},RE:{bg:"#0e2e1b",text:"#ffffff"}},vx=({transactions:i,onOpenLogModal:n,onDeleteTransaction:s,onEditTransaction:c,onUpdateTransactionColor:d})=>{const[f,p]=V.useState("all"),[g,y]=V.useState(""),[k,L]=V.useState(null),[T,D]=V.useState(!1),[j,Y]=V.useState({category:"all",minAmount:"",maxAmount:"",fromDate:"",toDate:""}),B=(F,z=!0)=>{const $=F<0,ie=Math.abs(F).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return z?$?`-€${ie}`:`+€${ie}`:`€${ie}`},Q=V.useMemo(()=>{const F=new Set;return i.forEach(z=>{z.category&&F.add(z.category)}),Array.from(F)},[i]),K=V.useMemo(()=>i.filter(F=>{if(f==="income"&&F.amount<=0||f==="expense"&&F.amount>=0||j.category!=="all"&&F.category.toLowerCase()!==j.category.toLowerCase())return!1;if(g.trim()){const $=g.toLowerCase().trim(),ie=F.title.toLowerCase().includes($),R=F.note?F.note.toLowerCase().includes($):!1,de=F.subtitle?F.subtitle.toLowerCase().includes($):!1,C=F.category.toLowerCase().includes($),I=F.badge.toLowerCase().includes($),G=(F.dateGroup||F.date).toLowerCase().includes($);if(!ie&&!R&&!de&&!C&&!I&&!G)return!1}const z=Math.abs(F.amount);if(j.minAmount&&!isNaN(parseFloat(j.minAmount))&&z<parseFloat(j.minAmount)||j.maxAmount&&!isNaN(parseFloat(j.maxAmount))&&z>parseFloat(j.maxAmount))return!1;if(j.fromDate||j.toDate){const $=new Date(F.date);if(!isNaN($.getTime())){if(j.fromDate){const ie=new Date(j.fromDate);if($<ie)return!1}if(j.toDate){const ie=new Date(j.toDate);if(ie.setHours(23,59,59,999),$>ie)return!1}}}return!0}),[i,f,g,j]),H=V.useMemo(()=>{const F=[],z=new Map;return K.forEach($=>{const ie=$.dateGroup||$.date||"Other";if(!z.has(ie)){const de={items:[],total:0};z.set(ie,de),F.push({dateGroup:ie,items:de.items,total:0})}const R=z.get(ie);R.items.push($),R.total+=$.amount}),F.forEach($=>{const ie=z.get($.dateGroup);ie&&($.total=ie.total)}),F},[K]),q=(F,z)=>{F.stopPropagation(),L(k===z?null:z)},ue=()=>{L(null)},me=F=>{if(F.note&&F.note.trim())return a.jsxs("span",{className:"tx-subtitle-row",children:[a.jsxs("span",{className:"tx-category-highlight",children:[F.category,":"]})," ",a.jsx("span",{className:"tx-note-highlight",children:F.note})]});if(F.subtitle&&F.subtitle.includes(":")){const z=F.subtitle.split(":");return a.jsxs("span",{className:"tx-subtitle-row",children:[a.jsxs("span",{className:"tx-category-highlight",children:[z[0].trim(),":"]})," ",a.jsx("span",{className:"tx-note-highlight",children:z.slice(1).join(":").trim()})]})}if(F.subtitle&&F.subtitle.includes("·")){const z=F.subtitle.split("·");return a.jsxs("span",{className:"tx-subtitle-row",children:[a.jsxs("span",{className:"tx-category-highlight",children:[z[0].trim(),":"]})," ",a.jsx("span",{className:"tx-note-highlight",children:z.slice(1).join("·").trim()})]})}return a.jsx("span",{className:"tx-category-highlight",children:F.category||F.subtitle})};return a.jsxs("div",{className:"transactions-page",onClick:ue,children:[a.jsxs("div",{className:"tx-page-header",children:[a.jsxs("div",{className:"tx-header-left",children:[a.jsx("span",{className:"tx-overline",children:"LEDGER"}),a.jsx("h1",{className:"tx-title",children:"Transactions"}),a.jsx("p",{className:"tx-subtitle",children:"Every single transaction — money in and money out — is automatically logged so you never lose the thread."})]}),a.jsx("div",{className:"tx-header-right",children:a.jsxs("button",{className:"btn-new-entry",onClick:n,children:[a.jsx(Xi,{size:16}),a.jsx("span",{children:"New entry"})]})})]}),a.jsxs("div",{className:"tx-toolbar",children:[a.jsxs("div",{className:"tx-search-wrapper",children:[a.jsx(gl,{size:18,className:"tx-search-icon"}),a.jsx("input",{type:"text",className:"tx-search-input",placeholder:"Search title, merchant, note...",value:g,onChange:F=>y(F.target.value)}),g&&a.jsx("button",{className:"tx-clear-search-btn",onClick:()=>y(""),children:a.jsx(Vn,{size:14})})]}),a.jsxs("div",{className:"tx-controls-right",children:[a.jsxs("div",{className:"tx-segmented-control",children:[a.jsx("button",{className:`tx-segment-btn ${f==="all"?"active":""}`,onClick:()=>p("all"),children:"All"}),a.jsx("button",{className:`tx-segment-btn ${f==="income"?"active":""}`,onClick:()=>p("income"),children:"Income"}),a.jsx("button",{className:`tx-segment-btn ${f==="expense"?"active":""}`,onClick:()=>p("expense"),children:"Expense"})]}),a.jsxs("button",{className:`btn-more-filters ${T||j.category!=="all"||j.minAmount||j.maxAmount||j.fromDate||j.toDate?"active":""}`,onClick:F=>{F.stopPropagation(),D(!0)},children:[a.jsx(Hg,{size:15}),a.jsx("span",{children:"More filters"}),(j.category!=="all"||j.minAmount||j.maxAmount||j.fromDate||j.toDate)&&a.jsx("span",{className:"filter-active-dot"})]})]})]}),a.jsx(gx,{isOpen:T,onClose:()=>D(!1),initialFilters:j,onApplyFilters:F=>Y(F),availableCategories:Q}),a.jsx("div",{className:"tx-list-container",children:H.length===0?a.jsxs("div",{className:"tx-empty-state",children:[a.jsx("div",{className:"empty-icon-circle",children:a.jsx(gl,{size:24})}),a.jsx("h3",{children:"No transactions found"}),a.jsx("p",{children:"We couldn't find any transactions matching your current filters or search term."}),a.jsx("button",{className:"btn-clear-all-filters",onClick:()=>{p("all"),y(""),Y({category:"all",minAmount:"",maxAmount:"",fromDate:"",toDate:""})},children:"Clear filters"})]}):H.map(F=>a.jsxs("div",{className:"tx-group",children:[a.jsxs("div",{className:"tx-group-header",children:[a.jsx("h3",{className:"tx-group-date",children:F.dateGroup}),a.jsx("span",{className:"tx-group-sum",children:B(F.total)})]}),a.jsx("div",{className:"tx-group-card",children:F.items.map(z=>{const $=mp[z.badge]||{bg:"#2e7d32"},ie=z.color||$.bg,R=ie.toLowerCase()==="#ffffff"?"#181d27":"#ffffff",de=k===z.id;return a.jsxs("div",{className:`tx-item-card ${de?"menu-active":""}`,children:[a.jsx("div",{className:"tx-badge",style:{backgroundColor:ie,color:R},title:`CatShow: ${z.badge}`,children:z.badge}),a.jsxs("div",{className:"tx-details",children:[a.jsx("div",{className:"tx-title-text",children:z.title}),a.jsx("div",{className:"tx-subtitle-text",children:me(z)})]}),a.jsx("div",{className:`tx-amount ${z.amount>0?"positive":"negative"}`,children:B(z.amount)}),a.jsxs("div",{className:"tx-menu-wrapper",children:[a.jsx("button",{className:"tx-menu-btn",onClick:C=>q(C,z.id),"aria-label":"Transaction options",children:a.jsx(Og,{size:16})}),de&&a.jsxs("div",{className:"tx-dropdown-menu",onClick:C=>C.stopPropagation(),children:[a.jsxs("button",{className:"dropdown-item",onClick:()=>{ue(),c&&c(z)},children:[a.jsx($g,{size:15}),a.jsx("span",{children:"Edit entry"})]}),s&&a.jsxs("button",{className:"dropdown-item delete",onClick:()=>{ue(),s(z.id)},children:[a.jsx(Tl,{size:15}),a.jsx("span",{children:"Delete"})]}),a.jsx("div",{className:"dropdown-divider"}),a.jsxs("div",{className:"dropdown-color-section",children:[a.jsx("span",{className:"color-section-title",children:"Colour"}),a.jsx("div",{className:"color-swatch-grid",children:yx.map(C=>{const I=ie.toLowerCase()===C.toLowerCase();return a.jsx("button",{className:`color-swatch-btn ${I?"active":""}`,style:{backgroundColor:C},title:`Set color: ${C}`,onClick:()=>{d?d(z.id,C):c&&c({...z,color:C})}},C)})}),a.jsx("button",{className:"btn-use-category-color",onClick:()=>{if(d)d(z.id,void 0);else if(c){const{color:C,...I}=z;c(I)}},children:"Use category colour"})]})]})]})]},z.id)})})]},F.dateGroup))}),a.jsxs("footer",{className:"tx-page-footer",children:[a.jsx("div",{className:"tx-footer-left",children:"Where did it come from · where did it go · are you on track · what next."}),a.jsx("div",{className:"tx-footer-right",children:"Vinora · v1.0 · Calm by design"})]})]})},wx=({user:i,theme:n,transactions:s,currentBalance:c,onOpenLogModal:d,onNavigateTab:f})=>{const[p,g]=V.useState(null),[y,k]=V.useState("all"),L=[{label:"Feb",income:3100,expense:2100,x:60},{label:"Mar",income:3350,expense:2400,x:140},{label:"Apr",income:3400,expense:2050,x:220},{label:"May",income:3850,expense:2480,x:300},{label:"Jun",income:3450,expense:2300,x:380},{label:"Jul",income:3870,expense:1483,x:460}],T=4e3,D=20,j=160,Y=j-D,B=L.map(R=>({...R,incY:j-R.income/T*Y,expY:j-R.expense/T*Y})),Q=R=>{if(R.length===0)return"";if(R.length===1)return`M ${R[0].x},${R[0].y}`;const de=R.length,C=[],I=[];for(let ne=0;ne<de-1;ne++){const M=R[ne+1].x-R[ne].x,Z=R[ne+1].y-R[ne].y;C.push(M),I.push(Z/M)}const G=[I[0]];for(let ne=0;ne<de-2;ne++){const M=I[ne],Z=I[ne+1];if(M*Z<=0)G.push(0);else{const U=C[ne],x=C[ne+1],N=U+x;G.push(3*N/((N+x)/M+(N+U)/Z))}}G.push(I[I.length-1]);const le=[];for(let ne=0;ne<G.length-1;ne++){const M=I[ne];if(M===0)le.push(0),G[ne+1]=0;else{const Z=G[ne]/M,U=G[ne+1]/M,x=Math.hypot(Z,U);if(x>9){const N=3/x;le.push(N*Z*M),G[ne+1]=N*U*M}else le.push(G[ne])}}le.push(G[G.length-1]);let xe=`M ${R[0].x.toFixed(2)},${R[0].y.toFixed(2)}`;for(let ne=0;ne<de-1;ne++){const M=R[ne],Z=R[ne+1],U=C[ne],x=M.x+U/3,N=M.y+le[ne]*U/3,ce=Z.x-U/3,fe=Z.y-G[ne+1]*U/3;xe+=` C ${x.toFixed(2)},${N.toFixed(2)} ${ce.toFixed(2)},${fe.toFixed(2)} ${Z.x.toFixed(2)},${Z.y.toFixed(2)}`}return xe},K=B.map(R=>({x:R.x,y:R.incY})),H=B.map(R=>({x:R.x,y:R.expY})),q=Q(K),ue=`${q} L 460,160 L 60,160 Z`,me=Q(H),F=`${me} L 460,160 L 60,160 Z`,z=n==="dark"?"#5FAF7A":"#225A39",$=n==="dark"?"#E07A48":"#C26D40",ie=i!=null&&i.name?i.name.split(" ")[0].toUpperCase():"ELENA";return a.jsxs("div",{className:"dash-grid",children:[a.jsxs("div",{className:"hero-greeting-card",children:[a.jsxs("div",{className:"hero-top-label",children:[a.jsx(Zd,{size:14,className:"hero-sparkle"}),a.jsxs("span",{children:["GOOD EVENING, ",ie]})]}),a.jsxs("div",{className:"hero-balance-section",children:[a.jsxs("div",{className:"hero-balance-header",children:[a.jsx("span",{className:"balance-sub",children:"Available balance · 22 Jul 2026"}),a.jsxs("div",{className:"balance-row",children:[a.jsxs("h1",{className:"balance-amount",children:["€",c.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{className:"balance-badge",children:[a.jsx(Tg,{size:14}),a.jsx("span",{children:"+€2,386.96 this month"})]})]})]}),a.jsx("p",{className:"hero-insight-text",children:"You're spending 38% of what you earn this month. On this pace, you'll close July with a comfortable margin."}),a.jsxs("div",{className:"hero-action-buttons",children:[a.jsxs("button",{className:"btn-log-tx",onClick:d,children:[a.jsx(Xi,{size:16}),a.jsx("span",{children:"Log a transaction"})]}),a.jsx("button",{className:"btn-see-month",onClick:()=>f("reports"),children:a.jsx("span",{children:"See the month in full"})})]})]})]}),a.jsxs("div",{className:"hero-stats-col",children:[a.jsxs("div",{className:"stat-card income-card",children:[a.jsxs("div",{className:"stat-card-header",children:[a.jsx("span",{className:"stat-title",children:"INCOME · JULY"}),a.jsx("div",{className:"stat-icon-wrapper",children:a.jsx(Kg,{size:16})})]}),a.jsx("div",{className:"stat-amount",children:"€3,870.00"}),a.jsx("div",{className:"stat-growth positive",children:"+12% vs June"})]}),a.jsxs("div",{className:"stat-card expenses-card",children:[a.jsxs("div",{className:"stat-card-header",children:[a.jsx("span",{className:"stat-title",children:"EXPENSES · JULY"}),a.jsx("div",{className:"stat-icon-wrapper",children:a.jsx(Wg,{size:16})})]}),a.jsx("div",{className:"stat-amount",children:"€1,483.04"}),a.jsx("div",{className:"stat-growth negative",children:"-8% vs June"})]})]}),a.jsxs("div",{className:"dash-card chart-card",children:[a.jsxs("div",{className:"card-header-flex",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"card-title",children:"Six months of flow"}),a.jsx("p",{className:"card-subtitle",children:"Income against expenses, monthly"})]}),a.jsx("span",{className:"card-range-badge",children:"Feb — Jul"})]}),a.jsx("div",{className:"chart-wrapper",children:a.jsxs("svg",{className:"flow-chart-svg",viewBox:"0 0 500 180",preserveAspectRatio:"none",children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:"incomeGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:z,stopOpacity:"0.22"}),a.jsx("stop",{offset:"100%",stopColor:z,stopOpacity:"0.0"})]}),a.jsxs("linearGradient",{id:"expenseGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:$,stopOpacity:"0.18"}),a.jsx("stop",{offset:"100%",stopColor:$,stopOpacity:"0.0"})]}),a.jsx("filter",{id:"incomeGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:a.jsx("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3.5",floodColor:z,floodOpacity:"0.35"})}),a.jsx("filter",{id:"expenseGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:a.jsx("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3.5",floodColor:$,floodOpacity:"0.35"})}),a.jsx("filter",{id:"tooltipShadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:a.jsx("feDropShadow",{dx:"0",dy:"4",stdDeviation:"6",floodColor:"#000000",floodOpacity:"0.12"})})]}),a.jsx("line",{x1:"40",y1:"20",x2:"480",y2:"20",className:"grid-line"}),a.jsx("line",{x1:"40",y1:"55",x2:"480",y2:"55",className:"grid-line"}),a.jsx("line",{x1:"40",y1:"90",x2:"480",y2:"90",className:"grid-line"}),a.jsx("line",{x1:"40",y1:"125",x2:"480",y2:"125",className:"grid-line"}),a.jsx("line",{x1:"40",y1:"160",x2:"480",y2:"160",className:"grid-line"}),a.jsx("text",{x:"30",y:"24",className:"axis-label",textAnchor:"end",children:"4000"}),a.jsx("text",{x:"30",y:"59",className:"axis-label",textAnchor:"end",children:"3000"}),a.jsx("text",{x:"30",y:"94",className:"axis-label",textAnchor:"end",children:"2000"}),a.jsx("text",{x:"30",y:"129",className:"axis-label",textAnchor:"end",children:"1000"}),a.jsx("text",{x:"30",y:"164",className:"axis-label",textAnchor:"end",children:"0"}),p!==null&&a.jsx("line",{x1:B[p].x,y1:"20",x2:B[p].x,y2:"160",className:"chart-vertical-guide"}),(y==="all"||y==="income")&&a.jsx("path",{d:ue,fill:"url(#incomeGrad)"}),(y==="all"||y==="expense")&&a.jsx("path",{d:F,fill:"url(#expenseGrad)"}),(y==="all"||y==="income")&&a.jsx("path",{d:q,fill:"none",stroke:z,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#incomeGlow)"}),(y==="all"||y==="expense")&&a.jsx("path",{d:me,fill:"none",stroke:$,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#expenseGlow)"}),B.map((R,de)=>{const C=p===de;return a.jsxs("g",{children:[(y==="all"||y==="income")&&a.jsxs("g",{children:[C&&a.jsx("circle",{cx:R.x,cy:R.incY,r:10,fill:z,opacity:.25,className:"chart-dot-pulse"}),a.jsx("circle",{cx:R.x,cy:R.incY,r:C?5.5:4,fill:z,stroke:"#ffffff",strokeWidth:C?2:0,className:"chart-dot"})]}),(y==="all"||y==="expense")&&a.jsxs("g",{children:[C&&a.jsx("circle",{cx:R.x,cy:R.expY,r:10,fill:$,opacity:.25,className:"chart-dot-pulse"}),a.jsx("circle",{cx:R.x,cy:R.expY,r:C?5.5:4,fill:$,stroke:"#ffffff",strokeWidth:C?2:0,className:"chart-dot"})]}),a.jsx("text",{x:R.x,y:"176",className:`axis-label ${C?"axis-label-active":""}`,textAnchor:"middle",fontWeight:C?"700":"500",fill:C?n==="dark"?"#f0f4f2":"#1a221e":void 0,children:R.label}),a.jsx("rect",{x:R.x-35,y:"15",width:"70",height:"155",fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>g(de),onMouseLeave:()=>g(null)})]},R.label)}),p!==null&&(()=>{const R=B[p],de=114,C=52;let I=R.x-de/2;I<10&&(I=10),I+de>490&&(I=490-de);const G=10,le=R.income-R.expense;return a.jsxs("g",{filter:"url(#tooltipShadow)",style:{pointerEvents:"none"},children:[a.jsx("rect",{x:I,y:G,width:de,height:C,rx:"8",fill:n==="dark"?"#1b221d":"#ffffff",stroke:n==="dark"?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.08)",strokeWidth:"1"}),a.jsx("text",{x:I+8,y:G+15,fontSize:"9.5",fontWeight:"700",fill:n==="dark"?"#e2e8e4":"#2d3732",children:R.label}),a.jsx("text",{x:I+de-8,y:G+15,fontSize:"8.5",fontWeight:"600",fill:le>=0?n==="dark"?"#5FAF7A":"#225A39":"#C26D40",textAnchor:"end",children:le>=0?`+€${le.toLocaleString()}`:`-€${Math.abs(le).toLocaleString()}`}),a.jsx("circle",{cx:I+12,cy:G+28,r:"3",fill:z}),a.jsx("text",{x:I+19,y:G+31,fontSize:"8.5",fontWeight:"500",fill:n==="dark"?"#9eb3a6":"#5a6860",children:"Inc:"}),a.jsxs("text",{x:I+de-8,y:G+31,fontSize:"8.5",fontWeight:"700",fill:z,textAnchor:"end",children:["€",R.income.toLocaleString()]}),a.jsx("circle",{cx:I+12,cy:G+41,r:"3",fill:$}),a.jsx("text",{x:I+19,y:G+44,fontSize:"8.5",fontWeight:"500",fill:n==="dark"?"#9eb3a6":"#5a6860",children:"Exp:"}),a.jsxs("text",{x:I+de-8,y:G+44,fontSize:"8.5",fontWeight:"700",fill:$,textAnchor:"end",children:["€",R.expense.toLocaleString()]})]})})()]})}),a.jsxs("div",{className:"chart-legend",children:[a.jsxs("button",{className:`legend-item-btn ${y==="income"?"active":""} ${y==="expense"?"dimmed":""}`,onClick:()=>k(y==="income"?"all":"income"),title:"Click to toggle Income focus",children:[a.jsx("span",{className:"legend-dot income-dot",style:{backgroundColor:z}}),a.jsx("span",{children:"Income"})]}),a.jsxs("button",{className:`legend-item-btn ${y==="expense"?"active":""} ${y==="income"?"dimmed":""}`,onClick:()=>k(y==="expense"?"all":"expense"),title:"Click to toggle Expense focus",children:[a.jsx("span",{className:"legend-dot expense-dot",style:{backgroundColor:$}}),a.jsx("span",{children:"Expense"})]})]})]}),a.jsxs("div",{className:"dash-card where-card",children:[a.jsx("div",{className:"card-header-flex",children:a.jsxs("div",{children:[a.jsx("h3",{className:"card-title",children:"Where it went"}),a.jsx("p",{className:"card-subtitle",children:"By category, this month"})]})}),a.jsxs("div",{className:"category-progress-list",children:[a.jsxs("div",{className:"cat-item",children:[a.jsxs("div",{className:"cat-header",children:[a.jsx("span",{className:"cat-name",children:"Rent"}),a.jsx("span",{className:"cat-val",children:"-€1,180.00"})]}),a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-bar bar-rent",style:{width:"80%"}})})]}),a.jsxs("div",{className:"cat-item",children:[a.jsxs("div",{className:"cat-header",children:[a.jsx("span",{className:"cat-name",children:"Groceries"}),a.jsx("span",{className:"cat-val",children:"-€106.39"})]}),a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-bar bar-groceries",style:{width:"42%"}})})]}),a.jsxs("div",{className:"cat-item",children:[a.jsxs("div",{className:"cat-header",children:[a.jsx("span",{className:"cat-name",children:"Utilities"}),a.jsx("span",{className:"cat-val",children:"-€74.90"})]}),a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-bar bar-utilities",style:{width:"32%"}})})]}),a.jsxs("div",{className:"cat-item",children:[a.jsxs("div",{className:"cat-header",children:[a.jsx("span",{className:"cat-name",children:"Transport"}),a.jsx("span",{className:"cat-val",children:"-€68.90"})]}),a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-bar bar-transport",style:{width:"28%"}})})]}),a.jsxs("div",{className:"cat-item",children:[a.jsxs("div",{className:"cat-header",children:[a.jsx("span",{className:"cat-name",children:"Leisure"}),a.jsx("span",{className:"cat-val",children:"-€42.90"})]}),a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-bar bar-leisure",style:{width:"20%"}})})]})]})]}),a.jsxs("div",{className:"dash-card activity-card",children:[a.jsxs("div",{className:"card-header-flex",children:[a.jsx("h3",{className:"card-title",children:"Recent activity"}),a.jsx("button",{className:"btn-view-all",onClick:()=>f("transactions"),children:"View all"})]}),a.jsx("div",{className:"activity-list",children:s.slice(0,6).map(R=>{const de=mp[R.badge]||{bg:"#2e7d32",text:"#ffffff"};return a.jsxs("div",{className:"activity-item",children:[a.jsxs("div",{className:"activity-left",children:[a.jsx("div",{className:"tx-badge",style:{backgroundColor:de.bg,color:de.text},children:R.badge}),a.jsxs("div",{className:"tx-details",children:[a.jsx("span",{className:"activity-item-title",children:R.title}),a.jsxs("span",{className:"tx-meta",children:[R.category," · ",R.date]})]})]}),a.jsx("div",{className:`tx-amount ${R.amount>0?"positive":""}`,children:R.amount>0?`+€${R.amount.toFixed(2)}`:`-€${Math.abs(R.amount).toFixed(2)}`})]},R.id)})})]}),a.jsxs("div",{className:"featured-goal-card",children:[a.jsxs("div",{className:"goal-top",children:[a.jsxs("div",{className:"goal-header-label",children:[a.jsx(Zd,{size:14,className:"goal-sparkle"}),a.jsx("span",{children:"FEATURED GOAL"})]}),a.jsx("h2",{className:"goal-title",children:"Kyoto in autumn"}),a.jsx("p",{className:"goal-subtitle",children:"Two weeks, slow travel"})]}),a.jsxs("div",{className:"goal-amount-section",children:[a.jsxs("div",{className:"goal-amount-row",children:[a.jsx("span",{className:"goal-big-amount",children:"€1,840.00"}),a.jsx("span",{className:"goal-target-amount",children:"of €3,200.00"})]}),a.jsx("div",{className:"goal-progress-track",children:a.jsx("div",{className:"goal-progress-bar",style:{width:"57%"}})}),a.jsxs("div",{className:"goal-meta-row",children:[a.jsx("span",{children:"57% saved"}),a.jsx("span",{children:"By Oct 2026"})]})]}),a.jsx("button",{className:"btn-all-goals",onClick:()=>f("savings"),children:"All savings goals"})]})]})},xx=[{id:"goal-1",title:"Kyoto in autumn",subtitle:"Two weeks, slow travel",category:"Travel",categoryDotColor:"#36b37e",targetDate:"Oct 2026",currentAmount:1840,targetAmount:3200,isHero:!0},{id:"goal-2",title:"New lens — 35mm",category:"Gear",categoryDotColor:"#c26d40",targetDate:"Sept 2026",currentAmount:620,targetAmount:850,isHero:!1},{id:"goal-3",title:"Emergency fund",subtitle:"Three months of expenses",category:"Safety net",categoryDotColor:"#225a39",currentAmount:4275,targetAmount:6e3,isHero:!1}],Sx=()=>{const[i,n]=V.useState(xx),[s,c]=V.useState(!1),[d,f]=V.useState(null),[p,g]=V.useState(null),[y,k]=V.useState(""),[L,T]=V.useState(""),[D,j]=V.useState("Travel"),[Y,B]=V.useState("Dec 2026"),[Q,K]=V.useState(""),[H,q]=V.useState(""),[ue,me]=V.useState(""),F=C=>{if(C.preventDefault(),!y||!H)return;const I=parseFloat(H)||1e3,G=parseFloat(Q)||0,le={Travel:"#36b37e",Gear:"#c26d40","Safety net":"#225a39",Life:"#3b82f6",Vehicle:"#eab308"},xe={id:`goal-${Date.now()}`,title:y,subtitle:L,category:D,categoryDotColor:le[D]||"#36b37e",targetDate:Y,currentAmount:G,targetAmount:I,isHero:!1};n([...i,xe]),c(!1),k(""),T(""),K(""),q("")},z=C=>{if(C.preventDefault(),!d||!ue)return;const I=parseFloat(ue);isNaN(I)||I<=0||(n(i.map(G=>G.id===d.id?{...G,currentAmount:Math.min(G.targetAmount,G.currentAmount+I)}:G)),f(null),me(""))},$=C=>{C.preventDefault(),p&&(n(i.map(I=>I.id===p.id?p:I)),g(null))},ie=C=>{n(i.filter(I=>I.id!==C)),g(null)},R=i.find(C=>C.isHero)||i[0],de=i.filter(C=>C.id!==(R==null?void 0:R.id));return a.jsxs("div",{className:"savings-view-container",children:[a.jsxs("div",{className:"savings-header",children:[a.jsxs("div",{className:"savings-header-text",children:[a.jsx("span",{className:"savings-top-label",children:"Toward Something"}),a.jsx("h1",{className:"savings-title",children:"Savings goal"}),a.jsx("p",{className:"savings-subtitle",children:"A goal you can see is a goal you'll reach. Small contributions, calmy compounded."})]}),a.jsxs("button",{className:"btn-new-goal",onClick:()=>c(!0),children:[a.jsx(Xi,{size:18}),a.jsx("span",{children:"New goal"})]})]}),R&&(()=>{const C=Math.min(100,Math.round(R.currentAmount/R.targetAmount*100)),I=Math.max(0,R.targetAmount-R.currentAmount);return a.jsxs("div",{className:"savings-hero-card",children:[a.jsxs("div",{className:"hero-card-header",children:[a.jsxs("div",{className:"hero-title-group",children:[a.jsx("h2",{className:"hero-goal-title",children:R.title}),R.subtitle&&a.jsx("p",{className:"hero-goal-subtitle",children:R.subtitle})]}),a.jsxs("div",{className:"hero-badges-row",children:[a.jsxs("div",{className:"savings-badge hero-cat-badge",children:[a.jsx("span",{className:"badge-dot",style:{backgroundColor:R.categoryDotColor||"#36b37e"}}),a.jsx("span",{children:R.category})]}),R.targetDate&&a.jsxs("div",{className:"savings-badge hero-date-badge",children:[a.jsx(Xd,{size:13}),a.jsx("span",{children:R.targetDate})]})]})]}),a.jsxs("div",{className:"hero-amount-section",children:[a.jsxs("div",{className:"hero-amount-row",children:[a.jsxs("span",{className:"hero-big-amount",children:["€",R.currentAmount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("span",{className:"hero-target-amount",children:["of €",R.targetAmount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsx("div",{className:"hero-progress-track",children:a.jsx("div",{className:"hero-progress-fill",style:{width:`${C}%`}})}),a.jsxs("div",{className:"hero-meta-row",children:[a.jsxs("span",{children:[C,"% saved"]}),a.jsxs("span",{children:["€",I.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," to go"]})]})]}),a.jsxs("div",{className:"hero-actions-row",children:[a.jsx("button",{className:"btn-hero-contribute",onClick:()=>f(R),children:"Contribute"}),a.jsx("button",{className:"btn-hero-edit",onClick:()=>g(R),children:"Edit Goal"})]})]})})(),a.jsx("div",{className:"savings-grid-row",children:de.map(C=>{const I=Math.min(100,Math.round(C.currentAmount/C.targetAmount*100)),G=Math.max(0,C.targetAmount-C.currentAmount);return a.jsxs("div",{className:"savings-grid-card",children:[a.jsxs("div",{className:"card-top-header",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"grid-goal-title",children:C.title}),C.subtitle&&a.jsx("p",{className:"grid-goal-subtitle",children:C.subtitle})]}),a.jsxs("div",{className:"grid-badges-row",children:[a.jsxs("div",{className:"savings-badge",children:[a.jsx("span",{className:"badge-dot",style:{backgroundColor:C.categoryDotColor||"#c26d40"}}),a.jsx("span",{children:C.category})]}),C.targetDate&&a.jsxs("div",{className:"savings-badge",children:[a.jsx(Xd,{size:12}),a.jsx("span",{children:C.targetDate})]})]})]}),a.jsxs("div",{className:"grid-amount-section",children:[a.jsxs("div",{className:"grid-amount-row",children:[a.jsxs("span",{className:"grid-big-amount",children:["€",C.currentAmount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("span",{className:"grid-target-amount",children:["of €",C.targetAmount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsx("div",{className:"grid-progress-track",children:a.jsx("div",{className:"grid-progress-fill",style:{width:`${I}%`}})}),a.jsxs("div",{className:"grid-meta-row",children:[a.jsxs("span",{children:[I,"% saved"]}),a.jsxs("span",{children:["€",G.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," to go"]})]})]}),a.jsxs("div",{className:"grid-actions-row",children:[a.jsx("button",{className:"btn-grid-contribute",onClick:()=>f(C),children:"Contribute"}),a.jsx("button",{className:"btn-grid-edit",onClick:()=>g(C),children:"Edit Goal"})]})]},C.id)})}),s&&a.jsx("div",{className:"modal-backdrop",onClick:()=>c(!1),children:a.jsxs("div",{className:"modal-content-card",onClick:C=>C.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Create new savings goal"}),a.jsx("button",{className:"btn-modal-close",onClick:()=>c(!1),children:a.jsx(Vn,{size:18})})]}),a.jsxs("form",{onSubmit:F,className:"modal-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Goal Title"}),a.jsx("input",{type:"text",placeholder:"e.g. New Laptop, Paris Trip",value:y,onChange:C=>k(C.target.value),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Subtitle / Description (optional)"}),a.jsx("input",{type:"text",placeholder:"e.g. MacBook Pro M3, 2 weeks travel",value:L,onChange:C=>T(C.target.value)})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Target Amount (€)"}),a.jsx("input",{type:"number",step:"0.01",placeholder:"2500.00",value:H,onChange:C=>q(C.target.value),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Current Saved (€)"}),a.jsx("input",{type:"number",step:"0.01",placeholder:"0.00",value:Q,onChange:C=>K(C.target.value)})]})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Category Tag"}),a.jsxs("select",{value:D,onChange:C=>j(C.target.value),children:[a.jsx("option",{value:"Travel",children:"Travel"}),a.jsx("option",{value:"Gear",children:"Gear"}),a.jsx("option",{value:"Safety net",children:"Safety net"}),a.jsx("option",{value:"Life",children:"Life"}),a.jsx("option",{value:"Vehicle",children:"Vehicle"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Target Date"}),a.jsx("input",{type:"text",placeholder:"e.g. Dec 2026",value:Y,onChange:C=>B(C.target.value)})]})]}),a.jsxs("div",{className:"modal-footer-actions",children:[a.jsx("button",{type:"button",className:"btn-modal-cancel",onClick:()=>c(!1),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-modal-submit",children:"Create goal"})]})]})]})}),d&&a.jsx("div",{className:"modal-backdrop",onClick:()=>f(null),children:a.jsxs("div",{className:"modal-content-card",onClick:C=>C.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("h3",{children:['Contribute to "',d.title,'"']}),a.jsx("button",{className:"btn-modal-close",onClick:()=>f(null),children:a.jsx(Vn,{size:18})})]}),a.jsxs("form",{onSubmit:z,className:"modal-form",children:[a.jsxs("p",{className:"contribute-modal-sub",children:["Currently saved: €",d.currentAmount.toLocaleString("en-US",{minimumFractionDigits:2})," of €",d.targetAmount.toLocaleString("en-US",{minimumFractionDigits:2})]}),a.jsx("div",{className:"quick-amount-pills",children:[50,100,250,500].map(C=>a.jsxs("button",{type:"button",className:"pill-quick-amt",onClick:()=>me(C.toString()),children:["+€",C]},C))}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Contribution Amount (€)"}),a.jsx("input",{type:"number",step:"0.01",placeholder:"Enter amount",value:ue,onChange:C=>me(C.target.value),required:!0})]}),a.jsxs("div",{className:"modal-footer-actions",children:[a.jsx("button",{type:"button",className:"btn-modal-cancel",onClick:()=>f(null),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-modal-submit",children:"Confirm contribution"})]})]})]})}),p&&a.jsx("div",{className:"modal-backdrop",onClick:()=>g(null),children:a.jsxs("div",{className:"modal-content-card",onClick:C=>C.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Edit savings goal"}),a.jsx("button",{className:"btn-modal-close",onClick:()=>g(null),children:a.jsx(Vn,{size:18})})]}),a.jsxs("form",{onSubmit:$,className:"modal-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Goal Title"}),a.jsx("input",{type:"text",value:p.title,onChange:C=>g({...p,title:C.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Subtitle"}),a.jsx("input",{type:"text",value:p.subtitle||"",onChange:C=>g({...p,subtitle:C.target.value})})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Current Saved (€)"}),a.jsx("input",{type:"number",step:"0.01",value:p.currentAmount,onChange:C=>g({...p,currentAmount:parseFloat(C.target.value)||0})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Target Amount (€)"}),a.jsx("input",{type:"number",step:"0.01",value:p.targetAmount,onChange:C=>g({...p,targetAmount:parseFloat(C.target.value)||1})})]})]}),a.jsxs("div",{className:"modal-footer-actions edit-footer",children:[a.jsxs("button",{type:"button",className:"btn-modal-delete",onClick:()=>ie(p.id),children:[a.jsx(Tl,{size:15}),a.jsx("span",{children:"Delete"})]}),a.jsxs("div",{className:"edit-right-actions",children:[a.jsx("button",{type:"button",className:"btn-modal-cancel",onClick:()=>g(null),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-modal-submit",children:"Save changes"})]})]})]})]})})]})},kx=[{label:"Feb",income:3100,expense:2100},{label:"Mar",income:3350,expense:2400},{label:"Apr",income:3400,expense:2050},{label:"May",income:3850,expense:2480},{label:"Jun",income:3450,expense:2300},{label:"Jul",income:3870,expense:1483.04}],hl=[{name:"Rent",amount:1180,color:"#1a261f"},{name:"Groceries",amount:106.39,color:"#2e7d32"},{name:"Utilities",amount:74.9,color:"#3b827e"},{name:"Transport",amount:68.9,color:"#d4a359"},{name:"Leisure",amount:42.9,color:"#4a7bb0"},{name:"Cafés",amount:9.95,color:"#c26d40"}],_x=({theme:i})=>{const[n,s]=V.useState(null),[c,d]=V.useState(null),f=3870,p=1483.04,g=f-p,y=Math.round(g/f*100),k=hl.reduce((j,Y)=>j+Y.amount,0),L=56,T=2*Math.PI*L;let D=0;return a.jsxs("div",{className:"reports-view-container",children:[a.jsxs("div",{className:"reports-header",children:[a.jsx("span",{className:"reports-top-label",children:"The Month in Full"}),a.jsx("h1",{className:"reports-title",children:"Reports"}),a.jsx("p",{className:"reports-subtitle",children:"Numbers that explain themselves—no dashboard to interpret, no charts to decode"})]}),a.jsxs("div",{className:"reports-stats-grid",children:[a.jsxs("div",{className:"reports-stat-card",children:[a.jsx("span",{className:"stat-card-label",children:"Income"}),a.jsxs("span",{className:"stat-card-value",children:["€",f.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"reports-stat-card",children:[a.jsx("span",{className:"stat-card-label",children:"Expenses"}),a.jsxs("span",{className:"stat-card-value",children:["€",p.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"reports-stat-card",children:[a.jsx("span",{className:"stat-card-label",children:"Net saved"}),a.jsxs("span",{className:"stat-card-value positive",children:["+€",g.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"reports-stat-card",children:[a.jsx("span",{className:"stat-card-label",children:"Savings rate"}),a.jsxs("span",{className:"stat-card-value",children:[y,"%"]})]})]}),a.jsxs("div",{className:"reports-charts-grid",children:[a.jsxs("div",{className:"reports-card bar-chart-card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{className:"card-title",children:"Income vs. expense"}),a.jsx("span",{className:"card-subtitle",children:"Six-month comparison"})]}),a.jsx("div",{className:"bar-chart-wrapper",children:a.jsxs("svg",{viewBox:"0 0 500 210",className:"bar-chart-svg",children:[a.jsx("line",{x1:"45",y1:"25",x2:"480",y2:"25",className:"chart-grid-line"}),a.jsx("line",{x1:"45",y1:"62.5",x2:"480",y2:"62.5",className:"chart-grid-line"}),a.jsx("line",{x1:"45",y1:"100",x2:"480",y2:"100",className:"chart-grid-line"}),a.jsx("line",{x1:"45",y1:"137.5",x2:"480",y2:"137.5",className:"chart-grid-line"}),a.jsx("line",{x1:"45",y1:"175",x2:"480",y2:"175",className:"chart-grid-line"}),a.jsx("text",{x:"35",y:"29",className:"chart-axis-label",textAnchor:"end",children:"4000"}),a.jsx("text",{x:"35",y:"66.5",className:"chart-axis-label",textAnchor:"end",children:"3000"}),a.jsx("text",{x:"35",y:"104",className:"chart-axis-label",textAnchor:"end",children:"2000"}),a.jsx("text",{x:"35",y:"141.5",className:"chart-axis-label",textAnchor:"end",children:"1000"}),a.jsx("text",{x:"35",y:"179",className:"chart-axis-label",textAnchor:"end",children:"0"}),kx.map((j,Y)=>{const B=75+Y*70,Q=j.income/4e3*150,K=j.expense/4e3*150,H=175-Q,q=175-K,ue=n===Y;return a.jsxs("g",{className:"bar-month-group",onMouseEnter:()=>s(Y),onMouseLeave:()=>s(null),children:[a.jsx("rect",{x:B-18,y:H,width:"20",height:Q,rx:"4",className:`bar-rect bar-income ${ue?"highlight":""}`}),a.jsx("rect",{x:B+4,y:q,width:"20",height:K,rx:"4",className:`bar-rect bar-expense ${ue?"highlight":""}`}),a.jsx("text",{x:B+3,y:"195",className:`chart-axis-label ${ue?"active":""}`,textAnchor:"middle",children:j.label}),ue&&a.jsxs("g",{className:"bar-tooltip-group",style:{pointerEvents:"none"},children:[a.jsx("rect",{x:B-45,y:Math.min(H,q)-38,width:"96",height:"32",rx:"6",className:"bar-tooltip-bg"}),a.jsxs("text",{x:B+3,y:Math.min(H,q)-24,className:"bar-tooltip-inc",textAnchor:"middle",children:["Inc: €",j.income]}),a.jsxs("text",{x:B+3,y:Math.min(H,q)-12,className:"bar-tooltip-exp",textAnchor:"middle",children:["Exp: €",j.expense]})]})]},j.label)})]})})]}),a.jsxs("div",{className:"reports-card distribution-card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{className:"card-title",children:"Distribution"}),a.jsx("span",{className:"card-subtitle",children:"This month's expenses by category"})]}),a.jsxs("div",{className:"distribution-content",children:[a.jsx("div",{className:"donut-chart-wrapper",children:a.jsx("svg",{viewBox:"0 0 160 160",className:"donut-chart-svg",children:a.jsx("g",{transform:"rotate(-90 80 80)",children:hl.map(j=>{const Y=j.amount/k*T,B=`${Y-1.5} ${T-Y+1.5}`,Q=-D;D+=Y;const K=c===j.name,H=j.name==="Rent"&&i==="dark"?"#26332a":j.color;return a.jsx("circle",{cx:"80",cy:"80",r:L,fill:"transparent",stroke:H,strokeWidth:K?"22":"18",strokeDasharray:B,strokeDashoffset:Q,className:"donut-segment",onMouseEnter:()=>d(j.name),onMouseLeave:()=>d(null)},j.name)})})})}),a.jsx("div",{className:"category-legend-list",children:hl.map(j=>{const Y=c===j.name,B=j.name==="Rent"&&i==="dark"?"#5faf7a":j.color;return a.jsxs("div",{className:`legend-row ${Y?"hovered":""}`,onMouseEnter:()=>d(j.name),onMouseLeave:()=>d(null),children:[a.jsxs("div",{className:"legend-row-left",children:[a.jsx("span",{className:"cat-legend-dot",style:{backgroundColor:B}}),a.jsx("span",{className:"cat-legend-name",children:j.name})]}),a.jsxs("span",{className:"cat-legend-val",children:["-€",j.amount.toLocaleString("en-US",{minimumFractionDigits:2})]})]},j.name)})})]})]})]}),a.jsxs("div",{className:"reports-card plain-words-card",children:[a.jsx("h3",{className:"card-title",children:"In plain words"}),a.jsxs("div",{className:"plain-words-grid",children:[a.jsx("div",{className:"plain-word-col",children:a.jsxs("p",{children:["You brought in ",a.jsx("strong",{children:"€3,870.00"})," and spent ",a.jsx("strong",{children:"€1,483.04"})," in July."]})}),a.jsx("div",{className:"plain-word-col",children:a.jsxs("p",{children:["That's a savings rate of ",a.jsx("strong",{children:"62%"})," — well above the 20% you'd need to reach your Kyoto goal on time."]})}),a.jsx("div",{className:"plain-word-col",children:a.jsx("p",{children:"Groceries and rent make up the bulk of your outflow, as they usually do. Nothing unusual worth flagging this month."})})]})]})]})},$f=[{id:"tx-1",badge:"GR",title:"Whole Foods",category:"Groceries",note:"Weekly shop",subtitle:"Groceries: Weekly shop",date:"22 Jul",dateGroup:"Wednesday 22 July",amount:-64.28},{id:"tx-2",badge:"CA",title:"Blue Bottle Coffee",category:"Cafés",note:"",subtitle:"Cafés",date:"21 Jul",dateGroup:"Tuesday 21 July",amount:-5.75},{id:"tx-3",badge:"CA",title:"Cortado",category:"Cafés",note:"",subtitle:"Cafés",date:"20 Jul",dateGroup:"Monday 20 July",amount:-4.2},{id:"tx-4",badge:"TR",title:"Metro card top-up",category:"Transport",note:"",subtitle:"Transport",date:"19 Jul",dateGroup:"Sunday 19 July",amount:-30},{id:"tx-5",badge:"LE",title:"Vinyl — Bill Evans",category:"Leisure",note:"",subtitle:"Leisure",date:"18 Jul",dateGroup:"Saturday 18 July",amount:-28.4},{id:"tx-6",badge:"FR",title:"Freelance",category:"Freelance",note:"Poster design",subtitle:"Freelance: Poster design",date:"15 Jul",dateGroup:"Wednesday 15 July",amount:420},{id:"tx-7",badge:"GR",title:"Trader Joe's",category:"Groceries",note:"",subtitle:"Groceries",date:"14 Jul",dateGroup:"Tuesday 14 July",amount:-42.11},{id:"tx-8",badge:"LE",title:"Cinema — Perfect Days",category:"Leisure",note:"",subtitle:"Leisure",date:"12 Jul",dateGroup:"Sunday 12 July",amount:-14.5},{id:"tx-9",badge:"UT",title:"Electricity",category:"Utilities",note:"",subtitle:"Utilities",date:"10 Jul",dateGroup:"Friday 10 July",amount:-74.9},{id:"tx-10",badge:"TR",title:"Uber to airport",category:"Transport",note:"",subtitle:"Transport",date:"08 Jul",dateGroup:"Wednesday 08 July",amount:-38},{id:"tx-11",badge:"SA",title:"Salary — Acme Studio",category:"Salary",note:"",subtitle:"Salary",date:"01 Jul",dateGroup:"Wednesday 01 July",amount:3450},{id:"tx-12",badge:"RE",title:"Studio rent — July",category:"Rent",note:"",subtitle:"Rent",date:"01 Jul",dateGroup:"Wednesday 01 July",amount:-1180}],Ex=({user:i,theme:n,onToggleTheme:s,onSignOut:c})=>{const[d,f]=V.useState("dashboard"),[p,g]=V.useState(!1),[y,k]=V.useState(!1),[L,T]=V.useState(!1),[D,j]=V.useState(null),[Y,B]=V.useState($f),K=10807.51+Y.slice($f.length).reduce(($,ie)=>$+ie.amount,0),H=$=>{const ie=new Date,R=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],C=R[ie.getDay()],I=String(ie.getDate()).padStart(2,"0"),G=de[ie.getMonth()],le=`${C} ${I} ${G}`,xe={...$,id:Date.now().toString(),subtitle:$.note?`${$.category}: ${$.note}`:$.category,dateGroup:le};B([xe,...Y])},q=$=>{B(Y.filter(ie=>ie.id!==$))},ue=$=>{j($),T(!0)},me=$=>{B(Y.map(ie=>ie.id===$.id?{...$,subtitle:$.note?`${$.category}: ${$.note}`:$.category}:ie)),j(null)},F=($,ie)=>{B(Y.map(R=>R.id===$?{...R,color:ie}:R))},z=$=>{f($),k(!1)};return a.jsxs("div",{className:"vinora-dashboard-app","data-theme":n,children:[a.jsxs("header",{className:"dash-mobile-header",children:[a.jsxs("div",{className:"mobile-header-left",children:[a.jsx("button",{className:"mobile-hamburger-btn",onClick:()=>k(!y),"aria-label":"Toggle menu",children:y?a.jsx(Vn,{size:20}):a.jsx(zg,{size:20})}),a.jsxs("div",{className:"dash-logo mobile-logo",children:[a.jsx(pl,{size:32,variant:"green"}),a.jsx("span",{className:"logo-text",children:"Vinora"})]})]}),a.jsxs("div",{className:"mobile-header-right",children:[a.jsx("button",{className:"mobile-theme-btn",onClick:()=>s(n==="light"?"dark":"light"),"aria-label":"Toggle theme",children:n==="light"?a.jsx(ml,{size:18}):a.jsx(yl,{size:18})}),a.jsx("div",{className:"mobile-user-avatar",children:i.avatar?a.jsx("img",{src:i.avatar,alt:i.name,className:"user-avatar-img"}):a.jsx("div",{className:"user-avatar-initials",children:i.name.charAt(0).toUpperCase()})})]})]}),y&&a.jsx("div",{className:"mobile-drawer-backdrop",onClick:()=>k(!1)}),a.jsxs("aside",{className:`dash-sidebar ${p?"collapsed":""} ${y?"mobile-open":""}`,children:[a.jsxs("div",{className:"sidebar-top",children:[a.jsxs("div",{className:"dash-logo",children:[a.jsx(pl,{size:34,variant:"green"}),!p&&a.jsx("span",{className:"logo-text",children:"Vinora"})]}),a.jsxs("nav",{className:"dash-nav",children:[a.jsxs("button",{className:`nav-item ${d==="dashboard"?"active":""}`,onClick:()=>z("dashboard"),title:"Dashboard",children:[a.jsx(Mg,{size:18}),(!p||y)&&a.jsx("span",{children:"Dashboard"})]}),a.jsxs("button",{className:`nav-item ${d==="transactions"?"active":""}`,onClick:()=>z("transactions"),title:"Transactions",children:[a.jsx(Ig,{size:18}),(!p||y)&&a.jsx("span",{children:"Transactions"})]}),a.jsxs("button",{className:`nav-item ${d==="savings"?"active":""}`,onClick:()=>z("savings"),title:"Savings",children:[a.jsx(Bg,{size:18}),(!p||y)&&a.jsx("span",{children:"Savings"})]}),a.jsxs("button",{className:`nav-item ${d==="reports"?"active":""}`,onClick:()=>z("reports"),title:"Reports",children:[a.jsx(jg,{size:18}),(!p||y)&&a.jsx("span",{children:"Reports"})]}),a.jsx("div",{className:"nav-divider"}),a.jsxs("button",{className:`nav-item ${d==="settings"?"active":""}`,onClick:()=>z("settings"),title:"Settings",children:[a.jsx(Vg,{size:18}),(!p||y)&&a.jsx("span",{children:"Settings"})]})]})]}),a.jsxs("div",{className:"sidebar-bottom",children:[a.jsxs("div",{className:"sidebar-user-card",children:[i.avatar?a.jsx("img",{src:i.avatar,alt:i.name,className:"user-avatar-img"}):a.jsx("div",{className:"user-avatar-initials",children:i.name.charAt(0).toUpperCase()}),(!p||y)&&a.jsxs("div",{className:"user-info-text",children:[a.jsx("span",{className:"user-fullname",title:i.name,children:i.name}),a.jsxs("button",{className:"btn-signout",onClick:c,children:[a.jsx(Ug,{size:12}),a.jsx("span",{children:"SIGN OUT"})]})]})]}),a.jsxs("div",{className:"sidebar-action-row",children:[a.jsxs("button",{className:"dash-theme-btn",onClick:()=>s(n==="light"?"dark":"light"),title:`Switch to ${n==="light"?"Dark":"Light"} Mode`,children:[n==="light"?a.jsx(ml,{size:16}):a.jsx(yl,{size:16}),(!p||y)&&a.jsx("span",{children:n==="light"?"Dark Mode":"Light Mode"})]}),a.jsxs("button",{className:"dash-collapse-btn",onClick:()=>g(!p),title:p?"Expand Sidebar":"Collapse Sidebar",children:[p?a.jsx(Pg,{size:16}):a.jsx(Ag,{size:16}),!p&&a.jsx("span",{children:"Collapse"})]})]})]})]}),a.jsx("main",{className:"dash-main",children:a.jsxs("div",{className:"dash-scroll-container",children:[d==="transactions"?a.jsx(vx,{transactions:Y,onOpenLogModal:()=>{j(null),T(!0)},onDeleteTransaction:q,onEditTransaction:ue,onUpdateTransactionColor:F}):d==="savings"?a.jsx(Sx,{theme:n}):d==="reports"?a.jsx(_x,{theme:n}):d!=="dashboard"?a.jsxs("div",{className:"tab-placeholder-card",children:[a.jsx("h2",{children:d.charAt(0).toUpperCase()+d.slice(1)}),a.jsxs("p",{children:["You are viewing the ",d," panel in Vinora. Content loads seamlessly."]}),a.jsx("button",{className:"btn-primary-small",onClick:()=>f("dashboard"),children:"Return to Dashboard"})]}):a.jsx(wx,{user:i,theme:n,transactions:Y,currentBalance:K,onOpenLogModal:()=>T(!0),onNavigateTab:$=>f($)}),a.jsxs("footer",{className:"dash-footer",children:[a.jsx("div",{className:"footer-tagline",children:"Where did it come from · where did it go · are you on track · what next."}),a.jsx("div",{className:"footer-version",children:"Vinora · v1.0 · Calm by design"})]})]})}),a.jsx(mx,{isOpen:L,onClose:()=>{T(!1),j(null)},onAddTransaction:H,initialData:D,onEditTransaction:me})]})};function Nx(){const[i,n]=V.useState("dark"),[s,c]=V.useState("login"),[d,f]=V.useState(null),[p,g]=V.useState(!0);V.useEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]),V.useEffect(()=>{const D=Q1(Cr,j=>{var Y;f(j?{name:j.displayName||((Y=j.email)==null?void 0:Y.split("@")[0])||"User",email:j.email||"",avatar:j.photoURL||void 0,uid:j.uid}:null),g(!1)});return()=>D()},[]);const y=D=>{n(D)},k=D=>{c(D)},L=D=>{f(D)},T=async()=>{try{await X1(Cr)}catch(D){console.error("Error signing out:",D)}f(null)};return p?a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw",background:"var(--bg-main, #0b0f19)",color:"var(--text-main, #f3f4f6)",fontFamily:"system-ui, -apple-system, sans-serif"},children:a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{width:"40px",height:"40px",border:"3px solid rgba(255, 255, 255, 0.1)",borderTopColor:"#6366f1",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 1rem"}}),a.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),a.jsx("p",{style:{margin:0,fontSize:"0.95rem",opacity:.8},children:"Loading Vinora..."})]})}):a.jsx(a.Fragment,{children:d===null?a.jsx(px,{theme:i,authMode:s,onToggleTheme:y,onToggleAuthMode:k,onLoginSuccess:L}):a.jsx(Ex,{user:d,theme:i,onToggleTheme:y,onSignOut:T})})}kg.createRoot(document.getElementById("root")).render(a.jsx(mg.StrictMode,{children:a.jsx(Nx,{})}));
