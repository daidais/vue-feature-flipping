window.VueFeatureFlipping=function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=[];function u(e,t=!1){return null===r?t:r.includes(e)}function i(e){r=e}function o(e){if("string"==typeof e)return[e,void 0];if(e instanceof Object)return[e.key,e.default];throw TypeError(`Unsupported parameter type: ${typeof e}`)}async function a(e,t,n,r){switch(t.arg){case"class":await async function(e,t,n,r){let{key:i,value:o,default:a}=t.value;u(i,a)&&(e.className+=" "+o.join(" "))}(e,t);break;case"style":await async function(e,t,n,r){let{key:i,value:o,default:a}=t.value;if(u(i,a))for(let[t,n]of Object.entries(o))e.style.setProperty(t,n)}(e,t);break;default:await async function(e,t,n,r){let[i,a]=o(t.value);u(i,a)||(await n.context.$nextTick(),n.elm.remove())}(0,t,n)}}async function f(e,t,n){if(e.meta.featureFlipping){let[t,r]=o(e.meta.featureFlipping);if(!u(t,r))return n({path:"/"})}return n()}n.d(t,"isEnabled",function(){return u}),n.d(t,"setEnabledFeatures",function(){return i});t.default=function(e,t){t&&t.init&&t.init(e=>i(e)),e.directive("feature-flipping",a),e.mixin({beforeRouteEnter:f})}}]);