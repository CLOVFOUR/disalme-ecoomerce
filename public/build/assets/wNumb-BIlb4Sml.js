import{g as wt}from"./_commonjsHelpers-BosuxZz1.js";var J;(function(r){r.Range="range",r.Steps="steps",r.Positions="positions",r.Count="count",r.Values="values"})(J||(J={}));var R;(function(r){r[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue"})(R||(R={}));function Et(r){return ue(r)&&typeof r.from=="function"}function ue(r){return typeof r=="object"&&typeof r.to=="function"}function Be(r){r.parentElement.removeChild(r)}function Pe(r){return r!=null}function Ie(r){r.preventDefault()}function Ct(r){return r.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Pt(r,e){return Math.round(r/e)*e}function At(r,e){var s=r.getBoundingClientRect(),f=r.ownerDocument,u=f.documentElement,S=We(f);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(S.x=0),e?s.top+S.y-u.clientTop:s.left+S.x-u.clientLeft}function T(r){return typeof r=="number"&&!isNaN(r)&&isFinite(r)}function Ke(r,e,s){s>0&&(F(r,e),setTimeout(function(){fe(r,e)},s))}function qe(r){return Math.max(Math.min(r,100),0)}function ce(r){return Array.isArray(r)?r:[r]}function Vt(r){r=String(r);var e=r.split(".");return e.length>1?e[1].length:0}function F(r,e){r.classList&&!/\s/.test(e)?r.classList.add(e):r.className+=" "+e}function fe(r,e){r.classList&&!/\s/.test(e)?r.classList.remove(e):r.className=r.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function yt(r,e){return r.classList?r.classList.contains(e):new RegExp("\\b"+e+"\\b").test(r.className)}function We(r){var e=window.pageXOffset!==void 0,s=(r.compatMode||"")==="CSS1Compat",f=e?window.pageXOffset:s?r.documentElement.scrollLeft:r.body.scrollLeft,u=e?window.pageYOffset:s?r.documentElement.scrollTop:r.body.scrollTop;return{x:f,y:u}}function Dt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function kt(){var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,e)}catch{}return r}function Mt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Ve(r,e){return 100/(e-r)}function Ae(r,e,s){return e*100/(r[s+1]-r[s])}function Ut(r,e){return Ae(r,r[0]<0?e+Math.abs(r[0]):e-r[0],0)}function _t(r,e){return e*(r[1]-r[0])/100+r[0]}function ae(r,e){for(var s=1;r>=e[s];)s+=1;return s}function Lt(r,e,s){if(s>=r.slice(-1)[0])return 100;var f=ae(s,r),u=r[f-1],S=r[f],p=e[f-1],A=e[f];return p+Ut([u,S],s)/Ve(p,A)}function Ot(r,e,s){if(s>=100)return r.slice(-1)[0];var f=ae(s,e),u=r[f-1],S=r[f],p=e[f-1],A=e[f];return _t([u,S],(s-p)*Ve(p,A))}function Ht(r,e,s,f){if(f===100)return f;var u=ae(f,r),S=r[u-1],p=r[u];return s?f-S>(p-S)/2?p:S:e[u-1]?r[u-1]+Pt(f-r[u-1],e[u-1]):f}var Xe=function(){function r(e,s,f){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[f||!1],this.xNumSteps=[!1],this.snap=s;var u,S=[];for(Object.keys(e).forEach(function(p){S.push([ce(e[p]),p])}),S.sort(function(p,A){return p[0][0]-A[0][0]}),u=0;u<S.length;u++)this.handleEntryPoint(S[u][1],S[u][0]);for(this.xNumSteps=this.xSteps.slice(0),u=0;u<this.xNumSteps.length;u++)this.handleStepPoint(u,this.xNumSteps[u])}return r.prototype.getDistance=function(e){for(var s=[],f=0;f<this.xNumSteps.length-1;f++)s[f]=Ae(this.xVal,e,f);return s},r.prototype.getAbsoluteDistance=function(e,s,f){var u=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[u+1];)u++;else e===this.xPct[this.xPct.length-1]&&(u=this.xPct.length-2);!f&&e===this.xPct[u+1]&&u++,s===null&&(s=[]);var S,p=1,A=s[u],V=0,x=0,_=0,L=0;for(f?S=(e-this.xPct[u])/(this.xPct[u+1]-this.xPct[u]):S=(this.xPct[u+1]-e)/(this.xPct[u+1]-this.xPct[u]);A>0;)V=this.xPct[u+1+L]-this.xPct[u+L],s[u+L]*p+100-S*100>100?(x=V*S,p=(A-100*S)/s[u+L],S=1):(x=s[u+L]*V/100*p,p=0),f?(_=_-x,this.xPct.length+L>=1&&L--):(_=_+x,this.xPct.length-L>=1&&L++),A=s[u+L]*p;return e+_},r.prototype.toStepping=function(e){return e=Lt(this.xVal,this.xPct,e),e},r.prototype.fromStepping=function(e){return Ot(this.xVal,this.xPct,e)},r.prototype.getStep=function(e){return e=Ht(this.xPct,this.xSteps,this.snap,e),e},r.prototype.getDefaultStep=function(e,s,f){var u=ae(e,this.xPct);return(e===100||s&&e===this.xPct[u-1])&&(u=Math.max(u-1,1)),(this.xVal[u]-this.xVal[u-1])/f},r.prototype.getNearbySteps=function(e){var s=ae(e,this.xPct);return{stepBefore:{startValue:this.xVal[s-2],step:this.xNumSteps[s-2],highestStep:this.xHighestCompleteStep[s-2]},thisStep:{startValue:this.xVal[s-1],step:this.xNumSteps[s-1],highestStep:this.xHighestCompleteStep[s-1]},stepAfter:{startValue:this.xVal[s],step:this.xNumSteps[s],highestStep:this.xHighestCompleteStep[s]}}},r.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Vt);return Math.max.apply(null,e)},r.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},r.prototype.convert=function(e){return this.getStep(this.toStepping(e))},r.prototype.handleEntryPoint=function(e,s){var f;if(e==="min"?f=0:e==="max"?f=100:f=parseFloat(e),!T(f)||!T(s[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(f),this.xVal.push(s[0]);var u=Number(s[1]);f?this.xSteps.push(isNaN(u)?!1:u):isNaN(u)||(this.xSteps[0]=u),this.xHighestCompleteStep.push(0)},r.prototype.handleStepPoint=function(e,s){if(s){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=Ae([this.xVal[e],this.xVal[e+1]],s,0)/Ve(this.xPct[e],this.xPct[e+1]);var f=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],u=Math.ceil(Number(f.toFixed(3))-1),S=this.xVal[e]+this.xNumSteps[e]*u;this.xHighestCompleteStep[e]=S}},r}(),Te={to:function(r){return r===void 0?"":r.toFixed(2)},from:Number},Ye={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},$={tooltips:".__tooltips",aria:".__aria"};function jt(r,e){if(!T(e))throw new Error("noUiSlider: 'step' is not numeric.");r.singleStep=e}function zt(r,e){if(!T(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");r.keyboardPageMultiplier=e}function Ft(r,e){if(!T(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");r.keyboardMultiplier=e}function Rt(r,e){if(!T(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");r.keyboardDefaultStep=e}function Nt(r,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");r.spectrum=new Xe(e,r.snap||!1,r.singleStep)}function Bt(r,e){if(e=ce(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");r.handles=e.length,r.start=e}function It(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");r.snap=e}function Kt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");r.animate=e}function qt(r,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");r.animationDuration=e}function Ge(r,e){var s=[!1],f;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(f=1;f<r.handles;f++)s.push(e);s.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==r.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");s=e}r.connect=s}function Tt(r,e){switch(e){case"horizontal":r.ort=0;break;case"vertical":r.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function $e(r,e){if(!T(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(r.margin=r.spectrum.getDistance(e))}function Wt(r,e){if(!T(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(r.limit=r.spectrum.getDistance(e),!r.limit||r.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Xt(r,e){var s;if(!T(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||T(e[0])||T(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),r.padding=[r.spectrum.getDistance(e[0]),r.spectrum.getDistance(e[1])],s=0;s<r.spectrum.xNumSteps.length-1;s++)if(r.padding[0][s]<0||r.padding[1][s]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var f=e[0]+e[1],u=r.spectrum.xVal[0],S=r.spectrum.xVal[r.spectrum.xVal.length-1];if(f/(S-u)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Yt(r,e){switch(e){case"ltr":r.dir=0;break;case"rtl":r.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Gt(r,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var s=e.indexOf("tap")>=0,f=e.indexOf("drag")>=0,u=e.indexOf("fixed")>=0,S=e.indexOf("snap")>=0,p=e.indexOf("hover")>=0,A=e.indexOf("unconstrained")>=0,V=e.indexOf("invert-connects")>=0,x=e.indexOf("drag-all")>=0,_=e.indexOf("smooth-steps")>=0;if(u){if(r.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");$e(r,r.start[1]-r.start[0])}if(V&&r.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(A&&(r.margin||r.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");r.events={tap:s||S,drag:f,dragAll:x,smoothSteps:_,fixed:u,snap:S,hover:p,unconstrained:A,invertConnects:V}}function $t(r,e){if(e!==!1)if(e===!0||ue(e)){r.tooltips=[];for(var s=0;s<r.handles;s++)r.tooltips.push(e)}else{if(e=ce(e),e.length!==r.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(f){if(typeof f!="boolean"&&!ue(f))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),r.tooltips=e}}function Jt(r,e){if(e.length!==r.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");r.handleAttributes=e}function Zt(r,e){if(!ue(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");r.ariaFormat=e}function Qt(r,e){if(!Et(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");r.format=e}function er(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");r.keyboardSupport=e}function tr(r,e){r.documentElement=e}function rr(r,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");r.cssPrefix=e}function ir(r,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof r.cssPrefix=="string"?(r.cssClasses={},Object.keys(e).forEach(function(s){r.cssClasses[s]=r.cssPrefix+e[s]})):r.cssClasses=e}function Je(r){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Te,format:Te},s={step:{r:!1,t:jt},keyboardPageMultiplier:{r:!1,t:zt},keyboardMultiplier:{r:!1,t:Ft},keyboardDefaultStep:{r:!1,t:Rt},start:{r:!0,t:Bt},connect:{r:!0,t:Ge},direction:{r:!0,t:Yt},snap:{r:!1,t:It},animate:{r:!1,t:Kt},animationDuration:{r:!1,t:qt},range:{r:!0,t:Nt},orientation:{r:!1,t:Tt},margin:{r:!1,t:$e},limit:{r:!1,t:Wt},padding:{r:!1,t:Xt},behaviour:{r:!0,t:Gt},ariaFormat:{r:!1,t:Zt},format:{r:!1,t:Qt},tooltips:{r:!1,t:$t},keyboardSupport:{r:!0,t:er},documentElement:{r:!1,t:tr},cssPrefix:{r:!0,t:rr},cssClasses:{r:!0,t:ir},handleAttributes:{r:!1,t:Jt}},f={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Ye,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(s).forEach(function(V){if(!Pe(r[V])&&f[V]===void 0){if(s[V].r)throw new Error("noUiSlider: '"+V+"' is required.");return}s[V].t(e,Pe(r[V])?r[V]:f[V])}),e.pips=r.pips;var u=document.createElement("div"),S=u.style.msTransform!==void 0,p=u.style.transform!==void 0;e.transformRule=p?"transform":S?"msTransform":"webkitTransform";var A=[["left","top"],["right","bottom"]];return e.style=A[e.dir][e.ort],e}function nr(r,e,s){var f=Dt(),u=Mt(),S=u&&kt(),p=r,A,V,x,_,L,I,b=e.spectrum,v=[],h=[],m=[],y=0,w={},X=!1,W=r.ownerDocument,K=e.documentElement||W.documentElement,q=W.body,ee=W.dir==="rtl"||e.ort===1?0:100;function N(t,i){var n=W.createElement("div");return i&&F(n,i),t.appendChild(n),n}function g(t,i){var n=N(t,e.cssClasses.origin),a=N(n,e.cssClasses.handle);if(N(a,e.cssClasses.touchArea),a.setAttribute("data-handle",String(i)),e.keyboardSupport&&(a.setAttribute("tabindex","0"),a.addEventListener("keydown",function(l){return ct(l,i)})),e.handleAttributes!==void 0){var o=e.handleAttributes[i];Object.keys(o).forEach(function(l){a.setAttribute(l,o[l])})}return a.setAttribute("role","slider"),a.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?F(a,e.cssClasses.handleLower):i===e.handles-1&&F(a,e.cssClasses.handleUpper),n.handle=a,n}function Y(t,i){return i?N(t,e.cssClasses.connect):!1}function H(t,i){V=N(i,e.cssClasses.connects),x=[],_=[],_.push(Y(V,t[0]));for(var n=0;n<e.handles;n++)x.push(g(i,n)),m[n]=n,_.push(Y(V,t[n+1]))}function te(t){F(t,e.cssClasses.target),e.dir===0?F(t,e.cssClasses.ltr):F(t,e.cssClasses.rtl),e.ort===0?F(t,e.cssClasses.horizontal):F(t,e.cssClasses.vertical);var i=getComputedStyle(t).direction;return i==="rtl"?F(t,e.cssClasses.textDirectionRtl):F(t,e.cssClasses.textDirectionLtr),N(t,e.cssClasses.base)}function G(t,i){return!e.tooltips||!e.tooltips[i]?!1:N(t.firstChild,e.cssClasses.tooltip)}function re(){return p.hasAttribute("disabled")}function B(t){var i=x[t];return i.hasAttribute("disabled")}function Qe(t){t!=null?(x[t].setAttribute("disabled",""),x[t].handle.removeAttribute("tabindex")):(p.setAttribute("disabled",""),x.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function et(t){t!=null?(x[t].removeAttribute("disabled"),x[t].handle.setAttribute("tabindex","0")):(p.removeAttribute("disabled"),x.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function he(){I&&(ie("update"+$.tooltips),I.forEach(function(t){t&&Be(t)}),I=null)}function ye(){he(),I=x.map(G),ge("update"+$.tooltips,function(t,i,n){if(!(!I||!e.tooltips)&&I[i]!==!1){var a=t[i];e.tooltips[i]!==!0&&(a=e.tooltips[i].to(n[i])),I[i].innerHTML=a}})}function tt(){ie("update"+$.aria),ge("update"+$.aria,function(t,i,n,a,o){m.forEach(function(l){var d=x[l],c=se(h,l,0,!0,!0,!0),C=se(h,l,100,!0,!0,!0),P=o[l],D=String(e.ariaFormat.to(n[l]));c=b.fromStepping(c).toFixed(1),C=b.fromStepping(C).toFixed(1),P=b.fromStepping(P).toFixed(1),d.children[0].setAttribute("aria-valuemin",c),d.children[0].setAttribute("aria-valuemax",C),d.children[0].setAttribute("aria-valuenow",P),d.children[0].setAttribute("aria-valuetext",D)})})}function rt(t){if(t.mode===J.Range||t.mode===J.Steps)return b.xVal;if(t.mode===J.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=t.values-1,n=100/i,a=[];i--;)a[i]=i*n;return a.push(100),De(a,t.stepped)}return t.mode===J.Positions?De(t.values,t.stepped):t.mode===J.Values?t.stepped?t.values.map(function(o){return b.fromStepping(b.getStep(b.toStepping(o)))}):t.values:[]}function De(t,i){return t.map(function(n){return b.fromStepping(i?b.getStep(n):n)})}function it(t){function i(P,D){return Number((P+D).toFixed(7))}var n=rt(t),a={},o=b.xVal[0],l=b.xVal[b.xVal.length-1],d=!1,c=!1,C=0;return n=Ct(n.slice().sort(function(P,D){return P-D})),n[0]!==o&&(n.unshift(o),d=!0),n[n.length-1]!==l&&(n.push(l),c=!0),n.forEach(function(P,D){var k,E,U,z=P,O=n[D+1],j,be,we,Ee,Fe,Ce,Re,Ne=t.mode===J.Steps;for(Ne&&(k=b.xNumSteps[D]),k||(k=O-z),O===void 0&&(O=z),k=Math.max(k,1e-7),E=z;E<=O;E=i(E,k)){for(j=b.toStepping(E),be=j-C,Fe=be/(t.density||1),Ce=Math.round(Fe),Re=be/Ce,U=1;U<=Ce;U+=1)we=C+U*Re,a[we.toFixed(5)]=[b.fromStepping(we),0];Ee=n.indexOf(E)>-1?R.LargeValue:Ne?R.SmallValue:R.NoValue,!D&&d&&E!==O&&(Ee=0),E===O&&c||(a[j.toFixed(5)]=[E,Ee]),C=j}}),a}function nt(t,i,n){var a,o,l=W.createElement("div"),d=(a={},a[R.None]="",a[R.NoValue]=e.cssClasses.valueNormal,a[R.LargeValue]=e.cssClasses.valueLarge,a[R.SmallValue]=e.cssClasses.valueSub,a),c=(o={},o[R.None]="",o[R.NoValue]=e.cssClasses.markerNormal,o[R.LargeValue]=e.cssClasses.markerLarge,o[R.SmallValue]=e.cssClasses.markerSub,o),C=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],P=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];F(l,e.cssClasses.pips),F(l,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function D(E,U){var z=U===e.cssClasses.value,O=z?C:P,j=z?d:c;return U+" "+O[e.ort]+" "+j[E]}function k(E,U,z){if(z=i?i(U,z):z,z!==R.None){var O=N(l,!1);O.className=D(z,e.cssClasses.marker),O.style[e.style]=E+"%",z>R.NoValue&&(O=N(l,!1),O.className=D(z,e.cssClasses.value),O.setAttribute("data-value",String(U)),O.style[e.style]=E+"%",O.innerHTML=String(n.to(U)))}}return Object.keys(t).forEach(function(E){k(E,t[E][0],t[E][1])}),l}function ve(){L&&(Be(L),L=null)}function de(t){ve();var i=it(t),n=t.filter,a=t.format||{to:function(o){return String(Math.round(o))}};return L=p.appendChild(nt(i,n,a)),L}function ke(){var t=A.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?t.width||A[i]:t.height||A[i]}function Z(t,i,n,a){var o=function(d){var c=at(d,a.pageOffset,a.target||i);if(!c||re()&&!a.doNotReject||yt(p,e.cssClasses.tap)&&!a.doNotReject||t===f.start&&c.buttons!==void 0&&c.buttons>1||a.hover&&c.buttons)return!1;S||c.preventDefault(),c.calcPoint=c.points[e.ort],n(c,a)},l=[];return t.split(" ").forEach(function(d){i.addEventListener(d,o,S?{passive:!0}:!1),l.push([d,o])}),l}function at(t,i,n){var a=t.type.indexOf("touch")===0,o=t.type.indexOf("mouse")===0,l=t.type.indexOf("pointer")===0,d=0,c=0;if(t.type.indexOf("MSPointer")===0&&(l=!0),t.type==="mousedown"&&!t.buttons&&!t.touches)return!1;if(a){var C=function(k){var E=k.target;return E===n||n.contains(E)||t.composed&&t.composedPath().shift()===n};if(t.type==="touchstart"){var P=Array.prototype.filter.call(t.touches,C);if(P.length>1)return!1;d=P[0].pageX,c=P[0].pageY}else{var D=Array.prototype.find.call(t.changedTouches,C);if(!D)return!1;d=D.pageX,c=D.pageY}}return i=i||We(W),(o||l)&&(d=t.clientX+i.x,c=t.clientY+i.y),t.pageOffset=i,t.points=[d,c],t.cursor=o||l,t}function Me(t){var i=t-At(A,e.ort),n=i*100/ke();return n=qe(n),e.dir?100-n:n}function st(t){var i=100,n=!1;return x.forEach(function(a,o){if(!B(o)){var l=h[o],d=Math.abs(l-t),c=d===100&&i===100,C=d<i,P=d<=i&&t>l;(C||P||c)&&(n=o,i=d)}}),n}function ot(t,i){t.type==="mouseout"&&t.target.nodeName==="HTML"&&t.relatedTarget===null&&pe(t,i)}function lt(t,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&t.buttons===0&&i.buttonsProperty!==0)return pe(t,i);var n=(e.dir?-1:1)*(t.calcPoint-i.startCalcPoint),a=n*100/i.baseSize;_e(n>0,a,i.locations,i.handleNumbers,i.connect)}function pe(t,i){i.handle&&(fe(i.handle,e.cssClasses.active),y-=1),i.listeners.forEach(function(n){K.removeEventListener(n[0],n[1])}),y===0&&(fe(p,e.cssClasses.drag),xe(),t.cursor&&(q.style.cursor="",q.removeEventListener("selectstart",Ie))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(n){Q(n,h[n],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(n){M("update",n)})),i.handleNumbers.forEach(function(n){M("change",n),M("set",n),M("end",n)})}function me(t,i){if(!i.handleNumbers.some(B)){var n;if(i.handleNumbers.length===1){var a=x[i.handleNumbers[0]];n=a.children[0],y+=1,F(n,e.cssClasses.active)}t.stopPropagation();var o=[],l=Z(f.move,K,lt,{target:t.target,handle:n,connect:i.connect,listeners:o,startCalcPoint:t.calcPoint,baseSize:ke(),pageOffset:t.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:t.buttons,locations:h.slice()}),d=Z(f.end,K,pe,{target:t.target,handle:n,listeners:o,doNotReject:!0,handleNumbers:i.handleNumbers}),c=Z("mouseout",K,ot,{target:t.target,handle:n,listeners:o,doNotReject:!0,handleNumbers:i.handleNumbers});o.push.apply(o,l.concat(d,c)),t.cursor&&(q.style.cursor=getComputedStyle(t.target).cursor,x.length>1&&F(p,e.cssClasses.drag),q.addEventListener("selectstart",Ie,!1)),i.handleNumbers.forEach(function(C){M("start",C)})}}function ft(t){t.stopPropagation();var i=Me(t.calcPoint),n=st(i);n!==!1&&(e.events.snap||Ke(p,e.cssClasses.tap,e.animationDuration),Q(n,i,!0,!0),xe(),M("slide",n,!0),M("update",n,!0),e.events.snap?me(t,{handleNumbers:[n]}):(M("change",n,!0),M("set",n,!0)))}function ut(t){var i=Me(t.calcPoint),n=b.getStep(i),a=b.fromStepping(n);Object.keys(w).forEach(function(o){o.split(".")[0]==="hover"&&w[o].forEach(function(l){l.call(le,a)})})}function ct(t,i){if(re()||B(i))return!1;var n=["Left","Right"],a=["Down","Up"],o=["PageDown","PageUp"],l=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(a.reverse(),o.reverse());var d=t.key.replace("Arrow",""),c=d===o[0],C=d===o[1],P=d===a[0]||d===n[0]||c,D=d===a[1]||d===n[1]||C,k=d===l[0],E=d===l[1];if(!P&&!D&&!k&&!E)return!0;t.preventDefault();var U;if(D||P){var z=P?0:1,O=je(i),j=O[z];if(j===null)return!1;j===!1&&(j=b.getDefaultStep(h[i],P,e.keyboardDefaultStep)),C||c?j*=e.keyboardPageMultiplier:j*=e.keyboardMultiplier,j=Math.max(j,1e-7),j=(P?-1:1)*j,U=v[i]+j}else E?U=e.spectrum.xVal[e.spectrum.xVal.length-1]:U=e.spectrum.xVal[0];return Q(i,b.toStepping(U),!0,!0),M("slide",i),M("update",i),M("change",i),M("set",i),!1}function Ue(t){t.fixed||x.forEach(function(i,n){Z(f.start,i.children[0],me,{handleNumbers:[n]})}),t.tap&&Z(f.start,A,ft,{}),t.hover&&Z(f.move,A,ut,{hover:!0}),t.drag&&_.forEach(function(i,n){if(!(i===!1||n===0||n===_.length-1)){var a=x[n-1],o=x[n],l=[i],d=[a,o],c=[n-1,n];F(i,e.cssClasses.draggable),t.fixed&&(l.push(a.children[0]),l.push(o.children[0])),t.dragAll&&(d=x,c=m),l.forEach(function(C){Z(f.start,C,me,{handles:d,handleNumbers:c,connect:i})})}})}function ge(t,i){w[t]=w[t]||[],w[t].push(i),t.split(".")[0]==="update"&&x.forEach(function(n,a){M("update",a)})}function ht(t){return t===$.aria||t===$.tooltips}function ie(t){var i=t&&t.split(".")[0],n=i?t.substring(i.length):t;Object.keys(w).forEach(function(a){var o=a.split(".")[0],l=a.substring(o.length);(!i||i===o)&&(!n||n===l)&&(!ht(l)||n===l)&&delete w[a]})}function M(t,i,n){Object.keys(w).forEach(function(a){var o=a.split(".")[0];t===o&&w[a].forEach(function(l){l.call(le,v.map(e.format.to),i,v.slice(),n||!1,h.slice(),le)})})}function se(t,i,n,a,o,l,d){var c;return x.length>1&&!e.events.unconstrained&&(a&&i>0&&(c=b.getAbsoluteDistance(t[i-1],e.margin,!1),n=Math.max(n,c)),o&&i<x.length-1&&(c=b.getAbsoluteDistance(t[i+1],e.margin,!0),n=Math.min(n,c))),x.length>1&&e.limit&&(a&&i>0&&(c=b.getAbsoluteDistance(t[i-1],e.limit,!1),n=Math.min(n,c)),o&&i<x.length-1&&(c=b.getAbsoluteDistance(t[i+1],e.limit,!0),n=Math.max(n,c))),e.padding&&(i===0&&(c=b.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,c)),i===x.length-1&&(c=b.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,c))),d||(n=b.getStep(n)),n=qe(n),n===t[i]&&!l?!1:n}function Se(t,i){var n=e.ort;return(n?i:t)+", "+(n?t:i)}function _e(t,i,n,a,o){var l=n.slice(),d=a[0],c=e.events.smoothSteps,C=[!t,t],P=[t,!t];a=a.slice(),t&&a.reverse(),a.length>1?a.forEach(function(k,E){var U=se(l,k,l[k]+i,C[E],P[E],!1,c);U===!1?i=0:(i=U-l[k],l[k]=U)}):C=P=[!0];var D=!1;a.forEach(function(k,E){D=Q(k,n[k]+i,C[E],P[E],!1,c)||D}),D&&(a.forEach(function(k){M("update",k),M("slide",k)}),o!=null&&M("drag",d))}function Le(t,i){return e.dir?100-t-i:t}function vt(t,i){h[t]=i,v[t]=b.fromStepping(i);var n=Le(i,0)-ee,a="translate("+Se(n+"%","0")+")";if(x[t].style[e.transformRule]=a,e.events.invertConnects&&h.length>1){var o=h.every(function(l,d,c){return d===0||l>=c[d-1]});if(X!==!o){xt();return}}ne(t),ne(t+1),X&&(ne(t-1),ne(t+2))}function xe(){m.forEach(function(t){var i=h[t]>50?-1:1,n=3+(x.length+i*t);x[t].style.zIndex=String(n)})}function Q(t,i,n,a,o,l){return o||(i=se(h,t,i,n,a,!1,l)),i===!1?!1:(vt(t,i),!0)}function ne(t){if(_[t]){var i=h.slice();X&&i.sort(function(c,C){return c-C});var n=0,a=100;t!==0&&(n=i[t-1]),t!==_.length-1&&(a=i[t]);var o=a-n,l="translate("+Se(Le(n,o)+"%","0")+")",d="scale("+Se(o/100,"1")+")";_[t].style[e.transformRule]=l+" "+d}}function Oe(t,i){return t===null||t===!1||t===void 0||(typeof t=="number"&&(t=String(t)),t=e.format.from(t),t!==!1&&(t=b.toStepping(t)),t===!1||isNaN(t))?h[i]:t}function oe(t,i,n){var a=ce(t),o=h[0]===void 0;i=i===void 0?!0:i,e.animate&&!o&&Ke(p,e.cssClasses.tap,e.animationDuration),m.forEach(function(c){Q(c,Oe(a[c],c),!0,!1,n)});var l=m.length===1?0:1;if(o&&b.hasNoSize()&&(n=!0,h[0]=0,m.length>1)){var d=100/(m.length-1);m.forEach(function(c){h[c]=c*d})}for(;l<m.length;++l)m.forEach(function(c){Q(c,h[c],!0,!0,n)});xe(),m.forEach(function(c){M("update",c),a[c]!==null&&i&&M("set",c)})}function dt(t){oe(e.start,t)}function pt(t,i,n,a){if(t=Number(t),!(t>=0&&t<m.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Q(t,Oe(i,t),!0,!0,a),M("update",t),n&&M("set",t)}function He(t){if(t===void 0&&(t=!1),t)return v.length===1?v[0]:v.slice(0);var i=v.map(e.format.to);return i.length===1?i[0]:i}function mt(){for(ie($.aria),ie($.tooltips),Object.keys(e.cssClasses).forEach(function(t){fe(p,e.cssClasses[t])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function je(t){var i=h[t],n=b.getNearbySteps(i),a=v[t],o=n.thisStep.step,l=null;if(e.snap)return[a-n.stepBefore.startValue||null,n.stepAfter.startValue-a||null];o!==!1&&a+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-a),a>n.thisStep.startValue?l=n.thisStep.step:n.stepBefore.step===!1?l=!1:l=a-n.stepBefore.highestStep,i===100?o=null:i===0&&(l=null);var d=b.countStepDecimals();return o!==null&&o!==!1&&(o=Number(o.toFixed(d))),l!==null&&l!==!1&&(l=Number(l.toFixed(d))),[l,o]}function gt(){return m.map(je)}function St(t,i){var n=He(),a=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];a.forEach(function(l){t[l]!==void 0&&(s[l]=t[l])});var o=Je(s);a.forEach(function(l){t[l]!==void 0&&(e[l]=o[l])}),b=o.spectrum,e.margin=o.margin,e.limit=o.limit,e.padding=o.padding,e.pips?de(e.pips):ve(),e.tooltips?ye():he(),h=[],oe(Pe(t.start)?t.start:n,i),t.connect&&ze()}function ze(){for(;V.firstChild;)V.removeChild(V.firstChild);for(var t=0;t<=e.handles;t++)_[t]=Y(V,e.connect[t]),ne(t);Ue({drag:e.events.drag,fixed:!0})}function xt(){X=!X,Ge(e,e.connect.map(function(t){return!t})),ze()}function bt(){A=te(p),H(e.connect,A),Ue(e.events),oe(e.start),e.pips&&de(e.pips),e.tooltips&&ye(),tt()}bt();var le={destroy:mt,steps:gt,on:ge,off:ie,get:He,set:oe,setHandle:pt,reset:dt,disable:Qe,enable:et,__moveHandles:function(t,i,n){_e(t,i,h,n)},options:s,updateOptions:St,target:p,removePips:ve,removeTooltips:he,getPositions:function(){return h.slice()},getTooltips:function(){return I},getOrigins:function(){return x},pips:de};return le}function ar(r,e){if(!r||!r.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+r);if(r.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var s=Je(e),f=nr(r,s,e);return r.noUiSlider=f,f}const lr={__spectrum:Xe,cssClasses:Ye,create:ar};var Ze={exports:{}};(function(r,e){(function(s){r.exports=s()})(function(){var s=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function f(v){return v.split("").reverse().join("")}function u(v,h){return v.substring(0,h.length)===h}function S(v,h){return v.slice(-1*h.length)===h}function p(v,h,m){if((v[h]||v[m])&&v[h]===v[m])throw new Error(h)}function A(v){return typeof v=="number"&&isFinite(v)}function V(v,h){return v=v.toString().split("e"),v=Math.round(+(v[0]+"e"+(v[1]?+v[1]+h:h))),v=v.toString().split("e"),(+(v[0]+"e"+(v[1]?+v[1]-h:-h))).toFixed(h)}function x(v,h,m,y,w,X,W,K,q,ee,N,g){var Y=g,H,te,G,re="",B="";return X&&(g=X(g)),A(g)?(v!==!1&&parseFloat(g.toFixed(v))===0&&(g=0),g<0&&(H=!0,g=Math.abs(g)),v!==!1&&(g=V(g,v)),g=g.toString(),g.indexOf(".")!==-1?(te=g.split("."),G=te[0],m&&(re=m+te[1])):G=g,h&&(G=f(G).match(/.{1,3}/g),G=f(G.join(f(h)))),H&&K&&(B+=K),y&&(B+=y),H&&q&&(B+=q),B+=G,B+=re,w&&(B+=w),ee&&(B=ee(B,Y)),B):!1}function _(v,h,m,y,w,X,W,K,q,ee,N,g){var Y,H="";return N&&(g=N(g)),!g||typeof g!="string"||(K&&u(g,K)&&(g=g.replace(K,""),Y=!0),y&&u(g,y)&&(g=g.replace(y,"")),q&&u(g,q)&&(g=g.replace(q,""),Y=!0),w&&S(g,w)&&(g=g.slice(0,-1*w.length)),h&&(g=g.split(h).join("")),m&&(g=g.replace(m,".")),Y&&(H+="-"),H+=g,H=H.replace(/[^0-9\.\-.]/g,""),H==="")||(H=Number(H),W&&(H=W(H)),!A(H))?!1:H}function L(v){var h,m,y,w={};for(v.suffix===void 0&&(v.suffix=v.postfix),h=0;h<s.length;h+=1)if(m=s[h],y=v[m],y===void 0)m==="negative"&&!w.negativeBefore?w[m]="-":m==="mark"&&w.thousand!=="."?w[m]=".":w[m]=!1;else if(m==="decimals")if(y>=0&&y<8)w[m]=y;else throw new Error(m);else if(m==="encoder"||m==="decoder"||m==="edit"||m==="undo")if(typeof y=="function")w[m]=y;else throw new Error(m);else if(typeof y=="string")w[m]=y;else throw new Error(m);return p(w,"mark","thousand"),p(w,"prefix","negative"),p(w,"prefix","negativeBefore"),w}function I(v,h,m){var y,w=[];for(y=0;y<s.length;y+=1)w.push(v[s[y]]);return w.push(m),h.apply("",w)}function b(v){if(!(this instanceof b))return new b(v);typeof v=="object"&&(v=L(v),this.to=function(h){return I(v,x,h)},this.from=function(h){return I(v,_,h)})}return b})})(Ze);var sr=Ze.exports;const fr=wt(sr);export{lr as n,fr as w};
