/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document)
      throw new Error('jQuery requires a window with a document');
    return b(a);
  } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = '1.11.1', m = function (a, b) {
      return new m.fn.init(a, b);
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
      return b.toUpperCase();
    };
  m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function (a) {
      var b = m.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function (a, b) {
      return m.each(this, a, b);
    },
    map: function (a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, m.extend = m.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e)
          a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g;
  }, m.extend({
    expando: 'jQuery' + (l + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {
    },
    isFunction: function (a) {
      return 'function' === m.type(a);
    },
    isArray: Array.isArray || function (a) {
      return 'array' === m.type(a);
    },
    isWindow: function (a) {
      return null != a && a == a.window;
    },
    isNumeric: function (a) {
      return !m.isArray(a) && a - parseFloat(a) >= 0;
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a)
        return !1;
      return !0;
    },
    isPlainObject: function (a) {
      var b;
      if (!a || 'object' !== m.type(a) || a.nodeType || m.isWindow(a))
        return !1;
      try {
        if (a.constructor && !j.call(a, 'constructor') && !j.call(a.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (c) {
        return !1;
      }
      if (k.ownLast)
        for (b in a)
          return j.call(a, b);
      for (b in a);
      return void 0 === b || j.call(a, b);
    },
    type: function (a) {
      return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
    },
    globalEval: function (b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function (a) {
      return a.replace(o, 'ms-').replace(p, q);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b, c) {
      var d, e = 0, f = a.length, g = r(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1)
              break;
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1)
              break;
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1)
            break;
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1)
            break;
      return a;
    },
    trim: function (a) {
      return null == a ? '' : (a + '').replace(n, '');
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (r(Object(a)) ? m.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (g)
          return g.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a)
            return c;
      }
      return -1;
    },
    merge: function (a, b) {
      var c = +b.length, d = 0, e = a.length;
      while (c > d)
        a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d])
          a[e++] = b[d++];
      return a.length = e, a;
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
        d = !b(a[f], f), d !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d, f = 0, g = a.length, h = r(a), i = [];
      if (h)
        for (; g > f; f++)
          d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a)
          d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i);
    },
    guid: 1,
    proxy: function (a, b) {
      var c, e, f;
      return 'string' == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
    },
    now: function () {
      return +new Date();
    },
    support: k
  }), m.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
    h['[object ' + b + ']'] = b.toLowerCase();
  });
  function r(a) {
    var b = a.length, c = m.type(a);
    return 'function' === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
  }
  var s = function (a) {
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + -new Date(), v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
          return a === b && (l = !0), 0;
        }, C = 'undefined', D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a)
              return b;
          return -1;
        }, L = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', N = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', O = N.replace('w', 'w#'), P = '\\[' + M + '*(' + N + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + O + '))|)' + M + '*\\]', Q = ':(' + N + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + P + ')*)|.*)\\)|)', R = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), S = new RegExp('^' + M + '*,' + M + '*'), T = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'), V = new RegExp(Q), W = new RegExp('^' + O + '$'), X = {
          ID: new RegExp('^#(' + N + ')'),
          CLASS: new RegExp('^\\.(' + N + ')'),
          TAG: new RegExp('^(' + N.replace('w', 'w*') + ')'),
          ATTR: new RegExp('^' + P),
          PSEUDO: new RegExp('^' + Q),
          CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
          bool: new RegExp('^(?:' + L + ')$', 'i'),
          needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), db = function (a, b, c) {
          var d = '0x' + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
      try {
        I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
      } catch (eb) {
        I = {
          apply: F.length ? function (a, b) {
            H.apply(a, J.call(b));
          } : function (a, b) {
            var c = a.length, d = 0;
            while (a[c++] = b[d++]);
            a.length = c - 1;
          }
        };
      }
      function fb(a, b, d, e) {
        var f, h, j, k, l, o, r, s, w, x;
        if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || 'string' != typeof a)
          return d;
        if (1 !== (k = b.nodeType) && 9 !== k)
          return [];
        if (p && !e) {
          if (f = _.exec(a))
            if (j = f[1]) {
              if (9 === k) {
                if (h = b.getElementById(j), !h || !h.parentNode)
                  return d;
                if (h.id === j)
                  return d.push(h), d;
              } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                return d.push(h), d;
            } else {
              if (f[2])
                return I.apply(d, b.getElementsByTagName(a)), d;
              if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                return I.apply(d, b.getElementsByClassName(j)), d;
            }
          if (c.qsa && (!q || !q.test(a))) {
            if (s = r = u, w = b, x = 9 === k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
              o = g(a), (r = b.getAttribute('id')) ? s = r.replace(bb, '\\$&') : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
              while (l--)
                o[l] = s + qb(o[l]);
              w = ab.test(a) && ob(b.parentNode) || b, x = o.join(',');
            }
            if (x)
              try {
                return I.apply(d, w.querySelectorAll(x)), d;
              } catch (y) {
              } finally {
                r || b.removeAttribute('id');
              }
          }
        }
        return i(a.replace(R, '$1'), b, d, e);
      }
      function gb() {
        var a = [];
        function b(c, e) {
          return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
        }
        return b;
      }
      function hb(a) {
        return a[u] = !0, a;
      }
      function ib(a) {
        var b = n.createElement('div');
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null;
        }
      }
      function jb(a, b) {
        var c = a.split('|'), e = a.length;
        while (e--)
          d.attrHandle[c[e]] = b;
      }
      function kb(a, b) {
        var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
        if (d)
          return d;
        if (c)
          while (c = c.nextSibling)
            if (c === b)
              return -1;
        return a ? 1 : -1;
      }
      function lb(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return 'input' === c && b.type === a;
        };
      }
      function mb(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ('input' === c || 'button' === c) && b.type === a;
        };
      }
      function nb(a) {
        return hb(function (b) {
          return b = +b, hb(function (c, d) {
            var e, f = a([], c.length, b), g = f.length;
            while (g--)
              c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          });
        });
      }
      function ob(a) {
        return a && typeof a.getElementsByTagName !== C && a;
      }
      c = fb.support = {}, f = fb.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? 'HTML' !== b.nodeName : !1;
      }, m = fb.setDocument = function (a) {
        var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
        return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener('unload', function () {
          m();
        }, !1) : g.attachEvent && g.attachEvent('onunload', function () {
          m();
        })), c.attributes = ib(function (a) {
          return a.className = 'i', !a.getAttribute('className');
        }), c.getElementsByTagName = ib(function (a) {
          return a.appendChild(e.createComment('')), !a.getElementsByTagName('*').length;
        }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
          return a.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', a.firstChild.className = 'i', 2 === a.getElementsByClassName('i').length;
        }), c.getById = ib(function (a) {
          return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
        }), c.getById ? (d.find.ID = function (a, b) {
          if (typeof b.getElementById !== C && p) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : [];
          }
        }, d.filter.ID = function (a) {
          var b = a.replace(cb, db);
          return function (a) {
            return a.getAttribute('id') === b;
          };
        }) : (delete d.find.ID, d.filter.ID = function (a) {
          var b = a.replace(cb, db);
          return function (a) {
            var c = typeof a.getAttributeNode !== C && a.getAttributeNode('id');
            return c && c.value === b;
          };
        }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
          return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
        } : function (a, b) {
          var c, d = [], e = 0, f = b.getElementsByTagName(a);
          if ('*' === a) {
            while (c = f[e++])
              1 === c.nodeType && d.push(c);
            return d;
          }
          return f;
        }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
          return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
        }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
          a.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>', a.querySelectorAll('[msallowclip^=\'\']').length && q.push('[*^$]=' + M + '*(?:\'\'|"")'), a.querySelectorAll('[selected]').length || q.push('\\[' + M + '*(?:value|' + L + ')'), a.querySelectorAll(':checked').length || q.push(':checked');
        }), ib(function (a) {
          var b = e.createElement('input');
          b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + M + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
        })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
          c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', Q);
        }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
        } : function (a, b) {
          if (b)
            while (b = b.parentNode)
              if (b === a)
                return !0;
          return !1;
        }, B = b ? function (a, b) {
          if (a === b)
            return l = !0, 0;
          var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
        } : function (a, b) {
          if (a === b)
            return l = !0, 0;
          var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
          if (!f || !g)
            return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
          if (f === g)
            return kb(a, b);
          c = a;
          while (c = c.parentNode)
            h.unshift(c);
          c = b;
          while (c = c.parentNode)
            i.unshift(c);
          while (h[d] === i[d])
            d++;
          return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
        }, e) : n;
      }, fb.matches = function (a, b) {
        return fb(a, null, null, b);
      }, fb.matchesSelector = function (a, b) {
        if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
          try {
            var d = s.call(a, b);
            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
              return d;
          } catch (e) {
          }
        return fb(b, n, null, [a]).length > 0;
      }, fb.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }, fb.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
      }, fb.error = function (a) {
        throw new Error('Syntax error, unrecognized expression: ' + a);
      }, fb.uniqueSort = function (a) {
        var b, d = [], e = 0, f = 0;
        if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
          while (b = a[f++])
            b === a[f] && (e = d.push(f));
          while (e--)
            a.splice(d[e], 1);
        }
        return k = null, a;
      }, e = fb.getText = function (a) {
        var b, c = '', d = 0, f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ('string' == typeof a.textContent)
              return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling)
              c += e(a);
          } else if (3 === f || 4 === f)
            return a.nodeValue;
        } else
          while (b = a[d++])
            c += e(b);
        return c;
      }, d = fb.selectors = {
        cacheLength: 50,
        createPseudo: hb,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          '>': {
            dir: 'parentNode',
            first: !0
          },
          ' ': { dir: 'parentNode' },
          '+': {
            dir: 'previousSibling',
            first: !0
          },
          '~': { dir: 'previousSibling' }
        },
        preFilter: {
          ATTR: function (a) {
            return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
          },
          CHILD: function (a) {
            return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && fb.error(a[0]), a;
          },
          PSEUDO: function (a) {
            var b, c = !a[6] && a[2];
            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
          }
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(cb, db).toLowerCase();
            return '*' === a ? function () {
              return !0;
            } : function (a) {
              return a.nodeName && a.nodeName.toLowerCase() === b;
            };
          },
          CLASS: function (a) {
            var b = y[a + ' '];
            return b || (b = new RegExp('(^|' + M + ')' + a + '(' + M + '|$)')) && y(a, function (a) {
              return b.test('string' == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute('class') || '');
            });
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = fb.attr(d, a);
              return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
            return 1 === d && 0 === e ? function (a) {
              return !!a.parentNode;
            } : function (b, c, i) {
              var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
              if (q) {
                if (f) {
                  while (p) {
                    l = b;
                    while (l = l[p])
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                        return !1;
                    o = p = 'only' === a && !o && 'nextSibling';
                  }
                  return !0;
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [
                        w,
                        n,
                        m
                      ];
                      break;
                    }
                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                  m = j[1];
                else
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [
                        w,
                        m
                      ]), l === b))
                      break;
                return m -= e, m === d || m % d === 0 && m / d >= 0;
              }
            };
          },
          PSEUDO: function (a, b) {
            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error('unsupported pseudo: ' + a);
            return e[u] ? e(b) : e.length > 1 ? (c = [
              a,
              a,
              '',
              b
            ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
              var d, f = e(a, b), g = f.length;
              while (g--)
                d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }) : function (a) {
              return e(a, 0, c);
            }) : e;
          }
        },
        pseudos: {
          not: hb(function (a) {
            var b = [], c = [], d = h(a.replace(R, '$1'));
            return d[u] ? hb(function (a, b, c, e) {
              var f, g = d(a, null, e, []), h = a.length;
              while (h--)
                (f = g[h]) && (a[h] = !(b[h] = f));
            }) : function (a, e, f) {
              return b[0] = a, d(b, null, f, c), !c.pop();
            };
          }),
          has: hb(function (a) {
            return function (b) {
              return fb(a, b).length > 0;
            };
          }),
          contains: hb(function (a) {
            return function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
            };
          }),
          lang: hb(function (a) {
            return W.test(a || '') || fb.error('unsupported lang: ' + a), a = a.replace(cb, db).toLowerCase(), function (b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                  return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
              while ((b = b.parentNode) && 1 === b.nodeType);
              return !1;
            };
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
          },
          enabled: function (a) {
            return a.disabled === !1;
          },
          disabled: function (a) {
            return a.disabled === !0;
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
          },
          selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function (a) {
            return !d.pseudos.empty(a);
          },
          header: function (a) {
            return Z.test(a.nodeName);
          },
          input: function (a) {
            return Y.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return 'input' === b && 'button' === a.type || 'button' === b;
          },
          text: function (a) {
            var b;
            return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
          },
          first: nb(function () {
            return [0];
          }),
          last: nb(function (a, b) {
            return [b - 1];
          }),
          eq: nb(function (a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: nb(function (a, b) {
            for (var c = 0; b > c; c += 2)
              a.push(c);
            return a;
          }),
          odd: nb(function (a, b) {
            for (var c = 1; b > c; c += 2)
              a.push(c);
            return a;
          }),
          lt: nb(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;)
              a.push(d);
            return a;
          }),
          gt: nb(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;)
              a.push(d);
            return a;
          })
        }
      }, d.pseudos.nth = d.pseudos.eq;
      for (b in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        })
        d.pseudos[b] = lb(b);
      for (b in {
          submit: !0,
          reset: !0
        })
        d.pseudos[b] = mb(b);
      function pb() {
      }
      pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
        var c, e, f, g, h, i, j, k = z[a + ' '];
        if (k)
          return b ? 0 : k.slice(0);
        h = a, i = [], j = d.preFilter;
        while (h) {
          (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
            value: c,
            type: e[0].replace(R, ' ')
          }), h = h.slice(c.length));
          for (g in d.filter)
            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
              value: c,
              type: g,
              matches: e
            }), h = h.slice(c.length));
          if (!c)
            break;
        }
        return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
      };
      function qb(a) {
        for (var b = 0, c = a.length, d = ''; c > b; b++)
          d += a[b].value;
        return d;
      }
      function rb(a, b, c) {
        var d = b.dir, e = c && 'parentNode' === d, f = x++;
        return b.first ? function (b, c, f) {
          while (b = b[d])
            if (1 === b.nodeType || e)
              return a(b, c, f);
        } : function (b, c, g) {
          var h, i, j = [
              w,
              f
            ];
          if (g) {
            while (b = b[d])
              if ((1 === b.nodeType || e) && a(b, c, g))
                return !0;
          } else
            while (b = b[d])
              if (1 === b.nodeType || e) {
                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                  return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g))
                  return !0;
              }
        };
      }
      function sb(a) {
        return a.length > 1 ? function (b, c, d) {
          var e = a.length;
          while (e--)
            if (!a[e](b, c, d))
              return !1;
          return !0;
        } : a[0];
      }
      function tb(a, b, c) {
        for (var d = 0, e = b.length; e > d; d++)
          fb(a, b[d], c);
        return c;
      }
      function ub(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function vb(a, b, c, d, e, f) {
        return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
          var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || '*', h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
          if (c && c(q, r, h, i), d) {
            j = ub(r, n), d(j, [], h, i), k = j.length;
            while (k--)
              (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                j = [], k = r.length;
                while (k--)
                  (l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          } else
            r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
        });
      }
      function wb(a) {
        for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = rb(function (a) {
              return a === b;
            }, h, !0), l = rb(function (a) {
              return K.call(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              }]; f > i; i++)
          if (c = d.relative[a[i].type])
            m = [rb(sb(m), c)];
          else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
              for (e = ++i; f > e; e++)
                if (d.relative[a[e].type])
                  break;
              return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
            }
            m.push(c);
          }
        return sb(m);
      }
      function xb(a, b) {
        var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
            var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
            for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
              if (e && l) {
                m = 0;
                while (o = a[m++])
                  if (o(l, g, h)) {
                    i.push(l);
                    break;
                  }
                k && (w = v);
              }
              c && ((l = !o && l) && p--, f && r.push(l));
            }
            if (p += q, c && q !== p) {
              m = 0;
              while (o = b[m++])
                o(r, s, g, h);
              if (f) {
                if (p > 0)
                  while (q--)
                    r[q] || s[q] || (s[q] = G.call(i));
                s = ub(s);
              }
              I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
            }
            return k && (w = v, j = t), r;
          };
        return c ? hb(f) : f;
      }
      return h = fb.compile = function (a, b) {
        var c, d = [], e = [], f = A[a + ' '];
        if (!f) {
          b || (b = g(a)), c = b.length;
          while (c--)
            f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
          f = A(a, xb(e, d)), f.selector = a;
        }
        return f;
      }, i = fb.select = function (a, b, e, f) {
        var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
        if (e = e || [], 1 === o.length) {
          if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
              return e;
            n && (b = b.parentNode), a = a.slice(j.shift().value.length);
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (k = j[i], d.relative[l = k.type])
              break;
            if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
              if (j.splice(i, 1), a = f.length && qb(j), !a)
                return I.apply(e, f), e;
              break;
            }
          }
        }
        return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
      }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement('div'));
      }), ib(function (a) {
        return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
      }) || jb('type|href|height|width', function (a, b, c) {
        return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
      }), c.attributes && ib(function (a) {
        return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
      }) || jb('value', function (a, b, c) {
        return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
      }), ib(function (a) {
        return null == a.getAttribute('disabled');
      }) || jb(L, function (a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
      }), fb;
    }(a);
  m.find = s, m.expr = s.selectors, m.expr[':'] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
  var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
  function w(a, b, c) {
    if (m.isFunction(b))
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return m.grep(a, function (a) {
        return a === b !== c;
      });
    if ('string' == typeof b) {
      if (v.test(b))
        return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }
  m.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, m.fn.extend({
    find: function (a) {
      var b, c = [], d = this, e = d.length;
      if ('string' != typeof a)
        return this.pushStack(m(a).filter(function () {
          for (b = 0; e > b; b++)
            if (m.contains(d[b], this))
              return !0;
        }));
      for (b = 0; e > b; b++)
        m.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + ' ' + a : a, c;
    },
    filter: function (a) {
      return this.pushStack(w(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(w(this, a || [], !0));
    },
    is: function (a) {
      return !!w(this, 'string' == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    }
  });
  var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
      var c, d;
      if (!a)
        return this;
      if ('string' == typeof a) {
        if (c = '<' === a.charAt(0) && '>' === a.charAt(a.length - 1) && a.length >= 3 ? [
            null,
            a,
            null
          ] : z.exec(a), !c || !c[1] && b)
          return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
            for (c in b)
              m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        if (d = y.getElementById(c[2]), d && d.parentNode) {
          if (d.id !== c[2])
            return x.find(a);
          this.length = 1, this[0] = d;
        }
        return this.context = y, this.selector = a, this;
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? 'undefined' != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
    };
  A.prototype = m.fn, x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/, C = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  m.extend({
    dir: function (a, b, c) {
      var d = [], e = a[b];
      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
        1 === e.nodeType && d.push(e), e = e[b];
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    }
  }), m.fn.extend({
    has: function (a) {
      var b, c = m(a, this), d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++)
          if (m.contains(this, c[b]))
            return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || 'string' != typeof a ? m(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? m.unique(f) : f);
    },
    index: function (a) {
      return a ? 'string' == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function D(a, b) {
    do
      a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  m.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return m.dir(a, 'parentNode');
    },
    parentsUntil: function (a, b, c) {
      return m.dir(a, 'parentNode', c);
    },
    next: function (a) {
      return D(a, 'nextSibling');
    },
    prev: function (a) {
      return D(a, 'previousSibling');
    },
    nextAll: function (a) {
      return m.dir(a, 'nextSibling');
    },
    prevAll: function (a) {
      return m.dir(a, 'previousSibling');
    },
    nextUntil: function (a, b, c) {
      return m.dir(a, 'nextSibling', c);
    },
    prevUntil: function (a, b, c) {
      return m.dir(a, 'previousSibling', c);
    },
    siblings: function (a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return m.sibling(a.firstChild);
    },
    contents: function (a) {
      return m.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    }
  }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);
      return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var E = /\S+/g, F = {};
  function G(a) {
    var b = F[a] = {};
    return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }
  m.Callbacks = function (a) {
    a = 'string' == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
        for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
      }, k = {
        add: function () {
          if (h) {
            var d = h.length;
            !function f(b) {
              m.each(b, function (b, c) {
                var d = m.type(c);
                'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && f(c);
              });
            }(arguments), b ? e = h.length : c && (g = d, j(c));
          }
          return this;
        },
        remove: function () {
          return h && m.each(arguments, function (a, c) {
            var d;
            while ((d = m.inArray(c, h, d)) > -1)
              h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
          }), this;
        },
        has: function (a) {
          return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return h = [], e = 0, this;
        },
        disable: function () {
          return h = i = c = void 0, this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return i = void 0, c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return !h || d && !i || (c = c || [], c = [
            a,
            c.slice ? c.slice() : c
          ], b ? i.push(c) : j(c)), this;
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        }
      };
    return k;
  }, m.extend({
    Deferred: function (a) {
      var b = [
          [
            'resolve',
            'done',
            m.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            m.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            m.Callbacks('memory')
          ]
        ], c = 'pending', d = {
          state: function () {
            return c;
          },
          always: function () {
            return e.done(arguments).fail(arguments), this;
          },
          then: function () {
            var a = arguments;
            return m.Deferred(function (c) {
              m.each(b, function (b, f) {
                var g = m.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                });
              }), a = null;
            }).promise();
          },
          promise: function (a) {
            return null != a ? m.extend(a, d) : d;
          }
        }, e = {};
      return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + 'With'](this === e ? d : this, arguments), this;
        }, e[f[0] + 'With'] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function (a) {
      var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
          return function (e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        }, i, j, k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
          c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? m.readyWait++ : m.ready(!0);
    },
    ready: function (a) {
      if (a === !0 ? !--m.readyWait : !m.isReady) {
        if (!y.body)
          return setTimeout(m.ready);
        m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler('ready'), m(y).off('ready')));
      }
    }
  });
  function I() {
    y.addEventListener ? (y.removeEventListener('DOMContentLoaded', J, !1), a.removeEventListener('load', J, !1)) : (y.detachEvent('onreadystatechange', J), a.detachEvent('onload', J));
  }
  function J() {
    (y.addEventListener || 'load' === event.type || 'complete' === y.readyState) && (I(), m.ready());
  }
  m.ready.promise = function (b) {
    if (!H)
      if (H = m.Deferred(), 'complete' === y.readyState)
        setTimeout(m.ready);
      else if (y.addEventListener)
        y.addEventListener('DOMContentLoaded', J, !1), a.addEventListener('load', J, !1);
      else {
        y.attachEvent('onreadystatechange', J), a.attachEvent('onload', J);
        var c = !1;
        try {
          c = null == a.frameElement && y.documentElement;
        } catch (d) {
        }
        c && c.doScroll && !function e() {
          if (!m.isReady) {
            try {
              c.doScroll('left');
            } catch (a) {
              return setTimeout(e, 50);
            }
            I(), m.ready();
          }
        }();
      }
    return H.promise(b);
  };
  var K = 'undefined', L;
  for (L in m(k))
    break;
  k.ownLast = '0' !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;
    c = y.getElementsByTagName('body')[0], c && c.style && (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement('div');
    if (null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }
    a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + ' ').toLowerCase()], c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute('classid') === b;
  };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = 'data-' + b.replace(N, '-$1').toLowerCase();
      if (c = a.getAttribute(d), 'string' == typeof c) {
        try {
          c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {
        }
        m.data(a, b, c);
      } else
        c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (('data' !== b || !m.isEmptyObject(a[b])) && 'toJSON' !== b)
        return !1;
    return !0;
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || 'string' != typeof b)
        return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ('object' == typeof b || 'function' == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 'string' == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(' ')), e = b.length;
          while (e--)
            delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d))
            return;
        }
        (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }
  m.extend({
    cache: {},
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    }
  }), m.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, 'parsedAttrs'))) {
          c = g.length;
          while (c--)
            g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          m._data(f, 'parsedAttrs', !0);
        }
        return e;
      }
      return 'object' == typeof a ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b);
      }) : f ? O(f, a, m.data(f, a)) : void 0;
    },
    removeData: function (a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    }
  }), m.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || 'fx') + 'queue', d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function (a, b) {
      b = b || 'fx';
      var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
          m.dequeue(a, b);
        };
      'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = b + 'queueHooks';
      return m._data(a, c) || m._data(a, c, {
        empty: m.Callbacks('once memory').add(function () {
          m._removeData(a, b + 'queue'), m._removeData(a, c);
        })
      });
    }
  }), m.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);
        m._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && m.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || 'fx', []);
    },
    promise: function (a, b) {
      var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
          --d || e.resolveWith(f, [f]);
        };
      'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
      while (g--)
        c = m._data(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], U = function (a, b) {
      return a = b || a, 'none' === m.css(a, 'display') || !m.contains(a.ownerDocument, a);
    }, V = m.access = function (a, b, c, d, e, f, g) {
      var h = 0, i = a.length, j = null == c;
      if ('object' === m.type(c)) {
        e = !0;
        for (h in c)
          m.access(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(m(a), c);
        })), b))
        for (; i > h; h++)
          b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, W = /^(?:checkbox|radio)$/i;
  !function () {
    var a = y.createElement('input'), b = y.createElement('div'), c = y.createDocumentFragment();
    if (b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName('tbody').length, k.htmlSerialize = !!b.getElementsByTagName('link').length, k.html5Clone = '<:nav></:nav>' !== y.createElement('nav').cloneNode(!0).outerHTML, a.type = 'checkbox', a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>', k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent('onclick', function () {
        k.noCloneEvent = !1;
      }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b, c, d = y.createElement('div');
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      })
      c = 'on' + b, (k[b + 'Bubbles'] = c in a) || (d.setAttribute(c, 't'), k[b + 'Bubbles'] = d.attributes[c].expando === !1);
    d = null;
  }();
  var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
  function ab() {
    return !0;
  }
  function bb() {
    return !1;
  }
  function cb() {
    try {
      return y.activeElement;
    } catch (a) {
    }
  }
  m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || '').match(E) || [''], h = b.length;
        while (h--)
          f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || '').split('.').sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && m.expr.match.needsContext.test(e),
            namespace: p.join('.')
          }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent('on' + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        b = (b || '').match(E) || [''], j = b.length;
        while (j--)
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), i = f = n.length;
            while (f--)
              g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ('**' !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
          } else
            for (o in k)
              m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, 'events'));
      }
    },
    trigger: function (b, c, d, e) {
      var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, 'type') ? b.type : b, q = j.call(b, 'namespace') ? b.namespace.split('.') : [];
      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf('.') >= 0 && (q = p.split('.'), p = q.shift(), q.sort()), g = p.indexOf(':') < 0 && 'on' + p, b = b[m.expando] ? b : new m.Event(p, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + q.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
            o.push(h), l = h;
          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped())
          b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, 'events') || {})[b.type] && m._data(h, 'handle'), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;
          try {
            d[p]();
          } catch (r) {
          }
          m.event.triggered = void 0, l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, 'events') || {})[a.type] || [], k = m.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && (!a.button || 'click' !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || 'click' !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              d = b[f], c = d.selector + ' ', void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
            e.length && g.push({
              elem: i,
              handlers: e
            });
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function (a) {
      if (a[m.expando])
        return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
      while (b--)
        c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (a, b) {
        var c, d, e, f = b.button, g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== cb() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {
            }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return m.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function (a) {
          return m.nodeName(a.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = 'on' + b;
    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
  }, m.Event.prototype = {
    isDefaultPrevented: bb,
    isPropagationStopped: bb,
    isImmediatePropagationStopped: bb,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, m.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (a, b) {
    m.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.submitBubbles || (m.event.special.submit = {
    setup: function () {
      return m.nodeName(this, 'form') ? !1 : void m.event.add(this, 'click._submit keypress._submit', function (a) {
        var b = a.target, c = m.nodeName(b, 'input') || m.nodeName(b, 'button') ? b.form : void 0;
        c && !m._data(c, 'submitBubbles') && (m.event.add(c, 'submit._submit', function (a) {
          a._submit_bubble = !0;
        }), m._data(c, 'submitBubbles', !0));
      });
    },
    postDispatch: function (a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate('submit', this.parentNode, a, !0));
    },
    teardown: function () {
      return m.nodeName(this, 'form') ? !1 : void m.event.remove(this, '._submit');
    }
  }), k.changeBubbles || (m.event.special.change = {
    setup: function () {
      return X.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (m.event.add(this, 'propertychange._change', function (a) {
        'checked' === a.originalEvent.propertyName && (this._just_changed = !0);
      }), m.event.add(this, 'click._change', function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate('change', this, a, !0);
      })), !1) : void m.event.add(this, 'beforeactivate._change', function (a) {
        var b = a.target;
        X.test(b.nodeName) && !m._data(b, 'changeBubbles') && (m.event.add(b, 'change._change', function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate('change', this.parentNode, a, !0);
        }), m._data(b, 'changeBubbles', !0));
      });
    },
    handle: function (a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || 'radio' !== b.type && 'checkbox' !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function () {
      return m.event.remove(this, '._change'), !X.test(this.nodeName);
    }
  }), k.focusinBubbles || m.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (a, b) {
    var c = function (a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };
    m.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = m._data(d, b);
        e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = this.ownerDocument || this, e = m._data(d, b) - 1;
        e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      }
    };
  }), m.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ('object' == typeof a) {
        'string' != typeof b && (c = c || b, b = void 0);
        for (f in a)
          this.on(f, b, c, a[f], e);
        return this;
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
        d = bb;
      else if (!d)
        return this;
      return 1 === e && (g = d, d = function (a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)
        return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
      if ('object' == typeof a) {
        for (e in a)
          this.off(e, b, a[e]);
        return this;
      }
      return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
        m.event.remove(this, a, c, b);
      });
    },
    trigger: function (a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0) : void 0;
    }
  });
  function db(a) {
    var b = eb.split('|'), c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length)
        c.createElement(b.pop());
    return c;
  }
  var eb = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp('<(?:' + eb + ')[\\s/>]', 'i'), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      legend: [
        1,
        '<fieldset>',
        '</fieldset>'
      ],
      area: [
        1,
        '<map>',
        '</map>'
      ],
      param: [
        1,
        '<object>',
        '</object>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      col: [
        2,
        '<table><tbody></tbody><colgroup>',
        '</colgroup></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: k.htmlSerialize ? [
        0,
        '',
        ''
      ] : [
        1,
        'X<div>',
        '</div>'
      ]
    }, sb = db(y), tb = sb.appendChild(y.createElement('div'));
  rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
  function ub(a, b) {
    var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || '*') : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || '*') : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }
  function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }
  function wb(a, b) {
    return m.nodeName(a, 'table') && m.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
  }
  function xb(a) {
    return a.type = (null !== m.find.attr(a, 'type')) + '/' + a.type, a;
  }
  function yb(a) {
    var b = pb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute('type'), a;
  }
  function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      m._data(c, 'globalEval', !b || m._data(b[d], 'globalEval'));
  }
  function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++)
            m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }
  function Bb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);
        for (d in e.events)
          m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      'script' === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : 'object' === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : 'input' === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : 'option' === c ? b.defaultSelected = b.selected = a.defaultSelected : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
    }
  }
  m.extend({
    clone: function (a, b, c) {
      var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
      if (k.html5Clone || m.isXMLDoc(a) || !gb.test('<' + a.nodeName + '>') ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
        for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Bb(e, d[g]);
      if (b)
        if (c)
          for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)
            Ab(e, d[g]);
        else
          Ab(a, f);
      return d = ub(f, 'script'), d.length > 0 && zb(d, !i && ub(a, 'script')), d = h = e = null, f;
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
        if (f = a[q], f || 0 === f)
          if ('object' === m.type(f))
            m.merge(p, f.nodeType ? [f] : f);
          else if (lb.test(f)) {
            h = h || o.appendChild(b.createElement('div')), i = (jb.exec(f) || [
              '',
              ''
            ])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, '<$1></$2>') + l[2], e = l[0];
            while (e--)
              h = h.lastChild;
            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
              f = 'table' !== i || kb.test(f) ? '<table>' !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
              while (e--)
                m.nodeName(j = f.childNodes[e], 'tbody') && !j.childNodes.length && f.removeChild(j);
            }
            m.merge(p, h.childNodes), h.textContent = '';
            while (h.firstChild)
              h.removeChild(h.firstChild);
            h = o.lastChild;
          } else
            p.push(b.createTextNode(f));
      h && o.removeChild(h), k.appendChecked || m.grep(ub(p, 'input'), vb), q = 0;
      while (f = p[q++])
        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), 'script'), g && zb(h), c)) {
          e = 0;
          while (f = h[e++])
            ob.test(f.type || '') && c.push(f);
        }
      return h = null, o;
    },
    cleanData: function (a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events)
              n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
        }
    }
  }), m.fn.extend({
    text: function (a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function (a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
        b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, 'script')), c.parentNode.removeChild(c));
      return this;
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ub(a, !1));
        while (a.firstChild)
          a.removeChild(a.firstChild);
        a.options && m.nodeName(a, 'select') && (a.options.length = 0);
      }
      return this;
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    },
    html: function (a) {
      return V(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a)
          return 1 === b.nodeType ? b.innerHTML.replace(fb, '') : void 0;
        if (!('string' != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || [
            '',
            ''
          ])[1].toLowerCase()])) {
          a = a.replace(ib, '<$1></$2>');
          try {
            for (; d > c; c++)
              b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
            b = 0;
          } catch (e) {
          }
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function (a) {
      return this.remove(a, !0);
    },
    domManip: function (a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
      if (q || l > 1 && 'string' == typeof p && !k.checkClone && nb.test(p))
        return this.each(function (c) {
          var d = n.eq(c);
          q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
        });
      if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ub(i, 'script'), xb), f = g.length; l > j; j++)
          d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, 'script'))), b.call(this[j], d, j);
        if (f)
          for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)
            d = g[j], ob.test(d.type || '') && !m._data(d, 'globalEval') && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || '').replace(qb, '')));
        i = c = null;
      }
      return this;
    }
  }), m.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      return this.pushStack(e);
    };
  });
  var Cb, Db = {};
  function Eb(b, c) {
    var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], 'display');
    return e.detach(), f;
  }
  function Fb(a) {
    var b = y, c = Db[a];
    return c || (c = Eb(a, b), 'none' !== c && c || (Cb = (Cb || m('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
  }
  !function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a)
        return a;
      a = !1;
      var b, c, d;
      return c = y.getElementsByTagName('body')[0], c && c.style ? (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', b.appendChild(y.createElement('div')).style.width = '5px', a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();
  var Gb = /^margin/, Hb = new RegExp('^(' + S + ')(?!px)[a-z%]+$', 'i'), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ib = function (a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  }, Jb = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ('' !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + '';
  }) : y.documentElement.currentStyle && (Ib = function (a) {
    return a.currentStyle;
  }, Jb = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = 'fontSize' === b ? '1em' : g, g = h.pixelLeft + 'px', h.left = d, f && (e.left = f)), void 0 === g ? g : g + '' || 'auto';
  });
  function Lb(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }
  !function () {
    var b, c, d, e, f, g, h;
    if (b = y.createElement('div'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName('a')[0], c = d && d.style) {
      c.cssText = 'float:left;opacity:.5', k.opacity = '0.5' === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = 'content-box', b.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === b.style.backgroundClip, k.boxSizing = '' === c.boxSizing || '' === c.MozBoxSizing || '' === c.WebkitBoxSizing, m.extend(k, {
        reliableHiddenOffsets: function () {
          return null == g && i(), g;
        },
        boxSizingReliable: function () {
          return null == f && i(), f;
        },
        pixelPosition: function () {
          return null == e && i(), e;
        },
        reliableMarginRight: function () {
          return null == h && i(), h;
        }
      });
      function i() {
        var b, c, d, i;
        c = y.getElementsByTagName('body')[0], c && c.style && (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), b.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', e = f = !1, h = !0, a.getComputedStyle && (e = '1%' !== (a.getComputedStyle(b, null) || {}).top, f = '4px' === (a.getComputedStyle(b, null) || { width: '4px' }).width, i = b.appendChild(y.createElement('div')), i.style.cssText = b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', i.style.marginRight = i.style.width = '0', b.style.width = '1px', h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', i = b.getElementsByTagName('td'), i[0].style.cssText = 'margin:0;border:0;padding:0;display:none', g = 0 === i[0].offsetHeight, g && (i[0].style.display = '', i[1].style.display = 'none', g = 0 === i[0].offsetHeight), c.removeChild(d));
      }
    }
  }(), m.swap = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b)
      g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)
      a.style[f] = g[f];
    return e;
  };
  var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp('^(' + S + ')(.*)$', 'i'), Qb = new RegExp('^([+-])=(' + S + ')', 'i'), Rb = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, Sb = {
      letterSpacing: '0',
      fontWeight: '400'
    }, Tb = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function Ub(a, b) {
    if (b in a)
      return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
    while (e--)
      if (b = Tb[e] + c, b in a)
        return b;
    return d;
  }
  function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      d = a[g], d.style && (f[g] = m._data(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && U(d) && (f[g] = m._data(d, 'olddisplay', Fb(d.nodeName)))) : (e = U(d), (c && 'none' !== c || !e) && m._data(d, 'olddisplay', e ? c : m.css(d, 'display'))));
    for (g = 0; h > g; g++)
      d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
    return a;
  }
  function Wb(a, b, c) {
    var d = Pb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
  }
  function Xb(a, b, c, d, e) {
    for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
      'margin' === c && (g += m.css(a, c + T[f], !0, e)), d ? ('content' === c && (g -= m.css(a, 'padding' + T[f], !0, e)), 'margin' !== c && (g -= m.css(a, 'border' + T[f] + 'Width', !0, e))) : (g += m.css(a, 'padding' + T[f], !0, e), 'padding' !== c && (g += m.css(a, 'border' + T[f] + 'Width', !0, e)));
    return g;
  }
  function Yb(a, b, c) {
    var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, f);
    if (0 >= e || null == e) {
      if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))
        return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }
    return e + Xb(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Jb(a, 'opacity');
            return '' === c ? '1' : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { 'float': k.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = m.camelCase(b), i = a.style;
        if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)
          return g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, 'string' === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || m.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), !(g && 'set' in g && void 0 === (c = g.set(a, c, d)))))
          try {
            i[b] = c;
          } catch (j) {
          }
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = m.camelCase(b);
      return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && 'get' in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), 'normal' === f && b in Sb && (f = Sb[b]), '' === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    }
  }), m.each([
    'height',
    'width'
  ], function (a, b) {
    m.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Ob.test(m.css(a, 'display')) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
          return Yb(a, b, d);
        }) : Yb(a, b, d) : void 0;
      },
      set: function (a, c, d) {
        var e = d && Ib(a);
        return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, e), e) : 0);
      }
    };
  }), k.opacity || (m.cssHooks.opacity = {
    get: function (a, b) {
      return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : b ? '1' : '';
    },
    set: function (a, b) {
      var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '', f = d && d.filter || c.filter || '';
      c.zoom = 1, (b >= 1 || '' === b) && '' === m.trim(f.replace(Mb, '')) && c.removeAttribute && (c.removeAttribute('filter'), '' === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + ' ' + e);
    }
  }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, { display: 'inline-block' }, Jb, [
      a,
      'marginRight'
    ]) : void 0;
  }), m.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (a, b) {
    m.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
          e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
        return e;
      }
    }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
  }), m.fn.extend({
    css: function (a, b) {
      return V(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (m.isArray(b)) {
          for (d = Ib(a), e = b.length; e > g; g++)
            f[b[g]] = m.css(a, b[g], !1, d);
          return f;
        }
        return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Vb(this, !0);
    },
    hide: function () {
      return Vb(this);
    },
    toggle: function (a) {
      return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        U(this) ? m(this).show() : m(this).hide();
      });
    }
  });
  function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }
  m.Tween = Zb, Zb.prototype = {
    constructor: Zb,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? '' : 'px');
    },
    cur: function () {
      var a = Zb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
    },
    run: function (a) {
      var b, c = Zb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
    }
  }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
      },
      set: function (a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }
  }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, m.easing = {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2;
    }
  }, m.fx = Zb.prototype.init, m.fx.step = {};
  var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp('^(?:([+-])=|)(' + S + ')([a-z%]*)$', 'i'), cc = /queueHooks$/, dc = [ic], ec = {
      '*': [function (a, b) {
          var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? '' : 'px'), g = (m.cssNumber[a] || 'px' !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do
              h = h || '.5', g /= h, m.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }]
    };
  function fc() {
    return setTimeout(function () {
      $b = void 0;
    }), $b = m.now();
  }
  function gc(a, b) {
    var c, d = { height: a }, e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      c = T[e], d['margin' + c] = d['padding' + c] = a;
    return b && (d.opacity = d.width = a), d;
  }
  function hc(a, b, c) {
    for (var d, e = (ec[b] || []).concat(ec['*']), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a))
        return d;
  }
  function ic(a, b, c) {
    var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, 'fxshow');
    c.queue || (h = m._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--, m.queue(a, 'fx').length || h.empty.fire();
      });
    })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
      p.overflow,
      p.overflowX,
      p.overflowY
    ], j = m.css(a, 'display'), l = 'none' === j ? m._data(a, 'olddisplay') || Fb(a.nodeName) : j, 'inline' === l && 'none' === m.css(a, 'float') && (k.inlineBlockNeedsLayout && 'inline' !== Fb(a.nodeName) ? p.zoom = 1 : p.display = 'inline-block')), c.overflow && (p.overflow = 'hidden', k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));
    for (d in b)
      if (e = b[d], ac.exec(e)) {
        if (delete b[d], f = f || 'toggle' === e, e === (q ? 'hide' : 'show')) {
          if ('show' !== e || !r || void 0 === r[d])
            continue;
          q = !0;
        }
        o[d] = r && r[d] || m.style(a, d);
      } else
        j = void 0;
    if (m.isEmptyObject(o))
      'inline' === ('none' === j ? Fb(a.nodeName) : j) && (p.display = j);
    else {
      r ? 'hidden' in r && (q = r.hidden) : r = m._data(a, 'fxshow', {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
        m(a).hide();
      }), n.done(function () {
        var b;
        m._removeData(a, 'fxshow');
        for (b in o)
          m.style(a, b, o[b]);
      });
      for (d in o)
        g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
    }
  }
  function jc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && 'expand' in g) {
        f = g.expand(f), delete a[d];
        for (c in f)
          c in a || (a[c] = f[c], b[c] = e);
      } else
        b[d] = e;
  }
  function kc(a, b, c) {
    var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
        delete i.elem;
      }), i = function () {
        if (e)
          return !1;
        for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
          j.tweens[g].run(f);
        return h.notifyWith(a, [
          j,
          f,
          c
        ]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      }, j = h.promise({
        elem: a,
        props: m.extend({}, b),
        opts: m.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: $b || fc(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0, d = b ? j.tweens.length : 0;
          if (e)
            return this;
          for (e = !0; d > c; c++)
            j.tweens[c].run(1);
          return b ? h.resolveWith(a, [
            j,
            b
          ]) : h.rejectWith(a, [
            j,
            b
          ]), this;
        }
      }), k = j.props;
    for (jc(k, j.opts.specialEasing); g > f; f++)
      if (d = dc[f].call(j, a, k, j.opts))
        return d;
    return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  m.Animation = m.extend(kc, {
    tweener: function (a, b) {
      m.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
      for (var c, d = 0, e = a.length; e > d; d++)
        c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? dc.unshift(a) : dc.push(a);
    }
  }), m.speed = function (a, b, c) {
    var d = a && 'object' == typeof a ? m.extend({}, a) : {
        complete: c || !c && b || m.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !m.isFunction(b) && b
      };
    return d.duration = m.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(U).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
          var b = kc(this, m.extend({}, a), f);
          (e || m._data(this, 'finish')) && b.stop(!0);
        };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c);
      };
      return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
        var b = !0, e = null != a && a + 'queueHooks', f = m.timers, g = m._data(this);
        if (e)
          g[e] && g[e].stop && d(g[e]);
        else
          for (e in g)
            g[e] && g[e].stop && cc.test(e) && d(g[e]);
        for (e = f.length; e--;)
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && m.dequeue(this, a);
      });
    },
    finish: function (a) {
      return a !== !1 && (a = a || 'fx'), this.each(function () {
        var b, c = m._data(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = m.timers, g = d ? d.length : 0;
        for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)
          d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), m.each([
    'toggle',
    'show',
    'hide'
  ], function (a, b) {
    var c = m.fn[b];
    m.fn[b] = function (a, d, e) {
      return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
    };
  }), m.each({
    slideDown: gc('show'),
    slideUp: gc('hide'),
    slideToggle: gc('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a, b = m.timers, c = 0;
    for ($b = m.now(); c < b.length; c++)
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    b.length || m.fx.stop(), $b = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _b || (_b = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_b), _b = null;
  }, m.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
      var d = setTimeout(b, a);
      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;
    b = y.createElement('div'), b.setAttribute('className', 't'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName('a')[0], c = y.createElement('select'), e = c.appendChild(y.createElement('option')), a = b.getElementsByTagName('input')[0], d.style.cssText = 'top:1px', k.getSetAttribute = 't' !== b.className, k.style = /top/.test(d.getAttribute('style')), k.hrefNormalized = '/a' === d.getAttribute('href'), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement('form').enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement('input'), a.setAttribute('value', ''), k.input = '' === a.getAttribute('value'), a.value = 't', a.setAttribute('type', 'radio'), k.radioValue = 't' === a.value;
  }();
  var lc = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)
          return d = m.isFunction(a), this.each(function (c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : m.isArray(e) && (e = m.map(e, function (a) {
              return null == a ? '' : a + '';
            })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
          });
        if (e)
          return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(lc, '') : null == c ? '' : c);
      }
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = m.find.attr(a, 'value');
          return null != b ? b : m.trim(m.text(a));
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && m.nodeName(c.parentNode, 'optgroup'))) {
              if (b = m(c).val(), f)
                return b;
              g.push(b);
            }
          return g;
        },
        set: function (a, b) {
          var c, d, e = a.options, f = m.makeArray(b), g = e.length;
          while (g--)
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)
              try {
                d.selected = c = !0;
              } catch (h) {
                d.scrollHeight;
              }
            else
              d.selected = !1;
          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), m.each([
    'radio',
    'checkbox'
  ], function () {
    m.valHooks[this] = {
      set: function (a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute('value') ? 'on' : a.value;
    });
  });
  var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    }
  }), m.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f)
        return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void m.removeAttr(a, b));
    },
    removeAttr: function (a, b) {
      var c, d, e = 0, f = b && b.match(E);
      if (f && 1 === a.nodeType)
        while (c = f[e++])
          d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase('default-' + c)] = a[d] = !1 : m.attr(a, c, ''), a.removeAttribute(qc ? c : d);
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && 'radio' === b && m.nodeName(a, 'input')) {
            var c = a.value;
            return a.setAttribute('type', b), c && (a.value = c), b;
          }
        }
      }
    }
  }), nc = {
    set: function (a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase('default-' + c)] = a[c] = !0, c;
    }
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = oc[b] || m.find.attr;
    oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
      var e, f;
      return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase('default-' + b)] ? b.toLowerCase() : null;
    };
  }), rc && qc || (m.attrHooks.value = {
    set: function (a, b, c) {
      return m.nodeName(a, 'input') ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
    }
  }), qc || (mc = {
    set: function (a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += '', 'value' === c || b === a.getAttribute(c) ? b : void 0;
    }
  }, oc.id = oc.name = oc.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && '' !== d.value ? d.value : null;
  }, m.valHooks.button = {
    get: function (a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    },
    set: mc.set
  }, m.attrHooks.contenteditable = {
    set: function (a, b, c) {
      mc.set(a, '' === b ? !1 : b, c);
    }
  }, m.each([
    'width',
    'height'
  ], function (a, b) {
    m.attrHooks[b] = {
      set: function (a, c) {
        return '' === c ? (a.setAttribute(b, 'auto'), c) : void 0;
      }
    };
  })), k.style || (m.attrHooks.style = {
    get: function (a) {
      return a.style.cssText || void 0;
    },
    set: function (a, b) {
      return a.style.cssText = b + '';
    }
  });
  var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {
        }
      });
    }
  }), m.extend({
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g)
        return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = m.find.attr(a, 'tabindex');
          return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    }
  }), k.hrefNormalized || m.each([
    'href',
    'src'
  ], function (a, b) {
    m.propHooks[b] = {
      get: function (a) {
        return a.getAttribute(b, 4);
      }
    };
  }), k.optSelected || (m.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }
  }), m.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype || (m.propFix.enctype = 'encoding');
  var uc = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h = 0, i = this.length, j = 'string' == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || '').match(E) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(uc, ' ') : ' ')) {
            f = 0;
            while (e = b[f++])
              d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
            g = m.trim(d), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || 'string' == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || '').match(E) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(uc, ' ') : '')) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(' ' + e + ' ') >= 0)
                d = d.replace(' ' + e + ' ', ' ');
            g = a ? m.trim(d) : '', c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ('string' === c) {
          var b, d = 0, e = m(this), f = a.match(E) || [];
          while (b = f[d++])
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else
          (c === K || 'boolean' === c) && (this.className && m._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : m._data(this, '__className__') || '');
      });
    },
    hasClass: function (a) {
      for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(uc, ' ').indexOf(b) >= 0)
          return !0;
      return !1;
    }
  }), m.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), m.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
    }
  });
  var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse)
      return a.JSON.parse(b + '');
    var c, d = null, e = m.trim(b + '');
    return e && !m.trim(e.replace(xc, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, '');
    })) ? Function('return ' + e)() : m.error('Invalid JSON: ' + b);
  }, m.parseXML = function (b) {
    var c, d;
    if (!b || 'string' != typeof b)
      return null;
    try {
      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, 'text/xml')) : (c = new ActiveXObject('Microsoft.XMLDOM'), c.async = 'false', c.loadXML(b));
    } catch (e) {
      c = void 0;
    }
    return c && c.documentElement && !c.getElementsByTagName('parsererror').length || m.error('Invalid XML: ' + b), c;
  };
  var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = '*/'.concat('*');
  try {
    zc = location.href;
  } catch (Kc) {
    zc = y.createElement('a'), zc.href = '', zc = zc.href;
  }
  yc = Gc.exec(zc.toLowerCase()) || [];
  function Lc(a) {
    return function (b, c) {
      'string' != typeof b && (c = b, b = '*');
      var d, e = 0, f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        while (d = f[e++])
          '+' === d.charAt(0) ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }
  function Mc(a, b, c, d) {
    var e = {}, f = a === Ic;
    function g(h) {
      var i;
      return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e['*'] && g('*');
  }
  function Nc(a, b) {
    var c, d, e = m.ajaxSettings.flatOptions || {};
    for (d in b)
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }
  function Oc(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ('*' === i[0])
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader('Content-Type'));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c)
      f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + ' ' + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Pc(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters)
        j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ('*' === f)
          f = i;
        else if ('*' !== i && i !== f) {
          if (g = j[i + ' ' + f] || j['* ' + f], !g)
            for (e in j)
              if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a['throws'])
              b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: 'parsererror',
                  error: g ? l : 'No conversion from ' + i + ' to ' + f
                };
              }
        }
    return {
      state: 'success',
      data: b
    };
  }
  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zc,
      type: 'GET',
      isLocal: Dc.test(yc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Jc,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': m.parseJSON,
        'text xml': m.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lc(Hc),
    ajaxTransport: Lc(Ic),
    ajax: function (a, b) {
      'object' == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while (b = Cc.exec(f))
                  j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a)
                  q[b] = [
                    q[b],
                    a[b]
                  ];
              else
                v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + '').replace(Ac, '').replace(Fc, yc[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ('http:' === c[1] ? '80' : '443')) === (yc[3] || ('http:' === yc[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)
        return v;
      h = k.global, h && 0 === m.active++ && m.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, '$1_=' + vc++) : e + (wc.test(e) ? '&' : '?') + '_=' + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader('If-Modified-Since', m.lastModified[e]), m.etag[e] && v.setRequestHeader('If-None-Match', m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + Jc + '; q=0.01' : '') : k.accepts['*']);
      for (d in k.headers)
        v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = 'abort';
      for (d in {
          success: 1,
          error: 1,
          complete: 1
        })
        v[d](k[d]);
      if (i = Mc(Ic, k, b, v)) {
        v.readyState = 1, h && n.trigger('ajaxSend', [
          v,
          k
        ]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort('timeout');
        }, k.timeout));
        try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t))
            throw w;
          x(-1, w);
        }
      } else
        x(-1, 'No Transport');
      function x(a, b, c, d) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (m.lastModified[e] = w), w = v.getResponseHeader('etag'), w && (m.etag[e] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
          r,
          x,
          v
        ]) : o.rejectWith(l, [
          v,
          x,
          s
        ]), v.statusCode(q), q = void 0, h && n.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
          v,
          k,
          j ? r : s
        ]), p.fireWith(l, [
          v,
          x
        ]), h && (n.trigger('ajaxComplete', [
          v,
          k
        ]), --m.active || m.event.trigger('ajaxStop')));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, 'json');
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, 'script');
    }
  }), m.each([
    'get',
    'post'
  ], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), m.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), m._evalUrl = function (a) {
    return m.ajax({
      url: a,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      'throws': !0
    });
  }, m.fn.extend({
    wrapAll: function (a) {
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).wrapAll(a.call(this, b));
        });
      if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType)
            a = a.firstChild;
          return a;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = m.isFunction(a);
      return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        m.nodeName(this, 'body') || m(this).replaceWith(this.childNodes);
      }).end();
    }
  }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && 'none' === (a.style && a.style.display || m.css(a, 'display'));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };
  var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;
  function Vc(a, b, c, d) {
    var e;
    if (m.isArray(b))
      m.each(b, function (b, e) {
        c || Rc.test(a) ? d(a, e) : Vc(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
      });
    else if (c || 'object' !== m.type(b))
      d(a, b);
    else
      for (e in b)
        Vc(a + '[' + e + ']', b[e], c, d);
  }
  m.param = function (a, b) {
    var c, d = [], e = function (a, b) {
        b = m.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
      };
    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))
      m.each(a, function () {
        e(this.name, this.value);
      });
    else
      for (c in a)
        Vc(c, a[c], b, e);
    return d.join('&').replace(Qc, '+');
  }, m.fn.extend({
    serialize: function () {
      return m.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = m.prop(this, 'elements');
        return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !m(this).is(':disabled') && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();
        return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Sc, '\r\n')
          };
        }) : {
          name: b.name,
          value: c.replace(Sc, '\r\n')
        };
      }).get();
    }
  }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
  } : Zc;
  var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
  a.ActiveXObject && m(a).on('unload', function () {
    for (var a in Xc)
      Xc[a](void 0, !0);
  }), k.cors = !!Yc && 'withCredentials' in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var b;
      return {
        send: function (c, d) {
          var e, f = a.xhr(), g = ++Wc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields)
              f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
          for (e in c)
            void 0 !== c[e] && f.setRequestHeader(e, c[e] + '');
          f.send(a.hasContent && a.data || null), b = function (c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState))
              if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)
                4 !== f.readyState && f.abort();
              else {
                j = {}, h = f.status, 'string' == typeof f.responseText && (j.text = f.responseText);
                try {
                  i = f.statusText;
                } catch (k) {
                  i = '';
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
              }
            j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b();
        },
        abort: function () {
          b && b(void 0, !0);
        }
      };
    }
  });
  function Zc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {
    }
  }
  function $c() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP');
    } catch (b) {
    }
  }
  m.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (a) {
        return m.globalEval(a), a;
      }
    }
  }), m.ajaxPrefilter('script', function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET', a.global = !1);
  }), m.ajaxTransport('script', function (a) {
    if (a.crossDomain) {
      var b, c = y.head || m('head')[0] || y.documentElement;
      return {
        send: function (d, e) {
          b = y.createElement('script'), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, 'success'));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function () {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var a = _c.pop() || m.expando + '_' + vc++;
      return this[a] = !0, a;
    }
  }), m.ajaxPrefilter('json jsonp', function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && ad.test(b.data) && 'data');
    return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, '$1' + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
      return g || m.error(e + ' was not called'), g[0];
    }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
    }), 'script') : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || 'string' != typeof a)
      return null;
    'boolean' == typeof b && (c = b, b = !1), b = b || y;
    var d = u.exec(a), e = !c && [];
    return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
  };
  var bd = m.fn.load;
  m.fn.load = function (a, b, c) {
    if ('string' != typeof a && bd)
      return bd.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(' ');
    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && 'object' == typeof b && (f = 'POST'), g.length > 0 && m.ajax({
      url: a,
      type: f,
      dataType: 'html',
      data: b
    }).done(function (a) {
      e = arguments, g.html(d ? m('<div>').append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [
        a.responseText,
        b,
        a
      ]);
    }), this;
  }, m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  var cd = a.document.documentElement;
  function dd(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }
  m.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = m.css(a, 'position'), l = m(a), n = {};
      'static' === k && (a.style.position = 'relative'), h = l.offset(), f = m.css(a, 'top'), i = m.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && m.inArray('auto', [
        f,
        i
      ]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), 'using' in b ? b.using.call(a, n) : l.css(n);
    }
  }, m.fn.extend({
    offset: function (a) {
      if (arguments.length)
        return void 0 === a ? this : this.each(function (b) {
          m.offset.setOffset(this, a, b);
        });
      var b, c, d = {
          top: 0,
          left: 0
        }, e = this[0], f = e && e.ownerDocument;
      if (f)
        return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
          top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
          left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }) : d;
    },
    position: function () {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          }, d = this[0];
        return 'fixed' === m.css(d, 'position') ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], 'html') || (c = a.offset()), c.top += m.css(a[0], 'borderTopWidth', !0), c.left += m.css(a[0], 'borderLeftWidth', !0)), {
          top: b.top - c.top - m.css(d, 'marginTop', !0),
          left: b.left - c.left - m.css(d, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || cd;
        while (a && !m.nodeName(a, 'html') && 'static' === m.css(a, 'position'))
          a = a.offsetParent;
        return a || cd;
      });
    }
  }), m.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (a, b) {
    var c = /Y/.test(b);
    m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dd(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each([
    'top',
    'left'
  ], function (a, b) {
    m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
      return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + 'px' : c) : void 0;
    });
  }), m.each({
    Height: 'height',
    Width: 'width'
  }, function (a, b) {
    m.each({
      padding: 'inner' + a,
      content: b,
      '': 'outer' + a
    }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
        return V(this, function (b, c, d) {
          var e;
          return m.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return m;
  });
  var ed = a.jQuery, fd = a.$;
  return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
  }, typeof b === K && (a.jQuery = a.$ = m), m;
});
/*
 AngularJS v1.2.25
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (W, X, t) {
  'use strict';
  function D(b) {
    return function () {
      var a = arguments[0], c, a = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.2.25/' + (b ? b + '/' : '') + a;
      for (c = 1; c < arguments.length; c++)
        a = a + (1 == c ? '?' : '&') + 'p' + (c - 1) + '=' + encodeURIComponent('function' == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof arguments[c] ? 'undefined' : 'string' != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a);
    };
  }
  function Pa(b) {
    if (null == b || Ga(b))
      return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : A(b) || I(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function r(b, a, c) {
    var d;
    if (b)
      if (P(b))
        for (d in b)
          'prototype' == d || ('length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
      else if (I(b) || Pa(b))
        for (d = 0; d < b.length; d++)
          a.call(c, b[d], d);
      else if (b.forEach && b.forEach !== r)
        b.forEach(a, c);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b;
  }
  function Zb(b) {
    var a = [], c;
    for (c in b)
      b.hasOwnProperty(c) && a.push(c);
    return a.sort();
  }
  function Tc(b, a, c) {
    for (var d = Zb(b), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function $b(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function hb() {
    for (var b = ma.length, a; b;) {
      b--;
      a = ma[b].charCodeAt(0);
      if (57 == a)
        return ma[b] = 'A', ma.join('');
      if (90 == a)
        ma[b] = '0';
      else
        return ma[b] = String.fromCharCode(a + 1), ma.join('');
    }
    ma.unshift('0');
    return ma.join('');
  }
  function ac(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function J(b) {
    var a = b.$$hashKey;
    r(arguments, function (a) {
      a !== b && r(a, function (a, c) {
        b[c] = a;
      });
    });
    ac(b, a);
    return b;
  }
  function U(b) {
    return parseInt(b, 10);
  }
  function bc(b, a) {
    return J(new (J(function () {
    }, { prototype: b }))(), a);
  }
  function F() {
  }
  function Qa(b) {
    return b;
  }
  function ba(b) {
    return function () {
      return b;
    };
  }
  function y(b) {
    return 'undefined' === typeof b;
  }
  function z(b) {
    return 'undefined' !== typeof b;
  }
  function T(b) {
    return null != b && 'object' === typeof b;
  }
  function A(b) {
    return 'string' === typeof b;
  }
  function ib(b) {
    return 'number' === typeof b;
  }
  function ta(b) {
    return '[object Date]' === za.call(b);
  }
  function P(b) {
    return 'function' === typeof b;
  }
  function jb(b) {
    return '[object RegExp]' === za.call(b);
  }
  function Ga(b) {
    return b && b.document && b.location && b.alert && b.setInterval;
  }
  function Uc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function Vc(b, a, c) {
    var d = [];
    r(b, function (b, f, g) {
      d.push(a.call(c, b, f, g));
    });
    return d;
  }
  function Ra(b, a) {
    if (b.indexOf)
      return b.indexOf(a);
    for (var c = 0; c < b.length; c++)
      if (a === b[c])
        return c;
    return -1;
  }
  function Sa(b, a) {
    var c = Ra(b, a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function Ha(b, a, c, d) {
    if (Ga(b) || b && b.$evalAsync && b.$watch)
      throw Ta('cpws');
    if (a) {
      if (b === a)
        throw Ta('cpi');
      c = c || [];
      d = d || [];
      if (T(b)) {
        var e = Ra(c, b);
        if (-1 !== e)
          return d[e];
        c.push(b);
        d.push(a);
      }
      if (I(b))
        for (var f = a.length = 0; f < b.length; f++)
          e = Ha(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
      else {
        var g = a.$$hashKey;
        I(a) ? a.length = 0 : r(a, function (b, c) {
          delete a[c];
        });
        for (f in b)
          e = Ha(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e;
        ac(a, g);
      }
    } else if (a = b)
      I(b) ? a = Ha(b, [], c, d) : ta(b) ? a = new Date(b.getTime()) : jb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : T(b) && (a = Ha(b, {}, c, d));
    return a;
  }
  function ha(b, a) {
    if (I(b)) {
      a = a || [];
      for (var c = 0; c < b.length; c++)
        a[c] = b[c];
    } else if (T(b))
      for (c in a = a || {}, b)
        !kb.call(b, c) || '$' === c.charAt(0) && '$' === c.charAt(1) || (a[c] = b[c]);
    return a || b;
  }
  function Aa(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (I(b)) {
        if (!I(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!Aa(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (ta(b))
          return ta(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() === a.getTime() : !1;
        if (jb(b) && jb(a))
          return b.toString() == a.toString();
        if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ga(b) || Ga(a) || I(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !P(b[d])) {
            if (!Aa(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== t && !P(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Bb(b, a) {
    var c = 2 < arguments.length ? Ba.call(arguments, 2) : [];
    return !P(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(Ba.call(arguments, 0))) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Wc(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) ? c = t : Ga(a) ? c = '$WINDOW' : a && X === a ? c = '$DOCUMENT' : a && (a.$evalAsync && a.$watch) && (c = '$SCOPE');
    return c;
  }
  function na(b, a) {
    return 'undefined' === typeof b ? t : JSON.stringify(b, Wc, a ? '  ' : null);
  }
  function cc(b) {
    return A(b) ? JSON.parse(b) : b;
  }
  function Ua(b) {
    'function' === typeof b ? b = !0 : b && 0 !== b.length ? (b = M('' + b), b = !('f' == b || '0' == b || 'false' == b || 'no' == b || 'n' == b || '[]' == b)) : b = !1;
    return b;
  }
  function ia(b) {
    b = v(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = v('<div>').append(b).html();
    try {
      return 3 === b[0].nodeType ? M(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + M(b);
      });
    } catch (d) {
      return M(c);
    }
  }
  function dc(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {
    }
  }
  function ec(b) {
    var a = {}, c, d;
    r((b || '').split('&'), function (b) {
      b && (c = b.replace(/\+/g, '%20').split('='), d = dc(c[0]), z(d) && (b = z(c[1]) ? dc(c[1]) : !0, kb.call(a, d) ? I(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Cb(b) {
    var a = [];
    r(b, function (b, d) {
      I(b) ? r(b, function (b) {
        a.push(Ca(d, !0) + (!0 === b ? '' : '=' + Ca(b, !0)));
      }) : a.push(Ca(d, !0) + (!0 === b ? '' : '=' + Ca(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function lb(b) {
    return Ca(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function Ca(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, a ? '%20' : '+');
  }
  function Xc(b, a) {
    function c(a) {
      a && d.push(a);
    }
    var d = [b], e, f, g = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], k = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    r(g, function (a) {
      g[a] = !0;
      c(X.getElementById(a));
      a = a.replace(':', '\\:');
      b.querySelectorAll && (r(b.querySelectorAll('.' + a), c), r(b.querySelectorAll('.' + a + '\\:'), c), r(b.querySelectorAll('[' + a + ']'), c));
    });
    r(d, function (a) {
      if (!e) {
        var b = k.exec(' ' + a.className + ' ');
        b ? (e = a, f = (b[2] || '').replace(/\s+/g, ',')) : r(a.attributes, function (b) {
          !e && g[b.name] && (e = a, f = b.value);
        });
      }
    });
    e && a(e, f ? [f] : []);
  }
  function fc(b, a) {
    var c = function () {
        b = v(b);
        if (b.injector()) {
          var c = b[0] === X ? 'document' : ia(b);
          throw Ta('btstrpd', c.replace(/</, '&lt;').replace(/>/, '&gt;'));
        }
        a = a || [];
        a.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]);
        a.unshift('ng');
        c = gc(a);
        c.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          '$animate',
          function (a, b, c, d, e) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return c;
      }, d = /^NG_DEFER_BOOTSTRAP!/;
    if (W && !d.test(W.name))
      return c();
    W.name = W.name.replace(d, '');
    Va.resumeBootstrap = function (b) {
      r(b, function (b) {
        a.push(b);
      });
      c();
    };
  }
  function mb(b, a) {
    a = a || '_';
    return b.replace(Yc, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function Db(b, a, c) {
    if (!b)
      throw Ta('areq', a || '?', c || 'required');
    return b;
  }
  function Wa(b, a, c) {
    c && I(b) && (b = b[b.length - 1]);
    Db(P(b), a, 'not a function, got ' + (b && 'object' === typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function Da(b, a) {
    if ('hasOwnProperty' === b)
      throw Ta('badname', a);
  }
  function hc(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, f = a.length, g = 0; g < f; g++)
      d = a[g], b && (b = (e = b)[d]);
    return !c && P(b) ? Bb(e, b) : b;
  }
  function Eb(b) {
    var a = b[0];
    b = b[b.length - 1];
    if (a === b)
      return v(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return v(c);
  }
  function Zc(b) {
    var a = D('$injector'), c = D('ng');
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || D;
    return b.module || (b.module = function () {
      var b = {};
      return function (e, f, g) {
        if ('hasOwnProperty' === e)
          throw c('badname', 'module');
        f && b.hasOwnProperty(e) && (b[e] = null);
        return b[e] || (b[e] = function () {
          function b(a, d, e) {
            return function () {
              c[e || 'push']([
                a,
                d,
                arguments
              ]);
              return n;
            };
          }
          if (!f)
            throw a('nomod', e);
          var c = [], d = [], l = b('$injector', 'invoke'), n = {
              _invokeQueue: c,
              _runBlocks: d,
              requires: f,
              name: e,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: b('$provide', 'value'),
              constant: b('$provide', 'constant', 'unshift'),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              config: l,
              run: function (a) {
                d.push(a);
                return this;
              }
            };
          g && l(g);
          return n;
        }());
      };
    }());
  }
  function $c(b) {
    J(b, {
      bootstrap: fc,
      copy: Ha,
      extend: J,
      equals: Aa,
      element: v,
      forEach: r,
      injector: gc,
      noop: F,
      bind: Bb,
      toJson: na,
      fromJson: cc,
      identity: Qa,
      isUndefined: y,
      isDefined: z,
      isString: A,
      isFunction: P,
      isObject: T,
      isNumber: ib,
      isElement: Uc,
      isArray: I,
      version: ad,
      isDate: ta,
      lowercase: M,
      uppercase: Ia,
      callbacks: { counter: 0 },
      $$minErr: D,
      $$csp: Xa
    });
    Ya = Zc(W);
    try {
      Ya('ngLocale');
    } catch (a) {
      Ya('ngLocale', []).provider('$locale', bd);
    }
    Ya('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: cd });
        a.provider('$compile', ic).directive({
          a: dd,
          input: jc,
          textarea: jc,
          form: ed,
          script: fd,
          select: gd,
          style: hd,
          option: id,
          ngBind: jd,
          ngBindHtml: kd,
          ngBindTemplate: ld,
          ngClass: md,
          ngClassEven: nd,
          ngClassOdd: od,
          ngCloak: pd,
          ngController: qd,
          ngForm: rd,
          ngHide: sd,
          ngIf: td,
          ngInclude: ud,
          ngInit: vd,
          ngNonBindable: wd,
          ngPluralize: xd,
          ngRepeat: yd,
          ngShow: zd,
          ngStyle: Ad,
          ngSwitch: Bd,
          ngSwitchWhen: Cd,
          ngSwitchDefault: Dd,
          ngOptions: Ed,
          ngTransclude: Fd,
          ngModel: Gd,
          ngList: Hd,
          ngChange: Id,
          required: kc,
          ngRequired: kc,
          ngValue: Jd
        }).directive({ ngInclude: Kd }).directive(Fb).directive(lc);
        a.provider({
          $anchorScroll: Ld,
          $animate: Md,
          $browser: Nd,
          $cacheFactory: Od,
          $controller: Pd,
          $document: Qd,
          $exceptionHandler: Rd,
          $filter: mc,
          $interpolate: Sd,
          $interval: Td,
          $http: Ud,
          $httpBackend: Vd,
          $location: Wd,
          $log: Xd,
          $parse: Yd,
          $rootScope: Zd,
          $q: $d,
          $sce: ae,
          $sceDelegate: be,
          $sniffer: ce,
          $templateCache: de,
          $timeout: ee,
          $window: fe,
          $$rAF: ge,
          $$asyncCallback: he
        });
      }
    ]);
  }
  function Za(b) {
    return b.replace(ie, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(je, 'Moz$1');
  }
  function Gb(b, a, c, d) {
    function e(b) {
      var e = c && b ? [this.filter(b)] : [this], m = a, h, l, n, p, q, s;
      if (!d || null != b)
        for (; e.length;)
          for (h = e.shift(), l = 0, n = h.length; l < n; l++)
            for (p = v(h[l]), m ? p.triggerHandler('$destroy') : m = !m, q = 0, p = (s = p.children()).length; q < p; q++)
              e.push(Ea(s[q]));
      return f.apply(this, arguments);
    }
    var f = Ea.fn[b], f = f.$original || f;
    e.$original = f;
    Ea.fn[b] = e;
  }
  function S(b) {
    if (b instanceof S)
      return b;
    A(b) && (b = aa(b));
    if (!(this instanceof S)) {
      if (A(b) && '<' != b.charAt(0))
        throw Hb('nosel');
      return new S(b);
    }
    if (A(b)) {
      var a = b;
      b = X;
      var c;
      if (c = ke.exec(a))
        b = [b.createElement(c[1])];
      else {
        var d = b, e;
        b = d.createDocumentFragment();
        c = [];
        if (Ib.test(a)) {
          d = b.appendChild(d.createElement('div'));
          e = (le.exec(a) || [
            '',
            ''
          ])[1].toLowerCase();
          e = ea[e] || ea._default;
          d.innerHTML = '<div>&#160;</div>' + e[1] + a.replace(me, '<$1></$2>') + e[2];
          d.removeChild(d.firstChild);
          for (a = e[0]; a--;)
            d = d.lastChild;
          a = 0;
          for (e = d.childNodes.length; a < e; ++a)
            c.push(d.childNodes[a]);
          d = b.firstChild;
          d.textContent = '';
        } else
          c.push(d.createTextNode(a));
        b.textContent = '';
        b.innerHTML = '';
        b = c;
      }
      Jb(this, b);
      v(X.createDocumentFragment()).append(this);
    } else
      Jb(this, b);
  }
  function Kb(b) {
    return b.cloneNode(!0);
  }
  function Ja(b) {
    Lb(b);
    var a = 0;
    for (b = b.childNodes || []; a < b.length; a++)
      Ja(b[a]);
  }
  function nc(b, a, c, d) {
    if (z(d))
      throw Hb('offargs');
    var e = oa(b, 'events');
    oa(b, 'handle') && (y(a) ? r(e, function (a, c) {
      $a(b, c, a);
      delete e[c];
    }) : r(a.split(' '), function (a) {
      y(c) ? ($a(b, a, e[a]), delete e[a]) : Sa(e[a] || [], c);
    }));
  }
  function Lb(b, a) {
    var c = b.ng339, d = ab[c];
    d && (a ? delete ab[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), nc(b)), delete ab[c], b.ng339 = t));
  }
  function oa(b, a, c) {
    var d = b.ng339, d = ab[d || -1];
    if (z(c))
      d || (b.ng339 = d = ++ne, d = ab[d] = {}), d[a] = c;
    else
      return d && d[a];
  }
  function Mb(b, a, c) {
    var d = oa(b, 'data'), e = z(c), f = !e && z(a), g = f && !T(a);
    d || g || oa(b, 'data', d = {});
    if (e)
      d[a] = c;
    else if (f) {
      if (g)
        return d && d[a];
      J(d, a);
    } else
      return d;
  }
  function Nb(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function nb(b, a) {
    a && b.setAttribute && r(a.split(' '), function (a) {
      b.setAttribute('class', aa((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + aa(a) + ' ', ' ')));
    });
  }
  function ob(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      r(a.split(' '), function (a) {
        a = aa(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', aa(c));
    }
  }
  function Jb(b, a) {
    if (a) {
      a = a.nodeName || !z(a.length) || Ga(a) ? [a] : a;
      for (var c = 0; c < a.length; c++)
        b.push(a[c]);
    }
  }
  function oc(b, a) {
    return pb(b, '$' + (a || 'ngController') + 'Controller');
  }
  function pb(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);
    for (a = I(a) ? a : [a]; b;) {
      for (var d = 0, e = a.length; d < e; d++)
        if ((c = v.data(b, a[d])) !== t)
          return c;
      b = b.parentNode || 11 === b.nodeType && b.host;
    }
  }
  function pc(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)
      Ja(c[a]);
    for (; b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function qc(b, a) {
    var c = qb[a.toLowerCase()];
    return c && rc[b.nodeName] && c;
  }
  function oe(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1;
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0;
      });
      c.target || (c.target = c.srcElement || X);
      if (y(c.defaultPrevented)) {
        var f = c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          f.call(c);
        };
        c.defaultPrevented = !1;
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue;
      };
      var g = ha(a[e || c.type] || []);
      r(g, function (a) {
        a.call(b, c);
      });
      8 >= Q ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented);
    };
    c.elem = b;
    return c;
  }
  function Ka(b, a) {
    var c = typeof b, d;
    'function' == c || 'object' == c && null !== b ? 'function' == typeof (d = b.$$hashKey) ? d = b.$$hashKey() : d === t && (d = b.$$hashKey = (a || hb)()) : d = b;
    return c + ':' + d;
  }
  function bb(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function () {
        return ++c;
      };
    }
    r(b, this.put, this);
  }
  function sc(b) {
    var a, c;
    'function' === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(pe, ''), c = c.match(qe), r(c[1].split(re), function (b) {
      b.replace(se, function (b, c, d) {
        a.push(d);
      });
    })), b.$inject = a) : I(b) ? (c = b.length - 1, Wa(b[c], 'fn'), a = b.slice(0, c)) : Wa(b, 'fn', !0);
    return a;
  }
  function gc(b) {
    function a(a) {
      return function (b, c) {
        if (T(b))
          r(b, $b(a));
        else
          return a(b, c);
      };
    }
    function c(a, b) {
      Da(a, 'service');
      if (P(b) || I(b))
        b = n.instantiate(b);
      if (!b.$get)
        throw cb('pget', a);
      return l[a + k] = b;
    }
    function d(a, b) {
      return c(a, { $get: b });
    }
    function e(a) {
      var b = [], c, d, f, k;
      r(a, function (a) {
        if (!h.get(a)) {
          h.put(a, !0);
          try {
            if (A(a))
              for (c = Ya(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, k = d.length; f < k; f++) {
                var g = d[f], m = n.get(g[0]);
                m[g[1]].apply(m, g[2]);
              }
            else
              P(a) ? b.push(n.invoke(a)) : I(a) ? b.push(n.invoke(a)) : Wa(a, 'module');
          } catch (l) {
            throw I(a) && (a = a[a.length - 1]), l.message && (l.stack && -1 == l.stack.indexOf(l.message)) && (l = l.message + '\n' + l.stack), cb('modulerr', a, l.stack || l.message || l);
          }
        }
      });
      return b;
    }
    function f(a, b) {
      function c(d) {
        if (a.hasOwnProperty(d)) {
          if (a[d] === g)
            throw cb('cdep', d + ' <- ' + m.join(' <- '));
          return a[d];
        }
        try {
          return m.unshift(d), a[d] = g, a[d] = b(d);
        } catch (e) {
          throw a[d] === g && delete a[d], e;
        } finally {
          m.shift();
        }
      }
      function d(a, b, e) {
        var f = [], k = sc(a), g, m, h;
        m = 0;
        for (g = k.length; m < g; m++) {
          h = k[m];
          if ('string' !== typeof h)
            throw cb('itkn', h);
          f.push(e && e.hasOwnProperty(h) ? e[h] : c(h));
        }
        I(a) && (a = a[g]);
        return a.apply(b, f);
      }
      return {
        invoke: d,
        instantiate: function (a, b) {
          var c = function () {
            }, e;
          c.prototype = (I(a) ? a[a.length - 1] : a).prototype;
          c = new c();
          e = d(a, c, b);
          return T(e) || P(e) ? e : c;
        },
        get: c,
        annotate: sc,
        has: function (b) {
          return l.hasOwnProperty(b + k) || a.hasOwnProperty(b);
        }
      };
    }
    var g = {}, k = 'Provider', m = [], h = new bb([], !0), l = {
        $provide: {
          provider: a(c),
          factory: a(d),
          service: a(function (a, b) {
            return d(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: a(function (a, b) {
            return d(a, ba(b));
          }),
          constant: a(function (a, b) {
            Da(a, 'constant');
            l[a] = b;
            p[a] = b;
          }),
          decorator: function (a, b) {
            var c = n.get(a + k), d = c.$get;
            c.$get = function () {
              var a = q.invoke(d, c);
              return q.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, n = l.$injector = f(l, function () {
        throw cb('unpr', m.join(' <- '));
      }), p = {}, q = p.$injector = f(p, function (a) {
        a = n.get(a + k);
        return q.invoke(a.$get, a);
      });
    r(e(b), function (a) {
      q.invoke(a || F);
    });
    return q;
  }
  function Ld() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (a, c, d) {
        function e(a) {
          var b = null;
          r(a, function (a) {
            b || 'a' !== M(a.nodeName) || (b = a);
          });
          return b;
        }
        function f() {
          var b = c.hash(), d;
          b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : 'top' === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
        }
        var g = a.document;
        b && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(f);
        });
        return f;
      }
    ];
  }
  function he() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (b, a) {
        return b.supported ? function (a) {
          return b(a);
        } : function (b) {
          return a(b, 0, !1);
        };
      }
    ];
  }
  function te(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, Ba.call(arguments, 1));
      } finally {
        if (s--, 0 === s)
          for (; E.length;)
            try {
              E.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function f(a, b) {
      (function fa() {
        r(u, function (a) {
          a();
        });
        B = b(fa, a);
      }());
    }
    function g() {
      w = null;
      N != k.url() && (N = k.url(), r(ca, function (a) {
        a(k.url());
      }));
    }
    var k = this, m = a[0], h = b.location, l = b.history, n = b.setTimeout, p = b.clearTimeout, q = {};
    k.isMock = !1;
    var s = 0, E = [];
    k.$$completeOutstandingRequest = e;
    k.$$incOutstandingRequestCount = function () {
      s++;
    };
    k.notifyWhenNoOutstandingRequests = function (a) {
      r(u, function (a) {
        a();
      });
      0 === s ? a() : E.push(a);
    };
    var u = [], B;
    k.addPollFn = function (a) {
      y(B) && f(100, n);
      u.push(a);
      return a;
    };
    var N = h.href, R = a.find('base'), w = null;
    k.url = function (a, c) {
      h !== b.location && (h = b.location);
      l !== b.history && (l = b.history);
      if (a) {
        if (N != a)
          return N = a, d.history ? c ? l.replaceState(null, '', a) : (l.pushState(null, '', a), R.attr('href', R.attr('href'))) : (w = a, c ? h.replace(a) : h.href = a), k;
      } else
        return w || h.href.replace(/%27/g, '\'');
    };
    var ca = [], K = !1;
    k.onUrlChange = function (a) {
      if (!K) {
        if (d.history)
          v(b).on('popstate', g);
        if (d.hashchange)
          v(b).on('hashchange', g);
        else
          k.addPollFn(g);
        K = !0;
      }
      ca.push(a);
      return a;
    };
    k.$$checkUrlChange = g;
    k.baseHref = function () {
      var a = R.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var O = {}, da = '', C = k.baseHref();
    k.cookies = function (a, b) {
      var d, e, f, k;
      if (a)
        b === t ? m.cookie = escape(a) + '=;path=' + C + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : A(b) && (d = (m.cookie = escape(a) + '=' + escape(b) + ';path=' + C).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (m.cookie !== da)
          for (da = m.cookie, d = da.split('; '), O = {}, f = 0; f < d.length; f++)
            e = d[f], k = e.indexOf('='), 0 < k && (a = unescape(e.substring(0, k)), O[a] === t && (O[a] = unescape(e.substring(k + 1))));
        return O;
      }
    };
    k.defer = function (a, b) {
      var c;
      s++;
      c = n(function () {
        delete q[c];
        e(a);
      }, b || 0);
      q[c] = !0;
      return c;
    };
    k.defer.cancel = function (a) {
      return q[a] ? (delete q[a], p(a), e(F), !0) : !1;
    };
  }
  function Nd() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new te(b, d, a, c);
      }
    ];
  }
  function Od() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw D('$cacheFactory')('iid', b);
        var g = 0, k = J({}, d, { id: b }), m = {}, h = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, p = null;
        return a[b] = {
          put: function (a, b) {
            if (h < Number.MAX_VALUE) {
              var c = l[a] || (l[a] = { key: a });
              e(c);
            }
            if (!y(b))
              return a in m || g++, m[a] = b, g > h && this.remove(p.key), b;
          },
          get: function (a) {
            if (h < Number.MAX_VALUE) {
              var b = l[a];
              if (!b)
                return;
              e(b);
            }
            return m[a];
          },
          remove: function (a) {
            if (h < Number.MAX_VALUE) {
              var b = l[a];
              if (!b)
                return;
              b == n && (n = b.p);
              b == p && (p = b.n);
              f(b.n, b.p);
              delete l[a];
            }
            delete m[a];
            g--;
          },
          removeAll: function () {
            m = {};
            g = 0;
            l = {};
            n = p = null;
          },
          destroy: function () {
            l = k = m = null;
            delete a[b];
          },
          info: function () {
            return J({}, k, { size: g });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        r(a, function (a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function (b) {
        return a[b];
      };
      return b;
    };
  }
  function de() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function ic(b, a) {
    var c = {}, d = 'Directive', e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, g = /^(on[a-z]+|formaction)$/;
    this.directive = function m(a, e) {
      Da(a, 'directive');
      A(a) ? (Db(e, 'directiveFactory'), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [
        '$injector',
        '$exceptionHandler',
        function (b, d) {
          var e = [];
          r(c[a], function (c, f) {
            try {
              var g = b.invoke(c);
              P(g) ? g = { compile: ba(g) } : !g.compile && g.link && (g.compile = ba(g.link));
              g.priority = g.priority || 0;
              g.index = f;
              g.name = g.name || a;
              g.require = g.require || g.controller && g.name;
              g.restrict = g.restrict || 'A';
              e.push(g);
            } catch (m) {
              d(m);
            }
          });
          return e;
        }
      ])), c[a].push(e)) : r(a, $b(m));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return z(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return z(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, l, n, p, q, s, E, u, B, N, R) {
        function w(a, b, c, d, e) {
          a instanceof v || (a = v(a));
          r(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = v(b).wrap('<span></span>').parent()[0]);
          });
          var f = K(a, b, a, c, d, e);
          ca(a, 'ng-scope');
          return function (b, c, d, e) {
            Db(b, 'scope');
            var g = c ? La.clone.call(a) : a;
            r(d, function (a, b) {
              g.data('$' + b + 'Controller', a);
            });
            d = 0;
            for (var m = g.length; d < m; d++) {
              var h = g[d].nodeType;
              1 !== h && 9 !== h || g.eq(d).data('$scope', b);
            }
            c && c(g, b);
            f && f(b, g, g, e);
            return g;
          };
        }
        function ca(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function K(a, b, c, d, e, f) {
          function g(a, c, d, e) {
            var f, h, l, q, n, p, s;
            f = c.length;
            var L = Array(f);
            for (q = 0; q < f; q++)
              L[q] = c[q];
            p = q = 0;
            for (n = m.length; q < n; p++)
              h = L[p], c = m[q++], f = m[q++], c ? (c.scope ? (l = a.$new(), v.data(h, '$scope', l)) : l = a, s = c.transcludeOnThisElement ? O(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? O(a, b) : null, c(f, l, h, d, s)) : f && f(a, h.childNodes, t, e);
          }
          for (var m = [], h, l, q, n, p = 0; p < a.length; p++)
            h = new Ob(), l = da(a[p], [], h, 0 === p ? d : t, e), (f = l.length ? H(l, a[p], h, b, c, null, [], [], f) : null) && f.scope && ca(h.$$element, 'ng-scope'), h = f && f.terminal || !(q = a[p].childNodes) || !q.length ? null : K(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), m.push(f, h), n = n || f || h, f = null;
          return n ? g : null;
        }
        function O(a, b, c) {
          return function (d, e, f) {
            var g = !1;
            d || (d = a.$new(), g = d.$$transcluded = !0);
            e = b(d, e, f, c);
            if (g)
              e.on('$destroy', function () {
                d.$destroy();
              });
            return e;
          };
        }
        function da(a, b, c, d, g) {
          var m = c.$attr, h;
          switch (a.nodeType) {
          case 1:
            fa(b, pa(Ma(a).toLowerCase()), 'E', d, g);
            for (var l, q, n, p = a.attributes, s = 0, E = p && p.length; s < E; s++) {
              var B = !1, N = !1;
              l = p[s];
              if (!Q || 8 <= Q || l.specified) {
                h = l.name;
                q = aa(l.value);
                l = pa(h);
                if (n = U.test(l))
                  h = mb(l.substr(6), '-');
                var u = l.replace(/(Start|End)$/, '');
                l === u + 'Start' && (B = h, N = h.substr(0, h.length - 5) + 'end', h = h.substr(0, h.length - 6));
                l = pa(h.toLowerCase());
                m[l] = h;
                if (n || !c.hasOwnProperty(l))
                  c[l] = q, qc(a, l) && (c[l] = !0);
                S(a, b, q, l);
                fa(b, l, 'A', d, g, B, N);
              }
            }
            a = a.className;
            if (A(a) && '' !== a)
              for (; h = f.exec(a);)
                l = pa(h[2]), fa(b, l, 'C', d, g) && (c[l] = aa(h[3])), a = a.substr(h.index + h[0].length);
            break;
          case 3:
            M(b, a.nodeValue);
            break;
          case 8:
            try {
              if (h = e.exec(a.nodeValue))
                l = pa(h[1]), fa(b, l, 'M', d, g) && (c[l] = aa(h[2]));
            } catch (w) {
            }
          }
          b.sort(y);
          return b;
        }
        function C(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ja('uterdir', b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return v(d);
        }
        function x(a, b, c) {
          return function (d, e, f, g, h) {
            e = C(e[0], b, c);
            return a(d, e, f, g, h);
          };
        }
        function H(a, c, d, e, f, g, m, n, p) {
          function E(a, b, c, d) {
            if (a) {
              c && (a = x(a, c, d));
              a.require = G.require;
              a.directiveName = D;
              if (K === G || G.$$isolateScope)
                a = tc(a, { isolateScope: !0 });
              m.push(a);
            }
            if (b) {
              c && (b = x(b, c, d));
              b.require = G.require;
              b.directiveName = D;
              if (K === G || G.$$isolateScope)
                b = tc(b, { isolateScope: !0 });
              n.push(b);
            }
          }
          function B(a, b, c, d) {
            var e, f = 'data', g = !1;
            if (A(b)) {
              for (; '^' == (e = b.charAt(0)) || '?' == e;)
                b = b.substr(1), '^' == e && (f = 'inheritedData'), g = g || '?' == e;
              e = null;
              d && 'data' === f && (e = d[b]);
              e = e || c[f]('$' + b + 'Controller');
              if (!e && !g)
                throw ja('ctreq', b, a);
            } else
              I(b) && (e = [], r(b, function (b) {
                e.push(B(a, b, c, d));
              }));
            return e;
          }
          function N(a, e, f, g, p) {
            function E(a, b) {
              var c;
              2 > arguments.length && (b = a, a = t);
              M && (c = da);
              return p(a, b, c);
            }
            var u, L, w, O, x, C, da = {}, rb;
            u = c === f ? d : ha(d, new Ob(v(f), d.$attr));
            L = u.$$element;
            if (K) {
              var Na = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              C = e.$new(!0);
              !H || H !== K && H !== K.$$originalDirective ? L.data('$isolateScopeNoTemplate', C) : L.data('$isolateScope', C);
              ca(L, 'ng-isolate-scope');
              r(K.scope, function (a, c) {
                var d = a.match(Na) || [], f = d[3] || c, g = '?' == d[2], d = d[1], m, l, n, p;
                C.$$isolateBindings[c] = d + f;
                switch (d) {
                case '@':
                  u.$observe(f, function (a) {
                    C[c] = a;
                  });
                  u.$$observers[f].$$scope = e;
                  u[f] && (C[c] = b(u[f])(e));
                  break;
                case '=':
                  if (g && !u[f])
                    break;
                  l = q(u[f]);
                  p = l.literal ? Aa : function (a, b) {
                    return a === b || a !== a && b !== b;
                  };
                  n = l.assign || function () {
                    m = C[c] = l(e);
                    throw ja('nonassign', u[f], K.name);
                  };
                  m = C[c] = l(e);
                  C.$watch(function () {
                    var a = l(e);
                    p(a, C[c]) || (p(a, m) ? n(e, a = C[c]) : C[c] = a);
                    return m = a;
                  }, null, l.literal);
                  break;
                case '&':
                  l = q(u[f]);
                  C[c] = function (a) {
                    return l(e, a);
                  };
                  break;
                default:
                  throw ja('iscp', K.name, c, a);
                }
              });
            }
            rb = p && E;
            R && r(R, function (a) {
              var b = {
                  $scope: a === K || a.$$isolateScope ? C : e,
                  $element: L,
                  $attrs: u,
                  $transclude: rb
                }, c;
              x = a.controller;
              '@' == x && (x = u[a.name]);
              c = s(x, b);
              da[a.name] = c;
              M || L.data('$' + a.name + 'Controller', c);
              a.controllerAs && (b.$scope[a.controllerAs] = c);
            });
            g = 0;
            for (w = m.length; g < w; g++)
              try {
                O = m[g], O(O.isolateScope ? C : e, L, u, O.require && B(O.directiveName, O.require, L, da), rb);
              } catch (G) {
                l(G, ia(L));
              }
            g = e;
            K && (K.template || null === K.templateUrl) && (g = C);
            a && a(g, f.childNodes, t, p);
            for (g = n.length - 1; 0 <= g; g--)
              try {
                O = n[g], O(O.isolateScope ? C : e, L, u, O.require && B(O.directiveName, O.require, L, da), rb);
              } catch (z) {
                l(z, ia(L));
              }
          }
          p = p || {};
          for (var u = -Number.MAX_VALUE, O, R = p.controllerDirectives, K = p.newIsolateScopeDirective, H = p.templateDirective, fa = p.nonTlbTranscludeDirective, y = !1, J = !1, M = p.hasElementTranscludeDirective, Z = d.$$element = v(c), G, D, V, S = e, Q, Fa = 0, qa = a.length; Fa < qa; Fa++) {
            G = a[Fa];
            var U = G.$$start, Y = G.$$end;
            U && (Z = C(c, U, Y));
            V = t;
            if (u > G.priority)
              break;
            if (V = G.scope)
              O = O || G, G.templateUrl || (db('new/isolated scope', K, G, Z), T(V) && (K = G));
            D = G.name;
            !G.templateUrl && G.controller && (V = G.controller, R = R || {}, db('\'' + D + '\' controller', R[D], G, Z), R[D] = G);
            if (V = G.transclude)
              y = !0, G.$$tlb || (db('transclusion', fa, G, Z), fa = G), 'element' == V ? (M = !0, u = G.priority, V = Z, Z = d.$$element = v(X.createComment(' ' + D + ': ' + d[D] + ' ')), c = Z[0], Na(f, Ba.call(V, 0), c), S = w(V, e, u, g && g.name, { nonTlbTranscludeDirective: fa })) : (V = v(Kb(c)).contents(), Z.empty(), S = w(V, e));
            if (G.template)
              if (J = !0, db('template', H, G, Z), H = G, V = P(G.template) ? G.template(Z, d) : G.template, V = W(V), G.replace) {
                g = G;
                V = Ib.test(V) ? v(aa(V)) : [];
                c = V[0];
                if (1 != V.length || 1 !== c.nodeType)
                  throw ja('tplrt', D, '');
                Na(f, Z, c);
                qa = { $attr: {} };
                V = da(c, [], qa);
                var $ = a.splice(Fa + 1, a.length - (Fa + 1));
                K && z(V);
                a = a.concat(V).concat($);
                F(d, qa);
                qa = a.length;
              } else
                Z.html(V);
            if (G.templateUrl)
              J = !0, db('template', H, G, Z), H = G, G.replace && (g = G), N = ue(a.splice(Fa, a.length - Fa), Z, d, f, y && S, m, n, {
                controllerDirectives: R,
                newIsolateScopeDirective: K,
                templateDirective: H,
                nonTlbTranscludeDirective: fa
              }), qa = a.length;
            else if (G.compile)
              try {
                Q = G.compile(Z, d, S), P(Q) ? E(null, Q, U, Y) : Q && E(Q.pre, Q.post, U, Y);
              } catch (ve) {
                l(ve, ia(Z));
              }
            G.terminal && (N.terminal = !0, u = Math.max(u, G.priority));
          }
          N.scope = O && !0 === O.scope;
          N.transcludeOnThisElement = y;
          N.templateOnThisElement = J;
          N.transclude = S;
          p.hasElementTranscludeDirective = M;
          return N;
        }
        function z(a) {
          for (var b = 0, c = a.length; b < c; b++)
            a[b] = bc(a[b], { $$isolateScope: !0 });
        }
        function fa(b, e, f, g, h, q, n) {
          if (e === h)
            return null;
          h = null;
          if (c.hasOwnProperty(e)) {
            var p;
            e = a.get(e + d);
            for (var s = 0, u = e.length; s < u; s++)
              try {
                p = e[s], (g === t || g > p.priority) && -1 != p.restrict.indexOf(f) && (q && (p = bc(p, {
                  $$start: q,
                  $$end: n
                })), b.push(p), h = p);
              } catch (E) {
                l(E);
              }
          }
          return h;
        }
        function F(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          r(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          r(b, function (b, f) {
            'class' == f ? (ca(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
          });
        }
        function ue(a, b, c, d, e, f, g, h) {
          var m = [], l, q, s = b[0], u = a.shift(), E = J({}, u, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: u
            }), N = P(u.templateUrl) ? u.templateUrl(b, c) : u.templateUrl;
          b.empty();
          n.get(B.getTrustedResourceUrl(N), { cache: p }).success(function (n) {
            var p, B;
            n = W(n);
            if (u.replace) {
              n = Ib.test(n) ? v(aa(n)) : [];
              p = n[0];
              if (1 != n.length || 1 !== p.nodeType)
                throw ja('tplrt', u.name, N);
              n = { $attr: {} };
              Na(d, b, p);
              var w = da(p, [], n);
              T(u.scope) && z(w);
              a = w.concat(a);
              F(c, n);
            } else
              p = s, b.html(n);
            a.unshift(E);
            l = H(a, p, c, e, b, u, f, g, h);
            r(d, function (a, c) {
              a == p && (d[c] = b[0]);
            });
            for (q = K(b[0].childNodes, e); m.length;) {
              n = m.shift();
              B = m.shift();
              var R = m.shift(), x = m.shift(), w = b[0];
              if (B !== s) {
                var C = B.className;
                h.hasElementTranscludeDirective && u.replace || (w = Kb(p));
                Na(R, v(B), w);
                ca(v(w), C);
              }
              B = l.transcludeOnThisElement ? O(n, l.transclude, x) : x;
              l(q, n, w, d, B);
            }
            m = null;
          }).error(function (a, b, c, d) {
            throw ja('tpload', d.url);
          });
          return function (a, b, c, d, e) {
            a = e;
            m ? (m.push(b), m.push(c), m.push(d), m.push(a)) : (l.transcludeOnThisElement && (a = O(b, l.transclude, e)), l(q, b, c, d, a));
          };
        }
        function y(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function db(a, b, c, d) {
          if (b)
            throw ja('multidir', b.name, c.name, a, ia(d));
        }
        function M(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: function (a) {
              var b = a.parent().length;
              b && ca(a.parent(), 'ng-binding');
              return function (a, c) {
                var e = c.parent(), f = e.data('$binding') || [];
                f.push(d);
                e.data('$binding', f);
                b || ca(e, 'ng-binding');
                a.$watch(d, function (a) {
                  c[0].nodeValue = a;
                });
              };
            }
          });
        }
        function D(a, b) {
          if ('srcdoc' == b)
            return B.HTML;
          var c = Ma(a);
          if ('xlinkHref' == b || 'FORM' == c && 'action' == b || 'IMG' != c && ('src' == b || 'ngSrc' == b))
            return B.RESOURCE_URL;
        }
        function S(a, c, d, e) {
          var f = b(d, !0);
          if (f) {
            if ('multiple' === e && 'SELECT' === Ma(a))
              throw ja('selmulti', ia(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (c, d, m) {
                    d = m.$$observers || (m.$$observers = {});
                    if (g.test(e))
                      throw ja('nodomevents');
                    if (f = b(m[e], !0, D(a, e)))
                      m[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (m.$$observers && m.$$observers[e].$$scope || c).$watch(f, function (a, b) {
                        'class' === e && a != b ? m.$updateClass(a, b) : m.$set(e, a);
                      });
                  }
                };
              }
            });
          }
        }
        function Na(a, b, c) {
          var d = b[0], e = b.length, f = d.parentNode, g, m;
          if (a)
            for (g = 0, m = a.length; g < m; g++)
              if (a[g] == d) {
                a[g++] = c;
                m = g + e - 1;
                for (var h = a.length; g < h; g++, m++)
                  m < h ? a[g] = a[m] : delete a[g];
                a.length -= e - 1;
                break;
              }
          f && f.replaceChild(c, d);
          a = X.createDocumentFragment();
          a.appendChild(d);
          c[v.expando] = d[v.expando];
          d = 1;
          for (e = b.length; d < e; d++)
            f = b[d], v(f).remove(), a.appendChild(f), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function tc(a, b) {
          return J(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        var Ob = function (a, b) {
          this.$$element = a;
          this.$attr = b || {};
        };
        Ob.prototype = {
          $normalize: pa,
          $addClass: function (a) {
            a && 0 < a.length && N.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && N.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = uc(a, b), d = uc(b, a);
            0 === c.length ? N.removeClass(this.$$element, d) : 0 === d.length ? N.addClass(this.$$element, c) : N.setClass(this.$$element, c, d);
          },
          $set: function (a, b, c, d) {
            var e = qc(this.$$element[0], a);
            e && (this.$$element.prop(a, b), d = e);
            this[a] = b;
            d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = mb(a, '-'));
            e = Ma(this.$$element);
            if ('A' === e && 'href' === a || 'IMG' === e && 'src' === a)
              this[a] = b = R(b, 'src' === a);
            !1 !== c && (null === b || b === t ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
            (c = this.$$observers) && r(c[a], function (a) {
              try {
                a(b);
              } catch (c) {
                l(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            e.push(b);
            E.$evalAsync(function () {
              e.$$inter || b(c[a]);
            });
            return b;
          }
        };
        var qa = b.startSymbol(), Z = b.endSymbol(), W = '{{' == qa || '}}' == Z ? Qa : function (a) {
            return a.replace(/\{\{/g, qa).replace(/}}/g, Z);
          }, U = /^ngAttr[A-Z]/;
        return w;
      }
    ];
  }
  function pa(b) {
    return Za(b.replace(we, ''));
  }
  function uc(b, a) {
    var c = '', d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
    a:
      for (; f < d.length; f++) {
        for (var g = d[f], k = 0; k < e.length; k++)
          if (g == e[k])
            continue a;
        c += (0 < c.length ? ' ' : '') + g;
      }
    return c;
  }
  function Pd() {
    var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, d) {
      Da(a, 'controller');
      T(a) ? J(b, a) : b[a] = d;
    };
    this.$get = [
      '$injector',
      '$window',
      function (c, d) {
        return function (e, f) {
          var g, k, m;
          A(e) && (g = e.match(a), k = g[1], m = g[3], e = b.hasOwnProperty(k) ? b[k] : hc(f.$scope, k, !0) || hc(d, k, !0), Wa(e, k, !0));
          g = c.instantiate(e, f);
          if (m) {
            if (!f || 'object' !== typeof f.$scope)
              throw D('$controller')('noscp', k || e.name, m);
            f.$scope[m] = g;
          }
          return g;
        };
      }
    ];
  }
  function Qd() {
    this.$get = [
      '$window',
      function (b) {
        return v(b.document);
      }
    ];
  }
  function Rd() {
    this.$get = [
      '$log',
      function (b) {
        return function (a, c) {
          b.error.apply(b, arguments);
        };
      }
    ];
  }
  function vc(b) {
    var a = {}, c, d, e;
    if (!b)
      return a;
    r(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = M(aa(b.substr(0, e)));
      d = aa(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + ', ' + d : d);
    });
    return a;
  }
  function wc(b) {
    var a = T(b) ? b : t;
    return function (c) {
      a || (a = vc(b));
      return c ? a[M(c)] || null : a;
    };
  }
  function xc(b, a, c) {
    if (P(c))
      return c(b, a);
    r(c, function (c) {
      b = c(b, a);
    });
    return b;
  }
  function Ud() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = { 'Content-Type': 'application/json;charset=utf-8' }, e = this.defaults = {
        transformResponse: [function (d) {
            A(d) && (d = d.replace(c, ''), b.test(d) && a.test(d) && (d = cc(d)));
            return d;
          }],
        transformRequest: [function (a) {
            return T(a) && '[object File]' !== za.call(a) && '[object Blob]' !== za.call(a) ? na(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ha(d),
          put: ha(d),
          patch: ha(d)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, f = this.interceptors = [], g = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, c, d, n, p) {
        function q(a) {
          function b(a) {
            var d = J({}, a, { data: xc(a.data, a.headers, c.transformResponse) });
            return 200 <= a.status && 300 > a.status ? d : n.reject(d);
          }
          var c = {
              method: 'get',
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse
            }, d = function (a) {
              var b = e.headers, c = J({}, a.headers), d, f, b = J({}, b.common, b[M(a.method)]);
              a:
                for (d in b) {
                  a = M(d);
                  for (f in c)
                    if (M(f) === a)
                      continue a;
                  c[d] = b[d];
                }
              (function (a) {
                var b;
                r(a, function (c, d) {
                  P(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                });
              }(c));
              return c;
            }(a);
          J(c, a);
          c.headers = d;
          c.method = Ia(c.method);
          var f = [
              function (a) {
                d = a.headers;
                var c = xc(a.data, wc(d), a.transformRequest);
                y(c) && r(d, function (a, b) {
                  'content-type' === M(b) && delete d[b];
                });
                y(a.withCredentials) && !y(e.withCredentials) && (a.withCredentials = e.withCredentials);
                return s(a, c, d).then(b, b);
              },
              t
            ], g = n.when(c);
          for (r(B, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var m = f.shift(), g = g.then(a, m);
          }
          g.success = function (a) {
            g.then(function (b) {
              a(b.data, b.status, b.headers, c);
            });
            return g;
          };
          g.error = function (a) {
            g.then(null, function (b) {
              a(b.data, b.status, b.headers, c);
            });
            return g;
          };
          return g;
        }
        function s(c, f, g) {
          function h(a, b, c, e) {
            x && (200 <= a && 300 > a ? x.put(v, [
              a,
              b,
              vc(c),
              e
            ]) : x.remove(v));
            p(b, a, c, e);
            d.$$phase || d.$apply();
          }
          function p(a, b, d, e) {
            b = Math.max(b, 0);
            (200 <= b && 300 > b ? B.resolve : B.reject)({
              data: a,
              status: b,
              headers: wc(d),
              config: c,
              statusText: e
            });
          }
          function s() {
            var a = Ra(q.pendingRequests, c);
            -1 !== a && q.pendingRequests.splice(a, 1);
          }
          var B = n.defer(), r = B.promise, x, H, v = E(c.url, c.params);
          q.pendingRequests.push(c);
          r.then(s, s);
          !c.cache && !e.cache || (!1 === c.cache || 'GET' !== c.method && 'JSONP' !== c.method) || (x = T(c.cache) ? c.cache : T(e.cache) ? e.cache : u);
          if (x)
            if (H = x.get(v), z(H)) {
              if (H && P(H.then))
                return H.then(s, s), H;
              I(H) ? p(H[1], H[0], ha(H[2]), H[3]) : p(H, 200, {}, 'OK');
            } else
              x.put(v, r);
          y(H) && ((H = Pb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : t) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = H), a(c.method, v, f, h, g, c.timeout, c.withCredentials, c.responseType));
          return r;
        }
        function E(a, b) {
          if (!b)
            return a;
          var c = [];
          Tc(b, function (a, b) {
            null === a || y(a) || (I(a) || (a = [a]), r(a, function (a) {
              T(a) && (a = ta(a) ? a.toISOString() : na(a));
              c.push(Ca(b) + '=' + Ca(a));
            }));
          });
          0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
          return a;
        }
        var u = c('$http'), B = [];
        r(f, function (a) {
          B.unshift(A(a) ? p.get(a) : p.invoke(a));
        });
        r(g, function (a, b) {
          var c = A(a) ? p.get(a) : p.invoke(a);
          B.splice(b, 0, {
            response: function (a) {
              return c(n.when(a));
            },
            responseError: function (a) {
              return c(n.reject(a));
            }
          });
        });
        q.pendingRequests = [];
        (function (a) {
          r(arguments, function (a) {
            q[a] = function (b, c) {
              return q(J(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          r(arguments, function (a) {
            q[a] = function (b, c, d) {
              return q(J(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put'));
        q.defaults = e;
        return q;
      }
    ];
  }
  function xe(b) {
    if (8 >= Q && (!b.match(/^(get|post|head|put|delete|options)$/i) || !W.XMLHttpRequest))
      return new W.ActiveXObject('Microsoft.XMLHTTP');
    if (W.XMLHttpRequest)
      return new W.XMLHttpRequest();
    throw D('$httpBackend')('noxhr');
  }
  function Vd() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return ye(b, xe, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function ye(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement('script'), g = null;
      f.type = 'text/javascript';
      f.src = a;
      f.async = !0;
      g = function (a) {
        $a(f, 'load', g);
        $a(f, 'error', g);
        e.body.removeChild(f);
        f = null;
        var k = -1, s = 'unknown';
        a && ('load' !== a.type || d[b].called || (a = { type: 'error' }), s = a.type, k = 'error' === a.type ? 404 : 200);
        c && c(k, s);
      };
      sb(f, 'load', g);
      sb(f, 'error', g);
      8 >= Q && (f.onreadystatechange = function () {
        A(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({ type: 'load' }));
      });
      e.body.appendChild(f);
      return g;
    }
    var g = -1;
    return function (e, m, h, l, n, p, q, s) {
      function E() {
        B = g;
        R && R();
        w && w.abort();
      }
      function u(a, d, e, f, g) {
        K && c.cancel(K);
        R = w = null;
        0 === d && (d = e ? 200 : 'file' == ua(m).protocol ? 404 : 0);
        a(1223 === d ? 204 : d, e, f, g || '');
        b.$$completeOutstandingRequest(F);
      }
      var B;
      b.$$incOutstandingRequestCount();
      m = m || b.url();
      if ('jsonp' == M(e)) {
        var N = '_' + (d.counter++).toString(36);
        d[N] = function (a) {
          d[N].data = a;
          d[N].called = !0;
        };
        var R = f(m.replace('JSON_CALLBACK', 'angular.callbacks.' + N), N, function (a, b) {
            u(l, a, d[N].data, '', b);
            d[N] = F;
          });
      } else {
        var w = a(e);
        w.open(e, m, !0);
        r(n, function (a, b) {
          z(a) && w.setRequestHeader(b, a);
        });
        w.onreadystatechange = function () {
          if (w && 4 == w.readyState) {
            var a = null, b = null, c = '';
            B !== g && (a = w.getAllResponseHeaders(), b = 'response' in w ? w.response : w.responseText);
            B === g && 10 > Q || (c = w.statusText);
            u(l, B || w.status, b, a, c);
          }
        };
        q && (w.withCredentials = !0);
        if (s)
          try {
            w.responseType = s;
          } catch (ca) {
            if ('json' !== s)
              throw ca;
          }
        w.send(h || null);
      }
      if (0 < p)
        var K = c(E, p);
      else
        p && P(p.then) && p.then(E);
    };
  }
  function Sd() {
    var b = '{{', a = '}}';
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function f(f, h, l) {
          for (var n, p, q = 0, s = [], E = f.length, u = !1, B = []; q < E;)
            -1 != (n = f.indexOf(b, q)) && -1 != (p = f.indexOf(a, n + g)) ? (q != n && s.push(f.substring(q, n)), s.push(q = c(u = f.substring(n + g, p))), q.exp = u, q = p + k, u = !0) : (q != E && s.push(f.substring(q)), q = E);
          (E = s.length) || (s.push(''), E = 1);
          if (l && 1 < s.length)
            throw yc('noconcat', f);
          if (!h || u)
            return B.length = E, q = function (a) {
              try {
                for (var b = 0, c = E, g; b < c; b++) {
                  if ('function' == typeof (g = s[b]))
                    if (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), null == g)
                      g = '';
                    else
                      switch (typeof g) {
                      case 'string':
                        break;
                      case 'number':
                        g = '' + g;
                        break;
                      default:
                        g = na(g);
                      }
                  B[b] = g;
                }
                return B.join('');
              } catch (k) {
                a = yc('interr', f, k.toString()), d(a);
              }
            }, q.exp = f, q.parts = s, q;
        }
        var g = b.length, k = a.length;
        f.startSymbol = function () {
          return b;
        };
        f.endSymbol = function () {
          return a;
        };
        return f;
      }
    ];
  }
  function Td() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function (b, a, c) {
        function d(d, g, k, m) {
          var h = a.setInterval, l = a.clearInterval, n = c.defer(), p = n.promise, q = 0, s = z(m) && !m;
          k = z(k) ? k : 0;
          p.then(null, null, d);
          p.$$intervalId = h(function () {
            n.notify(q++);
            0 < k && q >= k && (n.resolve(q), l(p.$$intervalId), delete e[p.$$intervalId]);
            s || b.$apply();
          }, g);
          e[p.$$intervalId] = n;
          return p;
        }
        var e = {};
        d.cancel = function (b) {
          return b && b.$$intervalId in e ? (e[b.$$intervalId].reject('canceled'), a.clearInterval(b.$$intervalId), delete e[b.$$intervalId], !0) : !1;
        };
        return d;
      }
    ];
  }
  function bd() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (b) {
          return 1 === b ? 'one' : 'other';
        }
      };
    };
  }
  function Qb(b) {
    b = b.split('/');
    for (var a = b.length; a--;)
      b[a] = lb(b[a]);
    return b.join('/');
  }
  function zc(b, a, c) {
    b = ua(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = U(b.port) || ze[b.protocol] || null;
  }
  function Ac(b, a, c) {
    var d = '/' !== b.charAt(0);
    d && (b = '/' + b);
    b = ua(b, c);
    a.$$path = decodeURIComponent(d && '/' === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = ec(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function ra(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function eb(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function Rb(b) {
    return b.substr(0, eb(b).lastIndexOf('/') + 1);
  }
  function Bc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = Rb(b);
    zc(b, this, b);
    this.$$parse = function (a) {
      var e = ra(c, a);
      if (!A(e))
        throw Sb('ipthprfx', a, c);
      Ac(e, this, b);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Cb(this.$$search), b = this.$$hash ? '#' + lb(this.$$hash) : '';
      this.$$url = Qb(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$rewrite = function (d) {
      var e;
      if ((e = ra(b, d)) !== t)
        return d = e, (e = ra(a, e)) !== t ? c + (ra('/', e) || e) : b + d;
      if ((e = ra(c, d)) !== t)
        return c + e;
      if (c == d + '/')
        return c;
    };
  }
  function Tb(b, a) {
    var c = Rb(b);
    zc(b, this, b);
    this.$$parse = function (d) {
      var e = ra(b, d) || ra(c, d), e = '#' == e.charAt(0) ? ra(a, e) : this.$$html5 ? e : '';
      if (!A(e))
        throw Sb('ihshprfx', d, a);
      Ac(e, this, b);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ? '#' + lb(this.$$hash) : '';
      this.$$url = Qb(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$rewrite = function (a) {
      if (eb(b) == eb(a))
        return a;
    };
  }
  function Ub(b, a) {
    this.$$html5 = !0;
    Tb.apply(this, arguments);
    var c = Rb(b);
    this.$$rewrite = function (d) {
      var e;
      if (b == eb(d))
        return d;
      if (e = ra(c, d))
        return b + a + e;
      if (c === d + '/')
        return c;
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ? '#' + lb(this.$$hash) : '';
      this.$$url = Qb(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + a + this.$$url;
    };
  }
  function tb(b) {
    return function () {
      return this[b];
    };
  }
  function Cc(b, a) {
    return function (c) {
      if (y(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function Wd() {
    var b = '', a = !1;
    this.hashPrefix = function (a) {
      return z(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return z(b) ? (a = b, this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (c, d, e, f) {
        function g(a) {
          c.$broadcast('$locationChangeSuccess', k.absUrl(), a);
        }
        var k, m, h = d.baseHref(), l = d.url(), n;
        a ? (n = l.substring(0, l.indexOf('/', l.indexOf('//') + 2)) + (h || '/'), m = e.history ? Bc : Ub) : (n = eb(l), m = Tb);
        k = new m(n, '#' + b);
        k.$$parse(k.$$rewrite(l));
        var p = /^\s*(javascript|mailto):/i;
        f.on('click', function (a) {
          if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
            for (var e = v(a.target); 'a' !== M(e[0].nodeName);)
              if (e[0] === f[0] || !(e = e.parent())[0])
                return;
            var g = e.prop('href');
            T(g) && '[object SVGAnimatedString]' === g.toString() && (g = ua(g.animVal).href);
            if (!p.test(g)) {
              if (m === Ub) {
                var h = e.attr('href') || e.attr('xlink:href');
                if (h && 0 > h.indexOf('://'))
                  if (g = '#' + b, '/' == h[0])
                    g = n + g + h;
                  else if ('#' == h[0])
                    g = n + g + (k.path() || '/') + h;
                  else {
                    var l = k.path().split('/'), h = h.split('/');
                    2 !== l.length || l[1] || (l.length = 1);
                    for (var q = 0; q < h.length; q++)
                      '.' != h[q] && ('..' == h[q] ? l.pop() : h[q].length && l.push(h[q]));
                    g = n + g + l.join('/');
                  }
              }
              l = k.$$rewrite(g);
              g && (!e.attr('target') && l && !a.isDefaultPrevented()) && (a.preventDefault(), l != d.url() && (k.$$parse(l), c.$apply(), W.angular['ff-684208-preventDefault'] = !0));
            }
          }
        });
        k.absUrl() != l && d.url(k.absUrl(), !0);
        d.onUrlChange(function (a) {
          k.absUrl() != a && (c.$evalAsync(function () {
            var b = k.absUrl();
            k.$$parse(a);
            c.$broadcast('$locationChangeStart', a, b).defaultPrevented ? (k.$$parse(b), d.url(b)) : g(b);
          }), c.$$phase || c.$digest());
        });
        var q = 0;
        c.$watch(function () {
          var a = d.url(), b = k.$$replace;
          q && a == k.absUrl() || (q++, c.$evalAsync(function () {
            c.$broadcast('$locationChangeStart', k.absUrl(), a).defaultPrevented ? k.$$parse(a) : (d.url(k.absUrl(), b), g(a));
          }));
          k.$$replace = !1;
          return q;
        });
        return k;
      }
    ];
  }
  function Xd() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return z(a) ? (b = a, this) : b;
    };
    this.$get = [
      '$window',
      function (c) {
        function d(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || F;
          a = !1;
          try {
            a = !!e.apply;
          } catch (m) {
          }
          return a ? function () {
            var a = [];
            r(arguments, function (b) {
              a.push(d(b));
            });
            return e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              b && c.apply(a, arguments);
            };
          }()
        };
      }
    ];
  }
  function ka(b, a) {
    if ('__defineGetter__' === b || '__defineSetter__' === b || '__lookupGetter__' === b || '__lookupSetter__' === b || '__proto__' === b)
      throw la('isecfld', a);
    return b;
  }
  function va(b, a) {
    if (b) {
      if (b.constructor === b)
        throw la('isecfn', a);
      if (b.document && b.location && b.alert && b.setInterval)
        throw la('isecwindow', a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))
        throw la('isecdom', a);
      if (b === Object)
        throw la('isecobj', a);
    }
    return b;
  }
  function ub(b, a, c, d, e) {
    va(b, d);
    e = e || {};
    a = a.split('.');
    for (var f, g = 0; 1 < a.length; g++) {
      f = ka(a.shift(), d);
      var k = va(b[f], d);
      k || (k = {}, b[f] = k);
      b = k;
      b.then && e.unwrapPromises && (wa(d), '$$v' in b || function (a) {
        a.then(function (b) {
          a.$$v = b;
        });
      }(b), b.$$v === t && (b.$$v = {}), b = b.$$v);
    }
    f = ka(a.shift(), d);
    va(b[f], d);
    return b[f] = c;
  }
  function Dc(b, a, c, d, e, f, g) {
    ka(b, f);
    ka(a, f);
    ka(c, f);
    ka(d, f);
    ka(e, f);
    return g.unwrapPromises ? function (g, m) {
      var h = m && m.hasOwnProperty(b) ? m : g, l;
      if (null == h)
        return h;
      (h = h[b]) && h.then && (wa(f), '$$v' in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a;
      })), h = h.$$v);
      if (!a)
        return h;
      if (null == h)
        return t;
      (h = h[a]) && h.then && (wa(f), '$$v' in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a;
      })), h = h.$$v);
      if (!c)
        return h;
      if (null == h)
        return t;
      (h = h[c]) && h.then && (wa(f), '$$v' in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a;
      })), h = h.$$v);
      if (!d)
        return h;
      if (null == h)
        return t;
      (h = h[d]) && h.then && (wa(f), '$$v' in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a;
      })), h = h.$$v);
      if (!e)
        return h;
      if (null == h)
        return t;
      (h = h[e]) && h.then && (wa(f), '$$v' in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a;
      })), h = h.$$v);
      return h;
    } : function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;
      if (null == h)
        return h;
      h = h[b];
      if (!a)
        return h;
      if (null == h)
        return t;
      h = h[a];
      if (!c)
        return h;
      if (null == h)
        return t;
      h = h[c];
      if (!d)
        return h;
      if (null == h)
        return t;
      h = h[d];
      return e ? null == h ? t : h = h[e] : h;
    };
  }
  function Ec(b, a, c) {
    if (Vb.hasOwnProperty(b))
      return Vb[b];
    var d = b.split('.'), e = d.length, f;
    if (a.csp)
      f = 6 > e ? Dc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, f) {
        var g = 0, k;
        do
          k = Dc(d[g++], d[g++], d[g++], d[g++], d[g++], c, a)(b, f), f = t, b = k;
        while (g < e);
        return k;
      };
    else {
      var g = 'var p;\n';
      r(d, function (b, d) {
        ka(b, c);
        g += 'if(s == null) return undefined;\ns=' + (d ? 's' : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, '\\$1') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : '');
      });
      var g = g + 'return s;', k = new Function('s', 'k', 'pw', g);
      k.toString = ba(g);
      f = a.unwrapPromises ? function (a, b) {
        return k(a, b, wa);
      } : k;
    }
    'hasOwnProperty' !== b && (Vb[b] = f);
    return f;
  }
  function Yd() {
    var b = {}, a = {
        csp: !1,
        unwrapPromises: !1,
        logPromiseWarnings: !0
      };
    this.unwrapPromises = function (b) {
      return z(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises;
    };
    this.logPromiseWarnings = function (b) {
      return z(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings;
    };
    this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function (c, d, e) {
        a.csp = d.csp;
        wa = function (b) {
          a.logPromiseWarnings && !Fc.hasOwnProperty(b) && (Fc[b] = !0, e.warn('[$parse] Promise found in the expression `' + b + '`. Automatic unwrapping of promises in Angular expressions is deprecated.'));
        };
        return function (d) {
          var e;
          switch (typeof d) {
          case 'string':
            if (b.hasOwnProperty(d))
              return b[d];
            e = new Wb(a);
            e = new fb(e, c, a).parse(d);
            'hasOwnProperty' !== d && (b[d] = e);
            return e;
          case 'function':
            return d;
          default:
            return F;
          }
        };
      }
    ];
  }
  function $d() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return Ae(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function Ae(b, a) {
    function c(a) {
      return a;
    }
    function d(a) {
      return g(a);
    }
    var e = function () {
        var g = [], h, l;
        return l = {
          resolve: function (a) {
            if (g) {
              var c = g;
              g = t;
              h = f(a);
              c.length && b(function () {
                for (var a, b = 0, d = c.length; b < d; b++)
                  a = c[b], h.then(a[0], a[1], a[2]);
              });
            }
          },
          reject: function (a) {
            l.resolve(k(a));
          },
          notify: function (a) {
            if (g) {
              var c = g;
              g.length && b(function () {
                for (var b, d = 0, e = c.length; d < e; d++)
                  b = c[d], b[2](a);
              });
            }
          },
          promise: {
            then: function (b, f, k) {
              var l = e(), E = function (d) {
                  try {
                    l.resolve((P(b) ? b : c)(d));
                  } catch (e) {
                    l.reject(e), a(e);
                  }
                }, u = function (b) {
                  try {
                    l.resolve((P(f) ? f : d)(b));
                  } catch (c) {
                    l.reject(c), a(c);
                  }
                }, B = function (b) {
                  try {
                    l.notify((P(k) ? k : c)(b));
                  } catch (d) {
                    a(d);
                  }
                };
              g ? g.push([
                E,
                u,
                B
              ]) : h.then(E, u, B);
              return l.promise;
            },
            'catch': function (a) {
              return this.then(null, a);
            },
            'finally': function (a) {
              function b(a, c) {
                var d = e();
                c ? d.resolve(a) : d.reject(a);
                return d.promise;
              }
              function d(e, f) {
                var g = null;
                try {
                  g = (a || c)();
                } catch (k) {
                  return b(k, !1);
                }
                return g && P(g.then) ? g.then(function () {
                  return b(e, f);
                }, function (a) {
                  return b(a, !1);
                }) : b(e, f);
              }
              return this.then(function (a) {
                return d(a, !0);
              }, function (a) {
                return d(a, !1);
              });
            }
          }
        };
      }, f = function (a) {
        return a && P(a.then) ? a : {
          then: function (c) {
            var d = e();
            b(function () {
              d.resolve(c(a));
            });
            return d.promise;
          }
        };
      }, g = function (a) {
        var b = e();
        b.reject(a);
        return b.promise;
      }, k = function (c) {
        return {
          then: function (f, g) {
            var k = e();
            b(function () {
              try {
                k.resolve((P(g) ? g : d)(c));
              } catch (b) {
                k.reject(b), a(b);
              }
            });
            return k.promise;
          }
        };
      };
    return {
      defer: e,
      reject: g,
      when: function (k, h, l, n) {
        var p = e(), q, s = function (b) {
            try {
              return (P(h) ? h : c)(b);
            } catch (d) {
              return a(d), g(d);
            }
          }, E = function (b) {
            try {
              return (P(l) ? l : d)(b);
            } catch (c) {
              return a(c), g(c);
            }
          }, u = function (b) {
            try {
              return (P(n) ? n : c)(b);
            } catch (d) {
              a(d);
            }
          };
        b(function () {
          f(k).then(function (a) {
            q || (q = !0, p.resolve(f(a).then(s, E, u)));
          }, function (a) {
            q || (q = !0, p.resolve(E(a)));
          }, function (a) {
            q || p.notify(u(a));
          });
        });
        return p.promise;
      },
      all: function (a) {
        var b = e(), c = 0, d = I(a) ? [] : {};
        r(a, function (a, e) {
          c++;
          f(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a);
          });
        });
        0 === c && b.resolve(d);
        return b.promise;
      }
    };
  }
  function ge() {
    this.$get = [
      '$window',
      '$timeout',
      function (b, a) {
        var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
            var b = c(a);
            return function () {
              d(b);
            };
          } : function (b) {
            var c = a(b, 16.66, !1);
            return function () {
              a.cancel(c);
            };
          };
        f.supported = e;
        return f;
      }
    ];
  }
  function Zd() {
    var b = 10, a = D('$rootScope'), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (d, e, f, g) {
        function k() {
          this.$id = hb();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = !1;
          this.$$asyncQueue = [];
          this.$$postDigestQueue = [];
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = {};
        }
        function m(b) {
          if (p.$$phase)
            throw a('inprog', p.$$phase);
          p.$$phase = b;
        }
        function h(a, b) {
          var c = f(a);
          Wa(c, b);
          return c;
        }
        function l(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function n() {
        }
        k.prototype = {
          constructor: k,
          $new: function (a) {
            a ? (a = new k(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
              this.$$listeners = {};
              this.$$listenerCount = {};
              this.$id = hb();
              this.$$childScopeClass = null;
            }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass());
            a['this'] = a;
            a.$parent = this;
            a.$$prevSibling = this.$$childTail;
            this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
            return a;
          },
          $watch: function (a, b, d) {
            var e = h(a, 'watch'), f = this.$$watchers, g = {
                fn: b,
                last: n,
                get: e,
                exp: a,
                eq: !!d
              };
            c = null;
            if (!P(b)) {
              var k = h(b || F, 'listener');
              g.fn = function (a, b, c) {
                k(c);
              };
            }
            if ('string' == typeof a && e.constant) {
              var l = g.fn;
              g.fn = function (a, b, c) {
                l.call(this, a, b, c);
                Sa(f, g);
              };
            }
            f || (f = this.$$watchers = []);
            f.unshift(g);
            return function () {
              Sa(f, g);
              c = null;
            };
          },
          $watchCollection: function (a, b) {
            var c = this, d, e, g, k = 1 < b.length, h = 0, l = f(a), m = [], p = {}, n = !0, r = 0;
            return this.$watch(function () {
              d = l(c);
              var a, b, f;
              if (T(d))
                if (Pa(d))
                  for (e !== m && (e = m, r = e.length = 0, h++), a = d.length, r !== a && (h++, e.length = r = a), b = 0; b < a; b++)
                    f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (h++, e[b] = d[b]);
                else {
                  e !== p && (e = p = {}, r = 0, h++);
                  a = 0;
                  for (b in d)
                    d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (h++, e[b] = d[b])) : (r++, e[b] = d[b], h++));
                  if (r > a)
                    for (b in h++, e)
                      e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, delete e[b]);
                }
              else
                e !== d && (e = d, h++);
              return h;
            }, function () {
              n ? (n = !1, b(d, d, c)) : b(d, g, c);
              if (k)
                if (T(d))
                  if (Pa(d)) {
                    g = Array(d.length);
                    for (var a = 0; a < d.length; a++)
                      g[a] = d[a];
                  } else
                    for (a in g = {}, d)
                      kb.call(d, a) && (g[a] = d[a]);
                else
                  g = d;
            });
          },
          $digest: function () {
            var d, f, k, h, l = this.$$asyncQueue, r = this.$$postDigestQueue, R, w, t = b, K, O = [], v, C, x;
            m('$digest');
            g.$$checkUrlChange();
            c = null;
            do {
              w = !1;
              for (K = this; l.length;) {
                try {
                  x = l.shift(), x.scope.$eval(x.expression);
                } catch (H) {
                  p.$$phase = null, e(H);
                }
                c = null;
              }
              a:
                do {
                  if (h = K.$$watchers)
                    for (R = h.length; R--;)
                      try {
                        if (d = h[R])
                          if ((f = d.get(K)) !== (k = d.last) && !(d.eq ? Aa(f, k) : 'number' === typeof f && 'number' === typeof k && isNaN(f) && isNaN(k)))
                            w = !0, c = d, d.last = d.eq ? Ha(f, null) : f, d.fn(f, k === n ? f : k, K), 5 > t && (v = 4 - t, O[v] || (O[v] = []), C = P(d.exp) ? 'fn: ' + (d.exp.name || d.exp.toString()) : d.exp, C += '; newVal: ' + na(f) + '; oldVal: ' + na(k), O[v].push(C));
                          else if (d === c) {
                            w = !1;
                            break a;
                          }
                      } catch (z) {
                        p.$$phase = null, e(z);
                      }
                  if (!(h = K.$$childHead || K !== this && K.$$nextSibling))
                    for (; K !== this && !(h = K.$$nextSibling);)
                      K = K.$parent;
                } while (K = h);
              if ((w || l.length) && !t--)
                throw p.$$phase = null, a('infdig', b, na(O));
            } while (w || l.length);
            for (p.$$phase = null; r.length;)
              try {
                r.shift()();
              } catch (A) {
                e(A);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              this !== p && (r(this.$$listenerCount, Bb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = F, this.$on = this.$watch = function () {
                return F;
              });
            }
          },
          $eval: function (a, b) {
            return f(a)(this, b);
          },
          $evalAsync: function (a) {
            p.$$phase || p.$$asyncQueue.length || g.defer(function () {
              p.$$asyncQueue.length && p.$digest();
            });
            this.$$asyncQueue.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            this.$$postDigestQueue.push(a);
          },
          $apply: function (a) {
            try {
              return m('$apply'), this.$eval(a);
            } catch (b) {
              e(b);
            } finally {
              p.$$phase = null;
              try {
                p.$digest();
              } catch (c) {
                throw e(c), c;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              c[Ra(c, b)] = null;
              l(e, 1, a);
            };
          },
          $emit: function (a, b) {
            var c = [], d, f = this, g = !1, k = {
                name: a,
                targetScope: f,
                stopPropagation: function () {
                  g = !0;
                },
                preventDefault: function () {
                  k.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, h = [k].concat(Ba.call(arguments, 1)), l, m;
            do {
              d = f.$$listeners[a] || c;
              k.currentScope = f;
              l = 0;
              for (m = d.length; l < m; l++)
                if (d[l])
                  try {
                    d[l].apply(null, h);
                  } catch (p) {
                    e(p);
                  }
                else
                  d.splice(l, 1), l--, m--;
              if (g)
                break;
              f = f.$parent;
            } while (f);
            return k;
          },
          $broadcast: function (a, b) {
            for (var c = this, d = this, f = {
                  name: a,
                  targetScope: this,
                  preventDefault: function () {
                    f.defaultPrevented = !0;
                  },
                  defaultPrevented: !1
                }, g = [f].concat(Ba.call(arguments, 1)), k, h; c = d;) {
              f.currentScope = c;
              d = c.$$listeners[a] || [];
              k = 0;
              for (h = d.length; k < h; k++)
                if (d[k])
                  try {
                    d[k].apply(null, g);
                  } catch (l) {
                    e(l);
                  }
                else
                  d.splice(k, 1), k--, h--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            return f;
          }
        };
        var p = new k();
        return p;
      }
    ];
  }
  function cd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (a) {
      return z(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return z(b) ? (a = b, this) : a;
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, f;
        if (!Q || 8 <= Q)
          if (f = ua(c).href, '' !== f && !f.match(e))
            return 'unsafe:' + f;
        return c;
      };
    };
  }
  function Be(b) {
    if ('self' === b)
      return b;
    if (A(b)) {
      if (-1 < b.indexOf('***'))
        throw xa('iwcard', b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08').replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return RegExp('^' + b + '$');
    }
    if (jb(b))
      return RegExp('^' + b.source + '$');
    throw xa('imatcher');
  }
  function Gc(b) {
    var a = [];
    z(b) && r(b, function (b) {
      a.push(Be(b));
    });
    return a;
  }
  function be() {
    this.SCE_CONTEXTS = ga;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = Gc(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = Gc(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var e = function (a) {
          throw xa('unsafe');
        };
        c.has('$sanitize') && (e = c.get('$sanitize'));
        var f = d(), g = {};
        g[ga.HTML] = d(f);
        g[ga.CSS] = d(f);
        g[ga.URL] = d(f);
        g[ga.JS] = d(f);
        g[ga.RESOURCE_URL] = d(g[ga.URL]);
        return {
          trustAs: function (a, b) {
            var c = g.hasOwnProperty(a) ? g[a] : null;
            if (!c)
              throw xa('icontext', a, b);
            if (null === b || b === t || '' === b)
              return b;
            if ('string' !== typeof b)
              throw xa('itype', a);
            return new c(b);
          },
          getTrusted: function (c, d) {
            if (null === d || d === t || '' === d)
              return d;
            var f = g.hasOwnProperty(c) ? g[c] : null;
            if (f && d instanceof f)
              return d.$$unwrapTrustedValue();
            if (c === ga.RESOURCE_URL) {
              var f = ua(d.toString()), l, n, p = !1;
              l = 0;
              for (n = b.length; l < n; l++)
                if ('self' === b[l] ? Pb(f) : b[l].exec(f.href)) {
                  p = !0;
                  break;
                }
              if (p)
                for (l = 0, n = a.length; l < n; l++)
                  if ('self' === a[l] ? Pb(f) : a[l].exec(f.href)) {
                    p = !1;
                    break;
                  }
              if (p)
                return d;
              throw xa('insecurl', d.toString());
            }
            if (c === ga.HTML)
              return e(d);
            throw xa('unsafe');
          },
          valueOf: function (a) {
            return a instanceof f ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function ae() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (a, c, d) {
        if (b && c.msie && 8 > c.msieDocumentMode)
          throw xa('iequirks');
        var e = ha(ga);
        e.isEnabled = function () {
          return b;
        };
        e.trustAs = d.trustAs;
        e.getTrusted = d.getTrusted;
        e.valueOf = d.valueOf;
        b || (e.trustAs = e.getTrusted = function (a, b) {
          return b;
        }, e.valueOf = Qa);
        e.parseAs = function (b, c) {
          var d = a(c);
          return d.literal && d.constant ? d : function (a, c) {
            return e.getTrusted(b, d(a, c));
          };
        };
        var f = e.parseAs, g = e.getTrusted, k = e.trustAs;
        r(ga, function (a, b) {
          var c = M(b);
          e[Za('parse_as_' + c)] = function (b) {
            return f(a, b);
          };
          e[Za('get_trusted_' + c)] = function (b) {
            return g(a, b);
          };
          e[Za('trust_as_' + c)] = function (b) {
            return k(a, b);
          };
        });
        return e;
      }
    ];
  }
  function ce() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = U((/android (\d+)/.exec(M((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g = f.documentMode, k, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, h = f.body && f.body.style, l = !1, n = !1;
        if (h) {
          for (var p in h)
            if (l = m.exec(p)) {
              k = l[0];
              k = k.substr(0, 1).toUpperCase() + k.substr(1);
              break;
            }
          k || (k = 'WebkitOpacity' in h && 'webkit');
          l = !!('transition' in h || k + 'Transition' in h);
          n = !!('animation' in h || k + 'Animation' in h);
          !d || l && n || (l = A(f.body.style.webkitTransition), n = A(f.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hashchange: 'onhashchange' in b && (!g || 7 < g),
          hasEvent: function (a) {
            if ('input' == a && 9 == Q)
              return !1;
            if (y(c[a])) {
              var b = f.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: Xa(),
          vendorPrefix: k,
          transitions: l,
          animations: n,
          android: d,
          msie: Q,
          msieDocumentMode: g
        };
      }
    ];
  }
  function ee() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (b, a, c, d) {
        function e(e, k, m) {
          var h = c.defer(), l = h.promise, n = z(m) && !m;
          k = a.defer(function () {
            try {
              h.resolve(e());
            } catch (a) {
              h.reject(a), d(a);
            } finally {
              delete f[l.$$timeoutId];
            }
            n || b.$apply();
          }, k);
          l.$$timeoutId = k;
          f[k] = h;
          return l;
        }
        var f = {};
        e.cancel = function (b) {
          return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject('canceled'), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return e;
      }
    ];
  }
  function ua(b, a) {
    var c = b;
    Q && (Y.setAttribute('href', c), c = Y.href);
    Y.setAttribute('href', c);
    return {
      href: Y.href,
      protocol: Y.protocol ? Y.protocol.replace(/:$/, '') : '',
      host: Y.host,
      search: Y.search ? Y.search.replace(/^\?/, '') : '',
      hash: Y.hash ? Y.hash.replace(/^#/, '') : '',
      hostname: Y.hostname,
      port: Y.port,
      pathname: '/' === Y.pathname.charAt(0) ? Y.pathname : '/' + Y.pathname
    };
  }
  function Pb(b) {
    b = A(b) ? ua(b) : b;
    return b.protocol === Hc.protocol && b.host === Hc.host;
  }
  function fe() {
    this.$get = ba(W);
  }
  function mc(b) {
    function a(d, e) {
      if (T(d)) {
        var f = {};
        r(d, function (b, c) {
          f[c] = a(c, b);
        });
        return f;
      }
      return b.factory(d + c, e);
    }
    var c = 'Filter';
    this.register = a;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ];
    a('currency', Ic);
    a('date', Jc);
    a('filter', Ce);
    a('json', De);
    a('limitTo', Ee);
    a('lowercase', Fe);
    a('number', Kc);
    a('orderBy', Lc);
    a('uppercase', Ge);
  }
  function Ce() {
    return function (b, a, c) {
      if (!I(b))
        return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a))
            return !1;
        return !0;
      };
      'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return Va.equals(a, b);
      } : function (a, b) {
        if (a && b && 'object' === typeof a && 'object' === typeof b) {
          for (var d in a)
            if ('$' !== d.charAt(0) && kb.call(a, d) && c(a[d], b[d]))
              return !0;
          return !1;
        }
        b = ('' + b).toLowerCase();
        return -1 < ('' + a).toLowerCase().indexOf(b);
      });
      var f = function (a, b) {
        if ('string' == typeof b && '!' === b.charAt(0))
          return !f(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && f(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (d = 0; d < a.length; d++)
            if (f(a[d], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
        a = { $: a };
      case 'object':
        for (var g in a)
          (function (b) {
            'undefined' !== typeof a[b] && e.push(function (c) {
              return f('$' == b ? c : c && c[b], a[b]);
            });
          }(g));
        break;
      case 'function':
        e.push(a);
        break;
      default:
        return b;
      }
      d = [];
      for (g = 0; g < b.length; g++) {
        var k = b[g];
        e.check(k) && d.push(k);
      }
      return d;
    };
  }
  function Ic(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      y(d) && (d = a.CURRENCY_SYM);
      return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
    };
  }
  function Kc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function Mc(b, a, c, d, e) {
    if (null == b || !isFinite(b) || T(b))
      return '';
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + '', k = '', m = [], h = !1;
    if (-1 !== g.indexOf('e')) {
      var l = g.match(/([\d\.]+)e(-?)(\d+)/);
      l && '-' == l[2] && l[3] > e + 1 ? (g = '0', b = 0) : (k = g, h = !0);
    }
    if (h)
      0 < e && (-1 < b && 1 > b) && (k = b.toFixed(e));
    else {
      g = (g.split(Nc)[1] || '').length;
      y(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + 'e' + e)).toString() + 'e' + -e);
      0 === b && (f = !1);
      b = ('' + b).split(Nc);
      g = b[0];
      b = b[1] || '';
      var l = 0, n = a.lgSize, p = a.gSize;
      if (g.length >= n + p)
        for (l = g.length - n, h = 0; h < l; h++)
          0 === (l - h) % p && 0 !== h && (k += c), k += g.charAt(h);
      for (h = l; h < g.length; h++)
        0 === (g.length - h) % n && 0 !== h && (k += c), k += g.charAt(h);
      for (; b.length < e;)
        b += '0';
      e && '0' !== e && (k += d + b.substr(0, e));
    }
    m.push(f ? a.negPre : a.posPre);
    m.push(k);
    m.push(f ? a.negSuf : a.posSuf);
    return m.join('');
  }
  function Xb(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function $(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Xb(e, a, d);
    };
  }
  function vb(b, a) {
    return function (c, d) {
      var e = c['get' + b](), f = Ia(a ? 'SHORT' + b : b);
      return d[f][e];
    };
  }
  function Jc(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0, g = 0, k = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = U(b[9] + b[10]), g = U(b[9] + b[11]));
        k.call(a, U(b[1]), U(b[2]) - 1, U(b[3]));
        f = U(b[4] || 0) - f;
        g = U(b[5] || 0) - g;
        k = U(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        m.call(a, f, g, k, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var f = '', g = [], k, m;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      A(c) && (c = He.test(c) ? U(c) : a(c));
      ib(c) && (c = new Date(c));
      if (!ta(c))
        return c;
      for (; e;)
        (m = Ie.exec(e)) ? (g = g.concat(Ba.call(m, 1)), e = g.pop()) : (g.push(e), e = null);
      r(g, function (a) {
        k = Je[a];
        f += k ? k(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return f;
    };
  }
  function De() {
    return function (b) {
      return na(b, !0);
    };
  }
  function Ee() {
    return function (b, a) {
      if (!I(b) && !A(b))
        return b;
      a = Infinity === Math.abs(Number(a)) ? Number(a) : U(a);
      if (A(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
      for (; d < e; d++)
        c.push(b[d]);
      return c;
    };
  }
  function Lc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return Ua(b) ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function f(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? (ta(a) && ta(b) && (a = a.valueOf(), b = b.valueOf()), 'string' == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!Pa(a) || !c)
        return a;
      c = I(c) ? c : [c];
      c = Vc(c, function (a) {
        var c = !1, d = a || Qa;
        if (A(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          d = b(a);
          if (d.constant) {
            var g = d();
            return e(function (a, b) {
              return f(a[g], b[g]);
            }, c);
          }
        }
        return e(function (a, b) {
          return f(d(a), d(b));
        }, c);
      });
      for (var g = [], k = 0; k < a.length; k++)
        g.push(a[k]);
      return g.sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function ya(b) {
    P(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return ba(b);
  }
  function Oc(b, a, c, d) {
    function e(a, c) {
      c = c ? '-' + mb(c, '-') : '';
      d.setClass(b, (a ? wb : xb) + c, (a ? xb : wb) + c);
    }
    var f = this, g = b.parent().controller('form') || yb, k = 0, m = f.$error = {}, h = [];
    f.$name = a.name || a.ngForm;
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    g.$addControl(f);
    b.addClass(Oa);
    e(!0);
    f.$addControl = function (a) {
      Da(a.$name, 'input');
      h.push(a);
      a.$name && (f[a.$name] = a);
    };
    f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      r(m, function (b, c) {
        f.$setValidity(c, !0, a);
      });
      Sa(h, a);
    };
    f.$setValidity = function (a, b, c) {
      var d = m[a];
      if (b)
        d && (Sa(d, c), d.length || (k--, k || (e(b), f.$valid = !0, f.$invalid = !1), m[a] = !1, e(!0, a), g.$setValidity(a, !0, f)));
      else {
        k || e(b);
        if (d) {
          if (-1 != Ra(d, c))
            return;
        } else
          m[a] = d = [], k++, e(!1, a), g.$setValidity(a, !1, f);
        d.push(c);
        f.$valid = !1;
        f.$invalid = !0;
      }
    };
    f.$setDirty = function () {
      d.removeClass(b, Oa);
      d.addClass(b, zb);
      f.$dirty = !0;
      f.$pristine = !1;
      g.$setDirty();
    };
    f.$setPristine = function () {
      d.removeClass(b, zb);
      d.addClass(b, Oa);
      f.$dirty = !1;
      f.$pristine = !0;
      r(h, function (a) {
        a.$setPristine();
      });
    };
  }
  function sa(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : t;
  }
  function Pc(b, a) {
    var c, d;
    if (a)
      for (c = 0; c < a.length; ++c)
        if (d = a[c], b[d])
          return !0;
    return !1;
  }
  function Ke(b, a, c, d, e) {
    T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function (f) {
      if (b.$error[a] || Pc(e, d) || !Pc(e, c))
        return f;
      b.$setValidity(a, !1);
    }));
  }
  function Ab(b, a, c, d, e, f) {
    var g = a.prop(Le), k = a[0].placeholder, m = {}, h = M(a[0].type);
    d.$$validityState = g;
    if (!e.android) {
      var l = !1;
      a.on('compositionstart', function (a) {
        l = !0;
      });
      a.on('compositionend', function () {
        l = !1;
        n();
      });
    }
    var n = function (e) {
      if (!l) {
        var f = a.val();
        if (Q && 'input' === (e || m).type && a[0].placeholder !== k)
          k = a[0].placeholder;
        else if ('password' !== h && Ua(c.ngTrim || 'T') && (f = aa(f)), e = g && d.$$hasNativeValidators, d.$viewValue !== f || '' === f && e)
          b.$root.$$phase ? d.$setViewValue(f) : b.$apply(function () {
            d.$setViewValue(f);
          });
      }
    };
    if (e.hasEvent('input'))
      a.on('input', n);
    else {
      var p, q = function () {
          p || (p = f.defer(function () {
            n();
            p = null;
          }));
        };
      a.on('keydown', function (a) {
        a = a.keyCode;
        91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || q();
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', q);
    }
    a.on('change', n);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
    var s = c.ngPattern;
    s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ? (s = RegExp(e[1], e[2]), e = function (a) {
      return sa(d, 'pattern', d.$isEmpty(a) || s.test(a), a);
    }) : e = function (c) {
      var e = b.$eval(s);
      if (!e || !e.test)
        throw D('ngPattern')('noregexp', s, e, ia(a));
      return sa(d, 'pattern', d.$isEmpty(c) || e.test(c), c);
    }, d.$formatters.push(e), d.$parsers.push(e));
    if (c.ngMinlength) {
      var r = U(c.ngMinlength);
      e = function (a) {
        return sa(d, 'minlength', d.$isEmpty(a) || a.length >= r, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
    if (c.ngMaxlength) {
      var u = U(c.ngMaxlength);
      e = function (a) {
        return sa(d, 'maxlength', d.$isEmpty(a) || a.length <= u, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
  }
  function Yb(b, a) {
    b = 'ngClass' + b;
    return [
      '$animate',
      function (c) {
        function d(a, b) {
          var c = [], d = 0;
          a:
            for (; d < a.length; d++) {
              for (var e = a[d], l = 0; l < b.length; l++)
                if (e == b[l])
                  continue a;
              c.push(e);
            }
          return c;
        }
        function e(a) {
          if (!I(a)) {
            if (A(a))
              return a.split(' ');
            if (T(a)) {
              var b = [];
              r(a, function (a, c) {
                a && (b = b.concat(c.split(' ')));
              });
              return b;
            }
          }
          return a;
        }
        return {
          restrict: 'AC',
          link: function (f, g, k) {
            function m(a, b) {
              var c = g.data('$classCounts') || {}, d = [];
              r(a, function (a) {
                if (0 < b || c[a])
                  c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
              });
              g.data('$classCounts', c);
              return d.join(' ');
            }
            function h(b) {
              if (!0 === a || f.$index % 2 === a) {
                var h = e(b || []);
                if (!l) {
                  var q = m(h, 1);
                  k.$addClass(q);
                } else if (!Aa(b, l)) {
                  var s = e(l), q = d(h, s), h = d(s, h), h = m(h, -1), q = m(q, 1);
                  0 === q.length ? c.removeClass(g, h) : 0 === h.length ? c.addClass(g, q) : c.setClass(g, q, h);
                }
              }
              l = ha(b);
            }
            var l;
            f.$watch(k[b], h, !0);
            k.$observe('class', function (a) {
              h(f.$eval(k[b]));
            });
            'ngClass' !== b && f.$watch('$index', function (c, d) {
              var g = c & 1;
              if (g !== (d & 1)) {
                var h = e(f.$eval(k[b]));
                g === a ? (g = m(h, 1), k.$addClass(g)) : (g = m(h, -1), k.$removeClass(g));
              }
            });
          }
        };
      }
    ];
  }
  var Le = 'validity', M = function (b) {
      return A(b) ? b.toLowerCase() : b;
    }, kb = Object.prototype.hasOwnProperty, Ia = function (b) {
      return A(b) ? b.toUpperCase() : b;
    }, Q, v, Ea, Ba = [].slice, Me = [].push, za = Object.prototype.toString, Ta = D('ng'), Va = W.angular || (W.angular = {}), Ya, Ma, ma = [
      '0',
      '0',
      '0'
    ];
  Q = U((/msie (\d+)/.exec(M(navigator.userAgent)) || [])[1]);
  isNaN(Q) && (Q = U((/trident\/.*; rv:(\d+)/.exec(M(navigator.userAgent)) || [])[1]));
  F.$inject = [];
  Qa.$inject = [];
  var I = function () {
      return P(Array.isArray) ? Array.isArray : function (b) {
        return '[object Array]' === za.call(b);
      };
    }(), aa = function () {
      return String.prototype.trim ? function (b) {
        return A(b) ? b.trim() : b;
      } : function (b) {
        return A(b) ? b.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : b;
      };
    }();
  Ma = 9 > Q ? function (b) {
    b = b.nodeName ? b : b[0];
    return b.scopeName && 'HTML' != b.scopeName ? Ia(b.scopeName + ':' + b.nodeName) : b.nodeName;
  } : function (b) {
    return b.nodeName ? b.nodeName : b[0].nodeName;
  };
  var Xa = function () {
      if (z(Xa.isActive_))
        return Xa.isActive_;
      var b = !(!X.querySelector('[ng-csp]') && !X.querySelector('[data-ng-csp]'));
      if (!b)
        try {
          new Function('');
        } catch (a) {
          b = !0;
        }
      return Xa.isActive_ = b;
    }, Yc = /[A-Z]/g, ad = {
      full: '1.2.25',
      major: 1,
      minor: 2,
      dot: 25,
      codeName: 'hypnotic-gesticulation'
    };
  S.expando = 'ng339';
  var ab = S.cache = {}, ne = 1, sb = W.document.addEventListener ? function (b, a, c) {
      b.addEventListener(a, c, !1);
    } : function (b, a, c) {
      b.attachEvent('on' + a, c);
    }, $a = W.document.removeEventListener ? function (b, a, c) {
      b.removeEventListener(a, c, !1);
    } : function (b, a, c) {
      b.detachEvent('on' + a, c);
    };
  S._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };
  var ie = /([\:\-\_]+(.))/g, je = /^moz([A-Z])/, Hb = D('jqLite'), ke = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ib = /<|&#?\w+;/, le = /<([\w:]+)/, me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ea = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ea.optgroup = ea.option;
  ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead;
  ea.th = ea.td;
  var La = S.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === X.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), S(W).on('load', a));
      },
      toString: function () {
        var b = [];
        r(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? v(this[b]) : v(this[this.length + b]);
      },
      length: 0,
      push: Me,
      sort: [].sort,
      splice: [].splice
    }, qb = {};
  r('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    qb[M(b)] = b;
  });
  var rc = {};
  r('input select option textarea button form details'.split(' '), function (b) {
    rc[Ia(b)] = !0;
  });
  r({
    data: Mb,
    removeData: Lb
  }, function (b, a) {
    S[a] = b;
  });
  r({
    data: Mb,
    inheritedData: pb,
    scope: function (b) {
      return v.data(b, '$scope') || pb(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return v.data(b, '$isolateScope') || v.data(b, '$isolateScopeNoTemplate');
    },
    controller: oc,
    injector: function (b) {
      return pb(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Nb,
    css: function (b, a, c) {
      a = Za(a);
      if (z(c))
        b.style[a] = c;
      else {
        var d;
        8 >= Q && (d = b.currentStyle && b.currentStyle[a], '' === d && (d = 'auto'));
        d = d || b.style[a];
        8 >= Q && (d = '' === d ? t : d);
        return d;
      }
    },
    attr: function (b, a, c) {
      var d = M(a);
      if (qb[d])
        if (z(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || F).specified ? d : t;
      else if (z(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? t : b;
    },
    prop: function (b, a, c) {
      if (z(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(b, d) {
        var e = a[b.nodeType];
        if (y(d))
          return e ? b[e] : '';
        b[e] = d;
      }
      var a = [];
      9 > Q ? (a[1] = 'innerText', a[3] = 'nodeValue') : a[1] = a[3] = 'textContent';
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (y(a)) {
        if ('SELECT' === Ma(b) && b.multiple) {
          var c = [];
          r(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (y(a))
        return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)
        Ja(d[c]);
      b.innerHTML = a;
    },
    empty: pc
  }, function (b, a) {
    S.prototype[a] = function (a, d) {
      var e, f, g = this.length;
      if (b !== pc && (2 == b.length && b !== Nb && b !== oc ? a : d) === t) {
        if (T(a)) {
          for (e = 0; e < g; e++)
            if (b === Mb)
              b(this[e], a);
            else
              for (f in a)
                b(this[e], f, a[f]);
          return this;
        }
        e = b.$dv;
        g = e === t ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var k = b(this[f], a, d);
          e = e ? e + k : k;
        }
        return e;
      }
      for (e = 0; e < g; e++)
        b(this[e], a, d);
      return this;
    };
  });
  r({
    removeData: Lb,
    dealoc: Ja,
    on: function a(c, d, e, f) {
      if (z(f))
        throw Hb('onargs');
      var g = oa(c, 'events'), k = oa(c, 'handle');
      g || oa(c, 'events', g = {});
      k || oa(c, 'handle', k = oe(c, g));
      r(d.split(' '), function (d) {
        var f = g[d];
        if (!f) {
          if ('mouseenter' == d || 'mouseleave' == d) {
            var l = X.body.contains || X.body.compareDocumentPosition ? function (a, c) {
                var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
              } : function (a, c) {
                if (c)
                  for (; c = c.parentNode;)
                    if (c === a)
                      return !0;
                return !1;
              };
            g[d] = [];
            a(c, {
              mouseleave: 'mouseout',
              mouseenter: 'mouseover'
            }[d], function (a) {
              var c = a.relatedTarget;
              c && (c === this || l(this, c)) || k(a, d);
            });
          } else
            sb(c, d, k), g[d] = [];
          f = g[d];
        }
        f.push(e);
      });
    },
    off: nc,
    one: function (a, c, d) {
      a = v(a);
      a.on(c, function f() {
        a.off(c, d);
        a.off(c, f);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ja(a);
      r(new S(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      r(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a);
      });
      return c;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, c) {
      r(new S(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
      });
    },
    prepend: function (a, c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        r(new S(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = v(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: function (a) {
      Ja(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      r(new S(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a;
      });
    },
    addClass: ob,
    removeClass: nb,
    toggleClass: function (a, c, d) {
      c && r(c.split(' '), function (c) {
        var f = d;
        y(f) && (f = !Nb(a, c));
        (f ? ob : nb)(a, c);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)
        a = a.nextSibling;
      return a;
    },
    find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Kb,
    triggerHandler: function (a, c, d) {
      var e, f;
      e = c.type || c;
      var g = (oa(a, 'events') || {})[e];
      g && (e = {
        preventDefault: function () {
          this.defaultPrevented = !0;
        },
        isDefaultPrevented: function () {
          return !0 === this.defaultPrevented;
        },
        stopPropagation: F,
        type: e,
        target: a
      }, c.type && (e = J(e, c)), c = ha(g), f = d ? [e].concat(d) : [e], r(c, function (c) {
        c.apply(a, f);
      }));
    }
  }, function (a, c) {
    S.prototype[c] = function (c, e, f) {
      for (var g, k = 0; k < this.length; k++)
        y(g) ? (g = a(this[k], c, e, f), z(g) && (g = v(g))) : Jb(g, a(this[k], c, e, f));
      return z(g) ? g : this;
    };
    S.prototype.bind = S.prototype.on;
    S.prototype.unbind = S.prototype.off;
  });
  bb.prototype = {
    put: function (a, c) {
      this[Ka(a, this.nextUid)] = c;
    },
    get: function (a) {
      return this[Ka(a, this.nextUid)];
    },
    remove: function (a) {
      var c = this[a = Ka(a, this.nextUid)];
      delete this[a];
      return c;
    }
  };
  var qe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, re = /,/, se = /^\s*(_?)(\S+?)\1\s*$/, pe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, cb = D('$injector'), Ne = D('$animate'), Md = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw Ne('notcsel', c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = [
          '$timeout',
          '$$asyncCallback',
          function (a, d) {
            return {
              enter: function (a, c, g, k) {
                g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
                k && d(k);
              },
              leave: function (a, c) {
                a.remove();
                c && d(c);
              },
              move: function (a, c, d, k) {
                this.enter(a, c, d, k);
              },
              addClass: function (a, c, g) {
                c = A(c) ? c : I(c) ? c.join(' ') : '';
                r(a, function (a) {
                  ob(a, c);
                });
                g && d(g);
              },
              removeClass: function (a, c, g) {
                c = A(c) ? c : I(c) ? c.join(' ') : '';
                r(a, function (a) {
                  nb(a, c);
                });
                g && d(g);
              },
              setClass: function (a, c, g, k) {
                r(a, function (a) {
                  ob(a, c);
                  nb(a, g);
                });
                k && d(k);
              },
              enabled: F
            };
          }
        ];
      }
    ], ja = D('$compile');
  ic.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var we = /^(x[\:\-_]|data[\:\-_])/i, yc = D('$interpolate'), Oe = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ze = {
      http: 80,
      https: 443,
      ftp: 21
    }, Sb = D('$location');
  Ub.prototype = Tb.prototype = Bc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: tb('$$absUrl'),
    url: function (a) {
      if (y(a))
        return this.$$url;
      a = Oe.exec(a);
      a[1] && this.path(decodeURIComponent(a[1]));
      (a[2] || a[1]) && this.search(a[3] || '');
      this.hash(a[5] || '');
      return this;
    },
    protocol: tb('$$protocol'),
    host: tb('$$host'),
    port: tb('$$port'),
    path: Cc('$$path', function (a) {
      a = a ? a.toString() : '';
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, c) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (A(a) || ib(a))
          a = a.toString(), this.$$search = ec(a);
        else if (T(a))
          r(a, function (c, e) {
            null == c && delete a[e];
          }), this.$$search = a;
        else
          throw Sb('isrcharg');
        break;
      default:
        y(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
      }
      this.$$compose();
      return this;
    },
    hash: Cc('$$hash', function (a) {
      return a ? a.toString() : '';
    }),
    replace: function () {
      this.$$replace = !0;
      return this;
    }
  };
  var la = D('$parse'), Fc = {}, wa, Pe = Function.prototype.call, Qe = Function.prototype.apply, Qc = Function.prototype.bind, gb = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: F,
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return z(d) ? z(e) ? d + e : d : z(e) ? e : t;
      },
      '-': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return (z(d) ? d : 0) - (z(e) ? e : 0);
      },
      '*': function (a, c, d, e) {
        return d(a, c) * e(a, c);
      },
      '/': function (a, c, d, e) {
        return d(a, c) / e(a, c);
      },
      '%': function (a, c, d, e) {
        return d(a, c) % e(a, c);
      },
      '^': function (a, c, d, e) {
        return d(a, c) ^ e(a, c);
      },
      '=': F,
      '===': function (a, c, d, e) {
        return d(a, c) === e(a, c);
      },
      '!==': function (a, c, d, e) {
        return d(a, c) !== e(a, c);
      },
      '==': function (a, c, d, e) {
        return d(a, c) == e(a, c);
      },
      '!=': function (a, c, d, e) {
        return d(a, c) != e(a, c);
      },
      '<': function (a, c, d, e) {
        return d(a, c) < e(a, c);
      },
      '>': function (a, c, d, e) {
        return d(a, c) > e(a, c);
      },
      '<=': function (a, c, d, e) {
        return d(a, c) <= e(a, c);
      },
      '>=': function (a, c, d, e) {
        return d(a, c) >= e(a, c);
      },
      '&&': function (a, c, d, e) {
        return d(a, c) && e(a, c);
      },
      '||': function (a, c, d, e) {
        return d(a, c) || e(a, c);
      },
      '&': function (a, c, d, e) {
        return d(a, c) & e(a, c);
      },
      '|': function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c));
      },
      '!': function (a, c, d) {
        return !d(a, c);
      }
    }, Re = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Wb = function (a) {
      this.options = a;
    };
  Wb.prototype = {
    constructor: Wb,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = t;
      this.lastCh = ':';
      for (this.tokens = []; this.index < this.text.length;) {
        this.ch = this.text.charAt(this.index);
        if (this.is('"\''))
          this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(this.ch))
          this.readIdent();
        else if (this.is('(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: this.ch
          }), this.index++;
        else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue;
        } else {
          a = this.ch + this.peek();
          var c = a + this.peek(2), d = gb[this.ch], e = gb[a], f = gb[c];
          f ? (this.tokens.push({
            index: this.index,
            text: c,
            fn: f
          }), this.index += 3) : e ? (this.tokens.push({
            index: this.index,
            text: a,
            fn: e
          }), this.index += 2) : d ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: d
          }), this.index += 1) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
        this.lastCh = this.ch;
      }
      return this.tokens;
    },
    is: function (a) {
      return -1 !== a.indexOf(this.ch);
    },
    was: function (a) {
      return -1 !== a.indexOf(this.lastCh);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = z(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
      throw la('lexerr', a, c, this.text);
    },
    readNumber: function () {
      for (var a = '', c = this.index; this.index < this.text.length;) {
        var d = M(this.text.charAt(this.index));
        if ('.' == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ('e' == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      a *= 1;
      this.tokens.push({
        index: c,
        text: a,
        literal: !0,
        constant: !0,
        fn: function () {
          return a;
        }
      });
    },
    readIdent: function () {
      for (var a = this, c = '', d = this.index, e, f, g, k; this.index < this.text.length;) {
        k = this.text.charAt(this.index);
        if ('.' === k || this.isIdent(k) || this.isNumber(k))
          '.' === k && (e = this.index), c += k;
        else
          break;
        this.index++;
      }
      if (e)
        for (f = this.index; f < this.text.length;) {
          k = this.text.charAt(f);
          if ('(' === k) {
            g = c.substr(e - d + 1);
            c = c.substr(0, e - d);
            this.index = f;
            break;
          }
          if (this.isWhitespace(k))
            f++;
          else
            break;
        }
      d = {
        index: d,
        text: c
      };
      if (gb.hasOwnProperty(c))
        d.fn = gb[c], d.literal = !0, d.constant = !0;
      else {
        var m = Ec(c, this.options, this.text);
        d.fn = J(function (a, c) {
          return m(a, c);
        }, {
          assign: function (d, e) {
            return ub(d, c, e, a.text, a.options);
          }
        });
      }
      this.tokens.push(d);
      g && (this.tokens.push({
        index: e,
        text: '.'
      }), this.tokens.push({
        index: e + 1,
        text: g
      }));
    },
    readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = '', e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index), e = e + g;
        if (f)
          'u' === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Re[g] || g, f = !1;
        else if ('\\' === g)
          f = !0;
        else {
          if (g === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              string: d,
              literal: !0,
              constant: !0,
              fn: function () {
                return d;
              }
            });
            return;
          }
          d += g;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', c);
    }
  };
  var fb = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  fb.ZERO = J(function () {
    return 0;
  }, { constant: !0 });
  fb.prototype = {
    constructor: fb,
    parse: function (a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.statements();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      a.literal = !!a.literal;
      a.constant = !!a.constant;
      return a;
    },
    primary: function () {
      var a;
      if (this.expect('('))
        a = this.filterChain(), this.consume(')');
      else if (this.expect('['))
        a = this.arrayDeclaration();
      else if (this.expect('{'))
        a = this.object();
      else {
        var c = this.expect();
        (a = c.fn) || this.throwError('not a primary expression', c);
        a.literal = !!c.literal;
        a.constant = !!c.constant;
      }
      for (var d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, c) {
      throw la('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw la('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var f = this.tokens[0], g = f.text;
        if (g === a || g === c || g === d || g === e || !(a || c || d || e))
          return f;
      }
      return !1;
    },
    expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
    },
    consume: function (a) {
      this.expect(a) || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    },
    unaryFn: function (a, c) {
      return J(function (d, e) {
        return a(d, e, c);
      }, { constant: c.constant });
    },
    ternaryFn: function (a, c, d) {
      return J(function (e, f) {
        return a(e, f) ? c(e, f) : d(e, f);
      }, { constant: a.constant && c.constant && d.constant });
    },
    binaryFn: function (a, c, d) {
      return J(function (e, f) {
        return c(e, f, a, d);
      }, { constant: a.constant && d.constant });
    },
    statements: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (c, d) {
            for (var e, f = 0; f < a.length; f++) {
              var g = a[f];
              g && (e = g(c, d));
            }
            return e;
          };
    },
    filterChain: function () {
      for (var a = this.expression(), c;;)
        if (c = this.expect('|'))
          a = this.binaryFn(a, c.fn, this.filter());
        else
          return a;
    },
    filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
        if (a = this.expect(':'))
          d.push(this.expression());
        else {
          var e = function (a, e, k) {
            k = [k];
            for (var m = 0; m < d.length; m++)
              k.push(d[m](a, e));
            return c.apply(a, k);
          };
          return function () {
            return e;
          };
        }
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), function (d, f) {
        return a.assign(d, c(d, f), f);
      }) : a;
    },
    ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect('?')) {
        c = this.assignment();
        if (d = this.expect(':'))
          return this.ternaryFn(a, c, this.assignment());
        this.throwError('expected :', d);
      } else
        return a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(), c;;)
        if (c = this.expect('||'))
          a = this.binaryFn(a, c.fn, this.logicalAND());
        else
          return a;
    },
    logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect('&&'))
        a = this.binaryFn(a, c.fn, this.logicalAND());
      return a;
    },
    equality: function () {
      var a = this.relational(), c;
      if (c = this.expect('==', '!=', '===', '!=='))
        a = this.binaryFn(a, c.fn, this.equality());
      return a;
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect('<', '>', '<=', '>='))
        a = this.binaryFn(a, c.fn, this.relational());
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
        a = this.binaryFn(a, c.fn, this.multiplicative());
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
        a = this.binaryFn(a, c.fn, this.unary());
      return a;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(fb.ZERO, a.fn, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.fn, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = Ec(d, this.options, this.text);
      return J(function (c, d, k) {
        return e(k || a(c, d));
      }, {
        assign: function (e, g, k) {
          (k = a(e, k)) || a.assign(e, k = {});
          return ub(k, d, g, c.text, c.options);
        }
      });
    },
    objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume(']');
      return J(function (e, f) {
        var g = a(e, f), k = d(e, f), m;
        ka(k, c.text);
        if (!g)
          return t;
        (g = va(g[k], c.text)) && (g.then && c.options.unwrapPromises) && (m = g, '$$v' in g || (m.$$v = t, m.then(function (a) {
          m.$$v = a;
        })), g = g.$$v);
        return g;
      }, {
        assign: function (e, f, g) {
          var k = ka(d(e, g), c.text);
          (g = va(a(e, g), c.text)) || a.assign(e, g = {});
          return g[k] = f;
        }
      });
    },
    functionCall: function (a, c) {
      var d = [];
      if (')' !== this.peekToken().text) {
        do
          d.push(this.expression());
        while (this.expect(','));
      }
      this.consume(')');
      var e = this;
      return function (f, g) {
        for (var k = [], m = c ? c(f, g) : f, h = 0; h < d.length; h++)
          k.push(va(d[h](f, g), e.text));
        h = a(f, g, m) || F;
        va(m, e.text);
        var l = e.text;
        if (h) {
          if (h.constructor === h)
            throw la('isecfn', l);
          if (h === Pe || h === Qe || Qc && h === Qc)
            throw la('isecff', l);
        }
        k = h.apply ? h.apply(m, k) : h(k[0], k[1], k[2], k[3], k[4]);
        return va(k, e.text);
      };
    },
    arrayDeclaration: function () {
      var a = [], c = !0;
      if (']' !== this.peekToken().text) {
        do {
          if (this.peek(']'))
            break;
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume(']');
      return J(function (c, d) {
        for (var g = [], k = 0; k < a.length; k++)
          g.push(a[k](c, d));
        return g;
      }, {
        literal: !0,
        constant: c
      });
    },
    object: function () {
      var a = [], c = !0;
      if ('}' !== this.peekToken().text) {
        do {
          if (this.peek('}'))
            break;
          var d = this.expect(), d = d.string || d.text;
          this.consume(':');
          var e = this.expression();
          a.push({
            key: d,
            value: e
          });
          e.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume('}');
      return J(function (c, d) {
        for (var e = {}, m = 0; m < a.length; m++) {
          var h = a[m];
          e[h.key] = h.value(c, d);
        }
        return e;
      }, {
        literal: !0,
        constant: c
      });
    }
  };
  var Vb = {}, xa = D('$sce'), ga = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, Y = X.createElement('a'), Hc = ua(W.location.href, !0);
  mc.$inject = ['$provide'];
  Ic.$inject = ['$locale'];
  Kc.$inject = ['$locale'];
  var Nc = '.', Je = {
      yyyy: $('FullYear', 4),
      yy: $('FullYear', 2, 0, !0),
      y: $('FullYear', 1),
      MMMM: vb('Month'),
      MMM: vb('Month', !0),
      MM: $('Month', 2, 1),
      M: $('Month', 1, 1),
      dd: $('Date', 2),
      d: $('Date', 1),
      HH: $('Hours', 2),
      H: $('Hours', 1),
      hh: $('Hours', 2, -12),
      h: $('Hours', 1, -12),
      mm: $('Minutes', 2),
      m: $('Minutes', 1),
      ss: $('Seconds', 2),
      s: $('Seconds', 1),
      sss: $('Milliseconds', 3),
      EEEE: vb('Day'),
      EEE: vb('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (Xb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Xb(Math.abs(a % 60), 2));
      }
    }, Ie = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, He = /^\-?\d+$/;
  Jc.$inject = ['$locale'];
  var Fe = ba(M), Ge = ba(Ia);
  Lc.$inject = ['$parse'];
  var dd = ba({
      restrict: 'E',
      compile: function (a, c) {
        8 >= Q && (c.href || c.name || c.$set('href', ''), a.append(X.createComment('IE fix')));
        if (!c.href && !c.xlinkHref && !c.name)
          return function (a, c) {
            var f = '[object SVGAnimatedString]' === za.call(c.prop('href')) ? 'xlink:href' : 'href';
            c.on('click', function (a) {
              c.attr(f) || a.preventDefault();
            });
          };
      }
    }), Fb = {};
  r(qb, function (a, c) {
    if ('multiple' != a) {
      var d = pa('ng-' + c);
      Fb[d] = function () {
        return {
          priority: 100,
          link: function (a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  r([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = pa('ng-' + a);
    Fb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, f) {
          var g = a, k = a;
          'href' === a && '[object SVGAnimatedString]' === za.call(e.prop('href')) && (k = 'xlinkHref', f.$attr[k] = 'xlink:href', g = null);
          f.$observe(c, function (c) {
            c ? (f.$set(k, c), Q && g && e.prop(g, f[k])) : 'href' === a && f.$set(k, null);
          });
        }
      };
    };
  });
  var yb = {
      $addControl: F,
      $removeControl: F,
      $setValidity: F,
      $setDirty: F,
      $setPristine: F
    };
  Oc.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate'
  ];
  var Rc = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: Oc,
            compile: function () {
              return {
                pre: function (a, e, f, g) {
                  if (!f.action) {
                    var k = function (a) {
                      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    };
                    sb(e[0], 'submit', k);
                    e.on('$destroy', function () {
                      c(function () {
                        $a(e[0], 'submit', k);
                      }, 0, !1);
                    });
                  }
                  var m = e.parent().controller('form'), h = f.name || f.ngForm;
                  h && ub(a, h, g, h);
                  if (m)
                    e.on('$destroy', function () {
                      m.$removeControl(g);
                      h && ub(a, h, t, h);
                      J(g, yb);
                    });
                }
              };
            }
          };
        }
      ];
    }, ed = Rc(), rd = Rc(!0), Se = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Te = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Ue = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Sc = {
      text: Ab,
      number: function (a, c, d, e, f, g) {
        Ab(a, c, d, e, f, g);
        e.$parsers.push(function (a) {
          var c = e.$isEmpty(a);
          if (c || Ue.test(a))
            return e.$setValidity('number', !0), '' === a ? null : c ? a : parseFloat(a);
          e.$setValidity('number', !1);
          return t;
        });
        Ke(e, 'number', Ve, null, e.$$validityState);
        e.$formatters.push(function (a) {
          return e.$isEmpty(a) ? '' : '' + a;
        });
        d.min && (a = function (a) {
          var c = parseFloat(d.min);
          return sa(e, 'min', e.$isEmpty(a) || a >= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
          var c = parseFloat(d.max);
          return sa(e, 'max', e.$isEmpty(a) || a <= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
          return sa(e, 'number', e.$isEmpty(a) || ib(a), a);
        });
      },
      url: function (a, c, d, e, f, g) {
        Ab(a, c, d, e, f, g);
        a = function (a) {
          return sa(e, 'url', e.$isEmpty(a) || Se.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      email: function (a, c, d, e, f, g) {
        Ab(a, c, d, e, f, g);
        a = function (a) {
          return sa(e, 'email', e.$isEmpty(a) || Te.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      radio: function (a, c, d, e) {
        y(d.name) && c.attr('name', hb());
        c.on('click', function () {
          c[0].checked && a.$apply(function () {
            e.$setViewValue(d.value);
          });
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e) {
        var f = d.ngTrueValue, g = d.ngFalseValue;
        A(f) || (f = !0);
        A(g) || (g = !1);
        c.on('click', function () {
          a.$apply(function () {
            e.$setViewValue(c[0].checked);
          });
        });
        e.$render = function () {
          c[0].checked = e.$viewValue;
        };
        e.$isEmpty = function (a) {
          return a !== f;
        };
        e.$formatters.push(function (a) {
          return a === f;
        });
        e.$parsers.push(function (a) {
          return a ? f : g;
        });
      },
      hidden: F,
      button: F,
      submit: F,
      reset: F,
      file: F
    }, Ve = ['badInput'], jc = [
      '$browser',
      '$sniffer',
      function (a, c) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (d, e, f, g) {
            g && (Sc[M(f.type)] || Sc.text)(d, e, f, g, c, a);
          }
        };
      }
    ], wb = 'ng-valid', xb = 'ng-invalid', Oa = 'ng-pristine', zb = 'ng-dirty', We = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      function (a, c, d, e, f, g) {
        function k(a, c) {
          c = c ? '-' + mb(c, '-') : '';
          g.removeClass(e, (a ? xb : wb) + c);
          g.addClass(e, (a ? wb : xb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var m = f(d.ngModel), h = m.assign;
        if (!h)
          throw D('ngModel')('nonassign', d.ngModel, ia(e));
        this.$render = F;
        this.$isEmpty = function (a) {
          return y(a) || '' === a || null === a || a !== a;
        };
        var l = e.inheritedData('$formController') || yb, n = 0, p = this.$error = {};
        e.addClass(Oa);
        k(!0);
        this.$setValidity = function (a, c) {
          p[a] !== !c && (c ? (p[a] && n--, n || (k(!0), this.$valid = !0, this.$invalid = !1)) : (k(!1), this.$invalid = !0, this.$valid = !1, n++), p[a] = !c, k(c, a), l.$setValidity(a, c, this));
        };
        this.$setPristine = function () {
          this.$dirty = !1;
          this.$pristine = !0;
          g.removeClass(e, zb);
          g.addClass(e, Oa);
        };
        this.$setViewValue = function (d) {
          this.$viewValue = d;
          this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Oa), g.addClass(e, zb), l.$setDirty());
          r(this.$parsers, function (a) {
            d = a(d);
          });
          this.$modelValue !== d && (this.$modelValue = d, h(a, d), r(this.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          }));
        };
        var q = this;
        a.$watch(function () {
          var c = m(a);
          if (q.$modelValue !== c) {
            var d = q.$formatters, e = d.length;
            for (q.$modelValue = c; e--;)
              c = d[e](c);
            q.$viewValue !== c && (q.$viewValue = c, q.$render());
          }
          return c;
        });
      }
    ], Gd = function () {
      return {
        require: [
          'ngModel',
          '^?form'
        ],
        controller: We,
        link: function (a, c, d, e) {
          var f = e[0], g = e[1] || yb;
          g.$addControl(f);
          a.$on('$destroy', function () {
            g.$removeControl(f);
          });
        }
      };
    }, Id = ba({
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), kc = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            d.required = !0;
            var f = function (a) {
              if (d.required && e.$isEmpty(a))
                e.$setValidity('required', !1);
              else
                return e.$setValidity('required', !0), a;
            };
            e.$formatters.push(f);
            e.$parsers.unshift(f);
            d.$observe('required', function () {
              f(e.$viewValue);
            });
          }
        }
      };
    }, Hd = function () {
      return {
        require: 'ngModel',
        link: function (a, c, d, e) {
          var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ',';
          e.$parsers.push(function (a) {
            if (!y(a)) {
              var c = [];
              a && r(a.split(f), function (a) {
                a && c.push(aa(a));
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return I(a) ? a.join(', ') : t;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, Xe = /^(true|false|\d+)$/, Jd = function () {
      return {
        priority: 100,
        compile: function (a, c) {
          return Xe.test(c.ngValue) ? function (a, c, f) {
            f.$set('value', a.$eval(f.ngValue));
          } : function (a, c, f) {
            a.$watch(f.ngValue, function (a) {
              f.$set('value', a);
            });
          };
        }
      };
    }, jd = ya({
      compile: function (a) {
        a.addClass('ng-binding');
        return function (a, d, e) {
          d.data('$binding', e.ngBind);
          a.$watch(e.ngBind, function (a) {
            d.text(a == t ? '' : a);
          });
        };
      }
    }), ld = [
      '$interpolate',
      function (a) {
        return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));
          d.addClass('ng-binding').data('$binding', c);
          e.$observe('ngBindTemplate', function (a) {
            d.text(a);
          });
        };
      }
    ], kd = [
      '$sce',
      '$parse',
      function (a, c) {
        return {
          compile: function (d) {
            d.addClass('ng-binding');
            return function (d, f, g) {
              f.data('$binding', g.ngBindHtml);
              var k = c(g.ngBindHtml);
              d.$watch(function () {
                return (k(d) || '').toString();
              }, function (c) {
                f.html(a.getTrustedHtml(k(d)) || '');
              });
            };
          }
        };
      }
    ], md = Yb('', !0), od = Yb('Odd', 0), nd = Yb('Even', 1), pd = ya({
      compile: function (a, c) {
        c.$set('ngCloak', t);
        a.removeClass('ng-cloak');
      }
    }), qd = [function () {
        return {
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], lc = {}, Ye = {
      blur: !0,
      focus: !0
    };
  r('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = pa('ng-' + a);
    lc[c] = [
      '$parse',
      '$rootScope',
      function (d, e) {
        return {
          compile: function (f, g) {
            var k = d(g[c]);
            return function (c, d) {
              d.on(a, function (d) {
                var f = function () {
                  k(c, { $event: d });
                };
                Ye[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
              });
            };
          }
        };
      }
    ];
  });
  var td = [
      '$animate',
      function (a) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, f, g) {
            var k, m, h;
            c.$watch(e.ngIf, function (f) {
              Ua(f) ? m || (m = c.$new(), g(m, function (c) {
                c[c.length++] = X.createComment(' end ngIf: ' + e.ngIf + ' ');
                k = { clone: c };
                a.enter(c, d.parent(), d);
              })) : (h && (h.remove(), h = null), m && (m.$destroy(), m = null), k && (h = Eb(k.clone), a.leave(h, function () {
                h = null;
              }), k = null));
            });
          }
        };
      }
    ], ud = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, c, d, e, f) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: Va.noop,
          compile: function (g, k) {
            var m = k.ngInclude || k.src, h = k.onload || '', l = k.autoscroll;
            return function (g, k, q, r, E) {
              var u = 0, t, v, R, w = function () {
                  v && (v.remove(), v = null);
                  t && (t.$destroy(), t = null);
                  R && (e.leave(R, function () {
                    v = null;
                  }), v = R, R = null);
                };
              g.$watch(f.parseAsResourceUrl(m), function (f) {
                var m = function () {
                    !z(l) || l && !g.$eval(l) || d();
                  }, q = ++u;
                f ? (a.get(f, { cache: c }).success(function (a) {
                  if (q === u) {
                    var c = g.$new();
                    r.template = a;
                    a = E(c, function (a) {
                      w();
                      e.enter(a, null, k, m);
                    });
                    t = c;
                    R = a;
                    t.$emit('$includeContentLoaded');
                    g.$eval(h);
                  }
                }).error(function () {
                  q === u && w();
                }), g.$emit('$includeContentRequested')) : (w(), r.template = null);
              });
            };
          }
        };
      }
    ], Kd = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, f) {
            d.html(f.template);
            a(d.contents())(c);
          }
        };
      }
    ], vd = ya({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), wd = ya({
      terminal: !0,
      priority: 1000
    }), xd = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g;
        return {
          restrict: 'EA',
          link: function (e, f, g) {
            var k = g.count, m = g.$attr.when && f.attr(g.$attr.when), h = g.offset || 0, l = e.$eval(m) || {}, n = {}, p = c.startSymbol(), q = c.endSymbol(), s = /^when(Minus)?(.+)$/;
            r(g, function (a, c) {
              s.test(c) && (l[M(c.replace('when', '').replace('Minus', '-'))] = f.attr(g.$attr[c]));
            });
            r(l, function (a, e) {
              n[e] = c(a.replace(d, p + k + '-' + h + q));
            });
            e.$watch(function () {
              var c = parseFloat(e.$eval(k));
              if (isNaN(c))
                return '';
              c in l || (c = a.pluralCat(c - h));
              return n[c](e, f, !0);
            }, function (a) {
              f.text(a);
            });
          }
        };
      }
    ], yd = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = D('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          link: function (e, f, g, k, m) {
            var h = g.ngRepeat, l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, p, q, s, t, u, B = { $id: Ka };
            if (!l)
              throw d('iexp', h);
            g = l[1];
            k = l[2];
            (l = l[3]) ? (n = a(l), p = function (a, c, d) {
              u && (B[u] = a);
              B[t] = c;
              B.$index = d;
              return n(e, B);
            }) : (q = function (a, c) {
              return Ka(c);
            }, s = function (a) {
              return a;
            });
            l = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!l)
              throw d('iidexp', g);
            t = l[3] || l[1];
            u = l[2];
            var z = {};
            e.$watchCollection(k, function (a) {
              var g, k, l = f[0], n, B = {}, C, x, H, A, F, D, y, I = [];
              if (Pa(a))
                D = a, F = p || q;
              else {
                F = p || s;
                D = [];
                for (H in a)
                  a.hasOwnProperty(H) && '$' != H.charAt(0) && D.push(H);
                D.sort();
              }
              C = D.length;
              k = I.length = D.length;
              for (g = 0; g < k; g++)
                if (H = a === D ? g : D[g], A = a[H], n = F(H, A, g), Da(n, '`track by` id'), z.hasOwnProperty(n))
                  y = z[n], delete z[n], B[n] = y, I[g] = y;
                else {
                  if (B.hasOwnProperty(n))
                    throw r(I, function (a) {
                      a && a.scope && (z[a.id] = a);
                    }), d('dupes', h, n, na(A));
                  I[g] = { id: n };
                  B[n] = !1;
                }
              for (H in z)
                z.hasOwnProperty(H) && (y = z[H], g = Eb(y.clone), c.leave(g), r(g, function (a) {
                  a.$$NG_REMOVED = !0;
                }), y.scope.$destroy());
              g = 0;
              for (k = D.length; g < k; g++) {
                H = a === D ? g : D[g];
                A = a[H];
                y = I[g];
                I[g - 1] && (l = I[g - 1].clone[I[g - 1].clone.length - 1]);
                if (y.scope) {
                  x = y.scope;
                  n = l;
                  do
                    n = n.nextSibling;
                  while (n && n.$$NG_REMOVED);
                  y.clone[0] != n && c.move(Eb(y.clone), null, v(l));
                  l = y.clone[y.clone.length - 1];
                } else
                  x = e.$new();
                x[t] = A;
                u && (x[u] = H);
                x.$index = g;
                x.$first = 0 === g;
                x.$last = g === C - 1;
                x.$middle = !(x.$first || x.$last);
                x.$odd = !(x.$even = 0 === (g & 1));
                y.scope || m(x, function (a) {
                  a[a.length++] = X.createComment(' end ngRepeat: ' + h + ' ');
                  c.enter(a, null, v(l));
                  l = a;
                  y.scope = x;
                  y.clone = a;
                  B[y.id] = y;
                });
              }
              z = B;
            });
          }
        };
      }
    ], zd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngShow, function (c) {
            a[Ua(c) ? 'removeClass' : 'addClass'](d, 'ng-hide');
          });
        };
      }
    ], sd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngHide, function (c) {
            a[Ua(c) ? 'addClass' : 'removeClass'](d, 'ng-hide');
          });
        };
      }
    ], Ad = ya(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && r(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), Bd = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (c, d, e, f) {
            var g = [], k = [], m = [], h = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
              var n, p;
              n = 0;
              for (p = m.length; n < p; ++n)
                m[n].remove();
              n = m.length = 0;
              for (p = h.length; n < p; ++n) {
                var q = k[n];
                h[n].$destroy();
                m[n] = q;
                a.leave(q, function () {
                  m.splice(n, 1);
                });
              }
              k.length = 0;
              h.length = 0;
              if (g = f.cases['!' + d] || f.cases['?'])
                c.$eval(e.change), r(g, function (d) {
                  var e = c.$new();
                  h.push(e);
                  d.transclude(e, function (c) {
                    var e = d.element;
                    k.push(c);
                    a.enter(c, e.parent(), e);
                  });
                });
            });
          }
        };
      }
    ], Cd = ya({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, f) {
        e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
        e.cases['!' + d.ngSwitchWhen].push({
          transclude: f,
          element: c
        });
      }
    }), Dd = ya({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, f) {
        e.cases['?'] = e.cases['?'] || [];
        e.cases['?'].push({
          transclude: f,
          element: c
        });
      }
    }), Fd = ya({
      link: function (a, c, d, e, f) {
        if (!f)
          throw D('ngTransclude')('orphan', ia(c));
        f(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), fd = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (c, d) {
            'text/ng-template' == d.type && a.put(d.id, c[0].text);
          }
        };
      }
    ], Ze = D('ngOptions'), Ed = ba({ terminal: !0 }), gd = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: F };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, c, d) {
              var m = this, h = {}, l = e, n;
              m.databound = d.ngModel;
              m.init = function (a, c, d) {
                l = a;
                n = d;
              };
              m.addOption = function (c) {
                Da(c, '"option value"');
                h[c] = !0;
                l.$viewValue == c && (a.val(c), n.parent() && n.remove());
              };
              m.removeOption = function (a) {
                this.hasOption(a) && (delete h[a], l.$viewValue == a && this.renderUnknownOption(a));
              };
              m.renderUnknownOption = function (c) {
                c = '? ' + Ka(c) + ' ?';
                n.val(c);
                a.prepend(n);
                a.val(c);
                n.prop('selected', !0);
              };
              m.hasOption = function (a) {
                return h.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                m.renderUnknownOption = F;
              });
            }
          ],
          link: function (e, g, k, m) {
            function h(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (A.parent() && A.remove(), c.val(a), '' === a && u.prop('selected', !0)) : y(a) && u ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  A.parent() && A.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function l(a, c, d) {
              var e;
              d.$render = function () {
                var a = new bb(d.$viewValue);
                r(c.find('option'), function (c) {
                  c.selected = z(a.get(c.value));
                });
              };
              a.$watch(function () {
                Aa(e, d.$viewValue) || (e = ha(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  r(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function n(e, f, g) {
              function k() {
                var a = { '': [] }, c = [''], d, h, s, t, w;
                s = g.$modelValue;
                t = u(e) || [];
                var A = n ? Zb(t) : t, F, L, x;
                L = {};
                x = !1;
                if (q)
                  if (h = g.$modelValue, v && I(h))
                    for (x = new bb([]), d = {}, w = 0; w < h.length; w++)
                      d[m] = h[w], x.put(v(e, d), h[w]);
                  else
                    x = new bb(h);
                w = x;
                var C, J;
                for (x = 0; F = A.length, x < F; x++) {
                  h = x;
                  if (n) {
                    h = A[x];
                    if ('$' === h.charAt(0))
                      continue;
                    L[n] = h;
                  }
                  L[m] = t[h];
                  d = p(e, L) || '';
                  (h = a[d]) || (h = a[d] = [], c.push(d));
                  q ? d = z(w.remove(v ? v(e, L) : r(e, L))) : (v ? (d = {}, d[m] = s, d = v(e, d) === v(e, L)) : d = s === r(e, L), w = w || d);
                  C = l(e, L);
                  C = z(C) ? C : '';
                  h.push({
                    id: v ? v(e, L) : n ? A[x] : x,
                    label: C,
                    selected: d
                  });
                }
                q || (E || null === s ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !w
                }) : w || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                L = 0;
                for (A = c.length; L < A; L++) {
                  d = c[L];
                  h = a[d];
                  y.length <= L ? (s = {
                    element: D.clone().attr('label', d),
                    label: h.label
                  }, t = [s], y.push(t), f.append(s.element)) : (t = y[L], s = t[0], s.label != d && s.element.attr('label', s.label = d));
                  C = null;
                  x = 0;
                  for (F = h.length; x < F; x++)
                    d = h[x], (w = t[x + 1]) ? (C = w.element, w.label !== d.label && C.text(w.label = d.label), w.id !== d.id && C.val(w.id = d.id), C[0].selected !== d.selected && (C.prop('selected', w.selected = d.selected), Q && C.prop('selected', w.selected))) : ('' === d.id && E ? J = E : (J = B.clone()).val(d.id).prop('selected', d.selected).attr('selected', d.selected).text(d.label), t.push({
                      element: J,
                      label: d.label,
                      id: d.id,
                      selected: d.selected
                    }), C ? C.after(J) : s.element.append(J), C = J);
                  for (x++; t.length > x;)
                    t.pop().element.remove();
                }
                for (; y.length > L;)
                  y.pop()[0].element.remove();
              }
              var h;
              if (!(h = s.match(d)))
                throw Ze('iexp', s, ia(f));
              var l = c(h[2] || h[1]), m = h[4] || h[6], n = h[5], p = c(h[3] || ''), r = c(h[2] ? h[1] : m), u = c(h[7]), v = h[8] ? c(h[8]) : null, y = [[{
                      element: f,
                      label: ''
                    }]];
              E && (a(E)(e), E.removeClass('ng-scope'), E.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a, c = u(e) || [], d = {}, h, l, p, s, w, z, x;
                  if (q)
                    for (l = [], s = 0, z = y.length; s < z; s++)
                      for (a = y[s], p = 1, w = a.length; p < w; p++) {
                        if ((h = a[p].element)[0].selected) {
                          h = h.val();
                          n && (d[n] = h);
                          if (v)
                            for (x = 0; x < c.length && (d[m] = c[x], v(e, d) != h); x++);
                          else
                            d[m] = c[h];
                          l.push(r(e, d));
                        }
                      }
                  else if (h = f.val(), '?' == h)
                    l = t;
                  else if ('' === h)
                    l = null;
                  else if (v)
                    for (x = 0; x < c.length; x++) {
                      if (d[m] = c[x], v(e, d) == h) {
                        l = r(e, d);
                        break;
                      }
                    }
                  else
                    d[m] = c[h], n && (d[n] = h), l = r(e, d);
                  g.$setViewValue(l);
                  k();
                });
              });
              g.$render = k;
              e.$watchCollection(u, k);
              e.$watchCollection(function () {
                var a = {}, c = u(e);
                if (c) {
                  for (var d = Array(c.length), f = 0, g = c.length; f < g; f++)
                    a[m] = c[f], d[f] = l(e, a);
                  return d;
                }
              }, k);
              q && e.$watchCollection(function () {
                return g.$modelValue;
              }, k);
            }
            if (m[1]) {
              var p = m[0];
              m = m[1];
              var q = k.multiple, s = k.ngOptions, E = !1, u, B = v(X.createElement('option')), D = v(X.createElement('optgroup')), A = B.clone();
              k = 0;
              for (var w = g.children(), F = w.length; k < F; k++)
                if ('' === w[k].value) {
                  u = E = w.eq(k);
                  break;
                }
              p.init(m, E, A);
              q && (m.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              s ? n(e, g, m) : q ? l(e, g, m) : h(e, g, m, p);
            }
          }
        };
      }
    ], id = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: F,
            removeOption: F
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (y(e.value)) {
              var f = a(d.text(), !0);
              f || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var h = d.parent(), l = h.data('$selectController') || h.parent().data('$selectController');
              l && l.databound ? d.prop('selected', !1) : l = c;
              f ? a.$watch(f, function (a, c) {
                e.$set('value', a);
                a !== c && l.removeOption(c);
                l.addOption(a);
              }) : l.addOption(e.value);
              d.on('$destroy', function () {
                l.removeOption(e.value);
              });
            };
          }
        };
      }
    ], hd = ba({
      restrict: 'E',
      terminal: !0
    });
  W.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : ((Ea = W.jQuery) && Ea.fn.on ? (v = Ea, J(Ea.fn, {
    scope: La.scope,
    isolateScope: La.isolateScope,
    controller: La.controller,
    injector: La.injector,
    inheritedData: La.inheritedData
  }), Gb('remove', !0, !0, !1), Gb('empty', !1, !1, !1), Gb('html', !1, !1, !0)) : v = S, Va.element = v, $c(Va), v(X).ready(function () {
    Xc(X, fc);
  }));
}(window, document));
!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
/**
 * State-based routing for AngularJS
 * @version v0.2.8
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'undefined' != typeof module && 'undefined' != typeof exports && module.exports === exports && (module.exports = 'ui.router'), function (a, b, c) {
  'use strict';
  function d(a, b) {
    return H(new (H(function () {
    }, { prototype: a }))(), b);
  }
  function e(a) {
    return G(arguments, function (b) {
      b !== a && G(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }
  function f(a, b) {
    var c = [];
    for (var d in a.path) {
      if (a.path[d] !== b.path[d])
        break;
      c.push(a.path[d]);
    }
    return c;
  }
  function g(a, b) {
    if (Array.prototype.indexOf)
      return a.indexOf(b, Number(arguments[2]) || 0);
    var c = a.length >>> 0, d = Number(arguments[2]) || 0;
    for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)
      if (d in a && a[d] === b)
        return d;
    return -1;
  }
  function h(a, b, c, d) {
    var e, h = f(c, d), i = {}, j = [];
    for (var k in h)
      if (h[k].params && h[k].params.length) {
        e = h[k].params;
        for (var l in e)
          g(j, e[l]) >= 0 || (j.push(e[l]), i[e[l]] = a[e[l]]);
      }
    return H({}, i, b);
  }
  function i(a, b) {
    var c = {};
    return G(a, function (a) {
      var d = b[a];
      c[a] = null != d ? String(d) : null;
    }), c;
  }
  function j(a, b, c) {
    if (!c) {
      c = [];
      for (var d in a)
        c.push(d);
    }
    for (var e = 0; e < c.length; e++) {
      var f = c[e];
      if (a[f] != b[f])
        return !1;
    }
    return !0;
  }
  function k(a, b) {
    var c = {};
    return G(a, function (a) {
      c[a] = b[a];
    }), c;
  }
  function l(a, b) {
    var d = 1, f = 2, g = {}, h = [], i = g, j = H(a.when(g), {
        $$promises: g,
        $$values: g
      });
    this.study = function (g) {
      function k(a, c) {
        if (o[c] !== f) {
          if (n.push(c), o[c] === d)
            throw n.splice(0, n.indexOf(c)), new Error('Cyclic dependency: ' + n.join(' -> '));
          if (o[c] = d, D(a))
            m.push(c, [function () {
                return b.get(a);
              }], h);
          else {
            var e = b.annotate(a);
            G(e, function (a) {
              a !== c && g.hasOwnProperty(a) && k(g[a], a);
            }), m.push(c, a, e);
          }
          n.pop(), o[c] = f;
        }
      }
      function l(a) {
        return E(a) && a.then && a.$$promises;
      }
      if (!E(g))
        throw new Error('\'invocables\' must be an object');
      var m = [], n = [], o = {};
      return G(g, k), g = n = o = null, function (d, f, g) {
        function h() {
          --s || (t || e(r, f.$$values), p.$$values = r, p.$$promises = !0, o.resolve(r));
        }
        function k(a) {
          p.$$failure = a, o.reject(a);
        }
        function n(c, e, f) {
          function i(a) {
            l.reject(a), k(a);
          }
          function j() {
            if (!B(p.$$failure))
              try {
                l.resolve(b.invoke(e, g, r)), l.promise.then(function (a) {
                  r[c] = a, h();
                }, i);
              } catch (a) {
                i(a);
              }
          }
          var l = a.defer(), m = 0;
          G(f, function (a) {
            q.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, q[a].then(function (b) {
              r[a] = b, --m || j();
            }, i));
          }), m || j(), q[c] = l.promise;
        }
        if (l(d) && g === c && (g = f, f = d, d = null), d) {
          if (!E(d))
            throw new Error('\'locals\' must be an object');
        } else
          d = i;
        if (f) {
          if (!l(f))
            throw new Error('\'parent\' must be a promise returned by $resolve.resolve()');
        } else
          f = j;
        var o = a.defer(), p = o.promise, q = p.$$promises = {}, r = H({}, d), s = 1 + m.length / 3, t = !1;
        if (B(f.$$failure))
          return k(f.$$failure), p;
        f.$$values ? (t = e(r, f.$$values), h()) : (H(q, f.$$promises), f.then(h, k));
        for (var u = 0, v = m.length; v > u; u += 3)
          d.hasOwnProperty(m[u]) ? h() : n(m[u], m[u + 1], m[u + 2]);
        return p;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }
  function m(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return B(a.template) ? this.fromString(a.template, b) : B(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : B(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return C(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return C(c) && (c = c(d)), null == c ? null : a.get(c, { cache: b }).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || { params: b });
    };
  }
  function n(a) {
    function b(b) {
      if (!/^\w+(-+\w+)*$/.test(b))
        throw new Error('Invalid parameter name \'' + b + '\' in pattern \'' + a + '\'');
      if (f[b])
        throw new Error('Duplicate parameter name \'' + b + '\' in pattern \'' + a + '\'');
      f[b] = !0, j.push(b);
    }
    function c(a) {
      return a.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
    }
    var d, e = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = {}, g = '^', h = 0, i = this.segments = [], j = this.params = [];
    this.source = a;
    for (var k, l, m; (d = e.exec(a)) && (k = d[2] || d[3], l = d[4] || ('*' == d[1] ? '.*' : '[^/]*'), m = a.substring(h, d.index), !(m.indexOf('?') >= 0));)
      g += c(m) + '(' + l + ')', b(k), i.push(m), h = e.lastIndex;
    m = a.substring(h);
    var n = m.indexOf('?');
    if (n >= 0) {
      var o = this.sourceSearch = m.substring(n);
      m = m.substring(0, n), this.sourcePath = a.substring(0, h + n), G(o.substring(1).split(/[&?]/), b);
    } else
      this.sourcePath = a, this.sourceSearch = '';
    g += c(m) + '$', i.push(m), this.regexp = new RegExp(g), this.prefix = i[0];
  }
  function o() {
    this.compile = function (a) {
      return new n(a);
    }, this.isMatcher = function (a) {
      return E(a) && C(a.exec) && C(a.format) && C(a.concat);
    }, this.$get = function () {
      return this;
    };
  }
  function p(a) {
    function b(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
      return null != b ? b[1].replace(/\\(.)/g, '$1') : '';
    }
    function c(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b['$' === c ? 0 : Number(c)];
      });
    }
    function d(a, b, c) {
      if (!c)
        return !1;
      var d = a.invoke(b, b, { $match: c });
      return B(d) ? d : !0;
    }
    var e = [], f = null;
    this.rule = function (a) {
      if (!C(a))
        throw new Error('\'rule\' must be a function');
      return e.push(a), this;
    }, this.otherwise = function (a) {
      if (D(a)) {
        var b = a;
        a = function () {
          return b;
        };
      } else if (!C(a))
        throw new Error('\'rule\' must be a function');
      return f = a, this;
    }, this.when = function (e, f) {
      var g, h = D(f);
      if (D(e) && (e = a.compile(e)), !h && !C(f) && !F(f))
        throw new Error('invalid \'handler\' in when()');
      var i = {
          matcher: function (b, c) {
            return h && (g = a.compile(c), c = [
              '$match',
              function (a) {
                return g.format(a);
              }
            ]), H(function (a, e) {
              return d(a, c, b.exec(e.path(), e.search()));
            }, { prefix: D(b.prefix) ? b.prefix : '' });
          },
          regex: function (a, e) {
            if (a.global || a.sticky)
              throw new Error('when() RegExp must not be global or sticky');
            return h && (g = e, e = [
              '$match',
              function (a) {
                return c(g, a);
              }
            ]), H(function (b, c) {
              return d(b, e, a.exec(c.path()));
            }, { prefix: b(a) });
          }
        }, j = {
          matcher: a.isMatcher(e),
          regex: e instanceof RegExp
        };
      for (var k in j)
        if (j[k])
          return this.rule(i[k](e, f));
      throw new Error('invalid \'what\' in when()');
    }, this.$get = [
      '$location',
      '$rootScope',
      '$injector',
      function (a, b, c) {
        function d(b) {
          function d(b) {
            var d = b(c, a);
            return d ? (D(d) && a.replace().url(d), !0) : !1;
          }
          if (!b || !b.defaultPrevented) {
            var g, h = e.length;
            for (g = 0; h > g; g++)
              if (d(e[g]))
                return;
            f && d(f);
          }
        }
        return b.$on('$locationChangeSuccess', d), {
          sync: function () {
            d();
          }
        };
      }
    ];
  }
  function q(a, e, f) {
    function g(a) {
      return 0 === a.indexOf('.') || 0 === a.indexOf('^');
    }
    function l(a, b) {
      var d = D(a), e = d ? a : a.name, f = g(e);
      if (f) {
        if (!b)
          throw new Error('No reference point given for path \'' + e + '\'');
        for (var h = e.split('.'), i = 0, j = h.length, k = b; j > i; i++)
          if ('' !== h[i] || 0 !== i) {
            if ('^' !== h[i])
              break;
            if (!k.parent)
              throw new Error('Path \'' + e + '\' not valid for state \'' + b.name + '\'');
            k = k.parent;
          } else
            k = b;
        h = h.slice(i).join('.'), e = k.name + (k.name && h ? '.' : '') + h;
      }
      var l = u[e];
      return !l || !d && (d || l !== a && l.self !== a) ? c : l;
    }
    function m(a, b) {
      v[a] || (v[a] = []), v[a].push(b);
    }
    function n(b) {
      b = d(b, {
        self: b,
        resolve: b.resolve || {},
        toString: function () {
          return this.name;
        }
      });
      var c = b.name;
      if (!D(c) || c.indexOf('@') >= 0)
        throw new Error('State must have a valid name');
      if (u.hasOwnProperty(c))
        throw new Error('State \'' + c + '\'\' is already defined');
      var e = -1 !== c.indexOf('.') ? c.substring(0, c.lastIndexOf('.')) : D(b.parent) ? b.parent : '';
      if (e && !u[e])
        return m(e, b.self);
      for (var f in x)
        C(x[f]) && (b[f] = x[f](b, x.$delegates[f]));
      if (u[c] = b, !b[w] && b.url && a.when(b.url, [
          '$match',
          '$stateParams',
          function (a, c) {
            t.$current.navigable == b && j(a, c) || t.transitionTo(b, a, { location: !1 });
          }
        ]), v[c])
        for (var g = 0; g < v[c].length; g++)
          n(v[c][g]);
      return b;
    }
    function o(a, b) {
      return D(a) && !B(b) ? x[a] : C(b) && D(a) ? (x[a] && !x.$delegates[a] && (x.$delegates[a] = x[a]), x[a] = b, this) : this;
    }
    function p(a, b) {
      return E(a) ? b = a : b.name = a, n(b), this;
    }
    function q(a, e, g, m, n, o, p) {
      function q() {
        p.url() !== D && (p.url(D), p.replace());
      }
      function v(a, c, d, f, h) {
        var i = d ? c : k(a.params, c), j = { $stateParams: i };
        h.resolve = n.resolve(a.resolve, j, h.resolve, a);
        var l = [h.resolve.then(function (a) {
              h.globals = a;
            })];
        return f && l.push(f), G(a.views, function (c, d) {
          var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
          e.$template = [function () {
              return g.load(d, {
                view: c,
                locals: j,
                params: i,
                notify: !1
              }) || '';
            }], l.push(n.resolve(e, j, h.resolve, a).then(function (f) {
            if (C(c.controllerProvider) || F(c.controllerProvider)) {
              var g = b.extend({}, e, j);
              f.$$controller = m.invoke(c.controllerProvider, null, g);
            } else
              f.$$controller = c.controller;
            f.$$state = a, h[d] = f;
          }));
        }), e.all(l).then(function () {
          return h;
        });
      }
      var x = e.reject(new Error('transition superseded')), y = e.reject(new Error('transition prevented')), z = e.reject(new Error('transition aborted')), A = e.reject(new Error('transition failed')), D = p.url();
      return s.locals = {
        resolve: null,
        globals: { $stateParams: {} }
      }, t = {
        params: {},
        current: s.self,
        $current: s,
        transition: null
      }, t.reload = function () {
        t.transitionTo(t.current, o, {
          reload: !0,
          inherit: !1,
          notify: !1
        });
      }, t.go = function (a, b, c) {
        return this.transitionTo(a, b, H({
          inherit: !0,
          relative: t.$current
        }, c));
      }, t.transitionTo = function (b, c, f) {
        c = c || {}, f = H({
          location: !0,
          inherit: !1,
          relative: null,
          notify: !0,
          reload: !1,
          $retry: !1
        }, f || {});
        var g, k = t.$current, n = t.params, u = k.path, C = l(b, f.relative);
        if (!B(C)) {
          var E = {
              to: b,
              toParams: c,
              options: f
            };
          if (g = a.$broadcast('$stateNotFound', E, k.self, n), g.defaultPrevented)
            return q(), z;
          if (g.retry) {
            if (f.$retry)
              return q(), A;
            var F = t.transition = e.when(g.retry);
            return F.then(function () {
              return F !== t.transition ? x : (E.options.$retry = !0, t.transitionTo(E.to, E.toParams, E.options));
            }, function () {
              return z;
            }), q(), F;
          }
          if (b = E.to, c = E.toParams, f = E.options, C = l(b, f.relative), !B(C)) {
            if (f.relative)
              throw new Error('Could not resolve \'' + b + '\' from state \'' + f.relative + '\'');
            throw new Error('No such state \'' + b + '\'');
          }
        }
        if (C[w])
          throw new Error('Cannot transition to abstract state \'' + b + '\'');
        f.inherit && (c = h(o, c || {}, t.$current, C)), b = C;
        var G, J, K = b.path, L = s.locals, M = [];
        for (G = 0, J = K[G]; J && J === u[G] && j(c, n, J.ownParams) && !f.reload; G++, J = K[G])
          L = M[G] = J.locals;
        if (r(b, k, L, f))
          return b.self.reloadOnSearch !== !1 && q(), t.transition = null, e.when(t.current);
        if (c = i(b.params, c || {}), f.notify && (g = a.$broadcast('$stateChangeStart', b.self, c, k.self, n), g.defaultPrevented))
          return q(), y;
        for (var N = e.when(L), O = G; O < K.length; O++, J = K[O])
          L = M[O] = d(L), N = v(J, c, J === b, N, L);
        var P = t.transition = N.then(function () {
            var d, e, g;
            if (t.transition !== P)
              return x;
            for (d = u.length - 1; d >= G; d--)
              g = u[d], g.self.onExit && m.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
            for (d = G; d < K.length; d++)
              e = K[d], e.locals = M[d], e.self.onEnter && m.invoke(e.self.onEnter, e.self, e.locals.globals);
            if (t.transition !== P)
              return x;
            t.$current = b, t.current = b.self, t.params = c, I(t.params, o), t.transition = null;
            var h = b.navigable;
            return f.location && h && (p.url(h.url.format(h.locals.globals.$stateParams)), 'replace' === f.location && p.replace()), f.notify && a.$broadcast('$stateChangeSuccess', b.self, c, k.self, n), D = p.url(), t.current;
          }, function (d) {
            return t.transition !== P ? x : (t.transition = null, a.$broadcast('$stateChangeError', b.self, c, k.self, n, d), q(), e.reject(d));
          });
        return P;
      }, t.is = function (a, d) {
        var e = l(a);
        return B(e) ? t.$current !== e ? !1 : B(d) && null !== d ? b.equals(o, d) : !0 : c;
      }, t.includes = function (a, d) {
        var e = l(a);
        if (!B(e))
          return c;
        if (!B(t.$current.includes[e.name]))
          return !1;
        var f = !0;
        return b.forEach(d, function (a, b) {
          B(o[b]) && o[b] === a || (f = !1);
        }), f;
      }, t.href = function (a, b, c) {
        c = H({
          lossy: !0,
          inherit: !1,
          absolute: !1,
          relative: t.$current
        }, c || {});
        var d = l(a, c.relative);
        if (!B(d))
          return null;
        b = h(o, b || {}, t.$current, d);
        var e = d && c.lossy ? d.navigable : d, g = e && e.url ? e.url.format(i(d.params, b || {})) : null;
        return !f.html5Mode() && g && (g = '#' + f.hashPrefix() + g), c.absolute && g && (g = p.protocol() + '://' + p.host() + (80 == p.port() || 443 == p.port() ? '' : ':' + p.port()) + (!f.html5Mode() && g ? '/' : '') + g), g;
      }, t.get = function (a, b) {
        if (!B(a)) {
          var c = [];
          return G(u, function (a) {
            c.push(a.self);
          }), c;
        }
        var d = l(a, b);
        return d && d.self ? d.self : null;
      }, t;
    }
    function r(a, b, c, d) {
      return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0;
    }
    var s, t, u = {}, v = {}, w = 'abstract', x = {
        parent: function (a) {
          if (B(a.parent) && a.parent)
            return l(a.parent);
          var b = /^(.+)\.[^.]+$/.exec(a.name);
          return b ? l(b[1]) : s;
        },
        data: function (a) {
          return a.parent && a.parent.data && (a.data = a.self.data = H({}, a.parent.data, a.data)), a.data;
        },
        url: function (a) {
          var b = a.url;
          if (D(b))
            return '^' == b.charAt(0) ? e.compile(b.substring(1)) : (a.parent.navigable || s).url.concat(b);
          if (e.isMatcher(b) || null == b)
            return b;
          throw new Error('Invalid url \'' + b + '\' in state \'' + a + '\'');
        },
        navigable: function (a) {
          return a.url ? a : a.parent ? a.parent.navigable : null;
        },
        params: function (a) {
          if (!a.params)
            return a.url ? a.url.parameters() : a.parent.params;
          if (!F(a.params))
            throw new Error('Invalid params in state \'' + a + '\'');
          if (a.url)
            throw new Error('Both params and url specicified in state \'' + a + '\'');
          return a.params;
        },
        views: function (a) {
          var b = {};
          return G(B(a.views) ? a.views : { '': a }, function (c, d) {
            d.indexOf('@') < 0 && (d += '@' + a.parent.name), b[d] = c;
          }), b;
        },
        ownParams: function (a) {
          if (!a.parent)
            return a.params;
          var b = {};
          G(a.params, function (a) {
            b[a] = !0;
          }), G(a.parent.params, function (c) {
            if (!b[c])
              throw new Error('Missing required parameter \'' + c + '\' in state \'' + a.name + '\'');
            b[c] = !1;
          });
          var c = [];
          return G(b, function (a, b) {
            a && c.push(b);
          }), c;
        },
        path: function (a) {
          return a.parent ? a.parent.path.concat(a) : [];
        },
        includes: function (a) {
          var b = a.parent ? H({}, a.parent.includes) : {};
          return b[a.name] = !0, b;
        },
        $delegates: {}
      };
    s = n({
      name: '',
      url: '^',
      views: null,
      'abstract': !0
    }), s.navigable = null, this.decorator = o, this.state = p, this.$get = q, q.$inject = [
      '$rootScope',
      '$q',
      '$view',
      '$injector',
      '$resolve',
      '$stateParams',
      '$location',
      '$urlRouter'
    ];
  }
  function r() {
    function a(a, b) {
      return {
        load: function (c, d) {
          var e, f = {
              template: null,
              controller: null,
              view: null,
              locals: null,
              notify: !0,
              async: !0,
              params: {}
            };
          return d = H(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast('$viewContentLoading', d), e;
        }
      };
    }
    this.$get = a, a.$inject = [
      '$rootScope',
      '$templateFactory'
    ];
  }
  function s() {
    var a = !1;
    this.useAnchorScroll = function () {
      a = !0;
    }, this.$get = [
      '$anchorScroll',
      '$timeout',
      function (b, c) {
        return a ? b : function (a) {
          c(function () {
            a[0].scrollIntoView();
          }, 0, !1);
        };
      }
    ];
  }
  function t(a, c, d, e, f, g) {
    function h() {
      return e.has ? function (a) {
        return e.has(a) ? e.get(a) : null;
      } : function (a) {
        try {
          return e.get(a);
        } catch (b) {
          return null;
        }
      };
    }
    function i(a, b, c) {
      var d = function () {
        return {
          leave: function (a) {
            a.remove();
          },
          enter: function (a, b, c) {
            c.after(a);
          }
        };
      };
      if (m)
        return function (a) {
          return a ? {
            enter: function (a, b, c) {
              m.enter(a, null, c);
            },
            leave: function (a) {
              m.leave(a, function () {
                a.remove();
              });
            }
          } : d();
        };
      if (l) {
        var e = l && l(c, b);
        return function (a) {
          return a ? {
            enter: function (a, b) {
              e.enter(a, b);
            },
            leave: function (a) {
              e.leave(a.contents(), a);
            }
          } : d();
        };
      }
      return d;
    }
    var j = !1, k = h(), l = k('$animator'), m = k('$animate'), n = {
        restrict: 'ECA',
        compile: function (e, h) {
          var k = e.html(), l = !0, m = b.element(g[0].createComment(' ui-view-anchor ')), o = e.parent();
          return e.prepend(m), function (g) {
            function p() {
              s && (y(!0).leave(s), s = null), r && (r.$destroy(), r = null);
            }
            function q(h) {
              var i = a.$current && a.$current.locals[v];
              if (l && (l = !1, e.replaceWith(m)), !i)
                return p(), s = e.clone(), s.html(k), y(h).enter(s, o, m), r = g.$new(), c(s.contents())(r), void 0;
              if (i !== t) {
                p(), s = e.clone(), s.html(i.$template ? i.$template : k), y(!0).enter(s, o, m), s.data('$uiView', z), t = i, z.state = i.$$state;
                var j = c(s.contents());
                if (r = g.$new(), i.$$controller) {
                  i.$scope = r;
                  var n = d(i.$$controller, i);
                  s.children().data('$ngControllerController', n);
                }
                j(r), r.$emit('$viewContentLoaded'), w && r.$eval(w), b.isDefined(x) && x && !g.$eval(x) || f(s);
              }
            }
            var r, s, t, u = o.inheritedData('$uiView'), v = h[n.name] || h.name || '', w = h.onload || '', x = h.autoscroll, y = i(e, h, g);
            v.indexOf('@') < 0 && (v = v + '@' + (u ? u.state.name : ''));
            var z = {
                name: v,
                state: null
              }, A = function () {
                if (!j) {
                  j = !0;
                  try {
                    q(!0);
                  } catch (a) {
                    throw j = !1, a;
                  }
                  j = !1;
                }
              };
            g.$on('$stateChangeSuccess', A), g.$on('$viewContentLoading', A), q(!1);
          };
        }
      };
    return n;
  }
  function u(a) {
    var b = a.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/);
    if (!b || 4 !== b.length)
      throw new Error('Invalid state ref \'' + a + '\'');
    return {
      state: b[1],
      paramExpr: b[3] || null
    };
  }
  function v(a) {
    var b = a.parent().inheritedData('$uiView');
    return b && b.state && b.state.name ? b.state : void 0;
  }
  function w(a, b) {
    return {
      restrict: 'A',
      require: '?^uiSrefActive',
      link: function (c, d, e, f) {
        var g = u(e.uiSref), h = null, i = v(d) || a.$current, j = 'FORM' === d[0].nodeName, k = j ? 'action' : 'href', l = !0, m = function (b) {
            if (b && (h = b), l) {
              var c = a.href(g.state, h, { relative: i });
              return f && f.$$setStateInfo(g.state, h), c ? (d[0][k] = c, void 0) : (l = !1, !1);
            }
          };
        g.paramExpr && (c.$watch(g.paramExpr, function (a) {
          a !== h && m(a);
        }, !0), h = c.$eval(g.paramExpr)), m(), j || d.bind('click', function (c) {
          var e = c.which || c.button;
          0 !== e && 1 != e || c.ctrlKey || c.metaKey || c.shiftKey || d.attr('target') || (b(function () {
            a.go(g.state, h, { relative: i });
          }), c.preventDefault());
        });
      }
    };
  }
  function x(a, b, c) {
    return {
      restrict: 'A',
      controller: [
        '$scope',
        '$element',
        '$attrs',
        function (d, e, f) {
          function g() {
            a.$current.self === i && h() ? e.addClass(l) : e.removeClass(l);
          }
          function h() {
            return !k || j(k, b);
          }
          var i, k, l;
          l = c(f.uiSrefActive || '', !1)(d), this.$$setStateInfo = function (b, c) {
            i = a.get(b, v(e)), k = c, g();
          }, d.$on('$stateChangeSuccess', g);
        }
      ]
    };
  }
  function y(a) {
    return function (b) {
      return a.is(b);
    };
  }
  function z(a) {
    return function (b) {
      return a.includes(b);
    };
  }
  function A(a, b) {
    function e(a) {
      this.locals = a.locals.globals, this.params = this.locals.$stateParams;
    }
    function f() {
      this.locals = null, this.params = null;
    }
    function g(c, g) {
      if (null != g.redirectTo) {
        var h, j = g.redirectTo;
        if (D(j))
          h = j;
        else {
          if (!C(j))
            throw new Error('Invalid \'redirectTo\' in when()');
          h = function (a, b) {
            return j(a, b.path(), b.search());
          };
        }
        b.when(c, h);
      } else
        a.state(d(g, {
          parent: null,
          name: 'route:' + encodeURIComponent(c),
          url: c,
          onEnter: e,
          onExit: f
        }));
      return i.push(g), this;
    }
    function h(a, b, d) {
      function e(a) {
        return '' !== a.name ? a : c;
      }
      var f = {
          routes: i,
          params: d,
          current: c
        };
      return b.$on('$stateChangeStart', function (a, c, d, f) {
        b.$broadcast('$routeChangeStart', e(c), e(f));
      }), b.$on('$stateChangeSuccess', function (a, c, d, g) {
        f.current = e(c), b.$broadcast('$routeChangeSuccess', e(c), e(g)), I(d, f.params);
      }), b.$on('$stateChangeError', function (a, c, d, f, g, h) {
        b.$broadcast('$routeChangeError', e(c), e(f), h);
      }), f;
    }
    var i = [];
    e.$inject = ['$$state'], this.when = g, this.$get = h, h.$inject = [
      '$state',
      '$rootScope',
      '$routeParams'
    ];
  }
  var B = b.isDefined, C = b.isFunction, D = b.isString, E = b.isObject, F = b.isArray, G = b.forEach, H = b.extend, I = b.copy;
  b.module('ui.router.util', ['ng']), b.module('ui.router.router', ['ui.router.util']), b.module('ui.router.state', [
    'ui.router.router',
    'ui.router.util'
  ]), b.module('ui.router', ['ui.router.state']), b.module('ui.router.compat', ['ui.router']), l.$inject = [
    '$q',
    '$injector'
  ], b.module('ui.router.util').service('$resolve', l), m.$inject = [
    '$http',
    '$templateCache',
    '$injector'
  ], b.module('ui.router.util').service('$templateFactory', m), n.prototype.concat = function (a) {
    return new n(this.sourcePath + a + this.sourceSearch);
  }, n.prototype.toString = function () {
    return this.source;
  }, n.prototype.exec = function (a, b) {
    var c = this.regexp.exec(a);
    if (!c)
      return null;
    var d, e = this.params, f = e.length, g = this.segments.length - 1, h = {};
    if (g !== c.length - 1)
      throw new Error('Unbalanced capture group in route \'' + this.source + '\'');
    for (d = 0; g > d; d++)
      h[e[d]] = c[d + 1];
    for (; f > d; d++)
      h[e[d]] = b[e[d]];
    return h;
  }, n.prototype.parameters = function () {
    return this.params;
  }, n.prototype.format = function (a) {
    var b = this.segments, c = this.params;
    if (!a)
      return b.join('');
    var d, e, f, g = b.length - 1, h = c.length, i = b[0];
    for (d = 0; g > d; d++)
      f = a[c[d]], null != f && (i += encodeURIComponent(f)), i += b[d + 1];
    for (; h > d; d++)
      f = a[c[d]], null != f && (i += (e ? '&' : '?') + c[d] + '=' + encodeURIComponent(f), e = !0);
    return i;
  }, b.module('ui.router.util').provider('$urlMatcherFactory', o), p.$inject = ['$urlMatcherFactoryProvider'], b.module('ui.router.router').provider('$urlRouter', p), q.$inject = [
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    '$locationProvider'
  ], b.module('ui.router.state').value('$stateParams', {}).provider('$state', q), r.$inject = [], b.module('ui.router.state').provider('$view', r), b.module('ui.router.state').provider('$uiViewScroll', s), t.$inject = [
    '$state',
    '$compile',
    '$controller',
    '$injector',
    '$uiViewScroll',
    '$document'
  ], b.module('ui.router.state').directive('uiView', t), w.$inject = [
    '$state',
    '$timeout'
  ], x.$inject = [
    '$state',
    '$stateParams',
    '$interpolate'
  ], b.module('ui.router.state').directive('uiSref', w).directive('uiSrefActive', x), y.$inject = ['$state'], z.$inject = ['$state'], b.module('ui.router.state').filter('isState', y).filter('includedByState', z), A.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ], b.module('ui.router.compat').provider('$route', A).directive('ngView', t);
}(window, window.angular);
/*!
 * angular-translate - v2.5.2 - 2014-12-10
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module('pascalprecht.translate', ['ng']).run([
  '$translate',
  function (a) {
    var b = a.storageKey(), c = a.storage(), d = function () {
        var d = a.preferredLanguage();
        angular.isString(d) ? a.use(d) : c.put(b, a.use());
      };
    c ? c.get(b) ? a.use(c.get(b))['catch'](d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage());
  }
]), angular.module('pascalprecht.translate').provider('$translate', [
  '$STORAGE_KEY',
  function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = [], s = a, t = [], u = !1, v = 'translate-cloak', w = !1, x = '.', y = '2.5.2', z = function () {
        var a, b, c = window.navigator, d = [
            'language',
            'browserLanguage',
            'systemLanguage',
            'userLanguage'
          ];
        if (angular.isArray(c.languages))
          for (a = 0; a < c.languages.length; a++)
            if (b = c.languages[a], b && b.length)
              return b;
        for (a = 0; a < d.length; a++)
          if (b = c[d[a]], b && b.length)
            return b;
        return null;
      };
    z.displayName = 'angular-translate/service: getFirstBrowserLanguage';
    var A = function () {
      return (z() || '').split('-').join('_');
    };
    A.displayName = 'angular-translate/service: getLocale';
    var B = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b)
            return c;
        return -1;
      }, C = function () {
        return this.replace(/^\s+|\s+$/g, '');
      }, D = function (a) {
        for (var b = [], d = angular.lowercase(a), e = 0, f = r.length; f > e; e++)
          b.push(angular.lowercase(r[e]));
        if (B(b, d) > -1)
          return a;
        if (c) {
          var g;
          for (var h in c) {
            var i = !1, j = Object.prototype.hasOwnProperty.call(c, h) && angular.lowercase(h) === angular.lowercase(a);
            if ('*' === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = c[h], B(b, angular.lowercase(g)) > -1))
              return g;
          }
        }
        var k = a.split('_');
        return k.length > 1 && B(b, angular.lowercase(k[0])) > -1 ? k[0] : a;
      }, E = function (a, b) {
        if (!a && !b)
          return q;
        if (a && !b) {
          if (angular.isString(a))
            return q[a];
        } else
          angular.isObject(q[a]) || (q[a] = {}), angular.extend(q[a], F(b));
        return this;
      };
    this.translations = E, this.cloakClassName = function (a) {
      return a ? (v = a, this) : v;
    };
    var F = function (a, b, c, d) {
      var e, f, g, h;
      b || (b = []), c || (c = {});
      for (e in a)
        Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? F(h, b.concat(e), c, e) : (f = b.length ? '' + b.join(x) + x + e : e, b.length && e === d && (g = '' + b.join(x), c[g] = '@:' + f), c[f] = h));
      return c;
    };
    this.addInterpolation = function (a) {
      return t.push(a), this;
    }, this.useMessageFormatInterpolation = function () {
      return this.useInterpolation('$translateMessageFormatInterpolation');
    }, this.useInterpolation = function (a) {
      return k = a, this;
    }, this.useSanitizeValueStrategy = function (a) {
      return u = a, this;
    }, this.preferredLanguage = function (a) {
      return G(a), this;
    };
    var G = function (a) {
      return a && (b = a), b;
    };
    this.translationNotFoundIndicator = function (a) {
      return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), this;
    }, this.translationNotFoundIndicatorLeft = function (a) {
      return a ? (n = a, this) : n;
    }, this.translationNotFoundIndicatorRight = function (a) {
      return a ? (o = a, this) : o;
    }, this.fallbackLanguage = function (a) {
      return H(a), this;
    };
    var H = function (a) {
      return a ? (angular.isString(a) ? (e = !0, d = [a]) : angular.isArray(a) && (e = !1, d = a), angular.isString(b) && B(d, b) < 0 && d.push(b), this) : e ? d[0] : d;
    };
    this.use = function (a) {
      if (a) {
        if (!q[a] && !l)
          throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + a + '\'');
        return f = a, this;
      }
      return f;
    };
    var I = function (a) {
      return a ? void (s = a) : i ? i + s : s;
    };
    this.storageKey = I, this.useUrlLoader = function (a, b) {
      return this.useLoader('$translateUrlLoader', angular.extend({ url: a }, b));
    }, this.useStaticFilesLoader = function (a) {
      return this.useLoader('$translateStaticFilesLoader', a);
    }, this.useLoader = function (a, b) {
      return l = a, m = b || {}, this;
    }, this.useLocalStorage = function () {
      return this.useStorage('$translateLocalStorage');
    }, this.useCookieStorage = function () {
      return this.useStorage('$translateCookieStorage');
    }, this.useStorage = function (a) {
      return h = a, this;
    }, this.storagePrefix = function (a) {
      return a ? (i = a, this) : a;
    }, this.useMissingTranslationHandlerLog = function () {
      return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
    }, this.useMissingTranslationHandler = function (a) {
      return j = a, this;
    }, this.usePostCompiling = function (a) {
      return w = !!a, this;
    }, this.determinePreferredLanguage = function (a) {
      var c = a && angular.isFunction(a) ? a() : A();
      return b = r.length ? D(c) : c, this;
    }, this.registerAvailableLanguageKeys = function (a, b) {
      return a ? (r = a, b && (c = b), this) : r;
    }, this.useLoaderCache = function (a) {
      return a === !1 ? p = void 0 : a === !0 ? p = !0 : 'undefined' == typeof a ? p = '$translationCache' : a && (p = a), this;
    }, this.$get = [
      '$log',
      '$injector',
      '$rootScope',
      '$q',
      function (a, c, i, r) {
        var x, z, A, J = c.get(k || '$translateDefaultInterpolation'), K = !1, L = {}, M = {}, N = function (a, c, e) {
            if (angular.isArray(a)) {
              var g = function (a) {
                for (var b = {}, d = [], f = function (a) {
                      var d = r.defer(), f = function (c) {
                          b[a] = c, d.resolve([
                            a,
                            c
                          ]);
                        };
                      return N(a, c, e).then(f, f), d.promise;
                    }, g = 0, h = a.length; h > g; g++)
                  d.push(f(a[g]));
                return r.all(d).then(function () {
                  return b;
                });
              };
              return g(a);
            }
            var i = r.defer();
            a && (a = C.apply(a));
            var j = function () {
                var a = b ? M[b] : M[f];
                if (z = 0, h && !a) {
                  var c = x.get(s);
                  if (a = M[c], d && d.length) {
                    var e = B(d, c);
                    z = 0 === e ? 1 : 0, B(d, b) < 0 && d.push(b);
                  }
                }
                return a;
              }();
            return j ? j.then(function () {
              Z(a, c, e).then(i.resolve, i.reject);
            }, i.reject) : Z(a, c, e).then(i.resolve, i.reject), i.promise;
          }, O = function (a) {
            return n && (a = [
              n,
              a
            ].join(' ')), o && (a = [
              a,
              o
            ].join(' ')), a;
          }, P = function (a) {
            f = a, i.$emit('$translateChangeSuccess', { language: a }), h && x.put(N.storageKey(), f), J.setLocale(f), angular.forEach(L, function (a, b) {
              L[b].setLocale(f);
            }), i.$emit('$translateChangeEnd', { language: a });
          }, Q = function (a) {
            if (!a)
              throw 'No language key specified for loading.';
            var b = r.defer();
            i.$emit('$translateLoadingStart', { language: a }), K = !0;
            var d = p;
            'string' == typeof d && (d = c.get(d));
            var e = angular.extend({}, m, {
                key: a,
                $http: angular.extend({}, { cache: d }, m.$http)
              });
            return c.get(l)(e).then(function (c) {
              var d = {};
              i.$emit('$translateLoadingSuccess', { language: a }), angular.isArray(c) ? angular.forEach(c, function (a) {
                angular.extend(d, F(a));
              }) : angular.extend(d, F(c)), K = !1, b.resolve({
                key: a,
                table: d
              }), i.$emit('$translateLoadingEnd', { language: a });
            }, function (a) {
              i.$emit('$translateLoadingError', { language: a }), b.reject(a), i.$emit('$translateLoadingEnd', { language: a });
            }), b.promise;
          };
        if (h && (x = c.get(h), !x.get || !x.put))
          throw new Error('Couldn\'t use storage \'' + h + '\', missing get() or put() method!');
        angular.isFunction(J.useSanitizeValueStrategy) && J.useSanitizeValueStrategy(u), t.length && angular.forEach(t, function (a) {
          var d = c.get(a);
          d.setLocale(b || f), angular.isFunction(d.useSanitizeValueStrategy) && d.useSanitizeValueStrategy(u), L[d.getInterpolationIdentifier()] = d;
        });
        var R = function (a) {
            var b = r.defer();
            return Object.prototype.hasOwnProperty.call(q, a) ? b.resolve(q[a]) : M[a] ? M[a].then(function (a) {
              E(a.key, a.table), b.resolve(a.table);
            }, b.reject) : b.reject(), b.promise;
          }, S = function (a, b, c, d) {
            var e = r.defer();
            return R(a).then(function (g) {
              Object.prototype.hasOwnProperty.call(g, b) ? (d.setLocale(a), e.resolve(d.interpolate(g[b], c)), d.setLocale(f)) : e.reject();
            }, e.reject), e.promise;
          }, T = function (a, b, c, d) {
            var e, g = q[a];
            return g && Object.prototype.hasOwnProperty.call(g, b) && (d.setLocale(a), e = d.interpolate(g[b], c), d.setLocale(f)), e;
          }, U = function (a) {
            if (j) {
              var b = c.get(j)(a, f);
              return void 0 !== b ? b : a;
            }
            return a;
          }, V = function (a, b, c, e) {
            var f = r.defer();
            if (a < d.length) {
              var g = d[a];
              S(g, b, c, e).then(f.resolve, function () {
                V(a + 1, b, c, e).then(f.resolve);
              });
            } else
              f.resolve(U(b));
            return f.promise;
          }, W = function (a, b, c, e) {
            var f;
            if (a < d.length) {
              var g = d[a];
              f = T(g, b, c, e), f || (f = W(a + 1, b, c, e));
            }
            return f;
          }, X = function (a, b, c) {
            return V(A > 0 ? A : z, a, b, c);
          }, Y = function (a, b, c) {
            return W(A > 0 ? A : z, a, b, c);
          }, Z = function (a, b, c) {
            var e = r.defer(), g = f ? q[f] : q, h = c ? L[c] : J;
            if (g && Object.prototype.hasOwnProperty.call(g, a)) {
              var i = g[a];
              '@:' === i.substr(0, 2) ? N(i.substr(2), b, c).then(e.resolve, e.reject) : e.resolve(h.interpolate(i, b));
            } else {
              var k;
              j && !K && (k = U(a)), f && d && d.length ? X(a, b, h).then(function (a) {
                e.resolve(a);
              }, function (a) {
                e.reject(O(a));
              }) : j && !K && k ? e.resolve(k) : e.reject(O(a));
            }
            return e.promise;
          }, $ = function (a, b, c) {
            var e, g = f ? q[f] : q, h = c ? L[c] : J;
            if (g && Object.prototype.hasOwnProperty.call(g, a)) {
              var i = g[a];
              e = '@:' === i.substr(0, 2) ? $(i.substr(2), b, c) : h.interpolate(i, b);
            } else {
              var k;
              j && !K && (k = U(a)), f && d && d.length ? (z = 0, e = Y(a, b, h)) : e = j && !K && k ? k : O(a);
            }
            return e;
          };
        if (N.preferredLanguage = function (a) {
            return a && G(a), b;
          }, N.cloakClassName = function () {
            return v;
          }, N.fallbackLanguage = function (a) {
            if (void 0 !== a && null !== a) {
              if (H(a), l && d && d.length)
                for (var b = 0, c = d.length; c > b; b++)
                  M[d[b]] || (M[d[b]] = Q(d[b]));
              N.use(N.use());
            }
            return e ? d[0] : d;
          }, N.useFallbackLanguage = function (a) {
            if (void 0 !== a && null !== a)
              if (a) {
                var b = B(d, a);
                b > -1 && (A = b);
              } else
                A = 0;
          }, N.proposedLanguage = function () {
            return g;
          }, N.storage = function () {
            return x;
          }, N.use = function (a) {
            if (!a)
              return f;
            var b = r.defer();
            i.$emit('$translateChangeStart', { language: a });
            var c = D(a);
            return c && (a = c), q[a] || !l || M[a] ? (b.resolve(a), P(a)) : (g = a, M[a] = Q(a).then(function (c) {
              return E(c.key, c.table), b.resolve(c.key), P(c.key), g === a && (g = void 0), c;
            }, function (a) {
              g === a && (g = void 0), i.$emit('$translateChangeError', { language: a }), b.reject(a), i.$emit('$translateChangeEnd', { language: a });
            })), b.promise;
          }, N.storageKey = function () {
            return I();
          }, N.isPostCompilingEnabled = function () {
            return w;
          }, N.refresh = function (a) {
            function b() {
              e.resolve(), i.$emit('$translateRefreshEnd', { language: a });
            }
            function c() {
              e.reject(), i.$emit('$translateRefreshEnd', { language: a });
            }
            if (!l)
              throw new Error('Couldn\'t refresh translation table, no loader registered!');
            var e = r.defer();
            if (i.$emit('$translateRefreshStart', { language: a }), a)
              q[a] ? Q(a).then(function (c) {
                E(c.key, c.table), a === f && P(f), b();
              }, c) : c();
            else {
              var g = [], h = {};
              if (d && d.length)
                for (var j = 0, k = d.length; k > j; j++)
                  g.push(Q(d[j])), h[d[j]] = !0;
              f && !h[f] && g.push(Q(f)), r.all(g).then(function (a) {
                angular.forEach(a, function (a) {
                  q[a.key] && delete q[a.key], E(a.key, a.table);
                }), f && P(f), b();
              });
            }
            return e.promise;
          }, N.instant = function (a, c, e) {
            if (null === a || angular.isUndefined(a))
              return a;
            if (angular.isArray(a)) {
              for (var g = {}, h = 0, i = a.length; i > h; h++)
                g[a[h]] = N.instant(a[h], c, e);
              return g;
            }
            if (angular.isString(a) && a.length < 1)
              return a;
            a && (a = C.apply(a));
            var k, l = [];
            b && l.push(b), f && l.push(f), d && d.length && (l = l.concat(d));
            for (var m = 0, n = l.length; n > m; m++) {
              var o = l[m];
              if (q[o] && 'undefined' != typeof q[o][a] && (k = $(a, c, e)), 'undefined' != typeof k)
                break;
            }
            return k || '' === k || (k = J.interpolate(a, c), j && !K && (k = U(a))), k;
          }, N.versionInfo = function () {
            return y;
          }, N.loaderCache = function () {
            return p;
          }, l && (angular.equals(q, {}) && N.use(N.use()), d && d.length))
          for (var _ = function (a) {
                return E(a.key, a.table), i.$emit('$translateChangeEnd', { language: a.key }), a;
              }, ab = 0, bb = d.length; bb > ab; ab++)
            M[d[ab]] = Q(d[ab]).then(_);
        return N;
      }
    ];
  }
]), angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', [
  '$interpolate',
  function (a) {
    var b, c = {}, d = 'default', e = null, f = {
        escaped: function (a) {
          var b = {};
          for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && (b[c] = angular.element('<div></div>').text(a[c]).html());
          return b;
        }
      }, g = function (a) {
        var b;
        return b = angular.isFunction(f[e]) ? f[e](a) : a;
      };
    return c.setLocale = function (a) {
      b = a;
    }, c.getInterpolationIdentifier = function () {
      return d;
    }, c.useSanitizeValueStrategy = function (a) {
      return e = a, this;
    }, c.interpolate = function (b, c) {
      return e && (c = g(c)), a(b)(c || {});
    }, c;
  }
]), angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY'), angular.module('pascalprecht.translate').directive('translate', [
  '$translate',
  '$q',
  '$interpolate',
  '$compile',
  '$parse',
  '$rootScope',
  function (a, b, c, d, e, f) {
    return {
      restrict: 'AE',
      scope: !0,
      compile: function (b, g) {
        var h = g.translateValues ? g.translateValues : void 0, i = g.translateInterpolation ? g.translateInterpolation : void 0, j = b[0].outerHTML.match(/translate-value-+/i), k = '^(.*)(' + c.startSymbol() + '.*' + c.endSymbol() + ')(.*)', l = '^(.*)' + c.startSymbol() + '(.*)' + c.endSymbol() + '(.*)';
        return function (b, m, n) {
          b.interpolateParams = {}, b.preText = '', b.postText = '';
          var o = {}, p = function (a) {
              if (angular.equals(a, '') || !angular.isDefined(a)) {
                var d = m.text().match(k);
                angular.isArray(d) ? (b.preText = d[1], b.postText = d[3], o.translate = c(d[2])(b.$parent), watcherMatches = m.text().match(l), angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length && b.$watch(watcherMatches[2], function (a) {
                  o.translate = a, u();
                })) : o.translate = m.text().replace(/^\s+|\s+$/g, '');
              } else
                o.translate = a;
              u();
            }, q = function (a) {
              n.$observe(a, function (b) {
                o[a] = b, u();
              });
            };
          n.$observe('translate', function (a) {
            p(a);
          });
          for (var r in n)
            n.hasOwnProperty(r) && 'translateAttr' === r.substr(0, 13) && q(r);
          if (n.$observe('translateDefault', function (a) {
              b.defaultText = a;
            }), h && n.$observe('translateValues', function (a) {
              a && b.$parent.$watch(function () {
                angular.extend(b.interpolateParams, e(a)(b.$parent));
              });
            }), j) {
            var s = function (a) {
              n.$observe(a, function (c) {
                var d = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                b.interpolateParams[d] = c;
              });
            };
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && 'translateValue' === t.substr(0, 14) && 'translateValues' !== t && s(t);
          }
          var u = function () {
              for (var a in o)
                o.hasOwnProperty(a) && o[a] && v(a, o[a], b, b.interpolateParams);
            }, v = function (b, c, d, e) {
              a(c, e, i).then(function (a) {
                w(a, d, !0, b);
              }, function (a) {
                w(a, d, !1, b);
              });
            }, w = function (b, c, e, f) {
              if ('translate' === f) {
                e || 'undefined' == typeof c.defaultText || (b = c.defaultText), m.html(c.preText + b + c.postText);
                var h = a.isPostCompilingEnabled(), i = 'undefined' != typeof g.translateCompile, j = i && 'false' !== g.translateCompile;
                (h && !i || j) && d(m.contents())(c);
              } else {
                e || 'undefined' == typeof c.defaultText || (b = c.defaultText);
                var k = n.$attr[f].substr(15);
                m.attr(k, b);
              }
            };
          b.$watch('interpolateParams', u, !0);
          var x = f.$on('$translateChangeSuccess', u);
          m.text().length && p(''), u(), b.$on('$destroy', x);
        };
      }
    };
  }
]), angular.module('pascalprecht.translate').directive('translateCloak', [
  '$rootScope',
  '$translate',
  function (a, b) {
    return {
      compile: function (c) {
        var d = function () {
            c.addClass(b.cloakClassName());
          }, e = function () {
            c.removeClass(b.cloakClassName());
          }, f = a.$on('$translateChangeEnd', function () {
            e(), f(), f = null;
          });
        return d(), function (a, c, f) {
          f.translateCloak && f.translateCloak.length && f.$observe('translateCloak', function (a) {
            b(a).then(e, d);
          });
        };
      }
    };
  }
]), angular.module('pascalprecht.translate').filter('translate', [
  '$parse',
  '$translate',
  function (a, b) {
    var c = function (c, d, e) {
      return angular.isObject(d) || (d = a(d)(this)), b.instant(c, d, e);
    };
    return c.$stateful = !0, c;
  }
]);
/*!
 * angular-translate - v2.5.2 - 2014-12-10
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module('pascalprecht.translate').factory('$translateUrlLoader', [
  '$q',
  '$http',
  function (a, b) {
    return function (c) {
      if (!c || !c.url)
        throw new Error('Couldn\'t use urlLoader since no url is given!');
      var d = a.defer(), e = {};
      return e[c.queryParameter || 'lang'] = c.key, b(angular.extend({
        url: c.url,
        params: e,
        method: 'GET'
      }, c.$http)).success(function (a) {
        d.resolve(a);
      }).error(function () {
        d.reject(c.key);
      }), d.promise;
    };
  }
]);
/*
 AngularJS v1.3.9
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (p, f, n) {
  'use strict';
  f.module('ngCookies', ['ng']).factory('$cookies', [
    '$rootScope',
    '$browser',
    function (e, b) {
      var c = {}, g = {}, h, k = !1, l = f.copy, m = f.isUndefined;
      b.addPollFn(function () {
        var a = b.cookies();
        h != a && (h = a, l(a, g), l(a, c), k && e.$apply());
      })();
      k = !0;
      e.$watch(function () {
        var a, d, e;
        for (a in g)
          m(c[a]) && b.cookies(a, n);
        for (a in c)
          d = c[a], f.isString(d) || (d = '' + d, c[a] = d), d !== g[a] && (b.cookies(a, d), e = !0);
        if (e)
          for (a in d = b.cookies(), c)
            c[a] !== d[a] && (m(d[a]) ? delete c[a] : c[a] = d[a]);
      });
      return c;
    }
  ]).factory('$cookieStore', [
    '$cookies',
    function (e) {
      return {
        get: function (b) {
          return (b = e[b]) ? f.fromJson(b) : b;
        },
        put: function (b, c) {
          e[b] = f.toJson(c);
        },
        remove: function (b) {
          delete e[b];
        }
      };
    }
  ]);
}(window, window.angular));
/*
 AngularJS v1.2.25
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (H, a, A) {
  'use strict';
  function D(p, g) {
    g = g || {};
    a.forEach(g, function (a, c) {
      delete g[c];
    });
    for (var c in p)
      !p.hasOwnProperty(c) || '$' === c.charAt(0) && '$' === c.charAt(1) || (g[c] = p[c]);
    return g;
  }
  var v = a.$$minErr('$resource'), C = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
  a.module('ngResource', ['ng']).factory('$resource', [
    '$http',
    '$q',
    function (p, g) {
      function c(a, c) {
        this.template = a;
        this.defaults = c || {};
        this.urlParams = {};
      }
      function t(n, w, l) {
        function r(h, d) {
          var e = {};
          d = x({}, w, d);
          s(d, function (b, d) {
            u(b) && (b = b());
            var k;
            if (b && b.charAt && '@' == b.charAt(0)) {
              k = h;
              var a = b.substr(1);
              if (null == a || '' === a || 'hasOwnProperty' === a || !C.test('.' + a))
                throw v('badmember', a);
              for (var a = a.split('.'), f = 0, c = a.length; f < c && k !== A; f++) {
                var g = a[f];
                k = null !== k ? k[g] : A;
              }
            } else
              k = b;
            e[d] = k;
          });
          return e;
        }
        function e(a) {
          return a.resource;
        }
        function f(a) {
          D(a || {}, this);
        }
        var F = new c(n);
        l = x({}, B, l);
        s(l, function (h, d) {
          var c = /^(POST|PUT|PATCH)$/i.test(h.method);
          f[d] = function (b, d, k, w) {
            var q = {}, n, l, y;
            switch (arguments.length) {
            case 4:
              y = w, l = k;
            case 3:
            case 2:
              if (u(d)) {
                if (u(b)) {
                  l = b;
                  y = d;
                  break;
                }
                l = d;
                y = k;
              } else {
                q = b;
                n = d;
                l = k;
                break;
              }
            case 1:
              u(b) ? l = b : c ? n = b : q = b;
              break;
            case 0:
              break;
            default:
              throw v('badargs', arguments.length);
            }
            var t = this instanceof f, m = t ? n : h.isArray ? [] : new f(n), z = {}, B = h.interceptor && h.interceptor.response || e, C = h.interceptor && h.interceptor.responseError || A;
            s(h, function (a, b) {
              'params' != b && ('isArray' != b && 'interceptor' != b) && (z[b] = G(a));
            });
            c && (z.data = n);
            F.setUrlParams(z, x({}, r(n, h.params || {}), q), h.url);
            q = p(z).then(function (b) {
              var d = b.data, k = m.$promise;
              if (d) {
                if (a.isArray(d) !== !!h.isArray)
                  throw v('badcfg', h.isArray ? 'array' : 'object', a.isArray(d) ? 'array' : 'object');
                h.isArray ? (m.length = 0, s(d, function (b) {
                  'object' === typeof b ? m.push(new f(b)) : m.push(b);
                })) : (D(d, m), m.$promise = k);
              }
              m.$resolved = !0;
              b.resource = m;
              return b;
            }, function (b) {
              m.$resolved = !0;
              (y || E)(b);
              return g.reject(b);
            });
            q = q.then(function (b) {
              var a = B(b);
              (l || E)(a, b.headers);
              return a;
            }, C);
            return t ? q : (m.$promise = q, m.$resolved = !1, m);
          };
          f.prototype['$' + d] = function (b, a, k) {
            u(b) && (k = a, a = b, b = {});
            b = f[d].call(this, b, this, a, k);
            return b.$promise || b;
          };
        });
        f.bind = function (a) {
          return t(n, x({}, w, a), l);
        };
        return f;
      }
      var B = {
          get: { method: 'GET' },
          save: { method: 'POST' },
          query: {
            method: 'GET',
            isArray: !0
          },
          remove: { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        }, E = a.noop, s = a.forEach, x = a.extend, G = a.copy, u = a.isFunction;
      c.prototype = {
        setUrlParams: function (c, g, l) {
          var r = this, e = l || r.template, f, p, h = r.urlParams = {};
          s(e.split(/\W/), function (a) {
            if ('hasOwnProperty' === a)
              throw v('badname');
            !/^\d+$/.test(a) && (a && RegExp('(^|[^\\\\]):' + a + '(\\W|$)').test(e)) && (h[a] = !0);
          });
          e = e.replace(/\\:/g, ':');
          g = g || {};
          s(r.urlParams, function (d, c) {
            f = g.hasOwnProperty(c) ? g[c] : r.defaults[c];
            a.isDefined(f) && null !== f ? (p = encodeURIComponent(f).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '%20').replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+'), e = e.replace(RegExp(':' + c + '(\\W|$)', 'g'), function (a, c) {
              return p + c;
            })) : e = e.replace(RegExp('(/?):' + c + '(\\W|$)', 'g'), function (a, c, d) {
              return '/' == d.charAt(0) ? d : c + d;
            });
          });
          e = e.replace(/\/+$/, '') || '/';
          e = e.replace(/\/\.(?=\w+($|\?))/, '.');
          c.url = e.replace(/\/\\\./, '/.');
          s(g, function (a, e) {
            r.urlParams[e] || (c.params = c.params || {}, c.params[e] = a);
          });
        }
      };
      return t;
    }
  ]);
}(window, window.angular));
/*
 AngularJS v1.2.25
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (F, e, O) {
  'use strict';
  e.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function () {
    return function (G, s, g) {
      g = g.ngAnimateChildren;
      e.isString(g) && 0 === g.length ? s.data('$$ngAnimateChildren', !0) : G.$watch(g, function (e) {
        s.data('$$ngAnimateChildren', !!e);
      });
    };
  }).factory('$$animateReflow', [
    '$$rAF',
    '$document',
    function (e, s) {
      return function (g) {
        return e(function () {
          g();
        });
      };
    }
  ]).config([
    '$provide',
    '$animateProvider',
    function (G, s) {
      function g(e) {
        for (var g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.nodeType == aa)
            return l;
        }
      }
      function B(l) {
        return e.element(g(l));
      }
      var m = e.noop, u = e.forEach, P = s.$$selectors, aa = 1, l = '$$ngAnimateState', V = '$$ngAnimateChildren', J = 'ng-animate', n = { running: !0 };
      G.decorator('$animate', [
        '$delegate',
        '$injector',
        '$sniffer',
        '$rootElement',
        '$$asyncCallback',
        '$rootScope',
        '$document',
        function (z, F, $, R, E, H, O) {
          function K(a) {
            var b = a.data(l) || {};
            b.running = !0;
            a.data(l, b);
          }
          function L(a) {
            if (a) {
              var b = [], c = {};
              a = a.substr(1).split('.');
              ($.transitions || $.animations) && b.push(F.get(P['']));
              for (var d = 0; d < a.length; d++) {
                var f = a[d], e = P[f];
                e && !c[f] && (b.push(F.get(e)), c[f] = !0);
              }
              return b;
            }
          }
          function G(a, b, c) {
            function d(a, b) {
              var c = a[b], d = a['before' + b.charAt(0).toUpperCase() + b.substr(1)];
              if (c || d)
                return 'leave' == b && (d = c, c = null), n.push({
                  event: b,
                  fn: c
                }), h.push({
                  event: b,
                  fn: d
                }), !0;
            }
            function f(b, d, e) {
              var f = [];
              u(b, function (a) {
                a.fn && f.push(a);
              });
              var g = 0;
              u(f, function (b, l) {
                var C = function () {
                  a: {
                    if (d) {
                      (d[l] || m)();
                      if (++g < f.length)
                        break a;
                      d = null;
                    }
                    e();
                  }
                };
                switch (b.event) {
                case 'setClass':
                  d.push(b.fn(a, A, k, C));
                  break;
                case 'addClass':
                  d.push(b.fn(a, A || c, C));
                  break;
                case 'removeClass':
                  d.push(b.fn(a, k || c, C));
                  break;
                default:
                  d.push(b.fn(a, C));
                }
              });
              d && 0 === d.length && e();
            }
            var g = a[0];
            if (g) {
              var l = 'setClass' == b, p = l || 'addClass' == b || 'removeClass' == b, A, k;
              e.isArray(c) && (A = c[0], k = c[1], c = A + ' ' + k);
              var x = a.attr('class') + ' ' + c;
              if (M(x)) {
                var t = m, w = [], h = [], q = m, y = [], n = [], x = (' ' + x).replace(/\s+/g, '.');
                u(L(x), function (a) {
                  !d(a, b) && l && (d(a, 'addClass'), d(a, 'removeClass'));
                });
                return {
                  node: g,
                  event: b,
                  className: c,
                  isClassBased: p,
                  isSetClassOperation: l,
                  before: function (a) {
                    t = a;
                    f(h, w, function () {
                      t = m;
                      a();
                    });
                  },
                  after: function (a) {
                    q = a;
                    f(n, y, function () {
                      q = m;
                      a();
                    });
                  },
                  cancel: function () {
                    w && (u(w, function (a) {
                      (a || m)(!0);
                    }), t(!0));
                    y && (u(y, function (a) {
                      (a || m)(!0);
                    }), q(!0));
                  }
                };
              }
            }
          }
          function r(a, b, c, d, f, g, n) {
            function p(d) {
              var e = '$animate:' + d;
              q && (q[e] && 0 < q[e].length) && E(function () {
                c.triggerHandler(e, {
                  event: a,
                  className: b
                });
              });
            }
            function A() {
              p('before');
            }
            function m() {
              p('after');
            }
            function x() {
              p('close');
              n && E(function () {
                n();
              });
            }
            function t() {
              t.hasBeenRun || (t.hasBeenRun = !0, g());
            }
            function w() {
              if (!w.hasBeenRun) {
                w.hasBeenRun = !0;
                var d = c.data(l);
                d && (h && h.isClassBased ? k(c, b) : (E(function () {
                  var d = c.data(l) || {};
                  r == d.index && k(c, b, a);
                }), c.data(l, d)));
                x();
              }
            }
            var h = G(c, a, b);
            if (h) {
              b = h.className;
              var q = e.element._data(h.node), q = q && q.events;
              d || (d = f ? f.parent() : c.parent());
              var y = c.data(l) || {};
              f = y.active || {};
              var z = y.totalActive || 0, C = y.last, D;
              h.isClassBased && (D = y.running || y.disabled || C && !C.isClassBased);
              if (D || N(c, d))
                t(), A(), m(), w();
              else {
                d = !1;
                if (0 < z) {
                  D = [];
                  if (h.isClassBased)
                    'setClass' == C.event ? (D.push(C), k(c, b)) : f[b] && (v = f[b], v.event == a ? d = !0 : (D.push(v), k(c, b)));
                  else if ('leave' == a && f['ng-leave'])
                    d = !0;
                  else {
                    for (var v in f)
                      D.push(f[v]), k(c, v);
                    f = {};
                    z = 0;
                  }
                  0 < D.length && u(D, function (a) {
                    a.cancel();
                  });
                }
                !h.isClassBased || (h.isSetClassOperation || d) || (d = 'addClass' == a == c.hasClass(b));
                if (d)
                  t(), A(), m(), x();
                else {
                  if ('leave' == a)
                    c.one('$destroy', function (a) {
                      a = e.element(this);
                      var b = a.data(l);
                      b && (b = b.active['ng-leave']) && (b.cancel(), k(a, 'ng-leave'));
                    });
                  c.addClass(J);
                  var r = Y++;
                  z++;
                  f[b] = h;
                  c.data(l, {
                    last: h,
                    active: f,
                    index: r,
                    totalActive: z
                  });
                  A();
                  h.before(function (d) {
                    var e = c.data(l);
                    d = d || !e || !e.active[b] || h.isClassBased && e.active[b].event != a;
                    t();
                    !0 === d ? w() : (m(), h.after(w));
                  });
                }
              }
            } else
              t(), A(), m(), w();
          }
          function T(a) {
            if (a = g(a))
              a = e.isFunction(a.getElementsByClassName) ? a.getElementsByClassName(J) : a.querySelectorAll('.' + J), u(a, function (a) {
                a = e.element(a);
                (a = a.data(l)) && a.active && u(a.active, function (a) {
                  a.cancel();
                });
              });
          }
          function k(a, b) {
            if (g(a) == g(R))
              n.disabled || (n.running = !1, n.structural = !1);
            else if (b) {
              var c = a.data(l) || {}, d = !0 === b;
              !d && (c.active && c.active[b]) && (c.totalActive--, delete c.active[b]);
              if (d || !c.totalActive)
                a.removeClass(J), a.removeData(l);
            }
          }
          function N(a, b) {
            if (n.disabled)
              return !0;
            if (g(a) == g(R))
              return n.running;
            var c, d, f;
            do {
              if (0 === b.length)
                break;
              var m = g(b) == g(R), k = m ? n : b.data(l) || {};
              if (k.disabled)
                return !0;
              m && (f = !0);
              !1 !== c && (m = b.data(V), e.isDefined(m) && (c = m));
              d = d || k.running || k.last && !k.last.isClassBased;
            } while (b = b.parent());
            return !f || !c && d;
          }
          var Y = 0;
          R.data(l, n);
          H.$$postDigest(function () {
            H.$$postDigest(function () {
              n.running = !1;
            });
          });
          var Q = s.classNameFilter(), M = Q ? function (a) {
              return Q.test(a);
            } : function () {
              return !0;
            };
          return {
            enter: function (a, b, c, d) {
              a = e.element(a);
              b = b && e.element(b);
              c = c && e.element(c);
              K(a);
              z.enter(a, b, c);
              H.$$postDigest(function () {
                a = B(a);
                r('enter', 'ng-enter', a, b, c, m, d);
              });
            },
            leave: function (a, b) {
              a = e.element(a);
              T(a);
              K(a);
              H.$$postDigest(function () {
                r('leave', 'ng-leave', B(a), null, null, function () {
                  z.leave(a);
                }, b);
              });
            },
            move: function (a, b, c, d) {
              a = e.element(a);
              b = b && e.element(b);
              c = c && e.element(c);
              T(a);
              K(a);
              z.move(a, b, c);
              H.$$postDigest(function () {
                a = B(a);
                r('move', 'ng-move', a, b, c, m, d);
              });
            },
            addClass: function (a, b, c) {
              a = e.element(a);
              a = B(a);
              r('addClass', b, a, null, null, function () {
                z.addClass(a, b);
              }, c);
            },
            removeClass: function (a, b, c) {
              a = e.element(a);
              a = B(a);
              r('removeClass', b, a, null, null, function () {
                z.removeClass(a, b);
              }, c);
            },
            setClass: function (a, b, c, d) {
              a = e.element(a);
              a = B(a);
              r('setClass', [
                b,
                c
              ], a, null, null, function () {
                z.setClass(a, b, c);
              }, d);
            },
            enabled: function (a, b) {
              switch (arguments.length) {
              case 2:
                if (a)
                  k(b);
                else {
                  var c = b.data(l) || {};
                  c.disabled = !0;
                  b.data(l, c);
                }
                break;
              case 1:
                n.disabled = !a;
                break;
              default:
                a = !n.disabled;
              }
              return !!a;
            }
          };
        }
      ]);
      s.register('', [
        '$window',
        '$sniffer',
        '$timeout',
        '$$animateReflow',
        function (l, n, s, B) {
          function E(a, U) {
            S && S();
            W.push(U);
            S = B(function () {
              u(W, function (a) {
                a();
              });
              W = [];
              S = null;
              v = {};
            });
          }
          function H(a, U) {
            var b = g(a);
            a = e.element(b);
            Z.push(a);
            b = Date.now() + U;
            b <= da || (s.cancel(ca), da = b, ca = s(function () {
              G(Z);
              Z = [];
            }, U, !1));
          }
          function G(a) {
            u(a, function (a) {
              (a = a.data(q)) && (a.closeAnimationFn || m)();
            });
          }
          function K(a, b) {
            var c = b ? v[b] : null;
            if (!c) {
              var d = 0, e = 0, f = 0, g = 0, m, k, h, q;
              u(a, function (a) {
                if (a.nodeType == aa) {
                  a = l.getComputedStyle(a) || {};
                  h = a[I + P];
                  d = Math.max(L(h), d);
                  q = a[I + x];
                  m = a[I + t];
                  e = Math.max(L(m), e);
                  k = a[p + t];
                  g = Math.max(L(k), g);
                  var b = L(a[p + P]);
                  0 < b && (b *= parseInt(a[p + w], 10) || 1);
                  f = Math.max(b, f);
                }
              });
              c = {
                total: 0,
                transitionPropertyStyle: q,
                transitionDurationStyle: h,
                transitionDelayStyle: m,
                transitionDelay: e,
                transitionDuration: d,
                animationDelayStyle: k,
                animationDelay: g,
                animationDuration: f
              };
              b && (v[b] = c);
            }
            return c;
          }
          function L(a) {
            var b = 0;
            a = e.isString(a) ? a.split(/\s*,\s*/) : [];
            u(a, function (a) {
              b = Math.max(parseFloat(a) || 0, b);
            });
            return b;
          }
          function J(a) {
            var b = a.parent(), c = b.data(h);
            c || (b.data(h, ++ba), c = ba);
            return c + '-' + g(a).getAttribute('class');
          }
          function r(a, b, c, d) {
            var e = J(b), f = e + ' ' + c, l = v[f] ? ++v[f].total : 0, k = {};
            if (0 < l) {
              var h = c + '-stagger', k = e + ' ' + h;
              (e = !v[k]) && b.addClass(h);
              k = K(b, k);
              e && b.removeClass(h);
            }
            d = d || function (a) {
              return a();
            };
            b.addClass(c);
            var h = b.data(q) || {}, n = d(function () {
                return K(b, f);
              });
            d = n.transitionDuration;
            e = n.animationDuration;
            if (0 === d && 0 === e)
              return b.removeClass(c), !1;
            b.data(q, {
              running: h.running || 0,
              itemIndex: l,
              stagger: k,
              timings: n,
              closeAnimationFn: m
            });
            a = 0 < h.running || 'setClass' == a;
            0 < d && T(b, c, a);
            0 < e && (0 < k.animationDelay && 0 === k.animationDuration) && (g(b).style[p] = 'none 0s');
            return !0;
          }
          function T(a, b, c) {
            'ng-enter' != b && ('ng-move' != b && 'ng-leave' != b) && c ? a.addClass(y) : g(a).style[I + x] = 'none';
          }
          function k(a, b) {
            var c = I + x, d = g(a);
            d.style[c] && 0 < d.style[c].length && (d.style[c] = '');
            a.removeClass(y);
          }
          function N(a) {
            var b = p;
            a = g(a);
            a.style[b] && 0 < a.style[b].length && (a.style[b] = '');
          }
          function Y(a, b, d, e) {
            function k(a) {
              b.off(x, l);
              b.removeClass(m);
              c(b, d);
              a = g(b);
              for (var e in s)
                a.style.removeProperty(s[e]);
            }
            function l(a) {
              a.stopPropagation();
              var b = a.originalEvent || a;
              a = b.$manualTimeStamp || b.timeStamp || Date.now();
              b = parseFloat(b.elapsedTime.toFixed(V));
              Math.max(a - z, 0) >= y && b >= v && e();
            }
            var h = g(b);
            a = b.data(q);
            if (-1 != h.getAttribute('class').indexOf(d) && a) {
              var m = '';
              u(d.split(' '), function (a, b) {
                m += (0 < b ? ' ' : '') + a + '-active';
              });
              var n = a.stagger, p = a.timings, t = a.itemIndex, v = Math.max(p.transitionDuration, p.animationDuration), w = Math.max(p.transitionDelay, p.animationDelay), y = w * D, z = Date.now(), x = A + ' ' + X, r = '', s = [];
              if (0 < p.transitionDuration) {
                var B = p.transitionPropertyStyle;
                -1 == B.indexOf('all') && (r += f + 'transition-property: ' + B + ';', r += f + 'transition-duration: ' + p.transitionDurationStyle + ';', s.push(f + 'transition-property'), s.push(f + 'transition-duration'));
              }
              0 < t && (0 < n.transitionDelay && 0 === n.transitionDuration && (r += f + 'transition-delay: ' + Q(p.transitionDelayStyle, n.transitionDelay, t) + '; ', s.push(f + 'transition-delay')), 0 < n.animationDelay && 0 === n.animationDuration && (r += f + 'animation-delay: ' + Q(p.animationDelayStyle, n.animationDelay, t) + '; ', s.push(f + 'animation-delay')));
              0 < s.length && (p = h.getAttribute('style') || '', h.setAttribute('style', p + '; ' + r));
              b.on(x, l);
              b.addClass(m);
              a.closeAnimationFn = function () {
                k();
                e();
              };
              h = (t * (Math.max(n.animationDelay, n.transitionDelay) || 0) + (w + v) * C) * D;
              a.running++;
              H(b, h);
              return k;
            }
            e();
          }
          function Q(a, b, c) {
            var d = '';
            u(a.split(','), function (a, e) {
              d += (0 < e ? ',' : '') + (c * b + parseInt(a, 10)) + 's';
            });
            return d;
          }
          function M(a, b, d, e) {
            if (r(a, b, d, e))
              return function (a) {
                a && c(b, d);
              };
          }
          function a(a, b, d, e) {
            if (b.data(q))
              return Y(a, b, d, e);
            c(b, d);
            e();
          }
          function b(b, c, d, e) {
            var f = M(b, c, d);
            if (f) {
              var g = f;
              E(c, function () {
                k(c, d);
                N(c);
                g = a(b, c, d, e);
              });
              return function (a) {
                (g || m)(a);
              };
            }
            e();
          }
          function c(a, b) {
            a.removeClass(b);
            var c = a.data(q);
            c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(q));
          }
          function d(a, b) {
            var c = '';
            a = e.isArray(a) ? a : a.split(/\s+/);
            u(a, function (a, d) {
              a && 0 < a.length && (c += (0 < d ? ' ' : '') + a + b);
            });
            return c;
          }
          var f = '', I, X, p, A;
          F.ontransitionend === O && F.onwebkittransitionend !== O ? (f = '-webkit-', I = 'WebkitTransition', X = 'webkitTransitionEnd transitionend') : (I = 'transition', X = 'transitionend');
          F.onanimationend === O && F.onwebkitanimationend !== O ? (f = '-webkit-', p = 'WebkitAnimation', A = 'webkitAnimationEnd animationend') : (p = 'animation', A = 'animationend');
          var P = 'Duration', x = 'Property', t = 'Delay', w = 'IterationCount', h = '$$ngAnimateKey', q = '$$ngAnimateCSS3Data', y = 'ng-animate-block-transitions', V = 3, C = 1.5, D = 1000, v = {}, ba = 0, W = [], S, ca = null, da = 0, Z = [];
          return {
            enter: function (a, c) {
              return b('enter', a, 'ng-enter', c);
            },
            leave: function (a, c) {
              return b('leave', a, 'ng-leave', c);
            },
            move: function (a, c) {
              return b('move', a, 'ng-move', c);
            },
            beforeSetClass: function (a, b, c, e) {
              var f = d(c, '-remove') + ' ' + d(b, '-add'), g = M('setClass', a, f, function (d) {
                  var e = a.attr('class');
                  a.removeClass(c);
                  a.addClass(b);
                  d = d();
                  a.attr('class', e);
                  return d;
                });
              if (g)
                return E(a, function () {
                  k(a, f);
                  N(a);
                  e();
                }), g;
              e();
            },
            beforeAddClass: function (a, b, c) {
              var e = M('addClass', a, d(b, '-add'), function (c) {
                  a.addClass(b);
                  c = c();
                  a.removeClass(b);
                  return c;
                });
              if (e)
                return E(a, function () {
                  k(a, b);
                  N(a);
                  c();
                }), e;
              c();
            },
            setClass: function (b, c, e, f) {
              e = d(e, '-remove');
              c = d(c, '-add');
              return a('setClass', b, e + ' ' + c, f);
            },
            addClass: function (b, c, e) {
              return a('addClass', b, d(c, '-add'), e);
            },
            beforeRemoveClass: function (a, b, c) {
              var e = M('removeClass', a, d(b, '-remove'), function (c) {
                  var d = a.attr('class');
                  a.removeClass(b);
                  c = c();
                  a.attr('class', d);
                  return c;
                });
              if (e)
                return E(a, function () {
                  k(a, b);
                  N(a);
                  c();
                }), e;
              c();
            },
            removeClass: function (b, c, e) {
              return a('removeClass', b, d(c, '-remove'), e);
            }
          };
        }
      ]);
    }
  ]);
}(window, window.angular));
/*
 AngularJS v1.2.25
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (q, g, r) {
  'use strict';
  function F(a) {
    var d = [];
    t(d, g.noop).chars(a);
    return d.join('');
  }
  function m(a) {
    var d = {};
    a = a.split(',');
    var c;
    for (c = 0; c < a.length; c++)
      d[a[c]] = !0;
    return d;
  }
  function G(a, d) {
    function c(a, b, c, h) {
      b = g.lowercase(b);
      if (u[b])
        for (; f.last() && v[f.last()];)
          e('', f.last());
      w[b] && f.last() == b && e('', b);
      (h = x[b] || !!h) || f.push(b);
      var n = {};
      c.replace(H, function (a, b, d, c, e) {
        n[b] = s(d || c || e || '');
      });
      d.start && d.start(b, n, h);
    }
    function e(a, b) {
      var c = 0, e;
      if (b = g.lowercase(b))
        for (c = f.length - 1; 0 <= c && f[c] != b; c--);
      if (0 <= c) {
        for (e = f.length - 1; e >= c; e--)
          d.end && d.end(f[e]);
        f.length = c;
      }
    }
    'string' !== typeof a && (a = null === a || 'undefined' === typeof a ? '' : '' + a);
    var b, l, f = [], n = a, h;
    for (f.last = function () {
        return f[f.length - 1];
      }; a;) {
      h = '';
      l = !0;
      if (f.last() && y[f.last()])
        a = a.replace(RegExp('(.*)<\\s*\\/\\s*' + f.last() + '[^>]*>', 'i'), function (a, b) {
          b = b.replace(I, '$1').replace(J, '$1');
          d.chars && d.chars(s(b));
          return '';
        }), e('', f.last());
      else {
        if (0 === a.indexOf('<!--'))
          b = a.indexOf('--', 4), 0 <= b && a.lastIndexOf('-->', b) === b && (d.comment && d.comment(a.substring(4, b)), a = a.substring(b + 3), l = !1);
        else if (z.test(a)) {
          if (b = a.match(z))
            a = a.replace(b[0], ''), l = !1;
        } else if (K.test(a)) {
          if (b = a.match(A))
            a = a.substring(b[0].length), b[0].replace(A, e), l = !1;
        } else
          L.test(a) && ((b = a.match(B)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(B, c)), l = !1) : (h += '<', a = a.substring(1)));
        l && (b = a.indexOf('<'), h += 0 > b ? a : a.substring(0, b), a = 0 > b ? '' : a.substring(b), d.chars && d.chars(s(h)));
      }
      if (a == n)
        throw M('badparse', a);
      n = a;
    }
    e();
  }
  function s(a) {
    if (!a)
      return '';
    var d = N.exec(a);
    a = d[1];
    var c = d[3];
    if (d = d[2])
      p.innerHTML = d.replace(/</g, '&lt;'), d = 'textContent' in p ? p.textContent : p.innerText;
    return a + d + c;
  }
  function C(a) {
    return a.replace(/&/g, '&amp;').replace(O, function (a) {
      var c = a.charCodeAt(0);
      a = a.charCodeAt(1);
      return '&#' + (1024 * (c - 55296) + (a - 56320) + 65536) + ';';
    }).replace(P, function (a) {
      return '&#' + a.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function t(a, d) {
    var c = !1, e = g.bind(a, a.push);
    return {
      start: function (a, l, f) {
        a = g.lowercase(a);
        !c && y[a] && (c = a);
        c || !0 !== D[a] || (e('<'), e(a), g.forEach(l, function (c, f) {
          var k = g.lowercase(f), l = 'img' === a && 'src' === k || 'background' === k;
          !0 !== Q[k] || !0 === E[k] && !d(c, l) || (e(' '), e(f), e('="'), e(C(c)), e('"'));
        }), e(f ? '/>' : '>'));
      },
      end: function (a) {
        a = g.lowercase(a);
        c || !0 !== D[a] || (e('</'), e(a), e('>'));
        a == c && (c = !1);
      },
      chars: function (a) {
        c || e(C(a));
      }
    };
  }
  var M = g.$$minErr('$sanitize'), B = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, A = /^<\/\s*([\w:-]+)[^>]*>/, H = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, L = /^</, K = /^<\//, I = /\x3c!--(.*?)--\x3e/g, z = /<!DOCTYPE([^>]*?)>/i, J = /<!\[CDATA\[(.*?)]]\x3e/g, O = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, P = /([^\#-~| |!])/g, x = m('area,br,col,hr,img,wbr');
  q = m('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
  r = m('rp,rt');
  var w = g.extend({}, r, q), u = g.extend({}, q, m('address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul')), v = g.extend({}, r, m('a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var')), y = m('script,style'), D = g.extend({}, x, u, v, w), E = m('background,cite,href,longdesc,src,usemap'), Q = g.extend({}, E, m('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width')), p = document.createElement('pre'), N = /^(\s*)([\s\S]*?)(\s*)$/;
  g.module('ngSanitize', []).provider('$sanitize', function () {
    this.$get = [
      '$$sanitizeUri',
      function (a) {
        return function (d) {
          var c = [];
          G(d, t(c, function (c, b) {
            return !/^unsafe/.test(a(c, b));
          }));
          return c.join('');
        };
      }
    ];
  });
  g.module('ngSanitize').filter('linky', [
    '$sanitize',
    function (a) {
      var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, c = /^mailto:/;
      return function (e, b) {
        function l(a) {
          a && k.push(F(a));
        }
        function f(a, c) {
          k.push('<a ');
          g.isDefined(b) && (k.push('target="'), k.push(b), k.push('" '));
          k.push('href="');
          k.push(a);
          k.push('">');
          l(c);
          k.push('</a>');
        }
        if (!e)
          return e;
        for (var n, h = e, k = [], m, p; n = h.match(d);)
          m = n[0], n[2] == n[3] && (m = 'mailto:' + m), p = n.index, l(h.substr(0, p)), f(m, n[0].replace(c, '')), h = h.substring(p + n[0].length);
        l(h);
        return a(k.join(''));
      };
    }
  ]);
}(window, window.angular));
(function () {
  angular.module('socialLinks', []).factory('socialLinker', [
    '$window',
    '$location',
    function ($window, $location) {
      return function (urlFactory) {
        return function (scope, element, attrs) {
          var currentUrl, handler, popupWinAttrs, url;
          currentUrl = attrs.customUrl || $location.absUrl();
          url = urlFactory(scope, currentUrl);
          popupWinAttrs = 'status=no, width=' + (scope.socialWidth || 640) + ', height=' + (scope.socialWidth || 480) + ', resizable=yes, toolbar=no, menubar=no, scrollbars=no, location=no, directories=no';
          if (element[0].nodeName === 'A' && (attrs.href == null || attrs.href === '')) {
            element.attr('href', url);
          }
          element.attr('rel', 'nofollow');
          handler = function (e) {
            var win;
            e.preventDefault();
            url = urlFactory(scope, currentUrl);
            return win = $window.open(url, 'popupwindow', popupWinAttrs).focus();
          };
          element.on('click', handler);
          return scope.$on('$destroy', function () {
            return element.off('click', handler);
          });
        };
      };
    }
  ]).directive('socialFacebook', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function (scope, url) {
          var shareUrl;
          shareUrl = ['https://facebook.com/sharer.php?'];
          shareUrl.push('u=' + encodeURIComponent(url));
          return shareUrl.join('');
        })
      };
    }
  ]).directive('socialTwitter', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: { status: '@status' },
        link: linker(function (scope, url) {
          scope.status || (scope.status = 'Check this out! - ' + url);
          return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(scope.status);
        })
      };
    }
  ]).directive('socialGplus', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function (scope, url) {
          return 'https://plus.google.com/share?url=' + encodeURIComponent(url);
        })
      };
    }
  ]).directive('socialPinterest', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: {
          media: '@media',
          description: '@description'
        },
        link: linker(function (scope, url) {
          return 'http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&amp;media=' + encodeURIComponent(scope.media) + '&amp;description=' + encodeURIComponent(scope.description);
        })
      };
    }
  ]).directive('socialStumbleupon', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function (scope, url) {
          return 'https://stumbleupon.com/submit?url=' + encodeURIComponent(url);
        })
      };
    }
  ]).directive('socialLinkedin', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function (scope, url) {
          return 'https://linkedin.com/shareArticle?url=' + encodeURIComponent(url);
        })
      };
    }
  ]).directive('socialReddit', [
    'socialLinker',
    function (linker) {
      return {
        restrict: 'ACEM',
        scope: true,
        link: linker(function (scope, url) {
          return 'https://www.reddit.com/submit?url=' + encodeURIComponent(url);
        })
      };
    }
  ]);
}.call(this));
/*!
 * angular-translate - v2.5.2 - 2014-12-10
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module('pascalprecht.translate').factory('$translateCookieStorage', [
  '$cookieStore',
  function (a) {
    var b = {
        get: function (b) {
          return a.get(b);
        },
        set: function (b, c) {
          a.put(b, c);
        },
        put: function (b, c) {
          a.put(b, c);
        }
      };
    return b;
  }
]);
/*!
 * ngToast v1.4.0 (http://tameraydin.github.io/ngToast)
 * Copyright 2015 Tamer Aydin
 * Licensed under MIT (http://tameraydin.mit-license.org/)
 */
!function (a, b) {
  'use strict';
  b.module('ngToast.provider', []).provider('ngToast', [function () {
      function a(a) {
        for (var d = Math.floor(1000 * Math.random()); c.indexOf(d) > -1;)
          d = Math.floor(1000 * Math.random());
        this.id = d, this.className = e.className, this.dismissOnTimeout = e.dismissOnTimeout, this.timeout = e.timeout, this.dismissButton = e.dismissButton, this.dismissButtonHtml = e.dismissButtonHtml, this.dismissOnClick = e.dismissOnClick, this.compileContent = e.compileContent, b.extend(this, a);
      }
      var c = [], d = [], e = {
          className: 'success',
          dismissOnTimeout: !0,
          timeout: 4000,
          dismissButton: !1,
          dismissButtonHtml: '&times;',
          dismissOnClick: !0,
          compileContent: !1,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          maxNumber: 0
        };
      this.configure = function (a) {
        b.extend(e, a);
      }, this.$get = [function () {
          return {
            settings: e,
            messages: c,
            dismiss: function (a) {
              if (a) {
                for (var b = c.length - 1; b >= 0; b--)
                  if (c[b].id === a)
                    return c.splice(b, 1), void d.splice(d.indexOf(a), 1);
              } else {
                for (; c.length > 0;)
                  c.pop();
                d = [];
              }
            },
            create: function (b) {
              e.maxNumber > 0 && d.length >= e.maxNumber && this.dismiss(d[0]), b = 'string' == typeof b ? { content: b } : b;
              var f = new a(b);
              return 'bottom' === e.verticalPosition ? c.unshift(f) : c.push(f), d.push(f.id), f.id;
            }
          };
        }];
    }]);
}(window, window.angular), function (a, b) {
  'use strict';
  b.module('ngToast.directives', ['ngToast.provider']).directive('toast', [
    'ngToast',
    '$templateCache',
    '$log',
    function (a, b, c) {
      return {
        replace: !0,
        restrict: 'EA',
        template: '<div class="ng-toast ng-toast--{{hPos}} ng-toast--{{vPos}}"><ul class="ng-toast__list"><toast-message ng-repeat="message in messages" message="message"><span ng-bind-html="message.content"></span></toast-message></ul></div>',
        compile: function (d, e) {
          if (e.template) {
            var f = b.get(e.template);
            f ? d.replaceWith(f) : c.warn('ngToast: Provided template could not be loaded. Please be sure that it is populated before the <toast> element is represented.');
          }
          return function (b) {
            b.hPos = a.settings.horizontalPosition, b.vPos = a.settings.verticalPosition, b.messages = a.messages;
          };
        }
      };
    }
  ]).directive('toastMessage', [
    '$timeout',
    '$compile',
    'ngToast',
    function (a, b, c) {
      return {
        replace: !0,
        transclude: !0,
        restrict: 'EA',
        scope: { message: '=' },
        controller: [
          '$scope',
          'ngToast',
          function (a, b) {
            a.dismiss = function () {
              b.dismiss(a.message.id);
            };
          }
        ],
        template: '<li class="ng-toast__message"><div class="alert alert-{{message.className}}" ng-class="{\'alert-dismissible\': message.dismissButton}"><button type="button" class="close" ng-if="message.dismissButton" ng-bind-html="message.dismissButtonHtml" ng-click="!message.dismissOnClick && dismiss()"></button><span ng-if="!message.compileContent" ng-transclude></span></div></li>',
        link: function (d, e, f, g, h) {
          if (d.message.compileContent) {
            var i;
            h(d, function (a) {
              i = a, e.children().append(i);
            }), a(function () {
              b(i.contents())(d.$parent, function (a) {
                i.replaceWith(a);
              });
            }, 0);
          }
          d.message.dismissOnTimeout && a(function () {
            c.dismiss(d.message.id);
          }, d.message.timeout), d.message.dismissOnClick && e.bind('click', function () {
            c.dismiss(d.message.id), d.$apply();
          });
        }
      };
    }
  ]);
}(window, window.angular), function (a, b) {
  'use strict';
  b.module('ngToast', [
    'ngAnimate',
    'ngSanitize',
    'ngToast.directives',
    'ngToast.provider'
  ]);
}(window, window.angular);
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ('undefined' == typeof jQuery)
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
+function (a) {
  'use strict';
  function b() {
    var a = document.createElement('bootstrap'), b = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
      };
    for (var c in b)
      if (void 0 !== a.style[c])
        return { end: b[c] };
    return !1;
  }
  a.fn.emulateTransitionEnd = function (b) {
    var c = !1, d = this;
    a(this).one('bsTransitionEnd', function () {
      c = !0;
    });
    var e = function () {
      c || a(d).trigger(a.support.transition.end);
    };
    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function (b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var c = a(this), e = c.data('bs.alert');
      e || c.data('bs.alert', e = new d(this)), 'string' == typeof b && e[b].call(c);
    });
  }
  var c = '[data-dismiss="alert"]', d = function (b) {
      a(b).on('click', c, this.close);
    };
  d.VERSION = '3.2.0', d.prototype.close = function (b) {
    function c() {
      f.detach().trigger('closed.bs.alert').remove();
    }
    var d = a(this), e = d.attr('data-target');
    e || (e = d.attr('href'), e = e && e.replace(/.*(?=#[^\s]*$)/, ''));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass('alert') ? d : d.parent()), f.trigger(b = a.Event('close.bs.alert')), b.isDefaultPrevented() || (f.removeClass('in'), a.support.transition && f.hasClass('fade') ? f.one('bsTransitionEnd', c).emulateTransitionEnd(150) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on('click.bs.alert.data-api', c, d.prototype.close);
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.button'), f = 'object' == typeof b && b;
      e || d.data('bs.button', e = new c(this, f)), 'toggle' == b ? e.toggle() : b && e.setState(b);
    });
  }
  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };
  c.VERSION = '3.2.0', c.DEFAULTS = { loadingText: 'loading...' }, c.prototype.setState = function (b) {
    var c = 'disabled', d = this.$element, e = d.is('input') ? 'val' : 'html', f = d.data();
    b += 'Text', null == f.resetText && d.data('resetText', d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function () {
      'loadingText' == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find('input');
      'radio' == c.prop('type') && (c.prop('checked') && this.$element.hasClass('active') ? a = !1 : b.find('.active').removeClass('active')), a && c.prop('checked', !this.$element.hasClass('active')).trigger('change');
    }
    a && this.$element.toggleClass('active');
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass('btn') || (d = d.closest('.btn')), b.call(d, 'toggle'), c.preventDefault();
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.carousel'), f = a.extend({}, c.DEFAULTS, d.data(), 'object' == typeof b && b), g = 'string' == typeof b ? b : f.slide;
      e || d.data('bs.carousel', e = new c(this, f)), 'number' == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }
  var c = function (b, c) {
    this.$element = a(b).on('keydown.bs.carousel', a.proxy(this.keydown, this)), this.$indicators = this.$element.find('.carousel-indicators'), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 'hover' == this.options.pause && this.$element.on('mouseenter.bs.carousel', a.proxy(this.pause, this)).on('mouseleave.bs.carousel', a.proxy(this.cycle, this));
  };
  c.VERSION = '3.2.0', c.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: !0
  }, c.prototype.keydown = function (a) {
    switch (a.which) {
    case 37:
      this.prev();
      break;
    case 39:
      this.next();
      break;
    default:
      return;
    }
    a.preventDefault();
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children('.item'), this.$items.index(a || this.$active);
  }, c.prototype.to = function (b) {
    var c = this, d = this.getItemIndex(this.$active = this.$element.find('.item.active'));
    return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one('slid.bs.carousel', function () {
      c.to(b);
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? 'next' : 'prev', a(this.$items[b]));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find('.next, .prev').length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide('next');
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide('prev');
  }, c.prototype.slide = function (b, c) {
    var d = this.$element.find('.item.active'), e = c || d[b](), f = this.interval, g = 'next' == b ? 'left' : 'right', h = 'next' == b ? 'first' : 'last', i = this;
    if (!e.length) {
      if (!this.options.wrap)
        return;
      e = this.$element.find('.item')[h]();
    }
    if (e.hasClass('active'))
      return this.sliding = !1;
    var j = e[0], k = a.Event('slide.bs.carousel', {
        relatedTarget: j,
        direction: g
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active');
        var l = a(this.$indicators.children()[this.getItemIndex(e)]);
        l && l.addClass('active');
      }
      var m = a.Event('slid.bs.carousel', {
          relatedTarget: j,
          direction: g
        });
      return a.support.transition && this.$element.hasClass('slide') ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one('bsTransitionEnd', function () {
        e.removeClass([
          b,
          g
        ].join(' ')).addClass('active'), d.removeClass([
          'active',
          g
        ].join(' ')), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(1000 * d.css('transition-duration').slice(0, -1))) : (d.removeClass('active'), e.addClass('active'), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  }, a(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (c) {
    var d, e = a(this), f = a(e.attr('data-target') || (d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''));
    if (f.hasClass('carousel')) {
      var g = a.extend({}, f.data(), e.data()), h = e.attr('data-slide-to');
      h && (g.interval = !1), b.call(f, g), h && f.data('bs.carousel').to(h), c.preventDefault();
    }
  }), a(window).on('load', function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.collapse'), f = a.extend({}, c.DEFAULTS, d.data(), 'object' == typeof b && b);
      !e && f.toggle && 'show' == b && (b = !b), e || d.data('bs.collapse', e = new c(this, f)), 'string' == typeof b && e[b]();
    });
  }
  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
  };
  c.VERSION = '3.2.0', c.DEFAULTS = { toggle: !0 }, c.prototype.dimension = function () {
    var a = this.$element.hasClass('width');
    return a ? 'width' : 'height';
  }, c.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass('in')) {
      var c = a.Event('show.bs.collapse');
      if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        var d = this.$parent && this.$parent.find('> .panel > .in');
        if (d && d.length) {
          var e = d.data('bs.collapse');
          if (e && e.transitioning)
            return;
          b.call(d, 'hide'), e || d.data('bs.collapse', null);
        }
        var f = this.dimension();
        this.$element.removeClass('collapse').addClass('collapsing')[f](0), this.transitioning = 1;
        var g = function () {
          this.$element.removeClass('collapsing').addClass('collapse in')[f](''), this.transitioning = 0, this.$element.trigger('shown.bs.collapse');
        };
        if (!a.support.transition)
          return g.call(this);
        var h = a.camelCase([
            'scroll',
            f
          ].join('-'));
        this.$element.one('bsTransitionEnd', a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]);
      }
    }
  }, c.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass('in')) {
      var b = a.Event('hide.bs.collapse');
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass('collapsing').removeClass('collapse').removeClass('in'), this.transitioning = 1;
        var d = function () {
          this.transitioning = 0, this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');
        };
        return a.support.transition ? void this.$element[c](0).one('bsTransitionEnd', a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
      }
    }
  }, c.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };
  var d = a.fn.collapse;
  a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = d, this;
  }, a(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (c) {
    var d, e = a(this), f = e.attr('data-target') || c.preventDefault() || (d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''), g = a(f), h = g.data('bs.collapse'), i = h ? 'toggle' : e.data(), j = e.attr('data-parent'), k = j && a(j);
    h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass('collapsed'), e[g.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')), b.call(g, i);
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    b && 3 === b.which || (a(e).remove(), a(f).each(function () {
      var d = c(a(this)), e = { relatedTarget: this };
      d.hasClass('open') && (d.trigger(b = a.Event('hide.bs.dropdown', e)), b.isDefaultPrevented() || d.removeClass('open').trigger('hidden.bs.dropdown', e));
    }));
  }
  function c(b) {
    var c = b.attr('data-target');
    c || (c = b.attr('href'), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ''));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }
  function d(b) {
    return this.each(function () {
      var c = a(this), d = c.data('bs.dropdown');
      d || c.data('bs.dropdown', d = new g(this)), 'string' == typeof b && d[b].call(c);
    });
  }
  var e = '.dropdown-backdrop', f = '[data-toggle="dropdown"]', g = function (b) {
      a(b).on('click.bs.dropdown', this.toggle);
    };
  g.VERSION = '3.2.0', g.prototype.toggle = function (d) {
    var e = a(this);
    if (!e.is('.disabled, :disabled')) {
      var f = c(e), g = f.hasClass('open');
      if (b(), !g) {
        'ontouchstart' in document.documentElement && !f.closest('.navbar-nav').length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on('click', b);
        var h = { relatedTarget: this };
        if (f.trigger(d = a.Event('show.bs.dropdown', h)), d.isDefaultPrevented())
          return;
        e.trigger('focus'), f.toggleClass('open').trigger('shown.bs.dropdown', h);
      }
      return !1;
    }
  }, g.prototype.keydown = function (b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);
      if (b.preventDefault(), b.stopPropagation(), !d.is('.disabled, :disabled')) {
        var e = c(d), g = e.hasClass('open');
        if (!g || g && 27 == b.keyCode)
          return 27 == b.which && e.find(f).trigger('focus'), d.trigger('click');
        var h = ' li:not(.divider):visible a', i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
        if (i.length) {
          var j = i.index(i.filter(':focus'));
          38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger('focus');
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on('click.bs.dropdown.data-api', b).on('click.bs.dropdown.data-api', '.dropdown form', function (a) {
    a.stopPropagation();
  }).on('click.bs.dropdown.data-api', f, g.prototype.toggle).on('keydown.bs.dropdown.data-api', f + ', [role="menu"], [role="listbox"]', g.prototype.keydown);
}(jQuery), +function (a) {
  'use strict';
  function b(b, d) {
    return this.each(function () {
      var e = a(this), f = e.data('bs.modal'), g = a.extend({}, c.DEFAULTS, e.data(), 'object' == typeof b && b);
      f || e.data('bs.modal', f = new c(this, g)), 'string' == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }
  var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find('.modal-content').load(this.options.remote, a.proxy(function () {
      this.$element.trigger('loaded.bs.modal');
    }, this));
  };
  c.VERSION = '3.2.0', c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var c = this, d = a.Event('show.bs.modal', { relatedTarget: b });
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass('modal-open'), this.setScrollbar(), this.escape(), this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var d = a.support.transition && c.$element.hasClass('fade');
      c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass('in').attr('aria-hidden', !1), c.enforceFocus();
      var e = a.Event('shown.bs.modal', { relatedTarget: b });
      d ? c.$element.find('.modal-dialog').one('bsTransitionEnd', function () {
        c.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(300) : c.$element.trigger('focus').trigger(e);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event('hide.bs.modal'), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass('modal-open'), this.resetScrollbar(), this.escape(), a(document).off('focusin.bs.modal'), this.$element.removeClass('in').attr('aria-hidden', !0).off('click.dismiss.bs.modal'), a.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off('focusin.bs.modal').on('focusin.bs.modal', a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger('focus');
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on('keyup.dismiss.bs.modal', a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off('keyup.dismiss.bs.modal');
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$element.trigger('hidden.bs.modal');
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var c = this, d = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var e = a.support.transition && d;
      if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on('click.dismiss.bs.modal', a.proxy(function (a) {
          a.target === a.currentTarget && ('static' == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
        }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), !b)
        return;
      e ? this.$backdrop.one('bsTransitionEnd', b).emulateTransitionEnd(150) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');
      var f = function () {
        c.removeBackdrop(), b && b();
      };
      a.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', f).emulateTransitionEnd(150) : f();
    } else
      b && b();
  }, c.prototype.checkScrollbar = function () {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css('padding-right') || 0, 10);
    this.scrollbarWidth && this.$body.css('padding-right', a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '');
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement('div');
    a.className = 'modal-scrollbar-measure', this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (c) {
    var d = a(this), e = d.attr('href'), f = a(d.attr('data-target') || e && e.replace(/.*(?=#[^\s]+$)/, '')), g = f.data('bs.modal') ? 'toggle' : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
    d.is('a') && c.preventDefault(), f.one('show.bs.modal', function (a) {
      a.isDefaultPrevented() || f.one('hidden.bs.modal', function () {
        d.is(':visible') && d.trigger('focus');
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.tooltip'), f = 'object' == typeof b && b;
      (e || 'destroy' != b) && (e || d.data('bs.tooltip', e = new c(this, f)), 'string' == typeof b && e[b]());
    });
  }
  var c = function (a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init('tooltip', a, b);
  };
  c.VERSION = '3.2.0', c.DEFAULTS = {
    animation: !0,
    placement: 'top',
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
    for (var e = this.options.trigger.split(' '), f = e.length; f--;) {
      var g = e[f];
      if ('click' == g)
        this.$element.on('click.' + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ('manual' != g) {
        var h = 'hover' == g ? 'mouseenter' : 'focusin', i = 'hover' == g ? 'mouseleave' : 'focusout';
        this.$element.on(h + '.' + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + '.' + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && 'number' == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {}, c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c)), clearTimeout(c.timeout), c.hoverState = 'in', c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      'in' == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show();
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c)), clearTimeout(c.timeout), c.hoverState = 'out', c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      'out' == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event('show.bs.' + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var c = a.contains(document.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !c)
        return;
      var d = this, e = this.tip(), f = this.getUID(this.type);
      this.setContent(), e.attr('id', f), this.$element.attr('aria-describedby', f), this.options.animation && e.addClass('fade');
      var g = 'function' == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, h = /\s?auto?\s?/i, i = h.test(g);
      i && (g = g.replace(h, '') || 'top'), e.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(g).data('bs.' + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
      var j = this.getPosition(), k = e[0].offsetWidth, l = e[0].offsetHeight;
      if (i) {
        var m = g, n = this.$element.parent(), o = this.getPosition(n);
        g = 'bottom' == g && j.top + j.height + l - o.scroll > o.height ? 'top' : 'top' == g && j.top - o.scroll - l < 0 ? 'bottom' : 'right' == g && j.right + k > o.width ? 'left' : 'left' == g && j.left - k < o.left ? 'right' : g, e.removeClass(m).addClass(g);
      }
      var p = this.getCalculatedOffset(g, j, k, l);
      this.applyPlacement(p, g);
      var q = function () {
        d.$element.trigger('shown.bs.' + d.type), d.hoverState = null;
      };
      a.support.transition && this.$tip.hasClass('fade') ? e.one('bsTransitionEnd', q).emulateTransitionEnd(150) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css('margin-top'), 10), h = parseInt(d.css('margin-left'), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
      using: function (a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass('in');
    var i = d[0].offsetWidth, j = d[0].offsetHeight;
    'top' == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j, m = k.left ? 'left' : 'top', n = k.left ? 'offsetWidth' : 'offsetHeight';
    d.offset(b), this.replaceArrow(l, d[0][n], m);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + '%' : '');
  }, c.prototype.setContent = function () {
    var a = this.tip(), b = this.getTitle();
    a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b), a.removeClass('fade in top bottom left right');
  }, c.prototype.hide = function () {
    function b() {
      'in' != c.hoverState && d.detach(), c.$element.trigger('hidden.bs.' + c.type);
    }
    var c = this, d = this.tip(), e = a.Event('hide.bs.' + this.type);
    return this.$element.removeAttr('aria-describedby'), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass('in'), a.support.transition && this.$tip.hasClass('fade') ? d.one('bsTransitionEnd', b).emulateTransitionEnd(150) : b(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr('title') || 'string' != typeof a.attr('data-original-title')) && a.attr('data-original-title', a.attr('title') || '').attr('title', '');
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0], d = 'BODY' == c.tagName;
    return a.extend({}, 'function' == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
      width: d ? a(window).width() : b.outerWidth(),
      height: d ? a(window).height() : b.outerHeight()
    }, d ? {
      top: 0,
      left: 0
    } : b.offset());
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return 'bottom' == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : 'top' == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : 'left' == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
        top: 0,
        left: 0
      };
    if (!this.$viewport)
      return e;
    var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f, k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
    }
    return e;
  }, c.prototype.getTitle = function () {
    var a, b = this.$element, c = this.options;
    return a = b.attr('data-original-title') || ('function' == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do
      a += ~~(1000000 * Math.random());
    while (document.getElementById(a));
    return a;
  }, c.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  }, c.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data('bs.' + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c))), c.tip().hasClass('in') ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.popover'), f = 'object' == typeof b && b;
      (e || 'destroy' != b) && (e || d.data('bs.popover', e = new c(this, f)), 'string' == typeof b && e[b]());
    });
  }
  var c = function (a, b) {
    this.init('popover', a, b);
  };
  if (!a.fn.tooltip)
    throw new Error('Popover requires tooltip.js');
  c.VERSION = '3.2.0', c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(), b = this.getTitle(), c = this.getContent();
    a.find('.popover-title')[this.options.html ? 'html' : 'text'](b), a.find('.popover-content').empty()[this.options.html ? 'string' == typeof c ? 'html' : 'append' : 'text'](c), a.removeClass('fade top bottom left right in'), a.find('.popover-title').html() || a.find('.popover-title').hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element, b = this.options;
    return a.attr('data-content') || ('function' == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  }, c.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  'use strict';
  function b(c, d) {
    var e = a.proxy(this.process, this);
    this.$body = a('body'), this.$scrollElement = a(a(c).is('body') ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || '') + ' .nav li > a', this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on('scroll.bs.scrollspy', e), this.refresh(), this.process();
  }
  function c(c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.scrollspy'), f = 'object' == typeof c && c;
      e || d.data('bs.scrollspy', e = new b(this, f)), 'string' == typeof c && e[c]();
    });
  }
  b.VERSION = '3.2.0', b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = 'offset', c = 0;
    a.isWindow(this.$scrollElement[0]) || (b = 'position', c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var d = this;
    this.$body.find(this.selector).map(function () {
      var d = a(this), e = d.data('target') || d.attr('href'), f = /^#./.test(e) && a(e);
      return f && f.length && f.is(':visible') && [[
          f[b]().top + c,
          e
        ]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      d.offsets.push(this[0]), d.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d)
      return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b <= e[0])
      return g != (a = f[0]) && this.activate(a);
    for (a = e.length; a--;)
      g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents('li').addClass('active');
    d.parent('.dropdown-menu').length && (d = d.closest('li.dropdown').addClass('active')), d.trigger('activate.bs.scrollspy');
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on('load.bs.scrollspy.data-api', function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.tab');
      e || d.data('bs.tab', e = new c(this)), 'string' == typeof b && e[b]();
    });
  }
  var c = function (b) {
    this.element = a(b);
  };
  c.VERSION = '3.2.0', c.prototype.show = function () {
    var b = this.element, c = b.closest('ul:not(.dropdown-menu)'), d = b.data('target');
    if (d || (d = b.attr('href'), d = d && d.replace(/.*(?=#[^\s]*$)/, '')), !b.parent('li').hasClass('active')) {
      var e = c.find('.active:last a')[0], f = a.Event('show.bs.tab', { relatedTarget: e });
      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.closest('li'), c), this.activate(g, g.parent(), function () {
          b.trigger({
            type: 'shown.bs.tab',
            relatedTarget: e
          });
        });
      }
    }
  }, c.prototype.activate = function (b, c, d) {
    function e() {
      f.removeClass('active').find('> .dropdown-menu > .active').removeClass('active'), b.addClass('active'), g ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'), b.parent('.dropdown-menu') && b.closest('li.dropdown').addClass('active'), d && d();
    }
    var f = c.find('> .active'), g = d && a.support.transition && f.hasClass('fade');
    g ? f.one('bsTransitionEnd', e).emulateTransitionEnd(150) : e(), f.removeClass('in');
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  }, a(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (c) {
    c.preventDefault(), b.call(a(this), 'show');
  });
}(jQuery), +function (a) {
  'use strict';
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.affix'), f = 'object' == typeof b && b;
      e || d.data('bs.affix', e = new c(this, f)), 'string' == typeof b && e[b]();
    });
  }
  var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };
  c.VERSION = '3.2.0', c.RESET = 'affix affix-top affix-bottom', c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset)
      return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass('affix');
    var a = this.$target.scrollTop(), b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(':visible')) {
      var b = a(document).height(), d = this.$target.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
      'object' != typeof f && (h = g = f), 'function' == typeof g && (g = f.top(this.$element)), 'function' == typeof h && (h = f.bottom(this.$element));
      var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? 'bottom' : null != g && g >= d ? 'top' : !1;
      if (this.affixed !== i) {
        null != this.unpin && this.$element.css('top', '');
        var j = 'affix' + (i ? '-' + i : ''), k = a.Event(j + '.bs.affix');
        this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = 'bottom' == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace('affix', 'affixed'))), 'bottom' == i && this.$element.offset({ top: b - this.$element.height() - h }));
      }
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on('load', function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this), d = c.data();
      d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
(function () {
  angular.module('MyApp', []).directive('wallopSlider', function () {
    return {
      template: '<div class="wallop-slider {{animationClass}}"><ul class="wallop-slider__list"><li class="wallop-slider__item {{itemClasses[$index]}}" ng-repeat="i in images"><img src="{{i}}"></li></ul><button ng-show="images.length>1" class="wallop-slider__btn wallop-slider__btn--previous btn btn--previous" ng-disabled="prevDisabled" ng-click="onPrevButtonClicked()">Previous</button><button ng-show="images.length>1" class="wallop-slider__btn wallop-slider__btn--next btn btn--next" ng-disabled="nextDisabled" ng-click="onNextButtonClicked()">Next</button></div>',
      restrict: 'EA',
      transclude: true,
      replace: false,
      scope: {
        images: '=',
        animation: '@',
        currentItemIndex: '=',
        onNext: '&',
        onPrevious: '&'
      },
      controller: [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
          $scope.itemClasses = [];
          $scope.$watch('images', function (images) {
            if (images.length) {
              _goTo(0);
            }
          });
          // set animation class corresponding to animation defined in CSS. e.g. rotate, slide
          if ($scope.animation) {
            $scope.animationClass = 'wallop-slider--' + $scope.animation;
          }
          var _displayOptions = {
              btnPreviousClass: 'wallop-slider__btn--previous',
              btnNextClass: 'wallop-slider__btn--next',
              itemClass: 'wallop-slider__item',
              currentItemClass: 'wallop-slider__item--current',
              showPreviousClass: 'wallop-slider__item--show-previous',
              showNextClass: 'wallop-slider__item--show-next',
              hidePreviousClass: 'wallop-slider__item--hide-previous',
              hideNextClass: 'wallop-slider__item--hide-next'
            };
          function updateClasses() {
            if ($scope.itemClasses.length !== $scope.images.length) {
              $scope.itemClasses = [];
              for (var i = 0; i < $scope.images.length; i++) {
                $scope.itemClasses.push('');
              }
            }
          }
          function _nextDisabled() {
            return $scope.currentItemIndex + 1 === $scope.images.length;
          }
          function _prevDisabled() {
            return !$scope.currentItemIndex;
          }
          function _updatePagination() {
            $scope.nextDisabled = _nextDisabled();
            $scope.prevDisabled = _prevDisabled();
          }
          function _clearClasses() {
            for (var i = 0; i < $scope.images.length; i++) {
              $scope.itemClasses[i] = '';
            }
          }
          // go to slide
          function _goTo(index) {
            if (index >= $scope.images.length || index < 0 || index === $scope.currentItemIndex) {
              if (!index) {
                $scope.itemClasses[0] = _displayOptions.currentItemClass;
              }
              return;
            }
            _clearClasses();
            $scope.itemClasses[$scope.currentItemIndex] = index > $scope.currentItemIndex ? _displayOptions.hidePreviousClass : _displayOptions.hideNextClass;
            var currentClass = index > $scope.currentItemIndex ? _displayOptions.showNextClass : _displayOptions.showPreviousClass;
            $scope.itemClasses[index] = _displayOptions.currentItemClass + ' ' + currentClass;
            $scope.currentItemIndex = index;
            _updatePagination();
          }
          // button event handlers
          // consider using the ng-tap directive to remove delay
          $scope.onPrevButtonClicked = function () {
            _goTo($scope.currentItemIndex - 1);
          };
          $scope.onNextButtonClicked = function () {
            _goTo($scope.currentItemIndex + 1);
          };
          $scope.$watch('currentItemIndex', function (newVal, oldVal) {
            if (oldVal > newVal) {
              if (typeof $scope.onPrevious === 'function') {
                $scope.onPrevious();
              }
            } else {
              if (typeof $scope.onNext === 'function') {
                $scope.onNext();
              }
            }
          });
        }
      ]
    };
  });
}());
/*! 2.1.1 */
!function () {
  function a(a, b) {
    window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a]);
  }
  function b(a, b, c, d, e, f, g) {
    function h(a, b, c, d, e, g) {
      for (var h = [], i = 0; i < a.length; i++)
        h.push(a.item(i));
      c && (e[b.ngModel] ? e[b.ngModel].value = h : e[b.ngModel] = h, c && c.$setViewValue(null != h && 0 == h.length ? '' : h)), d && f(function () {
        d(e, {
          $files: h,
          $event: g
        });
      });
    }
    c.ngMultiple && e(c.ngMultiple)(a) && (b.attr('multiple', 'true'), c.multiple = 'true');
    var i = c.ngAccept && e(c.ngAccept)(a);
    if (i && (b.attr('accept', i), c.accept = i), 'input' !== b[0].tagName.toLowerCase() || 'file' !== (b.attr('type') && b.attr('type').toLowerCase())) {
      var j = angular.element('<input type="file">');
      c.multiple && j.attr('multiple', c.multiple), c.accept && j.attr('accept', c.accept), j.css('width', '1px').css('height', '1px').css('opacity', 0).css('position', 'absolute').css('filter', 'alpha(opacity=0)').css('padding', 0).css('margin', 0).css('overflow', 'hidden').attr('tabindex', '-1').attr('ng-file-generated-elem', !0), b.append(j), b.__afu_fileClickDelegate__ = function () {
        j[0].click();
      }, b.bind('click', b.__afu_fileClickDelegate__), b.css('overflow', 'hidden');
      b = j;
    }
    var k = e(c.ngFileChange);
    if (0 != e(c.resetOnClick)(a))
      if (-1 !== navigator.appVersion.indexOf('MSIE 10')) {
        var l = function (c) {
          var d = b.clone();
          d.val(''), b.replaceWith(d), g(d)(a), j = d, b = d, b.bind('change', m), b.unbind('click'), b[0].click(), b.bind('click', l), c.preventDefault(), c.stopPropagation();
        };
        b.bind('click', l);
      } else
        b.bind('click', function () {
          b[0].value = null;
        });
    var m = function (b) {
      var e;
      e = b.__files_ || b.target.files, h(e, c, d, k, a, b);
    };
    b.bind('change', m), '' != c.ngFileSelect && (c.ngFileChange = c.ngFileSelect);
  }
  function c(a, b, c, g, h, i, j) {
    function k(a, b, c) {
      var d = !0;
      if (s) {
        var e = c.dataTransfer.items;
        if (null != e)
          for (var f = 0; f < e.length && d; f++)
            d = d && ('file' == e[f].kind || '' == e[f].kind) && (null != e[f].type.match(s) || null != e[f].name && null != e[f].name.match(s));
      }
      var g = h(b.dragOverClass)(a, { $event: c });
      return g && (g.delay && (q = g.delay), g.accept && (g = d ? g.accept : g.reject)), g || b.dragOverClass || 'dragover';
    }
    function l(a, b, c, d) {
      function f(a) {
        !s || a.type.match(s) || null != a.name && a.name.match(s) ? h.push(a) : k.push(a);
      }
      function g(a, b, c) {
        if (null != b)
          if (b.isDirectory) {
            var d = (c || '') + b.name;
            f({
              name: b.name,
              type: 'directory',
              path: d
            });
            var e = b.createReader(), h = [];
            m++;
            var i = function () {
              e.readEntries(function (d) {
                try {
                  if (d.length)
                    h = h.concat(Array.prototype.slice.call(d || [], 0)), i();
                  else {
                    for (var e = 0; e < h.length; e++)
                      g(a, h[e], (c ? c : '') + b.name + '/');
                    m--;
                  }
                } catch (f) {
                  m--, console.error(f);
                }
              }, function () {
                m--;
              });
            };
            i();
          } else
            m++, b.file(function (a) {
              try {
                m--, a.path = (c ? c : '') + a.name, f(a);
              } catch (b) {
                m--, console.error(b);
              }
            }, function () {
              m--;
            });
      }
      var h = [], k = [], l = a.dataTransfer.items, m = 0;
      if (l && l.length > 0 && 'file' != j.protocol())
        for (var n = 0; n < l.length; n++) {
          if (l[n].webkitGetAsEntry && l[n].webkitGetAsEntry() && l[n].webkitGetAsEntry().isDirectory) {
            var o = l[n].webkitGetAsEntry();
            if (o.isDirectory && !c)
              continue;
            null != o && (e(o.name) ? g(h, o) : l[n].webkitGetAsEntry().isDirectory || f(l[n].getAsFile()));
          } else {
            var p = l[n].getAsFile();
            null != p && f(p);
          }
          if (!d && h.length > 0)
            break;
        }
      else {
        var q = a.dataTransfer.files;
        if (null != q)
          for (var n = 0; n < q.length && (f(q.item(n)), d || !(h.length > 0)); n++);
      }
      var r = 0;
      !function t(a) {
        i(function () {
          if (m)
            10 * r++ < 20000 && t(10);
          else {
            if (!d && h.length > 1) {
              for (var a = 0; 'directory' == h[a].type;)
                a++;
              h = [h[a]];
            }
            b(h, k);
          }
        }, a || 0);
      }();
    }
    var m = d();
    if (c.dropAvailable && i(function () {
        a.dropAvailable ? a.dropAvailable.value = m : a.dropAvailable = m;
      }), !m)
      return 0 != h(c.hideOnDropNotAvailable)(a) && b.css('display', 'none'), void 0;
    var n, o = null, p = h(c.stopPropagation)(a), q = 1, r = h(c.ngAccept)(a) || c.accept, s = r ? new RegExp(f(r)) : null;
    b[0].addEventListener('dragover', function (d) {
      d.preventDefault(), p && d.stopPropagation(), i.cancel(o), a.actualDragOverClass || (n = k(a, c, d)), b.addClass(n);
    }, !1), b[0].addEventListener('dragenter', function (a) {
      a.preventDefault(), p && a.stopPropagation();
    }, !1), b[0].addEventListener('dragleave', function () {
      o = i(function () {
        b.removeClass(n), n = null;
      }, q || 1);
    }, !1), '' != c.ngFileDrop && (c.ngFileChange = a.ngFileDrop), b[0].addEventListener('drop', function (d) {
      d.preventDefault(), p && d.stopPropagation(), b.removeClass(n), n = null, l(d, function (b, e) {
        g && (a[c.ngModel] ? a[c.ngModel].value = b : a[c.ngModel] = b, g && g.$setViewValue(null != b && 0 == b.length ? '' : b)), c.ngFileRejectedModel && (a[c.ngFileRejectedModel] ? a[c.ngFileRejectedModel].value = e : a[c.ngFileRejectedModel] = e), i(function () {
          h(c.ngFileChange)(a, {
            $files: b,
            $rejectedFiles: e,
            $event: d
          });
        });
      }, 0 != h(c.allowDir)(a), c.multiple || h(c.ngMultiple)(a));
    }, !1);
  }
  function d() {
    var a = document.createElement('div');
    return 'draggable' in a && 'ondrop' in a;
  }
  function e(a) {
    return /^[\000-\177]*$/.test(a);
  }
  function f(a) {
    if (a.length > 2 && '/' === a[0] && '/' === a[a.length - 1])
      return a.substring(1, a.length - 1);
    var b = a.split(','), c = '';
    if (b.length > 1)
      for (var d = 0; d < b.length; d++)
        c += '(' + f(b[d]) + ')', d < b.length - 1 && (c += '|');
    else
      c = '^' + a.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&') + '$', c = c.replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
    return c;
  }
  window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim && a('setRequestHeader', function (a) {
    return function (b, c) {
      if ('__setXHR_' === b) {
        var d = c(this);
        d instanceof Function && d(this);
      } else
        a.apply(this, arguments);
    };
  });
  var g = angular.module('angularFileUpload', []);
  g.version = '2.1.1', g.service('$upload', [
    '$http',
    '$q',
    '$timeout',
    function (a, b, c) {
      function d(d) {
        d.method = d.method || 'POST', d.headers = d.headers || {}, d.transformRequest = d.transformRequest || function (b, c) {
          return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c);
        };
        var e = b.defer(), f = e.promise;
        return d.headers.__setXHR_ = function () {
          return function (a) {
            a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener('progress', function (a) {
              a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
                f.progress_fn(a);
              });
            }, !1), a.upload.addEventListener('load', function (a) {
              a.lengthComputable && (a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
                f.progress_fn(a);
              }));
            }, !1));
          };
        }, a(d).then(function (a) {
          e.resolve(a);
        }, function (a) {
          e.reject(a);
        }, function (a) {
          e.notify(a);
        }), f.success = function (a) {
          return f.then(function (b) {
            a(b.data, b.status, b.headers, d);
          }), f;
        }, f.error = function (a) {
          return f.then(null, function (b) {
            a(b.data, b.status, b.headers, d);
          }), f;
        }, f.progress = function (a) {
          return f.progress_fn = a, f.then(null, null, function (b) {
            a(b);
          }), f;
        }, f.abort = function () {
          return d.__XHR && c(function () {
            d.__XHR.abort();
          }), f;
        }, f.xhr = function (a) {
          return d.xhrFn = function (b) {
            return function () {
              b && b.apply(f, arguments), a.apply(f, arguments);
            };
          }(d.xhrFn), f;
        }, f;
      }
      this.upload = function (b) {
        b.headers = b.headers || {}, b.headers['Content-Type'] = void 0, b.transformRequest = b.transformRequest || a.defaults.transformRequest;
        var c = new FormData(), e = b.transformRequest, f = b.data;
        return b.transformRequest = function (a, c) {
          if (f)
            if (b.formDataAppender)
              for (var d in f) {
                var g = f[d];
                b.formDataAppender(a, d, g);
              }
            else
              for (var d in f) {
                var g = f[d];
                if ('function' == typeof e)
                  g = e(g, c);
                else
                  for (var h = 0; h < e.length; h++) {
                    var i = e[h];
                    'function' == typeof i && (g = i(g, c));
                  }
                void 0 != g && a.append(d, g);
              }
          if (null != b.file) {
            var j = b.fileFormDataName || 'file';
            if ('[object Array]' === Object.prototype.toString.call(b.file))
              for (var k = '[object String]' === Object.prototype.toString.call(j), h = 0; h < b.file.length; h++)
                a.append(k ? j : j[h], b.file[h], b.fileName && b.fileName[h] || b.file[h].name);
            else
              a.append(j, b.file, b.fileName || b.file.name);
          }
          return a;
        }, b.data = c, d(b);
      }, this.http = function (a) {
        return d(a);
      };
    }
  ]), g.directive('ngFileSelect', [
    '$parse',
    '$timeout',
    '$compile',
    function (a, c, d) {
      return {
        restrict: 'AEC',
        require: '?ngModel',
        link: function (e, f, g, h) {
          b(e, f, g, h, a, c, d);
        }
      };
    }
  ]), g.directive('ngFileDrop', [
    '$parse',
    '$timeout',
    '$location',
    function (a, b, d) {
      return {
        restrict: 'AEC',
        require: '?ngModel',
        link: function (e, f, g, h) {
          c(e, f, g, h, a, b, d);
        }
      };
    }
  ]), g.directive('ngNoFileDrop', function () {
    return function (a, b) {
      d() && b.css('display', 'none');
    };
  }), g.directive('ngFileDropAvailable', [
    '$parse',
    '$timeout',
    function (a, b) {
      return function (c, e, f) {
        if (d()) {
          var g = a(f.ngFileDropAvailable);
          b(function () {
            g(c);
          });
        }
      };
    }
  ]);
}();
/*! ngCkeditor v0.2.1 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/ng-ckeditor - New BSD License */
!function (a, b) {
  return 'function' == typeof define && define.amd ? (define([
    'angular',
    'ckeditor'
  ], function (a) {
    return b(a);
  }), void 0) : b(a);
}(angular || null, function (a) {
  var b, c = a.module('ngCkeditor', []), d = !1;
  return c.run([
    '$q',
    '$timeout',
    function (c, e) {
      function f() {
        'loaded' == CKEDITOR.status ? (d = !0, b.resolve()) : f();
      }
      if (b = c.defer(), a.isUndefined(CKEDITOR))
        throw new Error('CKEDITOR not found');
      CKEDITOR.disableAutoInline = !0, CKEDITOR.on('loaded', f), e(f, 100);
    }
  ]), c.directive('ckeditor', [
    '$timeout',
    '$q',
    function (c, e) {
      'use strict';
      return {
        restrict: 'AC',
        require: [
          'ngModel',
          '^?form'
        ],
        scope: !1,
        link: function (f, g, h, i) {
          var j = i[0], k = i[1] || null, l = '<p></p>', m = 'textarea' == g[0].tagName.toLowerCase(), n = [], o = !1;
          m || g.attr('contenteditable', !0);
          var p = function () {
            var b = {
                toolbar: 'full',
                toolbar_full: [
                  {
                    name: 'basicstyles',
                    items: [
                      'Bold',
                      'Italic',
                      'Strike',
                      'Underline'
                    ]
                  },
                  {
                    name: 'paragraph',
                    items: [
                      'BulletedList',
                      'NumberedList',
                      'Blockquote'
                    ]
                  },
                  {
                    name: 'editing',
                    items: [
                      'JustifyLeft',
                      'JustifyCenter',
                      'JustifyRight',
                      'JustifyBlock'
                    ]
                  },
                  {
                    name: 'links',
                    items: [
                      'Link',
                      'Unlink',
                      'Anchor'
                    ]
                  },
                  {
                    name: 'tools',
                    items: [
                      'SpellChecker',
                      'Maximize'
                    ]
                  },
                  '/',
                  {
                    name: 'styles',
                    items: [
                      'Format',
                      'FontSize',
                      'TextColor',
                      'PasteText',
                      'PasteFromWord',
                      'RemoveFormat'
                    ]
                  },
                  {
                    name: 'insert',
                    items: [
                      'Image',
                      'Table',
                      'SpecialChar'
                    ]
                  },
                  {
                    name: 'forms',
                    items: [
                      'Outdent',
                      'Indent'
                    ]
                  },
                  {
                    name: 'clipboard',
                    items: [
                      'Undo',
                      'Redo'
                    ]
                  },
                  {
                    name: 'document',
                    items: [
                      'PageBreak',
                      'Source'
                    ]
                  }
                ],
                disableNativeSpellChecker: !1,
                uiColor: '#FAFAFA',
                height: '400px',
                width: '100%'
              };
            b = a.extend(b, f[h.ckeditor]);
            var d = m ? CKEDITOR.replace(g[0], b) : CKEDITOR.inline(g[0], b), i = e.defer();
            g.bind('$destroy', function () {
              d.destroy(!1);
            });
            var p = function (a) {
                var b = d.getData();
                '' == b && (b = null), c(function () {
                  (a !== !0 || b != j.$viewValue) && j.$setViewValue(b), a === !0 && k && k.$setPristine();
                }, 0);
              }, q = function (a) {
                if (n.length) {
                  var b = n.pop() || l;
                  o = !1, d.setData(b, function () {
                    p(a), o = !0;
                  });
                }
              };
            d.on('change', p), d.on('blur', p), d.on('instanceReady', function () {
              f.$broadcast('ckeditor.ready'), f.$apply(function () {
                q(!0);
              }), d.document.on('keyup', p);
            }), d.on('customConfigLoaded', function () {
              i.resolve();
            }), j.$render = function () {
              n.push(j.$viewValue), o && q();
            };
          };
          'loaded' == CKEDITOR.status && (d = !0), d ? p() : b.promise.then(p);
        }
      };
    }
  ]), c;
});
// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp', [
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'ngCkeditor',
    'ngAnimate',
    'ngSanitize',
    'pascalprecht.translate',
    'angularFileUpload',
    'ngCookies',
    'socialLinks',
    'ngToast'
  ]);
agorasturiasApp.constant('USER_ROLES', {
  'GUEST': 'guest',
  'USER': 'user',
  'EDITOR': 'editor',
  'ADMIN': 'admin'
});
agorasturiasApp.constant('ACCESS_GROUPS', {
  'ALL': 'all',
  'LOGGED': 'logged',
  'EDITORS': 'editors',
  'ADMINS': 'admins'
});
agorasturiasApp.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$translateProvider',
  'ACCESS_GROUPS',
  function ($stateProvider, $urlRouterProvider, $translateProvider, ACCESS_GROUPS) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'public/views/home.html',
      access: ACCESS_GROUPS.ALL
    }).state('post', {
      url: '/post/:postId',
      templateUrl: 'public/views/post.html',
      access: ACCESS_GROUPS.ALL
    }).state('aegee-oviedo', {
      url: '/aegee-oviedo',
      templateUrl: 'public/views/aegee-oviedo.html',
      access: ACCESS_GROUPS.ALL
    }).state('aegee-europe', {
      url: '/aegee-europe',
      templateUrl: 'public/views/aegee-europe.html',
      access: ACCESS_GROUPS.ALL
    }).state('core-team', {
      url: '/core-team',
      templateUrl: 'public/views/core-team.html',
      access: ACCESS_GROUPS.ALL
    }).state('agora', {
      url: '/agora',
      templateUrl: 'public/views/agora.html',
      access: ACCESS_GROUPS.ALL
    }).state('how-to-apply', {
      url: '/how-to-apply',
      templateUrl: 'public/views/how-to-apply.html',
      access: ACCESS_GROUPS.ALL
    }).state('how-to-get-there', {
      url: '/how-to-get-there',
      templateUrl: 'public/views/how-to-get-there.html',
      access: ACCESS_GROUPS.ALL
    }).state('press', {
      url: '/press',
      templateUrl: 'public/views/press.html',
      access: ACCESS_GROUPS.ALL
    }).state('event-timetable', {
      url: '/event-timetable',
      templateUrl: 'public/views/event-timetable.html',
      access: ACCESS_GROUPS.ALL
    }).state('pre-events', {
      url: '/pre-events',
      templateUrl: 'public/views/pre-events.html',
      access: ACCESS_GROUPS.ALL
    }).state('sponsors', {
      url: '/sponsors',
      templateUrl: 'public/views/sponsors.html',
      access: ACCESS_GROUPS.ALL
    }).state('patrons', {
      url: '/patrons',
      templateUrl: 'public/views/patrons.html',
      access: ACCESS_GROUPS.ALL
    }).state('contact', {
      url: '/contact',
      templateUrl: 'public/views/contact.html',
      access: ACCESS_GROUPS.ALL
    }).state('account', {
      url: '/account',
      templateUrl: 'public/views/account.html',
      access: ACCESS_GROUPS.LOGGED
    }).state('profile', {
      url: '/profile',
      templateUrl: 'public/views/profile.html',
      access: ACCESS_GROUPS.LOGGED
    }).state('new-post', {
      url: '/new-post',
      templateUrl: 'public/views/new-post.html',
      access: ACCESS_GROUPS.EDITORS
    }).state('edit-post', {
      url: '/edit-post',
      templateUrl: 'public/views/edit-post.html',
      access: ACCESS_GROUPS.EDITORS
    }).state('file-uploader', {
      url: '/file-uploader',
      templateUrl: 'public/views/file-uploader.html',
      access: ACCESS_GROUPS.ADMINS
    }).state('edit-menus', {
      url: '/edit-menus',
      templateUrl: 'public/views/edit_menus.html',
      access: ACCESS_GROUPS.ADMIN
    }).state('edit-sections', {
      url: '/edit-sections',
      templateUrl: 'public/views/edit_sections.html',
      access: ACCESS_GROUPS.ADMIN
    }).state('edit-section', {
      url: '/edit-section',
      templateUrl: 'public/views/edit-section.html',
      access: ACCESS_GROUPS.ADMIN
    }).state('accounts-manager', {
      url: '/accounts-manager',
      templateUrl: 'public/views/accounts-manager.html',
      access: ACCESS_GROUPS.ADMINS
    }).state('shop', {
      url: '/shop',
      templateUrl: 'public/views/shop.html',
      access: ACCESS_GROUPS.LOGGED
    }).state('product', {
      url: '/product/:productId',
      templateUrl: 'public/views/product.html',
      access: ACCESS_GROUPS.LOGGED
    }).state('shopping-cart', {
      url: '/shopping-cart',
      templateUrl: 'public/views/shopping-cart.html',
      access: ACCESS_GROUPS.LOGGED
    }).state('checkout', {
      url: '/checkout',
      templateUrl: 'public/views/checkout.html',
      access: ACCESS_GROUPS.LOGGED
    });
    ;
    $translateProvider.useUrlLoader('api/v1/translate');
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
  }
]);
agorasturiasApp.config([
  'ngToastProvider',
  function (ngToast) {
    ngToast.configure({
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  }
]);
agorasturiasApp.config([
  '$provide',
  function ($provide) {
    $provide.decorator('$exceptionHandler', function ($delegate) {
      return function (exception, cause) {
        $delegate(exception, cause);
        ga('send', 'event', 'AngularJS error', exception.message, exception.stack, 0, true);
      };
    });
  }
]);
agorasturiasApp.run([
  '$state',
  '$rootScope',
  'LoginService',
  'ACCESS_GROUPS',
  'USER_ROLES',
  function ($state, $rootScope, LoginService, ACCESS_GROUPS, USER_ROLES) {
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
      if (toState.access === ACCESS_GROUPS.LOGGED && LoginService.session.role === USER_ROLES.GUEST) {
        e.preventDefault();
        $state.go('home');
      }
      if (toState.access === ACCESS_GROUPS.ADMIN && LoginService.session.role !== USER_ROLES.ADMIN) {
        e.preventDefault();
        $state.go('home');
      }
      $rootScope.isHomePage = toState.url === '/home';
    });
  }
]);
agorasturiasApp.controller('CarouselCtrl', [
  '$scope',
  function ($scope) {
    $scope.interval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
      var newWidth = 600 + slides.length;
      slides.push({
        title: [
          'AEGEE',
          'Asturias',
          'Gij\xf3n'
        ][slides.length % 3],
        image: [
          'carousel-aegee.png',
          'carousel-asturias.png',
          'carousel-gijon.png'
        ][slides.length % 3],
        text: [
          'EUROPEAN_FORUM',
          'NATURAL_PARADISE',
          'GREEN_COAST_CAPITAL'
        ][slides.length % 3]
      });
    };
    for (var i = 0; i < 3; ++i) {
      $scope.addSlide();
    }
  }
]);
agorasturiasApp.controller('PostsCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  '$anchorScroll',
  'Data',
  '$translate',
  '$cookieStore',
  function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore) {
    var currentPageInCookie = $cookieStore.get('currentPage');
    if (currentPageInCookie !== undefined) {
      $scope.currentPage = currentPageInCookie;
    } else {
      $scope.currentPage = 1;
    }
    $scope.itemsPerPage = 5;
    $scope.setPage = function (pageNumber) {
      $scope.currentPage = pageNumber;
      $cookieStore.put('currentPage', pageNumber);
    };
    $scope.pageChanged = function () {
      $scope.lastPageLoaded = angular.copy($scope.currentPage);
      Data.get('posts/' + $translate.use() + '/desc/' + $scope.currentPage + '/' + $scope.itemsPerPage).then(function (response) {
        if (response.status === 'success') {
          $scope.posts = response.posts;
          $scope.totalItems = response.total_posts;
          $scope.pagedPosts = $scope.posts;
        }
      });
      $cookieStore.put('currentPage', $scope.lastPageLoaded);
    }();
    $scope.gotoTop = function () {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };
    $scope.editPost = function (post) {
      var res = post.title.split('_');
      var postId = res[1];
      Data.get('posts/' + postId).then(function (response) {
        if (response.status === 'success') {
          $rootScope.currentPost = {
            id: postId,
            title: response.title,
            text: response.text,
            image: response.image,
            esTitle: response.esTitle,
            esText: response.esText,
            engTitle: response.engTitle,
            engText: response.engText
          };
        }
      });
      // $rootScope.currentPost = angular.copy(post);
      $location.path('/edit-post');
    };
    $scope.openPost = function (post) {
      $cookieStore.put('post', post.id);
      $rootScope.currentPost = angular.copy(post);
      $location.path('/post/' + post.id);
    };
  }
]);
agorasturiasApp.controller('PostViewerCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  '$anchorScroll',
  'Data',
  '$translate',
  '$cookieStore',
  '$stateParams',
  function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore, $stateParams) {
    var paramPostId = $stateParams.postId, postInCookie = $cookieStore.get('post');
    if (postInCookie === undefined || postInCookie !== paramPostId) {
      $cookieStore.put('post', $rootScope.currentPost.id);
    }
    $rootScope.currentPost = getPostById(paramPostId);
    $scope.currentUrl = document.location.href;
    function getPostById(postId) {
      Data.get('posts/' + postId).then(function (response) {
        if (response.status === 'success') {
          $rootScope.currentPost = {
            id: postId,
            title: response.title,
            text: response.text,
            image: response.image
          };
        }
      });
    }
    $scope.gotoTop = function () {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };
  }
]);
agorasturiasApp.controller('SponsorsCtrl', [
  '$scope',
  'PartitionService',
  function ($scope, PartitionService) {
    var sponsors = $scope.sponsors = [];
    $scope.fillsponsors = function () {
      sponsors.push({
        logo: 'public/img/sponsors/uniovi.png',
        link: 'http://www.uniovi.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/ayto-gijon.png',
        link: 'http://www.gijon.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/epi.png',
        link: 'http://www.epigijon.uniovi.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/laboral.png',
        link: 'http://www.laboralciudaddelacultura.com/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/oficongresos.png',
        link: 'http://congresos.gijon.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/conseyu.png',
        link: 'http://www.cmpa.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/aviles.png',
        link: 'http://aviles.es/web/turismo/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/gijon-deporte.png',
        link: 'http://deporte.gijon.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/kemphor.png',
        link: 'http://www.kemphor.com/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/alsa.png',
        link: 'http://www.alsa.es/'
      });
      sponsors.push({
        logo: 'public/img/sponsors/renfe.png',
        link: 'http://www.renfe.es/'
      });
    };
    if ($scope.sponsors.length === 0) {
      $scope.fillsponsors();
    }
    $scope.rows = PartitionService.partition(sponsors, 4);
  }
]);
agorasturiasApp.controller('NewPostCtrl', [
  '$location',
  '$scope',
  'Data',
  function ($location, $scope, Data) {
    $scope.editorOptions = {
      language: 'es',
      uiColor: '#ffffff'
    };
    $scope.doNewPost = function (newPost) {
      newPost.username = $scope.username;
      newPost.modifier_username = $scope.username;
      newPost.user_id = $scope.uid;
      newPost.modifier_id = $scope.uid;
      newPost.header_image = '';
      Data.post('posts', { post: JSON.stringify(newPost) }).then(function (response) {
        if (response.status === 'success') {
          $location.path('/home');
        } else {
          alert(response.message);
        }
      });
    };
  }
]);
agorasturiasApp.controller('EditPostCtrl', [
  '$location',
  '$scope',
  'Data',
  function ($location, $scope, Data) {
    $scope.editorOptions = {
      language: 'es',
      uiColor: '#ffffff'
    };
    $scope.doEditPost = function (post) {
      post.modifier_username = $scope.username;
      post.modifier_id = $scope.uid;
      Data.put('posts/' + post.id, { post: JSON.stringify(post) }).then(function (response) {
        if (response.status === 'success') {
          $location.path('/home');
        } else {
          alert(response.message);
        }
      });
    };
    $scope.doDeletePost = function (postId) {
      Data.delete('posts/' + postId).then(function (response) {
        if (response.status === 'success') {
          $location.path('/home');
        } else {
          alert(response.message);
        }
      });
    };
  }
]);
agorasturiasApp.controller('FileUploaderCtrl', [
  '$scope',
  '$upload',
  'Data',
  'partitionService',
  function ($scope, $upload, Data, partitionService) {
    $scope.$watch('files', function (files) {
      if (files !== undefined && files !== null) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          $scope.upload = $upload.upload({
            url: '/api/v1/upload',
            method: 'POST',
            data: { myObj: $scope.myModelObj },
            file: file
          });
        }
        getFiles();
      }
    });
    function getFiles() {
      Data.get('/images/gallery').then(function (response) {
        $scope.rows = [];
        if (response.status === 'Success') {
          var json = response.files, files = [];
          for (var i = 0; i < response.total_files; ++i) {
            files.push(response.files[i]);
          }
          $scope.rows = partitionService.partition(files, 6);
        }
      });
    }
    getFiles();
  }
]);
agorasturiasApp.controller('MenusCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  '$anchorScroll',
  'Data',
  function ($rootScope, $scope, $location, $anchorScroll, Data) {
    $scope.doSaveMenu = function (edited_menu) {
      edited_menu.modifier_username = $scope.username;
      Data.put('/menus/' + edited_menu.id, { menu: edited_menu }).then(function (response) {
        if (response.status != 'error')
          $scope.notify('Menu successfully saved', 'success');
        else
          $scope.notify('Error: ' + response.message, 'danger');
      });
    };
    $scope.doDeleteMenu = function (id) {
      notify('Error: not implemented', 'danger');
    };
  }
]);
agorasturiasApp.controller('SectionsCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  '$anchorScroll',
  'Data',
  function ($rootScope, $scope, $location, $anchorScroll, Data) {
    $scope.doEditSection = function (edited_section) {
      edited_section.modifier_username = $scope.username;
      Data.put('/sections/' + edited_section.id, { section: edited_section }).then(function (response) {
        if (response.status != 'error')
          $scope.notify('Section successfully saved', 'success');
        else
          $scope.notify('Error: ' + response.message, 'danger');
      });
    };
    $scope.editSection = function (section) {
      $rootScope.currentSection = section;
      $location.path('/edit-section');
    };
    $scope.doDeleteSection = function (id) {
      notify('Error: not implemented', 'danger');
    };
  }
]);
agorasturiasApp.controller('BookCtrl', [
  '$scope',
  '$translate',
  function ($scope, $translate) {
    $scope.index = 0;
    $scope.images = [
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-1.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-2.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-3.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-4.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-5.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-6.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-7.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-8.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-9.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-10.jpg',
      'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-11.jpg'
    ];
    $scope.filelocation = '../files/' + $translate.use() + '/Agora-for-dummies.pdf';
  }
]).directive('wallopSlider', function () {
  return {
    template: '<div class="wallop-slider {{animationClass}}"><ul class="wallop-slider__list"><li class="wallop-slider__item {{itemClasses[$index]}}" ng-repeat="i in images"><img ng-src="{{i}}"></li></ul><button ng-show="images.length>1" class="st-button wallop-slider__btn wallop-slider__btn--previous btn btn-success btn--previous" ng-disabled="prevDisabled" ng-click="onPrevButtonClicked()">Previous</button><button ng-show="images.length>1" class="st-button wallop-slider__btn wallop-slider__btn--next btn btn-success btn--next" ng-disabled="nextDisabled" ng-click="onNextButtonClicked()">Next</button></div>',
    restrict: 'EA',
    transclude: true,
    replace: false,
    scope: {
      images: '=',
      animation: '@',
      currentItemIndex: '=',
      onNext: '&',
      onPrevious: '&'
    },
    controller: function ($scope, $timeout) {
      $scope.itemClasses = [];
      $scope.$watch('images', function (images) {
        if (images.length) {
          _goTo(0);
        }
      });
      // set animation class corresponding to animation defined in CSS. e.g. rotate, slide
      if ($scope.animation) {
        $scope.animationClass = 'wallop-slider--' + $scope.animation;
      }
      var _displayOptions = {
          btnPreviousClass: 'wallop-slider__btn--previous',
          btnNextClass: 'wallop-slider__btn--next',
          itemClass: 'wallop-slider__item',
          currentItemClass: 'wallop-slider__item--current',
          showPreviousClass: 'wallop-slider__item--show-previous',
          showNextClass: 'wallop-slider__item--show-next',
          hidePreviousClass: 'wallop-slider__item--hide-previous',
          hideNextClass: 'wallop-slider__item--hide-next'
        };
      function updateClasses() {
        if ($scope.itemClasses.length !== $scope.images.length) {
          $scope.itemClasses = [];
          for (var i = 0; i < $scope.images.length; i++) {
            $scope.itemClasses.push('');
          }
        }
      }
      function _nextDisabled() {
        return $scope.currentItemIndex + 1 === $scope.images.length;
      }
      function _prevDisabled() {
        return !$scope.currentItemIndex;
      }
      function _updatePagination() {
        $scope.nextDisabled = _nextDisabled();
        $scope.prevDisabled = _prevDisabled();
      }
      function _clearClasses() {
        for (var i = 0; i < $scope.images.length; i++) {
          $scope.itemClasses[i] = '';
        }
      }
      // go to slide
      function _goTo(index) {
        if (index >= $scope.images.length || index < 0 || index === $scope.currentItemIndex) {
          if (!index) {
            $scope.itemClasses[0] = _displayOptions.currentItemClass;
          }
          return;
        }
        _clearClasses();
        $scope.itemClasses[$scope.currentItemIndex] = index > $scope.currentItemIndex ? _displayOptions.hidePreviousClass : _displayOptions.hideNextClass;
        var currentClass = index > $scope.currentItemIndex ? _displayOptions.showNextClass : _displayOptions.showPreviousClass;
        $scope.itemClasses[index] = _displayOptions.currentItemClass + ' ' + currentClass;
        $scope.currentItemIndex = index;
        _updatePagination();
      }
      // button event handlers
      $scope.onPrevButtonClicked = function () {
        _goTo($scope.currentItemIndex - 1);
      };
      $scope.onNextButtonClicked = function () {
        _goTo($scope.currentItemIndex + 1);
      };
      $scope.$watch('currentItemIndex', function (newVal, oldVal) {
        if (oldVal > newVal) {
          if (typeof $scope.onPrevious === 'function') {
            $scope.onPrevious();
          }
        } else {
          if (typeof $scope.onNext === 'function') {
            $scope.onNext();
          }
        }
      });
    }
  };
});
agorasturiasApp.controller('FormCtrl', [
  '$scope',
  'Data',
  function ($scope, Data) {
    $scope.contact = {};
    $scope.submitForm = function (isValid, contact) {
      if (isValid) {
        Data.post('mail', contact).success(function (response) {
          alert('Email sent correctly');
        }).error(function (response) {
          alert('An error occured');
        });
      }
    };
  }
]);
agorasturiasApp.controller('ThumbnailsCtrl', [
  '$scope',
  'PartitionService',
  function ($scope, PartitionService) {
    var members = $scope.members = [];
    $scope.fillMembers = function () {
      members.push({
        name: 'Alberto',
        position: 'MAIN_ORGANIZER',
        image: 'public/img/team/alberto.png',
        hover: 'http://goo.gl/y2tsTX'
      });
      members.push({
        name: 'Juanola',
        position: 'INCOMING',
        image: 'public/img/team/juanola.png',
        hover: ''
      });
      members.push({
        name: 'Laura',
        position: 'TREASURER',
        image: 'public/img/team/laura.png',
        hover: ''
      });
      members.push({
        name: 'Dami',
        position: 'IT',
        image: 'public/img/team/dami.png',
        hover: ''
      });
      members.push({
        name: 'Gerar',
        position: 'PR',
        image: 'public/img/team/gerar.png',
        hover: ''
      });
      members.push({
        name: 'Elena',
        position: 'PR',
        image: 'public/img/team/elena.png',
        hover: ''
      });
      members.push({
        name: 'Sora',
        position: 'FR',
        image: 'public/img/team/sora.png',
        hover: ''
      });
      members.push({
        name: 'V\xedctor',
        position: 'FR',
        image: 'public/img/team/victor.png',
        hover: ''
      });
      members.push({
        name: 'Alba',
        position: 'MEALS',
        image: 'public/img/team/alba.png',
        hover: ''
      });
      members.push({
        name: 'Santi',
        position: 'SOCIAL_PROGRAMME',
        image: 'public/img/team/santi.png',
        hover: ''
      });
      members.push({
        name: 'Alberto',
        position: 'HR',
        image: 'public/img/team/albertoHR.png',
        hover: ''
      });
      members.push({
        name: 'Olga',
        position: 'HR',
        image: 'public/img/team/olga.png',
        hover: ''
      });
      members.push({
        name: 'Marcos',
        position: 'ANNIVERSARY_RESPONSIBLE',
        image: 'public/img/team/marcos.png',
        hover: ''
      });
      members.push({
        name: 'Jorge',
        position: 'LOGISTICS',
        image: 'public/img/team/jorge.png',
        hover: ''
      });
    };
    if ($scope.members.length === 0) {
      $scope.fillMembers();
    }
    $scope.rows = PartitionService.partition(members, 4);
  }
]);
function product(id, name, description, price, image) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.image = image;
}
function shop() {
  this.products = [
    new product(1, 'MATTRESS', 'For sleeping at a CAMPSITE. For 2 persons. 140X190cm. Flocked outer for comfort. 2-year guarantee!', '19.75', 'public/img/shop/mattress.png'),
    new product(2, 'SLEEPING BAG', '', '9.75', 'public/img/shop/mattress.png'),
    new product(3, 'T-SHIRT', '', '12', 'public/img/shop/mattress.png')
  ];
}
shop.prototype.getProduct = function (id) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id === id) {
      return this.products[i];
    }
  }
  return null;
};
function cart(cartName) {
  this.cartName = cartName;
  this.clearCart = false;
  this.checkoutParameters = {};
  this.items = [];
  // load items from local storage when initializing
  this.loadItems();
  // save items to local storage when unloading
  var self = this;
  $(window).unload(function () {
    if (self.clearCart) {
      self.clearItems();
    }
    self.saveItems();
    self.clearCart = false;
  });
}
// load items from local storage
cart.prototype.loadItems = function () {
  var items = localStorage !== null ? localStorage[this.cartName + '_items'] : null;
  if (items !== null && JSON !== null) {
    try {
      items = JSON.parse(items);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.sku !== null && item.name !== null && item.price !== null && item.quantity !== null) {
          item = new cartItem(item.sku, item.name, item.price, item.quantity);
          this.items.push(item);
        }
      }
    } catch (err) {
    }
  }
};
// save items to local storage
cart.prototype.saveItems = function () {
  if (localStorage !== null && JSON !== null) {
    localStorage[this.cartName + '_items'] = JSON.stringify(this.items);
  }
};
// adds an item to the cart
cart.prototype.addItem = function (id, name, price, quantity) {
  quantity = this.toNumber(quantity);
  if (quantity !== 0) {
    // update quantity for existing item
    var found = false, item = null;
    for (var i = 0; i < this.items.length && !found; i++) {
      item = this.items[i];
      if (item.id === id) {
        found = true;
        item.quantity = this.toNumber(item.quantity + quantity);
        if (item.quantity <= 0) {
          this.items.splice(i, 1);
        }
      }
    }
    // new item, add now
    if (!found) {
      item = new cartItem(id, name, price, quantity);
      this.items.push(item);
    }
    // save changes
    this.saveItems();
  }
};
cart.prototype.getTotalPrice = function (id) {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i];
    if (id === undefined || item.id === id) {
      total += this.toNumber(item.quantity * item.price);
    }
  }
  return total;
};
cart.prototype.getTotalCount = function (id) {
  var count = 0;
  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i];
    if (id === undefined || item.id === id) {
      count += this.toNumber(item.quantity);
    }
  }
  return count;
};
// clear the cart
cart.prototype.clearItems = function () {
  this.items = [];
  this.saveItems();
};
// utility methods
cart.prototype.addFormFields = function (form, data) {
  if (data !== null) {
    var _input;
    $.each(data, function (name, value) {
      if (value !== null) {
        _input = $('<input></input>').attr('type', 'hidden').attr('name', name).val(value);
        form.append(_input);
      }
    });
  }
};
cart.prototype.toNumber = function (value) {
  value = value * 1;
  return isNaN(value) ? 0 : value;
};
cart.prototype.addCheckoutParameters = function (serviceName, merchantID, options) {
  if (serviceName !== 'PayPal' && serviceName !== 'TransferWise') {
    throw 'serviceName must be \'PayPal\' or \'TransferWise\'.';
  }
  if (merchantID === null) {
    throw 'A merchantID is required in order to checkout.';
  }
  this.checkoutParameters[serviceName] = new checkoutParameters(serviceName, merchantID, options);
};
cart.prototype.checkout = function (serviceName, clearCart) {
  // select service
  if (serviceName === null) {
    var p = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
    serviceName = p.serviceName;
  }
  if (serviceName === null) {
    throw 'Define at least one checkout service.';
  }
  var parms = this.checkoutParameters[serviceName];
  if (parms === null) {
    throw 'Cannot get checkout parameters for \'' + serviceName + '\'.';
  }
  switch (parms.serviceName) {
  case 'PayPal':
    this.checkoutPayPal(parms, clearCart);
    break;
  case 'TransferWise':
    this.checkoutTransferWise(parms, clearCart);
    break;
  default:
    throw 'Unknown checkout service: ' + parms.serviceName;
  }
};
// http://www.paypal.com/cgi-bin/webscr?cmd=p/pdn/howto_checkout-outside
cart.prototype.checkoutPayPal = function (parms, clearCart) {
  // global data
  var data = {
      cmd: '_cart',
      business: parms.merchantID,
      upload: '1',
      rm: '2',
      charset: 'utf-8',
      currency_code: 'EUR'
    };
  // item data
  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i];
    var ctr = i + 1;
    data['item_number_' + ctr] = item.id;
    data['item_name_' + ctr] = item.name;
    data['quantity_' + ctr] = item.quantity;
    data['amount_' + ctr] = item.price.toFixed(2);
  }
  // build form
  var form = $('<form></form>');
  form.attr('action', 'https://www.sandbox.paypal.com/cgi-bin/webscr');
  // form.attr("action", "https://www.paypal.com/cgi-bin/webscr"); TODO
  form.attr('method', 'POST');
  form.attr('style', 'display:none;');
  this.addFormFields(form, data);
  if (parms.options !== undefined) {
    this.addFormFields(form, parms.options);
  }
  $('body').append(form);
  // submit form
  this.clearCart = clearCart === undefined || clearCart;
  // TODO Send email with order or persist
  form.submit();
  form.remove();
};
function checkoutParameters(serviceName, merchantID, options) {
  this.serviceName = serviceName;
  this.merchantID = merchantID;
  this.options = options;
}
function cartItem(id, name, price, quantity) {
  this.id = id;
  this.name = name;
  this.price = price * 1;
  this.quantity = quantity * 1;
}
agorasturiasApp.controller('ShopCtrl', [
  '$scope',
  '$stateParams',
  'ShopService',
  '$location',
  function ($scope, $stateParams, ShopService, $location) {
    $scope.shop = ShopService.shop;
    $scope.cart = ShopService.cart;
    var _productId = $stateParams.productId;
    if ($location.path().startsWith('/product') && _productId !== null) {
      if (isNaN(_productId)) {
        $location.path('/shop');
      } else {
        $scope.product = $scope.shop.getProduct(parseInt(_productId));
      }
    }
    $scope.goToShop = function () {
      $location.path('/shop');
    };
    $scope.openProductDescription = function (productId) {
      $location.path('/product/' + productId);
    };
    $scope.goToCart = function () {
      $location.path('/shopping-cart');
    };
  }
]);
agorasturiasApp.factory('ShopService', function () {
  var _shop = new shop(), _cart = new cart('AgoraShop');
  _cart.addCheckoutParameters('PayPal', 'E5YL58382ENDE');
  // _cart.addCheckoutParameters("PayPal", "M88EFJFDDQ5DY"); // TODO AEGEE-Oviedo
  _cart.addCheckoutParameters('TransferWise', 'XXX TransferWise merchant account id');
  // TODO
  return {
    shop: _shop,
    cart: _cart
  };
});
agorasturiasApp.controller('ProfileCtrl', [
  '$scope',
  'LoginService',
  'Data',
  function ($scope, LoginService, Data) {
    $scope.userData = LoginService.session;
  }
]);
agorasturiasApp.controller('MainCtrl', [
  '$scope',
  '$rootScope',
  '$translate',
  '$cookieStore',
  '$location',
  '$http',
  'Data',
  'LoginService',
  'USER_ROLES',
  'ngToast',
  function ($scope, $rootScope, $translate, $cookieStore, $location, $http, Data, LoginService, USER_ROLES, ngToast) {
    var langInCookie = $cookieStore.get('lang');
    if (langInCookie !== undefined) {
      $translate.use(langInCookie);
    }
    $scope.changeLanguage = function () {
      if ($translate.use() === 'en') {
        $translate.use('es');
      } else {
        $translate.use('en');
      }
      $cookieStore.put('lang', $translate.use());
    };
    if (LoginService.authenticated) {
      $scope.authenticated = true;
      $scope.username = LoginService.session.username;
    } else {
      Data.get('session').then(function (response) {
        if (response.uid !== undefined && response.uid !== '') {
          LoginService.login(response.uid, response.email, response.name, response.role, response.username);
          $scope.authenticated = true;
          $scope.username = response.username;
        } else {
          $scope.authenticated = false;
        }
      });
    }
    //initially set those objects to null to avoid undefined error
    $rootScope.login = {};
    $rootScope.currentPost = null;
    $scope.login = function (user) {
      Data.post('login', {
        username: user.username,
        password: user.password
      }).then(function (response) {
        if (response.status === 'success') {
          LoginService.login(response.uid, response.email, response.name, response.role, response.username);
          $location.path('/home');
          $scope.notify('Welcome back <b>' + response.name + '</b>', 'success');
        } else {
          alert(response.message);
          LoginService.logout();
        }
        $scope.authenticated = LoginService.authenticated;
        $scope.username = LoginService.session.username;
      });
    };
    $scope.logout = function () {
      Data.get('logout').then(function (response) {
        $scope.authenticated = false;
        LoginService.logout();
        $scope.notify('See you soon!', 'danger');
      });
      $location.path('/home');
    };
    $scope.notify = function (message, type) {
      var toast = ngToast.create({
          content: message,
          className: type,
          timeout: 2000
        });
    };
    $scope.editMenus = function () {
      Data.get('/menus').then(function (response) {
        if (response.status === 'success') {
          $scope.menusList = response.menus;
          $location.path('/edit-menus');
        }
      });
    };
    $scope.editSections = function () {
      Data.get('/sections').then(function (response) {
        if (response.status === 'success') {
          $scope.sectionsList = response.sections;
          $location.path('/edit-sections');
        }
      });
    };
  }
]);
agorasturiasApp.factory('LoginService', [
  'USER_ROLES',
  function (USER_ROLES) {
    var session = {
        userId: '',
        email: '',
        name: '',
        role: USER_ROLES.GUEST,
        username: ''
      };
    var authenticated = false;
    var login = function (userId, email, name, role, username) {
      this.session.userId = userId;
      this.session.email = email;
      this.session.name = name;
      this.session.role = role;
      this.session.username = username;
      this.authenticated = true;
    };
    var logout = function () {
      this.session.userId = '';
      this.session.email = '';
      this.session.name = '';
      this.session.role = USER_ROLES.GUEST;
      this.session.username = '';
      this.authenticated = false;
    };
    return {
      session: session,
      authenticated: authenticated,
      login: login,
      logout: logout
    };
  }
]);
agorasturiasApp.factory('Data', [
  '$http',
  function ($http) {
    // This service connects to our REST API
    var serviceBase = 'api/v1/';
    var obj = {};
    obj.get = function (q, object) {
      return $http.get(serviceBase + q, object).then(function (results) {
        return results.data;
      });
    };
    obj.post = function (q, object) {
      return $http.post(serviceBase + q, object).then(function (results) {
        return results.data;
      });
    };
    obj.put = function (q, object) {
      return $http.put(serviceBase + q, object).then(function (results) {
        return results.data;
      });
    };
    obj.delete = function (q) {
      return $http.delete(serviceBase + q).then(function (results) {
        return results.data;
      });
    };
    return obj;
  }
]);
agorasturiasApp.controller('NavigationCtrl', [
  '$scope',
  '$location',
  '$state',
  '$stateParams',
  function ($scope, $location, $state, $stateParams) {
    $scope.reloadContent = function () {
      var destinationPath = '/home';
      if ($location.path() === destinationPath) {
        $state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: true,
          notify: true
        });
      } else {
        $location.path(destinationPath);
      }
    };
  }
]);
agorasturiasApp.service('PartitionService', function () {
  this.partition = function (dataArray, chunkSize) {
    var result = [];
    for (var i = 0; i < dataArray.length; i += chunkSize) {
      result.push(dataArray.slice(i, i + chunkSize));
    }
    return result;
  };
});
agorasturiasApp.filter('htmlSafe', [
  '$sce',
  function ($sce) {
    return $sce.trustAsHtml;
  }
]);
jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.to-top-button');
  //hide or show the "back to top" link
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $back_to_top.addClass('visible');
    } else {
      $back_to_top.removeClass('visible');
    }
  });
  //smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, scroll_top_duration);
  });
  $(document).click(function (event) {
    var _clickover = $(event.target), _opened = $('.navbar-collapse').hasClass('navbar-collapse collapse in');
    if (_opened === true && _clickover.hasClass('navbar-toggle') === false) {
      $('button.navbar-toggle').click();
    }
  });
  window.addEventListener('error', function (err) {
    var lineAndColumnInfo = err.colno ? ' line:' + err.lineno + ', column:' + err.colno : ' line:' + err.lineno;
    ga('send', 'event', 'JavaScript Error', err.message, err.filename + lineAndColumnInfo + ' -> ' + navigator.userAgent, 0, true);
  });
  jQuery.error = function (message) {
    ga('send', 'event', 'jQuery Error', message, navigator.userAgent, 0, true);
  };
});
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module('ui.bootstrap', [
  'ui.bootstrap.tpls',
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.bindHtml',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position',
  'ui.bootstrap.datepicker',
  'ui.bootstrap.dropdown',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.timepicker',
  'ui.bootstrap.typeahead'
]), angular.module('ui.bootstrap.tpls', [
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html',
  'template/alert/alert.html',
  'template/carousel/carousel.html',
  'template/carousel/slide.html',
  'template/datepicker/datepicker.html',
  'template/datepicker/day.html',
  'template/datepicker/month.html',
  'template/datepicker/popup.html',
  'template/datepicker/year.html',
  'template/modal/backdrop.html',
  'template/modal/window.html',
  'template/pagination/pager.html',
  'template/pagination/pagination.html',
  'template/tooltip/tooltip-html-unsafe-popup.html',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html',
  'template/progressbar/bar.html',
  'template/progressbar/progress.html',
  'template/progressbar/progressbar.html',
  'template/rating/rating.html',
  'template/tabs/tab.html',
  'template/tabs/tabset.html',
  'template/timepicker/timepicker.html',
  'template/typeahead/typeahead-match.html',
  'template/typeahead/typeahead-popup.html'
]), angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function (a, b, c) {
    function d(a) {
      for (var b in a)
        if (void 0 !== f.style[b])
          return a[b];
    }
    var e = function (d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? 'animationEndEventName' : 'transitionEndEventName'], j = function () {
            c.$apply(function () {
              d.unbind(i, j), h.resolve(d);
            });
          };
        return i && d.bind(i, j), b(function () {
          angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d);
        }), h.promise.cancel = function () {
          i && d.unbind(i, j), h.reject('Transition cancelled');
        }, h.promise;
      }, f = document.createElement('trans'), g = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        transition: 'transitionend'
      }, h = {
        WebkitTransition: 'webkitAnimationEnd',
        MozTransition: 'animationend',
        OTransition: 'oAnimationEnd',
        transition: 'animationend'
      };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e;
  }
]), angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function (a) {
    return {
      link: function (b, c, d) {
        function e(b) {
          function d() {
            j === e && (j = void 0);
          }
          var e = a(c, b);
          return j && j.cancel(), j = e, e.then(d, d), e;
        }
        function f() {
          k ? (k = !1, g()) : (c.removeClass('collapse').addClass('collapsing'), e({ height: c[0].scrollHeight + 'px' }).then(g));
        }
        function g() {
          c.removeClass('collapsing'), c.addClass('collapse in'), c.css({ height: 'auto' });
        }
        function h() {
          if (k)
            k = !1, i(), c.css({ height: 0 });
          else {
            c.css({ height: c[0].scrollHeight + 'px' });
            {
              c[0].offsetWidth;
            }
            c.removeClass('collapse in').addClass('collapsing'), e({ height: 0 }).then(i);
          }
        }
        function i() {
          c.removeClass('collapsing'), c.addClass('collapse');
        }
        var j, k = !0;
        b.$watch(d.collapse, function (a) {
          a ? h() : f();
        });
      }
    };
  }
]), angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: !0 }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function (a, b, c) {
    this.groups = [], this.closeOthers = function (d) {
      var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
      e && angular.forEach(this.groups, function (a) {
        a !== d && (a.isOpen = !1);
      });
    }, this.addGroup = function (a) {
      var b = this;
      this.groups.push(a), a.$on('$destroy', function () {
        b.removeGroup(a);
      });
    }, this.removeGroup = function (a) {
      var b = this.groups.indexOf(a);
      -1 !== b && this.groups.splice(b, 1);
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: !0,
    replace: !1,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', function () {
  return {
    require: '^accordion',
    restrict: 'EA',
    transclude: !0,
    replace: !0,
    templateUrl: 'template/accordion/accordion-group.html',
    scope: {
      heading: '@',
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function () {
      this.setHeading = function (a) {
        this.heading = a;
      };
    },
    link: function (a, b, c, d) {
      d.addGroup(a), a.$watch('isOpen', function (b) {
        b && d.closeOthers(a);
      }), a.toggleOpen = function () {
        a.isDisabled || (a.isOpen = !a.isOpen);
      };
    }
  };
}).directive('accordionHeading', function () {
  return {
    restrict: 'EA',
    transclude: !0,
    template: '',
    replace: !0,
    require: '^accordionGroup',
    link: function (a, b, c, d, e) {
      d.setHeading(e(a, function () {
      }));
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (a, b, c, d) {
      a.$watch(function () {
        return d[c.accordionTransclude];
      }, function (a) {
        a && (b.html(''), b.append(a));
      });
    }
  };
}), angular.module('ui.bootstrap.alert', []).controller('AlertController', [
  '$scope',
  '$attrs',
  function (a, b) {
    a.closeable = 'close' in b, this.close = a.close;
  }
]).directive('alert', function () {
  return {
    restrict: 'EA',
    controller: 'AlertController',
    templateUrl: 'template/alert/alert.html',
    transclude: !0,
    replace: !0,
    scope: {
      type: '@',
      close: '&'
    }
  };
}).directive('dismissOnTimeout', [
  '$timeout',
  function (a) {
    return {
      require: 'alert',
      link: function (b, c, d, e) {
        a(function () {
          e.close();
        }, parseInt(d.dismissOnTimeout, 10));
      }
    };
  }
]), angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function () {
  return function (a, b, c) {
    b.addClass('ng-binding').data('$binding', c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
      b.html(a || '');
    });
  };
}), angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', [
  'buttonConfig',
  function (a) {
    this.activeClass = a.activeClass || 'active', this.toggleEvent = a.toggleEvent || 'click';
  }
]).directive('btnRadio', function () {
  return {
    require: [
      'btnRadio',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f.$render = function () {
        b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)));
      }, b.bind(e.toggleEvent, function () {
        var d = b.hasClass(e.activeClass);
        (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
          f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render();
        });
      });
    }
  };
}).directive('btnCheckbox', function () {
  return {
    require: [
      'btnCheckbox',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (a, b, c, d) {
      function e() {
        return g(c.btnCheckboxTrue, !0);
      }
      function f() {
        return g(c.btnCheckboxFalse, !1);
      }
      function g(b, c) {
        var d = a.$eval(b);
        return angular.isDefined(d) ? d : c;
      }
      var h = d[0], i = d[1];
      i.$render = function () {
        b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
      }, b.bind(h.toggleEvent, function () {
        a.$apply(function () {
          i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
        });
      });
    }
  };
}), angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$interval',
  '$transition',
  function (a, b, c, d) {
    function e() {
      f();
      var b = +a.interval;
      !isNaN(b) && b > 0 && (h = c(g, b));
    }
    function f() {
      h && (c.cancel(h), h = null);
    }
    function g() {
      var b = +a.interval;
      i && !isNaN(b) && b > 0 ? a.next() : a.pause();
    }
    var h, i, j = this, k = j.slides = a.slides = [], l = -1;
    j.currentSlide = null;
    var m = !1;
    j.select = a.select = function (c, f) {
      function g() {
        if (!m) {
          if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
            c.$element.addClass(f);
            {
              c.$element[0].offsetWidth;
            }
            angular.forEach(k, function (a) {
              angular.extend(a, {
                direction: '',
                entering: !1,
                leaving: !1,
                active: !1
              });
            }), angular.extend(c, {
              direction: f,
              active: !0,
              entering: !0
            }), angular.extend(j.currentSlide || {}, {
              direction: f,
              leaving: !0
            }), a.$currentTransition = d(c.$element, {}), function (b, c) {
              a.$currentTransition.then(function () {
                h(b, c);
              }, function () {
                h(b, c);
              });
            }(c, j.currentSlide);
          } else
            h(c, j.currentSlide);
          j.currentSlide = c, l = i, e();
        }
      }
      function h(b, c) {
        angular.extend(b, {
          direction: '',
          active: !0,
          leaving: !1,
          entering: !1
        }), angular.extend(c || {}, {
          direction: '',
          active: !1,
          leaving: !1,
          entering: !1
        }), a.$currentTransition = null;
      }
      var i = k.indexOf(c);
      void 0 === f && (f = i > l ? 'next' : 'prev'), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g());
    }, a.$on('$destroy', function () {
      m = !0;
    }), j.indexOfSlide = function (a) {
      return k.indexOf(a);
    }, a.next = function () {
      var b = (l + 1) % k.length;
      return a.$currentTransition ? void 0 : j.select(k[b], 'next');
    }, a.prev = function () {
      var b = 0 > l - 1 ? k.length - 1 : l - 1;
      return a.$currentTransition ? void 0 : j.select(k[b], 'prev');
    }, a.isActive = function (a) {
      return j.currentSlide === a;
    }, a.$watch('interval', e), a.$on('$destroy', f), a.play = function () {
      i || (i = !0, e());
    }, a.pause = function () {
      a.noPause || (i = !1, f());
    }, j.addSlide = function (b, c) {
      b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1;
    }, j.removeSlide = function (a) {
      var b = k.indexOf(a);
      k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--;
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '=',
        noPause: '='
      }
    };
  }]).directive('slide', function () {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: !0,
    replace: !0,
    templateUrl: 'template/carousel/slide.html',
    scope: { active: '=?' },
    link: function (a, b, c, d) {
      d.addSlide(a, b), a.$on('$destroy', function () {
        d.removeSlide(a);
      }), a.$watch('active', function (b) {
        b && d.select(a);
      });
    }
  };
}), angular.module('ui.bootstrap.dateparser', []).service('dateParser', [
  '$locale',
  'orderByFilter',
  function (a, b) {
    function c(a) {
      var c = [], d = a.split('');
      return angular.forEach(e, function (b, e) {
        var f = a.indexOf(e);
        if (f > -1) {
          a = a.split(''), d[f] = '(' + b.regex + ')', a[f] = '$';
          for (var g = f + 1, h = f + e.length; h > g; g++)
            d[g] = '', a[g] = '$';
          a = a.join(''), c.push({
            index: f,
            apply: b.apply
          });
        }
      }), {
        regex: new RegExp('^' + d.join('') + '$'),
        map: b(c, 'index')
      };
    }
    function d(a, b, c) {
      return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0;
    }
    this.parsers = {};
    var e = {
        yyyy: {
          regex: '\\d{4}',
          apply: function (a) {
            this.year = +a;
          }
        },
        yy: {
          regex: '\\d{2}',
          apply: function (a) {
            this.year = +a + 2000;
          }
        },
        y: {
          regex: '\\d{1,4}',
          apply: function (a) {
            this.year = +a;
          }
        },
        MMMM: {
          regex: a.DATETIME_FORMATS.MONTH.join('|'),
          apply: function (b) {
            this.month = a.DATETIME_FORMATS.MONTH.indexOf(b);
          }
        },
        MMM: {
          regex: a.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function (b) {
            this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b);
          }
        },
        MM: {
          regex: '0[1-9]|1[0-2]',
          apply: function (a) {
            this.month = a - 1;
          }
        },
        M: {
          regex: '[1-9]|1[0-2]',
          apply: function (a) {
            this.month = a - 1;
          }
        },
        dd: {
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function (a) {
            this.date = +a;
          }
        },
        d: {
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function (a) {
            this.date = +a;
          }
        },
        EEEE: { regex: a.DATETIME_FORMATS.DAY.join('|') },
        EEE: { regex: a.DATETIME_FORMATS.SHORTDAY.join('|') }
      };
    this.parse = function (b, e) {
      if (!angular.isString(b) || !e)
        return b;
      e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
      var f = this.parsers[e], g = f.regex, h = f.map, i = b.match(g);
      if (i && i.length) {
        for (var j, k = {
              year: 1900,
              month: 0,
              date: 1,
              hours: 0
            }, l = 1, m = i.length; m > l; l++) {
          var n = h[l - 1];
          n.apply && n.apply.call(k, i[l]);
        }
        return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j;
      }
    };
  }
]), angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function (a, b) {
    function c(a, c) {
      return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c];
    }
    function d(a) {
      return 'static' === (c(a, 'position') || 'static');
    }
    var e = function (b) {
      for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)
        e = e.offsetParent;
      return e || c;
    };
    return {
      position: function (b) {
        var c = this.offset(b), d = {
            top: 0,
            left: 0
          }, f = e(b[0]);
        f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
        var g = b[0].getBoundingClientRect();
        return {
          width: g.width || b.prop('offsetWidth'),
          height: g.height || b.prop('offsetHeight'),
          top: c.top - d.top,
          left: c.left - d.left
        };
      },
      offset: function (c) {
        var d = c[0].getBoundingClientRect();
        return {
          width: d.width || c.prop('offsetWidth'),
          height: d.height || c.prop('offsetHeight'),
          top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
          left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
        };
      },
      positionElements: function (a, b, c, d) {
        var e, f, g, h, i = c.split('-'), j = i[0], k = i[1] || 'center';
        e = d ? this.offset(a) : this.position(a), f = b.prop('offsetWidth'), g = b.prop('offsetHeight');
        var l = {
            center: function () {
              return e.left + e.width / 2 - f / 2;
            },
            left: function () {
              return e.left;
            },
            right: function () {
              return e.left + e.width;
            }
          }, m = {
            center: function () {
              return e.top + e.height / 2 - g / 2;
            },
            top: function () {
              return e.top;
            },
            bottom: function () {
              return e.top + e.height;
            }
          };
        switch (j) {
        case 'right':
          h = {
            top: m[k](),
            left: l[j]()
          };
          break;
        case 'left':
          h = {
            top: m[k](),
            left: e.left - f
          };
          break;
        case 'bottom':
          h = {
            top: m[j](),
            left: l[k]()
          };
          break;
        default:
          h = {
            top: e.top - g,
            left: l[k]()
          };
        }
        return h;
      }
    };
  }
]), angular.module('ui.bootstrap.datepicker', [
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position'
]).constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: !0,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller('DatepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$interpolate',
  '$timeout',
  '$log',
  'dateFilter',
  'datepickerConfig',
  function (a, b, c, d, e, f, g, h) {
    var i = this, j = { $setViewValue: angular.noop };
    this.modes = [
      'day',
      'month',
      'year'
    ], angular.forEach([
      'formatDay',
      'formatMonth',
      'formatYear',
      'formatDayHeader',
      'formatDayTitle',
      'formatMonthTitle',
      'minMode',
      'maxMode',
      'showWeeks',
      'startingDay',
      'yearRange'
    ], function (c, e) {
      i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c];
    }), angular.forEach([
      'minDate',
      'maxDate'
    ], function (d) {
      b[d] ? a.$parent.$watch(c(b[d]), function (a) {
        i[d] = a ? new Date(a) : null, i.refreshView();
      }) : i[d] = h[d] ? new Date(h[d]) : null;
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = 'datepicker-' + a.$id + '-' + Math.floor(10000 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date(), a.isActive = function (b) {
      return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1;
    }, this.init = function (a) {
      j = a, j.$render = function () {
        i.render();
      };
    }, this.render = function () {
      if (j.$modelValue) {
        var a = new Date(j.$modelValue), b = !isNaN(a);
        b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity('date', b);
      }
      this.refreshView();
    }, this.refreshView = function () {
      if (this.element) {
        this._refreshView();
        var a = j.$modelValue ? new Date(j.$modelValue) : null;
        j.$setValidity('date-disabled', !a || this.element && !this.isDisabled(a));
      }
    }, this.createDateObject = function (a, b) {
      var c = j.$modelValue ? new Date(j.$modelValue) : null;
      return {
        date: a,
        label: g(a, b),
        selected: c && 0 === this.compare(a, c),
        disabled: this.isDisabled(a),
        current: 0 === this.compare(a, new Date())
      };
    }, this.isDisabled = function (c) {
      return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      });
    }, this.split = function (a, b) {
      for (var c = []; a.length > 0;)
        c.push(a.splice(0, b));
      return c;
    }, a.select = function (b) {
      if (a.datepickerMode === i.minMode) {
        var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render();
      } else
        i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1];
    }, a.move = function (a) {
      var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
      i.activeDate.setFullYear(b, c, 1), i.refreshView();
    }, a.toggleMode = function (b) {
      b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b]);
    }, a.keys = {
      13: 'enter',
      32: 'space',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    var k = function () {
      e(function () {
        i.element[0].focus();
      }, 0, !1);
    };
    a.$on('datepicker.focus', k), a.keydown = function (b) {
      var c = a.keys[b.which];
      if (c && !b.shiftKey && !b.altKey)
        if (b.preventDefault(), b.stopPropagation(), 'enter' === c || 'space' === c) {
          if (i.isDisabled(i.activeDate))
            return;
          a.select(i.activeDate), k();
        } else
          !b.ctrlKey || 'up' !== c && 'down' !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode('up' === c ? 1 : -1), k());
    };
  }
]).directive('datepicker', function () {
  return {
    restrict: 'EA',
    replace: !0,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&'
    },
    require: [
      'datepicker',
      '?^ngModel'
    ],
    controller: 'DatepickerController',
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f);
    }
  };
}).directive('daypicker', [
  'dateFilter',
  function (a) {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/datepicker/day.html',
      require: '^datepicker',
      link: function (b, c, d, e) {
        function f(a, b) {
          return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29;
        }
        function g(a, b) {
          var c = new Array(b), d = new Date(a), e = 0;
          for (d.setHours(12); b > e;)
            c[e++] = new Date(d), d.setDate(d.getDate() + 1);
          return c;
        }
        function h(a) {
          var b = new Date(a);
          b.setDate(b.getDate() + 4 - (b.getDay() || 7));
          var c = b.getTime();
          return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 86400000) / 7) + 1;
        }
        b.showWeeks = e.showWeeks, e.step = { months: 1 }, e.element = c;
        var i = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
          ];
        e._refreshView = function () {
          var c = e.activeDate.getFullYear(), d = e.activeDate.getMonth(), f = new Date(c, d, 1), i = e.startingDay - f.getDay(), j = i > 0 ? 7 - i : -i, k = new Date(f);
          j > 0 && k.setDate(-j + 1);
          for (var l = g(k, 42), m = 0; 42 > m; m++)
            l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
              secondary: l[m].getMonth() !== d,
              uid: b.uniqueId + '-' + m
            });
          b.labels = new Array(7);
          for (var n = 0; 7 > n; n++)
            b.labels[n] = {
              abbr: a(l[n].date, e.formatDayHeader),
              full: a(l[n].date, 'EEEE')
            };
          if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
            b.weekNumbers = [];
            for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
          }
        }, e.compare = function (a, b) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
        }, e.handleKeyDown = function (a) {
          var b = e.activeDate.getDate();
          if ('left' === a)
            b -= 1;
          else if ('up' === a)
            b -= 7;
          else if ('right' === a)
            b += 1;
          else if ('down' === a)
            b += 7;
          else if ('pageup' === a || 'pagedown' === a) {
            var c = e.activeDate.getMonth() + ('pageup' === a ? -1 : 1);
            e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b);
          } else
            'home' === a ? b = 1 : 'end' === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
          e.activeDate.setDate(b);
        }, e.refreshView();
      }
    };
  }
]).directive('monthpicker', [
  'dateFilter',
  function (a) {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/datepicker/month.html',
      require: '^datepicker',
      link: function (b, c, d, e) {
        e.step = { years: 1 }, e.element = c, e._refreshView = function () {
          for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++)
            c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), { uid: b.uniqueId + '-' + f });
          b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3);
        }, e.compare = function (a, b) {
          return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth());
        }, e.handleKeyDown = function (a) {
          var b = e.activeDate.getMonth();
          if ('left' === a)
            b -= 1;
          else if ('up' === a)
            b -= 3;
          else if ('right' === a)
            b += 1;
          else if ('down' === a)
            b += 3;
          else if ('pageup' === a || 'pagedown' === a) {
            var c = e.activeDate.getFullYear() + ('pageup' === a ? -1 : 1);
            e.activeDate.setFullYear(c);
          } else
            'home' === a ? b = 0 : 'end' === a && (b = 11);
          e.activeDate.setMonth(b);
        }, e.refreshView();
      }
    };
  }
]).directive('yearpicker', [
  'dateFilter',
  function () {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/datepicker/year.html',
      require: '^datepicker',
      link: function (a, b, c, d) {
        function e(a) {
          return parseInt((a - 1) / f, 10) * f + 1;
        }
        var f = d.yearRange;
        d.step = { years: f }, d.element = b, d._refreshView = function () {
          for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++)
            b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), { uid: a.uniqueId + '-' + c });
          a.title = [
            b[0].label,
            b[f - 1].label
          ].join(' - '), a.rows = d.split(b, 5);
        }, d.compare = function (a, b) {
          return a.getFullYear() - b.getFullYear();
        }, d.handleKeyDown = function (a) {
          var b = d.activeDate.getFullYear();
          'left' === a ? b -= 1 : 'up' === a ? b -= 5 : 'right' === a ? b += 1 : 'down' === a ? b += 5 : 'pageup' === a || 'pagedown' === a ? b += ('pageup' === a ? -1 : 1) * d.step.years : 'home' === a ? b = e(d.activeDate.getFullYear()) : 'end' === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b);
        }, d.refreshView();
      }
    };
  }
]).constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: !0,
  appendToBody: !1,
  showButtonBar: !0
}).directive('datepickerPopup', [
  '$compile',
  '$parse',
  '$document',
  '$position',
  'dateFilter',
  'dateParser',
  'datepickerPopupConfig',
  function (a, b, c, d, e, f, g) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        isOpen: '=?',
        currentText: '@',
        clearText: '@',
        closeText: '@',
        dateDisabled: '&'
      },
      link: function (h, i, j, k) {
        function l(a) {
          return a.replace(/([A-Z])/g, function (a) {
            return '-' + a.toLowerCase();
          });
        }
        function m(a) {
          if (a) {
            if (angular.isDate(a) && !isNaN(a))
              return k.$setValidity('date', !0), a;
            if (angular.isString(a)) {
              var b = f.parse(a, n) || new Date(a);
              return isNaN(b) ? void k.$setValidity('date', !1) : (k.$setValidity('date', !0), b);
            }
            return void k.$setValidity('date', !1);
          }
          return k.$setValidity('date', !0), null;
        }
        var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection, p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
        h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function (a) {
          return h[a + 'Text'] || g[a + 'Text'];
        }, j.$observe('datepickerPopup', function (a) {
          n = a || g.datepickerPopup, k.$render();
        });
        var q = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
        q.attr({
          'ng-model': 'date',
          'ng-change': 'dateSelection()'
        });
        var r = angular.element(q.children()[0]);
        j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function (a, b) {
          r.attr(l(b), a);
        }), h.watchData = {}, angular.forEach([
          'minDate',
          'maxDate',
          'datepickerMode'
        ], function (a) {
          if (j[a]) {
            var c = b(j[a]);
            if (h.$parent.$watch(c, function (b) {
                h.watchData[a] = b;
              }), r.attr(l(a), 'watchData.' + a), 'datepickerMode' === a) {
              var d = c.assign;
              h.$watch('watchData.' + a, function (a, b) {
                a !== b && d(h.$parent, a);
              });
            }
          }
        }), j.dateDisabled && r.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })'), k.$parsers.unshift(m), h.dateSelection = function (a) {
          angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus());
        }, i.bind('input change keyup', function () {
          h.$apply(function () {
            h.date = k.$modelValue;
          });
        }), k.$render = function () {
          var a = k.$viewValue ? e(k.$viewValue, n) : '';
          i.val(a), h.date = m(k.$modelValue);
        };
        var s = function (a) {
            h.isOpen && a.target !== i[0] && h.$apply(function () {
              h.isOpen = !1;
            });
          }, t = function (a) {
            h.keydown(a);
          };
        i.bind('keydown', t), h.keydown = function (a) {
          27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0);
        }, h.$watch('isOpen', function (a) {
          a ? (h.$broadcast('datepicker.focus'), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop('offsetHeight'), c.bind('click', s)) : c.unbind('click', s);
        }), h.select = function (a) {
          if ('today' === a) {
            var b = new Date();
            angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0));
          }
          h.dateSelection(a);
        }, h.close = function () {
          h.isOpen = !1, i[0].focus();
        };
        var u = a(q)(h);
        q.remove(), p ? c.find('body').append(u) : i.after(u), h.$on('$destroy', function () {
          u.remove(), i.unbind('keydown', t), c.unbind('click', s);
        });
      }
    };
  }
]).directive('datepickerPopupWrap', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    templateUrl: 'template/datepicker/popup.html',
    link: function (a, b) {
      b.bind('click', function (a) {
        a.preventDefault(), a.stopPropagation();
      });
    }
  };
}), angular.module('ui.bootstrap.dropdown', []).constant('dropdownConfig', { openClass: 'open' }).service('dropdownService', [
  '$document',
  function (a) {
    var b = null;
    this.open = function (e) {
      b || (a.bind('click', c), a.bind('keydown', d)), b && b !== e && (b.isOpen = !1), b = e;
    }, this.close = function (e) {
      b === e && (b = null, a.unbind('click', c), a.unbind('keydown', d));
    };
    var c = function (a) {
        if (b) {
          var c = b.getToggleElement();
          a && c && c[0].contains(a.target) || b.$apply(function () {
            b.isOpen = !1;
          });
        }
      }, d = function (a) {
        27 === a.which && (b.focusToggleElement(), c());
      };
  }
]).controller('DropdownController', [
  '$scope',
  '$attrs',
  '$parse',
  'dropdownConfig',
  'dropdownService',
  '$animate',
  function (a, b, c, d, e, f) {
    var g, h = this, i = a.$new(), j = d.openClass, k = angular.noop, l = b.onToggle ? c(b.onToggle) : angular.noop;
    this.init = function (d) {
      h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function (a) {
        i.isOpen = !!a;
      }));
    }, this.toggle = function (a) {
      return i.isOpen = arguments.length ? !!a : !i.isOpen;
    }, this.isOpen = function () {
      return i.isOpen;
    }, i.getToggleElement = function () {
      return h.toggleElement;
    }, i.focusToggleElement = function () {
      h.toggleElement && h.toggleElement[0].focus();
    }, i.$watch('isOpen', function (b, c) {
      f[b ? 'addClass' : 'removeClass'](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, { open: !!b });
    }), a.$on('$locationChangeSuccess', function () {
      i.isOpen = !1;
    }), a.$on('$destroy', function () {
      i.$destroy();
    });
  }
]).directive('dropdown', function () {
  return {
    controller: 'DropdownController',
    link: function (a, b, c, d) {
      d.init(b);
    }
  };
}).directive('dropdownToggle', function () {
  return {
    require: '?^dropdown',
    link: function (a, b, c, d) {
      if (d) {
        d.toggleElement = b;
        var e = function (e) {
          e.preventDefault(), b.hasClass('disabled') || c.disabled || a.$apply(function () {
            d.toggle();
          });
        };
        b.bind('click', e), b.attr({
          'aria-haspopup': !0,
          'aria-expanded': !1
        }), a.$watch(d.isOpen, function (a) {
          b.attr('aria-expanded', !!a);
        }), a.$on('$destroy', function () {
          b.unbind('click', e);
        });
      }
    }
  };
}), angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function () {
  return {
    createNew: function () {
      var a = [];
      return {
        add: function (b, c) {
          a.push({
            key: b,
            value: c
          });
        },
        get: function (b) {
          for (var c = 0; c < a.length; c++)
            if (b == a[c].key)
              return a[c];
        },
        keys: function () {
          for (var b = [], c = 0; c < a.length; c++)
            b.push(a[c].key);
          return b;
        },
        top: function () {
          return a[a.length - 1];
        },
        remove: function (b) {
          for (var c = -1, d = 0; d < a.length; d++)
            if (b == a[d].key) {
              c = d;
              break;
            }
          return a.splice(c, 1)[0];
        },
        removeTop: function () {
          return a.splice(a.length - 1, 1)[0];
        },
        length: function () {
          return a.length;
        }
      };
    }
  };
}).directive('modalBackdrop', [
  '$timeout',
  function (a) {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/modal/backdrop.html',
      link: function (b, c, d) {
        b.backdropClass = d.backdropClass || '', b.animate = !1, a(function () {
          b.animate = !0;
        });
      }
    };
  }
]).directive('modalWindow', [
  '$modalStack',
  '$timeout',
  function (a, b) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: !0,
      transclude: !0,
      templateUrl: function (a, b) {
        return b.templateUrl || 'template/modal/window.html';
      },
      link: function (c, d, e) {
        d.addClass(e.windowClass || ''), c.size = e.size, b(function () {
          c.animate = !0, d[0].querySelectorAll('[autofocus]').length || d[0].focus();
        }), c.close = function (b) {
          var c = a.getTop();
          c && c.value.backdrop && 'static' != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, 'backdrop click'));
        };
      }
    };
  }
]).directive('modalTransclude', function () {
  return {
    link: function (a, b, c, d, e) {
      e(a.$parent, function (a) {
        b.empty(), b.append(a);
      });
    }
  };
}).factory('$modalStack', [
  '$transition',
  '$timeout',
  '$document',
  '$compile',
  '$rootScope',
  '$$stackedMap',
  function (a, b, c, d, e, f) {
    function g() {
      for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)
        n.get(b[c]).value.backdrop && (a = c);
      return a;
    }
    function h(a) {
      var b = c.find('body').eq(0), d = n.get(a).value;
      n.remove(a), j(d.modalDomEl, d.modalScope, 300, function () {
        d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i();
      });
    }
    function i() {
      if (k && -1 == g()) {
        var a = l;
        j(k, l, 150, function () {
          a.$destroy(), a = null;
        }), k = void 0, l = void 0;
      }
    }
    function j(c, d, e, f) {
      function g() {
        g.done || (g.done = !0, c.remove(), f && f());
      }
      d.animate = !1;
      var h = a.transitionEndEventName;
      if (h) {
        var i = b(g, e);
        c.bind(h, function () {
          b.cancel(i), g(), d.$apply();
        });
      } else
        b(g);
    }
    var k, l, m = 'modal-open', n = f.createNew(), o = {};
    return e.$watch(g, function (a) {
      l && (l.index = a);
    }), c.bind('keydown', function (a) {
      var b;
      27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function () {
        o.dismiss(b.key, 'escape key press');
      })));
    }), o.open = function (a, b) {
      n.add(a, {
        deferred: b.deferred,
        modalScope: b.scope,
        backdrop: b.backdrop,
        keyboard: b.keyboard
      });
      var f = c.find('body').eq(0), h = g();
      if (h >= 0 && !k) {
        l = e.$new(!0), l.index = h;
        var i = angular.element('<div modal-backdrop></div>');
        i.attr('backdrop-class', b.backdropClass), k = d(i)(l), f.append(k);
      }
      var j = angular.element('<div modal-window></div>');
      j.attr({
        'template-url': b.windowTemplateUrl,
        'window-class': b.windowClass,
        size: b.size,
        index: n.length() - 1,
        animate: 'animate'
      }).html(b.content);
      var o = d(j)(b.scope);
      n.top().value.modalDomEl = o, f.append(o), f.addClass(m);
    }, o.close = function (a, b) {
      var c = n.get(a);
      c && (c.value.deferred.resolve(b), h(a));
    }, o.dismiss = function (a, b) {
      var c = n.get(a);
      c && (c.value.deferred.reject(b), h(a));
    }, o.dismissAll = function (a) {
      for (var b = this.getTop(); b;)
        this.dismiss(b.key, a), b = this.getTop();
    }, o.getTop = function () {
      return n.top();
    }, o;
  }
]).provider('$modal', function () {
  var a = {
      options: {
        backdrop: !0,
        keyboard: !0
      },
      $get: [
        '$injector',
        '$rootScope',
        '$q',
        '$http',
        '$templateCache',
        '$controller',
        '$modalStack',
        function (b, c, d, e, f, g, h) {
          function i(a) {
            return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, { cache: f }).then(function (a) {
              return a.data;
            });
          }
          function j(a) {
            var c = [];
            return angular.forEach(a, function (a) {
              (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)));
            }), c;
          }
          var k = {};
          return k.open = function (b) {
            var e = d.defer(), f = d.defer(), k = {
                result: e.promise,
                opened: f.promise,
                close: function (a) {
                  h.close(k, a);
                },
                dismiss: function (a) {
                  h.dismiss(k, a);
                }
              };
            if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)
              throw new Error('One of template or templateUrl options is required.');
            var l = d.all([i(b)].concat(j(b.resolve)));
            return l.then(function (a) {
              var d = (b.scope || c).$new();
              d.$close = k.close, d.$dismiss = k.dismiss;
              var f, i = {}, j = 1;
              b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
                i[c] = a[j++];
              }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                scope: d,
                deferred: e,
                content: a[0],
                backdrop: b.backdrop,
                keyboard: b.keyboard,
                backdropClass: b.backdropClass,
                windowClass: b.windowClass,
                windowTemplateUrl: b.windowTemplateUrl,
                size: b.size
              });
            }, function (a) {
              e.reject(a);
            }), l.then(function () {
              f.resolve(!0);
            }, function () {
              f.reject(!1);
            }), k;
          }, k;
        }
      ]
    };
  return a;
}), angular.module('ui.bootstrap.pagination', []).controller('PaginationController', [
  '$scope',
  '$attrs',
  '$parse',
  function (a, b, c) {
    var d = this, e = { $setViewValue: angular.noop }, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function (f, g) {
      e = f, this.config = g, e.$render = function () {
        d.render();
      }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
        d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages();
      }) : this.itemsPerPage = g.itemsPerPage;
    }, this.calculateTotalPages = function () {
      var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
      return Math.max(b || 0, 1);
    }, this.render = function () {
      a.page = parseInt(e.$viewValue, 10) || 1;
    }, a.selectPage = function (b) {
      a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render());
    }, a.getText = function (b) {
      return a[b + 'Text'] || d.config[b + 'Text'];
    }, a.noPrevious = function () {
      return 1 === a.page;
    }, a.noNext = function () {
      return a.page === a.totalPages;
    }, a.$watch('totalItems', function () {
      a.totalPages = d.calculateTotalPages();
    }), a.$watch('totalPages', function (b) {
      f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render();
    });
  }
]).constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: !1,
  directionLinks: !0,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: !0
}).directive('pagination', [
  '$parse',
  'paginationConfig',
  function (a, b) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        firstText: '@',
        previousText: '@',
        nextText: '@',
        lastText: '@'
      },
      require: [
        'pagination',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pagination.html',
      replace: !0,
      link: function (c, d, e, f) {
        function g(a, b, c) {
          return {
            number: a,
            text: b,
            active: c
          };
        }
        function h(a, b) {
          var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
          f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
          for (var h = d; e >= h; h++) {
            var i = g(h, h, h === a);
            c.push(i);
          }
          if (f && !l) {
            if (d > 1) {
              var j = g(d - 1, '...', !1);
              c.unshift(j);
            }
            if (b > e) {
              var m = g(e + 1, '...', !1);
              c.push(m);
            }
          }
          return c;
        }
        var i = f[0], j = f[1];
        if (j) {
          var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
          c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
            k = parseInt(a, 10), i.render();
          });
          var m = i.render;
          i.render = function () {
            m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages));
          };
        }
      }
    };
  }
]).constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '\xab Previous',
  nextText: 'Next \xbb',
  align: !0
}).directive('pager', [
  'pagerConfig',
  function (a) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        previousText: '@',
        nextText: '@'
      },
      require: [
        'pager',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pager.html',
      replace: !0,
      link: function (b, c, d, e) {
        var f = e[0], g = e[1];
        g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a));
      }
    };
  }
]), angular.module('ui.bootstrap.tooltip', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).provider('$tooltip', function () {
  function a(a) {
    var b = /[A-Z]/g, c = '-';
    return a.replace(b, function (a, b) {
      return (b ? c : '') + a.toLowerCase();
    });
  }
  var b = {
      placement: 'top',
      animation: !0,
      popupDelay: 0
    }, c = {
      mouseenter: 'mouseleave',
      click: 'click',
      focus: 'blur'
    }, d = {};
  this.options = function (a) {
    angular.extend(d, a);
  }, this.setTriggers = function (a) {
    angular.extend(c, a);
  }, this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$document',
    '$position',
    '$interpolate',
    function (e, f, g, h, i, j) {
      return function (e, k, l) {
        function m(a) {
          var b = a || n.trigger || l, d = c[b] || b;
          return {
            show: b,
            hide: d
          };
        }
        var n = angular.extend({}, b, d), o = a(e), p = j.startSymbol(), q = j.endSymbol(), r = '<div ' + o + '-popup title="' + p + 'title' + q + '" content="' + p + 'content' + q + '" placement="' + p + 'placement' + q + '" animation="animation" is-open="isOpen"></div>';
        return {
          restrict: 'EA',
          compile: function () {
            var a = f(r);
            return function (b, c, d) {
              function f() {
                D.isOpen ? l() : j();
              }
              function j() {
                (!C || b.$eval(d[k + 'Enable'])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function (a) {
                  a();
                })) : o()());
              }
              function l() {
                b.$apply(function () {
                  p();
                });
              }
              function o() {
                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                }), A ? h.find('body').append(w) : c.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop;
              }
              function p() {
                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r();
              }
              function q() {
                w && r(), x = D.$new(), w = a(x, angular.noop);
              }
              function r() {
                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null);
              }
              function s() {
                t(), u();
              }
              function t() {
                var a = d[k + 'Placement'];
                D.placement = angular.isDefined(a) ? a : n.placement;
              }
              function u() {
                var a = d[k + 'PopupDelay'], b = parseInt(a, 10);
                D.popupDelay = isNaN(b) ? n.popupDelay : b;
              }
              function v() {
                var a = d[k + 'Trigger'];
                F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l));
              }
              var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1, B = m(void 0), C = angular.isDefined(d[k + 'Enable']), D = b.$new(!0), E = function () {
                  var a = i.positionElements(c, w, D.placement, A);
                  a.top += 'px', a.left += 'px', w.css(a);
                };
              D.isOpen = !1, d.$observe(e, function (a) {
                D.content = a, !a && D.isOpen && p();
              }), d.$observe(k + 'Title', function (a) {
                D.title = a;
              });
              var F = function () {
                c.unbind(B.show, j), c.unbind(B.hide, l);
              };
              v();
              var G = b.$eval(d[k + 'Animation']);
              D.animation = angular.isDefined(G) ? !!G : n.animation;
              var H = b.$eval(d[k + 'AppendToBody']);
              A = angular.isDefined(H) ? H : A, A && b.$on('$locationChangeSuccess', function () {
                D.isOpen && p();
              }), b.$on('$destroy', function () {
                g.cancel(y), g.cancel(z), F(), r(), D = null;
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function (a) {
    return a('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function (a) {
    return a('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]), angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$tooltip',
  function (a) {
    return a('popover', 'popover', 'click');
  }
]), angular.module('ui.bootstrap.progressbar', []).constant('progressConfig', {
  animate: !0,
  max: 100
}).controller('ProgressController', [
  '$scope',
  '$attrs',
  'progressConfig',
  function (a, b, c) {
    var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) {
      e || c.css({ transition: 'none' }), this.bars.push(b), b.$watch('value', function (c) {
        b.percent = +(100 * c / a.max).toFixed(2);
      }), b.$on('$destroy', function () {
        c = null, d.removeBar(b);
      });
    }, this.removeBar = function (a) {
      this.bars.splice(this.bars.indexOf(a), 1);
    };
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    controller: 'ProgressController',
    require: 'progress',
    scope: {},
    templateUrl: 'template/progressbar/progress.html'
  };
}).directive('bar', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    require: '^progress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/bar.html',
    link: function (a, b, c, d) {
      d.addBar(a, b);
    }
  };
}).directive('progressbar', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    controller: 'ProgressController',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/progressbar.html',
    link: function (a, b, c, d) {
      d.addBar(a, angular.element(b.children()[0]));
    }
  };
}), angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller('RatingController', [
  '$scope',
  '$attrs',
  'ratingConfig',
  function (a, b, c) {
    var d = { $setViewValue: angular.noop };
    this.init = function (e) {
      d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
      var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
      a.range = this.buildTemplateObjects(f);
    }, this.buildTemplateObjects = function (a) {
      for (var b = 0, c = a.length; c > b; b++)
        a[b] = angular.extend({ index: b }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, a[b]);
      return a;
    }, a.rate = function (b) {
      !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render());
    }, a.enter = function (b) {
      a.readonly || (a.value = b), a.onHover({ value: b });
    }, a.reset = function () {
      a.value = d.$viewValue, a.onLeave();
    }, a.onKeydown = function (b) {
      /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)));
    }, this.render = function () {
      a.value = d.$viewValue;
    };
  }
]).directive('rating', function () {
  return {
    restrict: 'EA',
    require: [
      'rating',
      'ngModel'
    ],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: !0,
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f);
    }
  };
}), angular.module('ui.bootstrap.tabs', []).controller('TabsetController', [
  '$scope',
  function (a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function (a) {
      angular.forEach(c, function (b) {
        b.active && b !== a && (b.active = !1, b.onDeselect());
      }), a.active = !0, a.onSelect();
    }, b.addTab = function (a) {
      c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a);
    }, b.removeTab = function (a) {
      var e = c.indexOf(a);
      if (a.active && c.length > 1 && !d) {
        var f = e == c.length - 1 ? e - 1 : e + 1;
        b.select(c[f]);
      }
      c.splice(e, 1);
    };
    var d;
    a.$on('$destroy', function () {
      d = !0;
    });
  }
]).directive('tabset', function () {
  return {
    restrict: 'EA',
    transclude: !0,
    replace: !0,
    scope: { type: '@' },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function (a, b, c) {
      a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1;
    }
  };
}).directive('tab', [
  '$parse',
  function (a) {
    return {
      require: '^tabset',
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/tabs/tab.html',
      transclude: !0,
      scope: {
        active: '=?',
        heading: '@',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function () {
      },
      compile: function (b, c, d) {
        return function (b, c, e, f) {
          b.$watch('active', function (a) {
            a && f.select(b);
          }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
            b.disabled = !!a;
          }), b.select = function () {
            b.disabled || (b.active = !0);
          }, f.addTab(b), b.$on('$destroy', function () {
            f.removeTab(b);
          }), b.$transcludeFn = d;
        };
      }
    };
  }
]).directive('tabHeadingTransclude', [function () {
    return {
      restrict: 'A',
      require: '^tab',
      link: function (a, b) {
        a.$watch('headingElement', function (a) {
          a && (b.html(''), b.append(a));
        });
      }
    };
  }]).directive('tabContentTransclude', function () {
  function a(a) {
    return a.tagName && (a.hasAttribute('tab-heading') || a.hasAttribute('data-tab-heading') || 'tab-heading' === a.tagName.toLowerCase() || 'data-tab-heading' === a.tagName.toLowerCase());
  }
  return {
    restrict: 'A',
    require: '^tabset',
    link: function (b, c, d) {
      var e = b.$eval(d.tabContentTransclude);
      e.$transcludeFn(e.$parent, function (b) {
        angular.forEach(b, function (b) {
          a(b) ? e.headingElement = b : c.append(b);
        });
      });
    }
  };
}), angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: !0,
  meridians: null,
  readonlyInput: !1,
  mousewheel: !0
}).controller('TimepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$log',
  '$locale',
  'timepickerConfig',
  function (a, b, c, d, e, f) {
    function g() {
      var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
      return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0;
    }
    function h() {
      var b = parseInt(a.minutes, 10);
      return b >= 0 && 60 > b ? b : void 0;
    }
    function i(a) {
      return angular.isDefined(a) && a.toString().length < 2 ? '0' + a : a;
    }
    function j(a) {
      k(), o.$setViewValue(new Date(n)), l(a);
    }
    function k() {
      o.$setValidity('time', !0), a.invalidHours = !1, a.invalidMinutes = !1;
    }
    function l(b) {
      var c = n.getHours(), d = n.getMinutes();
      a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = 'h' === b ? c : i(c), a.minutes = 'm' === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1];
    }
    function m(a) {
      var b = new Date(n.getTime() + 60000 * a);
      n.setHours(b.getHours(), b.getMinutes()), j();
    }
    var n = new Date(), o = { $setViewValue: angular.noop }, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function (c, d) {
      o = c, o.$render = this.render;
      var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
      h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g);
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
      q = parseInt(a, 10);
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
      r = parseInt(a, 10);
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
      if (a.showMeridian = !!b, o.$error.time) {
        var c = g(), d = h();
        angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j());
      } else
        l();
    }), this.setupMousewheelEvents = function (b, c) {
      var d = function (a) {
        a.originalEvent && (a = a.originalEvent);
        var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
        return a.detail || b > 0;
      };
      b.bind('mousewheel wheel', function (b) {
        a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault();
      }), c.bind('mousewheel wheel', function (b) {
        a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault();
      });
    }, this.setupInputEvents = function (b, c) {
      if (a.readonlyInput)
        return a.updateHours = angular.noop, void (a.updateMinutes = angular.noop);
      var d = function (b, c) {
        o.$setViewValue(null), o.$setValidity('time', !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c);
      };
      a.updateHours = function () {
        var a = g();
        angular.isDefined(a) ? (n.setHours(a), j('h')) : d(!0);
      }, b.bind('blur', function () {
        !a.invalidHours && a.hours < 10 && a.$apply(function () {
          a.hours = i(a.hours);
        });
      }), a.updateMinutes = function () {
        var a = h();
        angular.isDefined(a) ? (n.setMinutes(a), j('m')) : d(void 0, !0);
      }, c.bind('blur', function () {
        !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
          a.minutes = i(a.minutes);
        });
      });
    }, this.render = function () {
      var a = o.$modelValue ? new Date(o.$modelValue) : null;
      isNaN(a) ? (o.$setValidity('time', !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l());
    }, a.incrementHours = function () {
      m(60 * q);
    }, a.decrementHours = function () {
      m(60 * -q);
    }, a.incrementMinutes = function () {
      m(r);
    }, a.decrementMinutes = function () {
      m(-r);
    }, a.toggleMeridian = function () {
      m(720 * (n.getHours() < 12 ? 1 : -1));
    };
  }
]).directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: [
      'timepicker',
      '?^ngModel'
    ],
    controller: 'TimepickerController',
    replace: !0,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f, b.find('input'));
    }
  };
}), angular.module('ui.bootstrap.typeahead', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).factory('typeaheadParser', [
  '$parse',
  function (a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function (c) {
        var d = c.match(b);
        if (!d)
          throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
        return {
          itemName: d[3],
          source: a(d[4]),
          viewMapper: a(d[2] || d[1]),
          modelMapper: a(d[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$timeout',
  '$document',
  '$position',
  'typeaheadParser',
  function (a, b, c, d, e, f, g) {
    var h = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (i, j, k, l) {
        var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1, u = i.$eval(k.typeaheadFocusFirst) !== !1, v = b(k.ngModel).assign, w = g.parse(k.typeahead), x = i.$new();
        i.$on('$destroy', function () {
          x.$destroy();
        });
        var y = 'typeahead-' + x.$id + '-' + Math.floor(10000 * Math.random());
        j.attr({
          'aria-autocomplete': 'list',
          'aria-expanded': !1,
          'aria-owns': y
        });
        var z = angular.element('<div typeahead-popup></div>');
        z.attr({
          id: y,
          matches: 'matches',
          active: 'activeIdx',
          select: 'select(activeIdx)',
          query: 'query',
          position: 'position'
        }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr('template-url', k.typeaheadTemplateUrl);
        var A = function () {
            x.matches = [], x.activeIdx = -1, j.attr('aria-expanded', !1);
          }, B = function (a) {
            return y + '-option-' + a;
          };
        x.$watch('activeIdx', function (a) {
          0 > a ? j.removeAttr('aria-activedescendant') : j.attr('aria-activedescendant', B(a));
        });
        var C = function (a) {
          var b = { $viewValue: a };
          q(i, !0), c.when(w.source(i, b)).then(function (c) {
            var d = a === l.$viewValue;
            if (d && m)
              if (c.length > 0) {
                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                for (var e = 0; e < c.length; e++)
                  b[w.itemName] = c[e], x.matches.push({
                    id: B(e),
                    label: w.viewMapper(x, b),
                    model: c[e]
                  });
                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop('offsetHeight'), j.attr('aria-expanded', !0);
              } else
                A();
            d && q(i, !1);
          }, function () {
            A(), q(i, !1);
          });
        };
        A(), x.query = void 0;
        var D, E = function (a) {
            D = d(function () {
              C(a);
            }, o);
          }, F = function () {
            D && d.cancel(D);
          };
        l.$parsers.unshift(function (a) {
          return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity('editable', !1) : (l.$setValidity('editable', !0), a);
        }), l.$formatters.push(function (a) {
          var b, c, d = {};
          return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a);
        }), x.select = function (a) {
          var b, c, e = {};
          e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity('editable', !0), r(i, {
            $item: c,
            $model: b,
            $label: w.viewMapper(i, e)
          }), A(), d(function () {
            j[0].focus();
          }, 0, !1);
        }, j.bind('keydown', function (a) {
          0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function () {
            x.select(x.activeIdx);
          }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()));
        }), j.bind('blur', function () {
          m = !1;
        });
        var G = function (a) {
          j[0] !== a.target && (A(), x.$digest());
        };
        e.bind('click', G), i.$on('$destroy', function () {
          e.unbind('click', G), t && H.remove();
        });
        var H = a(z)(x);
        t ? e.find('body').append(H) : j.after(H);
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: !0,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function (a, b, c) {
      a.templateUrl = c.templateUrl, a.isOpen = function () {
        return a.matches.length > 0;
      }, a.isActive = function (b) {
        return a.active == b;
      }, a.selectActive = function (b) {
        a.active = b;
      }, a.selectMatch = function (b) {
        a.select({ activeIdx: b });
      };
    }
  };
}).directive('typeaheadMatch', [
  '$http',
  '$templateCache',
  '$compile',
  '$parse',
  function (a, b, c, d) {
    return {
      restrict: 'EA',
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function (e, f, g) {
        var h = d(g.templateUrl)(e.$parent) || 'template/typeahead/typeahead-match.html';
        a.get(h, { cache: b }).success(function (a) {
          f.replaceWith(c(a.trim())(e));
        });
      }
    };
  }
]).filter('typeaheadHighlight', function () {
  function a(a) {
    return a.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (b, c) {
    return c ? ('' + b).replace(new RegExp(a(c), 'gi'), '<strong>$&</strong>') : b;
  };
}), angular.module('template/accordion/accordion-group.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/accordion/accordion-group.html', '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n\t  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n');
  }
]), angular.module('template/accordion/accordion.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/accordion/accordion.html', '<div class="panel-group" ng-transclude></div>');
  }
]), angular.module('template/alert/alert.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/alert/alert.html', '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n');
  }
]), angular.module('template/carousel/carousel.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n');
  }
]), angular.module('template/carousel/slide.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/carousel/slide.html', '<div ng-class="{\n    \'active\': leaving || (active && !entering),\n    \'prev\': (next || active) && direction==\'prev\',\n    \'next\': (next || active) && direction==\'next\',\n    \'right\': direction==\'prev\',\n    \'left\': direction==\'next\'\n  }" class="item text-center" ng-transclude></div>\n');
  }
]), angular.module('template/datepicker/datepicker.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/datepicker.html', '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>');
  }
]), angular.module('template/datepicker/day.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/day.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
  }
]), angular.module('template/datepicker/month.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/month.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
  }
]), angular.module('template/datepicker/popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/popup.html', '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n\t<li ng-transclude></li>\n\t<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n\t\t<span class="btn-group pull-left">\n\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n\t\t</span>\n\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n\t</li>\n</ul>\n');
  }
]), angular.module('template/datepicker/year.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/year.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
  }
]), angular.module('template/modal/backdrop.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/modal/backdrop.html', '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
  }
]), angular.module('template/modal/window.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/modal/window.html', '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>');
  }
]), angular.module('template/pagination/pager.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/pagination/pager.html', '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>');
  }
]), angular.module('template/pagination/pagination.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/pagination/pagination.html', '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>');
  }
]), angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n');
  }
]), angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
  }
]), angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
  }
]), angular.module('template/progressbar/bar.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/progressbar/bar.html', '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>');
  }
]), angular.module('template/progressbar/progress.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/progressbar/progress.html', '<div class="progress" ng-transclude></div>');
  }
]), angular.module('template/progressbar/progressbar.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/progressbar/progressbar.html', '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>');
  }
]), angular.module('template/rating/rating.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/rating/rating.html', '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>');
  }
]), angular.module('template/tabs/tab.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tabs/tab.html', '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n');
  }
]), angular.module('template/tabs/tabset.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tabs/tabset.html', '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n');
  }
]), angular.module('template/timepicker/timepicker.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/timepicker/timepicker.html', '<table>\n\t<tbody>\n\t\t<tr class="text-center">\n\t\t\t<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n\t\t\t<td ng-show="showMeridian"></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n\t\t\t\t<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n\t\t\t</td>\n\t\t\t<td>:</td>\n\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n\t\t\t\t<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n\t\t\t</td>\n\t\t\t<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n\t\t</tr>\n\t\t<tr class="text-center">\n\t\t\t<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n\t\t\t<td ng-show="showMeridian"></td>\n\t\t</tr>\n\t</tbody>\n</table>\n');
  }
]), angular.module('template/typeahead/typeahead-match.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/typeahead/typeahead-match.html', '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]), angular.module('template/typeahead/typeahead-popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/typeahead/typeahead-popup.html', '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n');
  }
]);