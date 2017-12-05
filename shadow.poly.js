(function(){/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};n.Symbol||(n.Symbol=ca)}var ca=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function p(){ba();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(this)}});p=function(){}}function da(a){var b=0;return ea(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ea(a){p();a={next:a};a[n.Symbol.iterator]=function(){return this};return a}function fa(a){p();var b=a[Symbol.iterator];return b?b.call(a):da(a)}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function r(a,b){return{index:a,j:[],m:b}}
function ia(a,b,c,d){var e=0,f=0,h=0,g=0,l=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(h=0;h<l;h++)if(a[h]!==c[h])break a;h=l}if(b==a.length&&d==c.length){g=a.length;for(var k=c.length,m=0;m<l-h&&ja(a[--g],c[--k]);)m++;g=m}e+=h;f+=h;b-=g;d-=g;if(0==b-e&&0==d-f)return[];if(e==b){for(b=r(e,0);f<d;)b.j.push(c[f++]);return[b]}if(f==d)return[r(e,b-e)];l=e;h=f;d=d-h+1;g=b-l+1;b=Array(d);for(k=0;k<d;k++)b[k]=Array(g),b[k][0]=k;for(k=0;k<g;k++)b[0][k]=k;for(k=1;k<d;k++)for(m=1;m<g;m++)if(a[l+m-1]===c[h+k-1])b[k][m]=
b[k-1][m-1];else{var q=b[k-1][m]+1,z=b[k][m-1]+1;b[k][m]=q<z?q:z}l=b.length-1;h=b[0].length-1;d=b[l][h];for(a=[];0<l||0<h;)0==l?(a.push(2),h--):0==h?(a.push(3),l--):(g=b[l-1][h-1],k=b[l-1][h],m=b[l][h-1],q=k<m?k<g?k:g:m<g?m:g,q==g?(g==d?a.push(0):(a.push(1),d=g),l--,h--):q==k?(a.push(3),l--,d=k):(a.push(2),h--,d=m));a.reverse();b=void 0;l=[];for(h=0;h<a.length;h++)switch(a[h]){case 0:b&&(l.push(b),b=void 0);e++;f++;break;case 1:b||(b=r(e,0));b.m++;e++;b.j.push(c[f]);f++;break;case 2:b||(b=r(e,0));
b.m++;e++;break;case 3:b||(b=r(e,0)),b.j.push(c[f]),f++}b&&l.push(b);return l}function ja(a,b){return a===b};var t=window.ShadyDOM||{};t.R=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var u=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");t.h=!!(u&&u.configurable&&u.get);t.H=t.force||!t.R;function v(a){return a.__shady&&void 0!==a.__shady.firstChild}function w(a){return"ShadyRoot"===a.K}function x(a){a=a.getRootNode();if(w(a))return a}var y=Element.prototype,ka=y.matches||y.matchesSelector||y.mozMatchesSelector||y.msMatchesSelector||y.oMatchesSelector||y.webkitMatchesSelector;
function A(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}}function B(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)A(a,c[d]);return a}function la(a,b){for(var c in b)a[c]=b[c]}var C=document.createTextNode(""),ma=0,D=[];(new MutationObserver(function(){for(;D.length;)try{D.shift()()}catch(a){throw C.textContent=ma++,a;}})).observe(C,{characterData:!0});
function na(a){D.push(a);C.textContent=ma++}var oa=!!document.contains;function pa(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1};var qa=/[&\u00A0"]/g,sa=/[&\u00A0<>]/g;function ta(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function ua(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var va=ua("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),wa=ua("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function E(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,h;e<f&&(h=d[e]);e++){a:{var g=h;var l=a;var k=b;switch(g.nodeType){case Node.ELEMENT_NODE:for(var m=g.localName,q="<"+m,z=g.attributes,ra=0;l=z[ra];ra++)q+=" "+l.name+'="'+l.value.replace(qa,ta)+'"';q+=">";g=va[m]?q:q+E(g,k)+"</"+m+">";break a;case Node.TEXT_NODE:g=g.data;g=l&&wa[l.localName]?g:g.replace(sa,ta);break a;case Node.COMMENT_NODE:g="\x3c!--"+g.data+"--\x3e";break a;default:throw window.console.error(g),
Error("not implemented");}}c+=g}return c};var F={},G=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),H=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function xa(a){var b=[];G.currentNode=a;for(a=G.firstChild();a;)b.push(a),a=G.nextSibling();return b}F.parentNode=function(a){G.currentNode=a;return G.parentNode()};F.firstChild=function(a){G.currentNode=a;return G.firstChild()};F.lastChild=function(a){G.currentNode=a;return G.lastChild()};F.previousSibling=function(a){G.currentNode=a;return G.previousSibling()};
F.nextSibling=function(a){G.currentNode=a;return G.nextSibling()};F.childNodes=xa;F.parentElement=function(a){H.currentNode=a;return H.parentNode()};F.firstElementChild=function(a){H.currentNode=a;return H.firstChild()};F.lastElementChild=function(a){H.currentNode=a;return H.lastChild()};F.previousElementSibling=function(a){H.currentNode=a;return H.previousSibling()};F.nextElementSibling=function(a){H.currentNode=a;return H.nextSibling()};
F.children=function(a){var b=[];H.currentNode=a;for(a=H.firstChild();a;)b.push(a),a=H.nextSibling();return b};F.innerHTML=function(a){return E(a,function(a){return xa(a)})};F.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var I={},ya=Element.prototype.insertBefore,za=Element.prototype.removeChild,Aa=Element.prototype.setAttribute,Ba=Element.prototype.removeAttribute,Ca=Element.prototype.cloneNode,Da=Document.prototype.importNode,Ea=Element.prototype.addEventListener,Fa=Element.prototype.removeEventListener,Ga=Window.prototype.addEventListener,Ha=Window.prototype.removeEventListener,Ia=Element.prototype.dispatchEvent,Ja=Element.prototype.querySelector,Ka=Element.prototype.querySelectorAll,La=Node.prototype.contains||
HTMLElement.prototype.contains;I.appendChild=Element.prototype.appendChild;I.insertBefore=ya;I.removeChild=za;I.setAttribute=Aa;I.removeAttribute=Ba;I.cloneNode=Ca;I.importNode=Da;I.addEventListener=Ea;I.removeEventListener=Fa;I.T=Ga;I.U=Ha;I.dispatchEvent=Ia;I.querySelector=Ja;I.querySelectorAll=Ka;I.contains=La;var J=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),Ma=document.implementation.createHTMLDocument("inert"),K=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),Na={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:F.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&this.__shady.parentNode;
return void 0!==a?a:F.parentNode(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:F.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:F.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&
void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return F.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return F.previousElementSibling(this)},configurable:!0}},L={childNodes:{get:function(){if(v(this)){if(!this.__shady.childNodes){this.__shady.childNodes=
[];for(var a=this.firstChild;a;a=a.nextSibling)this.__shady.childNodes.push(a)}var b=this.__shady.childNodes}else b=F.childNodes(this);b.item=function(a){return b[a]};return b},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:F.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:F.lastChild(this)},
configurable:!0},textContent:{get:function(){if(v(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return F.textContent(this)},set:function(a){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&
void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return F.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return F.lastElementChild(this)},configurable:!0},children:{get:function(){var a;v(this)?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===
Node.ELEMENT_NODE}):a=F.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return v(this)?E(a):F.innerHTML(a)},set:function(a){for(var b="template"===this.localName?this.content:this;b.firstChild;)b.removeChild(b.firstChild);var c=this.localName;c&&"template"!==c||(c="div");c=Ma.createElement(c);for(J&&J.set?J.set.call(c,a):c.innerHTML=a;c.firstChild;)b.appendChild(c.firstChild)},configurable:!0}},
Oa={shadowRoot:{get:function(){return this.__shady&&this.__shady.S||null},configurable:!0}},M={activeElement:{get:function(){var a=K&&K.get?K.get.call(document):t.h?void 0:document.activeElement;if(a&&a.nodeType){var b=!!w(this);if(this===document||b&&this.host!==a&&I.contains.call(this.host,a)){for(b=x(a);b&&b!==this;)a=b.host,b=x(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function N(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function O(a){N(a,Na);N(a,L);N(a,M)}var Pa=t.h?function(){}:function(a){a.__shady&&a.__shady.L||(a.__shady=a.__shady||{},a.__shady.L=!0,N(a,Na,!0))},Qa=t.h?function(){}:function(a){a.__shady&&a.__shady.J||(a.__shady=a.__shady||{},a.__shady.J=!0,N(a,L,!0),N(a,Oa,!0))};function Ra(a,b,c){Pa(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}
function P(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=F.firstChild(a);a.__shady.lastChild=F.lastChild(a);Qa(a);for(var b=a.__shady.childNodes=F.childNodes(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,Pa(d)}};function Q(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&F.parentNode(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&R(b.parentNode,b);d=x(a);var e;if(e=d)a:{if(!b.__noInsertionPoint){var f;"slot"===b.localName?f=[b]:b.querySelectorAll&&
(f=b.querySelectorAll("slot"));if(f&&f.length){e=f;break a}}e=void 0}(f=e)&&d.f.push.apply(d.f,[].concat(f instanceof Array?f:ha(fa(f))));d&&("slot"===a.localName||f)&&S(d);if(v(a)){d=c;Qa(a);a.__shady=a.__shady||{};void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=b.childNodes;for(e=0;e<f.length;e++)Ra(f[e],a,d);b.__shady=b.__shady||{};d=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=d;b.__shady.childNodes=
d}else Ra(b,a,d);if(Sa(a)){S(a.__shady.root);var h=!0}else a.__shady.root&&(h=!0)}h||(h=w(a)?a.host:a,c?(c=Ta(c),I.insertBefore.call(h,b,c)):I.appendChild.call(h,b));Ua(a,b);return b}
function R(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var c=x(b);if(v(a)){b.__shady=b.__shady||{};a.__shady=a.__shady||{};b===a.__shady.firstChild&&(a.__shady.firstChild=b.__shady.nextSibling);b===a.__shady.lastChild&&(a.__shady.lastChild=b.__shady.previousSibling);var d=b.__shady.previousSibling,e=b.__shady.nextSibling;d&&(d.__shady=d.__shady||{},d.__shady.nextSibling=e);e&&(e.__shady=e.__shady||{},e.__shady.previousSibling=d);b.__shady.parentNode=
b.__shady.previousSibling=b.__shady.nextSibling=void 0;void 0!==a.__shady.childNodes&&(a.__shady.childNodes=null);if(Sa(a)){S(a.__shady.root);var f=!0}}Va(b);if(c){(d=a&&"slot"===a.localName)&&(f=!0);Wa(c);e=c.a;for(var h in e)for(var g=e[h],l=0;l<g.length;l++){var k=g[l];if(pa(b,k)){g.splice(l,1);var m=c.b.indexOf(k);0<=m&&c.b.splice(m,1);l--;if(m=k.__shady.g)for(k=0;k<m.length;k++){var q=m[k],z=F.parentNode(q);z&&I.removeChild.call(z,q)}m=!0}}(m||d)&&S(c)}f||(f=w(a)?a.host:a,(!a.__shady.root&&"slot"!==
b.localName||f===F.parentNode(b))&&I.removeChild.call(f,b));Ua(a,null,b);return b}function Va(a){if(a.__shady&&void 0!==a.__shady.C)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)Va(e);a.__shady&&(a.__shady.C=void 0)}function Ta(a){var b=a;a&&"slot"===a.localName&&(b=(b=a.__shady&&a.__shady.g)&&b.length?b[0]:Ta(a.nextSibling));return b}function Sa(a){return(a=a&&a.__shady&&a.__shady.root)&&Xa(a)}
function Ya(a,b){if("slot"===b)a=a.parentNode,Sa(a)&&S(a.__shady.root);else if("slot"===a.localName&&"name"===b&&(b=x(a))){var c=a.M,d=Za(a);if(d!==c){c=b.a[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.a[d]||(b.a[d]=[]);c.push(a);1<c.length&&(b.a[d]=$a(c))}S(b)}}function Ua(a,b,c){if(a=a.__shady&&a.__shady.i)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),ab(a)}
function bb(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.C;void 0===b&&(w(a)?b=a:b=(b=a.parentNode)?bb(b):a,I.contains.call(document.documentElement,a)&&(a.__shady.C=b));return b}}function T(a,b,c){var d=[];cb(a.childNodes,b,c,d);return d}function cb(a,b,c,d){for(var e=0,f=a.length,h;e<f&&(h=a[e]);e++){var g;if(g=h.nodeType===Node.ELEMENT_NODE){g=h;var l=b,k=c,m=d,q=l(g);q&&m.push(g);k&&k(q)?g=q:(cb(g.childNodes,l,k,m),g=void 0)}if(g)break}}var U=null;
function db(a,b,c){U||(U=window.ShadyCSS&&window.ShadyCSS.ScopingShim);U&&"class"===b?U.setElementClass(a,c):(I.setAttribute.call(a,b,c),Ya(a,b))}function eb(a,b){if(a.ownerDocument!==document)return I.importNode.call(document,a,b);var c=I.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=eb(a[b],!0),c.appendChild(d)}return c};var V=[],fb;function gb(a){fb||(fb=!0,na(W));V.push(a)}function W(){fb=!1;for(var a=!!V.length;V.length;)V.shift()();return a}W.list=V;var hb={};function X(a,b,c){if(a!==hb)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=X.prototype;a.K="ShadyRoot";P(b);P(a);a.host=b;a.c=c&&c.mode;b.__shady=b.__shady||{};b.__shady.root=a;b.__shady.S="closed"!==a.c?a:null;a.l=!1;a.b=[];a.a={};a.f=[];c=F.childNodes(b);for(var d=0,e=c.length;d<e;d++)I.removeChild.call(b,c[d]);return a}X.prototype=Object.create(DocumentFragment.prototype);function S(a){a.l||(a.l=!0,gb(function(){return ib(a)}))}
function ib(a){for(var b;a;){a.l&&(b=a);a:{var c=a;a=c.host.getRootNode();if(w(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
X.prototype._renderRoot=function(){this.l=!1;Wa(this);for(var a=0,b;a<this.b.length;a++){b=this.b[a];var c=b.__shady.assignedNodes;b.__shady.assignedNodes=[];b.__shady.g=[];if(b.__shady.G=c)for(var d=0;d<c.length;d++){var e=c[d];e.__shady.A=e.__shady.assignedSlot;e.__shady.assignedSlot===b&&(e.__shady.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)jb(this,b);for(a=0;a<this.b.length;a++){b=this.b[a];if(!b.__shady.assignedNodes.length)for(c=b.firstChild;c;c=c.nextSibling)jb(this,c,
b);c=b.parentNode;(c=c.__shady&&c.__shady.root)&&Xa(c)&&c._renderRoot();kb(this,b.__shady.g,b.__shady.assignedNodes);if(c=b.__shady.G){for(d=0;d<c.length;d++)c[d].__shady.A=null;b.__shady.G=null;c.length>b.__shady.assignedNodes.length&&(b.__shady.B=!0)}b.__shady.B&&(b.__shady.B=!1,lb(this,b))}a=this.b;b=[];for(c=0;c<a.length;c++)d=a[c].parentNode,d.__shady&&d.__shady.root||!(0>b.indexOf(d))||b.push(d);for(a=0;a<b.length;a++){c=b[a];d=c===this?this.host:c;e=[];c=c.childNodes;for(var f=0;f<c.length;f++){var h=
c[f];if("slot"==h.localName){h=h.__shady.g;for(var g=0;g<h.length;g++)e.push(h[g])}else e.push(h)}c=void 0;f=F.childNodes(d);h=ia(e,e.length,f,f.length);for(var l=g=0;g<h.length&&(c=h[g]);g++){for(var k=0,m;k<c.j.length&&(m=c.j[k]);k++)F.parentNode(m)===d&&I.removeChild.call(d,m),f.splice(c.index+l,1);l-=c.m}for(l=0;l<h.length&&(c=h[l]);l++)for(g=f[c.index],k=c.index;k<c.index+c.m;k++)m=e[k],I.insertBefore.call(d,m,g),f.splice(k,0,m)}};
function jb(a,b,c){b.__shady=b.__shady||{};var d=b.__shady.A;b.__shady.A=null;c||(c=(a=a.a[b.slot||"__catchall"])&&a[0]);c?(c.__shady.assignedNodes.push(b),b.__shady.assignedSlot=c):b.__shady.assignedSlot=void 0;d!==b.__shady.assignedSlot&&b.__shady.assignedSlot&&(b.__shady.assignedSlot.__shady.B=!0)}function kb(a,b,c){for(var d=0,e;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=e.__shady.assignedNodes;f&&f.length&&kb(a,b,f)}else b.push(c[d])}
function lb(a,b){I.dispatchEvent.call(b,new Event("slotchange"));b.__shady.assignedSlot&&lb(a,b.__shady.assignedSlot)}function Wa(a){if(a.f.length){for(var b=a.f,c,d=0;d<b.length;d++){var e=b[d];e.__shady=e.__shady||{};P(e);P(e.parentNode);var f=Za(e);a.a[f]?(c=c||{},c[f]=!0,a.a[f].push(e)):a.a[f]=[e];a.b.push(e)}if(c)for(var h in c)a.a[h]=$a(a.a[h]);a.f=[]}}function Za(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.M=b}
function $a(a){return a.sort(function(a,c){a=mb(a);for(var b=mb(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function mb(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}function Xa(a){Wa(a);return!!a.b.length}X.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.w=this;this.host.addEventListener(a,b,c)};
X.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.w=this;this.host.removeEventListener(a,b,c)};X.prototype.getElementById=function(a){return T(this,function(b){return b.id==a},function(a){return!!a})[0]||null};var nb=X.prototype;N(nb,L,!0);N(nb,M,!0);function ob(){this.c=!1;this.addedNodes=[];this.removedNodes=[];this.o=new Set}function ab(a){a.c||(a.c=!0,na(function(){pb(a)}))}function pb(a){if(a.c){a.c=!1;var b=a.takeRecords();b.length&&a.o.forEach(function(a){a(b)})}}ob.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function qb(a,b){a.__shady=a.__shady||{};a.__shady.i||(a.__shady.i=new ob);a.__shady.i.o.add(b);var c=a.__shady.i;return{N:b,P:c,O:a,takeRecords:function(){return c.takeRecords()}}}function rb(a){var b=a&&a.P;b&&(b.o.delete(a.N),b.o.size||(a.O.__shady.i=null))}
function sb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Y="__eventWrappers"+Date.now(),tb={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,
dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function ub(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function vb(a,b){if(!w)return a;a=ub(a,!0);for(var c=0,d,e,f,h;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(h=a.indexOf(f),e=f),!w(f)||-1<h)return d}
var wb={get composed(){!1!==this.isTrusted&&void 0===this.s&&(this.s=tb[this.type]);return this.s||!1},composedPath:function(){this.D||(this.D=ub(this.__target,this.composed));return this.D},get target(){return vb(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.v)return null;this.F||(this.F=ub(this.v,!0));return vb(this.currentTarget,this.F)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.u=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.u=this.I=!0}};function xb(a){function b(b,d){b=new a(b,d);b.s=d&&!!d.composed;return b}la(b,a);b.prototype=a.prototype;return b}var yb={focus:!0,blur:!0};function zb(a){return a.__target!==a.target||a.v!==a.relatedTarget}function Ab(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!zb(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.I);d++);}
function Bb(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];Ab(a,d,"capture");if(a.u)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=d.__shady&&d.__shady.root;if(0===c||f&&f===e)if(Ab(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.u)break}}
function Cb(a,b,c,d,e,f){for(var h=0;h<a.length;h++){var g=a[h],l=g.type,k=g.capture,m=g.once,q=g.passive;if(b===g.node&&c===l&&d===k&&e===m&&f===q)return h}return-1}
function Db(a,b,c){if(b){if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.w||this,g=b[Y];if(g){if(-1<Cb(g,h,a,d,e,f))return}else b[Y]=[];g=function(d){e&&this.removeEventListener(a,b,c);d.__target||Eb(d);if(h!==this){var f=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",{get:function(){return h},configurable:!0})}if(d.composed||-1<d.composedPath().indexOf(h))if(zb(d)&&d.target===d.relatedTarget)d.eventPhase===
Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===h||h instanceof Window){var g="object"===typeof b&&b.handleEvent?b.handleEvent(d):b.call(h,d);h!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return g}};b[Y].push({node:this,type:a,capture:d,once:e,passive:f,V:g});yb[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][d?"capture":
"bubble"].push(g)):(this instanceof Window?I.T:I.addEventListener).call(this,a,g,c)}}
function Fb(a,b,c){if(b){if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.w||this,g=void 0;var l=null;try{l=b[Y]}catch(k){}l&&(e=Cb(l,h,a,d,e,f),-1<e&&(g=l.splice(e,1)[0].V,l.length||(b[Y]=void 0)));(this instanceof Window?I.U:I.removeEventListener).call(this,a,g||b,c);g&&yb[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],g=a.indexOf(g),-1<g&&a.splice(g,1))}}
function Gb(){for(var a in yb)window.addEventListener(a,function(a){a.__target||(Eb(a),Bb(a))},!0)}function Eb(a){a.__target=a.target;a.v=a.relatedTarget;if(t.h){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.W=b;A(c,wb);b.__patchProto=c}a.__proto__=b.__patchProto}else A(a,wb)}var Hb=xb(window.Event),Ib=xb(window.CustomEvent),Jb=xb(window.MouseEvent);function Kb(a){var b=a.getRootNode();w(b)&&ib(b);return a.__shady&&a.__shady.assignedSlot||null}
var Lb={addEventListener:Db.bind(window),removeEventListener:Fb.bind(window)},Mb={addEventListener:Db,removeEventListener:Fb,appendChild:function(a){return Q(this,a)},insertBefore:function(a,b){return Q(this,a,b)},removeChild:function(a){return R(this,a)},replaceChild:function(a,b){Q(this,a,b);R(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=I.cloneNode.call(this,a);else if(b=I.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),
b.appendChild(d)}return b},getRootNode:function(){return bb(this)},contains:function(a){return pa(this,a)},get isConnected(){var a=this.ownerDocument;if(oa&&I.contains.call(a,this)||a.documentElement&&I.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof X?a.host:void 0);return!!(a&&a instanceof Document)},dispatchEvent:function(a){W();return I.dispatchEvent.call(this,a)}},Nb={get assignedSlot(){return Kb(this)}},Ob={querySelector:function(a){return T(this,
function(b){return ka.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return T(this,function(b){return ka.call(b,a)})}},Pb={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();w(b)&&ib(b);return this.__shady?(a&&a.flatten?this.__shady.g:this.__shady.assignedNodes)||[]:[]}}},Qb=B({setAttribute:function(a,b){db(this,a,b)},removeAttribute:function(a){I.removeAttribute.call(this,a);Ya(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";
if(!a)throw"Not enough arguments.";return new X(hb,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){db(this,"slot",a)},get assignedSlot(){return Kb(this)}},Ob,Pb);Object.defineProperties(Qb,Oa);var Rb=B({importNode:function(a,b){return eb(a,b)},getElementById:function(a){return T(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},Ob);Object.defineProperties(Rb,{_activeElement:M.activeElement});
var Sb=HTMLElement.prototype.blur,Tb=B({blur:function(){var a=this.__shady&&this.__shady.root;(a=a&&a.activeElement)?a.blur():Sb.call(this)}});function Z(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(t.H){window.ShadyDOM={inUse:t.H,patch:function(a){return a},isShadyRoot:w,enqueue:gb,flush:W,settings:t,filterMutations:sb,observeChildren:qb,unobserveChildren:rb,nativeMethods:I,nativeTree:F};window.Event=Hb;window.CustomEvent=Ib;window.MouseEvent=Jb;Gb();var Ub=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;Z(window.Node.prototype,Mb);Z(window.Window.prototype,Lb);Z(window.Text.prototype,Nb);Z(window.DocumentFragment.prototype,Ob);Z(window.Element.prototype,Qb);Z(window.Document.prototype,
Rb);window.HTMLSlotElement&&Z(window.HTMLSlotElement.prototype,Pb);Z(Ub.prototype,Tb);t.h&&(O(window.Node.prototype),O(window.Text.prototype),O(window.DocumentFragment.prototype),O(window.Element.prototype),O(Ub.prototype),O(window.Document.prototype),window.HTMLSlotElement&&O(window.HTMLSlotElement.prototype));window.ShadowRoot=X};}).call(this);

//# sourceMappingURL=shadydom.min.js.map