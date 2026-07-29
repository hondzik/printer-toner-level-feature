function e(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,r=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new s(r,e,o)},a=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,b=_.trustedTypes,g=b?b.emptyScript:"",f=_.reactiveElementPolyfillSupport,v=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},m=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const s=o?.call(this);i?.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(r)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of o){const o=document.createElement("style"),i=t.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:$).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=o;const s=i.fromAttribute(t,e.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(void 0!==e){const s=this.constructor;if(!1===o&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??m)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==i||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,f?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,k=e=>e,x=A.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+z,P=`<${C}>`,O=document,j=()=>O.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,I=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Z=new WeakMap,F=O.createTreeWalker(O,129);function G(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const K=(e,t)=>{const r=e.length-1,o=[];let i,s=2===t?"<svg>":3===t?"<math>":"",n=N;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,d=0;for(;d<r.length&&(n.lastIndex=d,l=n.exec(r),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=H:void 0!==l[1]?n=R:void 0!==l[2]?(W.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=i??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?I:'"'===l[3]?L:D):n===L||n===D?n=I:n===H||n===R?n=N:(n=I,i=void 0);const h=n===I&&e[t+1].startsWith("/>")?" ":"";s+=n===N?r+P:c>=0?(o.push(a),r.slice(0,c)+E+r.slice(c)+z+h):r+z+(-2===c?t:h)}return[G(e,s+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0;const n=e.length-1,a=this.parts,[l,c]=K(e,t);if(this.el=J.createElement(l,r),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=F.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=c[s++],r=o.getAttribute(e).split(z),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?te:"?"===n[1]?re:"@"===n[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(z)&&(a.push({type:6,index:i}),o.removeAttribute(e));if(W.test(o.tagName)){const e=o.textContent.split(z),t=e.length-1;if(t>0){o.textContent=x?x.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],j()),F.nextNode(),a.push({type:2,index:++i});o.append(e[t],j())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(z,e+1));)a.push({type:7,index:i}),e+=z.length-1}i++}}static createElement(e,t){const r=O.createElement("template");return r.innerHTML=e,r}}function Y(e,t,r=e,o){if(t===V)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const s=M(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=Y(e,i._$AS(e,t.values),i,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);F.currentNode=o;let i=F.nextNode(),s=0,n=0,a=r[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new X(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ie(i,this,e)),this._$AV.push(t),a=r[++n]}s!==a?.index&&(i=F.nextNode(),s++)}return F.currentNode=O,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),M(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=J.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new J(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new X(this.O(j()),this.O(j()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(e,t=this,r,o){const i=this.strings;let s=!1;if(void 0===i)e=Y(this,e,t,0),s=!M(e)||e!==this._$AH&&e!==V,s&&(this._$AH=e);else{const o=e;let n,a;for(e=i[0],n=0;n<i.length-1;n++)a=Y(this,o[r+n],t,n),a===V&&(a=this._$AH[n]),s||=!M(a)||a!==this._$AH[n],a===q?e=q:e!==q&&(e+=(a??"")+i[n+1]),this._$AH[n]=a}s&&!o&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class re extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class oe extends ee{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??q)===V)return;const r=this._$AH,o=e===q&&r!==q||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==q&&(r===q||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const se=A.litHtmlPolyfillSupport;se?.(J,X),(A.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;class ae extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=r?.renderBefore??null;o._$litPart$=i=new X(t.insertBefore(j(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const le=ne.litElementPolyfillSupport;le?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:m},he=(e=de,t,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];t.call(this,r),this.requestUpdate(o,i,e,!0,r)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,r)=>"object"==typeof r?he(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}const ue=n`
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
    background-color: rgba(255, 0, 255, 0.7);
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
`;function _e(e,t,r){const o=e?.[t];return void 0!==o?!!o:r}var be="https://github.com/hondzik/printer-toner-level-feature";const ge=["cyan","magenta","yellow","black"],fe={cyan:["cyan"],magenta:["magenta"],yellow:["yellow"],black:["black"]};function ve(e,t){const r=e.entities,o=t?r?.[t]?.device_id:void 0;if(!r||!o)return{};const i=Object.values(r).filter(e=>e.device_id===o&&e.entity_id.startsWith("sensor.")).map(t=>({entityId:t.entity_id,stateObj:e.states[t.entity_id]})).filter(({stateObj:e})=>!!e&&("%"===e.attributes?.unit_of_measurement||("unavailable"===e.state||"unknown"===e.state))).sort((e,t)=>e.entityId.localeCompare(t.entityId)),s={},n=new Set;for(const e of ge){const t=i.find(({entityId:t,stateObj:r})=>{if(n.has(t))return!1;const o=`${r?.attributes?.friendly_name??""} ${t}`.toLowerCase();return fe[e].some(e=>o.includes(e))});t&&(s[e]=t.entityId,n.add(t.entityId))}return s}function $e(e,t,r,o){const i=Number(e.states[r]?.state);return{color:t,origin:o,entityId:r,level:Number.isFinite(i)?i:void 0}}var me={show_percent:{label:"Zobrazit procenta",description:"Pokud je povoleno, zobrazí procentuální hodnotu zbývajícího toneru vedle ukazatele hladiny."},black_as_white:{label:"Zobrazit černý jako bílý",description:"Pokud je povoleno, ukazatel hladiny černého toneru se zobrazí bílou barvou."}},ye={editor:me},we={show_percent:{label:"Prozentwert anzeigen",description:"Wenn aktiviert, wird der Prozentsatz des verbleibenden Toners neben der Füllstandsanzeige angezeigt."},black_as_white:{label:"Schwarz als Weiß anzeigen",description:"Wenn aktiviert, wird die Füllstandsanzeige für schwarzen Toner in Weiß dargestellt."},sources:{title:"Tonerquellen",mode_attributes:"Werte kommen aus den Attributen der Kachel-Entität",mode_auto:"Kartuschen-Sensoren automatisch am Drucker-Gerät erkannt",mode_none:"Keine Kartuschen-Sensoren erkannt — bitte manuell zuordnen",auto:"Auto",manual:"Manuell",reset:"Auf erkannten Sensor zurücksetzen",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gelb",black:"Schwarz"}},Ae={editor:we},ke={show_percent:{label:"Show percent value",description:"When enabled, shows the percentage of toner remaining next to the toner level bar."},black_as_white:{label:"Display black as white",description:"When enabled, displays the black toner level bar in white color."},sources:{title:"Toner sources",mode_attributes:"Values come from the tile entity's attributes",mode_auto:"Cartridge sensors detected automatically from the printer device",mode_none:"No cartridge sensors detected — assign them manually",auto:"Auto",manual:"Manual",reset:"Reset to detected sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Yellow",black:"Black"}},xe={editor:ke},Se={show_percent:{label:"Mostrar valor porcentual",description:"Si está habilitado, muestra el porcentaje de tóner restante junto a la barra de nivel."},black_as_white:{label:"Mostrar negro como blanco",description:"Si está habilitado, la barra de nivel del tóner negro se muestra en blanco."}},Ee={editor:Se},ze={show_percent:{label:"Afficher le pourcentage",description:"Si activé, affiche le pourcentage de toner restant à côté de la barre de niveau."},black_as_white:{label:"Afficher le noir en blanc",description:"Si activé, la barre de niveau du toner noir est affichée en blanc."}},Ce={editor:ze},Pe={show_percent:{label:"Százalék megjelenítése",description:"Ha engedélyezve van, a fennmaradó festék százalékos értéke megjelenik a szintjelző sáv mellett."},black_as_white:{label:"Fekete megjelenítése fehérként",description:"Ha engedélyezve van, a fekete festékszint sáv fehér színben jelenik meg."}},Oe={editor:Pe},je={show_percent:{label:"Mostra valore percentuale",description:"Se abilitato, mostra la percentuale di toner rimanente accanto alla barra del livello."},black_as_white:{label:"Mostra nero come bianco",description:"Se abilitato, la barra del livello del toner nero viene mostrata in bianco."}},Me={editor:je},Te={show_percent:{label:"Percentage weergeven",description:"Indien ingeschakeld, wordt het resterende tonerpercentage naast de niveaubalk weergegeven."},black_as_white:{label:"Zwart als wit weergeven",description:"Indien ingeschakeld, wordt de zwarte tonerniveaubalk in witte kleur weergegeven."}},Ue={editor:Te},Ne={show_percent:{label:"Vis prosentverdi",description:"Når aktivert, vises prosentandelen gjenværende toner ved siden av nivålinjen."},black_as_white:{label:"Vis svart som hvit",description:"Når aktivert, vises den svarte tonernivålinjen i hvit farge."}},He={editor:Ne},Re={show_percent:{label:"Pokaż wartość procentową",description:"Gdy włączone, wyświetla procentową wartość pozostałego tonera obok paska poziomu."},black_as_white:{label:"Wyświetlaj czarny jako biały",description:"Gdy włączone, pasek poziomu czarnego tonera jest wyświetlany w kolorze białym."}},Ie={editor:Re},De={show_percent:{label:"Mostrar valor percentual",description:"Se ativado, mostra a percentagem de toner restante ao lado da barra de nível."},black_as_white:{label:"Exibir preto como branco",description:"Se ativado, a barra de nível do toner preto é exibida em branco."}},Le={editor:De},We={show_percent:{label:"Zobraziť percentá",description:"Ak je povolené, zobrazí percentuálnu hodnotu zostávajúceho tonera vedľa ukazovateľa hladiny."},black_as_white:{label:"Zobraziť čierny ako biely",description:"Ak je povolené, ukazovateľ hladiny čierneho tonera sa zobrazí bielou farbou."}},Be={editor:We},Ve={show_percent:{label:"Visa procentvärde",description:"När aktiverat visas den återstående tonerns procentandel bredvid nivåindikatorn."},black_as_white:{label:"Visa svart som vitt",description:"När aktiverat visas den svarta tonernivåindikatorn i vit färg."}},qe={editor:Ve},Ze={show_percent:{label:"Показувати відсоткове значення",description:"Якщо увімкнено, поруч зі шкалою рівня тонера відображається відсоток тонера, що залишився."},black_as_white:{label:"Відображати чорний як білий",description:"Якщо увімкнено, шкала рівня чорного тонера відображається білим кольором."}},Fe={editor:Ze};const Ge={cs:Object.freeze({__proto__:null,default:ye,editor:me}),de:Object.freeze({__proto__:null,default:Ae,editor:we}),en:Object.freeze({__proto__:null,default:xe,editor:ke}),es:Object.freeze({__proto__:null,default:Ee,editor:Se}),fr:Object.freeze({__proto__:null,default:Ce,editor:ze}),hu:Object.freeze({__proto__:null,default:Oe,editor:Pe}),it:Object.freeze({__proto__:null,default:Me,editor:je}),nl:Object.freeze({__proto__:null,default:Ue,editor:Te}),no:Object.freeze({__proto__:null,default:He,editor:Ne}),pl:Object.freeze({__proto__:null,default:Ie,editor:Re}),pt:Object.freeze({__proto__:null,default:Le,editor:De}),sk:Object.freeze({__proto__:null,default:Be,editor:We}),sv:Object.freeze({__proto__:null,default:qe,editor:Ve}),uk:Object.freeze({__proto__:null,default:Fe,editor:Ze})};function Ke(e,t){const r=e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,Ge[t]);return"string"==typeof r?r:void 0}const Je={cyan:"rgba(0, 255, 255, 0.7)",magenta:"rgba(255, 0, 255, 0.7)",yellow:"rgba(255, 255, 0, 0.7)",black:"var(--primary-text-color)"};let Ye=class extends ae{constructor(){super(...arguments),this.config={}}setConfig(e){this.config={...e}}static get styles(){return n`
      .section-label {
        font-size: var(--ha-font-size-s, 12px);
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin: 8px 0;
      }
      .source-banner {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        border-radius: 8px;
        padding: 8px 12px;
        margin-bottom: 12px;
        font-size: var(--ha-font-size-m, 14px);
        background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        color: var(--primary-text-color);
      }
      .source-banner .secondary {
        font-size: var(--ha-font-size-s, 12px);
        color: var(--secondary-text-color);
      }
      .source-row {
        display: grid;
        grid-template-columns: 92px 1fr auto;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .swatch-col {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .swatch {
        width: 14px;
        height: 14px;
        border-radius: 4px;
        flex: none;
        box-shadow: inset 0 0 0 1px rgba(127, 127, 127, 0.4);
      }
      .row-tail {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: flex-end;
        min-width: 92px;
      }
      .chip {
        font-size: 11px;
        font-weight: 500;
        border-radius: 999px;
        padding: 3px 9px;
        white-space: nowrap;
      }
      .chip.auto {
        background-color: rgba(var(--rgb-state-active-color, 67, 160, 71), 0.16);
        color: var(--state-active-color, var(--success-color, #2e7d32));
      }
      .chip.manual {
        background-color: rgba(255, 152, 0, 0.16);
        color: var(--warning-color, #b26a00);
      }
      .reset-button {
        border: none;
        background: none;
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        padding: 0;
        color: var(--secondary-text-color);
      }
      .reset-button:hover {
        background-color: rgba(127, 127, 127, 0.15);
      }
      .reset-button:focus-visible {
        outline: 2px solid var(--primary-color);
      }
      .reset-button svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
      }
      ha-selector {
        display: block;
        min-width: 0;
      }
      .options {
        border-top: 1px solid var(--divider-color);
        margin-top: 8px;
      }
    `}get _autoEntities(){return this.hass?ve(this.hass,this.context?.entity_id):{}}get _hasAttributeContract(){const e=this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0;return!!e&&"printer"===e.attributes?.domain&&"number"==typeof e.attributes?.black_level}get _deviceName(){const e=this.hass,t=this.context?.entity_id?e?.entities?.[this.context.entity_id]?.device_id:void 0,r=t?e?.devices?.[t]:void 0;return r?.name_by_user??r?.name}render(){const e=(t=this.hass,function(e){let r=Ke(e,t?.locale.language??"en");return r||(r=Ke(e,"en")),r||e});var t;const r=this._autoEntities,o=Object.keys(r).length;let i;i=this._hasAttributeContract&&0===o?e("editor.sources.mode_attributes"):e(o>0?"editor.sources.mode_auto":"editor.sources.mode_none");const s=o>0?this._deviceName:void 0;return B`
      <div class="section-label">${e("editor.sources.title")}</div>
      <div class="source-banner">
        <div>
          <div>${i}</div>
          ${s?B`<div class="secondary">${s}</div>`:q}
        </div>
      </div>
      ${ge.map(t=>this.renderSourceRow(t,e))}
      <div class="options">
        <ha-settings-row>
          <span slot="heading" data-for="show_percent">${e("editor.show_percent.label")}</span>
          <span slot="description" data-for="show_percent">${e("editor.show_percent.description")}</span>
          <ha-switch id="show_percent" @change=${this._onShowPercentChange} .checked=${_e(this.config,"show_percent",!0)} name="show_percent"></ha-switch>
        </ha-settings-row>
        <ha-settings-row>
          <span slot="heading" data-for="black_as_white">${e("editor.black_as_white.label")}</span>
          <span slot="description" data-for="black_as_white">${e("editor.black_as_white.description")}</span>
          <ha-switch id="black_as_white" @change=${this._onBlackAsWhiteChange} .checked=${_e(this.config,"black_as_white",!0)} name="black_as_white"></ha-switch>
        </ha-settings-row>
      </div>
    `}renderSourceRow(e,t){const r=this.config[`${e}_entity`],o=this._autoEntities[e],i=r??o??"";let s=q;return r?s=B`<span class="chip manual">${t("editor.sources.manual")}</span>`:o&&(s=B`<span class="chip auto">${t("editor.sources.auto")}</span>`),B`
      <div class="source-row">
        <div class="swatch-col">
          <span class="swatch" style="background-color: ${Je[e]}"></span>
          <span>${t("editor.colors."+e)}</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:"sensor"}}}
          .value=${i}
          .label=${t("editor.sources.sensor")}
          @value-changed=${t=>this._onSourceChange(e,t)}
        ></ha-selector>
        <div class="row-tail">
          ${s}
          ${r?B`
                <button class="reset-button" title=${t("editor.sources.reset")} aria-label=${t("editor.sources.reset")} @click=${()=>this._onSourceReset(e)}>
                  <svg viewBox="0 0 24 24"><path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" /></svg>
                </button>
              `:q}
        </div>
      </div>
    `}_onSourceChange(e,t){t.stopPropagation();const r=t.detail?.value||void 0,o={...this.config};r&&r!==this._autoEntities[e]?o[`${e}_entity`]=r:delete o[`${e}_entity`],this._updateConfig(o)}_onSourceReset(e){const t={...this.config};delete t[`${e}_entity`],this._updateConfig(t)}_onShowPercentChange(e){const t=e.target.checked;this._updateConfig({...this.config,show_percent:t})}_onBlackAsWhiteChange(e){const t=e.target.checked;this._updateConfig({...this.config,black_as_white:t})}_updateConfig(e){this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};e([pe({attribute:!1})],Ye.prototype,"hass",void 0),e([pe({attribute:!1})],Ye.prototype,"context",void 0),e([pe({type:Object})],Ye.prototype,"config",void 0),Ye=e([ce("printer-toner-level-feature-config")],Ye),function(){const e="padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;",t=`background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${e}`,r=`background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${e}`;console.groupCollapsed("%cPrinter toner Tile card feature%c1.0.7",t,r),console.info("A Home Assistant Lovelace custom card feature to display printer toner levels"),console.info(`Github: ${be}`),console.groupEnd()}();let Qe=class extends ae{static getConfigElement(){return document.createElement("printer-toner-level-feature-config")}static getStubConfig(){return{type:"custom:printer-toner-level-feature"}}get stateObj(){return this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0}set stateObj(e){}get tonerSources(){return this.hass?function(e,t,r){const o=t?e.states[t]:void 0,i=ve(e,t),s={};for(const t of ge){const n=r?.[`${t}_entity`];if(n){s[t]=$e(e,t,n,"manual");continue}const a=o?.attributes?.[t+"_level"];if("number"==typeof a){s[t]={color:t,origin:"attribute",level:a};continue}const l=i[t];l&&(s[t]=$e(e,t,l,"auto"))}return s}(this.hass,this.context?.entity_id,this.config):{}}get isColorPrinter(){return!!this.tonerSources.cyan}getCardSize(){return this.isColorPrinter?3:2}setConfig(e){this.config=e}render(){const e=this.hass&&this.config&&this.context?this.tonerSources:{};if(!e.black)return B`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;const t=_e(this.config,"black_as_white",!0);return e.cyan?B`
        <div class="color toners${t?" black-as-white":""}">
          ${this.renderToner(e.cyan)} ${this.renderToner(e.magenta)} ${this.renderToner(e.yellow)} ${this.renderToner(e.black)}
        </div>
      `:B` <div class="toners${t?" black-as-white":""}">${this.renderToner(e.black)}</div> `}renderToner(e){if(!e)return B``;const t=e.level??0,r=_e(this.config,"show_percent",!0);return B`
      <div class="${e.color} toner">
        <div class="background">
          <div class="level" style="width: ${t}%;"></div>
        </div>
        ${r?B`<div class="percent">${t}</div>`:q}
      </div>
    `}static get styles(){return ue}};e([pe({attribute:!1})],Qe.prototype,"hass",void 0),e([pe({attribute:!1})],Qe.prototype,"config",void 0),e([pe({attribute:!1})],Qe.prototype,"context",void 0),Qe=e([ce("printer-toner-level-feature")],Qe),window.customCardFeatures||=[],window.customCardFeatures.push({type:"printer-toner-level-feature",name:"Printer toner level",isSupported:(e,t)=>{const r=t.entity_id?e.states[t.entity_id]:void 0;return!(!r||"printer"!==r.attributes?.domain||"number"!=typeof r.attributes?.black_level)||!!ve(e,t.entity_id).black},configurable:!0});export{Qe as PrinterTonerLevelFeature};
