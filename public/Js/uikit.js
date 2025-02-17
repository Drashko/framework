/*! UIkit 3.8.0 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define("uikit", e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).UIkit = e());
})(this, function () {
    "use strict";
    var t = Object.prototype,
        n = t.hasOwnProperty;
    function c(t, e) {
        return n.call(t, e);
    }
    var e = /\B([A-Z])/g,
        d = rt(function (t) {
            return t.replace(e, "-$1").toLowerCase();
        }),
        i = /-(\w)/g,
        f = rt(function (t) {
            return t.replace(i, r);
        }),
        p = rt(function (t) {
            return t.length ? r(0, t.charAt(0)) + t.slice(1) : "";
        });
    function r(t, e) {
        return e ? e.toUpperCase() : "";
    }
    var o = String.prototype,
        s =
            o.startsWith ||
            function (t) {
                return 0 === this.lastIndexOf(t, 0);
            };
    function g(t, e) {
        return s.call(t, e);
    }
    var a =
        o.endsWith ||
        function (t) {
            return this.substr(-t.length) === t;
        };
    function u(t, e) {
        return a.call(t, e);
    }
    var h = Array.prototype,
        l = function (t, e) {
            return !!~this.indexOf(t, e);
        },
        m = o.includes || l,
        v = h.includes || l;
    function w(t, e) {
        return t && (N(t) ? m : v).call(t, e);
    }
    var b =
        h.findIndex ||
        function (t) {
            for (var e = arguments, n = 0; n < this.length; n++) if (t.call(e[1], this[n], n, this)) return n;
            return -1;
        };
    function x(t, e) {
        return b.call(t, e);
    }
    var y = Array.isArray;
    function k(t) {
        return "function" == typeof t;
    }
    function $(t) {
        return null !== t && "object" == typeof t;
    }
    var S = t.toString;
    function I(t) {
        return "[object Object]" === S.call(t);
    }
    function E(t) {
        return $(t) && t === t.window;
    }
    function T(t) {
        return 9 === A(t);
    }
    function C(t) {
        return 1 <= A(t);
    }
    function _(t) {
        return 1 === A(t);
    }
    function A(t) {
        return !E(t) && $(t) && t.nodeType;
    }
    function M(t) {
        return "boolean" == typeof t;
    }
    function N(t) {
        return "string" == typeof t;
    }
    function z(t) {
        return "number" == typeof t;
    }
    function D(t) {
        return z(t) || (N(t) && !isNaN(t - parseFloat(t)));
    }
    function B(t) {
        return !(y(t) ? t.length : $(t) && Object.keys(t).length);
    }
    function O(t) {
        return void 0 === t;
    }
    function P(t) {
        return M(t) ? t : "true" === t || "1" === t || "" === t || ("false" !== t && "0" !== t && t);
    }
    function H(t) {
        t = Number(t);
        return !isNaN(t) && t;
    }
    function L(t) {
        return parseFloat(t) || 0;
    }
    var F =
        Array.from ||
        function (t) {
            return h.slice.call(t);
        };
    function j(t) {
        return W(t)[0];
    }
    function W(t) {
        return (t && (C(t) ? [t] : F(t).filter(C))) || [];
    }
    function V(t) {
        return E(t) ? t : (t = j(t)) ? (T(t) ? t : t.ownerDocument).defaultView : window;
    }
    function R(t) {
        return t ? (u(t, "ms") ? L(t) : 1e3 * L(t)) : 0;
    }
    function q(t, n) {
        return (
            t === n ||
            ($(t) &&
                $(n) &&
                Object.keys(t).length === Object.keys(n).length &&
                X(t, function (t, e) {
                    return t === n[e];
                }))
        );
    }
    function U(t, e, n) {
        return t.replace(new RegExp(e + "|" + n, "g"), function (t) {
            return t === e ? n : e;
        });
    }
    var Y =
        Object.assign ||
        function (t) {
            for (var e = [], n = arguments.length - 1; 0 < n--; ) e[n] = arguments[n + 1];
            t = Object(t);
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                if (null !== r) for (var o in r) c(r, o) && (t[o] = r[o]);
            }
            return t;
        };
    function G(t) {
        return t[t.length - 1];
    }
    function X(t, e) {
        for (var n in t) if (!1 === e(t[n], n)) return !1;
        return !0;
    }
    function K(t, n) {
        return t.slice().sort(function (t, e) {
            (t = t[n]), (e = e[n]);
            return (e = void 0 === e ? 0 : e) < (t = void 0 === t ? 0 : t) ? 1 : t < e ? -1 : 0;
        });
    }
    function J(t, e) {
        var n = new Set();
        return t.filter(function (t) {
            t = t[e];
            return !n.has(t) && (n.add(t) || !0);
        });
    }
    function Z(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(H(t) || 0, e), n);
    }
    function Q() {}
    function tt() {
        for (var i = [], t = arguments.length; t--; ) i[t] = arguments[t];
        return [
            ["bottom", "top"],
            ["right", "left"],
        ].every(function (t) {
            var e = t[0],
                n = t[1];
            return (
                0 <
                Math.min.apply(
                    Math,
                    i.map(function (t) {
                        return t[e];
                    })
                ) -
                Math.max.apply(
                    Math,
                    i.map(function (t) {
                        return t[n];
                    })
                )
            );
        });
    }
    function et(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    var nt = {
        ratio: function (t, e, n) {
            var i = "width" === e ? "height" : "width",
                r = {};
            return (r[i] = t[e] ? Math.round((n * t[i]) / t[e]) : t[i]), (r[e] = n), r;
        },
        contain: function (n, i) {
            var r = this;
            return (
                X((n = Y({}, n)), function (t, e) {
                    return (n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n);
                }),
                    n
            );
        },
        cover: function (n, i) {
            var r = this;
            return (
                X((n = this.contain(n, i)), function (t, e) {
                    return (n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n);
                }),
                    n
            );
        },
    };
    function it(t, e, n, i) {
        void 0 === n && (n = 0), void 0 === i && (i = !1);
        var r = (e = W(e)).length;
        return (t = D(t) ? H(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : e.indexOf(j(t))), i ? Z(t, 0, r - 1) : (t %= r) < 0 ? t + r : t;
    }
    function rt(e) {
        var n = Object.create(null);
        return function (t) {
            return n[t] || (n[t] = e(t));
        };
    }
    function ot(t, e, n) {
        if ($(e)) for (var i in e) ot(t, i, e[i]);
        else {
            if (O(n)) return (t = j(t)) && t.getAttribute(e);
            W(t).forEach(function (t) {
                null === (n = k(n) ? n.call(t, ot(t, e)) : n) ? at(t, e) : t.setAttribute(e, n);
            });
        }
    }
    function st(t, e) {
        return W(t).some(function (t) {
            return t.hasAttribute(e);
        });
    }
    function at(t, e) {
        (t = W(t)),
            e.split(" ").forEach(function (e) {
                return t.forEach(function (t) {
                    return t.hasAttribute(e) && t.removeAttribute(e);
                });
            });
    }
    function ut(t, e) {
        for (var n = 0, i = [e, "data-" + e]; n < i.length; n++) if (st(t, i[n])) return ot(t, i[n]);
    }
    var ct = "undefined" != typeof window,
        ht = ct && /msie|trident/i.test(window.navigator.userAgent),
        lt = ct && "rtl" === ot(document.documentElement, "dir"),
        dt = ct && "ontouchstart" in window,
        ft = ct && window.PointerEvent,
        pt = ct && (dt || (window.DocumentTouch && document instanceof DocumentTouch) || navigator.maxTouchPoints),
        mt = ft ? "pointerdown" : dt ? "touchstart" : "mousedown",
        gt = ft ? "pointermove" : dt ? "touchmove" : "mousemove",
        vt = ft ? "pointerup" : dt ? "touchend" : "mouseup",
        wt = ft ? "pointerenter" : dt ? "" : "mouseenter",
        bt = ft ? "pointerleave" : dt ? "" : "mouseleave",
        xt = ft ? "pointercancel" : "touchcancel",
        yt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, menuitem: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
    function kt(t) {
        return W(t).some(function (t) {
            return yt[t.tagName.toLowerCase()];
        });
    }
    function $t(t) {
        return W(t).some(function (t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
        });
    }
    var St = "input,select,textarea,button";
    function It(t) {
        return W(t).some(function (t) {
            return Nt(t, St);
        });
    }
    var Et = St + ",a[href],[tabindex]";
    function Tt(t) {
        return Nt(t, Et);
    }
    function Ct(t) {
        return (t = j(t)) && _(t.parentNode) && t.parentNode;
    }
    function _t(t, e) {
        return W(t).filter(function (t) {
            return Nt(t, e);
        });
    }
    var At = ct ? Element.prototype : {},
        Mt = At.matches || At.webkitMatchesSelector || At.msMatchesSelector || Q;
    function Nt(t, e) {
        return W(t).some(function (t) {
            return Mt.call(t, e);
        });
    }
    var zt =
        At.closest ||
        function (t) {
            var e = this;
            do {
                if (Nt(e, t)) return e;
            } while ((e = Ct(e)));
        };
    function Dt(t, e) {
        return (
            g(e, ">") && (e = e.slice(1)),
                _(t)
                    ? zt.call(t, e)
                    : W(t)
                        .map(function (t) {
                            return Dt(t, e);
                        })
                        .filter(Boolean)
        );
    }
    function Bt(t, e) {
        return N(e) ? Nt(t, e) || !!Dt(t, e) : t === e || (T(e) ? e.documentElement : j(e)).contains(j(t));
    }
    function Ot(t, e) {
        for (var n = []; (t = Ct(t)); ) (e && !Nt(t, e)) || n.push(t);
        return n;
    }
    function Pt(t, e) {
        t = (t = j(t)) ? W(t.children) : [];
        return e ? _t(t, e) : t;
    }
    function Ht(t, e) {
        return e ? W(t).indexOf(j(e)) : Pt(Ct(t)).indexOf(t);
    }
    function Lt(t, e) {
        return Wt(t, jt(t, e));
    }
    function Ft(t, e) {
        return Vt(t, jt(t, e));
    }
    function jt(t, e) {
        return void 0 === e && (e = document), (N(t) && Yt(t)) || T(e) ? e : e.ownerDocument;
    }
    function Wt(t, e) {
        return j(Rt(t, e, "querySelector"));
    }
    function Vt(t, e) {
        return W(Rt(t, e, "querySelectorAll"));
    }
    function Rt(t, r, e) {
        if ((void 0 === r && (r = document), !t || !N(t))) return t;
        (t = t.replace(Ut, "$1 *")),
        Yt(t) &&
        ((t = Xt(t)
            .map(function (t) {
                var e,
                    n,
                    i = r;
                return (
                    "!" === t[0] && ((n = t.substr(1).trim().split(" ")), (i = Dt(Ct(r), n[0])), (t = n.slice(1).join(" ").trim())),
                    "-" === t[0] && ((e = t.substr(1).trim().split(" ")), (i = Nt((n = (i || r).previousElementSibling), t.substr(1)) ? n : null), (t = e.slice(1).join(" "))),
                        i
                            ? (function (t) {
                                var e = [];
                                for (; t.parentNode; ) {
                                    if (t.id) {
                                        e.unshift("#" + Jt(t.id));
                                        break;
                                    }
                                    var n = t.tagName;
                                    "HTML" !== n && (n += ":nth-child(" + (Ht(t) + 1) + ")"), e.unshift(n), (t = t.parentNode);
                                }
                                return e.join(" > ");
                            })(i) +
                            " " +
                            t
                            : null
                );
            })
            .filter(Boolean)
            .join(",")),
            (r = document));
        try {
            return r[e](t);
        } catch (t) {
            return null;
        }
    }
    var qt = /(^|[^\\],)\s*[!>+~-]/,
        Ut = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        Yt = rt(function (t) {
            return t.match(qt);
        }),
        Gt = /.*?[^\\](?:,|$)/g,
        Xt = rt(function (t) {
            return t.match(Gt).map(function (t) {
                return t.replace(/,$/, "").trim();
            });
        });
    var Kt =
        (ct && window.CSS && CSS.escape) ||
        function (t) {
            return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
                return "\\" + t;
            });
        };
    function Jt(t) {
        return N(t) ? Kt.call(null, t) : "";
    }
    function Zt() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var n,
            i,
            r = ie(t),
            o = r[0],
            s = r[1],
            a = r[2],
            u = r[3],
            c = r[4],
            o = ae(o);
        return (
            1 < u.length &&
            ((n = u),
                (u = function (t) {
                    return y(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t);
                })),
            c &&
            c.self &&
            ((i = u),
                (u = function (t) {
                    if (t.target === t.currentTarget || t.target === t.current) return i.call(null, t);
                })),
            a &&
            (u = (function (n, i) {
                var r = this;
                return function (e) {
                    var t =
                        ">" === n[0]
                            ? Vt(n, e.currentTarget)
                                .reverse()
                                .filter(function (t) {
                                    return Bt(e.target, t);
                                })[0]
                            : Dt(e.target, n);
                    t && ((e.current = t), i.call(r, e));
                };
            })(a, u)),
                (c = re(c)),
                s.split(" ").forEach(function (e) {
                    return o.forEach(function (t) {
                        return t.addEventListener(e, u, c);
                    });
                }),
                function () {
                    return Qt(o, s, u, c);
                }
        );
    }
    function Qt(t, e, n, i) {
        (i = re((i = void 0 === i ? !1 : i))),
            (t = ae(t)),
            e.split(" ").forEach(function (e) {
                return t.forEach(function (t) {
                    return t.removeEventListener(e, n, i);
                });
            });
    }
    function te() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var n = ie(t),
            i = n[0],
            r = n[1],
            o = n[2],
            s = n[3],
            a = n[4],
            u = n[5],
            c = Zt(
                i,
                r,
                o,
                function (t) {
                    var e = !u || u(t);
                    e && (c(), s(t, e));
                },
                a
            );
        return c;
    }
    function ee(t, n, i) {
        return ae(t).reduce(function (t, e) {
            return t && e.dispatchEvent(ne(n, !0, !0, i));
        }, !0);
    }
    function ne(t, e, n, i) {
        var r;
        return void 0 === e && (e = !0), void 0 === n && (n = !1), N(t) && ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i), (t = r)), t;
    }
    function ie(t) {
        return k(t[2]) && t.splice(2, 0, !1), t;
    }
    function re(t) {
        return t && ht && !M(t) ? !!t.capture : t;
    }
    function oe(t) {
        return t && "addEventListener" in t;
    }
    function se(t) {
        return oe(t) ? t : j(t);
    }
    function ae(t) {
        return y(t) ? t.map(se).filter(Boolean) : N(t) ? Vt(t) : oe(t) ? [t] : W(t);
    }
    function ue(t) {
        return "touch" === t.pointerType || !!t.touches;
    }
    function ce(t) {
        var e = t.touches,
            n = t.changedTouches,
            t = (e && e[0]) || (n && n[0]) || t;
        return { x: t.clientX, y: t.clientY };
    }
    function he() {
        var n = this;
        this.promise = new le(function (t, e) {
            (n.reject = e), (n.resolve = t);
        });
    }
    var le = (ct && window.Promise) || pe,
        de = 2,
        fe = (ct && window.setImmediate) || setTimeout;
    function pe(t) {
        (this.state = de), (this.value = void 0), (this.deferred = []);
        var e = this;
        try {
            t(
                function (t) {
                    e.resolve(t);
                },
                function (t) {
                    e.reject(t);
                }
            );
        } catch (t) {
            e.reject(t);
        }
    }
    (pe.reject = function (n) {
        return new pe(function (t, e) {
            e(n);
        });
    }),
        (pe.resolve = function (n) {
            return new pe(function (t, e) {
                t(n);
            });
        }),
        (pe.all = function (o) {
            return new pe(function (n, t) {
                var i = [],
                    r = 0;
                0 === o.length && n(i);
                for (var e = 0; e < o.length; e += 1)
                    pe.resolve(o[e]).then(
                        (function (e) {
                            return function (t) {
                                (i[e] = t), (r += 1) === o.length && n(i);
                            };
                        })(e),
                        t
                    );
            });
        }),
        (pe.race = function (i) {
            return new pe(function (t, e) {
                for (var n = 0; n < i.length; n += 1) pe.resolve(i[n]).then(t, e);
            });
        });
    var me = pe.prototype;
    function ge(t, e) {
        var n = Y({ data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest(), beforeSend: Q, responseType: "" }, e);
        return le
            .resolve()
            .then(function () {
                return n.beforeSend(n);
            })
            .then(function () {
                return (
                    (o = t),
                        (s = n),
                        new le(function (t, e) {
                            var n,
                                i,
                                r = s.xhr;
                            for (n in s)
                                if (n in r)
                                    try {
                                        r[n] = s[n];
                                    } catch (t) {}
                            for (i in (r.open(s.method.toUpperCase(), o), s.headers)) r.setRequestHeader(i, s.headers[i]);
                            Zt(r, "load", function () {
                                0 === r.status || (200 <= r.status && r.status < 300) || 304 === r.status
                                    ? ("json" === s.responseType &&
                                    N(r.response) &&
                                    (r = Y(
                                        (function (t) {
                                            var e,
                                                n = {};
                                            for (e in t) n[e] = t[e];
                                            return n;
                                        })(r),
                                        { response: JSON.parse(r.response) }
                                    )),
                                        t(r))
                                    : e(Y(Error(r.statusText), { xhr: r, status: r.status }));
                            }),
                                Zt(r, "error", function () {
                                    return e(Y(Error("Network Error"), { xhr: r }));
                                }),
                                Zt(r, "timeout", function () {
                                    return e(Y(Error("Network Timeout"), { xhr: r }));
                                }),
                                r.send(s.data);
                        })
                );
                var o, s;
            });
    }
    function ve(i, r, o) {
        return new le(function (t, e) {
            var n = new Image();
            (n.onerror = function (t) {
                return e(t);
            }),
                (n.onload = function () {
                    return t(n);
                }),
            o && (n.sizes = o),
            r && (n.srcset = r),
                (n.src = i);
        });
    }
    function we(t) {
        return ((t = Ne(t)).innerHTML = ""), t;
    }
    function be(t, e) {
        return (t = Ne(t)), O(e) ? t.innerHTML : xe(t.hasChildNodes() ? we(t) : t, e);
    }
    function xe(e, t) {
        return (
            (e = Ne(e)),
                $e(t, function (t) {
                    return e.appendChild(t);
                })
        );
    }
    function ye(e, t) {
        return (
            (e = Ne(e)),
                $e(t, function (t) {
                    return e.parentNode.insertBefore(t, e);
                })
        );
    }
    function ke(e, t) {
        return (
            (e = Ne(e)),
                $e(t, function (t) {
                    return e.nextSibling ? ye(e.nextSibling, t) : xe(e.parentNode, t);
                })
        );
    }
    function $e(t, e) {
        return (t = N(t) ? Ae(t) : t) ? ("length" in t ? W(t).map(e) : e(t)) : null;
    }
    function Se(t) {
        W(t).forEach(function (t) {
            return t.parentNode && t.parentNode.removeChild(t);
        });
    }
    function Ie(t, e) {
        for (e = j(ye(t, e)); e.firstChild; ) e = e.firstChild;
        return xe(e, t), e;
    }
    function Ee(t, e) {
        return W(
            W(t).map(function (t) {
                return t.hasChildNodes ? Ie(W(t.childNodes), e) : xe(t, e);
            })
        );
    }
    function Te(t) {
        W(t)
            .map(Ct)
            .filter(function (t, e, n) {
                return n.indexOf(t) === e;
            })
            .forEach(function (t) {
                ye(t, t.childNodes), Se(t);
            });
    }
    (me.resolve = function (t) {
        var e = this;
        if (e.state === de) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var i = t && t.then;
                if (null !== t && $(t) && k(i))
                    return void i.call(
                        t,
                        function (t) {
                            n || e.resolve(t), (n = !0);
                        },
                        function (t) {
                            n || e.reject(t), (n = !0);
                        }
                    );
            } catch (t) {
                return void (n || e.reject(t));
            }
            (e.state = 0), (e.value = t), e.notify();
        }
    }),
        (me.reject = function (t) {
            var e = this;
            if (e.state === de) {
                if (t === e) throw new TypeError("Promise settled with itself.");
                (e.state = 1), (e.value = t), e.notify();
            }
        }),
        (me.notify = function () {
            var r = this;
            fe(function () {
                if (r.state !== de)
                    for (; r.deferred.length; ) {
                        var e = r.deferred.shift(),
                            t = e[0],
                            n = e[1],
                            i = e[2],
                            e = e[3];
                        try {
                            0 === r.state ? (k(t) ? i(t.call(void 0, r.value)) : i(r.value)) : 1 === r.state && (k(n) ? i(n.call(void 0, r.value)) : e(r.value));
                        } catch (t) {
                            e(t);
                        }
                    }
            });
        }),
        (me.then = function (n, i) {
            var r = this;
            return new pe(function (t, e) {
                r.deferred.push([n, i, t, e]), r.notify();
            });
        }),
        (me.catch = function (t) {
            return this.then(void 0, t);
        });
    var Ce = /^\s*<(\w+|!)[^>]*>/,
        _e = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Ae(t) {
        var e = _e.exec(t);
        if (e) return document.createElement(e[1]);
        e = document.createElement("div");
        return Ce.test(t) ? e.insertAdjacentHTML("beforeend", t.trim()) : (e.textContent = t), 1 < e.childNodes.length ? W(e.childNodes) : e.firstChild;
    }
    function Me(t, e) {
        if (_(t))
            for (e(t), t = t.firstElementChild; t; ) {
                var n = t.nextElementSibling;
                Me(t, e), (t = n);
            }
    }
    function Ne(t, e) {
        return De(t) ? j(Ae(t)) : Wt(t, e);
    }
    function ze(t, e) {
        return De(t) ? W(Ae(t)) : Vt(t, e);
    }
    function De(t) {
        return N(t) && ("<" === t[0] || t.match(/^\s*</));
    }
    function Be(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--; ) e[n] = arguments[n + 1];
        je(t, e, "add");
    }
    function Oe(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--; ) e[n] = arguments[n + 1];
        je(t, e, "remove");
    }
    function Pe(t, e) {
        ot(t, "class", function (t) {
            return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
        });
    }
    function He(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--; ) e[n] = arguments[n + 1];
        e[0] && Oe(t, e[0]), e[1] && Be(t, e[1]);
    }
    function Le(t, e) {
        e = We(e)[0];
        for (var n = W(t), i = 0; i < n.length; i++) if (e && n[i].classList.contains(e)) return !0;
        return !1;
    }
    function Fe(t, e, n) {
        e = We(e);
        for (var i = W(t), r = 0; r < i.length; r++) for (var o = i[r].classList, s = 0; s < e.length; s++) O(n) ? o.toggle(e[s]) : Ve.Force ? o.toggle(e[s], !!n) : o[n ? "add" : "remove"](e[s]);
    }
    function je(t, n, i) {
        var r;
        n = n.reduce(function (t, e) {
            return t.concat(We(e));
        }, []);
        for (var o = W(t), e = 0; e < o.length; e++)
            !(function (e) {
                Ve.Multiple
                    ? (r = o[e].classList)[i].apply(r, n)
                    : n.forEach(function (t) {
                        return o[e].classList[i](t);
                    });
            })(e);
    }
    function We(t) {
        return String(t).split(/\s|,/).filter(Boolean);
    }
    var Ve = {
            get Multiple() {
                return this.get("Multiple");
            },
            get Force() {
                return this.get("Force");
            },
            get: function (t) {
                var e = document.createElement("_").classList;
                return e.add("a", "b"), e.toggle("c", !1), (Ve = { Multiple: e.contains("b"), Force: !e.contains("c") })[t];
            },
        },
        Re = {
            "animation-iteration-count": !0,
            "column-count": !0,
            "fill-opacity": !0,
            "flex-grow": !0,
            "flex-shrink": !0,
            "font-weight": !0,
            "line-height": !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            "stroke-dasharray": !0,
            "stroke-dashoffset": !0,
            widows: !0,
            "z-index": !0,
            zoom: !0,
        };
    function qe(t, e, r, o) {
        return (
            void 0 === o && (o = ""),
                W(t).map(function (n) {
                    if (N(e)) {
                        if (((e = Ke(e)), O(r))) return Ye(n, e);
                        r || z(r) ? n.style.setProperty(e, D(r) && !Re[e] ? r + "px" : r, o) : n.style.removeProperty(e);
                    } else {
                        if (y(e)) {
                            var i = Ue(n);
                            return e.reduce(function (t, e) {
                                return (t[e] = i[Ke(e)]), t;
                            }, {});
                        }
                        $(e) &&
                        ((o = r),
                            X(e, function (t, e) {
                                return qe(n, e, t, o);
                            }));
                    }
                    return n;
                })[0]
        );
    }
    function Ue(t, e) {
        return V(t).getComputedStyle(t, e);
    }
    function Ye(t, e, n) {
        return Ue(t, n)[e];
    }
    var Ge = rt(function (t) {
        var e = xe(document.documentElement, document.createElement("div"));
        return Be(e, "uk-" + t), (t = Ye(e, "content", ":before").replace(/^["'](.*)["']$/, "$1")), Se(e), t;
    });
    function Xe(t) {
        return ht ? Ge(t) : Ue(document.documentElement).getPropertyValue("--uk-" + t);
    }
    var Ke = rt(function (t) {
            t = d(t);
            var e = document.documentElement.style;
            if (t in e) return t;
            var n,
                i = Je.length;
            for (; i--; ) if ((n = "-" + Je[i] + "-" + t) in e) return n;
        }),
        Je = ["webkit", "moz", "ms"];
    function Ze(t, s, a, u) {
        return (
            void 0 === a && (a = 400),
            void 0 === u && (u = "linear"),
                le.all(
                    W(t).map(function (o) {
                        return new le(function (e, n) {
                            for (var t in s) {
                                var i = qe(o, t);
                                "" === i && qe(o, t, i);
                            }
                            var r = setTimeout(function () {
                                return ee(o, "transitionend");
                            }, a);
                            te(
                                o,
                                "transitionend transitioncanceled",
                                function (t) {
                                    t = t.type;
                                    clearTimeout(r), Oe(o, "uk-transition"), qe(o, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), "transitioncanceled" === t ? n() : e(o);
                                },
                                { self: !0 }
                            ),
                                Be(o, "uk-transition"),
                                qe(o, Y({ transitionProperty: Object.keys(s).map(Ke).join(","), transitionDuration: a + "ms", transitionTimingFunction: u }, s));
                        });
                    })
                )
        );
    }
    var Qe = {
            start: Ze,
            stop: function (t) {
                return ee(t, "transitionend"), le.resolve();
            },
            cancel: function (t) {
                ee(t, "transitioncanceled");
            },
            inProgress: function (t) {
                return Le(t, "uk-transition");
            },
        },
        tn = "uk-animation-";
    function en(t, o, s, a, u) {
        return (
            void 0 === s && (s = 200),
                le.all(
                    W(t).map(function (r) {
                        return new le(function (e, n) {
                            ee(r, "animationcanceled");
                            var i = setTimeout(function () {
                                return ee(r, "animationend");
                            }, s);
                            te(
                                r,
                                "animationend animationcanceled",
                                function (t) {
                                    t = t.type;
                                    clearTimeout(i), "animationcanceled" === t ? n() : e(r), qe(r, "animationDuration", ""), Pe(r, tn + "\\S*");
                                },
                                { self: !0 }
                            ),
                                qe(r, "animationDuration", s + "ms"),
                                Be(r, o, tn + (u ? "leave" : "enter")),
                            g(o, tn) && (a && Be(r, "uk-transform-origin-" + a), u && Be(r, tn + "reverse"));
                        });
                    })
                )
        );
    }
    var nn = new RegExp(tn + "(enter|leave)"),
        rn = {
            in: en,
            out: function (t, e, n, i) {
                return en(t, e, n, i, !0);
            },
            inProgress: function (t) {
                return nn.test(ot(t, "class"));
            },
            cancel: function (t) {
                ee(t, "animationcanceled");
            },
        },
        on = { width: ["left", "right"], height: ["top", "bottom"] };
    function sn(t) {
        t = _(t) ? j(t).getBoundingClientRect() : { height: hn(t), width: ln(t), top: 0, left: 0 };
        return { height: t.height, width: t.width, top: t.top, left: t.left, bottom: t.top + t.height, right: t.left + t.width };
    }
    function an(n, i) {
        var t,
            r = sn(n),
            e = V(n),
            o = { height: e.pageYOffset, width: e.pageXOffset };
        for (t in on) for (var s in on[t]) r[on[t][s]] += o[t];
        if (!i) return r;
        var a = qe(n, "position");
        X(qe(n, ["left", "top"]), function (t, e) {
            return qe(n, e, i[e] - r[e] + L("absolute" === a && "auto" === t ? un(n)[e] : t));
        });
    }
    function un(t) {
        for (var e = an(t), n = e.top, i = e.left, r = j(t), e = r.ownerDocument, o = e.body, s = e.documentElement, a = r.offsetParent || s; a && (a === o || a === s) && "static" === qe(a, "position"); ) a = a.parentNode;
        return _(a) && ((n -= (r = an(a)).top + L(qe(a, "borderTopWidth"))), (i -= r.left + L(qe(a, "borderLeftWidth")))), { top: n - L(qe(t, "marginTop")), left: i - L(qe(t, "marginLeft")) };
    }
    function cn(t) {
        var e = [0, 0];
        t = j(t);
        do {
            if (((e[0] += t.offsetTop), (e[1] += t.offsetLeft), "fixed" === qe(t, "position"))) {
                var n = V(t);
                return (e[0] += n.pageYOffset), (e[1] += n.pageXOffset), e;
            }
        } while ((t = t.offsetParent));
        return e;
    }
    var hn = dn("height"),
        ln = dn("width");
    function dn(i) {
        var r = p(i);
        return function (t, e) {
            if (O(e)) {
                if (E(t)) return t["inner" + r];
                if (T(t)) {
                    var n = t.documentElement;
                    return Math.max(n["offset" + r], n["scroll" + r]);
                }
                return (e = "auto" === (e = qe((t = j(t)), i)) ? t["offset" + r] : L(e) || 0) - fn(t, i);
            }
            return qe(t, i, e || 0 === e ? +e + fn(t, i) + "px" : "");
        };
    }
    function fn(n, t, e) {
        return (
            void 0 === e && (e = "border-box"),
                qe(n, "boxSizing") === e
                    ? on[t].map(p).reduce(function (t, e) {
                        return t + L(qe(n, "padding" + e)) + L(qe(n, "border" + e + "Width"));
                    }, 0)
                    : 0
        );
    }
    function pn(t) {
        for (var e in on) for (var n in on[e]) if (on[e][n] === t) return on[e][1 - n];
        return t;
    }
    function mn(t, e, n) {
        return void 0 === e && (e = "width"), void 0 === n && (n = window), D(t) ? +t : u(t, "vh") ? gn(hn(V(n)), t) : u(t, "vw") ? gn(ln(V(n)), t) : u(t, "%") ? gn(sn(n)[e], t) : L(t);
    }
    function gn(t, e) {
        return (t * L(e)) / 100;
    }
    var vn = {
        reads: [],
        writes: [],
        read: function (t) {
            return this.reads.push(t), xn(), t;
        },
        write: function (t) {
            return this.writes.push(t), xn(), t;
        },
        clear: function (t) {
            kn(this.reads, t), kn(this.writes, t);
        },
        flush: wn,
    };
    function wn(t) {
        void 0 === t && (t = 1), yn(vn.reads), yn(vn.writes.splice(0)), (vn.scheduled = !1), (vn.reads.length || vn.writes.length) && xn(t + 1);
    }
    var bn = 4;
    function xn(t) {
        vn.scheduled ||
        ((vn.scheduled = !0),
            t && t < bn
                ? le.resolve().then(function () {
                    return wn(t);
                })
                : requestAnimationFrame(function () {
                    return wn();
                }));
    }
    function yn(t) {
        for (var e; (e = t.shift()); )
            try {
                e();
            } catch (t) {
                console.error(t);
            }
    }
    function kn(t, e) {
        e = t.indexOf(e);
        return ~e && t.splice(e, 1);
    }
    function $n() {}
    $n.prototype = {
        positions: [],
        init: function () {
            var e,
                t = this;
            (this.positions = []),
                (this.unbind = Zt(document, "mousemove", function (t) {
                    return (e = ce(t));
                })),
                (this.interval = setInterval(function () {
                    e && (t.positions.push(e), 5 < t.positions.length && t.positions.shift());
                }, 50));
        },
        cancel: function () {
            this.unbind && this.unbind(), this.interval && clearInterval(this.interval);
        },
        movesTo: function (t) {
            if (this.positions.length < 2) return !1;
            var e = t.getBoundingClientRect(),
                n = e.left,
                i = e.right,
                r = e.top,
                o = e.bottom,
                s = this.positions[0],
                t = G(this.positions),
                a = [s, t];
            return (
                !et(t, e) &&
                [
                    [
                        { x: n, y: r },
                        { x: i, y: o },
                    ],
                    [
                        { x: n, y: o },
                        { x: i, y: r },
                    ],
                ].some(function (t) {
                    t = (function (t, e) {
                        var n = t[0],
                            i = n.x,
                            r = n.y,
                            o = t[1],
                            s = o.x,
                            a = o.y,
                            u = e[0],
                            n = u.x,
                            t = u.y,
                            o = e[1],
                            u = o.x,
                            e = o.y,
                            o = (e - t) * (s - i) - (u - n) * (a - r);
                        if (0 == o) return !1;
                        o = ((u - n) * (r - t) - (e - t) * (i - n)) / o;
                        if (o < 0) return !1;
                        return { x: i + o * (s - i), y: r + o * (a - r) };
                    })(a, t);
                    return t && et(t, e);
                })
            );
        },
    };
    var Sn = {};
    function In(t, e, n) {
        return Sn.computed(k(t) ? t.call(n, n) : t, k(e) ? e.call(n, n) : e);
    }
    function En(t, e) {
        return (t = t && !y(t) ? [t] : t), e ? (t ? t.concat(e) : y(e) ? e : [e]) : t;
    }
    function Tn(t, e) {
        return O(e) ? t : e;
    }
    function Cn(e, n, i) {
        var t,
            r,
            o = {};
        if (((n = k(n) ? n.options : n).extends && (e = Cn(e, n.extends, i)), n.mixins)) for (var s = 0, a = n.mixins.length; s < a; s++) e = Cn(e, n.mixins[s], i);
        for (t in e) u(t);
        for (r in n) c(e, r) || u(r);
        function u(t) {
            o[t] = (Sn[t] || Tn)(e[t], n[t], i);
        }
        return o;
    }
    function _n(t, e) {
        var n;
        void 0 === e && (e = []);
        try {
            return t
                ? g(t, "{")
                    ? JSON.parse(t)
                    : e.length && !w(t, ":")
                        ? (((n = {})[e[0]] = t), n)
                        : t.split(";").reduce(function (t, e) {
                            var n = e.split(/:(.*)/),
                                e = n[0],
                                n = n[1];
                            return e && !O(n) && (t[e.trim()] = n.trim()), t;
                        }, {})
                : {};
        } catch (t) {
            return {};
        }
    }
    function An(t) {
        if ((Bn(t) && Hn(t, { func: "playVideo", method: "play" }), Dn(t)))
            try {
                t.play().catch(Q);
            } catch (t) {}
    }
    function Mn(t) {
        Bn(t) && Hn(t, { func: "pauseVideo", method: "pause" }), Dn(t) && t.pause();
    }
    function Nn(t) {
        Bn(t) && Hn(t, { func: "mute", method: "setVolume", value: 0 }), Dn(t) && (t.muted = !0);
    }
    function zn(t) {
        return Dn(t) || Bn(t);
    }
    function Dn(t) {
        return t && "VIDEO" === t.tagName;
    }
    function Bn(t) {
        return t && "IFRAME" === t.tagName && (On(t) || Pn(t));
    }
    function On(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }
    function Pn(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    function Hn(t, e) {
        !(function (e) {
            if (e[Fn]) return e[Fn];
            var n,
                i = On(e),
                r = Pn(e),
                o = ++jn;
            return (e[Fn] = new le(function (t) {
                i &&
                te(e, "load", function () {
                    function t() {
                        return Ln(e, { event: "listening", id: o });
                    }
                    (n = setInterval(t, 100)), t();
                }),
                    te(window, "message", t, !1, function (t) {
                        t = t.data;
                        try {
                            return (t = JSON.parse(t)) && ((i && t.id === o && "onReady" === t.event) || (r && Number(t.player_id) === o));
                        } catch (t) {}
                    }),
                    (e.src = e.src + (w(e.src, "?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + o));
            }).then(function () {
                return clearInterval(n);
            }));
        })(t).then(function () {
            return Ln(t, e);
        });
    }
    function Ln(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify(Y({ event: "command" }, e)), "*");
        } catch (t) {}
    }
    (Sn.events = Sn.created = Sn.beforeConnect = Sn.connected = Sn.beforeDisconnect = Sn.disconnected = Sn.destroy = En),
        (Sn.args = function (t, e) {
            return !1 !== e && En(e || t);
        }),
        (Sn.update = function (t, e) {
            return K(En(t, k(e) ? { read: e } : e), "order");
        }),
        (Sn.props = function (t, e) {
            return (
                y(e) &&
                (e = e.reduce(function (t, e) {
                    return (t[e] = String), t;
                }, {})),
                    Sn.methods(t, e)
            );
        }),
        (Sn.computed = Sn.methods = function (t, e) {
            return e ? (t ? Y({}, t, e) : e) : t;
        }),
        (Sn.data = function (e, n, t) {
            return t
                ? In(e, n, t)
                : n
                    ? e
                        ? function (t) {
                            return In(e, n, t);
                        }
                        : n
                    : e;
        });
    var Fn = "_ukPlayer",
        jn = 0;
    function Wn(t, r, o) {
        return (
            void 0 === r && (r = 0),
            void 0 === o && (o = 0),
            !!$t(t) &&
            tt.apply(
                void 0,
                Un(t)
                    .map(function (t) {
                        var e = an(Yn(t)),
                            n = e.top,
                            i = e.left,
                            t = e.bottom,
                            e = e.right;
                        return { top: n - r, left: i - o, bottom: t + r, right: e + o };
                    })
                    .concat(an(t))
            )
        );
    }
    function Vn(t, e) {
        (t = (E(t) || T(t) ? Xn : j)(t)).scrollTop = e;
    }
    function Rn(s, t) {
        var a = (t = void 0 === t ? {} : t).offset;
        void 0 === a && (a = 0);
        var u = $t(s) ? Un(s) : [],
            c = 0;
        return u.reduce(
            function (t, e, n) {
                var i = e.scrollTop,
                    r = e.scrollHeight - Gn(e),
                    o = Math.ceil(an(u[n - 1] || s).top - an(Yn(e)).top - a + c + i);
                return (
                    r < o ? ((c = o - r), (o = r)) : (c = 0),
                        function () {
                            return (
                                (s = e),
                                    (a = o - i),
                                    new le(function (n) {
                                        var t,
                                            i = s.scrollTop,
                                            r = ((t = Math.abs(a)), 40 * Math.pow(t, 0.375)),
                                            o = Date.now();
                                        !(function t() {
                                            var e,
                                                e = ((e = Z((Date.now() - o) / r)), 0.5 * (1 - Math.cos(Math.PI * e)));
                                            Vn(s, i + a * e), 1 != e ? requestAnimationFrame(t) : n();
                                        })();
                                    }).then(t)
                            );
                            var s, a;
                        }
                );
            },
            function () {
                return le.resolve();
            }
        )();
    }
    function qn(t, e) {
        if ((void 0 === e && (e = 0), !$t(t))) return 0;
        var n = Un(t, /auto|scroll/, !0)[0],
            i = n.scrollHeight,
            r = n.scrollTop,
            o = Gn(n),
            s = cn(t)[0] - r - cn(n)[0],
            n = Math.min(o, s + r);
        return Z((-1 * (s - n)) / Math.min(t.offsetHeight + e + n, i - (s + r), i - o));
    }
    function Un(t, e, n) {
        void 0 === e && (e = /auto|scroll|hidden/), void 0 === n && (n = !1);
        var i = Xn(t),
            r = Ot(t).reverse(),
            t = x((r = r.slice(r.indexOf(i) + 1)), function (t) {
                return "fixed" === qe(t, "position");
            });
        return (
            ~t && (r = r.slice(t)),
                [i]
                    .concat(
                        r.filter(function (t) {
                            return e.test(qe(t, "overflow")) && (!n || t.scrollHeight > Gn(t));
                        })
                    )
                    .reverse()
        );
    }
    function Yn(t) {
        return t === Xn(t) ? window : t;
    }
    function Gn(t) {
        return (t === Xn(t) ? document.documentElement : t).clientHeight;
    }
    function Xn(t) {
        t = V(t).document;
        return t.scrollingElement || t.documentElement;
    }
    var Kn = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
    function Jn(t, e, h, l, d, n, i, r) {
        (h = Qn(h)), (l = Qn(l));
        var f = { element: h, target: l };
        if (!t || !e) return f;
        var o,
            p = an(t),
            m = an(e),
            g = m;
        return (
            Zn(g, h, p, -1),
                Zn(g, l, m, 1),
                (d = ti(d, p.width, p.height)),
                (n = ti(n, m.width, m.height)),
                (d.x += n.x),
                (d.y += n.y),
                (g.left += d.x),
                (g.top += d.y),
            i &&
            ((o = Un(t).map(Yn)),
            r && !w(o, r) && o.unshift(r),
                (o = o.map(function (t) {
                    return an(t);
                })),
                X(Kn, function (t, s) {
                    var a = t[0],
                        u = t[1],
                        c = t[2];
                    (!0 !== i && !w(i, a)) ||
                    o.some(function (n) {
                        var t = h[a] === u ? -p[s] : h[a] === c ? p[s] : 0,
                            e = l[a] === u ? m[s] : l[a] === c ? -m[s] : 0;
                        if (g[u] < n[u] || g[u] + p[s] > n[c]) {
                            var i = p[s] / 2,
                                r = "center" === l[a] ? -m[s] / 2 : 0;
                            return ("center" === h[a] && (o(i, r) || o(-i, -r))) || o(t, e);
                        }
                        function o(e, t) {
                            t = L((g[u] + e + t - 2 * d[a]).toFixed(4));
                            if (t >= n[u] && t + p[s] <= n[c])
                                return (
                                    (g[u] = t),
                                        ["element", "target"].forEach(function (t) {
                                            f[t][a] = e ? (f[t][a] === Kn[s][1] ? Kn[s][2] : Kn[s][1]) : f[t][a];
                                        }),
                                        !0
                                );
                        }
                    });
                })),
                an(t, g),
                f
        );
    }
    function Zn(r, o, s, a) {
        X(Kn, function (t, e) {
            var n = t[0],
                i = t[1],
                t = t[2];
            o[n] === t ? (r[i] += s[e] * a) : "center" === o[n] && (r[i] += (s[e] * a) / 2);
        });
    }
    function Qn(t) {
        var e = /left|center|right/,
            n = /top|center|bottom/;
        return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), { x: e.test(t[0]) ? t[0] : "center", y: n.test(t[1]) ? t[1] : "center" };
    }
    function ti(t, e, n) {
        var i = (t || "").split(" "),
            t = i[0],
            i = i[1];
        return { x: t ? L(t) * (u(t, "%") ? e / 100 : 1) : 0, y: i ? L(i) * (u(i, "%") ? n / 100 : 1) : 0 };
    }
    var ei = Object.freeze({
        __proto__: null,
        ajax: ge,
        getImage: ve,
        transition: Ze,
        Transition: Qe,
        animate: en,
        Animation: rn,
        attr: ot,
        hasAttr: st,
        removeAttr: at,
        data: ut,
        addClass: Be,
        removeClass: Oe,
        removeClasses: Pe,
        replaceClass: He,
        hasClass: Le,
        toggleClass: Fe,
        dimensions: sn,
        offset: an,
        position: un,
        offsetPosition: cn,
        height: hn,
        width: ln,
        boxModelAdjust: fn,
        flipPosition: pn,
        toPx: mn,
        ready: function (t) {
            var e;
            "loading" === document.readyState
                ? (e = Zt(document, "DOMContentLoaded", function () {
                    e(), t();
                }))
                : t();
        },
        empty: we,
        html: be,
        prepend: function (e, t) {
            return (e = Ne(e)).hasChildNodes()
                ? $e(t, function (t) {
                    return e.insertBefore(t, e.firstChild);
                })
                : xe(e, t);
        },
        append: xe,
        before: ye,
        after: ke,
        remove: Se,
        wrapAll: Ie,
        wrapInner: Ee,
        unwrap: Te,
        fragment: Ae,
        apply: Me,
        $: Ne,
        $$: ze,
        inBrowser: ct,
        isIE: ht,
        isRtl: lt,
        hasTouch: pt,
        pointerDown: mt,
        pointerMove: gt,
        pointerUp: vt,
        pointerEnter: wt,
        pointerLeave: bt,
        pointerCancel: xt,
        on: Zt,
        off: Qt,
        once: te,
        trigger: ee,
        createEvent: ne,
        toEventTargets: ae,
        isTouch: ue,
        getEventPos: ce,
        fastdom: vn,
        isVoidElement: kt,
        isVisible: $t,
        selInput: St,
        isInput: It,
        selFocusable: Et,
        isFocusable: Tt,
        parent: Ct,
        filter: _t,
        matches: Nt,
        closest: Dt,
        within: Bt,
        parents: Ot,
        children: Pt,
        index: Ht,
        hasOwn: c,
        hyphenate: d,
        camelize: f,
        ucfirst: p,
        startsWith: g,
        endsWith: u,
        includes: w,
        findIndex: x,
        isArray: y,
        isFunction: k,
        isObject: $,
        isPlainObject: I,
        isWindow: E,
        isDocument: T,
        isNode: C,
        isElement: _,
        isBoolean: M,
        isString: N,
        isNumber: z,
        isNumeric: D,
        isEmpty: B,
        isUndefined: O,
        toBoolean: P,
        toNumber: H,
        toFloat: L,
        toArray: F,
        toNode: j,
        toNodes: W,
        toWindow: V,
        toMs: R,
        isEqual: q,
        swap: U,
        assign: Y,
        last: G,
        each: X,
        sortBy: K,
        uniqueBy: J,
        clamp: Z,
        noop: Q,
        intersectRect: tt,
        pointInRect: et,
        Dimensions: nt,
        getIndex: it,
        memoize: rt,
        MouseTracker: $n,
        mergeOptions: Cn,
        parseOptions: _n,
        play: An,
        pause: Mn,
        mute: Nn,
        isVideo: zn,
        positionAt: Jn,
        Promise: le,
        Deferred: he,
        query: Lt,
        queryAll: Ft,
        find: Wt,
        findAll: Vt,
        escape: Jt,
        css: qe,
        getCssVar: Xe,
        propName: Ke,
        isInView: Wn,
        scrollTop: Vn,
        scrollIntoView: Rn,
        scrolledOver: qn,
        scrollParents: Un,
        getViewport: Yn,
        getViewportClientHeight: Gn,
    });
    function ni(t) {
        this._init(t);
    }
    var ii,
        ri,
        oi,
        si,
        ai,
        ui,
        ci,
        hi,
        li,
        di = rt(function (t) {
            return !(!g(t, "uk-") && !g(t, "data-uk-")) && f(t.replace("data-uk-", "").replace("uk-", ""));
        });
    function fi(t, e) {
        if (t) for (var n in t) t[n]._connected && t[n]._callUpdate(e);
    }
    function pi(t, e) {
        var n = {},
            i = t.args;
        void 0 === i && (i = []);
        var r,
            o = t.props,
            s = t.el;
        if (!(o = void 0 === o ? {} : o)) return n;
        for (r in o) {
            var a = d(r),
                u = ut(s, a);
            O(u) || ((u = (o[r] === Boolean && "" === u) || gi(o[r], u)), ("target" !== a || (u && !g(u, "_"))) && (n[r] = u));
        }
        var c,
            h = _n(ut(s, e), i);
        for (c in h) {
            var l = f(c);
            void 0 !== o[l] && (n[l] = gi(o[l], h[c]));
        }
        return n;
    }
    function mi(e, n, i) {
        var t = (n = !I(n) ? { name: i, handler: n } : n).name,
            r = n.el,
            o = n.handler,
            s = n.capture,
            a = n.passive,
            u = n.delegate,
            c = n.filter,
            h = n.self,
            r = k(r) ? r.call(e) : r || e.$el;
        y(r)
            ? r.forEach(function (t) {
                return mi(e, Y({}, n, { el: t }), i);
            })
            : !r || (c && !c.call(e)) || e._events.push(Zt(r, t, u ? (N(u) ? u : u.call(e)) : null, N(o) ? e[o] : o.bind(e), { passive: a, capture: s, self: h }));
    }
    function gi(t, e) {
        return t === Boolean
            ? P(e)
            : t === Number
                ? H(e)
                : "list" === t
                    ? y((n = e))
                        ? n
                        : N(n)
                            ? n.split(/,(?![^(]*\))/).map(function (t) {
                                return D(t) ? H(t) : P(t.trim());
                            })
                            : [n]
                    : t
                        ? t(e)
                        : e;
        var n;
    }
    (ni.util = ei),
        (ni.data = "__uikit__"),
        (ni.prefix = "uk-"),
        (ni.options = {}),
        (ni.version = "3.8.0"),
        (oi = (ii = ni).data),
        (ii.use = function (t) {
            if (!t.installed) return t.call(null, this), (t.installed = !0), this;
        }),
        (ii.mixin = function (t, e) {
            (e = (N(e) ? ii.component(e) : e) || this).options = Cn(e.options, t);
        }),
        (ii.extend = function (t) {
            t = t || {};
            function e(t) {
                this._init(t);
            }
            return (((e.prototype = Object.create(this.prototype)).constructor = e).options = Cn(this.options, t)), (e.super = this), (e.extend = this.extend), e;
        }),
        (ii.update = function (t, e) {
            Ot((t = t ? j(t) : document.body))
                .reverse()
                .forEach(function (t) {
                    return fi(t[oi], e);
                }),
                Me(t, function (t) {
                    return fi(t[oi], e);
                });
        }),
        Object.defineProperty(ii, "container", {
            get: function () {
                return ri || document.body;
            },
            set: function (t) {
                ri = Ne(t);
            },
        }),
        ((si = ni).prototype._callHook = function (t) {
            var e = this,
                t = this.$options[t];
            t &&
            t.forEach(function (t) {
                return t.call(e);
            });
        }),
        (si.prototype._callConnected = function () {
            this._connected ||
            ((this._data = {}), (this._computeds = {}), this._initProps(), this._callHook("beforeConnect"), (this._connected = !0), this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate());
        }),
        (si.prototype._callDisconnected = function () {
            this._connected && (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), (this._connected = !1), delete this._watch);
        }),
        (si.prototype._callUpdate = function (t) {
            var e = this;
            void 0 === t && (t = "update"),
            this._connected &&
            (("update" !== t && "resize" !== t) || this._callWatches(),
            this.$options.update &&
            (this._updates ||
            ((this._updates = new Set()),
                vn.read(function () {
                    e._connected &&
                    !function (i) {
                        for (var r = this, o = this.$options.update, t = 0; t < o.length; t++)
                            !(function (t) {
                                var e = o[t],
                                    t = e.read,
                                    n = e.write,
                                    e = e.events;
                                (i.has("update") ||
                                    (e &&
                                        e.some(function (t) {
                                            return i.has(t);
                                        }))) &&
                                ((e = void 0),
                                t && (e = t.call(r, r._data, i)) && I(e) && Y(r._data, e),
                                n &&
                                !1 !== e &&
                                vn.write(function () {
                                    return n.call(r, r._data, i);
                                }));
                            })(t);
                    }.call(e, e._updates),
                        delete e._updates;
                })),
                this._updates.add(t.type || t)));
        }),
        (si.prototype._callWatches = function () {
            var t,
                e = this;
            this._watch ||
            ((t = !c(this, "_watch")),
                (this._watch = vn.read(function () {
                    e._connected &&
                    !function (t) {
                        var e,
                            n = this.$options.computed,
                            i = this._computeds;
                        for (e in n) {
                            var r = c(i, e),
                                o = i[e];
                            delete i[e];
                            var s = n[e],
                                a = s.watch,
                                s = s.immediate;
                            a && ((t && s) || (r && !q(o, this[e]))) && a.call(this, this[e], o);
                        }
                    }.call(e, t),
                        (e._watch = null);
                })));
        }),
        (ui = 0),
        ((ai = ni).prototype._init = function (t) {
            ((t = t || {}).data = (function (t, e) {
                var n = t.data,
                    i = e.args,
                    r = e.props;
                void 0 === r && (r = {});
                if (
                    (n = y(n)
                        ? B(i)
                            ? void 0
                            : n.slice(0, i.length).reduce(function (t, e, n) {
                                return I(e) ? Y(t, e) : (t[i[n]] = e), t;
                            }, {})
                        : n)
                )
                    for (var o in n) O(n[o]) ? delete n[o] : (n[o] = r[o] ? gi(r[o], n[o]) : n[o]);
                return n;
            })(t, this.constructor.options)),
                (this.$options = Cn(this.constructor.options, t, this)),
                (this.$el = null),
                (this.$props = {}),
                (this._uid = ui++),
                this._initData(),
                this._initMethods(),
                this._initComputeds(),
                this._callHook("created"),
            t.el && this.$mount(t.el);
        }),
        (ai.prototype._initData = function () {
            var t,
                e = this.$options.data;
            for (t in (e = void 0 === e ? {} : e)) this.$props[t] = this[t] = e[t];
        }),
        (ai.prototype._initMethods = function () {
            var t = this.$options.methods;
            if (t) for (var e in t) this[e] = t[e].bind(this);
        }),
        (ai.prototype._initComputeds = function () {
            var t = this.$options.computed;
            if (((this._computeds = {}), t))
                for (var e in t)
                    !(function (i, r, o) {
                        Object.defineProperty(i, r, {
                            enumerable: !0,
                            get: function () {
                                var t = i._computeds,
                                    e = i.$props,
                                    n = i.$el;
                                return c(t, r) || (t[r] = (o.get || o).call(i, e, n)), t[r];
                            },
                            set: function (t) {
                                var e = i._computeds;
                                (e[r] = o.set ? o.set.call(i, t) : t), O(e[r]) && delete e[r];
                            },
                        });
                    })(this, e, t[e]);
        }),
        (ai.prototype._initProps = function (t) {
            for (var e in (t = t || pi(this.$options, this.$name))) O(t[e]) || (this.$props[e] = t[e]);
            var n = [this.$options.computed, this.$options.methods];
            for (e in this.$props)
                e in t &&
                (function (t, e) {
                    return t.every(function (t) {
                        return !t || !c(t, e);
                    });
                })(n, e) &&
                (this[e] = this.$props[e]);
        }),
        (ai.prototype._initEvents = function () {
            var n = this;
            this._events = [];
            var t = this.$options.events;
            t &&
            t.forEach(function (t) {
                if (c(t, "handler")) mi(n, t);
                else for (var e in t) mi(n, t[e], e);
            });
        }),
        (ai.prototype._unbindEvents = function () {
            this._events.forEach(function (t) {
                return t();
            }),
                delete this._events;
        }),
        (ai.prototype._initObservers = function () {
            var t, e, n;
            this._observers = [
                ((e = (t = this).$options.el),
                    (n = new MutationObserver(function () {
                        return t.$emit();
                    })).observe(e, { childList: !0, subtree: !0 }),
                    n),
                (function (e) {
                    var i = e.$name,
                        r = e.$options,
                        o = e.$props,
                        t = r.attrs,
                        n = r.props,
                        s = r.el;
                    if (n && !1 !== t) {
                        var a = y(t) ? t : Object.keys(n),
                            t = a
                                .map(function (t) {
                                    return d(t);
                                })
                                .concat(i),
                            n = new MutationObserver(function (t) {
                                var n = pi(r, i);
                                t.some(function (t) {
                                    var e = t.attributeName,
                                        t = e.replace("data-", "");
                                    return (t === i ? a : [f(t), f(e)]).some(function (t) {
                                        return !O(n[t]) && n[t] !== o[t];
                                    });
                                }) && e.$reset();
                            });
                        return (
                            n.observe(s, {
                                attributes: !0,
                                attributeFilter: t.concat(
                                    t.map(function (t) {
                                        return "data-" + t;
                                    })
                                ),
                            }),
                                n
                        );
                    }
                })(this),
            ];
        }),
        (ai.prototype._disconnectObservers = function () {
            this._observers.forEach(function (t) {
                return t && t.disconnect();
            });
        }),
        (hi = (ci = ni).data),
        (li = {}),
        (ci.component = function (s, t) {
            var e = d(s);
            if (((s = f(e)), !t)) return I(li[s]) && (li[s] = ci.extend(li[s])), li[s];
            ci[s] = function (t, n) {
                for (var e = arguments.length, i = Array(e); e--; ) i[e] = arguments[e];
                var r = ci.component(s);
                return r.options.functional ? new r({ data: I(t) ? t : [].concat(i) }) : t ? ze(t).map(o)[0] : o(t);
                function o(t) {
                    var e = ci.getComponent(t, s);
                    if (e) {
                        if (!n) return e;
                        e.$destroy();
                    }
                    return new r({ el: t, data: n });
                }
            };
            var n = I(t) ? Y({}, t) : t.options;
            return (
                (n.name = s),
                n.install && n.install(ci, n, s),
                ci._initialized &&
                !n.functional &&
                vn.read(function () {
                    return ci[s]("[uk-" + e + "],[data-uk-" + e + "]");
                }),
                    (li[s] = I(t) ? n : t)
            );
        }),
        (ci.getComponents = function (t) {
            return (t && t[hi]) || {};
        }),
        (ci.getComponent = function (t, e) {
            return ci.getComponents(t)[e];
        }),
        (ci.connect = function (t) {
            if (t[hi]) for (var e in t[hi]) t[hi][e]._callConnected();
            for (var n = 0; n < t.attributes.length; n++) {
                var i = di(t.attributes[n].name);
                i && i in li && ci[i](t);
            }
        }),
        (ci.disconnect = function (t) {
            for (var e in t[hi]) t[hi][e]._callDisconnected();
        }),
        (function (i) {
            var r = i.data;
            (i.prototype.$create = function (t, e, n) {
                return i[t](e, n);
            }),
                (i.prototype.$mount = function (t) {
                    var e = this.$options.name;
                    t[r] || (t[r] = {}), t[r][e] || (((t[r][e] = this).$el = this.$options.el = this.$options.el || t), Bt(t, document) && this._callConnected());
                }),
                (i.prototype.$reset = function () {
                    this._callDisconnected(), this._callConnected();
                }),
                (i.prototype.$destroy = function (t) {
                    void 0 === t && (t = !1);
                    var e = this.$options,
                        n = e.el,
                        e = e.name;
                    n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][e], B(n[r]) || delete n[r], t && Se(this.$el));
                }),
                (i.prototype.$emit = function (t) {
                    this._callUpdate(t);
                }),
                (i.prototype.$update = function (t, e) {
                    void 0 === t && (t = this.$el), i.update(t, e);
                }),
                (i.prototype.$getComponent = i.getComponent);
            var t = rt(function (t) {
                return i.prefix + d(t);
            });
            Object.defineProperties(i.prototype, {
                $container: Object.getOwnPropertyDescriptor(i, "container"),
                $name: {
                    get: function () {
                        return t(this.$options.name);
                    },
                },
            });
        })(ni);
    var vi = {
            connected: function () {
                Le(this.$el, this.$name) || Be(this.$el, this.$name);
            },
        },
        wi = {
            props: { cls: Boolean, animation: "list", duration: Number, origin: String, transition: String },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                clsEnter: "uk-togglabe-enter",
                clsLeave: "uk-togglabe-leave",
                initProps: { overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: "" },
                hideProps: { overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 },
            },
            computed: {
                hasAnimation: function (t) {
                    return !!t.animation[0];
                },
                hasTransition: function (t) {
                    t = t.animation;
                    return this.hasAnimation && !0 === t[0];
                },
            },
            methods: {
                toggleElement: function (e, s, a) {
                    var u = this;
                    return new le(function (t) {
                        return le
                            .all(
                                W(e).map(function (t) {
                                    var e = M(s) ? s : !u.isToggled(t);
                                    if (!ee(t, "before" + (e ? "show" : "hide"), [u])) return le.reject();
                                    var o,
                                        n = (k(a)
                                            ? a
                                            : !1 !== a && u.hasAnimation
                                                ? u.hasTransition
                                                    ? bi(u)
                                                    : ((o = u),
                                                        function (t, e) {
                                                            rn.cancel(t);
                                                            var n = o.animation,
                                                                i = o.duration,
                                                                r = o._toggle;
                                                            return e
                                                                ? (r(t, !0), rn.in(t, n[0], i, o.origin))
                                                                : rn.out(t, n[1] || n[0], i, o.origin).then(function () {
                                                                    return r(t, !1);
                                                                });
                                                        })
                                                : u._toggle)(t, e),
                                        i = e ? u.clsEnter : u.clsLeave;
                                    Be(t, i), ee(t, e ? "show" : "hide", [u]);
                                    function r() {
                                        Oe(t, i), ee(t, e ? "shown" : "hidden", [u]), u.$update(t);
                                    }
                                    return n
                                        ? n.then(r, function () {
                                            return Oe(t, i), le.reject();
                                        })
                                        : r();
                                })
                            )
                            .then(t, Q);
                    });
                },
                isToggled: function (t) {
                    return !!Le((t = W((t = void 0 === t ? this.$el : t))[0]), this.clsEnter) || (!Le(t, this.clsLeave) && (this.cls ? Le(t, this.cls.split(" ")[0]) : $t(t)));
                },
                _toggle: function (t, e) {
                    var n;
                    t &&
                    ((e = Boolean(e)),
                        this.cls ? (n = w(this.cls, " ") || e !== Le(t, this.cls)) && Fe(t, this.cls, w(this.cls, " ") ? void 0 : e) : (n = e === t.hidden) && (t.hidden = !e),
                        ze("[autofocus]", t).some(function (t) {
                            return $t(t) ? t.focus() || !0 : t.blur();
                        }),
                    n && (ee(t, "toggled", [e, this]), this.$update(t)));
                },
            },
        };
    function bi(t) {
        var o = t.isToggled,
            s = t.duration,
            a = t.initProps,
            u = t.hideProps,
            c = t.transition,
            h = t._toggle;
        return function (t, e) {
            var n = Qe.inProgress(t),
                i = t.hasChildNodes ? L(qe(t.firstElementChild, "marginTop")) + L(qe(t.lastElementChild, "marginBottom")) : 0,
                r = $t(t) ? hn(t) + (n ? 0 : i) : 0;
            Qe.cancel(t), o(t) || h(t, !0), hn(t, ""), vn.flush();
            i = hn(t) + (n ? 0 : i);
            return (
                hn(t, r),
                    (e
                            ? Qe.start(t, Y({}, a, { overflow: "hidden", height: i }), Math.round(s * (1 - r / i)), c)
                            : Qe.start(t, u, Math.round(s * (r / i)), c).then(function () {
                                return h(t, !1);
                            })
                    ).then(function () {
                        return qe(t, a);
                    })
            );
        };
    }
    var xi = {
        mixins: [vi, wi],
        props: { targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, transition: String, offset: Number },
        data: { targets: "> *", active: !1, animation: [!0], collapsible: !0, multiple: !1, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", transition: "ease", offset: 0 },
        computed: {
            items: {
                get: function (t, e) {
                    return ze(t.targets, e);
                },
                watch: function (t, e) {
                    var n = this;
                    t.forEach(function (t) {
                        return yi(Ne(n.content, t), !Le(t, n.clsOpen));
                    }),
                    e || Le(t, this.clsOpen) || ((t = (!1 !== this.active && t[Number(this.active)]) || (!this.collapsible && t[0])) && this.toggle(t, !1));
                },
                immediate: !0,
            },
            toggles: function (t) {
                var e = t.toggle;
                return this.items.map(function (t) {
                    return Ne(e, t);
                });
            },
        },
        events: [
            {
                name: "click",
                delegate: function () {
                    return this.targets + " " + this.$props.toggle;
                },
                handler: function (t) {
                    t.preventDefault(), this.toggle(Ht(this.toggles, t.current));
                },
            },
        ],
        methods: {
            toggle: function (t, r) {
                var o = this,
                    e = [this.items[it(t, this.items)]],
                    t = _t(this.items, "." + this.clsOpen);
                this.multiple || w(t, e[0]) || (e = e.concat(t)),
                (!this.collapsible && t.length < 2 && !_t(e, ":not(." + this.clsOpen + ")").length) ||
                e.forEach(function (t) {
                    return o.toggleElement(t, !Le(t, o.clsOpen), function (e, n) {
                        Fe(e, o.clsOpen, n), ot(Ne(o.$props.toggle, e), "aria-expanded", n);
                        var i = Ne((e._wrapper ? "> * " : "") + o.content, e);
                        if (!1 !== r && o.hasTransition)
                            return (
                                e._wrapper || (e._wrapper = Ie(i, "<div" + (n ? " hidden" : "") + ">")),
                                    yi(i, !1),
                                    bi(o)(e._wrapper, n).then(function () {
                                        var t;
                                        yi(i, !n), delete e._wrapper, Te(i), n && (Wn((t = Ne(o.$props.toggle, e))) || Rn(t, { offset: o.offset }));
                                    })
                            );
                        yi(i, !n);
                    });
                });
            },
        },
    };
    function yi(t, e) {
        t && (t.hidden = e);
    }
    var ki = {
            mixins: [vi, wi],
            args: "animation",
            props: { close: String },
            data: { animation: [!0], selClose: ".uk-alert-close", duration: 150, hideProps: Y({ opacity: 0 }, wi.data.hideProps) },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.selClose;
                    },
                    handler: function (t) {
                        t.preventDefault(), this.close();
                    },
                },
            ],
            methods: {
                close: function () {
                    var t = this;
                    this.toggleElement(this.$el).then(function () {
                        return t.$destroy(!0);
                    });
                },
            },
        },
        $i = {
            args: "autoplay",
            props: { automute: Boolean, autoplay: Boolean },
            data: { automute: !1, autoplay: !0 },
            computed: {
                inView: function (t) {
                    return "inview" === t.autoplay;
                },
            },
            connected: function () {
                this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"), this.automute && Nn(this.$el);
            },
            update: {
                read: function () {
                    return !!zn(this.$el) && { visible: $t(this.$el) && "hidden" !== qe(this.$el, "visibility"), inView: this.inView && Wn(this.$el) };
                },
                write: function (t) {
                    var e = t.visible,
                        t = t.inView;
                    !e || (this.inView && !t) ? Mn(this.$el) : (!0 === this.autoplay || (this.inView && t)) && An(this.$el);
                },
                events: ["resize", "scroll"],
            },
        },
        Si = {
            mixins: [vi, $i],
            props: { width: Number, height: Number },
            data: { automute: !0 },
            update: {
                read: function () {
                    var t = this.$el,
                        e =
                            (function (t) {
                                for (; (t = Ct(t)); ) if ("static" !== qe(t, "position")) return t;
                            })(t) || Ct(t),
                        n = e.offsetHeight,
                        e = e.offsetWidth,
                        n = nt.cover(
                            { width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth, height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight },
                            { width: e + (e % 2 ? 1 : 0), height: n + (n % 2 ? 1 : 0) }
                        );
                    return !(!n.width || !n.height) && n;
                },
                write: function (t) {
                    var e = t.height,
                        t = t.width;
                    qe(this.$el, { height: e, width: t });
                },
                events: ["resize"],
            },
        };
    var Ii,
        Ei = {
            props: { container: Boolean },
            data: { container: !0 },
            computed: {
                container: function (t) {
                    t = t.container;
                    return (!0 === t && this.$container) || (t && Ne(t));
                },
            },
        },
        Ti = {
            props: { pos: String, offset: null, flip: Boolean, clsPos: String },
            data: { pos: "bottom-" + (lt ? "right" : "left"), flip: !0, offset: !1, clsPos: "" },
            computed: {
                pos: function (t) {
                    t = t.pos;
                    return (t + (w(t, "-") ? "" : "-center")).split("-");
                },
                dir: function () {
                    return this.pos[0];
                },
                align: function () {
                    return this.pos[1];
                },
            },
            methods: {
                positionAt: function (t, e, n) {
                    Pe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
                    var i,
                        r = this.offset,
                        o = this.getAxis();
                    D(r) || (r = (i = Ne(r)) ? an(i)["x" === o ? "left" : "top"] - an(e)["x" === o ? "right" : "bottom"] : 0);
                    (r = Jn(
                        t,
                        e,
                        "x" === o ? pn(this.dir) + " " + this.align : this.align + " " + pn(this.dir),
                        "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir,
                        "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r),
                        null,
                        this.flip,
                        n
                    ).target),
                        (n = r.x),
                        (r = r.y);
                    (this.dir = "x" === o ? n : r), (this.align = "x" === o ? r : n), Fe(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset);
                },
                getAxis: function () {
                    return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
                },
            },
        },
        Ci = {
            mixins: [Ei, Ti, wi],
            args: "pos",
            props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryAlign: Boolean, delayShow: Number, delayHide: Number, clsDrop: String },
            data: { mode: ["click", "hover"], toggle: "- *", boundary: !0, boundaryAlign: !1, delayShow: 0, delayHide: 800, clsDrop: !1, animation: ["uk-animation-fade"], cls: "uk-open", container: !1 },
            computed: {
                boundary: function (t, e) {
                    t = t.boundary;
                    return !0 === t ? window : Lt(t, e);
                },
                clsDrop: function (t) {
                    return t.clsDrop || "uk-" + this.$options.name;
                },
                clsPos: function () {
                    return this.clsDrop;
                },
            },
            created: function () {
                this.tracker = new $n();
            },
            connected: function () {
                Be(this.$el, this.clsDrop), this.toggle && !this.target && (this.target = this.$create("toggle", Lt(this.toggle, this.$el), { target: this.$el, mode: this.mode }));
            },
            disconnected: function () {
                this.isActive() && (Ii = null);
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return "." + this.clsDrop + "-close";
                    },
                    handler: function (t) {
                        t.preventDefault(), this.hide(!1);
                    },
                },
                {
                    name: "click",
                    delegate: function () {
                        return 'a[href^="#"]';
                    },
                    handler: function (t) {
                        var e = t.defaultPrevented,
                            t = t.current.hash;
                        e || !t || Bt(t, this.$el) || this.hide(!1);
                    },
                },
                {
                    name: "beforescroll",
                    handler: function () {
                        this.hide(!1);
                    },
                },
                {
                    name: "toggle",
                    self: !0,
                    handler: function (t, e) {
                        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e.$el, !1);
                    },
                },
                {
                    name: "toggleshow",
                    self: !0,
                    handler: function (t, e) {
                        t.preventDefault(), this.show(e.$el);
                    },
                },
                {
                    name: "togglehide",
                    self: !0,
                    handler: function (t) {
                        t.preventDefault(), Nt(this.$el, ":focus,:hover") || this.hide();
                    },
                },
                {
                    name: wt + " focusin",
                    filter: function () {
                        return w(this.mode, "hover");
                    },
                    handler: function (t) {
                        ue(t) || this.clearTimers();
                    },
                },
                {
                    name: bt + " focusout",
                    filter: function () {
                        return w(this.mode, "hover");
                    },
                    handler: function (t) {
                        !ue(t) && t.relatedTarget && this.hide();
                    },
                },
                {
                    name: "toggled",
                    self: !0,
                    handler: function (t, e) {
                        e && (this.clearTimers(), this.position());
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        var r = this;
                        (Ii = this).tracker.init(),
                            te(
                                this.$el,
                                "hide",
                                Zt(document, mt, function (t) {
                                    var i = t.target;
                                    return (
                                        !Bt(i, r.$el) &&
                                        te(
                                            document,
                                            vt + " " + xt + " scroll",
                                            function (t) {
                                                var e = t.defaultPrevented,
                                                    n = t.type,
                                                    t = t.target;
                                                e || n !== vt || i !== t || (r.target && Bt(i, r.target)) || r.hide(!1);
                                            },
                                            !0
                                        )
                                    );
                                }),
                                { self: !0 }
                            ),
                            te(
                                this.$el,
                                "hide",
                                Zt(document, "keydown", function (t) {
                                    27 === t.keyCode && r.hide(!1);
                                }),
                                { self: !0 }
                            );
                    },
                },
                {
                    name: "beforehide",
                    self: !0,
                    handler: function () {
                        this.clearTimers();
                    },
                },
                {
                    name: "hide",
                    handler: function (t) {
                        t = t.target;
                        this.$el === t ? ((Ii = this.isActive() ? null : Ii), this.tracker.cancel()) : (Ii = null === Ii && Bt(t, this.$el) && this.isToggled() ? this : Ii);
                    },
                },
            ],
            update: {
                write: function () {
                    this.isToggled() && !Le(this.$el, this.clsEnter) && this.position();
                },
                events: ["resize"],
            },
            methods: {
                show: function (t, e) {
                    var n,
                        i = this;
                    if ((void 0 === t && (t = this.target), void 0 === e && (e = !0), this.isToggled() && t && this.target && t !== this.target && this.hide(!1), (this.target = t), this.clearTimers(), !this.isActive())) {
                        if (Ii) {
                            if (e && Ii.isDelaying) return void (this.showTimer = setTimeout(this.show, 10));
                            for (; Ii && n !== Ii && !Bt(this.$el, Ii.$el); ) (n = Ii).hide(!1);
                        }
                        this.container && Ct(this.$el) !== this.container && xe(this.container, this.$el),
                            (this.showTimer = setTimeout(function () {
                                return i.toggleElement(i.$el, !0);
                            }, (e && this.delayShow) || 0));
                    }
                },
                hide: function (t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    function n() {
                        return e.toggleElement(e.$el, !1, !1);
                    }
                    var i, r;
                    this.clearTimers(),
                        (this.isDelaying =
                            ((i = this.$el),
                                (r = []),
                                Me(i, function (t) {
                                    return "static" !== qe(t, "position") && r.push(t);
                                }),
                                r.some(function (t) {
                                    return e.tracker.movesTo(t);
                                }))),
                        t && this.isDelaying ? (this.hideTimer = setTimeout(this.hide, 50)) : t && this.delayHide ? (this.hideTimer = setTimeout(n, this.delayHide)) : n();
                },
                clearTimers: function () {
                    clearTimeout(this.showTimer), clearTimeout(this.hideTimer), (this.showTimer = null), (this.hideTimer = null), (this.isDelaying = !1);
                },
                isActive: function () {
                    return Ii === this;
                },
                position: function () {
                    Oe(this.$el, this.clsDrop + "-stack"), Fe(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                    var t,
                        e = an(this.boundary),
                        n = this.boundaryAlign ? e : an(this.target);
                    "justify" === this.align
                        ? ((t = "y" === this.getAxis() ? "width" : "height"), qe(this.$el, t, n[t]))
                        : this.boundary && this.$el.offsetWidth > Math.max(e.right - n.left, n.right - e.left) && Be(this.$el, this.clsDrop + "-stack"),
                        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.target, this.boundary);
                },
            },
        };
    var _i = {
            mixins: [vi],
            args: "target",
            props: { target: Boolean },
            data: { target: !1 },
            computed: {
                input: function (t, e) {
                    return Ne(St, e);
                },
                state: function () {
                    return this.input.nextElementSibling;
                },
                target: function (t, e) {
                    t = t.target;
                    return t && ((!0 === t && Ct(this.input) === e && this.input.nextElementSibling) || Lt(t, e));
                },
            },
            update: function () {
                var t,
                    e,
                    n = this.target,
                    i = this.input;
                !n ||
                (n[(e = It(n) ? "value" : "textContent")] !==
                    (i =
                        i.files && i.files[0]
                            ? i.files[0].name
                            : Nt(i, "select") &&
                            (t = ze("option", i).filter(function (t) {
                                return t.selected;
                            })[0])
                                ? t.textContent
                                : i.value) &&
                    (n[e] = i));
            },
            events: [
                {
                    name: "change",
                    handler: function () {
                        this.$update();
                    },
                },
                {
                    name: "reset",
                    el: function () {
                        return Dt(this.$el, "form");
                    },
                    handler: function () {
                        this.$update();
                    },
                },
            ],
        },
        Ai = {
            update: {
                read: function (t) {
                    var e = Wn(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e;
                },
                write: function () {
                    this.$el.src = "" + this.$el.src;
                },
                events: ["scroll", "resize"],
            },
        },
        Mi = {
            props: { margin: String, firstColumn: Boolean },
            data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
            update: {
                read: function () {
                    var t = Ni(this.$el.children);
                    return {
                        rows: t,
                        columns: (function (t) {
                            for (var e = [], n = 0; n < t.length; n++) for (var i = zi(t[n], "left", "right"), r = 0; r < i.length; r++) e[r] = e[r] ? e[r].concat(i[r]) : i[r];
                            return lt ? e.reverse() : e;
                        })(t),
                    };
                },
                write: function (t) {
                    for (var e = t.columns, n = t.rows, i = 0; i < n.length; i++) for (var r = 0; r < n[i].length; r++) Fe(n[i][r], this.margin, 0 !== i), Fe(n[i][r], this.firstColumn, !!~e[0].indexOf(n[i][r]));
                },
                events: ["resize"],
            },
        };
    function Ni(t) {
        return zi(t, "top", "bottom");
    }
    function zi(t, e, n) {
        for (var i = [[]], r = 0; r < t.length; r++) {
            var o = t[r];
            if ($t(o))
                for (var s = Di(o), a = i.length - 1; 0 <= a; a--) {
                    var u = i[a];
                    if (!u[0]) {
                        u.push(o);
                        break;
                    }
                    var c = void 0,
                        c = u[0].offsetParent === o.offsetParent ? Di(u[0]) : ((s = Di(o, !0)), Di(u[0], !0));
                    if (s[e] >= c[n] - 1 && s[e] !== c[e]) {
                        i.push([o]);
                        break;
                    }
                    if (s[n] - 1 > c[e] || s[e] === c[e]) {
                        u.push(o);
                        break;
                    }
                    if (0 === a) {
                        i.unshift([o]);
                        break;
                    }
                }
        }
        return i;
    }
    function Di(t, e) {
        var n = t.offsetTop,
            i = t.offsetLeft,
            r = t.offsetHeight,
            o = t.offsetWidth;
        return (e = void 0 === e ? !1 : e) && ((n = (t = cn(t))[0]), (i = t[1])), { top: n, left: i, bottom: n + r, right: i + o };
    }
    var Bi = {
        extends: Mi,
        mixins: [vi],
        name: "grid",
        props: { masonry: Boolean, parallax: Number },
        data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: !1, parallax: 0 },
        connected: function () {
            this.masonry && Be(this.$el, "uk-flex-top uk-flex-wrap-top");
        },
        update: [
            {
                write: function (t) {
                    t = t.columns;
                    Fe(this.$el, this.clsStack, t.length < 2);
                },
                events: ["resize"],
            },
            {
                read: function (t) {
                    var e = t.columns,
                        n = t.rows;
                    if (!e.length || (!this.masonry && !this.parallax) || Oi(this.$el)) return (t.translates = !1);
                    var i,
                        r,
                        o = !1,
                        s = Pt(this.$el),
                        a = e.map(function (t) {
                            return t.reduce(function (t, e) {
                                return t + e.offsetHeight;
                            }, 0);
                        }),
                        u =
                            ((t = s),
                                (i = this.margin),
                            L(
                                (s = t.filter(function (t) {
                                    return Le(t, i);
                                })[0])
                                    ? qe(s, "marginTop")
                                    : qe(t[0], "paddingLeft")
                            ) *
                            (n.length - 1)),
                        c = Math.max.apply(Math, a) + u;
                    this.masonry &&
                    ((e = e.map(function (t) {
                        return K(t, "offsetTop");
                    })),
                        (t = e),
                        (r = n.map(function (t) {
                            return Math.max.apply(
                                Math,
                                t.map(function (t) {
                                    return t.offsetHeight;
                                })
                            );
                        })),
                        (o = t.map(function (n) {
                            var i = 0;
                            return n.map(function (t, e) {
                                return (i += e ? r[e - 1] - n[e - 1].offsetHeight : 0);
                            });
                        })));
                    var h = Math.abs(this.parallax);
                    return {
                        padding: (h =
                            h &&
                            a.reduce(function (t, e, n) {
                                return Math.max(t, e + u + (n % 2 ? h : h / 8) - c);
                            }, 0)),
                        columns: e,
                        translates: o,
                        height: o ? c : "",
                    };
                },
                write: function (t) {
                    var e = t.height,
                        t = t.padding;
                    qe(this.$el, "paddingBottom", t || ""), !1 !== e && qe(this.$el, "height", e);
                },
                events: ["resize"],
            },
            {
                read: function (t) {
                    t = t.height;
                    return !Oi(this.$el) && { scrolled: !!this.parallax && qn(this.$el, t ? t - hn(this.$el) : 0) * Math.abs(this.parallax) };
                },
                write: function (t) {
                    var e = t.columns,
                        i = t.scrolled,
                        r = t.translates;
                    (!1 === i && !r) ||
                    e.forEach(function (t, n) {
                        return t.forEach(function (t, e) {
                            return qe(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? (n % 2 ? i : i / 8) : 0)) + "px)" : "");
                        });
                    });
                },
                events: ["scroll", "resize"],
            },
        ],
    };
    function Oi(t) {
        return Pt(t).some(function (t) {
            return "absolute" === qe(t, "position");
        });
    }
    var Pi = ht
            ? {
                props: { selMinHeight: String },
                data: { selMinHeight: !1, forceHeight: !1 },
                computed: {
                    elements: function (t, e) {
                        t = t.selMinHeight;
                        return t ? ze(t, e) : [e];
                    },
                },
                update: [
                    {
                        read: function () {
                            qe(this.elements, "height", "");
                        },
                        order: -5,
                        events: ["resize"],
                    },
                    {
                        write: function () {
                            var n = this;
                            this.elements.forEach(function (t) {
                                var e = L(qe(t, "minHeight"));
                                e && (n.forceHeight || Math.round(e + fn(t, "height", "content-box")) >= t.offsetHeight) && qe(t, "height", e);
                            });
                        },
                        order: 5,
                        events: ["resize"],
                    },
                ],
            }
            : {},
        Hi = {
            mixins: [Pi],
            args: "target",
            props: { target: String, row: Boolean },
            data: { target: "> *", row: !0, forceHeight: !0 },
            computed: {
                elements: function (t, e) {
                    return ze(t.target, e);
                },
            },
            update: {
                read: function () {
                    return { rows: (this.row ? Ni(this.elements) : [this.elements]).map(Li) };
                },
                write: function (t) {
                    t.rows.forEach(function (t) {
                        var n = t.heights;
                        return t.elements.forEach(function (t, e) {
                            return qe(t, "minHeight", n[e]);
                        });
                    });
                },
                events: ["resize"],
            },
        };
    function Li(t) {
        if (t.length < 2) return { heights: [""], elements: t };
        var n = t.map(Fi),
            i = Math.max.apply(Math, n),
            e = t.some(function (t) {
                return t.style.minHeight;
            }),
            r = t.some(function (t, e) {
                return !t.style.minHeight && n[e] < i;
            });
        return (
            e && r && (qe(t, "minHeight", ""), (n = t.map(Fi)), (i = Math.max.apply(Math, n))),
                {
                    heights: (n = t.map(function (t, e) {
                        return n[e] === i && L(t.style.minHeight).toFixed(2) !== i.toFixed(2) ? "" : i;
                    })),
                    elements: t,
                }
        );
    }
    function Fi(t) {
        var e = !1;
        $t(t) || ((e = t.style.display), qe(t, "display", "block", "important"));
        var n = sn(t).height - fn(t, "height", "content-box");
        return !1 !== e && qe(t, "display", e), n;
    }
    var ji = {
            mixins: [Pi],
            props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number },
            data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
            update: {
                read: function (t) {
                    var e = t.minHeight;
                    if (!$t(this.$el)) return !1;
                    var n = "",
                        i = fn(this.$el, "height", "content-box");
                    return (
                        this.expand
                            ? (n = hn(window) - (sn(document.documentElement).height - sn(this.$el).height) - i || "")
                            : ((n = "calc(100vh"),
                            this.offsetTop && (n += 0 < (t = an(this.$el).top) && t < hn(window) / 2 ? " - " + t + "px" : ""),
                                !0 === this.offsetBottom
                                    ? (n += " - " + sn(this.$el.nextElementSibling).height + "px")
                                    : D(this.offsetBottom)
                                        ? (n += " - " + this.offsetBottom + "vh")
                                        : this.offsetBottom && u(this.offsetBottom, "px")
                                            ? (n += " - " + L(this.offsetBottom) + "px")
                                            : N(this.offsetBottom) && (n += " - " + sn(Lt(this.offsetBottom, this.$el)).height + "px"),
                                (n += (i ? " - " + i + "px" : "") + ")")),
                            { minHeight: n, prev: e }
                    );
                },
                write: function (t) {
                    var e = t.minHeight,
                        t = t.prev;
                    qe(this.$el, { minHeight: e }), e !== t && this.$update(this.$el, "resize"), this.minHeight && L(qe(this.$el, "minHeight")) < this.minHeight && qe(this.$el, "minHeight", this.minHeight);
                },
                events: ["resize"],
            },
        },
        Wi = {
            args: "src",
            props: { id: Boolean, icon: String, src: String, style: String, width: Number, height: Number, ratio: Number, class: String, strokeAnimation: Boolean, focusable: Boolean, attributes: "list" },
            data: { ratio: 1, include: ["style", "class", "focusable"], class: "", strokeAnimation: !1 },
            beforeConnect: function () {
                this.class += " uk-svg";
            },
            connected: function () {
                var t,
                    n = this;
                !this.icon && w(this.src, "#") && ((t = this.src.split("#")), (this.src = t[0]), (this.icon = t[1])),
                    (this.svg = this.getSvg().then(function (t) {
                        if (n._connected) {
                            var e = (function (t, e) {
                                if (kt(e) || "CANVAS" === e.tagName) {
                                    e.hidden = !0;
                                    var n = e.nextElementSibling;
                                    return Yi(t, n) ? n : ke(e, t);
                                }
                                n = e.lastElementChild;
                                return Yi(t, n) ? n : xe(e, t);
                            })(t, n.$el);
                            return n.svgEl && e !== n.svgEl && Se(n.svgEl), n.applyAttributes(e, t), n.$emit(), (n.svgEl = e);
                        }
                    }, Q));
            },
            disconnected: function () {
                var e = this;
                this.svg.then(function (t) {
                    e._connected || (kt(e.$el) && (e.$el.hidden = !1), Se(t), (e.svgEl = null));
                }),
                    (this.svg = null);
            },
            update: {
                read: function () {
                    return !!(this.strokeAnimation && this.svgEl && $t(this.svgEl));
                },
                write: function () {
                    var t, e;
                    (t = this.svgEl), (e = Ui(t)) && t.style.setProperty("--uk-animation-stroke", e);
                },
                type: ["resize"],
            },
            methods: {
                getSvg: function () {
                    var e = this;
                    return Vi(this.src).then(function (t) {
                        return (
                            (function (t, e) {
                                e &&
                                w(t, "<symbol") &&
                                (t =
                                    (function (t, e) {
                                        if (!qi[t]) {
                                            var n;
                                            for (qi[t] = {}, Ri.lastIndex = 0; (n = Ri.exec(t)); ) qi[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>";
                                        }
                                        return qi[t][e];
                                    })(t, e) || t);
                                return (t = Ne(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t;
                            })(t, e.icon) || le.reject("SVG not found.")
                        );
                    });
                },
                applyAttributes: function (n, e) {
                    var t,
                        i,
                        r = this;
                    for (t in this.$options.props) w(this.include, t) && t in this && ot(n, t, this[t]);
                    for (i in this.attributes) {
                        var o = this.attributes[i].split(":", 2),
                            s = o[0],
                            o = o[1];
                        ot(n, s, o);
                    }
                    this.id || at(n, "id");
                    var a = ["width", "height"],
                        u = a.map(function (t) {
                            return r[t];
                        });
                    u.some(function (t) {
                        return t;
                    }) ||
                    (u = a.map(function (t) {
                        return ot(e, t);
                    }));
                    var c = ot(e, "viewBox");
                    (u =
                        c &&
                        !u.some(function (t) {
                            return t;
                        })
                            ? c.split(" ").slice(2)
                            : u).forEach(function (t, e) {
                        return ot(n, a[e], L(t) * r.ratio || null);
                    });
                },
            },
        },
        Vi = rt(function (n) {
            return new le(function (e, t) {
                n
                    ? g(n, "data:")
                        ? e(decodeURIComponent(n.split(",")[1]))
                        : ge(n).then(
                            function (t) {
                                return e(t.response);
                            },
                            function () {
                                return t("SVG not found.");
                            }
                        )
                    : t();
            });
        });
    var Ri = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        qi = {};
    function Ui(t) {
        return Math.ceil(
            Math.max.apply(
                Math,
                [0].concat(
                    ze("[stroke]", t).map(function (t) {
                        try {
                            return t.getTotalLength();
                        } catch (t) {
                            return 0;
                        }
                    })
                )
            )
        );
    }
    function Yi(t, e) {
        return Gi(t) && Gi(e) && Xi(t) === Xi(e);
    }
    function Gi(t) {
        return t && "svg" === t.tagName;
    }
    function Xi(t) {
        return (t.innerHTML || new XMLSerializer().serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "");
    }
    var Ki = {
            spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
            totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
            marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
            "close-icon":
                '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
            "close-large":
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
            "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
            "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
            "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
            "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
            "search-icon":
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            "search-large":
                '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
            "search-navbar":
                '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
            "slidenav-next": '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
            "slidenav-next-large": '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
            "slidenav-previous": '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
            "slidenav-previous-large": '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        },
        Ji = {
            install: function (r) {
                r.icon.add = function (t, e) {
                    var n,
                        i = N(t) ? (((n = {})[t] = e), n) : t;
                    X(i, function (t, e) {
                        (Ki[e] = t), delete ir[e];
                    }),
                    r._initialized &&
                    Me(document.body, function (t) {
                        return X(r.getComponents(t), function (t) {
                            t.$options.isIcon && t.icon in i && t.$reset();
                        });
                    });
                };
            },
            extends: Wi,
            args: "icon",
            props: ["icon"],
            data: { include: ["focusable"] },
            isIcon: !0,
            beforeConnect: function () {
                Be(this.$el, "uk-icon");
            },
            methods: {
                getSvg: function () {
                    var t = (function (t) {
                        if (!Ki[t]) return null;
                        ir[t] ||
                        (ir[t] = Ne(
                            (
                                Ki[
                                    (function (t) {
                                        return lt ? U(U(t, "left", "right"), "previous", "next") : t;
                                    })(t)
                                    ] || Ki[t]
                            ).trim()
                        ));
                        return ir[t].cloneNode(!0);
                    })(this.icon);
                    return t ? le.resolve(t) : le.reject("Icon not found.");
                },
            },
        },
        Zi = {
            args: !1,
            extends: Ji,
            data: function (t) {
                return { icon: d(t.constructor.options.name) };
            },
            beforeConnect: function () {
                Be(this.$el, this.$name);
            },
        },
        Qi = {
            extends: Zi,
            beforeConnect: function () {
                Be(this.$el, "uk-slidenav");
            },
            computed: {
                icon: function (t, e) {
                    t = t.icon;
                    return Le(e, "uk-slidenav-large") ? t + "-large" : t;
                },
            },
        },
        tr = {
            extends: Zi,
            computed: {
                icon: function (t, e) {
                    t = t.icon;
                    return Le(e, "uk-search-icon") && Ot(e, ".uk-search-large").length ? "search-large" : Ot(e, ".uk-search-navbar").length ? "search-navbar" : t;
                },
            },
        },
        er = {
            extends: Zi,
            computed: {
                icon: function () {
                    return "close-" + (Le(this.$el, "uk-close-large") ? "large" : "icon");
                },
            },
        },
        nr = {
            extends: Zi,
            connected: function () {
                var e = this;
                this.svg.then(function (t) {
                    return t && 1 !== e.ratio && qe(Ne("circle", t), "strokeWidth", 1 / e.ratio);
                });
            },
        },
        ir = {};
    var rr = {
        args: "dataSrc",
        props: { dataSrc: String, dataSrcset: Boolean, sizes: String, width: Number, height: Number, offsetTop: String, offsetLeft: String, target: String },
        data: { dataSrc: "", dataSrcset: !1, sizes: !1, width: !1, height: !1, offsetTop: "50vh", offsetLeft: "50vw", target: !1 },
        computed: {
            cacheKey: function (t) {
                t = t.dataSrc;
                return this.$name + "." + t;
            },
            width: function (t) {
                var e = t.width,
                    t = t.dataWidth;
                return e || t;
            },
            height: function (t) {
                var e = t.height,
                    t = t.dataHeight;
                return e || t;
            },
            sizes: function (t) {
                var e = t.sizes,
                    t = t.dataSizes;
                return e || t;
            },
            isImg: function (t, e) {
                return lr(e);
            },
            target: {
                get: function (t) {
                    t = t.target;
                    return [this.$el].concat(Ft(t, this.$el));
                },
                watch: function () {
                    this.observe();
                },
            },
            offsetTop: function (t) {
                return mn(t.offsetTop, "height");
            },
            offsetLeft: function (t) {
                return mn(t.offsetLeft, "width");
            },
        },
        connected: function () {
            window.IntersectionObserver
                ? (fr[this.cacheKey]
                    ? or(this.$el, fr[this.cacheKey], this.dataSrcset, this.sizes)
                    : this.isImg &&
                    this.width &&
                    this.height &&
                    or(
                        this.$el,
                        (function (t, e, n) {
                            n && ((n = nt.ratio({ width: t, height: e }, "width", mn(ar(n)))), (t = n.width), (e = n.height));
                            return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>';
                        })(this.width, this.height, this.sizes)
                    ),
                    (this.observer = new IntersectionObserver(this.load, { rootMargin: this.offsetTop + "px " + this.offsetLeft + "px" })),
                    requestAnimationFrame(this.observe))
                : or(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
        },
        disconnected: function () {
            this.observer && this.observer.disconnect();
        },
        update: {
            read: function (t) {
                var e = this,
                    t = t.image;
                return (
                    !!this.observer &&
                    (t || "complete" !== document.readyState || this.load(this.observer.takeRecords()),
                    !this.isImg &&
                    void (
                        t &&
                        t.then(function (t) {
                            return t && "" !== t.currentSrc && or(e.$el, dr(t));
                        })
                    ))
                );
            },
            write: function (t) {
                var e, n, i;
                this.dataSrcset &&
                1 !== window.devicePixelRatio &&
                ((!(n = qe(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) && L(n) !== t.bgSize) ||
                    ((t.bgSize =
                        ((e = this.dataSrcset),
                            (n = this.sizes),
                            (i = mn(ar(n))),
                        (e = (e.match(hr) || []).map(L).sort(function (t, e) {
                            return t - e;
                        })).filter(function (t) {
                            return i <= t;
                        })[0] ||
                        e.pop() ||
                        "")),
                        qe(this.$el, "backgroundSize", t.bgSize + "px")));
            },
            events: ["resize"],
        },
        methods: {
            load: function (t) {
                var e = this;
                t.some(function (t) {
                    return O(t.isIntersecting) || t.isIntersecting;
                }) &&
                ((this._data.image = ve(this.dataSrc, this.dataSrcset, this.sizes).then(
                    function (t) {
                        return or(e.$el, dr(t), t.srcset, t.sizes), (fr[e.cacheKey] = dr(t)), t;
                    },
                    function (t) {
                        return ee(e.$el, new t.constructor(t.type, t));
                    }
                )),
                    this.observer.disconnect());
            },
            observe: function () {
                var e = this;
                this._connected &&
                !this._data.image &&
                this.target.forEach(function (t) {
                    return e.observer.observe(t);
                });
            },
        },
    };
    function or(n, t, e, i) {
        var r;
        lr(n)
            ? ((r = function (t, e) {
                return e && e !== n[t] && (n[t] = e);
            })("sizes", i),
                r("srcset", e),
                r("src", t))
            : t && !w(n.style.backgroundImage, t) && (qe(n, "backgroundImage", "url(" + Jt(t) + ")"), ee(n, ne("load", !1)));
    }
    var sr = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function ar(t) {
        var e, n;
        for (sr.lastIndex = 0; (e = sr.exec(t)); )
            if (!e[1] || window.matchMedia(e[1]).matches) {
                e = g((n = e[2]), "calc")
                    ? n
                        .slice(5, -1)
                        .replace(ur, function (t) {
                            return mn(t);
                        })
                        .replace(/ /g, "")
                        .match(cr)
                        .reduce(function (t, e) {
                            return t + +e;
                        }, 0)
                    : n;
                break;
            }
        return e || "100vw";
    }
    var ur = /\d+(?:\w+|%)/g,
        cr = /[+-]?(\d+)/g;
    var hr = /\s+\d+w\s*(?:,|$)/g;
    function lr(t) {
        return "IMG" === t.tagName;
    }
    function dr(t) {
        return t.currentSrc || t.src;
    }
    var fr,
        pr = "__test__";
    try {
        ((fr = window.sessionStorage || {})[pr] = 1), delete fr[pr];
    } catch (t) {
        fr = {};
    }
    var mr = {
        props: { media: Boolean },
        data: { media: !1 },
        computed: {
            matchMedia: function () {
                var t = (function (t) {
                    if (N(t))
                        if ("@" === t[0]) t = L(Xe("breakpoint-" + t.substr(1)));
                        else if (isNaN(t)) return t;
                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
                })(this.media);
                return !t || window.matchMedia(t).matches;
            },
        },
    };
    var gr = {
            mixins: [vi, mr],
            props: { fill: String },
            data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" },
            computed: {
                fill: function (t) {
                    return t.fill || Xe("leader-fill-content");
                },
            },
            connected: function () {
                var t = Ee(this.$el, '<span class="' + this.clsWrapper + '">');
                this.wrapper = t[0];
            },
            disconnected: function () {
                Te(this.wrapper.childNodes);
            },
            update: {
                read: function (t) {
                    var e,
                        n = t.changed,
                        t = (e = t.width);
                    return { width: (e = Math.floor(this.$el.offsetWidth / 2)), fill: this.fill, changed: n || t !== e, hide: !this.matchMedia };
                },
                write: function (t) {
                    Fe(this.wrapper, this.clsHide, t.hide), t.changed && ((t.changed = !1), ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)));
                },
                events: ["resize"],
            },
        },
        vr = [],
        wr = {
            mixins: [vi, Ei, wi],
            props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean },
            data: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 },
            computed: {
                panel: function (t, e) {
                    return Ne(t.selPanel, e);
                },
                transitionElement: function () {
                    return this.panel;
                },
                bgClose: function (t) {
                    return t.bgClose && this.panel;
                },
            },
            beforeDisconnect: function () {
                w(vr, this) && this.toggleElement(this.$el, !1, !1);
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.selClose;
                    },
                    handler: function (t) {
                        t.preventDefault(), this.hide();
                    },
                },
                {
                    name: "toggle",
                    self: !0,
                    handler: function (t, e) {
                        t.defaultPrevented || (t.preventDefault(), this.isToggled() === w(vr, this) && this.toggle());
                    },
                },
                {
                    name: "beforeshow",
                    self: !0,
                    handler: function (t) {
                        if (w(vr, this)) return !1;
                        !this.stack && vr.length
                            ? (le
                                .all(
                                    vr.map(function (t) {
                                        return t.hide();
                                    })
                                )
                                .then(this.show),
                                t.preventDefault())
                            : vr.push(this);
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        var r = this,
                            t = document.documentElement;
                        ln(window) > t.clientWidth && this.overlay && qe(document.body, "overflowY", "scroll"),
                        this.stack && qe(this.$el, "zIndex", L(qe(this.$el, "zIndex")) + vr.length),
                            Be(t, this.clsPage),
                        this.bgClose &&
                        te(
                            this.$el,
                            "hide",
                            Zt(document, mt, function (t) {
                                var i = t.target;
                                G(vr) !== r ||
                                (r.overlay && !Bt(i, r.$el)) ||
                                Bt(i, r.panel) ||
                                te(
                                    document,
                                    vt + " " + xt + " scroll",
                                    function (t) {
                                        var e = t.defaultPrevented,
                                            n = t.type,
                                            t = t.target;
                                        e || n !== vt || i !== t || r.hide();
                                    },
                                    !0
                                );
                            }),
                            { self: !0 }
                        ),
                        this.escClose &&
                        te(
                            this.$el,
                            "hide",
                            Zt(document, "keydown", function (t) {
                                27 === t.keyCode && G(vr) === r && r.hide();
                            }),
                            { self: !0 }
                        );
                    },
                },
                {
                    name: "shown",
                    self: !0,
                    handler: function () {
                        Tt(this.$el) || ot(this.$el, "tabindex", "-1"), Ne(":focus", this.$el) || this.$el.focus();
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function () {
                        var e = this;
                        w(vr, this) && vr.splice(vr.indexOf(this), 1),
                        vr.length || qe(document.body, "overflowY", ""),
                            qe(this.$el, "zIndex", ""),
                        vr.some(function (t) {
                            return t.clsPage === e.clsPage;
                        }) || Oe(document.documentElement, this.clsPage);
                    },
                },
            ],
            methods: {
                toggle: function () {
                    return this.isToggled() ? this.hide() : this.show();
                },
                show: function () {
                    var e = this;
                    return this.container && Ct(this.$el) !== this.container
                        ? (xe(this.container, this.$el),
                            new le(function (t) {
                                return requestAnimationFrame(function () {
                                    return e.show().then(t);
                                });
                            }))
                        : this.toggleElement(this.$el, !0, br(this));
                },
                hide: function () {
                    return this.toggleElement(this.$el, !1, br(this));
                },
            },
        };
    function br(t) {
        var s = t.transitionElement,
            a = t._toggle;
        return function (r, o) {
            return new le(function (n, i) {
                return te(r, "show hide", function () {
                    r._reject && r._reject(), (r._reject = i), a(r, o);
                    var t = te(
                            s,
                            "transitionstart",
                            function () {
                                te(s, "transitionend transitioncancel", n, { self: !0 }), clearTimeout(e);
                            },
                            { self: !0 }
                        ),
                        e = setTimeout(function () {
                            t(), n();
                        }, R(qe(s, "transitionDuration")));
                });
            }).then(function () {
                return delete r._reject;
            });
        };
    }
    var xr = {
        install: function (t) {
            var a = t.modal;
            function i(t, e, n, i) {
                e = Y({ bgClose: !1, escClose: !0, labels: a.labels }, e);
                var r = a.dialog(t(e), e),
                    o = new he(),
                    s = !1;
                return (
                    Zt(r.$el, "submit", "form", function (t) {
                        t.preventDefault(), o.resolve(i && i(r)), (s = !0), r.hide();
                    }),
                        Zt(r.$el, "hide", function () {
                            return !s && n(o);
                        }),
                        (o.promise.dialog = r),
                        o.promise
                );
            }
            (a.dialog = function (t, e) {
                var n = a('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", e);
                return (
                    n.show(),
                        Zt(
                            n.$el,
                            "hidden",
                            function () {
                                return le.resolve().then(function () {
                                    return n.$destroy(!0);
                                });
                            },
                            { self: !0 }
                        ),
                        n
                );
            }),
                (a.alert = function (e, t) {
                    return i(
                        function (t) {
                            t = t.labels;
                            return '<div class="uk-modal-body">' + (N(e) ? e : be(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + t.ok + "</button> </div>";
                        },
                        t,
                        function (t) {
                            return t.resolve();
                        }
                    );
                }),
                (a.confirm = function (e, t) {
                    return i(
                        function (t) {
                            t = t.labels;
                            return (
                                '<form> <div class="uk-modal-body">' +
                                (N(e) ? e : be(e)) +
                                '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                                t.cancel +
                                '</button> <button class="uk-button uk-button-primary" autofocus>' +
                                t.ok +
                                "</button> </div> </form>"
                            );
                        },
                        t,
                        function (t) {
                            return t.reject();
                        }
                    );
                }),
                (a.prompt = function (e, n, t) {
                    return i(
                        function (t) {
                            t = t.labels;
                            return (
                                '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                                (N(e) ? e : be(e)) +
                                '</label> <input class="uk-input" value="' +
                                (n || "") +
                                '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                                t.cancel +
                                '</button> <button class="uk-button uk-button-primary">' +
                                t.ok +
                                "</button> </div> </form>"
                            );
                        },
                        t,
                        function (t) {
                            return t.resolve(null);
                        },
                        function (t) {
                            return Ne("input", t.$el).value;
                        }
                    );
                }),
                (a.labels = { ok: "Ok", cancel: "Cancel" });
        },
        mixins: [wr],
        data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" },
        events: [
            {
                name: "show",
                self: !0,
                handler: function () {
                    Le(this.panel, "uk-margin-auto-vertical") ? Be(this.$el, "uk-flex") : qe(this.$el, "display", "block"), hn(this.$el);
                },
            },
            {
                name: "hidden",
                self: !0,
                handler: function () {
                    qe(this.$el, "display", ""), Oe(this.$el, "uk-flex");
                },
            },
        ],
    };
    (o = ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"),
        (l = {
            mixins: [vi, Ei, Pi],
            props: {
                dropdown: String,
                mode: "list",
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: Boolean,
                duration: Number,
            },
            data: {
                dropdown: o,
                align: lt ? "right" : "left",
                clsDrop: "uk-navbar-dropdown",
                mode: void 0,
                offset: void 0,
                delayShow: void 0,
                delayHide: void 0,
                boundaryAlign: void 0,
                flip: "x",
                boundary: !0,
                dropbar: !1,
                dropbarMode: "slide",
                dropbarAnchor: !1,
                duration: 200,
                forceHeight: !0,
                selMinHeight: o,
                container: !1,
            },
            computed: {
                boundary: function (t, e) {
                    var n = t.boundary,
                        t = t.boundaryAlign;
                    return !0 === n || t ? e : n;
                },
                dropbarAnchor: function (t, e) {
                    return Lt(t.dropbarAnchor, e);
                },
                pos: function (t) {
                    return "bottom-" + t.align;
                },
                dropbar: {
                    get: function (t) {
                        t = t.dropbar;
                        return t ? (t = this._dropbar || Lt(t, this.$el) || Ne("+ .uk-navbar-dropbar", this.$el)) || (this._dropbar = Ne("<div></div>")) : null;
                    },
                    watch: function (t) {
                        Be(t, "uk-navbar-dropbar");
                    },
                    immediate: !0,
                },
                dropContainer: function (t, e) {
                    return this.container || e;
                },
                dropdowns: {
                    get: function (t, e) {
                        var n = this,
                            t = t.clsDrop,
                            i = ze("." + t, e);
                        return (
                            this.dropContainer !== e &&
                            ze("." + t, this.dropContainer).forEach(function (t) {
                                var e = n.getDropdown(t);
                                !w(i, t) && e && e.target && Bt(e.target, n.$el) && i.push(t);
                            }),
                                i
                        );
                    },
                    watch: function (t) {
                        var e = this;
                        this.$create(
                            "drop",
                            t.filter(function (t) {
                                return !e.getDropdown(t);
                            }),
                            Y({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset })
                        );
                    },
                    immediate: !0,
                },
                toggles: function (t, e) {
                    return ze(t.dropdown, e);
                },
            },
            disconnected: function () {
                this.dropbar && Se(this.dropbar), delete this._dropbar;
            },
            events: [
                {
                    name: "mouseover focusin",
                    delegate: function () {
                        return this.dropdown;
                    },
                    handler: function (t) {
                        var e = t.current,
                            t = this.getActive();
                        t && w(t.mode, "hover") && t.target && !Bt(t.target, e) && !t.tracker.movesTo(t.$el) && t.hide(!1);
                    },
                },
                {
                    name: "keydown",
                    delegate: function () {
                        return this.dropdown;
                    },
                    handler: function (t) {
                        var e = t.current,
                            n = t.keyCode,
                            i = this.getActive();
                        n === $r.DOWN &&
                        st(e, "aria-expanded") &&
                        (t.preventDefault(),
                            i && i.target === e
                                ? kr(i.$el)
                                : (e.click(),
                                    te(this.dropContainer, "show", function (t) {
                                        return kr(t.target);
                                    }))),
                            yr(t, this.toggles, i);
                    },
                },
                {
                    name: "keydown",
                    el: function () {
                        return this.dropContainer;
                    },
                    delegate: function () {
                        return "." + this.clsDrop;
                    },
                    handler: function (t) {
                        var e,
                            n,
                            i = t.current,
                            r = t.keyCode;
                        w(this.dropdowns, i) &&
                        ((e = this.getActive()),
                            (i = x((n = ze(Et, i)), function (t) {
                                return Nt(t, ":focus");
                            })),
                        r === $r.UP && (t.preventDefault(), 0 < i && n[i - 1].focus()),
                        r === $r.DOWN && (t.preventDefault(), i < n.length - 1 && n[i + 1].focus()),
                        r === $r.ESC && e && e.target && e.target.focus(),
                            yr(t, this.toggles, e));
                    },
                },
                {
                    name: "mouseleave",
                    el: function () {
                        return this.dropbar;
                    },
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function () {
                        var t = this.getActive();
                        t &&
                        w(t.mode, "hover") &&
                        !this.dropdowns.some(function (t) {
                            return Nt(t, ":hover");
                        }) &&
                        t.hide();
                    },
                },
                {
                    name: "beforeshow",
                    el: function () {
                        return this.dropContainer;
                    },
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function () {
                        Ct(this.dropbar) || ke(this.dropbarAnchor || this.$el, this.dropbar);
                    },
                },
                {
                    name: "show",
                    el: function () {
                        return this.dropContainer;
                    },
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function (t, e) {
                        var n = e.$el,
                            e = e.dir;
                        Le(n, this.clsDrop) &&
                        ("slide" === this.dropbarMode && Be(this.dropbar, "uk-navbar-dropbar-slide"),
                        this.clsDrop && Be(n, this.clsDrop + "-dropbar"),
                        "bottom" === e && this.transitionTo(n.offsetHeight + L(qe(n, "marginTop")) + L(qe(n, "marginBottom")), n));
                    },
                },
                {
                    name: "beforehide",
                    el: function () {
                        return this.dropContainer;
                    },
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function (t, e) {
                        var n = e.$el,
                            e = this.getActive();
                        Nt(this.dropbar, ":hover") && e && e.$el === n && t.preventDefault();
                    },
                },
                {
                    name: "hide",
                    el: function () {
                        return this.dropContainer;
                    },
                    filter: function () {
                        return this.dropbar;
                    },
                    handler: function (t, e) {
                        var n = e.$el;
                        Le(n, this.clsDrop) && (((e = this.getActive()) && e.$el !== n) || this.transitionTo(0));
                    },
                },
            ],
            methods: {
                getActive: function () {
                    return Ii && Bt(Ii.target, this.$el) && Ii;
                },
                transitionTo: function (t, e) {
                    var n = this,
                        i = this.dropbar,
                        r = $t(i) ? hn(i) : 0;
                    return (
                        qe((e = r < t && e), "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"),
                            hn(i, r),
                            Qe.cancel([e, i]),
                            le
                                .all([Qe.start(i, { height: t }, this.duration), Qe.start(e, { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" }, this.duration)])
                                .catch(Q)
                                .then(function () {
                                    qe(e, { clip: "" }), n.$update(i);
                                })
                    );
                },
                getDropdown: function (t) {
                    return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
                },
            },
        });
    function yr(t, e, n) {
        var i = t.current,
            r = t.keyCode,
            t = (n && n.target) || i,
            i = e.indexOf(t);
        r === $r.LEFT && 0 < i && (n && n.hide(!1), e[i - 1].focus()), r === $r.RIGHT && i < e.length - 1 && (n && n.hide(!1), e[i + 1].focus()), r === $r.TAB && (t.focus(), n && n.hide(!1));
    }
    function kr(t) {
        Ne(":focus", t) || ((t = Ne(Et, t)) && t.focus());
    }
    var $r = { TAB: 9, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
        t = {
            mixins: [wr],
            args: "mode",
            props: { mode: String, flip: Boolean, overlay: Boolean },
            data: {
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsContainer: "uk-offcanvas-container",
                selPanel: ".uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsContainerAnimation: "uk-offcanvas-container-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                selClose: ".uk-offcanvas-close",
                container: !1,
            },
            computed: {
                clsFlip: function (t) {
                    var e = t.flip,
                        t = t.clsFlip;
                    return e ? t : "";
                },
                clsOverlay: function (t) {
                    var e = t.overlay,
                        t = t.clsOverlay;
                    return e ? t : "";
                },
                clsMode: function (t) {
                    var e = t.mode;
                    return t.clsMode + "-" + e;
                },
                clsSidebarAnimation: function (t) {
                    var e = t.mode,
                        t = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : t;
                },
                clsContainerAnimation: function (t) {
                    var e = t.mode,
                        t = t.clsContainerAnimation;
                    return "push" !== e && "reveal" !== e ? "" : t;
                },
                transitionElement: function (t) {
                    return "reveal" === t.mode ? Ct(this.panel) : this.panel;
                },
            },
            update: {
                read: function () {
                    this.isToggled() && !$t(this.$el) && this.hide();
                },
                events: ["resize"],
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return 'a[href^="#"]';
                    },
                    handler: function (t) {
                        var e = t.current.hash;
                        !t.defaultPrevented && e && Ne(e, document.body) && this.hide();
                    },
                },
                {
                    name: "touchstart",
                    passive: !0,
                    el: function () {
                        return this.panel;
                    },
                    handler: function (t) {
                        t = t.targetTouches;
                        1 === t.length && (this.clientY = t[0].clientY);
                    },
                },
                {
                    name: "touchmove",
                    self: !0,
                    passive: !1,
                    filter: function () {
                        return this.overlay;
                    },
                    handler: function (t) {
                        t.cancelable && t.preventDefault();
                    },
                },
                {
                    name: "touchmove",
                    passive: !1,
                    el: function () {
                        return this.panel;
                    },
                    handler: function (t) {
                        var e, n, i, r;
                        1 === t.targetTouches.length &&
                        ((e = t.targetTouches[0].clientY - this.clientY),
                            (n = (r = this.panel).scrollTop),
                        ((i = r.scrollHeight) <= (r = r.clientHeight) || (0 === n && 0 < e) || (i - n <= r && e < 0)) && t.cancelable && t.preventDefault());
                    },
                },
                {
                    name: "show",
                    self: !0,
                    handler: function () {
                        "reveal" !== this.mode || Le(Ct(this.panel), this.clsMode) || (Ie(this.panel, "<div>"), Be(Ct(this.panel), this.clsMode)),
                            qe(document.documentElement, "overflowY", this.overlay ? "hidden" : ""),
                            Be(document.body, this.clsContainer, this.clsFlip),
                            qe(document.body, "touch-action", "pan-y pinch-zoom"),
                            qe(this.$el, "display", "block"),
                            Be(this.$el, this.clsOverlay),
                            Be(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""),
                            hn(document.body),
                            Be(document.body, this.clsContainerAnimation),
                        this.clsContainerAnimation && (Sr().content += ",user-scalable=0");
                    },
                },
                {
                    name: "hide",
                    self: !0,
                    handler: function () {
                        Oe(document.body, this.clsContainerAnimation), qe(document.body, "touch-action", "");
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function () {
                        var t;
                        this.clsContainerAnimation && ((t = Sr()).content = t.content.replace(/,user-scalable=0$/, "")),
                        "reveal" === this.mode && Te(this.panel),
                            Oe(this.panel, this.clsSidebarAnimation, this.clsMode),
                            Oe(this.$el, this.clsOverlay),
                            qe(this.$el, "display", ""),
                            Oe(document.body, this.clsContainer, this.clsFlip),
                            qe(document.documentElement, "overflowY", "");
                    },
                },
                {
                    name: "swipeLeft swipeRight",
                    handler: function (t) {
                        this.isToggled() && u(t.type, "Left") ^ this.flip && this.hide();
                    },
                },
            ],
        };
    function Sr() {
        return Ne('meta[name="viewport"]', document.head) || xe(document.head, '<meta name="viewport">');
    }
    var dt = {
            mixins: [vi],
            props: { selContainer: String, selContent: String, minHeight: Number },
            data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 },
            computed: {
                container: function (t, e) {
                    return Dt(e, t.selContainer);
                },
                content: function (t, e) {
                    return Dt(e, t.selContent);
                },
            },
            connected: function () {
                qe(this.$el, "minHeight", this.minHeight);
            },
            update: {
                read: function () {
                    return !!(this.content && this.container && $t(this.$el)) && { current: L(qe(this.$el, "maxHeight")), max: Math.max(this.minHeight, hn(this.container) - (sn(this.content).height - hn(this.$el))) };
                },
                write: function (t) {
                    var e = t.current,
                        t = t.max;
                    qe(this.$el, "maxHeight", t), Math.round(e) !== Math.round(t) && ee(this.$el, "resize");
                },
                events: ["resize"],
            },
        },
        ft = {
            props: { offset: Number },
            data: { offset: 0 },
            methods: {
                scrollTo: function (t) {
                    var e = this;
                    (t = (t && Ne(t)) || document.body),
                    ee(this.$el, "beforescroll", [this, t]) &&
                    Rn(t, { offset: this.offset }).then(function () {
                        return ee(e.$el, "scrolled", [e, t]);
                    });
                },
            },
            events: {
                click: function (t) {
                    t.defaultPrevented || (t.preventDefault(), this.scrollTo("#" + Jt(decodeURIComponent((this.$el.hash || "").substr(1)))));
                },
            },
        },
        Ir = "_ukScrollspy",
        At = {
            args: "cls",
            props: { cls: String, target: String, hidden: Boolean, offsetTop: Number, offsetLeft: Number, repeat: Boolean, delay: Number },
            data: function () {
                return { cls: !1, target: !1, hidden: !0, offsetTop: 0, offsetLeft: 0, repeat: !1, delay: 0, inViewClass: "uk-scrollspy-inview" };
            },
            computed: {
                elements: {
                    get: function (t, e) {
                        t = t.target;
                        return t ? ze(t, e) : [e];
                    },
                    watch: function (t) {
                        this.hidden && qe(_t(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden");
                    },
                    immediate: !0,
                },
            },
            disconnected: function () {
                var e = this;
                this.elements.forEach(function (t) {
                    Oe(t, e.inViewClass, t[Ir] ? t[Ir].cls : ""), delete t[Ir];
                });
            },
            update: [
                {
                    read: function (t) {
                        var e = this;
                        if (!t.update)
                            return (
                                le.resolve().then(function () {
                                    e.$emit(), (t.update = !0);
                                }),
                                    !1
                            );
                        this.elements.forEach(function (t) {
                            t[Ir] || (t[Ir] = { cls: ut(t, "uk-scrollspy-class") || e.cls }), (t[Ir].show = Wn(t, e.offsetTop, e.offsetLeft));
                        });
                    },
                    write: function (n) {
                        var i = this;
                        this.elements.forEach(function (t) {
                            var e = t[Ir];
                            !e.show || e.inview || e.queued
                                ? !e.show && e.inview && !e.queued && i.repeat && i.toggle(t, !1)
                                : ((e.queued = !0),
                                    (n.promise = (n.promise || le.resolve())
                                        .then(function () {
                                            return new le(function (t) {
                                                return setTimeout(t, i.delay);
                                            });
                                        })
                                        .then(function () {
                                            i.toggle(t, !0),
                                                setTimeout(function () {
                                                    (e.queued = !1), i.$emit();
                                                }, 300);
                                        })));
                        });
                    },
                    events: ["scroll", "resize"],
                },
            ],
            methods: {
                toggle: function (t, e) {
                    var n = t[Ir];
                    n.off && n.off(),
                        qe(t, "visibility", !e && this.hidden ? "hidden" : ""),
                        Fe(t, this.inViewClass, e),
                        Fe(t, n.cls),
                    /\buk-animation-/.test(n.cls) &&
                    (n.off = te(t, "animationcancel animationend", function () {
                        return Pe(t, "uk-animation-[\\w-]+");
                    })),
                        ee(t, e ? "inview" : "outview"),
                        (n.inview = e),
                        this.$update(t);
                },
            },
        },
        me = {
            props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number },
            data: { cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0 },
            computed: {
                links: {
                    get: function (t, e) {
                        return ze('a[href^="#"]', e).filter(function (t) {
                            return t.hash;
                        });
                    },
                    watch: function (t) {
                        this.scroll && this.$create("scroll", t, { offset: this.offset || 0 });
                    },
                    immediate: !0,
                },
                targets: function () {
                    return ze(
                        this.links
                            .map(function (t) {
                                return Jt(t.hash).substr(1);
                            })
                            .join(",")
                    );
                },
                elements: function (t) {
                    t = t.closest;
                    return Dt(this.links, t || "*");
                },
            },
            update: [
                {
                    read: function () {
                        var n = this,
                            t = this.targets.length;
                        if (!t || !$t(this.$el)) return !1;
                        var i = Un(this.targets, /auto|scroll/, !0)[0],
                            e = i.scrollTop,
                            r = i.scrollHeight - Gn(i),
                            o = !1;
                        return (
                            e === r
                                ? (o = t - 1)
                                : (this.targets.every(function (t, e) {
                                    if (an(t).top - an(Yn(i)).top - n.offset <= 0) return (o = e), !0;
                                }),
                                !1 === o && this.overflow && (o = 0)),
                                { active: o }
                        );
                    },
                    write: function (t) {
                        var e = t.active,
                            t = !1 !== e && !Le(this.elements[e], this.cls);
                        this.links.forEach(function (t) {
                            return t.blur();
                        }),
                            Oe(this.elements, this.cls),
                            Be(this.elements[e], this.cls),
                        t && ee(this.$el, "active", [e, this.elements[e]]);
                    },
                    events: ["scroll", "resize"],
                },
            ],
        },
        ei = {
            mixins: [vi, mr],
            props: {
                top: null,
                bottom: Boolean,
                offset: String,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                widthElement: Boolean,
                showOnUp: Boolean,
                targetOffset: Number,
            },
            data: { top: 0, bottom: !1, offset: 0, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", widthElement: !1, showOnUp: !1, targetOffset: !1 },
            computed: {
                offset: function (t) {
                    return mn(t.offset);
                },
                selTarget: function (t, e) {
                    t = t.selTarget;
                    return (t && Ne(t, e)) || e;
                },
                widthElement: function (t, e) {
                    return Lt(t.widthElement, e) || this.placeholder;
                },
                isActive: {
                    get: function () {
                        return Le(this.selTarget, this.clsActive);
                    },
                    set: function (t) {
                        t && !this.isActive
                            ? (He(this.selTarget, this.clsInactive, this.clsActive), ee(this.$el, "active"))
                            : t || Le(this.selTarget, this.clsInactive) || (He(this.selTarget, this.clsActive, this.clsInactive), ee(this.$el, "inactive"));
                    },
                },
            },
            connected: function () {
                (this.placeholder = Ne("+ .uk-sticky-placeholder", this.$el) || Ne('<div class="uk-sticky-placeholder"></div>')), (this.isFixed = !1), (this.isActive = !1);
            },
            disconnected: function () {
                this.isFixed && (this.hide(), Oe(this.selTarget, this.clsInactive)), Se(this.placeholder), (this.placeholder = null), (this.widthElement = null);
            },
            events: [
                {
                    name: "load hashchange popstate",
                    el: function () {
                        return window;
                    },
                    handler: function () {
                        var i,
                            r = this;
                        !1 !== this.targetOffset &&
                        location.hash &&
                        0 < window.pageYOffset &&
                        (i = Ne(location.hash)) &&
                        vn.read(function () {
                            var t = an(i).top,
                                e = an(r.$el).top,
                                n = r.$el.offsetHeight;
                            r.isFixed && t <= e + n && e <= t + i.offsetHeight && Vn(window, t - n - (D(r.targetOffset) ? r.targetOffset : 0) - r.offset);
                        });
                    },
                },
            ],
            update: [
                {
                    read: function (t, e) {
                        t = t.height;
                        if (((this.inactive = !this.matchMedia || !$t(this.$el)), this.inactive)) return !1;
                        this.isActive && e.has("resize") && (this.hide(), (t = this.$el.offsetHeight), this.show()),
                            (t = this.isActive ? t : this.$el.offsetHeight),
                            (this.topOffset = an(this.isFixed ? this.placeholder : this.$el).top),
                            (this.bottomOffset = this.topOffset + t),
                            (this.offsetParentTop = an(this.$el.offsetParent).top);
                        e = Er("bottom", this);
                        return (
                            (this.top = Math.max(L(Er("top", this)), this.topOffset) - this.offset),
                                (this.bottom = e && e - this.$el.offsetHeight),
                                (this.width = sn($t(this.widthElement) ? this.widthElement : this.$el).width),
                                { height: t, top: cn(this.placeholder)[0], margins: qe(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"]) }
                        );
                    },
                    write: function (t) {
                        var e = t.height,
                            n = t.margins,
                            t = this.placeholder;
                        qe(t, Y({ height: e }, n)), Bt(t, document) || (ke(this.$el, t), (t.hidden = !0)), (this.isActive = !!this.isActive);
                    },
                    events: ["resize"],
                },
                {
                    read: function (t) {
                        t = t.scroll;
                        return void 0 === t && (t = 0), (this.scroll = window.pageYOffset), { dir: t <= this.scroll ? "down" : "up", scroll: this.scroll };
                    },
                    write: function (t, e) {
                        var n = this,
                            i = Date.now(),
                            r = e.has("scroll"),
                            o = t.initTimestamp;
                        void 0 === o && (o = 0);
                        var s = t.dir,
                            a = t.lastDir,
                            u = t.lastScroll,
                            c = t.scroll,
                            e = t.top;
                        (t.lastScroll = c) < 0 ||
                        (c === u && r) ||
                        (this.showOnUp && !r && !this.isFixed) ||
                        ((300 < i - o || s !== a) && ((t.initScroll = c), (t.initTimestamp = i)),
                            (t.lastDir = s),
                        (this.showOnUp && !this.isFixed && Math.abs(t.initScroll - c) <= 30 && Math.abs(u - c) <= 10) ||
                        (this.inactive || c < this.top || (this.showOnUp && (c <= this.top || ("down" === s && r) || ("up" === s && !this.isFixed && c <= this.bottomOffset)))
                            ? this.isFixed
                                ? ((this.isFixed = !1),
                                    this.animation && c > this.topOffset
                                        ? (rn.cancel(this.$el),
                                            rn.out(this.$el, this.animation).then(function () {
                                                return n.hide();
                                            }, Q))
                                        : this.hide())
                                : rn.inProgress(this.$el) && c < e && (rn.cancel(this.$el), this.hide())
                            : this.isFixed
                                ? this.update()
                                : this.animation
                                    ? (rn.cancel(this.$el), this.show(), rn.in(this.$el, this.animation).catch(Q))
                                    : this.show()));
                    },
                    events: ["resize", "scroll"],
                },
            ],
            methods: {
                show: function () {
                    (this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
                },
                hide: function () {
                    (this.isActive = !1), Oe(this.$el, this.clsFixed, this.clsBelow), qe(this.$el, { position: "", top: "", width: "" }), (this.placeholder.hidden = !0);
                },
                update: function () {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset),
                        n = "fixed";
                    D(this.bottom) && this.scroll > this.bottom - this.offset && ((e = this.bottom - this.offsetParentTop), (n = "absolute")),
                        qe(this.$el, { position: n, top: e + "px", width: this.width }),
                        (this.isActive = t),
                        Fe(this.$el, this.clsBelow, this.scroll > this.bottomOffset),
                        Be(this.$el, this.clsFixed);
                },
            },
        };
    function Er(t, e) {
        var n = e.$props,
            i = e.$el,
            e = e[t + "Offset"],
            t = n[t];
        if (t) return N(t) && t.match(/^-?\d/) ? e + mn(t) : an(!0 === t ? Ct(i) : Lt(t, i)).bottom;
    }
    var Tr,
        Cr,
        _r,
        pr = {
            mixins: [wi],
            args: "connect",
            props: { connect: String, toggle: String, itemNav: String, active: Number, swiping: Boolean },
            data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: !1, active: 0, swiping: !0, cls: "uk-active", attrItem: "uk-switcher-item" },
            computed: {
                connects: {
                    get: function (t, e) {
                        return Ft(t.connect, e);
                    },
                    watch: function (t) {
                        var n = this;
                        this.swiping && qe(t, "touch-action", "pan-y pinch-zoom");
                        var i = this.index();
                        this.connects.forEach(function (t) {
                            return Pt(t).forEach(function (t, e) {
                                return Fe(t, n.cls, e === i);
                            });
                        });
                    },
                    immediate: !0,
                },
                toggles: {
                    get: function (t, e) {
                        return ze(t.toggle, e).filter(function (t) {
                            return !Nt(t, ".uk-disabled *, .uk-disabled, [disabled]");
                        });
                    },
                    watch: function (t) {
                        var e = this.index();
                        this.show(~e ? e : t[this.active] || t[0]);
                    },
                    immediate: !0,
                },
                children: function () {
                    var t = this;
                    return Pt(this.$el).filter(function (e) {
                        return t.toggles.some(function (t) {
                            return Bt(t, e);
                        });
                    });
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return this.toggle;
                    },
                    handler: function (t) {
                        t.preventDefault(), this.show(t.current);
                    },
                },
                {
                    name: "click",
                    el: function () {
                        return this.connects.concat(this.itemNav ? Ft(this.itemNav, this.$el) : []);
                    },
                    delegate: function () {
                        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
                    },
                    handler: function (t) {
                        t.preventDefault(), this.show(ut(t.current, this.attrItem));
                    },
                },
                {
                    name: "swipeRight swipeLeft",
                    filter: function () {
                        return this.swiping;
                    },
                    el: function () {
                        return this.connects;
                    },
                    handler: function (t) {
                        t = t.type;
                        this.show(u(t, "Left") ? "next" : "previous");
                    },
                },
            ],
            methods: {
                index: function () {
                    var e = this;
                    return x(this.children, function (t) {
                        return Le(t, e.cls);
                    });
                },
                show: function (t) {
                    var n = this,
                        i = this.index(),
                        r = it(this.children[it(t, this.toggles, i)], Pt(this.$el));
                    i !== r &&
                    (this.children.forEach(function (t, e) {
                        Fe(t, n.cls, r === e), ot(n.toggles[e], "aria-expanded", r === e);
                    }),
                        this.connects.forEach(function (t) {
                            var e = t.children;
                            return n
                                .toggleElement(
                                    W(e).filter(function (t) {
                                        return Le(t, n.cls);
                                    }),
                                    !1,
                                    0 <= i
                                )
                                .then(function () {
                                    return n.toggleElement(e[r], !0, 0 <= i);
                                });
                        }));
                },
            },
        },
        Pi = {
            mixins: [vi],
            extends: pr,
            props: { media: Boolean },
            data: { media: 960, attrItem: "uk-tab-item" },
            connected: function () {
                var t = Le(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Le(this.$el, "uk-tab-right") && "uk-tab-right";
                t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
            },
        },
        o = {
            mixins: [mr, wi],
            args: "target",
            props: { href: String, target: null, mode: "list", queued: Boolean },
            data: { href: !1, target: !1, mode: "click", queued: !0 },
            connected: function () {
                w(this.mode, "media") || Tt(this.$el) || ot(this.$el, "tabindex", "0");
            },
            computed: {
                target: {
                    get: function (t, e) {
                        var n = t.href;
                        return ((t = Ft((t = t.target) || n, e)).length && t) || [e];
                    },
                    watch: function () {
                        this.updateAria();
                    },
                    immediate: !0,
                },
            },
            events: [
                {
                    name: mt,
                    filter: function () {
                        return w(this.mode, "hover");
                    },
                    handler: function (t) {
                        var e = this;
                        ue(t) &&
                        !this._showState &&
                        (ee(this.$el, "focus"),
                            te(
                                document,
                                mt,
                                function () {
                                    return ee(e.$el, "blur");
                                },
                                !0,
                                function (t) {
                                    return !Bt(t.target, e.$el);
                                }
                            ),
                        w(this.mode, "click") && (this._preventClick = !0));
                    },
                },
                {
                    name: wt + " " + bt + " focus blur",
                    filter: function () {
                        return w(this.mode, "hover");
                    },
                    handler: function (t) {
                        var e, n;
                        ue(t) ||
                        ((e = w([wt, "focus"], t.type)),
                            (n = ot(this.$el, "aria-expanded")),
                        (!e && ((t.type === bt && Nt(this.$el, ":focus")) || ("blur" === t.type && Nt(this.$el, ":hover")))) ||
                        (this._showState && e === (n !== this._showState) ? e || (this._showState = null) : ((this._showState = e ? n : null), this.toggle("toggle" + (e ? "show" : "hide")))));
                    },
                },
                {
                    name: "keydown",
                    filter: function () {
                        return w(this.mode, "click");
                    },
                    handler: function (t) {
                        32 === t.keyCode && (t.preventDefault(), this.$el.click());
                    },
                },
                {
                    name: "click",
                    filter: function () {
                        return w(this.mode, "click");
                    },
                    handler: function (t) {
                        if (this._preventClick) return (this._preventClick = null);
                        var e;
                        (Dt(t.target, 'a[href="#"], a[href=""]') || ((e = Dt(t.target, "a[href]")) && ("true" !== ot(this.$el, "aria-expanded") || (e.hash && Nt(this.target, e.hash))))) && t.preventDefault(), this.toggle();
                    },
                },
                {
                    name: "toggled",
                    self: !0,
                    el: function () {
                        return this.target;
                    },
                    handler: function (t, e) {
                        t.target === this.target[0] && this.updateAria(e);
                    },
                },
            ],
            update: {
                read: function () {
                    return !(!w(this.mode, "media") || !this.media) && { match: this.matchMedia };
                },
                write: function (t) {
                    var e = t.match,
                        t = this.isToggled(this.target);
                    (e ? !t : t) && this.toggle();
                },
                events: ["resize"],
            },
            methods: {
                toggle: function (t) {
                    var n = this;
                    if (ee(this.target, t || "toggle", [this])) {
                        if (!this.queued) return this.toggleElement(this.target);
                        var e,
                            i = this.target.filter(function (t) {
                                return Le(t, n.clsLeave);
                            });
                        i.length
                            ? this.target.forEach(function (t) {
                                var e = w(i, t);
                                n.toggleElement(t, e, e);
                            })
                            : ((e = this.target.filter(this.isToggled)),
                                this.toggleElement(e, !1).then(function () {
                                    return n.toggleElement(
                                        n.target.filter(function (t) {
                                            return !w(e, t);
                                        }),
                                        !0
                                    );
                                }));
                    }
                },
                updateAria: function (t) {
                    w(this.mode, "media") || ot(this.$el, "aria-expanded", M(t) ? t : this.isToggled(this.target));
                },
            },
        };
    function Ar(t) {
        for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) Me(e[i], Cr);
        for (var r = 0; r < n.length; r++) Me(n[r], _r);
    }
    function Mr(t) {
        var e = t.target,
            n = t.attributeName,
            t = di(n);
        t && t in Tr && (st(e, n) ? Tr[t](e) : (t = Tr.getComponent(e, t)) && t.$destroy());
    }
    X(
        Object.freeze({
            __proto__: null,
            Accordion: xi,
            Alert: ki,
            Cover: Si,
            Drop: Ci,
            Dropdown: Ci,
            FormCustom: _i,
            Gif: Ai,
            Grid: Bi,
            HeightMatch: Hi,
            HeightViewport: ji,
            Icon: Ji,
            Img: rr,
            Leader: gr,
            Margin: Mi,
            Modal: xr,
            Nav: { extends: xi, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } },
            Navbar: l,
            Offcanvas: t,
            OverflowAuto: dt,
            Responsive: {
                props: ["width", "height"],
                connected: function () {
                    Be(this.$el, "uk-responsive-width");
                },
                update: {
                    read: function () {
                        return !!($t(this.$el) && this.width && this.height) && { width: ln(Ct(this.$el)), height: this.height };
                    },
                    write: function (t) {
                        hn(this.$el, nt.contain({ height: this.height, width: this.width }, t).height);
                    },
                    events: ["resize"],
                },
            },
            Scroll: ft,
            Scrollspy: At,
            ScrollspyNav: me,
            Sticky: ei,
            Svg: Wi,
            Switcher: pr,
            Tab: Pi,
            Toggle: o,
            Video: $i,
            Close: er,
            Spinner: nr,
            SlidenavNext: Qi,
            SlidenavPrevious: Qi,
            SearchIcon: tr,
            Marker: Zi,
            NavbarToggleIcon: Zi,
            OverlayIcon: Zi,
            PaginationNext: Zi,
            PaginationPrevious: Zi,
            Totop: Zi,
        }),
        function (t, e) {
            return ni.component(e, t);
        }
    ),
        ni.use(function (e) {
            var t, n, i, r;
            ct &&
            ((n = function () {
                t ||
                ((t = !0),
                    vn.write(function () {
                        return (t = !1);
                    }),
                    e.update(null, "resize"));
            }),
                Zt(window, "load resize", n),
                Zt(document, "loadedmetadata load", n, !0),
            "ResizeObserver" in window && new ResizeObserver(n).observe(document.documentElement),
                Zt(
                    window,
                    "scroll",
                    function (t) {
                        i ||
                        ((i = !0),
                            vn.write(function () {
                                return (i = !1);
                            }),
                            e.update(null, t.type));
                    },
                    { passive: !0, capture: !0 }
                ),
                (r = 0),
                Zt(
                    document,
                    "animationstart",
                    function (t) {
                        t = t.target;
                        (qe(t, "animationName") || "").match(/^uk-.*(left|right)/) &&
                        (r++,
                            qe(document.documentElement, "overflowX", "hidden"),
                            setTimeout(function () {
                                --r || qe(document.documentElement, "overflowX", "");
                            }, R(qe(t, "animationDuration")) + 100));
                    },
                    !0
                ),
                Zt(
                    document,
                    mt,
                    function (t) {
                        var s, a;
                        ue(t) &&
                        ((s = ce(t)),
                            (a = "tagName" in t.target ? t.target : Ct(t.target)),
                            te(document, vt + " " + xt + " scroll", function (t) {
                                var e = ce(t),
                                    r = e.x,
                                    o = e.y;
                                (("scroll" !== t.type && a && r && 100 < Math.abs(s.x - r)) || (o && 100 < Math.abs(s.y - o))) &&
                                setTimeout(function () {
                                    var t, e, n, i;
                                    ee(a, "swipe"), ee(a, "swipe" + ((t = s.x), (e = s.y), (n = r), (i = o), Math.abs(t - n) >= Math.abs(e - i) ? (0 < t - n ? "Left" : "Right") : 0 < e - i ? "Up" : "Down"));
                                });
                            }));
                    },
                    { passive: !0 }
                ));
        }),
        (Cr = (Tr = ni).connect),
        (_r = Tr.disconnect),
    ct &&
    window.MutationObserver &&
    vn.read(function () {
        document.body && Me(document.body, Cr),
            new MutationObserver(function (t) {
                return t.forEach(Ar);
            }).observe(document, { childList: !0, subtree: !0 }),
            new MutationObserver(function (t) {
                return t.forEach(Mr);
            }).observe(document, { attributes: !0, subtree: !0 }),
            (Tr._initialized = !0);
    });
    pr = {
        mixins: [vi],
        props: { date: String, clsWrapper: String },
        data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
        computed: {
            date: function (t) {
                t = t.date;
                return Date.parse(t);
            },
            days: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "days"), e);
            },
            hours: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "hours"), e);
            },
            minutes: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "minutes"), e);
            },
            seconds: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "seconds"), e);
            },
            units: function () {
                var e = this;
                return ["days", "hours", "minutes", "seconds"].filter(function (t) {
                    return e[t];
                });
            },
        },
        connected: function () {
            this.start();
        },
        disconnected: function () {
            var e = this;
            this.stop(),
                this.units.forEach(function (t) {
                    return we(e[t]);
                });
        },
        events: [
            {
                name: "visibilitychange",
                el: function () {
                    return document;
                },
                handler: function () {
                    document.hidden ? this.stop() : this.start();
                },
            },
        ],
        update: {
            write: function () {
                var i = this,
                    r = (function (t) {
                        t -= Date.now();
                        return { total: t, seconds: (t / 1e3) % 60, minutes: (t / 1e3 / 60) % 60, hours: (t / 1e3 / 60 / 60) % 24, days: t / 1e3 / 60 / 60 / 24 };
                    })(this.date);
                r.total <= 0 && (this.stop(), (r.days = r.hours = r.minutes = r.seconds = 0)),
                    this.units.forEach(function (t) {
                        var e = (e = String(Math.floor(r[t]))).length < 2 ? "0" + e : e,
                            n = i[t];
                        n.textContent !== e &&
                        ((e = e.split("")).length !== n.children.length &&
                        be(
                            n,
                            e
                                .map(function () {
                                    return "<span></span>";
                                })
                                .join("")
                        ),
                            e.forEach(function (t, e) {
                                return (n.children[e].textContent = t);
                            }));
                    });
            },
        },
        methods: {
            start: function () {
                this.stop(), this.date && this.units.length && (this.$update(), (this.timer = setInterval(this.$update, 1e3)));
            },
            stop: function () {
                this.timer && (clearInterval(this.timer), (this.timer = null));
            },
        },
    };
    var Nr = "uk-transition-leave",
        zr = "uk-transition-enter";
    function Dr(t, s, a, u) {
        void 0 === u && (u = 0);
        var c = Br(s, !0),
            h = { opacity: 1 },
            l = { opacity: 0 },
            e = function (t) {
                return function () {
                    return c === Br(s) ? t() : le.reject();
                };
            },
            n = e(function () {
                return (
                    Be(s, Nr),
                        le
                            .all(
                                Pr(s).map(function (e, n) {
                                    return new le(function (t) {
                                        return setTimeout(function () {
                                            return Qe.start(e, l, a / 2, "ease").then(t);
                                        }, n * u);
                                    });
                                })
                            )
                            .then(function () {
                                return Oe(s, Nr);
                            })
                );
            }),
            e = e(function () {
                var o = hn(s);
                return (
                    Be(s, zr),
                        t(),
                        qe(Pt(s), { opacity: 0 }),
                        new le(function (r) {
                            return requestAnimationFrame(function () {
                                var t = Pt(s),
                                    e = hn(s);
                                qe(s, "alignContent", "flex-start"), hn(s, o);
                                var n = Pr(s);
                                qe(t, l);
                                var i = n.map(function (e, n) {
                                    return new le(function (t) {
                                        return setTimeout(function () {
                                            return Qe.start(e, h, a / 2, "ease").then(t);
                                        }, n * u);
                                    });
                                });
                                o !== e && i.push(Qe.start(s, { height: e }, a / 2 + n.length * u, "ease")),
                                    le.all(i).then(function () {
                                        Oe(s, zr), c === Br(s) && (qe(s, { height: "", alignContent: "" }), qe(t, { opacity: "" }), delete s.dataset.transition), r();
                                    });
                            });
                        })
                );
            });
        return (Le(s, Nr) ? Or(s) : Le(s, zr) ? Or(s).then(n) : n()).then(e);
    }
    function Br(t, e) {
        return e && (t.dataset.transition = 1 + Br(t)), H(t.dataset.transition) || 0;
    }
    function Or(t) {
        return le.all(
            Pt(t)
                .filter(Qe.inProgress)
                .map(function (e) {
                    return new le(function (t) {
                        return te(e, "transitionend transitioncanceled", t);
                    });
                })
        );
    }
    function Pr(t) {
        return Ni(Pt(t)).reduce(function (t, e) {
            return t.concat(
                K(
                    e.filter(function (t) {
                        return Wn(t);
                    }),
                    "offsetLeft"
                )
            );
        }, []);
    }
    function Hr(t, d, f) {
        return new le(function (l) {
            return requestAnimationFrame(function () {
                var u = Pt(d),
                    c = u.map(function (t) {
                        return Lr(t, !0);
                    }),
                    h = qe(d, ["height", "padding"]);
                Qe.cancel(d),
                    u.forEach(Qe.cancel),
                    Fr(d),
                    t(),
                    (u = u.concat(
                        Pt(d).filter(function (t) {
                            return !w(u, t);
                        })
                    )),
                    le.resolve().then(function () {
                        vn.flush();
                        var n,
                            i,
                            r,
                            t,
                            e,
                            o = qe(d, ["height", "padding"]),
                            e =
                                ((n = d),
                                    (r = c),
                                    (t = (i = u).map(function (t, e) {
                                        return !!(Ct(t) && e in r) && (r[e] ? ($t(t) ? jr(t) : { opacity: 0 }) : { opacity: $t(t) ? 1 : 0 });
                                    })),
                                    (e = t.map(function (t, e) {
                                        e = Ct(i[e]) === n && (r[e] || Lr(i[e]));
                                        return !!e && (t ? "opacity" in t || (e.opacity % 1 ? (t.opacity = 1) : delete e.opacity) : delete e.opacity, e);
                                    })),
                                    [t, e]),
                            s = e[0],
                            a = e[1];
                        u.forEach(function (t, e) {
                            return a[e] && qe(t, a[e]);
                        }),
                            qe(d, Y({ display: "block" }, h)),
                            requestAnimationFrame(function () {
                                var t = u
                                    .map(function (t, e) {
                                        return Ct(t) === d && Qe.start(t, s[e], f, "ease");
                                    })
                                    .concat(Qe.start(d, o, f, "ease"));
                                le.all(t)
                                    .then(function () {
                                        u.forEach(function (t, e) {
                                            return Ct(t) === d && qe(t, "display", 0 === s[e].opacity ? "none" : "");
                                        }),
                                            Fr(d);
                                    }, Q)
                                    .then(l);
                            });
                    });
            });
        });
    }
    function Lr(t, e) {
        var n = qe(t, "zIndex");
        return !!$t(t) && Y({ display: "", opacity: e ? qe(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: "auto" === n ? Ht(t) : n }, jr(t));
    }
    function Fr(t) {
        qe(t.children, { height: "", left: "", opacity: "", pointerEvents: "", position: "", top: "", marginTop: "", marginLeft: "", transform: "", width: "", zIndex: "" }), qe(t, { height: "", display: "", padding: "" });
    }
    function jr(t) {
        var e = an(t),
            n = e.height,
            i = e.width,
            r = un(t),
            e = r.top,
            r = r.left,
            t = qe(t, ["marginTop", "marginLeft"]);
        return { top: e, left: r, height: n, width: i, marginLeft: t.marginLeft, marginTop: t.marginTop, transform: "" };
    }
    (Pi = {
        props: { duration: Number, animation: Boolean },
        data: { duration: 150, animation: "slide" },
        methods: {
            animate: function (t, e) {
                var n = this;
                void 0 === e && (e = this.$el);
                var i = this.animation;
                return ("fade" === i
                    ? Dr
                    : "delayed-fade" === i
                        ? function () {
                            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                            return Dr.apply(void 0, t.concat([40]));
                        }
                        : i
                            ? Hr
                            : function () {
                                return t(), le.resolve();
                            })(t, e, this.duration).then(function () {
                    return n.$update(e, "resize");
                }, Q);
            },
        },
    }),
        (o = {
            mixins: [Pi],
            args: "target",
            props: { target: Boolean, selActive: Boolean },
            data: { target: null, selActive: !1, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 },
            computed: {
                toggles: {
                    get: function (t, e) {
                        t = t.attrItem;
                        return ze("[" + t + "],[data-" + t + "]", e);
                    },
                    watch: function () {
                        var e,
                            n = this;
                        this.updateState(),
                        !1 !== this.selActive &&
                        ((e = ze(this.selActive, this.$el)),
                            this.toggles.forEach(function (t) {
                                return Fe(t, n.cls, w(e, t));
                            }));
                    },
                    immediate: !0,
                },
                children: {
                    get: function (t, e) {
                        return ze(t.target + " > *", e);
                    },
                    watch: function (t, e) {
                        var n;
                        e &&
                        ((n = e),
                        (t = t).length !== n.length ||
                        !t.every(function (t) {
                            return ~n.indexOf(t);
                        })) &&
                        this.updateState();
                    },
                    immediate: !0,
                },
            },
            events: [
                {
                    name: "click",
                    delegate: function () {
                        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
                    },
                    handler: function (t) {
                        t.preventDefault(), this.apply(t.current);
                    },
                },
            ],
            methods: {
                apply: function (t) {
                    var e,
                        n,
                        i = this.getState(),
                        t = Vr(t, this.attrItem, this.getState());
                    (e = i),
                        (n = t),
                    ["filter", "sort"].every(function (t) {
                        return q(e[t], n[t]);
                    }) || this.setState(t);
                },
                getState: function () {
                    var n = this;
                    return this.toggles
                        .filter(function (t) {
                            return Le(t, n.cls);
                        })
                        .reduce(
                            function (t, e) {
                                return Vr(e, n.attrItem, t);
                            },
                            { filter: { "": "" }, sort: [] }
                        );
                },
                setState: function (n, i) {
                    var r = this;
                    void 0 === i && (i = !0),
                        (n = Y({ filter: { "": "" }, sort: [] }, n)),
                        ee(this.$el, "beforeFilter", [this, n]),
                        this.toggles.forEach(function (t) {
                            return Fe(
                                t,
                                r.cls,
                                !!(function (t, e, n) {
                                    var i = n.filter;
                                    void 0 === i && (i = { "": "" });
                                    var r = n.sort,
                                        o = r[0],
                                        s = r[1],
                                        n = Wr(t, e),
                                        r = n.filter;
                                    void 0 === r && (r = "");
                                    t = n.group;
                                    void 0 === t && (t = "");
                                    (e = n.sort), (n = n.order);
                                    void 0 === n && (n = "asc");
                                    return O(e) ? (t in i && r === i[t]) || (!r && t && !(t in i) && !i[""]) : o === e && s === n;
                                })(t, r.attrItem, n)
                            );
                        }),
                        le
                            .all(
                                ze(this.target, this.$el).map(function (t) {
                                    function e() {
                                        !(function (t, e, n) {
                                            var i = (function (t) {
                                                var t = t.filter,
                                                    e = "";
                                                return (
                                                    X(t, function (t) {
                                                        return (e += t || "");
                                                    }),
                                                        e
                                                );
                                            })(t);
                                            n.forEach(function (t) {
                                                return qe(t, "display", i && !Nt(t, i) ? "none" : "");
                                            });
                                            var r = t.sort,
                                                t = r[0],
                                                r = r[1];
                                            t &&
                                            (q(
                                                    (r = (function (t, n, i) {
                                                        return Y([], t).sort(function (t, e) {
                                                            return ut(t, n).localeCompare(ut(e, n), void 0, { numeric: !0 }) * ("asc" === i || -1);
                                                        });
                                                    })(n, t, r)),
                                                    n
                                                ) ||
                                                xe(e, r));
                                        })(n, t, Pt(t)),
                                            r.$update(r.$el);
                                    }
                                    return i ? r.animate(e, t) : e();
                                })
                            )
                            .then(function () {
                                return ee(r.$el, "afterFilter", [r]);
                            });
                },
                updateState: function () {
                    var t = this;
                    vn.write(function () {
                        return t.setState(t.getState(), !1);
                    });
                },
            },
        });
    function Wr(t, e) {
        return _n(ut(t, e), ["filter"]);
    }
    function Vr(t, e, n) {
        var i = Wr(t, e),
            r = i.filter,
            t = i.group,
            e = i.sort,
            i = i.order;
        return (
            void 0 === i && (i = "asc"),
            (r || O(e)) && (t ? (r ? (delete n.filter[""], (n.filter[t] = r)) : (delete n.filter[t], (B(n.filter) || "" in n.filter) && (n.filter = { "": r || "" }))) : (n.filter = { "": r || "" })),
            O(e) || (n.sort = [e, i]),
                n
        );
    }
    $i = {
        slide: {
            show: function (t) {
                return [{ transform: qr(-100 * t) }, { transform: qr() }];
            },
            percent: Rr,
            translate: function (t, e) {
                return [{ transform: qr(-100 * e * t) }, { transform: qr(100 * e * (1 - t)) }];
            },
        },
    };
    function Rr(t) {
        return Math.abs(qe(t, "transform").split(",")[4] / t.offsetWidth) || 0;
    }
    function qr(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = "%"), (t += t ? e : ""), ht ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)";
    }
    function Ur(t) {
        return "scale3d(" + t + ", " + t + ", 1)";
    }
    var Yr = Y({}, $i, {
        fade: {
            show: function () {
                return [{ opacity: 0 }, { opacity: 1 }];
            },
            percent: function (t) {
                return 1 - qe(t, "opacity");
            },
            translate: function (t) {
                return [{ opacity: 1 - t }, { opacity: t }];
            },
        },
        scale: {
            show: function () {
                return [
                    { opacity: 0, transform: Ur(0.8) },
                    { opacity: 1, transform: Ur(1) },
                ];
            },
            percent: function (t) {
                return 1 - qe(t, "opacity");
            },
            translate: function (t) {
                return [
                    { opacity: 1 - t, transform: Ur(1 - 0.2 * t) },
                    { opacity: t, transform: Ur(0.8 + 0.2 * t) },
                ];
            },
        },
    });
    function Gr(t, e, n) {
        ee(t, ne(e, !1, !1, n));
    }
    er = {
        mixins: [
            {
                props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean },
                data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
                connected: function () {
                    this.autoplay && this.startAutoplay();
                },
                disconnected: function () {
                    this.stopAutoplay();
                },
                update: function () {
                    ot(this.slides, "tabindex", "-1");
                },
                events: [
                    {
                        name: "visibilitychange",
                        el: function () {
                            return document;
                        },
                        filter: function () {
                            return this.autoplay;
                        },
                        handler: function () {
                            document.hidden ? this.stopAutoplay() : this.startAutoplay();
                        },
                    },
                ],
                methods: {
                    startAutoplay: function () {
                        var t = this;
                        this.stopAutoplay(),
                            (this.interval = setInterval(function () {
                                return (!t.draggable || !Ne(":focus", t.$el)) && (!t.pauseOnHover || !Nt(t.$el, ":hover")) && !t.stack.length && t.show("next");
                            }, this.autoplayInterval));
                    },
                    stopAutoplay: function () {
                        this.interval && clearInterval(this.interval);
                    },
                },
            },
            {
                props: { draggable: Boolean },
                data: { draggable: !0, threshold: 10 },
                created: function () {
                    var i = this;
                    ["start", "move", "end"].forEach(function (t) {
                        var n = i[t];
                        i[t] = function (t) {
                            var e = ce(t).x * (lt ? -1 : 1);
                            (i.prevPos = e !== i.pos ? i.pos : i.prevPos), (i.pos = e), n(t);
                        };
                    });
                },
                events: [
                    {
                        name: mt,
                        delegate: function () {
                            return this.selSlides;
                        },
                        handler: function (t) {
                            var e;
                            !this.draggable || (!ue(t) && !(e = t.target).children.length && e.childNodes.length) || Dt(t.target, St) || 0 < t.button || this.length < 2 || this.start(t);
                        },
                    },
                    {
                        name: "dragstart",
                        handler: function (t) {
                            t.preventDefault();
                        },
                    },
                ],
                methods: {
                    start: function () {
                        (this.drag = this.pos),
                            this._transitioner
                                ? ((this.percent = this._transitioner.percent()),
                                    (this.drag += this._transitioner.getDistance() * this.percent * this.dir),
                                    this._transitioner.cancel(),
                                    this._transitioner.translate(this.percent),
                                    (this.dragging = !0),
                                    (this.stack = []))
                                : (this.prevIndex = this.index),
                            Zt(document, gt, this.move, { passive: !1 }),
                            Zt(document, vt + " " + xt + " input", this.end, !0),
                            qe(this.list, "userSelect", "none");
                    },
                    move: function (t) {
                        var e = this,
                            n = this.pos - this.drag;
                        if (!(0 == n || this.prevPos === this.pos || (!this.dragging && Math.abs(n) < this.threshold))) {
                            qe(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), (this.dragging = !0), (this.dir = n < 0 ? 1 : -1);
                            for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o; )
                                (this.drag -= a * this.dir), (r = s), (o -= a), (s = this.getIndex(r + this.dir, r)), (a = this._getDistance(r, s) || i[r].offsetWidth);
                            this.percent = o / a;
                            var u,
                                c = i[r],
                                t = i[s],
                                n = this.index !== s,
                                h = r === s;
                            [this.index, this.prevIndex]
                                .filter(function (t) {
                                    return !w([s, r], t);
                                })
                                .forEach(function (t) {
                                    ee(i[t], "itemhidden", [e]), h && ((u = !0), (e.prevIndex = r));
                                }),
                            ((this.index === r && this.prevIndex !== r) || u) && ee(i[this.index], "itemshown", [this]),
                            n && ((this.prevIndex = r), (this.index = s), h || ee(c, "beforeitemhide", [this]), ee(t, "beforeitemshow", [this])),
                                (this._transitioner = this._translate(Math.abs(this.percent), c, !h && t)),
                            n && (h || ee(c, "itemhide", [this]), ee(t, "itemshow", [this]));
                        }
                    },
                    end: function () {
                        var t;
                        Qt(document, gt, this.move, { passive: !1 }),
                            Qt(document, vt + " " + xt + " input", this.end, !0),
                        this.dragging &&
                        ((this.dragging = null),
                            this.index === this.prevIndex
                                ? ((this.percent = 1 - this.percent), (this.dir *= -1), this._show(!1, this.index, !0), (this._transitioner = null))
                                : ((t = (lt ? this.dir * (lt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos),
                                    (this.index = t ? this.index : this.prevIndex),
                                t && (this.percent = 1 - this.percent),
                                    this.show((0 < this.dir && !t) || (this.dir < 0 && t) ? "next" : "previous", !0))),
                            qe(this.list, { userSelect: "", pointerEvents: "" }),
                            (this.drag = this.percent = null);
                    },
                },
            },
            {
                data: { selNav: !1 },
                computed: {
                    nav: function (t, e) {
                        return Ne(t.selNav, e);
                    },
                    selNavItem: function (t) {
                        t = t.attrItem;
                        return "[" + t + "],[data-" + t + "]";
                    },
                    navItems: function (t, e) {
                        return ze(this.selNavItem, e);
                    },
                },
                update: {
                    write: function () {
                        var n = this;
                        this.nav &&
                        this.length !== this.nav.children.length &&
                        be(
                            this.nav,
                            this.slides
                                .map(function (t, e) {
                                    return "<li " + n.attrItem + '="' + e + '"><a href></a></li>';
                                })
                                .join("")
                        ),
                            this.navItems.concat(this.nav).forEach(function (t) {
                                return t && (t.hidden = !n.maxIndex);
                            }),
                            this.updateNav();
                    },
                    events: ["resize"],
                },
                events: [
                    {
                        name: "click",
                        delegate: function () {
                            return this.selNavItem;
                        },
                        handler: function (t) {
                            t.preventDefault(), this.show(ut(t.current, this.attrItem));
                        },
                    },
                    { name: "itemshow", handler: "updateNav" },
                ],
                methods: {
                    updateNav: function () {
                        var n = this,
                            i = this.getValidIndex();
                        this.navItems.forEach(function (t) {
                            var e = ut(t, n.attrItem);
                            Fe(t, n.clsActive, H(e) === i), Fe(t, "uk-invisible", n.finite && (("previous" === e && 0 === i) || ("next" === e && i >= n.maxIndex)));
                        });
                    },
                },
            },
        ],
        props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number, selSlides: String },
        data: function () {
            return { easing: "ease", finite: !1, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: !1, Transitioner: !1, transitionOptions: {} };
        },
        connected: function () {
            (this.prevIndex = -1), (this.index = this.getValidIndex(this.$props.index)), (this.stack = []);
        },
        disconnected: function () {
            Oe(this.slides, this.clsActive);
        },
        computed: {
            duration: function (t, e) {
                t = t.velocity;
                return Xr(e.offsetWidth / t);
            },
            list: function (t, e) {
                return Ne(t.selList, e);
            },
            maxIndex: function () {
                return this.length - 1;
            },
            selSlides: function (t) {
                return t.selList + " " + (t.selSlides || "> *");
            },
            slides: {
                get: function () {
                    return ze(this.selSlides, this.$el);
                },
                watch: function () {
                    this.$reset();
                },
            },
            length: function () {
                return this.slides.length;
            },
        },
        events: {
            itemshown: function () {
                this.$update(this.list);
            },
        },
        methods: {
            show: function (t, e) {
                var n = this;
                if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
                    var i = this.stack,
                        r = e ? 0 : i.length,
                        o = function () {
                            i.splice(r, 1), i.length && n.show(i.shift(), !0);
                        };
                    if ((i[e ? "unshift" : "push"](t), !e && 1 < i.length)) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                    else {
                        var s,
                            a = this.getIndex(this.index),
                            u = Le(this.slides, this.clsActive) && this.slides[a],
                            c = this.getIndex(t, this.index),
                            h = this.slides[c];
                        if (u !== h) {
                            if (((this.dir = ((s = a), "next" !== (t = t) && ("previous" === t || t < s) ? -1 : 1)), (this.prevIndex = a), (this.index = c), (u && !ee(u, "beforeitemhide", [this])) || !ee(h, "beforeitemshow", [this, u])))
                                return (this.index = this.prevIndex), void o();
                            e = this._show(u, h, e).then(function () {
                                return (
                                    u && ee(u, "itemhidden", [n]),
                                        ee(h, "itemshown", [n]),
                                        new le(function (t) {
                                            vn.write(function () {
                                                i.shift(), i.length ? n.show(i.shift(), !0) : (n._transitioner = null), t();
                                            });
                                        })
                                );
                            });
                            return u && ee(u, "itemhide", [this]), ee(h, "itemshow", [this]), e;
                        }
                        o();
                    }
                }
            },
            getIndex: function (t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.index), Z(it(t, this.slides, e, this.finite), 0, this.maxIndex);
            },
            getValidIndex: function (t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e);
            },
            _show: function (t, e, n) {
                if (
                    ((this._transitioner = this._getTransitioner(
                        t,
                        e,
                        this.dir,
                        Y({ easing: n ? (e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)") : this.easing }, this.transitionOptions)
                    )),
                    !n && !t)
                )
                    return this._translate(1), le.resolve();
                t = this.stack.length;
                return this._transitioner[1 < t ? "forward" : "show"](1 < t ? Math.min(this.duration, 75 + 75 / (t - 1)) : this.duration, this.percent);
            },
            _getDistance: function (t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance();
            },
            _translate: function (t, e, n) {
                void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
                n = this._getTransitioner(e !== n && e, n);
                return n.translate(t), n;
            },
            _getTransitioner: function (t, e, n, i) {
                return (
                    void 0 === t && (t = this.prevIndex),
                    void 0 === e && (e = this.index),
                    void 0 === n && (n = this.dir || 1),
                    void 0 === i && (i = this.transitionOptions),
                        new this.Transitioner(z(t) ? this.slides[t] : t, z(e) ? this.slides[e] : e, n * (lt ? -1 : 1), i)
                );
            },
        },
    };
    function Xr(t) {
        return 0.5 * t + 300;
    }
    var nr = {
            mixins: [er],
            props: { animation: String },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: $i,
                Transitioner: function (r, o, s, t) {
                    var e = t.animation,
                        a = t.easing,
                        n = e.percent,
                        i = e.translate,
                        u = (e = void 0 === (e = e.show) ? Q : e)(s),
                        c = new he();
                    return {
                        dir: s,
                        show: function (t, e, n) {
                            var i = this;
                            void 0 === e && (e = 0);
                            n = n ? "linear" : a;
                            return (
                                (t -= Math.round(t * Z(e, -1, 1))),
                                    this.translate(e),
                                    Gr(o, "itemin", { percent: e, duration: t, timing: n, dir: s }),
                                    Gr(r, "itemout", { percent: 1 - e, duration: t, timing: n, dir: s }),
                                    le.all([Qe.start(o, u[1], t, n), Qe.start(r, u[0], t, n)]).then(function () {
                                        i.reset(), c.resolve();
                                    }, Q),
                                    c.promise
                            );
                        },
                        cancel: function () {
                            Qe.cancel([o, r]);
                        },
                        reset: function () {
                            for (var t in u[0]) qe([o, r], t, "");
                        },
                        forward: function (t, e) {
                            return void 0 === e && (e = this.percent()), Qe.cancel([o, r]), this.show(t, e, !0);
                        },
                        translate: function (t) {
                            this.reset();
                            var e = i(t, s);
                            qe(o, e[1]), qe(r, e[0]), Gr(o, "itemtranslatein", { percent: t, dir: s }), Gr(r, "itemtranslateout", { percent: 1 - t, dir: s });
                        },
                        percent: function () {
                            return n(r || o, o, s);
                        },
                        getDistance: function () {
                            return r && r.offsetWidth;
                        },
                    };
                },
            },
            computed: {
                animation: function (t) {
                    var e = t.animation,
                        t = t.Animations;
                    return Y(t[e] || t.slide, { name: e });
                },
                transitionOptions: function () {
                    return { animation: this.animation };
                },
            },
            events: {
                "itemshow itemhide itemshown itemhidden": function (t) {
                    t = t.target;
                    this.$update(t);
                },
                beforeitemshow: function (t) {
                    Be(t.target, this.clsActive);
                },
                itemshown: function (t) {
                    Be(t.target, this.clsActivated);
                },
                itemhidden: function (t) {
                    Oe(t.target, this.clsActive, this.clsActivated);
                },
            },
        },
        Kr = {
            mixins: [Ei, wr, wi, nr],
            functional: !0,
            props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String },
            data: function () {
                return {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    selClose: ".uk-close-large",
                    selCaption: ".uk-lightbox-caption",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: Yr,
                    template:
                        '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
                };
            },
            created: function () {
                var t = Ne(this.template),
                    e = Ne(this.selList, t);
                this.items.forEach(function () {
                    return xe(e, "<li>");
                }),
                    this.$mount(xe(this.container, t));
            },
            computed: {
                caption: function (t, e) {
                    return Ne(t.selCaption, e);
                },
            },
            events: [
                { name: gt + " " + mt + " keydown", handler: "showControls" },
                {
                    name: "click",
                    self: !0,
                    delegate: function () {
                        return this.selSlides;
                    },
                    handler: function (t) {
                        t.defaultPrevented || this.hide();
                    },
                },
                {
                    name: "shown",
                    self: !0,
                    handler: function () {
                        this.showControls();
                    },
                },
                {
                    name: "hide",
                    self: !0,
                    handler: function () {
                        this.hideControls(), Oe(this.slides, this.clsActive), Qe.stop(this.slides);
                    },
                },
                {
                    name: "hidden",
                    self: !0,
                    handler: function () {
                        this.$destroy(!0);
                    },
                },
                {
                    name: "keyup",
                    el: function () {
                        return document;
                    },
                    handler: function (t) {
                        if (this.isToggled(this.$el) && this.draggable)
                            switch (t.keyCode) {
                                case 37:
                                    this.show("previous");
                                    break;
                                case 39:
                                    this.show("next");
                            }
                    },
                },
                {
                    name: "beforeitemshow",
                    handler: function (t) {
                        this.isToggled() || ((this.draggable = !1), t.preventDefault(), this.toggleElement(this.$el, !0, !1), (this.animation = Yr.scale), Oe(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
                    },
                },
                {
                    name: "itemshow",
                    handler: function () {
                        be(this.caption, this.getItem().caption || "");
                        for (var t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t);
                    },
                },
                {
                    name: "itemshown",
                    handler: function () {
                        this.draggable = this.$props.draggable;
                    },
                },
                {
                    name: "itemload",
                    handler: function (t, n) {
                        var i = this,
                            r = n.source,
                            e = n.type,
                            o = n.alt;
                        void 0 === o && (o = "");
                        var s,
                            a,
                            u,
                            c = n.poster,
                            h = n.attrs;
                        void 0 === h && (h = {}),
                            this.setItem(n, "<span uk-spinner></span>"),
                        r &&
                        ((a = { frameborder: "0", allow: "autoplay", allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": "" + this.videoAutoplay }),
                            "image" === e || r.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)
                                ? ve(r, h.srcset, h.size).then(
                                    function (t) {
                                        var e = t.width,
                                            t = t.height;
                                        return i.setItem(n, Jr("img", Y({ src: r, width: e, height: t, alt: o }, h)));
                                    },
                                    function () {
                                        return i.setError(n);
                                    }
                                )
                                : "video" === e || r.match(/\.(mp4|webm|ogv)($|\?)/i)
                                    ? (Zt((u = Jr("video", Y({ src: r, poster: c, controls: "", playsinline: "", "uk-video": "" + this.videoAutoplay }, h))), "loadedmetadata", function () {
                                        ot(u, { width: u.videoWidth, height: u.videoHeight }), i.setItem(n, u);
                                    }),
                                        Zt(u, "error", function () {
                                            return i.setError(n);
                                        }))
                                    : "iframe" === e || r.match(/\.(html|php)($|\?)/i)
                                        ? this.setItem(n, Jr("iframe", Y({ src: r, frameborder: "0", allowfullscreen: "", class: "uk-lightbox-iframe" }, h)))
                                        : (s = r.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
                                            ? this.setItem(n, Jr("iframe", Y({ src: "https://www.youtube" + (s[1] || "") + ".com/embed/" + s[2] + (s[3] ? "?" + s[3] : ""), width: 1920, height: 1080 }, a, h)))
                                            : (s = r.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) &&
                                            ge("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(r), { responseType: "json", withCredentials: !1 }).then(
                                                function (t) {
                                                    var e = t.response,
                                                        t = e.height,
                                                        e = e.width;
                                                    return i.setItem(n, Jr("iframe", Y({ src: "https://player.vimeo.com/video/" + s[1] + (s[2] ? "?" + s[2] : ""), width: e, height: t }, a, h)));
                                                },
                                                function () {
                                                    return i.setError(n);
                                                }
                                            ));
                    },
                },
            ],
            methods: {
                loadItem: function (t) {
                    void 0 === t && (t = this.index);
                    t = this.getItem(t);
                    this.getSlide(t).childElementCount || ee(this.$el, "itemload", [t]);
                },
                getItem: function (t) {
                    return void 0 === t && (t = this.index), this.items[it(t, this.slides)];
                },
                setItem: function (t, e) {
                    ee(this.$el, "itemloaded", [this, be(this.getSlide(t), e)]);
                },
                getSlide: function (t) {
                    return this.slides[this.items.indexOf(t)];
                },
                setError: function (t) {
                    this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
                },
                showControls: function () {
                    clearTimeout(this.controlsTimer), (this.controlsTimer = setTimeout(this.hideControls, this.delayControls)), Be(this.$el, "uk-active", "uk-transition-active");
                },
                hideControls: function () {
                    Oe(this.$el, "uk-active", "uk-transition-active");
                },
            },
        };
    function Jr(t, e) {
        t = Ae("<" + t + ">");
        return ot(t, e), t;
    }
    Qi = {
        install: function (t, e) {
            t.lightboxPanel || t.component("lightboxPanel", Kr);
            Y(e.props, t.component("lightboxPanel").options.props);
        },
        props: { toggle: String },
        data: { toggle: "a" },
        computed: {
            toggles: {
                get: function (t, e) {
                    return ze(t.toggle, e);
                },
                watch: function () {
                    this.hide();
                },
            },
        },
        disconnected: function () {
            this.hide();
        },
        events: [
            {
                name: "click",
                delegate: function () {
                    return this.toggle + ":not(.uk-disabled)";
                },
                handler: function (t) {
                    t.preventDefault(), this.show(t.current);
                },
            },
        ],
        methods: {
            show: function (t) {
                var e,
                    n = this,
                    i = J(this.toggles.map(Zr), "source");
                return (
                    _(t) &&
                    ((e = Zr(t).source),
                        (t = x(i, function (t) {
                            t = t.source;
                            return e === t;
                        }))),
                        (this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, { items: i }))),
                        Zt(this.panel.$el, "hidden", function () {
                            return (n.panel = !1);
                        }),
                        this.panel.show(t)
                );
            },
            hide: function () {
                return this.panel && this.panel.hide();
            },
        },
    };
    function Zr(e) {
        var n = {};
        return (
            ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (t) {
                n["href" === t ? "source" : t] = ut(e, t);
            }),
                (n.attrs = _n(n.attrs)),
                n
        );
    }
    Zi = {
        mixins: [Ei],
        functional: !0,
        args: ["message", "status"],
        data: { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" },
        install: function (i) {
            i.notification.closeAll = function (e, n) {
                Me(document.body, function (t) {
                    t = i.getComponent(t, "notification");
                    !t || (e && e !== t.group) || t.close(n);
                });
            };
        },
        computed: {
            marginProp: function (t) {
                return "margin" + (g(t.pos, "top") ? "Top" : "Bottom");
            },
            startProps: function () {
                var t = { opacity: 0 };
                return (t[this.marginProp] = -this.$el.offsetHeight), t;
            },
        },
        created: function () {
            var t = Ne("." + this.clsContainer + "-" + this.pos, this.container) || xe(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(xe(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
        },
        connected: function () {
            var t,
                e = this,
                n = L(qe(this.$el, this.marginProp));
            Qe.start(qe(this.$el, this.startProps), (((t = { opacity: 1 })[this.marginProp] = n), t)).then(function () {
                e.timeout && (e.timer = setTimeout(e.close, e.timeout));
            });
        },
        events:
            (((tr = {
                click: function (t) {
                    Dt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
                },
            })[wt] = function () {
                this.timer && clearTimeout(this.timer);
            }),
                (tr[bt] = function () {
                    this.timeout && (this.timer = setTimeout(this.close, this.timeout));
                }),
                tr),
        methods: {
            close: function (t) {
                function e(t) {
                    var e = Ct(t);
                    ee(t, "close", [n]), Se(t), e && !e.hasChildNodes() && Se(e);
                }
                var n = this;
                this.timer && clearTimeout(this.timer), t ? e(this.$el) : Qe.start(this.$el, this.startProps).then(e);
            },
        },
    };
    var Qr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
        wr = {
            mixins: [mr],
            props: Qr.reduce(function (t, e) {
                return (t[e] = "list"), t;
            }, {}),
            data: Qr.reduce(function (t, e) {
                return (t[e] = void 0), t;
            }, {}),
            computed: {
                props: function (f, p) {
                    var m = this;
                    return Qr.reduce(function (t, e) {
                        if (O(f[e])) return t;
                        var n,
                            i,
                            r = e.match(/color/i),
                            o = r || "opacity" === e,
                            s = f[e].slice();
                        o && qe(p, e, ""), s.length < 2 && s.unshift(("scale" === e ? 1 : o ? qe(p, e) : 0) || 0);
                        var a,
                            u,
                            c,
                            h,
                            l,
                            o = s.reduce(function (t, e) {
                                return (N(e) && e.replace(/-|\d/g, "").trim()) || t;
                            }, "");
                        if (
                            (r
                                ? ((r = p.style.color),
                                    (s = s.map(function (t) {
                                        return qe(qe(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(L);
                                    })),
                                    (p.style.color = r))
                                : g(e, "bg")
                                    ? ((a = "bgy" === e ? "height" : "width"),
                                        (s = s.map(function (t) {
                                            return mn(t, a, m.$el);
                                        })),
                                        qe(p, "background-position-" + e[2], ""),
                                        (i = qe(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1]),
                                        (n = m.covers
                                            ? ((u = Math.min.apply(Math, s)),
                                                (c = Math.max.apply(Math, s)),
                                                (h = s.indexOf(u) < s.indexOf(c)),
                                                (l = c - u),
                                                (s = s.map(function (t) {
                                                    return t - (h ? u : c);
                                                })),
                                            (h ? -l : 0) + "px")
                                            : i))
                                    : (s = s.map(L)),
                            "stroke" === e)
                        ) {
                            if (
                                !s.some(function (t) {
                                    return t;
                                })
                            )
                                return t;
                            var d = Ui(m.$el);
                            qe(p, "strokeDasharray", d),
                                (s = (s =
                                    "%" === o
                                        ? s.map(function (t) {
                                            return (t * d) / 100;
                                        })
                                        : s).reverse()),
                                (e = "strokeDashoffset");
                        }
                        return (t[e] = { steps: s, unit: o, pos: n, bgPos: i, diff: l }), t;
                    }, {});
                },
                bgProps: function () {
                    var e = this;
                    return ["bgx", "bgy"].filter(function (t) {
                        return t in e.props;
                    });
                },
                covers: function (t, e) {
                    return (i = (n = e).style.backgroundSize), (e = "cover" === qe(qe(n, "backgroundSize", ""), "backgroundSize")), (n.style.backgroundSize = i), e;
                    var n, i;
                },
            },
            disconnected: function () {
                delete this._image;
            },
            update: {
                read: function (t) {
                    var e,
                        n,
                        a,
                        u,
                        c,
                        h = this;
                    this.matchMedia &&
                    (t.image ||
                    !this.covers ||
                    !this.bgProps.length ||
                    ((e = qe(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1")) &&
                        (((n = new Image()).src = e),
                        (t.image = n).naturalWidth ||
                        (n.onload = function () {
                            return h.$update();
                        }))),
                    (n = t.image) &&
                    n.naturalWidth &&
                    ((a = { width: this.$el.offsetWidth, height: this.$el.offsetHeight }),
                        (u = { width: n.naturalWidth, height: n.naturalHeight }),
                        (c = nt.cover(u, a)),
                        this.bgProps.forEach(function (t) {
                            var e,
                                n = h.props[t],
                                i = n.diff,
                                r = n.bgPos,
                                o = n.steps,
                                n = "bgy" === t ? "height" : "width",
                                s = c[n] - a[n];
                            s < i
                                ? (a[n] = c[n] + i - s)
                                : i < s &&
                                (e = a[n] / mn(r, n, h.$el)) &&
                                (h.props[t].steps = o.map(function (t) {
                                    return t - (s - i) / e;
                                })),
                                (c = nt.cover(u, a));
                        }),
                        (t.dim = c)));
                },
                write: function (t) {
                    t = t.dim;
                    this.matchMedia ? t && qe(this.$el, { backgroundSize: t.width + "px " + t.height + "px", backgroundRepeat: "no-repeat" }) : qe(this.$el, { backgroundSize: "", backgroundRepeat: "" });
                },
                events: ["resize"],
            },
            methods: {
                reset: function () {
                    var n = this;
                    X(this.getCss(0), function (t, e) {
                        return qe(n.$el, e, "");
                    });
                },
                getCss: function (l) {
                    var d = this.props;
                    return Object.keys(d).reduce(
                        function (t, e) {
                            var n = d[e],
                                i = n.steps,
                                r = n.unit,
                                o = n.pos,
                                s = (function (t, e, n) {
                                    void 0 === n && (n = 2);
                                    var i = to(t, e),
                                        t = i[0],
                                        e = i[1],
                                        i = i[2];
                                    return (z(t) ? t + Math.abs(t - e) * i * (t < e ? 1 : -1) : +e).toFixed(n);
                                })(i, l);
                            switch (e) {
                                case "x":
                                case "y":
                                    (r = r || "px"), (t.transform += " translate" + p(e) + "(" + L(s).toFixed("px" === r ? 0 : 2) + r + ")");
                                    break;
                                case "rotate":
                                    t.transform += " rotate(" + (s + (r = r || "deg")) + ")";
                                    break;
                                case "scale":
                                    t.transform += " scale(" + s + ")";
                                    break;
                                case "bgy":
                                case "bgx":
                                    t["background-position-" + e[2]] = "calc(" + o + " + " + s + "px)";
                                    break;
                                case "color":
                                case "backgroundColor":
                                case "borderColor":
                                    var a = to(i, l),
                                        u = a[0],
                                        c = a[1],
                                        h = a[2];
                                    t[e] =
                                        "rgba(" +
                                        u
                                            .map(function (t, e) {
                                                return (t += h * (c[e] - t)), 3 === e ? L(t) : parseInt(t, 10);
                                            })
                                            .join(",") +
                                        ")";
                                    break;
                                case "blur":
                                    t.filter += " blur(" + (s + (r = r || "px")) + ")";
                                    break;
                                case "hue":
                                    t.filter += " hue-rotate(" + (s + (r = r || "deg")) + ")";
                                    break;
                                case "fopacity":
                                    t.filter += " opacity(" + (s + (r = r || "%")) + ")";
                                    break;
                                case "grayscale":
                                case "invert":
                                case "saturate":
                                case "sepia":
                                    t.filter += " " + e + "(" + (s + (r = r || "%")) + ")";
                                    break;
                                default:
                                    t[e] = s;
                            }
                            return t;
                        },
                        { transform: "", filter: "" }
                    );
                },
            },
        };
    function to(t, e) {
        var n = t.length - 1,
            i = Math.min(Math.floor(n * e), n - 1),
            i = t.slice(i, i + 2);
        return i.push(1 === e ? 1 : (e % (1 / n)) * n), i;
    }
    tr = {
        mixins: [wr],
        props: { target: String, viewport: Number, easing: Number },
        data: { target: !1, viewport: 1, easing: 1 },
        computed: {
            target: function (t, e) {
                t = t.target;
                return (function t(e) {
                    return e ? ("offsetTop" in e ? e : t(Ct(e))) : document.body;
                })((t && Lt(t, e)) || e);
            },
        },
        update: {
            read: function (t, e) {
                var n = t.percent;
                if ((e.has("scroll") || (n = !1), this.matchMedia)) {
                    var i = n;
                    return (t = qn(this.target) / (this.viewport || 1)), (e = this.easing), { percent: (n = Z(t * (1 - (e - e * t)))), style: i !== n && this.getCss(n) };
                }
            },
            write: function (t) {
                t = t.style;
                this.matchMedia ? t && qe(this.$el, t) : this.reset();
            },
            events: ["scroll", "resize"],
        },
    };
    mr = {
        update: {
            write: function () {
                var t;
                this.stack.length || this.dragging || ((t = this.getValidIndex(this.index)), (~this.prevIndex && this.index === t) || this.show(t));
            },
            events: ["resize"],
        },
    };
    function eo(t, e, n) {
        var i = ro(t, e);
        return n ? i - ((t = t), sn(e).width / 2 - sn(t).width / 2) : Math.min(i, no(e));
    }
    function no(t) {
        return Math.max(0, io(t) - sn(t).width);
    }
    function io(t) {
        return Pt(t).reduce(function (t, e) {
            return sn(e).width + t;
        }, 0);
    }
    function ro(t, e) {
        return (t && (un(t).left + (lt ? sn(t).width - sn(e).width : 0)) * (lt ? -1 : 1)) || 0;
    }
    function oo(n, i) {
        --i;
        var r = sn(n).width,
            o = i + r + 2;
        return Pt(n).filter(function (t) {
            var e = ro(t, n),
                t = e + Math.min(sn(t).width, r);
            return i <= e && t <= o;
        });
    }
    function so(t, e, n) {
        ee(t, ne(e, !1, !1, n));
    }
    er = {
        mixins: [vi, er, mr],
        props: { center: Boolean, sets: Boolean },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner: function (u, c, h, t) {
                var i = t.center,
                    r = t.easing,
                    l = t.list,
                    o = new he(),
                    e = u ? eo(u, l, i) : eo(c, l, i) + sn(c).width * h,
                    d = c ? eo(c, l, i) : e + sn(u).width * h * (lt ? -1 : 1);
                return {
                    dir: h,
                    show: function (t, e, n) {
                        void 0 === e && (e = 0);
                        n = n ? "linear" : r;
                        return (
                            (t -= Math.round(t * Z(e, -1, 1))),
                                this.translate(e),
                                (e = u ? e : Z(e, 0, 1)),
                                so(this.getItemIn(), "itemin", { percent: e, duration: t, timing: n, dir: h }),
                            u && so(this.getItemIn(!0), "itemout", { percent: 1 - e, duration: t, timing: n, dir: h }),
                                Qe.start(l, { transform: qr(-d * (lt ? -1 : 1), "px") }, t, n).then(o.resolve, Q),
                                o.promise
                        );
                    },
                    cancel: function () {
                        Qe.cancel(l);
                    },
                    reset: function () {
                        qe(l, "transform", "");
                    },
                    forward: function (t, e) {
                        return void 0 === e && (e = this.percent()), Qe.cancel(l), this.show(t, e, !0);
                    },
                    translate: function (r) {
                        var t = this.getDistance() * h * (lt ? -1 : 1);
                        qe(l, "transform", qr(Z(t - t * r - d, -io(l), sn(l).width) * (lt ? -1 : 1), "px"));
                        var o = this.getActives(),
                            s = this.getItemIn(),
                            a = this.getItemIn(!0);
                        (r = u ? Z(r, -1, 1) : 0),
                            Pt(l).forEach(function (t) {
                                var e = w(o, t),
                                    n = t === s,
                                    i = t === a;
                                so(t, "itemtranslate" + (n || (!i && (e || (h * (lt ? -1 : 1) == -1) ^ (ro(t, l) > ro(u || c)))) ? "in" : "out"), { dir: h, percent: i ? 1 - r : n ? r : e ? 1 : 0 });
                            });
                    },
                    percent: function () {
                        return Math.abs((qe(l, "transform").split(",")[4] * (lt ? -1 : 1) + e) / (d - e));
                    },
                    getDistance: function () {
                        return Math.abs(d - e);
                    },
                    getItemIn: function (t) {
                        void 0 === t && (t = !1);
                        var e = this.getActives(),
                            n = oo(l, eo(c || u, l, i));
                        return (
                            t && ((t = e), (e = n), (n = t)),
                                n[
                                    x(n, function (t) {
                                        return !w(e, t);
                                    })
                                    ]
                        );
                    },
                    getActives: function () {
                        return oo(l, eo(u || c, l, i));
                    },
                };
            },
        },
        computed: {
            avgWidth: function () {
                return io(this.list) / this.length;
            },
            finite: function (t) {
                return (
                    t.finite ||
                    Math.ceil(io(this.list)) <
                    sn(this.list).width +
                    ((t = this.list),
                        Math.max.apply(
                            Math,
                            [0].concat(
                                Pt(t).map(function (t) {
                                    return sn(t).width;
                                })
                            )
                        )) +
                    this.center
                );
            },
            maxIndex: function () {
                if (!this.finite || (this.center && !this.sets)) return this.length - 1;
                if (this.center) return G(this.sets);
                var e = 0,
                    n = no(this.list),
                    t = x(this.slides, function (t) {
                        return n <= e || void (e += sn(t).width);
                    });
                return ~t ? t : this.length - 1;
            },
            sets: function (t) {
                var r = this;
                if ((t = t.sets)) {
                    var o = sn(this.list).width / (this.center ? 2 : 1),
                        s = 0,
                        a = o,
                        u = 0;
                    return (
                        !B(
                            (t = K(this.slides, "offsetLeft").reduce(function (t, e, n) {
                                var i = sn(e).width;
                                return (
                                    s < u + i &&
                                    (w(t, (n = !r.center && n > r.maxIndex ? r.maxIndex : n)) || ((e = r.slides[n + 1]), r.center && e && i < a - sn(e).width / 2 ? (a -= i) : ((a = o), t.push(n), (s = u + o + (r.center ? i / 2 : 0))))),
                                        (u += i),
                                        t
                                );
                            }, []))
                        ) && t
                    );
                }
            },
            transitionOptions: function () {
                return { center: this.center, list: this.list };
            },
        },
        connected: function () {
            Fe(this.$el, this.clsContainer, !Ne("." + this.clsContainer, this.$el));
        },
        update: {
            write: function () {
                var n = this;
                this.navItems.forEach(function (t) {
                    var e = H(ut(t, n.attrItem));
                    !1 !== e && (t.hidden = !n.maxIndex || e > n.maxIndex || (n.sets && !w(n.sets, e)));
                }),
                !this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1));
                var e = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (t) {
                    return Fe(t, n.clsActive, w(e, t));
                }),
                !this.clsActivated ||
                (this.sets && !w(this.sets, L(this.index))) ||
                this.slides.forEach(function (t) {
                    return Fe(t, n.clsActivated || "", w(e, t));
                });
            },
            events: ["resize"],
        },
        events: {
            beforeitemshow: function (t) {
                !this.dragging && this.sets && this.stack.length < 2 && !w(this.sets, this.index) && (this.index = this.getValidIndex());
                var e = Math.abs(this.index - this.prevIndex + ((0 < this.dir && this.index < this.prevIndex) || (this.dir < 0 && this.index > this.prevIndex) ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && 1 < e) {
                    for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                    t.preventDefault();
                } else {
                    t = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                    (this.duration = Xr(this.avgWidth / this.velocity) * (sn(this.slides[t]).width / this.avgWidth)), this.reorder();
                }
            },
            itemshow: function () {
                ~this.prevIndex && Be(this._getTransitioner().getItemIn(), this.clsActive);
            },
        },
        methods: {
            reorder: function () {
                var n = this;
                if (this.finite) qe(this.slides, "order", "");
                else {
                    var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                    if (
                        (this.slides.forEach(function (t, e) {
                            return qe(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "");
                        }),
                            this.center)
                    )
                        for (var t = this.slides[i], e = sn(this.list).width / 2 - sn(t).width / 2, r = 0; 0 < e; ) {
                            var o = this.getIndex(--r + i, i),
                                s = this.slides[o];
                            qe(s, "order", i < o ? -2 : -1), (e -= sn(s).width);
                        }
                }
            },
            getValidIndex: function (t, e) {
                if ((void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), (t = this.getIndex(t, e)), !this.sets)) return t;
                var n;
                do {
                    if (w(this.sets, t)) return t;
                } while (((n = t), (t = this.getIndex(t + this.dir, e)) !== n));
                return t;
            },
        },
    };
    wr = {
        mixins: [wr],
        data: { selItem: "!li" },
        computed: {
            item: function (t, e) {
                return Lt(t.selItem, e);
            },
        },
        events: [
            {
                name: "itemin itemout",
                self: !0,
                el: function () {
                    return this.item;
                },
                handler: function (t) {
                    var n = this,
                        i = t.type,
                        t = t.detail,
                        r = t.percent,
                        o = t.duration,
                        s = t.timing,
                        a = t.dir;
                    vn.read(function () {
                        var t = n.getCss(uo(i, a, r)),
                            e = n.getCss(ao(i) ? 0.5 : 0 < a ? 1 : 0);
                        vn.write(function () {
                            qe(n.$el, t), Qe.start(n.$el, e, o, s).catch(Q);
                        });
                    });
                },
            },
            {
                name: "transitioncanceled transitionend",
                self: !0,
                el: function () {
                    return this.item;
                },
                handler: function () {
                    Qe.cancel(this.$el);
                },
            },
            {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el: function () {
                    return this.item;
                },
                handler: function (t) {
                    var e = this,
                        n = t.type,
                        t = t.detail,
                        i = t.percent,
                        r = t.dir;
                    vn.read(function () {
                        var t = e.getCss(uo(n, r, i));
                        vn.write(function () {
                            return qe(e.$el, t);
                        });
                    });
                },
            },
        ],
    };
    function ao(t) {
        return u(t, "in");
    }
    function uo(t, e, n) {
        return (n /= 2), ao(t) ? (e < 0 ? 1 - n : n) : e < 0 ? n : 1 - n;
    }
    var co,
        $i = Y({}, $i, {
            fade: {
                show: function () {
                    return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
                },
                percent: function (t) {
                    return 1 - qe(t, "opacity");
                },
                translate: function (t) {
                    return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
                },
            },
            scale: {
                show: function () {
                    return [{ opacity: 0, transform: Ur(1.5), zIndex: 0 }, { zIndex: -1 }];
                },
                percent: function (t) {
                    return 1 - qe(t, "opacity");
                },
                translate: function (t) {
                    return [{ opacity: 1 - t, transform: Ur(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }];
                },
            },
            pull: {
                show: function (t) {
                    return t < 0
                        ? [
                            { transform: qr(30), zIndex: -1 },
                            { transform: qr(), zIndex: 0 },
                        ]
                        : [
                            { transform: qr(-100), zIndex: 0 },
                            { transform: qr(), zIndex: -1 },
                        ];
                },
                percent: function (t, e, n) {
                    return n < 0 ? 1 - Rr(e) : Rr(t);
                },
                translate: function (t, e) {
                    return e < 0
                        ? [
                            { transform: qr(30 * t), zIndex: -1 },
                            { transform: qr(-100 * (1 - t)), zIndex: 0 },
                        ]
                        : [
                            { transform: qr(100 * -t), zIndex: 0 },
                            { transform: qr(30 * (1 - t)), zIndex: -1 },
                        ];
                },
            },
            push: {
                show: function (t) {
                    return t < 0
                        ? [
                            { transform: qr(100), zIndex: 0 },
                            { transform: qr(), zIndex: -1 },
                        ]
                        : [
                            { transform: qr(-30), zIndex: -1 },
                            { transform: qr(), zIndex: 0 },
                        ];
                },
                percent: function (t, e, n) {
                    return 0 < n ? 1 - Rr(e) : Rr(t);
                },
                translate: function (t, e) {
                    return e < 0
                        ? [
                            { transform: qr(100 * t), zIndex: 0 },
                            { transform: qr(-30 * (1 - t)), zIndex: -1 },
                        ]
                        : [
                            { transform: qr(-30 * t), zIndex: -1 },
                            { transform: qr(100 * (1 - t)), zIndex: 0 },
                        ];
                },
            },
        }),
        $i = {
            mixins: [vi, nr, mr],
            props: { ratio: String, minHeight: Number, maxHeight: Number },
            data: { ratio: "16:9", minHeight: !1, maxHeight: !1, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: $i },
            update: {
                read: function () {
                    var t = this.ratio.split(":").map(Number),
                        e = t[0],
                        t = ((t = t[1]) * this.list.offsetWidth) / e || 0;
                    return this.minHeight && (t = Math.max(this.minHeight, t)), { height: (t = this.maxHeight ? Math.min(this.maxHeight, t) : t) - fn(this.list, "height", "content-box") };
                },
                write: function (t) {
                    t = t.height;
                    0 < t && qe(this.list, "minHeight", t);
                },
                events: ["resize"],
            },
        },
        Pi = {
            mixins: [vi, Pi],
            props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {},
            },
            created: function () {
                var n = this;
                ["init", "start", "move", "end"].forEach(function (t) {
                    var e = n[t];
                    n[t] = function (t) {
                        Y(n.pos, ce(t)), e(t);
                    };
                });
            },
            events: { name: mt, passive: !1, handler: "init" },
            computed: {
                target: function () {
                    return (this.$el.tBodies || [this.$el])[0];
                },
                items: function () {
                    return Pt(this.target);
                },
                isEmpty: {
                    get: function () {
                        return B(this.items);
                    },
                    watch: function (t) {
                        Fe(this.target, this.clsEmpty, t);
                    },
                    immediate: !0,
                },
                handles: {
                    get: function (t, e) {
                        t = t.handle;
                        return t ? ze(t, e) : this.items;
                    },
                    watch: function (t, e) {
                        qe(e, { touchAction: "", userSelect: "" }), qe(t, { touchAction: pt ? "none" : "", userSelect: "none" });
                    },
                    immediate: !0,
                },
            },
            update: {
                write: function (t) {
                    var e, n, i, r, o, s, a;
                    this.drag &&
                    Ct(this.placeholder) &&
                    ((e = (n = this.pos).x),
                        (a = n.y),
                        (s = (i = this.origin).offsetTop),
                        (r = i.offsetLeft),
                        (n = this.placeholder),
                        qe(this.drag, { top: a - s, left: e - r }),
                    (i = this.getSortable(document.elementFromPoint(e, a))) &&
                    ((s = i.items).some(Qe.inProgress) ||
                        ((o = { x: e, y: a }),
                            (r =
                                s[
                                    x(s, function (t) {
                                        return et(o, t.getBoundingClientRect());
                                    })
                                    ]),
                        (!s.length || (r && r !== n)) &&
                        ((s = this.getSortable(n)),
                        !1 !==
                        (a = (function (t, e, n, i, r, o) {
                            if (Pt(t).length) {
                                var s = e.getBoundingClientRect();
                                if (!o)
                                    return (function (t, e) {
                                        var n = 1 === Pt(t).length;
                                        n && xe(t, e);
                                        var i = Pt(t),
                                            t = i.some(function (t, e) {
                                                var n = t.getBoundingClientRect();
                                                return i.slice(e + 1).some(function (t) {
                                                    t = t.getBoundingClientRect();
                                                    return !ho([n.left, n.right], [t.left, t.right]);
                                                });
                                            });
                                        n && Se(e);
                                        return t;
                                    })(t, n) || r < s.top + s.height / 2
                                        ? e
                                        : e.nextElementSibling;
                                (o = n.getBoundingClientRect()),
                                    (t = ho([s.top, s.bottom], [o.top, o.bottom])),
                                    (n = t ? i : r),
                                    (i = t ? "width" : "height"),
                                    (r = t ? "left" : "top"),
                                    (t = t ? "right" : "bottom"),
                                    (i = o[i] < s[i] ? s[i] - o[i] : 0);
                                return o[r] < s[r] ? !(i && n < s[r] + i) && e.nextElementSibling : !(i && n > s[t] - i) && e;
                            }
                        })(i.target, r, n, e, a, i === s && t.moved !== r)) &&
                        ((a && n === a) || (i !== s ? (s.remove(n), (t.moved = r)) : delete t.moved, i.insert(n, a), this.touched.add(i)))))));
                },
                events: ["move"],
            },
            methods: {
                init: function (t) {
                    var e = t.target,
                        n = t.button,
                        i = t.defaultPrevented,
                        r = this.items.filter(function (t) {
                            return Bt(e, t);
                        })[0];
                    !r ||
                    i ||
                    0 < n ||
                    It(e) ||
                    Bt(e, "." + this.clsNoDrag) ||
                    (this.handle && !Bt(e, this.handle)) ||
                    (t.preventDefault(),
                        (this.touched = new Set([this])),
                        (this.placeholder = r),
                        (this.origin = Y({ target: e, index: Ht(r) }, this.pos)),
                        Zt(document, gt, this.move),
                        Zt(document, vt, this.end),
                    this.threshold || this.start(t));
                },
                start: function (t) {
                    this.drag = (function (t, e) {
                        t = xe(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
                        return (
                            qe(t, "margin", "0", "important"),
                                qe(t, Y({ boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight }, qe(e, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))),
                                hn(t.firstElementChild, hn(e.firstElementChild)),
                                t
                        );
                    })(this.$container, this.placeholder);
                    var e,
                        n,
                        i = this.placeholder.getBoundingClientRect(),
                        r = i.left,
                        i = i.top;
                    Y(this.origin, { offsetLeft: this.pos.x - r, offsetTop: this.pos.y - i }),
                        Be(this.drag, this.clsDrag, this.clsCustom),
                        Be(this.placeholder, this.clsPlaceholder),
                        Be(this.items, this.clsItem),
                        Be(document.documentElement, this.clsDragState),
                        ee(this.$el, "start", [this, this.placeholder]),
                        (e = this.pos),
                        (n = Date.now()),
                        (co = setInterval(function () {
                            var t = e.x,
                                s = e.y;
                            s += window.pageYOffset;
                            var a = 0.3 * (Date.now() - n);
                            (n = Date.now()),
                                Un(document.elementFromPoint(t, e.y))
                                    .reverse()
                                    .some(function (t) {
                                        var e = t.scrollTop,
                                            n = t.scrollHeight,
                                            i = an(Yn(t)),
                                            r = i.top,
                                            o = i.bottom,
                                            i = i.height;
                                        if (r < s && s < r + 35) e -= a;
                                        else {
                                            if (!(s < o && o - 35 < s)) return;
                                            e += a;
                                        }
                                        if (0 < e && e < n - i) return Vn(t, e), !0;
                                    });
                        }, 15)),
                        this.move(t);
                },
                move: function (t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
                },
                end: function () {
                    var t,
                        i = this;
                    Qt(document, gt, this.move),
                        Qt(document, vt, this.end),
                        Qt(window, "scroll", this.scroll),
                    this.drag &&
                    (clearInterval(co),
                        (t = this.getSortable(this.placeholder)),
                        this === t ? this.origin.index !== Ht(this.placeholder) && ee(this.$el, "moved", [this, this.placeholder]) : (ee(t.$el, "added", [t, this.placeholder]), ee(this.$el, "removed", [this, this.placeholder])),
                        ee(this.$el, "stop", [this, this.placeholder]),
                        Se(this.drag),
                        (this.drag = null),
                        this.touched.forEach(function (t) {
                            var e = t.clsPlaceholder,
                                n = t.clsItem;
                            return i.touched.forEach(function (t) {
                                return Oe(t.items, e, n);
                            });
                        }),
                        (this.touched = null),
                        Oe(document.documentElement, this.clsDragState));
                },
                insert: function (t, e) {
                    var n = this;
                    Be(this.items, this.clsItem);
                    this.animate(function () {
                        return e ? ye(e, t) : xe(n.target, t);
                    });
                },
                remove: function (t) {
                    Bt(t, this.target) &&
                    this.animate(function () {
                        return Se(t);
                    });
                },
                getSortable: function (t) {
                    do {
                        var e = this.$getComponent(t, "sortable");
                        if (e && (e === this || (!1 !== this.group && e.group === this.group))) return e;
                    } while ((t = Ct(t)));
                },
            },
        };
    function ho(t, e) {
        return t[1] > e[0] && e[1] > t[0];
    }
    Ti = {
        mixins: [Ei, wi, Ti],
        args: "title",
        props: { delay: Number, title: String },
        data: { pos: "top", title: "", delay: 0, animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active", clsPos: "uk-tooltip" },
        beforeConnect: function () {
            var t;
            (this._hasTitle = st(this.$el, "title")), ot(this.$el, "title", ""), this.updateAria(!1), Tt((t = this.$el)) || ot(t, "tabindex", "0");
        },
        disconnected: function () {
            this.hide(), ot(this.$el, "title", this._hasTitle ? this.title : null);
        },
        methods: {
            show: function () {
                var e = this;
                !this.isToggled(this.tooltip || null) &&
                this.title &&
                ((this._unbind = te(document, "show keydown " + mt, this.hide, !1, function (t) {
                    return (t.type === mt && !Bt(t.target, e.$el)) || ("keydown" === t.type && 27 === t.keyCode) || ("show" === t.type && t.detail[0] !== e && t.detail[0].$name === e.$name);
                })),
                    clearTimeout(this.showTimer),
                    (this.showTimer = setTimeout(this._show, this.delay)));
            },
            hide: function () {
                var t = this;
                Nt(this.$el, "input:focus") ||
                (clearTimeout(this.showTimer),
                this.isToggled(this.tooltip || null) &&
                this.toggleElement(this.tooltip, !1, !1).then(function () {
                    (t.tooltip = Se(t.tooltip)), t._unbind();
                }));
            },
            _show: function () {
                var n = this;
                (this.tooltip = xe(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>")),
                    Zt(this.tooltip, "toggled", function (t, e) {
                        n.updateAria(e), e && (n.positionAt(n.tooltip, n.$el), (n.origin = "y" === n.getAxis() ? pn(n.dir) + "-" + n.align : n.align + "-" + pn(n.dir)));
                    }),
                    this.toggleElement(this.tooltip, !0);
            },
            updateAria: function (t) {
                ot(this.$el, "aria-expanded", t);
            },
        },
        events:
            (((wi = { focus: "show", blur: "hide" })[wt + " " + bt] = function (t) {
                ue(t) || this[t.type === wt ? "show" : "hide"]();
            }),
                (wi[mt] = function (t) {
                    ue(t) && this.show();
                }),
                wi),
    };
    wi = {
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String,
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: Q,
            beforeAll: Q,
            beforeSend: Q,
            complete: Q,
            completeAll: Q,
            error: Q,
            fail: Q,
            load: Q,
            loadEnd: Q,
            loadStart: Q,
            progress: Q,
        },
        events: {
            change: function (t) {
                Nt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), (t.target.value = ""));
            },
            drop: function (t) {
                fo(t);
                t = t.dataTransfer;
                t && t.files && (Oe(this.$el, this.clsDragover), this.upload(t.files));
            },
            dragenter: function (t) {
                fo(t);
            },
            dragover: function (t) {
                fo(t), Be(this.$el, this.clsDragover);
            },
            dragleave: function (t) {
                fo(t), Oe(this.$el, this.clsDragover);
            },
        },
        methods: {
            upload: function (t) {
                var i = this;
                if (t.length) {
                    ee(this.$el, "upload", [t]);
                    for (var e = 0; e < t.length; e++) {
                        if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                        if (this.allow && !lo(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                        if (this.mime && !lo(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime));
                    }
                    this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                    var r = (function (t, e) {
                            for (var n = [], i = 0; i < t.length; i += e) {
                                for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                                n.push(r);
                            }
                            return n;
                        })(t, this.concurrent),
                        o = function (t) {
                            var e,
                                n = new FormData();
                            for (e in (t.forEach(function (t) {
                                return n.append(i.name, t);
                            }),
                                i.params))
                                n.append(e, i.params[e]);
                            ge(i.url, {
                                data: n,
                                method: i.method,
                                responseType: i.type,
                                beforeSend: function (t) {
                                    var e = t.xhr;
                                    return (
                                        e.upload && Zt(e.upload, "progress", i.progress),
                                            ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) {
                                                return Zt(e, t.toLowerCase(), i[t]);
                                            }),
                                            i.beforeSend(t)
                                    );
                                },
                            }).then(
                                function (t) {
                                    i.complete(t), r.length ? o(r.shift()) : i.completeAll(t);
                                },
                                function (t) {
                                    return i.error(t);
                                }
                            );
                        };
                    o(r.shift());
                }
            },
        },
    };
    function lo(t, e) {
        return e.match(
            new RegExp(
                "^" +
                t
                    .replace(/\//g, "\\/")
                    .replace(/\*\*/g, "(\\/[^\\/]+)*")
                    .replace(/\*/g, "[^\\/]+")
                    .replace(/((?!\\))\?/g, "$1.") +
                "$",
                "i"
            )
        );
    }
    function fo(t) {
        t.preventDefault(), t.stopPropagation();
    }
    return (
        X(
            Object.freeze({
                __proto__: null,
                Countdown: pr,
                Filter: o,
                Lightbox: Qi,
                LightboxPanel: Kr,
                Notification: Zi,
                Parallax: tr,
                Slider: er,
                SliderParallax: wr,
                Slideshow: $i,
                SlideshowParallax: wr,
                Sortable: Pi,
                Tooltip: Ti,
                Upload: wi,
            }),
            function (t, e) {
                return ni.component(e, t);
            }
        ),
            ni
    );
});
