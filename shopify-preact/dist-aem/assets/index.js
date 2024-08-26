(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var n, l$1, u$2, i$1, o$1, r$1, f$2, e$1, c$1, s$1, a$1, h = {}, p$1 = [], v$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y = Array.isArray;
function d$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function w$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function _$1(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return g(l2, f2, i2, o2, null);
}
function g(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u$2 : r2, __i: -1, __u: 0 };
  return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function k$1(n2) {
  return n2.children;
}
function b(n2, l2) {
  this.props = n2, this.context = l2;
}
function x$1(n2, l2) {
  if (null == l2) return n2.__ ? x$1(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? x$1(n2) : null;
}
function C$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C$1(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !P.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(P);
}
function P() {
  var n2, u2, t2, o2, r2, e2, c2, s2;
  for (i$1.sort(f$2); n2 = i$1.shift(); ) n2.__d && (u2 = i$1.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d$1({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x$1(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j$1(c2, o2, s2), o2.__e != e2 && C$1(o2)), i$1.length > u2 && i$1.sort(f$2));
  P.__r = 0;
}
function S(n2, l2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, v2, y2, d2, w2, _2 = t2 && t2.__k || p$1, g2 = l2.length;
  for (u2.__d = e2, $(u2, l2, _2), e2 = u2.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u2.__k[a2]) && "boolean" != typeof y2 && "function" != typeof y2 && (v2 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a2, O(n2, y2, v2, i2, o2, r2, f2, e2, c2, s2), d2 = y2.__e, y2.ref && v2.ref != y2.ref && (v2.ref && N(v2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || v2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = w2;
}
function $(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) r2 = t2 + a2, null != (i2 = n2.__k[t2] = null == (i2 = l2[t2]) || "boolean" == typeof i2 || "function" == typeof i2 ? null : "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? g(null, i2, null, null, null) : y(i2) ? g(k$1, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? g(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) ? (i2.__ = n2, i2.__b = n2.__b + 1, f2 = L(i2, u2, r2, s2), i2.__i = f2, o2 = null, -1 !== f2 && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 == r2 - 1 ? a2-- : f2 == r2 + 1 ? a2++ : f2 > r2 ? s2 > e2 - r2 ? a2 += f2 - r2 : a2-- : f2 < r2 && (f2 == r2 - a2 ? a2 -= f2 - r2 : a2++), f2 !== t2 + a2 && (i2.__u |= 65536))) : (o2 = u2[r2]) && null == o2.key && o2.__e && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x$1(o2)), V(o2, o2, false), u2[r2] = null, s2--);
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x$1(o2)), V(o2, o2));
}
function I(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = I(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = x$1(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function H(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
    H(n3, l2);
  }) : l2.push(n2)), l2;
}
function L(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f2 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f2 < l2.length) {
      if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return f2;
      f2++;
    }
  }
  return -1;
}
function T$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || v$1.test(l2) ? u2 : u2 + "px";
}
function A$1(n2, l2, u2, t2, i2) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T$1(n2.style, l2, u2[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = e$1, n2.addEventListener(l2, o2 ? s$1 : c$1, o2)) : n2.removeEventListener(l2, o2 ? s$1 : c$1, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = e$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, h2, p2, v2, w2, _2, g2, m2, x2, C2, M2, P2, $2, I2, H2, L2, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (m2 = u2.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? g2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(m2, M2) : (u2.__c = h2 = new b(m2, M2), h2.constructor = T2, h2.render = q), C2 && C2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$1({}, h2.__s)), d$1(h2.__s, T2.getDerivedStateFromProps(m2, h2.__s))), v2 = h2.props, w2 = h2.state, h2.__v = u2, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, M2) || u2.__v === t2.__v)) {
        for (u2.__v !== t2.__v && (h2.props = m2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
          n3 && (n3.__ = u2);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && f2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, M2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, w2, _2);
      });
    }
    if (h2.context = M2, h2.props = m2, h2.__P = n2, h2.__e = false, $2 = l$1.__r, I2 = 0, x2) {
      for (h2.state = h2.__s, h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++I2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d$1(d$1({}, i2), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, w2)), S(n2, y(L2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, o2, r2, f2, e2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && f2.push(h2), g2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != r2) {
      for (u2.__u |= c2 ? 160 : 32; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u2.__e = e2;
    } else u2.__e = t2.__e, u2.__k = t2.__k;
    l$1.__e(n3, u2, t2);
  }
  else null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z$1(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l$1.diffed) && a2(u2);
}
function j$1(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++) N(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function z$1(l2, u2, t2, i2, o2, r2, f2, e2, c2) {
  var s2, a2, p2, v2, d2, _2, g2, m2 = t2.props, k2 = u2.props, b2 = u2.type;
  if ("svg" === b2 ? o2 = "http://www.w3.org/2000/svg" : "math" === b2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != r2) {
    for (s2 = 0; s2 < r2.length; s2++) if ((d2 = r2[s2]) && "setAttribute" in d2 == !!b2 && (b2 ? d2.localName === b2 : 3 === d2.nodeType)) {
      l2 = d2, r2[s2] = null;
      break;
    }
  }
  if (null == l2) {
    if (null === b2) return document.createTextNode(k2);
    l2 = document.createElementNS(o2, b2, k2.is && k2), r2 = null, e2 = false;
  }
  if (null === b2) m2 === k2 || e2 && l2.data === k2 || (l2.data = k2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), m2 = t2.props || h, !e2 && null != r2) for (m2 = {}, s2 = 0; s2 < l2.attributes.length; s2++) m2[(d2 = l2.attributes[s2]).name] = d2.value;
    for (s2 in m2) if (d2 = m2[s2], "children" == s2) ;
    else if ("dangerouslySetInnerHTML" == s2) p2 = d2;
    else if ("key" !== s2 && !(s2 in k2)) {
      if ("value" == s2 && "defaultValue" in k2 || "checked" == s2 && "defaultChecked" in k2) continue;
      A$1(l2, s2, null, d2, o2);
    }
    for (s2 in k2) d2 = k2[s2], "children" == s2 ? v2 = d2 : "dangerouslySetInnerHTML" == s2 ? a2 = d2 : "value" == s2 ? _2 = d2 : "checked" == s2 ? g2 = d2 : "key" === s2 || e2 && "function" != typeof d2 || m2[s2] === d2 || A$1(l2, s2, d2, m2[s2], o2);
    if (a2) e2 || p2 && (a2.__html === p2.__html || a2.__html === l2.innerHTML) || (l2.innerHTML = a2.__html), u2.__k = [];
    else if (p2 && (l2.innerHTML = ""), S(l2, y(v2) ? v2 : [v2], u2, t2, i2, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o2, r2, f2, r2 ? r2[0] : t2.__k && x$1(t2, 0), e2, c2), null != r2) for (s2 = r2.length; s2--; ) null != r2[s2] && w$1(r2[s2]);
    e2 || (s2 = "value", void 0 !== _2 && (_2 !== l2[s2] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m2[s2]) && A$1(l2, s2, _2, m2[s2], o2), s2 = "checked", void 0 !== g2 && g2 !== l2[s2] && A$1(l2, s2, g2, m2[s2], o2));
  }
  return l2;
}
function N(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function V(n2, u2, t2) {
  var i2, o2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && V(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || w$1(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$1(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : t2.__k, f2 = [], e2 = [], O(t2, u2 = (!o2 && i2 || t2).__k = _$1(k$1, null, [u2]), r2 || h, h, t2.namespaceURI, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), j$1(f2, u2, e2);
}
function E(l2, u2, t2) {
  var i2, o2, r2, f2, e2 = d$1({}, l2.props);
  for (r2 in l2.type && l2.type.defaultProps && (f2 = l2.type.defaultProps), u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : e2[r2] = void 0 === u2[r2] && void 0 !== f2 ? f2[r2] : u2[r2];
  return arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), g(l2.type, e2, i2 || l2.key, o2 || l2.ref, null);
}
function G(n2, l2) {
  var u2 = { __c: l2 = "__cC" + a$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, t2;
    return this.getChildContext || (u3 = [], (t2 = {})[l2] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u3 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, M(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3 && u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = p$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$2 = 0, b.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n2 && (n2 = n2(d$1({}, u2), this.props)), n2 && d$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, b.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$2 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, P.__r = 0, e$1 = 0, c$1 = F(false), s$1 = F(true), a$1 = 0;
var f$1 = 0;
function u$1(e2, t2, n2, o2, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(l2), l2;
}
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function d(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function p(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function _(n2, u2) {
  var i2 = d(t++, 4);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__h.push(i2));
}
function A(n2) {
  return o = 5, T(function() {
    return { current: n2 };
  }, []);
}
function T(n2, r2) {
  var u2 = d(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function x(n2) {
  var u2 = r.context[n2.__c], i2 = d(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
let push;
const UPDATE = (state, url) => {
  push = void 0;
  if (url && url.type === "click") {
    if (url.ctrlKey || url.metaKey || url.altKey || url.shiftKey || url.button !== 0) {
      return state;
    }
    const link = url.target.closest("a[href]");
    if (!link || link.origin != location.origin || /^#/.test(link.getAttribute("href")) || !/^(_?self)?$/i.test(link.target)) {
      return state;
    }
    push = true;
    url.preventDefault();
    url = link.href.replace(location.origin, "");
  } else if (typeof url === "string") {
    push = true;
  } else if (url && url.url) {
    push = !url.replace;
    url = url.url;
  } else {
    url = location.pathname + location.search;
  }
  if (push === true) history.pushState(null, "", url);
  else if (push === false) history.replaceState(null, "", url);
  return url;
};
const exec = (url, route, matches) => {
  url = url.split("/").filter(Boolean);
  route = (route || "").split("/").filter(Boolean);
  for (let i2 = 0, val, rest; i2 < Math.max(url.length, route.length); i2++) {
    let [, m2, param, flag] = (route[i2] || "").match(/^(:?)(.*?)([+*?]?)$/);
    val = url[i2];
    if (!m2 && param == val) continue;
    if (!m2 && val && flag == "*") {
      matches.rest = "/" + url.slice(i2).map(decodeURIComponent).join("/");
      break;
    }
    if (!m2 || !val && flag != "?" && flag != "*") return;
    rest = flag == "+" || flag == "*";
    if (rest) val = url.slice(i2).map(decodeURIComponent).join("/");
    else if (val) val = decodeURIComponent(val);
    matches.params[param] = val;
    if (!(param in matches)) matches[param] = val;
    if (rest) break;
  }
  return matches;
};
function LocationProvider(props) {
  const [url, route] = p(UPDATE, props.url || location.pathname + location.search);
  const wasPush = push === true;
  const value = T(() => {
    const u2 = new URL(url, location.origin);
    const path = u2.pathname.replace(/(.)\/$/g, "$1");
    return {
      url,
      path,
      query: Object.fromEntries(u2.searchParams),
      route: (url2, replace) => route({ url: url2, replace }),
      wasPush
    };
  }, [url]);
  _(() => {
    addEventListener("click", route);
    addEventListener("popstate", route);
    return () => {
      removeEventListener("click", route);
      removeEventListener("popstate", route);
    };
  }, []);
  return _$1(LocationProvider.ctx.Provider, { value }, props.children);
}
const RESOLVED = Promise.resolve();
function Router(props) {
  const [c2, update] = p((c3) => c3 + 1, 0);
  const { url, query, wasPush, path } = useLocation();
  const { rest = path, params = {} } = x(RouteContext);
  const isLoading = A(false);
  const prevRoute = A(path);
  const count = A(0);
  const cur = A();
  const prev = A();
  const pendingBase = A();
  const hasEverCommitted = A(false);
  const didSuspend = A();
  didSuspend.current = false;
  const routeChanged = A(false);
  let pr, d2, m2;
  H(props.children).some((vnode) => {
    const matches = exec(rest, vnode.props.path, m2 = { ...vnode.props, path: rest, query, params, rest: "" });
    if (matches) return pr = E(vnode, m2);
    if (vnode.props.default) d2 = E(vnode, m2);
  });
  let incoming = pr || d2;
  T(() => {
    prev.current = cur.current;
    const outgoing = prev.current && prev.current.props.children;
    if (!outgoing || !incoming || incoming.type !== outgoing.type || incoming.props.component !== outgoing.props.component) {
      if (this.__v && this.__v.__k) this.__v.__k.reverse();
      count.current++;
      routeChanged.current = true;
    } else routeChanged.current = false;
  }, [url]);
  const isHydratingSuspense = cur.current && cur.current.__u & MODE_HYDRATE && cur.current.__u & MODE_SUSPENDED;
  const isHydratingBool = cur.current && cur.current.__h;
  cur.current = _$1(RouteContext.Provider, { value: m2 }, incoming);
  if (isHydratingSuspense) {
    cur.current.__u |= MODE_HYDRATE;
    cur.current.__u |= MODE_SUSPENDED;
  } else if (isHydratingBool) {
    cur.current.__h = true;
  }
  const p$12 = prev.current;
  prev.current = null;
  this.__c = (e2, suspendedVNode) => {
    didSuspend.current = true;
    prev.current = p$12;
    if (props.onLoadStart) props.onLoadStart(url);
    isLoading.current = true;
    let c3 = count.current;
    e2.then(() => {
      if (c3 !== count.current) return;
      prev.current = null;
      if (cur.current) {
        if (suspendedVNode.__h) {
          cur.current.__h = suspendedVNode.__h;
        }
        if (suspendedVNode.__u & MODE_SUSPENDED) {
          cur.current.__u |= MODE_SUSPENDED;
        }
        if (suspendedVNode.__u & MODE_HYDRATE) {
          cur.current.__u |= MODE_HYDRATE;
        }
      }
      RESOLVED.then(update);
    });
  };
  _(() => {
    const currentDom = this.__v && this.__v.__e;
    if (didSuspend.current) {
      if (!hasEverCommitted.current && !pendingBase.current) {
        pendingBase.current = currentDom;
      }
      return;
    }
    if (!hasEverCommitted.current && pendingBase.current) {
      if (pendingBase.current !== currentDom) pendingBase.current.remove();
      pendingBase.current = null;
    }
    hasEverCommitted.current = true;
    if (prevRoute.current !== path) {
      if (wasPush) scrollTo(0, 0);
      if (props.onRouteChange) props.onRouteChange(url);
      prevRoute.current = path;
    }
    if (props.onLoadEnd && isLoading.current) props.onLoadEnd(url);
    isLoading.current = false;
  }, [path, wasPush, c2]);
  return routeChanged.current ? [_$1(RenderRef, { r: cur }), _$1(RenderRef, { r: prev })] : _$1(RenderRef, { r: cur });
}
const MODE_HYDRATE = 1 << 5;
const MODE_SUSPENDED = 1 << 7;
const RenderRef = ({ r: r2 }) => r2.current;
Router.Provider = LocationProvider;
LocationProvider.ctx = G(
  /** @type {RouteInfo} */
  {}
);
const RouteContext = G({});
const useLocation = () => x(LocationProvider.ctx);
const oldCatchError = l$1.__e;
l$1.__e = (err, newVNode, oldVNode) => {
  if (err && err.then) {
    let v2 = newVNode;
    while (v2 = v2.__) {
      if (v2.__c && v2.__c.__c) {
        if (newVNode.__e == null) {
          newVNode.__e = oldVNode.__e;
          newVNode.__k = oldVNode.__k;
        }
        if (!newVNode.__k) newVNode.__k = [];
        return v2.__c.__c(err, newVNode);
      }
    }
  }
  if (oldCatchError) oldCatchError(err, newVNode, oldVNode);
};
const PUBLIC_STOREFRONT_API_TOKEN = "0f3a32c356f27e7ab24a28674bc60492";
const PUBLIC_STORE_DOMAIN = "slalom-aem.myshopify.com";
const GRAPHQL_ENDPOINT = `https://${PUBLIC_STORE_DOMAIN}/api/2024-07/graphql.json`;
const shopifyRequest = async () => {
  var _a, _b;
  const query = `{
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
    }`;
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": PUBLIC_STOREFRONT_API_TOKEN
    },
    body: JSON.stringify({
      query: query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, " ").replace(/\s\s+/g, " ")
    })
  });
  if (!response.ok) {
    return null;
  }
  const result = await response.json();
  const products = (_b = (_a = result.data) == null ? void 0 : _a.products) == null ? void 0 : _b.edges;
  return products;
};
class ProductList extends b {
  constructor() {
    super();
    this.state = { products: [] };
  }
  async componentDidMount() {
    await shopifyRequest().then((products) => this.setState({ products }));
  }
  render() {
    const pList = this.state.products.map((product, i2) => /* @__PURE__ */ u$1("div", { class: "product-card", children: [
      /* @__PURE__ */ u$1("div", { class: "badge", children: "Hot" }),
      /* @__PURE__ */ u$1("div", { class: "product-thumb", children: /* @__PURE__ */ u$1("img", { src: product.node.featuredImage.url, alt: "" }) }),
      /* @__PURE__ */ u$1("div", { class: "product-details", children: [
        /* @__PURE__ */ u$1("span", { class: "product-category", children: "Snowboards" }),
        /* @__PURE__ */ u$1("h5", { children: /* @__PURE__ */ u$1("a", { href: "", children: product.node.title }) }),
        /* @__PURE__ */ u$1("p", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!" }),
        /* @__PURE__ */ u$1("div", { class: "product-bottom-details", children: [
          /* @__PURE__ */ u$1("div", { class: "product-price", children: [
            "$",
            product.node.variants.edges[0].node.price.amount
          ] }),
          /* @__PURE__ */ u$1("div", { class: "product-links", children: [
            /* @__PURE__ */ u$1("a", { href: "", children: /* @__PURE__ */ u$1("i", { class: "fa fa-heart" }) }),
            /* @__PURE__ */ u$1("a", { href: "", children: /* @__PURE__ */ u$1("i", { class: "fa fa-shopping-cart" }) })
          ] })
        ] })
      ] })
    ] }));
    return /* @__PURE__ */ u$1(k$1, { children: /* @__PURE__ */ u$1("div", { class: "route-comp", children: [
      /* @__PURE__ */ u$1("h1", { children: "Snowboards" }),
      /* @__PURE__ */ u$1("div", { class: "card", children: /* @__PURE__ */ u$1("div", { class: "product-list", children: pList }) })
    ] }) });
  }
}
function ProductDetail() {
  return /* @__PURE__ */ u$1("div", { class: "card-wrapper", children: /* @__PURE__ */ u$1("div", { class: "card", children: [
    /* @__PURE__ */ u$1("div", { class: "product-imgs", children: /* @__PURE__ */ u$1("div", { class: "img-display", children: /* @__PURE__ */ u$1("div", { class: "img-showcase", children: /* @__PURE__ */ u$1("img", { src: "https://cdn.shopify.com/s/files/1/0705/4989/7468/files/Main_c8ff0b5d-c712-429a-be00-b29bd55cbc9d.jpg?v=1723154672", alt: "shoe image" }) }) }) }),
    /* @__PURE__ */ u$1("div", { class: "product-content", children: [
      /* @__PURE__ */ u$1("h2", { class: "product-title", children: "The Hidden Snowboard" }),
      /* @__PURE__ */ u$1("a", { href: "#", class: "product-link", children: "visit snow store" }),
      /* @__PURE__ */ u$1("div", { class: "product-price", children: /* @__PURE__ */ u$1("p", { class: "new-price", children: [
        "Price: ",
        /* @__PURE__ */ u$1("span", { children: "$249.00" })
      ] }) }),
      /* @__PURE__ */ u$1("div", { class: "product-detail", children: [
        /* @__PURE__ */ u$1("h2", { children: "about this item: " }),
        /* @__PURE__ */ u$1("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!" }),
        /* @__PURE__ */ u$1("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde." }),
        /* @__PURE__ */ u$1("ul", { children: [
          /* @__PURE__ */ u$1("li", { children: [
            "Color: ",
            /* @__PURE__ */ u$1("span", { children: "Black/Orange/Pink" })
          ] }),
          /* @__PURE__ */ u$1("li", { children: [
            "Available: ",
            /* @__PURE__ */ u$1("span", { children: "in stock" })
          ] }),
          /* @__PURE__ */ u$1("li", { children: [
            "Category: ",
            /* @__PURE__ */ u$1("span", { children: "Snowboards" })
          ] }),
          /* @__PURE__ */ u$1("li", { children: [
            "Shipping Area: ",
            /* @__PURE__ */ u$1("span", { children: "United States" })
          ] }),
          /* @__PURE__ */ u$1("li", { children: [
            "Shipping Fee: ",
            /* @__PURE__ */ u$1("span", { children: "Free" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u$1("div", { class: "purchase-info", children: [
        /* @__PURE__ */ u$1("input", { type: "number", min: "0", value: "1" }),
        /* @__PURE__ */ u$1("button", { type: "button", class: "btn", children: [
          "Add to Cart ",
          /* @__PURE__ */ u$1("i", { class: "fas fa-shopping-cart" })
        ] })
      ] })
    ] })
  ] }) });
}
function App() {
  return /* @__PURE__ */ u$1(LocationProvider, { children: /* @__PURE__ */ u$1(Router, { children: [
    /* @__PURE__ */ u$1(ProductList, { path: "/store" }),
    /* @__PURE__ */ u$1(ProductDetail, { path: "/store/product/:id" })
  ] }) });
}
B$1(/* @__PURE__ */ u$1(App, {}), document.getElementById("app"));
