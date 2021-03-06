"use strict";
! function(e, t, n) {
    var i = function(t, n) {
        function i(e, t, n) {
            var i = n[n.length - 1];
            e.replaceChild(i, t);
            for (var r = n.length - 2; r >= 0; r--) e.insertBefore(n[r], i), i = n[r]
        }

        function r(e, t, n) {
            for (var i = [], r = e, a = Array.isArray(r), o = 0, r = a ? r : r[Symbol.iterator]();;) {
                var l;
                if (a) {
                    if (o >= r.length) break;
                    l = r[o++]
                } else {
                    if (o = r.next(), o.done) break;
                    l = o.value
                }
                var f = l;
                if ("nl" === f.type && t.nl2br) i.push(n.createElement("br"));
                else if (f.isLink && t.check(f)) {
                    var s = t.resolve(f),
                        c = s.formatted,
                        u = s.formattedHref,
                        d = s.tagName,
                        m = s.className,
                        y = s.target,
                        h = s.events,
                        k = s.attributes,
                        v = n.createElement(d);
                    if (v.setAttribute("href", u), m && v.setAttribute("class", m), y && v.setAttribute("target", y), k)
                        for (var g in k) v.setAttribute(g, k[g]);
                    if (h)
                        for (var b in h) v.addEventListener ? v.addEventListener(b, h[b]) : v.attachEvent && v.attachEvent("on" + b, h[b]);
                    v.appendChild(n.createTextNode(c)), i.push(v)
                } else i.push(n.createTextNode(f.toString()))
            }
            return i
        }

        function a(e, t, n) {
            if (!e || e.nodeType !== d) throw new Error("Cannot linkify " + e + " - Invalid DOM Node type");
            var o = t.ignoreTags;
            if ("A" === e.tagName || s.contains(o, e.tagName)) return e;
            for (var l = e.firstChild; l;) {
                switch (l.nodeType) {
                    case d:
                        a(l, t, n);
                        break;
                    case m:
                        var c = l.nodeValue,
                            y = f(c);
                        if (0 === y.length || 1 === y.length && y[0] instanceof u) break;
                        var h = r(y, t, n);
                        i(e, l, h), l = h[h.length - 1]
                }
                l = l.nextSibling
            }
            return e
        }

        function o(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            try {
                i = i || document || e && e.document || global && global.document
            } catch (r) {}
            if (!i) throw new Error("Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the third argument to linkifyElement.");
            return n = new c(n), a(t, n, i)
        }

        function l(t) {
            function n(e) {
                return e = o.normalize(e), this.each(function() {
                    o.helper(this, e, i)
                })
            }
            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t.fn = t.fn || {};
            try {
                i = i || document || e && e.document || global && global.document
            } catch (r) {}
            if (!i) throw new Error("Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the second argument to linkify/jquery");
            "function" != typeof t.fn.linkify && (t.fn.linkify = n, t(i).ready(function() {
                t("[data-linkify]").each(function() {
                    var e = t(this),
                        n = e.data(),
                        i = n.linkify,
                        r = n.linkifyNlbr,
                        a = {
                            attributes: n.linkifyAttributes,
                            defaultProtocol: n.linkifyDefaultProtocol,
                            events: n.linkifyEvents,
                            format: n.linkifyFormat,
                            formatHref: n.linkifyFormatHref,
                            nl2br: !!r && 0 !== r && "false" !== r,
                            tagName: n.linkifyTagname,
                            target: n.linkifyTarget,
                            className: n.linkifyClassName || n.linkifyLinkclass,
                            validate: n.linkifyValidate,
                            ignoreTags: n.linkifyIgnoreTags
                        },
                        o = "this" === i ? e : e.find(i);
                    o.linkify(a)
                })
            }))
        }
        t = "default" in t ? t["default"] : t;
        var f = n.tokenize,
            s = n.options,
            c = s.Options,
            u = n.parser.TOKENS.TEXT,
            d = 1,
            m = 3;
        o.helper = a, o.normalize = function(e) {
            return new c(e)
        };
        try {
            !define && (e.linkifyElement = o)
        } catch (y) {}
        return l
    }(n, t);
    "function" != typeof n.fn.linkify && i(n)
}(window, linkify, jQuery);