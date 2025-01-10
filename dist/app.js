<<<<<<< HEAD
!function(e,t,r,n,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof s[n]&&s[n],a=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!a[t]){if(!e[t]){var o="function"==typeof s[n]&&s[n];if(!r&&o)return o(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var f=Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var c=a[t]=new u.Module(t);e[t][0].call(c.exports,d,c,c.exports,s)}return a[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=i,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return s[n]}}),s[n]=u;for(var f=0;f<t.length;f++)u(t[f]);if(r){var c=u(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({"8eqlo":[function(e,t,r,n){e("eedf9475e966a2d0").register(e("c51d87ff027806d2").getBundleURL("5pDNv"),JSON.parse('["5pDNv","app.js","gDIGd","landing.3b55464c.js","hNOg1","signIn.0c6449b7.js","8JkDf","signUp.1f80422f.js","4o371","verify.d5413700.js","ahPzY","tripDesigner.ba940ecc.js","5Skxj","chatbot.1724ee0a.js","lFJzu","html2canvas.c1253531.js","dTOLS","purify.a05347e2.js","X4z6c","index.es.17c75834.js"]'))},{eedf9475e966a2d0:"gSiLw",c51d87ff027806d2:"a2ypy"}],gSiLw:[function(e,t,r,n){var o=new Map;t.exports.register=function(e,t){for(var r=0;r<t.length-1;r+=2)o.set(t[r],{baseUrl:e,path:t[r+1]})},t.exports.resolve=function(e){var t=o.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}},{}],a2ypy:[function(e,t,r,n){var o={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),o[e]=t),t},r.getBaseURL=s,r.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],"83hJF":[function(e,t,r,n){var o=e("@xatom/core"),s=e("./modules/supabase"),i=e("./routes");window.WFDebug=!0,(0,o.onReady)(()=>{(0,s.initSupabase)(()=>{(0,i.app)()})})},{"@xatom/core":"5eqAK","./modules/supabase":"gSvrO","./routes":"2uPfR"}],"5eqAK":[function(e,t,r,n){var o=e("116fc168c31b637d");function s(e,t){return Object.keys(t).forEach(function(r){"default"===r||"__esModule"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e}function i(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var a={};i(a,"WFAuth",()=>l);class l{constructor(e={}){this.config=e}isLoggedIn(){return!!this.user}getRole(){return this.role}getUser(){return this.user}getConfig(){return this.config}logout(){this.user=null,this.role=null,this.config=null}setUser(e){this.user=e}setRole(e){this.role=e}setConfig(e){this.config=e}}var u={};i(u,"WFAuthMiddleware",()=>f);class f{constructor(e){this.auth=e}allowTo(e){return this.auth.getRole()===e}disallowedTo(e){return this.auth.getRole()!==e}getAuth(){return this.auth}}var c={};i(c,"WFComponent",()=>N);var d={},p={};i(p,"debug",()=>h);let h=(...e)=>{window.WFDebug&&console.log(...e)};var m={};function g(e,t){return document.evaluate(e,t,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}i(m,"getElementByXPath",()=>g);var y={};i(y,"getRouteQueryParams",()=>x);let x=()=>{let e={};return new URLSearchParams(location.search).forEach((t,r)=>{e[r]=t}),e};var b={};function E(e,t){let r=[];for(;e&&e!==t&&e.nodeType===Node.ELEMENT_NODE;){let t=e.nodeName.toLowerCase();e.hasAttribute("id")?t+='[@id="'+e.getAttribute("id")+'"]':e.hasAttribute("class")&&(t+='[@class="'+e.getAttribute("class")+'"]'),r.unshift(t),e=e.parentNode}return r.join("/")}i(b,"getXPathForChangedChild",()=>E);var j={};i(j,"navigate",()=>w);let w=e=>{"string"==typeof e?window.location.assign(e):"object"==typeof e&&"replace"===e.type?window.location.replace(e.to):"object"==typeof e&&"reload"===e.type&&window.location.reload()};var v={};function C(e,t={}){let r=function(e){let t=[],r=0;for(;r<e.length;){let n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){let n="",o=r+1;for(;o<e.length;){let t=e.charCodeAt(o);if(t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||95===t){n+=e[o++];continue}break}if(!n)throw TypeError(`Missing parameter name at ${r}`);t.push({type:"NAME",index:r,value:n}),r=o;continue}if("("===n){let n=1,o="",s=r+1;if("?"===e[s])throw TypeError(`Pattern cannot start with "?" at ${s}`);for(;s<e.length;){if("\\"===e[s]){o+=e[s++]+e[s++];continue}if(")"===e[s]){if(0==--n){s++;break}}else if("("===e[s]&&(n++,"?"!==e[s+1]))throw TypeError(`Capturing groups are not allowed at ${s}`);o+=e[s++]}if(n)throw TypeError(`Unbalanced pattern at ${r}`);if(!o)throw TypeError(`Missing pattern at ${r}`);t.push({type:"PATTERN",index:r,value:o}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),{prefixes:n="./"}=t,o=`[^${T(t.delimiter||"/#?")}]+?`,s=[],i=0,a=0,l="",u=e=>{if(a<r.length&&r[a].type===e)return r[a++].value},f=e=>{let t=u(e);if(void 0!==t)return t;let{type:n,index:o}=r[a];throw TypeError(`Unexpected ${n} at ${o}, expected ${e}`)},c=()=>{let e,t="";for(;e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};for(;a<r.length;){let e=u("CHAR"),t=u("NAME"),r=u("PATTERN");if(t||r){let a=e||"";-1===n.indexOf(a)&&(l+=a,a=""),l&&(s.push(l),l=""),s.push({name:t||i++,prefix:a,suffix:"",pattern:r||o,modifier:u("MODIFIER")||""});continue}let a=e||u("ESCAPED_CHAR");if(a){l+=a;continue}if(l&&(s.push(l),l=""),u("OPEN")){let e=c(),t=u("NAME")||"",r=u("PATTERN")||"",n=c();f("CLOSE"),s.push({name:t||(r?i++:""),pattern:t&&!r?o:r,prefix:e,suffix:n,modifier:u("MODIFIER")||""});continue}f("END")}return s}function A(e,t){return S(C(e,t),t)}function S(e,t={}){let r=D(t),{encode:n=e=>e,validate:o=!0}=t,s=e.map(e=>{if("object"==typeof e)return RegExp(`^(?:${e.pattern})$`,r)});return t=>{let r="";for(let i=0;i<e.length;i++){let a=e[i];if("string"==typeof a){r+=a;continue}let l=t?t[a.name]:void 0,u="?"===a.modifier||"*"===a.modifier,f="*"===a.modifier||"+"===a.modifier;if(Array.isArray(l)){if(!f)throw TypeError(`Expected "${a.name}" to not repeat, but got an array`);if(0===l.length){if(u)continue;throw TypeError(`Expected "${a.name}" to not be empty`)}for(let e=0;e<l.length;e++){let t=n(l[e],a);if(o&&!s[i].test(t))throw TypeError(`Expected all "${a.name}" to match "${a.pattern}", but got "${t}"`);r+=a.prefix+t+a.suffix}continue}if("string"==typeof l||"number"==typeof l){let e=n(String(l),a);if(o&&!s[i].test(e))throw TypeError(`Expected "${a.name}" to match "${a.pattern}", but got "${e}"`);r+=a.prefix+e+a.suffix;continue}if(u)continue;let c=f?"an array":"a string";throw TypeError(`Expected "${a.name}" to be ${c}`)}return r}}function R(e,t){let r=[];return F(U(e,r,t),r,t)}function F(e,t,r={}){let{decode:n=e=>e}=r;return function(r){let o=e.exec(r);if(!o)return!1;let{0:s,index:i}=o,a=Object.create(null);for(let e=1;e<o.length;e++){if(void 0===o[e])continue;let r=t[e-1];"*"===r.modifier||"+"===r.modifier?a[r.name]=o[e].split(r.prefix+r.suffix).map(e=>n(e,r)):a[r.name]=n(o[e],r)}return{path:s,index:i,params:a}}}function T(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function D(e){return e&&e.sensitive?"":"i"}function L(e,t,r={}){let{strict:n=!1,start:o=!0,end:s=!0,encode:i=e=>e,delimiter:a="/#?",endsWith:l=""}=r,u=`[${T(l)}]|$`,f=`[${T(a)}]`,c=o?"^":"";for(let r of e)if("string"==typeof r)c+=T(i(r));else{let e=T(i(r.prefix)),n=T(i(r.suffix));if(r.pattern){if(t&&t.push(r),e||n){if("+"===r.modifier||"*"===r.modifier){let t="*"===r.modifier?"?":"";c+=`(?:${e}((?:${r.pattern})(?:${n}${e}(?:${r.pattern}))*)${n})${t}`}else c+=`(?:${e}(${r.pattern})${n})${r.modifier}`}else"+"===r.modifier||"*"===r.modifier?c+=`((?:${r.pattern})${r.modifier})`:c+=`(${r.pattern})${r.modifier}`}else c+=`(?:${e}${n})${r.modifier}`}if(s)n||(c+=`${f}?`),c+=r.endsWith?`(?=${u})`:"$";else{let t=e[e.length-1],r="string"==typeof t?f.indexOf(t[t.length-1])>-1:void 0===t;n||(c+=`(?:${f}(?=${u}))?`),r||(c+=`(?=${f}|${u})`)}return new RegExp(c,D(r))}function U(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;let r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=r.exec(e.source);for(;o;)t.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=r.exec(e.source);return e}(e,t):Array.isArray(e)?function(e,t,r){let n=e.map(e=>U(e,t,r).source);return RegExp(`(?:${n.join("|")})`,D(r))}(e,t,r):L(C(e,r),t,r)}i(v,"parse",()=>C),i(v,"compile",()=>A),i(v,"tokensToFunction",()=>S),i(v,"match",()=>R),i(v,"pathToRegexp",()=>U),i(v,"regexpToFunction",()=>F),i(v,"tokensToRegexp",()=>L),i(v,"routeMatch",()=>I);let I=(e,t,r={},n={})=>(function(e={}){return function(t){var r=[],n=U(t,r,e);return function(e,t){var o,s,i=n.exec(e);if(!i)return!1;t=t||{};for(var a=0;a<r.length;a++)o=r[a],(s=i[a+1])&&(t[o.name]=function(e){try{return decodeURIComponent(e)}catch(t){throw Error('failed to decode param "'+e+'"')}}(s),o.repeat&&(t[o.name]=t[o.name].split(o.delimiter)));return t}}})(n)(e)(t,r);var $={};i($,"createComponent",()=>_);let _=e=>new N(document.createElement(e));s(d,p),s(d,m),s(d,y),s(d,b),s(d,j),s(d,v),s(d,$);class N{constructor(e){if("string"==typeof e){let t=document.querySelector(e);if(t)this.element=t,this.updateClone();else throw Error(`Could not find ${e}`)}else if("object"==typeof e&&e instanceof HTMLElement)this.element=e,this.updateClone();else if("object"==typeof e&&e instanceof SVGSVGElement)this.element=e,this.updateClone();else if(e instanceof N)this.element=e.getElement(),this.updateClone();else throw Error(`Could not find ${e}`)}updateClone(){this.cloneEl=this.element.cloneNode(!0)}getElement(){return this.element}updateTextViaAttrVar(e){let t={},r=(e,r)=>{e in t||(t[e]=[]),t[e].push(r)};this.hasAttribute("xa-var")&&r(this.getAttribute("xa-var"),this.getElement()),this.getChildAsComponents("[xa-var]").forEach(e=>{r(e.getAttribute("xa-var"),e.getElement())}),Object.keys(e).forEach(r=>{r in t&&t[r].forEach(t=>{t.textContent=e[r].toString()})})}updateTextVariable(e){if(1===this.cloneEl.childNodes.length&&this.cloneEl.firstChild instanceof Text)Object.keys(e).forEach(t=>{this.cloneEl.textContent.includes(`{{${t}}}`)&&(this.element.textContent=this.cloneEl.textContent.replace(`{{${t}}}`,e[t].toString()))});else{let t=Array.from(this.cloneEl.querySelectorAll("*")).map(e=>Array.from(e.childNodes).filter(e=>e instanceof Text&&e.textContent.trim().length>0)).flat();Object.keys(e).forEach(r=>{t.filter(e=>e.textContent.includes(`{{${r}}}`)).forEach(t=>{let n=E(t.parentElement,this.cloneEl),o=g(n,this.element);o?o.textContent=t.textContent.replace(`{{${r}}}`,e[r].toString()):console.log(t,o,"not found",n,t.parentElement,this)})})}}setAttribute(e,t){this.element.setAttribute(e,t)}removeAttribute(e){this.element.removeAttribute(e)}getAttribute(e){return this.element.getAttribute(e)}hasAttribute(e){return this.element.hasAttribute(e)}getChildAsComponents(e){return Array.from(this.element.querySelectorAll(e)).map(e=>new N(e))}getChildAsComponent(e){return new N(this.element.querySelector(e))}getManyChildAsComponents(e){let t={};return Object.keys(e).forEach(r=>{t[r]=new N(this.element.querySelector(e[r]))}),t}getCssClass(){return Array.from(this.element.classList)}addCssClass(e){this.element.classList.add(e),this.cloneEl.classList.add(e)}removeCssClass(e){this.element.classList.remove(e),this.cloneEl.classList.remove(e)}replaceCssClass(e,t){this.element.classList.replace(e,t),this.cloneEl.classList.replace(e,t)}toggleCssClass(e){this.element.classList.toggle(e),this.cloneEl.classList.toggle(e)}on(e,t,r){this.element.addEventListener(e,t,r)}off(e,t,r){this.element.removeEventListener(e,t,r)}setText(e){this.getElement().innerText=e.toString()}getText(){return this.getElement().innerText}setTextContent(e){this.getElement().textContent=e}getTextContent(){return this.getElement().textContent}setHTML(e){this.getElement().innerHTML=e}getHTML(){return this.getElement().innerHTML}getCloneAsComponent(){return new N(this.cloneEl.cloneNode(!0))}setStyle(e={}){Object.keys(e).forEach(t=>{this.element.style[t]=e[t]})}getStyle(){return window.getComputedStyle(this.element)}appendChild(e){this.element.appendChild(new N(e).getElement())}remove(){this.element.remove()}removeAllChildren(){this.element.replaceChildren()}}var O={};i(O,"WFDynamicList",()=>P);class P extends N{showLoadingState=!1;constructor(e,t){super(e),"string"==typeof t.rowSelector?this.rowComponent=this.getChildAsComponent(t.rowSelector):this.rowComponent=new N(t.rowSelector),this.rowComponent.remove(),t.loaderSelector&&("string"==typeof t.loaderSelector?this.loaderComponent=this.getChildAsComponent(t.loaderSelector):this.loaderComponent=new N(t.loaderSelector),this.loaderComponent.remove()),t.emptySelector&&("string"==typeof t.emptySelector?this.emptyComponent=this.getChildAsComponent(t.emptySelector):this.emptyComponent=new N(t.emptySelector),this.emptyComponent.remove())}rowRenderer(e){this.rowRendererCB=e}emptyRenderer(e){this.emptyRendererCB=e}loaderRenderer(e){this.loaderRendererCB=e}setData(e){this.data=e,this.render()}render(){if(!this.rowRendererCB)throw Error("Unable to find renderer");this.hideLoading(),this.removeAllChildren(),0===this.data.length&&this.emptyComponent&&this.showEmpty(),this.data.map((e,t,r)=>this.rowRendererCB({index:t,rowData:e,rowElement:this.rowComponent.getCloneAsComponent(),data:r})).filter(e=>e).forEach(e=>{this.appendChild(e)}),this.showLoadingState&&this.showLoading()}changeLoadingStatus(e){this.showLoadingState=e,e?this.showLoading():this.hideLoading()}showLoading(){this.hideLoading(),this.loaderComponent&&(this.loaderRendererCB?this.lastLoadingComponent=this.loaderRendererCB(this.loaderComponent.getCloneAsComponent()):this.lastLoadingComponent=this.loaderComponent.getCloneAsComponent(),this.appendChild(this.lastLoadingComponent))}showEmpty(){this.hideEmpty(),this.emptyRendererCB?this.lastEmptyComponent=this.emptyRendererCB(this.emptyComponent.getCloneAsComponent()):this.lastEmptyComponent=this.emptyComponent.getCloneAsComponent(),this.appendChild(this.lastEmptyComponent)}hideLoading(){this.lastLoadingComponent&&this.lastLoadingComponent.remove()}hideEmpty(){this.lastEmptyComponent&&this.lastEmptyComponent.remove()}forceRender(){this.render()}}var H={};i(H,"WFFormComponent",()=>M);class M extends N{defaultFormDisplayStyle="";constructor(e){super(e),this.formComponent=this.getChildAsComponents("form")[0],this.defaultFormDisplayStyle=window.getComputedStyle(this.formComponent.getElement()).display}getFormData(){let e={};return new FormData(this.formComponent.getElement()).forEach((t,r)=>{e[r]?e[r]=[e[r],t].flat():e[r]=t}),e}setFromData(e){Object.keys(e).forEach(t=>{this.getFormComponent().getElement().querySelector(`[name="${t}"]`).value=e[t]})}onFormSubmit(e){this.formComponent.getElement().onsubmit=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),e(this.getFormData(),t)}}submitWebflowForm(){let e=Object.keys(this.formComponent.getElement()).filter(e=>e.includes("jQuery")).map(e=>this.formComponent.getElement()[e]).filter(e=>"object"==typeof e&&".wForm"in e).map(e=>e[".wForm"]).reduce(e=>e);e&&e.handler?e.handler(e):e&&e.action&&this.formComponent.getElement().submit()}getFormComponent(){return this.formComponent}getSuccessComponent(){return this.getChildAsComponents(".w-form-done")[0]}getErrorComponent(){return this.getChildAsComponents(".w-form-fail")[0]}showSuccessState(){this.formComponent.getElement().style.display="none",this.getErrorComponent().getElement().style.display="none",this.getSuccessComponent().getElement().style.display="block"}showErrorState(){this.getSuccessComponent().getElement().style.display="none",this.getErrorComponent().getElement().style.display="block",this.formComponent.getElement().style.display=this.defaultFormDisplayStyle}showForm(){this.getErrorComponent().getElement().style.display="none",this.getSuccessComponent().getElement().style.display="none",this.formComponent.getElement().style.display=this.defaultFormDisplayStyle}disableForm(){Array.from(this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button")).forEach(e=>{e.setAttribute("disabled","disabled")})}enableForm(){Array.from(this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button")).forEach(e=>{e.removeAttribute("disabled")})}getSubmitButton(){return this.formComponent.getChildAsComponents('[type="submit"]')[0]}resetForm(){this.formComponent.getElement().reset()}updateSubmitButtonText(e){this.getSubmitButton().setAttribute("value",e)}}var B={};i(B,"WFRoute",()=>k);class k{middlewareAllowExecutionOnFail=!1;constructor(e){this.route=e}withMiddleware(e,t,r="allow",n={}){return this.middleware=e,this.middlewareRole=t,this.middlewareType=r,"allowExecutionOnFail"in n&&(this.middlewareAllowExecutionOnFail=!0===n.allowExecutionOnFail),"onError"in n&&(this.middlewareErrorFn=n.onError),this}validateRole(){return"allow"===this.middlewareType?this.middleware.allowTo(this.middlewareRole):this.middleware.disallowedTo(this.middlewareRole)}execute(e){let t=I(this.route,location.pathname);if(t){if(h("matched fn start",this.route,location.pathname),this.middleware){let r=this.validateRole();h("checking access role",this.route,this.middlewareRole,this.middlewareType,"canAccess",r,this.middlewareAllowExecutionOnFail),r||this.middlewareAllowExecutionOnFail?e({...t,...x()},r,this.middleware.getAuth()):this.middlewareErrorFn&&this.middlewareErrorFn()}else e({...t,...x()},!0);h("matched fn end",this.route,location.pathname)}else h("did not match",this.route,location.pathname);return this}}var q={};i(q,"onReady",()=>W);let W=e=>{window.Webflow||=[],window.Webflow.push(()=>{e()})};var K={};i(K,"WFInvisibleForm",()=>J);class J{loading=!1;loadingListener=new Map;successListener=new Map;errorListener=new Map;constructor(e=""){this.fromName=e,this.siteId=document.querySelector("html").getAttribute("data-wf-site")||""}setFormName(e){this.fromName=e}getFormName(){return this.fromName}setFormData(e){this.data=e}getFormData(){return this.data}isLoading(){return this.loading}onLoadingChange(e){let t=(0,o.v4)();return this.loadingListener.set(t,e),()=>{this.loadingListener.delete(t)}}onSuccess(e){let t=(0,o.v4)();return this.successListener.set(t,e),()=>{this.successListener.delete(t)}}onError(e){let t=(0,o.v4)();return this.errorListener.set(t,e),()=>{this.errorListener.delete(t)}}updateLoadingState(e){this.loading=e,this.loadingListener.forEach(e=>{e(this.loading)})}formSubmitted(){this.successListener.forEach(e=>{e()})}formFailed(){this.errorListener.forEach(e=>{e()})}submitForm(){let e=e=>{this.updateLoadingState(e)},t=()=>{this.formFailed()},r=()=>{this.formSubmitted()};e(!0),window.jQuery.ajax({url:`https://webflow.com/api/v1/form/${this.siteId}`,type:"POST",data:{name:this.fromName||"Untitled Form",source:location.href,test:!1,fields:this.data,dolphin:!1},dataType:"json",crossDomain:!0}).done(function(n){e(!1),n&&200===n.code?r():t()}).fail(function(){e(!1),t()})}}s(t.exports,a),s(t.exports,u),s(t.exports,c),s(t.exports,O),s(t.exports,H),s(t.exports,B),s(t.exports,d),s(t.exports,q),s(t.exports,K)},{"116fc168c31b637d":"hIyym"}],hIyym:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"v1",()=>i.default),o.export(r,"v3",()=>l.default),o.export(r,"v4",()=>f.default),o.export(r,"v5",()=>d.default),o.export(r,"NIL",()=>h.default),o.export(r,"version",()=>g.default),o.export(r,"validate",()=>x.default),o.export(r,"stringify",()=>E.default),o.export(r,"parse",()=>w.default);var s=e("./v1.js"),i=o.interopDefault(s),a=e("./v3.js"),l=o.interopDefault(a),u=e("./v4.js"),f=o.interopDefault(u),c=e("./v5.js"),d=o.interopDefault(c),p=e("./nil.js"),h=o.interopDefault(p),m=e("./version.js"),g=o.interopDefault(m),y=e("./validate.js"),x=o.interopDefault(y),b=e("./stringify.js"),E=o.interopDefault(b),j=e("./parse.js"),w=o.interopDefault(j)},{"./v1.js":"iQ6UN","./v3.js":"fW2F8","./v4.js":"h4z53","./v5.js":"jMNKD","./nil.js":"5Bod7","./version.js":"dnsqZ","./validate.js":"eG5s0","./stringify.js":"doA1n","./parse.js":"j2gue","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],iQ6UN:[function(e,t,r,n){let o,s;var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var a=e("./rng.js"),l=i.interopDefault(a),u=e("./stringify.js");let f=0,c=0;r.default=function(e,t,r){let n=t&&r||0,i=t||Array(16),a=(e=e||{}).node||o,d=void 0!==e.clockseq?e.clockseq:s;if(null==a||null==d){let t=e.random||(e.rng||(0,l.default))();null==a&&(a=o=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==d&&(d=s=(t[6]<<8|t[7])&16383)}let p=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:c+1,m=p-f+(h-c)/1e4;if(m<0&&void 0===e.clockseq&&(d=d+1&16383),(m<0||p>f)&&void 0===e.nsecs&&(h=0),h>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");f=p,c=h,s=d;let g=((0xfffffff&(p+=122192928e5))*1e4+h)%0x100000000;i[n++]=g>>>24&255,i[n++]=g>>>16&255,i[n++]=g>>>8&255,i[n++]=255&g;let y=p/0x100000000*1e4&0xfffffff;i[n++]=y>>>8&255,i[n++]=255&y,i[n++]=y>>>24&15|16,i[n++]=y>>>16&255,i[n++]=d>>>8|128,i[n++]=255&d;for(let e=0;e<6;++e)i[n+e]=a[e];return t||(0,u.unsafeStringify)(i)}},{"./rng.js":"fo5Bv","./stringify.js":"doA1n","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fo5Bv:[function(e,t,r,n){let o;var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"default",()=>a);let i=new Uint8Array(16);function a(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jiucr:[function(e,t,r,n){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],doA1n:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"unsafeStringify",()=>l);var s=e("./validate.js"),i=o.interopDefault(s);let a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function l(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}r.default=function(e,t=0){let r=l(e,t);if(!(0,i.default)(r))throw TypeError("Stringified UUID is invalid");return r}},{"./validate.js":"eG5s0","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],eG5s0:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./regex.js"),i=o.interopDefault(s);r.default=function(e){return"string"==typeof e&&(0,i.default).test(e)}},{"./regex.js":"2jBiL","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2jBiL":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fW2F8:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./v35.js"),i=o.interopDefault(s),a=e("./md5.js"),l=o.interopDefault(a);let u=(0,i.default)("v3",48,l.default);r.default=u},{"./v35.js":"6feLd","./md5.js":"gsSTl","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"6feLd":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"DNS",()=>l),o.export(r,"URL",()=>u),o.export(r,"default",()=>f);var s=e("./stringify.js"),i=e("./parse.js"),a=o.interopDefault(i);let l="6ba7b810-9dad-11d1-80b4-00c04fd430c8",u="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function f(e,t,r){function n(e,n,o,i){var l;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=(0,a.default)(n)),(null===(l=n)||void 0===l?void 0:l.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let u=new Uint8Array(16+e.length);if(u.set(n),u.set(e,n.length),(u=r(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,o){i=i||0;for(let e=0;e<16;++e)o[i+e]=u[e];return o}return(0,s.unsafeStringify)(u)}try{n.name=e}catch(e){}return n.DNS=l,n.URL=u,n}},{"./stringify.js":"doA1n","./parse.js":"j2gue","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],j2gue:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./validate.js"),i=o.interopDefault(s);r.default=function(e){let t;if(!(0,i.default)(e))throw TypeError("Invalid UUID");let r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/0x10000000000&255,r[11]=t/0x100000000&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}},{"./validate.js":"eG5s0","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],gsSTl:[function(e,t,r,n){function o(e){return(e+64>>>9<<4)+14+1}function s(e,t){let r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e,t,r,n,o,i){var a;return s((a=s(s(t,e),s(n,i)))<<o|a>>>32-o,r)}function a(e,t,r,n,o,s,a){return i(t&r|~t&n,e,t,o,s,a)}function l(e,t,r,n,o,s,a){return i(t&n|r&~n,e,t,o,s,a)}function u(e,t,r,n,o,s,a){return i(t^r^n,e,t,o,s,a)}function f(e,t,r,n,o,s,a){return i(r^(t|~n),e,t,o,s,a)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){if("string"==typeof e){let t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){let t=[],r=32*e.length,n="0123456789abcdef";for(let o=0;o<r;o+=8){let r=e[o>>5]>>>o%32&255,s=parseInt(n.charAt(r>>>4&15)+n.charAt(15&r),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[o(t)-1]=t;let r=0x67452301,n=-0x10325477,i=-0x67452302,c=0x10325476;for(let t=0;t<e.length;t+=16){let o=r,d=n,p=i,h=c;r=a(r,n,i,c,e[t],7,-0x28955b88),c=a(c,r,n,i,e[t+1],12,-0x173848aa),i=a(i,c,r,n,e[t+2],17,0x242070db),n=a(n,i,c,r,e[t+3],22,-0x3e423112),r=a(r,n,i,c,e[t+4],7,-0xa83f051),c=a(c,r,n,i,e[t+5],12,0x4787c62a),i=a(i,c,r,n,e[t+6],17,-0x57cfb9ed),n=a(n,i,c,r,e[t+7],22,-0x2b96aff),r=a(r,n,i,c,e[t+8],7,0x698098d8),c=a(c,r,n,i,e[t+9],12,-0x74bb0851),i=a(i,c,r,n,e[t+10],17,-42063),n=a(n,i,c,r,e[t+11],22,-0x76a32842),r=a(r,n,i,c,e[t+12],7,0x6b901122),c=a(c,r,n,i,e[t+13],12,-0x2678e6d),i=a(i,c,r,n,e[t+14],17,-0x5986bc72),n=a(n,i,c,r,e[t+15],22,0x49b40821),r=l(r,n,i,c,e[t+1],5,-0x9e1da9e),c=l(c,r,n,i,e[t+6],9,-0x3fbf4cc0),i=l(i,c,r,n,e[t+11],14,0x265e5a51),n=l(n,i,c,r,e[t],20,-0x16493856),r=l(r,n,i,c,e[t+5],5,-0x29d0efa3),c=l(c,r,n,i,e[t+10],9,0x2441453),i=l(i,c,r,n,e[t+15],14,-0x275e197f),n=l(n,i,c,r,e[t+4],20,-0x182c0438),r=l(r,n,i,c,e[t+9],5,0x21e1cde6),c=l(c,r,n,i,e[t+14],9,-0x3cc8f82a),i=l(i,c,r,n,e[t+3],14,-0xb2af279),n=l(n,i,c,r,e[t+8],20,0x455a14ed),r=l(r,n,i,c,e[t+13],5,-0x561c16fb),c=l(c,r,n,i,e[t+2],9,-0x3105c08),i=l(i,c,r,n,e[t+7],14,0x676f02d9),n=l(n,i,c,r,e[t+12],20,-0x72d5b376),r=u(r,n,i,c,e[t+5],4,-378558),c=u(c,r,n,i,e[t+8],11,-0x788e097f),i=u(i,c,r,n,e[t+11],16,0x6d9d6122),n=u(n,i,c,r,e[t+14],23,-0x21ac7f4),r=u(r,n,i,c,e[t+1],4,-0x5b4115bc),c=u(c,r,n,i,e[t+4],11,0x4bdecfa9),i=u(i,c,r,n,e[t+7],16,-0x944b4a0),n=u(n,i,c,r,e[t+10],23,-0x41404390),r=u(r,n,i,c,e[t+13],4,0x289b7ec6),c=u(c,r,n,i,e[t],11,-0x155ed806),i=u(i,c,r,n,e[t+3],16,-0x2b10cf7b),n=u(n,i,c,r,e[t+6],23,0x4881d05),r=u(r,n,i,c,e[t+9],4,-0x262b2fc7),c=u(c,r,n,i,e[t+12],11,-0x1924661b),i=u(i,c,r,n,e[t+15],16,0x1fa27cf8),n=u(n,i,c,r,e[t+2],23,-0x3b53a99b),r=f(r,n,i,c,e[t],6,-0xbd6ddbc),c=f(c,r,n,i,e[t+7],10,0x432aff97),i=f(i,c,r,n,e[t+14],15,-0x546bdc59),n=f(n,i,c,r,e[t+5],21,-0x36c5fc7),r=f(r,n,i,c,e[t+12],6,0x655b59c3),c=f(c,r,n,i,e[t+3],10,-0x70f3336e),i=f(i,c,r,n,e[t+10],15,-1051523),n=f(n,i,c,r,e[t+1],21,-0x7a7ba22f),r=f(r,n,i,c,e[t+8],6,0x6fa87e4f),c=f(c,r,n,i,e[t+15],10,-0x1d31920),i=f(i,c,r,n,e[t+6],15,-0x5cfebcec),n=f(n,i,c,r,e[t+13],21,0x4e0811a1),r=f(r,n,i,c,e[t+4],6,-0x8ac817e),c=f(c,r,n,i,e[t+11],10,-0x42c50dcb),i=f(i,c,r,n,e[t+2],15,0x2ad7d2bb),n=f(n,i,c,r,e[t+9],21,-0x14792c6f),r=s(r,o),n=s(n,d),i=s(i,p),c=s(c,h)}return[r,n,i,c]}(function(e){if(0===e.length)return[];let t=8*e.length,r=new Uint32Array(o(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],h4z53:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./native.js"),i=o.interopDefault(s),a=e("./rng.js"),l=o.interopDefault(a),u=e("./stringify.js");r.default=function(e,t,r){if(i.default.randomUUID&&!t&&!e)return(0,i.default).randomUUID();let n=(e=e||{}).random||(e.rng||(0,l.default))();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return(0,u.unsafeStringify)(n)}},{"./native.js":"agPy7","./rng.js":"fo5Bv","./stringify.js":"doA1n","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],agPy7:[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let o="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);r.default={randomUUID:o}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jMNKD:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./v35.js"),i=o.interopDefault(s),a=e("./sha1.js"),l=o.interopDefault(a);let u=(0,i.default)("v5",80,l.default);r.default=u},{"./v35.js":"6feLd","./sha1.js":"bDFTF","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],bDFTF:[function(e,t,r,n){function o(e,t){return e<<t|e>>>32-t}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){let t=[0x5a827999,0x6ed9eba1,0x8f1bbcdc,0xca62c1d6],r=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];if("string"==typeof e){let t=unescape(encodeURIComponent(e));e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);let n=Math.ceil((e.length/4+2)/16),s=Array(n);for(let t=0;t<n;++t){let r=new Uint32Array(16);for(let n=0;n<16;++n)r[n]=e[64*t+4*n]<<24|e[64*t+4*n+1]<<16|e[64*t+4*n+2]<<8|e[64*t+4*n+3];s[t]=r}s[n-1][14]=(e.length-1)*8/0x100000000,s[n-1][14]=Math.floor(s[n-1][14]),s[n-1][15]=(e.length-1)*8&0xffffffff;for(let e=0;e<n;++e){let n=new Uint32Array(80);for(let t=0;t<16;++t)n[t]=s[e][t];for(let e=16;e<80;++e)n[e]=o(n[e-3]^n[e-8]^n[e-14]^n[e-16],1);let i=r[0],a=r[1],l=r[2],u=r[3],f=r[4];for(let e=0;e<80;++e){let r=Math.floor(e/20),s=o(i,5)+function(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}(r,a,l,u)+f+t[r]+n[e]>>>0;f=u,u=l,l=o(a,30)>>>0,a=i,i=s}r[0]=r[0]+i>>>0,r[1]=r[1]+a>>>0,r[2]=r[2]+l>>>0,r[3]=r[3]+u>>>0,r[4]=r[4]+f>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"5Bod7":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default="00000000-0000-0000-0000-000000000000"},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],dnsqZ:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./validate.js"),i=o.interopDefault(s);r.default=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}},{"./validate.js":"eG5s0","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],gSvrO:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"initSupabase",()=>a);var s=e("../auth"),i=e("../../config");let a=e=>{let t=JSON.parse(localStorage.getItem("@bw-user-auth"));t?fetch(`${i.BACKEND_BASE_URL}/auth/getSession`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.token}`}}).then(async e=>{if(!e.ok)throw Error("Invalid session");if(e.ok){let t=await e.json();console.log("User session active",t),(0,s.setUser)(`${t.user.user_metadata.firstName} ${t.user.user_metadata.lastName}`,t.user.email)}}).catch(e=>{(0,s.logout)()}).finally(e):e()}},{"../auth":"apxUl","../../config":"7sZNr","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],apxUl:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"userAuth",()=>a),o.export(r,"setUser",()=>l),o.export(r,"logout",()=>u),o.export(r,"userMiddleware",()=>f);var s=e("@xatom/core"),i=e("../../config");let a=new s.WFAuth;a.setRole("GUEST");let l=(e,t)=>{a.setUser({fullName:e,email:t}),a.setRole("USER")},u=()=>{let e=JSON.parse(localStorage.getItem("@bw-user-auth"));fetch(`${i.BACKEND_BASE_URL}/auth/signout`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e.token}`}}).then(async e=>{localStorage.removeItem("@bw-user-auth"),a.logout(),(0,s.navigate)(i.USER_PATHS.signIn)}).catch(e=>{console.log("Error while logging out",e.message)})},f=new s.WFAuthMiddleware(a)},{"@xatom/core":"5eqAK","../../config":"7sZNr","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"7sZNr":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"USER_PATHS",()=>s),o.export(r,"BACKEND_BASE_URL",()=>i),o.export(r,"BACKEND_PROTECTED_BASE_URL",()=>a),o.export(r,"REQ_HEADERS",()=>l),o.export(r,"createReaHeaders",()=>u);let s={landing:"",authRoute:"/auth/(.*)",signIn:"/auth/sign-in",signUp:"/auth/sign-up",verification:"/auth/verify",forgotPassword:"/auth/forgot-password",resetPassword:"/auth/reset-password",appRoute:"/app/(.*)",tripDesigner:"/app/trip",likes:"/app/likes",myTrips:"/app/my-trips",accountSettings:"/app/settings",chatDemo:"/app/chatbot-demo"},i="http://localhost:3000/api",a="http://localhost:3000/api/protected",l={"Content-Type":"application/json"},u=(e=null)=>e?{...l,Authorization:`Bearer ${e}`}:l},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2uPfR":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"app",()=>u);var s=e("@xatom/core"),i=e("../modules/auth"),a=e("../config"),l=e("../modules/app/sidebar");let u=()=>{new(0,s.WFRoute)((0,a.USER_PATHS).landing).withMiddleware(i.userMiddleware,"GUEST","allow",{onError:()=>{(0,s.navigate)(a.USER_PATHS.chatDemo)}}).execute(()=>e("bbc6c1c285582157").then(({landing:e})=>{e()})),new(0,s.WFRoute)((0,a.USER_PATHS).authRoute).withMiddleware(i.userMiddleware,"GUEST","allow",{onError:()=>{(0,s.navigate)(a.USER_PATHS.chatDemo)}}).execute(()=>{new(0,s.WFRoute)((0,a.USER_PATHS).signIn).execute(()=>{e("9b9ca3d1f354f9").then(({signIn:e})=>{e()})}),new(0,s.WFRoute)((0,a.USER_PATHS).signUp).execute(()=>{e("8dff4a7369311fc").then(({signUp:e})=>{e()})}),new(0,s.WFRoute)((0,a.USER_PATHS).verification).execute(()=>{e("d2ff0736bf12c1b5").then(({verify:e})=>{e()})})}),new(0,s.WFRoute)((0,a.USER_PATHS).appRoute).withMiddleware(i.userMiddleware,"USER","allow",{onError:()=>{(0,s.navigate)(a.USER_PATHS.landing)}}).execute(()=>{(0,i.userAuth).isLoggedIn()&&(0,l.sidebar)(),new(0,s.WFRoute)((0,a.USER_PATHS).tripDesigner).execute(()=>{e("9e60bf79a1b8d5a0").then(({overview:e})=>{e()})}),new(0,s.WFRoute)((0,a.USER_PATHS).chatDemo).execute(t=>{e("3ec28be65cebfd6d").then(({chatbot:e})=>{e(t)})})})}},{"@xatom/core":"5eqAK","../modules/auth":"apxUl","../config":"7sZNr","../modules/app/sidebar":"6XEOy",bbc6c1c285582157:"l739q","9b9ca3d1f354f9":"jPuQu","8dff4a7369311fc":"26IT8",d2ff0736bf12c1b5:"hveJJ","9e60bf79a1b8d5a0":"BPSdO","3ec28be65cebfd6d":"eJHQg","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"6XEOy":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"sidebar",()=>a);var s=e("@xatom/core"),i=e("../auth");let a=()=>{let e=new s.WFComponent("[xa-type='sidebar']"),t=e.getChildAsComponent("[xa-type='logout']");e.updateTextViaAttrVar({name:(0,i.userAuth).getUser().fullName}),t.on("click",()=>{(0,i.logout)()})}},{"@xatom/core":"5eqAK","../auth":"apxUl","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],l739q:[function(e,t,r,n){t.exports=e("b0a9cf2817057afa")(e("c6883855fd165e1d").resolve("gDIGd")).then(()=>t.bundle.root("4ghqF"))},{b0a9cf2817057afa:"9wKyf",c6883855fd165e1d:"gSiLw"}],"9wKyf":[function(e,t,r,n){var o=e("ca2a84f7fa4a3bb0");t.exports=o(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var n=document.createElement("link");n.href=e,n.rel="preload",n.as="script",document.head.appendChild(n);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=e,o.onerror=function(t){var n=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),r(n)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)})})},{ca2a84f7fa4a3bb0:"e8xyU"}],e8xyU:[function(e,t,r,n){var o={},s={},i={};t.exports=function(e,t){return function(r){var n=function(e){switch(e){case"preload":return s;case"prefetch":return i;default:return o}}(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch(function(e){throw delete n[r],e})}}},{}],jPuQu:[function(e,t,r,n){t.exports=e("20b79d4d228401a1")(e("999a3a16fd5a81d5").resolve("hNOg1")).then(()=>t.bundle.root("jOZyB"))},{"20b79d4d228401a1":"9wKyf","999a3a16fd5a81d5":"gSiLw"}],"26IT8":[function(e,t,r,n){t.exports=e("85db02754529df6e")(e("91f5d6cf276d039f").resolve("8JkDf")).then(()=>t.bundle.root("dzqwq"))},{"85db02754529df6e":"9wKyf","91f5d6cf276d039f":"gSiLw"}],hveJJ:[function(e,t,r,n){t.exports=e("b802cee3dcf8d6cf")(e("c8d08bf9b81ca96c").resolve("4o371")).then(()=>t.bundle.root("dRyYX"))},{b802cee3dcf8d6cf:"9wKyf",c8d08bf9b81ca96c:"gSiLw"}],BPSdO:[function(e,t,r,n){t.exports=e("1869aed25bd16926")(e("8a50707ce711d436").resolve("ahPzY")).then(()=>t.bundle.root("aQqNH"))},{"1869aed25bd16926":"9wKyf","8a50707ce711d436":"gSiLw"}],eJHQg:[function(e,t,r,n){t.exports=Promise.all([e("a50794991a4ce7f0")(e("99b9e1408696db2f").resolve("ahPzY")),e("a50794991a4ce7f0")(e("99b9e1408696db2f").resolve("5Skxj"))]).then(()=>t.bundle.root("7J8K3"))},{a50794991a4ce7f0:"9wKyf","99b9e1408696db2f":"gSiLw"}]},["8eqlo","83hJF"],"83hJF","parcelRequire94c2");
=======
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jeTtx":[function(require,module,exports,__globalThis) {
var _core = require("@xatom/core");
var _supabase = require("./modules/supabase");
var _routes = require("./routes");
window.WFDebug = true;
(0, _core.onReady)(()=>{
    (0, _supabase.initSupabase)(()=>{
        (0, _routes.app)();
    });
});

},{"@xatom/core":"8w4K8","./modules/supabase":"eAmGG","./routes":"fnEL6"}],"8w4K8":[function(require,module,exports,__globalThis) {
var $iEn1Z$uuid = require("116fc168c31b637d");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $90b1e0f272b5544a$exports = {};
$parcel$export($90b1e0f272b5544a$exports, "WFAuth", ()=>$90b1e0f272b5544a$export$cb2138cd710ea58a);
class $90b1e0f272b5544a$export$cb2138cd710ea58a {
    constructor(config = {}){
        this.config = config;
    }
    isLoggedIn() {
        return !!this.user;
    }
    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    getConfig() {
        return this.config;
    }
    logout() {
        this.user = null;
        this.role = null;
        this.config = null;
    }
    setUser(user) {
        this.user = user;
    }
    setRole(role) {
        this.role = role;
    }
    setConfig(config) {
        this.config = config;
    }
}
var $336c7a32b438dc35$exports = {};
$parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", ()=>$336c7a32b438dc35$export$42f600804a30f397);
class $336c7a32b438dc35$export$42f600804a30f397 {
    constructor(auth){
        this.auth = auth;
    }
    allowTo(role) {
        return this.auth.getRole() === role;
    }
    disallowedTo(role) {
        return this.auth.getRole() !== role;
    }
    getAuth() {
        return this.auth;
    }
}
var $5ce0995b4e579efe$exports = {};
$parcel$export($5ce0995b4e579efe$exports, "WFComponent", ()=>$5ce0995b4e579efe$export$b8941e06d24ae728);
var $30d957643bf2e67a$exports = {};
var $62881ab850a57a38$exports = {};
$parcel$export($62881ab850a57a38$exports, "debug", ()=>$62881ab850a57a38$export$1c9f709888824e05);
const $62881ab850a57a38$export$1c9f709888824e05 = (...args)=>{
    if (window.WFDebug) console.log(...args);
};
var $9e73fdbf37a9aa00$exports = {};
$parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", ()=>$9e73fdbf37a9aa00$export$7ffef3582c93037b);
function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
    const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}
var $100caf27c28c32c0$exports = {};
$parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", ()=>$100caf27c28c32c0$export$1346b4a9ff9b6881);
const $100caf27c28c32c0$export$1346b4a9ff9b6881 = ()=>{
    const _data = {};
    new URLSearchParams(location.search).forEach((val, key)=>{
        _data[key] = val;
    });
    return _data;
};
var $e533c87ae7d96e3e$exports = {};
$parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", ()=>$e533c87ae7d96e3e$export$5fe4b019801f5ef1);
function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
    const xpathParts = [];
    // Traverse up the DOM tree from the node and generate an XPath expression for each parent element
    while(node && node !== parent && node.nodeType === Node.ELEMENT_NODE){
        let xpath = node.nodeName.toLowerCase();
        // If the element has an ID attribute, add it to the XPath expression
        if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
        else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
        // Add the XPath expression for this element to the list
        xpathParts.unshift(xpath);
        // Move up to the parent element
        node = node.parentNode;
    }
    // Combine the XPath parts into a single XPath expression
    return xpathParts.join("/");
}
var $4117225480b0cc44$exports = {};
$parcel$export($4117225480b0cc44$exports, "navigate", ()=>$4117225480b0cc44$export$ff7962acd6052c28);
const $4117225480b0cc44$export$ff7962acd6052c28 = (arg)=>{
    if (typeof arg === "string") window.location.assign(arg);
    else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
    else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
};
var $0b3f70b8f06eedca$exports = {};
$parcel$export($0b3f70b8f06eedca$exports, "parse", ()=>$0b3f70b8f06eedca$export$98e6a39c04603d36);
$parcel$export($0b3f70b8f06eedca$exports, "compile", ()=>$0b3f70b8f06eedca$export$ef7acd7185315e22);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", ()=>$0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
$parcel$export($0b3f70b8f06eedca$exports, "match", ()=>$0b3f70b8f06eedca$export$4659b591c19bdf3d);
$parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", ()=>$0b3f70b8f06eedca$export$71304158c7e35877);
$parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", ()=>$0b3f70b8f06eedca$export$968e97c88708237a);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", ()=>$0b3f70b8f06eedca$export$9a9303716def6456);
$parcel$export($0b3f70b8f06eedca$exports, "routeMatch", ()=>$0b3f70b8f06eedca$export$6c50148cf1d992bd);
/**
 * Tokenizer results.
 */ /**
 * Tokenize input string.
 */ function $0b3f70b8f06eedca$var$lexer(str) {
    const tokens = [];
    let i = 0;
    while(i < str.length){
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            let name = "";
            let j = i + 1;
            while(j < str.length){
                const code = str.charCodeAt(j);
                if (code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
    const tokens = $0b3f70b8f06eedca$var$lexer(str);
    const { prefixes: prefixes = "./" } = options;
    const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key = 0;
    let i = 0;
    let path = "";
    const tryConsume = (type)=>{
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    const mustConsume = (type)=>{
        const value = tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index: index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = ()=>{
        let result = "";
        let value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
            const prefix = consumeText();
            const name = tryConsume("NAME") || "";
            const pattern = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name || (pattern ? key++ : ""),
                pattern: name && !pattern ? defaultPattern : pattern,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
    return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
}
function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
    const reFlags = $0b3f70b8f06eedca$var$flags(options);
    const { encode: encode = (x)=>x, validate: validate = true } = options;
    // Compile all the tokens into regexps.
    const matches = tokens.map((token)=>{
        if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
    });
    return (data)=>{
        let path = "";
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            const value = data ? data[token.name] : undefined;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError(`Expected "${token.name}" to not be empty`);
                }
                for(let j = 0; j < value.length; j++){
                    const segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                const segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
    };
}
function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
    const keys = [];
    const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
    return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
}
function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
    const { decode: decode = (x)=>x } = options;
    return function(pathname) {
        const m = re.exec(pathname);
        if (!m) return false;
        const { 0: path, index: index } = m;
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value)=>{
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function $0b3f70b8f06eedca$var$escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function $0b3f70b8f06eedca$var$flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
    if (!keys) return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path)=>$0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
}
/**
 * Create a path regexp from string input.
 */ function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
    return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
}
function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
    const { strict: strict = false, start: start = true, end: end = true, encode: encode = (x)=>x, delimiter: delimiter = "/#?", endsWith: endsWith = "" } = options;
    const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
    const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
    let route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (const token of tokens)if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
    else {
        const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
        const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
        if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                    const mod = token.modifier === "*" ? "?" : "";
                    route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
        } else route += `(?:${prefix}${suffix})${token.modifier}`;
    }
    if (end) {
        if (!strict) route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
    } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
    }
    return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
}
function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
    if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
    if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
    return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
}
function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
    return function(path) {
        var keys = [];
        var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
        return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for(var i = 0; i < keys.length; i++){
                key = keys[i];
                param = m[i + 1];
                if (!param) continue;
                params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
                if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
        };
    };
}
const $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {})=>{
    return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
};
function $0b3f70b8f06eedca$var$decodeParam(param) {
    try {
        return decodeURIComponent(param);
    } catch (_) {
        throw new Error('failed to decode param "' + param + '"');
    }
}
var $36bdd128d4111a37$exports = {};
$parcel$export($36bdd128d4111a37$exports, "createComponent", ()=>$36bdd128d4111a37$export$60e54eaca7e7fb38);
const $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type)=>{
    return new $5ce0995b4e579efe$export$b8941e06d24ae728(document.createElement(type));
};
$parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
class $5ce0995b4e579efe$export$b8941e06d24ae728 {
    constructor(query){
        if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
                this.element = el;
                this.updateClone();
            } else throw new Error(`Could not find ${query}`);
        } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
        } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
        } else if (query instanceof $5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
        } else throw new Error(`Could not find ${query}`);
    }
    updateClone() {
        this.cloneEl = this.element.cloneNode(true);
    }
    getElement() {
        return this.element;
    }
    updateTextViaAttrVar(keyPair) {
        const fields = {};
        const addEl = (key, val)=>{
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
        };
        if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
        const _els = this.getChildAsComponents(`[xa-var]`);
        _els.forEach((el)=>{
            addEl(el.getAttribute("xa-var"), el.getElement());
        });
        Object.keys(keyPair).forEach((key)=>{
            if (key in fields) fields[key].forEach((d)=>{
                d.textContent = keyPair[key].toString();
            });
        });
    }
    updateTextVariable(keyPair) {
        if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key)=>{
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
        });
        else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el)=>Array.from(el.childNodes).filter((node)=>node instanceof Text && node.textContent.trim().length > 0)).flat();
            // console.log(els, this.cloneEl);
            Object.keys(keyPair).forEach((key)=>{
                els.filter((el)=>el.textContent.includes(`{{${key}}}`)).forEach((el)=>{
                    const path = $e533c87ae7d96e3e$export$5fe4b019801f5ef1(el.parentElement, this.cloneEl);
                    const _el = $9e73fdbf37a9aa00$export$7ffef3582c93037b(path, this.element);
                    // console.log(
                    //   el,
                    //   _el,
                    //   " found",
                    //   path,
                    //   el.parentElement,
                    //   this
                    // );
                    if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                    else console.log(el, _el, "not found", path, el.parentElement, this);
                });
            });
        }
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    getChildAsComponents(selector) {
        return Array.from(this.element.querySelectorAll(selector)).map((el)=>new $5ce0995b4e579efe$export$b8941e06d24ae728(el));
    }
    getChildAsComponent(selector) {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
    }
    getManyChildAsComponents(selectors) {
        let _els = {};
        Object.keys(selectors).forEach((key)=>{
            _els[key] = new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
        });
        return _els;
    }
    getCssClass() {
        return Array.from(this.element.classList);
    }
    addCssClass(className) {
        this.element.classList.add(className);
        this.cloneEl.classList.add(className);
    }
    removeCssClass(className) {
        this.element.classList.remove(className);
        this.cloneEl.classList.remove(className);
    }
    replaceCssClass(className, newClassName) {
        this.element.classList.replace(className, newClassName);
        this.cloneEl.classList.replace(className, newClassName);
    }
    toggleCssClass(className) {
        this.element.classList.toggle(className);
        this.cloneEl.classList.toggle(className);
    }
    on(type, listener, options) {
        this.element.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.element.removeEventListener(type, listener, options);
    }
    setText(text) {
        this.getElement().innerText = text.toString();
    }
    getText() {
        return this.getElement().innerText;
    }
    setTextContent(text) {
        this.getElement().textContent = text;
    }
    getTextContent() {
        return this.getElement().textContent;
    }
    setHTML(htmlText) {
        this.getElement().innerHTML = htmlText;
    }
    getHTML() {
        return this.getElement().innerHTML;
    }
    getCloneAsComponent() {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
    }
    setStyle(style = {}) {
        Object.keys(style).forEach((key)=>{
            this.element.style[key] = style[key];
        });
    }
    getStyle() {
        return window.getComputedStyle(this.element);
    }
    appendChild(child) {
        this.element.appendChild(new $5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
    }
    remove() {
        this.element.remove();
    }
    removeAllChildren() {
        this.element.replaceChildren();
    }
}
var $0105599dd5ebe189$exports = {};
$parcel$export($0105599dd5ebe189$exports, "WFDynamicList", ()=>$0105599dd5ebe189$export$688e73055717bd51);
class $0105599dd5ebe189$export$688e73055717bd51 extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    showLoadingState = false;
    constructor(query, config){
        super(query);
        if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
        else this.rowComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.rowSelector);
        this.rowComponent.remove();
        if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.loaderSelector);
            this.loaderComponent.remove();
        }
        if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.emptySelector);
            this.emptyComponent.remove();
        }
    }
    rowRenderer(cb) {
        this.rowRendererCB = cb;
    }
    emptyRenderer(cb) {
        this.emptyRendererCB = cb;
    }
    loaderRenderer(cb) {
        this.loaderRendererCB = cb;
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        if (!this.rowRendererCB) throw new Error("Unable to find renderer");
        this.hideLoading();
        this.removeAllChildren();
        if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
        this.data.map((rowData, index, data)=>this.rowRendererCB({
                index: index,
                rowData: rowData,
                rowElement: this.rowComponent.getCloneAsComponent(),
                data: data
            })).filter((d)=>d).forEach((d)=>{
            this.appendChild(d);
        });
        if (this.showLoadingState) this.showLoading();
    }
    changeLoadingStatus(state) {
        this.showLoadingState = state;
        if (state) this.showLoading();
        else this.hideLoading();
    }
    showLoading() {
        this.hideLoading();
        if (!this.loaderComponent) return;
        if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
        } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
        }
    }
    showEmpty() {
        this.hideEmpty();
        if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
        } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
        }
    }
    hideLoading() {
        if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
    }
    hideEmpty() {
        if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
    }
    forceRender() {
        this.render();
    }
}
var $ce18c18667e54846$exports = {};
$parcel$export($ce18c18667e54846$exports, "WFFormComponent", ()=>$ce18c18667e54846$export$e7173e584c7cbeff);
class $ce18c18667e54846$export$e7173e584c7cbeff extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    defaultFormDisplayStyle = "";
    constructor(query){
        super(query);
        this.formComponent = this.getChildAsComponents("form")[0];
        this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
    }
    getFormData() {
        const _data = {};
        new FormData(this.formComponent.getElement()).forEach((val, key)=>{
            if (_data[key]) _data[key] = [
                _data[key],
                val
            ].flat();
            else _data[key] = val;
        });
        return _data;
    }
    setFromData(data) {
        Object.keys(data).forEach((key)=>{
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
        });
    }
    onFormSubmit(cb) {
        this.formComponent.getElement().onsubmit = (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
        };
    }
    submitWebflowForm() {
        const wfForm = Object.keys(this.formComponent.getElement()).filter((d)=>d.includes("jQuery")).map((d)=>this.formComponent.getElement()[d]).filter((d)=>typeof d === "object" && ".wForm" in d).map((d)=>d[".wForm"]).reduce((d)=>d);
        if (wfForm && wfForm.handler) wfForm.handler(wfForm);
        else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
    }
    getFormComponent() {
        return this.formComponent;
    }
    getSuccessComponent() {
        return this.getChildAsComponents(".w-form-done")[0];
    }
    getErrorComponent() {
        return this.getChildAsComponents(".w-form-fail")[0];
    }
    showSuccessState() {
        this.formComponent.getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "block";
    }
    showErrorState() {
        this.getSuccessComponent().getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "block";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    showForm() {
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "none";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    disableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.setAttribute("disabled", "disabled");
        });
    }
    enableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.removeAttribute("disabled");
        });
    }
    getSubmitButton() {
        return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
    }
    resetForm() {
        this.formComponent.getElement().reset();
    }
    updateSubmitButtonText(text) {
        this.getSubmitButton().setAttribute("value", text);
    }
}
var $b73002af79232c1a$exports = {};
$parcel$export($b73002af79232c1a$exports, "WFRoute", ()=>$b73002af79232c1a$export$4e1b92c1162557be);
class $b73002af79232c1a$export$4e1b92c1162557be {
    middlewareAllowExecutionOnFail = false;
    constructor(route){
        this.route = route;
    }
    withMiddleware(middleware, role, type = "allow", options = {}) {
        this.middleware = middleware;
        this.middlewareRole = role;
        this.middlewareType = type;
        if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
        if ("onError" in options) this.middlewareErrorFn = options.onError;
        return this;
    }
    validateRole() {
        return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
    }
    execute(fn) {
        const _match = $0b3f70b8f06eedca$export$6c50148cf1d992bd(this.route, location.pathname);
        if (_match) {
            $62881ab850a57a38$export$1c9f709888824e05("matched fn start", this.route, location.pathname);
            if (this.middleware) {
                const canAccess = this.validateRole();
                $62881ab850a57a38$export$1c9f709888824e05("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
                if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                    ..._match,
                    ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
                }, canAccess, this.middleware.getAuth());
                else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
                ..._match,
                ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
            }, true);
            $62881ab850a57a38$export$1c9f709888824e05("matched fn end", this.route, location.pathname);
        } else $62881ab850a57a38$export$1c9f709888824e05("did not match", this.route, location.pathname);
        return this;
    }
}
var $16d2504bbe4bb459$exports = {};
$parcel$export($16d2504bbe4bb459$exports, "onReady", ()=>$16d2504bbe4bb459$export$ef1639a4b889352d);
/**
 * @description execute code when the page is loaded
 * @param cb callback function
 */ const $16d2504bbe4bb459$export$ef1639a4b889352d = (cb)=>{
    window.Webflow ||= [];
    window.Webflow.push(()=>{
        cb();
    });
};
var $78395a99ad91c494$exports = {};
$parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", ()=>$78395a99ad91c494$export$bc36999d76b95c72);
class $78395a99ad91c494$export$bc36999d76b95c72 {
    loading = false;
    loadingListener = new Map();
    successListener = new Map();
    errorListener = new Map();
    constructor(formName = ""){
        this.fromName = formName;
        this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
    }
    setFormName(formName) {
        this.fromName = formName;
    }
    getFormName() {
        return this.fromName;
    }
    setFormData(data) {
        this.data = data;
    }
    getFormData() {
        return this.data;
    }
    isLoading() {
        return this.loading;
    }
    onLoadingChange(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.loadingListener.set(_id, fn);
        return ()=>{
            this.loadingListener.delete(_id);
        };
    }
    onSuccess(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.successListener.set(_id, fn);
        return ()=>{
            this.successListener.delete(_id);
        };
    }
    onError(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.errorListener.set(_id, fn);
        return ()=>{
            this.errorListener.delete(_id);
        };
    }
    updateLoadingState(state) {
        this.loading = state;
        this.loadingListener.forEach((fn)=>{
            fn(this.loading);
        });
    }
    formSubmitted() {
        this.successListener.forEach((fn)=>{
            fn();
        });
    }
    formFailed() {
        this.errorListener.forEach((fn)=>{
            fn();
        });
    }
    submitForm() {
        const _updateStatus = (state)=>{
            this.updateLoadingState(state);
        };
        const onFailed = ()=>{
            this.formFailed();
        };
        const onDone = ()=>{
            this.formSubmitted();
        };
        _updateStatus(true);
        window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
                name: this.fromName || "Untitled Form",
                source: location.href,
                test: false,
                fields: this.data,
                dolphin: false
            },
            dataType: "json",
            crossDomain: true
        }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
        }).fail(function() {
            _updateStatus(false);
            onFailed();
        });
    }
}
$parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
$parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
$parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
$parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
$parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
$parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
$parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
$parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
$parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);

},{"116fc168c31b637d":"ggZPL"}],"ggZPL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"jG1dk","./v3.js":"ap9Ro","./v4.js":"6RfIs","./v5.js":"eBz2t","./nil.js":"8sEtz","./version.js":"4vEj5","./validate.js":"dfZI5","./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jG1dk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cHt7R":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bFRkJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dfZI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"5bk3T","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5bk3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ap9Ro":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)('v3', 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"asOV2","./md5.js":"ieSzG","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"asOV2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1KoND":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ieSzG":[function(require,module,exports,__globalThis) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = '0123456789abcdef';
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6RfIs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"8mdcZ","./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8mdcZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eBz2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)('v5', 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"asOV2","./sha1.js":"lger1","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lger1":[function(require,module,exports,__globalThis) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8sEtz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4vEj5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eAmGG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSupabase", ()=>initSupabase);
var _auth = require("../auth");
var _config = require("../../config");
const options = {
    db: {
        schema: "public"
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
};
const initSupabase = (cb)=>{
    const localSessionInfo = JSON.parse(localStorage.getItem("@bw-user-auth"));
    if (localSessionInfo) fetch(`${(0, _config.BACKEND_BASE_URL)}/auth/getSession`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localSessionInfo.token}`
        }
    }).then(async (res)=>{
        if (!res.ok) {
            debugger;
            throw new Error("Invalid session");
        }
        if (res.ok) {
            const data = await res.json();
            console.log("User session active", data);
            (0, _auth.setUser)(`${data.user.user_metadata.firstName} ${data.user.user_metadata.lastName}`, data.user.email);
        }
    }).catch((err)=>{
        debugger;
        (0, _auth.logout)();
    }).finally(cb);
    else cb();
};

},{"../auth":"du3Bh","../../config":"bxoGo","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"du3Bh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAuth", ()=>userAuth);
parcelHelpers.export(exports, "setUser", ()=>setUser);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "userMiddleware", ()=>userMiddleware);
var _core = require("@xatom/core");
var _config = require("../../config");
const userAuth = new (0, _core.WFAuth)();
/**
 * Set default user role
 */ userAuth.setRole("GUEST");
const setUser = (fullName, email)=>{
    userAuth.setUser({
        fullName,
        email
    });
    userAuth.setRole("USER");
};
const logout = ()=>{
    const localSessionInfo = JSON.parse(localStorage.getItem("@bw-user-auth"));
    fetch(`${(0, _config.BACKEND_BASE_URL)}/auth/signout`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localSessionInfo.token}`
        }
    }).then(async (res)=>{
        localStorage.removeItem("@bw-user-auth");
        userAuth.logout();
        (0, _core.navigate)((0, _config.USER_PATHS).signIn);
    }).catch((err)=>{
        console.log("Error while logging out", err.message);
    });
};
const userMiddleware = new (0, _core.WFAuthMiddleware)(userAuth);

},{"@xatom/core":"8w4K8","../../config":"bxoGo","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bxoGo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "USER_PATHS", ()=>USER_PATHS);
parcelHelpers.export(exports, "BACKEND_BASE_URL", ()=>BACKEND_BASE_URL);
parcelHelpers.export(exports, "BACKEND_PROTECTED_BASE_URL", ()=>BACKEND_PROTECTED_BASE_URL);
parcelHelpers.export(exports, "REQ_HEADERS", ()=>REQ_HEADERS);
parcelHelpers.export(exports, "createReaHeaders", ()=>createReaHeaders);
const USER_PATHS = {
    landing: "",
    authRoute: "/auth/(.*)",
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    verification: "/auth/verify",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    appRoute: "/app/(.*)",
    tripDesigner: "/app/trip",
    likes: "/app/likes",
    myTrips: "/app/my-trips",
    accountSettings: "/app/settings",
    chatDemo: '/app/chatbot-demo'
};
const BACKEND_BASE_URL = 'http://localhost:3000/api';
const BACKEND_PROTECTED_BASE_URL = 'http://localhost:3000/api/protected';
const REQ_HEADERS = {
    'Content-Type': 'application/json'
};
const createReaHeaders = (token = null)=>{
    if (token) return {
        ...REQ_HEADERS,
        'Authorization': `Bearer ${token}`
    };
    return REQ_HEADERS;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fnEL6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "app", ()=>app);
var _core = require("@xatom/core");
var _auth = require("../modules/auth");
var _config = require("../config");
var _sidebar = require("../modules/app/sidebar");
const app = ()=>{
    new (0, _core.WFRoute)((0, _config.USER_PATHS).landing).withMiddleware((0, _auth.userMiddleware), "GUEST", "allow", {
        onError: ()=>{
            (0, _core.navigate)((0, _config.USER_PATHS).chatDemo);
        }
    }).execute(()=>require("bbc6c1c285582157").then(({ landing })=>{
            landing();
        }));
    new (0, _core.WFRoute)((0, _config.USER_PATHS).authRoute).withMiddleware((0, _auth.userMiddleware), "GUEST", "allow", {
        onError: ()=>{
            (0, _core.navigate)((0, _config.USER_PATHS).chatDemo);
        }
    }).execute(()=>{
        new (0, _core.WFRoute)((0, _config.USER_PATHS).signIn).execute(()=>{
            require("9b9ca3d1f354f9").then(({ signIn })=>{
                signIn();
            });
        });
        new (0, _core.WFRoute)((0, _config.USER_PATHS).signUp).execute(()=>{
            require("8dff4a7369311fc").then(({ signUp })=>{
                signUp();
            });
        });
        new (0, _core.WFRoute)((0, _config.USER_PATHS).verification).execute(()=>{
            require("d2ff0736bf12c1b5").then(({ verify })=>{
                verify();
            });
        });
    });
    new (0, _core.WFRoute)((0, _config.USER_PATHS).appRoute).withMiddleware((0, _auth.userMiddleware), "USER", "allow", {
        onError: ()=>{
            (0, _core.navigate)((0, _config.USER_PATHS).landing);
        }
    }).execute(()=>{
        if ((0, _auth.userAuth).isLoggedIn()) (0, _sidebar.sidebar)();
        new (0, _core.WFRoute)((0, _config.USER_PATHS).tripDesigner).execute(()=>{
            require("9e60bf79a1b8d5a0").then(({ overview })=>{
                overview();
            });
        });
        new (0, _core.WFRoute)((0, _config.USER_PATHS).chatDemo).execute((param)=>{
            require("3ec28be65cebfd6d").then(({ chatbot })=>{
                chatbot(param);
            });
        });
    });
};

},{"@xatom/core":"8w4K8","../modules/auth":"du3Bh","../config":"bxoGo","../modules/app/sidebar":"2AjHf","bbc6c1c285582157":"lzBrm","9b9ca3d1f354f9":"cON7G","8dff4a7369311fc":"45rSL","d2ff0736bf12c1b5":"h3aRF","9e60bf79a1b8d5a0":"g8wOg","3ec28be65cebfd6d":"2abRF","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2AjHf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebar", ()=>sidebar);
var _core = require("@xatom/core");
var _auth = require("../auth");
const sidebar = ()=>{
    const sidebar = new (0, _core.WFComponent)(`[xa-type='sidebar']`);
    const logOut = sidebar.getChildAsComponent(`[xa-type='logout']`);
    // update user name
    sidebar.updateTextViaAttrVar({
        name: (0, _auth.userAuth).getUser().fullName
    });
    logOut.on("click", ()=>{
        (0, _auth.logout)();
    });
};

},{"@xatom/core":"8w4K8","../auth":"du3Bh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lzBrm":[function(require,module,exports,__globalThis) {
module.exports = require("e88e8e0a5fde1b48")(require("130359097654a689").getBundleURL('1Q55w') + "landing.380a3937.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('5pobz'));

},{"e88e8e0a5fde1b48":"3dDkg","130359097654a689":"jkqJ4"}],"3dDkg":[function(require,module,exports,__globalThis) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"khH0r"}],"khH0r":[function(require,module,exports,__globalThis) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"jkqJ4":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cON7G":[function(require,module,exports,__globalThis) {
module.exports = require("b5cc2a95523abb33")(require("8e29b32d3878b504").getBundleURL('1Q55w') + "signIn.e51c192a.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('cbLdP'));

},{"b5cc2a95523abb33":"3dDkg","8e29b32d3878b504":"jkqJ4"}],"45rSL":[function(require,module,exports,__globalThis) {
module.exports = require("272c49fdeb253d8")(require("e9e7ea642b859d74").getBundleURL('1Q55w') + "signUp.bcb13ab7.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('gVOPx'));

},{"272c49fdeb253d8":"3dDkg","e9e7ea642b859d74":"jkqJ4"}],"h3aRF":[function(require,module,exports,__globalThis) {
module.exports = require("626a573d4497bc9c")(require("b433eb1d4c66108").getBundleURL('1Q55w') + "verify.6491b9a1.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('9UBEU'));

},{"626a573d4497bc9c":"3dDkg","b433eb1d4c66108":"jkqJ4"}],"g8wOg":[function(require,module,exports,__globalThis) {
module.exports = require("eef9d1ed383e9155")(require("a34ac05127b66812").getBundleURL('1Q55w') + "tripDesigner.bd023ed3.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('5KI2x'));

},{"eef9d1ed383e9155":"3dDkg","a34ac05127b66812":"jkqJ4"}],"2abRF":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    require("aec7ef9ab2d0c8c4")(require("fafc775e2c8611d9").getBundleURL('1Q55w') + "tripDesigner.bd023ed3.js").catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("aec7ef9ab2d0c8c4")(require("fafc775e2c8611d9").getBundleURL('1Q55w') + "chatbot.7825be57.js").catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root('3zBgH'));

},{"aec7ef9ab2d0c8c4":"3dDkg","fafc775e2c8611d9":"jkqJ4"}]},["jeTtx"], "jeTtx", "parcelRequire94c2")

>>>>>>> dev
//# sourceMappingURL=app.js.map
