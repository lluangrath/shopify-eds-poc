(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&_(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var B,v,Le,U,pe,xe,te,le,ne,re,He,N={},Te=[],je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,X=Array.isArray;function L(t,e){for(var n in e)t[n]=e[n];return t}function Ue(t){var e=t.parentNode;e&&e.removeChild(t)}function D(t,e,n){var _,r,o,s={};for(o in e)o=="key"?_=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?B.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return F(t,s,_,r,null)}function F(t,e,n,_,r){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Le,__i:-1,__u:0};return r==null&&v.vnode!=null&&v.vnode(o),o}function W(t){return t.children}function q(t,e){this.props=t,this.context=e}function R(t,e){if(e==null)return t.__?R(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?R(t):null}function De(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return De(t)}}function _e(t){(!t.__d&&(t.__d=!0)&&U.push(t)&&!Q.__r++||pe!==v.debounceRendering)&&((pe=v.debounceRendering)||xe)(Q)}function Q(){var t,e,n,_,r,o,s,c;for(U.sort(te);t=U.shift();)t.__d&&(e=U.length,_=void 0,o=(r=(n=t).__v).__e,s=[],c=[],n.__P&&((_=L({},r)).__v=r.__v+1,v.vnode&&v.vnode(_),ue(n.__P,_,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,s,o??R(r),!!(32&r.__u),c),_.__v=r.__v,_.__.__k[_.__i]=_,Ie(s,_,c),_.__e!=o&&De(_)),U.length>e&&U.sort(te));Q.__r=0}function Re(t,e,n,_,r,o,s,c,u,l,d){var i,p,f,g,w,b=_&&_.__k||Te,h=e.length;for(n.__d=u,Ke(n,e,b),u=n.__d,i=0;i<h;i++)(f=n.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?N:b[f.__i]||N,f.__i=i,ue(t,f,p,r,o,s,c,u,l,d),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&ae(p.ref,null,f),d.push(f.ref,f.__c||g,f)),w==null&&g!=null&&(w=g),65536&f.__u||p.__k===f.__k?u=Ae(f,u,t):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:g&&(u=g.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=u,n.__e=w}function Ke(t,e,n){var _,r,o,s,c,u=e.length,l=n.length,d=l,i=0;for(t.__k=[],_=0;_<u;_++)s=_+i,(r=t.__k[_]=(r=e[_])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?F(null,r,null,null,null):X(r)?F(W,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?F(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,c=ze(r,n,s,d),r.__i=c,o=null,c!==-1&&(d--,(o=n[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):c!==s&&(c==s-1?i--:c==s+1?i++:c>s?d>u-s?i+=c-s:i--:c<s&&(c==s-i?i-=c-s:i++),c!==_+i&&(r.__u|=65536))):(o=n[s])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=R(o)),oe(o,o,!1),n[s]=null,d--);if(d)for(_=0;_<l;_++)(o=n[_])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=R(o)),oe(o,o))}function Ae(t,e,n){var _,r;if(typeof t.type=="function"){for(_=t.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=t,e=Ae(_[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=R(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Oe(t,e){return e=e||[],t==null||typeof t=="boolean"||(X(t)?t.some(function(n){Oe(n,e)}):e.push(t)),e}function ze(t,e,n,_){var r=t.key,o=t.type,s=n-1,c=n+1,u=e[n];if(u===null||u&&r==u.key&&o===u.type&&!(131072&u.__u))return n;if(_>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||c<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&r==u.key&&o===u.type)return s;s--}if(c<e.length){if((u=e[c])&&!(131072&u.__u)&&r==u.key&&o===u.type)return c;c++}}return-1}function de(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||je.test(e)?n:n+"px"}function K(t,e,n,_,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||de(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||de(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_?n.u=_.u:(n.u=le,t.addEventListener(e,o?re:ne,o)):t.removeEventListener(e,o?re:ne,o);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function he(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=le++;else if(e.t<n.u)return;return n(v.event?v.event(e):e)}}}function ue(t,e,n,_,r,o,s,c,u,l){var d,i,p,f,g,w,b,h,m,x,C,E,H,j,A,k,S=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[c=e.__e=n.__e]),(d=v.__b)&&d(e);e:if(typeof S=="function")try{if(h=e.props,m="prototype"in S&&S.prototype.render,x=(d=S.contextType)&&_[d.__c],C=d?x?x.props.value:d.__:_,n.__c?b=(i=e.__c=n.__c).__=i.__E:(m?e.__c=i=new S(h,C):(e.__c=i=new q(h,C),i.constructor=S,i.render=Je),x&&x.sub(i),i.props=h,i.state||(i.state={}),i.context=C,i.__n=_,p=i.__d=!0,i.__h=[],i._sb=[]),m&&i.__s==null&&(i.__s=i.state),m&&S.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=L({},i.__s)),L(i.__s,S.getDerivedStateFromProps(h,i.__s))),f=i.props,g=i.state,i.__v=e,p)m&&S.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),m&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(m&&S.getDerivedStateFromProps==null&&h!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,C),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,C)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),E=0;E<i._sb.length;E++)i.__h.push(i._sb[E]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,C),m&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,w)})}if(i.context=C,i.props=h,i.__P=t,i.__e=!1,H=v.__r,j=0,m){for(i.state=i.__s,i.__d=!1,H&&H(e),d=i.render(i.props,i.state,i.context),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[]}else do i.__d=!1,H&&H(e),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++j<25);i.state=i.__s,i.getChildContext!=null&&(_=L(L({},_),i.getChildContext())),m&&!p&&i.getSnapshotBeforeUpdate!=null&&(w=i.getSnapshotBeforeUpdate(f,g)),Re(t,X(k=d!=null&&d.type===W&&d.key==null?d.props.children:d)?k:[k],e,n,_,r,o,s,c,u,l),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),b&&(i.__E=i.__=null)}catch(O){if(e.__v=null,u||o!=null){for(e.__u|=u?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,e.__e=c}else e.__e=n.__e,e.__k=n.__k;v.__e(O,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ge(n.__e,e,n,_,r,o,s,u,l);(d=v.diffed)&&d(e)}function Ie(t,e,n){e.__d=void 0;for(var _=0;_<n.length;_++)ae(n[_],n[++_],n[++_]);v.__c&&v.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){v.__e(o,r.__v)}})}function Ge(t,e,n,_,r,o,s,c,u){var l,d,i,p,f,g,w,b=n.props,h=e.props,m=e.type;if(m==="svg"?r="http://www.w3.org/2000/svg":m==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!m&&(m?f.localName===m:f.nodeType===3)){t=f,o[l]=null;break}}if(t==null){if(m===null)return document.createTextNode(h);t=document.createElementNS(r,m,h.is&&h),o=null,c=!1}if(m===null)b===h||c&&t.data===h||(t.data=h);else{if(o=o&&B.call(t.childNodes),b=n.props||N,!c&&o!=null)for(b={},l=0;l<t.attributes.length;l++)b[(f=t.attributes[l]).name]=f.value;for(l in b)if(f=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(l!=="key"&&!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;K(t,l,null,f,r)}}for(l in h)f=h[l],l=="children"?p=f:l=="dangerouslySetInnerHTML"?d=f:l=="value"?g=f:l=="checked"?w=f:l==="key"||c&&typeof f!="function"||b[l]===f||K(t,l,f,b[l],r);if(d)c||i&&(d.__html===i.__html||d.__html===t.innerHTML)||(t.innerHTML=d.__html),e.__k=[];else if(i&&(t.innerHTML=""),Re(t,X(p)?p:[p],e,n,_,m==="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,s,o?o[0]:n.__k&&R(n,0),c,u),o!=null)for(l=o.length;l--;)o[l]!=null&&Ue(o[l]);c||(l="value",g!==void 0&&(g!==t[l]||m==="progress"&&!g||m==="option"&&g!==b[l])&&K(t,l,g,b[l],r),l="checked",w!==void 0&&w!==t[l]&&K(t,l,w,b[l],r))}return t}function ae(t,e,n){try{if(typeof t=="function"){var _=typeof t.__u=="function";_&&t.__u(),_&&e==null||(t.__u=t(e))}else t.current=e}catch(r){v.__e(r,n)}}function oe(t,e,n){var _,r;if(v.unmount&&v.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||ae(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){v.__e(o,e)}_.base=_.__P=null}if(_=t.__k)for(r=0;r<_.length;r++)_[r]&&oe(_[r],e,n||typeof t.type!="function");n||t.__e==null||Ue(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Je(t,e,n){return this.constructor(t,n)}function Qe(t,e,n){var _,r,o,s;v.__&&v.__(t,e),r=(_=typeof n=="function")?null:e.__k,o=[],s=[],ue(e,t=(!_&&n||e).__k=D(W,null,[t]),r||N,N,e.namespaceURI,!_&&n?[n]:r?null:e.firstChild?B.call(e.childNodes):null,o,!_&&n?n:r?r.__e:e.firstChild,_,s),Ie(o,t,s)}function ve(t,e,n){var _,r,o,s,c=L({},t.props);for(o in t.type&&t.type.defaultProps&&(s=t.type.defaultProps),e)o=="key"?_=e[o]:o=="ref"?r=e[o]:c[o]=e[o]===void 0&&s!==void 0?s[o]:e[o];return arguments.length>2&&(c.children=arguments.length>3?B.call(arguments,2):n),F(t.type,c,_||t.key,r||t.ref,null)}function Me(t,e){var n={__c:e="__cC"+He++,__:t,Consumer:function(_,r){return _.children(r)},Provider:function(_){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&r.some(function(c){c.__e=!0,_e(c)})},this.sub=function(s){r.push(s);var c=s.componentWillUnmount;s.componentWillUnmount=function(){r&&r.splice(r.indexOf(s),1),c&&c.call(s)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}B=Te.slice,v={__e:function(t,e,n,_){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,_||{}),s=r.__d),s)return r.__E=r}catch(c){t=c}throw t}},Le=0,q.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof t=="function"&&(t=t(L({},n),this.props)),t&&L(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),_e(this))},q.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_e(this))},q.prototype.render=W,U=[],xe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(t,e){return t.__v.__b-e.__v.__b},Q.__r=0,le=0,ne=he(!1),re=he(!0),He=0;var Xe=0;function a(t,e,n,_,r,o){e||(e={});var s,c,u=e;if("ref"in u)for(c in u={},e)c=="ref"?s=e[c]:u[c]=e[c];var l={type:t,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Xe,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return v.vnode&&v.vnode(l),l}var I,y,Z,me,ie=0,Fe=[],P=v,ge=P.__b,ye=P.__r,be=P.diffed,ke=P.__c,Pe=P.unmount,Se=P.__;function Y(t,e){P.__h&&P.__h(y,t,ie||e),ie=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function qe(t,e,n){var _=Y(I++,2);if(_.t=t,!_.__c&&(_.__=[Ve(void 0,e),function(c){var u=_.__N?_.__N[0]:_.__[0],l=_.t(u,c);u!==l&&(_.__N=[l,_.__[1]],_.__c.setState({}))}],_.__c=y,!y.u)){var r=function(c,u,l){if(!_.__c.__H)return!0;var d=_.__c.__H.__.filter(function(p){return!!p.__c});if(d.every(function(p){return!p.__N}))return!o||o.call(this,c,u,l);var i=!1;return d.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&_.__c.props===c)&&(!o||o.call(this,c,u,l))};y.u=!0;var o=y.shouldComponentUpdate,s=y.componentWillUpdate;y.componentWillUpdate=function(c,u,l){if(this.__e){var d=o;o=void 0,r(c,u,l),o=d}s&&s.call(this,c,u,l)},y.shouldComponentUpdate=r}return _.__N||_.__}function Ne(t,e){var n=Y(I++,4);!P.__s&&We(n.__H,e)&&(n.__=t,n.i=e,y.__h.push(n))}function $(t){return ie=5,fe(function(){return{current:t}},[])}function fe(t,e){var n=Y(I++,7);return We(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Be(t){var e=y.context[t.__c],n=Y(I++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(y)),e.props.value):t.__}function Ye(){for(var t;t=Fe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(J),t.__H.__h.forEach(ce),t.__H.__h=[]}catch(e){t.__H.__h=[],P.__e(e,t.__v)}}P.__b=function(t){y=null,ge&&ge(t)},P.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Se&&Se(t,e)},P.__r=function(t){ye&&ye(t),I=0;var e=(y=t.__c).__H;e&&(Z===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(J),e.__h.forEach(ce),e.__h=[],I=0)),Z=y},P.diffed=function(t){be&&be(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Fe.push(e)!==1&&me===P.requestAnimationFrame||((me=P.requestAnimationFrame)||Ze)(Ye)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Z=y=null},P.__c=function(t,e){e.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(_){return!_.__||ce(_)})}catch(_){e.some(function(r){r.__h&&(r.__h=[])}),e=[],P.__e(_,n.__v)}}),ke&&ke(t,e)},P.unmount=function(t){Pe&&Pe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{J(_)}catch(r){e=r}}),n.__H=void 0,e&&P.__e(e,n.__v))};var we=typeof requestAnimationFrame=="function";function Ze(t){var e,n=function(){clearTimeout(_),we&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(n,100);we&&(e=requestAnimationFrame(n))}function J(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function ce(t){var e=y;t.__c=t.__(),y=e}function We(t,e){return!t||t.length!==e.length||e.some(function(n,_){return n!==t[_]})}function Ve(t,e){return typeof e=="function"?e(t):e}let T;const et=(t,e)=>{if(T=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const n=e.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return t;T=!0,e.preventDefault(),e=n.href.replace(location.origin,"")}else typeof e=="string"?T=!0:e&&e.url?(T=!e.replace,e=e.url):e=location.pathname+location.search;return T===!0?history.pushState(null,"",e):T===!1&&history.replaceState(null,"",e),e},tt=(t,e,n)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let _=0,r,o;_<Math.max(t.length,e.length);_++){let[,s,c,u]=(e[_]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=t[_],!(!s&&c==r)){if(!s&&r&&u=="*"){n.rest="/"+t.slice(_).map(decodeURIComponent).join("/");break}if(!s||!r&&u!="?"&&u!="*")return;if(o=u=="+"||u=="*",o?r=t.slice(_).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),n.params[c]=r,c in n||(n[c]=r),o)break}}return n};function M(t){const[e,n]=qe(et,t.url||location.pathname+location.search),_=T===!0,r=fe(()=>{const o=new URL(e,location.origin),s=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:s,query:Object.fromEntries(o.searchParams),route:(c,u)=>n({url:c,replace:u}),wasPush:_}},[e]);return Ne(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),D(M.ctx.Provider,{value:r},t.children)}const nt=Promise.resolve();function se(t){const[e,n]=qe(k=>k+1,0),{url:_,query:r,wasPush:o,path:s}=rt(),{rest:c=s,params:u={}}=Be(Ce),l=$(!1),d=$(s),i=$(0),p=$(),f=$(),g=$(),w=$(!1),b=$();b.current=!1;const h=$(!1);let m,x,C;Oe(t.children).some(k=>{if(tt(c,k.props.path,C={...k.props,path:c,query:r,params:u,rest:""}))return m=ve(k,C);k.props.default&&(x=ve(k,C))});let E=m||x;fe(()=>{f.current=p.current;const k=f.current&&f.current.props.children;!k||!E||E.type!==k.type||E.props.component!==k.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,h.current=!0):h.current=!1},[_]);const H=p.current&&p.current.__u&z&&p.current.__u&G,j=p.current&&p.current.__h;p.current=D(Ce.Provider,{value:C},E),H?(p.current.__u|=z,p.current.__u|=G):j&&(p.current.__h=!0);const A=f.current;return f.current=null,this.__c=(k,S)=>{b.current=!0,f.current=A,t.onLoadStart&&t.onLoadStart(_),l.current=!0;let O=i.current;k.then(()=>{O===i.current&&(f.current=null,p.current&&(S.__h&&(p.current.__h=S.__h),S.__u&G&&(p.current.__u|=G),S.__u&z&&(p.current.__u|=z)),nt.then(n))})},Ne(()=>{const k=this.__v&&this.__v.__e;if(b.current){!w.current&&!g.current&&(g.current=k);return}!w.current&&g.current&&(g.current!==k&&g.current.remove(),g.current=null),w.current=!0,d.current!==s&&(o&&scrollTo(0,0),t.onRouteChange&&t.onRouteChange(_),d.current=s),t.onLoadEnd&&l.current&&t.onLoadEnd(_),l.current=!1},[s,o,e]),h.current?[D(V,{r:p}),D(V,{r:f})]:D(V,{r:p})}const z=32,G=128,V=({r:t})=>t.current;se.Provider=M;M.ctx=Me({});const Ce=Me({}),Ee=t=>D(t.component,t),rt=()=>Be(M.ctx),$e=v.__e;v.__e=(t,e,n)=>{if(t&&t.then){let _=e;for(;_=_.__;)if(_.__c&&_.__c.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),e.__k||(e.__k=[]),_.__c.__c(t,e)}$e&&$e(t,e,n)};const _t="0f3a32c356f27e7ab24a28674bc60492",ot="slalom-aem.myshopify.com",it=`https://${ot}/api/2024-07/graphql.json`,ct=async()=>{var r,o;const e=await fetch(it,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":_t},body:JSON.stringify({query:`{
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    featuredImage {
                        url
                    }
                    variants(first:1) {
                        edges {
                            node {
                                price {
                                    amount
                                }
                            }
                        }
                    }
                }
            }
        }
    }`.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g," ").replace(/\s\s+/g," ")})});if(!e.ok)return null;const _=(o=(r=(await e.json()).data)==null?void 0:r.products)==null?void 0:o.edges;return console.log("products",_),_},st=t=>"/store/product/"+t.replace("gid://shopify/Product/","");class ee extends q{constructor(e){super(e),this.state={products:[]},console.log("props",e)}async componentDidMount(){await ct().then(e=>this.setState({products:e}))}render(){const e=this.state.products.map((n,_)=>a("div",{class:"product-card",children:[a("div",{class:"badge",children:"Hot"}),a("div",{class:"product-thumb",children:a("img",{src:n.node.featuredImage.url,alt:""})}),a("div",{class:"product-details",children:[a("span",{class:"product-category",children:"Snowboards"}),a("h5",{children:a("a",{href:st(n.node.id),children:n.node.title})}),a("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!"}),a("div",{class:"product-bottom-details",children:[a("div",{class:"product-price",children:["$",n.node.variants.edges[0].node.price.amount]}),a("div",{class:"product-links",children:[a("a",{href:"",children:a("i",{class:"fa fa-heart"})}),a("a",{href:"",children:a("i",{class:"fa fa-shopping-cart"})})]})]})]})]}));return a(W,{children:a("div",{class:"route-comp",children:[a("h1",{children:"Snowboards"}),a("div",{class:"cards",children:a("div",{class:"product-list",children:e})})]})})}}function lt(){return a("div",{class:"card-wrapper",children:a("div",{class:"card",children:[a("div",{class:"product-imgs",children:a("div",{class:"img-display",children:a("div",{class:"img-showcase",children:a("img",{src:"https://cdn.shopify.com/s/files/1/0705/4989/7468/files/Main_c8ff0b5d-c712-429a-be00-b29bd55cbc9d.jpg?v=1723154672",alt:"shoe image"})})})}),a("div",{class:"product-content",children:[a("h2",{class:"product-title",children:"The Hidden Snowboard"}),a("a",{href:"#",class:"product-link",children:"visit snow store"}),a("div",{class:"product-price",children:a("p",{class:"new-price",children:["Price: ",a("span",{children:"$249.00"})]})}),a("div",{class:"product-detail",children:[a("h2",{children:"about this item: "}),a("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!"}),a("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde."}),a("ul",{children:[a("li",{children:["Color: ",a("span",{children:"Black/Orange/Pink"})]}),a("li",{children:["Available: ",a("span",{children:"in stock"})]}),a("li",{children:["Category: ",a("span",{children:"Snowboards"})]}),a("li",{children:["Shipping Area: ",a("span",{children:"United States"})]}),a("li",{children:["Shipping Fee: ",a("span",{children:"Free"})]})]})]}),a("div",{class:"purchase-info",children:[a("input",{type:"number",min:"0",value:"1"}),a("button",{type:"button",class:"btn",children:["Add to Cart ",a("i",{class:"fas fa-shopping-cart"})]})]})]})]})})}function ut(){const t=document.getElementById("app"),e=t.aemProps;if(e&&e.length>0){console.log("aemProps",t.aemProps);const n=e[1][0].split(",");console.log("routes",n);const _=n.map((r,o)=>a(Ee,{path:"/"+r,component:ee}));return a(M,{children:a(se,{children:[a(Ee,{path:"/store",component:ee}),_]})})}return a(M,{children:a(se,{children:[a(ee,{path:"/store",category:"snowboard"}),a(lt,{path:"/store/product/:id"})]})})}Qe(a(ut,{}),document.getElementById("app"));
