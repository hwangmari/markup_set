! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, i, s, a;
        for (var f in y)
            if (y.hasOwnProperty(f)) {
                if (e = [], n = y[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? C[a[0]] = o : (!C[a[0]] || C[a[0]] instanceof Boolean || (C[a[0]] = new Boolean(C[a[0]])), C[a[0]][a[1]] = o), x.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var n = w.className,
            t = C._config.classPrefix || "";
        if (S && (n = n.baseVal), C._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        C._config.enableClasses && (n += " " + t + e.join(" " + t), S ? w.className.baseVal = n : w.className = n)
    }

    function s(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function f() {
        var e = n.body;
        return e || (e = a(S ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, t, r, o) {
        var i, s, l, u, d = "modernizr",
            p = a("div"),
            c = f();
        if (parseInt(r, 10))
            for (; r--;) l = a("div"), l.id = o ? o[r] : d + (r + 1), p.appendChild(l);
        return i = a("style"), i.type = "text/css", i.id = "s" + d, (c.fake ? c : p).appendChild(i), c.appendChild(p), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = w.style.overflow, w.style.overflow = "hidden", w.appendChild(c)), s = t(p, e), c.fake ? (c.parentNode.removeChild(c), w.style.overflow = u, w.offsetHeight) : p.parentNode.removeChild(p), !!s
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(u(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + u(n[o]) + ":" + r + ")");
            return i = i.join(" or "), l("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function p(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, n, o, i) {
        function f() {
            u && (delete E.style, delete E.modElem)
        }
        if (i = !r(i, "undefined") && i, !r(o, "undefined")) {
            var l = d(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var u, c, h, v, m, y = ["modernizr", "tspan"]; !E.style;) u = !0, E.modElem = a(y.shift()), E.style = E.modElem.style;
        for (h = e.length, c = 0; c < h; c++)
            if (v = e[c], m = E.style[v], s(v, "-") && (v = p(v)), E.style[v] !== t) {
                if (i || r(o, "undefined")) return f(), "pfx" != n || v;
                try {
                    E.style[v] = o
                } catch (g) {}
                if (E.style[v] != m) return f(), "pfx" != n || v
            } return f(), !1
    }

    function h(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function v(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? h(o, t || n) : o);
        return !1
    }

    function m(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + b.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? c(a, n, o, i) : (a = (e + " " + O.join(s + " ") + s).split(" "), v(a, n, t))
    }
    var y = [],
        g = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                y.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                y.push({
                    name: null,
                    fn: e
                })
            }
        },
        C = function() {};
    C.prototype = g, C = new C;
    var x = [],
        w = n.documentElement,
        S = "svg" === w.nodeName.toLowerCase();
    C.addTest("history", function() {
        var n = navigator.userAgent;
        return (n.indexOf("Android 2.") === -1 && n.indexOf("Android 4.0") === -1 || n.indexOf("Mobile Safari") === -1 || n.indexOf("Chrome") !== -1 || n.indexOf("Windows Phone") !== -1) && (e.history && "pushState" in e.history)
    });
    var _ = "Moz O ms Webkit",
        b = g._config.usePrefixes ? _.split(" ") : [];
    g._cssomPrefixes = b;
    var j = {
        elem: a("modernizr")
    };
    C._q.push(function() {
        delete j.elem
    });
    var E = {
        style: j.elem.style
    };
    C._q.unshift(function() {
        delete E.style
    });
    var O = g._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    g._domPrefixes = O, g.testAllProps = m;
    var P = function(n) {
        var r, o = prefixes.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var s = 0; s < o; s++) {
            var a = prefixes[s],
                f = a.toUpperCase() + "_" + r;
            if (f in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    g.atRule = P;
    var T = g.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? P(e) : (e.indexOf("-") != -1 && (e = p(e)), n ? m(e, n, t) : m(e, "pfx"))
    };
    C.addTest("objectfit", !!T("objectFit"), {
        aliases: ["object-fit"]
    }), o(), i(x), delete g.addTest, delete g.addAsyncTest;
    for (var z = 0; z < C._q.length; z++) C._q[z]();
    e.Modernizr = C
}(window, document);
