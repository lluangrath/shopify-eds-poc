(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var q,h,p_,$,e_,d_,B,Q,j,z,L={},h_=[],P_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,X=Array.isArray;function N(e,_){for(var t in _)e[t]=_[t];return e}function v_(e){var _=e.parentNode;_&&_.removeChild(e)}function S_(e,_,t){var o,n,r,s={};for(r in _)r=="key"?o=_[r]:r=="ref"?n=_[r]:s[r]=_[r];if(arguments.length>2&&(s.children=arguments.length>3?q.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return M(e,s,o,n,null)}function M(e,_,t,o,n){var r={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++p_,__i:-1,__u:0};return n==null&&h.vnode!=null&&h.vnode(r),r}function T(e){return e.children}function C(e,_){this.props=e,this.context=_}function H(e,_){if(_==null)return e.__?H(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?H(e):null}function y_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return y_(e)}}function t_(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!I.__r++||e_!==h.debounceRendering)&&((e_=h.debounceRendering)||d_)(I)}function I(){var e,_,t,o,n,r,s,c;for($.sort(B);e=$.shift();)e.__d&&(_=$.length,o=void 0,r=(n=(t=e).__v).__e,s=[],c=[],t.__P&&((o=N({},n)).__v=n.__v+1,h.vnode&&h.vnode(o),Y(t.__P,o,n,t.__n,t.__P.namespaceURI,32&n.__u?[r]:null,s,r??H(n),!!(32&n.__u),c),o.__v=n.__v,o.__.__k[o.__i]=o,b_(s,o,c),o.__e!=r&&y_(o)),$.length>_&&$.sort(B));I.__r=0}function m_(e,_,t,o,n,r,s,c,u,l,a){var i,p,f,g,k,b=o&&o.__k||h_,d=_.length;for(t.__d=u,N_(t,_,b),u=t.__d,i=0;i<d;i++)(f=t.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?L:b[f.__i]||L,f.__i=i,Y(e,f,p,n,r,s,c,u,l,a),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&Z(p.ref,null,f),a.push(f.ref,f.__c||g,f)),k==null&&g!=null&&(k=g),65536&f.__u||p.__k===f.__k?u=g_(f,u,e):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:g&&(u=g.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=u,t.__e=k}function N_(e,_,t){var o,n,r,s,c,u=_.length,l=t.length,a=l,i=0;for(e.__k=[],o=0;o<u;o++)s=o+i,(n=e.__k[o]=(n=_[o])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?M(null,n,null,null,null):X(n)?M(T,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?M(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,c=$_(n,t,s,a),n.__i=c,r=null,c!==-1&&(a--,(r=t[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):c!==s&&(c==s-1?i--:c==s+1?i++:c>s?a>u-s?i+=c-s:i--:c<s&&(c==s-i?i-=c-s:i++),c!==o+i&&(n.__u|=65536))):(r=t[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),K(r,r,!1),t[s]=null,a--);if(a)for(o=0;o<l;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),K(r,r))}function g_(e,_,t){var o,n;if(typeof e.type=="function"){for(o=e.__k,n=0;o&&n<o.length;n++)o[n]&&(o[n].__=e,_=g_(o[n],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=H(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function $_(e,_,t,o){var n=e.key,r=e.type,s=t-1,c=t+1,u=_[t];if(u===null||u&&n==u.key&&r===u.type&&!(131072&u.__u))return t;if(o>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||c<_.length;){if(s>=0){if((u=_[s])&&!(131072&u.__u)&&n==u.key&&r===u.type)return s;s--}if(c<_.length){if((u=_[c])&&!(131072&u.__u)&&n==u.key&&r===u.type)return c;c++}}return-1}function n_(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||P_.test(_)?t:t+"px"}function D(e,_,t,o,n){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||n_(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||n_(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?o?t.u=o.u:(t.u=Q,e.addEventListener(_,r?z:j,r)):e.removeEventListener(_,r?z:j,r);else{if(n=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function o_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=Q++;else if(_.t<t.u)return;return t(h.event?h.event(_):_)}}}function Y(e,_,t,o,n,r,s,c,u,l){var a,i,p,f,g,k,b,d,v,x,S,U,E,__,O,R,w=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[c=_.__e=t.__e]),(a=h.__b)&&a(_);_:if(typeof w=="function")try{if(d=_.props,v="prototype"in w&&w.prototype.render,x=(a=w.contextType)&&o[a.__c],S=a?x?x.props.value:a.__:o,t.__c?b=(i=_.__c=t.__c).__=i.__E:(v?_.__c=i=new w(d,S):(_.__c=i=new C(d,S),i.constructor=w,i.render=T_),x&&x.sub(i),i.props=d,i.state||(i.state={}),i.context=S,i.__n=o,p=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=N({},i.__s)),N(i.__s,w.getDerivedStateFromProps(d,i.__s))),f=i.props,g=i.state,i.__v=_,p)v&&w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&d!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(d,S),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(d,i.__s,S)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=d,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(A){A&&(A.__=_)}),U=0;U<i._sb.length;U++)i.__h.push(i._sb[U]);i._sb=[],i.__h.length&&s.push(i);break _}i.componentWillUpdate!=null&&i.componentWillUpdate(d,i.__s,S),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,k)})}if(i.context=S,i.props=d,i.__P=e,i.__e=!1,E=h.__r,__=0,v){for(i.state=i.__s,i.__d=!1,E&&E(_),a=i.render(i.props,i.state,i.context),O=0;O<i._sb.length;O++)i.__h.push(i._sb[O]);i._sb=[]}else do i.__d=!1,E&&E(_),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++__<25);i.state=i.__s,i.getChildContext!=null&&(o=N(N({},o),i.getChildContext())),v&&!p&&i.getSnapshotBeforeUpdate!=null&&(k=i.getSnapshotBeforeUpdate(f,g)),m_(e,X(R=a!=null&&a.type===T&&a.key==null?a.props.children:a)?R:[R],_,t,o,n,r,s,c,u,l),i.base=_.__e,_.__u&=-161,i.__h.length&&s.push(i),b&&(i.__E=i.__=null)}catch(A){if(_.__v=null,u||r!=null){for(_.__u|=u?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,_.__e=c}else _.__e=t.__e,_.__k=t.__k;h.__e(A,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=H_(t.__e,_,t,o,n,r,s,u,l);(a=h.diffed)&&a(_)}function b_(e,_,t){_.__d=void 0;for(var o=0;o<t.length;o++)Z(t[o],t[++o],t[++o]);h.__c&&h.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){h.__e(r,n.__v)}})}function H_(e,_,t,o,n,r,s,c,u){var l,a,i,p,f,g,k,b=t.props,d=_.props,v=_.type;if(v==="svg"?n="http://www.w3.org/2000/svg":v==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((f=r[l])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){e=f,r[l]=null;break}}if(e==null){if(v===null)return document.createTextNode(d);e=document.createElementNS(n,v,d.is&&d),r=null,c=!1}if(v===null)b===d||c&&e.data===d||(e.data=d);else{if(r=r&&q.call(e.childNodes),b=t.props||L,!c&&r!=null)for(b={},l=0;l<e.attributes.length;l++)b[(f=e.attributes[l]).name]=f.value;for(l in b)if(f=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(l!=="key"&&!(l in d)){if(l=="value"&&"defaultValue"in d||l=="checked"&&"defaultChecked"in d)continue;D(e,l,null,f,n)}}for(l in d)f=d[l],l=="children"?p=f:l=="dangerouslySetInnerHTML"?a=f:l=="value"?g=f:l=="checked"?k=f:l==="key"||c&&typeof f!="function"||b[l]===f||D(e,l,f,b[l],n);if(a)c||i&&(a.__html===i.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(i&&(e.innerHTML=""),m_(e,X(p)?p:[p],_,t,o,v==="foreignObject"?"http://www.w3.org/1999/xhtml":n,r,s,r?r[0]:t.__k&&H(t,0),c,u),r!=null)for(l=r.length;l--;)r[l]!=null&&v_(r[l]);c||(l="value",g!==void 0&&(g!==e[l]||v==="progress"&&!g||v==="option"&&g!==b[l])&&D(e,l,g,b[l],n),l="checked",k!==void 0&&k!==e[l]&&D(e,l,k,b[l],n))}return e}function Z(e,_,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&_==null||(e.__u=e(_))}else e.current=_}catch(n){h.__e(n,t)}}function K(e,_,t){var o,n;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Z(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,_)}o.base=o.__P=null}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&K(o[n],_,t||typeof e.type!="function");t||e.__e==null||v_(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function T_(e,_,t){return this.constructor(e,t)}function x_(e,_,t){var o,n,r,s;h.__&&h.__(e,_),n=(o=typeof t=="function")?null:_.__k,r=[],s=[],Y(_,e=(!o&&t||_).__k=S_(T,null,[e]),n||L,L,_.namespaceURI,!o&&t?[t]:n?null:_.firstChild?q.call(_.childNodes):null,r,!o&&t?t:n?n.__e:_.firstChild,o,s),b_(r,e,s)}q=h_.slice,h={__e:function(e,_,t,o){for(var n,r,s;_=_.__;)if((n=_.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,o||{}),s=n.__d),s)return n.__E=n}catch(c){e=c}throw e}},p_=0,C.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof e=="function"&&(e=e(N({},t),this.props)),e&&N(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),t_(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),t_(this))},C.prototype.render=T,$=[],d_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(e,_){return e.__v.__b-_.__v.__b},I.__r=0,Q=0,j=o_(!1),z=o_(!0);var E_=0;function P(e,_,t,o,n,r){_||(_={});var s,c,u=_;if("ref"in u)for(c in u={},_)c=="ref"?s=_[c]:u[c]=_[c];var l={type:e,props:u,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--E_,__i:-1,__u:0,__source:n,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return h.vnode&&h.vnode(l),l}var V,y,W,r_,G=0,k_=[],m=h,i_=m.__b,c_=m.__r,l_=m.diffed,s_=m.__c,u_=m.unmount,f_=m.__;function C_(e,_){m.__h&&m.__h(y,e,G||_),G=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function L_(e){return G=1,U_(w_,e)}function U_(e,_,t){var o=C_(V++,2);if(o.t=e,!o.__c&&(o.__=[w_(void 0,_),function(c){var u=o.__N?o.__N[0]:o.__[0],l=o.t(u,c);u!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){var n=function(c,u,l){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!r||r.call(this,c,u,l);var i=!1;return a.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&o.__c.props===c)&&(!r||r.call(this,c,u,l))};y.u=!0;var r=y.shouldComponentUpdate,s=y.componentWillUpdate;y.componentWillUpdate=function(c,u,l){if(this.__e){var a=r;r=void 0,n(c,u,l),r=a}s&&s.call(this,c,u,l)},y.shouldComponentUpdate=n}return o.__N||o.__}function O_(){for(var e;e=k_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(J),e.__H.__h=[]}catch(_){e.__H.__h=[],m.__e(_,e.__v)}}m.__b=function(e){y=null,i_&&i_(e)},m.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),f_&&f_(e,_)},m.__r=function(e){c_&&c_(e),V=0;var _=(y=e.__c).__H;_&&(W===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(_.__h.forEach(F),_.__h.forEach(J),_.__h=[],V=0)),W=y},m.diffed=function(e){l_&&l_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(k_.push(_)!==1&&r_===m.requestAnimationFrame||((r_=m.requestAnimationFrame)||A_)(O_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),W=y=null},m.__c=function(e,_){_.some(function(t){try{t.__h.forEach(F),t.__h=t.__h.filter(function(o){return!o.__||J(o)})}catch(o){_.some(function(n){n.__h&&(n.__h=[])}),_=[],m.__e(o,t.__v)}}),s_&&s_(e,_)},m.unmount=function(e){u_&&u_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{F(o)}catch(n){_=n}}),t.__H=void 0,_&&m.__e(_,t.__v))};var a_=typeof requestAnimationFrame=="function";function A_(e){var _,t=function(){clearTimeout(o),a_&&cancelAnimationFrame(_),setTimeout(e)},o=setTimeout(t,100);a_&&(_=requestAnimationFrame(t))}function F(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function J(e){var _=y;e.__c=e.__(),y=_}function w_(e,_){return typeof _=="function"?_(e):_}const D_="0f3a32c356f27e7ab24a28674bc60492",M_="slalom-aem.myshopify.com",F_=`https://${M_}/api/2024-07/graphql.json`,I_=async()=>{var n,r;const _=await fetch(F_,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":D_},body:JSON.stringify({query:`{
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
    }`.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g," ").replace(/\s\s+/g," ")})});return _.ok?(r=(n=(await _.json()).data)==null?void 0:n.products)==null?void 0:r.edges:null};class q_ extends C{constructor(){super(),this.state={products:[]}}async componentDidMount(){await I_().then(_=>this.setState({products:_})),console.log("test",this.state)}render(){const _=this.state.products.map((t,o)=>P("li",{children:t.node.title}));return P(T,{children:P("div",{class:"route-comp",children:[P("h3",{children:"Product Home"}),P("ul",{children:_})]})})}}function R_(){return L_(0),P(T,{children:[P("h1",{children:"Preact + Shopify + EDS"}),P("div",{class:"card",children:P(q_,{})})]})}x_(P(R_,{}),document.getElementById("app"));
