!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([,,function(e,t,r){"use strict";r.r(t);r(3),r(4)},function(e,t,r){var n;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function(e){var t,r,n,i,s,a,c,o=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(r=document.createElement("source"),n=function(e){var t,n,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=r.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)},r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s))}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function(i,s,a){"use strict";var c,o,u;s.createElement("picture");var l={},d=!1,f=function(){},p=s.createElement("img"),m=p.getAttribute,h=p.setAttribute,A=p.removeAttribute,g=s.documentElement,v={},y={algorithm:""},b=navigator.userAgent,z=/rident/.test(b)||/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1>35,w="currentSrc",E=/\s+\+?\d+(e\d+)?w/,S=/(\([^)]+\))?\s*(.+)/,C=i.picturefillCFG,x="font-size:100%!important;",M=!0,T={},L={},R=i.devicePixelRatio,P={px:1,in:96},B=s.createElement("a"),D=!1,W=/^[ \t\n\r\u000c]+/,_=/^[, \t\n\r\u000c]+/,N=/^[^ \t\n\r\u000c]+/,k=/[,]+$/,$=/^\d+$/,I=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,O=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},F=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}};function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var H,Q,j,G,q,V,K,J,X,Y,Z,ee,te,re,ne,ie,se=(H=/^([\d\.]+)(em|vw|px)$/,Q=F(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var r;if(!(e in T))if(T[e]=!1,t&&(r=e.match(H)))T[e]=r[1]*P[r[2]];else try{T[e]=new Function("e",Q(e))(P)}catch(e){}return T[e]}),ae=function(e,t){return e.w?(e.cWidth=l.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ce=function(e){if(d){var t,r,n,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=(t=i.elements||l.qsa(i.context||s,i.reevaluate||i.reselect?l.sel:l.selShort)).length){for(l.setupRun(i),D=!0,r=0;r<n;r++)l.fillImg(t[r],i);l.teardownRun(i)}}};function oe(e,t){return e.res-t.res}function ue(e,t){var r,n,i;if(e&&t)for(i=l.parseSet(t),e=l.makeUrl(e),r=0;r<i.length;r++)if(e===l.makeUrl(i[r].url)){n=i[r];break}return n}i.console&&console.warn,w in p||(w="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),l.ns=("pf"+(new Date).getTime()).substr(0,9),l.supSrcset="srcset"in p,l.supSizes="sizes"in p,l.supPicture=!!i.HTMLPictureElement,l.supSrcset&&l.supPicture&&!l.supSizes&&(j=s.createElement("img"),p.srcset="data:,a",j.src="data:,a",l.supSrcset=p.complete===j.complete,l.supPicture=l.supSrcset&&l.supPicture),l.supSrcset&&!l.supSizes?(G="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",q=s.createElement("img"),V=function(){2===q.width&&(l.supSizes=!0),o=l.supSrcset&&!l.supSizes,d=!0,setTimeout(ce)},q.onload=V,q.onerror=V,q.setAttribute("sizes","9px"),q.srcset=G+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",q.src=G):d=!0,l.selShort="picture>img,img[srcset]",l.sel=l.selShort,l.cfg=y,l.DPR=R||1,l.u=P,l.types=v,l.setSize=f,l.makeUrl=F(function(e){return B.href=e,B.href}),l.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},l.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?l.matchesMedia=function(e){return!e||matchMedia(e).matches}:l.matchesMedia=l.mMQ,l.matchesMedia.apply(this,arguments)},l.mMQ=function(e){return!e||se(e)},l.calcLength=function(e){var t=se(e,!0)||!1;return t<0&&(t=!1),t},l.supportsType=function(e){return!e||v[e]},l.parseSize=F(function(e){var t=(e||"").match(S);return{media:t&&t[1],length:t&&t[2]}}),l.parseSet=function(e){return e.cands||(e.cands=function(e,t){function r(t){var r,n=t.exec(e.substring(u));if(n)return r=n[0],u+=r.length,r}var n,i,s,a,c,o=e.length,u=0,l=[];function d(){var e,r,s,a,c,o,u,d,f,p=!1,m={};for(a=0;a<i.length;a++)o=(c=i[a])[c.length-1],u=c.substring(0,c.length-1),d=parseInt(u,10),f=parseFloat(u),$.test(u)&&"w"===o?((e||r)&&(p=!0),0===d?p=!0:e=d):I.test(u)&&"x"===o?((e||r||s)&&(p=!0),f<0?p=!0:r=f):$.test(u)&&"h"===o?((s||r)&&(p=!0),0===d?p=!0:s=d):p=!0;p||(m.url=n,e&&(m.w=e),r&&(m.d=r),s&&(m.h=s),s||r||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,l.push(m))}function f(){for(r(W),s="",a="in descriptor";;){if(c=e.charAt(u),"in descriptor"===a)if(U(c))s&&(i.push(s),s="",a="after descriptor");else{if(","===c)return u+=1,s&&i.push(s),void d();if("("===c)s+=c,a="in parens";else{if(""===c)return s&&i.push(s),void d();s+=c}}else if("in parens"===a)if(")"===c)s+=c,a="in descriptor";else{if(""===c)return i.push(s),void d();s+=c}else if("after descriptor"===a)if(U(c));else{if(""===c)return void d();a="in descriptor",u-=1}u+=1}}for(;;){if(r(_),u>=o)return l;n=r(N),i=[],","===n.slice(-1)?(n=n.replace(k,""),d()):f()}}(e.srcset,e)),e.cands},l.getEmValue=function(){var e;if(!c&&(e=s.body)){var t=s.createElement("div"),r=g.style.cssText,n=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=x,e.style.cssText=x,e.appendChild(t),c=t.offsetWidth,e.removeChild(t),c=parseFloat(c,10),g.style.cssText=r,e.style.cssText=n}return c||16},l.calcListLength=function(e){if(!(e in L)||y.uT){var t=l.calcLength(function(e){var t,r,n,i,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=(r=function(e){var t,r="",n=[],i=[],s=0,a=0,c=!1;function o(){r&&(n.push(r),r="")}function u(){n[0]&&(i.push(n),n=[])}for(;;){if(""===(t=e.charAt(a)))return o(),u(),i;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(U(t)){if(e.charAt(a-1)&&U(e.charAt(a-1))||!r){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),u(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}r+=t,a+=1}}}(e)).length,t=0;t<n;t++)if(s=(i=r[t])[i.length-1],c=s,o.test(c)&&parseFloat(c)>=0||u.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),l.matchesMedia(i))return a}return"100vw"}(e));L[e]=t||P.width}return L[e]},l.setRes=function(e){var t;if(e)for(var r=0,n=(t=l.parseSet(e)).length;r<n;r++)ae(t[r],e.sizes);return t},l.setRes.res=ae,l.applySetCandidate=function(e,t){if(e.length){var r,n,i,s,a,c,o,u,d,f,p,m,h,A,g,v,b=t[l.ns],E=l.DPR;if(c=b.curSrc||t[w],(o=b.curCan||function(e,t,r){var n;return!r&&t&&(r=(r=e[l.ns].sets)&&r[r.length-1]),(n=ue(t,r))&&(t=l.makeUrl(t),e[l.ns].curSrc=t,e[l.ns].curCan=n,n.res||ae(n,n.set.sizes)),n}(t,c,e[0].set))&&o.set===e[0].set&&((d=z&&!t.complete&&o.res-.1>E)||(o.cached=!0,o.res>=E&&(a=o))),!a)for(e.sort(oe),a=e[(s=e.length)-1],n=0;n<s;n++)if((r=e[n]).res>=E){a=e[i=n-1]&&(d||c!==l.makeUrl(r.url))&&(f=e[i].res,p=r.res,m=E,h=e[i].cached,A=void 0,g=void 0,v=void 0,"saveData"===y.algorithm?f>2.7?v=m+1:(g=(p-m)*(A=Math.pow(f-.6,1.5)),h&&(g+=.1*A),v=f+g):v=m>1?Math.sqrt(f*p):f,v>m)?e[i]:r;break}a&&(u=l.makeUrl(a.url),b.curSrc=u,b.curCan=a,u!==c&&l.setSrc(t,a),l.setSize(t))}},l.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},l.getSet=function(e){var t,r,n,i=!1,s=e[l.ns].sets;for(t=0;t<s.length&&!i;t++)if((r=s[t]).srcset&&l.matchesMedia(r.media)&&(n=l.supportsType(r.type))){"pending"===n&&(r=n),i=r;break}return i},l.parseSets=function(e,t,r){var n,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[l.ns];(void 0===u.src||r.src)&&(u.src=m.call(e,"src"),u.src?h.call(e,"data-pfsrc",u.src):A.call(e,"data-pfsrc")),(void 0===u.srcset||r.srcset||!l.supSrcset||e.srcset)&&(n=m.call(e,"srcset"),u.srcset=n,a=!0),u.sets=[],c&&(u.pic=!0,function(e,t){var r,n,i,s,a=e.getElementsByTagName("source");for(r=0,n=a.length;r<n;r++)(i=a[r])[l.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,u.sets)),u.srcset?(i={srcset:u.srcset,sizes:m.call(e,"sizes")},u.sets.push(i),(s=(o||u.src)&&E.test(u.srcset||""))||!u.src||ue(u.src,i)||i.has1x||(i.srcset+=", "+u.src,i.cands.push({url:u.src,d:1,set:i}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=void 0,u.supported=!(c||i&&!l.supSrcset||s&&!l.supSizes),a&&l.supSrcset&&!u.supported&&(n?(h.call(e,"data-pfsrcset",n),e.srcset=""):A.call(e,"data-pfsrcset")),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==l.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},l.fillImg=function(e,t){var r,n,i,s,a,c=t.reselect||t.reevaluate;(e[l.ns]||(e[l.ns]={}),r=e[l.ns],c||r.evaled!==u)&&(r.parsed&&!t.reevaluate||l.parseSets(e,e.parentNode,t),r.supported?r.evaled=u:(n=e,s=l.getSet(n),a=!1,"pending"!==s&&(a=u,s&&(i=l.setRes(s),l.applySetCandidate(i,n))),n[l.ns].evaled=a))},l.setupRun=function(){D&&!M&&R===i.devicePixelRatio||(M=!1,R=i.devicePixelRatio,T={},L={},l.DPR=R||1,P.width=Math.max(i.innerWidth||0,g.clientWidth),P.height=Math.max(i.innerHeight||0,g.clientHeight),P.vw=P.width/100,P.vh=P.height/100,u=[P.height,P.width,R].join("-"),P.em=l.getEmValue(),P.rem=P.em)},l.supPicture?(ce=f,l.fillImg=f):(te=i.attachEvent?/d$|^c/:/d$|^c|^i/,re=function(){var e=s.readyState||"";ne=setTimeout(re,"loading"===e?200:999),s.body&&(l.fillImgs(),(K=K||te.test(e))&&clearTimeout(ne))},ne=setTimeout(re,s.body?9:99),ie=g.clientHeight,O(i,"resize",(J=function(){M=Math.max(i.innerWidth||0,g.clientWidth)!==P.width||g.clientHeight!==ie,ie=g.clientHeight,M&&l.fillImgs()},X=99,ee=function(){var e=new Date-Z;e<X?Y=setTimeout(ee,X-e):(Y=null,J())},function(){Z=new Date,Y||(Y=setTimeout(ee,X))})),O(s,"readystatechange",re)),l.picturefill=ce,l.fillImgs=ce,l.teardownRun=f,ce._=l,i.picturefillCFG={pf:l,push:function(e){var t=e.shift();"function"==typeof l[t]?l[t].apply(l,e):(y[t]=e[0],D&&l.fillImgs({reselect:!0}))}};for(;C&&C.length;)i.picturefillCFG.push(C.shift());i.picturefill=ce,"object"==typeof e.exports?e.exports=ce:void 0===(n=function(){return ce}.call(t,r,t,e))||(e.exports=n),l.supPicture||(v["image/webp"]=function(e,t){var r=new i.Image;return r.onerror=function(){v[e]=!1,ce()},r.onload=function(){v[e]=1===r.width,ce()},r.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t,r){!function(t,r){var n=function(e,t){"use strict";if(!t.getElementsByClassName)return;var r,n,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,c=e.addEventListener,o=e.setTimeout,u=e.requestAnimationFrame||o,l=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},A=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var r;(r=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(r," "))},v=function(e,t,r){var n=r?"addEventListener":"removeEventListener";r&&v(e,t),f.forEach(function(r){e[n](r,t)})},y=function(e,n,i,s,a){var c=t.createEvent("Event");return i||(i={}),i.instance=r,c.initEvent(n,!s,!a),c.detail=i,e.dispatchEvent(c),c},b=function(t,r){var i;!a&&(i=e.picturefill||n.pf)?(r&&r.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",r.src),i({reevaluate:!0,elements:[t]})):r&&r.src&&(t.src=r.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},E=(T=[],L=[],R=T,P=function(){var e=R;for(R=T.length?L:T,x=!0,M=!1;e.length;)e.shift()();x=!1},B=function(e,r){x&&!r?e.apply(this,arguments):(R.push(e),M||(M=!0,(t.hidden?o:u)(P)))},B._lsFlush=P,B),S=function(e,t){return t?function(){E(e)}:function(){var t=this,r=arguments;E(function(){e.apply(t,r)})}},C=function(e){var t,r,n=function(){t=null,e()},i=function(){var e=s.now()-r;e<99?o(i,99-e):(l||n)(n)};return function(){r=s.now(),t||(t=o(i,99))}};var x,M,T,L,R,P,B;!function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in n=e.lazySizesConfig||e.lazysizesConfig||{},r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,o(function(){n.init&&_()})}();var D=function(){var a,u,f,p,w,x,M,T,L,R,P,B,D,_,N,k,$,I,O,F=/^img$/i,U=/^iframe$/i,H="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,j=0,G=-1,q=function(e){j--,e&&e.target&&v(e.target,q),(!e||j<0||!e.target)&&(j=0)},V=function(e){return null==B&&(B="hidden"==z(t.body,"visibility")),B||"hidden"!=z(e.parentNode,"visibility")&&"hidden"!=z(e,"visibility")},K=function(e,r){var n,s=e,a=V(e);for(T-=r,P+=r,L-=r,R+=r;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(z(s,"opacity")||1)>0)&&"visible"!=z(s,"overflow")&&(n=s.getBoundingClientRect(),a=R>n.left&&L<n.right&&P>n.top-1&&T<n.bottom+1);return a},J=function(){var e,s,c,o,l,d,f,m,h,A,g,v,y=r.elements;if((p=n.loadMode)&&j<8&&(e=y.length)){for(s=0,G++,A=!n.expand||n.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:n.expand,g=A*n.expFactor,v=n.hFac,B=null,Q<g&&j<1&&G>2&&p>2&&!t.hidden?(Q=g,G=0):Q=p>1&&G>1&&j<6?A:0;s<e;s++)if(y[s]&&!y[s]._lazyRace)if(H)if((m=y[s].getAttribute("data-expand"))&&(d=1*m)||(d=Q),h!==d&&(x=innerWidth+d*v,M=innerHeight+d,f=-1*d,h=d),c=y[s].getBoundingClientRect(),(P=c.bottom)>=f&&(T=c.top)<=M&&(R=c.right)>=f*v&&(L=c.left)<=x&&(P||R||L||T)&&(n.loadHidden||V(y[s]))&&(u&&j<3&&!m&&(p<3||G<4)||K(y[s],d))){if(ne(y[s]),l=!0,j>9)break}else!l&&u&&!o&&j<4&&G<4&&p>2&&(a[0]||n.preloadAfterLoad)&&(a[0]||!m&&(P||R||L||T||"auto"!=y[s].getAttribute(n.sizesAttr)))&&(o=a[0]||y[s]);else ne(y[s]);o&&!l&&ne(o)}},X=(D=J,N=0,k=n.throttleDelay,$=n.ricTimeout,I=function(){_=!1,N=s.now(),D()},O=l&&$>49?function(){l(I,{timeout:$}),$!==n.ricTimeout&&($=n.ricTimeout)}:S(function(){o(I)},!0),function(e){var t;(e=!0===e)&&($=33),_||(_=!0,(t=k-(s.now()-N))<0&&(t=0),e||t<9?O():o(O,t))}),Y=function(e){A(e.target,n.loadedClass),g(e.target,n.loadingClass),v(e.target,ee),y(e.target,"lazyloaded")},Z=S(Y),ee=function(e){Z({target:e.target})},te=function(e){var t,r=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),r&&e.setAttribute("srcset",r)},re=S(function(e,t,r,i,s){var a,c,u,l,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(r?A(e,n.autosizesClass):e.setAttribute("sizes",i)),c=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),s&&(u=e.parentNode,l=u&&d.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(c||a||l),p={target:e},h&&(v(e,q,!0),clearTimeout(f),f=o(q,2500),A(e,n.loadingClass),v(e,ee,!0)),l&&m.call(u.getElementsByTagName("source"),te),c?e.setAttribute("srcset",c):a&&!l&&(U.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(r){e.src=t}}(e,a):e.src=a),s&&(c||l)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,g(e,n.lazyClass),E(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?q(p):j--,Y(p))},!0)}),ne=function(e){var t,r=F.test(e.nodeName),i=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!r||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,n.errorClass)||!h(e,n.lazyClass))&&(t=y(e,"lazyunveilread").detail,s&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,re(e,t,s,i,r))},ie=function(){if(!u)if(s.now()-w<999)o(ie,999);else{var e=C(function(){n.loadMode=3,X()});u=!0,n.loadMode=3,X(),c("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){w=s.now(),r.elements=t.getElementsByClassName(n.lazyClass),a=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),c("scroll",X,!0),c("resize",X,!0),e.MutationObserver?new MutationObserver(X).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",X,!0),i.addEventListener("DOMAttrModified",X,!0),setInterval(X,999)),c("hashchange",X,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,X,!0)}),/d$|^c/.test(t.readyState)?ie():(c("load",ie),t.addEventListener("DOMContentLoaded",X),o(ie,2e4)),r.elements.length?(J(),E._lsFlush()):X()},checkElems:X,unveil:ne}}(),W=(k=S(function(e,t,r,n){var i,s,a;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),d.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",n);r.detail.dataAttr||b(e,r.detail)}),$=function(e,t,r){var n,i=e.parentNode;i&&(r=w(e,i,r),(n=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=n.detail.width)&&r!==e._lazysizesWidth&&k(e,i,n,r))},I=C(function(){var e,t=N.length;if(t)for(e=0;e<t;e++)$(N[e])}),{_:function(){N=t.getElementsByClassName(n.autosizesClass),c("resize",I)},checkElems:I,updateElem:$}),_=function(){_.i||(_.i=!0,W._(),D._())};var N,k,$,I;return r={cfg:n,autoSizer:W,loader:D,init:_,uP:b,aC:A,rC:g,hC:h,fire:y,gW:w,rAF:E}}(t,t.document);t.lazySizes=n,e.exports&&(e.exports=n)}(window)}]);