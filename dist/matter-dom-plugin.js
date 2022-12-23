var te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ne = {}, ge = {
  get exports() {
    return ne;
  },
  set exports(T) {
    ne = T;
  }
};
/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(T, N) {
  (function(R, d) {
    T.exports = d();
  })(te, function() {
    return function(I) {
      var R = {};
      function d(e) {
        if (R[e])
          return R[e].exports;
        var l = R[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return I[e].call(l.exports, l, l.exports, d), l.l = !0, l.exports;
      }
      return d.m = I, d.c = R, d.d = function(e, l, s) {
        d.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: s });
      }, d.r = function(e) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, d.t = function(e, l) {
        if (l & 1 && (e = d(e)), l & 8 || l & 4 && typeof e == "object" && e && e.__esModule)
          return e;
        var s = /* @__PURE__ */ Object.create(null);
        if (d.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), l & 2 && typeof e != "string")
          for (var a in e)
            d.d(s, a, function(u) {
              return e[u];
            }.bind(null, a));
        return s;
      }, d.n = function(e) {
        var l = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return d.d(l, "a", l), l;
      }, d.o = function(e, l) {
        return Object.prototype.hasOwnProperty.call(e, l);
      }, d.p = "", d(d.s = 21);
    }([
      function(I, R) {
        var d = {};
        I.exports = d, function() {
          d._nextId = 0, d._seed = 0, d._nowStartTime = +new Date(), d._warnedOnce = {}, d._decomp = null, d.extend = function(l, s) {
            var a, u;
            typeof s == "boolean" ? (a = 2, u = s) : (a = 1, u = !0);
            for (var n = a; n < arguments.length; n++) {
              var f = arguments[n];
              if (f)
                for (var i in f)
                  u && f[i] && f[i].constructor === Object && (!l[i] || l[i].constructor === Object) ? (l[i] = l[i] || {}, d.extend(l[i], u, f[i])) : l[i] = f[i];
            }
            return l;
          }, d.clone = function(l, s) {
            return d.extend({}, s, l);
          }, d.keys = function(l) {
            if (Object.keys)
              return Object.keys(l);
            var s = [];
            for (var a in l)
              s.push(a);
            return s;
          }, d.values = function(l) {
            var s = [];
            if (Object.keys) {
              for (var a = Object.keys(l), u = 0; u < a.length; u++)
                s.push(l[a[u]]);
              return s;
            }
            for (var n in l)
              s.push(l[n]);
            return s;
          }, d.get = function(l, s, a, u) {
            s = s.split(".").slice(a, u);
            for (var n = 0; n < s.length; n += 1)
              l = l[s[n]];
            return l;
          }, d.set = function(l, s, a, u, n) {
            var f = s.split(".").slice(u, n);
            return d.get(l, s, 0, -1)[f[f.length - 1]] = a, a;
          }, d.shuffle = function(l) {
            for (var s = l.length - 1; s > 0; s--) {
              var a = Math.floor(d.random() * (s + 1)), u = l[s];
              l[s] = l[a], l[a] = u;
            }
            return l;
          }, d.choose = function(l) {
            return l[Math.floor(d.random() * l.length)];
          }, d.isElement = function(l) {
            return typeof HTMLElement < "u" ? l instanceof HTMLElement : !!(l && l.nodeType && l.nodeName);
          }, d.isArray = function(l) {
            return Object.prototype.toString.call(l) === "[object Array]";
          }, d.isFunction = function(l) {
            return typeof l == "function";
          }, d.isPlainObject = function(l) {
            return typeof l == "object" && l.constructor === Object;
          }, d.isString = function(l) {
            return toString.call(l) === "[object String]";
          }, d.clamp = function(l, s, a) {
            return l < s ? s : l > a ? a : l;
          }, d.sign = function(l) {
            return l < 0 ? -1 : 1;
          }, d.now = function() {
            if (typeof window < "u" && window.performance) {
              if (window.performance.now)
                return window.performance.now();
              if (window.performance.webkitNow)
                return window.performance.webkitNow();
            }
            return Date.now ? Date.now() : new Date() - d._nowStartTime;
          }, d.random = function(l, s) {
            return l = typeof l < "u" ? l : 0, s = typeof s < "u" ? s : 1, l + e() * (s - l);
          };
          var e = function() {
            return d._seed = (d._seed * 9301 + 49297) % 233280, d._seed / 233280;
          };
          d.colorToNumber = function(l) {
            return l = l.replace("#", ""), l.length == 3 && (l = l.charAt(0) + l.charAt(0) + l.charAt(1) + l.charAt(1) + l.charAt(2) + l.charAt(2)), parseInt(l, 16);
          }, d.logLevel = 1, d.log = function() {
            console && d.logLevel > 0 && d.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, d.info = function() {
            console && d.logLevel > 0 && d.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, d.warn = function() {
            console && d.logLevel > 0 && d.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
          }, d.warnOnce = function() {
            var l = Array.prototype.slice.call(arguments).join(" ");
            d._warnedOnce[l] || (d.warn(l), d._warnedOnce[l] = !0);
          }, d.deprecated = function(l, s, a) {
            l[s] = d.chain(function() {
              d.warnOnce("🔅 deprecated 🔅", a);
            }, l[s]);
          }, d.nextId = function() {
            return d._nextId++;
          }, d.indexOf = function(l, s) {
            if (l.indexOf)
              return l.indexOf(s);
            for (var a = 0; a < l.length; a++)
              if (l[a] === s)
                return a;
            return -1;
          }, d.map = function(l, s) {
            if (l.map)
              return l.map(s);
            for (var a = [], u = 0; u < l.length; u += 1)
              a.push(s(l[u]));
            return a;
          }, d.topologicalSort = function(l) {
            var s = [], a = [], u = [];
            for (var n in l)
              !a[n] && !u[n] && d._topologicalSort(n, a, u, l, s);
            return s;
          }, d._topologicalSort = function(l, s, a, u, n) {
            var f = u[l] || [];
            a[l] = !0;
            for (var i = 0; i < f.length; i += 1) {
              var t = f[i];
              a[t] || s[t] || d._topologicalSort(t, s, a, u, n);
            }
            a[l] = !1, s[l] = !0, n.push(l);
          }, d.chain = function() {
            for (var l = [], s = 0; s < arguments.length; s += 1) {
              var a = arguments[s];
              a._chained ? l.push.apply(l, a._chained) : l.push(a);
            }
            var u = function() {
              for (var n, f = new Array(arguments.length), i = 0, t = arguments.length; i < t; i++)
                f[i] = arguments[i];
              for (i = 0; i < l.length; i += 1) {
                var r = l[i].apply(n, f);
                typeof r < "u" && (n = r);
              }
              return n;
            };
            return u._chained = l, u;
          }, d.chainPathBefore = function(l, s, a) {
            return d.set(l, s, d.chain(
              a,
              d.get(l, s)
            ));
          }, d.chainPathAfter = function(l, s, a) {
            return d.set(l, s, d.chain(
              d.get(l, s),
              a
            ));
          }, d.setDecomp = function(l) {
            d._decomp = l;
          }, d.getDecomp = function() {
            var l = d._decomp;
            try {
              !l && typeof window < "u" && (l = window.decomp), !l && typeof te < "u" && (l = te.decomp);
            } catch {
              l = null;
            }
            return l;
          };
        }();
      },
      function(I, R) {
        var d = {};
        I.exports = d, function() {
          d.create = function(e) {
            var l = {
              min: { x: 0, y: 0 },
              max: { x: 0, y: 0 }
            };
            return e && d.update(l, e), l;
          }, d.update = function(e, l, s) {
            e.min.x = 1 / 0, e.max.x = -1 / 0, e.min.y = 1 / 0, e.max.y = -1 / 0;
            for (var a = 0; a < l.length; a++) {
              var u = l[a];
              u.x > e.max.x && (e.max.x = u.x), u.x < e.min.x && (e.min.x = u.x), u.y > e.max.y && (e.max.y = u.y), u.y < e.min.y && (e.min.y = u.y);
            }
            s && (s.x > 0 ? e.max.x += s.x : e.min.x += s.x, s.y > 0 ? e.max.y += s.y : e.min.y += s.y);
          }, d.contains = function(e, l) {
            return l.x >= e.min.x && l.x <= e.max.x && l.y >= e.min.y && l.y <= e.max.y;
          }, d.overlaps = function(e, l) {
            return e.min.x <= l.max.x && e.max.x >= l.min.x && e.max.y >= l.min.y && e.min.y <= l.max.y;
          }, d.translate = function(e, l) {
            e.min.x += l.x, e.max.x += l.x, e.min.y += l.y, e.max.y += l.y;
          }, d.shift = function(e, l) {
            var s = e.max.x - e.min.x, a = e.max.y - e.min.y;
            e.min.x = l.x, e.max.x = l.x + s, e.min.y = l.y, e.max.y = l.y + a;
          };
        }();
      },
      function(I, R) {
        var d = {};
        I.exports = d, function() {
          d.create = function(e, l) {
            return { x: e || 0, y: l || 0 };
          }, d.clone = function(e) {
            return { x: e.x, y: e.y };
          }, d.magnitude = function(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
          }, d.magnitudeSquared = function(e) {
            return e.x * e.x + e.y * e.y;
          }, d.rotate = function(e, l, s) {
            var a = Math.cos(l), u = Math.sin(l);
            s || (s = {});
            var n = e.x * a - e.y * u;
            return s.y = e.x * u + e.y * a, s.x = n, s;
          }, d.rotateAbout = function(e, l, s, a) {
            var u = Math.cos(l), n = Math.sin(l);
            a || (a = {});
            var f = s.x + ((e.x - s.x) * u - (e.y - s.y) * n);
            return a.y = s.y + ((e.x - s.x) * n + (e.y - s.y) * u), a.x = f, a;
          }, d.normalise = function(e) {
            var l = d.magnitude(e);
            return l === 0 ? { x: 0, y: 0 } : { x: e.x / l, y: e.y / l };
          }, d.dot = function(e, l) {
            return e.x * l.x + e.y * l.y;
          }, d.cross = function(e, l) {
            return e.x * l.y - e.y * l.x;
          }, d.cross3 = function(e, l, s) {
            return (l.x - e.x) * (s.y - e.y) - (l.y - e.y) * (s.x - e.x);
          }, d.add = function(e, l, s) {
            return s || (s = {}), s.x = e.x + l.x, s.y = e.y + l.y, s;
          }, d.sub = function(e, l, s) {
            return s || (s = {}), s.x = e.x - l.x, s.y = e.y - l.y, s;
          }, d.mult = function(e, l) {
            return { x: e.x * l, y: e.y * l };
          }, d.div = function(e, l) {
            return { x: e.x / l, y: e.y / l };
          }, d.perp = function(e, l) {
            return l = l === !0 ? -1 : 1, { x: l * -e.y, y: l * e.x };
          }, d.neg = function(e) {
            return { x: -e.x, y: -e.y };
          }, d.angle = function(e, l) {
            return Math.atan2(l.y - e.y, l.x - e.x);
          }, d._temp = [
            d.create(),
            d.create(),
            d.create(),
            d.create(),
            d.create(),
            d.create()
          ];
        }();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(2), s = d(0);
        (function() {
          e.create = function(a, u) {
            for (var n = [], f = 0; f < a.length; f++) {
              var i = a[f], t = {
                x: i.x,
                y: i.y,
                index: f,
                body: u,
                isInternal: !1
              };
              n.push(t);
            }
            return n;
          }, e.fromPath = function(a, u) {
            var n = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, f = [];
            return a.replace(n, function(i, t, r) {
              f.push({ x: parseFloat(t), y: parseFloat(r) });
            }), e.create(f, u);
          }, e.centre = function(a) {
            for (var u = e.area(a, !0), n = { x: 0, y: 0 }, f, i, t, r = 0; r < a.length; r++)
              t = (r + 1) % a.length, f = l.cross(a[r], a[t]), i = l.mult(l.add(a[r], a[t]), f), n = l.add(n, i);
            return l.div(n, 6 * u);
          }, e.mean = function(a) {
            for (var u = { x: 0, y: 0 }, n = 0; n < a.length; n++)
              u.x += a[n].x, u.y += a[n].y;
            return l.div(u, a.length);
          }, e.area = function(a, u) {
            for (var n = 0, f = a.length - 1, i = 0; i < a.length; i++)
              n += (a[f].x - a[i].x) * (a[f].y + a[i].y), f = i;
            return u ? n / 2 : Math.abs(n) / 2;
          }, e.inertia = function(a, u) {
            for (var n = 0, f = 0, i = a, t, r, o = 0; o < i.length; o++)
              r = (o + 1) % i.length, t = Math.abs(l.cross(i[r], i[o])), n += t * (l.dot(i[r], i[r]) + l.dot(i[r], i[o]) + l.dot(i[o], i[o])), f += t;
            return u / 6 * (n / f);
          }, e.translate = function(a, u, n) {
            n = typeof n < "u" ? n : 1;
            var f = a.length, i = u.x * n, t = u.y * n, r;
            for (r = 0; r < f; r++)
              a[r].x += i, a[r].y += t;
            return a;
          }, e.rotate = function(a, u, n) {
            if (u !== 0) {
              var f = Math.cos(u), i = Math.sin(u), t = n.x, r = n.y, o = a.length, c, m, C, w;
              for (w = 0; w < o; w++)
                c = a[w], m = c.x - t, C = c.y - r, c.x = t + (m * f - C * i), c.y = r + (m * i + C * f);
              return a;
            }
          }, e.contains = function(a, u) {
            for (var n = u.x, f = u.y, i = a.length, t = a[i - 1], r, o = 0; o < i; o++) {
              if (r = a[o], (n - t.x) * (r.y - t.y) + (f - t.y) * (t.x - r.x) > 0)
                return !1;
              t = r;
            }
            return !0;
          }, e.scale = function(a, u, n, f) {
            if (u === 1 && n === 1)
              return a;
            f = f || e.centre(a);
            for (var i, t, r = 0; r < a.length; r++)
              i = a[r], t = l.sub(i, f), a[r].x = f.x + t.x * u, a[r].y = f.y + t.y * n;
            return a;
          }, e.chamfer = function(a, u, n, f, i) {
            typeof u == "number" ? u = [u] : u = u || [8], n = typeof n < "u" ? n : -1, f = f || 2, i = i || 14;
            for (var t = [], r = 0; r < a.length; r++) {
              var o = a[r - 1 >= 0 ? r - 1 : a.length - 1], c = a[r], m = a[(r + 1) % a.length], C = u[r < u.length ? r : u.length - 1];
              if (C === 0) {
                t.push(c);
                continue;
              }
              var w = l.normalise({
                x: c.y - o.y,
                y: o.x - c.x
              }), v = l.normalise({
                x: m.y - c.y,
                y: c.x - m.x
              }), g = Math.sqrt(2 * Math.pow(C, 2)), x = l.mult(s.clone(w), C), p = l.normalise(l.mult(l.add(w, v), 0.5)), S = l.sub(c, l.mult(p, g)), y = n;
              n === -1 && (y = Math.pow(C, 0.32) * 1.75), y = s.clamp(y, f, i), y % 2 === 1 && (y += 1);
              for (var P = Math.acos(l.dot(w, v)), h = P / y, M = 0; M < y; M++)
                t.push(l.add(l.rotate(x, h * M), S));
            }
            return t;
          }, e.clockwiseSort = function(a) {
            var u = e.mean(a);
            return a.sort(function(n, f) {
              return l.angle(u, n) - l.angle(u, f);
            }), a;
          }, e.isConvex = function(a) {
            var u = 0, n = a.length, f, i, t, r;
            if (n < 3)
              return null;
            for (f = 0; f < n; f++)
              if (i = (f + 1) % n, t = (f + 2) % n, r = (a[i].x - a[f].x) * (a[t].y - a[i].y), r -= (a[i].y - a[f].y) * (a[t].x - a[i].x), r < 0 ? u |= 1 : r > 0 && (u |= 2), u === 3)
                return !1;
            return u !== 0 ? !0 : null;
          }, e.hull = function(a) {
            var u = [], n = [], f, i;
            for (a = a.slice(0), a.sort(function(t, r) {
              var o = t.x - r.x;
              return o !== 0 ? o : t.y - r.y;
            }), i = 0; i < a.length; i += 1) {
              for (f = a[i]; n.length >= 2 && l.cross3(n[n.length - 2], n[n.length - 1], f) <= 0; )
                n.pop();
              n.push(f);
            }
            for (i = a.length - 1; i >= 0; i -= 1) {
              for (f = a[i]; u.length >= 2 && l.cross3(u[u.length - 2], u[u.length - 1], f) <= 0; )
                u.pop();
              u.push(f);
            }
            return u.pop(), n.pop(), u.concat(n);
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(0);
        (function() {
          e.on = function(s, a, u) {
            for (var n = a.split(" "), f, i = 0; i < n.length; i++)
              f = n[i], s.events = s.events || {}, s.events[f] = s.events[f] || [], s.events[f].push(u);
            return u;
          }, e.off = function(s, a, u) {
            if (!a) {
              s.events = {};
              return;
            }
            typeof a == "function" && (u = a, a = l.keys(s.events).join(" "));
            for (var n = a.split(" "), f = 0; f < n.length; f++) {
              var i = s.events[n[f]], t = [];
              if (u && i)
                for (var r = 0; r < i.length; r++)
                  i[r] !== u && t.push(i[r]);
              s.events[n[f]] = t;
            }
          }, e.trigger = function(s, a, u) {
            var n, f, i, t, r = s.events;
            if (r && l.keys(r).length > 0) {
              u || (u = {}), n = a.split(" ");
              for (var o = 0; o < n.length; o++)
                if (f = n[o], i = r[f], i) {
                  t = l.clone(u, !1), t.name = f, t.source = s;
                  for (var c = 0; c < i.length; c++)
                    i[c].apply(s, [t]);
                }
            }
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(4), s = d(0), a = d(1), u = d(6);
        (function() {
          e.create = function(n) {
            return s.extend({
              id: s.nextId(),
              type: "composite",
              parent: null,
              isModified: !1,
              bodies: [],
              constraints: [],
              composites: [],
              label: "Composite",
              plugin: {},
              cache: {
                allBodies: null,
                allConstraints: null,
                allComposites: null
              }
            }, n);
          }, e.setModified = function(n, f, i, t) {
            if (n.isModified = f, f && n.cache && (n.cache.allBodies = null, n.cache.allConstraints = null, n.cache.allComposites = null), i && n.parent && e.setModified(n.parent, f, i, t), t)
              for (var r = 0; r < n.composites.length; r++) {
                var o = n.composites[r];
                e.setModified(o, f, i, t);
              }
          }, e.add = function(n, f) {
            var i = [].concat(f);
            l.trigger(n, "beforeAdd", { object: f });
            for (var t = 0; t < i.length; t++) {
              var r = i[t];
              switch (r.type) {
                case "body":
                  if (r.parent !== r) {
                    s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                    break;
                  }
                  e.addBody(n, r);
                  break;
                case "constraint":
                  e.addConstraint(n, r);
                  break;
                case "composite":
                  e.addComposite(n, r);
                  break;
                case "mouseConstraint":
                  e.addConstraint(n, r.constraint);
                  break;
              }
            }
            return l.trigger(n, "afterAdd", { object: f }), n;
          }, e.remove = function(n, f, i) {
            var t = [].concat(f);
            l.trigger(n, "beforeRemove", { object: f });
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              switch (o.type) {
                case "body":
                  e.removeBody(n, o, i);
                  break;
                case "constraint":
                  e.removeConstraint(n, o, i);
                  break;
                case "composite":
                  e.removeComposite(n, o, i);
                  break;
                case "mouseConstraint":
                  e.removeConstraint(n, o.constraint);
                  break;
              }
            }
            return l.trigger(n, "afterRemove", { object: f }), n;
          }, e.addComposite = function(n, f) {
            return n.composites.push(f), f.parent = n, e.setModified(n, !0, !0, !1), n;
          }, e.removeComposite = function(n, f, i) {
            var t = s.indexOf(n.composites, f);
            if (t !== -1 && e.removeCompositeAt(n, t), i)
              for (var r = 0; r < n.composites.length; r++)
                e.removeComposite(n.composites[r], f, !0);
            return n;
          }, e.removeCompositeAt = function(n, f) {
            return n.composites.splice(f, 1), e.setModified(n, !0, !0, !1), n;
          }, e.addBody = function(n, f) {
            return n.bodies.push(f), e.setModified(n, !0, !0, !1), n;
          }, e.removeBody = function(n, f, i) {
            var t = s.indexOf(n.bodies, f);
            if (t !== -1 && e.removeBodyAt(n, t), i)
              for (var r = 0; r < n.composites.length; r++)
                e.removeBody(n.composites[r], f, !0);
            return n;
          }, e.removeBodyAt = function(n, f) {
            return n.bodies.splice(f, 1), e.setModified(n, !0, !0, !1), n;
          }, e.addConstraint = function(n, f) {
            return n.constraints.push(f), e.setModified(n, !0, !0, !1), n;
          }, e.removeConstraint = function(n, f, i) {
            var t = s.indexOf(n.constraints, f);
            if (t !== -1 && e.removeConstraintAt(n, t), i)
              for (var r = 0; r < n.composites.length; r++)
                e.removeConstraint(n.composites[r], f, !0);
            return n;
          }, e.removeConstraintAt = function(n, f) {
            return n.constraints.splice(f, 1), e.setModified(n, !0, !0, !1), n;
          }, e.clear = function(n, f, i) {
            if (i)
              for (var t = 0; t < n.composites.length; t++)
                e.clear(n.composites[t], f, !0);
            return f ? n.bodies = n.bodies.filter(function(r) {
              return r.isStatic;
            }) : n.bodies.length = 0, n.constraints.length = 0, n.composites.length = 0, e.setModified(n, !0, !0, !1), n;
          }, e.allBodies = function(n) {
            if (n.cache && n.cache.allBodies)
              return n.cache.allBodies;
            for (var f = [].concat(n.bodies), i = 0; i < n.composites.length; i++)
              f = f.concat(e.allBodies(n.composites[i]));
            return n.cache && (n.cache.allBodies = f), f;
          }, e.allConstraints = function(n) {
            if (n.cache && n.cache.allConstraints)
              return n.cache.allConstraints;
            for (var f = [].concat(n.constraints), i = 0; i < n.composites.length; i++)
              f = f.concat(e.allConstraints(n.composites[i]));
            return n.cache && (n.cache.allConstraints = f), f;
          }, e.allComposites = function(n) {
            if (n.cache && n.cache.allComposites)
              return n.cache.allComposites;
            for (var f = [].concat(n.composites), i = 0; i < n.composites.length; i++)
              f = f.concat(e.allComposites(n.composites[i]));
            return n.cache && (n.cache.allComposites = f), f;
          }, e.get = function(n, f, i) {
            var t, r;
            switch (i) {
              case "body":
                t = e.allBodies(n);
                break;
              case "constraint":
                t = e.allConstraints(n);
                break;
              case "composite":
                t = e.allComposites(n).concat(n);
                break;
            }
            return t ? (r = t.filter(function(o) {
              return o.id.toString() === f.toString();
            }), r.length === 0 ? null : r[0]) : null;
          }, e.move = function(n, f, i) {
            return e.remove(n, f), e.add(i, f), n;
          }, e.rebase = function(n) {
            for (var f = e.allBodies(n).concat(e.allConstraints(n)).concat(e.allComposites(n)), i = 0; i < f.length; i++)
              f[i].id = s.nextId();
            return n;
          }, e.translate = function(n, f, i) {
            for (var t = i ? e.allBodies(n) : n.bodies, r = 0; r < t.length; r++)
              u.translate(t[r], f);
            return n;
          }, e.rotate = function(n, f, i, t) {
            for (var r = Math.cos(f), o = Math.sin(f), c = t ? e.allBodies(n) : n.bodies, m = 0; m < c.length; m++) {
              var C = c[m], w = C.position.x - i.x, v = C.position.y - i.y;
              u.setPosition(C, {
                x: i.x + (w * r - v * o),
                y: i.y + (w * o + v * r)
              }), u.rotate(C, f);
            }
            return n;
          }, e.scale = function(n, f, i, t, r) {
            for (var o = r ? e.allBodies(n) : n.bodies, c = 0; c < o.length; c++) {
              var m = o[c], C = m.position.x - t.x, w = m.position.y - t.y;
              u.setPosition(m, {
                x: t.x + C * f,
                y: t.y + w * i
              }), u.scale(m, f, i);
            }
            return n;
          }, e.bounds = function(n) {
            for (var f = e.allBodies(n), i = [], t = 0; t < f.length; t += 1) {
              var r = f[t];
              i.push(r.bounds.min, r.bounds.max);
            }
            return a.create(i);
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(3), s = d(2), a = d(7);
        d(16);
        var u = d(0), n = d(1), f = d(11);
        (function() {
          e._inertiaScale = 4, e._nextCollidingGroupId = 1, e._nextNonCollidingGroupId = -1, e._nextCategory = 1, e.create = function(t) {
            var r = {
              id: u.nextId(),
              type: "body",
              label: "Body",
              parts: [],
              plugin: {},
              angle: 0,
              vertices: l.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
              position: { x: 0, y: 0 },
              force: { x: 0, y: 0 },
              torque: 0,
              positionImpulse: { x: 0, y: 0 },
              constraintImpulse: { x: 0, y: 0, angle: 0 },
              totalContacts: 0,
              speed: 0,
              angularSpeed: 0,
              velocity: { x: 0, y: 0 },
              angularVelocity: 0,
              isSensor: !1,
              isStatic: !1,
              isSleeping: !1,
              motion: 0,
              sleepThreshold: 60,
              density: 1e-3,
              restitution: 0,
              friction: 0.1,
              frictionStatic: 0.5,
              frictionAir: 0.01,
              collisionFilter: {
                category: 1,
                mask: 4294967295,
                group: 0
              },
              slop: 0.05,
              timeScale: 1,
              render: {
                visible: !0,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                  xScale: 1,
                  yScale: 1,
                  xOffset: 0,
                  yOffset: 0
                }
              },
              events: null,
              bounds: null,
              chamfer: null,
              circleRadius: 0,
              positionPrev: null,
              anglePrev: 0,
              parent: null,
              axes: null,
              area: 0,
              mass: 0,
              inertia: 0,
              _original: null
            }, o = u.extend(r, t);
            return i(o, t), o;
          }, e.nextGroup = function(t) {
            return t ? e._nextNonCollidingGroupId-- : e._nextCollidingGroupId++;
          }, e.nextCategory = function() {
            return e._nextCategory = e._nextCategory << 1, e._nextCategory;
          };
          var i = function(t, r) {
            r = r || {}, e.set(t, {
              bounds: t.bounds || n.create(t.vertices),
              positionPrev: t.positionPrev || s.clone(t.position),
              anglePrev: t.anglePrev || t.angle,
              vertices: t.vertices,
              parts: t.parts || [t],
              isStatic: t.isStatic,
              isSleeping: t.isSleeping,
              parent: t.parent || t
            }), l.rotate(t.vertices, t.angle, t.position), f.rotate(t.axes, t.angle), n.update(t.bounds, t.vertices, t.velocity), e.set(t, {
              axes: r.axes || t.axes,
              area: r.area || t.area,
              mass: r.mass || t.mass,
              inertia: r.inertia || t.inertia
            });
            var o = t.isStatic ? "#14151f" : u.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), c = t.isStatic ? "#555" : "#ccc", m = t.isStatic && t.render.fillStyle === null ? 1 : 0;
            t.render.fillStyle = t.render.fillStyle || o, t.render.strokeStyle = t.render.strokeStyle || c, t.render.lineWidth = t.render.lineWidth || m, t.render.sprite.xOffset += -(t.bounds.min.x - t.position.x) / (t.bounds.max.x - t.bounds.min.x), t.render.sprite.yOffset += -(t.bounds.min.y - t.position.y) / (t.bounds.max.y - t.bounds.min.y);
          };
          e.set = function(t, r, o) {
            var c;
            typeof r == "string" && (c = r, r = {}, r[c] = o);
            for (c in r)
              if (Object.prototype.hasOwnProperty.call(r, c))
                switch (o = r[c], c) {
                  case "isStatic":
                    e.setStatic(t, o);
                    break;
                  case "isSleeping":
                    a.set(t, o);
                    break;
                  case "mass":
                    e.setMass(t, o);
                    break;
                  case "density":
                    e.setDensity(t, o);
                    break;
                  case "inertia":
                    e.setInertia(t, o);
                    break;
                  case "vertices":
                    e.setVertices(t, o);
                    break;
                  case "position":
                    e.setPosition(t, o);
                    break;
                  case "angle":
                    e.setAngle(t, o);
                    break;
                  case "velocity":
                    e.setVelocity(t, o);
                    break;
                  case "angularVelocity":
                    e.setAngularVelocity(t, o);
                    break;
                  case "parts":
                    e.setParts(t, o);
                    break;
                  case "centre":
                    e.setCentre(t, o);
                    break;
                  default:
                    t[c] = o;
                }
          }, e.setStatic = function(t, r) {
            for (var o = 0; o < t.parts.length; o++) {
              var c = t.parts[o];
              c.isStatic = r, r ? (c._original = {
                restitution: c.restitution,
                friction: c.friction,
                mass: c.mass,
                inertia: c.inertia,
                density: c.density,
                inverseMass: c.inverseMass,
                inverseInertia: c.inverseInertia
              }, c.restitution = 0, c.friction = 1, c.mass = c.inertia = c.density = 1 / 0, c.inverseMass = c.inverseInertia = 0, c.positionPrev.x = c.position.x, c.positionPrev.y = c.position.y, c.anglePrev = c.angle, c.angularVelocity = 0, c.speed = 0, c.angularSpeed = 0, c.motion = 0) : c._original && (c.restitution = c._original.restitution, c.friction = c._original.friction, c.mass = c._original.mass, c.inertia = c._original.inertia, c.density = c._original.density, c.inverseMass = c._original.inverseMass, c.inverseInertia = c._original.inverseInertia, c._original = null);
            }
          }, e.setMass = function(t, r) {
            var o = t.inertia / (t.mass / 6);
            t.inertia = o * (r / 6), t.inverseInertia = 1 / t.inertia, t.mass = r, t.inverseMass = 1 / t.mass, t.density = t.mass / t.area;
          }, e.setDensity = function(t, r) {
            e.setMass(t, r * t.area), t.density = r;
          }, e.setInertia = function(t, r) {
            t.inertia = r, t.inverseInertia = 1 / t.inertia;
          }, e.setVertices = function(t, r) {
            r[0].body === t ? t.vertices = r : t.vertices = l.create(r, t), t.axes = f.fromVertices(t.vertices), t.area = l.area(t.vertices), e.setMass(t, t.density * t.area);
            var o = l.centre(t.vertices);
            l.translate(t.vertices, o, -1), e.setInertia(t, e._inertiaScale * l.inertia(t.vertices, t.mass)), l.translate(t.vertices, t.position), n.update(t.bounds, t.vertices, t.velocity);
          }, e.setParts = function(t, r, o) {
            var c;
            for (r = r.slice(0), t.parts.length = 0, t.parts.push(t), t.parent = t, c = 0; c < r.length; c++) {
              var m = r[c];
              m !== t && (m.parent = t, t.parts.push(m));
            }
            if (t.parts.length !== 1) {
              if (o = typeof o < "u" ? o : !0, o) {
                var C = [];
                for (c = 0; c < r.length; c++)
                  C = C.concat(r[c].vertices);
                l.clockwiseSort(C);
                var w = l.hull(C), v = l.centre(w);
                e.setVertices(t, w), l.translate(t.vertices, v);
              }
              var g = e._totalProperties(t);
              t.area = g.area, t.parent = t, t.position.x = g.centre.x, t.position.y = g.centre.y, t.positionPrev.x = g.centre.x, t.positionPrev.y = g.centre.y, e.setMass(t, g.mass), e.setInertia(t, g.inertia), e.setPosition(t, g.centre);
            }
          }, e.setCentre = function(t, r, o) {
            o ? (t.positionPrev.x += r.x, t.positionPrev.y += r.y, t.position.x += r.x, t.position.y += r.y) : (t.positionPrev.x = r.x - (t.position.x - t.positionPrev.x), t.positionPrev.y = r.y - (t.position.y - t.positionPrev.y), t.position.x = r.x, t.position.y = r.y);
          }, e.setPosition = function(t, r) {
            var o = s.sub(r, t.position);
            t.positionPrev.x += o.x, t.positionPrev.y += o.y;
            for (var c = 0; c < t.parts.length; c++) {
              var m = t.parts[c];
              m.position.x += o.x, m.position.y += o.y, l.translate(m.vertices, o), n.update(m.bounds, m.vertices, t.velocity);
            }
          }, e.setAngle = function(t, r) {
            var o = r - t.angle;
            t.anglePrev += o;
            for (var c = 0; c < t.parts.length; c++) {
              var m = t.parts[c];
              m.angle += o, l.rotate(m.vertices, o, t.position), f.rotate(m.axes, o), n.update(m.bounds, m.vertices, t.velocity), c > 0 && s.rotateAbout(m.position, o, t.position, m.position);
            }
          }, e.setVelocity = function(t, r) {
            t.positionPrev.x = t.position.x - r.x, t.positionPrev.y = t.position.y - r.y, t.velocity.x = r.x, t.velocity.y = r.y, t.speed = s.magnitude(t.velocity);
          }, e.setAngularVelocity = function(t, r) {
            t.anglePrev = t.angle - r, t.angularVelocity = r, t.angularSpeed = Math.abs(t.angularVelocity);
          }, e.translate = function(t, r) {
            e.setPosition(t, s.add(t.position, r));
          }, e.rotate = function(t, r, o) {
            if (!o)
              e.setAngle(t, t.angle + r);
            else {
              var c = Math.cos(r), m = Math.sin(r), C = t.position.x - o.x, w = t.position.y - o.y;
              e.setPosition(t, {
                x: o.x + (C * c - w * m),
                y: o.y + (C * m + w * c)
              }), e.setAngle(t, t.angle + r);
            }
          }, e.scale = function(t, r, o, c) {
            var m = 0, C = 0;
            c = c || t.position;
            for (var w = 0; w < t.parts.length; w++) {
              var v = t.parts[w];
              l.scale(v.vertices, r, o, c), v.axes = f.fromVertices(v.vertices), v.area = l.area(v.vertices), e.setMass(v, t.density * v.area), l.translate(v.vertices, { x: -v.position.x, y: -v.position.y }), e.setInertia(v, e._inertiaScale * l.inertia(v.vertices, v.mass)), l.translate(v.vertices, { x: v.position.x, y: v.position.y }), w > 0 && (m += v.area, C += v.inertia), v.position.x = c.x + (v.position.x - c.x) * r, v.position.y = c.y + (v.position.y - c.y) * o, n.update(v.bounds, v.vertices, t.velocity);
            }
            t.parts.length > 1 && (t.area = m, t.isStatic || (e.setMass(t, t.density * m), e.setInertia(t, C))), t.circleRadius && (r === o ? t.circleRadius *= r : t.circleRadius = null);
          }, e.update = function(t, r, o, c) {
            var m = Math.pow(r * o * t.timeScale, 2), C = 1 - t.frictionAir * o * t.timeScale, w = t.position.x - t.positionPrev.x, v = t.position.y - t.positionPrev.y;
            t.velocity.x = w * C * c + t.force.x / t.mass * m, t.velocity.y = v * C * c + t.force.y / t.mass * m, t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.position.x += t.velocity.x, t.position.y += t.velocity.y, t.angularVelocity = (t.angle - t.anglePrev) * C * c + t.torque / t.inertia * m, t.anglePrev = t.angle, t.angle += t.angularVelocity, t.speed = s.magnitude(t.velocity), t.angularSpeed = Math.abs(t.angularVelocity);
            for (var g = 0; g < t.parts.length; g++) {
              var x = t.parts[g];
              l.translate(x.vertices, t.velocity), g > 0 && (x.position.x += t.velocity.x, x.position.y += t.velocity.y), t.angularVelocity !== 0 && (l.rotate(x.vertices, t.angularVelocity, t.position), f.rotate(x.axes, t.angularVelocity), g > 0 && s.rotateAbout(x.position, t.angularVelocity, t.position, x.position)), n.update(x.bounds, x.vertices, t.velocity);
            }
          }, e.applyForce = function(t, r, o) {
            t.force.x += o.x, t.force.y += o.y;
            var c = { x: r.x - t.position.x, y: r.y - t.position.y };
            t.torque += c.x * o.y - c.y * o.x;
          }, e._totalProperties = function(t) {
            for (var r = {
              mass: 0,
              area: 0,
              inertia: 0,
              centre: { x: 0, y: 0 }
            }, o = t.parts.length === 1 ? 0 : 1; o < t.parts.length; o++) {
              var c = t.parts[o], m = c.mass !== 1 / 0 ? c.mass : 1;
              r.mass += m, r.area += c.area, r.inertia += c.inertia, r.centre = s.add(r.centre, s.mult(c.position, m));
            }
            return r.centre = s.div(r.centre, r.mass), r;
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(4);
        (function() {
          e._motionWakeThreshold = 0.18, e._motionSleepThreshold = 0.08, e._minBias = 0.9, e.update = function(s, a) {
            for (var u = a * a * a, n = 0; n < s.length; n++) {
              var f = s[n], i = f.speed * f.speed + f.angularSpeed * f.angularSpeed;
              if (f.force.x !== 0 || f.force.y !== 0) {
                e.set(f, !1);
                continue;
              }
              var t = Math.min(f.motion, i), r = Math.max(f.motion, i);
              f.motion = e._minBias * t + (1 - e._minBias) * r, f.sleepThreshold > 0 && f.motion < e._motionSleepThreshold * u ? (f.sleepCounter += 1, f.sleepCounter >= f.sleepThreshold && e.set(f, !0)) : f.sleepCounter > 0 && (f.sleepCounter -= 1);
            }
          }, e.afterCollisions = function(s, a) {
            for (var u = a * a * a, n = 0; n < s.length; n++) {
              var f = s[n];
              if (f.isActive) {
                var i = f.collision, t = i.bodyA.parent, r = i.bodyB.parent;
                if (!(t.isSleeping && r.isSleeping || t.isStatic || r.isStatic) && (t.isSleeping || r.isSleeping)) {
                  var o = t.isSleeping && !t.isStatic ? t : r, c = o === t ? r : t;
                  !o.isStatic && c.motion > e._motionWakeThreshold * u && e.set(o, !1);
                }
              }
            }
          }, e.set = function(s, a) {
            var u = s.isSleeping;
            a ? (s.isSleeping = !0, s.sleepCounter = s.sleepThreshold, s.positionImpulse.x = 0, s.positionImpulse.y = 0, s.positionPrev.x = s.position.x, s.positionPrev.y = s.position.y, s.anglePrev = s.angle, s.speed = 0, s.angularSpeed = 0, s.motion = 0, u || l.trigger(s, "sleepStart")) : (s.isSleeping = !1, s.sleepCounter = 0, u && l.trigger(s, "sleepEnd"));
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(3), s = d(9);
        (function() {
          var a = [], u = {
            overlap: 0,
            axis: null
          }, n = {
            overlap: 0,
            axis: null
          };
          e.create = function(f, i) {
            return {
              pair: null,
              collided: !1,
              bodyA: f,
              bodyB: i,
              parentA: f.parent,
              parentB: i.parent,
              depth: 0,
              normal: { x: 0, y: 0 },
              tangent: { x: 0, y: 0 },
              penetration: { x: 0, y: 0 },
              supports: []
            };
          }, e.collides = function(f, i, t) {
            if (e._overlapAxes(u, f.vertices, i.vertices, f.axes), u.overlap <= 0 || (e._overlapAxes(n, i.vertices, f.vertices, i.axes), n.overlap <= 0))
              return null;
            var r = t && t.table[s.id(f, i)], o;
            r ? o = r.collision : (o = e.create(f, i), o.collided = !0, o.bodyA = f.id < i.id ? f : i, o.bodyB = f.id < i.id ? i : f, o.parentA = o.bodyA.parent, o.parentB = o.bodyB.parent), f = o.bodyA, i = o.bodyB;
            var c;
            u.overlap < n.overlap ? c = u : c = n;
            var m = o.normal, C = o.supports, w = c.axis, v = w.x, g = w.y;
            v * (i.position.x - f.position.x) + g * (i.position.y - f.position.y) < 0 ? (m.x = v, m.y = g) : (m.x = -v, m.y = -g), o.tangent.x = -m.y, o.tangent.y = m.x, o.depth = c.overlap, o.penetration.x = m.x * o.depth, o.penetration.y = m.y * o.depth;
            var x = e._findSupports(f, i, m, 1), p = 0;
            if (l.contains(f.vertices, x[0]) && (C[p++] = x[0]), l.contains(f.vertices, x[1]) && (C[p++] = x[1]), p < 2) {
              var S = e._findSupports(i, f, m, -1);
              l.contains(i.vertices, S[0]) && (C[p++] = S[0]), p < 2 && l.contains(i.vertices, S[1]) && (C[p++] = S[1]);
            }
            return p === 0 && (C[p++] = x[0]), C.length = p, o;
          }, e._overlapAxes = function(f, i, t, r) {
            var o = i.length, c = t.length, m = i[0].x, C = i[0].y, w = t[0].x, v = t[0].y, g = r.length, x = Number.MAX_VALUE, p = 0, S, y, P, h, M, B;
            for (M = 0; M < g; M++) {
              var A = r[M], E = A.x, D = A.y, L = m * E + C * D, V = w * E + v * D, F = L, W = V;
              for (B = 1; B < o; B += 1)
                h = i[B].x * E + i[B].y * D, h > F ? F = h : h < L && (L = h);
              for (B = 1; B < c; B += 1)
                h = t[B].x * E + t[B].y * D, h > W ? W = h : h < V && (V = h);
              if (y = F - V, P = W - L, S = y < P ? y : P, S < x && (x = S, p = M, S <= 0))
                break;
            }
            f.axis = r[p], f.overlap = x;
          }, e._projectToAxis = function(f, i, t) {
            for (var r = i[0].x * t.x + i[0].y * t.y, o = r, c = 1; c < i.length; c += 1) {
              var m = i[c].x * t.x + i[c].y * t.y;
              m > o ? o = m : m < r && (r = m);
            }
            f.min = r, f.max = o;
          }, e._findSupports = function(f, i, t, r) {
            var o = i.vertices, c = o.length, m = f.position.x, C = f.position.y, w = t.x * r, v = t.y * r, g = Number.MAX_VALUE, x, p, S, y, P;
            for (P = 0; P < c; P += 1)
              p = o[P], y = w * (m - p.x) + v * (C - p.y), y < g && (g = y, x = p);
            return S = o[(c + x.index - 1) % c], g = w * (m - S.x) + v * (C - S.y), p = o[(x.index + 1) % c], w * (m - p.x) + v * (C - p.y) < g ? (a[0] = x, a[1] = p, a) : (a[0] = x, a[1] = S, a);
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(17);
        (function() {
          e.create = function(s, a) {
            var u = s.bodyA, n = s.bodyB, f = {
              id: e.id(u, n),
              bodyA: u,
              bodyB: n,
              collision: s,
              contacts: [],
              activeContacts: [],
              separation: 0,
              isActive: !0,
              confirmedActive: !0,
              isSensor: u.isSensor || n.isSensor,
              timeCreated: a,
              timeUpdated: a,
              inverseMass: 0,
              friction: 0,
              frictionStatic: 0,
              restitution: 0,
              slop: 0
            };
            return e.update(f, s, a), f;
          }, e.update = function(s, a, u) {
            var n = s.contacts, f = a.supports, i = s.activeContacts, t = a.parentA, r = a.parentB, o = t.vertices.length;
            s.isActive = !0, s.timeUpdated = u, s.collision = a, s.separation = a.depth, s.inverseMass = t.inverseMass + r.inverseMass, s.friction = t.friction < r.friction ? t.friction : r.friction, s.frictionStatic = t.frictionStatic > r.frictionStatic ? t.frictionStatic : r.frictionStatic, s.restitution = t.restitution > r.restitution ? t.restitution : r.restitution, s.slop = t.slop > r.slop ? t.slop : r.slop, a.pair = s, i.length = 0;
            for (var c = 0; c < f.length; c++) {
              var m = f[c], C = m.body === t ? m.index : o + m.index, w = n[C];
              w ? i.push(w) : i.push(n[C] = l.create(m));
            }
          }, e.setActive = function(s, a, u) {
            a ? (s.isActive = !0, s.timeUpdated = u) : (s.isActive = !1, s.activeContacts.length = 0);
          }, e.id = function(s, a) {
            return s.id < a.id ? "A" + s.id + "B" + a.id : "A" + a.id + "B" + s.id;
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(3), s = d(2), a = d(7), u = d(1), n = d(11), f = d(0);
        (function() {
          e._warming = 0.4, e._torqueDampen = 1, e._minLength = 1e-6, e.create = function(i) {
            var t = i;
            t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }), t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
            var r = t.bodyA ? s.add(t.bodyA.position, t.pointA) : t.pointA, o = t.bodyB ? s.add(t.bodyB.position, t.pointB) : t.pointB, c = s.magnitude(s.sub(r, o));
            t.length = typeof t.length < "u" ? t.length : c, t.id = t.id || f.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7), t.damping = t.damping || 0, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t.plugin = {};
            var m = {
              visible: !0,
              lineWidth: 2,
              strokeStyle: "#ffffff",
              type: "line",
              anchors: !0
            };
            return t.length === 0 && t.stiffness > 0.1 ? (m.type = "pin", m.anchors = !1) : t.stiffness < 0.9 && (m.type = "spring"), t.render = f.extend(m, t.render), t;
          }, e.preSolveAll = function(i) {
            for (var t = 0; t < i.length; t += 1) {
              var r = i[t], o = r.constraintImpulse;
              r.isStatic || o.x === 0 && o.y === 0 && o.angle === 0 || (r.position.x += o.x, r.position.y += o.y, r.angle += o.angle);
            }
          }, e.solveAll = function(i, t) {
            for (var r = 0; r < i.length; r += 1) {
              var o = i[r], c = !o.bodyA || o.bodyA && o.bodyA.isStatic, m = !o.bodyB || o.bodyB && o.bodyB.isStatic;
              (c || m) && e.solve(i[r], t);
            }
            for (r = 0; r < i.length; r += 1)
              o = i[r], c = !o.bodyA || o.bodyA && o.bodyA.isStatic, m = !o.bodyB || o.bodyB && o.bodyB.isStatic, !c && !m && e.solve(i[r], t);
          }, e.solve = function(i, t) {
            var r = i.bodyA, o = i.bodyB, c = i.pointA, m = i.pointB;
            if (!(!r && !o)) {
              r && !r.isStatic && (s.rotate(c, r.angle - i.angleA, c), i.angleA = r.angle), o && !o.isStatic && (s.rotate(m, o.angle - i.angleB, m), i.angleB = o.angle);
              var C = c, w = m;
              if (r && (C = s.add(r.position, c)), o && (w = s.add(o.position, m)), !(!C || !w)) {
                var v = s.sub(C, w), g = s.magnitude(v);
                g < e._minLength && (g = e._minLength);
                var x = (g - i.length) / g, p = i.stiffness < 1 ? i.stiffness * t : i.stiffness, S = s.mult(v, x * p), y = (r ? r.inverseMass : 0) + (o ? o.inverseMass : 0), P = (r ? r.inverseInertia : 0) + (o ? o.inverseInertia : 0), h = y + P, M, B, A, E, D;
                if (i.damping) {
                  var L = s.create();
                  A = s.div(v, g), D = s.sub(
                    o && s.sub(o.position, o.positionPrev) || L,
                    r && s.sub(r.position, r.positionPrev) || L
                  ), E = s.dot(A, D);
                }
                r && !r.isStatic && (B = r.inverseMass / y, r.constraintImpulse.x -= S.x * B, r.constraintImpulse.y -= S.y * B, r.position.x -= S.x * B, r.position.y -= S.y * B, i.damping && (r.positionPrev.x -= i.damping * A.x * E * B, r.positionPrev.y -= i.damping * A.y * E * B), M = s.cross(c, S) / h * e._torqueDampen * r.inverseInertia * (1 - i.angularStiffness), r.constraintImpulse.angle -= M, r.angle -= M), o && !o.isStatic && (B = o.inverseMass / y, o.constraintImpulse.x += S.x * B, o.constraintImpulse.y += S.y * B, o.position.x += S.x * B, o.position.y += S.y * B, i.damping && (o.positionPrev.x += i.damping * A.x * E * B, o.positionPrev.y += i.damping * A.y * E * B), M = s.cross(m, S) / h * e._torqueDampen * o.inverseInertia * (1 - i.angularStiffness), o.constraintImpulse.angle += M, o.angle += M);
              }
            }
          }, e.postSolveAll = function(i) {
            for (var t = 0; t < i.length; t++) {
              var r = i[t], o = r.constraintImpulse;
              if (!(r.isStatic || o.x === 0 && o.y === 0 && o.angle === 0)) {
                a.set(r, !1);
                for (var c = 0; c < r.parts.length; c++) {
                  var m = r.parts[c];
                  l.translate(m.vertices, o), c > 0 && (m.position.x += o.x, m.position.y += o.y), o.angle !== 0 && (l.rotate(m.vertices, o.angle, r.position), n.rotate(m.axes, o.angle), c > 0 && s.rotateAbout(m.position, o.angle, r.position, m.position)), u.update(m.bounds, m.vertices, r.velocity);
                }
                o.angle *= e._warming, o.x *= e._warming, o.y *= e._warming;
              }
            }
          }, e.pointAWorld = function(i) {
            return {
              x: (i.bodyA ? i.bodyA.position.x : 0) + i.pointA.x,
              y: (i.bodyA ? i.bodyA.position.y : 0) + i.pointA.y
            };
          }, e.pointBWorld = function(i) {
            return {
              x: (i.bodyB ? i.bodyB.position.x : 0) + i.pointB.x,
              y: (i.bodyB ? i.bodyB.position.y : 0) + i.pointB.y
            };
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(2), s = d(0);
        (function() {
          e.fromVertices = function(a) {
            for (var u = {}, n = 0; n < a.length; n++) {
              var f = (n + 1) % a.length, i = l.normalise({
                x: a[f].y - a[n].y,
                y: a[n].x - a[f].x
              }), t = i.y === 0 ? 1 / 0 : i.x / i.y;
              t = t.toFixed(3).toString(), u[t] = i;
            }
            return s.values(u);
          }, e.rotate = function(a, u) {
            if (u !== 0)
              for (var n = Math.cos(u), f = Math.sin(u), i = 0; i < a.length; i++) {
                var t = a[i], r;
                r = t.x * n - t.y * f, t.y = t.x * f + t.y * n, t.x = r;
              }
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(3), s = d(0), a = d(6), u = d(1), n = d(2);
        (function() {
          e.rectangle = function(f, i, t, r, o) {
            o = o || {};
            var c = {
              label: "Rectangle Body",
              position: { x: f, y: i },
              vertices: l.fromPath("L 0 0 L " + t + " 0 L " + t + " " + r + " L 0 " + r)
            };
            if (o.chamfer) {
              var m = o.chamfer;
              c.vertices = l.chamfer(
                c.vertices,
                m.radius,
                m.quality,
                m.qualityMin,
                m.qualityMax
              ), delete o.chamfer;
            }
            return a.create(s.extend({}, c, o));
          }, e.trapezoid = function(f, i, t, r, o, c) {
            c = c || {}, o *= 0.5;
            var m = (1 - o * 2) * t, C = t * o, w = C + m, v = w + C, g;
            o < 0.5 ? g = "L 0 0 L " + C + " " + -r + " L " + w + " " + -r + " L " + v + " 0" : g = "L 0 0 L " + w + " " + -r + " L " + v + " 0";
            var x = {
              label: "Trapezoid Body",
              position: { x: f, y: i },
              vertices: l.fromPath(g)
            };
            if (c.chamfer) {
              var p = c.chamfer;
              x.vertices = l.chamfer(
                x.vertices,
                p.radius,
                p.quality,
                p.qualityMin,
                p.qualityMax
              ), delete c.chamfer;
            }
            return a.create(s.extend({}, x, c));
          }, e.circle = function(f, i, t, r, o) {
            r = r || {};
            var c = {
              label: "Circle Body",
              circleRadius: t
            };
            o = o || 25;
            var m = Math.ceil(Math.max(10, Math.min(o, t)));
            return m % 2 === 1 && (m += 1), e.polygon(f, i, m, t, s.extend({}, c, r));
          }, e.polygon = function(f, i, t, r, o) {
            if (o = o || {}, t < 3)
              return e.circle(f, i, r, o);
            for (var c = 2 * Math.PI / t, m = "", C = c * 0.5, w = 0; w < t; w += 1) {
              var v = C + w * c, g = Math.cos(v) * r, x = Math.sin(v) * r;
              m += "L " + g.toFixed(3) + " " + x.toFixed(3) + " ";
            }
            var p = {
              label: "Polygon Body",
              position: { x: f, y: i },
              vertices: l.fromPath(m)
            };
            if (o.chamfer) {
              var S = o.chamfer;
              p.vertices = l.chamfer(
                p.vertices,
                S.radius,
                S.quality,
                S.qualityMin,
                S.qualityMax
              ), delete o.chamfer;
            }
            return a.create(s.extend({}, p, o));
          }, e.fromVertices = function(f, i, t, r, o, c, m, C) {
            var w = s.getDecomp(), v, g, x, p, S, y, P, h, M, B, A;
            for (v = Boolean(w && w.quickDecomp), r = r || {}, x = [], o = typeof o < "u" ? o : !1, c = typeof c < "u" ? c : 0.01, m = typeof m < "u" ? m : 10, C = typeof C < "u" ? C : 0.01, s.isArray(t[0]) || (t = [t]), B = 0; B < t.length; B += 1)
              if (y = t[B], p = l.isConvex(y), S = !p, S && !v && s.warnOnce(
                "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
              ), p || !v)
                p ? y = l.clockwiseSort(y) : y = l.hull(y), x.push({
                  position: { x: f, y: i },
                  vertices: y
                });
              else {
                var E = y.map(function(U) {
                  return [U.x, U.y];
                });
                w.makeCCW(E), c !== !1 && w.removeCollinearPoints(E, c), C !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(E, C);
                var D = w.quickDecomp(E);
                for (P = 0; P < D.length; P++) {
                  var L = D[P], V = L.map(function(U) {
                    return {
                      x: U[0],
                      y: U[1]
                    };
                  });
                  m > 0 && l.area(V) < m || x.push({
                    position: l.centre(V),
                    vertices: V
                  });
                }
              }
            for (P = 0; P < x.length; P++)
              x[P] = a.create(s.extend(x[P], r));
            if (o) {
              var F = 5;
              for (P = 0; P < x.length; P++) {
                var W = x[P];
                for (h = P + 1; h < x.length; h++) {
                  var O = x[h];
                  if (u.overlaps(W.bounds, O.bounds)) {
                    var H = W.vertices, k = O.vertices;
                    for (M = 0; M < W.vertices.length; M++)
                      for (A = 0; A < O.vertices.length; A++) {
                        var $ = n.magnitudeSquared(n.sub(H[(M + 1) % H.length], k[A])), G = n.magnitudeSquared(n.sub(H[M], k[(A + 1) % k.length]));
                        $ < F && G < F && (H[M].isInternal = !0, k[A].isInternal = !0);
                      }
                  }
                }
              }
            }
            return x.length > 1 ? (g = a.create(s.extend({ parts: x.slice(0) }, r)), a.setPosition(g, { x: f, y: i }), g) : x[0];
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(0);
        (function() {
          e.create = function(s) {
            var a = {};
            return s || l.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), a.element = s || document.body, a.absolute = { x: 0, y: 0 }, a.position = { x: 0, y: 0 }, a.mousedownPosition = { x: 0, y: 0 }, a.mouseupPosition = { x: 0, y: 0 }, a.offset = { x: 0, y: 0 }, a.scale = { x: 1, y: 1 }, a.wheelDelta = 0, a.button = -1, a.pixelRatio = parseInt(a.element.getAttribute("data-pixel-ratio"), 10) || 1, a.sourceEvents = {
              mousemove: null,
              mousedown: null,
              mouseup: null,
              mousewheel: null
            }, a.mousemove = function(u) {
              var n = e._getRelativeMousePosition(u, a.element, a.pixelRatio), f = u.changedTouches;
              f && (a.button = 0, u.preventDefault()), a.absolute.x = n.x, a.absolute.y = n.y, a.position.x = a.absolute.x * a.scale.x + a.offset.x, a.position.y = a.absolute.y * a.scale.y + a.offset.y, a.sourceEvents.mousemove = u;
            }, a.mousedown = function(u) {
              var n = e._getRelativeMousePosition(u, a.element, a.pixelRatio), f = u.changedTouches;
              f ? (a.button = 0, u.preventDefault()) : a.button = u.button, a.absolute.x = n.x, a.absolute.y = n.y, a.position.x = a.absolute.x * a.scale.x + a.offset.x, a.position.y = a.absolute.y * a.scale.y + a.offset.y, a.mousedownPosition.x = a.position.x, a.mousedownPosition.y = a.position.y, a.sourceEvents.mousedown = u;
            }, a.mouseup = function(u) {
              var n = e._getRelativeMousePosition(u, a.element, a.pixelRatio), f = u.changedTouches;
              f && u.preventDefault(), a.button = -1, a.absolute.x = n.x, a.absolute.y = n.y, a.position.x = a.absolute.x * a.scale.x + a.offset.x, a.position.y = a.absolute.y * a.scale.y + a.offset.y, a.mouseupPosition.x = a.position.x, a.mouseupPosition.y = a.position.y, a.sourceEvents.mouseup = u;
            }, a.mousewheel = function(u) {
              a.wheelDelta = Math.max(-1, Math.min(1, u.wheelDelta || -u.detail)), u.preventDefault();
            }, e.setElement(a, a.element), a;
          }, e.setElement = function(s, a) {
            s.element = a, a.addEventListener("mousemove", s.mousemove), a.addEventListener("mousedown", s.mousedown), a.addEventListener("mouseup", s.mouseup), a.addEventListener("mousewheel", s.mousewheel), a.addEventListener("DOMMouseScroll", s.mousewheel), a.addEventListener("touchmove", s.mousemove), a.addEventListener("touchstart", s.mousedown), a.addEventListener("touchend", s.mouseup);
          }, e.clearSourceEvents = function(s) {
            s.sourceEvents.mousemove = null, s.sourceEvents.mousedown = null, s.sourceEvents.mouseup = null, s.sourceEvents.mousewheel = null, s.wheelDelta = 0;
          }, e.setOffset = function(s, a) {
            s.offset.x = a.x, s.offset.y = a.y, s.position.x = s.absolute.x * s.scale.x + s.offset.x, s.position.y = s.absolute.y * s.scale.y + s.offset.y;
          }, e.setScale = function(s, a) {
            s.scale.x = a.x, s.scale.y = a.y, s.position.x = s.absolute.x * s.scale.x + s.offset.x, s.position.y = s.absolute.y * s.scale.y + s.offset.y;
          }, e._getRelativeMousePosition = function(s, a, u) {
            var n = a.getBoundingClientRect(), f = document.documentElement || document.body.parentNode || document.body, i = window.pageXOffset !== void 0 ? window.pageXOffset : f.scrollLeft, t = window.pageYOffset !== void 0 ? window.pageYOffset : f.scrollTop, r = s.changedTouches, o, c;
            return r ? (o = r[0].pageX - n.left - i, c = r[0].pageY - n.top - t) : (o = s.pageX - n.left - i, c = s.pageY - n.top - t), {
              x: o / (a.clientWidth / (a.width || a.clientWidth) * u),
              y: c / (a.clientHeight / (a.height || a.clientHeight) * u)
            };
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(0), s = d(8);
        (function() {
          e.create = function(a) {
            var u = {
              bodies: [],
              pairs: null
            };
            return l.extend(u, a);
          }, e.setBodies = function(a, u) {
            a.bodies = u.slice(0);
          }, e.clear = function(a) {
            a.bodies = [];
          }, e.collisions = function(a) {
            var u = [], n = a.pairs, f = a.bodies, i = f.length, t = e.canCollide, r = s.collides, o, c;
            for (f.sort(e._compareBoundsX), o = 0; o < i; o++) {
              var m = f[o], C = m.bounds, w = m.bounds.max.x, v = m.bounds.max.y, g = m.bounds.min.y, x = m.isStatic || m.isSleeping, p = m.parts.length, S = p === 1;
              for (c = o + 1; c < i; c++) {
                var y = f[c], P = y.bounds;
                if (P.min.x > w)
                  break;
                if (!(v < P.min.y || g > P.max.y) && !(x && (y.isStatic || y.isSleeping)) && t(m.collisionFilter, y.collisionFilter)) {
                  var h = y.parts.length;
                  if (S && h === 1) {
                    var M = r(m, y, n);
                    M && u.push(M);
                  } else
                    for (var B = p > 1 ? 1 : 0, A = h > 1 ? 1 : 0, E = B; E < p; E++)
                      for (var D = m.parts[E], C = D.bounds, L = A; L < h; L++) {
                        var V = y.parts[L], P = V.bounds;
                        if (!(C.min.x > P.max.x || C.max.x < P.min.x || C.max.y < P.min.y || C.min.y > P.max.y)) {
                          var M = r(D, V, n);
                          M && u.push(M);
                        }
                      }
                }
              }
            }
            return u;
          }, e.canCollide = function(a, u) {
            return a.group === u.group && a.group !== 0 ? a.group > 0 : (a.mask & u.category) !== 0 && (u.mask & a.category) !== 0;
          }, e._compareBoundsX = function(a, u) {
            return a.bounds.min.x - u.bounds.min.x;
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(0);
        (function() {
          e._registry = {}, e.register = function(s) {
            if (e.isPlugin(s) || l.warn("Plugin.register:", e.toString(s), "does not implement all required fields."), s.name in e._registry) {
              var a = e._registry[s.name], u = e.versionParse(s.version).number, n = e.versionParse(a.version).number;
              u > n ? (l.warn("Plugin.register:", e.toString(a), "was upgraded to", e.toString(s)), e._registry[s.name] = s) : u < n ? l.warn("Plugin.register:", e.toString(a), "can not be downgraded to", e.toString(s)) : s !== a && l.warn("Plugin.register:", e.toString(s), "is already registered to different plugin object");
            } else
              e._registry[s.name] = s;
            return s;
          }, e.resolve = function(s) {
            return e._registry[e.dependencyParse(s).name];
          }, e.toString = function(s) {
            return typeof s == "string" ? s : (s.name || "anonymous") + "@" + (s.version || s.range || "0.0.0");
          }, e.isPlugin = function(s) {
            return s && s.name && s.version && s.install;
          }, e.isUsed = function(s, a) {
            return s.used.indexOf(a) > -1;
          }, e.isFor = function(s, a) {
            var u = s.for && e.dependencyParse(s.for);
            return !s.for || a.name === u.name && e.versionSatisfies(a.version, u.range);
          }, e.use = function(s, a) {
            if (s.uses = (s.uses || []).concat(a || []), s.uses.length === 0) {
              l.warn("Plugin.use:", e.toString(s), "does not specify any dependencies to install.");
              return;
            }
            for (var u = e.dependencies(s), n = l.topologicalSort(u), f = [], i = 0; i < n.length; i += 1)
              if (n[i] !== s.name) {
                var t = e.resolve(n[i]);
                if (!t) {
                  f.push("❌ " + n[i]);
                  continue;
                }
                e.isUsed(s, t.name) || (e.isFor(t, s) || (l.warn("Plugin.use:", e.toString(t), "is for", t.for, "but installed on", e.toString(s) + "."), t._warned = !0), t.install ? t.install(s) : (l.warn("Plugin.use:", e.toString(t), "does not specify an install function."), t._warned = !0), t._warned ? (f.push("🔶 " + e.toString(t)), delete t._warned) : f.push("✅ " + e.toString(t)), s.used.push(t.name));
              }
            f.length > 0 && l.info(f.join("  "));
          }, e.dependencies = function(s, a) {
            var u = e.dependencyParse(s), n = u.name;
            if (a = a || {}, !(n in a)) {
              s = e.resolve(s) || s, a[n] = l.map(s.uses || [], function(i) {
                e.isPlugin(i) && e.register(i);
                var t = e.dependencyParse(i), r = e.resolve(i);
                return r && !e.versionSatisfies(r.version, t.range) ? (l.warn(
                  "Plugin.dependencies:",
                  e.toString(r),
                  "does not satisfy",
                  e.toString(t),
                  "used by",
                  e.toString(u) + "."
                ), r._warned = !0, s._warned = !0) : r || (l.warn(
                  "Plugin.dependencies:",
                  e.toString(i),
                  "used by",
                  e.toString(u),
                  "could not be resolved."
                ), s._warned = !0), t.name;
              });
              for (var f = 0; f < a[n].length; f += 1)
                e.dependencies(a[n][f], a);
              return a;
            }
          }, e.dependencyParse = function(s) {
            if (l.isString(s)) {
              var a = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
              return a.test(s) || l.warn("Plugin.dependencyParse:", s, "is not a valid dependency string."), {
                name: s.split("@")[0],
                range: s.split("@")[1] || "*"
              };
            }
            return {
              name: s.name,
              range: s.range || s.version
            };
          }, e.versionParse = function(s) {
            var a = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
            a.test(s) || l.warn("Plugin.versionParse:", s, "is not a valid version or range.");
            var u = a.exec(s), n = Number(u[4]), f = Number(u[5]), i = Number(u[6]);
            return {
              isRange: Boolean(u[1] || u[2]),
              version: u[3],
              range: s,
              operator: u[1] || u[2] || "",
              major: n,
              minor: f,
              patch: i,
              parts: [n, f, i],
              prerelease: u[7],
              number: n * 1e8 + f * 1e4 + i
            };
          }, e.versionSatisfies = function(s, a) {
            a = a || "*";
            var u = e.versionParse(a), n = e.versionParse(s);
            if (u.isRange) {
              if (u.operator === "*" || s === "*")
                return !0;
              if (u.operator === ">")
                return n.number > u.number;
              if (u.operator === ">=")
                return n.number >= u.number;
              if (u.operator === "~")
                return n.major === u.major && n.minor === u.minor && n.patch >= u.patch;
              if (u.operator === "^")
                return u.major > 0 ? n.major === u.major && n.number >= u.number : u.minor > 0 ? n.minor === u.minor && n.patch >= u.patch : n.patch === u.patch;
            }
            return s === a || s === "*";
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(0), s = d(5), a = d(1), u = d(4), n = d(2), f = d(13);
        (function() {
          var i, t;
          typeof window < "u" && (i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(v) {
            window.setTimeout(function() {
              v(l.now());
            }, 1e3 / 60);
          }, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), e._goodFps = 30, e._goodDelta = 1e3 / 60, e.create = function(v) {
            var g = {
              controller: e,
              engine: null,
              element: null,
              canvas: null,
              mouse: null,
              frameRequestId: null,
              timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                elapsedHistory: []
              },
              options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: "#14151f",
                wireframeBackground: "#14151f",
                hasBounds: !!v.bounds,
                enabled: !0,
                wireframes: !0,
                showSleeping: !0,
                showDebug: !1,
                showStats: !1,
                showPerformance: !1,
                showBounds: !1,
                showVelocity: !1,
                showCollisions: !1,
                showSeparations: !1,
                showAxes: !1,
                showPositions: !1,
                showAngleIndicator: !1,
                showIds: !1,
                showVertexNumbers: !1,
                showConvexHulls: !1,
                showInternalEdges: !1,
                showMousePosition: !1
              }
            }, x = l.extend(g, v);
            return x.canvas && (x.canvas.width = x.options.width || x.canvas.width, x.canvas.height = x.options.height || x.canvas.height), x.mouse = v.mouse, x.engine = v.engine, x.canvas = x.canvas || c(x.options.width, x.options.height), x.context = x.canvas.getContext("2d"), x.textures = {}, x.bounds = x.bounds || {
              min: {
                x: 0,
                y: 0
              },
              max: {
                x: x.canvas.width,
                y: x.canvas.height
              }
            }, x.options.showBroadphase = !1, x.options.pixelRatio !== 1 && e.setPixelRatio(x, x.options.pixelRatio), l.isElement(x.element) ? x.element.appendChild(x.canvas) : x.canvas.parentNode || l.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"), x;
          }, e.run = function(v) {
            (function g(x) {
              v.frameRequestId = i(g), r(v, x), e.world(v, x), (v.options.showStats || v.options.showDebug) && e.stats(v, v.context, x), (v.options.showPerformance || v.options.showDebug) && e.performance(v, v.context, x);
            })();
          }, e.stop = function(v) {
            t(v.frameRequestId);
          }, e.setPixelRatio = function(v, g) {
            var x = v.options, p = v.canvas;
            g === "auto" && (g = m(p)), x.pixelRatio = g, p.setAttribute("data-pixel-ratio", g), p.width = x.width * g, p.height = x.height * g, p.style.width = x.width + "px", p.style.height = x.height + "px";
          }, e.lookAt = function(v, g, x, p) {
            p = typeof p < "u" ? p : !0, g = l.isArray(g) ? g : [g], x = x || {
              x: 0,
              y: 0
            };
            for (var S = {
              min: { x: 1 / 0, y: 1 / 0 },
              max: { x: -1 / 0, y: -1 / 0 }
            }, y = 0; y < g.length; y += 1) {
              var P = g[y], h = P.bounds ? P.bounds.min : P.min || P.position || P, M = P.bounds ? P.bounds.max : P.max || P.position || P;
              h && M && (h.x < S.min.x && (S.min.x = h.x), M.x > S.max.x && (S.max.x = M.x), h.y < S.min.y && (S.min.y = h.y), M.y > S.max.y && (S.max.y = M.y));
            }
            var B = S.max.x - S.min.x + 2 * x.x, A = S.max.y - S.min.y + 2 * x.y, E = v.canvas.height, D = v.canvas.width, L = D / E, V = B / A, F = 1, W = 1;
            V > L ? W = V / L : F = L / V, v.options.hasBounds = !0, v.bounds.min.x = S.min.x, v.bounds.max.x = S.min.x + B * F, v.bounds.min.y = S.min.y, v.bounds.max.y = S.min.y + A * W, p && (v.bounds.min.x += B * 0.5 - B * F * 0.5, v.bounds.max.x += B * 0.5 - B * F * 0.5, v.bounds.min.y += A * 0.5 - A * W * 0.5, v.bounds.max.y += A * 0.5 - A * W * 0.5), v.bounds.min.x -= x.x, v.bounds.max.x -= x.x, v.bounds.min.y -= x.y, v.bounds.max.y -= x.y, v.mouse && (f.setScale(v.mouse, {
              x: (v.bounds.max.x - v.bounds.min.x) / v.canvas.width,
              y: (v.bounds.max.y - v.bounds.min.y) / v.canvas.height
            }), f.setOffset(v.mouse, v.bounds.min));
          }, e.startViewTransform = function(v) {
            var g = v.bounds.max.x - v.bounds.min.x, x = v.bounds.max.y - v.bounds.min.y, p = g / v.options.width, S = x / v.options.height;
            v.context.setTransform(
              v.options.pixelRatio / p,
              0,
              0,
              v.options.pixelRatio / S,
              0,
              0
            ), v.context.translate(-v.bounds.min.x, -v.bounds.min.y);
          }, e.endViewTransform = function(v) {
            v.context.setTransform(v.options.pixelRatio, 0, 0, v.options.pixelRatio, 0, 0);
          }, e.world = function(v, g) {
            var x = l.now(), p = v.engine, S = p.world, y = v.canvas, P = v.context, h = v.options, M = v.timing, B = s.allBodies(S), A = s.allConstraints(S), E = h.wireframes ? h.wireframeBackground : h.background, D = [], L = [], V, F = {
              timestamp: p.timing.timestamp
            };
            if (u.trigger(v, "beforeRender", F), v.currentBackground !== E && w(v, E), P.globalCompositeOperation = "source-in", P.fillStyle = "transparent", P.fillRect(0, 0, y.width, y.height), P.globalCompositeOperation = "source-over", h.hasBounds) {
              for (V = 0; V < B.length; V++) {
                var W = B[V];
                a.overlaps(W.bounds, v.bounds) && D.push(W);
              }
              for (V = 0; V < A.length; V++) {
                var O = A[V], H = O.bodyA, k = O.bodyB, $ = O.pointA, G = O.pointB;
                H && ($ = n.add(H.position, O.pointA)), k && (G = n.add(k.position, O.pointB)), !(!$ || !G) && (a.contains(v.bounds, $) || a.contains(v.bounds, G)) && L.push(O);
              }
              e.startViewTransform(v), v.mouse && (f.setScale(v.mouse, {
                x: (v.bounds.max.x - v.bounds.min.x) / v.options.width,
                y: (v.bounds.max.y - v.bounds.min.y) / v.options.height
              }), f.setOffset(v.mouse, v.bounds.min));
            } else
              L = A, D = B, v.options.pixelRatio !== 1 && v.context.setTransform(v.options.pixelRatio, 0, 0, v.options.pixelRatio, 0, 0);
            !h.wireframes || p.enableSleeping && h.showSleeping ? e.bodies(v, D, P) : (h.showConvexHulls && e.bodyConvexHulls(v, D, P), e.bodyWireframes(v, D, P)), h.showBounds && e.bodyBounds(v, D, P), (h.showAxes || h.showAngleIndicator) && e.bodyAxes(v, D, P), h.showPositions && e.bodyPositions(v, D, P), h.showVelocity && e.bodyVelocity(v, D, P), h.showIds && e.bodyIds(v, D, P), h.showSeparations && e.separations(v, p.pairs.list, P), h.showCollisions && e.collisions(v, p.pairs.list, P), h.showVertexNumbers && e.vertexNumbers(v, D, P), h.showMousePosition && e.mousePosition(v, v.mouse, P), e.constraints(L, P), h.hasBounds && e.endViewTransform(v), u.trigger(v, "afterRender", F), M.lastElapsed = l.now() - x;
          }, e.stats = function(v, g, x) {
            for (var p = v.engine, S = p.world, y = s.allBodies(S), P = 0, h = 55, M = 44, B = 0, A = 0, E = 0; E < y.length; E += 1)
              P += y[E].parts.length;
            var D = {
              Part: P,
              Body: y.length,
              Cons: s.allConstraints(S).length,
              Comp: s.allComposites(S).length,
              Pair: p.pairs.list.length
            };
            g.fillStyle = "#0e0f19", g.fillRect(B, A, h * 5.5, M), g.font = "12px Arial", g.textBaseline = "top", g.textAlign = "right";
            for (var L in D) {
              var V = D[L];
              g.fillStyle = "#aaa", g.fillText(L, B + h, A + 8), g.fillStyle = "#eee", g.fillText(V, B + h, A + 26), B += h;
            }
          }, e.performance = function(v, g) {
            var x = v.engine, p = v.timing, S = p.deltaHistory, y = p.elapsedHistory, P = p.timestampElapsedHistory, h = p.engineDeltaHistory, M = p.engineElapsedHistory, B = x.timing.lastDelta, A = o(S), E = o(y), D = o(h), L = o(M), V = o(P), F = V / A || 0, W = 1e3 / A || 0, O = 4, H = 12, k = 60, $ = 34, G = 10, U = 69;
            g.fillStyle = "#0e0f19", g.fillRect(0, 50, H * 4 + k * 5 + 22, $), e.status(
              g,
              G,
              U,
              k,
              O,
              S.length,
              Math.round(W) + " fps",
              W / e._goodFps,
              function(z) {
                return S[z] / A - 1;
              }
            ), e.status(
              g,
              G + H + k,
              U,
              k,
              O,
              h.length,
              B.toFixed(2) + " dt",
              e._goodDelta / B,
              function(z) {
                return h[z] / D - 1;
              }
            ), e.status(
              g,
              G + (H + k) * 2,
              U,
              k,
              O,
              M.length,
              L.toFixed(2) + " ut",
              1 - L / e._goodFps,
              function(z) {
                return M[z] / L - 1;
              }
            ), e.status(
              g,
              G + (H + k) * 3,
              U,
              k,
              O,
              y.length,
              E.toFixed(2) + " rt",
              1 - E / e._goodFps,
              function(z) {
                return y[z] / E - 1;
              }
            ), e.status(
              g,
              G + (H + k) * 4,
              U,
              k,
              O,
              P.length,
              F.toFixed(2) + " x",
              F * F * F,
              function(z) {
                return (P[z] / S[z] / F || 0) - 1;
              }
            );
          }, e.status = function(v, g, x, p, S, y, P, h, M) {
            v.strokeStyle = "#888", v.fillStyle = "#444", v.lineWidth = 1, v.fillRect(g, x + 7, p, 1), v.beginPath(), v.moveTo(g, x + 7 - S * l.clamp(0.4 * M(0), -2, 2));
            for (var B = 0; B < p; B += 1)
              v.lineTo(g + B, x + 7 - (B < y ? S * l.clamp(0.4 * M(B), -2, 2) : 0));
            v.stroke(), v.fillStyle = "hsl(" + l.clamp(25 + 95 * h, 0, 120) + ",100%,60%)", v.fillRect(g, x - 7, 4, 4), v.font = "12px Arial", v.textBaseline = "middle", v.textAlign = "right", v.fillStyle = "#eee", v.fillText(P, g + p, x - 5);
          }, e.constraints = function(v, g) {
            for (var x = g, p = 0; p < v.length; p++) {
              var S = v[p];
              if (!(!S.render.visible || !S.pointA || !S.pointB)) {
                var y = S.bodyA, P = S.bodyB, h, M;
                if (y ? h = n.add(y.position, S.pointA) : h = S.pointA, S.render.type === "pin")
                  x.beginPath(), x.arc(h.x, h.y, 3, 0, 2 * Math.PI), x.closePath();
                else {
                  if (P ? M = n.add(P.position, S.pointB) : M = S.pointB, x.beginPath(), x.moveTo(h.x, h.y), S.render.type === "spring")
                    for (var B = n.sub(M, h), A = n.perp(n.normalise(B)), E = Math.ceil(l.clamp(S.length / 5, 12, 20)), D, L = 1; L < E; L += 1)
                      D = L % 2 === 0 ? 1 : -1, x.lineTo(
                        h.x + B.x * (L / E) + A.x * D * 4,
                        h.y + B.y * (L / E) + A.y * D * 4
                      );
                  x.lineTo(M.x, M.y);
                }
                S.render.lineWidth && (x.lineWidth = S.render.lineWidth, x.strokeStyle = S.render.strokeStyle, x.stroke()), S.render.anchors && (x.fillStyle = S.render.strokeStyle, x.beginPath(), x.arc(h.x, h.y, 3, 0, 2 * Math.PI), x.arc(M.x, M.y, 3, 0, 2 * Math.PI), x.closePath(), x.fill());
              }
            }
          }, e.bodies = function(v, g, x) {
            var p = x;
            v.engine;
            var S = v.options, y = S.showInternalEdges || !S.wireframes, P, h, M, B;
            for (M = 0; M < g.length; M++)
              if (P = g[M], !!P.render.visible) {
                for (B = P.parts.length > 1 ? 1 : 0; B < P.parts.length; B++)
                  if (h = P.parts[B], !!h.render.visible) {
                    if (S.showSleeping && P.isSleeping ? p.globalAlpha = 0.5 * h.render.opacity : h.render.opacity !== 1 && (p.globalAlpha = h.render.opacity), h.render.sprite && h.render.sprite.texture && !S.wireframes) {
                      var A = h.render.sprite, E = C(v, A.texture);
                      p.translate(h.position.x, h.position.y), p.rotate(h.angle), p.drawImage(
                        E,
                        E.width * -A.xOffset * A.xScale,
                        E.height * -A.yOffset * A.yScale,
                        E.width * A.xScale,
                        E.height * A.yScale
                      ), p.rotate(-h.angle), p.translate(-h.position.x, -h.position.y);
                    } else {
                      if (h.circleRadius)
                        p.beginPath(), p.arc(h.position.x, h.position.y, h.circleRadius, 0, 2 * Math.PI);
                      else {
                        p.beginPath(), p.moveTo(h.vertices[0].x, h.vertices[0].y);
                        for (var D = 1; D < h.vertices.length; D++)
                          !h.vertices[D - 1].isInternal || y ? p.lineTo(h.vertices[D].x, h.vertices[D].y) : p.moveTo(h.vertices[D].x, h.vertices[D].y), h.vertices[D].isInternal && !y && p.moveTo(h.vertices[(D + 1) % h.vertices.length].x, h.vertices[(D + 1) % h.vertices.length].y);
                        p.lineTo(h.vertices[0].x, h.vertices[0].y), p.closePath();
                      }
                      S.wireframes ? (p.lineWidth = 1, p.strokeStyle = "#bbb", p.stroke()) : (p.fillStyle = h.render.fillStyle, h.render.lineWidth && (p.lineWidth = h.render.lineWidth, p.strokeStyle = h.render.strokeStyle, p.stroke()), p.fill());
                    }
                    p.globalAlpha = 1;
                  }
              }
          }, e.bodyWireframes = function(v, g, x) {
            var p = x, S = v.options.showInternalEdges, y, P, h, M, B;
            for (p.beginPath(), h = 0; h < g.length; h++)
              if (y = g[h], !!y.render.visible)
                for (B = y.parts.length > 1 ? 1 : 0; B < y.parts.length; B++) {
                  for (P = y.parts[B], p.moveTo(P.vertices[0].x, P.vertices[0].y), M = 1; M < P.vertices.length; M++)
                    !P.vertices[M - 1].isInternal || S ? p.lineTo(P.vertices[M].x, P.vertices[M].y) : p.moveTo(P.vertices[M].x, P.vertices[M].y), P.vertices[M].isInternal && !S && p.moveTo(P.vertices[(M + 1) % P.vertices.length].x, P.vertices[(M + 1) % P.vertices.length].y);
                  p.lineTo(P.vertices[0].x, P.vertices[0].y);
                }
            p.lineWidth = 1, p.strokeStyle = "#bbb", p.stroke();
          }, e.bodyConvexHulls = function(v, g, x) {
            var p = x, S, y, P;
            for (p.beginPath(), y = 0; y < g.length; y++)
              if (S = g[y], !(!S.render.visible || S.parts.length === 1)) {
                for (p.moveTo(S.vertices[0].x, S.vertices[0].y), P = 1; P < S.vertices.length; P++)
                  p.lineTo(S.vertices[P].x, S.vertices[P].y);
                p.lineTo(S.vertices[0].x, S.vertices[0].y);
              }
            p.lineWidth = 1, p.strokeStyle = "rgba(255,255,255,0.2)", p.stroke();
          }, e.vertexNumbers = function(v, g, x) {
            var p = x, S, y, P;
            for (S = 0; S < g.length; S++) {
              var h = g[S].parts;
              for (P = h.length > 1 ? 1 : 0; P < h.length; P++) {
                var M = h[P];
                for (y = 0; y < M.vertices.length; y++)
                  p.fillStyle = "rgba(255,255,255,0.2)", p.fillText(S + "_" + y, M.position.x + (M.vertices[y].x - M.position.x) * 0.8, M.position.y + (M.vertices[y].y - M.position.y) * 0.8);
              }
            }
          }, e.mousePosition = function(v, g, x) {
            var p = x;
            p.fillStyle = "rgba(255,255,255,0.8)", p.fillText(g.position.x + "  " + g.position.y, g.position.x + 5, g.position.y - 5);
          }, e.bodyBounds = function(v, g, x) {
            var p = x;
            v.engine;
            var S = v.options;
            p.beginPath();
            for (var y = 0; y < g.length; y++) {
              var P = g[y];
              if (P.render.visible)
                for (var h = g[y].parts, M = h.length > 1 ? 1 : 0; M < h.length; M++) {
                  var B = h[M];
                  p.rect(B.bounds.min.x, B.bounds.min.y, B.bounds.max.x - B.bounds.min.x, B.bounds.max.y - B.bounds.min.y);
                }
            }
            S.wireframes ? p.strokeStyle = "rgba(255,255,255,0.08)" : p.strokeStyle = "rgba(0,0,0,0.1)", p.lineWidth = 1, p.stroke();
          }, e.bodyAxes = function(v, g, x) {
            var p = x;
            v.engine;
            var S = v.options, y, P, h, M;
            for (p.beginPath(), P = 0; P < g.length; P++) {
              var B = g[P], A = B.parts;
              if (B.render.visible)
                if (S.showAxes)
                  for (h = A.length > 1 ? 1 : 0; h < A.length; h++)
                    for (y = A[h], M = 0; M < y.axes.length; M++) {
                      var E = y.axes[M];
                      p.moveTo(y.position.x, y.position.y), p.lineTo(y.position.x + E.x * 20, y.position.y + E.y * 20);
                    }
                else
                  for (h = A.length > 1 ? 1 : 0; h < A.length; h++)
                    for (y = A[h], M = 0; M < y.axes.length; M++)
                      p.moveTo(y.position.x, y.position.y), p.lineTo(
                        (y.vertices[0].x + y.vertices[y.vertices.length - 1].x) / 2,
                        (y.vertices[0].y + y.vertices[y.vertices.length - 1].y) / 2
                      );
            }
            S.wireframes ? (p.strokeStyle = "indianred", p.lineWidth = 1) : (p.strokeStyle = "rgba(255, 255, 255, 0.4)", p.globalCompositeOperation = "overlay", p.lineWidth = 2), p.stroke(), p.globalCompositeOperation = "source-over";
          }, e.bodyPositions = function(v, g, x) {
            var p = x;
            v.engine;
            var S = v.options, y, P, h, M;
            for (p.beginPath(), h = 0; h < g.length; h++)
              if (y = g[h], !!y.render.visible)
                for (M = 0; M < y.parts.length; M++)
                  P = y.parts[M], p.arc(P.position.x, P.position.y, 3, 0, 2 * Math.PI, !1), p.closePath();
            for (S.wireframes ? p.fillStyle = "indianred" : p.fillStyle = "rgba(0,0,0,0.5)", p.fill(), p.beginPath(), h = 0; h < g.length; h++)
              y = g[h], y.render.visible && (p.arc(y.positionPrev.x, y.positionPrev.y, 2, 0, 2 * Math.PI, !1), p.closePath());
            p.fillStyle = "rgba(255,165,0,0.8)", p.fill();
          }, e.bodyVelocity = function(v, g, x) {
            var p = x;
            p.beginPath();
            for (var S = 0; S < g.length; S++) {
              var y = g[S];
              y.render.visible && (p.moveTo(y.position.x, y.position.y), p.lineTo(y.position.x + (y.position.x - y.positionPrev.x) * 2, y.position.y + (y.position.y - y.positionPrev.y) * 2));
            }
            p.lineWidth = 3, p.strokeStyle = "cornflowerblue", p.stroke();
          }, e.bodyIds = function(v, g, x) {
            var p = x, S, y;
            for (S = 0; S < g.length; S++)
              if (g[S].render.visible) {
                var P = g[S].parts;
                for (y = P.length > 1 ? 1 : 0; y < P.length; y++) {
                  var h = P[y];
                  p.font = "12px Arial", p.fillStyle = "rgba(255,255,255,0.5)", p.fillText(h.id, h.position.x + 10, h.position.y - 10);
                }
              }
          }, e.collisions = function(v, g, x) {
            var p = x, S = v.options, y, P, h, M;
            for (p.beginPath(), h = 0; h < g.length; h++)
              if (y = g[h], !!y.isActive)
                for (P = y.collision, M = 0; M < y.activeContacts.length; M++) {
                  var B = y.activeContacts[M], A = B.vertex;
                  p.rect(A.x - 1.5, A.y - 1.5, 3.5, 3.5);
                }
            for (S.wireframes ? p.fillStyle = "rgba(255,255,255,0.7)" : p.fillStyle = "orange", p.fill(), p.beginPath(), h = 0; h < g.length; h++)
              if (y = g[h], !!y.isActive && (P = y.collision, y.activeContacts.length > 0)) {
                var E = y.activeContacts[0].vertex.x, D = y.activeContacts[0].vertex.y;
                y.activeContacts.length === 2 && (E = (y.activeContacts[0].vertex.x + y.activeContacts[1].vertex.x) / 2, D = (y.activeContacts[0].vertex.y + y.activeContacts[1].vertex.y) / 2), P.bodyB === P.supports[0].body || P.bodyA.isStatic === !0 ? p.moveTo(E - P.normal.x * 8, D - P.normal.y * 8) : p.moveTo(E + P.normal.x * 8, D + P.normal.y * 8), p.lineTo(E, D);
              }
            S.wireframes ? p.strokeStyle = "rgba(255,165,0,0.7)" : p.strokeStyle = "orange", p.lineWidth = 1, p.stroke();
          }, e.separations = function(v, g, x) {
            var p = x, S = v.options, y, P, h, M, B;
            for (p.beginPath(), B = 0; B < g.length; B++)
              if (y = g[B], !!y.isActive) {
                P = y.collision, h = P.bodyA, M = P.bodyB;
                var A = 1;
                !M.isStatic && !h.isStatic && (A = 0.5), M.isStatic && (A = 0), p.moveTo(M.position.x, M.position.y), p.lineTo(M.position.x - P.penetration.x * A, M.position.y - P.penetration.y * A), A = 1, !M.isStatic && !h.isStatic && (A = 0.5), h.isStatic && (A = 0), p.moveTo(h.position.x, h.position.y), p.lineTo(h.position.x + P.penetration.x * A, h.position.y + P.penetration.y * A);
              }
            S.wireframes ? p.strokeStyle = "rgba(255,165,0,0.5)" : p.strokeStyle = "orange", p.stroke();
          }, e.inspector = function(v, g) {
            v.engine;
            var x = v.selected, p = v.render, S = p.options, y;
            if (S.hasBounds) {
              var P = p.bounds.max.x - p.bounds.min.x, h = p.bounds.max.y - p.bounds.min.y, M = P / p.options.width, B = h / p.options.height;
              g.scale(1 / M, 1 / B), g.translate(-p.bounds.min.x, -p.bounds.min.y);
            }
            for (var A = 0; A < x.length; A++) {
              var E = x[A].data;
              switch (g.translate(0.5, 0.5), g.lineWidth = 1, g.strokeStyle = "rgba(255,165,0,0.9)", g.setLineDash([1, 2]), E.type) {
                case "body":
                  y = E.bounds, g.beginPath(), g.rect(
                    Math.floor(y.min.x - 3),
                    Math.floor(y.min.y - 3),
                    Math.floor(y.max.x - y.min.x + 6),
                    Math.floor(y.max.y - y.min.y + 6)
                  ), g.closePath(), g.stroke();
                  break;
                case "constraint":
                  var D = E.pointA;
                  E.bodyA && (D = E.pointB), g.beginPath(), g.arc(D.x, D.y, 10, 0, 2 * Math.PI), g.closePath(), g.stroke();
                  break;
              }
              g.setLineDash([]), g.translate(-0.5, -0.5);
            }
            v.selectStart !== null && (g.translate(0.5, 0.5), g.lineWidth = 1, g.strokeStyle = "rgba(255,165,0,0.6)", g.fillStyle = "rgba(255,165,0,0.1)", y = v.selectBounds, g.beginPath(), g.rect(
              Math.floor(y.min.x),
              Math.floor(y.min.y),
              Math.floor(y.max.x - y.min.x),
              Math.floor(y.max.y - y.min.y)
            ), g.closePath(), g.stroke(), g.fill(), g.translate(-0.5, -0.5)), S.hasBounds && g.setTransform(1, 0, 0, 1, 0, 0);
          };
          var r = function(v, g) {
            var x = v.engine, p = v.timing, S = p.historySize, y = x.timing.timestamp;
            p.delta = g - p.lastTime || e._goodDelta, p.lastTime = g, p.timestampElapsed = y - p.lastTimestamp || 0, p.lastTimestamp = y, p.deltaHistory.unshift(p.delta), p.deltaHistory.length = Math.min(p.deltaHistory.length, S), p.engineDeltaHistory.unshift(x.timing.lastDelta), p.engineDeltaHistory.length = Math.min(p.engineDeltaHistory.length, S), p.timestampElapsedHistory.unshift(p.timestampElapsed), p.timestampElapsedHistory.length = Math.min(p.timestampElapsedHistory.length, S), p.engineElapsedHistory.unshift(x.timing.lastElapsed), p.engineElapsedHistory.length = Math.min(p.engineElapsedHistory.length, S), p.elapsedHistory.unshift(p.lastElapsed), p.elapsedHistory.length = Math.min(p.elapsedHistory.length, S);
          }, o = function(v) {
            for (var g = 0, x = 0; x < v.length; x += 1)
              g += v[x];
            return g / v.length || 0;
          }, c = function(v, g) {
            var x = document.createElement("canvas");
            return x.width = v, x.height = g, x.oncontextmenu = function() {
              return !1;
            }, x.onselectstart = function() {
              return !1;
            }, x;
          }, m = function(v) {
            var g = v.getContext("2d"), x = window.devicePixelRatio || 1, p = g.webkitBackingStorePixelRatio || g.mozBackingStorePixelRatio || g.msBackingStorePixelRatio || g.oBackingStorePixelRatio || g.backingStorePixelRatio || 1;
            return x / p;
          }, C = function(v, g) {
            var x = v.textures[g];
            return x || (x = v.textures[g] = new Image(), x.src = g, x);
          }, w = function(v, g) {
            var x = g;
            /(jpg|gif|png)$/.test(g) && (x = "url(" + g + ")"), v.canvas.style.background = x, v.canvas.style.backgroundSize = "contain", v.currentBackground = g;
          };
        })();
      },
      function(I, R) {
        var d = {};
        I.exports = d, function() {
          d.create = function(e) {
            return {
              vertex: e,
              normalImpulse: 0,
              tangentImpulse: 0
            };
          };
        }();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(7), s = d(19), a = d(14), u = d(20), n = d(4), f = d(5), i = d(10), t = d(0), r = d(6);
        (function() {
          e.create = function(o) {
            o = o || {};
            var c = {
              positionIterations: 6,
              velocityIterations: 4,
              constraintIterations: 2,
              enableSleeping: !1,
              events: [],
              plugin: {},
              gravity: {
                x: 0,
                y: 1,
                scale: 1e-3
              },
              timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0
              }
            }, m = t.extend(c, o);
            return m.world = o.world || f.create({ label: "World" }), m.pairs = o.pairs || u.create(), m.detector = o.detector || a.create(), m.grid = { buckets: [] }, m.world.gravity = m.gravity, m.broadphase = m.grid, m.metrics = {}, m;
          }, e.update = function(o, c, m) {
            var C = t.now();
            c = c || 1e3 / 60, m = m || 1;
            var w = o.world, v = o.detector, g = o.pairs, x = o.timing, p = x.timestamp, S;
            x.timestamp += c * x.timeScale, x.lastDelta = c * x.timeScale;
            var y = {
              timestamp: x.timestamp
            };
            n.trigger(o, "beforeUpdate", y);
            var P = f.allBodies(w), h = f.allConstraints(w);
            for (w.isModified && a.setBodies(v, P), w.isModified && f.setModified(w, !1, !1, !0), o.enableSleeping && l.update(P, x.timeScale), e._bodiesApplyGravity(P, o.gravity), e._bodiesUpdate(P, c, x.timeScale, m, w.bounds), i.preSolveAll(P), S = 0; S < o.constraintIterations; S++)
              i.solveAll(h, x.timeScale);
            i.postSolveAll(P), v.pairs = o.pairs;
            var M = a.collisions(v);
            for (u.update(g, M, p), o.enableSleeping && l.afterCollisions(g.list, x.timeScale), g.collisionStart.length > 0 && n.trigger(o, "collisionStart", { pairs: g.collisionStart }), s.preSolvePosition(g.list), S = 0; S < o.positionIterations; S++)
              s.solvePosition(g.list, x.timeScale);
            for (s.postSolvePosition(P), i.preSolveAll(P), S = 0; S < o.constraintIterations; S++)
              i.solveAll(h, x.timeScale);
            for (i.postSolveAll(P), s.preSolveVelocity(g.list), S = 0; S < o.velocityIterations; S++)
              s.solveVelocity(g.list, x.timeScale);
            return g.collisionActive.length > 0 && n.trigger(o, "collisionActive", { pairs: g.collisionActive }), g.collisionEnd.length > 0 && n.trigger(o, "collisionEnd", { pairs: g.collisionEnd }), e._bodiesClearForces(P), n.trigger(o, "afterUpdate", y), o.timing.lastElapsed = t.now() - C, o;
          }, e.merge = function(o, c) {
            if (t.extend(o, c), c.world) {
              o.world = c.world, e.clear(o);
              for (var m = f.allBodies(o.world), C = 0; C < m.length; C++) {
                var w = m[C];
                l.set(w, !1), w.id = t.nextId();
              }
            }
          }, e.clear = function(o) {
            u.clear(o.pairs), a.clear(o.detector);
          }, e._bodiesClearForces = function(o) {
            for (var c = 0; c < o.length; c++) {
              var m = o[c];
              m.force.x = 0, m.force.y = 0, m.torque = 0;
            }
          }, e._bodiesApplyGravity = function(o, c) {
            var m = typeof c.scale < "u" ? c.scale : 1e-3;
            if (!(c.x === 0 && c.y === 0 || m === 0))
              for (var C = 0; C < o.length; C++) {
                var w = o[C];
                w.isStatic || w.isSleeping || (w.force.y += w.mass * c.y * m, w.force.x += w.mass * c.x * m);
              }
          }, e._bodiesUpdate = function(o, c, m, C, w) {
            for (var v = 0; v < o.length; v++) {
              var g = o[v];
              g.isStatic || g.isSleeping || r.update(g, c, m, C);
            }
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(3), s = d(1);
        (function() {
          e._restingThresh = 4, e._restingThreshTangent = 6, e._positionDampen = 0.9, e._positionWarming = 0.8, e._frictionNormalMultiplier = 5, e.preSolvePosition = function(a) {
            var u, n, f, i = a.length;
            for (u = 0; u < i; u++)
              n = a[u], n.isActive && (f = n.activeContacts.length, n.collision.parentA.totalContacts += f, n.collision.parentB.totalContacts += f);
          }, e.solvePosition = function(a, u) {
            var n, f, i, t, r, o, c, m, C = e._positionDampen, w = a.length;
            for (n = 0; n < w; n++)
              f = a[n], !(!f.isActive || f.isSensor) && (i = f.collision, t = i.parentA, r = i.parentB, o = i.normal, f.separation = o.x * (r.positionImpulse.x + i.penetration.x - t.positionImpulse.x) + o.y * (r.positionImpulse.y + i.penetration.y - t.positionImpulse.y));
            for (n = 0; n < w; n++)
              f = a[n], !(!f.isActive || f.isSensor) && (i = f.collision, t = i.parentA, r = i.parentB, o = i.normal, m = (f.separation - f.slop) * u, (t.isStatic || r.isStatic) && (m *= 2), t.isStatic || t.isSleeping || (c = C / t.totalContacts, t.positionImpulse.x += o.x * m * c, t.positionImpulse.y += o.y * m * c), r.isStatic || r.isSleeping || (c = C / r.totalContacts, r.positionImpulse.x -= o.x * m * c, r.positionImpulse.y -= o.y * m * c));
          }, e.postSolvePosition = function(a) {
            for (var u = e._positionWarming, n = a.length, f = l.translate, i = s.update, t = 0; t < n; t++) {
              var r = a[t], o = r.positionImpulse, c = o.x, m = o.y, C = r.velocity;
              if (r.totalContacts = 0, c !== 0 || m !== 0) {
                for (var w = 0; w < r.parts.length; w++) {
                  var v = r.parts[w];
                  f(v.vertices, o), i(v.bounds, v.vertices, C), v.position.x += c, v.position.y += m;
                }
                r.positionPrev.x += c, r.positionPrev.y += m, c * C.x + m * C.y < 0 ? (o.x = 0, o.y = 0) : (o.x *= u, o.y *= u);
              }
            }
          }, e.preSolveVelocity = function(a) {
            var u = a.length, n, f;
            for (n = 0; n < u; n++) {
              var i = a[n];
              if (!(!i.isActive || i.isSensor)) {
                var t = i.activeContacts, r = t.length, o = i.collision, c = o.parentA, m = o.parentB, C = o.normal, w = o.tangent;
                for (f = 0; f < r; f++) {
                  var v = t[f], g = v.vertex, x = v.normalImpulse, p = v.tangentImpulse;
                  if (x !== 0 || p !== 0) {
                    var S = C.x * x + w.x * p, y = C.y * x + w.y * p;
                    c.isStatic || c.isSleeping || (c.positionPrev.x += S * c.inverseMass, c.positionPrev.y += y * c.inverseMass, c.anglePrev += c.inverseInertia * ((g.x - c.position.x) * y - (g.y - c.position.y) * S)), m.isStatic || m.isSleeping || (m.positionPrev.x -= S * m.inverseMass, m.positionPrev.y -= y * m.inverseMass, m.anglePrev -= m.inverseInertia * ((g.x - m.position.x) * y - (g.y - m.position.y) * S));
                  }
                }
              }
            }
          }, e.solveVelocity = function(a, u) {
            var n = u * u, f = e._restingThresh * n, i = e._frictionNormalMultiplier, t = e._restingThreshTangent * n, r = Number.MAX_VALUE, o = a.length, c, m, C, w;
            for (C = 0; C < o; C++) {
              var v = a[C];
              if (!(!v.isActive || v.isSensor)) {
                var g = v.collision, x = g.parentA, p = g.parentB, S = x.velocity, y = p.velocity, P = g.normal.x, h = g.normal.y, M = g.tangent.x, B = g.tangent.y, A = v.activeContacts, E = A.length, D = 1 / E, L = x.inverseMass + p.inverseMass, V = v.friction * v.frictionStatic * i * n;
                for (S.x = x.position.x - x.positionPrev.x, S.y = x.position.y - x.positionPrev.y, y.x = p.position.x - p.positionPrev.x, y.y = p.position.y - p.positionPrev.y, x.angularVelocity = x.angle - x.anglePrev, p.angularVelocity = p.angle - p.anglePrev, w = 0; w < E; w++) {
                  var F = A[w], W = F.vertex, O = W.x - x.position.x, H = W.y - x.position.y, k = W.x - p.position.x, $ = W.y - p.position.y, G = S.x - H * x.angularVelocity, U = S.y + O * x.angularVelocity, z = y.x - $ * p.angularVelocity, ue = y.y + k * p.angularVelocity, ie = G - z, re = U - ue, Y = P * ie + h * re, Q = M * ie + B * re, ae = v.separation + Y, ee = Math.min(ae, 1);
                  ee = ae < 0 ? 0 : ee;
                  var oe = ee * V;
                  Q > oe || -Q > oe ? (m = Q > 0 ? Q : -Q, c = v.friction * (Q > 0 ? 1 : -1) * n, c < -m ? c = -m : c > m && (c = m)) : (c = Q, m = r);
                  var se = O * h - H * P, le = k * h - $ * P, fe = D / (L + x.inverseInertia * se * se + p.inverseInertia * le * le), q = (1 + v.restitution) * Y * fe;
                  if (c *= fe, Y * Y > f && Y < 0)
                    F.normalImpulse = 0;
                  else {
                    var ce = F.normalImpulse;
                    F.normalImpulse += q, F.normalImpulse = Math.min(F.normalImpulse, 0), q = F.normalImpulse - ce;
                  }
                  if (Q * Q > t)
                    F.tangentImpulse = 0;
                  else {
                    var ve = F.tangentImpulse;
                    F.tangentImpulse += c, F.tangentImpulse < -m && (F.tangentImpulse = -m), F.tangentImpulse > m && (F.tangentImpulse = m), c = F.tangentImpulse - ve;
                  }
                  var j = P * q + M * c, b = h * q + B * c;
                  x.isStatic || x.isSleeping || (x.positionPrev.x += j * x.inverseMass, x.positionPrev.y += b * x.inverseMass, x.anglePrev += (O * b - H * j) * x.inverseInertia), p.isStatic || p.isSleeping || (p.positionPrev.x -= j * p.inverseMass, p.positionPrev.y -= b * p.inverseMass, p.anglePrev -= (k * b - $ * j) * p.inverseInertia);
                }
              }
            }
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(9), s = d(0);
        (function() {
          e.create = function(a) {
            return s.extend({
              table: {},
              list: [],
              collisionStart: [],
              collisionActive: [],
              collisionEnd: []
            }, a);
          }, e.update = function(a, u, n) {
            var f = a.list, i = f.length, t = a.table, r = u.length, o = a.collisionStart, c = a.collisionEnd, m = a.collisionActive, C, w, v, g;
            for (o.length = 0, c.length = 0, m.length = 0, g = 0; g < i; g++)
              f[g].confirmedActive = !1;
            for (g = 0; g < r; g++)
              C = u[g], v = C.pair, v ? (v.isActive ? m.push(v) : o.push(v), l.update(v, C, n), v.confirmedActive = !0) : (v = l.create(C, n), t[v.id] = v, o.push(v), f.push(v));
            var x = [];
            for (i = f.length, g = 0; g < i; g++)
              v = f[g], v.confirmedActive || (l.setActive(v, !1, n), c.push(v), !v.collision.bodyA.isSleeping && !v.collision.bodyB.isSleeping && x.push(g));
            for (g = 0; g < x.length; g++)
              w = x[g] - g, v = f[w], f.splice(w, 1), delete t[v.id];
          }, e.clear = function(a) {
            return a.table = {}, a.list.length = 0, a.collisionStart.length = 0, a.collisionActive.length = 0, a.collisionEnd.length = 0, a;
          };
        })();
      },
      function(I, R, d) {
        var e = I.exports = d(22);
        e.Axes = d(11), e.Bodies = d(12), e.Body = d(6), e.Bounds = d(1), e.Collision = d(8), e.Common = d(0), e.Composite = d(5), e.Composites = d(23), e.Constraint = d(10), e.Contact = d(17), e.Detector = d(14), e.Engine = d(18), e.Events = d(4), e.Grid = d(24), e.Mouse = d(13), e.MouseConstraint = d(25), e.Pair = d(9), e.Pairs = d(20), e.Plugin = d(15), e.Query = d(26), e.Render = d(16), e.Resolver = d(19), e.Runner = d(27), e.SAT = d(28), e.Sleeping = d(7), e.Svg = d(29), e.Vector = d(2), e.Vertices = d(3), e.World = d(30), e.Engine.run = e.Runner.run, e.Common.deprecated(e.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead");
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(15), s = d(0);
        (function() {
          e.name = "matter-js", e.version = "0.18.0", e.uses = [], e.used = [], e.use = function() {
            l.use(e, Array.prototype.slice.call(arguments));
          }, e.before = function(a, u) {
            return a = a.replace(/^Matter./, ""), s.chainPathBefore(e, a, u);
          }, e.after = function(a, u) {
            return a = a.replace(/^Matter./, ""), s.chainPathAfter(e, a, u);
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(5), s = d(10), a = d(0), u = d(6), n = d(12), f = a.deprecated;
        (function() {
          e.stack = function(i, t, r, o, c, m, C) {
            for (var w = l.create({ label: "Stack" }), v = i, g = t, x, p = 0, S = 0; S < o; S++) {
              for (var y = 0, P = 0; P < r; P++) {
                var h = C(v, g, P, S, x, p);
                if (h) {
                  var M = h.bounds.max.y - h.bounds.min.y, B = h.bounds.max.x - h.bounds.min.x;
                  M > y && (y = M), u.translate(h, { x: B * 0.5, y: M * 0.5 }), v = h.bounds.max.x + c, l.addBody(w, h), x = h, p += 1;
                } else
                  v += c;
              }
              g += y + m, v = i;
            }
            return w;
          }, e.chain = function(i, t, r, o, c, m) {
            for (var C = i.bodies, w = 1; w < C.length; w++) {
              var v = C[w - 1], g = C[w], x = v.bounds.max.y - v.bounds.min.y, p = v.bounds.max.x - v.bounds.min.x, S = g.bounds.max.y - g.bounds.min.y, y = g.bounds.max.x - g.bounds.min.x, P = {
                bodyA: v,
                pointA: { x: p * t, y: x * r },
                bodyB: g,
                pointB: { x: y * o, y: S * c }
              }, h = a.extend(P, m);
              l.addConstraint(i, s.create(h));
            }
            return i.label += " Chain", i;
          }, e.mesh = function(i, t, r, o, c) {
            var m = i.bodies, C, w, v, g, x;
            for (C = 0; C < r; C++) {
              for (w = 1; w < t; w++)
                v = m[w - 1 + C * t], g = m[w + C * t], l.addConstraint(i, s.create(a.extend({ bodyA: v, bodyB: g }, c)));
              if (C > 0)
                for (w = 0; w < t; w++)
                  v = m[w + (C - 1) * t], g = m[w + C * t], l.addConstraint(i, s.create(a.extend({ bodyA: v, bodyB: g }, c))), o && w > 0 && (x = m[w - 1 + (C - 1) * t], l.addConstraint(i, s.create(a.extend({ bodyA: x, bodyB: g }, c)))), o && w < t - 1 && (x = m[w + 1 + (C - 1) * t], l.addConstraint(i, s.create(a.extend({ bodyA: x, bodyB: g }, c))));
            }
            return i.label += " Mesh", i;
          }, e.pyramid = function(i, t, r, o, c, m, C) {
            return e.stack(i, t, r, o, c, m, function(w, v, g, x, p, S) {
              var y = Math.min(o, Math.ceil(r / 2)), P = p ? p.bounds.max.x - p.bounds.min.x : 0;
              if (!(x > y)) {
                x = y - x;
                var h = x, M = r - 1 - x;
                if (!(g < h || g > M)) {
                  S === 1 && u.translate(p, { x: (g + (r % 2 === 1 ? 1 : -1)) * P, y: 0 });
                  var B = p ? g * P : 0;
                  return C(i + B + g * c, v, g, x, p, S);
                }
              }
            });
          }, e.newtonsCradle = function(i, t, r, o, c) {
            for (var m = l.create({ label: "Newtons Cradle" }), C = 0; C < r; C++) {
              var w = 1.9, v = n.circle(
                i + C * (o * w),
                t + c,
                o,
                { inertia: 1 / 0, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
              ), g = s.create({ pointA: { x: i + C * (o * w), y: t }, bodyB: v });
              l.addBody(m, v), l.addConstraint(m, g);
            }
            return m;
          }, f(e, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"), e.car = function(i, t, r, o, c) {
            var m = u.nextGroup(!0), C = 20, w = -r * 0.5 + C, v = r * 0.5 - C, g = 0, x = l.create({ label: "Car" }), p = n.rectangle(i, t, r, o, {
              collisionFilter: {
                group: m
              },
              chamfer: {
                radius: o * 0.5
              },
              density: 2e-4
            }), S = n.circle(i + w, t + g, c, {
              collisionFilter: {
                group: m
              },
              friction: 0.8
            }), y = n.circle(i + v, t + g, c, {
              collisionFilter: {
                group: m
              },
              friction: 0.8
            }), P = s.create({
              bodyB: p,
              pointB: { x: w, y: g },
              bodyA: S,
              stiffness: 1,
              length: 0
            }), h = s.create({
              bodyB: p,
              pointB: { x: v, y: g },
              bodyA: y,
              stiffness: 1,
              length: 0
            });
            return l.addBody(x, p), l.addBody(x, S), l.addBody(x, y), l.addConstraint(x, P), l.addConstraint(x, h), x;
          }, f(e, "car", "Composites.car ➤ moved to car example"), e.softBody = function(i, t, r, o, c, m, C, w, v, g) {
            v = a.extend({ inertia: 1 / 0 }, v), g = a.extend({ stiffness: 0.2, render: { type: "line", anchors: !1 } }, g);
            var x = e.stack(i, t, r, o, c, m, function(p, S) {
              return n.circle(p, S, w, v);
            });
            return e.mesh(x, r, o, C, g), x.label = "Soft Body", x;
          }, f(e, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples");
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(9), s = d(0), a = s.deprecated;
        (function() {
          e.create = function(u) {
            var n = {
              buckets: {},
              pairs: {},
              pairsList: [],
              bucketWidth: 48,
              bucketHeight: 48
            };
            return s.extend(n, u);
          }, e.update = function(u, n, f, i) {
            var t, r, o, c = f.world, m = u.buckets, C, w, v = !1;
            for (t = 0; t < n.length; t++) {
              var g = n[t];
              if (!(g.isSleeping && !i) && !(c.bounds && (g.bounds.max.x < c.bounds.min.x || g.bounds.min.x > c.bounds.max.x || g.bounds.max.y < c.bounds.min.y || g.bounds.min.y > c.bounds.max.y))) {
                var x = e._getRegion(u, g);
                if (!g.region || x.id !== g.region.id || i) {
                  (!g.region || i) && (g.region = x);
                  var p = e._regionUnion(x, g.region);
                  for (r = p.startCol; r <= p.endCol; r++)
                    for (o = p.startRow; o <= p.endRow; o++) {
                      w = e._getBucketId(r, o), C = m[w];
                      var S = r >= x.startCol && r <= x.endCol && o >= x.startRow && o <= x.endRow, y = r >= g.region.startCol && r <= g.region.endCol && o >= g.region.startRow && o <= g.region.endRow;
                      !S && y && y && C && e._bucketRemoveBody(u, C, g), (g.region === x || S && !y || i) && (C || (C = e._createBucket(m, w)), e._bucketAddBody(u, C, g));
                    }
                  g.region = x, v = !0;
                }
              }
            }
            v && (u.pairsList = e._createActivePairsList(u));
          }, a(e, "update", "Grid.update ➤ replaced by Matter.Detector"), e.clear = function(u) {
            u.buckets = {}, u.pairs = {}, u.pairsList = [];
          }, a(e, "clear", "Grid.clear ➤ replaced by Matter.Detector"), e._regionUnion = function(u, n) {
            var f = Math.min(u.startCol, n.startCol), i = Math.max(u.endCol, n.endCol), t = Math.min(u.startRow, n.startRow), r = Math.max(u.endRow, n.endRow);
            return e._createRegion(f, i, t, r);
          }, e._getRegion = function(u, n) {
            var f = n.bounds, i = Math.floor(f.min.x / u.bucketWidth), t = Math.floor(f.max.x / u.bucketWidth), r = Math.floor(f.min.y / u.bucketHeight), o = Math.floor(f.max.y / u.bucketHeight);
            return e._createRegion(i, t, r, o);
          }, e._createRegion = function(u, n, f, i) {
            return {
              id: u + "," + n + "," + f + "," + i,
              startCol: u,
              endCol: n,
              startRow: f,
              endRow: i
            };
          }, e._getBucketId = function(u, n) {
            return "C" + u + "R" + n;
          }, e._createBucket = function(u, n) {
            var f = u[n] = [];
            return f;
          }, e._bucketAddBody = function(u, n, f) {
            var i = u.pairs, t = l.id, r = n.length, o;
            for (o = 0; o < r; o++) {
              var c = n[o];
              if (!(f.id === c.id || f.isStatic && c.isStatic)) {
                var m = t(f, c), C = i[m];
                C ? C[2] += 1 : i[m] = [f, c, 1];
              }
            }
            n.push(f);
          }, e._bucketRemoveBody = function(u, n, f) {
            var i = u.pairs, t = l.id, r;
            n.splice(s.indexOf(n, f), 1);
            var o = n.length;
            for (r = 0; r < o; r++) {
              var c = i[t(f, n[r])];
              c && (c[2] -= 1);
            }
          }, e._createActivePairsList = function(u) {
            var n, f = u.pairs, i = s.keys(f), t = i.length, r = [], o;
            for (o = 0; o < t; o++)
              n = f[i[o]], n[2] > 0 ? r.push(n) : delete f[i[o]];
            return r;
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(3), s = d(7), a = d(13), u = d(4), n = d(14), f = d(10), i = d(5), t = d(0), r = d(1);
        (function() {
          e.create = function(o, c) {
            var m = (o ? o.mouse : null) || (c ? c.mouse : null);
            m || (o && o.render && o.render.canvas ? m = a.create(o.render.canvas) : c && c.element ? m = a.create(c.element) : (m = a.create(), t.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
            var C = f.create({
              label: "Mouse Constraint",
              pointA: m.position,
              pointB: { x: 0, y: 0 },
              length: 0.01,
              stiffness: 0.1,
              angularStiffness: 1,
              render: {
                strokeStyle: "#90EE90",
                lineWidth: 3
              }
            }), w = {
              type: "mouseConstraint",
              mouse: m,
              element: null,
              body: null,
              constraint: C,
              collisionFilter: {
                category: 1,
                mask: 4294967295,
                group: 0
              }
            }, v = t.extend(w, c);
            return u.on(o, "beforeUpdate", function() {
              var g = i.allBodies(o.world);
              e.update(v, g), e._triggerEvents(v);
            }), v;
          }, e.update = function(o, c) {
            var m = o.mouse, C = o.constraint, w = o.body;
            if (m.button === 0) {
              if (C.bodyB)
                s.set(C.bodyB, !1), C.pointA = m.position;
              else
                for (var v = 0; v < c.length; v++)
                  if (w = c[v], r.contains(w.bounds, m.position) && n.canCollide(w.collisionFilter, o.collisionFilter))
                    for (var g = w.parts.length > 1 ? 1 : 0; g < w.parts.length; g++) {
                      var x = w.parts[g];
                      if (l.contains(x.vertices, m.position)) {
                        C.pointA = m.position, C.bodyB = o.body = w, C.pointB = { x: m.position.x - w.position.x, y: m.position.y - w.position.y }, C.angleB = w.angle, s.set(w, !1), u.trigger(o, "startdrag", { mouse: m, body: w });
                        break;
                      }
                    }
            } else
              C.bodyB = o.body = null, C.pointB = null, w && u.trigger(o, "enddrag", { mouse: m, body: w });
          }, e._triggerEvents = function(o) {
            var c = o.mouse, m = c.sourceEvents;
            m.mousemove && u.trigger(o, "mousemove", { mouse: c }), m.mousedown && u.trigger(o, "mousedown", { mouse: c }), m.mouseup && u.trigger(o, "mouseup", { mouse: c }), a.clearSourceEvents(c);
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(2), s = d(8), a = d(1), u = d(12), n = d(3);
        (function() {
          e.collides = function(f, i) {
            for (var t = [], r = i.length, o = f.bounds, c = s.collides, m = a.overlaps, C = 0; C < r; C++) {
              var w = i[C], v = w.parts.length, g = v === 1 ? 0 : 1;
              if (m(w.bounds, o))
                for (var x = g; x < v; x++) {
                  var p = w.parts[x];
                  if (m(p.bounds, o)) {
                    var S = c(p, f);
                    if (S) {
                      t.push(S);
                      break;
                    }
                  }
                }
            }
            return t;
          }, e.ray = function(f, i, t, r) {
            r = r || 1e-100;
            for (var o = l.angle(i, t), c = l.magnitude(l.sub(i, t)), m = (t.x + i.x) * 0.5, C = (t.y + i.y) * 0.5, w = u.rectangle(m, C, c, r, { angle: o }), v = e.collides(w, f), g = 0; g < v.length; g += 1) {
              var x = v[g];
              x.body = x.bodyB = x.bodyA;
            }
            return v;
          }, e.region = function(f, i, t) {
            for (var r = [], o = 0; o < f.length; o++) {
              var c = f[o], m = a.overlaps(c.bounds, i);
              (m && !t || !m && t) && r.push(c);
            }
            return r;
          }, e.point = function(f, i) {
            for (var t = [], r = 0; r < f.length; r++) {
              var o = f[r];
              if (a.contains(o.bounds, i))
                for (var c = o.parts.length === 1 ? 0 : 1; c < o.parts.length; c++) {
                  var m = o.parts[c];
                  if (a.contains(m.bounds, i) && n.contains(m.vertices, i)) {
                    t.push(o);
                    break;
                  }
                }
            }
            return t;
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(4), s = d(18), a = d(0);
        (function() {
          var u, n;
          if (typeof window < "u" && (u = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, n = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), !u) {
            var f;
            u = function(i) {
              f = setTimeout(function() {
                i(a.now());
              }, 1e3 / 60);
            }, n = function() {
              clearTimeout(f);
            };
          }
          e.create = function(i) {
            var t = {
              fps: 60,
              correction: 1,
              deltaSampleSize: 60,
              counterTimestamp: 0,
              frameCounter: 0,
              deltaHistory: [],
              timePrev: null,
              timeScalePrev: 1,
              frameRequestId: null,
              isFixed: !1,
              enabled: !0
            }, r = a.extend(t, i);
            return r.delta = r.delta || 1e3 / r.fps, r.deltaMin = r.deltaMin || 1e3 / r.fps, r.deltaMax = r.deltaMax || 1e3 / (r.fps * 0.5), r.fps = 1e3 / r.delta, r;
          }, e.run = function(i, t) {
            return typeof i.positionIterations < "u" && (t = i, i = e.create()), function r(o) {
              i.frameRequestId = u(r), o && i.enabled && e.tick(i, t, o);
            }(), i;
          }, e.tick = function(i, t, r) {
            var o = t.timing, c = 1, m, C = {
              timestamp: o.timestamp
            };
            l.trigger(i, "beforeTick", C), i.isFixed ? m = i.delta : (m = r - i.timePrev || i.delta, i.timePrev = r, i.deltaHistory.push(m), i.deltaHistory = i.deltaHistory.slice(-i.deltaSampleSize), m = Math.min.apply(null, i.deltaHistory), m = m < i.deltaMin ? i.deltaMin : m, m = m > i.deltaMax ? i.deltaMax : m, c = m / i.delta, i.delta = m), i.timeScalePrev !== 0 && (c *= o.timeScale / i.timeScalePrev), o.timeScale === 0 && (c = 0), i.timeScalePrev = o.timeScale, i.correction = c, i.frameCounter += 1, r - i.counterTimestamp >= 1e3 && (i.fps = i.frameCounter * ((r - i.counterTimestamp) / 1e3), i.counterTimestamp = r, i.frameCounter = 0), l.trigger(i, "tick", C), l.trigger(i, "beforeUpdate", C), s.update(t, m, c), l.trigger(i, "afterUpdate", C), l.trigger(i, "afterTick", C);
          }, e.stop = function(i) {
            n(i.frameRequestId);
          }, e.start = function(i, t) {
            e.run(i, t);
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(8), s = d(0), a = s.deprecated;
        (function() {
          e.collides = function(u, n) {
            return l.collides(u, n);
          }, a(e, "collides", "SAT.collides ➤ replaced by Collision.collides");
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e, d(1);
        var l = d(0);
        (function() {
          e.pathToVertices = function(s, a) {
            typeof window < "u" && !("SVGPathSeg" in window) && l.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
            var u, n, f, i, t, r, o, c, m, C, w = [], v, g, x = 0, p = 0, S = 0;
            a = a || 15;
            var y = function(h, M, B) {
              var A = B % 2 === 1 && B > 1;
              if (!m || h != m.x || M != m.y) {
                m && A ? (v = m.x, g = m.y) : (v = 0, g = 0);
                var E = {
                  x: v + h,
                  y: g + M
                };
                (A || !m) && (m = E), w.push(E), p = v + h, S = g + M;
              }
            }, P = function(h) {
              var M = h.pathSegTypeAsLetter.toUpperCase();
              if (M !== "Z") {
                switch (M) {
                  case "M":
                  case "L":
                  case "T":
                  case "C":
                  case "S":
                  case "Q":
                    p = h.x, S = h.y;
                    break;
                  case "H":
                    p = h.x;
                    break;
                  case "V":
                    S = h.y;
                    break;
                }
                y(p, S, h.pathSegType);
              }
            };
            for (e._svgPathToAbsolute(s), f = s.getTotalLength(), r = [], u = 0; u < s.pathSegList.numberOfItems; u += 1)
              r.push(s.pathSegList.getItem(u));
            for (o = r.concat(); x < f; ) {
              if (C = s.getPathSegAtLength(x), t = r[C], t != c) {
                for (; o.length && o[0] != t; )
                  P(o.shift());
                c = t;
              }
              switch (t.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  i = s.getPointAtLength(x), y(i.x, i.y, 0);
                  break;
              }
              x += a;
            }
            for (u = 0, n = o.length; u < n; ++u)
              P(o[u]);
            return w;
          }, e._svgPathToAbsolute = function(s) {
            for (var a, u, n, f, i, t, r = s.pathSegList, o = 0, c = 0, m = r.numberOfItems, C = 0; C < m; ++C) {
              var w = r.getItem(C), v = w.pathSegTypeAsLetter;
              if (/[MLHVCSQTA]/.test(v))
                "x" in w && (o = w.x), "y" in w && (c = w.y);
              else
                switch ("x1" in w && (n = o + w.x1), "x2" in w && (i = o + w.x2), "y1" in w && (f = c + w.y1), "y2" in w && (t = c + w.y2), "x" in w && (o += w.x), "y" in w && (c += w.y), v) {
                  case "m":
                    r.replaceItem(s.createSVGPathSegMovetoAbs(o, c), C);
                    break;
                  case "l":
                    r.replaceItem(s.createSVGPathSegLinetoAbs(o, c), C);
                    break;
                  case "h":
                    r.replaceItem(s.createSVGPathSegLinetoHorizontalAbs(o), C);
                    break;
                  case "v":
                    r.replaceItem(s.createSVGPathSegLinetoVerticalAbs(c), C);
                    break;
                  case "c":
                    r.replaceItem(s.createSVGPathSegCurvetoCubicAbs(o, c, n, f, i, t), C);
                    break;
                  case "s":
                    r.replaceItem(s.createSVGPathSegCurvetoCubicSmoothAbs(o, c, i, t), C);
                    break;
                  case "q":
                    r.replaceItem(s.createSVGPathSegCurvetoQuadraticAbs(o, c, n, f), C);
                    break;
                  case "t":
                    r.replaceItem(s.createSVGPathSegCurvetoQuadraticSmoothAbs(o, c), C);
                    break;
                  case "a":
                    r.replaceItem(s.createSVGPathSegArcAbs(o, c, w.r1, w.r2, w.angle, w.largeArcFlag, w.sweepFlag), C);
                    break;
                  case "z":
                  case "Z":
                    o = a, c = u;
                    break;
                }
              (v == "M" || v == "m") && (a = o, u = c);
            }
          };
        })();
      },
      function(I, R, d) {
        var e = {};
        I.exports = e;
        var l = d(5);
        d(0), function() {
          e.create = l.create, e.add = l.add, e.remove = l.remove, e.clear = l.clear, e.addComposite = l.addComposite, e.addBody = l.addBody, e.addConstraint = l.addConstraint;
        }();
      }
    ]);
  });
})(ge);
var Z = {};
function me(T) {
  var N = T.Common, I = T.Composite, R = T.Events, d = T.Render, e, l;
  return typeof window < "u" && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(s) {
    window.setTimeout(function() {
      s(N.now());
    }, 1e3 / 60);
  }, l = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), Z.create = function(s) {
    var a = {
      engine: null,
      element: window,
      controller: Z,
      frameRequestId: null,
      options: {}
    }, u = s.engine, n = N.extend(a, s);
    n.mapping = {}, n.mapping.ratioMultiplier = 1 / 6, n.mapping.VIEW = {
      width: window.innerWidth,
      height: window.innerHeight
    }, n.mapping.VIEW.center = {
      x: n.mapping.VIEW.width / 2,
      y: n.mapping.VIEW.height / 2
    }, n.mapping.WORLD = {
      width: n.mapping.VIEW.width * n.mapping.ratioMultiplier,
      height: n.mapping.VIEW.height * n.mapping.ratioMultiplier
    }, n.mapping.WORLD.center = {
      x: n.mapping.WORLD.width / 2,
      y: n.mapping.WORLD.height / 2
    }, n.mapping.viewToWorld = function(t) {
      return typeof t == "object" && t !== null ? {
        x: n.mapping.ratioMultiplier * t.x,
        y: n.mapping.ratioMultiplier * t.y
      } : n.mapping.ratioMultiplier * t;
    }, n.mapping.worldToView = function(t) {
      return typeof t == "object" && t !== null ? {
        x: t.x / n.mapping.ratioMultiplier,
        y: t.y / n.mapping.ratioMultiplier
      } : t / n.mapping.ratioMultiplier;
    };
    var f = document.querySelector("#debug");
    f.style.position = "absolute";
    var i = d.create({
      element: document.querySelector("#debug"),
      engine: u,
      options: {
        width: n.mapping.WORLD.width,
        height: n.mapping.WORLD.height,
        background: "#fafafa",
        wireframeBackground: "#222",
        hasBounds: !1,
        enabled: !0,
        wireframes: !0,
        showSleeping: !0,
        showDebug: !1,
        showBroadphase: !1,
        showBounds: !1,
        showVelocity: !1,
        showCollisions: !1,
        showAxes: !1,
        showPositions: !1,
        showAngleIndicator: !1,
        showIds: !1,
        showShadows: !1
      }
    });
    return d.run(i), n.DebugRender = i, n;
  }, Z.run = function(s) {
    (function a(u) {
      s.frameRequestId = e(a), Z.world(s);
    })();
  }, Z.stop = function(s) {
    l(s.frameRequestId);
  }, Z.world = function(s) {
    var a = s.engine, u = a.world;
    I.allBodies(u), I.allConstraints(u);
    var n = document.querySelectorAll("[matter]"), f = {
      timestamp: a.timing.timestamp
    };
    R.trigger(s, "beforeRender", f), Z.bodies(s, n);
  }, Z.bodies = function(s, a, u) {
    var n = s.engine, f = n.world;
    s.options;
    for (var i = I.allBodies(f), t = 0; t < i.length; t++)
      for (var r = i[t], o = r.parts.length > 1 ? 1 : 0; o < r.parts.length; o++) {
        var c = r.parts[o], m = c.Dom.element, C = s.mapping.worldToView({ x: c.position.x, y: c.position.y }), w = { x: m.offsetWidth / 2, y: m.offsetHeight / 2 };
        m.style.position = "absolute", m.style.transform = `translate(${C.x - w.x}px, ${C.y - w.y}px)`, m.style.transform += `rotate(${r.angle}rad)`;
      }
  }, Z;
}
var J = {};
function pe(T) {
  T.Vertices, T.Vector, T.Sleeping, T.Render;
  var N = T.Common;
  T.Bounds, T.Axes;
  var I = T.Body;
  return T.Events, J = N.clone(I, !0), J.create = function(R) {
    var d = I.create.apply(null, arguments);
    return d;
  }, J.setVertices = function(R, d) {
    I.setVertices.apply(null, arguments);
  }, J.setPosition = function(R, d) {
    I.setPosition.apply(null, arguments);
  }, J.setAngle = function(R, d) {
    I.setAngle.apply(null, arguments);
  }, J.scale = function(R, d, e, l) {
    I.scale.apply(null, arguments);
  }, J.update = function(R, d, e, l) {
    I.update.apply(null, arguments);
  }, J;
}
var K = {};
function de(T) {
  T.Body;
  var N = T.Bodies, I = T.DomBody, R = T.Vertices, d = T.Common, e = T.World;
  return T.Bounds, T.Vector, K.create = function(l) {
    var s = l.bodyType, a = l.el, u = l.render, n = l.position;
    delete l.bodyType, delete l.render, delete l.position, l.domRenderer = u;
    var f = null, i = document.querySelector(a), t = u.mapping.viewToWorld({ x: n.x, y: n.y });
    if (s == "block") {
      var r = u.mapping.viewToWorld({
        x: i.offsetWidth,
        y: i.offsetHeight
      });
      f = K.OGblock(
        t.x,
        t.y,
        r.x,
        r.y,
        l
      );
    } else if (s == "circle") {
      var o = u.mapping.viewToWorld(i.offsetWidth / 2);
      f = K.circle(
        t.x,
        t.y,
        o,
        l
      );
    }
    return f && e.add(u.engine.world, [f]), f;
  }, K.OGblock = function(l, s, a, u, f) {
    var f = f || {}, i = {
      label: "Block Body",
      position: { x: l, y: s },
      vertices: R.fromPath("L 0 0 L " + a + " 0 L " + a + " " + u + " L 0 " + u)
    };
    if (f.chamfer) {
      var t = option.chamfer;
      i.vertices = R.chamfer(
        i.vertices,
        t.radius,
        t.quality,
        t.qualityMin,
        t.qualityMax
      ), delete f.chamfer;
    }
    return I.create(d.extend({}, i, f));
  }, K.block = function(l, s, n) {
    var u = {
      Dom: {
        element: null,
        render: null
      }
    }, n = n || {};
    n = d.extend(u, n);
    var f = n.Dom.render, i = n.Dom.element, t = f.mapping.viewToWorld({
      x: l,
      y: s
    }), r = f.mapping.viewToWorld({
      x: i.offsetWidth,
      y: i.offsetHeight
    }), o = {
      label: "DOM Block Body",
      position: { x: t.x, y: t.y },
      vertices: R.fromPath("L 0 0 L " + r.x + " 0 L " + r.x + " " + r.y + " L 0 " + r.y)
    };
    if (n.chamfer) {
      var c = n.chamfer;
      o.vertices = R.chamfer(
        o.vertices,
        c.radius,
        c.quality,
        c.qualityMin,
        c.qualityMax
      ), delete n.chamfer;
    }
    var m = I.create(d.extend({}, o, n));
    return m;
  }, K.circle = function(l, s, a, u, n) {
    u = u || {};
    var f = {
      label: "Circle Body",
      circleRadius: a
    };
    n = n || 25;
    var i = Math.ceil(Math.max(10, Math.min(n, a)));
    return i % 2 === 1 && (i += 1), K.polygon(l, s, i, a, d.extend({}, f, u));
  }, K.polygon = function(l, s, a, u, n) {
    if (n = n || {}, a < 3)
      return N.circle(l, s, u, n);
    for (var f = 2 * Math.PI / a, i = "", t = f * 0.5, r = 0; r < a; r += 1) {
      var o = t + r * f, c = Math.cos(o) * u, m = Math.sin(o) * u;
      i += "L " + c.toFixed(3) + " " + m.toFixed(3) + " ";
    }
    var C = {
      label: "Polygon Body",
      position: { x: l, y: s },
      vertices: R.fromPath(i)
    };
    if (n.chamfer) {
      var w = n.chamfer;
      C.vertices = R.chamfer(
        C.vertices,
        w.radius,
        w.quality,
        w.qualityMin,
        w.qualityMax
      ), delete n.chamfer;
    }
    return I.create(d.extend({}, C, n));
  }, K;
}
var _ = {};
function xe(T) {
  T.Vertices;
  var N = T.Sleeping, I = T.Mouse, R = T.Events;
  T.Detector;
  var d = T.Constraint, e = T.Composite, l = T.Common, s = T.Bounds;
  _.create = function(u, n) {
    var f = (u ? u.mouse : null) || (n ? n.mouse : null);
    f || (u && u.render && u.render.canvas ? f = I.create(u.render.canvas) : n && n.element ? f = I.create(n.element) : (f = I.create(), l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
    var i = d.create({
      label: "Mouse Constraint",
      pointA: f.position,
      pointB: { x: 0, y: 0 },
      length: 0.01,
      stiffness: 0.1,
      angularStiffness: 1,
      render: {
        strokeStyle: "#90EE90",
        lineWidth: 3
      }
    }), t = {
      type: "mouseConstraint",
      mouse: f,
      element: null,
      body: null,
      constraint: i,
      collisionFilter: {
        category: 1,
        mask: 4294967295,
        group: 0
      }
    }, r = l.extend(t, n);
    return R.on(u, "beforeUpdate", function() {
      var o = e.allBodies(u.world);
      _.update(r, o), a(r);
    }), r;
  }, _.update = function(u, n) {
    var f = u.mouse, i = u.constraint, t = u.body, r;
    if (f.button === 0)
      if (i.bodyB)
        N.set(i.bodyB, !1), r = t.Dom.render.mapping.viewToWorld(f.position), i.pointA = r;
      else {
        document.querySelectorAll("[matter]");
        for (var o = 0; o < n.length; o++)
          if (t = n[o], r = t.Dom.render.mapping.viewToWorld(f.position), t.Dom.render.mapping.worldToView(t.position), s.contains(t.bounds, r)) {
            i.pointA = r, i.bodyB = u.body = t, i.pointB = { x: 0, y: 0 }, i.angleB = t.angle, R.trigger(u, "startdrag", { mouse: f, body: t });
            break;
          }
      }
    else
      i.bodyB = u.body = null, i.pointB = null, t && R.trigger(u, "enddrag", { mouse: f, body: t });
  };
  var a = function(u) {
    var n = u.mouse, f = n.sourceEvents;
    f.mousemove && R.trigger(u, "mousemove", { mouse: n }), f.mousedown && R.trigger(u, "mousedown", { mouse: n }), f.mouseup && R.trigger(u, "mouseup", { mouse: n }), I.clearSourceEvents(n);
  };
  return _;
}
function he(T) {
  T.World, T.Sleeping, T.Resolver, T.Render, T.Pair, T.Metrics, T.Grid, T.Events;
  var N = T.Composite;
  T.Constraint, T.Common, T.Body;
  var I = T.DomBody, R = T.Engine, d = R.update;
  R.update = function(l, s, a) {
    d(l, s, a), s = s || 1e3 / 60, a = a || 1;
    var u = l.world, n = l.timing, f = N.allBodies(u);
    return e(f, s, n.timeScale, a, u.bounds), l;
  };
  var e = function(l, s, a, u, n) {
    for (var f = 0; f < l.length; f++) {
      var i = l[f];
      i.isStatic || i.isSleeping || I.update(i, s, a, u);
    }
  };
}
var X = {
  name: "matter-dom-plugin",
  version: "1.0.0",
  for: "matter-js@^0.18.0",
  install: function(T) {
    X.installRenderDom(T), X.installDomBody(T), X.installDomBodies(T), X.installDomMouseConstraint(T), X.installEngine(T);
  },
  installRenderDom: function(T) {
    console.log("Installing RenderDom module."), T.RenderDom = me(T);
  },
  installDomBodies: function(T) {
    console.log("Installing DomBodies module."), T.DomBodies = de(T);
  },
  installDomMouseConstraint: function(T) {
    console.log("Installing DomMouseConstraint."), T.DomMouseConstraint = xe(T);
  },
  installDomBody: function(T) {
    console.log("Installing DomBody updates."), T.DomBody = pe(T);
  },
  installEngine: function(T) {
    console.log("Patching Engine."), he(T);
  }
};
ne.Matter.Plugin.register(X);
const ye = X;
export {
  ye as MatterDomPlugin
};
