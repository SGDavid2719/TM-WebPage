!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).ScrollReveal = t());
})(this, function () {
    "use strict";
    var r = {
        delay: 0,
        distance: "0",
        duration: 600,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        interval: 0,
        opacity: 0,
        origin: "bottom",
        rotate: { x: 0, y: 0, z: 0 },
        scale: 1,
        cleanup: !1,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: 0,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        afterReset: function () {},
        afterReveal: function () {},
        beforeReset: function () {},
        beforeReveal: function () {},
    };
    var n = {
        success: function () {
            document.documentElement.classList.add("sr"),
                document.body
                    ? (document.body.style.height = "100%")
                    : document.addEventListener(
                          "DOMContentLoaded",
                          function () {
                              document.body.style.height = "100%";
                          }
                      );
        },
        failure: function () {
            return (
                document.documentElement.classList.remove("sr"),
                {
                    clean: function () {},
                    destroy: function () {},
                    reveal: function () {},
                    sync: function () {},
                    get noop() {
                        return !0;
                    },
                }
            );
        },
    };
    function o(e) {
        return "object" == typeof window.Node
            ? e instanceof window.Node
            : null !== e &&
                  "object" == typeof e &&
                  "number" == typeof e.nodeType &&
                  "string" == typeof e.nodeName;
    }
    function l(e, t) {
        if ((void 0 === t && (t = document), e instanceof Array))
            return e.filter(o);
        if (o(e)) return [e];
        if (
            ((n = e),
            (i = Object.prototype.toString.call(n)),
            "object" == typeof window.NodeList
                ? n instanceof window.NodeList
                : null !== n &&
                  "object" == typeof n &&
                  "number" == typeof n.length &&
                  /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) &&
                  (0 === n.length || o(n[0])))
        )
            return Array.prototype.slice.call(e);
        var n, i;
        if ("string" == typeof e)
            try {
                var r = t.querySelectorAll(e);
                return Array.prototype.slice.call(r);
            } catch (e) {
                return [];
            }
        return [];
    }
    function s(e) {
        return (
            null !== e &&
            e instanceof Object &&
            (e.constructor === Object ||
                "[object Object]" === Object.prototype.toString.call(e))
        );
    }
    function d(n, i) {
        if (s(n))
            return Object.keys(n).forEach(function (e) {
                return i(n[e], e, n);
            });
        if (n instanceof Array)
            return n.forEach(function (e, t) {
                return i(e, t, n);
            });
        throw new TypeError("Expected either an array or object literal.");
    }
    function u(e) {
        for (var t, n = [], i = arguments.length - 1; 0 < i--; )
            n[i] = arguments[i + 1];
        this.constructor.debug &&
            console &&
            ((t = "%cScrollReveal: " + e),
            n.forEach(function (e) {
                return (t += "\n — " + e);
            }),
            console.log(t, "color: #ea654b;"));
    }
    function a() {
        function e() {
            return { active: [], stale: [] };
        }
        var n = this,
            t = e(),
            i = e(),
            r = e();
        try {
            d(l("[data-sr-id]"), function (e) {
                e = parseInt(e.getAttribute("data-sr-id"));
                t.active.push(e);
            });
        } catch (e) {
            throw e;
        }
        d(this.store.elements, function (e) {
            -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
        }),
            d(t.stale, function (e) {
                return delete n.store.elements[e];
            }),
            d(this.store.elements, function (e) {
                -1 === r.active.indexOf(e.containerId) &&
                    r.active.push(e.containerId),
                    e.hasOwnProperty("sequence") &&
                        -1 === i.active.indexOf(e.sequence.id) &&
                        i.active.push(e.sequence.id);
            }),
            d(this.store.containers, function (e) {
                -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
            }),
            d(r.stale, function (e) {
                var t = n.store.containers[e].node;
                t.removeEventListener("scroll", n.delegate),
                    t.removeEventListener("resize", n.delegate),
                    delete n.store.containers[e];
            }),
            d(this.store.sequences, function (e) {
                -1 === i.active.indexOf(e.id) && i.stale.push(e.id);
            }),
            d(i.stale, function (e) {
                return delete n.store.sequences[e];
            });
    }
    function v(e) {
        if (e.constructor !== Array) throw new TypeError("Expected array.");
        if (16 === e.length) return e;
        if (6 !== e.length)
            throw new RangeError("Expected array with either 6 or 16 values.");
        var t = b();
        return (
            (t[0] = e[0]),
            (t[1] = e[1]),
            (t[4] = e[2]),
            (t[5] = e[3]),
            (t[12] = e[4]),
            (t[13] = e[5]),
            t
        );
    }
    function b() {
        for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
        return e;
    }
    function w(e, t) {
        for (var n = v(e), i = v(t), r = [], o = 0; o < 4; o++)
            for (
                var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0;
                a < 4;
                a++
            ) {
                var c = 4 * a,
                    l = [i[c], i[1 + c], i[2 + c], i[3 + c]],
                    l = s[0] * l[0] + s[1] * l[1] + s[2] * l[2] + s[3] * l[3];
                r[o + c] = l;
            }
        return r;
    }
    function E(e, t) {
        var n = b();
        return (n[0] = e), (n[5] = "number" == typeof t ? t : e), n;
    }
    var i,
        c,
        j =
            ((i = {}),
            (c = document.documentElement.style),
            (e.clearCache = function () {
                return (i = {});
            }),
            e);
    function e(e, t) {
        if ((void 0 === t && (t = c), e && "string" == typeof e)) {
            if (i[e]) return i[e];
            if ("string" == typeof t[e]) return (i[e] = e);
            if ("string" == typeof t["-webkit-" + e])
                return (i[e] = "-webkit-" + e);
            throw new RangeError('Unable to find "' + e + '" style property.');
        }
        throw new TypeError("Expected a string.");
    }
    function f(e) {
        var t = window.getComputedStyle(e.node),
            n = t.position,
            i = e.config,
            r = {},
            o =
                (e.node.getAttribute("style") || "").match(
                    /[\w-]+\s*:\s*[^;]+\s*/gi
                ) || [];
        (r.computed = o
            ? o
                  .map(function (e) {
                      return e.trim();
                  })
                  .join("; ") + ";"
            : ""),
            (r.generated = o.some(function (e) {
                return e.match(/visibility\s?:\s?visible/i);
            })
                ? r.computed
                : o
                      .concat(["visibility: visible"])
                      .map(function (e) {
                          return e.trim();
                      })
                      .join("; ") + ";");
        var s,
            a,
            c,
            l,
            d = parseFloat(t.opacity),
            u = isNaN(parseFloat(i.opacity))
                ? parseFloat(t.opacity)
                : parseFloat(i.opacity),
            o = {
                computed: d !== u ? "opacity: " + d + ";" : "",
                generated: d !== u ? "opacity: " + u + ";" : "",
            },
            d = [];
        if (parseFloat(i.distance)) {
            var f = "top" === i.origin || "bottom" === i.origin ? "Y" : "X",
                h = i.distance;
            ("top" !== i.origin && "left" !== i.origin) ||
                (h = /^-/.test(h) ? h.substr(1) : "-" + h);
            var u = h.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
                p = u[0];
            switch (u[1]) {
                case "em":
                    h = parseInt(t.fontSize) * p;
                    break;
                case "px":
                    h = p;
                    break;
                case "%":
                    h =
                        "Y" == f
                            ? (e.node.getBoundingClientRect().height * p) / 100
                            : (e.node.getBoundingClientRect().width * p) / 100;
                    break;
                default:
                    throw new RangeError(
                        "Unrecognized or missing distance unit."
                    );
            }
            "Y" == f
                ? d.push(((s = h), ((a = b())[13] = s), a))
                : d.push(((s = h), ((a = b())[12] = s), a));
        }
        i.rotate.x &&
            d.push(
                ((l = i.rotate.x),
                (c = (Math.PI / 180) * l),
                ((l = b())[5] = l[10] = Math.cos(c)),
                (l[6] = l[9] = Math.sin(c)),
                (l[9] *= -1),
                l)
            ),
            i.rotate.y &&
                d.push(
                    ((c = i.rotate.y),
                    (l = (Math.PI / 180) * c),
                    ((c = b())[0] = c[10] = Math.cos(l)),
                    (c[2] = c[8] = Math.sin(l)),
                    (c[2] *= -1),
                    c)
                ),
            i.rotate.z &&
                d.push(
                    ((g = i.rotate.z),
                    (m = (Math.PI / 180) * g),
                    ((g = b())[0] = g[5] = Math.cos(m)),
                    (g[1] = g[4] = Math.sin(m)),
                    (g[4] *= -1),
                    g)
                ),
            1 !== i.scale &&
                (0 === i.scale ? d.push(E(2e-4)) : d.push(E(i.scale)));
        var m = {};
        d.length
            ? ((m.property = j("transform")),
              (m.computed = {
                  raw: t[m.property],
                  matrix: (function (e) {
                      if ("string" == typeof e) {
                          e = e.match(/matrix(3d)?\(([^)]+)\)/);
                          if (e) return v(e[2].split(", ").map(parseFloat));
                      }
                      return b();
                  })(t[m.property]),
              }),
              d.unshift(m.computed.matrix),
              (y = d.reduce(w)),
              (m.generated = {
                  initial: m.property + ": matrix3d(" + y.join(", ") + ");",
                  final:
                      m.property +
                      ": matrix3d(" +
                      m.computed.matrix.join(", ") +
                      ");",
              }))
            : (m.generated = { initial: "", final: "" });
        var y,
            g = {};
        return (
            o.generated || m.generated.initial
                ? ((g.property = j("transition")),
                  (g.computed = t[g.property]),
                  (g.fragments = []),
                  (d = i.delay),
                  (y = i.duration),
                  (i = i.easing),
                  o.generated &&
                      g.fragments.push({
                          delayed:
                              "opacity " +
                              y / 1e3 +
                              "s " +
                              i +
                              " " +
                              d / 1e3 +
                              "s",
                          instant: "opacity " + y / 1e3 + "s " + i + " 0s",
                      }),
                  m.generated.initial &&
                      g.fragments.push({
                          delayed:
                              m.property +
                              " " +
                              y / 1e3 +
                              "s " +
                              i +
                              " " +
                              d / 1e3 +
                              "s",
                          instant:
                              m.property + " " + y / 1e3 + "s " + i + " 0s",
                      }),
                  g.computed &&
                      !g.computed.match(/all 0s|none 0s/) &&
                      g.fragments.unshift({
                          delayed: g.computed,
                          instant: g.computed,
                      }),
                  (i = g.fragments.reduce(
                      function (e, t, n) {
                          return (
                              (e.delayed +=
                                  0 === n ? t.delayed : ", " + t.delayed),
                              (e.instant +=
                                  0 === n ? t.instant : ", " + t.instant),
                              e
                          );
                      },
                      { delayed: "", instant: "" }
                  )),
                  (g.generated = {
                      delayed: g.property + ": " + i.delayed + ";",
                      instant: g.property + ": " + i.instant + ";",
                  }))
                : (g.generated = { delayed: "", instant: "" }),
            { inline: r, opacity: o, position: n, transform: m, transition: g }
        );
    }
    function h(n, e) {
        e.split(";").forEach(function (e) {
            var t = e.split(":"),
                e = t[0],
                t = t.slice(1);
            e && t && (n.style[e.trim()] = t.join(":"));
        });
    }
    function p(e) {
        var i,
            r = this;
        try {
            d(l(e), function (e) {
                var t,
                    n = e.getAttribute("data-sr-id");
                null !== n &&
                    ((i = !0),
                    (t = r.store.elements[n]).callbackTimer &&
                        window.clearTimeout(t.callbackTimer.clock),
                    h(t.node, t.styles.inline.generated),
                    e.removeAttribute("data-sr-id"),
                    delete r.store.elements[n]);
            });
        } catch (e) {
            return u.call(this, "Clean failed.", e.message);
        }
        if (i)
            try {
                a.call(this);
            } catch (e) {
                return u.call(this, "Clean failed.", e.message);
            }
    }
    function m(n) {
        for (var e = [], t = arguments.length - 1; 0 < t--; )
            e[t] = arguments[t + 1];
        if (s(n))
            return (
                d(e, function (e) {
                    d(e, function (e, t) {
                        s(e)
                            ? ((n[t] && s(n[t])) || (n[t] = {}), m(n[t], e))
                            : (n[t] = e);
                    });
                }),
                n
            );
        throw new TypeError("Target must be an object literal.");
    }
    function y(e) {
        return (
            void 0 === e && (e = navigator.userAgent),
            /Android|iPhone|iPad|iPod/i.test(e)
        );
    }
    var t,
        g =
            ((t = 0),
            function () {
                return t++;
            });
    function T() {
        var t = this;
        a.call(this),
            d(this.store.elements, function (e) {
                var t = [e.styles.inline.generated];
                e.visible
                    ? (t.push(e.styles.opacity.computed),
                      t.push(e.styles.transform.generated.final),
                      (e.revealed = !0))
                    : (t.push(e.styles.opacity.generated),
                      t.push(e.styles.transform.generated.initial),
                      (e.revealed = !1)),
                    h(
                        e.node,
                        t
                            .filter(function (e) {
                                return "" !== e;
                            })
                            .join(" ")
                    );
            }),
            d(this.store.containers, function (e) {
                e = e.node === document.documentElement ? window : e.node;
                e.addEventListener("scroll", t.delegate),
                    e.addEventListener("resize", t.delegate);
            }),
            this.delegate(),
            (this.initTimeout = null);
    }
    function k(e, t) {
        void 0 === t && (t = {});
        var n = t.pristine || this.pristine,
            i =
                "always" === e.config.useDelay ||
                ("onload" === e.config.useDelay && n) ||
                ("once" === e.config.useDelay && !e.seen),
            r = e.visible && !e.revealed,
            n = !e.visible && e.revealed && e.config.reset;
        return t.reveal || r
            ? function (e, t) {
                  var n = [
                      e.styles.inline.generated,
                      e.styles.opacity.computed,
                      e.styles.transform.generated.final,
                  ];
                  t
                      ? n.push(e.styles.transition.generated.delayed)
                      : n.push(e.styles.transition.generated.instant);
                  (e.revealed = e.seen = !0),
                      h(
                          e.node,
                          n
                              .filter(function (e) {
                                  return "" !== e;
                              })
                              .join(" ")
                      ),
                      O.call(this, e, t);
              }.call(this, e, i)
            : t.reset || n
            ? function (e) {
                  var t = [
                      e.styles.inline.generated,
                      e.styles.opacity.generated,
                      e.styles.transform.generated.initial,
                      e.styles.transition.generated.instant,
                  ];
                  (e.revealed = !1),
                      h(
                          e.node,
                          t
                              .filter(function (e) {
                                  return "" !== e;
                              })
                              .join(" ")
                      ),
                      O.call(this, e);
              }.call(this, e)
            : void 0;
    }
    function O(e, t) {
        var n = this,
            i = t ? e.config.duration + e.config.delay : e.config.duration,
            r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
            o = e.revealed ? e.config.afterReveal : e.config.afterReset,
            t = 0;
        e.callbackTimer &&
            ((t = Date.now() - e.callbackTimer.start),
            window.clearTimeout(e.callbackTimer.clock)),
            r(e.node),
            (e.callbackTimer = {
                start: Date.now(),
                clock: window.setTimeout(function () {
                    o(e.node),
                        (e.callbackTimer = null),
                        e.revealed &&
                            !e.config.reset &&
                            e.config.cleanup &&
                            p.call(n, e.node);
                }, i - t),
            });
    }
    function x(e, t) {
        if (
            (void 0 === t && (t = this.pristine),
            !e.visible && e.revealed && e.config.reset)
        )
            return k.call(this, e, { reset: !0 });
        var n = this.store.sequences[e.sequence.id],
            i = e.sequence.index;
        if (n) {
            var r = new q(n, "visible", this.store),
                o = new q(n, "revealed", this.store);
            if (((n.models = { visible: r, revealed: o }), !o.body.length)) {
                var s = n.members[r.body[0]],
                    s = this.store.elements[s];
                if (s)
                    return (
                        A.call(this, n, r.body[0], -1, t),
                        A.call(this, n, r.body[0], 1, t),
                        k.call(this, s, { reveal: !0, pristine: t })
                    );
            }
            return !n.blocked.head &&
                i === [].concat(o.head).pop() &&
                i >= [].concat(r.body).shift()
                ? (A.call(this, n, i, -1, t),
                  k.call(this, e, { reveal: !0, pristine: t }))
                : !n.blocked.foot &&
                  i === [].concat(o.foot).shift() &&
                  i <= [].concat(r.body).pop()
                ? (A.call(this, n, i, 1, t),
                  k.call(this, e, { reveal: !0, pristine: t }))
                : void 0;
        }
    }
    function R(e) {
        e = Math.abs(e);
        if (isNaN(e)) throw new RangeError("Invalid sequence interval.");
        (this.id = g()),
            (this.interval = Math.max(e, 16)),
            (this.members = []),
            (this.models = {}),
            (this.blocked = { head: !1, foot: !1 });
    }
    function q(e, n, i) {
        var r = this;
        (this.head = []),
            (this.body = []),
            (this.foot = []),
            d(e.members, function (e, t) {
                e = i.elements[e];
                e && e[n] && r.body.push(t);
            }),
            this.body.length &&
                d(e.members, function (e, t) {
                    e = i.elements[e];
                    e && !e[n] && (t < r.body[0] ? r.head : r.foot).push(t);
                });
    }
    function A(e, t, n, i) {
        var r = this,
            o = ["head", null, "foot"][1 + n],
            n = e.members[t + n],
            s = this.store.elements[n];
        (e.blocked[o] = !0),
            setTimeout(function () {
                (e.blocked[o] = !1), s && x.call(r, s, i);
            }, e.interval);
    }
    function P(e, o, t) {
        var s = this;
        void 0 === o && (o = {}), void 0 === t && (t = !1);
        var a,
            c = [],
            n = o.interval || r.interval;
        try {
            n && (a = new R(n));
            var i = l(e);
            if (!i.length) throw new Error("Invalid reveal target.");
            i = i.reduce(function (e, t) {
                var n = {},
                    i = t.getAttribute("data-sr-id");
                i
                    ? (m(n, s.store.elements[i]),
                      h(n.node, n.styles.inline.computed))
                    : ((n.id = g()),
                      (n.node = t),
                      (n.seen = !1),
                      (n.revealed = !1),
                      (n.visible = !1));
                var r = m({}, n.config || s.defaults, o);
                if ((!r.mobile && y()) || (!r.desktop && !y()))
                    return i && p.call(s, n), e;
                i = l(r.container)[0];
                if (!i) throw new Error("Invalid container.");
                return (
                    i.contains(t) &&
                        (null ===
                            (t = (function (t) {
                                var e = [],
                                    n = arguments.length - 1;
                                for (; 0 < n--; ) e[n] = arguments[n + 1];
                                var i = null;
                                return (
                                    d(e, function (e) {
                                        d(e, function (e) {
                                            null === i &&
                                                e.node === t &&
                                                (i = e.id);
                                        });
                                    }),
                                    i
                                );
                            })(i, c, s.store.containers)) &&
                            ((t = g()), c.push({ id: t, node: i })),
                        (n.config = r),
                        (n.containerId = t),
                        (n.styles = f(n)),
                        a &&
                            ((n.sequence = {
                                id: a.id,
                                index: a.members.length,
                            }),
                            a.members.push(n.id)),
                        e.push(n)),
                    e
                );
            }, []);
            d(i, function (e) {
                (s.store.elements[e.id] = e).node.setAttribute(
                    "data-sr-id",
                    e.id
                );
            });
        } catch (e) {
            return u.call(this, "Reveal failed.", e.message);
        }
        d(c, function (e) {
            s.store.containers[e.id] = { id: e.id, node: e.node };
        }),
            a && (this.store.sequences[a.id] = a),
            !0 !== t &&
                (this.store.history.push({ target: e, options: o }),
                this.initTimeout && window.clearTimeout(this.initTimeout),
                (this.initTimeout = window.setTimeout(T.bind(this), 0)));
    }
    var L,
        M =
            Math.sign ||
            function (e) {
                return (0 < e) - (e < 0) || +e;
            },
        I =
            ((L = Date.now()),
            function (e) {
                var t = Date.now();
                16 < t - L
                    ? e((L = t))
                    : setTimeout(function () {
                          return I(e);
                      }, 0);
            }),
        N =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            I;
    function z(e, t) {
        for (
            var n = t ? e.node.clientHeight : e.node.offsetHeight,
                t = t ? e.node.clientWidth : e.node.offsetWidth,
                i = 0,
                r = 0,
                o = e.node;
            isNaN(o.offsetTop) || (i += o.offsetTop),
                isNaN(o.offsetLeft) || (r += o.offsetLeft),
                (o = o.offsetParent),
                o;

        );
        return {
            bounds: { top: i, right: r + t, bottom: i + n, left: r },
            height: n,
            width: t,
        };
    }
    function F(e, t) {
        var i = this;
        void 0 === e && (e = { type: "init" }),
            void 0 === t && (t = this.store.elements),
            N(function () {
                var n = "init" === e.type || "resize" === e.type;
                d(i.store.containers, function (e) {
                    n && (e.geometry = z.call(i, e, !0));
                    var t = function (e) {
                        var t,
                            e =
                                e.node === document.documentElement
                                    ? ((t = window.pageYOffset),
                                      window.pageXOffset)
                                    : ((t = e.node.scrollTop),
                                      e.node.scrollLeft);
                        return { top: t, left: e };
                    }.call(i, e);
                    e.scroll &&
                        (e.direction = {
                            x: M(t.left - e.scroll.left),
                            y: M(t.top - e.scroll.top),
                        }),
                        (e.scroll = t);
                }),
                    d(t, function (e) {
                        (!n && void 0 !== e.geometry) ||
                            (e.geometry = z.call(i, e)),
                            (e.visible = function (e) {
                                void 0 === e && (e = {});
                                var t = this.store.containers[e.containerId];
                                if (t) {
                                    var n = Math.max(
                                            0,
                                            Math.min(1, e.config.viewFactor)
                                        ),
                                        i = e.config.viewOffset,
                                        r =
                                            e.geometry.bounds.top +
                                            e.geometry.height * n,
                                        o =
                                            e.geometry.bounds.right -
                                            e.geometry.width * n,
                                        s =
                                            e.geometry.bounds.bottom -
                                            e.geometry.height * n,
                                        a =
                                            e.geometry.bounds.left +
                                            e.geometry.width * n,
                                        c =
                                            t.geometry.bounds.top +
                                            t.scroll.top +
                                            i.top,
                                        l =
                                            t.geometry.bounds.right +
                                            t.scroll.left -
                                            i.right,
                                        n =
                                            t.geometry.bounds.bottom +
                                            t.scroll.top -
                                            i.bottom,
                                        i =
                                            t.geometry.bounds.left +
                                            t.scroll.left +
                                            i.left;
                                    return (
                                        (r < n && i < o && c < s && a < l) ||
                                        "fixed" === e.styles.position
                                    );
                                }
                            }.call(i, e));
                    }),
                    d(t, function (e) {
                        (e.sequence ? x : k).call(i, e);
                    }),
                    (i.pristine = !1);
            });
    }
    var D,
        S,
        C,
        W,
        Y,
        $,
        H,
        B,
        U = "4.0.9";
    function X(e) {
        var t;
        if (
            (void 0 === e && (e = {}),
            void 0 === this || Object.getPrototypeOf(this) !== X.prototype)
        )
            return new X(e);
        if (!X.isSupported())
            return (
                u.call(
                    this,
                    "Instantiation failed.",
                    "This browser is not supported."
                ),
                n.failure()
            );
        try {
            t = m({}, $ || r, e);
        } catch (e) {
            return (
                u.call(this, "Invalid configuration.", e.message), n.failure()
            );
        }
        try {
            if (!l(t.container)[0]) throw new Error("Invalid container.");
        } catch (e) {
            return u.call(this, e.message), n.failure();
        }
        return (!($ = t).mobile && y()) || (!$.desktop && !y())
            ? (u.call(
                  this,
                  "This device is disabled.",
                  "desktop: " + $.desktop,
                  "mobile: " + $.mobile
              ),
              n.failure())
            : (n.success(),
              (this.store = {
                  containers: {},
                  elements: {},
                  history: [],
                  sequences: {},
              }),
              (this.pristine = !0),
              (D = D || F.bind(this)),
              (S =
                  S ||
                  function () {
                      var t = this;
                      d(this.store.elements, function (e) {
                          h(e.node, e.styles.inline.generated),
                              e.node.removeAttribute("data-sr-id");
                      }),
                          d(this.store.containers, function (e) {
                              e =
                                  e.node === document.documentElement
                                      ? window
                                      : e.node;
                              e.removeEventListener("scroll", t.delegate),
                                  e.removeEventListener("resize", t.delegate);
                          }),
                          (this.store = {
                              containers: {},
                              elements: {},
                              history: [],
                              sequences: {},
                          });
                  }.bind(this)),
              (C = C || P.bind(this)),
              (W = W || p.bind(this)),
              (Y =
                  Y ||
                  function () {
                      var t = this;
                      d(this.store.history, function (e) {
                          P.call(t, e.target, e.options, !0);
                      }),
                          T.call(this);
                  }.bind(this)),
              Object.defineProperty(this, "delegate", {
                  get: function () {
                      return D;
                  },
              }),
              Object.defineProperty(this, "destroy", {
                  get: function () {
                      return S;
                  },
              }),
              Object.defineProperty(this, "reveal", {
                  get: function () {
                      return C;
                  },
              }),
              Object.defineProperty(this, "clean", {
                  get: function () {
                      return W;
                  },
              }),
              Object.defineProperty(this, "sync", {
                  get: function () {
                      return Y;
                  },
              }),
              Object.defineProperty(this, "defaults", {
                  get: function () {
                      return $;
                  },
              }),
              Object.defineProperty(this, "version", {
                  get: function () {
                      return U;
                  },
              }),
              Object.defineProperty(this, "noop", {
                  get: function () {
                      return !1;
                  },
              }),
              (B = B || this));
    }
    return (
        (X.isSupported = function () {
            return (
                ("transform" in (e = document.documentElement.style) ||
                    "WebkitTransform" in e) &&
                ("transition" in (e = document.documentElement.style) ||
                    "WebkitTransition" in e)
            );
            var e;
        }),
        Object.defineProperty(X, "debug", {
            get: function () {
                return H || !1;
            },
            set: function (e) {
                return (H = "boolean" == typeof e ? e : H);
            },
        }),
        X(),
        X
    );
});
