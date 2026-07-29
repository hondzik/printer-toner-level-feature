function e(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let s=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(t,e))}return e}toString(){return this.cssText}};const i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new s(o,e,r)},a=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,b=_.trustedTypes,g=b?b.emptyScript:"",f=_.reactiveElementPolyfillSupport,m=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},y=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const s=r?.call(this);n?.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(o)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of r){const r=document.createElement("style"),n=t.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=o.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=r;const s=n.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,o,r=!1,n){if(void 0!==e){const s=this.constructor;if(!1===r&&(n=this[e]),o??=s.getPropertyOptions(e),!((o.hasChanged??y)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:n},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==n||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,f?.({ReactiveElement:$}),(_.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,A=e=>e,z=k.trustedTypes,S=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,j=`<${C}>`,P=document,O=()=>P.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,K=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),V=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),F=new WeakMap,q=P.createTreeWalker(P,129);function G(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const o=e.length-1,r=[];let n,s=2===t?"<svg>":3===t?"<math>":"",i=U;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(i.lastIndex=d,l=i.exec(o),null!==l);)d=i.lastIndex,i===U?"!--"===l[1]?i=R:void 0!==l[1]?i=H:void 0!==l[2]?(K.test(l[2])&&(n=RegExp("</"+l[2],"g")),i=I):void 0!==l[3]&&(i=I):i===I?">"===l[0]?(i=n??U,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,a=l[1],i=void 0===l[3]?I:'"'===l[3]?L:D):i===L||i===D?i=I:i===R||i===H?i=U:(i=I,n=void 0);const h=i===I&&e[t+1].startsWith("/>")?" ":"";s+=i===U?o+j:c>=0?(r.push(a),o.slice(0,c)+x+o.slice(c)+E+h):o+E+(-2===c?t:h)}return[G(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class J{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,s=0;const i=e.length-1,a=this.parts,[l,c]=Z(e,t);if(this.el=J.createElement(l,o),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=q.nextNode())&&a.length<i;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(x)){const t=c[s++],o=r.getAttribute(e).split(E),i=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:i[2],strings:o,ctor:"."===i[1]?te:"?"===i[1]?oe:"@"===i[1]?re:ee}),r.removeAttribute(e)}else e.startsWith(E)&&(a.push({type:6,index:n}),r.removeAttribute(e));if(K.test(r.tagName)){const e=r.textContent.split(E),t=e.length-1;if(t>0){r.textContent=z?z.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],O()),q.nextNode(),a.push({type:2,index:++n});r.append(e[t],O())}}}else if(8===r.nodeType)if(r.data===C)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(E,e+1));)a.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function Y(e,t,o=e,r){if(t===V)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl;const s=M(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e),n._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=Y(e,n._$AS(e,t.values),n,r)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??P).importNode(t,!0);q.currentNode=r;let n=q.nextNode(),s=0,i=0,a=o[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new X(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new ne(n,this,e)),this._$AV.push(t),a=o[++i]}s!==a?.index&&(n=q.nextNode(),s++)}return q.currentNode=P,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),M(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=J.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Q(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new J(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const n of e)r===t.length?t.push(o=new X(this.O(O()),this.O(O()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}_$AI(e,t=this,o,r){const n=this.strings;let s=!1;if(void 0===n)e=Y(this,e,t,0),s=!M(e)||e!==this._$AH&&e!==V,s&&(this._$AH=e);else{const r=e;let i,a;for(e=n[0],i=0;i<n.length-1;i++)a=Y(this,r[o+i],t,i),a===V&&(a=this._$AH[i]),s||=!M(a)||a!==this._$AH[i],a===B?e=B:e!==B&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}s&&!r&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class re extends ee{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??B)===V)return;const o=this._$AH,r=e===B&&o!==B||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==B&&(o===B||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const se=k.litHtmlPolyfillSupport;se?.(J,X),(k.litHtmlVersions??=[]).push("3.3.3");const ie=globalThis;class ae extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=o?.renderBefore??null;r._$litPart$=n=new X(t.insertBefore(O(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ae._$litElement$=!0,ae.finalized=!0,ie.litElementHydrateSupport?.({LitElement:ae});const le=ie.litElementPolyfillSupport;le?.({LitElement:ae}),(ie.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},he=(e=de,t,o)=>{const{kind:r,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e,!0,o)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=o;return function(o){const n=this[r];t.call(this,o),this.requestUpdate(r,n,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};function ue(e){return(t,o)=>"object"==typeof o?he(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}var pe={show_percent:{label:"Zobrazit procenta",description:"Pokud je povoleno, zobrazí procentuální hodnotu zbývajícího toneru vedle ukazatele hladiny."},black_as_white:{label:"Zobrazit černý jako bílý",description:"Pokud je povoleno, ukazatel hladiny černého toneru se zobrazí bílou barvou."},sources:{title:"Zdroje toneru",mode_attributes:"Hodnoty pocházejí z atributů entity dlaždice",mode_auto:"Senzory kazet automaticky rozpoznány ze zařízení tiskárny",mode_none:"Nebyly rozpoznány žádné senzory kazet — přiřaďte je ručně",auto:"Auto",manual:"Ručně",reset:"Obnovit rozpoznaný senzor",sensor:"Senzor"},colors:{cyan:"Azurová",magenta:"Purpurová",yellow:"Žlutá",black:"Černá"}},_e={last_known:"Poslední známá hodnota"},be={editor:pe,feature:_e},ge={show_percent:{label:"Prozentwert anzeigen",description:"Wenn aktiviert, wird der Prozentsatz des verbleibenden Toners neben der Füllstandsanzeige angezeigt."},black_as_white:{label:"Schwarz als Weiß anzeigen",description:"Wenn aktiviert, wird die Füllstandsanzeige für schwarzen Toner in Weiß dargestellt."},sources:{title:"Tonerquellen",mode_attributes:"Werte kommen aus den Attributen der Kachel-Entität",mode_auto:"Kartuschen-Sensoren automatisch am Drucker-Gerät erkannt",mode_none:"Keine Kartuschen-Sensoren erkannt — bitte manuell zuordnen",auto:"Auto",manual:"Manuell",reset:"Auf erkannten Sensor zurücksetzen",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gelb",black:"Schwarz"}},fe={last_known:"Letzter bekannter Wert"},me={editor:ge,feature:fe},ve={show_percent:{label:"Show percent value",description:"When enabled, shows the percentage of toner remaining next to the toner level bar."},black_as_white:{label:"Display black as white",description:"When enabled, displays the black toner level bar in white color."},sources:{title:"Toner sources",mode_attributes:"Values come from the tile entity's attributes",mode_auto:"Cartridge sensors detected automatically from the printer device",mode_none:"No cartridge sensors detected — assign them manually",auto:"Auto",manual:"Manual",reset:"Reset to detected sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Yellow",black:"Black"}},ye={last_known:"Last known value"},we={editor:ve,feature:ye},$e={show_percent:{label:"Mostrar valor porcentual",description:"Si está habilitado, muestra el porcentaje de tóner restante junto a la barra de nivel."},black_as_white:{label:"Mostrar negro como blanco",description:"Si está habilitado, la barra de nivel del tóner negro se muestra en blanco."},sources:{title:"Fuentes de tóner",mode_attributes:"Los valores provienen de los atributos de la entidad de la tarjeta",mode_auto:"Sensores de cartuchos detectados automáticamente desde el dispositivo de la impresora",mode_none:"No se detectaron sensores de cartuchos — asígnalos manualmente",auto:"Auto",manual:"Manual",reset:"Restablecer al sensor detectado",sensor:"Sensor"},colors:{cyan:"Cian",magenta:"Magenta",yellow:"Amarillo",black:"Negro"}},ke={last_known:"Último valor conocido"},Ae={editor:$e,feature:ke},ze={show_percent:{label:"Afficher le pourcentage",description:"Si activé, affiche le pourcentage de toner restant à côté de la barre de niveau."},black_as_white:{label:"Afficher le noir en blanc",description:"Si activé, la barre de niveau du toner noir est affichée en blanc."},sources:{title:"Sources de toner",mode_attributes:"Les valeurs proviennent des attributs de l'entité de la carte",mode_auto:"Capteurs de cartouches détectés automatiquement depuis l'appareil imprimante",mode_none:"Aucun capteur de cartouche détecté — attribuez-les manuellement",auto:"Auto",manual:"Manuel",reset:"Réinitialiser au capteur détecté",sensor:"Capteur"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Jaune",black:"Noir"}},Se={last_known:"Dernière valeur connue"},xe={editor:ze,feature:Se},Ee={show_percent:{label:"Százalék megjelenítése",description:"Ha engedélyezve van, a fennmaradó festék százalékos értéke megjelenik a szintjelző sáv mellett."},black_as_white:{label:"Fekete megjelenítése fehérként",description:"Ha engedélyezve van, a fekete festékszint sáv fehér színben jelenik meg."},sources:{title:"Tonerforrások",mode_attributes:"Az értékek a csempe entitás attribútumaiból származnak",mode_auto:"A patronérzékelők automatikusan felismerve a nyomtató eszközről",mode_none:"Nem található patronérzékelő — rendelje hozzá kézzel",auto:"Auto",manual:"Kézi",reset:"Visszaállítás a felismert érzékelőre",sensor:"Érzékelő"},colors:{cyan:"Cián",magenta:"Bíbor",yellow:"Sárga",black:"Fekete"}},Ce={last_known:"Utolsó ismert érték"},je={editor:Ee,feature:Ce},Pe={show_percent:{label:"Mostra valore percentuale",description:"Se abilitato, mostra la percentuale di toner rimanente accanto alla barra del livello."},black_as_white:{label:"Mostra nero come bianco",description:"Se abilitato, la barra del livello del toner nero viene mostrata in bianco."},sources:{title:"Sorgenti del toner",mode_attributes:"I valori provengono dagli attributi dell'entità della scheda",mode_auto:"Sensori delle cartucce rilevati automaticamente dal dispositivo stampante",mode_none:"Nessun sensore cartuccia rilevato — assegnali manualmente",auto:"Auto",manual:"Manuale",reset:"Ripristina il sensore rilevato",sensor:"Sensore"},colors:{cyan:"Ciano",magenta:"Magenta",yellow:"Giallo",black:"Nero"}},Oe={last_known:"Ultimo valore noto"},Me={editor:Pe,feature:Oe},Te={show_percent:{label:"Percentage weergeven",description:"Indien ingeschakeld, wordt het resterende tonerpercentage naast de niveaubalk weergegeven."},black_as_white:{label:"Zwart als wit weergeven",description:"Indien ingeschakeld, wordt de zwarte tonerniveaubalk in witte kleur weergegeven."},sources:{title:"Tonerbronnen",mode_attributes:"Waarden komen uit de attributen van de tegel-entiteit",mode_auto:"Cartridgesensoren automatisch gedetecteerd via het printerapparaat",mode_none:"Geen cartridgesensoren gedetecteerd — wijs ze handmatig toe",auto:"Auto",manual:"Handmatig",reset:"Terugzetten naar gedetecteerde sensor",sensor:"Sensor"},colors:{cyan:"Cyaan",magenta:"Magenta",yellow:"Geel",black:"Zwart"}},Ne={last_known:"Laatst bekende waarde"},Ue={editor:Te,feature:Ne},Re={show_percent:{label:"Vis prosentverdi",description:"Når aktivert, vises prosentandelen gjenværende toner ved siden av nivålinjen."},black_as_white:{label:"Vis svart som hvit",description:"Når aktivert, vises den svarte tonernivålinjen i hvit farge."},sources:{title:"Tonerkilder",mode_attributes:"Verdiene hentes fra attributtene til kortets entitet",mode_auto:"Kassettsensorer oppdaget automatisk fra skriverenheten",mode_none:"Ingen kassettsensorer oppdaget — tilordne dem manuelt",auto:"Auto",manual:"Manuell",reset:"Tilbakestill til oppdaget sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gul",black:"Svart"}},He={last_known:"Siste kjente verdi"},Ie={editor:Re,feature:He},De={show_percent:{label:"Pokaż wartość procentową",description:"Gdy włączone, wyświetla procentową wartość pozostałego tonera obok paska poziomu."},black_as_white:{label:"Wyświetlaj czarny jako biały",description:"Gdy włączone, pasek poziomu czarnego tonera jest wyświetlany w kolorze białym."},sources:{title:"Źródła tonera",mode_attributes:"Wartości pochodzą z atrybutów encji kafelka",mode_auto:"Czujniki wkładów wykryte automatycznie na urządzeniu drukarki",mode_none:"Nie wykryto czujników wkładów — przypisz je ręcznie",auto:"Auto",manual:"Ręcznie",reset:"Przywróć wykryty czujnik",sensor:"Czujnik"},colors:{cyan:"Cyjan",magenta:"Magenta",yellow:"Żółty",black:"Czarny"}},Le={last_known:"Ostatnia znana wartość"},Ke={editor:De,feature:Le},We={show_percent:{label:"Mostrar valor percentual",description:"Se ativado, mostra a percentagem de toner restante ao lado da barra de nível."},black_as_white:{label:"Exibir preto como branco",description:"Se ativado, a barra de nível do toner preto é exibida em branco."},sources:{title:"Fontes de toner",mode_attributes:"Os valores vêm dos atributos da entidade do cartão",mode_auto:"Sensores de cartuchos detectados automaticamente a partir do dispositivo da impressora",mode_none:"Nenhum sensor de cartucho detectado — atribua-os manualmente",auto:"Auto",manual:"Manual",reset:"Redefinir para o sensor detectado",sensor:"Sensor"},colors:{cyan:"Ciano",magenta:"Magenta",yellow:"Amarelo",black:"Preto"}},Ve={last_known:"Último valor conhecido"},Be={editor:We,feature:Ve},Fe={show_percent:{label:"Zobraziť percentá",description:"Ak je povolené, zobrazí percentuálnu hodnotu zostávajúceho tonera vedľa ukazovateľa hladiny."},black_as_white:{label:"Zobraziť čierny ako biely",description:"Ak je povolené, ukazovateľ hladiny čierneho tonera sa zobrazí bielou farbou."},sources:{title:"Zdroje tonera",mode_attributes:"Hodnoty pochádzajú z atribútov entity dlaždice",mode_auto:"Senzory kaziet automaticky rozpoznané zo zariadenia tlačiarne",mode_none:"Nenašli sa žiadne senzory kaziet — priraďte ich ručne",auto:"Auto",manual:"Ručne",reset:"Obnoviť rozpoznaný senzor",sensor:"Senzor"},colors:{cyan:"Azúrová",magenta:"Purpurová",yellow:"Žltá",black:"Čierna"}},qe={last_known:"Posledná známa hodnota"},Ge={editor:Fe,feature:qe},Ze={show_percent:{label:"Visa procentvärde",description:"När aktiverat visas den återstående tonerns procentandel bredvid nivåindikatorn."},black_as_white:{label:"Visa svart som vitt",description:"När aktiverat visas den svarta tonernivåindikatorn i vit färg."},sources:{title:"Tonerkällor",mode_attributes:"Värdena kommer från kortentitetens attribut",mode_auto:"Kassettsensorer upptäcktes automatiskt från skrivarenheten",mode_none:"Inga kassettsensorer hittades — tilldela dem manuellt",auto:"Auto",manual:"Manuell",reset:"Återställ till upptäckt sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gul",black:"Svart"}},Je={last_known:"Senast kända värde"},Ye={editor:Ze,feature:Je},Qe={show_percent:{label:"Показувати відсоткове значення",description:"Якщо увімкнено, поруч зі шкалою рівня тонера відображається відсоток тонера, що залишився."},black_as_white:{label:"Відображати чорний як білий",description:"Якщо увімкнено, шкала рівня чорного тонера відображається білим кольором."},sources:{title:"Джерела тонера",mode_attributes:"Значення беруться з атрибутів сутності плитки",mode_auto:"Датчики картриджів автоматично виявлено з пристрою принтера",mode_none:"Датчики картриджів не виявлено — призначте їх вручну",auto:"Авто",manual:"Вручну",reset:"Скинути до виявленого датчика",sensor:"Датчик"},colors:{cyan:"Блакитний",magenta:"Пурпуровий",yellow:"Жовтий",black:"Чорний"}},Xe={last_known:"Останнє відоме значення"},et={editor:Qe,feature:Xe};const tt={cs:Object.freeze({__proto__:null,default:be,editor:pe,feature:_e}),de:Object.freeze({__proto__:null,default:me,editor:ge,feature:fe}),en:Object.freeze({__proto__:null,default:we,editor:ve,feature:ye}),es:Object.freeze({__proto__:null,default:Ae,editor:$e,feature:ke}),fr:Object.freeze({__proto__:null,default:xe,editor:ze,feature:Se}),hu:Object.freeze({__proto__:null,default:je,editor:Ee,feature:Ce}),it:Object.freeze({__proto__:null,default:Me,editor:Pe,feature:Oe}),nl:Object.freeze({__proto__:null,default:Ue,editor:Te,feature:Ne}),no:Object.freeze({__proto__:null,default:Ie,editor:Re,feature:He}),pl:Object.freeze({__proto__:null,default:Ke,editor:De,feature:Le}),pt:Object.freeze({__proto__:null,default:Be,editor:We,feature:Ve}),sk:Object.freeze({__proto__:null,default:Ge,editor:Fe,feature:qe}),sv:Object.freeze({__proto__:null,default:Ye,editor:Ze,feature:Je}),uk:Object.freeze({__proto__:null,default:et,editor:Qe,feature:Xe})};function ot(e,t){const o=e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,tt[t]);return"string"==typeof o?o:void 0}function rt(e){return function(t){let o=ot(t,e?.locale.language??"en");return o||(o=ot(t,"en")),o||t}}const nt=i`
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

  .toner.stale .level {
    opacity: 0.55;
  }

  .toner.stale .percent {
    opacity: 0.7;
    font-style: italic;
  }
`;function st(e,t,o){const r=e?.[t];return void 0!==r?!!r:o}var it="https://github.com/hondzik/printer-toner-level-feature";async function at(e,t,o,r){const n=new Date(Date.now()-86400*r*1e3).toISOString(),s=await e.callWS({type:"recorder/statistics_during_period",start_time:n,statistic_ids:[t],period:o,types:["mean"]}),i=s?.[t]??[];for(let e=i.length-1;e>=0;e--){const t=i[e].mean;if("number"==typeof t)return{level:Math.round(t),start:i[e].start}}}const lt=["cyan","magenta","yellow","black"],ct={cyan:["cyan"],magenta:["magenta"],yellow:["yellow"],black:["black"]};function dt(e,t){const o=e.entities,r=t?o?.[t]?.device_id:void 0;if(!o||!r)return{};const n=Object.values(o).filter(e=>e.device_id===r&&e.entity_id.startsWith("sensor.")).map(t=>({entityId:t.entity_id,stateObj:e.states[t.entity_id]})).filter(({stateObj:e})=>!!e&&("%"===e.attributes?.unit_of_measurement||("unavailable"===e.state||"unknown"===e.state))).sort((e,t)=>e.entityId.localeCompare(t.entityId)),s={},i=new Set;for(const e of lt){const t=n.find(({entityId:t,stateObj:o})=>{if(i.has(t))return!1;const r=`${o?.attributes?.friendly_name??""} ${t}`.toLowerCase();return ct[e].some(e=>r.includes(e))});t&&(s[e]=t.entityId,i.add(t.entityId))}return s}function ht(e,t,o,r){const n=Number(e.states[o]?.state);return{color:t,origin:r,entityId:o,level:Number.isFinite(n)?n:void 0}}const ut={cyan:"rgba(0, 255, 255, 0.7)",magenta:"rgba(255, 0, 255, 0.7)",yellow:"rgba(255, 255, 0, 0.7)",black:"var(--primary-text-color)"};let pt=class extends ae{constructor(){super(...arguments),this.config={}}setConfig(e){this.config={...e}}static get styles(){return i`
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
        background-color: rgba(76, 175, 80, 0.16);
        color: var(--success-color, #2e7d32);
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
    `}get _autoEntities(){return this.hass?dt(this.hass,this.context?.entity_id):{}}get _hasAttributeContract(){const e=this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0;return!!e&&"printer"===e.attributes?.domain&&"number"==typeof e.attributes?.black_level}get _deviceName(){const e=this.hass,t=this.context?.entity_id?e?.entities?.[this.context.entity_id]?.device_id:void 0,o=t?e?.devices?.[t]:void 0;return o?.name_by_user??o?.name}render(){const e=rt(this.hass),t=this._autoEntities,o=Object.keys(t).length;let r;r=this._hasAttributeContract&&0===o?e("editor.sources.mode_attributes"):e(o>0?"editor.sources.mode_auto":"editor.sources.mode_none");const n=o>0?this._deviceName:void 0;return W`
      <div class="section-label">${e("editor.sources.title")}</div>
      <div class="source-banner">
        <div>
          <div>${r}</div>
          ${n?W`<div class="secondary">${n}</div>`:B}
        </div>
      </div>
      ${lt.map(t=>this.renderSourceRow(t,e))}
      <div class="options">
        <ha-settings-row>
          <span slot="heading" data-for="show_percent">${e("editor.show_percent.label")}</span>
          <span slot="description" data-for="show_percent">${e("editor.show_percent.description")}</span>
          <ha-switch id="show_percent" @change=${this._onShowPercentChange} .checked=${st(this.config,"show_percent",!0)} name="show_percent"></ha-switch>
        </ha-settings-row>
        <ha-settings-row>
          <span slot="heading" data-for="black_as_white">${e("editor.black_as_white.label")}</span>
          <span slot="description" data-for="black_as_white">${e("editor.black_as_white.description")}</span>
          <ha-switch id="black_as_white" @change=${this._onBlackAsWhiteChange} .checked=${st(this.config,"black_as_white",!0)} name="black_as_white"></ha-switch>
        </ha-settings-row>
      </div>
    `}renderSourceRow(e,t){const o=this.config[`${e}_entity`],r=this._autoEntities[e],n=o??r??"";let s=B;return o?s=W`<span class="chip manual">${t("editor.sources.manual")}</span>`:r&&(s=W`<span class="chip auto">${t("editor.sources.auto")}</span>`),W`
      <div class="source-row">
        <div class="swatch-col">
          <span class="swatch" style="background-color: ${ut[e]}"></span>
          <span>${t("editor.colors."+e)}</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:"sensor"}}}
          .value=${n}
          .label=${t("editor.sources.sensor")}
          .required=${!1}
          @value-changed=${t=>this._onSourceChange(e,t)}
        ></ha-selector>
        <div class="row-tail">
          ${s}
          ${o?W`
                <button class="reset-button" title=${t("editor.sources.reset")} aria-label=${t("editor.sources.reset")} @click=${()=>this._onSourceReset(e)}>
                  <svg viewBox="0 0 24 24"><path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" /></svg>
                </button>
              `:B}
        </div>
      </div>
    `}_onSourceChange(e,t){t.stopPropagation();const o=t.detail?.value||void 0,r={...this.config};o&&o!==this._autoEntities[e]?r[`${e}_entity`]=o:delete r[`${e}_entity`],this._updateConfig(r)}_onSourceReset(e){const t={...this.config};delete t[`${e}_entity`],this._updateConfig(t)}_onShowPercentChange(e){const t=e.target.checked;this._updateConfig({...this.config,show_percent:t})}_onBlackAsWhiteChange(e){const t=e.target.checked;this._updateConfig({...this.config,black_as_white:t})}_updateConfig(e){this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};e([ue({attribute:!1})],pt.prototype,"hass",void 0),e([ue({attribute:!1})],pt.prototype,"context",void 0),e([ue({type:Object})],pt.prototype,"config",void 0),pt=e([ce("printer-toner-level-feature-config")],pt),function(){const e="padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;",t=`background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${e}`,o=`background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${e}`;console.groupCollapsed("%cPrinter toner Tile card feature%c1.0.7",t,o),console.info("A Home Assistant Lovelace custom card feature to display printer toner levels"),console.info(`Github: ${it}`),console.groupEnd()}();let _t=class extends ae{constructor(){super(...arguments),this._lastKnown={},this._lastKnownFetching=new Set}static getConfigElement(){return document.createElement("printer-toner-level-feature-config")}static getStubConfig(){return{type:"custom:printer-toner-level-feature"}}get stateObj(){return this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0}set stateObj(e){}get tonerSources(){return this.hass?function(e,t,o){const r=t?e.states[t]:void 0,n=dt(e,t),s={};for(const t of lt){const i=o?.[`${t}_entity`];if(i){s[t]=ht(e,t,i,"manual");continue}const a=r?.attributes?.[t+"_level"];if("number"==typeof a){s[t]={color:t,origin:"attribute",level:a};continue}const l=n[t];l&&(s[t]=ht(e,t,l,"auto"))}return s}(this.hass,this.context?.entity_id,this.config):{}}get isColorPrinter(){return!!this.tonerSources.cyan}getCardSize(){return this.isColorPrinter?3:2}setConfig(e){this.config=e}render(){const e=this.hass&&this.config&&this.context?this.tonerSources:{};if(!e.black)return W`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;const t=st(this.config,"black_as_white",!0);return e.cyan?W`
        <div class="color toners${t?" black-as-white":""}">
          ${this.renderToner(e.cyan)} ${this.renderToner(e.magenta)} ${this.renderToner(e.yellow)} ${this.renderToner(e.black)}
        </div>
      `:W` <div class="toners${t?" black-as-white":""}">${this.renderToner(e.black)}</div> `}renderToner(e){if(!e)return W``;let t,o=e.level;void 0===o&&e.entityId&&(this._queueLastKnown(e.entityId),t=this._lastKnown[e.entityId]?.value,o=t?.level);const r=st(this.config,"show_percent",!0),n=t?`${rt(this.hass)("feature.last_known")}: ${new Date(t.start).toLocaleDateString(this.hass?.locale?.language)}`:void 0;return W`
      <div class="${e.color} toner${t?" stale":""}" title=${n??B}>
        <div class="background">
          <div class="level" style="width: ${o??0}%;"></div>
        </div>
        ${r?W`<div class="percent">${o??0}</div>`:B}
      </div>
    `}_queueLastKnown(e){if(!this.hass||this._lastKnownFetching.has(e))return;const t=this._lastKnown[e];t&&Date.now()-t.fetchedAt<18e5||(this._lastKnownFetching.add(e),async function(e,t){return await at(e,t,"hour",365)??await at(e,t,"5minute",10)}(this.hass,e).then(t=>{this._lastKnown={...this._lastKnown,[e]:{value:t,fetchedAt:Date.now()}}}).catch(()=>{this._lastKnown={...this._lastKnown,[e]:{fetchedAt:Date.now()}}}).finally(()=>{this._lastKnownFetching.delete(e)}))}static get styles(){return nt}};e([ue({attribute:!1})],_t.prototype,"hass",void 0),e([ue({attribute:!1})],_t.prototype,"config",void 0),e([ue({attribute:!1})],_t.prototype,"context",void 0),e([function(e){return ue({...e,state:!0,attribute:!1})}()],_t.prototype,"_lastKnown",void 0),_t=e([ce("printer-toner-level-feature")],_t),window.customCardFeatures||=[],window.customCardFeatures.push({type:"printer-toner-level-feature",name:"Printer toner level",isSupported:(e,t)=>{const o=t.entity_id?e.states[t.entity_id]:void 0;return!(!o||"printer"!==o.attributes?.domain||"number"!=typeof o.attributes?.black_level)||!!dt(e,t.entity_id).black},configurable:!0});export{_t as PrinterTonerLevelFeature};
