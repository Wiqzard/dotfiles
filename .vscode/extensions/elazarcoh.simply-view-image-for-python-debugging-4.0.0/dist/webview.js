(()=>{"use strict";var e,t,i,s,o,n,r={},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,l),i.loaded=!0,i.exports}l.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",i="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",s=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(o,n,r)=>{var a;r&&((a=[]).d=1);var l,d,c,h=new Set,u=o.exports,p=new Promise(((e,t)=>{c=t,d=e}));p[t]=u,p[e]=e=>(a&&e(a),h.forEach(e),p.catch((e=>{}))),o.exports=p,n((o=>{var n;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var n=[];n.d=0,o.then((e=>{r[t]=e,s(n)}),(e=>{r[i]=e,s(n)}));var r={};return r[e]=e=>e(n),r}}var a={};return a[e]=e=>{},a[t]=o,a})))(o);var r=()=>l.map((e=>{if(e[i])throw e[i];return e[t]})),d=new Promise((t=>{(n=()=>t(r)).r=0;var i=e=>e!==a&&!h.has(e)&&(h.add(e),e&&!e.d&&(n.r++,e.push(n)));l.map((t=>t[e](i)))}));return n.r?d:r()}),(e=>(e?c(p[i]=e):d(u),s(a)))),a&&(a.d=0)},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,i)=>(l.f[i](e,t),t)),[])),l.u=e=>e+".webview.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="simply-view-image-for-python-debugging:",l.l=(e,t,i,s)=>{if(o[e])o[e].push(t);else{var r,a;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var h=d[c];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==n+i){r=h;break}}r||(a=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.setAttribute("data-webpack",n+i),r.src=e),o[e]=[t];var u=(t,i)=>{r.onerror=r.onload=null,clearTimeout(p);var s=o[e];if(delete o[e],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((e=>e(i))),t)return t(i)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),a&&document.head.appendChild(r)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.v=(e,t,i,s)=>{var o=fetch(l.p+""+i+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,s).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,s))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={826:0};l.f.j=(t,i)=>{var s=l.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var o=new Promise(((i,o)=>s=e[t]=[i,o]));i.push(s[2]=o);var n=l.p+l.u(t),r=new Error;l.l(n,(i=>{if(l.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var o=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",r.name="ChunkLoadError",r.type=o,r.request=n,s[1](r)}}),"chunk-"+t,t)}};var t=(t,i)=>{var s,o,[n,r,a]=i,d=0;if(n.some((t=>0!==e[t]))){for(s in r)l.o(r,s)&&(l.m[s]=r[s]);a&&a(l)}for(t&&t(i);d<n.length;d++)o=n[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},i=self.webpackChunksimply_view_image_for_python_debugging=self.webpackChunksimply_view_image_for_python_debugging||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();const d=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===d.trustedTypes&&(d.trustedTypes={createPolicy:(e,t)=>t});const c={configurable:!1,enumerable:!1,writable:!1};void 0===d.FAST&&Reflect.defineProperty(d,"FAST",Object.assign({value:Object.create(null)},c));const h=d.FAST;if(void 0===h.getById){const e=Object.create(null);Reflect.defineProperty(h,"getById",Object.assign({value(t,i){let s=e[t];return void 0===s&&(s=i?e[t]=i():null),s}},c))}const u=Object.freeze([]);function p(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let s=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==s;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const f=d.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function o(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let i=0,s=e.length-t;i<s;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&d.requestAnimationFrame(o),e.push(t)},process:o})})),b=d.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let g=b;const m=`fast-${Math.random().toString(36).substring(2,8)}`,v=`${m}{`,y=`}${m}`,x=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(g!==b)throw new Error("The HTML policy can only be set once.");g=e},createHTML:e=>g.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(m),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${m}:`,"")),createInterpolationPlaceholder:e=>`${v}${e}${y}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${m}:${e}--\x3e`,queueUpdate:f.enqueue,processUpdates:f.process,nextUpdate:()=>new Promise(f.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class C{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}else for(let s=0,o=t.length;s<o;++s)t[s].handleChange(i,e)}}class ${constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new C(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new C(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const w=h.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=x.queueUpdate;let s,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=o(e):t.set(e,i=new $(e))),i}const r=p();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,s=e[i];if(s!==t){e[i]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,s,t),n(e).notify(this.name)}}}class l extends C{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return s=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=n(e),r=null===i?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;s=void 0,t=i.propertySource[i.propertyName],s=this,e===t&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:n,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,i=this.isVolatileBinding(e)){return new l(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function k(e,t){w.defineProperty(e,t)}const I=h.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class T{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return I.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){I.set(e)}}w.defineProperty(T.prototype,"index"),w.defineProperty(T.prototype,"length");const O=Object.seal(new T);class S{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function A(e){return e.map((e=>e instanceof S?A(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function R(e){return e.map((e=>e instanceof S?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}S.create=(()=>{if(x.supportsAdoptedStyleSheets){const e=new Map;return t=>new E(t,e)}return e=>new P(e)})();class E extends S{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=R(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=A(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let D=0;class P extends S{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=R(e),this.styleSheets=A(e),this.styleClass="fast-style-class-"+ ++D}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const o=document.createElement("style");o.innerHTML=t[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const B=Object.freeze({locate:p()}),F={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},L={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class H{constructor(e,t,i=t.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===o&&(this.converter=F)}setValue(e,t){const i=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return w.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||x.queueUpdate((()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;x.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":x.setBooleanAttribute(e,this.attribute,s)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(B.locate(e));for(let s=0,o=t.length;s<o;++s){const o=t[s];if(void 0!==o)for(let t=0,s=o.length;t<s;++t){const s=o[t];"string"==typeof s?i.push(new H(e,s)):i.push(new H(e,s.property,s.attribute,s.mode,s.converter))}}return i}}function V(e,t){let i;function s(e,t){arguments.length>1&&(i.property=t),B.locate(e.constructor).push(i)}return arguments.length>1?(i={},void s(e,t)):(i=void 0===e?{}:e,s)}const M={mode:"open"},N={},z=h.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class _{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=H.collect(e,t.attributes),s=new Array(i.length),o={},n={};for(let e=0,t=i.length;e<t;++e){const t=i[e];s[e]=t.attribute,o[t.name]=t,n[t.attribute]=t}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?M:null===t.shadowOptions?void 0:Object.assign(Object.assign({},M),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?N:Object.assign(Object.assign({},N),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?S.create(t.styles):t.styles instanceof S?t.styles:S.create([t.styles])}get isDefined(){return!!z.getByType(this.type)}define(e=customElements){const t=this.type;if(z.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,s=e.length;t<s;++t)w.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function j(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}_.forType=z.getByType;const q=new WeakMap,U={bubbles:!0,composed:!0,cancelable:!0};function W(e){return e.shadowRoot||q.get(e)||null}class K extends ${constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&q.set(e,t)}const s=w.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,o=s.length;i<o;++i){const o=s[i].name,n=e[o];void 0!==n&&(delete e[o],t[o]=n)}}}get isConnected(){return w.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,w.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=W(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=W(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const i=e[o];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),s.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,O)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const s=e.length,o=[];for(let n=0;n<s;++n){const s=e[n];if(i.has(s)){const e=i.get(s)-1;0===e||t?i.delete(s)&&o.push(s):i.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,O);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,O);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},U),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let s=0,o=i.length;s<o;++s){const o=i[s];e[o]=t[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=W(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||x.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=_.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new K(e,i)}}function G(e){return class extends e{constructor(){super(),K.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const Q=Object.assign(G(HTMLElement),{from:e=>G(e),define:(e,t)=>new _(e,t).define().type}),X=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=X.get(i);void 0===s&&X.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=X.get(t);if(void 0!==i)return i.get(e)});class Y{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,$e(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new ce(s,e,t))}}function J(e){const t=e.slice(),i=Object.keys(e),s=i.length;let o;for(let n=0;n<s;++n)o=i[n],Re(o)||(t[o]=e[o]);return t}const Z=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new ce(e,1,e),transient:e=>new ce(e,2,e)}),ee=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Z.singleton})}),te=new Map;function ie(e){return t=>Reflect.getOwnMetadata(e,t)}let se=null;const oe=Object.freeze({createContainer:e=>new xe(null,Object.assign({},ee.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:oe.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ve,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||oe.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new xe(e,Object.assign({},ee.default,t,{parentLocator:oe.findParentContainer})):se||(se=new xe(null,Object.assign({},ee.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ie("design:paramtypes"),getAnnotationParamtypes:ie("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=te.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=oe.getDesignParamtypes(e),s=oe.getAnnotationParamtypes(e);if(void 0===i)if(void 0===s){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?J(oe.getDependencies(i)):[]}else t=J(s);else if(void 0===s)t=J(i);else{t=J(i);let e,o=s.length;for(let i=0;i<o;++i)e=s[i],void 0!==e&&(t[i]=e);const n=Object.keys(s);let r;o=n.length;for(let e=0;e<o;++e)r=n[e],Re(r)||(t[r]=s[r])}}else t=J(i);te.set(e,t)}return t},defineProperty(e,t,i,s=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const n=this instanceof HTMLElement?oe.findResponsibleContainer(this):oe.getOrCreateDOMContainer();if(e=n.get(i),this[o]=e,s&&this instanceof Q){const s=this.$fastController,n=()=>{oe.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=e,s.notify(t))};s.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Te,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);t?oe.defineProperty(e,t,n,o):oe.getOrCreateAnnotationParamTypes(e)[i]=n};return n.$isInterface=!0,n.friendlyName=null==s?"(anonymous)":s,null!=i&&(n.register=function(e,t){return i(new Y(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,s){if("number"==typeof s){const i=oe.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(i[s]=o)}else if(i)oe.defineProperty(t,i,e[0]);else{const i=s?oe.getOrCreateAnnotationParamTypes(s.value):oe.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(i[t]=o)}},transient:e=>(e.register=function(t){return we.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=ae)=>(e.register=function(t){return we.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),ne=oe.createInterface("Container");function re(e){return function(t){const i=function(e,t,s){oe.inject(i)(e,t,s)};return i.$isResolver=!0,i.resolve=function(i,s){return e(t,i,s)},i}}oe.inject;const ae={scoped:!1};function le(e,t,i){oe.inject(le)(e,t,i)}function de(e,t){return t.getFactory(e).construct(t)}re(((e,t,i)=>()=>i.get(e))),re(((e,t,i)=>i.has(e,!0)?i.get(e):void 0)),le.$isResolver=!0,le.resolve=()=>{},re(((e,t,i)=>{const s=de(e,t),o=new ce(e,0,s);return i.registerResolver(e,o),s})),re(((e,t,i)=>de(e,t)));class ce{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==s?s:null;default:return null}}}function he(e){return this.get(e)}function ue(e,t){return t(e)}class pe{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(he,e)):new this.Type(...this.dependencies.map(he,e),...t),null==this.transformers?i:this.transformers.reduce(ue,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const fe={$isResolver:!0,resolve:(e,t)=>t};function be(e){return"function"==typeof e.register}function ge(e){return function(e){return be(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const me=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ve="__DI_LOCATE_PARENT__",ye=new Map;class xe{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ne,fe),e instanceof Node&&e.addEventListener(ve,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,s,o,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Oe(t))if(be(t))t.register(this,r);else if(void 0!==t.prototype)we.singleton(t,t).register(this);else for(i=Object.keys(t),o=0,n=i.length;o<n;++o)s=t[i[o]],Oe(s)&&(be(s)?s.register(this,r):this.register(s));return--this.registerDepth,this}registerResolver(e,t){ke(e);const i=this.resolvers,s=i.get(e);return null==s?i.set(e,t):s instanceof ce&&4===s.strategy?s.state.push(t):i.set(e,new ce(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(ke(e),void 0!==e.resolve)return e;let i,s=this;for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return i;if(null==s.parent){const i=ge(e)?this:s;return t?this.jitRegister(e,i):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(ke(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const s=ge(e)?this:i;return t=this.jitRegister(e,s),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){ke(e);const i=this;let s,o=i;if(t){let t=u;for(;null!=o;)s=o.resolvers.get(e),null!=s&&(t=t.concat(Ie(s,o,i))),o=o.parent;return t}for(;null!=o;){if(s=o.resolvers.get(e),null!=s)return Ie(s,o,i);if(o=o.parent,null==o)return u}return u}getFactory(e){let t=ye.get(e);if(void 0===t){if(Se(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ye.set(e,t=new pe(e,oe.getDependencies(e)))}return t}registerFactory(e,t){ye.set(e,t)}createChild(e){return new xe(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(me.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(be(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const Ce=new WeakMap;function $e(e){return function(t,i,s){if(Ce.has(s))return Ce.get(s);const o=e(t,i,s);return Ce.set(s,o),o}}const we=Object.freeze({instance:(e,t)=>new ce(e,0,t),singleton:(e,t)=>new ce(e,1,t),transient:(e,t)=>new ce(e,2,t),callback:(e,t)=>new ce(e,3,t),cachedCallback:(e,t)=>new ce(e,3,$e(t)),aliasTo:(e,t)=>new ce(t,5,e)});function ke(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ie(e,t,i){if(e instanceof ce&&4===e.strategy){const s=e.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,i);return n}return[e.resolve(t,i)]}const Te="(anonymous)";function Oe(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Se=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(o){return t=e.get(o),void 0===t&&(i=o.toString(),s=i.length,t=s>=29&&s<=100&&125===i.charCodeAt(s-1)&&i.charCodeAt(s-2)<=32&&93===i.charCodeAt(s-3)&&101===i.charCodeAt(s-4)&&100===i.charCodeAt(s-5)&&111===i.charCodeAt(s-6)&&99===i.charCodeAt(s-7)&&32===i.charCodeAt(s-8)&&101===i.charCodeAt(s-9)&&118===i.charCodeAt(s-10)&&105===i.charCodeAt(s-11)&&116===i.charCodeAt(s-12)&&97===i.charCodeAt(s-13)&&110===i.charCodeAt(s-14)&&88===i.charCodeAt(s-15),e.set(o,t)),t}}(),Ae={};function Re(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ae[e];if(void 0!==t)return t;const i=e.length;if(0===i)return Ae[e]=!1;let s=0;for(let t=0;t<i;++t)if(s=e.charCodeAt(t),0===t&&48===s&&i>1||s<48||s>57)return Ae[e]=!1;return Ae[e]=!0}default:return!1}}function Ee(e){return`${e.toLowerCase()}:presentation`}const De=new Map,Pe=Object.freeze({define(e,t,i){const s=Ee(e);void 0===De.get(s)?De.set(s,t):De.set(s,!1),i.register(we.instance(s,t))},forTag(e,t){const i=Ee(e),s=De.get(i);return!1===s?oe.findResponsibleContainer(t).get(i):s||null}});class Be{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?S.create(t):t instanceof S?t:S.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Fe extends Q{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Pe.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new He(this===Fe?class extends Fe{}:this,e,t)}}function Le(e,t,i){return"function"==typeof e?e(t,i):e}j([k],Fe.prototype,"template",void 0),j([k],Fe.prototype,"styles",void 0);class He{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Be(Le(i.template,e,i),Le(i.styles,e,i));e.definePresentation(t);let o=Le(i.shadowOptions,e,i);e.shadowRootMode&&(o?s.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Le(i.elementOptions,e,i),shadowOptions:o,attributes:Le(i.attributes,e,i)})}})}}class Ve{createCSS(){return""}createBehavior(){}}function Me(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Ne=document.createElement("div");class ze{setProperty(e,t){x.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){x.queueUpdate((()=>this.target.removeProperty(e)))}}class _e extends ze{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class je extends ze{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class qe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),w.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),x.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),x.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}j([k],qe.prototype,"target",void 0);class Ue{constructor(e){this.target=e.style}setProperty(e,t){x.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){x.queueUpdate((()=>this.target.removeProperty(e)))}}class We{setProperty(e,t){We.properties[e]=t;for(const i of We.roots.values())Qe.getOrCreate(We.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete We.properties[e];for(const t of We.roots.values())Qe.getOrCreate(We.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=We;if(!t.has(e)){t.add(e);const i=Qe.getOrCreate(this.normalizeRoot(e));for(const e in We.properties)i.setProperty(e,We.properties[e])}}static unregisterRoot(e){const{roots:t}=We;if(t.has(e)){t.delete(e);const i=Qe.getOrCreate(We.normalizeRoot(e));for(const e in We.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===Ne?document:e}}We.roots=new Set,We.properties={};const Ke=new WeakMap,Ge=x.supportsAdoptedStyleSheets?class extends ze{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(S.create([t]))}}:qe,Qe=Object.freeze({getOrCreate(e){if(Ke.has(e))return Ke.get(e);let t;return t=e===Ne?new We:e instanceof Document?x.supportsAdoptedStyleSheets?new _e:new je:e instanceof Q?new Ge(e):new Ue(e),Ke.set(e,t),t}});class Xe extends Ve{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Xe.uniqueId(),Xe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Xe({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return Xe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=tt.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Xe&&(t=this.alias(t)),tt.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),tt.existsFor(e)&&tt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ne,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!tt.existsFor(t)&&tt.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}Xe.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),Xe.tokensById=new Map;class Ye{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=w.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,O))}}class Je{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),w.getNotifier(this).notify(e.id))}get(e){return w.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Ze=new WeakMap,et=new WeakMap;class tt{constructor(e){this.target=e,this.store=new Je,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=Xe.getTokenById(t);if(i&&(i.notify(this.target),Xe.isCSSDesignToken(i))){const t=this.parent,s=this.isReflecting(i);if(t){const o=t.get(i),n=e.get(i);o===n||s?o===n&&s&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else s||this.reflectToCSS(i)}}},Ze.set(e,this),w.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Q?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ze.get(e)||new tt(e)}static existsFor(e){return Ze.has(e)}static findParent(e){if(Ne!==e.target){let t=Me(e.target);for(;null!==t;){if(Ze.has(t))return Ze.get(t);t=Me(t)}return tt.getOrCreate(Ne)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Ne?tt.getOrCreate(Ne):null}while(null!==i);return null}get parent(){return et.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=tt.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){Xe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Xe.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=tt.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&et.get(this).removeChild(this)}appendChild(e){e.parent&&et.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));et.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),w.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),w.getNotifier(this.store).unsubscribe(e),e.parent===this&&et.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=Me(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),tt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),tt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=Xe.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);Xe.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new Ye(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}tt.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){Qe.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(tt.getOrCreate(t).get(e)))}remove(e,t){Qe.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},j([k],tt.prototype,"children",void 0);const it=Object.freeze({create:function(e){return Xe.from(e)},notifyConnection:e=>!(!e.isConnected||!tt.existsFor(e)||(tt.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!tt.existsFor(e)||(tt.getOrCreate(e).unbind(),0)),registerRoot(e=Ne){We.registerRoot(e)},unregisterRoot(e=Ne){We.unregisterRoot(e)}}),st=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ot=new Map,nt=new Map;let rt=null;const at=oe.createInterface((e=>e.cachedCallback((e=>(null===rt&&(rt=new dt(null,e)),rt))))),lt=Object.freeze({tagFor:e=>nt.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||oe.findResponsibleContainer(e).get(at)},getOrCreate(e){if(!e)return null===rt&&(rt=oe.getOrCreateDOMContainer().get(at)),rt;const t=e.$$designSystem$$;if(t)return t;const i=oe.getOrCreateDOMContainer(e);if(i.has(at,!1))return i.get(at);{const t=new dt(e,i);return i.register(we.instance(at,t)),t}}});class dt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>st.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,r){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,n,r),{name:l,callback:d,baseClass:c}=a;let{type:h}=a,u=l,p=ot.get(u),f=!0;for(;p;){const e=s(u,h,p);switch(e){case st.ignoreDuplicate:return;case st.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=ot.get(u)}}f&&((nt.has(h)||h===Fe)&&(h=class extends h{}),ot.set(u,h),nt.set(h,u),c&&nt.set(c,u)),i.push(new ct(t,u,h,o,d,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&it.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ct{constructor(e,t,i,s,o,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=n,this.definition=null}definePresentation(e){Pe.define(this.name,e,this.container)}defineElement(e){this.definition=new _(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return lt.tagFor(e)}}class ht extends Fe{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}j([V({attribute:"fill"})],ht.prototype,"fill",void 0),j([V({attribute:"color"})],ht.prototype,"color",void 0),j([V({mode:"boolean"})],ht.prototype,"circular",void 0);class ut{constructor(){this.targetIndex=0}}class pt extends ut{constructor(){super(...arguments),this.createPlaceholder=x.createInterpolationPlaceholder}}class ft extends ut{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return x.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function bt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=w.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function gt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function mt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function vt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function yt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function xt(e){x.setAttribute(this.target,this.targetName,e)}function Ct(e){x.setBooleanAttribute(this.target,this.targetName,e)}function $t(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function wt(e){this.target[this.targetName]=e}function kt(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,n=o.length;e<n;++e){const n=o[e];""!==n&&(t[n]=s,i.classList.add(n))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&i.classList.remove(e)}}class It extends pt{constructor(e){super(),this.binding=e,this.bind=bt,this.unbind=mt,this.updateTarget=xt,this.isBindingVolatile=w.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=wt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>x.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Ct;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=gt,this.unbind=yt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=kt)}}targetAtContent(){this.updateTarget=$t,this.unbind=vt}createBehavior(e){return new Tt(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Tt{constructor(e,t,i,s,o,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){T.setEvent(e);const t=this.binding(this.source,this.context);T.setEvent(null),!0!==t&&e.preventDefault()}}let Ot=null;class St{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ot=this}static borrow(e){const t=Ot||new St;return t.directives=e,t.reset(),Ot=null,t}}function At(e){if(1===e.length)return e[0];let t;const i=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new It(((e,t)=>{let o="";for(let n=0;n<i;++n)o+=s[n](e,t);return o}));return o.targetName=t,o}const Rt=y.length;function Et(e,t){const i=t.split(v);if(1===i.length)return null;const s=[];for(let t=0,o=i.length;t<o;++t){const o=i[t],n=o.indexOf(y);let r;if(-1===n)r=o;else{const t=parseInt(o.substring(0,n));s.push(e.directives[t]),r=o.substring(n+Rt)}""!==r&&s.push(r)}return s}function Dt(e,t,i=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Et(e,a);let d=null;null===l?i&&(d=new It((()=>a)),d.targetName=r.name):d=At(l),null!==d&&(t.removeAttributeNode(r),o--,n--,e.addFactory(d))}}function Pt(e,t,i){const s=Et(e,t.textContent);if(null!==s){let o=t;for(let n=0,r=s.length;n<r;++n){const r=s[n],a=0===n?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),o=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const Bt=document.createRange();class Ft{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s,o=this.firstChild;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.appendChild(s),s=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.removeChild(s),s=i;e.removeChild(t);const o=this.behaviors,n=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let o=0,n=i.length;o<n;++o){const n=i[o];n.unbind(s),n.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Bt.setStartBefore(e[0].firstChild),Bt.setEndAfter(e[e.length-1].lastChild),Bt.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],s=i.behaviors,o=i.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(o)}}}}class Lt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=x.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=St.borrow(t);Dt(s,e,!0);const o=s.behaviorFactories;s.reset();const n=x.createTemplateWalker(i);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Dt(s,r);break;case 3:Pt(s,r,n);break;case 8:x.isMarker(r)&&s.addFactory(t[x.extractDirectiveIndexFromMarker(r)])}let a=0;(x.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=x.createTemplateWalker(t);let n=0,r=this.targetOffset,a=o.nextNode();for(let e=i.length;n<e;++n){const e=i[n],t=e.targetIndex;for(;null!==a;){if(r===t){s[n]=e.createBehavior(a);break}a=o.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++n)s[n]=t[i].createBehavior(e)}return new Ft(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const s=this.create(i);return s.bind(e,O),s.appendTo(t),s}}const Ht=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Vt(e,...t){const i=[];let s="";for(let o=0,n=e.length-1;o<n;++o){const n=e[o];let r=t[o];if(s+=n,r instanceof Lt){const e=r;r=()=>e}if("function"==typeof r&&(r=new It(r)),r instanceof pt){const e=Ht.exec(n);null!==e&&(r.targetName=e[2])}r instanceof ut?(s+=r.createPlaceholder(i.length),i.push(r)):s+=r}return s+=e[e.length-1],new Lt(s,i)}const Mt=(e,t)=>Vt`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;function Nt(e,...t){const{styles:i,behaviors:s}=function(e,t){const i=[];let s="";const o=[];for(let n=0,r=e.length-1;n<r;++n){s+=e[n];let r=t[n];if(r instanceof Ve){const e=r.createBehavior();r=r.createCSS(),e&&o.push(e)}r instanceof S||r instanceof CSSStyleSheet?(""!==s.trim()&&(i.push(s),s=""),i.push(r)):s+=r}return s+=e[e.length-1],""!==s.trim()&&i.push(s),{styles:i,behaviors:o}}(e,t),o=S.create(i);return s.length&&o.withBehaviors(...s),o}function zt(e){return`:host([hidden]){display:none}:host{display:${e}}`}function _t(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[o,n]of e){let e=t.getPropertyValue(o).toString();if("vscode-high-contrast"===s)0===e.length&&n.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===n.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===n.name&&(e="transparent");n.setValueFor(i,e)}}}const jt=new Map;let qt=!1;function Ut(e,t){const i=it.create(e);return t&&(t.includes("--fake-vscode-token")&&(t=`${t}-${"id"+Math.random().toString(16).slice(2)}`),jt.set(t,i)),qt||(function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{_t(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),_t(e)}))}(jt),qt=!0),i}const Wt=Ut("background","--vscode-editor-background").withDefault("#1e1e1e"),Kt=Ut("border-width").withDefault(1),Gt=Ut("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Qt=(Ut("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Ut("corner-radius").withDefault(0)),Xt=Ut("design-unit").withDefault(4),Yt=Ut("disabled-opacity").withDefault(.4),Jt=Ut("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Zt=Ut("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),ei=(Ut("font-weight","--vscode-font-weight").withDefault("400"),Ut("foreground","--vscode-foreground").withDefault("#cccccc")),ti=Ut("input-height").withDefault("26"),ii=Ut("input-min-width").withDefault("100px"),si=Ut("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),oi=Ut("type-ramp-base-line-height").withDefault("normal"),ni=Ut("type-ramp-minus1-font-size").withDefault("11px"),ri=Ut("type-ramp-minus1-line-height").withDefault("16px"),ai=(Ut("type-ramp-minus2-font-size").withDefault("9px"),Ut("type-ramp-minus2-line-height").withDefault("16px"),Ut("type-ramp-plus1-font-size").withDefault("16px"),Ut("type-ramp-plus1-line-height").withDefault("24px"),Ut("scrollbarWidth").withDefault("10px")),li=Ut("scrollbarHeight").withDefault("10px"),di=Ut("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),ci=Ut("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),hi=Ut("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),ui=Ut("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),pi=Ut("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),fi=Ut("button-border","--vscode-button-border").withDefault("transparent"),bi=Ut("button-icon-background").withDefault("transparent"),gi=Ut("button-icon-corner-radius").withDefault("5px"),mi=Ut("button-icon-outline-offset").withDefault(0),vi=Ut("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),yi=Ut("button-icon-padding").withDefault("3px"),xi=Ut("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Ci=Ut("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),$i=Ut("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),wi=Ut("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),ki=Ut("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Ii=Ut("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Ti=Ut("button-padding-horizontal").withDefault("11px"),Oi=Ut("button-padding-vertical").withDefault("4px"),Si=Ut("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Ai=Ut("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Ri=Ut("checkbox-corner-radius").withDefault(3),Ei=(Ut("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Ut("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Di=Ut("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Pi=Ut("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Bi=Ut("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Fi=Ut("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Li=Ut("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Hi=(Ut("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Ut("dropdown-list-max-height").withDefault("200px")),Vi=Ut("input-background","--vscode-input-background").withDefault("#3c3c3c"),Mi=Ut("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Ni=(Ut("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Ut("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),zi=Ut("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),_i=Ut("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),ji=Ut("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),qi=Ut("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Ui=Ut("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Wi=(Ut("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Ut("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Ut("tag-corner-radius").withDefault("2px")),Ki=class extends ht{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:Mt,styles:(e,t)=>Nt`
	${zt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${ni};
		line-height: ${ri};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${ui};
		border: calc(${Kt} * 1px) solid ${fi};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${pi};
		display: flex;
		height: calc(${Xt} * 4px);
		justify-content: center;
		min-width: calc(${Xt} * 4px + 2px);
		min-height: calc(${Xt} * 4px + 2px);
		padding: 3px 6px;
	}
`});Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;class Gi{}j([V({attribute:"aria-atomic"})],Gi.prototype,"ariaAtomic",void 0),j([V({attribute:"aria-busy"})],Gi.prototype,"ariaBusy",void 0),j([V({attribute:"aria-controls"})],Gi.prototype,"ariaControls",void 0),j([V({attribute:"aria-current"})],Gi.prototype,"ariaCurrent",void 0),j([V({attribute:"aria-describedby"})],Gi.prototype,"ariaDescribedby",void 0),j([V({attribute:"aria-details"})],Gi.prototype,"ariaDetails",void 0),j([V({attribute:"aria-disabled"})],Gi.prototype,"ariaDisabled",void 0),j([V({attribute:"aria-errormessage"})],Gi.prototype,"ariaErrormessage",void 0),j([V({attribute:"aria-flowto"})],Gi.prototype,"ariaFlowto",void 0),j([V({attribute:"aria-haspopup"})],Gi.prototype,"ariaHaspopup",void 0),j([V({attribute:"aria-hidden"})],Gi.prototype,"ariaHidden",void 0),j([V({attribute:"aria-invalid"})],Gi.prototype,"ariaInvalid",void 0),j([V({attribute:"aria-keyshortcuts"})],Gi.prototype,"ariaKeyshortcuts",void 0),j([V({attribute:"aria-label"})],Gi.prototype,"ariaLabel",void 0),j([V({attribute:"aria-labelledby"})],Gi.prototype,"ariaLabelledby",void 0),j([V({attribute:"aria-live"})],Gi.prototype,"ariaLive",void 0),j([V({attribute:"aria-owns"})],Gi.prototype,"ariaOwns",void 0),j([V({attribute:"aria-relevant"})],Gi.prototype,"ariaRelevant",void 0),j([V({attribute:"aria-roledescription"})],Gi.prototype,"ariaRoledescription",void 0);class Qi{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Xi(e){return new ft("fast-ref",Qi,e)}class Yi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ji=(e,t)=>Vt`
    <span
        part="end"
        ${Xi("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Xi("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Zi=(e,t)=>Vt`
    <span
        part="start"
        ${Xi("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Xi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function es(e,...t){const i=B.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})),B.locate(t).forEach((e=>i.push(e)))}))}var ts;Vt`
    <span part="end" ${Xi("endContainer")}>
        <slot
            name="end"
            ${Xi("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Vt`
    <span part="start" ${Xi("startContainer")}>
        <slot
            name="start"
            ${Xi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(ts||(ts={}));const is="ArrowDown",ss="ArrowLeft",os="ArrowRight",ns="ArrowUp",rs="Enter",as="Escape",ls="Home",ds="End",cs=" ",hs="Tab",us={ArrowDown:is,ArrowLeft:ss,ArrowRight:os,ArrowUp:ns},ps="form-associated-proxy",fs="ElementInternals",bs=fs in window&&"setFormValue"in window[fs].prototype,gs=new WeakMap;function ms(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return bs}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return u}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),x.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),x.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!bs)return null;let e=gs.get(this);return e||(e=this.attachInternals(),gs.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ps),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ps)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===rs&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return V({mode:"boolean"})(t.prototype,"disabled"),V({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),V({attribute:"current-value"})(t.prototype,"currentValue"),V(t.prototype,"name"),V({mode:"boolean"})(t.prototype,"required"),k(t.prototype,"value"),t}function vs(e){class t extends(ms(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return V({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),V({attribute:"current-checked",converter:F})(i.prototype,"currentChecked"),k(i.prototype,"defaultChecked"),k(i.prototype,"checked"),i}class ys extends Fe{}class xs extends(ms(ys)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Cs extends xs{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}j([V({mode:"boolean"})],Cs.prototype,"autofocus",void 0),j([V({attribute:"form"})],Cs.prototype,"formId",void 0),j([V],Cs.prototype,"formaction",void 0),j([V],Cs.prototype,"formenctype",void 0),j([V],Cs.prototype,"formmethod",void 0),j([V({mode:"boolean"})],Cs.prototype,"formnovalidate",void 0),j([V],Cs.prototype,"formtarget",void 0),j([V],Cs.prototype,"type",void 0),j([k],Cs.prototype,"defaultSlottedContent",void 0);class $s{}function ws(e){return e?function(t,i,s){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}j([V({attribute:"aria-expanded"})],$s.prototype,"ariaExpanded",void 0),j([V({attribute:"aria-pressed"})],$s.prototype,"ariaPressed",void 0),es($s,Gi),es(Cs,Yi,$s);class ks{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=w.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(u),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Is extends ks{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ts(e){return"string"==typeof e&&(e={property:e}),new ft("fast-slotted",Is,e)}let Os;const Ss=function(){if("boolean"==typeof Os)return Os;if("undefined"==typeof window||!window.document||!window.document.createElement)return Os=!1,Os;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Os=!0}catch(e){Os=!1}finally{document.head.removeChild(e)}return Os}()?"focus-visible":"focus",As="not-allowed",Rs=Nt`
	${zt("inline-flex")} :host {
		outline: none;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		color: ${Ci};
		background: ${xi};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Oi} ${Ti};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Kt} * 1px) solid ${fi};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${$i};
	}
	:host(:active) {
		background: ${xi};
	}
	.control:${Ss} {
		outline: calc(${Kt} * 1px) solid ${Jt};
		outline-offset: calc(${Kt} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Yt};
		background: ${xi};
		cursor: ${As};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Xt} * 4px);
		height: calc(${Xt} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Es=Nt`
	:host([appearance='primary']) {
		background: ${xi};
		color: ${Ci};
	}
	:host([appearance='primary']:hover) {
		background: ${$i};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${xi};
	}
	:host([appearance='primary']) .control:${Ss} {
		outline: calc(${Kt} * 1px) solid ${Jt};
		outline-offset: calc(${Kt} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${xi};
	}
`,Ds=Nt`
	:host([appearance='secondary']) {
		background: ${wi};
		color: ${ki};
	}
	:host([appearance='secondary']:hover) {
		background: ${Ii};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${wi};
	}
	:host([appearance='secondary']) .control:${Ss} {
		outline: calc(${Kt} * 1px) solid ${Jt};
		outline-offset: calc(${Kt} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${wi};
	}
`,Ps=Nt`
	:host([appearance='icon']) {
		background: ${bi};
		border-radius: ${gi};
		color: ${ei};
	}
	:host([appearance='icon']:hover) {
		background: ${vi};
		outline: 1px dotted ${Gt};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${yi};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${vi};
	}
	:host([appearance='icon']) .control:${Ss} {
		outline: calc(${Kt} * 1px) solid ${Jt};
		outline-offset: ${mi};
	}
	:host([appearance='icon'][disabled]) {
		background: ${bi};
	}
`;class Bs extends Cs{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){"appearance"===e&&"icon"===i&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),"aria-label"===e&&(this.ariaLabel=i),"disabled"===e&&(this.disabled=null!==i)}}!function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([V],Bs.prototype,"appearance",void 0);const Fs=Bs.compose({baseName:"button",template:(e,t)=>Vt`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Xi("control")}
    >
        ${Zi(0,t)}
        <span class="content" part="content">
            <slot ${Ts("defaultSlottedContent")}></slot>
        </span>
        ${Ji(0,t)}
    </button>
`,styles:(e,t)=>Nt`
	${Rs}
	${Es}
	${Ds}
	${Ps}
`,shadowOptions:{delegatesFocus:!0}});class Ls extends Fe{}class Hs extends(vs(Ls)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Vs extends Hs{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key!==cs||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}j([V({attribute:"readonly",mode:"boolean"})],Vs.prototype,"readOnly",void 0),j([k],Vs.prototype,"defaultSlottedNodes",void 0),j([k],Vs.prototype,"indeterminate",void 0);const Ms=class extends Vs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}.compose({baseName:"checkbox",template:(e,t)=>Vt`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ts("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Xt} * 1px) 0;
		user-select: none;
		font-size: ${si};
		line-height: ${oi};
	}
	.control {
		position: relative;
		width: calc(${Xt} * 4px + 2px);
		height: calc(${Xt} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Ri} * 1px);
		border: calc(${Kt} * 1px) solid ${Ai};
		background: ${Si};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Zt};
		color: ${ei};
		padding-inline-start: calc(${Xt} * 2px + 2px);
		margin-inline-end: calc(${Xt} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${ei};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${ei};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Si};
		border-color: ${Ai};
	}
	:host(:enabled) .control:active {
		background: ${Si};
		border-color: ${Jt};
	}
	:host(:${Ss}) .control {
		border: calc(${Kt} * 1px) solid ${Jt};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${As};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Yt};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function Ns(e,t,i){return{index:e,removed:t,addedCount:i}}function zs(e,t,i,s,o,n){let r=0,a=0;const l=Math.min(i-t,n-o);if(0===t&&0===o&&(r=function(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}(e,s,l)),i===e.length&&n===s.length&&(a=function(e,t,i){let s=e.length,o=t.length,n=0;for(;n<i&&e[--s]===t[--o];)n++;return n}(e,s,l-r)),o+=r,n-=a,(i-=a)-(t+=r)==0&&n-o==0)return u;if(t===i){const e=Ns(t,[],0);for(;o<n;)e.removed.push(s[o++]);return[e]}if(o===n)return[Ns(t,[],i-t)];const d=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const o=[];for(;t>0||i>0;){if(0===t){o.push(2),i--;continue}if(0===i){o.push(3),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===s?o.push(0):(o.push(1),s=n),t--,i--):l===r?(o.push(3),t--,s=r):(o.push(2),i--,s=a)}return o.reverse(),o}(function(e,t,i,s,o,n){const r=n-o+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===s[o+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,s,o,n)),c=[];let h,p=t,f=o;for(let e=0;e<d.length;++e)switch(d[e]){case 0:void 0!==h&&(c.push(h),h=void 0),p++,f++;break;case 1:void 0===h&&(h=Ns(p,[],0)),h.addedCount++,p++,h.removed.push(s[f]),f++;break;case 2:void 0===h&&(h=Ns(p,[],0)),h.addedCount++,p++;break;case 3:void 0===h&&(h=Ns(p,[],0)),h.removed.push(s[f]),f++}return void 0!==h&&c.push(h),c}const _s=Array.prototype.push;function js(e,t,i,s){const o=Ns(t,i,s);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const s=(a=o.index,l=o.index+o.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(s>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-s;const a=o.removed.length+i.removed.length-s;if(o.addedCount||a){let e=i.removed;if(o.index<i.index){const t=o.removed.slice(0,i.index-o.index);_s.apply(t,e),e=t}if(o.index+o.removed.length>i.index+i.addedCount){const t=o.removed.slice(i.index+i.addedCount-o.index);_s.apply(e,t)}o.removed=e,i.index<o.index&&(o.index=i.index)}else n=!0}else if(o.index<i.index){n=!0,e.splice(t,0,o),t++;const s=o.addedCount-o.removed.length;i.index+=s,r+=s}}var a,l,d,c;n||e.push(o)}let qs=!1;function Us(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Ws extends C{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,x.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,x.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?function(e,t){let i=[];const s=function(e){const t=[];for(let i=0,s=e.length;i<s;i++){const s=e[i];js(t,s.index,s.removed,s.addedCount)}return t}(t);for(let t=0,o=s.length;t<o;++t){const o=s[t];1!==o.addedCount||1!==o.removed.length?i=i.concat(zs(e,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==e[o.index]&&i.push(o)}return i}(this.source,e):zs(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}function Ks(e,t,i,s){e.bind(t[i],s)}function Gs(e,t,i,s){const o=Object.create(s);o.index=i,o.length=t.length,e.bind(t[i],o)}Object.freeze({positioning:!1,recycle:!0});class Qs{constructor(e,t,i,s,o,n){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ks,this.itemsBindingObserver=w.binding(t,this,i),this.templateBindingObserver=w.binding(s,this,o),n.positioning&&(this.bindView=Gs)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=u);const t=this.itemsObserver,i=this.itemsObserver=w.getNotifier(this.items),s=t!==i;s&&null!==t&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,o=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,f=h.index;const b=f+h.addedCount,g=i.splice(h.index,u.length),m=d=a.length+g.length;for(;f<b;++f){const e=i[f],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=m&&g.length>0?(h=g[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(f,0,h),s(h,o,f,t),h.insertBefore(c)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const s=i[e].context;s.length=t,s.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,o=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(Ft.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,i),a[e]=r,r.insertBefore(o)}}else{let e=0;for(;e<r;++e)if(e<l)n(a[e],t,e,i);else{const r=s.create();n(r,t,e,i),a.push(r),r.insertBefore(o)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class Xs extends ut{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=x.createBlockPlaceholder,function(){if(qs)return;qs=!0,w.setArrayObserverFactory((e=>new Ws(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,o=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),s=this.$fastController;return void 0!==s&&e&&s.addSplice(Ns(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Us(Ns(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=s.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(Ns(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Us(Ns(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Us(Ns(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=w.isVolatileBinding(e),this.isTemplateBindingVolatile=w.isVolatileBinding(t)}createBehavior(e){return new Qs(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Ys="focus",Js="focusin",Zs="focusout",eo="keydown",to="sticky",io="default",so="columnheader",oo="default";class no extends Fe{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=o[Math.max(0,Math.min(o.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,x.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=no.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=no.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Xs((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Ys,this.handleFocus),this.addEventListener(eo,this.handleKeydown),this.addEventListener(Zs,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),x.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Ys,this.handleFocus),this.removeEventListener(eo,this.handleKeydown),this.removeEventListener(Zs,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case ns:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case is:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>s){let t=0;this.generateHeader===to&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case ls:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ds:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,x.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===to?"sticky-header":"header",void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}no.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),j([V({attribute:"no-tabbing",mode:"boolean"})],no.prototype,"noTabbing",void 0),j([V({attribute:"generate-header"})],no.prototype,"generateHeader",void 0),j([V({attribute:"grid-template-columns"})],no.prototype,"gridTemplateColumns",void 0),j([k],no.prototype,"rowsData",void 0),j([k],no.prototype,"columnDefinitions",void 0),j([k],no.prototype,"rowItemTemplate",void 0),j([k],no.prototype,"cellItemTemplate",void 0),j([k],no.prototype,"headerCellItemTemplate",void 0),j([k],no.prototype,"focusRowIndex",void 0),j([k],no.prototype,"focusColumnIndex",void 0),j([k],no.prototype,"defaultRowItemTemplate",void 0),j([k],no.prototype,"rowElementTag",void 0),j([k],no.prototype,"rowElements",void 0);class ro extends ks{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function ao(e){return"string"==typeof e&&(e={property:e}),new ft("fast-children",ro,e)}class lo extends Fe{constructor(){super(...arguments),this.rowType=oo,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Xs((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Zs,this.handleFocusout),this.addEventListener(eo,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Zs,this.handleFocusout),this.removeEventListener(eo,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case ss:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case os:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case ls:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ds:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===oo&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===oo&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}j([V({attribute:"grid-template-columns"})],lo.prototype,"gridTemplateColumns",void 0),j([V({attribute:"row-type"})],lo.prototype,"rowType",void 0),j([k],lo.prototype,"rowData",void 0),j([k],lo.prototype,"columnDefinitions",void 0),j([k],lo.prototype,"cellItemTemplate",void 0),j([k],lo.prototype,"headerCellItemTemplate",void 0),j([k],lo.prototype,"rowIndex",void 0),j([k],lo.prototype,"isActiveRow",void 0),j([k],lo.prototype,"activeCellItemTemplate",void 0),j([k],lo.prototype,"defaultCellItemTemplate",void 0),j([k],lo.prototype,"defaultHeaderCellItemTemplate",void 0),j([k],lo.prototype,"cellElements",void 0);const co=Vt`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,ho=Vt`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class uo extends Fe{constructor(){super(...arguments),this.cellType=io,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Js,this.handleFocusin),this.addEventListener(Zs,this.handleFocusout),this.addEventListener(eo,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Js,this.handleFocusin),this.removeEventListener(Zs,this.handleFocusout),this.removeEventListener(eo,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===so){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===io&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===so&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case rs:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===so){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case as:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case so:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=ho.render(this,this);break;case void 0:case"rowheader":case io:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=co.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}j([V({attribute:"cell-type"})],uo.prototype,"cellType",void 0),j([V({attribute:"grid-column"})],uo.prototype,"gridColumn",void 0),j([k],uo.prototype,"rowData",void 0),j([k],uo.prototype,"columnDefinition",void 0);const po=class extends no{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:no,template:(e,t)=>{const i=function(e){const t=e.tagFor(lo);return Vt`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),s=e.tagFor(lo);return Vt`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${ao({property:"rowElements",filter:ws("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>Nt`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`}),fo=class extends lo{}.compose({baseName:"data-grid-row",baseClass:lo,template:(e,t)=>{const i=function(e){const t=e.tagFor(uo);return Vt`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),s=function(e){const t=e.tagFor(uo);return Vt`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Vt`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${ao({property:"cellElements",filter:ws('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ts("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>Nt`
	:host {
		display: grid;
		padding: calc((${Xt} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Wt};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Pi};
		outline: 1px dotted ${Gt};
		outline-offset: -1px;
	}
`}),bo=class extends uo{}.compose({baseName:"data-grid-cell",baseClass:uo,template:(e,t)=>Vt`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>Nt`
	:host {
		padding: calc(${Xt} * 1px) calc(${Xt} * 3px);
		color: ${ei};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		font-weight: 400;
		border: solid calc(${Kt} * 1px) transparent;
		border-radius: calc(${Qt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Ss}),
	:host(:focus),
	:host(:active) {
		background: ${Ei};
		border: solid calc(${Kt} * 1px) ${Jt};
		color: ${Di};
		outline: none;
	}
	:host(:${Ss}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Di} !important;
	}
`}),go="horizontal";class mo extends Fe{constructor(){super(...arguments),this.role="separator",this.orientation=go}}j([V],mo.prototype,"role",void 0),j([V],mo.prototype,"orientation",void 0);const vo=class extends mo{}.compose({baseName:"divider",template:(e,t)=>Vt`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Nt`
	${zt("block")} :host {
		border: none;
		border-top: calc(${Kt} * 1px) solid ${Bi};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Xt} * 1px) 0;
		width: 100%;
	}
`});let yo=0;function xo(e=""){return`${e}${yo++}`}function Co(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class $o extends Fe{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),w.notify(this,"value")}get value(){var e;return w.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}j([k],$o.prototype,"checked",void 0),j([k],$o.prototype,"content",void 0),j([k],$o.prototype,"defaultSelected",void 0),j([V({mode:"boolean"})],$o.prototype,"disabled",void 0),j([V({attribute:"selected",mode:"boolean"})],$o.prototype,"selectedAttribute",void 0),j([k],$o.prototype,"selected",void 0),j([V({attribute:"value",mode:"fromView"})],$o.prototype,"initialValue",void 0);class wo{}j([k],wo.prototype,"ariaChecked",void 0),j([k],wo.prototype,"ariaPosInSet",void 0),j([k],wo.prototype,"ariaSelected",void 0),j([k],wo.prototype,"ariaSetSize",void 0),es(wo,Gi),es($o,Yi,wo);class ko extends Fe{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return w.track(this,"options"),this._options}set options(e){this._options=e,w.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<s?t:e),o);break;case 1:o=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>s?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){"selected"===t&&(ko.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),ko.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case ls:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case is:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ns:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case ds:e.preventDefault(),this.selectLastOption();break;case hs:return this.focusAndScrollOptionIntoView(),!0;case rs:case as:return!0;case cs:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),s=i>-1?i:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const s=t.filter(ko.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=w.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(!e[i].disabled)return i;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Co(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=xo("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}ko.slottedOptionFilter=e=>Co(e)&&!e.hidden,ko.TYPE_AHEAD_TIMEOUT_MS=1e3,j([V({mode:"boolean"})],ko.prototype,"disabled",void 0),j([k],ko.prototype,"selectedIndex",void 0),j([k],ko.prototype,"selectedOptions",void 0),j([k],ko.prototype,"slottedOptions",void 0),j([k],ko.prototype,"typeaheadBuffer",void 0);class Io{}function To(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}j([k],Io.prototype,"ariaActiveDescendant",void 0),j([k],Io.prototype,"ariaDisabled",void 0),j([k],Io.prototype,"ariaExpanded",void 0),j([k],Io.prototype,"ariaMultiSelectable",void 0),es(Io,Gi),es(ko,Io);class Oo extends ko{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=null!==(s=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=To(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=To(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=To(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=To(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case ls:return void this.checkFirstOption(i);case is:return void this.checkNextOption(i);case ns:return void this.checkPreviousOption(i);case ds:return void this.checkLastOption(i);case hs:return this.focusAndScrollOptionIntoView(),!0;case as:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case cs:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const s=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));s!==t&&x.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}j([k],Oo.prototype,"activeIndex",void 0),j([V({mode:"boolean"})],Oo.prototype,"multiple",void 0),j([V({converter:L})],Oo.prototype,"size",void 0);class So extends Oo{}class Ao extends(ms(So)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Ro="above";class Eo extends Ao{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=xo("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void x.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return w.track(this,"value"),this._value}set value(e){var t,i,s,o,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(s=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==s?s:null,d=null!==(n=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),w.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Ro:"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ro?~~e.top:~~t}get displayValue(){var e,t;return w.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{w.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{w.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const s=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(ko.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case cs:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case ls:case ds:e.preventDefault();break;case rs:e.preventDefault(),this.open=!this.open;break;case as:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case hs:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===is||t===ns)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&w.notify(this,"displayValue")}}j([V({attribute:"open",mode:"boolean"})],Eo.prototype,"open",void 0),j([function(e,t,i){return Object.assign({},i,{get:function(){return w.trackVolatile(),i.get.apply(this)}})}],Eo.prototype,"collapsible",null),j([k],Eo.prototype,"control",void 0),j([V({attribute:"position"})],Eo.prototype,"positionAttribute",void 0),j([k],Eo.prototype,"position",void 0),j([k],Eo.prototype,"maxHeight",void 0);class Do{}function Po(e,t){const i="function"==typeof t?t:()=>t;return(t,s)=>e(t,s)?i(t,s):null}j([k],Do.prototype,"ariaControls",void 0),es(Do,Io),es(Eo,Yi,Do);const Bo=class extends Eo{}.compose({baseName:"dropdown",template:(e,t)=>Vt`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${Po((e=>e.collapsible),Vt`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Xi("control")}
                >
                    ${Zi(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Ji(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Xi("listbox")}
        >
            <slot
                ${Ts({filter:ko.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-flex")} :host {
		background: ${Fi};
		box-sizing: border-box;
		color: ${ei};
		contain: contents;
		font-family: ${Zt};
		height: calc(${ti} * 1px);
		position: relative;
		user-select: none;
		min-width: ${ii};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Kt} * 1px) solid ${Li};
		border-radius: calc(${Qt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${si};
		line-height: ${oi};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Fi};
		border: calc(${Kt} * 1px) solid ${Jt};
		border-radius: calc(${Qt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Hi};
		padding: 0 0 calc(${Xt} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Ss}) .control {
		border-color: ${Jt};
	}
	:host(:not([disabled]):hover) {
		background: ${Fi};
		border-color: ${Li};
	}
	:host(:${Ss}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Ei};
		border: calc(${Kt} * 1px) solid ${Jt};
		color: ${Di};
	}
	:host([disabled]) {
		cursor: ${As};
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		cursor: ${As};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Fi};
		color: ${ei};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Jt};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Jt};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${ti} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${ti} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Xt} * 4px);
		min-width: calc(${Xt} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Fo extends Fe{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}j([V],Fo.prototype,"download",void 0),j([V],Fo.prototype,"href",void 0),j([V],Fo.prototype,"hreflang",void 0),j([V],Fo.prototype,"ping",void 0),j([V],Fo.prototype,"referrerpolicy",void 0),j([V],Fo.prototype,"rel",void 0),j([V],Fo.prototype,"target",void 0),j([V],Fo.prototype,"type",void 0),j([k],Fo.prototype,"defaultSlottedContent",void 0);class Lo{}j([V({attribute:"aria-expanded"})],Lo.prototype,"ariaExpanded",void 0),es(Lo,Gi),es(Fo,Yi,Lo);const Ho=class extends Fo{}.compose({baseName:"link",template:(e,t)=>Vt`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Xi("control")}
    >
        ${Zi(0,t)}
        <span class="content" part="content">
            <slot ${Ts("defaultSlottedContent")}></slot>
        </span>
        ${Ji(0,t)}
    </a>
`,styles:(e,t)=>Nt`
	${zt("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${zi};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Kt} * 1px) solid transparent;
		border-radius: calc(${Qt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Ni};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Ni};
	}
	:host(:${Ss}) .control,
	:host(:focus) .control {
		border: calc(${Kt} * 1px) solid ${Jt};
	}
`,shadowOptions:{delegatesFocus:!0}}),Vo=class extends $o{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>Vt`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Zi(0,t)}
        <span class="content" part="content">
            <slot ${Ts("content")}></slot>
        </span>
        ${Ji(0,t)}
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Qt};
		border: calc(${Kt} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ei};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${si};
		line-height: ${oi};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Xt} / 2) * 1px)
			calc((${Xt} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Ss}) {
		border-color: ${Jt};
		background: ${Ei};
		color: ${ei};
	}
	:host([aria-selected='true']) {
		background: ${Ei};
		border: calc(${Kt} * 1px) solid ${Jt};
		color: ${Di};
	}
	:host(:active) {
		background: ${Ei};
		color: ${Di};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Ei};
		border: calc(${Kt} * 1px) solid ${Jt};
		color: ${Di};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Ei};
		color: ${ei};
	}
	:host([disabled]) {
		cursor: ${As};
		opacity: ${Yt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),Mo="horizontal";class No extends Fe{constructor(){super(...arguments),this.orientation=Mo,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((s,o)=>{if("tab"===s.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],i=this.tabpanelIds[o];s.setAttribute("id",t),s.setAttribute("aria-selected",e?"true":"false"),s.setAttribute("aria-controls",i),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=s)}s.style[e]="",s.style[t]="",s.style[i]=`${o+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ss:e.preventDefault(),this.adjustBackward(e);break;case os:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case ns:e.preventDefault(),this.adjustBackward(e);break;case is:e.preventDefault(),this.adjustForward(e)}switch(e.key){case ls:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ds:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${xo()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${xo()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Mo}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=o-s;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){var t,i;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,t=this.tabs.length-1,(i=this.activeTabIndex+e)<0?t:i>t?0:i),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}j([V],No.prototype,"orientation",void 0),j([V],No.prototype,"activeid",void 0),j([k],No.prototype,"tabs",void 0),j([k],No.prototype,"tabpanels",void 0),j([V({mode:"boolean"})],No.prototype,"activeindicator",void 0),j([k],No.prototype,"activeIndicatorRef",void 0),j([k],No.prototype,"showActiveIndicator",void 0),es(No,Yi);class zo extends Fe{}j([V({mode:"boolean"})],zo.prototype,"disabled",void 0);class _o extends Fe{}const jo=class extends No{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Mo),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(e,t)=>Vt`
    <template class="${e=>e.orientation}">
        ${Zi(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ts("tabs")}></slot>

            ${Po((e=>e.showActiveIndicator),Vt`
                    <div
                        ${Xi("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Ji(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Ts("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Nt`
	${zt("grid")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		color: ${ei};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Xt} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Xt} * 1px) calc(${Xt} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Xt} / 4) * 1px);
		justify-self: center;
		background: ${qi};
		margin: 0;
		border-radius: calc(${Qt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`}),qo=class extends zo{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(e,t)=>Vt`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		height: calc(${Xt} * 7px);
		padding: calc(${Xt} * 1px) 0;
		color: ${Ui};
		fill: currentcolor;
		border-radius: calc(${Qt} * 1px);
		border: solid calc(${Kt} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${qi};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${qi};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${qi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${qi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${qi};
		fill: currentcolor;
	}
	:host(:${Ss}) {
		outline: none;
		border: solid calc(${Kt} * 1px) ${ji};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Xt} * 2px);
	}
`}),Uo=class extends _o{}.compose({baseName:"panel-view",template:(e,t)=>Vt`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Nt`
	${zt("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Kt} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${si};
		line-height: ${oi};
		padding: 10px calc((${Xt} + 2) * 1px);
	}
`});class Wo extends Fe{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,s=t-e;this.percentComplete=0===s?0:Math.fround((i-e)/s*100)}}j([V({converter:L})],Wo.prototype,"value",void 0),j([V({converter:L})],Wo.prototype,"min",void 0),j([V({converter:L})],Wo.prototype,"max",void 0),j([V({mode:"boolean"})],Wo.prototype,"paused",void 0),j([k],Wo.prototype,"percentComplete",void 0);const Ko=class extends Wo{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){"value"===e&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(e,t)=>Vt`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Po((e=>"number"==typeof e.value),Vt`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Po((e=>"number"!=typeof e.value),Vt`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Nt`
	${zt("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Xt} * 7px);
		width: calc(${Xt} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Xt} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${_i};
		stroke-width: calc(${Xt} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});var Go;!function(e){e.ltr="ltr",e.rtl="rtl"}(Go||(Go={}));class Qo extends Fe{constructor(){super(...arguments),this.orientation=go,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=null!==i?t.indexOf(i):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&s===o||o===t.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===os,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===ss,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in us&&this.isInsideFoundationToolbar)return!0;switch(t){case rs:this.checkFocusedRadio();break;case os:case is:this.direction===Go.ltr?this.moveRight(e):this.moveLeft(e);break;case ss:case ns:this.direction===Go.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?Go.rtl:Go.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}j([V({attribute:"readonly",mode:"boolean"})],Qo.prototype,"readOnly",void 0),j([V({attribute:"disabled",mode:"boolean"})],Qo.prototype,"disabled",void 0),j([V],Qo.prototype,"name",void 0),j([V],Qo.prototype,"value",void 0),j([V],Qo.prototype,"orientation",void 0),j([k],Qo.prototype,"childItems",void 0),j([k],Qo.prototype,"slottedRadioButtons",void 0);const Xo=class extends Qo{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}.compose({baseName:"radio-group",template:(e,t)=>Vt`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===go?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ts({property:"slottedRadioButtons",filter:ws("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Nt`
	${zt("flex")} :host {
		align-items: flex-start;
		margin: calc(${Xt} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${ei};
		font-size: ${si};
		margin: calc(${Xt} * 1px) 0;
	}
`});class Yo extends Fe{}class Jo extends(vs(Yo)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Zo extends Jo{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==cs)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}j([V({attribute:"readonly",mode:"boolean"})],Zo.prototype,"readOnly",void 0),j([k],Zo.prototype,"name",void 0),j([k],Zo.prototype,"defaultSlottedNodes",void 0);const en=class extends Zo{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}.compose({baseName:"radio",template:(e,t)=>Vt`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ts("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${si};
		line-height: ${oi};
		margin: calc(${Xt} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Si};
		border-radius: 999px;
		border: calc(${Kt} * 1px) solid ${Ai};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Xt} * 4px);
		position: relative;
		outline: none;
		width: calc(${Xt} * 4px);
	}
	.label {
		color: ${ei};
		cursor: pointer;
		font-family: ${Zt};
		margin-inline-end: calc(${Xt} * 2px + 2px);
		padding-inline-start: calc(${Xt} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${ei};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Xt} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Si};
		border-color: ${Ai};
	}
	:host(:not([disabled])) .control:active {
		background: ${Si};
		border-color: ${Jt};
	}
	:host(:${Ss}) .control {
		border: calc(${Kt} * 1px) solid ${Jt};
	}
	:host([aria-checked='true']) .control {
		background: ${Si};
		border: calc(${Kt} * 1px) solid ${Ai};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Si};
		border: calc(${Kt} * 1px) solid ${Ai};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Si};
		border: calc(${Kt} * 1px) solid ${Jt};
	}
	:host([aria-checked="true"]:${Ss}:not([disabled])) .control {
		border: calc(${Kt} * 1px) solid ${Jt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${As};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'}),tn=class extends ht{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:Mt,styles:(e,t)=>Nt`
	${zt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${ni};
		line-height: ${ri};
	}
	.control {
		background-color: ${ui};
		border: calc(${Kt} * 1px) solid ${fi};
		border-radius: ${Wi};
		color: ${pi};
		padding: calc(${Xt} * 0.5px) calc(${Xt} * 1px);
		text-transform: uppercase;
	}
`});class sn extends Fe{}class on extends(ms(sn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class nn extends on{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&x.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}j([V({attribute:"readonly",mode:"boolean"})],nn.prototype,"readOnly",void 0),j([V({mode:"boolean"})],nn.prototype,"autofocus",void 0),j([V],nn.prototype,"placeholder",void 0),j([V],nn.prototype,"type",void 0),j([V],nn.prototype,"list",void 0),j([V({converter:L})],nn.prototype,"maxlength",void 0),j([V({converter:L})],nn.prototype,"minlength",void 0),j([V],nn.prototype,"pattern",void 0),j([V({converter:L})],nn.prototype,"size",void 0),j([V({mode:"boolean"})],nn.prototype,"spellcheck",void 0),j([k],nn.prototype,"defaultSlottedNodes",void 0);class rn{}es(rn,Gi),es(nn,Yi,rn);class an extends Fe{}class ln extends(ms(an)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const dn="none";class cn extends ln{constructor(){super(...arguments),this.resize=dn,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}j([V({mode:"boolean"})],cn.prototype,"readOnly",void 0),j([V],cn.prototype,"resize",void 0),j([V({mode:"boolean"})],cn.prototype,"autofocus",void 0),j([V({attribute:"form"})],cn.prototype,"formId",void 0),j([V],cn.prototype,"list",void 0),j([V({converter:L})],cn.prototype,"maxlength",void 0),j([V({converter:L})],cn.prototype,"minlength",void 0),j([V],cn.prototype,"name",void 0),j([V],cn.prototype,"placeholder",void 0),j([V({converter:L,mode:"fromView"})],cn.prototype,"cols",void 0),j([V({converter:L,mode:"fromView"})],cn.prototype,"rows",void 0),j([V({mode:"boolean"})],cn.prototype,"spellcheck",void 0),j([k],cn.prototype,"defaultSlottedNodes",void 0),es(cn,rn);function hn(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}const un={vsCodeBadge:Ki,vsCodeButton:Fs,vsCodeCheckbox:Ms,vsCodeDataGrid:po,vsCodeDataGridCell:bo,vsCodeDataGridRow:fo,vsCodeDivider:vo,vsCodeDropdown:Bo,vsCodeLink:Ho,vsCodeOption:Vo,vsCodePanels:jo,vsCodePanelTab:qo,vsCodePanelView:Uo,vsCodeProgressRing:Ko,vsCodeRadioGroup:Xo,vsCodeRadio:en,vsCodeTag:tn,vsCodeTextArea:class extends cn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}.compose({baseName:"text-area",template:(e,t)=>Vt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==dn?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ts("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Xi("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-block")} :host {
		font-family: ${Zt};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Mi};
		background: ${Vi};
		border-radius: calc(${Qt} * 1px);
		border: calc(${Kt} * 1px) solid ${Li};
		font: inherit;
		font-size: ${si};
		line-height: ${oi};
		padding: calc(${Xt} * 2px + 1px);
		width: 100%;
		min-width: ${ii};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Vi};
		border-color: ${Li};
	}
	.control:active:enabled {
		background: ${Vi};
		border-color: ${Jt};
	}
	.control:hover,
	.control:${Ss},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${ai};
		height: ${li};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Vi};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${di};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${ci};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${hi};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Jt};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${ei};
		cursor: pointer;
		font-size: ${si};
		line-height: ${oi};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${As};
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		border-color: ${Li};
	}
`,shadowOptions:{delegatesFocus:!0}}),vsCodeTextField:class extends nn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}.compose({baseName:"text-field",template:(e,t)=>Vt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ts({property:"defaultSlottedNodes",filter:hn})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Zi(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Xi("control")}
            />
            ${Ji(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Nt`
	${zt("inline-block")} :host {
		font-family: ${Zt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Mi};
		background: ${Vi};
		border-radius: calc(${Qt} * 1px);
		border: calc(${Kt} * 1px) solid ${Li};
		height: calc(${ti} * 1px);
		min-width: ${ii};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Xt} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Xt} * 2px + 1px);
		font-size: ${si};
		line-height: ${oi};
	}
	.control:hover,
	.control:${Ss},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${ei};
		cursor: pointer;
		font-size: ${si};
		line-height: ${oi};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Xt} * 4px);
		height: calc(${Xt} * 4px);
	}
	.start {
		margin-inline-start: calc(${Xt} * 2px);
	}
	.end {
		margin-inline-end: calc(${Xt} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Vi};
		border-color: ${Li};
	}
	:host(:active:not([disabled])) .root {
		background: ${Vi};
		border-color: ${Jt};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Jt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${As};
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		border-color: ${Li};
	}
`,shadowOptions:{delegatesFocus:!0}}),register(e,...t){if(e)for(const i in this)"register"!==i&&this[i]().register(e,...t)}};lt.getOrCreate(undefined).withPrefix("vscode").register(un),Promise.all([l.e(731),l.e(593)]).then(l.bind(l,593)).catch(console.error)})();
//# sourceMappingURL=webview.js.map