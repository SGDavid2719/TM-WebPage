Function &&
    Function.prototype &&
    Function.prototype.bind &&
    (/(MSIE ([6789]|10|11))|Trident/.test(navigator.userAgent) ||
        (window.__twttr &&
            window.__twttr.widgets &&
            window.__twttr.widgets.loaded &&
            window.twttr.widgets.load &&
            window.twttr.widgets.load(),
        (window.__twttr &&
            window.__twttr.widgets &&
            window.__twttr.widgets.init) ||
            (function (a) {
                function t(t) {
                    for (
                        var e, n, r = t[0], i = t[1], o = 0, s = [];
                        o < r.length;
                        o++
                    )
                        (n = r[o]), u[n] && s.push(u[n][0]), (u[n] = 0);
                    for (e in i)
                        Object.prototype.hasOwnProperty.call(i, e) &&
                            (a[e] = i[e]);
                    for (d && d(t); s.length; ) s.shift()();
                }
                var n = {},
                    u = { 1: 0 };
                function c(t) {
                    if (n[t]) return n[t].exports;
                    var e = (n[t] = { i: t, l: !1, exports: {} });
                    return (
                        a[t].call(e.exports, e, e.exports, c),
                        (e.l = !0),
                        e.exports
                    );
                }
                (c.e = function (i) {
                    var t,
                        e,
                        o,
                        s,
                        n = [],
                        r = u[i];
                    return (
                        0 !== r &&
                            (r
                                ? n.push(r[2])
                                : ((e = new Promise(function (t, e) {
                                      r = u[i] = [t, e];
                                  })),
                                  n.push((r[2] = e)),
                                  (e =
                                      document.getElementsByTagName("head")[0]),
                                  ((o =
                                      document.createElement(
                                          "script"
                                      )).charset = "utf-8"),
                                  (o.timeout = 120),
                                  c.nc && o.setAttribute("nonce", c.nc),
                                  (o.src =
                                      c.p +
                                      "js/" +
                                      ({
                                          0: "moment~timeline",
                                          2: "dm_button",
                                          3: "button",
                                          4: "moment",
                                          5: "periscope_on_air",
                                          6: "horizon_timeline",
                                          7: "timeline",
                                          8: "horizon_tweet",
                                      }[i] || i) +
                                      "." +
                                      {
                                          0: "55634fd8bf871f86dbe537f50a41349e",
                                          2: "04d577fcfb912e682f1ef0ea81744bf4",
                                          3: "e878ad6ba18f0bdda53d6861059b0edd",
                                          4: "8cf50f136d79aa0129855e03dbd74325",
                                          5: "252634a32441cd82d94f197952dbf22d",
                                          6: "33cdaa241985c03f65cf182d194458eb",
                                          7: "2002b66aa236ee3e1e6728119a7c4b98",
                                          8: "c9df2d9b929da727d1e2e137e0482378",
                                      }[i] +
                                      ".js"),
                                  (t = function (t) {
                                      (o.onerror = o.onload = null),
                                          clearTimeout(s);
                                      var e,
                                          n,
                                          r = u[i];
                                      0 !== r &&
                                          (r &&
                                              ((e =
                                                  t &&
                                                  ("load" === t.type
                                                      ? "missing"
                                                      : t.type)),
                                              (n =
                                                  t &&
                                                  t.target &&
                                                  t.target.src),
                                              ((t = new Error(
                                                  "Loading chunk " +
                                                      i +
                                                      " failed.\n(" +
                                                      e +
                                                      ": " +
                                                      n +
                                                      ")"
                                              )).type = e),
                                              (t.request = n),
                                              r[1](t)),
                                          (u[i] = void 0));
                                  }),
                                  (s = setTimeout(function () {
                                      t({ type: "timeout", target: o });
                                  }, 12e4)),
                                  (o.onerror = o.onload = t),
                                  e.appendChild(o))),
                        Promise.all(n)
                    );
                }),
                    (c.m = a),
                    (c.c = n),
                    (c.d = function (t, e, n) {
                        c.o(t, e) ||
                            Object.defineProperty(t, e, {
                                enumerable: !0,
                                get: n,
                            });
                    }),
                    (c.r = function (t) {
                        "undefined" != typeof Symbol &&
                            Symbol.toStringTag &&
                            Object.defineProperty(t, Symbol.toStringTag, {
                                value: "Module",
                            }),
                            Object.defineProperty(t, "__esModule", {
                                value: !0,
                            });
                    }),
                    (c.t = function (e, t) {
                        if ((1 & t && (e = c(e)), 8 & t)) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var n = Object.create(null);
                        if (
                            (c.r(n),
                            Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e,
                            }),
                            2 & t && "string" != typeof e)
                        )
                            for (var r in e)
                                c.d(
                                    n,
                                    r,
                                    function (t) {
                                        return e[t];
                                    }.bind(null, r)
                                );
                        return n;
                    }),
                    (c.n = function (t) {
                        var e =
                            t && t.__esModule
                                ? function () {
                                      return t.default;
                                  }
                                : function () {
                                      return t;
                                  };
                        return c.d(e, "a", e), e;
                    }),
                    (c.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e);
                    }),
                    (c.p = "https://platform.twitter.com/"),
                    (c.oe = function (t) {
                        throw (console.error(t), t);
                    });
                var e = (window.__twttrll = window.__twttrll || []),
                    r = e.push.bind(e);
                (e.push = t), (e = e.slice());
                for (var i = 0; i < e.length; i++) t(e[i]);
                var d = r;
                c((c.s = 92));
            })([
                function (t, e, n) {
                    var r = n(1);
                    function i(t, e) {
                        for (var n in t)
                            (t.hasOwnProperty && !t.hasOwnProperty(n)) ||
                                e(n, t[n]);
                        return t;
                    }
                    function o(t) {
                        return {}.toString
                            .call(t)
                            .match(/\s([a-zA-Z]+)/)[1]
                            .toLowerCase();
                    }
                    function s(t) {
                        return t === Object(t);
                    }
                    function a(t) {
                        if (!s(t)) return !1;
                        if (Object.keys) return !Object.keys(t).length;
                        for (var e in t) if (t.hasOwnProperty(e)) return !1;
                        return !0;
                    }
                    function u(t) {
                        return t ? Array.prototype.slice.call(t) : [];
                    }
                    t.exports = {
                        aug: function (n) {
                            return (
                                u(arguments)
                                    .slice(1)
                                    .forEach(function (t) {
                                        i(t, function (t, e) {
                                            n[t] = e;
                                        });
                                    }),
                                n
                            );
                        },
                        async: function (t, e) {
                            r.setTimeout(function () {
                                t.call(e || null);
                            }, 0);
                        },
                        compact: function n(r) {
                            return (
                                i(r, function (t, e) {
                                    s(e) && (n(e), a(e) && delete r[t]),
                                        (null != e && "" !== e) || delete r[t];
                                }),
                                r
                            );
                        },
                        contains: function (t, e) {
                            return !(!t || !t.indexOf) && -1 < t.indexOf(e);
                        },
                        forIn: i,
                        isObject: s,
                        isEmptyObject: a,
                        toType: o,
                        isType: function (t, e) {
                            return t == o(e);
                        },
                        toRealArray: u,
                    };
                },
                function (t, e) {
                    t.exports = window;
                },
                function (t, e, n) {
                    var r = n(6);
                    t.exports = function () {
                        var n = this;
                        this.promise = new r(function (t, e) {
                            (n.resolve = t), (n.reject = e);
                        });
                    };
                },
                function (t, e, n) {
                    var r = n(11),
                        i =
                            /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
                        o =
                            /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
                        s = /^http(s?):\/\/(\w+\.)*twitter\.com([:/]|$)/i,
                        a = /^http(s?):\/\/(ton|pbs)\.twimg\.com/,
                        u = /^#?([^.,<>!\s/#\-()'"]+)$/,
                        c = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
                        d =
                            /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
                        l =
                            /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
                        f =
                            /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
                        h =
                            /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-%]+)/i,
                        p =
                            /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,
                        m = /^https?:\/\/syndication\.twitter\.com\/settings/i,
                        v =
                            /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i,
                        g =
                            /^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;
                    function w(t) {
                        return (
                            "string" == typeof t &&
                            i.test(t) &&
                            RegExp.$1.length <= 20
                        );
                    }
                    function y(t) {
                        if (w(t)) return RegExp.$1;
                    }
                    function b(t, e) {
                        var n = r.decodeURL(t);
                        if (
                            ((e = e || !1),
                            (n.screen_name = y(t)),
                            n.screen_name)
                        )
                            return r.url(
                                "https://twitter.com/intent/" +
                                    (e ? "follow" : "user"),
                                n
                            );
                    }
                    function _(t) {
                        return "string" == typeof t && u.test(t);
                    }
                    function E(t) {
                        return "string" == typeof t && o.test(t);
                    }
                    t.exports = {
                        isHashTag: _,
                        hashTag: function (t, e) {
                            if (((e = void 0 === e || e), _(t)))
                                return (e ? "#" : "") + RegExp.$1;
                        },
                        isScreenName: w,
                        screenName: y,
                        isStatus: E,
                        status: function (t) {
                            return E(t) && RegExp.$1;
                        },
                        intentForProfileURL: b,
                        intentForFollowURL: function (t) {
                            return b(t, !0);
                        },
                        isTwitterURL: function (t) {
                            return s.test(t);
                        },
                        isTwimgURL: function (t) {
                            return a.test(t);
                        },
                        isIntentURL: function (t) {
                            return c.test(t);
                        },
                        isSettingsURL: function (t) {
                            return m.test(t);
                        },
                        isWidgetIframeURL: function (t) {
                            return v.test(t);
                        },
                        isSearchUrl: function (t) {
                            return g.test(t);
                        },
                        regexen: { profile: i },
                        momentId: function (t) {
                            return l.test(t) && RegExp.$1;
                        },
                        collectionId: function (t) {
                            return d.test(t) && RegExp.$1;
                        },
                        intentType: function (t) {
                            return c.test(t) && RegExp.$1;
                        },
                        likesScreenName: function (t) {
                            return f.test(t) && RegExp.$1;
                        },
                        listScreenNameAndSlug: function (t) {
                            var e, n, r;
                            if (h.test(t)) {
                                (e = RegExp.$1), (n = RegExp.$2);
                                try {
                                    r = decodeURIComponent(n);
                                } catch (t) {}
                                return { ownerScreenName: e, slug: r || n };
                            }
                            return !1;
                        },
                        eventId: function (t) {
                            return p.test(t) && RegExp.$1;
                        },
                    };
                },
                function (t, e) {
                    t.exports = document;
                },
                function (t, e, n) {
                    var r = n(0),
                        i = [
                            !0,
                            1,
                            "1",
                            "on",
                            "ON",
                            "true",
                            "TRUE",
                            "yes",
                            "YES",
                        ],
                        o = [
                            !1,
                            0,
                            "0",
                            "off",
                            "OFF",
                            "false",
                            "FALSE",
                            "no",
                            "NO",
                        ];
                    function s(t) {
                        return null != t && "" !== t;
                    }
                    function a(t) {
                        return c(t) && t % 1 == 0;
                    }
                    function u(t) {
                        return c(t) && !a(t);
                    }
                    function c(t) {
                        return s(t) && !isNaN(t);
                    }
                    function d(t) {
                        return r.contains(o, t);
                    }
                    function l(t) {
                        return r.contains(i, t);
                    }
                    t.exports = {
                        hasValue: s,
                        isInt: a,
                        isFloat: u,
                        isNumber: c,
                        isString: function (t) {
                            return "string" === r.toType(t);
                        },
                        isArray: function (t) {
                            return s(t) && "array" == r.toType(t);
                        },
                        isTruthValue: l,
                        isFalseValue: d,
                        asInt: function (t) {
                            if (a(t)) return parseInt(t, 10);
                        },
                        asFloat: function (t) {
                            if (u(t)) return t;
                        },
                        asNumber: function (t) {
                            if (c(t)) return t;
                        },
                        asBoolean: function (t) {
                            return !(!s(t) || (!l(t) && (d(t) || !t)));
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(1),
                        i = n(21),
                        n = n(50);
                    i.hasPromiseSupport() || (r.Promise = n),
                        (t.exports = r.Promise);
                },
                function (t, e, n) {
                    var i = n(0);
                    t.exports = function (e, n) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function () {
                            var t = i.toRealArray(arguments);
                            return e.apply(n, r.concat(t));
                        };
                    };
                },
                function (t, e, n) {
                    n = n(52);
                    t.exports = new n("__twttr");
                },
                function (t, e) {
                    t.exports = location;
                },
                function (t, e, n) {
                    var r = n(0),
                        i = /\b([\w-_]+)\b/g;
                    function o(t) {
                        return new RegExp("\\b" + t + "\\b", "g");
                    }
                    function s(t, e) {
                        t.classList
                            ? t.classList.add(e)
                            : o(e).test(t.className) ||
                              (t.className += " " + e);
                    }
                    function a(t, e) {
                        t.classList
                            ? t.classList.remove(e)
                            : (t.className = t.className.replace(o(e), " "));
                    }
                    function u(t, e) {
                        return t.classList
                            ? t.classList.contains(e)
                            : r.contains(c(t), e);
                    }
                    function c(t) {
                        return r.toRealArray(
                            t.classList || t.className.match(i)
                        );
                    }
                    t.exports = {
                        add: s,
                        remove: a,
                        replace: function (t, e, n) {
                            if (t.classList && u(t, e))
                                return a(t, e), void s(t, n);
                            t.className = t.className.replace(o(e), n);
                        },
                        toggle: function (t, e, n) {
                            return void 0 === n &&
                                t.classList &&
                                t.classList.toggle
                                ? t.classList.toggle(e, n)
                                : ((n ? s : a)(t, e), n);
                        },
                        present: u,
                        list: c,
                    };
                },
                function (t, e, n) {
                    var i = n(5),
                        o = n(0);
                    function s(t) {
                        return encodeURIComponent(t)
                            .replace(/\+/g, "%2B")
                            .replace(/'/g, "%27");
                    }
                    function a(t) {
                        return decodeURIComponent(t);
                    }
                    function r(t) {
                        var r = [];
                        return (
                            o.forIn(t, function (t, e) {
                                var n = s(t);
                                o.isType("array", e) || (e = [e]),
                                    e.forEach(function (t) {
                                        i.hasValue(t) && r.push(n + "=" + s(t));
                                    });
                            }),
                            r.sort().join("&")
                        );
                    }
                    function u(t) {
                        var r = {};
                        return t
                            ? (t.split("&").forEach(function (t) {
                                  var e = t.split("="),
                                      n = a(e[0]),
                                      t = a(e[1]);
                                  if (2 == e.length) {
                                      if (!o.isType("array", r[n]))
                                          return n in r
                                              ? ((r[n] = [r[n]]),
                                                void r[n].push(t))
                                              : void (r[n] = t);
                                      r[n].push(t);
                                  }
                              }),
                              r)
                            : {};
                    }
                    t.exports = {
                        url: function (t, e) {
                            return 0 < r(e).length
                                ? o.contains(t, "?")
                                    ? t + "&" + r(e)
                                    : t + "?" + r(e)
                                : t;
                        },
                        decodeURL: function (t) {
                            t = t && t.split("?");
                            return 2 == t.length ? u(t[1]) : {};
                        },
                        decode: u,
                        encode: r,
                        encodePart: s,
                        decodePart: a,
                    };
                },
                function (t, e, n) {
                    var r = n(9),
                        i = n(1),
                        o = n(0),
                        s = {},
                        a = o.contains(r.href, "tw_debug=true");
                    function u() {
                        return (
                            (i.performance && +i.performance.now()) ||
                            +new Date()
                        );
                    }
                    function c(t, e) {
                        if (i.console && i.console[t])
                            switch (e.length) {
                                case 1:
                                    i.console[t](e[0]);
                                    break;
                                case 2:
                                    i.console[t](e[0], e[1]);
                                    break;
                                case 3:
                                    i.console[t](e[0], e[1], e[2]);
                                    break;
                                case 4:
                                    i.console[t](e[0], e[1], e[2], e[3]);
                                    break;
                                case 5:
                                    i.console[t](e[0], e[1], e[2], e[3], e[4]);
                                    break;
                                default:
                                    0 !== e.length &&
                                        i.console.warn &&
                                        i.console.warn(
                                            "too many params passed to logger." +
                                                t
                                        );
                            }
                    }
                    t.exports = {
                        devError: function () {},
                        devInfo: function () {},
                        devObject: function (t, e) {},
                        publicError: function () {
                            c("error", o.toRealArray(arguments));
                        },
                        publicLog: function () {
                            c("info", o.toRealArray(arguments));
                        },
                        publicWarn: function () {
                            c("warn", o.toRealArray(arguments));
                        },
                        time: function (t) {
                            a && (s[t] = u());
                        },
                        timeEnd: function (t) {
                            a && s[t] && (u(), s[t]);
                        },
                    };
                },
                function (t, e, n) {
                    var i = n(19),
                        o = n(5),
                        s = n(11),
                        a = n(0),
                        u = n(116);
                    t.exports = function (t) {
                        var e = t.href && t.href.split("?")[1],
                            r = e ? s.decode(e) : {},
                            e = {
                                lang: u(t),
                                width:
                                    t.getAttribute("data-width") ||
                                    t.getAttribute("width"),
                                height:
                                    t.getAttribute("data-height") ||
                                    t.getAttribute("height"),
                                related: t.getAttribute("data-related"),
                                partner: t.getAttribute("data-partner"),
                            };
                        return (
                            o.asBoolean(t.getAttribute("data-dnt")) &&
                                i.setOn(),
                            a.forIn(e, function (t, e) {
                                var n = r[t];
                                r[t] = o.hasValue(n) ? n : e;
                            }),
                            a.compact(r)
                        );
                    };
                },
                function (t, e, n) {
                    var r = n(78),
                        i = n(22);
                    t.exports = function () {
                        var n = "data-twitter-extracted-" + i.generate();
                        return function (t, e) {
                            return r(t, e)
                                .filter(function (t) {
                                    return !t.hasAttribute(n);
                                })
                                .map(function (t) {
                                    return t.setAttribute(n, "true"), t;
                                });
                        };
                    };
                },
                function (t, e) {
                    function n(t, e, n, r, i, o, s) {
                        (this.factory = t),
                            (this.Sandbox = e),
                            (this.srcEl = o),
                            (this.targetEl = i),
                            (this.parameters = r),
                            (this.className = n),
                            (this.options = s);
                    }
                    (n.prototype.destroy = function () {
                        this.srcEl = this.targetEl = null;
                    }),
                        (t.exports = n);
                },
                function (t, e) {
                    t.exports = {
                        DM_BUTTON: "twitter-dm-button",
                        FOLLOW_BUTTON: "twitter-follow-button",
                        HASHTAG_BUTTON: "twitter-hashtag-button",
                        MENTION_BUTTON: "twitter-mention-button",
                        MOMENT: "twitter-moment",
                        PERISCOPE: "periscope-on-air",
                        SHARE_BUTTON: "twitter-share-button",
                        TIMELINE: "twitter-timeline",
                        TWEET: "twitter-tweet",
                    };
                },
                function (t, e, n) {
                    var c = n(6),
                        d = n(19),
                        l = n(54),
                        f = n(31),
                        h = n(5),
                        p = n(0);
                    t.exports = function (o, s, a) {
                        var u;
                        return (
                            (s = s || {}),
                            (u =
                                "ƒ(" +
                                (o = o || []).join(", ") +
                                ", target, [options]);"),
                            function () {
                                var e,
                                    n,
                                    r,
                                    i = Array.prototype.slice.apply(arguments, [
                                        0,
                                        o.length,
                                    ]),
                                    t = Array.prototype.slice.apply(arguments, [
                                        o.length,
                                    ]);
                                return (
                                    t.forEach(function (t) {
                                        t &&
                                            (t.nodeType !== Node.ELEMENT_NODE
                                                ? p.isType("function", t)
                                                    ? (e = t)
                                                    : p.isType("object", t) &&
                                                      (n = t)
                                                : (r = t));
                                    }),
                                    i.length !== o.length || 0 === t.length
                                        ? (e &&
                                              p.async(function () {
                                                  e(!1);
                                              }),
                                          c.reject(
                                              new Error(
                                                  "Not enough parameters. Expected: " +
                                                      u
                                              )
                                          ))
                                        : r
                                        ? ((n = p.aug({}, n || {}, s)),
                                          o.forEach(function (t) {
                                              n[t] = i.shift();
                                          }),
                                          h.asBoolean(n.dnt) && d.setOn(),
                                          (t = f
                                              .getExperiments()
                                              .then(function (t) {
                                                  return l.addWidget(
                                                      a(n, r, void 0, t)
                                                  );
                                              })),
                                          e &&
                                              t.then(e, function () {
                                                  e(!1);
                                              }),
                                          t)
                                        : (e &&
                                              p.async(function () {
                                                  e(!1);
                                              }),
                                          c.reject(
                                              new Error(
                                                  "No target element specified. Expected: " +
                                                      u
                                              )
                                          ))
                                );
                            }
                        );
                    };
                },
                function (t, e, n) {
                    var i = n(99),
                        o = n(2),
                        s = n(0);
                    function a(t, e) {
                        return function () {
                            try {
                                e.resolve(t.call(this));
                            } catch (t) {
                                e.reject(t);
                            }
                        };
                    }
                    t.exports = {
                        sync: function (t, e) {
                            t.call(e);
                        },
                        read: function (t, e) {
                            var n = new o();
                            return i.read(a(t, n), e), n.promise;
                        },
                        write: function (t, e) {
                            var n = new o();
                            return i.write(a(t, n), e), n.promise;
                        },
                        defer: function (t, e, n) {
                            var r = new o();
                            return (
                                s.isType("function", t) &&
                                    ((n = e), (e = t), (t = 1)),
                                i.defer(t, a(e, r), n),
                                r.promise
                            );
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(4),
                        i = n(9),
                        o = n(39),
                        s = n(103),
                        a = n(5),
                        u = n(34),
                        c = !1,
                        d = /https?:\/\/([^/]+).*/i;
                    t.exports = {
                        setOn: function () {
                            c = !0;
                        },
                        enabled: function (t, e) {
                            return !!(
                                c ||
                                a.asBoolean(u.val("dnt")) ||
                                s.isUrlSensitive(e || i.host) ||
                                (o.isFramed() &&
                                    s.isUrlSensitive(
                                        o.rootDocumentLocation()
                                    )) ||
                                ((t = d.test(t || r.referrer) && RegExp.$1) &&
                                    s.isUrlSensitive(t))
                            );
                        },
                    };
                },
                function (t, e, n) {
                    function r(t, e) {
                        return t.some(function (t) {
                            return t instanceof RegExp ? t.test(e) : t === e;
                        });
                    }
                    function i() {
                        var t = s.get("backendHost");
                        return t && r(c, t)
                            ? t
                            : "https://cdn.syndication.twimg.com";
                    }
                    function o() {
                        var t = s.get("settingsSvcHost");
                        return t && r(d, t) ? t : u;
                    }
                    var s = n(8),
                        a = n(37),
                        u = "https://syndication.twitter.com",
                        c = [
                            "https://syndication.twitter.com",
                            "https://cdn.syndication.twimg.com",
                            "https://localhost.twitter.com:8444",
                        ],
                        d = [
                            "https://syndication.twitter.com",
                            "https://localhost.twitter.com:8445",
                        ],
                        l = [
                            "https://platform.twitter.com",
                            "https://localhost.twitter.com",
                            /^https:\/\/ton\.smf1\.twitter\.com\/syndication-internal\/embed-iframe\/[0-9A-Za-z_-]+\/app/,
                        ];
                    function f(t, e) {
                        var r = [t];
                        return (
                            e.forEach(function (t) {
                                var e, n;
                                r.push(
                                    ((e = (t || "").toString()),
                                    (n = "/" === e.slice(0, 1) ? 1 : 0),
                                    (t = "/" === e.slice(-1) ? -1 : void 0),
                                    e.slice(n, t))
                                );
                            }),
                            r.join("/")
                        );
                    }
                    t.exports = {
                        cookieConsent: function (t) {
                            t = t || [];
                            return t.unshift("cookie/consent"), f(o(), t);
                        },
                        embedIframe: function (t, e) {
                            var n = t || [],
                                t = s.get("embedIframeURL");
                            return t && r(l, t)
                                ? f(t, n) + ".html"
                                : (n.unshift(a.getBaseURLPath(e)),
                                  f("https://platform.twitter.com", n) +
                                      ".html");
                        },
                        embedService: function (t) {
                            t = t || [];
                            return (
                                t.unshift("srv"),
                                f("https://syndication.twitter.com", t)
                            );
                        },
                        eventVideo: function (t) {
                            t = t || [];
                            return t.unshift("video/event"), f(i(), t);
                        },
                        grid: function (t) {
                            t = t || [];
                            return t.unshift("grid/collection"), f(i(), t);
                        },
                        moment: function (t) {
                            t = t || [];
                            return t.unshift("moments"), f(i(), t);
                        },
                        settings: function (t) {
                            t = t || [];
                            return t.unshift("settings"), f(o(), t);
                        },
                        timeline: function (t) {
                            t = t || [];
                            return t.unshift("timeline"), f(i(), t);
                        },
                        tweetBatch: function (t) {
                            t = t || [];
                            return t.unshift("tweets.json"), f(i(), t);
                        },
                        video: function (t) {
                            t = t || [];
                            return t.unshift("widgets/video"), f(i(), t);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(4),
                        i = n(93),
                        o = n(1),
                        s = n(0),
                        a = i.userAgent;
                    function u(t) {
                        return /(Trident|MSIE|Edge[/ ]?\d)/.test((t = t || a));
                    }
                    t.exports = {
                        retina: function (t) {
                            return (t = t || o).devicePixelRatio
                                ? 1.5 <= t.devicePixelRatio
                                : !!t.matchMedia &&
                                      t.matchMedia(
                                          "only screen and (min-resolution: 144dpi)"
                                      ).matches;
                        },
                        anyIE: u,
                        ie9: function (t) {
                            return /MSIE 9/.test((t = t || a));
                        },
                        ie10: function (t) {
                            return /MSIE 10/.test((t = t || a));
                        },
                        ios: function (t) {
                            return /(iPad|iPhone|iPod)/.test((t = t || a));
                        },
                        android: function (t) {
                            return /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(
                                (t = t || a)
                            );
                        },
                        canPostMessage: function (t, e) {
                            return (
                                (e = e || a),
                                (t = t || o).postMessage && !(u(e) && t.opener)
                            );
                        },
                        touch: function (t, e, n) {
                            return (
                                (e = e || i),
                                (n = n || a),
                                "ontouchstart" in (t = t || o) ||
                                    /Opera Mini/.test(n) ||
                                    0 < e.msMaxTouchPoints
                            );
                        },
                        cssTransitions: function () {
                            var t = r.body.style;
                            return (
                                void 0 !== t.transition ||
                                void 0 !== t.webkitTransition ||
                                void 0 !== t.mozTransition ||
                                void 0 !== t.oTransition ||
                                void 0 !== t.msTransition
                            );
                        },
                        hasPromiseSupport: function () {
                            return !!(
                                o.Promise &&
                                o.Promise.resolve &&
                                o.Promise.reject &&
                                o.Promise.all &&
                                o.Promise.race &&
                                (new o.Promise(function (t) {
                                    e = t;
                                }),
                                s.isType("function", e))
                            );
                            var e;
                        },
                        hasIntersectionObserverSupport: function () {
                            return !!o.IntersectionObserver;
                        },
                        hasPerformanceInformation: function () {
                            return (
                                o.performance && o.performance.getEntriesByType
                            );
                        },
                    };
                },
                function (t, e) {
                    var n = 0,
                        r = 0;
                    t.exports = {
                        generate: function () {
                            return (
                                "i" +
                                String(+new Date()) +
                                Math.floor(1e5 * Math.random()) +
                                n++
                            );
                        },
                        deterministic: function () {
                            return "i" + String(r++);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(51),
                        i = n(53),
                        n = n(0);
                    t.exports = n.aug(r.get("events") || {}, i.Emitter);
                },
                function (t, e, n) {
                    var r = n(6),
                        i = n(2);
                    function o(t, e) {
                        return t.then(e, e);
                    }
                    function u(t) {
                        return t instanceof r;
                    }
                    t.exports = {
                        always: o,
                        allResolved: function (s) {
                            var a;
                            return void 0 === s
                                ? r.reject(
                                      new Error("undefined is not an object")
                                  )
                                : Array.isArray(s)
                                ? (a = s.length)
                                    ? new r(function (t, e) {
                                          var n = 0,
                                              r = [];
                                          function i() {
                                              (n += 1) === a &&
                                                  (0 === r.length ? e() : t(r));
                                          }
                                          function o(t) {
                                              r.push(t), i();
                                          }
                                          s.forEach(function (t) {
                                              u(t) ? t.then(o, i) : o(t);
                                          });
                                      })
                                    : r.resolve([])
                                : r.reject(new Error("Type error"));
                        },
                        some: function (i) {
                            var t = (i = i || []).length;
                            return (
                                (i = i.filter(u)),
                                t
                                    ? t !== i.length
                                        ? r.reject(
                                              "non-Promise passed to .some"
                                          )
                                        : new r(function (e, t) {
                                              var n = 0;
                                              function r() {
                                                  (n += 1) === i.length && t();
                                              }
                                              i.forEach(function (t) {
                                                  t.then(e, r);
                                              });
                                          })
                                    : r.reject("no promises passed to .some")
                            );
                        },
                        isPromise: u,
                        allSettled: function (t) {
                            function e() {}
                            return r.all(
                                (t || []).map(function (t) {
                                    return o(t, e);
                                })
                            );
                        },
                        timeout: function (t, e) {
                            var n = new i();
                            return (
                                setTimeout(function () {
                                    n.reject(new Error("Promise timed out"));
                                }, e),
                                t.then(
                                    function (t) {
                                        n.resolve(t);
                                    },
                                    function (t) {
                                        n.reject(t);
                                    }
                                ),
                                n.promise
                            );
                        },
                    };
                },
                function (t, e, n) {
                    n = n(1).JSON;
                    t.exports = {
                        stringify: n.stringify || n.encode,
                        parse: n.parse || n.decode,
                    };
                },
                function (t, e, n) {
                    var r = n(27),
                        n = n(109);
                    t.exports = r.build([n]);
                },
                function (t, e, n) {
                    var r = n(40),
                        i = n(106),
                        n = n(7);
                    ((r = Object.create(r)).build = n(r.build, null, i)),
                        (t.exports = r);
                },
                function (t, e, n) {
                    var r = n(40),
                        i = n(41),
                        n = n(7);
                    ((r = Object.create(r)).build = n(r.build, null, i)),
                        (t.exports = r);
                },
                function (t, e, n) {
                    var r = n(80),
                        i = n(81),
                        o = n(82),
                        s = n(9),
                        a = n(72),
                        u = n(83),
                        c = n(19),
                        d = n(5),
                        l = n(22),
                        f = n(0);
                    function h(t) {
                        if (!t || !t.headers)
                            throw new Error("unexpected response schema");
                        return {
                            html: t.body,
                            config: t.config,
                            pollInterval:
                                1e3 * parseInt(t.headers.xPolling, 10) || null,
                            maxCursorPosition: t.headers.maxPosition,
                            minCursorPosition: t.headers.minPosition,
                        };
                    }
                    function p(t) {
                        if (t && t.headers) throw new Error(t.headers.status);
                        throw t instanceof Error ? t : new Error(t);
                    }
                    t.exports = function (t) {
                        t.params({
                            chrome: {},
                            height: { transform: d.asInt },
                            instanceId: {
                                required: !0,
                                fallback: l.deterministic,
                            },
                            isPreconfigured: {},
                            lang: {
                                required: !0,
                                transform: a.matchLanguage,
                                fallback: "en",
                            },
                            theme: {},
                            tweetLimit: { transform: d.asInt },
                        }),
                            t.defineProperty("endpoint", {
                                get: function () {
                                    throw new Error("endpoint not specified");
                                },
                            }),
                            t.defineProperty("pollEndpoint", {
                                get: function () {
                                    return this.endpoint;
                                },
                            }),
                            t.define("cbId", function (t) {
                                t = t ? "_new" : "_old";
                                return (
                                    "tl_" +
                                    this.params.instanceId +
                                    "_" +
                                    this.id +
                                    t
                                );
                            }),
                            t.define("queryParams", function () {
                                return {
                                    lang: this.params.lang,
                                    tz: u.getTimezoneOffset(),
                                    t: r(),
                                    domain: s.host,
                                    tweet_limit: this.params.tweetLimit,
                                    dnt: c.enabled(),
                                };
                            }),
                            t.define("horizonQueryParams", function () {
                                var t = this.params.height,
                                    e =
                                        -1 ===
                                        (this.params.chrome || "").indexOf(
                                            "noheader"
                                        );
                                return (
                                    this.params.isPreconfigured &&
                                        !this.params.height &&
                                        (t = 600),
                                    f.compact({
                                        dnt: c.enabled(),
                                        limit: this.params.tweetLimit,
                                        lang: this.params.lang,
                                        theme: this.params.theme,
                                        maxHeight: t,
                                        showHeader: e,
                                    })
                                );
                            }),
                            t.define("fetch", function () {
                                return i
                                    .fetch(
                                        this.endpoint,
                                        this.queryParams(),
                                        o,
                                        this.cbId()
                                    )
                                    .then(h, p);
                            }),
                            t.define("poll", function (t, e) {
                                var t = {
                                        since_id: (t = t || {}).sinceId,
                                        max_id: t.maxId,
                                        min_position: t.minPosition,
                                        max_position: t.maxPosition,
                                    },
                                    t = f.aug(this.queryParams(), t);
                                return i
                                    .fetch(
                                        this.pollEndpoint,
                                        t,
                                        o,
                                        this.cbId(e)
                                    )
                                    .then(h, p);
                            });
                    };
                },
                function (t, e, n) {
                    n = n(53).makeEmitter();
                    t.exports = {
                        emitter: n,
                        START: "start",
                        ALL_WIDGETS_RENDER_START: "all_widgets_render_start",
                        ALL_WIDGETS_RENDER_END: "all_widgets_render_end",
                        ALL_WIDGETS_AND_IMAGES_LOADED:
                            "all_widgets_and_images_loaded",
                    };
                },
                function (t, e, n) {
                    var r = n(112),
                        i = n(25),
                        o = n(1);
                    function s(t) {
                        var e;
                        if (!t) return "";
                        try {
                            return (e = i.stringify(t)), o.btoa(e);
                        } catch (t) {
                            return "";
                        }
                    }
                    function a(e) {
                        return r.settingsLoaded().then(function (t) {
                            return t[e];
                        });
                    }
                    function u() {
                        return a("features");
                    }
                    t.exports = {
                        encodeFeatures: s,
                        shouldObtainCookieConsent: function () {
                            return a("shouldObtainCookieConsent");
                        },
                        getExperiments: u,
                        getExperiment: function (e) {
                            return u().then(function (t) {
                                if (!t[e])
                                    throw new Error("Experiment not found");
                                return t[e];
                            });
                        },
                        getHorizonSettings: function () {
                            return r.settingsLoaded().then(function (t) {
                                return {
                                    features: t.features,
                                    sessionId: t.sessionId,
                                };
                            });
                        },
                        getActiveExperimentDataString: function () {
                            return u().then(s);
                        },
                        getExperimentKeys: function () {
                            return u().then(function (t) {
                                return Object.keys(t);
                            });
                        },
                        load: function () {
                            r.load();
                        },
                    };
                },
                function (t, e, n) {
                    var i = n(4),
                        o = n(0);
                    t.exports = function (t, e, n) {
                        var r;
                        if (((n = n || i), (e = e || {}), (t = t || {}).name)) {
                            try {
                                r = n.createElement(
                                    '<iframe name="' + t.name + '"></iframe>'
                                );
                            } catch (e) {
                                (r = n.createElement("iframe")).name = t.name;
                            }
                            delete t.name;
                        } else r = n.createElement("iframe");
                        return (
                            t.id && ((r.id = t.id), delete t.id),
                            (r.allowtransparency = "true"),
                            (r.scrolling = "no"),
                            r.setAttribute("frameBorder", 0),
                            r.setAttribute("allowTransparency", !0),
                            o.forIn(t, function (t, e) {
                                r.setAttribute(t, e);
                            }),
                            o.forIn(e, function (t, e) {
                                r.style[t] = e;
                            }),
                            r
                        );
                    };
                },
                function (t, e, n) {
                    var r = n(27),
                        n = n(123);
                    t.exports = r.build([n]);
                },
                function (t, e, n) {
                    var o,
                        s = n(4);
                    function r(t) {
                        var e,
                            n,
                            r,
                            i = 0;
                        for (
                            o = {},
                                e = (t = t || s).getElementsByTagName("meta");
                            e[i];
                            i++
                        ) {
                            if (
                                ((n = e[i]),
                                /^twitter:/.test(n.getAttribute("name")))
                            )
                                r = n
                                    .getAttribute("name")
                                    .replace(/^twitter:/, "");
                            else {
                                if (
                                    !/^twitter:/.test(
                                        n.getAttribute("property")
                                    )
                                )
                                    continue;
                                r = n
                                    .getAttribute("property")
                                    .replace(/^twitter:/, "");
                            }
                            o[r] =
                                n.getAttribute("content") ||
                                n.getAttribute("value");
                        }
                    }
                    r(),
                        (t.exports = {
                            init: r,
                            val: function (t) {
                                return o[t];
                            },
                        });
                },
                function (t, e, n) {
                    var o = n(0),
                        s = n(46);
                    t.exports = {
                        closest: function t(e, n, r) {
                            var i;
                            if (n)
                                return (
                                    (r = r || (n && n.ownerDocument)),
                                    (e = o.isType("function", e)
                                        ? e
                                        : ((i = e),
                                          function (t) {
                                              return !!t.tagName && s(t, i);
                                          })),
                                    n === r
                                        ? e(n)
                                            ? n
                                            : void 0
                                        : e(n)
                                        ? n
                                        : t(e, n.parentNode, r)
                                );
                        },
                    };
                },
                function (t, e, n) {
                    var a = n(10),
                        f = {},
                        r = -1,
                        h = {};
                    function p(t) {
                        return (
                            t.getAttribute("data-twitter-event-id") ||
                            (t.setAttribute("data-twitter-event-id", ++r), r)
                        );
                    }
                    function m(t, e, n) {
                        for (
                            var r = n || t.target || t.srcElement,
                                i = a
                                    .list(r)
                                    .map(function (t) {
                                        return "." + t;
                                    })
                                    .concat(r.tagName),
                                o = 0,
                                s = i.length;
                            o < s;
                            o++
                        )
                            if (
                                !1 ===
                                (function (t, e, n) {
                                    for (
                                        var r = 0,
                                            i = (t && t.length) || 0,
                                            r = 0;
                                        r < i;
                                        r++
                                    )
                                        if (
                                            (t[r].call(e, n, e),
                                            n.ceaseImmediately)
                                        )
                                            return !1;
                                })(e[i[o]], r, t)
                            )
                                return;
                        t.cease ||
                            (r !== this &&
                                m.call(
                                    this,
                                    t,
                                    e,
                                    r.parentElement || r.parentNode
                                ));
                    }
                    function i(t) {
                        t && t.preventDefault
                            ? t.preventDefault()
                            : (t.returnValue = !1);
                    }
                    function o(t) {
                        t && (t.cease = !0) && t.stopPropagation
                            ? t.stopPropagation()
                            : (t.cancelBubble = !0);
                    }
                    t.exports = {
                        stop: function (t) {
                            return o(t), i(t), !1;
                        },
                        stopPropagation: o,
                        stopImmediatePropagation: function (t) {
                            t &&
                                ((t.ceaseImmediately = !0),
                                o(t),
                                t.stopImmediatePropagation());
                        },
                        preventDefault: i,
                        delegate: function (t, e, n, r) {
                            var i,
                                o,
                                s,
                                a,
                                u,
                                c,
                                d = p(t);
                            function l(t) {
                                m.call(i, t, s[o]);
                            }
                            (f[d] = f[d] || {}),
                                f[d][e] ||
                                    ((f[d][e] = {}),
                                    (i = t),
                                    (o = e),
                                    (s = f[d]),
                                    (u = l),
                                    (c = o),
                                    (t = a = d),
                                    (a = i).id &&
                                        ((h[a.id] = h[a.id] || []),
                                        h[a.id].push({
                                            el: a,
                                            listener: u,
                                            type: c,
                                            rootId: t,
                                        })),
                                    i.addEventListener(o, l, !1)),
                                (f[d][e][n] = f[d][e][n] || []),
                                f[d][e][n].push(r);
                        },
                        simulate: function (t, e, n) {
                            var r = p(e),
                                r = f[r] && f[r];
                            m.call(e, { target: n }, r[t]);
                        },
                        removeDelegatesForWidget: function (t) {
                            var e = h[t];
                            e &&
                                (e.forEach(function (t) {
                                    t.el.removeEventListener(
                                        t.type,
                                        t.listener,
                                        !1
                                    ),
                                        delete f[t.rootId];
                                }),
                                delete h[t]);
                        },
                    };
                },
                function (t, e) {
                    var r = "tfw_horizon_timeline_12034";
                    function i(t) {
                        return "profile" === t || "list" === t;
                    }
                    function o(t) {
                        return "en" === t;
                    }
                    t.exports = {
                        HORIZON_TIMELINE_EXP_KEY: r,
                        getBaseURLPath: function (t) {
                            switch (
                                t &&
                                t.tfw_team_holdback_11929 &&
                                t.tfw_team_holdback_11929.bucket
                            ) {
                                case "control":
                                    return "embed-holdback";
                                case "holdback_prod":
                                    return "embed-holdback-prod";
                                default:
                                    return "embed";
                            }
                        },
                        isHorizonTimelineVariantSupported: i,
                        isHorizonLangSupported: o,
                        isHorizonTimelineEnabled: function (t, e, n) {
                            (t = t && t[r] && "treatment" === t[r].bucket),
                                (e = i(e)),
                                (n = o(n));
                            return t && e && n;
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(47),
                        i = n(4),
                        o = n(19),
                        s = n(35),
                        a = n(74),
                        u = n(25),
                        c = n(8),
                        d = n(3),
                        l = n(0),
                        f = r.version,
                        c =
                            c.get("clientEventEndpoint") ||
                            "https://syndication.twitter.com/i/jot";
                    function h(t) {
                        return l.aug({ client: "tfw" }, t || {});
                    }
                    function p(t, e, n) {
                        return (
                            (e = e || {}),
                            l.aug({}, e, {
                                _category_: t,
                                triggered_on: e.triggered_on || +new Date(),
                                dnt: o.enabled(n),
                            })
                        );
                    }
                    t.exports = {
                        extractTermsFromDOM: function t(e, n) {
                            var r;
                            return (
                                (n = n || {}),
                                e && e.nodeType === Node.ELEMENT_NODE
                                    ? ((r = e.getAttribute("data-scribe")) &&
                                          r.split(" ").forEach(function (t) {
                                              var e = t.trim().split(":"),
                                                  t = e[0],
                                                  e = e[1];
                                              t && e && !n[t] && (n[t] = e);
                                          }),
                                      t(e.parentNode, n))
                                    : n
                            );
                        },
                        clickEventElement: function (t) {
                            (t = s.closest("[data-expanded-url]", t)),
                                (t = t && t.getAttribute("data-expanded-url"));
                            return t && d.isTwitterURL(t)
                                ? "twitter_url"
                                : "url";
                        },
                        flattenClientEventPayload: function (t, e) {
                            return l.aug({}, e, { event_namespace: t });
                        },
                        formatGenericEventData: p,
                        formatClientEventData: function (t, e, n) {
                            var r = (t && t.widget_origin) || i.referrer;
                            return (
                                ((t = p(
                                    "tfw_client_event",
                                    t,
                                    r
                                )).client_version = f),
                                (t.format_version = void 0 !== n ? n : 1),
                                e || (t.widget_origin = r),
                                t
                            );
                        },
                        formatClientEventNamespace: h,
                        formatHorizonTweetData: function (t) {
                            var e = { item_ids: [], item_details: {} };
                            return (
                                e.item_ids.push(t),
                                (e.item_details[t] = { item_type: a.TWEET }),
                                e
                            );
                        },
                        formatTweetAssociation: function (t, e) {
                            var n = {};
                            return (
                                ((e = e || {}).association_namespace = h(t)),
                                (n[1] = e),
                                n
                            );
                        },
                        noticeSeen: function (t) {
                            return (
                                "notice" === t.element && "seen" === t.action
                            );
                        },
                        splitLogEntry: function (e) {
                            var t, n, r, i;
                            return e.item_ids && 1 < e.item_ids.length
                                ? ((r = Math.floor(e.item_ids.length / 2)),
                                  (t = e.item_ids.slice(0, r)),
                                  (n = {}),
                                  (r = e.item_ids.slice(r)),
                                  (i = {}),
                                  t.forEach(function (t) {
                                      n[t] = e.item_details[t];
                                  }),
                                  r.forEach(function (t) {
                                      i[t] = e.item_details[t];
                                  }),
                                  [
                                      l.aug({}, e, {
                                          item_ids: t,
                                          item_details: n,
                                      }),
                                      l.aug({}, e, {
                                          item_ids: r,
                                          item_details: i,
                                      }),
                                  ])
                                : [e];
                        },
                        stringify: function (t) {
                            var e = Array.prototype.toJSON;
                            return (
                                delete Array.prototype.toJSON,
                                (t = u.stringify(t)),
                                e && (Array.prototype.toJSON = e),
                                t
                            );
                        },
                        CLIENT_EVENT_ENDPOINT: c,
                        RUFOUS_REDIRECT:
                            "https://platform.twitter.com/jot.html",
                    };
                },
                function (t, e, n) {
                    var r = n(9),
                        i = n(77),
                        o = n(0),
                        s = i.getCanonicalURL() || r.href,
                        a = s;
                    t.exports = {
                        isFramed: function () {
                            return s !== a;
                        },
                        rootDocumentLocation: function (t) {
                            return t && o.isType("string", t) && (s = t), s;
                        },
                        currentDocumentLocation: function () {
                            return a;
                        },
                    };
                },
                function (t, e, n) {
                    var i = n(104),
                        o = n(105),
                        r = n(0);
                    t.exports = {
                        couple: function () {
                            return r.toRealArray(arguments);
                        },
                        build: function (t, e, n) {
                            var r = new t();
                            return (
                                (e = o(i(e || []))).forEach(function (t) {
                                    t.call(null, r);
                                }),
                                r.build(n)
                            );
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(107),
                        i = n(0),
                        n = n(42);
                    function o() {
                        (this.Component = this.factory()),
                            (this._adviceArgs = []),
                            (this._lastArgs = []);
                    }
                    i.aug(o.prototype, {
                        factory: n,
                        build: function (t) {
                            var e = this;
                            return (
                                this.Component,
                                i.aug(this.Component.prototype.boundParams, t),
                                this._adviceArgs
                                    .concat(this._lastArgs)
                                    .forEach(function (t) {
                                        (function (t, e, n) {
                                            var r = this[e];
                                            if (!r)
                                                throw new Error(
                                                    e + " does not exist"
                                                );
                                            this[e] = t(r, n);
                                        }.apply(e.Component.prototype, t));
                                    }),
                                delete this._lastArgs,
                                delete this._adviceArgs,
                                this.Component
                            );
                        },
                        params: function (t) {
                            var e = this.Component.prototype.paramConfigs;
                            (t = t || {}),
                                (this.Component.prototype.paramConfigs = i.aug(
                                    {},
                                    t,
                                    e
                                ));
                        },
                        define: function (t, e) {
                            if (t in this.Component.prototype)
                                throw new Error(
                                    t + " has previously been defined"
                                );
                            this.override(t, e);
                        },
                        defineStatic: function (t, e) {
                            this.Component[t] = e;
                        },
                        override: function (t, e) {
                            this.Component.prototype[t] = e;
                        },
                        defineProperty: function (t, e) {
                            if (t in this.Component.prototype)
                                throw new Error(
                                    t + " has previously been defined"
                                );
                            this.overrideProperty(t, e);
                        },
                        overrideProperty: function (t, e) {
                            e = i.aug({ configurable: !0 }, e);
                            Object.defineProperty(
                                this.Component.prototype,
                                t,
                                e
                            );
                        },
                        before: function (t, e) {
                            this._adviceArgs.push([r.before, t, e]);
                        },
                        after: function (t, e) {
                            this._adviceArgs.push([r.after, t, e]);
                        },
                        around: function (t, e) {
                            this._adviceArgs.push([r.around, t, e]);
                        },
                        last: function (t, e) {
                            this._lastArgs.push([r.after, t, e]);
                        },
                    }),
                        (t.exports = o);
                },
                function (t, e, n) {
                    var f = n(0);
                    function h() {
                        return !0;
                    }
                    function p(t) {
                        return t;
                    }
                    t.exports = function () {
                        function t(d) {
                            var l = this;
                            (d = d || {}),
                                (this.params = Object.keys(
                                    this.paramConfigs
                                ).reduce(function (t, e) {
                                    var n,
                                        r,
                                        i,
                                        o = [],
                                        s = l.boundParams,
                                        a = l.paramConfigs[e],
                                        u = a.validate || h,
                                        c = a.transform || p;
                                    if (
                                        (e in s && o.push(s[e]),
                                        e in d && o.push(d[e]),
                                        (o =
                                            "fallback" in a
                                                ? o.concat(a.fallback)
                                                : o),
                                        (t[e] =
                                            ((n = u),
                                            (r = c),
                                            (i = null),
                                            o.some(function (t) {
                                                if (
                                                    ((t = f.isType(
                                                        "function",
                                                        t
                                                    )
                                                        ? t()
                                                        : t),
                                                    n(t))
                                                )
                                                    return (i = r(t)), !0;
                                            }),
                                            i)),
                                        a.required && null == t[e])
                                    )
                                        throw new Error(
                                            e + " is a required parameter"
                                        );
                                    return t;
                                }, {})),
                                this.initialize();
                        }
                        return (
                            f.aug(t.prototype, {
                                paramConfigs: {},
                                boundParams: {},
                                initialize: function () {},
                            }),
                            t
                        );
                    };
                },
                function (t, e, n) {
                    var r = n(19),
                        i = n(57),
                        s = n(11),
                        a = n(38),
                        u = n(0),
                        c = n(8).get("scribeCallback"),
                        d = [],
                        n = s.url(a.CLIENT_EVENT_ENDPOINT, { dnt: 0, l: "" }),
                        l = encodeURIComponent(n).length;
                    function o(t, e, n, r, i) {
                        var o = !u.isObject(t),
                            s = !!e && !u.isObject(e);
                        o ||
                            s ||
                            (c && c(arguments),
                            f(
                                a.formatClientEventNamespace(t),
                                a.formatClientEventData(e, n, r),
                                a.CLIENT_EVENT_ENDPOINT,
                                i
                            ));
                    }
                    function f(t, e, n, r) {
                        n &&
                            u.isObject(t) &&
                            u.isObject(e) &&
                            (i.log(t, e),
                            (e = a.flattenClientEventPayload(t, e)),
                            (r = u.aug({}, r, { l: a.stringify(e) })),
                            e.dnt && (r.dnt = 1),
                            v(s.url(n, r)));
                    }
                    function h(t, e, n, r) {
                        var i = !u.isObject(t),
                            o = !!e && !u.isObject(e);
                        if (!i && !o)
                            return p(
                                a.flattenClientEventPayload(
                                    a.formatClientEventNamespace(t),
                                    a.formatClientEventData(e, n, r)
                                )
                            );
                    }
                    function p(t) {
                        return d.push(t), d;
                    }
                    function m(t) {
                        return encodeURIComponent(t).length + 3;
                    }
                    function v(t) {
                        return (new Image().src = t);
                    }
                    t.exports = {
                        canFlushOneItem: function (t) {
                            t = m(a.stringify(t));
                            return l + t < 2083;
                        },
                        _enqueueRawObject: p,
                        scribe: f,
                        clientEvent: o,
                        clientEvent2: function (t, e, n) {
                            return o(t, e, n, 2);
                        },
                        enqueueClientEvent: h,
                        flushClientEvents: function () {
                            var o;
                            return (
                                1 < d.length &&
                                    h(
                                        {
                                            page: "widgets_js",
                                            component: "scribe_pixel",
                                            action: "batch_log",
                                        },
                                        {}
                                    ),
                                (o = d),
                                (d = []),
                                o
                                    .reduce(function (n, t, e) {
                                        var r = n.length,
                                            i = r && n[r - 1];
                                        return (
                                            e + 1 == o.length &&
                                                t.event_namespace &&
                                                "batch_log" ==
                                                    t.event_namespace.action &&
                                                (t.message = [
                                                    "entries:" + e,
                                                    "requests:" + r,
                                                ].join("/")),
                                            (function i(t) {
                                                return (
                                                    Array.isArray(t) ||
                                                        (t = [t]),
                                                    t.reduce(function (t, e) {
                                                        var n = a.stringify(e),
                                                            r = m(n);
                                                        return (
                                                            l + r < 2083
                                                                ? (t =
                                                                      t.concat(
                                                                          n
                                                                      ))
                                                                : 1 <
                                                                      (e =
                                                                          a.splitLogEntry(
                                                                              e
                                                                          ))
                                                                          .length &&
                                                                  (t = t.concat(
                                                                      i(e)
                                                                  )),
                                                            t
                                                        );
                                                    }, [])
                                                );
                                            })(t).forEach(function (t) {
                                                var e = m(t);
                                                (!i ||
                                                    2083 < i.urlLength + e) &&
                                                    ((i = {
                                                        urlLength: l,
                                                        items: [],
                                                    }),
                                                    n.push(i)),
                                                    (i.urlLength += e),
                                                    i.items.push(t);
                                            }),
                                            n
                                        );
                                    }, [])
                                    .map(function (t) {
                                        t = { l: t.items };
                                        return (
                                            r.enabled() && (t.dnt = 1),
                                            v(s.url(a.CLIENT_EVENT_ENDPOINT, t))
                                        );
                                    })
                            );
                        },
                        interaction: function (t, e, n, r) {
                            t = a.extractTermsFromDOM(t.target || t.srcElement);
                            (t.action = r || "click"), o(t, e, n);
                        },
                    };
                },
                function (t, e, n) {
                    var i,
                        o = n(10),
                        s = n(4),
                        a = n(1),
                        u = n(34),
                        c = n(55),
                        d = n(5),
                        l = n(22);
                    t.exports = {
                        inlineStyle: function () {
                            var t = "csptest" + l.generate(),
                                e = s.createElement("div"),
                                n = s.createElement("style"),
                                r = "." + t + " { visibility: hidden; }";
                            return (
                                !!s.body &&
                                (d.asBoolean(u.val("widgets:csp")) && (i = !1),
                                void 0 !== i ||
                                    ((e.style.display = "none"),
                                    o.add(e, t),
                                    (n.type = "text/css"),
                                    n.appendChild(s.createTextNode(r)),
                                    s.body.appendChild(n),
                                    s.body.appendChild(e),
                                    (i =
                                        "hidden" ===
                                        a.getComputedStyle(e).visibility),
                                    c(e),
                                    c(n)),
                                i)
                            );
                        },
                    };
                },
                function (t, e, n) {
                    var c = n(1);
                    t.exports = function (i, o, s) {
                        var a,
                            u = 0;
                        return (
                            (s = s || null),
                            function t() {
                                var e = s || this,
                                    n = arguments,
                                    r = +new Date();
                                if ((c.clearTimeout(a), o < r - u))
                                    return (u = r), void i.apply(e, n);
                                a = c.setTimeout(function () {
                                    t.apply(e, n);
                                }, o);
                            }
                        );
                    };
                },
                function (t, e, n) {
                    var n = n(1).HTMLElement,
                        r =
                            n.prototype.matches ||
                            n.prototype.matchesSelector ||
                            n.prototype.webkitMatchesSelector ||
                            n.prototype.mozMatchesSelector ||
                            n.prototype.msMatchesSelector ||
                            n.prototype.oMatchesSelector;
                    t.exports = function (t, e) {
                        if (r) return r.call(t, e);
                    };
                },
                function (t) {
                    t.exports = { version: "c8fe9736dd6fb:1649830956492" };
                },
                function (t, e) {
                    t.exports = function (t) {
                        t = t.getBoundingClientRect();
                        return { width: t.width, height: t.height };
                    };
                },
                function (t, e, n) {
                    var r = n(12).publicWarn;
                    t.exports = function () {
                        r(
                            "Warning: This Timeline type belongs to a group that will not be supported in the future (Likes, Collections, & Moments). It is not recommended for use. \n\t",
                            "* Twitter will continue to support Profile and List Timelines \n\t",
                            "* You can learn more about this change in our announcement: \n\t",
                            "https://twittercommunity.com/t/removing-support-for-embedded-like-collection-and-moment-timelines/150313 \n\t",
                            "* In order to create a new Embedded Timeline, visit: https://publish.twitter.com"
                        );
                    };
                },
                function (t, e, n) {
                    var r = function () {
                        "use strict";
                        function c(t) {
                            return "function" == typeof t;
                        }
                        var n =
                                Array.isArray ||
                                function (t) {
                                    return (
                                        "[object Array]" ===
                                        Object.prototype.toString.call(t)
                                    );
                                },
                            r = 0,
                            e = void 0,
                            i = void 0,
                            a = function (t, e) {
                                (l[r] = t),
                                    (l[r + 1] = e),
                                    2 === (r += 2) && (i ? i(f) : v());
                            },
                            t = "undefined" != typeof window ? window : void 0,
                            o = t || {},
                            s = o.MutationObserver || o.WebKitMutationObserver,
                            u =
                                "undefined" == typeof self &&
                                "undefined" != typeof process &&
                                "[object process]" ===
                                    {}.toString.call(process),
                            o =
                                "undefined" != typeof Uint8ClampedArray &&
                                "undefined" != typeof importScripts &&
                                "undefined" != typeof MessageChannel;
                        function d() {
                            var t = setTimeout;
                            return function () {
                                return t(f, 1);
                            };
                        }
                        var l = new Array(1e3);
                        function f() {
                            for (var t = 0; t < r; t += 2)
                                (0, l[t])(l[t + 1]),
                                    (l[t] = void 0),
                                    (l[t + 1] = void 0);
                            r = 0;
                        }
                        var h,
                            p,
                            m,
                            v = void 0;
                        function g(t, e) {
                            var n = this,
                                r = new this.constructor(b);
                            void 0 === r[y] && D(r);
                            var i,
                                o = n._state;
                            return (
                                o
                                    ? ((i = arguments[o - 1]),
                                      a(function () {
                                          return j(o, r, i, n._result);
                                      }))
                                    : L(n, r, t, e),
                                r
                            );
                        }
                        function w(t) {
                            if (
                                t &&
                                "object" == typeof t &&
                                t.constructor === this
                            )
                                return t;
                            var e = new this(b);
                            return R(e, t), e;
                        }
                        v = u
                            ? function () {
                                  return process.nextTick(f);
                              }
                            : s
                            ? ((p = 0),
                              (s = new s(f)),
                              (m = document.createTextNode("")),
                              s.observe(m, { characterData: !0 }),
                              function () {
                                  m.data = p = ++p % 2;
                              })
                            : o
                            ? (((h = new MessageChannel()).port1.onmessage = f),
                              function () {
                                  return h.port2.postMessage(0);
                              })
                            : (void 0 === t
                                  ? function () {
                                        try {
                                            var t =
                                                Function(
                                                    "return this"
                                                )().require("vertx");
                                            return void 0 !==
                                                (e =
                                                    t.runOnLoop ||
                                                    t.runOnContext)
                                                ? function () {
                                                      e(f);
                                                  }
                                                : d();
                                        } catch (t) {
                                            return d();
                                        }
                                    }
                                  : d)();
                        var y = Math.random().toString(36).substring(2);
                        function b() {}
                        var _ = void 0,
                            E = 1,
                            x = 2,
                            T = { error: null };
                        function S(t) {
                            try {
                                return t.then;
                            } catch (t) {
                                return (T.error = t), T;
                            }
                        }
                        function A(t, e, n) {
                            var i, o, r, s;
                            e.constructor === t.constructor &&
                            n === g &&
                            e.constructor.resolve === w
                                ? ((r = t),
                                  (s = e)._state === E
                                      ? P(r, s._result)
                                      : s._state === x
                                      ? C(r, s._result)
                                      : L(
                                            s,
                                            void 0,
                                            function (t) {
                                                return R(r, t);
                                            },
                                            function (t) {
                                                return C(r, t);
                                            }
                                        ))
                                : n === T
                                ? (C(t, T.error), (T.error = null))
                                : void 0 !== n && c(n)
                                ? ((i = e),
                                  (o = n),
                                  a(function (n) {
                                      var r = !1,
                                          t = (function (t, e) {
                                              try {
                                                  t.call(
                                                      e,
                                                      function (t) {
                                                          r ||
                                                              ((r = !0),
                                                              i !== t
                                                                  ? R(n, t)
                                                                  : P(n, t));
                                                      },
                                                      function (t) {
                                                          r ||
                                                              ((r = !0),
                                                              C(n, t));
                                                      }
                                                  );
                                              } catch (t) {
                                                  return t;
                                              }
                                          })(o, i, n._label);
                                      !r && t && ((r = !0), C(n, t));
                                  }, t))
                                : P(t, e);
                        }
                        function R(t, e) {
                            var n;
                            t === e
                                ? C(
                                      t,
                                      new TypeError(
                                          "You cannot resolve a promise with itself"
                                      )
                                  )
                                : ((n = typeof e),
                                  null === e ||
                                  ("object" != n && "function" != n)
                                      ? P(t, e)
                                      : A(t, e, S(e)));
                        }
                        function N(t) {
                            t._onerror && t._onerror(t._result), I(t);
                        }
                        function P(t, e) {
                            t._state === _ &&
                                ((t._result = e),
                                (t._state = E),
                                0 !== t._subscribers.length && a(I, t));
                        }
                        function C(t, e) {
                            t._state === _ &&
                                ((t._state = x), (t._result = e), a(N, t));
                        }
                        function L(t, e, n, r) {
                            var i = t._subscribers,
                                o = i.length;
                            (t._onerror = null),
                                (i[o] = e),
                                (i[o + E] = n),
                                (i[o + x] = r),
                                0 === o && t._state && a(I, t);
                        }
                        function I(t) {
                            var e = t._subscribers,
                                n = t._state;
                            if (0 !== e.length) {
                                for (
                                    var r, i = void 0, o = t._result, s = 0;
                                    s < e.length;
                                    s += 3
                                )
                                    (r = e[s]),
                                        (i = e[s + n]),
                                        r ? j(n, r, i, o) : i(o);
                                t._subscribers.length = 0;
                            }
                        }
                        function j(t, e, n, r) {
                            var i = c(n),
                                o = void 0,
                                s = void 0,
                                a = void 0,
                                u = void 0;
                            if (i) {
                                if (
                                    ((o = (function (t, e) {
                                        try {
                                            return t(e);
                                        } catch (t) {
                                            return (T.error = t), T;
                                        }
                                    })(n, r)) === T
                                        ? ((u = !0),
                                          (s = o.error),
                                          (o.error = null))
                                        : (a = !0),
                                    e === o)
                                )
                                    return void C(
                                        e,
                                        new TypeError(
                                            "A promises callback cannot return that same promise."
                                        )
                                    );
                            } else (o = r), (a = !0);
                            e._state !== _ ||
                                (i && a
                                    ? R(e, o)
                                    : u
                                    ? C(e, s)
                                    : t === E
                                    ? P(e, o)
                                    : t === x && C(e, o));
                        }
                        var O = 0;
                        function D(t) {
                            (t[y] = O++),
                                (t._state = void 0),
                                (t._result = void 0),
                                (t._subscribers = []);
                        }
                        var z =
                                ((U.prototype._enumerate = function (t) {
                                    for (
                                        var e = 0;
                                        this._state === _ && e < t.length;
                                        e++
                                    )
                                        this._eachEntry(t[e], e);
                                }),
                                (U.prototype._eachEntry = function (e, t) {
                                    var n,
                                        r,
                                        i = this._instanceConstructor,
                                        o = i.resolve;
                                    o === w
                                        ? (n = S(e)) === g && e._state !== _
                                            ? this._settledAt(
                                                  e._state,
                                                  t,
                                                  e._result
                                              )
                                            : "function" != typeof n
                                            ? (this._remaining--,
                                              (this._result[t] = e))
                                            : i === k
                                            ? (A((r = new i(b)), e, n),
                                              this._willSettleAt(r, t))
                                            : this._willSettleAt(
                                                  new i(function (t) {
                                                      return t(e);
                                                  }),
                                                  t
                                              )
                                        : this._willSettleAt(o(e), t);
                                }),
                                (U.prototype._settledAt = function (t, e, n) {
                                    var r = this.promise;
                                    r._state === _ &&
                                        (this._remaining--,
                                        t === x
                                            ? C(r, n)
                                            : (this._result[e] = n)),
                                        0 === this._remaining &&
                                            P(r, this._result);
                                }),
                                (U.prototype._willSettleAt = function (t, e) {
                                    var n = this;
                                    L(
                                        t,
                                        void 0,
                                        function (t) {
                                            return n._settledAt(E, e, t);
                                        },
                                        function (t) {
                                            return n._settledAt(x, e, t);
                                        }
                                    );
                                }),
                                U),
                            k =
                                ((M.prototype.catch = function (t) {
                                    return this.then(null, t);
                                }),
                                (M.prototype.finally = function (e) {
                                    var n = this.constructor;
                                    return c(e)
                                        ? this.then(
                                              function (t) {
                                                  return n
                                                      .resolve(e())
                                                      .then(function () {
                                                          return t;
                                                      });
                                              },
                                              function (t) {
                                                  return n
                                                      .resolve(e())
                                                      .then(function () {
                                                          throw t;
                                                      });
                                              }
                                          )
                                        : this.then(e, e);
                                }),
                                M);
                        function M(t) {
                            (this[y] = O++),
                                (this._result = this._state = void 0),
                                (this._subscribers = []),
                                b !== t &&
                                    ("function" != typeof t &&
                                        (function () {
                                            throw new TypeError(
                                                "You must pass a resolver function as the first argument to the promise constructor"
                                            );
                                        })(),
                                    this instanceof M
                                        ? (function (e, t) {
                                              try {
                                                  t(
                                                      function (t) {
                                                          R(e, t);
                                                      },
                                                      function (t) {
                                                          C(e, t);
                                                      }
                                                  );
                                              } catch (t) {
                                                  C(e, t);
                                              }
                                          })(this, t)
                                        : (function () {
                                              throw new TypeError(
                                                  "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                                              );
                                          })());
                        }
                        function U(t, e) {
                            (this._instanceConstructor = t),
                                (this.promise = new t(b)),
                                this.promise[y] || D(this.promise),
                                n(e)
                                    ? ((this.length = e.length),
                                      (this._remaining = e.length),
                                      (this._result = new Array(this.length)),
                                      0 === this.length
                                          ? P(this.promise, this._result)
                                          : ((this.length = this.length || 0),
                                            this._enumerate(e),
                                            0 === this._remaining &&
                                                P(this.promise, this._result)))
                                    : C(
                                          this.promise,
                                          new Error(
                                              "Array Methods must be provided an Array"
                                          )
                                      );
                        }
                        return (
                            (k.prototype.then = g),
                            (k.all = function (t) {
                                return new z(this, t).promise;
                            }),
                            (k.race = function (i) {
                                var o = this;
                                return n(i)
                                    ? new o(function (t, e) {
                                          for (
                                              var n = i.length, r = 0;
                                              r < n;
                                              r++
                                          )
                                              o.resolve(i[r]).then(t, e);
                                      })
                                    : new o(function (t, e) {
                                          return e(
                                              new TypeError(
                                                  "You must pass an array to race."
                                              )
                                          );
                                      });
                            }),
                            (k.resolve = w),
                            (k.reject = function (t) {
                                var e = new this(b);
                                return C(e, t), e;
                            }),
                            (k._setScheduler = function (t) {
                                i = t;
                            }),
                            (k._setAsap = function (t) {
                                a = t;
                            }),
                            (k._asap = a),
                            (k.polyfill = function () {
                                var t = void 0;
                                if ("undefined" != typeof global) t = global;
                                else if ("undefined" != typeof self) t = self;
                                else
                                    try {
                                        t = Function("return this")();
                                    } catch (t) {
                                        throw new Error(
                                            "polyfill failed because global object is unavailable in this environment"
                                        );
                                    }
                                var e = t.Promise;
                                if (e) {
                                    var n = null;
                                    try {
                                        n = Object.prototype.toString.call(
                                            e.resolve()
                                        );
                                    } catch (t) {}
                                    if ("[object Promise]" === n && !e.cast)
                                        return;
                                }
                                t.Promise = k;
                            }),
                            (k.Promise = k)
                        );
                    };
                    t.exports = r();
                },
                function (t, e, n) {
                    n = n(52);
                    t.exports = new n("twttr");
                },
                function (t, e, n) {
                    var r = n(1),
                        s = n(0);
                    function a(t) {
                        return s.isType("string", t)
                            ? t.split(".")
                            : s.isType("array", t)
                            ? t
                            : [];
                    }
                    function i(t, e) {
                        ((e = e || r)[t] = e[t] || {}),
                            Object.defineProperty(this, "base", {
                                value: e[t],
                            }),
                            Object.defineProperty(this, "name", { value: t });
                    }
                    s.aug(i.prototype, {
                        get: function (t) {
                            return a(t).reduce(function (t, e) {
                                if (s.isObject(t)) return t[e];
                            }, this.base);
                        },
                        set: function (t, e, n) {
                            var r,
                                i,
                                o = a(t),
                                r =
                                    ((r = this.base),
                                    (i = a(t).slice(0, -1)).reduce(function (
                                        t,
                                        e,
                                        n
                                    ) {
                                        if (
                                            ((t[e] = t[e] || {}),
                                            !s.isObject(t[e]))
                                        )
                                            throw new Error(
                                                i.slice(0, n + 1).join(".") +
                                                    " is already defined with a value."
                                            );
                                        return t[e];
                                    },
                                    r)),
                                o = o.slice(-1);
                            return n && o in r ? r[o] : (r[o] = e);
                        },
                        init: function (t, e) {
                            return this.set(t, e, !0);
                        },
                        unset: function (t) {
                            var e = a(t),
                                t = this.get(e.slice(0, -1));
                            t && delete t[e.slice(-1)];
                        },
                        aug: function (t) {
                            var e = this.get(t),
                                n = s.toRealArray(arguments).slice(1),
                                e = void 0 !== e ? e : {};
                            if ((n.unshift(e), !n.every(s.isObject)))
                                throw new Error("Cannot augment non-object.");
                            return this.set(t, s.aug.apply(null, n));
                        },
                        call: function (t) {
                            var e = this.get(t),
                                n = s.toRealArray(arguments).slice(1);
                            if (!s.isType("function", e))
                                throw new Error(
                                    "Function " + t + "does not exist."
                                );
                            return e.apply(null, n);
                        },
                        fullPath: function (t) {
                            t = a(t);
                            return t.unshift(this.name), t.join(".");
                        },
                    }),
                        (t.exports = i);
                },
                function (t, e, n) {
                    var r = n(0),
                        i = n(7),
                        o = {
                            bind: function (t, e) {
                                return (
                                    (this._handlers = this._handlers || {}),
                                    (this._handlers[t] =
                                        this._handlers[t] || []),
                                    this._handlers[t].push(e)
                                );
                            },
                            unbind: function (t, e) {
                                this._handlers &&
                                    this._handlers[t] &&
                                    (e
                                        ? 0 <=
                                              (e =
                                                  this._handlers[t].indexOf(
                                                      e
                                                  )) &&
                                          this._handlers[t].splice(e, 1)
                                        : (this._handlers[t] = []));
                            },
                            trigger: function (t, e) {
                                var n = this._handlers && this._handlers[t];
                                ((e = e || {}).type = t),
                                    n &&
                                        n.forEach(function (t) {
                                            r.async(i(t, this, e));
                                        });
                            },
                        };
                    t.exports = {
                        Emitter: o,
                        makeEmitter: function () {
                            return r.aug(function () {}, o);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(98),
                        i = n(100),
                        o = n(6),
                        s = n(24),
                        a = n(7),
                        u = n(0),
                        c = new i(function (t) {
                            t = t.map(r.fromRawTask).reduce(function (t, e) {
                                return (
                                    (t[e._className] = t[e._className] || []),
                                    t[e._className].push(e),
                                    t
                                );
                            }, {});
                            u.forIn(t, function (t, e) {
                                s.allSettled(
                                    e.map(function (t) {
                                        return t.initialize();
                                    })
                                ).then(function () {
                                    e.forEach(function (t) {
                                        o.all([t.hydrate(), t.insertIntoDom()])
                                            .then(a(t.render, t))
                                            .then(
                                                a(t.success, t),
                                                a(t.fail, t)
                                            );
                                    });
                                });
                            });
                        });
                    t.exports = {
                        addWidget: function (t) {
                            return c.add(t);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(18);
                    t.exports = function (t) {
                        return r.write(function () {
                            t && t.parentNode && t.parentNode.removeChild(t);
                        });
                    };
                },
                function (t, e, n) {
                    var i = n(102),
                        o = n(43),
                        s = new (n(111))(function (t) {
                            (1 === t.length && o.canFlushOneItem(t[0])
                                ? function (t) {
                                      t.forEach(function (t) {
                                          var e = t.input.namespace,
                                              n = t.input.data,
                                              r = t.input.offsite,
                                              i = t.input.version;
                                          o.clientEvent(e, n, r, i),
                                              t.taskDoneDeferred.resolve();
                                      });
                                  }
                                : function (t) {
                                      i.init(),
                                          t.forEach(function (t) {
                                              var e = t.input.namespace,
                                                  n = t.input.data,
                                                  r = t.input.offsite,
                                                  t = t.input.version;
                                              i.clientEvent(e, n, r, t);
                                          }),
                                          i.flush().then(
                                              function () {
                                                  t.forEach(function (t) {
                                                      t.taskDoneDeferred.resolve();
                                                  });
                                              },
                                              function () {
                                                  t.forEach(function (t) {
                                                      t.taskDoneDeferred.reject();
                                                  });
                                              }
                                          );
                                  })(t);
                        });
                    t.exports = {
                        scribe: function (t, e, n, r) {
                            return s.add({
                                namespace: t,
                                data: e,
                                offsite: n,
                                version: r,
                            });
                        },
                        pause: function () {
                            s.pause();
                        },
                        resume: function () {
                            s.resume();
                        },
                    };
                },
                function (t, e, n) {
                    n(12), (t.exports = { log: function (t, e) {} });
                },
                function (t, e, n) {
                    var r = n(1);
                    function i(t) {
                        return (t = t || r).getSelection && t.getSelection();
                    }
                    t.exports = {
                        getSelection: i,
                        getSelectedText: function (t) {
                            t = i(t);
                            return t ? t.toString() : "";
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(4),
                        i = n(1),
                        o = n(2);
                    t.exports = function (t) {
                        var e = new o(),
                            n = r.createElement("img");
                        return (
                            (n.onload = n.onerror =
                                function () {
                                    i.setTimeout(e.resolve, 50);
                                }),
                            (n.src = t),
                            i.setTimeout(e.reject, 2e4),
                            e.promise
                        );
                    };
                },
                function (t, e, n) {
                    var r = n(110);
                    t.exports = function (t) {
                        t.define("createElement", r),
                            t.define("createFragment", r),
                            t.define("htmlToElement", r),
                            t.define("hasSelectedText", r),
                            t.define("addRootClass", r),
                            t.define("removeRootClass", r),
                            t.define("hasRootClass", r),
                            t.define("prependStyleSheet", r),
                            t.define("appendStyleSheet", r),
                            t.define("prependCss", r),
                            t.define("appendCss", r),
                            t.define("makeVisible", r),
                            t.define("injectWidgetEl", r),
                            t.define("matchHeightToContent", r),
                            t.define("matchWidthToContent", r);
                    };
                },
                function (t, e) {
                    t.exports = function (t) {
                        var e,
                            n = !1;
                        return function () {
                            return n
                                ? e
                                : ((n = !0), (e = t.apply(this, arguments)));
                        };
                    };
                },
                function (t, e, n) {
                    var r = n(15),
                        i = n(117),
                        o = n(118),
                        s = n(16);
                    t.exports = function (t, e, n) {
                        return new r(i, o, s.DM_BUTTON, t, e, n);
                    };
                },
                function (t, e, n) {
                    var r = n(27),
                        n = n(119);
                    t.exports = r.build([n]);
                },
                function (t, e, n) {
                    var r = n(15),
                        i = n(122),
                        o = n(33),
                        s = n(16);
                    t.exports = function (t, e, n) {
                        return new r(i, o, s.FOLLOW_BUTTON, t, e, n);
                    };
                },
                function (t, e, n) {
                    var r = n(15),
                        i = n(130),
                        o = n(26),
                        s = n(16);
                    t.exports = function (t, e, n) {
                        return new r(i, o, s.MOMENT, t, e, n);
                    };
                },
                function (t, e, n) {
                    var r = n(15),
                        i = n(132),
                        o = n(26),
                        s = n(16);
                    t.exports = function (t, e, n) {
                        return new r(i, o, s.PERISCOPE, t, e, n);
                    };
                },
                function (t, e, n) {
                    var r = n(79),
                        i = n(134),
                        o = n(138),
                        s = n(140),
                        a = n(142),
                        n = n(144),
                        u = {
                            collection: i,
                            event: o,
                            likes: s,
                            list: a,
                            profile: n,
                            url: d,
                        },
                        c = [n, s, i, a, o];
                    function d(e) {
                        return r(c, function (t) {
                            try {
                                return new t(e);
                            } catch (t) {}
                        });
                    }
                    t.exports = function (t) {
                        return t
                            ? ((n = ((e = t).sourceType + "").toLowerCase()),
                              ((n = u[n]) ? new n(e) : null) || d(t))
                            : null;
                        var e, n;
                    };
                },
                function (t, e, n) {
                    var s = n(4),
                        a = n(37),
                        u = n(15),
                        c = n(146),
                        d = n(147),
                        l = n(33),
                        f = n(148),
                        h = n(26),
                        p = n(149),
                        m = n(16);
                    t.exports = function (t, e, n, r) {
                        var i = c.get(t.id),
                            o = t.lang || "en",
                            r = a.isHorizonTimelineEnabled(r, i, o);
                        return (
                            d(i, o),
                            r
                                ? ((r = s.createElement("div")),
                                  new u(f, l, m.TIMELINE, t, e, n, {
                                      sandboxWrapperEl: r,
                                  }))
                                : new u(p, h, m.TIMELINE, t, e, n)
                        );
                    };
                },
                function (t, e, n) {
                    var i = n(4),
                        o = n(15),
                        s = n(33),
                        a = n(151),
                        u = n(16);
                    t.exports = function (t, e, n) {
                        var r = i.createElement("div");
                        return new o(a, s, u.TWEET, t, e, n, {
                            sandboxWrapperEl: r,
                        });
                    };
                },
                function (t, e, n) {
                    var i = n(15),
                        o = n(153),
                        s = n(33),
                        a = n(16);
                    t.exports = function (t, e, n) {
                        var r = (t && t.type) || "share",
                            r =
                                "hashtag" == r
                                    ? a.HASHTAG_BUTTON
                                    : "mention" == r
                                    ? a.MENTION_BUTTON
                                    : a.SHARE_BUTTON;
                        return new i(o, s, r, t, e, n);
                    };
                },
                function (t, e, n) {
                    var r = n(56),
                        i = n(39),
                        o = n(0);
                    t.exports = function (t) {
                        var e = {
                                widget_origin: i.rootDocumentLocation(),
                                widget_frame: i.isFramed()
                                    ? i.currentDocumentLocation()
                                    : null,
                                duration_ms: t.duration,
                                item_ids: t.widgetIds || [],
                            },
                            t = o.aug(t.namespace, {
                                page: "page",
                                component: "performance",
                            });
                        r.scribe(t, e);
                    };
                },
                function (t, e, n) {
                    var r = n(0),
                        i = n(135),
                        o = ["ar", "fa", "he", "ur"];
                    t.exports = {
                        isRtlLang: function (t) {
                            return (
                                (t = String(t).toLowerCase()), r.contains(o, t)
                            );
                        },
                        matchLanguage: function (t) {
                            return (
                                (t = (t = (t || "").toLowerCase()).replace(
                                    "_",
                                    "-"
                                )),
                                i(t)
                                    ? t
                                    : ((t = t.replace(/-.*/, "")),
                                      i(t) ? t : "en")
                            );
                        },
                    };
                },
                function (t) {
                    t.exports = {
                        tweetButtonHtmlPath:
                            "/widgets/tweet_button.bbd13993eb53d3a11ac08f5e8cf9d6a4.{{lang}}.html",
                        followButtonHtmlPath:
                            "/widgets/follow_button.bbd13993eb53d3a11ac08f5e8cf9d6a4.{{lang}}.html",
                        hubHtmlPath: "/widgets/hub.html",
                        widgetIframeHtmlPath:
                            "/widgets/widget_iframe.bbd13993eb53d3a11ac08f5e8cf9d6a4.html",
                        resourceBaseUrl: "https://platform.twitter.com",
                    };
                },
                function (t) {
                    t.exports = {
                        TWEET: 0,
                        RETWEET: 10,
                        CUSTOM_TIMELINE: 17,
                        LIVE_VIDEO_EVENT: 28,
                        QUOTE_TWEET: 23,
                    };
                },
                function (t, e, n) {
                    var s = n(43);
                    t.exports = function (t, e, n, r, i) {
                        var o = {
                                client: "tfw",
                                page: "ddg",
                                section: t,
                                action: "experiment",
                            },
                            r = {
                                experiment_key: t,
                                bucket: e,
                                version: n,
                                data: r,
                            },
                            i = { session_id: i };
                        s.clientEvent(o, r, void 0, void 0, i);
                    };
                },
                function (t, e, n) {
                    var i = n(3),
                        o = n(96),
                        s = n(23),
                        a = n(11),
                        u = {
                            favorite: ["favorite", "like"],
                            follow: ["follow"],
                            like: ["favorite", "like"],
                            retweet: ["retweet"],
                            tweet: ["tweet"],
                        };
                    function r(t) {
                        (this.srcEl = []), (this.element = t);
                    }
                    (r.open = function (n, e, t) {
                        var r = (i.intentType(n) || "").toLowerCase();
                        i.isTwitterURL(n) &&
                            (o.open(n, t),
                            e &&
                                s.trigger("click", {
                                    target: e,
                                    region: "intent",
                                    type: "click",
                                    data: {},
                                }),
                            e &&
                                u[r] &&
                                u[r].forEach(function (t) {
                                    s.trigger(t, {
                                        target: e,
                                        region: "intent",
                                        type: t,
                                        data: (function (t) {
                                            var e = a.decodeURL(n);
                                            switch (t) {
                                                case "favorite":
                                                case "like":
                                                    return {
                                                        tweet_id: e.tweet_id,
                                                    };
                                                case "follow":
                                                    return {
                                                        screen_name:
                                                            e.screen_name,
                                                        user_id: e.user_id,
                                                    };
                                                case "retweet":
                                                    return {
                                                        source_tweet_id:
                                                            e.tweet_id,
                                                    };
                                                default:
                                                    return {};
                                            }
                                        })(r),
                                    });
                                }));
                    }),
                        (t.exports = r);
                },
                function (t, e, n) {
                    var a = n(4),
                        i = n(9),
                        u = n(3);
                    function r(t, e) {
                        var n, r;
                        return (
                            (e = e || i),
                            /^https?:\/\//.test(t)
                                ? t
                                : /^\/\//.test(t)
                                ? e.protocol + t
                                : ((n =
                                      e.host +
                                      (e.port.length ? ":" + e.port : "")),
                                  0 !== t.indexOf("/") &&
                                      ((r = e.pathname.split("/")).pop(),
                                      r.push(t),
                                      (t = "/" + r.join("/"))),
                                  [e.protocol, "//", n, t].join(""))
                        );
                    }
                    t.exports = {
                        absolutize: r,
                        getCanonicalURL: function () {
                            for (
                                var t,
                                    e = a.getElementsByTagName("link"),
                                    n = 0;
                                e[n];
                                n++
                            )
                                if ("canonical" == (t = e[n]).rel)
                                    return r(t.href);
                        },
                        getScreenNameFromPage: function () {
                            for (
                                var t,
                                    e,
                                    n,
                                    r = [
                                        a.getElementsByTagName("a"),
                                        a.getElementsByTagName("link"),
                                    ],
                                    i = 0,
                                    o = 0,
                                    s = /\bme\b/;
                                (t = r[i]);
                                i++
                            )
                                for (o = 0; (e = t[o]); o++)
                                    if (
                                        s.test(e.rel) &&
                                        (n = u.screenName(e.href))
                                    )
                                        return n;
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(0),
                        i = n(46);
                    t.exports = function (t, e) {
                        return i(t, e)
                            ? [t]
                            : r.toRealArray(t.querySelectorAll(e));
                    };
                },
                function (t, e) {
                    t.exports = function (t, e, n) {
                        for (var r, i = 0; i < t.length; i++)
                            if ((r = e.call(n, t[i], i, t))) return r;
                    };
                },
                function (t, e) {
                    t.exports = function () {
                        return Math.floor(+new Date() / 9e5);
                    };
                },
                function (t, e, n) {
                    var a = n(4),
                        u = n(8),
                        c = n(2),
                        d = n(0),
                        l = n(11),
                        f = 0;
                    t.exports = {
                        fetch: function (t, e, n, r) {
                            var i, o, s;
                            return (
                                (r = (function (t) {
                                    if (t) return t.replace(/[^\w$]/g, "_");
                                })(r || "cb" + f++)),
                                (i = u.fullPath(["callbacks", r])),
                                (o = a.createElement("script")),
                                (s = new c()),
                                (e = d.aug({}, e, {
                                    callback: i,
                                    suppress_response_codes: !0,
                                })),
                                u.set(["callbacks", r], function (t) {
                                    var e;
                                    (t = (e = n(t || !1)).resp),
                                        e.success ? s.resolve(t) : s.reject(t),
                                        (o.onload = o.onreadystatechange =
                                            null),
                                        o.parentNode &&
                                            o.parentNode.removeChild(o),
                                        u.unset(["callbacks", r]);
                                }),
                                (o.onerror = function () {
                                    s.reject(
                                        new Error("failed to fetch " + o.src)
                                    );
                                }),
                                (o.src = l.url(t, e)),
                                (o.async = "async"),
                                a.body.appendChild(o),
                                s.promise
                            );
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(12);
                    t.exports = function (t) {
                        var e = t.headers && t.headers.status;
                        return (
                            !(e = t && !t.error && 200 === e) &&
                                t.headers &&
                                t.headers.message &&
                                r.publicError(t.headers.message),
                            { success: e, resp: t }
                        );
                    };
                },
                function (t, e) {
                    t.exports = {
                        getTimezoneOffset: function () {
                            var t = new Date()
                                .toString()
                                .match(/(GMT[+-]?\d+)/);
                            return (t && t[0]) || "GMT";
                        },
                    };
                },
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                function (t, e, n) {
                    var r,
                        i = n(2),
                        o = n(4),
                        s = n(94),
                        a = n(51),
                        u = n(8),
                        c = n(95),
                        d = n(23),
                        l = n(97),
                        f = n(154),
                        h = n(162),
                        p = n(163),
                        m = n(30),
                        v = n(31);
                    n(164),
                        m.emitter.trigger(m.START),
                        u.set("widgets.init", !0),
                        a.set("init", !0),
                        p(),
                        (r = new i()),
                        s.exposeReadyPromise(r.promise, a.base, "_e"),
                        a.set("widgets", f),
                        a.set("widgets.load", l.load),
                        a.set("events", d),
                        h(function () {
                            v.load(),
                                r.resolve(a.base),
                                c.attachTo(o),
                                l.loadPage();
                        });
                },
                function (t, e) {
                    t.exports = navigator;
                },
                function (t, e, n) {
                    var r = n(7);
                    t.exports = {
                        exposeReadyPromise: function (t, e, n) {
                            (e.ready = r(t.then, t)),
                                n &&
                                    Array.isArray(e[n]) &&
                                    (e[n].forEach(r(t.then, t)), delete e[n]);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(9),
                        i = n(36),
                        o = n(35),
                        s = n(76),
                        a = n(3);
                    function u(t) {
                        var e, n;
                        t.altKey ||
                            t.metaKey ||
                            t.shiftKey ||
                            ((e = o.closest(function (t) {
                                return (
                                    "A" === t.tagName || "AREA" === t.tagName
                                );
                            }, t.target)) &&
                                a.isIntentURL(e.href) &&
                                ((n = (n = (n = [
                                    (n = e.href),
                                    "original_referer=" + r.href,
                                ].join(
                                    -1 == n.indexOf("?") ? "?" : "&"
                                )).replace(/^http[:]/, "https:")).replace(
                                    /^\/\//,
                                    "https://"
                                )),
                                s.open(n, e),
                                i.preventDefault(t)));
                    }
                    t.exports = {
                        attachTo: function (t) {
                            t.addEventListener("click", u, !1);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(1),
                        i = n(36),
                        o = n(35),
                        s = n(21),
                        a = n(3),
                        u = n(22);
                    function c(t) {
                        this.win = t;
                    }
                    (c.prototype.open = function (t, e) {
                        var n =
                                e &&
                                "click" == e.type &&
                                o.closest("a", e.target),
                            r = e && (e.altKey || e.metaKey || e.shiftKey),
                            n = n && (s.ios() || s.android());
                        if (a.isTwitterURL(t))
                            return (
                                r ||
                                    n ||
                                    ((this.name = "intent_" + u.generate()),
                                    (this.popup = this.win.open(t, this.name)),
                                    e && i.preventDefault(e)),
                                this
                            );
                    }),
                        (c.open = function (t, e) {
                            return new c(r).open(t, e);
                        }),
                        (t.exports = c);
                },
                function (t, e, n) {
                    var i = n(4),
                        r = n(6),
                        o = n(24),
                        s = n(54),
                        a = n(34),
                        u = n(8),
                        c = n(56),
                        d = n(23),
                        l = n(5),
                        f = n(0),
                        h = n(31),
                        p = n(114),
                        m = n(30);
                    function v() {
                        var t = a.val("widgets:autoload") || !0;
                        return (
                            !l.isFalseValue(t) &&
                            (l.isTruthValue(t) ? i.body : i.querySelectorAll(t))
                        );
                    }
                    function g(n) {
                        return h.getExperiments().then(function (t) {
                            return (
                                (e = t),
                                (t = (t = (t = n) || i.body).length
                                    ? f.toRealArray(t)
                                    : [t]),
                                c.pause(),
                                (r = e),
                                (t = t.reduce(function (t, n) {
                                    return t.concat(
                                        p.reduce(function (t, e) {
                                            return t.concat(e(n, r));
                                        }, [])
                                    );
                                }, [])),
                                m.emitter.trigger(m.ALL_WIDGETS_RENDER_START, {
                                    widgets: t,
                                }),
                                (t = o
                                    .allResolved(
                                        t.map(function (t) {
                                            return s.addWidget(t);
                                        })
                                    )
                                    .then(function (t) {
                                        d.trigger("loaded", { widgets: t }),
                                            t &&
                                                t.length &&
                                                m.emitter.trigger(
                                                    m.ALL_WIDGETS_RENDER_END,
                                                    { widgets: t }
                                                );
                                    })),
                                o.always(t, function () {
                                    c.resume();
                                }),
                                t
                            );
                            var e, r;
                        });
                    }
                    t.exports = {
                        load: g,
                        loadPage: function () {
                            var t = v();
                            return !1 === t
                                ? r.resolve()
                                : (u.set("widgets.loaded", !0), g(t));
                        },
                        _getPageLoadTarget: v,
                    };
                },
                function (t, e, n) {
                    var r = n(10),
                        i = n(18),
                        o = n(23),
                        s = n(55),
                        a = n(6),
                        u = n(24);
                    function c(s, t) {
                        (this._widget = null),
                            (this._sandbox = null),
                            (this._hydrated = !1),
                            (this._insertedIntoDom = !1),
                            (this._Sandbox = s.Sandbox),
                            (this._factory = s.factory),
                            (this._widgetParams = s.parameters),
                            (this._resolve = t),
                            (this._className = s.className),
                            (this._renderedClassName =
                                s.className + "-rendered"),
                            (this._errorClassName = s.className + "-error"),
                            (this._srcEl = s.srcEl),
                            (this._targetGlobal = (
                                s.srcEl || s.targetEl
                            ).ownerDocument.defaultView),
                            (this._sandboxWrapperEl = s.options
                                ? s.options.sandboxWrapperEl
                                : null),
                            (this._insertionStrategy = function (t) {
                                var e = s.srcEl,
                                    n = s.targetEl,
                                    r = s.className,
                                    i = s.className + "-rendered",
                                    o = s.options
                                        ? s.options.sandboxWrapperEl
                                        : null,
                                    t = o
                                        ? (o.appendChild(t),
                                          o.classList.add(r, i),
                                          o)
                                        : t;
                                e ? n.insertBefore(t, e) : n.appendChild(t);
                            });
                    }
                    (c.fromRawTask = function (t) {
                        return new c(t.input, t.taskDoneDeferred.resolve);
                    }),
                        (c.prototype.initialize = function () {
                            var e = this,
                                n = new this._Sandbox(this._targetGlobal);
                            return this._factory(this._widgetParams, n).then(
                                function (t) {
                                    return (
                                        (e._widget = t),
                                        (e._sandbox = n),
                                        (t._sandboxWrapperEl =
                                            e._sandboxWrapperEl),
                                        t
                                    );
                                }
                            );
                        }),
                        (c.prototype.insertIntoDom = function () {
                            var t = this,
                                e = this._sandboxWrapperEl
                                    ? ""
                                    : [
                                          this._className,
                                          this._renderedClassName,
                                      ].join(" ");
                            return this._widget
                                ? this._sandbox
                                      .insert(
                                          this._widget.id,
                                          { class: e },
                                          null,
                                          this._insertionStrategy
                                      )
                                      .then(function () {
                                          t._insertedIntoDom = !0;
                                      })
                                : a.reject(
                                      new Error(
                                          "cannot insert widget into DOM before it is initialized"
                                      )
                                  );
                        }),
                        (c.prototype.hydrate = function () {
                            var t = this;
                            return this._widget
                                ? this._widget.hydrate().then(function () {
                                      t._hydrated = !0;
                                  })
                                : a.reject(
                                      new Error(
                                          "cannot hydrate widget before it is initialized"
                                      )
                                  );
                        }),
                        (c.prototype.render = function () {
                            var n = this;
                            function t(t) {
                                var e =
                                    n._sandboxWrapperEl || n._sandbox.sandboxEl;
                                return s(e).then(function () {
                                    return a.reject(t);
                                });
                            }
                            return this._hydrated
                                ? this._insertedIntoDom
                                    ? n._widget
                                          .render(n._sandbox)
                                          .then(function () {
                                              return (
                                                  n._sandbox.onResize(
                                                      function () {
                                                          return n._widget
                                                              .resize()
                                                              .then(
                                                                  function () {
                                                                      var t =
                                                                          n._sandboxWrapperEl ||
                                                                          n
                                                                              ._sandbox
                                                                              .sandboxEl;
                                                                      o.trigger(
                                                                          "resize",
                                                                          {
                                                                              target: t,
                                                                          }
                                                                      );
                                                                  }
                                                              );
                                                      }
                                                  ),
                                                  n._widget.show()
                                              );
                                          })
                                          .then(function () {
                                              return s(n._srcEl).then(
                                                  function () {
                                                      return n._sandbox
                                                          .sandboxEl;
                                                  }
                                              );
                                          }, t)
                                    : t(
                                          new Error(
                                              "cannot render widget before DOM insertion"
                                          )
                                      )
                                : t(
                                      new Error(
                                          "cannot render widget before hydration"
                                      )
                                  );
                        }),
                        (c.prototype.fail = function () {
                            var t = this,
                                e = t._errorClassName,
                                n = t._sandboxWrapperEl || t._srcEl;
                            return this._srcEl
                                ? u.always(
                                      i.write(function () {
                                          r.add(n, e);
                                      }),
                                      function () {
                                          o.trigger("rendered", { target: n }),
                                              t._resolve(n);
                                      }
                                  )
                                : (t._resolve(), a.resolve());
                        }),
                        (c.prototype.success = function () {
                            var t =
                                this._sandboxWrapperEl ||
                                this._sandbox.sandboxEl;
                            o.trigger("rendered", { target: t }),
                                this._resolve(t);
                        }),
                        (t.exports = c);
                },
                function (r, i, o) {
                    var s;
                    !(function () {
                        "use strict";
                        var t =
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (t) {
                                return window.setTimeout(t, 1e3 / 60);
                            };
                        function e() {
                            (this.frames = []),
                                (this.lastId = 0),
                                (this.raf = t),
                                (this.batch = {
                                    hash: {},
                                    read: [],
                                    write: [],
                                    mode: null,
                                });
                        }
                        (e.prototype.read = function (t, e) {
                            (t = this.add("read", t, e)), (e = t.id);
                            return (
                                this.batch.read.push(t.id),
                                "reading" === this.batch.mode ||
                                    this.batch.scheduled ||
                                    this.scheduleBatch(),
                                e
                            );
                        }),
                            (e.prototype.write = function (t, e) {
                                var n = this.add("write", t, e),
                                    t = this.batch.mode,
                                    e = n.id;
                                return (
                                    this.batch.write.push(n.id),
                                    "writing" === t ||
                                        "reading" === t ||
                                        this.batch.scheduled ||
                                        this.scheduleBatch(),
                                    e
                                );
                            }),
                            (e.prototype.defer = function (t, e, n) {
                                "function" == typeof t &&
                                    ((n = e), (e = t), (t = 1));
                                var r = this,
                                    t = t - 1;
                                return this.schedule(t, function () {
                                    r.run({ fn: e, ctx: n });
                                });
                            }),
                            (e.prototype.clear = function (t) {
                                if ("function" == typeof t)
                                    return this.clearFrame(t);
                                t = Number(t);
                                var e,
                                    n = this.batch.hash[t];
                                n &&
                                    ((n = (e = this.batch[n.type]).indexOf(t)),
                                    delete this.batch.hash[t],
                                    ~n && e.splice(n, 1));
                            }),
                            (e.prototype.clearFrame = function (t) {
                                t = this.frames.indexOf(t);
                                ~t && this.frames.splice(t, 1);
                            }),
                            (e.prototype.scheduleBatch = function () {
                                var t = this;
                                this.schedule(0, function () {
                                    (t.batch.scheduled = !1), t.runBatch();
                                }),
                                    (this.batch.scheduled = !0);
                            }),
                            (e.prototype.uniqueId = function () {
                                return ++this.lastId;
                            }),
                            (e.prototype.flush = function (t) {
                                for (var e; (e = t.shift()); )
                                    this.run(this.batch.hash[e]);
                            }),
                            (e.prototype.runBatch = function () {
                                try {
                                    (this.batch.mode = "reading"),
                                        this.flush(this.batch.read),
                                        (this.batch.mode = "writing"),
                                        this.flush(this.batch.write),
                                        (this.batch.mode = null);
                                } catch (t) {
                                    throw (this.runBatch(), t);
                                }
                            }),
                            (e.prototype.add = function (t, e, n) {
                                var r = this.uniqueId();
                                return (this.batch.hash[r] = {
                                    id: r,
                                    fn: e,
                                    ctx: n,
                                    type: t,
                                });
                            }),
                            (e.prototype.run = function (t) {
                                var e = t.ctx || this,
                                    n = t.fn;
                                if (
                                    (delete this.batch.hash[t.id],
                                    !this.onError)
                                )
                                    return n.call(e);
                                try {
                                    n.call(e);
                                } catch (t) {
                                    this.onError(t);
                                }
                            }),
                            (e.prototype.loop = function () {
                                var t,
                                    e = this,
                                    n = this.raf,
                                    r = !1;
                                function i() {
                                    var t = e.frames.shift();
                                    e.frames.length ? n(i) : (e.looping = !1),
                                        t && t();
                                }
                                this.looping ||
                                    ((t = setTimeout(function () {
                                        (r = !0), i();
                                    }, 500)),
                                    n(function () {
                                        r || (clearTimeout(t), i());
                                    }),
                                    (this.looping = !0));
                            }),
                            (e.prototype.schedule = function (t, e) {
                                return this.frames[t]
                                    ? this.schedule(t + 1, e)
                                    : (this.loop(), (this.frames[t] = e));
                            });
                        var n = new e();
                        void 0 !== r && r.exports
                            ? (r.exports = n)
                            : void 0 ===
                                  (s = function () {
                                      return n;
                                  }.call(i, o, i, r)) || (r.exports = s);
                    })();
                },
                function (t, e, n) {
                    var r = n(2),
                        i = n(101),
                        o = n(7);
                    function s(t) {
                        (this._inputsQueue = []),
                            (this._task = t),
                            (this._hasFlushBeenScheduled = !1);
                    }
                    (s.prototype.add = function (t) {
                        var e = new r();
                        return (
                            this._inputsQueue.push({
                                input: t,
                                taskDoneDeferred: e,
                            }),
                            this._hasFlushBeenScheduled ||
                                ((this._hasFlushBeenScheduled = !0),
                                i(o(this._flush, this))),
                            e.promise
                        );
                    }),
                        (s.prototype._flush = function () {
                            try {
                                this._task.call(null, this._inputsQueue);
                            } catch (e) {
                                this._inputsQueue.forEach(function (t) {
                                    t.taskDoneDeferred.reject(e);
                                });
                            }
                            (this._inputsQueue = []),
                                (this._hasFlushBeenScheduled = !1);
                        }),
                        (t.exports = s);
                },
                function (t, e, n) {
                    n = n(50).Promise;
                    t.exports = n._asap;
                },
                function (t, e, n) {
                    var s,
                        r,
                        a,
                        i = n(4),
                        o = n(1),
                        u = n(32),
                        c = n(19),
                        d = n(2),
                        l = n(6),
                        f = n(57),
                        h = n(38),
                        p = n(0),
                        m = n(26),
                        v = n(8).get("scribeCallback"),
                        n = Math.floor(1e3 * Math.random()) + "_",
                        g = "rufous-frame-" + n + "-",
                        w = "rufous-form-" + n + "-",
                        y = 0,
                        b = !1,
                        _ = new d();
                    function E() {
                        var t = a.createElement("form"),
                            e = a.createElement("input"),
                            n = a.createElement("input");
                        return (
                            y++,
                            (t.action = h.CLIENT_EVENT_ENDPOINT),
                            (t.method = "POST"),
                            (t.target = g + y),
                            (t.id = w + y),
                            (e.type = "hidden"),
                            (e.name = "dnt"),
                            (e.value = c.enabled()),
                            (n.type = "hidden"),
                            (n.name = "tfw_redirect"),
                            (n.value = h.RUFOUS_REDIRECT),
                            t.appendChild(e),
                            t.appendChild(n),
                            t
                        );
                    }
                    function x() {
                        var t = g + y;
                        return u(
                            { id: t, name: t, width: 0, height: 0, border: 0 },
                            { display: "none" },
                            a.doc
                        );
                    }
                    t.exports = {
                        clientEvent: function (n, r, i, o) {
                            var t, e;
                            (t = r),
                                (e = !p.isObject(n)),
                                (t = !!t && !p.isObject(t)),
                                e ||
                                    t ||
                                    (v && v(arguments),
                                    _.promise.then(function () {
                                        var t, e;
                                        (t = h.formatClientEventNamespace(n)),
                                            (e = h.formatClientEventData(
                                                r,
                                                i,
                                                o
                                            )),
                                            p.isObject(t) &&
                                                p.isObject(e) &&
                                                (f.log(t, e),
                                                (t =
                                                    h.flattenClientEventPayload(
                                                        t,
                                                        e
                                                    )),
                                                ((e = s.firstChild).value = +(
                                                    +e.value ||
                                                    t.dnt ||
                                                    0
                                                )),
                                                ((e =
                                                    a.createElement(
                                                        "input"
                                                    )).type = "hidden"),
                                                (e.name = "l"),
                                                (e.value = h.stringify(t)),
                                                s.appendChild(e));
                                    }));
                        },
                        flush: function () {
                            return _.promise.then(function () {
                                var t;
                                return s.children.length <= 2
                                    ? l.reject()
                                    : ((t = l
                                          .all([
                                              a.doc.body.appendChild(s),
                                              a.doc.body.appendChild(r),
                                          ])
                                          .then(function (t) {
                                              var r = t[0],
                                                  i = t[1];
                                              return (
                                                  i.addEventListener(
                                                      "load",
                                                      function () {
                                                          var e, n;
                                                          (e = r),
                                                              (n = i),
                                                              (function () {
                                                                  var t =
                                                                      e.parentNode;
                                                                  t &&
                                                                      (t.removeChild(
                                                                          e
                                                                      ),
                                                                      t.removeChild(
                                                                          n
                                                                      ));
                                                              })();
                                                      }
                                                  ),
                                                  r.submit(),
                                                  t
                                              );
                                          })),
                                      (s = E()),
                                      (r = x()),
                                      t);
                            });
                        },
                        init: function () {
                            return (
                                b ||
                                    ((a = new m(o))
                                        .insert(
                                            "rufous-sandbox",
                                            null,
                                            { display: "none" },
                                            function (t) {
                                                i.body.appendChild(t);
                                            }
                                        )
                                        .then(function () {
                                            a.setTitle(
                                                "Twitter analytics iframe"
                                            ),
                                                (s = E()),
                                                (r = x()),
                                                _.resolve([s, r]);
                                        }),
                                    (b = !0)),
                                _.promise
                            );
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(9),
                        i = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
                        o = {};
                    function s(t) {
                        return t in o ? o[t] : (o[t] = i.test(t));
                    }
                    t.exports = {
                        isUrlSensitive: s,
                        isHostPageSensitive: function () {
                            return s(r.host);
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(0);
                    t.exports = function e(t) {
                        var n = [];
                        return (
                            t.forEach(function (t) {
                                t = r.isType("array", t) ? e(t) : [t];
                                n = n.concat(t);
                            }),
                            n
                        );
                    };
                },
                function (t, e) {
                    t.exports = function (n) {
                        return n.filter(function (t, e) {
                            return n.indexOf(t) === e;
                        });
                    };
                },
                function (t, e, n) {
                    var r = n(41),
                        i = n(0),
                        n = n(108);
                    function o() {
                        r.apply(this, arguments);
                    }
                    (o.prototype = Object.create(r.prototype)),
                        i.aug(o.prototype, { factory: n }),
                        (t.exports = o);
                },
                function (t, e, n) {
                    var s = n(24),
                        r = n(0),
                        i = n(7);
                    t.exports = {
                        before: function (r, i) {
                            return function () {
                                var t = this,
                                    e = arguments,
                                    n = i.apply(this, arguments);
                                return s.isPromise(n)
                                    ? n.then(function () {
                                          return r.apply(t, e);
                                      })
                                    : r.apply(this, arguments);
                            };
                        },
                        after: function (i, o) {
                            return function () {
                                var t,
                                    e = this,
                                    n = arguments;
                                function r(t, e) {
                                    return s.isPromise(e)
                                        ? e.then(function () {
                                              return t;
                                          })
                                        : t;
                                }
                                return (
                                    (t = i.apply(this, arguments)),
                                    s.isPromise(t)
                                        ? t.then(function (t) {
                                              return r(t, o.apply(e, n));
                                          })
                                        : r(t, o.apply(this, arguments))
                                );
                            };
                        },
                        around: function (e, n) {
                            return function () {
                                var t = r.toRealArray(arguments);
                                return t.unshift(i(e, this)), n.apply(this, t);
                            };
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(10),
                        i = n(18),
                        o = n(42),
                        s = n(6),
                        a = n(0);
                    t.exports = function () {
                        var e = o();
                        function t(t) {
                            e.apply(this, arguments),
                                Object.defineProperty(this, "targetGlobal", {
                                    value: t,
                                });
                        }
                        return (
                            (t.prototype = Object.create(e.prototype)),
                            a.aug(t.prototype, {
                                id: null,
                                initialized: !1,
                                width: 0,
                                height: 0,
                                sandboxEl: null,
                                insert: function () {
                                    return s.reject();
                                },
                                onResize: function () {},
                                addClass: function (t) {
                                    var e = this.sandboxEl;
                                    return (
                                        (t = Array.isArray(t) ? t : [t]),
                                        i.write(function () {
                                            t.forEach(function (t) {
                                                r.add(e, t);
                                            });
                                        })
                                    );
                                },
                                removeClass: function (t) {
                                    var e = this.sandboxEl;
                                    return (
                                        (t = Array.isArray(t) ? t : [t]),
                                        i.write(function () {
                                            t.forEach(function (t) {
                                                r.remove(e, t);
                                            });
                                        })
                                    );
                                },
                                styleSelf: function (t) {
                                    var n = this;
                                    return i.write(function () {
                                        a.forIn(t, function (t, e) {
                                            n.sandboxEl.style[t] = e;
                                        });
                                    });
                                },
                            }),
                            t
                        );
                    };
                },
                function (t, e, n) {
                    var u = n(4),
                        r = n(10),
                        c = n(18),
                        i = n(58),
                        o = n(27),
                        s = n(59),
                        a = n(44),
                        d = n(45),
                        l = n(32),
                        f = n(12),
                        h = n(48),
                        p = n(2),
                        m = n(6),
                        v = n(0),
                        g = n(8),
                        w = n(22),
                        y = n(7),
                        b = { allowfullscreen: "true" },
                        _ = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            padding: "0",
                            border: "none",
                        },
                        E = { position: "static", visibility: "visible" };
                    function x(t, e, n, r) {
                        return (
                            (e = v.aug({ id: t }, b, e)),
                            (n = v.aug({}, _, n)),
                            l(e, n, r)
                        );
                    }
                    function T(t, e, n, r, i) {
                        var o = new p(),
                            s = w.generate(),
                            a = x(t, e, n, i);
                        return (
                            g.set(["sandbox", s], function () {
                                var t = a.contentWindow.document;
                                c.write(function () {
                                    t.write(
                                        "<!DOCTYPE html><html><head></head><body></body></html>"
                                    );
                                }).then(function () {
                                    t.close(), o.resolve(a);
                                });
                            }),
                            (a.src = [
                                "javascript:",
                                'document.write("");',
                                "try { window.parent.document; }",
                                'catch (e) { document.domain="' +
                                    u.domain +
                                    '"; }',
                                "window.parent." +
                                    g.fullPath(["sandbox", s]) +
                                    "();",
                            ].join("")),
                            a.addEventListener("error", o.reject, !1),
                            c.write(function () {
                                r.parentNode.replaceChild(a, r);
                            }),
                            o.promise
                        );
                    }
                    t.exports = o.couple(n(60), function (t) {
                        t.overrideProperty("id", {
                            get: function () {
                                return this.sandboxEl && this.sandboxEl.id;
                            },
                        }),
                            t.overrideProperty("initialized", {
                                get: function () {
                                    return !!this.win;
                                },
                            }),
                            t.overrideProperty("width", {
                                get: function () {
                                    return this._width;
                                },
                            }),
                            t.overrideProperty("height", {
                                get: function () {
                                    return this._height;
                                },
                            }),
                            t.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this.iframeEl;
                                },
                            }),
                            t.defineProperty("iframeEl", {
                                get: function () {
                                    return this._iframe;
                                },
                            }),
                            t.defineProperty("rootEl", {
                                get: function () {
                                    return this.doc && this.doc.documentElement;
                                },
                            }),
                            t.defineProperty("widgetEl", {
                                get: function () {
                                    return (
                                        this.doc &&
                                        this.doc.body.firstElementChild
                                    );
                                },
                            }),
                            t.defineProperty("win", {
                                get: function () {
                                    return (
                                        this.iframeEl &&
                                        this.iframeEl.contentWindow
                                    );
                                },
                            }),
                            t.defineProperty("doc", {
                                get: function () {
                                    return this.win && this.win.document;
                                },
                            }),
                            t.define("_updateCachedDimensions", function () {
                                var n = this;
                                return c.read(function () {
                                    var t,
                                        e = h(n.sandboxEl);
                                    "visible" == n.sandboxEl.style.visibility
                                        ? (n._width = e.width)
                                        : ((t = h(
                                              n.sandboxEl.parentElement
                                          ).width),
                                          (n._width = Math.min(e.width, t))),
                                        (n._height = e.height);
                                });
                            }),
                            t.define("_setTargetToBlank", function () {
                                var t = this.createElement("base");
                                (t.target = "_blank"),
                                    this.doc.head.appendChild(t);
                            }),
                            t.define("_didResize", function () {
                                var e = this,
                                    t = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(
                                    function () {
                                        t.forEach(function (t) {
                                            t(e);
                                        });
                                    }
                                );
                            }),
                            t.define("setTitle", function (t) {
                                this.iframeEl.title = t;
                            }),
                            t.override("createElement", function (t) {
                                return this.doc.createElement(t);
                            }),
                            t.override("createFragment", function () {
                                return this.doc.createDocumentFragment();
                            }),
                            t.override("htmlToElement", function (t) {
                                var e;
                                return (
                                    ((e = this.createElement("div")).innerHTML =
                                        t),
                                    e.firstElementChild
                                );
                            }),
                            t.override("hasSelectedText", function () {
                                return !!i.getSelectedText(this.win);
                            }),
                            t.override("addRootClass", function (t) {
                                var e = this.rootEl;
                                return (
                                    (t = Array.isArray(t) ? t : [t]),
                                    this.initialized
                                        ? c.write(function () {
                                              t.forEach(function (t) {
                                                  r.add(e, t);
                                              });
                                          })
                                        : m.reject(
                                              new Error(
                                                  "sandbox not initialized"
                                              )
                                          )
                                );
                            }),
                            t.override("removeRootClass", function (t) {
                                var e = this.rootEl;
                                return (
                                    (t = Array.isArray(t) ? t : [t]),
                                    this.initialized
                                        ? c.write(function () {
                                              t.forEach(function (t) {
                                                  r.remove(e, t);
                                              });
                                          })
                                        : m.reject(
                                              new Error(
                                                  "sandbox not initialized"
                                              )
                                          )
                                );
                            }),
                            t.override("hasRootClass", function (t) {
                                return r.present(this.rootEl, t);
                            }),
                            t.define("addStyleSheet", function (t, e) {
                                var n,
                                    r = new p();
                                return this.initialized
                                    ? (((n = this.createElement("link")).type =
                                          "text/css"),
                                      (n.rel = "stylesheet"),
                                      (n.href = t),
                                      n.addEventListener("load", r.resolve, !1),
                                      n.addEventListener("error", r.reject, !1),
                                      c.write(y(e, null, n)).then(function () {
                                          return (
                                              s(t).then(r.resolve, r.reject),
                                              r.promise
                                          );
                                      }))
                                    : m.reject(
                                          new Error("sandbox not initialized")
                                      );
                            }),
                            t.override("prependStyleSheet", function (t) {
                                var n = this.doc;
                                return this.addStyleSheet(t, function (t) {
                                    var e = n.head.firstElementChild;
                                    return e
                                        ? n.head.insertBefore(t, e)
                                        : n.head.appendChild(t);
                                });
                            }),
                            t.override("appendStyleSheet", function (t) {
                                var e = this.doc;
                                return this.addStyleSheet(t, function (t) {
                                    return e.head.appendChild(t);
                                });
                            }),
                            t.define("addCss", function (t, e) {
                                var n;
                                return a.inlineStyle()
                                    ? (((n = this.createElement("style")).type =
                                          "text/css"),
                                      n.appendChild(this.doc.createTextNode(t)),
                                      c.write(y(e, null, n)))
                                    : (f.devError(
                                          "CSP enabled; cannot embed inline styles"
                                      ),
                                      m.resolve());
                            }),
                            t.override("prependCss", function (t) {
                                var n = this.doc;
                                return this.addCss(t, function (t) {
                                    var e = n.head.firstElementChild;
                                    return e
                                        ? n.head.insertBefore(t, e)
                                        : n.head.appendChild(t);
                                });
                            }),
                            t.override("appendCss", function (t) {
                                var e = this.doc;
                                return this.addCss(t, function (t) {
                                    return e.head.appendChild(t);
                                });
                            }),
                            t.override("makeVisible", function () {
                                var t = this;
                                return this.styleSelf(E).then(function () {
                                    t._updateCachedDimensions();
                                });
                            }),
                            t.override("injectWidgetEl", function (t) {
                                var e = this;
                                return this.initialized
                                    ? this.widgetEl
                                        ? m.reject(
                                              new Error(
                                                  "widget already injected"
                                              )
                                          )
                                        : c.write(function () {
                                              e.doc.body.appendChild(t);
                                          })
                                    : m.reject(
                                          new Error("sandbox not initialized")
                                      );
                            }),
                            t.override("matchHeightToContent", function () {
                                var t,
                                    e = this;
                                return (
                                    c.read(function () {
                                        t = e.widgetEl
                                            ? h(e.widgetEl).height
                                            : 0;
                                    }),
                                    c
                                        .write(function () {
                                            e.sandboxEl.style.height = t + "px";
                                        })
                                        .then(function () {
                                            return e._updateCachedDimensions();
                                        })
                                );
                            }),
                            t.override("matchWidthToContent", function () {
                                var t,
                                    e = this;
                                return (
                                    c.read(function () {
                                        t = e.widgetEl
                                            ? h(e.widgetEl).width
                                            : 0;
                                    }),
                                    c
                                        .write(function () {
                                            e.sandboxEl.style.width = t + "px";
                                        })
                                        .then(function () {
                                            return e._updateCachedDimensions();
                                        })
                                );
                            }),
                            t.after("initialize", function () {
                                (this._iframe = null),
                                    (this._width = this._height = 0),
                                    (this._resizeHandlers = []);
                            }),
                            t.override("insert", function (t, e, n, r) {
                                var i = this,
                                    o = new p(),
                                    s = this.targetGlobal.document,
                                    a = x(t, e, n, s);
                                return (
                                    c.write(y(r, null, a)),
                                    a.addEventListener(
                                        "load",
                                        function () {
                                            (function (t) {
                                                try {
                                                    t.contentWindow.document;
                                                } catch (t) {
                                                    return m.reject(t);
                                                }
                                                return m.resolve(t);
                                            })(a)
                                                .then(
                                                    null,
                                                    y(T, null, t, e, n, a, s)
                                                )
                                                .then(o.resolve, o.reject);
                                        },
                                        !1
                                    ),
                                    a.addEventListener("error", o.reject, !1),
                                    o.promise.then(function (t) {
                                        var e = d(i._didResize, 50, i);
                                        return (
                                            (i._iframe = t),
                                            i.win.addEventListener(
                                                "resize",
                                                e,
                                                !1
                                            ),
                                            m.all([
                                                i._setTargetToBlank(),
                                                i.addRootClass("SandboxRoot"),
                                                i.prependCss(
                                                    ".SandboxRoot { display: none; }"
                                                ),
                                            ])
                                        );
                                    })
                                );
                            }),
                            t.override("onResize", function (t) {
                                this._resizeHandlers.push(t);
                            }),
                            t.after("styleSelf", function () {
                                return this._updateCachedDimensions();
                            });
                    });
                },
                function (t, e) {
                    t.exports = function () {
                        throw new Error("unimplemented method");
                    };
                },
                function (t, e, n) {
                    var r = n(2),
                        i = n(7);
                    function o(t, e) {
                        (this._inputsQueue = []),
                            (this._task = t),
                            (this._isPaused = !1),
                            (this._flushDelay = (e && e.flushDelay) || 100),
                            (this._pauseLength = (e && e.pauseLength) || 3e3),
                            (this._flushTimeout = void 0);
                    }
                    (o.prototype.add = function (t) {
                        var e = new r();
                        return (
                            this._inputsQueue.push({
                                input: t,
                                taskDoneDeferred: e,
                            }),
                            this._scheduleFlush(),
                            e.promise
                        );
                    }),
                        (o.prototype._scheduleFlush = function () {
                            this._isPaused ||
                                (clearTimeout(this._flushTimeout),
                                (this._flushTimeout = setTimeout(
                                    i(this._flush, this),
                                    this._flushDelay
                                )));
                        }),
                        (o.prototype._flush = function () {
                            try {
                                this._task.call(null, this._inputsQueue);
                            } catch (e) {
                                this._inputsQueue.forEach(function (t) {
                                    t.taskDoneDeferred.reject(e);
                                });
                            }
                            (this._inputsQueue = []),
                                (this._flushTimeout = void 0);
                        }),
                        (o.prototype.pause = function (t) {
                            clearTimeout(this._flushTimeout),
                                (this._isPaused = !0),
                                !t &&
                                    this._pauseLength &&
                                    setTimeout(
                                        i(this.resume, this),
                                        this._pauseLength
                                    );
                        }),
                        (o.prototype.resume = function () {
                            (this._isPaused = !1), this._scheduleFlush();
                        }),
                        (t.exports = o);
                },
                function (t, e, n) {
                    var r = n(73),
                        i = n(32),
                        o = n(2),
                        s = n(4),
                        a = n(20),
                        u = n(21),
                        c = n(25),
                        d = n(9),
                        l = n(12),
                        f = n(113),
                        h = n(61),
                        p = n(8),
                        m = n(11),
                        v = n(3),
                        g = n(0),
                        w = n(1),
                        y = h(function () {
                            return new o();
                        }),
                        b = { shouldObtainCookieConsent: !1, features: {} };
                    t.exports = {
                        load: function () {
                            var o, t;
                            if (
                                u.ie9() ||
                                u.ie10() ||
                                ("http:" !== d.protocol &&
                                    "https:" !== d.protocol)
                            )
                                return (
                                    l.devError(
                                        "Using default settings due to unsupported browser or protocol."
                                    ),
                                    void y().resolve()
                                );
                            (t = { origin: d.origin }),
                                -1 < a.settings().indexOf("localhost") &&
                                    (t.localSettings = !0),
                                (o = m.url(
                                    r.resourceBaseUrl + r.widgetIframeHtmlPath,
                                    t
                                )),
                                (t = function (t) {
                                    var e,
                                        n = v.isTwitterURL(t.origin),
                                        r =
                                            o.substr(0, t.origin.length) ===
                                            t.origin,
                                        i = v.isTwimgURL(t.origin);
                                    if ((r && n) || i)
                                        try {
                                            (e =
                                                "string" == typeof t.data
                                                    ? c.parse(t.data)
                                                    : t.data).namespace ===
                                                f.settings &&
                                                ((b = g.aug(b, {
                                                    features:
                                                        e.settings.features,
                                                    sessionId: e.sessionId,
                                                })),
                                                y().resolve());
                                        } catch (t) {
                                            l.devError(t);
                                        }
                                }),
                                w.addEventListener("message", t),
                                (t = i(
                                    {
                                        src: o,
                                        title: "Twitter settings iframe",
                                    },
                                    { display: "none" }
                                )),
                                s.body.appendChild(t);
                        },
                        settingsLoaded: function () {
                            var t,
                                e = p.get("experimentOverride");
                            return y().promise.then(function () {
                                return (
                                    e &&
                                        e.name &&
                                        e.assignment &&
                                        (((t = {})[e.name] = {
                                            bucket: e.assignment,
                                        }),
                                        (b.features = g.aug(b.features, t))),
                                    b
                                );
                            });
                        },
                    };
                },
                function (t, e) {
                    t.exports = { settings: "twttr.settings" };
                },
                function (t, e, n) {
                    t.exports = [
                        n(115),
                        n(121),
                        n(129),
                        n(131),
                        n(133),
                        n(150),
                        n(152),
                    ];
                },
                function (t, e, n) {
                    var c = n(11),
                        d = n(5),
                        l = n(0),
                        f = n(13),
                        r = n(14)(),
                        h = n(62);
                    t.exports = function (t) {
                        return r(t, "a.twitter-dm-button").map(function (t) {
                            return h(
                                ((n = (e = t).getAttribute(
                                    "data-show-screen-name"
                                )),
                                (r = f(e)),
                                (i = e.getAttribute("href")),
                                (o = e.getAttribute("data-screen-name")),
                                (s = n ? d.asBoolean(n) : null),
                                (a = e.getAttribute("data-size")),
                                (u = c.decodeURL(i)),
                                (n = u.recipient_id),
                                (i = e.getAttribute("data-text") || u.text),
                                (u =
                                    e.getAttribute("data-welcome-message-id") ||
                                    u.welcomeMessageId),
                                l.aug(r, {
                                    screenName: o,
                                    showScreenName: s,
                                    size: a,
                                    text: i,
                                    userId: n,
                                    welcomeMessageId: u,
                                })),
                                t.parentNode,
                                t
                            );
                            var e, n, r, i, o, s, a, u;
                        });
                    };
                },
                function (t, e, n) {
                    var r = n(0);
                    t.exports = function t(e) {
                        var n;
                        if (e)
                            return (
                                (n = e.lang || e.getAttribute("data-lang")),
                                r.isType("string", n) ? n : t(e.parentElement)
                            );
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            o
                                .e(2)
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(84)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var r = n(63),
                        n = n(26);
                    t.exports = r.isSupported() ? r : n;
                },
                function (t, e, n) {
                    var r = n(120),
                        i = n(1),
                        o = n(10),
                        a = n(36),
                        u = n(18),
                        s = n(58),
                        c = n(27),
                        d = n(59),
                        l = n(44),
                        f = n(48),
                        h = n(7),
                        p = n(45),
                        m = n(6),
                        v = n(0),
                        g = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block",
                            transform: "rotate(0deg)",
                        },
                        w = { position: "static", visibility: "visible" };
                    t.exports = c.couple(n(60), function (t) {
                        t.defineStatic("isSupported", function () {
                            return (
                                !!i.HTMLElement.prototype.attachShadow &&
                                l.inlineStyle()
                            );
                        }),
                            t.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id;
                                },
                            }),
                            t.overrideProperty("initialized", {
                                get: function () {
                                    return !!this._shadowHost;
                                },
                            }),
                            t.overrideProperty("width", {
                                get: function () {
                                    return this._width;
                                },
                            }),
                            t.overrideProperty("height", {
                                get: function () {
                                    return this._height;
                                },
                            }),
                            t.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this._shadowHost;
                                },
                            }),
                            t.define("_updateCachedDimensions", function () {
                                var n = this;
                                return u.read(function () {
                                    var t,
                                        e = f(n.sandboxEl);
                                    "visible" == n.sandboxEl.style.visibility
                                        ? (n._width = e.width)
                                        : ((t = f(
                                              n.sandboxEl.parentElement
                                          ).width),
                                          (n._width = Math.min(e.width, t))),
                                        (n._height = e.height);
                                });
                            }),
                            t.define("_didResize", function () {
                                var e = this,
                                    t = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(
                                    function () {
                                        t.forEach(function (t) {
                                            t(e);
                                        });
                                    }
                                );
                            }),
                            t.override("createElement", function (t) {
                                return this.targetGlobal.document.createElement(
                                    t
                                );
                            }),
                            t.override("createFragment", function () {
                                return this.targetGlobal.document.createDocumentFragment();
                            }),
                            t.override("htmlToElement", function (t) {
                                var e;
                                return (
                                    ((e = this.createElement("div")).innerHTML =
                                        t),
                                    e.firstElementChild
                                );
                            }),
                            t.override("hasSelectedText", function () {
                                return !!s.getSelectedText(this.targetGlobal);
                            }),
                            t.override("addRootClass", function (t) {
                                var e = this._shadowRootBody;
                                return (
                                    (t = Array.isArray(t) ? t : [t]),
                                    this.initialized
                                        ? u.write(function () {
                                              t.forEach(function (t) {
                                                  o.add(e, t);
                                              });
                                          })
                                        : m.reject(
                                              new Error(
                                                  "sandbox not initialized"
                                              )
                                          )
                                );
                            }),
                            t.override("removeRootClass", function (t) {
                                var e = this._shadowRootBody;
                                return (
                                    (t = Array.isArray(t) ? t : [t]),
                                    this.initialized
                                        ? u.write(function () {
                                              t.forEach(function (t) {
                                                  o.remove(e, t);
                                              });
                                          })
                                        : m.reject(
                                              new Error(
                                                  "sandbox not initialized"
                                              )
                                          )
                                );
                            }),
                            t.override("hasRootClass", function (t) {
                                return o.present(this._shadowRootBody, t);
                            }),
                            t.override("addStyleSheet", function (t, e) {
                                return this.addCss(
                                    '@import url("' + t + '");',
                                    e
                                ).then(function () {
                                    return d(t);
                                });
                            }),
                            t.override("prependStyleSheet", function (t) {
                                var n = this._shadowRoot;
                                return this.addStyleSheet(t, function (t) {
                                    var e = n.firstElementChild;
                                    return e
                                        ? n.insertBefore(t, e)
                                        : n.appendChild(t);
                                });
                            }),
                            t.override("appendStyleSheet", function (t) {
                                var e = this._shadowRoot;
                                return this.addStyleSheet(t, function (t) {
                                    return e.appendChild(t);
                                });
                            }),
                            t.override("addCss", function (t, e) {
                                var n;
                                return this.initialized
                                    ? l.inlineStyle()
                                        ? (((n =
                                              this.createElement(
                                                  "style"
                                              )).type = "text/css"),
                                          n.appendChild(
                                              this.targetGlobal.document.createTextNode(
                                                  t
                                              )
                                          ),
                                          u.write(h(e, null, n)))
                                        : m.resolve()
                                    : m.reject(
                                          new Error("sandbox not initialized")
                                      );
                            }),
                            t.override("prependCss", function (t) {
                                var n = this._shadowRoot;
                                return this.addCss(t, function (t) {
                                    var e = n.firstElementChild;
                                    return e
                                        ? n.insertBefore(t, e)
                                        : n.appendChild(t);
                                });
                            }),
                            t.override("appendCss", function (t) {
                                var e = this._shadowRoot;
                                return this.addCss(t, function (t) {
                                    return e.appendChild(t);
                                });
                            }),
                            t.override("makeVisible", function () {
                                return this.styleSelf(w);
                            }),
                            t.override("injectWidgetEl", function (t) {
                                var e = this;
                                return this.initialized
                                    ? this._shadowRootBody.firstElementChild
                                        ? m.reject(
                                              new Error(
                                                  "widget already injected"
                                              )
                                          )
                                        : u
                                              .write(function () {
                                                  e._shadowRootBody.appendChild(
                                                      t
                                                  );
                                              })
                                              .then(function () {
                                                  return e._updateCachedDimensions();
                                              })
                                              .then(function () {
                                                  var t = p(
                                                      e._didResize,
                                                      50,
                                                      e
                                                  );
                                                  new r(e._shadowRootBody, t);
                                              })
                                    : m.reject(
                                          new Error("sandbox not initialized")
                                      );
                            }),
                            t.override("matchHeightToContent", function () {
                                return m.resolve();
                            }),
                            t.override("matchWidthToContent", function () {
                                return m.resolve();
                            }),
                            t.override("insert", function (t, e, n, r) {
                                var i = this.targetGlobal.document,
                                    o = (this._shadowHost =
                                        i.createElement("twitter-widget")),
                                    s = (this._shadowRoot = o.attachShadow({
                                        mode: "open",
                                    })),
                                    i = (this._shadowRootBody =
                                        i.createElement("div"));
                                return (
                                    v.forIn(e || {}, function (t, e) {
                                        o.setAttribute(t, e);
                                    }),
                                    (o.id = t),
                                    s.appendChild(i),
                                    a.delegate(
                                        i,
                                        "click",
                                        "A",
                                        function (t, e) {
                                            e.hasAttribute("target") ||
                                                e.setAttribute(
                                                    "target",
                                                    "_blank"
                                                );
                                        }
                                    ),
                                    m.all([
                                        this.styleSelf(g),
                                        this.addRootClass("SandboxRoot"),
                                        this.prependCss(
                                            ".SandboxRoot { display: none; max-height: 10000px; }"
                                        ),
                                        u.write(r.bind(null, o)),
                                    ])
                                );
                            }),
                            t.override("onResize", function (t) {
                                this._resizeHandlers.push(t);
                            }),
                            t.after("initialize", function () {
                                (this._shadowHost =
                                    this._shadowRoot =
                                    this._shadowRootBody =
                                        null),
                                    (this._width = this._height = 0),
                                    (this._resizeHandlers = []);
                            }),
                            t.after("styleSelf", function () {
                                return this._updateCachedDimensions();
                            });
                    });
                },
                function (t, e) {
                    var a;
                    ((a = function (n, t) {
                        function e(t, e) {
                            if (t.resizedAttached) {
                                if (t.resizedAttached)
                                    return t.resizedAttached.add(e), 0;
                            } else
                                (t.resizedAttached = new (function () {
                                    var t, e;
                                    (this.q = []),
                                        (this.add = function (t) {
                                            this.q.push(t);
                                        }),
                                        (this.call = function () {
                                            for (
                                                t = 0, e = this.q.length;
                                                t < e;
                                                t++
                                            )
                                                this.q[t].call();
                                        });
                                })()),
                                    t.resizedAttached.add(e);
                            (t.resizeSensor = document.createElement("div")),
                                (t.resizeSensor.className = "resize-sensor");
                            var n =
                                    "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                                e =
                                    "position: absolute; left: 0; top: 0; transition: 0s;";
                            (t.resizeSensor.style.cssText = n),
                                (t.resizeSensor.innerHTML =
                                    '<div class="resize-sensor-expand" style="' +
                                    n +
                                    '"><div style="' +
                                    e +
                                    '"></div></div><div class="resize-sensor-shrink" style="' +
                                    n +
                                    '"><div style="' +
                                    e +
                                    ' width: 200%; height: 200%"></div></div>'),
                                t.appendChild(t.resizeSensor),
                                { fixed: 1, absolute: 1 }[
                                    ((n = "position"),
                                    (e = t).currentStyle
                                        ? e.currentStyle[n]
                                        : window.getComputedStyle
                                        ? window
                                              .getComputedStyle(e, null)
                                              .getPropertyValue(n)
                                        : e.style[n])
                                ] || (t.style.position = "relative");
                            var r,
                                i,
                                o = t.resizeSensor.childNodes[0],
                                s = o.childNodes[0],
                                a = t.resizeSensor.childNodes[1],
                                u =
                                    (a.childNodes[0],
                                    function () {
                                        (s.style.width =
                                            o.offsetWidth + 10 + "px"),
                                            (s.style.height =
                                                o.offsetHeight + 10 + "px"),
                                            (o.scrollLeft = o.scrollWidth),
                                            (o.scrollTop = o.scrollHeight),
                                            (a.scrollLeft = a.scrollWidth),
                                            (a.scrollTop = a.scrollHeight),
                                            (r = t.offsetWidth),
                                            (i = t.offsetHeight);
                                    });
                            u();
                            (e = function (t, e, n) {
                                t.attachEvent
                                    ? t.attachEvent("on" + e, n)
                                    : t.addEventListener(e, n);
                            }),
                                (n = function () {
                                    (t.offsetWidth == r &&
                                        t.offsetHeight == i) ||
                                        (t.resizedAttached &&
                                            t.resizedAttached.call()),
                                        u();
                                });
                            e(o, "scroll", n), e(a, "scroll", n);
                        }
                        var r = Object.prototype.toString.call(n),
                            i =
                                "[object Array]" === r ||
                                "[object NodeList]" === r ||
                                "[object HTMLCollection]" === r ||
                                ("undefined" != typeof jQuery &&
                                    n instanceof jQuery) ||
                                ("undefined" != typeof Elements &&
                                    n instanceof Elements);
                        if (i)
                            for (var o = 0, s = n.length; o < s; o++)
                                e(n[o], t);
                        else e(n, t);
                        this.detach = function () {
                            if (i)
                                for (var t = 0, e = n.length; t < e; t++)
                                    a.detach(n[t]);
                            else a.detach(n);
                        };
                    }).detach = function (t) {
                        t.resizeSensor &&
                            (t.removeChild(t.resizeSensor),
                            delete t.resizeSensor,
                            delete t.resizedAttached);
                    }),
                        void 0 !== t && void 0 !== t.exports
                            ? (t.exports = a)
                            : (window.ResizeSensor = a);
                },
                function (t, e, n) {
                    var i = n(3),
                        o = n(0),
                        s = n(13),
                        r = n(14)(),
                        a = n(64),
                        u = n(5);
                    t.exports = function (t) {
                        return r(t, "a.twitter-follow-button").map(function (
                            t
                        ) {
                            return a(
                                ((r = s((e = t))),
                                (e = {
                                    screenName: i.screenName(e.href),
                                    showScreenName:
                                        "false" !==
                                        e.getAttribute("data-show-screen-name"),
                                    showCount:
                                        "false" !==
                                        e.getAttribute("data-show-count"),
                                    size: e.getAttribute("data-size"),
                                    count: e.getAttribute("data-count"),
                                    preview: e.getAttribute("data-preview"),
                                }),
                                o.forIn(e, function (t, e) {
                                    var n = r[t];
                                    r[t] = u.hasValue(n) ? n : e;
                                }),
                                (r.screenName = r.screenName || r.screen_name),
                                r),
                                t.parentNode,
                                t
                            );
                            var e, r;
                        });
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            o
                                .e(3)
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(85)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var o = n(18),
                        r = n(124),
                        s = n(61),
                        a = n(32),
                        i = n(2),
                        u = n(6),
                        c = n(7),
                        d = n(0),
                        l = { allowfullscreen: "true" },
                        f = {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px",
                        },
                        h = { position: "static", visibility: "visible" },
                        p = {};
                    r(
                        function (t, e, n) {
                            var r = p[t];
                            if (r)
                                return (
                                    (e = e || 1),
                                    (n = n || 1),
                                    r
                                        .styleSelf({
                                            width: e + "px",
                                            height: n + "px",
                                        })
                                        .then(function () {
                                            r.didResize();
                                        })
                                );
                        },
                        function (t) {
                            t = p[t];
                            if (t) return t._results.resolve();
                        },
                        function (t) {
                            t = p[t];
                            if (t) return t._rendered.resolve();
                        },
                        function (t, e) {
                            t = p[t];
                            t && e && t.setIframeVersion(e);
                        },
                        function (t) {
                            t = p[t];
                            if (t) return t._results.reject();
                        }
                    ),
                        (t.exports = function (t) {
                            t.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id;
                                },
                            }),
                                t.overrideProperty("initialized", {
                                    get: function () {
                                        return !!this.iframeEl;
                                    },
                                }),
                                t.overrideProperty("width", {
                                    get: function () {
                                        return this._width;
                                    },
                                }),
                                t.overrideProperty("height", {
                                    get: function () {
                                        return this._height;
                                    },
                                }),
                                t.overrideProperty("sandboxEl", {
                                    get: function () {
                                        return this.iframeEl;
                                    },
                                }),
                                t.defineProperty("iframeEl", {
                                    get: function () {
                                        return this._iframe;
                                    },
                                }),
                                t.defineProperty("iframeVersion", {
                                    get: function () {
                                        return this._iframeVersion;
                                    },
                                }),
                                t.define("updateCachedDimensions", function () {
                                    var t = this;
                                    return this.initialized
                                        ? o.read(function () {
                                              (t._width =
                                                  t.sandboxEl.offsetWidth),
                                                  (t._height =
                                                      t.sandboxEl.offsetHeight);
                                          })
                                        : u.resolve();
                                }),
                                t.define("setTitle", function (t) {
                                    this.iframeEl.title = t;
                                }),
                                t.define(
                                    "setWaitToSwapUntilRendered",
                                    function (t) {
                                        this._waitToSwapUntilRendered = t;
                                    }
                                ),
                                t.define("setIframeVersion", function (t) {
                                    this._iframeVersion = t;
                                }),
                                t.define("getResultsPromise", function () {
                                    return this._results.promise;
                                }),
                                t.define("getRenderedPromise", function () {
                                    return this._rendered.promise;
                                }),
                                t.define("makeVisible", function () {
                                    return this.styleSelf(h);
                                }),
                                t.define("didResize", function () {
                                    var e = this,
                                        t = 0 < e._resizeHandlers.length;
                                    return this.updateCachedDimensions().then(
                                        function () {
                                            t &&
                                                e._resizeHandlers.forEach(
                                                    function (t) {
                                                        t(e);
                                                    }
                                                );
                                        }
                                    );
                                }),
                                t.define("loadDocument", function (t) {
                                    var e = new i();
                                    return this.initialized
                                        ? this.iframeEl.src
                                            ? u.reject(
                                                  new Error(
                                                      "widget already loaded"
                                                  )
                                              )
                                            : (this.iframeEl.addEventListener(
                                                  "load",
                                                  e.resolve,
                                                  !1
                                              ),
                                              this.iframeEl.addEventListener(
                                                  "error",
                                                  e.reject,
                                                  !1
                                              ),
                                              (this.iframeEl.src = t),
                                              e.promise)
                                        : u.reject(
                                              new Error(
                                                  "sandbox not initialized"
                                              )
                                          );
                                }),
                                t.after("initialize", function () {
                                    var t = new i(),
                                        e = new i();
                                    (this._iframe = null),
                                        (this._iframeVersion = null),
                                        (this._width = this._height = 0),
                                        (this._resizeHandlers = []),
                                        (this._rendered = t),
                                        (this._results = e),
                                        (this._waitToSwapUntilRendered = !1);
                                }),
                                t.override("insert", function (t, e, n, r) {
                                    var i = this;
                                    return (
                                        (e = d.aug({ id: t }, l, e)),
                                        (n = d.aug({}, f, n)),
                                        (this._iframe = a(e, n)),
                                        (p[t] = this),
                                        i._waitToSwapUntilRendered ||
                                            this.onResize(
                                                s(function () {
                                                    i.makeVisible();
                                                })
                                            ),
                                        o.write(c(r, null, this._iframe))
                                    );
                                }),
                                t.override("onResize", function (t) {
                                    this._resizeHandlers.push(t);
                                }),
                                t.after("styleSelf", function () {
                                    return this.updateCachedDimensions();
                                });
                        });
                },
                function (t, e, n) {
                    var a = n(1),
                        u = n(125),
                        c = n(127),
                        d = n(23),
                        l = n(5),
                        f = n(128);
                    t.exports = function (r, e, n, i, o) {
                        function t(t) {
                            var e = f(this);
                            d.trigger(t.type, {
                                target: e,
                                region: t.region,
                                type: t.type,
                                data: t.data || {},
                            });
                        }
                        function s(t) {
                            var e = f(this),
                                n = e && e.id,
                                e = l.asInt(t.width),
                                t = l.asInt(t.height);
                            n && void 0 !== e && void 0 !== t && r(n, e, t);
                        }
                        new u()
                            .attachReceiver(new c.Receiver(a, "twttr.button"))
                            .bind("twttr.private.trigger", t)
                            .bind("twttr.private.resizeButton", s),
                            new u()
                                .attachReceiver(
                                    new c.Receiver(a, "twttr.embed")
                                )
                                .bind(
                                    "twttr.private.initialized",
                                    function (t) {
                                        var e = f(this),
                                            e = e && e.id,
                                            t = t.iframe_version;
                                        e && t && i && i(e, t);
                                    }
                                )
                                .bind("twttr.private.trigger", t)
                                .bind("twttr.private.results", function () {
                                    var t = f(this),
                                        t = t && t.id;
                                    t && e && e(t);
                                })
                                .bind("twttr.private.rendered", function () {
                                    var t = f(this),
                                        t = t && t.id;
                                    t && n && n(t);
                                })
                                .bind("twttr.private.no_results", function () {
                                    var t = f(this),
                                        t = t && t.id;
                                    t && o && o(t);
                                })
                                .bind("twttr.private.resize", s);
                    };
                },
                function (t, e, n) {
                    var s = n(25),
                        a = n(126),
                        u = n(0),
                        c = n(6),
                        o = n(24);
                    function r(t) {
                        this.registry = t || {};
                    }
                    function d(t) {
                        var e = u.isType("string", t),
                            n = u.isType("number", t);
                        return e || n || null === t;
                    }
                    function l(t, e) {
                        return {
                            jsonrpc: "2.0",
                            id: d(t) ? t : null,
                            error: e,
                        };
                    }
                    (r.prototype._invoke = function (t, e) {
                        var n,
                            r = this.registry[t.method],
                            i = t.params || [];
                        i = u.isType("array", i) ? i : [i];
                        try {
                            n = r.apply(e.source || null, i);
                        } catch (t) {
                            n = c.reject(t.message);
                        }
                        return o.isPromise(n) ? n : c.resolve(n);
                    }),
                        (r.prototype._processRequest = function (e, t) {
                            var n, r, i;
                            return (
                                (n = e),
                                u.isObject(n) &&
                                ((r = "2.0" === n.jsonrpc),
                                (i = u.isType("string", n.method)),
                                (n = !("id" in n) || d(n.id)),
                                r && i && n)
                                    ? ((t =
                                          "params" in e &&
                                          ((n = e.params),
                                          !u.isObject(n) ||
                                              u.isType("function", n))
                                              ? c.resolve(
                                                    l(e.id, a.INVALID_PARAMS)
                                                )
                                              : this.registry[e.method]
                                              ? this._invoke(e, {
                                                    source: t,
                                                }).then(
                                                    function (t) {
                                                        return {
                                                            jsonrpc: "2.0",
                                                            id: e.id,
                                                            result: t,
                                                        };
                                                    },
                                                    function () {
                                                        return l(
                                                            e.id,
                                                            a.INTERNAL_ERROR
                                                        );
                                                    }
                                                )
                                              : c.resolve(
                                                    l(e.id, a.METHOD_NOT_FOUND)
                                                )),
                                      null != e.id ? t : c.resolve())
                                    : c.resolve(l(e.id, a.INVALID_REQUEST))
                            );
                        }),
                        (r.prototype.attachReceiver = function (t) {
                            return t.attachTo(this), this;
                        }),
                        (r.prototype.bind = function (t, e) {
                            return (this.registry[t] = e), this;
                        }),
                        (r.prototype.receive = function (t, e) {
                            var n,
                                r,
                                i,
                                o = this;
                            try {
                                (i = t),
                                    (t = u.isType("string", i)
                                        ? s.parse(i)
                                        : i);
                            } catch (t) {
                                return c.resolve(l(null, a.PARSE_ERROR));
                            }
                            return (
                                (e = e || null),
                                (r = ((n = u.isType("array", t)) ? t : [t]).map(
                                    function (t) {
                                        return o._processRequest(t, e);
                                    }
                                )),
                                n
                                    ? c.all(r).then(function (t) {
                                          return (t = t.filter(function (t) {
                                              return void 0 !== t;
                                          })).length
                                              ? t
                                              : void 0;
                                      })
                                    : r[0]
                            );
                        }),
                        (t.exports = r);
                },
                function (t) {
                    t.exports = {
                        PARSE_ERROR: { code: -32700, message: "Parse error" },
                        INVALID_REQUEST: {
                            code: -32600,
                            message: "Invalid Request",
                        },
                        INVALID_PARAMS: {
                            code: -32602,
                            message: "Invalid params",
                        },
                        METHOD_NOT_FOUND: {
                            code: -32601,
                            message: "Method not found",
                        },
                        INTERNAL_ERROR: {
                            code: -32603,
                            message: "Internal error",
                        },
                    };
                },
                function (t, e, n) {
                    var r = n(9),
                        i = n(1),
                        o = n(25),
                        s = n(2),
                        a = n(21),
                        u = n(0),
                        c = n(3),
                        d = n(7),
                        l = a.ie9();
                    function f(t, e, n) {
                        var r;
                        t &&
                            t.postMessage &&
                            (l
                                ? (r = (n || "") + o.stringify(e))
                                : n
                                ? ((r = {})[n] = e)
                                : (r = e),
                            t.postMessage(r, "*"));
                    }
                    function h(t) {
                        return u.isType("string", t) ? t : "JSONRPC";
                    }
                    function p(t, e) {
                        return e
                            ? u.isType("string", t) && 0 === t.indexOf(e)
                                ? t.substring(e.length)
                                : t && t[e]
                                ? t[e]
                                : void 0
                            : t;
                    }
                    function m(t, e) {
                        var n = t.document;
                        (this.filter = h(e)),
                            (this.server = null),
                            (this.isTwitterFrame = c.isTwitterURL(
                                n.location.href
                            )),
                            t.addEventListener(
                                "message",
                                d(this._onMessage, this),
                                !1
                            );
                    }
                    function v(t, e) {
                        (this.pending = {}),
                            (this.target = t),
                            (this.isTwitterHost = c.isTwitterURL(r.href)),
                            (this.filter = h(e)),
                            i.addEventListener(
                                "message",
                                d(this._onMessage, this),
                                !1
                            );
                    }
                    u.aug(m.prototype, {
                        _onMessage: function (e) {
                            var t,
                                n = this;
                            this.server &&
                                ((this.isTwitterFrame &&
                                    !c.isTwitterURL(e.origin)) ||
                                    ((t = p(e.data, this.filter)) &&
                                        this.server
                                            .receive(t, e.source)
                                            .then(function (t) {
                                                t && f(e.source, t, n.filter);
                                            })));
                        },
                        attachTo: function (t) {
                            this.server = t;
                        },
                        detach: function () {
                            this.server = null;
                        },
                    }),
                        u.aug(v.prototype, {
                            _processResponse: function (t) {
                                var e = this.pending[t.id];
                                e && (e.resolve(t), delete this.pending[t.id]);
                            },
                            _onMessage: function (t) {
                                var e;
                                if (
                                    (!this.isTwitterHost ||
                                        c.isTwitterURL(t.origin)) &&
                                    (e = p(t.data, this.filter))
                                ) {
                                    if (u.isType("string", e))
                                        try {
                                            e = o.parse(e);
                                        } catch (t) {
                                            return;
                                        }
                                    (e = u.isType("array", e)
                                        ? e
                                        : [e]).forEach(
                                        d(this._processResponse, this)
                                    );
                                }
                            },
                            send: function (t) {
                                var e = new s();
                                return (
                                    t.id
                                        ? (this.pending[t.id] = e)
                                        : e.resolve(),
                                    f(this.target, t, this.filter),
                                    e.promise
                                );
                            },
                        }),
                        (t.exports = {
                            Receiver: m,
                            Dispatcher: v,
                            _stringifyPayload: function (t) {
                                return 0 < arguments.length && (l = !!t), l;
                            },
                        });
                },
                function (t, e, n) {
                    var i = n(4);
                    t.exports = function (t) {
                        for (
                            var e, n = i.getElementsByTagName("iframe"), r = 0;
                            n[r];
                            r++
                        )
                            if ((e = n[r]).contentWindow === t) return e;
                    };
                },
                function (t, e, n) {
                    var i = n(5),
                        o = n(0),
                        s = n(3),
                        a = n(13),
                        r = n(14)(),
                        u = n(65);
                    t.exports = function (t) {
                        return r(t, "a.twitter-moment").map(function (t) {
                            return u(
                                ((r = a((e = t))),
                                (e = {
                                    momentId: s.momentId(e.href),
                                    chrome: e.getAttribute("data-chrome"),
                                    limit: e.getAttribute("data-limit"),
                                }),
                                o.forIn(e, function (t, e) {
                                    var n = r[t];
                                    r[t] = i.hasValue(n) ? n : e;
                                }),
                                r),
                                t.parentNode,
                                t
                            );
                            var e, r;
                        });
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            Promise.all([o.e(0), o.e(4)])
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(86)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var i = n(0),
                        o = n(13),
                        r = n(14)(),
                        s = n(66),
                        a =
                            /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
                    t.exports = function (t) {
                        return r(t, "a.periscope-on-air").map(function (t) {
                            return s(
                                ((n = o((e = t))),
                                (r = e.getAttribute("href")),
                                (e = e.getAttribute("data-size")),
                                (r = a.exec(r)[1]),
                                i.aug(n, { username: r, size: e })),
                                t.parentNode,
                                t
                            );
                            var e, n, r;
                        });
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            o
                                .e(5)
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(87)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var o = n(5),
                        s = n(0),
                        a = n(67),
                        u = n(13),
                        r = n(14)(),
                        c = n(68),
                        d = n(3),
                        l = n(12);
                    t.exports = function (t, i) {
                        return r(
                            t,
                            "a.twitter-timeline,div.twitter-timeline,a.twitter-grid"
                        ).map(function (t) {
                            return c(
                                ((n = u((e = t))),
                                (r = e.getAttribute("data-show-replies")),
                                (r = {
                                    isPreconfigured:
                                        !!e.getAttribute("data-widget-id"),
                                    chrome: e.getAttribute("data-chrome"),
                                    tweetLimit:
                                        e.getAttribute("data-tweet-limit") ||
                                        e.getAttribute("data-limit"),
                                    ariaLive:
                                        e.getAttribute("data-aria-polite"),
                                    theme: e.getAttribute("data-theme"),
                                    borderColor:
                                        e.getAttribute("data-border-color"),
                                    showReplies: r ? o.asBoolean(r) : null,
                                    profileScreenName:
                                        e.getAttribute("data-screen-name"),
                                    profileUserId:
                                        e.getAttribute("data-user-id"),
                                    favoritesScreenName: e.getAttribute(
                                        "data-favorites-screen-name"
                                    ),
                                    favoritesUserId: e.getAttribute(
                                        "data-favorites-user-id"
                                    ),
                                    likesScreenName: e.getAttribute(
                                        "data-likes-screen-name"
                                    ),
                                    likesUserId:
                                        e.getAttribute("data-likes-user-id"),
                                    listOwnerScreenName: e.getAttribute(
                                        "data-list-owner-screen-name"
                                    ),
                                    listOwnerUserId:
                                        e.getAttribute("data-list-owner-id"),
                                    listId: e.getAttribute("data-list-id"),
                                    listSlug: e.getAttribute("data-list-slug"),
                                    customTimelineId: e.getAttribute(
                                        "data-custom-timeline-id"
                                    ),
                                    staticContent: e.getAttribute(
                                        "data-static-content"
                                    ),
                                    url: e.href,
                                }).isPreconfigured &&
                                    (d.isSearchUrl(r.url)
                                        ? l.publicError(
                                              "Embedded Search timelines have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
                                              e
                                          )
                                        : l.publicLog(
                                              "You may have been affected by an update to settings in embedded timelines. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
                                              e
                                          )),
                                "twitter-grid" === e.className &&
                                    l.publicLog(
                                        "Embedded grids have been deprecated and will now render as timelines. Please update your embed code to use the twitter-timeline class. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.",
                                        e
                                    ),
                                ((r = s.aug(r, n)).dataSource = a(r)),
                                (r.id = r.dataSource && r.dataSource.id),
                                r),
                                t.parentNode,
                                t,
                                i
                            );
                            var e, n, r;
                        });
                    };
                },
                function (t, e, n) {
                    var r = n(28);
                    t.exports = r.build([n(29), n(137)]);
                },
                function (t, e, n) {
                    var r = n(0),
                        i = n(136);
                    t.exports = function (t) {
                        return "en" === t || r.contains(i, t);
                    };
                },
                function (t, e) {
                    t.exports = [
                        "hi",
                        "zh-cn",
                        "fr",
                        "zh-tw",
                        "msa",
                        "fil",
                        "fi",
                        "sv",
                        "pl",
                        "ja",
                        "ko",
                        "de",
                        "it",
                        "pt",
                        "es",
                        "ru",
                        "id",
                        "tr",
                        "da",
                        "no",
                        "nl",
                        "hu",
                        "fa",
                        "ar",
                        "ur",
                        "he",
                        "th",
                        "cs",
                        "uk",
                        "vi",
                        "ro",
                        "bn",
                        "el",
                        "en-gb",
                        "gu",
                        "kn",
                        "mr",
                        "ta",
                        "bg",
                        "ca",
                        "hr",
                        "sr",
                        "sk",
                    ];
                },
                function (t, e, n) {
                    var r = n(3),
                        i = n(0),
                        o = n(20),
                        s = n(49);
                    function a(t, e) {
                        return r.collectionId(t) || e;
                    }
                    t.exports = function (t) {
                        t.params({ id: {}, url: {} }),
                            t.overrideProperty("id", {
                                get: function () {
                                    return (
                                        "collection:" +
                                        a(this.params.url, this.params.id)
                                    );
                                },
                            }),
                            t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["collection"]);
                                },
                            }),
                            t.around("queryParams", function (t) {
                                return i.aug(t(), {
                                    collection_id: a(
                                        this.params.url,
                                        this.params.id
                                    ),
                                });
                            }),
                            t.before("initialize", function () {
                                if (!a(this.params.url, this.params.id))
                                    throw new Error(
                                        "one of url or id is required"
                                    );
                                s();
                            });
                    };
                },
                function (t, e, n) {
                    var r = n(28);
                    t.exports = r.build([n(29), n(139)]);
                },
                function (t, e, n) {
                    var r = n(3),
                        i = n(0),
                        o = n(20);
                    function s(t, e) {
                        return r.eventId(t) || e;
                    }
                    t.exports = function (t) {
                        t.params({ id: {}, url: {} }),
                            t.overrideProperty("id", {
                                get: function () {
                                    return (
                                        "event:" +
                                        s(this.params.url, this.params.id)
                                    );
                                },
                            }),
                            t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["event"]);
                                },
                            }),
                            t.around("queryParams", function (t) {
                                return i.aug(t(), {
                                    event_id: s(
                                        this.params.url,
                                        this.params.id
                                    ),
                                });
                            }),
                            t.before("initialize", function () {
                                if (!s(this.params.url, this.params.id))
                                    throw new Error(
                                        "one of url or id is required"
                                    );
                            });
                    };
                },
                function (t, e, n) {
                    var r = n(28);
                    t.exports = r.build([n(29), n(141)]);
                },
                function (t, e, n) {
                    var r = n(3),
                        i = n(0),
                        o = n(20),
                        s = n(49);
                    function a(t) {
                        return r.likesScreenName(t.url) || t.screenName;
                    }
                    t.exports = function (t) {
                        t.params({ screenName: {}, userId: {}, url: {} }),
                            t.overrideProperty("id", {
                                get: function () {
                                    return (
                                        "likes:" +
                                        (a(this.params) || this.params.userId)
                                    );
                                },
                            }),
                            t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["likes"]);
                                },
                            }),
                            t.define("_getLikesQueryParam", function () {
                                var t = a(this.params);
                                return t
                                    ? { screen_name: t }
                                    : { user_id: this.params.userId };
                            }),
                            t.around("queryParams", function (t) {
                                return i.aug(t(), this._getLikesQueryParam());
                            }),
                            t.before("initialize", function () {
                                if (!a(this.params) && !this.params.userId)
                                    throw new Error(
                                        "screen name or user id is required"
                                    );
                                s();
                            });
                    };
                },
                function (t, e, n) {
                    var r = n(28);
                    t.exports = r.build([n(29), n(143)]);
                },
                function (t, e, n) {
                    var r = n(3),
                        i = n(0),
                        o = n(20);
                    function s(t) {
                        t = r.listScreenNameAndSlug(t.url) || t;
                        return i.compact({
                            screen_name: t.ownerScreenName,
                            user_id: t.ownerUserId,
                            list_slug: t.slug,
                        });
                    }
                    t.exports = function (t) {
                        t.params({
                            id: {},
                            ownerScreenName: {},
                            ownerUserId: {},
                            slug: {},
                            url: {},
                        }),
                            t.overrideProperty("id", {
                                get: function () {
                                    var t, e;
                                    return this.params.id
                                        ? "list:" + this.params.id
                                        : ((e =
                                              (t = s(this.params)) &&
                                              t.list_slug.replace(/-/g, "_")),
                                          "list:" +
                                              (t &&
                                                  (t.screen_name ||
                                                      t.user_id)) +
                                              ":" +
                                              e);
                                },
                            }),
                            t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["list"]);
                                },
                            }),
                            t.define("_getListQueryParam", function () {
                                return this.params.id
                                    ? { list_id: this.params.id }
                                    : s(this.params);
                            }),
                            t.around("queryParams", function (t) {
                                return i.aug(t(), this._getListQueryParam());
                            }),
                            t.defineProperty("horizonEndpoint", {
                                get: function () {
                                    var t,
                                        e = ["timeline-list"];
                                    return (
                                        this.params.id
                                            ? e.push("list-id", this.params.id)
                                            : ((t = s(this.params)),
                                              e.push(
                                                  "screen-name",
                                                  t.screen_name,
                                                  "slug",
                                                  t.list_slug
                                              )),
                                        o.embedService(e)
                                    );
                                },
                            }),
                            t.before("initialize", function () {
                                var t = s(this.params);
                                if (i.isEmptyObject(t) && !this.params.id)
                                    throw new Error(
                                        "qualified slug or list id required"
                                    );
                            });
                    };
                },
                function (t, e, n) {
                    var r = n(28);
                    t.exports = r.build([n(29), n(145)]);
                },
                function (t, e, n) {
                    var r = n(3),
                        i = n(5),
                        o = n(0),
                        s = n(20);
                    function a(t, e) {
                        return r.screenName(t) || e;
                    }
                    t.exports = function (t) {
                        t.params({
                            showReplies: {
                                fallback: !1,
                                transform: i.asBoolean,
                            },
                            screenName: {},
                            userId: {},
                            url: {},
                        }),
                            t.overrideProperty("id", {
                                get: function () {
                                    return (
                                        "profile:" +
                                        (a(
                                            this.params.url,
                                            this.params.screenName
                                        ) || this.params.userId)
                                    );
                                },
                            }),
                            t.overrideProperty("endpoint", {
                                get: function () {
                                    return s.timeline(["profile"]);
                                },
                            }),
                            t.define("_getProfileQueryParam", function () {
                                var t = a(
                                        this.params.url,
                                        this.params.screenName
                                    ),
                                    t = t
                                        ? { screen_name: t }
                                        : { user_id: this.params.userId };
                                return o.aug(t, {
                                    with_replies: this.params.showReplies
                                        ? "true"
                                        : "false",
                                });
                            }),
                            t.around("queryParams", function (t) {
                                return o.aug(t(), this._getProfileQueryParam());
                            }),
                            t.defineProperty("horizonEndpoint", {
                                get: function () {
                                    var t = ["timeline-profile"],
                                        e = a(
                                            this.params.url,
                                            this.params.screenName
                                        );
                                    return (
                                        e
                                            ? t.push("screen-name", e)
                                            : t.push(
                                                  "user-id",
                                                  this.params.userId
                                              ),
                                        s.embedService(t)
                                    );
                                },
                            }),
                            t.around("horizonQueryParams", function (t) {
                                return o.aug(t(), {
                                    showReplies: this.params.showReplies
                                        ? "true"
                                        : "false",
                                });
                            }),
                            t.before("initialize", function () {
                                if (
                                    !a(
                                        this.params.url,
                                        this.params.screenName
                                    ) &&
                                    !this.params.userId
                                )
                                    throw new Error(
                                        "screen name or user id is required"
                                    );
                            });
                    };
                },
                function (t, e) {
                    var n = {
                        collection: "collection",
                        moment: "moment",
                        event: "event",
                        likes: "likes",
                        list: "list",
                        profile: "profile",
                    };
                    t.exports = {
                        get: function (t) {
                            return (
                                !!t &&
                                ((t = t.slice(0, t.indexOf(":"))),
                                -1 !== Object.keys(n).indexOf(t) && t)
                            );
                        },
                        DATASOURCE_MAP: n,
                    };
                },
                function (t, e, n) {
                    var o = n(75),
                        s = n(37),
                        a = n(31);
                    t.exports = function (r, i) {
                        return a.getHorizonSettings().then(function (t) {
                            var e,
                                n = t.features,
                                t = t.sessionId;
                            n &&
                                (e = n[s.HORIZON_TIMELINE_EXP_KEY]) &&
                                e.bucket &&
                                s.isHorizonTimelineVariantSupported(r) &&
                                s.isHorizonLangSupported(i) &&
                                o(
                                    s.HORIZON_TIMELINE_EXP_KEY,
                                    e.bucket,
                                    e.version,
                                    {},
                                    t
                                );
                        });
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            o
                                .e(6)
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(88)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            Promise.all([o.e(0), o.e(7)])
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(89)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var c = n(10),
                        d = n(3),
                        l = n(0),
                        f = n(13),
                        r = n(14)(),
                        h = n(69),
                        p = /\btw-align-(left|right|center)\b/;
                    t.exports = function (t, u) {
                        return r(
                            t,
                            "blockquote.twitter-tweet, blockquote.twitter-video"
                        ).map(function (t) {
                            return h(
                                ((n = f((e = t))),
                                (r = e.getElementsByTagName("A")),
                                (i = r && r[r.length - 1]),
                                (o = i && d.status(i.href)),
                                (s = e.getAttribute("data-conversation")),
                                (a =
                                    "none" == s ||
                                    "hidden" == s ||
                                    c.present(e, "tw-hide-thread")),
                                (r = e.getAttribute("data-cards")),
                                (i =
                                    "none" == r ||
                                    "hidden" == r ||
                                    c.present(e, "tw-hide-media")),
                                (s =
                                    e.getAttribute("data-align") ||
                                    e.getAttribute("align")),
                                (r = e.getAttribute("data-theme")),
                                !s && p.test(e.className) && (s = RegExp.$1),
                                l.aug(n, {
                                    tweetId: o,
                                    hideThread: a,
                                    hideCard: i,
                                    align: s,
                                    theme: r,
                                    id: o,
                                })),
                                t.parentNode,
                                t,
                                u
                            );
                            var e, n, r, i, o, s, a;
                        });
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            o
                                .e(8)
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(90)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var i = n(10),
                        o = n(0),
                        s = n(13),
                        r = n(14)(),
                        a = n(70),
                        u = n(5);
                    t.exports = function (t) {
                        return r(
                            t,
                            "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button"
                        ).map(function (t) {
                            return a(
                                ((r = s((e = t))),
                                (n = {
                                    screenName: e.getAttribute(
                                        "data-button-screen-name"
                                    ),
                                    text: e.getAttribute("data-text"),
                                    type: e.getAttribute("data-type"),
                                    size: e.getAttribute("data-size"),
                                    url: e.getAttribute("data-url"),
                                    hashtags: e.getAttribute("data-hashtags"),
                                    via: e.getAttribute("data-via"),
                                    buttonHashtag: e.getAttribute(
                                        "data-button-hashtag"
                                    ),
                                }),
                                o.forIn(n, function (t, e) {
                                    var n = r[t];
                                    r[t] = u.hasValue(n) ? n : e;
                                }),
                                (r.screenName = r.screenName || r.screen_name),
                                (r.buttonHashtag =
                                    r.buttonHashtag ||
                                    r.button_hashtag ||
                                    r.hashtag),
                                i.present(e, "twitter-hashtag-button") &&
                                    (r.type = "hashtag"),
                                i.present(e, "twitter-mention-button") &&
                                    (r.type = "mention"),
                                r),
                                t.parentNode,
                                t
                            );
                            var e, r, n;
                        });
                    };
                },
                function (t, e, o) {
                    var s = o(2);
                    t.exports = function (n, r) {
                        var i = new s();
                        return (
                            o
                                .e(3)
                                .then(
                                    function (t) {
                                        var e;
                                        try {
                                            (e = o(91)), i.resolve(new e(n, r));
                                        } catch (t) {
                                            i.reject(t);
                                        }
                                    }.bind(null, o)
                                )
                                .catch(function (t) {
                                    i.reject(t);
                                }),
                            i.promise
                        );
                    };
                },
                function (t, e, n) {
                    var r = n(0);
                    t.exports = r.aug(
                        {},
                        n(155),
                        n(156),
                        n(157),
                        n(158),
                        n(159),
                        n(160),
                        n(161)
                    );
                },
                function (t, e, n) {
                    var r = n(62),
                        r = n(17)(["userId"], {}, r);
                    t.exports = { createDMButton: r };
                },
                function (t, e, n) {
                    var r = n(64),
                        r = n(17)(["screenName"], {}, r);
                    t.exports = { createFollowButton: r };
                },
                function (t, e, n) {
                    var r = n(65),
                        r = n(17)(["momentId"], {}, r);
                    t.exports = { createMoment: r };
                },
                function (t, e, n) {
                    var r = n(66),
                        r = n(17)(["username"], {}, r);
                    t.exports = { createPeriscopeOnAirButton: r };
                },
                function (t, e, n) {
                    var r = n(9),
                        i = n(12),
                        o = n(3),
                        s = n(0),
                        a = n(5),
                        u = n(67),
                        c = n(68),
                        d = n(17)([], {}, c),
                        l = n(6),
                        n = {
                            createTimeline: f,
                            createGridFromCollection: function (t) {
                                var e = s.toRealArray(arguments).slice(1),
                                    n = { sourceType: "collection", id: t };
                                return (
                                    e.unshift(n),
                                    i.publicLog(
                                        "Embedded grids have been deprecated. Please use twttr.widgets.createTimeline instead. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564."
                                    ),
                                    f.apply(this, e)
                                );
                            },
                        };
                    function f(t) {
                        var e,
                            n = s.toRealArray(arguments).slice(1);
                        return a.isString(t) || a.isNumber(t)
                            ? l.reject(
                                  "Embedded timelines with widget settings have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295."
                              )
                            : s.isObject(t)
                            ? ((t = t || {}),
                              n.forEach(function (t) {
                                  s.isType("object", t) &&
                                      ((t = e = t).ariaLive = t.ariaPolite);
                              }),
                              e || ((e = {}), n.push(e)),
                              (t.lang = e.lang),
                              (t.tweetLimit = e.tweetLimit),
                              (t.showReplies = e.showReplies),
                              (e.dataSource = u(t)),
                              d.apply(this, n))
                            : l.reject("data source must be an object.");
                    }
                    o.isTwitterURL(r.href) &&
                        (n.createTimelinePreview = function (t, e, n) {
                            t = {
                                previewParams: t,
                                useLegacyDefaults: !0,
                                isPreviewTimeline: !0,
                            };
                            return (t.dataSource = u(t)), d(e, t, n);
                        }),
                        (t.exports = n);
                },
                function (t, e, n) {
                    var r,
                        i = n(0),
                        o = n(69),
                        n = n(17),
                        o =
                            ((r = n(["tweetId"], {}, o)),
                            function () {
                                return (
                                    i
                                        .toRealArray(arguments)
                                        .slice(1)
                                        .forEach(function (t) {
                                            i.isType("object", t) &&
                                                ((t.hideCard =
                                                    "none" == t.cards ||
                                                    "hidden" == t.cards),
                                                (t.hideThread =
                                                    "none" == t.conversation ||
                                                    "hidden" ==
                                                        t.conversation));
                                        }),
                                    r.apply(this, arguments)
                                );
                            });
                    t.exports = {
                        createTweet: o,
                        createTweetEmbed: o,
                        createVideo: o,
                    };
                },
                function (t, e, n) {
                    var r = n(0),
                        i = n(70),
                        o = n(17),
                        s = o(["url"], { type: "share" }, i),
                        n = o(["buttonHashtag"], { type: "hashtag" }, i),
                        i = o(["screenName"], { type: "mention" }, i);
                    function a(t) {
                        return function () {
                            return (
                                r
                                    .toRealArray(arguments)
                                    .slice(1)
                                    .forEach(function (t) {
                                        r.isType("object", t) &&
                                            ((t.screenName =
                                                t.screenName || t.screen_name),
                                            (t.buttonHashtag =
                                                t.buttonHashtag ||
                                                t.button_hashtag ||
                                                t.hashtag));
                                    }),
                                t.apply(this, arguments)
                            );
                        };
                    }
                    t.exports = {
                        createShareButton: a(s),
                        createHashtagButton: a(n),
                        createMentionButton: a(i),
                    };
                },
                function (t, e, n) {
                    var r,
                        i,
                        o,
                        s = n(4),
                        a = n(1),
                        u = 0,
                        c = [],
                        d = s.createElement("a");
                    function l() {
                        var t, e;
                        for (u = 1, t = 0, e = c.length; t < e; t++) c[t]();
                    }
                    /^loade|c/.test(s.readyState) && (u = 1),
                        s.addEventListener &&
                            s.addEventListener(
                                "DOMContentLoaded",
                                (i = function () {
                                    s.removeEventListener(
                                        "DOMContentLoaded",
                                        i,
                                        !1
                                    ),
                                        l();
                                }),
                                !1
                            ),
                        d.doScroll &&
                            s.attachEvent(
                                "onreadystatechange",
                                (r = function () {
                                    /^c/.test(s.readyState) &&
                                        (s.detachEvent("onreadystatechange", r),
                                        l());
                                })
                            ),
                        (o = d.doScroll
                            ? function (e) {
                                  a.self != a.top
                                      ? u
                                          ? e()
                                          : c.push(e)
                                      : (function () {
                                            try {
                                                d.doScroll("left");
                                            } catch (t) {
                                                return setTimeout(function () {
                                                    o(e);
                                                }, 50);
                                            }
                                            e();
                                        })();
                              }
                            : function (t) {
                                  u ? t() : c.push(t);
                              }),
                        (t.exports = o);
                },
                function (t, e, n) {
                    var r = n(47),
                        i = n(8);
                    t.exports = function () {
                        i.set("buildVersion", r.version);
                    };
                },
                function (t, e, n) {
                    n(165), n(168), n(169);
                },
                function (t, e, n) {
                    var r = n(166),
                        i = n(30),
                        o = n(71),
                        s = new r(),
                        a = function (t) {
                            t.widgets &&
                                1 === t.widgets.length &&
                                (s.start(),
                                i.emitter.unbind(
                                    i.ALL_WIDGETS_RENDER_START,
                                    a
                                ));
                        },
                        u = function (t) {
                            t.widgets &&
                                1 === t.widgets.length &&
                                ((t = t.widgets[0]),
                                s.end(),
                                t.dataset &&
                                    t.dataset.tweetId &&
                                    o({
                                        duration: s.duration(),
                                        namespace: {
                                            element: "tweet",
                                            action: "render",
                                        },
                                        widgetIds: [t.dataset.tweetId],
                                    })),
                                i.emitter.unbind(i.ALL_WIDGETS_RENDER_END, u);
                        };
                    i.emitter.bind(i.ALL_WIDGETS_RENDER_START, a),
                        i.emitter.bind(i.ALL_WIDGETS_RENDER_END, u);
                },
                function (t, e, n) {
                    var r = n(167);
                    function i() {}
                    (i.prototype.start = function () {
                        this._startTime = r();
                    }),
                        (i.prototype.end = function () {
                            this._duration = r() - this._startTime;
                        }),
                        (i.prototype.duration = function () {
                            return this._duration;
                        }),
                        (t.exports = i);
                },
                function (t, e, n) {
                    var r = n(1);
                    t.exports = function () {
                        return (
                            r.performance && r.performance.now
                                ? r.performance
                                : Date
                        ).now();
                    };
                },
                function (t, e, n) {
                    var r,
                        i = n(30),
                        o = 0;
                    function s() {
                        r &&
                            r.length === o &&
                            (i.emitter.trigger(
                                i.ALL_WIDGETS_AND_IMAGES_LOADED,
                                r
                            ),
                            (r = null));
                    }
                    i.emitter.bind(i.ALL_WIDGETS_RENDER_END, function (t) {
                        (r = t.widgets), s();
                    }),
                        (t.exports = {
                            reportImagesLoadForAWidget: function () {
                                o++, s();
                            },
                        });
                },
                function (t, e, n) {
                    var r = n(30),
                        o = n(71),
                        s = n(170),
                        i = n(3),
                        a = n(1),
                        u = n(0),
                        c = n(21),
                        d = n(63);
                    function l(t) {
                        return t.performance
                            .getEntriesByType("resource")
                            .filter(function (t) {
                                return (
                                    i.isTwimgURL(t.name) ||
                                    i.isTwitterURL(t.name)
                                );
                            })
                            .reduce(function (t, e) {
                                return (t[e.name] = e.duration), t;
                            }, {});
                    }
                    r.emitter.bind(
                        r.ALL_WIDGETS_AND_IMAGES_LOADED,
                        function (t) {
                            var e,
                                i,
                                n = [];
                            c.hasPerformanceInformation() &&
                                ((e = l(a)),
                                d.isSupported() ||
                                    (n = t.reduce(function (t, e) {
                                        return u.aug(
                                            t,
                                            l(e.contentDocument.defaultView)
                                        );
                                    }, {})),
                                (i = u.aug({}, e, n)),
                                Object.keys(s).forEach(function (t) {
                                    var n, e, r;
                                    (n = i),
                                        (r = s[(e = t)]),
                                        (t = Object.keys(n).reduce(function (
                                            t,
                                            e
                                        ) {
                                            return r(e) ? t + n[e] : t;
                                        },
                                        0)),
                                        o({
                                            duration: t,
                                            namespace: {
                                                element: e,
                                                action: "resource",
                                            },
                                        });
                                }));
                        }
                    );
                },
                function (t, e, n) {
                    var r = n(3),
                        n = {
                            all: function () {
                                return !0;
                            },
                            image: function (t) {
                                return r.isTwimgURL(t);
                            },
                            settings: function (t) {
                                return r.isSettingsURL(t);
                            },
                            widget_iframe: function (t) {
                                return r.isWidgetIframeURL(t);
                            },
                        };
                    t.exports = n;
                },
            ])));
