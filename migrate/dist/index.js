!function(t){var o={};function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(o){return t[o]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";e.r(o);e(1);var n,i,r=null!==(n=localStorage.getItem("theme"))&&void 0!==n?n:"light",a=null!==(i=localStorage.getItem("design"))&&void 0!==i?i:"neu",s=function(){return document.body.classList["light"===r?"remove":"add"]("dark")},c=function(){return["switch","second-panel","main-image","about","social","h4i-project"].map((function(t){return Array.from(document.getElementsByClassName(t))})).forEach((function(t){return t.forEach((function(t){return t.classList["neu"===a?"remove":"add"]("flat")}))}))};s(),c();var d=document.getElementById("theme-switch"),l=document.getElementById("design-switch");d.addEventListener("click",(function(){this.classList.add("no-hover"),r="light"===r?"dark":"light",s()})),d.addEventListener("mousedown",(function(t){return t.preventDefault()})),d.addEventListener("mouseleave",(function(){this.classList.remove("no-hover")})),l.addEventListener("click",(function(){this.classList.add("no-hover"),a="neu"===a?"flat":"neu",c()})),l.addEventListener("mousedown",(function(t){return t.preventDefault()})),l.addEventListener("mouseleave",(function(){this.classList.remove("no-hover")}))},function(t,o,e){var n=e(2),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(i,r);t.exports=i.locals||{}},function(t,o,e){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(o){if(void 0===t[o]){var e=document.querySelector(o);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[o]=e}return t[o]}}(),a=[];function s(t){for(var o=-1,e=0;e<a.length;e++)if(a[e].identifier===t){o=e;break}return o}function c(t,o){for(var e={},n=[],i=0;i<t.length;i++){var r=t[i],c=o.base?r[0]+o.base:r[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var m=s(l),v={css:r[1],media:r[2],sourceMap:r[3]};-1!==m?(a[m].references++,a[m].updater(v)):a.push({identifier:l,updater:g(v,o),references:1}),n.push(l)}return n}function d(t){var o=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=e.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){o.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(o);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}return o}var l,m=(l=[],function(t,o){return l[t]=o,l.filter(Boolean).join("\n")});function v(t,o,e,n){var i=e?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=m(o,i);else{var r=document.createTextNode(i),a=t.childNodes;a[o]&&t.removeChild(a[o]),a.length?t.insertBefore(r,a[o]):t.appendChild(r)}}function b(t,o,e){var n=e.css,i=e.media,r=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,u=0;function g(t,o){var e,n,i;if(o.singleton){var r=u++;e=h||(h=d(o)),n=v.bind(null,e,r,!1),i=v.bind(null,e,r,!0)}else e=d(o),n=b.bind(null,e,o),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return n(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;n(t=o)}else i()}}t.exports=function(t,o){(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=i());var e=c(t=t||[],o);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<e.length;n++){var i=s(e[n]);a[i].references--}for(var r=c(t,o),d=0;d<e.length;d++){var l=s(e[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=r}}}},function(t,o,e){(o=e(4)(!1)).push([t.i,'@font-face{font-family:"Nunito Sans";font-style:normal;font-weight:300;font-display:swap;src:local("Nunito Sans Light"),local("NunitoSans-Light"),url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8WAc5tU1E.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}body{margin:0;font-family:"Nunito Sans", sans-serif;background-color:#e7eaee;color:#1a1e23;transition:background-color 0.5s, color 0.5s;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.flat{border-color:rgba(0,0,0,0) !important;box-shadow:none !important;transition:border-color 0.5s box-shadow 0.5s}a{color:#1a1e23}a:hover{color:#333c47;text-decoration:underline;transition:color 0.2s}.dark{background-color:#1a1e23;color:#e7eaee;transition:background-color 0.5s, color 0.5s}.dark a{color:#e7eaee}.dark a:hover{color:#a0abba;transition:color 0.2s}.switch{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(255,255,255,0.2);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5),0 0 0 0 rgba(246,247,249,0.5) inset,0 0 0 0 rgba(160,171,186,0.5) inset;display:flex;flex-direction:column;justify-content:center;align-items:center;width:7vmin;height:7vmin;position:fixed;padding:0;border-radius:100%;background-color:rgba(0,0,0,0);cursor:pointer;font-family:"Nunito Sans"}.no-hover .switch-current{transition:none}.no-hover .switch-other{transition:none}.switch:not(.no-hover):hover{transition:box-shadow 0.2s, border-color 0.2s, color 0.2s;border-color:rgba(0,0,0,0);box-shadow:0 0 0 0 rgba(246,247,249,0.5),0 0 0 0 rgba(160,171,186,0.5),-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5) inset,0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5) inset}.switch:not(.no-hover):hover .theme-switch-svg{transition:filter 0.2s, opacity 0.2s;filter:invert(19%) sepia(16%) saturate(763%) hue-rotate(173deg) brightness(94%) contrast(86%)}.switch:not(.no-hover):hover .switch-current{opacity:0;transition:opacity 0.2s}.switch:not(.no-hover):hover .switch-other{opacity:1;transition:opacity 0.2s}.switch-current{position:absolute;transition:opacity 0.2s;opacity:1}.switch-other{position:absolute;transition:opacity 0.2s;opacity:0}.theme-switch{right:5vmin;top:5vmin}.theme-switch-svg{transition:filter 0.5s, opacity 0.2s;filter:invert(6%) sepia(6%) saturate(2468%) hue-rotate(173deg) brightness(101%) contrast(87%);border-radius:100%;width:5vmin;height:5vmin}.neu-switch{font-size:2vmin;right:5vmin;top:15vmin}.panels{display:flex}@media (orientation: landscape){.panels{flex-direction:row}}@media (orientation: portrait){.panels{flex-direction:column;margin-top:5vh}}.first-panel{display:flex;flex-direction:column;justify-content:center;align-items:center}@media (orientation: landscape){.first-panel{height:100vh;width:50%}}@media (orientation: landscape){.first-panel{padding-left:5vh}}.second-panel{display:flex;flex-direction:column;justify-content:center;align-items:center;border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(255,255,255,0.2);box-shadow:-1vmin -1vmin 1vmin 0 rgba(246,247,249,0.5),1.5vmin 1.5vmin 1.5vmin 0 rgba(160,171,186,0.5)}@media (orientation: landscape){.second-panel{height:100vh;width:50%}}@media (orientation: landscape){.second-panel{border-top:none !important;border-right:none !important;border-bottom:none !important;padding-right:5vh}}@media (orientation: portrait){.second-panel{box-shadow:none;border:none}}.hello{font-size:2vmax;height:8vmax;text-align:center}.hello h1{font-weight:normal;margin:0}.main-image-container{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}@media (orientation: landscape){.main-image-container{margin-bottom:8vw}}@media (orientation: portrait){.main-image-container{margin-bottom:2vh}}.main-image{height:25vmax;width:25vmax;min-height:40vmin;min-width:40vmin;border-radius:100%;transition:box-shadow 0.5s;box-shadow:0 1px 2vmin 0vmin rgba(0,0,0,0.64)}.main-image:hover{box-shadow:0 1px 1vmin 0.5vmin rgba(0,0,0,0.08),0 1px 2vmin 0.5vmin rgba(0,0,0,0.16),0 1px 4vmin 0.5vmin rgba(0,0,0,0.32);transition:box-shadow 0.5s}.about{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(255,255,255,0.2);box-shadow:-1vmin -1vmin 1vmin 0 rgba(246,247,249,0.5),1.5vmin 1.5vmin 1.5vmin 0 rgba(160,171,186,0.5);margin:4vw;padding:2vmax;border-radius:0.8vmax}.about-text{margin-bottom:3vh}.about-text-section{margin-bottom:2vh}.about-text-section p{margin:0}.about-text-section h1{font-weight:normal;margin:0;margin-bottom:0.3vw}.about-text-section h2{font-weight:normal;margin:0;margin-bottom:0.15vw}.about-text-section ul{margin:0;padding:0;padding-left:3vh;list-style-type:"› "}@media (orientation: landscape){.about-text-section h1{font-size:1.6vw}.about-text-section h2{font-size:1.2vw}.about-text-section ul{font-size:1vw}}@media (orientation: portrait){.about-text-section h1{font-size:4vw}.about-text-section h2{font-size:3vw}.about-text-section ul{font-size:2.5vw}}.h4i-projects,.side-projects{display:flex;flex-direction:row;justify-content:space-evenly;margin-top:0.5vw}.h4i-project{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(255,255,255,0.2);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5),0 0 0 0 rgba(246,247,249,0.5) inset,0 0 0 0 rgba(160,171,186,0.5) inset;display:flex;flex-direction:column;justify-content:center;align-items:center;text-decoration:none;justify-content:space-evenly;border-radius:0.5vmax}@media (orientation: landscape){.h4i-project{width:6vw;padding:0.5vw}.h4i-project img{height:2.5vw;max-width:5vw;margin-bottom:0.25vw}.h4i-project span{font-size:1vw}.h4i-project sub{font-size:0.6vw}}@media (orientation: portrait){.h4i-project{width:12vw;padding:1vw;margin:1vw 0}.h4i-project img{height:5vw;max-width:10vw;margin-bottom:0.5vw}.h4i-project span{font-size:2vw}.h4i-project sub{font-size:1.2vw}}.h4i-project:hover,.side-project:hover{transition:box-shadow 0.2s, border-color 0.2s, color 0.2s;border-color:rgba(0,0,0,0);box-shadow:0 0 0 0 rgba(246,247,249,0.5),0 0 0 0 rgba(160,171,186,0.5),-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5) inset,0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5) inset}.side-project{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(255,255,255,0.2);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5),0 0 0 0 rgba(246,247,249,0.5) inset,0 0 0 0 rgba(160,171,186,0.5) inset;display:flex;flex-direction:column;justify-content:center;align-items:center;text-decoration:none;justify-content:space-evenly;border-radius:0.5vmax;padding:1vmin}@media (orientation: landscape){.side-project p{font-size:0.8vw}}@media (orientation: portrait){.side-project p{font-size:2vw}}.socials{display:flex;flex-direction:row;justify-content:space-evenly}.social{display:flex;flex-direction:column;justify-content:center;align-items:center;border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(255,255,255,0.2);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5),0 0 0 0 rgba(246,247,249,0.5) inset,0 0 0 0 rgba(160,171,186,0.5) inset;text-decoration:none;justify-content:space-evenly;border-radius:0.5vmax}.social .social-filter{transition:filter 0.5s, opacity 0.2s;filter:invert(6%) sepia(6%) saturate(2468%) hue-rotate(173deg) brightness(101%) contrast(87%)}@media (orientation: landscape){.social{height:4vw;width:4vw;padding:0.2vw}.social img{height:2vw}.social span{font-size:0.7vw}}@media (orientation: portrait){.social{height:8vw;width:8vw;padding:1vw;margin:1vw 0}.social img{height:4vw}.social span{font-size:2vw}}.social:hover{transition:box-shadow 0.2s, border-color 0.2s, color 0.2s;border-color:rgba(0,0,0,0);box-shadow:0 0 0 0 rgba(246,247,249,0.5),0 0 0 0 rgba(160,171,186,0.5),-0.5vmin -0.5vmin 0.5vmin 0 rgba(246,247,249,0.5) inset,0.8vmin 0.8vmin 0.8vmin 0 rgba(160,171,186,0.5) inset}.social:hover .social-filter{transition:filter 0.2s, opacity 0.2s;filter:invert(19%) sepia(16%) saturate(763%) hue-rotate(173deg) brightness(94%) contrast(86%)}.dark .switch{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(17,20,23,0.1);border-color:rgba(17,20,23,0.1);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(34,40,47,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(17,20,24,0.5),0 0 0 0 rgba(34,40,47,0.5) inset,0 0 0 0 rgba(17,20,24,0.5) inset;color:#e7eaee}.dark .switch:not(.no-hover):hover{transition:box-shadow 0.2s, border-color 0.2s, color 0.2s;border-color:rgba(0,0,0,0);box-shadow:0 0 0 0 rgba(34,40,47,0.5),0 0 0 0 rgba(17,20,24,0.5),-0.5vmin -0.5vmin 0.5vmin 0 rgba(34,40,47,0.5) inset,0.8vmin 0.8vmin 0.8vmin 0 rgba(17,20,24,0.5) inset;color:#a0abba}.dark .switch:not(.no-hover):hover .theme-switch-svg{transition:filter 0.2s, opacity 0.2s;filter:invert(69%) sepia(8%) saturate(506%) hue-rotate(175deg) brightness(97%) contrast(90%)}.dark .theme-switch-svg{transition:filter 0.5s, opacity 0.2s;filter:invert(95%) sepia(9%) saturate(83%) hue-rotate(174deg) brightness(100%) contrast(89%)}.dark .second-panel{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(17,20,23,0.1);box-shadow:-1vmin -1vmin 1vmin 0 rgba(34,40,47,0.5),1.5vmin 1.5vmin 1.5vmin 0 rgba(17,20,24,0.5)}@media (orientation: portrait){.dark .second-panel{box-shadow:none;border-color:rgba(0,0,0,0)}}.dark .main-image{box-shadow:0 1px 2vmin 0vmin rgba(255,255,255,0.16)}.dark .main-image:hover{box-shadow:0 1px 1vmin 0.5vmin rgba(255,255,255,0.02),0 1px 2vmin 0.5vmin rgba(255,255,255,0.04),0 1px 4vmin 0.5vmin rgba(255,255,255,0.08)}.dark .about{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(17,20,23,0.1);box-shadow:-1vmin -1vmin 1vmin 0 rgba(34,40,47,0.5),1.5vmin 1.5vmin 1.5vmin 0 rgba(17,20,24,0.5)}.dark .h4i-project,.dark .side-project{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(17,20,23,0.1);border-color:rgba(17,20,23,0.1);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(34,40,47,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(17,20,24,0.5),0 0 0 0 rgba(34,40,47,0.5) inset,0 0 0 0 rgba(17,20,24,0.5) inset}.dark .h4i-project:hover,.dark .side-project:hover{transition:box-shadow 0.2s, border-color 0.2s, color 0.2s;border-color:rgba(0,0,0,0);box-shadow:0 0 0 0 rgba(34,40,47,0.5),0 0 0 0 rgba(17,20,24,0.5),-0.5vmin -0.5vmin 0.5vmin 0 rgba(34,40,47,0.5) inset,0.8vmin 0.8vmin 0.8vmin 0 rgba(17,20,24,0.5) inset}.dark .social{border-style:solid;border-width:0.2vmin;transition:border-color 0.5s, box-shadow 0.5s;border-color:rgba(17,20,23,0.1);border-color:rgba(17,20,23,0.1);box-shadow:-0.5vmin -0.5vmin 0.5vmin 0 rgba(34,40,47,0.5),0.8vmin 0.8vmin 0.8vmin 0 rgba(17,20,24,0.5),0 0 0 0 rgba(34,40,47,0.5) inset,0 0 0 0 rgba(17,20,24,0.5) inset}.dark .social .social-filter{transition:filter 0.5s, opacity 0.2s;filter:invert(95%) sepia(9%) saturate(83%) hue-rotate(174deg) brightness(100%) contrast(89%)}.dark .social:hover{transition:box-shadow 0.2s, border-color 0.2s, color 0.2s;border-color:rgba(0,0,0,0);box-shadow:0 0 0 0 rgba(34,40,47,0.5),0 0 0 0 rgba(17,20,24,0.5),-0.5vmin -0.5vmin 0.5vmin 0 rgba(34,40,47,0.5) inset,0.8vmin 0.8vmin 0.8vmin 0 rgba(17,20,24,0.5) inset}.dark .social:hover .social-filter{transition:filter 0.2s, opacity 0.2s;filter:invert(69%) sepia(8%) saturate(506%) hue-rotate(175deg) brightness(97%) contrast(90%)}\n',""]),t.exports=o},function(t,o,e){"use strict";t.exports=function(t){var o=[];return o.toString=function(){return this.map((function(o){var e=function(t,o){var e=t[1]||"",n=t[3];if(!n)return e;if(o&&"function"==typeof btoa){var i=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(r).concat([i]).join("\n")}var a,s,c;return[e].join("\n")}(o,t);return o[2]?"@media ".concat(o[2]," {").concat(e,"}"):e})).join("")},o.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);n&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),o.push(c))}},o}}]);