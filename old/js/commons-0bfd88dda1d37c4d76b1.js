(self.webpackChunkgatsby_starter_default = self.webpackChunkgatsby_starter_default || []).push([
    [351], {
        6633: function(e, t, n) { e.exports = n(2465) },
        3344: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = n(7202),
                i = n(116),
                a = n(8710),
                u = n(3656),
                c = n(2306),
                s = n(778),
                l = n(1191),
                f = n(8943),
                d = n(6114);
            e.exports = function(e) {
                return new Promise((function(t, n) {
                    var p, M = e.data,
                        g = e.headers,
                        m = e.responseType;

                    function y() { e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p) }
                    r.isFormData(M) && delete g["Content-Type"];
                    var h = new XMLHttpRequest;
                    if (e.auth) {
                        var N = e.auth.username || "",
                            j = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        g.Authorization = "Basic " + btoa(N + ":" + j)
                    }
                    var T = u(e.baseURL, e.url);

                    function D() {
                        if (h) {
                            var r = "getAllResponseHeaders" in h ? c(h.getAllResponseHeaders()) : null,
                                i = { data: m && "text" !== m && "json" !== m ? h.response : h.responseText, status: h.status, statusText: h.statusText, headers: r, config: e, request: h };
                            o((function(e) { t(e), y() }), (function(e) { n(e), y() }), i), h = null
                        }
                    }
                    if (h.open(e.method.toUpperCase(), a(T, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, "onloadend" in h ? h.onloadend = D : h.onreadystatechange = function() { h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:")) && setTimeout(D) }, h.onabort = function() { h && (n(l("Request aborted", e, "ECONNABORTED", h)), h = null) }, h.onerror = function() { n(l("Network Error", e, null, h)), h = null }, h.ontimeout = function() {
                            var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                r = e.transitional || f.transitional;
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", h)), h = null
                        }, r.isStandardBrowserEnv()) {
                        var O = (e.withCredentials || s(T)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                        O && (g[e.xsrfHeaderName] = O)
                    }
                    "setRequestHeader" in h && r.forEach(g, (function(e, t) { void 0 === M && "content-type" === t.toLowerCase() ? delete g[t] : h.setRequestHeader(t, e) })), r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), m && "json" !== m && (h.responseType = e.responseType), "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (p = function(e) { h && (n(!e || e && e.type ? new d("canceled") : e), h.abort(), h = null) }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p))), M || (M = null), h.send(M)
                }))
            }
        },
        2465: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = n(6013),
                i = n(2234),
                a = n(5469);
            var u = function e(t) {
                var n = new i(t),
                    u = o(i.prototype.request, n);
                return r.extend(u, i.prototype, n), r.extend(u, n), u.create = function(n) { return e(a(t, n)) }, u
            }(n(8943));
            u.Axios = i, u.Cancel = n(6114), u.CancelToken = n(4396), u.isCancel = n(7458), u.VERSION = n(9022).version, u.all = function(e) { return Promise.all(e) }, u.spread = n(2744), u.isAxiosError = n(6683), e.exports = u, e.exports.default = u
        },
        6114: function(e) {
            "use strict";

            function t(e) { this.message = e }
            t.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, t.prototype.__CANCEL__ = !0, e.exports = t
        },
        4396: function(e, t, n) {
            "use strict";
            var r = n(6114);

            function o(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) { t = e }));
                var n = this;
                this.promise.then((function(e) {
                    if (n._listeners) {
                        var t, r = n._listeners.length;
                        for (t = 0; t < r; t++) n._listeners[t](e);
                        n._listeners = null
                    }
                })), this.promise.then = function(e) { var t, r = new Promise((function(e) { n.subscribe(e), t = e })).then(e); return r.cancel = function() { n.unsubscribe(t) }, r }, e((function(e) { n.reason || (n.reason = new r(e), t(n.reason)) }))
            }
            o.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, o.prototype.subscribe = function(e) { this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e] }, o.prototype.unsubscribe = function(e) { if (this._listeners) { var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1) } }, o.source = function() { var e; return { token: new o((function(t) { e = t })), cancel: e } }, e.exports = o
        },
        7458: function(e) {
            "use strict";
            e.exports = function(e) { return !(!e || !e.__CANCEL__) }
        },
        2234: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = n(8710),
                i = n(5950),
                a = n(4126),
                u = n(5469),
                c = n(8260),
                s = c.validators;

            function l(e) { this.defaults = e, this.interceptors = { request: new i, response: new i } }
            l.prototype.request = function(e, t) {
                "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = u(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var n = t.transitional;
                void 0 !== n && c.assertOptions(n, { silentJSONParsing: s.transitional(s.boolean), forcedJSONParsing: s.transitional(s.boolean), clarifyTimeoutError: s.transitional(s.boolean) }, !1);
                var r = [],
                    o = !0;
                this.interceptors.request.forEach((function(e) { "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected)) }));
                var i, l = [];
                if (this.interceptors.response.forEach((function(e) { l.push(e.fulfilled, e.rejected) })), !o) { var f = [a, void 0]; for (Array.prototype.unshift.apply(f, r), f = f.concat(l), i = Promise.resolve(t); f.length;) i = i.then(f.shift(), f.shift()); return i }
                for (var d = t; r.length;) {
                    var p = r.shift(),
                        M = r.shift();
                    try { d = p(d) } catch (g) { M(g); break }
                }
                try { i = a(d) } catch (g) { return Promise.reject(g) }
                for (; l.length;) i = i.then(l.shift(), l.shift());
                return i
            }, l.prototype.getUri = function(e) { return e = u(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, r.forEach(["delete", "get", "head", "options"], (function(e) { l.prototype[e] = function(t, n) { return this.request(u(n || {}, { method: e, url: t, data: (n || {}).data })) } })), r.forEach(["post", "put", "patch"], (function(e) { l.prototype[e] = function(t, n, r) { return this.request(u(r || {}, { method: e, url: t, data: n })) } })), e.exports = l
        },
        5950: function(e, t, n) {
            "use strict";
            var r = n(1599);

            function o() { this.handlers = [] }
            o.prototype.use = function(e, t, n) { return this.handlers.push({ fulfilled: e, rejected: t, synchronous: !!n && n.synchronous, runWhen: n ? n.runWhen : null }), this.handlers.length - 1 }, o.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, o.prototype.forEach = function(e) { r.forEach(this.handlers, (function(t) { null !== t && e(t) })) }, e.exports = o
        },
        3656: function(e, t, n) {
            "use strict";
            var r = n(789),
                o = n(7020);
            e.exports = function(e, t) { return e && !r(t) ? o(e, t) : t }
        },
        1191: function(e, t, n) {
            "use strict";
            var r = n(7822);
            e.exports = function(e, t, n, o, i) { var a = new Error(e); return r(a, t, n, o, i) }
        },
        4126: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = n(7989),
                i = n(7458),
                a = n(8943),
                u = n(6114);

            function c(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new u("canceled") }
            e.exports = function(e) { return c(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || a.adapter)(e).then((function(t) { return c(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t }), (function(t) { return i(t) || (c(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) }
        },
        7822: function(e) {
            "use strict";
            e.exports = function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code, status: this.response && this.response.status ? this.response.status : null } }, e }
        },
        5469: function(e, t, n) {
            "use strict";
            var r = n(1599);
            e.exports = function(e, t) {
                t = t || {};
                var n = {};

                function o(e, t) { return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t }

                function i(n) { return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n]) }

                function a(e) { if (!r.isUndefined(t[e])) return o(void 0, t[e]) }

                function u(n) { return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n]) }

                function c(n) { return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0 }
                var s = { url: a, method: a, data: a, baseURL: u, transformRequest: u, transformResponse: u, paramsSerializer: u, timeout: u, timeoutMessage: u, withCredentials: u, adapter: u, responseType: u, xsrfCookieName: u, xsrfHeaderName: u, onUploadProgress: u, onDownloadProgress: u, decompress: u, maxContentLength: u, maxBodyLength: u, transport: u, httpAgent: u, httpsAgent: u, cancelToken: u, socketPath: u, responseEncoding: u, validateStatus: c };
                return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                    var t = s[e] || i,
                        o = t(e);
                    r.isUndefined(o) && t !== c || (n[e] = o)
                })), n
            }
        },
        7202: function(e, t, n) {
            "use strict";
            var r = n(1191);
            e.exports = function(e, t, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
            }
        },
        7989: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = n(8943);
            e.exports = function(e, t, n) { var i = this || o; return r.forEach(n, (function(n) { e = n.call(i, e, t) })), e }
        },
        8943: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = n(4188),
                i = n(7822),
                a = { "Content-Type": "application/x-www-form-urlencoded" };

            function u(e, t) {!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
            var c, s = {
                transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (c = n(3344)), c),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (u(t, "application/json"), function(e, t, n) {
                        if (r.isString(e)) try { return (t || JSON.parse)(e), r.trim(e) } catch (o) { if ("SyntaxError" !== o.name) throw o }
                        return (n || JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function(e) {
                    var t = this.transitional || s.transitional,
                        n = t && t.silentJSONParsing,
                        o = t && t.forcedJSONParsing,
                        a = !n && "json" === this.responseType;
                    if (a || o && r.isString(e) && e.length) try { return JSON.parse(e) } catch (u) { if (a) { if ("SyntaxError" === u.name) throw i(u, this, "E_JSON_PARSE"); throw u } }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) { return e >= 200 && e < 300 },
                headers: { common: { Accept: "application/json, text/plain, */*" } }
            };
            r.forEach(["delete", "get", "head"], (function(e) { s.headers[e] = {} })), r.forEach(["post", "put", "patch"], (function(e) { s.headers[e] = r.merge(a) })), e.exports = s
        },
        9022: function(e) { e.exports = { version: "0.26.0" } },
        6013: function(e) {
            "use strict";
            e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } }
        },
        8710: function(e, t, n) {
            "use strict";
            var r = n(1599);

            function o(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var i;
                if (n) i = n(t);
                else if (r.isURLSearchParams(t)) i = t.toString();
                else {
                    var a = [];
                    r.forEach(t, (function(e, t) { null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) { r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e)) }))) })), i = a.join("&")
                }
                if (i) { var u = e.indexOf("#"); - 1 !== u && (e = e.slice(0, u)), e += (-1 === e.indexOf("?") ? "?" : "&") + i }
                return e
            }
        },
        7020: function(e) {
            "use strict";
            e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
        },
        116: function(e, t, n) {
            "use strict";
            var r = n(1599);
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, o, i, a) {
                    var u = [];
                    u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), !0 === a && u.push("secure"), document.cookie = u.join("; ")
                },
                read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
                remove: function(e) { this.write(e, "", Date.now() - 864e5) }
            } : { write: function() {}, read: function() { return null }, remove: function() {} }
        },
        789: function(e) {
            "use strict";
            e.exports = function(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) }
        },
        6683: function(e, t, n) {
            "use strict";
            var r = n(1599);
            e.exports = function(e) { return r.isObject(e) && !0 === e.isAxiosError }
        },
        778: function(e, t, n) {
            "use strict";
            var r = n(1599);
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } }
                return e = o(window.location.href),
                    function(t) { var n = r.isString(t) ? o(t) : t; return n.protocol === e.protocol && n.host === e.host }
            }() : function() { return !0 }
        },
        4188: function(e, t, n) {
            "use strict";
            var r = n(1599);
            e.exports = function(e, t) { r.forEach(e, (function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) })) }
        },
        2306: function(e, t, n) {
            "use strict";
            var r = n(1599),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, i, a = {};
                return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                        if (a[t] && o.indexOf(t) >= 0) return;
                        a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                    }
                })), a) : a
            }
        },
        2744: function(e) {
            "use strict";
            e.exports = function(e) { return function(t) { return e.apply(null, t) } }
        },
        8260: function(e, t, n) {
            "use strict";
            var r = n(9022).version,
                o = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) { o[e] = function(n) { return typeof n === e || "a" + (t < 1 ? "n " : " ") + e } }));
            var i = {};
            o.transitional = function(e, t, n) {
                function o(e, t) { return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "") }
                return function(n, r, a) { if (!1 === e) throw new Error(o(r, " has been removed" + (t ? " in " + t : ""))); return t && !i[r] && (i[r] = !0, console.warn(o(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, a) }
            }, e.exports = {
                assertOptions: function(e, t, n) {
                    if ("object" != typeof e) throw new TypeError("options must be an object");
                    for (var r = Object.keys(e), o = r.length; o-- > 0;) {
                        var i = r[o],
                            a = t[i];
                        if (a) {
                            var u = e[i],
                                c = void 0 === u || a(u, i, e);
                            if (!0 !== c) throw new TypeError("option " + i + " must be " + c)
                        } else if (!0 !== n) throw Error("Unknown option " + i)
                    }
                },
                validators: o
            }
        },
        1599: function(e, t, n) {
            "use strict";
            var r = n(6013),
                o = Object.prototype.toString;

            function i(e) { return Array.isArray(e) }

            function a(e) { return void 0 === e }

            function u(e) { return "[object ArrayBuffer]" === o.call(e) }

            function c(e) { return null !== e && "object" == typeof e }

            function s(e) { if ("[object Object]" !== o.call(e)) return !1; var t = Object.getPrototypeOf(e); return null === t || t === Object.prototype }

            function l(e) { return "[object Function]" === o.call(e) }

            function f(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]), i(e))
                        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                    else
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
            }
            e.exports = {
                isArray: i,
                isArrayBuffer: u,
                isBuffer: function(e) { return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) },
                isFormData: function(e) { return "[object FormData]" === o.call(e) },
                isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && u(e.buffer) },
                isString: function(e) { return "string" == typeof e },
                isNumber: function(e) { return "number" == typeof e },
                isObject: c,
                isPlainObject: s,
                isUndefined: a,
                isDate: function(e) { return "[object Date]" === o.call(e) },
                isFile: function(e) { return "[object File]" === o.call(e) },
                isBlob: function(e) { return "[object Blob]" === o.call(e) },
                isFunction: l,
                isStream: function(e) { return c(e) && l(e.pipe) },
                isURLSearchParams: function(e) { return "[object URLSearchParams]" === o.call(e) },
                isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) },
                forEach: f,
                merge: function e() {
                    var t = {};

                    function n(n, r) { s(t[r]) && s(n) ? t[r] = e(t[r], n) : s(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n }
                    for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n);
                    return t
                },
                extend: function(e, t, n) { return f(t, (function(t, o) { e[o] = n && "function" == typeof t ? r(t, n) : t })), e },
                trim: function(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") },
                stripBOM: function(e) { return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e }
            }
        },
        2993: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, a) {
                if (e === a) return !0;
                if (e && a && "object" == typeof e && "object" == typeof a) {
                    if (e.constructor !== a.constructor) return !1;
                    var u, c, s, l;
                    if (Array.isArray(e)) {
                        if ((u = e.length) != a.length) return !1;
                        for (c = u; 0 != c--;)
                            if (!i(e[c], a[c])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && a instanceof Map) {
                        if (e.size !== a.size) return !1;
                        for (l = e.entries(); !(c = l.next()).done;)
                            if (!a.has(c.value[0])) return !1;
                        for (l = e.entries(); !(c = l.next()).done;)
                            if (!i(c.value[1], a.get(c.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && a instanceof Set) {
                        if (e.size !== a.size) return !1;
                        for (l = e.entries(); !(c = l.next()).done;)
                            if (!a.has(c.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                        if ((u = e.length) != a.length) return !1;
                        for (c = u; 0 != c--;)
                            if (e[c] !== a[c]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
                    if ((u = (s = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                    for (c = u; 0 != c--;)
                        if (!Object.prototype.hasOwnProperty.call(a, s[c])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (c = u; 0 != c--;)
                        if (("_owner" !== s[c] && "__v" !== s[c] && "__o" !== s[c] || !e.$$typeof) && !i(e[s[c]], a[s[c]])) return !1;
                    return !0
                }
                return e != e && a != a
            }
            e.exports = function(e, t) { try { return i(e, t) } catch (n) { if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1; throw n } }
        },
        4839: function(e, t, n) {
            "use strict";
            var r, o = n(7294),
                i = (r = o) && "object" == typeof r && "default" in r ? r.default : r;

            function a(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var u = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var c, s = [];

                    function l() { c = e(s.map((function(e) { return e.props }))), f.canUseDOM ? t(c) : n && (c = n(c)) }
                    var f = function(e) {
                        var t, n;

                        function o() { return e.apply(this, arguments) || this }
                        n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() { return c }, o.rewind = function() { if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state."); var e = c; return c = void 0, s = [], e };
                        var a = o.prototype;
                        return a.UNSAFE_componentWillMount = function() { s.push(this), l() }, a.componentDidUpdate = function() { l() }, a.componentWillUnmount = function() {
                            var e = s.indexOf(this);
                            s.splice(e, 1), l()
                        }, a.render = function() { return i.createElement(r, this.props) }, o
                    }(o.PureComponent);
                    return a(f, "displayName", "SideEffect(" + function(e) { return e.displayName || e.name || "Component" }(r) + ")"), a(f, "canUseDOM", u), f
                }
            }
        },
        9144: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
                var n, r;
                (0, o.default)(e), "object" === i(t) ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
                var a = encodeURI(e).split(/%..|./).length - 1;
                return a >= n && (void 0 === r || a <= r)
            };
            var r, o = (r = n(8144)) && r.__esModule ? r : { default: r };

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            e.exports = t.default, e.exports.default = t.default
        },
        6883: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
                if ((0, r.default)(e), (t = (0, o.default)(t, s)).require_display_name || t.allow_display_name) { var n = e.match(l); if (n) { var c = n[1]; if (e = e.replace(c, "").replace(/(^<|>$)/g, ""), c.endsWith(" ") && (c = c.substr(0, c.length - 1)), ! function(e) { var t = e.replace(/^"(.+)"$/, "$1"); if (!t.trim()) return !1; if (/[\.";<>]/.test(t)) { if (t === e) return !1; if (!(t.split('"').length === t.split('\\"').length)) return !1 } return !0 }(c)) return !1 } else if (t.require_display_name) return !1 }
                if (!t.ignore_max_length && e.length > 254) return !1;
                var m = e.split("@"),
                    y = m.pop(),
                    h = y.toLowerCase();
                if (t.host_blacklist.includes(h)) return !1;
                var N = m.join("@");
                if (t.domain_specific_validation && ("gmail.com" === h || "googlemail.com" === h)) {
                    var j = (N = N.toLowerCase()).split("+")[0];
                    if (!(0, i.default)(j.replace(/\./g, ""), { min: 6, max: 30 })) return !1;
                    for (var T = j.split("."), D = 0; D < T.length; D++)
                        if (!d.test(T[D])) return !1
                }
                if (!(!1 !== t.ignore_max_length || (0, i.default)(N, { max: 64 }) && (0, i.default)(y, { max: 254 }))) return !1;
                if (!(0, a.default)(y, { require_tld: t.require_tld })) { if (!t.allow_ip_domain) return !1; if (!(0, u.default)(y)) { if (!y.startsWith("[") || !y.endsWith("]")) return !1; var O = y.substr(1, y.length - 2); if (0 === O.length || !(0, u.default)(O)) return !1 } }
                if ('"' === N[0]) return N = N.slice(1, N.length - 1), t.allow_utf8_local_part ? g.test(N) : p.test(N);
                for (var E = t.allow_utf8_local_part ? M : f, v = N.split("."), w = 0; w < v.length; w++)
                    if (!E.test(v[w])) return !1;
                if (t.blacklisted_chars && -1 !== N.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g"))) return !1;
                return !0
            };
            var r = c(n(8144)),
                o = c(n(1175)),
                i = c(n(9144)),
                a = c(n(5045)),
                u = c(n(7539));

            function c(e) { return e && e.__esModule ? e : { default: e } }
            var s = { allow_display_name: !1, require_display_name: !1, allow_utf8_local_part: !0, require_tld: !0, blacklisted_chars: "", ignore_max_length: !1, host_blacklist: [] },
                l = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
                f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
                d = /^[a-z\d]+$/,
                p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
                M = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
                g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
            e.exports = t.default, e.exports.default = t.default
        },
        5045: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
                (0, r.default)(e), (t = (0, o.default)(t, a)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
                !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
                var n = e.split("."),
                    i = n[n.length - 1];
                if (t.require_tld) { if (n.length < 2) return !1; if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(i)) return !1; if (/\s/.test(i)) return !1 }
                if (!t.allow_numeric_tld && /^\d+$/.test(i)) return !1;
                return n.every((function(e) { return !(e.length > 63) && (!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) && (!/[\uff01-\uff5e]/.test(e) && (!/^-|-$/.test(e) && !(!t.allow_underscores && /_/.test(e))))) }))
            };
            var r = i(n(8144)),
                o = i(n(1175));

            function i(e) { return e && e.__esModule ? e : { default: e } }
            var a = { require_tld: !0, allow_underscores: !1, allow_trailing_dot: !1, allow_numeric_tld: !1, allow_wildcard: !1 };
            e.exports = t.default, e.exports.default = t.default
        },
        7539: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; if ((0, o.default)(t), !(n = String(n))) return e(t, 4) || e(t, 6); if ("4" === n) { if (!u.test(t)) return !1; var r = t.split(".").sort((function(e, t) { return e - t })); return r[3] <= 255 } if ("6" === n) return !!s.test(t); return !1 };
            var r, o = (r = n(8144)) && r.__esModule ? r : { default: r };
            var i = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
                a = "(".concat(i, "[.]){3}").concat(i),
                u = new RegExp("^".concat(a, "$")),
                c = "(?:[0-9a-fA-F]{1,4})",
                s = new RegExp("^(" + "(?:".concat(c, ":){7}(?:").concat(c, "|:)|") + "(?:".concat(c, ":){6}(?:").concat(a, "|:").concat(c, "|:)|") + "(?:".concat(c, ":){5}(?::").concat(a, "|(:").concat(c, "){1,2}|:)|") + "(?:".concat(c, ":){4}(?:(:").concat(c, "){0,1}:").concat(a, "|(:").concat(c, "){1,3}|:)|") + "(?:".concat(c, ":){3}(?:(:").concat(c, "){0,2}:").concat(a, "|(:").concat(c, "){1,4}|:)|") + "(?:".concat(c, ":){2}(?:(:").concat(c, "){0,3}:").concat(a, "|(:").concat(c, "){1,5}|:)|") + "(?:".concat(c, ":){1}(?:(:").concat(c, "){0,4}:").concat(a, "|(:").concat(c, "){1,6}|:)|") + "(?::((?::".concat(c, "){0,5}:").concat(a, "|(?::").concat(c, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
            e.exports = t.default, e.exports.default = t.default
        },
        8144: function(e, t) {
            "use strict";

            function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { if (!("string" == typeof e || e instanceof String)) { var t = n(e); throw null === e ? t = "null" : "object" === t && (t = e.constructor.name), new TypeError("Expected a string but received a ".concat(t)) } }, e.exports = t.default, e.exports.default = t.default
        },
        1175: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                return e
            }, e.exports = t.default, e.exports.default = t.default
        },
        9222: function(e, t, n) {
            "use strict";
            n.d(t, { z: function() { return o } });
            var r = n(7294),
                o = function(e) {
                    var t = e.size,
                        n = e.text,
                        o = e.onClick,
                        i = e.type,
                        a = e.url,
                        u = void 0 === a ? "" : a;
                    return u ? r.createElement("a", { className: "btn btn-" + t + " btn-" + i, onClick: o, href: u, target: "_blank", rel: "noopener noreferrer" }, n) : r.createElement("button", { type: "button", className: "btn btn-" + t + " btn-" + i, onClick: o }, n)
                }
        },
        8624: function(e, t, n) {
            "use strict";
            n.d(t, { Z: function() { return M } });
            var r = n(7294),
                o = n(5444),
                i = n(9222),
                a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My41ODEgMWMxLjMyMyAwIDIuNS4yNDQgMy41MjcuNzM4YTUuNTgyIDUuNTgyIDAgMCAxIDIuNDA4IDIuMThjLjU3NC45NTguODUyIDIuMDguODUyIDMuMzU4IDAgMS4yMzgtLjI2NyAyLjMzNi0uODE4IDMuMjg0LS41NS45NTItMS4zNDUgMS42OS0yLjM3OCAyLjIxMy0xLjAzMi41My0yLjI0NS43ODUtMy42Mi43ODUtMS4zMjIgMC0yLjUtLjI0NC0zLjUyNi0uNzM4YTUuNTgyIDUuNTgyIDAgMCAxLTIuNDA4LTIuMThjLS41NzQtLjk1OC0uODUyLTIuMDgtLjg1Mi0zLjM1OCAwLTEuMjM4LjI2Ny0yLjMzNi44MTgtMy4yODMuNTUtLjk1MyAxLjM0NS0xLjY5MSAyLjM3OC0yLjIxNCAxLjAzMi0uNTMgMi4yNDUtLjc4NSAzLjYyLS43ODVabS0uMDM0IDEwLjI5MmMxLjM0NiAwIDIuMzU1LS4zNiAzLjA2My0xLjA1Mi43MDctLjY5MiAxLjA3OC0xLjY2MiAxLjA3OC0yLjk1OCAwLTEuMzAyLS4zNjUtMi4yNzItMS4wNjctMi45NjQtLjcwMi0uNjg2LTEuNy0xLjA1Mi0zLjA0NS0xLjA1Mi0xLjM0NiAwLTIuMzU1LjM2LTMuMDYzIDEuMDUyLS43MDguNjg2LTEuMDc5IDEuNjYyLTEuMDc5IDIuOTU4IDAgMS4zMDIuMzY1IDIuMjcyIDEuMDY3IDIuOTY0LjcwMi42ODYgMS43IDEuMDUyIDMuMDQ2IDEuMDUyWk02LjY5NyAxLjI5IDEgMTMuMjczaDIuNzczTDcuOTU1IDQuMTlsNC4xNzcgOS4wODNoMi44NDJMOS4yNzggMS4yOUg2LjY5NlptMTUuMDg0IDB2Mi40NDFoLTguODhsLTEuMTY3LTIuNDRoMTAuMDQ3Wk01MC45NDUgMy41N2g0LjYzNXY5LjcwNGgyLjYxNlYzLjU3aDQuNjM1VjEuMjlINTAuOTQ1djIuMjc4Wk03My4yMDEgMS4yOWw0LjI3NSA4Ljg2NyA0LjI4MS04Ljg2N2gyLjgzdjExLjk4MmgtMi41VjUuNjk1bC0zLjY2IDcuNTc4aC0xLjk5NUw3Mi43NiA1Ljc0OHY3LjUyNWgtMi40N1YxLjI5MUg3My4yWm0xNy4wNjYgNi45NjF2Mi43MzdoNy43MzJsLS4zODkgMi4yODRoLTkuOTU0VjEuMjkxaDkuOTM3djIuMjc4aC03LjMyNnYyLjRoNi45NzJ2Mi4yODNoLTYuOTcyWk02NC42MDYgMS4yOTFoMi42MTZ2MTEuOTgyaC0yLjYxNlYxLjI5MVpNMjEuNDMgNS45NzRoLTcuNDY1bDEuMTYgMi40NGg2LjMwNXYtMi40NFptMTMuMDY2IDEuMTYzYy40MTgtLjU3LjYyLTEuMjczLjYyLTIuMDk4IDAtMS4yMjYtLjQxMS0yLjE4NS0xLjI3LTIuODMtLjg0LS42MjgtMi4wNy0uOTE4LTMuNjM3LS45MThoLTUuNzcxdjExLjk4MmgyLjUzNFY4LjhoMy40NTJsMi41ODEgNC40OGgyLjk3TDMzIDguMjY0Yy42MzMtLjI2NyAxLjEzNy0uNjQgMS40OTctMS4xMjdabS0yLjUxOC0uOTZjLS4zNzcuMjUtLjk5Mi40MDItMS44OS40MDJoLTMuMTFWMy41MDVoMy4xNDRjLjkyOCAwIDEuNTQzLjE0IDEuODk3LjM3Ny4zMjUuMjE1LjUxLjU3Ni41MSAxLjE0NS0uMDExLjU1Mi0uMjAzLjkxOC0uNTUgMS4xNVptLTEwLjE2NSA3LjA5NmgtNC4zOGwtMS4xNi0yLjQ0aDUuOTE3bC0uMzc3IDIuNDRaIiBmaWxsPSIjMjMyMzIzIi8+PC9zdmc+",
                u = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        n = e[1],
                        u = (0, r.useState)(!0),
                        c = u[0],
                        s = u[1],
                        l = (0, r.useState)(!0),
                        f = l[0],
                        d = l[1],
                        p = (0, r.useState)(!0),
                        M = p[0],
                        g = p[1],
                        m = (0, r.useRef)(0);
                    (0, r.useEffect)((function() {
                        var e = function() {
                            var e = window.scrollY;
                            window.pageYOffset > 100 && m.current < e && M && g(!1), m.current > e && !M && g(!0), m.current = e
                        };
                        return window.addEventListener("scroll", e, { passive: !0 }),
                            function() { return window.removeEventListener("scroll", e) }
                    }), [M]), (0, r.useEffect)((function() {
                        var e = document.querySelector(".body-wrapper");
                        t ? e.classList.add("overflow-hidden") : e.classList.remove("overflow-hidden")
                    }), [t]);
                    var y = (0, r.useCallback)((function() { n(!1) }), []);
                    return r.createElement(r.Fragment, null, r.createElement("nav", { className: "header " + (M ? "" : "nav-hidden") + " " }, r.createElement("div", { className: "mobile-nav " + (t ? "isNavOpen" : "") }, r.createElement("div", { className: "nav-item nav-logo" }, r.createElement("img", { src: a, alt: "" })), r.createElement("div", { className: "hamburger " + (t ? "open" : ""), onClick: function() { n(!t) } }, r.createElement("span", null))), r.createElement("div", { className: "nav container " + (t ? "mobile" : "animations") }, r.createElement("div", { className: "nav-left" }, r.createElement("div", { className: "nav-item nav-logo hidden-mobile" }, r.createElement(o.Link, { to: "/" }, r.createElement("img", { src: a, alt: "" }))), r.createElement("div", { className: "nav-item nav-dropdown", onClick: function() { return s(!c) } }, r.createElement("div", { className: "wrap" }, "Features", r.createElement("svg", { className: "chevron " + (c ? "active" : ""), width: "10", height: "6", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r.createElement("path", { d: "M1 1L5 5L9 1", stroke: "#0B0F27", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }))), r.createElement("div", { className: "dropdown-wrapper" }, r.createElement("div", { className: "dropdown " + (c ? "dropdown-open" : "") }, r.createElement("a", { href: "/#streamline", className: "dropdown-item", onClick: y }, "Streamline all your meetings"), r.createElement("a", { href: "/#centralize", className: "dropdown-item", onClick: y }, "Centralize & prioritize your tasks"), r.createElement("a", { href: "/#zone", className: "dropdown-item", onClick: y }, "Be in the zone")))), r.createElement("a", { href: "https://blog.aerotime.com/", className: "nav-item", target: "_blank", rel: "noopener noreferrer" }, "Blog"), r.createElement("a", { href: "https://new.aerotime.com/", className: "nav-item", target: "_blank", rel: "noopener noreferrer" }, "Changelog"), r.createElement("div", { className: "nav-item nav-dropdown", onClick: function() { return d(!f) } }, r.createElement("div", { className: "wrap" }, "Download", r.createElement("svg", { className: "chevron " + (f ? "active" : ""), width: "10", height: "6", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r.createElement("path", { d: "M1 1L5 5L9 1", stroke: "#0B0F27", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }))), r.createElement("div", { className: "dropdown-wrapper" }, r.createElement("div", { className: "dropdown " + (f ? "dropdown-open" : "") }, r.createElement("a", { href: "https://aerotime.com/downloads/m1", target: "_blank", className: "dropdown-item", onClick: y }, "Download for Apple Silicon Mac"), r.createElement("a", { href: "https://aerotime.com/downloads/intel", target: "_blank", className: "dropdown-item", onClick: y }, "Download for Intel Mac")))), r.createElement("a", { href: "https://www.ycombinator.com/companies/aerotime/jobs", className: "nav-item", target: "_blank", rel: "noopener noreferrer" }, "We're hiring")), r.createElement("div", { className: "nav-right" }, r.createElement("a", { href: "https://app.aerotime.ai/", className: "nav-item hidden-mobile", target: "_blank", rel: "noopener noreferrer" }, "Login"), r.createElement("div", { className: "visible-mobile w-full" }, r.createElement(i.z, { size: "sm", text: "Login", type: "secondary", url: "https://app.aerotime.ai/" })), r.createElement(i.z, { size: "sm", text: "Get Started", type: "primary", url: "https://app.aerotime.ai/" })))))
                },
                c = n(6633),
                s = n.n(c),
                l = n(6883),
                f = n.n(l),
                d = function() {
                    var e = (0, r.useState)(""),
                        t = e[0],
                        n = e[1],
                        o = (0, r.useState)(null),
                        i = o[0],
                        a = o[1],
                        u = (0, r.useCallback)((function(e) { n(e.target.value) }), []),
                        c = (0, r.useCallback)((function(e) { e.preventDefault(), t && f()(t) ? (a(null), s()({ url: "https://api.aerotime.ai/continuum/intercom/create-contact", headers: { "Content-Type": "application/json" }, data: JSON.stringify({ email: t }), method: "POST" }).then((function() { a({ type: "success" }) })).catch((function(e) { a({ type: "error", data: e.toString() }) }))) : a({ type: "error", data: "Please enter a valid email address." }) }), [t]);
                    return r.createElement(r.Fragment, null, r.createElement("form", { onSubmit: c, className: "inputBox" }, r.createElement("input", { className: "input", placeholder: "Enter your email", type: "email", value: t, onChange: u }), r.createElement("button", { type: "submit", className: "btn btn-primary" }, "Subscribe")), "error" === (null == i ? void 0 : i.type) && r.createElement("div", { style: { margin: "-40px 0 40px", color: "red" } }, i.data), "success" === (null == i ? void 0 : i.type) && r.createElement("div", { style: { margin: "-40px 0 40px", color: "green" } }, "Success!"))
                },
                p = function() { return r.createElement("div", { className: "footer" }, r.createElement("div", { className: "footer-wrap container" }, r.createElement("div", { className: "col col-4 flex flex-col" }, r.createElement("img", { loading: "lazy", className: "logo", src: a, alt: "" }), r.createElement("a", { href: "mailto:hello@aerotime.com", className: "link" }, "hello@aerotime.com"), r.createElement("a", { href: "tel:+14154187559", className: "link" }, "+1 (415) 418 - 7559"), r.createElement("p", null, "San Francisco, CA")), r.createElement("div", { className: "links col col-3" }, r.createElement("a", { href: "https://blog.aerotime.com/", className: "link", target: "_blank", rel: "noopener noreferrer" }, "Blog"), r.createElement("a", { href: "https://new.aerotime.com/", className: "link", target: "_blank", rel: "noopener noreferrer" }, "Changelog"), r.createElement("a", { href: "http://help.aerotime.com/", className: "link", target: "_blank", rel: "noopener noreferrer" }, "Support"))), r.createElement("div", { className: "container" }, r.createElement(d, null)), r.createElement("div", { className: "footer-section container" }, r.createElement("div", { className: "footer-section-wrap" }, r.createElement("div", { className: "trademark" }, "© ", (new Date).getFullYear(), " All rights reserved."), r.createElement("div", { className: "left" }, r.createElement("a", { href: "/privacy-policy/", className: "link", target: "_blank", rel: "noopener noreferrer" }, "Privacy policy"), r.createElement("a", { href: "/terms-of-use/", className: "link", target: "_blank", rel: "noopener noreferrer" }, "Terms of use"))), r.createElement("div", { className: "right" }, r.createElement("a", { href: "https://www.linkedin.com/company/aerotime", target: "_blank", rel: "noopener noreferrer" }, r.createElement("img", { loading: "lazy", className: "icon", src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzgxM18xMTU5OCkiPgo8cGF0aCBkPSJNMTcuOTk2OCAxOC45OTg1VjE4Ljk5NzlIMTguMDAwOFYxMy4xMjk5QzE4LjAwMDggMTAuMjU5MiAxNy4zODI4IDguMDQ3ODUgMTQuMDI2OCA4LjA0Nzg1QzEyLjQxMzUgOC4wNDc4NSAxMS4zMzA4IDguOTMzMTkgMTAuODg4OCA5Ljc3MjUySDEwLjg0MjJWOC4zMTU4NUg3LjY2MDE2VjE4Ljk5NzlIMTAuOTczNVYxMy43MDg1QzEwLjk3MzUgMTIuMzE1OSAxMS4yMzc1IDEwLjk2OTIgMTIuOTYyMiAxMC45NjkyQzE0LjY2MTUgMTAuOTY5MiAxNC42ODY4IDEyLjU1ODUgMTQuNjg2OCAxMy43OTc5VjE4Ljk5ODVIMTcuOTk2OFoiIGZpbGw9IiMwQjBGMjciLz4KPHBhdGggZD0iTTIuMjY1NjIgOC4zMTY0MUg1LjU4Mjk2VjE4Ljk5ODRIMi4yNjU2MlY4LjMxNjQxWiIgZmlsbD0iIzBCMEYyNyIvPgo8cGF0aCBkPSJNMy45MjEzMyAyLjk5ODU0QzIuODYwNjcgMi45OTg1NCAyIDMuODU5MiAyIDQuOTE5ODdDMiA1Ljk4MDU0IDIuODYwNjcgNi44NTkyIDMuOTIxMzMgNi44NTkyQzQuOTgyIDYuODU5MiA1Ljg0MjY3IDUuOTgwNTQgNS44NDI2NyA0LjkxOTg3QzUuODQyIDMuODU5MiA0Ljk4MTMzIDIuOTk4NTQgMy45MjEzMyAyLjk5ODU0VjIuOTk4NTRaIiBmaWxsPSIjMEIwRjI3Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfODEzXzExNTk4Ij4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyLjk5ODU0KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=", alt: "" })), r.createElement("a", { href: "https://twitter.com/AerotimeHQ", target: "_blank", rel: "noopener noreferrer" }, r.createElement("img", { loading: "lazy", className: "icon", src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM1NiA4LjI0MDU0QzE3LjAwNjcgNy43Nzg1NCAxNy41NTQgNy4yMDE4NyAxOCA2LjUzNzg3VjYuNTM3MkMxNy40MDQ3IDYuNzk3ODcgMTYuNzcxMyA2Ljk3MTIgMTYuMTEgNy4wNTUyQzE2Ljc5IDYuNjQ5MiAxNy4zMDkzIDYuMDExMiAxNy41NTMzIDUuMjQyNTRDMTYuOTE5MyA1LjYyMDU0IDE2LjIxOTMgNS44ODcyIDE1LjQ3MzMgNi4wMzY1NEMxNC44NzEzIDUuMzk1MiAxNC4wMTMzIDQuOTk4NTQgMTMuMDc3MyA0Ljk5ODU0QzExLjI2MTMgNC45OTg1NCA5Ljc5OTMzIDYuNDcyNTQgOS43OTkzMyA4LjI3OTJDOS43OTkzMyA4LjUzOTIgOS44MjEzMyA4Ljc4OTIgOS44NzUzMyA5LjAyNzJDNy4xNDg2NyA4Ljg5Mzg3IDQuNzM1MzMgNy41ODcyIDMuMTE0IDUuNTk1ODdDMi44MzEzMyA2LjA4NzIgMi42NjQ2NyA2LjY0OTIgMi42NjQ2NyA3LjI1Mzg3QzIuNjY0NjcgOC4zODk4NyAzLjI0OTMzIDkuMzk2NTQgNC4xMjIgOS45Nzk4N0MzLjU5NDY3IDkuOTY5ODcgMy4wNzggOS44MTY1NCAyLjY0IDkuNTc1ODdWOS42MTE4N0MyLjY0IDExLjIwNTkgMy43NzY2NyAxMi41Mjk5IDUuMjY4IDEyLjgzNTJDNS4wMDA2NyAxMi45MDg1IDQuNzEgMTIuOTQzMiA0LjQwOCAxMi45NDMyQzQuMTk4IDEyLjk0MzIgMy45ODYgMTIuOTMxMiAzLjc4NzMzIDEyLjg4NzJDNC4yMTIgMTQuMTg1OSA1LjQxODY3IDE1LjE0MTIgNi44NTIgMTUuMTcyNUM1LjczNiAxNi4wNDUyIDQuMzE4NjcgMTYuNTcxMiAyLjc4NDY3IDE2LjU3MTJDMi41MTYgMTYuNTcxMiAyLjI1OCAxNi41NTkyIDIgMTYuNTI2NUMzLjQ1MzMzIDE3LjQ2MzIgNS4xNzQ2NyAxNy45OTg1IDcuMDMyIDE3Ljk5ODVDMTIuODIwNyAxNy45OTg1IDE2LjU5MzMgMTMuMTY5MiAxNi4zNTYgOC4yNDA1NFoiIGZpbGw9IiMwQjBGMjciLz4KPC9zdmc+Cg==", alt: "" })), r.createElement("a", { href: "https://www.instagram.com/aerotimehq/", target: "_blank", rel: "noopener noreferrer" }, r.createElement("img", { loading: "lazy", className: "icon", src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk3ODUgNy4zMzIwOUM4LjUyODg4IDcuMzMyMDkgNy4zMzAxIDguNTMwODggNy4zMzAxIDkuOTk5ODRDNy4zMzAxIDExLjQ2ODggOC41Mjg4OCAxMi42Njc2IDkuOTk3ODUgMTIuNjY3NkMxMS40NjY4IDEyLjY2NzYgMTIuNjY1NiAxMS40Njg4IDEyLjY2NTYgOS45OTk4NEMxMi42NjU2IDguNTMwODggMTEuNDY2OCA3LjMzMjA5IDkuOTk3ODUgNy4zMzIwOVpNMTcuOTk5MSA5Ljk5OTg0QzE3Ljk5OTEgOC44OTUxMSAxOC4wMDkxIDcuODAwNCAxNy45NDcxIDYuNjk3NjdDMTcuODg1IDUuNDE2ODMgMTcuNTkyOCA0LjI4MDA5IDE2LjY1NjIgMy4zNDM0OEMxNS43MTc2IDIuNDA0ODYgMTQuNTgyOSAyLjExNDY3IDEzLjMwMiAyLjA1MjYzQzEyLjE5NzMgMS45OTA1OSAxMS4xMDI2IDIuMDAwNiA5Ljk5OTg1IDIuMDAwNkM4Ljg5NTEyIDIuMDAwNiA3LjgwMDQxIDEuOTkwNTkgNi42OTc2OCAyLjA1MjYzQzUuNDE2ODQgMi4xMTQ2NyA0LjI4MDA5IDIuNDA2ODYgMy4zNDM0OCAzLjM0MzQ4QzIuNDA0ODYgNC4yODIwOSAyLjExNDY3IDUuNDE2ODMgMi4wNTI2MyA2LjY5NzY3QzEuOTkwNTkgNy44MDI0IDIuMDAwNiA4Ljg5NzEyIDIuMDAwNiA5Ljk5OTg0QzIuMDAwNiAxMS4xMDI2IDEuOTkwNTkgMTIuMTk5MyAyLjA1MjYzIDEzLjMwMkMyLjExNDY3IDE0LjU4MjggMi40MDY4NiAxNS43MTk2IDMuMzQzNDggMTYuNjU2MkM0LjI4MjA5IDE3LjU5NDggNS40MTY4NCAxNy44ODUgNi42OTc2OCAxNy45NDdDNy44MDI0MSAxOC4wMDkxIDguODk3MTMgMTcuOTk5MSA5Ljk5OTg1IDE3Ljk5OTFDMTEuMTA0NiAxNy45OTkxIDEyLjE5OTMgMTguMDA5MSAxMy4zMDIgMTcuOTQ3QzE0LjU4MjkgMTcuODg1IDE1LjcxOTYgMTcuNTkyOCAxNi42NTYyIDE2LjY1NjJDMTcuNTk0OCAxNS43MTc2IDE3Ljg4NSAxNC41ODI4IDE3Ljk0NzEgMTMuMzAyQzE4LjAxMTEgMTIuMTk5MyAxNy45OTkxIDExLjEwNDYgMTcuOTk5MSA5Ljk5OTg0VjkuOTk5ODRaTTkuOTk3ODUgMTQuMTA0NUM3LjcyNjM2IDE0LjEwNDUgNS44OTMxNSAxMi4yNzEzIDUuODkzMTUgOS45OTk4NEM1Ljg5MzE1IDcuNzI4MzUgNy43MjYzNiA1Ljg5NTE1IDkuOTk3ODUgNS44OTUxNUMxMi4yNjkzIDUuODk1MTUgMTQuMTAyNSA3LjcyODM1IDE0LjEwMjUgOS45OTk4NEMxNC4xMDI1IDEyLjI3MTMgMTIuMjY5MyAxNC4xMDQ1IDkuOTk3ODUgMTQuMTA0NVpNMTQuMjcwNyA2LjY4NTY3QzEzLjc0MDMgNi42ODU2NyAxMy4zMTIgNi4yNTczOSAxMy4zMTIgNS43MjcwNEMxMy4zMTIgNS4xOTY2OSAxMy43NDAzIDQuNzY4NDEgMTQuMjcwNyA0Ljc2ODQxQzE0LjgwMSA0Ljc2ODQxIDE1LjIyOTMgNS4xOTY2OSAxNS4yMjkzIDUuNzI3MDRDMTUuMjI5NCA1Ljg1Mjk3IDE1LjIwNDggNS45Nzc3IDE1LjE1NjYgNi4wOTQwOEMxNS4xMDg1IDYuMjEwNDUgMTUuMDM3OSA2LjMxNjE5IDE0Ljk0ODkgNi40MDUyNEMxNC44NTk4IDYuNDk0MjkgMTQuNzU0MSA2LjU2NDkgMTQuNjM3NyA2LjYxMzAyQzE0LjUyMTMgNi42NjExNCAxNC4zOTY2IDYuNjg1ODIgMTQuMjcwNyA2LjY4NTY3VjYuNjg1NjdaIiBmaWxsPSIjMEIwRjI3Ii8+Cjwvc3ZnPgo=", alt: "" }))))) },
                M = function(e) { var t = e.children; return r.createElement("div", { className: "body-wrapper" }, r.createElement(u, null), r.createElement("main", null, t), r.createElement(p, null)) }
        },
        2335: function(e, t, n) {
            "use strict";
            n.d(t, { Z: function() { return he } });
            var r, o, i, a, u = n(7294),
                c = n(5697),
                s = n.n(c),
                l = n(4839),
                f = n.n(l),
                d = n(2993),
                p = n.n(d),
                M = n(6494),
                g = n.n(M),
                m = "bodyAttributes",
                y = "htmlAttributes",
                h = "titleAttributes",
                N = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title" },
                j = (Object.keys(N).map((function(e) { return N[e] })), "charset"),
                T = "cssText",
                D = "href",
                O = "http-equiv",
                E = "innerHTML",
                v = "itemprop",
                w = "name",
                I = "property",
                x = "rel",
                b = "src",
                A = "target",
                L = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" },
                S = "defaultTitle",
                k = "defer",
                z = "encodeSpecialCharacters",
                C = "onChangeClientState",
                U = "titleTemplate",
                Y = Object.keys(L).reduce((function(e, t) { return e[L[t]] = t, e }), {}),
                _ = [N.NOSCRIPT, N.SCRIPT, N.STYLE],
                P = "data-react-helmet",
                Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                F = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
                R = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t }
                }(),
                B = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
                Z = function(e, t) { var n = {}; for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]); return n },
                H = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t },
                q = function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") },
                W = function(e) {
                    var t = X(e, N.TITLE),
                        n = X(e, U);
                    if (n && t) return n.replace(/%s/g, (function() { return Array.isArray(t) ? t.join("") : t }));
                    var r = X(e, S);
                    return t || r || void 0
                },
                G = function(e) { return X(e, C) || function() {} },
                J = function(e, t) { return t.filter((function(t) { return void 0 !== t[e] })).map((function(t) { return t[e] })).reduce((function(e, t) { return B({}, e, t) }), {}) },
                V = function(e, t) {
                    return t.filter((function(e) { return void 0 !== e[N.BASE] })).map((function(e) { return e[N.BASE] })).reverse().reduce((function(t, n) {
                        if (!t.length)
                            for (var r = Object.keys(n), o = 0; o < r.length; o++) { var i = r[o].toLowerCase(); if (-1 !== e.indexOf(i) && n[i]) return t.concat(n) }
                        return t
                    }), [])
                },
                $ = function(e, t, n) {
                    var r = {};
                    return n.filter((function(t) { return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + Q(t[e]) + '"'), !1) })).map((function(t) { return t[e] })).reverse().reduce((function(e, n) {
                        var o = {};
                        n.filter((function(e) {
                            for (var n = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                                var u = i[a],
                                    c = u.toLowerCase(); - 1 === t.indexOf(c) || n === x && "canonical" === e[n].toLowerCase() || c === x && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(u) || u !== E && u !== T && u !== v || (n = u)
                            }
                            if (!n || !e[n]) return !1;
                            var s = e[n].toLowerCase();
                            return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][s] && (o[n][s] = !0, !0)
                        })).reverse().forEach((function(t) { return e.push(t) }));
                        for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                            var u = i[a],
                                c = g()({}, r[u], o[u]);
                            r[u] = c
                        }
                        return e
                    }), []).reverse()
                },
                X = function(e, t) { for (var n = e.length - 1; n >= 0; n--) { var r = e[n]; if (r.hasOwnProperty(t)) return r[t] } return null },
                K = (r = Date.now(), function(e) {
                    var t = Date.now();
                    t - r > 16 ? (r = t, e(t)) : setTimeout((function() { K(e) }), 0)
                }),
                ee = function(e) { return clearTimeout(e) },
                te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || K : n.g.requestAnimationFrame || K,
                ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : n.g.cancelAnimationFrame || ee,
                re = function(e) { return console && "function" == typeof console.warn && console.warn(e) },
                oe = null,
                ie = function(e, t) {
                    var n = e.baseTag,
                        r = e.bodyAttributes,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        u = e.noscriptTags,
                        c = e.onChangeClientState,
                        s = e.scriptTags,
                        l = e.styleTags,
                        f = e.title,
                        d = e.titleAttributes;
                    ce(N.BODY, r), ce(N.HTML, o), ue(f, d);
                    var p = { baseTag: se(N.BASE, n), linkTags: se(N.LINK, i), metaTags: se(N.META, a), noscriptTags: se(N.NOSCRIPT, u), scriptTags: se(N.SCRIPT, s), styleTags: se(N.STYLE, l) },
                        M = {},
                        g = {};
                    Object.keys(p).forEach((function(e) {
                        var t = p[e],
                            n = t.newTags,
                            r = t.oldTags;
                        n.length && (M[e] = n), r.length && (g[e] = p[e].oldTags)
                    })), t && t(), c(e, M, g)
                },
                ae = function(e) { return Array.isArray(e) ? e.join("") : e },
                ue = function(e, t) { void 0 !== e && document.title !== e && (document.title = ae(e)), ce(N.TITLE, t) },
                ce = function(e, t) {
                    var n = document.getElementsByTagName(e)[0];
                    if (n) {
                        for (var r = n.getAttribute(P), o = r ? r.split(",") : [], i = [].concat(o), a = Object.keys(t), u = 0; u < a.length; u++) {
                            var c = a[u],
                                s = t[c] || "";
                            n.getAttribute(c) !== s && n.setAttribute(c, s), -1 === o.indexOf(c) && o.push(c);
                            var l = i.indexOf(c); - 1 !== l && i.splice(l, 1)
                        }
                        for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
                        o.length === i.length ? n.removeAttribute(P) : n.getAttribute(P) !== a.join(",") && n.setAttribute(P, a.join(","))
                    }
                },
                se = function(e, t) {
                    var n = document.head || document.querySelector(N.HEAD),
                        r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
                        o = Array.prototype.slice.call(r),
                        i = [],
                        a = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var n = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === E) n.innerHTML = t.innerHTML;
                                else if (r === T) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var u = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, u)
                        }
                        n.setAttribute(P, "true"), o.some((function(e, t) { return a = t, n.isEqualNode(e) })) ? o.splice(a, 1) : i.push(n)
                    })), o.forEach((function(e) { return e.parentNode.removeChild(e) })), i.forEach((function(e) { return n.appendChild(e) })), { oldTags: o, newTags: i }
                },
                le = function(e) { return Object.keys(e).reduce((function(t, n) { var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n; return t ? t + " " + r : r }), "") },
                fe = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return Object.keys(e).reduce((function(t, n) { return t[L[n] || n] = e[n], t }), t) },
                de = function(e, t, n) {
                    switch (e) {
                        case N.TITLE:
                            return {
                                toComponent: function() { return e = t.title, n = t.titleAttributes, (r = { key: e })[P] = !0, o = fe(n, r), [u.createElement(N.TITLE, o, e)]; var e, n, r, o },
                                toString: function() {
                                    return function(e, t, n, r) {
                                        var o = le(n),
                                            i = ae(t);
                                        return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + q(i, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + q(i, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, n)
                                }
                            };
                        case m:
                        case y:
                            return { toComponent: function() { return fe(t) }, toString: function() { return le(t) } };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, n) {
                                            var r, o = ((r = { key: n })[P] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var n = L[e] || e;
                                                if (n === E || n === T) {
                                                    var r = t.innerHTML || t.cssText;
                                                    o.dangerouslySetInnerHTML = { __html: r }
                                                } else o[n] = t[e]
                                            })), u.createElement(e, o)
                                        }))
                                    }(e, t)
                                },
                                toString: function() {
                                    return function(e, t, n) {
                                        return t.reduce((function(t, r) {
                                            var o = Object.keys(r).filter((function(e) { return !(e === E || e === T) })).reduce((function(e, t) { var o = void 0 === r[t] ? t : t + '="' + q(r[t], n) + '"'; return e ? e + " " + o : o }), ""),
                                                i = r.innerHTML || r.cssText || "",
                                                a = -1 === _.indexOf(e);
                                            return t + "<" + e + ' data-react-helmet="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                                        }), "")
                                    }(e, t, n)
                                }
                            }
                    }
                },
                pe = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        u = e.noscriptTags,
                        c = e.scriptTags,
                        s = e.styleTags,
                        l = e.title,
                        f = void 0 === l ? "" : l,
                        d = e.titleAttributes;
                    return { base: de(N.BASE, t, r), bodyAttributes: de(m, n, r), htmlAttributes: de(y, o, r), link: de(N.LINK, i, r), meta: de(N.META, a, r), noscript: de(N.NOSCRIPT, u, r), script: de(N.SCRIPT, c, r), style: de(N.STYLE, s, r), title: de(N.TITLE, { title: f, titleAttributes: d }, r) }
                },
                Me = f()((function(e) { return { baseTag: V([D, A], e), bodyAttributes: J(m, e), defer: X(e, k), encode: X(e, z), htmlAttributes: J(y, e), linkTags: $(N.LINK, [x, D], e), metaTags: $(N.META, [w, j, O, I, v], e), noscriptTags: $(N.NOSCRIPT, [E], e), onChangeClientState: G(e), scriptTags: $(N.SCRIPT, [b, E], e), styleTags: $(N.STYLE, [T], e), title: W(e), titleAttributes: J(h, e) } }), (function(e) { oe && ne(oe), e.defer ? oe = te((function() { ie(e, (function() { oe = null })) })) : (ie(e), oe = null) }), pe)((function() { return null })),
                ge = (o = Me, a = i = function(e) {
                    function t() { return F(this, t), H(this, e.apply(this, arguments)) }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) { return !p()(this.props, e) }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case N.SCRIPT:
                            case N.NOSCRIPT:
                                return { innerHTML: t };
                            case N.STYLE:
                                return { cssText: t }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            r = e.arrayTypeChildren,
                            o = e.newChildProps,
                            i = e.nestedChildren;
                        return B({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [B({}, o, this.mapNestedChildrenToProps(n, i))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, r = e.child,
                            o = e.newProps,
                            i = e.newChildProps,
                            a = e.nestedChildren;
                        switch (r.type) {
                            case N.TITLE:
                                return B({}, o, ((t = {})[r.type] = a, t.titleAttributes = B({}, i), t));
                            case N.BODY:
                                return B({}, o, { bodyAttributes: B({}, i) });
                            case N.HTML:
                                return B({}, o, { htmlAttributes: B({}, i) })
                        }
                        return B({}, o, ((n = {})[r.type] = B({}, i), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = B({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            n = B({}, n, ((r = {})[t] = e[t], r))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) { return !0 }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return u.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var o = e.props,
                                    i = o.children,
                                    a = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return Object.keys(e).reduce((function(t, n) { return t[Y[n] || n] = e[n], t }), t) }(Z(o, ["children"]));
                                switch (n.warnOnInvalidChildren(e, i), e.type) {
                                    case N.LINK:
                                    case N.META:
                                    case N.NOSCRIPT:
                                    case N.SCRIPT:
                                    case N.STYLE:
                                        r = n.flattenArrayTypeChildren({ child: e, arrayTypeChildren: r, newChildProps: a, nestedChildren: i });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({ child: e, newProps: t, newChildProps: a, nestedChildren: i })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = Z(e, ["children"]),
                            r = B({}, n);
                        return t && (r = this.mapChildrenToProps(t, r)), u.createElement(o, r)
                    }, R(t, null, [{ key: "canUseDOM", set: function(e) { o.canUseDOM = e } }]), t
                }(u.Component), i.propTypes = { base: s().object, bodyAttributes: s().object, children: s().oneOfType([s().arrayOf(s().node), s().node]), defaultTitle: s().string, defer: s().bool, encodeSpecialCharacters: s().bool, htmlAttributes: s().object, link: s().arrayOf(s().object), meta: s().arrayOf(s().object), noscript: s().arrayOf(s().object), onChangeClientState: s().func, script: s().arrayOf(s().object), style: s().arrayOf(s().object), title: s().string, titleAttributes: s().object, titleTemplate: s().string }, i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }, i.peek = o.peek, i.rewind = function() { var e = o.rewind(); return e || (e = pe({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} })), e }, a);
            ge.renderStatic = ge.rewind;
            var me = n(5444),
                ye = function(e) {
                    var t, n, r = e.description,
                        o = e.lang,
                        i = e.meta,
                        a = e.title,
                        c = (0, me.useStaticQuery)("63159454").site,
                        s = r || c.siteMetadata.description,
                        l = null === (t = c.siteMetadata) || void 0 === t ? void 0 : t.title;
                    return u.createElement(ge, { htmlAttributes: { lang: o }, title: a, titleTemplate: l ? l + " - %s" : null, meta: [{ name: "description", content: s }, { property: "og:title", content: a }, { property: "og:description", content: s }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "twitter:creator", content: (null === (n = c.siteMetadata) || void 0 === n ? void 0 : n.author) || "" }, { name: "twitter:title", content: a }, { name: "twitter:description", content: s }, { name: "image", property: "og:image", content: "https://www.aerotime.com/img/aerotime-metaimage.png" }, { name: "twitter:image", content: "https://www.aerotime.com/img/aerotime-metaimage.png" }].concat(i) }, u.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), u.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: !0 }), u.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap", rel: "stylesheet" }), u.createElement("script", { async: !0, src: "https://www.googletagmanager.com/gtag/js?id=G-N77CWY5NTE" }), u.createElement("script", null, "  window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-N77CWY5NTE');"))
                };
            ye.defaultProps = { lang: "en", meta: [], description: "" };
            var he = ye
        }
    }
]);
//# sourceMappingURL=commons-0bfd88dda1d37c4d76b1.js.map