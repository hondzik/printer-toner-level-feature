function e(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let i=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&r.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new i(o,e,n)},a=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,b=_.trustedTypes,g=b?b.emptyScript:"",f=_.reactiveElementPolyfillSupport,m=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},y=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&c(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const i=n?.call(this);r?.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(o)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of n){const n=document.createElement("style"),r=t.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=o.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=n;const i=r.fromAttribute(t,e.type);this[n]=i??this._$Ej?.get(n)??i,this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){const i=this.constructor;if(!1===n&&(r=this[e]),o??=i.getPropertyOptions(e),!((o.hasChanged??y)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:r},i){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==r||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,o,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[m("elementProperties")]=new Map,k[m("finalized")]=new Map,f?.({ReactiveElement:k}),(_.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,A=e=>e,z=$.trustedTypes,S=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,j=`<${E}>`,P=document,O=()=>P.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,D=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,K=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),B=new WeakMap,F=P.createTreeWalker(P,129);function G(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const o=e.length-1,n=[];let r,i=2===t?"<svg>":3===t?"<math>":"",s=U;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===U?"!--"===l[1]?s=R:void 0!==l[1]?s=H:void 0!==l[2]?(W.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=D):void 0!==l[3]&&(s=D):s===D?">"===l[0]?(s=r??U,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?D:'"'===l[3]?L:I):s===L||s===I?s=D:s===R||s===H?s=U:(s=D,r=void 0);const h=s===D&&e[t+1].startsWith("/>")?" ":"";i+=s===U?o+j:c>=0?(n.push(a),o.slice(0,c)+x+o.slice(c)+C+h):o+C+(-2===c?t:h)}return[G(e,i+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class J{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,i=0;const s=e.length-1,a=this.parts,[l,c]=Z(e,t);if(this.el=J.createElement(l,o),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=F.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(x)){const t=c[i++],o=n.getAttribute(e).split(C),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:s[2],strings:o,ctor:"."===s[1]?te:"?"===s[1]?oe:"@"===s[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:r}),n.removeAttribute(e));if(W.test(n.tagName)){const e=n.textContent.split(C),t=e.length-1;if(t>0){n.textContent=z?z.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],O()),F.nextNode(),a.push({type:2,index:++r});n.append(e[t],O())}}}else if(8===n.nodeType)if(n.data===E)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(C,e+1));)a.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function Q(e,t,o=e,n){if(t===V)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const i=M(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=Q(e,r._$AS(e,t.values),r,n)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??P).importNode(t,!0);F.currentNode=n;let r=F.nextNode(),i=0,s=0,a=o[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new X(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new re(r,this,e)),this._$AV.push(t),a=o[++s]}i!==a?.index&&(r=F.nextNode(),i++)}return F.currentNode=P,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),M(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=J.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Y(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new J(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new X(this.O(O()),this.O(O()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(e,t=this,o,n){const r=this.strings;let i=!1;if(void 0===r)e=Q(this,e,t,0),i=!M(e)||e!==this._$AH&&e!==V,i&&(this._$AH=e);else{const n=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=Q(this,n[o+s],t,s),a===V&&(a=this._$AH[s]),i||=!M(a)||a!==this._$AH[s],a===q?e=q:e!==q&&(e+=(a??"")+r[s+1]),this._$AH[s]=a}i&&!n&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ne extends ee{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??q)===V)return;const o=this._$AH,n=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==q&&(o===q||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const ie=$.litHtmlPolyfillSupport;ie?.(J,X),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;class ae extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new X(t.insertBefore(O(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ae._$litElement$=!0,ae.finalized=!0,se.litElementHydrateSupport?.({LitElement:ae});const le=se.litElementPolyfillSupport;le?.({LitElement:ae}),(se.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},he=(e=de,t,o)=>{const{kind:n,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e,!0,o)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e,!0,o)}}throw Error("Unsupported decorator location: "+n)};function ue(e){return(t,o)=>"object"==typeof o?he(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}var pe={show_percent:{label:"Zobrazit procenta",description:"Pokud je povoleno, zobrazí procentuální hodnotu zbývajícího toneru vedle ukazatele hladiny."},black_as_white:{label:"Zobrazit černý jako bílý",description:"Pokud je povoleno, ukazatel hladiny černého toneru se zobrazí bílou barvou."},tap_action:{label:"Akce při klepnutí",description:"Co se stane po kliknutí na pruh toneru. Více informací otevře senzor daného pruhu."},sources:{title:"Zdroje toneru",mode_attributes:"Hodnoty pocházejí z atributů entity dlaždice",mode_auto:"Senzory kazet automaticky rozpoznány ze zařízení tiskárny",mode_none:"Nebyly rozpoznány žádné senzory kazet — přiřaďte je ručně",auto:"Auto",manual:"Ručně",reset:"Obnovit rozpoznaný senzor",sensor:"Senzor"},colors:{cyan:"Azurová",magenta:"Purpurová",yellow:"Žlutá",black:"Černá"}},_e={last_known:"Poslední známá hodnota"},be={editor:pe,feature:_e},ge={show_percent:{label:"Prozentwert anzeigen",description:"Wenn aktiviert, wird der Prozentsatz des verbleibenden Toners neben der Füllstandsanzeige angezeigt."},black_as_white:{label:"Schwarz als Weiß anzeigen",description:"Wenn aktiviert, wird die Füllstandsanzeige für schwarzen Toner in Weiß dargestellt."},tap_action:{label:"Tipp-Aktion",description:"Was beim Antippen eines Tonerbalkens passiert. Mehr Infos öffnet den Sensor dieses Balkens."},sources:{title:"Tonerquellen",mode_attributes:"Werte kommen aus den Attributen der Kachel-Entität",mode_auto:"Kartuschen-Sensoren automatisch am Drucker-Gerät erkannt",mode_none:"Keine Kartuschen-Sensoren erkannt — bitte manuell zuordnen",auto:"Auto",manual:"Manuell",reset:"Auf erkannten Sensor zurücksetzen",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gelb",black:"Schwarz"}},fe={last_known:"Letzter bekannter Wert"},me={editor:ge,feature:fe},ve={show_percent:{label:"Show percent value",description:"When enabled, shows the percentage of toner remaining next to the toner level bar."},black_as_white:{label:"Display black as white",description:"When enabled, displays the black toner level bar in white color."},tap_action:{label:"Tap action",description:"What happens when you tap a toner bar. More info opens the sensor of that bar."},sources:{title:"Toner sources",mode_attributes:"Values come from the tile entity's attributes",mode_auto:"Cartridge sensors detected automatically from the printer device",mode_none:"No cartridge sensors detected — assign them manually",auto:"Auto",manual:"Manual",reset:"Reset to detected sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Yellow",black:"Black"}},ye={last_known:"Last known value"},we={editor:ve,feature:ye},ke={show_percent:{label:"Mostrar valor porcentual",description:"Si está habilitado, muestra el porcentaje de tóner restante junto a la barra de nivel."},black_as_white:{label:"Mostrar negro como blanco",description:"Si está habilitado, la barra de nivel del tóner negro se muestra en blanco."},tap_action:{label:"Acción al tocar",description:"Qué ocurre al pulsar una barra de tóner. Más información abre el sensor de esa barra."},sources:{title:"Fuentes de tóner",mode_attributes:"Los valores provienen de los atributos de la entidad de la tarjeta",mode_auto:"Sensores de cartuchos detectados automáticamente desde el dispositivo de la impresora",mode_none:"No se detectaron sensores de cartuchos — asígnalos manualmente",auto:"Auto",manual:"Manual",reset:"Restablecer al sensor detectado",sensor:"Sensor"},colors:{cyan:"Cian",magenta:"Magenta",yellow:"Amarillo",black:"Negro"}},$e={last_known:"Último valor conocido"},Ae={editor:ke,feature:$e},ze={show_percent:{label:"Afficher le pourcentage",description:"Si activé, affiche le pourcentage de toner restant à côté de la barre de niveau."},black_as_white:{label:"Afficher le noir en blanc",description:"Si activé, la barre de niveau du toner noir est affichée en blanc."},tap_action:{label:"Action au toucher",description:"Ce qui se passe quand on touche une barre de toner. Plus d'infos ouvre le capteur de cette barre."},sources:{title:"Sources de toner",mode_attributes:"Les valeurs proviennent des attributs de l'entité de la carte",mode_auto:"Capteurs de cartouches détectés automatiquement depuis l'appareil imprimante",mode_none:"Aucun capteur de cartouche détecté — attribuez-les manuellement",auto:"Auto",manual:"Manuel",reset:"Réinitialiser au capteur détecté",sensor:"Capteur"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Jaune",black:"Noir"}},Se={last_known:"Dernière valeur connue"},xe={editor:ze,feature:Se},Ce={show_percent:{label:"Százalék megjelenítése",description:"Ha engedélyezve van, a fennmaradó festék százalékos értéke megjelenik a szintjelző sáv mellett."},black_as_white:{label:"Fekete megjelenítése fehérként",description:"Ha engedélyezve van, a fekete festékszint sáv fehér színben jelenik meg."},tap_action:{label:"Koppintási művelet",description:"Mi történik, ha megérinti a festékszint-sávot. A További információ az adott sáv szenzorát nyitja meg."},sources:{title:"Tonerforrások",mode_attributes:"Az értékek a csempe entitás attribútumaiból származnak",mode_auto:"A patronérzékelők automatikusan felismerve a nyomtató eszközről",mode_none:"Nem található patronérzékelő — rendelje hozzá kézzel",auto:"Auto",manual:"Kézi",reset:"Visszaállítás a felismert érzékelőre",sensor:"Érzékelő"},colors:{cyan:"Cián",magenta:"Bíbor",yellow:"Sárga",black:"Fekete"}},Ee={last_known:"Utolsó ismert érték"},je={editor:Ce,feature:Ee},Pe={show_percent:{label:"Mostra valore percentuale",description:"Se abilitato, mostra la percentuale di toner rimanente accanto alla barra del livello."},black_as_white:{label:"Mostra nero come bianco",description:"Se abilitato, la barra del livello del toner nero viene mostrata in bianco."},tap_action:{label:"Azione al tocco",description:"Cosa succede quando si tocca una barra del toner. Più informazioni apre il sensore di quella barra."},sources:{title:"Sorgenti del toner",mode_attributes:"I valori provengono dagli attributi dell'entità della scheda",mode_auto:"Sensori delle cartucce rilevati automaticamente dal dispositivo stampante",mode_none:"Nessun sensore cartuccia rilevato — assegnali manualmente",auto:"Auto",manual:"Manuale",reset:"Ripristina il sensore rilevato",sensor:"Sensore"},colors:{cyan:"Ciano",magenta:"Magenta",yellow:"Giallo",black:"Nero"}},Oe={last_known:"Ultimo valore noto"},Me={editor:Pe,feature:Oe},Te={show_percent:{label:"Percentage weergeven",description:"Indien ingeschakeld, wordt het resterende tonerpercentage naast de niveaubalk weergegeven."},black_as_white:{label:"Zwart als wit weergeven",description:"Indien ingeschakeld, wordt de zwarte tonerniveaubalk in witte kleur weergegeven."},tap_action:{label:"Tikactie",description:"Wat er gebeurt als je op een tonerbalk tikt. Meer info opent de sensor van die balk."},sources:{title:"Tonerbronnen",mode_attributes:"Waarden komen uit de attributen van de tegel-entiteit",mode_auto:"Cartridgesensoren automatisch gedetecteerd via het printerapparaat",mode_none:"Geen cartridgesensoren gedetecteerd — wijs ze handmatig toe",auto:"Auto",manual:"Handmatig",reset:"Terugzetten naar gedetecteerde sensor",sensor:"Sensor"},colors:{cyan:"Cyaan",magenta:"Magenta",yellow:"Geel",black:"Zwart"}},Ne={last_known:"Laatst bekende waarde"},Ue={editor:Te,feature:Ne},Re={show_percent:{label:"Vis prosentverdi",description:"Når aktivert, vises prosentandelen gjenværende toner ved siden av nivålinjen."},black_as_white:{label:"Vis svart som hvit",description:"Når aktivert, vises den svarte tonernivålinjen i hvit farge."},tap_action:{label:"Trykkhandling",description:"Hva som skjer når du trykker på en tonerlinje. Mer info åpner sensoren til den linjen."},sources:{title:"Tonerkilder",mode_attributes:"Verdiene hentes fra attributtene til kortets entitet",mode_auto:"Kassettsensorer oppdaget automatisk fra skriverenheten",mode_none:"Ingen kassettsensorer oppdaget — tilordne dem manuelt",auto:"Auto",manual:"Manuell",reset:"Tilbakestill til oppdaget sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gul",black:"Svart"}},He={last_known:"Siste kjente verdi"},De={editor:Re,feature:He},Ie={show_percent:{label:"Pokaż wartość procentową",description:"Gdy włączone, wyświetla procentową wartość pozostałego tonera obok paska poziomu."},black_as_white:{label:"Wyświetlaj czarny jako biały",description:"Gdy włączone, pasek poziomu czarnego tonera jest wyświetlany w kolorze białym."},tap_action:{label:"Akcja po dotknięciu",description:"Co się dzieje po dotknięciu paska tonera. Więcej informacji otwiera czujnik tego paska."},sources:{title:"Źródła tonera",mode_attributes:"Wartości pochodzą z atrybutów encji kafelka",mode_auto:"Czujniki wkładów wykryte automatycznie na urządzeniu drukarki",mode_none:"Nie wykryto czujników wkładów — przypisz je ręcznie",auto:"Auto",manual:"Ręcznie",reset:"Przywróć wykryty czujnik",sensor:"Czujnik"},colors:{cyan:"Cyjan",magenta:"Magenta",yellow:"Żółty",black:"Czarny"}},Le={last_known:"Ostatnia znana wartość"},We={editor:Ie,feature:Le},Ke={show_percent:{label:"Mostrar valor percentual",description:"Se ativado, mostra a percentagem de toner restante ao lado da barra de nível."},black_as_white:{label:"Exibir preto como branco",description:"Se ativado, a barra de nível do toner preto é exibida em branco."},tap_action:{label:"Ação ao tocar",description:"O que acontece ao tocar numa barra de toner. Mais informações abre o sensor dessa barra."},sources:{title:"Fontes de toner",mode_attributes:"Os valores vêm dos atributos da entidade do cartão",mode_auto:"Sensores de cartuchos detectados automaticamente a partir do dispositivo da impressora",mode_none:"Nenhum sensor de cartucho detectado — atribua-os manualmente",auto:"Auto",manual:"Manual",reset:"Redefinir para o sensor detectado",sensor:"Sensor"},colors:{cyan:"Ciano",magenta:"Magenta",yellow:"Amarelo",black:"Preto"}},Ve={last_known:"Último valor conhecido"},qe={editor:Ke,feature:Ve},Be={show_percent:{label:"Zobraziť percentá",description:"Ak je povolené, zobrazí percentuálnu hodnotu zostávajúceho tonera vedľa ukazovateľa hladiny."},black_as_white:{label:"Zobraziť čierny ako biely",description:"Ak je povolené, ukazovateľ hladiny čierneho tonera sa zobrazí bielou farbou."},tap_action:{label:"Akcia pri ťuknutí",description:"Čo sa stane po kliknutí na pruh tonera. Viac informácií otvorí senzor daného pruhu."},sources:{title:"Zdroje tonera",mode_attributes:"Hodnoty pochádzajú z atribútov entity dlaždice",mode_auto:"Senzory kaziet automaticky rozpoznané zo zariadenia tlačiarne",mode_none:"Nenašli sa žiadne senzory kaziet — priraďte ich ručne",auto:"Auto",manual:"Ručne",reset:"Obnoviť rozpoznaný senzor",sensor:"Senzor"},colors:{cyan:"Azúrová",magenta:"Purpurová",yellow:"Žltá",black:"Čierna"}},Fe={last_known:"Posledná známa hodnota"},Ge={editor:Be,feature:Fe},Ze={show_percent:{label:"Visa procentvärde",description:"När aktiverat visas den återstående tonerns procentandel bredvid nivåindikatorn."},black_as_white:{label:"Visa svart som vitt",description:"När aktiverat visas den svarta tonernivåindikatorn i vit färg."},tap_action:{label:"Tryckåtgärd",description:"Vad som händer när du trycker på ett tonerfält. Mer info öppnar sensorn för det fältet."},sources:{title:"Tonerkällor",mode_attributes:"Värdena kommer från kortentitetens attribut",mode_auto:"Kassettsensorer upptäcktes automatiskt från skrivarenheten",mode_none:"Inga kassettsensorer hittades — tilldela dem manuellt",auto:"Auto",manual:"Manuell",reset:"Återställ till upptäckt sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gul",black:"Svart"}},Je={last_known:"Senast kända värde"},Qe={editor:Ze,feature:Je},Ye={show_percent:{label:"Показувати відсоткове значення",description:"Якщо увімкнено, поруч зі шкалою рівня тонера відображається відсоток тонера, що залишився."},black_as_white:{label:"Відображати чорний як білий",description:"Якщо увімкнено, шкала рівня чорного тонера відображається білим кольором."},tap_action:{label:"Дія при натисканні",description:"Що станеться після натискання на смугу тонера. Докладніше відкриває датчик цієї смуги."},sources:{title:"Джерела тонера",mode_attributes:"Значення беруться з атрибутів сутності плитки",mode_auto:"Датчики картриджів автоматично виявлено з пристрою принтера",mode_none:"Датчики картриджів не виявлено — призначте їх вручну",auto:"Авто",manual:"Вручну",reset:"Скинути до виявленого датчика",sensor:"Датчик"},colors:{cyan:"Блакитний",magenta:"Пурпуровий",yellow:"Жовтий",black:"Чорний"}},Xe={last_known:"Останнє відоме значення"},et={editor:Ye,feature:Xe};const tt={cs:Object.freeze({__proto__:null,default:be,editor:pe,feature:_e}),de:Object.freeze({__proto__:null,default:me,editor:ge,feature:fe}),en:Object.freeze({__proto__:null,default:we,editor:ve,feature:ye}),es:Object.freeze({__proto__:null,default:Ae,editor:ke,feature:$e}),fr:Object.freeze({__proto__:null,default:xe,editor:ze,feature:Se}),hu:Object.freeze({__proto__:null,default:je,editor:Ce,feature:Ee}),it:Object.freeze({__proto__:null,default:Me,editor:Pe,feature:Oe}),nl:Object.freeze({__proto__:null,default:Ue,editor:Te,feature:Ne}),no:Object.freeze({__proto__:null,default:De,editor:Re,feature:He}),pl:Object.freeze({__proto__:null,default:We,editor:Ie,feature:Le}),pt:Object.freeze({__proto__:null,default:qe,editor:Ke,feature:Ve}),sk:Object.freeze({__proto__:null,default:Ge,editor:Be,feature:Fe}),sv:Object.freeze({__proto__:null,default:Qe,editor:Ze,feature:Je}),uk:Object.freeze({__proto__:null,default:et,editor:Ye,feature:Xe})};function ot(e,t){const o=e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,tt[t]);return"string"==typeof o?o:void 0}function nt(e){return function(t){let o=ot(t,e?.locale.language??"en");return o||(o=ot(t,"en")),o||t}}const rt=s`
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

  /* clickable bars: pointer, hover highlight, keyboard focus, no text selection / callout on long-press */
  .toner.interactive {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
  }

  .toner.interactive:hover .background {
    filter: brightness(1.2);
  }

  .toner.interactive:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 8px;
  }

  .toner.stale .level {
    opacity: 0.55;
  }

  .toner.stale .percent {
    opacity: 0.7;
    font-style: italic;
  }
`;function it(e,t,o){const n=e?.[t];return void 0!==n?!!n:o}var st="https://github.com/hondzik/printer-toner-level-feature";async function at(e,t,o,n){const r=new Date(Date.now()-86400*n*1e3).toISOString(),i=await e.callWS({type:"recorder/statistics_during_period",start_time:r,statistic_ids:[t],period:o,types:["mean"]}),s=i?.[t]??[];for(let e=s.length-1;e>=0;e--){const t=s[e].mean;if("number"==typeof t)return{level:Math.round(t),start:s[e].start}}}const lt={action:"none"};function ct(e){return"none"!==(e?.action??lt.action)}class dt{constructor(e){this.getTap=e,this.pressed=!1,this.onPointerDown=e=>{e.stopPropagation(),0===e.button&&(this.pressed=!0)},this.onPointerUp=e=>{e.stopPropagation(),this.pressed&&(this.pressed=!1,this.getTap()?.())},this.onPointerCancel=()=>{this.pressed=!1},this.onClick=e=>{e.stopPropagation()},this.onKeyDown=e=>{if("Enter"!==e.key&&" "!==e.key)return;const t=this.getTap();t&&(e.preventDefault(),e.stopPropagation(),t())}}}const ht=["cyan","magenta","yellow","black"],ut={cyan:["cyan"],magenta:["magenta"],yellow:["yellow"],black:["black"]};function pt(e){return!!e&&"printer"===e.attributes?.domain&&"number"==typeof e.attributes?.black_level}function _t(e,t){const o=e.entities,n=t?o?.[t]?.device_id:void 0;if(!o||!n)return{};const r=Object.values(o).filter(e=>e.device_id===n&&e.entity_id.startsWith("sensor.")).map(t=>({entityId:t.entity_id,stateObj:e.states[t.entity_id]})).filter(({stateObj:e})=>!!e&&("%"===e.attributes?.unit_of_measurement||("unavailable"===e.state||"unknown"===e.state))).sort((e,t)=>e.entityId.localeCompare(t.entityId)),i={},s=new Set;for(const e of ht){const t=r.find(({entityId:t,stateObj:o})=>{if(s.has(t))return!1;const n=`${o?.attributes?.friendly_name??""} ${t}`.toLowerCase();return ut[e].some(e=>n.includes(e))});t&&(i[e]=t.entityId,s.add(t.entityId))}return i}function bt(e,t,o,n){const r=Number(e.states[o]?.state);return{color:t,origin:n,entityId:o,level:Number.isFinite(r)?r:void 0}}const gt=s`
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
    padding-top: 12px;
  }
  .field {
    margin-bottom: 12px;
  }
`,ft={cyan:"rgba(0, 255, 255, 0.7)",magenta:"rgba(255, 0, 255, 0.7)",yellow:"rgba(255, 255, 0, 0.7)",black:"var(--primary-text-color)"};let mt=class extends ae{constructor(){super(...arguments),this.config={}}setConfig(e){this.config={...e}}static get styles(){return gt}get _autoEntities(){return this.hass?_t(this.hass,this.context?.entity_id):{}}get _hasAttributeContract(){return pt(this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0)}get _deviceName(){const e=this.hass,t=this.context?.entity_id?e?.entities?.[this.context.entity_id]?.device_id:void 0,o=t?e?.devices?.[t]:void 0;return o?.name_by_user??o?.name}render(){const e=nt(this.hass),t=this._autoEntities,o=Object.keys(t).length;let n;n=this._hasAttributeContract&&0===o?e("editor.sources.mode_attributes"):e(o>0?"editor.sources.mode_auto":"editor.sources.mode_none");const r=o>0?this._deviceName:void 0;return K`
      <div class="section-label">${e("editor.sources.title")}</div>
      <div class="source-banner">
        <div>
          <div>${n}</div>
          ${r?K`<div class="secondary">${r}</div>`:q}
        </div>
      </div>
      ${ht.map(t=>this.renderSourceRow(t,e))}
      <div class="options">
        <div class="field">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ui_action:{default_action:lt.action}}}
            .value=${this.config.tap_action}
            .label=${e("editor.tap_action.label")}
            .helper=${e("editor.tap_action.description")}
            .required=${!1}
            @value-changed=${this._onTapActionChange}
          ></ha-selector>
        </div>
        <ha-settings-row>
          <span slot="heading" data-for="show_percent">${e("editor.show_percent.label")}</span>
          <span slot="description" data-for="show_percent">${e("editor.show_percent.description")}</span>
          <ha-switch id="show_percent" @change=${this._onShowPercentChange} .checked=${it(this.config,"show_percent",!0)} name="show_percent"></ha-switch>
        </ha-settings-row>
        <ha-settings-row>
          <span slot="heading" data-for="black_as_white">${e("editor.black_as_white.label")}</span>
          <span slot="description" data-for="black_as_white">${e("editor.black_as_white.description")}</span>
          <ha-switch id="black_as_white" @change=${this._onBlackAsWhiteChange} .checked=${it(this.config,"black_as_white",!0)} name="black_as_white"></ha-switch>
        </ha-settings-row>
      </div>
    `}renderSourceRow(e,t){const o=this.config[`${e}_entity`],n=this._autoEntities[e],r=o??n??"";let i=q;return o?i=K`<span class="chip manual">${t("editor.sources.manual")}</span>`:n&&(i=K`<span class="chip auto">${t("editor.sources.auto")}</span>`),K`
      <div class="source-row">
        <div class="swatch-col">
          <span class="swatch" style="background-color: ${ft[e]}"></span>
          <span>${t("editor.colors."+e)}</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:"sensor"}}}
          .value=${r}
          .label=${t("editor.sources.sensor")}
          .required=${!1}
          @value-changed=${t=>this._onSourceChange(e,t)}
        ></ha-selector>
        <div class="row-tail">
          ${i}
          ${o?K`
                  <button class="reset-button" title=${t("editor.sources.reset")} aria-label=${t("editor.sources.reset")} @click=${()=>this._onSourceReset(e)}>
                    <svg viewBox="0 0 24 24"><path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" /></svg>
                  </button>
                `:q}
        </div>
      </div>
    `}_onSourceChange(e,t){t.stopPropagation();const o=t.detail?.value||void 0,n={...this.config};o&&o!==this._autoEntities[e]?n[`${e}_entity`]=o:delete n[`${e}_entity`],this._updateConfig(n)}_onSourceReset(e){const t={...this.config};delete t[`${e}_entity`],this._updateConfig(t)}_onTapActionChange(e){e.stopPropagation();const t=e.detail?.value,o={...this.config};t&&t.action!==lt.action?o.tap_action=t:delete o.tap_action,this._updateConfig(o)}_onShowPercentChange(e){const t=e.target.checked;this._updateConfig({...this.config,show_percent:t})}_onBlackAsWhiteChange(e){const t=e.target.checked;this._updateConfig({...this.config,black_as_white:t})}_updateConfig(e){this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};e([ue({attribute:!1})],mt.prototype,"hass",void 0),e([ue({attribute:!1})],mt.prototype,"context",void 0),e([ue({type:Object})],mt.prototype,"config",void 0),mt=e([ce("printer-toner-level-feature-config")],mt),function(){const e="padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;",t=`background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${e}`,o=`background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${e}`;console.groupCollapsed("%cPrinter toner Tile card feature%c1.2.0",t,o),console.info("A Home Assistant Lovelace custom card feature to display printer toner levels"),console.info(`Github: ${st}`),console.groupEnd()}();let vt=class extends ae{constructor(){super(...arguments),this._lastKnown={},this._lastKnownFetching=new Set,this._taps=Object.fromEntries(ht.map(e=>[e,new dt(()=>this._tapCallback(e))]))}static getConfigElement(){return document.createElement("printer-toner-level-feature-config")}static getStubConfig(){return{type:"custom:printer-toner-level-feature"}}get stateObj(){return this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0}set stateObj(e){}get tonerSources(){return this.hass?function(e,t,o){const n=t?e.states[t]:void 0,r=_t(e,t),i={};for(const t of ht){const s=o?.[`${t}_entity`];if(s){i[t]=bt(e,t,s,"manual");continue}const a=n?.attributes?.[t+"_level"];if("number"==typeof a){i[t]={color:t,origin:"attribute",level:a};continue}const l=r[t];l&&(i[t]=bt(e,t,l,"auto"))}return i}(this.hass,this.context?.entity_id,this.config):{}}get isColorPrinter(){return!!this.tonerSources.cyan}getCardSize(){return this.isColorPrinter?3:2}setConfig(e){this.config=e}render(){const e=this.hass&&this.config&&this.context?this.tonerSources:{};if(!e.black)return K`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;const t=it(this.config,"black_as_white",!0);return e.cyan?K`
        <div class="color toners${t?" black-as-white":""}">
          ${this.renderToner(e.cyan)} ${this.renderToner(e.magenta)} ${this.renderToner(e.yellow)} ${this.renderToner(e.black)}
        </div>
      `:K` <div class="toners${t?" black-as-white":""}">${this.renderToner(e.black)}</div> `}renderToner(e){if(!e)return K``;let t,o=e.level;void 0===o&&e.entityId&&(this._queueLastKnown(e.entityId),t=this._lastKnown[e.entityId]?.value,o=t?.level);const n=it(this.config,"show_percent",!0),r=nt(this.hass),i=t?`${r("feature.last_known")}: ${new Date(t.start).toLocaleDateString(this.hass?.locale?.language)}`:void 0,s=ct(this.config?.tap_action),a=this._taps[e.color];return K`
      <div
        class="${e.color} toner${t?" stale":""}${s?" interactive":""}"
        title=${i??q}
        role=${s?"button":q}
        tabindex=${s?"0":q}
        aria-label=${s?`${r("editor.colors."+e.color)} ${o??0}%`:q}
        @pointerdown=${a.onPointerDown}
        @pointerup=${a.onPointerUp}
        @pointerleave=${a.onPointerCancel}
        @pointercancel=${a.onPointerCancel}
        @click=${a.onClick}
        @keydown=${a.onKeyDown}
      >
        <div class="background">
          <div class="level" style="width: ${o??0}%;"></div>
        </div>
        ${n?K`<div class="percent">${o??0}</div>`:q}
      </div>
    `}_tapCallback(e){const t=this.config?.tap_action;if(ct(t))return()=>{return o=this,n=function(e,t){return{config:{entity:e,tap_action:t??lt},action:"tap"}}(this.tonerSources[e]?.entityId??this.context?.entity_id,t),void o.dispatchEvent(new CustomEvent("hass-action",{detail:n,bubbles:!0,composed:!0}));var o,n}}_queueLastKnown(e){if(!this.hass||this._lastKnownFetching.has(e))return;const t=this._lastKnown[e];t&&Date.now()-t.fetchedAt<18e5||(this._lastKnownFetching.add(e),async function(e,t){return await at(e,t,"hour",365)??await at(e,t,"5minute",10)}(this.hass,e).then(t=>{this._lastKnown={...this._lastKnown,[e]:{value:t,fetchedAt:Date.now()}}}).catch(()=>{this._lastKnown={...this._lastKnown,[e]:{fetchedAt:Date.now()}}}).finally(()=>{this._lastKnownFetching.delete(e)}))}static get styles(){return rt}};e([ue({attribute:!1})],vt.prototype,"hass",void 0),e([ue({attribute:!1})],vt.prototype,"config",void 0),e([ue({attribute:!1})],vt.prototype,"context",void 0),e([function(e){return ue({...e,state:!0,attribute:!1})}()],vt.prototype,"_lastKnown",void 0),vt=e([ce("printer-toner-level-feature")],vt),window.customCardFeatures||=[],window.customCardFeatures.push({type:"printer-toner-level-feature",name:"Printer toner level",isSupported:(e,t)=>!!pt(t.entity_id?e.states[t.entity_id]:void 0)||!!_t(e,t.entity_id).black,configurable:!0});export{vt as PrinterTonerLevelFeature};
