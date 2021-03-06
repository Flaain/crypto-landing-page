var _tmr = _tmr || [];
(function () {
    function P(a) {
        var b = typeof a;
        return !("number" === b || "boolean" === b || "string" === b || a.nodeType || a === a.window);
    }
    function ja(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function u(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
    }
    function B(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    }
    function X(a, b) {
        for (var c = 0; c < b.length; c++) if (b[c] == a) return !0;
        return !1;
    }
    function I(a, b, c) {
        if (!a) return c && null === a ? "null" : "";
        if (!P(a)) return "";
        var d = [];
        if (ja(a)) {
            for (var e = 0, l = a.length; e < l; e++) xa(d, null, a[e], b, c);
            a = "[";
            b = "]";
        } else {
            for (e in a) a.hasOwnProperty(e) && xa(d, e, a[e], b, c);
            a = "{";
            b = "}";
        }
        return !d.length ? (c ? a + b : "") : a + d.join(",") + b;
    }
    function xa(a, b, c, d, e) {
        var l = typeof c;
        if ("string" === l) c = '"' + c.replace(/[\"\']/g, "\\$&") + '"';
        else if (!("number" === l || "boolean" === l)) if (((c = d ? "" : I(c, !1, e)), !c.length)) return;
        a.push((null === b ? "" : '"' + b + '":') + c);
    }
    function ka() {
        var a = arguments,
            b = a[0] || {},
            c = !1,
            d = 1,
            e = a.length,
            l,
            g,
            h,
            f,
            m;
        "boolean" === typeof b && ((c = b), (b = a[d++] || {}));
        for (P(b) || (b = {}); d < e; d++)
            if (null != (l = a[d]))
                for (g in l) (h = b[g]), (f = l[g]), b !== f && (c && f && (P(f) || (m = ja(f))) ? (m ? ((m = !1), (h = h && ja(h) ? h : [])) : (h = h && P(h) ? h : {}), (b[g] = ka(c, h, f))) : void 0 !== f && (b[g] = f));
        return b;
    }
    function ya(a) {
        var b = "";
        try {
            var c = new Uint8Array(a);
            f.crypto.getRandomValues(c);
            for (var d = 0; d < a; d++) b += (c[d] % 16).toString(16);
        } catch (e) {
            b = "";
            for (d = 0; d < a; d++) (c = Math.floor(16 * Math.random())), (b += c.toString(16));
        }
        return b;
    }
    function r() {
        return new Date().getTime();
    }
    function n(a, b) {
        var c = { data: b, raw: a, url: "https://top-fwz1.mail.ru" + a },
            d;
        "function" !== typeof t.sendBeacon ? (d = !1) : ((c.dataSplitter = ";"), (d = Y(c.data, c.dataSplitter)), (d = !0 === t.sendBeacon(c.url, d)));
        d ||
            (void 0 === b
                ? ((c.dataSplitter = ";"), (c.open = cb), (c.connect = db), (c.startListen = eb), (c.stopListen = fb), c.open(c), c.connect(c))
                : ("function" === typeof f.XMLHttpRequest ? ((c.dataSplitter = ";"), (c.open = gb), (c.connect = hb), (c.startListen = ib), (c.stopListen = jb), c.open(c), c.connect(c), (d = !0)) : (d = !1), d || kb(c)));
    }
    function kb(a) {
        var b = h.createElement("iframe"),
            c = h.createElement("div");
        c.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
        c.appendChild(b);
        h.body.appendChild(c);
        try {
            var d = b.contentWindow.document,
                e = d.createElement("div"),
                l;
            for (l in a.data)
                if (a.data.hasOwnProperty(l)) {
                    var g = a.data[l],
                        f = typeof g;
                    if ("string" === f || "number" === f) {
                        var x = d.createElement("input");
                        x.setAttribute("type", "hidden");
                        x.setAttribute("name", l);
                        x.value = g;
                        e.appendChild(x);
                    }
                }
            var k = d.createElement("form");
            k.setAttribute("action", a.url);
            k.setAttribute("method", za);
            k.setAttribute("enctype", Aa);
            k.appendChild(e);
            var r = d.createElement("div");
            r.appendChild(k);
            d.body.appendChild(r);
            var p = function () {
                try {
                    B(b, "load", p), h.body.removeChild(c);
                } catch (a) {
                    m && console.warn("[TopMailRu] Error#1.2", a);
                }
            };
            u(b, "load", p);
            k.submit();
        } catch (q) {
            m && console.warn("[TopMailRu] Error#1.3", q);
        }
    }
    function gb(a) {
        a._connection = new f.XMLHttpRequest();
    }
    function hb(a) {
        a._connection.open(za, a.url);
        a._connection.setRequestHeader("Content-Type", Aa);
        a._connection.send(Y(a.data, a.dataSplitter));
    }
    function ib(a) {
        u(a._connection, "load", a._onload);
        u(a._connection, "error", a._onerror);
    }
    function jb(a) {
        B(a._connection, "load", a._onload);
        B(a._connection, "error", a._onerror);
    }
    function cb(a) {
        a._connection = new Image();
    }
    function db(a) {
        a._connection.src = a.url + Y(a.data, a.dataSplitter);
    }
    function eb(a) {
        a._connection.onload = a._onload;
        a._connection.onerror = a._onerror;
    }
    function fb(a) {
        a._connection.onload = null;
        a._connection.onerror = null;
    }
    function Y(a, b) {
        var c = b || ";",
            d = "",
            e;
        for (e in a)
            if (a.hasOwnProperty(e)) {
                var l = a[e],
                    g = typeof l;
                if ("string" === g || "number" === g) d += c + escape(e) + "=" + escape(l);
            }
        return d;
    }
    function Z(a) {
        return (a = h.cookie.match(RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(a[1]) : null;
    }
    function J(a, b, c) {
        c = c || {};
        var d = c.expires;
        "number" === typeof c.expires && ((d = new Date()), d.setTime(d.getTime() + c.expires));
        d && d.toUTCString && (d = d.toUTCString());
        c.expires = d;
        a = a + "=" + encodeURIComponent(b);
        for (var e in c) if ((b = c[e]) || 0 === b) (a += "; " + e), !0 !== b && (a += "=" + b);
        h.cookie = a;
    }
    function lb() {
        var a = "tmr" + ("" + Math.random()).slice(2);
        try {
            return (K = f.localStorage || null), K.setItem(a, a), K.removeItem(a), !0;
        } catch (b) {
            return (K = null), m && console.warn("[TopMailRu] Error#1.4", b), !1;
        }
    }
    function mb() {
        if (!$) return null;
        for (var a = y.hostname.split(".").reverse(), b, c = 1, d = a.length; c < d; c++) {
            b = a[0];
            for (var e = 1; e <= c; e++) b = a[e] + "." + b;
            var e = "" + r(),
                l = { domain: b, path: "/", expires: 3e5 };
            try {
                J("tmr_tcdhn", e, l);
                var g = Z("tmr_tcdhn"),
                    l = l || {};
                l.expires = -1;
                J("tmr_tcdhn", "", l);
                if (g === e) return b;
            } catch (h) {
                m && console.warn("[TopMailRu] Error#1.8", h);
            }
        }
        return null;
    }
    function aa(a, b) {
        $ && J(a, b, Ba);
        if (la)
            try {
                K.setItem(a, b);
            } catch (c) {
                m && console.warn("[TopMailRu] Error#1.6", c);
            }
    }
    function ma(a) {
        var b;
        if (!(b = $ ? Z(a) : null)) {
            var c;
            if (la)
                a: {
                    try {
                        c = K.getItem(a);
                        break a;
                    } catch (d) {
                        m && console.warn("[TopMailRu] Error#1.5", d);
                    }
                    c = null;
                }
            else c = null;
            b = c;
        }
        return b;
    }
    function Ca(a) {
        var b = ";e=" + escape("detect");
        n(w(a, "/tracker", !1, !1) + b);
    }
    function Da(a, b) {
        if (a.length && null !== b.ecom_data) {
            var c = I(b.ecom_data, !1, !0),
                c = c ? ("" + c).substring(1, c.length - 1) : "";
            if (!(4096 < c.length || -1 === c.search(/\S/))) {
                var d = na("_m", b.ecom_method),
                    e = na("_t", b.ecom_type),
                    l = na("_jst", Ea()),
                    c = "{" + c + d + e + l + "}";
                n(w({ id: a[0] }, "/datalayer", !1, !1) + (";ids=" + escape(a.join())) + (";e=" + escape(c)));
            }
        }
    }
    function na(a, b) {
        var c = ',"' + a + '":';
        if (!b || !b.length) return c + "[]";
        try {
            return c + '["' + b.join('","') + '"]';
        } catch (d) {}
        return c + "false";
    }
    function nb() {
        var a = Z(Fa);
        if (null === a) return null;
        a = a.split("|");
        if (3 !== a.length) return null;
        var b = a[2],
            b = r() - b;
        return 0 > b || b > Ga ? null : { id: a[0], version: a[1] };
    }
    function k() {}
    function Q(a) {
        a && "object" === typeof a && !C && "id" in a && (C = a.id);
    }
    function ob(a) {
        return (a = !D ? void 0 : D[a]) && oa ? a - oa : void 0;
    }
    function Ha() {
        if (D) {
            for (var a = 0, b = "domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "), c = 0; c < b.length; c++) {
                var d = !D ? void 0 : D[b[c]];
                if (0 < d && (d < a || 0 == a)) a = d;
            }
            return a ? a : void 0;
        }
    }
    function R(a) {
        return a && "object" === typeof a && (("id" in a && a.id) || C);
    }
    function w(a, b, c, d) {
        aa(pa, ++L);
        var e = "id" in a ? a.id : C,
            l = "url" in a ? a.url : y.href,
            g = "referrer" in a ? a.referrer : h.referrer,
            k = "title" in a ? a.title : h.title,
            x;
        x = qa;
        null === x && (x = pb());
        x = null !== x ? (x ? 1 : 0) : null;
        var q = "userid" in a ? a.userid : z || 0 === z ? z : void 0,
            u = F ? F : void 0,
            p;
        p = [];
        C && e !== C && p.push("sec");
        "dataLayer" in f && p.push("dl");
        E && p.push(["ecom"].concat(E).join("-"));
        ra && ra.length && p.push(["jst"].concat(ra).join("-"));
        p = p.join(",");
        var s = f.screen,
            n,
            v = new Date().getTimezoneOffset();
        n = "";
        if (f.Intl)
            try {
                n = f.Intl.DateTimeFormat().resolvedOptions().timeZone || "";
            } catch (qb) {
                m && console.warn("[TopMailRu] Error#1.1", qb);
            }
        n = v + "/" + n;
        v = Ia;
        v = null !== v ? v : nb();
        a.start = Ha();
        b =
            b +
            "?js=13" +
            (e ? ";id=" + escape(e) : "") +
            (l ? ";u=" + escape(l) : "") +
            (g ? ";r=" + escape(g) : "") +
            (a.start ? ";st=" + escape(a.start) : "") +
            ("gender" in a ? ";gender=" + escape(a.gender) : "") +
            ("age" in a ? ";age=" + escape(a.age) : "") +
            ("pid" in a ? ";pid=" + escape(a.pid) : "") +
            (void 0 !== q ? ";userid=" + escape(q) : "") +
            (void 0 !== u ? ";uparams=" + escape(I(u, !1, !1)) : "") +
            (d && k ? ";title=" + encodeURIComponent(k) : "") +
            (s ? ";s=" + s.width + "*" + s.height : "") +
            ";vp=";
        e = d = 0;
        h.documentElement && (h.documentElement.clientWidth || h.documentElement.clientHeight)
            ? ((d = h.documentElement.clientWidth), (e = h.documentElement.clientHeight))
            : "number" == typeof f.innerWidth && ((d = f.innerWidth), (e = f.innerHeight));
        b = b + ("" + d + "*" + e) + ";touch=" + rb + ";hds=" + sb + ";frame=" + tb + ";flash=";
        if (null === S)
            if (((S = ""), t.plugins && t.plugins["Shockwave Flash"])) S = t.plugins["Shockwave Flash"].description.split(" ")[2];
            else if (f.ActiveXObject)
                try {
                    var A = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                        A = A.GetVariable("$version"),
                        A = A.split(" ")[1].split(",");
                    S = A[0] + "." + A[1];
                } catch (ub) {
                    m && console.warn("[TopMailRu] Error#1.12", ub);
                }
        A = b + S + ";sid=" + Ja + ";ver=" + Ka + ";tz=" + encodeURIComponent(n);
        if (c) {
            if (!D || !sa) c = "";
            else {
                c = [];
                c.push(sa.type);
                c.push(sa.redirectCount);
                c.push(oa);
                for (b = 0; b < La.length; b++) c.push(ob(La[b]));
                c = c.join("/");
            }
            c = ";nt=" + c;
        } else c = "";
        c = A + c + ("device" in a ? ";device=" + escape(a.device) : "") + ";ni=";
        if (!t || !t.connection) A = "";
        else {
            A = t.connection;
            b = [];
            for (e = 0; e < Ma.length; e++) {
                d = A[Ma[e]];
                if (void 0 !== d)
                    switch (d) {
                        case !0:
                            d = 1;
                            break;
                        case !1:
                            d = 0;
                            break;
                        default:
                            d = ("" + d).replace(/\//g, "_");
                    }
                b.push(d);
            }
            A = b.join("/");
        }
        return (
            c +
            A +
            ("params" in a ? ";params=" + escape(I(a.params, !1, !1)) : "") +
            (null !== x ? ";detect=" + x : "") +
            ($ || la ? ";lvid=" + escape([T, r(), L, M].join(":")) : "") +
            (p ? ";opts=" + escape(p) : "") +
            (v ? ";flocid=" + escape(v.id) + ";flocv=" + escape(v.version) : "") +
            ("version" in a ? ";appver=" + escape(a.version) : "") +
            (N.support ? ";visible=" + N.getValue() : "") +
            ";_=" +
            Math.random()
        );
    }
    function Na(a) {
        a = ";e=" + escape("PVT/" + a);
        for (var b = 0; b < s.length; b++) n(w(s[b], "/tracker", !1, !0) + a);
    }
    function vb() {
        qa = !0;
        Oa(1);
        if (!Pa && !U) {
            U = !0;
            for (var a = 0; a < s.length; a++) Ca(s[a]);
        }
    }
    function wb() {
        Oa(0);
        qa = !1;
    }
    function pb() {
        var a = Z(Qa);
        if (null === a) return null;
        a = a.split("|");
        if (2 !== a.length) return null;
        var b = a[1],
            b = r() - b;
        if (0 > b || b > Ra) return null;
        a = parseInt(a[0], 10);
        return isNaN(a) ? null : a;
    }
    function Oa(a) {
        var b = r();
        a = [a, b].join("|");
        J(Qa, a, { path: "/", expires: Ra });
    }
    function ba() {
        h.addEventListener ? (B(h, "DOMContentLoaded", ba), _tmr.onready()) : h.attachEvent && "complete" === h.readyState && (B(h, "readystatechange", ba), _tmr.onready());
    }
    function Sa() {
        B(f, "load", Sa);
        _tmr.onready();
        _tmr.onload();
    }
    function ca() {
        B(f, "unload", ca);
        B(f, "beforeunload", ca);
        _tmr.unload();
    }
    if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
        var f = window,
            t = navigator,
            h = document,
            y = location,
            V = "string" === typeof y.hostname ? y.hostname : "",
            da = -1 != V.search(/(^|\.)odnoklassniki\.ru$/) || -1 != V.search(/(^|\.)ok\.ru$/),
            ea = -1 != V.search(/(^|\.)vk\.com$/),
            xb = -1 != V.search(/(^|\.)lamoda\.ru$/),
            yb = -1 != V.search(/(^|\.)kommersant\.ru$/),
            zb = "string" === typeof y.search && -1 != y.search.search(/[?&]rb_clickid=/),
            m = "string" === typeof y.search && -1 != y.search.search(/[?&]tmr_debug=1(?:&|$)/),
            Ta = da || ea || xb || yb,
            Ab = !zb,
            Bb = da || ea,
            Cb = da || ea,
            Ua = da || ea,
            Pa = !1,
            za = "POST",
            Aa = "application/x-www-form-urlencoded",
            $ = !(0 === y.hostname.search(/^(\d+.)+\d+$/g) || -1 !== y.hostname.search(/:/g)),
            K = null,
            la = lb(),
            Ba = { domain: mb(), path: "/", expires: 287712e5 };
        (function () {
            var a;
            if ((a = h.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)", "g")))) {
                for (var b = [], c, d = 0, e = a.length; d < e; d++) (c = a[d]), (c = c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/)) && b.push(c.slice(1));
                a = b;
            } else a = null;
            if (a) {
                b = 0;
                for (d = a.length; b < d; b++) (e = a[b][0]), (c = Ba || {}), (c.expires = -1), J(e, "", c);
            }
        })();
        var U = !1,
            qa = null,
            Ra = 864e5,
            Qa = "tmr_detect",
            Db = (function () {
                function a(a, c) {
                    var d = h.createElement("div");
                    d.setAttribute(
                        "class",
                        String.fromCharCode(
                            97,
                            100,
                            118,
                            98,
                            108,
                            111,
                            99,
                            107,
                            32,
                            97,
                            100,
                            118,
                            101,
                            114,
                            116,
                            98,
                            108,
                            111,
                            99,
                            107,
                            32,
                            97,
                            109,
                            109,
                            98,
                            108,
                            111,
                            99,
                            107,
                            32,
                            98,
                            45,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            32,
                            98,
                            45,
                            109,
                            101,
                            100,
                            105,
                            97,
                            45,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            32,
                            112,
                            117,
                            98,
                            95,
                            51,
                            48,
                            48,
                            120,
                            50,
                            53,
                            48,
                            32,
                            112,
                            117,
                            98,
                            95,
                            51,
                            48,
                            48,
                            120,
                            50,
                            53,
                            48,
                            109,
                            32,
                            109,
                            101,
                            100,
                            105,
                            117,
                            109,
                            95,
                            114,
                            101,
                            99,
                            116,
                            97,
                            110,
                            103,
                            108,
                            101,
                            95,
                            51,
                            48,
                            48,
                            95,
                            50,
                            53,
                            48,
                            32,
                            112,
                            117,
                            98,
                            95,
                            55,
                            50,
                            56,
                            120,
                            57,
                            48,
                            32,
                            108,
                            101,
                            97,
                            100,
                            101,
                            114,
                            98,
                            111,
                            97,
                            114,
                            100,
                            95,
                            55,
                            50,
                            56,
                            95,
                            57,
                            48,
                            32,
                            119,
                            105,
                            100,
                            101,
                            95,
                            115,
                            107,
                            121,
                            115,
                            99,
                            114,
                            97,
                            112,
                            101,
                            114,
                            95,
                            49,
                            54,
                            48,
                            95,
                            54,
                            48,
                            48,
                            32,
                            119,
                            105,
                            100,
                            101,
                            95,
                            115,
                            107,
                            121,
                            115,
                            99,
                            114,
                            97,
                            112,
                            101,
                            114,
                            95,
                            49,
                            54,
                            48,
                            120,
                            54,
                            48,
                            48,
                            32,
                            116,
                            101,
                            120,
                            116,
                            45,
                            97,
                            100,
                            32,
                            116,
                            101,
                            120,
                            116,
                            65,
                            100,
                            32,
                            116,
                            101,
                            120,
                            116,
                            95,
                            97,
                            100,
                            32,
                            116,
                            101,
                            120,
                            116,
                            95,
                            97,
                            100,
                            115,
                            32,
                            116,
                            101,
                            120,
                            116,
                            45,
                            97,
                            100,
                            115,
                            32,
                            116,
                            101,
                            120,
                            116,
                            45,
                            97,
                            100,
                            45,
                            108,
                            105,
                            110,
                            107,
                            115,
                            32,
                            97,
                            100,
                            95,
                            116,
                            101,
                            120,
                            116,
                            32,
                            97,
                            100,
                            95,
                            116,
                            101,
                            120,
                            116,
                            32,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            95,
                            116,
                            101,
                            120,
                            116,
                            32,
                            116,
                            101,
                            120,
                            116,
                            45,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            32,
                            98,
                            45,
                            114,
                            98,
                            32,
                            114,
                            98,
                            45,
                            115,
                            108,
                            111,
                            116,
                            32,
                            98,
                            45,
                            112,
                            114,
                            111,
                            109,
                            111,
                            45,
                            97,
                            100,
                            32,
                            105,
                            45,
                            98,
                            114,
                            97,
                            110,
                            100,
                            105,
                            110,
                            103,
                            32,
                            98,
                            114,
                            97,
                            110,
                            100,
                            105,
                            110,
                            103,
                            45,
                            112,
                            32,
                            114,
                            98,
                            45,
                            118,
                            105,
                            100,
                            101,
                            111,
                            45,
                            119,
                            105,
                            100,
                            103,
                            101,
                            116,
                            32,
                            98,
                            45,
                            109,
                            105,
                            109,
                            105,
                            99,
                            45,
                            97,
                            100,
                            118,
                            32,
                            112,
                            109,
                            45,
                            116,
                            111,
                            111,
                            108,
                            98,
                            97,
                            114,
                            95,
                            95,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            32,
                            114,
                            98,
                            95,
                            98,
                            111,
                            100,
                            121,
                            32,
                            115,
                            116,
                            105,
                            99,
                            107,
                            121,
                            45,
                            115,
                            112,
                            114,
                            105,
                            110,
                            103,
                            115,
                            32,
                            97,
                            100,
                            118,
                            95,
                            115,
                            108,
                            111,
                            116,
                            95,
                            49,
                            32,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            95,
                            50,
                            52,
                            48,
                            32,
                            98,
                            108,
                            111,
                            99,
                            107,
                            95,
                            115,
                            104,
                            97,
                            114,
                            101,
                            32,
                            97,
                            99,
                            116,
                            105,
                            111,
                            110,
                            45,
                            45,
                            115,
                            104,
                            97,
                            114,
                            101,
                            32,
                            115,
                            104,
                            97,
                            114,
                            101,
                            108,
                            105,
                            115,
                            116,
                            32,
                            106,
                            115,
                            45,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            32,
                            100,
                            105,
                            114,
                            101,
                            99,
                            116,
                            32,
                            112,
                            99,
                            45,
                            109,
                            105,
                            109,
                            105,
                            99,
                            32,
                            116,
                            103,
                            98,
                            45,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            32,
                            121,
                            97,
                            100,
                            105,
                            114,
                            101,
                            99,
                            116,
                            32,
                            106,
                            115,
                            45,
                            112,
                            114,
                            111,
                            109,
                            111,
                            45,
                            112,
                            111,
                            112,
                            117,
                            112,
                            32,
                            109,
                            45,
                            115,
                            117,
                            98,
                            115,
                            99,
                            114,
                            105,
                            112,
                            116,
                            105,
                            111,
                            110,
                            32,
                            112,
                            45,
                            116,
                            97,
                            114,
                            103,
                            101,
                            116,
                            32,
                            112,
                            45,
                            100,
                            105,
                            114,
                            101,
                            99,
                            116,
                            104,
                            97,
                            99,
                            107,
                            32,
                            114,
                            98,
                            45,
                            102,
                            108,
                            111,
                            97,
                            116,
                            105,
                            110,
                            103,
                            32,
                            116,
                            114,
                            103,
                            45,
                            98,
                            45,
                            98,
                            97,
                            110,
                            110,
                            101,
                            114,
                            45,
                            98,
                            108,
                            111,
                            99,
                            107
                        )
                    );
                    d.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
                    d.setAttribute("id", "trg-b-banners-1");
                    d.setAttribute("data-view", "SlotView.mimic");
                    this.bait = h.body.appendChild(d);
                    this.bait.offsetParent;
                    this.bait.offsetHeight;
                    this.bait.offsetLeft;
                    this.bait.offsetTop;
                    this.bait.offsetWidth;
                    this.bait.clientHeight;
                    this.bait.clientWidth;
                    this.loopNumber = 0;
                    this.fnPositive = a || null;
                    this.fnNegative = c || null;
                    var e = this;
                    setTimeout(function () {
                        e._checkBait.call(e);
                    }, 1);
                }
                a.prototype._checkBait = function () {
                    if (U) this._stop();
                    else {
                        var a = !1;
                        null !== h.body.getAttribute("abp") ||
                        null === this.bait.offsetParent ||
                        0 == this.bait.offsetHeight ||
                        0 == this.bait.offsetLeft ||
                        0 == this.bait.offsetTop ||
                        0 == this.bait.offsetWidth ||
                        0 == this.bait.clientHeight ||
                        0 == this.bait.clientWidth
                            ? (a = !0)
                            : void 0 !== f.getComputedStyle && ((a = f.getComputedStyle(this.bait, null)), (a = "none" == a.getPropertyValue("display") || "hidden" == a.getPropertyValue("visibility")));
                        (!0 === a || 10 <= ++this.loopNumber) && this._stop();
                        var c;
                        if (a && this.fnPositive)
                            try {
                                (c = this.fnPositive), c();
                            } catch (d) {
                                m && console.warn("[TopMailRu] Error#1.9", d);
                            }
                        else if (!a && 10 > this.loopNumber) {
                            var e = this;
                            setTimeout(function () {
                                e._checkBait.call(e);
                            }, 50 * this.loopNumber);
                        } else
                            try {
                                (c = this.fnNegative), c();
                            } catch (l) {
                                m && console.warn("[TopMailRu] Error#1.10", l);
                            }
                    }
                };
                a.prototype._stop = function () {
                    try {
                        h.body.removeChild(this.bait);
                    } catch (a) {
                        m && console.warn("[TopMailRu] Error#1.11", a);
                    }
                };
                return function (b, c) {
                    new a(b, c);
                };
            })(),
            E = null,
            Va = "ecommerce",
            Wa = !1,
            ta = [],
            Eb = [36383, 2540645, 3171181, 3074137, 2057653],
            Fb = [],
            Xa;
        (function () {
            function a(a, b) {
                for (var c = 0, d = b.length; c < d; c++) -1 === a.indexOf(b[c]) && a.push(b[c]);
            }
            function b(b, c, d) {
                for (var e = { ecom_method: [], ecom_type: [], ecom_data: { events: [] } }, h = 0, g = b.length; h < g; h++) {
                    var l = v[b[h]];
                    if (l) {
                        a(e.ecom_method, [b[h]]);
                        for (var f = 0, k = l.length; f < k; f++)
                            for (var m = 0, p = d.length; m < p; m++) {
                                var q = l[f][d[m]];
                                if (q)
                                    for (var n = 0, r = c.length; n < r; n++)
                                        if (-1 !== l[f].type.indexOf(c[n])) {
                                            a(e.ecom_type, [c[n]]);
                                            a(e.ecom_data.events, q);
                                            break;
                                        }
                            }
                    }
                }
                return e;
            }
            function c(a, b, c) {
                if (!a || !c || !(b in v)) return null;
                for (var d, e = 0, h = v[b].length; e < h; e++) if (((d = v[b][e]), c in d && -1 !== d[c].indexOf(a))) return { ecom_method: [b], ecom_type: d.type.slice(), ecom_data: {} };
                return null;
            }
            function d(a) {
                for (var d = [], g, f, p = 0, v = a.length; p < v; p++)
                    if ((f = a[p])) {
                        g = null;
                        try {
                            if (f.ecommerce) g = e(f) || l(f);
                            else if (null === f.ecommerce) g = null;
                            else if (f.event) {
                                var r = { event: f.event, ecommerce: {} };
                                g = e(r) || l(r);
                            } else if ("event" === f[0]) {
                                var u = f[1],
                                    y = f[2],
                                    w = c(u, k, n);
                                w && (w.ecom_data[u] = y);
                                g = w;
                            } else if (f.event === Va)
                                a: {
                                    for (var t = b([h], [q], [s]), z = 0, B = t.ecom_data.events.length; z < B; z++)
                                        if (!f.hasOwnProperty(t.ecom_data.events[z])) {
                                            g = null;
                                            break a;
                                        }
                                    delete t.ecom_data.events;
                                    t.ecom_data[Va] = f;
                                    g = t;
                                }
                        } catch (C) {
                            m && console.warn("[TopMailRu] Error#1.23", C), (g = null);
                        }
                        g && (d.push(g), ta.push(g));
                    }
                if (d.length) {
                    a = 0;
                    for (g = d.length; a < g; a++) Da(fa, d[a]);
                    E || (E = [0, 0]);
                    E[0] += d.length;
                    g = a = 0;
                    for (p = d.length; g < p; g++) a += I(d[g].ecom_data, !1, !0).length;
                    E[1] += a;
                }
            }
            function e(a) {
                var b, d;
                for (d in a.ecommerce)
                    if (a.ecommerce.hasOwnProperty(d) && (b = c(d, h, r))) {
                        if (a.event && (d = c(a.event, h, p))) for (var e = 0, g = b.ecom_type.length; e < g; e++) -1 === d.ecom_type.indexOf(b.ecom_type[e]) && (b.ecom_type.splice(e, 1), g--, e--);
                        b.ecom_data = a.ecommerce;
                        return b;
                    }
                return null;
            }
            function l(a) {
                var b = a.event,
                    d = c(b, h, p);
                d && (d.ecom_data[b] = a.ecommerce);
                return d;
            }
            function g(a) {
                if ((a = f[a]) && "function" === typeof a.push) {
                    d(a);
                    var b = a.push;
                    a.push = function () {
                        var a = b.apply(this, arguments);
                        d([].slice.call(arguments, 0));
                        return a;
                    };
                }
            }
            var h = "push",
                k = "gtag",
                q = "gse",
                r = "inner",
                p = "outer",
                n = "external",
                s = "required",
                v = {};
            v[k] = [
                { type: ["gee"], external: "add checkout checkout_option checkout_progress click detail promo_click remove select_content set_checkout_option view_refund".split(" ") },
                {
                    type: ["ga4"],
                    external: "earn_virtual_currency join_group level_end level_start level_up post_score select_content spend_virtual_currency tutorial_begin tutorial_complete unlock_achievement ad_impression login search share sign_up add_payment_info add_shipping_info add_to_wishlist generate_lead select_item select_promotion view_cart view_item_list".split(
                        " "
                    ),
                },
                { type: ["gee", "ga4"], external: "add_to_cart begin_checkout purchase refund remove_from_cart view_item view_promotion".split(" ") },
            ];
            v[h] = [
                { type: [q], required: ["transactionId", "transactionTotal"] },
                { type: ["ga4"], outer: b([k], ["ga4"], [n]).ecom_data.events },
                {
                    type: ["gee"],
                    inner: "click checkout checkout_option impressions promoClick promoView refund".split(" "),
                    outer: "addToCart checkout checkoutOption productClick productDetail ProductImpressions promotionClick promotionView removeFromCart transactionPush".split(" "),
                },
                { type: ["ym", "gee"], inner: ["add", "detail", "purchase", "remove"] },
            ];
            Xa = function () {
                g("dataLayer");
                Wa = !0;
            };
        })();
        var Ea = (function () {
                var a = [
                    { id: "gtag", globalVars: ["google_tag_manager"] },
                    { id: "ga", globalVars: ["GoogleAnalyticsObject"] },
                    { id: "ym", globalVars: ["Ya", { re: "yaCounter\\d+" }] },
                ];
                return function () {
                    var b;
                    try {
                        b = Object.keys(window).join(",");
                    } catch (c) {
                        b = null;
                    }
                    for (var d = [], e = 0, h = a.length; e < h; e++) {
                        var g;
                        a: {
                            g = a[e].globalVars;
                            for (var f = b, k = 0, m = g.length; k < m; k++) {
                                var n = g[k];
                                if (("string" === typeof n && !(n in window)) || ("string" === typeof n.re && ((f && -1 === f.search(RegExp("($|,)" + n.re + "(,|^)", "m"))) || 1 === m))) {
                                    g = !1;
                                    break a;
                                }
                            }
                            g = !0;
                        }
                        g && d.push(a[e].id);
                    }
                    return d;
                };
            })(),
            ra = Ea(),
            Ga = 864e5,
            Fa = "tmr_floc",
            Ia = null;
        (function (a) {
            try {
                document.interestCohort &&
                    "function" === typeof document.interestCohort &&
                    document.interestCohort().then(
                        function (a) {
                            Ia = { id: a.id, version: a.version };
                            a = [a.id, a.version];
                            var b = r();
                            a = a.concat(b).join("|");
                            J(Fa, a, { path: "/", expires: Ga });
                        },
                        function () {}
                    );
            } catch (b) {}
        })();
        var N = { support: !1 },
            N = (function () {
                function a() {
                    d(l);
                }
                function b() {
                    d(l, q);
                }
                function c() {
                    return g ? !h[g] : null;
                }
                function d(a, b) {
                    var d = r(),
                        g = "undefined" === typeof b ? c() : b;
                    if (null === p[a]) p[a] = { ts: d, state: g, total: 0 };
                    else {
                        var f = p[a];
                        if (f.state !== g) {
                            var h = d - f.ts,
                                l = f.state;
                            f.ts = d;
                            f.state = g;
                            h < e || (l === m ? ((f.total += h), s && s(d, h)) : l === n && t && t(d, h));
                        }
                    }
                }
                var e = 5,
                    l = "auto",
                    g = null,
                    k = null,
                    m = !0,
                    n = !1,
                    q = null;
                "hidden" in h
                    ? ((g = "hidden"), (k = "visibilitychange"))
                    : "mozHidden" in h
                    ? ((g = "mozHidden"), (k = "mozvisibilitychange"))
                    : "webkitHidden" in h
                    ? ((g = "webkitHidden"), (k = "webkitvisibilitychange"))
                    : "msHidden" in h && ((g = "msHidden"), (k = "msvisibilitychange"));
                var p = {};
                p[l] = null;
                var s = (p.user = null),
                    t = null;
                return {
                    support: !!g,
                    auto: function (c, d) {
                        s = c || null;
                        t = d || null;
                        g && (a(), u(h, k, a));
                        u(f, "beforeunload", b);
                        u(f, "unload", b);
                    },
                    set: function (a) {
                        d("user", !!a);
                    },
                    getLog: function () {
                        var a = r(),
                            b = {},
                            c,
                            d;
                        for (d in p) (c = p[d]), (b[d] = c ? c.total : 0), c && c.state && (b[d] += a - c.ts);
                        return b;
                    },
                    getValue: c,
                };
            })();
        N.auto();
        var Ka = "60.3.0",
            ua = 0,
            ga = 0,
            Ja = ya(16),
            z = null,
            F = null,
            ha = 0,
            pa = "tmr_reqNum",
            L = ma(pa),
            L = null === L ? 0 : parseInt(L, 10);
        aa(pa, L);
        var M = ma("tmr_lvid"),
            T = ma("tmr_lvidTS");
        if (null === M || -1 === M.search(/^[0-9a-fA-F]+$/)) M = ya(32);
        aa("tmr_lvid", M);
        if (null === T || -1 === T.search(/^\d+$/)) T = "" + r();
        aa("tmr_lvidTS", T);
        var C = 0,
            s = [],
            va = [],
            ia = [],
            fa = [],
            rb = "ontouchstart" in f || 1 < (t.maxTouchPoints || t.msMaxTouchPoints) ? "1" : "0",
            sb = f.devicePixelRatio || 0,
            tb = f.top === f ? 0 : 1,
            S = null,
            Ya = f.performance || f.mozPerformance || f.msPerformance || f.webkitPerformance || {},
            D = Ya.timing || {},
            sa = Ya.navigation || {},
            La = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(
                " "
            ),
            oa = !D ? void 0 : D.navigationStart,
            Ma = "downlink downlinkMax effectiveType rtt saveData type".split(" "),
            G,
            wa;
        G = function (a, b, c) {
            if (b && "object" === typeof b) {
                var d = ("id" in b && b.id) || C,
                    e = c.title || null,
                    f,
                    g = wa(b, { params: c.required, fn: c.fn });
                if (g.missed.length) console.warn("[TopMailRu]" + (d ? "[" + d + "]" : "") + " Error#1.14", "Unspecified " + ((1 < g.missed.length && g.missed.slice(0, -1).join(", ") + " and ") || "") + g.missed.slice(-1) + " in " + a);
                else {
                    var h = wa(b, { params: c.optional, fn: c.fn });
                    f = [].concat(g.values).concat(h.values);
                    g = [].concat(g.missed).concat(h.missed);
                    c.value && ((b = "value" in b && b.value), !0 !== c.value && (b = b || c.value), b ? f.push("value: " + b) : g.push("value"));
                    c = f.length ? "{ " + f.join(", ") + " }" : "";
                    f = g.length ? "(" + (1 < g.length ? g.slice(0, -1).join(", ") + " and " + g.slice(-1) + " are" : g.slice(-1) + " is") + " empty)" : "";
                    d ? console.info("[TopMailRu][" + d + "]: " + (e || a) + " " + c + " " + f) : console.warn("[TopMailRu] Error#1.15", "Undefined counter ID of " + a + " " + c);
                }
            } else console.warn("[TopMailRu][][" + a + "] Error#1.13");
        };
        wa = function (a, b) {
            var c = [],
                d = [],
                e,
                f,
                g;
            if (b.params)
                for (e in b.params)
                    if (b.params.hasOwnProperty(e) && !1 !== b.params[e])
                        if (((f = e in a && a[e]), !0 !== b.params[e] && (f = f || b.params[e]), f))
                            try {
                                (g = b.fn ? b.fn : null), c.push(e + ': "' + (g ? g(e, f) : f) + '"');
                            } catch (h) {
                                console.warn("[TopMailRu] Error#1.16", h);
                            }
                        else d && d.push(e);
            return { values: c, missed: d };
        };
        k.prototype.callbackOnReady = function (a) {
            m && G("onReady", a, { title: "OnReady callback" });
            a && "object" === typeof a && "function" === typeof a.callback && a.callback.call(a.context || null);
        };
        k.prototype.pageView = function (a) {
            Q(a);
            if (
                a &&
                "object" === typeof a &&
                a.id &&
                (5 > va.length && !X(a.id, va) && (va.push(a.id), !1 !== a.beat && ia.push(a.id), s.push(a), U && Ca(a)), 5 > fa.length && !X(a.id, fa) && (!0 === a.ecom || (!1 !== a.ecom && (X(a.id, Eb) || !X(a.id, Fb)))))
            ) {
                fa.push(a.id);
                var b = [a.id];
                if (Wa) for (var c = 0, d = ta.length; c < d; c++) Da(b, ta[c]);
            }
            m && G("pageView", a, { title: "Page view", optional: { url: y.href } });
            R(a) && (n(w(a, "/counter", !1, !0)), (ga = r()));
        };
        k.prototype.reachGoal = function (a) {
            Q(a);
            m && G("reachGoal", a, { title: "Reach goal", value: !0, required: { goal: !0 } });
            if (R(a) && "goal" in a && a.goal) {
                var b = "";
                "value" in a && a.value && (b = parseInt(a.value) || "");
                n(w(a, "/tracker", !1, !0) + (";e=" + escape("RG:" + b + "/" + a.goal)));
            }
        };
        k.prototype.itemView = function (a) {
            m &&
                G("itemView", a, {
                    title: "Item view",
                    optional: { list: !0, pagetype: !0, productid: !0, totalvalue: !0 },
                    fn: function (a, b) {
                        return ("" + b).replace(/;/g, " ");
                    },
                });
            if (R(a)) {
                var b = a.list || "",
                    c = a.productid || "",
                    d = a.pagetype || "",
                    e = a.totalvalue || 0;
                new Image().src = "https://ad.mail.ru/retarget/?counter=" + (a.id || C) + "&list=" + b + "&productid=" + c + "&pagetype=" + d + "&totalvalue=" + e + "&_=" + Math.random();
                b = "IV:" + e + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                n(w(a, "/tracker", !1, !1) + (";e=" + escape(b)));
            }
        };
        k.prototype.sendEvent = function (a) {
            Q(a);
            m &&
                G("sendEvent", a, {
                    title: "Send event",
                    value: !0,
                    required: { category: !0, action: !0 },
                    optional: { label: !0 },
                    fn: function (a, b) {
                        return ("" + b).substring(0, 300).replace(/;/g, " ");
                    },
                });
            if (R(a) && "category" in a && a.category && "action" in a && a.action) {
                var b = ("" + a.category).substring(0, 300),
                    c = ("" + a.action).substring(0, 300),
                    d = "";
                "label" in a && a.label && (d = ("" + a.label).substring(0, 300));
                var e = "";
                "value" in a && a.value && (e = parseInt(a.value) || "");
                b = "CE:" + e + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                n(w(a, "/tracker", !1, !1) + (";e=" + escape(b)));
            }
        };
        k.prototype.setUserID = function (a) {
            if (null === a || !1 === a || void 0 === a) this.deleteUserID();
            else {
                var b = typeof a;
                "number" !== b && "string" !== b ? m && console.warn("[TopMailRu] Error#1.17", "Invalid user ID in setUserID") : ((z = a), m && console.info("[TopMailRu]: Global user ID = " + z));
            }
        };
        k.prototype.getUserID = function () {
            return z || 0 === z ? z : void 0;
        };
        k.prototype.deleteUserID = function () {
            z = null;
            m && console.info("[TopMailRu]: Reset global user ID to null");
        };
        k.prototype.setUserParams = function (a) {
            if (null === a || !1 === a || void 0 === a) this.deleteUserParams();
            else if (P(a)) {
                try {
                    F = ka(!0, {}, a);
                } catch (b) {
                    m && console.warn("[TopMailRu] Error#1.22", "Invalid user params in setUserParams");
                    return;
                }
                m && console.info("[TopMailRu]: Global user params = " + I(F, !1, !1));
            } else m && console.warn("[TopMailRu] Error#1.21", "Invalid user params in setUserParams");
        };
        k.prototype.getUserParams = function () {
            var a = F ? F : void 0;
            return a ? ka(!0, {}, a) : void 0;
        };
        k.prototype.deleteUserParams = function () {
            F = null;
            m && console.info("[TopMailRu]: Reset global user params to null");
        };
        k.prototype.getClientID = function () {
            var a = M;
            return a || 0 === a ? a : void 0;
        };
        k.prototype._MT_event = function (a, b, c) {
            Q(a);
            m && G(b, a, { title: c });
            R(a) && n(w(a, "/tracker", !1, !0) + (";e=" + escape("MT:/" + b)));
        };
        k.prototype.miniAppEvent = function (a) {
            this._MT_event(a, "miniAppEvent", "VK Mini App Event");
        };
        k.prototype.processEvent = function (a, b) {
            if (a && "object" === typeof a)
                if ("type" in a) {
                    if ("onready" === a.type) {
                        if (b && 0 > b) return;
                        this.callbackOnReady(a);
                    } else if (b && 0 < b) return;
                    switch (a.type) {
                        case "pageView":
                            this.pageView(a);
                            break;
                        case "reachGoal":
                            this.reachGoal(a);
                            break;
                        case "itemView":
                            this.itemView(a);
                            break;
                        case "sendEvent":
                            this.sendEvent(a);
                            break;
                        case "setUserID":
                            "userid" in a && this.setUserID(a.userid);
                            break;
                        case "deleteUserID":
                            this.deleteUserID();
                            break;
                        case "setUserParams":
                            "params" in a && this.setUserParams(a.params);
                            break;
                        case "deleteUserParams":
                            this.deleteUserParams();
                            break;
                        case "miniAppEvent":
                            this.miniAppEvent(a);
                    }
                } else m && console.warn("[TopMailRu] Error#1.19", "Unspecified type of push event");
            else m && console.warn("[TopMailRu] Error#1.18", "Invalid push event");
        };
        k.prototype.push = function (a) {
            for (var b = 0, c = arguments.length; b < c; b++) this.processEvent(arguments[b]);
        };
        var Za = !1;
        k.prototype.onready = function () {
            Za || ((Za = !0), !Pa && !U && Db(vb, wb), Xa());
        };
        var $a = !1;
        k.prototype.onload = function () {
            if (!$a) {
                $a = !0;
                ha = r();
                if (!Cb && 0 < s.length) {
                    for (var a = ";e=" + escape("RT/load") + ";et=" + ha, b = 0; b < s.length; b++) n(w(s[b], "/tracker", !0, !1) + a);
                    ga = ha;
                }
                Ab ||
                    setTimeout(function () {
                        Na(2);
                    }, 2e3);
                Bb ||
                    setTimeout(function () {
                        Na(15);
                    }, 15e3);
            }
        };
        k.prototype.beat = function () {
            if (!Ta && ua) {
                var a = r();
                if (!(12e4 < a - ua)) {
                    if (12e4 < a - ga) for (var b = ";e=" + escape("RT/resend") + ";et=" + ha, c = 0; c < s.length; c++) !1 !== s[c].beat && n(w(s[c], "/tracker", !1, !0) + b);
                    else 0 < ia.length && n("/tracker?" + Y({ js: "13", id: ia[0], e: "RT/beat", sid: Ja, ids: ia.join(), ver: Ka, _: Math.random() }, ";"));
                    ga = a;
                }
            }
        };
        var ab = !1;
        k.prototype.unload = function () {
            if (!ab && ((ab = !0), !Ua)) {
                var a;
                a = (a = Ha()) ? r() - a : void 0;
                a = ";e=" + escape("RT/unload") + ";et=" + r() + (a ? ";pvt=" + escape(a) : "");
                if (N.support) {
                    var b = N.getLog();
                    a += ";vtauto=" + b.auto;
                }
                for (b = 0; b < s.length; b++) n(w(s[b], "/tracker", !1, !1) + a);
            }
        };
        k.prototype.activity = function (a) {
            ua = r();
        };
        var O = _tmr;
        _tmr = new k();
        for (var q = 0, W = O.length, H; q < W; q++) (H = O[q]) && "object" === typeof H && Q(H);
        q = 0;
        for (W = O.length; q < W; q++) (H = O[q]), _tmr.processEvent(H, 1);
        q = 0;
        for (W = O.length; q < W; q++) (H = O[q]), _tmr.processEvent(H, -1);
        if ("complete" === h.readyState || ("loading" !== h.readyState && !h.documentElement.doScroll)) _tmr.onready();
        else h.addEventListener ? u(h, "DOMContentLoaded", ba) : h.attachEvent && u(h, "readystatechange", ba);
        if ("complete" === h.readyState) _tmr.onload();
        else u(f, "load", Sa);
        Ua || (u(f, "unload", ca), u(f, "beforeunload", ca));
        if (!Ta) {
            setInterval(function () {
                _tmr.beat();
            }, 6e4);
            try {
                for (
                    var bb = "scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" "),
                        Gb = function (a) {
                            u(h, a, function () {
                                _tmr.activity(a);
                            });
                        },
                        q = 0;
                    q < bb.length;
                    q++
                )
                    Gb(bb[q]);
                u(f, "scroll", function () {
                    _tmr.activity("scallback");
                });
            } catch (Hb) {
                m && console.warn("[TopMailRu] Error#1.20", Hb);
            }
        }
    }
})();