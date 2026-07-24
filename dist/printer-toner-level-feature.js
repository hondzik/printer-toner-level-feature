function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",b=_.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??m)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,b?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,x="?"+C,P=`<${x}>`,O=document,z=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,j="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,N=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,W=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,Z=O.createTreeWalker(O,129);function F(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===M?"!--"===l[1]?n=H:void 0!==l[1]?n=R:void 0!==l[2]?(W.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=r??M,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?D:B):n===D||n===B?n=N:n===H||n===R?n=M:(n=N,r=void 0);const d=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===M?i+P:h>=0?(s.push(a),i.slice(0,h)+k+i.slice(h)+C+d):i+C+(-2===h?e:d)}return[F(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=J(t,e);if(this.el=K.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=h[o++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),Z.nextNode(),a.push({type:2,index:++r});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===I)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);Z.currentNode=s;let r=Z.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=Z.nextNode(),o++)}return Z.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=G(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=G(this,s[i+n],e,n),a===I&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends Y{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===I)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(K,X),(w.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;class nt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new X(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.1");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:m},ct=(t=ht,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const pt=n`
  .toners {
    display: flex;
    flex-direction: column;
    height: var(--feature-height, 42px);
    overflow: none;
  }

  .color.toners {
    /* double feature height + flex gap */
    height: calc(2 * var(--feature-height, 42px) + 12px);
  }

  .toner {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .toner > :first-child {
    flex: 1;
  }

  .toner > :last-child {
    width: 45px;
    text-align: right;
  }

  .toner .background {
    border: 1px solid;
    border-radius: 5px;
    height: 8px;
  }

  .toner .level {
    height: 100%;
  }

  .toner .percent {
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.4px;
    color: var(--primary-text-color);
  }

  .toner .percent::after {
    content: '%';
    margin-left: 2px;
  }

  .cyan.toner .background {
    background-color: rgba(0, 255, 255, 0.3);
    border-color: rgba(0, 255, 255, 0.8);
  }

  .cyan.toner .level {
    background-color: rgba(0, 255, 255, 0.7);
  }

  .magenta.toner .background {
    background-color: rgba(255, 0, 255, 0.3);
    border-color: rgba(255, 0, 255, 0.8);
  }

  .magenta.toner .level {
    background-color: rgb(255, 0, 255, 0.7);
  }

  .yellow.toner .background {
    background-color: rgba(255, 255, 0, 0.3);
    border-color: rgba(255, 255, 0, 0.8);
  }

  .yellow.toner .level {
    background-color: rgba(255, 255, 0, 0.7);
  }

  .black.toner .background {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.8);
  }

  .black-as-white .black.toner .background {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
  }

  .black.toner .level {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .black-as-white .black.toner .level {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;var ut={show_percent:{label:"Zobrazit procenta",description:"Pokud je povoleno, zobrazí procentuální hodnotu zbývajícího toneru vedle ukazatele hladiny."},black_as_white:{label:"Zobrazit černý jako bílý",description:"Pokud je povoleno, ukazatel hladiny černého toneru se zobrazí bílou barvou."}},_t={editor:ut},ft={show_percent:{label:"Prozentwert anzeigen",description:"Wenn aktiviert, wird der Prozentsatz des verbleibenden Toners neben der Füllstandsanzeige angezeigt."},black_as_white:{label:"Schwarz als Weiß anzeigen",description:"Wenn aktiviert, wird die Füllstandsanzeige für schwarzen Toner in Weiß dargestellt."}},gt={editor:ft},bt={show_percent:{label:"Show percent value",description:"When enabled, shows the percentage of toner remaining next to the toner level bar."},black_as_white:{label:"Display black as white",description:"When enabled, displays the black toner level bar in white color."}},$t={editor:bt},vt={show_percent:{label:"Mostrar valor porcentual",description:"Si está habilitado, muestra el porcentaje de tóner restante junto a la barra de nivel."},black_as_white:{label:"Mostrar negro como blanco",description:"Si está habilitado, la barra de nivel del tóner negro se muestra en blanco."}},mt={editor:vt},yt={show_percent:{label:"Afficher le pourcentage",description:"Si activé, affiche le pourcentage de toner restant à côté de la barre de niveau."},black_as_white:{label:"Afficher le noir en blanc",description:"Si activé, la barre de niveau du toner noir est affichée en blanc."}},At={editor:yt},wt={show_percent:{label:"Mostra valore percentuale",description:"Se abilitato, mostra la percentuale di toner rimanente accanto alla barra del livello."},black_as_white:{label:"Mostra nero come bianco",description:"Se abilitato, la barra del livello del toner nero viene mostrata in bianco."}},Et={editor:wt},St={show_percent:{label:"Mostrar valor percentual",description:"Se ativado, mostra a percentagem de toner restante ao lado da barra de nível."},black_as_white:{label:"Exibir preto como branco",description:"Se ativado, a barra de nível do toner preto é exibida em branco."}},kt={editor:St},Ct={show_percent:{label:"Zobraziť percentá",description:"Ak je povolené, zobrazí percentuálnu hodnotu zostávajúceho tonera vedľa ukazovateľa hladiny."},black_as_white:{label:"Zobraziť čierny ako biely",description:"Ak je povolené, ukazovateľ hladiny čierneho tonera sa zobrazí bielou farbou."}},xt={editor:Ct};const Pt={cs:Object.freeze({__proto__:null,default:_t,editor:ut}),de:Object.freeze({__proto__:null,default:gt,editor:ft}),en:Object.freeze({__proto__:null,default:$t,editor:bt}),es:Object.freeze({__proto__:null,default:mt,editor:vt}),fr:Object.freeze({__proto__:null,default:At,editor:yt}),it:Object.freeze({__proto__:null,default:Et,editor:wt}),pt:Object.freeze({__proto__:null,default:kt,editor:St}),sk:Object.freeze({__proto__:null,default:xt,editor:Ct})};function Ot(t,e){try{return t.split(".").reduce((t,e)=>t[e],Pt[e])}catch(t){return void console.error("getTranslatedString exception: ",t)}}let zt=class extends nt{constructor(){super(...arguments),this.config={}}setConfig(t){this.config={...t}}static get styles(){return n`
      .option {
        margin-bottom: 12px;
      }
      label {
        font-size: 1em;
        margin-left: 0.5em;
      }
    `}getBoolConfigVal(t,e){return this.config&&void 0!==this.config[t]?!!this.config[t]:e}render(){const t=(e=this.hass,function(t){let i=Ot(t,e?.locale.language??"en");return i||(i=Ot(t,"en")),i||t});var e;return L`
      <ha-settings-row>
        <span slot="heading" data-for="show_percent">${t("editor.show_percent.label")}</span>
        <span slot="description" data-for="show_percent">${t("editor.show_percent.description")}</span>
        <ha-switch id="show_percent" @change=${this._onShowPercentChange} .checked=${this.getBoolConfigVal("show_percent",!0)} name="show_percent"></ha-switch>
      </ha-settings-row>
      <ha-settings-row>
        <span slot="heading" data-for="show_percent">${t("editor.black_as_white.label")}</span>
        <span slot="description" data-for="show_percent">${t("editor.black_as_white.description")}</span>
        <ha-switch id="black_as_white" @change=${this._onBlackAsWhiteChange} .checked=${this.getBoolConfigVal("black_as_white",!0)} name="black_as_white"></ha-switch>
      </ha-settings-row>
    `}_onShowPercentChange(t){const e=t.target.checked;this._updateConfig({...this.config,show_percent:e})}_onBlackAsWhiteChange(t){const e=t.target.checked;this._updateConfig({...this.config,black_as_white:e})}_updateConfig(t){this.config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};t([dt({attribute:!1})],zt.prototype,"hass",void 0),t([dt({type:Object})],zt.prototype,"config",void 0),zt=t([lt("printer-toner-level-feature-config")],zt);const Ut=(t,e)=>{const i=e.entity_id?t.states[e.entity_id]:void 0;return!!i&&"printer"===i.attributes?.domain&&"number"==typeof i.attributes?.black_level};let Tt=class extends nt{static getConfigElement(){return document.createElement("printer-toner-level-feature-config")}static getStubConfig(){return{type:"custom:printer-toner-level-feature"}}get stateObj(){return this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0}get isColorPrinter(){return null!=this.stateObj?.attributes?.cyan_level}getCardSize(){return this.isColorPrinter?3:2}setConfig(t){this.config=t}getBoolConfigVal(t,e){return this.config&&void 0!==this.config[t]?!!this.config[t]:e}render(){if(!(this.config&&this.hass&&this.context&&Ut(this.hass,this.context)))return L`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;const t=this.getBoolConfigVal("black_as_white",!0);return this.isColorPrinter?L`
        <div class="color toners${t?" black-as-white":""}">
          ${this.renderToner("cyan")} ${this.renderToner("magenta")} ${this.renderToner("yellow")} ${this.renderToner("black")}
        </div>
      `:L` <div class="toners${t?" black-as-white":""}">${this.renderToner("black")}</div> `}renderToner(t){const e=this.stateObj?.attributes[t+"_level"]??0,i=this.getBoolConfigVal("show_percent",!0);return L`
      <div class="${t} toner">
        <div class="background">
          <div class="level" style="width: ${e}%;"></div>
        </div>
        ${i?L`<div class="percent">${e}</div>`:V}
      </div>
    `}static get styles(){return pt}};t([dt({attribute:!1})],Tt.prototype,"hass",void 0),t([dt({attribute:!1})],Tt.prototype,"config",void 0),t([dt({attribute:!1})],Tt.prototype,"context",void 0),Tt=t([lt("printer-toner-level-feature")],Tt),window.customCardFeatures||=[],window.customCardFeatures.push({type:"printer-toner-level-feature",name:"Printer toner level",isSupported:Ut,configurable:!0});export{Tt as PrinterTonerLevelFeature};
