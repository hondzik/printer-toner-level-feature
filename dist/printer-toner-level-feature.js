function e(e,t,r,s){var o,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,r=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new i(r,e,s)},a=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,b=_.trustedTypes,g=b?b.emptyScript:"",f=_.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},$=(e,t)=>!l(e,t),m={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const i=s?.call(this);o?.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??m}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(r)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=r.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(void 0!==s&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,s=r._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=r.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=s;const i=o.fromAttribute(t,e.type);this[s]=i??this._$Ej?.get(s)??i,this._$Em=null}}requestUpdate(e,t,r,s=!1,o){if(void 0!==e){const i=this.constructor;if(!1===s&&(o=this[e]),r??=i.getPropertyOptions(e),!((r.hasChanged??$)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},i){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==o||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,r,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,f?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,k=e=>e,x=A.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+z,P=`<${C}>`,O=document,j=()=>O.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,D=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,K=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,F=O.createTreeWalker(O,129);function Z(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const G=(e,t)=>{const r=e.length-1,s=[];let o,i=2===t?"<svg>":3===t?"<math>":"",n=N;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,d=0;for(;d<r.length&&(n.lastIndex=d,l=n.exec(r),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=H:void 0!==l[1]?n=R:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=o??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?L:I):n===L||n===I?n=D:n===H||n===R?n=N:(n=D,o=void 0);const h=n===D&&e[t+1].startsWith("/>")?" ":"";i+=n===N?r+P:c>=0?(s.push(a),r.slice(0,c)+E+r.slice(c)+z+h):r+z+(-2===c?t:h)}return[Z(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class J{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let o=0,i=0;const n=e.length-1,a=this.parts,[l,c]=G(e,t);if(this.el=J.createElement(l,r),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=F.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const t=c[i++],r=s.getAttribute(e).split(z),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?te:"?"===n[1]?re:"@"===n[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(z)&&(a.push({type:6,index:o}),s.removeAttribute(e));if(W.test(s.tagName)){const e=s.textContent.split(z),t=e.length-1;if(t>0){s.textContent=x?x.emptyScript:"";for(let r=0;r<t;r++)s.append(e[r],j()),F.nextNode(),a.push({type:2,index:++o});s.append(e[t],j())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(z,e+1));)a.push({type:7,index:o}),e+=z.length-1}o++}}static createElement(e,t){const r=O.createElement("template");return r.innerHTML=e,r}}function Y(e,t,r=e,s){if(t===B)return t;let o=void 0!==s?r._$Co?.[s]:r._$Cl;const i=M(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,r,s)),void 0!==s?(r._$Co??=[])[s]=o:r._$Cl=o),void 0!==o&&(t=Y(e,o._$AS(e,t.values),o,s)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);F.currentNode=s;let o=F.nextNode(),i=0,n=0,a=r[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new X(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new oe(o,this,e)),this._$AV.push(t),a=r[++n]}i!==a?.index&&(o=F.nextNode(),i++)}return F.currentNode=O,s}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),M(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,s="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=J.createElement(Z(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Q(s,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new J(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const o of e)s===t.length?t.push(r=new X(this.O(j()),this.O(j()),this,this.options)):r=t[s],r._$AI(o),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=V}_$AI(e,t=this,r,s){const o=this.strings;let i=!1;if(void 0===o)e=Y(this,e,t,0),i=!M(e)||e!==this._$AH&&e!==B,i&&(this._$AH=e);else{const s=e;let n,a;for(e=o[0],n=0;n<o.length-1;n++)a=Y(this,s[r+n],t,n),a===B&&(a=this._$AH[n]),i||=!M(a)||a!==this._$AH[n],a===V?e=V:e!==V&&(e+=(a??"")+o[n+1]),this._$AH[n]=a}i&&!s&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class re extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class se extends ee{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??V)===B)return;const r=this._$AH,s=e===V&&r!==V||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==V&&(r===V||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ie=A.litHtmlPolyfillSupport;ie?.(J,X),(A.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;class ae extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const s=r?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=r?.renderBefore??null;s._$litPart$=o=new X(t.insertBefore(j(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const le=ne.litElementPolyfillSupport;le?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},he=(e=de,t,r)=>{const{kind:s,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),"accessor"===s){const{name:s}=r;return{set(r){const o=t.get.call(this);t.set.call(this,r),this.requestUpdate(s,o,e,!0,r)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=r;return function(r){const o=this[s];t.call(this,r),this.requestUpdate(s,o,e,!0,r)}}throw Error("Unsupported decorator location: "+s)};function pe(e){return(t,r)=>"object"==typeof r?he(e,t,r):((e,t,r)=>{const s=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),s?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}var ue={show_percent:{label:"Zobrazit procenta",description:"Pokud je povoleno, zobrazí procentuální hodnotu zbývajícího toneru vedle ukazatele hladiny."},black_as_white:{label:"Zobrazit černý jako bílý",description:"Pokud je povoleno, ukazatel hladiny černého toneru se zobrazí bílou barvou."}},_e={editor:ue},be={show_percent:{label:"Prozentwert anzeigen",description:"Wenn aktiviert, wird der Prozentsatz des verbleibenden Toners neben der Füllstandsanzeige angezeigt."},black_as_white:{label:"Schwarz als Weiß anzeigen",description:"Wenn aktiviert, wird die Füllstandsanzeige für schwarzen Toner in Weiß dargestellt."},sources:{title:"Tonerquellen",mode_attributes:"Werte kommen aus den Attributen der Kachel-Entität",mode_auto:"Kartuschen-Sensoren automatisch am Drucker-Gerät erkannt",mode_none:"Keine Kartuschen-Sensoren erkannt — bitte manuell zuordnen",auto:"Auto",manual:"Manuell",reset:"Auf erkannten Sensor zurücksetzen",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Gelb",black:"Schwarz"}},ge={last_known:"Letzter bekannter Wert"},fe={editor:be,feature:ge},ve={show_percent:{label:"Show percent value",description:"When enabled, shows the percentage of toner remaining next to the toner level bar."},black_as_white:{label:"Display black as white",description:"When enabled, displays the black toner level bar in white color."},sources:{title:"Toner sources",mode_attributes:"Values come from the tile entity's attributes",mode_auto:"Cartridge sensors detected automatically from the printer device",mode_none:"No cartridge sensors detected — assign them manually",auto:"Auto",manual:"Manual",reset:"Reset to detected sensor",sensor:"Sensor"},colors:{cyan:"Cyan",magenta:"Magenta",yellow:"Yellow",black:"Black"}},ye={last_known:"Last known value"},$e={editor:ve,feature:ye},me={show_percent:{label:"Mostrar valor porcentual",description:"Si está habilitado, muestra el porcentaje de tóner restante junto a la barra de nivel."},black_as_white:{label:"Mostrar negro como blanco",description:"Si está habilitado, la barra de nivel del tóner negro se muestra en blanco."}},we={editor:me},Ae={show_percent:{label:"Afficher le pourcentage",description:"Si activé, affiche le pourcentage de toner restant à côté de la barre de niveau."},black_as_white:{label:"Afficher le noir en blanc",description:"Si activé, la barre de niveau du toner noir est affichée en blanc."}},ke={editor:Ae},xe={show_percent:{label:"Százalék megjelenítése",description:"Ha engedélyezve van, a fennmaradó festék százalékos értéke megjelenik a szintjelző sáv mellett."},black_as_white:{label:"Fekete megjelenítése fehérként",description:"Ha engedélyezve van, a fekete festékszint sáv fehér színben jelenik meg."}},Se={editor:xe},Ee={show_percent:{label:"Mostra valore percentuale",description:"Se abilitato, mostra la percentuale di toner rimanente accanto alla barra del livello."},black_as_white:{label:"Mostra nero come bianco",description:"Se abilitato, la barra del livello del toner nero viene mostrata in bianco."}},ze={editor:Ee},Ce={show_percent:{label:"Percentage weergeven",description:"Indien ingeschakeld, wordt het resterende tonerpercentage naast de niveaubalk weergegeven."},black_as_white:{label:"Zwart als wit weergeven",description:"Indien ingeschakeld, wordt de zwarte tonerniveaubalk in witte kleur weergegeven."}},Pe={editor:Ce},Oe={show_percent:{label:"Vis prosentverdi",description:"Når aktivert, vises prosentandelen gjenværende toner ved siden av nivålinjen."},black_as_white:{label:"Vis svart som hvit",description:"Når aktivert, vises den svarte tonernivålinjen i hvit farge."}},je={editor:Oe},Me={show_percent:{label:"Pokaż wartość procentową",description:"Gdy włączone, wyświetla procentową wartość pozostałego tonera obok paska poziomu."},black_as_white:{label:"Wyświetlaj czarny jako biały",description:"Gdy włączone, pasek poziomu czarnego tonera jest wyświetlany w kolorze białym."}},Te={editor:Me},Ue={show_percent:{label:"Mostrar valor percentual",description:"Se ativado, mostra a percentagem de toner restante ao lado da barra de nível."},black_as_white:{label:"Exibir preto como branco",description:"Se ativado, a barra de nível do toner preto é exibida em branco."}},Ne={editor:Ue},He={show_percent:{label:"Zobraziť percentá",description:"Ak je povolené, zobrazí percentuálnu hodnotu zostávajúceho tonera vedľa ukazovateľa hladiny."},black_as_white:{label:"Zobraziť čierny ako biely",description:"Ak je povolené, ukazovateľ hladiny čierneho tonera sa zobrazí bielou farbou."}},Re={editor:He},De={show_percent:{label:"Visa procentvärde",description:"När aktiverat visas den återstående tonerns procentandel bredvid nivåindikatorn."},black_as_white:{label:"Visa svart som vitt",description:"När aktiverat visas den svarta tonernivåindikatorn i vit färg."}},Ie={editor:De},Le={show_percent:{label:"Показувати відсоткове значення",description:"Якщо увімкнено, поруч зі шкалою рівня тонера відображається відсоток тонера, що залишився."},black_as_white:{label:"Відображати чорний як білий",description:"Якщо увімкнено, шкала рівня чорного тонера відображається білим кольором."}},We={editor:Le};const Ke={cs:Object.freeze({__proto__:null,default:_e,editor:ue}),de:Object.freeze({__proto__:null,default:fe,editor:be,feature:ge}),en:Object.freeze({__proto__:null,default:$e,editor:ve,feature:ye}),es:Object.freeze({__proto__:null,default:we,editor:me}),fr:Object.freeze({__proto__:null,default:ke,editor:Ae}),hu:Object.freeze({__proto__:null,default:Se,editor:xe}),it:Object.freeze({__proto__:null,default:ze,editor:Ee}),nl:Object.freeze({__proto__:null,default:Pe,editor:Ce}),no:Object.freeze({__proto__:null,default:je,editor:Oe}),pl:Object.freeze({__proto__:null,default:Te,editor:Me}),pt:Object.freeze({__proto__:null,default:Ne,editor:Ue}),sk:Object.freeze({__proto__:null,default:Re,editor:He}),sv:Object.freeze({__proto__:null,default:Ie,editor:De}),uk:Object.freeze({__proto__:null,default:We,editor:Le})};function Be(e,t){const r=e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,Ke[t]);return"string"==typeof r?r:void 0}function Ve(e){return function(t){let r=Be(t,e?.locale.language??"en");return r||(r=Be(t,"en")),r||t}}const qe=n`
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
`;function Fe(e,t,r){const s=e?.[t];return void 0!==s?!!s:r}var Ze="https://github.com/hondzik/printer-toner-level-feature";const Ge=["cyan","magenta","yellow","black"],Je={cyan:["cyan"],magenta:["magenta"],yellow:["yellow"],black:["black"]};function Ye(e,t){const r=e.entities,s=t?r?.[t]?.device_id:void 0;if(!r||!s)return{};const o=Object.values(r).filter(e=>e.device_id===s&&e.entity_id.startsWith("sensor.")).map(t=>({entityId:t.entity_id,stateObj:e.states[t.entity_id]})).filter(({stateObj:e})=>!!e&&("%"===e.attributes?.unit_of_measurement||("unavailable"===e.state||"unknown"===e.state))).sort((e,t)=>e.entityId.localeCompare(t.entityId)),i={},n=new Set;for(const e of Ge){const t=o.find(({entityId:t,stateObj:r})=>{if(n.has(t))return!1;const s=`${r?.attributes?.friendly_name??""} ${t}`.toLowerCase();return Je[e].some(e=>s.includes(e))});t&&(i[e]=t.entityId,n.add(t.entityId))}return i}function Qe(e,t,r,s){const o=Number(e.states[r]?.state);return{color:t,origin:s,entityId:r,level:Number.isFinite(o)?o:void 0}}const Xe={cyan:"rgba(0, 255, 255, 0.7)",magenta:"rgba(255, 0, 255, 0.7)",yellow:"rgba(255, 255, 0, 0.7)",black:"var(--primary-text-color)"};let et=class extends ae{constructor(){super(...arguments),this.config={}}setConfig(e){this.config={...e}}static get styles(){return n`
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
    `}get _autoEntities(){return this.hass?Ye(this.hass,this.context?.entity_id):{}}get _hasAttributeContract(){const e=this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0;return!!e&&"printer"===e.attributes?.domain&&"number"==typeof e.attributes?.black_level}get _deviceName(){const e=this.hass,t=this.context?.entity_id?e?.entities?.[this.context.entity_id]?.device_id:void 0,r=t?e?.devices?.[t]:void 0;return r?.name_by_user??r?.name}render(){const e=Ve(this.hass),t=this._autoEntities,r=Object.keys(t).length;let s;s=this._hasAttributeContract&&0===r?e("editor.sources.mode_attributes"):e(r>0?"editor.sources.mode_auto":"editor.sources.mode_none");const o=r>0?this._deviceName:void 0;return K`
      <div class="section-label">${e("editor.sources.title")}</div>
      <div class="source-banner">
        <div>
          <div>${s}</div>
          ${o?K`<div class="secondary">${o}</div>`:V}
        </div>
      </div>
      ${Ge.map(t=>this.renderSourceRow(t,e))}
      <div class="options">
        <ha-settings-row>
          <span slot="heading" data-for="show_percent">${e("editor.show_percent.label")}</span>
          <span slot="description" data-for="show_percent">${e("editor.show_percent.description")}</span>
          <ha-switch id="show_percent" @change=${this._onShowPercentChange} .checked=${Fe(this.config,"show_percent",!0)} name="show_percent"></ha-switch>
        </ha-settings-row>
        <ha-settings-row>
          <span slot="heading" data-for="black_as_white">${e("editor.black_as_white.label")}</span>
          <span slot="description" data-for="black_as_white">${e("editor.black_as_white.description")}</span>
          <ha-switch id="black_as_white" @change=${this._onBlackAsWhiteChange} .checked=${Fe(this.config,"black_as_white",!0)} name="black_as_white"></ha-switch>
        </ha-settings-row>
      </div>
    `}renderSourceRow(e,t){const r=this.config[`${e}_entity`],s=this._autoEntities[e],o=r??s??"";let i=V;return r?i=K`<span class="chip manual">${t("editor.sources.manual")}</span>`:s&&(i=K`<span class="chip auto">${t("editor.sources.auto")}</span>`),K`
      <div class="source-row">
        <div class="swatch-col">
          <span class="swatch" style="background-color: ${Xe[e]}"></span>
          <span>${t("editor.colors."+e)}</span>
        </div>
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:"sensor"}}}
          .value=${o}
          .label=${t("editor.sources.sensor")}
          .required=${!1}
          @value-changed=${t=>this._onSourceChange(e,t)}
        ></ha-selector>
        <div class="row-tail">
          ${i}
          ${r?K`
                <button class="reset-button" title=${t("editor.sources.reset")} aria-label=${t("editor.sources.reset")} @click=${()=>this._onSourceReset(e)}>
                  <svg viewBox="0 0 24 24"><path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" /></svg>
                </button>
              `:V}
        </div>
      </div>
    `}_onSourceChange(e,t){t.stopPropagation();const r=t.detail?.value||void 0,s={...this.config};r&&r!==this._autoEntities[e]?s[`${e}_entity`]=r:delete s[`${e}_entity`],this._updateConfig(s)}_onSourceReset(e){const t={...this.config};delete t[`${e}_entity`],this._updateConfig(t)}_onShowPercentChange(e){const t=e.target.checked;this._updateConfig({...this.config,show_percent:t})}_onBlackAsWhiteChange(e){const t=e.target.checked;this._updateConfig({...this.config,black_as_white:t})}_updateConfig(e){this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};e([pe({attribute:!1})],et.prototype,"hass",void 0),e([pe({attribute:!1})],et.prototype,"context",void 0),e([pe({type:Object})],et.prototype,"config",void 0),et=e([ce("printer-toner-level-feature-config")],et),function(){const e="padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;",t=`background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${e}`,r=`background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${e}`;console.groupCollapsed("%cPrinter toner Tile card feature%c1.0.7",t,r),console.info("A Home Assistant Lovelace custom card feature to display printer toner levels"),console.info(`Github: ${Ze}`),console.groupEnd()}();let tt=class extends ae{constructor(){super(...arguments),this._lastKnown={},this._lastKnownFetching=new Set}static getConfigElement(){return document.createElement("printer-toner-level-feature-config")}static getStubConfig(){return{type:"custom:printer-toner-level-feature"}}get stateObj(){return this.context?.entity_id?this.hass?.states[this.context.entity_id]:void 0}set stateObj(e){}get tonerSources(){return this.hass?function(e,t,r){const s=t?e.states[t]:void 0,o=Ye(e,t),i={};for(const t of Ge){const n=r?.[`${t}_entity`];if(n){i[t]=Qe(e,t,n,"manual");continue}const a=s?.attributes?.[t+"_level"];if("number"==typeof a){i[t]={color:t,origin:"attribute",level:a};continue}const l=o[t];l&&(i[t]=Qe(e,t,l,"auto"))}return i}(this.hass,this.context?.entity_id,this.config):{}}get isColorPrinter(){return!!this.tonerSources.cyan}getCardSize(){return this.isColorPrinter?3:2}setConfig(e){this.config=e}render(){const e=this.hass&&this.config&&this.context?this.tonerSources:{};if(!e.black)return K`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;const t=Fe(this.config,"black_as_white",!0);return e.cyan?K`
        <div class="color toners${t?" black-as-white":""}">
          ${this.renderToner(e.cyan)} ${this.renderToner(e.magenta)} ${this.renderToner(e.yellow)} ${this.renderToner(e.black)}
        </div>
      `:K` <div class="toners${t?" black-as-white":""}">${this.renderToner(e.black)}</div> `}renderToner(e){if(!e)return K``;let t,r=e.level;void 0===r&&e.entityId&&(this._queueLastKnown(e.entityId),t=this._lastKnown[e.entityId]?.value,r=t?.level);const s=Fe(this.config,"show_percent",!0),o=t?`${Ve(this.hass)("feature.last_known")}: ${new Date(t.start).toLocaleDateString(this.hass?.locale?.language)}`:void 0;return K`
      <div class="${e.color} toner${t?" stale":""}" title=${o??V}>
        <div class="background">
          <div class="level" style="width: ${r??0}%;"></div>
        </div>
        ${s?K`<div class="percent">${r??0}</div>`:V}
      </div>
    `}_queueLastKnown(e){if(!this.hass||this._lastKnownFetching.has(e))return;const t=this._lastKnown[e];t&&Date.now()-t.fetchedAt<18e5||(this._lastKnownFetching.add(e),async function(e,t){const r=new Date(Date.now()-31536e6).toISOString(),s=await e.callWS({type:"recorder/statistics_during_period",start_time:r,statistic_ids:[t],period:"day",types:["mean"]}),o=s?.[t]??[];for(let e=o.length-1;e>=0;e--){const t=o[e].mean;if("number"==typeof t)return{level:Math.round(t),start:o[e].start}}}(this.hass,e).then(t=>{this._lastKnown={...this._lastKnown,[e]:{value:t,fetchedAt:Date.now()}}}).catch(()=>{this._lastKnown={...this._lastKnown,[e]:{fetchedAt:Date.now()}}}).finally(()=>{this._lastKnownFetching.delete(e)}))}static get styles(){return qe}};e([pe({attribute:!1})],tt.prototype,"hass",void 0),e([pe({attribute:!1})],tt.prototype,"config",void 0),e([pe({attribute:!1})],tt.prototype,"context",void 0),e([function(e){return pe({...e,state:!0,attribute:!1})}()],tt.prototype,"_lastKnown",void 0),tt=e([ce("printer-toner-level-feature")],tt),window.customCardFeatures||=[],window.customCardFeatures.push({type:"printer-toner-level-feature",name:"Printer toner level",isSupported:(e,t)=>{const r=t.entity_id?e.states[t.entity_id]:void 0;return!(!r||"printer"!==r.attributes?.domain||"number"!=typeof r.attributes?.black_level)||!!Ye(e,t.entity_id).black},configurable:!0});export{tt as PrinterTonerLevelFeature};
