(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var R,h,pe,C,_e,de,W,J,B,V,F={},he=[],Pe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function S(_,e){for(var t in e)_[t]=e[t];return _}function ve(_){var e=_.parentNode;e&&e.removeChild(_)}function xe(_,e,t){var o,n,r,s={};for(r in e)r=="key"?o=e[r]:r=="ref"?n=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?R.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)s[r]===void 0&&(s[r]=_.defaultProps[r]);return U(_,s,o,n,null)}function U(_,e,t,o,n){var r={type:_,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++pe,__i:-1,__u:0};return n==null&&h.vnode!=null&&h.vnode(r),r}function T(_){return _.children}function O(_,e){this.props=_,this.context=e}function N(_,e){if(e==null)return _.__?N(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?N(_):null}function me(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return me(_)}}function te(_){(!_.__d&&(_.__d=!0)&&C.push(_)&&!I.__r++||_e!==h.debounceRendering)&&((_e=h.debounceRendering)||de)(I)}function I(){var _,e,t,o,n,r,s,c;for(C.sort(W);_=C.shift();)_.__d&&(e=C.length,o=void 0,r=(n=(t=_).__v).__e,s=[],c=[],t.__P&&((o=S({},n)).__v=n.__v+1,h.vnode&&h.vnode(o),X(t.__P,o,n,t.__n,t.__P.namespaceURI,32&n.__u?[r]:null,s,r??N(n),!!(32&n.__u),c),o.__v=n.__v,o.__.__k[o.__i]=o,be(s,o,c),o.__e!=r&&me(o)),C.length>e&&C.sort(W));I.__r=0}function ye(_,e,t,o,n,r,s,c,u,l,a){var i,p,f,g,w,b=o&&o.__k||he,d=e.length;for(t.__d=u,Se(t,e,b),u=t.__d,i=0;i<d;i++)(f=t.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?F:b[f.__i]||F,f.__i=i,X(_,f,p,n,r,s,c,u,l,a),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&Y(p.ref,null,f),a.push(f.ref,f.__c||g,f)),w==null&&g!=null&&(w=g),65536&f.__u||p.__k===f.__k?u=ge(f,u,_):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:g&&(u=g.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=u,t.__e=w}function Se(_,e,t){var o,n,r,s,c,u=e.length,l=t.length,a=l,i=0;for(_.__k=[],o=0;o<u;o++)s=o+i,(n=_.__k[o]=(n=e[o])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?U(null,n,null,null,null):Q(n)?U(T,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?U(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=_,n.__b=_.__b+1,c=Ce(n,t,s,a),n.__i=c,r=null,c!==-1&&(a--,(r=t[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):c!==s&&(c==s-1?i--:c==s+1?i++:c>s?a>u-s?i+=c-s:i--:c<s&&(c==s-i?i-=c-s:i++),c!==o+i&&(n.__u|=65536))):(r=t[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=N(r)),Z(r,r,!1),t[s]=null,a--);if(a)for(o=0;o<l;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=N(r)),Z(r,r))}function ge(_,e,t){var o,n;if(typeof _.type=="function"){for(o=_.__k,n=0;o&&n<o.length;n++)o[n]&&(o[n].__=_,e=ge(o[n],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=N(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Ce(_,e,t,o){var n=_.key,r=_.type,s=t-1,c=t+1,u=e[t];if(u===null||u&&n==u.key&&r===u.type&&!(131072&u.__u))return t;if(o>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||c<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&n==u.key&&r===u.type)return s;s--}if(c<e.length){if((u=e[c])&&!(131072&u.__u)&&n==u.key&&r===u.type)return c;c++}}return-1}function ne(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||Pe.test(e)?t:t+"px"}function A(_,e,t,o,n){var r;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof o=="string"&&(_.style.cssText=o=""),o)for(e in o)t&&e in t||ne(_.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||ne(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?o?t.u=o.u:(t.u=J,_.addEventListener(e,r?V:B,r)):_.removeEventListener(e,r?V:B,r);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function oe(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=J++;else if(e.t<t.u)return;return t(h.event?h.event(e):e)}}}function X(_,e,t,o,n,r,s,c,u,l){var a,i,p,f,g,w,b,d,v,$,x,E,H,ee,L,q,P=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[c=e.__e=t.__e]),(a=h.__b)&&a(e);e:if(typeof P=="function")try{if(d=e.props,v="prototype"in P&&P.prototype.render,$=(a=P.contextType)&&o[a.__c],x=a?$?$.props.value:a.__:o,t.__c?b=(i=e.__c=t.__c).__=i.__E:(v?e.__c=i=new P(d,x):(e.__c=i=new O(d,x),i.constructor=P,i.render=$e),$&&$.sub(i),i.props=d,i.state||(i.state={}),i.context=x,i.__n=o,p=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&P.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=S({},i.__s)),S(i.__s,P.getDerivedStateFromProps(d,i.__s))),f=i.props,g=i.state,i.__v=e,p)v&&P.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&P.getDerivedStateFromProps==null&&d!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(d,x),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(d,i.__s,x)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(i.props=d,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(M){M&&(M.__=e)}),E=0;E<i._sb.length;E++)i.__h.push(i._sb[E]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(d,i.__s,x),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,w)})}if(i.context=x,i.props=d,i.__P=_,i.__e=!1,H=h.__r,ee=0,v){for(i.state=i.__s,i.__d=!1,H&&H(e),a=i.render(i.props,i.state,i.context),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[]}else do i.__d=!1,H&&H(e),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ee<25);i.state=i.__s,i.getChildContext!=null&&(o=S(S({},o),i.getChildContext())),v&&!p&&i.getSnapshotBeforeUpdate!=null&&(w=i.getSnapshotBeforeUpdate(f,g)),ye(_,Q(q=a!=null&&a.type===T&&a.key==null?a.props.children:a)?q:[q],e,t,o,n,r,s,c,u,l),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),b&&(i.__E=i.__=null)}catch(M){if(e.__v=null,u||r!=null){for(e.__u|=u?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,e.__e=c}else e.__e=t.__e,e.__k=t.__k;h.__e(M,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Ne(t.__e,e,t,o,n,r,s,u,l);(a=h.diffed)&&a(e)}function be(_,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)Y(t[o],t[++o],t[++o]);h.__c&&h.__c(e,_),_.some(function(n){try{_=n.__h,n.__h=[],_.some(function(r){r.call(n)})}catch(r){h.__e(r,n.__v)}})}function Ne(_,e,t,o,n,r,s,c,u){var l,a,i,p,f,g,w,b=t.props,d=e.props,v=e.type;if(v==="svg"?n="http://www.w3.org/2000/svg":v==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((f=r[l])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){_=f,r[l]=null;break}}if(_==null){if(v===null)return document.createTextNode(d);_=document.createElementNS(n,v,d.is&&d),r=null,c=!1}if(v===null)b===d||c&&_.data===d||(_.data=d);else{if(r=r&&R.call(_.childNodes),b=t.props||F,!c&&r!=null)for(b={},l=0;l<_.attributes.length;l++)b[(f=_.attributes[l]).name]=f.value;for(l in b)if(f=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(l!=="key"&&!(l in d)){if(l=="value"&&"defaultValue"in d||l=="checked"&&"defaultChecked"in d)continue;A(_,l,null,f,n)}}for(l in d)f=d[l],l=="children"?p=f:l=="dangerouslySetInnerHTML"?a=f:l=="value"?g=f:l=="checked"?w=f:l==="key"||c&&typeof f!="function"||b[l]===f||A(_,l,f,b[l],n);if(a)c||i&&(a.__html===i.__html||a.__html===_.innerHTML)||(_.innerHTML=a.__html),e.__k=[];else if(i&&(_.innerHTML=""),ye(_,Q(p)?p:[p],e,t,o,v==="foreignObject"?"http://www.w3.org/1999/xhtml":n,r,s,r?r[0]:t.__k&&N(t,0),c,u),r!=null)for(l=r.length;l--;)r[l]!=null&&ve(r[l]);c||(l="value",g!==void 0&&(g!==_[l]||v==="progress"&&!g||v==="option"&&g!==b[l])&&A(_,l,g,b[l],n),l="checked",w!==void 0&&w!==_[l]&&A(_,l,w,b[l],n))}return _}function Y(_,e,t){try{if(typeof _=="function"){var o=typeof _.__u=="function";o&&_.__u(),o&&e==null||(_.__u=_(e))}else _.current=e}catch(n){h.__e(n,t)}}function Z(_,e,t){var o,n;if(h.unmount&&h.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||Y(o,null,e)),(o=_.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,e)}o.base=o.__P=null}if(o=_.__k)for(n=0;n<o.length;n++)o[n]&&Z(o[n],e,t||typeof _.type!="function");t||_.__e==null||ve(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function $e(_,e,t){return this.constructor(_,t)}function He(_,e,t){var o,n,r,s;h.__&&h.__(_,e),n=(o=typeof t=="function")?null:e.__k,r=[],s=[],X(e,_=(!o&&t||e).__k=xe(T,null,[_]),n||F,F,e.namespaceURI,!o&&t?[t]:n?null:e.firstChild?R.call(e.childNodes):null,r,!o&&t?t:n?n.__e:e.firstChild,o,s),be(r,_,s)}R=he.slice,h={__e:function(_,e,t,o){for(var n,r,s;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(_)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(_,o||{}),s=n.__d),s)return n.__E=n}catch(c){_=c}throw _}},pe=0,O.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof _=="function"&&(_=_(S({},t),this.props)),_&&S(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),te(this))},O.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),te(this))},O.prototype.render=T,C=[],de=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(_,e){return _.__v.__b-e.__v.__b},I.__r=0,J=0,B=oe(!1),V=oe(!0);var Fe=0;function k(_,e,t,o,n,r){e||(e={});var s,c,u=e;if("ref"in u)for(c in u={},e)c=="ref"?s=e[c]:u[c]=e[c];var l={type:_,props:u,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Fe,__i:-1,__u:0,__source:n,__self:r};if(typeof _=="function"&&(s=_.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return h.vnode&&h.vnode(l),l}var z,m,j,re,K=0,ke=[],y=h,ie=y.__b,ce=y.__r,le=y.diffed,se=y.__c,ue=y.unmount,fe=y.__;function Te(_,e){y.__h&&y.__h(m,_,K||e),K=0;var t=m.__H||(m.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function Ee(_){return K=1,Le(we,_)}function Le(_,e,t){var o=Te(z++,2);if(o.t=_,!o.__c&&(o.__=[we(void 0,e),function(c){var u=o.__N?o.__N[0]:o.__[0],l=o.t(u,c);u!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=m,!m.u)){var n=function(c,u,l){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!r||r.call(this,c,u,l);var i=!1;return a.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&o.__c.props===c)&&(!r||r.call(this,c,u,l))};m.u=!0;var r=m.shouldComponentUpdate,s=m.componentWillUpdate;m.componentWillUpdate=function(c,u,l){if(this.__e){var a=r;r=void 0,n(c,u,l),r=a}s&&s.call(this,c,u,l)},m.shouldComponentUpdate=n}return o.__N||o.__}function Me(){for(var _;_=ke.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(D),_.__H.__h.forEach(G),_.__H.__h=[]}catch(e){_.__H.__h=[],y.__e(e,_.__v)}}y.__b=function(_){m=null,ie&&ie(_)},y.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),fe&&fe(_,e)},y.__r=function(_){ce&&ce(_),z=0;var e=(m=_.__c).__H;e&&(j===m?(e.__h=[],m.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(D),e.__h.forEach(G),e.__h=[],z=0)),j=m},y.diffed=function(_){le&&le(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(ke.push(e)!==1&&re===y.requestAnimationFrame||((re=y.requestAnimationFrame)||Ae)(Me)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),j=m=null},y.__c=function(_,e){e.some(function(t){try{t.__h.forEach(D),t.__h=t.__h.filter(function(o){return!o.__||G(o)})}catch(o){e.some(function(n){n.__h&&(n.__h=[])}),e=[],y.__e(o,t.__v)}}),se&&se(_,e)},y.unmount=function(_){ue&&ue(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{D(o)}catch(n){e=n}}),t.__H=void 0,e&&y.__e(e,t.__v))};var ae=typeof requestAnimationFrame=="function";function Ae(_){var e,t=function(){clearTimeout(o),ae&&cancelAnimationFrame(e),setTimeout(_)},o=setTimeout(t,100);ae&&(e=requestAnimationFrame(t))}function D(_){var e=m,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),m=e}function G(_){var e=m;_.__c=_.__(),m=e}function we(_,e){return typeof e=="function"?e(_):e}const Ue="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e",Oe="/vite.svg",De="0f3a32c356f27e7ab24a28674bc60492",Ie="https://slalom-aem.myshopify.com/api/2024-07/graphql.json",Re=async()=>{var n,r;const e=await fetch(Ie,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":De},body:JSON.stringify({query:`{
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    featuredImage {
                        url
                    }
                }
            }
        }
    }`.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g," ").replace(/\s\s+/g," ")})});return e.ok?(r=(n=(await e.json()).data)==null?void 0:n.products)==null?void 0:r.edges:null};class qe extends Component{async componentDidMount(){const e=await Re();this.setState({products:e})}render(){}}function je(){const[_,e]=Ee(0);return k(T,{children:[k("div",{children:[k("a",{href:"https://vitejs.dev",target:"_blank",children:k("img",{src:Oe,class:"logo",alt:"Vite logo"})}),k("a",{href:"https://preactjs.com",target:"_blank",children:k("img",{src:Ue,class:"logo preact",alt:"Preact logo"})})]}),k("h1",{children:"Vite + Preact"}),k("div",{class:"card",children:[k("button",{onClick:()=>e(t=>t+1),children:["count is ",_]}),k(qe,{}),k("p",{children:["Edit ",k("code",{children:"src/app.jsx"})," and save to test HMR"]})]}),k("p",{children:["Check out"," ",k("a",{href:"https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app",target:"_blank",children:"create-preact"}),", the official Preact + Vite starter"]}),k("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}He(k(je,{}),document.getElementById("app"));
